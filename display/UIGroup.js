/**
 * Wrapper for Phaser.Group
 * also adds Entity / Component functionality
 * calls init and buildInterface() methods after being added
 * @param {Phaser.Game} game       reference to the Phaser.Game instance
 * @param {object} [parent = Phaser.World] reference to this group's parent
 * @param {String} [name = 'Dijon.UIGroup'] for debugging purposes
 * @param {Boolean} [addToStage = false] whether to add to the Phaser.Stage or not
 * @param {Array} [components = null] a list of components to attach
 * @constructor
 */
Dijon.UIGroup = function(game, x, y, name, addToStage, components) {
    this.game = game;

    /**
     * whether the Dijon.UIGroup has any components (updated when a component is added or removed)
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

    if (typeof name === 'undefined') {
        name = 'Dijon.UIGroup';
    }

    Phaser.Group.call(this, game, null, name, addToStage);

    this.position.set(typeof x === 'undefined' ? 0 : x, typeof y === 'undefined' ? 0 : y);
    this.init();

    if (addToStage !== true)
        this.game.add.existing(this);

    this.buildInterface();

    if (typeof components !== 'undefined')
        this.addComponents(components);
};

Dijon.UIGroup.prototype = Object.create(Phaser.Group.prototype);

// Phaser.Group overrides
/**
 * called every frame
 * iterates the components list and calls component.update() on each component
 * @return {void}
 * @override
 */
Dijon.UIGroup.prototype.update = function() {
    if (this._hasComponents)
        this._updateComponents();
};

/**
 * removes all components
 * @return {Phaser.Group.destroy}
 * @override
 */
Dijon.UIGroup.prototype.destroy = function() {
    this.removeAllComponents();
    return Phaser.Sprite.prototype.destroy.call(this);
};

// private methods
/**
 * iterates through the list of components and updates each one
 * @return {void}
 * @private
 */
Dijon.UIGroup.prototype._updateComponents = function() {
    _.each(this._componentKeys, this.updateComponent, this);
};

/**
 * updates the internal list of component keys (so we don't have to call Object.keys() all the time)
 * @return {void}
 */
Dijon.UIGroup.prototype._updateComponentKeys = function() {
    this._componentKeys = Object.keys(this._components);
    this._hasComponents = this._componentKeys.length > 0;
};

// public methods
Dijon.UIGroup.prototype.init = function() {
    // initialize variables
};

Dijon.UIGroup.prototype.buildInterface = function() {
    // add visual elements
};

/**
 * attaches a list of components to the Dijon.UIGroup
 * @param {Array} components the list of components to add
 */
Dijon.UIGroup.prototype.addComponents = function(components) {
    if (typeof components.length === 'undefined')
        throw new Error('Dijon.UIGroup components must be an array');

    while (components.length > 0)
        this.addComponent(components.shift());
};

/**
 * attaches a component to the Dijon.UIGroup
 * @param {Dijon.BaseComponent} component to be attached
 */
Dijon.UIGroup.prototype.addComponent = function(component) {
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
Dijon.UIGroup.prototype.removeAllComponents = function() {
    while (this._componentKeys.length > 0) {
        this.removeComponent(this._componentKeys.pop());
    }
};

/**
 * removes a specific component
 * @param  {String} componentName the name of the component to remove
 * @return {void}
 */
Dijon.UIGroup.prototype.removeComponent = function(componentName) {
    if (typeof this._components[componentName] === 'undefined')
        return;

    this._components[componentName].destroy();
    this._components[componentName] = null;
    delete this._components[componentName];

    this._updateComponentKeys();
};

Dijon.UIGroup.prototype.getMediator = function(mediatorName) {
    return this.game[mediatorName];
};

Dijon.UIGroup.prototype.constructor = Dijon.UIGroup;

/**
 * updates an attached component (calls component.update())
 * @param  {String} componentName the name of the component to update
 * @return {void}
 */
Dijon.UIGroup.prototype.updateComponent = function(componentName) {
    this._components[componentName].update();
};

// Phaser addons
Phaser.GameObjectFactory.prototype.uiGroup = function(x, y, name, addToStage, components) {
    return new Dijon.UIGroup(this.game, x, y, name, addToStage, components);
};

module.exports = Dijon.UIGroup;
