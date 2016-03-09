import {Application} from './application';
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

        if (this.autoBuild) {
            this.init();
            this.buildInterface();

            if (components)
                this.addComponents(components);
        }
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
    public addComponents = function(components: Component[]) {
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

    public get resolution(): number {
        return this.texture.baseTexture.resolution;
    }

    protected get autoBuild(): boolean {
        return true;
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
        if (this.autoBuild) {
            this.init();
        }

        if (!addToStage)
            this.game.add.existing(this);

        if (this.autoBuild) {
            this.buildInterface();

            if (components)
                this.addComponents(components);
        }
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
    public addComponents = function(components: Component[]) {
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

    protected get autoBuild(): boolean {
        return true;
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
    public stopAnimating = function() {
        this._canUpdate = false;
        this._textToAnimate = null;
        this.game.time.events.remove(this._delayTimer);
        this.game.time.events.remove(this._repeatTimer);
    }
		
    /**
    * rounds the position
    * @return {void}
    */
    public roundPixel = function() {
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