import {Application} from '../application';
import {Game} from '../core';
import {Component} from './Component';

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

    public static CreateFromData(data: any): Sprite {
        let self = new Sprite(data.position.x, data.position.y, data.key, data.frame, data.name);
        if (data.anchor) {
            self.anchor.setTo(data.anchor.x, data.anchor.y);
        }
        if (data.scale) {
            self.scale.setTo(data.scale.x, data.scale.y);
        }
        if (data.angle) {
            self.angle = data.angle;
        }
        if (data.tint) {
            self.tint = data.tint;
        }
        if (data.alpha) {
            self.alpha = data.alpha;
        }
        return self;
    }

    public assignPrefab(object: any) {
        // Override this to handle assignment of child prefabs.
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