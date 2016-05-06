import {Application} from './application';
import {Device} from './utils';
import {Game, GameObjectFactory} from './core';
import {Mediator} from './mvc';

/**
 * Sprite
 */
export class Sprite extends Phaser.Sprite {
    public game: Game;

    protected _hasComponents: boolean = false;
    protected _componentKeys: string[] = [];
    protected _components: { [componentName: string]: Component } = {};

    constructor(x?: number, y?: number, key?: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number, public name: string = "dSprite", components: Component[] = null) {
        super(Application.getInstance().game, x, y, key, frame);

        if (components)
            this.addComponents(components);
    }
    // Phaser.Sprite overrides
    /**
    * called every frame
    * iterates the components list and calls component.update() on each component
    * @return {void}
    * @override
    */
    public update(): void {
        if (this._hasComponents)
            this.updateComponents();
    }

    /**
    * removes all components
    * @return {Phaser.Group.destroy}
    * @override
    */
    public destroy(): void {
        this.removeAllComponents();
        super.destroy();
    }

    // private methods
    /**
    * initialize variables
    * @return {void}
    */
    protected init(): void { }

    /**
    * add visual elements
    * @return {void}
    */
    protected buildInterface(): void { }

    /**
    * updates the internal list of component keys (so we don't have to call Object.keys() all the time)
    * @return {void}
    */
    private _updateComponentKeys() {
        this._componentKeys = Object.keys(this._components);
        this._hasComponents = this._componentKeys.length > 0;
    }

    // public methods
    /**
    * attaches a list of components to the Dijon.UIGroup
    * @param {Array} components the list of components to add
    */
    public addComponents = function (components: Component[]) {
        if (typeof components.length === 'undefined')
            throw new Error('Dijon.UIGroup components must be an array');

        while (components.length > 0)
            this.addComponent(components.shift());
    };

    /**
    * attaches a component to the Dijon.UIGroup
    * @param {dijon.Component} component to be attached
    */
    public addComponent(component: Component): Component {
        component.setOwner(this);
        component.init();
        component.buildInterface();

        this._components[component.name] = component;
        this._updateComponentKeys();

        return component;
    };

    /**
    * iterates through the list of components and updates each one
    * @return {void}
    */
    public updateComponents(): void {
        this._componentKeys.forEach(
            componentName => {
                this.updateComponent(componentName);
            }
        );
    }

    /**
    * updates an attached component (calls component.update())
    * @param  {String} componentName the name of the component to update
    * @return {void}
    */
    public updateComponent(componentName: string): void {
        this._components[componentName].update();
    }

    /**
    * removes all the components currently attached
    * @return {void}
    */
    public removeAllComponents() {
        while (this._componentKeys.length > 0) {
            this.removeComponent(this._componentKeys.pop());
        }
    }

    /**
    * removes a specific component
    * @param  {String} componentName the name of the component to remove
    * @return {void}
    */
    public removeComponent(componentName: string): void {
        if (typeof this._components[componentName] === 'undefined')
            return;

        this._components[componentName].destroy();
        this._components[componentName] = null;
        delete this._components[componentName];

        this._updateComponentKeys();
    }

    public flatten(delay: number = 0): void {
        if (delay === 0) {
            this.cacheAsBitmap = true;
        } else {
            this.game.time.events.add(delay, () => { this.cacheAsBitmap = true }, this);
        }
    }

    public unFlatten(): void {
        this.cacheAsBitmap = null;
    }

    public get resolution(): number {
        return this.texture.baseTexture.resolution;
    }
}

/**
 * InvisibleButton
 */

export class InvisibleButton extends Sprite {
    private _hitWidth: number;
    private _hitHeight: number;

    constructor(x: number, y: number, name: string, w: number, h: number) {
        super(x, y, null, null, name);
        this.init();
        this.buildInterface();
        this.setSize(w, h);
    }

    public init() {
        this.inputEnabled = true;
    }

    public buildInterface() {
        this._addHitRect();
    }

