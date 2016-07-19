import {Group} from './Group';

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
        this.game.time.events.add(10, this.dFlatten, this);
    }

    private _build(): void {
        this._inputLayer = this.add(this.game.add.group());
        this._displayLayer = this.add(this.game.add.group());

        this.tl = <Phaser.Image>this._displayLayer.add(this.game.add.image(0, 0, this.key, this.texturePath + '/tl'));

        this.tr = <Phaser.Image>this._displayLayer.add(this.game.add.image(this.__width, 0, this.key, this.texturePath + '/tr'));

        this.t = <Phaser.TileSprite>this._displayLayer.add(this.game.add.tileSprite(Math.floor(this.tl.getBounds().width), 0, Math.ceil(this.__width - this.tl.getBounds().width - this.tr.getBounds().width), this.topHeight || this.tl.getBounds().height, this.key, this.texturePath + '/t'));

        this.l = <Phaser.TileSprite>this._displayLayer.add(this.game.add.tileSprite(0, Math.floor(this.tl.getBounds().height), Math.ceil(this.leftWidth || this.tl.getBounds().width), 100, this.key, this.texturePath + '/l'));

        this.bl = <Phaser.Image>this._displayLayer.add(this.game.add.image(0, this.__height, this.key, this.texturePath + '/bl'));

        this.l.height = Math.ceil(this.__height - this.tl.getBounds().height - this.bl.getBounds().height);

        this.b = <Phaser.TileSprite>this._displayLayer.add(this.game.add.tileSprite(Math.floor(this.bl.getBounds().width), this.__height, 100, this.bottomHeight || this.bl.getBounds().height, this.key, this.texturePath + '/b'));

        this.br = <Phaser.Image>this._displayLayer.add(this.game.add.image(this.__width, this.__height, this.key, this.texturePath + '/br'));

        this.b.width = Math.ceil(this.__width - this.bl.getBounds().width - this.br.getBounds().width);
        this.r = <Phaser.TileSprite>this._displayLayer.add(this.game.add.tileSprite(this.__width, Math.floor(this.tr.getBounds().height), Math.ceil(this.rightWidth || this.tr.getBounds().width), Math.ceil(this.__height - this.tl.getBounds().height - this.br.getBounds().height), this.key, this.texturePath + '/r'));

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
        this.dUnflatten();

        this.t.width = this.b.width = Math.ceil(this.__width - this.tl.getBounds().width - this.tr.getBounds().width | 0);
        this.r.x = this.tr.x = this.br.x = this.__width | 0;
        this.l.height = this.r.height = (this.__height - this.tr.getBounds().height - this.bl.getBounds().height | 0);
        this.bl.y = this.b.y = this.br.y = this.__height | 0;

        if (this.fillMiddle) {
            this.tile.width = Math.ceil(this.__width - this.tr.getBounds().width - this.tl.getBounds().width + 4)
            this.tile.height = Math.ceil(this.__height - this.tl.getBounds().height - this.bl.getBounds().height + 4);
        }

        if (this._interactiveBacking != null) {
            console.log('new width', this.__width)
            this._interactiveBacking.width = this.__width;
            this._interactiveBacking.height = this.__height;
        }

        this.game.time.events.add(10, this.dFlatten, this);
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

    public dUnflatten(): void {
        this._displayLayer.cacheAsBitmap = null;
    }

    public dFlatten(): void {
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

    public get interactiveBacking():Phaser.Image{
        return this._interactiveBacking;
    }
}