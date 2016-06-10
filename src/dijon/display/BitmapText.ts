import {Application} from '../application';
import {Game} from '../core';
import {Device} from '../utils';

/**
 * Text
 */
export class BitmapText extends Phaser.BitmapText {
    // from Phaser.BitmapText
    private _text: string;
    private _glyphs: any[];

    protected _autoFlatten: boolean = true;
    protected _color: number = 0xffffff;
    protected _isImage: boolean = false;
    protected _internalImage: Phaser.Image = null;

    constructor(x: number = 0, y: number = 0, font: string = null, text: string = "", size: number = 12, align: string = 'left', color: number = 0xffffff, smoothing: boolean = true, autoFlatten: boolean = true, makeImage: boolean = false) {
        super(Application.getInstance().game, x, y, font, text, size, align);
        
        if (smoothing !== true) {
            this.smoothed = false;
        }
        if (makeImage !== true) {
            if (color !== 0xffffff) {
                this.color = color;
            }
            this.autoFlatten = autoFlatten;
        } else {
            this.makeImage();
            if (color !== 0xffffff) {
                this.color = color;
            }
        }
    }

    public makeImage(): void {
        this._isImage = true;
        this._internalImage = <Phaser.Image>this.addChildAt(this.game.add.image(0, 0, this.generateTexture(this.game.resolution, PIXI.scaleModes.DEFAULT)), 0);

        let n = this.children.length - 1;
        while (n > 0) {
            this.removeChildAt(n);
            n--;
        }

        const glyphs = this._glyphs;
        for (var i = 0; i < glyphs.length; i++) {
            glyphs[i].destroy();
        }
        this._glyphs = [];
    }

    public flatten(delay: number = null): void {
        if (delay) {
            this.game.time.events.add(delay, () => { this.cacheAsBitmap = true }, this);
            return;
        }
        this.cacheAsBitmap = true;
    }

    public unFlatten(): void {
        this.cacheAsBitmap = null;
    }

    public set autoFlatten(value: boolean) {
        this._autoFlatten = value;
        if (this._autoFlatten) {
            this.flatten();
        } else {
            this.unFlatten();
        }
    }

    public get autoFlatten(): boolean {
        return this._autoFlatten;
    }

    public set color(value: number) {
        if (this._autoFlatten) {
            this.unFlatten();
        }
        this._color = value;

        if (this._isImage) {
            this._internalImage.tint = this._color;
        } else {
            this.tint = this._color;
        }

        if (this._autoFlatten) {
            this.flatten();
        }
    }

    public get color(): number {
        return this._color;
    }

    public set text(value: string) {
        const wasvisible = this.visible === true;
        const prevalpha = this.alpha;
        if (!wasvisible) {
            this.visible = true;
            this.alpha = 0;
        }
        if (this._autoFlatten) {
            this.unFlatten();
        }
        if (this._text !== undefined && value !== this._text) {
            this._text = value.toString() || '';
            this.updateText();
        }
        if (this._autoFlatten) {
            this.flatten();
        }
        if (!wasvisible) {
            this.visible = false;
            this.alpha = prevalpha;
        }
    }

    public get text(): string {
        return this._text;
    }

    public get realWidth(): number {
        return this.getBounds().width;
    }

    public get realHeight(): number {
        return this.getBounds().height;
    }

    protected _generateCachedSprite = function () {
        this._cacheAsBitmap = false;

        var bounds = this.getLocalBounds();
        var res = this.game.resolution;

        if (!this._cachedSprite) {
            var renderTexture = new PIXI.RenderTexture(bounds.width * res | 0, bounds.height * res | 0);//, renderSession.renderer);
            renderTexture.baseTexture.resolution = res;
            this._cachedSprite = new PIXI.Sprite(renderTexture);
            this._cachedSprite.texture.resolution = res;
            this._cachedSprite.worldTransform = this.worldTransform;
        }
        else {
            this._cachedSprite.texture.resize(bounds.width * res | 0, bounds.height * res | 0);
        }

        //REMOVE filter!
        var tempFilters = this._filters;
        this._filters = null;

        this._cachedSprite.filters = tempFilters;

        PIXI.DisplayObject['_tempMatrix'].tx = -bounds.x;
        PIXI.DisplayObject['_tempMatrix'].ty = -bounds.y;

        this._cachedSprite.texture.render(this, PIXI.DisplayObject['_tempMatrix'], true);

        this._cachedSprite.anchor.x = -(bounds.x / bounds.width);
        this._cachedSprite.anchor.y = -(bounds.y / bounds.height);

        this._filters = tempFilters;

        this._cacheAsBitmap = true;
        this.setHitAreaToBounds();
    }

    public setHitAreaToBounds = function () {
        this.hitArea = this.getBounds();
    }
}