    // private methods
    private _addHitRect() {
        if (this._hitWidth > 0 && this._hitHeight > 0) {
            this.hitArea = new Phaser.Rectangle(0, 0, this._hitWidth, this._hitHeight);
        }
    }

    // public methods
    public setSize(w, h) {
        this._hitWidth = w || 0;
        this._hitHeight = h || 0;

        this._addHitRect();
    }
}

/**
 * Group
 */
export class Group extends Phaser.Group {
    public game: Game;

    protected _hasComponents: boolean = false;
    protected _componentKeys: string[] = [];
    protected _components: { [componentName: string]: Component } = {};

    protected _mediator: Mediator = null;

    constructor(x: number = 0, y: number = 0, public name: string = "dGroup", addToStage: boolean = false, components: Component[] = null, enableBody?: boolean, physicsBodyType?: number) {
        super(Application.getInstance().game, null, name, addToStage, enableBody, physicsBodyType);

        this.position.set(x, y);

        if (!addToStage)
            this.game.add.existing(this);


        if (components)
            this.addComponents(components);
    }

    // Phaser.Group overrides
    /**
    * called every frame
    * iterates the components list and calls component.update() on each component
    * @return {void}
    * @override
    */
    public update(): void {
        super.update();
        if (this._hasComponents)
            this.updateComponents();
    }

    /**
    * removes all components
    * @return {Phaser.Group.destroy}
    * @override
    */
    public destroy(): void {
        this.removeAllComponents();
        this.removeMediator();
        super.destroy();
    }

    // private methods
    /**
    * initialize variables
    * add mediator, if needed
    * @return {void}
    */
    protected init(): void { }

    /**
    * add visual elements
    * @return {void}
    */
    protected buildInterface(): void { }

    /**
    * updates the internal list of component keys (so we don't have to call Object.keys() all the time)
    * @return {void}
    */
    private _updateComponentKeys() {
        this._componentKeys = Object.keys(this._components);
        this._hasComponents = this._componentKeys.length > 0;
    }

    // public methods
    /**
    * attaches a list of components to the Dijon.UIGroup
    * @param {Array} components the list of components to add
    */
    public addComponents = function (components: Component[]) {
        if (typeof components.length === 'undefined')
            throw new Error('Dijon.UIGroup components must be an array');

        while (components.length > 0)
            this.addComponent(components.shift());
    }

    /**
    * attaches a component to the Dijon.UIGroup
    * @param {dijon.Component} component to be attached
    */
    public addComponent(component: Component): Component {
        component.setOwner(this);
        component.init();
        component.buildInterface();

        this._components[component.name] = component;
        this._updateComponentKeys();

        return component;
    }

    /**
    * iterates through the list of components and updates each one
    * @return {void}
    */
    public updateComponents(): void {
        this._componentKeys.forEach(
            componentName => {
                this.updateComponent(componentName);
            }
        );
    }

    /**
    * updates an attached component (calls component.update())
    * @param  {String} componentName the name of the component to update
    * @return {void}
    */
    public updateComponent(componentName: string): void {
        this._components[componentName].update();
    }

    /**
    * removes all the components currently attached
    * @return {void}
    */
    public removeAllComponents() {
        while (this._componentKeys.length > 0) {
            this.removeComponent(this._componentKeys.pop());
        }
    }

    /**
    * removes a specific component
    * @param  {String} componentName the name of the component to remove
    * @return {void}
    */
    public removeComponent(componentName: string): void {
        if (typeof this._components[componentName] === 'undefined')
            return;

        this._components[componentName].destroy();
        this._components[componentName] = null;
        delete this._components[componentName];

        this._updateComponentKeys();
    }

    public flatten(delay: number = 0): void {
        if (delay === 0) {
            this.cacheAsBitmap = true;
        } else {
            this.game.time.events.add(delay, () => { this.cacheAsBitmap = true }, this);
        }
    }

    public unFlatten(): void {
        this.cacheAsBitmap = null;
    }

