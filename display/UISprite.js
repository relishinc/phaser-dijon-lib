var UISprite = function(game, x, y, key, frame, name, components) {
    this.__frameName = frame;
    this._hasComponents = false;
    this._componentKeys = [];
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

UISprite.prototype = Object.create(Phaser.Sprite.prototype);
UISprite.prototype.constructor = UISprite;

// Phaser Sprite overrides
UISprite.prototype.update = function() {
    if (this._hasComponents)
        this._updateComponents();
};

UISprite.prototype.destroy = function() {
    this.removeAllComponents();
    Phaser.Sprite.prototype.destroy.call(this);
};

// private methods

UISprite.prototype._updateComponents = function() {
    _.each(this._componentKeys, this.updateComponent, this);
};

UISprite.prototype._updateComponentKeys = function() {
    this._componentKeys = Object.keys(this._components);
    this._hasComponents = this._componentKeys.length > 0;
};

UISprite.prototype._getFramePrefix = function() {
    var frameArr,
        prefix;
    if (typeof(this.__frameName) !== 'string') {
        return '';
    }
    if (this.__frameName.indexOf('/')) {
        frameArr = this.__frameName.split('/');
        frameArr.pop();
        prefix = frameArr.join('/');
        return prefix;
    }
    return this.__frameName;
};

// public methods
UISprite.prototype.init = function() {
    // initialize variables
};

UISprite.prototype.buildInterface = function() {
    // add visual elements
};

UISprite.prototype.addComponents = function(components) {
    if (typeof components.length === 'undefined')
        throw new Error('UISprite components must be an array');

    while (components.length > 0)
        this.addComponent(components.shift());
};

UISprite.prototype.addComponent = function(component) {
    component.setOwner(this);
    component.init();
    component.buildInterface();

    this._components[component.name] = component;
    this._updateComponentKeys();
};

UISprite.prototype.removeAllComponents = function() {
    while (this._componentKeys.length > 0) {
        this.removeComponent(this._componentKeys.pop());
    }
};

UISprite.prototype.removeComponent = function(componentName) {
    if (typeof this._components[componentName] === 'undefined')
        return;

    this._components[componentName].destroy();
    this._components[componentName] = null;
    delete this._components[componentName];

    this._updateComponentKeys();
};

UISprite.prototype.updateComponent = function(componentName) {
    this._components[componentName].update();
};

// Phaser addons
Phaser.GameObjectCreator.prototype.uiSprite = function(x, y, key, frame, name, components) {
    return new UISprite(this.game, x, y, key, frame, name, components);
};

Phaser.GameObjectFactory.prototype.uiSprite = function(x, y, key, frame, name, components, group) {
    if (typeof group === 'undefined') {
        group = this.world;
    }
    return group.add(new UISprite(this.game, x, y, key, frame, name, components));
};

module.exports = UISprite;
