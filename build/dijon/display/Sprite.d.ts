import Game from '../core/Game';
import Component from '../core/Component';
export default class Sprite extends Phaser.Sprite {
    name: string;
    game: Game;
    protected _hasComponents: boolean;
    protected _componentKeys: string[];
    protected _components: {
        [componentName: string]: Component;
    };
    constructor(x?: number, y?: number, key?: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number, name?: string, components?: Component[]);
    update(): void;
    destroy(): void;
    protected init(): void;
    protected buildInterface(): void;
    private _updateComponentKeys();
    addComponents: (components: Component[]) => void;
    addComponent(component: Component): Component;
    updateComponents(): void;
    updateComponent(componentName: string): void;
    removeAllComponents(): void;
    removeComponent(componentName: string): void;
    resolution: number;
    protected autoBuild: boolean;
}
