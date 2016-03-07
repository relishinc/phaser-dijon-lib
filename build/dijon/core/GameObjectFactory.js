"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Group_1 = require('../display/Group');
var Sprite_1 = require('../display/Sprite');
var Text_1 = require('../display/Text');
var GameObjectFactory = (function (_super) {
    __extends(GameObjectFactory, _super);
    function GameObjectFactory() {
        _super.apply(this, arguments);
        this._targetGroup = null;
        this._defaultLayer = this.world;
    }
    GameObjectFactory.prototype.existing = function (object) {
        var group = this.targetGroup;
        this._targetGroup = null;
        return group.add(object);
    };
    GameObjectFactory.prototype.image = function (x, y, key, frame, group) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (group === undefined) {
            group = this.targetGroup;
        }
        this._targetGroup = null;
        return group.add(new Phaser.Image(this.game, x, y, key, frame));
    };
    GameObjectFactory.prototype.sprite = function (x, y, key, frame, group) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (group === undefined) {
            group = this.targetGroup;
        }
        this._targetGroup = null;
        return group.create(x, y, key, frame);
    };
    GameObjectFactory.prototype.creature = function (x, y, key, mesh, group) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (group === undefined) {
            group = this.targetGroup;
        }
        this._targetGroup = null;
        var obj = new Phaser['Creature'](this.game, x, y, key, mesh);
        group.add(obj);
        return obj;
    };
    GameObjectFactory.prototype.group = function (parent, name, addToStage, enableBody, physicsBodyType) {
        if (name === void 0) { name = 'group'; }
        if (addToStage === void 0) { addToStage = false; }
        if (enableBody === void 0) { enableBody = false; }
        if (physicsBodyType === void 0) { physicsBodyType = 0; }
        if (parent === undefined && addToStage !== true) {
            parent = this.targetGroup;
        }
        this._targetGroup = null;
        return new Phaser.Group(this.game, parent, name, addToStage, enableBody, physicsBodyType);
    };
    GameObjectFactory.prototype.physicsGroup = function (physicsBodyType, parent, name, addToStage) {
        if (physicsBodyType === void 0) { physicsBodyType = 0; }
        if (name === void 0) { name = 'group'; }
        if (addToStage === void 0) { addToStage = false; }
        if (parent === undefined) {
            parent = this.targetGroup;
        }
        this._targetGroup = null;
        return new Phaser.Group(this.game, parent, name, addToStage, true, physicsBodyType);
    };
    GameObjectFactory.prototype.spriteBatch = function (parent, name, addToStage) {
        if (name === void 0) { name = "spriteBatch"; }
        if (addToStage === void 0) { addToStage = false; }
        if (parent === undefined) {
            parent = this.targetGroup;
        }
        this._targetGroup = null;
        return new Phaser.SpriteBatch(this.game, parent, name, addToStage);
    };
    GameObjectFactory.prototype.tileSprite = function (x, y, width, height, key, frame, group) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        if (group === undefined) {
            group = this.targetGroup;
        }
        this._targetGroup = null;
        return group.add(new Phaser.TileSprite(this.game, x, y, width, height, key, frame));
    };
    GameObjectFactory.prototype.rope = function (x, y, key, frame, points, group) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (group === undefined) {
            group = this.targetGroup;
        }
        this._targetGroup = null;
        return group.add(new Phaser.Rope(this.game, x, y, key, frame, points));
    };
    GameObjectFactory.prototype.text = function (x, y, text, style, group) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (text === void 0) { text = ''; }
        if (group === undefined) {
            group = this.targetGroup;
        }
        this._targetGroup = null;
        return group.add(new Phaser.Text(this.game, x, y, text, style));
    };
    GameObjectFactory.prototype.button = function (x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame, group) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (group === undefined) {
            group = this.targetGroup;
        }
        this._targetGroup = null;
        return group.add(new Phaser.Button(this.game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame));
    };
    GameObjectFactory.prototype.graphics = function (x, y, group) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (group === undefined) {
            group = this.world;
        }
        return group.add(new Phaser.Graphics(this.game, x, y));
    };
    GameObjectFactory.prototype.bitmapText = function (x, y, font, text, size, align, group) {
        if (text === void 0) { text = ""; }
        if (size === void 0) { size = 32; }
        if (group === undefined) {
            group = this.targetGroup;
        }
        this._targetGroup = null;
        return group.add(new Phaser.BitmapText(this.game, x, y, font, text, size, align));
    };
    GameObjectFactory.prototype.dSprite = function (x, y, key, frame, name, components, group) {
        if (group === undefined) {
            group = this.targetGroup;
        }
        this._targetGroup = null;
        return group.add(new Sprite_1.default(x, y, key, frame, name, components));
    };
    GameObjectFactory.prototype.dGroup = function (x, y, name, addToStage, components, enableBody, physicsBodyType, group) {
        if (group === undefined && addToStage !== true) {
            group = this.targetGroup;
            this._targetGroup = null;
            return group.add(new Group_1.default(x, y, name, addToStage, components, enableBody, physicsBodyType));
        }
        return new Group_1.default(x, y, name, addToStage, components, enableBody, physicsBodyType);
    };
    GameObjectFactory.prototype.dText = function (x, y, text, fontName, fontSize, fontColor, fontAlign, wordWrap, width, lineSpacing, settings, group) {
        if (group === undefined) {
            group = this.targetGroup;
        }
        this._targetGroup = null;
        return group.add(new Text_1.default(x, y, text, fontName, fontSize, fontColor, fontAlign, wordWrap, width, lineSpacing, settings));
    };
    GameObjectFactory.prototype.setDefaultLayer = function (value) {
        console.log("CAUTION: Changing the default layer will change the target group for .add");
        this._defaultLayer = value;
    };
    Object.defineProperty(GameObjectFactory.prototype, "defaultLayer", {
        get: function () {
            return this._defaultLayer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObjectFactory.prototype, "targetGroup", {
        get: function () {
            return this._targetGroup || this._defaultLayer;
        },
        set: function (value) {
            this._targetGroup = value;
        },
        enumerable: true,
        configurable: true
    });
    return GameObjectFactory;
}(Phaser.GameObjectFactory));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameObjectFactory;
//# sourceMappingURL=GameObjectFactory.js.map