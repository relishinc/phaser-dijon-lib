import {Application} from '../application';
import {Game, GameObjectFactory} from '../core';
import {Mediator} from '../mvc';
import {Component} from './Component';

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

    public static CreateFromData(data: any): Group {
        let self = new Group(data.position.x, data.position.y, data.name);
        if (data.alpha) {
            self.alpha = data.alpha;
        }
        return self;
    }

    public assignPrefab(object: any) {
        // Override this to handle assignment of child prefabs.
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