import Sprite from './Sprite';
export declare class InvisibleButton extends Sprite {
    private _hitWidth;
    private _hitHeight;
    constructor(x: number, y: number, name: string, w: number, h: number);
    init(): void;
    buildInterface(): void;
    private _addHitRect();
    setSize(w: any, h: any): void;
}
