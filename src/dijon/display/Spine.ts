import {Application} from '../application';
import {Game} from '../core';

export class Spine extends PIXI.spine.Spine {
    public static DEFAULT_SPEED: number = 0.0167;// 60 fps;
    public debug: boolean = false;
    public game: Game;
    private _created: boolean = false;
    public onCreate: Phaser.Signal = new Phaser.Signal();
    public onAnimationComplete: Phaser.Signal = null;
    public onMeshSwap: Phaser.Signal = new Phaser.Signal();

    protected _canUpdate: boolean = true;
    protected _paused: boolean = false;
    protected _speed: number = 1;
    protected _skeletonScale: number = 1;

    protected _boundsOffset: Phaser.Point = new Phaser.Point(0, 0);
    protected _boundsWidthScale: number = 1;
    protected _boundsHeightScale: number = 1;
    protected _currentBounds: PIXI.Rectangle = new PIXI.Rectangle();

    public physicsSprite: Phaser.Sprite;
    protected _physicsOffset: { x: number, y: number } = { x: 0, y: 0 };
    protected _physicsEnabled: boolean = false;

    public nonMeshVersion: boolean = false;

    constructor(public assetName: string = '', x: number = 0, y: number = 0, public skeletonScale: number = 1) {
        super(Application.getInstance().game, x, y, Spine.createSpineData(Spine.LOAD_NON_MESH ? (assetName + Spine.NON_MESH_SUFFIX) : assetName, skeletonScale));

        this._skeletonScale = skeletonScale;

        if (Spine.LOAD_NON_MESH) {
            this.nonMeshVersion = true;
        }
        // initialize static
        Spine.initialize();
        Spine.onNonMeshFPS.addOnce(this.loadNonMeshVersion, this);

        this.name = assetName;
        this.skeleton.setToSetupPose();
        this._createBounds();
        this.update(0);
        this.autoUpdate = false;
        this.onAnimationComplete = this.state.onAnimationComplete;
        this.hitArea = new Phaser.Rectangle(0, - this.skeleton.data.height, this.skeleton.data.width, this.skeleton.data.height);
        //this.game.time.events.add(100, this._onCreateInternal, this);

        if (Spine.AUTO_MESH && Spine.LOAD_NON_MESH !== true) {
            Spine.detectAutoMesh();
        }
    }

    private _onCreateInternal(): void {
        this._created = true;
        this._create();
        this.onCreate.dispatch();
        this._canUpdate = true;
    }

    protected _create(): void {
        // to override
    }

    public destroy(): void {
        this.skeleton = null;
        this.state = null;
        this.stateData = null;
        this.spineData = null;

        if (this.slotContainers && this.slotContainers.length > 0) {
            while (this.slotContainers.length > 0) {
                this.slotContainers.shift().destroy(true, true);
            }
        }
        this.slotContainers = null;
        this.removeChildren();
        super.destroy();
    }

    public update(dt: number = Spine.DEFAULT_SPEED): void {
        if (!this._created && this.parent) {
            this._onCreateInternal();
        }
        if (this._paused || !this._canUpdate) {
            return;
        }

        if (this._physicsEnabled === true) {
            this.x = this.physicsSprite.body.position.x + this._physicsOffset.x;
            this.y = this.physicsSprite.body.position.y + this._physicsOffset.y + (this.scale.y > 0 ? this.physicsSprite.body.height : 0);
        }

        super.update(this._speed * dt);


    }

    public initPhysics(type: number, offset: { x?: number, y?: number }): boolean {
        this._createBounds();
        if (type != Phaser.Physics.ARCADE &&
            type != Phaser.Physics.NINJA &&
            type != Phaser.Physics.P2JS)
            return false;

        if (offset.x !== undefined) {
            this._physicsOffset.x = offset.x;
        }

        if (offset.y !== undefined) {
            this._physicsOffset.y = offset.y;
        }

        this.physicsSprite = <Phaser.Sprite>this.parent.addChild(this.game.add.sprite(this.x + this._physicsOffset.x, this.y - this._physicsOffset.y));

        this.physicsSprite.name = this.assetName + '_physicsSprite';
        this.game.physics.enable(this.physicsSprite, type);
        this._physicsEnabled = (this.physicsSprite.body !== null);
        return this._physicsEnabled;
    }

    public disablePhysics(): void {
        this._physicsEnabled = false;
    }

    public enablePhysics(): void {
        this._physicsEnabled = true;
    }

    public loadNonMeshVersion(): void {

        if (this.nonMeshVersion === true) {
            return;
        }
        /// sets the nonMeshVersion flag so this method doesn't run more than once
        //this.visible = false;
        this.nonMeshVersion = true;
        this.alpha = 0;
        // store the tracks and signals
        const tracks = this.state.tracks;
        const signal: Phaser.Signal = this.state.onAnimationComplete;

        // destroy the slot containers
        while (this.children.length > 0) {
            (<Phaser.Group>this.removeChildAt(0)).destroy();
        }
        // reset the spine data
        this.setup(Spine.createSpineData(this.name + Spine.NON_MESH_SUFFIX, this._skeletonScale));
        this.state.apply(this.skeleton);

        // reset the state
        this.state.tracks = tracks;

        // reset the signals
        if (signal !== null) {
            this.state.onAnimationComplete.removeAll();
            this.state.onAnimationComplete.dispose();
            this.state.onAnimationComplete = null;
            this.onAnimationComplete = null;
            this.state.onAnimationComplete = signal;
        } else {
            this.state.onAnimationComplete = new Phaser.Signal();
        }
        this.onAnimationComplete = this.state.onAnimationComplete;

        // force an update
        //this.update();

        // clear the meshed spine assets
        (<Game>this.game).asset.clearSpineAsset(this.name);
        this.game.time.events.add(100, () => { this.alpha = 1 }, this);

        this.onMeshSwap.dispatch();
    }

