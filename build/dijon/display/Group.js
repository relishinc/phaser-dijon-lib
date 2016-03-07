"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Application_1 = require('../mvc/Application');
var Group = (function (_super) {
    __extends(Group, _super);
    function Group(x, y, name, addToStage, components, enableBody, physicsBodyType) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (name === void 0) { name = "dGroup"; }
        if (addToStage === void 0) { addToStage = false; }
        if (components === void 0) { components = null; }
        _super.call(this, Application_1.default.getInstance().game, null, name, addToStage, enableBody, physicsBodyType);
        this.name = name;
        this._hasComponents = false;
        this._componentKeys = [];
        this._components = {};
        this._mediator = null;
        this.addComponents = function (components) {
            if (typeof components.length === 'undefined')
                throw new Error('Dijon.UIGroup components must be an array');
            while (components.length > 0)
                this.addComponent(components.shift());
        };
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
    Group.prototype.update = function () {
        _super.prototype.update.call(this);
        if (this._hasComponents)
            this.updateComponents();
    };
    Group.prototype.destroy = function () {
        this.removeAllComponents();
        this.removeMediator();
        _super.prototype.destroy.call(this);
    };
    Group.prototype.init = function () { };
    Group.prototype.buildInterface = function () { };
    Group.prototype._updateComponentKeys = function () {
        this._componentKeys = Object.keys(this._components);
        this._hasComponents = this._componentKeys.length > 0;
    };
    Group.prototype.addComponent = function (component) {
        component.setOwner(this);
        component.init();
        component.buildInterface();
        this._components[component.name] = component;
        this._updateComponentKeys();
        return component;
    };
    Group.prototype.updateComponents = function () {
        var _this = this;
        this._componentKeys.forEach(function (componentName) {
            _this.updateComponent(componentName);
        });
    };
    Group.prototype.updateComponent = function (componentName) {
        this._components[componentName].update();
    };
    Group.prototype.removeAllComponents = function () {
        while (this._componentKeys.length > 0) {
            this.removeComponent(this._componentKeys.pop());
        }
    };
    Group.prototype.removeComponent = function (componentName) {
        if (typeof this._components[componentName] === 'undefined')
            return;
        this._components[componentName].destroy();
        this._components[componentName] = null;
        delete this._components[componentName];
        this._updateComponentKeys();
    };
    Group.prototype.removeMediator = function () {
        if (!this._mediator) {
            return;
        }
        this._mediator.destroy();
        this._mediator = null;
    };
    Object.defineProperty(Group.prototype, "addInternal", {
        get: function () {
            this.game.add.targetGroup = this;
            return this.game.add;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "autoBuild", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    return Group;
}(Phaser.Group));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Group;
//# sourceMappingURL=Group.js.map