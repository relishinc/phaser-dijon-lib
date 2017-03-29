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
                BitmapText.prototype.anchorAsImage = function (x, y) {
                    if (y === void 0) { y = x; }
                    var wasCached = this.cacheAsBitmap;
                    this.cacheAsBitmap = null;
                    this._internalImage.anchor.set(x, y);
                    this.cacheAsBitmap = wasCached;
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
                Group.CreateFromData = function (data) {
                    var self = new Group(data.position.x, data.position.y, data.name);
                    if (data.alpha) {
                        self.alpha = data.alpha;
                    }
                    return self;
                };
                Group.prototype.assignPrefab = function (object) {
                };
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
                Sprite.CreateFromData = function (data) {
                    var self = new Sprite(data.position.x, data.position.y, data.key, data.frame, data.name);
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
                };
                Sprite.prototype.assignPrefab = function (object) {
                };
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
System.register("dijon/display/LabelledButton", ["dijon/display", "dijon/application"], function(exports_24, context_24) {
    "use strict";
    var __moduleName = context_24 && context_24.id;
    var display_1, application_6;
    var LabelledButton;
    return {
        setters:[
            function (display_1_1) {
                display_1 = display_1_1;
            },
            function (application_6_1) {
                application_6 = application_6_1;
            }],
        execute: function() {
            LabelledButton = (function (_super) {
                __extends(LabelledButton, _super);
                function LabelledButton(x, y, callback, context, key, upFrame, downFrame, overFrame, outFrame) {
                    if (downFrame === void 0) { downFrame = null; }
                    if (overFrame === void 0) { overFrame = null; }
                    if (outFrame === void 0) { outFrame = null; }
                    _super.call(this, application_6.Application.getInstance().game, x, y, key, callback, context, overFrame, outFrame, downFrame, upFrame);
                    this._label = null;
                }
                LabelledButton.prototype.addLabel = function (text, fontSize, fontName, forceFit, outTint, downTint, overTint, upTint, labelOffset) {
                    if (forceFit === void 0) { forceFit = true; }
                    if (outTint === void 0) { outTint = 0xffffff; }
                    if (fontSize < 1) {
                        fontSize = fontSize * this.realHeight * 0.5;
                    }
                    var textPoint = new Phaser.Point(this.realWidth * 0.5, this.realHeight * 0.5);
                    if (labelOffset) {
                        textPoint = Phaser.Point.add(textPoint, labelOffset);
                    }
                    this._label = new display_1.Text(textPoint.x, textPoint.y, text, fontName, fontSize, "#ffffff");
                    this._label.centerPivot();
                    this.addChild(this._label);
                    this._labelTint = new Object();
                    this._labelTint.down = downTint ? downTint : outTint;
                    this._labelTint.up = upTint ? upTint : outTint;
                    this._labelTint.over = overTint ? overTint : outTint;
                    this._labelTint.out = outTint;
                    this._label.tint = this._labelTint.out;
                    if (forceFit === true && this._label.realWidth > this.realWidth || this._label.realHeight > this.realHeight) {
                        var wRatio = this.realWidth / this._label.realWidth;
                        var hRatio = this.realHeight / this._label.realHeight;
                        this._label.scale.setTo(wRatio < hRatio ? wRatio * 0.9 : hRatio * 0.9);
                    }
                };
                LabelledButton.prototype.setLabelTints = function (outTint, downTint, overTint, upTint) {
                    this._labelTint.out = outTint;
                    this._labelTint.down = downTint ? downTint : outTint;
                    this._labelTint.up = upTint ? upTint : outTint;
                    this._labelTint.over = overTint ? overTint : outTint;
                };
                LabelledButton.prototype.onInputDownHandler = function (sprite, pointer) {
                    if (this.input.enabled === false) {
                        return;
                    }
                    _super.prototype.onInputDownHandler.call(this, sprite, pointer);
                    this.tintLabel(this._labelTint.down);
                };
                LabelledButton.prototype.onInputOverHandler = function (sprite, pointer) {
                    if (this.input.enabled === false) {
                        return;
                    }
                    _super.prototype.onInputOverHandler.call(this, sprite, pointer);
                    this.tintLabel(this._labelTint.over);
                };
                LabelledButton.prototype.onInputOutHandler = function (sprite, pointer) {
                    if (this.input.enabled === false) {
                        return;
                    }
                    _super.prototype.onInputOutHandler.call(this, sprite, pointer);
                    this.tintLabel(this._labelTint.out);
                };
                LabelledButton.prototype.onInputUpHandler = function (sprite, pointer, isOver) {
                    if (this.input.enabled === false) {
                        return;
                    }
                    _super.prototype.onInputUpHandler.call(this, sprite, pointer, isOver);
                    this.tintLabel(this._labelTint.up);
                };
                LabelledButton.prototype.changeLabel = function (newLabel) {
                    if (this._label !== null) {
                        this._label.text = newLabel;
                        this._label.centerPivot();
                    }
                };
                LabelledButton.prototype.assignText = function (newText) {
                    if (newText !== null) {
                        this._label = newText;
                    }
                };
                LabelledButton.prototype.tintLabel = function (newTint) {
                    if (this._label !== null) {
                        this._label.tint = newTint;
                    }
                };
                return LabelledButton;
            }(Phaser.Button));
            exports_24("LabelledButton", LabelledButton);
        }
    }
});
System.register("dijon/display/NineSliceImage", ["dijon/display/Group"], function(exports_25, context_25) {
    "use strict";
    var __moduleName = context_25 && context_25.id;
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
            exports_25("NineSliceImage", NineSliceImage);
        }
    }
});
System.register("dijon/display/Spine", ["dijon/application"], function(exports_26, context_26) {
    "use strict";
    var __moduleName = context_26 && context_26.id;
    var application_7;
    var Spine;
    return {
        setters:[
            function (application_7_1) {
                application_7 = application_7_1;
            }],
        execute: function() {
            Spine = (function (_super) {
                __extends(Spine, _super);
                function Spine(assetName, x, y, skeletonScale) {
                    if (assetName === void 0) { assetName = ''; }
                    if (x === void 0) { x = 0; }
                    if (y === void 0) { y = 0; }
                    if (skeletonScale === void 0) { skeletonScale = 1; }
                    _super.call(this, application_7.Application.getInstance().game, x, y, Spine.createSpineData(Spine.LOAD_NON_MESH ? (assetName + Spine.NON_MESH_SUFFIX) : assetName, skeletonScale));
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
                    var spineAtlas = new spine.SpineRuntime.Atlas(application_7.Application.getInstance().game.cache.getText(assetName + '.atlas'), this.atlasCallbackFunction);
                    var spineJsonParser = new spine.SpineRuntime.SkeletonJsonParser(new spine.SpineRuntime.AtlasAttachmentParser(spineAtlas), skeletonScale);
                    var skeletonData = spineJsonParser.readSkeletonData(application_7.Application.getInstance().game.cache.getJSON(assetName + '.json'));
                    return skeletonData;
                };
                Spine.atlasCallbackFunction = function (line, callback) {
                    var lineArr = line.split('@' + application_7.Application.getInstance().game.resolution + 'x');
                    var url = lineArr.join('');
                    callback(new PIXI.BaseTexture(application_7.Application.getInstance().game.cache.getImage(url), PIXI.scaleModes.DEFAULT));
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
                    Spine.game = application_7.Application.getInstance().game;
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
            exports_26("Spine", Spine);
        }
    }
});
System.register("dijon/display/Spine2", ["dijon/application"], function(exports_27, context_27) {
    "use strict";
    var __moduleName = context_27 && context_27.id;
    var application_8;
    var Spine2;
    return {
        setters:[
            function (application_8_1) {
                application_8 = application_8_1;
            }],
        execute: function() {
            Spine2 = (function (_super) {
                __extends(Spine2, _super);
                function Spine2(assetName, x, y, skeletonScale) {
                    if (assetName === void 0) { assetName = ''; }
                    if (x === void 0) { x = 0; }
                    if (y === void 0) { y = 0; }
                    if (skeletonScale === void 0) { skeletonScale = 1; }
                    _super.call(this, application_8.Application.getInstance().game, x, y, Spine2.createSpineData(Spine2.LOAD_NON_MESH ? (assetName + Spine2.NON_MESH_SUFFIX) : assetName, skeletonScale));
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
                    var spineAtlas = new spine.SpineRuntime.Atlas(application_8.Application.getInstance().game.cache.getText(assetName + '.atlas'), this.atlasCallbackFunction);
                    var spineJsonParser = new spine.SpineRuntime.SkeletonJsonParser(new spine.SpineRuntime.AtlasAttachmentParser(spineAtlas), skeletonScale);
                    var skeletonData = spineJsonParser.readSkeletonData(application_8.Application.getInstance().game.cache.getJSON(assetName + '.json'));
                    return skeletonData;
                };
                Spine2.atlasCallbackFunction = function (line, callback) {
                    var lineArr = line.split('@' + application_8.Application.getInstance().game.resolution + 'x');
                    var url = lineArr.join('');
                    callback(new PIXI.BaseTexture(application_8.Application.getInstance().game.cache.getImage(url), PIXI.scaleModes.DEFAULT));
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
                    Spine2.game = application_8.Application.getInstance().game;
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
            exports_27("Spine2", Spine2);
        }
    }
});
System.register("dijon/display/Text", ["dijon/application", "dijon/utils"], function(exports_28, context_28) {
    "use strict";
    var __moduleName = context_28 && context_28.id;
    var application_9, utils_1;
    var Text;
    return {
        setters:[
            function (application_9_1) {
                application_9 = application_9_1;
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
                    _super.call(this, application_9.Application.getInstance().game, x, y, text, Text._addSettings({
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
                Text.CreateFromData = function (data) {
                    var self = new Text(data.position.x, data.position.y, data.copy, data.fontName, data.fontSize, '#' + data.fontColor, data.alignment, data.wrapWidth > 0, data.wrapWidth > 0 ? data.wrapWidth : null, data.spacing);
                    self.name = data.name;
                    if (data.stroke != "") {
                        self.stroke = data.stroke;
                    }
                    if (data.shadowColor) {
                        self.setShadow(data.shadowX, data.shadowY, data.shadowColor);
                    }
                    if (data.scale) {
                        self.scale.setTo(data.scale.x, data.scale.y);
                    }
                    if (data.anchor) {
                        self.pivot = new Phaser.Point(data.anchor.x, data.anchor.y);
                    }
                    switch (data.alignment) {
                        case 'center':
                            self.x -= self.realWidth * 0.5;
                            break;
                        case 'right':
                            self.x -= self.realWidth;
                            break;
                    }
                    self.x = Math.round(self.x);
                    self.y = Math.round(self.y);
                    self.alpha = data.alpha ? data.alpha : 1;
                    return self;
                };
                Text.prototype.assignPrefab = function (object) {
                };
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
            exports_28("Text", Text);
        }
    }
});
System.register("dijon/display", ["dijon/display/BitmapText", "dijon/display/Component", "dijon/display/Group", "dijon/display/InvisibleButton", "dijon/display/LabelledButton", "dijon/display/NineSliceImage", "dijon/display/Spine", "dijon/display/Spine2", "dijon/display/Sprite", "dijon/display/Text"], function(exports_29, context_29) {
    "use strict";
    var __moduleName = context_29 && context_29.id;
    return {
        setters:[
            function (BitmapText_1_1) {
                exports_29({
                    "BitmapText": BitmapText_1_1["BitmapText"]
                });
            },
            function (Component_1_1) {
                exports_29({
                    "Component": Component_1_1["Component"]
                });
            },
            function (Group_2_1) {
                exports_29({
                    "Group": Group_2_1["Group"]
                });
            },
            function (InvisibleButton_1_1) {
                exports_29({
                    "InvisibleButton": InvisibleButton_1_1["InvisibleButton"]
                });
            },
            function (LabelledButton_1_1) {
                exports_29({
                    "LabelledButton": LabelledButton_1_1["LabelledButton"]
                });
            },
            function (NineSliceImage_1_1) {
                exports_29({
                    "NineSliceImage": NineSliceImage_1_1["NineSliceImage"]
                });
            },
            function (Spine_1_1) {
                exports_29({
                    "Spine": Spine_1_1["Spine"]
                });
            },
            function (Spine2_1_1) {
                exports_29({
                    "Spine2": Spine2_1_1["Spine2"]
                });
            },
            function (Sprite_2_1) {
                exports_29({
                    "Sprite": Sprite_2_1["Sprite"]
                });
            },
            function (Text_1_1) {
                exports_29({
                    "Text": Text_1_1["Text"]
                });
            }],
        execute: function() {
        }
    }
});
System.register("dijon/utils/Placeholders", ["dijon/application", "dijon/utils/Textures", "dijon/display"], function(exports_30, context_30) {
    "use strict";
    var __moduleName = context_30 && context_30.id;
    var application_10, Textures_1, display_2;
    var Placeholders;
    return {
        setters:[
            function (application_10_1) {
                application_10 = application_10_1;
            },
            function (Textures_1_1) {
                Textures_1 = Textures_1_1;
            },
            function (display_2_1) {
                display_2 = display_2_1;
            }],
        execute: function() {
            Placeholders = (function () {
                function Placeholders() {
                }
                Object.defineProperty(Placeholders, "game", {
                    get: function () {
                        return application_10.Application.getInstance().game;
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
                    var _this = this;
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
                    var textInstance = new display_2.Text(width * 0.5, height * 0.55, " " + text + " ", 'Arial', autoSize ? 25 : height * 0.6, '#000000');
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
                            callback.call(callbackContext, _this);
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
            exports_30("Placeholders", Placeholders);
        }
    }
});
System.register("dijon/utils/Time", ["dijon/application"], function(exports_31, context_31) {
    "use strict";
    var __moduleName = context_31 && context_31.id;
    var application_11;
    var Time;
    return {
        setters:[
            function (application_11_1) {
                application_11 = application_11_1;
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
                    return application_11.Application.getInstance().game.time.events.add.apply(application_11.Application.getInstance().game.time.events, params);
                };
                return Time;
            }());
            exports_31("Time", Time);
        }
    }
});
System.register("dijon/utils/Util", [], function(exports_32, context_32) {
    "use strict";
    var __moduleName = context_32 && context_32.id;
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
            exports_32("Util", Util);
        }
    }
});
System.register("dijon/utils/Log", ["dijon/application", "dijon/display", "dijon/utils"], function(exports_33, context_33) {
    "use strict";
    var __moduleName = context_33 && context_33.id;
    var application_12, display_3, utils_2;
    var Log;
    return {
        setters:[
            function (application_12_1) {
                application_12 = application_12_1;
            },
            function (display_3_1) {
                display_3 = display_3_1;
            },
            function (utils_2_1) {
                utils_2 = utils_2_1;
            }],
        execute: function() {
            Log = (function () {
                function Log() {
                }
                Log.init = function () {
                    this.static_logLines = new Array();
                    this.static_logLinesText = new Array();
                    this.static_gameInstance = application_12.Application.getInstance().game;
                    this.static_gameHalfHeight = this.static_gameInstance.height * 0.5 | 0;
                    this._createWindowGroup();
                };
                Log.show = function () {
                    if (!application_12.Application.static_debugMode) {
                        return;
                    }
                    this.static_window.y = this.static_gameHalfHeight;
                    this.static_window.visible = true;
                };
                Log.hide = function () {
                    if (!application_12.Application.static_debugMode) {
                        return;
                    }
                    this.static_window.y = this.static_gameInstance.height;
                    this.static_window.visible = false;
                };
                Log.debug = function (pLine) {
                    var pOptionalParams = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        pOptionalParams[_i - 1] = arguments[_i];
                    }
                    if (!application_12.Application.static_debugMode) {
                        return;
                    }
                    if (pOptionalParams.length === 0) {
                        console.log(pLine);
                    }
                    else {
                        console.log(pLine, pOptionalParams);
                    }
                    var optionalParamsString = "";
                    for (var cnt = 0; cnt < pOptionalParams.length; cnt++) {
                        var element = pOptionalParams[cnt];
                        optionalParamsString += " ";
                        optionalParamsString += element.toString();
                    }
                    if (pLine === null) {
                        pLine = "null";
                    }
                    else if (pLine === undefined) {
                        pLine = "undefined";
                    }
                    this.static_logLines.push(pLine + optionalParamsString);
                    this._addLine(this.static_logLines.length, '#ffffff');
                };
                Log.warn = function (pLine) {
                    var pOptionalParams = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        pOptionalParams[_i - 1] = arguments[_i];
                    }
                    if (!application_12.Application.static_debugMode) {
                        return;
                    }
                    if (pOptionalParams.length === 0) {
                        console.warn(pLine);
                    }
                    else {
                        console.warn(pLine, pOptionalParams);
                    }
                    var optionalParamsString = "";
                    for (var cnt = 0; cnt < pOptionalParams.length; cnt++) {
                        var element = pOptionalParams[cnt];
                        optionalParamsString += " ";
                        optionalParamsString += element.toString();
                    }
                    if (pLine === null) {
                        pLine = "null";
                    }
                    else if (pLine === undefined) {
                        pLine = "undefined";
                    }
                    this.static_logLines.push(pLine + optionalParamsString);
                    this._addLine(this.static_logLines.length, '#ffff00');
                };
                Log.error = function (pLine) {
                    var pOptionalParams = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        pOptionalParams[_i - 1] = arguments[_i];
                    }
                    if (!application_12.Application.static_debugMode) {
                        return;
                    }
                    if (pOptionalParams.length === 0) {
                        console.error(pLine);
                    }
                    else {
                        console.error(pLine, pOptionalParams);
                    }
                    var optionalParamsString = "";
                    for (var cnt = 0; cnt < pOptionalParams.length; cnt++) {
                        var element = pOptionalParams[cnt];
                        optionalParamsString += " ";
                        optionalParamsString += element.toString();
                    }
                    if (pLine === null) {
                        pLine = "null";
                    }
                    else if (pLine === undefined) {
                        pLine = "undefined";
                    }
                    this.static_logLines.push(pLine + optionalParamsString);
                    this._addLine(this.static_logLines.length, '#ff0000');
                };
                Log.isVisible = function () {
                    return this.static_window.visible;
                };
                Log._createWindowGroup = function () {
                    this.static_window = this.static_gameInstance.addToStage.dGroup(0, this.static_gameInstance.height, "Log Window");
                    this.static_windowBG = this.static_window.addChild(utils_2.Placeholders.image(0, this.static_gameHalfHeight, utils_2.Textures.rect(this.static_gameInstance.width, this.static_gameHalfHeight, 0x000000, 0.7, true), "BG"));
                    this.static_windowBG.anchor.set(0, 1);
                    this.static_window.visible = false;
                };
                Log._addLine = function (pIndex, pColor) {
                    console.log("displaying", this.static_logLines[pIndex - 1]);
                    var logLine = new display_3.Text(5, 0, this.static_logLines[pIndex - 1], 'Arial', 14, pColor, 'left', true, this.static_gameInstance.width - 10);
                    logLine.anchor.set(0, 1);
                    logLine.name = "LogLine" + pIndex;
                    this.static_windowBG.addChild(logLine);
                    this.static_logLinesText.push(logLine);
                    for (var cnt = this.static_windowBG.children.length - 2; cnt >= 0; --cnt) {
                        var line = this.static_windowBG.getChildAt(cnt);
                        line.y -= logLine.realHeight - this.LINE_SPACING;
                        if (Math.abs(line.y - 5 + line.realHeight) >= this.static_gameHalfHeight - line.realHeight - 10) {
                            this.static_logLines[this.static_backOffset] = null;
                            this.static_logLinesText[this.static_backOffset].destroy();
                            this.static_logLinesText[this.static_backOffset] = null;
                            if (++this.static_backOffset * 2 >= this.static_logLines.length) {
                                this.static_logLines = this.static_logLines.slice(this.static_backOffset);
                                console.log(this.static_logLines);
                                this.static_logLinesText = this.static_logLinesText.slice(this.static_backOffset);
                                console.log(this.static_logLinesText);
                                this.static_backOffset = 0;
                            }
                        }
                    }
                };
                Log.MAX_LOG_LINES = 22;
                Log.LINE_SPACING = 5;
                Log.static_logLines = null;
                Log.static_logLinesText = null;
                Log.static_backOffset = 0;
                Log.static_window = null;
                Log.static_windowBG = null;
                Log.static_gameInstance = null;
                Log.static_gameHalfHeight = 0;
                return Log;
            }());
            exports_33("Log", Log);
        }
    }
});
System.register("dijon/utils/PrefabBuilder", ["dijon/display"], function(exports_34, context_34) {
    "use strict";
    var __moduleName = context_34 && context_34.id;
    var display_4;
    var PrefabBuilder;
    return {
        setters:[
            function (display_4_1) {
                display_4 = display_4_1;
            }],
        execute: function() {
            PrefabBuilder = (function () {
                function PrefabBuilder() {
                }
                PrefabBuilder.addPrefabClass = function (newClass, importName, overrideExisting) {
                    if (overrideExisting === void 0) { overrideExisting = false; }
                    if (PrefabBuilder.prefabClasses.hasOwnProperty(importName)) {
                        if (overrideExisting) {
                            PrefabBuilder.prefabClasses[importName] = newClass;
                        }
                        else {
                            console.warn("Entry for: " + importName + " already exists in Prefab Classes");
                            console.warn("Use overrideExisting flag if you wish replace existing entry");
                        }
                    }
                    else {
                        PrefabBuilder.prefabClasses[importName] = newClass;
                    }
                };
                PrefabBuilder.createSceneFrom = function (data, scene) {
                    if (scene === null) {
                        return;
                    }
                    scene.prefabs = [];
                    scene.groups = [];
                    PrefabBuilder.createPrefabObjects(data, scene);
                };
                PrefabBuilder.createPrefabObjects = function (data, scene) {
                    if (scene === null) {
                        return;
                    }
                    if (data !== null) {
                        for (var i = 0; i < data.prefabs.length; i++) {
                            if (PrefabBuilder.prefabClasses.hasOwnProperty(data.prefabs[i].type)) {
                                var prefab = this.createPrefab(data.prefabs[i]);
                                if (prefab !== null) {
                                    if (data.prefabs[i].parent !== "state") {
                                        if (scene.groups[data.prefabs[i].parent] !== null && scene.groups[data.prefabs[i].parent] !== undefined) {
                                            scene.groups[data.prefabs[i].parent].addInternal.existing(prefab);
                                        }
                                        else {
                                            if (scene.prefabs[data.prefabs[i].parent] !== null && scene.prefabs[data.prefabs[i].parent] !== undefined) {
                                                scene.prefabs[data.prefabs[i].parent].addChild(prefab);
                                                if (data.prefabs[i].assignToParent === true) {
                                                    scene.prefabs[data.prefabs[i].parent].assignPrefab(prefab);
                                                }
                                            }
                                            else {
                                                scene.add.existing(prefab);
                                            }
                                        }
                                    }
                                    else {
                                        scene.add.existing(prefab);
                                    }
                                    if (data.prefabs[i].type === "group") {
                                        scene.groups[prefab.name] = prefab;
                                    }
                                    else {
                                        scene.prefabs[prefab.name] = prefab;
                                    }
                                }
                            }
                            else {
                                console.warn("No PrefabClasses entry found for: " + data.prefabs[i].type);
                            }
                        }
                    }
                };
                PrefabBuilder.createPrefab = function (data) {
                    var prefab = null;
                    if (this.prefabClasses.hasOwnProperty(data.type)) {
                        prefab = this.prefabClasses[data.type].CreateFromData(data);
                    }
                    return prefab;
                };
                PrefabBuilder.prefabClasses = {
                    group: display_4.Group,
                    text: display_4.Text,
                    sprite: display_4.Sprite
                };
                return PrefabBuilder;
            }());
            exports_34("PrefabBuilder", PrefabBuilder);
        }
    }
});
System.register("dijon/utils", ["dijon/utils/Device", "dijon/utils/Logger", "dijon/utils/Notifications", "dijon/utils/Placeholders", "dijon/utils/Textures", "dijon/utils/Time", "dijon/utils/Util", "dijon/utils/Log", "dijon/utils/PrefabBuilder"], function(exports_35, context_35) {
    "use strict";
    var __moduleName = context_35 && context_35.id;
    return {
        setters:[
            function (Device_1_1) {
                exports_35({
                    "Device": Device_1_1["Device"]
                });
            },
            function (Logger_1_1) {
                exports_35({
                    "Logger": Logger_1_1["Logger"]
                });
            },
            function (Notifications_1_1) {
                exports_35({
                    "Notifications": Notifications_1_1["Notifications"]
                });
            },
            function (Placeholders_1_1) {
                exports_35({
                    "Placeholders": Placeholders_1_1["Placeholders"]
                });
            },
            function (Textures_2_1) {
                exports_35({
                    "Textures": Textures_2_1["Textures"]
                });
            },
            function (Time_1_1) {
                exports_35({
                    "Time": Time_1_1["Time"]
                });
            },
            function (Util_1_1) {
                exports_35({
                    "Util": Util_1_1["Util"]
                });
            },
            function (Log_1_1) {
                exports_35({
                    "Log": Log_1_1["Log"]
                });
            },
            function (PrefabBuilder_1_1) {
                exports_35({
                    "PrefabBuilder": PrefabBuilder_1_1["PrefabBuilder"]
                });
            }],
        execute: function() {
        }
    }
});
System.register("dijon/core/AnalyticsManager", ["dijon/utils"], function(exports_36, context_36) {
    "use strict";
    var __moduleName = context_36 && context_36.id;
    var utils_3;
    var AnalyticsEventModel, AnalyticsManager, AnalyticsException;
    return {
        setters:[
            function (utils_3_1) {
                utils_3 = utils_3_1;
            }],
        execute: function() {
            AnalyticsEventModel = (function () {
                function AnalyticsEventModel(pAction, pLabel, pValue) {
                    if (pLabel === void 0) { pLabel = ""; }
                    if (pValue === void 0) { pValue = null; }
                    this.action = pAction;
                    this.label = pLabel;
                    this.value = pValue;
                }
                return AnalyticsEventModel;
            }());
            exports_36("AnalyticsEventModel", AnalyticsEventModel);
            AnalyticsManager = (function () {
                function AnalyticsManager(enabled, category) {
                    if (enabled === void 0) { enabled = true; }
                    if (category === void 0) { category = null; }
                    this.enabled = enabled;
                    this._trackerId = null;
                    this._startedWithTrackerId = false;
                    this._category = category;
                }
                AnalyticsManager.prototype.setCategory = function (newCat) {
                    this._category = newCat;
                };
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
                    else if (this._category === null) {
                        throw new AnalyticsException('No category defined');
                    }
                    if (utils_3.Device.cocoon && window['analytics'] !== undefined) {
                        var analytics = window['analytics'];
                        analytics.trackEvent(this._category, action, label, value);
                        return;
                    }
                    if (value) {
                        this.ga('send', 'event', this._category, action, label, value);
                    }
                    else if (label) {
                        this.ga('send', 'event', this._category, action, label);
                    }
                    else {
                        this.ga('send', 'event', this._category, action);
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
                    if (utils_3.Device.cocoon && window['analytics'] !== undefined) {
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
                        return (window['ga'] || (utils_3.Device.cocoon && window['analytics'] !== undefined)) ? true : false;
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
            exports_36("AnalyticsManager", AnalyticsManager);
            AnalyticsException = (function () {
                function AnalyticsException(message) {
                    this.message = message;
                    this.name = 'AnalyticsException';
                }
                return AnalyticsException;
            }());
            exports_36("AnalyticsException", AnalyticsException);
        }
    }
});
System.register("dijon/core/AssetManager", ["dijon/application", "dijon/utils", "dijon/display"], function(exports_37, context_37) {
    "use strict";
    var __moduleName = context_37 && context_37.id;
    var application_13, utils_4, display_5;
    var AssetManager;
    return {
        setters:[
            function (application_13_1) {
                application_13 = application_13_1;
            },
            function (utils_4_1) {
                utils_4 = utils_4_1;
            },
            function (display_5_1) {
                display_5 = display_5_1;
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
                    this.app = application_13.Application.getInstance();
                    this.game = this.app.game;
                    if (window.hasOwnProperty("baseURL")) {
                        this.baseURL = window["baseURL"];
                    }
                    else {
                        this.baseURL = '';
                    }
                    this.paths = null;
                    this.resolution = this.game.resolution;
                    this._soundsToDecode = [];
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
                    if (display_5.Spine.AUTO_MESH === true && key.indexOf(display_5.Spine.NON_MESH_SUFFIX) === -1) {
                        this.loadSpine(key + display_5.Spine.NON_MESH_SUFFIX);
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
                    this.sendNotification(utils_4.Notifications.ASSET_MANAGER_DATA_SET, this._data);
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
                    this.sendNotification(utils_4.Notifications.ASSET_MANAGER_ASSETS_CLEARED, id);
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
            exports_37("AssetManager", AssetManager);
        }
    }
});
System.register("dijon/core/AudioManager", ["dijon/application"], function(exports_38, context_38) {
    "use strict";
    var __moduleName = context_38 && context_38.id;
    var application_14;
    var AudioManager;
    return {
        setters:[
            function (application_14_1) {
                application_14 = application_14_1;
            }],
        execute: function() {
            AudioManager = (function () {
                function AudioManager() {
                    this._spriteEnabled = true;
                    this._soundEnabled = true;
                    this._spriteVolume = 1;
                    this._soundVolume = 1;
                    this._sprites = {};
                    this._sounds = {};
                    this._markerLookup = {};
                    this.game = application_14.Application.getInstance().game;
                    this.onSpriteToggle = new Phaser.Signal();
                    this.onSpriteVolumeChange = new Phaser.Signal();
                    this.onSoundToggle = new Phaser.Signal();
                    this.onSoundVolumeChange = new Phaser.Signal();
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
                                volume = this._spriteVolume + parseFloat(volume);
                            }
                            else {
                                volume = parseFloat(volume);
                            }
                        }
                    }
                    else {
                        volume = this._spriteVolume;
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
                    if (volume === void 0) { volume = this._spriteVolume; }
                    if (loop === void 0) { loop = false; }
                    if (forceRestart === void 0) { forceRestart = true; }
                    if (this._getKeyFromMarkerName(marker)) {
                        return this.playSpriteMarker(marker, this._spriteEnabled ? volume : 0, loop, forceRestart);
                    }
                    return this.playSound(marker, this._spriteEnabled ? volume : 0, loop, forceRestart);
                };
                AudioManager.prototype.playDelayedAudio = function (delay, marker, volume, loop, forceRestart) {
                    if (volume === void 0) { volume = this._spriteVolume; }
                    if (loop === void 0) { loop = false; }
                    if (forceRestart === void 0) { forceRestart = true; }
                    if (this._getKeyFromMarkerName(marker)) {
                        return this.playDelayedSpriteMarker(delay, marker, this._spriteEnabled ? volume : 0, loop, forceRestart);
                    }
                    return this.playDelayedSound(delay, marker, this._spriteEnabled ? volume : 0, loop, forceRestart);
                };
                AudioManager.prototype.playSound = function (key, volume, loop, forceRestart) {
                    if (volume === void 0) { volume = this._soundVolume; }
                    if (loop === void 0) { loop = false; }
                    if (forceRestart === void 0) { forceRestart = true; }
                    if (typeof this._sounds[key] === 'undefined') {
                        return null;
                    }
                    return this._sounds[key].play("", 0, this._soundEnabled ? volume : 0, loop, forceRestart);
                };
                AudioManager.prototype.getSound = function (key, volume, loop, forceRestart) {
                    if (volume === void 0) { volume = this._soundVolume; }
                    if (loop === void 0) { loop = false; }
                    if (forceRestart === void 0) { forceRestart = true; }
                    if (typeof this._sounds[key] === 'undefined') {
                        return null;
                    }
                    return this._sounds[key];
                };
                AudioManager.prototype.playSpriteMarker = function (marker, volume, loop, forceRestart) {
                    if (volume === void 0) { volume = this._spriteVolume; }
                    if (loop === void 0) { loop = false; }
                    if (forceRestart === void 0) { forceRestart = true; }
                    var key = this._getKeyFromMarkerName(marker);
                    if (!key) {
                        console.log('marker not found', marker);
                        return null;
                    }
                    return this._playSpriteMarker(key, marker, this._spriteEnabled ? volume : 0, loop, forceRestart);
                };
                AudioManager.prototype.playDelayedSound = function (delay, key, volume, loop, forceRestart) {
                    if (volume === void 0) { volume = this._soundVolume; }
                    if (loop === void 0) { loop = false; }
                    if (forceRestart === void 0) { forceRestart = true; }
                    this.game.time.events.add(delay, this.playSound, this, key, volume, loop, forceRestart);
                    return null;
                };
                AudioManager.prototype.playDelayedSpriteMarker = function (delay, marker, volume, loop, forceRestart) {
                    if (volume === void 0) { volume = this._spriteVolume; }
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
                Object.defineProperty(AudioManager.prototype, "spriteEnabled", {
                    get: function () {
                        return this._spriteEnabled;
                    },
                    set: function (value) {
                        this._spriteEnabled = value;
                        this.onSpriteToggle.dispatch(this._spriteEnabled);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioManager.prototype, "soundEnabled", {
                    get: function () {
                        return this._soundEnabled;
                    },
                    set: function (value) {
                        this._soundEnabled = value;
                        this.onSoundToggle.dispatch(this._soundEnabled);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioManager.prototype, "spriteVolume", {
                    get: function () {
                        return this._spriteVolume;
                    },
                    set: function (value) {
                        if (value < 0 || value > 1) {
                            return;
                        }
                        this._spriteVolume = value;
                        this.onSpriteVolumeChange.dispatch(this._spriteVolume);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioManager.prototype, "soundVolume", {
                    get: function () {
                        return this._soundVolume;
                    },
                    set: function (value) {
                        if (value < 0 || value > 1) {
                            return;
                        }
                        this._soundVolume = value;
                        this.onSoundVolumeChange.dispatch(this._soundVolume);
                    },
                    enumerable: true,
                    configurable: true
                });
                return AudioManager;
            }());
            exports_38("AudioManager", AudioManager);
        }
    }
});
System.register("dijon/core/Game", ["dijon/application", "dijon/core", "dijon/utils"], function(exports_39, context_39) {
    "use strict";
    var __moduleName = context_39 && context_39.id;
    var application_15, core_1, utils_5;
    var Game;
    return {
        setters:[
            function (application_15_1) {
                application_15 = application_15_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (utils_5_1) {
                utils_5 = utils_5_1;
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
                    this.app = application_15.Application.getInstance();
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
                    application_15.Application.getInstance().sendNotification(utils_5.Notifications.MOUSE_LEAVE_GLOBAL);
                };
                Game.prototype.mouseOver = function () {
                    application_15.Application.getInstance().sendNotification(utils_5.Notifications.MOUSE_ENTER_GLOBAL);
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
                Game.prototype.changeState = function (toState, args) {
                    this.gameLayer.removeAll(true, true);
                    return this.state.start(toState, false, false, args);
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
                Object.defineProperty(Game.prototype, "centerX", {
                    get: function () {
                        return this.width * 0.5;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Game.prototype, "centerY", {
                    get: function () {
                        return this.height * 0.5;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Game;
            }(Phaser.Game));
            exports_39("Game", Game);
        }
    }
});
System.register("dijon/core/GameObjectFactory", ["dijon/display"], function(exports_40, context_40) {
    "use strict";
    var __moduleName = context_40 && context_40.id;
    var display_6;
    var GameObjectFactory;
    return {
        setters:[
            function (display_6_1) {
                display_6 = display_6_1;
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
                    return group.add(new display_6.Sprite(x, y, key, frame, name, components));
                };
                GameObjectFactory.prototype.dGroup = function (x, y, name, addToStage, components, enableBody, physicsBodyType, group) {
                    if (group === undefined && addToStage !== true) {
                        group = this.targetGroup;
                        this.targetGroup = null;
                        return group.add(new display_6.Group(x, y, name, addToStage, components, enableBody, physicsBodyType));
                    }
                    return new display_6.Group(x, y, name, addToStage, components, enableBody, physicsBodyType);
                };
                GameObjectFactory.prototype.dText = function (x, y, text, fontName, fontSize, fontColor, fontAlign, wordWrap, width, lineSpacing, settings, group) {
                    if (group === undefined) {
                        group = this.targetGroup;
                    }
                    this.targetGroup = null;
                    return group.add(new display_6.Text(x, y, text, fontName, fontSize, fontColor, fontAlign, wordWrap, width, lineSpacing, settings));
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
                    return group.add(new display_6.BitmapText(x, y, font, text, size, align, color, smoothing, autoFlatten, makeImage));
                };
                GameObjectFactory.prototype.spine = function (assetName, x, y, group) {
                    if (assetName === void 0) { assetName = ''; }
                    if (x === void 0) { x = 0; }
                    if (y === void 0) { y = 0; }
                    if (group === undefined) {
                        group = this.targetGroup;
                    }
                    this.targetGroup = null;
                    return group.add(new display_6.Spine(assetName, x, y));
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
            exports_40("GameObjectFactory", GameObjectFactory);
        }
    }
});
System.register("dijon/core/SequenceManager", ["dijon/application"], function(exports_41, context_41) {
    "use strict";
    var __moduleName = context_41 && context_41.id;
    var application_16;
    var SequenceManager;
    return {
        setters:[
            function (application_16_1) {
                application_16 = application_16_1;
            }],
        execute: function() {
            SequenceManager = (function () {
                function SequenceManager() {
                    this._defaultInterval = 20;
                    this.game = application_16.Application.getInstance().game;
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
            exports_41("SequenceManager", SequenceManager);
        }
    }
});
System.register("dijon/core/State", ["dijon/application", "dijon/utils"], function(exports_42, context_42) {
    "use strict";
    var __moduleName = context_42 && context_42.id;
    var application_17, utils_6;
    var State;
    return {
        setters:[
            function (application_17_1) {
                application_17 = application_17_1;
            },
            function (utils_6_1) {
                utils_6 = utils_6_1;
            }],
        execute: function() {
            State = (function (_super) {
                __extends(State, _super);
                function State() {
                    _super.call(this);
                    this.prefabs = {};
                    this.groups = {};
                    this._audio = [];
                    this._mediator = null;
                    this._sceneData = null;
                    this._allowUpdate = false;
                }
                State.prototype.init = function (args) {
                };
                State.prototype.preload = function () {
                    if (this.preloadID)
                        this.game.asset.loadAssets(this.preloadID);
                };
                State.prototype.update = function () {
                    if (this._allowUpdate) {
                        this.updateState();
                    }
                };
                State.prototype.resume = function () {
                    this._allowUpdate = true;
                };
                State.prototype.pause = function () {
                    this._allowUpdate = false;
                };
                State.prototype.updateState = function () {
                    console.log("State: Calling updateState() - you should override this for logic loops, not update().");
                };
                State.prototype.create = function () {
                    if (!this.game.asset.allSoundsDecoded()) {
                        this.game.asset.onLoadCompleteAndAudioDecoded.addOnce(this.create, this);
                        return;
                    }
                    if (this._sceneData !== null) {
                        utils_6.PrefabBuilder.createSceneFrom(this._sceneData, this);
                    }
                    this.app.ensureAudioContextUnlocked();
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
                        return application_17.Application.getInstance();
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
                State.prototype.createPrefabFromData = function (prefData) {
                    if (prefData != null) {
                        return utils_6.PrefabBuilder.createPrefabObjects(prefData, this);
                    }
                    return null;
                };
                State.prototype.assignPrefab = function (object) {
                };
                State.prototype._findPrefab = function (name) {
                    if (this.prefabs.hasOwnProperty(name)) {
                        return this.prefabs[name];
                    }
                    else {
                        return null;
                    }
                };
                State.prototype._findGroup = function (name) {
                    if (this.groups.hasOwnProperty(name)) {
                        return this.groups[name];
                    }
                    else {
                        return null;
                    }
                };
                return State;
            }(Phaser.State));
            exports_42("State", State);
        }
    }
});
System.register("dijon/core/StorageManager", ["dijon/application"], function(exports_43, context_43) {
    "use strict";
    var __moduleName = context_43 && context_43.id;
    var application_18;
    var StorageManager;
    return {
        setters:[
            function (application_18_1) {
                application_18 = application_18_1;
            }],
        execute: function() {
            StorageManager = (function () {
                function StorageManager() {
                    this.game = application_18.Application.getInstance().game;
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
            exports_43("StorageManager", StorageManager);
        }
    }
});
System.register("dijon/core/TransitionManager", ["dijon/application"], function(exports_44, context_44) {
    "use strict";
    var __moduleName = context_44 && context_44.id;
    var application_19;
    var TransitionManager;
    return {
        setters:[
            function (application_19_1) {
                application_19 = application_19_1;
            }],
        execute: function() {
            TransitionManager = (function () {
                function TransitionManager() {
                    this.onTransitionOutComplete = new Phaser.Signal();
                    this.onTransitionInComplete = new Phaser.Signal();
                    this._isInTransition = false;
                    this._transition = null;
                    this._transitions = {};
                    this._exceptions = {};
                    this._fromState = null;
                    this._toState = null;
                    this._args = null;
                    this.game = application_19.Application.getInstance().game;
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
                    this.game.changeState(this._toState, this._args);
                };
                TransitionManager.prototype._transitionOutComplete = function () {
                    this._transition = null;
                    this.onTransitionOutComplete.dispatch();
                    this._isInTransition = false;
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
                TransitionManager.prototype.to = function (state, args) {
                    if (this._transition)
                        this._clearTransition();
                    if (this._exceptions[state])
                        return;
                    if (args !== undefined) {
                        this._args = args;
                    }
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
                        this._isInTransition = true;
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
                Object.defineProperty(TransitionManager.prototype, "isInTransition", {
                    get: function () {
                        return this._isInTransition;
                    },
                    enumerable: true,
                    configurable: true
                });
                return TransitionManager;
            }());
            exports_44("TransitionManager", TransitionManager);
        }
    }
});
System.register("dijon/core", ["dijon/core/AnalyticsManager", "dijon/core/AssetManager", "dijon/core/AudioManager", "dijon/core/Game", "dijon/core/GameObjectFactory", "dijon/core/SequenceManager", "dijon/core/State", "dijon/core/StorageManager", "dijon/core/TransitionManager"], function(exports_45, context_45) {
    "use strict";
    var __moduleName = context_45 && context_45.id;
    return {
        setters:[
            function (AnalyticsManager_1_1) {
                exports_45({
                    "AnalyticsManager": AnalyticsManager_1_1["AnalyticsManager"],
                    "AnalyticsException": AnalyticsManager_1_1["AnalyticsException"],
                    "AnalyticsEventModel": AnalyticsManager_1_1["AnalyticsEventModel"]
                });
            },
            function (AssetManager_1_1) {
                exports_45({
                    "AssetManager": AssetManager_1_1["AssetManager"]
                });
            },
            function (AudioManager_1_1) {
                exports_45({
                    "AudioManager": AudioManager_1_1["AudioManager"]
                });
            },
            function (Game_1_1) {
                exports_45({
                    "Game": Game_1_1["Game"]
                });
            },
            function (GameObjectFactory_1_1) {
                exports_45({
                    "GameObjectFactory": GameObjectFactory_1_1["GameObjectFactory"]
                });
            },
            function (SequenceManager_1_1) {
                exports_45({
                    "SequenceManager": SequenceManager_1_1["SequenceManager"]
                });
            },
            function (State_1_1) {
                exports_45({
                    "State": State_1_1["State"]
                });
            },
            function (StorageManager_1_1) {
                exports_45({
                    "StorageManager": StorageManager_1_1["StorageManager"]
                });
            },
            function (TransitionManager_1_1) {
                exports_45({
                    "TransitionManager": TransitionManager_1_1["TransitionManager"]
                });
            }],
        execute: function() {
        }
    }
});
System.register("dijon/mvc/Model", ["dijon/application"], function(exports_46, context_46) {
    "use strict";
    var __moduleName = context_46 && context_46.id;
    var application_20;
    var Model;
    return {
        setters:[
            function (application_20_1) {
                application_20 = application_20_1;
            }],
        execute: function() {
            Model = (function () {
                function Model(dataKey, modelName) {
                    if (dataKey === void 0) { dataKey = null; }
                    if (modelName === void 0) { modelName = null; }
                    this.modelName = modelName;
                    this.app = application_20.Application.getInstance();
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
            exports_46("Model", Model);
        }
    }
});
System.register("dijon/mvc/CopyModel", ["dijon/mvc/Model"], function(exports_47, context_47) {
    "use strict";
    var __moduleName = context_47 && context_47.id;
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
            exports_47("CopyModel", CopyModel);
        }
    }
});
System.register("dijon/mvc/Mediator", ["dijon/application"], function(exports_48, context_48) {
    "use strict";
    var __moduleName = context_48 && context_48.id;
    var application_21;
    var Mediator;
    return {
        setters:[
            function (application_21_1) {
                application_21 = application_21_1;
            }],
        execute: function() {
            Mediator = (function () {
                function Mediator(_viewComponent, autoReg, mediatorName) {
                    if (_viewComponent === void 0) { _viewComponent = null; }
                    if (autoReg === void 0) { autoReg = true; }
                    if (mediatorName === void 0) { mediatorName = null; }
                    this._viewComponent = _viewComponent;
                    this.mediatorName = null;
                    this.app = application_21.Application.getInstance();
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
            exports_48("Mediator", Mediator);
        }
    }
});
System.register("dijon/mvc/Notification", [], function(exports_49, context_49) {
    "use strict";
    var __moduleName = context_49 && context_49.id;
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
            exports_49("Notification", Notification);
        }
    }
});
System.register("dijon/mvc", ["dijon/mvc/CopyModel", "dijon/mvc/Mediator", "dijon/mvc/Model", "dijon/mvc/Notification"], function(exports_50, context_50) {
    "use strict";
    var __moduleName = context_50 && context_50.id;
    return {
        setters:[
            function (CopyModel_1_1) {
                exports_50({
                    "CopyModel": CopyModel_1_1["CopyModel"]
                });
            },
            function (Mediator_1_1) {
                exports_50({
                    "Mediator": Mediator_1_1["Mediator"]
                });
            },
            function (Model_2_1) {
                exports_50({
                    "Model": Model_2_1["Model"]
                });
            },
            function (Notification_1_1) {
                exports_50({
                    "Notification": Notification_1_1["Notification"]
                });
            }],
        execute: function() {
        }
    }
});
System.register("dijon/application/Application", ["dijon/mvc", "dijon/core", "dijon/utils"], function(exports_51, context_51) {
    "use strict";
    var __moduleName = context_51 && context_51.id;
    var mvc_1, core_2, utils_7;
    var Application;
    return {
        setters:[
            function (mvc_1_1) {
                mvc_1 = mvc_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (utils_7_1) {
                utils_7 = utils_7_1;
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
                Application.prototype.ensureAudioContextUnlocked = function () {
                    var _this = this;
                    if (this.game.device.android && this.game.device.chrome && this.game.device.chromeVersion >= 55) {
                        this.game.sound.setTouchLock();
                        this.game.input.touch.addTouchLockCallback(function () {
                            if (_this.game.sound.noAudio || !_this.game.sound.touchLocked) {
                                return true;
                            }
                            if (_this.game.sound.usingWebAudio) {
                                var buffer = _this.game.sound.context.createBuffer(1, 1, 22050);
                                _this.game.sound["unlockSource"] = _this.game.sound.context.createBufferSource();
                                _this.game.sound["unlockSource"].buffer = buffer;
                                _this.game.sound["unlockSource"].connect(_this.game.sound.context.destination);
                                if (_this.game.sound["unlockSource"].start === undefined) {
                                    _this.game.sound["unlockSource"].noteOn(0);
                                }
                                else {
                                    _this.game.sound["unlockSource"].start(0);
                                }
                                if (_this.game.sound["unlockSource"].context.state === 'suspended') {
                                    _this.game.sound["unlockSource"].context.resume();
                                }
                            }
                            return true;
                        }, this);
                    }
                    this.ensureAudioContextUnlocked = function () {
                        return;
                    };
                };
                Application.prototype.trackEvent = function (eventModel) {
                    this.game.analytics.trackEvent(eventModel.action, eventModel.label, eventModel.value === null ? null : eventModel.value.toString());
                };
                Application.prototype.trackEventAndChangeCategory = function (newCategory, eventModel) {
                    this.game.analytics.setCategory(newCategory);
                    this.trackEvent(eventModel);
                };
                Application.prototype.windowHashChange = function () { };
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
                    if (Application.static_debugMode) {
                        utils_7.Log.init();
                    }
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
                Application.static_debugMode = false;
                return Application;
            }());
            exports_51("Application", Application);
        }
    }
});
System.register("dijon/application", ["dijon/application/Application"], function(exports_52, context_52) {
    "use strict";
    var __moduleName = context_52 && context_52.id;
    return {
        setters:[
            function (Application_1_1) {
                exports_52({
                    "Application": Application_1_1["Application"]
                });
            }],
        execute: function() {
        }
    }
});
System.register("lib", ["dijon/application", "dijon/core", "dijon/display", "dijon/mvc", "dijon/utils"], function(exports_53, context_53) {
    "use strict";
    var __moduleName = context_53 && context_53.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_53(exports);
    }
    return {
        setters:[
            function (application_22_1) {
                exportStar_1(application_22_1);
            },
            function (core_3_1) {
                exportStar_1(core_3_1);
            },
            function (display_7_1) {
                exportStar_1(display_7_1);
            },
            function (mvc_2_1) {
                exportStar_1(mvc_2_1);
            },
            function (utils_8_1) {
                exportStar_1(utils_8_1);
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpam9uL3V0aWxzL0RldmljZS50cyIsImRpam9uL3V0aWxzL0xvZ2dlci50cyIsImRpam9uL3V0aWxzL05vdGlmaWNhdGlvbnMudHMiLCJkaWpvbi91dGlscy9UZXh0dXJlcy50cyIsImRpam9uL2Rpc3BsYXkvQml0bWFwVGV4dC50cyIsImRpam9uL2Rpc3BsYXkvQ29tcG9uZW50LnRzIiwiZGlqb24vZGlzcGxheS9Hcm91cC50cyIsImRpam9uL2Rpc3BsYXkvU3ByaXRlLnRzIiwiZGlqb24vZGlzcGxheS9JbnZpc2libGVCdXR0b24udHMiLCJkaWpvbi9kaXNwbGF5L0xhYmVsbGVkQnV0dG9uLnRzIiwiZGlqb24vZGlzcGxheS9OaW5lU2xpY2VJbWFnZS50cyIsImRpam9uL2Rpc3BsYXkvU3BpbmUudHMiLCJkaWpvbi9kaXNwbGF5L1NwaW5lMi50cyIsImRpam9uL2Rpc3BsYXkvVGV4dC50cyIsImRpam9uL3V0aWxzL1BsYWNlaG9sZGVycy50cyIsImRpam9uL3V0aWxzL1RpbWUudHMiLCJkaWpvbi91dGlscy9VdGlsLnRzIiwiZGlqb24vdXRpbHMvTG9nLnRzIiwiZGlqb24vdXRpbHMvUHJlZmFiQnVpbGRlci50cyIsImRpam9uL2NvcmUvQW5hbHl0aWNzTWFuYWdlci50cyIsImRpam9uL2NvcmUvQXNzZXRNYW5hZ2VyLnRzIiwiZGlqb24vY29yZS9BdWRpb01hbmFnZXIudHMiLCJkaWpvbi9jb3JlL0dhbWUudHMiLCJkaWpvbi9jb3JlL0dhbWVPYmplY3RGYWN0b3J5LnRzIiwiZGlqb24vY29yZS9TZXF1ZW5jZU1hbmFnZXIudHMiLCJkaWpvbi9jb3JlL1N0YXRlLnRzIiwiZGlqb24vY29yZS9TdG9yYWdlTWFuYWdlci50cyIsImRpam9uL2NvcmUvVHJhbnNpdGlvbk1hbmFnZXIudHMiLCJkaWpvbi9tdmMvTW9kZWwudHMiLCJkaWpvbi9tdmMvQ29weU1vZGVsLnRzIiwiZGlqb24vbXZjL01lZGlhdG9yLnRzIiwiZGlqb24vbXZjL05vdGlmaWNhdGlv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QyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDOUYsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFRYSx1QkFBVyxHQUF6QjtvQkFDSSxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7d0JBQ3RCLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztvQkFFN0MsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7Z0JBQ2hDLENBQUM7Z0JBUWEsb0JBQVEsR0FBdEIsVUFBdUIsVUFBa0I7b0JBQ3JDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDdkMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUNoQyxDQUFDO29CQUNELE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQztnQkFDdEQsQ0FBQztnQkE1UWdCLG9CQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNoQix5QkFBYSxHQUFHLDRDQUE0QyxDQUFDO2dCQWFoRSw0QkFBZ0IsR0FBWSxLQUFLLENBQUM7Z0JBZ1FwRCxrQkFBQztZQUFELENBaFJBLEFBZ1JDLElBQUE7WUFoUkQsc0NBZ1JDLENBQUEiLCJmaWxlIjoiZGlqb24uanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lCcm93c2VyfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGNsYXNzIERldmljZSB7XG4gICAgcHVibGljIHN0YXRpYyBJT1M6IHN0cmluZyA9ICdpT1MnO1xuICAgIHB1YmxpYyBzdGF0aWMgQU5EUk9JRDogc3RyaW5nID0gJ2FuZHJvaWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgVU5LTk9XTjogc3RyaW5nID0gJ3Vua25vd24nO1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgbW9iaWxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gRGV2aWNlLm1vYmlsZU9TICE9PSBEZXZpY2UuVU5LTk9XTjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBjb2Nvb24oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIG5hdmlnYXRvclsnaXNDb2Nvb25KUyddICE9PSBcInVuZGVmaW5lZFwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBtb2JpbGVPUygpIHtcbiAgICAgICAgY29uc3QgdXNlckFnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgfHwgd2luZG93Lm5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93WydvcGVyYSddO1xuICAgICAgICBpZiAodXNlckFnZW50Lm1hdGNoKC9pUGFkL2kpIHx8IHVzZXJBZ2VudC5tYXRjaCgvaVBob25lL2kpIHx8IHVzZXJBZ2VudC5tYXRjaCgvaVBvZC9pKSkge1xuICAgICAgICAgICAgcmV0dXJuIERldmljZS5JT1M7XG4gICAgICAgIH0gZWxzZSBpZiAodXNlckFnZW50Lm1hdGNoKC9BbmRyb2lkL2kpKSB7XG4gICAgICAgICAgICByZXR1cm4gRGV2aWNlLkFORFJPSUQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gRGV2aWNlLlVOS05PV047XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBicm93c2VyKCk6IElCcm93c2VyIHtcbiAgICAgICAgY29uc3QgdWE6IHN0cmluZyA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpcmVmb3g6IHVhLmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xLFxuICAgICAgICAgICAgaWU6IHVhLmluZGV4T2YoJ2llJykgPiAtMSxcbiAgICAgICAgICAgIHNhZmFyaTogdWEuaW5kZXhPZignc2FmYXJpJykgPiAtMSxcbiAgICAgICAgICAgIGNocm9tZTogdWEuaW5kZXhPZignY2hyb21lJykgPiAtMSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHBpeGVsUmF0aW8oKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygd2luZG93LmRldmljZVBpeGVsUmF0aW8gIT09IHVuZGVmaW5lZCA/IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIDogMTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBjdXN0b21QaXhlbFJhdGlvKCkge1xuICAgICAgICByZXR1cm4gRGV2aWNlLnBpeGVsUmF0aW8gPj0gMS41ID8gMiA6IDE7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBMb2dnZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgZW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIHN0YXRpYyBsb2coaW5zdGFuY2UsIC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCFMb2dnZXIuZW5hYmxlZCkgeyBcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5zdGFuY2UgJiYgaW5zdGFuY2UuY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgIGFyZ3MudW5zaGlmdChpbnN0YW5jZS5jb25zdHJ1Y3Rvci50b1N0cmluZygpLm1hdGNoKC9cXHcrL2cpWzFdICsgJyA6OicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKTsgXG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25zIHtcbiAgICBwdWJsaWMgc3RhdGljIEFTU0VUX01BTkFHRVJfREFUQV9TRVQ6IHN0cmluZyA9ICdkaWpvbkFzc2V0TWFuYWdlckRhdGFTZXQnO1xuICAgIHB1YmxpYyBzdGF0aWMgQVNTRVRfTUFOQUdFUl9BU1NFVFNfQ0xFQVJFRDogc3RyaW5nID0gJ2Rpam9uQXNzZXRNYW5hZ2VyQXNzZXRzQ2xlYXJlZCc7XG5cbiAgICBwdWJsaWMgc3RhdGljIE1PVVNFX0xFQVZFX0dMT0JBTDogc3RyaW5nID0gJ21vdXNlT3V0R2xvYmFsJztcbiAgICBwdWJsaWMgc3RhdGljIE1PVVNFX0VOVEVSX0dMT0JBTDogc3RyaW5nID0gJ21vdXNlRW50ZXJHbG9iYWwnO1xufSIsImltcG9ydCB7QXBwbGljYXRpb259IGZyb20gJy4uL2FwcGxpY2F0aW9uJztcblxuZXhwb3J0IGNsYXNzIFRleHR1cmVzIHtcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgZ2FtZSgpOiBQaGFzZXIuR2FtZSB7XG4gICAgICAgIHJldHVybiBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWU7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlY3Qod2lkdGg6IG51bWJlciA9IDEwMCwgaGVpZ2h0OiBudW1iZXIgPSAxMDAsIGNvbG9yOiBudW1iZXIgPSAweGZmZmZmZiwgYWxwaGE6IG51bWJlciA9IDEsIGZpbGw6IGJvb2xlYW4gPSB0cnVlLCBsaW5lQ29sb3I6IG51bWJlciA9IDB4ZmZmZmZmLCBsaW5lVGhpY2tuZXNzOiBudW1iZXIgPSAxLCBsaW5lQWxwaGE6IG51bWJlciA9IDEsIG91dGxpbmU6IGJvb2xlYW4gPSBmYWxzZSk6IFBJWEkuVGV4dHVyZSB7XG4gICAgICAgIGNvbnN0IGdmeCA9IFRleHR1cmVzLmdhbWUuYWRkLmdyYXBoaWNzKDAsIDApO1xuICAgICAgICBpZiAoZmlsbCkge1xuICAgICAgICAgICAgZ2Z4LmJlZ2luRmlsbChjb2xvciwgYWxwaGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvdXRsaW5lKSB7XG4gICAgICAgICAgICBnZngubGluZVdpZHRoID0gbGluZVRoaWNrbmVzcztcbiAgICAgICAgICAgIGdmeC5saW5lU3R5bGUobGluZVRoaWNrbmVzcywgbGluZUNvbG9yLCBsaW5lQWxwaGEpO1xuICAgICAgICB9XG4gICAgICAgIGdmeC5kcmF3UmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICBjb25zdCB0ZXh0dXJlID0gZ2Z4LmdlbmVyYXRlVGV4dHVyZSgpO1xuICAgICAgICBUZXh0dXJlcy5nYW1lLndvcmxkLnJlbW92ZShnZngpO1xuXG4gICAgICAgIHJldHVybiB0ZXh0dXJlO1xuICAgIH1cblxuICAgIHN0YXRpYyByb3VuZGVkUmVjdCh3aWR0aDogbnVtYmVyID0gMTAwLCBoZWlnaHQ6IG51bWJlciA9IDEwMCwgcmFkaXVzOiBudW1iZXIgPSAxMCwgY29sb3I6IG51bWJlciA9IDB4ZmZmZmZmLCBhbHBoYTogbnVtYmVyID0gMSwgZmlsbDogYm9vbGVhbiA9IHRydWUsIGxpbmVDb2xvcjogbnVtYmVyID0gMHhmZmZmZmYsIGxpbmVUaGlja25lc3M6IG51bWJlciA9IDEsIGxpbmVBbHBoYTogbnVtYmVyID0gMSwgb3V0bGluZTogYm9vbGVhbiA9IGZhbHNlKTogUElYSS5UZXh0dXJlIHtcbiAgICAgICAgY29uc3QgZ2Z4ID0gVGV4dHVyZXMuZ2FtZS5hZGQuZ3JhcGhpY3MoMCwgMCk7XG4gICAgICAgIGlmIChmaWxsKSB7XG4gICAgICAgICAgICBnZnguYmVnaW5GaWxsKGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG91dGxpbmUpIHtcbiAgICAgICAgICAgIGdmeC5saW5lV2lkdGggPSBsaW5lVGhpY2tuZXNzO1xuICAgICAgICAgICAgZ2Z4LmxpbmVTdHlsZShsaW5lVGhpY2tuZXNzLCBsaW5lQ29sb3IsIGxpbmVBbHBoYSk7XG4gICAgICAgIH1cbiAgICAgICAgZ2Z4LmRyYXdSb3VuZGVkUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpO1xuXG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBnZnguZ2VuZXJhdGVUZXh0dXJlKCk7XG4gICAgICAgIFRleHR1cmVzLmdhbWUud29ybGQucmVtb3ZlKGdmeCk7XG5cbiAgICAgICAgcmV0dXJuIHRleHR1cmU7XG4gICAgfVxuXG4gICAgc3RhdGljIHNxdWFyZShzaXplOiBudW1iZXIgPSAxMDAsIGNvbG9yOiBudW1iZXIgPSAweGZmZmZmZiwgYWxwaGE6IG51bWJlciA9IDEsIGZpbGw6IGJvb2xlYW4gPSB0cnVlLCBsaW5lQ29sb3I6IG51bWJlciA9IDB4ZmZmZmZmLCBsaW5lVGhpY2tuZXNzOiBudW1iZXIgPSAxLCBsaW5lQWxwaGE6IG51bWJlciA9IDEsIG91dGxpbmU6IGJvb2xlYW4gPSBmYWxzZSk6IFBJWEkuVGV4dHVyZSB7XG4gICAgICAgIHJldHVybiBUZXh0dXJlcy5yZWN0KHNpemUsIHNpemUsIGNvbG9yLCBhbHBoYSwgZmlsbCwgbGluZUNvbG9yLCBsaW5lVGhpY2tuZXNzLCBsaW5lQWxwaGEsIG91dGxpbmUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjaXJjbGUoZGlhbWV0ZXI6IG51bWJlciA9IDEwMCwgY29sb3I6IG51bWJlciA9IDB4ZmZmZmZmLCBhbHBoYTogbnVtYmVyID0gMSwgZmlsbDogYm9vbGVhbiA9IHRydWUsIGxpbmVDb2xvcjogbnVtYmVyID0gMHhmZmZmZmYsIGxpbmVUaGlja25lc3M6IG51bWJlciA9IDEsIGxpbmVBbHBoYTogbnVtYmVyID0gMSwgb3V0bGluZTogYm9vbGVhbiA9IGZhbHNlKTogUElYSS5UZXh0dXJlIHtcbiAgICAgICAgY29uc3QgZ2Z4ID0gVGV4dHVyZXMuZ2FtZS5hZGQuZ3JhcGhpY3MoMCwgMCk7XG4gICAgICAgIGlmIChmaWxsKSB7XG4gICAgICAgICAgICBnZnguYmVnaW5GaWxsKGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG91dGxpbmUpIHtcbiAgICAgICAgICAgIGdmeC5saW5lV2lkdGggPSBsaW5lVGhpY2tuZXNzO1xuICAgICAgICAgICAgZ2Z4LmxpbmVTdHlsZShsaW5lVGhpY2tuZXNzLCBsaW5lQ29sb3IsIGxpbmVBbHBoYSk7XG4gICAgICAgIH1cbiAgICAgICAgZ2Z4LmRyYXdDaXJjbGUoMCwgMCwgZGlhbWV0ZXIpO1xuXG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBnZnguZ2VuZXJhdGVUZXh0dXJlKCk7XG4gICAgICAgIFRleHR1cmVzLmdhbWUud29ybGQucmVtb3ZlKGdmeCk7XG5cbiAgICAgICAgcmV0dXJuIHRleHR1cmU7XG4gICAgfVxuXG4gICAgc3RhdGljIGVsbGlwc2Uod2lkdGg6IG51bWJlciA9IDUwLCBoZWlnaHQ6IG51bWJlciA9IDEwMCwgY29sb3I6IG51bWJlciA9IDB4ZmZmZmZmLCBhbHBoYTogbnVtYmVyID0gMSwgZmlsbDogYm9vbGVhbiA9IHRydWUsIGxpbmVDb2xvcjogbnVtYmVyID0gMHhmZmZmZmYsIGxpbmVUaGlja25lc3M6IG51bWJlciA9IDEsIGxpbmVBbHBoYTogbnVtYmVyID0gMSwgb3V0bGluZTogYm9vbGVhbiA9IGZhbHNlKTogUElYSS5UZXh0dXJlIHtcbiAgICAgICAgY29uc3QgZ2Z4ID0gVGV4dHVyZXMuZ2FtZS5hZGQuZ3JhcGhpY3MoMCwgMCk7XG4gICAgICAgIGlmIChmaWxsKSB7XG4gICAgICAgICAgICBnZnguYmVnaW5GaWxsKGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG91dGxpbmUpIHtcbiAgICAgICAgICAgIGdmeC5saW5lV2lkdGggPSBsaW5lVGhpY2tuZXNzO1xuICAgICAgICAgICAgZ2Z4LmxpbmVTdHlsZShsaW5lVGhpY2tuZXNzLCBsaW5lQ29sb3IsIGxpbmVBbHBoYSk7XG4gICAgICAgIH1cbiAgICAgICAgZ2Z4LmRyYXdFbGxpcHNlKDAsIDAsIHdpZHRoICogMC41LCBoZWlnaHQgKiAwLjUpO1xuXG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBnZnguZ2VuZXJhdGVUZXh0dXJlKCk7XG4gICAgICAgIFRleHR1cmVzLmdhbWUud29ybGQucmVtb3ZlKGdmeCk7XG5cbiAgICAgICAgcmV0dXJuIHRleHR1cmU7XG4gICAgfVxufSIsImltcG9ydCB7QXBwbGljYXRpb259IGZyb20gJy4uL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7R2FtZX0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQge0RldmljZX0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqIFRleHRcbiAqL1xuZXhwb3J0IGNsYXNzIEJpdG1hcFRleHQgZXh0ZW5kcyBQaGFzZXIuQml0bWFwVGV4dCB7XG4gICAgLy8gZnJvbSBQaGFzZXIuQml0bWFwVGV4dFxuICAgIHByaXZhdGUgX3RleHQ6IHN0cmluZztcbiAgICBwcml2YXRlIF9nbHlwaHM6IGFueVtdO1xuXG4gICAgcHJvdGVjdGVkIF9hdXRvRmxhdHRlbjogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJvdGVjdGVkIF9jb2xvcjogbnVtYmVyID0gMHhmZmZmZmY7XG4gICAgcHJvdGVjdGVkIF9pc0ltYWdlOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIF9pbnRlcm5hbEltYWdlOiBQaGFzZXIuSW1hZ2UgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgZm9udDogc3RyaW5nID0gbnVsbCwgdGV4dDogc3RyaW5nID0gXCJcIiwgc2l6ZTogbnVtYmVyID0gMTIsIGFsaWduOiBzdHJpbmcgPSAnbGVmdCcsIGNvbG9yOiBudW1iZXIgPSAweGZmZmZmZiwgc21vb3RoaW5nOiBib29sZWFuID0gdHJ1ZSwgYXV0b0ZsYXR0ZW46IGJvb2xlYW4gPSB0cnVlLCBtYWtlSW1hZ2U6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBzdXBlcihBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUsIHgsIHksIGZvbnQsIHRleHQsIHNpemUsIGFsaWduKTtcblxuICAgICAgICBpZiAoc21vb3RoaW5nICE9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnNtb290aGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ha2VJbWFnZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKGNvbG9yICE9PSAweGZmZmZmZikge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYXV0b0ZsYXR0ZW4gPSBhdXRvRmxhdHRlbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWFrZUltYWdlKCk7XG4gICAgICAgICAgICBpZiAoY29sb3IgIT09IDB4ZmZmZmZmKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG1ha2VJbWFnZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faXNJbWFnZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX2FsaWduVG9OZWFyZXN0UGl4ZWwoKTtcbiAgICAgICAgdGhpcy5faW50ZXJuYWxJbWFnZSA9IDxQaGFzZXIuSW1hZ2U+dGhpcy5hZGRDaGlsZEF0KHRoaXMuZ2FtZS5hZGQuaW1hZ2UoMCwgMCwgdGhpcy5nZW5lcmF0ZVRleHR1cmUodGhpcy5nYW1lLnJlc29sdXRpb24sIFBJWEkuc2NhbGVNb2Rlcy5ERUZBVUxUKSksIDApO1xuXG4gICAgICAgIHRoaXMuZGVzdHJveUdseXBocygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95R2x5cGhzKCkge1xuICAgICAgICBsZXQgbiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTtcbiAgICAgICAgd2hpbGUgKG4gPiAodGhpcy5faXNJbWFnZSA/IDAgOiAtMSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGRBdChuKTtcbiAgICAgICAgICAgIG4tLTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdseXBocyA9IHRoaXMuX2dseXBocztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBnbHlwaHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGdseXBoc1tpXS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZ2x5cGhzID0gW107XG4gICAgfVxuXG4gICAgcHVibGljIGZsYXR0ZW4oZGVsYXk6IG51bWJlciA9IG51bGwpOiB2b2lkIHtcbiAgICAgICAgaWYgKGRlbGF5KSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKGRlbGF5LCAoKSA9PiB7IHRoaXMuY2FjaGVBc0JpdG1hcCA9IHRydWUgfSwgdGhpcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYWxpZ25Ub05lYXJlc3RQaXhlbCgpO1xuICAgICAgICB0aGlzLmNhY2hlQXNCaXRtYXAgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyB1bkZsYXR0ZW4oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2FjaGVBc0JpdG1hcCA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBhdXRvRmxhdHRlbih2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9hdXRvRmxhdHRlbiA9IHZhbHVlO1xuICAgICAgICBpZiAodGhpcy5fYXV0b0ZsYXR0ZW4pIHtcbiAgICAgICAgICAgIHRoaXMuZmxhdHRlbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51bkZsYXR0ZW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYXV0b0ZsYXR0ZW4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRvRmxhdHRlbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGNvbG9yKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX2F1dG9GbGF0dGVuKSB7XG4gICAgICAgICAgICB0aGlzLnVuRmxhdHRlbigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKHRoaXMuX2lzSW1hZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2ludGVybmFsSW1hZ2UudGludCA9IHRoaXMuX2NvbG9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aW50ID0gdGhpcy5fY29sb3I7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fYXV0b0ZsYXR0ZW4pIHtcbiAgICAgICAgICAgIHRoaXMuZmxhdHRlbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBjb2xvcigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCB0ZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuX2F1dG9GbGF0dGVuKSB7XG4gICAgICAgICAgICB0aGlzLnVuRmxhdHRlbigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl90ZXh0ICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IHRoaXMuX3RleHQpIHtcbiAgICAgICAgICAgIHRoaXMuX3RleHQgPSB2YWx1ZS50b1N0cmluZygpIHx8ICcnO1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95R2x5cGhzKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRleHQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fYXV0b0ZsYXR0ZW4pIHtcbiAgICAgICAgICAgIHRoaXMuZmxhdHRlbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fYWxpZ25Ub05lYXJlc3RQaXhlbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB0ZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZXh0O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcmVhbFdpZHRoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJvdW5kcygpLndpZHRoO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcmVhbEhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCb3VuZHMoKS5oZWlnaHQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZW5lcmF0ZUNhY2hlZFNwcml0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fY2FjaGVBc0JpdG1hcCA9IGZhbHNlO1xuXG4gICAgICAgIHZhciBib3VuZHMgPSB0aGlzLmdldExvY2FsQm91bmRzKCk7XG4gICAgICAgIHZhciByZXMgPSB0aGlzLmdhbWUucmVzb2x1dGlvbjtcblxuICAgICAgICBpZiAoIXRoaXMuX2NhY2hlZFNwcml0ZSkge1xuICAgICAgICAgICAgdmFyIHJlbmRlclRleHR1cmUgPSBuZXcgUElYSS5SZW5kZXJUZXh0dXJlKGJvdW5kcy53aWR0aCAqIHJlcyB8IDAsIGJvdW5kcy5oZWlnaHQgKiByZXMgfCAwKTsvLywgcmVuZGVyU2Vzc2lvbi5yZW5kZXJlcik7XG4gICAgICAgICAgICByZW5kZXJUZXh0dXJlLmJhc2VUZXh0dXJlLnJlc29sdXRpb24gPSByZXM7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZWRTcHJpdGUgPSBuZXcgUElYSS5TcHJpdGUocmVuZGVyVGV4dHVyZSk7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZWRTcHJpdGUudGV4dHVyZS5yZXNvbHV0aW9uID0gcmVzO1xuICAgICAgICAgICAgdGhpcy5fY2FjaGVkU3ByaXRlLndvcmxkVHJhbnNmb3JtID0gdGhpcy53b3JsZFRyYW5zZm9ybTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlZFNwcml0ZS50ZXh0dXJlLnJlc2l6ZShib3VuZHMud2lkdGggKiByZXMgfCAwLCBib3VuZHMuaGVpZ2h0ICogcmVzIHwgMCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL1JFTU9WRSBmaWx0ZXIhXG4gICAgICAgIHZhciB0ZW1wRmlsdGVycyA9IHRoaXMuX2ZpbHRlcnM7XG4gICAgICAgIHRoaXMuX2ZpbHRlcnMgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuX2NhY2hlZFNwcml0ZS5maWx0ZXJzID0gdGVtcEZpbHRlcnM7XG5cbiAgICAgICAgUElYSS5EaXNwbGF5T2JqZWN0WydfdGVtcE1hdHJpeCddLnR4ID0gLWJvdW5kcy54O1xuICAgICAgICBQSVhJLkRpc3BsYXlPYmplY3RbJ190ZW1wTWF0cml4J10udHkgPSAtYm91bmRzLnk7XG5cbiAgICAgICAgdGhpcy5fY2FjaGVkU3ByaXRlLnRleHR1cmUucmVuZGVyKHRoaXMsIFBJWEkuRGlzcGxheU9iamVjdFsnX3RlbXBNYXRyaXgnXSwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5fY2FjaGVkU3ByaXRlLmFuY2hvci54ID0gLShib3VuZHMueCAvIGJvdW5kcy53aWR0aCk7XG4gICAgICAgIHRoaXMuX2NhY2hlZFNwcml0ZS5hbmNob3IueSA9IC0oYm91bmRzLnkgLyBib3VuZHMuaGVpZ2h0KTtcblxuICAgICAgICB0aGlzLl9maWx0ZXJzID0gdGVtcEZpbHRlcnM7XG5cbiAgICAgICAgdGhpcy5fY2FjaGVBc0JpdG1hcCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0SGl0QXJlYVRvQm91bmRzKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9hbGlnblRvTmVhcmVzdFBpeGVsKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnggPSBNYXRoLnJvdW5kKHRoaXMueCk7XG4gICAgICAgIHRoaXMueSA9IE1hdGgucm91bmQodGhpcy55KTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIGNoaWxkLnggPSBNYXRoLnJvdW5kKGNoaWxkLngpO1xuICAgICAgICAgICAgY2hpbGQueSA9IE1hdGgucm91bmQoY2hpbGQueSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBoaWdobGlnaHQoaGlnaGxpZ2h0U3RyOiBzdHJpbmcsIGhpZ2hsaWdodENvbG9yOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzSW1hZ2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdCaXRtYXBUZXh0OjogY2Fubm90IGhpZ2hsaWdodCBhIHN1YnN0cmluZyBvZiBhIEJpdG1hcFRleHQgaW5zdGFuY2Ugd2hlbiBtYWtlSW1hZ2UgaXMgc2V0IHRvIHRydWUnLCB0aGlzLnRleHQpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRleHQuaW5kZXhPZihoaWdobGlnaHRTdHIpIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3RhcnRJbmRleDogbnVtYmVyID0gdGhpcy50ZXh0LmluZGV4T2YoaGlnaGxpZ2h0U3RyKS0xO1xuICAgICAgICBjb25zdCBlbmRJbmRleDogbnVtYmVyID0gc3RhcnRJbmRleCArIGhpZ2hsaWdodFN0ci5sZW5ndGg7XG4gICAgICAgIGxldCBjaGlsZDogUElYSS5TcHJpdGU7XG5cbiAgICAgICAgaWYgKHRoaXMuX2F1dG9GbGF0dGVuKSB7XG4gICAgICAgICAgICB0aGlzLnVuRmxhdHRlbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPCBlbmRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgICBjaGlsZCA9IDxQSVhJLlNwcml0ZT50aGlzLmdldENoaWxkQXQoaSk7XG4gICAgICAgICAgICBjaGlsZC50aW50ID0gaGlnaGxpZ2h0Q29sb3I7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fYXV0b0ZsYXR0ZW4pIHtcbiAgICAgICAgICAgIHRoaXMuZmxhdHRlbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fYWxpZ25Ub05lYXJlc3RQaXhlbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIGFuY2hvckFzSW1hZ2UoeDogbnVtYmVyLCB5OiBudW1iZXIgPSB4KSB7XG4gICAgICAgIC8vIElmIHRoZSBpbWFnZSBpcyBjYWNoZWQsIG5vIGNoYW5nZXMgd2lsbCBiZSBhcHBsaWVkLCBzbyB3ZSB0ZW1wb3JhcmlseSB1bmNhY2hlXG4gICAgICAgIGNvbnN0IHdhc0NhY2hlZDogYm9vbGVhbiA9IHRoaXMuY2FjaGVBc0JpdG1hcDtcbiAgICAgICAgdGhpcy5jYWNoZUFzQml0bWFwID0gbnVsbDtcbiAgICAgICAgdGhpcy5faW50ZXJuYWxJbWFnZS5hbmNob3Iuc2V0KHgsIHkpO1xuICAgICAgICB0aGlzLmNhY2hlQXNCaXRtYXAgPSB3YXNDYWNoZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEhpdEFyZWFUb0JvdW5kcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5oaXRBcmVhID0gdGhpcy5nZXRCb3VuZHMoKTtcbiAgICB9XG59XG5cbiIsImltcG9ydCB7QXBwbGljYXRpb259IGZyb20gJy4uL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7R2FtZX0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQge1Nwcml0ZSwgR3JvdXB9IGZyb20gJy4uL2Rpc3BsYXknO1xuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgZ2FtZTogR2FtZTtcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyBvd25lcjogYW55O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ0NvbXBvbmVudCc7XG4gICAgfVxuXG4gICAgcHVibGljIHNldE93bmVyKG93bmVyOiBTcHJpdGUgfCBHcm91cCk6IHZvaWQge1xuICAgICAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBpbml0aWFsaXplIHRoZSBjb21wb25lbnQsIHNldCB1cCB2YXJpYWJsZXNcbiAgICAqIGNhbGxlZCBieSB0aGUgb3duZXIgZmlyc3QgYWZ0ZXIgdGhlIGNvbXBvbmVudCBpcyBhdHRhY2hlZFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyBpbml0KCkgeyB9XG5cbiAgICAvKipcbiAgICAqIGFkZCB2aXN1YWwgZWxlbWVudHNcbiAgICAqIGNhbGxlZCBieSB0aGUgb3duZXIgYWZ0ZXIgaXQgY2FsbHMgdGhpcyBpbml0IG1ldGhvZFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyBidWlsZEludGVyZmFjZSgpIHsgfVxuXG4gICAgLyoqXG4gICAgKiBjYWxsZWQgYnkgdGhlIG93bmVyIGluIGl0cyB1cGRhdGUgY3ljbGUsIGV2ZXJ5IGZyYW1lXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIHVwZGF0ZSgpIHsgfVxuXG4gICAgLyoqXG4gICAgKiByZW1vdmUgYW55IHZpc3VhbCBlbGVtZW50cyAvIHNpZ25hbHMgYWRkZWRcbiAgICAqIG93bmVyIGNhbGxzIHRoaXMgbWV0aG9kIGluIGl0cyBvd24gZGVzdHJveSBtZXRob2RcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgZGVzdHJveSgpIHsgfVxufSIsImltcG9ydCB7QXBwbGljYXRpb259IGZyb20gJy4uL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7R2FtZSwgR2FtZU9iamVjdEZhY3Rvcnl9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHtNZWRpYXRvcn0gZnJvbSAnLi4vbXZjJztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICcuL0NvbXBvbmVudCc7XG5cbmV4cG9ydCBjbGFzcyBHcm91cCBleHRlbmRzIFBoYXNlci5Hcm91cCB7XG4gICAgcHVibGljIGdhbWU6IEdhbWU7XG5cbiAgICBwcm90ZWN0ZWQgX2hhc0NvbXBvbmVudHM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcm90ZWN0ZWQgX2NvbXBvbmVudEtleXM6IHN0cmluZ1tdID0gW107XG4gICAgcHJvdGVjdGVkIF9jb21wb25lbnRzOiB7IFtjb21wb25lbnROYW1lOiBzdHJpbmddOiBDb21wb25lbnQgfSA9IHt9O1xuXG4gICAgcHJvdGVjdGVkIF9tZWRpYXRvcjogTWVkaWF0b3IgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgcHVibGljIG5hbWU6IHN0cmluZyA9IFwiZEdyb3VwXCIsIGFkZFRvU3RhZ2U6IGJvb2xlYW4gPSBmYWxzZSwgY29tcG9uZW50czogQ29tcG9uZW50W10gPSBudWxsLCBlbmFibGVCb2R5PzogYm9vbGVhbiwgcGh5c2ljc0JvZHlUeXBlPzogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZSwgbnVsbCwgbmFtZSwgYWRkVG9TdGFnZSwgZW5hYmxlQm9keSwgcGh5c2ljc0JvZHlUeXBlKTtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uLnNldCh4LCB5KTtcblxuICAgICAgICBpZiAoIWFkZFRvU3RhZ2UpXG4gICAgICAgICAgICB0aGlzLmdhbWUuYWRkLmV4aXN0aW5nKHRoaXMpO1xuXG5cbiAgICAgICAgaWYgKGNvbXBvbmVudHMpXG4gICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudHMoY29tcG9uZW50cyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBDcmVhdGVGcm9tRGF0YShkYXRhOiBhbnkpOiBHcm91cCB7XG4gICAgICAgIGxldCBzZWxmID0gbmV3IEdyb3VwKGRhdGEucG9zaXRpb24ueCwgZGF0YS5wb3NpdGlvbi55LCBkYXRhLm5hbWUpO1xuICAgICAgICBpZiAoZGF0YS5hbHBoYSkge1xuICAgICAgICAgICAgc2VsZi5hbHBoYSA9IGRhdGEuYWxwaGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuXG4gICAgcHVibGljIGFzc2lnblByZWZhYihvYmplY3Q6IGFueSkge1xuICAgICAgICAvLyBPdmVycmlkZSB0aGlzIHRvIGhhbmRsZSBhc3NpZ25tZW50IG9mIGNoaWxkIHByZWZhYnMuXG4gICAgfVxuICAgIFxuICAgIC8vIFBoYXNlci5Hcm91cCBvdmVycmlkZXNcbiAgICAvKipcbiAgICAqIGNhbGxlZCBldmVyeSBmcmFtZVxuICAgICogaXRlcmF0ZXMgdGhlIGNvbXBvbmVudHMgbGlzdCBhbmQgY2FsbHMgY29tcG9uZW50LnVwZGF0ZSgpIG9uIGVhY2ggY29tcG9uZW50XG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICogQG92ZXJyaWRlXG4gICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBzdXBlci51cGRhdGUoKTtcbiAgICAgICAgaWYgKHRoaXMuX2hhc0NvbXBvbmVudHMpXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudHMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHJlbW92ZXMgYWxsIGNvbXBvbmVudHNcbiAgICAqIEByZXR1cm4ge1BoYXNlci5Hcm91cC5kZXN0cm95fVxuICAgICogQG92ZXJyaWRlXG4gICAgKi9cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMucmVtb3ZlTWVkaWF0b3IoKTtcbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuICAgIC8qKlxuICAgICogaW5pdGlhbGl6ZSB2YXJpYWJsZXNcbiAgICAqIGFkZCBtZWRpYXRvciwgaWYgbmVlZGVkXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7IH1cblxuICAgIC8qKlxuICAgICogYWRkIHZpc3VhbCBlbGVtZW50c1xuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHByb3RlY3RlZCBidWlsZEludGVyZmFjZSgpOiB2b2lkIHsgfVxuXG4gICAgLyoqXG4gICAgKiB1cGRhdGVzIHRoZSBpbnRlcm5hbCBsaXN0IG9mIGNvbXBvbmVudCBrZXlzIChzbyB3ZSBkb24ndCBoYXZlIHRvIGNhbGwgT2JqZWN0LmtleXMoKSBhbGwgdGhlIHRpbWUpXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHJpdmF0ZSBfdXBkYXRlQ29tcG9uZW50S2V5cygpIHtcbiAgICAgICAgdGhpcy5fY29tcG9uZW50S2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuX2NvbXBvbmVudHMpO1xuICAgICAgICB0aGlzLl9oYXNDb21wb25lbnRzID0gdGhpcy5fY29tcG9uZW50S2V5cy5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgLyoqXG4gICAgKiBhdHRhY2hlcyBhIGxpc3Qgb2YgY29tcG9uZW50cyB0byB0aGUgRGlqb24uVUlHcm91cFxuICAgICogQHBhcmFtIHtBcnJheX0gY29tcG9uZW50cyB0aGUgbGlzdCBvZiBjb21wb25lbnRzIHRvIGFkZFxuICAgICovXG4gICAgcHVibGljIGFkZENvbXBvbmVudHMgPSBmdW5jdGlvbiAoY29tcG9uZW50czogQ29tcG9uZW50W10pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzLmxlbmd0aCA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Rpam9uLlVJR3JvdXAgY29tcG9uZW50cyBtdXN0IGJlIGFuIGFycmF5Jyk7XG5cbiAgICAgICAgd2hpbGUgKGNvbXBvbmVudHMubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KGNvbXBvbmVudHMuc2hpZnQoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBhdHRhY2hlcyBhIGNvbXBvbmVudCB0byB0aGUgRGlqb24uVUlHcm91cFxuICAgICogQHBhcmFtIHtkaWpvbi5Db21wb25lbnR9IGNvbXBvbmVudCB0byBiZSBhdHRhY2hlZFxuICAgICovXG4gICAgcHVibGljIGFkZENvbXBvbmVudChjb21wb25lbnQ6IENvbXBvbmVudCk6IENvbXBvbmVudCB7XG4gICAgICAgIGNvbXBvbmVudC5zZXRPd25lcih0aGlzKTtcbiAgICAgICAgY29tcG9uZW50LmluaXQoKTtcbiAgICAgICAgY29tcG9uZW50LmJ1aWxkSW50ZXJmYWNlKCk7XG5cbiAgICAgICAgdGhpcy5fY29tcG9uZW50c1tjb21wb25lbnQubmFtZV0gPSBjb21wb25lbnQ7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvbXBvbmVudEtleXMoKTtcblxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICogaXRlcmF0ZXMgdGhyb3VnaCB0aGUgbGlzdCBvZiBjb21wb25lbnRzIGFuZCB1cGRhdGVzIGVhY2ggb25lXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIHVwZGF0ZUNvbXBvbmVudHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudEtleXMuZm9yRWFjaChcbiAgICAgICAgICAgIGNvbXBvbmVudE5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogdXBkYXRlcyBhbiBhdHRhY2hlZCBjb21wb25lbnQgKGNhbGxzIGNvbXBvbmVudC51cGRhdGUoKSlcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gY29tcG9uZW50TmFtZSB0aGUgbmFtZSBvZiB0aGUgY29tcG9uZW50IHRvIHVwZGF0ZVxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyB1cGRhdGVDb21wb25lbnQoY29tcG9uZW50TmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHNbY29tcG9uZW50TmFtZV0udXBkYXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiByZW1vdmVzIGFsbCB0aGUgY29tcG9uZW50cyBjdXJyZW50bHkgYXR0YWNoZWRcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgcmVtb3ZlQWxsQ29tcG9uZW50cygpIHtcbiAgICAgICAgd2hpbGUgKHRoaXMuX2NvbXBvbmVudEtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDb21wb25lbnQodGhpcy5fY29tcG9uZW50S2V5cy5wb3AoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHJlbW92ZXMgYSBzcGVjaWZpYyBjb21wb25lbnRcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gY29tcG9uZW50TmFtZSB0aGUgbmFtZSBvZiB0aGUgY29tcG9uZW50IHRvIHJlbW92ZVxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyByZW1vdmVDb21wb25lbnQoY29tcG9uZW50TmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29tcG9uZW50c1tjb21wb25lbnROYW1lXSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgdGhpcy5fY29tcG9uZW50c1tjb21wb25lbnROYW1lXS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHNbY29tcG9uZW50TmFtZV0gPSBudWxsO1xuICAgICAgICBkZWxldGUgdGhpcy5fY29tcG9uZW50c1tjb21wb25lbnROYW1lXTtcblxuICAgICAgICB0aGlzLl91cGRhdGVDb21wb25lbnRLZXlzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGZsYXR0ZW4oZGVsYXk6IG51bWJlciA9IDApOiB2b2lkIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlQXNCaXRtYXAgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmFkZChkZWxheSwgKCkgPT4geyB0aGlzLmNhY2hlQXNCaXRtYXAgPSB0cnVlIH0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHVuRmxhdHRlbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYWNoZUFzQml0bWFwID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHJlbW92ZXMgdGhlIG1lZGlhdG9yLCBpZiBpdCBleGlzdHNcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgcmVtb3ZlTWVkaWF0b3IoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fbWVkaWF0b3IpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tZWRpYXRvci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuX21lZGlhdG9yID0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGFkZEludGVybmFsKCk6IEdhbWVPYmplY3RGYWN0b3J5IHtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC50YXJnZXRHcm91cCA9IHRoaXM7XG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUuYWRkO1xuICAgIH1cbn0iLCJpbXBvcnQge0FwcGxpY2F0aW9ufSBmcm9tICcuLi9hcHBsaWNhdGlvbic7XG5pbXBvcnQge0dhbWV9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJy4vQ29tcG9uZW50JztcblxuZXhwb3J0IGNsYXNzIFNwcml0ZSBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuICAgIHB1YmxpYyBnYW1lOiBHYW1lO1xuXG4gICAgcHJvdGVjdGVkIF9oYXNDb21wb25lbnRzOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIF9jb21wb25lbnRLZXlzOiBzdHJpbmdbXSA9IFtdO1xuICAgIHByb3RlY3RlZCBfY29tcG9uZW50czogeyBbY29tcG9uZW50TmFtZTogc3RyaW5nXTogQ29tcG9uZW50IH0gPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKHg/OiBudW1iZXIsIHk/OiBudW1iZXIsIGtleT86IHN0cmluZyB8IFBoYXNlci5SZW5kZXJUZXh0dXJlIHwgUGhhc2VyLkJpdG1hcERhdGEgfCBQSVhJLlRleHR1cmUsIGZyYW1lPzogc3RyaW5nIHwgbnVtYmVyLCBwdWJsaWMgbmFtZTogc3RyaW5nID0gXCJkU3ByaXRlXCIsIGNvbXBvbmVudHM6IENvbXBvbmVudFtdID0gbnVsbCkge1xuICAgICAgICBzdXBlcihBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUsIHgsIHksIGtleSwgZnJhbWUpO1xuXG4gICAgICAgIGlmIChjb21wb25lbnRzKVxuICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnRzKGNvbXBvbmVudHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgQ3JlYXRlRnJvbURhdGEoZGF0YTogYW55KTogU3ByaXRlIHtcbiAgICAgICAgbGV0IHNlbGYgPSBuZXcgU3ByaXRlKGRhdGEucG9zaXRpb24ueCwgZGF0YS5wb3NpdGlvbi55LCBkYXRhLmtleSwgZGF0YS5mcmFtZSwgZGF0YS5uYW1lKTtcbiAgICAgICAgaWYgKGRhdGEuYW5jaG9yKSB7XG4gICAgICAgICAgICBzZWxmLmFuY2hvci5zZXRUbyhkYXRhLmFuY2hvci54LCBkYXRhLmFuY2hvci55KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5zY2FsZSkge1xuICAgICAgICAgICAgc2VsZi5zY2FsZS5zZXRUbyhkYXRhLnNjYWxlLngsIGRhdGEuc2NhbGUueSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEuYW5nbGUpIHtcbiAgICAgICAgICAgIHNlbGYuYW5nbGUgPSBkYXRhLmFuZ2xlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLnRpbnQpIHtcbiAgICAgICAgICAgIHNlbGYudGludCA9IGRhdGEudGludDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5hbHBoYSkge1xuICAgICAgICAgICAgc2VsZi5hbHBoYSA9IGRhdGEuYWxwaGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuXG4gICAgcHVibGljIGFzc2lnblByZWZhYihvYmplY3Q6IGFueSkge1xuICAgICAgICAvLyBPdmVycmlkZSB0aGlzIHRvIGhhbmRsZSBhc3NpZ25tZW50IG9mIGNoaWxkIHByZWZhYnMuXG4gICAgfVxuICAgIFxuICAgIC8vIFBoYXNlci5TcHJpdGUgb3ZlcnJpZGVzXG4gICAgLyoqXG4gICAgKiBjYWxsZWQgZXZlcnkgZnJhbWVcbiAgICAqIGl0ZXJhdGVzIHRoZSBjb21wb25lbnRzIGxpc3QgYW5kIGNhbGxzIGNvbXBvbmVudC51cGRhdGUoKSBvbiBlYWNoIGNvbXBvbmVudFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqIEBvdmVycmlkZVxuICAgICovXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2hhc0NvbXBvbmVudHMpXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudHMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHJlbW92ZXMgYWxsIGNvbXBvbmVudHNcbiAgICAqIEByZXR1cm4ge1BoYXNlci5Hcm91cC5kZXN0cm95fVxuICAgICogQG92ZXJyaWRlXG4gICAgKi9cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxDb21wb25lbnRzKCk7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICAvKipcbiAgICAqIGluaXRpYWxpemUgdmFyaWFibGVzXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7IH1cblxuICAgIC8qKlxuICAgICogYWRkIHZpc3VhbCBlbGVtZW50c1xuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHByb3RlY3RlZCBidWlsZEludGVyZmFjZSgpOiB2b2lkIHsgfVxuXG4gICAgLyoqXG4gICAgKiB1cGRhdGVzIHRoZSBpbnRlcm5hbCBsaXN0IG9mIGNvbXBvbmVudCBrZXlzIChzbyB3ZSBkb24ndCBoYXZlIHRvIGNhbGwgT2JqZWN0LmtleXMoKSBhbGwgdGhlIHRpbWUpXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHJpdmF0ZSBfdXBkYXRlQ29tcG9uZW50S2V5cygpIHtcbiAgICAgICAgdGhpcy5fY29tcG9uZW50S2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuX2NvbXBvbmVudHMpO1xuICAgICAgICB0aGlzLl9oYXNDb21wb25lbnRzID0gdGhpcy5fY29tcG9uZW50S2V5cy5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgLyoqXG4gICAgKiBhdHRhY2hlcyBhIGxpc3Qgb2YgY29tcG9uZW50cyB0byB0aGUgRGlqb24uVUlHcm91cFxuICAgICogQHBhcmFtIHtBcnJheX0gY29tcG9uZW50cyB0aGUgbGlzdCBvZiBjb21wb25lbnRzIHRvIGFkZFxuICAgICovXG4gICAgcHVibGljIGFkZENvbXBvbmVudHMgPSBmdW5jdGlvbiAoY29tcG9uZW50czogQ29tcG9uZW50W10pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzLmxlbmd0aCA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Rpam9uLlVJR3JvdXAgY29tcG9uZW50cyBtdXN0IGJlIGFuIGFycmF5Jyk7XG5cbiAgICAgICAgd2hpbGUgKGNvbXBvbmVudHMubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KGNvbXBvbmVudHMuc2hpZnQoKSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICogYXR0YWNoZXMgYSBjb21wb25lbnQgdG8gdGhlIERpam9uLlVJR3JvdXBcbiAgICAqIEBwYXJhbSB7ZGlqb24uQ29tcG9uZW50fSBjb21wb25lbnQgdG8gYmUgYXR0YWNoZWRcbiAgICAqL1xuICAgIHB1YmxpYyBhZGRDb21wb25lbnQoY29tcG9uZW50OiBDb21wb25lbnQpOiBDb21wb25lbnQge1xuICAgICAgICBjb21wb25lbnQuc2V0T3duZXIodGhpcyk7XG4gICAgICAgIGNvbXBvbmVudC5pbml0KCk7XG4gICAgICAgIGNvbXBvbmVudC5idWlsZEludGVyZmFjZSgpO1xuXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHNbY29tcG9uZW50Lm5hbWVdID0gY29tcG9uZW50O1xuICAgICAgICB0aGlzLl91cGRhdGVDb21wb25lbnRLZXlzKCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgKiBpdGVyYXRlcyB0aHJvdWdoIHRoZSBsaXN0IG9mIGNvbXBvbmVudHMgYW5kIHVwZGF0ZXMgZWFjaCBvbmVcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlQ29tcG9uZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY29tcG9uZW50S2V5cy5mb3JFYWNoKFxuICAgICAgICAgICAgY29tcG9uZW50TmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnQoY29tcG9uZW50TmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiB1cGRhdGVzIGFuIGF0dGFjaGVkIGNvbXBvbmVudCAoY2FsbHMgY29tcG9uZW50LnVwZGF0ZSgpKVxuICAgICogQHBhcmFtICB7U3RyaW5nfSBjb21wb25lbnROYW1lIHRoZSBuYW1lIG9mIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIHVwZGF0ZUNvbXBvbmVudChjb21wb25lbnROYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY29tcG9uZW50c1tjb21wb25lbnROYW1lXS51cGRhdGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHJlbW92ZXMgYWxsIHRoZSBjb21wb25lbnRzIGN1cnJlbnRseSBhdHRhY2hlZFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyByZW1vdmVBbGxDb21wb25lbnRzKCkge1xuICAgICAgICB3aGlsZSAodGhpcy5fY29tcG9uZW50S2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNvbXBvbmVudCh0aGlzLl9jb21wb25lbnRLZXlzLnBvcCgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICogcmVtb3ZlcyBhIHNwZWNpZmljIGNvbXBvbmVudFxuICAgICogQHBhcmFtICB7U3RyaW5nfSBjb21wb25lbnROYW1lIHRoZSBuYW1lIG9mIHRoZSBjb21wb25lbnQgdG8gcmVtb3ZlXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIHJlbW92ZUNvbXBvbmVudChjb21wb25lbnROYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB0aGlzLl9jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5fY29tcG9uZW50c1tjb21wb25lbnROYW1lXSA9IG51bGw7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdO1xuXG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvbXBvbmVudEtleXMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmxhdHRlbihkZWxheTogbnVtYmVyID0gMCk6IHZvaWQge1xuICAgICAgICBpZiAoZGVsYXkgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGVBc0JpdG1hcCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKGRlbGF5LCAoKSA9PiB7IHRoaXMuY2FjaGVBc0JpdG1hcCA9IHRydWUgfSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdW5GbGF0dGVuKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNhY2hlQXNCaXRtYXAgPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcmVzb2x1dGlvbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXh0dXJlLmJhc2VUZXh0dXJlLnJlc29sdXRpb247XG4gICAgfVxufSIsImltcG9ydCB7U3ByaXRlfSBmcm9tICcuL1Nwcml0ZSc7XG5cbmV4cG9ydCBjbGFzcyBJbnZpc2libGVCdXR0b24gZXh0ZW5kcyBTcHJpdGUge1xuICAgIHByaXZhdGUgX2hpdFdpZHRoOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfaGl0SGVpZ2h0OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgbmFtZTogc3RyaW5nLCB3OiBudW1iZXIsIGg6IG51bWJlcikge1xuICAgICAgICBzdXBlcih4LCB5LCBudWxsLCBudWxsLCBuYW1lKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMuYnVpbGRJbnRlcmZhY2UoKTtcbiAgICAgICAgdGhpcy5zZXRTaXplKHcsIGgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KCkge1xuICAgICAgICB0aGlzLmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIGJ1aWxkSW50ZXJmYWNlKCkge1xuICAgICAgICB0aGlzLl9hZGRIaXRSZWN0KCk7XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgcHJpdmF0ZSBfYWRkSGl0UmVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2hpdFdpZHRoID4gMCAmJiB0aGlzLl9oaXRIZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmhpdEFyZWEgPSBuZXcgUGhhc2VyLlJlY3RhbmdsZSgwLCAwLCB0aGlzLl9oaXRXaWR0aCwgdGhpcy5faGl0SGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgcHVibGljIHNldFNpemUodywgaCkge1xuICAgICAgICB0aGlzLl9oaXRXaWR0aCA9IHcgfHwgMDtcbiAgICAgICAgdGhpcy5faGl0SGVpZ2h0ID0gaCB8fCAwO1xuXG4gICAgICAgIHRoaXMuX2FkZEhpdFJlY3QoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vZGlzcGxheSc7XG5pbXBvcnQge0FwcGxpY2F0aW9ufSBmcm9tICcuLi9hcHBsaWNhdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBMYWJlbGxlZEJ1dHRvbiBleHRlbmRzIFBoYXNlci5CdXR0b24ge1xuICAgIFxuICAgIHByb3RlY3RlZCBfbGFiZWw6IFRleHQ7XG4gICAgcHJvdGVjdGVkIF9sYWJlbFRpbnQ6IHsgdXA6IG51bWJlciwgZG93bjogbnVtYmVyLCBvdmVyOiBudW1iZXIsIG91dDogbnVtYmVyIH07XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBYIFBvc2l0aW9uIHRvIHBsYWNlIGJ1dHRvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFkgUG9zaXRpb24gdG8gcGxhY2UgYnV0dG9uXG4gICAgICogQHBhcmFtIHtmdW5jfSBjYWxsYmFjayBGdW5jdGlvbiB0byBjYWxsIG9uIGJ1dHRvbiBwcmVzc1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IENvbnRleHQgdG8gY2FsbCBzcGVjaWZpZWQgZnVuY3Rpb24gb25cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFNwcml0ZSBzaGVldCB0aGF0IGZyYW1lcyBiZWxvbmcgdG8gKGlmIGFwcGxpY2FibGUpXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVwRnJhbWUgU3RhbmRhcmQgZnJhbWUgZm9yIHRoaXMgYnV0dG9uLCB0aGUgVXAgU3RhdGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZG93bkZyYW1lIChPcHRpb25hbClGcmFtZSB0byBkaXNwbGF5IHdoZW4gYnV0dG9uIHByZXNzZWQgXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG92ZXJGcmFtZSAoT3B0aW9uYWwpRnJhbWUgdG8gZGlzcGxheSB3aGVuIGhvdmVyaW5nIG92ZXIgYnV0dG9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG91dEZyYW1lIChPcHRpb25hbClGcmFtZSB0byBkaXNwbGF5IHdoZW4gYnV0dG9uIGlzIHJlbGVhc2VkXG4gICAgICovICAgIFxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBjYWxsYmFjazogYW55LCBjb250ZXh0OiBhbnksIGtleTogc3RyaW5nLCB1cEZyYW1lOiBzdHJpbmcsIGRvd25GcmFtZTogc3RyaW5nID0gbnVsbCwgb3ZlckZyYW1lOiBzdHJpbmcgPSBudWxsLCBvdXRGcmFtZTogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICBzdXBlcihBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUsIHgsIHksIGtleSwgY2FsbGJhY2ssIGNvbnRleHQsIG92ZXJGcmFtZSwgb3V0RnJhbWUsIGRvd25GcmFtZSwgdXBGcmFtZSk7XG5cbiAgICAgICAgdGhpcy5fbGFiZWwgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIHRoZSB0ZXh0IHlvdSB0cnkgdG8gY3JlYXRlIG9uIHRoZSBidXR0b24gaXMgbGFyZ2VyIHRoYW4gdGhlIGJ1dHRvbiBzcHJpdGUgaXRzZWxmIGl0IHdpbGwgYmUgc2NhbGVkIGRvd24gdG8gbWF0Y2guXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgVGV4dCB0byBkaXNwbGF5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGZvbnRTaXplIEZvbnQgc2l6ZS4gSWYgMC0xIGlzIHBhc3NlZCwgd2lsbCBiZSB1c2VkIGFzIGEgcGVyY2VudGFnZSBvZiBidXR0b24gaGVpZ2h0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZvbnROYW1lIFRoZSBuYW1lIG9mIHRoZSBmb250IGZhbWlseVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZm9yY2VGaXQgSWYgdHJ1ZSwgdGhlIHRleHQgd2lsbCBiZSBzY2FsZWQgZG93biBpZiBpdCBpcyBsYXJnZXIgdGhhbiB0aGUgYnV0dG9uIGl0c2VsZiAoRGVmYXVsdDogVHJ1ZSkuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG91dFRpbnQgU3RhbmRhcmQgY29sb3IgdG8gZGlzcGxheSAoRGVmYXVsdDogV2hpdGUpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRvd25UaW50IChPcHRpb25hbClDb2xvciB0byB0aW50IGZvbnQgd2hlbiBidXR0b24gaXMgcHJlc3NlZCBkb3duXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG92ZXJUaW50IChPcHRpb25hbClDb2xvciB0byB0aW50IGZvbnQgd2hlbiBjdXJzb3IgaXMgb3ZlciBidXR0b25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdXBUaW50IChPcHRpb25hbClDb2xvciB0byB0aW50IGZvbnQgd2hlbiBidXR0b24gaXMgcmVsZWFzZWRcbiAgICAgKi8gIFxuICAgIHB1YmxpYyBhZGRMYWJlbCh0ZXh0OiBzdHJpbmcsIGZvbnRTaXplOiBudW1iZXIsIGZvbnROYW1lOiBzdHJpbmcsIGZvcmNlRml0OiBib29sZWFuID0gdHJ1ZSwgb3V0VGludDogbnVtYmVyID0gMHhmZmZmZmYsIGRvd25UaW50PzogbnVtYmVyLCBvdmVyVGludD86IG51bWJlciwgdXBUaW50PzogbnVtYmVyLCBsYWJlbE9mZnNldD86IFBoYXNlci5Qb2ludCkge1xuICAgICAgICBpZiAoZm9udFNpemUgPCAxKSB7XG4gICAgICAgICAgICBmb250U2l6ZSA9IGZvbnRTaXplICogdGhpcy5yZWFsSGVpZ2h0ICogMC41O1xuICAgICAgICB9ICBcbiAgICAgICAgbGV0IHRleHRQb2ludCA9IG5ldyBQaGFzZXIuUG9pbnQodGhpcy5yZWFsV2lkdGggKiAwLjUsIHRoaXMucmVhbEhlaWdodCAqIDAuNSk7XG4gICAgICAgIGlmIChsYWJlbE9mZnNldCkge1xuICAgICAgICAgICAgdGV4dFBvaW50ID0gUGhhc2VyLlBvaW50LmFkZCh0ZXh0UG9pbnQsIGxhYmVsT2Zmc2V0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9sYWJlbCA9IG5ldyBUZXh0KHRleHRQb2ludC54LCB0ZXh0UG9pbnQueSwgdGV4dCwgZm9udE5hbWUsIGZvbnRTaXplLCBcIiNmZmZmZmZcIik7ICAgICAgXG4gICAgICAgIHRoaXMuX2xhYmVsLmNlbnRlclBpdm90KCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fbGFiZWwpO1xuXG4gICAgICAgIHRoaXMuX2xhYmVsVGludCA9IDx7IHVwOiBudW1iZXIsIGRvd246IG51bWJlciwgb3ZlcjogbnVtYmVyLCBvdXQ6IG51bWJlciB9Pm5ldyBPYmplY3QoKTtcbiAgICAgICAgdGhpcy5fbGFiZWxUaW50LmRvd24gPSBkb3duVGludCA/IGRvd25UaW50IDogb3V0VGludDtcbiAgICAgICAgdGhpcy5fbGFiZWxUaW50LnVwID0gdXBUaW50ID8gdXBUaW50IDogb3V0VGludDtcbiAgICAgICAgdGhpcy5fbGFiZWxUaW50Lm92ZXIgPSBvdmVyVGludCA/IG92ZXJUaW50IDogb3V0VGludDtcbiAgICAgICAgdGhpcy5fbGFiZWxUaW50Lm91dCA9IG91dFRpbnQ7XG5cbiAgICAgICAgdGhpcy5fbGFiZWwudGludCA9IHRoaXMuX2xhYmVsVGludC5vdXQ7XG4gICAgICAgIC8vIElmIHRoZSBmb250IGlzIHN0aWxsIHRvIGxhcmdlIHdlIG5lZWQgdG8gc2NhbGUgaXQgZG93bi4gICAgICAgIFxuICAgICAgICBpZiAoZm9yY2VGaXQgPT09IHRydWUgJiYgdGhpcy5fbGFiZWwucmVhbFdpZHRoID4gdGhpcy5yZWFsV2lkdGggfHwgdGhpcy5fbGFiZWwucmVhbEhlaWdodCA+IHRoaXMucmVhbEhlaWdodCkge1xuICAgICAgICAgICAgbGV0IHdSYXRpbyA9IHRoaXMucmVhbFdpZHRoIC8gdGhpcy5fbGFiZWwucmVhbFdpZHRoO1xuICAgICAgICAgICAgbGV0IGhSYXRpbyA9IHRoaXMucmVhbEhlaWdodCAvIHRoaXMuX2xhYmVsLnJlYWxIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLl9sYWJlbC5zY2FsZS5zZXRUbyh3UmF0aW8gPCBoUmF0aW8gPyB3UmF0aW8gKiAwLjkgOiBoUmF0aW8gKiAwLjkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNldExhYmVsVGludHMob3V0VGludDogbnVtYmVyLCBkb3duVGludD86IG51bWJlciwgb3ZlclRpbnQ/OiBudW1iZXIsIHVwVGludD86IG51bWJlcikge1xuICAgICAgICB0aGlzLl9sYWJlbFRpbnQub3V0ID0gb3V0VGludDtcbiAgICAgICAgdGhpcy5fbGFiZWxUaW50LmRvd24gPSBkb3duVGludCA/IGRvd25UaW50IDogb3V0VGludDtcbiAgICAgICAgdGhpcy5fbGFiZWxUaW50LnVwID0gdXBUaW50ID8gdXBUaW50IDogb3V0VGludDtcbiAgICAgICAgdGhpcy5fbGFiZWxUaW50Lm92ZXIgPSBvdmVyVGludCA/IG92ZXJUaW50IDogb3V0VGludDtcbiAgICB9ICAgXG4gICAgXG4gICAgcHVibGljIG9uSW5wdXREb3duSGFuZGxlcihzcHJpdGU6IGFueSwgcG9pbnRlcjogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlucHV0LmVuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIub25JbnB1dERvd25IYW5kbGVyKHNwcml0ZSwgcG9pbnRlcik7XG4gICAgICAgIHRoaXMudGludExhYmVsKHRoaXMuX2xhYmVsVGludC5kb3duKTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIG9uSW5wdXRPdmVySGFuZGxlcihzcHJpdGU6IGFueSwgcG9pbnRlcjogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlucHV0LmVuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIub25JbnB1dE92ZXJIYW5kbGVyKHNwcml0ZSwgcG9pbnRlcik7XG4gICAgICAgIHRoaXMudGludExhYmVsKHRoaXMuX2xhYmVsVGludC5vdmVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25JbnB1dE91dEhhbmRsZXIoc3ByaXRlOiBhbnksIHBvaW50ZXI6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pbnB1dC5lbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyLm9uSW5wdXRPdXRIYW5kbGVyKHNwcml0ZSwgcG9pbnRlcik7XG4gICAgICAgIHRoaXMudGludExhYmVsKHRoaXMuX2xhYmVsVGludC5vdXQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbklucHV0VXBIYW5kbGVyKHNwcml0ZTogYW55LCBwb2ludGVyOiBhbnksIGlzT3ZlcjogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pbnB1dC5lbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyLm9uSW5wdXRVcEhhbmRsZXIoc3ByaXRlLCBwb2ludGVyLCBpc092ZXIpO1xuICAgICAgICB0aGlzLnRpbnRMYWJlbCh0aGlzLl9sYWJlbFRpbnQudXApO1xuICAgIH0gICBcbiAgICBcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3TGFiZWwgVGhlIG5ldyB0ZXh0IHRvIGRpc3BsYXkgb24gdGhlIGxhYmVsLiBcbiAgICAgKi9cbiAgICBwdWJsaWMgY2hhbmdlTGFiZWwobmV3TGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fbGFiZWwgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2xhYmVsLnRleHQgPSBuZXdMYWJlbDtcbiAgICAgICAgICAgIHRoaXMuX2xhYmVsLmNlbnRlclBpdm90KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1RleHR9IG5ld1RleHQgVGhlIG5ldyBUZXh0IG9iamVjdCB0byBhc3NpZ24gdG8gdGhpcyBsYWJlbC4gXG4gICAgICovICAgIFxuICAgIHB1YmxpYyBhc3NpZ25UZXh0KG5ld1RleHQ6IFRleHQpOiB2b2lkIHtcbiAgICAgICAgaWYgKG5ld1RleHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2xhYmVsID0gbmV3VGV4dDtcbiAgICAgICAgfVxuICAgIH0gICBcblxuICAgIHByb3RlY3RlZCB0aW50TGFiZWwobmV3VGludDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9sYWJlbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fbGFiZWwudGludCA9IG5ld1RpbnQ7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHtHcm91cH0gZnJvbSAnLi9Hcm91cCc7XG5cbmV4cG9ydCBjbGFzcyBOaW5lU2xpY2VJbWFnZSBleHRlbmRzIEdyb3VwIHtcbiAgICBwcml2YXRlIF9fd2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIF9faGVpZ2h0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfc2l6ZTogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBfZGlzcGxheUxheWVyOiBQaGFzZXIuR3JvdXA7XG4gICAgcHJpdmF0ZSBfaW5wdXRMYXllcjogUGhhc2VyLkdyb3VwO1xuXG4gICAgcHVibGljIHRsOiBQaGFzZXIuSW1hZ2U7XG4gICAgcHVibGljIHQ6IFBoYXNlci5UaWxlU3ByaXRlO1xuICAgIHB1YmxpYyB0cjogUGhhc2VyLkltYWdlO1xuICAgIHB1YmxpYyByOiBQaGFzZXIuVGlsZVNwcml0ZTtcbiAgICBwdWJsaWMgYnI6IFBoYXNlci5JbWFnZTtcbiAgICBwdWJsaWMgYjogUGhhc2VyLlRpbGVTcHJpdGU7XG4gICAgcHVibGljIGJsOiBQaGFzZXIuSW1hZ2U7XG4gICAgcHVibGljIGw6IFBoYXNlci5UaWxlU3ByaXRlO1xuICAgIHB1YmxpYyB0aWxlOiBQaGFzZXIuVGlsZVNwcml0ZTtcblxuICAgIHByaXZhdGUgX2ludGVyYWN0aXZlQmFja2luZzogUGhhc2VyLkltYWdlID0gbnVsbDtcbiAgICBwcml2YXRlIF9pbnB1dEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgX2N1cnJlbnRCb3VuZHM6IFBJWEkuUmVjdGFuZ2xlID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcHVibGljIGtleTogc3RyaW5nLCBwdWJsaWMgdGV4dHVyZVBhdGg6IHN0cmluZywgcHVibGljIGZpbGxNaWRkbGU6IGJvb2xlYW4gPSB0cnVlLCBwdWJsaWMgdG9wSGVpZ2h0PzogbnVtYmVyLCBwdWJsaWMgcmlnaHRXaWR0aD86IG51bWJlciwgcHVibGljIGJvdHRvbUhlaWdodD86IG51bWJlciwgcHVibGljIGxlZnRXaWR0aD86IG51bWJlcikge1xuICAgICAgICBzdXBlcih4LCB5KTtcblxuICAgICAgICB0aGlzLl9fd2lkdGggPSBNYXRoLnJvdW5kKHdpZHRoKTtcbiAgICAgICAgdGhpcy5fX2hlaWdodCA9IE1hdGgucm91bmQoaGVpZ2h0KTtcblxuICAgICAgICB0aGlzLl9idWlsZCgpO1xuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKDEwLCB0aGlzLmRGbGF0dGVuLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9idWlsZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faW5wdXRMYXllciA9IHRoaXMuYWRkKHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKSk7XG4gICAgICAgIHRoaXMuX2Rpc3BsYXlMYXllciA9IHRoaXMuYWRkKHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKSk7XG5cbiAgICAgICAgdGhpcy50bCA9IDxQaGFzZXIuSW1hZ2U+dGhpcy5fZGlzcGxheUxheWVyLmFkZCh0aGlzLmdhbWUuYWRkLmltYWdlKDAsIDAsIHRoaXMua2V5LCB0aGlzLnRleHR1cmVQYXRoICsgJy90bCcpKTtcblxuICAgICAgICB0aGlzLnRyID0gPFBoYXNlci5JbWFnZT50aGlzLl9kaXNwbGF5TGF5ZXIuYWRkKHRoaXMuZ2FtZS5hZGQuaW1hZ2UodGhpcy5fX3dpZHRoLCAwLCB0aGlzLmtleSwgdGhpcy50ZXh0dXJlUGF0aCArICcvdHInKSk7XG5cbiAgICAgICAgdGhpcy50ID0gPFBoYXNlci5UaWxlU3ByaXRlPnRoaXMuX2Rpc3BsYXlMYXllci5hZGQodGhpcy5nYW1lLmFkZC50aWxlU3ByaXRlKE1hdGguZmxvb3IodGhpcy50bC5nZXRCb3VuZHMoKS53aWR0aCksIDAsIE1hdGguY2VpbCh0aGlzLl9fd2lkdGggLSB0aGlzLnRsLmdldEJvdW5kcygpLndpZHRoIC0gdGhpcy50ci5nZXRCb3VuZHMoKS53aWR0aCksIHRoaXMudG9wSGVpZ2h0IHx8IHRoaXMudGwuZ2V0Qm91bmRzKCkuaGVpZ2h0LCB0aGlzLmtleSwgdGhpcy50ZXh0dXJlUGF0aCArICcvdCcpKTtcblxuICAgICAgICB0aGlzLmwgPSA8UGhhc2VyLlRpbGVTcHJpdGU+dGhpcy5fZGlzcGxheUxheWVyLmFkZCh0aGlzLmdhbWUuYWRkLnRpbGVTcHJpdGUoMCwgTWF0aC5mbG9vcih0aGlzLnRsLmdldEJvdW5kcygpLmhlaWdodCksIE1hdGguY2VpbCh0aGlzLmxlZnRXaWR0aCB8fCB0aGlzLnRsLmdldEJvdW5kcygpLndpZHRoKSwgMTAwLCB0aGlzLmtleSwgdGhpcy50ZXh0dXJlUGF0aCArICcvbCcpKTtcblxuICAgICAgICB0aGlzLmJsID0gPFBoYXNlci5JbWFnZT50aGlzLl9kaXNwbGF5TGF5ZXIuYWRkKHRoaXMuZ2FtZS5hZGQuaW1hZ2UoMCwgdGhpcy5fX2hlaWdodCwgdGhpcy5rZXksIHRoaXMudGV4dHVyZVBhdGggKyAnL2JsJykpO1xuXG4gICAgICAgIHRoaXMubC5oZWlnaHQgPSBNYXRoLmNlaWwodGhpcy5fX2hlaWdodCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkuaGVpZ2h0IC0gdGhpcy5ibC5nZXRCb3VuZHMoKS5oZWlnaHQpO1xuXG4gICAgICAgIHRoaXMuYiA9IDxQaGFzZXIuVGlsZVNwcml0ZT50aGlzLl9kaXNwbGF5TGF5ZXIuYWRkKHRoaXMuZ2FtZS5hZGQudGlsZVNwcml0ZShNYXRoLmZsb29yKHRoaXMuYmwuZ2V0Qm91bmRzKCkud2lkdGgpLCB0aGlzLl9faGVpZ2h0LCAxMDAsIHRoaXMuYm90dG9tSGVpZ2h0IHx8IHRoaXMuYmwuZ2V0Qm91bmRzKCkuaGVpZ2h0LCB0aGlzLmtleSwgdGhpcy50ZXh0dXJlUGF0aCArICcvYicpKTtcblxuICAgICAgICB0aGlzLmJyID0gPFBoYXNlci5JbWFnZT50aGlzLl9kaXNwbGF5TGF5ZXIuYWRkKHRoaXMuZ2FtZS5hZGQuaW1hZ2UodGhpcy5fX3dpZHRoLCB0aGlzLl9faGVpZ2h0LCB0aGlzLmtleSwgdGhpcy50ZXh0dXJlUGF0aCArICcvYnInKSk7XG5cbiAgICAgICAgdGhpcy5iLndpZHRoID0gTWF0aC5jZWlsKHRoaXMuX193aWR0aCAtIHRoaXMuYmwuZ2V0Qm91bmRzKCkud2lkdGggLSB0aGlzLmJyLmdldEJvdW5kcygpLndpZHRoKTtcbiAgICAgICAgdGhpcy5yID0gPFBoYXNlci5UaWxlU3ByaXRlPnRoaXMuX2Rpc3BsYXlMYXllci5hZGQodGhpcy5nYW1lLmFkZC50aWxlU3ByaXRlKHRoaXMuX193aWR0aCwgTWF0aC5mbG9vcih0aGlzLnRyLmdldEJvdW5kcygpLmhlaWdodCksIE1hdGguY2VpbCh0aGlzLnJpZ2h0V2lkdGggfHwgdGhpcy50ci5nZXRCb3VuZHMoKS53aWR0aCksIE1hdGguY2VpbCh0aGlzLl9faGVpZ2h0IC0gdGhpcy50bC5nZXRCb3VuZHMoKS5oZWlnaHQgLSB0aGlzLmJyLmdldEJvdW5kcygpLmhlaWdodCksIHRoaXMua2V5LCB0aGlzLnRleHR1cmVQYXRoICsgJy9yJykpO1xuXG4gICAgICAgIHRoaXMudHIuc2V0UGl2b3QoJ3RyJyk7XG4gICAgICAgIHRoaXMuci5zZXRQaXZvdCgndHInKTtcblxuICAgICAgICB0aGlzLmJyLnNldFBpdm90KCdicicpO1xuICAgICAgICB0aGlzLmIuc2V0UGl2b3QoJ2JsJyk7XG4gICAgICAgIHRoaXMuYmwuc2V0UGl2b3QoJ2JsJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuZmlsbE1pZGRsZSkge1xuICAgICAgICAgICAgdGhpcy50aWxlID0gPFBoYXNlci5UaWxlU3ByaXRlPnRoaXMuX2Rpc3BsYXlMYXllci5hZGQodGhpcy5nYW1lLmFkZC50aWxlU3ByaXRlKHRoaXMudGwuZ2V0Qm91bmRzKCkud2lkdGggLSAxLCB0aGlzLnRsLmdldEJvdW5kcygpLmhlaWdodCAtIDEsIHRoaXMuX193aWR0aCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkud2lkdGggLSB0aGlzLnRyLmdldEJvdW5kcygpLndpZHRoICsgMiwgdGhpcy5fX2hlaWdodCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkuaGVpZ2h0IC0gdGhpcy5ici5nZXRCb3VuZHMoKS5oZWlnaHQgKyA0LCB0aGlzLmtleSwgdGhpcy50ZXh0dXJlUGF0aCArICcvdGlsZScpKTtcbiAgICAgICAgICAgIHRoaXMuc2VuZFRvQmFjayh0aGlzLnRpbGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYWRkSW50ZXJhY3RpdmVCYWNraW5nKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBnZnggPSB0aGlzLmdhbWUuYWRkLmdyYXBoaWNzKCk7XG4gICAgICAgIGdmeC5iZWdpbkZpbGwoMHhGRjAwMDAsIDApO1xuICAgICAgICBnZnguZHJhd1JlY3QodGhpcy54LCB0aGlzLnksIHRoaXMuX193aWR0aCwgdGhpcy5fX2hlaWdodCk7XG4gICAgICAgIGdmeC5lbmRGaWxsKCk7XG5cbiAgICAgICAgdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nID0gdGhpcy5faW5wdXRMYXllci5hZGQodGhpcy5nYW1lLmFkZC5pbWFnZSgwLCAwLCBnZnguZ2VuZXJhdGVUZXh0dXJlKCkpKTtcblxuICAgICAgICB0aGlzLl9pbnRlcmFjdGl2ZUJhY2tpbmcuaW5wdXRFbmFibGVkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmdhbWUud29ybGQucmVtb3ZlKGdmeCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2V0U2l6ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kVW5mbGF0dGVuKCk7XG5cbiAgICAgICAgdGhpcy50LndpZHRoID0gdGhpcy5iLndpZHRoID0gTWF0aC5jZWlsKHRoaXMuX193aWR0aCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkud2lkdGggLSB0aGlzLnRyLmdldEJvdW5kcygpLndpZHRoIHwgMCk7XG4gICAgICAgIHRoaXMuci54ID0gdGhpcy50ci54ID0gdGhpcy5ici54ID0gdGhpcy5fX3dpZHRoIHwgMDtcbiAgICAgICAgdGhpcy5sLmhlaWdodCA9IHRoaXMuci5oZWlnaHQgPSAodGhpcy5fX2hlaWdodCAtIHRoaXMudHIuZ2V0Qm91bmRzKCkuaGVpZ2h0IC0gdGhpcy5ibC5nZXRCb3VuZHMoKS5oZWlnaHQgfCAwKTtcbiAgICAgICAgdGhpcy5ibC55ID0gdGhpcy5iLnkgPSB0aGlzLmJyLnkgPSB0aGlzLl9faGVpZ2h0IHwgMDtcblxuICAgICAgICBpZiAodGhpcy5maWxsTWlkZGxlKSB7XG4gICAgICAgICAgICB0aGlzLnRpbGUud2lkdGggPSBNYXRoLmNlaWwodGhpcy5fX3dpZHRoIC0gdGhpcy50ci5nZXRCb3VuZHMoKS53aWR0aCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkud2lkdGggKyA0KVxuICAgICAgICAgICAgdGhpcy50aWxlLmhlaWdodCA9IE1hdGguY2VpbCh0aGlzLl9faGVpZ2h0IC0gdGhpcy50bC5nZXRCb3VuZHMoKS5oZWlnaHQgLSB0aGlzLmJsLmdldEJvdW5kcygpLmhlaWdodCArIDQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2ludGVyYWN0aXZlQmFja2luZyAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbmV3IHdpZHRoJywgdGhpcy5fX3dpZHRoKVxuICAgICAgICAgICAgdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nLndpZHRoID0gdGhpcy5fX3dpZHRoO1xuICAgICAgICAgICAgdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nLmhlaWdodCA9IHRoaXMuX19oZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKDEwLCB0aGlzLmRGbGF0dGVuLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9hZGRJbnB1dCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnRlcmFjdGl2ZUJhY2tpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZEludGVyYWN0aXZlQmFja2luZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVtb3ZlSW5wdXQoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nLmlucHV0RW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBkVW5mbGF0dGVuKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9kaXNwbGF5TGF5ZXIuY2FjaGVBc0JpdG1hcCA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGRGbGF0dGVuKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9kaXNwbGF5TGF5ZXIuY2FjaGVBc0JpdG1hcCA9IHRydWU7Ly90aGlzLmdhbWUucmVuZGVyVHlwZSA9PT0gUGhhc2VyLldFQkdMO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaW5wdXRFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lucHV0RW5hYmxlZCA9IHZhbHVlO1xuICAgICAgICBpZiAodGhpcy5faW5wdXRFbmFibGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGRJbnB1dCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcmVtb3ZlSW5wdXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZXZlbnRzKCk6IFBoYXNlci5FdmVudHMge1xuICAgICAgICBpZiAoIXRoaXMuX2ludGVyYWN0aXZlQmFja2luZyB8fCAhdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nLmlucHV0RW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVyYWN0aXZlQmFja2luZy5ldmVudHM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpbnB1dCgpOiBQaGFzZXIuSW5wdXRIYW5kbGVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVyYWN0aXZlQmFja2luZy5pbnB1dDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGhTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fX3dpZHRoID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX3NldFNpemUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHZTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fX2hlaWdodCA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9zZXRTaXplKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBoU2l6ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fX3dpZHRoO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdlNpemUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19oZWlnaHQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFNpemUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fX3dpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuX19oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuX3NldFNpemUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGludGVyYWN0aXZlQmFja2luZygpOlBoYXNlci5JbWFnZXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVyYWN0aXZlQmFja2luZztcbiAgICB9XG59IiwiaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xuaW1wb3J0IHtHYW1lfSBmcm9tICcuLi9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFNwaW5lIGV4dGVuZHMgUElYSS5zcGluZS5TcGluZSB7XG4gICAgcHVibGljIHN0YXRpYyBERUZBVUxUX1NQRUVEOiBudW1iZXIgPSAwLjAxNjc7Ly8gNjAgZnBzO1xuICAgIHB1YmxpYyBkZWJ1ZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBnYW1lOiBHYW1lO1xuICAgIHByaXZhdGUgX2NyZWF0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgb25DcmVhdGU6IFBoYXNlci5TaWduYWwgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuICAgIHB1YmxpYyBvbkFuaW1hdGlvbkNvbXBsZXRlOiBQaGFzZXIuU2lnbmFsID0gbnVsbDtcbiAgICBwdWJsaWMgb25NZXNoU3dhcDogUGhhc2VyLlNpZ25hbCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG5cbiAgICBwcm90ZWN0ZWQgX2NhblVwZGF0ZTogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJvdGVjdGVkIF9wYXVzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcm90ZWN0ZWQgX3NwZWVkOiBudW1iZXIgPSAxO1xuICAgIHByb3RlY3RlZCBfc2tlbGV0b25TY2FsZTogbnVtYmVyID0gMTtcblxuICAgIHByb3RlY3RlZCBfYm91bmRzT2Zmc2V0OiBQaGFzZXIuUG9pbnQgPSBuZXcgUGhhc2VyLlBvaW50KDAsIDApO1xuICAgIHByb3RlY3RlZCBfYm91bmRzV2lkdGhTY2FsZTogbnVtYmVyID0gMTtcbiAgICBwcm90ZWN0ZWQgX2JvdW5kc0hlaWdodFNjYWxlOiBudW1iZXIgPSAxO1xuICAgIHByb3RlY3RlZCBfY3VycmVudEJvdW5kczogUElYSS5SZWN0YW5nbGUgPSBuZXcgUElYSS5SZWN0YW5nbGUoKTtcblxuICAgIHB1YmxpYyBwaHlzaWNzU3ByaXRlOiBQaGFzZXIuU3ByaXRlO1xuICAgIHByb3RlY3RlZCBfcGh5c2ljc09mZnNldDogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9ID0geyB4OiAwLCB5OiAwIH07XG4gICAgcHJvdGVjdGVkIF9waHlzaWNzRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIG5vbk1lc2hWZXJzaW9uOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXNzZXROYW1lOiBzdHJpbmcgPSAnJywgeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgcHVibGljIHNrZWxldG9uU2NhbGU6IG51bWJlciA9IDEpIHtcbiAgICAgICAgc3VwZXIoQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lLCB4LCB5LCBTcGluZS5jcmVhdGVTcGluZURhdGEoU3BpbmUuTE9BRF9OT05fTUVTSCA/IChhc3NldE5hbWUgKyBTcGluZS5OT05fTUVTSF9TVUZGSVgpIDogYXNzZXROYW1lLCBza2VsZXRvblNjYWxlKSk7XG5cbiAgICAgICAgdGhpcy5fc2tlbGV0b25TY2FsZSA9IHNrZWxldG9uU2NhbGU7XG5cbiAgICAgICAgaWYgKFNwaW5lLkxPQURfTk9OX01FU0gpIHtcbiAgICAgICAgICAgIHRoaXMubm9uTWVzaFZlcnNpb24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGluaXRpYWxpemUgc3RhdGljXG4gICAgICAgIFNwaW5lLmluaXRpYWxpemUoKTtcbiAgICAgICAgU3BpbmUub25Ob25NZXNoRlBTLmFkZE9uY2UodGhpcy5sb2FkTm9uTWVzaFZlcnNpb24sIHRoaXMpO1xuXG4gICAgICAgIHRoaXMubmFtZSA9IGFzc2V0TmFtZTtcbiAgICAgICAgdGhpcy5za2VsZXRvbi5zZXRUb1NldHVwUG9zZSgpO1xuICAgICAgICB0aGlzLl9jcmVhdGVCb3VuZHMoKTtcbiAgICAgICAgdGhpcy51cGRhdGUoMCk7XG4gICAgICAgIHRoaXMuYXV0b1VwZGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQW5pbWF0aW9uQ29tcGxldGUgPSB0aGlzLnN0YXRlLm9uQW5pbWF0aW9uQ29tcGxldGU7XG4gICAgICAgIHRoaXMuaGl0QXJlYSA9IG5ldyBQaGFzZXIuUmVjdGFuZ2xlKDAsIC0gdGhpcy5za2VsZXRvbi5kYXRhLmhlaWdodCwgdGhpcy5za2VsZXRvbi5kYXRhLndpZHRoLCB0aGlzLnNrZWxldG9uLmRhdGEuaGVpZ2h0KTtcbiAgICAgICAgLy90aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKDEwMCwgdGhpcy5fb25DcmVhdGVJbnRlcm5hbCwgdGhpcyk7XG5cbiAgICAgICAgaWYgKFNwaW5lLkFVVE9fTUVTSCAmJiBTcGluZS5MT0FEX05PTl9NRVNIICE9PSB0cnVlKSB7XG4gICAgICAgICAgICBTcGluZS5kZXRlY3RBdXRvTWVzaCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb25DcmVhdGVJbnRlcm5hbCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY3JlYXRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX2NyZWF0ZSgpO1xuICAgICAgICB0aGlzLm9uQ3JlYXRlLmRpc3BhdGNoKCk7XG4gICAgICAgIHRoaXMuX2NhblVwZGF0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9jcmVhdGUoKTogdm9pZCB7XG4gICAgICAgIC8vIHRvIG92ZXJyaWRlXG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2tlbGV0b24gPSBudWxsO1xuICAgICAgICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGF0ZURhdGEgPSBudWxsO1xuICAgICAgICB0aGlzLnNwaW5lRGF0YSA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMuc2xvdENvbnRhaW5lcnMgJiYgdGhpcy5zbG90Q29udGFpbmVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5zbG90Q29udGFpbmVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbG90Q29udGFpbmVycy5zaGlmdCgpLmRlc3Ryb3kodHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zbG90Q29udGFpbmVycyA9IG51bGw7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2hpbGRyZW4oKTtcbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoZHQ6IG51bWJlciA9IFNwaW5lLkRFRkFVTFRfU1BFRUQpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jcmVhdGVkICYmIHRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9vbkNyZWF0ZUludGVybmFsKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3BhdXNlZCB8fCAhdGhpcy5fY2FuVXBkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fcGh5c2ljc0VuYWJsZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMueCA9IHRoaXMucGh5c2ljc1Nwcml0ZS5ib2R5LnBvc2l0aW9uLnggKyB0aGlzLl9waHlzaWNzT2Zmc2V0Lng7XG4gICAgICAgICAgICB0aGlzLnkgPSB0aGlzLnBoeXNpY3NTcHJpdGUuYm9keS5wb3NpdGlvbi55ICsgdGhpcy5fcGh5c2ljc09mZnNldC55ICsgKHRoaXMuc2NhbGUueSA+IDAgPyB0aGlzLnBoeXNpY3NTcHJpdGUuYm9keS5oZWlnaHQgOiAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLnVwZGF0ZSh0aGlzLl9zcGVlZCAqIGR0KTtcblxuXG4gICAgfVxuXG4gICAgcHVibGljIGluaXRQaHlzaWNzKHR5cGU6IG51bWJlciwgb2Zmc2V0OiB7IHg/OiBudW1iZXIsIHk/OiBudW1iZXIgfSk6IGJvb2xlYW4ge1xuICAgICAgICB0aGlzLl9jcmVhdGVCb3VuZHMoKTtcbiAgICAgICAgaWYgKHR5cGUgIT0gUGhhc2VyLlBoeXNpY3MuQVJDQURFICYmXG4gICAgICAgICAgICB0eXBlICE9IFBoYXNlci5QaHlzaWNzLk5JTkpBICYmXG4gICAgICAgICAgICB0eXBlICE9IFBoYXNlci5QaHlzaWNzLlAySlMpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgaWYgKG9mZnNldC54ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3BoeXNpY3NPZmZzZXQueCA9IG9mZnNldC54O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9mZnNldC55ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3BoeXNpY3NPZmZzZXQueSA9IG9mZnNldC55O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5waHlzaWNzU3ByaXRlID0gPFBoYXNlci5TcHJpdGU+dGhpcy5wYXJlbnQuYWRkQ2hpbGQodGhpcy5nYW1lLmFkZC5zcHJpdGUodGhpcy54ICsgdGhpcy5fcGh5c2ljc09mZnNldC54LCB0aGlzLnkgLSB0aGlzLl9waHlzaWNzT2Zmc2V0LnkpKTtcblxuICAgICAgICB0aGlzLnBoeXNpY3NTcHJpdGUubmFtZSA9IHRoaXMuYXNzZXROYW1lICsgJ19waHlzaWNzU3ByaXRlJztcbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuZW5hYmxlKHRoaXMucGh5c2ljc1Nwcml0ZSwgdHlwZSk7XG4gICAgICAgIHRoaXMuX3BoeXNpY3NFbmFibGVkID0gKHRoaXMucGh5c2ljc1Nwcml0ZS5ib2R5ICE9PSBudWxsKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BoeXNpY3NFbmFibGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXNhYmxlUGh5c2ljcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcGh5c2ljc0VuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZW5hYmxlUGh5c2ljcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcGh5c2ljc0VuYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkTm9uTWVzaFZlcnNpb24oKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHRoaXMubm9uTWVzaFZlcnNpb24gPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLy8gc2V0cyB0aGUgbm9uTWVzaFZlcnNpb24gZmxhZyBzbyB0aGlzIG1ldGhvZCBkb2Vzbid0IHJ1biBtb3JlIHRoYW4gb25jZVxuICAgICAgICAvL3RoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vbk1lc2hWZXJzaW9uID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbHBoYSA9IDA7XG4gICAgICAgIC8vIHN0b3JlIHRoZSB0cmFja3MgYW5kIHNpZ25hbHNcbiAgICAgICAgY29uc3QgdHJhY2tzID0gdGhpcy5zdGF0ZS50cmFja3M7XG4gICAgICAgIGNvbnN0IHNpZ25hbDogUGhhc2VyLlNpZ25hbCA9IHRoaXMuc3RhdGUub25BbmltYXRpb25Db21wbGV0ZTtcblxuICAgICAgICAvLyBkZXN0cm95IHRoZSBzbG90IGNvbnRhaW5lcnNcbiAgICAgICAgd2hpbGUgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgKDxQaGFzZXIuR3JvdXA+dGhpcy5yZW1vdmVDaGlsZEF0KDApKS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVzZXQgdGhlIHNwaW5lIGRhdGFcbiAgICAgICAgdGhpcy5zZXR1cChTcGluZS5jcmVhdGVTcGluZURhdGEodGhpcy5uYW1lICsgU3BpbmUuTk9OX01FU0hfU1VGRklYLCB0aGlzLl9za2VsZXRvblNjYWxlKSk7XG4gICAgICAgIHRoaXMuc3RhdGUuYXBwbHkodGhpcy5za2VsZXRvbik7XG5cbiAgICAgICAgLy8gcmVzZXQgdGhlIHN0YXRlXG4gICAgICAgIHRoaXMuc3RhdGUudHJhY2tzID0gdHJhY2tzO1xuXG4gICAgICAgIC8vIHJlc2V0IHRoZSBzaWduYWxzXG4gICAgICAgIGlmIChzaWduYWwgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25BbmltYXRpb25Db21wbGV0ZS5yZW1vdmVBbGwoKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25BbmltYXRpb25Db21wbGV0ZS5kaXNwb3NlKCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9uQW5pbWF0aW9uQ29tcGxldGUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5vbkFuaW1hdGlvbkNvbXBsZXRlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25BbmltYXRpb25Db21wbGV0ZSA9IHNpZ25hbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25BbmltYXRpb25Db21wbGV0ZSA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbkFuaW1hdGlvbkNvbXBsZXRlID0gdGhpcy5zdGF0ZS5vbkFuaW1hdGlvbkNvbXBsZXRlO1xuXG4gICAgICAgIC8vIGZvcmNlIGFuIHVwZGF0ZVxuICAgICAgICAvL3RoaXMudXBkYXRlKCk7XG5cbiAgICAgICAgLy8gY2xlYXIgdGhlIG1lc2hlZCBzcGluZSBhc3NldHNcbiAgICAgICAgKDxHYW1lPnRoaXMuZ2FtZSkuYXNzZXQuY2xlYXJTcGluZUFzc2V0KHRoaXMubmFtZSk7XG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoMTAwLCAoKSA9PiB7IHRoaXMuYWxwaGEgPSAxIH0sIHRoaXMpO1xuXG4gICAgICAgIHRoaXMub25NZXNoU3dhcC5kaXNwYXRjaCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlU3BpbmVEYXRhKGFzc2V0TmFtZTogc3RyaW5nLCBza2VsZXRvblNjYWxlOiBudW1iZXIgPSAxKTogYW55IHtcbiAgICAgICAgY29uc3Qgc3BpbmUgPSBQSVhJLnNwaW5lO1xuICAgICAgICBjb25zdCBzcGluZUF0bGFzID0gbmV3IHNwaW5lLlNwaW5lUnVudGltZS5BdGxhcyhBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUuY2FjaGUuZ2V0VGV4dChhc3NldE5hbWUgKyAnLmF0bGFzJyksIHRoaXMuYXRsYXNDYWxsYmFja0Z1bmN0aW9uKTtcbiAgICAgICAgY29uc3Qgc3BpbmVKc29uUGFyc2VyID0gbmV3IHNwaW5lLlNwaW5lUnVudGltZS5Ta2VsZXRvbkpzb25QYXJzZXIobmV3IHNwaW5lLlNwaW5lUnVudGltZS5BdGxhc0F0dGFjaG1lbnRQYXJzZXIoc3BpbmVBdGxhcyksIHNrZWxldG9uU2NhbGUpO1xuICAgICAgICBjb25zdCBza2VsZXRvbkRhdGEgPSBzcGluZUpzb25QYXJzZXIucmVhZFNrZWxldG9uRGF0YShBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUuY2FjaGUuZ2V0SlNPTihhc3NldE5hbWUgKyAnLmpzb24nKSk7XG4gICAgICAgIHJldHVybiBza2VsZXRvbkRhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhdGxhc0NhbGxiYWNrRnVuY3Rpb24obGluZSwgY2FsbGJhY2spIHtcbiAgICAgICAgLy9jYWxsYmFjayhQSVhJLkJhc2VUZXh0dXJlLmZyb21JbWFnZSgnYXNzZXRzL3NwaW5lLycgKyBsaW5lKSk7XG4gICAgICAgIGNvbnN0IGxpbmVBcnIgPSBsaW5lLnNwbGl0KCdAJyArIEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZS5yZXNvbHV0aW9uICsgJ3gnKTtcbiAgICAgICAgY29uc3QgdXJsID0gbGluZUFyci5qb2luKCcnKTtcblxuICAgICAgICBjYWxsYmFjayhuZXcgUElYSS5CYXNlVGV4dHVyZShBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUuY2FjaGUuZ2V0SW1hZ2UodXJsKSwgUElYSS5zY2FsZU1vZGVzLkRFRkFVTFQpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHBhdXNlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdXNlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBhdXNlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9wYXVzZWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHNwZWVkKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zcGVlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHNwZWVkKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fc3BlZWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGJvdW5kc09mZnNldChvZmZzZXQ6IFBoYXNlci5Qb2ludCkge1xuICAgICAgICB0aGlzLl9ib3VuZHNPZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRCb3VuZHMgPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYm91bmRzT2Zmc2V0KCk6IFBoYXNlci5Qb2ludCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ib3VuZHNPZmZzZXQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBib3VuZHNXaWR0aFNjYWxlKHNjYWxlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fYm91bmRzV2lkdGhTY2FsZSA9IHNjYWxlO1xuICAgICAgICB0aGlzLl9jdXJyZW50Qm91bmRzID0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGJvdW5kc1dpZHRoU2NhbGUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvdW5kc1dpZHRoU2NhbGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBib3VuZHNIZWlnaHRTY2FsZShzY2FsZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2JvdW5kc0hlaWdodFNjYWxlID0gc2NhbGU7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRCb3VuZHMgPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYm91bmRzSGVpZ2h0U2NhbGUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvdW5kc0hlaWdodFNjYWxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRCb3VuZHMoKTogUElYSS5SZWN0YW5nbGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudEJvdW5kcyB8fCB0aGlzLl9jcmVhdGVCb3VuZHMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZUJvdW5kcygpOiBQSVhJLlJlY3RhbmdsZSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRCb3VuZHMgPSBuZXcgUElYSS5SZWN0YW5nbGUodGhpcy54ICsgdGhpcy5fYm91bmRzT2Zmc2V0LnggKiB0aGlzLnNjYWxlLngsIHRoaXMueSAtICh0aGlzLnNrZWxldG9uLmRhdGEuaGVpZ2h0ICogdGhpcy5zY2FsZS55KSArIHRoaXMuX2JvdW5kc09mZnNldC55ICogdGhpcy5zY2FsZS55LCB0aGlzLnNrZWxldG9uLmRhdGEud2lkdGggKiBNYXRoLmFicyh0aGlzLnNjYWxlLngpICogdGhpcy5ib3VuZHNXaWR0aFNjYWxlLCB0aGlzLnNrZWxldG9uLmRhdGEuaGVpZ2h0ICogTWF0aC5hYnModGhpcy5zY2FsZS55KSAqIHRoaXMuYm91bmRzSGVpZ2h0U2NhbGUpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50Qm91bmRzO1xuICAgIH1cblxuICAgIC8vIGFsc28gdXBkYXRlcyB0aGUgYm91bmRzXG4gICAgcHVibGljIHNldFNjYWxlKHg6IG51bWJlciA9IG51bGwsIHk6IG51bWJlciA9IG51bGwpIHtcbiAgICAgICAgaWYgKHggIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUueCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUueSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY3VycmVudEJvdW5kcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCb3VuZHMoKS53aWR0aDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCb3VuZHMoKS5oZWlnaHQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBib2R5KCk6IGFueSB7XG4gICAgICAgIGlmICghdGhpcy5fcGh5c2ljc0VuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBoeXNpY3NTcHJpdGUuYm9keTtcbiAgICB9XG5cbiAgICAvLyBzdGF0aWMgbWV0aG9kc1xuICAgIC8vIGF1dG8gbWVzaCAvIG5vbi1tZXNoIGFzc2V0IGxvYWRpbmdcbiAgICBwcm90ZWN0ZWQgc3RhdGljIElOSVRJQUxJWkVEOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIHN0YXRpYyBnYW1lOiBHYW1lID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgc3RhdGljIG5vbk1lc2hUaW1lcjogUGhhc2VyLlRpbWVyRXZlbnQgPSBudWxsO1xuICAgIHByb3RlY3RlZCBzdGF0aWMgb25Ob25NZXNoRlBTOiBQaGFzZXIuU2lnbmFsO1xuXG4gICAgcHVibGljIHN0YXRpYyBMT0FEX05PTl9NRVNIOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgc3RhdGljIEFVVE9fTUVTSDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIHN0YXRpYyBERUZBVUxUX05PTl9NRVNIX1NVRkZJWDogc3RyaW5nID0gJ19ub21lc2gnO1xuICAgIHB1YmxpYyBzdGF0aWMgTk9OX01FU0hfU1VGRklYOiBzdHJpbmcgPSBudWxsO1xuXG4gICAgcHVibGljIHN0YXRpYyBERUZBVUxUX05PTl9NRVNIX0ZQUzogbnVtYmVyID0gMzU7XG4gICAgcHVibGljIHN0YXRpYyBOT05fTUVTSF9GUFM6IG51bWJlciA9IG51bGw7XG5cbiAgICBwdWJsaWMgc3RhdGljIGluaXRpYWxpemUoKTogdm9pZCB7XG4gICAgICAgIGlmIChTcGluZS5JTklUSUFMSVpFRCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFNwaW5lLklOSVRJQUxJWkVEID0gdHJ1ZTtcbiAgICAgICAgU3BpbmUuZ2FtZSA9IEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZTtcbiAgICAgICAgU3BpbmUub25Ob25NZXNoRlBTID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGRldGVjdEF1dG9NZXNoKCk6IHZvaWQge1xuICAgICAgICBTcGluZS5nYW1lLnRpbWUuYWR2YW5jZWRUaW1pbmcgPSB0cnVlO1xuICAgICAgICBTcGluZS5nYW1lLnRpbWUuZXZlbnRzLmFkZCgyMDAwLCBTcGluZS5jaGVja05vbk1lc2hUaHJlc2hvbGQsIFNwaW5lKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGRlc3Ryb3lOb25NZXNoVGltZXIoKTogdm9pZCB7XG4gICAgICAgIGlmIChTcGluZS5ub25NZXNoVGltZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIFNwaW5lLmdhbWUudGltZS5ldmVudHMucmVtb3ZlKFNwaW5lLm5vbk1lc2hUaW1lcik7XG4gICAgICAgICAgICBTcGluZS5ub25NZXNoVGltZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgY2hlY2tOb25NZXNoVGhyZXNob2xkKCk6IHZvaWQge1xuICAgICAgICBTcGluZS5kZXN0cm95Tm9uTWVzaFRpbWVyKCk7XG4gICAgICAgIFNwaW5lLm5vbk1lc2hUaW1lciA9IFNwaW5lLmdhbWUudGltZS5ldmVudHMucmVwZWF0KDUwMCwgMTAsIFNwaW5lLmNoZWNrQXV0b01lc2hGUFMsIFNwaW5lKTtcbiAgICAgICAgU3BpbmUuZ2FtZS50aW1lLmV2ZW50cy5hZGQoNTUwMCwgU3BpbmUuZGlzYWJsZUFkdmFuY2VkVGltaW5nLCBTcGluZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjaGVja0F1dG9NZXNoRlBTKCk6IHZvaWQge1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZ2FtZS50aW1lLmZwcywgU3BpbmUuTk9OX01FU0hfRlBTKVxuICAgICAgICBpZiAoU3BpbmUuZ2FtZS50aW1lLmZwcyA8IFNwaW5lLk5PTl9NRVNIX0ZQUykge1xuICAgICAgICAgICAgU3BpbmUuZGVzdHJveU5vbk1lc2hUaW1lcigpO1xuICAgICAgICAgICAgU3BpbmUuTE9BRF9OT05fTUVTSCA9IHRydWU7XG4gICAgICAgICAgICBTcGluZS5vbk5vbk1lc2hGUFMuZGlzcGF0Y2goKTtcbiAgICAgICAgICAgIFNwaW5lLmRpc2FibGVBZHZhbmNlZFRpbWluZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBkaXNhYmxlQWR2YW5jZWRUaW1pbmcoKTogdm9pZCB7XG4gICAgICAgIFNwaW5lLmdhbWUudGltZS5hZHZhbmNlZFRpbWluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc2V0QXV0b01lc2goZW5hYmxlZDogYm9vbGVhbiA9IHRydWUsIG5vbk1lc2hTdWZmaXg6IHN0cmluZyA9IFNwaW5lLkRFRkFVTFRfTk9OX01FU0hfU1VGRklYLCBub25NZXNoRlBTOiBudW1iZXIgPSBTcGluZS5ERUZBVUxUX05PTl9NRVNIX0ZQUykge1xuICAgICAgICBTcGluZS5BVVRPX01FU0ggPSBlbmFibGVkO1xuICAgICAgICBTcGluZS5OT05fTUVTSF9TVUZGSVggPSBub25NZXNoU3VmZml4O1xuICAgICAgICBTcGluZS5OT05fTUVTSF9GUFMgPSBub25NZXNoRlBTO1xuICAgIH1cbn0iLCJpbXBvcnQge0FwcGxpY2F0aW9ufSBmcm9tICcuLi9hcHBsaWNhdGlvbic7XG5pbXBvcnQge0dhbWV9IGZyb20gJy4uL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgU3BpbmUyIGV4dGVuZHMgUElYSS5zcGluZS5TcGluZSB7XG4gICAgcHVibGljIHN0YXRpYyBERUZBVUxUX1NQRUVEOiBudW1iZXIgPSAwLjAxNjc7Ly8gNjAgZnBzO1xuICAgIHB1YmxpYyBkZWJ1ZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBnYW1lOiBHYW1lO1xuICAgIHByaXZhdGUgX2NyZWF0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgb25DcmVhdGU6IFBoYXNlci5TaWduYWwgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuICAgIHB1YmxpYyBvbkFuaW1hdGlvbkNvbXBsZXRlOiBQaGFzZXIuU2lnbmFsID0gbnVsbDtcbiAgICBwdWJsaWMgb25NZXNoU3dhcDogUGhhc2VyLlNpZ25hbCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG5cbiAgICBwcm90ZWN0ZWQgX2NhblVwZGF0ZTogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJvdGVjdGVkIF9wYXVzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcm90ZWN0ZWQgX3NwZWVkOiBudW1iZXIgPSAxO1xuICAgIHByb3RlY3RlZCBfc2tlbGV0b25TY2FsZTogbnVtYmVyID0gMTtcblxuICAgIHByb3RlY3RlZCBfYm91bmRzT2Zmc2V0OiBQaGFzZXIuUG9pbnQgPSBuZXcgUGhhc2VyLlBvaW50KDAsIDApO1xuICAgIHByb3RlY3RlZCBfYm91bmRzV2lkdGhTY2FsZTogbnVtYmVyID0gMTtcbiAgICBwcm90ZWN0ZWQgX2JvdW5kc0hlaWdodFNjYWxlOiBudW1iZXIgPSAxO1xuICAgIHByb3RlY3RlZCBfY3VycmVudEJvdW5kczogUElYSS5SZWN0YW5nbGUgPSBuZXcgUElYSS5SZWN0YW5nbGUoKTtcblxuICAgIHByb3RlY3RlZCBfcGh5c2ljc09mZnNldDogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9ID0geyB4OiAwLCB5OiAwIH07XG4gICAgcHJvdGVjdGVkIF9waHlzaWNzRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIG5vbk1lc2hWZXJzaW9uOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXNzZXROYW1lOiBzdHJpbmcgPSAnJywgeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgcHVibGljIHNrZWxldG9uU2NhbGU6IG51bWJlciA9IDEpIHtcbiAgICAgICAgc3VwZXIoQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lLCB4LCB5LCBTcGluZTIuY3JlYXRlU3BpbmVEYXRhKFNwaW5lMi5MT0FEX05PTl9NRVNIID8gKGFzc2V0TmFtZSArIFNwaW5lMi5OT05fTUVTSF9TVUZGSVgpIDogYXNzZXROYW1lLCBza2VsZXRvblNjYWxlKSk7XG5cbiAgICAgICAgdGhpcy5fc2tlbGV0b25TY2FsZSA9IHNrZWxldG9uU2NhbGU7XG5cbiAgICAgICAgaWYgKFNwaW5lMi5MT0FEX05PTl9NRVNIKSB7XG4gICAgICAgICAgICB0aGlzLm5vbk1lc2hWZXJzaW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpbml0aWFsaXplIHN0YXRpY1xuICAgICAgICBTcGluZTIuaW5pdGlhbGl6ZSgpO1xuICAgICAgICBTcGluZTIub25Ob25NZXNoRlBTLmFkZE9uY2UodGhpcy5sb2FkTm9uTWVzaFZlcnNpb24sIHRoaXMpO1xuXG4gICAgICAgIHRoaXMubmFtZSA9IGFzc2V0TmFtZTtcbiAgICAgICAgdGhpcy5za2VsZXRvbi5zZXRUb1NldHVwUG9zZSgpO1xuICAgICAgICB0aGlzLl9jcmVhdGVCb3VuZHMoKTtcbiAgICAgICAgdGhpcy51cGRhdGUoMCk7XG4gICAgICAgIHRoaXMuYXV0b1VwZGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQW5pbWF0aW9uQ29tcGxldGUgPSB0aGlzLnN0YXRlLm9uQW5pbWF0aW9uQ29tcGxldGU7XG4gICAgICAgIHRoaXMuaGl0QXJlYSA9IG5ldyBQaGFzZXIuUmVjdGFuZ2xlKDAsIC0gdGhpcy5za2VsZXRvbi5kYXRhLmhlaWdodCwgdGhpcy5za2VsZXRvbi5kYXRhLndpZHRoLCB0aGlzLnNrZWxldG9uLmRhdGEuaGVpZ2h0KTtcbiAgICAgICAgLy90aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKDEwMCwgdGhpcy5fb25DcmVhdGVJbnRlcm5hbCwgdGhpcyk7XG5cbiAgICAgICAgaWYgKFNwaW5lMi5BVVRPX01FU0ggJiYgU3BpbmUyLkxPQURfTk9OX01FU0ggIT09IHRydWUpIHtcbiAgICAgICAgICAgIFNwaW5lMi5kZXRlY3RBdXRvTWVzaCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb25DcmVhdGVJbnRlcm5hbCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY3JlYXRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX2NyZWF0ZSgpO1xuICAgICAgICB0aGlzLm9uQ3JlYXRlLmRpc3BhdGNoKCk7XG4gICAgICAgIHRoaXMuX2NhblVwZGF0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9jcmVhdGUoKTogdm9pZCB7XG4gICAgICAgIC8vIHRvIG92ZXJyaWRlXG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2tlbGV0b24gPSBudWxsO1xuICAgICAgICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGF0ZURhdGEgPSBudWxsO1xuICAgICAgICB0aGlzLnNwaW5lRGF0YSA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMuc2xvdENvbnRhaW5lcnMgJiYgdGhpcy5zbG90Q29udGFpbmVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5zbG90Q29udGFpbmVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbG90Q29udGFpbmVycy5zaGlmdCgpLmRlc3Ryb3kodHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zbG90Q29udGFpbmVycyA9IG51bGw7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIgPSBTcGluZTIuREVGQVVMVF9TUEVFRCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2NyZWF0ZWQgJiYgdGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX29uQ3JlYXRlSW50ZXJuYWwoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fcGF1c2VkIHx8ICF0aGlzLl9jYW5VcGRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLnVwZGF0ZSh0aGlzLl9zcGVlZCAqIGR0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdFBoeXNpY3ModHlwZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHRoaXMuX2NyZWF0ZUJvdW5kcygpO1xuICAgICAgICBpZiAodHlwZSAhPSBQaGFzZXIuUGh5c2ljcy5BUkNBREUgJiZcbiAgICAgICAgICAgIHR5cGUgIT0gUGhhc2VyLlBoeXNpY3MuTklOSkEgJiZcbiAgICAgICAgICAgIHR5cGUgIT0gUGhhc2VyLlBoeXNpY3MuUDJKUylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0eXBlID09PSBQaGFzZXIuUGh5c2ljcy5BUkNBREUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGUodGhpcywgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuZW5hYmxlKHRoaXMsIHR5cGUpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9waHlzaWNzRW5hYmxlZCA9ICh0aGlzLmJvZHkgIT09IG51bGwpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9waHlzaWNzRW5hYmxlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzYWJsZVBoeXNpY3MoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3BoeXNpY3NFbmFibGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIGVuYWJsZVBoeXNpY3MoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3BoeXNpY3NFbmFibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZE5vbk1lc2hWZXJzaW9uKCk6IHZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLm5vbk1lc2hWZXJzaW9uID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8vIHNldHMgdGhlIG5vbk1lc2hWZXJzaW9uIGZsYWcgc28gdGhpcyBtZXRob2QgZG9lc24ndCBydW4gbW9yZSB0aGFuIG9uY2VcbiAgICAgICAgLy90aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub25NZXNoVmVyc2lvbiA9IHRydWU7XG4gICAgICAgIHRoaXMuYWxwaGEgPSAwO1xuICAgICAgICAvLyBzdG9yZSB0aGUgdHJhY2tzIGFuZCBzaWduYWxzXG4gICAgICAgIGNvbnN0IHRyYWNrcyA9IHRoaXMuc3RhdGUudHJhY2tzO1xuICAgICAgICBjb25zdCBzaWduYWw6IFBoYXNlci5TaWduYWwgPSB0aGlzLnN0YXRlLm9uQW5pbWF0aW9uQ29tcGxldGU7XG5cbiAgICAgICAgLy8gZGVzdHJveSB0aGUgc2xvdCBjb250YWluZXJzXG4gICAgICAgIHdoaWxlICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICg8UGhhc2VyLkdyb3VwPnRoaXMucmVtb3ZlQ2hpbGRBdCgwKSkuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlc2V0IHRoZSBzcGluZSBkYXRhXG4gICAgICAgIHRoaXMuc2V0dXAoU3BpbmUyLmNyZWF0ZVNwaW5lRGF0YSh0aGlzLm5hbWUgKyBTcGluZTIuTk9OX01FU0hfU1VGRklYLCB0aGlzLl9za2VsZXRvblNjYWxlKSk7XG4gICAgICAgIHRoaXMuc3RhdGUuYXBwbHkodGhpcy5za2VsZXRvbik7XG5cbiAgICAgICAgLy8gcmVzZXQgdGhlIHN0YXRlXG4gICAgICAgIHRoaXMuc3RhdGUudHJhY2tzID0gdHJhY2tzO1xuXG4gICAgICAgIC8vIHJlc2V0IHRoZSBzaWduYWxzXG4gICAgICAgIGlmIChzaWduYWwgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25BbmltYXRpb25Db21wbGV0ZS5yZW1vdmVBbGwoKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25BbmltYXRpb25Db21wbGV0ZS5kaXNwb3NlKCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9uQW5pbWF0aW9uQ29tcGxldGUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5vbkFuaW1hdGlvbkNvbXBsZXRlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25BbmltYXRpb25Db21wbGV0ZSA9IHNpZ25hbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25BbmltYXRpb25Db21wbGV0ZSA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbkFuaW1hdGlvbkNvbXBsZXRlID0gdGhpcy5zdGF0ZS5vbkFuaW1hdGlvbkNvbXBsZXRlO1xuXG4gICAgICAgIC8vIGZvcmNlIGFuIHVwZGF0ZVxuICAgICAgICAvL3RoaXMudXBkYXRlKCk7XG5cbiAgICAgICAgLy8gY2xlYXIgdGhlIG1lc2hlZCBzcGluZSBhc3NldHNcbiAgICAgICAgKDxHYW1lPnRoaXMuZ2FtZSkuYXNzZXQuY2xlYXJTcGluZUFzc2V0KHRoaXMubmFtZSk7XG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoMTAwLCAoKSA9PiB7IHRoaXMuYWxwaGEgPSAxIH0sIHRoaXMpO1xuXG4gICAgICAgIHRoaXMub25NZXNoU3dhcC5kaXNwYXRjaCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlU3BpbmVEYXRhKGFzc2V0TmFtZTogc3RyaW5nLCBza2VsZXRvblNjYWxlOiBudW1iZXIgPSAxKTogYW55IHtcbiAgICAgICAgY29uc3Qgc3BpbmUgPSBQSVhJLnNwaW5lO1xuICAgICAgICBjb25zdCBzcGluZUF0bGFzID0gbmV3IHNwaW5lLlNwaW5lUnVudGltZS5BdGxhcyhBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUuY2FjaGUuZ2V0VGV4dChhc3NldE5hbWUgKyAnLmF0bGFzJyksIHRoaXMuYXRsYXNDYWxsYmFja0Z1bmN0aW9uKTtcbiAgICAgICAgY29uc3Qgc3BpbmVKc29uUGFyc2VyID0gbmV3IHNwaW5lLlNwaW5lUnVudGltZS5Ta2VsZXRvbkpzb25QYXJzZXIobmV3IHNwaW5lLlNwaW5lUnVudGltZS5BdGxhc0F0dGFjaG1lbnRQYXJzZXIoc3BpbmVBdGxhcyksIHNrZWxldG9uU2NhbGUpO1xuICAgICAgICBjb25zdCBza2VsZXRvbkRhdGEgPSBzcGluZUpzb25QYXJzZXIucmVhZFNrZWxldG9uRGF0YShBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUuY2FjaGUuZ2V0SlNPTihhc3NldE5hbWUgKyAnLmpzb24nKSk7XG4gICAgICAgIHJldHVybiBza2VsZXRvbkRhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhdGxhc0NhbGxiYWNrRnVuY3Rpb24obGluZSwgY2FsbGJhY2spIHtcbiAgICAgICAgLy9jYWxsYmFjayhQSVhJLkJhc2VUZXh0dXJlLmZyb21JbWFnZSgnYXNzZXRzL3NwaW5lLycgKyBsaW5lKSk7XG4gICAgICAgIGNvbnN0IGxpbmVBcnIgPSBsaW5lLnNwbGl0KCdAJyArIEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZS5yZXNvbHV0aW9uICsgJ3gnKTtcbiAgICAgICAgY29uc3QgdXJsID0gbGluZUFyci5qb2luKCcnKTtcblxuICAgICAgICBjYWxsYmFjayhuZXcgUElYSS5CYXNlVGV4dHVyZShBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUuY2FjaGUuZ2V0SW1hZ2UodXJsKSwgUElYSS5zY2FsZU1vZGVzLkRFRkFVTFQpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHBhdXNlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdXNlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBhdXNlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9wYXVzZWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHNwZWVkKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zcGVlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHNwZWVkKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fc3BlZWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGJvdW5kc09mZnNldChvZmZzZXQ6IFBoYXNlci5Qb2ludCkge1xuICAgICAgICB0aGlzLl9ib3VuZHNPZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRCb3VuZHMgPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYm91bmRzT2Zmc2V0KCk6IFBoYXNlci5Qb2ludCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ib3VuZHNPZmZzZXQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBib3VuZHNXaWR0aFNjYWxlKHNjYWxlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fYm91bmRzV2lkdGhTY2FsZSA9IHNjYWxlO1xuICAgICAgICB0aGlzLl9jdXJyZW50Qm91bmRzID0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGJvdW5kc1dpZHRoU2NhbGUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvdW5kc1dpZHRoU2NhbGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBib3VuZHNIZWlnaHRTY2FsZShzY2FsZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2JvdW5kc0hlaWdodFNjYWxlID0gc2NhbGU7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRCb3VuZHMgPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYm91bmRzSGVpZ2h0U2NhbGUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvdW5kc0hlaWdodFNjYWxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRCb3VuZHMoKTogUElYSS5SZWN0YW5nbGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudEJvdW5kcyB8fCB0aGlzLl9jcmVhdGVCb3VuZHMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZUJvdW5kcygpOiBQSVhJLlJlY3RhbmdsZSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRCb3VuZHMgPSBuZXcgUElYSS5SZWN0YW5nbGUodGhpcy54ICsgdGhpcy5fYm91bmRzT2Zmc2V0LnggKiB0aGlzLnNjYWxlLngsIHRoaXMueSAtICh0aGlzLnNrZWxldG9uLmRhdGEuaGVpZ2h0ICogdGhpcy5zY2FsZS55KSArIHRoaXMuX2JvdW5kc09mZnNldC55ICogdGhpcy5zY2FsZS55LCB0aGlzLnNrZWxldG9uLmRhdGEud2lkdGggKiBNYXRoLmFicyh0aGlzLnNjYWxlLngpICogdGhpcy5ib3VuZHNXaWR0aFNjYWxlLCB0aGlzLnNrZWxldG9uLmRhdGEuaGVpZ2h0ICogTWF0aC5hYnModGhpcy5zY2FsZS55KSAqIHRoaXMuYm91bmRzSGVpZ2h0U2NhbGUpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50Qm91bmRzO1xuICAgIH1cblxuICAgIC8vIGFsc28gdXBkYXRlcyB0aGUgYm91bmRzXG4gICAgcHVibGljIHNldFNjYWxlKHg6IG51bWJlciA9IG51bGwsIHk6IG51bWJlciA9IG51bGwpIHtcbiAgICAgICAgaWYgKHggIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUueCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUueSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY3VycmVudEJvdW5kcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCb3VuZHMoKS53aWR0aDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCb3VuZHMoKS5oZWlnaHQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhcmNhZGVCb2R5KCk6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Cb2R5IHtcbiAgICAgICAgcmV0dXJuIDxQaGFzZXIuUGh5c2ljcy5BcmNhZGUuQm9keT50aGlzLmJvZHk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBjcmVhdGVkKCk6IGJvb2xlYW4geyBcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZWQ7XG4gICAgfVxuXG4gICAgLy8gc3RhdGljIG1ldGhvZHNcbiAgICAvLyBhdXRvIG1lc2ggLyBub24tbWVzaCBhc3NldCBsb2FkaW5nXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBJTklUSUFMSVpFRDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCBzdGF0aWMgZ2FtZTogR2FtZSA9IG51bGw7XG4gICAgcHJvdGVjdGVkIHN0YXRpYyBub25NZXNoVGltZXI6IFBoYXNlci5UaW1lckV2ZW50ID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgc3RhdGljIG9uTm9uTWVzaEZQUzogUGhhc2VyLlNpZ25hbDtcblxuICAgIHB1YmxpYyBzdGF0aWMgTE9BRF9OT05fTUVTSDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIHN0YXRpYyBBVVRPX01FU0g6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHB1YmxpYyBzdGF0aWMgREVGQVVMVF9OT05fTUVTSF9TVUZGSVg6IHN0cmluZyA9ICdfbm9tZXNoJztcbiAgICBwdWJsaWMgc3RhdGljIE5PTl9NRVNIX1NVRkZJWDogc3RyaW5nID0gbnVsbDtcblxuICAgIHB1YmxpYyBzdGF0aWMgREVGQVVMVF9OT05fTUVTSF9GUFM6IG51bWJlciA9IDM1O1xuICAgIHB1YmxpYyBzdGF0aWMgTk9OX01FU0hfRlBTOiBudW1iZXIgPSBudWxsO1xuXG4gICAgcHVibGljIHN0YXRpYyBpbml0aWFsaXplKCk6IHZvaWQge1xuICAgICAgICBpZiAoU3BpbmUyLklOSVRJQUxJWkVEKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgU3BpbmUyLklOSVRJQUxJWkVEID0gdHJ1ZTtcbiAgICAgICAgU3BpbmUyLmdhbWUgPSBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWU7XG4gICAgICAgIFNwaW5lMi5vbk5vbk1lc2hGUFMgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZGV0ZWN0QXV0b01lc2goKTogdm9pZCB7XG4gICAgICAgIFNwaW5lMi5nYW1lLnRpbWUuYWR2YW5jZWRUaW1pbmcgPSB0cnVlO1xuICAgICAgICBTcGluZTIuZ2FtZS50aW1lLmV2ZW50cy5hZGQoMjAwMCwgU3BpbmUyLmNoZWNrTm9uTWVzaFRocmVzaG9sZCwgU3BpbmUyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGRlc3Ryb3lOb25NZXNoVGltZXIoKTogdm9pZCB7XG4gICAgICAgIGlmIChTcGluZTIubm9uTWVzaFRpbWVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICBTcGluZTIuZ2FtZS50aW1lLmV2ZW50cy5yZW1vdmUoU3BpbmUyLm5vbk1lc2hUaW1lcik7XG4gICAgICAgICAgICBTcGluZTIubm9uTWVzaFRpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGNoZWNrTm9uTWVzaFRocmVzaG9sZCgpOiB2b2lkIHtcbiAgICAgICAgU3BpbmUyLmRlc3Ryb3lOb25NZXNoVGltZXIoKTtcbiAgICAgICAgU3BpbmUyLm5vbk1lc2hUaW1lciA9IFNwaW5lMi5nYW1lLnRpbWUuZXZlbnRzLnJlcGVhdCg1MDAsIDEwLCBTcGluZTIuY2hlY2tBdXRvTWVzaEZQUywgU3BpbmUyKTtcbiAgICAgICAgU3BpbmUyLmdhbWUudGltZS5ldmVudHMuYWRkKDU1MDAsIFNwaW5lMi5kaXNhYmxlQWR2YW5jZWRUaW1pbmcsIFNwaW5lMik7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjaGVja0F1dG9NZXNoRlBTKCk6IHZvaWQge1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZ2FtZS50aW1lLmZwcywgU3BpbmUyLk5PTl9NRVNIX0ZQUylcbiAgICAgICAgaWYgKFNwaW5lMi5nYW1lLnRpbWUuZnBzIDwgU3BpbmUyLk5PTl9NRVNIX0ZQUykge1xuICAgICAgICAgICAgU3BpbmUyLmRlc3Ryb3lOb25NZXNoVGltZXIoKTtcbiAgICAgICAgICAgIFNwaW5lMi5MT0FEX05PTl9NRVNIID0gdHJ1ZTtcbiAgICAgICAgICAgIFNwaW5lMi5vbk5vbk1lc2hGUFMuZGlzcGF0Y2goKTtcbiAgICAgICAgICAgIFNwaW5lMi5kaXNhYmxlQWR2YW5jZWRUaW1pbmcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZGlzYWJsZUFkdmFuY2VkVGltaW5nKCk6IHZvaWQge1xuICAgICAgICBTcGluZTIuZ2FtZS50aW1lLmFkdmFuY2VkVGltaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBzZXRBdXRvTWVzaChlbmFibGVkOiBib29sZWFuID0gdHJ1ZSwgbm9uTWVzaFN1ZmZpeDogc3RyaW5nID0gU3BpbmUyLkRFRkFVTFRfTk9OX01FU0hfU1VGRklYLCBub25NZXNoRlBTOiBudW1iZXIgPSBTcGluZTIuREVGQVVMVF9OT05fTUVTSF9GUFMpIHtcbiAgICAgICAgU3BpbmUyLkFVVE9fTUVTSCA9IGVuYWJsZWQ7XG4gICAgICAgIFNwaW5lMi5OT05fTUVTSF9TVUZGSVggPSBub25NZXNoU3VmZml4O1xuICAgICAgICBTcGluZTIuTk9OX01FU0hfRlBTID0gbm9uTWVzaEZQUztcbiAgICB9XG59IiwiaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xuaW1wb3J0IHtHYW1lfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7RGV2aWNlfSBmcm9tICcuLi91dGlscyc7XG5cbi8qKlxuICogVGV4dFxuICovXG5leHBvcnQgY2xhc3MgVGV4dCBleHRlbmRzIFBoYXNlci5UZXh0IHtcbiAgICAvLyBjb25zdGFudHNcbiAgICBwdWJsaWMgc3RhdGljIERFRkFVTFRfRk9OVF9TSVpFOiBudW1iZXIgPSAxMjtcbiAgICBwdWJsaWMgc3RhdGljIERFRkFVTFRfRk9OVF9DT0xPUjogc3RyaW5nID0gXCIjMDAwMDAwXCI7XG4gICAgcHVibGljIHN0YXRpYyBERUZBVUxUX0ZPTlQ6IHN0cmluZyA9IFwiSGVsdmV0aWNhIE5ldWUsIEFyaWFsXCI7XG4gICAgcHVibGljIHN0YXRpYyBHTE9CQUxfUEFERElOR19YOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBzdGF0aWMgR0xPQkFMX1BBRERJTkdfWTogbnVtYmVyID0gMDtcblxuICAgIHB1YmxpYyBnYW1lOiBHYW1lO1xuICAgIHB1YmxpYyBzdHlsZTogYW55O1xuICAgIHB1YmxpYyBvbkFuaW1hdGlvbkNvbXBsZXRlOiBQaGFzZXIuU2lnbmFsID0gbmV3IFBoYXNlci5TaWduYWwoKTtcblxuICAgIHByb3RlY3RlZCBfY2FuVXBkYXRlID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIF9yZXBlYXRUaW1lcjogUGhhc2VyLlRpbWVyRXZlbnQ7XG4gICAgcHJvdGVjdGVkIF9kZWxheVRpbWVyOiBQaGFzZXIuVGltZXJFdmVudDtcbiAgICBwcm90ZWN0ZWQgX2xvd2VyY2FzZVRleHQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgX2xldHRlclRpbWU6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX3RleHRMZW5ndGg6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX3RleHRUb0FuaW1hdGU6IHN0cmluZ1tdID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgdGV4dDogc3RyaW5nID0gXCJcIiwgZm9udE5hbWU/OiBzdHJpbmcsIGZvbnRTaXplOiBudW1iZXIgPSBUZXh0LkRFRkFVTFRfRk9OVF9TSVpFLCBmb250Q29sb3I6IHN0cmluZyA9IFRleHQuREVGQVVMVF9GT05UX0NPTE9SLCBmb250QWxpZ246IHN0cmluZyA9ICdsZWZ0Jywgd29yZFdyYXA6IGJvb2xlYW4gPSBmYWxzZSwgd2lkdGg6IG51bWJlciA9IDAsIHB1YmxpYyBsaW5lU3BhY2luZzogbnVtYmVyID0gMCwgc2V0dGluZ3M6IE9iamVjdCA9IG51bGwpIHtcbiAgICAgICAgc3VwZXIoQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lLFxuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHksXG4gICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgVGV4dC5fYWRkU2V0dGluZ3Moe1xuICAgICAgICAgICAgICAgIGZvbnQ6IGZvbnRTaXplICsgJ3B4ICcgKyBmb250TmFtZSxcbiAgICAgICAgICAgICAgICBmaWxsOiBmb250Q29sb3IsXG4gICAgICAgICAgICAgICAgYWxpZ246IGZvbnRBbGlnbixcbiAgICAgICAgICAgICAgICB3b3JkV3JhcDogd29yZFdyYXAsXG4gICAgICAgICAgICAgICAgd29yZFdyYXBXaWR0aDogd2lkdGhcbiAgICAgICAgICAgIH0sIHNldHRpbmdzKVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQucmVwbGFjZSgvJy9nLCBcIlxcJ1wiKTtcbiAgICAgICAgdGhpcy5fbG93ZXJjYXNlVGV4dCA9IHRoaXMudGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB0aGlzLnNldFJlc29sdXRpb24oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZUZyb21EYXRhKGRhdGE6IGFueSk6IFRleHQge1xuICAgICAgICBsZXQgc2VsZjogVGV4dCA9IG5ldyBUZXh0KGRhdGEucG9zaXRpb24ueCwgZGF0YS5wb3NpdGlvbi55LCBkYXRhLmNvcHksIGRhdGEuZm9udE5hbWUsIGRhdGEuZm9udFNpemUsICcjJyArIGRhdGEuZm9udENvbG9yLCBkYXRhLmFsaWdubWVudCwgZGF0YS53cmFwV2lkdGggPiAwLCBkYXRhLndyYXBXaWR0aCA+IDAgPyBkYXRhLndyYXBXaWR0aCA6IG51bGwsIGRhdGEuc3BhY2luZyk7XG4gICAgICAgIHNlbGYubmFtZSA9IGRhdGEubmFtZTtcbiAgICAgICAgaWYgKGRhdGEuc3Ryb2tlICE9IFwiXCIpIHtcbiAgICAgICAgICAgIHNlbGYuc3Ryb2tlID0gZGF0YS5zdHJva2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEuc2hhZG93Q29sb3IpIHtcbiAgICAgICAgICAgIHNlbGYuc2V0U2hhZG93KGRhdGEuc2hhZG93WCwgZGF0YS5zaGFkb3dZLCBkYXRhLnNoYWRvd0NvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5zY2FsZSkge1xuICAgICAgICAgICAgc2VsZi5zY2FsZS5zZXRUbyhkYXRhLnNjYWxlLngsIGRhdGEuc2NhbGUueSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEuYW5jaG9yKSB7XG4gICAgICAgICAgICBzZWxmLnBpdm90ID0gbmV3IFBoYXNlci5Qb2ludChkYXRhLmFuY2hvci54LCBkYXRhLmFuY2hvci55KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgc3dpdGNoIChkYXRhLmFsaWdubWVudCkge1xuICAgICAgICAgICAgY2FzZSAnY2VudGVyJzpcbiAgICAgICAgICAgICAgICBzZWxmLnggLT0gc2VsZi5yZWFsV2lkdGggKiAwLjU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgIHNlbGYueCAtPSBzZWxmLnJlYWxXaWR0aDsgICAgICAgICBcbiAgICAgICAgICAgICAgICBicmVhazsgICAgXG4gICAgICAgIH1cbiAgICAgICAgc2VsZi54ID0gTWF0aC5yb3VuZChzZWxmLngpO1xuICAgICAgICBzZWxmLnkgPSBNYXRoLnJvdW5kKHNlbGYueSk7XG4gICAgICAgIHNlbGYuYWxwaGEgPSBkYXRhLmFscGhhID8gZGF0YS5hbHBoYSA6IDE7XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3NpZ25QcmVmYWIob2JqZWN0OiBhbnkpIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgdGhpcyB0byBoYW5kbGUgYXNzaWdubWVudCBvZiBjaGlsZCBwcmVmYWJzLlxuICAgIH1cbiAgICBcbiAgICAvLyBQaGFzZXIuVGV4dCBvdmVycmlkZXNcbiAgICBwdWJsaWMgc2V0VGV4dCh0ZXh0OiBzdHJpbmcpOiBQaGFzZXIuVGV4dCB7XG4gICAgICAgIHN1cGVyLnNldFRleHQodGV4dCk7XG5cbiAgICAgICAgdGhpcy5fbG93ZXJjYXNlVGV4dCA9IHRoaXMudGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB0aGlzLnNldFJlc29sdXRpb24oKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0UmVzb2x1dGlvbigpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmdhbWUgfHwgIURldmljZS5jb2Nvb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChEZXZpY2UuY29jb29uKSB7XG4gICAgICAgICAgICAvLyBmaXggZm9yIGZvbnRzIGxvb2tpbmcgcmVhbGx5IGJsdXJyeSBpbiBjb2Nvb25KU1xuICAgICAgICAgICAgdGhpcy5yZXNvbHV0aW9uID0gdGhpcy5nYW1lLnJlc29sdXRpb24gKiB0aGlzLmdhbWUucmVzb2x1dGlvbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1x0XHRcbiAgICAvKipcbiAgICAqIHN0YXJ0cyB0aGUgdGV4dCBhbmltYXRpb25cbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJvdGVjdGVkIF9zdGFydFRleHRBbmltYXRpb24oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NhblVwZGF0ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX3JlcGVhdFRpbWVyID0gdGhpcy5nYW1lLnRpbWUuZXZlbnRzLnJlcGVhdCh0aGlzLl9sZXR0ZXJUaW1lICogMTAwLCB0aGlzLl90ZXh0TGVuZ3RoLCB0aGlzLl91cGRhdGVUZXh0QW5pbWF0aW9uLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3VwZGF0ZVRleHRBbmltYXRpb24oKSB7XG4gICAgICAgIGlmICghdGhpcy5fY2FuVXBkYXRlIHx8ICF0aGlzLl90ZXh0VG9BbmltYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5fdGV4dExlbmd0aCAtIHRoaXMuX3RleHRUb0FuaW1hdGUubGVuZ3RoO1xuICAgICAgICB0aGlzLmFkZENvbG9yKHRoaXMuc3R5bGUuZmlsbCwgaW5kZXgpO1xuICAgICAgICB0aGlzLmFkZENvbG9yKCdyZ2JhKDAsMCwwLDApJywgaW5kZXggKyAxKTtcbiAgICAgICAgdGhpcy5fdGV4dFRvQW5pbWF0ZS5zaGlmdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLl90ZXh0VG9BbmltYXRlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5vbkFuaW1hdGlvbkNvbXBsZXRlLmRpc3BhdGNoKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuICAgIC8qKlxuICAgICogc2V0cyB0aGUgY29sb3Igb2YgdGhlIGVudGlyZSB0ZXh0XG4gICAgKiBAcGFyYW0ge1N0cmluZ30gY29sb3IgY3NzIGNvbG9yIHN0cmluZyAoc3VjaCBhcyBcIiNmZjAwMDBcIilcbiAgICAqIEByZXR1cm4ge0Rpam9uLlVJVGV4dC5oaWdobGlnaHRQaHJhc2V9IGNhbGxzIHRoZSBoaWdobGlnaHRQaHJhc2UgbWV0aG9kIGFuZCBcImhpZ2hsaWdodHNcIiB0aGUgZW50aXJlIHRleHQgc3RyaW5nXG4gICAgKi9cbiAgICBwdWJsaWMgc2V0Q29sb3IoY29sb3I6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5oaWdobGlnaHRQaHJhc2UodGhpcy50ZXh0LCBjb2xvciwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogcmVzZXRzIHRoZSBjb2xvciB0byB0aGUgb3JpZ2luYWwgZmlsbCBjb2xvclxuICAgICogQHJldHVybiB7RGlqb24uVUlUZXh0LmhpZ2hsaWdodFBocmFzZX0gY2FsbHMgdGhlIGhpZ2hsaWdodFBocmFzZSBtZXRob2QgYW5kIFwiaGlnaGxpZ2h0c1wiIHRoZSBlbnRpcmUgdGV4dCBzdHJpbmdcbiAgICAqL1xuICAgIHB1YmxpYyByZXNldENvbG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oaWdobGlnaHRQaHJhc2UodGhpcy50ZXh0LCB0aGlzLnN0eWxlLmZpbGwsIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGNoYW5nZXMgdGhlIGNvbG91ciBvZiBhIHBvcnRpb24gb2YgdGhlIHRleHRcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gcGhyYXNlICAgICAgICB0aGUgcGhyYXNlIHdpdGhpbiB0aGUgdGV4dCB0byBjaGFuZ2VcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gY29sb3IgICAgICAgICBjc3MgY29sb3Igc3RyaW5nIChzdWNoIGFzIFwiI2ZmMDAwMFwiKVxuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gW2Nhc2VTZW5zaXRpdmUgPSBmYWxzZV0gd2hldGhlciB0aGUgc2VhcmNoIGZvciB0aGUgcGhyYXNlIHdpdGhpbiB0aGlzIHRleHQgc2hvdWxkIGJlIGNhc2Ugc2Vuc2l0aXZlXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIGhpZ2hsaWdodFBocmFzZShwaHJhc2U6IHN0cmluZywgY29sb3I6IHN0cmluZywgY2FzZVNlbnNpdGl2ZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGxldCB0ZXh0ID0gY2FzZVNlbnNpdGl2ZSA/IHRoaXMudGV4dCA6IHRoaXMuX2xvd2VyY2FzZVRleHQ7XG5cbiAgICAgICAgcGhyYXNlID0gY2FzZVNlbnNpdGl2ZSA/IHBocmFzZSA6IHBocmFzZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGxldCBsZW4gPSBwaHJhc2UubGVuZ3RoO1xuXG4gICAgICAgIGxldCBzdGFydEluZGV4ID0gdGV4dC5pbmRleE9mKHBocmFzZSk7XG4gICAgICAgIGxldCBlbmRJbmRleCA9IHN0YXJ0SW5kZXggKyBsZW47XG5cbiAgICAgICAgd2hpbGUgKHN0YXJ0SW5kZXggPD0gZW5kSW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQ29sb3IoY29sb3IsIHN0YXJ0SW5kZXgpO1xuICAgICAgICAgICAgc3RhcnRJbmRleCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGRDb2xvcih0aGlzLnN0eWxlLmZpbGwsIGVuZEluZGV4KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICogYW5pbWF0ZXMgdGhlIHRleHQgaW4gYnkgcmV2ZWFsaW5nIGVhY2ggY2hhcmFjdGVyIGluIHNlcXVlbmNlXG4gICAgKiBAcGFyYW0gIHtOdW1iZXJ9IFtsZXR0ZXJUaW1lID0gMC4xXSAgdGhlIHRpbWUgKGluIHNlY29uZHMpIGJldHdlZW4gZWFjaCBjaGFyYWN0ZXJcbiAgICAqIEBwYXJhbSAge2ludH0gW2RlbGF5ID0gMF0gICAgICAgICAgICB0aGUgZGVsYXkgYmVmb3JlIHN0YXJ0aW5nIHRoZSBhbmltYXRpb25cbiAgICAqL1xuICAgIHB1YmxpYyBhbmltYXRlKGxldHRlclRpbWU6IG51bWJlciA9IDAuMSwgZGVsYXk6IG51bWJlciA9IDApIHtcbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLnJlbW92ZSh0aGlzLl9kZWxheVRpbWVyKTtcbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLnJlbW92ZSh0aGlzLl9yZXBlYXRUaW1lcik7XG5cbiAgICAgICAgdGhpcy5fbGV0dGVyVGltZSA9IGxldHRlclRpbWU7XG4gICAgICAgIHRoaXMuX3RleHRMZW5ndGggPSB0aGlzLnRleHQubGVuZ3RoO1xuICAgICAgICB0aGlzLl90ZXh0VG9BbmltYXRlID0gdGhpcy50ZXh0LnNwbGl0KCcnKTtcblxuICAgICAgICB2YXIgc3RhcnRJbmRleCA9IDA7XG4gICAgICAgIHZhciBlbmRJbmRleCA9IHRoaXMuX3RleHRMZW5ndGg7XG5cbiAgICAgICAgd2hpbGUgKHN0YXJ0SW5kZXggPD0gZW5kSW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQ29sb3IoJ3JnYmEoMCwwLDAsMCknLCBzdGFydEluZGV4KTtcbiAgICAgICAgICAgIHN0YXJ0SW5kZXgrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2RlbGF5VGltZXIgPSB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKGRlbGF5ICogUGhhc2VyLlRpbWVyLlNFQ09ORCwgdGhpcy5fc3RhcnRUZXh0QW5pbWF0aW9uLCB0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHN0b3BzIHRoZSB0ZXh0IGFuaW1hdGlvbiBhbmQgY2xlYXJzIHRoZSB0aW1lcnNcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgc3RvcEFuaW1hdGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fY2FuVXBkYXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3RleHRUb0FuaW1hdGUgPSBudWxsO1xuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMucmVtb3ZlKHRoaXMuX2RlbGF5VGltZXIpO1xuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMucmVtb3ZlKHRoaXMuX3JlcGVhdFRpbWVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHJvdW5kcyB0aGUgcG9zaXRpb25cbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgcm91bmRQaXhlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXQoTWF0aC5yb3VuZCh0aGlzLngpLCBNYXRoLnJvdW5kKHRoaXMueSkpO1xuICAgIH1cblxuICAgIC8vIHN0YXRpYyBtZXRob2RzXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2FkZFNldHRpbmdzKG9iajogT2JqZWN0LCBzZXR0aW5nczogT2JqZWN0KTogT2JqZWN0IHtcbiAgICAgICAgaWYgKCFzZXR0aW5ncylcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG5cbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBzZXR0aW5ncykge1xuICAgICAgICAgICAgaWYgKHNldHRpbmdzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgICAgICAgb2JqW3Byb3BdID0gc2V0dGluZ3NbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGdldCByZWFsSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjYWxlLnkgKiB0aGlzLnRleHR1cmUuZnJhbWUuaGVpZ2h0IC8gdGhpcy5nYW1lLnJlc29sdXRpb247XG4gICAgfVxuXG4gICAgZ2V0IHJlYWxXaWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2FsZS54ICogdGhpcy50ZXh0dXJlLmZyYW1lLndpZHRoIC8gdGhpcy5nYW1lLnJlc29sdXRpb247XG4gICAgfVxufSIsImltcG9ydCB7QXBwbGljYXRpb259IGZyb20gJy4uL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7VGV4dHVyZXN9IGZyb20gJy4vVGV4dHVyZXMnO1xuaW1wb3J0IHtUZXh0fSBmcm9tICcuLi9kaXNwbGF5JztcblxuZXhwb3J0IGNsYXNzIFBsYWNlaG9sZGVycyB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IGdhbWUoKTogUGhhc2VyLkdhbWUge1xuICAgICAgICByZXR1cm4gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbWFnZSh4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCB0ZXh0dXJlOiBhbnksIG5hbWU6IHN0cmluZyA9IFwiXCIpOiBQaGFzZXIuSW1hZ2Uge1xuICAgICAgICBjb25zdCBpbWFnZUluc3RhbmNlID0gbmV3IFBoYXNlci5JbWFnZShQbGFjZWhvbGRlcnMuZ2FtZSwgeCwgeSwgdGV4dHVyZSk7XG4gICAgICAgIGltYWdlSW5zdGFuY2UubmFtZSA9IG5hbWU7XG4gICAgICAgIHJldHVybiBpbWFnZUluc3RhbmNlO1xuICAgIH1cblxuICAgIHN0YXRpYyBidXR0b24oeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgd2lkdGg6IG51bWJlciA9IDEwMCwgaGVpZ2h0OiBudW1iZXIgPSA1MCwgYXV0b1NpemU6IGJvb2xlYW4gPSBmYWxzZSwgdGV4dDogc3RyaW5nID0gJ2J1dHRvbicsIGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGwsIGNhbGxiYWNrQ29udGV4dDogYW55ID0gbnVsbCwgZGVmYXVsdENvbG9yOiBudW1iZXIgPSAweGZmZmZmZiwgb3ZlckNvbG9yOiBudW1iZXIgPSAweGZmMDAwMCwgZG93bkNvbG9yOiBudW1iZXIgPSAweDAwZmYwMCk6IFBoYXNlci5TcHJpdGUge1xuICAgICAgICBjb25zdCBzcHJpdGU6IFBoYXNlci5TcHJpdGUgPSBuZXcgUGhhc2VyLlNwcml0ZShQbGFjZWhvbGRlcnMuZ2FtZSwgeCwgeSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSB0ZXh0IGluc3RhbmNlIHdpdGggYW4gYXV0byBzaXplIG9mIDI1IG9yIDYwJSBvZiB0aGUgaGVpZ2h0IHBhc3NlZCBpbi5cbiAgICAgICAgY29uc3QgdGV4dEluc3RhbmNlOiBUZXh0ID0gbmV3IFRleHQod2lkdGggKiAwLjUsIGhlaWdodCAqIDAuNTUsIFwiIFwiICsgdGV4dCArIFwiIFwiLCAnQXJpYWwnLCBhdXRvU2l6ZSA/IDI1IDogaGVpZ2h0ICogMC42LCAnIzAwMDAwMCcpO1xuICAgICAgICB0ZXh0SW5zdGFuY2UuY2VudGVyUGl2b3QoKTtcbiAgICAgICAgdGV4dEluc3RhbmNlLm5hbWUgPSBcIkxhYmVsXCI7XG5cbiAgICAgICAgaWYgKGF1dG9TaXplKSB7XG4gICAgICAgICAgICAvLyBVc2UgYSBwYWRkaW5nIG9mIDEwXG4gICAgICAgICAgICB3aWR0aCA9IHRleHRJbnN0YW5jZS5yZWFsV2lkdGggKyAxMDtcbiAgICAgICAgICAgIGhlaWdodCA9IHRleHRJbnN0YW5jZS5yZWFsSGVpZ2h0ICsgMTA7XG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHRleHQgcG9zaXRpb25cbiAgICAgICAgICAgIHRleHRJbnN0YW5jZS5wb3NpdGlvbi5zZXQod2lkdGggKiAwLjUsIGhlaWdodCAqIDAuNTUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXBJbWFnZTogUGhhc2VyLkltYWdlID0gUGxhY2Vob2xkZXJzLmltYWdlKDAsIDAsIFRleHR1cmVzLnJvdW5kZWRSZWN0KHdpZHRoLCBoZWlnaHQsIDEwLCBkZWZhdWx0Q29sb3IpLCBcIlVwXCIpO1xuICAgICAgICBjb25zdCBvdmVySW1hZ2U6IFBoYXNlci5JbWFnZSA9IFBsYWNlaG9sZGVycy5pbWFnZSgwLCAwLCBUZXh0dXJlcy5yb3VuZGVkUmVjdCh3aWR0aCwgaGVpZ2h0LCAxMCwgb3ZlckNvbG9yKSwgXCJPdmVyXCIpO1xuICAgICAgICBjb25zdCBkb3duSW1hZ2U6IFBoYXNlci5JbWFnZSA9IFBsYWNlaG9sZGVycy5pbWFnZSgwLCAwLCBUZXh0dXJlcy5yb3VuZGVkUmVjdCh3aWR0aCwgaGVpZ2h0LCAxMCwgZG93bkNvbG9yKSwgXCJEb3duXCIpO1xuXG5cbiAgICAgICAgb3ZlckltYWdlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgZG93bkltYWdlLnZpc2libGUgPSBmYWxzZTtcblxuICAgICAgICBzcHJpdGUuYWRkQ2hpbGQodXBJbWFnZSk7XG4gICAgICAgIHNwcml0ZS5hZGRDaGlsZChvdmVySW1hZ2UpO1xuICAgICAgICBzcHJpdGUuYWRkQ2hpbGQoZG93bkltYWdlKTtcbiAgICAgICAgc3ByaXRlLmFkZENoaWxkKHRleHRJbnN0YW5jZSk7XG5cbiAgICAgICAgc3ByaXRlLmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHNwcml0ZS5pbnB1dC51c2VIYW5kQ3Vyc29yID0gdHJ1ZTtcblxuICAgICAgICBzcHJpdGUuZXZlbnRzLm9uSW5wdXRVcC5hZGQoKCkgPT4ge1xuICAgICAgICAgICAgZG93bkltYWdlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIG92ZXJJbWFnZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB1cEltYWdlLnZpc2libGUgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGNhbGxiYWNrQ29udGV4dCwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNwcml0ZS5ldmVudHMub25JbnB1dERvd24uYWRkKCgpID0+IHtcbiAgICAgICAgICAgIGRvd25JbWFnZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIG92ZXJJbWFnZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB1cEltYWdlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3ByaXRlLmV2ZW50cy5vbklucHV0T3Zlci5hZGQoKCkgPT4ge1xuICAgICAgICAgICAgZG93bkltYWdlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIG92ZXJJbWFnZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHVwSW1hZ2UudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICBzcHJpdGUuZXZlbnRzLm9uSW5wdXRPdXQuYWRkKCgpID0+IHtcbiAgICAgICAgICAgIGRvd25JbWFnZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBvdmVySW1hZ2UudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgdXBJbWFnZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3ByaXRlLmdldEJvdW5kcyA9IGZ1bmN0aW9uKCk6IFBJWEkuUmVjdGFuZ2xlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUElYSS5SZWN0YW5nbGUoMCwgMCwgdXBJbWFnZS53aWR0aCwgdXBJbWFnZS5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzcHJpdGU7XG4gICAgfVxufSIsImltcG9ydCB7QXBwbGljYXRpb259IGZyb20gJy4uL2FwcGxpY2F0aW9uJztcblxuZXhwb3J0IGNsYXNzIFRpbWUge1xuICAgIHB1YmxpYyBzdGF0aWMgZGVsYXllZENhbGwoZGVsYXlJbk1pbGxpc2Vjb25kczogbnVtYmVyLCBjYWxsYmFjazogRnVuY3Rpb24sIGNhbGxiYWNrQ29udGV4dDogYW55LCAuLi5wYXJhbXMpIHtcbiAgICAgICAgaWYgKHBhcmFtcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwYXJhbXMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBwYXJhbXMudW5zaGlmdChkZWxheUluTWlsbGlzZWNvbmRzLCBjYWxsYmFjaywgY2FsbGJhY2tDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lLnRpbWUuZXZlbnRzLmFkZC5hcHBseShBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUudGltZS5ldmVudHMsIHBhcmFtcyk7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBVdGlsIHsgXG4gICAgcHVibGljIHN0YXRpYyBpc051bWJlcih2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoK3ZhbHVlID09PSArdmFsdWUpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBcHBsaWNhdGlvbiB9IGZyb20gJy4uL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7IEdhbWUgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IEdyb3VwLCBUZXh0IH0gZnJvbSAnLi4vZGlzcGxheSc7XG5pbXBvcnQgeyBQbGFjZWhvbGRlcnMsIFRleHR1cmVzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqICBMb2cgd2lsbCB3cml0ZSB0byB0aGUgc3RhbmRhcmQgY29uc29sZSBhcyB3ZWxsIGFzIGEgdmlzdWFsIG9uZSBhbmQgaGFuZGxlIHNob3dpbmcgYW5kIGhpZGluZyBpdC5cbiAqICBAYXV0aG9yIEdhbGVuIE1hbnVlbFxuICovXG5leHBvcnQgY2xhc3MgTG9nIHtcbiAgICBwcml2YXRlIHN0YXRpYyBNQVhfTE9HX0xJTkVTOiBudW1iZXIgPSAyMjtcbiAgICBwcml2YXRlIHN0YXRpYyBMSU5FX1NQQUNJTkc6IG51bWJlciA9IDU7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBzdGF0aWNfbG9nTGluZXM6IHN0cmluZ1tdID0gbnVsbDtcbiAgICBwcml2YXRlIHN0YXRpYyBzdGF0aWNfbG9nTGluZXNUZXh0OiBUZXh0W10gPSBudWxsO1xuICAgIHByaXZhdGUgc3RhdGljIHN0YXRpY19iYWNrT2Zmc2V0OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgc3RhdGljIHN0YXRpY193aW5kb3c6IEdyb3VwID0gbnVsbDtcbiAgICBwcml2YXRlIHN0YXRpYyBzdGF0aWNfd2luZG93Qkc6IFBoYXNlci5JbWFnZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBzdGF0aWMgc3RhdGljX2dhbWVJbnN0YW5jZTogR2FtZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBzdGF0aWMgc3RhdGljX2dhbWVIYWxmSGVpZ2h0OiBudW1iZXIgPSAwO1xuXG4gICAgLyogUFVCTElDIEZVTkNUSU9OUyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgaW5pdCgpIHtcbiAgICAgICAgLy8gQ3JlYXRlIG91ciBpbnRlcm5hbCBjb21wb25lbnRzXG4gICAgICAgIHRoaXMuc3RhdGljX2xvZ0xpbmVzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgICAgICAgdGhpcy5zdGF0aWNfbG9nTGluZXNUZXh0ID0gbmV3IEFycmF5PFRleHQ+KCk7XG4gICAgICAgIHRoaXMuc3RhdGljX2dhbWVJbnN0YW5jZSA9IEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZTtcbiAgICAgICAgdGhpcy5zdGF0aWNfZ2FtZUhhbGZIZWlnaHQgPSB0aGlzLnN0YXRpY19nYW1lSW5zdGFuY2UuaGVpZ2h0ICogMC41IHwgMDtcblxuICAgICAgICB0aGlzLl9jcmVhdGVXaW5kb3dHcm91cCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc2hvdygpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFBcHBsaWNhdGlvbi5zdGF0aWNfZGVidWdNb2RlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0aWNfd2luZG93LnkgPSB0aGlzLnN0YXRpY19nYW1lSGFsZkhlaWdodDtcbiAgICAgICAgdGhpcy5zdGF0aWNfd2luZG93LnZpc2libGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFBcHBsaWNhdGlvbi5zdGF0aWNfZGVidWdNb2RlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0aWNfd2luZG93LnkgPSB0aGlzLnN0YXRpY19nYW1lSW5zdGFuY2UuaGVpZ2h0O1xuICAgICAgICB0aGlzLnN0YXRpY193aW5kb3cudmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZGVidWcocExpbmU6IHN0cmluZywgLi4ucE9wdGlvbmFsUGFyYW1zOiBhbnlbXSk6IHZvaWQge1xuICAgICAgICBpZiAoIUFwcGxpY2F0aW9uLnN0YXRpY19kZWJ1Z01vZGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN0YW5kYXJkIGNvbnNvbGUubG9nXG4gICAgICAgIGlmIChwT3B0aW9uYWxQYXJhbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwTGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwTGluZSwgcE9wdGlvbmFsUGFyYW1zKTtcbiAgICAgICAgfSAgICBcblxuICAgICAgICAvLyBUT0RPOiBGaWd1cmUgb3V0IGhvdyBwT3B0aW9uYWxQYXJhbXMgaXMgaGFuZGxlZCBieSBjb25zb2xlLmxvZ1xuICAgICAgICB2YXIgb3B0aW9uYWxQYXJhbXNTdHJpbmcgPSBcIlwiO1xuXG4gICAgICAgIGZvciAodmFyIGNudCA9IDA7IGNudCA8IHBPcHRpb25hbFBhcmFtcy5sZW5ndGg7IGNudCsrKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IHBPcHRpb25hbFBhcmFtc1tjbnRdO1xuICAgICAgICAgICAgb3B0aW9uYWxQYXJhbXNTdHJpbmcgKz0gXCIgXCI7XG4gICAgICAgICAgICBvcHRpb25hbFBhcmFtc1N0cmluZyArPSBlbGVtZW50LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIEFkZCB0aGUgbGluZVxuICAgICAgICBpZiAocExpbmUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHBMaW5lID0gXCJudWxsXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocExpbmUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcExpbmUgPSBcInVuZGVmaW5lZFwiO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0YXRpY19sb2dMaW5lcy5wdXNoKHBMaW5lICsgb3B0aW9uYWxQYXJhbXNTdHJpbmcpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgX3dpbmRvdyBpZiB2aXNpYmxlXG4gICAgICAgIHRoaXMuX2FkZExpbmUodGhpcy5zdGF0aWNfbG9nTGluZXMubGVuZ3RoLCAnI2ZmZmZmZicpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgd2FybihwTGluZTogc3RyaW5nLCAuLi5wT3B0aW9uYWxQYXJhbXM6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGlmICghQXBwbGljYXRpb24uc3RhdGljX2RlYnVnTW9kZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3RhbmRhcmQgY29uc29sZS53YXJuXG4gICAgICAgIGlmIChwT3B0aW9uYWxQYXJhbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4ocExpbmUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKHBMaW5lLCBwT3B0aW9uYWxQYXJhbXMpO1xuICAgICAgICB9IFxuXG4gICAgICAgIC8vIFRPRE86IEZpZ3VyZSBvdXQgaG93IHBPcHRpb25hbFBhcmFtcyBpcyBoYW5kbGVkIGJ5IGNvbnNvbGUud2FyblxuICAgICAgICB2YXIgb3B0aW9uYWxQYXJhbXNTdHJpbmcgPSBcIlwiO1xuXG4gICAgICAgIGZvciAodmFyIGNudCA9IDA7IGNudCA8IHBPcHRpb25hbFBhcmFtcy5sZW5ndGg7IGNudCsrKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IHBPcHRpb25hbFBhcmFtc1tjbnRdO1xuICAgICAgICAgICAgb3B0aW9uYWxQYXJhbXNTdHJpbmcgKz0gXCIgXCI7XG4gICAgICAgICAgICBvcHRpb25hbFBhcmFtc1N0cmluZyArPSBlbGVtZW50LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgdGhlIGxpbmVcbiAgICAgICAgaWYgKHBMaW5lID09PSBudWxsKSB7XG4gICAgICAgICAgICBwTGluZSA9IFwibnVsbFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBMaW5lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHBMaW5lID0gXCJ1bmRlZmluZWRcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhdGljX2xvZ0xpbmVzLnB1c2gocExpbmUgKyBvcHRpb25hbFBhcmFtc1N0cmluZyk7XG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSBfd2luZG93IGlmIHZpc2libGVcbiAgICAgICAgdGhpcy5fYWRkTGluZSh0aGlzLnN0YXRpY19sb2dMaW5lcy5sZW5ndGgsICcjZmZmZjAwJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBlcnJvcihwTGluZTogc3RyaW5nLCAuLi5wT3B0aW9uYWxQYXJhbXM6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGlmICghQXBwbGljYXRpb24uc3RhdGljX2RlYnVnTW9kZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3RhbmRhcmQgY29uc29sZS5lcnJvclxuICAgICAgICBpZiAocE9wdGlvbmFsUGFyYW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihwTGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKHBMaW5lLCBwT3B0aW9uYWxQYXJhbXMpO1xuICAgICAgICB9IFxuXG4gICAgICAgIC8vIFRPRE86IEZpZ3VyZSBvdXQgaG93IHBPcHRpb25hbFBhcmFtcyBpcyBoYW5kbGVkIGJ5IGNvbnNvbGUuZXJyb3JcbiAgICAgICAgdmFyIG9wdGlvbmFsUGFyYW1zU3RyaW5nID0gXCJcIjtcblxuICAgICAgICBmb3IgKHZhciBjbnQgPSAwOyBjbnQgPCBwT3B0aW9uYWxQYXJhbXMubGVuZ3RoOyBjbnQrKykge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBwT3B0aW9uYWxQYXJhbXNbY250XTtcbiAgICAgICAgICAgIG9wdGlvbmFsUGFyYW1zU3RyaW5nICs9IFwiIFwiO1xuICAgICAgICAgICAgb3B0aW9uYWxQYXJhbXNTdHJpbmcgKz0gZWxlbWVudC50b1N0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIHRoZSBsaW5lXG4gICAgICAgIGlmIChwTGluZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcExpbmUgPSBcIm51bGxcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwTGluZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwTGluZSA9IFwidW5kZWZpbmVkXCI7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXRpY19sb2dMaW5lcy5wdXNoKHBMaW5lICsgb3B0aW9uYWxQYXJhbXNTdHJpbmcpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgX3dpbmRvdyBpZiB2aXNpYmxlXG4gICAgICAgIHRoaXMuX2FkZExpbmUodGhpcy5zdGF0aWNfbG9nTGluZXMubGVuZ3RoLCAnI2ZmMDAwMCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaXNWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0aWNfd2luZG93LnZpc2libGU7XG4gICAgfVxuXG4gICAgLyogUFJJVkFURSBGVU5DVElPTlMgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBfY3JlYXRlV2luZG93R3JvdXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGljX3dpbmRvdyA9IHRoaXMuc3RhdGljX2dhbWVJbnN0YW5jZS5hZGRUb1N0YWdlLmRHcm91cCgwLCB0aGlzLnN0YXRpY19nYW1lSW5zdGFuY2UuaGVpZ2h0LCBcIkxvZyBXaW5kb3dcIik7XG4gICAgICAgIHRoaXMuc3RhdGljX3dpbmRvd0JHID0gPFBoYXNlci5JbWFnZT50aGlzLnN0YXRpY193aW5kb3cuYWRkQ2hpbGQoUGxhY2Vob2xkZXJzLmltYWdlKDAsIHRoaXMuc3RhdGljX2dhbWVIYWxmSGVpZ2h0LCBUZXh0dXJlcy5yZWN0KHRoaXMuc3RhdGljX2dhbWVJbnN0YW5jZS53aWR0aCwgdGhpcy5zdGF0aWNfZ2FtZUhhbGZIZWlnaHQsIDB4MDAwMDAwLCAwLjcsIHRydWUpLCBcIkJHXCIpKTtcbiAgICAgICAgdGhpcy5zdGF0aWNfd2luZG93QkcuYW5jaG9yLnNldCgwLCAxKTtcbiAgICAgICAgdGhpcy5zdGF0aWNfd2luZG93LnZpc2libGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfYWRkTGluZShwSW5kZXg6IG51bWJlciwgcENvbG9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJkaXNwbGF5aW5nXCIsIHRoaXMuc3RhdGljX2xvZ0xpbmVzW3BJbmRleCAtIDFdKTtcbiAgICAgICAgLy8gY3JlYXRlIHRoZSB0ZXh0IG9iamVjdFxuICAgICAgICBjb25zdCBsb2dMaW5lID0gbmV3IFRleHQoNSwgMCwgdGhpcy5zdGF0aWNfbG9nTGluZXNbcEluZGV4IC0gMV0sICdBcmlhbCcsIDE0LCBwQ29sb3IsICdsZWZ0JywgdHJ1ZSwgdGhpcy5zdGF0aWNfZ2FtZUluc3RhbmNlLndpZHRoIC0gMTApO1xuICAgICAgICBsb2dMaW5lLmFuY2hvci5zZXQoMCwgMSk7XG4gICAgICAgIGxvZ0xpbmUubmFtZSA9IFwiTG9nTGluZVwiICsgcEluZGV4O1xuICAgICAgICAvLyBhZGQgaW4gdG8gdGhlIFdpbmRvdyBhbmQgcG9zaXRpb25cbiAgICAgICAgdGhpcy5zdGF0aWNfd2luZG93QkcuYWRkQ2hpbGQobG9nTGluZSk7XG4gICAgICAgIHRoaXMuc3RhdGljX2xvZ0xpbmVzVGV4dC5wdXNoKGxvZ0xpbmUpO1xuICAgICAgICAvLyBzaGlmdCBhbGwgb3RoZXIgbGluZXMgdXBcbiAgICAgICAgZm9yICh2YXIgY250ID0gdGhpcy5zdGF0aWNfd2luZG93QkcuY2hpbGRyZW4ubGVuZ3RoIC0gMjsgY250ID49IDA7IC0tY250KSB7XG4gICAgICAgICAgICBsZXQgbGluZSA9IDxUZXh0PnRoaXMuc3RhdGljX3dpbmRvd0JHLmdldENoaWxkQXQoY250KTtcbiAgICAgICAgICAgIGxpbmUueSAtPSBsb2dMaW5lLnJlYWxIZWlnaHQgLSB0aGlzLkxJTkVfU1BBQ0lORztcblxuICAgICAgICAgICAgLy8gaGlkZSB0aG9zZSB0aGF0IGFyZSB0b28gaGlnaFxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGxpbmUueSAtIDUgKyBsaW5lLnJlYWxIZWlnaHQpID49IHRoaXMuc3RhdGljX2dhbWVIYWxmSGVpZ2h0IC0gbGluZS5yZWFsSGVpZ2h0IC0gMTApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRpY19sb2dMaW5lc1t0aGlzLnN0YXRpY19iYWNrT2Zmc2V0XSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNfbG9nTGluZXNUZXh0W3RoaXMuc3RhdGljX2JhY2tPZmZzZXRdLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRpY19sb2dMaW5lc1RleHRbdGhpcy5zdGF0aWNfYmFja09mZnNldF0gPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKCsrdGhpcy5zdGF0aWNfYmFja09mZnNldCAqIDIgPj0gdGhpcy5zdGF0aWNfbG9nTGluZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGljX2xvZ0xpbmVzID0gdGhpcy5zdGF0aWNfbG9nTGluZXMuc2xpY2UodGhpcy5zdGF0aWNfYmFja09mZnNldCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGljX2xvZ0xpbmVzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNfbG9nTGluZXNUZXh0ID0gdGhpcy5zdGF0aWNfbG9nTGluZXNUZXh0LnNsaWNlKHRoaXMuc3RhdGljX2JhY2tPZmZzZXQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRpY19sb2dMaW5lc1RleHQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRpY19iYWNrT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCB7IEdyb3VwLCBUZXh0LCBTcHJpdGUgfSBmcm9tICcuLi9kaXNwbGF5JztcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBQcmVmYWJCdWlsZGVyIHtcbiAgIFxuICAgIC8vIEFsbCBjbGFzc2VzIHlvdSBpbnRlbmRlZCB0byBpbnN0YW50aWF0ZSBuZWVkIHRvIGV4aXN0IHdpdGggdGhpcyBvYmplY3QuXG4gICAgLy8gSWYgdGhlcmUgdHlwZSBoZXJlIGRvZXMgbm90IG1hdGNoIHRoZSB0eXBlIHBhcmVtIGZyb20gdGhlIGltcG9ydCBmaWxlLCBcbiAgICAvLyB0aGVuIHRoZSBCdWlsZGVyIHdpbGwgc2tpcCBvdmVyIHRoYXQgY2xhc3MuXG4gICAgcHVibGljIHN0YXRpYyBwcmVmYWJDbGFzc2VzOiB7fSA9IHtcbiAgICAgICAgZ3JvdXA6IEdyb3VwLFxuICAgICAgICB0ZXh0OiBUZXh0LFxuICAgICAgICBzcHJpdGU6IFNwcml0ZVxuICAgIH07XG5cbiAgICBwdWJsaWMgc3RhdGljIGFkZFByZWZhYkNsYXNzKG5ld0NsYXNzOiBhbnksIGltcG9ydE5hbWU6IHN0cmluZywgb3ZlcnJpZGVFeGlzdGluZzogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgICAgIGlmIChQcmVmYWJCdWlsZGVyLnByZWZhYkNsYXNzZXMuaGFzT3duUHJvcGVydHkoaW1wb3J0TmFtZSkpIHtcbiAgICAgICAgICAgIGlmIChvdmVycmlkZUV4aXN0aW5nKSB7XG4gICAgICAgICAgICAgICAgUHJlZmFiQnVpbGRlci5wcmVmYWJDbGFzc2VzW2ltcG9ydE5hbWVdID0gbmV3Q2xhc3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJFbnRyeSBmb3I6IFwiICsgaW1wb3J0TmFtZSArIFwiIGFscmVhZHkgZXhpc3RzIGluIFByZWZhYiBDbGFzc2VzXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlVzZSBvdmVycmlkZUV4aXN0aW5nIGZsYWcgaWYgeW91IHdpc2ggcmVwbGFjZSBleGlzdGluZyBlbnRyeVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBQcmVmYWJCdWlsZGVyLnByZWZhYkNsYXNzZXNbaW1wb3J0TmFtZV0gPSBuZXdDbGFzcztcbiAgICAgICAgfVxuICAgIH0gXG4gICAgXG4gICAgLy8gQ3JlYXRlcyBhbGwgb2JqZWN0cyBmb3IgYSBnaXZlbiBzY2VuZSwgb24gdGhhdCBzY2VuZS4gICAgXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVTY2VuZUZyb20oZGF0YToge3ByZWZhYnM6IGFueVtdfSwgc2NlbmU6IFN0YXRlKTogdm9pZCB7XG4gICAgICAgIGlmIChzY2VuZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2NlbmUucHJlZmFicyA9IFtdO1xuICAgICAgICBzY2VuZS5ncm91cHMgPSBbXTtcbiAgICAgICAgUHJlZmFiQnVpbGRlci5jcmVhdGVQcmVmYWJPYmplY3RzKGRhdGEsIHNjZW5lKTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgYSBtYXNzIG9mIHByZWZhYnMgZnJvbSB0aGUgZ2l2ZW4gZGF0YSwgYWRkaW5nIHRoZW0gdG8gdGhlIHNjZW5lIGlmIHRoZWlyIHBhcmVudCBpcyBzZXQgdG8gJ3N0YXRlJy4gIFxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlUHJlZmFiT2JqZWN0cyhkYXRhOiBhbnksIHNjZW5lOiBTdGF0ZSk6IGFueSB7XG4gICAgICAgIGlmIChzY2VuZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRlIG92ZXIgcHJlZmFiIGRhdGEuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEucHJlZmFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChQcmVmYWJCdWlsZGVyLnByZWZhYkNsYXNzZXMuaGFzT3duUHJvcGVydHkoZGF0YS5wcmVmYWJzW2ldLnR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBwcmVmYWJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByZWZhYiA9IHRoaXMuY3JlYXRlUHJlZmFiKGRhdGEucHJlZmFic1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVmYWIgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBwYXJlbnQgaXMgbm90IHRoZSBzdGF0ZSwgdHJ5IHRvIGZpbmQgdGhlIHBhcmVudCBieSBpdHMgbmFtZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnByZWZhYnNbaV0ucGFyZW50ICE9PSBcInN0YXRlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUcnkgdG8gZmluZCBhIHBhcmVudCBncm91cCBmaXJzdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NlbmUuZ3JvdXBzW2RhdGEucHJlZmFic1tpXS5wYXJlbnRdICE9PSBudWxsICYmIHNjZW5lLmdyb3Vwc1tkYXRhLnByZWZhYnNbaV0ucGFyZW50XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLmdyb3Vwc1tkYXRhLnByZWZhYnNbaV0ucGFyZW50XS5hZGRJbnRlcm5hbC5leGlzdGluZyhwcmVmYWIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBub3QgZm91bmQsIHRyeSB0byBmaW5kIGEgcGFyZW50IHByZWZhYi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjZW5lLnByZWZhYnNbZGF0YS5wcmVmYWJzW2ldLnBhcmVudF0gIT09IG51bGwgJiYgc2NlbmUucHJlZmFic1tkYXRhLnByZWZhYnNbaV0ucGFyZW50XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2VuZS5wcmVmYWJzW2RhdGEucHJlZmFic1tpXS5wYXJlbnRdLmFkZENoaWxkKHByZWZhYik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBhbHNvIHdhbnQgdG8gYXNzaWduIHRoaXMgcHJlZmFiIHRvIGl0cyBwYXJlbnQgc2NyaXB0IGZvciBjdXN0b20gaGFuZGxpbmcsIHdlIGRvIHNvIG5vdy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIChFeGFtcGxlOiBBc3NpZ25pbmcgYSBUZXh0IGNvbXBvbmVudCB0byBhIEJ1dHRvbiBjb21wb25lbnQgaW4gb3JkZXIgdG8gdGludCB0aGUgdGV4dCB0byBtYXRjaCBidXR0b24gc3RhdGVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEucHJlZmFic1tpXS5hc3NpZ25Ub1BhcmVudCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLnByZWZhYnNbZGF0YS5wcmVmYWJzW2ldLnBhcmVudF0uYXNzaWduUHJlZmFiKHByZWZhYik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgbm8gcGFyZW50IHByZWZhYiBmb3VuZCwgYWRkIHRvIHN0YXRlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLmFkZC5leGlzdGluZyhwcmVmYWIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmUuYWRkLmV4aXN0aW5nKHByZWZhYik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5wcmVmYWJzW2ldLnR5cGUgPT09IFwiZ3JvdXBcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLmdyb3Vwc1twcmVmYWIubmFtZV0gPSBwcmVmYWI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2VuZS5wcmVmYWJzW3ByZWZhYi5uYW1lXSA9IHByZWZhYjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk5vIFByZWZhYkNsYXNzZXMgZW50cnkgZm91bmQgZm9yOiBcIiArIGRhdGEucHJlZmFic1tpXS50eXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gQ3JlYXRlIGEgc2luZ2xlIHByZWZhYiBmcm9tIHRoZSBzdXBwbGllZCBkYXRhLlxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlUHJlZmFiKGRhdGE6IGFueSk6IGFueSB7XG4gICAgICAgIGxldCBwcmVmYWI6IGFueSA9IG51bGw7XG4gICAgICAgIC8vIGNyZWF0ZSBvYmplY3QgYWNjb3JkaW5nIHRvIGl0cyB0eXBlXG4gICAgICAgIGlmICh0aGlzLnByZWZhYkNsYXNzZXMuaGFzT3duUHJvcGVydHkoZGF0YS50eXBlKSkge1xuICAgICAgICAgICAgcHJlZmFiID0gdGhpcy5wcmVmYWJDbGFzc2VzW2RhdGEudHlwZV0uQ3JlYXRlRnJvbURhdGEoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByZWZhYjtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGV2aWNlIH0gZnJvbSAnZGlqb24vdXRpbHMnO1xuXG4vLyBTZW5kIGEgbmV3IGV2ZW50IG1vZGVsIGFzIHRoZSBib2R5IG9mIHlvdXIgZXZlbnQgdHJhY2tpbmcgbm90aWZpY2F0aW9uLlxuZXhwb3J0IGNsYXNzIEFuYWx5dGljc0V2ZW50TW9kZWwge1xuXG5cdHB1YmxpYyBhY3Rpb246IHN0cmluZztcbiAgICBwdWJsaWMgbGFiZWw6IHN0cmluZztcbiAgICBwdWJsaWMgdmFsdWU6IG51bWJlcjtcbiAgICBcblx0Y29uc3RydWN0b3IocEFjdGlvbjogc3RyaW5nLCBwTGFiZWw6IHN0cmluZyA9IFwiXCIsIHBWYWx1ZTogbnVtYmVyID0gbnVsbCkge1xuICAgIFx0dGhpcy5hY3Rpb24gPSBwQWN0aW9uO1xuICAgICAgICB0aGlzLmxhYmVsID0gcExhYmVsO1xuICAgICAgICB0aGlzLnZhbHVlID0gcFZhbHVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBbmFseXRpY3NNYW5hZ2VyIHtcbiAgICAvLyBTZXQgdGhpcyBzdGF0aWMgaW4geW91ciBhcHBsaWNhdGlvbi4gSXQgaXMgcmVxdWlyZWQuXG4gICAgcHJvdGVjdGVkIF9jYXRlZ29yeTogc3RyaW5nO1xuXG4gICAgLy8gZm9yIGNvY29vbiBvbmx5XG4gICAgcHJpdmF0ZSBfdHJhY2tlcklkOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgX3N0YXJ0ZWRXaXRoVHJhY2tlcklkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZW5hYmxlZDogYm9vbGVhbiA9IHRydWUsIGNhdGVnb3J5OiBzdHJpbmcgPSBudWxsKSB7IFxuICAgICAgICB0aGlzLl9jYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRDYXRlZ29yeShuZXdDYXQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLl9jYXRlZ29yeSA9IG5ld0NhdDtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIHRyYWNrRXZlbnQoYWN0aW9uOiBzdHJpbmcgPSBudWxsLCBsYWJlbDogc3RyaW5nID0gbnVsbCwgdmFsdWU6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZSB8fCAhdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWFjdGlvbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEFuYWx5dGljc0V4Y2VwdGlvbignTm8gYWN0aW9uIGRlZmluZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLl9jYXRlZ29yeSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEFuYWx5dGljc0V4Y2VwdGlvbignTm8gY2F0ZWdvcnkgZGVmaW5lZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKERldmljZS5jb2Nvb24gJiYgd2luZG93WydhbmFseXRpY3MnXSE9PXVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgYW5hbHl0aWNzID0gd2luZG93WydhbmFseXRpY3MnXTtcbiAgICAgICAgICAgIGFuYWx5dGljcy50cmFja0V2ZW50KHRoaXMuX2NhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2EoJ3NlbmQnLCAnZXZlbnQnLCB0aGlzLl9jYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLmdhKCdzZW5kJywgJ2V2ZW50JywgdGhpcy5fY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nYSgnc2VuZCcsICdldmVudCcsIHRoaXMuX2NhdGVnb3J5LCBhY3Rpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJhY2tPbW5pdHVyZUV2ZW50KGdhbWVOYW1lOiBzdHJpbmcsIGFjdGl2aXR5OiBzdHJpbmcsIGlzR2FtZUV2ZW50OiBib29sZWFuKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy9jb25zb2xlLmxvZygndHJhY2tpbmcgb21uaXR1cmUnLCBnYW1lTmFtZSwgYWN0aXZpdHksIGlzR2FtZUV2ZW50KTtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3dbJ3RyYWNrRmxhc2hFdmVudCddID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgd2luZG93Wyd0cmFja0ZsYXNoRXZlbnQnXShnYW1lTmFtZSwgYWN0aXZpdHksIGlzR2FtZUV2ZW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zdGFydFdpdGhUcmFja2VySWQoKTogdm9pZCB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKERldmljZS5jb2Nvb24gJiYgd2luZG93WydhbmFseXRpY3MnXSE9PXVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IGFuYWx5dGljcyA9IHdpbmRvd1snYW5hbHl0aWNzJ107XG4gICAgICAgICAgICBhbmFseXRpY3Muc3RhcnRUcmFja2VyV2l0aElkKHRoaXMuX3RyYWNrZXJJZCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHNldCB0cmFja2VySWQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl90cmFja2VySWQgPSB2YWx1ZTtcbiAgICAgICAgaWYgKCF0aGlzLl9zdGFydGVkV2l0aFRyYWNrZXJJZCkge1xuICAgICAgICAgICAgdGhpcy5fc3RhcnRXaXRoVHJhY2tlcklkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgdHJhY2tlcklkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl90cmFja2VySWQ7XG4gICAgfVxuXG4gICAgLy8gZ2V0dGVyIC8gc2V0dGVyXG4gICAgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICh3aW5kb3dbJ2dhJ10gfHwgKERldmljZS5jb2Nvb24gJiYgd2luZG93WydhbmFseXRpY3MnXSAhPT0gdW5kZWZpbmVkKSkgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IGdhKCk6IEZ1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvd1snZ2EnXTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBbmFseXRpY3NFeGNlcHRpb24ge1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSAnQW5hbHl0aWNzRXhjZXB0aW9uJztcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbWVzc2FnZTogc3RyaW5nKSB7IH1cbn1cbiIsIi8qKlxuICogV3JhcHMgUGhhc2VyLkxvYWRlclxuKi9cblxuaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xuaW1wb3J0IHtHYW1lfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7SU5vdGlmaWVyLCBJUGF0aENvbmZpZywgSUFzc2V0LCBJQXNzZXRMaXN0LCBJU291bmQsIElUaWxlZG1hcEFzc2V0c30gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQge05vdGlmaWNhdGlvbnN9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7U3BpbmV9IGZyb20gJy4uL2Rpc3BsYXknO1xuLyoqXG4gKiBXcmFwcyBQaGFzZXIuTG9hZGVyXG4qL1xuZXhwb3J0IGNsYXNzIEFzc2V0TWFuYWdlciBpbXBsZW1lbnRzIElOb3RpZmllciB7XG4gICAgcHJvdGVjdGVkIGFwcDogQXBwbGljYXRpb247XG5cbiAgICAvLyBwcml2YXRlIHZhcmlhYmxlc1xuICAgIHByaXZhdGUgX2RhdGEgPSB7fTtcbiAgICBwcml2YXRlIF9iYXNlVVJMOiBzdHJpbmcgPSAnJztcbiAgICBwcml2YXRlIF9wYXRoT2JqOiBJUGF0aENvbmZpZyB8IGFueSA9IHt9O1xuICAgIHByaXZhdGUgX2Fzc2V0UGF0aDogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIF9kYXRhUGF0aDogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIF9zcHJpdGVTaGVldFBhdGg6IHN0cmluZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBfaW1nUGF0aDogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIF92aWRlb1BhdGg6IHN0cmluZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBfc3BpbmVQYXRoOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgX2ZvbnRQYXRoOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgX2JpdG1hcEZvbnRQYXRoOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgX3BoeXNpY3NQYXRoOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgX2F1ZGlvU3ByaXRlUGF0aDogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIF9zb3VuZFBhdGg6IHN0cmluZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBfc291bmREZWNvZGluZ01vZGlmaWVyOiBudW1iZXIgPSAyO1xuICAgIHByaXZhdGUgX3JlczogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIF9yZXNvbHV0aW9uOiBzdHJpbmcgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfbG9hZERhdGEgPSB7fTtcbiAgICBwcml2YXRlIF9hdXRvTG9hZERhdGEgPSB7fTtcbiAgICBwcml2YXRlIF9jb21wbGV0ZWRMb2FkcyA9IHt9O1xuICAgIHByaXZhdGUgX3JlcXVpcmVkRGF0YSA9IHt9O1xuXG4gICAgcHJpdmF0ZSBfY3VycmVudEFzc2V0TGlzdDogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIF9oYXNGaWxlczogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX3NvdW5kc1RvRGVjb2RlOiBBcnJheTxJU291bmQ+ID0gW107XG4gICAgcHJpdmF0ZSBfaXNMb2FkaW5nUXVldWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIF9maWxlQ29tcGxldGVQcm9ncmVzczogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9tYXhQZXJjZW50OiBudW1iZXIgPSAxMDA7XG5cbiAgICBwcml2YXRlIF9udW1Tb3VuZHM6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfc291bmRzRGVjb2RlZDogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgX2NhY2hlQnVzdFZlcnNpb246IHN0cmluZyA9ICcnO1xuXG4gICAgLy8gcHVibGljIHZhcmlhYmxlc1xuICAgIHB1YmxpYyBnYW1lOiBHYW1lO1xuXG4gICAgcHVibGljIG9uTG9hZFN0YXJ0ID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICBwdWJsaWMgb25GaWxlU3RhcnQgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuICAgIHB1YmxpYyBvbkZpbGVDb21wbGV0ZSA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgcHVibGljIG9uTG9hZENvbXBsZXRlID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICBwdWJsaWMgb25Mb2FkQ29tcGxldGVBbmRBdWRpb0RlY29kZWQgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuXG4gICAgcHVibGljIG9uQmFja2dyb3VuZExvYWRTdGFydCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgcHVibGljIG9uQmFja2dyb3VuZEZpbGVTdGFydCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgcHVibGljIG9uQmFja2dyb3VuZEZpbGVDb21wbGV0ZSA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgcHVibGljIG9uQmFja2dyb3VuZExvYWRDb21wbGV0ZSA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgcHVibGljIG9uQmFja2dyb3VuZExvYWRDb21wbGV0ZUFuZEF1ZGlvRGVjb2RlZCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG5cbiAgICAvLyBzdGF0aWMgY29uc3RhbnRzXG4gICAgLy8gYXNzZXQgdHlwZXNcbiAgICBwdWJsaWMgc3RhdGljIEFVRElPOiBzdHJpbmcgPSAnYXVkaW8nO1xuICAgIHB1YmxpYyBzdGF0aWMgU09VTkQ6IHN0cmluZyA9ICdzb3VuZCc7XG4gICAgcHVibGljIHN0YXRpYyBBVURJT19TUFJJVEU6IHN0cmluZyA9ICdhdWRpb1Nwcml0ZSc7XG4gICAgcHVibGljIHN0YXRpYyBJTUFHRTogc3RyaW5nID0gJ2ltYWdlJztcbiAgICBwdWJsaWMgc3RhdGljIFZJREVPOiBzdHJpbmcgPSAndmlkZW8nO1xuICAgIHB1YmxpYyBzdGF0aWMgQVRMQVM6IHN0cmluZyA9ICdhdGxhcyc7XG4gICAgcHVibGljIHN0YXRpYyBURVhUOiBzdHJpbmcgPSAndGV4dCc7XG4gICAgcHVibGljIHN0YXRpYyBKU09OOiBzdHJpbmcgPSAnanNvbic7XG4gICAgcHVibGljIHN0YXRpYyBUSUxFTUFQOiBzdHJpbmcgPSAndGlsZW1hcCc7XG4gICAgcHVibGljIHN0YXRpYyBUSUxFRE1BUDogc3RyaW5nID0gJ3RpbGVkbWFwJztcbiAgICBwdWJsaWMgc3RhdGljIFRJTEVETUFQX1RJTEVTRVQ6IHN0cmluZyA9ICd0aWxlc2V0JztcbiAgICBwdWJsaWMgc3RhdGljIFRJTEVETUFQX0xBWUVSOiBzdHJpbmcgPSAnbGF5ZXInO1xuICAgIHB1YmxpYyBzdGF0aWMgUEhZU0lDUzogc3RyaW5nID0gJ3BoeXNpY3MnO1xuICAgIHB1YmxpYyBzdGF0aWMgU1BJTkU6IHN0cmluZyA9ICdzcGluZSc7XG4gICAgcHVibGljIHN0YXRpYyBCSVRNQVBfRk9OVDogc3RyaW5nID0gJ2JpdG1hcEZvbnQnO1xuICAgIHB1YmxpYyBzdGF0aWMgQVNTRVRfTElTVDogc3RyaW5nID0gJ2Fzc2V0TGlzdCc7XG5cbiAgICAvLyByZXNvbHV0aW9uc1xuICAgIHB1YmxpYyBzdGF0aWMgUkVTT0xVVElPTl8yWDogc3RyaW5nID0gXCJAMnhcIjtcbiAgICBwdWJsaWMgc3RhdGljIFJFU09MVVRJT05fM1g6IHN0cmluZyA9IFwiQDN4XCI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5faW5pdCgpO1xuICAgIH1cbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICAvKipcbiAgICAqIGFkZHMgaW50ZXJuYWwgdmFyaWFibGVzIGFuZCBzaWduYWxzXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIHByaXZhdGUgX2luaXQoKSB7XG4gICAgICAgIHRoaXMuYXBwID0gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5nYW1lID0gdGhpcy5hcHAuZ2FtZTtcbiAgICAgICAgaWYgKHdpbmRvdy5oYXNPd25Qcm9wZXJ0eShcImJhc2VVUkxcIikpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZVVSTCA9IHdpbmRvd1tcImJhc2VVUkxcIl07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJhc2VVUkwgPSAnJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhdGhzID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZXNvbHV0aW9uID0gdGhpcy5nYW1lLnJlc29sdXRpb247XG4gICAgICAgIHRoaXMuX3NvdW5kc1RvRGVjb2RlID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBwYXJzZXMgYW4gYXNzZXQgbGlzdCBieSBrZXkgKHVzdWFsbHkgZnJvbSBkYXRhL2Fzc2V0cy5qc29uKSBhbmQgc3RvcmVzIHRoZW0gaW50ZXJuYWxseVxuICAgICogQHBhcmFtICB7U3RyaW5nfSBrZXkgdGhlIGlkIG9mIHRoZSBsaXN0XG4gICAgKiBAcGFyYW0gIHtBcnJheX0gIGxpc3QgdGhlIGpzb24gYXJyYXkgb2YgYXNzZXRzXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIHByaXZhdGUgX3BhcnNlQXNzZXRMaXN0KGtleTogc3RyaW5nLCBsaXN0OiBJQXNzZXRMaXN0KSB7XG4gICAgICAgIHRoaXMuX2F1dG9Mb2FkRGF0YVtrZXldID0gbGlzdC5hdXRvbG9hZDtcbiAgICAgICAgdGhpcy5fcmVxdWlyZWREYXRhW2tleV0gPSBsaXN0LnJlcXVpcmVkO1xuXG4gICAgICAgIHRoaXMuX2xvYWREYXRhW2tleV0gPSBbXTtcblxuICAgICAgICBsaXN0LmFzc2V0cy5mb3JFYWNoKGFzc2V0ID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2xvYWREYXRhW2tleV0ucHVzaChhc3NldCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogYWRkcyBhc3NldHMgZnJvbSBhIGxpc3QgdG8gdGhlIGxvYWQgbGlzdFxuICAgICogQHBhcmFtICB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgbGlzdCB0byBhZGRcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfbG9hZEFzc2V0cyhpZDogc3RyaW5nKSB7XG4gICAgICAgIHZhciBhc3NldHMgPSB0aGlzLl9sb2FkRGF0YVtpZF0sXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBhc3NldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX2xvYWRBc3NldChhc3NldHNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBzdGFydCB0aGUgYmFja2dyb3VuZCBsb2FkaW5nXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIHByaXZhdGUgX2JhY2tncm91bmRMb2FkU3RhcnQoKSB7XG4gICAgICAgIHRoaXMub25CYWNrZ3JvdW5kTG9hZFN0YXJ0LmRpc3BhdGNoKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiB3aGVuIGEgZmlsZSBjb21wbGV0ZXMgaW4gYW4gYmFja2dyb3VuZCBsb2FkIHF1ZXVlIC0gZGlzcGF0Y2hlcyB0aGUgb25CYWNrZ3JvdW5kRmlsZUNvbXBsZXRlIHNpZ25hbFxuICAgICogQHBhcmFtICB7TnVtYmVyfSBwcm9ncmVzcyAgIHRoZSBwZXJjZW50IHByb2dyZXNzXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGlkICAgICAgICAgdGhlIGZpbGUgaWRcbiAgICAqIEBwYXJhbSAge2ludH0gICAgZmlsZUluZGV4ICB0aGUgaW5kZXggb2YgdGhlIGZpbGUgaW4gdGhlIGxpc3RcbiAgICAqIEBwYXJhbSAge2ludH0gICAgdG90YWxGaWxlcyB0aGUgdG90YWwgbnVtYmVyIG9mIGZpbGVzIGluIHRoZSBsaXN0XG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIHByaXZhdGUgX2JhY2tncm91bmRGaWxlQ29tcGxldGUocHJvZ3Jlc3M6IG51bWJlciwgaWQ6IHN0cmluZywgZmlsZUluZGV4OiBudW1iZXIsIHRvdGFsRmlsZXM6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5nYW1lLmNhY2hlLmNoZWNrS2V5KFBoYXNlci5DYWNoZS5JTUFHRSwgaWQpKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRCYXNlVGV4dHVyZVJlc29sdXRpb24odGhpcy5nYW1lLmNhY2hlLmdldEJhc2VUZXh0dXJlKGlkKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZmlsZUNvbXBsZXRlUHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICAgICAgdGhpcy5vbkJhY2tncm91bmRGaWxlQ29tcGxldGUuZGlzcGF0Y2gocHJvZ3Jlc3MsIGlkLCBmaWxlSW5kZXgsIHRvdGFsRmlsZXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogd2hlbiB0aGUgYmFja2dyb3VuZCBsb2FkIGNvbXBsZXRlcyAtIGRpc3BhdGNoZXMgdGhlIG9uQmFja2dyb3VuZExvYWRDb21wbGV0ZSBzaWduYWwsIHN0YXJ0cyBjaGVja2luZyBmb3IgZGVjb2RlZCBzb3VuZHNcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfYmFja2dyb3VuZExvYWRDb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQub25GaWxlQ29tcGxldGUucmVtb3ZlKHRoaXMuX2JhY2tncm91bmRGaWxlQ29tcGxldGUsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMub25CYWNrZ3JvdW5kTG9hZENvbXBsZXRlLmRpc3BhdGNoKCk7XG4gICAgICAgIHRoaXMuX2NoZWNrU291bmREZWNvZGluZyh0aGlzLm9uQmFja2dyb3VuZExvYWRDb21wbGV0ZUFuZEF1ZGlvRGVjb2RlZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiB3aGVuIHRoZSBhc3NldCBsaXN0IHN0YXJ0cyBsb2FkaW5nLCBkaXNwYXRjaGVzIHRoZSBvbkxvYWRTdGFydCBzaWduYWxcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwcml2YXRlIF9nYW1lTG9hZFN0YXJ0KCkge1xuICAgICAgICB0aGlzLm9uTG9hZFN0YXJ0LmRpc3BhdGNoKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiB3aGVuIGEgZmlsZSBzdGFydHMgbG9hZGluZyAtIGRpc3BhdGNoZXMgdGhlIG9uRmlsZVN0YXJ0IHNpZ25hbFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHByaXZhdGUgX2dhbWVGaWxlU3RhcnQoKSB7XG4gICAgICAgIHRoaXMub25GaWxlU3RhcnQuZGlzcGF0Y2goKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHdoZW4gYSBmaWxlIGNvbXBsZXRlcyBpbiB0aGUgZ2FtZSBsb2FkIC0gZGlzcGF0Y2hlcyB0aGUgb25GaWxlQ29tcGxldGUgc2lnbmFsXG4gICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHByb2dyZXNzICAgdGhlIHBlcmNlbnQgcHJvZ3Jlc3NcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gaWQgICAgICAgICB0aGUgZmlsZSBpZFxuICAgICogQHBhcmFtICB7aW50fSAgICBmaWxlSW5kZXggIHRoZSBpbmRleCBvZiB0aGUgZmlsZSBpbiB0aGUgbGlzdFxuICAgICogQHBhcmFtICB7aW50fSAgICB0b3RhbEZpbGVzIHRoZSB0b3RhbCBudW1iZXIgb2YgZmlsZXMgaW4gdGhlIGxpc3RcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfZ2FtZUZpbGVDb21wbGV0ZShwcm9ncmVzczogbnVtYmVyLCBpZD86IHN0cmluZywgZmlsZUluZGV4PzogbnVtYmVyLCB0b3RhbEZpbGVzPzogbnVtYmVyKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jYWNoZS5jaGVja0tleShQaGFzZXIuQ2FjaGUuSU1BR0UsIGlkKSkge1xuICAgICAgICAgICAgdGhpcy5fc2V0QmFzZVRleHR1cmVSZXNvbHV0aW9uKHRoaXMuZ2FtZS5jYWNoZS5nZXRCYXNlVGV4dHVyZShpZCkpO1xuXG4gICAgICAgIH1cbiAgICAgICAgLy8gZWxzZSBpZiAodGhpcy5nYW1lLmNhY2hlLmNoZWNrS2V5KFBoYXNlci5DYWNoZS5CSVRNQVBGT05ULCBpZCkpe1xuICAgICAgICAvLyAgICAgdGhpcy5fc2V0QmFzZVRleHR1cmVSZXNvbHV0aW9uKHRoaXMuZ2FtZS5jYWNoZS5nZXRCYXNlVGV4dHVyZShpZCwgUGhhc2VyLkNhY2hlLkJJVE1BUEZPTlQpKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdpZCcsIGlkLCB0aGlzLmdhbWUuY2FjaGUuZ2V0QmFzZVRleHR1cmUoaWQsIFBoYXNlci5DYWNoZS5CSVRNQVBGT05UKS5yZXNvbHV0aW9uKTtcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLl9maWxlQ29tcGxldGVQcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgICAgICB0aGlzLm9uRmlsZUNvbXBsZXRlLmRpc3BhdGNoKHRoaXMuZ2V0TG9hZFByb2dyZXNzKCksIGlkLCBmaWxlSW5kZXgsIHRvdGFsRmlsZXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NldEJhc2VUZXh0dXJlUmVzb2x1dGlvbih0ZXh0dXJlOiBQSVhJLkJhc2VUZXh0dXJlKTogdm9pZCB7XG4gICAgICAgIGlmICh0ZXh0dXJlICYmIHRleHR1cmUuc291cmNlLnNyYy5pbmRleE9mKCdAJyArIHRoaXMucmVzb2x1dGlvbiArICd4JykgPj0gMCkge1xuICAgICAgICAgICAgdGV4dHVyZS5yZXNvbHV0aW9uID0gdGhpcy5yZXNvbHV0aW9uO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICogd2hlbiB0aGUgYmFja2dyb3VuZCBsb2FkIGNvbXBsZXRlcyAtIGRpc3BhdGNoZXMgdGhlIG9uTG9hZENvbXBsZXRlIHNpZ25hbCwgc3RhcnRzIGNoZWNraW5nIGZvciBkZWNvZGVkIHNvdW5kc1xuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBwcml2YXRlIF9nYW1lTG9hZENvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLl9jb21wbGV0ZWRMb2Fkc1t0aGlzLl9jdXJyZW50QXNzZXRMaXN0XSA9IHRydWU7XG4gICAgICAgIHRoaXMub25Mb2FkQ29tcGxldGUuZGlzcGF0Y2goKTtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQub25GaWxlU3RhcnQucmVtb3ZlKHRoaXMuX2dhbWVGaWxlU3RhcnQsIHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkZpbGVDb21wbGV0ZS5yZW1vdmUodGhpcy5fZ2FtZUZpbGVDb21wbGV0ZSwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5fY2hlY2tTb3VuZERlY29kaW5nKHRoaXMub25Mb2FkQ29tcGxldGVBbmRBdWRpb0RlY29kZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogY2hlY2tzIGlmIGFsbCB0aGUgc291bmRzIGluIHRoZSBxdWV1ZSBhcmUgZGVjb2RlZFxuICAgICogQHBhcmFtICB7UGhhc2VyLlNpZ25hbH0gZXZlbnRUb0Rpc3BhdGNoIHRoZSBzaWduYWwgdG8gYmUgZGlzcGF0Y2hlZCB3aGVuIGFsbCBzb3VuZHMgYXJlIGRlY29kZWRcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfY2hlY2tTb3VuZERlY29kaW5nKGV2ZW50VG9EaXNwYXRjaDogUGhhc2VyLlNpZ25hbCkge1xuICAgICAgICB2YXIgc291bmQsIGksIGlzQXVkaW9TcHJpdGU7XG5cbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kc1RvRGVjb2RlICYmIHRoaXMuX3NvdW5kc1RvRGVjb2RlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLl9zb3VuZHNUb0RlY29kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlzQXVkaW9TcHJpdGUgPSB0aGlzLl9zb3VuZHNUb0RlY29kZVtpXS5pc0F1ZGlvU3ByaXRlO1xuICAgICAgICAgICAgICAgIHNvdW5kID0gdGhpcy5nYW1lLmFkZC5zb3VuZCh0aGlzLl9zb3VuZHNUb0RlY29kZVtpXS51cmwpO1xuICAgICAgICAgICAgICAgIHNvdW5kLl9faXNBdWRpb1Nwcml0ZSA9IGlzQXVkaW9TcHJpdGU7XG4gICAgICAgICAgICAgICAgc291bmQuZXZlbnRUb0Rpc3BhdGNoID0gZXZlbnRUb0Rpc3BhdGNoO1xuICAgICAgICAgICAgICAgIHNvdW5kLm9uRGVjb2RlZC5hZGRPbmNlKHRoaXMuX29uU291bmREZWNvZGVkLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50VG9EaXNwYXRjaC5kaXNwYXRjaCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiB3aGVuIGEgc291bmQgaXMgZGVjb2RlZCwgdGhpcyBtZXRob2QgcmVtb3ZlcyBpdCBmcm9tIHRoZSBfc291bmRzVG9EZWNvZGUgYXJyYXksIGFuZCBpbmNyZWFzZXMgdGhlIG92ZXJhbGwgcGVyY2VudGFnZSBsb2FkZWRcbiAgICAqIEBwYXJhbSAge1BoYXNlci5Tb3VuZH0gc291bmQgdGhlIHNvdW5kIGJlaW5nIGRlY29kZWRcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfb25Tb3VuZERlY29kZWQoc291bmQ6IElTb3VuZCkge1xuICAgICAgICB2YXIgc291bmRJbmRleCA9IHRoaXMuX3NvdW5kc1RvRGVjb2RlLmluZGV4T2Yoc291bmQua2V5KTtcbiAgICAgICAgdGhpcy5fc291bmRzVG9EZWNvZGUuc3BsaWNlKHNvdW5kSW5kZXgsIDEpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5nYW1lLmF1ZGlvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgdGhpcy5nYW1lLmF1ZGlvLmFkZEF1ZGlvICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaWYgKHNvdW5kLl9faXNBdWRpb1Nwcml0ZSlcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuYWRkLmF1ZGlvU3ByaXRlKHNvdW5kLmtleSk7XG5cbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hdWRpby5hZGRBdWRpbyhzb3VuZC5rZXksIHNvdW5kLl9faXNBdWRpb1Nwcml0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zb3VuZHNEZWNvZGVkKys7XG4gICAgICAgIHRoaXMuX21heFBlcmNlbnQgPSAoMTAwIC0gKHRoaXMuX251bVNvdW5kcyAqIHRoaXMuc291bmREZWNvZGluZ01vZGlmaWVyKSArICh0aGlzLl9zb3VuZHNEZWNvZGVkICogdGhpcy5zb3VuZERlY29kaW5nTW9kaWZpZXIpKTtcbiAgICAgICAgdGhpcy5fZ2FtZUZpbGVDb21wbGV0ZSgxMDApO1xuXG4gICAgICAgIGlmICh0aGlzLl9zb3VuZHNUb0RlY29kZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHNvdW5kLmV2ZW50VG9EaXNwYXRjaC5kaXNwYXRjaCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBzaG9ydGN1dCB0byBnZXQgYW4gYXNzZXQga2V5IHVzaW5nIGEgZmlsZSBuYW1lIChzdHJpcHMgaXRzIGV4dGVuc2lvbilcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gZmlsZU5hbWUgdGhlIHVybCBvZiB0aGUgZmlsZVxuICAgICogQHJldHVybiB7U3Rpcm5nfSAgICAgICAgICB0aGUgYXNzZXQga2V5ICh0aGUgZmlsZW5hbWUgd2l0aCBpdHMgZXh0ZW5zaW9uIHN0cmlwcGVkKVxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIHByaXZhdGUgX2dldEFzc2V0S2V5KGZpbGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAoZmlsZU5hbWUuaW5kZXhPZignLicpIDwgMClcbiAgICAgICAgICAgIHJldHVybiBmaWxlTmFtZTtcbiAgICAgICAgdmFyIGV4dCA9IGZpbGVOYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgIGV4dC5wb3AoKTtcblxuICAgICAgICByZXR1cm4gZXh0LmpvaW4oJycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogZ2V0cyB0aGUgZXh0ZW5zaW9uIG9mIGEgZ2l2ZW4gZmlsZVxuICAgICogQHBhcmFtICB7U3RyaW5nfSBmaWxlTmFtZVxuICAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICB0aGUgZXh0ZW5zaW9uXG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfZ2V0RXh0ZW5zaW9uKGZpbGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZmlsZU5hbWUuc3BsaXQoJy4nKS5wb3AoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGdldHMgdGhlIGV4dGVuc2lvbiBvZiBhIGdpdmVuIGZpbGVcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gZmlsZU5hbWVcbiAgICAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgICAgdGhlIGV4dGVuc2lvblxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIHByaXZhdGUgX2dldFJlc29sdXRpb24ocmVzOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICB2YXIgcmVzdWx0ID0gJyc7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXMgPSBwYXJzZUZsb2F0KHJlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlcyA9IHRoaXMucmVzb2x1dGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXMgPiAxLjUpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IEFzc2V0TWFuYWdlci5SRVNPTFVUSU9OXzJYO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGRldGVybWluZXMgd2hhdCBraW5kIG9mIGFzc2V0IHdlJ3JlIGRlYWxpbmcgd2l0aCBhbmQgYWRkcyBpdCB0byB0aGUgbG9hZCBxdWV1ZVxuICAgICogQHBhcmFtICB7T2JqZWN0fSBhc3NldCB0aGUgYXNzZXQgb2JqZWN0IHdlJ3JlIGdvaW5nIHRvIGxvYWRcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfbG9hZEFzc2V0KGFzc2V0OiBJQXNzZXQpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBhc3NldC50eXBlLFxuICAgICAgICAgICAgdXJsID0gYXNzZXQudXJsIHx8IGFzc2V0LmtleTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLkFTU0VUX0xJU1Q6XG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZEFzc2V0cyhhc3NldC5pZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5TT1VORDpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTb3VuZCh1cmwsIGFzc2V0LmV4dGVuc2lvbnMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuQVVESU9fU1BSSVRFOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEF1ZGlvU3ByaXRlKHVybCwgYXNzZXQuZXh0ZW5zaW9ucyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5JTUFHRTpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRJbWFnZSh1cmwsIHRoaXMuX2dldFJlc29sdXRpb24oYXNzZXQucmVzb2x1dGlvbikpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuVklERU86XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkVmlkZW8odXJsLCB0aGlzLl9nZXRSZXNvbHV0aW9uKGFzc2V0LnJlc29sdXRpb24pKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLkFUTEFTOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEF0bGFzKHVybCwgdGhpcy5fZ2V0UmVzb2x1dGlvbihhc3NldC5yZXNvbHV0aW9uKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5URVhUOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFRleHQodXJsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLkpTT046XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkSlNPTih1cmwpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuVElMRU1BUDpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRUaWxlbWFwKHVybCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5USUxFRE1BUDpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRUaWxlZG1hcCh1cmwsICg8SVRpbGVkbWFwQXNzZXRzPmFzc2V0KS5hc3NldHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuUEhZU0lDUzpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRQaHlzaWNzKHVybCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5TUElORTpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTcGluZSh1cmwsIHRoaXMuX2dldFJlc29sdXRpb24oYXNzZXQucmVzb2x1dGlvbikpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5CSVRNQVBfRk9OVDpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRCaXRtYXBGb250KHVybCwgdGhpcy5fZ2V0UmVzb2x1dGlvbihhc3NldC5yZXNvbHV0aW9uKSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICogcGFyc2VzIHRoZSBkYXRhIGZyb20gdGhlIGV4dGVybmFsIGFzc2V0cyBmaWxlIChub3JtYWxseSBkYXRhL2Fzc2V0cy5qc29uKVxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBwcml2YXRlIF9wYXJzZURhdGEoKSB7XG4gICAgICAgIHZhciBrZXk7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gdGhpcy5fZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5fcGFyc2VBc3NldExpc3Qoa2V5LCB0aGlzLl9kYXRhW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0Q2FjaGVCdXN0ZWRVcmwodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5fY2FjaGVCdXN0VmVyc2lvbiA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuX2NhY2hlQnVzdFZlcnNpb24gPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVybCArICc/dj0nICsgdGhpcy5fY2FjaGVCdXN0VmVyc2lvbjtcbiAgICB9XG4gICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICBwdWJsaWMgbG9hZFRleHQodXJsOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuX2dldEFzc2V0S2V5KHVybCk7XG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUubG9hZC50ZXh0KGtleSwgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5fZGF0YVBhdGggKyAnLycgKyB1cmwpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZEpTT04oa2V5OiBzdHJpbmcpIHtcbiAgICAgICAga2V5ID0gdGhpcy5fZ2V0QXNzZXRLZXkoa2V5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZS5sb2FkLmpzb24oa2V5LCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9kYXRhUGF0aCArICcvJyArIGtleSArICcuanNvbicpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZFRpbGVtYXAoa2V5OiBzdHJpbmcpIHtcbiAgICAgICAga2V5ID0gdGhpcy5fZ2V0QXNzZXRLZXkoa2V5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZS5sb2FkLnRpbGVtYXAoa2V5LCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9kYXRhUGF0aCArICcvdGlsZW1hcC8nICsga2V5ICsgJy5qc29uJyksIG51bGwsIFBoYXNlci5UaWxlbWFwLlRJTEVEX0pTT04pO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkVGlsZWRtYXAoa2V5OiBzdHJpbmcsIGFzc2V0czogSUFzc2V0W10pIHtcbiAgICAgICAgaWYgKFBoYXNlci5QbHVnaW5bJ1RpbGVkJ10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RpbGVkbWFwIHJlcXVpcmVzIHRoZSBwaGFzZXItdGlsZWQgcGx1Z2luIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2VuZ2xlcmNqL3BoYXNlci10aWxlZCcpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2FjaGVLZXk6IGFueSA9IFBoYXNlci5QbHVnaW5bJ1RpbGVkJ10udXRpbHMuY2FjaGVLZXk7XG5cbiAgICAgICAgdGhpcy5nYW1lLmxvYWRbJ3RpbGVkbWFwJ10oY2FjaGVLZXkoa2V5LCAndGlsZWRtYXAnKSwgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5fZGF0YVBhdGggKyAnL3RpbGVtYXAvJyArIGtleSArICcuanNvbicpLCBudWxsLCBQaGFzZXIuVGlsZW1hcC5USUxFRF9KU09OKTtcblxuICAgICAgICBhc3NldHMuZm9yRWFjaChhc3NldCA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGFzc2V0LnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5USUxFRE1BUF9USUxFU0VUOlxuICAgICAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLlRJTEVETUFQX0xBWUVSOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRUaWxlZG1hcEltYWdlKGtleSwgYXNzZXQudHlwZSwgYXNzZXQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZFRpbGVkbWFwSW1hZ2Uoa2V5OiBzdHJpbmcsIHRpbGVzZXRJbWFnZVR5cGU6IHN0cmluZywgYXNzZXQ6IElBc3NldCkge1xuICAgICAgICBjb25zdCBjYWNoZUtleTogYW55ID0gUGhhc2VyLlBsdWdpblsnVGlsZWQnXS51dGlscy5jYWNoZUtleTtcblxuICAgICAgICBsZXQgcmVzb2x1dGlvbjogc3RyaW5nID0gJyc7XG4gICAgICAgIGNvbnN0IG5ld0tleTogc3RyaW5nID0gdGhpcy5fZ2V0QXNzZXRLZXkoYXNzZXQudXJsKTtcbiAgICAgICAgY29uc3QgY0tleTogc3RyaW5nID0gY2FjaGVLZXkoa2V5LCAndGlsZXNldCcsIG5ld0tleSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBhc3NldC5yZXNvbHV0aW9uICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmVzb2x1dGlvbiA9IHRoaXMuX2dldFJlc29sdXRpb24oYXNzZXQucmVzb2x1dGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5fZ2V0QXNzZXRLZXkobmV3S2V5ICsgcmVzb2x1dGlvbiArICcuJyArIHRoaXMuX2dldEV4dGVuc2lvbihhc3NldC51cmwpKTtcbiAgICAgICAgY29uc29sZS5sb2coYXNzZXQudXJsLCBjS2V5KTtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoY0tleSwgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5fc3ByaXRlU2hlZXRQYXRoICsgJy8nICsgdXJsICsgJy5wbmcnKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRQaHlzaWNzKGtleTogc3RyaW5nKSB7XG4gICAgICAgIGtleSA9IHRoaXMuX2dldEFzc2V0S2V5KGtleSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUubG9hZC5waHlzaWNzKGtleSwgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5fcGh5c2ljc1BhdGggKyAnLycgKyBrZXkgKyAnLmpzb24nKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRBdGxhcyh1cmw6IHN0cmluZywgcmVzb2x1dGlvbj86IGFueSk6IFBoYXNlci5Mb2FkZXIgfCBzdHJpbmcge1xuICAgICAgICBpZiAodHlwZW9mIHJlc29sdXRpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXNvbHV0aW9uID0gdGhpcy5fZ2V0UmVzb2x1dGlvbihyZXNvbHV0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5nYW1lLmNhY2hlLmNoZWNrSW1hZ2VLZXkodXJsKSkge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lLmxvYWQuYXRsYXNKU09OSGFzaCh1cmwsIHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKHRoaXMuX3Nwcml0ZVNoZWV0UGF0aCArICcvJyArIHVybCArIHJlc29sdXRpb24gKyAnLnBuZycpLCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9zcHJpdGVTaGVldFBhdGggKyAnLycgKyB1cmwgKyByZXNvbHV0aW9uICsgJy5qc29uJykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkSW1hZ2UodXJsOiBzdHJpbmcsIHJlc29sdXRpb24/OiBhbnkpOiBQaGFzZXIuTG9hZGVyIHwgc3RyaW5nIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXNvbHV0aW9uICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmVzb2x1dGlvbiA9IHRoaXMuX2dldFJlc29sdXRpb24ocmVzb2x1dGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qga2V5OiBzdHJpbmcgPSB0aGlzLl9nZXRBc3NldEtleSh1cmwpO1xuXG4gICAgICAgIGlmICh0aGlzLmdhbWUuY2FjaGUuY2hlY2tJbWFnZUtleShrZXkpKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgaW1hZ2Uga2V5IGFscmVhZHkgZXhpc3RzLCBkb24ndCByZWxvYWQgdGhlIGltYWdlIGFuZCByZXR1cm4gdGhlIGtleVxuICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfVxuICAgICAgICB1cmwgPSBrZXkgKyByZXNvbHV0aW9uICsgJy4nICsgdGhpcy5fZ2V0RXh0ZW5zaW9uKHVybCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZS5sb2FkLmltYWdlKGtleSwgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5faW1nUGF0aCArICcvJyArIHVybCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkVmlkZW8odXJsOiBzdHJpbmcsIHJlc29sdXRpb24/OiBhbnkpOiBQaGFzZXIuTG9hZGVyIHwgc3RyaW5nIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXNvbHV0aW9uICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmVzb2x1dGlvbiA9IHRoaXMuX2dldFJlc29sdXRpb24ocmVzb2x1dGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qga2V5OiBzdHJpbmcgPSB0aGlzLl9nZXRBc3NldEtleSh1cmwpO1xuXG4gICAgICAgIGlmICh0aGlzLmdhbWUuY2FjaGUuY2hlY2tWaWRlb0tleShrZXkpKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgaW1hZ2Uga2V5IGFscmVhZHkgZXhpc3RzLCBkb24ndCByZWxvYWQgdGhlIGltYWdlIGFuZCByZXR1cm4gdGhlIGtleVxuICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfVxuICAgICAgICB1cmwgPSBrZXkgKyByZXNvbHV0aW9uICsgJy4nICsgdGhpcy5fZ2V0RXh0ZW5zaW9uKHVybCk7XG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUubG9hZC52aWRlbyhrZXksIHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKHRoaXMuX3ZpZGVvUGF0aCArICcvJyArIHVybCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkU3BpbmUodXJsOiBzdHJpbmcsIHJlc29sdXRpb24/OiBhbnkpOiBzdHJpbmcgfCB2b2lkIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXNvbHV0aW9uICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmVzb2x1dGlvbiA9IHRoaXMuX2dldFJlc29sdXRpb24ocmVzb2x1dGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc29sdXRpb24gPT09ICcnKSB7XG4gICAgICAgICAgICByZXNvbHV0aW9uID0gJ0AxeCc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qga2V5OiBzdHJpbmcgPSB0aGlzLl9nZXRBc3NldEtleSh1cmwpO1xuXG4gICAgICAgIGlmICh0aGlzLmdhbWUuY2FjaGUuY2hlY2tJbWFnZUtleShrZXkpKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgaW1hZ2Uga2V5IGFscmVhZHkgZXhpc3RzLCBkb24ndCByZWxvYWQgdGhlIGltYWdlIGFuZCByZXR1cm4gdGhlIGtleVxuICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfVxuICAgICAgICB1cmwgPSBrZXkgKyByZXNvbHV0aW9uICsgJy5wbmcnO1xuICAgICAgICBjb25zdCBqc29uVXJsID0ga2V5ICsgJy5qc29uJztcbiAgICAgICAgY29uc3QgYXRsYXNVcmwgPSBrZXkgKyByZXNvbHV0aW9uICsgJy5hdGxhcyc7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmpzb24oa2V5ICsgJy5qc29uJywgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5fc3BpbmVQYXRoICsgJy8nICsganNvblVybCkpO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC50ZXh0KGtleSArICcuYXRsYXMnLCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9zcGluZVBhdGggKyAnLycgKyBhdGxhc1VybCkpO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZShrZXkgKyAnLnBuZycsIHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKHRoaXMuX3NwaW5lUGF0aCArICcvJyArIHVybCkpO1xuXG4gICAgICAgIGlmIChTcGluZS5BVVRPX01FU0ggPT09IHRydWUgJiYga2V5LmluZGV4T2YoU3BpbmUuTk9OX01FU0hfU1VGRklYKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZFNwaW5lKGtleSArIFNwaW5lLk5PTl9NRVNIX1NVRkZJWCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZEJpdG1hcEZvbnQodXJsOiBzdHJpbmcsIHJlc29sdXRpb24/OiBhbnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXNvbHV0aW9uICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmVzb2x1dGlvbiA9IHRoaXMuX2dldFJlc29sdXRpb24ocmVzb2x1dGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuYml0bWFwRm9udCh1cmwsIHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKHRoaXMuX2JpdG1hcEZvbnRQYXRoICsgJy8nICsgdXJsICsgcmVzb2x1dGlvbiArICcucG5nJyksIHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKHRoaXMuX2JpdG1hcEZvbnRQYXRoICsgJy8nICsgdXJsICsgcmVzb2x1dGlvbiArICcuanNvbicpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZEF1ZGlvKHVybDogc3RyaW5nLCBleHRzOiBhbnksIGlzQXVkaW9TcHJpdGU6IGJvb2xlYW4pIHtcbiAgICAgICAgdmFyIHR5cGUsIHBhdGg7XG4gICAgICAgIGlmICh0aGlzLmdhbWUuY2FjaGUuY2hlY2tTb3VuZEtleSh1cmwpICYmIHRoaXMuZ2FtZS5jYWNoZS5nZXRTb3VuZCh1cmwpLmlzRGVjb2RlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHR5cGUgc2hvdWxkIGJlICdzb3VuZCcgb3IgJ3Nwcml0ZScgKCdmeCcgYW5kICdtdXNpYycgdG8gYmUgZGVwcmVjYXRlZClcbiAgICAgICAgLy8gZGVmYXVsdCB0byBzb3VuZFxuXG4gICAgICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHR5cGUgPSAnc291bmQnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV4dHMuaW5kZXhPZignLCcpID49IDApIHtcbiAgICAgICAgICAgIGV4dHMgPSBleHRzLnNwbGl0KCcsJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nYW1lLmRldmljZS5pT1MgJiYgZXh0cy5pbmRleE9mKCdtNGEnKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGV4dHMudW5zaGlmdCgnbTRhJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGV4dHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBwYXRoID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwYXRoLnB1c2godGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwoKGlzQXVkaW9TcHJpdGUgPyB0aGlzLl9hdWRpb1Nwcml0ZVBhdGggOiB0aGlzLl9zb3VuZFBhdGgpICsgJy8nICsgdXJsICsgJy4nICsgZXh0c1tpXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGF0aCA9IHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKChpc0F1ZGlvU3ByaXRlID8gdGhpcy5fYXVkaW9TcHJpdGVQYXRoIDogdGhpcy5fc291bmRQYXRoKSArICcvJyArIHR5cGUgKyAnLycgKyB1cmwgKyAnLicgKyBleHRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0F1ZGlvU3ByaXRlKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5hdWRpb3Nwcml0ZSh1cmwsIHBhdGgsIHRoaXMuX2F1ZGlvU3ByaXRlUGF0aCArICcvJyArIHVybCArICcuanNvbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXVkaW8odXJsLCBwYXRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NvdW5kc1RvRGVjb2RlLnB1c2goe1xuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBpc0F1ZGlvU3ByaXRlOiBpc0F1ZGlvU3ByaXRlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkU291bmQodXJsOiBzdHJpbmcsIGV4dHM6IGFueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkQXVkaW8odXJsLCBleHRzLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRBdWRpb1Nwcml0ZSh1cmw6IHN0cmluZywgZXh0czogYW55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRBdWRpbyh1cmwsIGV4dHMsIHRydWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkQXNzZXRzKGlkOiBzdHJpbmcsIGJhY2tncm91bmQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLl9jdXJyZW50QXNzZXRMaXN0ID0gaWQ7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uRmlsZUNvbXBsZXRlLnJlbW92ZSh0aGlzLl9iYWNrZ3JvdW5kRmlsZUNvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQub25GaWxlQ29tcGxldGUucmVtb3ZlKHRoaXMuX2dhbWVGaWxlQ29tcGxldGUsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2hhc0ZpbGVzID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5fZGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fZGF0YVtpZF0gPT09IHVuZGVmaW5lZCB8fCB0aGlzLl9kYXRhW2lkXS5hc3NldHMgPT09IHVuZGVmaW5lZCB8fCB0aGlzLl9kYXRhW2lkXS5hc3NldHMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdubyBwcmVsb2FkIGRhdGEgcmVnaXN0ZXJlZCBmb3IgJywgaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbG9hZEFzc2V0cyhpZCk7XG4gICAgICAgIHRoaXMuX2hhc0ZpbGVzID0gdGhpcy5nYW1lLmxvYWQudG90YWxRdWV1ZWRGaWxlcygpID4gMDtcblxuICAgICAgICBpZiAoYmFja2dyb3VuZCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQub25Mb2FkU3RhcnQuYWRkT25jZSh0aGlzLl9iYWNrZ3JvdW5kTG9hZFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uRmlsZUNvbXBsZXRlLmFkZCh0aGlzLl9iYWNrZ3JvdW5kRmlsZUNvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uTG9hZENvbXBsZXRlLmFkZE9uY2UodGhpcy5fYmFja2dyb3VuZExvYWRDb21wbGV0ZSwgdGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkxvYWRTdGFydC5hZGRPbmNlKHRoaXMuX2dhbWVMb2FkU3RhcnQsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQub25GaWxlU3RhcnQuYWRkKHRoaXMuX2dhbWVGaWxlU3RhcnQsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQub25GaWxlQ29tcGxldGUuYWRkKHRoaXMuX2dhbWVGaWxlQ29tcGxldGUsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQub25Mb2FkQ29tcGxldGUuYWRkT25jZSh0aGlzLl9nYW1lTG9hZENvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5faGFzRmlsZXMpIHtcbiAgICAgICAgICAgIHRoaXMuX2dhbWVMb2FkU3RhcnQoKTtcbiAgICAgICAgICAgIHRoaXMuX2dhbWVGaWxlQ29tcGxldGUoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuX2dhbWVMb2FkQ29tcGxldGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX251bVNvdW5kcyA9IHRoaXMuX3NvdW5kc1RvRGVjb2RlLmxlbmd0aDtcbiAgICAgICAgdGhpcy5fc291bmRzRGVjb2RlZCA9IDA7XG4gICAgICAgIHRoaXMuX21heFBlcmNlbnQgPSAxMDAgLSAodGhpcy5fbnVtU291bmRzICogdGhpcy5zb3VuZERlY29kaW5nTW9kaWZpZXIpO1xuXG4gICAgICAgIGlmIChiYWNrZ3JvdW5kKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRRdWV1ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzTG9hZGluZ1F1ZXVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2RhdGEgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ25vIHByZWxvYWQgcXVldWUgdG8gbG9hZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFzc2V0czogYW55LFxuICAgICAgICAgICAgc3RhdGU6IHN0cmluZyxcbiAgICAgICAgICAgIGk6IG51bWJlcjtcblxuICAgICAgICBmb3IgKHN0YXRlIGluIHRoaXMuX2RhdGEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9hdXRvTG9hZERhdGFbc3RhdGVdKSB7XG5cbiAgICAgICAgICAgICAgICBhc3NldHMgPSB0aGlzLl9kYXRhW3N0YXRlXS5hc3NldHM7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFzc2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkQXNzZXQoYXNzZXRzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdhbWUubG9hZC5zdGFydCgpO1xuICAgICAgICB0aGlzLl9pc0xvYWRpbmdRdWV1ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uTG9hZFN0YXJ0LmFkZE9uY2UodGhpcy5fYmFja2dyb3VuZExvYWRTdGFydCwgdGhpcyk7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uRmlsZUNvbXBsZXRlLmFkZCh0aGlzLl9iYWNrZ3JvdW5kRmlsZUNvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQub25Mb2FkQ29tcGxldGUuYWRkT25jZSh0aGlzLl9iYWNrZ3JvdW5kTG9hZENvbXBsZXRlLCB0aGlzKTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBnZXRMb2FkUHJvZ3Jlc3MoKSB7XG4gICAgICAgIGNvbnN0IGFkanVzdGVkUHJvZ3Jlc3MgPSB0aGlzLl9maWxlQ29tcGxldGVQcm9ncmVzcyAqIHRoaXMuX21heFBlcmNlbnQgLyAxMDA7XG4gICAgICAgIHJldHVybiBhZGp1c3RlZFByb2dyZXNzO1xuICAgIH1cblxuXG4gICAgcHVibGljIGFsbFNvdW5kc0RlY29kZWQoKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3NvdW5kcyB0byBkZWNvZGUnLCB0aGlzLl9zb3VuZHNUb0RlY29kZS5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fc291bmRzVG9EZWNvZGUubGVuZ3RoID09PSAwO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgKiBzZXRzIHRoZSBkYXRhIGZvciB0aGUgQXNzZXRNYW5hZ2VyIHRvIHVzZSBhcyBhIHJlZmVyZW5jZSAodXN1YWxseSBmcm9tIGRhdGEvYXNzZXRzLmpzb24pXG4gICAgKiB0cmlnZ2VycyB0aGUgX3BhcnNlRGF0YSBpbnRlcm5hbCBtZXRob2QsIHdoaWNoIHN0b3JlcyB0aGUgYXNzZXQgbGlzdCBmb3IgbGF0ZXIgdXNlXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dEZpbGVGcm9tQ2FjaGUgdGhlIGlkIG9mIHRoZSBmaWxlIGluIHRoZSBQaGFzZXIuQ2FjaGVcbiAgICAqL1xuICAgIHB1YmxpYyBzZXREYXRhKGRhdGE6IE9iamVjdCkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5fbG9hZERhdGEgPSB7fTtcbiAgICAgICAgdGhpcy5fcGFyc2VEYXRhKCk7XG5cbiAgICAgICAgdGhpcy5zZW5kTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbnMuQVNTRVRfTUFOQUdFUl9EQVRBX1NFVCwgdGhpcy5fZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBjbGVhcnMgdGhlIGFzc2V0cyBmcm9tIGEgcGFydGljdWxhciBpZCBpbiB0aGUgc3RvcmFnZVxuICAgICogQHBhcmFtICB7U3RyaW5nfSBpZCAgICAgICAgICAgIHRoZSBpZCBvZiB0aGUgYXNzZXQgbGlzdCB0byBjbGVhclxuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gW2NsZWFyQXVkaW8gPSB0cnVlXSAgICB3aGV0aGVyIHRvIGNsZWFyIGF1ZGlvIGZpbGVzXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBbY2xlYXJBdGxhc3NlcyA9IHRydWVdIHdoZXRoZXIgdG8gY2xlYXIgdGV4dHVyZSBhdGxhc3Nlc1xuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gW2NsZWFySW1hZ2VzID0gdHJ1ZV0gICB3aGV0aGVyIHRvIGNsZWFyIGltYWdlc1xuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gW2NsZWFyVGV4dCA9IHRydWVdICAgICB3aGV0aGVyIHRvIGNsZWFyIHRleHQgZmlsZXNcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgY2xlYXJBc3NldHMoaWQ6IHN0cmluZywgY2xlYXJBdWRpbzogYm9vbGVhbiA9IHRydWUsIGNsZWFyQXRsYXNzZXM6IGJvb2xlYW4gPSB0cnVlLCBjbGVhckltYWdlczogYm9vbGVhbiA9IHRydWUsIGNsZWFyVGV4dDogYm9vbGVhbiA9IHRydWUsIGNsZWFySlNPTjogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhW2lkXTtcblxuICAgICAgICBjb25zb2xlLmxvZygnY2xlYXJpbmc6ICcsIGlkLCBkYXRhKTtcblxuICAgICAgICBpZiAoIWRhdGEgfHwgdHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnIHx8ICFkYXRhLmFzc2V0cyB8fCBkYXRhLmFzc2V0cy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ25vIGFzc2V0cycsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhc3NldHMgPSBkYXRhLmFzc2V0cztcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFzc2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NsZWFyaW5nIHR5cGUnLCBhc3NldHNbaV0udHlwZSk7XG4gICAgICAgICAgICBpZiAoYXNzZXRzW2ldLnR5cGUgPT09IEFzc2V0TWFuYWdlci5BU1NFVF9MSVNUKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckFzc2V0cyhhc3NldHNbaV0uaWQsIGNsZWFyQXVkaW8sIGNsZWFyQXRsYXNzZXMsIGNsZWFySW1hZ2VzLCBjbGVhclRleHQsIGNsZWFySlNPTik7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNsZWFyQXNzZXQoYXNzZXRzW2ldLCBjbGVhckF1ZGlvLCBjbGVhckF0bGFzc2VzLCBjbGVhckltYWdlcywgY2xlYXJUZXh0LCBjbGVhckpTT04pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY29tcGxldGVkTG9hZHNbaWRdID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2VuZE5vdGlmaWNhdGlvbihOb3RpZmljYXRpb25zLkFTU0VUX01BTkFHRVJfQVNTRVRTX0NMRUFSRUQsIGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGNsZWFycyBhbiBhc3NldCBmcm9tIHRoZSBnYW1lJ3MgbWVtb3J5XG4gICAgKiBAcGFyYW0gIHtPYmplY3R9IGFzc2V0ICAgICAgICAgdGhlIGFzc2V0IHRvIGNsZWFyXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBbY2xlYXJBdWRpbyA9IHRydWVdICAgIHdoZXRoZXIgdG8gY2xlYXIgYXVkaW8gZmlsZXNcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IFtjbGVhckF0bGFzc2VzID0gdHJ1ZV0gd2hldGhlciB0byBjbGVhciB0ZXh0dXJlIGF0bGFzc2VzXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBbY2xlYXJJbWFnZXMgPSB0cnVlXSAgIHdoZXRoZXIgdG8gY2xlYXIgaW1hZ2VzXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBbY2xlYXJUZXh0ID0gdHJ1ZV0gICAgIHdoZXRoZXIgdG8gY2xlYXIgdGV4dCBmaWxlc1xuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyBjbGVhckFzc2V0KGFzc2V0OiBJQXNzZXQsIGNsZWFyQXVkaW86IGJvb2xlYW4gPSB0cnVlLCBjbGVhckF0bGFzc2VzOiBib29sZWFuID0gdHJ1ZSwgY2xlYXJJbWFnZXM6IGJvb2xlYW4gPSB0cnVlLCBjbGVhclRleHQ6IGJvb2xlYW4gPSB0cnVlLCBjbGVhckpTT046IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHZhciB0eXBlID0gYXNzZXQudHlwZSxcbiAgICAgICAgICAgIHVybCA9IGFzc2V0LnVybCxcbiAgICAgICAgICAgIHJlcXVpcmVkID0gYXNzZXQucmVxdWlyZWQ7XG4gICAgICAgICAgICBcblxuICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGUgJyArIHR5cGUgKyAnIGFzc2V0OiAnICsgdXJsICsgJyBpcyByZXF1aXJlZCBhbmQgd2lsbCBub3QgYmUgY2xlYXJlZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuQVVESU86XG4gICAgICAgICAgICAgICAgaWYgKGNsZWFyQXVkaW8pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLnNvdW5kLnJlbW92ZUJ5S2V5KHVybCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jYWNoZS5yZW1vdmVTb3VuZCh1cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLklNQUdFOlxuICAgICAgICAgICAgICAgIGlmIChjbGVhckltYWdlcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFySW1hZ2UodXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5BVExBUzpcbiAgICAgICAgICAgICAgICBpZiAoY2xlYXJBdGxhc3Nlcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFySW1hZ2UodXJsKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNhY2hlLnJlbW92ZUpTT04odXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5URVhUOlxuICAgICAgICAgICAgICAgIGlmIChjbGVhclRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNhY2hlLnJlbW92ZVRleHQodXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5KU09OOlxuICAgICAgICAgICAgICAgIGlmIChjbGVhckpTT04pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNhY2hlLnJlbW92ZUpTT04odXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5QSFlTSUNTOlxuICAgICAgICAgICAgICAgIGlmIChjbGVhckpTT04pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNhY2hlLnJlbW92ZVBoeXNpY3ModXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5TUElORTpcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyU3BpbmVBc3NldChhc3NldC51cmwpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNsZWFySW1hZ2UodXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgbGV0IGltZzphbnkgPSB0aGlzLmdhbWUuY2FjaGUuZ2V0SW1hZ2UodXJsLCB0cnVlKTtcbiAgICAgICAgdGhpcy5nYW1lLmNhY2hlLnJlbW92ZUltYWdlKHVybCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGltZy5iYXNlKTtcbiAgICAgICAgY29uc29sZS5sb2coaW1nLmJhc2UuaW1hZ2VVcmwpO1xuICAgICAgICBpZiAoaW1nICYmIGltZy5kYXRhLmRpc3Bvc2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaW1nLmRhdGEuZGlzcG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGltZyA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyU3BpbmVBc3NldChpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2FtZS5jYWNoZS5yZW1vdmVKU09OKGlkICsgJy5qc29uJyk7XG4gICAgICAgIHRoaXMuZ2FtZS5jYWNoZS5yZW1vdmVUZXh0KGlkICsgJy5hdGxhcycpO1xuICAgICAgICB0aGlzLmNsZWFySW1hZ2UoaWQgKyAnLnBuZycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogY2hlY2tzIGlmIHRoZSBhc3NldHMgZnJvbSB0aGlzIGxpc3QgaWQgYXJlIGFscmVhZHkgbG9hZGVkXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBpZCB0aGUgYXNzZXQgbGlzdCBpZCB0byBjaGVja1xuICAgICogQHJldHVybiB7Qm9vbGVhbn0gICAgd2hldGhlciBpdCBoYXMgYmVlbiBsb2FkZWQgYWxyZWFkeVxuICAgICovXG4gICAgcHVibGljIGhhc0xvYWRlZEFzc2V0cyhpZDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb21wbGV0ZWRMb2Fkc1tpZF0gPT09IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbmROb3RpZmljYXRpb24obm90aWZpY2F0aW9uTmFtZTogc3RyaW5nLCBub3RpZmljYXRpb25Cb2R5PzogYW55KTogdm9pZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwcC5zZW5kTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbk5hbWUsIG5vdGlmaWNhdGlvbkJvZHkpO1xuICAgIH1cblxuICAgIC8vIGdldHRlciAvIHNldHRlclxuICAgIHB1YmxpYyBzZXQgYmFzZVVSTChiYXNlVVJMOiBzdHJpbmcpIHtcbiAgICAgICAgLy8gZW5zdXJlIHRyYWlsaW5nIHNsYXNoXG4gICAgICAgIGlmIChiYXNlVVJMICYmIGJhc2VVUkwgIT09IHVuZGVmaW5lZCAmJiBiYXNlVVJMLmNoYXJBdChiYXNlVVJMLmxlbmd0aCAtIDEpICE9PSAnLycpXG4gICAgICAgICAgICBiYXNlVVJMICs9ICcvJztcblxuICAgICAgICB0aGlzLl9iYXNlVVJMID0gYmFzZVVSTDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBhdGhzKHBhdGhPYmo6IElQYXRoQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuX3BhdGhPYmogPSBwYXRoT2JqIHx8IHt9O1xuXG4gICAgICAgIHRoaXMuX2Fzc2V0UGF0aCA9IHRoaXMuX2Jhc2VVUkwgKyAodGhpcy5fcGF0aE9iai5hc3NldFBhdGggfHwgJ2Fzc2V0cycpO1xuICAgICAgICB0aGlzLl9kYXRhUGF0aCA9IHRoaXMuX2Jhc2VVUkwgKyAodGhpcy5fcGF0aE9iai5kYXRhUGF0aCB8fCAnYXNzZXRzL2RhdGEnKTtcbiAgICAgICAgdGhpcy5fc3ByaXRlU2hlZXRQYXRoID0gdGhpcy5fYmFzZVVSTCArICh0aGlzLl9wYXRoT2JqLnNwcml0ZXNoZWV0UGF0aCB8fCAnYXNzZXRzL2ltZy9zcHJpdGVzaGVldHMnKTtcbiAgICAgICAgdGhpcy5faW1nUGF0aCA9IHRoaXMuX2Jhc2VVUkwgKyAodGhpcy5fcGF0aE9iai5pbWdQYXRoIHx8ICdhc3NldHMvaW1nJyk7XG4gICAgICAgIHRoaXMuX3ZpZGVvUGF0aCA9IHRoaXMuX2Jhc2VVUkwgKyAodGhpcy5fcGF0aE9iai5pbWdQYXRoIHx8ICdhc3NldHMvdmlkZW8nKTtcbiAgICAgICAgdGhpcy5fc3BpbmVQYXRoID0gdGhpcy5fYmFzZVVSTCArICh0aGlzLl9wYXRoT2JqLnNwaW5lUGF0aCB8fCAnYXNzZXRzL3NwaW5lJyk7XG4gICAgICAgIHRoaXMuX2ZvbnRQYXRoID0gdGhpcy5fYmFzZVVSTCArICh0aGlzLl9wYXRoT2JqLmZvbnRQYXRoIHx8ICdhc3NldHMvZm9udHMnKTtcbiAgICAgICAgdGhpcy5fYml0bWFwRm9udFBhdGggPSB0aGlzLl9iYXNlVVJMICsgKHRoaXMuX3BhdGhPYmouYml0bWFwRm9udFBhdGggfHwgJ2Fzc2V0cy9mb250cy9iaXRtYXAnKTtcbiAgICAgICAgdGhpcy5fYXVkaW9TcHJpdGVQYXRoID0gdGhpcy5fYmFzZVVSTCArICh0aGlzLl9wYXRoT2JqLmF1ZGlvU3ByaXRlUGF0aCB8fCAnYXNzZXRzL2F1ZGlvL3Nwcml0ZScpO1xuICAgICAgICB0aGlzLl9zb3VuZFBhdGggPSB0aGlzLl9iYXNlVVJMICsgKHRoaXMuX3BhdGhPYmouc291bmRQYXRoIHx8ICdhc3NldHMvYXVkaW8vc291bmQnKTtcbiAgICAgICAgdGhpcy5fcGh5c2ljc1BhdGggPSB0aGlzLl9iYXNlVVJMICsgKHRoaXMuX3BhdGhPYmoucGh5c2ljc1BhdGggfHwgJ2Fzc2V0cy9kYXRhL3BoeXNpY3MnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHJlc29sdXRpb24ocmVzOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHJlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXMgPSB0aGlzLmdhbWUucmVzb2x1dGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3JlcyA9IHJlcztcbiAgICAgICAgdGhpcy5fcmVzb2x1dGlvbiA9ICcnO1xuXG4gICAgICAgIGlmICh0aGlzLl9yZXMgPiAxLjUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdXRpb24gPSBBc3NldE1hbmFnZXIuUkVTT0xVVElPTl8yWDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcmVzb2x1dGlvbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzO1xuICAgIH1cbiAgICAvKipcbiAgICAqIHNldHMgdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIGxvYWQgd2Ugc2hvdWxkIGFsbG90IHRvIGVhY2ggc291bmRcbiAgICAqIEBwYXJhbSB7TnVtYmVyfSBbbnVtID0gMl0gdGhlIHBlcmNlbnRhZ2VcbiAgICAqL1xuICAgIHB1YmxpYyBzZXQgc291bmREZWNvZGluZ01vZGlmaWVyKG51bTogbnVtYmVyKSB7XG4gICAgICAgIGlmIChudW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbnVtID0gMjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zb3VuZERlY29kaW5nTW9kaWZpZXIgPSBudW07XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzb3VuZERlY29kaW5nTW9kaWZpZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VuZERlY29kaW5nTW9kaWZpZXI7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBjYWNoZUJ1c3RWZXJzaW9uKHZlcnNpb246IHN0cmluZyB8IG51bWJlcikge1xuICAgICAgICB0aGlzLl9jYWNoZUJ1c3RWZXJzaW9uID0gJycgKyB2ZXJzaW9uO1xuICAgIH1cbn0iLCIvKipcbiAqIEF1ZGlvTWFuYWdlclxuICogV3JhcHBlciBmb3IgUGhhc2VyLlNvdW5kTWFuYWdlclxuICovXG5pbXBvcnQge0FwcGxpY2F0aW9ufSBmcm9tICcuLi9hcHBsaWNhdGlvbic7XG5pbXBvcnQge0dhbWV9IGZyb20gJy4uL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXVkaW9NYW5hZ2VyIHtcbiAgICBwdWJsaWMgZ2FtZTogR2FtZTtcblxuICAgIC8vIERpc3BhdGNoZWQgd2hlbmV2ZXIgdGhlIGF1ZGlvIHNwcml0ZSBlbmFibGVkIGZsYWcgaXMgY2hhbmdlZCAgICBcbiAgICBwdWJsaWMgb25TcHJpdGVUb2dnbGU6IFBoYXNlci5TaWduYWw7XG4gICAgLy8gRGlzcGF0Y2hlZCB3aGVuZXZlciB0aGUgc291bmQgZW5hYmxlZCBmbGFnIGlzIGNoYW5nZWRcbiAgICBwdWJsaWMgb25Tb3VuZFRvZ2dsZTogUGhhc2VyLlNpZ25hbDtcbiAgICAvLyBEaXNwYXRjaGVkIHdoZW5ldmVyIHRoZSBzcHJpdGUgZGVmYXVsdCB2b2x1bWUgaXMgY2hhbmdlZFxuICAgIHB1YmxpYyBvblNwcml0ZVZvbHVtZUNoYW5nZTogUGhhc2VyLlNpZ25hbDtcbiAgICAvLyBEaXNwYXRjaGVkIHdoZW5ldmVyIHRoZSBzb3VuZCBkZWZhdWx0IHZvbHVtZSBpcyBjaGFuZ2VkXG4gICAgcHVibGljIG9uU291bmRWb2x1bWVDaGFuZ2U6IFBoYXNlci5TaWduYWw7XG4gICAgXG4gICAgcHJpdmF0ZSBfc3ByaXRlRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJpdmF0ZSBfc291bmRFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwcml2YXRlIF9zcHJpdGVWb2x1bWU6IG51bWJlciA9IDE7XG4gICAgcHJpdmF0ZSBfc291bmRWb2x1bWU6IG51bWJlciA9IDE7XG5cbiAgICBwcml2YXRlIF9zcHJpdGVzOiB7IFtzcHJpdGU6IHN0cmluZ106IFBoYXNlci5BdWRpb1Nwcml0ZSB9ID0ge307XG4gICAgcHJpdmF0ZSBfc291bmRzOiB7IFtzb3VuZDogc3RyaW5nXTogUGhhc2VyLlNvdW5kIH0gPSB7fTtcbiAgICBwcml2YXRlIF9tYXJrZXJMb29rdXA6IHsgW2lkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZTtcbiAgICAgICAgdGhpcy5vblNwcml0ZVRvZ2dsZSA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgICAgIHRoaXMub25TcHJpdGVWb2x1bWVDaGFuZ2UgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuICAgICAgICB0aGlzLm9uU291bmRUb2dnbGUgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuICAgICAgICB0aGlzLm9uU291bmRWb2x1bWVDaGFuZ2UgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuICAgIH1cblxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuICAgIHByaXZhdGUgX2FkZEF1ZGlvKGtleTogc3RyaW5nLCBpc0F1ZGlvU3ByaXRlOiBib29sZWFuID0gZmFsc2UpOiBQaGFzZXIuU291bmQgfCBQaGFzZXIuQXVkaW9TcHJpdGUge1xuICAgICAgICBpZiAoaXNBdWRpb1Nwcml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcnNlQXVkaW9TcHJpdGUoa2V5LCB0aGlzLmdhbWUuYWRkLmF1ZGlvU3ByaXRlKGtleSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FsbG93TXVsdGlwbGUodGhpcy5nYW1lLmFkZC5zb3VuZChrZXkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3BhcnNlQXVkaW9TcHJpdGUoa2V5OiBzdHJpbmcsIGF1ZGlvU3ByaXRlOiBQaGFzZXIuQXVkaW9TcHJpdGUpOiBQaGFzZXIuQXVkaW9TcHJpdGUge1xuICAgICAgICBmb3IgKHZhciBzb3VuZEtleSBpbiBhdWRpb1Nwcml0ZS5zb3VuZHMpIHtcbiAgICAgICAgICAgIHRoaXMuX2FsbG93TXVsdGlwbGUoYXVkaW9TcHJpdGUuc291bmRzW3NvdW5kS2V5XSk7XG4gICAgICAgICAgICB0aGlzLl9tYXJrZXJMb29rdXBbc291bmRLZXldID0ga2V5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhdWRpb1Nwcml0ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9hbGxvd011bHRpcGxlKHNvdW5kOiBQaGFzZXIuU291bmQpOiBQaGFzZXIuU291bmQge1xuICAgICAgICBzb3VuZC5hbGxvd011bHRpcGxlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHNvdW5kO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldEtleUZyb21NYXJrZXJOYW1lKG1hcmtlcjogc3RyaW5nKTogc3RyaW5nIHwgYm9vbGVhbiB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fbWFya2VyTG9va3VwW21hcmtlcl0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWFya2VyTG9va3VwW21hcmtlcl07XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuX3Nwcml0ZXMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3ByaXRlc1trZXldLnNvdW5kc1ttYXJrZXJdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuX21hcmtlckxvb2t1cFttYXJrZXJdID0ga2V5O1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3BsYXlTcHJpdGVNYXJrZXIoa2V5OiBzdHJpbmcsIG1hcmtlcjogc3RyaW5nLCB2b2x1bWU/OiBhbnksIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSwgZm9yY2VSZXN0YXJ0OiBib29sZWFuID0gdHJ1ZSk6IFBoYXNlci5Tb3VuZCB7XG4gICAgICAgIGlmICh0eXBlb2Ygdm9sdW1lICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2b2x1bWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZvbHVtZS5pbmRleE9mKCcrJykgPj0gMCB8fCB2b2x1bWUuaW5kZXhPZignLScpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lID0gdGhpcy5fc3ByaXRlVm9sdW1lICsgcGFyc2VGbG9hdCh2b2x1bWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZSA9IHBhcnNlRmxvYXQodm9sdW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2b2x1bWUgPSB0aGlzLl9zcHJpdGVWb2x1bWU7XG4gICAgICAgIH1cblxuICAgICAgICBsb29wID0gbG9vcCB8fCBmYWxzZTtcbiAgICAgICAgZm9yY2VSZXN0YXJ0ID0gZm9yY2VSZXN0YXJ0ID09PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlc1trZXldLnBsYXkobWFya2VyLCB2b2x1bWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3N0b3BTcHJpdGVNYXJrZXIoa2V5OiBzdHJpbmcsIG1hcmtlcjogc3RyaW5nKTogYm9vbGVhbiB8IFBoYXNlci5Tb3VuZCB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3ByaXRlcyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHRoaXMuX3Nwcml0ZXNba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlc1trZXldLnN0b3AobWFya2VyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zdG9wU291bmQoc291bmQ6IFBoYXNlci5Tb3VuZCk6IHZvaWQge1xuICAgICAgICByZXR1cm4gc291bmQuc3RvcCgpO1xuICAgIH1cblxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgLyoqXG4gICAgKiBhZGRzIGF1ZGlvIHRvIHRoZSBsb29rdXAgKGNhbGxlZCBieSBBc3NldE1hbmFnZXIgd2hlbiBhbnkgc291bmQgaXMgbG9hZGVkLCB1c3VhbGx5IG5vdCBuZWNlc3NhcnkgdG8gY2FsbCBmcm9tIGEgZ2FtZSlcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgICAgICAgICB0aGUgUGhhc2VyLkNhY2hlIGtleSBvZiB0aGUgYXVkaW8gYXNzZXRcbiAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNBdWRpb1Nwcml0ZSB3aGV0aGVyIHRoZSBhc3NldCBpcyBhbiBhdWRpbyBzcHJpdGVcbiAgICAqL1xuICAgIHB1YmxpYyBhZGRBdWRpbyhrZXk6IHN0cmluZywgaXNBdWRpb1Nwcml0ZTogYm9vbGVhbiA9IGZhbHNlKTogUGhhc2VyLkF1ZGlvU3ByaXRlIHwgUGhhc2VyLlNvdW5kIHtcbiAgICAgICAgaWYgKGlzQXVkaW9TcHJpdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZEF1ZGlvU3ByaXRlKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkU291bmQoa2V5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGFkZHMgYSBzaW5nbGUgc291bmQgdG8gdGhlIGxvb2t1cCAodXN1YWxseSBub3QgbmVjZXNzYXJ5IHRvIGNhbGwgZnJvbSBhIGdhbWUpXG4gICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IHRoZSBQaGFzZXIuQ2FjaGUga2V5IG9mIHRoZSBhc3NldFxuICAgICogQHJldHVybiB7UGhhc2VyLlNvdW5kfSB0aGUgYWRkZWQgc291bmRcbiAgICAqL1xuICAgIHB1YmxpYyBhZGRTb3VuZChrZXkpOiBQaGFzZXIuU291bmQge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3NvdW5kc1trZXldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NvdW5kc1trZXldID0gdGhpcy5nYW1lLmFkZC5hdWRpbyhrZXkpO1xuICAgICAgICB0aGlzLl9zb3VuZHNba2V5XS5hbGxvd011bHRpcGxlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kc1trZXldO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogYWRkcyBhbiBhdWRpbyBzcHJpdGUgdG8gdGhlIGxvb2t1cCAodXN1YWxseSBub3QgbmVjZXNzYXJ5IHRvIGNhbGwgZnJvbSBhIGdhbWUpXG4gICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IHRoZSBQaGFzZXIuQ2FjaGUga2V5IG9mIHRoZSBhc3NldFxuICAgICogQHJldHVybiB7UGhhc2VyLkF1ZGlvU3ByaXRlfSB0aGUgYWRkZWQgYXVkaW8gc3ByaXRlXG4gICAgKi9cbiAgICBwdWJsaWMgYWRkQXVkaW9TcHJpdGUoa2V5OiBzdHJpbmcpOiBQaGFzZXIuQXVkaW9TcHJpdGUge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3Nwcml0ZXNba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3ByaXRlc1trZXldID0gPFBoYXNlci5BdWRpb1Nwcml0ZT50aGlzLl9hZGRBdWRpbyhrZXksIHRydWUpO1xuICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlc1trZXldO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogYSBnbG9iYWwgbWV0aG9kIHRvIHBsYXkgYSBzb3VuZCAtIHdpbGwgY2hlY2sgYXVkaW8gc3ByaXRlIG1hcmtlcnMgZm9yIHRoZSBwcm92aWRlZCBrZXkgZmlyc3QsIHRoZW4gc2luZ2xlIHNvdW5kc1xuICAgICogQHBhcmFtICB7U3RyaW5nfSBtYXJrZXIgICAgICAgdGhlIHNvdW5kIG1hcmtlciAob3Iga2V5KSB0byBjaGVjayBmb3JcbiAgICAqIEBwYXJhbSAge051bWJlcn0gdm9sdW1lICAgICAgIHRoZSB2b2x1bWUgYXQgd2hpY2ggdG8gcGxheSB0aGUgc291bmRcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IGxvb3AgICAgICAgICB3aGV0aGVyIHRoZSBzb3VuZCBzaG91bGQgbG9vcCAod29uJ3Qgd29yayBpZiBpdCdzIGEgc3ByaXRlIG1hcmtlciwgYW5kIFwibG9vcFwiIGhhc24ndCBiZWVuIHNldCBpbiB0aGUgYXVkaW8gc3ByaXRlIGRlc2NyaXB0b3IgZmlsZSlcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IGZvcmNlUmVzdGFydCB3aGV0aGVyIHRvIHJlc3RhcnQgdGhlIHNvdW5kIGlmIGl0J3MgYWxyZWFkeSBwbGF5aW5nXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuU291bmR9ICAgICAgICAgICAgICB0aGUgcGxheWluZyBzb3VuZFxuICAgICovXG4gICAgcHVibGljIHBsYXlBdWRpbyhtYXJrZXI6IHN0cmluZywgdm9sdW1lOiBudW1iZXIgPSB0aGlzLl9zcHJpdGVWb2x1bWUsIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSwgZm9yY2VSZXN0YXJ0OiBib29sZWFuID0gdHJ1ZSk6IFBoYXNlci5Tb3VuZCB7XG4gICAgICAgIGlmICh0aGlzLl9nZXRLZXlGcm9tTWFya2VyTmFtZShtYXJrZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5U3ByaXRlTWFya2VyKG1hcmtlciwgdGhpcy5fc3ByaXRlRW5hYmxlZCA/IHZvbHVtZSA6IDAsIGxvb3AsIGZvcmNlUmVzdGFydCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5wbGF5U291bmQobWFya2VyLCB0aGlzLl9zcHJpdGVFbmFibGVkID8gdm9sdW1lIDogMCwgbG9vcCwgZm9yY2VSZXN0YXJ0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGNhbGxzIERpam9uLkF1ZGlvTWFuYWdlci5wbGF5QXVkaW8gb24gYSBkZWxheVxuICAgICogQHBhcmFtICB7aW50fSBkZWxheSAgICAgICAgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheSB0aGUgc291bmRcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gbWFya2VyICAgICAgIHRoZSBzb3VuZCBtYXJrZXIgKG9yIGtleSkgdG8gY2hlY2sgZm9yXG4gICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHZvbHVtZSAgICAgICB0aGUgdm9sdW1lIGF0IHdoaWNoIHRvIHBsYXkgdGhlIHNvdW5kXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBsb29wICAgICAgICAgd2hldGhlciB0aGUgc291bmQgc2hvdWxkIGxvb3AgKHdvbid0IHdvcmsgaWYgaXQncyBhIHNwcml0ZSBtYXJrZXIsIGFuZCBcImxvb3BcIiBoYXNuJ3QgYmVlbiBzZXQgaW4gdGhlIGF1ZGlvIHNwcml0ZSBkZXNjcmlwdG9yIGZpbGUpXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBmb3JjZVJlc3RhcnQgd2hldGhlciB0byByZXN0YXJ0IHRoZSBzb3VuZCBpZiBpdCdzIGFscmVhZHkgcGxheWluZ1xuICAgICovXG4gICAgcHVibGljIHBsYXlEZWxheWVkQXVkaW8oZGVsYXk6IG51bWJlciwgbWFya2VyOiBzdHJpbmcsIHZvbHVtZTogbnVtYmVyID0gdGhpcy5fc3ByaXRlVm9sdW1lLCBsb29wOiBib29sZWFuID0gZmFsc2UsIGZvcmNlUmVzdGFydDogYm9vbGVhbiA9IHRydWUpOiBQaGFzZXIuU291bmQge1xuICAgICAgICBpZiAodGhpcy5fZ2V0S2V5RnJvbU1hcmtlck5hbWUobWFya2VyKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheURlbGF5ZWRTcHJpdGVNYXJrZXIoZGVsYXksIG1hcmtlciwgdGhpcy5fc3ByaXRlRW5hYmxlZCA/IHZvbHVtZSA6IDAsIGxvb3AsIGZvcmNlUmVzdGFydCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGxheURlbGF5ZWRTb3VuZChkZWxheSwgbWFya2VyLCB0aGlzLl9zcHJpdGVFbmFibGVkID8gdm9sdW1lIDogMCwgbG9vcCwgZm9yY2VSZXN0YXJ0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHBsYXlzIGEgc2luZ2xlIHNvdW5kXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGtleSAgICAgICAgICB0aGUgUGhhc2VyLkNhY2hlIGtleSBmb3IgdGhlIHNvdW5kXG4gICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHZvbHVtZSAgICAgICB0aGUgdm9sdW1lIGF0IHdoaWNoIHRvIHBsYXkgdGhlIHNvdW5kXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBsb29wICAgICAgICAgd2hldGhlciB0aGUgc291bmQgc2hvdWxkIGxvb3AgKHdvbid0IHdvcmsgaWYgaXQncyBhIHNwcml0ZSBtYXJrZXIsIGFuZCBcImxvb3BcIiBoYXNuJ3QgYmVlbiBzZXQgaW4gdGhlIGF1ZGlvIHNwcml0ZSBkZXNjcmlwdG9yIGZpbGUpXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBmb3JjZVJlc3RhcnQgd2hldGhlciB0byByZXN0YXJ0IHRoZSBzb3VuZCBpZiBpdCdzIGFscmVhZHkgcGxheWluZ1xuICAgICogQHJldHVybiB7UGhhc2VyLlNvdW5kfSB0aGUgcGxheWluZyBzb3VuZFxuICAgICovXG4gICAgcHVibGljIHBsYXlTb3VuZChrZXk6IHN0cmluZywgdm9sdW1lOiBudW1iZXIgPSB0aGlzLl9zb3VuZFZvbHVtZSwgbG9vcDogYm9vbGVhbiA9IGZhbHNlLCBmb3JjZVJlc3RhcnQ6IGJvb2xlYW4gPSB0cnVlKTogUGhhc2VyLlNvdW5kIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zb3VuZHNba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kc1trZXldLnBsYXkoXCJcIiwgMCwgdGhpcy5fc291bmRFbmFibGVkID8gdm9sdW1lIDogMCwgbG9vcCwgZm9yY2VSZXN0YXJ0KTtcbiAgICB9XG5cbiAgICAvLyBzaW1pbGF0IHRvIHBsYXlTb3VuZCwgYnV0IGp1c3QgcmV0dXJucyB0aGUgUGhhc2VyLlNvdW5kIGluc3RhbmNlXG4gICAgcHVibGljIGdldFNvdW5kKGtleTogc3RyaW5nLCB2b2x1bWU6IG51bWJlciA9IHRoaXMuX3NvdW5kVm9sdW1lLCBsb29wOiBib29sZWFuID0gZmFsc2UsIGZvcmNlUmVzdGFydDogYm9vbGVhbiA9IHRydWUpOiBQaGFzZXIuU291bmR7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc291bmRzW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VuZHNba2V5XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHBsYXlzIGEgbWFya2VyIGZyb20gYW4gYXVkaW8gc3ByaXRlXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IG1hcmtlciAgICAgICB0aGUgbWFya2VyIHRvIGNoZWNrIGZvciAod2lsbCBjaGVjayBhbGwgYXVkaW8gc3ByaXRlcylcbiAgICAqIEBwYXJhbSAge051bWJlcn0gdm9sdW1lICAgICAgIHRoZSB2b2x1bWUgYXQgd2hpY2ggdG8gcGxheSB0aGUgc291bmRcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IGxvb3AgICAgICAgICB3aGV0aGVyIHRoZSBzb3VuZCBzaG91bGQgbG9vcCAod29uJ3Qgd29yayBpZiBpdCdzIGEgc3ByaXRlIG1hcmtlciwgYW5kIFwibG9vcFwiIGhhc24ndCBiZWVuIHNldCBpbiB0aGUgYXVkaW8gc3ByaXRlIGRlc2NyaXB0b3IgZmlsZSlcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IGZvcmNlUmVzdGFydCB3aGV0aGVyIHRvIHJlc3RhcnQgdGhlIHNvdW5kIGlmIGl0J3MgYWxyZWFkeSBwbGF5aW5nXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuU291bmR9IHRoZSBwbGF5aW5nIHNvdW5kXG4gICAgKi9cbiAgICBwdWJsaWMgcGxheVNwcml0ZU1hcmtlcihtYXJrZXI6IHN0cmluZywgdm9sdW1lOiBudW1iZXIgPSB0aGlzLl9zcHJpdGVWb2x1bWUsIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSwgZm9yY2VSZXN0YXJ0OiBib29sZWFuID0gdHJ1ZSk6IFBoYXNlci5Tb3VuZCB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuX2dldEtleUZyb21NYXJrZXJOYW1lKG1hcmtlcik7XG5cbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtYXJrZXIgbm90IGZvdW5kJywgbWFya2VyKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXlTcHJpdGVNYXJrZXIoPHN0cmluZz5rZXksIG1hcmtlciwgdGhpcy5fc3ByaXRlRW5hYmxlZCA/IHZvbHVtZSA6IDAsIGxvb3AsIGZvcmNlUmVzdGFydCk7XG4gICAgfVxuXG4gICAgcHVibGljIHBsYXlEZWxheWVkU291bmQoZGVsYXk6IG51bWJlciwga2V5OiBzdHJpbmcsIHZvbHVtZTogbnVtYmVyID0gdGhpcy5fc291bmRWb2x1bWUsIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSwgZm9yY2VSZXN0YXJ0OiBib29sZWFuID0gdHJ1ZSk6IFBoYXNlci5Tb3VuZCB7XG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoZGVsYXksIHRoaXMucGxheVNvdW5kLCB0aGlzLCBrZXksIHZvbHVtZSwgbG9vcCwgZm9yY2VSZXN0YXJ0KTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHBsYXlEZWxheWVkU3ByaXRlTWFya2VyKGRlbGF5OiBudW1iZXIsIG1hcmtlcjogc3RyaW5nLCB2b2x1bWU6IG51bWJlciA9IHRoaXMuX3Nwcml0ZVZvbHVtZSwgbG9vcDogYm9vbGVhbiA9IGZhbHNlLCBmb3JjZVJlc3RhcnQ6IGJvb2xlYW4gPSB0cnVlKTogUGhhc2VyLlNvdW5kIHtcbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmFkZChkZWxheSwgdGhpcy5wbGF5U3ByaXRlTWFya2VyLCB0aGlzLCBtYXJrZXIsIHZvbHVtZSwgbG9vcCwgZm9yY2VSZXN0YXJ0KTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBzdG9wcyBhbnkgcGxheWluZyBhdWRpbyBmaWxlIHdpdGggdGhlIGdpdmVuIG1hcmtlclxuICAgICogY2hlY2tzIGF1ZGlvIHNwcml0ZXMgZmlyc3QsIHRoZW4gc2luZ2xlIHNvdW5kc1xuICAgICogQHJldHVybiB7UGhhc2VyLlNvdW5kfSB0aGUgc291bmQgdGhhdCB3YXMgc3RvcHBlZFxuICAgICovXG4gICAgcHVibGljIHN0b3BBdWRpbyhtYXJrZXI6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fZ2V0S2V5RnJvbU1hcmtlck5hbWUobWFya2VyKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcFNwcml0ZU1hcmtlcihtYXJrZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3BTb3VuZChtYXJrZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogc3RvcHMgYSBzaW5nbGUgc291bmQgZnJvbSBwbGF5aW5nXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuU291bmR9IHRoZSBzb3VuZCB0aGF0IHdhcyBzdG9wcGVkXG4gICAgKi9cbiAgICBwdWJsaWMgc3RvcFNvdW5kKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc291bmRzID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgdGhpcy5fc291bmRzW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kc1trZXldLnN0b3AoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHN0b3BzIGEgc2luZ2xlIHNvdW5kIGZyb20gcGxheWluZ1xuICAgICogQHJldHVybiB7UGhhc2VyLlNvdW5kfSB0aGUgc291bmQgdGhhdCB3YXMgc3RvcHBlZFxuICAgICovXG4gICAgcHVibGljIHN0b3BTcHJpdGVNYXJrZXIobWFya2VyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuX2dldEtleUZyb21NYXJrZXJOYW1lKG1hcmtlcik7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbWFya2VyIG5vdCBmb3VuZCcsIG1hcmtlcik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RvcFNwcml0ZU1hcmtlcig8c3RyaW5nPmtleSwgbWFya2VyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHN0b3BzIHJlbW92ZXMgYSBzb3VuZCBmcm9tIERpam9uLkF1ZGlvTWFuYWdlcidzIGxvb2t1cFxuICAgICogQHBhcmFtICB7U3RyaW5nfSBrZXkgdGhlIGtleSBvZiB0aGUgc291bmQgdG8gYmUgcmVtb3ZlZFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyByZW1vdmVTb3VuZChrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zb3VuZHMgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB0aGlzLl9zb3VuZHNba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fc291bmRzW2tleV0pIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcFNvdW5kKGtleSk7XG4gICAgICAgICAgICB0aGlzLl9zb3VuZHNba2V5XS5kZXN0cm95KCk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fc291bmRzW2tleV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHN0b3BzIHJlbW92ZXMgYW4gYXVkaW8gc3ByaXRlIGZyb20gRGlqb24uQXVkaW9NYW5hZ2VyJ3MgbG9va3VwXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGtleSB0aGUga2V5IG9mIHRoZSBzb3VuZCB0byBiZSByZW1vdmVkXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIHJlbW92ZVNwcml0ZShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3Nwcml0ZXMgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB0aGlzLl9zcHJpdGVzW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdG9wU3ByaXRlTWFya2VyKGtleSk7XG4gICAgICAgIHRoaXMuX3Nwcml0ZXNba2V5XSA9IG51bGw7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9zcHJpdGVzW2tleV07XG4gICAgfVxuXG4gICAgcHVibGljIGZhZGUoc291bmQ6IFBoYXNlci5Tb3VuZCwgdm9sdW1lOiBudW1iZXIsIHRpbWU6IG51bWJlciwgc3RvcDogYm9vbGVhbiA9IGZhbHNlKTogUGhhc2VyLlR3ZWVuIHtcbiAgICAgICAgaWYgKCFzb3VuZClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBpZiAoc291bmQuZmFkZVR3ZWVuICYmIHNvdW5kLmZhZGVUd2VlbilcbiAgICAgICAgICAgIHRoaXMuZ2FtZS50d2VlbnMucmVtb3ZlKHNvdW5kLmZhZGVUd2Vlbik7XG5cbiAgICAgICAgc291bmQuZmFkZVR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbihzb3VuZCkudG8oe1xuICAgICAgICAgICAgdm9sdW1lOiB2b2x1bWVcbiAgICAgICAgfSwgdGltZSB8fCAzMDAsIFBoYXNlci5FYXNpbmcuTGluZWFyLk5vbmUpO1xuXG4gICAgICAgIGlmIChzdG9wID09PSB0cnVlKVxuICAgICAgICAgICAgc291bmQuZmFkZVR3ZWVuLm9uQ29tcGxldGUuYWRkT25jZShmdW5jdGlvbiAoKSB7IHRoaXMuX3N0b3BTb3VuZChzb3VuZCkgfSwgdGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIHNvdW5kLmZhZGVUd2Vlbi5zdGFydCgpO1xuICAgIH1cbiAgICBcbiAgICAvKiBHRVQvU0VUICovXG5cbiAgICBwdWJsaWMgc2V0IHNwcml0ZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fc3ByaXRlRW5hYmxlZCA9IHZhbHVlO1xuICAgICAgICB0aGlzLm9uU3ByaXRlVG9nZ2xlLmRpc3BhdGNoKHRoaXMuX3Nwcml0ZUVuYWJsZWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc291bmRFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3NvdW5kRW5hYmxlZCA9IHZhbHVlO1xuICAgICAgICB0aGlzLm9uU291bmRUb2dnbGUuZGlzcGF0Y2godGhpcy5fc291bmRFbmFibGVkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHNwcml0ZVZvbHVtZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh2YWx1ZSA8IDAgfHwgdmFsdWUgPiAxKSB7XG4gICAgICAgICAgICByZXR1cm47ICAgICBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zcHJpdGVWb2x1bWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5vblNwcml0ZVZvbHVtZUNoYW5nZS5kaXNwYXRjaCh0aGlzLl9zcHJpdGVWb2x1bWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc291bmRWb2x1bWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodmFsdWUgPCAwIHx8IHZhbHVlID4gMSkge1xuICAgICAgICAgICAgcmV0dXJuOyAgICBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zb3VuZFZvbHVtZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm9uU291bmRWb2x1bWVDaGFuZ2UuZGlzcGF0Y2godGhpcy5fc291bmRWb2x1bWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc3ByaXRlRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZUVuYWJsZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzb3VuZEVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VuZEVuYWJsZWQ7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXQgc3ByaXRlVm9sdW1lKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGVWb2x1bWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzb3VuZFZvbHVtZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fc291bmRWb2x1bWU7XG4gICAgfVxufSIsIi8qKlxuICogR2FtZVxuICovXG5pbXBvcnQge0FwcGxpY2F0aW9ufSBmcm9tICcuLi9hcHBsaWNhdGlvbic7XG5pbXBvcnQge0lHYW1lQ29uZmlnfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7QXNzZXRNYW5hZ2VyLCBUcmFuc2l0aW9uTWFuYWdlciwgU2VxdWVuY2VNYW5hZ2VyLCBTdG9yYWdlTWFuYWdlciwgQXVkaW9NYW5hZ2VyLCBBbmFseXRpY3NNYW5hZ2VyLCBHYW1lT2JqZWN0RmFjdG9yeX0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQge0dyb3VwfSBmcm9tICcuLi9kaXNwbGF5JztcbmltcG9ydCB7Tm90aWZpY2F0aW9uc30gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgR2FtZSBleHRlbmRzIFBoYXNlci5HYW1lIHtcbiAgICAvLyBwdWJsaWMgdmFyaWFibGVzICAgIFxuICAgIC8vIGFwcGxpY2F0aW9uXG4gICAgcHVibGljIGFwcDogQXBwbGljYXRpb247XG4gICAgcHVibGljIGNvbmZpZzogSUdhbWVDb25maWc7XG4gICAgXG4gICAgLy8gbWFuYWdlcnNcbiAgICBwdWJsaWMgYXNzZXQ6IEFzc2V0TWFuYWdlcjtcbiAgICBwdWJsaWMgc2VxdWVuY2U6IFNlcXVlbmNlTWFuYWdlcjtcbiAgICBwdWJsaWMgdHJhbnNpdGlvbjogVHJhbnNpdGlvbk1hbmFnZXI7XG4gICAgcHVibGljIHN0b3JhZ2U6IFN0b3JhZ2VNYW5hZ2VyO1xuICAgIHB1YmxpYyBhdWRpbzogQXVkaW9NYW5hZ2VyO1xuICAgIHB1YmxpYyBhbmFseXRpY3M6IEFuYWx5dGljc01hbmFnZXI7XG4gICAgcHVibGljIGFkZDogR2FtZU9iamVjdEZhY3Rvcnk7XG5cbiAgICAvLyBzaWduYWxzXG4gICAgcHVibGljIG9uV29ybGRJbnB1dERpc2FibGVkOiBQaGFzZXIuU2lnbmFsID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICBwdWJsaWMgb25Xb3JsZElucHV0RW5hYmxlZDogUGhhc2VyLlNpZ25hbCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG5cbiAgICAvLyBkaXNwbGF5IGxheWVyc1xuICAgIHB1YmxpYyBiYWNrZ3JvdW5kTGF5ZXI6IEdyb3VwO1xuICAgIHB1YmxpYyBnYW1lTGF5ZXI6IEdyb3VwO1xuICAgIHB1YmxpYyB1aUxheWVyOiBHcm91cDtcbiAgICBwdWJsaWMgc3RhZ2VMYXllcjogR3JvdXA7XG5cbiAgICAvLyBQaGFzZXIuR2FtZSBvdmVycmlkZXNcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IElHYW1lQ29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgfVxuXG4gICAgcHVibGljIGJvb3QoKSB7XG4gICAgICAgIHN1cGVyLmJvb3QoKTtcblxuICAgICAgICB0aGlzLmFwcCA9IEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCk7XG5cbiAgICAgICAgLy8gYWRkIG1hbmFnZXJzXG4gICAgICAgIHRoaXMuYXNzZXQgPSBuZXcgQXNzZXRNYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMuc2VxdWVuY2UgPSBuZXcgU2VxdWVuY2VNYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IG5ldyBUcmFuc2l0aW9uTWFuYWdlcigpO1xuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgU3RvcmFnZU1hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5hdWRpbyA9IG5ldyBBdWRpb01hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5hbmFseXRpY3MgPSBuZXcgQW5hbHl0aWNzTWFuYWdlcih0aGlzLmNvbmZpZy5hbmFseXRpY3MpO1xuXG4gICAgICAgIC8vIHJlcGxhY2UgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5XG4gICAgICAgIHRoaXMuYWRkID0gbnVsbDtcbiAgICAgICAgdGhpcy5hZGQgPSBuZXcgR2FtZU9iamVjdEZhY3RvcnkodGhpcyk7XG4gICAgICAgIHRoaXMuYWRkTGF5ZXJzKCk7XG4gICAgICAgIHRoaXMuYWRkTW91c2VDYWxsYmFja3MoKTtcbiAgICAgICAgdGhpcy5zZXRGYWN0b3J5RGVmYXVsdExheWVyKHRoaXMuZ2FtZUxheWVyKTtcbiAgICB9IFxuXG4gICAgcHVibGljIGFkZFBsdWdpbnMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5wbHVnaW5zICYmIHRoaXMuY29uZmlnLnBsdWdpbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5jb25maWcucGx1Z2lucy5mb3JFYWNoKHBsdWdpbk5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgUGhhc2VyLlBsdWdpbltwbHVnaW5OYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZC5wbHVnaW4oUGhhc2VyLlBsdWdpbltwbHVnaW5OYW1lXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBPdmVycmlkZSB0aGlzLndvcmxkIGFzIHRoZSBkZWZhdWx0IGxheWVyIHRoYXRcbiAgICAvLyAuYWRkIGNhbGxzIHdpbGwgYmUgY3JlYXRlZCBvbi5cbiAgICBwdWJsaWMgc2V0RmFjdG9yeURlZmF1bHRMYXllcihuZXdMYXllcjogUGhhc2VyLkdyb3VwKSB7XG4gICAgICAgIHRoaXMuYWRkLnNldERlZmF1bHRMYXllcihuZXdMYXllciB8fCB0aGlzLndvcmxkKTtcbiAgICB9XG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgcHJvdGVjdGVkIGFkZExheWVycygpOiB2b2lkIHtcbiAgICAgICAgLy8gYWRkcyBwZXJzaXN0ZW50IGJhY2tncm91bmQgbGF5ZXJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kTGF5ZXIgPSB0aGlzLmFkZC5kR3JvdXAoMCwgMCwgJ19iYWNrZ3JvdW5kX2xheWVyJywgdHJ1ZSk7XG4gICAgICAgIHRoaXMuc3RhZ2Uuc2V0Q2hpbGRJbmRleCh0aGlzLmJhY2tncm91bmRMYXllciwgMCk7XG5cbiAgICAgICAgLy8gYWRkcyBnYW1lIGFuZCB1aSBsYXllcnNcbiAgICAgICAgdGhpcy5nYW1lTGF5ZXIgPSB0aGlzLmFkZC5kR3JvdXAoMCwgMCwgJ19nYW1lX2xheWVyJyk7XG4gICAgICAgIC8vIGFkZCB1aSBsYXllciBhbmQgc2V0IHRoZSBcImZpeGVkVG9DYW1lcmFcIiBwcm9wZXJ0eSB0byB0cnVlXG4gICAgICAgIC8vIGlmIHRoZSBnYW1lJ3MgY2FtZXJhIG1vdmVzLCBhbnl0aGluZyBpbiB0aGlzIGdyb3VwIHdpbGwgc3RheSBpbiBwbGFjZVxuICAgICAgICB0aGlzLnVpTGF5ZXIgPSB0aGlzLmFkZC5kR3JvdXAoMCwgMCwgJ191aV9sYXllcicpO1xuICAgICAgICB0aGlzLnVpTGF5ZXIuZml4ZWRUb0NhbWVyYSA9IHRydWU7XG5cbiAgICAgICAgLy8gYWRkIGEgZ3JvdXAgdG8gdGhlIFBoYXNlci5TdGFnZSAoanVzdCBpbiBjYXNlKVxuICAgICAgICB0aGlzLnN0YWdlTGF5ZXIgPSB0aGlzLmFkZC5kR3JvdXAoMCwgMCwgJ19zdGFnZV9sYXllcicsIHRydWUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGRNb3VzZUNhbGxiYWNrcygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZGV2aWNlLmRlc2t0b3ApIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQubW91c2UubW91c2VPdmVyQ2FsbGJhY2sgPSB0aGlzLm1vdXNlT3ZlcjtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQubW91c2UubW91c2VPdXRDYWxsYmFjayA9IHRoaXMubW91c2VPdXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbW91c2VPdXQoKTogdm9pZCB7XG4gICAgICAgIEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuc2VuZE5vdGlmaWNhdGlvbihOb3RpZmljYXRpb25zLk1PVVNFX0xFQVZFX0dMT0JBTCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1vdXNlT3ZlcigpOiB2b2lkIHtcbiAgICAgICAgQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5zZW5kTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbnMuTU9VU0VfRU5URVJfR0xPQkFMKTtcbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuICAgIHB1YmxpYyBkaXNhYmxlRWxlbWVudElucHV0KGVsOiBhbnkpOiBhbnkge1xuICAgICAgICBpZiAoZWwuaW5wdXQgJiYgZWwuaW5wdXRFbmFibGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICBlbC53YXNFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGVsLmlucHV0RW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlRWxlbWVudElucHV0KGVsLmNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBlbmFibGVFbGVtZW50SW5wdXQoZWw6IGFueSk6IGFueSB7XG4gICAgICAgIGlmIChlbC5pbnB1dCAmJiBlbC5pbnB1dEVuYWJsZWQgPT09IGZhbHNlICYmIGVsLndhc0VuYWJsZWQpIHtcbiAgICAgICAgICAgIGVsLndhc0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGVsLmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWwuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZUVsZW1lbnRJbnB1dChlbC5jaGlsZHJlbltpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzYWJsZUlucHV0KGdyb3VwOiBQaGFzZXIuR3JvdXApOiBhbnkge1xuICAgICAgICByZXR1cm4gZ3JvdXAuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIGlmIChlbCBpbnN0YW5jZW9mIFBoYXNlci5Hcm91cCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRpc2FibGVJbnB1dChlbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRpc2FibGVFbGVtZW50SW5wdXQoZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZW5hYmxlSW5wdXQoZ3JvdXA6IFBoYXNlci5Hcm91cCk6IGFueSB7XG4gICAgICAgIHJldHVybiBncm91cC5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgaWYgKGVsIGluc3RhbmNlb2YgUGhhc2VyLkdyb3VwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW5hYmxlSW5wdXQoZWwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbmFibGVFbGVtZW50SW5wdXQoZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzYWJsZUdhbWVJbnB1dCgpIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlSW5wdXQodGhpcy5nYW1lTGF5ZXIpO1xuICAgICAgICB0aGlzLm9uV29ybGRJbnB1dERpc2FibGVkLmRpc3BhdGNoKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGVuYWJsZUdhbWVJbnB1dCgpIHtcbiAgICAgICAgdGhpcy5lbmFibGVJbnB1dCh0aGlzLmdhbWVMYXllcik7XG4gICAgICAgIHRoaXMub25Xb3JsZElucHV0RW5hYmxlZC5kaXNwYXRjaCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJlbW92ZXMgYWxsIGl0ZW1zIGZyb20gdGhlIGdhbWUgbGF5ZXJcbiAgICAgKiBidXQgYWxsb3dzIHRoZSB1aSBsYXllciB0byBwZXJzaXN0XG4gICAgICogdGhhdCB3YXkgd2UgY2FuIG92ZXJsYXkgdGhlIGdhbWUgd2l0aG91dCBhZGRpbmcgc3R1ZmYgdG8gdGhlIHBoYXNlciBzdGFnZSAoZm9yIHRyYW5zaXRpb25zKVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0b1N0YXRlIHRoZSBuZXcgc3RhdGUgd2UncmUgY2hhbmdpbmcgdG9cbiAgICAgKiBAcGFyYW0ge2FueX0gYXJncyBhbiBvcHRpb25hbCBwYXJhbWV0ZXIuIFRoaXMgY2FuIGJlIHVzZWQgdG8gcGFzcyBpbiBhIHRva2VuL29iamVjdCBcbiAgICAgKiBjb250YWluaW5nIHNwZWNpZmljIHBhcmFtZXRlcnMgZm9yIHRoZSBzdGF0ZSB5b3UgYXJlIGNoYW5naW5nIHRvLiBUaGUgaW5pdCgpIGZ1bmN0aW9uIG9mIFxuICAgICAqIHRoYXQgc3RhdGUgbXVzdCBhbHNvIHRha2UgYW4gb2JqZWN0IG9mIHR5cGUgYW55LlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgcHVibGljIGNoYW5nZVN0YXRlKHRvU3RhdGU6IHN0cmluZywgYXJncz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmdhbWVMYXllci5yZW1vdmVBbGwodHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnN0YXJ0KHRvU3RhdGUsIGZhbHNlLCBmYWxzZSwgYXJncyk7XG4gICAgfVxuXG4gICAgLy8gZ2V0dGVyIC8gc2V0dGVyXG4gICAgLyoqXG4gICAgICogc2V0cyB0aGUgdGFyZ2V0IGdyb3VwIGZvciB0aGUgZ2FtZU9iamVjdEZhY3RvcnkgdG8gZ2FtZUxheWVyIGJlZm9yZSBhZGRpbmdcbiAgICAgKiB0aGlzIHdheSBpZiB3ZSBwYXNzIGEgbnVsbCBncm91cCB0byB3aGF0ZXZlciBtZXRob2Qgd2UgY2FsbFxuICAgICAqIGllICh0aGlzLmdhbWUuYWRkVG9HYW1lLmltYWdlKDAsIDAsIGtleSwgZnJhbWUpKTtcbiAgICAgKiBpdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBhcHByb3ByaWF0ZSBsYXllclxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgYWRkVG9HYW1lKCk6IEdhbWVPYmplY3RGYWN0b3J5IHtcbiAgICAgICAgdGhpcy5hZGQudGFyZ2V0R3JvdXAgPSB0aGlzLmdhbWVMYXllcjtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHNldHMgdGhlIHRhcmdldCBncm91cCBmb3IgdGhlIGdhbWVPYmplY3RGYWN0b3J5IHRvIHVpTGF5ZXIgYmVmb3JlIGFkZGluZ1xuICAgICAqIHRoaXMgd2F5IGlmIHdlIHBhc3MgYSBudWxsIGdyb3VwIHRvIHdoYXRldmVyIG1ldGhvZCB3ZSBjYWxsXG4gICAgICogaWUgKHRoaXMuZ2FtZS5hZGRUb1VJLmltYWdlKDAsIDAsIGtleSwgZnJhbWUpKTtcbiAgICAgKiBpdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBhcHByb3ByaWF0ZSBsYXllclxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgYWRkVG9CYWNrZ3JvdW5kKCk6IEdhbWVPYmplY3RGYWN0b3J5IHtcbiAgICAgICAgdGhpcy5hZGQudGFyZ2V0R3JvdXAgPSB0aGlzLmJhY2tncm91bmRMYXllcjtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkO1xuICAgIH1cblxuXG4gICAgcHVibGljIGdldCBhZGRUb1VJKCk6IEdhbWVPYmplY3RGYWN0b3J5IHtcbiAgICAgICAgLy8gc2V0IHRoZSB0YXJnZXQgZ3JvdXAgZm9yIHRoZSBnYW1lT2JqZWN0RmFjdG9yeSBiZWZvcmUgYWRkaW5nXG4gICAgICAgIHRoaXMuYWRkLnRhcmdldEdyb3VwID0gdGhpcy51aUxheWVyO1xuICAgICAgICByZXR1cm4gdGhpcy5hZGQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhZGRUb1N0YWdlKCk6IEdhbWVPYmplY3RGYWN0b3J5IHtcbiAgICAgICAgLy8gc2V0IHRoZSB0YXJnZXQgZ3JvdXAgZm9yIHRoZSBnYW1lT2JqZWN0RmFjdG9yeSBiZWZvcmUgYWRkaW5nXG4gICAgICAgIHRoaXMuYWRkLnRhcmdldEdyb3VwID0gdGhpcy5zdGFnZUxheWVyO1xuICAgICAgICByZXR1cm4gdGhpcy5hZGQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhZGRUb1dvcmxkKCk6IEdhbWVPYmplY3RGYWN0b3J5IHtcbiAgICAgICAgLy8gc2V0IHRoZSB0YXJnZXQgZ3JvdXAgZm9yIHRoZSBnYW1lT2JqZWN0RmFjdG9yeSBiZWZvcmUgYWRkaW5nXG4gICAgICAgIHRoaXMuYWRkLnRhcmdldEdyb3VwID0gdGhpcy53b3JsZDtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkO1xuICAgIH1cblxuICAgIC8vIFF1aWNrbHkgZ3JhYiB0aGUgY2VudGVyWCBvZiB0aGUgd29ybGQgKG5vdCByb3VuZGVkKS4gICBcbiAgICBwdWJsaWMgZ2V0IGNlbnRlclgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2lkdGggKiAwLjU7XG4gICAgfVxuXG4gICAgLy8gUXVpY2tseSBncmFiIHRoZSBjZW50ZXJZIG9mIHRoZSB3b3JsZCAobm90IHJvdW5kZWQpLiAgICBcbiAgICBwdWJsaWMgZ2V0IGNlbnRlclkoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0ICogMC41O1xuICAgIH1cbn0iLCIvKipcbiAqIEdhbWVPYmplY3RGYWN0b3J5XG4gKi9cblxuaW1wb3J0IHtUZXh0LCBHcm91cCwgU3BpbmUsIFNwcml0ZSwgQ29tcG9uZW50LCBCaXRtYXBUZXh0fSBmcm9tICcuLi9kaXNwbGF5Jztcbi8qKlxuICogR2FtZU9iamVjdEZhY3RvcnlcbiAqL1xuXG5leHBvcnQgY2xhc3MgR2FtZU9iamVjdEZhY3RvcnkgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdEZhY3Rvcnkge1xuICAgIC8vIFRoZSBsYXllciB0aGUgY3VycmVudCBvYmplY3Qgd2lsbCBiZSBhZGRlZCB0by4gVGhpcyBpcyB1c2VkIGJ5IGhlbHBlciBmdW5jdGlvbnMgaW4gR2FtZS50cy5cbiAgICBwcm90ZWN0ZWQgX3RhcmdldEdyb3VwOiBQaGFzZXIuR3JvdXAgPSBudWxsO1xuXG4gICAgLy8gVGhpcyBpcyB0aGUgbGF5ZXIgdGhhdCBzdGFuZGFyZCAuYWRkIGNhbGxzIHdpbGwgYmUgYXBwbGllZCB0by5cbiAgICBwcm90ZWN0ZWQgX2RlZmF1bHRMYXllcjogUGhhc2VyLkdyb3VwID0gdGhpcy53b3JsZDtcblxuICAgIC8vIG92ZXJyaWRlc1xuICAgIC8qKlxuICAgICogQWRkcyBhbiBleGlzdGluZyBkaXNwbGF5IG9iamVjdCB0byB0aGUgZ2FtZSB3b3JsZC5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSNleGlzdGluZ1xuICAgICogQHBhcmFtIHthbnl9IG9iamVjdCAtIEFuIGluc3RhbmNlIG9mIFBoYXNlci5TcHJpdGUsIFBoYXNlci5CdXR0b24gb3IgYW55IG90aGVyIGRpc3BsYXkgb2JqZWN0LlxuICAgICogQHJldHVybiB7YW55fSBUaGUgY2hpbGQgdGhhdCB3YXMgYWRkZWQgdG8gdGhlIFdvcmxkLlxuICAgICovXG4gICAgcHVibGljIGV4aXN0aW5nKG9iamVjdCk6IGFueSB7XG4gICAgICAgIGxldCBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7XG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkKG9iamVjdCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogQ3JlYXRlIGEgbmV3IGBJbWFnZWAgb2JqZWN0LlxuICAgICpcbiAgICAqIEFuIEltYWdlIGlzIGEgbGlnaHQtd2VpZ2h0IG9iamVjdCB5b3UgY2FuIHVzZSB0byBkaXNwbGF5IGFueXRoaW5nIHRoYXQgZG9lc24ndCBuZWVkIHBoeXNpY3Mgb3IgYW5pbWF0aW9uLlxuICAgICpcbiAgICAqIEl0IGNhbiBzdGlsbCByb3RhdGUsIHNjYWxlLCBjcm9wIGFuZCByZWNlaXZlIGlucHV0IGV2ZW50cy5cbiAgICAqIFRoaXMgbWFrZXMgaXQgcGVyZmVjdCBmb3IgbG9nb3MsIGJhY2tncm91bmRzLCBzaW1wbGUgYnV0dG9ucyBhbmQgb3RoZXIgbm9uLVNwcml0ZSBncmFwaGljcy5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSNpbWFnZVxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt4PTBdIC0gVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgSW1hZ2UuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgSW1hZ2UgbWF5IGJlIGluLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt5PTBdIC0gVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgSW1hZ2UuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgSW1hZ2UgbWF5IGJlIGluLlxuICAgICogQHBhcmFtIHtzdHJpbmd8UGhhc2VyLlJlbmRlclRleHR1cmV8UGhhc2VyLkJpdG1hcERhdGF8UGhhc2VyLlZpZGVvfFBJWEkuVGV4dHVyZX0gW2tleV0gLSBUaGUgaW1hZ2UgdXNlZCBhcyBhIHRleHR1cmUgYnkgdGhpcyBkaXNwbGF5IG9iamVjdCBkdXJpbmcgcmVuZGVyaW5nLiBJZiBhIHN0cmluZyBQaGFzZXIgd2lsbCBnZXQgZm9yIGFuIGVudHJ5IGluIHRoZSBJbWFnZSBDYWNoZS4gT3IgaXQgY2FuIGJlIGFuIGluc3RhbmNlIG9mIGEgUmVuZGVyVGV4dHVyZSwgQml0bWFwRGF0YSwgVmlkZW8gb3IgUElYSS5UZXh0dXJlLlxuICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbZnJhbWVdIC0gSWYgYSBUZXh0dXJlIEF0bGFzIG9yIFNwcml0ZSBTaGVldCBpcyB1c2VkIHRoaXMgYWxsb3dzIHlvdSB0byBzcGVjaWZ5IHRoZSBmcmFtZSB0byBiZSB1c2VkLiBVc2UgZWl0aGVyIGFuIGludGVnZXIgZm9yIGEgRnJhbWUgSUQgb3IgYSBzdHJpbmcgZm9yIGEgZnJhbWUgbmFtZS5cbiAgICAqIEBwYXJhbSB7UGhhc2VyLkdyb3VwfSBbZ3JvdXBdIC0gT3B0aW9uYWwgR3JvdXAgdG8gYWRkIHRoZSBvYmplY3QgdG8uIElmIG5vdCBzcGVjaWZpZWQgaXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgV29ybGQgZ3JvdXAuXG4gICAgKiBAcmV0dXJucyB7UGhhc2VyLkltYWdlfSBUaGUgbmV3bHkgY3JlYXRlZCBJbWFnZSBvYmplY3QuXG4gICAgKi9cbiAgICBwdWJsaWMgaW1hZ2UoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwga2V5Pzogc3RyaW5nIHwgUGhhc2VyLlJlbmRlclRleHR1cmUgfCBQaGFzZXIuQml0bWFwRGF0YSB8IFBJWEkuVGV4dHVyZSwgZnJhbWU/OiBzdHJpbmcgfCBudW1iZXIsIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogUGhhc2VyLkltYWdlIHtcbiAgICAgICAgaWYgKGdyb3VwID09PSB1bmRlZmluZWQpIHsgZ3JvdXAgPSB0aGlzLnRhcmdldEdyb3VwOyB9XG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBQaGFzZXIuSW1hZ2UodGhpcy5nYW1lLCB4LCB5LCBrZXksIGZyYW1lKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgU3ByaXRlIHdpdGggc3BlY2lmaWMgcG9zaXRpb24gYW5kIHNwcml0ZSBzaGVldCBrZXkuXG4gICAgKlxuICAgICogQXQgaXRzIG1vc3QgYmFzaWMgYSBTcHJpdGUgY29uc2lzdHMgb2YgYSBzZXQgb2YgY29vcmRpbmF0ZXMgYW5kIGEgdGV4dHVyZSB0aGF0IGlzIHVzZWQgd2hlbiByZW5kZXJlZC5cbiAgICAqIFRoZXkgYWxzbyBjb250YWluIGFkZGl0aW9uYWwgcHJvcGVydGllcyBhbGxvd2luZyBmb3IgcGh5c2ljcyBtb3Rpb24gKHZpYSBTcHJpdGUuYm9keSksIGlucHV0IGhhbmRsaW5nICh2aWEgU3ByaXRlLmlucHV0KSxcbiAgICAqIGV2ZW50cyAodmlhIFNwcml0ZS5ldmVudHMpLCBhbmltYXRpb24gKHZpYSBTcHJpdGUuYW5pbWF0aW9ucyksIGNhbWVyYSBjdWxsaW5nIGFuZCBtb3JlLiBQbGVhc2Ugc2VlIHRoZSBFeGFtcGxlcyBmb3IgdXNlIGNhc2VzLlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5I3Nwcml0ZVxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt4PTBdIC0gVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgc3ByaXRlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIHNwcml0ZSBtYXkgYmUgaW4uXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3k9MF0gLSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBzcHJpdGUuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgc3ByaXRlIG1heSBiZSBpbi5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfFBoYXNlci5SZW5kZXJUZXh0dXJlfFBoYXNlci5CaXRtYXBEYXRhfFBoYXNlci5WaWRlb3xQSVhJLlRleHR1cmV9IFtrZXldIC0gVGhlIGltYWdlIHVzZWQgYXMgYSB0ZXh0dXJlIGJ5IHRoaXMgZGlzcGxheSBvYmplY3QgZHVyaW5nIHJlbmRlcmluZy4gSWYgYSBzdHJpbmcgUGhhc2VyIHdpbGwgZ2V0IGZvciBhbiBlbnRyeSBpbiB0aGUgSW1hZ2UgQ2FjaGUuIE9yIGl0IGNhbiBiZSBhbiBpbnN0YW5jZSBvZiBhIFJlbmRlclRleHR1cmUsIEJpdG1hcERhdGEsIFZpZGVvIG9yIFBJWEkuVGV4dHVyZS5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW2ZyYW1lXSAtIElmIGEgVGV4dHVyZSBBdGxhcyBvciBTcHJpdGUgU2hlZXQgaXMgdXNlZCB0aGlzIGFsbG93cyB5b3UgdG8gc3BlY2lmeSB0aGUgZnJhbWUgdG8gYmUgdXNlZC4gVXNlIGVpdGhlciBhbiBpbnRlZ2VyIGZvciBhIEZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXG4gICAgKiBAcGFyYW0ge1BoYXNlci5Hcm91cH0gW2dyb3VwXSAtIE9wdGlvbmFsIEdyb3VwIHRvIGFkZCB0aGUgb2JqZWN0IHRvLiBJZiBub3Qgc3BlY2lmaWVkIGl0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIFdvcmxkIGdyb3VwLlxuICAgICogQHJldHVybnMge1BoYXNlci5TcHJpdGV9IFRoZSBuZXdseSBjcmVhdGVkIFNwcml0ZSBvYmplY3QuXG4gICAgKi9cbiAgICBwdWJsaWMgc3ByaXRlKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIGtleT86IHN0cmluZyB8IFBJWEkuVGV4dHVyZSwgZnJhbWU/OiBzdHJpbmcgfCBudW1iZXIsIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogUGhhc2VyLlNwcml0ZSB7XG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy50YXJnZXRHcm91cDsgfVxuICAgICAgICB0aGlzLnRhcmdldEdyb3VwID0gbnVsbDtcblxuICAgICAgICByZXR1cm4gZ3JvdXAuY3JlYXRlKHgsIHksIGtleSwgZnJhbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQ3JlYXRlIGEgbmV3IENyZWF0dXJlIEFuaW1hdGlvbiBvYmplY3QuXG4gICAgKlxuICAgICogQ3JlYXR1cmUgaXMgYSBjdXN0b20gR2FtZSBPYmplY3QgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBDcmVhdHVyZSBSdW50aW1lIGxpYnJhcmllcyBieSBLZXN0cmVsIE1vb24gU3R1ZGlvcy5cbiAgICAqXG4gICAgKiBJdCBhbGxvd3MgeW91IHRvIGRpc3BsYXkgYW5pbWF0ZWQgR2FtZSBPYmplY3RzIHRoYXQgd2VyZSBjcmVhdGVkIHdpdGggdGhlIFtDcmVhdHVyZSBBdXRvbWF0ZWQgQW5pbWF0aW9uIFRvb2xdKGh0dHA6Ly93d3cua2VzdHJlbG1vb24uY29tL2NyZWF0dXJlLykuXG4gICAgKlxuICAgICogTm90ZSAxOiBZb3UgY2FuIG9ubHkgdXNlIFBoYXNlci5DcmVhdHVyZSBvYmplY3RzIGluIFdlYkdMIGVuYWJsZWQgZ2FtZXMuIFRoZXkgZG8gbm90IHdvcmsgaW4gQ2FudmFzIG1vZGUgZ2FtZXMuXG4gICAgKlxuICAgICogTm90ZSAyOiBZb3UgbXVzdCB1c2UgYSBidWlsZCBvZiBQaGFzZXIgdGhhdCBpbmNsdWRlcyB0aGUgQ3JlYXR1cmVNZXNoQm9uZS5qcyBydW50aW1lIGFuZCBnbC1tYXRyaXguanMsIG9yIGhhdmUgdGhlbVxuICAgICogbG9hZGVkIGJlZm9yZSB5b3VyIFBoYXNlciBnYW1lIGJvb3RzLlxuICAgICpcbiAgICAqIFNlZSB0aGUgUGhhc2VyIGN1c3RvbSBidWlsZCBwcm9jZXNzIGZvciBtb3JlIGRldGFpbHMuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkjY3JlYXR1cmVcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeD0wXSAtIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIGNyZWF0dXJlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIGNyZWF0dXJlIG1heSBiZSBpbi5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeT0wXSAtIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIGNyZWF0dXJlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIGNyZWF0dXJlIG1heSBiZSBpbi5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfFBJWEkuVGV4dHVyZX0gW2tleV0gLSBUaGUgaW1hZ2UgdXNlZCBhcyBhIHRleHR1cmUgYnkgdGhpcyBjcmVhdHVyZSBvYmplY3QgZHVyaW5nIHJlbmRlcmluZy4gSWYgYSBzdHJpbmcgUGhhc2VyIHdpbGwgZ2V0IGZvciBhbiBlbnRyeSBpbiB0aGUgSW1hZ2UgQ2FjaGUuIE9yIGl0IGNhbiBiZSBhbiBpbnN0YW5jZSBvZiBhIFBJWEkuVGV4dHVyZS5cbiAgICAqIEBwYXJhbSB7UGhhc2VyLkdyb3VwfSBbZ3JvdXBdIC0gT3B0aW9uYWwgR3JvdXAgdG8gYWRkIHRoZSBvYmplY3QgdG8uIElmIG5vdCBzcGVjaWZpZWQgaXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgRGVmYXVsdCBMYXllciBncm91cC5cbiAgICAqIEByZXR1cm5zIHtQaGFzZXIuQ3JlYXR1cmV9IFRoZSBuZXdseSBjcmVhdGVkIFNwcml0ZSBvYmplY3QuXG4gICAgKi9cbiAgICBwdWJsaWMgY3JlYXR1cmUoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwga2V5Pzogc3RyaW5nLCBtZXNoPzogYW55LCBncm91cD86IFBoYXNlci5Hcm91cCk6IGFueSB7XG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy50YXJnZXRHcm91cDsgfVxuICAgICAgICB0aGlzLnRhcmdldEdyb3VwID0gbnVsbDtcblxuICAgICAgICB2YXIgb2JqID0gbmV3IFBoYXNlclsnQ3JlYXR1cmUnXSh0aGlzLmdhbWUsIHgsIHksIGtleSwgbWVzaCk7XG5cbiAgICAgICAgZ3JvdXAuYWRkKG9iaik7XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEEgR3JvdXAgaXMgYSBjb250YWluZXIgZm9yIGRpc3BsYXkgb2JqZWN0cyB0aGF0IGFsbG93cyBmb3IgZmFzdCBwb29saW5nLCByZWN5Y2xpbmcgYW5kIGNvbGxpc2lvbiBjaGVja3MuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkjZ3JvdXBcbiAgICAqIEBwYXJhbSB7YW55fSBbcGFyZW50XSAtIFRoZSBwYXJlbnQgR3JvdXAgb3IgRGlzcGxheU9iamVjdENvbnRhaW5lciB0aGF0IHdpbGwgaG9sZCB0aGlzIGdyb3VwLCBpZiBhbnkuIElmIHNldCB0byBudWxsIHRoZSBHcm91cCB3b24ndCBiZSBhZGRlZCB0byB0aGUgZGlzcGxheSBsaXN0LiBJZiB1bmRlZmluZWQgaXQgd2lsbCBiZSBhZGRlZCB0byBXb3JsZCBieSBkZWZhdWx0LlxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lPSdncm91cCddIC0gQSBuYW1lIGZvciB0aGlzIEdyb3VwLiBOb3QgdXNlZCBpbnRlcm5hbGx5IGJ1dCB1c2VmdWwgZm9yIGRlYnVnZ2luZy5cbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2FkZFRvU3RhZ2U9ZmFsc2VdIC0gSWYgc2V0IHRvIHRydWUgdGhpcyBHcm91cCB3aWxsIGJlIGFkZGVkIGRpcmVjdGx5IHRvIHRoZSBHYW1lLlN0YWdlIGluc3RlYWQgb2YgR2FtZS5Xb3JsZC5cbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2VuYWJsZUJvZHk9ZmFsc2VdIC0gSWYgdHJ1ZSBhbGwgU3ByaXRlcyBjcmVhdGVkIHdpdGggYEdyb3VwLmNyZWF0ZWAgb3IgYEdyb3VwLmNyZWF0ZU11bGl0cGxlYCB3aWxsIGhhdmUgYSBwaHlzaWNzIGJvZHkgY3JlYXRlZCBvbiB0aGVtLiBDaGFuZ2UgdGhlIGJvZHkgdHlwZSB3aXRoIHBoeXNpY3NCb2R5VHlwZS5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbcGh5c2ljc0JvZHlUeXBlPTBdIC0gSWYgZW5hYmxlQm9keSBpcyB0cnVlIHRoaXMgaXMgdGhlIHR5cGUgb2YgcGh5c2ljcyBib2R5IHRoYXQgaXMgY3JlYXRlZCBvbiBuZXcgU3ByaXRlcy4gUGhhc2VyLlBoeXNpY3MuQVJDQURFLCBQaGFzZXIuUGh5c2ljcy5QMiwgUGhhc2VyLlBoeXNpY3MuTklOSkEsIGV0Yy5cbiAgICAqIEByZXR1cm4ge1BoYXNlci5Hcm91cH0gVGhlIG5ld2x5IGNyZWF0ZWQgR3JvdXAuXG4gICAgKi9cbiAgICBwdWJsaWMgZ3JvdXAocGFyZW50PzogYW55LCBuYW1lOiBzdHJpbmcgPSAnZ3JvdXAnLCBhZGRUb1N0YWdlOiBib29sZWFuID0gZmFsc2UsIGVuYWJsZUJvZHk6IGJvb2xlYW4gPSBmYWxzZSwgcGh5c2ljc0JvZHlUeXBlOiBudW1iZXIgPSAwKSB7XG4gICAgICAgIGlmIChwYXJlbnQgPT09IHVuZGVmaW5lZCAmJiBhZGRUb1N0YWdlICE9PSB0cnVlKSB7IHBhcmVudCA9IHRoaXMudGFyZ2V0R3JvdXA7IH1cbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBuZXcgUGhhc2VyLkdyb3VwKHRoaXMuZ2FtZSwgcGFyZW50LCBuYW1lLCBhZGRUb1N0YWdlLCBlbmFibGVCb2R5LCBwaHlzaWNzQm9keVR5cGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQSBHcm91cCBpcyBhIGNvbnRhaW5lciBmb3IgZGlzcGxheSBvYmplY3RzIHRoYXQgYWxsb3dzIGZvciBmYXN0IHBvb2xpbmcsIHJlY3ljbGluZyBhbmQgY29sbGlzaW9uIGNoZWNrcy5cbiAgICAqXG4gICAgKiBBIFBoeXNpY3MgR3JvdXAgaXMgdGhlIHNhbWUgYXMgYW4gb3JkaW5hcnkgR3JvdXAgZXhjZXB0IHRoYXQgaXMgaGFzIGVuYWJsZUJvZHkgdHVybmVkIG9uIGJ5IGRlZmF1bHQsIHNvIGFueSBTcHJpdGVzIGl0IGNyZWF0ZXNcbiAgICAqIGFyZSBhdXRvbWF0aWNhbGx5IGdpdmVuIGEgcGh5c2ljcyBib2R5LlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5I3BoeXNpY3NHcm91cFxuICAgICogQHBhcmFtIHtudW1iZXJ9IFtwaHlzaWNzQm9keVR5cGU9UGhhc2VyLlBoeXNpY3MuQVJDQURFXSAtIElmIGVuYWJsZUJvZHkgaXMgdHJ1ZSB0aGlzIGlzIHRoZSB0eXBlIG9mIHBoeXNpY3MgYm9keSB0aGF0IGlzIGNyZWF0ZWQgb24gbmV3IFNwcml0ZXMuIFBoYXNlci5QaHlzaWNzLkFSQ0FERSwgUGhhc2VyLlBoeXNpY3MuUDIsIFBoYXNlci5QaHlzaWNzLk5JTkpBLCBldGMuXG4gICAgKiBAcGFyYW0ge2FueX0gW3BhcmVudF0gLSBUaGUgcGFyZW50IEdyb3VwIG9yIERpc3BsYXlPYmplY3RDb250YWluZXIgdGhhdCB3aWxsIGhvbGQgdGhpcyBncm91cCwgaWYgYW55LiBJZiBzZXQgdG8gbnVsbCB0aGUgR3JvdXAgd29uJ3QgYmUgYWRkZWQgdG8gdGhlIGRpc3BsYXkgbGlzdC4gSWYgdW5kZWZpbmVkIGl0IHdpbGwgYmUgYWRkZWQgdG8gV29ybGQgYnkgZGVmYXVsdC5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZT0nZ3JvdXAnXSAtIEEgbmFtZSBmb3IgdGhpcyBHcm91cC4gTm90IHVzZWQgaW50ZXJuYWxseSBidXQgdXNlZnVsIGZvciBkZWJ1Z2dpbmcuXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFthZGRUb1N0YWdlPWZhbHNlXSAtIElmIHNldCB0byB0cnVlIHRoaXMgR3JvdXAgd2lsbCBiZSBhZGRlZCBkaXJlY3RseSB0byB0aGUgR2FtZS5TdGFnZSBpbnN0ZWFkIG9mIEdhbWUuV29ybGQuXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuR3JvdXB9IFRoZSBuZXdseSBjcmVhdGVkIEdyb3VwLlxuICAgICovXG4gICAgcHVibGljIHBoeXNpY3NHcm91cChwaHlzaWNzQm9keVR5cGU6IG51bWJlciA9IDAsIHBhcmVudD86IGFueSwgbmFtZTogc3RyaW5nID0gJ2dyb3VwJywgYWRkVG9TdGFnZTogYm9vbGVhbiA9IGZhbHNlKTogUGhhc2VyLkdyb3VwIHtcbiAgICAgICAgaWYgKHBhcmVudCA9PT0gdW5kZWZpbmVkKSB7IHBhcmVudCA9IHRoaXMudGFyZ2V0R3JvdXA7IH1cbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBuZXcgUGhhc2VyLkdyb3VwKHRoaXMuZ2FtZSwgcGFyZW50LCBuYW1lLCBhZGRUb1N0YWdlLCB0cnVlLCBwaHlzaWNzQm9keVR5cGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQSBTcHJpdGVCYXRjaCBpcyBhIHJlYWxseSBmYXN0IHZlcnNpb24gb2YgYSBQaGFzZXIgR3JvdXAgYnVpbHQgc29sZWx5IGZvciBzcGVlZC5cbiAgICAqIFVzZSB3aGVuIHlvdSBuZWVkIGEgbG90IG9mIHNwcml0ZXMgb3IgcGFydGljbGVzIGFsbCBzaGFyaW5nIHRoZSBzYW1lIHRleHR1cmUuXG4gICAgKiBUaGUgc3BlZWQgZ2FpbnMgYXJlIHNwZWNpZmljYWxseSBmb3IgV2ViR0wuIEluIENhbnZhcyBtb2RlIHlvdSB3b24ndCBzZWUgYW55IHJlYWwgZGlmZmVyZW5jZS5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSNzcHJpdGVCYXRjaFxuICAgICogQHBhcmFtIHtQaGFzZXIuR3JvdXB8bnVsbH0gcGFyZW50IC0gVGhlIHBhcmVudCBHcm91cCB0aGF0IHdpbGwgaG9sZCB0aGlzIFNwcml0ZSBCYXRjaC4gU2V0IHRvIGB1bmRlZmluZWRgIG9yIGBudWxsYCB0byBhZGQgZGlyZWN0bHkgdG8gZ2FtZS53b3JsZC5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZT0nZ3JvdXAnXSAtIEEgbmFtZSBmb3IgdGhpcyBTcHJpdGUgQmF0Y2guIE5vdCB1c2VkIGludGVybmFsbHkgYnV0IHVzZWZ1bCBmb3IgZGVidWdnaW5nLlxuICAgICogQHBhcmFtIHtib29sZWFufSBbYWRkVG9TdGFnZT1mYWxzZV0gLSBJZiBzZXQgdG8gdHJ1ZSB0aGlzIFNwcml0ZSBCYXRjaCB3aWxsIGJlIGFkZGVkIGRpcmVjdGx5IHRvIHRoZSBHYW1lLlN0YWdlIGluc3RlYWQgb2YgdGhlIHBhcmVudC5cbiAgICAqIEByZXR1cm4ge1BoYXNlci5TcHJpdGVCYXRjaH0gVGhlIG5ld2x5IGNyZWF0ZWQgU3ByaXRlIEJhdGNoLlxuICAgICovXG4gICAgcHVibGljIHNwcml0ZUJhdGNoKHBhcmVudD86IGFueSwgbmFtZTogc3RyaW5nID0gXCJzcHJpdGVCYXRjaFwiLCBhZGRUb1N0YWdlOiBib29sZWFuID0gZmFsc2UpOiBQaGFzZXIuU3ByaXRlQmF0Y2gge1xuICAgICAgICBpZiAocGFyZW50ID09PSB1bmRlZmluZWQpIHsgcGFyZW50ID0gdGhpcy50YXJnZXRHcm91cCB9XG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4gbmV3IFBoYXNlci5TcHJpdGVCYXRjaCh0aGlzLmdhbWUsIHBhcmVudCwgbmFtZSwgYWRkVG9TdGFnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgVGlsZVNwcml0ZSBvYmplY3QuXG4gICAqXG4gICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5I3RpbGVTcHJpdGVcbiAgICogQHBhcmFtIHtudW1iZXJ9IHggLSBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBUaWxlU3ByaXRlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIFRpbGVTcHJpdGUgbWF5IGJlIGluLlxuICAgKiBAcGFyYW0ge251bWJlcn0geSAtIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIFRpbGVTcHJpdGUuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgVGlsZVNwcml0ZSBtYXkgYmUgaW4uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAtIFRoZSB3aWR0aCBvZiB0aGUgVGlsZVNwcml0ZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCAtIFRoZSBoZWlnaHQgb2YgdGhlIFRpbGVTcHJpdGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfFBoYXNlci5SZW5kZXJUZXh0dXJlfFBoYXNlci5CaXRtYXBEYXRhfFBoYXNlci5WaWRlb3xQSVhJLlRleHR1cmV9IGtleSAtIFRoZSBpbWFnZSB1c2VkIGFzIGEgdGV4dHVyZSBieSB0aGlzIGRpc3BsYXkgb2JqZWN0IGR1cmluZyByZW5kZXJpbmcuIElmIGEgc3RyaW5nIFBoYXNlciB3aWxsIGdldCBmb3IgYW4gZW50cnkgaW4gdGhlIEltYWdlIENhY2hlLiBPciBpdCBjYW4gYmUgYW4gaW5zdGFuY2Ugb2YgYSBSZW5kZXJUZXh0dXJlLCBCaXRtYXBEYXRhLCBWaWRlbyBvciBQSVhJLlRleHR1cmUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW2ZyYW1lXSAtIElmIGEgVGV4dHVyZSBBdGxhcyBvciBTcHJpdGUgU2hlZXQgaXMgdXNlZCB0aGlzIGFsbG93cyB5b3UgdG8gc3BlY2lmeSB0aGUgZnJhbWUgdG8gYmUgdXNlZC4gVXNlIGVpdGhlciBhbiBpbnRlZ2VyIGZvciBhIEZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXG4gICAqIEBwYXJhbSB7UGhhc2VyLkdyb3VwfSBbZ3JvdXBdIC0gT3B0aW9uYWwgR3JvdXAgdG8gYWRkIHRoZSBvYmplY3QgdG8uIElmIG5vdCBzcGVjaWZpZWQgaXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgRGVmYXVsdCBMYXllciBncm91cC5cbiAgICogQHJldHVybiB7UGhhc2VyLlRpbGVTcHJpdGV9IFRoZSBuZXdseSBjcmVhdGVkIFRpbGVTcHJpdGUgb2JqZWN0LlxuICAgKi9cbiAgICBwdWJsaWMgdGlsZVNwcml0ZSh4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCB3aWR0aDogbnVtYmVyID0gMCwgaGVpZ2h0OiBudW1iZXIgPSAwLCBrZXk/OiBzdHJpbmcsIGZyYW1lPzogc3RyaW5nIHwgbnVtYmVyLCBncm91cD86IFBoYXNlci5Hcm91cCk6IFBoYXNlci5UaWxlU3ByaXRlIHtcbiAgICAgICAgaWYgKGdyb3VwID09PSB1bmRlZmluZWQpIHsgZ3JvdXAgPSB0aGlzLnRhcmdldEdyb3VwOyB9XG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBQaGFzZXIuVGlsZVNwcml0ZSh0aGlzLmdhbWUsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGtleSwgZnJhbWUpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBSb3BlIG9iamVjdC5cbiAgICpcbiAgICogRXhhbXBsZSB1c2FnZTogaHR0cHM6Ly9naXRodWIuY29tL2NvZGV2aW5za3kvcGhhc2VyLXJvcGUtZGVtby9ibG9iL21hc3Rlci9kaXN0L2RlbW8uanNcbiAgICpcbiAgICogQG1ldGhvZCBQaGFzZXIuR2FtZU9iamVjdEZhY3Rvcnkjcm9wZVxuICAgKiBAcGFyYW0ge251bWJlcn0gW3g9MF0gLSBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBSb3BlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIHJvcGUgbWF5IGJlIGluLlxuICAgKiBAcGFyYW0ge251bWJlcn0gW3k9MF0gLSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBSb3BlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIHJvcGUgbWF5IGJlIGluLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xQaGFzZXIuUmVuZGVyVGV4dHVyZXxQaGFzZXIuQml0bWFwRGF0YXxQaGFzZXIuVmlkZW98UElYSS5UZXh0dXJlfSBba2V5XSAtIFRoZSBpbWFnZSB1c2VkIGFzIGEgdGV4dHVyZSBieSB0aGlzIGRpc3BsYXkgb2JqZWN0IGR1cmluZyByZW5kZXJpbmcuIElmIGEgc3RyaW5nIFBoYXNlciB3aWxsIGdldCBmb3IgYW4gZW50cnkgaW4gdGhlIEltYWdlIENhY2hlLiBPciBpdCBjYW4gYmUgYW4gaW5zdGFuY2Ugb2YgYSBSZW5kZXJUZXh0dXJlLCBCaXRtYXBEYXRhLCBWaWRlbyBvciBQSVhJLlRleHR1cmUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW2ZyYW1lXSAtIElmIGEgVGV4dHVyZSBBdGxhcyBvciBTcHJpdGUgU2hlZXQgaXMgdXNlZCB0aGlzIGFsbG93cyB5b3UgdG8gc3BlY2lmeSB0aGUgZnJhbWUgdG8gYmUgdXNlZC4gVXNlIGVpdGhlciBhbiBpbnRlZ2VyIGZvciBhIEZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXG4gICAqIEBwYXJhbSB7QXJyYXl9IHBvaW50cyAtIEFuIGFycmF5IG9mIHtQaGFzZXIuUG9pbnR9LlxuICAgKiBAcGFyYW0ge1BoYXNlci5Hcm91cH0gW2dyb3VwXSAtIE9wdGlvbmFsIEdyb3VwIHRvIGFkZCB0aGUgb2JqZWN0IHRvLiBJZiBub3Qgc3BlY2lmaWVkIGl0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIERlZmF1bHQgTGF5ZXIgZ3JvdXAuXG4gICAqIEByZXR1cm4ge1BoYXNlci5Sb3BlfSBUaGUgbmV3bHkgY3JlYXRlZCBSb3BlIG9iamVjdC5cbiAgICovXG4gICAgcHVibGljIHJvcGUoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwga2V5Pzogc3RyaW5nLCBmcmFtZT86IHN0cmluZyB8IG51bWJlciwgcG9pbnRzPzogUGhhc2VyLlBvaW50W10sIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogUGhhc2VyLlJvcGUge1xuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCkgeyBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7IH1cbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBncm91cC5hZGQobmV3IFBoYXNlci5Sb3BlKHRoaXMuZ2FtZSwgeCwgeSwga2V5LCBmcmFtZSwgcG9pbnRzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBDcmVhdGVzIGEgbmV3IFRleHQgb2JqZWN0LlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5I3RleHRcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeD0wXSAtIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIFRleHQuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgdGV4dCBtYXkgYmUgaW4uXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3k9MF0gLSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBUZXh0LiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIHRleHQgbWF5IGJlIGluLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IFt0ZXh0PScnXSAtIFRoZSB0ZXh0IHN0cmluZyB0aGF0IHdpbGwgYmUgZGlzcGxheWVkLlxuICAgICogQHBhcmFtIHtvYmplY3R9IFtzdHlsZV0gLSBUaGUgc3R5bGUgb2JqZWN0IGNvbnRhaW5pbmcgc3R5bGUgYXR0cmlidXRlcyBsaWtlIGZvbnQsIGZvbnQgc2l6ZSAsIGV0Yy5cbiAgICAqIEBwYXJhbSB7UGhhc2VyLkdyb3VwfSBbZ3JvdXBdIC0gT3B0aW9uYWwgR3JvdXAgdG8gYWRkIHRoZSBvYmplY3QgdG8uIElmIG5vdCBzcGVjaWZpZWQgaXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgRGVmYXVsdCBMYXllciBncm91cC5cbiAgICAqIEByZXR1cm4ge1BoYXNlci5UZXh0fSBUaGUgbmV3bHkgY3JlYXRlZCB0ZXh0IG9iamVjdC5cbiAgICAqL1xuICAgIHB1YmxpYyB0ZXh0KHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIHRleHQ6IHN0cmluZyA9ICcnLCBzdHlsZT86IFBoYXNlci5QaGFzZXJUZXh0U3R5bGUsIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogUGhhc2VyLlRleHQge1xuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCkgeyBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7IH1cbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBncm91cC5hZGQobmV3IFBoYXNlci5UZXh0KHRoaXMuZ2FtZSwgeCwgeSwgdGV4dCwgc3R5bGUpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIENyZWF0ZXMgYSBuZXcgQnV0dG9uIG9iamVjdC5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSNidXR0b25cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeD0wXSAtIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIEJ1dHRvbi4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyBidXR0b24gbWF5IGJlIGluLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt5PTBdIC0gVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgQnV0dG9uLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIGJ1dHRvbiBtYXkgYmUgaW4uXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2tleV0gLSBUaGUgaW1hZ2Uga2V5IGFzIGRlZmluZWQgaW4gdGhlIEdhbWUuQ2FjaGUgdG8gdXNlIGFzIHRoZSB0ZXh0dXJlIGZvciB0aGlzIGJ1dHRvbi5cbiAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYWxsYmFja10gLSBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoaXMgYnV0dG9uIGlzIHByZXNzZWRcbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBbY2FsbGJhY2tDb250ZXh0XSAtIFRoZSBjb250ZXh0IGluIHdoaWNoIHRoZSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCAodXN1YWxseSAndGhpcycpXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtvdmVyRnJhbWVdIC0gVGhpcyBpcyB0aGUgZnJhbWUgb3IgZnJhbWVOYW1lIHRoYXQgd2lsbCBiZSBzZXQgd2hlbiB0aGlzIGJ1dHRvbiBpcyBpbiBhbiBvdmVyIHN0YXRlLiBHaXZlIGVpdGhlciBhIG51bWJlciB0byB1c2UgYSBmcmFtZSBJRCBvciBhIHN0cmluZyBmb3IgYSBmcmFtZSBuYW1lLlxuICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbb3V0RnJhbWVdIC0gVGhpcyBpcyB0aGUgZnJhbWUgb3IgZnJhbWVOYW1lIHRoYXQgd2lsbCBiZSBzZXQgd2hlbiB0aGlzIGJ1dHRvbiBpcyBpbiBhbiBvdXQgc3RhdGUuIEdpdmUgZWl0aGVyIGEgbnVtYmVyIHRvIHVzZSBhIGZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtkb3duRnJhbWVdIC0gVGhpcyBpcyB0aGUgZnJhbWUgb3IgZnJhbWVOYW1lIHRoYXQgd2lsbCBiZSBzZXQgd2hlbiB0aGlzIGJ1dHRvbiBpcyBpbiBhIGRvd24gc3RhdGUuIEdpdmUgZWl0aGVyIGEgbnVtYmVyIHRvIHVzZSBhIGZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFt1cEZyYW1lXSAtIFRoaXMgaXMgdGhlIGZyYW1lIG9yIGZyYW1lTmFtZSB0aGF0IHdpbGwgYmUgc2V0IHdoZW4gdGhpcyBidXR0b24gaXMgaW4gYW4gdXAgc3RhdGUuIEdpdmUgZWl0aGVyIGEgbnVtYmVyIHRvIHVzZSBhIGZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXG4gICAgKiBAcGFyYW0ge1BoYXNlci5Hcm91cH0gW2dyb3VwXSAtIE9wdGlvbmFsIEdyb3VwIHRvIGFkZCB0aGUgb2JqZWN0IHRvLiBJZiBub3Qgc3BlY2lmaWVkIGl0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIERlZmF1bHQgTGF5ZXIgZ3JvdXAuXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuQnV0dG9ufSBUaGUgbmV3bHkgY3JlYXRlZCBCdXR0b24gb2JqZWN0LlxuICAgICovXG4gICAgcHVibGljIGJ1dHRvbih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCBrZXk/OiBzdHJpbmcsIGNhbGxiYWNrPzogRnVuY3Rpb24sIGNhbGxiYWNrQ29udGV4dD86IE9iamVjdCwgb3ZlckZyYW1lPzogc3RyaW5nIHwgbnVtYmVyLCBvdXRGcmFtZT86IHN0cmluZyB8IG51bWJlciwgZG93bkZyYW1lPzogc3RyaW5nIHwgbnVtYmVyLCB1cEZyYW1lPzogc3RyaW5nIHwgbnVtYmVyLCBncm91cD86IFBoYXNlci5Hcm91cCk6IFBoYXNlci5CdXR0b24ge1xuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCkgeyBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7IH1cbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBncm91cC5hZGQobmV3IFBoYXNlci5CdXR0b24odGhpcy5nYW1lLCB4LCB5LCBrZXksIGNhbGxiYWNrLCBjYWxsYmFja0NvbnRleHQsIG92ZXJGcmFtZSwgb3V0RnJhbWUsIGRvd25GcmFtZSwgdXBGcmFtZSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQ3JlYXRlcyBhIG5ldyBHcmFwaGljcyBvYmplY3QuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkjZ3JhcGhpY3NcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeD0wXSAtIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIEdyYXBoaWMuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgb2JqZWN0IG1heSBiZSBpbi5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeT0wXSAtIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIEdyYXBoaWMuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgb2JqZWN0IG1heSBiZSBpbi5cbiAgICAqIEBwYXJhbSB7UGhhc2VyLkdyb3VwfSBbZ3JvdXBdIC0gT3B0aW9uYWwgR3JvdXAgdG8gYWRkIHRoZSBvYmplY3QgdG8uIElmIG5vdCBzcGVjaWZpZWQgaXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgV29ybGQgZ3JvdXAuXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuR3JhcGhpY3N9IFRoZSBuZXdseSBjcmVhdGVkIGdyYXBoaWNzIG9iamVjdC5cbiAgICAqL1xuICAgIHB1YmxpYyBncmFwaGljcyh4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCBncm91cD86IFBoYXNlci5Hcm91cCk6IFBoYXNlci5HcmFwaGljcyB7XG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy53b3JsZDsgfVxuICAgICAgICAvKioqXG4gICAgICAgICAqIENvbW1lbnRlZCB0aGlzIG91dCAtIHNpbmNlIGdyYXBoaWNzIGFyZSBieSBkZWZhdWx0IGFkZGVkIGRpcmVjdGx5IG9uIHRoZSBnYW1lLndvcmxkLCB3ZSBzaG91bGRuJ3QgcmVzZXQgdGhpcy50YXJnZXRHcm91cFxuICAgICAgICAgKiBJdCBjb3VsZCBjYXVzZSBtYWpvciBwcm9ibGVtcyBpZiB1c2luZyBkaWpvbi91dGlscyBUZXh0dXJlcyBpbnN0YW5jZXMgYXMgYW4gaW1hZ2UgdGV4dHVyZSwgZm9yIGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICAvL3RoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBQaGFzZXIuR3JhcGhpY3ModGhpcy5nYW1lLCB4LCB5KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgQml0bWFwVGV4dCBvYmplY3QuXG4gICAgKlxuICAgICogQml0bWFwVGV4dCBvYmplY3RzIHdvcmsgYnkgdGFraW5nIGEgdGV4dHVyZSBmaWxlIGFuZCBhbiBYTUwgZmlsZSB0aGF0IGRlc2NyaWJlcyB0aGUgZm9udCBzdHJ1Y3R1cmUuXG4gICAgKiBJdCB0aGVuIGdlbmVyYXRlcyBhIG5ldyBTcHJpdGUgb2JqZWN0IGZvciBlYWNoIGxldHRlciBvZiB0aGUgdGV4dCwgcHJvcG9ydGlvbmFsbHkgc3BhY2VkIG91dCBhbmQgYWxpZ25lZCB0b1xuICAgICogbWF0Y2ggdGhlIGZvbnQgc3RydWN0dXJlLlxuICAgICpcbiAgICAqIEJpdG1hcFRleHQgb2JqZWN0cyBhcmUgbGVzcyBmbGV4aWJsZSB0aGFuIFRleHQgb2JqZWN0cywgaW4gdGhhdCB0aGV5IGhhdmUgbGVzcyBmZWF0dXJlcyBzdWNoIGFzIHNoYWRvd3MsIGZpbGxzIGFuZCB0aGUgYWJpbGl0eVxuICAgICogdG8gdXNlIFdlYiBGb250cy4gSG93ZXZlciB5b3UgdHJhZGUgdGhpcyBmbGV4aWJpbGl0eSBmb3IgcHVyZSByZW5kZXJpbmcgc3BlZWQuIFlvdSBjYW4gYWxzbyBjcmVhdGUgdmlzdWFsbHkgY29tcGVsbGluZyBCaXRtYXBUZXh0cyBieVxuICAgICogcHJvY2Vzc2luZyB0aGUgZm9udCB0ZXh0dXJlIGluIGFuIGltYWdlIGVkaXRvciBmaXJzdCwgYXBwbHlpbmcgZmlsbHMgYW5kIGFueSBvdGhlciBlZmZlY3RzIHJlcXVpcmVkLlxuICAgICpcbiAgICAqIFRvIGNyZWF0ZSBtdWx0aS1saW5lIHRleHQgaW5zZXJ0IFxcciwgXFxuIG9yIFxcclxcbiBlc2NhcGUgY29kZXMgaW50byB0aGUgdGV4dCBzdHJpbmcuXG4gICAgKlxuICAgICogVG8gY3JlYXRlIGEgQml0bWFwVGV4dCBkYXRhIGZpbGVzIHlvdSBjYW4gdXNlOlxuICAgICpcbiAgICAqIEJNRm9udCAoV2luZG93cywgZnJlZSk6IGh0dHA6Ly93d3cuYW5nZWxjb2RlLmNvbS9wcm9kdWN0cy9ibWZvbnQvXG4gICAgKiBHbHlwaCBEZXNpZ25lciAoT1MgWCwgY29tbWVyY2lhbCk6IGh0dHA6Ly93d3cuNzFzcXVhcmVkLmNvbS9lbi9nbHlwaGRlc2lnbmVyXG4gICAgKiBMaXR0ZXJhIChXZWItYmFzZWQsIGZyZWUpOiBodHRwOi8va3ZhemFycy5jb20vbGl0dGVyYS9cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSNiaXRtYXBUZXh0XG4gICAgKiBAcGFyYW0ge251bWJlcn0geCAtIFggY29vcmRpbmF0ZSB0byBkaXNwbGF5IHRoZSBCaXRtYXBUZXh0IG9iamVjdCBhdC5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IC0gWSBjb29yZGluYXRlIHRvIGRpc3BsYXkgdGhlIEJpdG1hcFRleHQgb2JqZWN0IGF0LlxuICAgICogQHBhcmFtIHtzdHJpbmd9IGZvbnQgLSBUaGUga2V5IG9mIHRoZSBCaXRtYXBUZXh0IGFzIHN0b3JlZCBpbiBQaGFzZXIuQ2FjaGUuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW3RleHQ9JyddIC0gVGhlIHRleHQgdGhhdCB3aWxsIGJlIHJlbmRlcmVkLiBUaGlzIGNhbiBhbHNvIGJlIHNldCBsYXRlciB2aWEgQml0bWFwVGV4dC50ZXh0LlxuICAgICogQHBhcmFtIHtudW1iZXJ9IFtzaXplPTMyXSAtIFRoZSBzaXplIHRoZSBmb250IHdpbGwgYmUgcmVuZGVyZWQgYXQgaW4gcGl4ZWxzLlxuICAgICogQHBhcmFtIHtQaGFzZXIuR3JvdXB9IFtncm91cF0gLSBPcHRpb25hbCBHcm91cCB0byBhZGQgdGhlIG9iamVjdCB0by4gSWYgbm90IHNwZWNpZmllZCBpdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBXb3JsZCBncm91cC5cbiAgICAqIEByZXR1cm4ge1BoYXNlci5CaXRtYXBUZXh0fSBUaGUgbmV3bHkgY3JlYXRlZCBiaXRtYXBUZXh0IG9iamVjdC5cbiAgICAqL1xuICAgIHB1YmxpYyBiaXRtYXBUZXh0KHg/OiBudW1iZXIsIHk/OiBudW1iZXIsIGZvbnQ/OiBzdHJpbmcsIHRleHQ6IHN0cmluZyA9IFwiXCIsIHNpemU6IG51bWJlciA9IDMyLCBncm91cD86IFBoYXNlci5Hcm91cCk6IFBoYXNlci5CaXRtYXBUZXh0IHtcbiAgICAgICAgaWYgKGdyb3VwID09PSB1bmRlZmluZWQpIHsgZ3JvdXAgPSB0aGlzLnRhcmdldEdyb3VwOyB9XG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBQaGFzZXIuQml0bWFwVGV4dCh0aGlzLmdhbWUsIHgsIHksIGZvbnQsIHRleHQsIHNpemUpKTtcbiAgICB9XG5cbiAgICAvLyBkaWpvbiBzcGVjaWZpYyBkaXNwbGF5IG9iamVjdHNcbiAgICBwdWJsaWMgZFNwcml0ZSh4PzogbnVtYmVyLCB5PzogbnVtYmVyLCBrZXk/OiBzdHJpbmcgfCBQaGFzZXIuUmVuZGVyVGV4dHVyZSB8IFBoYXNlci5CaXRtYXBEYXRhIHwgUElYSS5UZXh0dXJlLCBmcmFtZT86IHN0cmluZyB8IG51bWJlciwgbmFtZT86IHN0cmluZywgY29tcG9uZW50cz86IENvbXBvbmVudFtdLCBncm91cD86IFBoYXNlci5Hcm91cCk6IFNwcml0ZSB7XG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy50YXJnZXRHcm91cDsgfVxuICAgICAgICB0aGlzLnRhcmdldEdyb3VwID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGdyb3VwLmFkZChuZXcgU3ByaXRlKHgsIHksIGtleSwgZnJhbWUsIG5hbWUsIGNvbXBvbmVudHMpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZEdyb3VwKHg/OiBudW1iZXIsIHk/OiBudW1iZXIsIG5hbWU/OiBzdHJpbmcsIGFkZFRvU3RhZ2U/OiBib29sZWFuLCBjb21wb25lbnRzPzogQ29tcG9uZW50W10sIGVuYWJsZUJvZHk/OiBib29sZWFuLCBwaHlzaWNzQm9keVR5cGU/OiBudW1iZXIsIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogR3JvdXAge1xuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCAmJiBhZGRUb1N0YWdlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7XG4gICAgICAgICAgICB0aGlzLnRhcmdldEdyb3VwID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBncm91cC5hZGQobmV3IEdyb3VwKHgsIHksIG5hbWUsIGFkZFRvU3RhZ2UsIGNvbXBvbmVudHMsIGVuYWJsZUJvZHksIHBoeXNpY3NCb2R5VHlwZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBHcm91cCh4LCB5LCBuYW1lLCBhZGRUb1N0YWdlLCBjb21wb25lbnRzLCBlbmFibGVCb2R5LCBwaHlzaWNzQm9keVR5cGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkVGV4dCh4OiBudW1iZXIsIHk6IG51bWJlciwgdGV4dD86IHN0cmluZywgZm9udE5hbWU/OiBzdHJpbmcsIGZvbnRTaXplPzogbnVtYmVyLCBmb250Q29sb3I/OiBzdHJpbmcsIGZvbnRBbGlnbj86IHN0cmluZywgd29yZFdyYXA/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciwgbGluZVNwYWNpbmc/OiBudW1iZXIsIHNldHRpbmdzPzogT2JqZWN0LCBncm91cD86IFBoYXNlci5Hcm91cCk6IFRleHQge1xuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCkgeyBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7IH1cbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBncm91cC5hZGQobmV3IFRleHQoeCwgeSwgdGV4dCwgZm9udE5hbWUsIGZvbnRTaXplLCBmb250Q29sb3IsIGZvbnRBbGlnbiwgd29yZFdyYXAsIHdpZHRoLCBsaW5lU3BhY2luZywgc2V0dGluZ3MpKTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGRCaXRtYXBUZXh0KHg6bnVtYmVyID0gMCwgeTpudW1iZXIgPSAwLCBmb250OnN0cmluZyA9IG51bGwsIHRleHQ6c3RyaW5nID0gXCJcIiwgc2l6ZTpudW1iZXIgPSAxMiwgYWxpZ246c3RyaW5nID0gJ2xlZnQnLCBjb2xvcjpudW1iZXIgPSAweGZmZmZmZiwgc21vb3RoaW5nOmJvb2xlYW4gPSB0cnVlLCBhdXRvRmxhdHRlbjpib29sZWFuID0gdHJ1ZSwgbWFrZUltYWdlOmJvb2xlYW4gPSBmYWxzZSwgZ3JvdXA/OiBQaGFzZXIuR3JvdXApOiBCaXRtYXBUZXh0IHtcbiAgICAgICAgaWYgKGdyb3VwID09PSB1bmRlZmluZWQpIHsgZ3JvdXAgPSB0aGlzLnRhcmdldEdyb3VwOyB9XG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBCaXRtYXBUZXh0KHgsIHksIGZvbnQsIHRleHQsIHNpemUsIGFsaWduLCBjb2xvciwgc21vb3RoaW5nLCBhdXRvRmxhdHRlbiwgbWFrZUltYWdlKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNwaW5lKGFzc2V0TmFtZTogc3RyaW5nID0gJycsIHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIGdyb3VwPzogUGhhc2VyLkdyb3VwKSB7XG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy50YXJnZXRHcm91cDsgfVxuICAgICAgICB0aGlzLnRhcmdldEdyb3VwID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGdyb3VwLmFkZChuZXcgU3BpbmUoYXNzZXROYW1lLCB4LCB5KSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldERlZmF1bHRMYXllcih2YWx1ZTogUGhhc2VyLkdyb3VwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ0FVVElPTjogQ2hhbmdpbmcgdGhlIGRlZmF1bHQgbGF5ZXIgd2lsbCBjaGFuZ2UgdGhlIHRhcmdldCBncm91cCBmb3IgLmFkZFwiKTtcbiAgICAgICAgdGhpcy5fZGVmYXVsdExheWVyID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkZWZhdWx0TGF5ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0TGF5ZXI7XG4gICAgfVxuICAgIC8vIGdldHRlciAvIHNldHRlclxuICAgIHB1YmxpYyBzZXQgdGFyZ2V0R3JvdXAodmFsdWU6IFBoYXNlci5Hcm91cCkge1xuICAgICAgICB0aGlzLl90YXJnZXRHcm91cCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdGFyZ2V0R3JvdXAoKTogUGhhc2VyLkdyb3VwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RhcmdldEdyb3VwIHx8IHRoaXMuX2RlZmF1bHRMYXllcjtcbiAgICB9XG59IiwiLyoqXG4gKiBTZXF1ZW5jZU1hbmFnZXJcbiAqL1xuaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xuaW1wb3J0IHtHYW1lfSBmcm9tICcuLi9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFNlcXVlbmNlTWFuYWdlciB7XG4gICAgcHVibGljIGdhbWU6IEdhbWU7XG5cbiAgICBwcml2YXRlIF9kZWZhdWx0SW50ZXJ2YWwgPSAyMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdhbWUgPSBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWU7XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgcHJpdmF0ZSBfZXhlY3V0ZU1ldGhvZChzZXF1ZW5jZTogQXJyYXk8RnVuY3Rpb24+LCBjb250ZXh0OiBPYmplY3QsIGNhbGxiYWNrOiBGdW5jdGlvbiwgY2FsbGJhY2tDb250ZXh0OiBPYmplY3QpIHtcbiAgICAgICAgdmFyIGZ1bmMgPSBzZXF1ZW5jZS5zaGlmdCgpO1xuICAgICAgICBpZiAodHlwZW9mIGZ1bmMgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb250ZXh0ICE9PSAndW5kZWZpbmVkJyAmJiBjb250ZXh0KSB7XG4gICAgICAgICAgICBmdW5jLmNhbGwoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VxdWVuY2UubGVuZ3RoID09PSAwICYmIGNhbGxiYWNrICYmIGNhbGxiYWNrQ29udGV4dCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbChjYWxsYmFja0NvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICBwdWJsaWMgcnVuKHNlcXVlbmNlOiBBcnJheTxGdW5jdGlvbj4sIGNvbnRleHQ6IE9iamVjdCwgaW50ZXJ2YWw6IG51bWJlciwgY29tcGxldGVDYWxsYmFjazogRnVuY3Rpb24sIGNvbXBsZXRlQ2FsbGJhY2tDb250ZXh0OiBPYmplY3QpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZXh0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb250ZXh0IG11c3QgYmUgcHJvdmlkZWQgZm9yIHRoZSBzZXF1ZW5jZSBtZXRob2RzJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGludGVydmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaW50ZXJ2YWwgPSB0aGlzLl9kZWZhdWx0SW50ZXJ2YWw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VxdWVuY2UubGVuZ3RoID09PSAwICYmIHR5cGVvZiBjb21wbGV0ZUNhbGxiYWNrICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29tcGxldGVDYWxsYmFja0NvbnRleHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb21wbGV0ZUNhbGxiYWNrLmNhbGwoY29tcGxldGVDYWxsYmFja0NvbnRleHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGludGVydmFsID09PSAwKSB7XG4gICAgICAgICAgICB3aGlsZSAoc2VxdWVuY2UubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICB0aGlzLl9leGVjdXRlTWV0aG9kKHNlcXVlbmNlLCBjb250ZXh0LCB0eXBlb2YgY29tcGxldGVDYWxsYmFjayA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogY29tcGxldGVDYWxsYmFjaywgdHlwZW9mIGNvbXBsZXRlQ2FsbGJhY2tDb250ZXh0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBjb21wbGV0ZUNhbGxiYWNrQ29udGV4dCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZXZlbnQgPSB0aGlzLmdhbWUudGltZS5ldmVudHMucmVwZWF0KGludGVydmFsLCBzZXF1ZW5jZS5sZW5ndGgsIHRoaXMuX2V4ZWN1dGVNZXRob2QsIHRoaXMsIHNlcXVlbmNlLCBjb250ZXh0LCB0eXBlb2YgY29tcGxldGVDYWxsYmFjayA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogY29tcGxldGVDYWxsYmFjaywgdHlwZW9mIGNvbXBsZXRlQ2FsbGJhY2tDb250ZXh0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBjb21wbGV0ZUNhbGxiYWNrQ29udGV4dCk7XG4gICAgICAgIGV2ZW50LnRpbWVyLnBhdXNlZCA9IGZhbHNlO1xuICAgIH1cbn0iLCIvKipcbiAqIFN0YXRlXG4gKi9cbmltcG9ydCB7QXBwbGljYXRpb259IGZyb20gJy4uL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7R2FtZSwgR2FtZU9iamVjdEZhY3Rvcnl9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHtNZWRpYXRvcn0gZnJvbSAnLi4vbXZjJztcbmltcG9ydCB7UHJlZmFiQnVpbGRlcn0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgU3RhdGUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuICAgIHB1YmxpYyBwcmVmYWJzOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgIHB1YmxpYyBncm91cHM6IHsgW25hbWU6IHN0cmluZ106IGFueSB9ID0ge307XG5cbiAgICBwcm90ZWN0ZWQgX2F1ZGlvOiBQaGFzZXIuU291bmRbXSA9IFtdO1xuICAgIHByb3RlY3RlZCBfbWVkaWF0b3I6IE1lZGlhdG9yID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgX3NjZW5lRGF0YToge3ByZWZhYnM6IGFueVtdfSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfYWxsb3dVcGRhdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgLy8gUGhhc2VyLlN0YXRlIG92ZXJyaWRlc1xuICAgIHB1YmxpYyBpbml0KGFyZ3M/OiBhbnkpOiB2b2lkIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBwcmVsb2FkKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5wcmVsb2FkSUQpXG4gICAgICAgICAgICB0aGlzLmdhbWUuYXNzZXQubG9hZEFzc2V0cyh0aGlzLnByZWxvYWRJRCk7XG4gICAgfVxuXG4gICAgLy8gU3RhdGUgTG9vcCAtIE5vIGxvbmdlciBoYW5kZWQgYnkgUGhhc2VycyBpbnRlZ3JhdGVkIHVwZGF0ZSwgYWxsb3dpbmcgdXMgdG8gZWFzaWx5IHBhdXNlXG4gICAgLy8gd2l0aG91dCByZWx5aW5nIG9uIHRoaXMuZ2FtZS5wYXVzZSAtIHdoaWNoIGhhbHRzIGEgZ3JlYXQgZGVhbCBvZiBvdGhlciBmdW5jdGlvbmFsaXR5IHdlIG1heSBuZWVkLlxuICAgIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9hbGxvd1VwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJlc3VtZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fYWxsb3dVcGRhdGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBwYXVzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fYWxsb3dVcGRhdGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlU3RhdGUoKTogdm9pZCB7IFxuICAgICAgICBjb25zb2xlLmxvZyhcIlN0YXRlOiBDYWxsaW5nIHVwZGF0ZVN0YXRlKCkgLSB5b3Ugc2hvdWxkIG92ZXJyaWRlIHRoaXMgZm9yIGxvZ2ljIGxvb3BzLCBub3QgdXBkYXRlKCkuXCIpO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZ2FtZS5hc3NldC5hbGxTb3VuZHNEZWNvZGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hc3NldC5vbkxvYWRDb21wbGV0ZUFuZEF1ZGlvRGVjb2RlZC5hZGRPbmNlKHRoaXMuY3JlYXRlLCB0aGlzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fc2NlbmVEYXRhICE9PSBudWxsKSB7XG4gICAgICAgICAgICBQcmVmYWJCdWlsZGVyLmNyZWF0ZVNjZW5lRnJvbSh0aGlzLl9zY2VuZURhdGEsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXBwLmVuc3VyZUF1ZGlvQ29udGV4dFVubG9ja2VkKCk7XG4gICAgICAgIHRoaXMuYnVpbGRJbnRlcmZhY2UoKTtcbiAgICAgICAgdGhpcy5hZnRlckJ1aWxkSW50ZXJmYWNlKCk7XG4gICAgICAgIHRoaXMuc3RhcnRCdWlsZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaHV0ZG93bihyZW1vdmVNZWRpYXRvcjogYm9vbGVhbiA9IHRydWUsIHJlbW92ZUF1ZGlvOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgICBpZiAocmVtb3ZlTWVkaWF0b3IpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlTWVkaWF0b3IoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVtb3ZlQXVkaW8pIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQXVkaW8oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLnNodXRkb3duKCk7XG4gICAgfVxuXG4gICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICBwdWJsaWMgbGlzdEJ1aWxkU2VxdWVuY2UoKTogRnVuY3Rpb25bXSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYnVpbGRJbnRlcmZhY2UoKTogdm9pZCB7IH1cblxuICAgIHB1YmxpYyBhZnRlckJ1aWxkSW50ZXJmYWNlKCk6IHZvaWQgeyB9XG5cbiAgICBwdWJsaWMgc3RhcnRCdWlsZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nYW1lLnNlcXVlbmNlLnJ1bih0aGlzLmxpc3RCdWlsZFNlcXVlbmNlKCksIHRoaXMsIHRoaXMuYnVpbGRJbnRlcnZhbCwgdGhpcy5wcmVBZnRlckJ1aWxkLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHJlQWZ0ZXJCdWlsZCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmdhbWUudHJhbnNpdGlvbiA9PT0gJ3VuZGVmaW5lZCcgfHwgIXRoaXMuZ2FtZS50cmFuc2l0aW9uLmNhblRyYW5zaXRpb25PdXQoKSkge1xuICAgICAgICAgICAgdGhpcy5hZnRlckJ1aWxkKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lLnRyYW5zaXRpb24uY2FuVHJhbnNpdGlvbk91dCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLnRyYW5zaXRpb24ub25UcmFuc2l0aW9uT3V0Q29tcGxldGUuYWRkT25jZSh0aGlzLmFmdGVyQnVpbGQsIHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS50cmFuc2l0aW9uLnRyYW5zaXRpb25PdXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhZnRlckJ1aWxkKCk6IHZvaWQgeyB9XG5cbiAgICBwdWJsaWMgYWRkQXVkaW8odHJhY2s6IFBoYXNlci5Tb3VuZCk6IFBoYXNlci5Tb3VuZCB7XG4gICAgICAgIGlmICghdGhpcy5fYXVkaW8pIHtcbiAgICAgICAgICAgIHRoaXMuX2F1ZGlvID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYXVkaW8ucHVzaCh0cmFjayk7XG4gICAgICAgIHJldHVybiB0cmFjaztcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlQXVkaW8oKTogdm9pZCB7XG4gICAgICAgIHZhciBzb3VuZDogUGhhc2VyLlNvdW5kO1xuICAgICAgICBpZiAoIXRoaXMuX2F1ZGlvKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAodGhpcy5fYXVkaW8ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc291bmQgPSB0aGlzLl9hdWRpby5wb3AoKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc291bmQgIT09ICd1bmRlZmluZWQnICYmIHNvdW5kICE9IG51bGwgJiYgdHlwZW9mIHNvdW5kLnN0b3AgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzb3VuZC5vblN0b3AgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdW5kLm9uU3RvcC5yZW1vdmVBbGwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc291bmQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZU1lZGlhdG9yKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX21lZGlhdG9yKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLl9tZWRpYXRvci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuX21lZGlhdG9yID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBnZXR0ZXIgLyBzZXR0ZXJcbiAgICBwdWJsaWMgZ2V0IHByZWxvYWRJRCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGJ1aWxkSW50ZXJ2YWwoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIDEwO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYWRkKCk6IEdhbWVPYmplY3RGYWN0b3J5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZS5hZGRUb0dhbWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhcHAoKTogQXBwbGljYXRpb24ge1xuICAgICAgICByZXR1cm4gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGdhbWUoKTogR2FtZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwcC5nYW1lO1xuICAgIH1cblxuICAgIC8qIEVYUEVSSU1FTlQgQ09OVEVOVCBDUkVBVElPTiBGUk9NIFVOSVRZIFNDRU5FIEVYUE9SVCAqL1xuICAgICBwdWJsaWMgY3JlYXRlUHJlZmFiRnJvbURhdGEocHJlZkRhdGE6IGFueSk6IGFueSB7XG4gICAgICAgIGlmIChwcmVmRGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJlZmFiQnVpbGRlci5jcmVhdGVQcmVmYWJPYmplY3RzKHByZWZEYXRhLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXNzaWduUHJlZmFiKG9iamVjdDogYW55KSB7XG4gICAgICAgIC8vIE92ZXJyaWRlIHRoaXMgdG8gaGFuZGxlIGFzc2lnbm1lbnQgb2YgY2hpbGQgcHJlZmFicy5cbiAgICB9XG4gICAgXG4gICAgcHJvdGVjdGVkIF9maW5kUHJlZmFiKG5hbWU6IHN0cmluZyk6IFBoYXNlci5JbWFnZSB7XG4gICAgICAgIGlmICh0aGlzLnByZWZhYnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByZWZhYnNbbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZmluZEdyb3VwKG5hbWU6IHN0cmluZyk6IFBoYXNlci5Hcm91cCB7XG4gICAgICAgIGlmICh0aGlzLmdyb3Vwcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBzW25hbWVdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9ICAgXG59IiwiLyoqXG4gKiBTdG9yYWdlTWFuYWdlclxuICovXG5pbXBvcnQge0FwcGxpY2F0aW9ufSBmcm9tICcuLi9hcHBsaWNhdGlvbic7XG5pbXBvcnQge0dhbWV9IGZyb20gJy4uL2NvcmUnO1xuZXhwb3J0IGNsYXNzIFN0b3JhZ2VNYW5hZ2VyIHtcbiAgICBwdWJsaWMgZ2FtZTogR2FtZTtcbiAgICBwcml2YXRlIF9sb2NhbFN0b3JhZ2VBdmFpbGFibGU6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lO1xuICAgICAgICB0aGlzLl9pbml0KCk7XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgcHJpdmF0ZSBfaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fbG9jYWxTdG9yYWdlQXZhaWxhYmxlID0gdGhpcy5fZ2V0SXNMb2NhbFN0b3JhZ2VBdmFpbGFibGUoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2xvY2FsIHN0b3JhZ2UgYXZhaWxhYmxlJywgdGhpcy5fbG9jYWxTdG9yYWdlQXZhaWxhYmxlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRJc0xvY2FsU3RvcmFnZUF2YWlsYWJsZSgpOiBib29sZWFuIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiAnbG9jYWxTdG9yYWdlJyBpbiB3aW5kb3cgJiYgd2luZG93Wydsb2NhbFN0b3JhZ2UnXSAhPT0gbnVsbDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0U3RyaW5nKGRhdGE6IE9iamVjdCB8IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGpzb25EYXRhO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBqc29uRGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ291bGQgbm90IGNvbnZlcnQnICsgZGF0YSArICcgdG8ganNvbicpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ganNvbkRhdGE7XG4gICAgfVxuXG4gICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICAvKipcbiAgICAqIGdldHMgc3RvcmVkIGRhdGEgd2l0aCB0aGUgc3BlY2lmaWVkIGtleVxuICAgICogQHBhcmFtICB7U3RyaW5nfSAga2V5ICAgIHRoZSBMb2NhbFN0b3JhZ2Uga2V5IHdoZXJlIHRoZSBkYXRhIGlzIHN0b3JlZFxuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gaXNKU09OIGlzIHRoZSBzdG9yZWQgZGF0YSBqdXN0IGEgc3RyaW5nIG9yIGlzIGl0IHN0cmluZ2lmaWVkIGpzb24gKGFzc3VtZXMgaXQncyBKU09OKVxuICAgICogQHJldHVybiB7U3RyaW5nIHwgT2JqZWN0fSB0aGUgcmV0cmlldmVkIGRhdGEgLSBpZiBpdCdzIGEgSlNPTiBzdHJpbmcsIHdlIHBhcnNlIHRoZSBkYXRhIGFuZCByZXR1cm4gdGhlIEpTT04gb2JqZWN0XG4gICAgKi9cbiAgICBwdWJsaWMgZ2V0RnJvbUxvY2FsU3RvcmFnZShrZXk6IHN0cmluZywgaXNKU09OOiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICB2YXIgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBkYXRhIHNhdmVkIHdpdGggdGhlIGtleScsIGtleSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0pTT04gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHNhdmVzIGRhdGEgdG8gbG9jYWxzdG9yYWdlXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGtleSAgIHRoZSBMb2NhbFN0b3JhZ2Uga2V5IHRoZSBkYXRhIHdpbGwgYmUgc2F2ZWQgdG9cbiAgICAqIEBwYXJhbSAge1N0cmluZ3xPYmplY3R9IHZhbHVlIHRoZSBkYXRhIHRvIHNhdmUgKGlmIGl0J3MgYW4gb2JqZWN0LCB3aWxsIGJlIHN0cmluZ2lmaWVkIGJlZm9yZSBzYXZpbmcpXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIHNhdmVUb0xvY2FsU3RvcmFnZShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IE9iamVjdCkge1xuICAgICAgICBpZiAoIXRoaXMuX2xvY2FsU3RvcmFnZUF2YWlsYWJsZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIGxvY2FsIHN0b3JhZ2UnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB0aGlzLl9nZXRTdHJpbmcodmFsdWUpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3lvdXIgZGF0YSBjb3VsZCBub3QgYmUgc2F2ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICogY2xlYXIgc3RvcmVkIGRhdGFcbiAgICAqIEBwYXJhbSAge1N0cmluZ30ga2V5IHRoZSBMb2NhbFN0b3JhZ2Uga2V5IHRvIGNsZWFyXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIGNsZWFyRnJvbUxvY2FsU3RvcmFnZShrZXk6IHN0cmluZykge1xuICAgICAgICBpZiAoIXRoaXMuX2xvY2FsU3RvcmFnZUF2YWlsYWJsZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIGxvY2FsIHN0b3JhZ2UnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7IH1cbiAgICB9XG59IiwiLyoqXG4gKiBUcmFuc2l0aW9uTWFuYWdlclxuICovXG5pbXBvcnQge0FwcGxpY2F0aW9ufSBmcm9tICcuLi9hcHBsaWNhdGlvbic7XG5pbXBvcnQge0dhbWUsIEdhbWVPYmplY3RGYWN0b3J5fSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7SVRyYW5zaXRpb24sIElUcmFuc2l0aW9uSGFuZGxlciwgSVByZWxvYWRIYW5kbGVyfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGNsYXNzIFRyYW5zaXRpb25NYW5hZ2VyIHtcbiAgICBwdWJsaWMgZ2FtZTogR2FtZTtcbiAgICBwdWJsaWMgb25UcmFuc2l0aW9uT3V0Q29tcGxldGU6IFBoYXNlci5TaWduYWwgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuICAgIHB1YmxpYyBvblRyYW5zaXRpb25JbkNvbXBsZXRlOiBQaGFzZXIuU2lnbmFsID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICBcbiAgICBwcml2YXRlIF9pc0luVHJhbnNpdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBfdHJhbnNpdGlvbjogSVRyYW5zaXRpb24gPSBudWxsO1xuICAgIHByaXZhdGUgX3RyYW5zaXRpb25zOiBPYmplY3QgPSB7fTtcbiAgICBwcml2YXRlIF9leGNlcHRpb25zOiBPYmplY3QgPSB7fTtcblxuICAgIHByaXZhdGUgX2Zyb21TdGF0ZTogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIF90b1N0YXRlOiBzdHJpbmcgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfYXJnczogYW55ID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdhbWUgPSBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYWRkKGlkOiBzdHJpbmcsIG91dEhhbmRsZXI6IElUcmFuc2l0aW9uSGFuZGxlciwgcHJlbG9hZEhhbmRsZXI6IElQcmVsb2FkSGFuZGxlciwgaW5IYW5kbGVyOiBJVHJhbnNpdGlvbkhhbmRsZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbnNbaWRdID0ge1xuICAgICAgICAgICAgb3V0SGFuZGxlcjogb3V0SGFuZGxlcixcbiAgICAgICAgICAgIHByZWxvYWRIYW5kbGVyOiBwcmVsb2FkSGFuZGxlcixcbiAgICAgICAgICAgIGluSGFuZGxlcjogaW5IYW5kbGVyXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0VHJhbnNpdGlvbihpblN0YXRlOiBzdHJpbmcsIG91dFN0YXRlOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIHRyYW5zaXRpb24gPSB0aGlzLl90cmFuc2l0aW9uc1tpblN0YXRlICsgJy8nICsgb3V0U3RhdGVdO1xuICAgICAgICBpZiAodHlwZW9mIHRyYW5zaXRpb24gPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHRoaXMuX3RyYW5zaXRpb25zWydhbGwnXTtcblxuICAgICAgICByZXR1cm4gdHlwZW9mIHRyYW5zaXRpb24gPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHRyYW5zaXRpb247XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdHJhbnNpdGlvbkluQ29tcGxldGUoKSB7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24gPSB0aGlzLl9nZXRUcmFuc2l0aW9uKHRoaXMuX2Zyb21TdGF0ZSwgdGhpcy5fdG9TdGF0ZSk7XG4gICAgICAgIGlmICghdGhpcy5fdHJhbnNpdGlvbilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIubG9hZFN0YXJ0ID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgdGhpcy5nYW1lLmFzc2V0Lm9uTG9hZFN0YXJ0LmFkZE9uY2UodGhpcy5fdHJhbnNpdGlvbi5wcmVsb2FkSGFuZGxlci5sb2FkU3RhcnQsIHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fdHJhbnNpdGlvbi5wcmVsb2FkSGFuZGxlci5sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hc3NldC5vbkZpbGVDb21wbGV0ZS5hZGQodGhpcy5fdHJhbnNpdGlvbi5wcmVsb2FkSGFuZGxlci5sb2FkUHJvZ3Jlc3MsIHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nYW1lLmFzc2V0Lm9uTG9hZENvbXBsZXRlQW5kQXVkaW9EZWNvZGVkLmFkZE9uY2UodGhpcy5fcHJlbG9hZENvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5vblRyYW5zaXRpb25JbkNvbXBsZXRlLmRpc3BhdGNoKCk7XG5cblxuICAgICAgICB0aGlzLmdhbWUuY2hhbmdlU3RhdGUodGhpcy5fdG9TdGF0ZSwgdGhpcy5fYXJncyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5vblRyYW5zaXRpb25PdXRDb21wbGV0ZS5kaXNwYXRjaCgpO1xuICAgICAgICB0aGlzLl9pc0luVHJhbnNpdGlvbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3ByZWxvYWRDb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiA9IHRoaXMuX2dldFRyYW5zaXRpb24odGhpcy5fZnJvbVN0YXRlLCB0aGlzLl90b1N0YXRlKTtcbiAgICAgICAgaWYgKCF0aGlzLl90cmFuc2l0aW9uKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHRoaXMuZ2FtZS5hc3NldC5vbkZpbGVDb21wbGV0ZS5yZW1vdmUodGhpcy5fdHJhbnNpdGlvbi5wcmVsb2FkSGFuZGxlci5sb2FkUHJvZ3Jlc3MsIHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fdHJhbnNpdGlvbi5wcmVsb2FkSGFuZGxlci5sb2FkQ29tcGxldGUgPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyLmxvYWRDb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NsZWFyVHJhbnNpdGlvbigpIHtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbi5vdXRIYW5kbGVyLnRyYW5zaXRpb25JbkNvbXBsZXRlLnJlbW92ZSh0aGlzLl90cmFuc2l0aW9uT3V0Q29tcGxldGUsIHRoaXMpO1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uLmluSGFuZGxlci50cmFuc2l0aW9uT3V0Q29tcGxldGUucmVtb3ZlKHRoaXMuX3RyYW5zaXRpb25JbkNvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lLmFzc2V0Lm9uTG9hZENvbXBsZXRlQW5kQXVkaW9EZWNvZGVkLnJlbW92ZSh0aGlzLl9wcmVsb2FkQ29tcGxldGUsIHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWUuYXNzZXQub25Mb2FkU3RhcnQucmVtb3ZlKHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIubG9hZFN0YXJ0LCB0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5nYW1lLmFzc2V0Lm9uRmlsZUNvbXBsZXRlLnJlbW92ZSh0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyLmxvYWRQcm9ncmVzcywgdGhpcy5fdHJhbnNpdGlvbi5wcmVsb2FkSGFuZGxlcik7XG5cbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gcHVibGljIG1ldGhvZHNcblxuICAgIC8qKlxuICAgICogQWRkcyBhIHRyYW5zaXRpb24gaGFuZGxlciBmb3IgYSBzcGVjaWZpYyBmcm9tIC8gdG8gc3RhdGUgY29tYmluYXRpb25cbiAgICAqIHBhc3MgdGhlIGZyb20gLyB0byBzdGF0ZXMgYXMgdGhlIGZpcnN0IDIgYXJndW1lbnRzLCBhbmQgYWRkaXRpb25hbCBhcmd1bWVudHMgZm9yIHdoaWNoIGluc3RhbmNlIHdpbGwgaGFuZGxlIHRoZSB0cmFuc2l0aW9uXG4gICAgKiBpZiBvbmx5IDMgYXJncyBhcmUgcGFzc2VkLCB0aGUgaW5zdGFuY2Ugd2lsbCBoYW5kbGUgdGhlIGluIC8gb3V0IHRyYW5zaXRpb24sIGFuZCB0aGUgcHJlbG9hZGluZ1xuICAgICogRS5HLlxuICAgICogdGhpcy5nYW1lLnRyYW5zaXRpb24uYWRkKHRoaXMuZ2FtZS5jb25zdGFudHMuU1RBVEVfUFJFTE9BRCwgdGhpcy5nYW1lLmNvbnN0YW50cy5TVEFURV9NRU5VLCB0aGlzLmdhbWUucHJlbG9hZGVyKTtcbiAgICAqXG4gICAgKiBpZiA1IGFyZ3VtZW50cyBhcmUgcGFzc2VkLCBhIGRpZmZlcmVudCBpbnN0YW5jZSBjYW4gYmUgdXNlZCBmb3IgaW4gdHJhbnNpdGlvbiwgcHJlbG9hZGluZywgYW5kIG91dCB0cmFuc2l0aW9uXG4gICAgKiBFLkcuXG4gICAgKiB0aGlzLmdhbWUudHJhbnNpdGlvbi5hZGQodGhpcy5nYW1lLmNvbnN0YW50cy5TVEFURV9QUkVMT0FELCB0aGlzLmdhbWUuY29uc3RhbnRzLlNUQVRFX01FTlUsIHRoaXMuZ2FtZS50cmFuc2l0aW9uT3V0SGFuZGxlciwgdGhpcy5nYW1lLnByZWxvYWRIYW5kbGVyLCB0aGlzLmdhbWUudHJhbnNpdGlvbkluSGFuZGxlcik7XG4gICAgKlxuICAgICogdHJhbnNpdGlvbiBoYW5kbGVycyBhcmUgZXhwZWN0ZWQgdG8gYmVoYXZlIGFzIGZvbGxvd3M6XG4gICAgKiBhbiBvdXQgdHJhbnNpdGlvbiBoYW5kbGVyIHNob3VsZCBoYXZlIGEgdHJhbnNpdGlvbkluIG1ldGhvZCBhbmQgZGlzcGF0Y2ggYSB0cmFuc2l0aW9uQ29tcGxldGUgc2lnbmFsIHdoZW4gZG9uZVxuICAgICogYW4gaW4gdHJhbnNpdGlvbiBoYW5kbGVyIHNob3VsZCBoYXZlIGEgdHJhbnNpdGlvbk91dCBtZXRob2QgYW5kIGRpc3BhdGNoIGEgdHJhbnNpdGlvbkNPbXBsZXRlIHNpZ25hbCB3aGVuIGRvbmVcbiAgICAqIGEgcHJlbG9hZCBoYW5kbGVyIHNob3VsZCBoYXZlIGxvYWRTdGFydCwgbG9hZFByb2dyZXNzLCBhbmQgbG9hZENvbXBsZXRlIG1ldGhvZHNcbiAgICAqIHRoZSBsb2FkUHJvZ3Jlc3MgbWV0aG9kIG1heSBhY2NlcHQgYSB1cCB0byA0IHBhcmFtZXRlcnMgZm9yIHByb2dyZXNzIChwZXJjZW50IG9mIGZpbGVzIGxvYWRlZCksIGlkLCBmaWxlSW5kZXgsIGFuZCB0b3RhbEZpbGVzXG4gICAgKlxuICAgICogQHBhcmFtIHtzdHJpbmd9IGZyb21TdGF0ZSAtIHRoZSBzdGF0ZSBiZWluZyB0cmFuc2l0aW9uZWQgZnJvbVxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRvU3RhdGUgLSB0aGUgc3RhdGUgYmVpbmcgdHJhbnNpdGlvbmVkIHRvXG4gICAgKiBAcGFyYW0ge291dEhhbmRsZXJ9IG91dEhhbmRsZXIgLSB0aGUgaW5zdGFuY2UgdGhhdCB3aWxsIGhhbmRsZSB0aGUgdHJhbnNpdGlvbiBmcm9tIHRoZSBmcm9tU3RhdGVcbiAgICAqIEBwYXJhbSB7cHJlbG9hZEhhbmRsZXJ9IHByZWxvYWRIYW5kbGVyIC0gdGhlIGluc3RhbmNlIHRoYXQgd2lsbCBoYW5kbGUgcHJlbG9hZGluZyB0aGUgdG9TdGF0ZVxuICAgICogQHBhcmFtIHtpbkhhbmRsZXJ9IGluSGFuZGxlciAtIHRoZSBpbnN0YW5jZSB0aGF0IHdpbGwgaGFuZGxlIHRoZSBpbiB0cmFuc2l0aW9uIHdoZW4gdGhlIHRvU3RhdGUgaXMgY29tcGxldGVseSBsb2FkZWRcbiAgICAqIEByZXR1cm4ge09iamVjdH0gdHJhbnNpdGlvbiByZWZlcmVuY2UgdGhhdCB3YXMgYWRkZWQgdG8gX3RyYW5zaXRpb25zXG4gICAgKi9cbiAgICBwdWJsaWMgYWRkKGZyb21TdGF0ZTogc3RyaW5nLCB0b1N0YXRlOiBzdHJpbmcgfCBJUHJlbG9hZEhhbmRsZXIsIG91dEhhbmRsZXI/OiBJVHJhbnNpdGlvbkhhbmRsZXIsIHByZWxvYWRIYW5kbGVyPzogSVByZWxvYWRIYW5kbGVyLCBpbkhhbmRsZXI/OiBJVHJhbnNpdGlvbkhhbmRsZXIpOiB2b2lkIHtcbiAgICAgICAgdmFyIGFyZ3M7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgNSkge1xuICAgICAgICAgICAgaWYgKGZyb21TdGF0ZSA9PT0gJ2FsbCcpIHtcbiAgICAgICAgICAgICAgICBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYWRkKCdhbGwnLCBhcmdzWzBdLCBhcmdzWzBdLCBhcmdzWzBdKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9hZGQoJ2FsbCcsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9hZGQoZnJvbVN0YXRlICsgJy8nICsgdG9TdGF0ZSwgYXJnc1swXSwgYXJnc1swXSwgYXJnc1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fYWRkKGZyb21TdGF0ZSArICcvJyArIHRvU3RhdGUsIG91dEhhbmRsZXIsIHByZWxvYWRIYW5kbGVyLCBpbkhhbmRsZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRBbGwoaGFuZGxlcjogSVByZWxvYWRIYW5kbGVyKTogdm9pZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGQoJ2FsbCcsIGhhbmRsZXIsIGhhbmRsZXIsIGhhbmRsZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQWRkcyBhbiBleGNlcHRpb24gdG8gdGhlIERpam9uLlRyYW5zaXRpb25NYW5hZ2VyIGluIHRoZSBjYXNlIHdoZXJlICdhbGwnIGhhcyBiZWVuIHVzZWRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0ZSAtIHRoZSBzdGF0ZSB0byBhZGQgdGhlIGV4Y2VwdGlvbiBmb3JcbiAgICAqL1xuICAgIHB1YmxpYyBhZGRFeGNlcHRpb24oc3RhdGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9leGNlcHRpb25zW3N0YXRlXSA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBSZW1vdmVzIGEgdHJhbnNpdGlvbiBoYW5kbGVyIGZvciBhIHNwZWNpZmljIGZyb20gLyB0byBzdGF0ZSBjb21iaW5hdGlvblxuICAgICovXG4gICAgcHVibGljIHJlbW92ZShmcm9tU3RhdGU6IHN0cmluZywgdG9TdGF0ZT86IHN0cmluZykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbnNbZnJvbVN0YXRlXSA9IG51bGw7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fdHJhbnNpdGlvbnNbZnJvbVN0YXRlXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25zW2Zyb21TdGF0ZSArICcvJyArIHRvU3RhdGVdID0gbnVsbDtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl90cmFuc2l0aW9uc1tmcm9tU3RhdGUgKyAnLycgKyB0b1N0YXRlXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICogU3RhcnQgdGhlIHRyYW5zaXRpb24gdG8gYSBuZXcgc3RhdGVcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0ZSAtIHRoZSBzdGF0ZSB0byB0cmFuc2l0aW9uIHRvXG4gICAgKiBAcGFyYW0ge2FueX0gYXJncyAtIGFuIG9wdGlvbmFsIHBhcmFtZXRlci4gUGFzcyBpbiBhbiBvYmplY3Qgb2YgdHlwZSBhbnkgY29udGFpbmluZyBzcGVjaWZpYyBwYXJhbWV0ZXJzXG4gICAgKiBmb3IgdGhlIHN0YXRlIHlvdSBhcmUgdHJhbnNpdGlvbmluZyB0by4gVGhlIG9iamVjdCBjYW4gdGhlbiBiZSBkZWNvbnN0cnVjdGVkIGluIHRoYXQgc3RhdGVzIGluaXQoYXJnczogYW55KS5cbiAgICAqL1xuICAgIHB1YmxpYyB0byhzdGF0ZTogc3RyaW5nLCBhcmdzPzogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLl90cmFuc2l0aW9uKVxuICAgICAgICAgICAgdGhpcy5fY2xlYXJUcmFuc2l0aW9uKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2V4Y2VwdGlvbnNbc3RhdGVdKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGlmIChhcmdzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2FyZ3MgPSBhcmdzO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZnJvbVN0YXRlID0gdGhpcy5nYW1lLnN0YXRlLmN1cnJlbnQ7XG4gICAgICAgIHRoaXMuX3RvU3RhdGUgPSBzdGF0ZTtcblxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uID0gdGhpcy5fZ2V0VHJhbnNpdGlvbih0aGlzLl9mcm9tU3RhdGUsIHRoaXMuX3RvU3RhdGUpO1xuXG4gICAgICAgIGlmICghdGhpcy5fdHJhbnNpdGlvbikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIHRyYW5zaXRpb24gZm91bmQgZm9yOicsIHRoaXMuZ2FtZS5zdGF0ZS5jdXJyZW50ICsgJyB0byAnICsgc3RhdGUpO1xuICAgICAgICAgICAgdGhpcy5nYW1lLmNoYW5nZVN0YXRlKHRoaXMuX3RvU3RhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uSW4oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdHJhbnNpdGlvbkluKCkge1xuICAgICAgICBpZiAoIXRoaXMuX3RyYW5zaXRpb24pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIFxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3RyYW5zaXRpb24ub3V0SGFuZGxlci50cmFuc2l0aW9uSW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzSW5UcmFuc2l0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb24ub3V0SGFuZGxlci50cmFuc2l0aW9uSW5Db21wbGV0ZS5hZGRPbmNlKHRoaXMuX3RyYW5zaXRpb25JbkNvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb24ub3V0SGFuZGxlci50cmFuc2l0aW9uSW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjYW5UcmFuc2l0aW9uT3V0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIXRoaXMuX2V4Y2VwdGlvbnNbdGhpcy5nYW1lLnN0YXRlLmN1cnJlbnRdICYmIHRoaXMuX3RyYW5zaXRpb24gJiYgdGhpcy5fdHJhbnNpdGlvbi5pbkhhbmRsZXIgJiYgdHlwZW9mIHRoaXMuX3RyYW5zaXRpb24uaW5IYW5kbGVyLnRyYW5zaXRpb25PdXQgPT09ICdmdW5jdGlvbic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBBZnRlciB0aGUgc3RhdGUgaXMgZnVsbHkgbG9hZGVkIGFuZCAnYnVpbHQnIGEgY2FsbCB0byB0aGlzIGlzIG1hZGVcbiAgICAqIHRoaXMgaXMgY3VycmVudGx5IG1hZGUgZnJvbSBCYXNlU3RhdGUgaW4gdGhlICdhZnRlckJ1aWxkJyBtZXRob2RcbiAgICAqL1xuICAgIHB1YmxpYyB0cmFuc2l0aW9uT3V0KCkge1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uLmluSGFuZGxlci50cmFuc2l0aW9uT3V0Q29tcGxldGUuYWRkT25jZSh0aGlzLl90cmFuc2l0aW9uT3V0Q29tcGxldGUsIHRoaXMpO1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uLmluSGFuZGxlci50cmFuc2l0aW9uT3V0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpc0luVHJhbnNpdGlvbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzSW5UcmFuc2l0aW9uO1xuICAgIH1cbn0iLCJpbXBvcnQge0lOb3RpZmljYXRpb24sSU9ic2VydmVyfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7QXBwbGljYXRpb259IGZyb20gJy4uL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7R2FtZX0gZnJvbSAnLi4vY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBNb2RlbCB7XG4gICAgcHVibGljIGFwcDogQXBwbGljYXRpb247XG4gICAgcHVibGljIGdhbWU6IEdhbWU7XG4gICAgcHJvdGVjdGVkIF9kYXRhOiBhbnk7XG5cbiAgICBwdWJsaWMgc3RhdGljIE1PREVMX05BTUU6IHN0cmluZyA9ICdNb2RlbCc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhS2V5OiBzdHJpbmcgPSBudWxsLCBwcml2YXRlIG1vZGVsTmFtZTogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICB0aGlzLmFwcCA9IEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuZ2FtZSA9IHRoaXMuYXBwLmdhbWU7XG5cbiAgICAgICAgaWYgKGRhdGFLZXkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YShkYXRhS2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYXBwLnJlZ2lzdGVyTW9kZWwodGhpcyk7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBvblJlZ2lzdGVyKCk6dm9pZHtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBvblJlbW92ZWQoKTp2b2lke1xuICAgICAgICBcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0S2V5RXhpc3RzKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUuY2FjaGUuZ2V0SlNPTihrZXkpICE9PSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXREYXRhKGRhdGFLZXk6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGlmICghdGhpcy5nZXRLZXlFeGlzdHMoZGF0YUtleSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNb2RlbDo6IGNhbm5vdCBzZXQgZGF0YSBmcm9tIGtleSAnICsgZGF0YUtleSArICcuIElzIGl0IGluIHRoZSBQaGFzZXIgY2FjaGU/Jyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kYXRhID0gdGhpcy5nYW1lLmNhY2hlLmdldEpTT04oZGF0YUtleSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXREYXRhKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFwcC5yZW1vdmVNb2RlbCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxOYW1lIHx8IE1vZGVsLk1PREVMX05BTUU7XG4gICAgfVxufSIsImltcG9ydCB7TW9kZWx9IGZyb20gJy4vTW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgQ29weU1vZGVsIGV4dGVuZHMgTW9kZWwge1xuICAgIHB1YmxpYyBzdGF0aWMgTU9ERUxfTkFNRTogc3RyaW5nID0gJ2NvcHlNb2RlbCc7XG5cbiAgICBwcml2YXRlIF9sYW5ndWFnZXM6IHsgW2xhbmd1YWdlTmFtZTogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGFLZXk6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgc3VwZXIoZGF0YUtleSk7XG5cbiAgICAgICAgdGhpcy5fbGFuZ3VhZ2VzWydlbiddID0gdGhpcy5fZGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29weShncm91cElkOiBzdHJpbmcsIGl0ZW1JZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29weUdyb3VwKGdyb3VwSWQpW2l0ZW1JZF07XG4gICAgfVxuXG4gICAgcHVibGljIGdldENvcHlHcm91cChncm91cElkOiBzdHJpbmcpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVtncm91cElkXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkTGFuZ3VhZ2UobGFuZ3VhZ2VJZDogc3RyaW5nLCBkYXRhS2V5OiBzdHJpbmcpOiBhbnkge1xuICAgICAgICBpZiAoIXRoaXMuZ2V0S2V5RXhpc3RzKGRhdGFLZXkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nhbm5vdCBhZGQgYW4gYWx0ZXJuYXRlIGxhbmd1YWdlIGZyb20ga2V5ICcgKyBkYXRhS2V5ICsgJy4gSXMgaXQgaW4gdGhlIFBoYXNlciBjYWNoZT8nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2xhbmd1YWdlc1tsYW5ndWFnZUlkXSA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRKU09OKGRhdGFLZXkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VMYW5ndWFnZShsYW5ndWFnZUlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9sYW5ndWFnZXNbbGFuZ3VhZ2VJZF0gPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd0aGVyZSBpcyBubyBsYW5ndWFnZSAnICsgbGFuZ3VhZ2VJZCk7XG5cbiAgICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuX2xhbmd1YWdlc1tsYW5ndWFnZUlkXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIENvcHlNb2RlbC5NT0RFTF9OQU1FO1xuICAgIH1cbn0iLCJpbXBvcnQge0FwcGxpY2F0aW9ufSBmcm9tICcuLi9hcHBsaWNhdGlvbic7XG5pbXBvcnQge0lPYnNlcnZlcixJTm90aWZpY2F0aW9ufSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7R2FtZX0gZnJvbSAnLi4vY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBNZWRpYXRvciBpbXBsZW1lbnRzIElPYnNlcnZlciB7XG4gICAgcHVibGljIHN0YXRpYyBNRURJQVRPUl9OQU1FOiBzdHJpbmcgPSAnTWVkaWF0b3InO1xuXG4gICAgcHJvdGVjdGVkIG1lZGlhdG9yTmFtZTogc3RyaW5nID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgYXBwOiBBcHBsaWNhdGlvbjtcbiAgICBwcm90ZWN0ZWQgZ2FtZTogR2FtZTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfdmlld0NvbXBvbmVudDogYW55ID0gbnVsbCwgYXV0b1JlZzogYm9vbGVhbiA9IHRydWUsIG1lZGlhdG9yTmFtZTogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICB0aGlzLmFwcCA9IEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuZ2FtZSA9IHRoaXMuYXBwLmdhbWU7XG4gICAgICAgIHRoaXMubWVkaWF0b3JOYW1lID0gbWVkaWF0b3JOYW1lO1xuXG4gICAgICAgIGlmIChhdXRvUmVnKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICBwcm90ZWN0ZWQgcmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXBwLnJlZ2lzdGVyTWVkaWF0b3IodGhpcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlbW92ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hcHAucmVtb3ZlTWVkaWF0b3IodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uUmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgICAgIC8vIG92ZXJyaWRlIG1lIGZyZWVseVxuICAgIH1cblxuICAgIHB1YmxpYyBvblJlbW92ZWQoKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbGlzdE5vdGlmaWNhdGlvbkludGVyZXN0cygpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFuZGxlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogSU5vdGlmaWNhdGlvbikge1xuICAgICAgICAvKipcbiAgICAgICAgICogZGVmYXVsdCBpbW1wbGVtZW50YXRpb24gd291bGQgbG9vayBzb21ldGhpbmcgbGlrZTpcbiAgICAgICAgICogc3dpdGNoKCBub3RpZmljYXRpb246IGRpam9uLklOb3RpZmljYXRpb24gKXtcbiAgICAgICAgICogXHRcdGNhc2UgTm90aWZpY2F0aW9ucy5TT01FVEhJTkc6XG4gICAgICAgICAqIFx0XHRcdC8vIGRvIHNvbWV0aGluZ1xuICAgICAgICAgKiBcdFx0XHRicmVhaztcbiAgICAgICAgICogXHRcdGNhc2UgTm90aWZpY2F0aW9ucy5TT01FVEhJTkdfRUxTRTpcbiAgICAgICAgICogXHRcdFx0Ly8gZG8gc29tZXRoaW5nIGVsc2VcbiAgICAgICAgICogXHRcdFx0YnJlYWs7XG4gICAgICAgICAqIH1cbiAgICAgICAgICovXG4gICAgfVxuXG4gICAgcHVibGljIHNlbmROb3RpZmljYXRpb24obm90aWZpY2F0aW9uTmFtZTogc3RyaW5nLCBub3RpZmljYXRpb25Cb2R5PzogYW55KSB7XG4gICAgICAgIHRoaXMuYXBwLnNlbmROb3RpZmljYXRpb24obm90aWZpY2F0aW9uTmFtZSwgbm90aWZpY2F0aW9uQm9keSk7XG4gICAgfVxuXG4gICAgLy8gZ2V0dGVyIC8gc2V0dGVyXG4gICAgcHVibGljIHNldCB2aWV3Q29tcG9uZW50KHZpZXdDb21wb25lbnQ6IGFueSkge1xuICAgICAgICB0aGlzLl92aWV3Q29tcG9uZW50ID0gdmlld0NvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHZpZXdDb21wb25lbnQoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZXdDb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLm1lZGlhdG9yTmFtZSB8fCBNZWRpYXRvci5NRURJQVRPUl9OQU1FO1xuICAgIH1cbn0iLCJpbXBvcnQge0lOb3RpZmljYXRpb259IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uIGltcGxlbWVudHMgSU5vdGlmaWNhdGlvbiB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmFtZTogc3RyaW5nLCBwcml2YXRlIF9ib2R5OiBhbnkgPSBudWxsKSB7IH1cblxuICAgIHB1YmxpYyBnZXROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRCb2R5KGJvZHk6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9ib2R5ID0gYm9keTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Qm9keSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYm9keTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fYm9keSA9IG51bGw7XG4gICAgICAgIHRoaXMuX25hbWUgPSBudWxsO1xuICAgIH1cbn0iLCJpbXBvcnQge0lOb3RpZmllciwgSU5vdGlmaWNhdGlvbiwgSU9ic2VydmVyfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7TWVkaWF0b3IsIE1vZGVsLCBOb3RpZmljYXRpb259IGZyb20gJy4uL212Yyc7XG5pbXBvcnQge0dhbWV9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgQW5hbHl0aWNzRXZlbnRNb2RlbCB9IGZyb20gJy4uL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb24gaW1wbGVtZW50cyBJTm90aWZpZXIge1xuICAgIC8vIHN0YXRpYyBjb25zdGFudHNcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGluc3RhbmNlID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgc3RhdGljIFNJTkdMRVRPTl9NU0cgPSAnQXBwbGljYXRpb24gc2luZ2xldG9uIGFscmVhZHkgY29uc3RydWN0ZWQhJztcblxuICAgIC8vIHB1YmxpYyBcbiAgICBwdWJsaWMgZ2FtZTogR2FtZTtcblxuICAgIC8vIHByb3RlY3RlZCAgICAgICAgXG4gICAgcHJvdGVjdGVkIF9tZWRpYXRvcjogTWVkaWF0b3IgPSBudWxsO1xuICAgIHByb3RlY3RlZCBfbW9kZWxzOiB7IFtuYW1lOiBzdHJpbmddOiBNb2RlbCB9ID0ge307XG4gICAgcHJvdGVjdGVkIF9tZWRpYXRvcnM6IHsgW25hbWU6IHN0cmluZ106IE1lZGlhdG9yIH0gPSB7fTtcbiAgICBwcm90ZWN0ZWQgX29ic2VydmVyTWFwOiB7IFtuYW1lOiBzdHJpbmddOiBJT2JzZXJ2ZXJbXSB9ID0ge307XG5cbiAgICAvL2ZvciBkZWJ1Z2dpbmdcbiAgICBwcml2YXRlIHN0YXRpYyBfaGFzaFF1ZXJ5OiB7fTtcbiAgICBwdWJsaWMgc3RhdGljIHN0YXRpY19kZWJ1Z01vZGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAoQXBwbGljYXRpb24uaW5zdGFuY2UpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihBcHBsaWNhdGlvbi5TSU5HTEVUT05fTVNHKTtcblxuICAgICAgICBBcHBsaWNhdGlvbi5pbnN0YW5jZSA9IHRoaXM7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgICAgIEFwcGxpY2F0aW9uLl9nZXRIYXNoUXVlcnkoKTtcbiAgICAgICAgICAgIHRoaXMud2luZG93SGFzaENoYW5nZSgpO1xuICAgICAgICB9LCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVHYW1lKCk7XG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXRpbGl0eSBNZXRob2QgLSBNZXRob2Qgc2hvdWxkIGJlIGNhbGxlZCBkdXJpbmcgYm9vdCBzdGF0ZSwgYW5kIHdpbGwgdW5sb2NrIGF1ZGlvIGlmIHRoZSBhdWRpbyBjb250ZW54dFxuICAgICAqIGhhcyBiZWVuIHN1c3BlbmRlZCAoYXdhaXRpbmcgdG91Y2ggaW5wdXQpLiBUaGlzIGlzIGR1ZSB0byBhIGJ1ZyB3aXRoIHRoZSB3YXkgYXVkaW8gaXMgaGFuZGxlZCBieSBjaHJvbWUvYW5kcm9pZFxuICAgICAqIHdoZW4gdGhlIGdhbWUgaXMgb3BlbmVkIGluIGFuIGlGcmFtZSBmcm9tIGEgZGlmZmVyZW50IHNpdGUuIFRoaXMgc2hvdWxkIGJlIGNhbGxlZCBpbiB0aGUgYm9vdCBzdGF0ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZW5zdXJlQXVkaW9Db250ZXh0VW5sb2NrZWQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmdhbWUuZGV2aWNlLmFuZHJvaWQgJiYgdGhpcy5nYW1lLmRldmljZS5jaHJvbWUgJiYgdGhpcy5nYW1lLmRldmljZS5jaHJvbWVWZXJzaW9uID49IDU1KSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUuc291bmQuc2V0VG91Y2hMb2NrKCk7XG4gICAgICAgICAgICB0aGlzLmdhbWUuaW5wdXQudG91Y2guYWRkVG91Y2hMb2NrQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWUuc291bmQubm9BdWRpbyB8fCAhdGhpcy5nYW1lLnNvdW5kLnRvdWNoTG9ja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lLnNvdW5kLnVzaW5nV2ViQXVkaW8pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGVtcHR5IGJ1ZmZlciBhbmQgcGxheSBpdFxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgU291bmRNYW5hZ2VyLnVwZGF0ZSBsb29wIGNhcHR1cmVzIHRoZSBzdGF0ZSBvZiBpdCBhbmQgdGhlbiByZXNldHMgdG91Y2hMb2NrZWQgdG8gZmFsc2VcblxuICAgICAgICAgICAgICAgICAgICB2YXIgYnVmZmVyID0gdGhpcy5nYW1lLnNvdW5kLmNvbnRleHQuY3JlYXRlQnVmZmVyKDEsIDEsIDIyMDUwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLnNvdW5kW1widW5sb2NrU291cmNlXCJdID0gdGhpcy5nYW1lLnNvdW5kLmNvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5zb3VuZFtcInVubG9ja1NvdXJjZVwiXS5idWZmZXIgPSBidWZmZXI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5zb3VuZFtcInVubG9ja1NvdXJjZVwiXS5jb25uZWN0KHRoaXMuZ2FtZS5zb3VuZC5jb250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS5zb3VuZFtcInVubG9ja1NvdXJjZVwiXS5zdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuc291bmRbXCJ1bmxvY2tTb3VyY2VcIl0ubm90ZU9uKDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLnNvdW5kW1widW5sb2NrU291cmNlXCJdLnN0YXJ0KDApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy9IZWxsbyBDaHJvbWUgNTUhXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWUuc291bmRbXCJ1bmxvY2tTb3VyY2VcIl0uY29udGV4dC5zdGF0ZSA9PT0gJ3N1c3BlbmRlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5zb3VuZFtcInVubG9ja1NvdXJjZVwiXS5jb250ZXh0LnJlc3VtZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gIFdlIGNhbiByZW1vdmUgdGhlIGV2ZW50IGJlY2F1c2Ugd2UndmUgZG9uZSB3aGF0IHdlIG5lZWRlZCAoc3RhcnRlZCB0aGUgdW5sb2NrIHNvdW5kIHBsYXlpbmcpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5zdXJlQXVkaW9Db250ZXh0VW5sb2NrZWQgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIHRyYWNrRXZlbnQoZXZlbnRNb2RlbDogQW5hbHl0aWNzRXZlbnRNb2RlbCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdhbWUuYW5hbHl0aWNzLnRyYWNrRXZlbnQoZXZlbnRNb2RlbC5hY3Rpb24sIGV2ZW50TW9kZWwubGFiZWwsIGV2ZW50TW9kZWwudmFsdWUgPT09IG51bGwgPyBudWxsIDogZXZlbnRNb2RlbC52YWx1ZS50b1N0cmluZygpKTtcbiAgICB9ICAgXG5cbiAgICBwdWJsaWMgdHJhY2tFdmVudEFuZENoYW5nZUNhdGVnb3J5KG5ld0NhdGVnb3J5OiBzdHJpbmcsIGV2ZW50TW9kZWw6IEFuYWx5dGljc0V2ZW50TW9kZWwpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nYW1lLmFuYWx5dGljcy5zZXRDYXRlZ29yeShuZXdDYXRlZ29yeSk7XG4gICAgICAgIHRoaXMudHJhY2tFdmVudChldmVudE1vZGVsKTtcbiAgICB9XG4gICAgXG4gICAgcHJvdGVjdGVkIHdpbmRvd0hhc2hDaGFuZ2UoKTogdm9pZCB7IH1cblxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUdhbWUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKHtcbiAgICAgICAgICAgIHdpZHRoOiA4MDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgIHBhcmVudDogJ2dhbWUtY29udGFpbmVyJyxcbiAgICAgICAgICAgIHJlbmRlcmVyOiBQaGFzZXIuQVVUTyxcbiAgICAgICAgICAgIHRyYW5zcGFyZW50OiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc3RhcnRHYW1lKCk6IHZvaWQge1xuICAgICAgICAvLyBzdGFydCB0aGUgYXBwJ3MgaW5pdGlhbCBzdGF0ZSBoZXJlXG4gICAgfVxuXG4gICAgcHVibGljIGFkZFBsdWdpbnMoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGRQbHVnaW5zKCk7XG4gICAgICAgIGlmIChBcHBsaWNhdGlvbi5zdGF0aWNfZGVidWdNb2RlKSB7XG4gICAgICAgICAgICBMb2cuaW5pdCgpO1xuICAgICAgICB9ICAgIFxuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck1vZGVsKG1vZGVsOiBNb2RlbCk6IE1vZGVsIHtcbiAgICAgICAgaWYgKHRoaXMuX21vZGVsc1ttb2RlbC5uYW1lXSkge1xuICAgICAgICAgICAgdGhyb3cgKG5ldyBFcnJvcignQXBwbGljYXRpb246OiBhIG1vZGVsIHdpdGggdGhlIG5hbWUgXCInICsgbW9kZWwubmFtZSArICdcIiBhbHJlYWR5IGV4aXN0cy4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbW9kZWxzW21vZGVsLm5hbWVdID0gbW9kZWw7XG5cbiAgICAgICAgbW9kZWwub25SZWdpc3RlcigpO1xuXG4gICAgICAgIHJldHVybiBtb2RlbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmV0cmlldmVNb2RlbChtb2RlbE5hbWU6IHN0cmluZyk6IE1vZGVsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vZGVsc1ttb2RlbE5hbWVdIHx8IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZU1vZGVsKG1vZGVsVG9SZW1vdmU6IE1vZGVsKTogdm9pZCB7XG4gICAgICAgIGxldCBuYW1lID0gbW9kZWxUb1JlbW92ZS5uYW1lO1xuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLl9tb2RlbHNbbmFtZV07XG5cbiAgICAgICAgaWYgKCFtb2RlbClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBtb2RlbC5vblJlbW92ZWQoKTtcblxuICAgICAgICBkZWxldGUgdGhpcy5fbW9kZWxzW25hbWVdO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck1lZGlhdG9yKG1lZGlhdG9yOiBNZWRpYXRvcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fbWVkaWF0b3JzW21lZGlhdG9yLm5hbWVdKSB7XG4gICAgICAgICAgICB0aHJvdyAobmV3IEVycm9yKCdBcHBsaWNhdGlvbjo6IGEgbWVkaWF0b3Igd2l0aCB0aGUgbmFtZSBcIicgKyBtZWRpYXRvci5uYW1lICsgJ1wiIGFscmVhZHkgZXhpc3RzLicpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX21lZGlhdG9yc1ttZWRpYXRvci5uYW1lXSA9IG1lZGlhdG9yO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyT2JzZXJ2ZXIobWVkaWF0b3IpO1xuXG4gICAgICAgIG1lZGlhdG9yLm9uUmVnaXN0ZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmV0cmlldmVNZWRpYXRvcihtZWRpYXRvck5hbWU6IHN0cmluZyk6IE1lZGlhdG9yIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lZGlhdG9yc1ttZWRpYXRvck5hbWVdIHx8IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZU1lZGlhdG9yKG1lZGlhdG9yVG9SZW1vdmU6IE1lZGlhdG9yKTogdm9pZCB7XG4gICAgICAgIGxldCBuYW1lID0gbWVkaWF0b3JUb1JlbW92ZS5uYW1lO1xuICAgICAgICBsZXQgbWVkaWF0b3IgPSB0aGlzLl9tZWRpYXRvcnNbbmFtZV07XG5cbiAgICAgICAgaWYgKCFtZWRpYXRvcilcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBtZWRpYXRvci5saXN0Tm90aWZpY2F0aW9uSW50ZXJlc3RzKCkuZm9yRWFjaChpbnRlcmVzdCA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZU9ic2VydmVyKGludGVyZXN0LCBtZWRpYXRvcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lZGlhdG9yLm9uUmVtb3ZlZCgpO1xuICAgICAgICBkZWxldGUgdGhpcy5fbWVkaWF0b3JzW25hbWVdO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck9ic2VydmVyKG9ic2VydmVyOiBJT2JzZXJ2ZXIpOiB2b2lkIHtcbiAgICAgICAgb2JzZXJ2ZXIubGlzdE5vdGlmaWNhdGlvbkludGVyZXN0cygpLmZvckVhY2gobm90aWZpY2F0aW9uTmFtZSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fb2JzZXJ2ZXJNYXBbbm90aWZpY2F0aW9uTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX29ic2VydmVyTWFwW25vdGlmaWNhdGlvbk5hbWVdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9vYnNlcnZlck1hcFtub3RpZmljYXRpb25OYW1lXS5wdXNoKG9ic2VydmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc3RvcHMgYW4gb2JzZXJ2ZXIgZnJvbSBiZWluZyBpbnRlcmVzdGVkIGluIGEgbm90aWZpY2F0aW9uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5vdGlmaWNhdGlvbk5hbWVcbiAgICAgKiBAcGFyYW0ge0lPYnNlcnZlcn0gb2JzZXJ2ZXJUb1JlbW92ZVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgcHVibGljIHJlbW92ZU9ic2VydmVyKG5vdGlmaWNhdGlvbk5hbWU6IHN0cmluZywgb2JzZXJ2ZXJUb1JlbW92ZTogSU9ic2VydmVyKTogdm9pZCB7XG4gICAgICAgIC8vVGhlIG9ic2VydmVyIGxpc3QgZm9yIHRoZSBub3RpZmljYXRpb24gdW5kZXIgaW5zcGVjdGlvblxuICAgICAgICBsZXQgb2JzZXJ2ZXJzOiBJT2JzZXJ2ZXJbXSA9IG51bGwsXG4gICAgICAgICAgICBvYnNlcnZlcjogSU9ic2VydmVyID0gbnVsbCxcbiAgICAgICAgICAgIGk6IG51bWJlciA9IDA7XG5cbiAgICAgICAgb2JzZXJ2ZXJzID0gdGhpcy5fb2JzZXJ2ZXJNYXBbbm90aWZpY2F0aW9uTmFtZV07XG5cbiAgICAgICAgLy9GaW5kIHRoZSBvYnNlcnZlciBmb3IgdGhlIG5vdGlmeUNvbnRleHQuXG4gICAgICAgIGkgPSBvYnNlcnZlcnMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICBvYnNlcnZlciA9IG9ic2VydmVyc1tpXTtcbiAgICAgICAgICAgIGlmIChvYnNlcnZlciA9PT0gb2JzZXJ2ZXJUb1JlbW92ZSkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAgKiBBbHNvLCB3aGVuIGEgTm90aWZpY2F0aW9uJ3MgT2JzZXJ2ZXIgbGlzdCBsZW5ndGggZmFsbHMgdG8gemVybywgZGVsZXRlIHRoZVxuICAgICAgICAgKiBub3RpZmljYXRpb24ga2V5IGZyb20gdGhlIG9ic2VydmVyIG1hcC5cbiAgICAgICAgICovXG4gICAgICAgIGlmIChvYnNlcnZlcnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9vYnNlcnZlck1hcFtub3RpZmljYXRpb25OYW1lXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZW5kTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbk5hbWU6IHN0cmluZywgbm90ZmljYXRpb25Cb2R5PzogYW55KTogdm9pZCB7XG4gICAgICAgIGxldCBub3RpZmljYXRpb24gPSBuZXcgTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbk5hbWUsIG5vdGZpY2F0aW9uQm9keSk7XG4gICAgICAgIHRoaXMuX25vdGlmeU9ic2VydmVycyhub3RpZmljYXRpb24pO1xuXG4gICAgICAgIG5vdGlmaWNhdGlvbi5kZXN0cm95KCk7XG4gICAgICAgIG5vdGlmaWNhdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgcHJpdmF0ZSBfbm90aWZ5T2JzZXJ2ZXJzKG5vdGlmaWNhdGlvbjogSU5vdGlmaWNhdGlvbikge1xuICAgICAgICBsZXQgb2JzZXJ2ZXI6IElPYnNlcnZlciA9IG51bGwsXG4gICAgICAgICAgICBvYnNlcnZlcnM6IElPYnNlcnZlcltdID0gbnVsbDtcblxuICAgICAgICBjb25zdCBub3RpZmljYXRpb25OYW1lOiBzdHJpbmcgPSBub3RpZmljYXRpb24uZ2V0TmFtZSgpO1xuICAgICAgICBjb25zdCBvYnNlcnZlcnNSZWY6IElPYnNlcnZlcltdID0gdGhpcy5fb2JzZXJ2ZXJNYXBbbm90aWZpY2F0aW9uTmFtZV07XG5cbiAgICAgICAgaWYgKG9ic2VydmVyc1JlZikge1xuICAgICAgICAgICAgLy8gY2xvbmUgdGhlIGFycmF5IGluIGNhc2UgYW4gb2JzZXJ2ZXIgZ2V0cyByZW1vdmVkIHdoaWxlIHRoZSBub3RpZmljYXRpb24gaXMgYmVpbmcgc2VudFxuICAgICAgICAgICAgb2JzZXJ2ZXJzID0gb2JzZXJ2ZXJzUmVmLnNsaWNlKDApO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmhhbmRsZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfZ2V0SGFzaFF1ZXJ5KCk6IHZvaWQge1xuICAgICAgICBBcHBsaWNhdGlvbi5faGFzaFF1ZXJ5ID0ge307XG4gICAgICAgIGlmICghd2luZG93LmxvY2F0aW9uLmhhc2ggfHwgd2luZG93LmxvY2F0aW9uLmhhc2ggPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSwgd2luZG93LmxvY2F0aW9uLmhhc2gubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgYUhhc2g6IHN0cmluZ1tdID0gaGFzaC5zcGxpdCgnJicpO1xuICAgICAgICBhSGFzaC5mb3JFYWNoKGhhc2hQYWlyID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFIYXNoID0gaGFzaFBhaXIuc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIEFwcGxpY2F0aW9uLl9oYXNoUXVlcnlbYUhhc2hbMF1dID0gL15cXGQrJC8udGVzdChhSGFzaFsxXSkgPyBwYXJzZUludChhSGFzaFsxXSkgOiBhSGFzaFsxXTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gc3RhdGljIG1ldGhvZHNcblxuICAgIC8qKlxuICAgICAqIHJldHVybnMgdGhlIEFwcGxpY2F0aW9uIHNpbmdsZXRvblxuICAgICAqIEByZXR1cm4ge0FwcGxpY2F0aW9ufVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogQXBwbGljYXRpb24ge1xuICAgICAgICBpZiAoIUFwcGxpY2F0aW9uLmluc3RhbmNlKVxuICAgICAgICAgICAgQXBwbGljYXRpb24uaW5zdGFuY2UgPSBuZXcgQXBwbGljYXRpb24oKTtcblxuICAgICAgICByZXR1cm4gQXBwbGljYXRpb24uaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZ2V0cyBhIHF1ZXJ5IHZhcmlhYmxlIGZyb20gdGhlIHdpbmRvdy5sb2NhdGlvbiBoYXNoXG4gICAgICogYXNzdW1lcyBzb21ldGhpbmcgbGlrZSBodHRwOi8vdXJsLyNmb289YmFyJmJhej1mb29cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFyaWFibGVJZFxuICAgICAqIEByZXR1cm4ge2FueX1cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHF1ZXJ5VmFyKHZhcmlhYmxlSWQ6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGlmIChBcHBsaWNhdGlvbi5faGFzaFF1ZXJ5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIEFwcGxpY2F0aW9uLl9nZXRIYXNoUXVlcnkoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQXBwbGljYXRpb24uX2hhc2hRdWVyeVt2YXJpYWJsZUlkXSB8fCBudWxsO1xuICAgIH1cblxufSJdfQ==
