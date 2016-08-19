var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
System.register("dijon/interfaces/IAsset", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("dijon/interfaces/IAssetList", [], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("dijon/interfaces/IBrowser", [], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("dijon/interfaces/IGameConfig", [], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("dijon/interfaces/INotification", [], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("dijon/interfaces/INotifier", [], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("dijon/interfaces/IObserver", [], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("dijon/interfaces/IPathConfig", [], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("dijon/interfaces/ITransitionHandler", [], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("dijon/interfaces/IPreloadHandler", [], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("dijon/interfaces/ISound", [], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("dijon/interfaces/ITiledmapAssets", [], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("dijon/interfaces/ITransition", [], function(exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("dijon/interfaces", [], function(exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("dijon/utils/Device", [], function(exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    var Device;
    return {
        setters:[],
        execute: function() {
            Device = (function () {
                function Device() {
                }
                Object.defineProperty(Device, "mobile", {
                    get: function () {
                        return Device.mobileOS !== Device.UNKNOWN;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Device, "cocoon", {
                    get: function () {
                        return (typeof navigator['isCocoonJS'] !== "undefined");
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Device, "mobileOS", {
                    get: function () {
                        var userAgent = window.navigator.userAgent || window.navigator.vendor || window['opera'];
                        if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
                            return Device.IOS;
                        }
                        else if (userAgent.match(/Android/i)) {
                            return Device.ANDROID;
                        }
                        else {
                            return Device.UNKNOWN;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Device, "browser", {
                    get: function () {
                        var ua = navigator.userAgent.toLowerCase();
                        return {
                            firefox: ua.indexOf('firefox') > -1,
                            ie: ua.indexOf('ie') > -1,
                            safari: ua.indexOf('safari') > -1,
                            chrome: ua.indexOf('chrome') > -1,
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Device, "pixelRatio", {
                    get: function () {
                        return typeof window.devicePixelRatio !== undefined ? window.devicePixelRatio : 1;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Device, "customPixelRatio", {
                    get: function () {
                        return Device.pixelRatio >= 1.5 ? 2 : 1;
                    },
                    enumerable: true,
                    configurable: true
                });
                Device.IOS = 'iOS';
                Device.ANDROID = 'android';
                Device.UNKNOWN = 'unknown';
                return Device;
            }());
            exports_15("Device", Device);
        }
    }
});
System.register("dijon/utils/Logger", [], function(exports_16, context_16) {
    "use strict";
    var __moduleName = context_16 && context_16.id;
    var Logger;
    return {
        setters:[],
        execute: function() {
            Logger = (function () {
                function Logger() {
                }
                Logger.log = function (instance) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    if (!Logger.enabled) {
                        return;
                    }
                    if (instance && instance.constructor) {
                        args.unshift(instance.constructor.toString().match(/\w+/g)[1] + ' ::');
                    }
                    return console.log.apply(console, args);
                };
                Logger.enabled = true;
                return Logger;
            }());
            exports_16("Logger", Logger);
        }
    }
});
System.register("dijon/utils/Notifications", [], function(exports_17, context_17) {
    "use strict";
    var __moduleName = context_17 && context_17.id;
    var Notifications;
    return {
        setters:[],
        execute: function() {
            Notifications = (function () {
                function Notifications() {
                }
                Notifications.ASSET_MANAGER_DATA_SET = 'dijonAssetManagerDataSet';
                Notifications.ASSET_MANAGER_ASSETS_CLEARED = 'dijonAssetManagerAssetsCleared';
                Notifications.MOUSE_LEAVE_GLOBAL = 'mouseOutGlobal';
                Notifications.MOUSE_ENTER_GLOBAL = 'mouseEnterGlobal';
                return Notifications;
            }());
            exports_17("Notifications", Notifications);
        }
    }
});
System.register("dijon/utils/Textures", ["dijon/application"], function(exports_18, context_18) {
    "use strict";
    var __moduleName = context_18 && context_18.id;
    var application_1;
    var Textures;
    return {
        setters:[
            function (application_1_1) {
                application_1 = application_1_1;
            }],
        execute: function() {
            Textures = (function () {
                function Textures() {
                }
                Object.defineProperty(Textures, "game", {
                    get: function () {
                        return application_1.Application.getInstance().game;
                    },
                    enumerable: true,
                    configurable: true
                });
                Textures.rect = function (width, height, color, alpha, fill, lineColor, lineThickness, lineAlpha, outline) {
                    if (width === void 0) { width = 100; }
                    if (height === void 0) { height = 100; }
                    if (color === void 0) { color = 0xffffff; }
                    if (alpha === void 0) { alpha = 1; }
                    if (fill === void 0) { fill = true; }
                    if (lineColor === void 0) { lineColor = 0xffffff; }
                    if (lineThickness === void 0) { lineThickness = 1; }
                    if (lineAlpha === void 0) { lineAlpha = 1; }
                    if (outline === void 0) { outline = false; }
                    var gfx = Textures.game.add.graphics(0, 0);
                    if (fill) {
                        gfx.beginFill(color, alpha);
                    }
                    if (outline) {
                        gfx.lineWidth = lineThickness;
                        gfx.lineStyle(lineThickness, lineColor, lineAlpha);
                    }
                    gfx.drawRect(0, 0, width, height);
                    var texture = gfx.generateTexture();
                    Textures.game.world.remove(gfx);
                    return texture;
                };
                Textures.roundedRect = function (width, height, radius, color, alpha, fill, lineColor, lineThickness, lineAlpha, outline) {
                    if (width === void 0) { width = 100; }
                    if (height === void 0) { height = 100; }
                    if (radius === void 0) { radius = 10; }
                    if (color === void 0) { color = 0xffffff; }
                    if (alpha === void 0) { alpha = 1; }
                    if (fill === void 0) { fill = true; }
                    if (lineColor === void 0) { lineColor = 0xffffff; }
                    if (lineThickness === void 0) { lineThickness = 1; }
                    if (lineAlpha === void 0) { lineAlpha = 1; }
                    if (outline === void 0) { outline = false; }
                    var gfx = Textures.game.add.graphics(0, 0);
                    if (fill) {
                        gfx.beginFill(color, alpha);
                    }
                    if (outline) {
                        gfx.lineWidth = lineThickness;
                        gfx.lineStyle(lineThickness, lineColor, lineAlpha);
                    }
                    gfx.drawRoundedRect(0, 0, width, height, radius);
                    var texture = gfx.generateTexture();
                    Textures.game.world.remove(gfx);
                    return texture;
                };
                Textures.square = function (size, color, alpha, fill, lineColor, lineThickness, lineAlpha, outline) {
                    if (size === void 0) { size = 100; }
                    if (color === void 0) { color = 0xffffff; }
                    if (alpha === void 0) { alpha = 1; }
                    if (fill === void 0) { fill = true; }
                    if (lineColor === void 0) { lineColor = 0xffffff; }
                    if (lineThickness === void 0) { lineThickness = 1; }
                    if (lineAlpha === void 0) { lineAlpha = 1; }
                    if (outline === void 0) { outline = false; }
                    return Textures.rect(size, size, color, alpha, fill, lineColor, lineThickness, lineAlpha, outline);
                };
                Textures.circle = function (diameter, color, alpha, fill, lineColor, lineThickness, lineAlpha, outline) {
                    if (diameter === void 0) { diameter = 100; }
                    if (color === void 0) { color = 0xffffff; }
                    if (alpha === void 0) { alpha = 1; }
                    if (fill === void 0) { fill = true; }
                    if (lineColor === void 0) { lineColor = 0xffffff; }
                    if (lineThickness === void 0) { lineThickness = 1; }
                    if (lineAlpha === void 0) { lineAlpha = 1; }
                    if (outline === void 0) { outline = false; }
                    var gfx = Textures.game.add.graphics(0, 0);
                    if (fill) {
                        gfx.beginFill(color, alpha);
                    }
                    if (outline) {
                        gfx.lineWidth = lineThickness;
                        gfx.lineStyle(lineThickness, lineColor, lineAlpha);
                    }
                    gfx.drawCircle(0, 0, diameter);
                    var texture = gfx.generateTexture();
                    Textures.game.world.remove(gfx);
                    return texture;
                };
                Textures.ellipse = function (width, height, color, alpha, fill, lineColor, lineThickness, lineAlpha, outline) {
                    if (width === void 0) { width = 50; }
                    if (height === void 0) { height = 100; }
                    if (color === void 0) { color = 0xffffff; }
                    if (alpha === void 0) { alpha = 1; }
                    if (fill === void 0) { fill = true; }
                    if (lineColor === void 0) { lineColor = 0xffffff; }
                    if (lineThickness === void 0) { lineThickness = 1; }
                    if (lineAlpha === void 0) { lineAlpha = 1; }
                    if (outline === void 0) { outline = false; }
                    var gfx = Textures.game.add.graphics(0, 0);
                    if (fill) {
                        gfx.beginFill(color, alpha);
                    }
                    if (outline) {
                        gfx.lineWidth = lineThickness;
                        gfx.lineStyle(lineThickness, lineColor, lineAlpha);
                    }
                    gfx.drawEllipse(0, 0, width * 0.5, height * 0.5);
                    var texture = gfx.generateTexture();
                    Textures.game.world.remove(gfx);
                    return texture;
                };
                return Textures;
            }());
            exports_18("Textures", Textures);
        }
    }
});
System.register("dijon/display/BitmapText", ["dijon/application"], function(exports_19, context_19) {
    "use strict";
    var __moduleName = context_19 && context_19.id;
    var application_2;
    var BitmapText;
    return {
        setters:[
            function (application_2_1) {
                application_2 = application_2_1;
            }],
        execute: function() {
            BitmapText = (function (_super) {
                __extends(BitmapText, _super);
                function BitmapText(x, y, font, text, size, align, color, smoothing, autoFlatten, makeImage) {
                    if (x === void 0) { x = 0; }
                    if (y === void 0) { y = 0; }
                    if (font === void 0) { font = null; }
                    if (text === void 0) { text = ""; }
                    if (size === void 0) { size = 12; }
                    if (align === void 0) { align = 'left'; }
                    if (color === void 0) { color = 0xffffff; }
                    if (smoothing === void 0) { smoothing = true; }
                    if (autoFlatten === void 0) { autoFlatten = true; }
                    if (makeImage === void 0) { makeImage = false; }
                    _super.call(this, application_2.Application.getInstance().game, x, y, font, text, size, align);
                    this._autoFlatten = true;
                    this._color = 0xffffff;
                    this._isImage = false;
                    this._internalImage = null;
                    this._generateCachedSprite = function () {
                        this._cacheAsBitmap = false;
                        var bounds = this.getLocalBounds();
                        var res = this.game.resolution;
                        if (!this._cachedSprite) {
                            var renderTexture = new PIXI.RenderTexture(bounds.width * res | 0, bounds.height * res | 0);
                            renderTexture.baseTexture.resolution = res;
                            this._cachedSprite = new PIXI.Sprite(renderTexture);
                            this._cachedSprite.texture.resolution = res;
                            this._cachedSprite.worldTransform = this.worldTransform;
                        }
                        else {
                            this._cachedSprite.texture.resize(bounds.width * res | 0, bounds.height * res | 0);
                        }
                        var tempFilters = this._filters;
                        this._filters = null;
                        this._cachedSprite.filters = tempFilters;
                        PIXI.DisplayObject['_tempMatrix'].tx = -bounds.x;
                        PIXI.DisplayObject['_tempMatrix'].ty = -bounds.y;
                        this._cachedSprite.texture.render(this, PIXI.DisplayObject['_tempMatrix'], true);
                        this._cachedSprite.anchor.x = -(bounds.x / bounds.width);
                        this._cachedSprite.anchor.y = -(bounds.y / bounds.height);
                        this._filters = tempFilters;
                        this._cacheAsBitmap = true;
                        this.setHitAreaToBounds();
                    };
                    this.setHitAreaToBounds = function () {
                        this.hitArea = this.getBounds();
                    };
                    if (smoothing !== true) {
                        this.smoothed = false;
                    }
                    if (makeImage !== true) {
                        if (color !== 0xffffff) {
                            this.color = color;
                        }
                        this.autoFlatten = autoFlatten;
                    }
                    else {
                        this.makeImage();
                        if (color !== 0xffffff) {
                            this.color = color;
                        }
                    }
                }
                BitmapText.prototype.makeImage = function () {
                    this._isImage = true;
                    this._alignToNearestPixel();
                    this._internalImage = this.addChildAt(this.game.add.image(0, 0, this.generateTexture(this.game.resolution, PIXI.scaleModes.DEFAULT)), 0);
                    this.destroyGlyphs();
                };
                BitmapText.prototype.destroyGlyphs = function () {
                    var n = this.children.length - 1;
                    while (n > (this._isImage ? 0 : -1)) {
                        this.removeChildAt(n);
                        n--;
                    }
                    var glyphs = this._glyphs;
                    for (var i = 0; i < glyphs.length; i++) {
                        glyphs[i].destroy();
                    }
                    this._glyphs = [];
                };
                BitmapText.prototype.flatten = function (delay) {
                    var _this = this;
                    if (delay === void 0) { delay = null; }
                    if (delay) {
                        this.game.time.events.add(delay, function () { _this.cacheAsBitmap = true; }, this);
                        return;
                    }
                    this._alignToNearestPixel();
                    this.cacheAsBitmap = true;
                };
                BitmapText.prototype.unFlatten = function () {
                    this.cacheAsBitmap = null;
                };
                Object.defineProperty(BitmapText.prototype, "autoFlatten", {
                    get: function () {
                        return this._autoFlatten;
                    },
                    set: function (value) {
                        this._autoFlatten = value;
                        if (this._autoFlatten) {
                            this.flatten();
                        }
                        else {
                            this.unFlatten();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BitmapText.prototype, "color", {
                    get: function () {
                        return this._color;
                    },
                    set: function (value) {
                        if (this._autoFlatten) {
                            this.unFlatten();
                        }
                        this._color = value;
                        if (this._isImage) {
                            this._internalImage.tint = this._color;
                        }
                        else {
                            this.tint = this._color;
                        }
                        if (this._autoFlatten) {
                            this.flatten();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BitmapText.prototype, "text", {
                    get: function () {
                        return this._text;
                    },
                    set: function (value) {
                        if (this._autoFlatten) {
                            this.unFlatten();
                        }
                        if (this._text !== undefined && value !== this._text) {
                            this._text = value.toString() || '';
                            this.destroyGlyphs();
                            this.updateText();
                        }
                        if (this._autoFlatten) {
                            this.flatten();
                        }
                        else {
                            this._alignToNearestPixel();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BitmapText.prototype, "realWidth", {
                    get: function () {
                        return this.getBounds().width;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BitmapText.prototype, "realHeight", {
                    get: function () {
                        return this.getBounds().height;
                    },
                    enumerable: true,
                    configurable: true
                });
                BitmapText.prototype._alignToNearestPixel = function () {
                    this.x = Math.round(this.x);
                    this.y = Math.round(this.y);
                    this.children.forEach(function (child) {
                        child.x = Math.round(child.x);
                        child.y = Math.round(child.y);
                    });
                };
                BitmapText.prototype.highlight = function (highlightStr, highlightColor) {
                    if (this._isImage) {
                        console.log('BitmapText:: cannot highlight a substring of a BitmapText instance when makeImage is set to true', this.text);
                        return false;
                    }
                    if (this.text.indexOf(highlightStr) < 0) {
                        return false;
                    }
                    var startIndex = this.text.indexOf(highlightStr) - 1;
                    var endIndex = startIndex + highlightStr.length;
                    var child;
                    if (this._autoFlatten) {
                        this.unFlatten();
                    }
                    for (var i = startIndex; i < endIndex; i++) {
                        child = this.getChildAt(i);
                        child.tint = highlightColor;
                    }
                    if (this._autoFlatten) {
                        this.flatten();
                    }
                    else {
                        this._alignToNearestPixel();
                    }
                    return true;
                };
                return BitmapText;
            }(Phaser.BitmapText));
            exports_19("BitmapText", BitmapText);
        }
    }
});
System.register("dijon/display/Component", ["dijon/application"], function(exports_20, context_20) {
    "use strict";
    var __moduleName = context_20 && context_20.id;
    var application_3;
    var Component;
    return {
        setters:[
            function (application_3_1) {
                application_3 = application_3_1;
            }],
        execute: function() {
            Component = (function () {
                function Component() {
                    this.game = application_3.Application.getInstance().game;
                    this.name = 'Component';
                }
                Component.prototype.setOwner = function (owner) {
                    this.owner = owner;
                };
                Component.prototype.init = function () { };
                Component.prototype.buildInterface = function () { };
                Component.prototype.update = function () { };
                Component.prototype.destroy = function () { };
                return Component;
            }());
            exports_20("Component", Component);
        }
    }
});
System.register("dijon/display/Group", ["dijon/application"], function(exports_21, context_21) {
    "use strict";
    var __moduleName = context_21 && context_21.id;
    var application_4;
    var Group;
    return {
        setters:[
            function (application_4_1) {
                application_4 = application_4_1;
            }],
        execute: function() {
            Group = (function (_super) {
                __extends(Group, _super);
                function Group(x, y, name, addToStage, components, enableBody, physicsBodyType) {
                    if (x === void 0) { x = 0; }
                    if (y === void 0) { y = 0; }
                    if (name === void 0) { name = "dGroup"; }
                    if (addToStage === void 0) { addToStage = false; }
                    if (components === void 0) { components = null; }
                    _super.call(this, application_4.Application.getInstance().game, null, name, addToStage, enableBody, physicsBodyType);
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
                    if (!addToStage)
                        this.game.add.existing(this);
                    if (components)
                        this.addComponents(components);
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
                Group.prototype.flatten = function (delay) {
                    var _this = this;
                    if (delay === void 0) { delay = 0; }
                    if (delay === 0) {
                        this.cacheAsBitmap = true;
                    }
                    else {
                        this.game.time.events.add(delay, function () { _this.cacheAsBitmap = true; }, this);
                    }
                };
                Group.prototype.unFlatten = function () {
                    this.cacheAsBitmap = null;
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
                return Group;
            }(Phaser.Group));
            exports_21("Group", Group);
        }
    }
});
System.register("dijon/display/Sprite", ["dijon/application"], function(exports_22, context_22) {
    "use strict";
    var __moduleName = context_22 && context_22.id;
    var application_5;
    var Sprite;
    return {
        setters:[
            function (application_5_1) {
                application_5 = application_5_1;
            }],
        execute: function() {
            Sprite = (function (_super) {
                __extends(Sprite, _super);
                function Sprite(x, y, key, frame, name, components) {
                    if (name === void 0) { name = "dSprite"; }
                    if (components === void 0) { components = null; }
                    _super.call(this, application_5.Application.getInstance().game, x, y, key, frame);
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
                    if (components)
                        this.addComponents(components);
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
                Sprite.prototype.flatten = function (delay) {
                    var _this = this;
                    if (delay === void 0) { delay = 0; }
                    if (delay === 0) {
                        this.cacheAsBitmap = true;
                    }
                    else {
                        this.game.time.events.add(delay, function () { _this.cacheAsBitmap = true; }, this);
                    }
                };
                Sprite.prototype.unFlatten = function () {
                    this.cacheAsBitmap = null;
                };
                Object.defineProperty(Sprite.prototype, "resolution", {
                    get: function () {
                        return this.texture.baseTexture.resolution;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Sprite;
            }(Phaser.Sprite));
            exports_22("Sprite", Sprite);
        }
    }
});
System.register("dijon/display/InvisibleButton", ["dijon/display/Sprite"], function(exports_23, context_23) {
    "use strict";
    var __moduleName = context_23 && context_23.id;
    var Sprite_1;
    var InvisibleButton;
    return {
        setters:[
            function (Sprite_1_1) {
                Sprite_1 = Sprite_1_1;
            }],
        execute: function() {
            InvisibleButton = (function (_super) {
                __extends(InvisibleButton, _super);
                function InvisibleButton(x, y, name, w, h) {
                    _super.call(this, x, y, null, null, name);
                    this.init();
                    this.buildInterface();
                    this.setSize(w, h);
                }
                InvisibleButton.prototype.init = function () {
                    this.inputEnabled = true;
                };
                InvisibleButton.prototype.buildInterface = function () {
                    this._addHitRect();
                };
                InvisibleButton.prototype._addHitRect = function () {
                    if (this._hitWidth > 0 && this._hitHeight > 0) {
                        this.hitArea = new Phaser.Rectangle(0, 0, this._hitWidth, this._hitHeight);
                    }
                };
                InvisibleButton.prototype.setSize = function (w, h) {
                    this._hitWidth = w || 0;
                    this._hitHeight = h || 0;
                    this._addHitRect();
                };
                return InvisibleButton;
            }(Sprite_1.Sprite));
            exports_23("InvisibleButton", InvisibleButton);
        }
    }
});
System.register("dijon/display/NineSliceImage", ["dijon/display/Group"], function(exports_24, context_24) {
    "use strict";
    var __moduleName = context_24 && context_24.id;
    var Group_1;
    var NineSliceImage;
    return {
        setters:[
            function (Group_1_1) {
                Group_1 = Group_1_1;
            }],
        execute: function() {
            NineSliceImage = (function (_super) {
                __extends(NineSliceImage, _super);
                function NineSliceImage(x, y, width, height, key, texturePath, fillMiddle, topHeight, rightWidth, bottomHeight, leftWidth) {
                    if (fillMiddle === void 0) { fillMiddle = true; }
                    _super.call(this, x, y);
                    this.key = key;
                    this.texturePath = texturePath;
                    this.fillMiddle = fillMiddle;
                    this.topHeight = topHeight;
                    this.rightWidth = rightWidth;
                    this.bottomHeight = bottomHeight;
                    this.leftWidth = leftWidth;
                    this._interactiveBacking = null;
                    this._inputEnabled = false;
                    this._currentBounds = null;
                    this.__width = Math.round(width);
                    this.__height = Math.round(height);
                    this._build();
                    this.game.time.events.add(10, this.dFlatten, this);
                }
                NineSliceImage.prototype._build = function () {
                    this._inputLayer = this.add(this.game.add.group());
                    this._displayLayer = this.add(this.game.add.group());
                    this.tl = this._displayLayer.add(this.game.add.image(0, 0, this.key, this.texturePath + '/tl'));
                    this.tr = this._displayLayer.add(this.game.add.image(this.__width, 0, this.key, this.texturePath + '/tr'));
                    this.t = this._displayLayer.add(this.game.add.tileSprite(Math.floor(this.tl.getBounds().width), 0, Math.ceil(this.__width - this.tl.getBounds().width - this.tr.getBounds().width), this.topHeight || this.tl.getBounds().height, this.key, this.texturePath + '/t'));
                    this.l = this._displayLayer.add(this.game.add.tileSprite(0, Math.floor(this.tl.getBounds().height), Math.ceil(this.leftWidth || this.tl.getBounds().width), 100, this.key, this.texturePath + '/l'));
                    this.bl = this._displayLayer.add(this.game.add.image(0, this.__height, this.key, this.texturePath + '/bl'));
                    this.l.height = Math.ceil(this.__height - this.tl.getBounds().height - this.bl.getBounds().height);
                    this.b = this._displayLayer.add(this.game.add.tileSprite(Math.floor(this.bl.getBounds().width), this.__height, 100, this.bottomHeight || this.bl.getBounds().height, this.key, this.texturePath + '/b'));
                    this.br = this._displayLayer.add(this.game.add.image(this.__width, this.__height, this.key, this.texturePath + '/br'));
                    this.b.width = Math.ceil(this.__width - this.bl.getBounds().width - this.br.getBounds().width);
                    this.r = this._displayLayer.add(this.game.add.tileSprite(this.__width, Math.floor(this.tr.getBounds().height), Math.ceil(this.rightWidth || this.tr.getBounds().width), Math.ceil(this.__height - this.tl.getBounds().height - this.br.getBounds().height), this.key, this.texturePath + '/r'));
                    this.tr.setPivot('tr');
                    this.r.setPivot('tr');
                    this.br.setPivot('br');
                    this.b.setPivot('bl');
                    this.bl.setPivot('bl');
                    if (this.fillMiddle) {
                        this.tile = this._displayLayer.add(this.game.add.tileSprite(this.tl.getBounds().width - 1, this.tl.getBounds().height - 1, this.__width - this.tl.getBounds().width - this.tr.getBounds().width + 2, this.__height - this.tl.getBounds().height - this.br.getBounds().height + 4, this.key, this.texturePath + '/tile'));
                        this.sendToBack(this.tile);
                    }
                };
                NineSliceImage.prototype._addInteractiveBacking = function () {
                    var gfx = this.game.add.graphics();
                    gfx.beginFill(0xFF0000, 0);
                    gfx.drawRect(this.x, this.y, this.__width, this.__height);
                    gfx.endFill();
                    this._interactiveBacking = this._inputLayer.add(this.game.add.image(0, 0, gfx.generateTexture()));
                    this._interactiveBacking.inputEnabled = true;
                    this.game.world.remove(gfx);
                };
                NineSliceImage.prototype._setSize = function () {
                    this.dUnflatten();
                    this.t.width = this.b.width = Math.ceil(this.__width - this.tl.getBounds().width - this.tr.getBounds().width | 0);
                    this.r.x = this.tr.x = this.br.x = this.__width | 0;
                    this.l.height = this.r.height = (this.__height - this.tr.getBounds().height - this.bl.getBounds().height | 0);
                    this.bl.y = this.b.y = this.br.y = this.__height | 0;
                    if (this.fillMiddle) {
                        this.tile.width = Math.ceil(this.__width - this.tr.getBounds().width - this.tl.getBounds().width + 4);
                        this.tile.height = Math.ceil(this.__height - this.tl.getBounds().height - this.bl.getBounds().height + 4);
                    }
                    if (this._interactiveBacking != null) {
                        console.log('new width', this.__width);
                        this._interactiveBacking.width = this.__width;
                        this._interactiveBacking.height = this.__height;
                    }
                    this.game.time.events.add(10, this.dFlatten, this);
                };
                NineSliceImage.prototype._addInput = function () {
                    if (!this._interactiveBacking) {
                        this._addInteractiveBacking();
                    }
                };
                NineSliceImage.prototype._removeInput = function () {
                    if (!this._interactiveBacking) {
                        return;
                    }
                    this._interactiveBacking.inputEnabled = false;
                };
                NineSliceImage.prototype.dUnflatten = function () {
                    this._displayLayer.cacheAsBitmap = null;
                };
                NineSliceImage.prototype.dFlatten = function () {
                    this._displayLayer.cacheAsBitmap = true;
                };
                Object.defineProperty(NineSliceImage.prototype, "inputEnabled", {
                    set: function (value) {
                        this._inputEnabled = value;
                        if (this._inputEnabled) {
                            this._addInput();
                        }
                        else {
                            this._removeInput();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NineSliceImage.prototype, "events", {
                    get: function () {
                        if (!this._interactiveBacking || !this._interactiveBacking.inputEnabled) {
                            return null;
                        }
                        return this._interactiveBacking.events;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NineSliceImage.prototype, "input", {
                    get: function () {
                        return this._interactiveBacking.input;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NineSliceImage.prototype, "hSize", {
                    get: function () {
                        return this.__width;
                    },
                    set: function (value) {
                        this.__width = value;
                        this._setSize();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NineSliceImage.prototype, "vSize", {
                    get: function () {
                        return this.__height;
                    },
                    set: function (value) {
                        this.__height = value;
                        this._setSize();
                    },
                    enumerable: true,
                    configurable: true
                });
                NineSliceImage.prototype.setSize = function (width, height) {
                    this.__width = width;
                    this.__height = height;
                    this._setSize();
                };
                Object.defineProperty(NineSliceImage.prototype, "interactiveBacking", {
                    get: function () {
                        return this._interactiveBacking;
                    },
                    enumerable: true,
                    configurable: true
                });
                return NineSliceImage;
            }(Group_1.Group));
            exports_24("NineSliceImage", NineSliceImage);
        }
    }
});
System.register("dijon/display/Spine", ["dijon/application"], function(exports_25, context_25) {
    "use strict";
    var __moduleName = context_25 && context_25.id;
    var application_6;
    var Spine;
    return {
        setters:[
            function (application_6_1) {
                application_6 = application_6_1;
            }],
        execute: function() {
            Spine = (function (_super) {
                __extends(Spine, _super);
                function Spine(assetName, x, y, skeletonScale) {
                    if (assetName === void 0) { assetName = ''; }
                    if (x === void 0) { x = 0; }
                    if (y === void 0) { y = 0; }
                    if (skeletonScale === void 0) { skeletonScale = 1; }
                    _super.call(this, application_6.Application.getInstance().game, x, y, Spine.createSpineData(Spine.LOAD_NON_MESH ? (assetName + Spine.NON_MESH_SUFFIX) : assetName, skeletonScale));
                    this.assetName = assetName;
                    this.skeletonScale = skeletonScale;
                    this.debug = false;
                    this._created = false;
                    this.onCreate = new Phaser.Signal();
                    this.onAnimationComplete = null;
                    this.onMeshSwap = new Phaser.Signal();
                    this._canUpdate = true;
                    this._paused = false;
                    this._speed = 1;
                    this._skeletonScale = 1;
                    this._boundsOffset = new Phaser.Point(0, 0);
                    this._boundsWidthScale = 1;
                    this._boundsHeightScale = 1;
                    this._currentBounds = new PIXI.Rectangle();
                    this._physicsOffset = { x: 0, y: 0 };
                    this._physicsEnabled = false;
                    this.nonMeshVersion = false;
                    this._skeletonScale = skeletonScale;
                    if (Spine.LOAD_NON_MESH) {
                        this.nonMeshVersion = true;
                    }
                    Spine.initialize();
                    Spine.onNonMeshFPS.addOnce(this.loadNonMeshVersion, this);
                    this.name = assetName;
                    this.skeleton.setToSetupPose();
                    this._createBounds();
                    this.update(0);
                    this.autoUpdate = false;
                    this.onAnimationComplete = this.state.onAnimationComplete;
                    this.hitArea = new Phaser.Rectangle(0, -this.skeleton.data.height, this.skeleton.data.width, this.skeleton.data.height);
                    if (Spine.AUTO_MESH && Spine.LOAD_NON_MESH !== true) {
                        Spine.detectAutoMesh();
                    }
                }
                Spine.prototype._onCreateInternal = function () {
                    this._created = true;
                    this._create();
                    this.onCreate.dispatch();
                    this._canUpdate = true;
                };
                Spine.prototype._create = function () {
                };
                Spine.prototype.destroy = function () {
                    this.skeleton = null;
                    this.state = null;
                    this.stateData = null;
                    this.spineData = null;
                    if (this.slotContainers && this.slotContainers.length > 0) {
                        while (this.slotContainers.length > 0) {
                            this.slotContainers.shift().destroy(true, true);
                        }
                    }
                    this.slotContainers = null;
                    this.removeChildren();
                    _super.prototype.destroy.call(this);
                };
                Spine.prototype.update = function (dt) {
                    if (dt === void 0) { dt = Spine.DEFAULT_SPEED; }
                    if (!this._created && this.parent) {
                        this._onCreateInternal();
                    }
                    if (this._paused || !this._canUpdate) {
                        return;
                    }
                    if (this._physicsEnabled === true) {
                        this.x = this.physicsSprite.body.position.x + this._physicsOffset.x;
                        this.y = this.physicsSprite.body.position.y + this._physicsOffset.y + (this.scale.y > 0 ? this.physicsSprite.body.height : 0);
                    }
                    _super.prototype.update.call(this, this._speed * dt);
                };
                Spine.prototype.initPhysics = function (type, offset) {
                    this._createBounds();
                    if (type != Phaser.Physics.ARCADE &&
                        type != Phaser.Physics.NINJA &&
                        type != Phaser.Physics.P2JS)
                        return false;
                    if (offset.x !== undefined) {
                        this._physicsOffset.x = offset.x;
                    }
                    if (offset.y !== undefined) {
                        this._physicsOffset.y = offset.y;
                    }
                    this.physicsSprite = this.parent.addChild(this.game.add.sprite(this.x + this._physicsOffset.x, this.y - this._physicsOffset.y));
                    this.physicsSprite.name = this.assetName + '_physicsSprite';
                    this.game.physics.enable(this.physicsSprite, type);
                    this._physicsEnabled = (this.physicsSprite.body !== null);
                    return this._physicsEnabled;
                };
                Spine.prototype.disablePhysics = function () {
                    this._physicsEnabled = false;
                };
                Spine.prototype.enablePhysics = function () {
                    this._physicsEnabled = true;
                };
                Spine.prototype.loadNonMeshVersion = function () {
                    var _this = this;
                    if (this.nonMeshVersion === true) {
                        return;
                    }
                    this.nonMeshVersion = true;
                    this.alpha = 0;
                    var tracks = this.state.tracks;
                    var signal = this.state.onAnimationComplete;
                    while (this.children.length > 0) {
                        this.removeChildAt(0).destroy();
                    }
                    this.setup(Spine.createSpineData(this.name + Spine.NON_MESH_SUFFIX, this._skeletonScale));
                    this.state.apply(this.skeleton);
                    this.state.tracks = tracks;
                    if (signal !== null) {
                        this.state.onAnimationComplete.removeAll();
                        this.state.onAnimationComplete.dispose();
                        this.state.onAnimationComplete = null;
                        this.onAnimationComplete = null;
                        this.state.onAnimationComplete = signal;
                    }
                    else {
                        this.state.onAnimationComplete = new Phaser.Signal();
                    }
                    this.onAnimationComplete = this.state.onAnimationComplete;
                    this.game.asset.clearSpineAsset(this.name);
                    this.game.time.events.add(100, function () { _this.alpha = 1; }, this);
                    this.onMeshSwap.dispatch();
                };
                Spine.createSpineData = function (assetName, skeletonScale) {
                    if (skeletonScale === void 0) { skeletonScale = 1; }
                    var spine = PIXI.spine;
                    var spineAtlas = new spine.SpineRuntime.Atlas(application_6.Application.getInstance().game.cache.getText(assetName + '.atlas'), this.atlasCallbackFunction);
                    var spineJsonParser = new spine.SpineRuntime.SkeletonJsonParser(new spine.SpineRuntime.AtlasAttachmentParser(spineAtlas), skeletonScale);
                    var skeletonData = spineJsonParser.readSkeletonData(application_6.Application.getInstance().game.cache.getJSON(assetName + '.json'));
                    return skeletonData;
                };
                Spine.atlasCallbackFunction = function (line, callback) {
                    var lineArr = line.split('@' + application_6.Application.getInstance().game.resolution + 'x');
                    var url = lineArr.join('');
                    callback(new PIXI.BaseTexture(application_6.Application.getInstance().game.cache.getImage(url), PIXI.scaleModes.DEFAULT));
                };
                Object.defineProperty(Spine.prototype, "paused", {
                    get: function () {
                        return this._paused;
                    },
                    set: function (value) {
                        this._paused = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Spine.prototype, "speed", {
                    get: function () {
                        return this._speed;
                    },
                    set: function (value) {
                        this._speed = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Spine.prototype, "boundsOffset", {
                    get: function () {
                        return this._boundsOffset;
                    },
                    set: function (offset) {
                        this._boundsOffset = offset;
                        this._currentBounds = null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Spine.prototype, "boundsWidthScale", {
                    get: function () {
                        return this._boundsWidthScale;
                    },
                    set: function (scale) {
                        this._boundsWidthScale = scale;
                        this._currentBounds = null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Spine.prototype, "boundsHeightScale", {
                    get: function () {
                        return this._boundsHeightScale;
                    },
                    set: function (scale) {
                        this._boundsHeightScale = scale;
                        this._currentBounds = null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Spine.prototype.getBounds = function () {
                    return this._currentBounds || this._createBounds();
                };
                Spine.prototype._createBounds = function () {
                    this._currentBounds = new PIXI.Rectangle(this.x + this._boundsOffset.x * this.scale.x, this.y - (this.skeleton.data.height * this.scale.y) + this._boundsOffset.y * this.scale.y, this.skeleton.data.width * Math.abs(this.scale.x) * this.boundsWidthScale, this.skeleton.data.height * Math.abs(this.scale.y) * this.boundsHeightScale);
                    return this._currentBounds;
                };
                Spine.prototype.setScale = function (x, y) {
                    if (x === void 0) { x = null; }
                    if (y === void 0) { y = null; }
                    if (x !== null) {
                        this.scale.x = x;
                    }
                    if (y !== null) {
                        this.scale.y = y;
                    }
                    this._currentBounds = null;
                };
                Object.defineProperty(Spine.prototype, "width", {
                    get: function () {
                        return this.getBounds().width;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Spine.prototype, "height", {
                    get: function () {
                        return this.getBounds().height;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Spine.prototype, "body", {
                    get: function () {
                        if (!this._physicsEnabled) {
                            return null;
                        }
                        return this.physicsSprite.body;
                    },
                    enumerable: true,
                    configurable: true
                });
                Spine.initialize = function () {
                    if (Spine.INITIALIZED) {
                        return;
                    }
                    Spine.INITIALIZED = true;
                    Spine.game = application_6.Application.getInstance().game;
                    Spine.onNonMeshFPS = new Phaser.Signal();
                };
                Spine.detectAutoMesh = function () {
                    Spine.game.time.advancedTiming = true;
                    Spine.game.time.events.add(2000, Spine.checkNonMeshThreshold, Spine);
                };
                Spine.destroyNonMeshTimer = function () {
                    if (Spine.nonMeshTimer !== null) {
                        Spine.game.time.events.remove(Spine.nonMeshTimer);
                        Spine.nonMeshTimer = null;
                    }
                };
                Spine.checkNonMeshThreshold = function () {
                    Spine.destroyNonMeshTimer();
                    Spine.nonMeshTimer = Spine.game.time.events.repeat(500, 10, Spine.checkAutoMeshFPS, Spine);
                    Spine.game.time.events.add(5500, Spine.disableAdvancedTiming, Spine);
                };
                Spine.checkAutoMeshFPS = function () {
                    if (Spine.game.time.fps < Spine.NON_MESH_FPS) {
                        Spine.destroyNonMeshTimer();
                        Spine.LOAD_NON_MESH = true;
                        Spine.onNonMeshFPS.dispatch();
                        Spine.disableAdvancedTiming();
                    }
                };
                Spine.disableAdvancedTiming = function () {
                    Spine.game.time.advancedTiming = false;
                };
                Spine.setAutoMesh = function (enabled, nonMeshSuffix, nonMeshFPS) {
                    if (enabled === void 0) { enabled = true; }
                    if (nonMeshSuffix === void 0) { nonMeshSuffix = Spine.DEFAULT_NON_MESH_SUFFIX; }
                    if (nonMeshFPS === void 0) { nonMeshFPS = Spine.DEFAULT_NON_MESH_FPS; }
                    Spine.AUTO_MESH = enabled;
                    Spine.NON_MESH_SUFFIX = nonMeshSuffix;
                    Spine.NON_MESH_FPS = nonMeshFPS;
                };
                Spine.DEFAULT_SPEED = 0.0167;
                Spine.INITIALIZED = false;
                Spine.game = null;
                Spine.nonMeshTimer = null;
                Spine.LOAD_NON_MESH = false;
                Spine.AUTO_MESH = false;
                Spine.DEFAULT_NON_MESH_SUFFIX = '_nomesh';
                Spine.NON_MESH_SUFFIX = null;
                Spine.DEFAULT_NON_MESH_FPS = 35;
                Spine.NON_MESH_FPS = null;
                return Spine;
            }(PIXI.spine.Spine));
            exports_25("Spine", Spine);
        }
    }
});
System.register("dijon/display/Spine2", ["dijon/application"], function(exports_26, context_26) {
    "use strict";
    var __moduleName = context_26 && context_26.id;
    var application_7;
    var Spine2;
    return {
        setters:[
            function (application_7_1) {
                application_7 = application_7_1;
            }],
        execute: function() {
            Spine2 = (function (_super) {
                __extends(Spine2, _super);
                function Spine2(assetName, x, y, skeletonScale) {
                    if (assetName === void 0) { assetName = ''; }
                    if (x === void 0) { x = 0; }
                    if (y === void 0) { y = 0; }
                    if (skeletonScale === void 0) { skeletonScale = 1; }
                    _super.call(this, application_7.Application.getInstance().game, x, y, Spine2.createSpineData(Spine2.LOAD_NON_MESH ? (assetName + Spine2.NON_MESH_SUFFIX) : assetName, skeletonScale));
                    this.assetName = assetName;
                    this.skeletonScale = skeletonScale;
                    this.debug = false;
                    this._created = false;
                    this.onCreate = new Phaser.Signal();
                    this.onAnimationComplete = null;
                    this.onMeshSwap = new Phaser.Signal();
                    this._canUpdate = true;
                    this._paused = false;
                    this._speed = 1;
                    this._skeletonScale = 1;
                    this._boundsOffset = new Phaser.Point(0, 0);
                    this._boundsWidthScale = 1;
                    this._boundsHeightScale = 1;
                    this._currentBounds = new PIXI.Rectangle();
                    this._physicsOffset = { x: 0, y: 0 };
                    this._physicsEnabled = false;
                    this.nonMeshVersion = false;
                    this._skeletonScale = skeletonScale;
                    if (Spine2.LOAD_NON_MESH) {
                        this.nonMeshVersion = true;
                    }
                    Spine2.initialize();
                    Spine2.onNonMeshFPS.addOnce(this.loadNonMeshVersion, this);
                    this.name = assetName;
                    this.skeleton.setToSetupPose();
                    this._createBounds();
                    this.update(0);
                    this.autoUpdate = false;
                    this.onAnimationComplete = this.state.onAnimationComplete;
                    this.hitArea = new Phaser.Rectangle(0, -this.skeleton.data.height, this.skeleton.data.width, this.skeleton.data.height);
                    if (Spine2.AUTO_MESH && Spine2.LOAD_NON_MESH !== true) {
                        Spine2.detectAutoMesh();
                    }
                }
                Spine2.prototype._onCreateInternal = function () {
                    this._created = true;
                    this._create();
                    this.onCreate.dispatch();
                    this._canUpdate = true;
                };
                Spine2.prototype._create = function () {
                };
                Spine2.prototype.destroy = function () {
                    this.skeleton = null;
                    this.state = null;
                    this.stateData = null;
                    this.spineData = null;
                    if (this.slotContainers && this.slotContainers.length > 0) {
                        while (this.slotContainers.length > 0) {
                            this.slotContainers.shift().destroy(true, true);
                        }
                    }
                    this.slotContainers = null;
                    _super.prototype.destroy.call(this);
                };
                Spine2.prototype.update = function (dt) {
                    if (dt === void 0) { dt = Spine2.DEFAULT_SPEED; }
                    if (!this._created && this.parent) {
                        this._onCreateInternal();
                    }
                    if (this._paused || !this._canUpdate) {
                        return;
                    }
                    _super.prototype.update.call(this, this._speed * dt);
                };
                Spine2.prototype.initPhysics = function (type) {
                    this._createBounds();
                    if (type != Phaser.Physics.ARCADE &&
                        type != Phaser.Physics.NINJA &&
                        type != Phaser.Physics.P2JS)
                        return false;
                    if (type === Phaser.Physics.ARCADE) {
                        this.game.physics.arcade.enable(this, false);
                    }
                    else {
                        this.game.physics.enable(this, type);
                    }
                    this._physicsEnabled = (this.body !== null);
                    return this._physicsEnabled;
                };
                Spine2.prototype.disablePhysics = function () {
                    this._physicsEnabled = false;
                };
                Spine2.prototype.enablePhysics = function () {
                    this._physicsEnabled = true;
                };
                Spine2.prototype.loadNonMeshVersion = function () {
                    var _this = this;
                    if (this.nonMeshVersion === true) {
                        return;
                    }
                    this.nonMeshVersion = true;
                    this.alpha = 0;
                    var tracks = this.state.tracks;
                    var signal = this.state.onAnimationComplete;
                    while (this.children.length > 0) {
                        this.removeChildAt(0).destroy();
                    }
                    this.setup(Spine2.createSpineData(this.name + Spine2.NON_MESH_SUFFIX, this._skeletonScale));
                    this.state.apply(this.skeleton);
                    this.state.tracks = tracks;
                    if (signal !== null) {
                        this.state.onAnimationComplete.removeAll();
                        this.state.onAnimationComplete.dispose();
                        this.state.onAnimationComplete = null;
                        this.onAnimationComplete = null;
                        this.state.onAnimationComplete = signal;
                    }
                    else {
                        this.state.onAnimationComplete = new Phaser.Signal();
                    }
                    this.onAnimationComplete = this.state.onAnimationComplete;
                    this.game.asset.clearSpineAsset(this.name);
                    this.game.time.events.add(100, function () { _this.alpha = 1; }, this);
                    this.onMeshSwap.dispatch();
                };
                Spine2.createSpineData = function (assetName, skeletonScale) {
                    if (skeletonScale === void 0) { skeletonScale = 1; }
                    var spine = PIXI.spine;
                    var spineAtlas = new spine.SpineRuntime.Atlas(application_7.Application.getInstance().game.cache.getText(assetName + '.atlas'), this.atlasCallbackFunction);
                    var spineJsonParser = new spine.SpineRuntime.SkeletonJsonParser(new spine.SpineRuntime.AtlasAttachmentParser(spineAtlas), skeletonScale);
                    var skeletonData = spineJsonParser.readSkeletonData(application_7.Application.getInstance().game.cache.getJSON(assetName + '.json'));
                    return skeletonData;
                };
                Spine2.atlasCallbackFunction = function (line, callback) {
                    var lineArr = line.split('@' + application_7.Application.getInstance().game.resolution + 'x');
                    var url = lineArr.join('');
                    callback(new PIXI.BaseTexture(application_7.Application.getInstance().game.cache.getImage(url), PIXI.scaleModes.DEFAULT));
                };
                Object.defineProperty(Spine2.prototype, "paused", {
                    get: function () {
                        return this._paused;
                    },
                    set: function (value) {
                        this._paused = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Spine2.prototype, "speed", {
                    get: function () {
                        return this._speed;
                    },
                    set: function (value) {
                        this._speed = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Spine2.prototype, "boundsOffset", {
                    get: function () {
                        return this._boundsOffset;
                    },
                    set: function (offset) {
                        this._boundsOffset = offset;
                        this._currentBounds = null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Spine2.prototype, "boundsWidthScale", {
                    get: function () {
                        return this._boundsWidthScale;
                    },
                    set: function (scale) {
                        this._boundsWidthScale = scale;
                        this._currentBounds = null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Spine2.prototype, "boundsHeightScale", {
                    get: function () {
                        return this._boundsHeightScale;
                    },
                    set: function (scale) {
                        this._boundsHeightScale = scale;
                        this._currentBounds = null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Spine2.prototype.getBounds = function () {
                    return this._currentBounds || this._createBounds();
                };
                Spine2.prototype._createBounds = function () {
                    this._currentBounds = new PIXI.Rectangle(this.x + this._boundsOffset.x * this.scale.x, this.y - (this.skeleton.data.height * this.scale.y) + this._boundsOffset.y * this.scale.y, this.skeleton.data.width * Math.abs(this.scale.x) * this.boundsWidthScale, this.skeleton.data.height * Math.abs(this.scale.y) * this.boundsHeightScale);
                    return this._currentBounds;
                };
                Spine2.prototype.setScale = function (x, y) {
                    if (x === void 0) { x = null; }
                    if (y === void 0) { y = null; }
                    if (x !== null) {
                        this.scale.x = x;
                    }
                    if (y !== null) {
                        this.scale.y = y;
                    }
                    this._currentBounds = null;
                };
                Object.defineProperty(Spine2.prototype, "width", {
                    get: function () {
                        return this.getBounds().width;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Spine2.prototype, "height", {
                    get: function () {
                        return this.getBounds().height;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Spine2.prototype, "arcadeBody", {
                    get: function () {
                        return this.body;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Spine2.prototype, "created", {
                    get: function () {
                        return this._created;
                    },
                    enumerable: true,
                    configurable: true
                });
                Spine2.initialize = function () {
                    if (Spine2.INITIALIZED) {
                        return;
                    }
                    Spine2.INITIALIZED = true;
                    Spine2.game = application_7.Application.getInstance().game;
                    Spine2.onNonMeshFPS = new Phaser.Signal();
                };
                Spine2.detectAutoMesh = function () {
                    Spine2.game.time.advancedTiming = true;
                    Spine2.game.time.events.add(2000, Spine2.checkNonMeshThreshold, Spine2);
                };
                Spine2.destroyNonMeshTimer = function () {
                    if (Spine2.nonMeshTimer !== null) {
                        Spine2.game.time.events.remove(Spine2.nonMeshTimer);
                        Spine2.nonMeshTimer = null;
                    }
                };
                Spine2.checkNonMeshThreshold = function () {
                    Spine2.destroyNonMeshTimer();
                    Spine2.nonMeshTimer = Spine2.game.time.events.repeat(500, 10, Spine2.checkAutoMeshFPS, Spine2);
                    Spine2.game.time.events.add(5500, Spine2.disableAdvancedTiming, Spine2);
                };
                Spine2.checkAutoMeshFPS = function () {
                    if (Spine2.game.time.fps < Spine2.NON_MESH_FPS) {
                        Spine2.destroyNonMeshTimer();
                        Spine2.LOAD_NON_MESH = true;
                        Spine2.onNonMeshFPS.dispatch();
                        Spine2.disableAdvancedTiming();
                    }
                };
                Spine2.disableAdvancedTiming = function () {
                    Spine2.game.time.advancedTiming = false;
                };
                Spine2.setAutoMesh = function (enabled, nonMeshSuffix, nonMeshFPS) {
                    if (enabled === void 0) { enabled = true; }
                    if (nonMeshSuffix === void 0) { nonMeshSuffix = Spine2.DEFAULT_NON_MESH_SUFFIX; }
                    if (nonMeshFPS === void 0) { nonMeshFPS = Spine2.DEFAULT_NON_MESH_FPS; }
                    Spine2.AUTO_MESH = enabled;
                    Spine2.NON_MESH_SUFFIX = nonMeshSuffix;
                    Spine2.NON_MESH_FPS = nonMeshFPS;
                };
                Spine2.DEFAULT_SPEED = 0.0167;
                Spine2.INITIALIZED = false;
                Spine2.game = null;
                Spine2.nonMeshTimer = null;
                Spine2.LOAD_NON_MESH = false;
                Spine2.AUTO_MESH = false;
                Spine2.DEFAULT_NON_MESH_SUFFIX = '_nomesh';
                Spine2.NON_MESH_SUFFIX = null;
                Spine2.DEFAULT_NON_MESH_FPS = 35;
                Spine2.NON_MESH_FPS = null;
                return Spine2;
            }(PIXI.spine.Spine));
            exports_26("Spine2", Spine2);
        }
    }
});
System.register("dijon/display/Text", ["dijon/application", "dijon/utils"], function(exports_27, context_27) {
    "use strict";
    var __moduleName = context_27 && context_27.id;
    var application_8, utils_1;
    var Text;
    return {
        setters:[
            function (application_8_1) {
                application_8 = application_8_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }],
        execute: function() {
            Text = (function (_super) {
                __extends(Text, _super);
                function Text(x, y, text, fontName, fontSize, fontColor, fontAlign, wordWrap, width, lineSpacing, settings) {
                    if (text === void 0) { text = ""; }
                    if (fontSize === void 0) { fontSize = Text.DEFAULT_FONT_SIZE; }
                    if (fontColor === void 0) { fontColor = Text.DEFAULT_FONT_COLOR; }
                    if (fontAlign === void 0) { fontAlign = 'left'; }
                    if (wordWrap === void 0) { wordWrap = false; }
                    if (width === void 0) { width = 0; }
                    if (lineSpacing === void 0) { lineSpacing = 0; }
                    if (settings === void 0) { settings = null; }
                    _super.call(this, application_8.Application.getInstance().game, x, y, text, Text._addSettings({
                        font: fontSize + 'px ' + fontName,
                        fill: fontColor,
                        align: fontAlign,
                        wordWrap: wordWrap,
                        wordWrapWidth: width
                    }, settings));
                    this.lineSpacing = lineSpacing;
                    this.onAnimationComplete = new Phaser.Signal();
                    this._canUpdate = false;
                    this._textToAnimate = [];
                    this.stopAnimating = function () {
                        this._canUpdate = false;
                        this._textToAnimate = null;
                        this.game.time.events.remove(this._delayTimer);
                        this.game.time.events.remove(this._repeatTimer);
                    };
                    this.roundPixel = function () {
                        this.position.set(Math.round(this.x), Math.round(this.y));
                    };
                    this.text = text.replace(/'/g, "\'");
                    this._lowercaseText = this.text.toLowerCase();
                    this.setResolution();
                }
                Text.prototype.setText = function (text) {
                    _super.prototype.setText.call(this, text);
                    this._lowercaseText = this.text.toLowerCase();
                    this.setResolution();
                    return this;
                };
                Text.prototype.setResolution = function () {
                    if (!this.game || !utils_1.Device.cocoon) {
                        return;
                    }
                    else if (utils_1.Device.cocoon) {
                        this.resolution = this.game.resolution * this.game.resolution;
                    }
                };
                Text.prototype._startTextAnimation = function () {
                    this._canUpdate = true;
                    this._repeatTimer = this.game.time.events.repeat(this._letterTime * 100, this._textLength, this._updateTextAnimation, this);
                };
                Text.prototype._updateTextAnimation = function () {
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
                };
                Text.prototype.setColor = function (color) {
                    return this.highlightPhrase(this.text, color, false);
                };
                Text.prototype.resetColor = function () {
                    return this.highlightPhrase(this.text, this.style.fill, false);
                };
                Text.prototype.highlightPhrase = function (phrase, color, caseSensitive) {
                    if (caseSensitive === void 0) { caseSensitive = false; }
                    var text = caseSensitive ? this.text : this._lowercaseText;
                    phrase = caseSensitive ? phrase : phrase.toLowerCase();
                    var len = phrase.length;
                    var startIndex = text.indexOf(phrase);
                    var endIndex = startIndex + len;
                    while (startIndex <= endIndex) {
                        this.addColor(color, startIndex);
                        startIndex++;
                    }
                    this.addColor(this.style.fill, endIndex);
                };
                Text.prototype.animate = function (letterTime, delay) {
                    if (letterTime === void 0) { letterTime = 0.1; }
                    if (delay === void 0) { delay = 0; }
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
                };
                Text._addSettings = function (obj, settings) {
                    if (!settings)
                        return obj;
                    for (var prop in settings) {
                        if (settings.hasOwnProperty(prop)) {
                            obj[prop] = settings[prop];
                        }
                    }
                    return obj;
                };
                Object.defineProperty(Text.prototype, "realHeight", {
                    get: function () {
                        return this.scale.y * this.texture.frame.height / this.game.resolution;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Text.prototype, "realWidth", {
                    get: function () {
                        return this.scale.x * this.texture.frame.width / this.game.resolution;
                    },
                    enumerable: true,
                    configurable: true
                });
                Text.DEFAULT_FONT_SIZE = 12;
                Text.DEFAULT_FONT_COLOR = "#000000";
                Text.DEFAULT_FONT = "Helvetica Neue, Arial";
                Text.GLOBAL_PADDING_X = 0;
                Text.GLOBAL_PADDING_Y = 0;
                return Text;
            }(Phaser.Text));
            exports_27("Text", Text);
        }
    }
});
System.register("dijon/display", ["dijon/display/BitmapText", "dijon/display/Component", "dijon/display/Group", "dijon/display/InvisibleButton", "dijon/display/NineSliceImage", "dijon/display/Spine", "dijon/display/Spine2", "dijon/display/Sprite", "dijon/display/Text"], function(exports_28, context_28) {
    "use strict";
    var __moduleName = context_28 && context_28.id;
    return {
        setters:[
            function (BitmapText_1_1) {
                exports_28({
                    "BitmapText": BitmapText_1_1["BitmapText"]
                });
            },
            function (Component_1_1) {
                exports_28({
                    "Component": Component_1_1["Component"]
                });
            },
            function (Group_2_1) {
                exports_28({
                    "Group": Group_2_1["Group"]
                });
            },
            function (InvisibleButton_1_1) {
                exports_28({
                    "InvisibleButton": InvisibleButton_1_1["InvisibleButton"]
                });
            },
            function (NineSliceImage_1_1) {
                exports_28({
                    "NineSliceImage": NineSliceImage_1_1["NineSliceImage"]
                });
            },
            function (Spine_1_1) {
                exports_28({
                    "Spine": Spine_1_1["Spine"]
                });
            },
            function (Spine2_1_1) {
                exports_28({
                    "Spine2": Spine2_1_1["Spine2"]
                });
            },
            function (Sprite_2_1) {
                exports_28({
                    "Sprite": Sprite_2_1["Sprite"]
                });
            },
            function (Text_1_1) {
                exports_28({
                    "Text": Text_1_1["Text"]
                });
            }],
        execute: function() {
        }
    }
});
System.register("dijon/utils/Placeholders", ["dijon/application", "dijon/utils/Textures", "dijon/display"], function(exports_29, context_29) {
    "use strict";
    var __moduleName = context_29 && context_29.id;
    var application_9, Textures_1, display_1;
    var Placeholders;
    return {
        setters:[
            function (application_9_1) {
                application_9 = application_9_1;
            },
            function (Textures_1_1) {
                Textures_1 = Textures_1_1;
            },
            function (display_1_1) {
                display_1 = display_1_1;
            }],
        execute: function() {
            Placeholders = (function () {
                function Placeholders() {
                }
                Object.defineProperty(Placeholders, "game", {
                    get: function () {
                        return application_9.Application.getInstance().game;
                    },
                    enumerable: true,
                    configurable: true
                });
                Placeholders.image = function (x, y, texture, name) {
                    if (x === void 0) { x = 0; }
                    if (y === void 0) { y = 0; }
                    if (name === void 0) { name = ""; }
                    var imageInstance = new Phaser.Image(Placeholders.game, x, y, texture);
                    imageInstance.name = name;
                    return imageInstance;
                };
                Placeholders.button = function (x, y, width, height, autoSize, text, callback, callbackContext, defaultColor, overColor, downColor) {
                    if (x === void 0) { x = 0; }
                    if (y === void 0) { y = 0; }
                    if (width === void 0) { width = 100; }
                    if (height === void 0) { height = 50; }
                    if (autoSize === void 0) { autoSize = false; }
                    if (text === void 0) { text = 'button'; }
                    if (callback === void 0) { callback = null; }
                    if (callbackContext === void 0) { callbackContext = null; }
                    if (defaultColor === void 0) { defaultColor = 0xffffff; }
                    if (overColor === void 0) { overColor = 0xff0000; }
                    if (downColor === void 0) { downColor = 0x00ff00; }
                    var sprite = new Phaser.Sprite(Placeholders.game, x, y);
                    var textInstance = new display_1.Text(width * 0.5, height * 0.55, " " + text + " ", 'Arial', autoSize ? 25 : height * 0.6, '#000000');
                    textInstance.centerPivot();
                    textInstance.name = "Label";
                    if (autoSize) {
                        width = textInstance.realWidth + 10;
                        height = textInstance.realHeight + 10;
                        textInstance.position.set(width * 0.5, height * 0.55);
                    }
                    var upImage = Placeholders.image(0, 0, Textures_1.Textures.roundedRect(width, height, 10, defaultColor), "Up");
                    var overImage = Placeholders.image(0, 0, Textures_1.Textures.roundedRect(width, height, 10, overColor), "Over");
                    var downImage = Placeholders.image(0, 0, Textures_1.Textures.roundedRect(width, height, 10, downColor), "Down");
                    overImage.visible = false;
                    downImage.visible = false;
                    sprite.addChild(upImage);
                    sprite.addChild(overImage);
                    sprite.addChild(downImage);
                    sprite.addChild(textInstance);
                    sprite.inputEnabled = true;
                    sprite.input.useHandCursor = true;
                    sprite.events.onInputUp.add(function () {
                        downImage.visible = false;
                        overImage.visible = false;
                        upImage.visible = true;
                        if (callback) {
                            callback.call(callbackContext);
                        }
                    });
                    sprite.events.onInputDown.add(function () {
                        downImage.visible = true;
                        overImage.visible = false;
                        upImage.visible = false;
                    });
                    sprite.events.onInputOver.add(function () {
                        downImage.visible = false;
                        overImage.visible = true;
                        upImage.visible = false;
                    });
                    sprite.events.onInputOut.add(function () {
                        downImage.visible = false;
                        overImage.visible = false;
                        upImage.visible = true;
                    });
                    sprite.getBounds = function () {
                        return new PIXI.Rectangle(0, 0, upImage.width, upImage.height);
                    };
                    return sprite;
                };
                return Placeholders;
            }());
            exports_29("Placeholders", Placeholders);
        }
    }
});
System.register("dijon/utils/Time", ["dijon/application"], function(exports_30, context_30) {
    "use strict";
    var __moduleName = context_30 && context_30.id;
    var application_10;
    var Time;
    return {
        setters:[
            function (application_10_1) {
                application_10 = application_10_1;
            }],
        execute: function() {
            Time = (function () {
                function Time() {
                }
                Time.delayedCall = function (delayInMilliseconds, callback, callbackContext) {
                    var params = [];
                    for (var _i = 3; _i < arguments.length; _i++) {
                        params[_i - 3] = arguments[_i];
                    }
                    if (params === undefined) {
                        params = [];
                    }
                    params.unshift(delayInMilliseconds, callback, callbackContext);
                    return application_10.Application.getInstance().game.time.events.add.apply(application_10.Application.getInstance().game.time.events, params);
                };
                return Time;
            }());
            exports_30("Time", Time);
        }
    }
});
System.register("dijon/utils/Util", [], function(exports_31, context_31) {
    "use strict";
    var __moduleName = context_31 && context_31.id;
    var Util;
    return {
        setters:[],
        execute: function() {
            Util = (function () {
                function Util() {
                }
                Util.isNumber = function (value) {
                    return (+value === +value);
                };
                return Util;
            }());
            exports_31("Util", Util);
        }
    }
});
System.register("dijon/utils", ["dijon/utils/Device", "dijon/utils/Logger", "dijon/utils/Notifications", "dijon/utils/Placeholders", "dijon/utils/Textures", "dijon/utils/Time", "dijon/utils/Util"], function(exports_32, context_32) {
    "use strict";
    var __moduleName = context_32 && context_32.id;
    return {
        setters:[
            function (Device_1_1) {
                exports_32({
                    "Device": Device_1_1["Device"]
                });
            },
            function (Logger_1_1) {
                exports_32({
                    "Logger": Logger_1_1["Logger"]
                });
            },
            function (Notifications_1_1) {
                exports_32({
                    "Notifications": Notifications_1_1["Notifications"]
                });
            },
            function (Placeholders_1_1) {
                exports_32({
                    "Placeholders": Placeholders_1_1["Placeholders"]
                });
            },
            function (Textures_2_1) {
                exports_32({
                    "Textures": Textures_2_1["Textures"]
                });
            },
            function (Time_1_1) {
                exports_32({
                    "Time": Time_1_1["Time"]
                });
            },
            function (Util_1_1) {
                exports_32({
                    "Util": Util_1_1["Util"]
                });
            }],
        execute: function() {
        }
    }
});
System.register("dijon/core/AnalyticsManager", ["dijon/utils"], function(exports_33, context_33) {
    "use strict";
    var __moduleName = context_33 && context_33.id;
    var utils_2;
    var AnalyticsManager, AnalyticsException;
    return {
        setters:[
            function (utils_2_1) {
                utils_2 = utils_2_1;
            }],
        execute: function() {
            AnalyticsManager = (function () {
                function AnalyticsManager(enabled, category) {
                    if (enabled === void 0) { enabled = true; }
                    if (category === void 0) { category = null; }
                    this.enabled = enabled;
                    this.category = category;
                    this._trackerId = null;
                    this._startedWithTrackerId = false;
                }
                AnalyticsManager.prototype.trackEvent = function (action, label, value) {
                    if (action === void 0) { action = null; }
                    if (label === void 0) { label = null; }
                    if (value === void 0) { value = null; }
                    if (!this.active || !this.enabled) {
                        return;
                    }
                    if (!action) {
                        throw new AnalyticsException('No action defined');
                    }
                    if (utils_2.Device.cocoon && window['analytics'] !== undefined) {
                        var analytics = window['analytics'];
                        analytics.trackEvent(this.category, action, label, value);
                        return;
                    }
                    if (value) {
                        this.ga('send', 'event', this.category, action, label, value);
                    }
                    else if (label) {
                        this.ga('send', 'event', this.category, action, label);
                    }
                    else {
                        this.ga('send', 'event', this.category, action);
                    }
                };
                AnalyticsManager.prototype.trackOmnitureEvent = function (gameName, activity, isGameEvent) {
                    if (!this.enabled) {
                        return;
                    }
                    if (typeof window['trackFlashEvent'] === 'undefined')
                        return false;
                    window['trackFlashEvent'](gameName, activity, isGameEvent);
                };
                AnalyticsManager.prototype._startWithTrackerId = function () {
                    var self = this;
                    if (utils_2.Device.cocoon && window['analytics'] !== undefined) {
                        var analytics = window['analytics'];
                        analytics.startTrackerWithId(this._trackerId);
                    }
                };
                Object.defineProperty(AnalyticsManager.prototype, "trackerId", {
                    get: function () {
                        return this._trackerId;
                    },
                    set: function (value) {
                        this._trackerId = value;
                        if (!this._startedWithTrackerId) {
                            this._startWithTrackerId();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AnalyticsManager.prototype, "active", {
                    get: function () {
                        return (window['ga'] || (utils_2.Device.cocoon && window['analytics'] !== undefined)) ? true : false;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AnalyticsManager.prototype, "ga", {
                    get: function () {
                        return window['ga'];
                    },
                    enumerable: true,
                    configurable: true
                });
                return AnalyticsManager;
            }());
            exports_33("AnalyticsManager", AnalyticsManager);
            AnalyticsException = (function () {
                function AnalyticsException(message) {
                    this.message = message;
                    this.name = 'AnalyticsException';
                }
                return AnalyticsException;
            }());
            exports_33("AnalyticsException", AnalyticsException);
        }
    }
});
System.register("dijon/core/AssetManager", ["dijon/application", "dijon/utils", "dijon/display"], function(exports_34, context_34) {
    "use strict";
    var __moduleName = context_34 && context_34.id;
    var application_11, utils_3, display_2;
    var AssetManager;
    return {
        setters:[
            function (application_11_1) {
                application_11 = application_11_1;
            },
            function (utils_3_1) {
                utils_3 = utils_3_1;
            },
            function (display_2_1) {
                display_2 = display_2_1;
            }],
        execute: function() {
            AssetManager = (function () {
                function AssetManager() {
                    this._data = {};
                    this._baseURL = '';
                    this._pathObj = {};
                    this._assetPath = null;
                    this._dataPath = null;
                    this._spriteSheetPath = null;
                    this._imgPath = null;
                    this._videoPath = null;
                    this._spinePath = null;
                    this._fontPath = null;
                    this._bitmapFontPath = null;
                    this._physicsPath = null;
                    this._audioSpritePath = null;
                    this._soundPath = null;
                    this._soundDecodingModifier = 2;
                    this._res = 1;
                    this._resolution = null;
                    this._loadData = {};
                    this._autoLoadData = {};
                    this._completedLoads = {};
                    this._requiredData = {};
                    this._currentAssetList = null;
                    this._hasFiles = false;
                    this._soundsToDecode = [];
                    this._isLoadingQueue = false;
                    this._fileCompleteProgress = 0;
                    this._maxPercent = 100;
                    this._numSounds = 0;
                    this._soundsDecoded = 0;
                    this._cacheBustVersion = '';
                    this.onLoadStart = new Phaser.Signal();
                    this.onFileStart = new Phaser.Signal();
                    this.onFileComplete = new Phaser.Signal();
                    this.onLoadComplete = new Phaser.Signal();
                    this.onLoadCompleteAndAudioDecoded = new Phaser.Signal();
                    this.onBackgroundLoadStart = new Phaser.Signal();
                    this.onBackgroundFileStart = new Phaser.Signal();
                    this.onBackgroundFileComplete = new Phaser.Signal();
                    this.onBackgroundLoadComplete = new Phaser.Signal();
                    this.onBackgroundLoadCompleteAndAudioDecoded = new Phaser.Signal();
                    this._init();
                }
                AssetManager.prototype._init = function () {
                    this.app = application_11.Application.getInstance();
                    this.game = this.app.game;
                    this.baseURL = '';
                    this.paths = null;
                    this.resolution = this.game.resolution;
                };
                AssetManager.prototype._parseAssetList = function (key, list) {
                    var _this = this;
                    this._autoLoadData[key] = list.autoload;
                    this._requiredData[key] = list.required;
                    this._loadData[key] = [];
                    list.assets.forEach(function (asset) {
                        _this._loadData[key].push(asset);
                    });
                };
                AssetManager.prototype._loadAssets = function (id) {
                    var assets = this._loadData[id], i;
                    for (i = 0; i < assets.length; i++) {
                        this._loadAsset(assets[i]);
                    }
                };
                AssetManager.prototype._backgroundLoadStart = function () {
                    this.onBackgroundLoadStart.dispatch();
                };
                AssetManager.prototype._backgroundFileComplete = function (progress, id, fileIndex, totalFiles) {
                    if (this.game.cache.checkKey(Phaser.Cache.IMAGE, id)) {
                        this._setBaseTextureResolution(this.game.cache.getBaseTexture(id));
                    }
                    this._fileCompleteProgress = progress;
                    this.onBackgroundFileComplete.dispatch(progress, id, fileIndex, totalFiles);
                };
                AssetManager.prototype._backgroundLoadComplete = function () {
                    this.game.load.onFileComplete.remove(this._backgroundFileComplete, this);
                    this.onBackgroundLoadComplete.dispatch();
                    this._checkSoundDecoding(this.onBackgroundLoadCompleteAndAudioDecoded);
                };
                AssetManager.prototype._gameLoadStart = function () {
                    this.onLoadStart.dispatch();
                };
                AssetManager.prototype._gameFileStart = function () {
                    this.onFileStart.dispatch();
                };
                AssetManager.prototype._gameFileComplete = function (progress, id, fileIndex, totalFiles) {
                    if (this.game.cache.checkKey(Phaser.Cache.IMAGE, id)) {
                        this._setBaseTextureResolution(this.game.cache.getBaseTexture(id));
                    }
                    this._fileCompleteProgress = progress;
                    this.onFileComplete.dispatch(this.getLoadProgress(), id, fileIndex, totalFiles);
                };
                AssetManager.prototype._setBaseTextureResolution = function (texture) {
                    if (texture && texture.source.src.indexOf('@' + this.resolution + 'x') >= 0) {
                        texture.resolution = this.resolution;
                    }
                };
                ;
                AssetManager.prototype._gameLoadComplete = function () {
                    this._completedLoads[this._currentAssetList] = true;
                    this.onLoadComplete.dispatch();
                    this.game.load.onFileStart.remove(this._gameFileStart, this);
                    this.game.load.onFileComplete.remove(this._gameFileComplete, this);
                    this._checkSoundDecoding(this.onLoadCompleteAndAudioDecoded);
                };
                AssetManager.prototype._checkSoundDecoding = function (eventToDispatch) {
                    var sound, i, isAudioSprite;
                    if (this._soundsToDecode && this._soundsToDecode.length > 0) {
                        for (i = 0; i < this._soundsToDecode.length; i++) {
                            isAudioSprite = this._soundsToDecode[i].isAudioSprite;
                            sound = this.game.add.sound(this._soundsToDecode[i].url);
                            sound.__isAudioSprite = isAudioSprite;
                            sound.eventToDispatch = eventToDispatch;
                            sound.onDecoded.addOnce(this._onSoundDecoded, this);
                        }
                    }
                    else {
                        eventToDispatch.dispatch();
                    }
                };
                AssetManager.prototype._onSoundDecoded = function (sound) {
                    var soundIndex = this._soundsToDecode.indexOf(sound.key);
                    this._soundsToDecode.splice(soundIndex, 1);
                    if (typeof this.game.audio !== 'undefined' && typeof this.game.audio.addAudio !== 'undefined') {
                        if (sound.__isAudioSprite)
                            this.game.add.audioSprite(sound.key);
                        this.game.audio.addAudio(sound.key, sound.__isAudioSprite);
                    }
                    this._soundsDecoded++;
                    this._maxPercent = (100 - (this._numSounds * this.soundDecodingModifier) + (this._soundsDecoded * this.soundDecodingModifier));
                    this._gameFileComplete(100);
                    if (this._soundsToDecode.length === 0) {
                        sound.eventToDispatch.dispatch();
                    }
                };
                AssetManager.prototype._getAssetKey = function (fileName) {
                    if (fileName.indexOf('.') < 0)
                        return fileName;
                    var ext = fileName.split('.');
                    ext.pop();
                    return ext.join('');
                };
                AssetManager.prototype._getExtension = function (fileName) {
                    return fileName.split('.').pop();
                };
                AssetManager.prototype._getResolution = function (res) {
                    var result = '';
                    if (typeof res === 'string') {
                        res = parseFloat(res);
                    }
                    if (res === undefined) {
                        res = this.resolution;
                    }
                    if (res > 1.5) {
                        result = AssetManager.RESOLUTION_2X;
                    }
                    return result;
                };
                AssetManager.prototype._loadAsset = function (asset) {
                    var type = asset.type, url = asset.url || asset.key;
                    switch (type) {
                        case AssetManager.ASSET_LIST:
                            this._loadAssets(asset.id);
                            break;
                        case AssetManager.SOUND:
                            this.loadSound(url, asset.extensions);
                            break;
                        case AssetManager.AUDIO_SPRITE:
                            this.loadAudioSprite(url, asset.extensions);
                            break;
                        case AssetManager.IMAGE:
                            this.loadImage(url, this._getResolution(asset.resolution));
                            break;
                        case AssetManager.VIDEO:
                            this.loadVideo(url, this._getResolution(asset.resolution));
                            break;
                        case AssetManager.ATLAS:
                            this.loadAtlas(url, this._getResolution(asset.resolution));
                            break;
                        case AssetManager.TEXT:
                            this.loadText(url);
                            break;
                        case AssetManager.JSON:
                            this.loadJSON(url);
                            break;
                        case AssetManager.TILEMAP:
                            this.loadTilemap(url);
                            break;
                        case AssetManager.TILEDMAP:
                            this.loadTiledmap(url, asset.assets);
                            break;
                        case AssetManager.PHYSICS:
                            this.loadPhysics(url);
                            break;
                        case AssetManager.SPINE:
                            this.loadSpine(url, this._getResolution(asset.resolution));
                            break;
                        case AssetManager.BITMAP_FONT:
                            this.loadBitmapFont(url, this._getResolution(asset.resolution));
                            break;
                    }
                };
                AssetManager.prototype._parseData = function () {
                    var key;
                    for (key in this._data) {
                        this._parseAssetList(key, this._data[key]);
                    }
                };
                AssetManager.prototype._getCacheBustedUrl = function (url) {
                    if (this._cacheBustVersion === undefined || this._cacheBustVersion === '') {
                        return url;
                    }
                    return url + '?v=' + this._cacheBustVersion;
                };
                AssetManager.prototype.loadText = function (url) {
                    var key = this._getAssetKey(url);
                    return this.game.load.text(key, this._getCacheBustedUrl(this._dataPath + '/' + url));
                };
                AssetManager.prototype.loadJSON = function (key) {
                    key = this._getAssetKey(key);
                    return this.game.load.json(key, this._getCacheBustedUrl(this._dataPath + '/' + key + '.json'));
                };
                AssetManager.prototype.loadTilemap = function (key) {
                    key = this._getAssetKey(key);
                    return this.game.load.tilemap(key, this._getCacheBustedUrl(this._dataPath + '/tilemap/' + key + '.json'), null, Phaser.Tilemap.TILED_JSON);
                };
                AssetManager.prototype.loadTiledmap = function (key, assets) {
                    var _this = this;
                    if (Phaser.Plugin['Tiled'] === undefined) {
                        console.log('tiledmap requires the phaser-tiled plugin from https://github.com/englercj/phaser-tiled');
                        return null;
                    }
                    var cacheKey = Phaser.Plugin['Tiled'].utils.cacheKey;
                    this.game.load['tiledmap'](cacheKey(key, 'tiledmap'), this._getCacheBustedUrl(this._dataPath + '/tilemap/' + key + '.json'), null, Phaser.Tilemap.TILED_JSON);
                    assets.forEach(function (asset) {
                        switch (asset.type) {
                            case AssetManager.TILEDMAP_TILESET:
                            case AssetManager.TILEDMAP_LAYER:
                                _this.loadTiledmapImage(key, asset.type, asset);
                                break;
                        }
                    });
                };
                AssetManager.prototype.loadTiledmapImage = function (key, tilesetImageType, asset) {
                    var cacheKey = Phaser.Plugin['Tiled'].utils.cacheKey;
                    var resolution = '';
                    var newKey = this._getAssetKey(asset.url);
                    var cKey = cacheKey(key, 'tileset', newKey);
                    if (typeof asset.resolution !== 'string') {
                        resolution = this._getResolution(asset.resolution);
                    }
                    var url = this._getAssetKey(newKey + resolution + '.' + this._getExtension(asset.url));
                    console.log(asset.url, cKey);
                    this.game.load.image(cKey, this._getCacheBustedUrl(this._spriteSheetPath + '/' + url + '.png'));
                };
                AssetManager.prototype.loadPhysics = function (key) {
                    key = this._getAssetKey(key);
                    return this.game.load.physics(key, this._getCacheBustedUrl(this._physicsPath + '/' + key + '.json'));
                };
                AssetManager.prototype.loadAtlas = function (url, resolution) {
                    if (typeof resolution !== 'string') {
                        resolution = this._getResolution(resolution);
                    }
                    if (this.game.cache.checkImageKey(url)) {
                        return url;
                    }
                    return this.game.load.atlasJSONHash(url, this._getCacheBustedUrl(this._spriteSheetPath + '/' + url + resolution + '.png'), this._getCacheBustedUrl(this._spriteSheetPath + '/' + url + resolution + '.json'));
                };
                AssetManager.prototype.loadImage = function (url, resolution) {
                    if (typeof resolution !== 'string') {
                        resolution = this._getResolution(resolution);
                    }
                    var key = this._getAssetKey(url);
                    if (this.game.cache.checkImageKey(key)) {
                        return key;
                    }
                    url = key + resolution + '.' + this._getExtension(url);
                    return this.game.load.image(key, this._getCacheBustedUrl(this._imgPath + '/' + url));
                };
                AssetManager.prototype.loadVideo = function (url, resolution) {
                    if (typeof resolution !== 'string') {
                        resolution = this._getResolution(resolution);
                    }
                    var key = this._getAssetKey(url);
                    if (this.game.cache.checkVideoKey(key)) {
                        return key;
                    }
                    url = key + resolution + '.' + this._getExtension(url);
                    return this.game.load.video(key, this._getCacheBustedUrl(this._videoPath + '/' + url));
                };
                AssetManager.prototype.loadSpine = function (url, resolution) {
                    if (typeof resolution !== 'string') {
                        resolution = this._getResolution(resolution);
                    }
                    if (resolution === '') {
                        resolution = '@1x';
                    }
                    var key = this._getAssetKey(url);
                    if (this.game.cache.checkImageKey(key)) {
                        return key;
                    }
                    url = key + resolution + '.png';
                    var jsonUrl = key + '.json';
                    var atlasUrl = key + resolution + '.atlas';
                    this.game.load.json(key + '.json', this._getCacheBustedUrl(this._spinePath + '/' + jsonUrl));
                    this.game.load.text(key + '.atlas', this._getCacheBustedUrl(this._spinePath + '/' + atlasUrl));
                    this.game.load.image(key + '.png', this._getCacheBustedUrl(this._spinePath + '/' + url));
                    if (display_2.Spine.AUTO_MESH === true && key.indexOf(display_2.Spine.NON_MESH_SUFFIX) === -1) {
                        this.loadSpine(key + display_2.Spine.NON_MESH_SUFFIX);
                    }
                };
                AssetManager.prototype.loadBitmapFont = function (url, resolution) {
                    if (typeof resolution !== 'string') {
                        resolution = this._getResolution(resolution);
                    }
                    this.game.load.bitmapFont(url, this._getCacheBustedUrl(this._bitmapFontPath + '/' + url + resolution + '.png'), this._getCacheBustedUrl(this._bitmapFontPath + '/' + url + resolution + '.json'));
                };
                AssetManager.prototype.loadAudio = function (url, exts, isAudioSprite) {
                    var type, path;
                    if (this.game.cache.checkSoundKey(url) && this.game.cache.getSound(url).isDecoded) {
                        return;
                    }
                    if (typeof type === 'undefined') {
                        type = 'sound';
                    }
                    if (exts.indexOf(',') >= 0) {
                        exts = exts.split(',');
                    }
                    if (this.game.device.iOS && exts.indexOf('m4a') === -1) {
                        exts.unshift('m4a');
                    }
                    if (typeof exts === 'object') {
                        path = [];
                        for (var i = 0; i < exts.length; i++) {
                            path.push(this._getCacheBustedUrl((isAudioSprite ? this._audioSpritePath : this._soundPath) + '/' + url + '.' + exts[i]));
                        }
                    }
                    else {
                        path = this._getCacheBustedUrl((isAudioSprite ? this._audioSpritePath : this._soundPath) + '/' + type + '/' + url + '.' + exts);
                    }
                    if (isAudioSprite) {
                        this.game.load.audiosprite(url, path, this._audioSpritePath + '/' + url + '.json');
                    }
                    else {
                        this.game.load.audio(url, path);
                    }
                    this._soundsToDecode.push({
                        url: url,
                        isAudioSprite: isAudioSprite
                    });
                };
                AssetManager.prototype.loadSound = function (url, exts) {
                    return this.loadAudio(url, exts, false);
                };
                AssetManager.prototype.loadAudioSprite = function (url, exts) {
                    return this.loadAudio(url, exts, true);
                };
                AssetManager.prototype.loadAssets = function (id, background) {
                    if (background === void 0) { background = false; }
                    this._currentAssetList = id;
                    this.game.load.onFileComplete.remove(this._backgroundFileComplete, this);
                    this.game.load.onFileComplete.remove(this._gameFileComplete, this);
                    this._hasFiles = false;
                    this._soundsToDecode = [];
                    if (this._data === undefined) {
                        return;
                    }
                    if (this._data[id] === undefined || this._data[id].assets === undefined || this._data[id].assets.length < 1) {
                        return console.log('no preload data registered for ', id);
                    }
                    this._loadAssets(id);
                    this._hasFiles = this.game.load.totalQueuedFiles() > 0;
                    if (background) {
                        this.game.load.onLoadStart.addOnce(this._backgroundLoadStart, this);
                        this.game.load.onFileComplete.add(this._backgroundFileComplete, this);
                        this.game.load.onLoadComplete.addOnce(this._backgroundLoadComplete, this);
                    }
                    else {
                        this.game.load.onLoadStart.addOnce(this._gameLoadStart, this);
                        this.game.load.onFileStart.add(this._gameFileStart, this);
                        this.game.load.onFileComplete.add(this._gameFileComplete, this);
                        this.game.load.onLoadComplete.addOnce(this._gameLoadComplete, this);
                    }
                    if (!this._hasFiles) {
                        this._gameLoadStart();
                        this._gameFileComplete(100);
                        this._gameLoadComplete();
                        return;
                    }
                    this._numSounds = this._soundsToDecode.length;
                    this._soundsDecoded = 0;
                    this._maxPercent = 100 - (this._numSounds * this.soundDecodingModifier);
                    if (background) {
                        this.game.load.start();
                    }
                };
                AssetManager.prototype.loadQueue = function () {
                    if (this._isLoadingQueue) {
                        return;
                    }
                    if (typeof this._data === 'undefined') {
                        return console.log('no preload queue to load');
                    }
                    var assets, state, i;
                    for (state in this._data) {
                        if (this._autoLoadData[state]) {
                            assets = this._data[state].assets;
                            for (i = 0; i < assets.length; i++) {
                                this._loadAsset(assets[i]);
                            }
                        }
                    }
                    this.game.load.start();
                    this._isLoadingQueue = true;
                    this.game.load.onLoadStart.addOnce(this._backgroundLoadStart, this);
                    this.game.load.onFileComplete.add(this._backgroundFileComplete, this);
                    this.game.load.onLoadComplete.addOnce(this._backgroundLoadComplete, this);
                };
                AssetManager.prototype.getLoadProgress = function () {
                    var adjustedProgress = this._fileCompleteProgress * this._maxPercent / 100;
                    return adjustedProgress;
                };
                AssetManager.prototype.allSoundsDecoded = function () {
                    return this._soundsToDecode.length === 0;
                };
                AssetManager.prototype.setData = function (data) {
                    this._data = data;
                    this._loadData = {};
                    this._parseData();
                    this.sendNotification(utils_3.Notifications.ASSET_MANAGER_DATA_SET, this._data);
                };
                AssetManager.prototype.clearAssets = function (id, clearAudio, clearAtlasses, clearImages, clearText, clearJSON) {
                    if (clearAudio === void 0) { clearAudio = true; }
                    if (clearAtlasses === void 0) { clearAtlasses = true; }
                    if (clearImages === void 0) { clearImages = true; }
                    if (clearText === void 0) { clearText = true; }
                    if (clearJSON === void 0) { clearJSON = true; }
                    var data = this._data[id];
                    console.log('clearing: ', id, data);
                    if (!data || typeof data === 'undefined' || !data.assets || data.assets.length < 1) {
                        return console.log('no assets', data);
                    }
                    var assets = data.assets;
                    for (var i = 0; i < assets.length; i++) {
                        console.log('clearing type', assets[i].type);
                        if (assets[i].type === AssetManager.ASSET_LIST) {
                            this.clearAssets(assets[i].id, clearAudio, clearAtlasses, clearImages, clearText, clearJSON);
                            continue;
                        }
                        this.clearAsset(assets[i], clearAudio, clearAtlasses, clearImages, clearText, clearJSON);
                    }
                    this._completedLoads[id] = false;
                    this.sendNotification(utils_3.Notifications.ASSET_MANAGER_ASSETS_CLEARED, id);
                };
                AssetManager.prototype.clearAsset = function (asset, clearAudio, clearAtlasses, clearImages, clearText, clearJSON) {
                    if (clearAudio === void 0) { clearAudio = true; }
                    if (clearAtlasses === void 0) { clearAtlasses = true; }
                    if (clearImages === void 0) { clearImages = true; }
                    if (clearText === void 0) { clearText = true; }
                    if (clearJSON === void 0) { clearJSON = true; }
                    var type = asset.type, url = asset.url, required = asset.required;
                    if (required) {
                        console.log('the ' + type + ' asset: ' + url + ' is required and will not be cleared');
                        return;
                    }
                    switch (type) {
                        case AssetManager.AUDIO:
                            if (clearAudio) {
                                this.game.sound.removeByKey(url);
                                this.game.cache.removeSound(url);
                            }
                            break;
                        case AssetManager.IMAGE:
                            if (clearImages) {
                                this.clearImage(url);
                            }
                            break;
                        case AssetManager.ATLAS:
                            if (clearAtlasses) {
                                this.clearImage(url);
                                this.game.cache.removeJSON(url);
                            }
                            break;
                        case AssetManager.TEXT:
                            if (clearText) {
                                this.game.cache.removeText(url);
                            }
                            break;
                        case AssetManager.JSON:
                            if (clearJSON) {
                                this.game.cache.removeJSON(url);
                            }
                            break;
                        case AssetManager.PHYSICS:
                            if (clearJSON) {
                                this.game.cache.removePhysics(url);
                            }
                            break;
                        case AssetManager.SPINE:
                            this.clearSpineAsset(asset.url);
                            break;
                    }
                };
                AssetManager.prototype.clearImage = function (url) {
                    var img = this.game.cache.getImage(url, true);
                    this.game.cache.removeImage(url);
                    console.log(img.base);
                    console.log(img.base.imageUrl);
                    if (img && img.data.dispose !== undefined) {
                        img.data.dispose();
                    }
                    img = null;
                };
                AssetManager.prototype.clearSpineAsset = function (id) {
                    this.game.cache.removeJSON(id + '.json');
                    this.game.cache.removeText(id + '.atlas');
                    this.clearImage(id + '.png');
                };
                AssetManager.prototype.hasLoadedAssets = function (id) {
                    return this._completedLoads[id] === true;
                };
                AssetManager.prototype.sendNotification = function (notificationName, notificationBody) {
                    return this.app.sendNotification(notificationName, notificationBody);
                };
                Object.defineProperty(AssetManager.prototype, "baseURL", {
                    set: function (baseURL) {
                        if (baseURL && baseURL !== undefined && baseURL.charAt(baseURL.length - 1) !== '/')
                            baseURL += '/';
                        this._baseURL = baseURL;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AssetManager.prototype, "paths", {
                    set: function (pathObj) {
                        this._pathObj = pathObj || {};
                        this._assetPath = this._baseURL + (this._pathObj.assetPath || 'assets');
                        this._dataPath = this._baseURL + (this._pathObj.dataPath || 'assets/data');
                        this._spriteSheetPath = this._baseURL + (this._pathObj.spritesheetPath || 'assets/img/spritesheets');
                        this._imgPath = this._baseURL + (this._pathObj.imgPath || 'assets/img');
                        this._videoPath = this._baseURL + (this._pathObj.imgPath || 'assets/video');
                        this._spinePath = this._baseURL + (this._pathObj.spinePath || 'assets/spine');
                        this._fontPath = this._baseURL + (this._pathObj.fontPath || 'assets/fonts');
                        this._bitmapFontPath = this._baseURL + (this._pathObj.bitmapFontPath || 'assets/fonts/bitmap');
                        this._audioSpritePath = this._baseURL + (this._pathObj.audioSpritePath || 'assets/audio/sprite');
                        this._soundPath = this._baseURL + (this._pathObj.soundPath || 'assets/audio/sound');
                        this._physicsPath = this._baseURL + (this._pathObj.physicsPath || 'assets/data/physics');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AssetManager.prototype, "resolution", {
                    get: function () {
                        return this._res;
                    },
                    set: function (res) {
                        if (res === undefined) {
                            res = this.game.resolution;
                        }
                        this._res = res;
                        this._resolution = '';
                        if (this._res > 1.5) {
                            this._resolution = AssetManager.RESOLUTION_2X;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AssetManager.prototype, "soundDecodingModifier", {
                    get: function () {
                        return this._soundDecodingModifier;
                    },
                    set: function (num) {
                        if (num === undefined) {
                            num = 2;
                        }
                        this._soundDecodingModifier = num;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AssetManager.prototype, "cacheBustVersion", {
                    set: function (version) {
                        this._cacheBustVersion = '' + version;
                    },
                    enumerable: true,
                    configurable: true
                });
                AssetManager.AUDIO = 'audio';
                AssetManager.SOUND = 'sound';
                AssetManager.AUDIO_SPRITE = 'audioSprite';
                AssetManager.IMAGE = 'image';
                AssetManager.VIDEO = 'video';
                AssetManager.ATLAS = 'atlas';
                AssetManager.TEXT = 'text';
                AssetManager.JSON = 'json';
                AssetManager.TILEMAP = 'tilemap';
                AssetManager.TILEDMAP = 'tiledmap';
                AssetManager.TILEDMAP_TILESET = 'tileset';
                AssetManager.TILEDMAP_LAYER = 'layer';
                AssetManager.PHYSICS = 'physics';
                AssetManager.SPINE = 'spine';
                AssetManager.BITMAP_FONT = 'bitmapFont';
                AssetManager.ASSET_LIST = 'assetList';
                AssetManager.RESOLUTION_2X = "@2x";
                AssetManager.RESOLUTION_3X = "@3x";
                return AssetManager;
            }());
            exports_34("AssetManager", AssetManager);
        }
    }
});
System.register("dijon/core/AudioManager", ["dijon/application"], function(exports_35, context_35) {
    "use strict";
    var __moduleName = context_35 && context_35.id;
    var application_12;
    var AudioManager;
    return {
        setters:[
            function (application_12_1) {
                application_12 = application_12_1;
            }],
        execute: function() {
            AudioManager = (function () {
                function AudioManager() {
                    this._defaultVolume = 1;
                    this._sprites = {};
                    this._sounds = {};
                    this._markerLookup = {};
                    this.game = application_12.Application.getInstance().game;
                }
                AudioManager.prototype._addAudio = function (key, isAudioSprite) {
                    if (isAudioSprite === void 0) { isAudioSprite = false; }
                    if (isAudioSprite === true) {
                        return this._parseAudioSprite(key, this.game.add.audioSprite(key));
                    }
                    else {
                        return this._allowMultiple(this.game.add.sound(key));
                    }
                };
                AudioManager.prototype._parseAudioSprite = function (key, audioSprite) {
                    for (var soundKey in audioSprite.sounds) {
                        this._allowMultiple(audioSprite.sounds[soundKey]);
                        this._markerLookup[soundKey] = key;
                    }
                    return audioSprite;
                };
                AudioManager.prototype._allowMultiple = function (sound) {
                    sound.allowMultiple = true;
                    return sound;
                };
                AudioManager.prototype._getKeyFromMarkerName = function (marker) {
                    if (typeof this._markerLookup[marker] !== 'undefined') {
                        return this._markerLookup[marker];
                    }
                    for (var key in this._sprites) {
                        if (typeof this._sprites[key].sounds[marker] !== 'undefined') {
                            this._markerLookup[marker] = key;
                            return key;
                        }
                    }
                    return false;
                };
                AudioManager.prototype._playSpriteMarker = function (key, marker, volume, loop, forceRestart) {
                    if (loop === void 0) { loop = false; }
                    if (forceRestart === void 0) { forceRestart = true; }
                    if (typeof volume !== 'undefined') {
                        if (typeof volume === 'string') {
                            if (volume.indexOf('+') >= 0 || volume.indexOf('-') >= 0) {
                                volume = this._defaultVolume + parseFloat(volume);
                            }
                            else {
                                volume = parseFloat(volume);
                            }
                        }
                    }
                    else {
                        volume = this._defaultVolume;
                    }
                    loop = loop || false;
                    forceRestart = forceRestart === false ? false : true;
                    return this._sprites[key].play(marker, volume);
                };
                AudioManager.prototype._stopSpriteMarker = function (key, marker) {
                    if (typeof this._sprites === 'undefined' || typeof this._sprites[key] === 'undefined') {
                        return false;
                    }
                    return this._sprites[key].stop(marker);
                };
                AudioManager.prototype._stopSound = function (sound) {
                    return sound.stop();
                };
                AudioManager.prototype.addAudio = function (key, isAudioSprite) {
                    if (isAudioSprite === void 0) { isAudioSprite = false; }
                    if (isAudioSprite === true) {
                        return this.addAudioSprite(key);
                    }
                    return this.addSound(key);
                };
                AudioManager.prototype.addSound = function (key) {
                    if (typeof this._sounds[key] !== 'undefined') {
                        return this._sounds[key];
                    }
                    this._sounds[key] = this.game.add.audio(key);
                    this._sounds[key].allowMultiple = true;
                    return this._sounds[key];
                };
                AudioManager.prototype.addAudioSprite = function (key) {
                    if (typeof this._sprites[key] !== 'undefined') {
                        return this._sprites[key];
                    }
                    this._sprites[key] = this._addAudio(key, true);
                    return this._sprites[key];
                };
                AudioManager.prototype.playAudio = function (marker, volume, loop, forceRestart) {
                    if (loop === void 0) { loop = false; }
                    if (forceRestart === void 0) { forceRestart = true; }
                    if (this._getKeyFromMarkerName(marker)) {
                        return this.playSpriteMarker(marker, volume, loop, forceRestart);
                    }
                    return this.playSound(marker, volume, loop, forceRestart);
                };
                AudioManager.prototype.playDelayedAudio = function (delay, marker, volume, loop, forceRestart) {
                    if (loop === void 0) { loop = false; }
                    if (forceRestart === void 0) { forceRestart = true; }
                    if (this._getKeyFromMarkerName(marker)) {
                        return this.playDelayedSpriteMarker(delay, marker, volume, loop, forceRestart);
                    }
                    return this.playDelayedSound(delay, marker, volume, loop, forceRestart);
                };
                AudioManager.prototype.playSound = function (key, volume, loop, forceRestart) {
                    if (loop === void 0) { loop = false; }
                    if (forceRestart === void 0) { forceRestart = true; }
                    if (typeof this._sounds[key] === 'undefined') {
                        return null;
                    }
                    volume = typeof volume === 'undefined' ? this._defaultVolume : volume;
                    return this._sounds[key].play("", 0, volume, loop, forceRestart);
                };
                AudioManager.prototype.getSound = function (key, volume, loop, forceRestart) {
                    if (loop === void 0) { loop = false; }
                    if (forceRestart === void 0) { forceRestart = true; }
                    if (typeof this._sounds[key] === 'undefined') {
                        return null;
                    }
                    volume = typeof volume === 'undefined' ? this._defaultVolume : volume;
                    return this._sounds[key];
                };
                AudioManager.prototype.playSpriteMarker = function (marker, volume, loop, forceRestart) {
                    if (loop === void 0) { loop = false; }
                    if (forceRestart === void 0) { forceRestart = true; }
                    var key = this._getKeyFromMarkerName(marker);
                    if (!key) {
                        console.log('marker not found', marker);
                        return null;
                    }
                    return this._playSpriteMarker(key, marker, volume, loop, forceRestart);
                };
                AudioManager.prototype.playDelayedSound = function (delay, key, volume, loop, forceRestart) {
                    if (loop === void 0) { loop = false; }
                    if (forceRestart === void 0) { forceRestart = true; }
                    this.game.time.events.add(delay, this.playSound, this, key, volume, loop, forceRestart);
                    return null;
                };
                AudioManager.prototype.playDelayedSpriteMarker = function (delay, marker, volume, loop, forceRestart) {
                    if (loop === void 0) { loop = false; }
                    if (forceRestart === void 0) { forceRestart = true; }
                    this.game.time.events.add(delay, this.playSpriteMarker, this, marker, volume, loop, forceRestart);
                    return null;
                };
                AudioManager.prototype.stopAudio = function (marker) {
                    if (this._getKeyFromMarkerName(marker)) {
                        return this.stopSpriteMarker(marker);
                    }
                    return this.stopSound(marker);
                };
                AudioManager.prototype.stopSound = function (key) {
                    if (typeof this._sounds === 'undefined' || typeof this._sounds[key] === 'undefined') {
                        return;
                    }
                    return this._sounds[key].stop();
                };
                AudioManager.prototype.stopSpriteMarker = function (marker) {
                    var key = this._getKeyFromMarkerName(marker);
                    if (!key) {
                        console.log('marker not found', marker);
                        return;
                    }
                    this._stopSpriteMarker(key, marker);
                };
                AudioManager.prototype.removeSound = function (key) {
                    if (typeof this._sounds === 'undefined' || typeof this._sounds[key] === 'undefined') {
                        return false;
                    }
                    if (this._sounds[key]) {
                        this.stopSound(key);
                        this._sounds[key].destroy();
                        delete this._sounds[key];
                    }
                };
                AudioManager.prototype.removeSprite = function (key) {
                    if (typeof this._sprites === 'undefined' || typeof this._sprites[key] === 'undefined') {
                        return;
                    }
                    this.stopSpriteMarker(key);
                    this._sprites[key] = null;
                    delete this._sprites[key];
                };
                AudioManager.prototype.fade = function (sound, volume, time, stop) {
                    if (stop === void 0) { stop = false; }
                    if (!sound)
                        return;
                    if (sound.fadeTween && sound.fadeTween)
                        this.game.tweens.remove(sound.fadeTween);
                    sound.fadeTween = this.game.add.tween(sound).to({
                        volume: volume
                    }, time || 300, Phaser.Easing.Linear.None);
                    if (stop === true)
                        sound.fadeTween.onComplete.addOnce(function () { this._stopSound(sound); }, this);
                    return sound.fadeTween.start();
                };
                Object.defineProperty(AudioManager.prototype, "defaultVolume", {
                    get: function () {
                        return this._defaultVolume;
                    },
                    set: function (vol) {
                        this._defaultVolume = vol;
                    },
                    enumerable: true,
                    configurable: true
                });
                return AudioManager;
            }());
            exports_35("AudioManager", AudioManager);
        }
    }
});
System.register("dijon/core/Game", ["dijon/application", "dijon/core", "dijon/utils"], function(exports_36, context_36) {
    "use strict";
    var __moduleName = context_36 && context_36.id;
    var application_13, core_1, utils_4;
    var Game;
    return {
        setters:[
            function (application_13_1) {
                application_13 = application_13_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (utils_4_1) {
                utils_4 = utils_4_1;
            }],
        execute: function() {
            Game = (function (_super) {
                __extends(Game, _super);
                function Game(config) {
                    _super.call(this, config);
                    this.onWorldInputDisabled = new Phaser.Signal();
                    this.onWorldInputEnabled = new Phaser.Signal();
                }
                Game.prototype.boot = function () {
                    _super.prototype.boot.call(this);
                    this.app = application_13.Application.getInstance();
                    this.asset = new core_1.AssetManager();
                    this.sequence = new core_1.SequenceManager();
                    this.transition = new core_1.TransitionManager();
                    this.storage = new core_1.StorageManager();
                    this.audio = new core_1.AudioManager();
                    this.analytics = new core_1.AnalyticsManager(this.config.analytics);
                    this.add = null;
                    this.add = new core_1.GameObjectFactory(this);
                    this.addLayers();
                    this.addMouseCallbacks();
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
                    this.backgroundLayer = this.add.dGroup(0, 0, '_background_layer', true);
                    this.stage.setChildIndex(this.backgroundLayer, 0);
                    this.gameLayer = this.add.dGroup(0, 0, '_game_layer');
                    this.uiLayer = this.add.dGroup(0, 0, '_ui_layer');
                    this.uiLayer.fixedToCamera = true;
                    this.stageLayer = this.add.dGroup(0, 0, '_stage_layer', true);
                };
                Game.prototype.addMouseCallbacks = function () {
                    if (this.device.desktop) {
                        this.input.mouse.mouseOverCallback = this.mouseOver;
                        this.input.mouse.mouseOutCallback = this.mouseOut;
                    }
                };
                Game.prototype.mouseOut = function () {
                    application_13.Application.getInstance().sendNotification(utils_4.Notifications.MOUSE_LEAVE_GLOBAL);
                };
                Game.prototype.mouseOver = function () {
                    application_13.Application.getInstance().sendNotification(utils_4.Notifications.MOUSE_ENTER_GLOBAL);
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
                Object.defineProperty(Game.prototype, "addToGame", {
                    get: function () {
                        this.add.targetGroup = this.gameLayer;
                        return this.add;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Game.prototype, "addToBackground", {
                    get: function () {
                        this.add.targetGroup = this.backgroundLayer;
                        return this.add;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Game.prototype, "addToUI", {
                    get: function () {
                        this.add.targetGroup = this.uiLayer;
                        return this.add;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Game.prototype, "addToStage", {
                    get: function () {
                        this.add.targetGroup = this.stageLayer;
                        return this.add;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Game.prototype, "addToWorld", {
                    get: function () {
                        this.add.targetGroup = this.world;
                        return this.add;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Game;
            }(Phaser.Game));
            exports_36("Game", Game);
        }
    }
});
System.register("dijon/core/GameObjectFactory", ["dijon/display"], function(exports_37, context_37) {
    "use strict";
    var __moduleName = context_37 && context_37.id;
    var display_3;
    var GameObjectFactory;
    return {
        setters:[
            function (display_3_1) {
                display_3 = display_3_1;
            }],
        execute: function() {
            GameObjectFactory = (function (_super) {
                __extends(GameObjectFactory, _super);
                function GameObjectFactory() {
                    _super.apply(this, arguments);
                    this._targetGroup = null;
                    this._defaultLayer = this.world;
                }
                GameObjectFactory.prototype.existing = function (object) {
                    var group = this.targetGroup;
                    this.targetGroup = null;
                    return group.add(object);
                };
                GameObjectFactory.prototype.image = function (x, y, key, frame, group) {
                    if (x === void 0) { x = 0; }
                    if (y === void 0) { y = 0; }
                    if (group === undefined) {
                        group = this.targetGroup;
                    }
                    this.targetGroup = null;
                    return group.add(new Phaser.Image(this.game, x, y, key, frame));
                };
                GameObjectFactory.prototype.sprite = function (x, y, key, frame, group) {
                    if (x === void 0) { x = 0; }
                    if (y === void 0) { y = 0; }
                    if (group === undefined) {
                        group = this.targetGroup;
                    }
                    this.targetGroup = null;
                    return group.create(x, y, key, frame);
                };
                GameObjectFactory.prototype.creature = function (x, y, key, mesh, group) {
                    if (x === void 0) { x = 0; }
                    if (y === void 0) { y = 0; }
                    if (group === undefined) {
                        group = this.targetGroup;
                    }
                    this.targetGroup = null;
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
                    this.targetGroup = null;
                    return new Phaser.Group(this.game, parent, name, addToStage, enableBody, physicsBodyType);
                };
                GameObjectFactory.prototype.physicsGroup = function (physicsBodyType, parent, name, addToStage) {
                    if (physicsBodyType === void 0) { physicsBodyType = 0; }
                    if (name === void 0) { name = 'group'; }
                    if (addToStage === void 0) { addToStage = false; }
                    if (parent === undefined) {
                        parent = this.targetGroup;
                    }
                    this.targetGroup = null;
                    return new Phaser.Group(this.game, parent, name, addToStage, true, physicsBodyType);
                };
                GameObjectFactory.prototype.spriteBatch = function (parent, name, addToStage) {
                    if (name === void 0) { name = "spriteBatch"; }
                    if (addToStage === void 0) { addToStage = false; }
                    if (parent === undefined) {
                        parent = this.targetGroup;
                    }
                    this.targetGroup = null;
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
                    this.targetGroup = null;
                    return group.add(new Phaser.TileSprite(this.game, x, y, width, height, key, frame));
                };
                GameObjectFactory.prototype.rope = function (x, y, key, frame, points, group) {
                    if (x === void 0) { x = 0; }
                    if (y === void 0) { y = 0; }
                    if (group === undefined) {
                        group = this.targetGroup;
                    }
                    this.targetGroup = null;
                    return group.add(new Phaser.Rope(this.game, x, y, key, frame, points));
                };
                GameObjectFactory.prototype.text = function (x, y, text, style, group) {
                    if (x === void 0) { x = 0; }
                    if (y === void 0) { y = 0; }
                    if (text === void 0) { text = ''; }
                    if (group === undefined) {
                        group = this.targetGroup;
                    }
                    this.targetGroup = null;
                    return group.add(new Phaser.Text(this.game, x, y, text, style));
                };
                GameObjectFactory.prototype.button = function (x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame, group) {
                    if (x === void 0) { x = 0; }
                    if (y === void 0) { y = 0; }
                    if (group === undefined) {
                        group = this.targetGroup;
                    }
                    this.targetGroup = null;
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
                GameObjectFactory.prototype.bitmapText = function (x, y, font, text, size, group) {
                    if (text === void 0) { text = ""; }
                    if (size === void 0) { size = 32; }
                    if (group === undefined) {
                        group = this.targetGroup;
                    }
                    this.targetGroup = null;
                    return group.add(new Phaser.BitmapText(this.game, x, y, font, text, size));
                };
                GameObjectFactory.prototype.dSprite = function (x, y, key, frame, name, components, group) {
                    if (group === undefined) {
                        group = this.targetGroup;
                    }
                    this.targetGroup = null;
                    return group.add(new display_3.Sprite(x, y, key, frame, name, components));
                };
                GameObjectFactory.prototype.dGroup = function (x, y, name, addToStage, components, enableBody, physicsBodyType, group) {
                    if (group === undefined && addToStage !== true) {
                        group = this.targetGroup;
                        this.targetGroup = null;
                        return group.add(new display_3.Group(x, y, name, addToStage, components, enableBody, physicsBodyType));
                    }
                    return new display_3.Group(x, y, name, addToStage, components, enableBody, physicsBodyType);
                };
                GameObjectFactory.prototype.dText = function (x, y, text, fontName, fontSize, fontColor, fontAlign, wordWrap, width, lineSpacing, settings, group) {
                    if (group === undefined) {
                        group = this.targetGroup;
                    }
                    this.targetGroup = null;
                    return group.add(new display_3.Text(x, y, text, fontName, fontSize, fontColor, fontAlign, wordWrap, width, lineSpacing, settings));
                };
                GameObjectFactory.prototype.dBitmapText = function (x, y, font, text, size, align, color, smoothing, autoFlatten, makeImage, group) {
                    if (x === void 0) { x = 0; }
                    if (y === void 0) { y = 0; }
                    if (font === void 0) { font = null; }
                    if (text === void 0) { text = ""; }
                    if (size === void 0) { size = 12; }
                    if (align === void 0) { align = 'left'; }
                    if (color === void 0) { color = 0xffffff; }
                    if (smoothing === void 0) { smoothing = true; }
                    if (autoFlatten === void 0) { autoFlatten = true; }
                    if (makeImage === void 0) { makeImage = false; }
                    if (group === undefined) {
                        group = this.targetGroup;
                    }
                    this.targetGroup = null;
                    return group.add(new display_3.BitmapText(x, y, font, text, size, align, color, smoothing, autoFlatten, makeImage));
                };
                GameObjectFactory.prototype.spine = function (assetName, x, y, group) {
                    if (assetName === void 0) { assetName = ''; }
                    if (x === void 0) { x = 0; }
                    if (y === void 0) { y = 0; }
                    if (group === undefined) {
                        group = this.targetGroup;
                    }
                    this.targetGroup = null;
                    return group.add(new display_3.Spine(assetName, x, y));
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
            exports_37("GameObjectFactory", GameObjectFactory);
        }
    }
});
System.register("dijon/core/SequenceManager", ["dijon/application"], function(exports_38, context_38) {
    "use strict";
    var __moduleName = context_38 && context_38.id;
    var application_14;
    var SequenceManager;
    return {
        setters:[
            function (application_14_1) {
                application_14 = application_14_1;
            }],
        execute: function() {
            SequenceManager = (function () {
                function SequenceManager() {
                    this._defaultInterval = 20;
                    this.game = application_14.Application.getInstance().game;
                }
                SequenceManager.prototype._executeMethod = function (sequence, context, callback, callbackContext) {
                    var func = sequence.shift();
                    if (typeof func !== 'undefined' && typeof context !== 'undefined' && context) {
                        func.call(context);
                    }
                    if (sequence.length === 0 && callback && callbackContext) {
                        callback.call(callbackContext);
                    }
                };
                SequenceManager.prototype.run = function (sequence, context, interval, completeCallback, completeCallbackContext) {
                    if (typeof context === 'undefined') {
                        throw new Error('context must be provided for the sequence methods');
                    }
                    if (typeof interval === 'undefined') {
                        interval = this._defaultInterval;
                    }
                    if (sequence.length === 0 && typeof completeCallback !== 'undefined' && typeof completeCallbackContext !== 'undefined') {
                        completeCallback.call(completeCallbackContext);
                        return;
                    }
                    if (interval === 0) {
                        while (sequence.length > 0)
                            this._executeMethod(sequence, context, typeof completeCallback === 'undefined' ? null : completeCallback, typeof completeCallbackContext === 'undefined' ? null : completeCallbackContext);
                        return;
                    }
                    var event = this.game.time.events.repeat(interval, sequence.length, this._executeMethod, this, sequence, context, typeof completeCallback === 'undefined' ? null : completeCallback, typeof completeCallbackContext === 'undefined' ? null : completeCallbackContext);
                    event.timer.paused = false;
                };
                return SequenceManager;
            }());
            exports_38("SequenceManager", SequenceManager);
        }
    }
});
System.register("dijon/core/State", ["dijon/application"], function(exports_39, context_39) {
    "use strict";
    var __moduleName = context_39 && context_39.id;
    var application_15;
    var State;
    return {
        setters:[
            function (application_15_1) {
                application_15 = application_15_1;
            }],
        execute: function() {
            State = (function (_super) {
                __extends(State, _super);
                function State() {
                    _super.call(this);
                    this._audio = [];
                    this._mediator = null;
                }
                State.prototype.init = function () {
                };
                State.prototype.preload = function () {
                    if (this.preloadID)
                        this.game.asset.loadAssets(this.preloadID);
                };
                State.prototype.create = function () {
                    if (!this.game.asset.allSoundsDecoded()) {
                        this.game.asset.onLoadCompleteAndAudioDecoded.addOnce(this.create, this);
                        return;
                    }
                    this.buildInterface();
                    this.afterBuildInterface();
                    this.startBuild();
                };
                State.prototype.shutdown = function (removeMediator, removeAudio) {
                    if (removeMediator === void 0) { removeMediator = true; }
                    if (removeAudio === void 0) { removeAudio = true; }
                    if (removeMediator) {
                        this.removeMediator();
                    }
                    if (removeAudio) {
                        this.removeAudio();
                    }
                    _super.prototype.shutdown.call(this);
                };
                State.prototype.listBuildSequence = function () {
                    return [];
                };
                State.prototype.buildInterface = function () { };
                State.prototype.afterBuildInterface = function () { };
                State.prototype.startBuild = function () {
                    this.game.sequence.run(this.listBuildSequence(), this, this.buildInterval, this.preAfterBuild, this);
                };
                State.prototype.preAfterBuild = function () {
                    if (typeof this.game.transition === 'undefined' || !this.game.transition.canTransitionOut()) {
                        this.afterBuild();
                    }
                    else {
                        if (this.game.transition.canTransitionOut()) {
                            this.game.transition.onTransitionOutComplete.addOnce(this.afterBuild, this);
                            this.game.transition.transitionOut();
                        }
                    }
                };
                State.prototype.afterBuild = function () { };
                State.prototype.addAudio = function (track) {
                    if (!this._audio) {
                        this._audio = [];
                    }
                    this._audio.push(track);
                    return track;
                };
                State.prototype.removeAudio = function () {
                    var sound;
                    if (!this._audio) {
                        return;
                    }
                    while (this._audio.length > 0) {
                        sound = this._audio.pop();
                        if (typeof sound !== 'undefined' && sound != null && typeof sound.stop !== 'undefined') {
                            if (typeof sound.onStop !== 'undefined') {
                                sound.onStop.removeAll();
                            }
                            sound.stop();
                        }
                    }
                };
                State.prototype.removeMediator = function () {
                    if (!this._mediator)
                        return;
                    this._mediator.destroy();
                    this._mediator = null;
                };
                Object.defineProperty(State.prototype, "preloadID", {
                    get: function () {
                        return null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(State.prototype, "buildInterval", {
                    get: function () {
                        return 10;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(State.prototype, "add", {
                    get: function () {
                        return this.game.addToGame;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(State.prototype, "app", {
                    get: function () {
                        return application_15.Application.getInstance();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(State.prototype, "game", {
                    get: function () {
                        return this.app.game;
                    },
                    enumerable: true,
                    configurable: true
                });
                return State;
            }(Phaser.State));
            exports_39("State", State);
        }
    }
});
System.register("dijon/core/StorageManager", ["dijon/application"], function(exports_40, context_40) {
    "use strict";
    var __moduleName = context_40 && context_40.id;
    var application_16;
    var StorageManager;
    return {
        setters:[
            function (application_16_1) {
                application_16 = application_16_1;
            }],
        execute: function() {
            StorageManager = (function () {
                function StorageManager() {
                    this.game = application_16.Application.getInstance().game;
                    this._init();
                }
                StorageManager.prototype._init = function () {
                    this._localStorageAvailable = this._getIsLocalStorageAvailable();
                    console.log('local storage available', this._localStorageAvailable);
                };
                StorageManager.prototype._getIsLocalStorageAvailable = function () {
                    try {
                        return 'localStorage' in window && window['localStorage'] !== null;
                    }
                    catch (e) {
                        return false;
                    }
                };
                StorageManager.prototype._getString = function (data) {
                    if (typeof data === 'string') {
                        return data;
                    }
                    var jsonData;
                    try {
                        jsonData = JSON.stringify(data);
                    }
                    catch (e) {
                        console.log('Could not convert' + data + ' to json');
                        return null;
                    }
                    return jsonData;
                };
                StorageManager.prototype.getFromLocalStorage = function (key, isJSON) {
                    if (isJSON === void 0) { isJSON = true; }
                    var data = localStorage.getItem(key);
                    if (typeof data === 'undefined') {
                        console.log('no data saved with the key', key);
                        return null;
                    }
                    if (isJSON !== false) {
                        data = JSON.parse(data);
                    }
                    return data;
                };
                StorageManager.prototype.saveToLocalStorage = function (key, value) {
                    if (!this._localStorageAvailable) {
                        console.log('no local storage');
                        return false;
                    }
                    try {
                        localStorage.setItem(key, this._getString(value));
                    }
                    catch (e) {
                        console.log('your data could not be saved');
                    }
                };
                StorageManager.prototype.clearFromLocalStorage = function (key) {
                    if (!this._localStorageAvailable) {
                        console.log('no local storage');
                        return false;
                    }
                    try {
                        localStorage.removeItem(key);
                    }
                    catch (e) { }
                };
                return StorageManager;
            }());
            exports_40("StorageManager", StorageManager);
        }
    }
});
System.register("dijon/core/TransitionManager", ["dijon/application"], function(exports_41, context_41) {
    "use strict";
    var __moduleName = context_41 && context_41.id;
    var application_17;
    var TransitionManager;
    return {
        setters:[
            function (application_17_1) {
                application_17 = application_17_1;
            }],
        execute: function() {
            TransitionManager = (function () {
                function TransitionManager() {
                    this.onTransitionOutComplete = new Phaser.Signal();
                    this.onTransitionInComplete = new Phaser.Signal();
                    this._transition = null;
                    this._transitions = {};
                    this._exceptions = {};
                    this._fromState = null;
                    this._toState = null;
                    this.game = application_17.Application.getInstance().game;
                }
                TransitionManager.prototype._add = function (id, outHandler, preloadHandler, inHandler) {
                    this._transitions[id] = {
                        outHandler: outHandler,
                        preloadHandler: preloadHandler,
                        inHandler: inHandler
                    };
                };
                TransitionManager.prototype._getTransition = function (inState, outState) {
                    var transition = this._transitions[inState + '/' + outState];
                    if (typeof transition === 'undefined')
                        transition = this._transitions['all'];
                    return typeof transition === 'undefined' ? null : transition;
                };
                TransitionManager.prototype._transitionInComplete = function () {
                    this._transition = this._getTransition(this._fromState, this._toState);
                    if (!this._transition)
                        return false;
                    if (typeof this._transition.preloadHandler.loadStart === 'function')
                        this.game.asset.onLoadStart.addOnce(this._transition.preloadHandler.loadStart, this._transition.preloadHandler);
                    if (typeof this._transition.preloadHandler.loadProgress === 'function') {
                        this.game.asset.onFileComplete.add(this._transition.preloadHandler.loadProgress, this._transition.preloadHandler);
                    }
                    this.game.asset.onLoadCompleteAndAudioDecoded.addOnce(this._preloadComplete, this);
                    this.onTransitionInComplete.dispatch();
                    this.game.changeState(this._toState);
                };
                TransitionManager.prototype._transitionOutComplete = function () {
                    this._transition = null;
                    this.onTransitionOutComplete.dispatch();
                };
                TransitionManager.prototype._preloadComplete = function () {
                    this._transition = this._getTransition(this._fromState, this._toState);
                    if (!this._transition)
                        return false;
                    this.game.asset.onFileComplete.remove(this._transition.preloadHandler.loadProgress, this._transition.preloadHandler);
                    if (typeof this._transition.preloadHandler.loadComplete === 'function')
                        this._transition.preloadHandler.loadComplete();
                };
                TransitionManager.prototype._clearTransition = function () {
                    this._transition.outHandler.transitionInComplete.remove(this._transitionOutComplete, this);
                    this._transition.inHandler.transitionOutComplete.remove(this._transitionInComplete, this);
                    this.game.asset.onLoadCompleteAndAudioDecoded.remove(this._preloadComplete, this);
                    this.game.asset.onLoadStart.remove(this._transition.preloadHandler.loadStart, this._transition.preloadHandler);
                    this.game.asset.onFileComplete.remove(this._transition.preloadHandler.loadProgress, this._transition.preloadHandler);
                    this._transition = null;
                };
                TransitionManager.prototype.add = function (fromState, toState, outHandler, preloadHandler, inHandler) {
                    var args;
                    if (arguments.length < 5) {
                        if (fromState === 'all') {
                            args = [].slice.call(arguments, 1);
                            if (arguments.length === 2)
                                return this._add('all', args[0], args[0], args[0]);
                            else
                                return this._add('all', args[0], args[1], args[2]);
                        }
                        else {
                            args = [].slice.call(arguments, 2);
                            return this._add(fromState + '/' + toState, args[0], args[0], args[0]);
                        }
                    }
                    return this._add(fromState + '/' + toState, outHandler, preloadHandler, inHandler);
                };
                TransitionManager.prototype.addAll = function (handler) {
                    return this._add('all', handler, handler, handler);
                };
                TransitionManager.prototype.addException = function (state) {
                    this._exceptions[state] = true;
                };
                TransitionManager.prototype.remove = function (fromState, toState) {
                    if (arguments.length === 1) {
                        this._transitions[fromState] = null;
                        delete this._transitions[fromState];
                    }
                    else {
                        this._transitions[fromState + '/' + toState] = null;
                        delete this._transitions[fromState + '/' + toState];
                    }
                };
                TransitionManager.prototype.to = function (state) {
                    if (this._transition)
                        this._clearTransition();
                    if (this._exceptions[state])
                        return;
                    this._fromState = this.game.state.current;
                    this._toState = state;
                    this._transition = this._getTransition(this._fromState, this._toState);
                    if (!this._transition) {
                        console.log('no transition found for:', this.game.state.current + ' to ' + state);
                        this.game.changeState(this._toState);
                    }
                    this.transitionIn();
                };
                TransitionManager.prototype.transitionIn = function () {
                    if (!this._transition)
                        return;
                    if (typeof this._transition.outHandler.transitionIn === 'function') {
                        this._transition.outHandler.transitionInComplete.addOnce(this._transitionInComplete, this);
                        this._transition.outHandler.transitionIn();
                    }
                };
                TransitionManager.prototype.canTransitionOut = function () {
                    return !this._exceptions[this.game.state.current] && this._transition && this._transition.inHandler && typeof this._transition.inHandler.transitionOut === 'function';
                };
                TransitionManager.prototype.transitionOut = function () {
                    this._transition.inHandler.transitionOutComplete.addOnce(this._transitionOutComplete, this);
                    this._transition.inHandler.transitionOut();
                };
                return TransitionManager;
            }());
            exports_41("TransitionManager", TransitionManager);
        }
    }
});
System.register("dijon/core", ["dijon/core/AnalyticsManager", "dijon/core/AssetManager", "dijon/core/AudioManager", "dijon/core/Game", "dijon/core/GameObjectFactory", "dijon/core/SequenceManager", "dijon/core/State", "dijon/core/StorageManager", "dijon/core/TransitionManager"], function(exports_42, context_42) {
    "use strict";
    var __moduleName = context_42 && context_42.id;
    return {
        setters:[
            function (AnalyticsManager_1_1) {
                exports_42({
                    "AnalyticsManager": AnalyticsManager_1_1["AnalyticsManager"],
                    "AnalyticsException": AnalyticsManager_1_1["AnalyticsException"]
                });
            },
            function (AssetManager_1_1) {
                exports_42({
                    "AssetManager": AssetManager_1_1["AssetManager"]
                });
            },
            function (AudioManager_1_1) {
                exports_42({
                    "AudioManager": AudioManager_1_1["AudioManager"]
                });
            },
            function (Game_1_1) {
                exports_42({
                    "Game": Game_1_1["Game"]
                });
            },
            function (GameObjectFactory_1_1) {
                exports_42({
                    "GameObjectFactory": GameObjectFactory_1_1["GameObjectFactory"]
                });
            },
            function (SequenceManager_1_1) {
                exports_42({
                    "SequenceManager": SequenceManager_1_1["SequenceManager"]
                });
            },
            function (State_1_1) {
                exports_42({
                    "State": State_1_1["State"]
                });
            },
            function (StorageManager_1_1) {
                exports_42({
                    "StorageManager": StorageManager_1_1["StorageManager"]
                });
            },
            function (TransitionManager_1_1) {
                exports_42({
                    "TransitionManager": TransitionManager_1_1["TransitionManager"]
                });
            }],
        execute: function() {
        }
    }
});
System.register("dijon/mvc/Model", ["dijon/application"], function(exports_43, context_43) {
    "use strict";
    var __moduleName = context_43 && context_43.id;
    var application_18;
    var Model;
    return {
        setters:[
            function (application_18_1) {
                application_18 = application_18_1;
            }],
        execute: function() {
            Model = (function () {
                function Model(dataKey, modelName) {
                    if (dataKey === void 0) { dataKey = null; }
                    if (modelName === void 0) { modelName = null; }
                    this.modelName = modelName;
                    this.app = application_18.Application.getInstance();
                    this.game = this.app.game;
                    if (dataKey) {
                        this.setData(dataKey);
                    }
                    this.app.registerModel(this);
                }
                Model.prototype.onRegister = function () {
                };
                Model.prototype.onRemoved = function () {
                };
                Model.prototype.getKeyExists = function (key) {
                    return this.game.cache.getJSON(key) !== null;
                };
                Model.prototype.setData = function (dataKey) {
                    if (!this.getKeyExists(dataKey)) {
                        console.log('Model:: cannot set data from key ' + dataKey + '. Is it in the Phaser cache?');
                        return false;
                    }
                    this._data = this.game.cache.getJSON(dataKey);
                    return this._data;
                };
                Model.prototype.getData = function () {
                    return this._data;
                };
                Model.prototype.destroy = function () {
                    this.app.removeModel(this);
                };
                Object.defineProperty(Model.prototype, "name", {
                    get: function () {
                        return this.modelName || Model.MODEL_NAME;
                    },
                    enumerable: true,
                    configurable: true
                });
                Model.MODEL_NAME = 'Model';
                return Model;
            }());
            exports_43("Model", Model);
        }
    }
});
System.register("dijon/mvc/CopyModel", ["dijon/mvc/Model"], function(exports_44, context_44) {
    "use strict";
    var __moduleName = context_44 && context_44.id;
    var Model_1;
    var CopyModel;
    return {
        setters:[
            function (Model_1_1) {
                Model_1 = Model_1_1;
            }],
        execute: function() {
            CopyModel = (function (_super) {
                __extends(CopyModel, _super);
                function CopyModel(dataKey) {
                    if (dataKey === void 0) { dataKey = null; }
                    _super.call(this, dataKey);
                    this._languages = {};
                    this._languages['en'] = this._data;
                }
                CopyModel.prototype.getCopy = function (groupId, itemId) {
                    return this.getCopyGroup(groupId)[itemId];
                };
                CopyModel.prototype.getCopyGroup = function (groupId) {
                    return this._data[groupId];
                };
                CopyModel.prototype.addLanguage = function (languageId, dataKey) {
                    if (!this.getKeyExists(dataKey)) {
                        throw new Error('cannot add an alternate language from key ' + dataKey + '. Is it in the Phaser cache?');
                    }
                    this._languages[languageId] = this.game.cache.getJSON(dataKey);
                };
                CopyModel.prototype.changeLanguage = function (languageId) {
                    if (typeof this._languages[languageId] === 'undefined')
                        throw new Error('there is no language ' + languageId);
                    this._data = this._languages[languageId];
                };
                Object.defineProperty(CopyModel.prototype, "name", {
                    get: function () {
                        return CopyModel.MODEL_NAME;
                    },
                    enumerable: true,
                    configurable: true
                });
                CopyModel.MODEL_NAME = 'copyModel';
                return CopyModel;
            }(Model_1.Model));
            exports_44("CopyModel", CopyModel);
        }
    }
});
System.register("dijon/mvc/Mediator", ["dijon/application"], function(exports_45, context_45) {
    "use strict";
    var __moduleName = context_45 && context_45.id;
    var application_19;
    var Mediator;
    return {
        setters:[
            function (application_19_1) {
                application_19 = application_19_1;
            }],
        execute: function() {
            Mediator = (function () {
                function Mediator(_viewComponent, autoReg, mediatorName) {
                    if (_viewComponent === void 0) { _viewComponent = null; }
                    if (autoReg === void 0) { autoReg = true; }
                    if (mediatorName === void 0) { mediatorName = null; }
                    this._viewComponent = _viewComponent;
                    this.mediatorName = null;
                    this.app = application_19.Application.getInstance();
                    this.game = this.app.game;
                    this.mediatorName = mediatorName;
                    if (autoReg) {
                        this.register();
                    }
                }
                Mediator.prototype.register = function () {
                    this.app.registerMediator(this);
                };
                Mediator.prototype.remove = function () {
                    this.app.removeMediator(this);
                };
                Mediator.prototype.onRegister = function () {
                };
                Mediator.prototype.onRemoved = function () {
                };
                Mediator.prototype.destroy = function () {
                    this.remove();
                };
                Mediator.prototype.listNotificationInterests = function () {
                    return [];
                };
                Mediator.prototype.handleNotification = function (notification) {
                };
                Mediator.prototype.sendNotification = function (notificationName, notificationBody) {
                    this.app.sendNotification(notificationName, notificationBody);
                };
                Object.defineProperty(Mediator.prototype, "viewComponent", {
                    get: function () {
                        return this._viewComponent;
                    },
                    set: function (viewComponent) {
                        this._viewComponent = viewComponent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Mediator.prototype, "name", {
                    get: function () {
                        return this.mediatorName || Mediator.MEDIATOR_NAME;
                    },
                    enumerable: true,
                    configurable: true
                });
                Mediator.MEDIATOR_NAME = 'Mediator';
                return Mediator;
            }());
            exports_45("Mediator", Mediator);
        }
    }
});
System.register("dijon/mvc/Notification", [], function(exports_46, context_46) {
    "use strict";
    var __moduleName = context_46 && context_46.id;
    var Notification;
    return {
        setters:[],
        execute: function() {
            Notification = (function () {
                function Notification(_name, _body) {
                    if (_body === void 0) { _body = null; }
                    this._name = _name;
                    this._body = _body;
                }
                Notification.prototype.getName = function () {
                    return this._name;
                };
                Notification.prototype.setBody = function (body) {
                    this._body = body;
                };
                Notification.prototype.getBody = function () {
                    return this._body;
                };
                Notification.prototype.destroy = function () {
                    this._body = null;
                    this._name = null;
                };
                return Notification;
            }());
            exports_46("Notification", Notification);
        }
    }
});
System.register("dijon/mvc", ["dijon/mvc/CopyModel", "dijon/mvc/Mediator", "dijon/mvc/Model", "dijon/mvc/Notification"], function(exports_47, context_47) {
    "use strict";
    var __moduleName = context_47 && context_47.id;
    return {
        setters:[
            function (CopyModel_1_1) {
                exports_47({
                    "CopyModel": CopyModel_1_1["CopyModel"]
                });
            },
            function (Mediator_1_1) {
                exports_47({
                    "Mediator": Mediator_1_1["Mediator"]
                });
            },
            function (Model_2_1) {
                exports_47({
                    "Model": Model_2_1["Model"]
                });
            },
            function (Notification_1_1) {
                exports_47({
                    "Notification": Notification_1_1["Notification"]
                });
            }],
        execute: function() {
        }
    }
});
System.register("dijon/application/Application", ["dijon/mvc", "dijon/core"], function(exports_48, context_48) {
    "use strict";
    var __moduleName = context_48 && context_48.id;
    var mvc_1, core_2;
    var Application;
    return {
        setters:[
            function (mvc_1_1) {
                mvc_1 = mvc_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            }],
        execute: function() {
            Application = (function () {
                function Application() {
                    var _this = this;
                    this._mediator = null;
                    this._models = {};
                    this._mediators = {};
                    this._observerMap = {};
                    if (Application.instance)
                        throw Error(Application.SINGLETON_MSG);
                    Application.instance = this;
                    window.addEventListener("hashchange", function () {
                        Application._getHashQuery();
                        _this.windowHashChange();
                    }, false);
                    this.createGame();
                    this.startGame();
                }
                Application.prototype.windowHashChange = function () {
                };
                Application.prototype.createGame = function () {
                    this.game = new core_2.Game({
                        width: 800,
                        height: 600,
                        parent: 'game-container',
                        renderer: Phaser.AUTO,
                        transparent: false
                    });
                };
                Application.prototype.startGame = function () {
                };
                Application.prototype.addPlugins = function () {
                    this.game.addPlugins();
                };
                Application.prototype.registerModel = function (model) {
                    if (this._models[model.name]) {
                        throw (new Error('Application:: a model with the name "' + model.name + '" already exists.'));
                    }
                    this._models[model.name] = model;
                    model.onRegister();
                    return model;
                };
                Application.prototype.retrieveModel = function (modelName) {
                    return this._models[modelName] || null;
                };
                Application.prototype.removeModel = function (modelToRemove) {
                    var name = modelToRemove.name;
                    var model = this._models[name];
                    if (!model)
                        return;
                    model.onRemoved();
                    delete this._models[name];
                };
                Application.prototype.registerMediator = function (mediator) {
                    if (this._mediators[mediator.name]) {
                        throw (new Error('Application:: a mediator with the name "' + mediator.name + '" already exists.'));
                    }
                    this._mediators[mediator.name] = mediator;
                    this.registerObserver(mediator);
                    mediator.onRegister();
                };
                Application.prototype.retrieveMediator = function (mediatorName) {
                    return this._mediators[mediatorName] || null;
                };
                Application.prototype.removeMediator = function (mediatorToRemove) {
                    var _this = this;
                    var name = mediatorToRemove.name;
                    var mediator = this._mediators[name];
                    if (!mediator)
                        return;
                    mediator.listNotificationInterests().forEach(function (interest) {
                        _this.removeObserver(interest, mediator);
                    });
                    mediator.onRemoved();
                    delete this._mediators[name];
                };
                Application.prototype.registerObserver = function (observer) {
                    var _this = this;
                    observer.listNotificationInterests().forEach(function (notificationName) {
                        if (_this._observerMap[notificationName] === undefined) {
                            _this._observerMap[notificationName] = [];
                        }
                        _this._observerMap[notificationName].push(observer);
                    });
                };
                Application.prototype.removeObserver = function (notificationName, observerToRemove) {
                    var observers = null, observer = null, i = 0;
                    observers = this._observerMap[notificationName];
                    i = observers.length;
                    while (i--) {
                        observer = observers[i];
                        if (observer === observerToRemove) {
                            observers.splice(i, 1);
                            break;
                        }
                    }
                    if (observers.length == 0) {
                        delete this._observerMap[notificationName];
                    }
                };
                Application.prototype.sendNotification = function (notificationName, notficationBody) {
                    var notification = new mvc_1.Notification(notificationName, notficationBody);
                    this._notifyObservers(notification);
                    notification.destroy();
                    notification = null;
                };
                Application.prototype._notifyObservers = function (notification) {
                    var observer = null, observers = null;
                    var notificationName = notification.getName();
                    var observersRef = this._observerMap[notificationName];
                    if (observersRef) {
                        observers = observersRef.slice(0);
                        observers.forEach(function (observer) {
                            observer.handleNotification(notification);
                        });
                    }
                };
                Application._getHashQuery = function () {
                    Application._hashQuery = {};
                    if (!window.location.hash || window.location.hash === undefined) {
                        window.location.hash = '';
                    }
                    var hash = window.location.hash.substr(1, window.location.hash.length);
                    var aHash = hash.split('&');
                    aHash.forEach(function (hashPair) {
                        var aHash = hashPair.split('=');
                        Application._hashQuery[aHash[0]] = /^\d+$/.test(aHash[1]) ? parseInt(aHash[1]) : aHash[1];
                    });
                };
                Application.getInstance = function () {
                    if (!Application.instance)
                        Application.instance = new Application();
                    return Application.instance;
                };
                Application.queryVar = function (variableId) {
                    if (Application._hashQuery === undefined) {
                        Application._getHashQuery();
                    }
                    return Application._hashQuery[variableId] || null;
                };
                Application.instance = null;
                Application.SINGLETON_MSG = 'Application singleton already constructed!';
                return Application;
            }());
            exports_48("Application", Application);
        }
    }
});
System.register("dijon/application", ["dijon/application/Application"], function(exports_49, context_49) {
    "use strict";
    var __moduleName = context_49 && context_49.id;
    return {
        setters:[
            function (Application_1_1) {
                exports_49({
                    "Application": Application_1_1["Application"]
                });
            }],
        execute: function() {
        }
    }
});
System.register("lib", ["dijon/application", "dijon/core", "dijon/display", "dijon/mvc", "dijon/utils"], function(exports_50, context_50) {
    "use strict";
    var __moduleName = context_50 && context_50.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_50(exports);
    }
    return {
        setters:[
            function (application_20_1) {
                exportStar_1(application_20_1);
            },
            function (core_3_1) {
                exportStar_1(core_3_1);
            },
            function (display_4_1) {
                exportStar_1(display_4_1);
            },
            function (mvc_2_1) {
                exportStar_1(mvc_2_1);
            },
            function (utils_5_1) {
                exportStar_1(utils_5_1);
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpam9uL3V0aWxzL0RldmljZS50cyIsImRpam9uL3V0aWxzL0xvZ2dlci50cyIsImRpam9uL3V0aWxzL05vdGlmaWNhdGlvbnMudHMiLCJkaWpvbi91dGlscy9UZXh0dXJlcy50cyIsImRpam9uL2Rpc3BsYXkvQml0bWFwVGV4dC50cyIsImRpam9uL2Rpc3BsYXkvQ29tcG9uZW50LnRzIiwiZGlqb24vZGlzcGxheS9Hcm91cC50cyIsImRpam9uL2Rpc3BsYXkvU3ByaXRlLnRzIiwiZGlqb24vZGlzcGxheS9JbnZpc2libGVCdXR0b24udHMiLCJkaWpvbi9kaXNwbGF5L05pbmVTbGljZUltYWdlLnRzIiwiZGlqb24vZGlzcGxheS9TcGluZS50cyIsImRpam9uL2Rpc3BsYXkvU3BpbmUyLnRzIiwiZGlqb24vZGlzcGxheS9UZXh0LnRzIiwiZGlqb24vdXRpbHMvUGxhY2Vob2xkZXJzLnRzIiwiZGlqb24vdXRpbHMvVGltZS50cyIsImRpam9uL3V0aWxzL1V0aWwudHMiLCJkaWpvbi9jb3JlL0FuYWx5dGljc01hbmFnZXIudHMiLCJkaWpvbi9jb3JlL0Fzc2V0TWFuYWdlci50cyIsImRpam9uL2NvcmUvQXVkaW9NYW5hZ2VyLnRzIiwiZGlqb24vY29yZS9HYW1lLnRzIiwiZGlqb24vY29yZS9HYW1lT2JqZWN0RmFjdG9yeS50cyIsImRpam9uL2NvcmUvU2VxdWVuY2VNYW5hZ2VyLnRzIiwiZGlqb24vY29yZS9TdGF0ZS50cyIsImRpam9uL2NvcmUvU3RvcmFnZU1hbmFnZXIudHMiLCJkaWpvbi9jb3JlL1RyYW5zaXRpb25NYW5hZ2VyLnRzIiwiZGlqb24vbXZjL01vZGVsLnRzIiwiZGlqb24vbXZjL0NvcHlNb2RlbC50cyIsImRpam9uL212Yy9NZWRpYXRvci50cyIsImRpam9uL212Yy9Ob3RpZmljYXRpb24udHMiLCJkaWpvbi9hcHBsaWNhdGlvbi9BcHBsaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUMsQ0FBQyxHQUFzQixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBRTVOLElBQUksQ0FBQyxFQUFFLEdBQWlCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBRXJJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMvRixJQUFJLENBQUMsQ0FBQyxHQUFzQixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFB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Q0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ2xILElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO29CQUNwRCxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQzlHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO29CQUVyRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzt3QkFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFBO3dCQUNyRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQzlHLENBQUM7b0JBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTt3QkFDdEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO3dCQUM5QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7b0JBQ3BELENBQUM7b0JBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDdkQsQ0FBQztnQkFFTyxrQ0FBUyxHQUFqQjtvQkFDSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7d0JBQzVCLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO29CQUNsQyxDQUFDO2dCQUNMLENBQUM7Z0JBRU8scUNBQVksR0FBcEI7b0JBQ0ksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO3dCQUM1QixNQUFNLENBQUM7b0JBQ1gsQ0FBQztvQkFDRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDbEQsQ0FBQztnQkFFTSxtQ0FBVSxHQUFqQjtvQkFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQzVDLENBQUM7Z0JBRU0saUNBQVEsR0FBZjtvQkFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQzVDLENBQUM7Z0JBRUQsc0JBQVcsd0NBQVk7eUJBQXZCLFVBQXdCLEtBQWM7d0JBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO3dCQUMzQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzs0QkFDckIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO3dCQUNyQixDQUFDO3dCQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNKLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzt3QkFDeEIsQ0FBQztvQkFDTCxDQUFDOzs7bUJBQUE7Z0JBRUQsc0JBQVcsa0NBQU07eUJBQWpCO3dCQUNJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7NEJBQ3RFLE1BQU0sQ0FBQyxJQUFJLENBQUM7d0JBQ2hCLENBQUM7d0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUM7b0JBQzNDLENBQUM7OzttQkFBQTtnQkFFRCxzQkFBVyxpQ0FBSzt5QkFBaEI7d0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7b0JBQzFDLENBQUM7OzttQkFBQTtnQkFFRCxzQkFBVyxpQ0FBSzt5QkFVaEI7d0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ3hCLENBQUM7eUJBWkQsVUFBaUIsS0FBYTt3QkFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7d0JBQ3JCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDcEIsQ0FBQzs7O21CQUFBO2dCQUVELHNCQUFXLGlDQUFLO3lCQVNoQjt3QkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDekIsQ0FBQzt5QkFYRCxVQUFpQixLQUFhO3dCQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzt3QkFDdEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUNwQixDQUFDOzs7bUJBQUE7Z0JBVU0sZ0NBQU8sR0FBZCxVQUFlLEtBQWEsRUFBRSxNQUFjO29CQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDcEIsQ0FBQztnQkFFRCxzQkFBVyw4Q0FBa0I7eUJBQTdCO3dCQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7b0JBQ3BDLENBQUM7OzttQkFBQTtnQkFDTCxxQkFBQztZQUFELENBNUtBLEFBNEtDLENBNUttQyxhQUFLLEdBNEt4QztZQTVLRCw0Q0E0S0MsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7O1lDM0tEO2dCQUEyQix5QkFBZ0I7Z0JBeUJ2QyxlQUFtQixTQUFzQixFQUFFLENBQWEsRUFBRSxDQUFhLEVBQVMsYUFBeUI7b0JBQTdGLHlCQUE2QixHQUE3QixjQUE2QjtvQkFBRSxpQkFBYSxHQUFiLEtBQWE7b0JBQUUsaUJBQWEsR0FBYixLQUFhO29CQUFFLDZCQUFnQyxHQUFoQyxpQkFBZ0M7b0JBQ3JHLGtCQUFNLHlCQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUMsR0FBRyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztvQkFEMUksY0FBUyxHQUFULFNBQVMsQ0FBYTtvQkFBdUMsa0JBQWEsR0FBYixhQUFhLENBQVk7b0JBdkJsRyxVQUFLLEdBQVksS0FBSyxDQUFDO29CQUV0QixhQUFRLEdBQVksS0FBSyxDQUFDO29CQUMzQixhQUFRLEdBQWtCLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUM5Qyx3QkFBbUIsR0FBa0IsSUFBSSxDQUFDO29CQUMxQyxlQUFVLEdBQWtCLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUU3QyxlQUFVLEdBQVksSUFBSSxDQUFDO29CQUMzQixZQUFPLEdBQVksS0FBSyxDQUFDO29CQUN6QixXQUFNLEdBQVcsQ0FBQyxDQUFDO29CQUNuQixtQkFBYyxHQUFXLENBQUMsQ0FBQztvQkFFM0Isa0JBQWEsR0FBaUIsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDckQsc0JBQWlCLEdBQVcsQ0FBQyxDQUFDO29CQUM5Qix1QkFBa0IsR0FBVyxDQUFDLENBQUM7b0JBQy9CLG1CQUFjLEdBQW1CLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUd0RCxtQkFBYyxHQUE2QixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO29CQUMxRCxvQkFBZSxHQUFZLEtBQUssQ0FBQztvQkFFcEMsbUJBQWMsR0FBWSxLQUFLLENBQUM7b0JBS25DLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO29CQUVwQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzt3QkFDdEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7b0JBQy9CLENBQUM7b0JBRUQsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUNuQixLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBRTFELElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO29CQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUMvQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2YsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDO29CQUMxRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUd6SCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQyxhQUFhLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDbEQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUMzQixDQUFDO2dCQUNMLENBQUM7Z0JBRU8saUNBQWlCLEdBQXpCO29CQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUNyQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQzNCLENBQUM7Z0JBRVMsdUJBQU8sR0FBakI7Z0JBRUEsQ0FBQztnQkFFTSx1QkFBTyxHQUFkO29CQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztvQkFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUV0QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3hELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7NEJBQ3BDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDcEQsQ0FBQztvQkFDTCxDQUFDO29CQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO29CQUMzQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3RCLGdCQUFLLENBQUMsT0FBTyxXQUFFLENBQUM7Z0JBQ3BCLENBQUM7Z0JBRU0sc0JBQU0sR0FBYixVQUFjLEVBQWdDO29CQUFoQyxrQkFBZ0MsR0FBaEMsS0FBYSxLQUFLLENBQUMsYUFBYTtvQkFDMUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNoQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztvQkFDN0IsQ0FBQztvQkFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7d0JBQ25DLE1BQU0sQ0FBQztvQkFDWCxDQUFDO29CQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO3dCQUNwRSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNsSSxDQUFDO29CQUVELGdCQUFLLENBQUMsTUFBTSxZQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBR25DLENBQUM7Z0JBRU0sMkJBQVcsR0FBbEIsVUFBbUIsSUFBWSxFQUFFLE1BQWtDO29CQUMvRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ3JCLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU07d0JBQzdCLElBQUksSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUs7d0JBQzVCLElBQUksSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzt3QkFDNUIsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFFakIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxDQUFDO29CQUVELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDekIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDckMsQ0FBQztvQkFFRCxJQUFJLENBQUMsYUFBYSxHQUFrQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFL0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztvQkFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ25ELElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDMUQsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7Z0JBQ2hDLENBQUM7Z0JBRU0sOEJBQWMsR0FBckI7b0JBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRU0sNkJBQWEsR0FBcEI7b0JBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7Z0JBQ2hDLENBQUM7Z0JBRU0sa0NBQWtCLEdBQXpCO29CQUFBLGlCQTRDQztvQkExQ0csRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUMvQixNQUFNLENBQUM7b0JBQ1gsQ0FBQztvQkFHRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztvQkFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBRWYsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7b0JBQ2pDLElBQU0sTUFBTSxHQUFrQixJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDO29CQUc3RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO3dCQUNmLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ3BELENBQUM7b0JBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFDMUYsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUdoQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7b0JBRzNCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxDQUFDO3dCQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxDQUFDO3dCQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQzt3QkFDdEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUM7b0JBQzVDLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDekQsQ0FBQztvQkFDRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztvQkFNbkQsSUFBSSxDQUFDLElBQUssQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsY0FBUSxLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFFL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDL0IsQ0FBQztnQkFFYSxxQkFBZSxHQUE3QixVQUE4QixTQUFpQixFQUFFLGFBQXlCO29CQUF6Qiw2QkFBeUIsR0FBekIsaUJBQXlCO29CQUN0RSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO29CQUN6QixJQUFNLFVBQVUsR0FBRyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLHlCQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO29CQUNoSixJQUFNLGVBQWUsR0FBRyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO29CQUMzSSxJQUFNLFlBQVksR0FBRyxlQUFlLENBQUMsZ0JBQWdCLENBQUMseUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDekgsTUFBTSxDQUFDLFlBQVksQ0FBQztnQkFDeEIsQ0FBQztnQkFFYSwyQkFBcUIsR0FBbkMsVUFBb0MsSUFBSSxFQUFFLFFBQVE7b0JBRTlDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLHlCQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQztvQkFDbEYsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFFN0IsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyx5QkFBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDaEgsQ0FBQztnQkFFRCxzQkFBVyx5QkFBTTt5QkFBakI7d0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ3hCLENBQUM7eUJBRUQsVUFBa0IsS0FBYzt3QkFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ3pCLENBQUM7OzttQkFKQTtnQkFNRCxzQkFBVyx3QkFBSzt5QkFBaEI7d0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQ3ZCLENBQUM7eUJBRUQsVUFBaUIsS0FBYTt3QkFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQ3hCLENBQUM7OzttQkFKQTtnQkFNRCxzQkFBVywrQkFBWTt5QkFLdkI7d0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7b0JBQzlCLENBQUM7eUJBUEQsVUFBd0IsTUFBb0I7d0JBQ3hDLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO3dCQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztvQkFDL0IsQ0FBQzs7O21CQUFBO2dCQU1ELHNCQUFXLG1DQUFnQjt5QkFLM0I7d0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztvQkFDbEMsQ0FBQzt5QkFQRCxVQUE0QixLQUFhO3dCQUNyQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO3dCQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztvQkFDL0IsQ0FBQzs7O21CQUFBO2dCQU1ELHNCQUFXLG9DQUFpQjt5QkFLNUI7d0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztvQkFDbkMsQ0FBQzt5QkFQRCxVQUE2QixLQUFhO3dCQUN0QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO3dCQUNoQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztvQkFDL0IsQ0FBQzs7O21CQUFBO2dCQU1NLHlCQUFTLEdBQWhCO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDdkQsQ0FBQztnQkFFUyw2QkFBYSxHQUF2QjtvQkFDSSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUUxVSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztnQkFDL0IsQ0FBQztnQkFHTSx3QkFBUSxHQUFmLFVBQWdCLENBQWdCLEVBQUUsQ0FBZ0I7b0JBQWxDLGlCQUFnQixHQUFoQixRQUFnQjtvQkFBRSxpQkFBZ0IsR0FBaEIsUUFBZ0I7b0JBQzlDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDckIsQ0FBQztvQkFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDYixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3JCLENBQUM7b0JBQ0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7Z0JBQy9CLENBQUM7Z0JBRUQsc0JBQVcsd0JBQUs7eUJBQWhCO3dCQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxDQUFDO29CQUNsQyxDQUFDOzs7bUJBQUE7Z0JBRUQsc0JBQVcseUJBQU07eUJBQWpCO3dCQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxDQUFDO29CQUNuQyxDQUFDOzs7bUJBQUE7Z0JBRUQsc0JBQVcsdUJBQUk7eUJBQWY7d0JBQ0ksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQzs0QkFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQzt3QkFDaEIsQ0FBQzt3QkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7b0JBQ25DLENBQUM7OzttQkFBQTtnQkFtQmEsZ0JBQVUsR0FBeEI7b0JBQ0ksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQ3BCLE1BQU0sQ0FBQztvQkFDWCxDQUFDO29CQUNELEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUN6QixLQUFLLENBQUMsSUFBSSxHQUFHLHlCQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDO29CQUM1QyxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUM3QyxDQUFDO2dCQUVhLG9CQUFjLEdBQTVCO29CQUNJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7b0JBQ3RDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDekUsQ0FBQztnQkFFYSx5QkFBbUIsR0FBakM7b0JBQ0ksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFDbEQsS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7b0JBQzlCLENBQUM7Z0JBQ0wsQ0FBQztnQkFDYSwyQkFBcUIsR0FBbkM7b0JBQ0ksS0FBSyxDQUFDLG1CQUFtQixFQUFFLENBQUM7b0JBQzVCLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDM0YsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUN6RSxDQUFDO2dCQUVhLHNCQUFnQixHQUE5QjtvQkFFSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7d0JBQzNDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO3dCQUM1QixLQUFLLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQzt3QkFDM0IsS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDOUIsS0FBSyxDQUFDLHFCQUFxQixFQUFFLENBQUM7b0JBQ2xDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFYSwyQkFBcUIsR0FBbkM7b0JBQ0ksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztnQkFDM0MsQ0FBQztnQkFFYSxpQkFBVyxHQUF6QixVQUEwQixPQUF1QixFQUFFLGFBQXFELEVBQUUsVUFBK0M7b0JBQS9ILHVCQUF1QixHQUF2QixjQUF1QjtvQkFBRSw2QkFBcUQsR0FBckQsZ0JBQXdCLEtBQUssQ0FBQyx1QkFBdUI7b0JBQUUsMEJBQStDLEdBQS9DLGFBQXFCLEtBQUssQ0FBQyxvQkFBb0I7b0JBQ3JKLEtBQUssQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO29CQUMxQixLQUFLLENBQUMsZUFBZSxHQUFHLGFBQWEsQ0FBQztvQkFDdEMsS0FBSyxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUM7Z0JBQ3BDLENBQUM7Z0JBeFVhLG1CQUFhLEdBQVcsTUFBTSxDQUFDO2dCQTZRNUIsaUJBQVcsR0FBWSxLQUFLLENBQUM7Z0JBQzdCLFVBQUksR0FBUyxJQUFJLENBQUM7Z0JBQ2xCLGtCQUFZLEdBQXNCLElBQUksQ0FBQztnQkFHMUMsbUJBQWEsR0FBWSxLQUFLLENBQUM7Z0JBRS9CLGVBQVMsR0FBWSxLQUFLLENBQUM7Z0JBRTNCLDZCQUF1QixHQUFXLFNBQVMsQ0FBQztnQkFDNUMscUJBQWUsR0FBVyxJQUFJLENBQUM7Z0JBRS9CLDBCQUFvQixHQUFXLEVBQUUsQ0FBQztnQkFDbEMsa0JBQVksR0FBVyxJQUFJLENBQUM7Z0JBK0M5QyxZQUFDO1lBQUQsQ0ExVUEsQUEwVUMsQ0ExVTBCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQTBVMUM7WUExVUQsMEJBMFVDLENBQUE7Ozs7Ozs7Ozs7Ozs7OztZQzFVRDtnQkFBNEIsMEJBQWdCO2dCQXdCeEMsZ0JBQW1CLFNBQXNCLEVBQUUsQ0FBYSxFQUFFLENBQWEsRUFBUyxhQUF5QjtvQkFBN0YseUJBQTZCLEdBQTdCLGNBQTZCO29CQUFFLGlCQUFhLEdBQWIsS0FBYTtvQkFBRSxpQkFBYSxHQUFiLEtBQWE7b0JBQUUsNkJBQWdDLEdBQWhDLGlCQUFnQztvQkFDckcsa0JBQU0seUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO29CQUQ3SSxjQUFTLEdBQVQsU0FBUyxDQUFhO29CQUF1QyxrQkFBYSxHQUFiLGFBQWEsQ0FBWTtvQkF0QmxHLFVBQUssR0FBWSxLQUFLLENBQUM7b0JBRXRCLGFBQVEsR0FBWSxLQUFLLENBQUM7b0JBQzNCLGFBQVEsR0FBa0IsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQzlDLHdCQUFtQixHQUFrQixJQUFJLENBQUM7b0JBQzFDLGVBQVUsR0FBa0IsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBRTdDLGVBQVUsR0FBWSxJQUFJLENBQUM7b0JBQzNCLFlBQU8sR0FBWSxLQUFLLENBQUM7b0JBQ3pCLFdBQU0sR0FBVyxDQUFDLENBQUM7b0JBQ25CLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO29CQUUzQixrQkFBYSxHQUFpQixJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNyRCxzQkFBaUIsR0FBVyxDQUFDLENBQUM7b0JBQzlCLHVCQUFrQixHQUFXLENBQUMsQ0FBQztvQkFDL0IsbUJBQWMsR0FBbUIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBRXRELG1CQUFjLEdBQTZCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7b0JBQzFELG9CQUFlLEdBQVksS0FBSyxDQUFDO29CQUVwQyxtQkFBYyxHQUFZLEtBQUssQ0FBQztvQkFLbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7b0JBRXBDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO3dCQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztvQkFDL0IsQ0FBQztvQkFFRCxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ3BCLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFFM0QsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQy9CLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDZixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztvQkFDeEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUM7b0JBQzFELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBR3pILEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNwRCxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQzVCLENBQUM7Z0JBQ0wsQ0FBQztnQkFFTyxrQ0FBaUIsR0FBekI7b0JBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDZixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDM0IsQ0FBQztnQkFFUyx3QkFBTyxHQUFqQjtnQkFFQSxDQUFDO2dCQUVNLHdCQUFPLEdBQWQ7b0JBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO29CQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7b0JBRXRCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDeEQsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQzs0QkFDcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUNwRCxDQUFDO29CQUNMLENBQUM7b0JBQ0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7b0JBQzNCLGdCQUFLLENBQUMsT0FBTyxXQUFFLENBQUM7Z0JBQ3BCLENBQUM7Z0JBRU0sdUJBQU0sR0FBYixVQUFjLEVBQWlDO29CQUFqQyxrQkFBaUMsR0FBakMsS0FBYSxNQUFNLENBQUMsYUFBYTtvQkFDM0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNoQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztvQkFDN0IsQ0FBQztvQkFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7d0JBQ25DLE1BQU0sQ0FBQztvQkFDWCxDQUFDO29CQUVELGdCQUFLLENBQUMsTUFBTSxZQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ25DLENBQUM7Z0JBRU0sNEJBQVcsR0FBbEIsVUFBbUIsSUFBWTtvQkFDM0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUNyQixFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNO3dCQUM3QixJQUFJLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLO3dCQUM1QixJQUFJLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7d0JBQzVCLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBRWpCLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUNqRCxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3pDLENBQUM7b0JBRUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUM7b0JBRTVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO2dCQUNoQyxDQUFDO2dCQUVNLCtCQUFjLEdBQXJCO29CQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO2dCQUNqQyxDQUFDO2dCQUVNLDhCQUFhLEdBQXBCO29CQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO2dCQUNoQyxDQUFDO2dCQUVNLG1DQUFrQixHQUF6QjtvQkFBQSxpQkE0Q0M7b0JBMUNHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDL0IsTUFBTSxDQUFDO29CQUNYLENBQUM7b0JBR0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7b0JBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO29CQUVmLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO29CQUNqQyxJQUFNLE1BQU0sR0FBa0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztvQkFHN0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQzt3QkFDZixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNwRCxDQUFDO29CQUVELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0JBQzVGLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFHaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO29CQUczQixFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQzt3QkFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQzt3QkFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7d0JBQ3RDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7d0JBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDO29CQUM1QyxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ3pELENBQUM7b0JBQ0QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUM7b0JBTW5ELElBQUksQ0FBQyxJQUFLLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGNBQVEsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBRS9ELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQy9CLENBQUM7Z0JBRWEsc0JBQWUsR0FBN0IsVUFBOEIsU0FBaUIsRUFBRSxhQUF5QjtvQkFBekIsNkJBQXlCLEdBQXpCLGlCQUF5QjtvQkFDdEUsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFDekIsSUFBTSxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyx5QkFBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztvQkFDaEosSUFBTSxlQUFlLEdBQUcsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztvQkFDM0ksSUFBTSxZQUFZLEdBQUcsZUFBZSxDQUFDLGdCQUFnQixDQUFDLHlCQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ3pILE1BQU0sQ0FBQyxZQUFZLENBQUM7Z0JBQ3hCLENBQUM7Z0JBRWEsNEJBQXFCLEdBQW5DLFVBQW9DLElBQUksRUFBRSxRQUFRO29CQUU5QyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyx5QkFBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUM7b0JBQ2xGLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBRTdCLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMseUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ2hILENBQUM7Z0JBRUQsc0JBQVcsMEJBQU07eUJBQWpCO3dCQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUN4QixDQUFDO3lCQUVELFVBQWtCLEtBQWM7d0JBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUN6QixDQUFDOzs7bUJBSkE7Z0JBTUQsc0JBQVcseUJBQUs7eUJBQWhCO3dCQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUN2QixDQUFDO3lCQUVELFVBQWlCLEtBQWE7d0JBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUN4QixDQUFDOzs7bUJBSkE7Z0JBTUQsc0JBQVcsZ0NBQVk7eUJBS3ZCO3dCQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO29CQUM5QixDQUFDO3lCQVBELFVBQXdCLE1BQW9CO3dCQUN4QyxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQzt3QkFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7b0JBQy9CLENBQUM7OzttQkFBQTtnQkFNRCxzQkFBVyxvQ0FBZ0I7eUJBSzNCO3dCQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7b0JBQ2xDLENBQUM7eUJBUEQsVUFBNEIsS0FBYTt3QkFDckMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7b0JBQy9CLENBQUM7OzttQkFBQTtnQkFNRCxzQkFBVyxxQ0FBaUI7eUJBSzVCO3dCQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7b0JBQ25DLENBQUM7eUJBUEQsVUFBNkIsS0FBYTt3QkFDdEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7b0JBQy9CLENBQUM7OzttQkFBQTtnQkFNTSwwQkFBUyxHQUFoQjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3ZELENBQUM7Z0JBRVMsOEJBQWEsR0FBdkI7b0JBQ0ksSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztvQkFFMVUsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7Z0JBQy9CLENBQUM7Z0JBR00seUJBQVEsR0FBZixVQUFnQixDQUFnQixFQUFFLENBQWdCO29CQUFsQyxpQkFBZ0IsR0FBaEIsUUFBZ0I7b0JBQUUsaUJBQWdCLEdBQWhCLFFBQWdCO29CQUM5QyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDYixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3JCLENBQUM7b0JBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNyQixDQUFDO29CQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2dCQUMvQixDQUFDO2dCQUVELHNCQUFXLHlCQUFLO3lCQUFoQjt3QkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQztvQkFDbEMsQ0FBQzs7O21CQUFBO2dCQUVELHNCQUFXLDBCQUFNO3lCQUFqQjt3QkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvQkFDbkMsQ0FBQzs7O21CQUFBO2dCQUVELHNCQUFXLDhCQUFVO3lCQUFyQjt3QkFDSSxNQUFNLENBQTZCLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQ2pELENBQUM7OzttQkFBQTtnQkFFRCxzQkFBVywyQkFBTzt5QkFBbEI7d0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7b0JBQ3pCLENBQUM7OzttQkFBQTtnQkFtQmEsaUJBQVUsR0FBeEI7b0JBQ0ksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQ3JCLE1BQU0sQ0FBQztvQkFDWCxDQUFDO29CQUNELE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUMxQixNQUFNLENBQUMsSUFBSSxHQUFHLHlCQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDO29CQUM3QyxNQUFNLENBQUMsWUFBWSxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUM5QyxDQUFDO2dCQUVhLHFCQUFjLEdBQTVCO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7b0JBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDNUUsQ0FBQztnQkFFYSwwQkFBbUIsR0FBakM7b0JBQ0ksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFDcEQsTUFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7b0JBQy9CLENBQUM7Z0JBQ0wsQ0FBQztnQkFDYSw0QkFBcUIsR0FBbkM7b0JBQ0ksTUFBTSxDQUFDLG1CQUFtQixFQUFFLENBQUM7b0JBQzdCLE1BQU0sQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDL0YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLHFCQUFxQixFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUM1RSxDQUFDO2dCQUVhLHVCQUFnQixHQUE5QjtvQkFFSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7d0JBQzdDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO3dCQUM3QixNQUFNLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQzt3QkFDNUIsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDL0IsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUM7b0JBQ25DLENBQUM7Z0JBQ0wsQ0FBQztnQkFFYSw0QkFBcUIsR0FBbkM7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztnQkFDNUMsQ0FBQztnQkFFYSxrQkFBVyxHQUF6QixVQUEwQixPQUF1QixFQUFFLGFBQXNELEVBQUUsVUFBZ0Q7b0JBQWpJLHVCQUF1QixHQUF2QixjQUF1QjtvQkFBRSw2QkFBc0QsR0FBdEQsZ0JBQXdCLE1BQU0sQ0FBQyx1QkFBdUI7b0JBQUUsMEJBQWdELEdBQWhELGFBQXFCLE1BQU0sQ0FBQyxvQkFBb0I7b0JBQ3ZKLE1BQU0sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO29CQUMzQixNQUFNLENBQUMsZUFBZSxHQUFHLGFBQWEsQ0FBQztvQkFDdkMsTUFBTSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUM7Z0JBQ3JDLENBQUM7Z0JBM1RhLG9CQUFhLEdBQVcsTUFBTSxDQUFDO2dCQWdRNUIsa0JBQVcsR0FBWSxLQUFLLENBQUM7Z0JBQzdCLFdBQUksR0FBUyxJQUFJLENBQUM7Z0JBQ2xCLG1CQUFZLEdBQXNCLElBQUksQ0FBQztnQkFHMUMsb0JBQWEsR0FBWSxLQUFLLENBQUM7Z0JBRS9CLGdCQUFTLEdBQVksS0FBSyxDQUFDO2dCQUUzQiw4QkFBdUIsR0FBVyxTQUFTLENBQUM7Z0JBQzVDLHNCQUFlLEdBQVcsSUFBSSxDQUFDO2dCQUUvQiwyQkFBb0IsR0FBVyxFQUFFLENBQUM7Z0JBQ2xDLG1CQUFZLEdBQVcsSUFBSSxDQUFDO2dCQStDOUMsYUFBQztZQUFELENBN1RBLEFBNlRDLENBN1QyQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0E2VDNDO1lBN1RELDRCQTZUQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUN6VEQ7Z0JBQTBCLHdCQUFXO2dCQW9CakMsY0FBWSxDQUFTLEVBQUUsQ0FBUyxFQUFFLElBQWlCLEVBQUUsUUFBaUIsRUFBRSxRQUF5QyxFQUFFLFNBQTJDLEVBQUUsU0FBMEIsRUFBRSxRQUF5QixFQUFFLEtBQWlCLEVBQVMsV0FBdUIsRUFBRSxRQUF1QjtvQkFBL1Asb0JBQWlCLEdBQWpCLFNBQWlCO29CQUFxQix3QkFBeUMsR0FBekMsV0FBbUIsSUFBSSxDQUFDLGlCQUFpQjtvQkFBRSx5QkFBMkMsR0FBM0MsWUFBb0IsSUFBSSxDQUFDLGtCQUFrQjtvQkFBRSx5QkFBMEIsR0FBMUIsa0JBQTBCO29CQUFFLHdCQUF5QixHQUF6QixnQkFBeUI7b0JBQUUscUJBQWlCLEdBQWpCLFNBQWlCO29CQUFFLDJCQUE4QixHQUE5QixlQUE4QjtvQkFBRSx3QkFBdUIsR0FBdkIsZUFBdUI7b0JBQzdSLGtCQUNJLHlCQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxFQUM5QixDQUFDLEVBQ0QsQ0FBQyxFQUNELElBQUksRUFDSixJQUFJLENBQUMsWUFBWSxDQUFDO3dCQUNkLElBQUksRUFBRSxRQUFRLEdBQUcsS0FBSyxHQUFHLFFBQVE7d0JBQ2pDLElBQUksRUFBRSxTQUFTO3dCQUNmLEtBQUssRUFBRSxTQUFTO3dCQUNoQixRQUFRLEVBQUUsUUFBUTt3QkFDbEIsYUFBYSxFQUFFLEtBQUs7cUJBQ3ZCLEVBQUUsUUFBUSxDQUFDLENBQ2YsQ0FBQztvQkFiMk8sZ0JBQVcsR0FBWCxXQUFXLENBQVk7b0JBVmpRLHdCQUFtQixHQUFrQixJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFFdEQsZUFBVSxHQUFHLEtBQUssQ0FBQztvQkFNbkIsbUJBQWMsR0FBYSxFQUFFLENBQUM7b0JBMklqQyxrQkFBYSxHQUFHO3dCQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzt3QkFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7d0JBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDcEQsQ0FBQyxDQUFBO29CQU1NLGVBQVUsR0FBRzt3QkFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDOUQsQ0FBQyxDQUFBO29CQXZJRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQzlDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDekIsQ0FBQztnQkFHTSxzQkFBTyxHQUFkLFVBQWUsSUFBWTtvQkFDdkIsZ0JBQUssQ0FBQyxPQUFPLFlBQUMsSUFBSSxDQUFDLENBQUM7b0JBRXBCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDOUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUVyQixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNoQixDQUFDO2dCQUVTLDRCQUFhLEdBQXZCO29CQUNJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGNBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUMvQixNQUFNLENBQUM7b0JBQ1gsQ0FBQztvQkFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsY0FBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBRXJCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7b0JBQ2xFLENBQUM7Z0JBQ0wsQ0FBQztnQkFRUyxrQ0FBbUIsR0FBN0I7b0JBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDaEksQ0FBQztnQkFFUyxtQ0FBb0IsR0FBOUI7b0JBQ0ksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7d0JBQzNDLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ2pCLENBQUM7b0JBQ0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztvQkFDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUMxQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUU1QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNuQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3hDLENBQUM7Z0JBQ0wsQ0FBQztnQkFRTSx1QkFBUSxHQUFmLFVBQWdCLEtBQWE7b0JBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUN6RCxDQUFDO2dCQU1NLHlCQUFVLEdBQWpCO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ25FLENBQUM7Z0JBU00sOEJBQWUsR0FBdEIsVUFBdUIsTUFBYyxFQUFFLEtBQWEsRUFBRSxhQUE4QjtvQkFBOUIsNkJBQThCLEdBQTlCLHFCQUE4QjtvQkFDaEYsSUFBSSxJQUFJLEdBQUcsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztvQkFFM0QsTUFBTSxHQUFHLGFBQWEsR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUV2RCxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO29CQUV4QixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxJQUFJLFFBQVEsR0FBRyxVQUFVLEdBQUcsR0FBRyxDQUFDO29CQUVoQyxPQUFPLFVBQVUsSUFBSSxRQUFRLEVBQUUsQ0FBQzt3QkFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7d0JBQ2pDLFVBQVUsRUFBRSxDQUFDO29CQUNqQixDQUFDO29CQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQzdDLENBQUM7Z0JBUU0sc0JBQU8sR0FBZCxVQUFlLFVBQXdCLEVBQUUsS0FBaUI7b0JBQTNDLDBCQUF3QixHQUF4QixnQkFBd0I7b0JBQUUscUJBQWlCLEdBQWpCLFNBQWlCO29CQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBRWhELElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO29CQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUUxQyxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7b0JBQ25CLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7b0JBRWhDLE9BQU8sVUFBVSxJQUFJLFFBQVEsRUFBRSxDQUFDO3dCQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxVQUFVLENBQUMsQ0FBQzt3QkFDM0MsVUFBVSxFQUFFLENBQUM7b0JBQ2pCLENBQUM7b0JBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzlHLENBQUM7Z0JBc0JjLGlCQUFZLEdBQTNCLFVBQTRCLEdBQVcsRUFBRSxRQUFnQjtvQkFDckQsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7d0JBQ1YsTUFBTSxDQUFDLEdBQUcsQ0FBQztvQkFFZixHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDaEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDL0IsQ0FBQztvQkFDTCxDQUFDO29CQUVELE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ2YsQ0FBQztnQkFFRCxzQkFBSSw0QkFBVTt5QkFBZDt3QkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO29CQUMzRSxDQUFDOzs7bUJBQUE7Z0JBRUQsc0JBQUksMkJBQVM7eUJBQWI7d0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztvQkFDMUUsQ0FBQzs7O21CQUFBO2dCQTlMYSxzQkFBaUIsR0FBVyxFQUFFLENBQUM7Z0JBQy9CLHVCQUFrQixHQUFXLFNBQVMsQ0FBQztnQkFDdkMsaUJBQVksR0FBVyx1QkFBdUIsQ0FBQztnQkFDL0MscUJBQWdCLEdBQVcsQ0FBQyxDQUFDO2dCQUM3QixxQkFBZ0IsR0FBVyxDQUFDLENBQUM7Z0JBMkwvQyxXQUFDO1lBQUQsQ0FqTUEsQUFpTUMsQ0FqTXlCLE1BQU0sQ0FBQyxJQUFJLEdBaU1wQztZQWpNRCx3QkFpTUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDcE1EO2dCQUFBO2dCQTRFQSxDQUFDO2dCQTNFRyxzQkFBbUIsb0JBQUk7eUJBQXZCO3dCQUNJLE1BQU0sQ0FBQyx5QkFBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQztvQkFDMUMsQ0FBQzs7O21CQUFBO2dCQUVNLGtCQUFLLEdBQVosVUFBYSxDQUFhLEVBQUUsQ0FBYSxFQUFFLE9BQVksRUFBRSxJQUFpQjtvQkFBN0QsaUJBQWEsR0FBYixLQUFhO29CQUFFLGlCQUFhLEdBQWIsS0FBYTtvQkFBZ0Isb0JBQWlCLEdBQWpCLFNBQWlCO29CQUN0RSxJQUFNLGFBQWEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUN6RSxhQUFhLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDMUIsTUFBTSxDQUFDLGFBQWEsQ0FBQztnQkFDekIsQ0FBQztnQkFFTSxtQkFBTSxHQUFiLFVBQWMsQ0FBYSxFQUFFLENBQWEsRUFBRSxLQUFtQixFQUFFLE1BQW1CLEVBQUUsUUFBeUIsRUFBRSxJQUF1QixFQUFFLFFBQXlCLEVBQUUsZUFBMkIsRUFBRSxZQUErQixFQUFFLFNBQTRCLEVBQUUsU0FBNEI7b0JBQS9RLGlCQUFhLEdBQWIsS0FBYTtvQkFBRSxpQkFBYSxHQUFiLEtBQWE7b0JBQUUscUJBQW1CLEdBQW5CLFdBQW1CO29CQUFFLHNCQUFtQixHQUFuQixXQUFtQjtvQkFBRSx3QkFBeUIsR0FBekIsZ0JBQXlCO29CQUFFLG9CQUF1QixHQUF2QixlQUF1QjtvQkFBRSx3QkFBeUIsR0FBekIsZUFBeUI7b0JBQUUsK0JBQTJCLEdBQTNCLHNCQUEyQjtvQkFBRSw0QkFBK0IsR0FBL0IsdUJBQStCO29CQUFFLHlCQUE0QixHQUE1QixvQkFBNEI7b0JBQUUseUJBQTRCLEdBQTVCLG9CQUE0QjtvQkFDelIsSUFBTSxNQUFNLEdBQWtCLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFHekUsSUFBTSxZQUFZLEdBQVMsSUFBSSxjQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsRUFBRSxNQUFNLEdBQUcsSUFBSSxFQUFFLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRSxRQUFRLEdBQUcsRUFBRSxHQUFHLE1BQU0sR0FBRyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ3BJLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDM0IsWUFBWSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7b0JBRTVCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBRVgsS0FBSyxHQUFHLFlBQVksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO3dCQUNwQyxNQUFNLEdBQUcsWUFBWSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7d0JBRXRDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO29CQUMxRCxDQUFDO29CQUVELElBQU0sT0FBTyxHQUFpQixZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsbUJBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsWUFBWSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3BILElBQU0sU0FBUyxHQUFpQixZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsbUJBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsU0FBUyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQ3JILElBQU0sU0FBUyxHQUFpQixZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsbUJBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsU0FBUyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBR3JILFNBQVMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUMxQixTQUFTLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFFMUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDekIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDM0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDM0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFFOUIsTUFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7b0JBQzNCLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztvQkFFbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO3dCQUN4QixTQUFTLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzt3QkFDMUIsU0FBUyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7d0JBQzFCLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO3dCQUV2QixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzRCQUNYLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7d0JBQ25DLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7b0JBRUgsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO3dCQUMxQixTQUFTLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzt3QkFDekIsU0FBUyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7d0JBQzFCLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUM1QixDQUFDLENBQUMsQ0FBQztvQkFFSCxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7d0JBQzFCLFNBQVMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO3dCQUMxQixTQUFTLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzt3QkFDekIsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQzVCLENBQUMsQ0FBQyxDQUFDO29CQUVILE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQzt3QkFDekIsU0FBUyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7d0JBQzFCLFNBQVMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO3dCQUMxQixPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDM0IsQ0FBQyxDQUFDLENBQUM7b0JBRUgsTUFBTSxDQUFDLFNBQVMsR0FBRzt3QkFDZixNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ25FLENBQUMsQ0FBQTtvQkFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUNsQixDQUFDO2dCQUNMLG1CQUFDO1lBQUQsQ0E1RUEsQUE0RUMsSUFBQTtZQTVFRCx3Q0E0RUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7O1lDOUVEO2dCQUFBO2dCQVNBLENBQUM7Z0JBUmlCLGdCQUFXLEdBQXpCLFVBQTBCLG1CQUEyQixFQUFFLFFBQWtCLEVBQUUsZUFBb0I7b0JBQUUsZ0JBQVM7eUJBQVQsV0FBUyxDQUFULHNCQUFTLENBQVQsSUFBUzt3QkFBVCwrQkFBUzs7b0JBQ3RHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUN2QixNQUFNLEdBQUcsRUFBRSxDQUFDO29CQUNoQixDQUFDO29CQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDO29CQUUvRCxNQUFNLENBQUMsMEJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLDBCQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3BILENBQUM7Z0JBQ0wsV0FBQztZQUFELENBVEEsQUFTQyxJQUFBO1lBVEQsd0JBU0MsQ0FBQTs7Ozs7Ozs7Ozs7WUNYRDtnQkFBQTtnQkFJQSxDQUFDO2dCQUhpQixhQUFRLEdBQXRCLFVBQXVCLEtBQWE7b0JBQ2hDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBQ0wsV0FBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBSkQsd0JBSUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNIRDtnQkFLSSwwQkFBbUIsT0FBdUIsRUFBUyxRQUF1QjtvQkFBOUQsdUJBQThCLEdBQTlCLGNBQThCO29CQUFFLHdCQUE4QixHQUE5QixlQUE4QjtvQkFBdkQsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7b0JBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBZTtvQkFIbEUsZUFBVSxHQUFXLElBQUksQ0FBQztvQkFDMUIsMEJBQXFCLEdBQVksS0FBSyxDQUFDO2dCQUUrQixDQUFDO2dCQUV4RSxxQ0FBVSxHQUFqQixVQUFrQixNQUFxQixFQUFFLEtBQW9CLEVBQUUsS0FBb0I7b0JBQWpFLHNCQUFxQixHQUFyQixhQUFxQjtvQkFBRSxxQkFBb0IsR0FBcEIsWUFBb0I7b0JBQUUscUJBQW9CLEdBQXBCLFlBQW9CO29CQUMvRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDaEMsTUFBTSxDQUFDO29CQUNYLENBQUM7b0JBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNWLE1BQU0sSUFBSSxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO29CQUN0RCxDQUFDO29CQUVELEVBQUUsQ0FBQyxDQUFDLGNBQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQ25ELElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDdEMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7d0JBQzFELE1BQU0sQ0FBQztvQkFDWCxDQUFDO29CQUVELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ1IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDbEUsQ0FBQztvQkFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFDYixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQzNELENBQUM7b0JBQ0QsSUFBSSxDQUFDLENBQUM7d0JBQ0YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQ3BELENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCw2Q0FBa0IsR0FBbEIsVUFBbUIsUUFBZ0IsRUFBRSxRQUFnQixFQUFFLFdBQW9CO29CQUN2RSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUNoQixNQUFNLENBQUM7b0JBQ1gsQ0FBQztvQkFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLFdBQVcsQ0FBQzt3QkFDakQsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDakIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztnQkFDL0QsQ0FBQztnQkFFTyw4Q0FBbUIsR0FBM0I7b0JBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNoQixFQUFFLENBQUMsQ0FBQyxjQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUNuRCxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQ3BDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ2xELENBQUM7Z0JBQ0wsQ0FBQztnQkFHRCxzQkFBSSx1Q0FBUzt5QkFPYjt3QkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztvQkFDM0IsQ0FBQzt5QkFURCxVQUFjLEtBQWE7d0JBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO3dCQUN4QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7NEJBQzlCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO3dCQUMvQixDQUFDO29CQUNMLENBQUM7OzttQkFBQTtnQkFPRCxzQkFBSSxvQ0FBTTt5QkFBVjt3QkFDSSxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7b0JBQ2pHLENBQUM7OzttQkFBQTtnQkFFRCxzQkFBSSxnQ0FBRTt5QkFBTjt3QkFDSSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN4QixDQUFDOzs7bUJBQUE7Z0JBQ0wsdUJBQUM7WUFBRCxDQXZFQSxBQXVFQyxJQUFBO1lBdkVELGdEQXVFQyxDQUFBO1lBRUQ7Z0JBRUksNEJBQW1CLE9BQWU7b0JBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFEM0IsU0FBSSxHQUFXLG9CQUFvQixDQUFDO2dCQUNMLENBQUM7Z0JBQzNDLHlCQUFDO1lBQUQsQ0FIQSxBQUdDLElBQUE7WUFIRCxvREFHQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNqRUQ7Z0JBNkVJO29CQXpFUSxVQUFLLEdBQUcsRUFBRSxDQUFDO29CQUNYLGFBQVEsR0FBVyxFQUFFLENBQUM7b0JBQ3RCLGFBQVEsR0FBc0IsRUFBRSxDQUFDO29CQUNqQyxlQUFVLEdBQVcsSUFBSSxDQUFDO29CQUMxQixjQUFTLEdBQVcsSUFBSSxDQUFDO29CQUN6QixxQkFBZ0IsR0FBVyxJQUFJLENBQUM7b0JBQ2hDLGFBQVEsR0FBVyxJQUFJLENBQUM7b0JBQ3hCLGVBQVUsR0FBVyxJQUFJLENBQUM7b0JBQzFCLGVBQVUsR0FBVyxJQUFJLENBQUM7b0JBQzFCLGNBQVMsR0FBVyxJQUFJLENBQUM7b0JBQ3pCLG9CQUFlLEdBQVcsSUFBSSxDQUFDO29CQUMvQixpQkFBWSxHQUFXLElBQUksQ0FBQztvQkFDNUIscUJBQWdCLEdBQVcsSUFBSSxDQUFDO29CQUNoQyxlQUFVLEdBQVcsSUFBSSxDQUFDO29CQUMxQiwyQkFBc0IsR0FBVyxDQUFDLENBQUM7b0JBQ25DLFNBQUksR0FBVyxDQUFDLENBQUM7b0JBQ2pCLGdCQUFXLEdBQVcsSUFBSSxDQUFDO29CQUUzQixjQUFTLEdBQUcsRUFBRSxDQUFDO29CQUNmLGtCQUFhLEdBQUcsRUFBRSxDQUFDO29CQUNuQixvQkFBZSxHQUFHLEVBQUUsQ0FBQztvQkFDckIsa0JBQWEsR0FBRyxFQUFFLENBQUM7b0JBRW5CLHNCQUFpQixHQUFXLElBQUksQ0FBQztvQkFDakMsY0FBUyxHQUFZLEtBQUssQ0FBQztvQkFDM0Isb0JBQWUsR0FBa0IsRUFBRSxDQUFDO29CQUNwQyxvQkFBZSxHQUFZLEtBQUssQ0FBQztvQkFDakMsMEJBQXFCLEdBQVcsQ0FBQyxDQUFDO29CQUNsQyxnQkFBVyxHQUFXLEdBQUcsQ0FBQztvQkFFMUIsZUFBVSxHQUFXLENBQUMsQ0FBQztvQkFDdkIsbUJBQWMsR0FBVyxDQUFDLENBQUM7b0JBRTNCLHNCQUFpQixHQUFXLEVBQUUsQ0FBQztvQkFLaEMsZ0JBQVcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDbEMsZ0JBQVcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDbEMsbUJBQWMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDckMsbUJBQWMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDckMsa0NBQTZCLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBRXBELDBCQUFxQixHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUM1QywwQkFBcUIsR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDNUMsNkJBQXdCLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQy9DLDZCQUF3QixHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUMvQyw0Q0FBdUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkEwQmpFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDakIsQ0FBQztnQkFPTyw0QkFBSyxHQUFiO29CQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsMEJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztvQkFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO29CQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUMzQyxDQUFDO2dCQVNPLHNDQUFlLEdBQXZCLFVBQXdCLEdBQVcsRUFBRSxJQUFnQjtvQkFBckQsaUJBU0M7b0JBUkcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUN4QyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7b0JBRXhDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUV6QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7d0JBQ3JCLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNwQyxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQVFPLGtDQUFXLEdBQW5CLFVBQW9CLEVBQVU7b0JBQzFCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQzNCLENBQUMsQ0FBQztvQkFFTixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQy9CLENBQUM7Z0JBQ0wsQ0FBQztnQkFPTywyQ0FBb0IsR0FBNUI7b0JBQ0ksSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUMxQyxDQUFDO2dCQVdPLDhDQUF1QixHQUEvQixVQUFnQyxRQUFnQixFQUFFLEVBQVUsRUFBRSxTQUFpQixFQUFFLFVBQWtCO29CQUMvRixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNuRCxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZFLENBQUM7b0JBQ0QsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFFBQVEsQ0FBQztvQkFDdEMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFDaEYsQ0FBQztnQkFPTyw4Q0FBdUIsR0FBL0I7b0JBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBRXpFLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDekMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO2dCQUMzRSxDQUFDO2dCQU1PLHFDQUFjLEdBQXRCO29CQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2hDLENBQUM7Z0JBTU8scUNBQWMsR0FBdEI7b0JBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDaEMsQ0FBQztnQkFXTyx3Q0FBaUIsR0FBekIsVUFBMEIsUUFBZ0IsRUFBRSxFQUFXLEVBQUUsU0FBa0IsRUFBRSxVQUFtQjtvQkFFNUYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbkQsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUV2RSxDQUFDO29CQUtELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxRQUFRLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUNwRixDQUFDO2dCQUVPLGdEQUF5QixHQUFqQyxVQUFrQyxPQUF5QjtvQkFDdkQsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMxRSxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7b0JBQ3pDLENBQUM7Z0JBQ0wsQ0FBQzs7Z0JBT08sd0NBQWlCLEdBQXpCO29CQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUNwRCxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO29CQUVuRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUM7Z0JBQ2pFLENBQUM7Z0JBUU8sMENBQW1CLEdBQTNCLFVBQTRCLGVBQThCO29CQUN0RCxJQUFJLEtBQUssRUFBRSxDQUFDLEVBQUUsYUFBYSxDQUFDO29CQUU1QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzFELEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7NEJBQy9DLGFBQWEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQzs0QkFDdEQsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUN6RCxLQUFLLENBQUMsZUFBZSxHQUFHLGFBQWEsQ0FBQzs0QkFDdEMsS0FBSyxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7NEJBQ3hDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ3hELENBQUM7b0JBQ0wsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQy9CLENBQUM7Z0JBQ0wsQ0FBQztnQkFRTyxzQ0FBZSxHQUF2QixVQUF3QixLQUFhO29CQUNqQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3pELElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFFM0MsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxXQUFXLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQzt3QkFDNUYsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQzs0QkFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFFekMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUMvRCxDQUFDO29CQUVELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7b0JBQy9ILElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFFNUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDcEMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDckMsQ0FBQztnQkFDTCxDQUFDO2dCQVFPLG1DQUFZLEdBQXBCLFVBQXFCLFFBQWdCO29CQUNqQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDMUIsTUFBTSxDQUFDLFFBQVEsQ0FBQztvQkFDcEIsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDOUIsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUVWLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN4QixDQUFDO2dCQVFPLG9DQUFhLEdBQXJCLFVBQXNCLFFBQWdCO29CQUNsQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDckMsQ0FBQztnQkFRTyxxQ0FBYyxHQUF0QixVQUF1QixHQUFRO29CQUMzQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7b0JBRWhCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQzFCLEdBQUcsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzFCLENBQUM7b0JBRUQsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BCLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO29CQUMxQixDQUFDO29CQUVELEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNaLE1BQU0sR0FBRyxZQUFZLENBQUMsYUFBYSxDQUFDO29CQUN4QyxDQUFDO29CQUVELE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQ2xCLENBQUM7Z0JBUU8saUNBQVUsR0FBbEIsVUFBbUIsS0FBYTtvQkFDNUIsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksRUFDakIsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQztvQkFFakMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDWCxLQUFLLFlBQVksQ0FBQyxVQUFVOzRCQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQzs0QkFDM0IsS0FBSyxDQUFDO3dCQUNWLEtBQUssWUFBWSxDQUFDLEtBQUs7NEJBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQzs0QkFDdEMsS0FBSyxDQUFDO3dCQUNWLEtBQUssWUFBWSxDQUFDLFlBQVk7NEJBQzFCLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQzs0QkFDNUMsS0FBSyxDQUFDO3dCQUNWLEtBQUssWUFBWSxDQUFDLEtBQUs7NEJBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7NEJBQzNELEtBQUssQ0FBQzt3QkFDVixLQUFLLFlBQVksQ0FBQyxLQUFLOzRCQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOzRCQUMzRCxLQUFLLENBQUM7d0JBQ1YsS0FBSyxZQUFZLENBQUMsS0FBSzs0QkFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzs0QkFDM0QsS0FBSyxDQUFDO3dCQUNWLEtBQUssWUFBWSxDQUFDLElBQUk7NEJBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQ25CLEtBQUssQ0FBQzt3QkFDVixLQUFLLFlBQVksQ0FBQyxJQUFJOzRCQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUNuQixLQUFLLENBQUM7d0JBQ1YsS0FBSyxZQUFZLENBQUMsT0FBTzs0QkFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDdEIsS0FBSyxDQUFDO3dCQUNWLEtBQUssWUFBWSxDQUFDLFFBQVE7NEJBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFvQixLQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7NEJBQ3hELEtBQUssQ0FBQzt3QkFDVixLQUFLLFlBQVksQ0FBQyxPQUFPOzRCQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUN0QixLQUFLLENBQUM7d0JBQ1YsS0FBSyxZQUFZLENBQUMsS0FBSzs0QkFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTs0QkFDMUQsS0FBSyxDQUFDO3dCQUNWLEtBQUssWUFBWSxDQUFDLFdBQVc7NEJBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7NEJBQy9ELEtBQUssQ0FBQztvQkFDZCxDQUFDO2dCQUNMLENBQUM7Z0JBT08saUNBQVUsR0FBbEI7b0JBQ0ksSUFBSSxHQUFHLENBQUM7b0JBRVIsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQy9DLENBQUM7Z0JBQ0wsQ0FBQztnQkFFTyx5Q0FBa0IsR0FBMUIsVUFBMkIsR0FBVztvQkFDbEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDeEUsTUFBTSxDQUFDLEdBQUcsQ0FBQztvQkFDZixDQUFDO29CQUVELE1BQU0sQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztnQkFDaEQsQ0FBQztnQkFFTSwrQkFBUSxHQUFmLFVBQWdCLEdBQVc7b0JBQ3ZCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN6RixDQUFDO2dCQUVNLCtCQUFRLEdBQWYsVUFBZ0IsR0FBVztvQkFDdkIsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDbkcsQ0FBQztnQkFFTSxrQ0FBVyxHQUFsQixVQUFtQixHQUFXO29CQUMxQixHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDL0ksQ0FBQztnQkFFTSxtQ0FBWSxHQUFuQixVQUFvQixHQUFXLEVBQUUsTUFBZ0I7b0JBQWpELGlCQWtCQztvQkFqQkcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLHlGQUF5RixDQUFDLENBQUM7d0JBQ3ZHLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2hCLENBQUM7b0JBQ0QsSUFBTSxRQUFRLEdBQVEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO29CQUU1RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBRTlKLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO3dCQUNoQixNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs0QkFDakIsS0FBSyxZQUFZLENBQUMsZ0JBQWdCLENBQUM7NEJBQ25DLEtBQUssWUFBWSxDQUFDLGNBQWM7Z0NBQzVCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztnQ0FDL0MsS0FBSyxDQUFDO3dCQUNkLENBQUM7b0JBRUwsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFFTSx3Q0FBaUIsR0FBeEIsVUFBeUIsR0FBVyxFQUFFLGdCQUF3QixFQUFFLEtBQWE7b0JBQ3pFLElBQU0sUUFBUSxHQUFRLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztvQkFFNUQsSUFBSSxVQUFVLEdBQVcsRUFBRSxDQUFDO29CQUM1QixJQUFNLE1BQU0sR0FBVyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDcEQsSUFBTSxJQUFJLEdBQVcsUUFBUSxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBRXRELEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLFVBQVUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUN2QyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3ZELENBQUM7b0JBQ0QsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsVUFBVSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUN6RixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3BHLENBQUM7Z0JBRU0sa0NBQVcsR0FBbEIsVUFBbUIsR0FBVztvQkFDMUIsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDekcsQ0FBQztnQkFFTSxnQ0FBUyxHQUFoQixVQUFpQixHQUFXLEVBQUUsVUFBZ0I7b0JBQzFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sVUFBVSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQ2pDLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUNqRCxDQUFDO29CQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3JDLE1BQU0sQ0FBQyxHQUFHLENBQUM7b0JBQ2YsQ0FBQztvQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsVUFBVSxHQUFHLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxVQUFVLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDbE4sQ0FBQztnQkFFTSxnQ0FBUyxHQUFoQixVQUFpQixHQUFXLEVBQUUsVUFBZ0I7b0JBQzFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sVUFBVSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQ2pDLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUNqRCxDQUFDO29CQUNELElBQU0sR0FBRyxHQUFXLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBRTNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBRXJDLE1BQU0sQ0FBQyxHQUFHLENBQUM7b0JBQ2YsQ0FBQztvQkFDRCxHQUFHLEdBQUcsR0FBRyxHQUFHLFVBQVUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFFdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pGLENBQUM7Z0JBRU0sZ0NBQVMsR0FBaEIsVUFBaUIsR0FBVyxFQUFFLFVBQWdCO29CQUMxQyxFQUFFLENBQUMsQ0FBQyxPQUFPLFVBQVUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUNqQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDakQsQ0FBQztvQkFDRCxJQUFNLEdBQUcsR0FBVyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUUzQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUVyQyxNQUFNLENBQUMsR0FBRyxDQUFDO29CQUNmLENBQUM7b0JBQ0QsR0FBRyxHQUFHLEdBQUcsR0FBRyxVQUFVLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3ZELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMzRixDQUFDO2dCQUVNLGdDQUFTLEdBQWhCLFVBQWlCLEdBQVcsRUFBRSxVQUFnQjtvQkFDMUMsRUFBRSxDQUFDLENBQUMsT0FBTyxVQUFVLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDakMsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ2pELENBQUM7b0JBQ0QsRUFBRSxDQUFDLENBQUMsVUFBVSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3BCLFVBQVUsR0FBRyxLQUFLLENBQUM7b0JBQ3ZCLENBQUM7b0JBQ0QsSUFBTSxHQUFHLEdBQVcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFFM0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFFckMsTUFBTSxDQUFDLEdBQUcsQ0FBQztvQkFDZixDQUFDO29CQUNELEdBQUcsR0FBRyxHQUFHLEdBQUcsVUFBVSxHQUFHLE1BQU0sQ0FBQztvQkFDaEMsSUFBTSxPQUFPLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQztvQkFDOUIsSUFBTSxRQUFRLEdBQUcsR0FBRyxHQUFHLFVBQVUsR0FBRyxRQUFRLENBQUM7b0JBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUM3RixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDL0YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxNQUFNLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBRXpGLEVBQUUsQ0FBQyxDQUFDLGVBQUssQ0FBQyxTQUFTLEtBQUssSUFBSSxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsZUFBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDeEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsZUFBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUNoRCxDQUFDO2dCQUNMLENBQUM7Z0JBRU0scUNBQWMsR0FBckIsVUFBc0IsR0FBVyxFQUFFLFVBQWdCO29CQUMvQyxFQUFFLENBQUMsQ0FBQyxPQUFPLFVBQVUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUNqQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDakQsQ0FBQztvQkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsVUFBVSxHQUFHLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsVUFBVSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3RNLENBQUM7Z0JBRU0sZ0NBQVMsR0FBaEIsVUFBaUIsR0FBVyxFQUFFLElBQVMsRUFBRSxhQUFzQjtvQkFDM0QsSUFBSSxJQUFJLEVBQUUsSUFBSSxDQUFDO29CQUNmLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDaEYsTUFBTSxDQUFDO29CQUNYLENBQUM7b0JBSUQsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsSUFBSSxHQUFHLE9BQU8sQ0FBQztvQkFDbkIsQ0FBQztvQkFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3pCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUMzQixDQUFDO29CQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDckQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDeEIsQ0FBQztvQkFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUMzQixJQUFJLEdBQUcsRUFBRSxDQUFDO3dCQUNWLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDOzRCQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzlILENBQUM7b0JBQ0wsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixJQUFJLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQztvQkFDcEksQ0FBQztvQkFFRCxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO3dCQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsQ0FBQztvQkFDdkYsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNwQyxDQUFDO29CQUVELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO3dCQUN0QixHQUFHLEVBQUUsR0FBRzt3QkFDUixhQUFhLEVBQUUsYUFBYTtxQkFDL0IsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRU0sZ0NBQVMsR0FBaEIsVUFBaUIsR0FBVyxFQUFFLElBQVM7b0JBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzVDLENBQUM7Z0JBRU0sc0NBQWUsR0FBdEIsVUFBdUIsR0FBVyxFQUFFLElBQVM7b0JBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzNDLENBQUM7Z0JBRU0saUNBQVUsR0FBakIsVUFBa0IsRUFBVSxFQUFFLFVBQTJCO29CQUEzQiwwQkFBMkIsR0FBM0Isa0JBQTJCO29CQUNyRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO29CQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDekUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBRW5FLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO29CQUN2QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztvQkFFMUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUMzQixNQUFNLENBQUM7b0JBQ1gsQ0FBQztvQkFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUM5RCxDQUFDO29CQUVELElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBRXZELEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7d0JBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ3BFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUN0RSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDOUUsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQzlELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ2hFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO29CQUN4RSxDQUFDO29CQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQ2xCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzt3QkFDdEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUM1QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzt3QkFDekIsTUFBTSxDQUFDO29CQUNYLENBQUM7b0JBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztvQkFDOUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztvQkFFeEUsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzt3QkFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDM0IsQ0FBQztnQkFDTCxDQUFDO2dCQUVNLGdDQUFTLEdBQWhCO29CQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO3dCQUN2QixNQUFNLENBQUM7b0JBQ1gsQ0FBQztvQkFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQzt3QkFDcEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztvQkFDbkQsQ0FBQztvQkFFRCxJQUFJLE1BQVcsRUFDWCxLQUFhLEVBQ2IsQ0FBUyxDQUFDO29CQUVkLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFDdkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBRTVCLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQzs0QkFDbEMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dDQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUMvQixDQUFDO3dCQUNMLENBQUM7b0JBQ0wsQ0FBQztvQkFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7b0JBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNwRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzlFLENBQUM7Z0JBR00sc0NBQWUsR0FBdEI7b0JBQ0ksSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7b0JBQzdFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDNUIsQ0FBQztnQkFHTSx1Q0FBZ0IsR0FBdkI7b0JBRUksTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztnQkFDN0MsQ0FBQztnQkFRTSw4QkFBTyxHQUFkLFVBQWUsSUFBWTtvQkFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO29CQUNwQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBRWxCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBYSxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDNUUsQ0FBQztnQkFXTSxrQ0FBVyxHQUFsQixVQUFtQixFQUFVLEVBQUUsVUFBMEIsRUFBRSxhQUE2QixFQUFFLFdBQTJCLEVBQUUsU0FBeUIsRUFBRSxTQUF5QjtvQkFBNUksMEJBQTBCLEdBQTFCLGlCQUEwQjtvQkFBRSw2QkFBNkIsR0FBN0Isb0JBQTZCO29CQUFFLDJCQUEyQixHQUEzQixrQkFBMkI7b0JBQUUseUJBQXlCLEdBQXpCLGdCQUF5QjtvQkFBRSx5QkFBeUIsR0FBekIsZ0JBQXlCO29CQUN2SyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUUxQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBRXBDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDakYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUMxQyxDQUFDO29CQUNELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBRXpCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzdDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7NEJBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7NEJBQzdGLFFBQVEsQ0FBQzt3QkFDYixDQUFDO3dCQUNELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDN0YsQ0FBQztvQkFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQztvQkFDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFhLENBQUMsNEJBQTRCLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQzFFLENBQUM7Z0JBV00saUNBQVUsR0FBakIsVUFBa0IsS0FBYSxFQUFFLFVBQTBCLEVBQUUsYUFBNkIsRUFBRSxXQUEyQixFQUFFLFNBQXlCLEVBQUUsU0FBeUI7b0JBQTVJLDBCQUEwQixHQUExQixpQkFBMEI7b0JBQUUsNkJBQTZCLEdBQTdCLG9CQUE2QjtvQkFBRSwyQkFBMkIsR0FBM0Isa0JBQTJCO29CQUFFLHlCQUF5QixHQUF6QixnQkFBeUI7b0JBQUUseUJBQXlCLEdBQXpCLGdCQUF5QjtvQkFDekssSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksRUFDakIsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQ2YsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7b0JBRzlCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLFVBQVUsR0FBRyxHQUFHLEdBQUcsc0NBQXNDLENBQUMsQ0FBQzt3QkFDdkYsTUFBTSxDQUFDO29CQUNYLENBQUM7b0JBQ0QsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDWCxLQUFLLFlBQVksQ0FBQyxLQUFLOzRCQUNuQixFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dDQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQ0FDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUNyQyxDQUFDOzRCQUNELEtBQUssQ0FBQzt3QkFDVixLQUFLLFlBQVksQ0FBQyxLQUFLOzRCQUNuQixFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dDQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQ3pCLENBQUM7NEJBQ0QsS0FBSyxDQUFDO3dCQUNWLEtBQUssWUFBWSxDQUFDLEtBQUs7NEJBQ25CLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0NBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7Z0NBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDcEMsQ0FBQzs0QkFDRCxLQUFLLENBQUM7d0JBQ1YsS0FBSyxZQUFZLENBQUMsSUFBSTs0QkFDbEIsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQ0FDWixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQ3BDLENBQUM7NEJBQ0QsS0FBSyxDQUFDO3dCQUNWLEtBQUssWUFBWSxDQUFDLElBQUk7NEJBQ2xCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0NBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUNwQyxDQUFDOzRCQUNELEtBQUssQ0FBQzt3QkFDVixLQUFLLFlBQVksQ0FBQyxPQUFPOzRCQUNyQixFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dDQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDdkMsQ0FBQzs0QkFDRCxLQUFLLENBQUM7d0JBQ1YsS0FBSyxZQUFZLENBQUMsS0FBSzs0QkFDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQ3BDLEtBQUssQ0FBQztvQkFDVixDQUFDO2dCQUNMLENBQUM7Z0JBRU8saUNBQVUsR0FBbEIsVUFBbUIsR0FBVztvQkFDMUIsSUFBSSxHQUFHLEdBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUMvQixFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDeEMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDdkIsQ0FBQztvQkFDRCxHQUFHLEdBQUcsSUFBSSxDQUFDO2dCQUNmLENBQUM7Z0JBRU0sc0NBQWUsR0FBdEIsVUFBdUIsRUFBVTtvQkFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxRQUFRLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBT00sc0NBQWUsR0FBdEIsVUFBdUIsRUFBVTtvQkFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLEtBQUssSUFBSSxDQUFDO2dCQUM3QyxDQUFDO2dCQUVNLHVDQUFnQixHQUF2QixVQUF3QixnQkFBd0IsRUFBRSxnQkFBc0I7b0JBQ3BFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDLENBQUM7Z0JBQ3pFLENBQUM7Z0JBR0Qsc0JBQVcsaUNBQU87eUJBQWxCLFVBQW1CLE9BQWU7d0JBRTlCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLEtBQUssU0FBUyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUM7NEJBQy9FLE9BQU8sSUFBSSxHQUFHLENBQUM7d0JBRW5CLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO29CQUM1QixDQUFDOzs7bUJBQUE7Z0JBRUQsc0JBQVcsK0JBQUs7eUJBQWhCLFVBQWlCLE9BQW9CO3dCQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7d0JBRTlCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQyxDQUFDO3dCQUN4RSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsSUFBSSxhQUFhLENBQUMsQ0FBQzt3QkFDM0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsSUFBSSx5QkFBeUIsQ0FBQyxDQUFDO3dCQUNyRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBSSxZQUFZLENBQUMsQ0FBQzt3QkFDeEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksY0FBYyxDQUFDLENBQUM7d0JBQzVFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFJLGNBQWMsQ0FBQyxDQUFDO3dCQUM5RSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsSUFBSSxjQUFjLENBQUMsQ0FBQzt3QkFDNUUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLElBQUkscUJBQXFCLENBQUMsQ0FBQzt3QkFDL0YsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsSUFBSSxxQkFBcUIsQ0FBQyxDQUFDO3dCQUNqRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsSUFBSSxvQkFBb0IsQ0FBQyxDQUFDO3dCQUNwRixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsSUFBSSxxQkFBcUIsQ0FBQyxDQUFDO29CQUM3RixDQUFDOzs7bUJBQUE7Z0JBRUQsc0JBQVcsb0NBQVU7eUJBYXJCO3dCQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUNyQixDQUFDO3lCQWZELFVBQXNCLEdBQVc7d0JBQzdCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDOzRCQUNwQixHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7d0JBQy9CLENBQUM7d0JBRUQsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7d0JBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO3dCQUV0QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLGFBQWEsQ0FBQzt3QkFDbEQsQ0FBQztvQkFDTCxDQUFDOzs7bUJBQUE7Z0JBU0Qsc0JBQVcsK0NBQXFCO3lCQU9oQzt3QkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDO29CQUN2QyxDQUFDO3lCQVRELFVBQWlDLEdBQVc7d0JBQ3hDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDOzRCQUNwQixHQUFHLEdBQUcsQ0FBQyxDQUFDO3dCQUNaLENBQUM7d0JBQ0QsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEdBQUcsQ0FBQztvQkFDdEMsQ0FBQzs7O21CQUFBO2dCQU1ELHNCQUFXLDBDQUFnQjt5QkFBM0IsVUFBNEIsT0FBd0I7d0JBQ2hELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDO29CQUMxQyxDQUFDOzs7bUJBQUE7Z0JBMXhCYSxrQkFBSyxHQUFXLE9BQU8sQ0FBQztnQkFDeEIsa0JBQUssR0FBVyxPQUFPLENBQUM7Z0JBQ3hCLHlCQUFZLEdBQVcsYUFBYSxDQUFDO2dCQUNyQyxrQkFBSyxHQUFXLE9BQU8sQ0FBQztnQkFDeEIsa0JBQUssR0FBVyxPQUFPLENBQUM7Z0JBQ3hCLGtCQUFLLEdBQVcsT0FBTyxDQUFDO2dCQUN4QixpQkFBSSxHQUFXLE1BQU0sQ0FBQztnQkFDdEIsaUJBQUksR0FBVyxNQUFNLENBQUM7Z0JBQ3RCLG9CQUFPLEdBQVcsU0FBUyxDQUFDO2dCQUM1QixxQkFBUSxHQUFXLFVBQVUsQ0FBQztnQkFDOUIsNkJBQWdCLEdBQVcsU0FBUyxDQUFDO2dCQUNyQywyQkFBYyxHQUFXLE9BQU8sQ0FBQztnQkFDakMsb0JBQU8sR0FBVyxTQUFTLENBQUM7Z0JBQzVCLGtCQUFLLEdBQVcsT0FBTyxDQUFDO2dCQUN4Qix3QkFBVyxHQUFXLFlBQVksQ0FBQztnQkFDbkMsdUJBQVUsR0FBVyxXQUFXLENBQUM7Z0JBR2pDLDBCQUFhLEdBQVcsS0FBSyxDQUFDO2dCQUM5QiwwQkFBYSxHQUFXLEtBQUssQ0FBQztnQkF3d0JoRCxtQkFBQztZQUFELENBbjFCQSxBQW0xQkMsSUFBQTtZQW4xQkQsd0NBbTFCQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7WUN4MUJEO2dCQVFJO29CQUxRLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO29CQUMzQixhQUFRLEdBQTZDLEVBQUUsQ0FBQztvQkFDeEQsWUFBTyxHQUFzQyxFQUFFLENBQUM7b0JBQ2hELGtCQUFhLEdBQTZCLEVBQUUsQ0FBQztvQkFHakQsSUFBSSxDQUFDLElBQUksR0FBRywwQkFBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQztnQkFDL0MsQ0FBQztnQkFHTyxnQ0FBUyxHQUFqQixVQUFrQixHQUFXLEVBQUUsYUFBOEI7b0JBQTlCLDZCQUE4QixHQUE5QixxQkFBOEI7b0JBQ3pELEVBQUUsQ0FBQyxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDdkUsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDekQsQ0FBQztnQkFDTCxDQUFDO2dCQUVPLHdDQUFpQixHQUF6QixVQUEwQixHQUFXLEVBQUUsV0FBK0I7b0JBQ2xFLEdBQUcsQ0FBQyxDQUFDLElBQUksUUFBUSxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUN0QyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUM7b0JBQ3ZDLENBQUM7b0JBQ0QsTUFBTSxDQUFDLFdBQVcsQ0FBQztnQkFDdkIsQ0FBQztnQkFFTyxxQ0FBYyxHQUF0QixVQUF1QixLQUFtQjtvQkFDdEMsS0FBSyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7b0JBQzNCLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ2pCLENBQUM7Z0JBRU8sNENBQXFCLEdBQTdCLFVBQThCLE1BQWM7b0JBQ3hDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUNwRCxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDdEMsQ0FBQztvQkFDRCxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDNUIsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDOzRCQUMzRCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQzs0QkFDakMsTUFBTSxDQUFDLEdBQUcsQ0FBQzt3QkFDZixDQUFDO29CQUNMLENBQUM7b0JBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDakIsQ0FBQztnQkFFTyx3Q0FBaUIsR0FBekIsVUFBMEIsR0FBVyxFQUFFLE1BQWMsRUFBRSxNQUFZLEVBQUUsSUFBcUIsRUFBRSxZQUE0QjtvQkFBbkQsb0JBQXFCLEdBQXJCLFlBQXFCO29CQUFFLDRCQUE0QixHQUE1QixtQkFBNEI7b0JBQ3BILEVBQUUsQ0FBQyxDQUFDLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQ2hDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7NEJBQzdCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDdkQsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzRCQUN0RCxDQUFDOzRCQUFDLElBQUksQ0FBQyxDQUFDO2dDQUNKLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7NEJBQ2hDLENBQUM7d0JBQ0wsQ0FBQztvQkFDTCxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO29CQUNqQyxDQUFDO29CQUVELElBQUksR0FBRyxJQUFJLElBQUksS0FBSyxDQUFDO29CQUNyQixZQUFZLEdBQUcsWUFBWSxLQUFLLEtBQUssR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO29CQUVyRCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUNuRCxDQUFDO2dCQUVPLHdDQUFpQixHQUF6QixVQUEwQixHQUFXLEVBQUUsTUFBYztvQkFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFdBQVcsSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQzt3QkFDcEYsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDakIsQ0FBQztvQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzNDLENBQUM7Z0JBRU8saUNBQVUsR0FBbEIsVUFBbUIsS0FBbUI7b0JBQ2xDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3hCLENBQUM7Z0JBUU0sK0JBQVEsR0FBZixVQUFnQixHQUFXLEVBQUUsYUFBOEI7b0JBQTlCLDZCQUE4QixHQUE5QixxQkFBOEI7b0JBQ3ZELEVBQUUsQ0FBQyxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDcEMsQ0FBQztvQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztnQkFPTSwrQkFBUSxHQUFmLFVBQWdCLEdBQUc7b0JBQ2YsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM3QixDQUFDO29CQUNELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7b0JBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QixDQUFDO2dCQU9NLHFDQUFjLEdBQXJCLFVBQXNCLEdBQVc7b0JBQzdCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDOUIsQ0FBQztvQkFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUF1QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDbkUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzlCLENBQUM7Z0JBVU0sZ0NBQVMsR0FBaEIsVUFBaUIsTUFBYyxFQUFFLE1BQWUsRUFBRSxJQUFxQixFQUFFLFlBQTRCO29CQUFuRCxvQkFBcUIsR0FBckIsWUFBcUI7b0JBQUUsNEJBQTRCLEdBQTVCLG1CQUE0QjtvQkFDakcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztvQkFDckUsQ0FBQztvQkFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDOUQsQ0FBQztnQkFVTSx1Q0FBZ0IsR0FBdkIsVUFBd0IsS0FBYSxFQUFFLE1BQWMsRUFBRSxNQUFlLEVBQUUsSUFBcUIsRUFBRSxZQUE0QjtvQkFBbkQsb0JBQXFCLEdBQXJCLFlBQXFCO29CQUFFLDRCQUE0QixHQUE1QixtQkFBNEI7b0JBQ3ZILEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO29CQUNuRixDQUFDO29CQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUM1RSxDQUFDO2dCQVVNLGdDQUFTLEdBQWhCLFVBQWlCLEdBQVcsRUFBRSxNQUFlLEVBQUUsSUFBcUIsRUFBRSxZQUE0QjtvQkFBbkQsb0JBQXFCLEdBQXJCLFlBQXFCO29CQUFFLDRCQUE0QixHQUE1QixtQkFBNEI7b0JBQzlGLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUMzQyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNoQixDQUFDO29CQUNELE1BQU0sR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7b0JBRXRFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0JBQ3JFLENBQUM7Z0JBR00sK0JBQVEsR0FBZixVQUFnQixHQUFXLEVBQUUsTUFBZSxFQUFFLElBQXFCLEVBQUUsWUFBNEI7b0JBQW5ELG9CQUFxQixHQUFyQixZQUFxQjtvQkFBRSw0QkFBNEIsR0FBNUIsbUJBQTRCO29CQUM3RixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQzt3QkFDM0MsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDaEIsQ0FBQztvQkFDRCxNQUFNLEdBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO29CQUV0RSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0IsQ0FBQztnQkFVTSx1Q0FBZ0IsR0FBdkIsVUFBd0IsTUFBYyxFQUFFLE1BQWUsRUFBRSxJQUFxQixFQUFFLFlBQTRCO29CQUFuRCxvQkFBcUIsR0FBckIsWUFBcUI7b0JBQUUsNEJBQTRCLEdBQTVCLG1CQUE0QjtvQkFDeEcsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUUvQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLENBQUMsQ0FBQzt3QkFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDaEIsQ0FBQztvQkFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFTLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDbkYsQ0FBQztnQkFFTSx1Q0FBZ0IsR0FBdkIsVUFBd0IsS0FBYSxFQUFFLEdBQVcsRUFBRSxNQUFlLEVBQUUsSUFBcUIsRUFBRSxZQUE0QjtvQkFBbkQsb0JBQXFCLEdBQXJCLFlBQXFCO29CQUFFLDRCQUE0QixHQUE1QixtQkFBNEI7b0JBQ3BILElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO29CQUN4RixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNoQixDQUFDO2dCQUVNLDhDQUF1QixHQUE5QixVQUErQixLQUFhLEVBQUUsTUFBYyxFQUFFLE1BQWUsRUFBRSxJQUFxQixFQUFFLFlBQTRCO29CQUFuRCxvQkFBcUIsR0FBckIsWUFBcUI7b0JBQUUsNEJBQTRCLEdBQTVCLG1CQUE0QjtvQkFDOUgsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztvQkFDbEcsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDaEIsQ0FBQztnQkFPTSxnQ0FBUyxHQUFoQixVQUFpQixNQUFjO29CQUMzQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN6QyxDQUFDO29CQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQU1NLGdDQUFTLEdBQWhCLFVBQWlCLEdBQVc7b0JBQ3hCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxXQUFXLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQ2xGLE1BQU0sQ0FBQztvQkFDWCxDQUFDO29CQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNwQyxDQUFDO2dCQU1NLHVDQUFnQixHQUF2QixVQUF3QixNQUFjO29CQUNsQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzdDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxDQUFDO3dCQUN4QyxNQUFNLENBQUM7b0JBQ1gsQ0FBQztvQkFDRCxJQUFJLENBQUMsaUJBQWlCLENBQVMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO2dCQU9NLGtDQUFXLEdBQWxCLFVBQW1CLEdBQUc7b0JBQ2xCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxXQUFXLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQ2xGLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ2pCLENBQUM7b0JBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7d0JBQzVCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDN0IsQ0FBQztnQkFDTCxDQUFDO2dCQU9NLG1DQUFZLEdBQW5CLFVBQW9CLEdBQVc7b0JBQzNCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxXQUFXLElBQUksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQ3BGLE1BQU0sQ0FBQztvQkFDWCxDQUFDO29CQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQzFCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztnQkFFTSwyQkFBSSxHQUFYLFVBQVksS0FBbUIsRUFBRSxNQUFjLEVBQUUsSUFBWSxFQUFFLElBQXFCO29CQUFyQixvQkFBcUIsR0FBckIsWUFBcUI7b0JBQ2hGLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO3dCQUNQLE1BQU0sQ0FBQztvQkFFWCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUM7d0JBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBRTdDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQzt3QkFDNUMsTUFBTSxFQUFFLE1BQU07cUJBQ2pCLEVBQUUsSUFBSSxJQUFJLEdBQUcsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFFM0MsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQzt3QkFDZCxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsY0FBYyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUVyRixNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDbkMsQ0FBQztnQkFNRCxzQkFBVyx1Q0FBYTt5QkFJeEI7d0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7b0JBQy9CLENBQUM7eUJBTkQsVUFBeUIsR0FBVzt3QkFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUM7b0JBQzlCLENBQUM7OzttQkFBQTtnQkFLTCxtQkFBQztZQUFELENBMVNBLEFBMFNDLElBQUE7WUExU0Qsd0NBMFNDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ3hTRDtnQkFBMEIsd0JBQVc7Z0JBMEJqQyxjQUFZLE1BQW1CO29CQUMzQixrQkFBTSxNQUFNLENBQUMsQ0FBQztvQkFYWCx5QkFBb0IsR0FBa0IsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQzFELHdCQUFtQixHQUFrQixJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFXaEUsQ0FBQztnQkFFTSxtQkFBSSxHQUFYO29CQUNJLGdCQUFLLENBQUMsSUFBSSxXQUFFLENBQUM7b0JBRWIsSUFBSSxDQUFDLEdBQUcsR0FBRywwQkFBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUdyQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksc0JBQWUsRUFBRSxDQUFDO29CQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksd0JBQWlCLEVBQUUsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHFCQUFjLEVBQUUsQ0FBQztvQkFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHVCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBRzdELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO29CQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksd0JBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDakIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2hELENBQUM7Z0JBRU0seUJBQVUsR0FBakI7b0JBQUEsaUJBUUM7b0JBUEcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFVBQVU7NEJBQ2xDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dDQUNsRCxLQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7NEJBQy9DLENBQUM7d0JBQ0wsQ0FBQyxDQUFDLENBQUM7b0JBQ1AsQ0FBQztnQkFDTCxDQUFDO2dCQUlNLHFDQUFzQixHQUE3QixVQUE4QixRQUFzQjtvQkFDaEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckQsQ0FBQztnQkFFUyx3QkFBUyxHQUFuQjtvQkFFSSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3hFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBR2xELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztvQkFHdEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO29CQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7b0JBR2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ2xFLENBQUM7Z0JBRVMsZ0NBQWlCLEdBQTNCO29CQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzt3QkFDcEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDdEQsQ0FBQztnQkFDTCxDQUFDO2dCQUVTLHVCQUFRLEdBQWxCO29CQUNJLDBCQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsZ0JBQWdCLENBQUMscUJBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUNqRixDQUFDO2dCQUVTLHdCQUFTLEdBQW5CO29CQUNJLDBCQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsZ0JBQWdCLENBQUMscUJBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUNqRixDQUFDO2dCQUdNLGtDQUFtQixHQUExQixVQUEyQixFQUFPO29CQUM5QixFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDdkMsRUFBRSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7d0JBQ3JCLEVBQUUsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO29CQUM1QixDQUFDO29CQUNELEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3pCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs0QkFDMUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDN0MsQ0FBQztvQkFDTCxDQUFDO2dCQUNMLENBQUM7Z0JBRU0saUNBQWtCLEdBQXpCLFVBQTBCLEVBQU87b0JBQzdCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLFlBQVksS0FBSyxLQUFLLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7d0JBQ3pELEVBQUUsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO3dCQUN0QixFQUFFLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztvQkFDM0IsQ0FBQztvQkFDRCxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN6QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7NEJBQzFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzVDLENBQUM7b0JBQ0wsQ0FBQztnQkFDTCxDQUFDO2dCQUVNLDJCQUFZLEdBQW5CLFVBQW9CLEtBQW1CO29CQUNuQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7d0JBQzdCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsWUFBWSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs0QkFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ2pDLENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ0osTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDeEMsQ0FBQztvQkFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ2IsQ0FBQztnQkFFTSwwQkFBVyxHQUFsQixVQUFtQixLQUFtQjtvQkFDbEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO3dCQUM3QixFQUFFLENBQUMsQ0FBQyxFQUFFLFlBQVksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7NEJBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUNoQyxDQUFDO3dCQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ3ZDLENBQUM7b0JBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNiLENBQUM7Z0JBRU0sK0JBQWdCLEdBQXZCO29CQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUNsQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3pDLENBQUM7Z0JBRU0sOEJBQWUsR0FBdEI7b0JBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ2pDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDeEMsQ0FBQztnQkFTTSwwQkFBVyxHQUFsQixVQUFtQixPQUFlO29CQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNuRCxDQUFDO2dCQVNELHNCQUFXLDJCQUFTO3lCQUFwQjt3QkFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO3dCQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztvQkFDcEIsQ0FBQzs7O21CQUFBO2dCQVFELHNCQUFXLGlDQUFlO3lCQUExQjt3QkFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO3dCQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztvQkFDcEIsQ0FBQzs7O21CQUFBO2dCQUdELHNCQUFXLHlCQUFPO3lCQUFsQjt3QkFFSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztvQkFDcEIsQ0FBQzs7O21CQUFBO2dCQUVELHNCQUFXLDRCQUFVO3lCQUFyQjt3QkFFSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO3dCQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztvQkFDcEIsQ0FBQzs7O21CQUFBO2dCQUVELHNCQUFXLDRCQUFVO3lCQUFyQjt3QkFFSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO3dCQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztvQkFDcEIsQ0FBQzs7O21CQUFBO2dCQUNMLFdBQUM7WUFBRCxDQTlNQSxBQThNQyxDQTlNeUIsTUFBTSxDQUFDLElBQUksR0E4TXBDO1lBOU1ELHdCQThNQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7WUM5TUQ7Z0JBQXVDLHFDQUF3QjtnQkFBL0Q7b0JBQXVDLDhCQUF3QjtvQkFFakQsaUJBQVksR0FBaUIsSUFBSSxDQUFDO29CQUdsQyxrQkFBYSxHQUFpQixJQUFJLENBQUMsS0FBSyxDQUFDO2dCQXNVdkQsQ0FBQztnQkE1VFUsb0NBQVEsR0FBZixVQUFnQixNQUFNO29CQUNsQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztvQkFDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzdCLENBQUM7Z0JBaUJNLGlDQUFLLEdBQVosVUFBYSxDQUFhLEVBQUUsQ0FBYSxFQUFFLEdBQXNFLEVBQUUsS0FBdUIsRUFBRSxLQUFvQjtvQkFBbkosaUJBQWEsR0FBYixLQUFhO29CQUFFLGlCQUFhLEdBQWIsS0FBYTtvQkFDckMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7b0JBQUMsQ0FBQztvQkFDdEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7b0JBQ3hCLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3BFLENBQUM7Z0JBaUJNLGtDQUFNLEdBQWIsVUFBYyxDQUFhLEVBQUUsQ0FBYSxFQUFFLEdBQTJCLEVBQUUsS0FBdUIsRUFBRSxLQUFvQjtvQkFBeEcsaUJBQWEsR0FBYixLQUFhO29CQUFFLGlCQUFhLEdBQWIsS0FBYTtvQkFDdEMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7b0JBQUMsQ0FBQztvQkFDdEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7b0JBRXhCLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUMxQyxDQUFDO2dCQXVCTSxvQ0FBUSxHQUFmLFVBQWdCLENBQWEsRUFBRSxDQUFhLEVBQUUsR0FBWSxFQUFFLElBQVUsRUFBRSxLQUFvQjtvQkFBNUUsaUJBQWEsR0FBYixLQUFhO29CQUFFLGlCQUFhLEdBQWIsS0FBYTtvQkFDeEMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7b0JBQUMsQ0FBQztvQkFDdEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7b0JBRXhCLElBQUksR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBRTdELEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBRWYsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDZixDQUFDO2dCQWFNLGlDQUFLLEdBQVosVUFBYSxNQUFZLEVBQUUsSUFBc0IsRUFBRSxVQUEyQixFQUFFLFVBQTJCLEVBQUUsZUFBMkI7b0JBQTdHLG9CQUFzQixHQUF0QixjQUFzQjtvQkFBRSwwQkFBMkIsR0FBM0Isa0JBQTJCO29CQUFFLDBCQUEyQixHQUEzQixrQkFBMkI7b0JBQUUsK0JBQTJCLEdBQTNCLG1CQUEyQjtvQkFDcEksRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxVQUFVLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztvQkFBQyxDQUFDO29CQUMvRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztvQkFDeEIsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxlQUFlLENBQUMsQ0FBQztnQkFDOUYsQ0FBQztnQkFlTSx3Q0FBWSxHQUFuQixVQUFvQixlQUEyQixFQUFFLE1BQVksRUFBRSxJQUFzQixFQUFFLFVBQTJCO29CQUE5RiwrQkFBMkIsR0FBM0IsbUJBQTJCO29CQUFnQixvQkFBc0IsR0FBdEIsY0FBc0I7b0JBQUUsMEJBQTJCLEdBQTNCLGtCQUEyQjtvQkFDOUcsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7b0JBQUMsQ0FBQztvQkFDeEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7b0JBQ3hCLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsZUFBZSxDQUFDLENBQUM7Z0JBQ3hGLENBQUM7Z0JBYU0sdUNBQVcsR0FBbEIsVUFBbUIsTUFBWSxFQUFFLElBQTRCLEVBQUUsVUFBMkI7b0JBQXpELG9CQUE0QixHQUE1QixvQkFBNEI7b0JBQUUsMEJBQTJCLEdBQTNCLGtCQUEyQjtvQkFDdEYsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUE7b0JBQUMsQ0FBQztvQkFDdkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7b0JBQ3hCLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUN2RSxDQUFDO2dCQWVNLHNDQUFVLEdBQWpCLFVBQWtCLENBQWEsRUFBRSxDQUFhLEVBQUUsS0FBaUIsRUFBRSxNQUFrQixFQUFFLEdBQVksRUFBRSxLQUF1QixFQUFFLEtBQW9CO29CQUFoSSxpQkFBYSxHQUFiLEtBQWE7b0JBQUUsaUJBQWEsR0FBYixLQUFhO29CQUFFLHFCQUFpQixHQUFqQixTQUFpQjtvQkFBRSxzQkFBa0IsR0FBbEIsVUFBa0I7b0JBQ2pGLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUFDLENBQUM7b0JBQ3RELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3hGLENBQUM7Z0JBZ0JNLGdDQUFJLEdBQVgsVUFBWSxDQUFhLEVBQUUsQ0FBYSxFQUFFLEdBQVksRUFBRSxLQUF1QixFQUFFLE1BQXVCLEVBQUUsS0FBb0I7b0JBQWxILGlCQUFhLEdBQWIsS0FBYTtvQkFBRSxpQkFBYSxHQUFiLEtBQWE7b0JBQ3BDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUFDLENBQUM7b0JBQ3RELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDM0UsQ0FBQztnQkFhTSxnQ0FBSSxHQUFYLFVBQVksQ0FBYSxFQUFFLENBQWEsRUFBRSxJQUFpQixFQUFFLEtBQThCLEVBQUUsS0FBb0I7b0JBQXJHLGlCQUFhLEdBQWIsS0FBYTtvQkFBRSxpQkFBYSxHQUFiLEtBQWE7b0JBQUUsb0JBQWlCLEdBQWpCLFNBQWlCO29CQUN2RCxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztvQkFBQyxDQUFDO29CQUN0RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztvQkFDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDcEUsQ0FBQztnQkFrQk0sa0NBQU0sR0FBYixVQUFjLENBQWEsRUFBRSxDQUFhLEVBQUUsR0FBWSxFQUFFLFFBQW1CLEVBQUUsZUFBd0IsRUFBRSxTQUEyQixFQUFFLFFBQTBCLEVBQUUsU0FBMkIsRUFBRSxPQUF5QixFQUFFLEtBQW9CO29CQUFoTyxpQkFBYSxHQUFiLEtBQWE7b0JBQUUsaUJBQWEsR0FBYixLQUFhO29CQUN0QyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztvQkFBQyxDQUFDO29CQUN0RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztvQkFDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNsSSxDQUFDO2dCQVdNLG9DQUFRLEdBQWYsVUFBZ0IsQ0FBYSxFQUFFLENBQWEsRUFBRSxLQUFvQjtvQkFBbEQsaUJBQWEsR0FBYixLQUFhO29CQUFFLGlCQUFhLEdBQWIsS0FBYTtvQkFDeEMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7b0JBQUMsQ0FBQztvQkFNaEQsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNELENBQUM7Z0JBOEJNLHNDQUFVLEdBQWpCLFVBQWtCLENBQVUsRUFBRSxDQUFVLEVBQUUsSUFBYSxFQUFFLElBQWlCLEVBQUUsSUFBaUIsRUFBRSxLQUFvQjtvQkFBMUQsb0JBQWlCLEdBQWpCLFNBQWlCO29CQUFFLG9CQUFpQixHQUFqQixTQUFpQjtvQkFDekYsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7b0JBQUMsQ0FBQztvQkFDdEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7b0JBQ3hCLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMvRSxDQUFDO2dCQUdNLG1DQUFPLEdBQWQsVUFBZSxDQUFVLEVBQUUsQ0FBVSxFQUFFLEdBQXNFLEVBQUUsS0FBdUIsRUFBRSxJQUFhLEVBQUUsVUFBd0IsRUFBRSxLQUFvQjtvQkFDak0sRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7b0JBQUMsQ0FBQztvQkFDdEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7b0JBQ3hCLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksZ0JBQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JFLENBQUM7Z0JBRU0sa0NBQU0sR0FBYixVQUFjLENBQVUsRUFBRSxDQUFVLEVBQUUsSUFBYSxFQUFFLFVBQW9CLEVBQUUsVUFBd0IsRUFBRSxVQUFvQixFQUFFLGVBQXdCLEVBQUUsS0FBb0I7b0JBQ3JLLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksVUFBVSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQzdDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO3dCQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzt3QkFDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxlQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQztvQkFDakcsQ0FBQztvQkFFRCxNQUFNLENBQUMsSUFBSSxlQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsZUFBZSxDQUFDLENBQUM7Z0JBQ3RGLENBQUM7Z0JBRU0saUNBQUssR0FBWixVQUFhLENBQVMsRUFBRSxDQUFTLEVBQUUsSUFBYSxFQUFFLFFBQWlCLEVBQUUsUUFBaUIsRUFBRSxTQUFrQixFQUFFLFNBQWtCLEVBQUUsUUFBa0IsRUFBRSxLQUFjLEVBQUUsV0FBb0IsRUFBRSxRQUFpQixFQUFFLEtBQW9CO29CQUM3TixFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztvQkFBQyxDQUFDO29CQUN0RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztvQkFDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxjQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQzdILENBQUM7Z0JBRU0sdUNBQVcsR0FBbEIsVUFBbUIsQ0FBWSxFQUFFLENBQVksRUFBRSxJQUFrQixFQUFFLElBQWdCLEVBQUUsSUFBZ0IsRUFBRSxLQUFxQixFQUFFLEtBQXVCLEVBQUUsU0FBd0IsRUFBRSxXQUEwQixFQUFFLFNBQXlCLEVBQUUsS0FBb0I7b0JBQXpPLGlCQUFZLEdBQVosS0FBWTtvQkFBRSxpQkFBWSxHQUFaLEtBQVk7b0JBQUUsb0JBQWtCLEdBQWxCLFdBQWtCO29CQUFFLG9CQUFnQixHQUFoQixTQUFnQjtvQkFBRSxvQkFBZ0IsR0FBaEIsU0FBZ0I7b0JBQUUscUJBQXFCLEdBQXJCLGNBQXFCO29CQUFFLHFCQUF1QixHQUF2QixnQkFBdUI7b0JBQUUseUJBQXdCLEdBQXhCLGdCQUF3QjtvQkFBRSwyQkFBMEIsR0FBMUIsa0JBQTBCO29CQUFFLHlCQUF5QixHQUF6QixpQkFBeUI7b0JBQ2xPLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUFDLENBQUM7b0JBQ3RELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLG9CQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDOUcsQ0FBQztnQkFFTSxpQ0FBSyxHQUFaLFVBQWEsU0FBc0IsRUFBRSxDQUFhLEVBQUUsQ0FBYSxFQUFFLEtBQW9CO29CQUExRSx5QkFBc0IsR0FBdEIsY0FBc0I7b0JBQUUsaUJBQWEsR0FBYixLQUFhO29CQUFFLGlCQUFhLEdBQWIsS0FBYTtvQkFDN0QsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7b0JBQUMsQ0FBQztvQkFDdEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7b0JBQ3hCLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksZUFBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakQsQ0FBQztnQkFFTSwyQ0FBZSxHQUF0QixVQUF1QixLQUFtQjtvQkFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyRUFBMkUsQ0FBQyxDQUFDO29CQUN6RixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztnQkFDL0IsQ0FBQztnQkFFRCxzQkFBVywyQ0FBWTt5QkFBdkI7d0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7b0JBQzlCLENBQUM7OzttQkFBQTtnQkFFRCxzQkFBVywwQ0FBVzt5QkFJdEI7d0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQztvQkFDbkQsQ0FBQzt5QkFORCxVQUF1QixLQUFtQjt3QkFDdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7b0JBQzlCLENBQUM7OzttQkFBQTtnQkFLTCx3QkFBQztZQUFELENBM1VBLEFBMlVDLENBM1VzQyxNQUFNLENBQUMsaUJBQWlCLEdBMlU5RDtZQTNVRCxrREEyVUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7O1lDOVVEO2dCQUtJO29CQUZRLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztvQkFHMUIsSUFBSSxDQUFDLElBQUksR0FBRywwQkFBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQztnQkFDL0MsQ0FBQztnQkFHTyx3Q0FBYyxHQUF0QixVQUF1QixRQUF5QixFQUFFLE9BQWUsRUFBRSxRQUFrQixFQUFFLGVBQXVCO29CQUMxRyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQzVCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLFdBQVcsSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDM0UsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDdkIsQ0FBQztvQkFFRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxRQUFRLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQzt3QkFDdkQsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDbkMsQ0FBQztnQkFDTCxDQUFDO2dCQUdNLDZCQUFHLEdBQVYsVUFBVyxRQUF5QixFQUFFLE9BQWUsRUFBRSxRQUFnQixFQUFFLGdCQUEwQixFQUFFLHVCQUErQjtvQkFDaEksRUFBRSxDQUFDLENBQUMsT0FBTyxPQUFPLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQzt3QkFDakMsTUFBTSxJQUFJLEtBQUssQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO29CQUN6RSxDQUFDO29CQUVELEVBQUUsQ0FBQyxDQUFDLE9BQU8sUUFBUSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQ2xDLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7b0JBQ3JDLENBQUM7b0JBRUQsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksT0FBTyxnQkFBZ0IsS0FBSyxXQUFXLElBQUksT0FBTyx1QkFBdUIsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUNySCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQzt3QkFDL0MsTUFBTSxDQUFDO29CQUNYLENBQUM7b0JBRUQsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2pCLE9BQU8sUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDOzRCQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxnQkFBZ0IsS0FBSyxXQUFXLEdBQUcsSUFBSSxHQUFHLGdCQUFnQixFQUFFLE9BQU8sdUJBQXVCLEtBQUssV0FBVyxHQUFHLElBQUksR0FBRyx1QkFBdUIsQ0FBQyxDQUFDO3dCQUMvTCxNQUFNLENBQUM7b0JBQ1gsQ0FBQztvQkFFRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxnQkFBZ0IsS0FBSyxXQUFXLEdBQUcsSUFBSSxHQUFHLGdCQUFnQixFQUFFLE9BQU8sdUJBQXVCLEtBQUssV0FBVyxHQUFHLElBQUksR0FBRyx1QkFBdUIsQ0FBQyxDQUFDO29CQUN0USxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQy9CLENBQUM7Z0JBQ0wsc0JBQUM7WUFBRCxDQTdDQSxBQTZDQyxJQUFBO1lBN0NELDhDQTZDQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7WUM1Q0Q7Z0JBQTJCLHlCQUFZO2dCQUluQztvQkFDSSxpQkFBTyxDQUFDO29CQUpGLFdBQU0sR0FBbUIsRUFBRSxDQUFDO29CQUM1QixjQUFTLEdBQWEsSUFBSSxDQUFDO2dCQUlyQyxDQUFDO2dCQUVNLG9CQUFJLEdBQVg7Z0JBRUEsQ0FBQztnQkFFTSx1QkFBTyxHQUFkO29CQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7d0JBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDbkQsQ0FBQztnQkFFTSxzQkFBTSxHQUFiO29CQUNJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUN6RSxNQUFNLENBQUM7b0JBQ1gsQ0FBQztvQkFDRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO29CQUMzQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ3RCLENBQUM7Z0JBRU0sd0JBQVEsR0FBZixVQUFnQixjQUE4QixFQUFFLFdBQTJCO29CQUEzRCw4QkFBOEIsR0FBOUIscUJBQThCO29CQUFFLDJCQUEyQixHQUEzQixrQkFBMkI7b0JBQ3ZFLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7d0JBQ2pCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDMUIsQ0FBQztvQkFDRCxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUNkLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDdkIsQ0FBQztvQkFFRCxnQkFBSyxDQUFDLFFBQVEsV0FBRSxDQUFDO2dCQUNyQixDQUFDO2dCQUdNLGlDQUFpQixHQUF4QjtvQkFDSSxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUNkLENBQUM7Z0JBRU0sOEJBQWMsR0FBckIsY0FBZ0MsQ0FBQztnQkFFMUIsbUNBQW1CLEdBQTFCLGNBQXFDLENBQUM7Z0JBRS9CLDBCQUFVLEdBQWpCO29CQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN6RyxDQUFDO2dCQUVNLDZCQUFhLEdBQXBCO29CQUNJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQzFGLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDdEIsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7NEJBQzVFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDO3dCQUN6QyxDQUFDO29CQUNMLENBQUM7Z0JBQ0wsQ0FBQztnQkFFTSwwQkFBVSxHQUFqQixjQUE0QixDQUFDO2dCQUV0Qix3QkFBUSxHQUFmLFVBQWdCLEtBQW1CO29CQUMvQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO29CQUNyQixDQUFDO29CQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNqQixDQUFDO2dCQUVNLDJCQUFXLEdBQWxCO29CQUNJLElBQUksS0FBbUIsQ0FBQztvQkFDeEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDZixNQUFNLENBQUM7b0JBQ1gsQ0FBQztvQkFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO3dCQUM1QixLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFDMUIsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLEtBQUssV0FBVyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksT0FBTyxLQUFLLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7NEJBQ3JGLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLE1BQU0sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dDQUN0QyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDOzRCQUM3QixDQUFDOzRCQUNELEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDakIsQ0FBQztvQkFDTCxDQUFDO2dCQUNMLENBQUM7Z0JBRU0sOEJBQWMsR0FBckI7b0JBQ0ksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO3dCQUNoQixNQUFNLENBQUM7b0JBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQzFCLENBQUM7Z0JBR0Qsc0JBQVcsNEJBQVM7eUJBQXBCO3dCQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2hCLENBQUM7OzttQkFBQTtnQkFFRCxzQkFBVyxnQ0FBYTt5QkFBeEI7d0JBQ0ksTUFBTSxDQUFDLEVBQUUsQ0FBQztvQkFDZCxDQUFDOzs7bUJBQUE7Z0JBRUQsc0JBQVcsc0JBQUc7eUJBQWQ7d0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO29CQUMvQixDQUFDOzs7bUJBQUE7Z0JBRUQsc0JBQVcsc0JBQUc7eUJBQWQ7d0JBQ0ksTUFBTSxDQUFDLDBCQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ3JDLENBQUM7OzttQkFBQTtnQkFFRCxzQkFBVyx1QkFBSTt5QkFBZjt3QkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7b0JBQ3pCLENBQUM7OzttQkFBQTtnQkFDTCxZQUFDO1lBQUQsQ0FwSEEsQUFvSEMsQ0FwSDBCLE1BQU0sQ0FBQyxLQUFLLEdBb0h0QztZQXBIRCwwQkFvSEMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7O1lDdEhEO2dCQUlJO29CQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsMEJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0JBQzNDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDakIsQ0FBQztnQkFHTyw4QkFBSyxHQUFiO29CQUNJLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztvQkFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDeEUsQ0FBQztnQkFFTyxvREFBMkIsR0FBbkM7b0JBQ0ksSUFBSSxDQUFDO3dCQUNELE1BQU0sQ0FBQyxjQUFjLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxJQUFJLENBQUM7b0JBQ3ZFLENBQUU7b0JBQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDVCxNQUFNLENBQUMsS0FBSyxDQUFDO29CQUNqQixDQUFDO2dCQUNMLENBQUM7Z0JBRU8sbUNBQVUsR0FBbEIsVUFBbUIsSUFBcUI7b0JBQ3BDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2hCLENBQUM7b0JBRUQsSUFBSSxRQUFRLENBQUM7b0JBRWIsSUFBSSxDQUFDO3dCQUNELFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNwQyxDQUFFO29CQUFBLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUM7d0JBQ3JELE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2hCLENBQUM7b0JBRUQsTUFBTSxDQUFDLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQztnQkFTTSw0Q0FBbUIsR0FBMUIsVUFBMkIsR0FBVyxFQUFFLE1BQXNCO29CQUF0QixzQkFBc0IsR0FBdEIsYUFBc0I7b0JBQzFELElBQUksSUFBSSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3JDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2hCLENBQUM7b0JBRUQsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ25CLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM1QixDQUFDO29CQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7Z0JBUU0sMkNBQWtCLEdBQXpCLFVBQTBCLEdBQVcsRUFBRSxLQUFzQjtvQkFDekQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO3dCQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7d0JBQ2hDLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ2pCLENBQUM7b0JBQ0QsSUFBSSxDQUFDO3dCQUNELFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDdEQsQ0FBRTtvQkFBQSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztvQkFDaEQsQ0FBQztnQkFDTCxDQUFDO2dCQU9NLDhDQUFxQixHQUE1QixVQUE2QixHQUFXO29CQUNwQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7d0JBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQzt3QkFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDakIsQ0FBQztvQkFFRCxJQUFJLENBQUM7d0JBQ0QsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDakMsQ0FBRTtvQkFBQSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsQ0FBQztnQkFDTCxxQkFBQztZQUFELENBN0ZBLEFBNkZDLElBQUE7WUE3RkQsNENBNkZDLENBQUE7Ozs7Ozs7Ozs7Ozs7OztZQzNGRDtnQkFZSTtvQkFWTyw0QkFBdUIsR0FBa0IsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQzdELDJCQUFzQixHQUFrQixJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFFM0QsZ0JBQVcsR0FBZ0IsSUFBSSxDQUFDO29CQUNoQyxpQkFBWSxHQUFXLEVBQUUsQ0FBQztvQkFDMUIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7b0JBRXpCLGVBQVUsR0FBVyxJQUFJLENBQUM7b0JBQzFCLGFBQVEsR0FBVyxJQUFJLENBQUM7b0JBRzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsMEJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQy9DLENBQUM7Z0JBRU8sZ0NBQUksR0FBWixVQUFhLEVBQVUsRUFBRSxVQUE4QixFQUFFLGNBQStCLEVBQUUsU0FBNkI7b0JBQ25ILElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEdBQUc7d0JBQ3BCLFVBQVUsRUFBRSxVQUFVO3dCQUN0QixjQUFjLEVBQUUsY0FBYzt3QkFDOUIsU0FBUyxFQUFFLFNBQVM7cUJBQ3ZCLENBQUM7Z0JBQ04sQ0FBQztnQkFFTywwQ0FBYyxHQUF0QixVQUF1QixPQUFlLEVBQUUsUUFBZ0I7b0JBQ3BELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQztvQkFDN0QsRUFBRSxDQUFDLENBQUMsT0FBTyxVQUFVLEtBQUssV0FBVyxDQUFDO3dCQUNsQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFFMUMsTUFBTSxDQUFDLE9BQU8sVUFBVSxLQUFLLFdBQVcsR0FBRyxJQUFJLEdBQUcsVUFBVSxDQUFDO2dCQUNqRSxDQUFDO2dCQUVPLGlEQUFxQixHQUE3QjtvQkFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3ZFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzt3QkFDbEIsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFFakIsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxTQUFTLEtBQUssVUFBVSxDQUFDO3dCQUNoRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUVwSCxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLFlBQVksS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUN0SCxDQUFDO29CQUVELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ25GLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFFdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN6QyxDQUFDO2dCQUVPLGtEQUFzQixHQUE5QjtvQkFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztvQkFDeEIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUM1QyxDQUFDO2dCQUVPLDRDQUFnQixHQUF4QjtvQkFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3ZFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzt3QkFDbEIsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFFakIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFFckgsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxZQUFZLEtBQUssVUFBVSxDQUFDO3dCQUNuRSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDdkQsQ0FBQztnQkFFTyw0Q0FBZ0IsR0FBeEI7b0JBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDM0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDMUYsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDbEYsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDL0csSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFFckgsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQzVCLENBQUM7Z0JBNEJNLCtCQUFHLEdBQVYsVUFBVyxTQUFpQixFQUFFLE9BQWlDLEVBQUUsVUFBK0IsRUFBRSxjQUFnQyxFQUFFLFNBQThCO29CQUM5SixJQUFJLElBQUksQ0FBQztvQkFDVCxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUN0QixJQUFJLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDOzRCQUNuQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztnQ0FDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3ZELElBQUk7Z0NBQ0EsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzNELENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ0osSUFBSSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDM0UsQ0FBQztvQkFDTCxDQUFDO29CQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsT0FBTyxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZGLENBQUM7Z0JBRU0sa0NBQU0sR0FBYixVQUFjLE9BQXdCO29CQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDdkQsQ0FBQztnQkFNTSx3Q0FBWSxHQUFuQixVQUFvQixLQUFhO29CQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDbkMsQ0FBQztnQkFLTSxrQ0FBTSxHQUFiLFVBQWMsU0FBaUIsRUFBRSxPQUFnQjtvQkFDN0MsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQzt3QkFDcEMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN4QyxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUM7d0JBQ3BELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDO29CQUN4RCxDQUFDO2dCQUNMLENBQUM7Z0JBTU0sOEJBQUUsR0FBVCxVQUFVLEtBQWE7b0JBQ25CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7d0JBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO29CQUU1QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUN4QixNQUFNLENBQUM7b0JBRVgsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7b0JBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUV0QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBRXZFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQzt3QkFDbEYsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN6QyxDQUFDO29CQUVELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQztnQkFFTSx3Q0FBWSxHQUFuQjtvQkFDSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7d0JBQ2xCLE1BQU0sQ0FBQztvQkFFWCxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFlBQVksS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUNqRSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUMzRixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDL0MsQ0FBQztnQkFDTCxDQUFDO2dCQUVNLDRDQUFnQixHQUF2QjtvQkFDSSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLElBQUksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEtBQUssVUFBVSxDQUFDO2dCQUMxSyxDQUFDO2dCQU1NLHlDQUFhLEdBQXBCO29CQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQzVGLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUMvQyxDQUFDO2dCQUNMLHdCQUFDO1lBQUQsQ0EvTEEsQUErTEMsSUFBQTtZQS9MRCxrREErTEMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ2xNRDtnQkFPSSxlQUFZLE9BQXNCLEVBQVUsU0FBd0I7b0JBQXhELHVCQUFzQixHQUF0QixjQUFzQjtvQkFBRSx5QkFBZ0MsR0FBaEMsZ0JBQWdDO29CQUF4QixjQUFTLEdBQVQsU0FBUyxDQUFlO29CQUNoRSxJQUFJLENBQUMsR0FBRyxHQUFHLDBCQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7b0JBRTFCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDMUIsQ0FBQztvQkFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkFFTSwwQkFBVSxHQUFqQjtnQkFFQSxDQUFDO2dCQUVNLHlCQUFTLEdBQWhCO2dCQUVBLENBQUM7Z0JBRVMsNEJBQVksR0FBdEIsVUFBdUIsR0FBVztvQkFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUM7Z0JBQ2pELENBQUM7Z0JBRU0sdUJBQU8sR0FBZCxVQUFlLE9BQWU7b0JBQzFCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEdBQUcsT0FBTyxHQUFHLDhCQUE4QixDQUFDLENBQUM7d0JBQzVGLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ2pCLENBQUM7b0JBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUN0QixDQUFDO2dCQUVNLHVCQUFPLEdBQWQ7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3RCLENBQUM7Z0JBRU0sdUJBQU8sR0FBZDtvQkFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztnQkFFRCxzQkFBVyx1QkFBSTt5QkFBZjt3QkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDO29CQUM5QyxDQUFDOzs7bUJBQUE7Z0JBN0NhLGdCQUFVLEdBQVcsT0FBTyxDQUFDO2dCQThDL0MsWUFBQztZQUFELENBbkRBLEFBbURDLElBQUE7WUFuREQsMEJBbURDLENBQUE7Ozs7Ozs7Ozs7Ozs7OztZQ3JERDtnQkFBK0IsNkJBQUs7Z0JBS2hDLG1CQUFZLE9BQXNCO29CQUF0Qix1QkFBc0IsR0FBdEIsY0FBc0I7b0JBQzlCLGtCQUFNLE9BQU8sQ0FBQyxDQUFDO29CQUhYLGVBQVUsR0FBb0MsRUFBRSxDQUFDO29CQUtyRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBRU0sMkJBQU8sR0FBZCxVQUFlLE9BQWUsRUFBRSxNQUFjO29CQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUMsQ0FBQztnQkFFTSxnQ0FBWSxHQUFuQixVQUFvQixPQUFlO29CQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztnQkFFTSwrQkFBVyxHQUFsQixVQUFtQixVQUFrQixFQUFFLE9BQWU7b0JBQ2xELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzlCLE1BQU0sSUFBSSxLQUFLLENBQUMsNENBQTRDLEdBQUcsT0FBTyxHQUFHLDhCQUE4QixDQUFDLENBQUM7b0JBQzdHLENBQUM7b0JBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ25FLENBQUM7Z0JBRU0sa0NBQWMsR0FBckIsVUFBc0IsVUFBa0I7b0JBQ3BDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsS0FBSyxXQUFXLENBQUM7d0JBQ25ELE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLEdBQUcsVUFBVSxDQUFDLENBQUM7b0JBRTFELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDN0MsQ0FBQztnQkFFRCxzQkFBVywyQkFBSTt5QkFBZjt3QkFDSSxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztvQkFDaEMsQ0FBQzs7O21CQUFBO2dCQW5DYSxvQkFBVSxHQUFXLFdBQVcsQ0FBQztnQkFvQ25ELGdCQUFDO1lBQUQsQ0FyQ0EsQUFxQ0MsQ0FyQzhCLGFBQUssR0FxQ25DO1lBckNELGtDQXFDQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7WUNuQ0Q7Z0JBT0ksa0JBQXNCLGNBQTBCLEVBQUUsT0FBdUIsRUFBRSxZQUEyQjtvQkFBMUYsOEJBQW9DLEdBQXBDLHFCQUFvQztvQkFBRSx1QkFBdUIsR0FBdkIsY0FBdUI7b0JBQUUsNEJBQTJCLEdBQTNCLG1CQUEyQjtvQkFBaEYsbUJBQWMsR0FBZCxjQUFjLENBQVk7b0JBSnRDLGlCQUFZLEdBQVcsSUFBSSxDQUFDO29CQUtsQyxJQUFJLENBQUMsR0FBRyxHQUFHLDBCQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7b0JBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO29CQUVqQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUNWLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDcEIsQ0FBQztnQkFDTCxDQUFDO2dCQUdTLDJCQUFRLEdBQWxCO29CQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBRVMseUJBQU0sR0FBaEI7b0JBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7Z0JBRU0sNkJBQVUsR0FBakI7Z0JBRUEsQ0FBQztnQkFFTSw0QkFBUyxHQUFoQjtnQkFFQSxDQUFDO2dCQUVNLDBCQUFPLEdBQWQ7b0JBQ0ksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNsQixDQUFDO2dCQUVNLDRDQUF5QixHQUFoQztvQkFDSSxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUNkLENBQUM7Z0JBRU0scUNBQWtCLEdBQXpCLFVBQTBCLFlBQTJCO2dCQVlyRCxDQUFDO2dCQUVNLG1DQUFnQixHQUF2QixVQUF3QixnQkFBd0IsRUFBRSxnQkFBc0I7b0JBQ3BFLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztnQkFDbEUsQ0FBQztnQkFHRCxzQkFBVyxtQ0FBYTt5QkFJeEI7d0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7b0JBQy9CLENBQUM7eUJBTkQsVUFBeUIsYUFBa0I7d0JBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO29CQUN4QyxDQUFDOzs7bUJBQUE7Z0JBTUQsc0JBQVcsMEJBQUk7eUJBQWY7d0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksUUFBUSxDQUFDLGFBQWEsQ0FBQztvQkFDdkQsQ0FBQzs7O21CQUFBO2dCQXRFYSxzQkFBYSxHQUFXLFVBQVUsQ0FBQztnQkF1RXJELGVBQUM7WUFBRCxDQXhFQSxBQXdFQyxJQUFBO1lBeEVELGdDQXdFQyxDQUFBOzs7Ozs7Ozs7OztZQzFFRDtnQkFDSSxzQkFBb0IsS0FBYSxFQUFVLEtBQWlCO29CQUF6QixxQkFBeUIsR0FBekIsWUFBeUI7b0JBQXhDLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQVUsVUFBSyxHQUFMLEtBQUssQ0FBWTtnQkFBSSxDQUFDO2dCQUUxRCw4QkFBTyxHQUFkO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUN0QixDQUFDO2dCQUVNLDhCQUFPLEdBQWQsVUFBZSxJQUFTO29CQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDdEIsQ0FBQztnQkFFTSw4QkFBTyxHQUFkO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUN0QixDQUFDO2dCQUVNLDhCQUFPLEdBQWQ7b0JBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixDQUFDO2dCQUNMLG1CQUFDO1lBQUQsQ0FuQkEsQUFtQkMsSUFBQTtZQW5CRCx3Q0FtQkMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNqQkQ7Z0JBaUJJO29CQWpCSixpQkF5TkM7b0JBaE5hLGNBQVMsR0FBYSxJQUFJLENBQUM7b0JBQzNCLFlBQU8sR0FBOEIsRUFBRSxDQUFDO29CQUN4QyxlQUFVLEdBQWlDLEVBQUUsQ0FBQztvQkFDOUMsaUJBQVksR0FBb0MsRUFBRSxDQUFDO29CQU16RCxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO3dCQUNyQixNQUFNLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBRTNDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUU1QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFO3dCQUNsQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7d0JBQzVCLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO29CQUM1QixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBRVYsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUNsQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3JCLENBQUM7Z0JBRVMsc0NBQWdCLEdBQTFCO2dCQUNBLENBQUM7Z0JBR1MsZ0NBQVUsR0FBcEI7b0JBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQzt3QkFDakIsS0FBSyxFQUFFLEdBQUc7d0JBQ1YsTUFBTSxFQUFFLEdBQUc7d0JBQ1gsTUFBTSxFQUFFLGdCQUFnQjt3QkFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxJQUFJO3dCQUNyQixXQUFXLEVBQUUsS0FBSztxQkFDckIsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRVMsK0JBQVMsR0FBbkI7Z0JBRUEsQ0FBQztnQkFFTSxnQ0FBVSxHQUFqQjtvQkFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQUVNLG1DQUFhLEdBQXBCLFVBQXFCLEtBQVk7b0JBQzdCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDM0IsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLHVDQUF1QyxHQUFHLEtBQUssQ0FBQyxJQUFJLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO29CQUNsRyxDQUFDO29CQUNELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztvQkFFakMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUVuQixNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNqQixDQUFDO2dCQUVNLG1DQUFhLEdBQXBCLFVBQXFCLFNBQWlCO29CQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUM7Z0JBQzNDLENBQUM7Z0JBRU0saUNBQVcsR0FBbEIsVUFBbUIsYUFBb0I7b0JBQ25DLElBQUksSUFBSSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUM7b0JBQzlCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBRS9CLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO3dCQUNQLE1BQU0sQ0FBQztvQkFFWCxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBRWxCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztnQkFFTSxzQ0FBZ0IsR0FBdkIsVUFBd0IsUUFBa0I7b0JBQ3RDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDakMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLDBDQUEwQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO29CQUN4RyxDQUFDO29CQUVELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUVoQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQzFCLENBQUM7Z0JBRU0sc0NBQWdCLEdBQXZCLFVBQXdCLFlBQW9CO29CQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLENBQUM7Z0JBQ2pELENBQUM7Z0JBRU0sb0NBQWMsR0FBckIsVUFBc0IsZ0JBQTBCO29CQUFoRCxpQkFhQztvQkFaRyxJQUFJLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7b0JBQ2pDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBRXJDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO3dCQUNWLE1BQU0sQ0FBQztvQkFFWCxRQUFRLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBQSxRQUFRO3dCQUNqRCxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFDNUMsQ0FBQyxDQUFDLENBQUM7b0JBRUgsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNyQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRU0sc0NBQWdCLEdBQXZCLFVBQXdCLFFBQW1CO29CQUEzQyxpQkFPQztvQkFORyxRQUFRLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBQSxnQkFBZ0I7d0JBQ3pELEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDOzRCQUNwRCxLQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDO3dCQUM3QyxDQUFDO3dCQUNELEtBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3ZELENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBUU0sb0NBQWMsR0FBckIsVUFBc0IsZ0JBQXdCLEVBQUUsZ0JBQTJCO29CQUV2RSxJQUFJLFNBQVMsR0FBZ0IsSUFBSSxFQUM3QixRQUFRLEdBQWMsSUFBSSxFQUMxQixDQUFDLEdBQVcsQ0FBQyxDQUFDO29CQUVsQixTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUdoRCxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztvQkFDckIsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUNULFFBQVEsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3hCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7NEJBQ2hDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOzRCQUN2QixLQUFLLENBQUM7d0JBQ1YsQ0FBQztvQkFDTCxDQUFDO29CQU1ELEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQy9DLENBQUM7Z0JBQ0wsQ0FBQztnQkFFTSxzQ0FBZ0IsR0FBdkIsVUFBd0IsZ0JBQXdCLEVBQUUsZUFBcUI7b0JBQ25FLElBQUksWUFBWSxHQUFHLElBQUksa0JBQVksQ0FBQyxnQkFBZ0IsRUFBRSxlQUFlLENBQUMsQ0FBQztvQkFDdkUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUVwQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ3ZCLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLENBQUM7Z0JBR08sc0NBQWdCLEdBQXhCLFVBQXlCLFlBQTJCO29CQUNoRCxJQUFJLFFBQVEsR0FBYyxJQUFJLEVBQzFCLFNBQVMsR0FBZ0IsSUFBSSxDQUFDO29CQUVsQyxJQUFNLGdCQUFnQixHQUFXLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDeEQsSUFBTSxZQUFZLEdBQWdCLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztvQkFFdEUsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzt3QkFFZixTQUFTLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbEMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFFBQVE7NEJBQ3RCLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFDOUMsQ0FBQyxDQUFDLENBQUM7b0JBQ1AsQ0FBQztnQkFDTCxDQUFDO2dCQUVjLHlCQUFhLEdBQTVCO29CQUNJLFdBQVcsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUM1QixFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFBLENBQUM7d0JBQzdELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztvQkFDOUIsQ0FBQztvQkFDRCxJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN6RSxJQUFNLEtBQUssR0FBYSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN4QyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsUUFBUTt3QkFDbEIsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDbEMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzlGLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBUWEsdUJBQVcsR0FBekI7b0JBQ0ksRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO3dCQUN0QixXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7b0JBRTdDLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO2dCQUNoQyxDQUFDO2dCQVFhLG9CQUFRLEdBQXRCLFVBQXVCLFVBQWtCO29CQUNyQyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDaEMsQ0FBQztvQkFDRCxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUM7Z0JBQ3RELENBQUM7Z0JBck5nQixvQkFBUSxHQUFHLElBQUksQ0FBQztnQkFDaEIseUJBQWEsR0FBRyw0Q0FBNEMsQ0FBQztnQkFzTmxGLGtCQUFDO1lBQUQsQ0F6TkEsQUF5TkMsSUFBQTtZQXpORCxzQ0F5TkMsQ0FBQSIsImZpbGUiOiJkaWpvbi5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SUJyb3dzZXJ9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY2xhc3MgRGV2aWNlIHtcbiAgICBwdWJsaWMgc3RhdGljIElPUzogc3RyaW5nID0gJ2lPUyc7XG4gICAgcHVibGljIHN0YXRpYyBBTkRST0lEOiBzdHJpbmcgPSAnYW5kcm9pZCc7XG4gICAgcHVibGljIHN0YXRpYyBVTktOT1dOOiBzdHJpbmcgPSAndW5rbm93bic7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBtb2JpbGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBEZXZpY2UubW9iaWxlT1MgIT09IERldmljZS5VTktOT1dOO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGNvY29vbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgbmF2aWdhdG9yWydpc0NvY29vbkpTJ10gIT09IFwidW5kZWZpbmVkXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IG1vYmlsZU9TKCkge1xuICAgICAgICBjb25zdCB1c2VyQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCB8fCB3aW5kb3cubmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3dbJ29wZXJhJ107XG4gICAgICAgIGlmICh1c2VyQWdlbnQubWF0Y2goL2lQYWQvaSkgfHwgdXNlckFnZW50Lm1hdGNoKC9pUGhvbmUvaSkgfHwgdXNlckFnZW50Lm1hdGNoKC9pUG9kL2kpKSB7XG4gICAgICAgICAgICByZXR1cm4gRGV2aWNlLklPUztcbiAgICAgICAgfSBlbHNlIGlmICh1c2VyQWdlbnQubWF0Y2goL0FuZHJvaWQvaSkpIHtcbiAgICAgICAgICAgIHJldHVybiBEZXZpY2UuQU5EUk9JRDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBEZXZpY2UuVU5LTk9XTjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGJyb3dzZXIoKTogSUJyb3dzZXIge1xuICAgICAgICBjb25zdCB1YTogc3RyaW5nID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmlyZWZveDogdWEuaW5kZXhPZignZmlyZWZveCcpID4gLTEsXG4gICAgICAgICAgICBpZTogdWEuaW5kZXhPZignaWUnKSA+IC0xLFxuICAgICAgICAgICAgc2FmYXJpOiB1YS5pbmRleE9mKCdzYWZhcmknKSA+IC0xLFxuICAgICAgICAgICAgY2hyb21lOiB1YS5pbmRleE9mKCdjaHJvbWUnKSA+IC0xLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcGl4ZWxSYXRpbygpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyAhPT0gdW5kZWZpbmVkID8gd2luZG93LmRldmljZVBpeGVsUmF0aW8gOiAxO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGN1c3RvbVBpeGVsUmF0aW8oKSB7XG4gICAgICAgIHJldHVybiBEZXZpY2UucGl4ZWxSYXRpbyA+PSAxLjUgPyAyIDogMTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIExvZ2dlciB7XG4gICAgcHVibGljIHN0YXRpYyBlbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwdWJsaWMgc3RhdGljIGxvZyhpbnN0YW5jZSwgLi4uYXJncykge1xuICAgICAgICBpZiAoIUxvZ2dlci5lbmFibGVkKSB7IFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZS5jb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgYXJncy51bnNoaWZ0KGluc3RhbmNlLmNvbnN0cnVjdG9yLnRvU3RyaW5nKCkubWF0Y2goL1xcdysvZylbMV0gKyAnIDo6Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpOyBcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbnMge1xuICAgIHB1YmxpYyBzdGF0aWMgQVNTRVRfTUFOQUdFUl9EQVRBX1NFVDogc3RyaW5nID0gJ2Rpam9uQXNzZXRNYW5hZ2VyRGF0YVNldCc7XG4gICAgcHVibGljIHN0YXRpYyBBU1NFVF9NQU5BR0VSX0FTU0VUU19DTEVBUkVEOiBzdHJpbmcgPSAnZGlqb25Bc3NldE1hbmFnZXJBc3NldHNDbGVhcmVkJztcblxuICAgIHB1YmxpYyBzdGF0aWMgTU9VU0VfTEVBVkVfR0xPQkFMOiBzdHJpbmcgPSAnbW91c2VPdXRHbG9iYWwnO1xuICAgIHB1YmxpYyBzdGF0aWMgTU9VU0VfRU5URVJfR0xPQkFMOiBzdHJpbmcgPSAnbW91c2VFbnRlckdsb2JhbCc7XG59IiwiaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xuXG5leHBvcnQgY2xhc3MgVGV4dHVyZXMge1xuICAgIHByaXZhdGUgc3RhdGljIGdldCBnYW1lKCk6IFBoYXNlci5HYW1lIHtcbiAgICAgICAgcmV0dXJuIEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVjdCh3aWR0aDogbnVtYmVyID0gMTAwLCBoZWlnaHQ6IG51bWJlciA9IDEwMCwgY29sb3I6IG51bWJlciA9IDB4ZmZmZmZmLCBhbHBoYTogbnVtYmVyID0gMSwgZmlsbDogYm9vbGVhbiA9IHRydWUsIGxpbmVDb2xvcjogbnVtYmVyID0gMHhmZmZmZmYsIGxpbmVUaGlja25lc3M6IG51bWJlciA9IDEsIGxpbmVBbHBoYTogbnVtYmVyID0gMSwgb3V0bGluZTogYm9vbGVhbiA9IGZhbHNlKTogUElYSS5UZXh0dXJlIHtcbiAgICAgICAgY29uc3QgZ2Z4ID0gVGV4dHVyZXMuZ2FtZS5hZGQuZ3JhcGhpY3MoMCwgMCk7XG4gICAgICAgIGlmIChmaWxsKSB7XG4gICAgICAgICAgICBnZnguYmVnaW5GaWxsKGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG91dGxpbmUpIHtcbiAgICAgICAgICAgIGdmeC5saW5lV2lkdGggPSBsaW5lVGhpY2tuZXNzO1xuICAgICAgICAgICAgZ2Z4LmxpbmVTdHlsZShsaW5lVGhpY2tuZXNzLCBsaW5lQ29sb3IsIGxpbmVBbHBoYSk7XG4gICAgICAgIH1cbiAgICAgICAgZ2Z4LmRyYXdSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBnZnguZ2VuZXJhdGVUZXh0dXJlKCk7XG4gICAgICAgIFRleHR1cmVzLmdhbWUud29ybGQucmVtb3ZlKGdmeCk7XG5cbiAgICAgICAgcmV0dXJuIHRleHR1cmU7XG4gICAgfVxuXG4gICAgc3RhdGljIHJvdW5kZWRSZWN0KHdpZHRoOiBudW1iZXIgPSAxMDAsIGhlaWdodDogbnVtYmVyID0gMTAwLCByYWRpdXM6IG51bWJlciA9IDEwLCBjb2xvcjogbnVtYmVyID0gMHhmZmZmZmYsIGFscGhhOiBudW1iZXIgPSAxLCBmaWxsOiBib29sZWFuID0gdHJ1ZSwgbGluZUNvbG9yOiBudW1iZXIgPSAweGZmZmZmZiwgbGluZVRoaWNrbmVzczogbnVtYmVyID0gMSwgbGluZUFscGhhOiBudW1iZXIgPSAxLCBvdXRsaW5lOiBib29sZWFuID0gZmFsc2UpOiBQSVhJLlRleHR1cmUge1xuICAgICAgICBjb25zdCBnZnggPSBUZXh0dXJlcy5nYW1lLmFkZC5ncmFwaGljcygwLCAwKTtcbiAgICAgICAgaWYgKGZpbGwpIHtcbiAgICAgICAgICAgIGdmeC5iZWdpbkZpbGwoY29sb3IsIGFscGhhKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3V0bGluZSkge1xuICAgICAgICAgICAgZ2Z4LmxpbmVXaWR0aCA9IGxpbmVUaGlja25lc3M7XG4gICAgICAgICAgICBnZngubGluZVN0eWxlKGxpbmVUaGlja25lc3MsIGxpbmVDb2xvciwgbGluZUFscGhhKTtcbiAgICAgICAgfVxuICAgICAgICBnZnguZHJhd1JvdW5kZWRSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQsIHJhZGl1cyk7XG5cbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IGdmeC5nZW5lcmF0ZVRleHR1cmUoKTtcbiAgICAgICAgVGV4dHVyZXMuZ2FtZS53b3JsZC5yZW1vdmUoZ2Z4KTtcblxuICAgICAgICByZXR1cm4gdGV4dHVyZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc3F1YXJlKHNpemU6IG51bWJlciA9IDEwMCwgY29sb3I6IG51bWJlciA9IDB4ZmZmZmZmLCBhbHBoYTogbnVtYmVyID0gMSwgZmlsbDogYm9vbGVhbiA9IHRydWUsIGxpbmVDb2xvcjogbnVtYmVyID0gMHhmZmZmZmYsIGxpbmVUaGlja25lc3M6IG51bWJlciA9IDEsIGxpbmVBbHBoYTogbnVtYmVyID0gMSwgb3V0bGluZTogYm9vbGVhbiA9IGZhbHNlKTogUElYSS5UZXh0dXJlIHtcbiAgICAgICAgcmV0dXJuIFRleHR1cmVzLnJlY3Qoc2l6ZSwgc2l6ZSwgY29sb3IsIGFscGhhLCBmaWxsLCBsaW5lQ29sb3IsIGxpbmVUaGlja25lc3MsIGxpbmVBbHBoYSwgb3V0bGluZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNpcmNsZShkaWFtZXRlcjogbnVtYmVyID0gMTAwLCBjb2xvcjogbnVtYmVyID0gMHhmZmZmZmYsIGFscGhhOiBudW1iZXIgPSAxLCBmaWxsOiBib29sZWFuID0gdHJ1ZSwgbGluZUNvbG9yOiBudW1iZXIgPSAweGZmZmZmZiwgbGluZVRoaWNrbmVzczogbnVtYmVyID0gMSwgbGluZUFscGhhOiBudW1iZXIgPSAxLCBvdXRsaW5lOiBib29sZWFuID0gZmFsc2UpOiBQSVhJLlRleHR1cmUge1xuICAgICAgICBjb25zdCBnZnggPSBUZXh0dXJlcy5nYW1lLmFkZC5ncmFwaGljcygwLCAwKTtcbiAgICAgICAgaWYgKGZpbGwpIHtcbiAgICAgICAgICAgIGdmeC5iZWdpbkZpbGwoY29sb3IsIGFscGhhKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3V0bGluZSkge1xuICAgICAgICAgICAgZ2Z4LmxpbmVXaWR0aCA9IGxpbmVUaGlja25lc3M7XG4gICAgICAgICAgICBnZngubGluZVN0eWxlKGxpbmVUaGlja25lc3MsIGxpbmVDb2xvciwgbGluZUFscGhhKTtcbiAgICAgICAgfVxuICAgICAgICBnZnguZHJhd0NpcmNsZSgwLCAwLCBkaWFtZXRlcik7XG5cbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IGdmeC5nZW5lcmF0ZVRleHR1cmUoKTtcbiAgICAgICAgVGV4dHVyZXMuZ2FtZS53b3JsZC5yZW1vdmUoZ2Z4KTtcblxuICAgICAgICByZXR1cm4gdGV4dHVyZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZWxsaXBzZSh3aWR0aDogbnVtYmVyID0gNTAsIGhlaWdodDogbnVtYmVyID0gMTAwLCBjb2xvcjogbnVtYmVyID0gMHhmZmZmZmYsIGFscGhhOiBudW1iZXIgPSAxLCBmaWxsOiBib29sZWFuID0gdHJ1ZSwgbGluZUNvbG9yOiBudW1iZXIgPSAweGZmZmZmZiwgbGluZVRoaWNrbmVzczogbnVtYmVyID0gMSwgbGluZUFscGhhOiBudW1iZXIgPSAxLCBvdXRsaW5lOiBib29sZWFuID0gZmFsc2UpOiBQSVhJLlRleHR1cmUge1xuICAgICAgICBjb25zdCBnZnggPSBUZXh0dXJlcy5nYW1lLmFkZC5ncmFwaGljcygwLCAwKTtcbiAgICAgICAgaWYgKGZpbGwpIHtcbiAgICAgICAgICAgIGdmeC5iZWdpbkZpbGwoY29sb3IsIGFscGhhKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3V0bGluZSkge1xuICAgICAgICAgICAgZ2Z4LmxpbmVXaWR0aCA9IGxpbmVUaGlja25lc3M7XG4gICAgICAgICAgICBnZngubGluZVN0eWxlKGxpbmVUaGlja25lc3MsIGxpbmVDb2xvciwgbGluZUFscGhhKTtcbiAgICAgICAgfVxuICAgICAgICBnZnguZHJhd0VsbGlwc2UoMCwgMCwgd2lkdGggKiAwLjUsIGhlaWdodCAqIDAuNSk7XG5cbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IGdmeC5nZW5lcmF0ZVRleHR1cmUoKTtcbiAgICAgICAgVGV4dHVyZXMuZ2FtZS53b3JsZC5yZW1vdmUoZ2Z4KTtcblxuICAgICAgICByZXR1cm4gdGV4dHVyZTtcbiAgICB9XG59IiwiaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xuaW1wb3J0IHtHYW1lfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7RGV2aWNlfSBmcm9tICcuLi91dGlscyc7XG5cbi8qKlxuICogVGV4dFxuICovXG5leHBvcnQgY2xhc3MgQml0bWFwVGV4dCBleHRlbmRzIFBoYXNlci5CaXRtYXBUZXh0IHtcbiAgICAvLyBmcm9tIFBoYXNlci5CaXRtYXBUZXh0XG4gICAgcHJpdmF0ZSBfdGV4dDogc3RyaW5nO1xuICAgIHByaXZhdGUgX2dseXBoczogYW55W107XG5cbiAgICBwcm90ZWN0ZWQgX2F1dG9GbGF0dGVuOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwcm90ZWN0ZWQgX2NvbG9yOiBudW1iZXIgPSAweGZmZmZmZjtcbiAgICBwcm90ZWN0ZWQgX2lzSW1hZ2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcm90ZWN0ZWQgX2ludGVybmFsSW1hZ2U6IFBoYXNlci5JbWFnZSA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCBmb250OiBzdHJpbmcgPSBudWxsLCB0ZXh0OiBzdHJpbmcgPSBcIlwiLCBzaXplOiBudW1iZXIgPSAxMiwgYWxpZ246IHN0cmluZyA9ICdsZWZ0JywgY29sb3I6IG51bWJlciA9IDB4ZmZmZmZmLCBzbW9vdGhpbmc6IGJvb2xlYW4gPSB0cnVlLCBhdXRvRmxhdHRlbjogYm9vbGVhbiA9IHRydWUsIG1ha2VJbWFnZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHN1cGVyKEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZSwgeCwgeSwgZm9udCwgdGV4dCwgc2l6ZSwgYWxpZ24pO1xuXG4gICAgICAgIGlmIChzbW9vdGhpbmcgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuc21vb3RoZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWFrZUltYWdlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoY29sb3IgIT09IDB4ZmZmZmZmKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hdXRvRmxhdHRlbiA9IGF1dG9GbGF0dGVuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tYWtlSW1hZ2UoKTtcbiAgICAgICAgICAgIGlmIChjb2xvciAhPT0gMHhmZmZmZmYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbWFrZUltYWdlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9pc0ltYWdlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fYWxpZ25Ub05lYXJlc3RQaXhlbCgpO1xuICAgICAgICB0aGlzLl9pbnRlcm5hbEltYWdlID0gPFBoYXNlci5JbWFnZT50aGlzLmFkZENoaWxkQXQodGhpcy5nYW1lLmFkZC5pbWFnZSgwLCAwLCB0aGlzLmdlbmVyYXRlVGV4dHVyZSh0aGlzLmdhbWUucmVzb2x1dGlvbiwgUElYSS5zY2FsZU1vZGVzLkRFRkFVTFQpKSwgMCk7XG5cbiAgICAgICAgdGhpcy5kZXN0cm95R2x5cGhzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3lHbHlwaHMoKSB7XG4gICAgICAgIGxldCBuID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgICAgICB3aGlsZSAobiA+ICh0aGlzLl9pc0ltYWdlID8gMCA6IC0xKSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZEF0KG4pO1xuICAgICAgICAgICAgbi0tO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ2x5cGhzID0gdGhpcy5fZ2x5cGhzO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdseXBocy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZ2x5cGhzW2ldLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9nbHlwaHMgPSBbXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmxhdHRlbihkZWxheTogbnVtYmVyID0gbnVsbCk6IHZvaWQge1xuICAgICAgICBpZiAoZGVsYXkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoZGVsYXksICgpID0+IHsgdGhpcy5jYWNoZUFzQml0bWFwID0gdHJ1ZSB9LCB0aGlzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9hbGlnblRvTmVhcmVzdFBpeGVsKCk7XG4gICAgICAgIHRoaXMuY2FjaGVBc0JpdG1hcCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIHVuRmxhdHRlbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYWNoZUFzQml0bWFwID0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGF1dG9GbGF0dGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2F1dG9GbGF0dGVuID0gdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLl9hdXRvRmxhdHRlbikge1xuICAgICAgICAgICAgdGhpcy5mbGF0dGVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVuRmxhdHRlbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhdXRvRmxhdHRlbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dG9GbGF0dGVuO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgY29sb3IodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5fYXV0b0ZsYXR0ZW4pIHtcbiAgICAgICAgICAgIHRoaXMudW5GbGF0dGVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY29sb3IgPSB2YWx1ZTtcblxuICAgICAgICBpZiAodGhpcy5faXNJbWFnZSkge1xuICAgICAgICAgICAgdGhpcy5faW50ZXJuYWxJbWFnZS50aW50ID0gdGhpcy5fY29sb3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRpbnQgPSB0aGlzLl9jb2xvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9hdXRvRmxhdHRlbikge1xuICAgICAgICAgICAgdGhpcy5mbGF0dGVuKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGNvbG9yKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHRleHQodmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5fYXV0b0ZsYXR0ZW4pIHtcbiAgICAgICAgICAgIHRoaXMudW5GbGF0dGVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3RleHQgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gdGhpcy5fdGV4dCkge1xuICAgICAgICAgICAgdGhpcy5fdGV4dCA9IHZhbHVlLnRvU3RyaW5nKCkgfHwgJyc7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lHbHlwaHMoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9hdXRvRmxhdHRlbikge1xuICAgICAgICAgICAgdGhpcy5mbGF0dGVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9hbGlnblRvTmVhcmVzdFBpeGVsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCByZWFsV2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Qm91bmRzKCkud2lkdGg7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCByZWFsSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJvdW5kcygpLmhlaWdodDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dlbmVyYXRlQ2FjaGVkU3ByaXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9jYWNoZUFzQml0bWFwID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIGJvdW5kcyA9IHRoaXMuZ2V0TG9jYWxCb3VuZHMoKTtcbiAgICAgICAgdmFyIHJlcyA9IHRoaXMuZ2FtZS5yZXNvbHV0aW9uO1xuXG4gICAgICAgIGlmICghdGhpcy5fY2FjaGVkU3ByaXRlKSB7XG4gICAgICAgICAgICB2YXIgcmVuZGVyVGV4dHVyZSA9IG5ldyBQSVhJLlJlbmRlclRleHR1cmUoYm91bmRzLndpZHRoICogcmVzIHwgMCwgYm91bmRzLmhlaWdodCAqIHJlcyB8IDApOy8vLCByZW5kZXJTZXNzaW9uLnJlbmRlcmVyKTtcbiAgICAgICAgICAgIHJlbmRlclRleHR1cmUuYmFzZVRleHR1cmUucmVzb2x1dGlvbiA9IHJlcztcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlZFNwcml0ZSA9IG5ldyBQSVhJLlNwcml0ZShyZW5kZXJUZXh0dXJlKTtcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlZFNwcml0ZS50ZXh0dXJlLnJlc29sdXRpb24gPSByZXM7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZWRTcHJpdGUud29ybGRUcmFuc2Zvcm0gPSB0aGlzLndvcmxkVHJhbnNmb3JtO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fY2FjaGVkU3ByaXRlLnRleHR1cmUucmVzaXplKGJvdW5kcy53aWR0aCAqIHJlcyB8IDAsIGJvdW5kcy5oZWlnaHQgKiByZXMgfCAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vUkVNT1ZFIGZpbHRlciFcbiAgICAgICAgdmFyIHRlbXBGaWx0ZXJzID0gdGhpcy5fZmlsdGVycztcbiAgICAgICAgdGhpcy5fZmlsdGVycyA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5fY2FjaGVkU3ByaXRlLmZpbHRlcnMgPSB0ZW1wRmlsdGVycztcblxuICAgICAgICBQSVhJLkRpc3BsYXlPYmplY3RbJ190ZW1wTWF0cml4J10udHggPSAtYm91bmRzLng7XG4gICAgICAgIFBJWEkuRGlzcGxheU9iamVjdFsnX3RlbXBNYXRyaXgnXS50eSA9IC1ib3VuZHMueTtcblxuICAgICAgICB0aGlzLl9jYWNoZWRTcHJpdGUudGV4dHVyZS5yZW5kZXIodGhpcywgUElYSS5EaXNwbGF5T2JqZWN0WydfdGVtcE1hdHJpeCddLCB0cnVlKTtcblxuICAgICAgICB0aGlzLl9jYWNoZWRTcHJpdGUuYW5jaG9yLnggPSAtKGJvdW5kcy54IC8gYm91bmRzLndpZHRoKTtcbiAgICAgICAgdGhpcy5fY2FjaGVkU3ByaXRlLmFuY2hvci55ID0gLShib3VuZHMueSAvIGJvdW5kcy5oZWlnaHQpO1xuXG4gICAgICAgIHRoaXMuX2ZpbHRlcnMgPSB0ZW1wRmlsdGVycztcblxuICAgICAgICB0aGlzLl9jYWNoZUFzQml0bWFwID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXRIaXRBcmVhVG9Cb3VuZHMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2FsaWduVG9OZWFyZXN0UGl4ZWwoKTogdm9pZCB7XG4gICAgICAgIHRoaXMueCA9IE1hdGgucm91bmQodGhpcy54KTtcbiAgICAgICAgdGhpcy55ID0gTWF0aC5yb3VuZCh0aGlzLnkpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgY2hpbGQueCA9IE1hdGgucm91bmQoY2hpbGQueCk7XG4gICAgICAgICAgICBjaGlsZC55ID0gTWF0aC5yb3VuZChjaGlsZC55KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGhpZ2hsaWdodChoaWdobGlnaHRTdHI6IHN0cmluZywgaGlnaGxpZ2h0Q29sb3I6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5faXNJbWFnZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0JpdG1hcFRleHQ6OiBjYW5ub3QgaGlnaGxpZ2h0IGEgc3Vic3RyaW5nIG9mIGEgQml0bWFwVGV4dCBpbnN0YW5jZSB3aGVuIG1ha2VJbWFnZSBpcyBzZXQgdG8gdHJ1ZScsIHRoaXMudGV4dCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGV4dC5pbmRleE9mKGhpZ2hsaWdodFN0cikgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdGFydEluZGV4OiBudW1iZXIgPSB0aGlzLnRleHQuaW5kZXhPZihoaWdobGlnaHRTdHIpLTE7XG4gICAgICAgIGNvbnN0IGVuZEluZGV4OiBudW1iZXIgPSBzdGFydEluZGV4ICsgaGlnaGxpZ2h0U3RyLmxlbmd0aDtcbiAgICAgICAgbGV0IGNoaWxkOiBQSVhJLlNwcml0ZTtcblxuICAgICAgICBpZiAodGhpcy5fYXV0b0ZsYXR0ZW4pIHtcbiAgICAgICAgICAgIHRoaXMudW5GbGF0dGVuKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleDsgaSA8IGVuZEluZGV4OyBpKyspIHtcbiAgICAgICAgICAgIGNoaWxkID0gPFBJWEkuU3ByaXRlPnRoaXMuZ2V0Q2hpbGRBdChpKTtcbiAgICAgICAgICAgIGNoaWxkLnRpbnQgPSBoaWdobGlnaHRDb2xvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9hdXRvRmxhdHRlbikge1xuICAgICAgICAgICAgdGhpcy5mbGF0dGVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9hbGlnblRvTmVhcmVzdFBpeGVsKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SGl0QXJlYVRvQm91bmRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmhpdEFyZWEgPSB0aGlzLmdldEJvdW5kcygpO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xuaW1wb3J0IHtHYW1lfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7U3ByaXRlLCBHcm91cH0gZnJvbSAnLi4vZGlzcGxheSc7XG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xuICAgIHB1YmxpYyBnYW1lOiBHYW1lO1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIG93bmVyOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lO1xuICAgICAgICB0aGlzLm5hbWUgPSAnQ29tcG9uZW50JztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0T3duZXIob3duZXI6IFNwcml0ZSB8IEdyb3VwKTogdm9pZCB7XG4gICAgICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGluaXRpYWxpemUgdGhlIGNvbXBvbmVudCwgc2V0IHVwIHZhcmlhYmxlc1xuICAgICogY2FsbGVkIGJ5IHRoZSBvd25lciBmaXJzdCBhZnRlciB0aGUgY29tcG9uZW50IGlzIGF0dGFjaGVkXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIGluaXQoKSB7IH1cblxuICAgIC8qKlxuICAgICogYWRkIHZpc3VhbCBlbGVtZW50c1xuICAgICogY2FsbGVkIGJ5IHRoZSBvd25lciBhZnRlciBpdCBjYWxscyB0aGlzIGluaXQgbWV0aG9kXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIGJ1aWxkSW50ZXJmYWNlKCkgeyB9XG5cbiAgICAvKipcbiAgICAqIGNhbGxlZCBieSB0aGUgb3duZXIgaW4gaXRzIHVwZGF0ZSBjeWNsZSwgZXZlcnkgZnJhbWVcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlKCkgeyB9XG5cbiAgICAvKipcbiAgICAqIHJlbW92ZSBhbnkgdmlzdWFsIGVsZW1lbnRzIC8gc2lnbmFscyBhZGRlZFxuICAgICogb3duZXIgY2FsbHMgdGhpcyBtZXRob2QgaW4gaXRzIG93biBkZXN0cm95IG1ldGhvZFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyBkZXN0cm95KCkgeyB9XG59IiwiaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xuaW1wb3J0IHtHYW1lLCBHYW1lT2JqZWN0RmFjdG9yeX0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQge01lZGlhdG9yfSBmcm9tICcuLi9tdmMnO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJy4vQ29tcG9uZW50JztcblxuZXhwb3J0IGNsYXNzIEdyb3VwIGV4dGVuZHMgUGhhc2VyLkdyb3VwIHtcbiAgICBwdWJsaWMgZ2FtZTogR2FtZTtcblxuICAgIHByb3RlY3RlZCBfaGFzQ29tcG9uZW50czogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCBfY29tcG9uZW50S2V5czogc3RyaW5nW10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgX2NvbXBvbmVudHM6IHsgW2NvbXBvbmVudE5hbWU6IHN0cmluZ106IENvbXBvbmVudCB9ID0ge307XG5cbiAgICBwcm90ZWN0ZWQgX21lZGlhdG9yOiBNZWRpYXRvciA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCBwdWJsaWMgbmFtZTogc3RyaW5nID0gXCJkR3JvdXBcIiwgYWRkVG9TdGFnZTogYm9vbGVhbiA9IGZhbHNlLCBjb21wb25lbnRzOiBDb21wb25lbnRbXSA9IG51bGwsIGVuYWJsZUJvZHk/OiBib29sZWFuLCBwaHlzaWNzQm9keVR5cGU/OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lLCBudWxsLCBuYW1lLCBhZGRUb1N0YWdlLCBlbmFibGVCb2R5LCBwaHlzaWNzQm9keVR5cGUpO1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24uc2V0KHgsIHkpO1xuXG4gICAgICAgIGlmICghYWRkVG9TdGFnZSlcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hZGQuZXhpc3RpbmcodGhpcyk7XG5cblxuICAgICAgICBpZiAoY29tcG9uZW50cylcbiAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50cyhjb21wb25lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBQaGFzZXIuR3JvdXAgb3ZlcnJpZGVzXG4gICAgLyoqXG4gICAgKiBjYWxsZWQgZXZlcnkgZnJhbWVcbiAgICAqIGl0ZXJhdGVzIHRoZSBjb21wb25lbnRzIGxpc3QgYW5kIGNhbGxzIGNvbXBvbmVudC51cGRhdGUoKSBvbiBlYWNoIGNvbXBvbmVudFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqIEBvdmVycmlkZVxuICAgICovXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIudXBkYXRlKCk7XG4gICAgICAgIGlmICh0aGlzLl9oYXNDb21wb25lbnRzKVxuICAgICAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiByZW1vdmVzIGFsbCBjb21wb25lbnRzXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuR3JvdXAuZGVzdHJveX1cbiAgICAqIEBvdmVycmlkZVxuICAgICovXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLnJlbW92ZU1lZGlhdG9yKCk7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICAvKipcbiAgICAqIGluaXRpYWxpemUgdmFyaWFibGVzXG4gICAgKiBhZGQgbWVkaWF0b3IsIGlmIG5lZWRlZFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQgeyB9XG5cbiAgICAvKipcbiAgICAqIGFkZCB2aXN1YWwgZWxlbWVudHNcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwcm90ZWN0ZWQgYnVpbGRJbnRlcmZhY2UoKTogdm9pZCB7IH1cblxuICAgIC8qKlxuICAgICogdXBkYXRlcyB0aGUgaW50ZXJuYWwgbGlzdCBvZiBjb21wb25lbnQga2V5cyAoc28gd2UgZG9uJ3QgaGF2ZSB0byBjYWxsIE9iamVjdC5rZXlzKCkgYWxsIHRoZSB0aW1lKVxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHByaXZhdGUgX3VwZGF0ZUNvbXBvbmVudEtleXMoKSB7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudEtleXMgPSBPYmplY3Qua2V5cyh0aGlzLl9jb21wb25lbnRzKTtcbiAgICAgICAgdGhpcy5faGFzQ29tcG9uZW50cyA9IHRoaXMuX2NvbXBvbmVudEtleXMubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuICAgIC8qKlxuICAgICogYXR0YWNoZXMgYSBsaXN0IG9mIGNvbXBvbmVudHMgdG8gdGhlIERpam9uLlVJR3JvdXBcbiAgICAqIEBwYXJhbSB7QXJyYXl9IGNvbXBvbmVudHMgdGhlIGxpc3Qgb2YgY29tcG9uZW50cyB0byBhZGRcbiAgICAqL1xuICAgIHB1YmxpYyBhZGRDb21wb25lbnRzID0gZnVuY3Rpb24gKGNvbXBvbmVudHM6IENvbXBvbmVudFtdKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cy5sZW5ndGggPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEaWpvbi5VSUdyb3VwIGNvbXBvbmVudHMgbXVzdCBiZSBhbiBhcnJheScpO1xuXG4gICAgICAgIHdoaWxlIChjb21wb25lbnRzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChjb21wb25lbnRzLnNoaWZ0KCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogYXR0YWNoZXMgYSBjb21wb25lbnQgdG8gdGhlIERpam9uLlVJR3JvdXBcbiAgICAqIEBwYXJhbSB7ZGlqb24uQ29tcG9uZW50fSBjb21wb25lbnQgdG8gYmUgYXR0YWNoZWRcbiAgICAqL1xuICAgIHB1YmxpYyBhZGRDb21wb25lbnQoY29tcG9uZW50OiBDb21wb25lbnQpOiBDb21wb25lbnQge1xuICAgICAgICBjb21wb25lbnQuc2V0T3duZXIodGhpcyk7XG4gICAgICAgIGNvbXBvbmVudC5pbml0KCk7XG4gICAgICAgIGNvbXBvbmVudC5idWlsZEludGVyZmFjZSgpO1xuXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHNbY29tcG9uZW50Lm5hbWVdID0gY29tcG9uZW50O1xuICAgICAgICB0aGlzLl91cGRhdGVDb21wb25lbnRLZXlzKCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGl0ZXJhdGVzIHRocm91Z2ggdGhlIGxpc3Qgb2YgY29tcG9uZW50cyBhbmQgdXBkYXRlcyBlYWNoIG9uZVxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyB1cGRhdGVDb21wb25lbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9jb21wb25lbnRLZXlzLmZvckVhY2goXG4gICAgICAgICAgICBjb21wb25lbnROYW1lID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnROYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHVwZGF0ZXMgYW4gYXR0YWNoZWQgY29tcG9uZW50IChjYWxscyBjb21wb25lbnQudXBkYXRlKCkpXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGNvbXBvbmVudE5hbWUgdGhlIG5hbWUgb2YgdGhlIGNvbXBvbmVudCB0byB1cGRhdGVcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudE5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLl9jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogcmVtb3ZlcyBhbGwgdGhlIGNvbXBvbmVudHMgY3VycmVudGx5IGF0dGFjaGVkXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIHJlbW92ZUFsbENvbXBvbmVudHMoKSB7XG4gICAgICAgIHdoaWxlICh0aGlzLl9jb21wb25lbnRLZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ29tcG9uZW50KHRoaXMuX2NvbXBvbmVudEtleXMucG9wKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiByZW1vdmVzIGEgc3BlY2lmaWMgY29tcG9uZW50XG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGNvbXBvbmVudE5hbWUgdGhlIG5hbWUgb2YgdGhlIGNvbXBvbmVudCB0byByZW1vdmVcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgcmVtb3ZlQ29tcG9uZW50KGNvbXBvbmVudE5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbXBvbmVudHNbY29tcG9uZW50TmFtZV0gPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHNbY29tcG9uZW50TmFtZV0uZGVzdHJveSgpO1xuICAgICAgICB0aGlzLl9jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdID0gbnVsbDtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2NvbXBvbmVudHNbY29tcG9uZW50TmFtZV07XG5cbiAgICAgICAgdGhpcy5fdXBkYXRlQ29tcG9uZW50S2V5cygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBmbGF0dGVuKGRlbGF5OiBudW1iZXIgPSAwKTogdm9pZCB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jYWNoZUFzQml0bWFwID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoZGVsYXksICgpID0+IHsgdGhpcy5jYWNoZUFzQml0bWFwID0gdHJ1ZSB9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB1bkZsYXR0ZW4oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2FjaGVBc0JpdG1hcCA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiByZW1vdmVzIHRoZSBtZWRpYXRvciwgaWYgaXQgZXhpc3RzXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIHJlbW92ZU1lZGlhdG9yKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX21lZGlhdG9yKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbWVkaWF0b3IuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLl9tZWRpYXRvciA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhZGRJbnRlcm5hbCgpOiBHYW1lT2JqZWN0RmFjdG9yeSB7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQudGFyZ2V0R3JvdXAgPSB0aGlzO1xuICAgICAgICByZXR1cm4gdGhpcy5nYW1lLmFkZDtcbiAgICB9XG59IiwiaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xuaW1wb3J0IHtHYW1lfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICcuL0NvbXBvbmVudCc7XG5cbmV4cG9ydCBjbGFzcyBTcHJpdGUgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcbiAgICBwdWJsaWMgZ2FtZTogR2FtZTtcblxuICAgIHByb3RlY3RlZCBfaGFzQ29tcG9uZW50czogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCBfY29tcG9uZW50S2V5czogc3RyaW5nW10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgX2NvbXBvbmVudHM6IHsgW2NvbXBvbmVudE5hbWU6IHN0cmluZ106IENvbXBvbmVudCB9ID0ge307XG5cbiAgICBjb25zdHJ1Y3Rvcih4PzogbnVtYmVyLCB5PzogbnVtYmVyLCBrZXk/OiBzdHJpbmcgfCBQaGFzZXIuUmVuZGVyVGV4dHVyZSB8IFBoYXNlci5CaXRtYXBEYXRhIHwgUElYSS5UZXh0dXJlLCBmcmFtZT86IHN0cmluZyB8IG51bWJlciwgcHVibGljIG5hbWU6IHN0cmluZyA9IFwiZFNwcml0ZVwiLCBjb21wb25lbnRzOiBDb21wb25lbnRbXSA9IG51bGwpIHtcbiAgICAgICAgc3VwZXIoQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lLCB4LCB5LCBrZXksIGZyYW1lKTtcblxuICAgICAgICBpZiAoY29tcG9uZW50cylcbiAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50cyhjb21wb25lbnRzKTtcbiAgICB9XG4gICAgLy8gUGhhc2VyLlNwcml0ZSBvdmVycmlkZXNcbiAgICAvKipcbiAgICAqIGNhbGxlZCBldmVyeSBmcmFtZVxuICAgICogaXRlcmF0ZXMgdGhlIGNvbXBvbmVudHMgbGlzdCBhbmQgY2FsbHMgY29tcG9uZW50LnVwZGF0ZSgpIG9uIGVhY2ggY29tcG9uZW50XG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICogQG92ZXJyaWRlXG4gICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5faGFzQ29tcG9uZW50cylcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogcmVtb3ZlcyBhbGwgY29tcG9uZW50c1xuICAgICogQHJldHVybiB7UGhhc2VyLkdyb3VwLmRlc3Ryb3l9XG4gICAgKiBAb3ZlcnJpZGVcbiAgICAqL1xuICAgIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlbW92ZUFsbENvbXBvbmVudHMoKTtcbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuICAgIC8qKlxuICAgICogaW5pdGlhbGl6ZSB2YXJpYWJsZXNcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHsgfVxuXG4gICAgLyoqXG4gICAgKiBhZGQgdmlzdWFsIGVsZW1lbnRzXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHJvdGVjdGVkIGJ1aWxkSW50ZXJmYWNlKCk6IHZvaWQgeyB9XG5cbiAgICAvKipcbiAgICAqIHVwZGF0ZXMgdGhlIGludGVybmFsIGxpc3Qgb2YgY29tcG9uZW50IGtleXMgKHNvIHdlIGRvbid0IGhhdmUgdG8gY2FsbCBPYmplY3Qua2V5cygpIGFsbCB0aGUgdGltZSlcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwcml2YXRlIF91cGRhdGVDb21wb25lbnRLZXlzKCkge1xuICAgICAgICB0aGlzLl9jb21wb25lbnRLZXlzID0gT2JqZWN0LmtleXModGhpcy5fY29tcG9uZW50cyk7XG4gICAgICAgIHRoaXMuX2hhc0NvbXBvbmVudHMgPSB0aGlzLl9jb21wb25lbnRLZXlzLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICAvKipcbiAgICAqIGF0dGFjaGVzIGEgbGlzdCBvZiBjb21wb25lbnRzIHRvIHRoZSBEaWpvbi5VSUdyb3VwXG4gICAgKiBAcGFyYW0ge0FycmF5fSBjb21wb25lbnRzIHRoZSBsaXN0IG9mIGNvbXBvbmVudHMgdG8gYWRkXG4gICAgKi9cbiAgICBwdWJsaWMgYWRkQ29tcG9uZW50cyA9IGZ1bmN0aW9uIChjb21wb25lbnRzOiBDb21wb25lbnRbXSkge1xuICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMubGVuZ3RoID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRGlqb24uVUlHcm91cCBjb21wb25lbnRzIG11c3QgYmUgYW4gYXJyYXknKTtcblxuICAgICAgICB3aGlsZSAoY29tcG9uZW50cy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoY29tcG9uZW50cy5zaGlmdCgpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgKiBhdHRhY2hlcyBhIGNvbXBvbmVudCB0byB0aGUgRGlqb24uVUlHcm91cFxuICAgICogQHBhcmFtIHtkaWpvbi5Db21wb25lbnR9IGNvbXBvbmVudCB0byBiZSBhdHRhY2hlZFxuICAgICovXG4gICAgcHVibGljIGFkZENvbXBvbmVudChjb21wb25lbnQ6IENvbXBvbmVudCk6IENvbXBvbmVudCB7XG4gICAgICAgIGNvbXBvbmVudC5zZXRPd25lcih0aGlzKTtcbiAgICAgICAgY29tcG9uZW50LmluaXQoKTtcbiAgICAgICAgY29tcG9uZW50LmJ1aWxkSW50ZXJmYWNlKCk7XG5cbiAgICAgICAgdGhpcy5fY29tcG9uZW50c1tjb21wb25lbnQubmFtZV0gPSBjb21wb25lbnQ7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvbXBvbmVudEtleXMoKTtcblxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAqIGl0ZXJhdGVzIHRocm91Z2ggdGhlIGxpc3Qgb2YgY29tcG9uZW50cyBhbmQgdXBkYXRlcyBlYWNoIG9uZVxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyB1cGRhdGVDb21wb25lbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9jb21wb25lbnRLZXlzLmZvckVhY2goXG4gICAgICAgICAgICBjb21wb25lbnROYW1lID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnROYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHVwZGF0ZXMgYW4gYXR0YWNoZWQgY29tcG9uZW50IChjYWxscyBjb21wb25lbnQudXBkYXRlKCkpXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGNvbXBvbmVudE5hbWUgdGhlIG5hbWUgb2YgdGhlIGNvbXBvbmVudCB0byB1cGRhdGVcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudE5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLl9jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogcmVtb3ZlcyBhbGwgdGhlIGNvbXBvbmVudHMgY3VycmVudGx5IGF0dGFjaGVkXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIHJlbW92ZUFsbENvbXBvbmVudHMoKSB7XG4gICAgICAgIHdoaWxlICh0aGlzLl9jb21wb25lbnRLZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ29tcG9uZW50KHRoaXMuX2NvbXBvbmVudEtleXMucG9wKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiByZW1vdmVzIGEgc3BlY2lmaWMgY29tcG9uZW50XG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGNvbXBvbmVudE5hbWUgdGhlIG5hbWUgb2YgdGhlIGNvbXBvbmVudCB0byByZW1vdmVcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgcmVtb3ZlQ29tcG9uZW50KGNvbXBvbmVudE5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbXBvbmVudHNbY29tcG9uZW50TmFtZV0gPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHNbY29tcG9uZW50TmFtZV0uZGVzdHJveSgpO1xuICAgICAgICB0aGlzLl9jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdID0gbnVsbDtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2NvbXBvbmVudHNbY29tcG9uZW50TmFtZV07XG5cbiAgICAgICAgdGhpcy5fdXBkYXRlQ29tcG9uZW50S2V5cygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBmbGF0dGVuKGRlbGF5OiBudW1iZXIgPSAwKTogdm9pZCB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jYWNoZUFzQml0bWFwID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoZGVsYXksICgpID0+IHsgdGhpcy5jYWNoZUFzQml0bWFwID0gdHJ1ZSB9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB1bkZsYXR0ZW4oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2FjaGVBc0JpdG1hcCA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCByZXNvbHV0aW9uKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHR1cmUuYmFzZVRleHR1cmUucmVzb2x1dGlvbjtcbiAgICB9XG59IiwiaW1wb3J0IHtTcHJpdGV9IGZyb20gJy4vU3ByaXRlJztcblxuZXhwb3J0IGNsYXNzIEludmlzaWJsZUJ1dHRvbiBleHRlbmRzIFNwcml0ZSB7XG4gICAgcHJpdmF0ZSBfaGl0V2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIF9oaXRIZWlnaHQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIHc6IG51bWJlciwgaDogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKHgsIHksIG51bGwsIG51bGwsIG5hbWUpO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdGhpcy5idWlsZEludGVyZmFjZSgpO1xuICAgICAgICB0aGlzLnNldFNpemUodywgaCk7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRFbmFibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYnVpbGRJbnRlcmZhY2UoKSB7XG4gICAgICAgIHRoaXMuX2FkZEhpdFJlY3QoKTtcbiAgICB9XG5cbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICBwcml2YXRlIF9hZGRIaXRSZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5faGl0V2lkdGggPiAwICYmIHRoaXMuX2hpdEhlaWdodCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuaGl0QXJlYSA9IG5ldyBQaGFzZXIuUmVjdGFuZ2xlKDAsIDAsIHRoaXMuX2hpdFdpZHRoLCB0aGlzLl9oaXRIZWlnaHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICBwdWJsaWMgc2V0U2l6ZSh3LCBoKSB7XG4gICAgICAgIHRoaXMuX2hpdFdpZHRoID0gdyB8fCAwO1xuICAgICAgICB0aGlzLl9oaXRIZWlnaHQgPSBoIHx8IDA7XG5cbiAgICAgICAgdGhpcy5fYWRkSGl0UmVjdCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7R3JvdXB9IGZyb20gJy4vR3JvdXAnO1xuXG5leHBvcnQgY2xhc3MgTmluZVNsaWNlSW1hZ2UgZXh0ZW5kcyBHcm91cCB7XG4gICAgcHJpdmF0ZSBfX3dpZHRoOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfX2hlaWdodDogbnVtYmVyO1xuICAgIHByaXZhdGUgX3NpemU6IG51bWJlcjtcblxuICAgIHByaXZhdGUgX2Rpc3BsYXlMYXllcjogUGhhc2VyLkdyb3VwO1xuICAgIHByaXZhdGUgX2lucHV0TGF5ZXI6IFBoYXNlci5Hcm91cDtcblxuICAgIHB1YmxpYyB0bDogUGhhc2VyLkltYWdlO1xuICAgIHB1YmxpYyB0OiBQaGFzZXIuVGlsZVNwcml0ZTtcbiAgICBwdWJsaWMgdHI6IFBoYXNlci5JbWFnZTtcbiAgICBwdWJsaWMgcjogUGhhc2VyLlRpbGVTcHJpdGU7XG4gICAgcHVibGljIGJyOiBQaGFzZXIuSW1hZ2U7XG4gICAgcHVibGljIGI6IFBoYXNlci5UaWxlU3ByaXRlO1xuICAgIHB1YmxpYyBibDogUGhhc2VyLkltYWdlO1xuICAgIHB1YmxpYyBsOiBQaGFzZXIuVGlsZVNwcml0ZTtcbiAgICBwdWJsaWMgdGlsZTogUGhhc2VyLlRpbGVTcHJpdGU7XG5cbiAgICBwcml2YXRlIF9pbnRlcmFjdGl2ZUJhY2tpbmc6IFBoYXNlci5JbWFnZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfaW5wdXRFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIF9jdXJyZW50Qm91bmRzOiBQSVhJLlJlY3RhbmdsZSA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHB1YmxpYyBrZXk6IHN0cmluZywgcHVibGljIHRleHR1cmVQYXRoOiBzdHJpbmcsIHB1YmxpYyBmaWxsTWlkZGxlOiBib29sZWFuID0gdHJ1ZSwgcHVibGljIHRvcEhlaWdodD86IG51bWJlciwgcHVibGljIHJpZ2h0V2lkdGg/OiBudW1iZXIsIHB1YmxpYyBib3R0b21IZWlnaHQ/OiBudW1iZXIsIHB1YmxpYyBsZWZ0V2lkdGg/OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoeCwgeSk7XG5cbiAgICAgICAgdGhpcy5fX3dpZHRoID0gTWF0aC5yb3VuZCh3aWR0aCk7XG4gICAgICAgIHRoaXMuX19oZWlnaHQgPSBNYXRoLnJvdW5kKGhlaWdodCk7XG5cbiAgICAgICAgdGhpcy5fYnVpbGQoKTtcbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmFkZCgxMCwgdGhpcy5kRmxhdHRlbiwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYnVpbGQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2lucHV0TGF5ZXIgPSB0aGlzLmFkZCh0aGlzLmdhbWUuYWRkLmdyb3VwKCkpO1xuICAgICAgICB0aGlzLl9kaXNwbGF5TGF5ZXIgPSB0aGlzLmFkZCh0aGlzLmdhbWUuYWRkLmdyb3VwKCkpO1xuXG4gICAgICAgIHRoaXMudGwgPSA8UGhhc2VyLkltYWdlPnRoaXMuX2Rpc3BsYXlMYXllci5hZGQodGhpcy5nYW1lLmFkZC5pbWFnZSgwLCAwLCB0aGlzLmtleSwgdGhpcy50ZXh0dXJlUGF0aCArICcvdGwnKSk7XG5cbiAgICAgICAgdGhpcy50ciA9IDxQaGFzZXIuSW1hZ2U+dGhpcy5fZGlzcGxheUxheWVyLmFkZCh0aGlzLmdhbWUuYWRkLmltYWdlKHRoaXMuX193aWR0aCwgMCwgdGhpcy5rZXksIHRoaXMudGV4dHVyZVBhdGggKyAnL3RyJykpO1xuXG4gICAgICAgIHRoaXMudCA9IDxQaGFzZXIuVGlsZVNwcml0ZT50aGlzLl9kaXNwbGF5TGF5ZXIuYWRkKHRoaXMuZ2FtZS5hZGQudGlsZVNwcml0ZShNYXRoLmZsb29yKHRoaXMudGwuZ2V0Qm91bmRzKCkud2lkdGgpLCAwLCBNYXRoLmNlaWwodGhpcy5fX3dpZHRoIC0gdGhpcy50bC5nZXRCb3VuZHMoKS53aWR0aCAtIHRoaXMudHIuZ2V0Qm91bmRzKCkud2lkdGgpLCB0aGlzLnRvcEhlaWdodCB8fCB0aGlzLnRsLmdldEJvdW5kcygpLmhlaWdodCwgdGhpcy5rZXksIHRoaXMudGV4dHVyZVBhdGggKyAnL3QnKSk7XG5cbiAgICAgICAgdGhpcy5sID0gPFBoYXNlci5UaWxlU3ByaXRlPnRoaXMuX2Rpc3BsYXlMYXllci5hZGQodGhpcy5nYW1lLmFkZC50aWxlU3ByaXRlKDAsIE1hdGguZmxvb3IodGhpcy50bC5nZXRCb3VuZHMoKS5oZWlnaHQpLCBNYXRoLmNlaWwodGhpcy5sZWZ0V2lkdGggfHwgdGhpcy50bC5nZXRCb3VuZHMoKS53aWR0aCksIDEwMCwgdGhpcy5rZXksIHRoaXMudGV4dHVyZVBhdGggKyAnL2wnKSk7XG5cbiAgICAgICAgdGhpcy5ibCA9IDxQaGFzZXIuSW1hZ2U+dGhpcy5fZGlzcGxheUxheWVyLmFkZCh0aGlzLmdhbWUuYWRkLmltYWdlKDAsIHRoaXMuX19oZWlnaHQsIHRoaXMua2V5LCB0aGlzLnRleHR1cmVQYXRoICsgJy9ibCcpKTtcblxuICAgICAgICB0aGlzLmwuaGVpZ2h0ID0gTWF0aC5jZWlsKHRoaXMuX19oZWlnaHQgLSB0aGlzLnRsLmdldEJvdW5kcygpLmhlaWdodCAtIHRoaXMuYmwuZ2V0Qm91bmRzKCkuaGVpZ2h0KTtcblxuICAgICAgICB0aGlzLmIgPSA8UGhhc2VyLlRpbGVTcHJpdGU+dGhpcy5fZGlzcGxheUxheWVyLmFkZCh0aGlzLmdhbWUuYWRkLnRpbGVTcHJpdGUoTWF0aC5mbG9vcih0aGlzLmJsLmdldEJvdW5kcygpLndpZHRoKSwgdGhpcy5fX2hlaWdodCwgMTAwLCB0aGlzLmJvdHRvbUhlaWdodCB8fCB0aGlzLmJsLmdldEJvdW5kcygpLmhlaWdodCwgdGhpcy5rZXksIHRoaXMudGV4dHVyZVBhdGggKyAnL2InKSk7XG5cbiAgICAgICAgdGhpcy5iciA9IDxQaGFzZXIuSW1hZ2U+dGhpcy5fZGlzcGxheUxheWVyLmFkZCh0aGlzLmdhbWUuYWRkLmltYWdlKHRoaXMuX193aWR0aCwgdGhpcy5fX2hlaWdodCwgdGhpcy5rZXksIHRoaXMudGV4dHVyZVBhdGggKyAnL2JyJykpO1xuXG4gICAgICAgIHRoaXMuYi53aWR0aCA9IE1hdGguY2VpbCh0aGlzLl9fd2lkdGggLSB0aGlzLmJsLmdldEJvdW5kcygpLndpZHRoIC0gdGhpcy5ici5nZXRCb3VuZHMoKS53aWR0aCk7XG4gICAgICAgIHRoaXMuciA9IDxQaGFzZXIuVGlsZVNwcml0ZT50aGlzLl9kaXNwbGF5TGF5ZXIuYWRkKHRoaXMuZ2FtZS5hZGQudGlsZVNwcml0ZSh0aGlzLl9fd2lkdGgsIE1hdGguZmxvb3IodGhpcy50ci5nZXRCb3VuZHMoKS5oZWlnaHQpLCBNYXRoLmNlaWwodGhpcy5yaWdodFdpZHRoIHx8IHRoaXMudHIuZ2V0Qm91bmRzKCkud2lkdGgpLCBNYXRoLmNlaWwodGhpcy5fX2hlaWdodCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkuaGVpZ2h0IC0gdGhpcy5ici5nZXRCb3VuZHMoKS5oZWlnaHQpLCB0aGlzLmtleSwgdGhpcy50ZXh0dXJlUGF0aCArICcvcicpKTtcblxuICAgICAgICB0aGlzLnRyLnNldFBpdm90KCd0cicpO1xuICAgICAgICB0aGlzLnIuc2V0UGl2b3QoJ3RyJyk7XG5cbiAgICAgICAgdGhpcy5ici5zZXRQaXZvdCgnYnInKTtcbiAgICAgICAgdGhpcy5iLnNldFBpdm90KCdibCcpO1xuICAgICAgICB0aGlzLmJsLnNldFBpdm90KCdibCcpO1xuXG4gICAgICAgIGlmICh0aGlzLmZpbGxNaWRkbGUpIHtcbiAgICAgICAgICAgIHRoaXMudGlsZSA9IDxQaGFzZXIuVGlsZVNwcml0ZT50aGlzLl9kaXNwbGF5TGF5ZXIuYWRkKHRoaXMuZ2FtZS5hZGQudGlsZVNwcml0ZSh0aGlzLnRsLmdldEJvdW5kcygpLndpZHRoIC0gMSwgdGhpcy50bC5nZXRCb3VuZHMoKS5oZWlnaHQgLSAxLCB0aGlzLl9fd2lkdGggLSB0aGlzLnRsLmdldEJvdW5kcygpLndpZHRoIC0gdGhpcy50ci5nZXRCb3VuZHMoKS53aWR0aCArIDIsIHRoaXMuX19oZWlnaHQgLSB0aGlzLnRsLmdldEJvdW5kcygpLmhlaWdodCAtIHRoaXMuYnIuZ2V0Qm91bmRzKCkuaGVpZ2h0ICsgNCwgdGhpcy5rZXksIHRoaXMudGV4dHVyZVBhdGggKyAnL3RpbGUnKSk7XG4gICAgICAgICAgICB0aGlzLnNlbmRUb0JhY2sodGhpcy50aWxlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2FkZEludGVyYWN0aXZlQmFja2luZygpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZ2Z4ID0gdGhpcy5nYW1lLmFkZC5ncmFwaGljcygpO1xuICAgICAgICBnZnguYmVnaW5GaWxsKDB4RkYwMDAwLCAwKTtcbiAgICAgICAgZ2Z4LmRyYXdSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLl9fd2lkdGgsIHRoaXMuX19oZWlnaHQpO1xuICAgICAgICBnZnguZW5kRmlsbCgpO1xuXG4gICAgICAgIHRoaXMuX2ludGVyYWN0aXZlQmFja2luZyA9IHRoaXMuX2lucHV0TGF5ZXIuYWRkKHRoaXMuZ2FtZS5hZGQuaW1hZ2UoMCwgMCwgZ2Z4LmdlbmVyYXRlVGV4dHVyZSgpKSk7XG5cbiAgICAgICAgdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nLmlucHV0RW5hYmxlZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5nYW1lLndvcmxkLnJlbW92ZShnZngpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NldFNpemUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZFVuZmxhdHRlbigpO1xuXG4gICAgICAgIHRoaXMudC53aWR0aCA9IHRoaXMuYi53aWR0aCA9IE1hdGguY2VpbCh0aGlzLl9fd2lkdGggLSB0aGlzLnRsLmdldEJvdW5kcygpLndpZHRoIC0gdGhpcy50ci5nZXRCb3VuZHMoKS53aWR0aCB8IDApO1xuICAgICAgICB0aGlzLnIueCA9IHRoaXMudHIueCA9IHRoaXMuYnIueCA9IHRoaXMuX193aWR0aCB8IDA7XG4gICAgICAgIHRoaXMubC5oZWlnaHQgPSB0aGlzLnIuaGVpZ2h0ID0gKHRoaXMuX19oZWlnaHQgLSB0aGlzLnRyLmdldEJvdW5kcygpLmhlaWdodCAtIHRoaXMuYmwuZ2V0Qm91bmRzKCkuaGVpZ2h0IHwgMCk7XG4gICAgICAgIHRoaXMuYmwueSA9IHRoaXMuYi55ID0gdGhpcy5ici55ID0gdGhpcy5fX2hlaWdodCB8IDA7XG5cbiAgICAgICAgaWYgKHRoaXMuZmlsbE1pZGRsZSkge1xuICAgICAgICAgICAgdGhpcy50aWxlLndpZHRoID0gTWF0aC5jZWlsKHRoaXMuX193aWR0aCAtIHRoaXMudHIuZ2V0Qm91bmRzKCkud2lkdGggLSB0aGlzLnRsLmdldEJvdW5kcygpLndpZHRoICsgNClcbiAgICAgICAgICAgIHRoaXMudGlsZS5oZWlnaHQgPSBNYXRoLmNlaWwodGhpcy5fX2hlaWdodCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkuaGVpZ2h0IC0gdGhpcy5ibC5nZXRCb3VuZHMoKS5oZWlnaHQgKyA0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9pbnRlcmFjdGl2ZUJhY2tpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25ldyB3aWR0aCcsIHRoaXMuX193aWR0aClcbiAgICAgICAgICAgIHRoaXMuX2ludGVyYWN0aXZlQmFja2luZy53aWR0aCA9IHRoaXMuX193aWR0aDtcbiAgICAgICAgICAgIHRoaXMuX2ludGVyYWN0aXZlQmFja2luZy5oZWlnaHQgPSB0aGlzLl9faGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmFkZCgxMCwgdGhpcy5kRmxhdHRlbiwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYWRkSW5wdXQoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGRJbnRlcmFjdGl2ZUJhY2tpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3JlbW92ZUlucHV0KCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2ludGVyYWN0aXZlQmFja2luZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2ludGVyYWN0aXZlQmFja2luZy5pbnB1dEVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZFVuZmxhdHRlbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZGlzcGxheUxheWVyLmNhY2hlQXNCaXRtYXAgPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBkRmxhdHRlbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZGlzcGxheUxheWVyLmNhY2hlQXNCaXRtYXAgPSB0cnVlOy8vdGhpcy5nYW1lLnJlbmRlclR5cGUgPT09IFBoYXNlci5XRUJHTDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlucHV0RW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9pbnB1dEVuYWJsZWQgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuX2lucHV0RW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5fYWRkSW5wdXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbW92ZUlucHV0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGV2ZW50cygpOiBQaGFzZXIuRXZlbnRzIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnRlcmFjdGl2ZUJhY2tpbmcgfHwgIXRoaXMuX2ludGVyYWN0aXZlQmFja2luZy5pbnB1dEVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnRlcmFjdGl2ZUJhY2tpbmcuZXZlbnRzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaW5wdXQoKTogUGhhc2VyLklucHV0SGFuZGxlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnRlcmFjdGl2ZUJhY2tpbmcuaW5wdXQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBoU2l6ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX193aWR0aCA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9zZXRTaXplKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCB2U2l6ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX19oZWlnaHQgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fc2V0U2l6ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaFNpemUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX193aWR0aDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHZTaXplKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9faGVpZ2h0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRTaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX193aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLl9faGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLl9zZXRTaXplKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpbnRlcmFjdGl2ZUJhY2tpbmcoKTpQaGFzZXIuSW1hZ2V7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnRlcmFjdGl2ZUJhY2tpbmc7XG4gICAgfVxufSIsImltcG9ydCB7QXBwbGljYXRpb259IGZyb20gJy4uL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7R2FtZX0gZnJvbSAnLi4vY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBTcGluZSBleHRlbmRzIFBJWEkuc3BpbmUuU3BpbmUge1xuICAgIHB1YmxpYyBzdGF0aWMgREVGQVVMVF9TUEVFRDogbnVtYmVyID0gMC4wMTY3Oy8vIDYwIGZwcztcbiAgICBwdWJsaWMgZGVidWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgZ2FtZTogR2FtZTtcbiAgICBwcml2YXRlIF9jcmVhdGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIG9uQ3JlYXRlOiBQaGFzZXIuU2lnbmFsID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICBwdWJsaWMgb25BbmltYXRpb25Db21wbGV0ZTogUGhhc2VyLlNpZ25hbCA9IG51bGw7XG4gICAgcHVibGljIG9uTWVzaFN3YXA6IFBoYXNlci5TaWduYWwgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuXG4gICAgcHJvdGVjdGVkIF9jYW5VcGRhdGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByb3RlY3RlZCBfcGF1c2VkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIF9zcGVlZDogbnVtYmVyID0gMTtcbiAgICBwcm90ZWN0ZWQgX3NrZWxldG9uU2NhbGU6IG51bWJlciA9IDE7XG5cbiAgICBwcm90ZWN0ZWQgX2JvdW5kc09mZnNldDogUGhhc2VyLlBvaW50ID0gbmV3IFBoYXNlci5Qb2ludCgwLCAwKTtcbiAgICBwcm90ZWN0ZWQgX2JvdW5kc1dpZHRoU2NhbGU6IG51bWJlciA9IDE7XG4gICAgcHJvdGVjdGVkIF9ib3VuZHNIZWlnaHRTY2FsZTogbnVtYmVyID0gMTtcbiAgICBwcm90ZWN0ZWQgX2N1cnJlbnRCb3VuZHM6IFBJWEkuUmVjdGFuZ2xlID0gbmV3IFBJWEkuUmVjdGFuZ2xlKCk7XG5cbiAgICBwdWJsaWMgcGh5c2ljc1Nwcml0ZTogUGhhc2VyLlNwcml0ZTtcbiAgICBwcm90ZWN0ZWQgX3BoeXNpY3NPZmZzZXQ6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSA9IHsgeDogMCwgeTogMCB9O1xuICAgIHByb3RlY3RlZCBfcGh5c2ljc0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHB1YmxpYyBub25NZXNoVmVyc2lvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGFzc2V0TmFtZTogc3RyaW5nID0gJycsIHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIHB1YmxpYyBza2VsZXRvblNjYWxlOiBudW1iZXIgPSAxKSB7XG4gICAgICAgIHN1cGVyKEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZSwgeCwgeSwgU3BpbmUuY3JlYXRlU3BpbmVEYXRhKFNwaW5lLkxPQURfTk9OX01FU0ggPyAoYXNzZXROYW1lICsgU3BpbmUuTk9OX01FU0hfU1VGRklYKSA6IGFzc2V0TmFtZSwgc2tlbGV0b25TY2FsZSkpO1xuXG4gICAgICAgIHRoaXMuX3NrZWxldG9uU2NhbGUgPSBza2VsZXRvblNjYWxlO1xuXG4gICAgICAgIGlmIChTcGluZS5MT0FEX05PTl9NRVNIKSB7XG4gICAgICAgICAgICB0aGlzLm5vbk1lc2hWZXJzaW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpbml0aWFsaXplIHN0YXRpY1xuICAgICAgICBTcGluZS5pbml0aWFsaXplKCk7XG4gICAgICAgIFNwaW5lLm9uTm9uTWVzaEZQUy5hZGRPbmNlKHRoaXMubG9hZE5vbk1lc2hWZXJzaW9uLCB0aGlzKTtcblxuICAgICAgICB0aGlzLm5hbWUgPSBhc3NldE5hbWU7XG4gICAgICAgIHRoaXMuc2tlbGV0b24uc2V0VG9TZXR1cFBvc2UoKTtcbiAgICAgICAgdGhpcy5fY3JlYXRlQm91bmRzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlKDApO1xuICAgICAgICB0aGlzLmF1dG9VcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkFuaW1hdGlvbkNvbXBsZXRlID0gdGhpcy5zdGF0ZS5vbkFuaW1hdGlvbkNvbXBsZXRlO1xuICAgICAgICB0aGlzLmhpdEFyZWEgPSBuZXcgUGhhc2VyLlJlY3RhbmdsZSgwLCAtIHRoaXMuc2tlbGV0b24uZGF0YS5oZWlnaHQsIHRoaXMuc2tlbGV0b24uZGF0YS53aWR0aCwgdGhpcy5za2VsZXRvbi5kYXRhLmhlaWdodCk7XG4gICAgICAgIC8vdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmFkZCgxMDAsIHRoaXMuX29uQ3JlYXRlSW50ZXJuYWwsIHRoaXMpO1xuXG4gICAgICAgIGlmIChTcGluZS5BVVRPX01FU0ggJiYgU3BpbmUuTE9BRF9OT05fTUVTSCAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgU3BpbmUuZGV0ZWN0QXV0b01lc2goKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX29uQ3JlYXRlSW50ZXJuYWwoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NyZWF0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9jcmVhdGUoKTtcbiAgICAgICAgdGhpcy5vbkNyZWF0ZS5kaXNwYXRjaCgpO1xuICAgICAgICB0aGlzLl9jYW5VcGRhdGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfY3JlYXRlKCk6IHZvaWQge1xuICAgICAgICAvLyB0byBvdmVycmlkZVxuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNrZWxldG9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuc3RhdGVEYXRhID0gbnVsbDtcbiAgICAgICAgdGhpcy5zcGluZURhdGEgPSBudWxsO1xuXG4gICAgICAgIGlmICh0aGlzLnNsb3RDb250YWluZXJzICYmIHRoaXMuc2xvdENvbnRhaW5lcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMuc2xvdENvbnRhaW5lcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2xvdENvbnRhaW5lcnMuc2hpZnQoKS5kZXN0cm95KHRydWUsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2xvdENvbnRhaW5lcnMgPSBudWxsO1xuICAgICAgICB0aGlzLnJlbW92ZUNoaWxkcmVuKCk7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIgPSBTcGluZS5ERUZBVUxUX1NQRUVEKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fY3JlYXRlZCAmJiB0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgdGhpcy5fb25DcmVhdGVJbnRlcm5hbCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9wYXVzZWQgfHwgIXRoaXMuX2NhblVwZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX3BoeXNpY3NFbmFibGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLnBoeXNpY3NTcHJpdGUuYm9keS5wb3NpdGlvbi54ICsgdGhpcy5fcGh5c2ljc09mZnNldC54O1xuICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5waHlzaWNzU3ByaXRlLmJvZHkucG9zaXRpb24ueSArIHRoaXMuX3BoeXNpY3NPZmZzZXQueSArICh0aGlzLnNjYWxlLnkgPiAwID8gdGhpcy5waHlzaWNzU3ByaXRlLmJvZHkuaGVpZ2h0IDogMCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci51cGRhdGUodGhpcy5fc3BlZWQgKiBkdCk7XG5cblxuICAgIH1cblxuICAgIHB1YmxpYyBpbml0UGh5c2ljcyh0eXBlOiBudW1iZXIsIG9mZnNldDogeyB4PzogbnVtYmVyLCB5PzogbnVtYmVyIH0pOiBib29sZWFuIHtcbiAgICAgICAgdGhpcy5fY3JlYXRlQm91bmRzKCk7XG4gICAgICAgIGlmICh0eXBlICE9IFBoYXNlci5QaHlzaWNzLkFSQ0FERSAmJlxuICAgICAgICAgICAgdHlwZSAhPSBQaGFzZXIuUGh5c2ljcy5OSU5KQSAmJlxuICAgICAgICAgICAgdHlwZSAhPSBQaGFzZXIuUGh5c2ljcy5QMkpTKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGlmIChvZmZzZXQueCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9waHlzaWNzT2Zmc2V0LnggPSBvZmZzZXQueDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvZmZzZXQueSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9waHlzaWNzT2Zmc2V0LnkgPSBvZmZzZXQueTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGh5c2ljc1Nwcml0ZSA9IDxQaGFzZXIuU3ByaXRlPnRoaXMucGFyZW50LmFkZENoaWxkKHRoaXMuZ2FtZS5hZGQuc3ByaXRlKHRoaXMueCArIHRoaXMuX3BoeXNpY3NPZmZzZXQueCwgdGhpcy55IC0gdGhpcy5fcGh5c2ljc09mZnNldC55KSk7XG5cbiAgICAgICAgdGhpcy5waHlzaWNzU3ByaXRlLm5hbWUgPSB0aGlzLmFzc2V0TmFtZSArICdfcGh5c2ljc1Nwcml0ZSc7XG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmVuYWJsZSh0aGlzLnBoeXNpY3NTcHJpdGUsIHR5cGUpO1xuICAgICAgICB0aGlzLl9waHlzaWNzRW5hYmxlZCA9ICh0aGlzLnBoeXNpY3NTcHJpdGUuYm9keSAhPT0gbnVsbCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9waHlzaWNzRW5hYmxlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzYWJsZVBoeXNpY3MoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3BoeXNpY3NFbmFibGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIGVuYWJsZVBoeXNpY3MoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3BoeXNpY3NFbmFibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZE5vbk1lc2hWZXJzaW9uKCk6IHZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLm5vbk1lc2hWZXJzaW9uID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8vIHNldHMgdGhlIG5vbk1lc2hWZXJzaW9uIGZsYWcgc28gdGhpcyBtZXRob2QgZG9lc24ndCBydW4gbW9yZSB0aGFuIG9uY2VcbiAgICAgICAgLy90aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub25NZXNoVmVyc2lvbiA9IHRydWU7XG4gICAgICAgIHRoaXMuYWxwaGEgPSAwO1xuICAgICAgICAvLyBzdG9yZSB0aGUgdHJhY2tzIGFuZCBzaWduYWxzXG4gICAgICAgIGNvbnN0IHRyYWNrcyA9IHRoaXMuc3RhdGUudHJhY2tzO1xuICAgICAgICBjb25zdCBzaWduYWw6IFBoYXNlci5TaWduYWwgPSB0aGlzLnN0YXRlLm9uQW5pbWF0aW9uQ29tcGxldGU7XG5cbiAgICAgICAgLy8gZGVzdHJveSB0aGUgc2xvdCBjb250YWluZXJzXG4gICAgICAgIHdoaWxlICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICg8UGhhc2VyLkdyb3VwPnRoaXMucmVtb3ZlQ2hpbGRBdCgwKSkuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlc2V0IHRoZSBzcGluZSBkYXRhXG4gICAgICAgIHRoaXMuc2V0dXAoU3BpbmUuY3JlYXRlU3BpbmVEYXRhKHRoaXMubmFtZSArIFNwaW5lLk5PTl9NRVNIX1NVRkZJWCwgdGhpcy5fc2tlbGV0b25TY2FsZSkpO1xuICAgICAgICB0aGlzLnN0YXRlLmFwcGx5KHRoaXMuc2tlbGV0b24pO1xuXG4gICAgICAgIC8vIHJlc2V0IHRoZSBzdGF0ZVxuICAgICAgICB0aGlzLnN0YXRlLnRyYWNrcyA9IHRyYWNrcztcblxuICAgICAgICAvLyByZXNldCB0aGUgc2lnbmFsc1xuICAgICAgICBpZiAoc2lnbmFsICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9uQW5pbWF0aW9uQ29tcGxldGUucmVtb3ZlQWxsKCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9uQW5pbWF0aW9uQ29tcGxldGUuZGlzcG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5vbkFuaW1hdGlvbkNvbXBsZXRlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMub25BbmltYXRpb25Db21wbGV0ZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9uQW5pbWF0aW9uQ29tcGxldGUgPSBzaWduYWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9uQW5pbWF0aW9uQ29tcGxldGUgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25BbmltYXRpb25Db21wbGV0ZSA9IHRoaXMuc3RhdGUub25BbmltYXRpb25Db21wbGV0ZTtcblxuICAgICAgICAvLyBmb3JjZSBhbiB1cGRhdGVcbiAgICAgICAgLy90aGlzLnVwZGF0ZSgpO1xuXG4gICAgICAgIC8vIGNsZWFyIHRoZSBtZXNoZWQgc3BpbmUgYXNzZXRzXG4gICAgICAgICg8R2FtZT50aGlzLmdhbWUpLmFzc2V0LmNsZWFyU3BpbmVBc3NldCh0aGlzLm5hbWUpO1xuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKDEwMCwgKCkgPT4geyB0aGlzLmFscGhhID0gMSB9LCB0aGlzKTtcblxuICAgICAgICB0aGlzLm9uTWVzaFN3YXAuZGlzcGF0Y2goKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZVNwaW5lRGF0YShhc3NldE5hbWU6IHN0cmluZywgc2tlbGV0b25TY2FsZTogbnVtYmVyID0gMSk6IGFueSB7XG4gICAgICAgIGNvbnN0IHNwaW5lID0gUElYSS5zcGluZTtcbiAgICAgICAgY29uc3Qgc3BpbmVBdGxhcyA9IG5ldyBzcGluZS5TcGluZVJ1bnRpbWUuQXRsYXMoQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lLmNhY2hlLmdldFRleHQoYXNzZXROYW1lICsgJy5hdGxhcycpLCB0aGlzLmF0bGFzQ2FsbGJhY2tGdW5jdGlvbik7XG4gICAgICAgIGNvbnN0IHNwaW5lSnNvblBhcnNlciA9IG5ldyBzcGluZS5TcGluZVJ1bnRpbWUuU2tlbGV0b25Kc29uUGFyc2VyKG5ldyBzcGluZS5TcGluZVJ1bnRpbWUuQXRsYXNBdHRhY2htZW50UGFyc2VyKHNwaW5lQXRsYXMpLCBza2VsZXRvblNjYWxlKTtcbiAgICAgICAgY29uc3Qgc2tlbGV0b25EYXRhID0gc3BpbmVKc29uUGFyc2VyLnJlYWRTa2VsZXRvbkRhdGEoQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lLmNhY2hlLmdldEpTT04oYXNzZXROYW1lICsgJy5qc29uJykpO1xuICAgICAgICByZXR1cm4gc2tlbGV0b25EYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXRsYXNDYWxsYmFja0Z1bmN0aW9uKGxpbmUsIGNhbGxiYWNrKSB7XG4gICAgICAgIC8vY2FsbGJhY2soUElYSS5CYXNlVGV4dHVyZS5mcm9tSW1hZ2UoJ2Fzc2V0cy9zcGluZS8nICsgbGluZSkpO1xuICAgICAgICBjb25zdCBsaW5lQXJyID0gbGluZS5zcGxpdCgnQCcgKyBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUucmVzb2x1dGlvbiArICd4Jyk7XG4gICAgICAgIGNvbnN0IHVybCA9IGxpbmVBcnIuam9pbignJyk7XG5cbiAgICAgICAgY2FsbGJhY2sobmV3IFBJWEkuQmFzZVRleHR1cmUoQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lLmNhY2hlLmdldEltYWdlKHVybCksIFBJWEkuc2NhbGVNb2Rlcy5ERUZBVUxUKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBwYXVzZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXVzZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwYXVzZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fcGF1c2VkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzcGVlZCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3BlZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzcGVlZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3NwZWVkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBib3VuZHNPZmZzZXQob2Zmc2V0OiBQaGFzZXIuUG9pbnQpIHtcbiAgICAgICAgdGhpcy5fYm91bmRzT2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICB0aGlzLl9jdXJyZW50Qm91bmRzID0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGJvdW5kc09mZnNldCgpOiBQaGFzZXIuUG9pbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5fYm91bmRzT2Zmc2V0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYm91bmRzV2lkdGhTY2FsZShzY2FsZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2JvdW5kc1dpZHRoU2NhbGUgPSBzY2FsZTtcbiAgICAgICAgdGhpcy5fY3VycmVudEJvdW5kcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBib3VuZHNXaWR0aFNjYWxlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ib3VuZHNXaWR0aFNjYWxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYm91bmRzSGVpZ2h0U2NhbGUoc2NhbGU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9ib3VuZHNIZWlnaHRTY2FsZSA9IHNjYWxlO1xuICAgICAgICB0aGlzLl9jdXJyZW50Qm91bmRzID0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGJvdW5kc0hlaWdodFNjYWxlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ib3VuZHNIZWlnaHRTY2FsZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Qm91bmRzKCk6IFBJWEkuUmVjdGFuZ2xlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRCb3VuZHMgfHwgdGhpcy5fY3JlYXRlQm91bmRzKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVCb3VuZHMoKTogUElYSS5SZWN0YW5nbGUge1xuICAgICAgICB0aGlzLl9jdXJyZW50Qm91bmRzID0gbmV3IFBJWEkuUmVjdGFuZ2xlKHRoaXMueCArIHRoaXMuX2JvdW5kc09mZnNldC54ICogdGhpcy5zY2FsZS54LCB0aGlzLnkgLSAodGhpcy5za2VsZXRvbi5kYXRhLmhlaWdodCAqIHRoaXMuc2NhbGUueSkgKyB0aGlzLl9ib3VuZHNPZmZzZXQueSAqIHRoaXMuc2NhbGUueSwgdGhpcy5za2VsZXRvbi5kYXRhLndpZHRoICogTWF0aC5hYnModGhpcy5zY2FsZS54KSAqIHRoaXMuYm91bmRzV2lkdGhTY2FsZSwgdGhpcy5za2VsZXRvbi5kYXRhLmhlaWdodCAqIE1hdGguYWJzKHRoaXMuc2NhbGUueSkgKiB0aGlzLmJvdW5kc0hlaWdodFNjYWxlKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudEJvdW5kcztcbiAgICB9XG5cbiAgICAvLyBhbHNvIHVwZGF0ZXMgdGhlIGJvdW5kc1xuICAgIHB1YmxpYyBzZXRTY2FsZSh4OiBudW1iZXIgPSBudWxsLCB5OiBudW1iZXIgPSBudWxsKSB7XG4gICAgICAgIGlmICh4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNjYWxlLnggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGlmICh5ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNjYWxlLnkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2N1cnJlbnRCb3VuZHMgPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Qm91bmRzKCkud2lkdGg7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Qm91bmRzKCkuaGVpZ2h0O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYm9keSgpOiBhbnkge1xuICAgICAgICBpZiAoIXRoaXMuX3BoeXNpY3NFbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5waHlzaWNzU3ByaXRlLmJvZHk7XG4gICAgfVxuXG4gICAgLy8gc3RhdGljIG1ldGhvZHNcbiAgICAvLyBhdXRvIG1lc2ggLyBub24tbWVzaCBhc3NldCBsb2FkaW5nXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBJTklUSUFMSVpFRDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCBzdGF0aWMgZ2FtZTogR2FtZSA9IG51bGw7XG4gICAgcHJvdGVjdGVkIHN0YXRpYyBub25NZXNoVGltZXI6IFBoYXNlci5UaW1lckV2ZW50ID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgc3RhdGljIG9uTm9uTWVzaEZQUzogUGhhc2VyLlNpZ25hbDtcblxuICAgIHB1YmxpYyBzdGF0aWMgTE9BRF9OT05fTUVTSDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIHN0YXRpYyBBVVRPX01FU0g6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHB1YmxpYyBzdGF0aWMgREVGQVVMVF9OT05fTUVTSF9TVUZGSVg6IHN0cmluZyA9ICdfbm9tZXNoJztcbiAgICBwdWJsaWMgc3RhdGljIE5PTl9NRVNIX1NVRkZJWDogc3RyaW5nID0gbnVsbDtcblxuICAgIHB1YmxpYyBzdGF0aWMgREVGQVVMVF9OT05fTUVTSF9GUFM6IG51bWJlciA9IDM1O1xuICAgIHB1YmxpYyBzdGF0aWMgTk9OX01FU0hfRlBTOiBudW1iZXIgPSBudWxsO1xuXG4gICAgcHVibGljIHN0YXRpYyBpbml0aWFsaXplKCk6IHZvaWQge1xuICAgICAgICBpZiAoU3BpbmUuSU5JVElBTElaRUQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBTcGluZS5JTklUSUFMSVpFRCA9IHRydWU7XG4gICAgICAgIFNwaW5lLmdhbWUgPSBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWU7XG4gICAgICAgIFNwaW5lLm9uTm9uTWVzaEZQUyA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBkZXRlY3RBdXRvTWVzaCgpOiB2b2lkIHtcbiAgICAgICAgU3BpbmUuZ2FtZS50aW1lLmFkdmFuY2VkVGltaW5nID0gdHJ1ZTtcbiAgICAgICAgU3BpbmUuZ2FtZS50aW1lLmV2ZW50cy5hZGQoMjAwMCwgU3BpbmUuY2hlY2tOb25NZXNoVGhyZXNob2xkLCBTcGluZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBkZXN0cm95Tm9uTWVzaFRpbWVyKCk6IHZvaWQge1xuICAgICAgICBpZiAoU3BpbmUubm9uTWVzaFRpbWVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICBTcGluZS5nYW1lLnRpbWUuZXZlbnRzLnJlbW92ZShTcGluZS5ub25NZXNoVGltZXIpO1xuICAgICAgICAgICAgU3BpbmUubm9uTWVzaFRpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGNoZWNrTm9uTWVzaFRocmVzaG9sZCgpOiB2b2lkIHtcbiAgICAgICAgU3BpbmUuZGVzdHJveU5vbk1lc2hUaW1lcigpO1xuICAgICAgICBTcGluZS5ub25NZXNoVGltZXIgPSBTcGluZS5nYW1lLnRpbWUuZXZlbnRzLnJlcGVhdCg1MDAsIDEwLCBTcGluZS5jaGVja0F1dG9NZXNoRlBTLCBTcGluZSk7XG4gICAgICAgIFNwaW5lLmdhbWUudGltZS5ldmVudHMuYWRkKDU1MDAsIFNwaW5lLmRpc2FibGVBZHZhbmNlZFRpbWluZywgU3BpbmUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY2hlY2tBdXRvTWVzaEZQUygpOiB2b2lkIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmdhbWUudGltZS5mcHMsIFNwaW5lLk5PTl9NRVNIX0ZQUylcbiAgICAgICAgaWYgKFNwaW5lLmdhbWUudGltZS5mcHMgPCBTcGluZS5OT05fTUVTSF9GUFMpIHtcbiAgICAgICAgICAgIFNwaW5lLmRlc3Ryb3lOb25NZXNoVGltZXIoKTtcbiAgICAgICAgICAgIFNwaW5lLkxPQURfTk9OX01FU0ggPSB0cnVlO1xuICAgICAgICAgICAgU3BpbmUub25Ob25NZXNoRlBTLmRpc3BhdGNoKCk7XG4gICAgICAgICAgICBTcGluZS5kaXNhYmxlQWR2YW5jZWRUaW1pbmcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZGlzYWJsZUFkdmFuY2VkVGltaW5nKCk6IHZvaWQge1xuICAgICAgICBTcGluZS5nYW1lLnRpbWUuYWR2YW5jZWRUaW1pbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldEF1dG9NZXNoKGVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlLCBub25NZXNoU3VmZml4OiBzdHJpbmcgPSBTcGluZS5ERUZBVUxUX05PTl9NRVNIX1NVRkZJWCwgbm9uTWVzaEZQUzogbnVtYmVyID0gU3BpbmUuREVGQVVMVF9OT05fTUVTSF9GUFMpIHtcbiAgICAgICAgU3BpbmUuQVVUT19NRVNIID0gZW5hYmxlZDtcbiAgICAgICAgU3BpbmUuTk9OX01FU0hfU1VGRklYID0gbm9uTWVzaFN1ZmZpeDtcbiAgICAgICAgU3BpbmUuTk9OX01FU0hfRlBTID0gbm9uTWVzaEZQUztcbiAgICB9XG59IiwiaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xuaW1wb3J0IHtHYW1lfSBmcm9tICcuLi9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFNwaW5lMiBleHRlbmRzIFBJWEkuc3BpbmUuU3BpbmUge1xuICAgIHB1YmxpYyBzdGF0aWMgREVGQVVMVF9TUEVFRDogbnVtYmVyID0gMC4wMTY3Oy8vIDYwIGZwcztcbiAgICBwdWJsaWMgZGVidWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgZ2FtZTogR2FtZTtcbiAgICBwcml2YXRlIF9jcmVhdGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIG9uQ3JlYXRlOiBQaGFzZXIuU2lnbmFsID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICBwdWJsaWMgb25BbmltYXRpb25Db21wbGV0ZTogUGhhc2VyLlNpZ25hbCA9IG51bGw7XG4gICAgcHVibGljIG9uTWVzaFN3YXA6IFBoYXNlci5TaWduYWwgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuXG4gICAgcHJvdGVjdGVkIF9jYW5VcGRhdGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByb3RlY3RlZCBfcGF1c2VkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIF9zcGVlZDogbnVtYmVyID0gMTtcbiAgICBwcm90ZWN0ZWQgX3NrZWxldG9uU2NhbGU6IG51bWJlciA9IDE7XG5cbiAgICBwcm90ZWN0ZWQgX2JvdW5kc09mZnNldDogUGhhc2VyLlBvaW50ID0gbmV3IFBoYXNlci5Qb2ludCgwLCAwKTtcbiAgICBwcm90ZWN0ZWQgX2JvdW5kc1dpZHRoU2NhbGU6IG51bWJlciA9IDE7XG4gICAgcHJvdGVjdGVkIF9ib3VuZHNIZWlnaHRTY2FsZTogbnVtYmVyID0gMTtcbiAgICBwcm90ZWN0ZWQgX2N1cnJlbnRCb3VuZHM6IFBJWEkuUmVjdGFuZ2xlID0gbmV3IFBJWEkuUmVjdGFuZ2xlKCk7XG5cbiAgICBwcm90ZWN0ZWQgX3BoeXNpY3NPZmZzZXQ6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSA9IHsgeDogMCwgeTogMCB9O1xuICAgIHByb3RlY3RlZCBfcGh5c2ljc0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHB1YmxpYyBub25NZXNoVmVyc2lvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGFzc2V0TmFtZTogc3RyaW5nID0gJycsIHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIHB1YmxpYyBza2VsZXRvblNjYWxlOiBudW1iZXIgPSAxKSB7XG4gICAgICAgIHN1cGVyKEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZSwgeCwgeSwgU3BpbmUyLmNyZWF0ZVNwaW5lRGF0YShTcGluZTIuTE9BRF9OT05fTUVTSCA/IChhc3NldE5hbWUgKyBTcGluZTIuTk9OX01FU0hfU1VGRklYKSA6IGFzc2V0TmFtZSwgc2tlbGV0b25TY2FsZSkpO1xuXG4gICAgICAgIHRoaXMuX3NrZWxldG9uU2NhbGUgPSBza2VsZXRvblNjYWxlO1xuXG4gICAgICAgIGlmIChTcGluZTIuTE9BRF9OT05fTUVTSCkge1xuICAgICAgICAgICAgdGhpcy5ub25NZXNoVmVyc2lvbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBzdGF0aWNcbiAgICAgICAgU3BpbmUyLmluaXRpYWxpemUoKTtcbiAgICAgICAgU3BpbmUyLm9uTm9uTWVzaEZQUy5hZGRPbmNlKHRoaXMubG9hZE5vbk1lc2hWZXJzaW9uLCB0aGlzKTtcblxuICAgICAgICB0aGlzLm5hbWUgPSBhc3NldE5hbWU7XG4gICAgICAgIHRoaXMuc2tlbGV0b24uc2V0VG9TZXR1cFBvc2UoKTtcbiAgICAgICAgdGhpcy5fY3JlYXRlQm91bmRzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlKDApO1xuICAgICAgICB0aGlzLmF1dG9VcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkFuaW1hdGlvbkNvbXBsZXRlID0gdGhpcy5zdGF0ZS5vbkFuaW1hdGlvbkNvbXBsZXRlO1xuICAgICAgICB0aGlzLmhpdEFyZWEgPSBuZXcgUGhhc2VyLlJlY3RhbmdsZSgwLCAtIHRoaXMuc2tlbGV0b24uZGF0YS5oZWlnaHQsIHRoaXMuc2tlbGV0b24uZGF0YS53aWR0aCwgdGhpcy5za2VsZXRvbi5kYXRhLmhlaWdodCk7XG4gICAgICAgIC8vdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmFkZCgxMDAsIHRoaXMuX29uQ3JlYXRlSW50ZXJuYWwsIHRoaXMpO1xuXG4gICAgICAgIGlmIChTcGluZTIuQVVUT19NRVNIICYmIFNwaW5lMi5MT0FEX05PTl9NRVNIICE9PSB0cnVlKSB7XG4gICAgICAgICAgICBTcGluZTIuZGV0ZWN0QXV0b01lc2goKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX29uQ3JlYXRlSW50ZXJuYWwoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NyZWF0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9jcmVhdGUoKTtcbiAgICAgICAgdGhpcy5vbkNyZWF0ZS5kaXNwYXRjaCgpO1xuICAgICAgICB0aGlzLl9jYW5VcGRhdGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfY3JlYXRlKCk6IHZvaWQge1xuICAgICAgICAvLyB0byBvdmVycmlkZVxuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNrZWxldG9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuc3RhdGVEYXRhID0gbnVsbDtcbiAgICAgICAgdGhpcy5zcGluZURhdGEgPSBudWxsO1xuXG4gICAgICAgIGlmICh0aGlzLnNsb3RDb250YWluZXJzICYmIHRoaXMuc2xvdENvbnRhaW5lcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMuc2xvdENvbnRhaW5lcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2xvdENvbnRhaW5lcnMuc2hpZnQoKS5kZXN0cm95KHRydWUsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2xvdENvbnRhaW5lcnMgPSBudWxsO1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZShkdDogbnVtYmVyID0gU3BpbmUyLkRFRkFVTFRfU1BFRUQpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jcmVhdGVkICYmIHRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9vbkNyZWF0ZUludGVybmFsKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3BhdXNlZCB8fCAhdGhpcy5fY2FuVXBkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci51cGRhdGUodGhpcy5fc3BlZWQgKiBkdCk7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXRQaHlzaWNzKHR5cGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICB0aGlzLl9jcmVhdGVCb3VuZHMoKTtcbiAgICAgICAgaWYgKHR5cGUgIT0gUGhhc2VyLlBoeXNpY3MuQVJDQURFICYmXG4gICAgICAgICAgICB0eXBlICE9IFBoYXNlci5QaHlzaWNzLk5JTkpBICYmXG4gICAgICAgICAgICB0eXBlICE9IFBoYXNlci5QaHlzaWNzLlAySlMpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBpZiAodHlwZSA9PT0gUGhhc2VyLlBoeXNpY3MuQVJDQURFKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlKHRoaXMsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmVuYWJsZSh0aGlzLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5fcGh5c2ljc0VuYWJsZWQgPSAodGhpcy5ib2R5ICE9PSBudWxsKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fcGh5c2ljc0VuYWJsZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGRpc2FibGVQaHlzaWNzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9waHlzaWNzRW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBlbmFibGVQaHlzaWNzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9waHlzaWNzRW5hYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWROb25NZXNoVmVyc2lvbigpOiB2b2lkIHtcblxuICAgICAgICBpZiAodGhpcy5ub25NZXNoVmVyc2lvbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vLyBzZXRzIHRoZSBub25NZXNoVmVyc2lvbiBmbGFnIHNvIHRoaXMgbWV0aG9kIGRvZXNuJ3QgcnVuIG1vcmUgdGhhbiBvbmNlXG4gICAgICAgIC8vdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm9uTWVzaFZlcnNpb24gPSB0cnVlO1xuICAgICAgICB0aGlzLmFscGhhID0gMDtcbiAgICAgICAgLy8gc3RvcmUgdGhlIHRyYWNrcyBhbmQgc2lnbmFsc1xuICAgICAgICBjb25zdCB0cmFja3MgPSB0aGlzLnN0YXRlLnRyYWNrcztcbiAgICAgICAgY29uc3Qgc2lnbmFsOiBQaGFzZXIuU2lnbmFsID0gdGhpcy5zdGF0ZS5vbkFuaW1hdGlvbkNvbXBsZXRlO1xuXG4gICAgICAgIC8vIGRlc3Ryb3kgdGhlIHNsb3QgY29udGFpbmVyc1xuICAgICAgICB3aGlsZSAodGhpcy5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAoPFBoYXNlci5Hcm91cD50aGlzLnJlbW92ZUNoaWxkQXQoMCkpLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICAvLyByZXNldCB0aGUgc3BpbmUgZGF0YVxuICAgICAgICB0aGlzLnNldHVwKFNwaW5lMi5jcmVhdGVTcGluZURhdGEodGhpcy5uYW1lICsgU3BpbmUyLk5PTl9NRVNIX1NVRkZJWCwgdGhpcy5fc2tlbGV0b25TY2FsZSkpO1xuICAgICAgICB0aGlzLnN0YXRlLmFwcGx5KHRoaXMuc2tlbGV0b24pO1xuXG4gICAgICAgIC8vIHJlc2V0IHRoZSBzdGF0ZVxuICAgICAgICB0aGlzLnN0YXRlLnRyYWNrcyA9IHRyYWNrcztcblxuICAgICAgICAvLyByZXNldCB0aGUgc2lnbmFsc1xuICAgICAgICBpZiAoc2lnbmFsICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9uQW5pbWF0aW9uQ29tcGxldGUucmVtb3ZlQWxsKCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9uQW5pbWF0aW9uQ29tcGxldGUuZGlzcG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5vbkFuaW1hdGlvbkNvbXBsZXRlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMub25BbmltYXRpb25Db21wbGV0ZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9uQW5pbWF0aW9uQ29tcGxldGUgPSBzaWduYWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9uQW5pbWF0aW9uQ29tcGxldGUgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25BbmltYXRpb25Db21wbGV0ZSA9IHRoaXMuc3RhdGUub25BbmltYXRpb25Db21wbGV0ZTtcblxuICAgICAgICAvLyBmb3JjZSBhbiB1cGRhdGVcbiAgICAgICAgLy90aGlzLnVwZGF0ZSgpO1xuXG4gICAgICAgIC8vIGNsZWFyIHRoZSBtZXNoZWQgc3BpbmUgYXNzZXRzXG4gICAgICAgICg8R2FtZT50aGlzLmdhbWUpLmFzc2V0LmNsZWFyU3BpbmVBc3NldCh0aGlzLm5hbWUpO1xuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKDEwMCwgKCkgPT4geyB0aGlzLmFscGhhID0gMSB9LCB0aGlzKTtcblxuICAgICAgICB0aGlzLm9uTWVzaFN3YXAuZGlzcGF0Y2goKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZVNwaW5lRGF0YShhc3NldE5hbWU6IHN0cmluZywgc2tlbGV0b25TY2FsZTogbnVtYmVyID0gMSk6IGFueSB7XG4gICAgICAgIGNvbnN0IHNwaW5lID0gUElYSS5zcGluZTtcbiAgICAgICAgY29uc3Qgc3BpbmVBdGxhcyA9IG5ldyBzcGluZS5TcGluZVJ1bnRpbWUuQXRsYXMoQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lLmNhY2hlLmdldFRleHQoYXNzZXROYW1lICsgJy5hdGxhcycpLCB0aGlzLmF0bGFzQ2FsbGJhY2tGdW5jdGlvbik7XG4gICAgICAgIGNvbnN0IHNwaW5lSnNvblBhcnNlciA9IG5ldyBzcGluZS5TcGluZVJ1bnRpbWUuU2tlbGV0b25Kc29uUGFyc2VyKG5ldyBzcGluZS5TcGluZVJ1bnRpbWUuQXRsYXNBdHRhY2htZW50UGFyc2VyKHNwaW5lQXRsYXMpLCBza2VsZXRvblNjYWxlKTtcbiAgICAgICAgY29uc3Qgc2tlbGV0b25EYXRhID0gc3BpbmVKc29uUGFyc2VyLnJlYWRTa2VsZXRvbkRhdGEoQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lLmNhY2hlLmdldEpTT04oYXNzZXROYW1lICsgJy5qc29uJykpO1xuICAgICAgICByZXR1cm4gc2tlbGV0b25EYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXRsYXNDYWxsYmFja0Z1bmN0aW9uKGxpbmUsIGNhbGxiYWNrKSB7XG4gICAgICAgIC8vY2FsbGJhY2soUElYSS5CYXNlVGV4dHVyZS5mcm9tSW1hZ2UoJ2Fzc2V0cy9zcGluZS8nICsgbGluZSkpO1xuICAgICAgICBjb25zdCBsaW5lQXJyID0gbGluZS5zcGxpdCgnQCcgKyBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUucmVzb2x1dGlvbiArICd4Jyk7XG4gICAgICAgIGNvbnN0IHVybCA9IGxpbmVBcnIuam9pbignJyk7XG5cbiAgICAgICAgY2FsbGJhY2sobmV3IFBJWEkuQmFzZVRleHR1cmUoQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lLmNhY2hlLmdldEltYWdlKHVybCksIFBJWEkuc2NhbGVNb2Rlcy5ERUZBVUxUKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBwYXVzZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXVzZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwYXVzZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fcGF1c2VkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzcGVlZCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3BlZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzcGVlZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3NwZWVkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBib3VuZHNPZmZzZXQob2Zmc2V0OiBQaGFzZXIuUG9pbnQpIHtcbiAgICAgICAgdGhpcy5fYm91bmRzT2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICB0aGlzLl9jdXJyZW50Qm91bmRzID0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGJvdW5kc09mZnNldCgpOiBQaGFzZXIuUG9pbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5fYm91bmRzT2Zmc2V0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYm91bmRzV2lkdGhTY2FsZShzY2FsZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2JvdW5kc1dpZHRoU2NhbGUgPSBzY2FsZTtcbiAgICAgICAgdGhpcy5fY3VycmVudEJvdW5kcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBib3VuZHNXaWR0aFNjYWxlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ib3VuZHNXaWR0aFNjYWxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYm91bmRzSGVpZ2h0U2NhbGUoc2NhbGU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9ib3VuZHNIZWlnaHRTY2FsZSA9IHNjYWxlO1xuICAgICAgICB0aGlzLl9jdXJyZW50Qm91bmRzID0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGJvdW5kc0hlaWdodFNjYWxlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ib3VuZHNIZWlnaHRTY2FsZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Qm91bmRzKCk6IFBJWEkuUmVjdGFuZ2xlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRCb3VuZHMgfHwgdGhpcy5fY3JlYXRlQm91bmRzKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVCb3VuZHMoKTogUElYSS5SZWN0YW5nbGUge1xuICAgICAgICB0aGlzLl9jdXJyZW50Qm91bmRzID0gbmV3IFBJWEkuUmVjdGFuZ2xlKHRoaXMueCArIHRoaXMuX2JvdW5kc09mZnNldC54ICogdGhpcy5zY2FsZS54LCB0aGlzLnkgLSAodGhpcy5za2VsZXRvbi5kYXRhLmhlaWdodCAqIHRoaXMuc2NhbGUueSkgKyB0aGlzLl9ib3VuZHNPZmZzZXQueSAqIHRoaXMuc2NhbGUueSwgdGhpcy5za2VsZXRvbi5kYXRhLndpZHRoICogTWF0aC5hYnModGhpcy5zY2FsZS54KSAqIHRoaXMuYm91bmRzV2lkdGhTY2FsZSwgdGhpcy5za2VsZXRvbi5kYXRhLmhlaWdodCAqIE1hdGguYWJzKHRoaXMuc2NhbGUueSkgKiB0aGlzLmJvdW5kc0hlaWdodFNjYWxlKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudEJvdW5kcztcbiAgICB9XG5cbiAgICAvLyBhbHNvIHVwZGF0ZXMgdGhlIGJvdW5kc1xuICAgIHB1YmxpYyBzZXRTY2FsZSh4OiBudW1iZXIgPSBudWxsLCB5OiBudW1iZXIgPSBudWxsKSB7XG4gICAgICAgIGlmICh4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNjYWxlLnggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGlmICh5ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNjYWxlLnkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2N1cnJlbnRCb3VuZHMgPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Qm91bmRzKCkud2lkdGg7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Qm91bmRzKCkuaGVpZ2h0O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYXJjYWRlQm9keSgpOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuQm9keSB7XG4gICAgICAgIHJldHVybiA8UGhhc2VyLlBoeXNpY3MuQXJjYWRlLkJvZHk+dGhpcy5ib2R5O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY3JlYXRlZCgpOiBib29sZWFuIHsgXG4gICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVkO1xuICAgIH1cblxuICAgIC8vIHN0YXRpYyBtZXRob2RzXG4gICAgLy8gYXV0byBtZXNoIC8gbm9uLW1lc2ggYXNzZXQgbG9hZGluZ1xuICAgIHByb3RlY3RlZCBzdGF0aWMgSU5JVElBTElaRUQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGdhbWU6IEdhbWUgPSBudWxsO1xuICAgIHByb3RlY3RlZCBzdGF0aWMgbm9uTWVzaFRpbWVyOiBQaGFzZXIuVGltZXJFdmVudCA9IG51bGw7XG4gICAgcHJvdGVjdGVkIHN0YXRpYyBvbk5vbk1lc2hGUFM6IFBoYXNlci5TaWduYWw7XG5cbiAgICBwdWJsaWMgc3RhdGljIExPQURfTk9OX01FU0g6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHB1YmxpYyBzdGF0aWMgQVVUT19NRVNIOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgc3RhdGljIERFRkFVTFRfTk9OX01FU0hfU1VGRklYOiBzdHJpbmcgPSAnX25vbWVzaCc7XG4gICAgcHVibGljIHN0YXRpYyBOT05fTUVTSF9TVUZGSVg6IHN0cmluZyA9IG51bGw7XG5cbiAgICBwdWJsaWMgc3RhdGljIERFRkFVTFRfTk9OX01FU0hfRlBTOiBudW1iZXIgPSAzNTtcbiAgICBwdWJsaWMgc3RhdGljIE5PTl9NRVNIX0ZQUzogbnVtYmVyID0gbnVsbDtcblxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKFNwaW5lMi5JTklUSUFMSVpFRCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFNwaW5lMi5JTklUSUFMSVpFRCA9IHRydWU7XG4gICAgICAgIFNwaW5lMi5nYW1lID0gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lO1xuICAgICAgICBTcGluZTIub25Ob25NZXNoRlBTID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGRldGVjdEF1dG9NZXNoKCk6IHZvaWQge1xuICAgICAgICBTcGluZTIuZ2FtZS50aW1lLmFkdmFuY2VkVGltaW5nID0gdHJ1ZTtcbiAgICAgICAgU3BpbmUyLmdhbWUudGltZS5ldmVudHMuYWRkKDIwMDAsIFNwaW5lMi5jaGVja05vbk1lc2hUaHJlc2hvbGQsIFNwaW5lMik7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBkZXN0cm95Tm9uTWVzaFRpbWVyKCk6IHZvaWQge1xuICAgICAgICBpZiAoU3BpbmUyLm5vbk1lc2hUaW1lciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgU3BpbmUyLmdhbWUudGltZS5ldmVudHMucmVtb3ZlKFNwaW5lMi5ub25NZXNoVGltZXIpO1xuICAgICAgICAgICAgU3BpbmUyLm5vbk1lc2hUaW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBjaGVja05vbk1lc2hUaHJlc2hvbGQoKTogdm9pZCB7XG4gICAgICAgIFNwaW5lMi5kZXN0cm95Tm9uTWVzaFRpbWVyKCk7XG4gICAgICAgIFNwaW5lMi5ub25NZXNoVGltZXIgPSBTcGluZTIuZ2FtZS50aW1lLmV2ZW50cy5yZXBlYXQoNTAwLCAxMCwgU3BpbmUyLmNoZWNrQXV0b01lc2hGUFMsIFNwaW5lMik7XG4gICAgICAgIFNwaW5lMi5nYW1lLnRpbWUuZXZlbnRzLmFkZCg1NTAwLCBTcGluZTIuZGlzYWJsZUFkdmFuY2VkVGltaW5nLCBTcGluZTIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY2hlY2tBdXRvTWVzaEZQUygpOiB2b2lkIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmdhbWUudGltZS5mcHMsIFNwaW5lMi5OT05fTUVTSF9GUFMpXG4gICAgICAgIGlmIChTcGluZTIuZ2FtZS50aW1lLmZwcyA8IFNwaW5lMi5OT05fTUVTSF9GUFMpIHtcbiAgICAgICAgICAgIFNwaW5lMi5kZXN0cm95Tm9uTWVzaFRpbWVyKCk7XG4gICAgICAgICAgICBTcGluZTIuTE9BRF9OT05fTUVTSCA9IHRydWU7XG4gICAgICAgICAgICBTcGluZTIub25Ob25NZXNoRlBTLmRpc3BhdGNoKCk7XG4gICAgICAgICAgICBTcGluZTIuZGlzYWJsZUFkdmFuY2VkVGltaW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGRpc2FibGVBZHZhbmNlZFRpbWluZygpOiB2b2lkIHtcbiAgICAgICAgU3BpbmUyLmdhbWUudGltZS5hZHZhbmNlZFRpbWluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc2V0QXV0b01lc2goZW5hYmxlZDogYm9vbGVhbiA9IHRydWUsIG5vbk1lc2hTdWZmaXg6IHN0cmluZyA9IFNwaW5lMi5ERUZBVUxUX05PTl9NRVNIX1NVRkZJWCwgbm9uTWVzaEZQUzogbnVtYmVyID0gU3BpbmUyLkRFRkFVTFRfTk9OX01FU0hfRlBTKSB7XG4gICAgICAgIFNwaW5lMi5BVVRPX01FU0ggPSBlbmFibGVkO1xuICAgICAgICBTcGluZTIuTk9OX01FU0hfU1VGRklYID0gbm9uTWVzaFN1ZmZpeDtcbiAgICAgICAgU3BpbmUyLk5PTl9NRVNIX0ZQUyA9IG5vbk1lc2hGUFM7XG4gICAgfVxufSIsImltcG9ydCB7QXBwbGljYXRpb259IGZyb20gJy4uL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7R2FtZX0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQge0RldmljZX0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqIFRleHRcbiAqL1xuZXhwb3J0IGNsYXNzIFRleHQgZXh0ZW5kcyBQaGFzZXIuVGV4dCB7XG4gICAgLy8gY29uc3RhbnRzXG4gICAgcHVibGljIHN0YXRpYyBERUZBVUxUX0ZPTlRfU0laRTogbnVtYmVyID0gMTI7XG4gICAgcHVibGljIHN0YXRpYyBERUZBVUxUX0ZPTlRfQ09MT1I6IHN0cmluZyA9IFwiIzAwMDAwMFwiO1xuICAgIHB1YmxpYyBzdGF0aWMgREVGQVVMVF9GT05UOiBzdHJpbmcgPSBcIkhlbHZldGljYSBOZXVlLCBBcmlhbFwiO1xuICAgIHB1YmxpYyBzdGF0aWMgR0xPQkFMX1BBRERJTkdfWDogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgc3RhdGljIEdMT0JBTF9QQURESU5HX1k6IG51bWJlciA9IDA7XG5cbiAgICBwdWJsaWMgZ2FtZTogR2FtZTtcbiAgICBwdWJsaWMgc3R5bGU6IGFueTtcbiAgICBwdWJsaWMgb25BbmltYXRpb25Db21wbGV0ZTogUGhhc2VyLlNpZ25hbCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG5cbiAgICBwcm90ZWN0ZWQgX2NhblVwZGF0ZSA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCBfcmVwZWF0VGltZXI6IFBoYXNlci5UaW1lckV2ZW50O1xuICAgIHByb3RlY3RlZCBfZGVsYXlUaW1lcjogUGhhc2VyLlRpbWVyRXZlbnQ7XG4gICAgcHJvdGVjdGVkIF9sb3dlcmNhc2VUZXh0OiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIF9sZXR0ZXJUaW1lOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIF90ZXh0TGVuZ3RoOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIF90ZXh0VG9BbmltYXRlOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHRleHQ6IHN0cmluZyA9IFwiXCIsIGZvbnROYW1lPzogc3RyaW5nLCBmb250U2l6ZTogbnVtYmVyID0gVGV4dC5ERUZBVUxUX0ZPTlRfU0laRSwgZm9udENvbG9yOiBzdHJpbmcgPSBUZXh0LkRFRkFVTFRfRk9OVF9DT0xPUiwgZm9udEFsaWduOiBzdHJpbmcgPSAnbGVmdCcsIHdvcmRXcmFwOiBib29sZWFuID0gZmFsc2UsIHdpZHRoOiBudW1iZXIgPSAwLCBwdWJsaWMgbGluZVNwYWNpbmc6IG51bWJlciA9IDAsIHNldHRpbmdzOiBPYmplY3QgPSBudWxsKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lLFxuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHksXG4gICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgVGV4dC5fYWRkU2V0dGluZ3Moe1xuICAgICAgICAgICAgICAgIGZvbnQ6IGZvbnRTaXplICsgJ3B4ICcgKyBmb250TmFtZSxcbiAgICAgICAgICAgICAgICBmaWxsOiBmb250Q29sb3IsXG4gICAgICAgICAgICAgICAgYWxpZ246IGZvbnRBbGlnbixcbiAgICAgICAgICAgICAgICB3b3JkV3JhcDogd29yZFdyYXAsXG4gICAgICAgICAgICAgICAgd29yZFdyYXBXaWR0aDogd2lkdGhcbiAgICAgICAgICAgIH0sIHNldHRpbmdzKVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQucmVwbGFjZSgvJy9nLCBcIlxcJ1wiKTtcbiAgICAgICAgdGhpcy5fbG93ZXJjYXNlVGV4dCA9IHRoaXMudGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB0aGlzLnNldFJlc29sdXRpb24oKTtcbiAgICB9XG5cbiAgICAvLyBQaGFzZXIuVGV4dCBvdmVycmlkZXNcbiAgICBwdWJsaWMgc2V0VGV4dCh0ZXh0OiBzdHJpbmcpOiBQaGFzZXIuVGV4dCB7XG4gICAgICAgIHN1cGVyLnNldFRleHQodGV4dCk7XG5cbiAgICAgICAgdGhpcy5fbG93ZXJjYXNlVGV4dCA9IHRoaXMudGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB0aGlzLnNldFJlc29sdXRpb24oKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0UmVzb2x1dGlvbigpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmdhbWUgfHwgIURldmljZS5jb2Nvb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChEZXZpY2UuY29jb29uKSB7XG4gICAgICAgICAgICAvLyBmaXggZm9yIGZvbnRzIGxvb2tpbmcgcmVhbGx5IGJsdXJyeSBpbiBjb2Nvb25KU1xuICAgICAgICAgICAgdGhpcy5yZXNvbHV0aW9uID0gdGhpcy5nYW1lLnJlc29sdXRpb24gKiB0aGlzLmdhbWUucmVzb2x1dGlvbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1x0XHRcbiAgICAvKipcbiAgICAqIHN0YXJ0cyB0aGUgdGV4dCBhbmltYXRpb25cbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJvdGVjdGVkIF9zdGFydFRleHRBbmltYXRpb24oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NhblVwZGF0ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX3JlcGVhdFRpbWVyID0gdGhpcy5nYW1lLnRpbWUuZXZlbnRzLnJlcGVhdCh0aGlzLl9sZXR0ZXJUaW1lICogMTAwLCB0aGlzLl90ZXh0TGVuZ3RoLCB0aGlzLl91cGRhdGVUZXh0QW5pbWF0aW9uLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3VwZGF0ZVRleHRBbmltYXRpb24oKSB7XG4gICAgICAgIGlmICghdGhpcy5fY2FuVXBkYXRlIHx8ICF0aGlzLl90ZXh0VG9BbmltYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5fdGV4dExlbmd0aCAtIHRoaXMuX3RleHRUb0FuaW1hdGUubGVuZ3RoO1xuICAgICAgICB0aGlzLmFkZENvbG9yKHRoaXMuc3R5bGUuZmlsbCwgaW5kZXgpO1xuICAgICAgICB0aGlzLmFkZENvbG9yKCdyZ2JhKDAsMCwwLDApJywgaW5kZXggKyAxKTtcbiAgICAgICAgdGhpcy5fdGV4dFRvQW5pbWF0ZS5zaGlmdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLl90ZXh0VG9BbmltYXRlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5vbkFuaW1hdGlvbkNvbXBsZXRlLmRpc3BhdGNoKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuICAgIC8qKlxuICAgICogc2V0cyB0aGUgY29sb3Igb2YgdGhlIGVudGlyZSB0ZXh0XG4gICAgKiBAcGFyYW0ge1N0cmluZ30gY29sb3IgY3NzIGNvbG9yIHN0cmluZyAoc3VjaCBhcyBcIiNmZjAwMDBcIilcbiAgICAqIEByZXR1cm4ge0Rpam9uLlVJVGV4dC5oaWdobGlnaHRQaHJhc2V9IGNhbGxzIHRoZSBoaWdobGlnaHRQaHJhc2UgbWV0aG9kIGFuZCBcImhpZ2hsaWdodHNcIiB0aGUgZW50aXJlIHRleHQgc3RyaW5nXG4gICAgKi9cbiAgICBwdWJsaWMgc2V0Q29sb3IoY29sb3I6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5oaWdobGlnaHRQaHJhc2UodGhpcy50ZXh0LCBjb2xvciwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogcmVzZXRzIHRoZSBjb2xvciB0byB0aGUgb3JpZ2luYWwgZmlsbCBjb2xvclxuICAgICogQHJldHVybiB7RGlqb24uVUlUZXh0LmhpZ2hsaWdodFBocmFzZX0gY2FsbHMgdGhlIGhpZ2hsaWdodFBocmFzZSBtZXRob2QgYW5kIFwiaGlnaGxpZ2h0c1wiIHRoZSBlbnRpcmUgdGV4dCBzdHJpbmdcbiAgICAqL1xuICAgIHB1YmxpYyByZXNldENvbG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oaWdobGlnaHRQaHJhc2UodGhpcy50ZXh0LCB0aGlzLnN0eWxlLmZpbGwsIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGNoYW5nZXMgdGhlIGNvbG91ciBvZiBhIHBvcnRpb24gb2YgdGhlIHRleHRcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gcGhyYXNlICAgICAgICB0aGUgcGhyYXNlIHdpdGhpbiB0aGUgdGV4dCB0byBjaGFuZ2VcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gY29sb3IgICAgICAgICBjc3MgY29sb3Igc3RyaW5nIChzdWNoIGFzIFwiI2ZmMDAwMFwiKVxuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gW2Nhc2VTZW5zaXRpdmUgPSBmYWxzZV0gd2hldGhlciB0aGUgc2VhcmNoIGZvciB0aGUgcGhyYXNlIHdpdGhpbiB0aGlzIHRleHQgc2hvdWxkIGJlIGNhc2Ugc2Vuc2l0aXZlXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIGhpZ2hsaWdodFBocmFzZShwaHJhc2U6IHN0cmluZywgY29sb3I6IHN0cmluZywgY2FzZVNlbnNpdGl2ZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGxldCB0ZXh0ID0gY2FzZVNlbnNpdGl2ZSA/IHRoaXMudGV4dCA6IHRoaXMuX2xvd2VyY2FzZVRleHQ7XG5cbiAgICAgICAgcGhyYXNlID0gY2FzZVNlbnNpdGl2ZSA/IHBocmFzZSA6IHBocmFzZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGxldCBsZW4gPSBwaHJhc2UubGVuZ3RoO1xuXG4gICAgICAgIGxldCBzdGFydEluZGV4ID0gdGV4dC5pbmRleE9mKHBocmFzZSk7XG4gICAgICAgIGxldCBlbmRJbmRleCA9IHN0YXJ0SW5kZXggKyBsZW47XG5cbiAgICAgICAgd2hpbGUgKHN0YXJ0SW5kZXggPD0gZW5kSW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQ29sb3IoY29sb3IsIHN0YXJ0SW5kZXgpO1xuICAgICAgICAgICAgc3RhcnRJbmRleCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGRDb2xvcih0aGlzLnN0eWxlLmZpbGwsIGVuZEluZGV4KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICogYW5pbWF0ZXMgdGhlIHRleHQgaW4gYnkgcmV2ZWFsaW5nIGVhY2ggY2hhcmFjdGVyIGluIHNlcXVlbmNlXG4gICAgKiBAcGFyYW0gIHtOdW1iZXJ9IFtsZXR0ZXJUaW1lID0gMC4xXSAgdGhlIHRpbWUgKGluIHNlY29uZHMpIGJldHdlZW4gZWFjaCBjaGFyYWN0ZXJcbiAgICAqIEBwYXJhbSAge2ludH0gW2RlbGF5ID0gMF0gICAgICAgICAgICB0aGUgZGVsYXkgYmVmb3JlIHN0YXJ0aW5nIHRoZSBhbmltYXRpb25cbiAgICAqL1xuICAgIHB1YmxpYyBhbmltYXRlKGxldHRlclRpbWU6IG51bWJlciA9IDAuMSwgZGVsYXk6IG51bWJlciA9IDApIHtcbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLnJlbW92ZSh0aGlzLl9kZWxheVRpbWVyKTtcbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLnJlbW92ZSh0aGlzLl9yZXBlYXRUaW1lcik7XG5cbiAgICAgICAgdGhpcy5fbGV0dGVyVGltZSA9IGxldHRlclRpbWU7XG4gICAgICAgIHRoaXMuX3RleHRMZW5ndGggPSB0aGlzLnRleHQubGVuZ3RoO1xuICAgICAgICB0aGlzLl90ZXh0VG9BbmltYXRlID0gdGhpcy50ZXh0LnNwbGl0KCcnKTtcblxuICAgICAgICB2YXIgc3RhcnRJbmRleCA9IDA7XG4gICAgICAgIHZhciBlbmRJbmRleCA9IHRoaXMuX3RleHRMZW5ndGg7XG5cbiAgICAgICAgd2hpbGUgKHN0YXJ0SW5kZXggPD0gZW5kSW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQ29sb3IoJ3JnYmEoMCwwLDAsMCknLCBzdGFydEluZGV4KTtcbiAgICAgICAgICAgIHN0YXJ0SW5kZXgrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2RlbGF5VGltZXIgPSB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKGRlbGF5ICogUGhhc2VyLlRpbWVyLlNFQ09ORCwgdGhpcy5fc3RhcnRUZXh0QW5pbWF0aW9uLCB0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHN0b3BzIHRoZSB0ZXh0IGFuaW1hdGlvbiBhbmQgY2xlYXJzIHRoZSB0aW1lcnNcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgc3RvcEFuaW1hdGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fY2FuVXBkYXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3RleHRUb0FuaW1hdGUgPSBudWxsO1xuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMucmVtb3ZlKHRoaXMuX2RlbGF5VGltZXIpO1xuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMucmVtb3ZlKHRoaXMuX3JlcGVhdFRpbWVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHJvdW5kcyB0aGUgcG9zaXRpb25cbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgcm91bmRQaXhlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXQoTWF0aC5yb3VuZCh0aGlzLngpLCBNYXRoLnJvdW5kKHRoaXMueSkpO1xuICAgIH1cblxuICAgIC8vIHN0YXRpYyBtZXRob2RzXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2FkZFNldHRpbmdzKG9iajogT2JqZWN0LCBzZXR0aW5nczogT2JqZWN0KTogT2JqZWN0IHtcbiAgICAgICAgaWYgKCFzZXR0aW5ncylcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG5cbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBzZXR0aW5ncykge1xuICAgICAgICAgICAgaWYgKHNldHRpbmdzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgICAgICAgb2JqW3Byb3BdID0gc2V0dGluZ3NbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGdldCByZWFsSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjYWxlLnkgKiB0aGlzLnRleHR1cmUuZnJhbWUuaGVpZ2h0IC8gdGhpcy5nYW1lLnJlc29sdXRpb247XG4gICAgfVxuXG4gICAgZ2V0IHJlYWxXaWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2FsZS54ICogdGhpcy50ZXh0dXJlLmZyYW1lLndpZHRoIC8gdGhpcy5nYW1lLnJlc29sdXRpb247XG4gICAgfVxufSIsImltcG9ydCB7QXBwbGljYXRpb259IGZyb20gJy4uL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7VGV4dHVyZXN9IGZyb20gJy4vVGV4dHVyZXMnO1xuaW1wb3J0IHtUZXh0fSBmcm9tICcuLi9kaXNwbGF5JztcblxuZXhwb3J0IGNsYXNzIFBsYWNlaG9sZGVycyB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IGdhbWUoKTogUGhhc2VyLkdhbWUge1xuICAgICAgICByZXR1cm4gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbWFnZSh4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCB0ZXh0dXJlOiBhbnksIG5hbWU6IHN0cmluZyA9IFwiXCIpOiBQaGFzZXIuSW1hZ2Uge1xuICAgICAgICBjb25zdCBpbWFnZUluc3RhbmNlID0gbmV3IFBoYXNlci5JbWFnZShQbGFjZWhvbGRlcnMuZ2FtZSwgeCwgeSwgdGV4dHVyZSk7XG4gICAgICAgIGltYWdlSW5zdGFuY2UubmFtZSA9IG5hbWU7XG4gICAgICAgIHJldHVybiBpbWFnZUluc3RhbmNlO1xuICAgIH1cblxuICAgIHN0YXRpYyBidXR0b24oeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgd2lkdGg6IG51bWJlciA9IDEwMCwgaGVpZ2h0OiBudW1iZXIgPSA1MCwgYXV0b1NpemU6IGJvb2xlYW4gPSBmYWxzZSwgdGV4dDogc3RyaW5nID0gJ2J1dHRvbicsIGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGwsIGNhbGxiYWNrQ29udGV4dDogYW55ID0gbnVsbCwgZGVmYXVsdENvbG9yOiBudW1iZXIgPSAweGZmZmZmZiwgb3ZlckNvbG9yOiBudW1iZXIgPSAweGZmMDAwMCwgZG93bkNvbG9yOiBudW1iZXIgPSAweDAwZmYwMCk6IFBoYXNlci5TcHJpdGUge1xuICAgICAgICBjb25zdCBzcHJpdGU6IFBoYXNlci5TcHJpdGUgPSBuZXcgUGhhc2VyLlNwcml0ZShQbGFjZWhvbGRlcnMuZ2FtZSwgeCwgeSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSB0ZXh0IGluc3RhbmNlIHdpdGggYW4gYXV0byBzaXplIG9mIDI1IG9yIDYwJSBvZiB0aGUgaGVpZ2h0IHBhc3NlZCBpbi5cbiAgICAgICAgY29uc3QgdGV4dEluc3RhbmNlOiBUZXh0ID0gbmV3IFRleHQod2lkdGggKiAwLjUsIGhlaWdodCAqIDAuNTUsIFwiIFwiICsgdGV4dCArIFwiIFwiLCAnQXJpYWwnLCBhdXRvU2l6ZSA/IDI1IDogaGVpZ2h0ICogMC42LCAnIzAwMDAwMCcpO1xuICAgICAgICB0ZXh0SW5zdGFuY2UuY2VudGVyUGl2b3QoKTtcbiAgICAgICAgdGV4dEluc3RhbmNlLm5hbWUgPSBcIkxhYmVsXCI7XG5cbiAgICAgICAgaWYgKGF1dG9TaXplKSB7XG4gICAgICAgICAgICAvLyBVc2UgYSBwYWRkaW5nIG9mIDEwXG4gICAgICAgICAgICB3aWR0aCA9IHRleHRJbnN0YW5jZS5yZWFsV2lkdGggKyAxMDtcbiAgICAgICAgICAgIGhlaWdodCA9IHRleHRJbnN0YW5jZS5yZWFsSGVpZ2h0ICsgMTA7XG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHRleHQgcG9zaXRpb25cbiAgICAgICAgICAgIHRleHRJbnN0YW5jZS5wb3NpdGlvbi5zZXQod2lkdGggKiAwLjUsIGhlaWdodCAqIDAuNTUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXBJbWFnZTogUGhhc2VyLkltYWdlID0gUGxhY2Vob2xkZXJzLmltYWdlKDAsIDAsIFRleHR1cmVzLnJvdW5kZWRSZWN0KHdpZHRoLCBoZWlnaHQsIDEwLCBkZWZhdWx0Q29sb3IpLCBcIlVwXCIpO1xuICAgICAgICBjb25zdCBvdmVySW1hZ2U6IFBoYXNlci5JbWFnZSA9IFBsYWNlaG9sZGVycy5pbWFnZSgwLCAwLCBUZXh0dXJlcy5yb3VuZGVkUmVjdCh3aWR0aCwgaGVpZ2h0LCAxMCwgb3ZlckNvbG9yKSwgXCJPdmVyXCIpO1xuICAgICAgICBjb25zdCBkb3duSW1hZ2U6IFBoYXNlci5JbWFnZSA9IFBsYWNlaG9sZGVycy5pbWFnZSgwLCAwLCBUZXh0dXJlcy5yb3VuZGVkUmVjdCh3aWR0aCwgaGVpZ2h0LCAxMCwgZG93bkNvbG9yKSwgXCJEb3duXCIpO1xuXG5cbiAgICAgICAgb3ZlckltYWdlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgZG93bkltYWdlLnZpc2libGUgPSBmYWxzZTtcblxuICAgICAgICBzcHJpdGUuYWRkQ2hpbGQodXBJbWFnZSk7XG4gICAgICAgIHNwcml0ZS5hZGRDaGlsZChvdmVySW1hZ2UpO1xuICAgICAgICBzcHJpdGUuYWRkQ2hpbGQoZG93bkltYWdlKTtcbiAgICAgICAgc3ByaXRlLmFkZENoaWxkKHRleHRJbnN0YW5jZSk7XG5cbiAgICAgICAgc3ByaXRlLmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHNwcml0ZS5pbnB1dC51c2VIYW5kQ3Vyc29yID0gdHJ1ZTtcblxuICAgICAgICBzcHJpdGUuZXZlbnRzLm9uSW5wdXRVcC5hZGQoKCkgPT4ge1xuICAgICAgICAgICAgZG93bkltYWdlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIG92ZXJJbWFnZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB1cEltYWdlLnZpc2libGUgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGNhbGxiYWNrQ29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNwcml0ZS5ldmVudHMub25JbnB1dERvd24uYWRkKCgpID0+IHtcbiAgICAgICAgICAgIGRvd25JbWFnZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIG92ZXJJbWFnZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB1cEltYWdlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3ByaXRlLmV2ZW50cy5vbklucHV0T3Zlci5hZGQoKCkgPT4ge1xuICAgICAgICAgICAgZG93bkltYWdlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIG92ZXJJbWFnZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHVwSW1hZ2UudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICBzcHJpdGUuZXZlbnRzLm9uSW5wdXRPdXQuYWRkKCgpID0+IHtcbiAgICAgICAgICAgIGRvd25JbWFnZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBvdmVySW1hZ2UudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgdXBJbWFnZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3ByaXRlLmdldEJvdW5kcyA9IGZ1bmN0aW9uKCk6IFBJWEkuUmVjdGFuZ2xlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUElYSS5SZWN0YW5nbGUoMCwgMCwgdXBJbWFnZS53aWR0aCwgdXBJbWFnZS5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzcHJpdGU7XG4gICAgfVxufSIsImltcG9ydCB7QXBwbGljYXRpb259IGZyb20gJy4uL2FwcGxpY2F0aW9uJztcblxuZXhwb3J0IGNsYXNzIFRpbWUge1xuICAgIHB1YmxpYyBzdGF0aWMgZGVsYXllZENhbGwoZGVsYXlJbk1pbGxpc2Vjb25kczogbnVtYmVyLCBjYWxsYmFjazogRnVuY3Rpb24sIGNhbGxiYWNrQ29udGV4dDogYW55LCAuLi5wYXJhbXMpIHtcbiAgICAgICAgaWYgKHBhcmFtcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwYXJhbXMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBwYXJhbXMudW5zaGlmdChkZWxheUluTWlsbGlzZWNvbmRzLCBjYWxsYmFjaywgY2FsbGJhY2tDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lLnRpbWUuZXZlbnRzLmFkZC5hcHBseShBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUudGltZS5ldmVudHMsIHBhcmFtcyk7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBVdGlsIHsgXG4gICAgcHVibGljIHN0YXRpYyBpc051bWJlcih2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoK3ZhbHVlID09PSArdmFsdWUpO1xuICAgIH1cbn0iLCJpbXBvcnQge0RldmljZX0gZnJvbSAnZGlqb24vdXRpbHMnO1xuZXhwb3J0IGNsYXNzIEFuYWx5dGljc01hbmFnZXIge1xuICAgIC8vIGZvciBjb2Nvb24gb25seVxuICAgIHByaXZhdGUgX3RyYWNrZXJJZDogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIF9zdGFydGVkV2l0aFRyYWNrZXJJZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlLCBwdWJsaWMgY2F0ZWdvcnk6IHN0cmluZyA9IG51bGwpIHsgfVxuXG4gICAgcHVibGljIHRyYWNrRXZlbnQoYWN0aW9uOiBzdHJpbmcgPSBudWxsLCBsYWJlbDogc3RyaW5nID0gbnVsbCwgdmFsdWU6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZSB8fCAhdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWFjdGlvbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEFuYWx5dGljc0V4Y2VwdGlvbignTm8gYWN0aW9uIGRlZmluZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChEZXZpY2UuY29jb29uICYmIHdpbmRvd1snYW5hbHl0aWNzJ10hPT11bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGFuYWx5dGljcyA9IHdpbmRvd1snYW5hbHl0aWNzJ107XG4gICAgICAgICAgICBhbmFseXRpY3MudHJhY2tFdmVudCh0aGlzLmNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2EoJ3NlbmQnLCAnZXZlbnQnLCB0aGlzLmNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMuZ2EoJ3NlbmQnLCAnZXZlbnQnLCB0aGlzLmNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2EoJ3NlbmQnLCAnZXZlbnQnLCB0aGlzLmNhdGVnb3J5LCBhY3Rpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJhY2tPbW5pdHVyZUV2ZW50KGdhbWVOYW1lOiBzdHJpbmcsIGFjdGl2aXR5OiBzdHJpbmcsIGlzR2FtZUV2ZW50OiBib29sZWFuKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy9jb25zb2xlLmxvZygndHJhY2tpbmcgb21uaXR1cmUnLCBnYW1lTmFtZSwgYWN0aXZpdHksIGlzR2FtZUV2ZW50KTtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3dbJ3RyYWNrRmxhc2hFdmVudCddID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgd2luZG93Wyd0cmFja0ZsYXNoRXZlbnQnXShnYW1lTmFtZSwgYWN0aXZpdHksIGlzR2FtZUV2ZW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zdGFydFdpdGhUcmFja2VySWQoKTogdm9pZCB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKERldmljZS5jb2Nvb24gJiYgd2luZG93WydhbmFseXRpY3MnXSE9PXVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IGFuYWx5dGljcyA9IHdpbmRvd1snYW5hbHl0aWNzJ107XG4gICAgICAgICAgICBhbmFseXRpY3Muc3RhcnRUcmFja2VyV2l0aElkKHRoaXMuX3RyYWNrZXJJZCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHNldCB0cmFja2VySWQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl90cmFja2VySWQgPSB2YWx1ZTtcbiAgICAgICAgaWYgKCF0aGlzLl9zdGFydGVkV2l0aFRyYWNrZXJJZCkge1xuICAgICAgICAgICAgdGhpcy5fc3RhcnRXaXRoVHJhY2tlcklkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgdHJhY2tlcklkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl90cmFja2VySWQ7XG4gICAgfVxuXG4gICAgLy8gZ2V0dGVyIC8gc2V0dGVyXG4gICAgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICh3aW5kb3dbJ2dhJ10gfHwgKERldmljZS5jb2Nvb24gJiYgd2luZG93WydhbmFseXRpY3MnXSAhPT0gdW5kZWZpbmVkKSkgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IGdhKCk6IEZ1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvd1snZ2EnXTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBbmFseXRpY3NFeGNlcHRpb24ge1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSAnQW5hbHl0aWNzRXhjZXB0aW9uJztcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbWVzc2FnZTogc3RyaW5nKSB7IH1cbn1cbiIsIi8qKlxuICogV3JhcHMgUGhhc2VyLkxvYWRlclxuKi9cblxuaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xuaW1wb3J0IHtHYW1lfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7SU5vdGlmaWVyLCBJUGF0aENvbmZpZywgSUFzc2V0LCBJQXNzZXRMaXN0LCBJU291bmQsIElUaWxlZG1hcEFzc2V0c30gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQge05vdGlmaWNhdGlvbnN9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7U3BpbmV9IGZyb20gJy4uL2Rpc3BsYXknO1xuLyoqXG4gKiBXcmFwcyBQaGFzZXIuTG9hZGVyXG4qL1xuZXhwb3J0IGNsYXNzIEFzc2V0TWFuYWdlciBpbXBsZW1lbnRzIElOb3RpZmllciB7XG4gICAgcHJvdGVjdGVkIGFwcDogQXBwbGljYXRpb247XG5cbiAgICAvLyBwcml2YXRlIHZhcmlhYmxlc1xuICAgIHByaXZhdGUgX2RhdGEgPSB7fTtcbiAgICBwcml2YXRlIF9iYXNlVVJMOiBzdHJpbmcgPSAnJztcbiAgICBwcml2YXRlIF9wYXRoT2JqOiBJUGF0aENvbmZpZyB8IGFueSA9IHt9O1xuICAgIHByaXZhdGUgX2Fzc2V0UGF0aDogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIF9kYXRhUGF0aDogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIF9zcHJpdGVTaGVldFBhdGg6IHN0cmluZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBfaW1nUGF0aDogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIF92aWRlb1BhdGg6IHN0cmluZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBfc3BpbmVQYXRoOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgX2ZvbnRQYXRoOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgX2JpdG1hcEZvbnRQYXRoOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgX3BoeXNpY3NQYXRoOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgX2F1ZGlvU3ByaXRlUGF0aDogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIF9zb3VuZFBhdGg6IHN0cmluZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBfc291bmREZWNvZGluZ01vZGlmaWVyOiBudW1iZXIgPSAyO1xuICAgIHByaXZhdGUgX3JlczogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIF9yZXNvbHV0aW9uOiBzdHJpbmcgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfbG9hZERhdGEgPSB7fTtcbiAgICBwcml2YXRlIF9hdXRvTG9hZERhdGEgPSB7fTtcbiAgICBwcml2YXRlIF9jb21wbGV0ZWRMb2FkcyA9IHt9O1xuICAgIHByaXZhdGUgX3JlcXVpcmVkRGF0YSA9IHt9O1xuXG4gICAgcHJpdmF0ZSBfY3VycmVudEFzc2V0TGlzdDogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIF9oYXNGaWxlczogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX3NvdW5kc1RvRGVjb2RlOiBBcnJheTxJU291bmQ+ID0gW107XG4gICAgcHJpdmF0ZSBfaXNMb2FkaW5nUXVldWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIF9maWxlQ29tcGxldGVQcm9ncmVzczogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9tYXhQZXJjZW50OiBudW1iZXIgPSAxMDA7XG5cbiAgICBwcml2YXRlIF9udW1Tb3VuZHM6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfc291bmRzRGVjb2RlZDogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgX2NhY2hlQnVzdFZlcnNpb246IHN0cmluZyA9ICcnO1xuXG4gICAgLy8gcHVibGljIHZhcmlhYmxlc1xuICAgIHB1YmxpYyBnYW1lOiBHYW1lO1xuXG4gICAgcHVibGljIG9uTG9hZFN0YXJ0ID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICBwdWJsaWMgb25GaWxlU3RhcnQgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuICAgIHB1YmxpYyBvbkZpbGVDb21wbGV0ZSA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgcHVibGljIG9uTG9hZENvbXBsZXRlID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICBwdWJsaWMgb25Mb2FkQ29tcGxldGVBbmRBdWRpb0RlY29kZWQgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuXG4gICAgcHVibGljIG9uQmFja2dyb3VuZExvYWRTdGFydCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgcHVibGljIG9uQmFja2dyb3VuZEZpbGVTdGFydCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgcHVibGljIG9uQmFja2dyb3VuZEZpbGVDb21wbGV0ZSA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgcHVibGljIG9uQmFja2dyb3VuZExvYWRDb21wbGV0ZSA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgcHVibGljIG9uQmFja2dyb3VuZExvYWRDb21wbGV0ZUFuZEF1ZGlvRGVjb2RlZCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG5cbiAgICAvLyBzdGF0aWMgY29uc3RhbnRzXG4gICAgLy8gYXNzZXQgdHlwZXNcbiAgICBwdWJsaWMgc3RhdGljIEFVRElPOiBzdHJpbmcgPSAnYXVkaW8nO1xuICAgIHB1YmxpYyBzdGF0aWMgU09VTkQ6IHN0cmluZyA9ICdzb3VuZCc7XG4gICAgcHVibGljIHN0YXRpYyBBVURJT19TUFJJVEU6IHN0cmluZyA9ICdhdWRpb1Nwcml0ZSc7XG4gICAgcHVibGljIHN0YXRpYyBJTUFHRTogc3RyaW5nID0gJ2ltYWdlJztcbiAgICBwdWJsaWMgc3RhdGljIFZJREVPOiBzdHJpbmcgPSAndmlkZW8nO1xuICAgIHB1YmxpYyBzdGF0aWMgQVRMQVM6IHN0cmluZyA9ICdhdGxhcyc7XG4gICAgcHVibGljIHN0YXRpYyBURVhUOiBzdHJpbmcgPSAndGV4dCc7XG4gICAgcHVibGljIHN0YXRpYyBKU09OOiBzdHJpbmcgPSAnanNvbic7XG4gICAgcHVibGljIHN0YXRpYyBUSUxFTUFQOiBzdHJpbmcgPSAndGlsZW1hcCc7XG4gICAgcHVibGljIHN0YXRpYyBUSUxFRE1BUDogc3RyaW5nID0gJ3RpbGVkbWFwJztcbiAgICBwdWJsaWMgc3RhdGljIFRJTEVETUFQX1RJTEVTRVQ6IHN0cmluZyA9ICd0aWxlc2V0JztcbiAgICBwdWJsaWMgc3RhdGljIFRJTEVETUFQX0xBWUVSOiBzdHJpbmcgPSAnbGF5ZXInO1xuICAgIHB1YmxpYyBzdGF0aWMgUEhZU0lDUzogc3RyaW5nID0gJ3BoeXNpY3MnO1xuICAgIHB1YmxpYyBzdGF0aWMgU1BJTkU6IHN0cmluZyA9ICdzcGluZSc7XG4gICAgcHVibGljIHN0YXRpYyBCSVRNQVBfRk9OVDogc3RyaW5nID0gJ2JpdG1hcEZvbnQnO1xuICAgIHB1YmxpYyBzdGF0aWMgQVNTRVRfTElTVDogc3RyaW5nID0gJ2Fzc2V0TGlzdCc7XG5cbiAgICAvLyByZXNvbHV0aW9uc1xuICAgIHB1YmxpYyBzdGF0aWMgUkVTT0xVVElPTl8yWDogc3RyaW5nID0gXCJAMnhcIjtcbiAgICBwdWJsaWMgc3RhdGljIFJFU09MVVRJT05fM1g6IHN0cmluZyA9IFwiQDN4XCI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5faW5pdCgpO1xuICAgIH1cbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICAvKipcbiAgICAqIGFkZHMgaW50ZXJuYWwgdmFyaWFibGVzIGFuZCBzaWduYWxzXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIHByaXZhdGUgX2luaXQoKSB7XG4gICAgICAgIHRoaXMuYXBwID0gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5nYW1lID0gdGhpcy5hcHAuZ2FtZTtcbiAgICAgICAgdGhpcy5iYXNlVVJMID0gJyc7XG4gICAgICAgIHRoaXMucGF0aHMgPSBudWxsO1xuICAgICAgICB0aGlzLnJlc29sdXRpb24gPSB0aGlzLmdhbWUucmVzb2x1dGlvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHBhcnNlcyBhbiBhc3NldCBsaXN0IGJ5IGtleSAodXN1YWxseSBmcm9tIGRhdGEvYXNzZXRzLmpzb24pIGFuZCBzdG9yZXMgdGhlbSBpbnRlcm5hbGx5XG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGtleSB0aGUgaWQgb2YgdGhlIGxpc3RcbiAgICAqIEBwYXJhbSAge0FycmF5fSAgbGlzdCB0aGUganNvbiBhcnJheSBvZiBhc3NldHNcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfcGFyc2VBc3NldExpc3Qoa2V5OiBzdHJpbmcsIGxpc3Q6IElBc3NldExpc3QpIHtcbiAgICAgICAgdGhpcy5fYXV0b0xvYWREYXRhW2tleV0gPSBsaXN0LmF1dG9sb2FkO1xuICAgICAgICB0aGlzLl9yZXF1aXJlZERhdGFba2V5XSA9IGxpc3QucmVxdWlyZWQ7XG5cbiAgICAgICAgdGhpcy5fbG9hZERhdGFba2V5XSA9IFtdO1xuXG4gICAgICAgIGxpc3QuYXNzZXRzLmZvckVhY2goYXNzZXQgPT4ge1xuICAgICAgICAgICAgdGhpcy5fbG9hZERhdGFba2V5XS5wdXNoKGFzc2V0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBhZGRzIGFzc2V0cyBmcm9tIGEgbGlzdCB0byB0aGUgbG9hZCBsaXN0XG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBsaXN0IHRvIGFkZFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBwcml2YXRlIF9sb2FkQXNzZXRzKGlkOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIGFzc2V0cyA9IHRoaXMuX2xvYWREYXRhW2lkXSxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGFzc2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fbG9hZEFzc2V0KGFzc2V0c1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHN0YXJ0IHRoZSBiYWNrZ3JvdW5kIGxvYWRpbmdcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfYmFja2dyb3VuZExvYWRTdGFydCgpIHtcbiAgICAgICAgdGhpcy5vbkJhY2tncm91bmRMb2FkU3RhcnQuZGlzcGF0Y2goKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHdoZW4gYSBmaWxlIGNvbXBsZXRlcyBpbiBhbiBiYWNrZ3JvdW5kIGxvYWQgcXVldWUgLSBkaXNwYXRjaGVzIHRoZSBvbkJhY2tncm91bmRGaWxlQ29tcGxldGUgc2lnbmFsXG4gICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHByb2dyZXNzICAgdGhlIHBlcmNlbnQgcHJvZ3Jlc3NcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gaWQgICAgICAgICB0aGUgZmlsZSBpZFxuICAgICogQHBhcmFtICB7aW50fSAgICBmaWxlSW5kZXggIHRoZSBpbmRleCBvZiB0aGUgZmlsZSBpbiB0aGUgbGlzdFxuICAgICogQHBhcmFtICB7aW50fSAgICB0b3RhbEZpbGVzIHRoZSB0b3RhbCBudW1iZXIgb2YgZmlsZXMgaW4gdGhlIGxpc3RcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfYmFja2dyb3VuZEZpbGVDb21wbGV0ZShwcm9ncmVzczogbnVtYmVyLCBpZDogc3RyaW5nLCBmaWxlSW5kZXg6IG51bWJlciwgdG90YWxGaWxlczogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWUuY2FjaGUuY2hlY2tLZXkoUGhhc2VyLkNhY2hlLklNQUdFLCBpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldEJhc2VUZXh0dXJlUmVzb2x1dGlvbih0aGlzLmdhbWUuY2FjaGUuZ2V0QmFzZVRleHR1cmUoaWQpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9maWxlQ29tcGxldGVQcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgICAgICB0aGlzLm9uQmFja2dyb3VuZEZpbGVDb21wbGV0ZS5kaXNwYXRjaChwcm9ncmVzcywgaWQsIGZpbGVJbmRleCwgdG90YWxGaWxlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiB3aGVuIHRoZSBiYWNrZ3JvdW5kIGxvYWQgY29tcGxldGVzIC0gZGlzcGF0Y2hlcyB0aGUgb25CYWNrZ3JvdW5kTG9hZENvbXBsZXRlIHNpZ25hbCwgc3RhcnRzIGNoZWNraW5nIGZvciBkZWNvZGVkIHNvdW5kc1xuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBwcml2YXRlIF9iYWNrZ3JvdW5kTG9hZENvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkZpbGVDb21wbGV0ZS5yZW1vdmUodGhpcy5fYmFja2dyb3VuZEZpbGVDb21wbGV0ZSwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5vbkJhY2tncm91bmRMb2FkQ29tcGxldGUuZGlzcGF0Y2goKTtcbiAgICAgICAgdGhpcy5fY2hlY2tTb3VuZERlY29kaW5nKHRoaXMub25CYWNrZ3JvdW5kTG9hZENvbXBsZXRlQW5kQXVkaW9EZWNvZGVkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHdoZW4gdGhlIGFzc2V0IGxpc3Qgc3RhcnRzIGxvYWRpbmcsIGRpc3BhdGNoZXMgdGhlIG9uTG9hZFN0YXJ0IHNpZ25hbFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHByaXZhdGUgX2dhbWVMb2FkU3RhcnQoKSB7XG4gICAgICAgIHRoaXMub25Mb2FkU3RhcnQuZGlzcGF0Y2goKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHdoZW4gYSBmaWxlIHN0YXJ0cyBsb2FkaW5nIC0gZGlzcGF0Y2hlcyB0aGUgb25GaWxlU3RhcnQgc2lnbmFsXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHJpdmF0ZSBfZ2FtZUZpbGVTdGFydCgpIHtcbiAgICAgICAgdGhpcy5vbkZpbGVTdGFydC5kaXNwYXRjaCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogd2hlbiBhIGZpbGUgY29tcGxldGVzIGluIHRoZSBnYW1lIGxvYWQgLSBkaXNwYXRjaGVzIHRoZSBvbkZpbGVDb21wbGV0ZSBzaWduYWxcbiAgICAqIEBwYXJhbSAge051bWJlcn0gcHJvZ3Jlc3MgICB0aGUgcGVyY2VudCBwcm9ncmVzc1xuICAgICogQHBhcmFtICB7U3RyaW5nfSBpZCAgICAgICAgIHRoZSBmaWxlIGlkXG4gICAgKiBAcGFyYW0gIHtpbnR9ICAgIGZpbGVJbmRleCAgdGhlIGluZGV4IG9mIHRoZSBmaWxlIGluIHRoZSBsaXN0XG4gICAgKiBAcGFyYW0gIHtpbnR9ICAgIHRvdGFsRmlsZXMgdGhlIHRvdGFsIG51bWJlciBvZiBmaWxlcyBpbiB0aGUgbGlzdFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBwcml2YXRlIF9nYW1lRmlsZUNvbXBsZXRlKHByb2dyZXNzOiBudW1iZXIsIGlkPzogc3RyaW5nLCBmaWxlSW5kZXg/OiBudW1iZXIsIHRvdGFsRmlsZXM/OiBudW1iZXIpIHtcblxuICAgICAgICBpZiAodGhpcy5nYW1lLmNhY2hlLmNoZWNrS2V5KFBoYXNlci5DYWNoZS5JTUFHRSwgaWQpKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRCYXNlVGV4dHVyZVJlc29sdXRpb24odGhpcy5nYW1lLmNhY2hlLmdldEJhc2VUZXh0dXJlKGlkKSk7XG5cbiAgICAgICAgfVxuICAgICAgICAvLyBlbHNlIGlmICh0aGlzLmdhbWUuY2FjaGUuY2hlY2tLZXkoUGhhc2VyLkNhY2hlLkJJVE1BUEZPTlQsIGlkKSl7XG4gICAgICAgIC8vICAgICB0aGlzLl9zZXRCYXNlVGV4dHVyZVJlc29sdXRpb24odGhpcy5nYW1lLmNhY2hlLmdldEJhc2VUZXh0dXJlKGlkLCBQaGFzZXIuQ2FjaGUuQklUTUFQRk9OVCkpO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ2lkJywgaWQsIHRoaXMuZ2FtZS5jYWNoZS5nZXRCYXNlVGV4dHVyZShpZCwgUGhhc2VyLkNhY2hlLkJJVE1BUEZPTlQpLnJlc29sdXRpb24pO1xuICAgICAgICAvLyB9XG4gICAgICAgIHRoaXMuX2ZpbGVDb21wbGV0ZVByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgICAgIHRoaXMub25GaWxlQ29tcGxldGUuZGlzcGF0Y2godGhpcy5nZXRMb2FkUHJvZ3Jlc3MoKSwgaWQsIGZpbGVJbmRleCwgdG90YWxGaWxlcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2V0QmFzZVRleHR1cmVSZXNvbHV0aW9uKHRleHR1cmU6IFBJWEkuQmFzZVRleHR1cmUpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRleHR1cmUgJiYgdGV4dHVyZS5zb3VyY2Uuc3JjLmluZGV4T2YoJ0AnICsgdGhpcy5yZXNvbHV0aW9uICsgJ3gnKSA+PSAwKSB7XG4gICAgICAgICAgICB0ZXh0dXJlLnJlc29sdXRpb24gPSB0aGlzLnJlc29sdXRpb247XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgKiB3aGVuIHRoZSBiYWNrZ3JvdW5kIGxvYWQgY29tcGxldGVzIC0gZGlzcGF0Y2hlcyB0aGUgb25Mb2FkQ29tcGxldGUgc2lnbmFsLCBzdGFydHMgY2hlY2tpbmcgZm9yIGRlY29kZWQgc291bmRzXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIHByaXZhdGUgX2dhbWVMb2FkQ29tcGxldGUoKSB7XG4gICAgICAgIHRoaXMuX2NvbXBsZXRlZExvYWRzW3RoaXMuX2N1cnJlbnRBc3NldExpc3RdID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbkxvYWRDb21wbGV0ZS5kaXNwYXRjaCgpO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkZpbGVTdGFydC5yZW1vdmUodGhpcy5fZ2FtZUZpbGVTdGFydCwgdGhpcyk7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uRmlsZUNvbXBsZXRlLnJlbW92ZSh0aGlzLl9nYW1lRmlsZUNvbXBsZXRlLCB0aGlzKTtcblxuICAgICAgICB0aGlzLl9jaGVja1NvdW5kRGVjb2RpbmcodGhpcy5vbkxvYWRDb21wbGV0ZUFuZEF1ZGlvRGVjb2RlZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBjaGVja3MgaWYgYWxsIHRoZSBzb3VuZHMgaW4gdGhlIHF1ZXVlIGFyZSBkZWNvZGVkXG4gICAgKiBAcGFyYW0gIHtQaGFzZXIuU2lnbmFsfSBldmVudFRvRGlzcGF0Y2ggdGhlIHNpZ25hbCB0byBiZSBkaXNwYXRjaGVkIHdoZW4gYWxsIHNvdW5kcyBhcmUgZGVjb2RlZFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBwcml2YXRlIF9jaGVja1NvdW5kRGVjb2RpbmcoZXZlbnRUb0Rpc3BhdGNoOiBQaGFzZXIuU2lnbmFsKSB7XG4gICAgICAgIHZhciBzb3VuZCwgaSwgaXNBdWRpb1Nwcml0ZTtcblxuICAgICAgICBpZiAodGhpcy5fc291bmRzVG9EZWNvZGUgJiYgdGhpcy5fc291bmRzVG9EZWNvZGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuX3NvdW5kc1RvRGVjb2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaXNBdWRpb1Nwcml0ZSA9IHRoaXMuX3NvdW5kc1RvRGVjb2RlW2ldLmlzQXVkaW9TcHJpdGU7XG4gICAgICAgICAgICAgICAgc291bmQgPSB0aGlzLmdhbWUuYWRkLnNvdW5kKHRoaXMuX3NvdW5kc1RvRGVjb2RlW2ldLnVybCk7XG4gICAgICAgICAgICAgICAgc291bmQuX19pc0F1ZGlvU3ByaXRlID0gaXNBdWRpb1Nwcml0ZTtcbiAgICAgICAgICAgICAgICBzb3VuZC5ldmVudFRvRGlzcGF0Y2ggPSBldmVudFRvRGlzcGF0Y2g7XG4gICAgICAgICAgICAgICAgc291bmQub25EZWNvZGVkLmFkZE9uY2UodGhpcy5fb25Tb3VuZERlY29kZWQsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXZlbnRUb0Rpc3BhdGNoLmRpc3BhdGNoKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHdoZW4gYSBzb3VuZCBpcyBkZWNvZGVkLCB0aGlzIG1ldGhvZCByZW1vdmVzIGl0IGZyb20gdGhlIF9zb3VuZHNUb0RlY29kZSBhcnJheSwgYW5kIGluY3JlYXNlcyB0aGUgb3ZlcmFsbCBwZXJjZW50YWdlIGxvYWRlZFxuICAgICogQHBhcmFtICB7UGhhc2VyLlNvdW5kfSBzb3VuZCB0aGUgc291bmQgYmVpbmcgZGVjb2RlZFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBwcml2YXRlIF9vblNvdW5kRGVjb2RlZChzb3VuZDogSVNvdW5kKSB7XG4gICAgICAgIHZhciBzb3VuZEluZGV4ID0gdGhpcy5fc291bmRzVG9EZWNvZGUuaW5kZXhPZihzb3VuZC5rZXkpO1xuICAgICAgICB0aGlzLl9zb3VuZHNUb0RlY29kZS5zcGxpY2Uoc291bmRJbmRleCwgMSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmdhbWUuYXVkaW8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB0aGlzLmdhbWUuYXVkaW8uYWRkQXVkaW8gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAoc291bmQuX19pc0F1ZGlvU3ByaXRlKVxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5hZGQuYXVkaW9TcHJpdGUoc291bmQua2V5KTtcblxuICAgICAgICAgICAgdGhpcy5nYW1lLmF1ZGlvLmFkZEF1ZGlvKHNvdW5kLmtleSwgc291bmQuX19pc0F1ZGlvU3ByaXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NvdW5kc0RlY29kZWQrKztcbiAgICAgICAgdGhpcy5fbWF4UGVyY2VudCA9ICgxMDAgLSAodGhpcy5fbnVtU291bmRzICogdGhpcy5zb3VuZERlY29kaW5nTW9kaWZpZXIpICsgKHRoaXMuX3NvdW5kc0RlY29kZWQgKiB0aGlzLnNvdW5kRGVjb2RpbmdNb2RpZmllcikpO1xuICAgICAgICB0aGlzLl9nYW1lRmlsZUNvbXBsZXRlKDEwMCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kc1RvRGVjb2RlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgc291bmQuZXZlbnRUb0Rpc3BhdGNoLmRpc3BhdGNoKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHNob3J0Y3V0IHRvIGdldCBhbiBhc3NldCBrZXkgdXNpbmcgYSBmaWxlIG5hbWUgKHN0cmlwcyBpdHMgZXh0ZW5zaW9uKVxuICAgICogQHBhcmFtICB7U3RyaW5nfSBmaWxlTmFtZSB0aGUgdXJsIG9mIHRoZSBmaWxlXG4gICAgKiBAcmV0dXJuIHtTdGlybmd9ICAgICAgICAgIHRoZSBhc3NldCBrZXkgKHRoZSBmaWxlbmFtZSB3aXRoIGl0cyBleHRlbnNpb24gc3RyaXBwZWQpXG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfZ2V0QXNzZXRLZXkoZmlsZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmIChmaWxlTmFtZS5pbmRleE9mKCcuJykgPCAwKVxuICAgICAgICAgICAgcmV0dXJuIGZpbGVOYW1lO1xuICAgICAgICB2YXIgZXh0ID0gZmlsZU5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgZXh0LnBvcCgpO1xuXG4gICAgICAgIHJldHVybiBleHQuam9pbignJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBnZXRzIHRoZSBleHRlbnNpb24gb2YgYSBnaXZlbiBmaWxlXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGZpbGVOYW1lXG4gICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgIHRoZSBleHRlbnNpb25cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBwcml2YXRlIF9nZXRFeHRlbnNpb24oZmlsZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBmaWxlTmFtZS5zcGxpdCgnLicpLnBvcCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogZ2V0cyB0aGUgZXh0ZW5zaW9uIG9mIGEgZ2l2ZW4gZmlsZVxuICAgICogQHBhcmFtICB7U3RyaW5nfSBmaWxlTmFtZVxuICAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICB0aGUgZXh0ZW5zaW9uXG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfZ2V0UmVzb2x1dGlvbihyZXM6IGFueSk6IHN0cmluZyB7XG4gICAgICAgIHZhciByZXN1bHQgPSAnJztcblxuICAgICAgICBpZiAodHlwZW9mIHJlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJlcyA9IHBhcnNlRmxvYXQocmVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVzID0gdGhpcy5yZXNvbHV0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlcyA+IDEuNSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gQXNzZXRNYW5hZ2VyLlJFU09MVVRJT05fMlg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICogZGV0ZXJtaW5lcyB3aGF0IGtpbmQgb2YgYXNzZXQgd2UncmUgZGVhbGluZyB3aXRoIGFuZCBhZGRzIGl0IHRvIHRoZSBsb2FkIHF1ZXVlXG4gICAgKiBAcGFyYW0gIHtPYmplY3R9IGFzc2V0IHRoZSBhc3NldCBvYmplY3Qgd2UncmUgZ29pbmcgdG8gbG9hZFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBwcml2YXRlIF9sb2FkQXNzZXQoYXNzZXQ6IElBc3NldCkge1xuICAgICAgICB2YXIgdHlwZSA9IGFzc2V0LnR5cGUsXG4gICAgICAgICAgICB1cmwgPSBhc3NldC51cmwgfHwgYXNzZXQua2V5O1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuQVNTRVRfTElTVDpcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkQXNzZXRzKGFzc2V0LmlkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLlNPVU5EOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFNvdW5kKHVybCwgYXNzZXQuZXh0ZW5zaW9ucyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5BVURJT19TUFJJVEU6XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQXVkaW9TcHJpdGUodXJsLCBhc3NldC5leHRlbnNpb25zKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLklNQUdFOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEltYWdlKHVybCwgdGhpcy5fZ2V0UmVzb2x1dGlvbihhc3NldC5yZXNvbHV0aW9uKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5WSURFTzpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRWaWRlbyh1cmwsIHRoaXMuX2dldFJlc29sdXRpb24oYXNzZXQucmVzb2x1dGlvbikpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuQVRMQVM6XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQXRsYXModXJsLCB0aGlzLl9nZXRSZXNvbHV0aW9uKGFzc2V0LnJlc29sdXRpb24pKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLlRFWFQ6XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkVGV4dCh1cmwpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuSlNPTjpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRKU09OKHVybCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5USUxFTUFQOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFRpbGVtYXAodXJsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLlRJTEVETUFQOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFRpbGVkbWFwKHVybCwgKDxJVGlsZWRtYXBBc3NldHM+YXNzZXQpLmFzc2V0cyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5QSFlTSUNTOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFBoeXNpY3ModXJsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLlNQSU5FOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwaW5lKHVybCwgdGhpcy5fZ2V0UmVzb2x1dGlvbihhc3NldC5yZXNvbHV0aW9uKSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLkJJVE1BUF9GT05UOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEJpdG1hcEZvbnQodXJsLCB0aGlzLl9nZXRSZXNvbHV0aW9uKGFzc2V0LnJlc29sdXRpb24pKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBwYXJzZXMgdGhlIGRhdGEgZnJvbSB0aGUgZXh0ZXJuYWwgYXNzZXRzIGZpbGUgKG5vcm1hbGx5IGRhdGEvYXNzZXRzLmpzb24pXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIHByaXZhdGUgX3BhcnNlRGF0YSgpIHtcbiAgICAgICAgdmFyIGtleTtcblxuICAgICAgICBmb3IgKGtleSBpbiB0aGlzLl9kYXRhKSB7XG4gICAgICAgICAgICB0aGlzLl9wYXJzZUFzc2V0TGlzdChrZXksIHRoaXMuX2RhdGFba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRDYWNoZUJ1c3RlZFVybCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLl9jYWNoZUJ1c3RWZXJzaW9uID09PSB1bmRlZmluZWQgfHwgdGhpcy5fY2FjaGVCdXN0VmVyc2lvbiA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXJsICsgJz92PScgKyB0aGlzLl9jYWNoZUJ1c3RWZXJzaW9uO1xuICAgIH1cbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuICAgIHB1YmxpYyBsb2FkVGV4dCh1cmw6IHN0cmluZykge1xuICAgICAgICB2YXIga2V5ID0gdGhpcy5fZ2V0QXNzZXRLZXkodXJsKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZS5sb2FkLnRleHQoa2V5LCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9kYXRhUGF0aCArICcvJyArIHVybCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkSlNPTihrZXk6IHN0cmluZykge1xuICAgICAgICBrZXkgPSB0aGlzLl9nZXRBc3NldEtleShrZXkpO1xuICAgICAgICByZXR1cm4gdGhpcy5nYW1lLmxvYWQuanNvbihrZXksIHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKHRoaXMuX2RhdGFQYXRoICsgJy8nICsga2V5ICsgJy5qc29uJykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkVGlsZW1hcChrZXk6IHN0cmluZykge1xuICAgICAgICBrZXkgPSB0aGlzLl9nZXRBc3NldEtleShrZXkpO1xuICAgICAgICByZXR1cm4gdGhpcy5nYW1lLmxvYWQudGlsZW1hcChrZXksIHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKHRoaXMuX2RhdGFQYXRoICsgJy90aWxlbWFwLycgKyBrZXkgKyAnLmpzb24nKSwgbnVsbCwgUGhhc2VyLlRpbGVtYXAuVElMRURfSlNPTik7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRUaWxlZG1hcChrZXk6IHN0cmluZywgYXNzZXRzOiBJQXNzZXRbXSkge1xuICAgICAgICBpZiAoUGhhc2VyLlBsdWdpblsnVGlsZWQnXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGlsZWRtYXAgcmVxdWlyZXMgdGhlIHBoYXNlci10aWxlZCBwbHVnaW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZW5nbGVyY2ovcGhhc2VyLXRpbGVkJyk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYWNoZUtleTogYW55ID0gUGhhc2VyLlBsdWdpblsnVGlsZWQnXS51dGlscy5jYWNoZUtleTtcblxuICAgICAgICB0aGlzLmdhbWUubG9hZFsndGlsZWRtYXAnXShjYWNoZUtleShrZXksICd0aWxlZG1hcCcpLCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9kYXRhUGF0aCArICcvdGlsZW1hcC8nICsga2V5ICsgJy5qc29uJyksIG51bGwsIFBoYXNlci5UaWxlbWFwLlRJTEVEX0pTT04pO1xuXG4gICAgICAgIGFzc2V0cy5mb3JFYWNoKGFzc2V0ID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoYXNzZXQudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLlRJTEVETUFQX1RJTEVTRVQ6XG4gICAgICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuVElMRURNQVBfTEFZRVI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFRpbGVkbWFwSW1hZ2Uoa2V5LCBhc3NldC50eXBlLCBhc3NldCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkVGlsZWRtYXBJbWFnZShrZXk6IHN0cmluZywgdGlsZXNldEltYWdlVHlwZTogc3RyaW5nLCBhc3NldDogSUFzc2V0KSB7XG4gICAgICAgIGNvbnN0IGNhY2hlS2V5OiBhbnkgPSBQaGFzZXIuUGx1Z2luWydUaWxlZCddLnV0aWxzLmNhY2hlS2V5O1xuXG4gICAgICAgIGxldCByZXNvbHV0aW9uOiBzdHJpbmcgPSAnJztcbiAgICAgICAgY29uc3QgbmV3S2V5OiBzdHJpbmcgPSB0aGlzLl9nZXRBc3NldEtleShhc3NldC51cmwpO1xuICAgICAgICBjb25zdCBjS2V5OiBzdHJpbmcgPSBjYWNoZUtleShrZXksICd0aWxlc2V0JywgbmV3S2V5KTtcblxuICAgICAgICBpZiAodHlwZW9mIGFzc2V0LnJlc29sdXRpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXNvbHV0aW9uID0gdGhpcy5fZ2V0UmVzb2x1dGlvbihhc3NldC5yZXNvbHV0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLl9nZXRBc3NldEtleShuZXdLZXkgKyByZXNvbHV0aW9uICsgJy4nICsgdGhpcy5fZ2V0RXh0ZW5zaW9uKGFzc2V0LnVybCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhhc3NldC51cmwsIGNLZXkpO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZShjS2V5LCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9zcHJpdGVTaGVldFBhdGggKyAnLycgKyB1cmwgKyAnLnBuZycpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZFBoeXNpY3Moa2V5OiBzdHJpbmcpIHtcbiAgICAgICAga2V5ID0gdGhpcy5fZ2V0QXNzZXRLZXkoa2V5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZS5sb2FkLnBoeXNpY3Moa2V5LCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9waHlzaWNzUGF0aCArICcvJyArIGtleSArICcuanNvbicpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZEF0bGFzKHVybDogc3RyaW5nLCByZXNvbHV0aW9uPzogYW55KTogUGhhc2VyLkxvYWRlciB8IHN0cmluZyB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVzb2x1dGlvbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJlc29sdXRpb24gPSB0aGlzLl9nZXRSZXNvbHV0aW9uKHJlc29sdXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdhbWUuY2FjaGUuY2hlY2tJbWFnZUtleSh1cmwpKSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUubG9hZC5hdGxhc0pTT05IYXNoKHVybCwgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5fc3ByaXRlU2hlZXRQYXRoICsgJy8nICsgdXJsICsgcmVzb2x1dGlvbiArICcucG5nJyksIHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKHRoaXMuX3Nwcml0ZVNoZWV0UGF0aCArICcvJyArIHVybCArIHJlc29sdXRpb24gKyAnLmpzb24nKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRJbWFnZSh1cmw6IHN0cmluZywgcmVzb2x1dGlvbj86IGFueSk6IFBoYXNlci5Mb2FkZXIgfCBzdHJpbmcge1xuICAgICAgICBpZiAodHlwZW9mIHJlc29sdXRpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXNvbHV0aW9uID0gdGhpcy5fZ2V0UmVzb2x1dGlvbihyZXNvbHV0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBrZXk6IHN0cmluZyA9IHRoaXMuX2dldEFzc2V0S2V5KHVybCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jYWNoZS5jaGVja0ltYWdlS2V5KGtleSkpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBpbWFnZSBrZXkgYWxyZWFkeSBleGlzdHMsIGRvbid0IHJlbG9hZCB0aGUgaW1hZ2UgYW5kIHJldHVybiB0aGUga2V5XG4gICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG4gICAgICAgIHVybCA9IGtleSArIHJlc29sdXRpb24gKyAnLicgKyB0aGlzLl9nZXRFeHRlbnNpb24odXJsKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lLmxvYWQuaW1hZ2Uoa2V5LCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9pbWdQYXRoICsgJy8nICsgdXJsKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRWaWRlbyh1cmw6IHN0cmluZywgcmVzb2x1dGlvbj86IGFueSk6IFBoYXNlci5Mb2FkZXIgfCBzdHJpbmcge1xuICAgICAgICBpZiAodHlwZW9mIHJlc29sdXRpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXNvbHV0aW9uID0gdGhpcy5fZ2V0UmVzb2x1dGlvbihyZXNvbHV0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBrZXk6IHN0cmluZyA9IHRoaXMuX2dldEFzc2V0S2V5KHVybCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jYWNoZS5jaGVja1ZpZGVvS2V5KGtleSkpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBpbWFnZSBrZXkgYWxyZWFkeSBleGlzdHMsIGRvbid0IHJlbG9hZCB0aGUgaW1hZ2UgYW5kIHJldHVybiB0aGUga2V5XG4gICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG4gICAgICAgIHVybCA9IGtleSArIHJlc29sdXRpb24gKyAnLicgKyB0aGlzLl9nZXRFeHRlbnNpb24odXJsKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZS5sb2FkLnZpZGVvKGtleSwgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5fdmlkZW9QYXRoICsgJy8nICsgdXJsKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRTcGluZSh1cmw6IHN0cmluZywgcmVzb2x1dGlvbj86IGFueSk6IHN0cmluZyB8IHZvaWQge1xuICAgICAgICBpZiAodHlwZW9mIHJlc29sdXRpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXNvbHV0aW9uID0gdGhpcy5fZ2V0UmVzb2x1dGlvbihyZXNvbHV0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzb2x1dGlvbiA9PT0gJycpIHtcbiAgICAgICAgICAgIHJlc29sdXRpb24gPSAnQDF4JztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBrZXk6IHN0cmluZyA9IHRoaXMuX2dldEFzc2V0S2V5KHVybCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jYWNoZS5jaGVja0ltYWdlS2V5KGtleSkpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBpbWFnZSBrZXkgYWxyZWFkeSBleGlzdHMsIGRvbid0IHJlbG9hZCB0aGUgaW1hZ2UgYW5kIHJldHVybiB0aGUga2V5XG4gICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG4gICAgICAgIHVybCA9IGtleSArIHJlc29sdXRpb24gKyAnLnBuZyc7XG4gICAgICAgIGNvbnN0IGpzb25VcmwgPSBrZXkgKyAnLmpzb24nO1xuICAgICAgICBjb25zdCBhdGxhc1VybCA9IGtleSArIHJlc29sdXRpb24gKyAnLmF0bGFzJztcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuanNvbihrZXkgKyAnLmpzb24nLCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9zcGluZVBhdGggKyAnLycgKyBqc29uVXJsKSk7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLnRleHQoa2V5ICsgJy5hdGxhcycsIHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKHRoaXMuX3NwaW5lUGF0aCArICcvJyArIGF0bGFzVXJsKSk7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKGtleSArICcucG5nJywgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5fc3BpbmVQYXRoICsgJy8nICsgdXJsKSk7XG5cbiAgICAgICAgaWYgKFNwaW5lLkFVVE9fTUVTSCA9PT0gdHJ1ZSAmJiBrZXkuaW5kZXhPZihTcGluZS5OT05fTUVTSF9TVUZGSVgpID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkU3BpbmUoa2V5ICsgU3BpbmUuTk9OX01FU0hfU1VGRklYKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkQml0bWFwRm9udCh1cmw6IHN0cmluZywgcmVzb2x1dGlvbj86IGFueSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlc29sdXRpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXNvbHV0aW9uID0gdGhpcy5fZ2V0UmVzb2x1dGlvbihyZXNvbHV0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdhbWUubG9hZC5iaXRtYXBGb250KHVybCwgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5fYml0bWFwRm9udFBhdGggKyAnLycgKyB1cmwgKyByZXNvbHV0aW9uICsgJy5wbmcnKSwgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5fYml0bWFwRm9udFBhdGggKyAnLycgKyB1cmwgKyByZXNvbHV0aW9uICsgJy5qc29uJykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkQXVkaW8odXJsOiBzdHJpbmcsIGV4dHM6IGFueSwgaXNBdWRpb1Nwcml0ZTogYm9vbGVhbikge1xuICAgICAgICB2YXIgdHlwZSwgcGF0aDtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jYWNoZS5jaGVja1NvdW5kS2V5KHVybCkgJiYgdGhpcy5nYW1lLmNhY2hlLmdldFNvdW5kKHVybCkuaXNEZWNvZGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gdHlwZSBzaG91bGQgYmUgJ3NvdW5kJyBvciAnc3ByaXRlJyAoJ2Z4JyBhbmQgJ211c2ljJyB0byBiZSBkZXByZWNhdGVkKVxuICAgICAgICAvLyBkZWZhdWx0IHRvIHNvdW5kXG5cbiAgICAgICAgaWYgKHR5cGVvZiB0eXBlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdHlwZSA9ICdzb3VuZCc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXh0cy5pbmRleE9mKCcsJykgPj0gMCkge1xuICAgICAgICAgICAgZXh0cyA9IGV4dHMuc3BsaXQoJywnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdhbWUuZGV2aWNlLmlPUyAmJiBleHRzLmluZGV4T2YoJ200YScpID09PSAtMSkge1xuICAgICAgICAgICAgZXh0cy51bnNoaWZ0KCdtNGEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgZXh0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHBhdGggPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXh0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHBhdGgucHVzaCh0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCgoaXNBdWRpb1Nwcml0ZSA/IHRoaXMuX2F1ZGlvU3ByaXRlUGF0aCA6IHRoaXMuX3NvdW5kUGF0aCkgKyAnLycgKyB1cmwgKyAnLicgKyBleHRzW2ldKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXRoID0gdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwoKGlzQXVkaW9TcHJpdGUgPyB0aGlzLl9hdWRpb1Nwcml0ZVBhdGggOiB0aGlzLl9zb3VuZFBhdGgpICsgJy8nICsgdHlwZSArICcvJyArIHVybCArICcuJyArIGV4dHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzQXVkaW9TcHJpdGUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLmF1ZGlvc3ByaXRlKHVybCwgcGF0aCwgdGhpcy5fYXVkaW9TcHJpdGVQYXRoICsgJy8nICsgdXJsICsgJy5qc29uJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5hdWRpbyh1cmwsIHBhdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc291bmRzVG9EZWNvZGUucHVzaCh7XG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIGlzQXVkaW9TcHJpdGU6IGlzQXVkaW9TcHJpdGVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRTb3VuZCh1cmw6IHN0cmluZywgZXh0czogYW55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRBdWRpbyh1cmwsIGV4dHMsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZEF1ZGlvU3ByaXRlKHVybDogc3RyaW5nLCBleHRzOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZEF1ZGlvKHVybCwgZXh0cywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRBc3NldHMoaWQ6IHN0cmluZywgYmFja2dyb3VuZDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRBc3NldExpc3QgPSBpZDtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQub25GaWxlQ29tcGxldGUucmVtb3ZlKHRoaXMuX2JhY2tncm91bmRGaWxlQ29tcGxldGUsIHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkZpbGVDb21wbGV0ZS5yZW1vdmUodGhpcy5fZ2FtZUZpbGVDb21wbGV0ZSwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5faGFzRmlsZXMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fc291bmRzVG9EZWNvZGUgPSBbXTtcblxuICAgICAgICBpZiAodGhpcy5fZGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fZGF0YVtpZF0gPT09IHVuZGVmaW5lZCB8fCB0aGlzLl9kYXRhW2lkXS5hc3NldHMgPT09IHVuZGVmaW5lZCB8fCB0aGlzLl9kYXRhW2lkXS5hc3NldHMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdubyBwcmVsb2FkIGRhdGEgcmVnaXN0ZXJlZCBmb3IgJywgaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbG9hZEFzc2V0cyhpZCk7XG4gICAgICAgIHRoaXMuX2hhc0ZpbGVzID0gdGhpcy5nYW1lLmxvYWQudG90YWxRdWV1ZWRGaWxlcygpID4gMDtcblxuICAgICAgICBpZiAoYmFja2dyb3VuZCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQub25Mb2FkU3RhcnQuYWRkT25jZSh0aGlzLl9iYWNrZ3JvdW5kTG9hZFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uRmlsZUNvbXBsZXRlLmFkZCh0aGlzLl9iYWNrZ3JvdW5kRmlsZUNvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uTG9hZENvbXBsZXRlLmFkZE9uY2UodGhpcy5fYmFja2dyb3VuZExvYWRDb21wbGV0ZSwgdGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkxvYWRTdGFydC5hZGRPbmNlKHRoaXMuX2dhbWVMb2FkU3RhcnQsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQub25GaWxlU3RhcnQuYWRkKHRoaXMuX2dhbWVGaWxlU3RhcnQsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQub25GaWxlQ29tcGxldGUuYWRkKHRoaXMuX2dhbWVGaWxlQ29tcGxldGUsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQub25Mb2FkQ29tcGxldGUuYWRkT25jZSh0aGlzLl9nYW1lTG9hZENvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5faGFzRmlsZXMpIHtcbiAgICAgICAgICAgIHRoaXMuX2dhbWVMb2FkU3RhcnQoKTtcbiAgICAgICAgICAgIHRoaXMuX2dhbWVGaWxlQ29tcGxldGUoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuX2dhbWVMb2FkQ29tcGxldGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX251bVNvdW5kcyA9IHRoaXMuX3NvdW5kc1RvRGVjb2RlLmxlbmd0aDtcbiAgICAgICAgdGhpcy5fc291bmRzRGVjb2RlZCA9IDA7XG4gICAgICAgIHRoaXMuX21heFBlcmNlbnQgPSAxMDAgLSAodGhpcy5fbnVtU291bmRzICogdGhpcy5zb3VuZERlY29kaW5nTW9kaWZpZXIpO1xuXG4gICAgICAgIGlmIChiYWNrZ3JvdW5kKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRRdWV1ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzTG9hZGluZ1F1ZXVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2RhdGEgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ25vIHByZWxvYWQgcXVldWUgdG8gbG9hZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFzc2V0czogYW55LFxuICAgICAgICAgICAgc3RhdGU6IHN0cmluZyxcbiAgICAgICAgICAgIGk6IG51bWJlcjtcblxuICAgICAgICBmb3IgKHN0YXRlIGluIHRoaXMuX2RhdGEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9hdXRvTG9hZERhdGFbc3RhdGVdKSB7XG5cbiAgICAgICAgICAgICAgICBhc3NldHMgPSB0aGlzLl9kYXRhW3N0YXRlXS5hc3NldHM7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFzc2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkQXNzZXQoYXNzZXRzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdhbWUubG9hZC5zdGFydCgpO1xuICAgICAgICB0aGlzLl9pc0xvYWRpbmdRdWV1ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uTG9hZFN0YXJ0LmFkZE9uY2UodGhpcy5fYmFja2dyb3VuZExvYWRTdGFydCwgdGhpcyk7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uRmlsZUNvbXBsZXRlLmFkZCh0aGlzLl9iYWNrZ3JvdW5kRmlsZUNvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQub25Mb2FkQ29tcGxldGUuYWRkT25jZSh0aGlzLl9iYWNrZ3JvdW5kTG9hZENvbXBsZXRlLCB0aGlzKTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBnZXRMb2FkUHJvZ3Jlc3MoKSB7XG4gICAgICAgIGNvbnN0IGFkanVzdGVkUHJvZ3Jlc3MgPSB0aGlzLl9maWxlQ29tcGxldGVQcm9ncmVzcyAqIHRoaXMuX21heFBlcmNlbnQgLyAxMDA7XG4gICAgICAgIHJldHVybiBhZGp1c3RlZFByb2dyZXNzO1xuICAgIH1cblxuXG4gICAgcHVibGljIGFsbFNvdW5kc0RlY29kZWQoKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3NvdW5kcyB0byBkZWNvZGUnLCB0aGlzLl9zb3VuZHNUb0RlY29kZS5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fc291bmRzVG9EZWNvZGUubGVuZ3RoID09PSAwO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgKiBzZXRzIHRoZSBkYXRhIGZvciB0aGUgQXNzZXRNYW5hZ2VyIHRvIHVzZSBhcyBhIHJlZmVyZW5jZSAodXN1YWxseSBmcm9tIGRhdGEvYXNzZXRzLmpzb24pXG4gICAgKiB0cmlnZ2VycyB0aGUgX3BhcnNlRGF0YSBpbnRlcm5hbCBtZXRob2QsIHdoaWNoIHN0b3JlcyB0aGUgYXNzZXQgbGlzdCBmb3IgbGF0ZXIgdXNlXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dEZpbGVGcm9tQ2FjaGUgdGhlIGlkIG9mIHRoZSBmaWxlIGluIHRoZSBQaGFzZXIuQ2FjaGVcbiAgICAqL1xuICAgIHB1YmxpYyBzZXREYXRhKGRhdGE6IE9iamVjdCkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5fbG9hZERhdGEgPSB7fTtcbiAgICAgICAgdGhpcy5fcGFyc2VEYXRhKCk7XG5cbiAgICAgICAgdGhpcy5zZW5kTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbnMuQVNTRVRfTUFOQUdFUl9EQVRBX1NFVCwgdGhpcy5fZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBjbGVhcnMgdGhlIGFzc2V0cyBmcm9tIGEgcGFydGljdWxhciBpZCBpbiB0aGUgc3RvcmFnZVxuICAgICogQHBhcmFtICB7U3RyaW5nfSBpZCAgICAgICAgICAgIHRoZSBpZCBvZiB0aGUgYXNzZXQgbGlzdCB0byBjbGVhclxuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gW2NsZWFyQXVkaW8gPSB0cnVlXSAgICB3aGV0aGVyIHRvIGNsZWFyIGF1ZGlvIGZpbGVzXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBbY2xlYXJBdGxhc3NlcyA9IHRydWVdIHdoZXRoZXIgdG8gY2xlYXIgdGV4dHVyZSBhdGxhc3Nlc1xuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gW2NsZWFySW1hZ2VzID0gdHJ1ZV0gICB3aGV0aGVyIHRvIGNsZWFyIGltYWdlc1xuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gW2NsZWFyVGV4dCA9IHRydWVdICAgICB3aGV0aGVyIHRvIGNsZWFyIHRleHQgZmlsZXNcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgY2xlYXJBc3NldHMoaWQ6IHN0cmluZywgY2xlYXJBdWRpbzogYm9vbGVhbiA9IHRydWUsIGNsZWFyQXRsYXNzZXM6IGJvb2xlYW4gPSB0cnVlLCBjbGVhckltYWdlczogYm9vbGVhbiA9IHRydWUsIGNsZWFyVGV4dDogYm9vbGVhbiA9IHRydWUsIGNsZWFySlNPTjogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhW2lkXTtcblxuICAgICAgICBjb25zb2xlLmxvZygnY2xlYXJpbmc6ICcsIGlkLCBkYXRhKTtcblxuICAgICAgICBpZiAoIWRhdGEgfHwgdHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnIHx8ICFkYXRhLmFzc2V0cyB8fCBkYXRhLmFzc2V0cy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ25vIGFzc2V0cycsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhc3NldHMgPSBkYXRhLmFzc2V0cztcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFzc2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NsZWFyaW5nIHR5cGUnLCBhc3NldHNbaV0udHlwZSk7XG4gICAgICAgICAgICBpZiAoYXNzZXRzW2ldLnR5cGUgPT09IEFzc2V0TWFuYWdlci5BU1NFVF9MSVNUKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckFzc2V0cyhhc3NldHNbaV0uaWQsIGNsZWFyQXVkaW8sIGNsZWFyQXRsYXNzZXMsIGNsZWFySW1hZ2VzLCBjbGVhclRleHQsIGNsZWFySlNPTik7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNsZWFyQXNzZXQoYXNzZXRzW2ldLCBjbGVhckF1ZGlvLCBjbGVhckF0bGFzc2VzLCBjbGVhckltYWdlcywgY2xlYXJUZXh0LCBjbGVhckpTT04pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY29tcGxldGVkTG9hZHNbaWRdID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2VuZE5vdGlmaWNhdGlvbihOb3RpZmljYXRpb25zLkFTU0VUX01BTkFHRVJfQVNTRVRTX0NMRUFSRUQsIGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGNsZWFycyBhbiBhc3NldCBmcm9tIHRoZSBnYW1lJ3MgbWVtb3J5XG4gICAgKiBAcGFyYW0gIHtPYmplY3R9IGFzc2V0ICAgICAgICAgdGhlIGFzc2V0IHRvIGNsZWFyXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBbY2xlYXJBdWRpbyA9IHRydWVdICAgIHdoZXRoZXIgdG8gY2xlYXIgYXVkaW8gZmlsZXNcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IFtjbGVhckF0bGFzc2VzID0gdHJ1ZV0gd2hldGhlciB0byBjbGVhciB0ZXh0dXJlIGF0bGFzc2VzXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBbY2xlYXJJbWFnZXMgPSB0cnVlXSAgIHdoZXRoZXIgdG8gY2xlYXIgaW1hZ2VzXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBbY2xlYXJUZXh0ID0gdHJ1ZV0gICAgIHdoZXRoZXIgdG8gY2xlYXIgdGV4dCBmaWxlc1xuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyBjbGVhckFzc2V0KGFzc2V0OiBJQXNzZXQsIGNsZWFyQXVkaW86IGJvb2xlYW4gPSB0cnVlLCBjbGVhckF0bGFzc2VzOiBib29sZWFuID0gdHJ1ZSwgY2xlYXJJbWFnZXM6IGJvb2xlYW4gPSB0cnVlLCBjbGVhclRleHQ6IGJvb2xlYW4gPSB0cnVlLCBjbGVhckpTT046IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHZhciB0eXBlID0gYXNzZXQudHlwZSxcbiAgICAgICAgICAgIHVybCA9IGFzc2V0LnVybCxcbiAgICAgICAgICAgIHJlcXVpcmVkID0gYXNzZXQucmVxdWlyZWQ7XG4gICAgICAgICAgICBcblxuICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGUgJyArIHR5cGUgKyAnIGFzc2V0OiAnICsgdXJsICsgJyBpcyByZXF1aXJlZCBhbmQgd2lsbCBub3QgYmUgY2xlYXJlZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuQVVESU86XG4gICAgICAgICAgICAgICAgaWYgKGNsZWFyQXVkaW8pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLnNvdW5kLnJlbW92ZUJ5S2V5KHVybCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jYWNoZS5yZW1vdmVTb3VuZCh1cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLklNQUdFOlxuICAgICAgICAgICAgICAgIGlmIChjbGVhckltYWdlcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFySW1hZ2UodXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5BVExBUzpcbiAgICAgICAgICAgICAgICBpZiAoY2xlYXJBdGxhc3Nlcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFySW1hZ2UodXJsKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNhY2hlLnJlbW92ZUpTT04odXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5URVhUOlxuICAgICAgICAgICAgICAgIGlmIChjbGVhclRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNhY2hlLnJlbW92ZVRleHQodXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5KU09OOlxuICAgICAgICAgICAgICAgIGlmIChjbGVhckpTT04pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNhY2hlLnJlbW92ZUpTT04odXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5QSFlTSUNTOlxuICAgICAgICAgICAgICAgIGlmIChjbGVhckpTT04pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNhY2hlLnJlbW92ZVBoeXNpY3ModXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5TUElORTpcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyU3BpbmVBc3NldChhc3NldC51cmwpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNsZWFySW1hZ2UodXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgbGV0IGltZzphbnkgPSB0aGlzLmdhbWUuY2FjaGUuZ2V0SW1hZ2UodXJsLCB0cnVlKTtcbiAgICAgICAgdGhpcy5nYW1lLmNhY2hlLnJlbW92ZUltYWdlKHVybCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGltZy5iYXNlKTtcbiAgICAgICAgY29uc29sZS5sb2coaW1nLmJhc2UuaW1hZ2VVcmwpO1xuICAgICAgICBpZiAoaW1nICYmIGltZy5kYXRhLmRpc3Bvc2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaW1nLmRhdGEuZGlzcG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGltZyA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyU3BpbmVBc3NldChpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2FtZS5jYWNoZS5yZW1vdmVKU09OKGlkICsgJy5qc29uJyk7XG4gICAgICAgIHRoaXMuZ2FtZS5jYWNoZS5yZW1vdmVUZXh0KGlkICsgJy5hdGxhcycpO1xuICAgICAgICB0aGlzLmNsZWFySW1hZ2UoaWQgKyAnLnBuZycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogY2hlY2tzIGlmIHRoZSBhc3NldHMgZnJvbSB0aGlzIGxpc3QgaWQgYXJlIGFscmVhZHkgbG9hZGVkXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBpZCB0aGUgYXNzZXQgbGlzdCBpZCB0byBjaGVja1xuICAgICogQHJldHVybiB7Qm9vbGVhbn0gICAgd2hldGhlciBpdCBoYXMgYmVlbiBsb2FkZWQgYWxyZWFkeVxuICAgICovXG4gICAgcHVibGljIGhhc0xvYWRlZEFzc2V0cyhpZDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb21wbGV0ZWRMb2Fkc1tpZF0gPT09IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbmROb3RpZmljYXRpb24obm90aWZpY2F0aW9uTmFtZTogc3RyaW5nLCBub3RpZmljYXRpb25Cb2R5PzogYW55KTogdm9pZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwcC5zZW5kTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbk5hbWUsIG5vdGlmaWNhdGlvbkJvZHkpO1xuICAgIH1cblxuICAgIC8vIGdldHRlciAvIHNldHRlclxuICAgIHB1YmxpYyBzZXQgYmFzZVVSTChiYXNlVVJMOiBzdHJpbmcpIHtcbiAgICAgICAgLy8gZW5zdXJlIHRyYWlsaW5nIHNsYXNoXG4gICAgICAgIGlmIChiYXNlVVJMICYmIGJhc2VVUkwgIT09IHVuZGVmaW5lZCAmJiBiYXNlVVJMLmNoYXJBdChiYXNlVVJMLmxlbmd0aCAtIDEpICE9PSAnLycpXG4gICAgICAgICAgICBiYXNlVVJMICs9ICcvJztcblxuICAgICAgICB0aGlzLl9iYXNlVVJMID0gYmFzZVVSTDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBhdGhzKHBhdGhPYmo6IElQYXRoQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuX3BhdGhPYmogPSBwYXRoT2JqIHx8IHt9O1xuXG4gICAgICAgIHRoaXMuX2Fzc2V0UGF0aCA9IHRoaXMuX2Jhc2VVUkwgKyAodGhpcy5fcGF0aE9iai5hc3NldFBhdGggfHwgJ2Fzc2V0cycpO1xuICAgICAgICB0aGlzLl9kYXRhUGF0aCA9IHRoaXMuX2Jhc2VVUkwgKyAodGhpcy5fcGF0aE9iai5kYXRhUGF0aCB8fCAnYXNzZXRzL2RhdGEnKTtcbiAgICAgICAgdGhpcy5fc3ByaXRlU2hlZXRQYXRoID0gdGhpcy5fYmFzZVVSTCArICh0aGlzLl9wYXRoT2JqLnNwcml0ZXNoZWV0UGF0aCB8fCAnYXNzZXRzL2ltZy9zcHJpdGVzaGVldHMnKTtcbiAgICAgICAgdGhpcy5faW1nUGF0aCA9IHRoaXMuX2Jhc2VVUkwgKyAodGhpcy5fcGF0aE9iai5pbWdQYXRoIHx8ICdhc3NldHMvaW1nJyk7XG4gICAgICAgIHRoaXMuX3ZpZGVvUGF0aCA9IHRoaXMuX2Jhc2VVUkwgKyAodGhpcy5fcGF0aE9iai5pbWdQYXRoIHx8ICdhc3NldHMvdmlkZW8nKTtcbiAgICAgICAgdGhpcy5fc3BpbmVQYXRoID0gdGhpcy5fYmFzZVVSTCArICh0aGlzLl9wYXRoT2JqLnNwaW5lUGF0aCB8fCAnYXNzZXRzL3NwaW5lJyk7XG4gICAgICAgIHRoaXMuX2ZvbnRQYXRoID0gdGhpcy5fYmFzZVVSTCArICh0aGlzLl9wYXRoT2JqLmZvbnRQYXRoIHx8ICdhc3NldHMvZm9udHMnKTtcbiAgICAgICAgdGhpcy5fYml0bWFwRm9udFBhdGggPSB0aGlzLl9iYXNlVVJMICsgKHRoaXMuX3BhdGhPYmouYml0bWFwRm9udFBhdGggfHwgJ2Fzc2V0cy9mb250cy9iaXRtYXAnKTtcbiAgICAgICAgdGhpcy5fYXVkaW9TcHJpdGVQYXRoID0gdGhpcy5fYmFzZVVSTCArICh0aGlzLl9wYXRoT2JqLmF1ZGlvU3ByaXRlUGF0aCB8fCAnYXNzZXRzL2F1ZGlvL3Nwcml0ZScpO1xuICAgICAgICB0aGlzLl9zb3VuZFBhdGggPSB0aGlzLl9iYXNlVVJMICsgKHRoaXMuX3BhdGhPYmouc291bmRQYXRoIHx8ICdhc3NldHMvYXVkaW8vc291bmQnKTtcbiAgICAgICAgdGhpcy5fcGh5c2ljc1BhdGggPSB0aGlzLl9iYXNlVVJMICsgKHRoaXMuX3BhdGhPYmoucGh5c2ljc1BhdGggfHwgJ2Fzc2V0cy9kYXRhL3BoeXNpY3MnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHJlc29sdXRpb24ocmVzOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHJlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXMgPSB0aGlzLmdhbWUucmVzb2x1dGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3JlcyA9IHJlcztcbiAgICAgICAgdGhpcy5fcmVzb2x1dGlvbiA9ICcnO1xuXG4gICAgICAgIGlmICh0aGlzLl9yZXMgPiAxLjUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdXRpb24gPSBBc3NldE1hbmFnZXIuUkVTT0xVVElPTl8yWDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcmVzb2x1dGlvbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzO1xuICAgIH1cbiAgICAvKipcbiAgICAqIHNldHMgdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIGxvYWQgd2Ugc2hvdWxkIGFsbG90IHRvIGVhY2ggc291bmRcbiAgICAqIEBwYXJhbSB7TnVtYmVyfSBbbnVtID0gMl0gdGhlIHBlcmNlbnRhZ2VcbiAgICAqL1xuICAgIHB1YmxpYyBzZXQgc291bmREZWNvZGluZ01vZGlmaWVyKG51bTogbnVtYmVyKSB7XG4gICAgICAgIGlmIChudW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbnVtID0gMjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zb3VuZERlY29kaW5nTW9kaWZpZXIgPSBudW07XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzb3VuZERlY29kaW5nTW9kaWZpZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VuZERlY29kaW5nTW9kaWZpZXI7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBjYWNoZUJ1c3RWZXJzaW9uKHZlcnNpb246IHN0cmluZyB8IG51bWJlcikge1xuICAgICAgICB0aGlzLl9jYWNoZUJ1c3RWZXJzaW9uID0gJycgKyB2ZXJzaW9uO1xuICAgIH1cbn0iLCIvKipcbiAqIEF1ZGlvTWFuYWdlclxuICogV3JhcHBlciBmb3IgUGhhc2VyLlNvdW5kTWFuYWdlclxuICovXG5pbXBvcnQge0FwcGxpY2F0aW9ufSBmcm9tICcuLi9hcHBsaWNhdGlvbic7XG5pbXBvcnQge0dhbWV9IGZyb20gJy4uL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXVkaW9NYW5hZ2VyIHtcbiAgICBwdWJsaWMgZ2FtZTogR2FtZTtcblxuICAgIHByaXZhdGUgX2RlZmF1bHRWb2x1bWU6IG51bWJlciA9IDE7XG4gICAgcHJpdmF0ZSBfc3ByaXRlczogeyBbc3ByaXRlOiBzdHJpbmddOiBQaGFzZXIuQXVkaW9TcHJpdGUgfSA9IHt9O1xuICAgIHByaXZhdGUgX3NvdW5kczogeyBbc291bmQ6IHN0cmluZ106IFBoYXNlci5Tb3VuZCB9ID0ge307XG4gICAgcHJpdmF0ZSBfbWFya2VyTG9va3VwOiB7IFtpZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdhbWUgPSBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWU7XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgcHJpdmF0ZSBfYWRkQXVkaW8oa2V5OiBzdHJpbmcsIGlzQXVkaW9TcHJpdGU6IGJvb2xlYW4gPSBmYWxzZSk6IFBoYXNlci5Tb3VuZCB8IFBoYXNlci5BdWRpb1Nwcml0ZSB7XG4gICAgICAgIGlmIChpc0F1ZGlvU3ByaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyc2VBdWRpb1Nwcml0ZShrZXksIHRoaXMuZ2FtZS5hZGQuYXVkaW9TcHJpdGUoa2V5KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWxsb3dNdWx0aXBsZSh0aGlzLmdhbWUuYWRkLnNvdW5kKGtleSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcGFyc2VBdWRpb1Nwcml0ZShrZXk6IHN0cmluZywgYXVkaW9TcHJpdGU6IFBoYXNlci5BdWRpb1Nwcml0ZSk6IFBoYXNlci5BdWRpb1Nwcml0ZSB7XG4gICAgICAgIGZvciAodmFyIHNvdW5kS2V5IGluIGF1ZGlvU3ByaXRlLnNvdW5kcykge1xuICAgICAgICAgICAgdGhpcy5fYWxsb3dNdWx0aXBsZShhdWRpb1Nwcml0ZS5zb3VuZHNbc291bmRLZXldKTtcbiAgICAgICAgICAgIHRoaXMuX21hcmtlckxvb2t1cFtzb3VuZEtleV0gPSBrZXk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF1ZGlvU3ByaXRlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2FsbG93TXVsdGlwbGUoc291bmQ6IFBoYXNlci5Tb3VuZCk6IFBoYXNlci5Tb3VuZCB7XG4gICAgICAgIHNvdW5kLmFsbG93TXVsdGlwbGUgPSB0cnVlO1xuICAgICAgICByZXR1cm4gc291bmQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0S2V5RnJvbU1hcmtlck5hbWUobWFya2VyOiBzdHJpbmcpOiBzdHJpbmcgfCBib29sZWFuIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9tYXJrZXJMb29rdXBbbWFya2VyXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXJMb29rdXBbbWFya2VyXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5fc3ByaXRlcykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zcHJpdGVzW2tleV0uc291bmRzW21hcmtlcl0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFya2VyTG9va3VwW21hcmtlcl0gPSBrZXk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcGxheVNwcml0ZU1hcmtlcihrZXk6IHN0cmluZywgbWFya2VyOiBzdHJpbmcsIHZvbHVtZT86IGFueSwgbG9vcDogYm9vbGVhbiA9IGZhbHNlLCBmb3JjZVJlc3RhcnQ6IGJvb2xlYW4gPSB0cnVlKTogUGhhc2VyLlNvdW5kIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2b2x1bWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZvbHVtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpZiAodm9sdW1lLmluZGV4T2YoJysnKSA+PSAwIHx8IHZvbHVtZS5pbmRleE9mKCctJykgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICB2b2x1bWUgPSB0aGlzLl9kZWZhdWx0Vm9sdW1lICsgcGFyc2VGbG9hdCh2b2x1bWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZSA9IHBhcnNlRmxvYXQodm9sdW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2b2x1bWUgPSB0aGlzLl9kZWZhdWx0Vm9sdW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9vcCA9IGxvb3AgfHwgZmFsc2U7XG4gICAgICAgIGZvcmNlUmVzdGFydCA9IGZvcmNlUmVzdGFydCA9PT0gZmFsc2UgPyBmYWxzZSA6IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZXNba2V5XS5wbGF5KG1hcmtlciwgdm9sdW1lKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zdG9wU3ByaXRlTWFya2VyKGtleTogc3RyaW5nLCBtYXJrZXI6IHN0cmluZyk6IGJvb2xlYW4gfCBQaGFzZXIuU291bmQge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3Nwcml0ZXMgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB0aGlzLl9zcHJpdGVzW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZXNba2V5XS5zdG9wKG1hcmtlcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc3RvcFNvdW5kKHNvdW5kOiBQaGFzZXIuU291bmQpOiB2b2lkIHtcbiAgICAgICAgcmV0dXJuIHNvdW5kLnN0b3AoKTtcbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuICAgIC8qKlxuICAgICogYWRkcyBhdWRpbyB0byB0aGUgbG9va3VwIChjYWxsZWQgYnkgQXNzZXRNYW5hZ2VyIHdoZW4gYW55IHNvdW5kIGlzIGxvYWRlZCwgdXN1YWxseSBub3QgbmVjZXNzYXJ5IHRvIGNhbGwgZnJvbSBhIGdhbWUpXG4gICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5ICAgICAgICAgdGhlIFBoYXNlci5DYWNoZSBrZXkgb2YgdGhlIGF1ZGlvIGFzc2V0XG4gICAgKiBAcGFyYW0ge0Jvb2xlYW59IGlzQXVkaW9TcHJpdGUgd2hldGhlciB0aGUgYXNzZXQgaXMgYW4gYXVkaW8gc3ByaXRlXG4gICAgKi9cbiAgICBwdWJsaWMgYWRkQXVkaW8oa2V5OiBzdHJpbmcsIGlzQXVkaW9TcHJpdGU6IGJvb2xlYW4gPSBmYWxzZSk6IFBoYXNlci5BdWRpb1Nwcml0ZSB8IFBoYXNlci5Tb3VuZCB7XG4gICAgICAgIGlmIChpc0F1ZGlvU3ByaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRBdWRpb1Nwcml0ZShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmFkZFNvdW5kKGtleSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBhZGRzIGEgc2luZ2xlIHNvdW5kIHRvIHRoZSBsb29rdXAgKHVzdWFsbHkgbm90IG5lY2Vzc2FyeSB0byBjYWxsIGZyb20gYSBnYW1lKVxuICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSB0aGUgUGhhc2VyLkNhY2hlIGtleSBvZiB0aGUgYXNzZXRcbiAgICAqIEByZXR1cm4ge1BoYXNlci5Tb3VuZH0gdGhlIGFkZGVkIHNvdW5kXG4gICAgKi9cbiAgICBwdWJsaWMgYWRkU291bmQoa2V5KTogUGhhc2VyLlNvdW5kIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zb3VuZHNba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zb3VuZHNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zb3VuZHNba2V5XSA9IHRoaXMuZ2FtZS5hZGQuYXVkaW8oa2V5KTtcbiAgICAgICAgdGhpcy5fc291bmRzW2tleV0uYWxsb3dNdWx0aXBsZSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VuZHNba2V5XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGFkZHMgYW4gYXVkaW8gc3ByaXRlIHRvIHRoZSBsb29rdXAgKHVzdWFsbHkgbm90IG5lY2Vzc2FyeSB0byBjYWxsIGZyb20gYSBnYW1lKVxuICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSB0aGUgUGhhc2VyLkNhY2hlIGtleSBvZiB0aGUgYXNzZXRcbiAgICAqIEByZXR1cm4ge1BoYXNlci5BdWRpb1Nwcml0ZX0gdGhlIGFkZGVkIGF1ZGlvIHNwcml0ZVxuICAgICovXG4gICAgcHVibGljIGFkZEF1ZGlvU3ByaXRlKGtleTogc3RyaW5nKTogUGhhc2VyLkF1ZGlvU3ByaXRlIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zcHJpdGVzW2tleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Nwcml0ZXNba2V5XSA9IDxQaGFzZXIuQXVkaW9TcHJpdGU+dGhpcy5fYWRkQXVkaW8oa2V5LCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZXNba2V5XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGEgZ2xvYmFsIG1ldGhvZCB0byBwbGF5IGEgc291bmQgLSB3aWxsIGNoZWNrIGF1ZGlvIHNwcml0ZSBtYXJrZXJzIGZvciB0aGUgcHJvdmlkZWQga2V5IGZpcnN0LCB0aGVuIHNpbmdsZSBzb3VuZHNcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gbWFya2VyICAgICAgIHRoZSBzb3VuZCBtYXJrZXIgKG9yIGtleSkgdG8gY2hlY2sgZm9yXG4gICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHZvbHVtZSAgICAgICB0aGUgdm9sdW1lIGF0IHdoaWNoIHRvIHBsYXkgdGhlIHNvdW5kXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBsb29wICAgICAgICAgd2hldGhlciB0aGUgc291bmQgc2hvdWxkIGxvb3AgKHdvbid0IHdvcmsgaWYgaXQncyBhIHNwcml0ZSBtYXJrZXIsIGFuZCBcImxvb3BcIiBoYXNuJ3QgYmVlbiBzZXQgaW4gdGhlIGF1ZGlvIHNwcml0ZSBkZXNjcmlwdG9yIGZpbGUpXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBmb3JjZVJlc3RhcnQgd2hldGhlciB0byByZXN0YXJ0IHRoZSBzb3VuZCBpZiBpdCdzIGFscmVhZHkgcGxheWluZ1xuICAgICogQHJldHVybiB7UGhhc2VyLlNvdW5kfSAgICAgICAgICAgICAgdGhlIHBsYXlpbmcgc291bmRcbiAgICAqL1xuICAgIHB1YmxpYyBwbGF5QXVkaW8obWFya2VyOiBzdHJpbmcsIHZvbHVtZT86IG51bWJlciwgbG9vcDogYm9vbGVhbiA9IGZhbHNlLCBmb3JjZVJlc3RhcnQ6IGJvb2xlYW4gPSB0cnVlKTogUGhhc2VyLlNvdW5kIHtcbiAgICAgICAgaWYgKHRoaXMuX2dldEtleUZyb21NYXJrZXJOYW1lKG1hcmtlcikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXlTcHJpdGVNYXJrZXIobWFya2VyLCB2b2x1bWUsIGxvb3AsIGZvcmNlUmVzdGFydCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5wbGF5U291bmQobWFya2VyLCB2b2x1bWUsIGxvb3AsIGZvcmNlUmVzdGFydCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBjYWxscyBEaWpvbi5BdWRpb01hbmFnZXIucGxheUF1ZGlvIG9uIGEgZGVsYXlcbiAgICAqIEBwYXJhbSAge2ludH0gZGVsYXkgICAgICAgIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkgdGhlIHNvdW5kXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IG1hcmtlciAgICAgICB0aGUgc291bmQgbWFya2VyIChvciBrZXkpIHRvIGNoZWNrIGZvclxuICAgICogQHBhcmFtICB7TnVtYmVyfSB2b2x1bWUgICAgICAgdGhlIHZvbHVtZSBhdCB3aGljaCB0byBwbGF5IHRoZSBzb3VuZFxuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gbG9vcCAgICAgICAgIHdoZXRoZXIgdGhlIHNvdW5kIHNob3VsZCBsb29wICh3b24ndCB3b3JrIGlmIGl0J3MgYSBzcHJpdGUgbWFya2VyLCBhbmQgXCJsb29wXCIgaGFzbid0IGJlZW4gc2V0IGluIHRoZSBhdWRpbyBzcHJpdGUgZGVzY3JpcHRvciBmaWxlKVxuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gZm9yY2VSZXN0YXJ0IHdoZXRoZXIgdG8gcmVzdGFydCB0aGUgc291bmQgaWYgaXQncyBhbHJlYWR5IHBsYXlpbmdcbiAgICAqL1xuICAgIHB1YmxpYyBwbGF5RGVsYXllZEF1ZGlvKGRlbGF5OiBudW1iZXIsIG1hcmtlcjogc3RyaW5nLCB2b2x1bWU/OiBudW1iZXIsIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSwgZm9yY2VSZXN0YXJ0OiBib29sZWFuID0gdHJ1ZSk6IFBoYXNlci5Tb3VuZCB7XG4gICAgICAgIGlmICh0aGlzLl9nZXRLZXlGcm9tTWFya2VyTmFtZShtYXJrZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5RGVsYXllZFNwcml0ZU1hcmtlcihkZWxheSwgbWFya2VyLCB2b2x1bWUsIGxvb3AsIGZvcmNlUmVzdGFydCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGxheURlbGF5ZWRTb3VuZChkZWxheSwgbWFya2VyLCB2b2x1bWUsIGxvb3AsIGZvcmNlUmVzdGFydCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBwbGF5cyBhIHNpbmdsZSBzb3VuZFxuICAgICogQHBhcmFtICB7U3RyaW5nfSBrZXkgICAgICAgICAgdGhlIFBoYXNlci5DYWNoZSBrZXkgZm9yIHRoZSBzb3VuZFxuICAgICogQHBhcmFtICB7TnVtYmVyfSB2b2x1bWUgICAgICAgdGhlIHZvbHVtZSBhdCB3aGljaCB0byBwbGF5IHRoZSBzb3VuZFxuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gbG9vcCAgICAgICAgIHdoZXRoZXIgdGhlIHNvdW5kIHNob3VsZCBsb29wICh3b24ndCB3b3JrIGlmIGl0J3MgYSBzcHJpdGUgbWFya2VyLCBhbmQgXCJsb29wXCIgaGFzbid0IGJlZW4gc2V0IGluIHRoZSBhdWRpbyBzcHJpdGUgZGVzY3JpcHRvciBmaWxlKVxuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gZm9yY2VSZXN0YXJ0IHdoZXRoZXIgdG8gcmVzdGFydCB0aGUgc291bmQgaWYgaXQncyBhbHJlYWR5IHBsYXlpbmdcbiAgICAqIEByZXR1cm4ge1BoYXNlci5Tb3VuZH0gdGhlIHBsYXlpbmcgc291bmRcbiAgICAqL1xuICAgIHB1YmxpYyBwbGF5U291bmQoa2V5OiBzdHJpbmcsIHZvbHVtZT86IG51bWJlciwgbG9vcDogYm9vbGVhbiA9IGZhbHNlLCBmb3JjZVJlc3RhcnQ6IGJvb2xlYW4gPSB0cnVlKTogUGhhc2VyLlNvdW5kIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zb3VuZHNba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZvbHVtZSA9IHR5cGVvZiB2b2x1bWUgPT09ICd1bmRlZmluZWQnID8gdGhpcy5fZGVmYXVsdFZvbHVtZSA6IHZvbHVtZTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fc291bmRzW2tleV0ucGxheShcIlwiLCAwLCB2b2x1bWUsIGxvb3AsIGZvcmNlUmVzdGFydCk7XG4gICAgfVxuXG4gICAgLy8gc2ltaWxhdCB0byBwbGF5U291bmQsIGJ1dCBqdXN0IHJldHVybnMgdGhlIFBoYXNlci5Tb3VuZCBpbnN0YW5jZVxuICAgIHB1YmxpYyBnZXRTb3VuZChrZXk6IHN0cmluZywgdm9sdW1lPzogbnVtYmVyLCBsb29wOiBib29sZWFuID0gZmFsc2UsIGZvcmNlUmVzdGFydDogYm9vbGVhbiA9IHRydWUpOiBQaGFzZXIuU291bmR7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc291bmRzW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2b2x1bWUgPSB0eXBlb2Ygdm9sdW1lID09PSAndW5kZWZpbmVkJyA/IHRoaXMuX2RlZmF1bHRWb2x1bWUgOiB2b2x1bWU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kc1trZXldO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogcGxheXMgYSBtYXJrZXIgZnJvbSBhbiBhdWRpbyBzcHJpdGVcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gbWFya2VyICAgICAgIHRoZSBtYXJrZXIgdG8gY2hlY2sgZm9yICh3aWxsIGNoZWNrIGFsbCBhdWRpbyBzcHJpdGVzKVxuICAgICogQHBhcmFtICB7TnVtYmVyfSB2b2x1bWUgICAgICAgdGhlIHZvbHVtZSBhdCB3aGljaCB0byBwbGF5IHRoZSBzb3VuZFxuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gbG9vcCAgICAgICAgIHdoZXRoZXIgdGhlIHNvdW5kIHNob3VsZCBsb29wICh3b24ndCB3b3JrIGlmIGl0J3MgYSBzcHJpdGUgbWFya2VyLCBhbmQgXCJsb29wXCIgaGFzbid0IGJlZW4gc2V0IGluIHRoZSBhdWRpbyBzcHJpdGUgZGVzY3JpcHRvciBmaWxlKVxuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gZm9yY2VSZXN0YXJ0IHdoZXRoZXIgdG8gcmVzdGFydCB0aGUgc291bmQgaWYgaXQncyBhbHJlYWR5IHBsYXlpbmdcbiAgICAqIEByZXR1cm4ge1BoYXNlci5Tb3VuZH0gdGhlIHBsYXlpbmcgc291bmRcbiAgICAqL1xuICAgIHB1YmxpYyBwbGF5U3ByaXRlTWFya2VyKG1hcmtlcjogc3RyaW5nLCB2b2x1bWU/OiBudW1iZXIsIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSwgZm9yY2VSZXN0YXJ0OiBib29sZWFuID0gdHJ1ZSk6IFBoYXNlci5Tb3VuZCB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuX2dldEtleUZyb21NYXJrZXJOYW1lKG1hcmtlcik7XG5cbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtYXJrZXIgbm90IGZvdW5kJywgbWFya2VyKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXlTcHJpdGVNYXJrZXIoPHN0cmluZz5rZXksIG1hcmtlciwgdm9sdW1lLCBsb29wLCBmb3JjZVJlc3RhcnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwbGF5RGVsYXllZFNvdW5kKGRlbGF5OiBudW1iZXIsIGtleTogc3RyaW5nLCB2b2x1bWU/OiBudW1iZXIsIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSwgZm9yY2VSZXN0YXJ0OiBib29sZWFuID0gdHJ1ZSk6IFBoYXNlci5Tb3VuZCB7XG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoZGVsYXksIHRoaXMucGxheVNvdW5kLCB0aGlzLCBrZXksIHZvbHVtZSwgbG9vcCwgZm9yY2VSZXN0YXJ0KTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHBsYXlEZWxheWVkU3ByaXRlTWFya2VyKGRlbGF5OiBudW1iZXIsIG1hcmtlcjogc3RyaW5nLCB2b2x1bWU/OiBudW1iZXIsIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSwgZm9yY2VSZXN0YXJ0OiBib29sZWFuID0gdHJ1ZSk6IFBoYXNlci5Tb3VuZCB7XG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoZGVsYXksIHRoaXMucGxheVNwcml0ZU1hcmtlciwgdGhpcywgbWFya2VyLCB2b2x1bWUsIGxvb3AsIGZvcmNlUmVzdGFydCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogc3RvcHMgYW55IHBsYXlpbmcgYXVkaW8gZmlsZSB3aXRoIHRoZSBnaXZlbiBtYXJrZXJcbiAgICAqIGNoZWNrcyBhdWRpbyBzcHJpdGVzIGZpcnN0LCB0aGVuIHNpbmdsZSBzb3VuZHNcbiAgICAqIEByZXR1cm4ge1BoYXNlci5Tb3VuZH0gdGhlIHNvdW5kIHRoYXQgd2FzIHN0b3BwZWRcbiAgICAqL1xuICAgIHB1YmxpYyBzdG9wQXVkaW8obWFya2VyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2dldEtleUZyb21NYXJrZXJOYW1lKG1hcmtlcikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3BTcHJpdGVNYXJrZXIobWFya2VyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zdG9wU291bmQobWFya2VyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHN0b3BzIGEgc2luZ2xlIHNvdW5kIGZyb20gcGxheWluZ1xuICAgICogQHJldHVybiB7UGhhc2VyLlNvdW5kfSB0aGUgc291bmQgdGhhdCB3YXMgc3RvcHBlZFxuICAgICovXG4gICAgcHVibGljIHN0b3BTb3VuZChrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3NvdW5kcyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHRoaXMuX3NvdW5kc1trZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VuZHNba2V5XS5zdG9wKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBzdG9wcyBhIHNpbmdsZSBzb3VuZCBmcm9tIHBsYXlpbmdcbiAgICAqIEByZXR1cm4ge1BoYXNlci5Tb3VuZH0gdGhlIHNvdW5kIHRoYXQgd2FzIHN0b3BwZWRcbiAgICAqL1xuICAgIHB1YmxpYyBzdG9wU3ByaXRlTWFya2VyKG1hcmtlcjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLl9nZXRLZXlGcm9tTWFya2VyTmFtZShtYXJrZXIpO1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ21hcmtlciBub3QgZm91bmQnLCBtYXJrZXIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3N0b3BTcHJpdGVNYXJrZXIoPHN0cmluZz5rZXksIG1hcmtlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBzdG9wcyByZW1vdmVzIGEgc291bmQgZnJvbSBEaWpvbi5BdWRpb01hbmFnZXIncyBsb29rdXBcbiAgICAqIEBwYXJhbSAge1N0cmluZ30ga2V5IHRoZSBrZXkgb2YgdGhlIHNvdW5kIHRvIGJlIHJlbW92ZWRcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgcmVtb3ZlU291bmQoa2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc291bmRzID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgdGhpcy5fc291bmRzW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kc1trZXldKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BTb3VuZChrZXkpO1xuICAgICAgICAgICAgdGhpcy5fc291bmRzW2tleV0uZGVzdHJveSgpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX3NvdW5kc1trZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBzdG9wcyByZW1vdmVzIGFuIGF1ZGlvIHNwcml0ZSBmcm9tIERpam9uLkF1ZGlvTWFuYWdlcidzIGxvb2t1cFxuICAgICogQHBhcmFtICB7U3RyaW5nfSBrZXkgdGhlIGtleSBvZiB0aGUgc291bmQgdG8gYmUgcmVtb3ZlZFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyByZW1vdmVTcHJpdGUoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zcHJpdGVzID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgdGhpcy5fc3ByaXRlc1trZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RvcFNwcml0ZU1hcmtlcihrZXkpO1xuICAgICAgICB0aGlzLl9zcHJpdGVzW2tleV0gPSBudWxsO1xuICAgICAgICBkZWxldGUgdGhpcy5fc3ByaXRlc1trZXldO1xuICAgIH1cblxuICAgIHB1YmxpYyBmYWRlKHNvdW5kOiBQaGFzZXIuU291bmQsIHZvbHVtZTogbnVtYmVyLCB0aW1lOiBudW1iZXIsIHN0b3A6IGJvb2xlYW4gPSBmYWxzZSk6IFBoYXNlci5Ud2VlbiB7XG4gICAgICAgIGlmICghc291bmQpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgaWYgKHNvdW5kLmZhZGVUd2VlbiAmJiBzb3VuZC5mYWRlVHdlZW4pXG4gICAgICAgICAgICB0aGlzLmdhbWUudHdlZW5zLnJlbW92ZShzb3VuZC5mYWRlVHdlZW4pO1xuXG4gICAgICAgIHNvdW5kLmZhZGVUd2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4oc291bmQpLnRvKHtcbiAgICAgICAgICAgIHZvbHVtZTogdm9sdW1lXG4gICAgICAgIH0sIHRpbWUgfHwgMzAwLCBQaGFzZXIuRWFzaW5nLkxpbmVhci5Ob25lKTtcblxuICAgICAgICBpZiAoc3RvcCA9PT0gdHJ1ZSlcbiAgICAgICAgICAgIHNvdW5kLmZhZGVUd2Vlbi5vbkNvbXBsZXRlLmFkZE9uY2UoZnVuY3Rpb24gKCkgeyB0aGlzLl9zdG9wU291bmQoc291bmQpIH0sIHRoaXMpO1xuXG4gICAgICAgIHJldHVybiBzb3VuZC5mYWRlVHdlZW4uc3RhcnQoKTtcbiAgICB9XG5cbiAgICAvLyBnZXR0ZXIgLyBzZXR0ZXJcbiAgICAvKipcbiAgICAqIFNldHMgdGhlIGRlZmF1bHQgdm9sdW1lIGZvciBhbGwgc291bmRzICh1c2VkIGluIHRoZSBjYXNlIHdoZXJlIGEgdm9sdW1lIGlzIG5vdCBzdXBwbGllZCB0byB0aGUgcGxheUF1ZGlvLCBwbGF5U291bmQsIG9yIHBsYXlTcHJpdGVNYXJrZXIgbWV0aG9kcylcbiAgICAqL1xuICAgIHB1YmxpYyBzZXQgZGVmYXVsdFZvbHVtZSh2b2w6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9kZWZhdWx0Vm9sdW1lID0gdm9sO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZGVmYXVsdFZvbHVtZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFZvbHVtZTtcbiAgICB9XG59IiwiLyoqXG4gKiBHYW1lXG4gKi9cbmltcG9ydCB7QXBwbGljYXRpb259IGZyb20gJy4uL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7SUdhbWVDb25maWd9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtBc3NldE1hbmFnZXIsIFRyYW5zaXRpb25NYW5hZ2VyLCBTZXF1ZW5jZU1hbmFnZXIsIFN0b3JhZ2VNYW5hZ2VyLCBBdWRpb01hbmFnZXIsIEFuYWx5dGljc01hbmFnZXIsIEdhbWVPYmplY3RGYWN0b3J5fSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7R3JvdXB9IGZyb20gJy4uL2Rpc3BsYXknO1xuaW1wb3J0IHtOb3RpZmljYXRpb25zfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBHYW1lIGV4dGVuZHMgUGhhc2VyLkdhbWUge1xuICAgIC8vIHB1YmxpYyB2YXJpYWJsZXNcbiAgICAvLyBhcHBsaWNhdGlvblxuICAgIHB1YmxpYyBhcHA6IEFwcGxpY2F0aW9uO1xuICAgIHB1YmxpYyBjb25maWc6IElHYW1lQ29uZmlnO1xuXG4gICAgLy8gbWFuYWdlcnNcbiAgICBwdWJsaWMgYXNzZXQ6IEFzc2V0TWFuYWdlcjtcbiAgICBwdWJsaWMgc2VxdWVuY2U6IFNlcXVlbmNlTWFuYWdlcjtcbiAgICBwdWJsaWMgdHJhbnNpdGlvbjogVHJhbnNpdGlvbk1hbmFnZXI7XG4gICAgcHVibGljIHN0b3JhZ2U6IFN0b3JhZ2VNYW5hZ2VyO1xuICAgIHB1YmxpYyBhdWRpbzogQXVkaW9NYW5hZ2VyO1xuICAgIHB1YmxpYyBhbmFseXRpY3M6IEFuYWx5dGljc01hbmFnZXI7XG4gICAgcHVibGljIGFkZDogR2FtZU9iamVjdEZhY3Rvcnk7XG5cbiAgICAvLyBzaWduYWxzXG4gICAgcHVibGljIG9uV29ybGRJbnB1dERpc2FibGVkOiBQaGFzZXIuU2lnbmFsID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICBwdWJsaWMgb25Xb3JsZElucHV0RW5hYmxlZDogUGhhc2VyLlNpZ25hbCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG5cbiAgICAvLyBkaXNwbGF5IGxheWVyc1xuICAgIHB1YmxpYyBiYWNrZ3JvdW5kTGF5ZXI6IEdyb3VwO1xuICAgIHB1YmxpYyBnYW1lTGF5ZXI6IEdyb3VwO1xuICAgIHB1YmxpYyB1aUxheWVyOiBHcm91cDtcbiAgICBwdWJsaWMgc3RhZ2VMYXllcjogR3JvdXA7XG5cbiAgICAvLyBQaGFzZXIuR2FtZSBvdmVycmlkZXNcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IElHYW1lQ29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgfVxuXG4gICAgcHVibGljIGJvb3QoKSB7XG4gICAgICAgIHN1cGVyLmJvb3QoKTtcblxuICAgICAgICB0aGlzLmFwcCA9IEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCk7XG5cbiAgICAgICAgLy8gYWRkIG1hbmFnZXJzXG4gICAgICAgIHRoaXMuYXNzZXQgPSBuZXcgQXNzZXRNYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMuc2VxdWVuY2UgPSBuZXcgU2VxdWVuY2VNYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IG5ldyBUcmFuc2l0aW9uTWFuYWdlcigpO1xuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgU3RvcmFnZU1hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5hdWRpbyA9IG5ldyBBdWRpb01hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5hbmFseXRpY3MgPSBuZXcgQW5hbHl0aWNzTWFuYWdlcih0aGlzLmNvbmZpZy5hbmFseXRpY3MpO1xuXG4gICAgICAgIC8vIHJlcGxhY2UgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5XG4gICAgICAgIHRoaXMuYWRkID0gbnVsbDtcbiAgICAgICAgdGhpcy5hZGQgPSBuZXcgR2FtZU9iamVjdEZhY3RvcnkodGhpcyk7XG4gICAgICAgIHRoaXMuYWRkTGF5ZXJzKCk7XG4gICAgICAgIHRoaXMuYWRkTW91c2VDYWxsYmFja3MoKTtcbiAgICAgICAgdGhpcy5zZXRGYWN0b3J5RGVmYXVsdExheWVyKHRoaXMuZ2FtZUxheWVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkUGx1Z2lucygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnBsdWdpbnMgJiYgdGhpcy5jb25maWcucGx1Z2lucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5wbHVnaW5zLmZvckVhY2gocGx1Z2luTmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBQaGFzZXIuUGx1Z2luW3BsdWdpbk5hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkLnBsdWdpbihQaGFzZXIuUGx1Z2luW3BsdWdpbk5hbWVdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE92ZXJyaWRlIHRoaXMud29ybGQgYXMgdGhlIGRlZmF1bHQgbGF5ZXIgdGhhdFxuICAgIC8vIC5hZGQgY2FsbHMgd2lsbCBiZSBjcmVhdGVkIG9uLlxuICAgIHB1YmxpYyBzZXRGYWN0b3J5RGVmYXVsdExheWVyKG5ld0xheWVyOiBQaGFzZXIuR3JvdXApIHtcbiAgICAgICAgdGhpcy5hZGQuc2V0RGVmYXVsdExheWVyKG5ld0xheWVyIHx8IHRoaXMud29ybGQpO1xuICAgIH1cbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICBwcm90ZWN0ZWQgYWRkTGF5ZXJzKCk6IHZvaWQge1xuICAgICAgICAvLyBhZGRzIHBlcnNpc3RlbnQgYmFja2dyb3VuZCBsYXllclxuICAgICAgICB0aGlzLmJhY2tncm91bmRMYXllciA9IHRoaXMuYWRkLmRHcm91cCgwLCAwLCAnX2JhY2tncm91bmRfbGF5ZXInLCB0cnVlKTtcbiAgICAgICAgdGhpcy5zdGFnZS5zZXRDaGlsZEluZGV4KHRoaXMuYmFja2dyb3VuZExheWVyLCAwKTtcblxuICAgICAgICAvLyBhZGRzIGdhbWUgYW5kIHVpIGxheWVyc1xuICAgICAgICB0aGlzLmdhbWVMYXllciA9IHRoaXMuYWRkLmRHcm91cCgwLCAwLCAnX2dhbWVfbGF5ZXInKTtcbiAgICAgICAgLy8gYWRkIHVpIGxheWVyIGFuZCBzZXQgdGhlIFwiZml4ZWRUb0NhbWVyYVwiIHByb3BlcnR5IHRvIHRydWVcbiAgICAgICAgLy8gaWYgdGhlIGdhbWUncyBjYW1lcmEgbW92ZXMsIGFueXRoaW5nIGluIHRoaXMgZ3JvdXAgd2lsbCBzdGF5IGluIHBsYWNlXG4gICAgICAgIHRoaXMudWlMYXllciA9IHRoaXMuYWRkLmRHcm91cCgwLCAwLCAnX3VpX2xheWVyJyk7XG4gICAgICAgIHRoaXMudWlMYXllci5maXhlZFRvQ2FtZXJhID0gdHJ1ZTtcblxuICAgICAgICAvLyBhZGQgYSBncm91cCB0byB0aGUgUGhhc2VyLlN0YWdlIChqdXN0IGluIGNhc2UpXG4gICAgICAgIHRoaXMuc3RhZ2VMYXllciA9IHRoaXMuYWRkLmRHcm91cCgwLCAwLCAnX3N0YWdlX2xheWVyJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZE1vdXNlQ2FsbGJhY2tzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5kZXZpY2UuZGVza3RvcCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5tb3VzZS5tb3VzZU92ZXJDYWxsYmFjayA9IHRoaXMubW91c2VPdmVyO1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5tb3VzZS5tb3VzZU91dENhbGxiYWNrID0gdGhpcy5tb3VzZU91dDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBtb3VzZU91dCgpOiB2b2lkIHtcbiAgICAgICAgQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5zZW5kTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbnMuTU9VU0VfTEVBVkVfR0xPQkFMKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbW91c2VPdmVyKCk6IHZvaWQge1xuICAgICAgICBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLnNlbmROb3RpZmljYXRpb24oTm90aWZpY2F0aW9ucy5NT1VTRV9FTlRFUl9HTE9CQUwpO1xuICAgIH1cblxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgcHVibGljIGRpc2FibGVFbGVtZW50SW5wdXQoZWw6IGFueSk6IGFueSB7XG4gICAgICAgIGlmIChlbC5pbnB1dCAmJiBlbC5pbnB1dEVuYWJsZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGVsLndhc0VuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgZWwuaW5wdXRFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWwuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVFbGVtZW50SW5wdXQoZWwuY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGVuYWJsZUVsZW1lbnRJbnB1dChlbDogYW55KTogYW55IHtcbiAgICAgICAgaWYgKGVsLmlucHV0ICYmIGVsLmlucHV0RW5hYmxlZCA9PT0gZmFsc2UgJiYgZWwud2FzRW5hYmxlZCkge1xuICAgICAgICAgICAgZWwud2FzRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZWwuaW5wdXRFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWwuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlRWxlbWVudElucHV0KGVsLmNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkaXNhYmxlSW5wdXQoZ3JvdXA6IFBoYXNlci5Hcm91cCk6IGFueSB7XG4gICAgICAgIHJldHVybiBncm91cC5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgaWYgKGVsIGluc3RhbmNlb2YgUGhhc2VyLkdyb3VwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZUlucHV0KGVsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZUVsZW1lbnRJbnB1dChlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBlbmFibGVJbnB1dChncm91cDogUGhhc2VyLkdyb3VwKTogYW55IHtcbiAgICAgICAgcmV0dXJuIGdyb3VwLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICBpZiAoZWwgaW5zdGFuY2VvZiBQaGFzZXIuR3JvdXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbmFibGVJbnB1dChlbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVuYWJsZUVsZW1lbnRJbnB1dChlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXNhYmxlR2FtZUlucHV0KCkge1xuICAgICAgICB0aGlzLmRpc2FibGVJbnB1dCh0aGlzLmdhbWVMYXllcik7XG4gICAgICAgIHRoaXMub25Xb3JsZElucHV0RGlzYWJsZWQuZGlzcGF0Y2goKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZW5hYmxlR2FtZUlucHV0KCkge1xuICAgICAgICB0aGlzLmVuYWJsZUlucHV0KHRoaXMuZ2FtZUxheWVyKTtcbiAgICAgICAgdGhpcy5vbldvcmxkSW5wdXRFbmFibGVkLmRpc3BhdGNoKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmVtb3ZlcyBhbGwgaXRlbXMgZnJvbSB0aGUgZ2FtZSBsYXllclxuICAgICAqIGJ1dCBhbGxvd3MgdGhlIHVpIGxheWVyIHRvIHBlcnNpc3RcbiAgICAgKiB0aGF0IHdheSB3ZSBjYW4gb3ZlcmxheSB0aGUgZ2FtZSB3aXRob3V0IGFkZGluZyBzdHVmZiB0byB0aGUgcGhhc2VyIHN0YWdlIChmb3IgdHJhbnNpdGlvbnMpXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHRvU3RhdGUgdGhlIG5ldyBzdGF0ZSB3ZSdyZSBjaGFuZ2luZyB0b1xuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgcHVibGljIGNoYW5nZVN0YXRlKHRvU3RhdGU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmdhbWVMYXllci5yZW1vdmVBbGwodHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnN0YXJ0KHRvU3RhdGUsIGZhbHNlLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLy8gZ2V0dGVyIC8gc2V0dGVyXG4gICAgLyoqXG4gICAgICogc2V0cyB0aGUgdGFyZ2V0IGdyb3VwIGZvciB0aGUgZ2FtZU9iamVjdEZhY3RvcnkgdG8gZ2FtZUxheWVyIGJlZm9yZSBhZGRpbmdcbiAgICAgKiB0aGlzIHdheSBpZiB3ZSBwYXNzIGEgbnVsbCBncm91cCB0byB3aGF0ZXZlciBtZXRob2Qgd2UgY2FsbFxuICAgICAqIGllICh0aGlzLmdhbWUuYWRkVG9HYW1lLmltYWdlKDAsIDAsIGtleSwgZnJhbWUpKTtcbiAgICAgKiBpdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBhcHByb3ByaWF0ZSBsYXllclxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgYWRkVG9HYW1lKCk6IEdhbWVPYmplY3RGYWN0b3J5IHtcbiAgICAgICAgdGhpcy5hZGQudGFyZ2V0R3JvdXAgPSB0aGlzLmdhbWVMYXllcjtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHNldHMgdGhlIHRhcmdldCBncm91cCBmb3IgdGhlIGdhbWVPYmplY3RGYWN0b3J5IHRvIHVpTGF5ZXIgYmVmb3JlIGFkZGluZ1xuICAgICAqIHRoaXMgd2F5IGlmIHdlIHBhc3MgYSBudWxsIGdyb3VwIHRvIHdoYXRldmVyIG1ldGhvZCB3ZSBjYWxsXG4gICAgICogaWUgKHRoaXMuZ2FtZS5hZGRUb1VJLmltYWdlKDAsIDAsIGtleSwgZnJhbWUpKTtcbiAgICAgKiBpdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBhcHByb3ByaWF0ZSBsYXllclxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgYWRkVG9CYWNrZ3JvdW5kKCk6IEdhbWVPYmplY3RGYWN0b3J5IHtcbiAgICAgICAgdGhpcy5hZGQudGFyZ2V0R3JvdXAgPSB0aGlzLmJhY2tncm91bmRMYXllcjtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkO1xuICAgIH1cblxuXG4gICAgcHVibGljIGdldCBhZGRUb1VJKCk6IEdhbWVPYmplY3RGYWN0b3J5IHtcbiAgICAgICAgLy8gc2V0IHRoZSB0YXJnZXQgZ3JvdXAgZm9yIHRoZSBnYW1lT2JqZWN0RmFjdG9yeSBiZWZvcmUgYWRkaW5nXG4gICAgICAgIHRoaXMuYWRkLnRhcmdldEdyb3VwID0gdGhpcy51aUxheWVyO1xuICAgICAgICByZXR1cm4gdGhpcy5hZGQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhZGRUb1N0YWdlKCk6IEdhbWVPYmplY3RGYWN0b3J5IHtcbiAgICAgICAgLy8gc2V0IHRoZSB0YXJnZXQgZ3JvdXAgZm9yIHRoZSBnYW1lT2JqZWN0RmFjdG9yeSBiZWZvcmUgYWRkaW5nXG4gICAgICAgIHRoaXMuYWRkLnRhcmdldEdyb3VwID0gdGhpcy5zdGFnZUxheWVyO1xuICAgICAgICByZXR1cm4gdGhpcy5hZGQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhZGRUb1dvcmxkKCk6IEdhbWVPYmplY3RGYWN0b3J5IHtcbiAgICAgICAgLy8gc2V0IHRoZSB0YXJnZXQgZ3JvdXAgZm9yIHRoZSBnYW1lT2JqZWN0RmFjdG9yeSBiZWZvcmUgYWRkaW5nXG4gICAgICAgIHRoaXMuYWRkLnRhcmdldEdyb3VwID0gdGhpcy53b3JsZDtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkO1xuICAgIH1cbn0iLCIvKipcbiAqIEdhbWVPYmplY3RGYWN0b3J5XG4gKi9cblxuaW1wb3J0IHtUZXh0LCBHcm91cCwgU3BpbmUsIFNwcml0ZSwgQ29tcG9uZW50LCBCaXRtYXBUZXh0fSBmcm9tICcuLi9kaXNwbGF5Jztcbi8qKlxuICogR2FtZU9iamVjdEZhY3RvcnlcbiAqL1xuXG5leHBvcnQgY2xhc3MgR2FtZU9iamVjdEZhY3RvcnkgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdEZhY3Rvcnkge1xuICAgIC8vIFRoZSBsYXllciB0aGUgY3VycmVudCBvYmplY3Qgd2lsbCBiZSBhZGRlZCB0by4gVGhpcyBpcyB1c2VkIGJ5IGhlbHBlciBmdW5jdGlvbnMgaW4gR2FtZS50cy5cbiAgICBwcm90ZWN0ZWQgX3RhcmdldEdyb3VwOiBQaGFzZXIuR3JvdXAgPSBudWxsO1xuXG4gICAgLy8gVGhpcyBpcyB0aGUgbGF5ZXIgdGhhdCBzdGFuZGFyZCAuYWRkIGNhbGxzIHdpbGwgYmUgYXBwbGllZCB0by5cbiAgICBwcm90ZWN0ZWQgX2RlZmF1bHRMYXllcjogUGhhc2VyLkdyb3VwID0gdGhpcy53b3JsZDtcblxuICAgIC8vIG92ZXJyaWRlc1xuICAgIC8qKlxuICAgICogQWRkcyBhbiBleGlzdGluZyBkaXNwbGF5IG9iamVjdCB0byB0aGUgZ2FtZSB3b3JsZC5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSNleGlzdGluZ1xuICAgICogQHBhcmFtIHthbnl9IG9iamVjdCAtIEFuIGluc3RhbmNlIG9mIFBoYXNlci5TcHJpdGUsIFBoYXNlci5CdXR0b24gb3IgYW55IG90aGVyIGRpc3BsYXkgb2JqZWN0LlxuICAgICogQHJldHVybiB7YW55fSBUaGUgY2hpbGQgdGhhdCB3YXMgYWRkZWQgdG8gdGhlIFdvcmxkLlxuICAgICovXG4gICAgcHVibGljIGV4aXN0aW5nKG9iamVjdCk6IGFueSB7XG4gICAgICAgIGxldCBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7XG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkKG9iamVjdCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogQ3JlYXRlIGEgbmV3IGBJbWFnZWAgb2JqZWN0LlxuICAgICpcbiAgICAqIEFuIEltYWdlIGlzIGEgbGlnaHQtd2VpZ2h0IG9iamVjdCB5b3UgY2FuIHVzZSB0byBkaXNwbGF5IGFueXRoaW5nIHRoYXQgZG9lc24ndCBuZWVkIHBoeXNpY3Mgb3IgYW5pbWF0aW9uLlxuICAgICpcbiAgICAqIEl0IGNhbiBzdGlsbCByb3RhdGUsIHNjYWxlLCBjcm9wIGFuZCByZWNlaXZlIGlucHV0IGV2ZW50cy5cbiAgICAqIFRoaXMgbWFrZXMgaXQgcGVyZmVjdCBmb3IgbG9nb3MsIGJhY2tncm91bmRzLCBzaW1wbGUgYnV0dG9ucyBhbmQgb3RoZXIgbm9uLVNwcml0ZSBncmFwaGljcy5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSNpbWFnZVxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt4PTBdIC0gVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgSW1hZ2UuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgSW1hZ2UgbWF5IGJlIGluLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt5PTBdIC0gVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgSW1hZ2UuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgSW1hZ2UgbWF5IGJlIGluLlxuICAgICogQHBhcmFtIHtzdHJpbmd8UGhhc2VyLlJlbmRlclRleHR1cmV8UGhhc2VyLkJpdG1hcERhdGF8UGhhc2VyLlZpZGVvfFBJWEkuVGV4dHVyZX0gW2tleV0gLSBUaGUgaW1hZ2UgdXNlZCBhcyBhIHRleHR1cmUgYnkgdGhpcyBkaXNwbGF5IG9iamVjdCBkdXJpbmcgcmVuZGVyaW5nLiBJZiBhIHN0cmluZyBQaGFzZXIgd2lsbCBnZXQgZm9yIGFuIGVudHJ5IGluIHRoZSBJbWFnZSBDYWNoZS4gT3IgaXQgY2FuIGJlIGFuIGluc3RhbmNlIG9mIGEgUmVuZGVyVGV4dHVyZSwgQml0bWFwRGF0YSwgVmlkZW8gb3IgUElYSS5UZXh0dXJlLlxuICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbZnJhbWVdIC0gSWYgYSBUZXh0dXJlIEF0bGFzIG9yIFNwcml0ZSBTaGVldCBpcyB1c2VkIHRoaXMgYWxsb3dzIHlvdSB0byBzcGVjaWZ5IHRoZSBmcmFtZSB0byBiZSB1c2VkLiBVc2UgZWl0aGVyIGFuIGludGVnZXIgZm9yIGEgRnJhbWUgSUQgb3IgYSBzdHJpbmcgZm9yIGEgZnJhbWUgbmFtZS5cbiAgICAqIEBwYXJhbSB7UGhhc2VyLkdyb3VwfSBbZ3JvdXBdIC0gT3B0aW9uYWwgR3JvdXAgdG8gYWRkIHRoZSBvYmplY3QgdG8uIElmIG5vdCBzcGVjaWZpZWQgaXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgV29ybGQgZ3JvdXAuXG4gICAgKiBAcmV0dXJucyB7UGhhc2VyLkltYWdlfSBUaGUgbmV3bHkgY3JlYXRlZCBJbWFnZSBvYmplY3QuXG4gICAgKi9cbiAgICBwdWJsaWMgaW1hZ2UoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwga2V5Pzogc3RyaW5nIHwgUGhhc2VyLlJlbmRlclRleHR1cmUgfCBQaGFzZXIuQml0bWFwRGF0YSB8IFBJWEkuVGV4dHVyZSwgZnJhbWU/OiBzdHJpbmcgfCBudW1iZXIsIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogUGhhc2VyLkltYWdlIHtcbiAgICAgICAgaWYgKGdyb3VwID09PSB1bmRlZmluZWQpIHsgZ3JvdXAgPSB0aGlzLnRhcmdldEdyb3VwOyB9XG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBQaGFzZXIuSW1hZ2UodGhpcy5nYW1lLCB4LCB5LCBrZXksIGZyYW1lKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgU3ByaXRlIHdpdGggc3BlY2lmaWMgcG9zaXRpb24gYW5kIHNwcml0ZSBzaGVldCBrZXkuXG4gICAgKlxuICAgICogQXQgaXRzIG1vc3QgYmFzaWMgYSBTcHJpdGUgY29uc2lzdHMgb2YgYSBzZXQgb2YgY29vcmRpbmF0ZXMgYW5kIGEgdGV4dHVyZSB0aGF0IGlzIHVzZWQgd2hlbiByZW5kZXJlZC5cbiAgICAqIFRoZXkgYWxzbyBjb250YWluIGFkZGl0aW9uYWwgcHJvcGVydGllcyBhbGxvd2luZyBmb3IgcGh5c2ljcyBtb3Rpb24gKHZpYSBTcHJpdGUuYm9keSksIGlucHV0IGhhbmRsaW5nICh2aWEgU3ByaXRlLmlucHV0KSxcbiAgICAqIGV2ZW50cyAodmlhIFNwcml0ZS5ldmVudHMpLCBhbmltYXRpb24gKHZpYSBTcHJpdGUuYW5pbWF0aW9ucyksIGNhbWVyYSBjdWxsaW5nIGFuZCBtb3JlLiBQbGVhc2Ugc2VlIHRoZSBFeGFtcGxlcyBmb3IgdXNlIGNhc2VzLlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5I3Nwcml0ZVxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt4PTBdIC0gVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgc3ByaXRlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIHNwcml0ZSBtYXkgYmUgaW4uXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3k9MF0gLSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBzcHJpdGUuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgc3ByaXRlIG1heSBiZSBpbi5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfFBoYXNlci5SZW5kZXJUZXh0dXJlfFBoYXNlci5CaXRtYXBEYXRhfFBoYXNlci5WaWRlb3xQSVhJLlRleHR1cmV9IFtrZXldIC0gVGhlIGltYWdlIHVzZWQgYXMgYSB0ZXh0dXJlIGJ5IHRoaXMgZGlzcGxheSBvYmplY3QgZHVyaW5nIHJlbmRlcmluZy4gSWYgYSBzdHJpbmcgUGhhc2VyIHdpbGwgZ2V0IGZvciBhbiBlbnRyeSBpbiB0aGUgSW1hZ2UgQ2FjaGUuIE9yIGl0IGNhbiBiZSBhbiBpbnN0YW5jZSBvZiBhIFJlbmRlclRleHR1cmUsIEJpdG1hcERhdGEsIFZpZGVvIG9yIFBJWEkuVGV4dHVyZS5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW2ZyYW1lXSAtIElmIGEgVGV4dHVyZSBBdGxhcyBvciBTcHJpdGUgU2hlZXQgaXMgdXNlZCB0aGlzIGFsbG93cyB5b3UgdG8gc3BlY2lmeSB0aGUgZnJhbWUgdG8gYmUgdXNlZC4gVXNlIGVpdGhlciBhbiBpbnRlZ2VyIGZvciBhIEZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXG4gICAgKiBAcGFyYW0ge1BoYXNlci5Hcm91cH0gW2dyb3VwXSAtIE9wdGlvbmFsIEdyb3VwIHRvIGFkZCB0aGUgb2JqZWN0IHRvLiBJZiBub3Qgc3BlY2lmaWVkIGl0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIFdvcmxkIGdyb3VwLlxuICAgICogQHJldHVybnMge1BoYXNlci5TcHJpdGV9IFRoZSBuZXdseSBjcmVhdGVkIFNwcml0ZSBvYmplY3QuXG4gICAgKi9cbiAgICBwdWJsaWMgc3ByaXRlKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIGtleT86IHN0cmluZyB8IFBJWEkuVGV4dHVyZSwgZnJhbWU/OiBzdHJpbmcgfCBudW1iZXIsIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogUGhhc2VyLlNwcml0ZSB7XG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy50YXJnZXRHcm91cDsgfVxuICAgICAgICB0aGlzLnRhcmdldEdyb3VwID0gbnVsbDtcblxuICAgICAgICByZXR1cm4gZ3JvdXAuY3JlYXRlKHgsIHksIGtleSwgZnJhbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQ3JlYXRlIGEgbmV3IENyZWF0dXJlIEFuaW1hdGlvbiBvYmplY3QuXG4gICAgKlxuICAgICogQ3JlYXR1cmUgaXMgYSBjdXN0b20gR2FtZSBPYmplY3QgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBDcmVhdHVyZSBSdW50aW1lIGxpYnJhcmllcyBieSBLZXN0cmVsIE1vb24gU3R1ZGlvcy5cbiAgICAqXG4gICAgKiBJdCBhbGxvd3MgeW91IHRvIGRpc3BsYXkgYW5pbWF0ZWQgR2FtZSBPYmplY3RzIHRoYXQgd2VyZSBjcmVhdGVkIHdpdGggdGhlIFtDcmVhdHVyZSBBdXRvbWF0ZWQgQW5pbWF0aW9uIFRvb2xdKGh0dHA6Ly93d3cua2VzdHJlbG1vb24uY29tL2NyZWF0dXJlLykuXG4gICAgKlxuICAgICogTm90ZSAxOiBZb3UgY2FuIG9ubHkgdXNlIFBoYXNlci5DcmVhdHVyZSBvYmplY3RzIGluIFdlYkdMIGVuYWJsZWQgZ2FtZXMuIFRoZXkgZG8gbm90IHdvcmsgaW4gQ2FudmFzIG1vZGUgZ2FtZXMuXG4gICAgKlxuICAgICogTm90ZSAyOiBZb3UgbXVzdCB1c2UgYSBidWlsZCBvZiBQaGFzZXIgdGhhdCBpbmNsdWRlcyB0aGUgQ3JlYXR1cmVNZXNoQm9uZS5qcyBydW50aW1lIGFuZCBnbC1tYXRyaXguanMsIG9yIGhhdmUgdGhlbVxuICAgICogbG9hZGVkIGJlZm9yZSB5b3VyIFBoYXNlciBnYW1lIGJvb3RzLlxuICAgICpcbiAgICAqIFNlZSB0aGUgUGhhc2VyIGN1c3RvbSBidWlsZCBwcm9jZXNzIGZvciBtb3JlIGRldGFpbHMuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkjY3JlYXR1cmVcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeD0wXSAtIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIGNyZWF0dXJlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIGNyZWF0dXJlIG1heSBiZSBpbi5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeT0wXSAtIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIGNyZWF0dXJlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIGNyZWF0dXJlIG1heSBiZSBpbi5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfFBJWEkuVGV4dHVyZX0gW2tleV0gLSBUaGUgaW1hZ2UgdXNlZCBhcyBhIHRleHR1cmUgYnkgdGhpcyBjcmVhdHVyZSBvYmplY3QgZHVyaW5nIHJlbmRlcmluZy4gSWYgYSBzdHJpbmcgUGhhc2VyIHdpbGwgZ2V0IGZvciBhbiBlbnRyeSBpbiB0aGUgSW1hZ2UgQ2FjaGUuIE9yIGl0IGNhbiBiZSBhbiBpbnN0YW5jZSBvZiBhIFBJWEkuVGV4dHVyZS5cbiAgICAqIEBwYXJhbSB7UGhhc2VyLkdyb3VwfSBbZ3JvdXBdIC0gT3B0aW9uYWwgR3JvdXAgdG8gYWRkIHRoZSBvYmplY3QgdG8uIElmIG5vdCBzcGVjaWZpZWQgaXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgRGVmYXVsdCBMYXllciBncm91cC5cbiAgICAqIEByZXR1cm5zIHtQaGFzZXIuQ3JlYXR1cmV9IFRoZSBuZXdseSBjcmVhdGVkIFNwcml0ZSBvYmplY3QuXG4gICAgKi9cbiAgICBwdWJsaWMgY3JlYXR1cmUoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwga2V5Pzogc3RyaW5nLCBtZXNoPzogYW55LCBncm91cD86IFBoYXNlci5Hcm91cCk6IGFueSB7XG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy50YXJnZXRHcm91cDsgfVxuICAgICAgICB0aGlzLnRhcmdldEdyb3VwID0gbnVsbDtcblxuICAgICAgICB2YXIgb2JqID0gbmV3IFBoYXNlclsnQ3JlYXR1cmUnXSh0aGlzLmdhbWUsIHgsIHksIGtleSwgbWVzaCk7XG5cbiAgICAgICAgZ3JvdXAuYWRkKG9iaik7XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEEgR3JvdXAgaXMgYSBjb250YWluZXIgZm9yIGRpc3BsYXkgb2JqZWN0cyB0aGF0IGFsbG93cyBmb3IgZmFzdCBwb29saW5nLCByZWN5Y2xpbmcgYW5kIGNvbGxpc2lvbiBjaGVja3MuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkjZ3JvdXBcbiAgICAqIEBwYXJhbSB7YW55fSBbcGFyZW50XSAtIFRoZSBwYXJlbnQgR3JvdXAgb3IgRGlzcGxheU9iamVjdENvbnRhaW5lciB0aGF0IHdpbGwgaG9sZCB0aGlzIGdyb3VwLCBpZiBhbnkuIElmIHNldCB0byBudWxsIHRoZSBHcm91cCB3b24ndCBiZSBhZGRlZCB0byB0aGUgZGlzcGxheSBsaXN0LiBJZiB1bmRlZmluZWQgaXQgd2lsbCBiZSBhZGRlZCB0byBXb3JsZCBieSBkZWZhdWx0LlxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lPSdncm91cCddIC0gQSBuYW1lIGZvciB0aGlzIEdyb3VwLiBOb3QgdXNlZCBpbnRlcm5hbGx5IGJ1dCB1c2VmdWwgZm9yIGRlYnVnZ2luZy5cbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2FkZFRvU3RhZ2U9ZmFsc2VdIC0gSWYgc2V0IHRvIHRydWUgdGhpcyBHcm91cCB3aWxsIGJlIGFkZGVkIGRpcmVjdGx5IHRvIHRoZSBHYW1lLlN0YWdlIGluc3RlYWQgb2YgR2FtZS5Xb3JsZC5cbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2VuYWJsZUJvZHk9ZmFsc2VdIC0gSWYgdHJ1ZSBhbGwgU3ByaXRlcyBjcmVhdGVkIHdpdGggYEdyb3VwLmNyZWF0ZWAgb3IgYEdyb3VwLmNyZWF0ZU11bGl0cGxlYCB3aWxsIGhhdmUgYSBwaHlzaWNzIGJvZHkgY3JlYXRlZCBvbiB0aGVtLiBDaGFuZ2UgdGhlIGJvZHkgdHlwZSB3aXRoIHBoeXNpY3NCb2R5VHlwZS5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbcGh5c2ljc0JvZHlUeXBlPTBdIC0gSWYgZW5hYmxlQm9keSBpcyB0cnVlIHRoaXMgaXMgdGhlIHR5cGUgb2YgcGh5c2ljcyBib2R5IHRoYXQgaXMgY3JlYXRlZCBvbiBuZXcgU3ByaXRlcy4gUGhhc2VyLlBoeXNpY3MuQVJDQURFLCBQaGFzZXIuUGh5c2ljcy5QMiwgUGhhc2VyLlBoeXNpY3MuTklOSkEsIGV0Yy5cbiAgICAqIEByZXR1cm4ge1BoYXNlci5Hcm91cH0gVGhlIG5ld2x5IGNyZWF0ZWQgR3JvdXAuXG4gICAgKi9cbiAgICBwdWJsaWMgZ3JvdXAocGFyZW50PzogYW55LCBuYW1lOiBzdHJpbmcgPSAnZ3JvdXAnLCBhZGRUb1N0YWdlOiBib29sZWFuID0gZmFsc2UsIGVuYWJsZUJvZHk6IGJvb2xlYW4gPSBmYWxzZSwgcGh5c2ljc0JvZHlUeXBlOiBudW1iZXIgPSAwKSB7XG4gICAgICAgIGlmIChwYXJlbnQgPT09IHVuZGVmaW5lZCAmJiBhZGRUb1N0YWdlICE9PSB0cnVlKSB7IHBhcmVudCA9IHRoaXMudGFyZ2V0R3JvdXA7IH1cbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBuZXcgUGhhc2VyLkdyb3VwKHRoaXMuZ2FtZSwgcGFyZW50LCBuYW1lLCBhZGRUb1N0YWdlLCBlbmFibGVCb2R5LCBwaHlzaWNzQm9keVR5cGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQSBHcm91cCBpcyBhIGNvbnRhaW5lciBmb3IgZGlzcGxheSBvYmplY3RzIHRoYXQgYWxsb3dzIGZvciBmYXN0IHBvb2xpbmcsIHJlY3ljbGluZyBhbmQgY29sbGlzaW9uIGNoZWNrcy5cbiAgICAqXG4gICAgKiBBIFBoeXNpY3MgR3JvdXAgaXMgdGhlIHNhbWUgYXMgYW4gb3JkaW5hcnkgR3JvdXAgZXhjZXB0IHRoYXQgaXMgaGFzIGVuYWJsZUJvZHkgdHVybmVkIG9uIGJ5IGRlZmF1bHQsIHNvIGFueSBTcHJpdGVzIGl0IGNyZWF0ZXNcbiAgICAqIGFyZSBhdXRvbWF0aWNhbGx5IGdpdmVuIGEgcGh5c2ljcyBib2R5LlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5I3BoeXNpY3NHcm91cFxuICAgICogQHBhcmFtIHtudW1iZXJ9IFtwaHlzaWNzQm9keVR5cGU9UGhhc2VyLlBoeXNpY3MuQVJDQURFXSAtIElmIGVuYWJsZUJvZHkgaXMgdHJ1ZSB0aGlzIGlzIHRoZSB0eXBlIG9mIHBoeXNpY3MgYm9keSB0aGF0IGlzIGNyZWF0ZWQgb24gbmV3IFNwcml0ZXMuIFBoYXNlci5QaHlzaWNzLkFSQ0FERSwgUGhhc2VyLlBoeXNpY3MuUDIsIFBoYXNlci5QaHlzaWNzLk5JTkpBLCBldGMuXG4gICAgKiBAcGFyYW0ge2FueX0gW3BhcmVudF0gLSBUaGUgcGFyZW50IEdyb3VwIG9yIERpc3BsYXlPYmplY3RDb250YWluZXIgdGhhdCB3aWxsIGhvbGQgdGhpcyBncm91cCwgaWYgYW55LiBJZiBzZXQgdG8gbnVsbCB0aGUgR3JvdXAgd29uJ3QgYmUgYWRkZWQgdG8gdGhlIGRpc3BsYXkgbGlzdC4gSWYgdW5kZWZpbmVkIGl0IHdpbGwgYmUgYWRkZWQgdG8gV29ybGQgYnkgZGVmYXVsdC5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZT0nZ3JvdXAnXSAtIEEgbmFtZSBmb3IgdGhpcyBHcm91cC4gTm90IHVzZWQgaW50ZXJuYWxseSBidXQgdXNlZnVsIGZvciBkZWJ1Z2dpbmcuXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFthZGRUb1N0YWdlPWZhbHNlXSAtIElmIHNldCB0byB0cnVlIHRoaXMgR3JvdXAgd2lsbCBiZSBhZGRlZCBkaXJlY3RseSB0byB0aGUgR2FtZS5TdGFnZSBpbnN0ZWFkIG9mIEdhbWUuV29ybGQuXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuR3JvdXB9IFRoZSBuZXdseSBjcmVhdGVkIEdyb3VwLlxuICAgICovXG4gICAgcHVibGljIHBoeXNpY3NHcm91cChwaHlzaWNzQm9keVR5cGU6IG51bWJlciA9IDAsIHBhcmVudD86IGFueSwgbmFtZTogc3RyaW5nID0gJ2dyb3VwJywgYWRkVG9TdGFnZTogYm9vbGVhbiA9IGZhbHNlKTogUGhhc2VyLkdyb3VwIHtcbiAgICAgICAgaWYgKHBhcmVudCA9PT0gdW5kZWZpbmVkKSB7IHBhcmVudCA9IHRoaXMudGFyZ2V0R3JvdXA7IH1cbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBuZXcgUGhhc2VyLkdyb3VwKHRoaXMuZ2FtZSwgcGFyZW50LCBuYW1lLCBhZGRUb1N0YWdlLCB0cnVlLCBwaHlzaWNzQm9keVR5cGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQSBTcHJpdGVCYXRjaCBpcyBhIHJlYWxseSBmYXN0IHZlcnNpb24gb2YgYSBQaGFzZXIgR3JvdXAgYnVpbHQgc29sZWx5IGZvciBzcGVlZC5cbiAgICAqIFVzZSB3aGVuIHlvdSBuZWVkIGEgbG90IG9mIHNwcml0ZXMgb3IgcGFydGljbGVzIGFsbCBzaGFyaW5nIHRoZSBzYW1lIHRleHR1cmUuXG4gICAgKiBUaGUgc3BlZWQgZ2FpbnMgYXJlIHNwZWNpZmljYWxseSBmb3IgV2ViR0wuIEluIENhbnZhcyBtb2RlIHlvdSB3b24ndCBzZWUgYW55IHJlYWwgZGlmZmVyZW5jZS5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSNzcHJpdGVCYXRjaFxuICAgICogQHBhcmFtIHtQaGFzZXIuR3JvdXB8bnVsbH0gcGFyZW50IC0gVGhlIHBhcmVudCBHcm91cCB0aGF0IHdpbGwgaG9sZCB0aGlzIFNwcml0ZSBCYXRjaC4gU2V0IHRvIGB1bmRlZmluZWRgIG9yIGBudWxsYCB0byBhZGQgZGlyZWN0bHkgdG8gZ2FtZS53b3JsZC5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZT0nZ3JvdXAnXSAtIEEgbmFtZSBmb3IgdGhpcyBTcHJpdGUgQmF0Y2guIE5vdCB1c2VkIGludGVybmFsbHkgYnV0IHVzZWZ1bCBmb3IgZGVidWdnaW5nLlxuICAgICogQHBhcmFtIHtib29sZWFufSBbYWRkVG9TdGFnZT1mYWxzZV0gLSBJZiBzZXQgdG8gdHJ1ZSB0aGlzIFNwcml0ZSBCYXRjaCB3aWxsIGJlIGFkZGVkIGRpcmVjdGx5IHRvIHRoZSBHYW1lLlN0YWdlIGluc3RlYWQgb2YgdGhlIHBhcmVudC5cbiAgICAqIEByZXR1cm4ge1BoYXNlci5TcHJpdGVCYXRjaH0gVGhlIG5ld2x5IGNyZWF0ZWQgU3ByaXRlIEJhdGNoLlxuICAgICovXG4gICAgcHVibGljIHNwcml0ZUJhdGNoKHBhcmVudD86IGFueSwgbmFtZTogc3RyaW5nID0gXCJzcHJpdGVCYXRjaFwiLCBhZGRUb1N0YWdlOiBib29sZWFuID0gZmFsc2UpOiBQaGFzZXIuU3ByaXRlQmF0Y2gge1xuICAgICAgICBpZiAocGFyZW50ID09PSB1bmRlZmluZWQpIHsgcGFyZW50ID0gdGhpcy50YXJnZXRHcm91cCB9XG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4gbmV3IFBoYXNlci5TcHJpdGVCYXRjaCh0aGlzLmdhbWUsIHBhcmVudCwgbmFtZSwgYWRkVG9TdGFnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgVGlsZVNwcml0ZSBvYmplY3QuXG4gICAqXG4gICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5I3RpbGVTcHJpdGVcbiAgICogQHBhcmFtIHtudW1iZXJ9IHggLSBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBUaWxlU3ByaXRlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIFRpbGVTcHJpdGUgbWF5IGJlIGluLlxuICAgKiBAcGFyYW0ge251bWJlcn0geSAtIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIFRpbGVTcHJpdGUuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgVGlsZVNwcml0ZSBtYXkgYmUgaW4uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAtIFRoZSB3aWR0aCBvZiB0aGUgVGlsZVNwcml0ZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCAtIFRoZSBoZWlnaHQgb2YgdGhlIFRpbGVTcHJpdGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfFBoYXNlci5SZW5kZXJUZXh0dXJlfFBoYXNlci5CaXRtYXBEYXRhfFBoYXNlci5WaWRlb3xQSVhJLlRleHR1cmV9IGtleSAtIFRoZSBpbWFnZSB1c2VkIGFzIGEgdGV4dHVyZSBieSB0aGlzIGRpc3BsYXkgb2JqZWN0IGR1cmluZyByZW5kZXJpbmcuIElmIGEgc3RyaW5nIFBoYXNlciB3aWxsIGdldCBmb3IgYW4gZW50cnkgaW4gdGhlIEltYWdlIENhY2hlLiBPciBpdCBjYW4gYmUgYW4gaW5zdGFuY2Ugb2YgYSBSZW5kZXJUZXh0dXJlLCBCaXRtYXBEYXRhLCBWaWRlbyBvciBQSVhJLlRleHR1cmUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW2ZyYW1lXSAtIElmIGEgVGV4dHVyZSBBdGxhcyBvciBTcHJpdGUgU2hlZXQgaXMgdXNlZCB0aGlzIGFsbG93cyB5b3UgdG8gc3BlY2lmeSB0aGUgZnJhbWUgdG8gYmUgdXNlZC4gVXNlIGVpdGhlciBhbiBpbnRlZ2VyIGZvciBhIEZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXG4gICAqIEBwYXJhbSB7UGhhc2VyLkdyb3VwfSBbZ3JvdXBdIC0gT3B0aW9uYWwgR3JvdXAgdG8gYWRkIHRoZSBvYmplY3QgdG8uIElmIG5vdCBzcGVjaWZpZWQgaXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgRGVmYXVsdCBMYXllciBncm91cC5cbiAgICogQHJldHVybiB7UGhhc2VyLlRpbGVTcHJpdGV9IFRoZSBuZXdseSBjcmVhdGVkIFRpbGVTcHJpdGUgb2JqZWN0LlxuICAgKi9cbiAgICBwdWJsaWMgdGlsZVNwcml0ZSh4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCB3aWR0aDogbnVtYmVyID0gMCwgaGVpZ2h0OiBudW1iZXIgPSAwLCBrZXk/OiBzdHJpbmcsIGZyYW1lPzogc3RyaW5nIHwgbnVtYmVyLCBncm91cD86IFBoYXNlci5Hcm91cCk6IFBoYXNlci5UaWxlU3ByaXRlIHtcbiAgICAgICAgaWYgKGdyb3VwID09PSB1bmRlZmluZWQpIHsgZ3JvdXAgPSB0aGlzLnRhcmdldEdyb3VwOyB9XG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBQaGFzZXIuVGlsZVNwcml0ZSh0aGlzLmdhbWUsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGtleSwgZnJhbWUpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBSb3BlIG9iamVjdC5cbiAgICpcbiAgICogRXhhbXBsZSB1c2FnZTogaHR0cHM6Ly9naXRodWIuY29tL2NvZGV2aW5za3kvcGhhc2VyLXJvcGUtZGVtby9ibG9iL21hc3Rlci9kaXN0L2RlbW8uanNcbiAgICpcbiAgICogQG1ldGhvZCBQaGFzZXIuR2FtZU9iamVjdEZhY3Rvcnkjcm9wZVxuICAgKiBAcGFyYW0ge251bWJlcn0gW3g9MF0gLSBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBSb3BlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIHJvcGUgbWF5IGJlIGluLlxuICAgKiBAcGFyYW0ge251bWJlcn0gW3k9MF0gLSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBSb3BlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIHJvcGUgbWF5IGJlIGluLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xQaGFzZXIuUmVuZGVyVGV4dHVyZXxQaGFzZXIuQml0bWFwRGF0YXxQaGFzZXIuVmlkZW98UElYSS5UZXh0dXJlfSBba2V5XSAtIFRoZSBpbWFnZSB1c2VkIGFzIGEgdGV4dHVyZSBieSB0aGlzIGRpc3BsYXkgb2JqZWN0IGR1cmluZyByZW5kZXJpbmcuIElmIGEgc3RyaW5nIFBoYXNlciB3aWxsIGdldCBmb3IgYW4gZW50cnkgaW4gdGhlIEltYWdlIENhY2hlLiBPciBpdCBjYW4gYmUgYW4gaW5zdGFuY2Ugb2YgYSBSZW5kZXJUZXh0dXJlLCBCaXRtYXBEYXRhLCBWaWRlbyBvciBQSVhJLlRleHR1cmUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW2ZyYW1lXSAtIElmIGEgVGV4dHVyZSBBdGxhcyBvciBTcHJpdGUgU2hlZXQgaXMgdXNlZCB0aGlzIGFsbG93cyB5b3UgdG8gc3BlY2lmeSB0aGUgZnJhbWUgdG8gYmUgdXNlZC4gVXNlIGVpdGhlciBhbiBpbnRlZ2VyIGZvciBhIEZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXG4gICAqIEBwYXJhbSB7QXJyYXl9IHBvaW50cyAtIEFuIGFycmF5IG9mIHtQaGFzZXIuUG9pbnR9LlxuICAgKiBAcGFyYW0ge1BoYXNlci5Hcm91cH0gW2dyb3VwXSAtIE9wdGlvbmFsIEdyb3VwIHRvIGFkZCB0aGUgb2JqZWN0IHRvLiBJZiBub3Qgc3BlY2lmaWVkIGl0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIERlZmF1bHQgTGF5ZXIgZ3JvdXAuXG4gICAqIEByZXR1cm4ge1BoYXNlci5Sb3BlfSBUaGUgbmV3bHkgY3JlYXRlZCBSb3BlIG9iamVjdC5cbiAgICovXG4gICAgcHVibGljIHJvcGUoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwga2V5Pzogc3RyaW5nLCBmcmFtZT86IHN0cmluZyB8IG51bWJlciwgcG9pbnRzPzogUGhhc2VyLlBvaW50W10sIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogUGhhc2VyLlJvcGUge1xuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCkgeyBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7IH1cbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBncm91cC5hZGQobmV3IFBoYXNlci5Sb3BlKHRoaXMuZ2FtZSwgeCwgeSwga2V5LCBmcmFtZSwgcG9pbnRzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBDcmVhdGVzIGEgbmV3IFRleHQgb2JqZWN0LlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5I3RleHRcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeD0wXSAtIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIFRleHQuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgdGV4dCBtYXkgYmUgaW4uXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3k9MF0gLSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBUZXh0LiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIHRleHQgbWF5IGJlIGluLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IFt0ZXh0PScnXSAtIFRoZSB0ZXh0IHN0cmluZyB0aGF0IHdpbGwgYmUgZGlzcGxheWVkLlxuICAgICogQHBhcmFtIHtvYmplY3R9IFtzdHlsZV0gLSBUaGUgc3R5bGUgb2JqZWN0IGNvbnRhaW5pbmcgc3R5bGUgYXR0cmlidXRlcyBsaWtlIGZvbnQsIGZvbnQgc2l6ZSAsIGV0Yy5cbiAgICAqIEBwYXJhbSB7UGhhc2VyLkdyb3VwfSBbZ3JvdXBdIC0gT3B0aW9uYWwgR3JvdXAgdG8gYWRkIHRoZSBvYmplY3QgdG8uIElmIG5vdCBzcGVjaWZpZWQgaXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgRGVmYXVsdCBMYXllciBncm91cC5cbiAgICAqIEByZXR1cm4ge1BoYXNlci5UZXh0fSBUaGUgbmV3bHkgY3JlYXRlZCB0ZXh0IG9iamVjdC5cbiAgICAqL1xuICAgIHB1YmxpYyB0ZXh0KHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIHRleHQ6IHN0cmluZyA9ICcnLCBzdHlsZT86IFBoYXNlci5QaGFzZXJUZXh0U3R5bGUsIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogUGhhc2VyLlRleHQge1xuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCkgeyBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7IH1cbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBncm91cC5hZGQobmV3IFBoYXNlci5UZXh0KHRoaXMuZ2FtZSwgeCwgeSwgdGV4dCwgc3R5bGUpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIENyZWF0ZXMgYSBuZXcgQnV0dG9uIG9iamVjdC5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSNidXR0b25cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeD0wXSAtIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIEJ1dHRvbi4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyBidXR0b24gbWF5IGJlIGluLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt5PTBdIC0gVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgQnV0dG9uLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIGJ1dHRvbiBtYXkgYmUgaW4uXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2tleV0gLSBUaGUgaW1hZ2Uga2V5IGFzIGRlZmluZWQgaW4gdGhlIEdhbWUuQ2FjaGUgdG8gdXNlIGFzIHRoZSB0ZXh0dXJlIGZvciB0aGlzIGJ1dHRvbi5cbiAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYWxsYmFja10gLSBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoaXMgYnV0dG9uIGlzIHByZXNzZWRcbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBbY2FsbGJhY2tDb250ZXh0XSAtIFRoZSBjb250ZXh0IGluIHdoaWNoIHRoZSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCAodXN1YWxseSAndGhpcycpXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtvdmVyRnJhbWVdIC0gVGhpcyBpcyB0aGUgZnJhbWUgb3IgZnJhbWVOYW1lIHRoYXQgd2lsbCBiZSBzZXQgd2hlbiB0aGlzIGJ1dHRvbiBpcyBpbiBhbiBvdmVyIHN0YXRlLiBHaXZlIGVpdGhlciBhIG51bWJlciB0byB1c2UgYSBmcmFtZSBJRCBvciBhIHN0cmluZyBmb3IgYSBmcmFtZSBuYW1lLlxuICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbb3V0RnJhbWVdIC0gVGhpcyBpcyB0aGUgZnJhbWUgb3IgZnJhbWVOYW1lIHRoYXQgd2lsbCBiZSBzZXQgd2hlbiB0aGlzIGJ1dHRvbiBpcyBpbiBhbiBvdXQgc3RhdGUuIEdpdmUgZWl0aGVyIGEgbnVtYmVyIHRvIHVzZSBhIGZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtkb3duRnJhbWVdIC0gVGhpcyBpcyB0aGUgZnJhbWUgb3IgZnJhbWVOYW1lIHRoYXQgd2lsbCBiZSBzZXQgd2hlbiB0aGlzIGJ1dHRvbiBpcyBpbiBhIGRvd24gc3RhdGUuIEdpdmUgZWl0aGVyIGEgbnVtYmVyIHRvIHVzZSBhIGZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFt1cEZyYW1lXSAtIFRoaXMgaXMgdGhlIGZyYW1lIG9yIGZyYW1lTmFtZSB0aGF0IHdpbGwgYmUgc2V0IHdoZW4gdGhpcyBidXR0b24gaXMgaW4gYW4gdXAgc3RhdGUuIEdpdmUgZWl0aGVyIGEgbnVtYmVyIHRvIHVzZSBhIGZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXG4gICAgKiBAcGFyYW0ge1BoYXNlci5Hcm91cH0gW2dyb3VwXSAtIE9wdGlvbmFsIEdyb3VwIHRvIGFkZCB0aGUgb2JqZWN0IHRvLiBJZiBub3Qgc3BlY2lmaWVkIGl0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIERlZmF1bHQgTGF5ZXIgZ3JvdXAuXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuQnV0dG9ufSBUaGUgbmV3bHkgY3JlYXRlZCBCdXR0b24gb2JqZWN0LlxuICAgICovXG4gICAgcHVibGljIGJ1dHRvbih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCBrZXk/OiBzdHJpbmcsIGNhbGxiYWNrPzogRnVuY3Rpb24sIGNhbGxiYWNrQ29udGV4dD86IE9iamVjdCwgb3ZlckZyYW1lPzogc3RyaW5nIHwgbnVtYmVyLCBvdXRGcmFtZT86IHN0cmluZyB8IG51bWJlciwgZG93bkZyYW1lPzogc3RyaW5nIHwgbnVtYmVyLCB1cEZyYW1lPzogc3RyaW5nIHwgbnVtYmVyLCBncm91cD86IFBoYXNlci5Hcm91cCk6IFBoYXNlci5CdXR0b24ge1xuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCkgeyBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7IH1cbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBncm91cC5hZGQobmV3IFBoYXNlci5CdXR0b24odGhpcy5nYW1lLCB4LCB5LCBrZXksIGNhbGxiYWNrLCBjYWxsYmFja0NvbnRleHQsIG92ZXJGcmFtZSwgb3V0RnJhbWUsIGRvd25GcmFtZSwgdXBGcmFtZSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQ3JlYXRlcyBhIG5ldyBHcmFwaGljcyBvYmplY3QuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkjZ3JhcGhpY3NcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeD0wXSAtIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIEdyYXBoaWMuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgb2JqZWN0IG1heSBiZSBpbi5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeT0wXSAtIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIEdyYXBoaWMuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgb2JqZWN0IG1heSBiZSBpbi5cbiAgICAqIEBwYXJhbSB7UGhhc2VyLkdyb3VwfSBbZ3JvdXBdIC0gT3B0aW9uYWwgR3JvdXAgdG8gYWRkIHRoZSBvYmplY3QgdG8uIElmIG5vdCBzcGVjaWZpZWQgaXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgV29ybGQgZ3JvdXAuXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuR3JhcGhpY3N9IFRoZSBuZXdseSBjcmVhdGVkIGdyYXBoaWNzIG9iamVjdC5cbiAgICAqL1xuICAgIHB1YmxpYyBncmFwaGljcyh4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCBncm91cD86IFBoYXNlci5Hcm91cCk6IFBoYXNlci5HcmFwaGljcyB7XG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy53b3JsZDsgfVxuICAgICAgICAvKioqXG4gICAgICAgICAqIENvbW1lbnRlZCB0aGlzIG91dCAtIHNpbmNlIGdyYXBoaWNzIGFyZSBieSBkZWZhdWx0IGFkZGVkIGRpcmVjdGx5IG9uIHRoZSBnYW1lLndvcmxkLCB3ZSBzaG91bGRuJ3QgcmVzZXQgdGhpcy50YXJnZXRHcm91cFxuICAgICAgICAgKiBJdCBjb3VsZCBjYXVzZSBtYWpvciBwcm9ibGVtcyBpZiB1c2luZyBkaWpvbi91dGlscyBUZXh0dXJlcyBpbnN0YW5jZXMgYXMgYW4gaW1hZ2UgdGV4dHVyZSwgZm9yIGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICAvL3RoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBQaGFzZXIuR3JhcGhpY3ModGhpcy5nYW1lLCB4LCB5KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgQml0bWFwVGV4dCBvYmplY3QuXG4gICAgKlxuICAgICogQml0bWFwVGV4dCBvYmplY3RzIHdvcmsgYnkgdGFraW5nIGEgdGV4dHVyZSBmaWxlIGFuZCBhbiBYTUwgZmlsZSB0aGF0IGRlc2NyaWJlcyB0aGUgZm9udCBzdHJ1Y3R1cmUuXG4gICAgKiBJdCB0aGVuIGdlbmVyYXRlcyBhIG5ldyBTcHJpdGUgb2JqZWN0IGZvciBlYWNoIGxldHRlciBvZiB0aGUgdGV4dCwgcHJvcG9ydGlvbmFsbHkgc3BhY2VkIG91dCBhbmQgYWxpZ25lZCB0b1xuICAgICogbWF0Y2ggdGhlIGZvbnQgc3RydWN0dXJlLlxuICAgICpcbiAgICAqIEJpdG1hcFRleHQgb2JqZWN0cyBhcmUgbGVzcyBmbGV4aWJsZSB0aGFuIFRleHQgb2JqZWN0cywgaW4gdGhhdCB0aGV5IGhhdmUgbGVzcyBmZWF0dXJlcyBzdWNoIGFzIHNoYWRvd3MsIGZpbGxzIGFuZCB0aGUgYWJpbGl0eVxuICAgICogdG8gdXNlIFdlYiBGb250cy4gSG93ZXZlciB5b3UgdHJhZGUgdGhpcyBmbGV4aWJpbGl0eSBmb3IgcHVyZSByZW5kZXJpbmcgc3BlZWQuIFlvdSBjYW4gYWxzbyBjcmVhdGUgdmlzdWFsbHkgY29tcGVsbGluZyBCaXRtYXBUZXh0cyBieVxuICAgICogcHJvY2Vzc2luZyB0aGUgZm9udCB0ZXh0dXJlIGluIGFuIGltYWdlIGVkaXRvciBmaXJzdCwgYXBwbHlpbmcgZmlsbHMgYW5kIGFueSBvdGhlciBlZmZlY3RzIHJlcXVpcmVkLlxuICAgICpcbiAgICAqIFRvIGNyZWF0ZSBtdWx0aS1saW5lIHRleHQgaW5zZXJ0IFxcciwgXFxuIG9yIFxcclxcbiBlc2NhcGUgY29kZXMgaW50byB0aGUgdGV4dCBzdHJpbmcuXG4gICAgKlxuICAgICogVG8gY3JlYXRlIGEgQml0bWFwVGV4dCBkYXRhIGZpbGVzIHlvdSBjYW4gdXNlOlxuICAgICpcbiAgICAqIEJNRm9udCAoV2luZG93cywgZnJlZSk6IGh0dHA6Ly93d3cuYW5nZWxjb2RlLmNvbS9wcm9kdWN0cy9ibWZvbnQvXG4gICAgKiBHbHlwaCBEZXNpZ25lciAoT1MgWCwgY29tbWVyY2lhbCk6IGh0dHA6Ly93d3cuNzFzcXVhcmVkLmNvbS9lbi9nbHlwaGRlc2lnbmVyXG4gICAgKiBMaXR0ZXJhIChXZWItYmFzZWQsIGZyZWUpOiBodHRwOi8va3ZhemFycy5jb20vbGl0dGVyYS9cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSNiaXRtYXBUZXh0XG4gICAgKiBAcGFyYW0ge251bWJlcn0geCAtIFggY29vcmRpbmF0ZSB0byBkaXNwbGF5IHRoZSBCaXRtYXBUZXh0IG9iamVjdCBhdC5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IC0gWSBjb29yZGluYXRlIHRvIGRpc3BsYXkgdGhlIEJpdG1hcFRleHQgb2JqZWN0IGF0LlxuICAgICogQHBhcmFtIHtzdHJpbmd9IGZvbnQgLSBUaGUga2V5IG9mIHRoZSBCaXRtYXBUZXh0IGFzIHN0b3JlZCBpbiBQaGFzZXIuQ2FjaGUuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW3RleHQ9JyddIC0gVGhlIHRleHQgdGhhdCB3aWxsIGJlIHJlbmRlcmVkLiBUaGlzIGNhbiBhbHNvIGJlIHNldCBsYXRlciB2aWEgQml0bWFwVGV4dC50ZXh0LlxuICAgICogQHBhcmFtIHtudW1iZXJ9IFtzaXplPTMyXSAtIFRoZSBzaXplIHRoZSBmb250IHdpbGwgYmUgcmVuZGVyZWQgYXQgaW4gcGl4ZWxzLlxuICAgICogQHBhcmFtIHtQaGFzZXIuR3JvdXB9IFtncm91cF0gLSBPcHRpb25hbCBHcm91cCB0byBhZGQgdGhlIG9iamVjdCB0by4gSWYgbm90IHNwZWNpZmllZCBpdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBXb3JsZCBncm91cC5cbiAgICAqIEByZXR1cm4ge1BoYXNlci5CaXRtYXBUZXh0fSBUaGUgbmV3bHkgY3JlYXRlZCBiaXRtYXBUZXh0IG9iamVjdC5cbiAgICAqL1xuICAgIHB1YmxpYyBiaXRtYXBUZXh0KHg/OiBudW1iZXIsIHk/OiBudW1iZXIsIGZvbnQ/OiBzdHJpbmcsIHRleHQ6IHN0cmluZyA9IFwiXCIsIHNpemU6IG51bWJlciA9IDMyLCBncm91cD86IFBoYXNlci5Hcm91cCk6IFBoYXNlci5CaXRtYXBUZXh0IHtcbiAgICAgICAgaWYgKGdyb3VwID09PSB1bmRlZmluZWQpIHsgZ3JvdXAgPSB0aGlzLnRhcmdldEdyb3VwOyB9XG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBQaGFzZXIuQml0bWFwVGV4dCh0aGlzLmdhbWUsIHgsIHksIGZvbnQsIHRleHQsIHNpemUpKTtcbiAgICB9XG5cbiAgICAvLyBkaWpvbiBzcGVjaWZpYyBkaXNwbGF5IG9iamVjdHNcbiAgICBwdWJsaWMgZFNwcml0ZSh4PzogbnVtYmVyLCB5PzogbnVtYmVyLCBrZXk/OiBzdHJpbmcgfCBQaGFzZXIuUmVuZGVyVGV4dHVyZSB8IFBoYXNlci5CaXRtYXBEYXRhIHwgUElYSS5UZXh0dXJlLCBmcmFtZT86IHN0cmluZyB8IG51bWJlciwgbmFtZT86IHN0cmluZywgY29tcG9uZW50cz86IENvbXBvbmVudFtdLCBncm91cD86IFBoYXNlci5Hcm91cCk6IFNwcml0ZSB7XG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy50YXJnZXRHcm91cDsgfVxuICAgICAgICB0aGlzLnRhcmdldEdyb3VwID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGdyb3VwLmFkZChuZXcgU3ByaXRlKHgsIHksIGtleSwgZnJhbWUsIG5hbWUsIGNvbXBvbmVudHMpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZEdyb3VwKHg/OiBudW1iZXIsIHk/OiBudW1iZXIsIG5hbWU/OiBzdHJpbmcsIGFkZFRvU3RhZ2U/OiBib29sZWFuLCBjb21wb25lbnRzPzogQ29tcG9uZW50W10sIGVuYWJsZUJvZHk/OiBib29sZWFuLCBwaHlzaWNzQm9keVR5cGU/OiBudW1iZXIsIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogR3JvdXAge1xuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCAmJiBhZGRUb1N0YWdlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7XG4gICAgICAgICAgICB0aGlzLnRhcmdldEdyb3VwID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBncm91cC5hZGQobmV3IEdyb3VwKHgsIHksIG5hbWUsIGFkZFRvU3RhZ2UsIGNvbXBvbmVudHMsIGVuYWJsZUJvZHksIHBoeXNpY3NCb2R5VHlwZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBHcm91cCh4LCB5LCBuYW1lLCBhZGRUb1N0YWdlLCBjb21wb25lbnRzLCBlbmFibGVCb2R5LCBwaHlzaWNzQm9keVR5cGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkVGV4dCh4OiBudW1iZXIsIHk6IG51bWJlciwgdGV4dD86IHN0cmluZywgZm9udE5hbWU/OiBzdHJpbmcsIGZvbnRTaXplPzogbnVtYmVyLCBmb250Q29sb3I/OiBzdHJpbmcsIGZvbnRBbGlnbj86IHN0cmluZywgd29yZFdyYXA/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciwgbGluZVNwYWNpbmc/OiBudW1iZXIsIHNldHRpbmdzPzogT2JqZWN0LCBncm91cD86IFBoYXNlci5Hcm91cCk6IFRleHQge1xuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCkgeyBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7IH1cbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBncm91cC5hZGQobmV3IFRleHQoeCwgeSwgdGV4dCwgZm9udE5hbWUsIGZvbnRTaXplLCBmb250Q29sb3IsIGZvbnRBbGlnbiwgd29yZFdyYXAsIHdpZHRoLCBsaW5lU3BhY2luZywgc2V0dGluZ3MpKTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGRCaXRtYXBUZXh0KHg6bnVtYmVyID0gMCwgeTpudW1iZXIgPSAwLCBmb250OnN0cmluZyA9IG51bGwsIHRleHQ6c3RyaW5nID0gXCJcIiwgc2l6ZTpudW1iZXIgPSAxMiwgYWxpZ246c3RyaW5nID0gJ2xlZnQnLCBjb2xvcjpudW1iZXIgPSAweGZmZmZmZiwgc21vb3RoaW5nOmJvb2xlYW4gPSB0cnVlLCBhdXRvRmxhdHRlbjpib29sZWFuID0gdHJ1ZSwgbWFrZUltYWdlOmJvb2xlYW4gPSBmYWxzZSwgZ3JvdXA/OiBQaGFzZXIuR3JvdXApOiBCaXRtYXBUZXh0IHtcbiAgICAgICAgaWYgKGdyb3VwID09PSB1bmRlZmluZWQpIHsgZ3JvdXAgPSB0aGlzLnRhcmdldEdyb3VwOyB9XG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBCaXRtYXBUZXh0KHgsIHksIGZvbnQsIHRleHQsIHNpemUsIGFsaWduLCBjb2xvciwgc21vb3RoaW5nLCBhdXRvRmxhdHRlbiwgbWFrZUltYWdlKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNwaW5lKGFzc2V0TmFtZTogc3RyaW5nID0gJycsIHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIGdyb3VwPzogUGhhc2VyLkdyb3VwKSB7XG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy50YXJnZXRHcm91cDsgfVxuICAgICAgICB0aGlzLnRhcmdldEdyb3VwID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGdyb3VwLmFkZChuZXcgU3BpbmUoYXNzZXROYW1lLCB4LCB5KSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldERlZmF1bHRMYXllcih2YWx1ZTogUGhhc2VyLkdyb3VwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ0FVVElPTjogQ2hhbmdpbmcgdGhlIGRlZmF1bHQgbGF5ZXIgd2lsbCBjaGFuZ2UgdGhlIHRhcmdldCBncm91cCBmb3IgLmFkZFwiKTtcbiAgICAgICAgdGhpcy5fZGVmYXVsdExheWVyID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkZWZhdWx0TGF5ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0TGF5ZXI7XG4gICAgfVxuICAgIC8vIGdldHRlciAvIHNldHRlclxuICAgIHB1YmxpYyBzZXQgdGFyZ2V0R3JvdXAodmFsdWU6IFBoYXNlci5Hcm91cCkge1xuICAgICAgICB0aGlzLl90YXJnZXRHcm91cCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdGFyZ2V0R3JvdXAoKTogUGhhc2VyLkdyb3VwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RhcmdldEdyb3VwIHx8IHRoaXMuX2RlZmF1bHRMYXllcjtcbiAgICB9XG59IiwiLyoqXG4gKiBTZXF1ZW5jZU1hbmFnZXJcbiAqL1xuaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xuaW1wb3J0IHtHYW1lfSBmcm9tICcuLi9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFNlcXVlbmNlTWFuYWdlciB7XG4gICAgcHVibGljIGdhbWU6IEdhbWU7XG5cbiAgICBwcml2YXRlIF9kZWZhdWx0SW50ZXJ2YWwgPSAyMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdhbWUgPSBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWU7XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgcHJpdmF0ZSBfZXhlY3V0ZU1ldGhvZChzZXF1ZW5jZTogQXJyYXk8RnVuY3Rpb24+LCBjb250ZXh0OiBPYmplY3QsIGNhbGxiYWNrOiBGdW5jdGlvbiwgY2FsbGJhY2tDb250ZXh0OiBPYmplY3QpIHtcbiAgICAgICAgdmFyIGZ1bmMgPSBzZXF1ZW5jZS5zaGlmdCgpO1xuICAgICAgICBpZiAodHlwZW9mIGZ1bmMgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb250ZXh0ICE9PSAndW5kZWZpbmVkJyAmJiBjb250ZXh0KSB7XG4gICAgICAgICAgICBmdW5jLmNhbGwoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VxdWVuY2UubGVuZ3RoID09PSAwICYmIGNhbGxiYWNrICYmIGNhbGxiYWNrQ29udGV4dCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbChjYWxsYmFja0NvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICBwdWJsaWMgcnVuKHNlcXVlbmNlOiBBcnJheTxGdW5jdGlvbj4sIGNvbnRleHQ6IE9iamVjdCwgaW50ZXJ2YWw6IG51bWJlciwgY29tcGxldGVDYWxsYmFjazogRnVuY3Rpb24sIGNvbXBsZXRlQ2FsbGJhY2tDb250ZXh0OiBPYmplY3QpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZXh0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb250ZXh0IG11c3QgYmUgcHJvdmlkZWQgZm9yIHRoZSBzZXF1ZW5jZSBtZXRob2RzJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGludGVydmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaW50ZXJ2YWwgPSB0aGlzLl9kZWZhdWx0SW50ZXJ2YWw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VxdWVuY2UubGVuZ3RoID09PSAwICYmIHR5cGVvZiBjb21wbGV0ZUNhbGxiYWNrICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29tcGxldGVDYWxsYmFja0NvbnRleHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb21wbGV0ZUNhbGxiYWNrLmNhbGwoY29tcGxldGVDYWxsYmFja0NvbnRleHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGludGVydmFsID09PSAwKSB7XG4gICAgICAgICAgICB3aGlsZSAoc2VxdWVuY2UubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICB0aGlzLl9leGVjdXRlTWV0aG9kKHNlcXVlbmNlLCBjb250ZXh0LCB0eXBlb2YgY29tcGxldGVDYWxsYmFjayA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogY29tcGxldGVDYWxsYmFjaywgdHlwZW9mIGNvbXBsZXRlQ2FsbGJhY2tDb250ZXh0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBjb21wbGV0ZUNhbGxiYWNrQ29udGV4dCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZXZlbnQgPSB0aGlzLmdhbWUudGltZS5ldmVudHMucmVwZWF0KGludGVydmFsLCBzZXF1ZW5jZS5sZW5ndGgsIHRoaXMuX2V4ZWN1dGVNZXRob2QsIHRoaXMsIHNlcXVlbmNlLCBjb250ZXh0LCB0eXBlb2YgY29tcGxldGVDYWxsYmFjayA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogY29tcGxldGVDYWxsYmFjaywgdHlwZW9mIGNvbXBsZXRlQ2FsbGJhY2tDb250ZXh0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBjb21wbGV0ZUNhbGxiYWNrQ29udGV4dCk7XG4gICAgICAgIGV2ZW50LnRpbWVyLnBhdXNlZCA9IGZhbHNlO1xuICAgIH1cbn0iLCIvKipcbiAqIFN0YXRlXG4gKi9cbmltcG9ydCB7QXBwbGljYXRpb259IGZyb20gJy4uL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7R2FtZSwgR2FtZU9iamVjdEZhY3Rvcnl9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHtNZWRpYXRvcn0gZnJvbSAnLi4vbXZjJztcblxuZXhwb3J0IGNsYXNzIFN0YXRlIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcbiAgICBwcm90ZWN0ZWQgX2F1ZGlvOiBQaGFzZXIuU291bmRbXSA9IFtdO1xuICAgIHByb3RlY3RlZCBfbWVkaWF0b3I6IE1lZGlhdG9yID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICAvLyBQaGFzZXIuU3RhdGUgb3ZlcnJpZGVzXG4gICAgcHVibGljIGluaXQoKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcHJlbG9hZCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucHJlbG9hZElEKVxuICAgICAgICAgICAgdGhpcy5nYW1lLmFzc2V0LmxvYWRBc3NldHModGhpcy5wcmVsb2FkSUQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5nYW1lLmFzc2V0LmFsbFNvdW5kc0RlY29kZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmFzc2V0Lm9uTG9hZENvbXBsZXRlQW5kQXVkaW9EZWNvZGVkLmFkZE9uY2UodGhpcy5jcmVhdGUsIHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYnVpbGRJbnRlcmZhY2UoKTtcbiAgICAgICAgdGhpcy5hZnRlckJ1aWxkSW50ZXJmYWNlKCk7XG4gICAgICAgIHRoaXMuc3RhcnRCdWlsZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaHV0ZG93bihyZW1vdmVNZWRpYXRvcjogYm9vbGVhbiA9IHRydWUsIHJlbW92ZUF1ZGlvOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgICBpZiAocmVtb3ZlTWVkaWF0b3IpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlTWVkaWF0b3IoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVtb3ZlQXVkaW8pIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQXVkaW8oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLnNodXRkb3duKCk7XG4gICAgfVxuXG4gICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICBwdWJsaWMgbGlzdEJ1aWxkU2VxdWVuY2UoKTogRnVuY3Rpb25bXSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYnVpbGRJbnRlcmZhY2UoKTogdm9pZCB7IH1cblxuICAgIHB1YmxpYyBhZnRlckJ1aWxkSW50ZXJmYWNlKCk6IHZvaWQgeyB9XG5cbiAgICBwdWJsaWMgc3RhcnRCdWlsZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nYW1lLnNlcXVlbmNlLnJ1bih0aGlzLmxpc3RCdWlsZFNlcXVlbmNlKCksIHRoaXMsIHRoaXMuYnVpbGRJbnRlcnZhbCwgdGhpcy5wcmVBZnRlckJ1aWxkLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHJlQWZ0ZXJCdWlsZCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmdhbWUudHJhbnNpdGlvbiA9PT0gJ3VuZGVmaW5lZCcgfHwgIXRoaXMuZ2FtZS50cmFuc2l0aW9uLmNhblRyYW5zaXRpb25PdXQoKSkge1xuICAgICAgICAgICAgdGhpcy5hZnRlckJ1aWxkKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lLnRyYW5zaXRpb24uY2FuVHJhbnNpdGlvbk91dCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLnRyYW5zaXRpb24ub25UcmFuc2l0aW9uT3V0Q29tcGxldGUuYWRkT25jZSh0aGlzLmFmdGVyQnVpbGQsIHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS50cmFuc2l0aW9uLnRyYW5zaXRpb25PdXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhZnRlckJ1aWxkKCk6IHZvaWQgeyB9XG5cbiAgICBwdWJsaWMgYWRkQXVkaW8odHJhY2s6IFBoYXNlci5Tb3VuZCk6IFBoYXNlci5Tb3VuZCB7XG4gICAgICAgIGlmICghdGhpcy5fYXVkaW8pIHtcbiAgICAgICAgICAgIHRoaXMuX2F1ZGlvID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYXVkaW8ucHVzaCh0cmFjayk7XG4gICAgICAgIHJldHVybiB0cmFjaztcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlQXVkaW8oKTogdm9pZCB7XG4gICAgICAgIHZhciBzb3VuZDogUGhhc2VyLlNvdW5kO1xuICAgICAgICBpZiAoIXRoaXMuX2F1ZGlvKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAodGhpcy5fYXVkaW8ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc291bmQgPSB0aGlzLl9hdWRpby5wb3AoKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc291bmQgIT09ICd1bmRlZmluZWQnICYmIHNvdW5kICE9IG51bGwgJiYgdHlwZW9mIHNvdW5kLnN0b3AgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzb3VuZC5vblN0b3AgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdW5kLm9uU3RvcC5yZW1vdmVBbGwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc291bmQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZU1lZGlhdG9yKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX21lZGlhdG9yKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLl9tZWRpYXRvci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuX21lZGlhdG9yID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBnZXR0ZXIgLyBzZXR0ZXJcbiAgICBwdWJsaWMgZ2V0IHByZWxvYWRJRCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGJ1aWxkSW50ZXJ2YWwoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIDEwO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYWRkKCk6IEdhbWVPYmplY3RGYWN0b3J5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZS5hZGRUb0dhbWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhcHAoKTogQXBwbGljYXRpb24ge1xuICAgICAgICByZXR1cm4gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGdhbWUoKTogR2FtZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwcC5nYW1lO1xuICAgIH1cbn0iLCIvKipcbiAqIFN0b3JhZ2VNYW5hZ2VyXG4gKi9cbmltcG9ydCB7QXBwbGljYXRpb259IGZyb20gJy4uL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7R2FtZX0gZnJvbSAnLi4vY29yZSc7XG5leHBvcnQgY2xhc3MgU3RvcmFnZU1hbmFnZXIge1xuICAgIHB1YmxpYyBnYW1lOiBHYW1lO1xuICAgIHByaXZhdGUgX2xvY2FsU3RvcmFnZUF2YWlsYWJsZTogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdhbWUgPSBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWU7XG4gICAgICAgIHRoaXMuX2luaXQoKTtcbiAgICB9XG5cbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICBwcml2YXRlIF9pbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9sb2NhbFN0b3JhZ2VBdmFpbGFibGUgPSB0aGlzLl9nZXRJc0xvY2FsU3RvcmFnZUF2YWlsYWJsZSgpO1xuICAgICAgICBjb25zb2xlLmxvZygnbG9jYWwgc3RvcmFnZSBhdmFpbGFibGUnLCB0aGlzLl9sb2NhbFN0b3JhZ2VBdmFpbGFibGUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldElzTG9jYWxTdG9yYWdlQXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuICdsb2NhbFN0b3JhZ2UnIGluIHdpbmRvdyAmJiB3aW5kb3dbJ2xvY2FsU3RvcmFnZSddICE9PSBudWxsO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRTdHJpbmcoZGF0YTogT2JqZWN0IHwgc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIganNvbkRhdGE7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGpzb25EYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb3VsZCBub3QgY29udmVydCcgKyBkYXRhICsgJyB0byBqc29uJyk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBqc29uRGF0YTtcbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuICAgIC8qKlxuICAgICogZ2V0cyBzdG9yZWQgZGF0YSB3aXRoIHRoZSBzcGVjaWZpZWQga2V5XG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBrZXkgICAgdGhlIExvY2FsU3RvcmFnZSBrZXkgd2hlcmUgdGhlIGRhdGEgaXMgc3RvcmVkXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBpc0pTT04gaXMgdGhlIHN0b3JlZCBkYXRhIGp1c3QgYSBzdHJpbmcgb3IgaXMgaXQgc3RyaW5naWZpZWQganNvbiAoYXNzdW1lcyBpdCdzIEpTT04pXG4gICAgKiBAcmV0dXJuIHtTdHJpbmcgfCBPYmplY3R9IHRoZSByZXRyaWV2ZWQgZGF0YSAtIGlmIGl0J3MgYSBKU09OIHN0cmluZywgd2UgcGFyc2UgdGhlIGRhdGEgYW5kIHJldHVybiB0aGUgSlNPTiBvYmplY3RcbiAgICAqL1xuICAgIHB1YmxpYyBnZXRGcm9tTG9jYWxTdG9yYWdlKGtleTogc3RyaW5nLCBpc0pTT046IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHZhciBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIGRhdGEgc2F2ZWQgd2l0aCB0aGUga2V5Jywga2V5KTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzSlNPTiAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogc2F2ZXMgZGF0YSB0byBsb2NhbHN0b3JhZ2VcbiAgICAqIEBwYXJhbSAge1N0cmluZ30ga2V5ICAgdGhlIExvY2FsU3RvcmFnZSBrZXkgdGhlIGRhdGEgd2lsbCBiZSBzYXZlZCB0b1xuICAgICogQHBhcmFtICB7U3RyaW5nfE9iamVjdH0gdmFsdWUgdGhlIGRhdGEgdG8gc2F2ZSAoaWYgaXQncyBhbiBvYmplY3QsIHdpbGwgYmUgc3RyaW5naWZpZWQgYmVmb3JlIHNhdmluZylcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgc2F2ZVRvTG9jYWxTdG9yYWdlKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgT2JqZWN0KSB7XG4gICAgICAgIGlmICghdGhpcy5fbG9jYWxTdG9yYWdlQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gbG9jYWwgc3RvcmFnZScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHRoaXMuX2dldFN0cmluZyh2YWx1ZSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygneW91ciBkYXRhIGNvdWxkIG5vdCBiZSBzYXZlZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBjbGVhciBzdG9yZWQgZGF0YVxuICAgICogQHBhcmFtICB7U3RyaW5nfSBrZXkgdGhlIExvY2FsU3RvcmFnZSBrZXkgdG8gY2xlYXJcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgY2xlYXJGcm9tTG9jYWxTdG9yYWdlKGtleTogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdGhpcy5fbG9jYWxTdG9yYWdlQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gbG9jYWwgc3RvcmFnZScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxuICAgIH1cbn0iLCIvKipcbiAqIFRyYW5zaXRpb25NYW5hZ2VyXG4gKi9cbmltcG9ydCB7QXBwbGljYXRpb259IGZyb20gJy4uL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7R2FtZSwgR2FtZU9iamVjdEZhY3Rvcnl9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHtJVHJhbnNpdGlvbiwgSVRyYW5zaXRpb25IYW5kbGVyLCBJUHJlbG9hZEhhbmRsZXJ9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY2xhc3MgVHJhbnNpdGlvbk1hbmFnZXIge1xuICAgIHB1YmxpYyBnYW1lOiBHYW1lO1xuICAgIHB1YmxpYyBvblRyYW5zaXRpb25PdXRDb21wbGV0ZTogUGhhc2VyLlNpZ25hbCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgcHVibGljIG9uVHJhbnNpdGlvbkluQ29tcGxldGU6IFBoYXNlci5TaWduYWwgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuXG4gICAgcHJpdmF0ZSBfdHJhbnNpdGlvbjogSVRyYW5zaXRpb24gPSBudWxsO1xuICAgIHByaXZhdGUgX3RyYW5zaXRpb25zOiBPYmplY3QgPSB7fTtcbiAgICBwcml2YXRlIF9leGNlcHRpb25zOiBPYmplY3QgPSB7fTtcblxuICAgIHByaXZhdGUgX2Zyb21TdGF0ZTogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIF90b1N0YXRlOiBzdHJpbmcgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9hZGQoaWQ6IHN0cmluZywgb3V0SGFuZGxlcjogSVRyYW5zaXRpb25IYW5kbGVyLCBwcmVsb2FkSGFuZGxlcjogSVByZWxvYWRIYW5kbGVyLCBpbkhhbmRsZXI6IElUcmFuc2l0aW9uSGFuZGxlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uc1tpZF0gPSB7XG4gICAgICAgICAgICBvdXRIYW5kbGVyOiBvdXRIYW5kbGVyLFxuICAgICAgICAgICAgcHJlbG9hZEhhbmRsZXI6IHByZWxvYWRIYW5kbGVyLFxuICAgICAgICAgICAgaW5IYW5kbGVyOiBpbkhhbmRsZXJcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRUcmFuc2l0aW9uKGluU3RhdGU6IHN0cmluZywgb3V0U3RhdGU6IHN0cmluZykge1xuICAgICAgICB2YXIgdHJhbnNpdGlvbiA9IHRoaXMuX3RyYW5zaXRpb25zW2luU3RhdGUgKyAnLycgKyBvdXRTdGF0ZV07XG4gICAgICAgIGlmICh0eXBlb2YgdHJhbnNpdGlvbiA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB0cmFuc2l0aW9uID0gdGhpcy5fdHJhbnNpdGlvbnNbJ2FsbCddO1xuXG4gICAgICAgIHJldHVybiB0eXBlb2YgdHJhbnNpdGlvbiA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogdHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90cmFuc2l0aW9uSW5Db21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiA9IHRoaXMuX2dldFRyYW5zaXRpb24odGhpcy5fZnJvbVN0YXRlLCB0aGlzLl90b1N0YXRlKTtcbiAgICAgICAgaWYgKCF0aGlzLl90cmFuc2l0aW9uKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fdHJhbnNpdGlvbi5wcmVsb2FkSGFuZGxlci5sb2FkU3RhcnQgPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICB0aGlzLmdhbWUuYXNzZXQub25Mb2FkU3RhcnQuYWRkT25jZSh0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyLmxvYWRTdGFydCwgdGhpcy5fdHJhbnNpdGlvbi5wcmVsb2FkSGFuZGxlcik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyLmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmFzc2V0Lm9uRmlsZUNvbXBsZXRlLmFkZCh0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyLmxvYWRQcm9ncmVzcywgdGhpcy5fdHJhbnNpdGlvbi5wcmVsb2FkSGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdhbWUuYXNzZXQub25Mb2FkQ29tcGxldGVBbmRBdWRpb0RlY29kZWQuYWRkT25jZSh0aGlzLl9wcmVsb2FkQ29tcGxldGUsIHRoaXMpO1xuICAgICAgICB0aGlzLm9uVHJhbnNpdGlvbkluQ29tcGxldGUuZGlzcGF0Y2goKTtcblxuICAgICAgICB0aGlzLmdhbWUuY2hhbmdlU3RhdGUodGhpcy5fdG9TdGF0ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5vblRyYW5zaXRpb25PdXRDb21wbGV0ZS5kaXNwYXRjaCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3ByZWxvYWRDb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiA9IHRoaXMuX2dldFRyYW5zaXRpb24odGhpcy5fZnJvbVN0YXRlLCB0aGlzLl90b1N0YXRlKTtcbiAgICAgICAgaWYgKCF0aGlzLl90cmFuc2l0aW9uKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHRoaXMuZ2FtZS5hc3NldC5vbkZpbGVDb21wbGV0ZS5yZW1vdmUodGhpcy5fdHJhbnNpdGlvbi5wcmVsb2FkSGFuZGxlci5sb2FkUHJvZ3Jlc3MsIHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fdHJhbnNpdGlvbi5wcmVsb2FkSGFuZGxlci5sb2FkQ29tcGxldGUgPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyLmxvYWRDb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NsZWFyVHJhbnNpdGlvbigpIHtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbi5vdXRIYW5kbGVyLnRyYW5zaXRpb25JbkNvbXBsZXRlLnJlbW92ZSh0aGlzLl90cmFuc2l0aW9uT3V0Q29tcGxldGUsIHRoaXMpO1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uLmluSGFuZGxlci50cmFuc2l0aW9uT3V0Q29tcGxldGUucmVtb3ZlKHRoaXMuX3RyYW5zaXRpb25JbkNvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lLmFzc2V0Lm9uTG9hZENvbXBsZXRlQW5kQXVkaW9EZWNvZGVkLnJlbW92ZSh0aGlzLl9wcmVsb2FkQ29tcGxldGUsIHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWUuYXNzZXQub25Mb2FkU3RhcnQucmVtb3ZlKHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIubG9hZFN0YXJ0LCB0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5nYW1lLmFzc2V0Lm9uRmlsZUNvbXBsZXRlLnJlbW92ZSh0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyLmxvYWRQcm9ncmVzcywgdGhpcy5fdHJhbnNpdGlvbi5wcmVsb2FkSGFuZGxlcik7XG5cbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gcHVibGljIG1ldGhvZHNcblxuICAgIC8qKlxuICAgICogQWRkcyBhIHRyYW5zaXRpb24gaGFuZGxlciBmb3IgYSBzcGVjaWZpYyBmcm9tIC8gdG8gc3RhdGUgY29tYmluYXRpb25cbiAgICAqIHBhc3MgdGhlIGZyb20gLyB0byBzdGF0ZXMgYXMgdGhlIGZpcnN0IDIgYXJndW1lbnRzLCBhbmQgYWRkaXRpb25hbCBhcmd1bWVudHMgZm9yIHdoaWNoIGluc3RhbmNlIHdpbGwgaGFuZGxlIHRoZSB0cmFuc2l0aW9uXG4gICAgKiBpZiBvbmx5IDMgYXJncyBhcmUgcGFzc2VkLCB0aGUgaW5zdGFuY2Ugd2lsbCBoYW5kbGUgdGhlIGluIC8gb3V0IHRyYW5zaXRpb24sIGFuZCB0aGUgcHJlbG9hZGluZ1xuICAgICogRS5HLlxuICAgICogdGhpcy5nYW1lLnRyYW5zaXRpb24uYWRkKHRoaXMuZ2FtZS5jb25zdGFudHMuU1RBVEVfUFJFTE9BRCwgdGhpcy5nYW1lLmNvbnN0YW50cy5TVEFURV9NRU5VLCB0aGlzLmdhbWUucHJlbG9hZGVyKTtcbiAgICAqXG4gICAgKiBpZiA1IGFyZ3VtZW50cyBhcmUgcGFzc2VkLCBhIGRpZmZlcmVudCBpbnN0YW5jZSBjYW4gYmUgdXNlZCBmb3IgaW4gdHJhbnNpdGlvbiwgcHJlbG9hZGluZywgYW5kIG91dCB0cmFuc2l0aW9uXG4gICAgKiBFLkcuXG4gICAgKiB0aGlzLmdhbWUudHJhbnNpdGlvbi5hZGQodGhpcy5nYW1lLmNvbnN0YW50cy5TVEFURV9QUkVMT0FELCB0aGlzLmdhbWUuY29uc3RhbnRzLlNUQVRFX01FTlUsIHRoaXMuZ2FtZS50cmFuc2l0aW9uT3V0SGFuZGxlciwgdGhpcy5nYW1lLnByZWxvYWRIYW5kbGVyLCB0aGlzLmdhbWUudHJhbnNpdGlvbkluSGFuZGxlcik7XG4gICAgKlxuICAgICogdHJhbnNpdGlvbiBoYW5kbGVycyBhcmUgZXhwZWN0ZWQgdG8gYmVoYXZlIGFzIGZvbGxvd3M6XG4gICAgKiBhbiBvdXQgdHJhbnNpdGlvbiBoYW5kbGVyIHNob3VsZCBoYXZlIGEgdHJhbnNpdGlvbkluIG1ldGhvZCBhbmQgZGlzcGF0Y2ggYSB0cmFuc2l0aW9uQ29tcGxldGUgc2lnbmFsIHdoZW4gZG9uZVxuICAgICogYW4gaW4gdHJhbnNpdGlvbiBoYW5kbGVyIHNob3VsZCBoYXZlIGEgdHJhbnNpdGlvbk91dCBtZXRob2QgYW5kIGRpc3BhdGNoIGEgdHJhbnNpdGlvbkNPbXBsZXRlIHNpZ25hbCB3aGVuIGRvbmVcbiAgICAqIGEgcHJlbG9hZCBoYW5kbGVyIHNob3VsZCBoYXZlIGxvYWRTdGFydCwgbG9hZFByb2dyZXNzLCBhbmQgbG9hZENvbXBsZXRlIG1ldGhvZHNcbiAgICAqIHRoZSBsb2FkUHJvZ3Jlc3MgbWV0aG9kIG1heSBhY2NlcHQgYSB1cCB0byA0IHBhcmFtZXRlcnMgZm9yIHByb2dyZXNzIChwZXJjZW50IG9mIGZpbGVzIGxvYWRlZCksIGlkLCBmaWxlSW5kZXgsIGFuZCB0b3RhbEZpbGVzXG4gICAgKlxuICAgICogQHBhcmFtIHtzdHJpbmd9IGZyb21TdGF0ZSAtIHRoZSBzdGF0ZSBiZWluZyB0cmFuc2l0aW9uZWQgZnJvbVxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRvU3RhdGUgLSB0aGUgc3RhdGUgYmVpbmcgdHJhbnNpdGlvbmVkIHRvXG4gICAgKiBAcGFyYW0ge291dEhhbmRsZXJ9IG91dEhhbmRsZXIgLSB0aGUgaW5zdGFuY2UgdGhhdCB3aWxsIGhhbmRsZSB0aGUgdHJhbnNpdGlvbiBmcm9tIHRoZSBmcm9tU3RhdGVcbiAgICAqIEBwYXJhbSB7cHJlbG9hZEhhbmRsZXJ9IHByZWxvYWRIYW5kbGVyIC0gdGhlIGluc3RhbmNlIHRoYXQgd2lsbCBoYW5kbGUgcHJlbG9hZGluZyB0aGUgdG9TdGF0ZVxuICAgICogQHBhcmFtIHtpbkhhbmRsZXJ9IGluSGFuZGxlciAtIHRoZSBpbnN0YW5jZSB0aGF0IHdpbGwgaGFuZGxlIHRoZSBpbiB0cmFuc2l0aW9uIHdoZW4gdGhlIHRvU3RhdGUgaXMgY29tcGxldGVseSBsb2FkZWRcbiAgICAqIEByZXR1cm4ge09iamVjdH0gdHJhbnNpdGlvbiByZWZlcmVuY2UgdGhhdCB3YXMgYWRkZWQgdG8gX3RyYW5zaXRpb25zXG4gICAgKi9cbiAgICBwdWJsaWMgYWRkKGZyb21TdGF0ZTogc3RyaW5nLCB0b1N0YXRlOiBzdHJpbmcgfCBJUHJlbG9hZEhhbmRsZXIsIG91dEhhbmRsZXI/OiBJVHJhbnNpdGlvbkhhbmRsZXIsIHByZWxvYWRIYW5kbGVyPzogSVByZWxvYWRIYW5kbGVyLCBpbkhhbmRsZXI/OiBJVHJhbnNpdGlvbkhhbmRsZXIpOiB2b2lkIHtcbiAgICAgICAgdmFyIGFyZ3M7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgNSkge1xuICAgICAgICAgICAgaWYgKGZyb21TdGF0ZSA9PT0gJ2FsbCcpIHtcbiAgICAgICAgICAgICAgICBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYWRkKCdhbGwnLCBhcmdzWzBdLCBhcmdzWzBdLCBhcmdzWzBdKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9hZGQoJ2FsbCcsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9hZGQoZnJvbVN0YXRlICsgJy8nICsgdG9TdGF0ZSwgYXJnc1swXSwgYXJnc1swXSwgYXJnc1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fYWRkKGZyb21TdGF0ZSArICcvJyArIHRvU3RhdGUsIG91dEhhbmRsZXIsIHByZWxvYWRIYW5kbGVyLCBpbkhhbmRsZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRBbGwoaGFuZGxlcjogSVByZWxvYWRIYW5kbGVyKTogdm9pZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGQoJ2FsbCcsIGhhbmRsZXIsIGhhbmRsZXIsIGhhbmRsZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQWRkcyBhbiBleGNlcHRpb24gdG8gdGhlIERpam9uLlRyYW5zaXRpb25NYW5hZ2VyIGluIHRoZSBjYXNlIHdoZXJlICdhbGwnIGhhcyBiZWVuIHVzZWRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0ZSAtIHRoZSBzdGF0ZSB0byBhZGQgdGhlIGV4Y2VwdGlvbiBmb3JcbiAgICAqL1xuICAgIHB1YmxpYyBhZGRFeGNlcHRpb24oc3RhdGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9leGNlcHRpb25zW3N0YXRlXSA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBSZW1vdmVzIGEgdHJhbnNpdGlvbiBoYW5kbGVyIGZvciBhIHNwZWNpZmljIGZyb20gLyB0byBzdGF0ZSBjb21iaW5hdGlvblxuICAgICovXG4gICAgcHVibGljIHJlbW92ZShmcm9tU3RhdGU6IHN0cmluZywgdG9TdGF0ZT86IHN0cmluZykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbnNbZnJvbVN0YXRlXSA9IG51bGw7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fdHJhbnNpdGlvbnNbZnJvbVN0YXRlXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25zW2Zyb21TdGF0ZSArICcvJyArIHRvU3RhdGVdID0gbnVsbDtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl90cmFuc2l0aW9uc1tmcm9tU3RhdGUgKyAnLycgKyB0b1N0YXRlXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICogU3RhcnQgdGhlIHRyYW5zaXRpb24gdG8gYSBuZXcgc3RhdGVcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0ZSAtIHRoZSBzdGF0ZSB0byB0cmFuc2l0aW9uIHRvXG4gICAgKi9cbiAgICBwdWJsaWMgdG8oc3RhdGU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5fdHJhbnNpdGlvbilcbiAgICAgICAgICAgIHRoaXMuX2NsZWFyVHJhbnNpdGlvbigpO1xuXG4gICAgICAgIGlmICh0aGlzLl9leGNlcHRpb25zW3N0YXRlXSlcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB0aGlzLl9mcm9tU3RhdGUgPSB0aGlzLmdhbWUuc3RhdGUuY3VycmVudDtcbiAgICAgICAgdGhpcy5fdG9TdGF0ZSA9IHN0YXRlO1xuXG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24gPSB0aGlzLl9nZXRUcmFuc2l0aW9uKHRoaXMuX2Zyb21TdGF0ZSwgdGhpcy5fdG9TdGF0ZSk7XG5cbiAgICAgICAgaWYgKCF0aGlzLl90cmFuc2l0aW9uKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gdHJhbnNpdGlvbiBmb3VuZCBmb3I6JywgdGhpcy5nYW1lLnN0YXRlLmN1cnJlbnQgKyAnIHRvICcgKyBzdGF0ZSk7XG4gICAgICAgICAgICB0aGlzLmdhbWUuY2hhbmdlU3RhdGUodGhpcy5fdG9TdGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRyYW5zaXRpb25JbigpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0cmFuc2l0aW9uSW4oKSB7XG4gICAgICAgIGlmICghdGhpcy5fdHJhbnNpdGlvbilcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3RyYW5zaXRpb24ub3V0SGFuZGxlci50cmFuc2l0aW9uSW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb24ub3V0SGFuZGxlci50cmFuc2l0aW9uSW5Db21wbGV0ZS5hZGRPbmNlKHRoaXMuX3RyYW5zaXRpb25JbkNvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb24ub3V0SGFuZGxlci50cmFuc2l0aW9uSW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjYW5UcmFuc2l0aW9uT3V0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIXRoaXMuX2V4Y2VwdGlvbnNbdGhpcy5nYW1lLnN0YXRlLmN1cnJlbnRdICYmIHRoaXMuX3RyYW5zaXRpb24gJiYgdGhpcy5fdHJhbnNpdGlvbi5pbkhhbmRsZXIgJiYgdHlwZW9mIHRoaXMuX3RyYW5zaXRpb24uaW5IYW5kbGVyLnRyYW5zaXRpb25PdXQgPT09ICdmdW5jdGlvbic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBBZnRlciB0aGUgc3RhdGUgaXMgZnVsbHkgbG9hZGVkIGFuZCAnYnVpbHQnIGEgY2FsbCB0byB0aGlzIGlzIG1hZGVcbiAgICAqIHRoaXMgaXMgY3VycmVudGx5IG1hZGUgZnJvbSBCYXNlU3RhdGUgaW4gdGhlICdhZnRlckJ1aWxkJyBtZXRob2RcbiAgICAqL1xuICAgIHB1YmxpYyB0cmFuc2l0aW9uT3V0KCkge1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uLmluSGFuZGxlci50cmFuc2l0aW9uT3V0Q29tcGxldGUuYWRkT25jZSh0aGlzLl90cmFuc2l0aW9uT3V0Q29tcGxldGUsIHRoaXMpO1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uLmluSGFuZGxlci50cmFuc2l0aW9uT3V0KCk7XG4gICAgfVxufSIsImltcG9ydCB7SU5vdGlmaWNhdGlvbixJT2JzZXJ2ZXJ9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xuaW1wb3J0IHtHYW1lfSBmcm9tICcuLi9jb3JlJztcblxuZXhwb3J0IGNsYXNzIE1vZGVsIHtcbiAgICBwdWJsaWMgYXBwOiBBcHBsaWNhdGlvbjtcbiAgICBwdWJsaWMgZ2FtZTogR2FtZTtcbiAgICBwcm90ZWN0ZWQgX2RhdGE6IGFueTtcblxuICAgIHB1YmxpYyBzdGF0aWMgTU9ERUxfTkFNRTogc3RyaW5nID0gJ01vZGVsJztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGFLZXk6IHN0cmluZyA9IG51bGwsIHByaXZhdGUgbW9kZWxOYW1lOiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuYXBwID0gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5nYW1lID0gdGhpcy5hcHAuZ2FtZTtcblxuICAgICAgICBpZiAoZGF0YUtleSkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKGRhdGFLZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hcHAucmVnaXN0ZXJNb2RlbCh0aGlzKTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIG9uUmVnaXN0ZXIoKTp2b2lke1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgcHVibGljIG9uUmVtb3ZlZCgpOnZvaWR7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRLZXlFeGlzdHMoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZS5jYWNoZS5nZXRKU09OKGtleSkgIT09IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHNldERhdGEoZGF0YUtleTogc3RyaW5nKTogYW55IHtcbiAgICAgICAgaWYgKCF0aGlzLmdldEtleUV4aXN0cyhkYXRhS2V5KSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ01vZGVsOjogY2Fubm90IHNldCBkYXRhIGZyb20ga2V5ICcgKyBkYXRhS2V5ICsgJy4gSXMgaXQgaW4gdGhlIFBoYXNlciBjYWNoZT8nKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLmdhbWUuY2FjaGUuZ2V0SlNPTihkYXRhS2V5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIGdldERhdGEoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXBwLnJlbW92ZU1vZGVsKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbE5hbWUgfHwgTW9kZWwuTU9ERUxfTkFNRTtcbiAgICB9XG59IiwiaW1wb3J0IHtNb2RlbH0gZnJvbSAnLi9Nb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBDb3B5TW9kZWwgZXh0ZW5kcyBNb2RlbCB7XG4gICAgcHVibGljIHN0YXRpYyBNT0RFTF9OQU1FOiBzdHJpbmcgPSAnY29weU1vZGVsJztcblxuICAgIHByaXZhdGUgX2xhbmd1YWdlczogeyBbbGFuZ3VhZ2VOYW1lOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoZGF0YUtleTogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICBzdXBlcihkYXRhS2V5KTtcblxuICAgICAgICB0aGlzLl9sYW5ndWFnZXNbJ2VuJ10gPSB0aGlzLl9kYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDb3B5KGdyb3VwSWQ6IHN0cmluZywgaXRlbUlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb3B5R3JvdXAoZ3JvdXBJZClbaXRlbUlkXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29weUdyb3VwKGdyb3VwSWQ6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhW2dyb3VwSWRdO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRMYW5ndWFnZShsYW5ndWFnZUlkOiBzdHJpbmcsIGRhdGFLZXk6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGlmICghdGhpcy5nZXRLZXlFeGlzdHMoZGF0YUtleSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY2Fubm90IGFkZCBhbiBhbHRlcm5hdGUgbGFuZ3VhZ2UgZnJvbSBrZXkgJyArIGRhdGFLZXkgKyAnLiBJcyBpdCBpbiB0aGUgUGhhc2VyIGNhY2hlPycpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbGFuZ3VhZ2VzW2xhbmd1YWdlSWRdID0gdGhpcy5nYW1lLmNhY2hlLmdldEpTT04oZGF0YUtleSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNoYW5nZUxhbmd1YWdlKGxhbmd1YWdlSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2xhbmd1YWdlc1tsYW5ndWFnZUlkXSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RoZXJlIGlzIG5vIGxhbmd1YWdlICcgKyBsYW5ndWFnZUlkKTtcblxuICAgICAgICB0aGlzLl9kYXRhID0gdGhpcy5fbGFuZ3VhZ2VzW2xhbmd1YWdlSWRdO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gQ29weU1vZGVsLk1PREVMX05BTUU7XG4gICAgfVxufSIsImltcG9ydCB7QXBwbGljYXRpb259IGZyb20gJy4uL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7SU9ic2VydmVyLElOb3RpZmljYXRpb259IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtHYW1lfSBmcm9tICcuLi9jb3JlJztcblxuZXhwb3J0IGNsYXNzIE1lZGlhdG9yIGltcGxlbWVudHMgSU9ic2VydmVyIHtcbiAgICBwdWJsaWMgc3RhdGljIE1FRElBVE9SX05BTUU6IHN0cmluZyA9ICdNZWRpYXRvcic7XG5cbiAgICBwcm90ZWN0ZWQgbWVkaWF0b3JOYW1lOiBzdHJpbmcgPSBudWxsO1xuICAgIHByb3RlY3RlZCBhcHA6IEFwcGxpY2F0aW9uO1xuICAgIHByb3RlY3RlZCBnYW1lOiBHYW1lO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIF92aWV3Q29tcG9uZW50OiBhbnkgPSBudWxsLCBhdXRvUmVnOiBib29sZWFuID0gdHJ1ZSwgbWVkaWF0b3JOYW1lOiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuYXBwID0gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5nYW1lID0gdGhpcy5hcHAuZ2FtZTtcbiAgICAgICAgdGhpcy5tZWRpYXRvck5hbWUgPSBtZWRpYXRvck5hbWU7XG5cbiAgICAgICAgaWYgKGF1dG9SZWcpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuICAgIHByb3RlY3RlZCByZWdpc3RlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hcHAucmVnaXN0ZXJNZWRpYXRvcih0aGlzKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVtb3ZlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFwcC5yZW1vdmVNZWRpYXRvcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25SZWdpc3RlcigpOiB2b2lkIHtcbiAgICAgICAgLy8gb3ZlcnJpZGUgbWUgZnJlZWx5XG4gICAgfVxuXG4gICAgcHVibGljIG9uUmVtb3ZlZCgpOiB2b2lkIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsaXN0Tm90aWZpY2F0aW9uSW50ZXJlc3RzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYW5kbGVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBJTm90aWZpY2F0aW9uKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBkZWZhdWx0IGltbXBsZW1lbnRhdGlvbiB3b3VsZCBsb29rIHNvbWV0aGluZyBsaWtlOlxuICAgICAgICAgKiBzd2l0Y2goIG5vdGlmaWNhdGlvbjogZGlqb24uSU5vdGlmaWNhdGlvbiApe1xuICAgICAgICAgKiBcdFx0Y2FzZSBOb3RpZmljYXRpb25zLlNPTUVUSElORzpcbiAgICAgICAgICogXHRcdFx0Ly8gZG8gc29tZXRoaW5nXG4gICAgICAgICAqIFx0XHRcdGJyZWFrO1xuICAgICAgICAgKiBcdFx0Y2FzZSBOb3RpZmljYXRpb25zLlNPTUVUSElOR19FTFNFOlxuICAgICAgICAgKiBcdFx0XHQvLyBkbyBzb21ldGhpbmcgZWxzZVxuICAgICAgICAgKiBcdFx0XHRicmVhaztcbiAgICAgICAgICogfVxuICAgICAgICAgKi9cbiAgICB9XG5cbiAgICBwdWJsaWMgc2VuZE5vdGlmaWNhdGlvbihub3RpZmljYXRpb25OYW1lOiBzdHJpbmcsIG5vdGlmaWNhdGlvbkJvZHk/OiBhbnkpIHtcbiAgICAgICAgdGhpcy5hcHAuc2VuZE5vdGlmaWNhdGlvbihub3RpZmljYXRpb25OYW1lLCBub3RpZmljYXRpb25Cb2R5KTtcbiAgICB9XG5cbiAgICAvLyBnZXR0ZXIgLyBzZXR0ZXJcbiAgICBwdWJsaWMgc2V0IHZpZXdDb21wb25lbnQodmlld0NvbXBvbmVudDogYW55KSB7XG4gICAgICAgIHRoaXMuX3ZpZXdDb21wb25lbnQgPSB2aWV3Q29tcG9uZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdmlld0NvbXBvbmVudCgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmlld0NvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVkaWF0b3JOYW1lIHx8IE1lZGlhdG9yLk1FRElBVE9SX05BTUU7XG4gICAgfVxufSIsImltcG9ydCB7SU5vdGlmaWNhdGlvbn0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb24gaW1wbGVtZW50cyBJTm90aWZpY2F0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uYW1lOiBzdHJpbmcsIHByaXZhdGUgX2JvZHk6IGFueSA9IG51bGwpIHsgfVxuXG4gICAgcHVibGljIGdldE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEJvZHkoYm9keTogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2JvZHkgPSBib2R5O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRCb2R5KCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ib2R5O1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9ib2R5ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG51bGw7XG4gICAgfVxufSIsImltcG9ydCB7SU5vdGlmaWVyLCBJTm90aWZpY2F0aW9uLCBJT2JzZXJ2ZXJ9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtNZWRpYXRvciwgTW9kZWwsIE5vdGlmaWNhdGlvbn0gZnJvbSAnLi4vbXZjJztcbmltcG9ydCB7R2FtZX0gZnJvbSAnLi4vY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbiBpbXBsZW1lbnRzIElOb3RpZmllciB7XG4gICAgLy8gc3RhdGljIGNvbnN0YW50c1xuICAgIHByb3RlY3RlZCBzdGF0aWMgaW5zdGFuY2UgPSBudWxsO1xuICAgIHByb3RlY3RlZCBzdGF0aWMgU0lOR0xFVE9OX01TRyA9ICdBcHBsaWNhdGlvbiBzaW5nbGV0b24gYWxyZWFkeSBjb25zdHJ1Y3RlZCEnO1xuXG4gICAgLy8gcHVibGljIFxuICAgIHB1YmxpYyBnYW1lOiBHYW1lO1xuXG4gICAgLy8gcHJvdGVjdGVkICAgICAgICBcbiAgICBwcm90ZWN0ZWQgX21lZGlhdG9yOiBNZWRpYXRvciA9IG51bGw7XG4gICAgcHJvdGVjdGVkIF9tb2RlbHM6IHsgW25hbWU6IHN0cmluZ106IE1vZGVsIH0gPSB7fTtcbiAgICBwcm90ZWN0ZWQgX21lZGlhdG9yczogeyBbbmFtZTogc3RyaW5nXTogTWVkaWF0b3IgfSA9IHt9O1xuICAgIHByb3RlY3RlZCBfb2JzZXJ2ZXJNYXA6IHsgW25hbWU6IHN0cmluZ106IElPYnNlcnZlcltdIH0gPSB7fTtcblxuICAgIC8vZm9yIGRlYnVnZ2luZ1xuICAgIHByaXZhdGUgc3RhdGljIF9oYXNoUXVlcnk6IHt9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmIChBcHBsaWNhdGlvbi5pbnN0YW5jZSlcbiAgICAgICAgICAgIHRocm93IEVycm9yKEFwcGxpY2F0aW9uLlNJTkdMRVRPTl9NU0cpO1xuXG4gICAgICAgIEFwcGxpY2F0aW9uLmluc3RhbmNlID0gdGhpcztcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICAgICAgQXBwbGljYXRpb24uX2dldEhhc2hRdWVyeSgpO1xuICAgICAgICAgICAgdGhpcy53aW5kb3dIYXNoQ2hhbmdlKCk7XG4gICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICB0aGlzLmNyZWF0ZUdhbWUoKTtcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgd2luZG93SGFzaENoYW5nZSgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuICAgIHByb3RlY3RlZCBjcmVhdGVHYW1lKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSh7XG4gICAgICAgICAgICB3aWR0aDogODAwLFxuICAgICAgICAgICAgaGVpZ2h0OiA2MDAsXG4gICAgICAgICAgICBwYXJlbnQ6ICdnYW1lLWNvbnRhaW5lcicsXG4gICAgICAgICAgICByZW5kZXJlcjogUGhhc2VyLkFVVE8sXG4gICAgICAgICAgICB0cmFuc3BhcmVudDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHN0YXJ0R2FtZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gc3RhcnQgdGhlIGFwcCdzIGluaXRpYWwgc3RhdGUgaGVyZVxuICAgIH1cblxuICAgIHB1YmxpYyBhZGRQbHVnaW5zKCkge1xuICAgICAgICB0aGlzLmdhbWUuYWRkUGx1Z2lucygpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck1vZGVsKG1vZGVsOiBNb2RlbCk6IE1vZGVsIHtcbiAgICAgICAgaWYgKHRoaXMuX21vZGVsc1ttb2RlbC5uYW1lXSkge1xuICAgICAgICAgICAgdGhyb3cgKG5ldyBFcnJvcignQXBwbGljYXRpb246OiBhIG1vZGVsIHdpdGggdGhlIG5hbWUgXCInICsgbW9kZWwubmFtZSArICdcIiBhbHJlYWR5IGV4aXN0cy4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbW9kZWxzW21vZGVsLm5hbWVdID0gbW9kZWw7XG5cbiAgICAgICAgbW9kZWwub25SZWdpc3RlcigpO1xuXG4gICAgICAgIHJldHVybiBtb2RlbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmV0cmlldmVNb2RlbChtb2RlbE5hbWU6IHN0cmluZyk6IE1vZGVsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vZGVsc1ttb2RlbE5hbWVdIHx8IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZU1vZGVsKG1vZGVsVG9SZW1vdmU6IE1vZGVsKTogdm9pZCB7XG4gICAgICAgIGxldCBuYW1lID0gbW9kZWxUb1JlbW92ZS5uYW1lO1xuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLl9tb2RlbHNbbmFtZV07XG5cbiAgICAgICAgaWYgKCFtb2RlbClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBtb2RlbC5vblJlbW92ZWQoKTtcblxuICAgICAgICBkZWxldGUgdGhpcy5fbW9kZWxzW25hbWVdO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck1lZGlhdG9yKG1lZGlhdG9yOiBNZWRpYXRvcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fbWVkaWF0b3JzW21lZGlhdG9yLm5hbWVdKSB7XG4gICAgICAgICAgICB0aHJvdyAobmV3IEVycm9yKCdBcHBsaWNhdGlvbjo6IGEgbWVkaWF0b3Igd2l0aCB0aGUgbmFtZSBcIicgKyBtZWRpYXRvci5uYW1lICsgJ1wiIGFscmVhZHkgZXhpc3RzLicpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX21lZGlhdG9yc1ttZWRpYXRvci5uYW1lXSA9IG1lZGlhdG9yO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyT2JzZXJ2ZXIobWVkaWF0b3IpO1xuXG4gICAgICAgIG1lZGlhdG9yLm9uUmVnaXN0ZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmV0cmlldmVNZWRpYXRvcihtZWRpYXRvck5hbWU6IHN0cmluZyk6IE1lZGlhdG9yIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lZGlhdG9yc1ttZWRpYXRvck5hbWVdIHx8IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZU1lZGlhdG9yKG1lZGlhdG9yVG9SZW1vdmU6IE1lZGlhdG9yKTogdm9pZCB7XG4gICAgICAgIGxldCBuYW1lID0gbWVkaWF0b3JUb1JlbW92ZS5uYW1lO1xuICAgICAgICBsZXQgbWVkaWF0b3IgPSB0aGlzLl9tZWRpYXRvcnNbbmFtZV07XG5cbiAgICAgICAgaWYgKCFtZWRpYXRvcilcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBtZWRpYXRvci5saXN0Tm90aWZpY2F0aW9uSW50ZXJlc3RzKCkuZm9yRWFjaChpbnRlcmVzdCA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZU9ic2VydmVyKGludGVyZXN0LCBtZWRpYXRvcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lZGlhdG9yLm9uUmVtb3ZlZCgpO1xuICAgICAgICBkZWxldGUgdGhpcy5fbWVkaWF0b3JzW25hbWVdO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck9ic2VydmVyKG9ic2VydmVyOiBJT2JzZXJ2ZXIpOiB2b2lkIHtcbiAgICAgICAgb2JzZXJ2ZXIubGlzdE5vdGlmaWNhdGlvbkludGVyZXN0cygpLmZvckVhY2gobm90aWZpY2F0aW9uTmFtZSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fb2JzZXJ2ZXJNYXBbbm90aWZpY2F0aW9uTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX29ic2VydmVyTWFwW25vdGlmaWNhdGlvbk5hbWVdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9vYnNlcnZlck1hcFtub3RpZmljYXRpb25OYW1lXS5wdXNoKG9ic2VydmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc3RvcHMgYW4gb2JzZXJ2ZXIgZnJvbSBiZWluZyBpbnRlcmVzdGVkIGluIGEgbm90aWZpY2F0aW9uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5vdGlmaWNhdGlvbk5hbWVcbiAgICAgKiBAcGFyYW0ge0lPYnNlcnZlcn0gb2JzZXJ2ZXJUb1JlbW92ZVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgcHVibGljIHJlbW92ZU9ic2VydmVyKG5vdGlmaWNhdGlvbk5hbWU6IHN0cmluZywgb2JzZXJ2ZXJUb1JlbW92ZTogSU9ic2VydmVyKTogdm9pZCB7XG4gICAgICAgIC8vVGhlIG9ic2VydmVyIGxpc3QgZm9yIHRoZSBub3RpZmljYXRpb24gdW5kZXIgaW5zcGVjdGlvblxuICAgICAgICBsZXQgb2JzZXJ2ZXJzOiBJT2JzZXJ2ZXJbXSA9IG51bGwsXG4gICAgICAgICAgICBvYnNlcnZlcjogSU9ic2VydmVyID0gbnVsbCxcbiAgICAgICAgICAgIGk6IG51bWJlciA9IDA7XG5cbiAgICAgICAgb2JzZXJ2ZXJzID0gdGhpcy5fb2JzZXJ2ZXJNYXBbbm90aWZpY2F0aW9uTmFtZV07XG5cbiAgICAgICAgLy9GaW5kIHRoZSBvYnNlcnZlciBmb3IgdGhlIG5vdGlmeUNvbnRleHQuXG4gICAgICAgIGkgPSBvYnNlcnZlcnMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICBvYnNlcnZlciA9IG9ic2VydmVyc1tpXTtcbiAgICAgICAgICAgIGlmIChvYnNlcnZlciA9PT0gb2JzZXJ2ZXJUb1JlbW92ZSkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAgKiBBbHNvLCB3aGVuIGEgTm90aWZpY2F0aW9uJ3MgT2JzZXJ2ZXIgbGlzdCBsZW5ndGggZmFsbHMgdG8gemVybywgZGVsZXRlIHRoZVxuICAgICAgICAgKiBub3RpZmljYXRpb24ga2V5IGZyb20gdGhlIG9ic2VydmVyIG1hcC5cbiAgICAgICAgICovXG4gICAgICAgIGlmIChvYnNlcnZlcnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9vYnNlcnZlck1hcFtub3RpZmljYXRpb25OYW1lXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZW5kTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbk5hbWU6IHN0cmluZywgbm90ZmljYXRpb25Cb2R5PzogYW55KTogdm9pZCB7XG4gICAgICAgIGxldCBub3RpZmljYXRpb24gPSBuZXcgTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbk5hbWUsIG5vdGZpY2F0aW9uQm9keSk7XG4gICAgICAgIHRoaXMuX25vdGlmeU9ic2VydmVycyhub3RpZmljYXRpb24pO1xuXG4gICAgICAgIG5vdGlmaWNhdGlvbi5kZXN0cm95KCk7XG4gICAgICAgIG5vdGlmaWNhdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgcHJpdmF0ZSBfbm90aWZ5T2JzZXJ2ZXJzKG5vdGlmaWNhdGlvbjogSU5vdGlmaWNhdGlvbikge1xuICAgICAgICBsZXQgb2JzZXJ2ZXI6IElPYnNlcnZlciA9IG51bGwsXG4gICAgICAgICAgICBvYnNlcnZlcnM6IElPYnNlcnZlcltdID0gbnVsbDtcblxuICAgICAgICBjb25zdCBub3RpZmljYXRpb25OYW1lOiBzdHJpbmcgPSBub3RpZmljYXRpb24uZ2V0TmFtZSgpO1xuICAgICAgICBjb25zdCBvYnNlcnZlcnNSZWY6IElPYnNlcnZlcltdID0gdGhpcy5fb2JzZXJ2ZXJNYXBbbm90aWZpY2F0aW9uTmFtZV07XG5cbiAgICAgICAgaWYgKG9ic2VydmVyc1JlZikge1xuICAgICAgICAgICAgLy8gY2xvbmUgdGhlIGFycmF5IGluIGNhc2UgYW4gb2JzZXJ2ZXIgZ2V0cyByZW1vdmVkIHdoaWxlIHRoZSBub3RpZmljYXRpb24gaXMgYmVpbmcgc2VudFxuICAgICAgICAgICAgb2JzZXJ2ZXJzID0gb2JzZXJ2ZXJzUmVmLnNsaWNlKDApO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmhhbmRsZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfZ2V0SGFzaFF1ZXJ5KCk6IHZvaWQge1xuICAgICAgICBBcHBsaWNhdGlvbi5faGFzaFF1ZXJ5ID0ge307XG4gICAgICAgIGlmICghd2luZG93LmxvY2F0aW9uLmhhc2ggfHwgd2luZG93LmxvY2F0aW9uLmhhc2ggPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSwgd2luZG93LmxvY2F0aW9uLmhhc2gubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgYUhhc2g6IHN0cmluZ1tdID0gaGFzaC5zcGxpdCgnJicpO1xuICAgICAgICBhSGFzaC5mb3JFYWNoKGhhc2hQYWlyID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFIYXNoID0gaGFzaFBhaXIuc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIEFwcGxpY2F0aW9uLl9oYXNoUXVlcnlbYUhhc2hbMF1dID0gL15cXGQrJC8udGVzdChhSGFzaFsxXSkgPyBwYXJzZUludChhSGFzaFsxXSkgOiBhSGFzaFsxXTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gc3RhdGljIG1ldGhvZHNcblxuICAgIC8qKlxuICAgICAqIHJldHVybnMgdGhlIEFwcGxpY2F0aW9uIHNpbmdsZXRvblxuICAgICAqIEByZXR1cm4ge0FwcGxpY2F0aW9ufVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogQXBwbGljYXRpb24ge1xuICAgICAgICBpZiAoIUFwcGxpY2F0aW9uLmluc3RhbmNlKVxuICAgICAgICAgICAgQXBwbGljYXRpb24uaW5zdGFuY2UgPSBuZXcgQXBwbGljYXRpb24oKTtcblxuICAgICAgICByZXR1cm4gQXBwbGljYXRpb24uaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZ2V0cyBhIHF1ZXJ5IHZhcmlhYmxlIGZyb20gdGhlIHdpbmRvdy5sb2NhdGlvbiBoYXNoXG4gICAgICogYXNzdW1lcyBzb21ldGhpbmcgbGlrZSBodHRwOi8vdXJsLyNmb289YmFyJmJhej1mb29cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFyaWFibGVJZFxuICAgICAqIEByZXR1cm4ge2FueX1cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHF1ZXJ5VmFyKHZhcmlhYmxlSWQ6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGlmIChBcHBsaWNhdGlvbi5faGFzaFF1ZXJ5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIEFwcGxpY2F0aW9uLl9nZXRIYXNoUXVlcnkoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQXBwbGljYXRpb24uX2hhc2hRdWVyeVt2YXJpYWJsZUlkXSB8fCBudWxsO1xuICAgIH1cblxufSJdfQ==
