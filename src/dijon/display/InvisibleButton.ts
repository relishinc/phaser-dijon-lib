import {Sprite} from './Sprite';

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