    /**
    * removes the mediator, if it exists
    * @return {void}
    */
    public removeMediator(): void {
        if (!this._mediator) {
            return;
        }
        this._mediator.destroy();
        this._mediator = null;
    }

    public get addInternal(): GameObjectFactory {
        this.game.add.targetGroup = this;
        return this.game.add;
    }
}

/**
 * Text
 */
export class Text extends Phaser.Text {
    // constants
    public static DEFAULT_FONT_SIZE: number = 12;
    public static DEFAULT_FONT_COLOR: string = "#000000";
    public static DEFAULT_FONT: string = "Helvetica Neue, Arial";
    public static GLOBAL_PADDING_X: number = 0;
    public static GLOBAL_PADDING_Y: number = 0;

    public game: Game;
    public style: any;
    public onAnimationComplete: Phaser.Signal = new Phaser.Signal();

    protected _canUpdate = false;
    protected _repeatTimer: Phaser.TimerEvent;
    protected _delayTimer: Phaser.TimerEvent;
    protected _lowercaseText: string;
    protected _letterTime: number;
    protected _textLength: number;
    protected _textToAnimate: string[] = [];

    constructor(x: number, y: number, text: string = "", fontName?: string, fontSize: number = Text.DEFAULT_FONT_SIZE, fontColor: string = Text.DEFAULT_FONT_COLOR, fontAlign: string = 'left', wordWrap: boolean = false, width: number = 0, public lineSpacing: number = 0, settings: Object = null) {
        super(
            Application.getInstance().game,
            x,
            y,
            text,
            Text._addSettings({
                font: fontSize + 'px ' + fontName,
                fill: fontColor,
                align: fontAlign,
                wordWrap: wordWrap,
                wordWrapWidth: width
            }, settings)
        );

        this.text = text.replace(/'/g, "\'");
        this._lowercaseText = this.text.toLowerCase();
        this.setResolution();
    }

    // Phaser.Text overrides
    public setText(text: string): Phaser.Text {
        super.setText(text);

        this._lowercaseText = this.text.toLowerCase();
        this.setResolution();

        return this;
    }

    protected setResolution(): void {
        if (!this.game || !this.game.device.cocoonJS) {
            return;
        }
        else if (this.game.device.cocoonJS) {
            // fix for fonts looking really blurry in cocoonJS
            this.resolution = this.game.resolution * this.game.resolution;
        }
    }

    // private methods		
    /**
    * starts the text animation
    * @return {void}
    * @private
    */
    protected _startTextAnimation(): void {
        this._canUpdate = true;
        this._repeatTimer = this.game.time.events.repeat(this._letterTime * 100, this._textLength, this._updateTextAnimation, this);
    }

    protected _updateTextAnimation() {
        if (!this._canUpdate || !this._textToAnimate) {
            return false;
        }
        var index = this._textLength - this._textToAnimate.length;
        this.addColor(this.style.fill, index);
        this.addColor('rgba(0,0,0,0)', index + 1);
        this._textToAnimate.shift();

        if (this._textToAnimate.length === 0) {
            this.onAnimationComplete.dispatch();
        }
    }

    // public methods
    /**
    * sets the color of the entire text
    * @param {String} color css color string (such as "#ff0000")
    * @return {Dijon.UIText.highlightPhrase} calls the highlightPhrase method and "highlights" the entire text string
    */
    public setColor(color: string) {
        return this.highlightPhrase(this.text, color, false);
    }

    /**
    * resets the color to the original fill color
    * @return {Dijon.UIText.highlightPhrase} calls the highlightPhrase method and "highlights" the entire text string
    */
    public resetColor() {
        return this.highlightPhrase(this.text, this.style.fill, false);
    }

    /**
    * changes the colour of a portion of the text
    * @param  {String} phrase        the phrase within the text to change
    * @param  {String} color         css color string (such as "#ff0000")
    * @param  {Boolean} [caseSensitive = false] whether the search for the phrase within this text should be case sensitive
    * @return {void}
    */
    public highlightPhrase(phrase: string, color: string, caseSensitive: boolean = false) {
        let text = caseSensitive ? this.text : this._lowercaseText;

        phrase = caseSensitive ? phrase : phrase.toLowerCase();

        let len = phrase.length;

        let startIndex = text.indexOf(phrase);
        let endIndex = startIndex + len;

        while (startIndex <= endIndex) {
            this.addColor(color, startIndex);
            startIndex++;
        }

        this.addColor(this.style.fill, endIndex);
    }


    /**
    * animates the text in by revealing each character in sequence
    * @param  {Number} [letterTime = 0.1]  the time (in seconds) between each character
    * @param  {int} [delay = 0]            the delay before starting the animation
    */
    public animate(letterTime: number = 0.1, delay: number = 0) {
        this.game.time.events.remove(this._delayTimer);
        this.game.time.events.remove(this._repeatTimer);

        this._letterTime = letterTime;
        this._textLength = this.text.length;
        this._textToAnimate = this.text.split('');

        var startIndex = 0;
        var endIndex = this._textLength;

        while (startIndex <= endIndex) {
            this.addColor('rgba(0,0,0,0)', startIndex);
            startIndex++;
        }

        this._delayTimer = this.game.time.events.add(delay * Phaser.Timer.SECOND, this._startTextAnimation, this);
    }

    /**
    * stops the text animation and clears the timers
    * @return {void}
    */
    public stopAnimating = function () {
        this._canUpdate = false;
        this._textToAnimate = null;
        this.game.time.events.remove(this._delayTimer);
        this.game.time.events.remove(this._repeatTimer);
    }

    /**
    * rounds the position
    * @return {void}
    */
    public roundPixel = function () {
        this.position.set(Math.round(this.x), Math.round(this.y));
    }

    // static methods
    private static _addSettings(obj: Object, settings: Object): Object {
        if (!settings)
            return obj;

        for (var prop in settings) {
            if (settings.hasOwnProperty(prop)) {
                obj[prop] = settings[prop];
            }
        }

        return obj;
    }

    get realHeight(): number {
        return this.scale.y * this.texture.frame.height / this.game.resolution;
    }

    get realWidth(): number {
        return this.scale.x * this.texture.frame.width / this.game.resolution;
    }
}

export class Component {
    public game: Game;
    public name: string;
    public owner: any;