    public static createSpineData(assetName: string, skeletonScale: number = 1): any {
        const spine = PIXI.spine;
        const spineAtlas = new spine.SpineRuntime.Atlas(Application.getInstance().game.cache.getText(assetName + '.atlas'), this.atlasCallbackFunction);
        const spineJsonParser = new spine.SpineRuntime.SkeletonJsonParser(new spine.SpineRuntime.AtlasAttachmentParser(spineAtlas), skeletonScale);
        const skeletonData = spineJsonParser.readSkeletonData(Application.getInstance().game.cache.getJSON(assetName + '.json'));
        return skeletonData;
    }

    public static atlasCallbackFunction(line, callback) {
        //callback(PIXI.BaseTexture.fromImage('assets/spine/' + line));
        const lineArr = line.split('@' + Application.getInstance().game.resolution + 'x');
        const url = lineArr.join('');

        callback(new PIXI.BaseTexture(Application.getInstance().game.cache.getImage(url), PIXI.scaleModes.DEFAULT));
    }

    public get paused(): boolean {
        return this._paused;
    }

    public set paused(value: boolean) {
        this._paused = value;
    }

    public get speed(): number {
        return this._speed;
    }

    public set speed(value: number) {
        this._speed = value;
    }

    public set boundsOffset(offset: Phaser.Point) {
        this._boundsOffset = offset;
        this._currentBounds = null;
    }

    public get boundsOffset(): Phaser.Point {
        return this._boundsOffset;
    }

    public set boundsWidthScale(scale: number) {
        this._boundsWidthScale = scale;
        this._currentBounds = null;
    }

    public get boundsWidthScale(): number {
        return this._boundsWidthScale;
    }

    public set boundsHeightScale(scale: number) {
        this._boundsHeightScale = scale;
        this._currentBounds = null;
    }

    public get boundsHeightScale(): number {
        return this._boundsHeightScale;
    }

    public getBounds(): PIXI.Rectangle {
        return this._currentBounds || this._createBounds();
    }

    protected _createBounds(): PIXI.Rectangle {
        this._currentBounds = new PIXI.Rectangle(this.x + this._boundsOffset.x * this.scale.x, this.y - (this.skeleton.data.height * this.scale.y) + this._boundsOffset.y * this.scale.y, this.skeleton.data.width * Math.abs(this.scale.x) * this.boundsWidthScale, this.skeleton.data.height * Math.abs(this.scale.y) * this.boundsHeightScale);

        return this._currentBounds;
    }

    // also updates the bounds
    public setScale(x: number = null, y: number = null) {
        if (x !== null) {
            this.scale.x = x;
        }
        if (y !== null) {
            this.scale.y = y;
        }
        this._currentBounds = null;
    }

    public get width(): number {
        return this.getBounds().width;
    }

    public get height(): number {
        return this.getBounds().height;
    }

    public get body(): any {
        if (!this._physicsEnabled) {
            return null;
        }
        return this.physicsSprite.body;
    }

    // static methods
    // auto mesh / non-mesh asset loading
    protected static INITIALIZED: boolean = false;
    protected static game: Game = null;
    protected static nonMeshTimer: Phaser.TimerEvent = null;
    protected static onNonMeshFPS: Phaser.Signal;

    public static LOAD_NON_MESH: boolean = false;

    public static AUTO_MESH: boolean = false;

    public static DEFAULT_NON_MESH_SUFFIX: string = '_nomesh';
    public static NON_MESH_SUFFIX: string = null;

    public static DEFAULT_NON_MESH_FPS: number = 35;
    public static NON_MESH_FPS: number = null;

    public static initialize(): void {
        if (Spine.INITIALIZED) {
            return;
        }
        Spine.INITIALIZED = true;
        Spine.game = Application.getInstance().game;
        Spine.onNonMeshFPS = new Phaser.Signal();
    }

    public static detectAutoMesh(): void {
        Spine.game.time.advancedTiming = true;
        Spine.game.time.events.add(2000, Spine.checkNonMeshThreshold, Spine);
    }

    public static destroyNonMeshTimer(): void {
        if (Spine.nonMeshTimer !== null) {
            Spine.game.time.events.remove(Spine.nonMeshTimer);
            Spine.nonMeshTimer = null;
        }
    }
    public static checkNonMeshThreshold(): void {
        Spine.destroyNonMeshTimer();
        Spine.nonMeshTimer = Spine.game.time.events.repeat(500, 10, Spine.checkAutoMeshFPS, Spine);
        Spine.game.time.events.add(5500, Spine.disableAdvancedTiming, Spine);
    }

    public static checkAutoMeshFPS(): void {
        //console.log(this.game.time.fps, Spine.NON_MESH_FPS)
        if (Spine.game.time.fps < Spine.NON_MESH_FPS) {
            Spine.destroyNonMeshTimer();
            Spine.LOAD_NON_MESH = true;
            Spine.onNonMeshFPS.dispatch();
            Spine.disableAdvancedTiming();
        }
    }

    public static disableAdvancedTiming(): void {
        Spine.game.time.advancedTiming = false;
    }

    public static setAutoMesh(enabled: boolean = true, nonMeshSuffix: string = Spine.DEFAULT_NON_MESH_SUFFIX, nonMeshFPS: number = Spine.DEFAULT_NON_MESH_FPS) {
        Spine.AUTO_MESH = enabled;
        Spine.NON_MESH_SUFFIX = nonMeshSuffix;
        Spine.NON_MESH_FPS = nonMeshFPS;
    }
}