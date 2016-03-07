"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Application_1 = require('../mvc/Application');
var Sprite = (function (_super) {
    __extends(Sprite, _super);
    function Sprite(x, y, key, frame, name, components) {
        if (name === void 0) { name = "dSprite"; }
        if (components === void 0) { components = null; }
        _super.call(this, Application_1.default.getInstance().game, x, y, key, frame);
        this.name = name;
        this._hasComponents = false;
        this._componentKeys = [];
        this._components = {};
        this.addComponents = function (components) {
            if (typeof components.length === 'undefined')
                throw new Error('Dijon.UIGroup components must be an array');
            while (components.length > 0)
                this.addComponent(components.shift());
        };
        if (this.autoBuild) {
            this.init();
            this.buildInterface();
            if (components)
                this.addComponents(components);
        }
    }
    Sprite.prototype.update = function () {
        if (this._hasComponents)
            this.updateComponents();
    };
    Sprite.prototype.destroy = function () {
        this.removeAllComponents();
        _super.prototype.destroy.call(this);
    };
    Sprite.prototype.init = function () { };
    Sprite.prototype.buildInterface = function () { };
    Sprite.prototype._updateComponentKeys = function () {
        this._componentKeys = Object.keys(this._components);
        this._hasComponents = this._componentKeys.length > 0;
    };
    Sprite.prototype.addComponent = function (component) {
        component.setOwner(this);
        component.init();
        component.buildInterface();
        this._components[component.name] = component;
        this._updateComponentKeys();
        return component;
    };
    ;
    Sprite.prototype.updateComponents = function () {
        var _this = this;
        this._componentKeys.forEach(function (componentName) {
            _this.updateComponent(componentName);
        });
    };
    Sprite.prototype.updateComponent = function (componentName) {
        this._components[componentName].update();
    };
    Sprite.prototype.removeAllComponents = function () {
        while (this._componentKeys.length > 0) {
            this.removeComponent(this._componentKeys.pop());
        }
    };
    Sprite.prototype.removeComponent = function (componentName) {
        if (typeof this._components[componentName] === 'undefined')
            return;
        this._components[componentName].destroy();
        this._components[componentName] = null;
        delete this._components[componentName];
        this._updateComponentKeys();
    };
    Object.defineProperty(Sprite.prototype, "resolution", {
        get: function () {
            return this.texture.baseTexture.resolution;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sprite.prototype, "autoBuild", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    return Sprite;
}(Phaser.Sprite));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Sprite;
//# sourceMappingURL=Sprite.js.map