    constructor() {
        this.game = Application.getInstance().game;
        this.name = 'Component';
    }

    public setOwner(owner: Sprite | Group): void {
        this.owner = owner;
    }

    /**
    * initialize the component, set up variables
    * called by the owner first after the component is attached
    * @return {void}
    */
    public init() { }

    /**
    * add visual elements
    * called by the owner after it calls this init method
    * @return {void}
    */
    public buildInterface() { }

    /**
    * called by the owner in its update cycle, every frame
    * @return {void}
    */
    public update() { }

    /**
    * remove any visual elements / signals added
    * owner calls this method in its own destroy method
    * @return {void}
    */
    public destroy() { }
}

export class NineSliceImage extends Group {
    private __width: number;
    private __height: number;
    private _size: number;

    private _displayLayer: Phaser.Group;
    private _inputLayer: Phaser.Group;

    public tl: Phaser.Image;
    public t: Phaser.TileSprite;
    public tr: Phaser.Image;
    public r: Phaser.TileSprite;
    public br: Phaser.Image;
    public b: Phaser.TileSprite;
    public bl: Phaser.Image;
    public l: Phaser.TileSprite;
    public tile: Phaser.TileSprite;

    private _interactiveBacking: Phaser.Image = null;
    private _inputEnabled: boolean = false;

    private _currentBounds: PIXI.Rectangle = null;

    constructor(x: number, y: number, width: number, height: number, public key: string, public texturePath: string, public fillMiddle: boolean = true, public topHeight?: number, public rightWidth?: number, public bottomHeight?: number, public leftWidth?: number) {
        super(x, y);

        this.__width = Math.round(width);
        this.__height = Math.round(height);

        this._build();
        this.game.time.events.add(10, this._flatten, this);
    }

