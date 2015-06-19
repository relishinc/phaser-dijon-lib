/**
 * Wrapper for Phaser.Sprite
 * also adds Entity / Component functionality
 * calls init and buildInterface() methods after being added
 * @param {Phaser.Game} game       reference to the current game
 * @param {Number} x          x position
 * @param {Number} y          y position
 * @param {String} key        texture key
 * @param {String} frame      texture frame
 * @param {String} name       name (for debugging purposes)
 * @param {Array} [components = null] list of components to attach
 * @constructor
 */
Dijon.UISprite = function(game, x, y, key, frame, name, components) {
    /**
     * reference to the frame (probably unneccessary)
     * @type {String}
     */
    this.__frameName = frame;

    /**
     * whether the Dijon.UISprite has any components (updated when a component is added or removed)
     * @type {Boolean}
     */
    this._hasComponents = false;

    /**
     * reference to the component names
     * @type {Array}
     */
    this._componentKeys = [];

    /**
     * key / value storage of the components
     * (this._components[component.name] = component)
     * @type {Object}
     */
    this._components = {};

    if (typeof name !== 'undefined') {
        this.name = name;
    }

    Phaser.Sprite.call(this, game, x, y, key, frame);

    this.init();
    this.buildInterface();

    if (typeof components !== 'undefined')
        this.addComponents(components);
};

Dijon.UISprite.prototype = Object.create(Phaser.Sprite.prototype);


// Phaser Sprite overrides
/**
 * called every frame
 * iterates the components list and calls component.update() on each component
 * @return {void}
 * @override
 */
Dijon.UISprite.prototype.update = function() {
    if (this._hasComponents)
        this._updateComponents();
};

/**
 * removes all components
 * @return {Phaser.Sprite.destroy}
 * @override
 */
Dijon.UISprite.prototype.destroy = function() {
    this.removeAllComponents();
    return Phaser.Sprite.prototype.destroy.call(this);
};

// private methods
/**
 * iterates through the list of components and updates each one
 * @return {void}
 * @private
 */
Dijon.UISprite.prototype._updateComponents = function() {
    _.each(this._componentKeys, this.updateComponent, this);
};

/**
 * updates the internal list of component keys (so we don't have to call Object.keys() all the time)
 * @return {void}
 */
Dijon.UISprite.prototype._updateComponentKeys = function() {
    this._componentKeys = Object.keys(this._components);
    this._hasComponents = this._componentKeys.length > 0;
};

// public methods
/**
 * called during instantiation
 * use to define internal variables set up
 * @return {void}
 */
Dijon.UISprite.prototype.init = function() {
    // initialize variables
};

/**
 * called during instantiation
 * called after init
 * use to add visual elements
 * @return {void}
 */
Dijon.UISprite.prototype.buildInterface = function() {
    // add visual elements
};

/**
 * attaches a list of components to the Dijon.UISprite
 * @param {Array} components the list of components to add
 */
Dijon.UISprite.prototype.addComponents = function(components) {
    if (typeof components.length === 'undefined')
        throw new Error('Dijon.UISprite components must be an array');

    while (components.length > 0)
        this.addComponent(components.shift());
};

/**
 * attaches a component to the Dijon.UISprite
 * @param {Dijon.BaseComponent} component to be attached
 */
Dijon.UISprite.prototype.addComponent = function(component) {
    component.setOwner(this);
    component.init();
    component.buildInterface();

    this._components[component.name] = component;
    this._updateComponentKeys();
};

/**
 * removes all the components currently attached
 * @return {void}
 */
Dijon.UISprite.prototype.removeAllComponents = function() {
    while (this._componentKeys.length > 0) {
        this.removeComponent(this._componentKeys.pop());
    }
};

/**
 * removes a specific component
 * @param  {String} componentName the name of the component to remove
 * @return {void}
 */
Dijon.UISprite.prototype.removeComponent = function(componentName) {
    if (typeof this._components[componentName] === 'undefined')
        return;

    this._components[componentName].destroy();
    this._components[componentName] = null;
    delete this._components[componentName];

    this._updateComponentKeys();
};

/**
 * updates an attached component (calls component.update())
 * @param  {String} componentName the name of the component to update
 * @return {void}
 */
Dijon.UISprite.prototype.updateComponent = function(componentName) {
    this._components[componentName].update();
};

Dijon.UISprite.prototype.constructor = Dijon.UISprite;

// Phaser addons
Phaser.GameObjectCreator.prototype.uiSprite = function(x, y, key, frame, name, components) {
    return new Dijon.UISprite(this.game, x, y, key, frame, name, components);
};

Phaser.GameObjectFactory.prototype.uiSprite = function(x, y, key, frame, name, components, group) {
    if (typeof group === 'undefined') {
        group = this.world;
    }
    return group.add(new Dijon.UISprite(this.game, x, y, key, frame, name, components));
};
