"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Application_1 = require('../mvc/Application');
var AssetManager_1 = require("./AssetManager");
var SequenceManager_1 = require("./SequenceManager");
var TransitionManager_1 = require("./TransitionManager");
var StorageManager_1 = require("./StorageManager");
var AudioManager_1 = require("./AudioManager");
var AnalyticsManager_1 = require("./AnalyticsManager");
var GameObjectFactory_1 = require("./GameObjectFactory");
var Game = (function (_super) {
    __extends(Game, _super);
    function Game(config) {
        _super.call(this, config);
        this.onWorldInputDisabled = new Phaser.Signal();
        this.onWorldInputEnabled = new Phaser.Signal();
    }
    Game.prototype.boot = function () {
        _super.prototype.boot.call(this);
        this.app = Application_1.default.getInstance();
        this.asset = new AssetManager_1.default();
        this.sequence = new SequenceManager_1.default();
        this.transition = new TransitionManager_1.default();
        this.storage = new StorageManager_1.default();
        this.audio = new AudioManager_1.default();
        this.analytics = new AnalyticsManager_1.default(this.config.analytics);
        this.add = null;
        this.add = new GameObjectFactory_1.default(this);
        this.addLayers();
        this.setFactoryDefaultLayer(this.gameLayer);
    };
    Game.prototype.addPlugins = function () {
        var _this = this;
        if (this.config.plugins && this.config.plugins.length > 0) {
            this.config.plugins.forEach(function (pluginName) {
                if (typeof Phaser.Plugin[pluginName] === 'function') {
                    _this.add.plugin(Phaser.Plugin[pluginName]);
                }
            });
        }
    };
    Game.prototype.setFactoryDefaultLayer = function (newLayer) {
        this.add.setDefaultLayer(newLayer || this.world);
    };
    Game.prototype.addLayers = function () {
        this.gameLayer = this.add.dGroup(0, 0, '_game_layer');
        this.uiLayer = this.add.dGroup(0, 0, '_ui_layer');
        this.uiLayer.fixedToCamera = true;
        this.stageLayer = this.add.dGroup(0, 0, '_stage_layer', true);
    };
    Game.prototype.disableElementInput = function (el) {
        if (el.input && el.inputEnabled === true) {
            el.wasEnabled = true;
            el.inputEnabled = false;
        }
        if (el.children.length > 0) {
            for (var i = 0; i < el.children.length; i++) {
                this.disableElementInput(el.children[i]);
            }
        }
    };
    Game.prototype.enableElementInput = function (el) {
        if (el.input && el.inputEnabled === false && el.wasEnabled) {
            el.wasEnabled = false;
            el.inputEnabled = true;
        }
        if (el.children.length > 0) {
            for (var i = 0; i < el.children.length; i++) {
                this.enableElementInput(el.children[i]);
            }
        }
    };
    Game.prototype.disableInput = function (group) {
        return group.forEach(function (el) {
            if (el instanceof Phaser.Group) {
                return this.disableInput(el);
            }
            else {
                return this.disableElementInput(el);
            }
        }, this);
    };
    Game.prototype.enableInput = function (group) {
        return group.forEach(function (el) {
            if (el instanceof Phaser.Group) {
                return this.enableInput(el);
            }
            else {
                return this.enableElementInput(el);
            }
        }, this);
    };
    Game.prototype.disableGameInput = function () {
        this.disableInput(this.gameLayer);
        this.onWorldInputDisabled.dispatch();
    };
    Game.prototype.enableGameInput = function () {
        this.enableInput(this.gameLayer);
        this.onWorldInputEnabled.dispatch();
    };
    Game.prototype.changeState = function (toState) {
        this.gameLayer.removeAll(true, true);
        return this.state.start(toState, false, false);
    };
    ;
    Object.defineProperty(Game.prototype, "addToGame", {
        get: function () {
            this.add.targetGroup = this.gameLayer;
            return this.add;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Game.prototype, "addToUI", {
        get: function () {
            this.add.targetGroup = this.uiLayer;
            return this.add;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Game.prototype, "addToStage", {
        get: function () {
            this.add.targetGroup = this.stageLayer;
            return this.add;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Game.prototype, "addToWorld", {
        get: function () {
            this.add.targetGroup = this.world;
            return this.add;
        },
        enumerable: true,
        configurable: true
    });
    ;
    return Game;
}(Phaser.Game));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Game;
//# sourceMappingURL=Game.js.map