    private _build(): void {
        this._inputLayer = this.add(this.game.add.group());
        this._displayLayer = this.add(this.game.add.group());

        this.tl = <Phaser.Image>this._displayLayer.add(this.game.add.image(0, 0, this.key, this.texturePath + '/tl'));

        this.tr = <Phaser.Image>this._displayLayer.add(this.game.add.image(this.__width, 0, this.key, this.texturePath + '/tr'));

        this.t = <Phaser.TileSprite>this._displayLayer.add(this.game.add.tileSprite(this.tl.getBounds().width, 0, this.__width - this.tl.getBounds().width - this.tr.getBounds().width, this.topHeight || this.tl.getBounds().height, this.key, this.texturePath + '/t'));

        this.l = <Phaser.TileSprite>this._displayLayer.add(this.game.add.tileSprite(0, this.tl.getBounds().height, this.leftWidth || this.tl.getBounds().width, 100, this.key, this.texturePath + '/l'));

        this.bl = <Phaser.Image>this._displayLayer.add(this.game.add.image(0, this.__height, this.key, this.texturePath + '/bl'));

        this.l.height = this.__height - this.tl.getBounds().height - this.bl.getBounds().height;

        this.b = <Phaser.TileSprite>this._displayLayer.add(this.game.add.tileSprite(this.bl.getBounds().width, this.__height, 100, this.bottomHeight || this.bl.getBounds().height, this.key, this.texturePath + '/b'));

        this.br = <Phaser.Image>this._displayLayer.add(this.game.add.image(this.__width, this.__height, this.key, this.texturePath + '/br'));

        this.b.width = this.__width - this.bl.getBounds().width - this.br.getBounds().width;
        this.r = <Phaser.TileSprite>this._displayLayer.add(this.game.add.tileSprite(this.__width, this.tr.getBounds().height, this.rightWidth || this.tr.getBounds().width, this.__height - this.tl.getBounds().height - this.br.getBounds().height, this.key, this.texturePath + '/r'));

        this.tr.setPivot('tr');
        this.r.setPivot('tr');

        this.br.setPivot('br');
        this.b.setPivot('bl');
        this.bl.setPivot('bl');

        if (this.fillMiddle) {
            this.tile = <Phaser.TileSprite>this._displayLayer.add(this.game.add.tileSprite(this.tl.getBounds().width - 1, this.tl.getBounds().height - 1, this.__width - this.tl.getBounds().width - this.tr.getBounds().width + 2, this.__height - this.tl.getBounds().height - this.br.getBounds().height + 4, this.key, this.texturePath + '/tile'));
            this.sendToBack(this.tile);
        }
    }

    private _addInteractiveBacking(): void {
        const gfx = this.game.add.graphics();
        gfx.beginFill(0xFF0000, 0);
        gfx.drawRect(this.x, this.y, this.__width, this.__height);
        gfx.endFill();

        this._interactiveBacking = this._inputLayer.add(this.game.add.image(0, 0, gfx.generateTexture()));

        this._interactiveBacking.inputEnabled = true;

        this.game.world.remove(gfx);
    }

    private _setSize(): void {
        this._unflatten();

        this.t.width = this.b.width = this.__width - this.tl.getBounds().width - this.tr.getBounds().width;
        this.r.x = this.tr.x = this.br.x = this.__width;
        this.l.height = this.r.height = this.__height - this.tr.getBounds().height - this.bl.getBounds().height;
        this.bl.y = this.b.y = this.br.y = this.__height;

        if (this.fillMiddle) {
            this.tile.width = this.__width - this.tr.getBounds().width - this.tl.getBounds().width + 4
            this.tile.height = this.__height - this.tl.getBounds().height - this.bl.getBounds().height + 4;
        }

        this._interactiveBacking.width = this.__width;
        this._interactiveBacking.height = this.__height;

        this.game.time.events.add(10, this._flatten, this);
    }

