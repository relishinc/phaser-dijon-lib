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
System.register("dijon/core/AnalyticsManager", [], function(exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    var AnalyticsManager, AnalyticsException;
    return {
        setters:[],
        execute: function() {
            AnalyticsManager = (function () {
                function AnalyticsManager(enabled, category) {
                    if (enabled === void 0) { enabled = true; }
                    if (category === void 0) { category = null; }
                    this.enabled = enabled;
                    this.category = category;
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
                Object.defineProperty(AnalyticsManager.prototype, "active", {
                    get: function () {
                        return (window['ga']) ? true : false;
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
            exports_15("AnalyticsManager", AnalyticsManager);
            AnalyticsException = (function () {
                function AnalyticsException(message) {
                    this.message = message;
                    this.name = 'AnalyticsException';
                }
                return AnalyticsException;
            }());
            exports_15("AnalyticsException", AnalyticsException);
        }
    }
});
System.register("dijon/utils/Device", [], function(exports_16, context_16) {
    "use strict";
    var __moduleName = context_16 && context_16.id;
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
            exports_16("Device", Device);
        }
    }
});
System.register("dijon/utils/Logger", [], function(exports_17, context_17) {
    "use strict";
    var __moduleName = context_17 && context_17.id;
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
            exports_17("Logger", Logger);
        }
    }
});
System.register("dijon/utils/Notifications", [], function(exports_18, context_18) {
    "use strict";
    var __moduleName = context_18 && context_18.id;
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
            exports_18("Notifications", Notifications);
        }
    }
});
System.register("dijon/utils/Textures", ["dijon/application"], function(exports_19, context_19) {
    "use strict";
    var __moduleName = context_19 && context_19.id;
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
            exports_19("Textures", Textures);
        }
    }
});
System.register("dijon/display/BitmapText", ["dijon/application"], function(exports_20, context_20) {
    "use strict";
    var __moduleName = context_20 && context_20.id;
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
                    if (color !== 0xffffff) {
                        this.color = color;
                    }
                    if (smoothing) {
                        this.smoothed = true;
                    }
                    if (makeImage !== true) {
                        this.autoFlatten = autoFlatten;
                    }
                    else {
                        this.makeImage();
                    }
                }
                BitmapText.prototype.makeImage = function () {
                    var img = this.addChildAt(this.game.add.image(0, 0, this.generateTexture()), 0);
                    var n = this.children.length - 1;
                    while (n > 0) {
                        this.removeChildAt(n);
                        n--;
                    }
                    var glyphs = this['_glyphs'];
                    for (var i = 0; i < glyphs.length; i++) {
                        glyphs[i].destroy();
                    }
                    this['_glyphs'] = [];
                };
                BitmapText.prototype.flatten = function (delay) {
                    var _this = this;
                    if (delay === void 0) { delay = null; }
                    if (delay) {
                        this.game.time.events.add(delay, function () { _this.cacheAsBitmap = true; }, this);
                        return;
                    }
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
                        this.tint = this._color;
                        if (this._autoFlatten) {
                            this.flatten();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BitmapText.prototype, "text", {
                    get: function () {
                        return this['_text'];
                    },
                    set: function (value) {
                        if (this._autoFlatten) {
                            this.unFlatten();
                        }
                        if (this['_text'] !== undefined && value !== this['_text']) {
                            this['_text'] = value.toString() || '';
                            this.updateText();
                        }
                        if (this._autoFlatten) {
                            this.flatten();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                return BitmapText;
            }(Phaser.BitmapText));
            exports_20("BitmapText", BitmapText);
        }
    }
});
System.register("dijon/display/Component", ["dijon/application"], function(exports_21, context_21) {
    "use strict";
    var __moduleName = context_21 && context_21.id;
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
            exports_21("Component", Component);
        }
    }
});
System.register("dijon/display/Group", ["dijon/application"], function(exports_22, context_22) {
    "use strict";
    var __moduleName = context_22 && context_22.id;
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
            exports_22("Group", Group);
        }
    }
});
System.register("dijon/display/Sprite", ["dijon/application"], function(exports_23, context_23) {
    "use strict";
    var __moduleName = context_23 && context_23.id;
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
            exports_23("Sprite", Sprite);
        }
    }
});
System.register("dijon/display/InvisibleButton", ["dijon/display/Sprite"], function(exports_24, context_24) {
    "use strict";
    var __moduleName = context_24 && context_24.id;
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
            exports_24("InvisibleButton", InvisibleButton);
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
                    this.game.time.events.add(10, this._flatten, this);
                }
                NineSliceImage.prototype._build = function () {
                    this._inputLayer = this.add(this.game.add.group());
                    this._displayLayer = this.add(this.game.add.group());
                    this.tl = this._displayLayer.add(this.game.add.image(0, 0, this.key, this.texturePath + '/tl'));
                    this.tr = this._displayLayer.add(this.game.add.image(this.__width, 0, this.key, this.texturePath + '/tr'));
                    this.t = this._displayLayer.add(this.game.add.tileSprite(this.tl.getBounds().width, 0, this.__width - this.tl.getBounds().width - this.tr.getBounds().width, this.topHeight || this.tl.getBounds().height, this.key, this.texturePath + '/t'));
                    this.l = this._displayLayer.add(this.game.add.tileSprite(0, this.tl.getBounds().height, this.leftWidth || this.tl.getBounds().width, 100, this.key, this.texturePath + '/l'));
                    this.bl = this._displayLayer.add(this.game.add.image(0, this.__height, this.key, this.texturePath + '/bl'));
                    this.l.height = this.__height - this.tl.getBounds().height - this.bl.getBounds().height;
                    this.b = this._displayLayer.add(this.game.add.tileSprite(this.bl.getBounds().width, this.__height, 100, this.bottomHeight || this.bl.getBounds().height, this.key, this.texturePath + '/b'));
                    this.br = this._displayLayer.add(this.game.add.image(this.__width, this.__height, this.key, this.texturePath + '/br'));
                    this.b.width = this.__width - this.bl.getBounds().width - this.br.getBounds().width;
                    this.r = this._displayLayer.add(this.game.add.tileSprite(this.__width, this.tr.getBounds().height, this.rightWidth || this.tr.getBounds().width, this.__height - this.tl.getBounds().height - this.br.getBounds().height, this.key, this.texturePath + '/r'));
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
                    this._unflatten();
                    this.t.width = this.b.width = this.__width - this.tl.getBounds().width - this.tr.getBounds().width;
                    this.r.x = this.tr.x = this.br.x = this.__width;
                    this.l.height = this.r.height = this.__height - this.tr.getBounds().height - this.bl.getBounds().height;
                    this.bl.y = this.b.y = this.br.y = this.__height;
                    if (this.fillMiddle) {
                        this.tile.width = this.__width - this.tr.getBounds().width - this.tl.getBounds().width + 4;
                        this.tile.height = this.__height - this.tl.getBounds().height - this.bl.getBounds().height + 4;
                    }
                    this._interactiveBacking.width = this.__width;
                    this._interactiveBacking.height = this.__height;
                    this.game.time.events.add(10, this._flatten, this);
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
                NineSliceImage.prototype._unflatten = function () {
                    this._displayLayer.cacheAsBitmap = null;
                };
                NineSliceImage.prototype._flatten = function () {
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
                return NineSliceImage;
            }(Group_1.Group));
            exports_25("NineSliceImage", NineSliceImage);
        }
    }
});
System.register("dijon/display/Spine", ["dijon/application"], function(exports_26, context_26) {
    "use strict";
    var __moduleName = context_26 && context_26.id;
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
                function Spine(assetName, x, y) {
                    if (assetName === void 0) { assetName = ''; }
                    if (x === void 0) { x = 0; }
                    if (y === void 0) { y = 0; }
                    _super.call(this, application_6.Application.getInstance().game, x, y, Spine.createSpineData(Spine.LOAD_NON_MESH ? (assetName + Spine.NON_MESH_SUFFIX) : assetName));
                    this.assetName = assetName;
                    this.debug = false;
                    this._created = false;
                    this.onCreate = new Phaser.Signal();
                    this.onAnimationComplete = new Phaser.Signal();
                    this._canUpdate = true;
                    this._paused = false;
                    this._speed = 1;
                    this._boundsOffset = new Phaser.Point(0, 0);
                    this._boundsWidthScale = 1;
                    this._boundsHeightScale = 1;
                    this._currentBounds = new PIXI.Rectangle();
                    this._physicsOffset = { x: 0, y: 0 };
                    this._physicsEnabled = false;
                    this.nonMeshVersion = false;
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
                    if (Spine.AUTO_MESH && !Spine.LOAD_NON_MESH) {
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
                    this.setup(Spine.createSpineData(this.name + Spine.NON_MESH_SUFFIX));
                    this.state.apply(this.skeleton);
                    this.state.tracks = tracks;
                    this.onAnimationComplete = this.state.onAnimationComplete = signal;
                    this.game.asset.clearSpineAsset(this.name);
                    this.game.time.events.add(100, function () { _this.alpha = 1; }, this);
                };
                Spine.createSpineData = function (assetName) {
                    var spine = PIXI.spine;
                    var spineAtlas = new spine.SpineRuntime.Atlas(application_6.Application.getInstance().game.cache.getText(assetName + '.atlas'), this.atlasCallbackFunction);
                    var spineJsonParser = new spine.SpineRuntime.SkeletonJsonParser(new spine.SpineRuntime.AtlasAttachmentParser(spineAtlas));
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
            exports_26("Spine", Spine);
        }
    }
});
System.register("dijon/display/Text", ["dijon/application", "dijon/utils"], function(exports_27, context_27) {
    "use strict";
    var __moduleName = context_27 && context_27.id;
    var application_7, utils_1;
    var Text;
    return {
        setters:[
            function (application_7_1) {
                application_7 = application_7_1;
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
                    _super.call(this, application_7.Application.getInstance().game, x, y, text, Text._addSettings({
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
System.register("dijon/display", ["dijon/display/BitmapText", "dijon/display/Component", "dijon/display/Group", "dijon/display/InvisibleButton", "dijon/display/NineSliceImage", "dijon/display/Spine", "dijon/display/Sprite", "dijon/display/Text"], function(exports_28, context_28) {
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
    var application_8, Textures_1, display_1;
    var Placeholders;
    return {
        setters:[
            function (application_8_1) {
                application_8 = application_8_1;
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
                        return application_8.Application.getInstance().game;
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
    var application_9;
    var Time;
    return {
        setters:[
            function (application_9_1) {
                application_9 = application_9_1;
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
                    return application_9.Application.getInstance().game.time.events.add.apply(application_9.Application.getInstance().game.time.events, params);
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
System.register("dijon/core/AssetManager", ["dijon/application", "dijon/utils", "dijon/display"], function(exports_33, context_33) {
    "use strict";
    var __moduleName = context_33 && context_33.id;
    var application_10, utils_2, display_2;
    var AssetManager;
    return {
        setters:[
            function (application_10_1) {
                application_10 = application_10_1;
            },
            function (utils_2_1) {
                utils_2 = utils_2_1;
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
                    this.app = application_10.Application.getInstance();
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
                        this._setBaseTextureResolution(this.game.cache.getPixiBaseTexture(id));
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
                        this._setBaseTextureResolution(this.game.cache.getPixiBaseTexture(id));
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
                    if (typeof this._data === 'undefined') {
                        return;
                    }
                    if (typeof this._data[id] === 'undefined' || this._data[id].length < 1) {
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
                            assets = this._data[state];
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
                    this.sendNotification(utils_2.Notifications.ASSET_MANAGER_DATA_SET, this._data);
                };
                AssetManager.prototype.clearAssets = function (id, clearAudio, clearAtlasses, clearImages, clearText, clearJSON) {
                    if (clearAudio === void 0) { clearAudio = true; }
                    if (clearAtlasses === void 0) { clearAtlasses = true; }
                    if (clearImages === void 0) { clearImages = true; }
                    if (clearText === void 0) { clearText = true; }
                    if (clearJSON === void 0) { clearJSON = true; }
                    var assets = this._data[id];
                    console.log('clearing: ', id);
                    if (!assets || typeof assets === 'undefined' || assets.length < 1) {
                        return console.log('no assets', assets);
                    }
                    for (var i = 0; i < assets.length; i++) {
                        this.clearAsset(assets[i], clearAudio, clearAtlasses, clearImages, clearText, clearJSON);
                    }
                    this._completedLoads[id] = false;
                    this.sendNotification(utils_2.Notifications.ASSET_MANAGER_ASSETS_CLEARED, id);
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
                                this.game.cache.removeImage(url);
                                PIXI.BaseTextureCache[url].destroy();
                            }
                            break;
                        case AssetManager.ATLAS:
                            if (clearAtlasses) {
                                this.game.cache.removeImage(url);
                                PIXI.BaseTextureCache[url].destroy();
                                this.game.cache.removeXML(url);
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
                    }
                };
                AssetManager.prototype.clearSpineAsset = function (id) {
                    this.game.cache.removeJSON(id + '.json');
                    this.game.cache.removeText(id + '.atlas');
                    this.game.cache.removeImage(id + '.png', true);
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
            exports_33("AssetManager", AssetManager);
        }
    }
});
System.register("dijon/core/AudioManager", ["dijon/application"], function(exports_34, context_34) {
    "use strict";
    var __moduleName = context_34 && context_34.id;
    var application_11;
    var AudioManager;
    return {
        setters:[
            function (application_11_1) {
                application_11 = application_11_1;
            }],
        execute: function() {
            AudioManager = (function () {
                function AudioManager() {
                    this._defaultVolume = 1;
                    this._sprites = {};
                    this._sounds = {};
                    this._markerLookup = {};
                    this.game = application_11.Application.getInstance().game;
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
            exports_34("AudioManager", AudioManager);
        }
    }
});
System.register("dijon/core/Game", ["dijon/application", "dijon/core", "dijon/utils"], function(exports_35, context_35) {
    "use strict";
    var __moduleName = context_35 && context_35.id;
    var application_12, core_1, utils_3;
    var Game;
    return {
        setters:[
            function (application_12_1) {
                application_12 = application_12_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (utils_3_1) {
                utils_3 = utils_3_1;
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
                    this.app = application_12.Application.getInstance();
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
                    application_12.Application.getInstance().sendNotification(utils_3.Notifications.MOUSE_LEAVE_GLOBAL);
                };
                Game.prototype.mouseOver = function () {
                    application_12.Application.getInstance().sendNotification(utils_3.Notifications.MOUSE_ENTER_GLOBAL);
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
            exports_35("Game", Game);
        }
    }
});
System.register("dijon/core/GameObjectFactory", ["dijon/display"], function(exports_36, context_36) {
    "use strict";
    var __moduleName = context_36 && context_36.id;
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
            exports_36("GameObjectFactory", GameObjectFactory);
        }
    }
});
System.register("dijon/core/SequenceManager", ["dijon/application"], function(exports_37, context_37) {
    "use strict";
    var __moduleName = context_37 && context_37.id;
    var application_13;
    var SequenceManager;
    return {
        setters:[
            function (application_13_1) {
                application_13 = application_13_1;
            }],
        execute: function() {
            SequenceManager = (function () {
                function SequenceManager() {
                    this._defaultInterval = 20;
                    this.game = application_13.Application.getInstance().game;
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
                    this.game.time.events.repeat(interval, sequence.length, this._executeMethod, this, sequence, context, typeof completeCallback === 'undefined' ? null : completeCallback, typeof completeCallbackContext === 'undefined' ? null : completeCallbackContext);
                };
                return SequenceManager;
            }());
            exports_37("SequenceManager", SequenceManager);
        }
    }
});
System.register("dijon/core/State", ["dijon/application"], function(exports_38, context_38) {
    "use strict";
    var __moduleName = context_38 && context_38.id;
    var application_14;
    var State;
    return {
        setters:[
            function (application_14_1) {
                application_14 = application_14_1;
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
                        return application_14.Application.getInstance();
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
            exports_38("State", State);
        }
    }
});
System.register("dijon/core/StorageManager", ["dijon/application"], function(exports_39, context_39) {
    "use strict";
    var __moduleName = context_39 && context_39.id;
    var application_15;
    var StorageManager;
    return {
        setters:[
            function (application_15_1) {
                application_15 = application_15_1;
            }],
        execute: function() {
            StorageManager = (function () {
                function StorageManager() {
                    this.game = application_15.Application.getInstance().game;
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
            exports_39("StorageManager", StorageManager);
        }
    }
});
System.register("dijon/core/TransitionManager", ["dijon/application"], function(exports_40, context_40) {
    "use strict";
    var __moduleName = context_40 && context_40.id;
    var application_16;
    var TransitionManager;
    return {
        setters:[
            function (application_16_1) {
                application_16 = application_16_1;
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
                    this.game = application_16.Application.getInstance().game;
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
            exports_40("TransitionManager", TransitionManager);
        }
    }
});
System.register("dijon/core", ["dijon/core/AnalyticsManager", "dijon/core/AssetManager", "dijon/core/AudioManager", "dijon/core/Game", "dijon/core/GameObjectFactory", "dijon/core/SequenceManager", "dijon/core/State", "dijon/core/StorageManager", "dijon/core/TransitionManager"], function(exports_41, context_41) {
    "use strict";
    var __moduleName = context_41 && context_41.id;
    return {
        setters:[
            function (AnalyticsManager_1_1) {
                exports_41({
                    "AnalyticsManager": AnalyticsManager_1_1["AnalyticsManager"],
                    "AnalyticsException": AnalyticsManager_1_1["AnalyticsException"]
                });
            },
            function (AssetManager_1_1) {
                exports_41({
                    "AssetManager": AssetManager_1_1["AssetManager"]
                });
            },
            function (AudioManager_1_1) {
                exports_41({
                    "AudioManager": AudioManager_1_1["AudioManager"]
                });
            },
            function (Game_1_1) {
                exports_41({
                    "Game": Game_1_1["Game"]
                });
            },
            function (GameObjectFactory_1_1) {
                exports_41({
                    "GameObjectFactory": GameObjectFactory_1_1["GameObjectFactory"]
                });
            },
            function (SequenceManager_1_1) {
                exports_41({
                    "SequenceManager": SequenceManager_1_1["SequenceManager"]
                });
            },
            function (State_1_1) {
                exports_41({
                    "State": State_1_1["State"]
                });
            },
            function (StorageManager_1_1) {
                exports_41({
                    "StorageManager": StorageManager_1_1["StorageManager"]
                });
            },
            function (TransitionManager_1_1) {
                exports_41({
                    "TransitionManager": TransitionManager_1_1["TransitionManager"]
                });
            }],
        execute: function() {
        }
    }
});
System.register("dijon/mvc/Model", ["dijon/application"], function(exports_42, context_42) {
    "use strict";
    var __moduleName = context_42 && context_42.id;
    var application_17;
    var Model;
    return {
        setters:[
            function (application_17_1) {
                application_17 = application_17_1;
            }],
        execute: function() {
            Model = (function () {
                function Model(dataKey, modelName) {
                    if (dataKey === void 0) { dataKey = null; }
                    if (modelName === void 0) { modelName = null; }
                    this.modelName = modelName;
                    this.app = application_17.Application.getInstance();
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
            exports_42("Model", Model);
        }
    }
});
System.register("dijon/mvc/CopyModel", ["dijon/mvc/Model"], function(exports_43, context_43) {
    "use strict";
    var __moduleName = context_43 && context_43.id;
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
            exports_43("CopyModel", CopyModel);
        }
    }
});
System.register("dijon/mvc/Mediator", ["dijon/application"], function(exports_44, context_44) {
    "use strict";
    var __moduleName = context_44 && context_44.id;
    var application_18;
    var Mediator;
    return {
        setters:[
            function (application_18_1) {
                application_18 = application_18_1;
            }],
        execute: function() {
            Mediator = (function () {
                function Mediator(_viewComponent, autoReg, mediatorName) {
                    if (_viewComponent === void 0) { _viewComponent = null; }
                    if (autoReg === void 0) { autoReg = true; }
                    if (mediatorName === void 0) { mediatorName = null; }
                    this._viewComponent = _viewComponent;
                    this.mediatorName = null;
                    this.app = application_18.Application.getInstance();
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
            exports_44("Mediator", Mediator);
        }
    }
});
System.register("dijon/mvc/Notification", [], function(exports_45, context_45) {
    "use strict";
    var __moduleName = context_45 && context_45.id;
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
            exports_45("Notification", Notification);
        }
    }
});
System.register("dijon/mvc", ["dijon/mvc/CopyModel", "dijon/mvc/Mediator", "dijon/mvc/Model", "dijon/mvc/Notification"], function(exports_46, context_46) {
    "use strict";
    var __moduleName = context_46 && context_46.id;
    return {
        setters:[
            function (CopyModel_1_1) {
                exports_46({
                    "CopyModel": CopyModel_1_1["CopyModel"]
                });
            },
            function (Mediator_1_1) {
                exports_46({
                    "Mediator": Mediator_1_1["Mediator"]
                });
            },
            function (Model_2_1) {
                exports_46({
                    "Model": Model_2_1["Model"]
                });
            },
            function (Notification_1_1) {
                exports_46({
                    "Notification": Notification_1_1["Notification"]
                });
            }],
        execute: function() {
        }
    }
});
System.register("dijon/application/Application", ["dijon/mvc", "dijon/core"], function(exports_47, context_47) {
    "use strict";
    var __moduleName = context_47 && context_47.id;
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
            exports_47("Application", Application);
        }
    }
});
System.register("dijon/application", ["dijon/application/Application"], function(exports_48, context_48) {
    "use strict";
    var __moduleName = context_48 && context_48.id;
    return {
        setters:[
            function (Application_1_1) {
                exports_48({
                    "Application": Application_1_1["Application"]
                });
            }],
        execute: function() {
        }
    }
});
System.register("lib", ["dijon/application", "dijon/core", "dijon/display", "dijon/mvc", "dijon/utils"], function(exports_49, context_49) {
    "use strict";
    var __moduleName = context_49 && context_49.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_49(exports);
    }
    return {
        setters:[
            function (application_19_1) {
                exportStar_1(application_19_1);
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
            function (utils_4_1) {
                exportStar_1(utils_4_1);
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpam9uL2NvcmUvQW5hbHl0aWNzTWFuYWdlci50cyIsImRpam9uL3V0aWxzL0RldmljZS50cyIsImRpam9uL3V0aWxzL0xvZ2dlci50cyIsImRpam9uL3V0aWxzL05vdGlmaWNhdGlvbnMudHMiLCJkaWpvbi91dGlscy9UZXh0dXJlcy50cyIsImRpam9uL2Rpc3BsYXkvQml0bWFwVGV4dC50cyIsImRpam9uL2Rpc3BsYXkvQ29tcG9uZW50LnRzIiwiZGlqb24vZGlzcGxheS9Hcm91cC50cyIsImRpam9uL2Rpc3BsYXkvU3ByaXRlLnRzIiwiZGlqb24vZGlzcGxheS9JbnZpc2libGVCdXR0b24udHMiLCJkaWpvbi9kaXNwbGF5L05pbmVTbGljZUltYWdlLnRzIiwiZGlqb24vZGlzcGxheS9TcGluZS50cyIsImRpam9uL2Rpc3BsYXkvVGV4dC50cyIsImRpam9uL3V0aWxzL1BsYWNlaG9sZGVycy50cyIsImRpam9uL3V0aWxzL1RpbWUudHMiLCJkaWpvbi91dGlscy9VdGlsLnRzIiwiZGlqb24vY29yZS9Bc3NldE1hbmFnZXIudHMiLCJkaWpvbi9jb3JlL0F1ZGlvTWFuYWdlci50cyIsImRpam9uL2NvcmUvR2FtZS50cyIsImRpam9uL2NvcmUvR2FtZU9iamVjdEZhY3RvcnkudHMiLCJkaWpvbi9jb3JlL1NlcXVlbmNlTWFuYWdlci50cyIsImRpam9uL2NvcmUvU3RhdGUudHMiLCJkaWpvbi9jb3JlL1N0b3JhZ2VNYW5hZ2VyLnRzIiwiZGlqb24vY29yZS9UcmFuc2l0aW9uTWFuYWdlci50cyIsImRpam9uL212Yy9Nb2RlbC50cyIsImRpam9uL212Yy9Db3B5TW9kZWwudHMiLCJkaWpvbi9tdmMvTWVkaWF0b3IudHMiLCJkaWpvbi9tdmMvTm90aWZpY2F0aW9uLnRzIiwiZGlqb24vYXBwbGljYXRpb24vQXBwbGljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Z0JBQ2hDLENBQUM7Z0JBUWEsb0JBQVEsR0FBdEIsVUFBdUIsVUFBa0I7b0JBQ3JDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDdkMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUNoQyxDQUFDO29CQUNELE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQztnQkFDdEQsQ0FBQztnQkFyTmdCLG9CQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNoQix5QkFBYSxHQUFHLDRDQUE0QyxDQUFDO2dCQXNObEYsa0JBQUM7WUFBRCxDQXpOQSxBQXlOQyxJQUFBO1lBek5ELHNDQXlOQyxDQUFBIiwiZmlsZSI6ImRpam9uLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFuYWx5dGljc01hbmFnZXIge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlLCBwdWJsaWMgY2F0ZWdvcnk6IHN0cmluZyA9IG51bGwpIHsgfVxyXG5cclxuICAgIHB1YmxpYyB0cmFja0V2ZW50KGFjdGlvbjogc3RyaW5nID0gbnVsbCwgbGFiZWw6IHN0cmluZyA9IG51bGwsIHZhbHVlOiBzdHJpbmcgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZSB8fCAhdGhpcy5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBBbmFseXRpY3NFeGNlcHRpb24oJ05vIGFjdGlvbiBkZWZpbmVkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5nYSgnc2VuZCcsICdldmVudCcsIHRoaXMuY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobGFiZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5nYSgnc2VuZCcsICdldmVudCcsIHRoaXMuY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5nYSgnc2VuZCcsICdldmVudCcsIHRoaXMuY2F0ZWdvcnksIGFjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRyYWNrT21uaXR1cmVFdmVudChnYW1lTmFtZTogc3RyaW5nLCBhY3Rpdml0eTogc3RyaW5nLCBpc0dhbWVFdmVudDogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygndHJhY2tpbmcgb21uaXR1cmUnLCBnYW1lTmFtZSwgYWN0aXZpdHksIGlzR2FtZUV2ZW50KTtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvd1sndHJhY2tGbGFzaEV2ZW50J10gPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgd2luZG93Wyd0cmFja0ZsYXNoRXZlbnQnXShnYW1lTmFtZSwgYWN0aXZpdHksIGlzR2FtZUV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXR0ZXIgLyBzZXR0ZXJcclxuICAgIGdldCBhY3RpdmUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICh3aW5kb3dbJ2dhJ10pID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBnYSgpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvd1snZ2EnXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFuYWx5dGljc0V4Y2VwdGlvbiB7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nID0gJ0FuYWx5dGljc0V4Y2VwdGlvbic7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbWVzc2FnZTogc3RyaW5nKSB7IH1cclxufVxyXG4iLCJpbXBvcnQge0lCcm93c2VyfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEZXZpY2Uge1xyXG4gICAgcHVibGljIHN0YXRpYyBJT1M6IHN0cmluZyA9ICdpT1MnO1xyXG4gICAgcHVibGljIHN0YXRpYyBBTkRST0lEOiBzdHJpbmcgPSAnYW5kcm9pZCc7XHJcbiAgICBwdWJsaWMgc3RhdGljIFVOS05PV046IHN0cmluZyA9ICd1bmtub3duJztcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBtb2JpbGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIERldmljZS5tb2JpbGVPUyAhPT0gRGV2aWNlLlVOS05PV047XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgY29jb29uKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAodHlwZW9mIG5hdmlnYXRvclsnaXNDb2Nvb25KUyddICE9PSBcInVuZGVmaW5lZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBtb2JpbGVPUygpIHtcclxuICAgICAgICBjb25zdCB1c2VyQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCB8fCB3aW5kb3cubmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3dbJ29wZXJhJ107XHJcbiAgICAgICAgaWYgKHVzZXJBZ2VudC5tYXRjaCgvaVBhZC9pKSB8fCB1c2VyQWdlbnQubWF0Y2goL2lQaG9uZS9pKSB8fCB1c2VyQWdlbnQubWF0Y2goL2lQb2QvaSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIERldmljZS5JT1M7XHJcbiAgICAgICAgfSBlbHNlIGlmICh1c2VyQWdlbnQubWF0Y2goL0FuZHJvaWQvaSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIERldmljZS5BTkRST0lEO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBEZXZpY2UuVU5LTk9XTjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgYnJvd3NlcigpOiBJQnJvd3NlciB7XHJcbiAgICAgICAgY29uc3QgdWE6IHN0cmluZyA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBmaXJlZm94OiB1YS5pbmRleE9mKCdmaXJlZm94JykgPiAtMSxcclxuICAgICAgICAgICAgaWU6IHVhLmluZGV4T2YoJ2llJykgPiAtMSxcclxuICAgICAgICAgICAgc2FmYXJpOiB1YS5pbmRleE9mKCdzYWZhcmknKSA+IC0xLFxyXG4gICAgICAgICAgICBjaHJvbWU6IHVhLmluZGV4T2YoJ2Nocm9tZScpID4gLTEsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHBpeGVsUmF0aW8oKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyAhPT0gdW5kZWZpbmVkID8gd2luZG93LmRldmljZVBpeGVsUmF0aW8gOiAxO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGN1c3RvbVBpeGVsUmF0aW8oKSB7XHJcbiAgICAgICAgcmV0dXJuIERldmljZS5waXhlbFJhdGlvID49IDEuNSA/IDIgOiAxO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIExvZ2dlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHVibGljIHN0YXRpYyBsb2coaW5zdGFuY2UsIC4uLmFyZ3MpIHtcclxuICAgICAgICBpZiAoIUxvZ2dlci5lbmFibGVkKSB7IFxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZS5jb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgICAgICBhcmdzLnVuc2hpZnQoaW5zdGFuY2UuY29uc3RydWN0b3IudG9TdHJpbmcoKS5tYXRjaCgvXFx3Ky9nKVsxXSArICcgOjonKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpOyBcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25zIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgQVNTRVRfTUFOQUdFUl9EQVRBX1NFVDogc3RyaW5nID0gJ2Rpam9uQXNzZXRNYW5hZ2VyRGF0YVNldCc7XHJcbiAgICBwdWJsaWMgc3RhdGljIEFTU0VUX01BTkFHRVJfQVNTRVRTX0NMRUFSRUQ6IHN0cmluZyA9ICdkaWpvbkFzc2V0TWFuYWdlckFzc2V0c0NsZWFyZWQnO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgTU9VU0VfTEVBVkVfR0xPQkFMOiBzdHJpbmcgPSAnbW91c2VPdXRHbG9iYWwnO1xyXG4gICAgcHVibGljIHN0YXRpYyBNT1VTRV9FTlRFUl9HTE9CQUw6IHN0cmluZyA9ICdtb3VzZUVudGVyR2xvYmFsJztcclxufSIsImltcG9ydCB7QXBwbGljYXRpb259IGZyb20gJy4uL2FwcGxpY2F0aW9uJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0dXJlcyB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgZ2FtZSgpOiBQaGFzZXIuR2FtZSB7XHJcbiAgICAgICAgcmV0dXJuIEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmVjdCh3aWR0aDogbnVtYmVyID0gMTAwLCBoZWlnaHQ6IG51bWJlciA9IDEwMCwgY29sb3I6IG51bWJlciA9IDB4ZmZmZmZmLCBhbHBoYTogbnVtYmVyID0gMSwgZmlsbDogYm9vbGVhbiA9IHRydWUsIGxpbmVDb2xvcjogbnVtYmVyID0gMHhmZmZmZmYsIGxpbmVUaGlja25lc3M6IG51bWJlciA9IDEsIGxpbmVBbHBoYTogbnVtYmVyID0gMSwgb3V0bGluZTogYm9vbGVhbiA9IGZhbHNlKTogUElYSS5UZXh0dXJlIHtcclxuICAgICAgICBjb25zdCBnZnggPSBUZXh0dXJlcy5nYW1lLmFkZC5ncmFwaGljcygwLCAwKTtcclxuICAgICAgICBpZiAoZmlsbCkge1xyXG4gICAgICAgICAgICBnZnguYmVnaW5GaWxsKGNvbG9yLCBhbHBoYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvdXRsaW5lKSB7XHJcbiAgICAgICAgICAgIGdmeC5saW5lV2lkdGggPSBsaW5lVGhpY2tuZXNzO1xyXG4gICAgICAgICAgICBnZngubGluZVN0eWxlKGxpbmVUaGlja25lc3MsIGxpbmVDb2xvciwgbGluZUFscGhhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2Z4LmRyYXdSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0dXJlID0gZ2Z4LmdlbmVyYXRlVGV4dHVyZSgpO1xyXG4gICAgICAgIFRleHR1cmVzLmdhbWUud29ybGQucmVtb3ZlKGdmeCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0ZXh0dXJlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByb3VuZGVkUmVjdCh3aWR0aDogbnVtYmVyID0gMTAwLCBoZWlnaHQ6IG51bWJlciA9IDEwMCwgcmFkaXVzOiBudW1iZXIgPSAxMCwgY29sb3I6IG51bWJlciA9IDB4ZmZmZmZmLCBhbHBoYTogbnVtYmVyID0gMSwgZmlsbDogYm9vbGVhbiA9IHRydWUsIGxpbmVDb2xvcjogbnVtYmVyID0gMHhmZmZmZmYsIGxpbmVUaGlja25lc3M6IG51bWJlciA9IDEsIGxpbmVBbHBoYTogbnVtYmVyID0gMSwgb3V0bGluZTogYm9vbGVhbiA9IGZhbHNlKTogUElYSS5UZXh0dXJlIHtcclxuICAgICAgICBjb25zdCBnZnggPSBUZXh0dXJlcy5nYW1lLmFkZC5ncmFwaGljcygwLCAwKTtcclxuICAgICAgICBpZiAoZmlsbCkge1xyXG4gICAgICAgICAgICBnZnguYmVnaW5GaWxsKGNvbG9yLCBhbHBoYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvdXRsaW5lKSB7XHJcbiAgICAgICAgICAgIGdmeC5saW5lV2lkdGggPSBsaW5lVGhpY2tuZXNzO1xyXG4gICAgICAgICAgICBnZngubGluZVN0eWxlKGxpbmVUaGlja25lc3MsIGxpbmVDb2xvciwgbGluZUFscGhhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2Z4LmRyYXdSb3VuZGVkUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpO1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0dXJlID0gZ2Z4LmdlbmVyYXRlVGV4dHVyZSgpO1xyXG4gICAgICAgIFRleHR1cmVzLmdhbWUud29ybGQucmVtb3ZlKGdmeCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0ZXh0dXJlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzcXVhcmUoc2l6ZTogbnVtYmVyID0gMTAwLCBjb2xvcjogbnVtYmVyID0gMHhmZmZmZmYsIGFscGhhOiBudW1iZXIgPSAxLCBmaWxsOiBib29sZWFuID0gdHJ1ZSwgbGluZUNvbG9yOiBudW1iZXIgPSAweGZmZmZmZiwgbGluZVRoaWNrbmVzczogbnVtYmVyID0gMSwgbGluZUFscGhhOiBudW1iZXIgPSAxLCBvdXRsaW5lOiBib29sZWFuID0gZmFsc2UpOiBQSVhJLlRleHR1cmUge1xyXG4gICAgICAgIHJldHVybiBUZXh0dXJlcy5yZWN0KHNpemUsIHNpemUsIGNvbG9yLCBhbHBoYSwgZmlsbCwgbGluZUNvbG9yLCBsaW5lVGhpY2tuZXNzLCBsaW5lQWxwaGEsIG91dGxpbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjaXJjbGUoZGlhbWV0ZXI6IG51bWJlciA9IDEwMCwgY29sb3I6IG51bWJlciA9IDB4ZmZmZmZmLCBhbHBoYTogbnVtYmVyID0gMSwgZmlsbDogYm9vbGVhbiA9IHRydWUsIGxpbmVDb2xvcjogbnVtYmVyID0gMHhmZmZmZmYsIGxpbmVUaGlja25lc3M6IG51bWJlciA9IDEsIGxpbmVBbHBoYTogbnVtYmVyID0gMSwgb3V0bGluZTogYm9vbGVhbiA9IGZhbHNlKTogUElYSS5UZXh0dXJlIHtcclxuICAgICAgICBjb25zdCBnZnggPSBUZXh0dXJlcy5nYW1lLmFkZC5ncmFwaGljcygwLCAwKTtcclxuICAgICAgICBpZiAoZmlsbCkge1xyXG4gICAgICAgICAgICBnZnguYmVnaW5GaWxsKGNvbG9yLCBhbHBoYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvdXRsaW5lKSB7XHJcbiAgICAgICAgICAgIGdmeC5saW5lV2lkdGggPSBsaW5lVGhpY2tuZXNzO1xyXG4gICAgICAgICAgICBnZngubGluZVN0eWxlKGxpbmVUaGlja25lc3MsIGxpbmVDb2xvciwgbGluZUFscGhhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2Z4LmRyYXdDaXJjbGUoMCwgMCwgZGlhbWV0ZXIpO1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0dXJlID0gZ2Z4LmdlbmVyYXRlVGV4dHVyZSgpO1xyXG4gICAgICAgIFRleHR1cmVzLmdhbWUud29ybGQucmVtb3ZlKGdmeCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0ZXh0dXJlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlbGxpcHNlKHdpZHRoOiBudW1iZXIgPSA1MCwgaGVpZ2h0OiBudW1iZXIgPSAxMDAsIGNvbG9yOiBudW1iZXIgPSAweGZmZmZmZiwgYWxwaGE6IG51bWJlciA9IDEsIGZpbGw6IGJvb2xlYW4gPSB0cnVlLCBsaW5lQ29sb3I6IG51bWJlciA9IDB4ZmZmZmZmLCBsaW5lVGhpY2tuZXNzOiBudW1iZXIgPSAxLCBsaW5lQWxwaGE6IG51bWJlciA9IDEsIG91dGxpbmU6IGJvb2xlYW4gPSBmYWxzZSk6IFBJWEkuVGV4dHVyZSB7XHJcbiAgICAgICAgY29uc3QgZ2Z4ID0gVGV4dHVyZXMuZ2FtZS5hZGQuZ3JhcGhpY3MoMCwgMCk7XHJcbiAgICAgICAgaWYgKGZpbGwpIHtcclxuICAgICAgICAgICAgZ2Z4LmJlZ2luRmlsbChjb2xvciwgYWxwaGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3V0bGluZSkge1xyXG4gICAgICAgICAgICBnZngubGluZVdpZHRoID0gbGluZVRoaWNrbmVzcztcclxuICAgICAgICAgICAgZ2Z4LmxpbmVTdHlsZShsaW5lVGhpY2tuZXNzLCBsaW5lQ29sb3IsIGxpbmVBbHBoYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdmeC5kcmF3RWxsaXBzZSgwLCAwLCB3aWR0aCAqIDAuNSwgaGVpZ2h0ICogMC41KTtcclxuXHJcbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IGdmeC5nZW5lcmF0ZVRleHR1cmUoKTtcclxuICAgICAgICBUZXh0dXJlcy5nYW1lLndvcmxkLnJlbW92ZShnZngpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGV4dHVyZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7QXBwbGljYXRpb259IGZyb20gJy4uL2FwcGxpY2F0aW9uJztcclxuaW1wb3J0IHtHYW1lfSBmcm9tICcuLi9jb3JlJztcclxuaW1wb3J0IHtEZXZpY2V9IGZyb20gJy4uL3V0aWxzJztcclxuXHJcbi8qKlxyXG4gKiBUZXh0XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQml0bWFwVGV4dCBleHRlbmRzIFBoYXNlci5CaXRtYXBUZXh0IHtcclxuICAgIHByb3RlY3RlZCBfYXV0b0ZsYXR0ZW46Ym9vbGVhbiA9IHRydWU7XHJcbiAgICBwcm90ZWN0ZWQgX2NvbG9yOm51bWJlciA9IDB4ZmZmZmZmO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcih4Om51bWJlciA9IDAsIHk6bnVtYmVyID0gMCwgZm9udDpzdHJpbmcgPSBudWxsLCB0ZXh0OnN0cmluZyA9IFwiXCIsIHNpemU6bnVtYmVyID0gMTIsIGFsaWduOnN0cmluZyA9ICdsZWZ0JywgY29sb3I6bnVtYmVyID0gMHhmZmZmZmYsIHNtb290aGluZzpib29sZWFuID0gdHJ1ZSwgYXV0b0ZsYXR0ZW46Ym9vbGVhbiA9IHRydWUsIG1ha2VJbWFnZTpib29sZWFuID0gZmFsc2Upe1xyXG4gICAgICAgIHN1cGVyKEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZSwgeCwgeSwgZm9udCwgdGV4dCwgc2l6ZSwgYWxpZ24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChjb2xvciAhPT0gMHhmZmZmZmYpe1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChzbW9vdGhpbmcpe1xyXG4gICAgICAgICAgIHRoaXMuc21vb3RoZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAobWFrZUltYWdlICE9PSB0cnVlKXtcclxuICAgICAgICAgICAgdGhpcy5hdXRvRmxhdHRlbiA9IGF1dG9GbGF0dGVuO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLm1ha2VJbWFnZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIG1ha2VJbWFnZSgpOnZvaWR7XHJcbiAgICAgICAgY29uc3QgaW1nOlBoYXNlci5JbWFnZSA9IDxQaGFzZXIuSW1hZ2U+dGhpcy5hZGRDaGlsZEF0KHRoaXMuZ2FtZS5hZGQuaW1hZ2UoMCwgMCwgdGhpcy5nZW5lcmF0ZVRleHR1cmUoKSksIDApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBuID0gdGhpcy5jaGlsZHJlbi5sZW5ndGgtMTtcclxuICAgICAgICB3aGlsZSAobiA+IDApe1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkQXQobik7XHJcbiAgICAgICAgICAgIG4tLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZ2x5cGhzID0gdGhpc1snX2dseXBocyddO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ2x5cGhzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICBnbHlwaHNbaV0uZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzWydfZ2x5cGhzJ10gPSBbXTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGZsYXR0ZW4oZGVsYXk6bnVtYmVyID0gbnVsbCk6dm9pZHtcclxuICAgICAgICBpZiAoZGVsYXkpe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKGRlbGF5LCAoKT0+e3RoaXMuY2FjaGVBc0JpdG1hcCA9IHRydWV9LCB0aGlzKTtcclxuICAgICAgICAgICAgcmV0dXJuOyAgICBcclxuICAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FjaGVBc0JpdG1hcCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyB1bkZsYXR0ZW4oKTp2b2lke1xyXG4gICAgICAgIHRoaXMuY2FjaGVBc0JpdG1hcCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzZXQgYXV0b0ZsYXR0ZW4odmFsdWU6Ym9vbGVhbil7XHJcbiAgICAgICAgdGhpcy5fYXV0b0ZsYXR0ZW4gPSB2YWx1ZTtcclxuICAgICAgICBpZiAodGhpcy5fYXV0b0ZsYXR0ZW4pe1xyXG4gICAgICAgICAgICB0aGlzLmZsYXR0ZW4oKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy51bkZsYXR0ZW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBnZXQgYXV0b0ZsYXR0ZW4oKTpib29sZWFue1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRvRmxhdHRlbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHNldCBjb2xvcih2YWx1ZTpudW1iZXIpe1xyXG4gICAgICAgIGlmKHRoaXMuX2F1dG9GbGF0dGVuKXtcclxuICAgICAgICAgICAgdGhpcy51bkZsYXR0ZW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY29sb3IgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnRpbnQgPSB0aGlzLl9jb2xvcjtcclxuICAgICAgICBpZiAodGhpcy5fYXV0b0ZsYXR0ZW4pe1xyXG4gICAgICAgICAgICB0aGlzLmZsYXR0ZW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBnZXQgY29sb3IoKTpudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc2V0IHRleHQodmFsdWU6c3RyaW5nKXtcclxuICAgICAgICBpZih0aGlzLl9hdXRvRmxhdHRlbil7XHJcbiAgICAgICAgICAgIHRoaXMudW5GbGF0dGVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzWydfdGV4dCddICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IHRoaXNbJ190ZXh0J10pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzWydfdGV4dCddID0gdmFsdWUudG9TdHJpbmcoKSB8fCAnJztcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVUZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9hdXRvRmxhdHRlbil7XHJcbiAgICAgICAgICAgIHRoaXMuZmxhdHRlbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGdldCB0ZXh0KCk6c3RyaW5ne1xyXG4gICAgICAgIHJldHVybiB0aGlzWydfdGV4dCddO1xyXG4gICAgfVxyXG4gICAgXHJcbn0iLCJpbXBvcnQge0FwcGxpY2F0aW9ufSBmcm9tICcuLi9hcHBsaWNhdGlvbic7XHJcbmltcG9ydCB7R2FtZX0gZnJvbSAnLi4vY29yZSc7XHJcbmltcG9ydCB7U3ByaXRlLCBHcm91cH0gZnJvbSAnLi4vZGlzcGxheSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBnYW1lOiBHYW1lO1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBvd25lcjogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZTtcclxuICAgICAgICB0aGlzLm5hbWUgPSAnQ29tcG9uZW50JztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0T3duZXIob3duZXI6IFNwcml0ZSB8IEdyb3VwKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vd25lciA9IG93bmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBpbml0aWFsaXplIHRoZSBjb21wb25lbnQsIHNldCB1cCB2YXJpYWJsZXNcclxuICAgICogY2FsbGVkIGJ5IHRoZSBvd25lciBmaXJzdCBhZnRlciB0aGUgY29tcG9uZW50IGlzIGF0dGFjaGVkXHJcbiAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAqL1xyXG4gICAgcHVibGljIGluaXQoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICogYWRkIHZpc3VhbCBlbGVtZW50c1xyXG4gICAgKiBjYWxsZWQgYnkgdGhlIG93bmVyIGFmdGVyIGl0IGNhbGxzIHRoaXMgaW5pdCBtZXRob2RcclxuICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICovXHJcbiAgICBwdWJsaWMgYnVpbGRJbnRlcmZhY2UoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICogY2FsbGVkIGJ5IHRoZSBvd25lciBpbiBpdHMgdXBkYXRlIGN5Y2xlLCBldmVyeSBmcmFtZVxyXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgKi9cclxuICAgIHB1YmxpYyB1cGRhdGUoKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICogcmVtb3ZlIGFueSB2aXN1YWwgZWxlbWVudHMgLyBzaWduYWxzIGFkZGVkXHJcbiAgICAqIG93bmVyIGNhbGxzIHRoaXMgbWV0aG9kIGluIGl0cyBvd24gZGVzdHJveSBtZXRob2RcclxuICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICovXHJcbiAgICBwdWJsaWMgZGVzdHJveSgpIHsgfVxyXG59IiwiaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xyXG5pbXBvcnQge0dhbWUsIEdhbWVPYmplY3RGYWN0b3J5fSBmcm9tICcuLi9jb3JlJztcclxuaW1wb3J0IHtNZWRpYXRvcn0gZnJvbSAnLi4vbXZjJztcclxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJy4vQ29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBHcm91cCBleHRlbmRzIFBoYXNlci5Hcm91cCB7XHJcbiAgICBwdWJsaWMgZ2FtZTogR2FtZTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX2hhc0NvbXBvbmVudHM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByb3RlY3RlZCBfY29tcG9uZW50S2V5czogc3RyaW5nW10gPSBbXTtcclxuICAgIHByb3RlY3RlZCBfY29tcG9uZW50czogeyBbY29tcG9uZW50TmFtZTogc3RyaW5nXTogQ29tcG9uZW50IH0gPSB7fTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX21lZGlhdG9yOiBNZWRpYXRvciA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgcHVibGljIG5hbWU6IHN0cmluZyA9IFwiZEdyb3VwXCIsIGFkZFRvU3RhZ2U6IGJvb2xlYW4gPSBmYWxzZSwgY29tcG9uZW50czogQ29tcG9uZW50W10gPSBudWxsLCBlbmFibGVCb2R5PzogYm9vbGVhbiwgcGh5c2ljc0JvZHlUeXBlPzogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lLCBudWxsLCBuYW1lLCBhZGRUb1N0YWdlLCBlbmFibGVCb2R5LCBwaHlzaWNzQm9keVR5cGUpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnNldCh4LCB5KTtcclxuXHJcbiAgICAgICAgaWYgKCFhZGRUb1N0YWdlKVxyXG4gICAgICAgICAgICB0aGlzLmdhbWUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKGNvbXBvbmVudHMpXHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50cyhjb21wb25lbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQaGFzZXIuR3JvdXAgb3ZlcnJpZGVzXHJcbiAgICAvKipcclxuICAgICogY2FsbGVkIGV2ZXJ5IGZyYW1lXHJcbiAgICAqIGl0ZXJhdGVzIHRoZSBjb21wb25lbnRzIGxpc3QgYW5kIGNhbGxzIGNvbXBvbmVudC51cGRhdGUoKSBvbiBlYWNoIGNvbXBvbmVudFxyXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgKiBAb3ZlcnJpZGVcclxuICAgICovXHJcbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLl9oYXNDb21wb25lbnRzKVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogcmVtb3ZlcyBhbGwgY29tcG9uZW50c1xyXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuR3JvdXAuZGVzdHJveX1cclxuICAgICogQG92ZXJyaWRlXHJcbiAgICAqL1xyXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxDb21wb25lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVNZWRpYXRvcigpO1xyXG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcclxuICAgIC8qKlxyXG4gICAgKiBpbml0aWFsaXplIHZhcmlhYmxlc1xyXG4gICAgKiBhZGQgbWVkaWF0b3IsIGlmIG5lZWRlZFxyXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgKi9cclxuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIGFkZCB2aXN1YWwgZWxlbWVudHNcclxuICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYnVpbGRJbnRlcmZhY2UoKTogdm9pZCB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICogdXBkYXRlcyB0aGUgaW50ZXJuYWwgbGlzdCBvZiBjb21wb25lbnQga2V5cyAoc28gd2UgZG9uJ3QgaGF2ZSB0byBjYWxsIE9iamVjdC5rZXlzKCkgYWxsIHRoZSB0aW1lKVxyXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgKi9cclxuICAgIHByaXZhdGUgX3VwZGF0ZUNvbXBvbmVudEtleXMoKSB7XHJcbiAgICAgICAgdGhpcy5fY29tcG9uZW50S2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuX2NvbXBvbmVudHMpO1xyXG4gICAgICAgIHRoaXMuX2hhc0NvbXBvbmVudHMgPSB0aGlzLl9jb21wb25lbnRLZXlzLmxlbmd0aCA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHVibGljIG1ldGhvZHNcclxuICAgIC8qKlxyXG4gICAgKiBhdHRhY2hlcyBhIGxpc3Qgb2YgY29tcG9uZW50cyB0byB0aGUgRGlqb24uVUlHcm91cFxyXG4gICAgKiBAcGFyYW0ge0FycmF5fSBjb21wb25lbnRzIHRoZSBsaXN0IG9mIGNvbXBvbmVudHMgdG8gYWRkXHJcbiAgICAqL1xyXG4gICAgcHVibGljIGFkZENvbXBvbmVudHMgPSBmdW5jdGlvbiAoY29tcG9uZW50czogQ29tcG9uZW50W10pIHtcclxuICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMubGVuZ3RoID09PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEaWpvbi5VSUdyb3VwIGNvbXBvbmVudHMgbXVzdCBiZSBhbiBhcnJheScpO1xyXG5cclxuICAgICAgICB3aGlsZSAoY29tcG9uZW50cy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChjb21wb25lbnRzLnNoaWZ0KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBhdHRhY2hlcyBhIGNvbXBvbmVudCB0byB0aGUgRGlqb24uVUlHcm91cFxyXG4gICAgKiBAcGFyYW0ge2Rpam9uLkNvbXBvbmVudH0gY29tcG9uZW50IHRvIGJlIGF0dGFjaGVkXHJcbiAgICAqL1xyXG4gICAgcHVibGljIGFkZENvbXBvbmVudChjb21wb25lbnQ6IENvbXBvbmVudCk6IENvbXBvbmVudCB7XHJcbiAgICAgICAgY29tcG9uZW50LnNldE93bmVyKHRoaXMpO1xyXG4gICAgICAgIGNvbXBvbmVudC5pbml0KCk7XHJcbiAgICAgICAgY29tcG9uZW50LmJ1aWxkSW50ZXJmYWNlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHNbY29tcG9uZW50Lm5hbWVdID0gY29tcG9uZW50O1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvbXBvbmVudEtleXMoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogaXRlcmF0ZXMgdGhyb3VnaCB0aGUgbGlzdCBvZiBjb21wb25lbnRzIGFuZCB1cGRhdGVzIGVhY2ggb25lXHJcbiAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAqL1xyXG4gICAgcHVibGljIHVwZGF0ZUNvbXBvbmVudHMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY29tcG9uZW50S2V5cy5mb3JFYWNoKFxyXG4gICAgICAgICAgICBjb21wb25lbnROYW1lID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudE5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogdXBkYXRlcyBhbiBhdHRhY2hlZCBjb21wb25lbnQgKGNhbGxzIGNvbXBvbmVudC51cGRhdGUoKSlcclxuICAgICogQHBhcmFtICB7U3RyaW5nfSBjb21wb25lbnROYW1lIHRoZSBuYW1lIG9mIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlXHJcbiAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAqL1xyXG4gICAgcHVibGljIHVwZGF0ZUNvbXBvbmVudChjb21wb25lbnROYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiByZW1vdmVzIGFsbCB0aGUgY29tcG9uZW50cyBjdXJyZW50bHkgYXR0YWNoZWRcclxuICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlQWxsQ29tcG9uZW50cygpIHtcclxuICAgICAgICB3aGlsZSAodGhpcy5fY29tcG9uZW50S2V5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ29tcG9uZW50KHRoaXMuX2NvbXBvbmVudEtleXMucG9wKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogcmVtb3ZlcyBhIHNwZWNpZmljIGNvbXBvbmVudFxyXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGNvbXBvbmVudE5hbWUgdGhlIG5hbWUgb2YgdGhlIGNvbXBvbmVudCB0byByZW1vdmVcclxuICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlQ29tcG9uZW50KGNvbXBvbmVudE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29tcG9uZW50c1tjb21wb25lbnROYW1lXSA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5fY29tcG9uZW50c1tjb21wb25lbnROYW1lXS5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5fY29tcG9uZW50c1tjb21wb25lbnROYW1lXSA9IG51bGw7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX2NvbXBvbmVudHNbY29tcG9uZW50TmFtZV07XHJcblxyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvbXBvbmVudEtleXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmxhdHRlbihkZWxheTogbnVtYmVyID0gMCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChkZWxheSA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhY2hlQXNCaXRtYXAgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoZGVsYXksICgpID0+IHsgdGhpcy5jYWNoZUFzQml0bWFwID0gdHJ1ZSB9LCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVuRmxhdHRlbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhY2hlQXNCaXRtYXAgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiByZW1vdmVzIHRoZSBtZWRpYXRvciwgaWYgaXQgZXhpc3RzXHJcbiAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAqL1xyXG4gICAgcHVibGljIHJlbW92ZU1lZGlhdG9yKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5fbWVkaWF0b3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9tZWRpYXRvci5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5fbWVkaWF0b3IgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYWRkSW50ZXJuYWwoKTogR2FtZU9iamVjdEZhY3Rvcnkge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5hZGQudGFyZ2V0R3JvdXAgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUuYWRkO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xyXG5pbXBvcnQge0dhbWV9IGZyb20gJy4uL2NvcmUnO1xyXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnLi9Db21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZSBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xyXG4gICAgcHVibGljIGdhbWU6IEdhbWU7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9oYXNDb21wb25lbnRzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcm90ZWN0ZWQgX2NvbXBvbmVudEtleXM6IHN0cmluZ1tdID0gW107XHJcbiAgICBwcm90ZWN0ZWQgX2NvbXBvbmVudHM6IHsgW2NvbXBvbmVudE5hbWU6IHN0cmluZ106IENvbXBvbmVudCB9ID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IoeD86IG51bWJlciwgeT86IG51bWJlciwga2V5Pzogc3RyaW5nIHwgUGhhc2VyLlJlbmRlclRleHR1cmUgfCBQaGFzZXIuQml0bWFwRGF0YSB8IFBJWEkuVGV4dHVyZSwgZnJhbWU/OiBzdHJpbmcgfCBudW1iZXIsIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSBcImRTcHJpdGVcIiwgY29tcG9uZW50czogQ29tcG9uZW50W10gPSBudWxsKSB7XHJcbiAgICAgICAgc3VwZXIoQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lLCB4LCB5LCBrZXksIGZyYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbXBvbmVudHMpXHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50cyhjb21wb25lbnRzKTtcclxuICAgIH1cclxuICAgIC8vIFBoYXNlci5TcHJpdGUgb3ZlcnJpZGVzXHJcbiAgICAvKipcclxuICAgICogY2FsbGVkIGV2ZXJ5IGZyYW1lXHJcbiAgICAqIGl0ZXJhdGVzIHRoZSBjb21wb25lbnRzIGxpc3QgYW5kIGNhbGxzIGNvbXBvbmVudC51cGRhdGUoKSBvbiBlYWNoIGNvbXBvbmVudFxyXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgKiBAb3ZlcnJpZGVcclxuICAgICovXHJcbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9oYXNDb21wb25lbnRzKVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogcmVtb3ZlcyBhbGwgY29tcG9uZW50c1xyXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuR3JvdXAuZGVzdHJveX1cclxuICAgICogQG92ZXJyaWRlXHJcbiAgICAqL1xyXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxDb21wb25lbnRzKCk7XHJcbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1xyXG4gICAgLyoqXHJcbiAgICAqIGluaXRpYWxpemUgdmFyaWFibGVzXHJcbiAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICogYWRkIHZpc3VhbCBlbGVtZW50c1xyXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgKi9cclxuICAgIHByb3RlY3RlZCBidWlsZEludGVyZmFjZSgpOiB2b2lkIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiB1cGRhdGVzIHRoZSBpbnRlcm5hbCBsaXN0IG9mIGNvbXBvbmVudCBrZXlzIChzbyB3ZSBkb24ndCBoYXZlIHRvIGNhbGwgT2JqZWN0LmtleXMoKSBhbGwgdGhlIHRpbWUpXHJcbiAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAqL1xyXG4gICAgcHJpdmF0ZSBfdXBkYXRlQ29tcG9uZW50S2V5cygpIHtcclxuICAgICAgICB0aGlzLl9jb21wb25lbnRLZXlzID0gT2JqZWN0LmtleXModGhpcy5fY29tcG9uZW50cyk7XHJcbiAgICAgICAgdGhpcy5faGFzQ29tcG9uZW50cyA9IHRoaXMuX2NvbXBvbmVudEtleXMubGVuZ3RoID4gMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xyXG4gICAgLyoqXHJcbiAgICAqIGF0dGFjaGVzIGEgbGlzdCBvZiBjb21wb25lbnRzIHRvIHRoZSBEaWpvbi5VSUdyb3VwXHJcbiAgICAqIEBwYXJhbSB7QXJyYXl9IGNvbXBvbmVudHMgdGhlIGxpc3Qgb2YgY29tcG9uZW50cyB0byBhZGRcclxuICAgICovXHJcbiAgICBwdWJsaWMgYWRkQ29tcG9uZW50cyA9IGZ1bmN0aW9uIChjb21wb25lbnRzOiBDb21wb25lbnRbXSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cy5sZW5ndGggPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Rpam9uLlVJR3JvdXAgY29tcG9uZW50cyBtdXN0IGJlIGFuIGFycmF5Jyk7XHJcblxyXG4gICAgICAgIHdoaWxlIChjb21wb25lbnRzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KGNvbXBvbmVudHMuc2hpZnQoKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBhdHRhY2hlcyBhIGNvbXBvbmVudCB0byB0aGUgRGlqb24uVUlHcm91cFxyXG4gICAgKiBAcGFyYW0ge2Rpam9uLkNvbXBvbmVudH0gY29tcG9uZW50IHRvIGJlIGF0dGFjaGVkXHJcbiAgICAqL1xyXG4gICAgcHVibGljIGFkZENvbXBvbmVudChjb21wb25lbnQ6IENvbXBvbmVudCk6IENvbXBvbmVudCB7XHJcbiAgICAgICAgY29tcG9uZW50LnNldE93bmVyKHRoaXMpO1xyXG4gICAgICAgIGNvbXBvbmVudC5pbml0KCk7XHJcbiAgICAgICAgY29tcG9uZW50LmJ1aWxkSW50ZXJmYWNlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHNbY29tcG9uZW50Lm5hbWVdID0gY29tcG9uZW50O1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvbXBvbmVudEtleXMoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIGl0ZXJhdGVzIHRocm91Z2ggdGhlIGxpc3Qgb2YgY29tcG9uZW50cyBhbmQgdXBkYXRlcyBlYWNoIG9uZVxyXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgKi9cclxuICAgIHB1YmxpYyB1cGRhdGVDb21wb25lbnRzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudEtleXMuZm9yRWFjaChcclxuICAgICAgICAgICAgY29tcG9uZW50TmFtZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnROYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIHVwZGF0ZXMgYW4gYXR0YWNoZWQgY29tcG9uZW50IChjYWxscyBjb21wb25lbnQudXBkYXRlKCkpXHJcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gY29tcG9uZW50TmFtZSB0aGUgbmFtZSBvZiB0aGUgY29tcG9uZW50IHRvIHVwZGF0ZVxyXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgKi9cclxuICAgIHB1YmxpYyB1cGRhdGVDb21wb25lbnQoY29tcG9uZW50TmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY29tcG9uZW50c1tjb21wb25lbnROYW1lXS51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogcmVtb3ZlcyBhbGwgdGhlIGNvbXBvbmVudHMgY3VycmVudGx5IGF0dGFjaGVkXHJcbiAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAqL1xyXG4gICAgcHVibGljIHJlbW92ZUFsbENvbXBvbmVudHMoKSB7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuX2NvbXBvbmVudEtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNvbXBvbmVudCh0aGlzLl9jb21wb25lbnRLZXlzLnBvcCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIHJlbW92ZXMgYSBzcGVjaWZpYyBjb21wb25lbnRcclxuICAgICogQHBhcmFtICB7U3RyaW5nfSBjb21wb25lbnROYW1lIHRoZSBuYW1lIG9mIHRoZSBjb21wb25lbnQgdG8gcmVtb3ZlXHJcbiAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAqL1xyXG4gICAgcHVibGljIHJlbW92ZUNvbXBvbmVudChjb21wb25lbnROYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbXBvbmVudHNbY29tcG9uZW50TmFtZV0gPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHNbY29tcG9uZW50TmFtZV0uZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHNbY29tcG9uZW50TmFtZV0gPSBudWxsO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdO1xyXG5cclxuICAgICAgICB0aGlzLl91cGRhdGVDb21wb25lbnRLZXlzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZsYXR0ZW4oZGVsYXk6IG51bWJlciA9IDApOiB2b2lkIHtcclxuICAgICAgICBpZiAoZGVsYXkgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jYWNoZUFzQml0bWFwID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKGRlbGF5LCAoKSA9PiB7IHRoaXMuY2FjaGVBc0JpdG1hcCA9IHRydWUgfSwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1bkZsYXR0ZW4oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jYWNoZUFzQml0bWFwID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHJlc29sdXRpb24oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0dXJlLmJhc2VUZXh0dXJlLnJlc29sdXRpb247XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1Nwcml0ZX0gZnJvbSAnLi9TcHJpdGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEludmlzaWJsZUJ1dHRvbiBleHRlbmRzIFNwcml0ZSB7XHJcbiAgICBwcml2YXRlIF9oaXRXaWR0aDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfaGl0SGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIG5hbWU6IHN0cmluZywgdzogbnVtYmVyLCBoOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcih4LCB5LCBudWxsLCBudWxsLCBuYW1lKTtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICB0aGlzLmJ1aWxkSW50ZXJmYWNlKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTaXplKHcsIGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW5wdXRFbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYnVpbGRJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgdGhpcy5fYWRkSGl0UmVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1xyXG4gICAgcHJpdmF0ZSBfYWRkSGl0UmVjdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5faGl0V2lkdGggPiAwICYmIHRoaXMuX2hpdEhlaWdodCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5oaXRBcmVhID0gbmV3IFBoYXNlci5SZWN0YW5nbGUoMCwgMCwgdGhpcy5faGl0V2lkdGgsIHRoaXMuX2hpdEhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHB1YmxpYyBtZXRob2RzXHJcbiAgICBwdWJsaWMgc2V0U2l6ZSh3LCBoKSB7XHJcbiAgICAgICAgdGhpcy5faGl0V2lkdGggPSB3IHx8IDA7XHJcbiAgICAgICAgdGhpcy5faGl0SGVpZ2h0ID0gaCB8fCAwO1xyXG5cclxuICAgICAgICB0aGlzLl9hZGRIaXRSZWN0KCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtHcm91cH0gZnJvbSAnLi9Hcm91cCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmluZVNsaWNlSW1hZ2UgZXh0ZW5kcyBHcm91cCB7XHJcbiAgICBwcml2YXRlIF9fd2lkdGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX19oZWlnaHQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3NpemU6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIF9kaXNwbGF5TGF5ZXI6IFBoYXNlci5Hcm91cDtcclxuICAgIHByaXZhdGUgX2lucHV0TGF5ZXI6IFBoYXNlci5Hcm91cDtcclxuXHJcbiAgICBwdWJsaWMgdGw6IFBoYXNlci5JbWFnZTtcclxuICAgIHB1YmxpYyB0OiBQaGFzZXIuVGlsZVNwcml0ZTtcclxuICAgIHB1YmxpYyB0cjogUGhhc2VyLkltYWdlO1xyXG4gICAgcHVibGljIHI6IFBoYXNlci5UaWxlU3ByaXRlO1xyXG4gICAgcHVibGljIGJyOiBQaGFzZXIuSW1hZ2U7XHJcbiAgICBwdWJsaWMgYjogUGhhc2VyLlRpbGVTcHJpdGU7XHJcbiAgICBwdWJsaWMgYmw6IFBoYXNlci5JbWFnZTtcclxuICAgIHB1YmxpYyBsOiBQaGFzZXIuVGlsZVNwcml0ZTtcclxuICAgIHB1YmxpYyB0aWxlOiBQaGFzZXIuVGlsZVNwcml0ZTtcclxuXHJcbiAgICBwcml2YXRlIF9pbnRlcmFjdGl2ZUJhY2tpbmc6IFBoYXNlci5JbWFnZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9pbnB1dEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF9jdXJyZW50Qm91bmRzOiBQSVhJLlJlY3RhbmdsZSA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBwdWJsaWMga2V5OiBzdHJpbmcsIHB1YmxpYyB0ZXh0dXJlUGF0aDogc3RyaW5nLCBwdWJsaWMgZmlsbE1pZGRsZTogYm9vbGVhbiA9IHRydWUsIHB1YmxpYyB0b3BIZWlnaHQ/OiBudW1iZXIsIHB1YmxpYyByaWdodFdpZHRoPzogbnVtYmVyLCBwdWJsaWMgYm90dG9tSGVpZ2h0PzogbnVtYmVyLCBwdWJsaWMgbGVmdFdpZHRoPzogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoeCwgeSk7XHJcblxyXG4gICAgICAgIHRoaXMuX193aWR0aCA9IE1hdGgucm91bmQod2lkdGgpO1xyXG4gICAgICAgIHRoaXMuX19oZWlnaHQgPSBNYXRoLnJvdW5kKGhlaWdodCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2J1aWxkKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmFkZCgxMCwgdGhpcy5fZmxhdHRlbiwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfYnVpbGQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5faW5wdXRMYXllciA9IHRoaXMuYWRkKHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKSk7XHJcbiAgICAgICAgdGhpcy5fZGlzcGxheUxheWVyID0gdGhpcy5hZGQodGhpcy5nYW1lLmFkZC5ncm91cCgpKTtcclxuXHJcbiAgICAgICAgdGhpcy50bCA9IDxQaGFzZXIuSW1hZ2U+dGhpcy5fZGlzcGxheUxheWVyLmFkZCh0aGlzLmdhbWUuYWRkLmltYWdlKDAsIDAsIHRoaXMua2V5LCB0aGlzLnRleHR1cmVQYXRoICsgJy90bCcpKTtcclxuXHJcbiAgICAgICAgdGhpcy50ciA9IDxQaGFzZXIuSW1hZ2U+dGhpcy5fZGlzcGxheUxheWVyLmFkZCh0aGlzLmdhbWUuYWRkLmltYWdlKHRoaXMuX193aWR0aCwgMCwgdGhpcy5rZXksIHRoaXMudGV4dHVyZVBhdGggKyAnL3RyJykpO1xyXG5cclxuICAgICAgICB0aGlzLnQgPSA8UGhhc2VyLlRpbGVTcHJpdGU+dGhpcy5fZGlzcGxheUxheWVyLmFkZCh0aGlzLmdhbWUuYWRkLnRpbGVTcHJpdGUodGhpcy50bC5nZXRCb3VuZHMoKS53aWR0aCwgMCwgdGhpcy5fX3dpZHRoIC0gdGhpcy50bC5nZXRCb3VuZHMoKS53aWR0aCAtIHRoaXMudHIuZ2V0Qm91bmRzKCkud2lkdGgsIHRoaXMudG9wSGVpZ2h0IHx8IHRoaXMudGwuZ2V0Qm91bmRzKCkuaGVpZ2h0LCB0aGlzLmtleSwgdGhpcy50ZXh0dXJlUGF0aCArICcvdCcpKTtcclxuXHJcbiAgICAgICAgdGhpcy5sID0gPFBoYXNlci5UaWxlU3ByaXRlPnRoaXMuX2Rpc3BsYXlMYXllci5hZGQodGhpcy5nYW1lLmFkZC50aWxlU3ByaXRlKDAsIHRoaXMudGwuZ2V0Qm91bmRzKCkuaGVpZ2h0LCB0aGlzLmxlZnRXaWR0aCB8fCB0aGlzLnRsLmdldEJvdW5kcygpLndpZHRoLCAxMDAsIHRoaXMua2V5LCB0aGlzLnRleHR1cmVQYXRoICsgJy9sJykpO1xyXG5cclxuICAgICAgICB0aGlzLmJsID0gPFBoYXNlci5JbWFnZT50aGlzLl9kaXNwbGF5TGF5ZXIuYWRkKHRoaXMuZ2FtZS5hZGQuaW1hZ2UoMCwgdGhpcy5fX2hlaWdodCwgdGhpcy5rZXksIHRoaXMudGV4dHVyZVBhdGggKyAnL2JsJykpO1xyXG5cclxuICAgICAgICB0aGlzLmwuaGVpZ2h0ID0gdGhpcy5fX2hlaWdodCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkuaGVpZ2h0IC0gdGhpcy5ibC5nZXRCb3VuZHMoKS5oZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMuYiA9IDxQaGFzZXIuVGlsZVNwcml0ZT50aGlzLl9kaXNwbGF5TGF5ZXIuYWRkKHRoaXMuZ2FtZS5hZGQudGlsZVNwcml0ZSh0aGlzLmJsLmdldEJvdW5kcygpLndpZHRoLCB0aGlzLl9faGVpZ2h0LCAxMDAsIHRoaXMuYm90dG9tSGVpZ2h0IHx8IHRoaXMuYmwuZ2V0Qm91bmRzKCkuaGVpZ2h0LCB0aGlzLmtleSwgdGhpcy50ZXh0dXJlUGF0aCArICcvYicpKTtcclxuXHJcbiAgICAgICAgdGhpcy5iciA9IDxQaGFzZXIuSW1hZ2U+dGhpcy5fZGlzcGxheUxheWVyLmFkZCh0aGlzLmdhbWUuYWRkLmltYWdlKHRoaXMuX193aWR0aCwgdGhpcy5fX2hlaWdodCwgdGhpcy5rZXksIHRoaXMudGV4dHVyZVBhdGggKyAnL2JyJykpO1xyXG5cclxuICAgICAgICB0aGlzLmIud2lkdGggPSB0aGlzLl9fd2lkdGggLSB0aGlzLmJsLmdldEJvdW5kcygpLndpZHRoIC0gdGhpcy5ici5nZXRCb3VuZHMoKS53aWR0aDtcclxuICAgICAgICB0aGlzLnIgPSA8UGhhc2VyLlRpbGVTcHJpdGU+dGhpcy5fZGlzcGxheUxheWVyLmFkZCh0aGlzLmdhbWUuYWRkLnRpbGVTcHJpdGUodGhpcy5fX3dpZHRoLCB0aGlzLnRyLmdldEJvdW5kcygpLmhlaWdodCwgdGhpcy5yaWdodFdpZHRoIHx8IHRoaXMudHIuZ2V0Qm91bmRzKCkud2lkdGgsIHRoaXMuX19oZWlnaHQgLSB0aGlzLnRsLmdldEJvdW5kcygpLmhlaWdodCAtIHRoaXMuYnIuZ2V0Qm91bmRzKCkuaGVpZ2h0LCB0aGlzLmtleSwgdGhpcy50ZXh0dXJlUGF0aCArICcvcicpKTtcclxuXHJcbiAgICAgICAgdGhpcy50ci5zZXRQaXZvdCgndHInKTtcclxuICAgICAgICB0aGlzLnIuc2V0UGl2b3QoJ3RyJyk7XHJcblxyXG4gICAgICAgIHRoaXMuYnIuc2V0UGl2b3QoJ2JyJyk7XHJcbiAgICAgICAgdGhpcy5iLnNldFBpdm90KCdibCcpO1xyXG4gICAgICAgIHRoaXMuYmwuc2V0UGl2b3QoJ2JsJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZpbGxNaWRkbGUpIHtcclxuICAgICAgICAgICAgdGhpcy50aWxlID0gPFBoYXNlci5UaWxlU3ByaXRlPnRoaXMuX2Rpc3BsYXlMYXllci5hZGQodGhpcy5nYW1lLmFkZC50aWxlU3ByaXRlKHRoaXMudGwuZ2V0Qm91bmRzKCkud2lkdGggLSAxLCB0aGlzLnRsLmdldEJvdW5kcygpLmhlaWdodCAtIDEsIHRoaXMuX193aWR0aCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkud2lkdGggLSB0aGlzLnRyLmdldEJvdW5kcygpLndpZHRoICsgMiwgdGhpcy5fX2hlaWdodCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkuaGVpZ2h0IC0gdGhpcy5ici5nZXRCb3VuZHMoKS5oZWlnaHQgKyA0LCB0aGlzLmtleSwgdGhpcy50ZXh0dXJlUGF0aCArICcvdGlsZScpKTtcclxuICAgICAgICAgICAgdGhpcy5zZW5kVG9CYWNrKHRoaXMudGlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2FkZEludGVyYWN0aXZlQmFja2luZygpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBnZnggPSB0aGlzLmdhbWUuYWRkLmdyYXBoaWNzKCk7XHJcbiAgICAgICAgZ2Z4LmJlZ2luRmlsbCgweEZGMDAwMCwgMCk7XHJcbiAgICAgICAgZ2Z4LmRyYXdSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLl9fd2lkdGgsIHRoaXMuX19oZWlnaHQpO1xyXG4gICAgICAgIGdmeC5lbmRGaWxsKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2ludGVyYWN0aXZlQmFja2luZyA9IHRoaXMuX2lucHV0TGF5ZXIuYWRkKHRoaXMuZ2FtZS5hZGQuaW1hZ2UoMCwgMCwgZ2Z4LmdlbmVyYXRlVGV4dHVyZSgpKSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2ludGVyYWN0aXZlQmFja2luZy5pbnB1dEVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLmdhbWUud29ybGQucmVtb3ZlKGdmeCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2V0U2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl91bmZsYXR0ZW4oKTtcclxuXHJcbiAgICAgICAgdGhpcy50LndpZHRoID0gdGhpcy5iLndpZHRoID0gdGhpcy5fX3dpZHRoIC0gdGhpcy50bC5nZXRCb3VuZHMoKS53aWR0aCAtIHRoaXMudHIuZ2V0Qm91bmRzKCkud2lkdGg7XHJcbiAgICAgICAgdGhpcy5yLnggPSB0aGlzLnRyLnggPSB0aGlzLmJyLnggPSB0aGlzLl9fd2lkdGg7XHJcbiAgICAgICAgdGhpcy5sLmhlaWdodCA9IHRoaXMuci5oZWlnaHQgPSB0aGlzLl9faGVpZ2h0IC0gdGhpcy50ci5nZXRCb3VuZHMoKS5oZWlnaHQgLSB0aGlzLmJsLmdldEJvdW5kcygpLmhlaWdodDtcclxuICAgICAgICB0aGlzLmJsLnkgPSB0aGlzLmIueSA9IHRoaXMuYnIueSA9IHRoaXMuX19oZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZpbGxNaWRkbGUpIHtcclxuICAgICAgICAgICAgdGhpcy50aWxlLndpZHRoID0gdGhpcy5fX3dpZHRoIC0gdGhpcy50ci5nZXRCb3VuZHMoKS53aWR0aCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkud2lkdGggKyA0XHJcbiAgICAgICAgICAgIHRoaXMudGlsZS5oZWlnaHQgPSB0aGlzLl9faGVpZ2h0IC0gdGhpcy50bC5nZXRCb3VuZHMoKS5oZWlnaHQgLSB0aGlzLmJsLmdldEJvdW5kcygpLmhlaWdodCArIDQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9pbnRlcmFjdGl2ZUJhY2tpbmcud2lkdGggPSB0aGlzLl9fd2lkdGg7XHJcbiAgICAgICAgdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nLmhlaWdodCA9IHRoaXMuX19oZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoMTAsIHRoaXMuX2ZsYXR0ZW4sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2FkZElucHV0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FkZEludGVyYWN0aXZlQmFja2luZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9yZW1vdmVJbnB1dCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2ludGVyYWN0aXZlQmFja2luZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2ludGVyYWN0aXZlQmFja2luZy5pbnB1dEVuYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF91bmZsYXR0ZW4oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZGlzcGxheUxheWVyLmNhY2hlQXNCaXRtYXAgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2ZsYXR0ZW4oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZGlzcGxheUxheWVyLmNhY2hlQXNCaXRtYXAgPSB0cnVlOy8vdGhpcy5nYW1lLnJlbmRlclR5cGUgPT09IFBoYXNlci5XRUJHTDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGlucHV0RW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2lucHV0RW5hYmxlZCA9IHZhbHVlO1xyXG4gICAgICAgIGlmICh0aGlzLl9pbnB1dEVuYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fYWRkSW5wdXQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVJbnB1dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGV2ZW50cygpOiBQaGFzZXIuRXZlbnRzIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2ludGVyYWN0aXZlQmFja2luZyB8fCAhdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nLmlucHV0RW5hYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVyYWN0aXZlQmFja2luZy5ldmVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBpbnB1dCgpOiBQaGFzZXIuSW5wdXRIYW5kbGVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nLmlucHV0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgaFNpemUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX193aWR0aCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3NldFNpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHZTaXplKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9faGVpZ2h0ID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fc2V0U2l6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgaFNpemUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fX3dpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgdlNpemUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fX2hlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX193aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuX19oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5fc2V0U2l6ZSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xyXG5pbXBvcnQge0dhbWV9IGZyb20gJy4uL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwaW5lIGV4dGVuZHMgUElYSS5zcGluZS5TcGluZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIERFRkFVTFRfU1BFRUQ6IG51bWJlciA9IDAuMDE2NzsvLyA2MCBmcHM7XHJcbiAgICBwdWJsaWMgZGVidWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2NyZWF0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBvbkNyZWF0ZTogUGhhc2VyLlNpZ25hbCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XHJcbiAgICBwdWJsaWMgb25BbmltYXRpb25Db21wbGV0ZTogUGhhc2VyLlNpZ25hbCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9jYW5VcGRhdGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJvdGVjdGVkIF9wYXVzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByb3RlY3RlZCBfc3BlZWQ6IG51bWJlciA9IDE7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9ib3VuZHNPZmZzZXQ6IFBoYXNlci5Qb2ludCA9IG5ldyBQaGFzZXIuUG9pbnQoMCwgMCk7XHJcbiAgICBwcm90ZWN0ZWQgX2JvdW5kc1dpZHRoU2NhbGU6IG51bWJlciA9IDE7XHJcbiAgICBwcm90ZWN0ZWQgX2JvdW5kc0hlaWdodFNjYWxlOiBudW1iZXIgPSAxO1xyXG4gICAgcHJvdGVjdGVkIF9jdXJyZW50Qm91bmRzOiBQSVhJLlJlY3RhbmdsZSA9IG5ldyBQSVhJLlJlY3RhbmdsZSgpO1xyXG5cclxuICAgIHB1YmxpYyBwaHlzaWNzU3ByaXRlOiBQaGFzZXIuU3ByaXRlO1xyXG4gICAgcHJvdGVjdGVkIF9waHlzaWNzT2Zmc2V0OiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0gPSB7IHg6IDAsIHk6IDAgfTtcclxuICAgIHByb3RlY3RlZCBfcGh5c2ljc0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgbm9uTWVzaFZlcnNpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXNzZXROYW1lOiBzdHJpbmcgPSAnJywgeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCkge1xyXG4gICAgICAgIHN1cGVyKEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZSwgeCwgeSwgU3BpbmUuY3JlYXRlU3BpbmVEYXRhKFNwaW5lLkxPQURfTk9OX01FU0ggPyAoYXNzZXROYW1lICsgU3BpbmUuTk9OX01FU0hfU1VGRklYKSA6IGFzc2V0TmFtZSkpO1xyXG4gICAgICAgIGlmIChTcGluZS5MT0FEX05PTl9NRVNIKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9uTWVzaFZlcnNpb24gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpbml0aWFsaXplIHN0YXRpY1xyXG4gICAgICAgIFNwaW5lLmluaXRpYWxpemUoKTtcclxuICAgICAgICBTcGluZS5vbk5vbk1lc2hGUFMuYWRkT25jZSh0aGlzLmxvYWROb25NZXNoVmVyc2lvbiwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMubmFtZSA9IGFzc2V0TmFtZTtcclxuICAgICAgICB0aGlzLnNrZWxldG9uLnNldFRvU2V0dXBQb3NlKCk7XHJcbiAgICAgICAgdGhpcy5fY3JlYXRlQm91bmRzKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoMCk7XHJcbiAgICAgICAgdGhpcy5hdXRvVXBkYXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vbkFuaW1hdGlvbkNvbXBsZXRlID0gdGhpcy5zdGF0ZS5vbkFuaW1hdGlvbkNvbXBsZXRlO1xyXG4gICAgICAgIHRoaXMuaGl0QXJlYSA9IG5ldyBQaGFzZXIuUmVjdGFuZ2xlKDAsIC0gdGhpcy5za2VsZXRvbi5kYXRhLmhlaWdodCwgdGhpcy5za2VsZXRvbi5kYXRhLndpZHRoLCB0aGlzLnNrZWxldG9uLmRhdGEuaGVpZ2h0KTtcclxuICAgICAgICAvL3RoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoMTAwLCB0aGlzLl9vbkNyZWF0ZUludGVybmFsLCB0aGlzKTtcclxuXHJcbiAgICAgICAgaWYgKFNwaW5lLkFVVE9fTUVTSCAmJiAhU3BpbmUuTE9BRF9OT05fTUVTSCkge1xyXG4gICAgICAgICAgICBTcGluZS5kZXRlY3RBdXRvTWVzaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkNyZWF0ZUludGVybmFsKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NyZWF0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2NyZWF0ZSgpO1xyXG4gICAgICAgIHRoaXMub25DcmVhdGUuZGlzcGF0Y2goKTtcclxuICAgICAgICB0aGlzLl9jYW5VcGRhdGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRvIG92ZXJyaWRlXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShkdDogbnVtYmVyID0gU3BpbmUuREVGQVVMVF9TUEVFRCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5fY3JlYXRlZCAmJiB0aGlzLnBhcmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLl9vbkNyZWF0ZUludGVybmFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9wYXVzZWQgfHwgIXRoaXMuX2NhblVwZGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLl9waHlzaWNzRW5hYmxlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLnBoeXNpY3NTcHJpdGUuYm9keS5wb3NpdGlvbi54ICsgdGhpcy5fcGh5c2ljc09mZnNldC54O1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB0aGlzLnBoeXNpY3NTcHJpdGUuYm9keS5wb3NpdGlvbi55ICsgdGhpcy5fcGh5c2ljc09mZnNldC55ICsgKHRoaXMuc2NhbGUueSA+IDAgPyB0aGlzLnBoeXNpY3NTcHJpdGUuYm9keS5oZWlnaHQgOiAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN1cGVyLnVwZGF0ZSh0aGlzLl9zcGVlZCAqIGR0KTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0UGh5c2ljcyh0eXBlOiBudW1iZXIsIG9mZnNldDogeyB4PzogbnVtYmVyLCB5PzogbnVtYmVyIH0pOiBib29sZWFuIHtcclxuICAgICAgICB0aGlzLl9jcmVhdGVCb3VuZHMoKTtcclxuICAgICAgICBpZiAodHlwZSAhPSBQaGFzZXIuUGh5c2ljcy5BUkNBREUgJiZcclxuICAgICAgICAgICAgdHlwZSAhPSBQaGFzZXIuUGh5c2ljcy5OSU5KQSAmJlxyXG4gICAgICAgICAgICB0eXBlICE9IFBoYXNlci5QaHlzaWNzLlAySlMpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKG9mZnNldC54ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fcGh5c2ljc09mZnNldC54ID0gb2Zmc2V0Lng7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob2Zmc2V0LnkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9waHlzaWNzT2Zmc2V0LnkgPSBvZmZzZXQueTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGh5c2ljc1Nwcml0ZSA9IDxQaGFzZXIuU3ByaXRlPnRoaXMucGFyZW50LmFkZENoaWxkKHRoaXMuZ2FtZS5hZGQuc3ByaXRlKHRoaXMueCArIHRoaXMuX3BoeXNpY3NPZmZzZXQueCwgdGhpcy55IC0gdGhpcy5fcGh5c2ljc09mZnNldC55KSk7XHJcblxyXG4gICAgICAgIHRoaXMucGh5c2ljc1Nwcml0ZS5uYW1lID0gdGhpcy5hc3NldE5hbWUgKyAnX3BoeXNpY3NTcHJpdGUnO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmVuYWJsZSh0aGlzLnBoeXNpY3NTcHJpdGUsIHR5cGUpO1xyXG4gICAgICAgIHRoaXMuX3BoeXNpY3NFbmFibGVkID0gKHRoaXMucGh5c2ljc1Nwcml0ZS5ib2R5ICE9PSBudWxsKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGh5c2ljc0VuYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc2FibGVQaHlzaWNzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3BoeXNpY3NFbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuYWJsZVBoeXNpY3MoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcGh5c2ljc0VuYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkTm9uTWVzaFZlcnNpb24oKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm5vbk1lc2hWZXJzaW9uID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8vIHNldHMgdGhlIG5vbk1lc2hWZXJzaW9uIGZsYWcgc28gdGhpcyBtZXRob2QgZG9lc24ndCBydW4gbW9yZSB0aGFuIG9uY2VcclxuICAgICAgICAvL3RoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9uTWVzaFZlcnNpb24gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYWxwaGEgPSAwO1xyXG4gICAgICAgIC8vIHN0b3JlIHRoZSB0cmFja3MgYW5kIHNpZ25hbHNcclxuICAgICAgICBjb25zdCB0cmFja3MgPSB0aGlzLnN0YXRlLnRyYWNrcztcclxuICAgICAgICBjb25zdCBzaWduYWwgPSB0aGlzLnN0YXRlLm9uQW5pbWF0aW9uQ29tcGxldGU7XHJcblxyXG4gICAgICAgIC8vIGRlc3Ryb3kgdGhlIHNsb3QgY29udGFpbmVyc1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgKDxQaGFzZXIuR3JvdXA+dGhpcy5yZW1vdmVDaGlsZEF0KDApKS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyByZXNldCB0aGUgc3BpbmUgZGF0YVxyXG4gICAgICAgIHRoaXMuc2V0dXAoU3BpbmUuY3JlYXRlU3BpbmVEYXRhKHRoaXMubmFtZSArIFNwaW5lLk5PTl9NRVNIX1NVRkZJWCkpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYXBwbHkodGhpcy5za2VsZXRvbik7XHJcbiAgICAgICAgLy8gcmVzZXQgdGhlIHN0YXRlXHJcbiAgICAgICAgdGhpcy5zdGF0ZS50cmFja3MgPSB0cmFja3M7XHJcbiAgICAgICAgLy8gcmVzZXQgdGhlIHNpZ25hbHNcclxuICAgICAgICB0aGlzLm9uQW5pbWF0aW9uQ29tcGxldGUgPSB0aGlzLnN0YXRlLm9uQW5pbWF0aW9uQ29tcGxldGUgPSBzaWduYWw7XHJcblxyXG4gICAgICAgIC8vIGZvcmNlIGFuIHVwZGF0ZVxyXG4gICAgICAgIC8vdGhpcy51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgLy8gY2xlYXIgdGhlIG1lc2hlZCBzcGluZSBhc3NldHNcclxuICAgICAgICAoPEdhbWU+dGhpcy5nYW1lKS5hc3NldC5jbGVhclNwaW5lQXNzZXQodGhpcy5uYW1lKTtcclxuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKDEwMCwgKCkgPT4geyB0aGlzLmFscGhhID0gMSB9LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZVNwaW5lRGF0YShhc3NldE5hbWU6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgY29uc3Qgc3BpbmUgPSBQSVhJLnNwaW5lO1xyXG4gICAgICAgIGNvbnN0IHNwaW5lQXRsYXMgPSBuZXcgc3BpbmUuU3BpbmVSdW50aW1lLkF0bGFzKEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZS5jYWNoZS5nZXRUZXh0KGFzc2V0TmFtZSArICcuYXRsYXMnKSwgdGhpcy5hdGxhc0NhbGxiYWNrRnVuY3Rpb24pO1xyXG4gICAgICAgIGNvbnN0IHNwaW5lSnNvblBhcnNlciA9IG5ldyBzcGluZS5TcGluZVJ1bnRpbWUuU2tlbGV0b25Kc29uUGFyc2VyKG5ldyBzcGluZS5TcGluZVJ1bnRpbWUuQXRsYXNBdHRhY2htZW50UGFyc2VyKHNwaW5lQXRsYXMpKTtcclxuICAgICAgICBjb25zdCBza2VsZXRvbkRhdGEgPSBzcGluZUpzb25QYXJzZXIucmVhZFNrZWxldG9uRGF0YShBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUuY2FjaGUuZ2V0SlNPTihhc3NldE5hbWUgKyAnLmpzb24nKSk7XHJcbiAgICAgICAgcmV0dXJuIHNrZWxldG9uRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGF0bGFzQ2FsbGJhY2tGdW5jdGlvbihsaW5lLCBjYWxsYmFjaykge1xyXG4gICAgICAgIC8vY2FsbGJhY2soUElYSS5CYXNlVGV4dHVyZS5mcm9tSW1hZ2UoJ2Fzc2V0cy9zcGluZS8nICsgbGluZSkpO1xyXG4gICAgICAgIGNvbnN0IGxpbmVBcnIgPSBsaW5lLnNwbGl0KCdAJyArIEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZS5yZXNvbHV0aW9uICsgJ3gnKTtcclxuICAgICAgICBjb25zdCB1cmwgPSBsaW5lQXJyLmpvaW4oJycpO1xyXG5cclxuICAgICAgICBjYWxsYmFjayhuZXcgUElYSS5CYXNlVGV4dHVyZShBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUuY2FjaGUuZ2V0SW1hZ2UodXJsKSwgUElYSS5zY2FsZU1vZGVzLkRFRkFVTFQpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHBhdXNlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGF1c2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgcGF1c2VkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fcGF1c2VkID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBzcGVlZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zcGVlZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHNwZWVkKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zcGVlZCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgYm91bmRzT2Zmc2V0KG9mZnNldDogUGhhc2VyLlBvaW50KSB7XHJcbiAgICAgICAgdGhpcy5fYm91bmRzT2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRCb3VuZHMgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYm91bmRzT2Zmc2V0KCk6IFBoYXNlci5Qb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvdW5kc09mZnNldDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGJvdW5kc1dpZHRoU2NhbGUoc2NhbGU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2JvdW5kc1dpZHRoU2NhbGUgPSBzY2FsZTtcclxuICAgICAgICB0aGlzLl9jdXJyZW50Qm91bmRzID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGJvdW5kc1dpZHRoU2NhbGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYm91bmRzV2lkdGhTY2FsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGJvdW5kc0hlaWdodFNjYWxlKHNjYWxlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9ib3VuZHNIZWlnaHRTY2FsZSA9IHNjYWxlO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRCb3VuZHMgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYm91bmRzSGVpZ2h0U2NhbGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYm91bmRzSGVpZ2h0U2NhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEJvdW5kcygpOiBQSVhJLlJlY3RhbmdsZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRCb3VuZHMgfHwgdGhpcy5fY3JlYXRlQm91bmRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVCb3VuZHMoKTogUElYSS5SZWN0YW5nbGUge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRCb3VuZHMgPSBuZXcgUElYSS5SZWN0YW5nbGUodGhpcy54ICsgdGhpcy5fYm91bmRzT2Zmc2V0LnggKiB0aGlzLnNjYWxlLngsIHRoaXMueSAtICh0aGlzLnNrZWxldG9uLmRhdGEuaGVpZ2h0ICogdGhpcy5zY2FsZS55KSArIHRoaXMuX2JvdW5kc09mZnNldC55ICogdGhpcy5zY2FsZS55LCB0aGlzLnNrZWxldG9uLmRhdGEud2lkdGggKiBNYXRoLmFicyh0aGlzLnNjYWxlLngpICogdGhpcy5ib3VuZHNXaWR0aFNjYWxlLCB0aGlzLnNrZWxldG9uLmRhdGEuaGVpZ2h0ICogTWF0aC5hYnModGhpcy5zY2FsZS55KSAqIHRoaXMuYm91bmRzSGVpZ2h0U2NhbGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudEJvdW5kcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBhbHNvIHVwZGF0ZXMgdGhlIGJvdW5kc1xyXG4gICAgcHVibGljIHNldFNjYWxlKHg6IG51bWJlciA9IG51bGwsIHk6IG51bWJlciA9IG51bGwpIHtcclxuICAgICAgICBpZiAoeCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNjYWxlLnggPSB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNjYWxlLnkgPSB5O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jdXJyZW50Qm91bmRzID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Qm91bmRzKCkud2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCb3VuZHMoKS5oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBib2R5KCk6IGFueSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9waHlzaWNzRW5hYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGh5c2ljc1Nwcml0ZS5ib2R5O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHN0YXRpYyBtZXRob2RzXHJcbiAgICAvLyBhdXRvIG1lc2ggLyBub24tbWVzaCBhc3NldCBsb2FkaW5nXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIElOSVRJQUxJWkVEOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGdhbWU6IEdhbWUgPSBudWxsO1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBub25NZXNoVGltZXI6IFBoYXNlci5UaW1lckV2ZW50ID0gbnVsbDtcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgb25Ob25NZXNoRlBTOiBQaGFzZXIuU2lnbmFsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgTE9BRF9OT05fTUVTSDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgQVVUT19NRVNIOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBERUZBVUxUX05PTl9NRVNIX1NVRkZJWDogc3RyaW5nID0gJ19ub21lc2gnO1xyXG4gICAgcHVibGljIHN0YXRpYyBOT05fTUVTSF9TVUZGSVg6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBERUZBVUxUX05PTl9NRVNIX0ZQUzogbnVtYmVyID0gMzU7XHJcbiAgICBwdWJsaWMgc3RhdGljIE5PTl9NRVNIX0ZQUzogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGluaXRpYWxpemUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKFNwaW5lLklOSVRJQUxJWkVEKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgU3BpbmUuSU5JVElBTElaRUQgPSB0cnVlO1xyXG4gICAgICAgIFNwaW5lLmdhbWUgPSBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWU7XHJcbiAgICAgICAgU3BpbmUub25Ob25NZXNoRlBTID0gbmV3IFBoYXNlci5TaWduYWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRldGVjdEF1dG9NZXNoKCk6IHZvaWQge1xyXG4gICAgICAgIFNwaW5lLmdhbWUudGltZS5hZHZhbmNlZFRpbWluZyA9IHRydWU7XHJcbiAgICAgICAgU3BpbmUuZ2FtZS50aW1lLmV2ZW50cy5hZGQoMjAwMCwgU3BpbmUuY2hlY2tOb25NZXNoVGhyZXNob2xkLCBTcGluZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkZXN0cm95Tm9uTWVzaFRpbWVyKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChTcGluZS5ub25NZXNoVGltZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgU3BpbmUuZ2FtZS50aW1lLmV2ZW50cy5yZW1vdmUoU3BpbmUubm9uTWVzaFRpbWVyKTtcclxuICAgICAgICAgICAgU3BpbmUubm9uTWVzaFRpbWVyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGNoZWNrTm9uTWVzaFRocmVzaG9sZCgpOiB2b2lkIHtcclxuICAgICAgICBTcGluZS5kZXN0cm95Tm9uTWVzaFRpbWVyKCk7XHJcbiAgICAgICAgU3BpbmUubm9uTWVzaFRpbWVyID0gU3BpbmUuZ2FtZS50aW1lLmV2ZW50cy5yZXBlYXQoNTAwLCAxMCwgU3BpbmUuY2hlY2tBdXRvTWVzaEZQUywgU3BpbmUpO1xyXG4gICAgICAgIFNwaW5lLmdhbWUudGltZS5ldmVudHMuYWRkKDU1MDAsIFNwaW5lLmRpc2FibGVBZHZhbmNlZFRpbWluZywgU3BpbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY2hlY2tBdXRvTWVzaEZQUygpOiB2b2lkIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZ2FtZS50aW1lLmZwcywgU3BpbmUuTk9OX01FU0hfRlBTKVxyXG4gICAgICAgIGlmIChTcGluZS5nYW1lLnRpbWUuZnBzIDwgU3BpbmUuTk9OX01FU0hfRlBTKSB7XHJcbiAgICAgICAgICAgIFNwaW5lLmRlc3Ryb3lOb25NZXNoVGltZXIoKTtcclxuICAgICAgICAgICAgU3BpbmUuTE9BRF9OT05fTUVTSCA9IHRydWU7XHJcbiAgICAgICAgICAgIFNwaW5lLm9uTm9uTWVzaEZQUy5kaXNwYXRjaCgpO1xyXG4gICAgICAgICAgICBTcGluZS5kaXNhYmxlQWR2YW5jZWRUaW1pbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkaXNhYmxlQWR2YW5jZWRUaW1pbmcoKTogdm9pZCB7XHJcbiAgICAgICAgU3BpbmUuZ2FtZS50aW1lLmFkdmFuY2VkVGltaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRBdXRvTWVzaChlbmFibGVkOiBib29sZWFuID0gdHJ1ZSwgbm9uTWVzaFN1ZmZpeDogc3RyaW5nID0gU3BpbmUuREVGQVVMVF9OT05fTUVTSF9TVUZGSVgsIG5vbk1lc2hGUFM6IG51bWJlciA9IFNwaW5lLkRFRkFVTFRfTk9OX01FU0hfRlBTKSB7XHJcbiAgICAgICAgU3BpbmUuQVVUT19NRVNIID0gZW5hYmxlZDtcclxuICAgICAgICBTcGluZS5OT05fTUVTSF9TVUZGSVggPSBub25NZXNoU3VmZml4O1xyXG4gICAgICAgIFNwaW5lLk5PTl9NRVNIX0ZQUyA9IG5vbk1lc2hGUFM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0FwcGxpY2F0aW9ufSBmcm9tICcuLi9hcHBsaWNhdGlvbic7XHJcbmltcG9ydCB7R2FtZX0gZnJvbSAnLi4vY29yZSc7XHJcbmltcG9ydCB7RGV2aWNlfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG4vKipcclxuICogVGV4dFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRleHQgZXh0ZW5kcyBQaGFzZXIuVGV4dCB7XHJcbiAgICAvLyBjb25zdGFudHNcclxuICAgIHB1YmxpYyBzdGF0aWMgREVGQVVMVF9GT05UX1NJWkU6IG51bWJlciA9IDEyO1xyXG4gICAgcHVibGljIHN0YXRpYyBERUZBVUxUX0ZPTlRfQ09MT1I6IHN0cmluZyA9IFwiIzAwMDAwMFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBERUZBVUxUX0ZPTlQ6IHN0cmluZyA9IFwiSGVsdmV0aWNhIE5ldWUsIEFyaWFsXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIEdMT0JBTF9QQURESU5HX1g6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIEdMT0JBTF9QQURESU5HX1k6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHVibGljIGdhbWU6IEdhbWU7XHJcbiAgICBwdWJsaWMgc3R5bGU6IGFueTtcclxuICAgIHB1YmxpYyBvbkFuaW1hdGlvbkNvbXBsZXRlOiBQaGFzZXIuU2lnbmFsID0gbmV3IFBoYXNlci5TaWduYWwoKTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX2NhblVwZGF0ZSA9IGZhbHNlO1xyXG4gICAgcHJvdGVjdGVkIF9yZXBlYXRUaW1lcjogUGhhc2VyLlRpbWVyRXZlbnQ7XHJcbiAgICBwcm90ZWN0ZWQgX2RlbGF5VGltZXI6IFBoYXNlci5UaW1lckV2ZW50O1xyXG4gICAgcHJvdGVjdGVkIF9sb3dlcmNhc2VUZXh0OiBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgX2xldHRlclRpbWU6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBfdGV4dExlbmd0aDogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIF90ZXh0VG9BbmltYXRlOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCB0ZXh0OiBzdHJpbmcgPSBcIlwiLCBmb250TmFtZT86IHN0cmluZywgZm9udFNpemU6IG51bWJlciA9IFRleHQuREVGQVVMVF9GT05UX1NJWkUsIGZvbnRDb2xvcjogc3RyaW5nID0gVGV4dC5ERUZBVUxUX0ZPTlRfQ09MT1IsIGZvbnRBbGlnbjogc3RyaW5nID0gJ2xlZnQnLCB3b3JkV3JhcDogYm9vbGVhbiA9IGZhbHNlLCB3aWR0aDogbnVtYmVyID0gMCwgcHVibGljIGxpbmVTcGFjaW5nOiBudW1iZXIgPSAwLCBzZXR0aW5nczogT2JqZWN0ID0gbnVsbCkge1xyXG4gICAgICAgIHN1cGVyKFxyXG4gICAgICAgICAgICBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUsXHJcbiAgICAgICAgICAgIHgsXHJcbiAgICAgICAgICAgIHksXHJcbiAgICAgICAgICAgIHRleHQsXHJcbiAgICAgICAgICAgIFRleHQuX2FkZFNldHRpbmdzKHtcclxuICAgICAgICAgICAgICAgIGZvbnQ6IGZvbnRTaXplICsgJ3B4ICcgKyBmb250TmFtZSxcclxuICAgICAgICAgICAgICAgIGZpbGw6IGZvbnRDb2xvcixcclxuICAgICAgICAgICAgICAgIGFsaWduOiBmb250QWxpZ24sXHJcbiAgICAgICAgICAgICAgICB3b3JkV3JhcDogd29yZFdyYXAsXHJcbiAgICAgICAgICAgICAgICB3b3JkV3JhcFdpZHRoOiB3aWR0aFxyXG4gICAgICAgICAgICB9LCBzZXR0aW5ncylcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0LnJlcGxhY2UoLycvZywgXCJcXCdcIik7XHJcbiAgICAgICAgdGhpcy5fbG93ZXJjYXNlVGV4dCA9IHRoaXMudGV4dC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0UmVzb2x1dGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBoYXNlci5UZXh0IG92ZXJyaWRlc1xyXG4gICAgcHVibGljIHNldFRleHQodGV4dDogc3RyaW5nKTogUGhhc2VyLlRleHQge1xyXG4gICAgICAgIHN1cGVyLnNldFRleHQodGV4dCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2xvd2VyY2FzZVRleHQgPSB0aGlzLnRleHQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICB0aGlzLnNldFJlc29sdXRpb24oKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNldFJlc29sdXRpb24oKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmdhbWUgfHwgIURldmljZS5jb2Nvb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChEZXZpY2UuY29jb29uKSB7XHJcbiAgICAgICAgICAgIC8vIGZpeCBmb3IgZm9udHMgbG9va2luZyByZWFsbHkgYmx1cnJ5IGluIGNvY29vbkpTXHJcbiAgICAgICAgICAgIHRoaXMucmVzb2x1dGlvbiA9IHRoaXMuZ2FtZS5yZXNvbHV0aW9uICogdGhpcy5nYW1lLnJlc29sdXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1x0XHRcclxuICAgIC8qKlxyXG4gICAgKiBzdGFydHMgdGhlIHRleHQgYW5pbWF0aW9uXHJcbiAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAqIEBwcml2YXRlXHJcbiAgICAqL1xyXG4gICAgcHJvdGVjdGVkIF9zdGFydFRleHRBbmltYXRpb24oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2FuVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9yZXBlYXRUaW1lciA9IHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5yZXBlYXQodGhpcy5fbGV0dGVyVGltZSAqIDEwMCwgdGhpcy5fdGV4dExlbmd0aCwgdGhpcy5fdXBkYXRlVGV4dEFuaW1hdGlvbiwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF91cGRhdGVUZXh0QW5pbWF0aW9uKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fY2FuVXBkYXRlIHx8ICF0aGlzLl90ZXh0VG9BbmltYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5fdGV4dExlbmd0aCAtIHRoaXMuX3RleHRUb0FuaW1hdGUubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuYWRkQ29sb3IodGhpcy5zdHlsZS5maWxsLCBpbmRleCk7XHJcbiAgICAgICAgdGhpcy5hZGRDb2xvcigncmdiYSgwLDAsMCwwKScsIGluZGV4ICsgMSk7XHJcbiAgICAgICAgdGhpcy5fdGV4dFRvQW5pbWF0ZS5zaGlmdCgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fdGV4dFRvQW5pbWF0ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5vbkFuaW1hdGlvbkNvbXBsZXRlLmRpc3BhdGNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHB1YmxpYyBtZXRob2RzXHJcbiAgICAvKipcclxuICAgICogc2V0cyB0aGUgY29sb3Igb2YgdGhlIGVudGlyZSB0ZXh0XHJcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb2xvciBjc3MgY29sb3Igc3RyaW5nIChzdWNoIGFzIFwiI2ZmMDAwMFwiKVxyXG4gICAgKiBAcmV0dXJuIHtEaWpvbi5VSVRleHQuaGlnaGxpZ2h0UGhyYXNlfSBjYWxscyB0aGUgaGlnaGxpZ2h0UGhyYXNlIG1ldGhvZCBhbmQgXCJoaWdobGlnaHRzXCIgdGhlIGVudGlyZSB0ZXh0IHN0cmluZ1xyXG4gICAgKi9cclxuICAgIHB1YmxpYyBzZXRDb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGlnaGxpZ2h0UGhyYXNlKHRoaXMudGV4dCwgY29sb3IsIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogcmVzZXRzIHRoZSBjb2xvciB0byB0aGUgb3JpZ2luYWwgZmlsbCBjb2xvclxyXG4gICAgKiBAcmV0dXJuIHtEaWpvbi5VSVRleHQuaGlnaGxpZ2h0UGhyYXNlfSBjYWxscyB0aGUgaGlnaGxpZ2h0UGhyYXNlIG1ldGhvZCBhbmQgXCJoaWdobGlnaHRzXCIgdGhlIGVudGlyZSB0ZXh0IHN0cmluZ1xyXG4gICAgKi9cclxuICAgIHB1YmxpYyByZXNldENvbG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhpZ2hsaWdodFBocmFzZSh0aGlzLnRleHQsIHRoaXMuc3R5bGUuZmlsbCwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBjaGFuZ2VzIHRoZSBjb2xvdXIgb2YgYSBwb3J0aW9uIG9mIHRoZSB0ZXh0XHJcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gcGhyYXNlICAgICAgICB0aGUgcGhyYXNlIHdpdGhpbiB0aGUgdGV4dCB0byBjaGFuZ2VcclxuICAgICogQHBhcmFtICB7U3RyaW5nfSBjb2xvciAgICAgICAgIGNzcyBjb2xvciBzdHJpbmcgKHN1Y2ggYXMgXCIjZmYwMDAwXCIpXHJcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IFtjYXNlU2Vuc2l0aXZlID0gZmFsc2VdIHdoZXRoZXIgdGhlIHNlYXJjaCBmb3IgdGhlIHBocmFzZSB3aXRoaW4gdGhpcyB0ZXh0IHNob3VsZCBiZSBjYXNlIHNlbnNpdGl2ZVxyXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBoaWdobGlnaHRQaHJhc2UocGhyYXNlOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcsIGNhc2VTZW5zaXRpdmU6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGxldCB0ZXh0ID0gY2FzZVNlbnNpdGl2ZSA/IHRoaXMudGV4dCA6IHRoaXMuX2xvd2VyY2FzZVRleHQ7XHJcblxyXG4gICAgICAgIHBocmFzZSA9IGNhc2VTZW5zaXRpdmUgPyBwaHJhc2UgOiBwaHJhc2UudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgbGV0IGxlbiA9IHBocmFzZS5sZW5ndGg7XHJcblxyXG4gICAgICAgIGxldCBzdGFydEluZGV4ID0gdGV4dC5pbmRleE9mKHBocmFzZSk7XHJcbiAgICAgICAgbGV0IGVuZEluZGV4ID0gc3RhcnRJbmRleCArIGxlbjtcclxuXHJcbiAgICAgICAgd2hpbGUgKHN0YXJ0SW5kZXggPD0gZW5kSW5kZXgpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRDb2xvcihjb2xvciwgc3RhcnRJbmRleCk7XHJcbiAgICAgICAgICAgIHN0YXJ0SW5kZXgrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYWRkQ29sb3IodGhpcy5zdHlsZS5maWxsLCBlbmRJbmRleCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBhbmltYXRlcyB0aGUgdGV4dCBpbiBieSByZXZlYWxpbmcgZWFjaCBjaGFyYWN0ZXIgaW4gc2VxdWVuY2VcclxuICAgICogQHBhcmFtICB7TnVtYmVyfSBbbGV0dGVyVGltZSA9IDAuMV0gIHRoZSB0aW1lIChpbiBzZWNvbmRzKSBiZXR3ZWVuIGVhY2ggY2hhcmFjdGVyXHJcbiAgICAqIEBwYXJhbSAge2ludH0gW2RlbGF5ID0gMF0gICAgICAgICAgICB0aGUgZGVsYXkgYmVmb3JlIHN0YXJ0aW5nIHRoZSBhbmltYXRpb25cclxuICAgICovXHJcbiAgICBwdWJsaWMgYW5pbWF0ZShsZXR0ZXJUaW1lOiBudW1iZXIgPSAwLjEsIGRlbGF5OiBudW1iZXIgPSAwKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLnJlbW92ZSh0aGlzLl9kZWxheVRpbWVyKTtcclxuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMucmVtb3ZlKHRoaXMuX3JlcGVhdFRpbWVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5fbGV0dGVyVGltZSA9IGxldHRlclRpbWU7XHJcbiAgICAgICAgdGhpcy5fdGV4dExlbmd0aCA9IHRoaXMudGV4dC5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5fdGV4dFRvQW5pbWF0ZSA9IHRoaXMudGV4dC5zcGxpdCgnJyk7XHJcblxyXG4gICAgICAgIHZhciBzdGFydEluZGV4ID0gMDtcclxuICAgICAgICB2YXIgZW5kSW5kZXggPSB0aGlzLl90ZXh0TGVuZ3RoO1xyXG5cclxuICAgICAgICB3aGlsZSAoc3RhcnRJbmRleCA8PSBlbmRJbmRleCkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZENvbG9yKCdyZ2JhKDAsMCwwLDApJywgc3RhcnRJbmRleCk7XHJcbiAgICAgICAgICAgIHN0YXJ0SW5kZXgrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2RlbGF5VGltZXIgPSB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKGRlbGF5ICogUGhhc2VyLlRpbWVyLlNFQ09ORCwgdGhpcy5fc3RhcnRUZXh0QW5pbWF0aW9uLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogc3RvcHMgdGhlIHRleHQgYW5pbWF0aW9uIGFuZCBjbGVhcnMgdGhlIHRpbWVyc1xyXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBzdG9wQW5pbWF0aW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX2NhblVwZGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3RleHRUb0FuaW1hdGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5yZW1vdmUodGhpcy5fZGVsYXlUaW1lcik7XHJcbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLnJlbW92ZSh0aGlzLl9yZXBlYXRUaW1lcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIHJvdW5kcyB0aGUgcG9zaXRpb25cclxuICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICovXHJcbiAgICBwdWJsaWMgcm91bmRQaXhlbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnNldChNYXRoLnJvdW5kKHRoaXMueCksIE1hdGgucm91bmQodGhpcy55KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3RhdGljIG1ldGhvZHNcclxuICAgIHByaXZhdGUgc3RhdGljIF9hZGRTZXR0aW5ncyhvYmo6IE9iamVjdCwgc2V0dGluZ3M6IE9iamVjdCk6IE9iamVjdCB7XHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncylcclxuICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBzZXR0aW5ncykge1xyXG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgICAgICAgICAgIG9ialtwcm9wXSA9IHNldHRpbmdzW3Byb3BdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCByZWFsSGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGUueSAqIHRoaXMudGV4dHVyZS5mcmFtZS5oZWlnaHQgLyB0aGlzLmdhbWUucmVzb2x1dGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcmVhbFdpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGUueCAqIHRoaXMudGV4dHVyZS5mcmFtZS53aWR0aCAvIHRoaXMuZ2FtZS5yZXNvbHV0aW9uO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xyXG5pbXBvcnQge1RleHR1cmVzfSBmcm9tICcuL1RleHR1cmVzJztcclxuaW1wb3J0IHtUZXh0fSBmcm9tICcuLi9kaXNwbGF5JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGFjZWhvbGRlcnMge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IGdhbWUoKTogUGhhc2VyLkdhbWUge1xyXG4gICAgICAgIHJldHVybiBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGltYWdlKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIHRleHR1cmU6IGFueSwgbmFtZTogc3RyaW5nID0gXCJcIik6IFBoYXNlci5JbWFnZSB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VJbnN0YW5jZSA9IG5ldyBQaGFzZXIuSW1hZ2UoUGxhY2Vob2xkZXJzLmdhbWUsIHgsIHksIHRleHR1cmUpO1xyXG4gICAgICAgIGltYWdlSW5zdGFuY2UubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgcmV0dXJuIGltYWdlSW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGJ1dHRvbih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCB3aWR0aDogbnVtYmVyID0gMTAwLCBoZWlnaHQ6IG51bWJlciA9IDUwLCBhdXRvU2l6ZTogYm9vbGVhbiA9IGZhbHNlLCB0ZXh0OiBzdHJpbmcgPSAnYnV0dG9uJywgY2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbCwgY2FsbGJhY2tDb250ZXh0OiBhbnkgPSBudWxsLCBkZWZhdWx0Q29sb3I6IG51bWJlciA9IDB4ZmZmZmZmLCBvdmVyQ29sb3I6IG51bWJlciA9IDB4ZmYwMDAwLCBkb3duQ29sb3I6IG51bWJlciA9IDB4MDBmZjAwKTogUGhhc2VyLlNwcml0ZSB7XHJcbiAgICAgICAgY29uc3Qgc3ByaXRlOiBQaGFzZXIuU3ByaXRlID0gbmV3IFBoYXNlci5TcHJpdGUoUGxhY2Vob2xkZXJzLmdhbWUsIHgsIHkpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdGhlIHRleHQgaW5zdGFuY2Ugd2l0aCBhbiBhdXRvIHNpemUgb2YgMjUgb3IgNjAlIG9mIHRoZSBoZWlnaHQgcGFzc2VkIGluLlxyXG4gICAgICAgIGNvbnN0IHRleHRJbnN0YW5jZTogVGV4dCA9IG5ldyBUZXh0KHdpZHRoICogMC41LCBoZWlnaHQgKiAwLjU1LCBcIiBcIiArIHRleHQgKyBcIiBcIiwgJ0FyaWFsJywgYXV0b1NpemUgPyAyNSA6IGhlaWdodCAqIDAuNiwgJyMwMDAwMDAnKTtcclxuICAgICAgICB0ZXh0SW5zdGFuY2UuY2VudGVyUGl2b3QoKTtcclxuICAgICAgICB0ZXh0SW5zdGFuY2UubmFtZSA9IFwiTGFiZWxcIjtcclxuXHJcbiAgICAgICAgaWYgKGF1dG9TaXplKSB7XHJcbiAgICAgICAgICAgIC8vIFVzZSBhIHBhZGRpbmcgb2YgMTBcclxuICAgICAgICAgICAgd2lkdGggPSB0ZXh0SW5zdGFuY2UucmVhbFdpZHRoICsgMTA7XHJcbiAgICAgICAgICAgIGhlaWdodCA9IHRleHRJbnN0YW5jZS5yZWFsSGVpZ2h0ICsgMTA7XHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgdGV4dCBwb3NpdGlvblxyXG4gICAgICAgICAgICB0ZXh0SW5zdGFuY2UucG9zaXRpb24uc2V0KHdpZHRoICogMC41LCBoZWlnaHQgKiAwLjU1KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHVwSW1hZ2U6IFBoYXNlci5JbWFnZSA9IFBsYWNlaG9sZGVycy5pbWFnZSgwLCAwLCBUZXh0dXJlcy5yb3VuZGVkUmVjdCh3aWR0aCwgaGVpZ2h0LCAxMCwgZGVmYXVsdENvbG9yKSwgXCJVcFwiKTtcclxuICAgICAgICBjb25zdCBvdmVySW1hZ2U6IFBoYXNlci5JbWFnZSA9IFBsYWNlaG9sZGVycy5pbWFnZSgwLCAwLCBUZXh0dXJlcy5yb3VuZGVkUmVjdCh3aWR0aCwgaGVpZ2h0LCAxMCwgb3ZlckNvbG9yKSwgXCJPdmVyXCIpO1xyXG4gICAgICAgIGNvbnN0IGRvd25JbWFnZTogUGhhc2VyLkltYWdlID0gUGxhY2Vob2xkZXJzLmltYWdlKDAsIDAsIFRleHR1cmVzLnJvdW5kZWRSZWN0KHdpZHRoLCBoZWlnaHQsIDEwLCBkb3duQ29sb3IpLCBcIkRvd25cIik7XHJcblxyXG5cclxuICAgICAgICBvdmVySW1hZ2UudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGRvd25JbWFnZS52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHNwcml0ZS5hZGRDaGlsZCh1cEltYWdlKTtcclxuICAgICAgICBzcHJpdGUuYWRkQ2hpbGQob3ZlckltYWdlKTtcclxuICAgICAgICBzcHJpdGUuYWRkQ2hpbGQoZG93bkltYWdlKTtcclxuICAgICAgICBzcHJpdGUuYWRkQ2hpbGQodGV4dEluc3RhbmNlKTtcclxuXHJcbiAgICAgICAgc3ByaXRlLmlucHV0RW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgc3ByaXRlLmlucHV0LnVzZUhhbmRDdXJzb3IgPSB0cnVlO1xyXG5cclxuICAgICAgICBzcHJpdGUuZXZlbnRzLm9uSW5wdXRVcC5hZGQoKCkgPT4ge1xyXG4gICAgICAgICAgICBkb3duSW1hZ2UudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBvdmVySW1hZ2UudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB1cEltYWdlLnZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGNhbGxiYWNrQ29udGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc3ByaXRlLmV2ZW50cy5vbklucHV0RG93bi5hZGQoKCkgPT4ge1xyXG4gICAgICAgICAgICBkb3duSW1hZ2UudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIG92ZXJJbWFnZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHVwSW1hZ2UudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzcHJpdGUuZXZlbnRzLm9uSW5wdXRPdmVyLmFkZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvd25JbWFnZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG92ZXJJbWFnZS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdXBJbWFnZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNwcml0ZS5ldmVudHMub25JbnB1dE91dC5hZGQoKCkgPT4ge1xyXG4gICAgICAgICAgICBkb3duSW1hZ2UudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBvdmVySW1hZ2UudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB1cEltYWdlLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzcHJpdGUuZ2V0Qm91bmRzID0gZnVuY3Rpb24oKTogUElYSS5SZWN0YW5nbGUge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFBJWEkuUmVjdGFuZ2xlKDAsIDAsIHVwSW1hZ2Uud2lkdGgsIHVwSW1hZ2UuaGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNwcml0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7QXBwbGljYXRpb259IGZyb20gJy4uL2FwcGxpY2F0aW9uJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUaW1lIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgZGVsYXllZENhbGwoZGVsYXlJbk1pbGxpc2Vjb25kczogbnVtYmVyLCBjYWxsYmFjazogRnVuY3Rpb24sIGNhbGxiYWNrQ29udGV4dDogYW55LCAuLi5wYXJhbXMpIHtcclxuICAgICAgICBpZiAocGFyYW1zID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcGFyYW1zID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmFtcy51bnNoaWZ0KGRlbGF5SW5NaWxsaXNlY29uZHMsIGNhbGxiYWNrLCBjYWxsYmFja0NvbnRleHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lLnRpbWUuZXZlbnRzLmFkZC5hcHBseShBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUudGltZS5ldmVudHMsIHBhcmFtcyk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgVXRpbCB7IFxyXG4gICAgcHVibGljIHN0YXRpYyBpc051bWJlcih2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICgrdmFsdWUgPT09ICt2YWx1ZSk7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogV3JhcHMgUGhhc2VyLkxvYWRlclxyXG4qL1xyXG5cclxuaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xyXG5pbXBvcnQge0dhbWV9IGZyb20gJy4uL2NvcmUnO1xyXG5pbXBvcnQge0lOb3RpZmllciwgSVBhdGhDb25maWcsIElBc3NldCwgSUFzc2V0TGlzdCwgSVNvdW5kLCBJVGlsZWRtYXBBc3NldHN9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQge05vdGlmaWNhdGlvbnN9IGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHtTcGluZX0gZnJvbSAnLi4vZGlzcGxheSc7XHJcbi8qKlxyXG4gKiBXcmFwcyBQaGFzZXIuTG9hZGVyXHJcbiovXHJcbmV4cG9ydCBjbGFzcyBBc3NldE1hbmFnZXIgaW1wbGVtZW50cyBJTm90aWZpZXIge1xyXG4gICAgcHJvdGVjdGVkIGFwcDogQXBwbGljYXRpb247XHJcblxyXG4gICAgLy8gcHJpdmF0ZSB2YXJpYWJsZXNcclxuICAgIHByaXZhdGUgX2RhdGEgPSB7fTtcclxuICAgIHByaXZhdGUgX2Jhc2VVUkw6IHN0cmluZyA9ICcnO1xyXG4gICAgcHJpdmF0ZSBfcGF0aE9iajogSVBhdGhDb25maWcgfCBhbnkgPSB7fTtcclxuICAgIHByaXZhdGUgX2Fzc2V0UGF0aDogc3RyaW5nID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2RhdGFQYXRoOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfc3ByaXRlU2hlZXRQYXRoOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfaW1nUGF0aDogc3RyaW5nID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3ZpZGVvUGF0aDogc3RyaW5nID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3NwaW5lUGF0aDogc3RyaW5nID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2ZvbnRQYXRoOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfYml0bWFwRm9udFBhdGg6IHN0cmluZyA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9waHlzaWNzUGF0aDogc3RyaW5nID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2F1ZGlvU3ByaXRlUGF0aDogc3RyaW5nID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3NvdW5kUGF0aDogc3RyaW5nID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3NvdW5kRGVjb2RpbmdNb2RpZmllcjogbnVtYmVyID0gMjtcclxuICAgIHByaXZhdGUgX3JlczogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgX3Jlc29sdXRpb246IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZERhdGEgPSB7fTtcclxuICAgIHByaXZhdGUgX2F1dG9Mb2FkRGF0YSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBfY29tcGxldGVkTG9hZHMgPSB7fTtcclxuICAgIHByaXZhdGUgX3JlcXVpcmVkRGF0YSA9IHt9O1xyXG5cclxuICAgIHByaXZhdGUgX2N1cnJlbnRBc3NldExpc3Q6IHN0cmluZyA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9oYXNGaWxlczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfc291bmRzVG9EZWNvZGU6IEFycmF5PElTb3VuZD4gPSBbXTtcclxuICAgIHByaXZhdGUgX2lzTG9hZGluZ1F1ZXVlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9maWxlQ29tcGxldGVQcm9ncmVzczogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX21heFBlcmNlbnQ6IG51bWJlciA9IDEwMDtcclxuXHJcbiAgICBwcml2YXRlIF9udW1Tb3VuZHM6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9zb3VuZHNEZWNvZGVkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgX2NhY2hlQnVzdFZlcnNpb246IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIC8vIHB1YmxpYyB2YXJpYWJsZXNcclxuICAgIHB1YmxpYyBnYW1lOiBHYW1lO1xyXG5cclxuICAgIHB1YmxpYyBvbkxvYWRTdGFydCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XHJcbiAgICBwdWJsaWMgb25GaWxlU3RhcnQgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xyXG4gICAgcHVibGljIG9uRmlsZUNvbXBsZXRlID0gbmV3IFBoYXNlci5TaWduYWwoKTtcclxuICAgIHB1YmxpYyBvbkxvYWRDb21wbGV0ZSA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XHJcbiAgICBwdWJsaWMgb25Mb2FkQ29tcGxldGVBbmRBdWRpb0RlY29kZWQgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xyXG5cclxuICAgIHB1YmxpYyBvbkJhY2tncm91bmRMb2FkU3RhcnQgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xyXG4gICAgcHVibGljIG9uQmFja2dyb3VuZEZpbGVTdGFydCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XHJcbiAgICBwdWJsaWMgb25CYWNrZ3JvdW5kRmlsZUNvbXBsZXRlID0gbmV3IFBoYXNlci5TaWduYWwoKTtcclxuICAgIHB1YmxpYyBvbkJhY2tncm91bmRMb2FkQ29tcGxldGUgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xyXG4gICAgcHVibGljIG9uQmFja2dyb3VuZExvYWRDb21wbGV0ZUFuZEF1ZGlvRGVjb2RlZCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XHJcblxyXG4gICAgLy8gc3RhdGljIGNvbnN0YW50c1xyXG4gICAgLy8gYXNzZXQgdHlwZXNcclxuICAgIHB1YmxpYyBzdGF0aWMgQVVESU86IHN0cmluZyA9ICdhdWRpbyc7XHJcbiAgICBwdWJsaWMgc3RhdGljIFNPVU5EOiBzdHJpbmcgPSAnc291bmQnO1xyXG4gICAgcHVibGljIHN0YXRpYyBBVURJT19TUFJJVEU6IHN0cmluZyA9ICdhdWRpb1Nwcml0ZSc7XHJcbiAgICBwdWJsaWMgc3RhdGljIElNQUdFOiBzdHJpbmcgPSAnaW1hZ2UnO1xyXG4gICAgcHVibGljIHN0YXRpYyBWSURFTzogc3RyaW5nID0gJ3ZpZGVvJztcclxuICAgIHB1YmxpYyBzdGF0aWMgQVRMQVM6IHN0cmluZyA9ICdhdGxhcyc7XHJcbiAgICBwdWJsaWMgc3RhdGljIFRFWFQ6IHN0cmluZyA9ICd0ZXh0JztcclxuICAgIHB1YmxpYyBzdGF0aWMgSlNPTjogc3RyaW5nID0gJ2pzb24nO1xyXG4gICAgcHVibGljIHN0YXRpYyBUSUxFTUFQOiBzdHJpbmcgPSAndGlsZW1hcCc7XHJcbiAgICBwdWJsaWMgc3RhdGljIFRJTEVETUFQOiBzdHJpbmcgPSAndGlsZWRtYXAnO1xyXG4gICAgcHVibGljIHN0YXRpYyBUSUxFRE1BUF9USUxFU0VUOiBzdHJpbmcgPSAndGlsZXNldCc7XHJcbiAgICBwdWJsaWMgc3RhdGljIFRJTEVETUFQX0xBWUVSOiBzdHJpbmcgPSAnbGF5ZXInO1xyXG4gICAgcHVibGljIHN0YXRpYyBQSFlTSUNTOiBzdHJpbmcgPSAncGh5c2ljcyc7XHJcbiAgICBwdWJsaWMgc3RhdGljIFNQSU5FOiBzdHJpbmcgPSAnc3BpbmUnO1xyXG4gICAgcHVibGljIHN0YXRpYyBCSVRNQVBfRk9OVDogc3RyaW5nID0gJ2JpdG1hcEZvbnQnO1xyXG4gICAgcHVibGljIHN0YXRpYyBBU1NFVF9MSVNUOiBzdHJpbmcgPSAnYXNzZXRMaXN0JztcclxuXHJcbiAgICAvLyByZXNvbHV0aW9uc1xyXG4gICAgcHVibGljIHN0YXRpYyBSRVNPTFVUSU9OXzJYOiBzdHJpbmcgPSBcIkAyeFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBSRVNPTFVUSU9OXzNYOiBzdHJpbmcgPSBcIkAzeFwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgIH1cclxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1xyXG4gICAgLyoqXHJcbiAgICAqIGFkZHMgaW50ZXJuYWwgdmFyaWFibGVzIGFuZCBzaWduYWxzXHJcbiAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAqIEBwcml2YXRlXHJcbiAgICAqL1xyXG4gICAgcHJpdmF0ZSBfaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmFwcCA9IEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gdGhpcy5hcHAuZ2FtZTtcclxuICAgICAgICB0aGlzLmJhc2VVUkwgPSAnJztcclxuICAgICAgICB0aGlzLnBhdGhzID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJlc29sdXRpb24gPSB0aGlzLmdhbWUucmVzb2x1dGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogcGFyc2VzIGFuIGFzc2V0IGxpc3QgYnkga2V5ICh1c3VhbGx5IGZyb20gZGF0YS9hc3NldHMuanNvbikgYW5kIHN0b3JlcyB0aGVtIGludGVybmFsbHlcclxuICAgICogQHBhcmFtICB7U3RyaW5nfSBrZXkgdGhlIGlkIG9mIHRoZSBsaXN0XHJcbiAgICAqIEBwYXJhbSAge0FycmF5fSAgbGlzdCB0aGUganNvbiBhcnJheSBvZiBhc3NldHNcclxuICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICogQHByaXZhdGVcclxuICAgICovXHJcbiAgICBwcml2YXRlIF9wYXJzZUFzc2V0TGlzdChrZXk6IHN0cmluZywgbGlzdDogSUFzc2V0TGlzdCkge1xyXG4gICAgICAgIHRoaXMuX2F1dG9Mb2FkRGF0YVtrZXldID0gbGlzdC5hdXRvbG9hZDtcclxuICAgICAgICB0aGlzLl9yZXF1aXJlZERhdGFba2V5XSA9IGxpc3QucmVxdWlyZWQ7XHJcblxyXG4gICAgICAgIHRoaXMuX2xvYWREYXRhW2tleV0gPSBbXTtcclxuXHJcbiAgICAgICAgbGlzdC5hc3NldHMuZm9yRWFjaChhc3NldCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWREYXRhW2tleV0ucHVzaChhc3NldCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIGFkZHMgYXNzZXRzIGZyb20gYSBsaXN0IHRvIHRoZSBsb2FkIGxpc3RcclxuICAgICogQHBhcmFtICB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgbGlzdCB0byBhZGRcclxuICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICogQHByaXZhdGVcclxuICAgICovXHJcbiAgICBwcml2YXRlIF9sb2FkQXNzZXRzKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICB2YXIgYXNzZXRzID0gdGhpcy5fbG9hZERhdGFbaWRdLFxyXG4gICAgICAgICAgICBpO1xyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXNzZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRBc3NldChhc3NldHNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogc3RhcnQgdGhlIGJhY2tncm91bmQgbG9hZGluZ1xyXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgKiBAcHJpdmF0ZVxyXG4gICAgKi9cclxuICAgIHByaXZhdGUgX2JhY2tncm91bmRMb2FkU3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5vbkJhY2tncm91bmRMb2FkU3RhcnQuZGlzcGF0Y2goKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogd2hlbiBhIGZpbGUgY29tcGxldGVzIGluIGFuIGJhY2tncm91bmQgbG9hZCBxdWV1ZSAtIGRpc3BhdGNoZXMgdGhlIG9uQmFja2dyb3VuZEZpbGVDb21wbGV0ZSBzaWduYWxcclxuICAgICogQHBhcmFtICB7TnVtYmVyfSBwcm9ncmVzcyAgIHRoZSBwZXJjZW50IHByb2dyZXNzXHJcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gaWQgICAgICAgICB0aGUgZmlsZSBpZFxyXG4gICAgKiBAcGFyYW0gIHtpbnR9ICAgIGZpbGVJbmRleCAgdGhlIGluZGV4IG9mIHRoZSBmaWxlIGluIHRoZSBsaXN0XHJcbiAgICAqIEBwYXJhbSAge2ludH0gICAgdG90YWxGaWxlcyB0aGUgdG90YWwgbnVtYmVyIG9mIGZpbGVzIGluIHRoZSBsaXN0XHJcbiAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAqIEBwcml2YXRlXHJcbiAgICAqL1xyXG4gICAgcHJpdmF0ZSBfYmFja2dyb3VuZEZpbGVDb21wbGV0ZShwcm9ncmVzczogbnVtYmVyLCBpZDogc3RyaW5nLCBmaWxlSW5kZXg6IG51bWJlciwgdG90YWxGaWxlczogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jYWNoZS5jaGVja0tleShQaGFzZXIuQ2FjaGUuSU1BR0UsIGlkKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRCYXNlVGV4dHVyZVJlc29sdXRpb24odGhpcy5nYW1lLmNhY2hlLmdldFBpeGlCYXNlVGV4dHVyZShpZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9maWxlQ29tcGxldGVQcm9ncmVzcyA9IHByb2dyZXNzO1xyXG4gICAgICAgIHRoaXMub25CYWNrZ3JvdW5kRmlsZUNvbXBsZXRlLmRpc3BhdGNoKHByb2dyZXNzLCBpZCwgZmlsZUluZGV4LCB0b3RhbEZpbGVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogd2hlbiB0aGUgYmFja2dyb3VuZCBsb2FkIGNvbXBsZXRlcyAtIGRpc3BhdGNoZXMgdGhlIG9uQmFja2dyb3VuZExvYWRDb21wbGV0ZSBzaWduYWwsIHN0YXJ0cyBjaGVja2luZyBmb3IgZGVjb2RlZCBzb3VuZHNcclxuICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICogQHByaXZhdGVcclxuICAgICovXHJcbiAgICBwcml2YXRlIF9iYWNrZ3JvdW5kTG9hZENvbXBsZXRlKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uRmlsZUNvbXBsZXRlLnJlbW92ZSh0aGlzLl9iYWNrZ3JvdW5kRmlsZUNvbXBsZXRlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5vbkJhY2tncm91bmRMb2FkQ29tcGxldGUuZGlzcGF0Y2goKTtcclxuICAgICAgICB0aGlzLl9jaGVja1NvdW5kRGVjb2RpbmcodGhpcy5vbkJhY2tncm91bmRMb2FkQ29tcGxldGVBbmRBdWRpb0RlY29kZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiB3aGVuIHRoZSBhc3NldCBsaXN0IHN0YXJ0cyBsb2FkaW5nLCBkaXNwYXRjaGVzIHRoZSBvbkxvYWRTdGFydCBzaWduYWxcclxuICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICovXHJcbiAgICBwcml2YXRlIF9nYW1lTG9hZFN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMub25Mb2FkU3RhcnQuZGlzcGF0Y2goKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogd2hlbiBhIGZpbGUgc3RhcnRzIGxvYWRpbmcgLSBkaXNwYXRjaGVzIHRoZSBvbkZpbGVTdGFydCBzaWduYWxcclxuICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICovXHJcbiAgICBwcml2YXRlIF9nYW1lRmlsZVN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMub25GaWxlU3RhcnQuZGlzcGF0Y2goKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogd2hlbiBhIGZpbGUgY29tcGxldGVzIGluIHRoZSBnYW1lIGxvYWQgLSBkaXNwYXRjaGVzIHRoZSBvbkZpbGVDb21wbGV0ZSBzaWduYWxcclxuICAgICogQHBhcmFtICB7TnVtYmVyfSBwcm9ncmVzcyAgIHRoZSBwZXJjZW50IHByb2dyZXNzXHJcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gaWQgICAgICAgICB0aGUgZmlsZSBpZFxyXG4gICAgKiBAcGFyYW0gIHtpbnR9ICAgIGZpbGVJbmRleCAgdGhlIGluZGV4IG9mIHRoZSBmaWxlIGluIHRoZSBsaXN0XHJcbiAgICAqIEBwYXJhbSAge2ludH0gICAgdG90YWxGaWxlcyB0aGUgdG90YWwgbnVtYmVyIG9mIGZpbGVzIGluIHRoZSBsaXN0XHJcbiAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAqIEBwcml2YXRlXHJcbiAgICAqL1xyXG4gICAgcHJpdmF0ZSBfZ2FtZUZpbGVDb21wbGV0ZShwcm9ncmVzczogbnVtYmVyLCBpZD86IHN0cmluZywgZmlsZUluZGV4PzogbnVtYmVyLCB0b3RhbEZpbGVzPzogbnVtYmVyKSB7XHJcbiAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5nYW1lLmNhY2hlLmNoZWNrS2V5KFBoYXNlci5DYWNoZS5JTUFHRSwgaWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldEJhc2VUZXh0dXJlUmVzb2x1dGlvbih0aGlzLmdhbWUuY2FjaGUuZ2V0UGl4aUJhc2VUZXh0dXJlKGlkKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlbHNlIGlmICh0aGlzLmdhbWUuY2FjaGUuY2hlY2tLZXkoUGhhc2VyLkNhY2hlLkJJVE1BUEZPTlQsIGlkKSl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuX3NldEJhc2VUZXh0dXJlUmVzb2x1dGlvbih0aGlzLmdhbWUuY2FjaGUuZ2V0QmFzZVRleHR1cmUoaWQsIFBoYXNlci5DYWNoZS5CSVRNQVBGT05UKSk7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdpZCcsIGlkLCB0aGlzLmdhbWUuY2FjaGUuZ2V0QmFzZVRleHR1cmUoaWQsIFBoYXNlci5DYWNoZS5CSVRNQVBGT05UKS5yZXNvbHV0aW9uKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5fZmlsZUNvbXBsZXRlUHJvZ3Jlc3MgPSBwcm9ncmVzcztcclxuICAgICAgICB0aGlzLm9uRmlsZUNvbXBsZXRlLmRpc3BhdGNoKHRoaXMuZ2V0TG9hZFByb2dyZXNzKCksIGlkLCBmaWxlSW5kZXgsIHRvdGFsRmlsZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NldEJhc2VUZXh0dXJlUmVzb2x1dGlvbih0ZXh0dXJlOiBQSVhJLkJhc2VUZXh0dXJlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRleHR1cmUgJiYgdGV4dHVyZS5zb3VyY2Uuc3JjLmluZGV4T2YoJ0AnICsgdGhpcy5yZXNvbHV0aW9uICsgJ3gnKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRleHR1cmUucmVzb2x1dGlvbiA9IHRoaXMucmVzb2x1dGlvbjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiB3aGVuIHRoZSBiYWNrZ3JvdW5kIGxvYWQgY29tcGxldGVzIC0gZGlzcGF0Y2hlcyB0aGUgb25Mb2FkQ29tcGxldGUgc2lnbmFsLCBzdGFydHMgY2hlY2tpbmcgZm9yIGRlY29kZWQgc291bmRzXHJcbiAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAqIEBwcml2YXRlXHJcbiAgICAqL1xyXG4gICAgcHJpdmF0ZSBfZ2FtZUxvYWRDb21wbGV0ZSgpIHtcclxuICAgICAgICB0aGlzLl9jb21wbGV0ZWRMb2Fkc1t0aGlzLl9jdXJyZW50QXNzZXRMaXN0XSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vbkxvYWRDb21wbGV0ZS5kaXNwYXRjaCgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uRmlsZVN0YXJ0LnJlbW92ZSh0aGlzLl9nYW1lRmlsZVN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkZpbGVDb21wbGV0ZS5yZW1vdmUodGhpcy5fZ2FtZUZpbGVDb21wbGV0ZSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NoZWNrU291bmREZWNvZGluZyh0aGlzLm9uTG9hZENvbXBsZXRlQW5kQXVkaW9EZWNvZGVkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogY2hlY2tzIGlmIGFsbCB0aGUgc291bmRzIGluIHRoZSBxdWV1ZSBhcmUgZGVjb2RlZFxyXG4gICAgKiBAcGFyYW0gIHtQaGFzZXIuU2lnbmFsfSBldmVudFRvRGlzcGF0Y2ggdGhlIHNpZ25hbCB0byBiZSBkaXNwYXRjaGVkIHdoZW4gYWxsIHNvdW5kcyBhcmUgZGVjb2RlZFxyXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgKiBAcHJpdmF0ZVxyXG4gICAgKi9cclxuICAgIHByaXZhdGUgX2NoZWNrU291bmREZWNvZGluZyhldmVudFRvRGlzcGF0Y2g6IFBoYXNlci5TaWduYWwpIHtcclxuICAgICAgICB2YXIgc291bmQsIGksIGlzQXVkaW9TcHJpdGU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zb3VuZHNUb0RlY29kZSAmJiB0aGlzLl9zb3VuZHNUb0RlY29kZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLl9zb3VuZHNUb0RlY29kZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaXNBdWRpb1Nwcml0ZSA9IHRoaXMuX3NvdW5kc1RvRGVjb2RlW2ldLmlzQXVkaW9TcHJpdGU7XHJcbiAgICAgICAgICAgICAgICBzb3VuZCA9IHRoaXMuZ2FtZS5hZGQuc291bmQodGhpcy5fc291bmRzVG9EZWNvZGVbaV0udXJsKTtcclxuICAgICAgICAgICAgICAgIHNvdW5kLl9faXNBdWRpb1Nwcml0ZSA9IGlzQXVkaW9TcHJpdGU7XHJcbiAgICAgICAgICAgICAgICBzb3VuZC5ldmVudFRvRGlzcGF0Y2ggPSBldmVudFRvRGlzcGF0Y2g7XHJcbiAgICAgICAgICAgICAgICBzb3VuZC5vbkRlY29kZWQuYWRkT25jZSh0aGlzLl9vblNvdW5kRGVjb2RlZCwgdGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBldmVudFRvRGlzcGF0Y2guZGlzcGF0Y2goKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIHdoZW4gYSBzb3VuZCBpcyBkZWNvZGVkLCB0aGlzIG1ldGhvZCByZW1vdmVzIGl0IGZyb20gdGhlIF9zb3VuZHNUb0RlY29kZSBhcnJheSwgYW5kIGluY3JlYXNlcyB0aGUgb3ZlcmFsbCBwZXJjZW50YWdlIGxvYWRlZFxyXG4gICAgKiBAcGFyYW0gIHtQaGFzZXIuU291bmR9IHNvdW5kIHRoZSBzb3VuZCBiZWluZyBkZWNvZGVkXHJcbiAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAqIEBwcml2YXRlXHJcbiAgICAqL1xyXG4gICAgcHJpdmF0ZSBfb25Tb3VuZERlY29kZWQoc291bmQ6IElTb3VuZCkge1xyXG4gICAgICAgIHZhciBzb3VuZEluZGV4ID0gdGhpcy5fc291bmRzVG9EZWNvZGUuaW5kZXhPZihzb3VuZC5rZXkpO1xyXG4gICAgICAgIHRoaXMuX3NvdW5kc1RvRGVjb2RlLnNwbGljZShzb3VuZEluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmdhbWUuYXVkaW8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB0aGlzLmdhbWUuYXVkaW8uYWRkQXVkaW8gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGlmIChzb3VuZC5fX2lzQXVkaW9TcHJpdGUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuYWRkLmF1ZGlvU3ByaXRlKHNvdW5kLmtleSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdhbWUuYXVkaW8uYWRkQXVkaW8oc291bmQua2V5LCBzb3VuZC5fX2lzQXVkaW9TcHJpdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc291bmRzRGVjb2RlZCsrO1xyXG4gICAgICAgIHRoaXMuX21heFBlcmNlbnQgPSAoMTAwIC0gKHRoaXMuX251bVNvdW5kcyAqIHRoaXMuc291bmREZWNvZGluZ01vZGlmaWVyKSArICh0aGlzLl9zb3VuZHNEZWNvZGVkICogdGhpcy5zb3VuZERlY29kaW5nTW9kaWZpZXIpKTtcclxuICAgICAgICB0aGlzLl9nYW1lRmlsZUNvbXBsZXRlKDEwMCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zb3VuZHNUb0RlY29kZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgc291bmQuZXZlbnRUb0Rpc3BhdGNoLmRpc3BhdGNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBzaG9ydGN1dCB0byBnZXQgYW4gYXNzZXQga2V5IHVzaW5nIGEgZmlsZSBuYW1lIChzdHJpcHMgaXRzIGV4dGVuc2lvbilcclxuICAgICogQHBhcmFtICB7U3RyaW5nfSBmaWxlTmFtZSB0aGUgdXJsIG9mIHRoZSBmaWxlXHJcbiAgICAqIEByZXR1cm4ge1N0aXJuZ30gICAgICAgICAgdGhlIGFzc2V0IGtleSAodGhlIGZpbGVuYW1lIHdpdGggaXRzIGV4dGVuc2lvbiBzdHJpcHBlZClcclxuICAgICogQHByaXZhdGVcclxuICAgICovXHJcbiAgICBwcml2YXRlIF9nZXRBc3NldEtleShmaWxlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoZmlsZU5hbWUuaW5kZXhPZignLicpIDwgMClcclxuICAgICAgICAgICAgcmV0dXJuIGZpbGVOYW1lO1xyXG4gICAgICAgIHZhciBleHQgPSBmaWxlTmFtZS5zcGxpdCgnLicpO1xyXG4gICAgICAgIGV4dC5wb3AoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGV4dC5qb2luKCcnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogZ2V0cyB0aGUgZXh0ZW5zaW9uIG9mIGEgZ2l2ZW4gZmlsZVxyXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGZpbGVOYW1lXHJcbiAgICAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgICAgdGhlIGV4dGVuc2lvblxyXG4gICAgKiBAcHJpdmF0ZVxyXG4gICAgKi9cclxuICAgIHByaXZhdGUgX2dldEV4dGVuc2lvbihmaWxlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gZmlsZU5hbWUuc3BsaXQoJy4nKS5wb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogZ2V0cyB0aGUgZXh0ZW5zaW9uIG9mIGEgZ2l2ZW4gZmlsZVxyXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGZpbGVOYW1lXHJcbiAgICAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgICAgdGhlIGV4dGVuc2lvblxyXG4gICAgKiBAcHJpdmF0ZVxyXG4gICAgKi9cclxuICAgIHByaXZhdGUgX2dldFJlc29sdXRpb24ocmVzOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSAnJztcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiByZXMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHJlcyA9IHBhcnNlRmxvYXQocmVzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXMgPSB0aGlzLnJlc29sdXRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVzID4gMS41KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IEFzc2V0TWFuYWdlci5SRVNPTFVUSU9OXzJYO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogZGV0ZXJtaW5lcyB3aGF0IGtpbmQgb2YgYXNzZXQgd2UncmUgZGVhbGluZyB3aXRoIGFuZCBhZGRzIGl0IHRvIHRoZSBsb2FkIHF1ZXVlXHJcbiAgICAqIEBwYXJhbSAge09iamVjdH0gYXNzZXQgdGhlIGFzc2V0IG9iamVjdCB3ZSdyZSBnb2luZyB0byBsb2FkXHJcbiAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAqIEBwcml2YXRlXHJcbiAgICAqL1xyXG4gICAgcHJpdmF0ZSBfbG9hZEFzc2V0KGFzc2V0OiBJQXNzZXQpIHtcclxuICAgICAgICB2YXIgdHlwZSA9IGFzc2V0LnR5cGUsXHJcbiAgICAgICAgICAgIHVybCA9IGFzc2V0LnVybCB8fCBhc3NldC5rZXk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5BU1NFVF9MSVNUOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZEFzc2V0cyhhc3NldC5pZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuU09VTkQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTb3VuZCh1cmwsIGFzc2V0LmV4dGVuc2lvbnMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLkFVRElPX1NQUklURTpcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEF1ZGlvU3ByaXRlKHVybCwgYXNzZXQuZXh0ZW5zaW9ucyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuSU1BR0U6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRJbWFnZSh1cmwsIHRoaXMuX2dldFJlc29sdXRpb24oYXNzZXQucmVzb2x1dGlvbikpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLlZJREVPOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkVmlkZW8odXJsLCB0aGlzLl9nZXRSZXNvbHV0aW9uKGFzc2V0LnJlc29sdXRpb24pKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5BVExBUzpcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEF0bGFzKHVybCwgdGhpcy5fZ2V0UmVzb2x1dGlvbihhc3NldC5yZXNvbHV0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuVEVYVDpcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFRleHQodXJsKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5KU09OOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkSlNPTih1cmwpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLlRJTEVNQVA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRUaWxlbWFwKHVybCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuVElMRURNQVA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRUaWxlZG1hcCh1cmwsICg8SVRpbGVkbWFwQXNzZXRzPmFzc2V0KS5hc3NldHMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLlBIWVNJQ1M6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRQaHlzaWNzKHVybCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuU1BJTkU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTcGluZSh1cmwsIHRoaXMuX2dldFJlc29sdXRpb24oYXNzZXQucmVzb2x1dGlvbikpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuQklUTUFQX0ZPTlQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRCaXRtYXBGb250KHVybCwgdGhpcy5fZ2V0UmVzb2x1dGlvbihhc3NldC5yZXNvbHV0aW9uKSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogcGFyc2VzIHRoZSBkYXRhIGZyb20gdGhlIGV4dGVybmFsIGFzc2V0cyBmaWxlIChub3JtYWxseSBkYXRhL2Fzc2V0cy5qc29uKVxyXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgKiBAcHJpdmF0ZVxyXG4gICAgKi9cclxuICAgIHByaXZhdGUgX3BhcnNlRGF0YSgpIHtcclxuICAgICAgICB2YXIga2V5O1xyXG5cclxuICAgICAgICBmb3IgKGtleSBpbiB0aGlzLl9kYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhcnNlQXNzZXRMaXN0KGtleSwgdGhpcy5fZGF0YVtrZXldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0Q2FjaGVCdXN0ZWRVcmwodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLl9jYWNoZUJ1c3RWZXJzaW9uID09PSB1bmRlZmluZWQgfHwgdGhpcy5fY2FjaGVCdXN0VmVyc2lvbiA9PT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVybDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1cmwgKyAnP3Y9JyArIHRoaXMuX2NhY2hlQnVzdFZlcnNpb247XHJcbiAgICB9XHJcbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xyXG4gICAgcHVibGljIGxvYWRUZXh0KHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuX2dldEFzc2V0S2V5KHVybCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZS5sb2FkLnRleHQoa2V5LCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9kYXRhUGF0aCArICcvJyArIHVybCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkSlNPTihrZXk6IHN0cmluZykge1xyXG4gICAgICAgIGtleSA9IHRoaXMuX2dldEFzc2V0S2V5KGtleSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZS5sb2FkLmpzb24oa2V5LCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9kYXRhUGF0aCArICcvJyArIGtleSArICcuanNvbicpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZFRpbGVtYXAoa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBrZXkgPSB0aGlzLl9nZXRBc3NldEtleShrZXkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUubG9hZC50aWxlbWFwKGtleSwgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5fZGF0YVBhdGggKyAnL3RpbGVtYXAvJyArIGtleSArICcuanNvbicpLCBudWxsLCBQaGFzZXIuVGlsZW1hcC5USUxFRF9KU09OKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZFRpbGVkbWFwKGtleTogc3RyaW5nLCBhc3NldHM6IElBc3NldFtdKSB7XHJcbiAgICAgICAgaWYgKFBoYXNlci5QbHVnaW5bJ1RpbGVkJ10gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGlsZWRtYXAgcmVxdWlyZXMgdGhlIHBoYXNlci10aWxlZCBwbHVnaW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZW5nbGVyY2ovcGhhc2VyLXRpbGVkJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjYWNoZUtleTogYW55ID0gUGhhc2VyLlBsdWdpblsnVGlsZWQnXS51dGlscy5jYWNoZUtleTtcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWRbJ3RpbGVkbWFwJ10oY2FjaGVLZXkoa2V5LCAndGlsZWRtYXAnKSwgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5fZGF0YVBhdGggKyAnL3RpbGVtYXAvJyArIGtleSArICcuanNvbicpLCBudWxsLCBQaGFzZXIuVGlsZW1hcC5USUxFRF9KU09OKTtcclxuXHJcbiAgICAgICAgYXNzZXRzLmZvckVhY2goYXNzZXQgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGFzc2V0LnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLlRJTEVETUFQX1RJTEVTRVQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5USUxFRE1BUF9MQVlFUjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRUaWxlZG1hcEltYWdlKGtleSwgYXNzZXQudHlwZSwgYXNzZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkVGlsZWRtYXBJbWFnZShrZXk6IHN0cmluZywgdGlsZXNldEltYWdlVHlwZTogc3RyaW5nLCBhc3NldDogSUFzc2V0KSB7XHJcbiAgICAgICAgY29uc3QgY2FjaGVLZXk6IGFueSA9IFBoYXNlci5QbHVnaW5bJ1RpbGVkJ10udXRpbHMuY2FjaGVLZXk7XHJcblxyXG4gICAgICAgIGxldCByZXNvbHV0aW9uOiBzdHJpbmcgPSAnJztcclxuICAgICAgICBjb25zdCBuZXdLZXk6IHN0cmluZyA9IHRoaXMuX2dldEFzc2V0S2V5KGFzc2V0LnVybCk7XHJcbiAgICAgICAgY29uc3QgY0tleTogc3RyaW5nID0gY2FjaGVLZXkoa2V5LCAndGlsZXNldCcsIG5ld0tleSk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgYXNzZXQucmVzb2x1dGlvbiAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgcmVzb2x1dGlvbiA9IHRoaXMuX2dldFJlc29sdXRpb24oYXNzZXQucmVzb2x1dGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuX2dldEFzc2V0S2V5KG5ld0tleSArIHJlc29sdXRpb24gKyAnLicgKyB0aGlzLl9nZXRFeHRlbnNpb24oYXNzZXQudXJsKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYXNzZXQudXJsLCBjS2V5KTtcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZShjS2V5LCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9zcHJpdGVTaGVldFBhdGggKyAnLycgKyB1cmwgKyAnLnBuZycpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZFBoeXNpY3Moa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBrZXkgPSB0aGlzLl9nZXRBc3NldEtleShrZXkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUubG9hZC5waHlzaWNzKGtleSwgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5fcGh5c2ljc1BhdGggKyAnLycgKyBrZXkgKyAnLmpzb24nKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRBdGxhcyh1cmw6IHN0cmluZywgcmVzb2x1dGlvbj86IGFueSk6IFBoYXNlci5Mb2FkZXIgfCBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0eXBlb2YgcmVzb2x1dGlvbiAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgcmVzb2x1dGlvbiA9IHRoaXMuX2dldFJlc29sdXRpb24ocmVzb2x1dGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmdhbWUuY2FjaGUuY2hlY2tJbWFnZUtleSh1cmwpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1cmw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUubG9hZC5hdGxhc0pTT05IYXNoKHVybCwgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5fc3ByaXRlU2hlZXRQYXRoICsgJy8nICsgdXJsICsgcmVzb2x1dGlvbiArICcucG5nJyksIHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKHRoaXMuX3Nwcml0ZVNoZWV0UGF0aCArICcvJyArIHVybCArIHJlc29sdXRpb24gKyAnLmpzb24nKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRJbWFnZSh1cmw6IHN0cmluZywgcmVzb2x1dGlvbj86IGFueSk6IFBoYXNlci5Mb2FkZXIgfCBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0eXBlb2YgcmVzb2x1dGlvbiAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgcmVzb2x1dGlvbiA9IHRoaXMuX2dldFJlc29sdXRpb24ocmVzb2x1dGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGtleTogc3RyaW5nID0gdGhpcy5fZ2V0QXNzZXRLZXkodXJsKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jYWNoZS5jaGVja0ltYWdlS2V5KGtleSkpIHtcclxuICAgICAgICAgICAgLy8gaWYgdGhlIGltYWdlIGtleSBhbHJlYWR5IGV4aXN0cywgZG9uJ3QgcmVsb2FkIHRoZSBpbWFnZSBhbmQgcmV0dXJuIHRoZSBrZXlcclxuICAgICAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdXJsID0ga2V5ICsgcmVzb2x1dGlvbiArICcuJyArIHRoaXMuX2dldEV4dGVuc2lvbih1cmwpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lLmxvYWQuaW1hZ2Uoa2V5LCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9pbWdQYXRoICsgJy8nICsgdXJsKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRWaWRlbyh1cmw6IHN0cmluZywgcmVzb2x1dGlvbj86IGFueSk6IFBoYXNlci5Mb2FkZXIgfCBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0eXBlb2YgcmVzb2x1dGlvbiAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgcmVzb2x1dGlvbiA9IHRoaXMuX2dldFJlc29sdXRpb24ocmVzb2x1dGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGtleTogc3RyaW5nID0gdGhpcy5fZ2V0QXNzZXRLZXkodXJsKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jYWNoZS5jaGVja1ZpZGVvS2V5KGtleSkpIHtcclxuICAgICAgICAgICAgLy8gaWYgdGhlIGltYWdlIGtleSBhbHJlYWR5IGV4aXN0cywgZG9uJ3QgcmVsb2FkIHRoZSBpbWFnZSBhbmQgcmV0dXJuIHRoZSBrZXlcclxuICAgICAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdXJsID0ga2V5ICsgcmVzb2x1dGlvbiArICcuJyArIHRoaXMuX2dldEV4dGVuc2lvbih1cmwpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUubG9hZC52aWRlbyhrZXksIHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKHRoaXMuX3ZpZGVvUGF0aCArICcvJyArIHVybCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkU3BpbmUodXJsOiBzdHJpbmcsIHJlc29sdXRpb24/OiBhbnkpOiBzdHJpbmcgfCB2b2lkIHtcclxuICAgICAgICBpZiAodHlwZW9mIHJlc29sdXRpb24gIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHJlc29sdXRpb24gPSB0aGlzLl9nZXRSZXNvbHV0aW9uKHJlc29sdXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVzb2x1dGlvbiA9PT0gJycpIHtcclxuICAgICAgICAgICAgcmVzb2x1dGlvbiA9ICdAMXgnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBrZXk6IHN0cmluZyA9IHRoaXMuX2dldEFzc2V0S2V5KHVybCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdhbWUuY2FjaGUuY2hlY2tJbWFnZUtleShrZXkpKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIHRoZSBpbWFnZSBrZXkgYWxyZWFkeSBleGlzdHMsIGRvbid0IHJlbG9hZCB0aGUgaW1hZ2UgYW5kIHJldHVybiB0aGUga2V5XHJcbiAgICAgICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVybCA9IGtleSArIHJlc29sdXRpb24gKyAnLnBuZyc7XHJcbiAgICAgICAgY29uc3QganNvblVybCA9IGtleSArICcuanNvbic7XHJcbiAgICAgICAgY29uc3QgYXRsYXNVcmwgPSBrZXkgKyByZXNvbHV0aW9uICsgJy5hdGxhcyc7XHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuanNvbihrZXkgKyAnLmpzb24nLCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9zcGluZVBhdGggKyAnLycgKyBqc29uVXJsKSk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQudGV4dChrZXkgKyAnLmF0bGFzJywgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5fc3BpbmVQYXRoICsgJy8nICsgYXRsYXNVcmwpKTtcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZShrZXkgKyAnLnBuZycsIHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKHRoaXMuX3NwaW5lUGF0aCArICcvJyArIHVybCkpO1xyXG5cclxuICAgICAgICBpZiAoU3BpbmUuQVVUT19NRVNIID09PSB0cnVlICYmIGtleS5pbmRleE9mKFNwaW5lLk5PTl9NRVNIX1NVRkZJWCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNwaW5lKGtleSArIFNwaW5lLk5PTl9NRVNIX1NVRkZJWCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkQml0bWFwRm9udCh1cmw6IHN0cmluZywgcmVzb2x1dGlvbj86IGFueSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgcmVzb2x1dGlvbiAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgcmVzb2x1dGlvbiA9IHRoaXMuX2dldFJlc29sdXRpb24ocmVzb2x1dGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmJpdG1hcEZvbnQodXJsLCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9iaXRtYXBGb250UGF0aCArICcvJyArIHVybCArIHJlc29sdXRpb24gKyAnLnBuZycpLCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9iaXRtYXBGb250UGF0aCArICcvJyArIHVybCArIHJlc29sdXRpb24gKyAnLmpzb24nKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRBdWRpbyh1cmw6IHN0cmluZywgZXh0czogYW55LCBpc0F1ZGlvU3ByaXRlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdmFyIHR5cGUsIHBhdGg7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jYWNoZS5jaGVja1NvdW5kS2V5KHVybCkgJiYgdGhpcy5nYW1lLmNhY2hlLmdldFNvdW5kKHVybCkuaXNEZWNvZGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdHlwZSBzaG91bGQgYmUgJ3NvdW5kJyBvciAnc3ByaXRlJyAoJ2Z4JyBhbmQgJ211c2ljJyB0byBiZSBkZXByZWNhdGVkKVxyXG4gICAgICAgIC8vIGRlZmF1bHQgdG8gc291bmRcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0eXBlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB0eXBlID0gJ3NvdW5kJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChleHRzLmluZGV4T2YoJywnKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIGV4dHMgPSBleHRzLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5nYW1lLmRldmljZS5pT1MgJiYgZXh0cy5pbmRleE9mKCdtNGEnKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgZXh0cy51bnNoaWZ0KCdtNGEnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgZXh0cyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgcGF0aCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHBhdGgucHVzaCh0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCgoaXNBdWRpb1Nwcml0ZSA/IHRoaXMuX2F1ZGlvU3ByaXRlUGF0aCA6IHRoaXMuX3NvdW5kUGF0aCkgKyAnLycgKyB1cmwgKyAnLicgKyBleHRzW2ldKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwYXRoID0gdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwoKGlzQXVkaW9TcHJpdGUgPyB0aGlzLl9hdWRpb1Nwcml0ZVBhdGggOiB0aGlzLl9zb3VuZFBhdGgpICsgJy8nICsgdHlwZSArICcvJyArIHVybCArICcuJyArIGV4dHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzQXVkaW9TcHJpdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXVkaW9zcHJpdGUodXJsLCBwYXRoLCB0aGlzLl9hdWRpb1Nwcml0ZVBhdGggKyAnLycgKyB1cmwgKyAnLmpzb24nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5hdWRpbyh1cmwsIHBhdGgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc291bmRzVG9EZWNvZGUucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBpc0F1ZGlvU3ByaXRlOiBpc0F1ZGlvU3ByaXRlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRTb3VuZCh1cmw6IHN0cmluZywgZXh0czogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZEF1ZGlvKHVybCwgZXh0cywgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkQXVkaW9TcHJpdGUodXJsOiBzdHJpbmcsIGV4dHM6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRBdWRpbyh1cmwsIGV4dHMsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkQXNzZXRzKGlkOiBzdHJpbmcsIGJhY2tncm91bmQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRBc3NldExpc3QgPSBpZDtcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkZpbGVDb21wbGV0ZS5yZW1vdmUodGhpcy5fYmFja2dyb3VuZEZpbGVDb21wbGV0ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQub25GaWxlQ29tcGxldGUucmVtb3ZlKHRoaXMuX2dhbWVGaWxlQ29tcGxldGUsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLl9oYXNGaWxlcyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3NvdW5kc1RvRGVjb2RlID0gW107XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fZGF0YSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9kYXRhW2lkXSA9PT0gJ3VuZGVmaW5lZCcgfHwgdGhpcy5fZGF0YVtpZF0ubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ25vIHByZWxvYWQgZGF0YSByZWdpc3RlcmVkIGZvciAnLCBpZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9sb2FkQXNzZXRzKGlkKTtcclxuICAgICAgICB0aGlzLl9oYXNGaWxlcyA9IHRoaXMuZ2FtZS5sb2FkLnRvdGFsUXVldWVkRmlsZXMoKSA+IDA7XHJcblxyXG4gICAgICAgIGlmIChiYWNrZ3JvdW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uTG9hZFN0YXJ0LmFkZE9uY2UodGhpcy5fYmFja2dyb3VuZExvYWRTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uRmlsZUNvbXBsZXRlLmFkZCh0aGlzLl9iYWNrZ3JvdW5kRmlsZUNvbXBsZXRlLCB0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQub25Mb2FkQ29tcGxldGUuYWRkT25jZSh0aGlzLl9iYWNrZ3JvdW5kTG9hZENvbXBsZXRlLCB0aGlzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkxvYWRTdGFydC5hZGRPbmNlKHRoaXMuX2dhbWVMb2FkU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkZpbGVTdGFydC5hZGQodGhpcy5fZ2FtZUZpbGVTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uRmlsZUNvbXBsZXRlLmFkZCh0aGlzLl9nYW1lRmlsZUNvbXBsZXRlLCB0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQub25Mb2FkQ29tcGxldGUuYWRkT25jZSh0aGlzLl9nYW1lTG9hZENvbXBsZXRlLCB0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5faGFzRmlsZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2FtZUxvYWRTdGFydCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9nYW1lRmlsZUNvbXBsZXRlKDEwMCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2dhbWVMb2FkQ29tcGxldGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fbnVtU291bmRzID0gdGhpcy5fc291bmRzVG9EZWNvZGUubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuX3NvdW5kc0RlY29kZWQgPSAwO1xyXG4gICAgICAgIHRoaXMuX21heFBlcmNlbnQgPSAxMDAgLSAodGhpcy5fbnVtU291bmRzICogdGhpcy5zb3VuZERlY29kaW5nTW9kaWZpZXIpO1xyXG5cclxuICAgICAgICBpZiAoYmFja2dyb3VuZCkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZFF1ZXVlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0xvYWRpbmdRdWV1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2RhdGEgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZygnbm8gcHJlbG9hZCBxdWV1ZSB0byBsb2FkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYXNzZXRzOiBhbnksXHJcbiAgICAgICAgICAgIHN0YXRlOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIGk6IG51bWJlcjtcclxuXHJcbiAgICAgICAgZm9yIChzdGF0ZSBpbiB0aGlzLl9kYXRhKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9hdXRvTG9hZERhdGFbc3RhdGVdKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgYXNzZXRzID0gdGhpcy5fZGF0YVtzdGF0ZV07XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXNzZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZEFzc2V0KGFzc2V0c1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5faXNMb2FkaW5nUXVldWUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uTG9hZFN0YXJ0LmFkZE9uY2UodGhpcy5fYmFja2dyb3VuZExvYWRTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQub25GaWxlQ29tcGxldGUuYWRkKHRoaXMuX2JhY2tncm91bmRGaWxlQ29tcGxldGUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uTG9hZENvbXBsZXRlLmFkZE9uY2UodGhpcy5fYmFja2dyb3VuZExvYWRDb21wbGV0ZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXRMb2FkUHJvZ3Jlc3MoKSB7XHJcbiAgICAgICAgY29uc3QgYWRqdXN0ZWRQcm9ncmVzcyA9IHRoaXMuX2ZpbGVDb21wbGV0ZVByb2dyZXNzICogdGhpcy5fbWF4UGVyY2VudCAvIDEwMDtcclxuICAgICAgICByZXR1cm4gYWRqdXN0ZWRQcm9ncmVzcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGFsbFNvdW5kc0RlY29kZWQoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnc291bmRzIHRvIGRlY29kZScsIHRoaXMuX3NvdW5kc1RvRGVjb2RlLmxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kc1RvRGVjb2RlLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIHNldHMgdGhlIGRhdGEgZm9yIHRoZSBBc3NldE1hbmFnZXIgdG8gdXNlIGFzIGEgcmVmZXJlbmNlICh1c3VhbGx5IGZyb20gZGF0YS9hc3NldHMuanNvbilcclxuICAgICogdHJpZ2dlcnMgdGhlIF9wYXJzZURhdGEgaW50ZXJuYWwgbWV0aG9kLCB3aGljaCBzdG9yZXMgdGhlIGFzc2V0IGxpc3QgZm9yIGxhdGVyIHVzZVxyXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dEZpbGVGcm9tQ2FjaGUgdGhlIGlkIG9mIHRoZSBmaWxlIGluIHRoZSBQaGFzZXIuQ2FjaGVcclxuICAgICovXHJcbiAgICBwdWJsaWMgc2V0RGF0YShkYXRhOiBPYmplY3QpIHtcclxuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLl9sb2FkRGF0YSA9IHt9O1xyXG4gICAgICAgIHRoaXMuX3BhcnNlRGF0YSgpO1xyXG5cclxuICAgICAgICB0aGlzLnNlbmROb3RpZmljYXRpb24oTm90aWZpY2F0aW9ucy5BU1NFVF9NQU5BR0VSX0RBVEFfU0VULCB0aGlzLl9kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogY2xlYXJzIHRoZSBhc3NldHMgZnJvbSBhIHBhcnRpY3VsYXIgaWQgaW4gdGhlIHN0b3JhZ2VcclxuICAgICogQHBhcmFtICB7U3RyaW5nfSBpZCAgICAgICAgICAgIHRoZSBpZCBvZiB0aGUgYXNzZXQgbGlzdCB0byBjbGVhclxyXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBbY2xlYXJBdWRpbyA9IHRydWVdICAgIHdoZXRoZXIgdG8gY2xlYXIgYXVkaW8gZmlsZXNcclxuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gW2NsZWFyQXRsYXNzZXMgPSB0cnVlXSB3aGV0aGVyIHRvIGNsZWFyIHRleHR1cmUgYXRsYXNzZXNcclxuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gW2NsZWFySW1hZ2VzID0gdHJ1ZV0gICB3aGV0aGVyIHRvIGNsZWFyIGltYWdlc1xyXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBbY2xlYXJUZXh0ID0gdHJ1ZV0gICAgIHdoZXRoZXIgdG8gY2xlYXIgdGV4dCBmaWxlc1xyXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBjbGVhckFzc2V0cyhpZDogc3RyaW5nLCBjbGVhckF1ZGlvOiBib29sZWFuID0gdHJ1ZSwgY2xlYXJBdGxhc3NlczogYm9vbGVhbiA9IHRydWUsIGNsZWFySW1hZ2VzOiBib29sZWFuID0gdHJ1ZSwgY2xlYXJUZXh0OiBib29sZWFuID0gdHJ1ZSwgY2xlYXJKU09OOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIHZhciBhc3NldHMgPSB0aGlzLl9kYXRhW2lkXTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NsZWFyaW5nOiAnLCBpZCk7XHJcblxyXG4gICAgICAgIGlmICghYXNzZXRzIHx8IHR5cGVvZiBhc3NldHMgPT09ICd1bmRlZmluZWQnIHx8IGFzc2V0cy5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZygnbm8gYXNzZXRzJywgYXNzZXRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXNzZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJBc3NldChhc3NldHNbaV0sIGNsZWFyQXVkaW8sIGNsZWFyQXRsYXNzZXMsIGNsZWFySW1hZ2VzLCBjbGVhclRleHQsIGNsZWFySlNPTik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9jb21wbGV0ZWRMb2Fkc1tpZF0gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5zZW5kTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbnMuQVNTRVRfTUFOQUdFUl9BU1NFVFNfQ0xFQVJFRCwgaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBjbGVhcnMgYW4gYXNzZXQgZnJvbSB0aGUgZ2FtZSdzIG1lbW9yeVxyXG4gICAgKiBAcGFyYW0gIHtPYmplY3R9IGFzc2V0ICAgICAgICAgdGhlIGFzc2V0IHRvIGNsZWFyXHJcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IFtjbGVhckF1ZGlvID0gdHJ1ZV0gICAgd2hldGhlciB0byBjbGVhciBhdWRpbyBmaWxlc1xyXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBbY2xlYXJBdGxhc3NlcyA9IHRydWVdIHdoZXRoZXIgdG8gY2xlYXIgdGV4dHVyZSBhdGxhc3Nlc1xyXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBbY2xlYXJJbWFnZXMgPSB0cnVlXSAgIHdoZXRoZXIgdG8gY2xlYXIgaW1hZ2VzXHJcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IFtjbGVhclRleHQgPSB0cnVlXSAgICAgd2hldGhlciB0byBjbGVhciB0ZXh0IGZpbGVzXHJcbiAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAqL1xyXG4gICAgcHVibGljIGNsZWFyQXNzZXQoYXNzZXQ6IElBc3NldCwgY2xlYXJBdWRpbzogYm9vbGVhbiA9IHRydWUsIGNsZWFyQXRsYXNzZXM6IGJvb2xlYW4gPSB0cnVlLCBjbGVhckltYWdlczogYm9vbGVhbiA9IHRydWUsIGNsZWFyVGV4dDogYm9vbGVhbiA9IHRydWUsIGNsZWFySlNPTjogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgICAgICB2YXIgdHlwZSA9IGFzc2V0LnR5cGUsXHJcbiAgICAgICAgICAgIHVybCA9IGFzc2V0LnVybCxcclxuICAgICAgICAgICAgcmVxdWlyZWQgPSBhc3NldC5yZXF1aXJlZDtcclxuXHJcbiAgICAgICAgaWYgKHJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGUgJyArIHR5cGUgKyAnIGFzc2V0OiAnICsgdXJsICsgJyBpcyByZXF1aXJlZCBhbmQgd2lsbCBub3QgYmUgY2xlYXJlZCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5BVURJTzpcclxuICAgICAgICAgICAgICAgIGlmIChjbGVhckF1ZGlvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLnNvdW5kLnJlbW92ZUJ5S2V5KHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNhY2hlLnJlbW92ZVNvdW5kKHVybCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuSU1BR0U6XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xlYXJJbWFnZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuY2FjaGUucmVtb3ZlSW1hZ2UodXJsKTtcclxuICAgICAgICAgICAgICAgICAgICBQSVhJLkJhc2VUZXh0dXJlQ2FjaGVbdXJsXS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuQVRMQVM6XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xlYXJBdGxhc3Nlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jYWNoZS5yZW1vdmVJbWFnZSh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIFBJWEkuQmFzZVRleHR1cmVDYWNoZVt1cmxdLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuY2FjaGUucmVtb3ZlWE1MKHVybCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuVEVYVDpcclxuICAgICAgICAgICAgICAgIGlmIChjbGVhclRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuY2FjaGUucmVtb3ZlVGV4dCh1cmwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLkpTT046XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xlYXJKU09OKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNhY2hlLnJlbW92ZUpTT04odXJsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5QSFlTSUNTOlxyXG4gICAgICAgICAgICAgICAgaWYgKGNsZWFySlNPTikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jYWNoZS5yZW1vdmVQaHlzaWNzKHVybCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyU3BpbmVBc3NldChpZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5nYW1lLmNhY2hlLnJlbW92ZUpTT04oaWQgKyAnLmpzb24nKTtcclxuICAgICAgICB0aGlzLmdhbWUuY2FjaGUucmVtb3ZlVGV4dChpZCArICcuYXRsYXMnKTtcclxuICAgICAgICB0aGlzLmdhbWUuY2FjaGUucmVtb3ZlSW1hZ2UoaWQgKyAnLnBuZycsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBjaGVja3MgaWYgdGhlIGFzc2V0cyBmcm9tIHRoaXMgbGlzdCBpZCBhcmUgYWxyZWFkeSBsb2FkZWRcclxuICAgICogQHBhcmFtICB7U3RyaW5nfSAgaWQgdGhlIGFzc2V0IGxpc3QgaWQgdG8gY2hlY2tcclxuICAgICogQHJldHVybiB7Qm9vbGVhbn0gICAgd2hldGhlciBpdCBoYXMgYmVlbiBsb2FkZWQgYWxyZWFkeVxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBoYXNMb2FkZWRBc3NldHMoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb21wbGV0ZWRMb2Fkc1tpZF0gPT09IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbmROb3RpZmljYXRpb24obm90aWZpY2F0aW9uTmFtZTogc3RyaW5nLCBub3RpZmljYXRpb25Cb2R5PzogYW55KTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwLnNlbmROb3RpZmljYXRpb24obm90aWZpY2F0aW9uTmFtZSwgbm90aWZpY2F0aW9uQm9keSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0dGVyIC8gc2V0dGVyXHJcbiAgICBwdWJsaWMgc2V0IGJhc2VVUkwoYmFzZVVSTDogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gZW5zdXJlIHRyYWlsaW5nIHNsYXNoXHJcbiAgICAgICAgaWYgKGJhc2VVUkwgJiYgYmFzZVVSTCAhPT0gdW5kZWZpbmVkICYmIGJhc2VVUkwuY2hhckF0KGJhc2VVUkwubGVuZ3RoIC0gMSkgIT09ICcvJylcclxuICAgICAgICAgICAgYmFzZVVSTCArPSAnLyc7XHJcblxyXG4gICAgICAgIHRoaXMuX2Jhc2VVUkwgPSBiYXNlVVJMO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgcGF0aHMocGF0aE9iajogSVBhdGhDb25maWcpIHtcclxuICAgICAgICB0aGlzLl9wYXRoT2JqID0gcGF0aE9iaiB8fCB7fTtcclxuXHJcbiAgICAgICAgdGhpcy5fYXNzZXRQYXRoID0gdGhpcy5fYmFzZVVSTCArICh0aGlzLl9wYXRoT2JqLmFzc2V0UGF0aCB8fCAnYXNzZXRzJyk7XHJcbiAgICAgICAgdGhpcy5fZGF0YVBhdGggPSB0aGlzLl9iYXNlVVJMICsgKHRoaXMuX3BhdGhPYmouZGF0YVBhdGggfHwgJ2Fzc2V0cy9kYXRhJyk7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlU2hlZXRQYXRoID0gdGhpcy5fYmFzZVVSTCArICh0aGlzLl9wYXRoT2JqLnNwcml0ZXNoZWV0UGF0aCB8fCAnYXNzZXRzL2ltZy9zcHJpdGVzaGVldHMnKTtcclxuICAgICAgICB0aGlzLl9pbWdQYXRoID0gdGhpcy5fYmFzZVVSTCArICh0aGlzLl9wYXRoT2JqLmltZ1BhdGggfHwgJ2Fzc2V0cy9pbWcnKTtcclxuICAgICAgICB0aGlzLl92aWRlb1BhdGggPSB0aGlzLl9iYXNlVVJMICsgKHRoaXMuX3BhdGhPYmouaW1nUGF0aCB8fCAnYXNzZXRzL3ZpZGVvJyk7XHJcbiAgICAgICAgdGhpcy5fc3BpbmVQYXRoID0gdGhpcy5fYmFzZVVSTCArICh0aGlzLl9wYXRoT2JqLnNwaW5lUGF0aCB8fCAnYXNzZXRzL3NwaW5lJyk7XHJcbiAgICAgICAgdGhpcy5fZm9udFBhdGggPSB0aGlzLl9iYXNlVVJMICsgKHRoaXMuX3BhdGhPYmouZm9udFBhdGggfHwgJ2Fzc2V0cy9mb250cycpO1xyXG4gICAgICAgIHRoaXMuX2JpdG1hcEZvbnRQYXRoID0gdGhpcy5fYmFzZVVSTCArICh0aGlzLl9wYXRoT2JqLmJpdG1hcEZvbnRQYXRoIHx8ICdhc3NldHMvZm9udHMvYml0bWFwJyk7XHJcbiAgICAgICAgdGhpcy5fYXVkaW9TcHJpdGVQYXRoID0gdGhpcy5fYmFzZVVSTCArICh0aGlzLl9wYXRoT2JqLmF1ZGlvU3ByaXRlUGF0aCB8fCAnYXNzZXRzL2F1ZGlvL3Nwcml0ZScpO1xyXG4gICAgICAgIHRoaXMuX3NvdW5kUGF0aCA9IHRoaXMuX2Jhc2VVUkwgKyAodGhpcy5fcGF0aE9iai5zb3VuZFBhdGggfHwgJ2Fzc2V0cy9hdWRpby9zb3VuZCcpO1xyXG4gICAgICAgIHRoaXMuX3BoeXNpY3NQYXRoID0gdGhpcy5fYmFzZVVSTCArICh0aGlzLl9wYXRoT2JqLnBoeXNpY3NQYXRoIHx8ICdhc3NldHMvZGF0YS9waHlzaWNzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCByZXNvbHV0aW9uKHJlczogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHJlcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJlcyA9IHRoaXMuZ2FtZS5yZXNvbHV0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcmVzID0gcmVzO1xyXG4gICAgICAgIHRoaXMuX3Jlc29sdXRpb24gPSAnJztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3JlcyA+IDEuNSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNvbHV0aW9uID0gQXNzZXRNYW5hZ2VyLlJFU09MVVRJT05fMlg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgcmVzb2x1dGlvbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICogc2V0cyB0aGUgcGVyY2VudGFnZSBvZiB0aGUgbG9hZCB3ZSBzaG91bGQgYWxsb3QgdG8gZWFjaCBzb3VuZFxyXG4gICAgKiBAcGFyYW0ge051bWJlcn0gW251bSA9IDJdIHRoZSBwZXJjZW50YWdlXHJcbiAgICAqL1xyXG4gICAgcHVibGljIHNldCBzb3VuZERlY29kaW5nTW9kaWZpZXIobnVtOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAobnVtID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbnVtID0gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc291bmREZWNvZGluZ01vZGlmaWVyID0gbnVtO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgc291bmREZWNvZGluZ01vZGlmaWVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VuZERlY29kaW5nTW9kaWZpZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBjYWNoZUJ1c3RWZXJzaW9uKHZlcnNpb246IHN0cmluZyB8IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2NhY2hlQnVzdFZlcnNpb24gPSAnJyArIHZlcnNpb247XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogQXVkaW9NYW5hZ2VyXHJcbiAqIFdyYXBwZXIgZm9yIFBoYXNlci5Tb3VuZE1hbmFnZXJcclxuICovXHJcbmltcG9ydCB7QXBwbGljYXRpb259IGZyb20gJy4uL2FwcGxpY2F0aW9uJztcclxuaW1wb3J0IHtHYW1lfSBmcm9tICcuLi9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBdWRpb01hbmFnZXIge1xyXG4gICAgcHVibGljIGdhbWU6IEdhbWU7XHJcblxyXG4gICAgcHJpdmF0ZSBfZGVmYXVsdFZvbHVtZTogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgX3Nwcml0ZXM6IHsgW3Nwcml0ZTogc3RyaW5nXTogUGhhc2VyLkF1ZGlvU3ByaXRlIH0gPSB7fTtcclxuICAgIHByaXZhdGUgX3NvdW5kczogeyBbc291bmQ6IHN0cmluZ106IFBoYXNlci5Tb3VuZCB9ID0ge307XHJcbiAgICBwcml2YXRlIF9tYXJrZXJMb29rdXA6IHsgW2lkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcclxuICAgIHByaXZhdGUgX2FkZEF1ZGlvKGtleTogc3RyaW5nLCBpc0F1ZGlvU3ByaXRlOiBib29sZWFuID0gZmFsc2UpOiBQaGFzZXIuU291bmQgfCBQaGFzZXIuQXVkaW9TcHJpdGUge1xyXG4gICAgICAgIGlmIChpc0F1ZGlvU3ByaXRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXJzZUF1ZGlvU3ByaXRlKGtleSwgdGhpcy5nYW1lLmFkZC5hdWRpb1Nwcml0ZShrZXkpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWxsb3dNdWx0aXBsZSh0aGlzLmdhbWUuYWRkLnNvdW5kKGtleSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9wYXJzZUF1ZGlvU3ByaXRlKGtleTogc3RyaW5nLCBhdWRpb1Nwcml0ZTogUGhhc2VyLkF1ZGlvU3ByaXRlKTogUGhhc2VyLkF1ZGlvU3ByaXRlIHtcclxuICAgICAgICBmb3IgKHZhciBzb3VuZEtleSBpbiBhdWRpb1Nwcml0ZS5zb3VuZHMpIHtcclxuICAgICAgICAgICAgdGhpcy5fYWxsb3dNdWx0aXBsZShhdWRpb1Nwcml0ZS5zb3VuZHNbc291bmRLZXldKTtcclxuICAgICAgICAgICAgdGhpcy5fbWFya2VyTG9va3VwW3NvdW5kS2V5XSA9IGtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGF1ZGlvU3ByaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2FsbG93TXVsdGlwbGUoc291bmQ6IFBoYXNlci5Tb3VuZCk6IFBoYXNlci5Tb3VuZCB7XHJcbiAgICAgICAgc291bmQuYWxsb3dNdWx0aXBsZSA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHNvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldEtleUZyb21NYXJrZXJOYW1lKG1hcmtlcjogc3RyaW5nKTogc3RyaW5nIHwgYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9tYXJrZXJMb29rdXBbbWFya2VyXSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlckxvb2t1cFttYXJrZXJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5fc3ByaXRlcykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3Nwcml0ZXNba2V5XS5zb3VuZHNbbWFya2VyXSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21hcmtlckxvb2t1cFttYXJrZXJdID0ga2V5O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcGxheVNwcml0ZU1hcmtlcihrZXk6IHN0cmluZywgbWFya2VyOiBzdHJpbmcsIHZvbHVtZT86IGFueSwgbG9vcDogYm9vbGVhbiA9IGZhbHNlLCBmb3JjZVJlc3RhcnQ6IGJvb2xlYW4gPSB0cnVlKTogUGhhc2VyLlNvdW5kIHtcclxuICAgICAgICBpZiAodHlwZW9mIHZvbHVtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2b2x1bWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodm9sdW1lLmluZGV4T2YoJysnKSA+PSAwIHx8IHZvbHVtZS5pbmRleE9mKCctJykgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZSA9IHRoaXMuX2RlZmF1bHRWb2x1bWUgKyBwYXJzZUZsb2F0KHZvbHVtZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZSA9IHBhcnNlRmxvYXQodm9sdW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZvbHVtZSA9IHRoaXMuX2RlZmF1bHRWb2x1bWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsb29wID0gbG9vcCB8fCBmYWxzZTtcclxuICAgICAgICBmb3JjZVJlc3RhcnQgPSBmb3JjZVJlc3RhcnQgPT09IGZhbHNlID8gZmFsc2UgOiB0cnVlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlc1trZXldLnBsYXkobWFya2VyLCB2b2x1bWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3N0b3BTcHJpdGVNYXJrZXIoa2V5OiBzdHJpbmcsIG1hcmtlcjogc3RyaW5nKTogYm9vbGVhbiB8IFBoYXNlci5Tb3VuZCB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zcHJpdGVzID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgdGhpcy5fc3ByaXRlc1trZXldID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGVzW2tleV0uc3RvcChtYXJrZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3N0b3BTb3VuZChzb3VuZDogUGhhc2VyLlNvdW5kKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuIHNvdW5kLnN0b3AoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xyXG4gICAgLyoqXHJcbiAgICAqIGFkZHMgYXVkaW8gdG8gdGhlIGxvb2t1cCAoY2FsbGVkIGJ5IEFzc2V0TWFuYWdlciB3aGVuIGFueSBzb3VuZCBpcyBsb2FkZWQsIHVzdWFsbHkgbm90IG5lY2Vzc2FyeSB0byBjYWxsIGZyb20gYSBnYW1lKVxyXG4gICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5ICAgICAgICAgdGhlIFBoYXNlci5DYWNoZSBrZXkgb2YgdGhlIGF1ZGlvIGFzc2V0XHJcbiAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNBdWRpb1Nwcml0ZSB3aGV0aGVyIHRoZSBhc3NldCBpcyBhbiBhdWRpbyBzcHJpdGVcclxuICAgICovXHJcbiAgICBwdWJsaWMgYWRkQXVkaW8oa2V5OiBzdHJpbmcsIGlzQXVkaW9TcHJpdGU6IGJvb2xlYW4gPSBmYWxzZSk6IFBoYXNlci5BdWRpb1Nwcml0ZSB8IFBoYXNlci5Tb3VuZCB7XHJcbiAgICAgICAgaWYgKGlzQXVkaW9TcHJpdGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkQXVkaW9TcHJpdGUoa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkU291bmQoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogYWRkcyBhIHNpbmdsZSBzb3VuZCB0byB0aGUgbG9va3VwICh1c3VhbGx5IG5vdCBuZWNlc3NhcnkgdG8gY2FsbCBmcm9tIGEgZ2FtZSlcclxuICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSB0aGUgUGhhc2VyLkNhY2hlIGtleSBvZiB0aGUgYXNzZXRcclxuICAgICogQHJldHVybiB7UGhhc2VyLlNvdW5kfSB0aGUgYWRkZWQgc291bmRcclxuICAgICovXHJcbiAgICBwdWJsaWMgYWRkU291bmQoa2V5KTogUGhhc2VyLlNvdW5kIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3NvdW5kc1trZXldICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc291bmRzW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3NvdW5kc1trZXldID0gdGhpcy5nYW1lLmFkZC5hdWRpbyhrZXkpO1xyXG4gICAgICAgIHRoaXMuX3NvdW5kc1trZXldLmFsbG93TXVsdGlwbGUgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VuZHNba2V5XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogYWRkcyBhbiBhdWRpbyBzcHJpdGUgdG8gdGhlIGxvb2t1cCAodXN1YWxseSBub3QgbmVjZXNzYXJ5IHRvIGNhbGwgZnJvbSBhIGdhbWUpXHJcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgdGhlIFBoYXNlci5DYWNoZSBrZXkgb2YgdGhlIGFzc2V0XHJcbiAgICAqIEByZXR1cm4ge1BoYXNlci5BdWRpb1Nwcml0ZX0gdGhlIGFkZGVkIGF1ZGlvIHNwcml0ZVxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBhZGRBdWRpb1Nwcml0ZShrZXk6IHN0cmluZyk6IFBoYXNlci5BdWRpb1Nwcml0ZSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zcHJpdGVzW2tleV0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGVzW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3Nwcml0ZXNba2V5XSA9IDxQaGFzZXIuQXVkaW9TcHJpdGU+dGhpcy5fYWRkQXVkaW8oa2V5LCB0cnVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlc1trZXldO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBhIGdsb2JhbCBtZXRob2QgdG8gcGxheSBhIHNvdW5kIC0gd2lsbCBjaGVjayBhdWRpbyBzcHJpdGUgbWFya2VycyBmb3IgdGhlIHByb3ZpZGVkIGtleSBmaXJzdCwgdGhlbiBzaW5nbGUgc291bmRzXHJcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gbWFya2VyICAgICAgIHRoZSBzb3VuZCBtYXJrZXIgKG9yIGtleSkgdG8gY2hlY2sgZm9yXHJcbiAgICAqIEBwYXJhbSAge051bWJlcn0gdm9sdW1lICAgICAgIHRoZSB2b2x1bWUgYXQgd2hpY2ggdG8gcGxheSB0aGUgc291bmRcclxuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gbG9vcCAgICAgICAgIHdoZXRoZXIgdGhlIHNvdW5kIHNob3VsZCBsb29wICh3b24ndCB3b3JrIGlmIGl0J3MgYSBzcHJpdGUgbWFya2VyLCBhbmQgXCJsb29wXCIgaGFzbid0IGJlZW4gc2V0IGluIHRoZSBhdWRpbyBzcHJpdGUgZGVzY3JpcHRvciBmaWxlKVxyXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBmb3JjZVJlc3RhcnQgd2hldGhlciB0byByZXN0YXJ0IHRoZSBzb3VuZCBpZiBpdCdzIGFscmVhZHkgcGxheWluZ1xyXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuU291bmR9ICAgICAgICAgICAgICB0aGUgcGxheWluZyBzb3VuZFxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBwbGF5QXVkaW8obWFya2VyOiBzdHJpbmcsIHZvbHVtZT86IG51bWJlciwgbG9vcDogYm9vbGVhbiA9IGZhbHNlLCBmb3JjZVJlc3RhcnQ6IGJvb2xlYW4gPSB0cnVlKTogUGhhc2VyLlNvdW5kIHtcclxuICAgICAgICBpZiAodGhpcy5fZ2V0S2V5RnJvbU1hcmtlck5hbWUobWFya2VyKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5U3ByaXRlTWFya2VyKG1hcmtlciwgdm9sdW1lLCBsb29wLCBmb3JjZVJlc3RhcnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheVNvdW5kKG1hcmtlciwgdm9sdW1lLCBsb29wLCBmb3JjZVJlc3RhcnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBjYWxscyBEaWpvbi5BdWRpb01hbmFnZXIucGxheUF1ZGlvIG9uIGEgZGVsYXlcclxuICAgICogQHBhcmFtICB7aW50fSBkZWxheSAgICAgICAgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheSB0aGUgc291bmRcclxuICAgICogQHBhcmFtICB7U3RyaW5nfSBtYXJrZXIgICAgICAgdGhlIHNvdW5kIG1hcmtlciAob3Iga2V5KSB0byBjaGVjayBmb3JcclxuICAgICogQHBhcmFtICB7TnVtYmVyfSB2b2x1bWUgICAgICAgdGhlIHZvbHVtZSBhdCB3aGljaCB0byBwbGF5IHRoZSBzb3VuZFxyXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBsb29wICAgICAgICAgd2hldGhlciB0aGUgc291bmQgc2hvdWxkIGxvb3AgKHdvbid0IHdvcmsgaWYgaXQncyBhIHNwcml0ZSBtYXJrZXIsIGFuZCBcImxvb3BcIiBoYXNuJ3QgYmVlbiBzZXQgaW4gdGhlIGF1ZGlvIHNwcml0ZSBkZXNjcmlwdG9yIGZpbGUpXHJcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IGZvcmNlUmVzdGFydCB3aGV0aGVyIHRvIHJlc3RhcnQgdGhlIHNvdW5kIGlmIGl0J3MgYWxyZWFkeSBwbGF5aW5nXHJcbiAgICAqL1xyXG4gICAgcHVibGljIHBsYXlEZWxheWVkQXVkaW8oZGVsYXk6IG51bWJlciwgbWFya2VyOiBzdHJpbmcsIHZvbHVtZT86IG51bWJlciwgbG9vcDogYm9vbGVhbiA9IGZhbHNlLCBmb3JjZVJlc3RhcnQ6IGJvb2xlYW4gPSB0cnVlKTogUGhhc2VyLlNvdW5kIHtcclxuICAgICAgICBpZiAodGhpcy5fZ2V0S2V5RnJvbU1hcmtlck5hbWUobWFya2VyKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5RGVsYXllZFNwcml0ZU1hcmtlcihkZWxheSwgbWFya2VyLCB2b2x1bWUsIGxvb3AsIGZvcmNlUmVzdGFydCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXlEZWxheWVkU291bmQoZGVsYXksIG1hcmtlciwgdm9sdW1lLCBsb29wLCBmb3JjZVJlc3RhcnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBwbGF5cyBhIHNpbmdsZSBzb3VuZFxyXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGtleSAgICAgICAgICB0aGUgUGhhc2VyLkNhY2hlIGtleSBmb3IgdGhlIHNvdW5kXHJcbiAgICAqIEBwYXJhbSAge051bWJlcn0gdm9sdW1lICAgICAgIHRoZSB2b2x1bWUgYXQgd2hpY2ggdG8gcGxheSB0aGUgc291bmRcclxuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gbG9vcCAgICAgICAgIHdoZXRoZXIgdGhlIHNvdW5kIHNob3VsZCBsb29wICh3b24ndCB3b3JrIGlmIGl0J3MgYSBzcHJpdGUgbWFya2VyLCBhbmQgXCJsb29wXCIgaGFzbid0IGJlZW4gc2V0IGluIHRoZSBhdWRpbyBzcHJpdGUgZGVzY3JpcHRvciBmaWxlKVxyXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBmb3JjZVJlc3RhcnQgd2hldGhlciB0byByZXN0YXJ0IHRoZSBzb3VuZCBpZiBpdCdzIGFscmVhZHkgcGxheWluZ1xyXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuU291bmR9IHRoZSBwbGF5aW5nIHNvdW5kXHJcbiAgICAqL1xyXG4gICAgcHVibGljIHBsYXlTb3VuZChrZXk6IHN0cmluZywgdm9sdW1lPzogbnVtYmVyLCBsb29wOiBib29sZWFuID0gZmFsc2UsIGZvcmNlUmVzdGFydDogYm9vbGVhbiA9IHRydWUpOiBQaGFzZXIuU291bmQge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc291bmRzW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2b2x1bWUgPSB0eXBlb2Ygdm9sdW1lID09PSAndW5kZWZpbmVkJyA/IHRoaXMuX2RlZmF1bHRWb2x1bWUgOiB2b2x1bWU7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VuZHNba2V5XS5wbGF5KFwiXCIsIDAsIHZvbHVtZSwgbG9vcCwgZm9yY2VSZXN0YXJ0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogcGxheXMgYSBtYXJrZXIgZnJvbSBhbiBhdWRpbyBzcHJpdGVcclxuICAgICogQHBhcmFtICB7U3RyaW5nfSBtYXJrZXIgICAgICAgdGhlIG1hcmtlciB0byBjaGVjayBmb3IgKHdpbGwgY2hlY2sgYWxsIGF1ZGlvIHNwcml0ZXMpXHJcbiAgICAqIEBwYXJhbSAge051bWJlcn0gdm9sdW1lICAgICAgIHRoZSB2b2x1bWUgYXQgd2hpY2ggdG8gcGxheSB0aGUgc291bmRcclxuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gbG9vcCAgICAgICAgIHdoZXRoZXIgdGhlIHNvdW5kIHNob3VsZCBsb29wICh3b24ndCB3b3JrIGlmIGl0J3MgYSBzcHJpdGUgbWFya2VyLCBhbmQgXCJsb29wXCIgaGFzbid0IGJlZW4gc2V0IGluIHRoZSBhdWRpbyBzcHJpdGUgZGVzY3JpcHRvciBmaWxlKVxyXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBmb3JjZVJlc3RhcnQgd2hldGhlciB0byByZXN0YXJ0IHRoZSBzb3VuZCBpZiBpdCdzIGFscmVhZHkgcGxheWluZ1xyXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuU291bmR9IHRoZSBwbGF5aW5nIHNvdW5kXHJcbiAgICAqL1xyXG4gICAgcHVibGljIHBsYXlTcHJpdGVNYXJrZXIobWFya2VyOiBzdHJpbmcsIHZvbHVtZT86IG51bWJlciwgbG9vcDogYm9vbGVhbiA9IGZhbHNlLCBmb3JjZVJlc3RhcnQ6IGJvb2xlYW4gPSB0cnVlKTogUGhhc2VyLlNvdW5kIHtcclxuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLl9nZXRLZXlGcm9tTWFya2VyTmFtZShtYXJrZXIpO1xyXG5cclxuICAgICAgICBpZiAoIWtleSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbWFya2VyIG5vdCBmb3VuZCcsIG1hcmtlcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXlTcHJpdGVNYXJrZXIoPHN0cmluZz5rZXksIG1hcmtlciwgdm9sdW1lLCBsb29wLCBmb3JjZVJlc3RhcnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGF5RGVsYXllZFNvdW5kKGRlbGF5OiBudW1iZXIsIGtleTogc3RyaW5nLCB2b2x1bWU/OiBudW1iZXIsIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSwgZm9yY2VSZXN0YXJ0OiBib29sZWFuID0gdHJ1ZSk6IFBoYXNlci5Tb3VuZCB7XHJcbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmFkZChkZWxheSwgdGhpcy5wbGF5U291bmQsIHRoaXMsIGtleSwgdm9sdW1lLCBsb29wLCBmb3JjZVJlc3RhcnQpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGF5RGVsYXllZFNwcml0ZU1hcmtlcihkZWxheTogbnVtYmVyLCBtYXJrZXI6IHN0cmluZywgdm9sdW1lPzogbnVtYmVyLCBsb29wOiBib29sZWFuID0gZmFsc2UsIGZvcmNlUmVzdGFydDogYm9vbGVhbiA9IHRydWUpOiBQaGFzZXIuU291bmQge1xyXG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoZGVsYXksIHRoaXMucGxheVNwcml0ZU1hcmtlciwgdGhpcywgbWFya2VyLCB2b2x1bWUsIGxvb3AsIGZvcmNlUmVzdGFydCk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIHN0b3BzIGFueSBwbGF5aW5nIGF1ZGlvIGZpbGUgd2l0aCB0aGUgZ2l2ZW4gbWFya2VyXHJcbiAgICAqIGNoZWNrcyBhdWRpbyBzcHJpdGVzIGZpcnN0LCB0aGVuIHNpbmdsZSBzb3VuZHNcclxuICAgICogQHJldHVybiB7UGhhc2VyLlNvdW5kfSB0aGUgc291bmQgdGhhdCB3YXMgc3RvcHBlZFxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBzdG9wQXVkaW8obWFya2VyOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fZ2V0S2V5RnJvbU1hcmtlck5hbWUobWFya2VyKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9wU3ByaXRlTWFya2VyKG1hcmtlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3BTb3VuZChtYXJrZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBzdG9wcyBhIHNpbmdsZSBzb3VuZCBmcm9tIHBsYXlpbmdcclxuICAgICogQHJldHVybiB7UGhhc2VyLlNvdW5kfSB0aGUgc291bmQgdGhhdCB3YXMgc3RvcHBlZFxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBzdG9wU291bmQoa2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3NvdW5kcyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHRoaXMuX3NvdW5kc1trZXldID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VuZHNba2V5XS5zdG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIHN0b3BzIGEgc2luZ2xlIHNvdW5kIGZyb20gcGxheWluZ1xyXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuU291bmR9IHRoZSBzb3VuZCB0aGF0IHdhcyBzdG9wcGVkXHJcbiAgICAqL1xyXG4gICAgcHVibGljIHN0b3BTcHJpdGVNYXJrZXIobWFya2VyOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB2YXIga2V5ID0gdGhpcy5fZ2V0S2V5RnJvbU1hcmtlck5hbWUobWFya2VyKTtcclxuICAgICAgICBpZiAoIWtleSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbWFya2VyIG5vdCBmb3VuZCcsIG1hcmtlcik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc3RvcFNwcml0ZU1hcmtlcig8c3RyaW5nPmtleSwgbWFya2VyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogc3RvcHMgcmVtb3ZlcyBhIHNvdW5kIGZyb20gRGlqb24uQXVkaW9NYW5hZ2VyJ3MgbG9va3VwXHJcbiAgICAqIEBwYXJhbSAge1N0cmluZ30ga2V5IHRoZSBrZXkgb2YgdGhlIHNvdW5kIHRvIGJlIHJlbW92ZWRcclxuICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlU291bmQoa2V5KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zb3VuZHMgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB0aGlzLl9zb3VuZHNba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fc291bmRzW2tleV0pIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wU291bmQoa2V5KTtcclxuICAgICAgICAgICAgdGhpcy5fc291bmRzW2tleV0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fc291bmRzW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBzdG9wcyByZW1vdmVzIGFuIGF1ZGlvIHNwcml0ZSBmcm9tIERpam9uLkF1ZGlvTWFuYWdlcidzIGxvb2t1cFxyXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGtleSB0aGUga2V5IG9mIHRoZSBzb3VuZCB0byBiZSByZW1vdmVkXHJcbiAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAqL1xyXG4gICAgcHVibGljIHJlbW92ZVNwcml0ZShrZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3ByaXRlcyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHRoaXMuX3Nwcml0ZXNba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0b3BTcHJpdGVNYXJrZXIoa2V5KTtcclxuICAgICAgICB0aGlzLl9zcHJpdGVzW2tleV0gPSBudWxsO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9zcHJpdGVzW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZhZGUoc291bmQ6IFBoYXNlci5Tb3VuZCwgdm9sdW1lOiBudW1iZXIsIHRpbWU6IG51bWJlciwgc3RvcDogYm9vbGVhbiA9IGZhbHNlKTogUGhhc2VyLlR3ZWVuIHtcclxuICAgICAgICBpZiAoIXNvdW5kKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGlmIChzb3VuZC5mYWRlVHdlZW4gJiYgc291bmQuZmFkZVR3ZWVuKVxyXG4gICAgICAgICAgICB0aGlzLmdhbWUudHdlZW5zLnJlbW92ZShzb3VuZC5mYWRlVHdlZW4pO1xyXG5cclxuICAgICAgICBzb3VuZC5mYWRlVHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKHNvdW5kKS50byh7XHJcbiAgICAgICAgICAgIHZvbHVtZTogdm9sdW1lXHJcbiAgICAgICAgfSwgdGltZSB8fCAzMDAsIFBoYXNlci5FYXNpbmcuTGluZWFyLk5vbmUpO1xyXG5cclxuICAgICAgICBpZiAoc3RvcCA9PT0gdHJ1ZSlcclxuICAgICAgICAgICAgc291bmQuZmFkZVR3ZWVuLm9uQ29tcGxldGUuYWRkT25jZShmdW5jdGlvbiAoKSB7IHRoaXMuX3N0b3BTb3VuZChzb3VuZCkgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHJldHVybiBzb3VuZC5mYWRlVHdlZW4uc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXR0ZXIgLyBzZXR0ZXJcclxuICAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBkZWZhdWx0IHZvbHVtZSBmb3IgYWxsIHNvdW5kcyAodXNlZCBpbiB0aGUgY2FzZSB3aGVyZSBhIHZvbHVtZSBpcyBub3Qgc3VwcGxpZWQgdG8gdGhlIHBsYXlBdWRpbywgcGxheVNvdW5kLCBvciBwbGF5U3ByaXRlTWFya2VyIG1ldGhvZHMpXHJcbiAgICAqL1xyXG4gICAgcHVibGljIHNldCBkZWZhdWx0Vm9sdW1lKHZvbDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fZGVmYXVsdFZvbHVtZSA9IHZvbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGRlZmF1bHRWb2x1bWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFZvbHVtZTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiBHYW1lXHJcbiAqL1xyXG5pbXBvcnQge0FwcGxpY2F0aW9ufSBmcm9tICcuLi9hcHBsaWNhdGlvbic7XHJcbmltcG9ydCB7SUdhbWVDb25maWd9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQge0Fzc2V0TWFuYWdlciwgVHJhbnNpdGlvbk1hbmFnZXIsIFNlcXVlbmNlTWFuYWdlciwgU3RvcmFnZU1hbmFnZXIsIEF1ZGlvTWFuYWdlciwgQW5hbHl0aWNzTWFuYWdlciwgR2FtZU9iamVjdEZhY3Rvcnl9IGZyb20gJy4uL2NvcmUnO1xyXG5pbXBvcnQge0dyb3VwfSBmcm9tICcuLi9kaXNwbGF5JztcclxuaW1wb3J0IHtOb3RpZmljYXRpb25zfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZSBleHRlbmRzIFBoYXNlci5HYW1lIHtcclxuICAgIC8vIHB1YmxpYyB2YXJpYWJsZXNcclxuICAgIC8vIGFwcGxpY2F0aW9uXHJcbiAgICBwdWJsaWMgYXBwOiBBcHBsaWNhdGlvbjtcclxuICAgIHB1YmxpYyBjb25maWc6IElHYW1lQ29uZmlnO1xyXG5cclxuICAgIC8vIG1hbmFnZXJzXHJcbiAgICBwdWJsaWMgYXNzZXQ6IEFzc2V0TWFuYWdlcjtcclxuICAgIHB1YmxpYyBzZXF1ZW5jZTogU2VxdWVuY2VNYW5hZ2VyO1xyXG4gICAgcHVibGljIHRyYW5zaXRpb246IFRyYW5zaXRpb25NYW5hZ2VyO1xyXG4gICAgcHVibGljIHN0b3JhZ2U6IFN0b3JhZ2VNYW5hZ2VyO1xyXG4gICAgcHVibGljIGF1ZGlvOiBBdWRpb01hbmFnZXI7XHJcbiAgICBwdWJsaWMgYW5hbHl0aWNzOiBBbmFseXRpY3NNYW5hZ2VyO1xyXG4gICAgcHVibGljIGFkZDogR2FtZU9iamVjdEZhY3Rvcnk7XHJcblxyXG4gICAgLy8gc2lnbmFsc1xyXG4gICAgcHVibGljIG9uV29ybGRJbnB1dERpc2FibGVkOiBQaGFzZXIuU2lnbmFsID0gbmV3IFBoYXNlci5TaWduYWwoKTtcclxuICAgIHB1YmxpYyBvbldvcmxkSW5wdXRFbmFibGVkOiBQaGFzZXIuU2lnbmFsID0gbmV3IFBoYXNlci5TaWduYWwoKTtcclxuXHJcbiAgICAvLyBkaXNwbGF5IGxheWVyc1xyXG4gICAgcHVibGljIGJhY2tncm91bmRMYXllcjogR3JvdXA7XHJcbiAgICBwdWJsaWMgZ2FtZUxheWVyOiBHcm91cDtcclxuICAgIHB1YmxpYyB1aUxheWVyOiBHcm91cDtcclxuICAgIHB1YmxpYyBzdGFnZUxheWVyOiBHcm91cDtcclxuXHJcbiAgICAvLyBQaGFzZXIuR2FtZSBvdmVycmlkZXNcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogSUdhbWVDb25maWcpIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBib290KCkge1xyXG4gICAgICAgIHN1cGVyLmJvb3QoKTtcclxuXHJcbiAgICAgICAgdGhpcy5hcHAgPSBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpO1xyXG5cclxuICAgICAgICAvLyBhZGQgbWFuYWdlcnNcclxuICAgICAgICB0aGlzLmFzc2V0ID0gbmV3IEFzc2V0TWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMuc2VxdWVuY2UgPSBuZXcgU2VxdWVuY2VNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gbmV3IFRyYW5zaXRpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gbmV3IFN0b3JhZ2VNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5hdWRpbyA9IG5ldyBBdWRpb01hbmFnZXIoKTtcclxuICAgICAgICB0aGlzLmFuYWx5dGljcyA9IG5ldyBBbmFseXRpY3NNYW5hZ2VyKHRoaXMuY29uZmlnLmFuYWx5dGljcyk7XHJcblxyXG4gICAgICAgIC8vIHJlcGxhY2UgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5XHJcbiAgICAgICAgdGhpcy5hZGQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYWRkID0gbmV3IEdhbWVPYmplY3RGYWN0b3J5KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYWRkTGF5ZXJzKCk7XHJcbiAgICAgICAgdGhpcy5hZGRNb3VzZUNhbGxiYWNrcygpO1xyXG4gICAgICAgIHRoaXMuc2V0RmFjdG9yeURlZmF1bHRMYXllcih0aGlzLmdhbWVMYXllcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFBsdWdpbnMoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnBsdWdpbnMgJiYgdGhpcy5jb25maWcucGx1Z2lucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnBsdWdpbnMuZm9yRWFjaChwbHVnaW5OYW1lID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgUGhhc2VyLlBsdWdpbltwbHVnaW5OYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkLnBsdWdpbihQaGFzZXIuUGx1Z2luW3BsdWdpbk5hbWVdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE92ZXJyaWRlIHRoaXMud29ybGQgYXMgdGhlIGRlZmF1bHQgbGF5ZXIgdGhhdFxyXG4gICAgLy8gLmFkZCBjYWxscyB3aWxsIGJlIGNyZWF0ZWQgb24uXHJcbiAgICBwdWJsaWMgc2V0RmFjdG9yeURlZmF1bHRMYXllcihuZXdMYXllcjogUGhhc2VyLkdyb3VwKSB7XHJcbiAgICAgICAgdGhpcy5hZGQuc2V0RGVmYXVsdExheWVyKG5ld0xheWVyIHx8IHRoaXMud29ybGQpO1xyXG4gICAgfVxyXG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXHJcbiAgICBwcm90ZWN0ZWQgYWRkTGF5ZXJzKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGFkZHMgcGVyc2lzdGVudCBiYWNrZ3JvdW5kIGxheWVyXHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kTGF5ZXIgPSB0aGlzLmFkZC5kR3JvdXAoMCwgMCwgJ19iYWNrZ3JvdW5kX2xheWVyJywgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5zdGFnZS5zZXRDaGlsZEluZGV4KHRoaXMuYmFja2dyb3VuZExheWVyLCAwKTtcclxuXHJcbiAgICAgICAgLy8gYWRkcyBnYW1lIGFuZCB1aSBsYXllcnNcclxuICAgICAgICB0aGlzLmdhbWVMYXllciA9IHRoaXMuYWRkLmRHcm91cCgwLCAwLCAnX2dhbWVfbGF5ZXInKTtcclxuICAgICAgICAvLyBhZGQgdWkgbGF5ZXIgYW5kIHNldCB0aGUgXCJmaXhlZFRvQ2FtZXJhXCIgcHJvcGVydHkgdG8gdHJ1ZVxyXG4gICAgICAgIC8vIGlmIHRoZSBnYW1lJ3MgY2FtZXJhIG1vdmVzLCBhbnl0aGluZyBpbiB0aGlzIGdyb3VwIHdpbGwgc3RheSBpbiBwbGFjZVxyXG4gICAgICAgIHRoaXMudWlMYXllciA9IHRoaXMuYWRkLmRHcm91cCgwLCAwLCAnX3VpX2xheWVyJyk7XHJcbiAgICAgICAgdGhpcy51aUxheWVyLmZpeGVkVG9DYW1lcmEgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBhZGQgYSBncm91cCB0byB0aGUgUGhhc2VyLlN0YWdlIChqdXN0IGluIGNhc2UpXHJcbiAgICAgICAgdGhpcy5zdGFnZUxheWVyID0gdGhpcy5hZGQuZEdyb3VwKDAsIDAsICdfc3RhZ2VfbGF5ZXInLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYWRkTW91c2VDYWxsYmFja3MoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGV2aWNlLmRlc2t0b3ApIHtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dC5tb3VzZS5tb3VzZU92ZXJDYWxsYmFjayA9IHRoaXMubW91c2VPdmVyO1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0Lm1vdXNlLm1vdXNlT3V0Q2FsbGJhY2sgPSB0aGlzLm1vdXNlT3V0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgbW91c2VPdXQoKTogdm9pZCB7XHJcbiAgICAgICAgQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5zZW5kTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbnMuTU9VU0VfTEVBVkVfR0xPQkFMKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgbW91c2VPdmVyKCk6IHZvaWQge1xyXG4gICAgICAgIEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuc2VuZE5vdGlmaWNhdGlvbihOb3RpZmljYXRpb25zLk1PVVNFX0VOVEVSX0dMT0JBTCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHVibGljIG1ldGhvZHNcclxuICAgIHB1YmxpYyBkaXNhYmxlRWxlbWVudElucHV0KGVsOiBhbnkpOiBhbnkge1xyXG4gICAgICAgIGlmIChlbC5pbnB1dCAmJiBlbC5pbnB1dEVuYWJsZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgZWwud2FzRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGVsLmlucHV0RW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZWwuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVFbGVtZW50SW5wdXQoZWwuY2hpbGRyZW5baV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbmFibGVFbGVtZW50SW5wdXQoZWw6IGFueSk6IGFueSB7XHJcbiAgICAgICAgaWYgKGVsLmlucHV0ICYmIGVsLmlucHV0RW5hYmxlZCA9PT0gZmFsc2UgJiYgZWwud2FzRW5hYmxlZCkge1xyXG4gICAgICAgICAgICBlbC53YXNFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGVsLmlucHV0RW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWwuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlRWxlbWVudElucHV0KGVsLmNoaWxkcmVuW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzYWJsZUlucHV0KGdyb3VwOiBQaGFzZXIuR3JvdXApOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBncm91cC5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgICAgICBpZiAoZWwgaW5zdGFuY2VvZiBQaGFzZXIuR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRpc2FibGVJbnB1dChlbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kaXNhYmxlRWxlbWVudElucHV0KGVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbmFibGVJbnB1dChncm91cDogUGhhc2VyLkdyb3VwKTogYW55IHtcclxuICAgICAgICByZXR1cm4gZ3JvdXAuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICAgICAgaWYgKGVsIGluc3RhbmNlb2YgUGhhc2VyLkdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbmFibGVJbnB1dChlbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbmFibGVFbGVtZW50SW5wdXQoZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc2FibGVHYW1lSW5wdXQoKSB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlSW5wdXQodGhpcy5nYW1lTGF5ZXIpO1xyXG4gICAgICAgIHRoaXMub25Xb3JsZElucHV0RGlzYWJsZWQuZGlzcGF0Y2goKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5hYmxlR2FtZUlucHV0KCkge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlSW5wdXQodGhpcy5nYW1lTGF5ZXIpO1xyXG4gICAgICAgIHRoaXMub25Xb3JsZElucHV0RW5hYmxlZC5kaXNwYXRjaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVtb3ZlcyBhbGwgaXRlbXMgZnJvbSB0aGUgZ2FtZSBsYXllclxyXG4gICAgICogYnV0IGFsbG93cyB0aGUgdWkgbGF5ZXIgdG8gcGVyc2lzdFxyXG4gICAgICogdGhhdCB3YXkgd2UgY2FuIG92ZXJsYXkgdGhlIGdhbWUgd2l0aG91dCBhZGRpbmcgc3R1ZmYgdG8gdGhlIHBoYXNlciBzdGFnZSAoZm9yIHRyYW5zaXRpb25zKVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHRvU3RhdGUgdGhlIG5ldyBzdGF0ZSB3ZSdyZSBjaGFuZ2luZyB0b1xyXG4gICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNoYW5nZVN0YXRlKHRvU3RhdGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZ2FtZUxheWVyLnJlbW92ZUFsbCh0cnVlLCB0cnVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5zdGFydCh0b1N0YXRlLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGdldHRlciAvIHNldHRlclxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXRzIHRoZSB0YXJnZXQgZ3JvdXAgZm9yIHRoZSBnYW1lT2JqZWN0RmFjdG9yeSB0byBnYW1lTGF5ZXIgYmVmb3JlIGFkZGluZ1xyXG4gICAgICogdGhpcyB3YXkgaWYgd2UgcGFzcyBhIG51bGwgZ3JvdXAgdG8gd2hhdGV2ZXIgbWV0aG9kIHdlIGNhbGxcclxuICAgICAqIGllICh0aGlzLmdhbWUuYWRkVG9HYW1lLmltYWdlKDAsIDAsIGtleSwgZnJhbWUpKTtcclxuICAgICAqIGl0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIGFwcHJvcHJpYXRlIGxheWVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYWRkVG9HYW1lKCk6IEdhbWVPYmplY3RGYWN0b3J5IHtcclxuICAgICAgICB0aGlzLmFkZC50YXJnZXRHcm91cCA9IHRoaXMuZ2FtZUxheWVyO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFkZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldHMgdGhlIHRhcmdldCBncm91cCBmb3IgdGhlIGdhbWVPYmplY3RGYWN0b3J5IHRvIHVpTGF5ZXIgYmVmb3JlIGFkZGluZ1xyXG4gICAgICogdGhpcyB3YXkgaWYgd2UgcGFzcyBhIG51bGwgZ3JvdXAgdG8gd2hhdGV2ZXIgbWV0aG9kIHdlIGNhbGxcclxuICAgICAqIGllICh0aGlzLmdhbWUuYWRkVG9VSS5pbWFnZSgwLCAwLCBrZXksIGZyYW1lKSk7XHJcbiAgICAgKiBpdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBhcHByb3ByaWF0ZSBsYXllclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGFkZFRvQmFja2dyb3VuZCgpOiBHYW1lT2JqZWN0RmFjdG9yeSB7XHJcbiAgICAgICAgdGhpcy5hZGQudGFyZ2V0R3JvdXAgPSB0aGlzLmJhY2tncm91bmRMYXllcjtcclxuICAgICAgICByZXR1cm4gdGhpcy5hZGQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXQgYWRkVG9VSSgpOiBHYW1lT2JqZWN0RmFjdG9yeSB7XHJcbiAgICAgICAgLy8gc2V0IHRoZSB0YXJnZXQgZ3JvdXAgZm9yIHRoZSBnYW1lT2JqZWN0RmFjdG9yeSBiZWZvcmUgYWRkaW5nXHJcbiAgICAgICAgdGhpcy5hZGQudGFyZ2V0R3JvdXAgPSB0aGlzLnVpTGF5ZXI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYWRkVG9TdGFnZSgpOiBHYW1lT2JqZWN0RmFjdG9yeSB7XHJcbiAgICAgICAgLy8gc2V0IHRoZSB0YXJnZXQgZ3JvdXAgZm9yIHRoZSBnYW1lT2JqZWN0RmFjdG9yeSBiZWZvcmUgYWRkaW5nXHJcbiAgICAgICAgdGhpcy5hZGQudGFyZ2V0R3JvdXAgPSB0aGlzLnN0YWdlTGF5ZXI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYWRkVG9Xb3JsZCgpOiBHYW1lT2JqZWN0RmFjdG9yeSB7XHJcbiAgICAgICAgLy8gc2V0IHRoZSB0YXJnZXQgZ3JvdXAgZm9yIHRoZSBnYW1lT2JqZWN0RmFjdG9yeSBiZWZvcmUgYWRkaW5nXHJcbiAgICAgICAgdGhpcy5hZGQudGFyZ2V0R3JvdXAgPSB0aGlzLndvcmxkO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFkZDtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiBHYW1lT2JqZWN0RmFjdG9yeVxyXG4gKi9cclxuXHJcbmltcG9ydCB7VGV4dCwgR3JvdXAsIFNwaW5lLCBTcHJpdGUsIENvbXBvbmVudCwgQml0bWFwVGV4dH0gZnJvbSAnLi4vZGlzcGxheSc7XHJcbi8qKlxyXG4gKiBHYW1lT2JqZWN0RmFjdG9yeVxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lT2JqZWN0RmFjdG9yeSBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSB7XHJcbiAgICAvLyBUaGUgbGF5ZXIgdGhlIGN1cnJlbnQgb2JqZWN0IHdpbGwgYmUgYWRkZWQgdG8uIFRoaXMgaXMgdXNlZCBieSBoZWxwZXIgZnVuY3Rpb25zIGluIEdhbWUudHMuXHJcbiAgICBwcm90ZWN0ZWQgX3RhcmdldEdyb3VwOiBQaGFzZXIuR3JvdXAgPSBudWxsO1xyXG5cclxuICAgIC8vIFRoaXMgaXMgdGhlIGxheWVyIHRoYXQgc3RhbmRhcmQgLmFkZCBjYWxscyB3aWxsIGJlIGFwcGxpZWQgdG8uXHJcbiAgICBwcm90ZWN0ZWQgX2RlZmF1bHRMYXllcjogUGhhc2VyLkdyb3VwID0gdGhpcy53b3JsZDtcclxuXHJcbiAgICAvLyBvdmVycmlkZXNcclxuICAgIC8qKlxyXG4gICAgKiBBZGRzIGFuIGV4aXN0aW5nIGRpc3BsYXkgb2JqZWN0IHRvIHRoZSBnYW1lIHdvcmxkLlxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSNleGlzdGluZ1xyXG4gICAgKiBAcGFyYW0ge2FueX0gb2JqZWN0IC0gQW4gaW5zdGFuY2Ugb2YgUGhhc2VyLlNwcml0ZSwgUGhhc2VyLkJ1dHRvbiBvciBhbnkgb3RoZXIgZGlzcGxheSBvYmplY3QuXHJcbiAgICAqIEByZXR1cm4ge2FueX0gVGhlIGNoaWxkIHRoYXQgd2FzIGFkZGVkIHRvIHRoZSBXb3JsZC5cclxuICAgICovXHJcbiAgICBwdWJsaWMgZXhpc3Rpbmcob2JqZWN0KTogYW55IHtcclxuICAgICAgICBsZXQgZ3JvdXAgPSB0aGlzLnRhcmdldEdyb3VwO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xyXG4gICAgICAgIHJldHVybiBncm91cC5hZGQob2JqZWN0KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgKiBDcmVhdGUgYSBuZXcgYEltYWdlYCBvYmplY3QuXHJcbiAgICAqXHJcbiAgICAqIEFuIEltYWdlIGlzIGEgbGlnaHQtd2VpZ2h0IG9iamVjdCB5b3UgY2FuIHVzZSB0byBkaXNwbGF5IGFueXRoaW5nIHRoYXQgZG9lc24ndCBuZWVkIHBoeXNpY3Mgb3IgYW5pbWF0aW9uLlxyXG4gICAgKlxyXG4gICAgKiBJdCBjYW4gc3RpbGwgcm90YXRlLCBzY2FsZSwgY3JvcCBhbmQgcmVjZWl2ZSBpbnB1dCBldmVudHMuXHJcbiAgICAqIFRoaXMgbWFrZXMgaXQgcGVyZmVjdCBmb3IgbG9nb3MsIGJhY2tncm91bmRzLCBzaW1wbGUgYnV0dG9ucyBhbmQgb3RoZXIgbm9uLVNwcml0ZSBncmFwaGljcy5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkjaW1hZ2VcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt4PTBdIC0gVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgSW1hZ2UuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgSW1hZ2UgbWF5IGJlIGluLlxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3k9MF0gLSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBJbWFnZS4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyBJbWFnZSBtYXkgYmUgaW4uXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfFBoYXNlci5SZW5kZXJUZXh0dXJlfFBoYXNlci5CaXRtYXBEYXRhfFBoYXNlci5WaWRlb3xQSVhJLlRleHR1cmV9IFtrZXldIC0gVGhlIGltYWdlIHVzZWQgYXMgYSB0ZXh0dXJlIGJ5IHRoaXMgZGlzcGxheSBvYmplY3QgZHVyaW5nIHJlbmRlcmluZy4gSWYgYSBzdHJpbmcgUGhhc2VyIHdpbGwgZ2V0IGZvciBhbiBlbnRyeSBpbiB0aGUgSW1hZ2UgQ2FjaGUuIE9yIGl0IGNhbiBiZSBhbiBpbnN0YW5jZSBvZiBhIFJlbmRlclRleHR1cmUsIEJpdG1hcERhdGEsIFZpZGVvIG9yIFBJWEkuVGV4dHVyZS5cclxuICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbZnJhbWVdIC0gSWYgYSBUZXh0dXJlIEF0bGFzIG9yIFNwcml0ZSBTaGVldCBpcyB1c2VkIHRoaXMgYWxsb3dzIHlvdSB0byBzcGVjaWZ5IHRoZSBmcmFtZSB0byBiZSB1c2VkLiBVc2UgZWl0aGVyIGFuIGludGVnZXIgZm9yIGEgRnJhbWUgSUQgb3IgYSBzdHJpbmcgZm9yIGEgZnJhbWUgbmFtZS5cclxuICAgICogQHBhcmFtIHtQaGFzZXIuR3JvdXB9IFtncm91cF0gLSBPcHRpb25hbCBHcm91cCB0byBhZGQgdGhlIG9iamVjdCB0by4gSWYgbm90IHNwZWNpZmllZCBpdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBXb3JsZCBncm91cC5cclxuICAgICogQHJldHVybnMge1BoYXNlci5JbWFnZX0gVGhlIG5ld2x5IGNyZWF0ZWQgSW1hZ2Ugb2JqZWN0LlxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBpbWFnZSh4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCBrZXk/OiBzdHJpbmcgfCBQaGFzZXIuUmVuZGVyVGV4dHVyZSB8IFBoYXNlci5CaXRtYXBEYXRhIHwgUElYSS5UZXh0dXJlLCBmcmFtZT86IHN0cmluZyB8IG51bWJlciwgZ3JvdXA/OiBQaGFzZXIuR3JvdXApOiBQaGFzZXIuSW1hZ2Uge1xyXG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy50YXJnZXRHcm91cDsgfVxyXG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xyXG4gICAgICAgIHJldHVybiBncm91cC5hZGQobmV3IFBoYXNlci5JbWFnZSh0aGlzLmdhbWUsIHgsIHksIGtleSwgZnJhbWUpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogQ3JlYXRlIGEgbmV3IFNwcml0ZSB3aXRoIHNwZWNpZmljIHBvc2l0aW9uIGFuZCBzcHJpdGUgc2hlZXQga2V5LlxyXG4gICAgKlxyXG4gICAgKiBBdCBpdHMgbW9zdCBiYXNpYyBhIFNwcml0ZSBjb25zaXN0cyBvZiBhIHNldCBvZiBjb29yZGluYXRlcyBhbmQgYSB0ZXh0dXJlIHRoYXQgaXMgdXNlZCB3aGVuIHJlbmRlcmVkLlxyXG4gICAgKiBUaGV5IGFsc28gY29udGFpbiBhZGRpdGlvbmFsIHByb3BlcnRpZXMgYWxsb3dpbmcgZm9yIHBoeXNpY3MgbW90aW9uICh2aWEgU3ByaXRlLmJvZHkpLCBpbnB1dCBoYW5kbGluZyAodmlhIFNwcml0ZS5pbnB1dCksXHJcbiAgICAqIGV2ZW50cyAodmlhIFNwcml0ZS5ldmVudHMpLCBhbmltYXRpb24gKHZpYSBTcHJpdGUuYW5pbWF0aW9ucyksIGNhbWVyYSBjdWxsaW5nIGFuZCBtb3JlLiBQbGVhc2Ugc2VlIHRoZSBFeGFtcGxlcyBmb3IgdXNlIGNhc2VzLlxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSNzcHJpdGVcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt4PTBdIC0gVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgc3ByaXRlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIHNwcml0ZSBtYXkgYmUgaW4uXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeT0wXSAtIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIHNwcml0ZS4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyBzcHJpdGUgbWF5IGJlIGluLlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xQaGFzZXIuUmVuZGVyVGV4dHVyZXxQaGFzZXIuQml0bWFwRGF0YXxQaGFzZXIuVmlkZW98UElYSS5UZXh0dXJlfSBba2V5XSAtIFRoZSBpbWFnZSB1c2VkIGFzIGEgdGV4dHVyZSBieSB0aGlzIGRpc3BsYXkgb2JqZWN0IGR1cmluZyByZW5kZXJpbmcuIElmIGEgc3RyaW5nIFBoYXNlciB3aWxsIGdldCBmb3IgYW4gZW50cnkgaW4gdGhlIEltYWdlIENhY2hlLiBPciBpdCBjYW4gYmUgYW4gaW5zdGFuY2Ugb2YgYSBSZW5kZXJUZXh0dXJlLCBCaXRtYXBEYXRhLCBWaWRlbyBvciBQSVhJLlRleHR1cmUuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW2ZyYW1lXSAtIElmIGEgVGV4dHVyZSBBdGxhcyBvciBTcHJpdGUgU2hlZXQgaXMgdXNlZCB0aGlzIGFsbG93cyB5b3UgdG8gc3BlY2lmeSB0aGUgZnJhbWUgdG8gYmUgdXNlZC4gVXNlIGVpdGhlciBhbiBpbnRlZ2VyIGZvciBhIEZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXHJcbiAgICAqIEBwYXJhbSB7UGhhc2VyLkdyb3VwfSBbZ3JvdXBdIC0gT3B0aW9uYWwgR3JvdXAgdG8gYWRkIHRoZSBvYmplY3QgdG8uIElmIG5vdCBzcGVjaWZpZWQgaXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgV29ybGQgZ3JvdXAuXHJcbiAgICAqIEByZXR1cm5zIHtQaGFzZXIuU3ByaXRlfSBUaGUgbmV3bHkgY3JlYXRlZCBTcHJpdGUgb2JqZWN0LlxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBzcHJpdGUoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwga2V5Pzogc3RyaW5nIHwgUElYSS5UZXh0dXJlLCBmcmFtZT86IHN0cmluZyB8IG51bWJlciwgZ3JvdXA/OiBQaGFzZXIuR3JvdXApOiBQaGFzZXIuU3ByaXRlIHtcclxuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCkgeyBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7IH1cclxuICAgICAgICB0aGlzLnRhcmdldEdyb3VwID0gbnVsbDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGdyb3VwLmNyZWF0ZSh4LCB5LCBrZXksIGZyYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogQ3JlYXRlIGEgbmV3IENyZWF0dXJlIEFuaW1hdGlvbiBvYmplY3QuXHJcbiAgICAqXHJcbiAgICAqIENyZWF0dXJlIGlzIGEgY3VzdG9tIEdhbWUgT2JqZWN0IHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgQ3JlYXR1cmUgUnVudGltZSBsaWJyYXJpZXMgYnkgS2VzdHJlbCBNb29uIFN0dWRpb3MuXHJcbiAgICAqXHJcbiAgICAqIEl0IGFsbG93cyB5b3UgdG8gZGlzcGxheSBhbmltYXRlZCBHYW1lIE9iamVjdHMgdGhhdCB3ZXJlIGNyZWF0ZWQgd2l0aCB0aGUgW0NyZWF0dXJlIEF1dG9tYXRlZCBBbmltYXRpb24gVG9vbF0oaHR0cDovL3d3dy5rZXN0cmVsbW9vbi5jb20vY3JlYXR1cmUvKS5cclxuICAgICpcclxuICAgICogTm90ZSAxOiBZb3UgY2FuIG9ubHkgdXNlIFBoYXNlci5DcmVhdHVyZSBvYmplY3RzIGluIFdlYkdMIGVuYWJsZWQgZ2FtZXMuIFRoZXkgZG8gbm90IHdvcmsgaW4gQ2FudmFzIG1vZGUgZ2FtZXMuXHJcbiAgICAqXHJcbiAgICAqIE5vdGUgMjogWW91IG11c3QgdXNlIGEgYnVpbGQgb2YgUGhhc2VyIHRoYXQgaW5jbHVkZXMgdGhlIENyZWF0dXJlTWVzaEJvbmUuanMgcnVudGltZSBhbmQgZ2wtbWF0cml4LmpzLCBvciBoYXZlIHRoZW1cclxuICAgICogbG9hZGVkIGJlZm9yZSB5b3VyIFBoYXNlciBnYW1lIGJvb3RzLlxyXG4gICAgKlxyXG4gICAgKiBTZWUgdGhlIFBoYXNlciBjdXN0b20gYnVpbGQgcHJvY2VzcyBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSNjcmVhdHVyZVxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3g9MF0gLSBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBjcmVhdHVyZS4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyBjcmVhdHVyZSBtYXkgYmUgaW4uXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeT0wXSAtIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIGNyZWF0dXJlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIGNyZWF0dXJlIG1heSBiZSBpbi5cclxuICAgICogQHBhcmFtIHtzdHJpbmd8UElYSS5UZXh0dXJlfSBba2V5XSAtIFRoZSBpbWFnZSB1c2VkIGFzIGEgdGV4dHVyZSBieSB0aGlzIGNyZWF0dXJlIG9iamVjdCBkdXJpbmcgcmVuZGVyaW5nLiBJZiBhIHN0cmluZyBQaGFzZXIgd2lsbCBnZXQgZm9yIGFuIGVudHJ5IGluIHRoZSBJbWFnZSBDYWNoZS4gT3IgaXQgY2FuIGJlIGFuIGluc3RhbmNlIG9mIGEgUElYSS5UZXh0dXJlLlxyXG4gICAgKiBAcGFyYW0ge1BoYXNlci5Hcm91cH0gW2dyb3VwXSAtIE9wdGlvbmFsIEdyb3VwIHRvIGFkZCB0aGUgb2JqZWN0IHRvLiBJZiBub3Qgc3BlY2lmaWVkIGl0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIERlZmF1bHQgTGF5ZXIgZ3JvdXAuXHJcbiAgICAqIEByZXR1cm5zIHtQaGFzZXIuQ3JlYXR1cmV9IFRoZSBuZXdseSBjcmVhdGVkIFNwcml0ZSBvYmplY3QuXHJcbiAgICAqL1xyXG4gICAgcHVibGljIGNyZWF0dXJlKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIGtleT86IHN0cmluZywgbWVzaD86IGFueSwgZ3JvdXA/OiBQaGFzZXIuR3JvdXApOiBhbnkge1xyXG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy50YXJnZXRHcm91cDsgfVxyXG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xyXG5cclxuICAgICAgICB2YXIgb2JqID0gbmV3IFBoYXNlclsnQ3JlYXR1cmUnXSh0aGlzLmdhbWUsIHgsIHksIGtleSwgbWVzaCk7XHJcblxyXG4gICAgICAgIGdyb3VwLmFkZChvYmopO1xyXG5cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBBIEdyb3VwIGlzIGEgY29udGFpbmVyIGZvciBkaXNwbGF5IG9iamVjdHMgdGhhdCBhbGxvd3MgZm9yIGZhc3QgcG9vbGluZywgcmVjeWNsaW5nIGFuZCBjb2xsaXNpb24gY2hlY2tzLlxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSNncm91cFxyXG4gICAgKiBAcGFyYW0ge2FueX0gW3BhcmVudF0gLSBUaGUgcGFyZW50IEdyb3VwIG9yIERpc3BsYXlPYmplY3RDb250YWluZXIgdGhhdCB3aWxsIGhvbGQgdGhpcyBncm91cCwgaWYgYW55LiBJZiBzZXQgdG8gbnVsbCB0aGUgR3JvdXAgd29uJ3QgYmUgYWRkZWQgdG8gdGhlIGRpc3BsYXkgbGlzdC4gSWYgdW5kZWZpbmVkIGl0IHdpbGwgYmUgYWRkZWQgdG8gV29ybGQgYnkgZGVmYXVsdC5cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lPSdncm91cCddIC0gQSBuYW1lIGZvciB0aGlzIEdyb3VwLiBOb3QgdXNlZCBpbnRlcm5hbGx5IGJ1dCB1c2VmdWwgZm9yIGRlYnVnZ2luZy5cclxuICAgICogQHBhcmFtIHtib29sZWFufSBbYWRkVG9TdGFnZT1mYWxzZV0gLSBJZiBzZXQgdG8gdHJ1ZSB0aGlzIEdyb3VwIHdpbGwgYmUgYWRkZWQgZGlyZWN0bHkgdG8gdGhlIEdhbWUuU3RhZ2UgaW5zdGVhZCBvZiBHYW1lLldvcmxkLlxyXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtlbmFibGVCb2R5PWZhbHNlXSAtIElmIHRydWUgYWxsIFNwcml0ZXMgY3JlYXRlZCB3aXRoIGBHcm91cC5jcmVhdGVgIG9yIGBHcm91cC5jcmVhdGVNdWxpdHBsZWAgd2lsbCBoYXZlIGEgcGh5c2ljcyBib2R5IGNyZWF0ZWQgb24gdGhlbS4gQ2hhbmdlIHRoZSBib2R5IHR5cGUgd2l0aCBwaHlzaWNzQm9keVR5cGUuXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbcGh5c2ljc0JvZHlUeXBlPTBdIC0gSWYgZW5hYmxlQm9keSBpcyB0cnVlIHRoaXMgaXMgdGhlIHR5cGUgb2YgcGh5c2ljcyBib2R5IHRoYXQgaXMgY3JlYXRlZCBvbiBuZXcgU3ByaXRlcy4gUGhhc2VyLlBoeXNpY3MuQVJDQURFLCBQaGFzZXIuUGh5c2ljcy5QMiwgUGhhc2VyLlBoeXNpY3MuTklOSkEsIGV0Yy5cclxuICAgICogQHJldHVybiB7UGhhc2VyLkdyb3VwfSBUaGUgbmV3bHkgY3JlYXRlZCBHcm91cC5cclxuICAgICovXHJcbiAgICBwdWJsaWMgZ3JvdXAocGFyZW50PzogYW55LCBuYW1lOiBzdHJpbmcgPSAnZ3JvdXAnLCBhZGRUb1N0YWdlOiBib29sZWFuID0gZmFsc2UsIGVuYWJsZUJvZHk6IGJvb2xlYW4gPSBmYWxzZSwgcGh5c2ljc0JvZHlUeXBlOiBudW1iZXIgPSAwKSB7XHJcbiAgICAgICAgaWYgKHBhcmVudCA9PT0gdW5kZWZpbmVkICYmIGFkZFRvU3RhZ2UgIT09IHRydWUpIHsgcGFyZW50ID0gdGhpcy50YXJnZXRHcm91cDsgfVxyXG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xyXG4gICAgICAgIHJldHVybiBuZXcgUGhhc2VyLkdyb3VwKHRoaXMuZ2FtZSwgcGFyZW50LCBuYW1lLCBhZGRUb1N0YWdlLCBlbmFibGVCb2R5LCBwaHlzaWNzQm9keVR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBBIEdyb3VwIGlzIGEgY29udGFpbmVyIGZvciBkaXNwbGF5IG9iamVjdHMgdGhhdCBhbGxvd3MgZm9yIGZhc3QgcG9vbGluZywgcmVjeWNsaW5nIGFuZCBjb2xsaXNpb24gY2hlY2tzLlxyXG4gICAgKlxyXG4gICAgKiBBIFBoeXNpY3MgR3JvdXAgaXMgdGhlIHNhbWUgYXMgYW4gb3JkaW5hcnkgR3JvdXAgZXhjZXB0IHRoYXQgaXMgaGFzIGVuYWJsZUJvZHkgdHVybmVkIG9uIGJ5IGRlZmF1bHQsIHNvIGFueSBTcHJpdGVzIGl0IGNyZWF0ZXNcclxuICAgICogYXJlIGF1dG9tYXRpY2FsbHkgZ2l2ZW4gYSBwaHlzaWNzIGJvZHkuXHJcbiAgICAqXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5I3BoeXNpY3NHcm91cFxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3BoeXNpY3NCb2R5VHlwZT1QaGFzZXIuUGh5c2ljcy5BUkNBREVdIC0gSWYgZW5hYmxlQm9keSBpcyB0cnVlIHRoaXMgaXMgdGhlIHR5cGUgb2YgcGh5c2ljcyBib2R5IHRoYXQgaXMgY3JlYXRlZCBvbiBuZXcgU3ByaXRlcy4gUGhhc2VyLlBoeXNpY3MuQVJDQURFLCBQaGFzZXIuUGh5c2ljcy5QMiwgUGhhc2VyLlBoeXNpY3MuTklOSkEsIGV0Yy5cclxuICAgICogQHBhcmFtIHthbnl9IFtwYXJlbnRdIC0gVGhlIHBhcmVudCBHcm91cCBvciBEaXNwbGF5T2JqZWN0Q29udGFpbmVyIHRoYXQgd2lsbCBob2xkIHRoaXMgZ3JvdXAsIGlmIGFueS4gSWYgc2V0IHRvIG51bGwgdGhlIEdyb3VwIHdvbid0IGJlIGFkZGVkIHRvIHRoZSBkaXNwbGF5IGxpc3QuIElmIHVuZGVmaW5lZCBpdCB3aWxsIGJlIGFkZGVkIHRvIFdvcmxkIGJ5IGRlZmF1bHQuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZT0nZ3JvdXAnXSAtIEEgbmFtZSBmb3IgdGhpcyBHcm91cC4gTm90IHVzZWQgaW50ZXJuYWxseSBidXQgdXNlZnVsIGZvciBkZWJ1Z2dpbmcuXHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2FkZFRvU3RhZ2U9ZmFsc2VdIC0gSWYgc2V0IHRvIHRydWUgdGhpcyBHcm91cCB3aWxsIGJlIGFkZGVkIGRpcmVjdGx5IHRvIHRoZSBHYW1lLlN0YWdlIGluc3RlYWQgb2YgR2FtZS5Xb3JsZC5cclxuICAgICogQHJldHVybiB7UGhhc2VyLkdyb3VwfSBUaGUgbmV3bHkgY3JlYXRlZCBHcm91cC5cclxuICAgICovXHJcbiAgICBwdWJsaWMgcGh5c2ljc0dyb3VwKHBoeXNpY3NCb2R5VHlwZTogbnVtYmVyID0gMCwgcGFyZW50PzogYW55LCBuYW1lOiBzdHJpbmcgPSAnZ3JvdXAnLCBhZGRUb1N0YWdlOiBib29sZWFuID0gZmFsc2UpOiBQaGFzZXIuR3JvdXAge1xyXG4gICAgICAgIGlmIChwYXJlbnQgPT09IHVuZGVmaW5lZCkgeyBwYXJlbnQgPSB0aGlzLnRhcmdldEdyb3VwOyB9XHJcbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQaGFzZXIuR3JvdXAodGhpcy5nYW1lLCBwYXJlbnQsIG5hbWUsIGFkZFRvU3RhZ2UsIHRydWUsIHBoeXNpY3NCb2R5VHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEEgU3ByaXRlQmF0Y2ggaXMgYSByZWFsbHkgZmFzdCB2ZXJzaW9uIG9mIGEgUGhhc2VyIEdyb3VwIGJ1aWx0IHNvbGVseSBmb3Igc3BlZWQuXHJcbiAgICAqIFVzZSB3aGVuIHlvdSBuZWVkIGEgbG90IG9mIHNwcml0ZXMgb3IgcGFydGljbGVzIGFsbCBzaGFyaW5nIHRoZSBzYW1lIHRleHR1cmUuXHJcbiAgICAqIFRoZSBzcGVlZCBnYWlucyBhcmUgc3BlY2lmaWNhbGx5IGZvciBXZWJHTC4gSW4gQ2FudmFzIG1vZGUgeW91IHdvbid0IHNlZSBhbnkgcmVhbCBkaWZmZXJlbmNlLlxyXG4gICAgKlxyXG4gICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSNzcHJpdGVCYXRjaFxyXG4gICAgKiBAcGFyYW0ge1BoYXNlci5Hcm91cHxudWxsfSBwYXJlbnQgLSBUaGUgcGFyZW50IEdyb3VwIHRoYXQgd2lsbCBob2xkIHRoaXMgU3ByaXRlIEJhdGNoLiBTZXQgdG8gYHVuZGVmaW5lZGAgb3IgYG51bGxgIHRvIGFkZCBkaXJlY3RseSB0byBnYW1lLndvcmxkLlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW25hbWU9J2dyb3VwJ10gLSBBIG5hbWUgZm9yIHRoaXMgU3ByaXRlIEJhdGNoLiBOb3QgdXNlZCBpbnRlcm5hbGx5IGJ1dCB1c2VmdWwgZm9yIGRlYnVnZ2luZy5cclxuICAgICogQHBhcmFtIHtib29sZWFufSBbYWRkVG9TdGFnZT1mYWxzZV0gLSBJZiBzZXQgdG8gdHJ1ZSB0aGlzIFNwcml0ZSBCYXRjaCB3aWxsIGJlIGFkZGVkIGRpcmVjdGx5IHRvIHRoZSBHYW1lLlN0YWdlIGluc3RlYWQgb2YgdGhlIHBhcmVudC5cclxuICAgICogQHJldHVybiB7UGhhc2VyLlNwcml0ZUJhdGNofSBUaGUgbmV3bHkgY3JlYXRlZCBTcHJpdGUgQmF0Y2guXHJcbiAgICAqL1xyXG4gICAgcHVibGljIHNwcml0ZUJhdGNoKHBhcmVudD86IGFueSwgbmFtZTogc3RyaW5nID0gXCJzcHJpdGVCYXRjaFwiLCBhZGRUb1N0YWdlOiBib29sZWFuID0gZmFsc2UpOiBQaGFzZXIuU3ByaXRlQmF0Y2gge1xyXG4gICAgICAgIGlmIChwYXJlbnQgPT09IHVuZGVmaW5lZCkgeyBwYXJlbnQgPSB0aGlzLnRhcmdldEdyb3VwIH1cclxuICAgICAgICB0aGlzLnRhcmdldEdyb3VwID0gbnVsbDtcclxuICAgICAgICByZXR1cm4gbmV3IFBoYXNlci5TcHJpdGVCYXRjaCh0aGlzLmdhbWUsIHBhcmVudCwgbmFtZSwgYWRkVG9TdGFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBUaWxlU3ByaXRlIG9iamVjdC5cclxuICAgKlxyXG4gICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5I3RpbGVTcHJpdGVcclxuICAgKiBAcGFyYW0ge251bWJlcn0geCAtIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIFRpbGVTcHJpdGUuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgVGlsZVNwcml0ZSBtYXkgYmUgaW4uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHkgLSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBUaWxlU3ByaXRlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIFRpbGVTcHJpdGUgbWF5IGJlIGluLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAtIFRoZSB3aWR0aCBvZiB0aGUgVGlsZVNwcml0ZS5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IC0gVGhlIGhlaWdodCBvZiB0aGUgVGlsZVNwcml0ZS5cclxuICAgKiBAcGFyYW0ge3N0cmluZ3xQaGFzZXIuUmVuZGVyVGV4dHVyZXxQaGFzZXIuQml0bWFwRGF0YXxQaGFzZXIuVmlkZW98UElYSS5UZXh0dXJlfSBrZXkgLSBUaGUgaW1hZ2UgdXNlZCBhcyBhIHRleHR1cmUgYnkgdGhpcyBkaXNwbGF5IG9iamVjdCBkdXJpbmcgcmVuZGVyaW5nLiBJZiBhIHN0cmluZyBQaGFzZXIgd2lsbCBnZXQgZm9yIGFuIGVudHJ5IGluIHRoZSBJbWFnZSBDYWNoZS4gT3IgaXQgY2FuIGJlIGFuIGluc3RhbmNlIG9mIGEgUmVuZGVyVGV4dHVyZSwgQml0bWFwRGF0YSwgVmlkZW8gb3IgUElYSS5UZXh0dXJlLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW2ZyYW1lXSAtIElmIGEgVGV4dHVyZSBBdGxhcyBvciBTcHJpdGUgU2hlZXQgaXMgdXNlZCB0aGlzIGFsbG93cyB5b3UgdG8gc3BlY2lmeSB0aGUgZnJhbWUgdG8gYmUgdXNlZC4gVXNlIGVpdGhlciBhbiBpbnRlZ2VyIGZvciBhIEZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXHJcbiAgICogQHBhcmFtIHtQaGFzZXIuR3JvdXB9IFtncm91cF0gLSBPcHRpb25hbCBHcm91cCB0byBhZGQgdGhlIG9iamVjdCB0by4gSWYgbm90IHNwZWNpZmllZCBpdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBEZWZhdWx0IExheWVyIGdyb3VwLlxyXG4gICAqIEByZXR1cm4ge1BoYXNlci5UaWxlU3ByaXRlfSBUaGUgbmV3bHkgY3JlYXRlZCBUaWxlU3ByaXRlIG9iamVjdC5cclxuICAgKi9cclxuICAgIHB1YmxpYyB0aWxlU3ByaXRlKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIHdpZHRoOiBudW1iZXIgPSAwLCBoZWlnaHQ6IG51bWJlciA9IDAsIGtleT86IHN0cmluZywgZnJhbWU/OiBzdHJpbmcgfCBudW1iZXIsIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogUGhhc2VyLlRpbGVTcHJpdGUge1xyXG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy50YXJnZXRHcm91cDsgfVxyXG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xyXG4gICAgICAgIHJldHVybiBncm91cC5hZGQobmV3IFBoYXNlci5UaWxlU3ByaXRlKHRoaXMuZ2FtZSwgeCwgeSwgd2lkdGgsIGhlaWdodCwga2V5LCBmcmFtZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgUm9wZSBvYmplY3QuXHJcbiAgICpcclxuICAgKiBFeGFtcGxlIHVzYWdlOiBodHRwczovL2dpdGh1Yi5jb20vY29kZXZpbnNreS9waGFzZXItcm9wZS1kZW1vL2Jsb2IvbWFzdGVyL2Rpc3QvZGVtby5qc1xyXG4gICAqXHJcbiAgICogQG1ldGhvZCBQaGFzZXIuR2FtZU9iamVjdEZhY3Rvcnkjcm9wZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbeD0wXSAtIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIFJvcGUuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgcm9wZSBtYXkgYmUgaW4uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IFt5PTBdIC0gVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgUm9wZS4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyByb3BlIG1heSBiZSBpbi5cclxuICAgKiBAcGFyYW0ge3N0cmluZ3xQaGFzZXIuUmVuZGVyVGV4dHVyZXxQaGFzZXIuQml0bWFwRGF0YXxQaGFzZXIuVmlkZW98UElYSS5UZXh0dXJlfSBba2V5XSAtIFRoZSBpbWFnZSB1c2VkIGFzIGEgdGV4dHVyZSBieSB0aGlzIGRpc3BsYXkgb2JqZWN0IGR1cmluZyByZW5kZXJpbmcuIElmIGEgc3RyaW5nIFBoYXNlciB3aWxsIGdldCBmb3IgYW4gZW50cnkgaW4gdGhlIEltYWdlIENhY2hlLiBPciBpdCBjYW4gYmUgYW4gaW5zdGFuY2Ugb2YgYSBSZW5kZXJUZXh0dXJlLCBCaXRtYXBEYXRhLCBWaWRlbyBvciBQSVhJLlRleHR1cmUuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbZnJhbWVdIC0gSWYgYSBUZXh0dXJlIEF0bGFzIG9yIFNwcml0ZSBTaGVldCBpcyB1c2VkIHRoaXMgYWxsb3dzIHlvdSB0byBzcGVjaWZ5IHRoZSBmcmFtZSB0byBiZSB1c2VkLiBVc2UgZWl0aGVyIGFuIGludGVnZXIgZm9yIGEgRnJhbWUgSUQgb3IgYSBzdHJpbmcgZm9yIGEgZnJhbWUgbmFtZS5cclxuICAgKiBAcGFyYW0ge0FycmF5fSBwb2ludHMgLSBBbiBhcnJheSBvZiB7UGhhc2VyLlBvaW50fS5cclxuICAgKiBAcGFyYW0ge1BoYXNlci5Hcm91cH0gW2dyb3VwXSAtIE9wdGlvbmFsIEdyb3VwIHRvIGFkZCB0aGUgb2JqZWN0IHRvLiBJZiBub3Qgc3BlY2lmaWVkIGl0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIERlZmF1bHQgTGF5ZXIgZ3JvdXAuXHJcbiAgICogQHJldHVybiB7UGhhc2VyLlJvcGV9IFRoZSBuZXdseSBjcmVhdGVkIFJvcGUgb2JqZWN0LlxyXG4gICAqL1xyXG4gICAgcHVibGljIHJvcGUoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwga2V5Pzogc3RyaW5nLCBmcmFtZT86IHN0cmluZyB8IG51bWJlciwgcG9pbnRzPzogUGhhc2VyLlBvaW50W10sIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogUGhhc2VyLlJvcGUge1xyXG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy50YXJnZXRHcm91cDsgfVxyXG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xyXG4gICAgICAgIHJldHVybiBncm91cC5hZGQobmV3IFBoYXNlci5Sb3BlKHRoaXMuZ2FtZSwgeCwgeSwga2V5LCBmcmFtZSwgcG9pbnRzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBuZXcgVGV4dCBvYmplY3QuXHJcbiAgICAqXHJcbiAgICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5I3RleHRcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt4PTBdIC0gVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgVGV4dC4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyB0ZXh0IG1heSBiZSBpbi5cclxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt5PTBdIC0gVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgVGV4dC4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyB0ZXh0IG1heSBiZSBpbi5cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFt0ZXh0PScnXSAtIFRoZSB0ZXh0IHN0cmluZyB0aGF0IHdpbGwgYmUgZGlzcGxheWVkLlxyXG4gICAgKiBAcGFyYW0ge29iamVjdH0gW3N0eWxlXSAtIFRoZSBzdHlsZSBvYmplY3QgY29udGFpbmluZyBzdHlsZSBhdHRyaWJ1dGVzIGxpa2UgZm9udCwgZm9udCBzaXplICwgZXRjLlxyXG4gICAgKiBAcGFyYW0ge1BoYXNlci5Hcm91cH0gW2dyb3VwXSAtIE9wdGlvbmFsIEdyb3VwIHRvIGFkZCB0aGUgb2JqZWN0IHRvLiBJZiBub3Qgc3BlY2lmaWVkIGl0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIERlZmF1bHQgTGF5ZXIgZ3JvdXAuXHJcbiAgICAqIEByZXR1cm4ge1BoYXNlci5UZXh0fSBUaGUgbmV3bHkgY3JlYXRlZCB0ZXh0IG9iamVjdC5cclxuICAgICovXHJcbiAgICBwdWJsaWMgdGV4dCh4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCB0ZXh0OiBzdHJpbmcgPSAnJywgc3R5bGU/OiBQaGFzZXIuUGhhc2VyVGV4dFN0eWxlLCBncm91cD86IFBoYXNlci5Hcm91cCk6IFBoYXNlci5UZXh0IHtcclxuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCkgeyBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7IH1cclxuICAgICAgICB0aGlzLnRhcmdldEdyb3VwID0gbnVsbDtcclxuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBQaGFzZXIuVGV4dCh0aGlzLmdhbWUsIHgsIHksIHRleHQsIHN0eWxlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBuZXcgQnV0dG9uIG9iamVjdC5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkjYnV0dG9uXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeD0wXSAtIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIEJ1dHRvbi4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyBidXR0b24gbWF5IGJlIGluLlxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3k9MF0gLSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBCdXR0b24uIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgYnV0dG9uIG1heSBiZSBpbi5cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtrZXldIC0gVGhlIGltYWdlIGtleSBhcyBkZWZpbmVkIGluIHRoZSBHYW1lLkNhY2hlIHRvIHVzZSBhcyB0aGUgdGV4dHVyZSBmb3IgdGhpcyBidXR0b24uXHJcbiAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYWxsYmFja10gLSBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoaXMgYnV0dG9uIGlzIHByZXNzZWRcclxuICAgICogQHBhcmFtIHtvYmplY3R9IFtjYWxsYmFja0NvbnRleHRdIC0gVGhlIGNvbnRleHQgaW4gd2hpY2ggdGhlIGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkICh1c3VhbGx5ICd0aGlzJylcclxuICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbb3ZlckZyYW1lXSAtIFRoaXMgaXMgdGhlIGZyYW1lIG9yIGZyYW1lTmFtZSB0aGF0IHdpbGwgYmUgc2V0IHdoZW4gdGhpcyBidXR0b24gaXMgaW4gYW4gb3ZlciBzdGF0ZS4gR2l2ZSBlaXRoZXIgYSBudW1iZXIgdG8gdXNlIGEgZnJhbWUgSUQgb3IgYSBzdHJpbmcgZm9yIGEgZnJhbWUgbmFtZS5cclxuICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbb3V0RnJhbWVdIC0gVGhpcyBpcyB0aGUgZnJhbWUgb3IgZnJhbWVOYW1lIHRoYXQgd2lsbCBiZSBzZXQgd2hlbiB0aGlzIGJ1dHRvbiBpcyBpbiBhbiBvdXQgc3RhdGUuIEdpdmUgZWl0aGVyIGEgbnVtYmVyIHRvIHVzZSBhIGZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW2Rvd25GcmFtZV0gLSBUaGlzIGlzIHRoZSBmcmFtZSBvciBmcmFtZU5hbWUgdGhhdCB3aWxsIGJlIHNldCB3aGVuIHRoaXMgYnV0dG9uIGlzIGluIGEgZG93biBzdGF0ZS4gR2l2ZSBlaXRoZXIgYSBudW1iZXIgdG8gdXNlIGEgZnJhbWUgSUQgb3IgYSBzdHJpbmcgZm9yIGEgZnJhbWUgbmFtZS5cclxuICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbdXBGcmFtZV0gLSBUaGlzIGlzIHRoZSBmcmFtZSBvciBmcmFtZU5hbWUgdGhhdCB3aWxsIGJlIHNldCB3aGVuIHRoaXMgYnV0dG9uIGlzIGluIGFuIHVwIHN0YXRlLiBHaXZlIGVpdGhlciBhIG51bWJlciB0byB1c2UgYSBmcmFtZSBJRCBvciBhIHN0cmluZyBmb3IgYSBmcmFtZSBuYW1lLlxyXG4gICAgKiBAcGFyYW0ge1BoYXNlci5Hcm91cH0gW2dyb3VwXSAtIE9wdGlvbmFsIEdyb3VwIHRvIGFkZCB0aGUgb2JqZWN0IHRvLiBJZiBub3Qgc3BlY2lmaWVkIGl0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIERlZmF1bHQgTGF5ZXIgZ3JvdXAuXHJcbiAgICAqIEByZXR1cm4ge1BoYXNlci5CdXR0b259IFRoZSBuZXdseSBjcmVhdGVkIEJ1dHRvbiBvYmplY3QuXHJcbiAgICAqL1xyXG4gICAgcHVibGljIGJ1dHRvbih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCBrZXk/OiBzdHJpbmcsIGNhbGxiYWNrPzogRnVuY3Rpb24sIGNhbGxiYWNrQ29udGV4dD86IE9iamVjdCwgb3ZlckZyYW1lPzogc3RyaW5nIHwgbnVtYmVyLCBvdXRGcmFtZT86IHN0cmluZyB8IG51bWJlciwgZG93bkZyYW1lPzogc3RyaW5nIHwgbnVtYmVyLCB1cEZyYW1lPzogc3RyaW5nIHwgbnVtYmVyLCBncm91cD86IFBoYXNlci5Hcm91cCk6IFBoYXNlci5CdXR0b24ge1xyXG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy50YXJnZXRHcm91cDsgfVxyXG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xyXG4gICAgICAgIHJldHVybiBncm91cC5hZGQobmV3IFBoYXNlci5CdXR0b24odGhpcy5nYW1lLCB4LCB5LCBrZXksIGNhbGxiYWNrLCBjYWxsYmFja0NvbnRleHQsIG92ZXJGcmFtZSwgb3V0RnJhbWUsIGRvd25GcmFtZSwgdXBGcmFtZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgbmV3IEdyYXBoaWNzIG9iamVjdC5cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkjZ3JhcGhpY3NcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt4PTBdIC0gVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgR3JhcGhpYy4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyBvYmplY3QgbWF5IGJlIGluLlxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3k9MF0gLSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBHcmFwaGljLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIG9iamVjdCBtYXkgYmUgaW4uXHJcbiAgICAqIEBwYXJhbSB7UGhhc2VyLkdyb3VwfSBbZ3JvdXBdIC0gT3B0aW9uYWwgR3JvdXAgdG8gYWRkIHRoZSBvYmplY3QgdG8uIElmIG5vdCBzcGVjaWZpZWQgaXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgV29ybGQgZ3JvdXAuXHJcbiAgICAqIEByZXR1cm4ge1BoYXNlci5HcmFwaGljc30gVGhlIG5ld2x5IGNyZWF0ZWQgZ3JhcGhpY3Mgb2JqZWN0LlxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBncmFwaGljcyh4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCBncm91cD86IFBoYXNlci5Hcm91cCk6IFBoYXNlci5HcmFwaGljcyB7XHJcbiAgICAgICAgaWYgKGdyb3VwID09PSB1bmRlZmluZWQpIHsgZ3JvdXAgPSB0aGlzLndvcmxkOyB9XHJcbiAgICAgICAgLyoqKlxyXG4gICAgICAgICAqIENvbW1lbnRlZCB0aGlzIG91dCAtIHNpbmNlIGdyYXBoaWNzIGFyZSBieSBkZWZhdWx0IGFkZGVkIGRpcmVjdGx5IG9uIHRoZSBnYW1lLndvcmxkLCB3ZSBzaG91bGRuJ3QgcmVzZXQgdGhpcy50YXJnZXRHcm91cFxyXG4gICAgICAgICAqIEl0IGNvdWxkIGNhdXNlIG1ham9yIHByb2JsZW1zIGlmIHVzaW5nIGRpam9uL3V0aWxzIFRleHR1cmVzIGluc3RhbmNlcyBhcyBhbiBpbWFnZSB0ZXh0dXJlLCBmb3IgaW5zdGFuY2VcclxuICAgICAgICAgKi9cclxuICAgICAgICAvL3RoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xyXG4gICAgICAgIHJldHVybiBncm91cC5hZGQobmV3IFBoYXNlci5HcmFwaGljcyh0aGlzLmdhbWUsIHgsIHkpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogQ3JlYXRlIGEgbmV3IEJpdG1hcFRleHQgb2JqZWN0LlxyXG4gICAgKlxyXG4gICAgKiBCaXRtYXBUZXh0IG9iamVjdHMgd29yayBieSB0YWtpbmcgYSB0ZXh0dXJlIGZpbGUgYW5kIGFuIFhNTCBmaWxlIHRoYXQgZGVzY3JpYmVzIHRoZSBmb250IHN0cnVjdHVyZS5cclxuICAgICogSXQgdGhlbiBnZW5lcmF0ZXMgYSBuZXcgU3ByaXRlIG9iamVjdCBmb3IgZWFjaCBsZXR0ZXIgb2YgdGhlIHRleHQsIHByb3BvcnRpb25hbGx5IHNwYWNlZCBvdXQgYW5kIGFsaWduZWQgdG9cclxuICAgICogbWF0Y2ggdGhlIGZvbnQgc3RydWN0dXJlLlxyXG4gICAgKlxyXG4gICAgKiBCaXRtYXBUZXh0IG9iamVjdHMgYXJlIGxlc3MgZmxleGlibGUgdGhhbiBUZXh0IG9iamVjdHMsIGluIHRoYXQgdGhleSBoYXZlIGxlc3MgZmVhdHVyZXMgc3VjaCBhcyBzaGFkb3dzLCBmaWxscyBhbmQgdGhlIGFiaWxpdHlcclxuICAgICogdG8gdXNlIFdlYiBGb250cy4gSG93ZXZlciB5b3UgdHJhZGUgdGhpcyBmbGV4aWJpbGl0eSBmb3IgcHVyZSByZW5kZXJpbmcgc3BlZWQuIFlvdSBjYW4gYWxzbyBjcmVhdGUgdmlzdWFsbHkgY29tcGVsbGluZyBCaXRtYXBUZXh0cyBieVxyXG4gICAgKiBwcm9jZXNzaW5nIHRoZSBmb250IHRleHR1cmUgaW4gYW4gaW1hZ2UgZWRpdG9yIGZpcnN0LCBhcHBseWluZyBmaWxscyBhbmQgYW55IG90aGVyIGVmZmVjdHMgcmVxdWlyZWQuXHJcbiAgICAqXHJcbiAgICAqIFRvIGNyZWF0ZSBtdWx0aS1saW5lIHRleHQgaW5zZXJ0IFxcciwgXFxuIG9yIFxcclxcbiBlc2NhcGUgY29kZXMgaW50byB0aGUgdGV4dCBzdHJpbmcuXHJcbiAgICAqXHJcbiAgICAqIFRvIGNyZWF0ZSBhIEJpdG1hcFRleHQgZGF0YSBmaWxlcyB5b3UgY2FuIHVzZTpcclxuICAgICpcclxuICAgICogQk1Gb250IChXaW5kb3dzLCBmcmVlKTogaHR0cDovL3d3dy5hbmdlbGNvZGUuY29tL3Byb2R1Y3RzL2JtZm9udC9cclxuICAgICogR2x5cGggRGVzaWduZXIgKE9TIFgsIGNvbW1lcmNpYWwpOiBodHRwOi8vd3d3Ljcxc3F1YXJlZC5jb20vZW4vZ2x5cGhkZXNpZ25lclxyXG4gICAgKiBMaXR0ZXJhIChXZWItYmFzZWQsIGZyZWUpOiBodHRwOi8va3ZhemFycy5jb20vbGl0dGVyYS9cclxuICAgICpcclxuICAgICogQG1ldGhvZCBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkjYml0bWFwVGV4dFxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0geCAtIFggY29vcmRpbmF0ZSB0byBkaXNwbGF5IHRoZSBCaXRtYXBUZXh0IG9iamVjdCBhdC5cclxuICAgICogQHBhcmFtIHtudW1iZXJ9IHkgLSBZIGNvb3JkaW5hdGUgdG8gZGlzcGxheSB0aGUgQml0bWFwVGV4dCBvYmplY3QgYXQuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBmb250IC0gVGhlIGtleSBvZiB0aGUgQml0bWFwVGV4dCBhcyBzdG9yZWQgaW4gUGhhc2VyLkNhY2hlLlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW3RleHQ9JyddIC0gVGhlIHRleHQgdGhhdCB3aWxsIGJlIHJlbmRlcmVkLiBUaGlzIGNhbiBhbHNvIGJlIHNldCBsYXRlciB2aWEgQml0bWFwVGV4dC50ZXh0LlxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3NpemU9MzJdIC0gVGhlIHNpemUgdGhlIGZvbnQgd2lsbCBiZSByZW5kZXJlZCBhdCBpbiBwaXhlbHMuXHJcbiAgICAqIEBwYXJhbSB7UGhhc2VyLkdyb3VwfSBbZ3JvdXBdIC0gT3B0aW9uYWwgR3JvdXAgdG8gYWRkIHRoZSBvYmplY3QgdG8uIElmIG5vdCBzcGVjaWZpZWQgaXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgV29ybGQgZ3JvdXAuXHJcbiAgICAqIEByZXR1cm4ge1BoYXNlci5CaXRtYXBUZXh0fSBUaGUgbmV3bHkgY3JlYXRlZCBiaXRtYXBUZXh0IG9iamVjdC5cclxuICAgICovXHJcbiAgICBwdWJsaWMgYml0bWFwVGV4dCh4PzogbnVtYmVyLCB5PzogbnVtYmVyLCBmb250Pzogc3RyaW5nLCB0ZXh0OiBzdHJpbmcgPSBcIlwiLCBzaXplOiBudW1iZXIgPSAzMiwgZ3JvdXA/OiBQaGFzZXIuR3JvdXApOiBQaGFzZXIuQml0bWFwVGV4dCB7XHJcbiAgICAgICAgaWYgKGdyb3VwID09PSB1bmRlZmluZWQpIHsgZ3JvdXAgPSB0aGlzLnRhcmdldEdyb3VwOyB9XHJcbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIGdyb3VwLmFkZChuZXcgUGhhc2VyLkJpdG1hcFRleHQodGhpcy5nYW1lLCB4LCB5LCBmb250LCB0ZXh0LCBzaXplKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZGlqb24gc3BlY2lmaWMgZGlzcGxheSBvYmplY3RzXHJcbiAgICBwdWJsaWMgZFNwcml0ZSh4PzogbnVtYmVyLCB5PzogbnVtYmVyLCBrZXk/OiBzdHJpbmcgfCBQaGFzZXIuUmVuZGVyVGV4dHVyZSB8IFBoYXNlci5CaXRtYXBEYXRhIHwgUElYSS5UZXh0dXJlLCBmcmFtZT86IHN0cmluZyB8IG51bWJlciwgbmFtZT86IHN0cmluZywgY29tcG9uZW50cz86IENvbXBvbmVudFtdLCBncm91cD86IFBoYXNlci5Hcm91cCk6IFNwcml0ZSB7XHJcbiAgICAgICAgaWYgKGdyb3VwID09PSB1bmRlZmluZWQpIHsgZ3JvdXAgPSB0aGlzLnRhcmdldEdyb3VwOyB9XHJcbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIGdyb3VwLmFkZChuZXcgU3ByaXRlKHgsIHksIGtleSwgZnJhbWUsIG5hbWUsIGNvbXBvbmVudHMpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZEdyb3VwKHg/OiBudW1iZXIsIHk/OiBudW1iZXIsIG5hbWU/OiBzdHJpbmcsIGFkZFRvU3RhZ2U/OiBib29sZWFuLCBjb21wb25lbnRzPzogQ29tcG9uZW50W10sIGVuYWJsZUJvZHk/OiBib29sZWFuLCBwaHlzaWNzQm9keVR5cGU/OiBudW1iZXIsIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogR3JvdXAge1xyXG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkICYmIGFkZFRvU3RhZ2UgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgZ3JvdXAgPSB0aGlzLnRhcmdldEdyb3VwO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldEdyb3VwID0gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuIGdyb3VwLmFkZChuZXcgR3JvdXAoeCwgeSwgbmFtZSwgYWRkVG9TdGFnZSwgY29tcG9uZW50cywgZW5hYmxlQm9keSwgcGh5c2ljc0JvZHlUeXBlKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IEdyb3VwKHgsIHksIG5hbWUsIGFkZFRvU3RhZ2UsIGNvbXBvbmVudHMsIGVuYWJsZUJvZHksIHBoeXNpY3NCb2R5VHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRUZXh0KHg6IG51bWJlciwgeTogbnVtYmVyLCB0ZXh0Pzogc3RyaW5nLCBmb250TmFtZT86IHN0cmluZywgZm9udFNpemU/OiBudW1iZXIsIGZvbnRDb2xvcj86IHN0cmluZywgZm9udEFsaWduPzogc3RyaW5nLCB3b3JkV3JhcD86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyLCBsaW5lU3BhY2luZz86IG51bWJlciwgc2V0dGluZ3M/OiBPYmplY3QsIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogVGV4dCB7XHJcbiAgICAgICAgaWYgKGdyb3VwID09PSB1bmRlZmluZWQpIHsgZ3JvdXAgPSB0aGlzLnRhcmdldEdyb3VwOyB9XHJcbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIGdyb3VwLmFkZChuZXcgVGV4dCh4LCB5LCB0ZXh0LCBmb250TmFtZSwgZm9udFNpemUsIGZvbnRDb2xvciwgZm9udEFsaWduLCB3b3JkV3JhcCwgd2lkdGgsIGxpbmVTcGFjaW5nLCBzZXR0aW5ncykpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZEJpdG1hcFRleHQoeDpudW1iZXIgPSAwLCB5Om51bWJlciA9IDAsIGZvbnQ6c3RyaW5nID0gbnVsbCwgdGV4dDpzdHJpbmcgPSBcIlwiLCBzaXplOm51bWJlciA9IDEyLCBhbGlnbjpzdHJpbmcgPSAnbGVmdCcsIGNvbG9yOm51bWJlciA9IDB4ZmZmZmZmLCBzbW9vdGhpbmc6Ym9vbGVhbiA9IHRydWUsIGF1dG9GbGF0dGVuOmJvb2xlYW4gPSB0cnVlLCBtYWtlSW1hZ2U6Ym9vbGVhbiA9IGZhbHNlLCBncm91cD86IFBoYXNlci5Hcm91cCk6IEJpdG1hcFRleHQge1xyXG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy50YXJnZXRHcm91cDsgfVxyXG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xyXG4gICAgICAgIHJldHVybiBncm91cC5hZGQobmV3IEJpdG1hcFRleHQoeCwgeSwgZm9udCwgdGV4dCwgc2l6ZSwgYWxpZ24sIGNvbG9yLCBzbW9vdGhpbmcsIGF1dG9GbGF0dGVuLCBtYWtlSW1hZ2UpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3BpbmUoYXNzZXROYW1lOiBzdHJpbmcgPSAnJywgeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgZ3JvdXA/OiBQaGFzZXIuR3JvdXApIHtcclxuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCkgeyBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7IH1cclxuICAgICAgICB0aGlzLnRhcmdldEdyb3VwID0gbnVsbDtcclxuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBTcGluZShhc3NldE5hbWUsIHgsIHkpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0RGVmYXVsdExheWVyKHZhbHVlOiBQaGFzZXIuR3JvdXApIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNBVVRJT046IENoYW5naW5nIHRoZSBkZWZhdWx0IGxheWVyIHdpbGwgY2hhbmdlIHRoZSB0YXJnZXQgZ3JvdXAgZm9yIC5hZGRcIik7XHJcbiAgICAgICAgdGhpcy5fZGVmYXVsdExheWVyID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBkZWZhdWx0TGF5ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRMYXllcjtcclxuICAgIH1cclxuICAgIC8vIGdldHRlciAvIHNldHRlclxyXG4gICAgcHVibGljIHNldCB0YXJnZXRHcm91cCh2YWx1ZTogUGhhc2VyLkdyb3VwKSB7XHJcbiAgICAgICAgdGhpcy5fdGFyZ2V0R3JvdXAgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHRhcmdldEdyb3VwKCk6IFBoYXNlci5Hcm91cCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RhcmdldEdyb3VwIHx8IHRoaXMuX2RlZmF1bHRMYXllcjtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiBTZXF1ZW5jZU1hbmFnZXJcclxuICovXHJcbmltcG9ydCB7QXBwbGljYXRpb259IGZyb20gJy4uL2FwcGxpY2F0aW9uJztcclxuaW1wb3J0IHtHYW1lfSBmcm9tICcuLi9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXF1ZW5jZU1hbmFnZXIge1xyXG4gICAgcHVibGljIGdhbWU6IEdhbWU7XHJcblxyXG4gICAgcHJpdmF0ZSBfZGVmYXVsdEludGVydmFsID0gMjA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1xyXG4gICAgcHJpdmF0ZSBfZXhlY3V0ZU1ldGhvZChzZXF1ZW5jZTogQXJyYXk8RnVuY3Rpb24+LCBjb250ZXh0OiBPYmplY3QsIGNhbGxiYWNrOiBGdW5jdGlvbiwgY2FsbGJhY2tDb250ZXh0OiBPYmplY3QpIHtcclxuICAgICAgICB2YXIgZnVuYyA9IHNlcXVlbmNlLnNoaWZ0KCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBmdW5jICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29udGV4dCAhPT0gJ3VuZGVmaW5lZCcgJiYgY29udGV4dCkge1xyXG4gICAgICAgICAgICBmdW5jLmNhbGwoY29udGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VxdWVuY2UubGVuZ3RoID09PSAwICYmIGNhbGxiYWNrICYmIGNhbGxiYWNrQ29udGV4dCkge1xyXG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKGNhbGxiYWNrQ29udGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHB1YmxpYyBtZXRob2RzXHJcbiAgICBwdWJsaWMgcnVuKHNlcXVlbmNlOiBBcnJheTxGdW5jdGlvbj4sIGNvbnRleHQ6IE9iamVjdCwgaW50ZXJ2YWw6IG51bWJlciwgY29tcGxldGVDYWxsYmFjazogRnVuY3Rpb24sIGNvbXBsZXRlQ2FsbGJhY2tDb250ZXh0OiBPYmplY3QpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGNvbnRleHQgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY29udGV4dCBtdXN0IGJlIHByb3ZpZGVkIGZvciB0aGUgc2VxdWVuY2UgbWV0aG9kcycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBpbnRlcnZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgaW50ZXJ2YWwgPSB0aGlzLl9kZWZhdWx0SW50ZXJ2YWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VxdWVuY2UubGVuZ3RoID09PSAwICYmIHR5cGVvZiBjb21wbGV0ZUNhbGxiYWNrICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29tcGxldGVDYWxsYmFja0NvbnRleHQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlQ2FsbGJhY2suY2FsbChjb21wbGV0ZUNhbGxiYWNrQ29udGV4dCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpbnRlcnZhbCA9PT0gMCkge1xyXG4gICAgICAgICAgICB3aGlsZSAoc2VxdWVuY2UubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V4ZWN1dGVNZXRob2Qoc2VxdWVuY2UsIGNvbnRleHQsIHR5cGVvZiBjb21wbGV0ZUNhbGxiYWNrID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBjb21wbGV0ZUNhbGxiYWNrLCB0eXBlb2YgY29tcGxldGVDYWxsYmFja0NvbnRleHQgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IGNvbXBsZXRlQ2FsbGJhY2tDb250ZXh0KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLnJlcGVhdChpbnRlcnZhbCwgc2VxdWVuY2UubGVuZ3RoLCB0aGlzLl9leGVjdXRlTWV0aG9kLCB0aGlzLCBzZXF1ZW5jZSwgY29udGV4dCwgdHlwZW9mIGNvbXBsZXRlQ2FsbGJhY2sgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IGNvbXBsZXRlQ2FsbGJhY2ssIHR5cGVvZiBjb21wbGV0ZUNhbGxiYWNrQ29udGV4dCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogY29tcGxldGVDYWxsYmFja0NvbnRleHQpO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIFN0YXRlXHJcbiAqL1xyXG5pbXBvcnQge0FwcGxpY2F0aW9ufSBmcm9tICcuLi9hcHBsaWNhdGlvbic7XHJcbmltcG9ydCB7R2FtZSwgR2FtZU9iamVjdEZhY3Rvcnl9IGZyb20gJy4uL2NvcmUnO1xyXG5pbXBvcnQge01lZGlhdG9yfSBmcm9tICcuLi9tdmMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXRlIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuICAgIHByb3RlY3RlZCBfYXVkaW86IFBoYXNlci5Tb3VuZFtdID0gW107XHJcbiAgICBwcm90ZWN0ZWQgX21lZGlhdG9yOiBNZWRpYXRvciA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIC8vIFBoYXNlci5TdGF0ZSBvdmVycmlkZXNcclxuICAgIHB1YmxpYyBpbml0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHJlbG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5wcmVsb2FkSUQpXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hc3NldC5sb2FkQXNzZXRzKHRoaXMucHJlbG9hZElEKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5nYW1lLmFzc2V0LmFsbFNvdW5kc0RlY29kZWQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuYXNzZXQub25Mb2FkQ29tcGxldGVBbmRBdWRpb0RlY29kZWQuYWRkT25jZSh0aGlzLmNyZWF0ZSwgdGhpcyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5idWlsZEludGVyZmFjZSgpO1xyXG4gICAgICAgIHRoaXMuYWZ0ZXJCdWlsZEludGVyZmFjZSgpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRCdWlsZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaHV0ZG93bihyZW1vdmVNZWRpYXRvcjogYm9vbGVhbiA9IHRydWUsIHJlbW92ZUF1ZGlvOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChyZW1vdmVNZWRpYXRvcikge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZU1lZGlhdG9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZW1vdmVBdWRpbykge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUF1ZGlvKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdXBlci5zaHV0ZG93bigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHB1YmxpYyBtZXRob2RzXHJcbiAgICBwdWJsaWMgbGlzdEJ1aWxkU2VxdWVuY2UoKTogRnVuY3Rpb25bXSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBidWlsZEludGVyZmFjZSgpOiB2b2lkIHsgfVxyXG5cclxuICAgIHB1YmxpYyBhZnRlckJ1aWxkSW50ZXJmYWNlKCk6IHZvaWQgeyB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0QnVpbGQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNlcXVlbmNlLnJ1bih0aGlzLmxpc3RCdWlsZFNlcXVlbmNlKCksIHRoaXMsIHRoaXMuYnVpbGRJbnRlcnZhbCwgdGhpcy5wcmVBZnRlckJ1aWxkLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHJlQWZ0ZXJCdWlsZCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZ2FtZS50cmFuc2l0aW9uID09PSAndW5kZWZpbmVkJyB8fCAhdGhpcy5nYW1lLnRyYW5zaXRpb24uY2FuVHJhbnNpdGlvbk91dCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJCdWlsZCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWUudHJhbnNpdGlvbi5jYW5UcmFuc2l0aW9uT3V0KCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS50cmFuc2l0aW9uLm9uVHJhbnNpdGlvbk91dENvbXBsZXRlLmFkZE9uY2UodGhpcy5hZnRlckJ1aWxkLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS50cmFuc2l0aW9uLnRyYW5zaXRpb25PdXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWZ0ZXJCdWlsZCgpOiB2b2lkIHsgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRBdWRpbyh0cmFjazogUGhhc2VyLlNvdW5kKTogUGhhc2VyLlNvdW5kIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2F1ZGlvKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2F1ZGlvID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2F1ZGlvLnB1c2godHJhY2spO1xyXG4gICAgICAgIHJldHVybiB0cmFjaztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlQXVkaW8oKTogdm9pZCB7XHJcbiAgICAgICAgdmFyIHNvdW5kOiBQaGFzZXIuU291bmQ7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9hdWRpbykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy5fYXVkaW8ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzb3VuZCA9IHRoaXMuX2F1ZGlvLnBvcCgpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHNvdW5kICE9PSAndW5kZWZpbmVkJyAmJiBzb3VuZCAhPSBudWxsICYmIHR5cGVvZiBzb3VuZC5zdG9wICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzb3VuZC5vblN0b3AgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc291bmQub25TdG9wLnJlbW92ZUFsbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVNZWRpYXRvcigpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuX21lZGlhdG9yKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdGhpcy5fbWVkaWF0b3IuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuX21lZGlhdG9yID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXR0ZXIgLyBzZXR0ZXJcclxuICAgIHB1YmxpYyBnZXQgcHJlbG9hZElEKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBidWlsZEludGVydmFsKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDEwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYWRkKCk6IEdhbWVPYmplY3RGYWN0b3J5IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lLmFkZFRvR2FtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGFwcCgpOiBBcHBsaWNhdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBnYW1lKCk6IEdhbWUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwcC5nYW1lO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIFN0b3JhZ2VNYW5hZ2VyXHJcbiAqL1xyXG5pbXBvcnQge0FwcGxpY2F0aW9ufSBmcm9tICcuLi9hcHBsaWNhdGlvbic7XHJcbmltcG9ydCB7R2FtZX0gZnJvbSAnLi4vY29yZSc7XHJcbmV4cG9ydCBjbGFzcyBTdG9yYWdlTWFuYWdlciB7XHJcbiAgICBwdWJsaWMgZ2FtZTogR2FtZTtcclxuICAgIHByaXZhdGUgX2xvY2FsU3RvcmFnZUF2YWlsYWJsZTogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWU7XHJcbiAgICAgICAgdGhpcy5faW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1xyXG4gICAgcHJpdmF0ZSBfaW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9sb2NhbFN0b3JhZ2VBdmFpbGFibGUgPSB0aGlzLl9nZXRJc0xvY2FsU3RvcmFnZUF2YWlsYWJsZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2NhbCBzdG9yYWdlIGF2YWlsYWJsZScsIHRoaXMuX2xvY2FsU3RvcmFnZUF2YWlsYWJsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0SXNMb2NhbFN0b3JhZ2VBdmFpbGFibGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuICdsb2NhbFN0b3JhZ2UnIGluIHdpbmRvdyAmJiB3aW5kb3dbJ2xvY2FsU3RvcmFnZSddICE9PSBudWxsO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRTdHJpbmcoZGF0YTogT2JqZWN0IHwgc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGpzb25EYXRhO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBqc29uRGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvdWxkIG5vdCBjb252ZXJ0JyArIGRhdGEgKyAnIHRvIGpzb24nKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ganNvbkRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHVibGljIG1ldGhvZHNcclxuICAgIC8qKlxyXG4gICAgKiBnZXRzIHN0b3JlZCBkYXRhIHdpdGggdGhlIHNwZWNpZmllZCBrZXlcclxuICAgICogQHBhcmFtICB7U3RyaW5nfSAga2V5ICAgIHRoZSBMb2NhbFN0b3JhZ2Uga2V5IHdoZXJlIHRoZSBkYXRhIGlzIHN0b3JlZFxyXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBpc0pTT04gaXMgdGhlIHN0b3JlZCBkYXRhIGp1c3QgYSBzdHJpbmcgb3IgaXMgaXQgc3RyaW5naWZpZWQganNvbiAoYXNzdW1lcyBpdCdzIEpTT04pXHJcbiAgICAqIEByZXR1cm4ge1N0cmluZyB8IE9iamVjdH0gdGhlIHJldHJpZXZlZCBkYXRhIC0gaWYgaXQncyBhIEpTT04gc3RyaW5nLCB3ZSBwYXJzZSB0aGUgZGF0YSBhbmQgcmV0dXJuIHRoZSBKU09OIG9iamVjdFxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBnZXRGcm9tTG9jYWxTdG9yYWdlKGtleTogc3RyaW5nLCBpc0pTT046IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIGRhdGEgc2F2ZWQgd2l0aCB0aGUga2V5Jywga2V5KTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXNKU09OICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIHNhdmVzIGRhdGEgdG8gbG9jYWxzdG9yYWdlXHJcbiAgICAqIEBwYXJhbSAge1N0cmluZ30ga2V5ICAgdGhlIExvY2FsU3RvcmFnZSBrZXkgdGhlIGRhdGEgd2lsbCBiZSBzYXZlZCB0b1xyXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd8T2JqZWN0fSB2YWx1ZSB0aGUgZGF0YSB0byBzYXZlIChpZiBpdCdzIGFuIG9iamVjdCwgd2lsbCBiZSBzdHJpbmdpZmllZCBiZWZvcmUgc2F2aW5nKVxyXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBzYXZlVG9Mb2NhbFN0b3JhZ2Uoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBPYmplY3QpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2xvY2FsU3RvcmFnZUF2YWlsYWJsZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gbG9jYWwgc3RvcmFnZScpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdGhpcy5fZ2V0U3RyaW5nKHZhbHVlKSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygneW91ciBkYXRhIGNvdWxkIG5vdCBiZSBzYXZlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogY2xlYXIgc3RvcmVkIGRhdGFcclxuICAgICogQHBhcmFtICB7U3RyaW5nfSBrZXkgdGhlIExvY2FsU3RvcmFnZSBrZXkgdG8gY2xlYXJcclxuICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICovXHJcbiAgICBwdWJsaWMgY2xlYXJGcm9tTG9jYWxTdG9yYWdlKGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9sb2NhbFN0b3JhZ2VBdmFpbGFibGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIGxvY2FsIHN0b3JhZ2UnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IH1cclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiBUcmFuc2l0aW9uTWFuYWdlclxyXG4gKi9cclxuaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xyXG5pbXBvcnQge0dhbWUsIEdhbWVPYmplY3RGYWN0b3J5fSBmcm9tICcuLi9jb3JlJztcclxuaW1wb3J0IHtJVHJhbnNpdGlvbiwgSVRyYW5zaXRpb25IYW5kbGVyLCBJUHJlbG9hZEhhbmRsZXJ9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyYW5zaXRpb25NYW5hZ2VyIHtcclxuICAgIHB1YmxpYyBnYW1lOiBHYW1lO1xyXG4gICAgcHVibGljIG9uVHJhbnNpdGlvbk91dENvbXBsZXRlOiBQaGFzZXIuU2lnbmFsID0gbmV3IFBoYXNlci5TaWduYWwoKTtcclxuICAgIHB1YmxpYyBvblRyYW5zaXRpb25JbkNvbXBsZXRlOiBQaGFzZXIuU2lnbmFsID0gbmV3IFBoYXNlci5TaWduYWwoKTtcclxuXHJcbiAgICBwcml2YXRlIF90cmFuc2l0aW9uOiBJVHJhbnNpdGlvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIF90cmFuc2l0aW9uczogT2JqZWN0ID0ge307XHJcbiAgICBwcml2YXRlIF9leGNlcHRpb25zOiBPYmplY3QgPSB7fTtcclxuXHJcbiAgICBwcml2YXRlIF9mcm9tU3RhdGU6IHN0cmluZyA9IG51bGw7XHJcbiAgICBwcml2YXRlIF90b1N0YXRlOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9hZGQoaWQ6IHN0cmluZywgb3V0SGFuZGxlcjogSVRyYW5zaXRpb25IYW5kbGVyLCBwcmVsb2FkSGFuZGxlcjogSVByZWxvYWRIYW5kbGVyLCBpbkhhbmRsZXI6IElUcmFuc2l0aW9uSGFuZGxlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25zW2lkXSA9IHtcclxuICAgICAgICAgICAgb3V0SGFuZGxlcjogb3V0SGFuZGxlcixcclxuICAgICAgICAgICAgcHJlbG9hZEhhbmRsZXI6IHByZWxvYWRIYW5kbGVyLFxyXG4gICAgICAgICAgICBpbkhhbmRsZXI6IGluSGFuZGxlclxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0VHJhbnNpdGlvbihpblN0YXRlOiBzdHJpbmcsIG91dFN0YXRlOiBzdHJpbmcpIHtcclxuICAgICAgICB2YXIgdHJhbnNpdGlvbiA9IHRoaXMuX3RyYW5zaXRpb25zW2luU3RhdGUgKyAnLycgKyBvdXRTdGF0ZV07XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0cmFuc2l0aW9uID09PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHRoaXMuX3RyYW5zaXRpb25zWydhbGwnXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0cmFuc2l0aW9uID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiB0cmFuc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3RyYW5zaXRpb25JbkNvbXBsZXRlKCkge1xyXG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24gPSB0aGlzLl9nZXRUcmFuc2l0aW9uKHRoaXMuX2Zyb21TdGF0ZSwgdGhpcy5fdG9TdGF0ZSk7XHJcbiAgICAgICAgaWYgKCF0aGlzLl90cmFuc2l0aW9uKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fdHJhbnNpdGlvbi5wcmVsb2FkSGFuZGxlci5sb2FkU3RhcnQgPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hc3NldC5vbkxvYWRTdGFydC5hZGRPbmNlKHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIubG9hZFN0YXJ0LCB0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyLmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuYXNzZXQub25GaWxlQ29tcGxldGUuYWRkKHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIubG9hZFByb2dyZXNzLCB0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZS5hc3NldC5vbkxvYWRDb21wbGV0ZUFuZEF1ZGlvRGVjb2RlZC5hZGRPbmNlKHRoaXMuX3ByZWxvYWRDb21wbGV0ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblRyYW5zaXRpb25JbkNvbXBsZXRlLmRpc3BhdGNoKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZS5jaGFuZ2VTdGF0ZSh0aGlzLl90b1N0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF90cmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XHJcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vblRyYW5zaXRpb25PdXRDb21wbGV0ZS5kaXNwYXRjaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3ByZWxvYWRDb21wbGV0ZSgpIHtcclxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uID0gdGhpcy5fZ2V0VHJhbnNpdGlvbih0aGlzLl9mcm9tU3RhdGUsIHRoaXMuX3RvU3RhdGUpO1xyXG4gICAgICAgIGlmICghdGhpcy5fdHJhbnNpdGlvbilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmdhbWUuYXNzZXQub25GaWxlQ29tcGxldGUucmVtb3ZlKHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIubG9hZFByb2dyZXNzLCB0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyLmxvYWRDb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbi5wcmVsb2FkSGFuZGxlci5sb2FkQ29tcGxldGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jbGVhclRyYW5zaXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbi5vdXRIYW5kbGVyLnRyYW5zaXRpb25JbkNvbXBsZXRlLnJlbW92ZSh0aGlzLl90cmFuc2l0aW9uT3V0Q29tcGxldGUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24uaW5IYW5kbGVyLnRyYW5zaXRpb25PdXRDb21wbGV0ZS5yZW1vdmUodGhpcy5fdHJhbnNpdGlvbkluQ29tcGxldGUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5hc3NldC5vbkxvYWRDb21wbGV0ZUFuZEF1ZGlvRGVjb2RlZC5yZW1vdmUodGhpcy5fcHJlbG9hZENvbXBsZXRlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmdhbWUuYXNzZXQub25Mb2FkU3RhcnQucmVtb3ZlKHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIubG9hZFN0YXJ0LCB0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyKTtcclxuICAgICAgICB0aGlzLmdhbWUuYXNzZXQub25GaWxlQ29tcGxldGUucmVtb3ZlKHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIubG9hZFByb2dyZXNzLCB0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHVibGljIG1ldGhvZHNcclxuXHJcbiAgICAvKipcclxuICAgICogQWRkcyBhIHRyYW5zaXRpb24gaGFuZGxlciBmb3IgYSBzcGVjaWZpYyBmcm9tIC8gdG8gc3RhdGUgY29tYmluYXRpb25cclxuICAgICogcGFzcyB0aGUgZnJvbSAvIHRvIHN0YXRlcyBhcyB0aGUgZmlyc3QgMiBhcmd1bWVudHMsIGFuZCBhZGRpdGlvbmFsIGFyZ3VtZW50cyBmb3Igd2hpY2ggaW5zdGFuY2Ugd2lsbCBoYW5kbGUgdGhlIHRyYW5zaXRpb25cclxuICAgICogaWYgb25seSAzIGFyZ3MgYXJlIHBhc3NlZCwgdGhlIGluc3RhbmNlIHdpbGwgaGFuZGxlIHRoZSBpbiAvIG91dCB0cmFuc2l0aW9uLCBhbmQgdGhlIHByZWxvYWRpbmdcclxuICAgICogRS5HLlxyXG4gICAgKiB0aGlzLmdhbWUudHJhbnNpdGlvbi5hZGQodGhpcy5nYW1lLmNvbnN0YW50cy5TVEFURV9QUkVMT0FELCB0aGlzLmdhbWUuY29uc3RhbnRzLlNUQVRFX01FTlUsIHRoaXMuZ2FtZS5wcmVsb2FkZXIpO1xyXG4gICAgKlxyXG4gICAgKiBpZiA1IGFyZ3VtZW50cyBhcmUgcGFzc2VkLCBhIGRpZmZlcmVudCBpbnN0YW5jZSBjYW4gYmUgdXNlZCBmb3IgaW4gdHJhbnNpdGlvbiwgcHJlbG9hZGluZywgYW5kIG91dCB0cmFuc2l0aW9uXHJcbiAgICAqIEUuRy5cclxuICAgICogdGhpcy5nYW1lLnRyYW5zaXRpb24uYWRkKHRoaXMuZ2FtZS5jb25zdGFudHMuU1RBVEVfUFJFTE9BRCwgdGhpcy5nYW1lLmNvbnN0YW50cy5TVEFURV9NRU5VLCB0aGlzLmdhbWUudHJhbnNpdGlvbk91dEhhbmRsZXIsIHRoaXMuZ2FtZS5wcmVsb2FkSGFuZGxlciwgdGhpcy5nYW1lLnRyYW5zaXRpb25JbkhhbmRsZXIpO1xyXG4gICAgKlxyXG4gICAgKiB0cmFuc2l0aW9uIGhhbmRsZXJzIGFyZSBleHBlY3RlZCB0byBiZWhhdmUgYXMgZm9sbG93czpcclxuICAgICogYW4gb3V0IHRyYW5zaXRpb24gaGFuZGxlciBzaG91bGQgaGF2ZSBhIHRyYW5zaXRpb25JbiBtZXRob2QgYW5kIGRpc3BhdGNoIGEgdHJhbnNpdGlvbkNvbXBsZXRlIHNpZ25hbCB3aGVuIGRvbmVcclxuICAgICogYW4gaW4gdHJhbnNpdGlvbiBoYW5kbGVyIHNob3VsZCBoYXZlIGEgdHJhbnNpdGlvbk91dCBtZXRob2QgYW5kIGRpc3BhdGNoIGEgdHJhbnNpdGlvbkNPbXBsZXRlIHNpZ25hbCB3aGVuIGRvbmVcclxuICAgICogYSBwcmVsb2FkIGhhbmRsZXIgc2hvdWxkIGhhdmUgbG9hZFN0YXJ0LCBsb2FkUHJvZ3Jlc3MsIGFuZCBsb2FkQ29tcGxldGUgbWV0aG9kc1xyXG4gICAgKiB0aGUgbG9hZFByb2dyZXNzIG1ldGhvZCBtYXkgYWNjZXB0IGEgdXAgdG8gNCBwYXJhbWV0ZXJzIGZvciBwcm9ncmVzcyAocGVyY2VudCBvZiBmaWxlcyBsb2FkZWQpLCBpZCwgZmlsZUluZGV4LCBhbmQgdG90YWxGaWxlc1xyXG4gICAgKlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gZnJvbVN0YXRlIC0gdGhlIHN0YXRlIGJlaW5nIHRyYW5zaXRpb25lZCBmcm9tXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0b1N0YXRlIC0gdGhlIHN0YXRlIGJlaW5nIHRyYW5zaXRpb25lZCB0b1xyXG4gICAgKiBAcGFyYW0ge291dEhhbmRsZXJ9IG91dEhhbmRsZXIgLSB0aGUgaW5zdGFuY2UgdGhhdCB3aWxsIGhhbmRsZSB0aGUgdHJhbnNpdGlvbiBmcm9tIHRoZSBmcm9tU3RhdGVcclxuICAgICogQHBhcmFtIHtwcmVsb2FkSGFuZGxlcn0gcHJlbG9hZEhhbmRsZXIgLSB0aGUgaW5zdGFuY2UgdGhhdCB3aWxsIGhhbmRsZSBwcmVsb2FkaW5nIHRoZSB0b1N0YXRlXHJcbiAgICAqIEBwYXJhbSB7aW5IYW5kbGVyfSBpbkhhbmRsZXIgLSB0aGUgaW5zdGFuY2UgdGhhdCB3aWxsIGhhbmRsZSB0aGUgaW4gdHJhbnNpdGlvbiB3aGVuIHRoZSB0b1N0YXRlIGlzIGNvbXBsZXRlbHkgbG9hZGVkXHJcbiAgICAqIEByZXR1cm4ge09iamVjdH0gdHJhbnNpdGlvbiByZWZlcmVuY2UgdGhhdCB3YXMgYWRkZWQgdG8gX3RyYW5zaXRpb25zXHJcbiAgICAqL1xyXG4gICAgcHVibGljIGFkZChmcm9tU3RhdGU6IHN0cmluZywgdG9TdGF0ZTogc3RyaW5nIHwgSVByZWxvYWRIYW5kbGVyLCBvdXRIYW5kbGVyPzogSVRyYW5zaXRpb25IYW5kbGVyLCBwcmVsb2FkSGFuZGxlcj86IElQcmVsb2FkSGFuZGxlciwgaW5IYW5kbGVyPzogSVRyYW5zaXRpb25IYW5kbGVyKTogdm9pZCB7XHJcbiAgICAgICAgdmFyIGFyZ3M7XHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCA1KSB7XHJcbiAgICAgICAgICAgIGlmIChmcm9tU3RhdGUgPT09ICdhbGwnKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FkZCgnYWxsJywgYXJnc1swXSwgYXJnc1swXSwgYXJnc1swXSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FkZCgnYWxsJywgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FkZChmcm9tU3RhdGUgKyAnLycgKyB0b1N0YXRlLCBhcmdzWzBdLCBhcmdzWzBdLCBhcmdzWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZChmcm9tU3RhdGUgKyAnLycgKyB0b1N0YXRlLCBvdXRIYW5kbGVyLCBwcmVsb2FkSGFuZGxlciwgaW5IYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkQWxsKGhhbmRsZXI6IElQcmVsb2FkSGFuZGxlcik6IHZvaWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hZGQoJ2FsbCcsIGhhbmRsZXIsIGhhbmRsZXIsIGhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBBZGRzIGFuIGV4Y2VwdGlvbiB0byB0aGUgRGlqb24uVHJhbnNpdGlvbk1hbmFnZXIgaW4gdGhlIGNhc2Ugd2hlcmUgJ2FsbCcgaGFzIGJlZW4gdXNlZFxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gc3RhdGUgLSB0aGUgc3RhdGUgdG8gYWRkIHRoZSBleGNlcHRpb24gZm9yXHJcbiAgICAqL1xyXG4gICAgcHVibGljIGFkZEV4Y2VwdGlvbihzdGF0ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fZXhjZXB0aW9uc1tzdGF0ZV0gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZW1vdmVzIGEgdHJhbnNpdGlvbiBoYW5kbGVyIGZvciBhIHNwZWNpZmljIGZyb20gLyB0byBzdGF0ZSBjb21iaW5hdGlvblxyXG4gICAgKi9cclxuICAgIHB1YmxpYyByZW1vdmUoZnJvbVN0YXRlOiBzdHJpbmcsIHRvU3RhdGU/OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uc1tmcm9tU3RhdGVdID0gbnVsbDtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX3RyYW5zaXRpb25zW2Zyb21TdGF0ZV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbnNbZnJvbVN0YXRlICsgJy8nICsgdG9TdGF0ZV0gPSBudWxsO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fdHJhbnNpdGlvbnNbZnJvbVN0YXRlICsgJy8nICsgdG9TdGF0ZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBTdGFydCB0aGUgdHJhbnNpdGlvbiB0byBhIG5ldyBzdGF0ZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gc3RhdGUgLSB0aGUgc3RhdGUgdG8gdHJhbnNpdGlvbiB0b1xyXG4gICAgKi9cclxuICAgIHB1YmxpYyB0byhzdGF0ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3RyYW5zaXRpb24pXHJcbiAgICAgICAgICAgIHRoaXMuX2NsZWFyVHJhbnNpdGlvbigpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fZXhjZXB0aW9uc1tzdGF0ZV0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5fZnJvbVN0YXRlID0gdGhpcy5nYW1lLnN0YXRlLmN1cnJlbnQ7XHJcbiAgICAgICAgdGhpcy5fdG9TdGF0ZSA9IHN0YXRlO1xyXG5cclxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uID0gdGhpcy5fZ2V0VHJhbnNpdGlvbih0aGlzLl9mcm9tU3RhdGUsIHRoaXMuX3RvU3RhdGUpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX3RyYW5zaXRpb24pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIHRyYW5zaXRpb24gZm91bmQgZm9yOicsIHRoaXMuZ2FtZS5zdGF0ZS5jdXJyZW50ICsgJyB0byAnICsgc3RhdGUpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuY2hhbmdlU3RhdGUodGhpcy5fdG9TdGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25JbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0cmFuc2l0aW9uSW4oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl90cmFuc2l0aW9uKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fdHJhbnNpdGlvbi5vdXRIYW5kbGVyLnRyYW5zaXRpb25JbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uLm91dEhhbmRsZXIudHJhbnNpdGlvbkluQ29tcGxldGUuYWRkT25jZSh0aGlzLl90cmFuc2l0aW9uSW5Db21wbGV0ZSwgdGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb24ub3V0SGFuZGxlci50cmFuc2l0aW9uSW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhblRyYW5zaXRpb25PdXQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLl9leGNlcHRpb25zW3RoaXMuZ2FtZS5zdGF0ZS5jdXJyZW50XSAmJiB0aGlzLl90cmFuc2l0aW9uICYmIHRoaXMuX3RyYW5zaXRpb24uaW5IYW5kbGVyICYmIHR5cGVvZiB0aGlzLl90cmFuc2l0aW9uLmluSGFuZGxlci50cmFuc2l0aW9uT3V0ID09PSAnZnVuY3Rpb24nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBBZnRlciB0aGUgc3RhdGUgaXMgZnVsbHkgbG9hZGVkIGFuZCAnYnVpbHQnIGEgY2FsbCB0byB0aGlzIGlzIG1hZGVcclxuICAgICogdGhpcyBpcyBjdXJyZW50bHkgbWFkZSBmcm9tIEJhc2VTdGF0ZSBpbiB0aGUgJ2FmdGVyQnVpbGQnIG1ldGhvZFxyXG4gICAgKi9cclxuICAgIHB1YmxpYyB0cmFuc2l0aW9uT3V0KCkge1xyXG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24uaW5IYW5kbGVyLnRyYW5zaXRpb25PdXRDb21wbGV0ZS5hZGRPbmNlKHRoaXMuX3RyYW5zaXRpb25PdXRDb21wbGV0ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbi5pbkhhbmRsZXIudHJhbnNpdGlvbk91dCgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtJTm90aWZpY2F0aW9uLElPYnNlcnZlcn0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7QXBwbGljYXRpb259IGZyb20gJy4uL2FwcGxpY2F0aW9uJztcclxuaW1wb3J0IHtHYW1lfSBmcm9tICcuLi9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNb2RlbCB7XHJcbiAgICBwdWJsaWMgYXBwOiBBcHBsaWNhdGlvbjtcclxuICAgIHB1YmxpYyBnYW1lOiBHYW1lO1xyXG4gICAgcHJvdGVjdGVkIF9kYXRhOiBhbnk7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBNT0RFTF9OQU1FOiBzdHJpbmcgPSAnTW9kZWwnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRhdGFLZXk6IHN0cmluZyA9IG51bGwsIHByaXZhdGUgbW9kZWxOYW1lOiBzdHJpbmcgPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5hcHAgPSBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IHRoaXMuYXBwLmdhbWU7XHJcblxyXG4gICAgICAgIGlmIChkYXRhS2V5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YShkYXRhS2V5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYXBwLnJlZ2lzdGVyTW9kZWwodGhpcyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBvblJlZ2lzdGVyKCk6dm9pZHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIG9uUmVtb3ZlZCgpOnZvaWR7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldEtleUV4aXN0cyhrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUuY2FjaGUuZ2V0SlNPTihrZXkpICE9PSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXREYXRhKGRhdGFLZXk6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmdldEtleUV4aXN0cyhkYXRhS2V5KSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTW9kZWw6OiBjYW5ub3Qgc2V0IGRhdGEgZnJvbSBrZXkgJyArIGRhdGFLZXkgKyAnLiBJcyBpdCBpbiB0aGUgUGhhc2VyIGNhY2hlPycpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9kYXRhID0gdGhpcy5nYW1lLmNhY2hlLmdldEpTT04oZGF0YUtleSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldERhdGEoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFwcC5yZW1vdmVNb2RlbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbE5hbWUgfHwgTW9kZWwuTU9ERUxfTkFNRTtcclxuICAgIH1cclxufSIsImltcG9ydCB7TW9kZWx9IGZyb20gJy4vTW9kZWwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvcHlNb2RlbCBleHRlbmRzIE1vZGVsIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgTU9ERUxfTkFNRTogc3RyaW5nID0gJ2NvcHlNb2RlbCc7XHJcblxyXG4gICAgcHJpdmF0ZSBfbGFuZ3VhZ2VzOiB7IFtsYW5ndWFnZU5hbWU6IHN0cmluZ106IGFueSB9ID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IoZGF0YUtleTogc3RyaW5nID0gbnVsbCkge1xyXG4gICAgICAgIHN1cGVyKGRhdGFLZXkpO1xyXG5cclxuICAgICAgICB0aGlzLl9sYW5ndWFnZXNbJ2VuJ10gPSB0aGlzLl9kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb3B5KGdyb3VwSWQ6IHN0cmluZywgaXRlbUlkOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldENvcHlHcm91cChncm91cElkKVtpdGVtSWRdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb3B5R3JvdXAoZ3JvdXBJZDogc3RyaW5nKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVtncm91cElkXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkTGFuZ3VhZ2UobGFuZ3VhZ2VJZDogc3RyaW5nLCBkYXRhS2V5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIGlmICghdGhpcy5nZXRLZXlFeGlzdHMoZGF0YUtleSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW5ub3QgYWRkIGFuIGFsdGVybmF0ZSBsYW5ndWFnZSBmcm9tIGtleSAnICsgZGF0YUtleSArICcuIElzIGl0IGluIHRoZSBQaGFzZXIgY2FjaGU/Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9sYW5ndWFnZXNbbGFuZ3VhZ2VJZF0gPSB0aGlzLmdhbWUuY2FjaGUuZ2V0SlNPTihkYXRhS2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hhbmdlTGFuZ3VhZ2UobGFuZ3VhZ2VJZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9sYW5ndWFnZXNbbGFuZ3VhZ2VJZF0gPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RoZXJlIGlzIG5vIGxhbmd1YWdlICcgKyBsYW5ndWFnZUlkKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuX2xhbmd1YWdlc1tsYW5ndWFnZUlkXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gQ29weU1vZGVsLk1PREVMX05BTUU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0FwcGxpY2F0aW9ufSBmcm9tICcuLi9hcHBsaWNhdGlvbic7XHJcbmltcG9ydCB7SU9ic2VydmVyLElOb3RpZmljYXRpb259IGZyb20gJy4uL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQge0dhbWV9IGZyb20gJy4uL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lZGlhdG9yIGltcGxlbWVudHMgSU9ic2VydmVyIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgTUVESUFUT1JfTkFNRTogc3RyaW5nID0gJ01lZGlhdG9yJztcclxuXHJcbiAgICBwcm90ZWN0ZWQgbWVkaWF0b3JOYW1lOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcHJvdGVjdGVkIGFwcDogQXBwbGljYXRpb247XHJcbiAgICBwcm90ZWN0ZWQgZ2FtZTogR2FtZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX3ZpZXdDb21wb25lbnQ6IGFueSA9IG51bGwsIGF1dG9SZWc6IGJvb2xlYW4gPSB0cnVlLCBtZWRpYXRvck5hbWU6IHN0cmluZyA9IG51bGwpIHtcclxuICAgICAgICB0aGlzLmFwcCA9IEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gdGhpcy5hcHAuZ2FtZTtcclxuICAgICAgICB0aGlzLm1lZGlhdG9yTmFtZSA9IG1lZGlhdG9yTmFtZTtcclxuXHJcbiAgICAgICAgaWYgKGF1dG9SZWcpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcclxuICAgIHByb3RlY3RlZCByZWdpc3RlcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFwcC5yZWdpc3Rlck1lZGlhdG9yKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCByZW1vdmUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hcHAucmVtb3ZlTWVkaWF0b3IodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uUmVnaXN0ZXIoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gb3ZlcnJpZGUgbWUgZnJlZWx5XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uUmVtb3ZlZCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbGlzdE5vdGlmaWNhdGlvbkludGVyZXN0cygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYW5kbGVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBJTm90aWZpY2F0aW9uKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogZGVmYXVsdCBpbW1wbGVtZW50YXRpb24gd291bGQgbG9vayBzb21ldGhpbmcgbGlrZTpcclxuICAgICAgICAgKiBzd2l0Y2goIG5vdGlmaWNhdGlvbjogZGlqb24uSU5vdGlmaWNhdGlvbiApe1xyXG4gICAgICAgICAqIFx0XHRjYXNlIE5vdGlmaWNhdGlvbnMuU09NRVRISU5HOlxyXG4gICAgICAgICAqIFx0XHRcdC8vIGRvIHNvbWV0aGluZ1xyXG4gICAgICAgICAqIFx0XHRcdGJyZWFrO1xyXG4gICAgICAgICAqIFx0XHRjYXNlIE5vdGlmaWNhdGlvbnMuU09NRVRISU5HX0VMU0U6XHJcbiAgICAgICAgICogXHRcdFx0Ly8gZG8gc29tZXRoaW5nIGVsc2VcclxuICAgICAgICAgKiBcdFx0XHRicmVhaztcclxuICAgICAgICAgKiB9XHJcbiAgICAgICAgICovXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbmROb3RpZmljYXRpb24obm90aWZpY2F0aW9uTmFtZTogc3RyaW5nLCBub3RpZmljYXRpb25Cb2R5PzogYW55KSB7XHJcbiAgICAgICAgdGhpcy5hcHAuc2VuZE5vdGlmaWNhdGlvbihub3RpZmljYXRpb25OYW1lLCBub3RpZmljYXRpb25Cb2R5KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXR0ZXIgLyBzZXR0ZXJcclxuICAgIHB1YmxpYyBzZXQgdmlld0NvbXBvbmVudCh2aWV3Q29tcG9uZW50OiBhbnkpIHtcclxuICAgICAgICB0aGlzLl92aWV3Q29tcG9uZW50ID0gdmlld0NvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHZpZXdDb21wb25lbnQoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmlld0NvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tZWRpYXRvck5hbWUgfHwgTWVkaWF0b3IuTUVESUFUT1JfTkFNRTtcclxuICAgIH1cclxufSIsImltcG9ydCB7SU5vdGlmaWNhdGlvbn0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uIGltcGxlbWVudHMgSU5vdGlmaWNhdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uYW1lOiBzdHJpbmcsIHByaXZhdGUgX2JvZHk6IGFueSA9IG51bGwpIHsgfVxyXG5cclxuICAgIHB1YmxpYyBnZXROYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEJvZHkoYm9keTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fYm9keSA9IGJvZHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEJvZHkoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYm9keTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLl9ib2R5ID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9uYW1lID0gbnVsbDtcclxuICAgIH1cclxufSIsImltcG9ydCB7SU5vdGlmaWVyLCBJTm90aWZpY2F0aW9uLCBJT2JzZXJ2ZXJ9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQge01lZGlhdG9yLCBNb2RlbCwgTm90aWZpY2F0aW9ufSBmcm9tICcuLi9tdmMnO1xyXG5pbXBvcnQge0dhbWV9IGZyb20gJy4uL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uIGltcGxlbWVudHMgSU5vdGlmaWVyIHtcclxuICAgIC8vIHN0YXRpYyBjb25zdGFudHNcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgaW5zdGFuY2UgPSBudWxsO1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBTSU5HTEVUT05fTVNHID0gJ0FwcGxpY2F0aW9uIHNpbmdsZXRvbiBhbHJlYWR5IGNvbnN0cnVjdGVkISc7XHJcblxyXG4gICAgLy8gcHVibGljIFxyXG4gICAgcHVibGljIGdhbWU6IEdhbWU7XHJcblxyXG4gICAgLy8gcHJvdGVjdGVkICAgICAgICBcclxuICAgIHByb3RlY3RlZCBfbWVkaWF0b3I6IE1lZGlhdG9yID0gbnVsbDtcclxuICAgIHByb3RlY3RlZCBfbW9kZWxzOiB7IFtuYW1lOiBzdHJpbmddOiBNb2RlbCB9ID0ge307XHJcbiAgICBwcm90ZWN0ZWQgX21lZGlhdG9yczogeyBbbmFtZTogc3RyaW5nXTogTWVkaWF0b3IgfSA9IHt9O1xyXG4gICAgcHJvdGVjdGVkIF9vYnNlcnZlck1hcDogeyBbbmFtZTogc3RyaW5nXTogSU9ic2VydmVyW10gfSA9IHt9O1xyXG5cclxuICAgIC8vZm9yIGRlYnVnZ2luZ1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2hhc2hRdWVyeToge307XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKEFwcGxpY2F0aW9uLmluc3RhbmNlKVxyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihBcHBsaWNhdGlvbi5TSU5HTEVUT05fTVNHKTtcclxuXHJcbiAgICAgICAgQXBwbGljYXRpb24uaW5zdGFuY2UgPSB0aGlzO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBBcHBsaWNhdGlvbi5fZ2V0SGFzaFF1ZXJ5KCk7XHJcbiAgICAgICAgICAgIHRoaXMud2luZG93SGFzaENoYW5nZSgpO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVHYW1lKCk7XHJcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgd2luZG93SGFzaENoYW5nZSgpOiB2b2lkIHtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUdhbWUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoe1xyXG4gICAgICAgICAgICB3aWR0aDogODAwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDYwMCxcclxuICAgICAgICAgICAgcGFyZW50OiAnZ2FtZS1jb250YWluZXInLFxyXG4gICAgICAgICAgICByZW5kZXJlcjogUGhhc2VyLkFVVE8sXHJcbiAgICAgICAgICAgIHRyYW5zcGFyZW50OiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydEdhbWUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gc3RhcnQgdGhlIGFwcCdzIGluaXRpYWwgc3RhdGUgaGVyZVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRQbHVnaW5zKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5hZGRQbHVnaW5zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlZ2lzdGVyTW9kZWwobW9kZWw6IE1vZGVsKTogTW9kZWwge1xyXG4gICAgICAgIGlmICh0aGlzLl9tb2RlbHNbbW9kZWwubmFtZV0pIHtcclxuICAgICAgICAgICAgdGhyb3cgKG5ldyBFcnJvcignQXBwbGljYXRpb246OiBhIG1vZGVsIHdpdGggdGhlIG5hbWUgXCInICsgbW9kZWwubmFtZSArICdcIiBhbHJlYWR5IGV4aXN0cy4nKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX21vZGVsc1ttb2RlbC5uYW1lXSA9IG1vZGVsO1xyXG5cclxuICAgICAgICBtb2RlbC5vblJlZ2lzdGVyKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBtb2RlbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmV0cmlldmVNb2RlbChtb2RlbE5hbWU6IHN0cmluZyk6IE1vZGVsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW9kZWxzW21vZGVsTmFtZV0gfHwgbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlTW9kZWwobW9kZWxUb1JlbW92ZTogTW9kZWwpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbmFtZSA9IG1vZGVsVG9SZW1vdmUubmFtZTtcclxuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLl9tb2RlbHNbbmFtZV07XHJcblxyXG4gICAgICAgIGlmICghbW9kZWwpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgbW9kZWwub25SZW1vdmVkKCk7XHJcblxyXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9tb2RlbHNbbmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlZ2lzdGVyTWVkaWF0b3IobWVkaWF0b3I6IE1lZGlhdG9yKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX21lZGlhdG9yc1ttZWRpYXRvci5uYW1lXSkge1xyXG4gICAgICAgICAgICB0aHJvdyAobmV3IEVycm9yKCdBcHBsaWNhdGlvbjo6IGEgbWVkaWF0b3Igd2l0aCB0aGUgbmFtZSBcIicgKyBtZWRpYXRvci5uYW1lICsgJ1wiIGFscmVhZHkgZXhpc3RzLicpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX21lZGlhdG9yc1ttZWRpYXRvci5uYW1lXSA9IG1lZGlhdG9yO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJPYnNlcnZlcihtZWRpYXRvcik7XHJcblxyXG4gICAgICAgIG1lZGlhdG9yLm9uUmVnaXN0ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmV0cmlldmVNZWRpYXRvcihtZWRpYXRvck5hbWU6IHN0cmluZyk6IE1lZGlhdG9yIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVkaWF0b3JzW21lZGlhdG9yTmFtZV0gfHwgbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlTWVkaWF0b3IobWVkaWF0b3JUb1JlbW92ZTogTWVkaWF0b3IpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbmFtZSA9IG1lZGlhdG9yVG9SZW1vdmUubmFtZTtcclxuICAgICAgICBsZXQgbWVkaWF0b3IgPSB0aGlzLl9tZWRpYXRvcnNbbmFtZV07XHJcblxyXG4gICAgICAgIGlmICghbWVkaWF0b3IpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgbWVkaWF0b3IubGlzdE5vdGlmaWNhdGlvbkludGVyZXN0cygpLmZvckVhY2goaW50ZXJlc3QgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZU9ic2VydmVyKGludGVyZXN0LCBtZWRpYXRvcik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1lZGlhdG9yLm9uUmVtb3ZlZCgpO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9tZWRpYXRvcnNbbmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlZ2lzdGVyT2JzZXJ2ZXIob2JzZXJ2ZXI6IElPYnNlcnZlcik6IHZvaWQge1xyXG4gICAgICAgIG9ic2VydmVyLmxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHMoKS5mb3JFYWNoKG5vdGlmaWNhdGlvbk5hbWUgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fb2JzZXJ2ZXJNYXBbbm90aWZpY2F0aW9uTmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb2JzZXJ2ZXJNYXBbbm90aWZpY2F0aW9uTmFtZV0gPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9vYnNlcnZlck1hcFtub3RpZmljYXRpb25OYW1lXS5wdXNoKG9ic2VydmVyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHN0b3BzIGFuIG9ic2VydmVyIGZyb20gYmVpbmcgaW50ZXJlc3RlZCBpbiBhIG5vdGlmaWNhdGlvblxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5vdGlmaWNhdGlvbk5hbWVcclxuICAgICAqIEBwYXJhbSB7SU9ic2VydmVyfSBvYnNlcnZlclRvUmVtb3ZlXHJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlT2JzZXJ2ZXIobm90aWZpY2F0aW9uTmFtZTogc3RyaW5nLCBvYnNlcnZlclRvUmVtb3ZlOiBJT2JzZXJ2ZXIpOiB2b2lkIHtcclxuICAgICAgICAvL1RoZSBvYnNlcnZlciBsaXN0IGZvciB0aGUgbm90aWZpY2F0aW9uIHVuZGVyIGluc3BlY3Rpb25cclxuICAgICAgICBsZXQgb2JzZXJ2ZXJzOiBJT2JzZXJ2ZXJbXSA9IG51bGwsXHJcbiAgICAgICAgICAgIG9ic2VydmVyOiBJT2JzZXJ2ZXIgPSBudWxsLFxyXG4gICAgICAgICAgICBpOiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICBvYnNlcnZlcnMgPSB0aGlzLl9vYnNlcnZlck1hcFtub3RpZmljYXRpb25OYW1lXTtcclxuXHJcbiAgICAgICAgLy9GaW5kIHRoZSBvYnNlcnZlciBmb3IgdGhlIG5vdGlmeUNvbnRleHQuXHJcbiAgICAgICAgaSA9IG9ic2VydmVycy5sZW5ndGg7XHJcbiAgICAgICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgICAgICBvYnNlcnZlciA9IG9ic2VydmVyc1tpXTtcclxuICAgICAgICAgICAgaWYgKG9ic2VydmVyID09PSBvYnNlcnZlclRvUmVtb3ZlKSB7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlcnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogQWxzbywgd2hlbiBhIE5vdGlmaWNhdGlvbidzIE9ic2VydmVyIGxpc3QgbGVuZ3RoIGZhbGxzIHRvIHplcm8sIGRlbGV0ZSB0aGVcclxuICAgICAgICAgKiBub3RpZmljYXRpb24ga2V5IGZyb20gdGhlIG9ic2VydmVyIG1hcC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBpZiAob2JzZXJ2ZXJzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9vYnNlcnZlck1hcFtub3RpZmljYXRpb25OYW1lXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbmROb3RpZmljYXRpb24obm90aWZpY2F0aW9uTmFtZTogc3RyaW5nLCBub3RmaWNhdGlvbkJvZHk/OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbm90aWZpY2F0aW9uID0gbmV3IE5vdGlmaWNhdGlvbihub3RpZmljYXRpb25OYW1lLCBub3RmaWNhdGlvbkJvZHkpO1xyXG4gICAgICAgIHRoaXMuX25vdGlmeU9ic2VydmVycyhub3RpZmljYXRpb24pO1xyXG5cclxuICAgICAgICBub3RpZmljYXRpb24uZGVzdHJveSgpO1xyXG4gICAgICAgIG5vdGlmaWNhdGlvbiA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXHJcbiAgICBwcml2YXRlIF9ub3RpZnlPYnNlcnZlcnMobm90aWZpY2F0aW9uOiBJTm90aWZpY2F0aW9uKSB7XHJcbiAgICAgICAgbGV0IG9ic2VydmVyOiBJT2JzZXJ2ZXIgPSBudWxsLFxyXG4gICAgICAgICAgICBvYnNlcnZlcnM6IElPYnNlcnZlcltdID0gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uTmFtZTogc3RyaW5nID0gbm90aWZpY2F0aW9uLmdldE5hbWUoKTtcclxuICAgICAgICBjb25zdCBvYnNlcnZlcnNSZWY6IElPYnNlcnZlcltdID0gdGhpcy5fb2JzZXJ2ZXJNYXBbbm90aWZpY2F0aW9uTmFtZV07XHJcblxyXG4gICAgICAgIGlmIChvYnNlcnZlcnNSZWYpIHtcclxuICAgICAgICAgICAgLy8gY2xvbmUgdGhlIGFycmF5IGluIGNhc2UgYW4gb2JzZXJ2ZXIgZ2V0cyByZW1vdmVkIHdoaWxlIHRoZSBub3RpZmljYXRpb24gaXMgYmVpbmcgc2VudFxyXG4gICAgICAgICAgICBvYnNlcnZlcnMgPSBvYnNlcnZlcnNSZWYuc2xpY2UoMCk7XHJcbiAgICAgICAgICAgIG9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLmhhbmRsZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2dldEhhc2hRdWVyeSgpOiB2b2lkIHtcclxuICAgICAgICBBcHBsaWNhdGlvbi5faGFzaFF1ZXJ5ID0ge307XHJcbiAgICAgICAgaWYgKCF3aW5kb3cubG9jYXRpb24uaGFzaCB8fCB3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cigxLCB3aW5kb3cubG9jYXRpb24uaGFzaC5sZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IGFIYXNoOiBzdHJpbmdbXSA9IGhhc2guc3BsaXQoJyYnKTtcclxuICAgICAgICBhSGFzaC5mb3JFYWNoKGhhc2hQYWlyID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYUhhc2ggPSBoYXNoUGFpci5zcGxpdCgnPScpO1xyXG4gICAgICAgICAgICBBcHBsaWNhdGlvbi5faGFzaFF1ZXJ5W2FIYXNoWzBdXSA9IC9eXFxkKyQvLnRlc3QoYUhhc2hbMV0pID8gcGFyc2VJbnQoYUhhc2hbMV0pIDogYUhhc2hbMV07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3RhdGljIG1ldGhvZHNcclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybnMgdGhlIEFwcGxpY2F0aW9uIHNpbmdsZXRvblxyXG4gICAgICogQHJldHVybiB7QXBwbGljYXRpb259XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogQXBwbGljYXRpb24ge1xyXG4gICAgICAgIGlmICghQXBwbGljYXRpb24uaW5zdGFuY2UpXHJcbiAgICAgICAgICAgIEFwcGxpY2F0aW9uLmluc3RhbmNlID0gbmV3IEFwcGxpY2F0aW9uKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBBcHBsaWNhdGlvbi5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldHMgYSBxdWVyeSB2YXJpYWJsZSBmcm9tIHRoZSB3aW5kb3cubG9jYXRpb24gaGFzaFxyXG4gICAgICogYXNzdW1lcyBzb21ldGhpbmcgbGlrZSBodHRwOi8vdXJsLyNmb289YmFyJmJhej1mb29cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YXJpYWJsZUlkXHJcbiAgICAgKiBAcmV0dXJuIHthbnl9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcXVlcnlWYXIodmFyaWFibGVJZDogc3RyaW5nKTogYW55IHtcclxuICAgICAgICBpZiAoQXBwbGljYXRpb24uX2hhc2hRdWVyeSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIEFwcGxpY2F0aW9uLl9nZXRIYXNoUXVlcnkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEFwcGxpY2F0aW9uLl9oYXNoUXVlcnlbdmFyaWFibGVJZF0gfHwgbnVsbDtcclxuICAgIH1cclxuXHJcbn0iXX0=
