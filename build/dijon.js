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
                function LabelledButton(x, y, callback, context, key, outFrame, downFrame, overFrame, upFrame) {
                    if (downFrame === void 0) { downFrame = null; }
                    if (overFrame === void 0) { overFrame = null; }
                    if (upFrame === void 0) { upFrame = null; }
                    _super.call(this, application_6.Application.getInstance().game, x, y, key, callback, context, overFrame, outFrame, downFrame, upFrame);
                    this._label = null;
                }
                LabelledButton.prototype.addLabel = function (text, fontSize, fontName, outTint, downTint, overTint, upTint, labelOffset) {
                    if (outTint === void 0) { outTint = 0xffffff; }
                    if (fontSize < 1) {
                        fontSize = fontSize * this.realHeight * 0.5;
                    }
                    var textPoint = new Phaser.Point(this.realWidth * 0.5, this.realHeight * 0.5);
                    if (labelOffset) {
                        textPoint = Phaser.Point.add(textPoint, labelOffset);
                    }
                    this._label = new display_1.Text(textPoint.x, textPoint.y, text, fontName, fontSize, "#ffffff");
                    this._label.tint = outTint;
                    this.addChild(this._label);
                    this._labelTint = new Object();
                    this.setLabelTints(outTint, downTint, overTint, upTint);
                    this._fitLabelToButton();
                };
                LabelledButton.prototype.setLabelTints = function (outTint, downTint, overTint, upTint) {
                    this._labelTint.out = outTint;
                    this._labelTint.down = (downTint === undefined || downTint === null) ? outTint : downTint;
                    this._labelTint.over = (overTint === undefined || overTint === null) ? outTint : overTint;
                    this._labelTint.up = (upTint === undefined || upTint === null) ? outTint : upTint;
                };
                LabelledButton.prototype.changeLabel = function (newLabel) {
                    if (this._label !== null) {
                        this._label.text = newLabel;
                        this._fitLabelToButton();
                    }
                };
                LabelledButton.prototype.assignText = function (newText) {
                    if (newText !== null) {
                        if (this._label !== null) {
                            this._label.destroy();
                        }
                        this._label = newText;
                        this._fitLabelToButton();
                    }
                };
                LabelledButton.prototype.onInputDownHandler = function (sprite, pointer) {
                    if (this.input.enabled === false) {
                        return;
                    }
                    _super.prototype.onInputDownHandler.call(this, sprite, pointer);
                    this._tintLabel(this._labelTint.down);
                };
                LabelledButton.prototype.onInputOverHandler = function (sprite, pointer) {
                    if (this.input.enabled === false) {
                        return;
                    }
                    _super.prototype.onInputOverHandler.call(this, sprite, pointer);
                    this._tintLabel(this._labelTint.over);
                };
                LabelledButton.prototype.onInputOutHandler = function (sprite, pointer) {
                    if (this.input.enabled === false) {
                        return;
                    }
                    _super.prototype.onInputOutHandler.call(this, sprite, pointer);
                    this._tintLabel(this._labelTint.out);
                };
                LabelledButton.prototype.onInputUpHandler = function (sprite, pointer, isOver) {
                    if (this.input.enabled === false) {
                        return;
                    }
                    _super.prototype.onInputUpHandler.call(this, sprite, pointer, isOver);
                    this._tintLabel(this._labelTint.up);
                };
                LabelledButton.prototype._tintLabel = function (newTint) {
                    if (this._label !== null) {
                        this._label.tint = newTint;
                    }
                };
                LabelledButton.prototype._fitLabelToButton = function () {
                    this._label.centerPivot();
                    if (this._label.realWidth > this.realWidth || this._label.realHeight > this.realHeight) {
                        var wRatio = this.realWidth / this._label.realWidth;
                        var hRatio = this.realHeight / this._label.realHeight;
                        this._label.scale.setTo(wRatio < hRatio ? wRatio * 0.9 : hRatio * 0.9);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpam9uL3V0aWxzL0RldmljZS50cyIsImRpam9uL3V0aWxzL0xvZ2dlci50cyIsImRpam9uL3V0aWxzL05vdGlmaWNhdGlvbnMudHMiLCJkaWpvbi91dGlscy9UZXh0dXJlcy50cyIsImRpam9uL2Rpc3BsYXkvQml0bWFwVGV4dC50cyIsImRpam9uL2Rpc3BsYXkvQ29tcG9uZW50LnRzIiwiZGlqb24vZGlzcGxheS9Hcm91cC50cyIsImRpam9uL2Rpc3BsYXkvU3ByaXRlLnRzIiwiZGlqb24vZGlzcGxheS9JbnZpc2libGVCdXR0b24udHMiLCJkaWpvbi9kaXNwbGF5L0xhYmVsbGVkQnV0dG9uLnRzIiwiZGlqb24vZGlzcGxheS9OaW5lU2xpY2VJbWFnZS50cyIsImRpam9uL2Rpc3BsYXkvU3BpbmUudHMiLCJkaWpvbi9kaXNwbGF5L1NwaW5lMi50cyIsImRpam9uL2Rpc3BsYXkvVGV4dC50cyIsImRpam9uL3V0aWxzL1BsYWNlaG9sZGVycy50cyIsImRpam9uL3V0aWxzL1RpbWUudHMiLCJkaWpvbi91dGlscy9VdGlsLnRzIiwiZGlqb24vdXRpbHMvTG9nLnRzIiwiZGlqb24vdXRpbHMvUHJlZmFiQnVpbGRlci50cyIsImRpam9uL2NvcmUvQW5hbHl0aWNzTWFuYWdlci50cyIsImRpam9uL2NvcmUvQXNzZXRNYW5hZ2VyLnRzIiwiZGlqb24vY29yZS9BdWRpb01hbmFnZXIudHMiLCJkaWpvbi9jb3JlL0dhbWUudHMiLCJkaWpvbi9jb3JlL0dhbWVPYmplY3RGYWN0b3J5LnRzIiwiZGlqb24vY29yZS9TZXF1ZW5jZU1hbmFnZXIudHMiLCJkaWpvbi9jb3JlL1N0YXRlLnRzIiwiZGlqb24vY29yZS9TdG9yYWdlTWFuYWdlci50cyIsImRpam9uL2NvcmUvVHJhbnNpdGlvbk1hbmFnZXIudHMiLCJkaWpvbi9tdmMvTW9kZWwudHMiLCJkaWpvbi9tdmMvQ29weU1vZGVsLnRzIiwiZGlqb24vbXZjL01lZGlhdG9yLnRzIiwiZGlqb24vbXZjL05vdGlmaWNhdGlv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QUFLLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2xDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM5RixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQVFhLHVCQUFXLEdBQXpCO29CQUNJLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQzt3QkFDdEIsV0FBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO29CQUU3QyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztnQkFDaEMsQ0FBQztnQkFRYSxvQkFBUSxHQUF0QixVQUF1QixVQUFrQjtvQkFDckMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUN2QyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ2hDLENBQUM7b0JBQ0QsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDO2dCQUN0RCxDQUFDO2dCQTVRZ0Isb0JBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ2hCLHlCQUFhLEdBQUcsNENBQTRDLENBQUM7Z0JBYWhFLDRCQUFnQixHQUFZLEtBQUssQ0FBQztnQkFnUXBELGtCQUFDO1lBQUQsQ0FoUkEsQUFnUkMsSUFBQTtZQWhSRCxzQ0FnUkMsQ0FBQSIsImZpbGUiOiJkaWpvbi5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SUJyb3dzZXJ9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY2xhc3MgRGV2aWNlIHtcbiAgICBwdWJsaWMgc3RhdGljIElPUzogc3RyaW5nID0gJ2lPUyc7XG4gICAgcHVibGljIHN0YXRpYyBBTkRST0lEOiBzdHJpbmcgPSAnYW5kcm9pZCc7XG4gICAgcHVibGljIHN0YXRpYyBVTktOT1dOOiBzdHJpbmcgPSAndW5rbm93bic7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBtb2JpbGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBEZXZpY2UubW9iaWxlT1MgIT09IERldmljZS5VTktOT1dOO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGNvY29vbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgbmF2aWdhdG9yWydpc0NvY29vbkpTJ10gIT09IFwidW5kZWZpbmVkXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IG1vYmlsZU9TKCkge1xuICAgICAgICBjb25zdCB1c2VyQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCB8fCB3aW5kb3cubmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3dbJ29wZXJhJ107XG4gICAgICAgIGlmICh1c2VyQWdlbnQubWF0Y2goL2lQYWQvaSkgfHwgdXNlckFnZW50Lm1hdGNoKC9pUGhvbmUvaSkgfHwgdXNlckFnZW50Lm1hdGNoKC9pUG9kL2kpKSB7XG4gICAgICAgICAgICByZXR1cm4gRGV2aWNlLklPUztcbiAgICAgICAgfSBlbHNlIGlmICh1c2VyQWdlbnQubWF0Y2goL0FuZHJvaWQvaSkpIHtcbiAgICAgICAgICAgIHJldHVybiBEZXZpY2UuQU5EUk9JRDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBEZXZpY2UuVU5LTk9XTjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGJyb3dzZXIoKTogSUJyb3dzZXIge1xuICAgICAgICBjb25zdCB1YTogc3RyaW5nID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmlyZWZveDogdWEuaW5kZXhPZignZmlyZWZveCcpID4gLTEsXG4gICAgICAgICAgICBpZTogdWEuaW5kZXhPZignaWUnKSA+IC0xLFxuICAgICAgICAgICAgc2FmYXJpOiB1YS5pbmRleE9mKCdzYWZhcmknKSA+IC0xLFxuICAgICAgICAgICAgY2hyb21lOiB1YS5pbmRleE9mKCdjaHJvbWUnKSA+IC0xLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcGl4ZWxSYXRpbygpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyAhPT0gdW5kZWZpbmVkID8gd2luZG93LmRldmljZVBpeGVsUmF0aW8gOiAxO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGN1c3RvbVBpeGVsUmF0aW8oKSB7XG4gICAgICAgIHJldHVybiBEZXZpY2UucGl4ZWxSYXRpbyA+PSAxLjUgPyAyIDogMTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIExvZ2dlciB7XG4gICAgcHVibGljIHN0YXRpYyBlbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwdWJsaWMgc3RhdGljIGxvZyhpbnN0YW5jZSwgLi4uYXJncykge1xuICAgICAgICBpZiAoIUxvZ2dlci5lbmFibGVkKSB7IFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZS5jb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgYXJncy51bnNoaWZ0KGluc3RhbmNlLmNvbnN0cnVjdG9yLnRvU3RyaW5nKCkubWF0Y2goL1xcdysvZylbMV0gKyAnIDo6Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpOyBcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbnMge1xuICAgIHB1YmxpYyBzdGF0aWMgQVNTRVRfTUFOQUdFUl9EQVRBX1NFVDogc3RyaW5nID0gJ2Rpam9uQXNzZXRNYW5hZ2VyRGF0YVNldCc7XG4gICAgcHVibGljIHN0YXRpYyBBU1NFVF9NQU5BR0VSX0FTU0VUU19DTEVBUkVEOiBzdHJpbmcgPSAnZGlqb25Bc3NldE1hbmFnZXJBc3NldHNDbGVhcmVkJztcblxuICAgIHB1YmxpYyBzdGF0aWMgTU9VU0VfTEVBVkVfR0xPQkFMOiBzdHJpbmcgPSAnbW91c2VPdXRHbG9iYWwnO1xuICAgIHB1YmxpYyBzdGF0aWMgTU9VU0VfRU5URVJfR0xPQkFMOiBzdHJpbmcgPSAnbW91c2VFbnRlckdsb2JhbCc7XG59IiwiaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xuXG5leHBvcnQgY2xhc3MgVGV4dHVyZXMge1xuICAgIHByaXZhdGUgc3RhdGljIGdldCBnYW1lKCk6IFBoYXNlci5HYW1lIHtcbiAgICAgICAgcmV0dXJuIEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVjdCh3aWR0aDogbnVtYmVyID0gMTAwLCBoZWlnaHQ6IG51bWJlciA9IDEwMCwgY29sb3I6IG51bWJlciA9IDB4ZmZmZmZmLCBhbHBoYTogbnVtYmVyID0gMSwgZmlsbDogYm9vbGVhbiA9IHRydWUsIGxpbmVDb2xvcjogbnVtYmVyID0gMHhmZmZmZmYsIGxpbmVUaGlja25lc3M6IG51bWJlciA9IDEsIGxpbmVBbHBoYTogbnVtYmVyID0gMSwgb3V0bGluZTogYm9vbGVhbiA9IGZhbHNlKTogUElYSS5UZXh0dXJlIHtcbiAgICAgICAgY29uc3QgZ2Z4ID0gVGV4dHVyZXMuZ2FtZS5hZGQuZ3JhcGhpY3MoMCwgMCk7XG4gICAgICAgIGlmIChmaWxsKSB7XG4gICAgICAgICAgICBnZnguYmVnaW5GaWxsKGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG91dGxpbmUpIHtcbiAgICAgICAgICAgIGdmeC5saW5lV2lkdGggPSBsaW5lVGhpY2tuZXNzO1xuICAgICAgICAgICAgZ2Z4LmxpbmVTdHlsZShsaW5lVGhpY2tuZXNzLCBsaW5lQ29sb3IsIGxpbmVBbHBoYSk7XG4gICAgICAgIH1cbiAgICAgICAgZ2Z4LmRyYXdSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBnZnguZ2VuZXJhdGVUZXh0dXJlKCk7XG4gICAgICAgIFRleHR1cmVzLmdhbWUud29ybGQucmVtb3ZlKGdmeCk7XG5cbiAgICAgICAgcmV0dXJuIHRleHR1cmU7XG4gICAgfVxuXG4gICAgc3RhdGljIHJvdW5kZWRSZWN0KHdpZHRoOiBudW1iZXIgPSAxMDAsIGhlaWdodDogbnVtYmVyID0gMTAwLCByYWRpdXM6IG51bWJlciA9IDEwLCBjb2xvcjogbnVtYmVyID0gMHhmZmZmZmYsIGFscGhhOiBudW1iZXIgPSAxLCBmaWxsOiBib29sZWFuID0gdHJ1ZSwgbGluZUNvbG9yOiBudW1iZXIgPSAweGZmZmZmZiwgbGluZVRoaWNrbmVzczogbnVtYmVyID0gMSwgbGluZUFscGhhOiBudW1iZXIgPSAxLCBvdXRsaW5lOiBib29sZWFuID0gZmFsc2UpOiBQSVhJLlRleHR1cmUge1xuICAgICAgICBjb25zdCBnZnggPSBUZXh0dXJlcy5nYW1lLmFkZC5ncmFwaGljcygwLCAwKTtcbiAgICAgICAgaWYgKGZpbGwpIHtcbiAgICAgICAgICAgIGdmeC5iZWdpbkZpbGwoY29sb3IsIGFscGhhKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3V0bGluZSkge1xuICAgICAgICAgICAgZ2Z4LmxpbmVXaWR0aCA9IGxpbmVUaGlja25lc3M7XG4gICAgICAgICAgICBnZngubGluZVN0eWxlKGxpbmVUaGlja25lc3MsIGxpbmVDb2xvciwgbGluZUFscGhhKTtcbiAgICAgICAgfVxuICAgICAgICBnZnguZHJhd1JvdW5kZWRSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQsIHJhZGl1cyk7XG5cbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IGdmeC5nZW5lcmF0ZVRleHR1cmUoKTtcbiAgICAgICAgVGV4dHVyZXMuZ2FtZS53b3JsZC5yZW1vdmUoZ2Z4KTtcblxuICAgICAgICByZXR1cm4gdGV4dHVyZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc3F1YXJlKHNpemU6IG51bWJlciA9IDEwMCwgY29sb3I6IG51bWJlciA9IDB4ZmZmZmZmLCBhbHBoYTogbnVtYmVyID0gMSwgZmlsbDogYm9vbGVhbiA9IHRydWUsIGxpbmVDb2xvcjogbnVtYmVyID0gMHhmZmZmZmYsIGxpbmVUaGlja25lc3M6IG51bWJlciA9IDEsIGxpbmVBbHBoYTogbnVtYmVyID0gMSwgb3V0bGluZTogYm9vbGVhbiA9IGZhbHNlKTogUElYSS5UZXh0dXJlIHtcbiAgICAgICAgcmV0dXJuIFRleHR1cmVzLnJlY3Qoc2l6ZSwgc2l6ZSwgY29sb3IsIGFscGhhLCBmaWxsLCBsaW5lQ29sb3IsIGxpbmVUaGlja25lc3MsIGxpbmVBbHBoYSwgb3V0bGluZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNpcmNsZShkaWFtZXRlcjogbnVtYmVyID0gMTAwLCBjb2xvcjogbnVtYmVyID0gMHhmZmZmZmYsIGFscGhhOiBudW1iZXIgPSAxLCBmaWxsOiBib29sZWFuID0gdHJ1ZSwgbGluZUNvbG9yOiBudW1iZXIgPSAweGZmZmZmZiwgbGluZVRoaWNrbmVzczogbnVtYmVyID0gMSwgbGluZUFscGhhOiBudW1iZXIgPSAxLCBvdXRsaW5lOiBib29sZWFuID0gZmFsc2UpOiBQSVhJLlRleHR1cmUge1xuICAgICAgICBjb25zdCBnZnggPSBUZXh0dXJlcy5nYW1lLmFkZC5ncmFwaGljcygwLCAwKTtcbiAgICAgICAgaWYgKGZpbGwpIHtcbiAgICAgICAgICAgIGdmeC5iZWdpbkZpbGwoY29sb3IsIGFscGhhKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3V0bGluZSkge1xuICAgICAgICAgICAgZ2Z4LmxpbmVXaWR0aCA9IGxpbmVUaGlja25lc3M7XG4gICAgICAgICAgICBnZngubGluZVN0eWxlKGxpbmVUaGlja25lc3MsIGxpbmVDb2xvciwgbGluZUFscGhhKTtcbiAgICAgICAgfVxuICAgICAgICBnZnguZHJhd0NpcmNsZSgwLCAwLCBkaWFtZXRlcik7XG5cbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IGdmeC5nZW5lcmF0ZVRleHR1cmUoKTtcbiAgICAgICAgVGV4dHVyZXMuZ2FtZS53b3JsZC5yZW1vdmUoZ2Z4KTtcblxuICAgICAgICByZXR1cm4gdGV4dHVyZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZWxsaXBzZSh3aWR0aDogbnVtYmVyID0gNTAsIGhlaWdodDogbnVtYmVyID0gMTAwLCBjb2xvcjogbnVtYmVyID0gMHhmZmZmZmYsIGFscGhhOiBudW1iZXIgPSAxLCBmaWxsOiBib29sZWFuID0gdHJ1ZSwgbGluZUNvbG9yOiBudW1iZXIgPSAweGZmZmZmZiwgbGluZVRoaWNrbmVzczogbnVtYmVyID0gMSwgbGluZUFscGhhOiBudW1iZXIgPSAxLCBvdXRsaW5lOiBib29sZWFuID0gZmFsc2UpOiBQSVhJLlRleHR1cmUge1xuICAgICAgICBjb25zdCBnZnggPSBUZXh0dXJlcy5nYW1lLmFkZC5ncmFwaGljcygwLCAwKTtcbiAgICAgICAgaWYgKGZpbGwpIHtcbiAgICAgICAgICAgIGdmeC5iZWdpbkZpbGwoY29sb3IsIGFscGhhKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3V0bGluZSkge1xuICAgICAgICAgICAgZ2Z4LmxpbmVXaWR0aCA9IGxpbmVUaGlja25lc3M7XG4gICAgICAgICAgICBnZngubGluZVN0eWxlKGxpbmVUaGlja25lc3MsIGxpbmVDb2xvciwgbGluZUFscGhhKTtcbiAgICAgICAgfVxuICAgICAgICBnZnguZHJhd0VsbGlwc2UoMCwgMCwgd2lkdGggKiAwLjUsIGhlaWdodCAqIDAuNSk7XG5cbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IGdmeC5nZW5lcmF0ZVRleHR1cmUoKTtcbiAgICAgICAgVGV4dHVyZXMuZ2FtZS53b3JsZC5yZW1vdmUoZ2Z4KTtcblxuICAgICAgICByZXR1cm4gdGV4dHVyZTtcbiAgICB9XG59IiwiaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xuaW1wb3J0IHtHYW1lfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7RGV2aWNlfSBmcm9tICcuLi91dGlscyc7XG5cbi8qKlxuICogVGV4dFxuICovXG5leHBvcnQgY2xhc3MgQml0bWFwVGV4dCBleHRlbmRzIFBoYXNlci5CaXRtYXBUZXh0IHtcbiAgICAvLyBmcm9tIFBoYXNlci5CaXRtYXBUZXh0XG4gICAgcHJpdmF0ZSBfdGV4dDogc3RyaW5nO1xuICAgIHByaXZhdGUgX2dseXBoczogYW55W107XG5cbiAgICBwcm90ZWN0ZWQgX2F1dG9GbGF0dGVuOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwcm90ZWN0ZWQgX2NvbG9yOiBudW1iZXIgPSAweGZmZmZmZjtcbiAgICBwcm90ZWN0ZWQgX2lzSW1hZ2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcm90ZWN0ZWQgX2ludGVybmFsSW1hZ2U6IFBoYXNlci5JbWFnZSA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCBmb250OiBzdHJpbmcgPSBudWxsLCB0ZXh0OiBzdHJpbmcgPSBcIlwiLCBzaXplOiBudW1iZXIgPSAxMiwgYWxpZ246IHN0cmluZyA9ICdsZWZ0JywgY29sb3I6IG51bWJlciA9IDB4ZmZmZmZmLCBzbW9vdGhpbmc6IGJvb2xlYW4gPSB0cnVlLCBhdXRvRmxhdHRlbjogYm9vbGVhbiA9IHRydWUsIG1ha2VJbWFnZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHN1cGVyKEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZSwgeCwgeSwgZm9udCwgdGV4dCwgc2l6ZSwgYWxpZ24pO1xuXG4gICAgICAgIGlmIChzbW9vdGhpbmcgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuc21vb3RoZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWFrZUltYWdlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoY29sb3IgIT09IDB4ZmZmZmZmKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hdXRvRmxhdHRlbiA9IGF1dG9GbGF0dGVuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tYWtlSW1hZ2UoKTtcbiAgICAgICAgICAgIGlmIChjb2xvciAhPT0gMHhmZmZmZmYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbWFrZUltYWdlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9pc0ltYWdlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fYWxpZ25Ub05lYXJlc3RQaXhlbCgpO1xuICAgICAgICB0aGlzLl9pbnRlcm5hbEltYWdlID0gPFBoYXNlci5JbWFnZT50aGlzLmFkZENoaWxkQXQodGhpcy5nYW1lLmFkZC5pbWFnZSgwLCAwLCB0aGlzLmdlbmVyYXRlVGV4dHVyZSh0aGlzLmdhbWUucmVzb2x1dGlvbiwgUElYSS5zY2FsZU1vZGVzLkRFRkFVTFQpKSwgMCk7XG5cbiAgICAgICAgdGhpcy5kZXN0cm95R2x5cGhzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3lHbHlwaHMoKSB7XG4gICAgICAgIGxldCBuID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgICAgICB3aGlsZSAobiA+ICh0aGlzLl9pc0ltYWdlID8gMCA6IC0xKSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZEF0KG4pO1xuICAgICAgICAgICAgbi0tO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ2x5cGhzID0gdGhpcy5fZ2x5cGhzO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdseXBocy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZ2x5cGhzW2ldLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9nbHlwaHMgPSBbXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmxhdHRlbihkZWxheTogbnVtYmVyID0gbnVsbCk6IHZvaWQge1xuICAgICAgICBpZiAoZGVsYXkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoZGVsYXksICgpID0+IHsgdGhpcy5jYWNoZUFzQml0bWFwID0gdHJ1ZSB9LCB0aGlzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9hbGlnblRvTmVhcmVzdFBpeGVsKCk7XG4gICAgICAgIHRoaXMuY2FjaGVBc0JpdG1hcCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIHVuRmxhdHRlbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYWNoZUFzQml0bWFwID0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGF1dG9GbGF0dGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2F1dG9GbGF0dGVuID0gdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLl9hdXRvRmxhdHRlbikge1xuICAgICAgICAgICAgdGhpcy5mbGF0dGVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVuRmxhdHRlbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhdXRvRmxhdHRlbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dG9GbGF0dGVuO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgY29sb3IodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5fYXV0b0ZsYXR0ZW4pIHtcbiAgICAgICAgICAgIHRoaXMudW5GbGF0dGVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY29sb3IgPSB2YWx1ZTtcblxuICAgICAgICBpZiAodGhpcy5faXNJbWFnZSkge1xuICAgICAgICAgICAgdGhpcy5faW50ZXJuYWxJbWFnZS50aW50ID0gdGhpcy5fY29sb3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRpbnQgPSB0aGlzLl9jb2xvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9hdXRvRmxhdHRlbikge1xuICAgICAgICAgICAgdGhpcy5mbGF0dGVuKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGNvbG9yKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHRleHQodmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5fYXV0b0ZsYXR0ZW4pIHtcbiAgICAgICAgICAgIHRoaXMudW5GbGF0dGVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3RleHQgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gdGhpcy5fdGV4dCkge1xuICAgICAgICAgICAgdGhpcy5fdGV4dCA9IHZhbHVlLnRvU3RyaW5nKCkgfHwgJyc7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lHbHlwaHMoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9hdXRvRmxhdHRlbikge1xuICAgICAgICAgICAgdGhpcy5mbGF0dGVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9hbGlnblRvTmVhcmVzdFBpeGVsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCByZWFsV2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Qm91bmRzKCkud2lkdGg7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCByZWFsSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJvdW5kcygpLmhlaWdodDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dlbmVyYXRlQ2FjaGVkU3ByaXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9jYWNoZUFzQml0bWFwID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIGJvdW5kcyA9IHRoaXMuZ2V0TG9jYWxCb3VuZHMoKTtcbiAgICAgICAgdmFyIHJlcyA9IHRoaXMuZ2FtZS5yZXNvbHV0aW9uO1xuXG4gICAgICAgIGlmICghdGhpcy5fY2FjaGVkU3ByaXRlKSB7XG4gICAgICAgICAgICB2YXIgcmVuZGVyVGV4dHVyZSA9IG5ldyBQSVhJLlJlbmRlclRleHR1cmUoYm91bmRzLndpZHRoICogcmVzIHwgMCwgYm91bmRzLmhlaWdodCAqIHJlcyB8IDApOy8vLCByZW5kZXJTZXNzaW9uLnJlbmRlcmVyKTtcbiAgICAgICAgICAgIHJlbmRlclRleHR1cmUuYmFzZVRleHR1cmUucmVzb2x1dGlvbiA9IHJlcztcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlZFNwcml0ZSA9IG5ldyBQSVhJLlNwcml0ZShyZW5kZXJUZXh0dXJlKTtcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlZFNwcml0ZS50ZXh0dXJlLnJlc29sdXRpb24gPSByZXM7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZWRTcHJpdGUud29ybGRUcmFuc2Zvcm0gPSB0aGlzLndvcmxkVHJhbnNmb3JtO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fY2FjaGVkU3ByaXRlLnRleHR1cmUucmVzaXplKGJvdW5kcy53aWR0aCAqIHJlcyB8IDAsIGJvdW5kcy5oZWlnaHQgKiByZXMgfCAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vUkVNT1ZFIGZpbHRlciFcbiAgICAgICAgdmFyIHRlbXBGaWx0ZXJzID0gdGhpcy5fZmlsdGVycztcbiAgICAgICAgdGhpcy5fZmlsdGVycyA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5fY2FjaGVkU3ByaXRlLmZpbHRlcnMgPSB0ZW1wRmlsdGVycztcblxuICAgICAgICBQSVhJLkRpc3BsYXlPYmplY3RbJ190ZW1wTWF0cml4J10udHggPSAtYm91bmRzLng7XG4gICAgICAgIFBJWEkuRGlzcGxheU9iamVjdFsnX3RlbXBNYXRyaXgnXS50eSA9IC1ib3VuZHMueTtcblxuICAgICAgICB0aGlzLl9jYWNoZWRTcHJpdGUudGV4dHVyZS5yZW5kZXIodGhpcywgUElYSS5EaXNwbGF5T2JqZWN0WydfdGVtcE1hdHJpeCddLCB0cnVlKTtcblxuICAgICAgICB0aGlzLl9jYWNoZWRTcHJpdGUuYW5jaG9yLnggPSAtKGJvdW5kcy54IC8gYm91bmRzLndpZHRoKTtcbiAgICAgICAgdGhpcy5fY2FjaGVkU3ByaXRlLmFuY2hvci55ID0gLShib3VuZHMueSAvIGJvdW5kcy5oZWlnaHQpO1xuXG4gICAgICAgIHRoaXMuX2ZpbHRlcnMgPSB0ZW1wRmlsdGVycztcblxuICAgICAgICB0aGlzLl9jYWNoZUFzQml0bWFwID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXRIaXRBcmVhVG9Cb3VuZHMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2FsaWduVG9OZWFyZXN0UGl4ZWwoKTogdm9pZCB7XG4gICAgICAgIHRoaXMueCA9IE1hdGgucm91bmQodGhpcy54KTtcbiAgICAgICAgdGhpcy55ID0gTWF0aC5yb3VuZCh0aGlzLnkpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgY2hpbGQueCA9IE1hdGgucm91bmQoY2hpbGQueCk7XG4gICAgICAgICAgICBjaGlsZC55ID0gTWF0aC5yb3VuZChjaGlsZC55KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGhpZ2hsaWdodChoaWdobGlnaHRTdHI6IHN0cmluZywgaGlnaGxpZ2h0Q29sb3I6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5faXNJbWFnZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0JpdG1hcFRleHQ6OiBjYW5ub3QgaGlnaGxpZ2h0IGEgc3Vic3RyaW5nIG9mIGEgQml0bWFwVGV4dCBpbnN0YW5jZSB3aGVuIG1ha2VJbWFnZSBpcyBzZXQgdG8gdHJ1ZScsIHRoaXMudGV4dCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGV4dC5pbmRleE9mKGhpZ2hsaWdodFN0cikgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdGFydEluZGV4OiBudW1iZXIgPSB0aGlzLnRleHQuaW5kZXhPZihoaWdobGlnaHRTdHIpLTE7XG4gICAgICAgIGNvbnN0IGVuZEluZGV4OiBudW1iZXIgPSBzdGFydEluZGV4ICsgaGlnaGxpZ2h0U3RyLmxlbmd0aDtcbiAgICAgICAgbGV0IGNoaWxkOiBQSVhJLlNwcml0ZTtcblxuICAgICAgICBpZiAodGhpcy5fYXV0b0ZsYXR0ZW4pIHtcbiAgICAgICAgICAgIHRoaXMudW5GbGF0dGVuKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleDsgaSA8IGVuZEluZGV4OyBpKyspIHtcbiAgICAgICAgICAgIGNoaWxkID0gPFBJWEkuU3ByaXRlPnRoaXMuZ2V0Q2hpbGRBdChpKTtcbiAgICAgICAgICAgIGNoaWxkLnRpbnQgPSBoaWdobGlnaHRDb2xvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9hdXRvRmxhdHRlbikge1xuICAgICAgICAgICAgdGhpcy5mbGF0dGVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9hbGlnblRvTmVhcmVzdFBpeGVsKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYW5jaG9yQXNJbWFnZSh4OiBudW1iZXIsIHk6IG51bWJlciA9IHgpIHtcbiAgICAgICAgLy8gSWYgdGhlIGltYWdlIGlzIGNhY2hlZCwgbm8gY2hhbmdlcyB3aWxsIGJlIGFwcGxpZWQsIHNvIHdlIHRlbXBvcmFyaWx5IHVuY2FjaGVcbiAgICAgICAgY29uc3Qgd2FzQ2FjaGVkOiBib29sZWFuID0gdGhpcy5jYWNoZUFzQml0bWFwO1xuICAgICAgICB0aGlzLmNhY2hlQXNCaXRtYXAgPSBudWxsO1xuICAgICAgICB0aGlzLl9pbnRlcm5hbEltYWdlLmFuY2hvci5zZXQoeCwgeSk7XG4gICAgICAgIHRoaXMuY2FjaGVBc0JpdG1hcCA9IHdhc0NhY2hlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SGl0QXJlYVRvQm91bmRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmhpdEFyZWEgPSB0aGlzLmdldEJvdW5kcygpO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xuaW1wb3J0IHtHYW1lfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7U3ByaXRlLCBHcm91cH0gZnJvbSAnLi4vZGlzcGxheSc7XG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xuICAgIHB1YmxpYyBnYW1lOiBHYW1lO1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIG93bmVyOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lO1xuICAgICAgICB0aGlzLm5hbWUgPSAnQ29tcG9uZW50JztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0T3duZXIob3duZXI6IFNwcml0ZSB8IEdyb3VwKTogdm9pZCB7XG4gICAgICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGluaXRpYWxpemUgdGhlIGNvbXBvbmVudCwgc2V0IHVwIHZhcmlhYmxlc1xuICAgICogY2FsbGVkIGJ5IHRoZSBvd25lciBmaXJzdCBhZnRlciB0aGUgY29tcG9uZW50IGlzIGF0dGFjaGVkXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIGluaXQoKSB7IH1cblxuICAgIC8qKlxuICAgICogYWRkIHZpc3VhbCBlbGVtZW50c1xuICAgICogY2FsbGVkIGJ5IHRoZSBvd25lciBhZnRlciBpdCBjYWxscyB0aGlzIGluaXQgbWV0aG9kXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIGJ1aWxkSW50ZXJmYWNlKCkgeyB9XG5cbiAgICAvKipcbiAgICAqIGNhbGxlZCBieSB0aGUgb3duZXIgaW4gaXRzIHVwZGF0ZSBjeWNsZSwgZXZlcnkgZnJhbWVcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlKCkgeyB9XG5cbiAgICAvKipcbiAgICAqIHJlbW92ZSBhbnkgdmlzdWFsIGVsZW1lbnRzIC8gc2lnbmFscyBhZGRlZFxuICAgICogb3duZXIgY2FsbHMgdGhpcyBtZXRob2QgaW4gaXRzIG93biBkZXN0cm95IG1ldGhvZFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyBkZXN0cm95KCkgeyB9XG59IiwiaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xuaW1wb3J0IHtHYW1lLCBHYW1lT2JqZWN0RmFjdG9yeX0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQge01lZGlhdG9yfSBmcm9tICcuLi9tdmMnO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJy4vQ29tcG9uZW50JztcblxuZXhwb3J0IGNsYXNzIEdyb3VwIGV4dGVuZHMgUGhhc2VyLkdyb3VwIHtcbiAgICBwdWJsaWMgZ2FtZTogR2FtZTtcblxuICAgIHByb3RlY3RlZCBfaGFzQ29tcG9uZW50czogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCBfY29tcG9uZW50S2V5czogc3RyaW5nW10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgX2NvbXBvbmVudHM6IHsgW2NvbXBvbmVudE5hbWU6IHN0cmluZ106IENvbXBvbmVudCB9ID0ge307XG5cbiAgICBwcm90ZWN0ZWQgX21lZGlhdG9yOiBNZWRpYXRvciA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCBwdWJsaWMgbmFtZTogc3RyaW5nID0gXCJkR3JvdXBcIiwgYWRkVG9TdGFnZTogYm9vbGVhbiA9IGZhbHNlLCBjb21wb25lbnRzOiBDb21wb25lbnRbXSA9IG51bGwsIGVuYWJsZUJvZHk/OiBib29sZWFuLCBwaHlzaWNzQm9keVR5cGU/OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lLCBudWxsLCBuYW1lLCBhZGRUb1N0YWdlLCBlbmFibGVCb2R5LCBwaHlzaWNzQm9keVR5cGUpO1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24uc2V0KHgsIHkpO1xuXG4gICAgICAgIGlmICghYWRkVG9TdGFnZSlcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hZGQuZXhpc3RpbmcodGhpcyk7XG5cblxuICAgICAgICBpZiAoY29tcG9uZW50cylcbiAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50cyhjb21wb25lbnRzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZUZyb21EYXRhKGRhdGE6IGFueSk6IEdyb3VwIHtcbiAgICAgICAgbGV0IHNlbGYgPSBuZXcgR3JvdXAoZGF0YS5wb3NpdGlvbi54LCBkYXRhLnBvc2l0aW9uLnksIGRhdGEubmFtZSk7XG4gICAgICAgIGlmIChkYXRhLmFscGhhKSB7XG4gICAgICAgICAgICBzZWxmLmFscGhhID0gZGF0YS5hbHBoYTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXNzaWduUHJlZmFiKG9iamVjdDogYW55KSB7XG4gICAgICAgIC8vIE92ZXJyaWRlIHRoaXMgdG8gaGFuZGxlIGFzc2lnbm1lbnQgb2YgY2hpbGQgcHJlZmFicy5cbiAgICB9XG4gICAgXG4gICAgLy8gUGhhc2VyLkdyb3VwIG92ZXJyaWRlc1xuICAgIC8qKlxuICAgICogY2FsbGVkIGV2ZXJ5IGZyYW1lXG4gICAgKiBpdGVyYXRlcyB0aGUgY29tcG9uZW50cyBsaXN0IGFuZCBjYWxscyBjb21wb25lbnQudXBkYXRlKCkgb24gZWFjaCBjb21wb25lbnRcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAb3ZlcnJpZGVcbiAgICAqL1xuICAgIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZSgpO1xuICAgICAgICBpZiAodGhpcy5faGFzQ29tcG9uZW50cylcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogcmVtb3ZlcyBhbGwgY29tcG9uZW50c1xuICAgICogQHJldHVybiB7UGhhc2VyLkdyb3VwLmRlc3Ryb3l9XG4gICAgKiBAb3ZlcnJpZGVcbiAgICAqL1xuICAgIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlbW92ZUFsbENvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5yZW1vdmVNZWRpYXRvcigpO1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgLyoqXG4gICAgKiBpbml0aWFsaXplIHZhcmlhYmxlc1xuICAgICogYWRkIG1lZGlhdG9yLCBpZiBuZWVkZWRcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHsgfVxuXG4gICAgLyoqXG4gICAgKiBhZGQgdmlzdWFsIGVsZW1lbnRzXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHJvdGVjdGVkIGJ1aWxkSW50ZXJmYWNlKCk6IHZvaWQgeyB9XG5cbiAgICAvKipcbiAgICAqIHVwZGF0ZXMgdGhlIGludGVybmFsIGxpc3Qgb2YgY29tcG9uZW50IGtleXMgKHNvIHdlIGRvbid0IGhhdmUgdG8gY2FsbCBPYmplY3Qua2V5cygpIGFsbCB0aGUgdGltZSlcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwcml2YXRlIF91cGRhdGVDb21wb25lbnRLZXlzKCkge1xuICAgICAgICB0aGlzLl9jb21wb25lbnRLZXlzID0gT2JqZWN0LmtleXModGhpcy5fY29tcG9uZW50cyk7XG4gICAgICAgIHRoaXMuX2hhc0NvbXBvbmVudHMgPSB0aGlzLl9jb21wb25lbnRLZXlzLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICAvKipcbiAgICAqIGF0dGFjaGVzIGEgbGlzdCBvZiBjb21wb25lbnRzIHRvIHRoZSBEaWpvbi5VSUdyb3VwXG4gICAgKiBAcGFyYW0ge0FycmF5fSBjb21wb25lbnRzIHRoZSBsaXN0IG9mIGNvbXBvbmVudHMgdG8gYWRkXG4gICAgKi9cbiAgICBwdWJsaWMgYWRkQ29tcG9uZW50cyA9IGZ1bmN0aW9uIChjb21wb25lbnRzOiBDb21wb25lbnRbXSkge1xuICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMubGVuZ3RoID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRGlqb24uVUlHcm91cCBjb21wb25lbnRzIG11c3QgYmUgYW4gYXJyYXknKTtcblxuICAgICAgICB3aGlsZSAoY29tcG9uZW50cy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoY29tcG9uZW50cy5zaGlmdCgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGF0dGFjaGVzIGEgY29tcG9uZW50IHRvIHRoZSBEaWpvbi5VSUdyb3VwXG4gICAgKiBAcGFyYW0ge2Rpam9uLkNvbXBvbmVudH0gY29tcG9uZW50IHRvIGJlIGF0dGFjaGVkXG4gICAgKi9cbiAgICBwdWJsaWMgYWRkQ29tcG9uZW50KGNvbXBvbmVudDogQ29tcG9uZW50KTogQ29tcG9uZW50IHtcbiAgICAgICAgY29tcG9uZW50LnNldE93bmVyKHRoaXMpO1xuICAgICAgICBjb21wb25lbnQuaW5pdCgpO1xuICAgICAgICBjb21wb25lbnQuYnVpbGRJbnRlcmZhY2UoKTtcblxuICAgICAgICB0aGlzLl9jb21wb25lbnRzW2NvbXBvbmVudC5uYW1lXSA9IGNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ29tcG9uZW50S2V5cygpO1xuXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBpdGVyYXRlcyB0aHJvdWdoIHRoZSBsaXN0IG9mIGNvbXBvbmVudHMgYW5kIHVwZGF0ZXMgZWFjaCBvbmVcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlQ29tcG9uZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY29tcG9uZW50S2V5cy5mb3JFYWNoKFxuICAgICAgICAgICAgY29tcG9uZW50TmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnQoY29tcG9uZW50TmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiB1cGRhdGVzIGFuIGF0dGFjaGVkIGNvbXBvbmVudCAoY2FsbHMgY29tcG9uZW50LnVwZGF0ZSgpKVxuICAgICogQHBhcmFtICB7U3RyaW5nfSBjb21wb25lbnROYW1lIHRoZSBuYW1lIG9mIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIHVwZGF0ZUNvbXBvbmVudChjb21wb25lbnROYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY29tcG9uZW50c1tjb21wb25lbnROYW1lXS51cGRhdGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHJlbW92ZXMgYWxsIHRoZSBjb21wb25lbnRzIGN1cnJlbnRseSBhdHRhY2hlZFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyByZW1vdmVBbGxDb21wb25lbnRzKCkge1xuICAgICAgICB3aGlsZSAodGhpcy5fY29tcG9uZW50S2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNvbXBvbmVudCh0aGlzLl9jb21wb25lbnRLZXlzLnBvcCgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICogcmVtb3ZlcyBhIHNwZWNpZmljIGNvbXBvbmVudFxuICAgICogQHBhcmFtICB7U3RyaW5nfSBjb21wb25lbnROYW1lIHRoZSBuYW1lIG9mIHRoZSBjb21wb25lbnQgdG8gcmVtb3ZlXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIHJlbW92ZUNvbXBvbmVudChjb21wb25lbnROYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB0aGlzLl9jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5fY29tcG9uZW50c1tjb21wb25lbnROYW1lXSA9IG51bGw7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdO1xuXG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvbXBvbmVudEtleXMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmxhdHRlbihkZWxheTogbnVtYmVyID0gMCk6IHZvaWQge1xuICAgICAgICBpZiAoZGVsYXkgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGVBc0JpdG1hcCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKGRlbGF5LCAoKSA9PiB7IHRoaXMuY2FjaGVBc0JpdG1hcCA9IHRydWUgfSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdW5GbGF0dGVuKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNhY2hlQXNCaXRtYXAgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogcmVtb3ZlcyB0aGUgbWVkaWF0b3IsIGlmIGl0IGV4aXN0c1xuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyByZW1vdmVNZWRpYXRvcigpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9tZWRpYXRvcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21lZGlhdG9yLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5fbWVkaWF0b3IgPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYWRkSW50ZXJuYWwoKTogR2FtZU9iamVjdEZhY3Rvcnkge1xuICAgICAgICB0aGlzLmdhbWUuYWRkLnRhcmdldEdyb3VwID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZS5hZGQ7XG4gICAgfVxufSIsImltcG9ydCB7QXBwbGljYXRpb259IGZyb20gJy4uL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7R2FtZX0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnLi9Db21wb25lbnQnO1xuXG5leHBvcnQgY2xhc3MgU3ByaXRlIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XG4gICAgcHVibGljIGdhbWU6IEdhbWU7XG5cbiAgICBwcm90ZWN0ZWQgX2hhc0NvbXBvbmVudHM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcm90ZWN0ZWQgX2NvbXBvbmVudEtleXM6IHN0cmluZ1tdID0gW107XG4gICAgcHJvdGVjdGVkIF9jb21wb25lbnRzOiB7IFtjb21wb25lbnROYW1lOiBzdHJpbmddOiBDb21wb25lbnQgfSA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoeD86IG51bWJlciwgeT86IG51bWJlciwga2V5Pzogc3RyaW5nIHwgUGhhc2VyLlJlbmRlclRleHR1cmUgfCBQaGFzZXIuQml0bWFwRGF0YSB8IFBJWEkuVGV4dHVyZSwgZnJhbWU/OiBzdHJpbmcgfCBudW1iZXIsIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSBcImRTcHJpdGVcIiwgY29tcG9uZW50czogQ29tcG9uZW50W10gPSBudWxsKSB7XG4gICAgICAgIHN1cGVyKEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZSwgeCwgeSwga2V5LCBmcmFtZSk7XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudHMpXG4gICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudHMoY29tcG9uZW50cyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBDcmVhdGVGcm9tRGF0YShkYXRhOiBhbnkpOiBTcHJpdGUge1xuICAgICAgICBsZXQgc2VsZiA9IG5ldyBTcHJpdGUoZGF0YS5wb3NpdGlvbi54LCBkYXRhLnBvc2l0aW9uLnksIGRhdGEua2V5LCBkYXRhLmZyYW1lLCBkYXRhLm5hbWUpO1xuICAgICAgICBpZiAoZGF0YS5hbmNob3IpIHtcbiAgICAgICAgICAgIHNlbGYuYW5jaG9yLnNldFRvKGRhdGEuYW5jaG9yLngsIGRhdGEuYW5jaG9yLnkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLnNjYWxlKSB7XG4gICAgICAgICAgICBzZWxmLnNjYWxlLnNldFRvKGRhdGEuc2NhbGUueCwgZGF0YS5zY2FsZS55KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5hbmdsZSkge1xuICAgICAgICAgICAgc2VsZi5hbmdsZSA9IGRhdGEuYW5nbGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEudGludCkge1xuICAgICAgICAgICAgc2VsZi50aW50ID0gZGF0YS50aW50O1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmFscGhhKSB7XG4gICAgICAgICAgICBzZWxmLmFscGhhID0gZGF0YS5hbHBoYTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXNzaWduUHJlZmFiKG9iamVjdDogYW55KSB7XG4gICAgICAgIC8vIE92ZXJyaWRlIHRoaXMgdG8gaGFuZGxlIGFzc2lnbm1lbnQgb2YgY2hpbGQgcHJlZmFicy5cbiAgICB9XG4gICAgXG4gICAgLy8gUGhhc2VyLlNwcml0ZSBvdmVycmlkZXNcbiAgICAvKipcbiAgICAqIGNhbGxlZCBldmVyeSBmcmFtZVxuICAgICogaXRlcmF0ZXMgdGhlIGNvbXBvbmVudHMgbGlzdCBhbmQgY2FsbHMgY29tcG9uZW50LnVwZGF0ZSgpIG9uIGVhY2ggY29tcG9uZW50XG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICogQG92ZXJyaWRlXG4gICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5faGFzQ29tcG9uZW50cylcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogcmVtb3ZlcyBhbGwgY29tcG9uZW50c1xuICAgICogQHJldHVybiB7UGhhc2VyLkdyb3VwLmRlc3Ryb3l9XG4gICAgKiBAb3ZlcnJpZGVcbiAgICAqL1xuICAgIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlbW92ZUFsbENvbXBvbmVudHMoKTtcbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuICAgIC8qKlxuICAgICogaW5pdGlhbGl6ZSB2YXJpYWJsZXNcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHsgfVxuXG4gICAgLyoqXG4gICAgKiBhZGQgdmlzdWFsIGVsZW1lbnRzXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHJvdGVjdGVkIGJ1aWxkSW50ZXJmYWNlKCk6IHZvaWQgeyB9XG5cbiAgICAvKipcbiAgICAqIHVwZGF0ZXMgdGhlIGludGVybmFsIGxpc3Qgb2YgY29tcG9uZW50IGtleXMgKHNvIHdlIGRvbid0IGhhdmUgdG8gY2FsbCBPYmplY3Qua2V5cygpIGFsbCB0aGUgdGltZSlcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwcml2YXRlIF91cGRhdGVDb21wb25lbnRLZXlzKCkge1xuICAgICAgICB0aGlzLl9jb21wb25lbnRLZXlzID0gT2JqZWN0LmtleXModGhpcy5fY29tcG9uZW50cyk7XG4gICAgICAgIHRoaXMuX2hhc0NvbXBvbmVudHMgPSB0aGlzLl9jb21wb25lbnRLZXlzLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICAvKipcbiAgICAqIGF0dGFjaGVzIGEgbGlzdCBvZiBjb21wb25lbnRzIHRvIHRoZSBEaWpvbi5VSUdyb3VwXG4gICAgKiBAcGFyYW0ge0FycmF5fSBjb21wb25lbnRzIHRoZSBsaXN0IG9mIGNvbXBvbmVudHMgdG8gYWRkXG4gICAgKi9cbiAgICBwdWJsaWMgYWRkQ29tcG9uZW50cyA9IGZ1bmN0aW9uIChjb21wb25lbnRzOiBDb21wb25lbnRbXSkge1xuICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMubGVuZ3RoID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRGlqb24uVUlHcm91cCBjb21wb25lbnRzIG11c3QgYmUgYW4gYXJyYXknKTtcblxuICAgICAgICB3aGlsZSAoY29tcG9uZW50cy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoY29tcG9uZW50cy5zaGlmdCgpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgKiBhdHRhY2hlcyBhIGNvbXBvbmVudCB0byB0aGUgRGlqb24uVUlHcm91cFxuICAgICogQHBhcmFtIHtkaWpvbi5Db21wb25lbnR9IGNvbXBvbmVudCB0byBiZSBhdHRhY2hlZFxuICAgICovXG4gICAgcHVibGljIGFkZENvbXBvbmVudChjb21wb25lbnQ6IENvbXBvbmVudCk6IENvbXBvbmVudCB7XG4gICAgICAgIGNvbXBvbmVudC5zZXRPd25lcih0aGlzKTtcbiAgICAgICAgY29tcG9uZW50LmluaXQoKTtcbiAgICAgICAgY29tcG9uZW50LmJ1aWxkSW50ZXJmYWNlKCk7XG5cbiAgICAgICAgdGhpcy5fY29tcG9uZW50c1tjb21wb25lbnQubmFtZV0gPSBjb21wb25lbnQ7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvbXBvbmVudEtleXMoKTtcblxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAqIGl0ZXJhdGVzIHRocm91Z2ggdGhlIGxpc3Qgb2YgY29tcG9uZW50cyBhbmQgdXBkYXRlcyBlYWNoIG9uZVxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyB1cGRhdGVDb21wb25lbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9jb21wb25lbnRLZXlzLmZvckVhY2goXG4gICAgICAgICAgICBjb21wb25lbnROYW1lID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnROYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHVwZGF0ZXMgYW4gYXR0YWNoZWQgY29tcG9uZW50IChjYWxscyBjb21wb25lbnQudXBkYXRlKCkpXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGNvbXBvbmVudE5hbWUgdGhlIG5hbWUgb2YgdGhlIGNvbXBvbmVudCB0byB1cGRhdGVcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudE5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLl9jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogcmVtb3ZlcyBhbGwgdGhlIGNvbXBvbmVudHMgY3VycmVudGx5IGF0dGFjaGVkXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIHJlbW92ZUFsbENvbXBvbmVudHMoKSB7XG4gICAgICAgIHdoaWxlICh0aGlzLl9jb21wb25lbnRLZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ29tcG9uZW50KHRoaXMuX2NvbXBvbmVudEtleXMucG9wKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiByZW1vdmVzIGEgc3BlY2lmaWMgY29tcG9uZW50XG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGNvbXBvbmVudE5hbWUgdGhlIG5hbWUgb2YgdGhlIGNvbXBvbmVudCB0byByZW1vdmVcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgcmVtb3ZlQ29tcG9uZW50KGNvbXBvbmVudE5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbXBvbmVudHNbY29tcG9uZW50TmFtZV0gPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHNbY29tcG9uZW50TmFtZV0uZGVzdHJveSgpO1xuICAgICAgICB0aGlzLl9jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdID0gbnVsbDtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2NvbXBvbmVudHNbY29tcG9uZW50TmFtZV07XG5cbiAgICAgICAgdGhpcy5fdXBkYXRlQ29tcG9uZW50S2V5cygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBmbGF0dGVuKGRlbGF5OiBudW1iZXIgPSAwKTogdm9pZCB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jYWNoZUFzQml0bWFwID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoZGVsYXksICgpID0+IHsgdGhpcy5jYWNoZUFzQml0bWFwID0gdHJ1ZSB9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB1bkZsYXR0ZW4oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2FjaGVBc0JpdG1hcCA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCByZXNvbHV0aW9uKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHR1cmUuYmFzZVRleHR1cmUucmVzb2x1dGlvbjtcbiAgICB9XG59IiwiaW1wb3J0IHtTcHJpdGV9IGZyb20gJy4vU3ByaXRlJztcblxuZXhwb3J0IGNsYXNzIEludmlzaWJsZUJ1dHRvbiBleHRlbmRzIFNwcml0ZSB7XG4gICAgcHJpdmF0ZSBfaGl0V2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIF9oaXRIZWlnaHQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIHc6IG51bWJlciwgaDogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKHgsIHksIG51bGwsIG51bGwsIG5hbWUpO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdGhpcy5idWlsZEludGVyZmFjZSgpO1xuICAgICAgICB0aGlzLnNldFNpemUodywgaCk7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRFbmFibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYnVpbGRJbnRlcmZhY2UoKSB7XG4gICAgICAgIHRoaXMuX2FkZEhpdFJlY3QoKTtcbiAgICB9XG5cbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICBwcml2YXRlIF9hZGRIaXRSZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5faGl0V2lkdGggPiAwICYmIHRoaXMuX2hpdEhlaWdodCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuaGl0QXJlYSA9IG5ldyBQaGFzZXIuUmVjdGFuZ2xlKDAsIDAsIHRoaXMuX2hpdFdpZHRoLCB0aGlzLl9oaXRIZWlnaHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICBwdWJsaWMgc2V0U2l6ZSh3LCBoKSB7XG4gICAgICAgIHRoaXMuX2hpdFdpZHRoID0gdyB8fCAwO1xuICAgICAgICB0aGlzLl9oaXRIZWlnaHQgPSBoIHx8IDA7XG5cbiAgICAgICAgdGhpcy5fYWRkSGl0UmVjdCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFRleHQgfSBmcm9tICcuLi9kaXNwbGF5JztcbmltcG9ydCB7QXBwbGljYXRpb259IGZyb20gJy4uL2FwcGxpY2F0aW9uJztcblxuZXhwb3J0IGNsYXNzIExhYmVsbGVkQnV0dG9uIGV4dGVuZHMgUGhhc2VyLkJ1dHRvbiB7XG4gICAgXG4gICAgcHJvdGVjdGVkIF9sYWJlbDogVGV4dDtcbiAgICBwcm90ZWN0ZWQgX2xhYmVsVGludDogeyB1cDogbnVtYmVyLCBkb3duOiBudW1iZXIsIG92ZXI6IG51bWJlciwgb3V0OiBudW1iZXIgfTtcblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFggUG9zaXRpb24gdG8gcGxhY2UgYnV0dG9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgWSBQb3NpdGlvbiB0byBwbGFjZSBidXR0b25cbiAgICAgKiBAcGFyYW0ge2Z1bmN9IGNhbGxiYWNrIEZ1bmN0aW9uIHRvIGNhbGwgb24gYnV0dG9uIHByZXNzXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgQ29udGV4dCB0byBjYWxsIHNwZWNpZmllZCBmdW5jdGlvbiBvblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgU3ByaXRlIHNoZWV0IHRoYXQgZnJhbWVzIGJlbG9uZyB0byAoaWYgYXBwbGljYWJsZSlcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3V0RnJhbWUgU3RhbmRhcmQgZnJhbWUgZm9yIHRoaXMgYnV0dG9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRvd25GcmFtZSAoT3B0aW9uYWwpRnJhbWUgdG8gZGlzcGxheSB3aGVuIGJ1dHRvbiBwcmVzc2VkIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvdmVyRnJhbWUgKE9wdGlvbmFsKUZyYW1lIHRvIGRpc3BsYXkgd2hlbiBob3ZlcmluZyBvdmVyIGJ1dHRvblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cEZyYW1lIChPcHRpb25hbClGcmFtZSB0byBkaXNwbGF5IHdoZW4gYnV0dG9uIGlzIHJlbGVhc2VkXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIGNhbGxiYWNrOiBhbnksIGNvbnRleHQ6IGFueSwga2V5OiBzdHJpbmcsIG91dEZyYW1lOiBzdHJpbmcsIGRvd25GcmFtZTogc3RyaW5nID0gbnVsbCwgb3ZlckZyYW1lOiBzdHJpbmcgPSBudWxsLCB1cEZyYW1lOiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIHN1cGVyKEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZSwgeCwgeSwga2V5LCBjYWxsYmFjaywgY29udGV4dCwgb3ZlckZyYW1lLCBvdXRGcmFtZSwgZG93bkZyYW1lLCB1cEZyYW1lKTtcbiAgICAgICAgdGhpcy5fbGFiZWwgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIHRoZSB0ZXh0IHlvdSB0cnkgdG8gY3JlYXRlIG9uIHRoZSBidXR0b24gaXMgbGFyZ2VyIHRoYW4gdGhlIGJ1dHRvbiBzcHJpdGUgaXRzZWxmIGl0IHdpbGwgYmUgc2NhbGVkIGRvd24gdG8gbWF0Y2guXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgVGV4dCB0byBkaXNwbGF5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGZvbnRTaXplIEZvbnQgc2l6ZS4gSWYgMC0xIGlzIHBhc3NlZCwgd2lsbCBiZSB1c2VkIGFzIGEgcGVyY2VudGFnZSBvZiBidXR0b24gaGVpZ2h0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZvbnROYW1lIFRoZSBuYW1lIG9mIHRoZSBmb250IGZhbWlseVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvdXRUaW50IFN0YW5kYXJkIGNvbG9yIHRvIGRpc3BsYXkgKERlZmF1bHQ6IFdoaXRlKVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkb3duVGludCAoT3B0aW9uYWwpQ29sb3IgdG8gdGludCBmb250IHdoZW4gYnV0dG9uIGlzIHByZXNzZWQgZG93blxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvdmVyVGludCAoT3B0aW9uYWwpQ29sb3IgdG8gdGludCBmb250IHdoZW4gYnV0dG9uIGlzIGhvdmVyZWQgb3ZlclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB1cFRpbnQgKE9wdGlvbmFsKUNvbG9yIHRvIHRpbnQgZm9udCB3aGVuIGJ1dHRvbiBpcyByZWxlYXNlZFxuICAgICAqL1xuICAgIHB1YmxpYyBhZGRMYWJlbCh0ZXh0OiBzdHJpbmcsIGZvbnRTaXplOiBudW1iZXIsIGZvbnROYW1lOiBzdHJpbmcsIG91dFRpbnQ6IG51bWJlciA9IDB4ZmZmZmZmLCBkb3duVGludD86IG51bWJlciwgb3ZlclRpbnQ/OiBudW1iZXIsIHVwVGludD86IG51bWJlciwgbGFiZWxPZmZzZXQ/OiBQaGFzZXIuUG9pbnQpIHtcbiAgICAgICAgaWYgKGZvbnRTaXplIDwgMSkge1xuICAgICAgICAgICAgZm9udFNpemUgPSBmb250U2l6ZSAqIHRoaXMucmVhbEhlaWdodCAqIDAuNTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdGV4dFBvaW50ID0gbmV3IFBoYXNlci5Qb2ludCh0aGlzLnJlYWxXaWR0aCAqIDAuNSwgdGhpcy5yZWFsSGVpZ2h0ICogMC41KTtcbiAgICAgICAgaWYgKGxhYmVsT2Zmc2V0KSB7XG4gICAgICAgICAgICB0ZXh0UG9pbnQgPSBQaGFzZXIuUG9pbnQuYWRkKHRleHRQb2ludCwgbGFiZWxPZmZzZXQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2xhYmVsID0gbmV3IFRleHQodGV4dFBvaW50LngsIHRleHRQb2ludC55LCB0ZXh0LCBmb250TmFtZSwgZm9udFNpemUsIFwiI2ZmZmZmZlwiKTtcbiAgICAgICAgdGhpcy5fbGFiZWwudGludCA9IG91dFRpbnQ7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5fbGFiZWwpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fbGFiZWxUaW50ID0gPHsgdXA6IG51bWJlciwgZG93bjogbnVtYmVyLCBvdmVyOiBudW1iZXIsIG91dDogbnVtYmVyIH0+bmV3IE9iamVjdCgpO1xuICAgICAgICB0aGlzLnNldExhYmVsVGludHMob3V0VGludCwgZG93blRpbnQsIG92ZXJUaW50LCB1cFRpbnQpO1xuICAgICAgICB0aGlzLl9maXRMYWJlbFRvQnV0dG9uKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBkaWZmZXJlbnQgdGludCBjb2xvcnMgZm9yIHRoZSBsYWJlbCB0byBtYXRjaCB0aGUgcG9zc2libGUgYnV0dG9uIHN0YXRlcy5cbiAgICAgKiBBbnkgb3B0aW9uYWwgdGludHMgdGhhdCBhcmUgbm90IHByb3ZpZGVkIG9yIGFyZSBwcm92aWRlZCBhcyBudWxsIHdpbGwgaW5zdGVhZFxuICAgICAqIHVzZSB0aGUgT3V0VGludCBzZXR0aW5nLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvdXRUaW50IFN0YW5kYXJkIGNvbG9yIHRvIGRpc3BsYXkgKERlZmF1bHQ6IFdoaXRlKVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkb3duVGludCAoT3B0aW9uYWwpQ29sb3IgdG8gdGludCBmb250IHdoZW4gYnV0dG9uIGlzIHByZXNzZWQgZG93blxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvdmVyVGludCAoT3B0aW9uYWwpQ29sb3IgdG8gdGludCBmb250IHdoZW4gYnV0dG9uIGlzIGhvdmVyZWQgb3ZlclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB1cFRpbnQgKE9wdGlvbmFsKUNvbG9yIHRvIHRpbnQgZm9udCB3aGVuIGJ1dHRvbiBpcyByZWxlYXNlZFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRMYWJlbFRpbnRzKG91dFRpbnQ6IG51bWJlciwgZG93blRpbnQ/OiBudW1iZXIsIG92ZXJUaW50PzogbnVtYmVyLCB1cFRpbnQ/OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fbGFiZWxUaW50Lm91dCA9IG91dFRpbnQ7XG4gICAgICAgIHRoaXMuX2xhYmVsVGludC5kb3duID0gKGRvd25UaW50ID09PSB1bmRlZmluZWQgfHwgZG93blRpbnQgPT09IG51bGwpID8gb3V0VGludCA6IGRvd25UaW50O1xuICAgICAgICB0aGlzLl9sYWJlbFRpbnQub3ZlciA9IChvdmVyVGludCA9PT0gdW5kZWZpbmVkIHx8IG92ZXJUaW50ID09PSBudWxsKSA/IG91dFRpbnQgOiBvdmVyVGludDtcbiAgICAgICAgdGhpcy5fbGFiZWxUaW50LnVwID0gKHVwVGludCA9PT0gdW5kZWZpbmVkIHx8IHVwVGludCA9PT0gbnVsbCkgPyBvdXRUaW50IDogdXBUaW50O1xuICAgIH0gICBcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgdGV4dCB0aGF0IGlzIGRpc3BsYXllZCBvbiB0aGUgYnV0dG9uLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdMYWJlbCBUaGUgbmV3IHRleHQgdG8gZGlzcGxheSBvbiB0aGUgbGFiZWwuIFxuICAgICAqL1xuICAgIHB1YmxpYyBjaGFuZ2VMYWJlbChuZXdMYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9sYWJlbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fbGFiZWwudGV4dCA9IG5ld0xhYmVsO1xuICAgICAgICAgICAgdGhpcy5fZml0TGFiZWxUb0J1dHRvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSBhY3R1YWwgVGV4dCBEaXNwbGF5IE9iamVjdCBhc3NpZ25lZCB0byB0aGlzIGJ1dHRvbiAod2lsbCBkZXN0cm95IGFueSBleGlzdGluZyBUZXh0IG9iamVjdCkuXG4gICAgICogQHBhcmFtIHtUZXh0fSBuZXdUZXh0IFRoZSBuZXcgVGV4dCBvYmplY3QgdG8gYXNzaWduIHRvIHRoaXMgbGFiZWwuIFxuICAgICAqLyAgICBcbiAgICBwdWJsaWMgYXNzaWduVGV4dChuZXdUZXh0OiBUZXh0KTogdm9pZCB7XG4gICAgICAgIGlmIChuZXdUZXh0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbGFiZWwgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9sYWJlbC5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX2xhYmVsID0gbmV3VGV4dDtcbiAgICAgICAgICAgIHRoaXMuX2ZpdExhYmVsVG9CdXR0b24oKTtcbiAgICAgICAgfVxuICAgIH0gICBcbiAgICBcbiAgICAvKiBJTkhFUklUVEVEIElOUFVUIEhBTkRMRVJTIEZST00gUEhBU0VSLkJVVFRPTiAqL1xuICAgIFxuICAgIHB1YmxpYyBvbklucHV0RG93bkhhbmRsZXIoc3ByaXRlOiBhbnksIHBvaW50ZXI6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pbnB1dC5lbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyLm9uSW5wdXREb3duSGFuZGxlcihzcHJpdGUsIHBvaW50ZXIpO1xuICAgICAgICB0aGlzLl90aW50TGFiZWwodGhpcy5fbGFiZWxUaW50LmRvd24pO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgb25JbnB1dE92ZXJIYW5kbGVyKHNwcml0ZTogYW55LCBwb2ludGVyOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQuZW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci5vbklucHV0T3ZlckhhbmRsZXIoc3ByaXRlLCBwb2ludGVyKTtcbiAgICAgICAgdGhpcy5fdGludExhYmVsKHRoaXMuX2xhYmVsVGludC5vdmVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25JbnB1dE91dEhhbmRsZXIoc3ByaXRlOiBhbnksIHBvaW50ZXI6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pbnB1dC5lbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyLm9uSW5wdXRPdXRIYW5kbGVyKHNwcml0ZSwgcG9pbnRlcik7XG4gICAgICAgIHRoaXMuX3RpbnRMYWJlbCh0aGlzLl9sYWJlbFRpbnQub3V0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25JbnB1dFVwSGFuZGxlcihzcHJpdGU6IGFueSwgcG9pbnRlcjogYW55LCBpc092ZXI6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQuZW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci5vbklucHV0VXBIYW5kbGVyKHNwcml0ZSwgcG9pbnRlciwgaXNPdmVyKTtcbiAgICAgICAgdGhpcy5fdGludExhYmVsKHRoaXMuX2xhYmVsVGludC51cCk7XG4gICAgfSAgIFxuICAgIFxuICAgIC8qIFBSSVZBVEUvUFJPVEVDVEVEIEZVTkNTICovXG4gICAgXG4gICAgcHJvdGVjdGVkIF90aW50TGFiZWwobmV3VGludDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9sYWJlbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fbGFiZWwudGludCA9IG5ld1RpbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2ZpdExhYmVsVG9CdXR0b24oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2xhYmVsLmNlbnRlclBpdm90KCk7XG4gICAgICAgIGlmICh0aGlzLl9sYWJlbC5yZWFsV2lkdGggPiB0aGlzLnJlYWxXaWR0aCB8fCB0aGlzLl9sYWJlbC5yZWFsSGVpZ2h0ID4gdGhpcy5yZWFsSGVpZ2h0KSB7XG4gICAgICAgICAgICBsZXQgd1JhdGlvID0gdGhpcy5yZWFsV2lkdGggLyB0aGlzLl9sYWJlbC5yZWFsV2lkdGg7XG4gICAgICAgICAgICBsZXQgaFJhdGlvID0gdGhpcy5yZWFsSGVpZ2h0IC8gdGhpcy5fbGFiZWwucmVhbEhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuX2xhYmVsLnNjYWxlLnNldFRvKHdSYXRpbyA8IGhSYXRpbyA/IHdSYXRpbyAqIDAuOSA6IGhSYXRpbyAqIDAuOSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHtHcm91cH0gZnJvbSAnLi9Hcm91cCc7XG5cbmV4cG9ydCBjbGFzcyBOaW5lU2xpY2VJbWFnZSBleHRlbmRzIEdyb3VwIHtcbiAgICBwcml2YXRlIF9fd2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIF9faGVpZ2h0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfc2l6ZTogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBfZGlzcGxheUxheWVyOiBQaGFzZXIuR3JvdXA7XG4gICAgcHJpdmF0ZSBfaW5wdXRMYXllcjogUGhhc2VyLkdyb3VwO1xuXG4gICAgcHVibGljIHRsOiBQaGFzZXIuSW1hZ2U7XG4gICAgcHVibGljIHQ6IFBoYXNlci5UaWxlU3ByaXRlO1xuICAgIHB1YmxpYyB0cjogUGhhc2VyLkltYWdlO1xuICAgIHB1YmxpYyByOiBQaGFzZXIuVGlsZVNwcml0ZTtcbiAgICBwdWJsaWMgYnI6IFBoYXNlci5JbWFnZTtcbiAgICBwdWJsaWMgYjogUGhhc2VyLlRpbGVTcHJpdGU7XG4gICAgcHVibGljIGJsOiBQaGFzZXIuSW1hZ2U7XG4gICAgcHVibGljIGw6IFBoYXNlci5UaWxlU3ByaXRlO1xuICAgIHB1YmxpYyB0aWxlOiBQaGFzZXIuVGlsZVNwcml0ZTtcblxuICAgIHByaXZhdGUgX2ludGVyYWN0aXZlQmFja2luZzogUGhhc2VyLkltYWdlID0gbnVsbDtcbiAgICBwcml2YXRlIF9pbnB1dEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgX2N1cnJlbnRCb3VuZHM6IFBJWEkuUmVjdGFuZ2xlID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcHVibGljIGtleTogc3RyaW5nLCBwdWJsaWMgdGV4dHVyZVBhdGg6IHN0cmluZywgcHVibGljIGZpbGxNaWRkbGU6IGJvb2xlYW4gPSB0cnVlLCBwdWJsaWMgdG9wSGVpZ2h0PzogbnVtYmVyLCBwdWJsaWMgcmlnaHRXaWR0aD86IG51bWJlciwgcHVibGljIGJvdHRvbUhlaWdodD86IG51bWJlciwgcHVibGljIGxlZnRXaWR0aD86IG51bWJlcikge1xuICAgICAgICBzdXBlcih4LCB5KTtcblxuICAgICAgICB0aGlzLl9fd2lkdGggPSBNYXRoLnJvdW5kKHdpZHRoKTtcbiAgICAgICAgdGhpcy5fX2hlaWdodCA9IE1hdGgucm91bmQoaGVpZ2h0KTtcblxuICAgICAgICB0aGlzLl9idWlsZCgpO1xuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKDEwLCB0aGlzLmRGbGF0dGVuLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9idWlsZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faW5wdXRMYXllciA9IHRoaXMuYWRkKHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKSk7XG4gICAgICAgIHRoaXMuX2Rpc3BsYXlMYXllciA9IHRoaXMuYWRkKHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKSk7XG5cbiAgICAgICAgdGhpcy50bCA9IDxQaGFzZXIuSW1hZ2U+dGhpcy5fZGlzcGxheUxheWVyLmFkZCh0aGlzLmdhbWUuYWRkLmltYWdlKDAsIDAsIHRoaXMua2V5LCB0aGlzLnRleHR1cmVQYXRoICsgJy90bCcpKTtcblxuICAgICAgICB0aGlzLnRyID0gPFBoYXNlci5JbWFnZT50aGlzLl9kaXNwbGF5TGF5ZXIuYWRkKHRoaXMuZ2FtZS5hZGQuaW1hZ2UodGhpcy5fX3dpZHRoLCAwLCB0aGlzLmtleSwgdGhpcy50ZXh0dXJlUGF0aCArICcvdHInKSk7XG5cbiAgICAgICAgdGhpcy50ID0gPFBoYXNlci5UaWxlU3ByaXRlPnRoaXMuX2Rpc3BsYXlMYXllci5hZGQodGhpcy5nYW1lLmFkZC50aWxlU3ByaXRlKE1hdGguZmxvb3IodGhpcy50bC5nZXRCb3VuZHMoKS53aWR0aCksIDAsIE1hdGguY2VpbCh0aGlzLl9fd2lkdGggLSB0aGlzLnRsLmdldEJvdW5kcygpLndpZHRoIC0gdGhpcy50ci5nZXRCb3VuZHMoKS53aWR0aCksIHRoaXMudG9wSGVpZ2h0IHx8IHRoaXMudGwuZ2V0Qm91bmRzKCkuaGVpZ2h0LCB0aGlzLmtleSwgdGhpcy50ZXh0dXJlUGF0aCArICcvdCcpKTtcblxuICAgICAgICB0aGlzLmwgPSA8UGhhc2VyLlRpbGVTcHJpdGU+dGhpcy5fZGlzcGxheUxheWVyLmFkZCh0aGlzLmdhbWUuYWRkLnRpbGVTcHJpdGUoMCwgTWF0aC5mbG9vcih0aGlzLnRsLmdldEJvdW5kcygpLmhlaWdodCksIE1hdGguY2VpbCh0aGlzLmxlZnRXaWR0aCB8fCB0aGlzLnRsLmdldEJvdW5kcygpLndpZHRoKSwgMTAwLCB0aGlzLmtleSwgdGhpcy50ZXh0dXJlUGF0aCArICcvbCcpKTtcblxuICAgICAgICB0aGlzLmJsID0gPFBoYXNlci5JbWFnZT50aGlzLl9kaXNwbGF5TGF5ZXIuYWRkKHRoaXMuZ2FtZS5hZGQuaW1hZ2UoMCwgdGhpcy5fX2hlaWdodCwgdGhpcy5rZXksIHRoaXMudGV4dHVyZVBhdGggKyAnL2JsJykpO1xuXG4gICAgICAgIHRoaXMubC5oZWlnaHQgPSBNYXRoLmNlaWwodGhpcy5fX2hlaWdodCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkuaGVpZ2h0IC0gdGhpcy5ibC5nZXRCb3VuZHMoKS5oZWlnaHQpO1xuXG4gICAgICAgIHRoaXMuYiA9IDxQaGFzZXIuVGlsZVNwcml0ZT50aGlzLl9kaXNwbGF5TGF5ZXIuYWRkKHRoaXMuZ2FtZS5hZGQudGlsZVNwcml0ZShNYXRoLmZsb29yKHRoaXMuYmwuZ2V0Qm91bmRzKCkud2lkdGgpLCB0aGlzLl9faGVpZ2h0LCAxMDAsIHRoaXMuYm90dG9tSGVpZ2h0IHx8IHRoaXMuYmwuZ2V0Qm91bmRzKCkuaGVpZ2h0LCB0aGlzLmtleSwgdGhpcy50ZXh0dXJlUGF0aCArICcvYicpKTtcblxuICAgICAgICB0aGlzLmJyID0gPFBoYXNlci5JbWFnZT50aGlzLl9kaXNwbGF5TGF5ZXIuYWRkKHRoaXMuZ2FtZS5hZGQuaW1hZ2UodGhpcy5fX3dpZHRoLCB0aGlzLl9faGVpZ2h0LCB0aGlzLmtleSwgdGhpcy50ZXh0dXJlUGF0aCArICcvYnInKSk7XG5cbiAgICAgICAgdGhpcy5iLndpZHRoID0gTWF0aC5jZWlsKHRoaXMuX193aWR0aCAtIHRoaXMuYmwuZ2V0Qm91bmRzKCkud2lkdGggLSB0aGlzLmJyLmdldEJvdW5kcygpLndpZHRoKTtcbiAgICAgICAgdGhpcy5yID0gPFBoYXNlci5UaWxlU3ByaXRlPnRoaXMuX2Rpc3BsYXlMYXllci5hZGQodGhpcy5nYW1lLmFkZC50aWxlU3ByaXRlKHRoaXMuX193aWR0aCwgTWF0aC5mbG9vcih0aGlzLnRyLmdldEJvdW5kcygpLmhlaWdodCksIE1hdGguY2VpbCh0aGlzLnJpZ2h0V2lkdGggfHwgdGhpcy50ci5nZXRCb3VuZHMoKS53aWR0aCksIE1hdGguY2VpbCh0aGlzLl9faGVpZ2h0IC0gdGhpcy50bC5nZXRCb3VuZHMoKS5oZWlnaHQgLSB0aGlzLmJyLmdldEJvdW5kcygpLmhlaWdodCksIHRoaXMua2V5LCB0aGlzLnRleHR1cmVQYXRoICsgJy9yJykpO1xuXG4gICAgICAgIHRoaXMudHIuc2V0UGl2b3QoJ3RyJyk7XG4gICAgICAgIHRoaXMuci5zZXRQaXZvdCgndHInKTtcblxuICAgICAgICB0aGlzLmJyLnNldFBpdm90KCdicicpO1xuICAgICAgICB0aGlzLmIuc2V0UGl2b3QoJ2JsJyk7XG4gICAgICAgIHRoaXMuYmwuc2V0UGl2b3QoJ2JsJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuZmlsbE1pZGRsZSkge1xuICAgICAgICAgICAgdGhpcy50aWxlID0gPFBoYXNlci5UaWxlU3ByaXRlPnRoaXMuX2Rpc3BsYXlMYXllci5hZGQodGhpcy5nYW1lLmFkZC50aWxlU3ByaXRlKHRoaXMudGwuZ2V0Qm91bmRzKCkud2lkdGggLSAxLCB0aGlzLnRsLmdldEJvdW5kcygpLmhlaWdodCAtIDEsIHRoaXMuX193aWR0aCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkud2lkdGggLSB0aGlzLnRyLmdldEJvdW5kcygpLndpZHRoICsgMiwgdGhpcy5fX2hlaWdodCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkuaGVpZ2h0IC0gdGhpcy5ici5nZXRCb3VuZHMoKS5oZWlnaHQgKyA0LCB0aGlzLmtleSwgdGhpcy50ZXh0dXJlUGF0aCArICcvdGlsZScpKTtcbiAgICAgICAgICAgIHRoaXMuc2VuZFRvQmFjayh0aGlzLnRpbGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYWRkSW50ZXJhY3RpdmVCYWNraW5nKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBnZnggPSB0aGlzLmdhbWUuYWRkLmdyYXBoaWNzKCk7XG4gICAgICAgIGdmeC5iZWdpbkZpbGwoMHhGRjAwMDAsIDApO1xuICAgICAgICBnZnguZHJhd1JlY3QodGhpcy54LCB0aGlzLnksIHRoaXMuX193aWR0aCwgdGhpcy5fX2hlaWdodCk7XG4gICAgICAgIGdmeC5lbmRGaWxsKCk7XG5cbiAgICAgICAgdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nID0gdGhpcy5faW5wdXRMYXllci5hZGQodGhpcy5nYW1lLmFkZC5pbWFnZSgwLCAwLCBnZnguZ2VuZXJhdGVUZXh0dXJlKCkpKTtcblxuICAgICAgICB0aGlzLl9pbnRlcmFjdGl2ZUJhY2tpbmcuaW5wdXRFbmFibGVkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmdhbWUud29ybGQucmVtb3ZlKGdmeCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2V0U2l6ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kVW5mbGF0dGVuKCk7XG5cbiAgICAgICAgdGhpcy50LndpZHRoID0gdGhpcy5iLndpZHRoID0gTWF0aC5jZWlsKHRoaXMuX193aWR0aCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkud2lkdGggLSB0aGlzLnRyLmdldEJvdW5kcygpLndpZHRoIHwgMCk7XG4gICAgICAgIHRoaXMuci54ID0gdGhpcy50ci54ID0gdGhpcy5ici54ID0gdGhpcy5fX3dpZHRoIHwgMDtcbiAgICAgICAgdGhpcy5sLmhlaWdodCA9IHRoaXMuci5oZWlnaHQgPSAodGhpcy5fX2hlaWdodCAtIHRoaXMudHIuZ2V0Qm91bmRzKCkuaGVpZ2h0IC0gdGhpcy5ibC5nZXRCb3VuZHMoKS5oZWlnaHQgfCAwKTtcbiAgICAgICAgdGhpcy5ibC55ID0gdGhpcy5iLnkgPSB0aGlzLmJyLnkgPSB0aGlzLl9faGVpZ2h0IHwgMDtcblxuICAgICAgICBpZiAodGhpcy5maWxsTWlkZGxlKSB7XG4gICAgICAgICAgICB0aGlzLnRpbGUud2lkdGggPSBNYXRoLmNlaWwodGhpcy5fX3dpZHRoIC0gdGhpcy50ci5nZXRCb3VuZHMoKS53aWR0aCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkud2lkdGggKyA0KVxuICAgICAgICAgICAgdGhpcy50aWxlLmhlaWdodCA9IE1hdGguY2VpbCh0aGlzLl9faGVpZ2h0IC0gdGhpcy50bC5nZXRCb3VuZHMoKS5oZWlnaHQgLSB0aGlzLmJsLmdldEJvdW5kcygpLmhlaWdodCArIDQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2ludGVyYWN0aXZlQmFja2luZyAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbmV3IHdpZHRoJywgdGhpcy5fX3dpZHRoKVxuICAgICAgICAgICAgdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nLndpZHRoID0gdGhpcy5fX3dpZHRoO1xuICAgICAgICAgICAgdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nLmhlaWdodCA9IHRoaXMuX19oZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKDEwLCB0aGlzLmRGbGF0dGVuLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9hZGRJbnB1dCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnRlcmFjdGl2ZUJhY2tpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZEludGVyYWN0aXZlQmFja2luZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVtb3ZlSW5wdXQoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nLmlucHV0RW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBkVW5mbGF0dGVuKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9kaXNwbGF5TGF5ZXIuY2FjaGVBc0JpdG1hcCA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGRGbGF0dGVuKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9kaXNwbGF5TGF5ZXIuY2FjaGVBc0JpdG1hcCA9IHRydWU7Ly90aGlzLmdhbWUucmVuZGVyVHlwZSA9PT0gUGhhc2VyLldFQkdMO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaW5wdXRFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lucHV0RW5hYmxlZCA9IHZhbHVlO1xuICAgICAgICBpZiAodGhpcy5faW5wdXRFbmFibGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGRJbnB1dCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcmVtb3ZlSW5wdXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZXZlbnRzKCk6IFBoYXNlci5FdmVudHMge1xuICAgICAgICBpZiAoIXRoaXMuX2ludGVyYWN0aXZlQmFja2luZyB8fCAhdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nLmlucHV0RW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVyYWN0aXZlQmFja2luZy5ldmVudHM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpbnB1dCgpOiBQaGFzZXIuSW5wdXRIYW5kbGVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVyYWN0aXZlQmFja2luZy5pbnB1dDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGhTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fX3dpZHRoID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX3NldFNpemUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHZTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fX2hlaWdodCA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9zZXRTaXplKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBoU2l6ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fX3dpZHRoO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdlNpemUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19oZWlnaHQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFNpemUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fX3dpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuX19oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuX3NldFNpemUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGludGVyYWN0aXZlQmFja2luZygpOlBoYXNlci5JbWFnZXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVyYWN0aXZlQmFja2luZztcbiAgICB9XG59IiwiaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xuaW1wb3J0IHtHYW1lfSBmcm9tICcuLi9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFNwaW5lIGV4dGVuZHMgUElYSS5zcGluZS5TcGluZSB7XG4gICAgcHVibGljIHN0YXRpYyBERUZBVUxUX1NQRUVEOiBudW1iZXIgPSAwLjAxNjc7Ly8gNjAgZnBzO1xuICAgIHB1YmxpYyBkZWJ1ZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBnYW1lOiBHYW1lO1xuICAgIHByaXZhdGUgX2NyZWF0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgb25DcmVhdGU6IFBoYXNlci5TaWduYWwgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuICAgIHB1YmxpYyBvbkFuaW1hdGlvbkNvbXBsZXRlOiBQaGFzZXIuU2lnbmFsID0gbnVsbDtcbiAgICBwdWJsaWMgb25NZXNoU3dhcDogUGhhc2VyLlNpZ25hbCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG5cbiAgICBwcm90ZWN0ZWQgX2NhblVwZGF0ZTogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJvdGVjdGVkIF9wYXVzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcm90ZWN0ZWQgX3NwZWVkOiBudW1iZXIgPSAxO1xuICAgIHByb3RlY3RlZCBfc2tlbGV0b25TY2FsZTogbnVtYmVyID0gMTtcblxuICAgIHByb3RlY3RlZCBfYm91bmRzT2Zmc2V0OiBQaGFzZXIuUG9pbnQgPSBuZXcgUGhhc2VyLlBvaW50KDAsIDApO1xuICAgIHByb3RlY3RlZCBfYm91bmRzV2lkdGhTY2FsZTogbnVtYmVyID0gMTtcbiAgICBwcm90ZWN0ZWQgX2JvdW5kc0hlaWdodFNjYWxlOiBudW1iZXIgPSAxO1xuICAgIHByb3RlY3RlZCBfY3VycmVudEJvdW5kczogUElYSS5SZWN0YW5nbGUgPSBuZXcgUElYSS5SZWN0YW5nbGUoKTtcblxuICAgIHB1YmxpYyBwaHlzaWNzU3ByaXRlOiBQaGFzZXIuU3ByaXRlO1xuICAgIHByb3RlY3RlZCBfcGh5c2ljc09mZnNldDogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9ID0geyB4OiAwLCB5OiAwIH07XG4gICAgcHJvdGVjdGVkIF9waHlzaWNzRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIG5vbk1lc2hWZXJzaW9uOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXNzZXROYW1lOiBzdHJpbmcgPSAnJywgeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgcHVibGljIHNrZWxldG9uU2NhbGU6IG51bWJlciA9IDEpIHtcbiAgICAgICAgc3VwZXIoQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lLCB4LCB5LCBTcGluZS5jcmVhdGVTcGluZURhdGEoU3BpbmUuTE9BRF9OT05fTUVTSCA/IChhc3NldE5hbWUgKyBTcGluZS5OT05fTUVTSF9TVUZGSVgpIDogYXNzZXROYW1lLCBza2VsZXRvblNjYWxlKSk7XG5cbiAgICAgICAgdGhpcy5fc2tlbGV0b25TY2FsZSA9IHNrZWxldG9uU2NhbGU7XG5cbiAgICAgICAgaWYgKFNwaW5lLkxPQURfTk9OX01FU0gpIHtcbiAgICAgICAgICAgIHRoaXMubm9uTWVzaFZlcnNpb24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGluaXRpYWxpemUgc3RhdGljXG4gICAgICAgIFNwaW5lLmluaXRpYWxpemUoKTtcbiAgICAgICAgU3BpbmUub25Ob25NZXNoRlBTLmFkZE9uY2UodGhpcy5sb2FkTm9uTWVzaFZlcnNpb24sIHRoaXMpO1xuXG4gICAgICAgIHRoaXMubmFtZSA9IGFzc2V0TmFtZTtcbiAgICAgICAgdGhpcy5za2VsZXRvbi5zZXRUb1NldHVwUG9zZSgpO1xuICAgICAgICB0aGlzLl9jcmVhdGVCb3VuZHMoKTtcbiAgICAgICAgdGhpcy51cGRhdGUoMCk7XG4gICAgICAgIHRoaXMuYXV0b1VwZGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQW5pbWF0aW9uQ29tcGxldGUgPSB0aGlzLnN0YXRlLm9uQW5pbWF0aW9uQ29tcGxldGU7XG4gICAgICAgIHRoaXMuaGl0QXJlYSA9IG5ldyBQaGFzZXIuUmVjdGFuZ2xlKDAsIC0gdGhpcy5za2VsZXRvbi5kYXRhLmhlaWdodCwgdGhpcy5za2VsZXRvbi5kYXRhLndpZHRoLCB0aGlzLnNrZWxldG9uLmRhdGEuaGVpZ2h0KTtcbiAgICAgICAgLy90aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKDEwMCwgdGhpcy5fb25DcmVhdGVJbnRlcm5hbCwgdGhpcyk7XG5cbiAgICAgICAgaWYgKFNwaW5lLkFVVE9fTUVTSCAmJiBTcGluZS5MT0FEX05PTl9NRVNIICE9PSB0cnVlKSB7XG4gICAgICAgICAgICBTcGluZS5kZXRlY3RBdXRvTWVzaCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb25DcmVhdGVJbnRlcm5hbCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY3JlYXRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX2NyZWF0ZSgpO1xuICAgICAgICB0aGlzLm9uQ3JlYXRlLmRpc3BhdGNoKCk7XG4gICAgICAgIHRoaXMuX2NhblVwZGF0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9jcmVhdGUoKTogdm9pZCB7XG4gICAgICAgIC8vIHRvIG92ZXJyaWRlXG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2tlbGV0b24gPSBudWxsO1xuICAgICAgICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGF0ZURhdGEgPSBudWxsO1xuICAgICAgICB0aGlzLnNwaW5lRGF0YSA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMuc2xvdENvbnRhaW5lcnMgJiYgdGhpcy5zbG90Q29udGFpbmVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5zbG90Q29udGFpbmVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbG90Q29udGFpbmVycy5zaGlmdCgpLmRlc3Ryb3kodHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zbG90Q29udGFpbmVycyA9IG51bGw7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2hpbGRyZW4oKTtcbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoZHQ6IG51bWJlciA9IFNwaW5lLkRFRkFVTFRfU1BFRUQpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jcmVhdGVkICYmIHRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9vbkNyZWF0ZUludGVybmFsKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3BhdXNlZCB8fCAhdGhpcy5fY2FuVXBkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fcGh5c2ljc0VuYWJsZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMueCA9IHRoaXMucGh5c2ljc1Nwcml0ZS5ib2R5LnBvc2l0aW9uLnggKyB0aGlzLl9waHlzaWNzT2Zmc2V0Lng7XG4gICAgICAgICAgICB0aGlzLnkgPSB0aGlzLnBoeXNpY3NTcHJpdGUuYm9keS5wb3NpdGlvbi55ICsgdGhpcy5fcGh5c2ljc09mZnNldC55ICsgKHRoaXMuc2NhbGUueSA+IDAgPyB0aGlzLnBoeXNpY3NTcHJpdGUuYm9keS5oZWlnaHQgOiAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLnVwZGF0ZSh0aGlzLl9zcGVlZCAqIGR0KTtcblxuXG4gICAgfVxuXG4gICAgcHVibGljIGluaXRQaHlzaWNzKHR5cGU6IG51bWJlciwgb2Zmc2V0OiB7IHg/OiBudW1iZXIsIHk/OiBudW1iZXIgfSk6IGJvb2xlYW4ge1xuICAgICAgICB0aGlzLl9jcmVhdGVCb3VuZHMoKTtcbiAgICAgICAgaWYgKHR5cGUgIT0gUGhhc2VyLlBoeXNpY3MuQVJDQURFICYmXG4gICAgICAgICAgICB0eXBlICE9IFBoYXNlci5QaHlzaWNzLk5JTkpBICYmXG4gICAgICAgICAgICB0eXBlICE9IFBoYXNlci5QaHlzaWNzLlAySlMpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgaWYgKG9mZnNldC54ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3BoeXNpY3NPZmZzZXQueCA9IG9mZnNldC54O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9mZnNldC55ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3BoeXNpY3NPZmZzZXQueSA9IG9mZnNldC55O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5waHlzaWNzU3ByaXRlID0gPFBoYXNlci5TcHJpdGU+dGhpcy5wYXJlbnQuYWRkQ2hpbGQodGhpcy5nYW1lLmFkZC5zcHJpdGUodGhpcy54ICsgdGhpcy5fcGh5c2ljc09mZnNldC54LCB0aGlzLnkgLSB0aGlzLl9waHlzaWNzT2Zmc2V0LnkpKTtcblxuICAgICAgICB0aGlzLnBoeXNpY3NTcHJpdGUubmFtZSA9IHRoaXMuYXNzZXROYW1lICsgJ19waHlzaWNzU3ByaXRlJztcbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuZW5hYmxlKHRoaXMucGh5c2ljc1Nwcml0ZSwgdHlwZSk7XG4gICAgICAgIHRoaXMuX3BoeXNpY3NFbmFibGVkID0gKHRoaXMucGh5c2ljc1Nwcml0ZS5ib2R5ICE9PSBudWxsKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BoeXNpY3NFbmFibGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXNhYmxlUGh5c2ljcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcGh5c2ljc0VuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZW5hYmxlUGh5c2ljcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcGh5c2ljc0VuYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkTm9uTWVzaFZlcnNpb24oKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHRoaXMubm9uTWVzaFZlcnNpb24gPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLy8gc2V0cyB0aGUgbm9uTWVzaFZlcnNpb24gZmxhZyBzbyB0aGlzIG1ldGhvZCBkb2Vzbid0IHJ1biBtb3JlIHRoYW4gb25jZVxuICAgICAgICAvL3RoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vbk1lc2hWZXJzaW9uID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbHBoYSA9IDA7XG4gICAgICAgIC8vIHN0b3JlIHRoZSB0cmFja3MgYW5kIHNpZ25hbHNcbiAgICAgICAgY29uc3QgdHJhY2tzID0gdGhpcy5zdGF0ZS50cmFja3M7XG4gICAgICAgIGNvbnN0IHNpZ25hbDogUGhhc2VyLlNpZ25hbCA9IHRoaXMuc3RhdGUub25BbmltYXRpb25Db21wbGV0ZTtcblxuICAgICAgICAvLyBkZXN0cm95IHRoZSBzbG90IGNvbnRhaW5lcnNcbiAgICAgICAgd2hpbGUgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgKDxQaGFzZXIuR3JvdXA+dGhpcy5yZW1vdmVDaGlsZEF0KDApKS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVzZXQgdGhlIHNwaW5lIGRhdGFcbiAgICAgICAgdGhpcy5zZXR1cChTcGluZS5jcmVhdGVTcGluZURhdGEodGhpcy5uYW1lICsgU3BpbmUuTk9OX01FU0hfU1VGRklYLCB0aGlzLl9za2VsZXRvblNjYWxlKSk7XG4gICAgICAgIHRoaXMuc3RhdGUuYXBwbHkodGhpcy5za2VsZXRvbik7XG5cbiAgICAgICAgLy8gcmVzZXQgdGhlIHN0YXRlXG4gICAgICAgIHRoaXMuc3RhdGUudHJhY2tzID0gdHJhY2tzO1xuXG4gICAgICAgIC8vIHJlc2V0IHRoZSBzaWduYWxzXG4gICAgICAgIGlmIChzaWduYWwgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25BbmltYXRpb25Db21wbGV0ZS5yZW1vdmVBbGwoKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25BbmltYXRpb25Db21wbGV0ZS5kaXNwb3NlKCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9uQW5pbWF0aW9uQ29tcGxldGUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5vbkFuaW1hdGlvbkNvbXBsZXRlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25BbmltYXRpb25Db21wbGV0ZSA9IHNpZ25hbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25BbmltYXRpb25Db21wbGV0ZSA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbkFuaW1hdGlvbkNvbXBsZXRlID0gdGhpcy5zdGF0ZS5vbkFuaW1hdGlvbkNvbXBsZXRlO1xuXG4gICAgICAgIC8vIGZvcmNlIGFuIHVwZGF0ZVxuICAgICAgICAvL3RoaXMudXBkYXRlKCk7XG5cbiAgICAgICAgLy8gY2xlYXIgdGhlIG1lc2hlZCBzcGluZSBhc3NldHNcbiAgICAgICAgKDxHYW1lPnRoaXMuZ2FtZSkuYXNzZXQuY2xlYXJTcGluZUFzc2V0KHRoaXMubmFtZSk7XG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoMTAwLCAoKSA9PiB7IHRoaXMuYWxwaGEgPSAxIH0sIHRoaXMpO1xuXG4gICAgICAgIHRoaXMub25NZXNoU3dhcC5kaXNwYXRjaCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlU3BpbmVEYXRhKGFzc2V0TmFtZTogc3RyaW5nLCBza2VsZXRvblNjYWxlOiBudW1iZXIgPSAxKTogYW55IHtcbiAgICAgICAgY29uc3Qgc3BpbmUgPSBQSVhJLnNwaW5lO1xuICAgICAgICBjb25zdCBzcGluZUF0bGFzID0gbmV3IHNwaW5lLlNwaW5lUnVudGltZS5BdGxhcyhBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUuY2FjaGUuZ2V0VGV4dChhc3NldE5hbWUgKyAnLmF0bGFzJyksIHRoaXMuYXRsYXNDYWxsYmFja0Z1bmN0aW9uKTtcbiAgICAgICAgY29uc3Qgc3BpbmVKc29uUGFyc2VyID0gbmV3IHNwaW5lLlNwaW5lUnVudGltZS5Ta2VsZXRvbkpzb25QYXJzZXIobmV3IHNwaW5lLlNwaW5lUnVudGltZS5BdGxhc0F0dGFjaG1lbnRQYXJzZXIoc3BpbmVBdGxhcyksIHNrZWxldG9uU2NhbGUpO1xuICAgICAgICBjb25zdCBza2VsZXRvbkRhdGEgPSBzcGluZUpzb25QYXJzZXIucmVhZFNrZWxldG9uRGF0YShBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUuY2FjaGUuZ2V0SlNPTihhc3NldE5hbWUgKyAnLmpzb24nKSk7XG4gICAgICAgIHJldHVybiBza2VsZXRvbkRhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhdGxhc0NhbGxiYWNrRnVuY3Rpb24obGluZSwgY2FsbGJhY2spIHtcbiAgICAgICAgLy9jYWxsYmFjayhQSVhJLkJhc2VUZXh0dXJlLmZyb21JbWFnZSgnYXNzZXRzL3NwaW5lLycgKyBsaW5lKSk7XG4gICAgICAgIGNvbnN0IGxpbmVBcnIgPSBsaW5lLnNwbGl0KCdAJyArIEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZS5yZXNvbHV0aW9uICsgJ3gnKTtcbiAgICAgICAgY29uc3QgdXJsID0gbGluZUFyci5qb2luKCcnKTtcblxuICAgICAgICBjYWxsYmFjayhuZXcgUElYSS5CYXNlVGV4dHVyZShBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUuY2FjaGUuZ2V0SW1hZ2UodXJsKSwgUElYSS5zY2FsZU1vZGVzLkRFRkFVTFQpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHBhdXNlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdXNlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBhdXNlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9wYXVzZWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHNwZWVkKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zcGVlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHNwZWVkKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fc3BlZWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGJvdW5kc09mZnNldChvZmZzZXQ6IFBoYXNlci5Qb2ludCkge1xuICAgICAgICB0aGlzLl9ib3VuZHNPZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRCb3VuZHMgPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYm91bmRzT2Zmc2V0KCk6IFBoYXNlci5Qb2ludCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ib3VuZHNPZmZzZXQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBib3VuZHNXaWR0aFNjYWxlKHNjYWxlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fYm91bmRzV2lkdGhTY2FsZSA9IHNjYWxlO1xuICAgICAgICB0aGlzLl9jdXJyZW50Qm91bmRzID0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGJvdW5kc1dpZHRoU2NhbGUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvdW5kc1dpZHRoU2NhbGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBib3VuZHNIZWlnaHRTY2FsZShzY2FsZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2JvdW5kc0hlaWdodFNjYWxlID0gc2NhbGU7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRCb3VuZHMgPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYm91bmRzSGVpZ2h0U2NhbGUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvdW5kc0hlaWdodFNjYWxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRCb3VuZHMoKTogUElYSS5SZWN0YW5nbGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudEJvdW5kcyB8fCB0aGlzLl9jcmVhdGVCb3VuZHMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZUJvdW5kcygpOiBQSVhJLlJlY3RhbmdsZSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRCb3VuZHMgPSBuZXcgUElYSS5SZWN0YW5nbGUodGhpcy54ICsgdGhpcy5fYm91bmRzT2Zmc2V0LnggKiB0aGlzLnNjYWxlLngsIHRoaXMueSAtICh0aGlzLnNrZWxldG9uLmRhdGEuaGVpZ2h0ICogdGhpcy5zY2FsZS55KSArIHRoaXMuX2JvdW5kc09mZnNldC55ICogdGhpcy5zY2FsZS55LCB0aGlzLnNrZWxldG9uLmRhdGEud2lkdGggKiBNYXRoLmFicyh0aGlzLnNjYWxlLngpICogdGhpcy5ib3VuZHNXaWR0aFNjYWxlLCB0aGlzLnNrZWxldG9uLmRhdGEuaGVpZ2h0ICogTWF0aC5hYnModGhpcy5zY2FsZS55KSAqIHRoaXMuYm91bmRzSGVpZ2h0U2NhbGUpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50Qm91bmRzO1xuICAgIH1cblxuICAgIC8vIGFsc28gdXBkYXRlcyB0aGUgYm91bmRzXG4gICAgcHVibGljIHNldFNjYWxlKHg6IG51bWJlciA9IG51bGwsIHk6IG51bWJlciA9IG51bGwpIHtcbiAgICAgICAgaWYgKHggIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUueCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUueSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY3VycmVudEJvdW5kcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCb3VuZHMoKS53aWR0aDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCb3VuZHMoKS5oZWlnaHQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBib2R5KCk6IGFueSB7XG4gICAgICAgIGlmICghdGhpcy5fcGh5c2ljc0VuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBoeXNpY3NTcHJpdGUuYm9keTtcbiAgICB9XG5cbiAgICAvLyBzdGF0aWMgbWV0aG9kc1xuICAgIC8vIGF1dG8gbWVzaCAvIG5vbi1tZXNoIGFzc2V0IGxvYWRpbmdcbiAgICBwcm90ZWN0ZWQgc3RhdGljIElOSVRJQUxJWkVEOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIHN0YXRpYyBnYW1lOiBHYW1lID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgc3RhdGljIG5vbk1lc2hUaW1lcjogUGhhc2VyLlRpbWVyRXZlbnQgPSBudWxsO1xuICAgIHByb3RlY3RlZCBzdGF0aWMgb25Ob25NZXNoRlBTOiBQaGFzZXIuU2lnbmFsO1xuXG4gICAgcHVibGljIHN0YXRpYyBMT0FEX05PTl9NRVNIOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgc3RhdGljIEFVVE9fTUVTSDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIHN0YXRpYyBERUZBVUxUX05PTl9NRVNIX1NVRkZJWDogc3RyaW5nID0gJ19ub21lc2gnO1xuICAgIHB1YmxpYyBzdGF0aWMgTk9OX01FU0hfU1VGRklYOiBzdHJpbmcgPSBudWxsO1xuXG4gICAgcHVibGljIHN0YXRpYyBERUZBVUxUX05PTl9NRVNIX0ZQUzogbnVtYmVyID0gMzU7XG4gICAgcHVibGljIHN0YXRpYyBOT05fTUVTSF9GUFM6IG51bWJlciA9IG51bGw7XG5cbiAgICBwdWJsaWMgc3RhdGljIGluaXRpYWxpemUoKTogdm9pZCB7XG4gICAgICAgIGlmIChTcGluZS5JTklUSUFMSVpFRCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFNwaW5lLklOSVRJQUxJWkVEID0gdHJ1ZTtcbiAgICAgICAgU3BpbmUuZ2FtZSA9IEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZTtcbiAgICAgICAgU3BpbmUub25Ob25NZXNoRlBTID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGRldGVjdEF1dG9NZXNoKCk6IHZvaWQge1xuICAgICAgICBTcGluZS5nYW1lLnRpbWUuYWR2YW5jZWRUaW1pbmcgPSB0cnVlO1xuICAgICAgICBTcGluZS5nYW1lLnRpbWUuZXZlbnRzLmFkZCgyMDAwLCBTcGluZS5jaGVja05vbk1lc2hUaHJlc2hvbGQsIFNwaW5lKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGRlc3Ryb3lOb25NZXNoVGltZXIoKTogdm9pZCB7XG4gICAgICAgIGlmIChTcGluZS5ub25NZXNoVGltZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIFNwaW5lLmdhbWUudGltZS5ldmVudHMucmVtb3ZlKFNwaW5lLm5vbk1lc2hUaW1lcik7XG4gICAgICAgICAgICBTcGluZS5ub25NZXNoVGltZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgY2hlY2tOb25NZXNoVGhyZXNob2xkKCk6IHZvaWQge1xuICAgICAgICBTcGluZS5kZXN0cm95Tm9uTWVzaFRpbWVyKCk7XG4gICAgICAgIFNwaW5lLm5vbk1lc2hUaW1lciA9IFNwaW5lLmdhbWUudGltZS5ldmVudHMucmVwZWF0KDUwMCwgMTAsIFNwaW5lLmNoZWNrQXV0b01lc2hGUFMsIFNwaW5lKTtcbiAgICAgICAgU3BpbmUuZ2FtZS50aW1lLmV2ZW50cy5hZGQoNTUwMCwgU3BpbmUuZGlzYWJsZUFkdmFuY2VkVGltaW5nLCBTcGluZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjaGVja0F1dG9NZXNoRlBTKCk6IHZvaWQge1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZ2FtZS50aW1lLmZwcywgU3BpbmUuTk9OX01FU0hfRlBTKVxuICAgICAgICBpZiAoU3BpbmUuZ2FtZS50aW1lLmZwcyA8IFNwaW5lLk5PTl9NRVNIX0ZQUykge1xuICAgICAgICAgICAgU3BpbmUuZGVzdHJveU5vbk1lc2hUaW1lcigpO1xuICAgICAgICAgICAgU3BpbmUuTE9BRF9OT05fTUVTSCA9IHRydWU7XG4gICAgICAgICAgICBTcGluZS5vbk5vbk1lc2hGUFMuZGlzcGF0Y2goKTtcbiAgICAgICAgICAgIFNwaW5lLmRpc2FibGVBZHZhbmNlZFRpbWluZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBkaXNhYmxlQWR2YW5jZWRUaW1pbmcoKTogdm9pZCB7XG4gICAgICAgIFNwaW5lLmdhbWUudGltZS5hZHZhbmNlZFRpbWluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc2V0QXV0b01lc2goZW5hYmxlZDogYm9vbGVhbiA9IHRydWUsIG5vbk1lc2hTdWZmaXg6IHN0cmluZyA9IFNwaW5lLkRFRkFVTFRfTk9OX01FU0hfU1VGRklYLCBub25NZXNoRlBTOiBudW1iZXIgPSBTcGluZS5ERUZBVUxUX05PTl9NRVNIX0ZQUykge1xuICAgICAgICBTcGluZS5BVVRPX01FU0ggPSBlbmFibGVkO1xuICAgICAgICBTcGluZS5OT05fTUVTSF9TVUZGSVggPSBub25NZXNoU3VmZml4O1xuICAgICAgICBTcGluZS5OT05fTUVTSF9GUFMgPSBub25NZXNoRlBTO1xuICAgIH1cbn0iLCJpbXBvcnQge0FwcGxpY2F0aW9ufSBmcm9tICcuLi9hcHBsaWNhdGlvbic7XG5pbXBvcnQge0dhbWV9IGZyb20gJy4uL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgU3BpbmUyIGV4dGVuZHMgUElYSS5zcGluZS5TcGluZSB7XG4gICAgcHVibGljIHN0YXRpYyBERUZBVUxUX1NQRUVEOiBudW1iZXIgPSAwLjAxNjc7Ly8gNjAgZnBzO1xuICAgIHB1YmxpYyBkZWJ1ZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBnYW1lOiBHYW1lO1xuICAgIHByaXZhdGUgX2NyZWF0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgb25DcmVhdGU6IFBoYXNlci5TaWduYWwgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuICAgIHB1YmxpYyBvbkFuaW1hdGlvbkNvbXBsZXRlOiBQaGFzZXIuU2lnbmFsID0gbnVsbDtcbiAgICBwdWJsaWMgb25NZXNoU3dhcDogUGhhc2VyLlNpZ25hbCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG5cbiAgICBwcm90ZWN0ZWQgX2NhblVwZGF0ZTogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJvdGVjdGVkIF9wYXVzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcm90ZWN0ZWQgX3NwZWVkOiBudW1iZXIgPSAxO1xuICAgIHByb3RlY3RlZCBfc2tlbGV0b25TY2FsZTogbnVtYmVyID0gMTtcblxuICAgIHByb3RlY3RlZCBfYm91bmRzT2Zmc2V0OiBQaGFzZXIuUG9pbnQgPSBuZXcgUGhhc2VyLlBvaW50KDAsIDApO1xuICAgIHByb3RlY3RlZCBfYm91bmRzV2lkdGhTY2FsZTogbnVtYmVyID0gMTtcbiAgICBwcm90ZWN0ZWQgX2JvdW5kc0hlaWdodFNjYWxlOiBudW1iZXIgPSAxO1xuICAgIHByb3RlY3RlZCBfY3VycmVudEJvdW5kczogUElYSS5SZWN0YW5nbGUgPSBuZXcgUElYSS5SZWN0YW5nbGUoKTtcblxuICAgIHByb3RlY3RlZCBfcGh5c2ljc09mZnNldDogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9ID0geyB4OiAwLCB5OiAwIH07XG4gICAgcHJvdGVjdGVkIF9waHlzaWNzRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIG5vbk1lc2hWZXJzaW9uOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXNzZXROYW1lOiBzdHJpbmcgPSAnJywgeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgcHVibGljIHNrZWxldG9uU2NhbGU6IG51bWJlciA9IDEpIHtcbiAgICAgICAgc3VwZXIoQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lLCB4LCB5LCBTcGluZTIuY3JlYXRlU3BpbmVEYXRhKFNwaW5lMi5MT0FEX05PTl9NRVNIID8gKGFzc2V0TmFtZSArIFNwaW5lMi5OT05fTUVTSF9TVUZGSVgpIDogYXNzZXROYW1lLCBza2VsZXRvblNjYWxlKSk7XG5cbiAgICAgICAgdGhpcy5fc2tlbGV0b25TY2FsZSA9IHNrZWxldG9uU2NhbGU7XG5cbiAgICAgICAgaWYgKFNwaW5lMi5MT0FEX05PTl9NRVNIKSB7XG4gICAgICAgICAgICB0aGlzLm5vbk1lc2hWZXJzaW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpbml0aWFsaXplIHN0YXRpY1xuICAgICAgICBTcGluZTIuaW5pdGlhbGl6ZSgpO1xuICAgICAgICBTcGluZTIub25Ob25NZXNoRlBTLmFkZE9uY2UodGhpcy5sb2FkTm9uTWVzaFZlcnNpb24sIHRoaXMpO1xuXG4gICAgICAgIHRoaXMubmFtZSA9IGFzc2V0TmFtZTtcbiAgICAgICAgdGhpcy5za2VsZXRvbi5zZXRUb1NldHVwUG9zZSgpO1xuICAgICAgICB0aGlzLl9jcmVhdGVCb3VuZHMoKTtcbiAgICAgICAgdGhpcy51cGRhdGUoMCk7XG4gICAgICAgIHRoaXMuYXV0b1VwZGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQW5pbWF0aW9uQ29tcGxldGUgPSB0aGlzLnN0YXRlLm9uQW5pbWF0aW9uQ29tcGxldGU7XG4gICAgICAgIHRoaXMuaGl0QXJlYSA9IG5ldyBQaGFzZXIuUmVjdGFuZ2xlKDAsIC0gdGhpcy5za2VsZXRvbi5kYXRhLmhlaWdodCwgdGhpcy5za2VsZXRvbi5kYXRhLndpZHRoLCB0aGlzLnNrZWxldG9uLmRhdGEuaGVpZ2h0KTtcbiAgICAgICAgLy90aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKDEwMCwgdGhpcy5fb25DcmVhdGVJbnRlcm5hbCwgdGhpcyk7XG5cbiAgICAgICAgaWYgKFNwaW5lMi5BVVRPX01FU0ggJiYgU3BpbmUyLkxPQURfTk9OX01FU0ggIT09IHRydWUpIHtcbiAgICAgICAgICAgIFNwaW5lMi5kZXRlY3RBdXRvTWVzaCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb25DcmVhdGVJbnRlcm5hbCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY3JlYXRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX2NyZWF0ZSgpO1xuICAgICAgICB0aGlzLm9uQ3JlYXRlLmRpc3BhdGNoKCk7XG4gICAgICAgIHRoaXMuX2NhblVwZGF0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9jcmVhdGUoKTogdm9pZCB7XG4gICAgICAgIC8vIHRvIG92ZXJyaWRlXG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2tlbGV0b24gPSBudWxsO1xuICAgICAgICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGF0ZURhdGEgPSBudWxsO1xuICAgICAgICB0aGlzLnNwaW5lRGF0YSA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMuc2xvdENvbnRhaW5lcnMgJiYgdGhpcy5zbG90Q29udGFpbmVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5zbG90Q29udGFpbmVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbG90Q29udGFpbmVycy5zaGlmdCgpLmRlc3Ryb3kodHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zbG90Q29udGFpbmVycyA9IG51bGw7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIgPSBTcGluZTIuREVGQVVMVF9TUEVFRCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2NyZWF0ZWQgJiYgdGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX29uQ3JlYXRlSW50ZXJuYWwoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fcGF1c2VkIHx8ICF0aGlzLl9jYW5VcGRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLnVwZGF0ZSh0aGlzLl9zcGVlZCAqIGR0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdFBoeXNpY3ModHlwZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHRoaXMuX2NyZWF0ZUJvdW5kcygpO1xuICAgICAgICBpZiAodHlwZSAhPSBQaGFzZXIuUGh5c2ljcy5BUkNBREUgJiZcbiAgICAgICAgICAgIHR5cGUgIT0gUGhhc2VyLlBoeXNpY3MuTklOSkEgJiZcbiAgICAgICAgICAgIHR5cGUgIT0gUGhhc2VyLlBoeXNpY3MuUDJKUylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0eXBlID09PSBQaGFzZXIuUGh5c2ljcy5BUkNBREUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGUodGhpcywgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuZW5hYmxlKHRoaXMsIHR5cGUpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9waHlzaWNzRW5hYmxlZCA9ICh0aGlzLmJvZHkgIT09IG51bGwpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9waHlzaWNzRW5hYmxlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzYWJsZVBoeXNpY3MoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3BoeXNpY3NFbmFibGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIGVuYWJsZVBoeXNpY3MoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3BoeXNpY3NFbmFibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZE5vbk1lc2hWZXJzaW9uKCk6IHZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLm5vbk1lc2hWZXJzaW9uID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8vIHNldHMgdGhlIG5vbk1lc2hWZXJzaW9uIGZsYWcgc28gdGhpcyBtZXRob2QgZG9lc24ndCBydW4gbW9yZSB0aGFuIG9uY2VcbiAgICAgICAgLy90aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub25NZXNoVmVyc2lvbiA9IHRydWU7XG4gICAgICAgIHRoaXMuYWxwaGEgPSAwO1xuICAgICAgICAvLyBzdG9yZSB0aGUgdHJhY2tzIGFuZCBzaWduYWxzXG4gICAgICAgIGNvbnN0IHRyYWNrcyA9IHRoaXMuc3RhdGUudHJhY2tzO1xuICAgICAgICBjb25zdCBzaWduYWw6IFBoYXNlci5TaWduYWwgPSB0aGlzLnN0YXRlLm9uQW5pbWF0aW9uQ29tcGxldGU7XG5cbiAgICAgICAgLy8gZGVzdHJveSB0aGUgc2xvdCBjb250YWluZXJzXG4gICAgICAgIHdoaWxlICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICg8UGhhc2VyLkdyb3VwPnRoaXMucmVtb3ZlQ2hpbGRBdCgwKSkuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlc2V0IHRoZSBzcGluZSBkYXRhXG4gICAgICAgIHRoaXMuc2V0dXAoU3BpbmUyLmNyZWF0ZVNwaW5lRGF0YSh0aGlzLm5hbWUgKyBTcGluZTIuTk9OX01FU0hfU1VGRklYLCB0aGlzLl9za2VsZXRvblNjYWxlKSk7XG4gICAgICAgIHRoaXMuc3RhdGUuYXBwbHkodGhpcy5za2VsZXRvbik7XG5cbiAgICAgICAgLy8gcmVzZXQgdGhlIHN0YXRlXG4gICAgICAgIHRoaXMuc3RhdGUudHJhY2tzID0gdHJhY2tzO1xuXG4gICAgICAgIC8vIHJlc2V0IHRoZSBzaWduYWxzXG4gICAgICAgIGlmIChzaWduYWwgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25BbmltYXRpb25Db21wbGV0ZS5yZW1vdmVBbGwoKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25BbmltYXRpb25Db21wbGV0ZS5kaXNwb3NlKCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9uQW5pbWF0aW9uQ29tcGxldGUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5vbkFuaW1hdGlvbkNvbXBsZXRlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25BbmltYXRpb25Db21wbGV0ZSA9IHNpZ25hbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25BbmltYXRpb25Db21wbGV0ZSA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbkFuaW1hdGlvbkNvbXBsZXRlID0gdGhpcy5zdGF0ZS5vbkFuaW1hdGlvbkNvbXBsZXRlO1xuXG4gICAgICAgIC8vIGZvcmNlIGFuIHVwZGF0ZVxuICAgICAgICAvL3RoaXMudXBkYXRlKCk7XG5cbiAgICAgICAgLy8gY2xlYXIgdGhlIG1lc2hlZCBzcGluZSBhc3NldHNcbiAgICAgICAgKDxHYW1lPnRoaXMuZ2FtZSkuYXNzZXQuY2xlYXJTcGluZUFzc2V0KHRoaXMubmFtZSk7XG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoMTAwLCAoKSA9PiB7IHRoaXMuYWxwaGEgPSAxIH0sIHRoaXMpO1xuXG4gICAgICAgIHRoaXMub25NZXNoU3dhcC5kaXNwYXRjaCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlU3BpbmVEYXRhKGFzc2V0TmFtZTogc3RyaW5nLCBza2VsZXRvblNjYWxlOiBudW1iZXIgPSAxKTogYW55IHtcbiAgICAgICAgY29uc3Qgc3BpbmUgPSBQSVhJLnNwaW5lO1xuICAgICAgICBjb25zdCBzcGluZUF0bGFzID0gbmV3IHNwaW5lLlNwaW5lUnVudGltZS5BdGxhcyhBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUuY2FjaGUuZ2V0VGV4dChhc3NldE5hbWUgKyAnLmF0bGFzJyksIHRoaXMuYXRsYXNDYWxsYmFja0Z1bmN0aW9uKTtcbiAgICAgICAgY29uc3Qgc3BpbmVKc29uUGFyc2VyID0gbmV3IHNwaW5lLlNwaW5lUnVudGltZS5Ta2VsZXRvbkpzb25QYXJzZXIobmV3IHNwaW5lLlNwaW5lUnVudGltZS5BdGxhc0F0dGFjaG1lbnRQYXJzZXIoc3BpbmVBdGxhcyksIHNrZWxldG9uU2NhbGUpO1xuICAgICAgICBjb25zdCBza2VsZXRvbkRhdGEgPSBzcGluZUpzb25QYXJzZXIucmVhZFNrZWxldG9uRGF0YShBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUuY2FjaGUuZ2V0SlNPTihhc3NldE5hbWUgKyAnLmpzb24nKSk7XG4gICAgICAgIHJldHVybiBza2VsZXRvbkRhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhdGxhc0NhbGxiYWNrRnVuY3Rpb24obGluZSwgY2FsbGJhY2spIHtcbiAgICAgICAgLy9jYWxsYmFjayhQSVhJLkJhc2VUZXh0dXJlLmZyb21JbWFnZSgnYXNzZXRzL3NwaW5lLycgKyBsaW5lKSk7XG4gICAgICAgIGNvbnN0IGxpbmVBcnIgPSBsaW5lLnNwbGl0KCdAJyArIEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZS5yZXNvbHV0aW9uICsgJ3gnKTtcbiAgICAgICAgY29uc3QgdXJsID0gbGluZUFyci5qb2luKCcnKTtcblxuICAgICAgICBjYWxsYmFjayhuZXcgUElYSS5CYXNlVGV4dHVyZShBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUuY2FjaGUuZ2V0SW1hZ2UodXJsKSwgUElYSS5zY2FsZU1vZGVzLkRFRkFVTFQpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHBhdXNlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdXNlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBhdXNlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9wYXVzZWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHNwZWVkKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zcGVlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHNwZWVkKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fc3BlZWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGJvdW5kc09mZnNldChvZmZzZXQ6IFBoYXNlci5Qb2ludCkge1xuICAgICAgICB0aGlzLl9ib3VuZHNPZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRCb3VuZHMgPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYm91bmRzT2Zmc2V0KCk6IFBoYXNlci5Qb2ludCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ib3VuZHNPZmZzZXQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBib3VuZHNXaWR0aFNjYWxlKHNjYWxlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fYm91bmRzV2lkdGhTY2FsZSA9IHNjYWxlO1xuICAgICAgICB0aGlzLl9jdXJyZW50Qm91bmRzID0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGJvdW5kc1dpZHRoU2NhbGUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvdW5kc1dpZHRoU2NhbGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBib3VuZHNIZWlnaHRTY2FsZShzY2FsZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2JvdW5kc0hlaWdodFNjYWxlID0gc2NhbGU7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRCb3VuZHMgPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYm91bmRzSGVpZ2h0U2NhbGUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvdW5kc0hlaWdodFNjYWxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRCb3VuZHMoKTogUElYSS5SZWN0YW5nbGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudEJvdW5kcyB8fCB0aGlzLl9jcmVhdGVCb3VuZHMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZUJvdW5kcygpOiBQSVhJLlJlY3RhbmdsZSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRCb3VuZHMgPSBuZXcgUElYSS5SZWN0YW5nbGUodGhpcy54ICsgdGhpcy5fYm91bmRzT2Zmc2V0LnggKiB0aGlzLnNjYWxlLngsIHRoaXMueSAtICh0aGlzLnNrZWxldG9uLmRhdGEuaGVpZ2h0ICogdGhpcy5zY2FsZS55KSArIHRoaXMuX2JvdW5kc09mZnNldC55ICogdGhpcy5zY2FsZS55LCB0aGlzLnNrZWxldG9uLmRhdGEud2lkdGggKiBNYXRoLmFicyh0aGlzLnNjYWxlLngpICogdGhpcy5ib3VuZHNXaWR0aFNjYWxlLCB0aGlzLnNrZWxldG9uLmRhdGEuaGVpZ2h0ICogTWF0aC5hYnModGhpcy5zY2FsZS55KSAqIHRoaXMuYm91bmRzSGVpZ2h0U2NhbGUpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50Qm91bmRzO1xuICAgIH1cblxuICAgIC8vIGFsc28gdXBkYXRlcyB0aGUgYm91bmRzXG4gICAgcHVibGljIHNldFNjYWxlKHg6IG51bWJlciA9IG51bGwsIHk6IG51bWJlciA9IG51bGwpIHtcbiAgICAgICAgaWYgKHggIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUueCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUueSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY3VycmVudEJvdW5kcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCb3VuZHMoKS53aWR0aDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCb3VuZHMoKS5oZWlnaHQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhcmNhZGVCb2R5KCk6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Cb2R5IHtcbiAgICAgICAgcmV0dXJuIDxQaGFzZXIuUGh5c2ljcy5BcmNhZGUuQm9keT50aGlzLmJvZHk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBjcmVhdGVkKCk6IGJvb2xlYW4geyBcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZWQ7XG4gICAgfVxuXG4gICAgLy8gc3RhdGljIG1ldGhvZHNcbiAgICAvLyBhdXRvIG1lc2ggLyBub24tbWVzaCBhc3NldCBsb2FkaW5nXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBJTklUSUFMSVpFRDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCBzdGF0aWMgZ2FtZTogR2FtZSA9IG51bGw7XG4gICAgcHJvdGVjdGVkIHN0YXRpYyBub25NZXNoVGltZXI6IFBoYXNlci5UaW1lckV2ZW50ID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgc3RhdGljIG9uTm9uTWVzaEZQUzogUGhhc2VyLlNpZ25hbDtcblxuICAgIHB1YmxpYyBzdGF0aWMgTE9BRF9OT05fTUVTSDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIHN0YXRpYyBBVVRPX01FU0g6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHB1YmxpYyBzdGF0aWMgREVGQVVMVF9OT05fTUVTSF9TVUZGSVg6IHN0cmluZyA9ICdfbm9tZXNoJztcbiAgICBwdWJsaWMgc3RhdGljIE5PTl9NRVNIX1NVRkZJWDogc3RyaW5nID0gbnVsbDtcblxuICAgIHB1YmxpYyBzdGF0aWMgREVGQVVMVF9OT05fTUVTSF9GUFM6IG51bWJlciA9IDM1O1xuICAgIHB1YmxpYyBzdGF0aWMgTk9OX01FU0hfRlBTOiBudW1iZXIgPSBudWxsO1xuXG4gICAgcHVibGljIHN0YXRpYyBpbml0aWFsaXplKCk6IHZvaWQge1xuICAgICAgICBpZiAoU3BpbmUyLklOSVRJQUxJWkVEKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgU3BpbmUyLklOSVRJQUxJWkVEID0gdHJ1ZTtcbiAgICAgICAgU3BpbmUyLmdhbWUgPSBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWU7XG4gICAgICAgIFNwaW5lMi5vbk5vbk1lc2hGUFMgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZGV0ZWN0QXV0b01lc2goKTogdm9pZCB7XG4gICAgICAgIFNwaW5lMi5nYW1lLnRpbWUuYWR2YW5jZWRUaW1pbmcgPSB0cnVlO1xuICAgICAgICBTcGluZTIuZ2FtZS50aW1lLmV2ZW50cy5hZGQoMjAwMCwgU3BpbmUyLmNoZWNrTm9uTWVzaFRocmVzaG9sZCwgU3BpbmUyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGRlc3Ryb3lOb25NZXNoVGltZXIoKTogdm9pZCB7XG4gICAgICAgIGlmIChTcGluZTIubm9uTWVzaFRpbWVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICBTcGluZTIuZ2FtZS50aW1lLmV2ZW50cy5yZW1vdmUoU3BpbmUyLm5vbk1lc2hUaW1lcik7XG4gICAgICAgICAgICBTcGluZTIubm9uTWVzaFRpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGNoZWNrTm9uTWVzaFRocmVzaG9sZCgpOiB2b2lkIHtcbiAgICAgICAgU3BpbmUyLmRlc3Ryb3lOb25NZXNoVGltZXIoKTtcbiAgICAgICAgU3BpbmUyLm5vbk1lc2hUaW1lciA9IFNwaW5lMi5nYW1lLnRpbWUuZXZlbnRzLnJlcGVhdCg1MDAsIDEwLCBTcGluZTIuY2hlY2tBdXRvTWVzaEZQUywgU3BpbmUyKTtcbiAgICAgICAgU3BpbmUyLmdhbWUudGltZS5ldmVudHMuYWRkKDU1MDAsIFNwaW5lMi5kaXNhYmxlQWR2YW5jZWRUaW1pbmcsIFNwaW5lMik7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjaGVja0F1dG9NZXNoRlBTKCk6IHZvaWQge1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZ2FtZS50aW1lLmZwcywgU3BpbmUyLk5PTl9NRVNIX0ZQUylcbiAgICAgICAgaWYgKFNwaW5lMi5nYW1lLnRpbWUuZnBzIDwgU3BpbmUyLk5PTl9NRVNIX0ZQUykge1xuICAgICAgICAgICAgU3BpbmUyLmRlc3Ryb3lOb25NZXNoVGltZXIoKTtcbiAgICAgICAgICAgIFNwaW5lMi5MT0FEX05PTl9NRVNIID0gdHJ1ZTtcbiAgICAgICAgICAgIFNwaW5lMi5vbk5vbk1lc2hGUFMuZGlzcGF0Y2goKTtcbiAgICAgICAgICAgIFNwaW5lMi5kaXNhYmxlQWR2YW5jZWRUaW1pbmcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZGlzYWJsZUFkdmFuY2VkVGltaW5nKCk6IHZvaWQge1xuICAgICAgICBTcGluZTIuZ2FtZS50aW1lLmFkdmFuY2VkVGltaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBzZXRBdXRvTWVzaChlbmFibGVkOiBib29sZWFuID0gdHJ1ZSwgbm9uTWVzaFN1ZmZpeDogc3RyaW5nID0gU3BpbmUyLkRFRkFVTFRfTk9OX01FU0hfU1VGRklYLCBub25NZXNoRlBTOiBudW1iZXIgPSBTcGluZTIuREVGQVVMVF9OT05fTUVTSF9GUFMpIHtcbiAgICAgICAgU3BpbmUyLkFVVE9fTUVTSCA9IGVuYWJsZWQ7XG4gICAgICAgIFNwaW5lMi5OT05fTUVTSF9TVUZGSVggPSBub25NZXNoU3VmZml4O1xuICAgICAgICBTcGluZTIuTk9OX01FU0hfRlBTID0gbm9uTWVzaEZQUztcbiAgICB9XG59IiwiaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xuaW1wb3J0IHtHYW1lfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7RGV2aWNlfSBmcm9tICcuLi91dGlscyc7XG5cbi8qKlxuICogVGV4dFxuICovXG5leHBvcnQgY2xhc3MgVGV4dCBleHRlbmRzIFBoYXNlci5UZXh0IHtcbiAgICAvLyBjb25zdGFudHNcbiAgICBwdWJsaWMgc3RhdGljIERFRkFVTFRfRk9OVF9TSVpFOiBudW1iZXIgPSAxMjtcbiAgICBwdWJsaWMgc3RhdGljIERFRkFVTFRfRk9OVF9DT0xPUjogc3RyaW5nID0gXCIjMDAwMDAwXCI7XG4gICAgcHVibGljIHN0YXRpYyBERUZBVUxUX0ZPTlQ6IHN0cmluZyA9IFwiSGVsdmV0aWNhIE5ldWUsIEFyaWFsXCI7XG4gICAgcHVibGljIHN0YXRpYyBHTE9CQUxfUEFERElOR19YOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBzdGF0aWMgR0xPQkFMX1BBRERJTkdfWTogbnVtYmVyID0gMDtcblxuICAgIHB1YmxpYyBnYW1lOiBHYW1lO1xuICAgIHB1YmxpYyBzdHlsZTogYW55O1xuICAgIHB1YmxpYyBvbkFuaW1hdGlvbkNvbXBsZXRlOiBQaGFzZXIuU2lnbmFsID0gbmV3IFBoYXNlci5TaWduYWwoKTtcblxuICAgIHByb3RlY3RlZCBfY2FuVXBkYXRlID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIF9yZXBlYXRUaW1lcjogUGhhc2VyLlRpbWVyRXZlbnQ7XG4gICAgcHJvdGVjdGVkIF9kZWxheVRpbWVyOiBQaGFzZXIuVGltZXJFdmVudDtcbiAgICBwcm90ZWN0ZWQgX2xvd2VyY2FzZVRleHQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgX2xldHRlclRpbWU6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX3RleHRMZW5ndGg6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX3RleHRUb0FuaW1hdGU6IHN0cmluZ1tdID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgdGV4dDogc3RyaW5nID0gXCJcIiwgZm9udE5hbWU/OiBzdHJpbmcsIGZvbnRTaXplOiBudW1iZXIgPSBUZXh0LkRFRkFVTFRfRk9OVF9TSVpFLCBmb250Q29sb3I6IHN0cmluZyA9IFRleHQuREVGQVVMVF9GT05UX0NPTE9SLCBmb250QWxpZ246IHN0cmluZyA9ICdsZWZ0Jywgd29yZFdyYXA6IGJvb2xlYW4gPSBmYWxzZSwgd2lkdGg6IG51bWJlciA9IDAsIHB1YmxpYyBsaW5lU3BhY2luZzogbnVtYmVyID0gMCwgc2V0dGluZ3M6IE9iamVjdCA9IG51bGwpIHtcbiAgICAgICAgc3VwZXIoQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lLFxuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHksXG4gICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgVGV4dC5fYWRkU2V0dGluZ3Moe1xuICAgICAgICAgICAgICAgIGZvbnQ6IGZvbnRTaXplICsgJ3B4ICcgKyBmb250TmFtZSxcbiAgICAgICAgICAgICAgICBmaWxsOiBmb250Q29sb3IsXG4gICAgICAgICAgICAgICAgYWxpZ246IGZvbnRBbGlnbixcbiAgICAgICAgICAgICAgICB3b3JkV3JhcDogd29yZFdyYXAsXG4gICAgICAgICAgICAgICAgd29yZFdyYXBXaWR0aDogd2lkdGhcbiAgICAgICAgICAgIH0sIHNldHRpbmdzKVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQucmVwbGFjZSgvJy9nLCBcIlxcJ1wiKTtcbiAgICAgICAgdGhpcy5fbG93ZXJjYXNlVGV4dCA9IHRoaXMudGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB0aGlzLnNldFJlc29sdXRpb24oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZUZyb21EYXRhKGRhdGE6IGFueSk6IFRleHQge1xuICAgICAgICBsZXQgc2VsZjogVGV4dCA9IG5ldyBUZXh0KGRhdGEucG9zaXRpb24ueCwgZGF0YS5wb3NpdGlvbi55LCBkYXRhLmNvcHksIGRhdGEuZm9udE5hbWUsIGRhdGEuZm9udFNpemUsICcjJyArIGRhdGEuZm9udENvbG9yLCBkYXRhLmFsaWdubWVudCwgZGF0YS53cmFwV2lkdGggPiAwLCBkYXRhLndyYXBXaWR0aCA+IDAgPyBkYXRhLndyYXBXaWR0aCA6IG51bGwsIGRhdGEuc3BhY2luZyk7XG4gICAgICAgIHNlbGYubmFtZSA9IGRhdGEubmFtZTtcbiAgICAgICAgaWYgKGRhdGEuc3Ryb2tlICE9IFwiXCIpIHtcbiAgICAgICAgICAgIHNlbGYuc3Ryb2tlID0gZGF0YS5zdHJva2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEuc2hhZG93Q29sb3IpIHtcbiAgICAgICAgICAgIHNlbGYuc2V0U2hhZG93KGRhdGEuc2hhZG93WCwgZGF0YS5zaGFkb3dZLCBkYXRhLnNoYWRvd0NvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5zY2FsZSkge1xuICAgICAgICAgICAgc2VsZi5zY2FsZS5zZXRUbyhkYXRhLnNjYWxlLngsIGRhdGEuc2NhbGUueSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEuYW5jaG9yKSB7XG4gICAgICAgICAgICBzZWxmLnBpdm90ID0gbmV3IFBoYXNlci5Qb2ludChkYXRhLmFuY2hvci54LCBkYXRhLmFuY2hvci55KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgc3dpdGNoIChkYXRhLmFsaWdubWVudCkge1xuICAgICAgICAgICAgY2FzZSAnY2VudGVyJzpcbiAgICAgICAgICAgICAgICBzZWxmLnggLT0gc2VsZi5yZWFsV2lkdGggKiAwLjU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgIHNlbGYueCAtPSBzZWxmLnJlYWxXaWR0aDsgICAgICAgICBcbiAgICAgICAgICAgICAgICBicmVhazsgICAgXG4gICAgICAgIH1cbiAgICAgICAgc2VsZi54ID0gTWF0aC5yb3VuZChzZWxmLngpO1xuICAgICAgICBzZWxmLnkgPSBNYXRoLnJvdW5kKHNlbGYueSk7XG4gICAgICAgIHNlbGYuYWxwaGEgPSBkYXRhLmFscGhhID8gZGF0YS5hbHBoYSA6IDE7XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3NpZ25QcmVmYWIob2JqZWN0OiBhbnkpIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgdGhpcyB0byBoYW5kbGUgYXNzaWdubWVudCBvZiBjaGlsZCBwcmVmYWJzLlxuICAgIH1cbiAgICBcbiAgICAvLyBQaGFzZXIuVGV4dCBvdmVycmlkZXNcbiAgICBwdWJsaWMgc2V0VGV4dCh0ZXh0OiBzdHJpbmcpOiBQaGFzZXIuVGV4dCB7XG4gICAgICAgIHN1cGVyLnNldFRleHQodGV4dCk7XG5cbiAgICAgICAgdGhpcy5fbG93ZXJjYXNlVGV4dCA9IHRoaXMudGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB0aGlzLnNldFJlc29sdXRpb24oKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0UmVzb2x1dGlvbigpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmdhbWUgfHwgIURldmljZS5jb2Nvb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChEZXZpY2UuY29jb29uKSB7XG4gICAgICAgICAgICAvLyBmaXggZm9yIGZvbnRzIGxvb2tpbmcgcmVhbGx5IGJsdXJyeSBpbiBjb2Nvb25KU1xuICAgICAgICAgICAgdGhpcy5yZXNvbHV0aW9uID0gdGhpcy5nYW1lLnJlc29sdXRpb24gKiB0aGlzLmdhbWUucmVzb2x1dGlvbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1x0XHRcbiAgICAvKipcbiAgICAqIHN0YXJ0cyB0aGUgdGV4dCBhbmltYXRpb25cbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJvdGVjdGVkIF9zdGFydFRleHRBbmltYXRpb24oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NhblVwZGF0ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX3JlcGVhdFRpbWVyID0gdGhpcy5nYW1lLnRpbWUuZXZlbnRzLnJlcGVhdCh0aGlzLl9sZXR0ZXJUaW1lICogMTAwLCB0aGlzLl90ZXh0TGVuZ3RoLCB0aGlzLl91cGRhdGVUZXh0QW5pbWF0aW9uLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3VwZGF0ZVRleHRBbmltYXRpb24oKSB7XG4gICAgICAgIGlmICghdGhpcy5fY2FuVXBkYXRlIHx8ICF0aGlzLl90ZXh0VG9BbmltYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5fdGV4dExlbmd0aCAtIHRoaXMuX3RleHRUb0FuaW1hdGUubGVuZ3RoO1xuICAgICAgICB0aGlzLmFkZENvbG9yKHRoaXMuc3R5bGUuZmlsbCwgaW5kZXgpO1xuICAgICAgICB0aGlzLmFkZENvbG9yKCdyZ2JhKDAsMCwwLDApJywgaW5kZXggKyAxKTtcbiAgICAgICAgdGhpcy5fdGV4dFRvQW5pbWF0ZS5zaGlmdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLl90ZXh0VG9BbmltYXRlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5vbkFuaW1hdGlvbkNvbXBsZXRlLmRpc3BhdGNoKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuICAgIC8qKlxuICAgICogc2V0cyB0aGUgY29sb3Igb2YgdGhlIGVudGlyZSB0ZXh0XG4gICAgKiBAcGFyYW0ge1N0cmluZ30gY29sb3IgY3NzIGNvbG9yIHN0cmluZyAoc3VjaCBhcyBcIiNmZjAwMDBcIilcbiAgICAqIEByZXR1cm4ge0Rpam9uLlVJVGV4dC5oaWdobGlnaHRQaHJhc2V9IGNhbGxzIHRoZSBoaWdobGlnaHRQaHJhc2UgbWV0aG9kIGFuZCBcImhpZ2hsaWdodHNcIiB0aGUgZW50aXJlIHRleHQgc3RyaW5nXG4gICAgKi9cbiAgICBwdWJsaWMgc2V0Q29sb3IoY29sb3I6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5oaWdobGlnaHRQaHJhc2UodGhpcy50ZXh0LCBjb2xvciwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogcmVzZXRzIHRoZSBjb2xvciB0byB0aGUgb3JpZ2luYWwgZmlsbCBjb2xvclxuICAgICogQHJldHVybiB7RGlqb24uVUlUZXh0LmhpZ2hsaWdodFBocmFzZX0gY2FsbHMgdGhlIGhpZ2hsaWdodFBocmFzZSBtZXRob2QgYW5kIFwiaGlnaGxpZ2h0c1wiIHRoZSBlbnRpcmUgdGV4dCBzdHJpbmdcbiAgICAqL1xuICAgIHB1YmxpYyByZXNldENvbG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oaWdobGlnaHRQaHJhc2UodGhpcy50ZXh0LCB0aGlzLnN0eWxlLmZpbGwsIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGNoYW5nZXMgdGhlIGNvbG91ciBvZiBhIHBvcnRpb24gb2YgdGhlIHRleHRcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gcGhyYXNlICAgICAgICB0aGUgcGhyYXNlIHdpdGhpbiB0aGUgdGV4dCB0byBjaGFuZ2VcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gY29sb3IgICAgICAgICBjc3MgY29sb3Igc3RyaW5nIChzdWNoIGFzIFwiI2ZmMDAwMFwiKVxuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gW2Nhc2VTZW5zaXRpdmUgPSBmYWxzZV0gd2hldGhlciB0aGUgc2VhcmNoIGZvciB0aGUgcGhyYXNlIHdpdGhpbiB0aGlzIHRleHQgc2hvdWxkIGJlIGNhc2Ugc2Vuc2l0aXZlXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIGhpZ2hsaWdodFBocmFzZShwaHJhc2U6IHN0cmluZywgY29sb3I6IHN0cmluZywgY2FzZVNlbnNpdGl2ZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGxldCB0ZXh0ID0gY2FzZVNlbnNpdGl2ZSA/IHRoaXMudGV4dCA6IHRoaXMuX2xvd2VyY2FzZVRleHQ7XG5cbiAgICAgICAgcGhyYXNlID0gY2FzZVNlbnNpdGl2ZSA/IHBocmFzZSA6IHBocmFzZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGxldCBsZW4gPSBwaHJhc2UubGVuZ3RoO1xuXG4gICAgICAgIGxldCBzdGFydEluZGV4ID0gdGV4dC5pbmRleE9mKHBocmFzZSk7XG4gICAgICAgIGxldCBlbmRJbmRleCA9IHN0YXJ0SW5kZXggKyBsZW47XG5cbiAgICAgICAgd2hpbGUgKHN0YXJ0SW5kZXggPD0gZW5kSW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQ29sb3IoY29sb3IsIHN0YXJ0SW5kZXgpO1xuICAgICAgICAgICAgc3RhcnRJbmRleCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGRDb2xvcih0aGlzLnN0eWxlLmZpbGwsIGVuZEluZGV4KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICogYW5pbWF0ZXMgdGhlIHRleHQgaW4gYnkgcmV2ZWFsaW5nIGVhY2ggY2hhcmFjdGVyIGluIHNlcXVlbmNlXG4gICAgKiBAcGFyYW0gIHtOdW1iZXJ9IFtsZXR0ZXJUaW1lID0gMC4xXSAgdGhlIHRpbWUgKGluIHNlY29uZHMpIGJldHdlZW4gZWFjaCBjaGFyYWN0ZXJcbiAgICAqIEBwYXJhbSAge2ludH0gW2RlbGF5ID0gMF0gICAgICAgICAgICB0aGUgZGVsYXkgYmVmb3JlIHN0YXJ0aW5nIHRoZSBhbmltYXRpb25cbiAgICAqL1xuICAgIHB1YmxpYyBhbmltYXRlKGxldHRlclRpbWU6IG51bWJlciA9IDAuMSwgZGVsYXk6IG51bWJlciA9IDApIHtcbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLnJlbW92ZSh0aGlzLl9kZWxheVRpbWVyKTtcbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLnJlbW92ZSh0aGlzLl9yZXBlYXRUaW1lcik7XG5cbiAgICAgICAgdGhpcy5fbGV0dGVyVGltZSA9IGxldHRlclRpbWU7XG4gICAgICAgIHRoaXMuX3RleHRMZW5ndGggPSB0aGlzLnRleHQubGVuZ3RoO1xuICAgICAgICB0aGlzLl90ZXh0VG9BbmltYXRlID0gdGhpcy50ZXh0LnNwbGl0KCcnKTtcblxuICAgICAgICB2YXIgc3RhcnRJbmRleCA9IDA7XG4gICAgICAgIHZhciBlbmRJbmRleCA9IHRoaXMuX3RleHRMZW5ndGg7XG5cbiAgICAgICAgd2hpbGUgKHN0YXJ0SW5kZXggPD0gZW5kSW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQ29sb3IoJ3JnYmEoMCwwLDAsMCknLCBzdGFydEluZGV4KTtcbiAgICAgICAgICAgIHN0YXJ0SW5kZXgrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2RlbGF5VGltZXIgPSB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKGRlbGF5ICogUGhhc2VyLlRpbWVyLlNFQ09ORCwgdGhpcy5fc3RhcnRUZXh0QW5pbWF0aW9uLCB0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHN0b3BzIHRoZSB0ZXh0IGFuaW1hdGlvbiBhbmQgY2xlYXJzIHRoZSB0aW1lcnNcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgc3RvcEFuaW1hdGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fY2FuVXBkYXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3RleHRUb0FuaW1hdGUgPSBudWxsO1xuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMucmVtb3ZlKHRoaXMuX2RlbGF5VGltZXIpO1xuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMucmVtb3ZlKHRoaXMuX3JlcGVhdFRpbWVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHJvdW5kcyB0aGUgcG9zaXRpb25cbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgcm91bmRQaXhlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXQoTWF0aC5yb3VuZCh0aGlzLngpLCBNYXRoLnJvdW5kKHRoaXMueSkpO1xuICAgIH1cblxuICAgIC8vIHN0YXRpYyBtZXRob2RzXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2FkZFNldHRpbmdzKG9iajogT2JqZWN0LCBzZXR0aW5nczogT2JqZWN0KTogT2JqZWN0IHtcbiAgICAgICAgaWYgKCFzZXR0aW5ncylcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG5cbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBzZXR0aW5ncykge1xuICAgICAgICAgICAgaWYgKHNldHRpbmdzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgICAgICAgb2JqW3Byb3BdID0gc2V0dGluZ3NbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGdldCByZWFsSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjYWxlLnkgKiB0aGlzLnRleHR1cmUuZnJhbWUuaGVpZ2h0IC8gdGhpcy5nYW1lLnJlc29sdXRpb247XG4gICAgfVxuXG4gICAgZ2V0IHJlYWxXaWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2FsZS54ICogdGhpcy50ZXh0dXJlLmZyYW1lLndpZHRoIC8gdGhpcy5nYW1lLnJlc29sdXRpb247XG4gICAgfVxufSIsImltcG9ydCB7QXBwbGljYXRpb259IGZyb20gJy4uL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7VGV4dHVyZXN9IGZyb20gJy4vVGV4dHVyZXMnO1xuaW1wb3J0IHtUZXh0fSBmcm9tICcuLi9kaXNwbGF5JztcblxuZXhwb3J0IGNsYXNzIFBsYWNlaG9sZGVycyB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IGdhbWUoKTogUGhhc2VyLkdhbWUge1xuICAgICAgICByZXR1cm4gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbWFnZSh4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCB0ZXh0dXJlOiBhbnksIG5hbWU6IHN0cmluZyA9IFwiXCIpOiBQaGFzZXIuSW1hZ2Uge1xuICAgICAgICBjb25zdCBpbWFnZUluc3RhbmNlID0gbmV3IFBoYXNlci5JbWFnZShQbGFjZWhvbGRlcnMuZ2FtZSwgeCwgeSwgdGV4dHVyZSk7XG4gICAgICAgIGltYWdlSW5zdGFuY2UubmFtZSA9IG5hbWU7XG4gICAgICAgIHJldHVybiBpbWFnZUluc3RhbmNlO1xuICAgIH1cblxuICAgIHN0YXRpYyBidXR0b24oeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgd2lkdGg6IG51bWJlciA9IDEwMCwgaGVpZ2h0OiBudW1iZXIgPSA1MCwgYXV0b1NpemU6IGJvb2xlYW4gPSBmYWxzZSwgdGV4dDogc3RyaW5nID0gJ2J1dHRvbicsIGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGwsIGNhbGxiYWNrQ29udGV4dDogYW55ID0gbnVsbCwgZGVmYXVsdENvbG9yOiBudW1iZXIgPSAweGZmZmZmZiwgb3ZlckNvbG9yOiBudW1iZXIgPSAweGZmMDAwMCwgZG93bkNvbG9yOiBudW1iZXIgPSAweDAwZmYwMCk6IFBoYXNlci5TcHJpdGUge1xuICAgICAgICBjb25zdCBzcHJpdGU6IFBoYXNlci5TcHJpdGUgPSBuZXcgUGhhc2VyLlNwcml0ZShQbGFjZWhvbGRlcnMuZ2FtZSwgeCwgeSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSB0ZXh0IGluc3RhbmNlIHdpdGggYW4gYXV0byBzaXplIG9mIDI1IG9yIDYwJSBvZiB0aGUgaGVpZ2h0IHBhc3NlZCBpbi5cbiAgICAgICAgY29uc3QgdGV4dEluc3RhbmNlOiBUZXh0ID0gbmV3IFRleHQod2lkdGggKiAwLjUsIGhlaWdodCAqIDAuNTUsIFwiIFwiICsgdGV4dCArIFwiIFwiLCAnQXJpYWwnLCBhdXRvU2l6ZSA/IDI1IDogaGVpZ2h0ICogMC42LCAnIzAwMDAwMCcpO1xuICAgICAgICB0ZXh0SW5zdGFuY2UuY2VudGVyUGl2b3QoKTtcbiAgICAgICAgdGV4dEluc3RhbmNlLm5hbWUgPSBcIkxhYmVsXCI7XG5cbiAgICAgICAgaWYgKGF1dG9TaXplKSB7XG4gICAgICAgICAgICAvLyBVc2UgYSBwYWRkaW5nIG9mIDEwXG4gICAgICAgICAgICB3aWR0aCA9IHRleHRJbnN0YW5jZS5yZWFsV2lkdGggKyAxMDtcbiAgICAgICAgICAgIGhlaWdodCA9IHRleHRJbnN0YW5jZS5yZWFsSGVpZ2h0ICsgMTA7XG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHRleHQgcG9zaXRpb25cbiAgICAgICAgICAgIHRleHRJbnN0YW5jZS5wb3NpdGlvbi5zZXQod2lkdGggKiAwLjUsIGhlaWdodCAqIDAuNTUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXBJbWFnZTogUGhhc2VyLkltYWdlID0gUGxhY2Vob2xkZXJzLmltYWdlKDAsIDAsIFRleHR1cmVzLnJvdW5kZWRSZWN0KHdpZHRoLCBoZWlnaHQsIDEwLCBkZWZhdWx0Q29sb3IpLCBcIlVwXCIpO1xuICAgICAgICBjb25zdCBvdmVySW1hZ2U6IFBoYXNlci5JbWFnZSA9IFBsYWNlaG9sZGVycy5pbWFnZSgwLCAwLCBUZXh0dXJlcy5yb3VuZGVkUmVjdCh3aWR0aCwgaGVpZ2h0LCAxMCwgb3ZlckNvbG9yKSwgXCJPdmVyXCIpO1xuICAgICAgICBjb25zdCBkb3duSW1hZ2U6IFBoYXNlci5JbWFnZSA9IFBsYWNlaG9sZGVycy5pbWFnZSgwLCAwLCBUZXh0dXJlcy5yb3VuZGVkUmVjdCh3aWR0aCwgaGVpZ2h0LCAxMCwgZG93bkNvbG9yKSwgXCJEb3duXCIpO1xuXG5cbiAgICAgICAgb3ZlckltYWdlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgZG93bkltYWdlLnZpc2libGUgPSBmYWxzZTtcblxuICAgICAgICBzcHJpdGUuYWRkQ2hpbGQodXBJbWFnZSk7XG4gICAgICAgIHNwcml0ZS5hZGRDaGlsZChvdmVySW1hZ2UpO1xuICAgICAgICBzcHJpdGUuYWRkQ2hpbGQoZG93bkltYWdlKTtcbiAgICAgICAgc3ByaXRlLmFkZENoaWxkKHRleHRJbnN0YW5jZSk7XG5cbiAgICAgICAgc3ByaXRlLmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHNwcml0ZS5pbnB1dC51c2VIYW5kQ3Vyc29yID0gdHJ1ZTtcblxuICAgICAgICBzcHJpdGUuZXZlbnRzLm9uSW5wdXRVcC5hZGQoKCkgPT4ge1xuICAgICAgICAgICAgZG93bkltYWdlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIG92ZXJJbWFnZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB1cEltYWdlLnZpc2libGUgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGNhbGxiYWNrQ29udGV4dCwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNwcml0ZS5ldmVudHMub25JbnB1dERvd24uYWRkKCgpID0+IHtcbiAgICAgICAgICAgIGRvd25JbWFnZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIG92ZXJJbWFnZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB1cEltYWdlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3ByaXRlLmV2ZW50cy5vbklucHV0T3Zlci5hZGQoKCkgPT4ge1xuICAgICAgICAgICAgZG93bkltYWdlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIG92ZXJJbWFnZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHVwSW1hZ2UudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICBzcHJpdGUuZXZlbnRzLm9uSW5wdXRPdXQuYWRkKCgpID0+IHtcbiAgICAgICAgICAgIGRvd25JbWFnZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBvdmVySW1hZ2UudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgdXBJbWFnZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3ByaXRlLmdldEJvdW5kcyA9IGZ1bmN0aW9uKCk6IFBJWEkuUmVjdGFuZ2xlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUElYSS5SZWN0YW5nbGUoMCwgMCwgdXBJbWFnZS53aWR0aCwgdXBJbWFnZS5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzcHJpdGU7XG4gICAgfVxufSIsImltcG9ydCB7QXBwbGljYXRpb259IGZyb20gJy4uL2FwcGxpY2F0aW9uJztcblxuZXhwb3J0IGNsYXNzIFRpbWUge1xuICAgIHB1YmxpYyBzdGF0aWMgZGVsYXllZENhbGwoZGVsYXlJbk1pbGxpc2Vjb25kczogbnVtYmVyLCBjYWxsYmFjazogRnVuY3Rpb24sIGNhbGxiYWNrQ29udGV4dDogYW55LCAuLi5wYXJhbXMpIHtcbiAgICAgICAgaWYgKHBhcmFtcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwYXJhbXMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBwYXJhbXMudW5zaGlmdChkZWxheUluTWlsbGlzZWNvbmRzLCBjYWxsYmFjaywgY2FsbGJhY2tDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lLnRpbWUuZXZlbnRzLmFkZC5hcHBseShBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUudGltZS5ldmVudHMsIHBhcmFtcyk7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBVdGlsIHsgXG4gICAgcHVibGljIHN0YXRpYyBpc051bWJlcih2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoK3ZhbHVlID09PSArdmFsdWUpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBcHBsaWNhdGlvbiB9IGZyb20gJy4uL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7IEdhbWUgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IEdyb3VwLCBUZXh0IH0gZnJvbSAnLi4vZGlzcGxheSc7XG5pbXBvcnQgeyBQbGFjZWhvbGRlcnMsIFRleHR1cmVzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqICBMb2cgd2lsbCB3cml0ZSB0byB0aGUgc3RhbmRhcmQgY29uc29sZSBhcyB3ZWxsIGFzIGEgdmlzdWFsIG9uZSBhbmQgaGFuZGxlIHNob3dpbmcgYW5kIGhpZGluZyBpdC5cbiAqICBAYXV0aG9yIEdhbGVuIE1hbnVlbFxuICovXG5leHBvcnQgY2xhc3MgTG9nIHtcbiAgICBwcml2YXRlIHN0YXRpYyBNQVhfTE9HX0xJTkVTOiBudW1iZXIgPSAyMjtcbiAgICBwcml2YXRlIHN0YXRpYyBMSU5FX1NQQUNJTkc6IG51bWJlciA9IDU7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBzdGF0aWNfbG9nTGluZXM6IHN0cmluZ1tdID0gbnVsbDtcbiAgICBwcml2YXRlIHN0YXRpYyBzdGF0aWNfbG9nTGluZXNUZXh0OiBUZXh0W10gPSBudWxsO1xuICAgIHByaXZhdGUgc3RhdGljIHN0YXRpY19iYWNrT2Zmc2V0OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgc3RhdGljIHN0YXRpY193aW5kb3c6IEdyb3VwID0gbnVsbDtcbiAgICBwcml2YXRlIHN0YXRpYyBzdGF0aWNfd2luZG93Qkc6IFBoYXNlci5JbWFnZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBzdGF0aWMgc3RhdGljX2dhbWVJbnN0YW5jZTogR2FtZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBzdGF0aWMgc3RhdGljX2dhbWVIYWxmSGVpZ2h0OiBudW1iZXIgPSAwO1xuXG4gICAgLyogUFVCTElDIEZVTkNUSU9OUyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgaW5pdCgpIHtcbiAgICAgICAgLy8gQ3JlYXRlIG91ciBpbnRlcm5hbCBjb21wb25lbnRzXG4gICAgICAgIHRoaXMuc3RhdGljX2xvZ0xpbmVzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgICAgICAgdGhpcy5zdGF0aWNfbG9nTGluZXNUZXh0ID0gbmV3IEFycmF5PFRleHQ+KCk7XG4gICAgICAgIHRoaXMuc3RhdGljX2dhbWVJbnN0YW5jZSA9IEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZTtcbiAgICAgICAgdGhpcy5zdGF0aWNfZ2FtZUhhbGZIZWlnaHQgPSB0aGlzLnN0YXRpY19nYW1lSW5zdGFuY2UuaGVpZ2h0ICogMC41IHwgMDtcblxuICAgICAgICB0aGlzLl9jcmVhdGVXaW5kb3dHcm91cCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc2hvdygpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFBcHBsaWNhdGlvbi5zdGF0aWNfZGVidWdNb2RlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0aWNfd2luZG93LnkgPSB0aGlzLnN0YXRpY19nYW1lSGFsZkhlaWdodDtcbiAgICAgICAgdGhpcy5zdGF0aWNfd2luZG93LnZpc2libGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFBcHBsaWNhdGlvbi5zdGF0aWNfZGVidWdNb2RlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0aWNfd2luZG93LnkgPSB0aGlzLnN0YXRpY19nYW1lSW5zdGFuY2UuaGVpZ2h0O1xuICAgICAgICB0aGlzLnN0YXRpY193aW5kb3cudmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZGVidWcocExpbmU6IHN0cmluZywgLi4ucE9wdGlvbmFsUGFyYW1zOiBhbnlbXSk6IHZvaWQge1xuICAgICAgICBpZiAoIUFwcGxpY2F0aW9uLnN0YXRpY19kZWJ1Z01vZGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN0YW5kYXJkIGNvbnNvbGUubG9nXG4gICAgICAgIGlmIChwT3B0aW9uYWxQYXJhbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwTGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwTGluZSwgcE9wdGlvbmFsUGFyYW1zKTtcbiAgICAgICAgfSAgICBcblxuICAgICAgICAvLyBUT0RPOiBGaWd1cmUgb3V0IGhvdyBwT3B0aW9uYWxQYXJhbXMgaXMgaGFuZGxlZCBieSBjb25zb2xlLmxvZ1xuICAgICAgICB2YXIgb3B0aW9uYWxQYXJhbXNTdHJpbmcgPSBcIlwiO1xuXG4gICAgICAgIGZvciAodmFyIGNudCA9IDA7IGNudCA8IHBPcHRpb25hbFBhcmFtcy5sZW5ndGg7IGNudCsrKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IHBPcHRpb25hbFBhcmFtc1tjbnRdO1xuICAgICAgICAgICAgb3B0aW9uYWxQYXJhbXNTdHJpbmcgKz0gXCIgXCI7XG4gICAgICAgICAgICBvcHRpb25hbFBhcmFtc1N0cmluZyArPSBlbGVtZW50LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIEFkZCB0aGUgbGluZVxuICAgICAgICBpZiAocExpbmUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHBMaW5lID0gXCJudWxsXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocExpbmUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcExpbmUgPSBcInVuZGVmaW5lZFwiO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0YXRpY19sb2dMaW5lcy5wdXNoKHBMaW5lICsgb3B0aW9uYWxQYXJhbXNTdHJpbmcpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgX3dpbmRvdyBpZiB2aXNpYmxlXG4gICAgICAgIHRoaXMuX2FkZExpbmUodGhpcy5zdGF0aWNfbG9nTGluZXMubGVuZ3RoLCAnI2ZmZmZmZicpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgd2FybihwTGluZTogc3RyaW5nLCAuLi5wT3B0aW9uYWxQYXJhbXM6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGlmICghQXBwbGljYXRpb24uc3RhdGljX2RlYnVnTW9kZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3RhbmRhcmQgY29uc29sZS53YXJuXG4gICAgICAgIGlmIChwT3B0aW9uYWxQYXJhbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4ocExpbmUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKHBMaW5lLCBwT3B0aW9uYWxQYXJhbXMpO1xuICAgICAgICB9IFxuXG4gICAgICAgIC8vIFRPRE86IEZpZ3VyZSBvdXQgaG93IHBPcHRpb25hbFBhcmFtcyBpcyBoYW5kbGVkIGJ5IGNvbnNvbGUud2FyblxuICAgICAgICB2YXIgb3B0aW9uYWxQYXJhbXNTdHJpbmcgPSBcIlwiO1xuXG4gICAgICAgIGZvciAodmFyIGNudCA9IDA7IGNudCA8IHBPcHRpb25hbFBhcmFtcy5sZW5ndGg7IGNudCsrKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IHBPcHRpb25hbFBhcmFtc1tjbnRdO1xuICAgICAgICAgICAgb3B0aW9uYWxQYXJhbXNTdHJpbmcgKz0gXCIgXCI7XG4gICAgICAgICAgICBvcHRpb25hbFBhcmFtc1N0cmluZyArPSBlbGVtZW50LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgdGhlIGxpbmVcbiAgICAgICAgaWYgKHBMaW5lID09PSBudWxsKSB7XG4gICAgICAgICAgICBwTGluZSA9IFwibnVsbFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBMaW5lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHBMaW5lID0gXCJ1bmRlZmluZWRcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhdGljX2xvZ0xpbmVzLnB1c2gocExpbmUgKyBvcHRpb25hbFBhcmFtc1N0cmluZyk7XG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSBfd2luZG93IGlmIHZpc2libGVcbiAgICAgICAgdGhpcy5fYWRkTGluZSh0aGlzLnN0YXRpY19sb2dMaW5lcy5sZW5ndGgsICcjZmZmZjAwJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBlcnJvcihwTGluZTogc3RyaW5nLCAuLi5wT3B0aW9uYWxQYXJhbXM6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGlmICghQXBwbGljYXRpb24uc3RhdGljX2RlYnVnTW9kZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3RhbmRhcmQgY29uc29sZS5lcnJvclxuICAgICAgICBpZiAocE9wdGlvbmFsUGFyYW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihwTGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKHBMaW5lLCBwT3B0aW9uYWxQYXJhbXMpO1xuICAgICAgICB9IFxuXG4gICAgICAgIC8vIFRPRE86IEZpZ3VyZSBvdXQgaG93IHBPcHRpb25hbFBhcmFtcyBpcyBoYW5kbGVkIGJ5IGNvbnNvbGUuZXJyb3JcbiAgICAgICAgdmFyIG9wdGlvbmFsUGFyYW1zU3RyaW5nID0gXCJcIjtcblxuICAgICAgICBmb3IgKHZhciBjbnQgPSAwOyBjbnQgPCBwT3B0aW9uYWxQYXJhbXMubGVuZ3RoOyBjbnQrKykge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBwT3B0aW9uYWxQYXJhbXNbY250XTtcbiAgICAgICAgICAgIG9wdGlvbmFsUGFyYW1zU3RyaW5nICs9IFwiIFwiO1xuICAgICAgICAgICAgb3B0aW9uYWxQYXJhbXNTdHJpbmcgKz0gZWxlbWVudC50b1N0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIHRoZSBsaW5lXG4gICAgICAgIGlmIChwTGluZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcExpbmUgPSBcIm51bGxcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwTGluZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwTGluZSA9IFwidW5kZWZpbmVkXCI7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXRpY19sb2dMaW5lcy5wdXNoKHBMaW5lICsgb3B0aW9uYWxQYXJhbXNTdHJpbmcpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgX3dpbmRvdyBpZiB2aXNpYmxlXG4gICAgICAgIHRoaXMuX2FkZExpbmUodGhpcy5zdGF0aWNfbG9nTGluZXMubGVuZ3RoLCAnI2ZmMDAwMCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaXNWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0aWNfd2luZG93LnZpc2libGU7XG4gICAgfVxuXG4gICAgLyogUFJJVkFURSBGVU5DVElPTlMgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBfY3JlYXRlV2luZG93R3JvdXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGljX3dpbmRvdyA9IHRoaXMuc3RhdGljX2dhbWVJbnN0YW5jZS5hZGRUb1N0YWdlLmRHcm91cCgwLCB0aGlzLnN0YXRpY19nYW1lSW5zdGFuY2UuaGVpZ2h0LCBcIkxvZyBXaW5kb3dcIik7XG4gICAgICAgIHRoaXMuc3RhdGljX3dpbmRvd0JHID0gPFBoYXNlci5JbWFnZT50aGlzLnN0YXRpY193aW5kb3cuYWRkQ2hpbGQoUGxhY2Vob2xkZXJzLmltYWdlKDAsIHRoaXMuc3RhdGljX2dhbWVIYWxmSGVpZ2h0LCBUZXh0dXJlcy5yZWN0KHRoaXMuc3RhdGljX2dhbWVJbnN0YW5jZS53aWR0aCwgdGhpcy5zdGF0aWNfZ2FtZUhhbGZIZWlnaHQsIDB4MDAwMDAwLCAwLjcsIHRydWUpLCBcIkJHXCIpKTtcbiAgICAgICAgdGhpcy5zdGF0aWNfd2luZG93QkcuYW5jaG9yLnNldCgwLCAxKTtcbiAgICAgICAgdGhpcy5zdGF0aWNfd2luZG93LnZpc2libGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfYWRkTGluZShwSW5kZXg6IG51bWJlciwgcENvbG9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJkaXNwbGF5aW5nXCIsIHRoaXMuc3RhdGljX2xvZ0xpbmVzW3BJbmRleCAtIDFdKTtcbiAgICAgICAgLy8gY3JlYXRlIHRoZSB0ZXh0IG9iamVjdFxuICAgICAgICBjb25zdCBsb2dMaW5lID0gbmV3IFRleHQoNSwgMCwgdGhpcy5zdGF0aWNfbG9nTGluZXNbcEluZGV4IC0gMV0sICdBcmlhbCcsIDE0LCBwQ29sb3IsICdsZWZ0JywgdHJ1ZSwgdGhpcy5zdGF0aWNfZ2FtZUluc3RhbmNlLndpZHRoIC0gMTApO1xuICAgICAgICBsb2dMaW5lLmFuY2hvci5zZXQoMCwgMSk7XG4gICAgICAgIGxvZ0xpbmUubmFtZSA9IFwiTG9nTGluZVwiICsgcEluZGV4O1xuICAgICAgICAvLyBhZGQgaW4gdG8gdGhlIFdpbmRvdyBhbmQgcG9zaXRpb25cbiAgICAgICAgdGhpcy5zdGF0aWNfd2luZG93QkcuYWRkQ2hpbGQobG9nTGluZSk7XG4gICAgICAgIHRoaXMuc3RhdGljX2xvZ0xpbmVzVGV4dC5wdXNoKGxvZ0xpbmUpO1xuICAgICAgICAvLyBzaGlmdCBhbGwgb3RoZXIgbGluZXMgdXBcbiAgICAgICAgZm9yICh2YXIgY250ID0gdGhpcy5zdGF0aWNfd2luZG93QkcuY2hpbGRyZW4ubGVuZ3RoIC0gMjsgY250ID49IDA7IC0tY250KSB7XG4gICAgICAgICAgICBsZXQgbGluZSA9IDxUZXh0PnRoaXMuc3RhdGljX3dpbmRvd0JHLmdldENoaWxkQXQoY250KTtcbiAgICAgICAgICAgIGxpbmUueSAtPSBsb2dMaW5lLnJlYWxIZWlnaHQgLSB0aGlzLkxJTkVfU1BBQ0lORztcblxuICAgICAgICAgICAgLy8gaGlkZSB0aG9zZSB0aGF0IGFyZSB0b28gaGlnaFxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGxpbmUueSAtIDUgKyBsaW5lLnJlYWxIZWlnaHQpID49IHRoaXMuc3RhdGljX2dhbWVIYWxmSGVpZ2h0IC0gbGluZS5yZWFsSGVpZ2h0IC0gMTApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRpY19sb2dMaW5lc1t0aGlzLnN0YXRpY19iYWNrT2Zmc2V0XSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNfbG9nTGluZXNUZXh0W3RoaXMuc3RhdGljX2JhY2tPZmZzZXRdLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRpY19sb2dMaW5lc1RleHRbdGhpcy5zdGF0aWNfYmFja09mZnNldF0gPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKCsrdGhpcy5zdGF0aWNfYmFja09mZnNldCAqIDIgPj0gdGhpcy5zdGF0aWNfbG9nTGluZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGljX2xvZ0xpbmVzID0gdGhpcy5zdGF0aWNfbG9nTGluZXMuc2xpY2UodGhpcy5zdGF0aWNfYmFja09mZnNldCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGljX2xvZ0xpbmVzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNfbG9nTGluZXNUZXh0ID0gdGhpcy5zdGF0aWNfbG9nTGluZXNUZXh0LnNsaWNlKHRoaXMuc3RhdGljX2JhY2tPZmZzZXQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRpY19sb2dMaW5lc1RleHQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRpY19iYWNrT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCB7IEdyb3VwLCBUZXh0LCBTcHJpdGUgfSBmcm9tICcuLi9kaXNwbGF5JztcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBQcmVmYWJCdWlsZGVyIHtcbiAgIFxuICAgIC8vIEFsbCBjbGFzc2VzIHlvdSBpbnRlbmRlZCB0byBpbnN0YW50aWF0ZSBuZWVkIHRvIGV4aXN0IHdpdGggdGhpcyBvYmplY3QuXG4gICAgLy8gSWYgdGhlcmUgdHlwZSBoZXJlIGRvZXMgbm90IG1hdGNoIHRoZSB0eXBlIHBhcmVtIGZyb20gdGhlIGltcG9ydCBmaWxlLCBcbiAgICAvLyB0aGVuIHRoZSBCdWlsZGVyIHdpbGwgc2tpcCBvdmVyIHRoYXQgY2xhc3MuXG4gICAgcHVibGljIHN0YXRpYyBwcmVmYWJDbGFzc2VzOiB7fSA9IHtcbiAgICAgICAgZ3JvdXA6IEdyb3VwLFxuICAgICAgICB0ZXh0OiBUZXh0LFxuICAgICAgICBzcHJpdGU6IFNwcml0ZVxuICAgIH07XG5cbiAgICBwdWJsaWMgc3RhdGljIGFkZFByZWZhYkNsYXNzKG5ld0NsYXNzOiBhbnksIGltcG9ydE5hbWU6IHN0cmluZywgb3ZlcnJpZGVFeGlzdGluZzogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgICAgIGlmIChQcmVmYWJCdWlsZGVyLnByZWZhYkNsYXNzZXMuaGFzT3duUHJvcGVydHkoaW1wb3J0TmFtZSkpIHtcbiAgICAgICAgICAgIGlmIChvdmVycmlkZUV4aXN0aW5nKSB7XG4gICAgICAgICAgICAgICAgUHJlZmFiQnVpbGRlci5wcmVmYWJDbGFzc2VzW2ltcG9ydE5hbWVdID0gbmV3Q2xhc3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJFbnRyeSBmb3I6IFwiICsgaW1wb3J0TmFtZSArIFwiIGFscmVhZHkgZXhpc3RzIGluIFByZWZhYiBDbGFzc2VzXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlVzZSBvdmVycmlkZUV4aXN0aW5nIGZsYWcgaWYgeW91IHdpc2ggcmVwbGFjZSBleGlzdGluZyBlbnRyeVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBQcmVmYWJCdWlsZGVyLnByZWZhYkNsYXNzZXNbaW1wb3J0TmFtZV0gPSBuZXdDbGFzcztcbiAgICAgICAgfVxuICAgIH0gXG4gICAgXG4gICAgLy8gQ3JlYXRlcyBhbGwgb2JqZWN0cyBmb3IgYSBnaXZlbiBzY2VuZSwgb24gdGhhdCBzY2VuZS4gICAgXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVTY2VuZUZyb20oZGF0YToge3ByZWZhYnM6IGFueVtdfSwgc2NlbmU6IFN0YXRlKTogdm9pZCB7XG4gICAgICAgIGlmIChzY2VuZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2NlbmUucHJlZmFicyA9IFtdO1xuICAgICAgICBzY2VuZS5ncm91cHMgPSBbXTtcbiAgICAgICAgUHJlZmFiQnVpbGRlci5jcmVhdGVQcmVmYWJPYmplY3RzKGRhdGEsIHNjZW5lKTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgYSBtYXNzIG9mIHByZWZhYnMgZnJvbSB0aGUgZ2l2ZW4gZGF0YSwgYWRkaW5nIHRoZW0gdG8gdGhlIHNjZW5lIGlmIHRoZWlyIHBhcmVudCBpcyBzZXQgdG8gJ3N0YXRlJy4gIFxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlUHJlZmFiT2JqZWN0cyhkYXRhOiBhbnksIHNjZW5lOiBTdGF0ZSk6IGFueSB7XG4gICAgICAgIGlmIChzY2VuZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRlIG92ZXIgcHJlZmFiIGRhdGEuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEucHJlZmFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChQcmVmYWJCdWlsZGVyLnByZWZhYkNsYXNzZXMuaGFzT3duUHJvcGVydHkoZGF0YS5wcmVmYWJzW2ldLnR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBwcmVmYWJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByZWZhYiA9IHRoaXMuY3JlYXRlUHJlZmFiKGRhdGEucHJlZmFic1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVmYWIgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBwYXJlbnQgaXMgbm90IHRoZSBzdGF0ZSwgdHJ5IHRvIGZpbmQgdGhlIHBhcmVudCBieSBpdHMgbmFtZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnByZWZhYnNbaV0ucGFyZW50ICE9PSBcInN0YXRlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUcnkgdG8gZmluZCBhIHBhcmVudCBncm91cCBmaXJzdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NlbmUuZ3JvdXBzW2RhdGEucHJlZmFic1tpXS5wYXJlbnRdICE9PSBudWxsICYmIHNjZW5lLmdyb3Vwc1tkYXRhLnByZWZhYnNbaV0ucGFyZW50XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLmdyb3Vwc1tkYXRhLnByZWZhYnNbaV0ucGFyZW50XS5hZGRJbnRlcm5hbC5leGlzdGluZyhwcmVmYWIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBub3QgZm91bmQsIHRyeSB0byBmaW5kIGEgcGFyZW50IHByZWZhYi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjZW5lLnByZWZhYnNbZGF0YS5wcmVmYWJzW2ldLnBhcmVudF0gIT09IG51bGwgJiYgc2NlbmUucHJlZmFic1tkYXRhLnByZWZhYnNbaV0ucGFyZW50XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2VuZS5wcmVmYWJzW2RhdGEucHJlZmFic1tpXS5wYXJlbnRdLmFkZENoaWxkKHByZWZhYik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBhbHNvIHdhbnQgdG8gYXNzaWduIHRoaXMgcHJlZmFiIHRvIGl0cyBwYXJlbnQgc2NyaXB0IGZvciBjdXN0b20gaGFuZGxpbmcsIHdlIGRvIHNvIG5vdy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIChFeGFtcGxlOiBBc3NpZ25pbmcgYSBUZXh0IGNvbXBvbmVudCB0byBhIEJ1dHRvbiBjb21wb25lbnQgaW4gb3JkZXIgdG8gdGludCB0aGUgdGV4dCB0byBtYXRjaCBidXR0b24gc3RhdGVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEucHJlZmFic1tpXS5hc3NpZ25Ub1BhcmVudCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLnByZWZhYnNbZGF0YS5wcmVmYWJzW2ldLnBhcmVudF0uYXNzaWduUHJlZmFiKHByZWZhYik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgbm8gcGFyZW50IHByZWZhYiBmb3VuZCwgYWRkIHRvIHN0YXRlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLmFkZC5leGlzdGluZyhwcmVmYWIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmUuYWRkLmV4aXN0aW5nKHByZWZhYik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5wcmVmYWJzW2ldLnR5cGUgPT09IFwiZ3JvdXBcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLmdyb3Vwc1twcmVmYWIubmFtZV0gPSBwcmVmYWI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2VuZS5wcmVmYWJzW3ByZWZhYi5uYW1lXSA9IHByZWZhYjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk5vIFByZWZhYkNsYXNzZXMgZW50cnkgZm91bmQgZm9yOiBcIiArIGRhdGEucHJlZmFic1tpXS50eXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gQ3JlYXRlIGEgc2luZ2xlIHByZWZhYiBmcm9tIHRoZSBzdXBwbGllZCBkYXRhLlxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlUHJlZmFiKGRhdGE6IGFueSk6IGFueSB7XG4gICAgICAgIGxldCBwcmVmYWI6IGFueSA9IG51bGw7XG4gICAgICAgIC8vIGNyZWF0ZSBvYmplY3QgYWNjb3JkaW5nIHRvIGl0cyB0eXBlXG4gICAgICAgIGlmICh0aGlzLnByZWZhYkNsYXNzZXMuaGFzT3duUHJvcGVydHkoZGF0YS50eXBlKSkge1xuICAgICAgICAgICAgcHJlZmFiID0gdGhpcy5wcmVmYWJDbGFzc2VzW2RhdGEudHlwZV0uQ3JlYXRlRnJvbURhdGEoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByZWZhYjtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGV2aWNlIH0gZnJvbSAnZGlqb24vdXRpbHMnO1xuXG4vLyBTZW5kIGEgbmV3IGV2ZW50IG1vZGVsIGFzIHRoZSBib2R5IG9mIHlvdXIgZXZlbnQgdHJhY2tpbmcgbm90aWZpY2F0aW9uLlxuZXhwb3J0IGNsYXNzIEFuYWx5dGljc0V2ZW50TW9kZWwge1xuXG5cdHB1YmxpYyBhY3Rpb246IHN0cmluZztcbiAgICBwdWJsaWMgbGFiZWw6IHN0cmluZztcbiAgICBwdWJsaWMgdmFsdWU6IG51bWJlcjtcbiAgICBcblx0Y29uc3RydWN0b3IocEFjdGlvbjogc3RyaW5nLCBwTGFiZWw6IHN0cmluZyA9IFwiXCIsIHBWYWx1ZTogbnVtYmVyID0gbnVsbCkge1xuICAgIFx0dGhpcy5hY3Rpb24gPSBwQWN0aW9uO1xuICAgICAgICB0aGlzLmxhYmVsID0gcExhYmVsO1xuICAgICAgICB0aGlzLnZhbHVlID0gcFZhbHVlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBbmFseXRpY3NNYW5hZ2VyIHtcbiAgICAvLyBTZXQgdGhpcyBzdGF0aWMgaW4geW91ciBhcHBsaWNhdGlvbi4gSXQgaXMgcmVxdWlyZWQuXG4gICAgcHJvdGVjdGVkIF9jYXRlZ29yeTogc3RyaW5nO1xuXG4gICAgLy8gZm9yIGNvY29vbiBvbmx5XG4gICAgcHJpdmF0ZSBfdHJhY2tlcklkOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgX3N0YXJ0ZWRXaXRoVHJhY2tlcklkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZW5hYmxlZDogYm9vbGVhbiA9IHRydWUsIGNhdGVnb3J5OiBzdHJpbmcgPSBudWxsKSB7IFxuICAgICAgICB0aGlzLl9jYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRDYXRlZ29yeShuZXdDYXQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLl9jYXRlZ29yeSA9IG5ld0NhdDtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIHRyYWNrRXZlbnQoYWN0aW9uOiBzdHJpbmcgPSBudWxsLCBsYWJlbDogc3RyaW5nID0gbnVsbCwgdmFsdWU6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZSB8fCAhdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWFjdGlvbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEFuYWx5dGljc0V4Y2VwdGlvbignTm8gYWN0aW9uIGRlZmluZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLl9jYXRlZ29yeSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEFuYWx5dGljc0V4Y2VwdGlvbignTm8gY2F0ZWdvcnkgZGVmaW5lZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKERldmljZS5jb2Nvb24gJiYgd2luZG93WydhbmFseXRpY3MnXSE9PXVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgYW5hbHl0aWNzID0gd2luZG93WydhbmFseXRpY3MnXTtcbiAgICAgICAgICAgIGFuYWx5dGljcy50cmFja0V2ZW50KHRoaXMuX2NhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2EoJ3NlbmQnLCAnZXZlbnQnLCB0aGlzLl9jYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLmdhKCdzZW5kJywgJ2V2ZW50JywgdGhpcy5fY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nYSgnc2VuZCcsICdldmVudCcsIHRoaXMuX2NhdGVnb3J5LCBhY3Rpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJhY2tPbW5pdHVyZUV2ZW50KGdhbWVOYW1lOiBzdHJpbmcsIGFjdGl2aXR5OiBzdHJpbmcsIGlzR2FtZUV2ZW50OiBib29sZWFuKSB7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy9jb25zb2xlLmxvZygndHJhY2tpbmcgb21uaXR1cmUnLCBnYW1lTmFtZSwgYWN0aXZpdHksIGlzR2FtZUV2ZW50KTtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3dbJ3RyYWNrRmxhc2hFdmVudCddID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgd2luZG93Wyd0cmFja0ZsYXNoRXZlbnQnXShnYW1lTmFtZSwgYWN0aXZpdHksIGlzR2FtZUV2ZW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zdGFydFdpdGhUcmFja2VySWQoKTogdm9pZCB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKERldmljZS5jb2Nvb24gJiYgd2luZG93WydhbmFseXRpY3MnXSE9PXVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IGFuYWx5dGljcyA9IHdpbmRvd1snYW5hbHl0aWNzJ107XG4gICAgICAgICAgICBhbmFseXRpY3Muc3RhcnRUcmFja2VyV2l0aElkKHRoaXMuX3RyYWNrZXJJZCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHNldCB0cmFja2VySWQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl90cmFja2VySWQgPSB2YWx1ZTtcbiAgICAgICAgaWYgKCF0aGlzLl9zdGFydGVkV2l0aFRyYWNrZXJJZCkge1xuICAgICAgICAgICAgdGhpcy5fc3RhcnRXaXRoVHJhY2tlcklkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgdHJhY2tlcklkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl90cmFja2VySWQ7XG4gICAgfVxuXG4gICAgLy8gZ2V0dGVyIC8gc2V0dGVyXG4gICAgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICh3aW5kb3dbJ2dhJ10gfHwgKERldmljZS5jb2Nvb24gJiYgd2luZG93WydhbmFseXRpY3MnXSAhPT0gdW5kZWZpbmVkKSkgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IGdhKCk6IEZ1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvd1snZ2EnXTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBbmFseXRpY3NFeGNlcHRpb24ge1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSAnQW5hbHl0aWNzRXhjZXB0aW9uJztcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbWVzc2FnZTogc3RyaW5nKSB7IH1cbn1cbiIsIi8qKlxuICogV3JhcHMgUGhhc2VyLkxvYWRlclxuKi9cblxuaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xuaW1wb3J0IHtHYW1lfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7SU5vdGlmaWVyLCBJUGF0aENvbmZpZywgSUFzc2V0LCBJQXNzZXRMaXN0LCBJU291bmQsIElUaWxlZG1hcEFzc2V0c30gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQge05vdGlmaWNhdGlvbnN9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7U3BpbmV9IGZyb20gJy4uL2Rpc3BsYXknO1xuLyoqXG4gKiBXcmFwcyBQaGFzZXIuTG9hZGVyXG4qL1xuZXhwb3J0IGNsYXNzIEFzc2V0TWFuYWdlciBpbXBsZW1lbnRzIElOb3RpZmllciB7XG4gICAgcHJvdGVjdGVkIGFwcDogQXBwbGljYXRpb247XG5cbiAgICAvLyBwcml2YXRlIHZhcmlhYmxlc1xuICAgIHByaXZhdGUgX2RhdGEgPSB7fTtcbiAgICBwcml2YXRlIF9iYXNlVVJMOiBzdHJpbmcgPSAnJztcbiAgICBwcml2YXRlIF9wYXRoT2JqOiBJUGF0aENvbmZpZyB8IGFueSA9IHt9O1xuICAgIHByaXZhdGUgX2Fzc2V0UGF0aDogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIF9kYXRhUGF0aDogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIF9zcHJpdGVTaGVldFBhdGg6IHN0cmluZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBfaW1nUGF0aDogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIF92aWRlb1BhdGg6IHN0cmluZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBfc3BpbmVQYXRoOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgX2ZvbnRQYXRoOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgX2JpdG1hcEZvbnRQYXRoOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgX3BoeXNpY3NQYXRoOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgX2F1ZGlvU3ByaXRlUGF0aDogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIF9zb3VuZFBhdGg6IHN0cmluZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBfc291bmREZWNvZGluZ01vZGlmaWVyOiBudW1iZXIgPSAyO1xuICAgIHByaXZhdGUgX3JlczogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIF9yZXNvbHV0aW9uOiBzdHJpbmcgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfbG9hZERhdGEgPSB7fTtcbiAgICBwcml2YXRlIF9hdXRvTG9hZERhdGEgPSB7fTtcbiAgICBwcml2YXRlIF9jb21wbGV0ZWRMb2FkcyA9IHt9O1xuICAgIHByaXZhdGUgX3JlcXVpcmVkRGF0YSA9IHt9O1xuXG4gICAgcHJpdmF0ZSBfY3VycmVudEFzc2V0TGlzdDogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIF9oYXNGaWxlczogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX3NvdW5kc1RvRGVjb2RlOiBBcnJheTxJU291bmQ+ID0gW107XG4gICAgcHJpdmF0ZSBfaXNMb2FkaW5nUXVldWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIF9maWxlQ29tcGxldGVQcm9ncmVzczogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9tYXhQZXJjZW50OiBudW1iZXIgPSAxMDA7XG5cbiAgICBwcml2YXRlIF9udW1Tb3VuZHM6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfc291bmRzRGVjb2RlZDogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgX2NhY2hlQnVzdFZlcnNpb246IHN0cmluZyA9ICcnO1xuXG4gICAgLy8gcHVibGljIHZhcmlhYmxlc1xuICAgIHB1YmxpYyBnYW1lOiBHYW1lO1xuXG4gICAgcHVibGljIG9uTG9hZFN0YXJ0ID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICBwdWJsaWMgb25GaWxlU3RhcnQgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuICAgIHB1YmxpYyBvbkZpbGVDb21wbGV0ZSA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgcHVibGljIG9uTG9hZENvbXBsZXRlID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICBwdWJsaWMgb25Mb2FkQ29tcGxldGVBbmRBdWRpb0RlY29kZWQgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuXG4gICAgcHVibGljIG9uQmFja2dyb3VuZExvYWRTdGFydCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgcHVibGljIG9uQmFja2dyb3VuZEZpbGVTdGFydCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgcHVibGljIG9uQmFja2dyb3VuZEZpbGVDb21wbGV0ZSA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgcHVibGljIG9uQmFja2dyb3VuZExvYWRDb21wbGV0ZSA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgcHVibGljIG9uQmFja2dyb3VuZExvYWRDb21wbGV0ZUFuZEF1ZGlvRGVjb2RlZCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG5cbiAgICAvLyBzdGF0aWMgY29uc3RhbnRzXG4gICAgLy8gYXNzZXQgdHlwZXNcbiAgICBwdWJsaWMgc3RhdGljIEFVRElPOiBzdHJpbmcgPSAnYXVkaW8nO1xuICAgIHB1YmxpYyBzdGF0aWMgU09VTkQ6IHN0cmluZyA9ICdzb3VuZCc7XG4gICAgcHVibGljIHN0YXRpYyBBVURJT19TUFJJVEU6IHN0cmluZyA9ICdhdWRpb1Nwcml0ZSc7XG4gICAgcHVibGljIHN0YXRpYyBJTUFHRTogc3RyaW5nID0gJ2ltYWdlJztcbiAgICBwdWJsaWMgc3RhdGljIFZJREVPOiBzdHJpbmcgPSAndmlkZW8nO1xuICAgIHB1YmxpYyBzdGF0aWMgQVRMQVM6IHN0cmluZyA9ICdhdGxhcyc7XG4gICAgcHVibGljIHN0YXRpYyBURVhUOiBzdHJpbmcgPSAndGV4dCc7XG4gICAgcHVibGljIHN0YXRpYyBKU09OOiBzdHJpbmcgPSAnanNvbic7XG4gICAgcHVibGljIHN0YXRpYyBUSUxFTUFQOiBzdHJpbmcgPSAndGlsZW1hcCc7XG4gICAgcHVibGljIHN0YXRpYyBUSUxFRE1BUDogc3RyaW5nID0gJ3RpbGVkbWFwJztcbiAgICBwdWJsaWMgc3RhdGljIFRJTEVETUFQX1RJTEVTRVQ6IHN0cmluZyA9ICd0aWxlc2V0JztcbiAgICBwdWJsaWMgc3RhdGljIFRJTEVETUFQX0xBWUVSOiBzdHJpbmcgPSAnbGF5ZXInO1xuICAgIHB1YmxpYyBzdGF0aWMgUEhZU0lDUzogc3RyaW5nID0gJ3BoeXNpY3MnO1xuICAgIHB1YmxpYyBzdGF0aWMgU1BJTkU6IHN0cmluZyA9ICdzcGluZSc7XG4gICAgcHVibGljIHN0YXRpYyBCSVRNQVBfRk9OVDogc3RyaW5nID0gJ2JpdG1hcEZvbnQnO1xuICAgIHB1YmxpYyBzdGF0aWMgQVNTRVRfTElTVDogc3RyaW5nID0gJ2Fzc2V0TGlzdCc7XG5cbiAgICAvLyByZXNvbHV0aW9uc1xuICAgIHB1YmxpYyBzdGF0aWMgUkVTT0xVVElPTl8yWDogc3RyaW5nID0gXCJAMnhcIjtcbiAgICBwdWJsaWMgc3RhdGljIFJFU09MVVRJT05fM1g6IHN0cmluZyA9IFwiQDN4XCI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5faW5pdCgpO1xuICAgIH1cbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICAvKipcbiAgICAqIGFkZHMgaW50ZXJuYWwgdmFyaWFibGVzIGFuZCBzaWduYWxzXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIHByaXZhdGUgX2luaXQoKSB7XG4gICAgICAgIHRoaXMuYXBwID0gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5nYW1lID0gdGhpcy5hcHAuZ2FtZTtcbiAgICAgICAgaWYgKHdpbmRvdy5oYXNPd25Qcm9wZXJ0eShcImJhc2VVUkxcIikpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZVVSTCA9IHdpbmRvd1tcImJhc2VVUkxcIl07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJhc2VVUkwgPSAnJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhdGhzID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZXNvbHV0aW9uID0gdGhpcy5nYW1lLnJlc29sdXRpb247XG4gICAgICAgIHRoaXMuX3NvdW5kc1RvRGVjb2RlID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBwYXJzZXMgYW4gYXNzZXQgbGlzdCBieSBrZXkgKHVzdWFsbHkgZnJvbSBkYXRhL2Fzc2V0cy5qc29uKSBhbmQgc3RvcmVzIHRoZW0gaW50ZXJuYWxseVxuICAgICogQHBhcmFtICB7U3RyaW5nfSBrZXkgdGhlIGlkIG9mIHRoZSBsaXN0XG4gICAgKiBAcGFyYW0gIHtBcnJheX0gIGxpc3QgdGhlIGpzb24gYXJyYXkgb2YgYXNzZXRzXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIHByaXZhdGUgX3BhcnNlQXNzZXRMaXN0KGtleTogc3RyaW5nLCBsaXN0OiBJQXNzZXRMaXN0KSB7XG4gICAgICAgIHRoaXMuX2F1dG9Mb2FkRGF0YVtrZXldID0gbGlzdC5hdXRvbG9hZDtcbiAgICAgICAgdGhpcy5fcmVxdWlyZWREYXRhW2tleV0gPSBsaXN0LnJlcXVpcmVkO1xuXG4gICAgICAgIHRoaXMuX2xvYWREYXRhW2tleV0gPSBbXTtcblxuICAgICAgICBsaXN0LmFzc2V0cy5mb3JFYWNoKGFzc2V0ID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2xvYWREYXRhW2tleV0ucHVzaChhc3NldCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogYWRkcyBhc3NldHMgZnJvbSBhIGxpc3QgdG8gdGhlIGxvYWQgbGlzdFxuICAgICogQHBhcmFtICB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgbGlzdCB0byBhZGRcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfbG9hZEFzc2V0cyhpZDogc3RyaW5nKSB7XG4gICAgICAgIHZhciBhc3NldHMgPSB0aGlzLl9sb2FkRGF0YVtpZF0sXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBhc3NldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX2xvYWRBc3NldChhc3NldHNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBzdGFydCB0aGUgYmFja2dyb3VuZCBsb2FkaW5nXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIHByaXZhdGUgX2JhY2tncm91bmRMb2FkU3RhcnQoKSB7XG4gICAgICAgIHRoaXMub25CYWNrZ3JvdW5kTG9hZFN0YXJ0LmRpc3BhdGNoKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiB3aGVuIGEgZmlsZSBjb21wbGV0ZXMgaW4gYW4gYmFja2dyb3VuZCBsb2FkIHF1ZXVlIC0gZGlzcGF0Y2hlcyB0aGUgb25CYWNrZ3JvdW5kRmlsZUNvbXBsZXRlIHNpZ25hbFxuICAgICogQHBhcmFtICB7TnVtYmVyfSBwcm9ncmVzcyAgIHRoZSBwZXJjZW50IHByb2dyZXNzXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGlkICAgICAgICAgdGhlIGZpbGUgaWRcbiAgICAqIEBwYXJhbSAge2ludH0gICAgZmlsZUluZGV4ICB0aGUgaW5kZXggb2YgdGhlIGZpbGUgaW4gdGhlIGxpc3RcbiAgICAqIEBwYXJhbSAge2ludH0gICAgdG90YWxGaWxlcyB0aGUgdG90YWwgbnVtYmVyIG9mIGZpbGVzIGluIHRoZSBsaXN0XG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIHByaXZhdGUgX2JhY2tncm91bmRGaWxlQ29tcGxldGUocHJvZ3Jlc3M6IG51bWJlciwgaWQ6IHN0cmluZywgZmlsZUluZGV4OiBudW1iZXIsIHRvdGFsRmlsZXM6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5nYW1lLmNhY2hlLmNoZWNrS2V5KFBoYXNlci5DYWNoZS5JTUFHRSwgaWQpKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRCYXNlVGV4dHVyZVJlc29sdXRpb24odGhpcy5nYW1lLmNhY2hlLmdldEJhc2VUZXh0dXJlKGlkKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZmlsZUNvbXBsZXRlUHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICAgICAgdGhpcy5vbkJhY2tncm91bmRGaWxlQ29tcGxldGUuZGlzcGF0Y2gocHJvZ3Jlc3MsIGlkLCBmaWxlSW5kZXgsIHRvdGFsRmlsZXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogd2hlbiB0aGUgYmFja2dyb3VuZCBsb2FkIGNvbXBsZXRlcyAtIGRpc3BhdGNoZXMgdGhlIG9uQmFja2dyb3VuZExvYWRDb21wbGV0ZSBzaWduYWwsIHN0YXJ0cyBjaGVja2luZyBmb3IgZGVjb2RlZCBzb3VuZHNcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfYmFja2dyb3VuZExvYWRDb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQub25GaWxlQ29tcGxldGUucmVtb3ZlKHRoaXMuX2JhY2tncm91bmRGaWxlQ29tcGxldGUsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMub25CYWNrZ3JvdW5kTG9hZENvbXBsZXRlLmRpc3BhdGNoKCk7XG4gICAgICAgIHRoaXMuX2NoZWNrU291bmREZWNvZGluZyh0aGlzLm9uQmFja2dyb3VuZExvYWRDb21wbGV0ZUFuZEF1ZGlvRGVjb2RlZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiB3aGVuIHRoZSBhc3NldCBsaXN0IHN0YXJ0cyBsb2FkaW5nLCBkaXNwYXRjaGVzIHRoZSBvbkxvYWRTdGFydCBzaWduYWxcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwcml2YXRlIF9nYW1lTG9hZFN0YXJ0KCkge1xuICAgICAgICB0aGlzLm9uTG9hZFN0YXJ0LmRpc3BhdGNoKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiB3aGVuIGEgZmlsZSBzdGFydHMgbG9hZGluZyAtIGRpc3BhdGNoZXMgdGhlIG9uRmlsZVN0YXJ0IHNpZ25hbFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHByaXZhdGUgX2dhbWVGaWxlU3RhcnQoKSB7XG4gICAgICAgIHRoaXMub25GaWxlU3RhcnQuZGlzcGF0Y2goKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHdoZW4gYSBmaWxlIGNvbXBsZXRlcyBpbiB0aGUgZ2FtZSBsb2FkIC0gZGlzcGF0Y2hlcyB0aGUgb25GaWxlQ29tcGxldGUgc2lnbmFsXG4gICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHByb2dyZXNzICAgdGhlIHBlcmNlbnQgcHJvZ3Jlc3NcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gaWQgICAgICAgICB0aGUgZmlsZSBpZFxuICAgICogQHBhcmFtICB7aW50fSAgICBmaWxlSW5kZXggIHRoZSBpbmRleCBvZiB0aGUgZmlsZSBpbiB0aGUgbGlzdFxuICAgICogQHBhcmFtICB7aW50fSAgICB0b3RhbEZpbGVzIHRoZSB0b3RhbCBudW1iZXIgb2YgZmlsZXMgaW4gdGhlIGxpc3RcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfZ2FtZUZpbGVDb21wbGV0ZShwcm9ncmVzczogbnVtYmVyLCBpZD86IHN0cmluZywgZmlsZUluZGV4PzogbnVtYmVyLCB0b3RhbEZpbGVzPzogbnVtYmVyKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jYWNoZS5jaGVja0tleShQaGFzZXIuQ2FjaGUuSU1BR0UsIGlkKSkge1xuICAgICAgICAgICAgdGhpcy5fc2V0QmFzZVRleHR1cmVSZXNvbHV0aW9uKHRoaXMuZ2FtZS5jYWNoZS5nZXRCYXNlVGV4dHVyZShpZCkpO1xuXG4gICAgICAgIH1cbiAgICAgICAgLy8gZWxzZSBpZiAodGhpcy5nYW1lLmNhY2hlLmNoZWNrS2V5KFBoYXNlci5DYWNoZS5CSVRNQVBGT05ULCBpZCkpe1xuICAgICAgICAvLyAgICAgdGhpcy5fc2V0QmFzZVRleHR1cmVSZXNvbHV0aW9uKHRoaXMuZ2FtZS5jYWNoZS5nZXRCYXNlVGV4dHVyZShpZCwgUGhhc2VyLkNhY2hlLkJJVE1BUEZPTlQpKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdpZCcsIGlkLCB0aGlzLmdhbWUuY2FjaGUuZ2V0QmFzZVRleHR1cmUoaWQsIFBoYXNlci5DYWNoZS5CSVRNQVBGT05UKS5yZXNvbHV0aW9uKTtcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLl9maWxlQ29tcGxldGVQcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgICAgICB0aGlzLm9uRmlsZUNvbXBsZXRlLmRpc3BhdGNoKHRoaXMuZ2V0TG9hZFByb2dyZXNzKCksIGlkLCBmaWxlSW5kZXgsIHRvdGFsRmlsZXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NldEJhc2VUZXh0dXJlUmVzb2x1dGlvbih0ZXh0dXJlOiBQSVhJLkJhc2VUZXh0dXJlKTogdm9pZCB7XG4gICAgICAgIGlmICh0ZXh0dXJlICYmIHRleHR1cmUuc291cmNlLnNyYy5pbmRleE9mKCdAJyArIHRoaXMucmVzb2x1dGlvbiArICd4JykgPj0gMCkge1xuICAgICAgICAgICAgdGV4dHVyZS5yZXNvbHV0aW9uID0gdGhpcy5yZXNvbHV0aW9uO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICogd2hlbiB0aGUgYmFja2dyb3VuZCBsb2FkIGNvbXBsZXRlcyAtIGRpc3BhdGNoZXMgdGhlIG9uTG9hZENvbXBsZXRlIHNpZ25hbCwgc3RhcnRzIGNoZWNraW5nIGZvciBkZWNvZGVkIHNvdW5kc1xuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBwcml2YXRlIF9nYW1lTG9hZENvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLl9jb21wbGV0ZWRMb2Fkc1t0aGlzLl9jdXJyZW50QXNzZXRMaXN0XSA9IHRydWU7XG4gICAgICAgIHRoaXMub25Mb2FkQ29tcGxldGUuZGlzcGF0Y2goKTtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQub25GaWxlU3RhcnQucmVtb3ZlKHRoaXMuX2dhbWVGaWxlU3RhcnQsIHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkZpbGVDb21wbGV0ZS5yZW1vdmUodGhpcy5fZ2FtZUZpbGVDb21wbGV0ZSwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5fY2hlY2tTb3VuZERlY29kaW5nKHRoaXMub25Mb2FkQ29tcGxldGVBbmRBdWRpb0RlY29kZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogY2hlY2tzIGlmIGFsbCB0aGUgc291bmRzIGluIHRoZSBxdWV1ZSBhcmUgZGVjb2RlZFxuICAgICogQHBhcmFtICB7UGhhc2VyLlNpZ25hbH0gZXZlbnRUb0Rpc3BhdGNoIHRoZSBzaWduYWwgdG8gYmUgZGlzcGF0Y2hlZCB3aGVuIGFsbCBzb3VuZHMgYXJlIGRlY29kZWRcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfY2hlY2tTb3VuZERlY29kaW5nKGV2ZW50VG9EaXNwYXRjaDogUGhhc2VyLlNpZ25hbCkge1xuICAgICAgICB2YXIgc291bmQsIGksIGlzQXVkaW9TcHJpdGU7XG5cbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kc1RvRGVjb2RlICYmIHRoaXMuX3NvdW5kc1RvRGVjb2RlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLl9zb3VuZHNUb0RlY29kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlzQXVkaW9TcHJpdGUgPSB0aGlzLl9zb3VuZHNUb0RlY29kZVtpXS5pc0F1ZGlvU3ByaXRlO1xuICAgICAgICAgICAgICAgIHNvdW5kID0gdGhpcy5nYW1lLmFkZC5zb3VuZCh0aGlzLl9zb3VuZHNUb0RlY29kZVtpXS51cmwpO1xuICAgICAgICAgICAgICAgIHNvdW5kLl9faXNBdWRpb1Nwcml0ZSA9IGlzQXVkaW9TcHJpdGU7XG4gICAgICAgICAgICAgICAgc291bmQuZXZlbnRUb0Rpc3BhdGNoID0gZXZlbnRUb0Rpc3BhdGNoO1xuICAgICAgICAgICAgICAgIHNvdW5kLm9uRGVjb2RlZC5hZGRPbmNlKHRoaXMuX29uU291bmREZWNvZGVkLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50VG9EaXNwYXRjaC5kaXNwYXRjaCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiB3aGVuIGEgc291bmQgaXMgZGVjb2RlZCwgdGhpcyBtZXRob2QgcmVtb3ZlcyBpdCBmcm9tIHRoZSBfc291bmRzVG9EZWNvZGUgYXJyYXksIGFuZCBpbmNyZWFzZXMgdGhlIG92ZXJhbGwgcGVyY2VudGFnZSBsb2FkZWRcbiAgICAqIEBwYXJhbSAge1BoYXNlci5Tb3VuZH0gc291bmQgdGhlIHNvdW5kIGJlaW5nIGRlY29kZWRcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfb25Tb3VuZERlY29kZWQoc291bmQ6IElTb3VuZCkge1xuICAgICAgICB2YXIgc291bmRJbmRleCA9IHRoaXMuX3NvdW5kc1RvRGVjb2RlLmluZGV4T2Yoc291bmQua2V5KTtcbiAgICAgICAgdGhpcy5fc291bmRzVG9EZWNvZGUuc3BsaWNlKHNvdW5kSW5kZXgsIDEpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5nYW1lLmF1ZGlvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgdGhpcy5nYW1lLmF1ZGlvLmFkZEF1ZGlvICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaWYgKHNvdW5kLl9faXNBdWRpb1Nwcml0ZSlcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuYWRkLmF1ZGlvU3ByaXRlKHNvdW5kLmtleSk7XG5cbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hdWRpby5hZGRBdWRpbyhzb3VuZC5rZXksIHNvdW5kLl9faXNBdWRpb1Nwcml0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zb3VuZHNEZWNvZGVkKys7XG4gICAgICAgIHRoaXMuX21heFBlcmNlbnQgPSAoMTAwIC0gKHRoaXMuX251bVNvdW5kcyAqIHRoaXMuc291bmREZWNvZGluZ01vZGlmaWVyKSArICh0aGlzLl9zb3VuZHNEZWNvZGVkICogdGhpcy5zb3VuZERlY29kaW5nTW9kaWZpZXIpKTtcbiAgICAgICAgdGhpcy5fZ2FtZUZpbGVDb21wbGV0ZSgxMDApO1xuXG4gICAgICAgIGlmICh0aGlzLl9zb3VuZHNUb0RlY29kZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHNvdW5kLmV2ZW50VG9EaXNwYXRjaC5kaXNwYXRjaCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBzaG9ydGN1dCB0byBnZXQgYW4gYXNzZXQga2V5IHVzaW5nIGEgZmlsZSBuYW1lIChzdHJpcHMgaXRzIGV4dGVuc2lvbilcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gZmlsZU5hbWUgdGhlIHVybCBvZiB0aGUgZmlsZVxuICAgICogQHJldHVybiB7U3Rpcm5nfSAgICAgICAgICB0aGUgYXNzZXQga2V5ICh0aGUgZmlsZW5hbWUgd2l0aCBpdHMgZXh0ZW5zaW9uIHN0cmlwcGVkKVxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIHByaXZhdGUgX2dldEFzc2V0S2V5KGZpbGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAoZmlsZU5hbWUuaW5kZXhPZignLicpIDwgMClcbiAgICAgICAgICAgIHJldHVybiBmaWxlTmFtZTtcbiAgICAgICAgdmFyIGV4dCA9IGZpbGVOYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgIGV4dC5wb3AoKTtcblxuICAgICAgICByZXR1cm4gZXh0LmpvaW4oJycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogZ2V0cyB0aGUgZXh0ZW5zaW9uIG9mIGEgZ2l2ZW4gZmlsZVxuICAgICogQHBhcmFtICB7U3RyaW5nfSBmaWxlTmFtZVxuICAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICB0aGUgZXh0ZW5zaW9uXG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfZ2V0RXh0ZW5zaW9uKGZpbGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZmlsZU5hbWUuc3BsaXQoJy4nKS5wb3AoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGdldHMgdGhlIGV4dGVuc2lvbiBvZiBhIGdpdmVuIGZpbGVcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gZmlsZU5hbWVcbiAgICAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgICAgdGhlIGV4dGVuc2lvblxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIHByaXZhdGUgX2dldFJlc29sdXRpb24ocmVzOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICB2YXIgcmVzdWx0ID0gJyc7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXMgPSBwYXJzZUZsb2F0KHJlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlcyA9IHRoaXMucmVzb2x1dGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXMgPiAxLjUpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IEFzc2V0TWFuYWdlci5SRVNPTFVUSU9OXzJYO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGRldGVybWluZXMgd2hhdCBraW5kIG9mIGFzc2V0IHdlJ3JlIGRlYWxpbmcgd2l0aCBhbmQgYWRkcyBpdCB0byB0aGUgbG9hZCBxdWV1ZVxuICAgICogQHBhcmFtICB7T2JqZWN0fSBhc3NldCB0aGUgYXNzZXQgb2JqZWN0IHdlJ3JlIGdvaW5nIHRvIGxvYWRcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfbG9hZEFzc2V0KGFzc2V0OiBJQXNzZXQpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBhc3NldC50eXBlLFxuICAgICAgICAgICAgdXJsID0gYXNzZXQudXJsIHx8IGFzc2V0LmtleTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLkFTU0VUX0xJU1Q6XG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZEFzc2V0cyhhc3NldC5pZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5TT1VORDpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTb3VuZCh1cmwsIGFzc2V0LmV4dGVuc2lvbnMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuQVVESU9fU1BSSVRFOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEF1ZGlvU3ByaXRlKHVybCwgYXNzZXQuZXh0ZW5zaW9ucyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5JTUFHRTpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRJbWFnZSh1cmwsIHRoaXMuX2dldFJlc29sdXRpb24oYXNzZXQucmVzb2x1dGlvbikpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuVklERU86XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkVmlkZW8odXJsLCB0aGlzLl9nZXRSZXNvbHV0aW9uKGFzc2V0LnJlc29sdXRpb24pKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLkFUTEFTOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEF0bGFzKHVybCwgdGhpcy5fZ2V0UmVzb2x1dGlvbihhc3NldC5yZXNvbHV0aW9uKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5URVhUOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFRleHQodXJsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLkpTT046XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkSlNPTih1cmwpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuVElMRU1BUDpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRUaWxlbWFwKHVybCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5USUxFRE1BUDpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRUaWxlZG1hcCh1cmwsICg8SVRpbGVkbWFwQXNzZXRzPmFzc2V0KS5hc3NldHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuUEhZU0lDUzpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRQaHlzaWNzKHVybCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5TUElORTpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTcGluZSh1cmwsIHRoaXMuX2dldFJlc29sdXRpb24oYXNzZXQucmVzb2x1dGlvbikpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5CSVRNQVBfRk9OVDpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRCaXRtYXBGb250KHVybCwgdGhpcy5fZ2V0UmVzb2x1dGlvbihhc3NldC5yZXNvbHV0aW9uKSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICogcGFyc2VzIHRoZSBkYXRhIGZyb20gdGhlIGV4dGVybmFsIGFzc2V0cyBmaWxlIChub3JtYWxseSBkYXRhL2Fzc2V0cy5qc29uKVxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBwcml2YXRlIF9wYXJzZURhdGEoKSB7XG4gICAgICAgIHZhciBrZXk7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gdGhpcy5fZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5fcGFyc2VBc3NldExpc3Qoa2V5LCB0aGlzLl9kYXRhW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0Q2FjaGVCdXN0ZWRVcmwodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5fY2FjaGVCdXN0VmVyc2lvbiA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuX2NhY2hlQnVzdFZlcnNpb24gPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVybCArICc/dj0nICsgdGhpcy5fY2FjaGVCdXN0VmVyc2lvbjtcbiAgICB9XG4gICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICBwdWJsaWMgbG9hZFRleHQodXJsOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuX2dldEFzc2V0S2V5KHVybCk7XG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUubG9hZC50ZXh0KGtleSwgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5fZGF0YVBhdGggKyAnLycgKyB1cmwpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZEpTT04oa2V5OiBzdHJpbmcpIHtcbiAgICAgICAga2V5ID0gdGhpcy5fZ2V0QXNzZXRLZXkoa2V5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZS5sb2FkLmpzb24oa2V5LCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9kYXRhUGF0aCArICcvJyArIGtleSArICcuanNvbicpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZFRpbGVtYXAoa2V5OiBzdHJpbmcpIHtcbiAgICAgICAga2V5ID0gdGhpcy5fZ2V0QXNzZXRLZXkoa2V5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZS5sb2FkLnRpbGVtYXAoa2V5LCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9kYXRhUGF0aCArICcvdGlsZW1hcC8nICsga2V5ICsgJy5qc29uJyksIG51bGwsIFBoYXNlci5UaWxlbWFwLlRJTEVEX0pTT04pO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkVGlsZWRtYXAoa2V5OiBzdHJpbmcsIGFzc2V0czogSUFzc2V0W10pIHtcbiAgICAgICAgaWYgKFBoYXNlci5QbHVnaW5bJ1RpbGVkJ10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RpbGVkbWFwIHJlcXVpcmVzIHRoZSBwaGFzZXItdGlsZWQgcGx1Z2luIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2VuZ2xlcmNqL3BoYXNlci10aWxlZCcpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2FjaGVLZXk6IGFueSA9IFBoYXNlci5QbHVnaW5bJ1RpbGVkJ10udXRpbHMuY2FjaGVLZXk7XG5cbiAgICAgICAgdGhpcy5nYW1lLmxvYWRbJ3RpbGVkbWFwJ10oY2FjaGVLZXkoa2V5LCAndGlsZWRtYXAnKSwgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5fZGF0YVBhdGggKyAnL3RpbGVtYXAvJyArIGtleSArICcuanNvbicpLCBudWxsLCBQaGFzZXIuVGlsZW1hcC5USUxFRF9KU09OKTtcblxuICAgICAgICBhc3NldHMuZm9yRWFjaChhc3NldCA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGFzc2V0LnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5USUxFRE1BUF9USUxFU0VUOlxuICAgICAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLlRJTEVETUFQX0xBWUVSOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRUaWxlZG1hcEltYWdlKGtleSwgYXNzZXQudHlwZSwgYXNzZXQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZFRpbGVkbWFwSW1hZ2Uoa2V5OiBzdHJpbmcsIHRpbGVzZXRJbWFnZVR5cGU6IHN0cmluZywgYXNzZXQ6IElBc3NldCkge1xuICAgICAgICBjb25zdCBjYWNoZUtleTogYW55ID0gUGhhc2VyLlBsdWdpblsnVGlsZWQnXS51dGlscy5jYWNoZUtleTtcblxuICAgICAgICBsZXQgcmVzb2x1dGlvbjogc3RyaW5nID0gJyc7XG4gICAgICAgIGNvbnN0IG5ld0tleTogc3RyaW5nID0gdGhpcy5fZ2V0QXNzZXRLZXkoYXNzZXQudXJsKTtcbiAgICAgICAgY29uc3QgY0tleTogc3RyaW5nID0gY2FjaGVLZXkoa2V5LCAndGlsZXNldCcsIG5ld0tleSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBhc3NldC5yZXNvbHV0aW9uICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmVzb2x1dGlvbiA9IHRoaXMuX2dldFJlc29sdXRpb24oYXNzZXQucmVzb2x1dGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5fZ2V0QXNzZXRLZXkobmV3S2V5ICsgcmVzb2x1dGlvbiArICcuJyArIHRoaXMuX2dldEV4dGVuc2lvbihhc3NldC51cmwpKTtcbiAgICAgICAgY29uc29sZS5sb2coYXNzZXQudXJsLCBjS2V5KTtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoY0tleSwgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5fc3ByaXRlU2hlZXRQYXRoICsgJy8nICsgdXJsICsgJy5wbmcnKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRQaHlzaWNzKGtleTogc3RyaW5nKSB7XG4gICAgICAgIGtleSA9IHRoaXMuX2dldEFzc2V0S2V5KGtleSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUubG9hZC5waHlzaWNzKGtleSwgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5fcGh5c2ljc1BhdGggKyAnLycgKyBrZXkgKyAnLmpzb24nKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRBdGxhcyh1cmw6IHN0cmluZywgcmVzb2x1dGlvbj86IGFueSk6IFBoYXNlci5Mb2FkZXIgfCBzdHJpbmcge1xuICAgICAgICBpZiAodHlwZW9mIHJlc29sdXRpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXNvbHV0aW9uID0gdGhpcy5fZ2V0UmVzb2x1dGlvbihyZXNvbHV0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5nYW1lLmNhY2hlLmNoZWNrSW1hZ2VLZXkodXJsKSkge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lLmxvYWQuYXRsYXNKU09OSGFzaCh1cmwsIHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKHRoaXMuX3Nwcml0ZVNoZWV0UGF0aCArICcvJyArIHVybCArIHJlc29sdXRpb24gKyAnLnBuZycpLCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9zcHJpdGVTaGVldFBhdGggKyAnLycgKyB1cmwgKyByZXNvbHV0aW9uICsgJy5qc29uJykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkSW1hZ2UodXJsOiBzdHJpbmcsIHJlc29sdXRpb24/OiBhbnkpOiBQaGFzZXIuTG9hZGVyIHwgc3RyaW5nIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXNvbHV0aW9uICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmVzb2x1dGlvbiA9IHRoaXMuX2dldFJlc29sdXRpb24ocmVzb2x1dGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qga2V5OiBzdHJpbmcgPSB0aGlzLl9nZXRBc3NldEtleSh1cmwpO1xuXG4gICAgICAgIGlmICh0aGlzLmdhbWUuY2FjaGUuY2hlY2tJbWFnZUtleShrZXkpKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgaW1hZ2Uga2V5IGFscmVhZHkgZXhpc3RzLCBkb24ndCByZWxvYWQgdGhlIGltYWdlIGFuZCByZXR1cm4gdGhlIGtleVxuICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfVxuICAgICAgICB1cmwgPSBrZXkgKyByZXNvbHV0aW9uICsgJy4nICsgdGhpcy5fZ2V0RXh0ZW5zaW9uKHVybCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZS5sb2FkLmltYWdlKGtleSwgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5faW1nUGF0aCArICcvJyArIHVybCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkVmlkZW8odXJsOiBzdHJpbmcsIHJlc29sdXRpb24/OiBhbnkpOiBQaGFzZXIuTG9hZGVyIHwgc3RyaW5nIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXNvbHV0aW9uICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmVzb2x1dGlvbiA9IHRoaXMuX2dldFJlc29sdXRpb24ocmVzb2x1dGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qga2V5OiBzdHJpbmcgPSB0aGlzLl9nZXRBc3NldEtleSh1cmwpO1xuXG4gICAgICAgIGlmICh0aGlzLmdhbWUuY2FjaGUuY2hlY2tWaWRlb0tleShrZXkpKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgaW1hZ2Uga2V5IGFscmVhZHkgZXhpc3RzLCBkb24ndCByZWxvYWQgdGhlIGltYWdlIGFuZCByZXR1cm4gdGhlIGtleVxuICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfVxuICAgICAgICB1cmwgPSBrZXkgKyByZXNvbHV0aW9uICsgJy4nICsgdGhpcy5fZ2V0RXh0ZW5zaW9uKHVybCk7XG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUubG9hZC52aWRlbyhrZXksIHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKHRoaXMuX3ZpZGVvUGF0aCArICcvJyArIHVybCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkU3BpbmUodXJsOiBzdHJpbmcsIHJlc29sdXRpb24/OiBhbnkpOiBzdHJpbmcgfCB2b2lkIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXNvbHV0aW9uICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmVzb2x1dGlvbiA9IHRoaXMuX2dldFJlc29sdXRpb24ocmVzb2x1dGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc29sdXRpb24gPT09ICcnKSB7XG4gICAgICAgICAgICByZXNvbHV0aW9uID0gJ0AxeCc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qga2V5OiBzdHJpbmcgPSB0aGlzLl9nZXRBc3NldEtleSh1cmwpO1xuXG4gICAgICAgIGlmICh0aGlzLmdhbWUuY2FjaGUuY2hlY2tJbWFnZUtleShrZXkpKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgaW1hZ2Uga2V5IGFscmVhZHkgZXhpc3RzLCBkb24ndCByZWxvYWQgdGhlIGltYWdlIGFuZCByZXR1cm4gdGhlIGtleVxuICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfVxuICAgICAgICB1cmwgPSBrZXkgKyByZXNvbHV0aW9uICsgJy5wbmcnO1xuICAgICAgICBjb25zdCBqc29uVXJsID0ga2V5ICsgJy5qc29uJztcbiAgICAgICAgY29uc3QgYXRsYXNVcmwgPSBrZXkgKyByZXNvbHV0aW9uICsgJy5hdGxhcyc7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmpzb24oa2V5ICsgJy5qc29uJywgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5fc3BpbmVQYXRoICsgJy8nICsganNvblVybCkpO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC50ZXh0KGtleSArICcuYXRsYXMnLCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9zcGluZVBhdGggKyAnLycgKyBhdGxhc1VybCkpO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZShrZXkgKyAnLnBuZycsIHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKHRoaXMuX3NwaW5lUGF0aCArICcvJyArIHVybCkpO1xuXG4gICAgICAgIGlmIChTcGluZS5BVVRPX01FU0ggPT09IHRydWUgJiYga2V5LmluZGV4T2YoU3BpbmUuTk9OX01FU0hfU1VGRklYKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZFNwaW5lKGtleSArIFNwaW5lLk5PTl9NRVNIX1NVRkZJWCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZEJpdG1hcEZvbnQodXJsOiBzdHJpbmcsIHJlc29sdXRpb24/OiBhbnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXNvbHV0aW9uICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmVzb2x1dGlvbiA9IHRoaXMuX2dldFJlc29sdXRpb24ocmVzb2x1dGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuYml0bWFwRm9udCh1cmwsIHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKHRoaXMuX2JpdG1hcEZvbnRQYXRoICsgJy8nICsgdXJsICsgcmVzb2x1dGlvbiArICcucG5nJyksIHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKHRoaXMuX2JpdG1hcEZvbnRQYXRoICsgJy8nICsgdXJsICsgcmVzb2x1dGlvbiArICcuanNvbicpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZEF1ZGlvKHVybDogc3RyaW5nLCBleHRzOiBhbnksIGlzQXVkaW9TcHJpdGU6IGJvb2xlYW4pIHtcbiAgICAgICAgdmFyIHR5cGUsIHBhdGg7XG4gICAgICAgIGlmICh0aGlzLmdhbWUuY2FjaGUuY2hlY2tTb3VuZEtleSh1cmwpICYmIHRoaXMuZ2FtZS5jYWNoZS5nZXRTb3VuZCh1cmwpLmlzRGVjb2RlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHR5cGUgc2hvdWxkIGJlICdzb3VuZCcgb3IgJ3Nwcml0ZScgKCdmeCcgYW5kICdtdXNpYycgdG8gYmUgZGVwcmVjYXRlZClcbiAgICAgICAgLy8gZGVmYXVsdCB0byBzb3VuZFxuXG4gICAgICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHR5cGUgPSAnc291bmQnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV4dHMuaW5kZXhPZignLCcpID49IDApIHtcbiAgICAgICAgICAgIGV4dHMgPSBleHRzLnNwbGl0KCcsJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nYW1lLmRldmljZS5pT1MgJiYgZXh0cy5pbmRleE9mKCdtNGEnKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGV4dHMudW5zaGlmdCgnbTRhJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGV4dHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBwYXRoID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwYXRoLnB1c2godGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwoKGlzQXVkaW9TcHJpdGUgPyB0aGlzLl9hdWRpb1Nwcml0ZVBhdGggOiB0aGlzLl9zb3VuZFBhdGgpICsgJy8nICsgdXJsICsgJy4nICsgZXh0c1tpXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGF0aCA9IHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKChpc0F1ZGlvU3ByaXRlID8gdGhpcy5fYXVkaW9TcHJpdGVQYXRoIDogdGhpcy5fc291bmRQYXRoKSArICcvJyArIHR5cGUgKyAnLycgKyB1cmwgKyAnLicgKyBleHRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0F1ZGlvU3ByaXRlKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5hdWRpb3Nwcml0ZSh1cmwsIHBhdGgsIHRoaXMuX2F1ZGlvU3ByaXRlUGF0aCArICcvJyArIHVybCArICcuanNvbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXVkaW8odXJsLCBwYXRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NvdW5kc1RvRGVjb2RlLnB1c2goe1xuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBpc0F1ZGlvU3ByaXRlOiBpc0F1ZGlvU3ByaXRlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkU291bmQodXJsOiBzdHJpbmcsIGV4dHM6IGFueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkQXVkaW8odXJsLCBleHRzLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRBdWRpb1Nwcml0ZSh1cmw6IHN0cmluZywgZXh0czogYW55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRBdWRpbyh1cmwsIGV4dHMsIHRydWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkQXNzZXRzKGlkOiBzdHJpbmcsIGJhY2tncm91bmQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLl9jdXJyZW50QXNzZXRMaXN0ID0gaWQ7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uRmlsZUNvbXBsZXRlLnJlbW92ZSh0aGlzLl9iYWNrZ3JvdW5kRmlsZUNvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQub25GaWxlQ29tcGxldGUucmVtb3ZlKHRoaXMuX2dhbWVGaWxlQ29tcGxldGUsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2hhc0ZpbGVzID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5fZGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fZGF0YVtpZF0gPT09IHVuZGVmaW5lZCB8fCB0aGlzLl9kYXRhW2lkXS5hc3NldHMgPT09IHVuZGVmaW5lZCB8fCB0aGlzLl9kYXRhW2lkXS5hc3NldHMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdubyBwcmVsb2FkIGRhdGEgcmVnaXN0ZXJlZCBmb3IgJywgaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbG9hZEFzc2V0cyhpZCk7XG4gICAgICAgIHRoaXMuX2hhc0ZpbGVzID0gdGhpcy5nYW1lLmxvYWQudG90YWxRdWV1ZWRGaWxlcygpID4gMDtcblxuICAgICAgICBpZiAoYmFja2dyb3VuZCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQub25Mb2FkU3RhcnQuYWRkT25jZSh0aGlzLl9iYWNrZ3JvdW5kTG9hZFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uRmlsZUNvbXBsZXRlLmFkZCh0aGlzLl9iYWNrZ3JvdW5kRmlsZUNvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uTG9hZENvbXBsZXRlLmFkZE9uY2UodGhpcy5fYmFja2dyb3VuZExvYWRDb21wbGV0ZSwgdGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkxvYWRTdGFydC5hZGRPbmNlKHRoaXMuX2dhbWVMb2FkU3RhcnQsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQub25GaWxlU3RhcnQuYWRkKHRoaXMuX2dhbWVGaWxlU3RhcnQsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQub25GaWxlQ29tcGxldGUuYWRkKHRoaXMuX2dhbWVGaWxlQ29tcGxldGUsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQub25Mb2FkQ29tcGxldGUuYWRkT25jZSh0aGlzLl9nYW1lTG9hZENvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5faGFzRmlsZXMpIHtcbiAgICAgICAgICAgIHRoaXMuX2dhbWVMb2FkU3RhcnQoKTtcbiAgICAgICAgICAgIHRoaXMuX2dhbWVGaWxlQ29tcGxldGUoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuX2dhbWVMb2FkQ29tcGxldGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX251bVNvdW5kcyA9IHRoaXMuX3NvdW5kc1RvRGVjb2RlLmxlbmd0aDtcbiAgICAgICAgdGhpcy5fc291bmRzRGVjb2RlZCA9IDA7XG4gICAgICAgIHRoaXMuX21heFBlcmNlbnQgPSAxMDAgLSAodGhpcy5fbnVtU291bmRzICogdGhpcy5zb3VuZERlY29kaW5nTW9kaWZpZXIpO1xuXG4gICAgICAgIGlmIChiYWNrZ3JvdW5kKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRRdWV1ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzTG9hZGluZ1F1ZXVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2RhdGEgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ25vIHByZWxvYWQgcXVldWUgdG8gbG9hZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFzc2V0czogYW55LFxuICAgICAgICAgICAgc3RhdGU6IHN0cmluZyxcbiAgICAgICAgICAgIGk6IG51bWJlcjtcblxuICAgICAgICBmb3IgKHN0YXRlIGluIHRoaXMuX2RhdGEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9hdXRvTG9hZERhdGFbc3RhdGVdKSB7XG5cbiAgICAgICAgICAgICAgICBhc3NldHMgPSB0aGlzLl9kYXRhW3N0YXRlXS5hc3NldHM7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFzc2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkQXNzZXQoYXNzZXRzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdhbWUubG9hZC5zdGFydCgpO1xuICAgICAgICB0aGlzLl9pc0xvYWRpbmdRdWV1ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uTG9hZFN0YXJ0LmFkZE9uY2UodGhpcy5fYmFja2dyb3VuZExvYWRTdGFydCwgdGhpcyk7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uRmlsZUNvbXBsZXRlLmFkZCh0aGlzLl9iYWNrZ3JvdW5kRmlsZUNvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQub25Mb2FkQ29tcGxldGUuYWRkT25jZSh0aGlzLl9iYWNrZ3JvdW5kTG9hZENvbXBsZXRlLCB0aGlzKTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBnZXRMb2FkUHJvZ3Jlc3MoKSB7XG4gICAgICAgIGNvbnN0IGFkanVzdGVkUHJvZ3Jlc3MgPSB0aGlzLl9maWxlQ29tcGxldGVQcm9ncmVzcyAqIHRoaXMuX21heFBlcmNlbnQgLyAxMDA7XG4gICAgICAgIHJldHVybiBhZGp1c3RlZFByb2dyZXNzO1xuICAgIH1cblxuXG4gICAgcHVibGljIGFsbFNvdW5kc0RlY29kZWQoKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3NvdW5kcyB0byBkZWNvZGUnLCB0aGlzLl9zb3VuZHNUb0RlY29kZS5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fc291bmRzVG9EZWNvZGUubGVuZ3RoID09PSAwO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgKiBzZXRzIHRoZSBkYXRhIGZvciB0aGUgQXNzZXRNYW5hZ2VyIHRvIHVzZSBhcyBhIHJlZmVyZW5jZSAodXN1YWxseSBmcm9tIGRhdGEvYXNzZXRzLmpzb24pXG4gICAgKiB0cmlnZ2VycyB0aGUgX3BhcnNlRGF0YSBpbnRlcm5hbCBtZXRob2QsIHdoaWNoIHN0b3JlcyB0aGUgYXNzZXQgbGlzdCBmb3IgbGF0ZXIgdXNlXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dEZpbGVGcm9tQ2FjaGUgdGhlIGlkIG9mIHRoZSBmaWxlIGluIHRoZSBQaGFzZXIuQ2FjaGVcbiAgICAqL1xuICAgIHB1YmxpYyBzZXREYXRhKGRhdGE6IE9iamVjdCkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5fbG9hZERhdGEgPSB7fTtcbiAgICAgICAgdGhpcy5fcGFyc2VEYXRhKCk7XG5cbiAgICAgICAgdGhpcy5zZW5kTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbnMuQVNTRVRfTUFOQUdFUl9EQVRBX1NFVCwgdGhpcy5fZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBjbGVhcnMgdGhlIGFzc2V0cyBmcm9tIGEgcGFydGljdWxhciBpZCBpbiB0aGUgc3RvcmFnZVxuICAgICogQHBhcmFtICB7U3RyaW5nfSBpZCAgICAgICAgICAgIHRoZSBpZCBvZiB0aGUgYXNzZXQgbGlzdCB0byBjbGVhclxuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gW2NsZWFyQXVkaW8gPSB0cnVlXSAgICB3aGV0aGVyIHRvIGNsZWFyIGF1ZGlvIGZpbGVzXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBbY2xlYXJBdGxhc3NlcyA9IHRydWVdIHdoZXRoZXIgdG8gY2xlYXIgdGV4dHVyZSBhdGxhc3Nlc1xuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gW2NsZWFySW1hZ2VzID0gdHJ1ZV0gICB3aGV0aGVyIHRvIGNsZWFyIGltYWdlc1xuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gW2NsZWFyVGV4dCA9IHRydWVdICAgICB3aGV0aGVyIHRvIGNsZWFyIHRleHQgZmlsZXNcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgY2xlYXJBc3NldHMoaWQ6IHN0cmluZywgY2xlYXJBdWRpbzogYm9vbGVhbiA9IHRydWUsIGNsZWFyQXRsYXNzZXM6IGJvb2xlYW4gPSB0cnVlLCBjbGVhckltYWdlczogYm9vbGVhbiA9IHRydWUsIGNsZWFyVGV4dDogYm9vbGVhbiA9IHRydWUsIGNsZWFySlNPTjogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhW2lkXTtcblxuICAgICAgICBjb25zb2xlLmxvZygnY2xlYXJpbmc6ICcsIGlkLCBkYXRhKTtcblxuICAgICAgICBpZiAoIWRhdGEgfHwgdHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnIHx8ICFkYXRhLmFzc2V0cyB8fCBkYXRhLmFzc2V0cy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ25vIGFzc2V0cycsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhc3NldHMgPSBkYXRhLmFzc2V0cztcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFzc2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NsZWFyaW5nIHR5cGUnLCBhc3NldHNbaV0udHlwZSk7XG4gICAgICAgICAgICBpZiAoYXNzZXRzW2ldLnR5cGUgPT09IEFzc2V0TWFuYWdlci5BU1NFVF9MSVNUKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckFzc2V0cyhhc3NldHNbaV0uaWQsIGNsZWFyQXVkaW8sIGNsZWFyQXRsYXNzZXMsIGNsZWFySW1hZ2VzLCBjbGVhclRleHQsIGNsZWFySlNPTik7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNsZWFyQXNzZXQoYXNzZXRzW2ldLCBjbGVhckF1ZGlvLCBjbGVhckF0bGFzc2VzLCBjbGVhckltYWdlcywgY2xlYXJUZXh0LCBjbGVhckpTT04pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY29tcGxldGVkTG9hZHNbaWRdID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2VuZE5vdGlmaWNhdGlvbihOb3RpZmljYXRpb25zLkFTU0VUX01BTkFHRVJfQVNTRVRTX0NMRUFSRUQsIGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGNsZWFycyBhbiBhc3NldCBmcm9tIHRoZSBnYW1lJ3MgbWVtb3J5XG4gICAgKiBAcGFyYW0gIHtPYmplY3R9IGFzc2V0ICAgICAgICAgdGhlIGFzc2V0IHRvIGNsZWFyXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBbY2xlYXJBdWRpbyA9IHRydWVdICAgIHdoZXRoZXIgdG8gY2xlYXIgYXVkaW8gZmlsZXNcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IFtjbGVhckF0bGFzc2VzID0gdHJ1ZV0gd2hldGhlciB0byBjbGVhciB0ZXh0dXJlIGF0bGFzc2VzXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBbY2xlYXJJbWFnZXMgPSB0cnVlXSAgIHdoZXRoZXIgdG8gY2xlYXIgaW1hZ2VzXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBbY2xlYXJUZXh0ID0gdHJ1ZV0gICAgIHdoZXRoZXIgdG8gY2xlYXIgdGV4dCBmaWxlc1xuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyBjbGVhckFzc2V0KGFzc2V0OiBJQXNzZXQsIGNsZWFyQXVkaW86IGJvb2xlYW4gPSB0cnVlLCBjbGVhckF0bGFzc2VzOiBib29sZWFuID0gdHJ1ZSwgY2xlYXJJbWFnZXM6IGJvb2xlYW4gPSB0cnVlLCBjbGVhclRleHQ6IGJvb2xlYW4gPSB0cnVlLCBjbGVhckpTT046IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHZhciB0eXBlID0gYXNzZXQudHlwZSxcbiAgICAgICAgICAgIHVybCA9IGFzc2V0LnVybCxcbiAgICAgICAgICAgIHJlcXVpcmVkID0gYXNzZXQucmVxdWlyZWQ7XG4gICAgICAgICAgICBcblxuICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGUgJyArIHR5cGUgKyAnIGFzc2V0OiAnICsgdXJsICsgJyBpcyByZXF1aXJlZCBhbmQgd2lsbCBub3QgYmUgY2xlYXJlZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuQVVESU86XG4gICAgICAgICAgICAgICAgaWYgKGNsZWFyQXVkaW8pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLnNvdW5kLnJlbW92ZUJ5S2V5KHVybCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jYWNoZS5yZW1vdmVTb3VuZCh1cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLklNQUdFOlxuICAgICAgICAgICAgICAgIGlmIChjbGVhckltYWdlcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFySW1hZ2UodXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5BVExBUzpcbiAgICAgICAgICAgICAgICBpZiAoY2xlYXJBdGxhc3Nlcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFySW1hZ2UodXJsKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNhY2hlLnJlbW92ZUpTT04odXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5URVhUOlxuICAgICAgICAgICAgICAgIGlmIChjbGVhclRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNhY2hlLnJlbW92ZVRleHQodXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5KU09OOlxuICAgICAgICAgICAgICAgIGlmIChjbGVhckpTT04pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNhY2hlLnJlbW92ZUpTT04odXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5QSFlTSUNTOlxuICAgICAgICAgICAgICAgIGlmIChjbGVhckpTT04pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNhY2hlLnJlbW92ZVBoeXNpY3ModXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5TUElORTpcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyU3BpbmVBc3NldChhc3NldC51cmwpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNsZWFySW1hZ2UodXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgbGV0IGltZzphbnkgPSB0aGlzLmdhbWUuY2FjaGUuZ2V0SW1hZ2UodXJsLCB0cnVlKTtcbiAgICAgICAgdGhpcy5nYW1lLmNhY2hlLnJlbW92ZUltYWdlKHVybCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGltZy5iYXNlKTtcbiAgICAgICAgY29uc29sZS5sb2coaW1nLmJhc2UuaW1hZ2VVcmwpO1xuICAgICAgICBpZiAoaW1nICYmIGltZy5kYXRhLmRpc3Bvc2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaW1nLmRhdGEuZGlzcG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGltZyA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyU3BpbmVBc3NldChpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2FtZS5jYWNoZS5yZW1vdmVKU09OKGlkICsgJy5qc29uJyk7XG4gICAgICAgIHRoaXMuZ2FtZS5jYWNoZS5yZW1vdmVUZXh0KGlkICsgJy5hdGxhcycpO1xuICAgICAgICB0aGlzLmNsZWFySW1hZ2UoaWQgKyAnLnBuZycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogY2hlY2tzIGlmIHRoZSBhc3NldHMgZnJvbSB0aGlzIGxpc3QgaWQgYXJlIGFscmVhZHkgbG9hZGVkXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBpZCB0aGUgYXNzZXQgbGlzdCBpZCB0byBjaGVja1xuICAgICogQHJldHVybiB7Qm9vbGVhbn0gICAgd2hldGhlciBpdCBoYXMgYmVlbiBsb2FkZWQgYWxyZWFkeVxuICAgICovXG4gICAgcHVibGljIGhhc0xvYWRlZEFzc2V0cyhpZDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb21wbGV0ZWRMb2Fkc1tpZF0gPT09IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbmROb3RpZmljYXRpb24obm90aWZpY2F0aW9uTmFtZTogc3RyaW5nLCBub3RpZmljYXRpb25Cb2R5PzogYW55KTogdm9pZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwcC5zZW5kTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbk5hbWUsIG5vdGlmaWNhdGlvbkJvZHkpO1xuICAgIH1cblxuICAgIC8vIGdldHRlciAvIHNldHRlclxuICAgIHB1YmxpYyBzZXQgYmFzZVVSTChiYXNlVVJMOiBzdHJpbmcpIHtcbiAgICAgICAgLy8gZW5zdXJlIHRyYWlsaW5nIHNsYXNoXG4gICAgICAgIGlmIChiYXNlVVJMICYmIGJhc2VVUkwgIT09IHVuZGVmaW5lZCAmJiBiYXNlVVJMLmNoYXJBdChiYXNlVVJMLmxlbmd0aCAtIDEpICE9PSAnLycpXG4gICAgICAgICAgICBiYXNlVVJMICs9ICcvJztcblxuICAgICAgICB0aGlzLl9iYXNlVVJMID0gYmFzZVVSTDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBhdGhzKHBhdGhPYmo6IElQYXRoQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuX3BhdGhPYmogPSBwYXRoT2JqIHx8IHt9O1xuXG4gICAgICAgIHRoaXMuX2Fzc2V0UGF0aCA9IHRoaXMuX2Jhc2VVUkwgKyAodGhpcy5fcGF0aE9iai5hc3NldFBhdGggfHwgJ2Fzc2V0cycpO1xuICAgICAgICB0aGlzLl9kYXRhUGF0aCA9IHRoaXMuX2Jhc2VVUkwgKyAodGhpcy5fcGF0aE9iai5kYXRhUGF0aCB8fCAnYXNzZXRzL2RhdGEnKTtcbiAgICAgICAgdGhpcy5fc3ByaXRlU2hlZXRQYXRoID0gdGhpcy5fYmFzZVVSTCArICh0aGlzLl9wYXRoT2JqLnNwcml0ZXNoZWV0UGF0aCB8fCAnYXNzZXRzL2ltZy9zcHJpdGVzaGVldHMnKTtcbiAgICAgICAgdGhpcy5faW1nUGF0aCA9IHRoaXMuX2Jhc2VVUkwgKyAodGhpcy5fcGF0aE9iai5pbWdQYXRoIHx8ICdhc3NldHMvaW1nJyk7XG4gICAgICAgIHRoaXMuX3ZpZGVvUGF0aCA9IHRoaXMuX2Jhc2VVUkwgKyAodGhpcy5fcGF0aE9iai5pbWdQYXRoIHx8ICdhc3NldHMvdmlkZW8nKTtcbiAgICAgICAgdGhpcy5fc3BpbmVQYXRoID0gdGhpcy5fYmFzZVVSTCArICh0aGlzLl9wYXRoT2JqLnNwaW5lUGF0aCB8fCAnYXNzZXRzL3NwaW5lJyk7XG4gICAgICAgIHRoaXMuX2ZvbnRQYXRoID0gdGhpcy5fYmFzZVVSTCArICh0aGlzLl9wYXRoT2JqLmZvbnRQYXRoIHx8ICdhc3NldHMvZm9udHMnKTtcbiAgICAgICAgdGhpcy5fYml0bWFwRm9udFBhdGggPSB0aGlzLl9iYXNlVVJMICsgKHRoaXMuX3BhdGhPYmouYml0bWFwRm9udFBhdGggfHwgJ2Fzc2V0cy9mb250cy9iaXRtYXAnKTtcbiAgICAgICAgdGhpcy5fYXVkaW9TcHJpdGVQYXRoID0gdGhpcy5fYmFzZVVSTCArICh0aGlzLl9wYXRoT2JqLmF1ZGlvU3ByaXRlUGF0aCB8fCAnYXNzZXRzL2F1ZGlvL3Nwcml0ZScpO1xuICAgICAgICB0aGlzLl9zb3VuZFBhdGggPSB0aGlzLl9iYXNlVVJMICsgKHRoaXMuX3BhdGhPYmouc291bmRQYXRoIHx8ICdhc3NldHMvYXVkaW8vc291bmQnKTtcbiAgICAgICAgdGhpcy5fcGh5c2ljc1BhdGggPSB0aGlzLl9iYXNlVVJMICsgKHRoaXMuX3BhdGhPYmoucGh5c2ljc1BhdGggfHwgJ2Fzc2V0cy9kYXRhL3BoeXNpY3MnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHJlc29sdXRpb24ocmVzOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHJlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXMgPSB0aGlzLmdhbWUucmVzb2x1dGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3JlcyA9IHJlcztcbiAgICAgICAgdGhpcy5fcmVzb2x1dGlvbiA9ICcnO1xuXG4gICAgICAgIGlmICh0aGlzLl9yZXMgPiAxLjUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdXRpb24gPSBBc3NldE1hbmFnZXIuUkVTT0xVVElPTl8yWDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcmVzb2x1dGlvbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzO1xuICAgIH1cbiAgICAvKipcbiAgICAqIHNldHMgdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIGxvYWQgd2Ugc2hvdWxkIGFsbG90IHRvIGVhY2ggc291bmRcbiAgICAqIEBwYXJhbSB7TnVtYmVyfSBbbnVtID0gMl0gdGhlIHBlcmNlbnRhZ2VcbiAgICAqL1xuICAgIHB1YmxpYyBzZXQgc291bmREZWNvZGluZ01vZGlmaWVyKG51bTogbnVtYmVyKSB7XG4gICAgICAgIGlmIChudW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbnVtID0gMjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zb3VuZERlY29kaW5nTW9kaWZpZXIgPSBudW07XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzb3VuZERlY29kaW5nTW9kaWZpZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VuZERlY29kaW5nTW9kaWZpZXI7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBjYWNoZUJ1c3RWZXJzaW9uKHZlcnNpb246IHN0cmluZyB8IG51bWJlcikge1xuICAgICAgICB0aGlzLl9jYWNoZUJ1c3RWZXJzaW9uID0gJycgKyB2ZXJzaW9uO1xuICAgIH1cbn0iLCIvKipcbiAqIEF1ZGlvTWFuYWdlclxuICogV3JhcHBlciBmb3IgUGhhc2VyLlNvdW5kTWFuYWdlclxuICovXG5pbXBvcnQge0FwcGxpY2F0aW9ufSBmcm9tICcuLi9hcHBsaWNhdGlvbic7XG5pbXBvcnQge0dhbWV9IGZyb20gJy4uL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXVkaW9NYW5hZ2VyIHtcbiAgICBwdWJsaWMgZ2FtZTogR2FtZTtcblxuICAgIC8vIERpc3BhdGNoZWQgd2hlbmV2ZXIgdGhlIGF1ZGlvIHNwcml0ZSBlbmFibGVkIGZsYWcgaXMgY2hhbmdlZCAgICBcbiAgICBwdWJsaWMgb25TcHJpdGVUb2dnbGU6IFBoYXNlci5TaWduYWw7XG4gICAgLy8gRGlzcGF0Y2hlZCB3aGVuZXZlciB0aGUgc291bmQgZW5hYmxlZCBmbGFnIGlzIGNoYW5nZWRcbiAgICBwdWJsaWMgb25Tb3VuZFRvZ2dsZTogUGhhc2VyLlNpZ25hbDtcbiAgICAvLyBEaXNwYXRjaGVkIHdoZW5ldmVyIHRoZSBzcHJpdGUgZGVmYXVsdCB2b2x1bWUgaXMgY2hhbmdlZFxuICAgIHB1YmxpYyBvblNwcml0ZVZvbHVtZUNoYW5nZTogUGhhc2VyLlNpZ25hbDtcbiAgICAvLyBEaXNwYXRjaGVkIHdoZW5ldmVyIHRoZSBzb3VuZCBkZWZhdWx0IHZvbHVtZSBpcyBjaGFuZ2VkXG4gICAgcHVibGljIG9uU291bmRWb2x1bWVDaGFuZ2U6IFBoYXNlci5TaWduYWw7XG4gICAgXG4gICAgcHJpdmF0ZSBfc3ByaXRlRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJpdmF0ZSBfc291bmRFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwcml2YXRlIF9zcHJpdGVWb2x1bWU6IG51bWJlciA9IDE7XG4gICAgcHJpdmF0ZSBfc291bmRWb2x1bWU6IG51bWJlciA9IDE7XG5cbiAgICBwcml2YXRlIF9zcHJpdGVzOiB7IFtzcHJpdGU6IHN0cmluZ106IFBoYXNlci5BdWRpb1Nwcml0ZSB9ID0ge307XG4gICAgcHJpdmF0ZSBfc291bmRzOiB7IFtzb3VuZDogc3RyaW5nXTogUGhhc2VyLlNvdW5kIH0gPSB7fTtcbiAgICBwcml2YXRlIF9tYXJrZXJMb29rdXA6IHsgW2lkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZTtcbiAgICAgICAgdGhpcy5vblNwcml0ZVRvZ2dsZSA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgICAgIHRoaXMub25TcHJpdGVWb2x1bWVDaGFuZ2UgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuICAgICAgICB0aGlzLm9uU291bmRUb2dnbGUgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuICAgICAgICB0aGlzLm9uU291bmRWb2x1bWVDaGFuZ2UgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuICAgIH1cblxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuICAgIHByaXZhdGUgX2FkZEF1ZGlvKGtleTogc3RyaW5nLCBpc0F1ZGlvU3ByaXRlOiBib29sZWFuID0gZmFsc2UpOiBQaGFzZXIuU291bmQgfCBQaGFzZXIuQXVkaW9TcHJpdGUge1xuICAgICAgICBpZiAoaXNBdWRpb1Nwcml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcnNlQXVkaW9TcHJpdGUoa2V5LCB0aGlzLmdhbWUuYWRkLmF1ZGlvU3ByaXRlKGtleSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FsbG93TXVsdGlwbGUodGhpcy5nYW1lLmFkZC5zb3VuZChrZXkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3BhcnNlQXVkaW9TcHJpdGUoa2V5OiBzdHJpbmcsIGF1ZGlvU3ByaXRlOiBQaGFzZXIuQXVkaW9TcHJpdGUpOiBQaGFzZXIuQXVkaW9TcHJpdGUge1xuICAgICAgICBmb3IgKHZhciBzb3VuZEtleSBpbiBhdWRpb1Nwcml0ZS5zb3VuZHMpIHtcbiAgICAgICAgICAgIHRoaXMuX2FsbG93TXVsdGlwbGUoYXVkaW9TcHJpdGUuc291bmRzW3NvdW5kS2V5XSk7XG4gICAgICAgICAgICB0aGlzLl9tYXJrZXJMb29rdXBbc291bmRLZXldID0ga2V5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhdWRpb1Nwcml0ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9hbGxvd011bHRpcGxlKHNvdW5kOiBQaGFzZXIuU291bmQpOiBQaGFzZXIuU291bmQge1xuICAgICAgICBzb3VuZC5hbGxvd011bHRpcGxlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHNvdW5kO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldEtleUZyb21NYXJrZXJOYW1lKG1hcmtlcjogc3RyaW5nKTogc3RyaW5nIHwgYm9vbGVhbiB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fbWFya2VyTG9va3VwW21hcmtlcl0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWFya2VyTG9va3VwW21hcmtlcl07XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuX3Nwcml0ZXMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3ByaXRlc1trZXldLnNvdW5kc1ttYXJrZXJdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuX21hcmtlckxvb2t1cFttYXJrZXJdID0ga2V5O1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3BsYXlTcHJpdGVNYXJrZXIoa2V5OiBzdHJpbmcsIG1hcmtlcjogc3RyaW5nLCB2b2x1bWU/OiBhbnksIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSwgZm9yY2VSZXN0YXJ0OiBib29sZWFuID0gdHJ1ZSk6IFBoYXNlci5Tb3VuZCB7XG4gICAgICAgIGlmICh0eXBlb2Ygdm9sdW1lICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2b2x1bWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZvbHVtZS5pbmRleE9mKCcrJykgPj0gMCB8fCB2b2x1bWUuaW5kZXhPZignLScpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lID0gdGhpcy5fc3ByaXRlVm9sdW1lICsgcGFyc2VGbG9hdCh2b2x1bWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZSA9IHBhcnNlRmxvYXQodm9sdW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2b2x1bWUgPSB0aGlzLl9zcHJpdGVWb2x1bWU7XG4gICAgICAgIH1cblxuICAgICAgICBsb29wID0gbG9vcCB8fCBmYWxzZTtcbiAgICAgICAgZm9yY2VSZXN0YXJ0ID0gZm9yY2VSZXN0YXJ0ID09PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlc1trZXldLnBsYXkobWFya2VyLCB2b2x1bWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3N0b3BTcHJpdGVNYXJrZXIoa2V5OiBzdHJpbmcsIG1hcmtlcjogc3RyaW5nKTogYm9vbGVhbiB8IFBoYXNlci5Tb3VuZCB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3ByaXRlcyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHRoaXMuX3Nwcml0ZXNba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlc1trZXldLnN0b3AobWFya2VyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zdG9wU291bmQoc291bmQ6IFBoYXNlci5Tb3VuZCk6IHZvaWQge1xuICAgICAgICByZXR1cm4gc291bmQuc3RvcCgpO1xuICAgIH1cblxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgLyoqXG4gICAgKiBhZGRzIGF1ZGlvIHRvIHRoZSBsb29rdXAgKGNhbGxlZCBieSBBc3NldE1hbmFnZXIgd2hlbiBhbnkgc291bmQgaXMgbG9hZGVkLCB1c3VhbGx5IG5vdCBuZWNlc3NhcnkgdG8gY2FsbCBmcm9tIGEgZ2FtZSlcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgICAgICAgICB0aGUgUGhhc2VyLkNhY2hlIGtleSBvZiB0aGUgYXVkaW8gYXNzZXRcbiAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNBdWRpb1Nwcml0ZSB3aGV0aGVyIHRoZSBhc3NldCBpcyBhbiBhdWRpbyBzcHJpdGVcbiAgICAqL1xuICAgIHB1YmxpYyBhZGRBdWRpbyhrZXk6IHN0cmluZywgaXNBdWRpb1Nwcml0ZTogYm9vbGVhbiA9IGZhbHNlKTogUGhhc2VyLkF1ZGlvU3ByaXRlIHwgUGhhc2VyLlNvdW5kIHtcbiAgICAgICAgaWYgKGlzQXVkaW9TcHJpdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZEF1ZGlvU3ByaXRlKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkU291bmQoa2V5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGFkZHMgYSBzaW5nbGUgc291bmQgdG8gdGhlIGxvb2t1cCAodXN1YWxseSBub3QgbmVjZXNzYXJ5IHRvIGNhbGwgZnJvbSBhIGdhbWUpXG4gICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IHRoZSBQaGFzZXIuQ2FjaGUga2V5IG9mIHRoZSBhc3NldFxuICAgICogQHJldHVybiB7UGhhc2VyLlNvdW5kfSB0aGUgYWRkZWQgc291bmRcbiAgICAqL1xuICAgIHB1YmxpYyBhZGRTb3VuZChrZXkpOiBQaGFzZXIuU291bmQge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3NvdW5kc1trZXldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NvdW5kc1trZXldID0gdGhpcy5nYW1lLmFkZC5hdWRpbyhrZXkpO1xuICAgICAgICB0aGlzLl9zb3VuZHNba2V5XS5hbGxvd011bHRpcGxlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kc1trZXldO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogYWRkcyBhbiBhdWRpbyBzcHJpdGUgdG8gdGhlIGxvb2t1cCAodXN1YWxseSBub3QgbmVjZXNzYXJ5IHRvIGNhbGwgZnJvbSBhIGdhbWUpXG4gICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IHRoZSBQaGFzZXIuQ2FjaGUga2V5IG9mIHRoZSBhc3NldFxuICAgICogQHJldHVybiB7UGhhc2VyLkF1ZGlvU3ByaXRlfSB0aGUgYWRkZWQgYXVkaW8gc3ByaXRlXG4gICAgKi9cbiAgICBwdWJsaWMgYWRkQXVkaW9TcHJpdGUoa2V5OiBzdHJpbmcpOiBQaGFzZXIuQXVkaW9TcHJpdGUge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3Nwcml0ZXNba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3ByaXRlc1trZXldID0gPFBoYXNlci5BdWRpb1Nwcml0ZT50aGlzLl9hZGRBdWRpbyhrZXksIHRydWUpO1xuICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlc1trZXldO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogYSBnbG9iYWwgbWV0aG9kIHRvIHBsYXkgYSBzb3VuZCAtIHdpbGwgY2hlY2sgYXVkaW8gc3ByaXRlIG1hcmtlcnMgZm9yIHRoZSBwcm92aWRlZCBrZXkgZmlyc3QsIHRoZW4gc2luZ2xlIHNvdW5kc1xuICAgICogQHBhcmFtICB7U3RyaW5nfSBtYXJrZXIgICAgICAgdGhlIHNvdW5kIG1hcmtlciAob3Iga2V5KSB0byBjaGVjayBmb3JcbiAgICAqIEBwYXJhbSAge051bWJlcn0gdm9sdW1lICAgICAgIHRoZSB2b2x1bWUgYXQgd2hpY2ggdG8gcGxheSB0aGUgc291bmRcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IGxvb3AgICAgICAgICB3aGV0aGVyIHRoZSBzb3VuZCBzaG91bGQgbG9vcCAod29uJ3Qgd29yayBpZiBpdCdzIGEgc3ByaXRlIG1hcmtlciwgYW5kIFwibG9vcFwiIGhhc24ndCBiZWVuIHNldCBpbiB0aGUgYXVkaW8gc3ByaXRlIGRlc2NyaXB0b3IgZmlsZSlcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IGZvcmNlUmVzdGFydCB3aGV0aGVyIHRvIHJlc3RhcnQgdGhlIHNvdW5kIGlmIGl0J3MgYWxyZWFkeSBwbGF5aW5nXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuU291bmR9ICAgICAgICAgICAgICB0aGUgcGxheWluZyBzb3VuZFxuICAgICovXG4gICAgcHVibGljIHBsYXlBdWRpbyhtYXJrZXI6IHN0cmluZywgdm9sdW1lOiBudW1iZXIgPSB0aGlzLl9zcHJpdGVWb2x1bWUsIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSwgZm9yY2VSZXN0YXJ0OiBib29sZWFuID0gdHJ1ZSk6IFBoYXNlci5Tb3VuZCB7XG4gICAgICAgIGlmICh0aGlzLl9nZXRLZXlGcm9tTWFya2VyTmFtZShtYXJrZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5U3ByaXRlTWFya2VyKG1hcmtlciwgdGhpcy5fc3ByaXRlRW5hYmxlZCA/IHZvbHVtZSA6IDAsIGxvb3AsIGZvcmNlUmVzdGFydCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5wbGF5U291bmQobWFya2VyLCB0aGlzLl9zcHJpdGVFbmFibGVkID8gdm9sdW1lIDogMCwgbG9vcCwgZm9yY2VSZXN0YXJ0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGNhbGxzIERpam9uLkF1ZGlvTWFuYWdlci5wbGF5QXVkaW8gb24gYSBkZWxheVxuICAgICogQHBhcmFtICB7aW50fSBkZWxheSAgICAgICAgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheSB0aGUgc291bmRcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gbWFya2VyICAgICAgIHRoZSBzb3VuZCBtYXJrZXIgKG9yIGtleSkgdG8gY2hlY2sgZm9yXG4gICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHZvbHVtZSAgICAgICB0aGUgdm9sdW1lIGF0IHdoaWNoIHRvIHBsYXkgdGhlIHNvdW5kXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBsb29wICAgICAgICAgd2hldGhlciB0aGUgc291bmQgc2hvdWxkIGxvb3AgKHdvbid0IHdvcmsgaWYgaXQncyBhIHNwcml0ZSBtYXJrZXIsIGFuZCBcImxvb3BcIiBoYXNuJ3QgYmVlbiBzZXQgaW4gdGhlIGF1ZGlvIHNwcml0ZSBkZXNjcmlwdG9yIGZpbGUpXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBmb3JjZVJlc3RhcnQgd2hldGhlciB0byByZXN0YXJ0IHRoZSBzb3VuZCBpZiBpdCdzIGFscmVhZHkgcGxheWluZ1xuICAgICovXG4gICAgcHVibGljIHBsYXlEZWxheWVkQXVkaW8oZGVsYXk6IG51bWJlciwgbWFya2VyOiBzdHJpbmcsIHZvbHVtZTogbnVtYmVyID0gdGhpcy5fc3ByaXRlVm9sdW1lLCBsb29wOiBib29sZWFuID0gZmFsc2UsIGZvcmNlUmVzdGFydDogYm9vbGVhbiA9IHRydWUpOiBQaGFzZXIuU291bmQge1xuICAgICAgICBpZiAodGhpcy5fZ2V0S2V5RnJvbU1hcmtlck5hbWUobWFya2VyKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheURlbGF5ZWRTcHJpdGVNYXJrZXIoZGVsYXksIG1hcmtlciwgdGhpcy5fc3ByaXRlRW5hYmxlZCA/IHZvbHVtZSA6IDAsIGxvb3AsIGZvcmNlUmVzdGFydCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGxheURlbGF5ZWRTb3VuZChkZWxheSwgbWFya2VyLCB0aGlzLl9zcHJpdGVFbmFibGVkID8gdm9sdW1lIDogMCwgbG9vcCwgZm9yY2VSZXN0YXJ0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHBsYXlzIGEgc2luZ2xlIHNvdW5kXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGtleSAgICAgICAgICB0aGUgUGhhc2VyLkNhY2hlIGtleSBmb3IgdGhlIHNvdW5kXG4gICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHZvbHVtZSAgICAgICB0aGUgdm9sdW1lIGF0IHdoaWNoIHRvIHBsYXkgdGhlIHNvdW5kXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBsb29wICAgICAgICAgd2hldGhlciB0aGUgc291bmQgc2hvdWxkIGxvb3AgKHdvbid0IHdvcmsgaWYgaXQncyBhIHNwcml0ZSBtYXJrZXIsIGFuZCBcImxvb3BcIiBoYXNuJ3QgYmVlbiBzZXQgaW4gdGhlIGF1ZGlvIHNwcml0ZSBkZXNjcmlwdG9yIGZpbGUpXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBmb3JjZVJlc3RhcnQgd2hldGhlciB0byByZXN0YXJ0IHRoZSBzb3VuZCBpZiBpdCdzIGFscmVhZHkgcGxheWluZ1xuICAgICogQHJldHVybiB7UGhhc2VyLlNvdW5kfSB0aGUgcGxheWluZyBzb3VuZFxuICAgICovXG4gICAgcHVibGljIHBsYXlTb3VuZChrZXk6IHN0cmluZywgdm9sdW1lOiBudW1iZXIgPSB0aGlzLl9zb3VuZFZvbHVtZSwgbG9vcDogYm9vbGVhbiA9IGZhbHNlLCBmb3JjZVJlc3RhcnQ6IGJvb2xlYW4gPSB0cnVlKTogUGhhc2VyLlNvdW5kIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zb3VuZHNba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kc1trZXldLnBsYXkoXCJcIiwgMCwgdGhpcy5fc291bmRFbmFibGVkID8gdm9sdW1lIDogMCwgbG9vcCwgZm9yY2VSZXN0YXJ0KTtcbiAgICB9XG5cbiAgICAvLyBzaW1pbGF0IHRvIHBsYXlTb3VuZCwgYnV0IGp1c3QgcmV0dXJucyB0aGUgUGhhc2VyLlNvdW5kIGluc3RhbmNlXG4gICAgcHVibGljIGdldFNvdW5kKGtleTogc3RyaW5nLCB2b2x1bWU6IG51bWJlciA9IHRoaXMuX3NvdW5kVm9sdW1lLCBsb29wOiBib29sZWFuID0gZmFsc2UsIGZvcmNlUmVzdGFydDogYm9vbGVhbiA9IHRydWUpOiBQaGFzZXIuU291bmR7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc291bmRzW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VuZHNba2V5XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHBsYXlzIGEgbWFya2VyIGZyb20gYW4gYXVkaW8gc3ByaXRlXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IG1hcmtlciAgICAgICB0aGUgbWFya2VyIHRvIGNoZWNrIGZvciAod2lsbCBjaGVjayBhbGwgYXVkaW8gc3ByaXRlcylcbiAgICAqIEBwYXJhbSAge051bWJlcn0gdm9sdW1lICAgICAgIHRoZSB2b2x1bWUgYXQgd2hpY2ggdG8gcGxheSB0aGUgc291bmRcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IGxvb3AgICAgICAgICB3aGV0aGVyIHRoZSBzb3VuZCBzaG91bGQgbG9vcCAod29uJ3Qgd29yayBpZiBpdCdzIGEgc3ByaXRlIG1hcmtlciwgYW5kIFwibG9vcFwiIGhhc24ndCBiZWVuIHNldCBpbiB0aGUgYXVkaW8gc3ByaXRlIGRlc2NyaXB0b3IgZmlsZSlcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IGZvcmNlUmVzdGFydCB3aGV0aGVyIHRvIHJlc3RhcnQgdGhlIHNvdW5kIGlmIGl0J3MgYWxyZWFkeSBwbGF5aW5nXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuU291bmR9IHRoZSBwbGF5aW5nIHNvdW5kXG4gICAgKi9cbiAgICBwdWJsaWMgcGxheVNwcml0ZU1hcmtlcihtYXJrZXI6IHN0cmluZywgdm9sdW1lOiBudW1iZXIgPSB0aGlzLl9zcHJpdGVWb2x1bWUsIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSwgZm9yY2VSZXN0YXJ0OiBib29sZWFuID0gdHJ1ZSk6IFBoYXNlci5Tb3VuZCB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuX2dldEtleUZyb21NYXJrZXJOYW1lKG1hcmtlcik7XG5cbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtYXJrZXIgbm90IGZvdW5kJywgbWFya2VyKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXlTcHJpdGVNYXJrZXIoPHN0cmluZz5rZXksIG1hcmtlciwgdGhpcy5fc3ByaXRlRW5hYmxlZCA/IHZvbHVtZSA6IDAsIGxvb3AsIGZvcmNlUmVzdGFydCk7XG4gICAgfVxuXG4gICAgcHVibGljIHBsYXlEZWxheWVkU291bmQoZGVsYXk6IG51bWJlciwga2V5OiBzdHJpbmcsIHZvbHVtZTogbnVtYmVyID0gdGhpcy5fc291bmRWb2x1bWUsIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSwgZm9yY2VSZXN0YXJ0OiBib29sZWFuID0gdHJ1ZSk6IFBoYXNlci5Tb3VuZCB7XG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoZGVsYXksIHRoaXMucGxheVNvdW5kLCB0aGlzLCBrZXksIHZvbHVtZSwgbG9vcCwgZm9yY2VSZXN0YXJ0KTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHBsYXlEZWxheWVkU3ByaXRlTWFya2VyKGRlbGF5OiBudW1iZXIsIG1hcmtlcjogc3RyaW5nLCB2b2x1bWU6IG51bWJlciA9IHRoaXMuX3Nwcml0ZVZvbHVtZSwgbG9vcDogYm9vbGVhbiA9IGZhbHNlLCBmb3JjZVJlc3RhcnQ6IGJvb2xlYW4gPSB0cnVlKTogUGhhc2VyLlNvdW5kIHtcbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmFkZChkZWxheSwgdGhpcy5wbGF5U3ByaXRlTWFya2VyLCB0aGlzLCBtYXJrZXIsIHZvbHVtZSwgbG9vcCwgZm9yY2VSZXN0YXJ0KTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBzdG9wcyBhbnkgcGxheWluZyBhdWRpbyBmaWxlIHdpdGggdGhlIGdpdmVuIG1hcmtlclxuICAgICogY2hlY2tzIGF1ZGlvIHNwcml0ZXMgZmlyc3QsIHRoZW4gc2luZ2xlIHNvdW5kc1xuICAgICogQHJldHVybiB7UGhhc2VyLlNvdW5kfSB0aGUgc291bmQgdGhhdCB3YXMgc3RvcHBlZFxuICAgICovXG4gICAgcHVibGljIHN0b3BBdWRpbyhtYXJrZXI6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fZ2V0S2V5RnJvbU1hcmtlck5hbWUobWFya2VyKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcFNwcml0ZU1hcmtlcihtYXJrZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3BTb3VuZChtYXJrZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogc3RvcHMgYSBzaW5nbGUgc291bmQgZnJvbSBwbGF5aW5nXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuU291bmR9IHRoZSBzb3VuZCB0aGF0IHdhcyBzdG9wcGVkXG4gICAgKi9cbiAgICBwdWJsaWMgc3RvcFNvdW5kKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc291bmRzID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgdGhpcy5fc291bmRzW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kc1trZXldLnN0b3AoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHN0b3BzIGEgc2luZ2xlIHNvdW5kIGZyb20gcGxheWluZ1xuICAgICogQHJldHVybiB7UGhhc2VyLlNvdW5kfSB0aGUgc291bmQgdGhhdCB3YXMgc3RvcHBlZFxuICAgICovXG4gICAgcHVibGljIHN0b3BTcHJpdGVNYXJrZXIobWFya2VyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuX2dldEtleUZyb21NYXJrZXJOYW1lKG1hcmtlcik7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbWFya2VyIG5vdCBmb3VuZCcsIG1hcmtlcik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RvcFNwcml0ZU1hcmtlcig8c3RyaW5nPmtleSwgbWFya2VyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHN0b3BzIHJlbW92ZXMgYSBzb3VuZCBmcm9tIERpam9uLkF1ZGlvTWFuYWdlcidzIGxvb2t1cFxuICAgICogQHBhcmFtICB7U3RyaW5nfSBrZXkgdGhlIGtleSBvZiB0aGUgc291bmQgdG8gYmUgcmVtb3ZlZFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyByZW1vdmVTb3VuZChrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zb3VuZHMgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB0aGlzLl9zb3VuZHNba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fc291bmRzW2tleV0pIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcFNvdW5kKGtleSk7XG4gICAgICAgICAgICB0aGlzLl9zb3VuZHNba2V5XS5kZXN0cm95KCk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fc291bmRzW2tleV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHN0b3BzIHJlbW92ZXMgYW4gYXVkaW8gc3ByaXRlIGZyb20gRGlqb24uQXVkaW9NYW5hZ2VyJ3MgbG9va3VwXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGtleSB0aGUga2V5IG9mIHRoZSBzb3VuZCB0byBiZSByZW1vdmVkXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIHJlbW92ZVNwcml0ZShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3Nwcml0ZXMgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB0aGlzLl9zcHJpdGVzW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdG9wU3ByaXRlTWFya2VyKGtleSk7XG4gICAgICAgIHRoaXMuX3Nwcml0ZXNba2V5XSA9IG51bGw7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9zcHJpdGVzW2tleV07XG4gICAgfVxuXG4gICAgcHVibGljIGZhZGUoc291bmQ6IFBoYXNlci5Tb3VuZCwgdm9sdW1lOiBudW1iZXIsIHRpbWU6IG51bWJlciwgc3RvcDogYm9vbGVhbiA9IGZhbHNlKTogUGhhc2VyLlR3ZWVuIHtcbiAgICAgICAgaWYgKCFzb3VuZClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBpZiAoc291bmQuZmFkZVR3ZWVuICYmIHNvdW5kLmZhZGVUd2VlbilcbiAgICAgICAgICAgIHRoaXMuZ2FtZS50d2VlbnMucmVtb3ZlKHNvdW5kLmZhZGVUd2Vlbik7XG5cbiAgICAgICAgc291bmQuZmFkZVR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbihzb3VuZCkudG8oe1xuICAgICAgICAgICAgdm9sdW1lOiB2b2x1bWVcbiAgICAgICAgfSwgdGltZSB8fCAzMDAsIFBoYXNlci5FYXNpbmcuTGluZWFyLk5vbmUpO1xuXG4gICAgICAgIGlmIChzdG9wID09PSB0cnVlKVxuICAgICAgICAgICAgc291bmQuZmFkZVR3ZWVuLm9uQ29tcGxldGUuYWRkT25jZShmdW5jdGlvbiAoKSB7IHRoaXMuX3N0b3BTb3VuZChzb3VuZCkgfSwgdGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIHNvdW5kLmZhZGVUd2Vlbi5zdGFydCgpO1xuICAgIH1cbiAgICBcbiAgICAvKiBHRVQvU0VUICovXG5cbiAgICBwdWJsaWMgc2V0IHNwcml0ZUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fc3ByaXRlRW5hYmxlZCA9IHZhbHVlO1xuICAgICAgICB0aGlzLm9uU3ByaXRlVG9nZ2xlLmRpc3BhdGNoKHRoaXMuX3Nwcml0ZUVuYWJsZWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc291bmRFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3NvdW5kRW5hYmxlZCA9IHZhbHVlO1xuICAgICAgICB0aGlzLm9uU291bmRUb2dnbGUuZGlzcGF0Y2godGhpcy5fc291bmRFbmFibGVkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHNwcml0ZVZvbHVtZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh2YWx1ZSA8IDAgfHwgdmFsdWUgPiAxKSB7XG4gICAgICAgICAgICByZXR1cm47ICAgICBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zcHJpdGVWb2x1bWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5vblNwcml0ZVZvbHVtZUNoYW5nZS5kaXNwYXRjaCh0aGlzLl9zcHJpdGVWb2x1bWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc291bmRWb2x1bWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodmFsdWUgPCAwIHx8IHZhbHVlID4gMSkge1xuICAgICAgICAgICAgcmV0dXJuOyAgICBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zb3VuZFZvbHVtZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm9uU291bmRWb2x1bWVDaGFuZ2UuZGlzcGF0Y2godGhpcy5fc291bmRWb2x1bWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc3ByaXRlRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZUVuYWJsZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzb3VuZEVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VuZEVuYWJsZWQ7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXQgc3ByaXRlVm9sdW1lKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGVWb2x1bWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzb3VuZFZvbHVtZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fc291bmRWb2x1bWU7XG4gICAgfVxufSIsIi8qKlxuICogR2FtZVxuICovXG5pbXBvcnQge0FwcGxpY2F0aW9ufSBmcm9tICcuLi9hcHBsaWNhdGlvbic7XG5pbXBvcnQge0lHYW1lQ29uZmlnfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7QXNzZXRNYW5hZ2VyLCBUcmFuc2l0aW9uTWFuYWdlciwgU2VxdWVuY2VNYW5hZ2VyLCBTdG9yYWdlTWFuYWdlciwgQXVkaW9NYW5hZ2VyLCBBbmFseXRpY3NNYW5hZ2VyLCBHYW1lT2JqZWN0RmFjdG9yeX0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQge0dyb3VwfSBmcm9tICcuLi9kaXNwbGF5JztcbmltcG9ydCB7Tm90aWZpY2F0aW9uc30gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgR2FtZSBleHRlbmRzIFBoYXNlci5HYW1lIHtcbiAgICAvLyBwdWJsaWMgdmFyaWFibGVzICAgIFxuICAgIC8vIGFwcGxpY2F0aW9uXG4gICAgcHVibGljIGFwcDogQXBwbGljYXRpb247XG4gICAgcHVibGljIGNvbmZpZzogSUdhbWVDb25maWc7XG4gICAgXG4gICAgLy8gbWFuYWdlcnNcbiAgICBwdWJsaWMgYXNzZXQ6IEFzc2V0TWFuYWdlcjtcbiAgICBwdWJsaWMgc2VxdWVuY2U6IFNlcXVlbmNlTWFuYWdlcjtcbiAgICBwdWJsaWMgdHJhbnNpdGlvbjogVHJhbnNpdGlvbk1hbmFnZXI7XG4gICAgcHVibGljIHN0b3JhZ2U6IFN0b3JhZ2VNYW5hZ2VyO1xuICAgIHB1YmxpYyBhdWRpbzogQXVkaW9NYW5hZ2VyO1xuICAgIHB1YmxpYyBhbmFseXRpY3M6IEFuYWx5dGljc01hbmFnZXI7XG4gICAgcHVibGljIGFkZDogR2FtZU9iamVjdEZhY3Rvcnk7XG5cbiAgICAvLyBzaWduYWxzXG4gICAgcHVibGljIG9uV29ybGRJbnB1dERpc2FibGVkOiBQaGFzZXIuU2lnbmFsID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICBwdWJsaWMgb25Xb3JsZElucHV0RW5hYmxlZDogUGhhc2VyLlNpZ25hbCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG5cbiAgICAvLyBkaXNwbGF5IGxheWVyc1xuICAgIHB1YmxpYyBiYWNrZ3JvdW5kTGF5ZXI6IEdyb3VwO1xuICAgIHB1YmxpYyBnYW1lTGF5ZXI6IEdyb3VwO1xuICAgIHB1YmxpYyB1aUxheWVyOiBHcm91cDtcbiAgICBwdWJsaWMgc3RhZ2VMYXllcjogR3JvdXA7XG5cbiAgICAvLyBQaGFzZXIuR2FtZSBvdmVycmlkZXNcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IElHYW1lQ29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgfVxuXG4gICAgcHVibGljIGJvb3QoKSB7XG4gICAgICAgIHN1cGVyLmJvb3QoKTtcblxuICAgICAgICB0aGlzLmFwcCA9IEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCk7XG5cbiAgICAgICAgLy8gYWRkIG1hbmFnZXJzXG4gICAgICAgIHRoaXMuYXNzZXQgPSBuZXcgQXNzZXRNYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMuc2VxdWVuY2UgPSBuZXcgU2VxdWVuY2VNYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IG5ldyBUcmFuc2l0aW9uTWFuYWdlcigpO1xuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgU3RvcmFnZU1hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5hdWRpbyA9IG5ldyBBdWRpb01hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5hbmFseXRpY3MgPSBuZXcgQW5hbHl0aWNzTWFuYWdlcih0aGlzLmNvbmZpZy5hbmFseXRpY3MpO1xuXG4gICAgICAgIC8vIHJlcGxhY2UgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5XG4gICAgICAgIHRoaXMuYWRkID0gbnVsbDtcbiAgICAgICAgdGhpcy5hZGQgPSBuZXcgR2FtZU9iamVjdEZhY3RvcnkodGhpcyk7XG4gICAgICAgIHRoaXMuYWRkTGF5ZXJzKCk7XG4gICAgICAgIHRoaXMuYWRkTW91c2VDYWxsYmFja3MoKTtcbiAgICAgICAgdGhpcy5zZXRGYWN0b3J5RGVmYXVsdExheWVyKHRoaXMuZ2FtZUxheWVyKTtcbiAgICB9IFxuXG4gICAgcHVibGljIGFkZFBsdWdpbnMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5wbHVnaW5zICYmIHRoaXMuY29uZmlnLnBsdWdpbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5jb25maWcucGx1Z2lucy5mb3JFYWNoKHBsdWdpbk5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgUGhhc2VyLlBsdWdpbltwbHVnaW5OYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZC5wbHVnaW4oUGhhc2VyLlBsdWdpbltwbHVnaW5OYW1lXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBPdmVycmlkZSB0aGlzLndvcmxkIGFzIHRoZSBkZWZhdWx0IGxheWVyIHRoYXRcbiAgICAvLyAuYWRkIGNhbGxzIHdpbGwgYmUgY3JlYXRlZCBvbi5cbiAgICBwdWJsaWMgc2V0RmFjdG9yeURlZmF1bHRMYXllcihuZXdMYXllcjogUGhhc2VyLkdyb3VwKSB7XG4gICAgICAgIHRoaXMuYWRkLnNldERlZmF1bHRMYXllcihuZXdMYXllciB8fCB0aGlzLndvcmxkKTtcbiAgICB9XG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgcHJvdGVjdGVkIGFkZExheWVycygpOiB2b2lkIHtcbiAgICAgICAgLy8gYWRkcyBwZXJzaXN0ZW50IGJhY2tncm91bmQgbGF5ZXJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kTGF5ZXIgPSB0aGlzLmFkZC5kR3JvdXAoMCwgMCwgJ19iYWNrZ3JvdW5kX2xheWVyJywgdHJ1ZSk7XG4gICAgICAgIHRoaXMuc3RhZ2Uuc2V0Q2hpbGRJbmRleCh0aGlzLmJhY2tncm91bmRMYXllciwgMCk7XG5cbiAgICAgICAgLy8gYWRkcyBnYW1lIGFuZCB1aSBsYXllcnNcbiAgICAgICAgdGhpcy5nYW1lTGF5ZXIgPSB0aGlzLmFkZC5kR3JvdXAoMCwgMCwgJ19nYW1lX2xheWVyJyk7XG4gICAgICAgIC8vIGFkZCB1aSBsYXllciBhbmQgc2V0IHRoZSBcImZpeGVkVG9DYW1lcmFcIiBwcm9wZXJ0eSB0byB0cnVlXG4gICAgICAgIC8vIGlmIHRoZSBnYW1lJ3MgY2FtZXJhIG1vdmVzLCBhbnl0aGluZyBpbiB0aGlzIGdyb3VwIHdpbGwgc3RheSBpbiBwbGFjZVxuICAgICAgICB0aGlzLnVpTGF5ZXIgPSB0aGlzLmFkZC5kR3JvdXAoMCwgMCwgJ191aV9sYXllcicpO1xuICAgICAgICB0aGlzLnVpTGF5ZXIuZml4ZWRUb0NhbWVyYSA9IHRydWU7XG5cbiAgICAgICAgLy8gYWRkIGEgZ3JvdXAgdG8gdGhlIFBoYXNlci5TdGFnZSAoanVzdCBpbiBjYXNlKVxuICAgICAgICB0aGlzLnN0YWdlTGF5ZXIgPSB0aGlzLmFkZC5kR3JvdXAoMCwgMCwgJ19zdGFnZV9sYXllcicsIHRydWUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGRNb3VzZUNhbGxiYWNrcygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZGV2aWNlLmRlc2t0b3ApIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQubW91c2UubW91c2VPdmVyQ2FsbGJhY2sgPSB0aGlzLm1vdXNlT3ZlcjtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQubW91c2UubW91c2VPdXRDYWxsYmFjayA9IHRoaXMubW91c2VPdXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbW91c2VPdXQoKTogdm9pZCB7XG4gICAgICAgIEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuc2VuZE5vdGlmaWNhdGlvbihOb3RpZmljYXRpb25zLk1PVVNFX0xFQVZFX0dMT0JBTCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1vdXNlT3ZlcigpOiB2b2lkIHtcbiAgICAgICAgQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5zZW5kTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbnMuTU9VU0VfRU5URVJfR0xPQkFMKTtcbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuICAgIHB1YmxpYyBkaXNhYmxlRWxlbWVudElucHV0KGVsOiBhbnkpOiBhbnkge1xuICAgICAgICBpZiAoZWwuaW5wdXQgJiYgZWwuaW5wdXRFbmFibGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICBlbC53YXNFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGVsLmlucHV0RW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlRWxlbWVudElucHV0KGVsLmNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBlbmFibGVFbGVtZW50SW5wdXQoZWw6IGFueSk6IGFueSB7XG4gICAgICAgIGlmIChlbC5pbnB1dCAmJiBlbC5pbnB1dEVuYWJsZWQgPT09IGZhbHNlICYmIGVsLndhc0VuYWJsZWQpIHtcbiAgICAgICAgICAgIGVsLndhc0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGVsLmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWwuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZUVsZW1lbnRJbnB1dChlbC5jaGlsZHJlbltpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzYWJsZUlucHV0KGdyb3VwOiBQaGFzZXIuR3JvdXApOiBhbnkge1xuICAgICAgICByZXR1cm4gZ3JvdXAuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIGlmIChlbCBpbnN0YW5jZW9mIFBoYXNlci5Hcm91cCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRpc2FibGVJbnB1dChlbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRpc2FibGVFbGVtZW50SW5wdXQoZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZW5hYmxlSW5wdXQoZ3JvdXA6IFBoYXNlci5Hcm91cCk6IGFueSB7XG4gICAgICAgIHJldHVybiBncm91cC5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgaWYgKGVsIGluc3RhbmNlb2YgUGhhc2VyLkdyb3VwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW5hYmxlSW5wdXQoZWwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbmFibGVFbGVtZW50SW5wdXQoZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzYWJsZUdhbWVJbnB1dCgpIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlSW5wdXQodGhpcy5nYW1lTGF5ZXIpO1xuICAgICAgICB0aGlzLm9uV29ybGRJbnB1dERpc2FibGVkLmRpc3BhdGNoKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGVuYWJsZUdhbWVJbnB1dCgpIHtcbiAgICAgICAgdGhpcy5lbmFibGVJbnB1dCh0aGlzLmdhbWVMYXllcik7XG4gICAgICAgIHRoaXMub25Xb3JsZElucHV0RW5hYmxlZC5kaXNwYXRjaCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJlbW92ZXMgYWxsIGl0ZW1zIGZyb20gdGhlIGdhbWUgbGF5ZXJcbiAgICAgKiBidXQgYWxsb3dzIHRoZSB1aSBsYXllciB0byBwZXJzaXN0XG4gICAgICogdGhhdCB3YXkgd2UgY2FuIG92ZXJsYXkgdGhlIGdhbWUgd2l0aG91dCBhZGRpbmcgc3R1ZmYgdG8gdGhlIHBoYXNlciBzdGFnZSAoZm9yIHRyYW5zaXRpb25zKVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0b1N0YXRlIHRoZSBuZXcgc3RhdGUgd2UncmUgY2hhbmdpbmcgdG9cbiAgICAgKiBAcGFyYW0ge2FueX0gYXJncyBhbiBvcHRpb25hbCBwYXJhbWV0ZXIuIFRoaXMgY2FuIGJlIHVzZWQgdG8gcGFzcyBpbiBhIHRva2VuL29iamVjdCBcbiAgICAgKiBjb250YWluaW5nIHNwZWNpZmljIHBhcmFtZXRlcnMgZm9yIHRoZSBzdGF0ZSB5b3UgYXJlIGNoYW5naW5nIHRvLiBUaGUgaW5pdCgpIGZ1bmN0aW9uIG9mIFxuICAgICAqIHRoYXQgc3RhdGUgbXVzdCBhbHNvIHRha2UgYW4gb2JqZWN0IG9mIHR5cGUgYW55LlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgcHVibGljIGNoYW5nZVN0YXRlKHRvU3RhdGU6IHN0cmluZywgYXJncz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmdhbWVMYXllci5yZW1vdmVBbGwodHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnN0YXJ0KHRvU3RhdGUsIGZhbHNlLCBmYWxzZSwgYXJncyk7XG4gICAgfVxuXG4gICAgLy8gZ2V0dGVyIC8gc2V0dGVyXG4gICAgLyoqXG4gICAgICogc2V0cyB0aGUgdGFyZ2V0IGdyb3VwIGZvciB0aGUgZ2FtZU9iamVjdEZhY3RvcnkgdG8gZ2FtZUxheWVyIGJlZm9yZSBhZGRpbmdcbiAgICAgKiB0aGlzIHdheSBpZiB3ZSBwYXNzIGEgbnVsbCBncm91cCB0byB3aGF0ZXZlciBtZXRob2Qgd2UgY2FsbFxuICAgICAqIGllICh0aGlzLmdhbWUuYWRkVG9HYW1lLmltYWdlKDAsIDAsIGtleSwgZnJhbWUpKTtcbiAgICAgKiBpdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBhcHByb3ByaWF0ZSBsYXllclxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgYWRkVG9HYW1lKCk6IEdhbWVPYmplY3RGYWN0b3J5IHtcbiAgICAgICAgdGhpcy5hZGQudGFyZ2V0R3JvdXAgPSB0aGlzLmdhbWVMYXllcjtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHNldHMgdGhlIHRhcmdldCBncm91cCBmb3IgdGhlIGdhbWVPYmplY3RGYWN0b3J5IHRvIHVpTGF5ZXIgYmVmb3JlIGFkZGluZ1xuICAgICAqIHRoaXMgd2F5IGlmIHdlIHBhc3MgYSBudWxsIGdyb3VwIHRvIHdoYXRldmVyIG1ldGhvZCB3ZSBjYWxsXG4gICAgICogaWUgKHRoaXMuZ2FtZS5hZGRUb1VJLmltYWdlKDAsIDAsIGtleSwgZnJhbWUpKTtcbiAgICAgKiBpdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBhcHByb3ByaWF0ZSBsYXllclxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgYWRkVG9CYWNrZ3JvdW5kKCk6IEdhbWVPYmplY3RGYWN0b3J5IHtcbiAgICAgICAgdGhpcy5hZGQudGFyZ2V0R3JvdXAgPSB0aGlzLmJhY2tncm91bmRMYXllcjtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkO1xuICAgIH1cblxuXG4gICAgcHVibGljIGdldCBhZGRUb1VJKCk6IEdhbWVPYmplY3RGYWN0b3J5IHtcbiAgICAgICAgLy8gc2V0IHRoZSB0YXJnZXQgZ3JvdXAgZm9yIHRoZSBnYW1lT2JqZWN0RmFjdG9yeSBiZWZvcmUgYWRkaW5nXG4gICAgICAgIHRoaXMuYWRkLnRhcmdldEdyb3VwID0gdGhpcy51aUxheWVyO1xuICAgICAgICByZXR1cm4gdGhpcy5hZGQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhZGRUb1N0YWdlKCk6IEdhbWVPYmplY3RGYWN0b3J5IHtcbiAgICAgICAgLy8gc2V0IHRoZSB0YXJnZXQgZ3JvdXAgZm9yIHRoZSBnYW1lT2JqZWN0RmFjdG9yeSBiZWZvcmUgYWRkaW5nXG4gICAgICAgIHRoaXMuYWRkLnRhcmdldEdyb3VwID0gdGhpcy5zdGFnZUxheWVyO1xuICAgICAgICByZXR1cm4gdGhpcy5hZGQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhZGRUb1dvcmxkKCk6IEdhbWVPYmplY3RGYWN0b3J5IHtcbiAgICAgICAgLy8gc2V0IHRoZSB0YXJnZXQgZ3JvdXAgZm9yIHRoZSBnYW1lT2JqZWN0RmFjdG9yeSBiZWZvcmUgYWRkaW5nXG4gICAgICAgIHRoaXMuYWRkLnRhcmdldEdyb3VwID0gdGhpcy53b3JsZDtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkO1xuICAgIH1cblxuICAgIC8vIFF1aWNrbHkgZ3JhYiB0aGUgY2VudGVyWCBvZiB0aGUgd29ybGQgKG5vdCByb3VuZGVkKS4gICBcbiAgICBwdWJsaWMgZ2V0IGNlbnRlclgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2lkdGggKiAwLjU7XG4gICAgfVxuXG4gICAgLy8gUXVpY2tseSBncmFiIHRoZSBjZW50ZXJZIG9mIHRoZSB3b3JsZCAobm90IHJvdW5kZWQpLiAgICBcbiAgICBwdWJsaWMgZ2V0IGNlbnRlclkoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0ICogMC41O1xuICAgIH1cbn0iLCIvKipcbiAqIEdhbWVPYmplY3RGYWN0b3J5XG4gKi9cblxuaW1wb3J0IHtUZXh0LCBHcm91cCwgU3BpbmUsIFNwcml0ZSwgQ29tcG9uZW50LCBCaXRtYXBUZXh0fSBmcm9tICcuLi9kaXNwbGF5Jztcbi8qKlxuICogR2FtZU9iamVjdEZhY3RvcnlcbiAqL1xuXG5leHBvcnQgY2xhc3MgR2FtZU9iamVjdEZhY3RvcnkgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdEZhY3Rvcnkge1xuICAgIC8vIFRoZSBsYXllciB0aGUgY3VycmVudCBvYmplY3Qgd2lsbCBiZSBhZGRlZCB0by4gVGhpcyBpcyB1c2VkIGJ5IGhlbHBlciBmdW5jdGlvbnMgaW4gR2FtZS50cy5cbiAgICBwcm90ZWN0ZWQgX3RhcmdldEdyb3VwOiBQaGFzZXIuR3JvdXAgPSBudWxsO1xuXG4gICAgLy8gVGhpcyBpcyB0aGUgbGF5ZXIgdGhhdCBzdGFuZGFyZCAuYWRkIGNhbGxzIHdpbGwgYmUgYXBwbGllZCB0by5cbiAgICBwcm90ZWN0ZWQgX2RlZmF1bHRMYXllcjogUGhhc2VyLkdyb3VwID0gdGhpcy53b3JsZDtcblxuICAgIC8vIG92ZXJyaWRlc1xuICAgIC8qKlxuICAgICogQWRkcyBhbiBleGlzdGluZyBkaXNwbGF5IG9iamVjdCB0byB0aGUgZ2FtZSB3b3JsZC5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSNleGlzdGluZ1xuICAgICogQHBhcmFtIHthbnl9IG9iamVjdCAtIEFuIGluc3RhbmNlIG9mIFBoYXNlci5TcHJpdGUsIFBoYXNlci5CdXR0b24gb3IgYW55IG90aGVyIGRpc3BsYXkgb2JqZWN0LlxuICAgICogQHJldHVybiB7YW55fSBUaGUgY2hpbGQgdGhhdCB3YXMgYWRkZWQgdG8gdGhlIFdvcmxkLlxuICAgICovXG4gICAgcHVibGljIGV4aXN0aW5nKG9iamVjdCk6IGFueSB7XG4gICAgICAgIGxldCBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7XG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkKG9iamVjdCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogQ3JlYXRlIGEgbmV3IGBJbWFnZWAgb2JqZWN0LlxuICAgICpcbiAgICAqIEFuIEltYWdlIGlzIGEgbGlnaHQtd2VpZ2h0IG9iamVjdCB5b3UgY2FuIHVzZSB0byBkaXNwbGF5IGFueXRoaW5nIHRoYXQgZG9lc24ndCBuZWVkIHBoeXNpY3Mgb3IgYW5pbWF0aW9uLlxuICAgICpcbiAgICAqIEl0IGNhbiBzdGlsbCByb3RhdGUsIHNjYWxlLCBjcm9wIGFuZCByZWNlaXZlIGlucHV0IGV2ZW50cy5cbiAgICAqIFRoaXMgbWFrZXMgaXQgcGVyZmVjdCBmb3IgbG9nb3MsIGJhY2tncm91bmRzLCBzaW1wbGUgYnV0dG9ucyBhbmQgb3RoZXIgbm9uLVNwcml0ZSBncmFwaGljcy5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSNpbWFnZVxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt4PTBdIC0gVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgSW1hZ2UuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgSW1hZ2UgbWF5IGJlIGluLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt5PTBdIC0gVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgSW1hZ2UuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgSW1hZ2UgbWF5IGJlIGluLlxuICAgICogQHBhcmFtIHtzdHJpbmd8UGhhc2VyLlJlbmRlclRleHR1cmV8UGhhc2VyLkJpdG1hcERhdGF8UGhhc2VyLlZpZGVvfFBJWEkuVGV4dHVyZX0gW2tleV0gLSBUaGUgaW1hZ2UgdXNlZCBhcyBhIHRleHR1cmUgYnkgdGhpcyBkaXNwbGF5IG9iamVjdCBkdXJpbmcgcmVuZGVyaW5nLiBJZiBhIHN0cmluZyBQaGFzZXIgd2lsbCBnZXQgZm9yIGFuIGVudHJ5IGluIHRoZSBJbWFnZSBDYWNoZS4gT3IgaXQgY2FuIGJlIGFuIGluc3RhbmNlIG9mIGEgUmVuZGVyVGV4dHVyZSwgQml0bWFwRGF0YSwgVmlkZW8gb3IgUElYSS5UZXh0dXJlLlxuICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbZnJhbWVdIC0gSWYgYSBUZXh0dXJlIEF0bGFzIG9yIFNwcml0ZSBTaGVldCBpcyB1c2VkIHRoaXMgYWxsb3dzIHlvdSB0byBzcGVjaWZ5IHRoZSBmcmFtZSB0byBiZSB1c2VkLiBVc2UgZWl0aGVyIGFuIGludGVnZXIgZm9yIGEgRnJhbWUgSUQgb3IgYSBzdHJpbmcgZm9yIGEgZnJhbWUgbmFtZS5cbiAgICAqIEBwYXJhbSB7UGhhc2VyLkdyb3VwfSBbZ3JvdXBdIC0gT3B0aW9uYWwgR3JvdXAgdG8gYWRkIHRoZSBvYmplY3QgdG8uIElmIG5vdCBzcGVjaWZpZWQgaXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgV29ybGQgZ3JvdXAuXG4gICAgKiBAcmV0dXJucyB7UGhhc2VyLkltYWdlfSBUaGUgbmV3bHkgY3JlYXRlZCBJbWFnZSBvYmplY3QuXG4gICAgKi9cbiAgICBwdWJsaWMgaW1hZ2UoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwga2V5Pzogc3RyaW5nIHwgUGhhc2VyLlJlbmRlclRleHR1cmUgfCBQaGFzZXIuQml0bWFwRGF0YSB8IFBJWEkuVGV4dHVyZSwgZnJhbWU/OiBzdHJpbmcgfCBudW1iZXIsIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogUGhhc2VyLkltYWdlIHtcbiAgICAgICAgaWYgKGdyb3VwID09PSB1bmRlZmluZWQpIHsgZ3JvdXAgPSB0aGlzLnRhcmdldEdyb3VwOyB9XG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBQaGFzZXIuSW1hZ2UodGhpcy5nYW1lLCB4LCB5LCBrZXksIGZyYW1lKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgU3ByaXRlIHdpdGggc3BlY2lmaWMgcG9zaXRpb24gYW5kIHNwcml0ZSBzaGVldCBrZXkuXG4gICAgKlxuICAgICogQXQgaXRzIG1vc3QgYmFzaWMgYSBTcHJpdGUgY29uc2lzdHMgb2YgYSBzZXQgb2YgY29vcmRpbmF0ZXMgYW5kIGEgdGV4dHVyZSB0aGF0IGlzIHVzZWQgd2hlbiByZW5kZXJlZC5cbiAgICAqIFRoZXkgYWxzbyBjb250YWluIGFkZGl0aW9uYWwgcHJvcGVydGllcyBhbGxvd2luZyBmb3IgcGh5c2ljcyBtb3Rpb24gKHZpYSBTcHJpdGUuYm9keSksIGlucHV0IGhhbmRsaW5nICh2aWEgU3ByaXRlLmlucHV0KSxcbiAgICAqIGV2ZW50cyAodmlhIFNwcml0ZS5ldmVudHMpLCBhbmltYXRpb24gKHZpYSBTcHJpdGUuYW5pbWF0aW9ucyksIGNhbWVyYSBjdWxsaW5nIGFuZCBtb3JlLiBQbGVhc2Ugc2VlIHRoZSBFeGFtcGxlcyBmb3IgdXNlIGNhc2VzLlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5I3Nwcml0ZVxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt4PTBdIC0gVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgc3ByaXRlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIHNwcml0ZSBtYXkgYmUgaW4uXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3k9MF0gLSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBzcHJpdGUuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgc3ByaXRlIG1heSBiZSBpbi5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfFBoYXNlci5SZW5kZXJUZXh0dXJlfFBoYXNlci5CaXRtYXBEYXRhfFBoYXNlci5WaWRlb3xQSVhJLlRleHR1cmV9IFtrZXldIC0gVGhlIGltYWdlIHVzZWQgYXMgYSB0ZXh0dXJlIGJ5IHRoaXMgZGlzcGxheSBvYmplY3QgZHVyaW5nIHJlbmRlcmluZy4gSWYgYSBzdHJpbmcgUGhhc2VyIHdpbGwgZ2V0IGZvciBhbiBlbnRyeSBpbiB0aGUgSW1hZ2UgQ2FjaGUuIE9yIGl0IGNhbiBiZSBhbiBpbnN0YW5jZSBvZiBhIFJlbmRlclRleHR1cmUsIEJpdG1hcERhdGEsIFZpZGVvIG9yIFBJWEkuVGV4dHVyZS5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW2ZyYW1lXSAtIElmIGEgVGV4dHVyZSBBdGxhcyBvciBTcHJpdGUgU2hlZXQgaXMgdXNlZCB0aGlzIGFsbG93cyB5b3UgdG8gc3BlY2lmeSB0aGUgZnJhbWUgdG8gYmUgdXNlZC4gVXNlIGVpdGhlciBhbiBpbnRlZ2VyIGZvciBhIEZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXG4gICAgKiBAcGFyYW0ge1BoYXNlci5Hcm91cH0gW2dyb3VwXSAtIE9wdGlvbmFsIEdyb3VwIHRvIGFkZCB0aGUgb2JqZWN0IHRvLiBJZiBub3Qgc3BlY2lmaWVkIGl0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIFdvcmxkIGdyb3VwLlxuICAgICogQHJldHVybnMge1BoYXNlci5TcHJpdGV9IFRoZSBuZXdseSBjcmVhdGVkIFNwcml0ZSBvYmplY3QuXG4gICAgKi9cbiAgICBwdWJsaWMgc3ByaXRlKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIGtleT86IHN0cmluZyB8IFBJWEkuVGV4dHVyZSwgZnJhbWU/OiBzdHJpbmcgfCBudW1iZXIsIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogUGhhc2VyLlNwcml0ZSB7XG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy50YXJnZXRHcm91cDsgfVxuICAgICAgICB0aGlzLnRhcmdldEdyb3VwID0gbnVsbDtcblxuICAgICAgICByZXR1cm4gZ3JvdXAuY3JlYXRlKHgsIHksIGtleSwgZnJhbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQ3JlYXRlIGEgbmV3IENyZWF0dXJlIEFuaW1hdGlvbiBvYmplY3QuXG4gICAgKlxuICAgICogQ3JlYXR1cmUgaXMgYSBjdXN0b20gR2FtZSBPYmplY3QgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBDcmVhdHVyZSBSdW50aW1lIGxpYnJhcmllcyBieSBLZXN0cmVsIE1vb24gU3R1ZGlvcy5cbiAgICAqXG4gICAgKiBJdCBhbGxvd3MgeW91IHRvIGRpc3BsYXkgYW5pbWF0ZWQgR2FtZSBPYmplY3RzIHRoYXQgd2VyZSBjcmVhdGVkIHdpdGggdGhlIFtDcmVhdHVyZSBBdXRvbWF0ZWQgQW5pbWF0aW9uIFRvb2xdKGh0dHA6Ly93d3cua2VzdHJlbG1vb24uY29tL2NyZWF0dXJlLykuXG4gICAgKlxuICAgICogTm90ZSAxOiBZb3UgY2FuIG9ubHkgdXNlIFBoYXNlci5DcmVhdHVyZSBvYmplY3RzIGluIFdlYkdMIGVuYWJsZWQgZ2FtZXMuIFRoZXkgZG8gbm90IHdvcmsgaW4gQ2FudmFzIG1vZGUgZ2FtZXMuXG4gICAgKlxuICAgICogTm90ZSAyOiBZb3UgbXVzdCB1c2UgYSBidWlsZCBvZiBQaGFzZXIgdGhhdCBpbmNsdWRlcyB0aGUgQ3JlYXR1cmVNZXNoQm9uZS5qcyBydW50aW1lIGFuZCBnbC1tYXRyaXguanMsIG9yIGhhdmUgdGhlbVxuICAgICogbG9hZGVkIGJlZm9yZSB5b3VyIFBoYXNlciBnYW1lIGJvb3RzLlxuICAgICpcbiAgICAqIFNlZSB0aGUgUGhhc2VyIGN1c3RvbSBidWlsZCBwcm9jZXNzIGZvciBtb3JlIGRldGFpbHMuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkjY3JlYXR1cmVcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeD0wXSAtIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIGNyZWF0dXJlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIGNyZWF0dXJlIG1heSBiZSBpbi5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeT0wXSAtIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIGNyZWF0dXJlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIGNyZWF0dXJlIG1heSBiZSBpbi5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfFBJWEkuVGV4dHVyZX0gW2tleV0gLSBUaGUgaW1hZ2UgdXNlZCBhcyBhIHRleHR1cmUgYnkgdGhpcyBjcmVhdHVyZSBvYmplY3QgZHVyaW5nIHJlbmRlcmluZy4gSWYgYSBzdHJpbmcgUGhhc2VyIHdpbGwgZ2V0IGZvciBhbiBlbnRyeSBpbiB0aGUgSW1hZ2UgQ2FjaGUuIE9yIGl0IGNhbiBiZSBhbiBpbnN0YW5jZSBvZiBhIFBJWEkuVGV4dHVyZS5cbiAgICAqIEBwYXJhbSB7UGhhc2VyLkdyb3VwfSBbZ3JvdXBdIC0gT3B0aW9uYWwgR3JvdXAgdG8gYWRkIHRoZSBvYmplY3QgdG8uIElmIG5vdCBzcGVjaWZpZWQgaXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgRGVmYXVsdCBMYXllciBncm91cC5cbiAgICAqIEByZXR1cm5zIHtQaGFzZXIuQ3JlYXR1cmV9IFRoZSBuZXdseSBjcmVhdGVkIFNwcml0ZSBvYmplY3QuXG4gICAgKi9cbiAgICBwdWJsaWMgY3JlYXR1cmUoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwga2V5Pzogc3RyaW5nLCBtZXNoPzogYW55LCBncm91cD86IFBoYXNlci5Hcm91cCk6IGFueSB7XG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy50YXJnZXRHcm91cDsgfVxuICAgICAgICB0aGlzLnRhcmdldEdyb3VwID0gbnVsbDtcblxuICAgICAgICB2YXIgb2JqID0gbmV3IFBoYXNlclsnQ3JlYXR1cmUnXSh0aGlzLmdhbWUsIHgsIHksIGtleSwgbWVzaCk7XG5cbiAgICAgICAgZ3JvdXAuYWRkKG9iaik7XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEEgR3JvdXAgaXMgYSBjb250YWluZXIgZm9yIGRpc3BsYXkgb2JqZWN0cyB0aGF0IGFsbG93cyBmb3IgZmFzdCBwb29saW5nLCByZWN5Y2xpbmcgYW5kIGNvbGxpc2lvbiBjaGVja3MuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkjZ3JvdXBcbiAgICAqIEBwYXJhbSB7YW55fSBbcGFyZW50XSAtIFRoZSBwYXJlbnQgR3JvdXAgb3IgRGlzcGxheU9iamVjdENvbnRhaW5lciB0aGF0IHdpbGwgaG9sZCB0aGlzIGdyb3VwLCBpZiBhbnkuIElmIHNldCB0byBudWxsIHRoZSBHcm91cCB3b24ndCBiZSBhZGRlZCB0byB0aGUgZGlzcGxheSBsaXN0LiBJZiB1bmRlZmluZWQgaXQgd2lsbCBiZSBhZGRlZCB0byBXb3JsZCBieSBkZWZhdWx0LlxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lPSdncm91cCddIC0gQSBuYW1lIGZvciB0aGlzIEdyb3VwLiBOb3QgdXNlZCBpbnRlcm5hbGx5IGJ1dCB1c2VmdWwgZm9yIGRlYnVnZ2luZy5cbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2FkZFRvU3RhZ2U9ZmFsc2VdIC0gSWYgc2V0IHRvIHRydWUgdGhpcyBHcm91cCB3aWxsIGJlIGFkZGVkIGRpcmVjdGx5IHRvIHRoZSBHYW1lLlN0YWdlIGluc3RlYWQgb2YgR2FtZS5Xb3JsZC5cbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2VuYWJsZUJvZHk9ZmFsc2VdIC0gSWYgdHJ1ZSBhbGwgU3ByaXRlcyBjcmVhdGVkIHdpdGggYEdyb3VwLmNyZWF0ZWAgb3IgYEdyb3VwLmNyZWF0ZU11bGl0cGxlYCB3aWxsIGhhdmUgYSBwaHlzaWNzIGJvZHkgY3JlYXRlZCBvbiB0aGVtLiBDaGFuZ2UgdGhlIGJvZHkgdHlwZSB3aXRoIHBoeXNpY3NCb2R5VHlwZS5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbcGh5c2ljc0JvZHlUeXBlPTBdIC0gSWYgZW5hYmxlQm9keSBpcyB0cnVlIHRoaXMgaXMgdGhlIHR5cGUgb2YgcGh5c2ljcyBib2R5IHRoYXQgaXMgY3JlYXRlZCBvbiBuZXcgU3ByaXRlcy4gUGhhc2VyLlBoeXNpY3MuQVJDQURFLCBQaGFzZXIuUGh5c2ljcy5QMiwgUGhhc2VyLlBoeXNpY3MuTklOSkEsIGV0Yy5cbiAgICAqIEByZXR1cm4ge1BoYXNlci5Hcm91cH0gVGhlIG5ld2x5IGNyZWF0ZWQgR3JvdXAuXG4gICAgKi9cbiAgICBwdWJsaWMgZ3JvdXAocGFyZW50PzogYW55LCBuYW1lOiBzdHJpbmcgPSAnZ3JvdXAnLCBhZGRUb1N0YWdlOiBib29sZWFuID0gZmFsc2UsIGVuYWJsZUJvZHk6IGJvb2xlYW4gPSBmYWxzZSwgcGh5c2ljc0JvZHlUeXBlOiBudW1iZXIgPSAwKSB7XG4gICAgICAgIGlmIChwYXJlbnQgPT09IHVuZGVmaW5lZCAmJiBhZGRUb1N0YWdlICE9PSB0cnVlKSB7IHBhcmVudCA9IHRoaXMudGFyZ2V0R3JvdXA7IH1cbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBuZXcgUGhhc2VyLkdyb3VwKHRoaXMuZ2FtZSwgcGFyZW50LCBuYW1lLCBhZGRUb1N0YWdlLCBlbmFibGVCb2R5LCBwaHlzaWNzQm9keVR5cGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQSBHcm91cCBpcyBhIGNvbnRhaW5lciBmb3IgZGlzcGxheSBvYmplY3RzIHRoYXQgYWxsb3dzIGZvciBmYXN0IHBvb2xpbmcsIHJlY3ljbGluZyBhbmQgY29sbGlzaW9uIGNoZWNrcy5cbiAgICAqXG4gICAgKiBBIFBoeXNpY3MgR3JvdXAgaXMgdGhlIHNhbWUgYXMgYW4gb3JkaW5hcnkgR3JvdXAgZXhjZXB0IHRoYXQgaXMgaGFzIGVuYWJsZUJvZHkgdHVybmVkIG9uIGJ5IGRlZmF1bHQsIHNvIGFueSBTcHJpdGVzIGl0IGNyZWF0ZXNcbiAgICAqIGFyZSBhdXRvbWF0aWNhbGx5IGdpdmVuIGEgcGh5c2ljcyBib2R5LlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5I3BoeXNpY3NHcm91cFxuICAgICogQHBhcmFtIHtudW1iZXJ9IFtwaHlzaWNzQm9keVR5cGU9UGhhc2VyLlBoeXNpY3MuQVJDQURFXSAtIElmIGVuYWJsZUJvZHkgaXMgdHJ1ZSB0aGlzIGlzIHRoZSB0eXBlIG9mIHBoeXNpY3MgYm9keSB0aGF0IGlzIGNyZWF0ZWQgb24gbmV3IFNwcml0ZXMuIFBoYXNlci5QaHlzaWNzLkFSQ0FERSwgUGhhc2VyLlBoeXNpY3MuUDIsIFBoYXNlci5QaHlzaWNzLk5JTkpBLCBldGMuXG4gICAgKiBAcGFyYW0ge2FueX0gW3BhcmVudF0gLSBUaGUgcGFyZW50IEdyb3VwIG9yIERpc3BsYXlPYmplY3RDb250YWluZXIgdGhhdCB3aWxsIGhvbGQgdGhpcyBncm91cCwgaWYgYW55LiBJZiBzZXQgdG8gbnVsbCB0aGUgR3JvdXAgd29uJ3QgYmUgYWRkZWQgdG8gdGhlIGRpc3BsYXkgbGlzdC4gSWYgdW5kZWZpbmVkIGl0IHdpbGwgYmUgYWRkZWQgdG8gV29ybGQgYnkgZGVmYXVsdC5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZT0nZ3JvdXAnXSAtIEEgbmFtZSBmb3IgdGhpcyBHcm91cC4gTm90IHVzZWQgaW50ZXJuYWxseSBidXQgdXNlZnVsIGZvciBkZWJ1Z2dpbmcuXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFthZGRUb1N0YWdlPWZhbHNlXSAtIElmIHNldCB0byB0cnVlIHRoaXMgR3JvdXAgd2lsbCBiZSBhZGRlZCBkaXJlY3RseSB0byB0aGUgR2FtZS5TdGFnZSBpbnN0ZWFkIG9mIEdhbWUuV29ybGQuXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuR3JvdXB9IFRoZSBuZXdseSBjcmVhdGVkIEdyb3VwLlxuICAgICovXG4gICAgcHVibGljIHBoeXNpY3NHcm91cChwaHlzaWNzQm9keVR5cGU6IG51bWJlciA9IDAsIHBhcmVudD86IGFueSwgbmFtZTogc3RyaW5nID0gJ2dyb3VwJywgYWRkVG9TdGFnZTogYm9vbGVhbiA9IGZhbHNlKTogUGhhc2VyLkdyb3VwIHtcbiAgICAgICAgaWYgKHBhcmVudCA9PT0gdW5kZWZpbmVkKSB7IHBhcmVudCA9IHRoaXMudGFyZ2V0R3JvdXA7IH1cbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBuZXcgUGhhc2VyLkdyb3VwKHRoaXMuZ2FtZSwgcGFyZW50LCBuYW1lLCBhZGRUb1N0YWdlLCB0cnVlLCBwaHlzaWNzQm9keVR5cGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQSBTcHJpdGVCYXRjaCBpcyBhIHJlYWxseSBmYXN0IHZlcnNpb24gb2YgYSBQaGFzZXIgR3JvdXAgYnVpbHQgc29sZWx5IGZvciBzcGVlZC5cbiAgICAqIFVzZSB3aGVuIHlvdSBuZWVkIGEgbG90IG9mIHNwcml0ZXMgb3IgcGFydGljbGVzIGFsbCBzaGFyaW5nIHRoZSBzYW1lIHRleHR1cmUuXG4gICAgKiBUaGUgc3BlZWQgZ2FpbnMgYXJlIHNwZWNpZmljYWxseSBmb3IgV2ViR0wuIEluIENhbnZhcyBtb2RlIHlvdSB3b24ndCBzZWUgYW55IHJlYWwgZGlmZmVyZW5jZS5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSNzcHJpdGVCYXRjaFxuICAgICogQHBhcmFtIHtQaGFzZXIuR3JvdXB8bnVsbH0gcGFyZW50IC0gVGhlIHBhcmVudCBHcm91cCB0aGF0IHdpbGwgaG9sZCB0aGlzIFNwcml0ZSBCYXRjaC4gU2V0IHRvIGB1bmRlZmluZWRgIG9yIGBudWxsYCB0byBhZGQgZGlyZWN0bHkgdG8gZ2FtZS53b3JsZC5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZT0nZ3JvdXAnXSAtIEEgbmFtZSBmb3IgdGhpcyBTcHJpdGUgQmF0Y2guIE5vdCB1c2VkIGludGVybmFsbHkgYnV0IHVzZWZ1bCBmb3IgZGVidWdnaW5nLlxuICAgICogQHBhcmFtIHtib29sZWFufSBbYWRkVG9TdGFnZT1mYWxzZV0gLSBJZiBzZXQgdG8gdHJ1ZSB0aGlzIFNwcml0ZSBCYXRjaCB3aWxsIGJlIGFkZGVkIGRpcmVjdGx5IHRvIHRoZSBHYW1lLlN0YWdlIGluc3RlYWQgb2YgdGhlIHBhcmVudC5cbiAgICAqIEByZXR1cm4ge1BoYXNlci5TcHJpdGVCYXRjaH0gVGhlIG5ld2x5IGNyZWF0ZWQgU3ByaXRlIEJhdGNoLlxuICAgICovXG4gICAgcHVibGljIHNwcml0ZUJhdGNoKHBhcmVudD86IGFueSwgbmFtZTogc3RyaW5nID0gXCJzcHJpdGVCYXRjaFwiLCBhZGRUb1N0YWdlOiBib29sZWFuID0gZmFsc2UpOiBQaGFzZXIuU3ByaXRlQmF0Y2gge1xuICAgICAgICBpZiAocGFyZW50ID09PSB1bmRlZmluZWQpIHsgcGFyZW50ID0gdGhpcy50YXJnZXRHcm91cCB9XG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4gbmV3IFBoYXNlci5TcHJpdGVCYXRjaCh0aGlzLmdhbWUsIHBhcmVudCwgbmFtZSwgYWRkVG9TdGFnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgVGlsZVNwcml0ZSBvYmplY3QuXG4gICAqXG4gICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5I3RpbGVTcHJpdGVcbiAgICogQHBhcmFtIHtudW1iZXJ9IHggLSBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBUaWxlU3ByaXRlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIFRpbGVTcHJpdGUgbWF5IGJlIGluLlxuICAgKiBAcGFyYW0ge251bWJlcn0geSAtIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIFRpbGVTcHJpdGUuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgVGlsZVNwcml0ZSBtYXkgYmUgaW4uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAtIFRoZSB3aWR0aCBvZiB0aGUgVGlsZVNwcml0ZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCAtIFRoZSBoZWlnaHQgb2YgdGhlIFRpbGVTcHJpdGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfFBoYXNlci5SZW5kZXJUZXh0dXJlfFBoYXNlci5CaXRtYXBEYXRhfFBoYXNlci5WaWRlb3xQSVhJLlRleHR1cmV9IGtleSAtIFRoZSBpbWFnZSB1c2VkIGFzIGEgdGV4dHVyZSBieSB0aGlzIGRpc3BsYXkgb2JqZWN0IGR1cmluZyByZW5kZXJpbmcuIElmIGEgc3RyaW5nIFBoYXNlciB3aWxsIGdldCBmb3IgYW4gZW50cnkgaW4gdGhlIEltYWdlIENhY2hlLiBPciBpdCBjYW4gYmUgYW4gaW5zdGFuY2Ugb2YgYSBSZW5kZXJUZXh0dXJlLCBCaXRtYXBEYXRhLCBWaWRlbyBvciBQSVhJLlRleHR1cmUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW2ZyYW1lXSAtIElmIGEgVGV4dHVyZSBBdGxhcyBvciBTcHJpdGUgU2hlZXQgaXMgdXNlZCB0aGlzIGFsbG93cyB5b3UgdG8gc3BlY2lmeSB0aGUgZnJhbWUgdG8gYmUgdXNlZC4gVXNlIGVpdGhlciBhbiBpbnRlZ2VyIGZvciBhIEZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXG4gICAqIEBwYXJhbSB7UGhhc2VyLkdyb3VwfSBbZ3JvdXBdIC0gT3B0aW9uYWwgR3JvdXAgdG8gYWRkIHRoZSBvYmplY3QgdG8uIElmIG5vdCBzcGVjaWZpZWQgaXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgRGVmYXVsdCBMYXllciBncm91cC5cbiAgICogQHJldHVybiB7UGhhc2VyLlRpbGVTcHJpdGV9IFRoZSBuZXdseSBjcmVhdGVkIFRpbGVTcHJpdGUgb2JqZWN0LlxuICAgKi9cbiAgICBwdWJsaWMgdGlsZVNwcml0ZSh4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCB3aWR0aDogbnVtYmVyID0gMCwgaGVpZ2h0OiBudW1iZXIgPSAwLCBrZXk/OiBzdHJpbmcsIGZyYW1lPzogc3RyaW5nIHwgbnVtYmVyLCBncm91cD86IFBoYXNlci5Hcm91cCk6IFBoYXNlci5UaWxlU3ByaXRlIHtcbiAgICAgICAgaWYgKGdyb3VwID09PSB1bmRlZmluZWQpIHsgZ3JvdXAgPSB0aGlzLnRhcmdldEdyb3VwOyB9XG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBQaGFzZXIuVGlsZVNwcml0ZSh0aGlzLmdhbWUsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGtleSwgZnJhbWUpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBSb3BlIG9iamVjdC5cbiAgICpcbiAgICogRXhhbXBsZSB1c2FnZTogaHR0cHM6Ly9naXRodWIuY29tL2NvZGV2aW5za3kvcGhhc2VyLXJvcGUtZGVtby9ibG9iL21hc3Rlci9kaXN0L2RlbW8uanNcbiAgICpcbiAgICogQG1ldGhvZCBQaGFzZXIuR2FtZU9iamVjdEZhY3Rvcnkjcm9wZVxuICAgKiBAcGFyYW0ge251bWJlcn0gW3g9MF0gLSBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBSb3BlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIHJvcGUgbWF5IGJlIGluLlxuICAgKiBAcGFyYW0ge251bWJlcn0gW3k9MF0gLSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBSb3BlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIHJvcGUgbWF5IGJlIGluLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xQaGFzZXIuUmVuZGVyVGV4dHVyZXxQaGFzZXIuQml0bWFwRGF0YXxQaGFzZXIuVmlkZW98UElYSS5UZXh0dXJlfSBba2V5XSAtIFRoZSBpbWFnZSB1c2VkIGFzIGEgdGV4dHVyZSBieSB0aGlzIGRpc3BsYXkgb2JqZWN0IGR1cmluZyByZW5kZXJpbmcuIElmIGEgc3RyaW5nIFBoYXNlciB3aWxsIGdldCBmb3IgYW4gZW50cnkgaW4gdGhlIEltYWdlIENhY2hlLiBPciBpdCBjYW4gYmUgYW4gaW5zdGFuY2Ugb2YgYSBSZW5kZXJUZXh0dXJlLCBCaXRtYXBEYXRhLCBWaWRlbyBvciBQSVhJLlRleHR1cmUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW2ZyYW1lXSAtIElmIGEgVGV4dHVyZSBBdGxhcyBvciBTcHJpdGUgU2hlZXQgaXMgdXNlZCB0aGlzIGFsbG93cyB5b3UgdG8gc3BlY2lmeSB0aGUgZnJhbWUgdG8gYmUgdXNlZC4gVXNlIGVpdGhlciBhbiBpbnRlZ2VyIGZvciBhIEZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXG4gICAqIEBwYXJhbSB7QXJyYXl9IHBvaW50cyAtIEFuIGFycmF5IG9mIHtQaGFzZXIuUG9pbnR9LlxuICAgKiBAcGFyYW0ge1BoYXNlci5Hcm91cH0gW2dyb3VwXSAtIE9wdGlvbmFsIEdyb3VwIHRvIGFkZCB0aGUgb2JqZWN0IHRvLiBJZiBub3Qgc3BlY2lmaWVkIGl0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIERlZmF1bHQgTGF5ZXIgZ3JvdXAuXG4gICAqIEByZXR1cm4ge1BoYXNlci5Sb3BlfSBUaGUgbmV3bHkgY3JlYXRlZCBSb3BlIG9iamVjdC5cbiAgICovXG4gICAgcHVibGljIHJvcGUoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwga2V5Pzogc3RyaW5nLCBmcmFtZT86IHN0cmluZyB8IG51bWJlciwgcG9pbnRzPzogUGhhc2VyLlBvaW50W10sIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogUGhhc2VyLlJvcGUge1xuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCkgeyBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7IH1cbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBncm91cC5hZGQobmV3IFBoYXNlci5Sb3BlKHRoaXMuZ2FtZSwgeCwgeSwga2V5LCBmcmFtZSwgcG9pbnRzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBDcmVhdGVzIGEgbmV3IFRleHQgb2JqZWN0LlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5I3RleHRcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeD0wXSAtIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIFRleHQuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgdGV4dCBtYXkgYmUgaW4uXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3k9MF0gLSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBUZXh0LiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIHRleHQgbWF5IGJlIGluLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IFt0ZXh0PScnXSAtIFRoZSB0ZXh0IHN0cmluZyB0aGF0IHdpbGwgYmUgZGlzcGxheWVkLlxuICAgICogQHBhcmFtIHtvYmplY3R9IFtzdHlsZV0gLSBUaGUgc3R5bGUgb2JqZWN0IGNvbnRhaW5pbmcgc3R5bGUgYXR0cmlidXRlcyBsaWtlIGZvbnQsIGZvbnQgc2l6ZSAsIGV0Yy5cbiAgICAqIEBwYXJhbSB7UGhhc2VyLkdyb3VwfSBbZ3JvdXBdIC0gT3B0aW9uYWwgR3JvdXAgdG8gYWRkIHRoZSBvYmplY3QgdG8uIElmIG5vdCBzcGVjaWZpZWQgaXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgRGVmYXVsdCBMYXllciBncm91cC5cbiAgICAqIEByZXR1cm4ge1BoYXNlci5UZXh0fSBUaGUgbmV3bHkgY3JlYXRlZCB0ZXh0IG9iamVjdC5cbiAgICAqL1xuICAgIHB1YmxpYyB0ZXh0KHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIHRleHQ6IHN0cmluZyA9ICcnLCBzdHlsZT86IFBoYXNlci5QaGFzZXJUZXh0U3R5bGUsIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogUGhhc2VyLlRleHQge1xuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCkgeyBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7IH1cbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBncm91cC5hZGQobmV3IFBoYXNlci5UZXh0KHRoaXMuZ2FtZSwgeCwgeSwgdGV4dCwgc3R5bGUpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIENyZWF0ZXMgYSBuZXcgQnV0dG9uIG9iamVjdC5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSNidXR0b25cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeD0wXSAtIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIEJ1dHRvbi4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyBidXR0b24gbWF5IGJlIGluLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt5PTBdIC0gVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgQnV0dG9uLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIGJ1dHRvbiBtYXkgYmUgaW4uXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2tleV0gLSBUaGUgaW1hZ2Uga2V5IGFzIGRlZmluZWQgaW4gdGhlIEdhbWUuQ2FjaGUgdG8gdXNlIGFzIHRoZSB0ZXh0dXJlIGZvciB0aGlzIGJ1dHRvbi5cbiAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYWxsYmFja10gLSBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoaXMgYnV0dG9uIGlzIHByZXNzZWRcbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBbY2FsbGJhY2tDb250ZXh0XSAtIFRoZSBjb250ZXh0IGluIHdoaWNoIHRoZSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCAodXN1YWxseSAndGhpcycpXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtvdmVyRnJhbWVdIC0gVGhpcyBpcyB0aGUgZnJhbWUgb3IgZnJhbWVOYW1lIHRoYXQgd2lsbCBiZSBzZXQgd2hlbiB0aGlzIGJ1dHRvbiBpcyBpbiBhbiBvdmVyIHN0YXRlLiBHaXZlIGVpdGhlciBhIG51bWJlciB0byB1c2UgYSBmcmFtZSBJRCBvciBhIHN0cmluZyBmb3IgYSBmcmFtZSBuYW1lLlxuICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbb3V0RnJhbWVdIC0gVGhpcyBpcyB0aGUgZnJhbWUgb3IgZnJhbWVOYW1lIHRoYXQgd2lsbCBiZSBzZXQgd2hlbiB0aGlzIGJ1dHRvbiBpcyBpbiBhbiBvdXQgc3RhdGUuIEdpdmUgZWl0aGVyIGEgbnVtYmVyIHRvIHVzZSBhIGZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtkb3duRnJhbWVdIC0gVGhpcyBpcyB0aGUgZnJhbWUgb3IgZnJhbWVOYW1lIHRoYXQgd2lsbCBiZSBzZXQgd2hlbiB0aGlzIGJ1dHRvbiBpcyBpbiBhIGRvd24gc3RhdGUuIEdpdmUgZWl0aGVyIGEgbnVtYmVyIHRvIHVzZSBhIGZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFt1cEZyYW1lXSAtIFRoaXMgaXMgdGhlIGZyYW1lIG9yIGZyYW1lTmFtZSB0aGF0IHdpbGwgYmUgc2V0IHdoZW4gdGhpcyBidXR0b24gaXMgaW4gYW4gdXAgc3RhdGUuIEdpdmUgZWl0aGVyIGEgbnVtYmVyIHRvIHVzZSBhIGZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXG4gICAgKiBAcGFyYW0ge1BoYXNlci5Hcm91cH0gW2dyb3VwXSAtIE9wdGlvbmFsIEdyb3VwIHRvIGFkZCB0aGUgb2JqZWN0IHRvLiBJZiBub3Qgc3BlY2lmaWVkIGl0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIERlZmF1bHQgTGF5ZXIgZ3JvdXAuXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuQnV0dG9ufSBUaGUgbmV3bHkgY3JlYXRlZCBCdXR0b24gb2JqZWN0LlxuICAgICovXG4gICAgcHVibGljIGJ1dHRvbih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCBrZXk/OiBzdHJpbmcsIGNhbGxiYWNrPzogRnVuY3Rpb24sIGNhbGxiYWNrQ29udGV4dD86IE9iamVjdCwgb3ZlckZyYW1lPzogc3RyaW5nIHwgbnVtYmVyLCBvdXRGcmFtZT86IHN0cmluZyB8IG51bWJlciwgZG93bkZyYW1lPzogc3RyaW5nIHwgbnVtYmVyLCB1cEZyYW1lPzogc3RyaW5nIHwgbnVtYmVyLCBncm91cD86IFBoYXNlci5Hcm91cCk6IFBoYXNlci5CdXR0b24ge1xuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCkgeyBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7IH1cbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBncm91cC5hZGQobmV3IFBoYXNlci5CdXR0b24odGhpcy5nYW1lLCB4LCB5LCBrZXksIGNhbGxiYWNrLCBjYWxsYmFja0NvbnRleHQsIG92ZXJGcmFtZSwgb3V0RnJhbWUsIGRvd25GcmFtZSwgdXBGcmFtZSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQ3JlYXRlcyBhIG5ldyBHcmFwaGljcyBvYmplY3QuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkjZ3JhcGhpY3NcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeD0wXSAtIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIEdyYXBoaWMuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgb2JqZWN0IG1heSBiZSBpbi5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeT0wXSAtIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIEdyYXBoaWMuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgb2JqZWN0IG1heSBiZSBpbi5cbiAgICAqIEBwYXJhbSB7UGhhc2VyLkdyb3VwfSBbZ3JvdXBdIC0gT3B0aW9uYWwgR3JvdXAgdG8gYWRkIHRoZSBvYmplY3QgdG8uIElmIG5vdCBzcGVjaWZpZWQgaXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgV29ybGQgZ3JvdXAuXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuR3JhcGhpY3N9IFRoZSBuZXdseSBjcmVhdGVkIGdyYXBoaWNzIG9iamVjdC5cbiAgICAqL1xuICAgIHB1YmxpYyBncmFwaGljcyh4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCBncm91cD86IFBoYXNlci5Hcm91cCk6IFBoYXNlci5HcmFwaGljcyB7XG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy53b3JsZDsgfVxuICAgICAgICAvKioqXG4gICAgICAgICAqIENvbW1lbnRlZCB0aGlzIG91dCAtIHNpbmNlIGdyYXBoaWNzIGFyZSBieSBkZWZhdWx0IGFkZGVkIGRpcmVjdGx5IG9uIHRoZSBnYW1lLndvcmxkLCB3ZSBzaG91bGRuJ3QgcmVzZXQgdGhpcy50YXJnZXRHcm91cFxuICAgICAgICAgKiBJdCBjb3VsZCBjYXVzZSBtYWpvciBwcm9ibGVtcyBpZiB1c2luZyBkaWpvbi91dGlscyBUZXh0dXJlcyBpbnN0YW5jZXMgYXMgYW4gaW1hZ2UgdGV4dHVyZSwgZm9yIGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICAvL3RoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBQaGFzZXIuR3JhcGhpY3ModGhpcy5nYW1lLCB4LCB5KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgQml0bWFwVGV4dCBvYmplY3QuXG4gICAgKlxuICAgICogQml0bWFwVGV4dCBvYmplY3RzIHdvcmsgYnkgdGFraW5nIGEgdGV4dHVyZSBmaWxlIGFuZCBhbiBYTUwgZmlsZSB0aGF0IGRlc2NyaWJlcyB0aGUgZm9udCBzdHJ1Y3R1cmUuXG4gICAgKiBJdCB0aGVuIGdlbmVyYXRlcyBhIG5ldyBTcHJpdGUgb2JqZWN0IGZvciBlYWNoIGxldHRlciBvZiB0aGUgdGV4dCwgcHJvcG9ydGlvbmFsbHkgc3BhY2VkIG91dCBhbmQgYWxpZ25lZCB0b1xuICAgICogbWF0Y2ggdGhlIGZvbnQgc3RydWN0dXJlLlxuICAgICpcbiAgICAqIEJpdG1hcFRleHQgb2JqZWN0cyBhcmUgbGVzcyBmbGV4aWJsZSB0aGFuIFRleHQgb2JqZWN0cywgaW4gdGhhdCB0aGV5IGhhdmUgbGVzcyBmZWF0dXJlcyBzdWNoIGFzIHNoYWRvd3MsIGZpbGxzIGFuZCB0aGUgYWJpbGl0eVxuICAgICogdG8gdXNlIFdlYiBGb250cy4gSG93ZXZlciB5b3UgdHJhZGUgdGhpcyBmbGV4aWJpbGl0eSBmb3IgcHVyZSByZW5kZXJpbmcgc3BlZWQuIFlvdSBjYW4gYWxzbyBjcmVhdGUgdmlzdWFsbHkgY29tcGVsbGluZyBCaXRtYXBUZXh0cyBieVxuICAgICogcHJvY2Vzc2luZyB0aGUgZm9udCB0ZXh0dXJlIGluIGFuIGltYWdlIGVkaXRvciBmaXJzdCwgYXBwbHlpbmcgZmlsbHMgYW5kIGFueSBvdGhlciBlZmZlY3RzIHJlcXVpcmVkLlxuICAgICpcbiAgICAqIFRvIGNyZWF0ZSBtdWx0aS1saW5lIHRleHQgaW5zZXJ0IFxcciwgXFxuIG9yIFxcclxcbiBlc2NhcGUgY29kZXMgaW50byB0aGUgdGV4dCBzdHJpbmcuXG4gICAgKlxuICAgICogVG8gY3JlYXRlIGEgQml0bWFwVGV4dCBkYXRhIGZpbGVzIHlvdSBjYW4gdXNlOlxuICAgICpcbiAgICAqIEJNRm9udCAoV2luZG93cywgZnJlZSk6IGh0dHA6Ly93d3cuYW5nZWxjb2RlLmNvbS9wcm9kdWN0cy9ibWZvbnQvXG4gICAgKiBHbHlwaCBEZXNpZ25lciAoT1MgWCwgY29tbWVyY2lhbCk6IGh0dHA6Ly93d3cuNzFzcXVhcmVkLmNvbS9lbi9nbHlwaGRlc2lnbmVyXG4gICAgKiBMaXR0ZXJhIChXZWItYmFzZWQsIGZyZWUpOiBodHRwOi8va3ZhemFycy5jb20vbGl0dGVyYS9cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSNiaXRtYXBUZXh0XG4gICAgKiBAcGFyYW0ge251bWJlcn0geCAtIFggY29vcmRpbmF0ZSB0byBkaXNwbGF5IHRoZSBCaXRtYXBUZXh0IG9iamVjdCBhdC5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IC0gWSBjb29yZGluYXRlIHRvIGRpc3BsYXkgdGhlIEJpdG1hcFRleHQgb2JqZWN0IGF0LlxuICAgICogQHBhcmFtIHtzdHJpbmd9IGZvbnQgLSBUaGUga2V5IG9mIHRoZSBCaXRtYXBUZXh0IGFzIHN0b3JlZCBpbiBQaGFzZXIuQ2FjaGUuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW3RleHQ9JyddIC0gVGhlIHRleHQgdGhhdCB3aWxsIGJlIHJlbmRlcmVkLiBUaGlzIGNhbiBhbHNvIGJlIHNldCBsYXRlciB2aWEgQml0bWFwVGV4dC50ZXh0LlxuICAgICogQHBhcmFtIHtudW1iZXJ9IFtzaXplPTMyXSAtIFRoZSBzaXplIHRoZSBmb250IHdpbGwgYmUgcmVuZGVyZWQgYXQgaW4gcGl4ZWxzLlxuICAgICogQHBhcmFtIHtQaGFzZXIuR3JvdXB9IFtncm91cF0gLSBPcHRpb25hbCBHcm91cCB0byBhZGQgdGhlIG9iamVjdCB0by4gSWYgbm90IHNwZWNpZmllZCBpdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBXb3JsZCBncm91cC5cbiAgICAqIEByZXR1cm4ge1BoYXNlci5CaXRtYXBUZXh0fSBUaGUgbmV3bHkgY3JlYXRlZCBiaXRtYXBUZXh0IG9iamVjdC5cbiAgICAqL1xuICAgIHB1YmxpYyBiaXRtYXBUZXh0KHg/OiBudW1iZXIsIHk/OiBudW1iZXIsIGZvbnQ/OiBzdHJpbmcsIHRleHQ6IHN0cmluZyA9IFwiXCIsIHNpemU6IG51bWJlciA9IDMyLCBncm91cD86IFBoYXNlci5Hcm91cCk6IFBoYXNlci5CaXRtYXBUZXh0IHtcbiAgICAgICAgaWYgKGdyb3VwID09PSB1bmRlZmluZWQpIHsgZ3JvdXAgPSB0aGlzLnRhcmdldEdyb3VwOyB9XG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBQaGFzZXIuQml0bWFwVGV4dCh0aGlzLmdhbWUsIHgsIHksIGZvbnQsIHRleHQsIHNpemUpKTtcbiAgICB9XG5cbiAgICAvLyBkaWpvbiBzcGVjaWZpYyBkaXNwbGF5IG9iamVjdHNcbiAgICBwdWJsaWMgZFNwcml0ZSh4PzogbnVtYmVyLCB5PzogbnVtYmVyLCBrZXk/OiBzdHJpbmcgfCBQaGFzZXIuUmVuZGVyVGV4dHVyZSB8IFBoYXNlci5CaXRtYXBEYXRhIHwgUElYSS5UZXh0dXJlLCBmcmFtZT86IHN0cmluZyB8IG51bWJlciwgbmFtZT86IHN0cmluZywgY29tcG9uZW50cz86IENvbXBvbmVudFtdLCBncm91cD86IFBoYXNlci5Hcm91cCk6IFNwcml0ZSB7XG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy50YXJnZXRHcm91cDsgfVxuICAgICAgICB0aGlzLnRhcmdldEdyb3VwID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGdyb3VwLmFkZChuZXcgU3ByaXRlKHgsIHksIGtleSwgZnJhbWUsIG5hbWUsIGNvbXBvbmVudHMpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZEdyb3VwKHg/OiBudW1iZXIsIHk/OiBudW1iZXIsIG5hbWU/OiBzdHJpbmcsIGFkZFRvU3RhZ2U/OiBib29sZWFuLCBjb21wb25lbnRzPzogQ29tcG9uZW50W10sIGVuYWJsZUJvZHk/OiBib29sZWFuLCBwaHlzaWNzQm9keVR5cGU/OiBudW1iZXIsIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogR3JvdXAge1xuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCAmJiBhZGRUb1N0YWdlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7XG4gICAgICAgICAgICB0aGlzLnRhcmdldEdyb3VwID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBncm91cC5hZGQobmV3IEdyb3VwKHgsIHksIG5hbWUsIGFkZFRvU3RhZ2UsIGNvbXBvbmVudHMsIGVuYWJsZUJvZHksIHBoeXNpY3NCb2R5VHlwZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBHcm91cCh4LCB5LCBuYW1lLCBhZGRUb1N0YWdlLCBjb21wb25lbnRzLCBlbmFibGVCb2R5LCBwaHlzaWNzQm9keVR5cGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkVGV4dCh4OiBudW1iZXIsIHk6IG51bWJlciwgdGV4dD86IHN0cmluZywgZm9udE5hbWU/OiBzdHJpbmcsIGZvbnRTaXplPzogbnVtYmVyLCBmb250Q29sb3I/OiBzdHJpbmcsIGZvbnRBbGlnbj86IHN0cmluZywgd29yZFdyYXA/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciwgbGluZVNwYWNpbmc/OiBudW1iZXIsIHNldHRpbmdzPzogT2JqZWN0LCBncm91cD86IFBoYXNlci5Hcm91cCk6IFRleHQge1xuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCkgeyBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7IH1cbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBncm91cC5hZGQobmV3IFRleHQoeCwgeSwgdGV4dCwgZm9udE5hbWUsIGZvbnRTaXplLCBmb250Q29sb3IsIGZvbnRBbGlnbiwgd29yZFdyYXAsIHdpZHRoLCBsaW5lU3BhY2luZywgc2V0dGluZ3MpKTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGRCaXRtYXBUZXh0KHg6bnVtYmVyID0gMCwgeTpudW1iZXIgPSAwLCBmb250OnN0cmluZyA9IG51bGwsIHRleHQ6c3RyaW5nID0gXCJcIiwgc2l6ZTpudW1iZXIgPSAxMiwgYWxpZ246c3RyaW5nID0gJ2xlZnQnLCBjb2xvcjpudW1iZXIgPSAweGZmZmZmZiwgc21vb3RoaW5nOmJvb2xlYW4gPSB0cnVlLCBhdXRvRmxhdHRlbjpib29sZWFuID0gdHJ1ZSwgbWFrZUltYWdlOmJvb2xlYW4gPSBmYWxzZSwgZ3JvdXA/OiBQaGFzZXIuR3JvdXApOiBCaXRtYXBUZXh0IHtcbiAgICAgICAgaWYgKGdyb3VwID09PSB1bmRlZmluZWQpIHsgZ3JvdXAgPSB0aGlzLnRhcmdldEdyb3VwOyB9XG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBCaXRtYXBUZXh0KHgsIHksIGZvbnQsIHRleHQsIHNpemUsIGFsaWduLCBjb2xvciwgc21vb3RoaW5nLCBhdXRvRmxhdHRlbiwgbWFrZUltYWdlKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNwaW5lKGFzc2V0TmFtZTogc3RyaW5nID0gJycsIHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIGdyb3VwPzogUGhhc2VyLkdyb3VwKSB7XG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy50YXJnZXRHcm91cDsgfVxuICAgICAgICB0aGlzLnRhcmdldEdyb3VwID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGdyb3VwLmFkZChuZXcgU3BpbmUoYXNzZXROYW1lLCB4LCB5KSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldERlZmF1bHRMYXllcih2YWx1ZTogUGhhc2VyLkdyb3VwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ0FVVElPTjogQ2hhbmdpbmcgdGhlIGRlZmF1bHQgbGF5ZXIgd2lsbCBjaGFuZ2UgdGhlIHRhcmdldCBncm91cCBmb3IgLmFkZFwiKTtcbiAgICAgICAgdGhpcy5fZGVmYXVsdExheWVyID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkZWZhdWx0TGF5ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0TGF5ZXI7XG4gICAgfVxuICAgIC8vIGdldHRlciAvIHNldHRlclxuICAgIHB1YmxpYyBzZXQgdGFyZ2V0R3JvdXAodmFsdWU6IFBoYXNlci5Hcm91cCkge1xuICAgICAgICB0aGlzLl90YXJnZXRHcm91cCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdGFyZ2V0R3JvdXAoKTogUGhhc2VyLkdyb3VwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RhcmdldEdyb3VwIHx8IHRoaXMuX2RlZmF1bHRMYXllcjtcbiAgICB9XG59IiwiLyoqXG4gKiBTZXF1ZW5jZU1hbmFnZXJcbiAqL1xuaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xuaW1wb3J0IHtHYW1lfSBmcm9tICcuLi9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFNlcXVlbmNlTWFuYWdlciB7XG4gICAgcHVibGljIGdhbWU6IEdhbWU7XG5cbiAgICBwcml2YXRlIF9kZWZhdWx0SW50ZXJ2YWwgPSAyMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdhbWUgPSBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWU7XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgcHJpdmF0ZSBfZXhlY3V0ZU1ldGhvZChzZXF1ZW5jZTogQXJyYXk8RnVuY3Rpb24+LCBjb250ZXh0OiBPYmplY3QsIGNhbGxiYWNrOiBGdW5jdGlvbiwgY2FsbGJhY2tDb250ZXh0OiBPYmplY3QpIHtcbiAgICAgICAgdmFyIGZ1bmMgPSBzZXF1ZW5jZS5zaGlmdCgpO1xuICAgICAgICBpZiAodHlwZW9mIGZ1bmMgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb250ZXh0ICE9PSAndW5kZWZpbmVkJyAmJiBjb250ZXh0KSB7XG4gICAgICAgICAgICBmdW5jLmNhbGwoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VxdWVuY2UubGVuZ3RoID09PSAwICYmIGNhbGxiYWNrICYmIGNhbGxiYWNrQ29udGV4dCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbChjYWxsYmFja0NvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICBwdWJsaWMgcnVuKHNlcXVlbmNlOiBBcnJheTxGdW5jdGlvbj4sIGNvbnRleHQ6IE9iamVjdCwgaW50ZXJ2YWw6IG51bWJlciwgY29tcGxldGVDYWxsYmFjazogRnVuY3Rpb24sIGNvbXBsZXRlQ2FsbGJhY2tDb250ZXh0OiBPYmplY3QpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZXh0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb250ZXh0IG11c3QgYmUgcHJvdmlkZWQgZm9yIHRoZSBzZXF1ZW5jZSBtZXRob2RzJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGludGVydmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaW50ZXJ2YWwgPSB0aGlzLl9kZWZhdWx0SW50ZXJ2YWw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VxdWVuY2UubGVuZ3RoID09PSAwICYmIHR5cGVvZiBjb21wbGV0ZUNhbGxiYWNrICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29tcGxldGVDYWxsYmFja0NvbnRleHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb21wbGV0ZUNhbGxiYWNrLmNhbGwoY29tcGxldGVDYWxsYmFja0NvbnRleHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGludGVydmFsID09PSAwKSB7XG4gICAgICAgICAgICB3aGlsZSAoc2VxdWVuY2UubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICB0aGlzLl9leGVjdXRlTWV0aG9kKHNlcXVlbmNlLCBjb250ZXh0LCB0eXBlb2YgY29tcGxldGVDYWxsYmFjayA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogY29tcGxldGVDYWxsYmFjaywgdHlwZW9mIGNvbXBsZXRlQ2FsbGJhY2tDb250ZXh0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBjb21wbGV0ZUNhbGxiYWNrQ29udGV4dCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZXZlbnQgPSB0aGlzLmdhbWUudGltZS5ldmVudHMucmVwZWF0KGludGVydmFsLCBzZXF1ZW5jZS5sZW5ndGgsIHRoaXMuX2V4ZWN1dGVNZXRob2QsIHRoaXMsIHNlcXVlbmNlLCBjb250ZXh0LCB0eXBlb2YgY29tcGxldGVDYWxsYmFjayA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogY29tcGxldGVDYWxsYmFjaywgdHlwZW9mIGNvbXBsZXRlQ2FsbGJhY2tDb250ZXh0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBjb21wbGV0ZUNhbGxiYWNrQ29udGV4dCk7XG4gICAgICAgIGV2ZW50LnRpbWVyLnBhdXNlZCA9IGZhbHNlO1xuICAgIH1cbn0iLCIvKipcbiAqIFN0YXRlXG4gKi9cbmltcG9ydCB7QXBwbGljYXRpb259IGZyb20gJy4uL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7R2FtZSwgR2FtZU9iamVjdEZhY3Rvcnl9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHtNZWRpYXRvcn0gZnJvbSAnLi4vbXZjJztcbmltcG9ydCB7UHJlZmFiQnVpbGRlcn0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgU3RhdGUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuICAgIHB1YmxpYyBwcmVmYWJzOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgIHB1YmxpYyBncm91cHM6IHsgW25hbWU6IHN0cmluZ106IGFueSB9ID0ge307XG5cbiAgICBwcm90ZWN0ZWQgX2F1ZGlvOiBQaGFzZXIuU291bmRbXSA9IFtdO1xuICAgIHByb3RlY3RlZCBfbWVkaWF0b3I6IE1lZGlhdG9yID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgX3NjZW5lRGF0YToge3ByZWZhYnM6IGFueVtdfSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfYWxsb3dVcGRhdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgLy8gUGhhc2VyLlN0YXRlIG92ZXJyaWRlc1xuICAgIHB1YmxpYyBpbml0KGFyZ3M/OiBhbnkpOiB2b2lkIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBwcmVsb2FkKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5wcmVsb2FkSUQpXG4gICAgICAgICAgICB0aGlzLmdhbWUuYXNzZXQubG9hZEFzc2V0cyh0aGlzLnByZWxvYWRJRCk7XG4gICAgfVxuXG4gICAgLy8gU3RhdGUgTG9vcCAtIE5vIGxvbmdlciBoYW5kZWQgYnkgUGhhc2VycyBpbnRlZ3JhdGVkIHVwZGF0ZSwgYWxsb3dpbmcgdXMgdG8gZWFzaWx5IHBhdXNlXG4gICAgLy8gd2l0aG91dCByZWx5aW5nIG9uIHRoaXMuZ2FtZS5wYXVzZSAtIHdoaWNoIGhhbHRzIGEgZ3JlYXQgZGVhbCBvZiBvdGhlciBmdW5jdGlvbmFsaXR5IHdlIG1heSBuZWVkLlxuICAgIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9hbGxvd1VwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJlc3VtZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fYWxsb3dVcGRhdGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBwYXVzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fYWxsb3dVcGRhdGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlU3RhdGUoKTogdm9pZCB7IFxuICAgICAgICBjb25zb2xlLmxvZyhcIlN0YXRlOiBDYWxsaW5nIHVwZGF0ZVN0YXRlKCkgLSB5b3Ugc2hvdWxkIG92ZXJyaWRlIHRoaXMgZm9yIGxvZ2ljIGxvb3BzLCBub3QgdXBkYXRlKCkuXCIpO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZ2FtZS5hc3NldC5hbGxTb3VuZHNEZWNvZGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hc3NldC5vbkxvYWRDb21wbGV0ZUFuZEF1ZGlvRGVjb2RlZC5hZGRPbmNlKHRoaXMuY3JlYXRlLCB0aGlzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fc2NlbmVEYXRhICE9PSBudWxsKSB7XG4gICAgICAgICAgICBQcmVmYWJCdWlsZGVyLmNyZWF0ZVNjZW5lRnJvbSh0aGlzLl9zY2VuZURhdGEsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXBwLmVuc3VyZUF1ZGlvQ29udGV4dFVubG9ja2VkKCk7XG4gICAgICAgIHRoaXMuYnVpbGRJbnRlcmZhY2UoKTtcbiAgICAgICAgdGhpcy5hZnRlckJ1aWxkSW50ZXJmYWNlKCk7XG4gICAgICAgIHRoaXMuc3RhcnRCdWlsZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaHV0ZG93bihyZW1vdmVNZWRpYXRvcjogYm9vbGVhbiA9IHRydWUsIHJlbW92ZUF1ZGlvOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgICBpZiAocmVtb3ZlTWVkaWF0b3IpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlTWVkaWF0b3IoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVtb3ZlQXVkaW8pIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQXVkaW8oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLnNodXRkb3duKCk7XG4gICAgfVxuXG4gICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICBwdWJsaWMgbGlzdEJ1aWxkU2VxdWVuY2UoKTogRnVuY3Rpb25bXSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYnVpbGRJbnRlcmZhY2UoKTogdm9pZCB7IH1cblxuICAgIHB1YmxpYyBhZnRlckJ1aWxkSW50ZXJmYWNlKCk6IHZvaWQgeyB9XG5cbiAgICBwdWJsaWMgc3RhcnRCdWlsZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nYW1lLnNlcXVlbmNlLnJ1bih0aGlzLmxpc3RCdWlsZFNlcXVlbmNlKCksIHRoaXMsIHRoaXMuYnVpbGRJbnRlcnZhbCwgdGhpcy5wcmVBZnRlckJ1aWxkLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHJlQWZ0ZXJCdWlsZCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmdhbWUudHJhbnNpdGlvbiA9PT0gJ3VuZGVmaW5lZCcgfHwgIXRoaXMuZ2FtZS50cmFuc2l0aW9uLmNhblRyYW5zaXRpb25PdXQoKSkge1xuICAgICAgICAgICAgdGhpcy5hZnRlckJ1aWxkKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lLnRyYW5zaXRpb24uY2FuVHJhbnNpdGlvbk91dCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLnRyYW5zaXRpb24ub25UcmFuc2l0aW9uT3V0Q29tcGxldGUuYWRkT25jZSh0aGlzLmFmdGVyQnVpbGQsIHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS50cmFuc2l0aW9uLnRyYW5zaXRpb25PdXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhZnRlckJ1aWxkKCk6IHZvaWQgeyB9XG5cbiAgICBwdWJsaWMgYWRkQXVkaW8odHJhY2s6IFBoYXNlci5Tb3VuZCk6IFBoYXNlci5Tb3VuZCB7XG4gICAgICAgIGlmICghdGhpcy5fYXVkaW8pIHtcbiAgICAgICAgICAgIHRoaXMuX2F1ZGlvID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYXVkaW8ucHVzaCh0cmFjayk7XG4gICAgICAgIHJldHVybiB0cmFjaztcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlQXVkaW8oKTogdm9pZCB7XG4gICAgICAgIHZhciBzb3VuZDogUGhhc2VyLlNvdW5kO1xuICAgICAgICBpZiAoIXRoaXMuX2F1ZGlvKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAodGhpcy5fYXVkaW8ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc291bmQgPSB0aGlzLl9hdWRpby5wb3AoKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc291bmQgIT09ICd1bmRlZmluZWQnICYmIHNvdW5kICE9IG51bGwgJiYgdHlwZW9mIHNvdW5kLnN0b3AgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzb3VuZC5vblN0b3AgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdW5kLm9uU3RvcC5yZW1vdmVBbGwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc291bmQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZU1lZGlhdG9yKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX21lZGlhdG9yKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLl9tZWRpYXRvci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuX21lZGlhdG9yID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBnZXR0ZXIgLyBzZXR0ZXJcbiAgICBwdWJsaWMgZ2V0IHByZWxvYWRJRCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGJ1aWxkSW50ZXJ2YWwoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIDEwO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYWRkKCk6IEdhbWVPYmplY3RGYWN0b3J5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZS5hZGRUb0dhbWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhcHAoKTogQXBwbGljYXRpb24ge1xuICAgICAgICByZXR1cm4gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGdhbWUoKTogR2FtZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwcC5nYW1lO1xuICAgIH1cblxuICAgIC8qIEVYUEVSSU1FTlQgQ09OVEVOVCBDUkVBVElPTiBGUk9NIFVOSVRZIFNDRU5FIEVYUE9SVCAqL1xuICAgICBwdWJsaWMgY3JlYXRlUHJlZmFiRnJvbURhdGEocHJlZkRhdGE6IGFueSk6IGFueSB7XG4gICAgICAgIGlmIChwcmVmRGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJlZmFiQnVpbGRlci5jcmVhdGVQcmVmYWJPYmplY3RzKHByZWZEYXRhLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXNzaWduUHJlZmFiKG9iamVjdDogYW55KSB7XG4gICAgICAgIC8vIE92ZXJyaWRlIHRoaXMgdG8gaGFuZGxlIGFzc2lnbm1lbnQgb2YgY2hpbGQgcHJlZmFicy5cbiAgICB9XG4gICAgXG4gICAgcHJvdGVjdGVkIF9maW5kUHJlZmFiKG5hbWU6IHN0cmluZyk6IFBoYXNlci5JbWFnZSB7XG4gICAgICAgIGlmICh0aGlzLnByZWZhYnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByZWZhYnNbbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZmluZEdyb3VwKG5hbWU6IHN0cmluZyk6IFBoYXNlci5Hcm91cCB7XG4gICAgICAgIGlmICh0aGlzLmdyb3Vwcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBzW25hbWVdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9ICAgXG59IiwiLyoqXG4gKiBTdG9yYWdlTWFuYWdlclxuICovXG5pbXBvcnQge0FwcGxpY2F0aW9ufSBmcm9tICcuLi9hcHBsaWNhdGlvbic7XG5pbXBvcnQge0dhbWV9IGZyb20gJy4uL2NvcmUnO1xuZXhwb3J0IGNsYXNzIFN0b3JhZ2VNYW5hZ2VyIHtcbiAgICBwdWJsaWMgZ2FtZTogR2FtZTtcbiAgICBwcml2YXRlIF9sb2NhbFN0b3JhZ2VBdmFpbGFibGU6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lO1xuICAgICAgICB0aGlzLl9pbml0KCk7XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgcHJpdmF0ZSBfaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fbG9jYWxTdG9yYWdlQXZhaWxhYmxlID0gdGhpcy5fZ2V0SXNMb2NhbFN0b3JhZ2VBdmFpbGFibGUoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2xvY2FsIHN0b3JhZ2UgYXZhaWxhYmxlJywgdGhpcy5fbG9jYWxTdG9yYWdlQXZhaWxhYmxlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRJc0xvY2FsU3RvcmFnZUF2YWlsYWJsZSgpOiBib29sZWFuIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiAnbG9jYWxTdG9yYWdlJyBpbiB3aW5kb3cgJiYgd2luZG93Wydsb2NhbFN0b3JhZ2UnXSAhPT0gbnVsbDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0U3RyaW5nKGRhdGE6IE9iamVjdCB8IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGpzb25EYXRhO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBqc29uRGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ291bGQgbm90IGNvbnZlcnQnICsgZGF0YSArICcgdG8ganNvbicpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ganNvbkRhdGE7XG4gICAgfVxuXG4gICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICAvKipcbiAgICAqIGdldHMgc3RvcmVkIGRhdGEgd2l0aCB0aGUgc3BlY2lmaWVkIGtleVxuICAgICogQHBhcmFtICB7U3RyaW5nfSAga2V5ICAgIHRoZSBMb2NhbFN0b3JhZ2Uga2V5IHdoZXJlIHRoZSBkYXRhIGlzIHN0b3JlZFxuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gaXNKU09OIGlzIHRoZSBzdG9yZWQgZGF0YSBqdXN0IGEgc3RyaW5nIG9yIGlzIGl0IHN0cmluZ2lmaWVkIGpzb24gKGFzc3VtZXMgaXQncyBKU09OKVxuICAgICogQHJldHVybiB7U3RyaW5nIHwgT2JqZWN0fSB0aGUgcmV0cmlldmVkIGRhdGEgLSBpZiBpdCdzIGEgSlNPTiBzdHJpbmcsIHdlIHBhcnNlIHRoZSBkYXRhIGFuZCByZXR1cm4gdGhlIEpTT04gb2JqZWN0XG4gICAgKi9cbiAgICBwdWJsaWMgZ2V0RnJvbUxvY2FsU3RvcmFnZShrZXk6IHN0cmluZywgaXNKU09OOiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICB2YXIgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBkYXRhIHNhdmVkIHdpdGggdGhlIGtleScsIGtleSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0pTT04gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHNhdmVzIGRhdGEgdG8gbG9jYWxzdG9yYWdlXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGtleSAgIHRoZSBMb2NhbFN0b3JhZ2Uga2V5IHRoZSBkYXRhIHdpbGwgYmUgc2F2ZWQgdG9cbiAgICAqIEBwYXJhbSAge1N0cmluZ3xPYmplY3R9IHZhbHVlIHRoZSBkYXRhIHRvIHNhdmUgKGlmIGl0J3MgYW4gb2JqZWN0LCB3aWxsIGJlIHN0cmluZ2lmaWVkIGJlZm9yZSBzYXZpbmcpXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIHNhdmVUb0xvY2FsU3RvcmFnZShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IE9iamVjdCkge1xuICAgICAgICBpZiAoIXRoaXMuX2xvY2FsU3RvcmFnZUF2YWlsYWJsZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIGxvY2FsIHN0b3JhZ2UnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB0aGlzLl9nZXRTdHJpbmcodmFsdWUpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3lvdXIgZGF0YSBjb3VsZCBub3QgYmUgc2F2ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICogY2xlYXIgc3RvcmVkIGRhdGFcbiAgICAqIEBwYXJhbSAge1N0cmluZ30ga2V5IHRoZSBMb2NhbFN0b3JhZ2Uga2V5IHRvIGNsZWFyXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIGNsZWFyRnJvbUxvY2FsU3RvcmFnZShrZXk6IHN0cmluZykge1xuICAgICAgICBpZiAoIXRoaXMuX2xvY2FsU3RvcmFnZUF2YWlsYWJsZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIGxvY2FsIHN0b3JhZ2UnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7IH1cbiAgICB9XG59IiwiLyoqXG4gKiBUcmFuc2l0aW9uTWFuYWdlclxuICovXG5pbXBvcnQge0FwcGxpY2F0aW9ufSBmcm9tICcuLi9hcHBsaWNhdGlvbic7XG5pbXBvcnQge0dhbWUsIEdhbWVPYmplY3RGYWN0b3J5fSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7SVRyYW5zaXRpb24sIElUcmFuc2l0aW9uSGFuZGxlciwgSVByZWxvYWRIYW5kbGVyfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGNsYXNzIFRyYW5zaXRpb25NYW5hZ2VyIHtcbiAgICBwdWJsaWMgZ2FtZTogR2FtZTtcbiAgICBwdWJsaWMgb25UcmFuc2l0aW9uT3V0Q29tcGxldGU6IFBoYXNlci5TaWduYWwgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuICAgIHB1YmxpYyBvblRyYW5zaXRpb25JbkNvbXBsZXRlOiBQaGFzZXIuU2lnbmFsID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICBcbiAgICBwcml2YXRlIF9pc0luVHJhbnNpdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBfdHJhbnNpdGlvbjogSVRyYW5zaXRpb24gPSBudWxsO1xuICAgIHByaXZhdGUgX3RyYW5zaXRpb25zOiBPYmplY3QgPSB7fTtcbiAgICBwcml2YXRlIF9leGNlcHRpb25zOiBPYmplY3QgPSB7fTtcblxuICAgIHByaXZhdGUgX2Zyb21TdGF0ZTogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIF90b1N0YXRlOiBzdHJpbmcgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfYXJnczogYW55ID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdhbWUgPSBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYWRkKGlkOiBzdHJpbmcsIG91dEhhbmRsZXI6IElUcmFuc2l0aW9uSGFuZGxlciwgcHJlbG9hZEhhbmRsZXI6IElQcmVsb2FkSGFuZGxlciwgaW5IYW5kbGVyOiBJVHJhbnNpdGlvbkhhbmRsZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbnNbaWRdID0ge1xuICAgICAgICAgICAgb3V0SGFuZGxlcjogb3V0SGFuZGxlcixcbiAgICAgICAgICAgIHByZWxvYWRIYW5kbGVyOiBwcmVsb2FkSGFuZGxlcixcbiAgICAgICAgICAgIGluSGFuZGxlcjogaW5IYW5kbGVyXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0VHJhbnNpdGlvbihpblN0YXRlOiBzdHJpbmcsIG91dFN0YXRlOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIHRyYW5zaXRpb24gPSB0aGlzLl90cmFuc2l0aW9uc1tpblN0YXRlICsgJy8nICsgb3V0U3RhdGVdO1xuICAgICAgICBpZiAodHlwZW9mIHRyYW5zaXRpb24gPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHRoaXMuX3RyYW5zaXRpb25zWydhbGwnXTtcblxuICAgICAgICByZXR1cm4gdHlwZW9mIHRyYW5zaXRpb24gPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHRyYW5zaXRpb247XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdHJhbnNpdGlvbkluQ29tcGxldGUoKSB7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24gPSB0aGlzLl9nZXRUcmFuc2l0aW9uKHRoaXMuX2Zyb21TdGF0ZSwgdGhpcy5fdG9TdGF0ZSk7XG4gICAgICAgIGlmICghdGhpcy5fdHJhbnNpdGlvbilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIubG9hZFN0YXJ0ID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgdGhpcy5nYW1lLmFzc2V0Lm9uTG9hZFN0YXJ0LmFkZE9uY2UodGhpcy5fdHJhbnNpdGlvbi5wcmVsb2FkSGFuZGxlci5sb2FkU3RhcnQsIHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fdHJhbnNpdGlvbi5wcmVsb2FkSGFuZGxlci5sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hc3NldC5vbkZpbGVDb21wbGV0ZS5hZGQodGhpcy5fdHJhbnNpdGlvbi5wcmVsb2FkSGFuZGxlci5sb2FkUHJvZ3Jlc3MsIHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nYW1lLmFzc2V0Lm9uTG9hZENvbXBsZXRlQW5kQXVkaW9EZWNvZGVkLmFkZE9uY2UodGhpcy5fcHJlbG9hZENvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5vblRyYW5zaXRpb25JbkNvbXBsZXRlLmRpc3BhdGNoKCk7XG5cblxuICAgICAgICB0aGlzLmdhbWUuY2hhbmdlU3RhdGUodGhpcy5fdG9TdGF0ZSwgdGhpcy5fYXJncyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdHJhbnNpdGlvbk91dENvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5vblRyYW5zaXRpb25PdXRDb21wbGV0ZS5kaXNwYXRjaCgpO1xuICAgICAgICB0aGlzLl9pc0luVHJhbnNpdGlvbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3ByZWxvYWRDb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiA9IHRoaXMuX2dldFRyYW5zaXRpb24odGhpcy5fZnJvbVN0YXRlLCB0aGlzLl90b1N0YXRlKTtcbiAgICAgICAgaWYgKCF0aGlzLl90cmFuc2l0aW9uKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHRoaXMuZ2FtZS5hc3NldC5vbkZpbGVDb21wbGV0ZS5yZW1vdmUodGhpcy5fdHJhbnNpdGlvbi5wcmVsb2FkSGFuZGxlci5sb2FkUHJvZ3Jlc3MsIHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fdHJhbnNpdGlvbi5wcmVsb2FkSGFuZGxlci5sb2FkQ29tcGxldGUgPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyLmxvYWRDb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NsZWFyVHJhbnNpdGlvbigpIHtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbi5vdXRIYW5kbGVyLnRyYW5zaXRpb25JbkNvbXBsZXRlLnJlbW92ZSh0aGlzLl90cmFuc2l0aW9uT3V0Q29tcGxldGUsIHRoaXMpO1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uLmluSGFuZGxlci50cmFuc2l0aW9uT3V0Q29tcGxldGUucmVtb3ZlKHRoaXMuX3RyYW5zaXRpb25JbkNvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lLmFzc2V0Lm9uTG9hZENvbXBsZXRlQW5kQXVkaW9EZWNvZGVkLnJlbW92ZSh0aGlzLl9wcmVsb2FkQ29tcGxldGUsIHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWUuYXNzZXQub25Mb2FkU3RhcnQucmVtb3ZlKHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIubG9hZFN0YXJ0LCB0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5nYW1lLmFzc2V0Lm9uRmlsZUNvbXBsZXRlLnJlbW92ZSh0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyLmxvYWRQcm9ncmVzcywgdGhpcy5fdHJhbnNpdGlvbi5wcmVsb2FkSGFuZGxlcik7XG5cbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gcHVibGljIG1ldGhvZHNcblxuICAgIC8qKlxuICAgICogQWRkcyBhIHRyYW5zaXRpb24gaGFuZGxlciBmb3IgYSBzcGVjaWZpYyBmcm9tIC8gdG8gc3RhdGUgY29tYmluYXRpb25cbiAgICAqIHBhc3MgdGhlIGZyb20gLyB0byBzdGF0ZXMgYXMgdGhlIGZpcnN0IDIgYXJndW1lbnRzLCBhbmQgYWRkaXRpb25hbCBhcmd1bWVudHMgZm9yIHdoaWNoIGluc3RhbmNlIHdpbGwgaGFuZGxlIHRoZSB0cmFuc2l0aW9uXG4gICAgKiBpZiBvbmx5IDMgYXJncyBhcmUgcGFzc2VkLCB0aGUgaW5zdGFuY2Ugd2lsbCBoYW5kbGUgdGhlIGluIC8gb3V0IHRyYW5zaXRpb24sIGFuZCB0aGUgcHJlbG9hZGluZ1xuICAgICogRS5HLlxuICAgICogdGhpcy5nYW1lLnRyYW5zaXRpb24uYWRkKHRoaXMuZ2FtZS5jb25zdGFudHMuU1RBVEVfUFJFTE9BRCwgdGhpcy5nYW1lLmNvbnN0YW50cy5TVEFURV9NRU5VLCB0aGlzLmdhbWUucHJlbG9hZGVyKTtcbiAgICAqXG4gICAgKiBpZiA1IGFyZ3VtZW50cyBhcmUgcGFzc2VkLCBhIGRpZmZlcmVudCBpbnN0YW5jZSBjYW4gYmUgdXNlZCBmb3IgaW4gdHJhbnNpdGlvbiwgcHJlbG9hZGluZywgYW5kIG91dCB0cmFuc2l0aW9uXG4gICAgKiBFLkcuXG4gICAgKiB0aGlzLmdhbWUudHJhbnNpdGlvbi5hZGQodGhpcy5nYW1lLmNvbnN0YW50cy5TVEFURV9QUkVMT0FELCB0aGlzLmdhbWUuY29uc3RhbnRzLlNUQVRFX01FTlUsIHRoaXMuZ2FtZS50cmFuc2l0aW9uT3V0SGFuZGxlciwgdGhpcy5nYW1lLnByZWxvYWRIYW5kbGVyLCB0aGlzLmdhbWUudHJhbnNpdGlvbkluSGFuZGxlcik7XG4gICAgKlxuICAgICogdHJhbnNpdGlvbiBoYW5kbGVycyBhcmUgZXhwZWN0ZWQgdG8gYmVoYXZlIGFzIGZvbGxvd3M6XG4gICAgKiBhbiBvdXQgdHJhbnNpdGlvbiBoYW5kbGVyIHNob3VsZCBoYXZlIGEgdHJhbnNpdGlvbkluIG1ldGhvZCBhbmQgZGlzcGF0Y2ggYSB0cmFuc2l0aW9uQ29tcGxldGUgc2lnbmFsIHdoZW4gZG9uZVxuICAgICogYW4gaW4gdHJhbnNpdGlvbiBoYW5kbGVyIHNob3VsZCBoYXZlIGEgdHJhbnNpdGlvbk91dCBtZXRob2QgYW5kIGRpc3BhdGNoIGEgdHJhbnNpdGlvbkNPbXBsZXRlIHNpZ25hbCB3aGVuIGRvbmVcbiAgICAqIGEgcHJlbG9hZCBoYW5kbGVyIHNob3VsZCBoYXZlIGxvYWRTdGFydCwgbG9hZFByb2dyZXNzLCBhbmQgbG9hZENvbXBsZXRlIG1ldGhvZHNcbiAgICAqIHRoZSBsb2FkUHJvZ3Jlc3MgbWV0aG9kIG1heSBhY2NlcHQgYSB1cCB0byA0IHBhcmFtZXRlcnMgZm9yIHByb2dyZXNzIChwZXJjZW50IG9mIGZpbGVzIGxvYWRlZCksIGlkLCBmaWxlSW5kZXgsIGFuZCB0b3RhbEZpbGVzXG4gICAgKlxuICAgICogQHBhcmFtIHtzdHJpbmd9IGZyb21TdGF0ZSAtIHRoZSBzdGF0ZSBiZWluZyB0cmFuc2l0aW9uZWQgZnJvbVxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRvU3RhdGUgLSB0aGUgc3RhdGUgYmVpbmcgdHJhbnNpdGlvbmVkIHRvXG4gICAgKiBAcGFyYW0ge291dEhhbmRsZXJ9IG91dEhhbmRsZXIgLSB0aGUgaW5zdGFuY2UgdGhhdCB3aWxsIGhhbmRsZSB0aGUgdHJhbnNpdGlvbiBmcm9tIHRoZSBmcm9tU3RhdGVcbiAgICAqIEBwYXJhbSB7cHJlbG9hZEhhbmRsZXJ9IHByZWxvYWRIYW5kbGVyIC0gdGhlIGluc3RhbmNlIHRoYXQgd2lsbCBoYW5kbGUgcHJlbG9hZGluZyB0aGUgdG9TdGF0ZVxuICAgICogQHBhcmFtIHtpbkhhbmRsZXJ9IGluSGFuZGxlciAtIHRoZSBpbnN0YW5jZSB0aGF0IHdpbGwgaGFuZGxlIHRoZSBpbiB0cmFuc2l0aW9uIHdoZW4gdGhlIHRvU3RhdGUgaXMgY29tcGxldGVseSBsb2FkZWRcbiAgICAqIEByZXR1cm4ge09iamVjdH0gdHJhbnNpdGlvbiByZWZlcmVuY2UgdGhhdCB3YXMgYWRkZWQgdG8gX3RyYW5zaXRpb25zXG4gICAgKi9cbiAgICBwdWJsaWMgYWRkKGZyb21TdGF0ZTogc3RyaW5nLCB0b1N0YXRlOiBzdHJpbmcgfCBJUHJlbG9hZEhhbmRsZXIsIG91dEhhbmRsZXI/OiBJVHJhbnNpdGlvbkhhbmRsZXIsIHByZWxvYWRIYW5kbGVyPzogSVByZWxvYWRIYW5kbGVyLCBpbkhhbmRsZXI/OiBJVHJhbnNpdGlvbkhhbmRsZXIpOiB2b2lkIHtcbiAgICAgICAgdmFyIGFyZ3M7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgNSkge1xuICAgICAgICAgICAgaWYgKGZyb21TdGF0ZSA9PT0gJ2FsbCcpIHtcbiAgICAgICAgICAgICAgICBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYWRkKCdhbGwnLCBhcmdzWzBdLCBhcmdzWzBdLCBhcmdzWzBdKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9hZGQoJ2FsbCcsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9hZGQoZnJvbVN0YXRlICsgJy8nICsgdG9TdGF0ZSwgYXJnc1swXSwgYXJnc1swXSwgYXJnc1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fYWRkKGZyb21TdGF0ZSArICcvJyArIHRvU3RhdGUsIG91dEhhbmRsZXIsIHByZWxvYWRIYW5kbGVyLCBpbkhhbmRsZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRBbGwoaGFuZGxlcjogSVByZWxvYWRIYW5kbGVyKTogdm9pZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGQoJ2FsbCcsIGhhbmRsZXIsIGhhbmRsZXIsIGhhbmRsZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQWRkcyBhbiBleGNlcHRpb24gdG8gdGhlIERpam9uLlRyYW5zaXRpb25NYW5hZ2VyIGluIHRoZSBjYXNlIHdoZXJlICdhbGwnIGhhcyBiZWVuIHVzZWRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0ZSAtIHRoZSBzdGF0ZSB0byBhZGQgdGhlIGV4Y2VwdGlvbiBmb3JcbiAgICAqL1xuICAgIHB1YmxpYyBhZGRFeGNlcHRpb24oc3RhdGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9leGNlcHRpb25zW3N0YXRlXSA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBSZW1vdmVzIGEgdHJhbnNpdGlvbiBoYW5kbGVyIGZvciBhIHNwZWNpZmljIGZyb20gLyB0byBzdGF0ZSBjb21iaW5hdGlvblxuICAgICovXG4gICAgcHVibGljIHJlbW92ZShmcm9tU3RhdGU6IHN0cmluZywgdG9TdGF0ZT86IHN0cmluZykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbnNbZnJvbVN0YXRlXSA9IG51bGw7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fdHJhbnNpdGlvbnNbZnJvbVN0YXRlXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25zW2Zyb21TdGF0ZSArICcvJyArIHRvU3RhdGVdID0gbnVsbDtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl90cmFuc2l0aW9uc1tmcm9tU3RhdGUgKyAnLycgKyB0b1N0YXRlXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICogU3RhcnQgdGhlIHRyYW5zaXRpb24gdG8gYSBuZXcgc3RhdGVcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0ZSAtIHRoZSBzdGF0ZSB0byB0cmFuc2l0aW9uIHRvXG4gICAgKiBAcGFyYW0ge2FueX0gYXJncyAtIGFuIG9wdGlvbmFsIHBhcmFtZXRlci4gUGFzcyBpbiBhbiBvYmplY3Qgb2YgdHlwZSBhbnkgY29udGFpbmluZyBzcGVjaWZpYyBwYXJhbWV0ZXJzXG4gICAgKiBmb3IgdGhlIHN0YXRlIHlvdSBhcmUgdHJhbnNpdGlvbmluZyB0by4gVGhlIG9iamVjdCBjYW4gdGhlbiBiZSBkZWNvbnN0cnVjdGVkIGluIHRoYXQgc3RhdGVzIGluaXQoYXJnczogYW55KS5cbiAgICAqL1xuICAgIHB1YmxpYyB0byhzdGF0ZTogc3RyaW5nLCBhcmdzPzogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLl90cmFuc2l0aW9uKVxuICAgICAgICAgICAgdGhpcy5fY2xlYXJUcmFuc2l0aW9uKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2V4Y2VwdGlvbnNbc3RhdGVdKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGlmIChhcmdzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2FyZ3MgPSBhcmdzO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZnJvbVN0YXRlID0gdGhpcy5nYW1lLnN0YXRlLmN1cnJlbnQ7XG4gICAgICAgIHRoaXMuX3RvU3RhdGUgPSBzdGF0ZTtcblxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uID0gdGhpcy5fZ2V0VHJhbnNpdGlvbih0aGlzLl9mcm9tU3RhdGUsIHRoaXMuX3RvU3RhdGUpO1xuXG4gICAgICAgIGlmICghdGhpcy5fdHJhbnNpdGlvbikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIHRyYW5zaXRpb24gZm91bmQgZm9yOicsIHRoaXMuZ2FtZS5zdGF0ZS5jdXJyZW50ICsgJyB0byAnICsgc3RhdGUpO1xuICAgICAgICAgICAgdGhpcy5nYW1lLmNoYW5nZVN0YXRlKHRoaXMuX3RvU3RhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uSW4oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdHJhbnNpdGlvbkluKCkge1xuICAgICAgICBpZiAoIXRoaXMuX3RyYW5zaXRpb24pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIFxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3RyYW5zaXRpb24ub3V0SGFuZGxlci50cmFuc2l0aW9uSW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzSW5UcmFuc2l0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb24ub3V0SGFuZGxlci50cmFuc2l0aW9uSW5Db21wbGV0ZS5hZGRPbmNlKHRoaXMuX3RyYW5zaXRpb25JbkNvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb24ub3V0SGFuZGxlci50cmFuc2l0aW9uSW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjYW5UcmFuc2l0aW9uT3V0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIXRoaXMuX2V4Y2VwdGlvbnNbdGhpcy5nYW1lLnN0YXRlLmN1cnJlbnRdICYmIHRoaXMuX3RyYW5zaXRpb24gJiYgdGhpcy5fdHJhbnNpdGlvbi5pbkhhbmRsZXIgJiYgdHlwZW9mIHRoaXMuX3RyYW5zaXRpb24uaW5IYW5kbGVyLnRyYW5zaXRpb25PdXQgPT09ICdmdW5jdGlvbic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBBZnRlciB0aGUgc3RhdGUgaXMgZnVsbHkgbG9hZGVkIGFuZCAnYnVpbHQnIGEgY2FsbCB0byB0aGlzIGlzIG1hZGVcbiAgICAqIHRoaXMgaXMgY3VycmVudGx5IG1hZGUgZnJvbSBCYXNlU3RhdGUgaW4gdGhlICdhZnRlckJ1aWxkJyBtZXRob2RcbiAgICAqL1xuICAgIHB1YmxpYyB0cmFuc2l0aW9uT3V0KCkge1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uLmluSGFuZGxlci50cmFuc2l0aW9uT3V0Q29tcGxldGUuYWRkT25jZSh0aGlzLl90cmFuc2l0aW9uT3V0Q29tcGxldGUsIHRoaXMpO1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uLmluSGFuZGxlci50cmFuc2l0aW9uT3V0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpc0luVHJhbnNpdGlvbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzSW5UcmFuc2l0aW9uO1xuICAgIH1cbn0iLCJpbXBvcnQge0lOb3RpZmljYXRpb24sSU9ic2VydmVyfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7QXBwbGljYXRpb259IGZyb20gJy4uL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7R2FtZX0gZnJvbSAnLi4vY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBNb2RlbCB7XG4gICAgcHVibGljIGFwcDogQXBwbGljYXRpb247XG4gICAgcHVibGljIGdhbWU6IEdhbWU7XG4gICAgcHJvdGVjdGVkIF9kYXRhOiBhbnk7XG5cbiAgICBwdWJsaWMgc3RhdGljIE1PREVMX05BTUU6IHN0cmluZyA9ICdNb2RlbCc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhS2V5OiBzdHJpbmcgPSBudWxsLCBwcml2YXRlIG1vZGVsTmFtZTogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICB0aGlzLmFwcCA9IEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuZ2FtZSA9IHRoaXMuYXBwLmdhbWU7XG5cbiAgICAgICAgaWYgKGRhdGFLZXkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YShkYXRhS2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYXBwLnJlZ2lzdGVyTW9kZWwodGhpcyk7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBvblJlZ2lzdGVyKCk6dm9pZHtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBvblJlbW92ZWQoKTp2b2lke1xuICAgICAgICBcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0S2V5RXhpc3RzKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUuY2FjaGUuZ2V0SlNPTihrZXkpICE9PSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXREYXRhKGRhdGFLZXk6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGlmICghdGhpcy5nZXRLZXlFeGlzdHMoZGF0YUtleSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNb2RlbDo6IGNhbm5vdCBzZXQgZGF0YSBmcm9tIGtleSAnICsgZGF0YUtleSArICcuIElzIGl0IGluIHRoZSBQaGFzZXIgY2FjaGU/Jyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kYXRhID0gdGhpcy5nYW1lLmNhY2hlLmdldEpTT04oZGF0YUtleSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXREYXRhKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFwcC5yZW1vdmVNb2RlbCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxOYW1lIHx8IE1vZGVsLk1PREVMX05BTUU7XG4gICAgfVxufSIsImltcG9ydCB7TW9kZWx9IGZyb20gJy4vTW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgQ29weU1vZGVsIGV4dGVuZHMgTW9kZWwge1xuICAgIHB1YmxpYyBzdGF0aWMgTU9ERUxfTkFNRTogc3RyaW5nID0gJ2NvcHlNb2RlbCc7XG5cbiAgICBwcml2YXRlIF9sYW5ndWFnZXM6IHsgW2xhbmd1YWdlTmFtZTogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGFLZXk6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgc3VwZXIoZGF0YUtleSk7XG5cbiAgICAgICAgdGhpcy5fbGFuZ3VhZ2VzWydlbiddID0gdGhpcy5fZGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29weShncm91cElkOiBzdHJpbmcsIGl0ZW1JZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29weUdyb3VwKGdyb3VwSWQpW2l0ZW1JZF07XG4gICAgfVxuXG4gICAgcHVibGljIGdldENvcHlHcm91cChncm91cElkOiBzdHJpbmcpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVtncm91cElkXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkTGFuZ3VhZ2UobGFuZ3VhZ2VJZDogc3RyaW5nLCBkYXRhS2V5OiBzdHJpbmcpOiBhbnkge1xuICAgICAgICBpZiAoIXRoaXMuZ2V0S2V5RXhpc3RzKGRhdGFLZXkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nhbm5vdCBhZGQgYW4gYWx0ZXJuYXRlIGxhbmd1YWdlIGZyb20ga2V5ICcgKyBkYXRhS2V5ICsgJy4gSXMgaXQgaW4gdGhlIFBoYXNlciBjYWNoZT8nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2xhbmd1YWdlc1tsYW5ndWFnZUlkXSA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRKU09OKGRhdGFLZXkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VMYW5ndWFnZShsYW5ndWFnZUlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9sYW5ndWFnZXNbbGFuZ3VhZ2VJZF0gPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd0aGVyZSBpcyBubyBsYW5ndWFnZSAnICsgbGFuZ3VhZ2VJZCk7XG5cbiAgICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuX2xhbmd1YWdlc1tsYW5ndWFnZUlkXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIENvcHlNb2RlbC5NT0RFTF9OQU1FO1xuICAgIH1cbn0iLCJpbXBvcnQge0FwcGxpY2F0aW9ufSBmcm9tICcuLi9hcHBsaWNhdGlvbic7XG5pbXBvcnQge0lPYnNlcnZlcixJTm90aWZpY2F0aW9ufSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7R2FtZX0gZnJvbSAnLi4vY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBNZWRpYXRvciBpbXBsZW1lbnRzIElPYnNlcnZlciB7XG4gICAgcHVibGljIHN0YXRpYyBNRURJQVRPUl9OQU1FOiBzdHJpbmcgPSAnTWVkaWF0b3InO1xuXG4gICAgcHJvdGVjdGVkIG1lZGlhdG9yTmFtZTogc3RyaW5nID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgYXBwOiBBcHBsaWNhdGlvbjtcbiAgICBwcm90ZWN0ZWQgZ2FtZTogR2FtZTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfdmlld0NvbXBvbmVudDogYW55ID0gbnVsbCwgYXV0b1JlZzogYm9vbGVhbiA9IHRydWUsIG1lZGlhdG9yTmFtZTogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICB0aGlzLmFwcCA9IEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuZ2FtZSA9IHRoaXMuYXBwLmdhbWU7XG4gICAgICAgIHRoaXMubWVkaWF0b3JOYW1lID0gbWVkaWF0b3JOYW1lO1xuXG4gICAgICAgIGlmIChhdXRvUmVnKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICBwcm90ZWN0ZWQgcmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXBwLnJlZ2lzdGVyTWVkaWF0b3IodGhpcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlbW92ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hcHAucmVtb3ZlTWVkaWF0b3IodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uUmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgICAgIC8vIG92ZXJyaWRlIG1lIGZyZWVseVxuICAgIH1cblxuICAgIHB1YmxpYyBvblJlbW92ZWQoKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbGlzdE5vdGlmaWNhdGlvbkludGVyZXN0cygpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFuZGxlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogSU5vdGlmaWNhdGlvbikge1xuICAgICAgICAvKipcbiAgICAgICAgICogZGVmYXVsdCBpbW1wbGVtZW50YXRpb24gd291bGQgbG9vayBzb21ldGhpbmcgbGlrZTpcbiAgICAgICAgICogc3dpdGNoKCBub3RpZmljYXRpb246IGRpam9uLklOb3RpZmljYXRpb24gKXtcbiAgICAgICAgICogXHRcdGNhc2UgTm90aWZpY2F0aW9ucy5TT01FVEhJTkc6XG4gICAgICAgICAqIFx0XHRcdC8vIGRvIHNvbWV0aGluZ1xuICAgICAgICAgKiBcdFx0XHRicmVhaztcbiAgICAgICAgICogXHRcdGNhc2UgTm90aWZpY2F0aW9ucy5TT01FVEhJTkdfRUxTRTpcbiAgICAgICAgICogXHRcdFx0Ly8gZG8gc29tZXRoaW5nIGVsc2VcbiAgICAgICAgICogXHRcdFx0YnJlYWs7XG4gICAgICAgICAqIH1cbiAgICAgICAgICovXG4gICAgfVxuXG4gICAgcHVibGljIHNlbmROb3RpZmljYXRpb24obm90aWZpY2F0aW9uTmFtZTogc3RyaW5nLCBub3RpZmljYXRpb25Cb2R5PzogYW55KSB7XG4gICAgICAgIHRoaXMuYXBwLnNlbmROb3RpZmljYXRpb24obm90aWZpY2F0aW9uTmFtZSwgbm90aWZpY2F0aW9uQm9keSk7XG4gICAgfVxuXG4gICAgLy8gZ2V0dGVyIC8gc2V0dGVyXG4gICAgcHVibGljIHNldCB2aWV3Q29tcG9uZW50KHZpZXdDb21wb25lbnQ6IGFueSkge1xuICAgICAgICB0aGlzLl92aWV3Q29tcG9uZW50ID0gdmlld0NvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHZpZXdDb21wb25lbnQoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZXdDb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLm1lZGlhdG9yTmFtZSB8fCBNZWRpYXRvci5NRURJQVRPUl9OQU1FO1xuICAgIH1cbn0iLCJpbXBvcnQge0lOb3RpZmljYXRpb259IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uIGltcGxlbWVudHMgSU5vdGlmaWNhdGlvbiB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmFtZTogc3RyaW5nLCBwcml2YXRlIF9ib2R5OiBhbnkgPSBudWxsKSB7IH1cblxuICAgIHB1YmxpYyBnZXROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRCb2R5KGJvZHk6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9ib2R5ID0gYm9keTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Qm9keSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYm9keTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fYm9keSA9IG51bGw7XG4gICAgICAgIHRoaXMuX25hbWUgPSBudWxsO1xuICAgIH1cbn0iLCJpbXBvcnQge0lOb3RpZmllciwgSU5vdGlmaWNhdGlvbiwgSU9ic2VydmVyfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7TWVkaWF0b3IsIE1vZGVsLCBOb3RpZmljYXRpb259IGZyb20gJy4uL212Yyc7XG5pbXBvcnQge0dhbWV9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgQW5hbHl0aWNzRXZlbnRNb2RlbCB9IGZyb20gJy4uL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb24gaW1wbGVtZW50cyBJTm90aWZpZXIge1xuICAgIC8vIHN0YXRpYyBjb25zdGFudHNcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGluc3RhbmNlID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgc3RhdGljIFNJTkdMRVRPTl9NU0cgPSAnQXBwbGljYXRpb24gc2luZ2xldG9uIGFscmVhZHkgY29uc3RydWN0ZWQhJztcblxuICAgIC8vIHB1YmxpYyBcbiAgICBwdWJsaWMgZ2FtZTogR2FtZTtcblxuICAgIC8vIHByb3RlY3RlZCAgICAgICAgXG4gICAgcHJvdGVjdGVkIF9tZWRpYXRvcjogTWVkaWF0b3IgPSBudWxsO1xuICAgIHByb3RlY3RlZCBfbW9kZWxzOiB7IFtuYW1lOiBzdHJpbmddOiBNb2RlbCB9ID0ge307XG4gICAgcHJvdGVjdGVkIF9tZWRpYXRvcnM6IHsgW25hbWU6IHN0cmluZ106IE1lZGlhdG9yIH0gPSB7fTtcbiAgICBwcm90ZWN0ZWQgX29ic2VydmVyTWFwOiB7IFtuYW1lOiBzdHJpbmddOiBJT2JzZXJ2ZXJbXSB9ID0ge307XG5cbiAgICAvL2ZvciBkZWJ1Z2dpbmdcbiAgICBwcml2YXRlIHN0YXRpYyBfaGFzaFF1ZXJ5OiB7fTtcbiAgICBwdWJsaWMgc3RhdGljIHN0YXRpY19kZWJ1Z01vZGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAoQXBwbGljYXRpb24uaW5zdGFuY2UpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihBcHBsaWNhdGlvbi5TSU5HTEVUT05fTVNHKTtcblxuICAgICAgICBBcHBsaWNhdGlvbi5pbnN0YW5jZSA9IHRoaXM7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgICAgIEFwcGxpY2F0aW9uLl9nZXRIYXNoUXVlcnkoKTtcbiAgICAgICAgICAgIHRoaXMud2luZG93SGFzaENoYW5nZSgpO1xuICAgICAgICB9LCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVHYW1lKCk7XG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXRpbGl0eSBNZXRob2QgLSBNZXRob2Qgc2hvdWxkIGJlIGNhbGxlZCBkdXJpbmcgYm9vdCBzdGF0ZSwgYW5kIHdpbGwgdW5sb2NrIGF1ZGlvIGlmIHRoZSBhdWRpbyBjb250ZW54dFxuICAgICAqIGhhcyBiZWVuIHN1c3BlbmRlZCAoYXdhaXRpbmcgdG91Y2ggaW5wdXQpLiBUaGlzIGlzIGR1ZSB0byBhIGJ1ZyB3aXRoIHRoZSB3YXkgYXVkaW8gaXMgaGFuZGxlZCBieSBjaHJvbWUvYW5kcm9pZFxuICAgICAqIHdoZW4gdGhlIGdhbWUgaXMgb3BlbmVkIGluIGFuIGlGcmFtZSBmcm9tIGEgZGlmZmVyZW50IHNpdGUuIFRoaXMgc2hvdWxkIGJlIGNhbGxlZCBpbiB0aGUgYm9vdCBzdGF0ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZW5zdXJlQXVkaW9Db250ZXh0VW5sb2NrZWQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmdhbWUuZGV2aWNlLmFuZHJvaWQgJiYgdGhpcy5nYW1lLmRldmljZS5jaHJvbWUgJiYgdGhpcy5nYW1lLmRldmljZS5jaHJvbWVWZXJzaW9uID49IDU1KSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUuc291bmQuc2V0VG91Y2hMb2NrKCk7XG4gICAgICAgICAgICB0aGlzLmdhbWUuaW5wdXQudG91Y2guYWRkVG91Y2hMb2NrQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWUuc291bmQubm9BdWRpbyB8fCAhdGhpcy5nYW1lLnNvdW5kLnRvdWNoTG9ja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lLnNvdW5kLnVzaW5nV2ViQXVkaW8pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGVtcHR5IGJ1ZmZlciBhbmQgcGxheSBpdFxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgU291bmRNYW5hZ2VyLnVwZGF0ZSBsb29wIGNhcHR1cmVzIHRoZSBzdGF0ZSBvZiBpdCBhbmQgdGhlbiByZXNldHMgdG91Y2hMb2NrZWQgdG8gZmFsc2VcblxuICAgICAgICAgICAgICAgICAgICB2YXIgYnVmZmVyID0gdGhpcy5nYW1lLnNvdW5kLmNvbnRleHQuY3JlYXRlQnVmZmVyKDEsIDEsIDIyMDUwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLnNvdW5kW1widW5sb2NrU291cmNlXCJdID0gdGhpcy5nYW1lLnNvdW5kLmNvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5zb3VuZFtcInVubG9ja1NvdXJjZVwiXS5idWZmZXIgPSBidWZmZXI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5zb3VuZFtcInVubG9ja1NvdXJjZVwiXS5jb25uZWN0KHRoaXMuZ2FtZS5zb3VuZC5jb250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS5zb3VuZFtcInVubG9ja1NvdXJjZVwiXS5zdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuc291bmRbXCJ1bmxvY2tTb3VyY2VcIl0ubm90ZU9uKDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLnNvdW5kW1widW5sb2NrU291cmNlXCJdLnN0YXJ0KDApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy9IZWxsbyBDaHJvbWUgNTUhXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWUuc291bmRbXCJ1bmxvY2tTb3VyY2VcIl0uY29udGV4dC5zdGF0ZSA9PT0gJ3N1c3BlbmRlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5zb3VuZFtcInVubG9ja1NvdXJjZVwiXS5jb250ZXh0LnJlc3VtZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gIFdlIGNhbiByZW1vdmUgdGhlIGV2ZW50IGJlY2F1c2Ugd2UndmUgZG9uZSB3aGF0IHdlIG5lZWRlZCAoc3RhcnRlZCB0aGUgdW5sb2NrIHNvdW5kIHBsYXlpbmcpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5zdXJlQXVkaW9Db250ZXh0VW5sb2NrZWQgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIHRyYWNrRXZlbnQoZXZlbnRNb2RlbDogQW5hbHl0aWNzRXZlbnRNb2RlbCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdhbWUuYW5hbHl0aWNzLnRyYWNrRXZlbnQoZXZlbnRNb2RlbC5hY3Rpb24sIGV2ZW50TW9kZWwubGFiZWwsIGV2ZW50TW9kZWwudmFsdWUgPT09IG51bGwgPyBudWxsIDogZXZlbnRNb2RlbC52YWx1ZS50b1N0cmluZygpKTtcbiAgICB9ICAgXG5cbiAgICBwdWJsaWMgdHJhY2tFdmVudEFuZENoYW5nZUNhdGVnb3J5KG5ld0NhdGVnb3J5OiBzdHJpbmcsIGV2ZW50TW9kZWw6IEFuYWx5dGljc0V2ZW50TW9kZWwpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nYW1lLmFuYWx5dGljcy5zZXRDYXRlZ29yeShuZXdDYXRlZ29yeSk7XG4gICAgICAgIHRoaXMudHJhY2tFdmVudChldmVudE1vZGVsKTtcbiAgICB9XG4gICAgXG4gICAgcHJvdGVjdGVkIHdpbmRvd0hhc2hDaGFuZ2UoKTogdm9pZCB7IH1cblxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUdhbWUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKHtcbiAgICAgICAgICAgIHdpZHRoOiA4MDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgIHBhcmVudDogJ2dhbWUtY29udGFpbmVyJyxcbiAgICAgICAgICAgIHJlbmRlcmVyOiBQaGFzZXIuQVVUTyxcbiAgICAgICAgICAgIHRyYW5zcGFyZW50OiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc3RhcnRHYW1lKCk6IHZvaWQge1xuICAgICAgICAvLyBzdGFydCB0aGUgYXBwJ3MgaW5pdGlhbCBzdGF0ZSBoZXJlXG4gICAgfVxuXG4gICAgcHVibGljIGFkZFBsdWdpbnMoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGRQbHVnaW5zKCk7XG4gICAgICAgIGlmIChBcHBsaWNhdGlvbi5zdGF0aWNfZGVidWdNb2RlKSB7XG4gICAgICAgICAgICBMb2cuaW5pdCgpO1xuICAgICAgICB9ICAgIFxuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck1vZGVsKG1vZGVsOiBNb2RlbCk6IE1vZGVsIHtcbiAgICAgICAgaWYgKHRoaXMuX21vZGVsc1ttb2RlbC5uYW1lXSkge1xuICAgICAgICAgICAgdGhyb3cgKG5ldyBFcnJvcignQXBwbGljYXRpb246OiBhIG1vZGVsIHdpdGggdGhlIG5hbWUgXCInICsgbW9kZWwubmFtZSArICdcIiBhbHJlYWR5IGV4aXN0cy4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbW9kZWxzW21vZGVsLm5hbWVdID0gbW9kZWw7XG5cbiAgICAgICAgbW9kZWwub25SZWdpc3RlcigpO1xuXG4gICAgICAgIHJldHVybiBtb2RlbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmV0cmlldmVNb2RlbChtb2RlbE5hbWU6IHN0cmluZyk6IE1vZGVsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vZGVsc1ttb2RlbE5hbWVdIHx8IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZU1vZGVsKG1vZGVsVG9SZW1vdmU6IE1vZGVsKTogdm9pZCB7XG4gICAgICAgIGxldCBuYW1lID0gbW9kZWxUb1JlbW92ZS5uYW1lO1xuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLl9tb2RlbHNbbmFtZV07XG5cbiAgICAgICAgaWYgKCFtb2RlbClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBtb2RlbC5vblJlbW92ZWQoKTtcblxuICAgICAgICBkZWxldGUgdGhpcy5fbW9kZWxzW25hbWVdO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck1lZGlhdG9yKG1lZGlhdG9yOiBNZWRpYXRvcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fbWVkaWF0b3JzW21lZGlhdG9yLm5hbWVdKSB7XG4gICAgICAgICAgICB0aHJvdyAobmV3IEVycm9yKCdBcHBsaWNhdGlvbjo6IGEgbWVkaWF0b3Igd2l0aCB0aGUgbmFtZSBcIicgKyBtZWRpYXRvci5uYW1lICsgJ1wiIGFscmVhZHkgZXhpc3RzLicpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX21lZGlhdG9yc1ttZWRpYXRvci5uYW1lXSA9IG1lZGlhdG9yO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyT2JzZXJ2ZXIobWVkaWF0b3IpO1xuXG4gICAgICAgIG1lZGlhdG9yLm9uUmVnaXN0ZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmV0cmlldmVNZWRpYXRvcihtZWRpYXRvck5hbWU6IHN0cmluZyk6IE1lZGlhdG9yIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lZGlhdG9yc1ttZWRpYXRvck5hbWVdIHx8IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZU1lZGlhdG9yKG1lZGlhdG9yVG9SZW1vdmU6IE1lZGlhdG9yKTogdm9pZCB7XG4gICAgICAgIGxldCBuYW1lID0gbWVkaWF0b3JUb1JlbW92ZS5uYW1lO1xuICAgICAgICBsZXQgbWVkaWF0b3IgPSB0aGlzLl9tZWRpYXRvcnNbbmFtZV07XG5cbiAgICAgICAgaWYgKCFtZWRpYXRvcilcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBtZWRpYXRvci5saXN0Tm90aWZpY2F0aW9uSW50ZXJlc3RzKCkuZm9yRWFjaChpbnRlcmVzdCA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZU9ic2VydmVyKGludGVyZXN0LCBtZWRpYXRvcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lZGlhdG9yLm9uUmVtb3ZlZCgpO1xuICAgICAgICBkZWxldGUgdGhpcy5fbWVkaWF0b3JzW25hbWVdO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck9ic2VydmVyKG9ic2VydmVyOiBJT2JzZXJ2ZXIpOiB2b2lkIHtcbiAgICAgICAgb2JzZXJ2ZXIubGlzdE5vdGlmaWNhdGlvbkludGVyZXN0cygpLmZvckVhY2gobm90aWZpY2F0aW9uTmFtZSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fb2JzZXJ2ZXJNYXBbbm90aWZpY2F0aW9uTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX29ic2VydmVyTWFwW25vdGlmaWNhdGlvbk5hbWVdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9vYnNlcnZlck1hcFtub3RpZmljYXRpb25OYW1lXS5wdXNoKG9ic2VydmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc3RvcHMgYW4gb2JzZXJ2ZXIgZnJvbSBiZWluZyBpbnRlcmVzdGVkIGluIGEgbm90aWZpY2F0aW9uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5vdGlmaWNhdGlvbk5hbWVcbiAgICAgKiBAcGFyYW0ge0lPYnNlcnZlcn0gb2JzZXJ2ZXJUb1JlbW92ZVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgcHVibGljIHJlbW92ZU9ic2VydmVyKG5vdGlmaWNhdGlvbk5hbWU6IHN0cmluZywgb2JzZXJ2ZXJUb1JlbW92ZTogSU9ic2VydmVyKTogdm9pZCB7XG4gICAgICAgIC8vVGhlIG9ic2VydmVyIGxpc3QgZm9yIHRoZSBub3RpZmljYXRpb24gdW5kZXIgaW5zcGVjdGlvblxuICAgICAgICBsZXQgb2JzZXJ2ZXJzOiBJT2JzZXJ2ZXJbXSA9IG51bGwsXG4gICAgICAgICAgICBvYnNlcnZlcjogSU9ic2VydmVyID0gbnVsbCxcbiAgICAgICAgICAgIGk6IG51bWJlciA9IDA7XG5cbiAgICAgICAgb2JzZXJ2ZXJzID0gdGhpcy5fb2JzZXJ2ZXJNYXBbbm90aWZpY2F0aW9uTmFtZV07XG5cbiAgICAgICAgLy9GaW5kIHRoZSBvYnNlcnZlciBmb3IgdGhlIG5vdGlmeUNvbnRleHQuXG4gICAgICAgIGkgPSBvYnNlcnZlcnMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICBvYnNlcnZlciA9IG9ic2VydmVyc1tpXTtcbiAgICAgICAgICAgIGlmIChvYnNlcnZlciA9PT0gb2JzZXJ2ZXJUb1JlbW92ZSkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAgKiBBbHNvLCB3aGVuIGEgTm90aWZpY2F0aW9uJ3MgT2JzZXJ2ZXIgbGlzdCBsZW5ndGggZmFsbHMgdG8gemVybywgZGVsZXRlIHRoZVxuICAgICAgICAgKiBub3RpZmljYXRpb24ga2V5IGZyb20gdGhlIG9ic2VydmVyIG1hcC5cbiAgICAgICAgICovXG4gICAgICAgIGlmIChvYnNlcnZlcnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9vYnNlcnZlck1hcFtub3RpZmljYXRpb25OYW1lXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZW5kTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbk5hbWU6IHN0cmluZywgbm90ZmljYXRpb25Cb2R5PzogYW55KTogdm9pZCB7XG4gICAgICAgIGxldCBub3RpZmljYXRpb24gPSBuZXcgTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbk5hbWUsIG5vdGZpY2F0aW9uQm9keSk7XG4gICAgICAgIHRoaXMuX25vdGlmeU9ic2VydmVycyhub3RpZmljYXRpb24pO1xuXG4gICAgICAgIG5vdGlmaWNhdGlvbi5kZXN0cm95KCk7XG4gICAgICAgIG5vdGlmaWNhdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgcHJpdmF0ZSBfbm90aWZ5T2JzZXJ2ZXJzKG5vdGlmaWNhdGlvbjogSU5vdGlmaWNhdGlvbikge1xuICAgICAgICBsZXQgb2JzZXJ2ZXI6IElPYnNlcnZlciA9IG51bGwsXG4gICAgICAgICAgICBvYnNlcnZlcnM6IElPYnNlcnZlcltdID0gbnVsbDtcblxuICAgICAgICBjb25zdCBub3RpZmljYXRpb25OYW1lOiBzdHJpbmcgPSBub3RpZmljYXRpb24uZ2V0TmFtZSgpO1xuICAgICAgICBjb25zdCBvYnNlcnZlcnNSZWY6IElPYnNlcnZlcltdID0gdGhpcy5fb2JzZXJ2ZXJNYXBbbm90aWZpY2F0aW9uTmFtZV07XG5cbiAgICAgICAgaWYgKG9ic2VydmVyc1JlZikge1xuICAgICAgICAgICAgLy8gY2xvbmUgdGhlIGFycmF5IGluIGNhc2UgYW4gb2JzZXJ2ZXIgZ2V0cyByZW1vdmVkIHdoaWxlIHRoZSBub3RpZmljYXRpb24gaXMgYmVpbmcgc2VudFxuICAgICAgICAgICAgb2JzZXJ2ZXJzID0gb2JzZXJ2ZXJzUmVmLnNsaWNlKDApO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmhhbmRsZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfZ2V0SGFzaFF1ZXJ5KCk6IHZvaWQge1xuICAgICAgICBBcHBsaWNhdGlvbi5faGFzaFF1ZXJ5ID0ge307XG4gICAgICAgIGlmICghd2luZG93LmxvY2F0aW9uLmhhc2ggfHwgd2luZG93LmxvY2F0aW9uLmhhc2ggPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSwgd2luZG93LmxvY2F0aW9uLmhhc2gubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgYUhhc2g6IHN0cmluZ1tdID0gaGFzaC5zcGxpdCgnJicpO1xuICAgICAgICBhSGFzaC5mb3JFYWNoKGhhc2hQYWlyID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFIYXNoID0gaGFzaFBhaXIuc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIEFwcGxpY2F0aW9uLl9oYXNoUXVlcnlbYUhhc2hbMF1dID0gL15cXGQrJC8udGVzdChhSGFzaFsxXSkgPyBwYXJzZUludChhSGFzaFsxXSkgOiBhSGFzaFsxXTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gc3RhdGljIG1ldGhvZHNcblxuICAgIC8qKlxuICAgICAqIHJldHVybnMgdGhlIEFwcGxpY2F0aW9uIHNpbmdsZXRvblxuICAgICAqIEByZXR1cm4ge0FwcGxpY2F0aW9ufVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogQXBwbGljYXRpb24ge1xuICAgICAgICBpZiAoIUFwcGxpY2F0aW9uLmluc3RhbmNlKVxuICAgICAgICAgICAgQXBwbGljYXRpb24uaW5zdGFuY2UgPSBuZXcgQXBwbGljYXRpb24oKTtcblxuICAgICAgICByZXR1cm4gQXBwbGljYXRpb24uaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZ2V0cyBhIHF1ZXJ5IHZhcmlhYmxlIGZyb20gdGhlIHdpbmRvdy5sb2NhdGlvbiBoYXNoXG4gICAgICogYXNzdW1lcyBzb21ldGhpbmcgbGlrZSBodHRwOi8vdXJsLyNmb289YmFyJmJhej1mb29cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFyaWFibGVJZFxuICAgICAqIEByZXR1cm4ge2FueX1cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHF1ZXJ5VmFyKHZhcmlhYmxlSWQ6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGlmIChBcHBsaWNhdGlvbi5faGFzaFF1ZXJ5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIEFwcGxpY2F0aW9uLl9nZXRIYXNoUXVlcnkoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQXBwbGljYXRpb24uX2hhc2hRdWVyeVt2YXJpYWJsZUlkXSB8fCBudWxsO1xuICAgIH1cblxufSJdfQ==