    private _addInput(): void {
        if (!this._interactiveBacking) {
            this._addInteractiveBacking();
        }
    }

    private _removeInput(): void {
        if (!this._interactiveBacking) {
            return;
        }
        this._interactiveBacking.inputEnabled = false;
    }

    private _unflatten(): void {
        this._displayLayer.cacheAsBitmap = null;
    }

    private _flatten(): void {
        this._displayLayer.cacheAsBitmap = true;//this.game.renderType === Phaser.WEBGL;
    }

    public set inputEnabled(value: boolean) {
        this._inputEnabled = value;
        if (this._inputEnabled) {
            this._addInput();
        } else {
            this._removeInput();
        }
    }

    public get events(): Phaser.Events {
        if (!this._interactiveBacking || !this._interactiveBacking.inputEnabled) {
            return null;
        }
        return this._interactiveBacking.events;
    }

    public get input(): Phaser.InputHandler {
        return this._interactiveBacking.input;
    }

    public set hSize(value: number) {
        this.__width = value;
        this._setSize();
    }

    public set vSize(value: number) {
        this.__height = value;
        this._setSize();
    }

    public get hSize(): number {
        return this.__width;
    }

    public get vSize(): number {
        return this.__height;
    }

    public setSize(width: number, height: number): void {
        this.__width = width;
        this.__height = height;
        this._setSize();
    }
}


// ADDING SPINE //
import * as spine from "./spine/spine";
import * as atlas from "./spine/atlas";
import {RenderWebGL} from "./spine/render-webgl";
import {RenderCtx2D} from "./spine/render-ctx2d";
import { mat4x4Ortho, mat4x4Translate, mat4x4RotateZ, mat4x4Scale } from './spine/render-webgl';

export class Spine extends Sprite {
    public debug: boolean = false;
    public sWidth: number;
    public sHeight: number;
    public spineAnimations: string[];

    public onAnimationComplete: Phaser.Signal = new Phaser.Signal();

    protected spine_data: spine.Data;
    protected atlas_data: atlas.Data;
    protected images: { [image_key: string]: HTMLImageElement };
    protected spine_pose: spine.Pose;
    protected render_webgl: RenderWebGL
    protected render_ctx2d: RenderCtx2D;
    protected bmd: Phaser.BitmapData;
    protected img: Phaser.Image = null;
    protected frameAnimations: { [key: string]: { sprite: Phaser.Sprite, boneName: string, props?: { x?: number, y?: number, angle?: number } } } = {};
    protected frameAnimationKeys: string[] = [];

    private _bounds: PIXI.Rectangle = new PIXI.Rectangle();
    private _canUpdate: boolean = false;
    private _paused: boolean = false;
    private _speed: number = 1;
    private _fps: number = 0;

    constructor(public assetName: string = '', x: number = 0, y: number = 0, width: number = 0, height: number = 0, public skin: string = 'default', public anim: string = '', public hOffset: number = 0, public vOffset: number = 0) {
        super(x, y, null, null, 'spine_' + assetName);

        const json_key = assetName + '.json';
        const atlas_key = assetName + '.atlas';
        const image_key = assetName + '.png';

        if (width === 0) {
            width = this.game.width;
        }
        if (height === 0) {
            height = this.game.height;
        }

        this.sWidth = width;
        this.sHeight = height;

        this.spine_data = new spine.Data().load(this.game.cache.getJSON(json_key));
        this.spineAnimations = this.spine_data.anim_keys;
        this.atlas_data = new atlas.Data().importAtlasText(this.game.cache.getText(atlas_key));
        this.images = {};
        this.images[image_key] = this.game.cache.getImage(image_key);

        this.spine_pose = new spine.Pose(this.spine_data);
        this.spine_pose.setSkin(skin);

        //if (this.spineAnimations.indexOf(anim) < 0) { 
        // anim = this.spineAnimations[0];
        //}

        this.animation = anim;
        this.spine_pose.onComplete.add(this._onAnimationComplete, this);

        //this.spine_pose.setAnim(anim);
        /*
        if (this.game.renderType === Phaser.WEBGL) {
            const gl = (<PIXI.WebGLRenderer>this.game.renderer).gl;
            this.render_webgl = new RenderWebGL(gl);
            this.render_webgl.loadData(this.spine_data, this.atlas_data, this.images);
        } else if (this.game.renderType === Phaser.CANVAS) {
            this.bmd = this.game.add.bitmapData(width, height);
            this.render_ctx2d = new RenderCtx2D(this.bmd.ctx);
            this.render_ctx2d.loadData(this.spine_data, this.atlas_data, this.images);
            this.loadTexture(this.bmd);
        } else {
            console.log("TODO");
        }
        */

        this.bmd = this.game.add.bitmapData(width, height);
        this.render_ctx2d = new RenderCtx2D(this.bmd.ctx);
        this.render_ctx2d.loadData(this.spine_data, this.atlas_data, this.images);
        this.loadTexture(this.bmd);

        this.speed = 1;

        this._canUpdate = true;
    }

