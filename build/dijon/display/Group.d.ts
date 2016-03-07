import Game from '../core/Game';
import Mediator from '../mvc/Mediator';
import Component from '../core/Component';
import GameObjectFactory from '../core/GameObjectFactory';
export default class Group extends Phaser.Group {
    name: string;
    game: Game;
    protected _hasComponents: boolean;
    protected _componentKeys: string[];
    protected _components: {
        [componentName: string]: Component;
    };
    protected _mediator: Mediator;
    constructor(x?: number, y?: number, name?: string, addToStage?: boolean, components?: Component[], enableBody?: boolean, physicsBodyType?: number);
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
    removeMediator(): void;
    addInternal: GameObjectFactory;
    protected autoBuild: boolean;
}