    public destroy(): void {
        if (this.game.renderType === Phaser.WEBGL) {
            this.render_webgl.dropData(this.spine_data, this.atlas_data);
            delete this.render_webgl;
        } else if (this.game.renderType === Phaser.CANVAS) {
            this.render_ctx2d.dropData(this.spine_data, this.atlas_data);
            delete this.render_ctx2d;
        } else {
            console.log("TODO");
        }

        delete this.spine_data;
        delete this.spine_pose;
        delete this.images;

        super.destroy();
    }


    public update(): void {
        if (!this._canUpdate) {
            return;
        }
        if (this._paused) {
            return;
        }
        this.render();
        this.spine_pose.update(this._fps);
    }

    public render(): void {
        this.spine_pose.strike();
        this.frameAnimationKeys.forEach(this._updateFrameAnimationByName, this);
        this.bmd.ctx.save();
        this.bmd.ctx.clearRect(0, 0, this.bmd.width, this.bmd.height);
        this.bmd.ctx.translate(this.hOffset, this.vOffset + this.bmd.height);
        this.bmd.ctx.scale(1.0, -1.0); // x: right, y: up
        this.bmd.ctx.globalAlpha = this.worldAlpha;
        this.render_ctx2d.drawPose(this.spine_pose, this.atlas_data);
        this.bmd.ctx.restore();
        this.bmd.dirty = true;
    }
    // public _renderWebGL(renderSession: any): void {
    //     const gl /*: WebGLRenderingContext*/ = renderSession.gl;
    //     this.spine_pose.strike();
    //     const gl_projection = this.render_webgl.gl_projection;
    //     const px = renderSession.renderer.projection.x;
    //     const py = renderSession.renderer.projection.y;
    //     mat4x4Ortho(gl_projection, -px, px, -py, py, -1, 1);
    //     const hoff = this.scale.x === -1 ? this.sWidth - this.hOffset : this.hOffset;
    //     mat4x4Translate(gl_projection, this.x - hoff -this.sWidth * 0.5, this.worldPosition.y + this.sHeight * 0.5, 0.0);
    //     mat4x4RotateZ(gl_projection, this.rotation);
    //     mat4x4Scale(gl_projection, this.scale.x, this.scale.y, 1.0);
    //     mat4x4Scale(gl_projection, 1.0, -1.0, 1.0); // x: right, y: up
    //     const gl_color = this.render_webgl.gl_color;
    //     gl_color[3] = this.worldAlpha;
    //     this.render_webgl.drawPose(this.spine_pose, this.atlas_data);
    // }

    // public _renderCanvas(renderSession: any): void {
    //     this.spine_pose.strike();
    //     this.bmd.ctx.save();
    //     this.bmd.ctx.clearRect(0, 0, this.bmd.width, this.bmd.height);
    //     this.bmd.ctx.translate(this.hOffset, this.vOffset + this.bmd.height);
    //     this.bmd.ctx.scale(1.0, -1.0); // x: right, y: up
    //     this.bmd.ctx.globalAlpha = this.worldAlpha;
    //     this.render_ctx2d.drawPose(this.spine_pose, this.atlas_data);
    //     this.bmd.ctx.restore();
    //     PIXI.Sprite.prototype['_renderCanvas'].call(this, renderSession);
    // }

    public debugDraw(): void {
        if (this.debug) {
            if (this.game.renderType === Phaser.CANVAS) {
                this.render_ctx2d.drawDebugPose(this.spine_pose, this.atlas_data);
            }
        }
    }

    public nextAnimation(): void {
        const currentAnimationName = this.animation;
        let animationIndex = this.spineAnimations.indexOf(currentAnimationName);
        animationIndex++;
        if (animationIndex === this.spineAnimations.length) {
            animationIndex = 0;
        }
        this.animation = this.spineAnimations[animationIndex];
    }

    // private methods
    private _onAnimationComplete(): void {
        this.onAnimationComplete.dispatch(this.spine_pose.curAnim().name);
    }

    private _updateFrameAnimationByName(animName: string) {
        this._updateFrameAnimation(this.frameAnimations[animName]);
    }

    private _updateFrameAnimation(anim: { sprite: Phaser.Sprite, boneName: string, props?: { x?: number, y?: number, angle?: number } }): void {
        const sprite = anim.sprite;
        let bone = this.spine_pose.bones[anim.boneName];
        let x: number = bone.local_space.position.x + anim.props.x, y: number = bone.local_space.position.y + anim.props.y, angle: number = bone.local_space.rotation.deg + anim.props.angle,
            scale: { x: number, y: number } = bone.local_space.scale;
        if (bone.parent_key !== undefined) {
            while (bone && bone !== undefined && bone.parent_key !== undefined) {
                bone = this.spine_pose.bones[bone.parent_key];
                if (bone === undefined) {
                    break;
                }
                x += bone.local_space.position.x;
                y += bone.local_space.position.y;
                angle += bone.local_space.rotation.deg;
                scale.x *= bone.local_space.scale.x;
                scale.y *= bone.local_space.scale.y;
            }
        }

        sprite.x = x;
        sprite.y = y;
        sprite.angle = angle;
        sprite.scale.x = scale.x;
        sprite.scale.y = scale.y;
    }

    // getter / setter
    public get skeleton(): spine.Skeleton {
        return this.spine_data.skeleton;
    }

    public addFrameAnimation(name: string, sprite: Phaser.Sprite, boneName: string, props?: { x?: number, y?: number, angle?: number }): void {
        this.addChild(sprite);
        if (props === undefined) {
            props = {};
        }
        if (props.x === undefined) {
            props.x = 0;
        }
        if (props.y === undefined) {
            props.y = 0;
        }
        if (props.angle === undefined) {
            props.angle = 0;
        }
        this.frameAnimations[name] = { sprite: sprite, boneName: boneName, props: props };
        this.frameAnimationKeys = Object.keys(this.frameAnimations);
    }

    public getFrameAnimation(name: string): Phaser.Sprite {
        if (this.frameAnimations[name] === undefined) {
            return null;
        }
        return this.frameAnimations[name].sprite;
    }

    public set animation(value: string) {
        if (this.animation) { 
            this.spine_pose.setTime(0);
        }
        if (this.spine_data.anims[value] === undefined) {
            console.log('there is no animation:', value);
            return;
        }
        this.spine_pose.setAnim(value);
    }
    
    public get animation(): string {
        if (this.spine_pose.curAnim() === undefined){
            return null;
        }
        return this.spine_pose.curAnim().name;
    }

    public set paused(value: boolean) {
        this._paused = value;
    }

    public set speed(value: number) {
        this._speed = value;
        this._fps = 1000 / 60 * this._speed;
    }

    public get speed(): number {
        return this._speed;
    }
}