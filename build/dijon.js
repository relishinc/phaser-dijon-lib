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
                    this.onAnimationComplete = null;
                    this.onMeshSwap = new Phaser.Signal();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpam9uL2NvcmUvQW5hbHl0aWNzTWFuYWdlci50cyIsImRpam9uL3V0aWxzL0RldmljZS50cyIsImRpam9uL3V0aWxzL0xvZ2dlci50cyIsImRpam9uL3V0aWxzL05vdGlmaWNhdGlvbnMudHMiLCJkaWpvbi91dGlscy9UZXh0dXJlcy50cyIsImRpam9uL2Rpc3BsYXkvQml0bWFwVGV4dC50cyIsImRpam9uL2Rpc3BsYXkvQ29tcG9uZW50LnRzIiwiZGlqb24vZGlzcGxheS9Hcm91cC50cyIsImRpam9uL2Rpc3BsYXkvU3ByaXRlLnRzIiwiZGlqb24vZGlzcGxheS9JbnZpc2libGVCdXR0b24udHMiLCJkaWpvbi9kaXNwbGF5L05pbmVTbGljZUltYWdlLnRzIiwiZGlqb24vZGlzcGxheS9TcGluZS50cyIsImRpam9uL2Rpc3BsYXkvVGV4dC50cyIsImRpam9uL3V0aWxzL1BsYWNlaG9sZGVycy50cyIsImRpam9uL3V0aWxzL1RpbWUudHMiLCJkaWpvbi91dGlscy9VdGlsLnRzIiwiZGlqb24vY29yZS9Bc3NldE1hbmFnZXIudHMiLCJkaWpvbi9jb3JlL0F1ZGlvTWFuYWdlci50cyIsImRpam9uL2NvcmUvR2FtZS50cyIsImRpam9uL2NvcmUvR2FtZU9iamVjdEZhY3RvcnkudHMiLCJkaWpvbi9jb3JlL1NlcXVlbmNlTWFuYWdlci50cyIsImRpam9uL2NvcmUvU3RhdGUudHMiLCJkaWpvbi9jb3JlL1N0b3JhZ2VNYW5hZ2VyLnRzIiwiZGlqb24vY29yZS9UcmFuc2l0aW9uTWFuYWdlci50cyIsImRpam9uL212Yy9Nb2RlbC50cyIsImRpam9uL212Yy9Db3B5TW9kZWwudHMiLCJkaWpvbi9tdmMvTWVkaWF0b3IudHMiLCJkaWpvbi9tdmMvTm90aWZpY2F0aW9uLnRzIiwiZGlqb24vYXBwbGljYXRpb24vQXBwbGljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDeEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFFBQVE7d0JBQ2xCLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2xDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM5RixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQVFhLHVCQUFXLEdBQXpCO29CQUNJLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQzt3QkFDdEIsV0FBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO29CQUU3QyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztnQkFDaEMsQ0FBQztnQkFRYSxvQkFBUSxHQUF0QixVQUF1QixVQUFrQjtvQkFDckMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUN2QyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ2hDLENBQUM7b0JBQ0QsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDO2dCQUN0RCxDQUFDO2dCQXJOZ0Isb0JBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ2hCLHlCQUFhLEdBQUcsNENBQTRDLENBQUM7Z0JBc05sRixrQkFBQztZQUFELENBek5BLEFBeU5DLElBQUE7WUF6TkQsc0NBeU5DLENBQUEiLCJmaWxlIjoiZGlqb24uanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQW5hbHl0aWNzTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlLCBwdWJsaWMgY2F0ZWdvcnk6IHN0cmluZyA9IG51bGwpIHsgfVxuXG4gICAgcHVibGljIHRyYWNrRXZlbnQoYWN0aW9uOiBzdHJpbmcgPSBudWxsLCBsYWJlbDogc3RyaW5nID0gbnVsbCwgdmFsdWU6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZSB8fCAhdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWFjdGlvbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEFuYWx5dGljc0V4Y2VwdGlvbignTm8gYWN0aW9uIGRlZmluZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5nYSgnc2VuZCcsICdldmVudCcsIHRoaXMuY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgdGhpcy5nYSgnc2VuZCcsICdldmVudCcsIHRoaXMuY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nYSgnc2VuZCcsICdldmVudCcsIHRoaXMuY2F0ZWdvcnksIGFjdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFja09tbml0dXJlRXZlbnQoZ2FtZU5hbWU6IHN0cmluZywgYWN0aXZpdHk6IHN0cmluZywgaXNHYW1lRXZlbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvL2NvbnNvbGUubG9nKCd0cmFja2luZyBvbW5pdHVyZScsIGdhbWVOYW1lLCBhY3Rpdml0eSwgaXNHYW1lRXZlbnQpO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvd1sndHJhY2tGbGFzaEV2ZW50J10gPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB3aW5kb3dbJ3RyYWNrRmxhc2hFdmVudCddKGdhbWVOYW1lLCBhY3Rpdml0eSwgaXNHYW1lRXZlbnQpO1xuICAgIH1cblxuICAgIC8vIGdldHRlciAvIHNldHRlclxuICAgIGdldCBhY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAod2luZG93WydnYSddKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgZ2EoKTogRnVuY3Rpb24ge1xuICAgICAgICByZXR1cm4gd2luZG93WydnYSddO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFuYWx5dGljc0V4Y2VwdGlvbiB7XG4gICAgcHVibGljIG5hbWU6IHN0cmluZyA9ICdBbmFseXRpY3NFeGNlcHRpb24nO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcpIHsgfVxufVxuIiwiaW1wb3J0IHtJQnJvd3Nlcn0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBjbGFzcyBEZXZpY2Uge1xuICAgIHB1YmxpYyBzdGF0aWMgSU9TOiBzdHJpbmcgPSAnaU9TJztcbiAgICBwdWJsaWMgc3RhdGljIEFORFJPSUQ6IHN0cmluZyA9ICdhbmRyb2lkJztcbiAgICBwdWJsaWMgc3RhdGljIFVOS05PV046IHN0cmluZyA9ICd1bmtub3duJztcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IG1vYmlsZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIERldmljZS5tb2JpbGVPUyAhPT0gRGV2aWNlLlVOS05PV047XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgY29jb29uKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBuYXZpZ2F0b3JbJ2lzQ29jb29uSlMnXSAhPT0gXCJ1bmRlZmluZWRcIik7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgbW9iaWxlT1MoKSB7XG4gICAgICAgIGNvbnN0IHVzZXJBZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50IHx8IHdpbmRvdy5uYXZpZ2F0b3IudmVuZG9yIHx8IHdpbmRvd1snb3BlcmEnXTtcbiAgICAgICAgaWYgKHVzZXJBZ2VudC5tYXRjaCgvaVBhZC9pKSB8fCB1c2VyQWdlbnQubWF0Y2goL2lQaG9uZS9pKSB8fCB1c2VyQWdlbnQubWF0Y2goL2lQb2QvaSkpIHtcbiAgICAgICAgICAgIHJldHVybiBEZXZpY2UuSU9TO1xuICAgICAgICB9IGVsc2UgaWYgKHVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKSkge1xuICAgICAgICAgICAgcmV0dXJuIERldmljZS5BTkRST0lEO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIERldmljZS5VTktOT1dOO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgYnJvd3NlcigpOiBJQnJvd3NlciB7XG4gICAgICAgIGNvbnN0IHVhOiBzdHJpbmcgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaXJlZm94OiB1YS5pbmRleE9mKCdmaXJlZm94JykgPiAtMSxcbiAgICAgICAgICAgIGllOiB1YS5pbmRleE9mKCdpZScpID4gLTEsXG4gICAgICAgICAgICBzYWZhcmk6IHVhLmluZGV4T2YoJ3NhZmFyaScpID4gLTEsXG4gICAgICAgICAgICBjaHJvbWU6IHVhLmluZGV4T2YoJ2Nocm9tZScpID4gLTEsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBwaXhlbFJhdGlvKCkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvICE9PSB1bmRlZmluZWQgPyB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA6IDE7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgY3VzdG9tUGl4ZWxSYXRpbygpIHtcbiAgICAgICAgcmV0dXJuIERldmljZS5waXhlbFJhdGlvID49IDEuNSA/IDIgOiAxO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgTG9nZ2VyIHtcbiAgICBwdWJsaWMgc3RhdGljIGVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyBzdGF0aWMgbG9nKGluc3RhbmNlLCAuLi5hcmdzKSB7XG4gICAgICAgIGlmICghTG9nZ2VyLmVuYWJsZWQpIHsgXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluc3RhbmNlICYmIGluc3RhbmNlLmNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICBhcmdzLnVuc2hpZnQoaW5zdGFuY2UuY29uc3RydWN0b3IudG9TdHJpbmcoKS5tYXRjaCgvXFx3Ky9nKVsxXSArICcgOjonKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJncyk7IFxuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgTm90aWZpY2F0aW9ucyB7XG4gICAgcHVibGljIHN0YXRpYyBBU1NFVF9NQU5BR0VSX0RBVEFfU0VUOiBzdHJpbmcgPSAnZGlqb25Bc3NldE1hbmFnZXJEYXRhU2V0JztcbiAgICBwdWJsaWMgc3RhdGljIEFTU0VUX01BTkFHRVJfQVNTRVRTX0NMRUFSRUQ6IHN0cmluZyA9ICdkaWpvbkFzc2V0TWFuYWdlckFzc2V0c0NsZWFyZWQnO1xuXG4gICAgcHVibGljIHN0YXRpYyBNT1VTRV9MRUFWRV9HTE9CQUw6IHN0cmluZyA9ICdtb3VzZU91dEdsb2JhbCc7XG4gICAgcHVibGljIHN0YXRpYyBNT1VTRV9FTlRFUl9HTE9CQUw6IHN0cmluZyA9ICdtb3VzZUVudGVyR2xvYmFsJztcbn0iLCJpbXBvcnQge0FwcGxpY2F0aW9ufSBmcm9tICcuLi9hcHBsaWNhdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBUZXh0dXJlcyB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IGdhbWUoKTogUGhhc2VyLkdhbWUge1xuICAgICAgICByZXR1cm4gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lO1xuICAgIH1cblxuICAgIHN0YXRpYyByZWN0KHdpZHRoOiBudW1iZXIgPSAxMDAsIGhlaWdodDogbnVtYmVyID0gMTAwLCBjb2xvcjogbnVtYmVyID0gMHhmZmZmZmYsIGFscGhhOiBudW1iZXIgPSAxLCBmaWxsOiBib29sZWFuID0gdHJ1ZSwgbGluZUNvbG9yOiBudW1iZXIgPSAweGZmZmZmZiwgbGluZVRoaWNrbmVzczogbnVtYmVyID0gMSwgbGluZUFscGhhOiBudW1iZXIgPSAxLCBvdXRsaW5lOiBib29sZWFuID0gZmFsc2UpOiBQSVhJLlRleHR1cmUge1xuICAgICAgICBjb25zdCBnZnggPSBUZXh0dXJlcy5nYW1lLmFkZC5ncmFwaGljcygwLCAwKTtcbiAgICAgICAgaWYgKGZpbGwpIHtcbiAgICAgICAgICAgIGdmeC5iZWdpbkZpbGwoY29sb3IsIGFscGhhKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3V0bGluZSkge1xuICAgICAgICAgICAgZ2Z4LmxpbmVXaWR0aCA9IGxpbmVUaGlja25lc3M7XG4gICAgICAgICAgICBnZngubGluZVN0eWxlKGxpbmVUaGlja25lc3MsIGxpbmVDb2xvciwgbGluZUFscGhhKTtcbiAgICAgICAgfVxuICAgICAgICBnZnguZHJhd1JlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IGdmeC5nZW5lcmF0ZVRleHR1cmUoKTtcbiAgICAgICAgVGV4dHVyZXMuZ2FtZS53b3JsZC5yZW1vdmUoZ2Z4KTtcblxuICAgICAgICByZXR1cm4gdGV4dHVyZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcm91bmRlZFJlY3Qod2lkdGg6IG51bWJlciA9IDEwMCwgaGVpZ2h0OiBudW1iZXIgPSAxMDAsIHJhZGl1czogbnVtYmVyID0gMTAsIGNvbG9yOiBudW1iZXIgPSAweGZmZmZmZiwgYWxwaGE6IG51bWJlciA9IDEsIGZpbGw6IGJvb2xlYW4gPSB0cnVlLCBsaW5lQ29sb3I6IG51bWJlciA9IDB4ZmZmZmZmLCBsaW5lVGhpY2tuZXNzOiBudW1iZXIgPSAxLCBsaW5lQWxwaGE6IG51bWJlciA9IDEsIG91dGxpbmU6IGJvb2xlYW4gPSBmYWxzZSk6IFBJWEkuVGV4dHVyZSB7XG4gICAgICAgIGNvbnN0IGdmeCA9IFRleHR1cmVzLmdhbWUuYWRkLmdyYXBoaWNzKDAsIDApO1xuICAgICAgICBpZiAoZmlsbCkge1xuICAgICAgICAgICAgZ2Z4LmJlZ2luRmlsbChjb2xvciwgYWxwaGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvdXRsaW5lKSB7XG4gICAgICAgICAgICBnZngubGluZVdpZHRoID0gbGluZVRoaWNrbmVzcztcbiAgICAgICAgICAgIGdmeC5saW5lU3R5bGUobGluZVRoaWNrbmVzcywgbGluZUNvbG9yLCBsaW5lQWxwaGEpO1xuICAgICAgICB9XG4gICAgICAgIGdmeC5kcmF3Um91bmRlZFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKTtcblxuICAgICAgICBjb25zdCB0ZXh0dXJlID0gZ2Z4LmdlbmVyYXRlVGV4dHVyZSgpO1xuICAgICAgICBUZXh0dXJlcy5nYW1lLndvcmxkLnJlbW92ZShnZngpO1xuXG4gICAgICAgIHJldHVybiB0ZXh0dXJlO1xuICAgIH1cblxuICAgIHN0YXRpYyBzcXVhcmUoc2l6ZTogbnVtYmVyID0gMTAwLCBjb2xvcjogbnVtYmVyID0gMHhmZmZmZmYsIGFscGhhOiBudW1iZXIgPSAxLCBmaWxsOiBib29sZWFuID0gdHJ1ZSwgbGluZUNvbG9yOiBudW1iZXIgPSAweGZmZmZmZiwgbGluZVRoaWNrbmVzczogbnVtYmVyID0gMSwgbGluZUFscGhhOiBudW1iZXIgPSAxLCBvdXRsaW5lOiBib29sZWFuID0gZmFsc2UpOiBQSVhJLlRleHR1cmUge1xuICAgICAgICByZXR1cm4gVGV4dHVyZXMucmVjdChzaXplLCBzaXplLCBjb2xvciwgYWxwaGEsIGZpbGwsIGxpbmVDb2xvciwgbGluZVRoaWNrbmVzcywgbGluZUFscGhhLCBvdXRsaW5lKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2lyY2xlKGRpYW1ldGVyOiBudW1iZXIgPSAxMDAsIGNvbG9yOiBudW1iZXIgPSAweGZmZmZmZiwgYWxwaGE6IG51bWJlciA9IDEsIGZpbGw6IGJvb2xlYW4gPSB0cnVlLCBsaW5lQ29sb3I6IG51bWJlciA9IDB4ZmZmZmZmLCBsaW5lVGhpY2tuZXNzOiBudW1iZXIgPSAxLCBsaW5lQWxwaGE6IG51bWJlciA9IDEsIG91dGxpbmU6IGJvb2xlYW4gPSBmYWxzZSk6IFBJWEkuVGV4dHVyZSB7XG4gICAgICAgIGNvbnN0IGdmeCA9IFRleHR1cmVzLmdhbWUuYWRkLmdyYXBoaWNzKDAsIDApO1xuICAgICAgICBpZiAoZmlsbCkge1xuICAgICAgICAgICAgZ2Z4LmJlZ2luRmlsbChjb2xvciwgYWxwaGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvdXRsaW5lKSB7XG4gICAgICAgICAgICBnZngubGluZVdpZHRoID0gbGluZVRoaWNrbmVzcztcbiAgICAgICAgICAgIGdmeC5saW5lU3R5bGUobGluZVRoaWNrbmVzcywgbGluZUNvbG9yLCBsaW5lQWxwaGEpO1xuICAgICAgICB9XG4gICAgICAgIGdmeC5kcmF3Q2lyY2xlKDAsIDAsIGRpYW1ldGVyKTtcblxuICAgICAgICBjb25zdCB0ZXh0dXJlID0gZ2Z4LmdlbmVyYXRlVGV4dHVyZSgpO1xuICAgICAgICBUZXh0dXJlcy5nYW1lLndvcmxkLnJlbW92ZShnZngpO1xuXG4gICAgICAgIHJldHVybiB0ZXh0dXJlO1xuICAgIH1cblxuICAgIHN0YXRpYyBlbGxpcHNlKHdpZHRoOiBudW1iZXIgPSA1MCwgaGVpZ2h0OiBudW1iZXIgPSAxMDAsIGNvbG9yOiBudW1iZXIgPSAweGZmZmZmZiwgYWxwaGE6IG51bWJlciA9IDEsIGZpbGw6IGJvb2xlYW4gPSB0cnVlLCBsaW5lQ29sb3I6IG51bWJlciA9IDB4ZmZmZmZmLCBsaW5lVGhpY2tuZXNzOiBudW1iZXIgPSAxLCBsaW5lQWxwaGE6IG51bWJlciA9IDEsIG91dGxpbmU6IGJvb2xlYW4gPSBmYWxzZSk6IFBJWEkuVGV4dHVyZSB7XG4gICAgICAgIGNvbnN0IGdmeCA9IFRleHR1cmVzLmdhbWUuYWRkLmdyYXBoaWNzKDAsIDApO1xuICAgICAgICBpZiAoZmlsbCkge1xuICAgICAgICAgICAgZ2Z4LmJlZ2luRmlsbChjb2xvciwgYWxwaGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvdXRsaW5lKSB7XG4gICAgICAgICAgICBnZngubGluZVdpZHRoID0gbGluZVRoaWNrbmVzcztcbiAgICAgICAgICAgIGdmeC5saW5lU3R5bGUobGluZVRoaWNrbmVzcywgbGluZUNvbG9yLCBsaW5lQWxwaGEpO1xuICAgICAgICB9XG4gICAgICAgIGdmeC5kcmF3RWxsaXBzZSgwLCAwLCB3aWR0aCAqIDAuNSwgaGVpZ2h0ICogMC41KTtcblxuICAgICAgICBjb25zdCB0ZXh0dXJlID0gZ2Z4LmdlbmVyYXRlVGV4dHVyZSgpO1xuICAgICAgICBUZXh0dXJlcy5nYW1lLndvcmxkLnJlbW92ZShnZngpO1xuXG4gICAgICAgIHJldHVybiB0ZXh0dXJlO1xuICAgIH1cbn0iLCJpbXBvcnQge0FwcGxpY2F0aW9ufSBmcm9tICcuLi9hcHBsaWNhdGlvbic7XG5pbXBvcnQge0dhbWV9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHtEZXZpY2V9IGZyb20gJy4uL3V0aWxzJztcblxuLyoqXG4gKiBUZXh0XG4gKi9cbmV4cG9ydCBjbGFzcyBCaXRtYXBUZXh0IGV4dGVuZHMgUGhhc2VyLkJpdG1hcFRleHQge1xuICAgIHByb3RlY3RlZCBfYXV0b0ZsYXR0ZW46Ym9vbGVhbiA9IHRydWU7XG4gICAgcHJvdGVjdGVkIF9jb2xvcjpudW1iZXIgPSAweGZmZmZmZjtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcih4Om51bWJlciA9IDAsIHk6bnVtYmVyID0gMCwgZm9udDpzdHJpbmcgPSBudWxsLCB0ZXh0OnN0cmluZyA9IFwiXCIsIHNpemU6bnVtYmVyID0gMTIsIGFsaWduOnN0cmluZyA9ICdsZWZ0JywgY29sb3I6bnVtYmVyID0gMHhmZmZmZmYsIHNtb290aGluZzpib29sZWFuID0gdHJ1ZSwgYXV0b0ZsYXR0ZW46Ym9vbGVhbiA9IHRydWUsIG1ha2VJbWFnZTpib29sZWFuID0gZmFsc2Upe1xuICAgICAgICBzdXBlcihBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUsIHgsIHksIGZvbnQsIHRleHQsIHNpemUsIGFsaWduKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChjb2xvciAhPT0gMHhmZmZmZmYpe1xuICAgICAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoc21vb3RoaW5nKXtcbiAgICAgICAgICAgdGhpcy5zbW9vdGhlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChtYWtlSW1hZ2UgIT09IHRydWUpe1xuICAgICAgICAgICAgdGhpcy5hdXRvRmxhdHRlbiA9IGF1dG9GbGF0dGVuO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMubWFrZUltYWdlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHVibGljIG1ha2VJbWFnZSgpOnZvaWR7XG4gICAgICAgIGNvbnN0IGltZzpQaGFzZXIuSW1hZ2UgPSA8UGhhc2VyLkltYWdlPnRoaXMuYWRkQ2hpbGRBdCh0aGlzLmdhbWUuYWRkLmltYWdlKDAsIDAsIHRoaXMuZ2VuZXJhdGVUZXh0dXJlKCkpLCAwKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBuID0gdGhpcy5jaGlsZHJlbi5sZW5ndGgtMTtcbiAgICAgICAgd2hpbGUgKG4gPiAwKXtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGRBdChuKTtcbiAgICAgICAgICAgIG4tLTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgZ2x5cGhzID0gdGhpc1snX2dseXBocyddO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdseXBocy5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICBnbHlwaHNbaV0uZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXNbJ19nbHlwaHMnXSA9IFtdO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgZmxhdHRlbihkZWxheTpudW1iZXIgPSBudWxsKTp2b2lke1xuICAgICAgICBpZiAoZGVsYXkpe1xuICAgICAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmFkZChkZWxheSwgKCk9Pnt0aGlzLmNhY2hlQXNCaXRtYXAgPSB0cnVlfSwgdGhpcyk7XG4gICAgICAgICAgICByZXR1cm47ICAgIFxuICAgICAgICAgfVxuICAgICAgICB0aGlzLmNhY2hlQXNCaXRtYXAgPSB0cnVlO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgdW5GbGF0dGVuKCk6dm9pZHtcbiAgICAgICAgdGhpcy5jYWNoZUFzQml0bWFwID0gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIHNldCBhdXRvRmxhdHRlbih2YWx1ZTpib29sZWFuKXtcbiAgICAgICAgdGhpcy5fYXV0b0ZsYXR0ZW4gPSB2YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuX2F1dG9GbGF0dGVuKXtcbiAgICAgICAgICAgIHRoaXMuZmxhdHRlbigpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMudW5GbGF0dGVuKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldCBhdXRvRmxhdHRlbigpOmJvb2xlYW57XG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRvRmxhdHRlbjtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIHNldCBjb2xvcih2YWx1ZTpudW1iZXIpe1xuICAgICAgICBpZih0aGlzLl9hdXRvRmxhdHRlbil7XG4gICAgICAgICAgICB0aGlzLnVuRmxhdHRlbigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XG4gICAgICAgIHRoaXMudGludCA9IHRoaXMuX2NvbG9yO1xuICAgICAgICBpZiAodGhpcy5fYXV0b0ZsYXR0ZW4pe1xuICAgICAgICAgICAgdGhpcy5mbGF0dGVuKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldCBjb2xvcigpOm51bWJlcntcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgc2V0IHRleHQodmFsdWU6c3RyaW5nKXtcbiAgICAgICAgaWYodGhpcy5fYXV0b0ZsYXR0ZW4pe1xuICAgICAgICAgICAgdGhpcy51bkZsYXR0ZW4oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpc1snX3RleHQnXSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSB0aGlzWydfdGV4dCddKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzWydfdGV4dCddID0gdmFsdWUudG9TdHJpbmcoKSB8fCAnJztcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9hdXRvRmxhdHRlbil7XG4gICAgICAgICAgICB0aGlzLmZsYXR0ZW4oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgZ2V0IHRleHQoKTpzdHJpbmd7XG4gICAgICAgIHJldHVybiB0aGlzWydfdGV4dCddO1xuICAgIH1cbiAgICBcbn0iLCJpbXBvcnQge0FwcGxpY2F0aW9ufSBmcm9tICcuLi9hcHBsaWNhdGlvbic7XG5pbXBvcnQge0dhbWV9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHtTcHJpdGUsIEdyb3VwfSBmcm9tICcuLi9kaXNwbGF5JztcblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XG4gICAgcHVibGljIGdhbWU6IEdhbWU7XG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgb3duZXI6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdhbWUgPSBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWU7XG4gICAgICAgIHRoaXMubmFtZSA9ICdDb21wb25lbnQnO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRPd25lcihvd25lcjogU3ByaXRlIHwgR3JvdXApOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vd25lciA9IG93bmVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogaW5pdGlhbGl6ZSB0aGUgY29tcG9uZW50LCBzZXQgdXAgdmFyaWFibGVzXG4gICAgKiBjYWxsZWQgYnkgdGhlIG93bmVyIGZpcnN0IGFmdGVyIHRoZSBjb21wb25lbnQgaXMgYXR0YWNoZWRcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgaW5pdCgpIHsgfVxuXG4gICAgLyoqXG4gICAgKiBhZGQgdmlzdWFsIGVsZW1lbnRzXG4gICAgKiBjYWxsZWQgYnkgdGhlIG93bmVyIGFmdGVyIGl0IGNhbGxzIHRoaXMgaW5pdCBtZXRob2RcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgYnVpbGRJbnRlcmZhY2UoKSB7IH1cblxuICAgIC8qKlxuICAgICogY2FsbGVkIGJ5IHRoZSBvd25lciBpbiBpdHMgdXBkYXRlIGN5Y2xlLCBldmVyeSBmcmFtZVxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyB1cGRhdGUoKSB7IH1cblxuICAgIC8qKlxuICAgICogcmVtb3ZlIGFueSB2aXN1YWwgZWxlbWVudHMgLyBzaWduYWxzIGFkZGVkXG4gICAgKiBvd25lciBjYWxscyB0aGlzIG1ldGhvZCBpbiBpdHMgb3duIGRlc3Ryb3kgbWV0aG9kXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIGRlc3Ryb3koKSB7IH1cbn0iLCJpbXBvcnQge0FwcGxpY2F0aW9ufSBmcm9tICcuLi9hcHBsaWNhdGlvbic7XG5pbXBvcnQge0dhbWUsIEdhbWVPYmplY3RGYWN0b3J5fSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7TWVkaWF0b3J9IGZyb20gJy4uL212Yyc7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnLi9Db21wb25lbnQnO1xuXG5leHBvcnQgY2xhc3MgR3JvdXAgZXh0ZW5kcyBQaGFzZXIuR3JvdXAge1xuICAgIHB1YmxpYyBnYW1lOiBHYW1lO1xuXG4gICAgcHJvdGVjdGVkIF9oYXNDb21wb25lbnRzOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIF9jb21wb25lbnRLZXlzOiBzdHJpbmdbXSA9IFtdO1xuICAgIHByb3RlY3RlZCBfY29tcG9uZW50czogeyBbY29tcG9uZW50TmFtZTogc3RyaW5nXTogQ29tcG9uZW50IH0gPSB7fTtcblxuICAgIHByb3RlY3RlZCBfbWVkaWF0b3I6IE1lZGlhdG9yID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSBcImRHcm91cFwiLCBhZGRUb1N0YWdlOiBib29sZWFuID0gZmFsc2UsIGNvbXBvbmVudHM6IENvbXBvbmVudFtdID0gbnVsbCwgZW5hYmxlQm9keT86IGJvb2xlYW4sIHBoeXNpY3NCb2R5VHlwZT86IG51bWJlcikge1xuICAgICAgICBzdXBlcihBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUsIG51bGwsIG5hbWUsIGFkZFRvU3RhZ2UsIGVuYWJsZUJvZHksIHBoeXNpY3NCb2R5VHlwZSk7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXQoeCwgeSk7XG5cbiAgICAgICAgaWYgKCFhZGRUb1N0YWdlKVxuICAgICAgICAgICAgdGhpcy5nYW1lLmFkZC5leGlzdGluZyh0aGlzKTtcblxuXG4gICAgICAgIGlmIChjb21wb25lbnRzKVxuICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnRzKGNvbXBvbmVudHMpO1xuICAgIH1cblxuICAgIC8vIFBoYXNlci5Hcm91cCBvdmVycmlkZXNcbiAgICAvKipcbiAgICAqIGNhbGxlZCBldmVyeSBmcmFtZVxuICAgICogaXRlcmF0ZXMgdGhlIGNvbXBvbmVudHMgbGlzdCBhbmQgY2FsbHMgY29tcG9uZW50LnVwZGF0ZSgpIG9uIGVhY2ggY29tcG9uZW50XG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICogQG92ZXJyaWRlXG4gICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBzdXBlci51cGRhdGUoKTtcbiAgICAgICAgaWYgKHRoaXMuX2hhc0NvbXBvbmVudHMpXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudHMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHJlbW92ZXMgYWxsIGNvbXBvbmVudHNcbiAgICAqIEByZXR1cm4ge1BoYXNlci5Hcm91cC5kZXN0cm95fVxuICAgICogQG92ZXJyaWRlXG4gICAgKi9cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMucmVtb3ZlTWVkaWF0b3IoKTtcbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuICAgIC8qKlxuICAgICogaW5pdGlhbGl6ZSB2YXJpYWJsZXNcbiAgICAqIGFkZCBtZWRpYXRvciwgaWYgbmVlZGVkXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7IH1cblxuICAgIC8qKlxuICAgICogYWRkIHZpc3VhbCBlbGVtZW50c1xuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHByb3RlY3RlZCBidWlsZEludGVyZmFjZSgpOiB2b2lkIHsgfVxuXG4gICAgLyoqXG4gICAgKiB1cGRhdGVzIHRoZSBpbnRlcm5hbCBsaXN0IG9mIGNvbXBvbmVudCBrZXlzIChzbyB3ZSBkb24ndCBoYXZlIHRvIGNhbGwgT2JqZWN0LmtleXMoKSBhbGwgdGhlIHRpbWUpXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHJpdmF0ZSBfdXBkYXRlQ29tcG9uZW50S2V5cygpIHtcbiAgICAgICAgdGhpcy5fY29tcG9uZW50S2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuX2NvbXBvbmVudHMpO1xuICAgICAgICB0aGlzLl9oYXNDb21wb25lbnRzID0gdGhpcy5fY29tcG9uZW50S2V5cy5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgLyoqXG4gICAgKiBhdHRhY2hlcyBhIGxpc3Qgb2YgY29tcG9uZW50cyB0byB0aGUgRGlqb24uVUlHcm91cFxuICAgICogQHBhcmFtIHtBcnJheX0gY29tcG9uZW50cyB0aGUgbGlzdCBvZiBjb21wb25lbnRzIHRvIGFkZFxuICAgICovXG4gICAgcHVibGljIGFkZENvbXBvbmVudHMgPSBmdW5jdGlvbiAoY29tcG9uZW50czogQ29tcG9uZW50W10pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzLmxlbmd0aCA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Rpam9uLlVJR3JvdXAgY29tcG9uZW50cyBtdXN0IGJlIGFuIGFycmF5Jyk7XG5cbiAgICAgICAgd2hpbGUgKGNvbXBvbmVudHMubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KGNvbXBvbmVudHMuc2hpZnQoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBhdHRhY2hlcyBhIGNvbXBvbmVudCB0byB0aGUgRGlqb24uVUlHcm91cFxuICAgICogQHBhcmFtIHtkaWpvbi5Db21wb25lbnR9IGNvbXBvbmVudCB0byBiZSBhdHRhY2hlZFxuICAgICovXG4gICAgcHVibGljIGFkZENvbXBvbmVudChjb21wb25lbnQ6IENvbXBvbmVudCk6IENvbXBvbmVudCB7XG4gICAgICAgIGNvbXBvbmVudC5zZXRPd25lcih0aGlzKTtcbiAgICAgICAgY29tcG9uZW50LmluaXQoKTtcbiAgICAgICAgY29tcG9uZW50LmJ1aWxkSW50ZXJmYWNlKCk7XG5cbiAgICAgICAgdGhpcy5fY29tcG9uZW50c1tjb21wb25lbnQubmFtZV0gPSBjb21wb25lbnQ7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvbXBvbmVudEtleXMoKTtcblxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICogaXRlcmF0ZXMgdGhyb3VnaCB0aGUgbGlzdCBvZiBjb21wb25lbnRzIGFuZCB1cGRhdGVzIGVhY2ggb25lXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIHVwZGF0ZUNvbXBvbmVudHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudEtleXMuZm9yRWFjaChcbiAgICAgICAgICAgIGNvbXBvbmVudE5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogdXBkYXRlcyBhbiBhdHRhY2hlZCBjb21wb25lbnQgKGNhbGxzIGNvbXBvbmVudC51cGRhdGUoKSlcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gY29tcG9uZW50TmFtZSB0aGUgbmFtZSBvZiB0aGUgY29tcG9uZW50IHRvIHVwZGF0ZVxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyB1cGRhdGVDb21wb25lbnQoY29tcG9uZW50TmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHNbY29tcG9uZW50TmFtZV0udXBkYXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiByZW1vdmVzIGFsbCB0aGUgY29tcG9uZW50cyBjdXJyZW50bHkgYXR0YWNoZWRcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgcmVtb3ZlQWxsQ29tcG9uZW50cygpIHtcbiAgICAgICAgd2hpbGUgKHRoaXMuX2NvbXBvbmVudEtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDb21wb25lbnQodGhpcy5fY29tcG9uZW50S2V5cy5wb3AoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHJlbW92ZXMgYSBzcGVjaWZpYyBjb21wb25lbnRcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gY29tcG9uZW50TmFtZSB0aGUgbmFtZSBvZiB0aGUgY29tcG9uZW50IHRvIHJlbW92ZVxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyByZW1vdmVDb21wb25lbnQoY29tcG9uZW50TmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29tcG9uZW50c1tjb21wb25lbnROYW1lXSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgdGhpcy5fY29tcG9uZW50c1tjb21wb25lbnROYW1lXS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHNbY29tcG9uZW50TmFtZV0gPSBudWxsO1xuICAgICAgICBkZWxldGUgdGhpcy5fY29tcG9uZW50c1tjb21wb25lbnROYW1lXTtcblxuICAgICAgICB0aGlzLl91cGRhdGVDb21wb25lbnRLZXlzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGZsYXR0ZW4oZGVsYXk6IG51bWJlciA9IDApOiB2b2lkIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlQXNCaXRtYXAgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmFkZChkZWxheSwgKCkgPT4geyB0aGlzLmNhY2hlQXNCaXRtYXAgPSB0cnVlIH0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHVuRmxhdHRlbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYWNoZUFzQml0bWFwID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHJlbW92ZXMgdGhlIG1lZGlhdG9yLCBpZiBpdCBleGlzdHNcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgcmVtb3ZlTWVkaWF0b3IoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fbWVkaWF0b3IpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tZWRpYXRvci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuX21lZGlhdG9yID0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGFkZEludGVybmFsKCk6IEdhbWVPYmplY3RGYWN0b3J5IHtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC50YXJnZXRHcm91cCA9IHRoaXM7XG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUuYWRkO1xuICAgIH1cbn0iLCJpbXBvcnQge0FwcGxpY2F0aW9ufSBmcm9tICcuLi9hcHBsaWNhdGlvbic7XG5pbXBvcnQge0dhbWV9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJy4vQ29tcG9uZW50JztcblxuZXhwb3J0IGNsYXNzIFNwcml0ZSBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuICAgIHB1YmxpYyBnYW1lOiBHYW1lO1xuXG4gICAgcHJvdGVjdGVkIF9oYXNDb21wb25lbnRzOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIF9jb21wb25lbnRLZXlzOiBzdHJpbmdbXSA9IFtdO1xuICAgIHByb3RlY3RlZCBfY29tcG9uZW50czogeyBbY29tcG9uZW50TmFtZTogc3RyaW5nXTogQ29tcG9uZW50IH0gPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKHg/OiBudW1iZXIsIHk/OiBudW1iZXIsIGtleT86IHN0cmluZyB8IFBoYXNlci5SZW5kZXJUZXh0dXJlIHwgUGhhc2VyLkJpdG1hcERhdGEgfCBQSVhJLlRleHR1cmUsIGZyYW1lPzogc3RyaW5nIHwgbnVtYmVyLCBwdWJsaWMgbmFtZTogc3RyaW5nID0gXCJkU3ByaXRlXCIsIGNvbXBvbmVudHM6IENvbXBvbmVudFtdID0gbnVsbCkge1xuICAgICAgICBzdXBlcihBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUsIHgsIHksIGtleSwgZnJhbWUpO1xuXG4gICAgICAgIGlmIChjb21wb25lbnRzKVxuICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnRzKGNvbXBvbmVudHMpO1xuICAgIH1cbiAgICAvLyBQaGFzZXIuU3ByaXRlIG92ZXJyaWRlc1xuICAgIC8qKlxuICAgICogY2FsbGVkIGV2ZXJ5IGZyYW1lXG4gICAgKiBpdGVyYXRlcyB0aGUgY29tcG9uZW50cyBsaXN0IGFuZCBjYWxscyBjb21wb25lbnQudXBkYXRlKCkgb24gZWFjaCBjb21wb25lbnRcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAb3ZlcnJpZGVcbiAgICAqL1xuICAgIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9oYXNDb21wb25lbnRzKVxuICAgICAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiByZW1vdmVzIGFsbCBjb21wb25lbnRzXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuR3JvdXAuZGVzdHJveX1cbiAgICAqIEBvdmVycmlkZVxuICAgICovXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsQ29tcG9uZW50cygpO1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgLyoqXG4gICAgKiBpbml0aWFsaXplIHZhcmlhYmxlc1xuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQgeyB9XG5cbiAgICAvKipcbiAgICAqIGFkZCB2aXN1YWwgZWxlbWVudHNcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwcm90ZWN0ZWQgYnVpbGRJbnRlcmZhY2UoKTogdm9pZCB7IH1cblxuICAgIC8qKlxuICAgICogdXBkYXRlcyB0aGUgaW50ZXJuYWwgbGlzdCBvZiBjb21wb25lbnQga2V5cyAoc28gd2UgZG9uJ3QgaGF2ZSB0byBjYWxsIE9iamVjdC5rZXlzKCkgYWxsIHRoZSB0aW1lKVxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHByaXZhdGUgX3VwZGF0ZUNvbXBvbmVudEtleXMoKSB7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudEtleXMgPSBPYmplY3Qua2V5cyh0aGlzLl9jb21wb25lbnRzKTtcbiAgICAgICAgdGhpcy5faGFzQ29tcG9uZW50cyA9IHRoaXMuX2NvbXBvbmVudEtleXMubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuICAgIC8qKlxuICAgICogYXR0YWNoZXMgYSBsaXN0IG9mIGNvbXBvbmVudHMgdG8gdGhlIERpam9uLlVJR3JvdXBcbiAgICAqIEBwYXJhbSB7QXJyYXl9IGNvbXBvbmVudHMgdGhlIGxpc3Qgb2YgY29tcG9uZW50cyB0byBhZGRcbiAgICAqL1xuICAgIHB1YmxpYyBhZGRDb21wb25lbnRzID0gZnVuY3Rpb24gKGNvbXBvbmVudHM6IENvbXBvbmVudFtdKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cy5sZW5ndGggPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEaWpvbi5VSUdyb3VwIGNvbXBvbmVudHMgbXVzdCBiZSBhbiBhcnJheScpO1xuXG4gICAgICAgIHdoaWxlIChjb21wb25lbnRzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChjb21wb25lbnRzLnNoaWZ0KCkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAqIGF0dGFjaGVzIGEgY29tcG9uZW50IHRvIHRoZSBEaWpvbi5VSUdyb3VwXG4gICAgKiBAcGFyYW0ge2Rpam9uLkNvbXBvbmVudH0gY29tcG9uZW50IHRvIGJlIGF0dGFjaGVkXG4gICAgKi9cbiAgICBwdWJsaWMgYWRkQ29tcG9uZW50KGNvbXBvbmVudDogQ29tcG9uZW50KTogQ29tcG9uZW50IHtcbiAgICAgICAgY29tcG9uZW50LnNldE93bmVyKHRoaXMpO1xuICAgICAgICBjb21wb25lbnQuaW5pdCgpO1xuICAgICAgICBjb21wb25lbnQuYnVpbGRJbnRlcmZhY2UoKTtcblxuICAgICAgICB0aGlzLl9jb21wb25lbnRzW2NvbXBvbmVudC5uYW1lXSA9IGNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ29tcG9uZW50S2V5cygpO1xuXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICogaXRlcmF0ZXMgdGhyb3VnaCB0aGUgbGlzdCBvZiBjb21wb25lbnRzIGFuZCB1cGRhdGVzIGVhY2ggb25lXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIHVwZGF0ZUNvbXBvbmVudHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudEtleXMuZm9yRWFjaChcbiAgICAgICAgICAgIGNvbXBvbmVudE5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogdXBkYXRlcyBhbiBhdHRhY2hlZCBjb21wb25lbnQgKGNhbGxzIGNvbXBvbmVudC51cGRhdGUoKSlcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gY29tcG9uZW50TmFtZSB0aGUgbmFtZSBvZiB0aGUgY29tcG9uZW50IHRvIHVwZGF0ZVxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyB1cGRhdGVDb21wb25lbnQoY29tcG9uZW50TmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHNbY29tcG9uZW50TmFtZV0udXBkYXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiByZW1vdmVzIGFsbCB0aGUgY29tcG9uZW50cyBjdXJyZW50bHkgYXR0YWNoZWRcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgcmVtb3ZlQWxsQ29tcG9uZW50cygpIHtcbiAgICAgICAgd2hpbGUgKHRoaXMuX2NvbXBvbmVudEtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDb21wb25lbnQodGhpcy5fY29tcG9uZW50S2V5cy5wb3AoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHJlbW92ZXMgYSBzcGVjaWZpYyBjb21wb25lbnRcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gY29tcG9uZW50TmFtZSB0aGUgbmFtZSBvZiB0aGUgY29tcG9uZW50IHRvIHJlbW92ZVxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyByZW1vdmVDb21wb25lbnQoY29tcG9uZW50TmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29tcG9uZW50c1tjb21wb25lbnROYW1lXSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgdGhpcy5fY29tcG9uZW50c1tjb21wb25lbnROYW1lXS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHNbY29tcG9uZW50TmFtZV0gPSBudWxsO1xuICAgICAgICBkZWxldGUgdGhpcy5fY29tcG9uZW50c1tjb21wb25lbnROYW1lXTtcblxuICAgICAgICB0aGlzLl91cGRhdGVDb21wb25lbnRLZXlzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGZsYXR0ZW4oZGVsYXk6IG51bWJlciA9IDApOiB2b2lkIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlQXNCaXRtYXAgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmFkZChkZWxheSwgKCkgPT4geyB0aGlzLmNhY2hlQXNCaXRtYXAgPSB0cnVlIH0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHVuRmxhdHRlbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYWNoZUFzQml0bWFwID0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHJlc29sdXRpb24oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dHVyZS5iYXNlVGV4dHVyZS5yZXNvbHV0aW9uO1xuICAgIH1cbn0iLCJpbXBvcnQge1Nwcml0ZX0gZnJvbSAnLi9TcHJpdGUnO1xuXG5leHBvcnQgY2xhc3MgSW52aXNpYmxlQnV0dG9uIGV4dGVuZHMgU3ByaXRlIHtcbiAgICBwcml2YXRlIF9oaXRXaWR0aDogbnVtYmVyO1xuICAgIHByaXZhdGUgX2hpdEhlaWdodDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIG5hbWU6IHN0cmluZywgdzogbnVtYmVyLCBoOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoeCwgeSwgbnVsbCwgbnVsbCwgbmFtZSk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB0aGlzLmJ1aWxkSW50ZXJmYWNlKCk7XG4gICAgICAgIHRoaXMuc2V0U2l6ZSh3LCBoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbnB1dEVuYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBidWlsZEludGVyZmFjZSgpIHtcbiAgICAgICAgdGhpcy5fYWRkSGl0UmVjdCgpO1xuICAgIH1cblxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuICAgIHByaXZhdGUgX2FkZEhpdFJlY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLl9oaXRXaWR0aCA+IDAgJiYgdGhpcy5faGl0SGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5oaXRBcmVhID0gbmV3IFBoYXNlci5SZWN0YW5nbGUoMCwgMCwgdGhpcy5faGl0V2lkdGgsIHRoaXMuX2hpdEhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuICAgIHB1YmxpYyBzZXRTaXplKHcsIGgpIHtcbiAgICAgICAgdGhpcy5faGl0V2lkdGggPSB3IHx8IDA7XG4gICAgICAgIHRoaXMuX2hpdEhlaWdodCA9IGggfHwgMDtcblxuICAgICAgICB0aGlzLl9hZGRIaXRSZWN0KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtHcm91cH0gZnJvbSAnLi9Hcm91cCc7XG5cbmV4cG9ydCBjbGFzcyBOaW5lU2xpY2VJbWFnZSBleHRlbmRzIEdyb3VwIHtcbiAgICBwcml2YXRlIF9fd2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIF9faGVpZ2h0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfc2l6ZTogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBfZGlzcGxheUxheWVyOiBQaGFzZXIuR3JvdXA7XG4gICAgcHJpdmF0ZSBfaW5wdXRMYXllcjogUGhhc2VyLkdyb3VwO1xuXG4gICAgcHVibGljIHRsOiBQaGFzZXIuSW1hZ2U7XG4gICAgcHVibGljIHQ6IFBoYXNlci5UaWxlU3ByaXRlO1xuICAgIHB1YmxpYyB0cjogUGhhc2VyLkltYWdlO1xuICAgIHB1YmxpYyByOiBQaGFzZXIuVGlsZVNwcml0ZTtcbiAgICBwdWJsaWMgYnI6IFBoYXNlci5JbWFnZTtcbiAgICBwdWJsaWMgYjogUGhhc2VyLlRpbGVTcHJpdGU7XG4gICAgcHVibGljIGJsOiBQaGFzZXIuSW1hZ2U7XG4gICAgcHVibGljIGw6IFBoYXNlci5UaWxlU3ByaXRlO1xuICAgIHB1YmxpYyB0aWxlOiBQaGFzZXIuVGlsZVNwcml0ZTtcblxuICAgIHByaXZhdGUgX2ludGVyYWN0aXZlQmFja2luZzogUGhhc2VyLkltYWdlID0gbnVsbDtcbiAgICBwcml2YXRlIF9pbnB1dEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgX2N1cnJlbnRCb3VuZHM6IFBJWEkuUmVjdGFuZ2xlID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcHVibGljIGtleTogc3RyaW5nLCBwdWJsaWMgdGV4dHVyZVBhdGg6IHN0cmluZywgcHVibGljIGZpbGxNaWRkbGU6IGJvb2xlYW4gPSB0cnVlLCBwdWJsaWMgdG9wSGVpZ2h0PzogbnVtYmVyLCBwdWJsaWMgcmlnaHRXaWR0aD86IG51bWJlciwgcHVibGljIGJvdHRvbUhlaWdodD86IG51bWJlciwgcHVibGljIGxlZnRXaWR0aD86IG51bWJlcikge1xuICAgICAgICBzdXBlcih4LCB5KTtcblxuICAgICAgICB0aGlzLl9fd2lkdGggPSBNYXRoLnJvdW5kKHdpZHRoKTtcbiAgICAgICAgdGhpcy5fX2hlaWdodCA9IE1hdGgucm91bmQoaGVpZ2h0KTtcblxuICAgICAgICB0aGlzLl9idWlsZCgpO1xuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKDEwLCB0aGlzLl9mbGF0dGVuLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9idWlsZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faW5wdXRMYXllciA9IHRoaXMuYWRkKHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKSk7XG4gICAgICAgIHRoaXMuX2Rpc3BsYXlMYXllciA9IHRoaXMuYWRkKHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKSk7XG5cbiAgICAgICAgdGhpcy50bCA9IDxQaGFzZXIuSW1hZ2U+dGhpcy5fZGlzcGxheUxheWVyLmFkZCh0aGlzLmdhbWUuYWRkLmltYWdlKDAsIDAsIHRoaXMua2V5LCB0aGlzLnRleHR1cmVQYXRoICsgJy90bCcpKTtcblxuICAgICAgICB0aGlzLnRyID0gPFBoYXNlci5JbWFnZT50aGlzLl9kaXNwbGF5TGF5ZXIuYWRkKHRoaXMuZ2FtZS5hZGQuaW1hZ2UodGhpcy5fX3dpZHRoLCAwLCB0aGlzLmtleSwgdGhpcy50ZXh0dXJlUGF0aCArICcvdHInKSk7XG5cbiAgICAgICAgdGhpcy50ID0gPFBoYXNlci5UaWxlU3ByaXRlPnRoaXMuX2Rpc3BsYXlMYXllci5hZGQodGhpcy5nYW1lLmFkZC50aWxlU3ByaXRlKHRoaXMudGwuZ2V0Qm91bmRzKCkud2lkdGgsIDAsIHRoaXMuX193aWR0aCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkud2lkdGggLSB0aGlzLnRyLmdldEJvdW5kcygpLndpZHRoLCB0aGlzLnRvcEhlaWdodCB8fCB0aGlzLnRsLmdldEJvdW5kcygpLmhlaWdodCwgdGhpcy5rZXksIHRoaXMudGV4dHVyZVBhdGggKyAnL3QnKSk7XG5cbiAgICAgICAgdGhpcy5sID0gPFBoYXNlci5UaWxlU3ByaXRlPnRoaXMuX2Rpc3BsYXlMYXllci5hZGQodGhpcy5nYW1lLmFkZC50aWxlU3ByaXRlKDAsIHRoaXMudGwuZ2V0Qm91bmRzKCkuaGVpZ2h0LCB0aGlzLmxlZnRXaWR0aCB8fCB0aGlzLnRsLmdldEJvdW5kcygpLndpZHRoLCAxMDAsIHRoaXMua2V5LCB0aGlzLnRleHR1cmVQYXRoICsgJy9sJykpO1xuXG4gICAgICAgIHRoaXMuYmwgPSA8UGhhc2VyLkltYWdlPnRoaXMuX2Rpc3BsYXlMYXllci5hZGQodGhpcy5nYW1lLmFkZC5pbWFnZSgwLCB0aGlzLl9faGVpZ2h0LCB0aGlzLmtleSwgdGhpcy50ZXh0dXJlUGF0aCArICcvYmwnKSk7XG5cbiAgICAgICAgdGhpcy5sLmhlaWdodCA9IHRoaXMuX19oZWlnaHQgLSB0aGlzLnRsLmdldEJvdW5kcygpLmhlaWdodCAtIHRoaXMuYmwuZ2V0Qm91bmRzKCkuaGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuYiA9IDxQaGFzZXIuVGlsZVNwcml0ZT50aGlzLl9kaXNwbGF5TGF5ZXIuYWRkKHRoaXMuZ2FtZS5hZGQudGlsZVNwcml0ZSh0aGlzLmJsLmdldEJvdW5kcygpLndpZHRoLCB0aGlzLl9faGVpZ2h0LCAxMDAsIHRoaXMuYm90dG9tSGVpZ2h0IHx8IHRoaXMuYmwuZ2V0Qm91bmRzKCkuaGVpZ2h0LCB0aGlzLmtleSwgdGhpcy50ZXh0dXJlUGF0aCArICcvYicpKTtcblxuICAgICAgICB0aGlzLmJyID0gPFBoYXNlci5JbWFnZT50aGlzLl9kaXNwbGF5TGF5ZXIuYWRkKHRoaXMuZ2FtZS5hZGQuaW1hZ2UodGhpcy5fX3dpZHRoLCB0aGlzLl9faGVpZ2h0LCB0aGlzLmtleSwgdGhpcy50ZXh0dXJlUGF0aCArICcvYnInKSk7XG5cbiAgICAgICAgdGhpcy5iLndpZHRoID0gdGhpcy5fX3dpZHRoIC0gdGhpcy5ibC5nZXRCb3VuZHMoKS53aWR0aCAtIHRoaXMuYnIuZ2V0Qm91bmRzKCkud2lkdGg7XG4gICAgICAgIHRoaXMuciA9IDxQaGFzZXIuVGlsZVNwcml0ZT50aGlzLl9kaXNwbGF5TGF5ZXIuYWRkKHRoaXMuZ2FtZS5hZGQudGlsZVNwcml0ZSh0aGlzLl9fd2lkdGgsIHRoaXMudHIuZ2V0Qm91bmRzKCkuaGVpZ2h0LCB0aGlzLnJpZ2h0V2lkdGggfHwgdGhpcy50ci5nZXRCb3VuZHMoKS53aWR0aCwgdGhpcy5fX2hlaWdodCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkuaGVpZ2h0IC0gdGhpcy5ici5nZXRCb3VuZHMoKS5oZWlnaHQsIHRoaXMua2V5LCB0aGlzLnRleHR1cmVQYXRoICsgJy9yJykpO1xuXG4gICAgICAgIHRoaXMudHIuc2V0UGl2b3QoJ3RyJyk7XG4gICAgICAgIHRoaXMuci5zZXRQaXZvdCgndHInKTtcblxuICAgICAgICB0aGlzLmJyLnNldFBpdm90KCdicicpO1xuICAgICAgICB0aGlzLmIuc2V0UGl2b3QoJ2JsJyk7XG4gICAgICAgIHRoaXMuYmwuc2V0UGl2b3QoJ2JsJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuZmlsbE1pZGRsZSkge1xuICAgICAgICAgICAgdGhpcy50aWxlID0gPFBoYXNlci5UaWxlU3ByaXRlPnRoaXMuX2Rpc3BsYXlMYXllci5hZGQodGhpcy5nYW1lLmFkZC50aWxlU3ByaXRlKHRoaXMudGwuZ2V0Qm91bmRzKCkud2lkdGggLSAxLCB0aGlzLnRsLmdldEJvdW5kcygpLmhlaWdodCAtIDEsIHRoaXMuX193aWR0aCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkud2lkdGggLSB0aGlzLnRyLmdldEJvdW5kcygpLndpZHRoICsgMiwgdGhpcy5fX2hlaWdodCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkuaGVpZ2h0IC0gdGhpcy5ici5nZXRCb3VuZHMoKS5oZWlnaHQgKyA0LCB0aGlzLmtleSwgdGhpcy50ZXh0dXJlUGF0aCArICcvdGlsZScpKTtcbiAgICAgICAgICAgIHRoaXMuc2VuZFRvQmFjayh0aGlzLnRpbGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYWRkSW50ZXJhY3RpdmVCYWNraW5nKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBnZnggPSB0aGlzLmdhbWUuYWRkLmdyYXBoaWNzKCk7XG4gICAgICAgIGdmeC5iZWdpbkZpbGwoMHhGRjAwMDAsIDApO1xuICAgICAgICBnZnguZHJhd1JlY3QodGhpcy54LCB0aGlzLnksIHRoaXMuX193aWR0aCwgdGhpcy5fX2hlaWdodCk7XG4gICAgICAgIGdmeC5lbmRGaWxsKCk7XG5cbiAgICAgICAgdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nID0gdGhpcy5faW5wdXRMYXllci5hZGQodGhpcy5nYW1lLmFkZC5pbWFnZSgwLCAwLCBnZnguZ2VuZXJhdGVUZXh0dXJlKCkpKTtcblxuICAgICAgICB0aGlzLl9pbnRlcmFjdGl2ZUJhY2tpbmcuaW5wdXRFbmFibGVkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmdhbWUud29ybGQucmVtb3ZlKGdmeCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2V0U2l6ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fdW5mbGF0dGVuKCk7XG5cbiAgICAgICAgdGhpcy50LndpZHRoID0gdGhpcy5iLndpZHRoID0gdGhpcy5fX3dpZHRoIC0gdGhpcy50bC5nZXRCb3VuZHMoKS53aWR0aCAtIHRoaXMudHIuZ2V0Qm91bmRzKCkud2lkdGg7XG4gICAgICAgIHRoaXMuci54ID0gdGhpcy50ci54ID0gdGhpcy5ici54ID0gdGhpcy5fX3dpZHRoO1xuICAgICAgICB0aGlzLmwuaGVpZ2h0ID0gdGhpcy5yLmhlaWdodCA9IHRoaXMuX19oZWlnaHQgLSB0aGlzLnRyLmdldEJvdW5kcygpLmhlaWdodCAtIHRoaXMuYmwuZ2V0Qm91bmRzKCkuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJsLnkgPSB0aGlzLmIueSA9IHRoaXMuYnIueSA9IHRoaXMuX19oZWlnaHQ7XG5cbiAgICAgICAgaWYgKHRoaXMuZmlsbE1pZGRsZSkge1xuICAgICAgICAgICAgdGhpcy50aWxlLndpZHRoID0gdGhpcy5fX3dpZHRoIC0gdGhpcy50ci5nZXRCb3VuZHMoKS53aWR0aCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkud2lkdGggKyA0XG4gICAgICAgICAgICB0aGlzLnRpbGUuaGVpZ2h0ID0gdGhpcy5fX2hlaWdodCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkuaGVpZ2h0IC0gdGhpcy5ibC5nZXRCb3VuZHMoKS5oZWlnaHQgKyA0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nLndpZHRoID0gdGhpcy5fX3dpZHRoO1xuICAgICAgICB0aGlzLl9pbnRlcmFjdGl2ZUJhY2tpbmcuaGVpZ2h0ID0gdGhpcy5fX2hlaWdodDtcblxuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKDEwLCB0aGlzLl9mbGF0dGVuLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9hZGRJbnB1dCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnRlcmFjdGl2ZUJhY2tpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZEludGVyYWN0aXZlQmFja2luZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVtb3ZlSW5wdXQoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nLmlucHV0RW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3VuZmxhdHRlbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZGlzcGxheUxheWVyLmNhY2hlQXNCaXRtYXAgPSBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2ZsYXR0ZW4oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2Rpc3BsYXlMYXllci5jYWNoZUFzQml0bWFwID0gdHJ1ZTsvL3RoaXMuZ2FtZS5yZW5kZXJUeXBlID09PSBQaGFzZXIuV0VCR0w7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpbnB1dEVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faW5wdXRFbmFibGVkID0gdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLl9pbnB1dEVuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZElucHV0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVJbnB1dCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBldmVudHMoKTogUGhhc2VyLkV2ZW50cyB7XG4gICAgICAgIGlmICghdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nIHx8ICF0aGlzLl9pbnRlcmFjdGl2ZUJhY2tpbmcuaW5wdXRFbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nLmV2ZW50cztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlucHV0KCk6IFBoYXNlci5JbnB1dEhhbmRsZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nLmlucHV0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaFNpemUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9fd2lkdGggPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fc2V0U2l6ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdlNpemUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9faGVpZ2h0ID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX3NldFNpemUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGhTaXplKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fd2lkdGg7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB2U2l6ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fX2hlaWdodDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0U2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl9fd2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5fX2hlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5fc2V0U2l6ZSgpO1xuICAgIH1cbn0iLCJpbXBvcnQge0FwcGxpY2F0aW9ufSBmcm9tICcuLi9hcHBsaWNhdGlvbic7XG5pbXBvcnQge0dhbWV9IGZyb20gJy4uL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgU3BpbmUgZXh0ZW5kcyBQSVhJLnNwaW5lLlNwaW5lIHtcbiAgICBwdWJsaWMgc3RhdGljIERFRkFVTFRfU1BFRUQ6IG51bWJlciA9IDAuMDE2NzsvLyA2MCBmcHM7XG4gICAgcHVibGljIGRlYnVnOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfY3JlYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBvbkNyZWF0ZTogUGhhc2VyLlNpZ25hbCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgcHVibGljIG9uQW5pbWF0aW9uQ29tcGxldGU6IFBoYXNlci5TaWduYWwgPSBudWxsO1xuICAgIHB1YmxpYyBvbk1lc2hTd2FwOiBQaGFzZXIuU2lnbmFsID0gbmV3IFBoYXNlci5TaWduYWwoKTtcblxuICAgIHByb3RlY3RlZCBfY2FuVXBkYXRlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwcm90ZWN0ZWQgX3BhdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCBfc3BlZWQ6IG51bWJlciA9IDE7XG5cbiAgICBwcm90ZWN0ZWQgX2JvdW5kc09mZnNldDogUGhhc2VyLlBvaW50ID0gbmV3IFBoYXNlci5Qb2ludCgwLCAwKTtcbiAgICBwcm90ZWN0ZWQgX2JvdW5kc1dpZHRoU2NhbGU6IG51bWJlciA9IDE7XG4gICAgcHJvdGVjdGVkIF9ib3VuZHNIZWlnaHRTY2FsZTogbnVtYmVyID0gMTtcbiAgICBwcm90ZWN0ZWQgX2N1cnJlbnRCb3VuZHM6IFBJWEkuUmVjdGFuZ2xlID0gbmV3IFBJWEkuUmVjdGFuZ2xlKCk7XG5cbiAgICBwdWJsaWMgcGh5c2ljc1Nwcml0ZTogUGhhc2VyLlNwcml0ZTtcbiAgICBwcm90ZWN0ZWQgX3BoeXNpY3NPZmZzZXQ6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSA9IHsgeDogMCwgeTogMCB9O1xuICAgIHByb3RlY3RlZCBfcGh5c2ljc0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHB1YmxpYyBub25NZXNoVmVyc2lvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGFzc2V0TmFtZTogc3RyaW5nID0gJycsIHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDApIHtcbiAgICAgICAgc3VwZXIoQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lLCB4LCB5LCBTcGluZS5jcmVhdGVTcGluZURhdGEoU3BpbmUuTE9BRF9OT05fTUVTSCA/IChhc3NldE5hbWUgKyBTcGluZS5OT05fTUVTSF9TVUZGSVgpIDogYXNzZXROYW1lKSk7XG4gICAgICAgIGlmIChTcGluZS5MT0FEX05PTl9NRVNIKSB7XG4gICAgICAgICAgICB0aGlzLm5vbk1lc2hWZXJzaW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpbml0aWFsaXplIHN0YXRpY1xuICAgICAgICBTcGluZS5pbml0aWFsaXplKCk7XG4gICAgICAgIFNwaW5lLm9uTm9uTWVzaEZQUy5hZGRPbmNlKHRoaXMubG9hZE5vbk1lc2hWZXJzaW9uLCB0aGlzKTtcblxuICAgICAgICB0aGlzLm5hbWUgPSBhc3NldE5hbWU7XG4gICAgICAgIHRoaXMuc2tlbGV0b24uc2V0VG9TZXR1cFBvc2UoKTtcbiAgICAgICAgdGhpcy5fY3JlYXRlQm91bmRzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlKDApO1xuICAgICAgICB0aGlzLmF1dG9VcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkFuaW1hdGlvbkNvbXBsZXRlID0gdGhpcy5zdGF0ZS5vbkFuaW1hdGlvbkNvbXBsZXRlO1xuICAgICAgICB0aGlzLmhpdEFyZWEgPSBuZXcgUGhhc2VyLlJlY3RhbmdsZSgwLCAtIHRoaXMuc2tlbGV0b24uZGF0YS5oZWlnaHQsIHRoaXMuc2tlbGV0b24uZGF0YS53aWR0aCwgdGhpcy5za2VsZXRvbi5kYXRhLmhlaWdodCk7XG4gICAgICAgIC8vdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmFkZCgxMDAsIHRoaXMuX29uQ3JlYXRlSW50ZXJuYWwsIHRoaXMpO1xuXG4gICAgICAgIGlmIChTcGluZS5BVVRPX01FU0ggJiYgIVNwaW5lLkxPQURfTk9OX01FU0gpIHtcbiAgICAgICAgICAgIFNwaW5lLmRldGVjdEF1dG9NZXNoKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9vbkNyZWF0ZUludGVybmFsKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9jcmVhdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fY3JlYXRlKCk7XG4gICAgICAgIHRoaXMub25DcmVhdGUuZGlzcGF0Y2goKTtcbiAgICAgICAgdGhpcy5fY2FuVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gdG8gb3ZlcnJpZGVcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIgPSBTcGluZS5ERUZBVUxUX1NQRUVEKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fY3JlYXRlZCAmJiB0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgdGhpcy5fb25DcmVhdGVJbnRlcm5hbCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9wYXVzZWQgfHwgIXRoaXMuX2NhblVwZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX3BoeXNpY3NFbmFibGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLnBoeXNpY3NTcHJpdGUuYm9keS5wb3NpdGlvbi54ICsgdGhpcy5fcGh5c2ljc09mZnNldC54O1xuICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5waHlzaWNzU3ByaXRlLmJvZHkucG9zaXRpb24ueSArIHRoaXMuX3BoeXNpY3NPZmZzZXQueSArICh0aGlzLnNjYWxlLnkgPiAwID8gdGhpcy5waHlzaWNzU3ByaXRlLmJvZHkuaGVpZ2h0IDogMCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci51cGRhdGUodGhpcy5fc3BlZWQgKiBkdCk7XG5cblxuICAgIH1cblxuICAgIHB1YmxpYyBpbml0UGh5c2ljcyh0eXBlOiBudW1iZXIsIG9mZnNldDogeyB4PzogbnVtYmVyLCB5PzogbnVtYmVyIH0pOiBib29sZWFuIHtcbiAgICAgICAgdGhpcy5fY3JlYXRlQm91bmRzKCk7XG4gICAgICAgIGlmICh0eXBlICE9IFBoYXNlci5QaHlzaWNzLkFSQ0FERSAmJlxuICAgICAgICAgICAgdHlwZSAhPSBQaGFzZXIuUGh5c2ljcy5OSU5KQSAmJlxuICAgICAgICAgICAgdHlwZSAhPSBQaGFzZXIuUGh5c2ljcy5QMkpTKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGlmIChvZmZzZXQueCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9waHlzaWNzT2Zmc2V0LnggPSBvZmZzZXQueDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvZmZzZXQueSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9waHlzaWNzT2Zmc2V0LnkgPSBvZmZzZXQueTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGh5c2ljc1Nwcml0ZSA9IDxQaGFzZXIuU3ByaXRlPnRoaXMucGFyZW50LmFkZENoaWxkKHRoaXMuZ2FtZS5hZGQuc3ByaXRlKHRoaXMueCArIHRoaXMuX3BoeXNpY3NPZmZzZXQueCwgdGhpcy55IC0gdGhpcy5fcGh5c2ljc09mZnNldC55KSk7XG5cbiAgICAgICAgdGhpcy5waHlzaWNzU3ByaXRlLm5hbWUgPSB0aGlzLmFzc2V0TmFtZSArICdfcGh5c2ljc1Nwcml0ZSc7XG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmVuYWJsZSh0aGlzLnBoeXNpY3NTcHJpdGUsIHR5cGUpO1xuICAgICAgICB0aGlzLl9waHlzaWNzRW5hYmxlZCA9ICh0aGlzLnBoeXNpY3NTcHJpdGUuYm9keSAhPT0gbnVsbCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9waHlzaWNzRW5hYmxlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzYWJsZVBoeXNpY3MoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3BoeXNpY3NFbmFibGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIGVuYWJsZVBoeXNpY3MoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3BoeXNpY3NFbmFibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZE5vbk1lc2hWZXJzaW9uKCk6IHZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLm5vbk1lc2hWZXJzaW9uID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8vIHNldHMgdGhlIG5vbk1lc2hWZXJzaW9uIGZsYWcgc28gdGhpcyBtZXRob2QgZG9lc24ndCBydW4gbW9yZSB0aGFuIG9uY2VcbiAgICAgICAgLy90aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub25NZXNoVmVyc2lvbiA9IHRydWU7XG4gICAgICAgIHRoaXMuYWxwaGEgPSAwO1xuICAgICAgICAvLyBzdG9yZSB0aGUgdHJhY2tzIGFuZCBzaWduYWxzXG4gICAgICAgIGNvbnN0IHRyYWNrcyA9IHRoaXMuc3RhdGUudHJhY2tzO1xuICAgICAgICBjb25zdCBzaWduYWw6IFBoYXNlci5TaWduYWwgPSB0aGlzLnN0YXRlLm9uQW5pbWF0aW9uQ29tcGxldGU7XG5cbiAgICAgICAgLy8gZGVzdHJveSB0aGUgc2xvdCBjb250YWluZXJzXG4gICAgICAgIHdoaWxlICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICg8UGhhc2VyLkdyb3VwPnRoaXMucmVtb3ZlQ2hpbGRBdCgwKSkuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVzZXQgdGhlIHNwaW5lIGRhdGFcbiAgICAgICAgdGhpcy5zZXR1cChTcGluZS5jcmVhdGVTcGluZURhdGEodGhpcy5uYW1lICsgU3BpbmUuTk9OX01FU0hfU1VGRklYKSk7XG4gICAgICAgIHRoaXMuc3RhdGUuYXBwbHkodGhpcy5za2VsZXRvbik7XG5cbiAgICAgICAgLy8gcmVzZXQgdGhlIHN0YXRlXG4gICAgICAgIHRoaXMuc3RhdGUudHJhY2tzID0gdHJhY2tzO1xuICAgICAgIFxuICAgICAgICAvLyByZXNldCB0aGUgc2lnbmFsc1xuICAgICAgICBpZiAoc2lnbmFsICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9uQW5pbWF0aW9uQ29tcGxldGUucmVtb3ZlQWxsKCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9uQW5pbWF0aW9uQ29tcGxldGUuZGlzcG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5vbkFuaW1hdGlvbkNvbXBsZXRlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMub25BbmltYXRpb25Db21wbGV0ZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9uQW5pbWF0aW9uQ29tcGxldGUgPSBzaWduYWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9uQW5pbWF0aW9uQ29tcGxldGUgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25BbmltYXRpb25Db21wbGV0ZSA9IHRoaXMuc3RhdGUub25BbmltYXRpb25Db21wbGV0ZTtcblxuICAgICAgICAvLyBmb3JjZSBhbiB1cGRhdGVcbiAgICAgICAgLy90aGlzLnVwZGF0ZSgpO1xuXG4gICAgICAgIC8vIGNsZWFyIHRoZSBtZXNoZWQgc3BpbmUgYXNzZXRzXG4gICAgICAgICg8R2FtZT50aGlzLmdhbWUpLmFzc2V0LmNsZWFyU3BpbmVBc3NldCh0aGlzLm5hbWUpO1xuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKDEwMCwgKCkgPT4geyB0aGlzLmFscGhhID0gMSB9LCB0aGlzKTtcblxuICAgICAgICB0aGlzLm9uTWVzaFN3YXAuZGlzcGF0Y2goKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZVNwaW5lRGF0YShhc3NldE5hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGNvbnN0IHNwaW5lID0gUElYSS5zcGluZTtcbiAgICAgICAgY29uc3Qgc3BpbmVBdGxhcyA9IG5ldyBzcGluZS5TcGluZVJ1bnRpbWUuQXRsYXMoQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lLmNhY2hlLmdldFRleHQoYXNzZXROYW1lICsgJy5hdGxhcycpLCB0aGlzLmF0bGFzQ2FsbGJhY2tGdW5jdGlvbik7XG4gICAgICAgIGNvbnN0IHNwaW5lSnNvblBhcnNlciA9IG5ldyBzcGluZS5TcGluZVJ1bnRpbWUuU2tlbGV0b25Kc29uUGFyc2VyKG5ldyBzcGluZS5TcGluZVJ1bnRpbWUuQXRsYXNBdHRhY2htZW50UGFyc2VyKHNwaW5lQXRsYXMpKTtcbiAgICAgICAgY29uc3Qgc2tlbGV0b25EYXRhID0gc3BpbmVKc29uUGFyc2VyLnJlYWRTa2VsZXRvbkRhdGEoQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lLmNhY2hlLmdldEpTT04oYXNzZXROYW1lICsgJy5qc29uJykpO1xuICAgICAgICByZXR1cm4gc2tlbGV0b25EYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXRsYXNDYWxsYmFja0Z1bmN0aW9uKGxpbmUsIGNhbGxiYWNrKSB7XG4gICAgICAgIC8vY2FsbGJhY2soUElYSS5CYXNlVGV4dHVyZS5mcm9tSW1hZ2UoJ2Fzc2V0cy9zcGluZS8nICsgbGluZSkpO1xuICAgICAgICBjb25zdCBsaW5lQXJyID0gbGluZS5zcGxpdCgnQCcgKyBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUucmVzb2x1dGlvbiArICd4Jyk7XG4gICAgICAgIGNvbnN0IHVybCA9IGxpbmVBcnIuam9pbignJyk7XG5cbiAgICAgICAgY2FsbGJhY2sobmV3IFBJWEkuQmFzZVRleHR1cmUoQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lLmNhY2hlLmdldEltYWdlKHVybCksIFBJWEkuc2NhbGVNb2Rlcy5ERUZBVUxUKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBwYXVzZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXVzZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwYXVzZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fcGF1c2VkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzcGVlZCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3BlZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzcGVlZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3NwZWVkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBib3VuZHNPZmZzZXQob2Zmc2V0OiBQaGFzZXIuUG9pbnQpIHtcbiAgICAgICAgdGhpcy5fYm91bmRzT2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICB0aGlzLl9jdXJyZW50Qm91bmRzID0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGJvdW5kc09mZnNldCgpOiBQaGFzZXIuUG9pbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5fYm91bmRzT2Zmc2V0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYm91bmRzV2lkdGhTY2FsZShzY2FsZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2JvdW5kc1dpZHRoU2NhbGUgPSBzY2FsZTtcbiAgICAgICAgdGhpcy5fY3VycmVudEJvdW5kcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBib3VuZHNXaWR0aFNjYWxlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ib3VuZHNXaWR0aFNjYWxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYm91bmRzSGVpZ2h0U2NhbGUoc2NhbGU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9ib3VuZHNIZWlnaHRTY2FsZSA9IHNjYWxlO1xuICAgICAgICB0aGlzLl9jdXJyZW50Qm91bmRzID0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGJvdW5kc0hlaWdodFNjYWxlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ib3VuZHNIZWlnaHRTY2FsZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Qm91bmRzKCk6IFBJWEkuUmVjdGFuZ2xlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRCb3VuZHMgfHwgdGhpcy5fY3JlYXRlQm91bmRzKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVCb3VuZHMoKTogUElYSS5SZWN0YW5nbGUge1xuICAgICAgICB0aGlzLl9jdXJyZW50Qm91bmRzID0gbmV3IFBJWEkuUmVjdGFuZ2xlKHRoaXMueCArIHRoaXMuX2JvdW5kc09mZnNldC54ICogdGhpcy5zY2FsZS54LCB0aGlzLnkgLSAodGhpcy5za2VsZXRvbi5kYXRhLmhlaWdodCAqIHRoaXMuc2NhbGUueSkgKyB0aGlzLl9ib3VuZHNPZmZzZXQueSAqIHRoaXMuc2NhbGUueSwgdGhpcy5za2VsZXRvbi5kYXRhLndpZHRoICogTWF0aC5hYnModGhpcy5zY2FsZS54KSAqIHRoaXMuYm91bmRzV2lkdGhTY2FsZSwgdGhpcy5za2VsZXRvbi5kYXRhLmhlaWdodCAqIE1hdGguYWJzKHRoaXMuc2NhbGUueSkgKiB0aGlzLmJvdW5kc0hlaWdodFNjYWxlKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudEJvdW5kcztcbiAgICB9XG5cbiAgICAvLyBhbHNvIHVwZGF0ZXMgdGhlIGJvdW5kc1xuICAgIHB1YmxpYyBzZXRTY2FsZSh4OiBudW1iZXIgPSBudWxsLCB5OiBudW1iZXIgPSBudWxsKSB7XG4gICAgICAgIGlmICh4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNjYWxlLnggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGlmICh5ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNjYWxlLnkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2N1cnJlbnRCb3VuZHMgPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Qm91bmRzKCkud2lkdGg7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Qm91bmRzKCkuaGVpZ2h0O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYm9keSgpOiBhbnkge1xuICAgICAgICBpZiAoIXRoaXMuX3BoeXNpY3NFbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5waHlzaWNzU3ByaXRlLmJvZHk7XG4gICAgfVxuXG4gICAgLy8gc3RhdGljIG1ldGhvZHNcbiAgICAvLyBhdXRvIG1lc2ggLyBub24tbWVzaCBhc3NldCBsb2FkaW5nXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBJTklUSUFMSVpFRDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCBzdGF0aWMgZ2FtZTogR2FtZSA9IG51bGw7XG4gICAgcHJvdGVjdGVkIHN0YXRpYyBub25NZXNoVGltZXI6IFBoYXNlci5UaW1lckV2ZW50ID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgc3RhdGljIG9uTm9uTWVzaEZQUzogUGhhc2VyLlNpZ25hbDtcblxuICAgIHB1YmxpYyBzdGF0aWMgTE9BRF9OT05fTUVTSDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIHN0YXRpYyBBVVRPX01FU0g6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHB1YmxpYyBzdGF0aWMgREVGQVVMVF9OT05fTUVTSF9TVUZGSVg6IHN0cmluZyA9ICdfbm9tZXNoJztcbiAgICBwdWJsaWMgc3RhdGljIE5PTl9NRVNIX1NVRkZJWDogc3RyaW5nID0gbnVsbDtcblxuICAgIHB1YmxpYyBzdGF0aWMgREVGQVVMVF9OT05fTUVTSF9GUFM6IG51bWJlciA9IDM1O1xuICAgIHB1YmxpYyBzdGF0aWMgTk9OX01FU0hfRlBTOiBudW1iZXIgPSBudWxsO1xuXG4gICAgcHVibGljIHN0YXRpYyBpbml0aWFsaXplKCk6IHZvaWQge1xuICAgICAgICBpZiAoU3BpbmUuSU5JVElBTElaRUQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBTcGluZS5JTklUSUFMSVpFRCA9IHRydWU7XG4gICAgICAgIFNwaW5lLmdhbWUgPSBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWU7XG4gICAgICAgIFNwaW5lLm9uTm9uTWVzaEZQUyA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBkZXRlY3RBdXRvTWVzaCgpOiB2b2lkIHtcbiAgICAgICAgU3BpbmUuZ2FtZS50aW1lLmFkdmFuY2VkVGltaW5nID0gdHJ1ZTtcbiAgICAgICAgU3BpbmUuZ2FtZS50aW1lLmV2ZW50cy5hZGQoMjAwMCwgU3BpbmUuY2hlY2tOb25NZXNoVGhyZXNob2xkLCBTcGluZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBkZXN0cm95Tm9uTWVzaFRpbWVyKCk6IHZvaWQge1xuICAgICAgICBpZiAoU3BpbmUubm9uTWVzaFRpbWVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICBTcGluZS5nYW1lLnRpbWUuZXZlbnRzLnJlbW92ZShTcGluZS5ub25NZXNoVGltZXIpO1xuICAgICAgICAgICAgU3BpbmUubm9uTWVzaFRpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGNoZWNrTm9uTWVzaFRocmVzaG9sZCgpOiB2b2lkIHtcbiAgICAgICAgU3BpbmUuZGVzdHJveU5vbk1lc2hUaW1lcigpO1xuICAgICAgICBTcGluZS5ub25NZXNoVGltZXIgPSBTcGluZS5nYW1lLnRpbWUuZXZlbnRzLnJlcGVhdCg1MDAsIDEwLCBTcGluZS5jaGVja0F1dG9NZXNoRlBTLCBTcGluZSk7XG4gICAgICAgIFNwaW5lLmdhbWUudGltZS5ldmVudHMuYWRkKDU1MDAsIFNwaW5lLmRpc2FibGVBZHZhbmNlZFRpbWluZywgU3BpbmUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY2hlY2tBdXRvTWVzaEZQUygpOiB2b2lkIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmdhbWUudGltZS5mcHMsIFNwaW5lLk5PTl9NRVNIX0ZQUylcbiAgICAgICAgaWYgKFNwaW5lLmdhbWUudGltZS5mcHMgPCBTcGluZS5OT05fTUVTSF9GUFMpIHtcbiAgICAgICAgICAgIFNwaW5lLmRlc3Ryb3lOb25NZXNoVGltZXIoKTtcbiAgICAgICAgICAgIFNwaW5lLkxPQURfTk9OX01FU0ggPSB0cnVlO1xuICAgICAgICAgICAgU3BpbmUub25Ob25NZXNoRlBTLmRpc3BhdGNoKCk7XG4gICAgICAgICAgICBTcGluZS5kaXNhYmxlQWR2YW5jZWRUaW1pbmcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZGlzYWJsZUFkdmFuY2VkVGltaW5nKCk6IHZvaWQge1xuICAgICAgICBTcGluZS5nYW1lLnRpbWUuYWR2YW5jZWRUaW1pbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldEF1dG9NZXNoKGVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlLCBub25NZXNoU3VmZml4OiBzdHJpbmcgPSBTcGluZS5ERUZBVUxUX05PTl9NRVNIX1NVRkZJWCwgbm9uTWVzaEZQUzogbnVtYmVyID0gU3BpbmUuREVGQVVMVF9OT05fTUVTSF9GUFMpIHtcbiAgICAgICAgU3BpbmUuQVVUT19NRVNIID0gZW5hYmxlZDtcbiAgICAgICAgU3BpbmUuTk9OX01FU0hfU1VGRklYID0gbm9uTWVzaFN1ZmZpeDtcbiAgICAgICAgU3BpbmUuTk9OX01FU0hfRlBTID0gbm9uTWVzaEZQUztcbiAgICB9XG59IiwiaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xuaW1wb3J0IHtHYW1lfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7RGV2aWNlfSBmcm9tICcuLi91dGlscyc7XG5cbi8qKlxuICogVGV4dFxuICovXG5leHBvcnQgY2xhc3MgVGV4dCBleHRlbmRzIFBoYXNlci5UZXh0IHtcbiAgICAvLyBjb25zdGFudHNcbiAgICBwdWJsaWMgc3RhdGljIERFRkFVTFRfRk9OVF9TSVpFOiBudW1iZXIgPSAxMjtcbiAgICBwdWJsaWMgc3RhdGljIERFRkFVTFRfRk9OVF9DT0xPUjogc3RyaW5nID0gXCIjMDAwMDAwXCI7XG4gICAgcHVibGljIHN0YXRpYyBERUZBVUxUX0ZPTlQ6IHN0cmluZyA9IFwiSGVsdmV0aWNhIE5ldWUsIEFyaWFsXCI7XG4gICAgcHVibGljIHN0YXRpYyBHTE9CQUxfUEFERElOR19YOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBzdGF0aWMgR0xPQkFMX1BBRERJTkdfWTogbnVtYmVyID0gMDtcblxuICAgIHB1YmxpYyBnYW1lOiBHYW1lO1xuICAgIHB1YmxpYyBzdHlsZTogYW55O1xuICAgIHB1YmxpYyBvbkFuaW1hdGlvbkNvbXBsZXRlOiBQaGFzZXIuU2lnbmFsID0gbmV3IFBoYXNlci5TaWduYWwoKTtcblxuICAgIHByb3RlY3RlZCBfY2FuVXBkYXRlID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIF9yZXBlYXRUaW1lcjogUGhhc2VyLlRpbWVyRXZlbnQ7XG4gICAgcHJvdGVjdGVkIF9kZWxheVRpbWVyOiBQaGFzZXIuVGltZXJFdmVudDtcbiAgICBwcm90ZWN0ZWQgX2xvd2VyY2FzZVRleHQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgX2xldHRlclRpbWU6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX3RleHRMZW5ndGg6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX3RleHRUb0FuaW1hdGU6IHN0cmluZ1tdID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgdGV4dDogc3RyaW5nID0gXCJcIiwgZm9udE5hbWU/OiBzdHJpbmcsIGZvbnRTaXplOiBudW1iZXIgPSBUZXh0LkRFRkFVTFRfRk9OVF9TSVpFLCBmb250Q29sb3I6IHN0cmluZyA9IFRleHQuREVGQVVMVF9GT05UX0NPTE9SLCBmb250QWxpZ246IHN0cmluZyA9ICdsZWZ0Jywgd29yZFdyYXA6IGJvb2xlYW4gPSBmYWxzZSwgd2lkdGg6IG51bWJlciA9IDAsIHB1YmxpYyBsaW5lU3BhY2luZzogbnVtYmVyID0gMCwgc2V0dGluZ3M6IE9iamVjdCA9IG51bGwpIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUsXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeSxcbiAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICBUZXh0Ll9hZGRTZXR0aW5ncyh7XG4gICAgICAgICAgICAgICAgZm9udDogZm9udFNpemUgKyAncHggJyArIGZvbnROYW1lLFxuICAgICAgICAgICAgICAgIGZpbGw6IGZvbnRDb2xvcixcbiAgICAgICAgICAgICAgICBhbGlnbjogZm9udEFsaWduLFxuICAgICAgICAgICAgICAgIHdvcmRXcmFwOiB3b3JkV3JhcCxcbiAgICAgICAgICAgICAgICB3b3JkV3JhcFdpZHRoOiB3aWR0aFxuICAgICAgICAgICAgfSwgc2V0dGluZ3MpXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dC5yZXBsYWNlKC8nL2csIFwiXFwnXCIpO1xuICAgICAgICB0aGlzLl9sb3dlcmNhc2VUZXh0ID0gdGhpcy50ZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHRoaXMuc2V0UmVzb2x1dGlvbigpO1xuICAgIH1cblxuICAgIC8vIFBoYXNlci5UZXh0IG92ZXJyaWRlc1xuICAgIHB1YmxpYyBzZXRUZXh0KHRleHQ6IHN0cmluZyk6IFBoYXNlci5UZXh0IHtcbiAgICAgICAgc3VwZXIuc2V0VGV4dCh0ZXh0KTtcblxuICAgICAgICB0aGlzLl9sb3dlcmNhc2VUZXh0ID0gdGhpcy50ZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHRoaXMuc2V0UmVzb2x1dGlvbigpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXRSZXNvbHV0aW9uKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZ2FtZSB8fCAhRGV2aWNlLmNvY29vbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKERldmljZS5jb2Nvb24pIHtcbiAgICAgICAgICAgIC8vIGZpeCBmb3IgZm9udHMgbG9va2luZyByZWFsbHkgYmx1cnJ5IGluIGNvY29vbkpTXG4gICAgICAgICAgICB0aGlzLnJlc29sdXRpb24gPSB0aGlzLmdhbWUucmVzb2x1dGlvbiAqIHRoaXMuZ2FtZS5yZXNvbHV0aW9uO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXHRcdFxuICAgIC8qKlxuICAgICogc3RhcnRzIHRoZSB0ZXh0IGFuaW1hdGlvblxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBwcm90ZWN0ZWQgX3N0YXJ0VGV4dEFuaW1hdGlvbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY2FuVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcmVwZWF0VGltZXIgPSB0aGlzLmdhbWUudGltZS5ldmVudHMucmVwZWF0KHRoaXMuX2xldHRlclRpbWUgKiAxMDAsIHRoaXMuX3RleHRMZW5ndGgsIHRoaXMuX3VwZGF0ZVRleHRBbmltYXRpb24sIHRoaXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfdXBkYXRlVGV4dEFuaW1hdGlvbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jYW5VcGRhdGUgfHwgIXRoaXMuX3RleHRUb0FuaW1hdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLl90ZXh0TGVuZ3RoIC0gdGhpcy5fdGV4dFRvQW5pbWF0ZS5sZW5ndGg7XG4gICAgICAgIHRoaXMuYWRkQ29sb3IodGhpcy5zdHlsZS5maWxsLCBpbmRleCk7XG4gICAgICAgIHRoaXMuYWRkQ29sb3IoJ3JnYmEoMCwwLDAsMCknLCBpbmRleCArIDEpO1xuICAgICAgICB0aGlzLl90ZXh0VG9BbmltYXRlLnNoaWZ0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX3RleHRUb0FuaW1hdGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLm9uQW5pbWF0aW9uQ29tcGxldGUuZGlzcGF0Y2goKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgLyoqXG4gICAgKiBzZXRzIHRoZSBjb2xvciBvZiB0aGUgZW50aXJlIHRleHRcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb2xvciBjc3MgY29sb3Igc3RyaW5nIChzdWNoIGFzIFwiI2ZmMDAwMFwiKVxuICAgICogQHJldHVybiB7RGlqb24uVUlUZXh0LmhpZ2hsaWdodFBocmFzZX0gY2FsbHMgdGhlIGhpZ2hsaWdodFBocmFzZSBtZXRob2QgYW5kIFwiaGlnaGxpZ2h0c1wiIHRoZSBlbnRpcmUgdGV4dCBzdHJpbmdcbiAgICAqL1xuICAgIHB1YmxpYyBzZXRDb2xvcihjb2xvcjogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhpZ2hsaWdodFBocmFzZSh0aGlzLnRleHQsIGNvbG9yLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiByZXNldHMgdGhlIGNvbG9yIHRvIHRoZSBvcmlnaW5hbCBmaWxsIGNvbG9yXG4gICAgKiBAcmV0dXJuIHtEaWpvbi5VSVRleHQuaGlnaGxpZ2h0UGhyYXNlfSBjYWxscyB0aGUgaGlnaGxpZ2h0UGhyYXNlIG1ldGhvZCBhbmQgXCJoaWdobGlnaHRzXCIgdGhlIGVudGlyZSB0ZXh0IHN0cmluZ1xuICAgICovXG4gICAgcHVibGljIHJlc2V0Q29sb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhpZ2hsaWdodFBocmFzZSh0aGlzLnRleHQsIHRoaXMuc3R5bGUuZmlsbCwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogY2hhbmdlcyB0aGUgY29sb3VyIG9mIGEgcG9ydGlvbiBvZiB0aGUgdGV4dFxuICAgICogQHBhcmFtICB7U3RyaW5nfSBwaHJhc2UgICAgICAgIHRoZSBwaHJhc2Ugd2l0aGluIHRoZSB0ZXh0IHRvIGNoYW5nZVxuICAgICogQHBhcmFtICB7U3RyaW5nfSBjb2xvciAgICAgICAgIGNzcyBjb2xvciBzdHJpbmcgKHN1Y2ggYXMgXCIjZmYwMDAwXCIpXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBbY2FzZVNlbnNpdGl2ZSA9IGZhbHNlXSB3aGV0aGVyIHRoZSBzZWFyY2ggZm9yIHRoZSBwaHJhc2Ugd2l0aGluIHRoaXMgdGV4dCBzaG91bGQgYmUgY2FzZSBzZW5zaXRpdmVcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgaGlnaGxpZ2h0UGhyYXNlKHBocmFzZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nLCBjYXNlU2Vuc2l0aXZlOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHRleHQgPSBjYXNlU2Vuc2l0aXZlID8gdGhpcy50ZXh0IDogdGhpcy5fbG93ZXJjYXNlVGV4dDtcblxuICAgICAgICBwaHJhc2UgPSBjYXNlU2Vuc2l0aXZlID8gcGhyYXNlIDogcGhyYXNlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgbGV0IGxlbiA9IHBocmFzZS5sZW5ndGg7XG5cbiAgICAgICAgbGV0IHN0YXJ0SW5kZXggPSB0ZXh0LmluZGV4T2YocGhyYXNlKTtcbiAgICAgICAgbGV0IGVuZEluZGV4ID0gc3RhcnRJbmRleCArIGxlbjtcblxuICAgICAgICB3aGlsZSAoc3RhcnRJbmRleCA8PSBlbmRJbmRleCkge1xuICAgICAgICAgICAgdGhpcy5hZGRDb2xvcihjb2xvciwgc3RhcnRJbmRleCk7XG4gICAgICAgICAgICBzdGFydEluZGV4Kys7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFkZENvbG9yKHRoaXMuc3R5bGUuZmlsbCwgZW5kSW5kZXgpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgKiBhbmltYXRlcyB0aGUgdGV4dCBpbiBieSByZXZlYWxpbmcgZWFjaCBjaGFyYWN0ZXIgaW4gc2VxdWVuY2VcbiAgICAqIEBwYXJhbSAge051bWJlcn0gW2xldHRlclRpbWUgPSAwLjFdICB0aGUgdGltZSAoaW4gc2Vjb25kcykgYmV0d2VlbiBlYWNoIGNoYXJhY3RlclxuICAgICogQHBhcmFtICB7aW50fSBbZGVsYXkgPSAwXSAgICAgICAgICAgIHRoZSBkZWxheSBiZWZvcmUgc3RhcnRpbmcgdGhlIGFuaW1hdGlvblxuICAgICovXG4gICAgcHVibGljIGFuaW1hdGUobGV0dGVyVGltZTogbnVtYmVyID0gMC4xLCBkZWxheTogbnVtYmVyID0gMCkge1xuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMucmVtb3ZlKHRoaXMuX2RlbGF5VGltZXIpO1xuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMucmVtb3ZlKHRoaXMuX3JlcGVhdFRpbWVyKTtcblxuICAgICAgICB0aGlzLl9sZXR0ZXJUaW1lID0gbGV0dGVyVGltZTtcbiAgICAgICAgdGhpcy5fdGV4dExlbmd0aCA9IHRoaXMudGV4dC5sZW5ndGg7XG4gICAgICAgIHRoaXMuX3RleHRUb0FuaW1hdGUgPSB0aGlzLnRleHQuc3BsaXQoJycpO1xuXG4gICAgICAgIHZhciBzdGFydEluZGV4ID0gMDtcbiAgICAgICAgdmFyIGVuZEluZGV4ID0gdGhpcy5fdGV4dExlbmd0aDtcblxuICAgICAgICB3aGlsZSAoc3RhcnRJbmRleCA8PSBlbmRJbmRleCkge1xuICAgICAgICAgICAgdGhpcy5hZGRDb2xvcigncmdiYSgwLDAsMCwwKScsIHN0YXJ0SW5kZXgpO1xuICAgICAgICAgICAgc3RhcnRJbmRleCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZGVsYXlUaW1lciA9IHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoZGVsYXkgKiBQaGFzZXIuVGltZXIuU0VDT05ELCB0aGlzLl9zdGFydFRleHRBbmltYXRpb24sIHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogc3RvcHMgdGhlIHRleHQgYW5pbWF0aW9uIGFuZCBjbGVhcnMgdGhlIHRpbWVyc1xuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyBzdG9wQW5pbWF0aW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9jYW5VcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fdGV4dFRvQW5pbWF0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5yZW1vdmUodGhpcy5fZGVsYXlUaW1lcik7XG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5yZW1vdmUodGhpcy5fcmVwZWF0VGltZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogcm91bmRzIHRoZSBwb3NpdGlvblxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyByb3VuZFBpeGVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnNldChNYXRoLnJvdW5kKHRoaXMueCksIE1hdGgucm91bmQodGhpcy55KSk7XG4gICAgfVxuXG4gICAgLy8gc3RhdGljIG1ldGhvZHNcbiAgICBwcml2YXRlIHN0YXRpYyBfYWRkU2V0dGluZ3Mob2JqOiBPYmplY3QsIHNldHRpbmdzOiBPYmplY3QpOiBPYmplY3Qge1xuICAgICAgICBpZiAoIXNldHRpbmdzKVxuICAgICAgICAgICAgcmV0dXJuIG9iajtcblxuICAgICAgICBmb3IgKHZhciBwcm9wIGluIHNldHRpbmdzKSB7XG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgICAgICBvYmpbcHJvcF0gPSBzZXR0aW5nc1twcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgZ2V0IHJlYWxIZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGUueSAqIHRoaXMudGV4dHVyZS5mcmFtZS5oZWlnaHQgLyB0aGlzLmdhbWUucmVzb2x1dGlvbjtcbiAgICB9XG5cbiAgICBnZXQgcmVhbFdpZHRoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjYWxlLnggKiB0aGlzLnRleHR1cmUuZnJhbWUud2lkdGggLyB0aGlzLmdhbWUucmVzb2x1dGlvbjtcbiAgICB9XG59IiwiaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xuaW1wb3J0IHtUZXh0dXJlc30gZnJvbSAnLi9UZXh0dXJlcyc7XG5pbXBvcnQge1RleHR9IGZyb20gJy4uL2Rpc3BsYXknO1xuXG5leHBvcnQgY2xhc3MgUGxhY2Vob2xkZXJzIHtcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgZ2FtZSgpOiBQaGFzZXIuR2FtZSB7XG4gICAgICAgIHJldHVybiBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWU7XG4gICAgfVxuXG4gICAgc3RhdGljIGltYWdlKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIHRleHR1cmU6IGFueSwgbmFtZTogc3RyaW5nID0gXCJcIik6IFBoYXNlci5JbWFnZSB7XG4gICAgICAgIGNvbnN0IGltYWdlSW5zdGFuY2UgPSBuZXcgUGhhc2VyLkltYWdlKFBsYWNlaG9sZGVycy5nYW1lLCB4LCB5LCB0ZXh0dXJlKTtcbiAgICAgICAgaW1hZ2VJbnN0YW5jZS5uYW1lID0gbmFtZTtcbiAgICAgICAgcmV0dXJuIGltYWdlSW5zdGFuY2U7XG4gICAgfVxuXG4gICAgc3RhdGljIGJ1dHRvbih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCB3aWR0aDogbnVtYmVyID0gMTAwLCBoZWlnaHQ6IG51bWJlciA9IDUwLCBhdXRvU2l6ZTogYm9vbGVhbiA9IGZhbHNlLCB0ZXh0OiBzdHJpbmcgPSAnYnV0dG9uJywgY2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbCwgY2FsbGJhY2tDb250ZXh0OiBhbnkgPSBudWxsLCBkZWZhdWx0Q29sb3I6IG51bWJlciA9IDB4ZmZmZmZmLCBvdmVyQ29sb3I6IG51bWJlciA9IDB4ZmYwMDAwLCBkb3duQ29sb3I6IG51bWJlciA9IDB4MDBmZjAwKTogUGhhc2VyLlNwcml0ZSB7XG4gICAgICAgIGNvbnN0IHNwcml0ZTogUGhhc2VyLlNwcml0ZSA9IG5ldyBQaGFzZXIuU3ByaXRlKFBsYWNlaG9sZGVycy5nYW1lLCB4LCB5KTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIHRleHQgaW5zdGFuY2Ugd2l0aCBhbiBhdXRvIHNpemUgb2YgMjUgb3IgNjAlIG9mIHRoZSBoZWlnaHQgcGFzc2VkIGluLlxuICAgICAgICBjb25zdCB0ZXh0SW5zdGFuY2U6IFRleHQgPSBuZXcgVGV4dCh3aWR0aCAqIDAuNSwgaGVpZ2h0ICogMC41NSwgXCIgXCIgKyB0ZXh0ICsgXCIgXCIsICdBcmlhbCcsIGF1dG9TaXplID8gMjUgOiBoZWlnaHQgKiAwLjYsICcjMDAwMDAwJyk7XG4gICAgICAgIHRleHRJbnN0YW5jZS5jZW50ZXJQaXZvdCgpO1xuICAgICAgICB0ZXh0SW5zdGFuY2UubmFtZSA9IFwiTGFiZWxcIjtcblxuICAgICAgICBpZiAoYXV0b1NpemUpIHtcbiAgICAgICAgICAgIC8vIFVzZSBhIHBhZGRpbmcgb2YgMTBcbiAgICAgICAgICAgIHdpZHRoID0gdGV4dEluc3RhbmNlLnJlYWxXaWR0aCArIDEwO1xuICAgICAgICAgICAgaGVpZ2h0ID0gdGV4dEluc3RhbmNlLnJlYWxIZWlnaHQgKyAxMDtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgdGV4dCBwb3NpdGlvblxuICAgICAgICAgICAgdGV4dEluc3RhbmNlLnBvc2l0aW9uLnNldCh3aWR0aCAqIDAuNSwgaGVpZ2h0ICogMC41NSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cEltYWdlOiBQaGFzZXIuSW1hZ2UgPSBQbGFjZWhvbGRlcnMuaW1hZ2UoMCwgMCwgVGV4dHVyZXMucm91bmRlZFJlY3Qod2lkdGgsIGhlaWdodCwgMTAsIGRlZmF1bHRDb2xvciksIFwiVXBcIik7XG4gICAgICAgIGNvbnN0IG92ZXJJbWFnZTogUGhhc2VyLkltYWdlID0gUGxhY2Vob2xkZXJzLmltYWdlKDAsIDAsIFRleHR1cmVzLnJvdW5kZWRSZWN0KHdpZHRoLCBoZWlnaHQsIDEwLCBvdmVyQ29sb3IpLCBcIk92ZXJcIik7XG4gICAgICAgIGNvbnN0IGRvd25JbWFnZTogUGhhc2VyLkltYWdlID0gUGxhY2Vob2xkZXJzLmltYWdlKDAsIDAsIFRleHR1cmVzLnJvdW5kZWRSZWN0KHdpZHRoLCBoZWlnaHQsIDEwLCBkb3duQ29sb3IpLCBcIkRvd25cIik7XG5cblxuICAgICAgICBvdmVySW1hZ2UudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICBkb3duSW1hZ2UudmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgICAgIHNwcml0ZS5hZGRDaGlsZCh1cEltYWdlKTtcbiAgICAgICAgc3ByaXRlLmFkZENoaWxkKG92ZXJJbWFnZSk7XG4gICAgICAgIHNwcml0ZS5hZGRDaGlsZChkb3duSW1hZ2UpO1xuICAgICAgICBzcHJpdGUuYWRkQ2hpbGQodGV4dEluc3RhbmNlKTtcblxuICAgICAgICBzcHJpdGUuaW5wdXRFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgc3ByaXRlLmlucHV0LnVzZUhhbmRDdXJzb3IgPSB0cnVlO1xuXG4gICAgICAgIHNwcml0ZS5ldmVudHMub25JbnB1dFVwLmFkZCgoKSA9PiB7XG4gICAgICAgICAgICBkb3duSW1hZ2UudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgb3ZlckltYWdlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHVwSW1hZ2UudmlzaWJsZSA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoY2FsbGJhY2tDb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3ByaXRlLmV2ZW50cy5vbklucHV0RG93bi5hZGQoKCkgPT4ge1xuICAgICAgICAgICAgZG93bkltYWdlLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgb3ZlckltYWdlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHVwSW1hZ2UudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICBzcHJpdGUuZXZlbnRzLm9uSW5wdXRPdmVyLmFkZCgoKSA9PiB7XG4gICAgICAgICAgICBkb3duSW1hZ2UudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgb3ZlckltYWdlLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgdXBJbWFnZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNwcml0ZS5ldmVudHMub25JbnB1dE91dC5hZGQoKCkgPT4ge1xuICAgICAgICAgICAgZG93bkltYWdlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIG92ZXJJbWFnZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB1cEltYWdlLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBzcHJpdGUuZ2V0Qm91bmRzID0gZnVuY3Rpb24oKTogUElYSS5SZWN0YW5nbGUge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQSVhJLlJlY3RhbmdsZSgwLCAwLCB1cEltYWdlLndpZHRoLCB1cEltYWdlLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNwcml0ZTtcbiAgICB9XG59IiwiaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xuXG5leHBvcnQgY2xhc3MgVGltZSB7XG4gICAgcHVibGljIHN0YXRpYyBkZWxheWVkQ2FsbChkZWxheUluTWlsbGlzZWNvbmRzOiBudW1iZXIsIGNhbGxiYWNrOiBGdW5jdGlvbiwgY2FsbGJhY2tDb250ZXh0OiBhbnksIC4uLnBhcmFtcykge1xuICAgICAgICBpZiAocGFyYW1zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHBhcmFtcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHBhcmFtcy51bnNoaWZ0KGRlbGF5SW5NaWxsaXNlY29uZHMsIGNhbGxiYWNrLCBjYWxsYmFja0NvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUudGltZS5ldmVudHMuYWRkLmFwcGx5KEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZS50aW1lLmV2ZW50cywgcGFyYW1zKTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIFV0aWwgeyBcbiAgICBwdWJsaWMgc3RhdGljIGlzTnVtYmVyKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICgrdmFsdWUgPT09ICt2YWx1ZSk7XG4gICAgfVxufSIsIi8qKlxuICogV3JhcHMgUGhhc2VyLkxvYWRlclxuKi9cblxuaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xuaW1wb3J0IHtHYW1lfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7SU5vdGlmaWVyLCBJUGF0aENvbmZpZywgSUFzc2V0LCBJQXNzZXRMaXN0LCBJU291bmQsIElUaWxlZG1hcEFzc2V0c30gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQge05vdGlmaWNhdGlvbnN9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7U3BpbmV9IGZyb20gJy4uL2Rpc3BsYXknO1xuLyoqXG4gKiBXcmFwcyBQaGFzZXIuTG9hZGVyXG4qL1xuZXhwb3J0IGNsYXNzIEFzc2V0TWFuYWdlciBpbXBsZW1lbnRzIElOb3RpZmllciB7XG4gICAgcHJvdGVjdGVkIGFwcDogQXBwbGljYXRpb247XG5cbiAgICAvLyBwcml2YXRlIHZhcmlhYmxlc1xuICAgIHByaXZhdGUgX2RhdGEgPSB7fTtcbiAgICBwcml2YXRlIF9iYXNlVVJMOiBzdHJpbmcgPSAnJztcbiAgICBwcml2YXRlIF9wYXRoT2JqOiBJUGF0aENvbmZpZyB8IGFueSA9IHt9O1xuICAgIHByaXZhdGUgX2Fzc2V0UGF0aDogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIF9kYXRhUGF0aDogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIF9zcHJpdGVTaGVldFBhdGg6IHN0cmluZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBfaW1nUGF0aDogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIF92aWRlb1BhdGg6IHN0cmluZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBfc3BpbmVQYXRoOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgX2ZvbnRQYXRoOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgX2JpdG1hcEZvbnRQYXRoOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgX3BoeXNpY3NQYXRoOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgX2F1ZGlvU3ByaXRlUGF0aDogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIF9zb3VuZFBhdGg6IHN0cmluZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBfc291bmREZWNvZGluZ01vZGlmaWVyOiBudW1iZXIgPSAyO1xuICAgIHByaXZhdGUgX3JlczogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIF9yZXNvbHV0aW9uOiBzdHJpbmcgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfbG9hZERhdGEgPSB7fTtcbiAgICBwcml2YXRlIF9hdXRvTG9hZERhdGEgPSB7fTtcbiAgICBwcml2YXRlIF9jb21wbGV0ZWRMb2FkcyA9IHt9O1xuICAgIHByaXZhdGUgX3JlcXVpcmVkRGF0YSA9IHt9O1xuXG4gICAgcHJpdmF0ZSBfY3VycmVudEFzc2V0TGlzdDogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIF9oYXNGaWxlczogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX3NvdW5kc1RvRGVjb2RlOiBBcnJheTxJU291bmQ+ID0gW107XG4gICAgcHJpdmF0ZSBfaXNMb2FkaW5nUXVldWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIF9maWxlQ29tcGxldGVQcm9ncmVzczogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9tYXhQZXJjZW50OiBudW1iZXIgPSAxMDA7XG5cbiAgICBwcml2YXRlIF9udW1Tb3VuZHM6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfc291bmRzRGVjb2RlZDogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgX2NhY2hlQnVzdFZlcnNpb246IHN0cmluZyA9ICcnO1xuXG4gICAgLy8gcHVibGljIHZhcmlhYmxlc1xuICAgIHB1YmxpYyBnYW1lOiBHYW1lO1xuXG4gICAgcHVibGljIG9uTG9hZFN0YXJ0ID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICBwdWJsaWMgb25GaWxlU3RhcnQgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuICAgIHB1YmxpYyBvbkZpbGVDb21wbGV0ZSA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgcHVibGljIG9uTG9hZENvbXBsZXRlID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICBwdWJsaWMgb25Mb2FkQ29tcGxldGVBbmRBdWRpb0RlY29kZWQgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuXG4gICAgcHVibGljIG9uQmFja2dyb3VuZExvYWRTdGFydCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgcHVibGljIG9uQmFja2dyb3VuZEZpbGVTdGFydCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgcHVibGljIG9uQmFja2dyb3VuZEZpbGVDb21wbGV0ZSA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgcHVibGljIG9uQmFja2dyb3VuZExvYWRDb21wbGV0ZSA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgcHVibGljIG9uQmFja2dyb3VuZExvYWRDb21wbGV0ZUFuZEF1ZGlvRGVjb2RlZCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG5cbiAgICAvLyBzdGF0aWMgY29uc3RhbnRzXG4gICAgLy8gYXNzZXQgdHlwZXNcbiAgICBwdWJsaWMgc3RhdGljIEFVRElPOiBzdHJpbmcgPSAnYXVkaW8nO1xuICAgIHB1YmxpYyBzdGF0aWMgU09VTkQ6IHN0cmluZyA9ICdzb3VuZCc7XG4gICAgcHVibGljIHN0YXRpYyBBVURJT19TUFJJVEU6IHN0cmluZyA9ICdhdWRpb1Nwcml0ZSc7XG4gICAgcHVibGljIHN0YXRpYyBJTUFHRTogc3RyaW5nID0gJ2ltYWdlJztcbiAgICBwdWJsaWMgc3RhdGljIFZJREVPOiBzdHJpbmcgPSAndmlkZW8nO1xuICAgIHB1YmxpYyBzdGF0aWMgQVRMQVM6IHN0cmluZyA9ICdhdGxhcyc7XG4gICAgcHVibGljIHN0YXRpYyBURVhUOiBzdHJpbmcgPSAndGV4dCc7XG4gICAgcHVibGljIHN0YXRpYyBKU09OOiBzdHJpbmcgPSAnanNvbic7XG4gICAgcHVibGljIHN0YXRpYyBUSUxFTUFQOiBzdHJpbmcgPSAndGlsZW1hcCc7XG4gICAgcHVibGljIHN0YXRpYyBUSUxFRE1BUDogc3RyaW5nID0gJ3RpbGVkbWFwJztcbiAgICBwdWJsaWMgc3RhdGljIFRJTEVETUFQX1RJTEVTRVQ6IHN0cmluZyA9ICd0aWxlc2V0JztcbiAgICBwdWJsaWMgc3RhdGljIFRJTEVETUFQX0xBWUVSOiBzdHJpbmcgPSAnbGF5ZXInO1xuICAgIHB1YmxpYyBzdGF0aWMgUEhZU0lDUzogc3RyaW5nID0gJ3BoeXNpY3MnO1xuICAgIHB1YmxpYyBzdGF0aWMgU1BJTkU6IHN0cmluZyA9ICdzcGluZSc7XG4gICAgcHVibGljIHN0YXRpYyBCSVRNQVBfRk9OVDogc3RyaW5nID0gJ2JpdG1hcEZvbnQnO1xuICAgIHB1YmxpYyBzdGF0aWMgQVNTRVRfTElTVDogc3RyaW5nID0gJ2Fzc2V0TGlzdCc7XG5cbiAgICAvLyByZXNvbHV0aW9uc1xuICAgIHB1YmxpYyBzdGF0aWMgUkVTT0xVVElPTl8yWDogc3RyaW5nID0gXCJAMnhcIjtcbiAgICBwdWJsaWMgc3RhdGljIFJFU09MVVRJT05fM1g6IHN0cmluZyA9IFwiQDN4XCI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5faW5pdCgpO1xuICAgIH1cbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICAvKipcbiAgICAqIGFkZHMgaW50ZXJuYWwgdmFyaWFibGVzIGFuZCBzaWduYWxzXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIHByaXZhdGUgX2luaXQoKSB7XG4gICAgICAgIHRoaXMuYXBwID0gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5nYW1lID0gdGhpcy5hcHAuZ2FtZTtcbiAgICAgICAgdGhpcy5iYXNlVVJMID0gJyc7XG4gICAgICAgIHRoaXMucGF0aHMgPSBudWxsO1xuICAgICAgICB0aGlzLnJlc29sdXRpb24gPSB0aGlzLmdhbWUucmVzb2x1dGlvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHBhcnNlcyBhbiBhc3NldCBsaXN0IGJ5IGtleSAodXN1YWxseSBmcm9tIGRhdGEvYXNzZXRzLmpzb24pIGFuZCBzdG9yZXMgdGhlbSBpbnRlcm5hbGx5XG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGtleSB0aGUgaWQgb2YgdGhlIGxpc3RcbiAgICAqIEBwYXJhbSAge0FycmF5fSAgbGlzdCB0aGUganNvbiBhcnJheSBvZiBhc3NldHNcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfcGFyc2VBc3NldExpc3Qoa2V5OiBzdHJpbmcsIGxpc3Q6IElBc3NldExpc3QpIHtcbiAgICAgICAgdGhpcy5fYXV0b0xvYWREYXRhW2tleV0gPSBsaXN0LmF1dG9sb2FkO1xuICAgICAgICB0aGlzLl9yZXF1aXJlZERhdGFba2V5XSA9IGxpc3QucmVxdWlyZWQ7XG5cbiAgICAgICAgdGhpcy5fbG9hZERhdGFba2V5XSA9IFtdO1xuXG4gICAgICAgIGxpc3QuYXNzZXRzLmZvckVhY2goYXNzZXQgPT4ge1xuICAgICAgICAgICAgdGhpcy5fbG9hZERhdGFba2V5XS5wdXNoKGFzc2V0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBhZGRzIGFzc2V0cyBmcm9tIGEgbGlzdCB0byB0aGUgbG9hZCBsaXN0XG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBsaXN0IHRvIGFkZFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBwcml2YXRlIF9sb2FkQXNzZXRzKGlkOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIGFzc2V0cyA9IHRoaXMuX2xvYWREYXRhW2lkXSxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGFzc2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fbG9hZEFzc2V0KGFzc2V0c1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHN0YXJ0IHRoZSBiYWNrZ3JvdW5kIGxvYWRpbmdcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfYmFja2dyb3VuZExvYWRTdGFydCgpIHtcbiAgICAgICAgdGhpcy5vbkJhY2tncm91bmRMb2FkU3RhcnQuZGlzcGF0Y2goKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHdoZW4gYSBmaWxlIGNvbXBsZXRlcyBpbiBhbiBiYWNrZ3JvdW5kIGxvYWQgcXVldWUgLSBkaXNwYXRjaGVzIHRoZSBvbkJhY2tncm91bmRGaWxlQ29tcGxldGUgc2lnbmFsXG4gICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHByb2dyZXNzICAgdGhlIHBlcmNlbnQgcHJvZ3Jlc3NcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gaWQgICAgICAgICB0aGUgZmlsZSBpZFxuICAgICogQHBhcmFtICB7aW50fSAgICBmaWxlSW5kZXggIHRoZSBpbmRleCBvZiB0aGUgZmlsZSBpbiB0aGUgbGlzdFxuICAgICogQHBhcmFtICB7aW50fSAgICB0b3RhbEZpbGVzIHRoZSB0b3RhbCBudW1iZXIgb2YgZmlsZXMgaW4gdGhlIGxpc3RcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfYmFja2dyb3VuZEZpbGVDb21wbGV0ZShwcm9ncmVzczogbnVtYmVyLCBpZDogc3RyaW5nLCBmaWxlSW5kZXg6IG51bWJlciwgdG90YWxGaWxlczogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWUuY2FjaGUuY2hlY2tLZXkoUGhhc2VyLkNhY2hlLklNQUdFLCBpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldEJhc2VUZXh0dXJlUmVzb2x1dGlvbih0aGlzLmdhbWUuY2FjaGUuZ2V0UGl4aUJhc2VUZXh0dXJlKGlkKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZmlsZUNvbXBsZXRlUHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICAgICAgdGhpcy5vbkJhY2tncm91bmRGaWxlQ29tcGxldGUuZGlzcGF0Y2gocHJvZ3Jlc3MsIGlkLCBmaWxlSW5kZXgsIHRvdGFsRmlsZXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogd2hlbiB0aGUgYmFja2dyb3VuZCBsb2FkIGNvbXBsZXRlcyAtIGRpc3BhdGNoZXMgdGhlIG9uQmFja2dyb3VuZExvYWRDb21wbGV0ZSBzaWduYWwsIHN0YXJ0cyBjaGVja2luZyBmb3IgZGVjb2RlZCBzb3VuZHNcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfYmFja2dyb3VuZExvYWRDb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQub25GaWxlQ29tcGxldGUucmVtb3ZlKHRoaXMuX2JhY2tncm91bmRGaWxlQ29tcGxldGUsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMub25CYWNrZ3JvdW5kTG9hZENvbXBsZXRlLmRpc3BhdGNoKCk7XG4gICAgICAgIHRoaXMuX2NoZWNrU291bmREZWNvZGluZyh0aGlzLm9uQmFja2dyb3VuZExvYWRDb21wbGV0ZUFuZEF1ZGlvRGVjb2RlZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiB3aGVuIHRoZSBhc3NldCBsaXN0IHN0YXJ0cyBsb2FkaW5nLCBkaXNwYXRjaGVzIHRoZSBvbkxvYWRTdGFydCBzaWduYWxcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwcml2YXRlIF9nYW1lTG9hZFN0YXJ0KCkge1xuICAgICAgICB0aGlzLm9uTG9hZFN0YXJ0LmRpc3BhdGNoKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiB3aGVuIGEgZmlsZSBzdGFydHMgbG9hZGluZyAtIGRpc3BhdGNoZXMgdGhlIG9uRmlsZVN0YXJ0IHNpZ25hbFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHByaXZhdGUgX2dhbWVGaWxlU3RhcnQoKSB7XG4gICAgICAgIHRoaXMub25GaWxlU3RhcnQuZGlzcGF0Y2goKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHdoZW4gYSBmaWxlIGNvbXBsZXRlcyBpbiB0aGUgZ2FtZSBsb2FkIC0gZGlzcGF0Y2hlcyB0aGUgb25GaWxlQ29tcGxldGUgc2lnbmFsXG4gICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHByb2dyZXNzICAgdGhlIHBlcmNlbnQgcHJvZ3Jlc3NcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gaWQgICAgICAgICB0aGUgZmlsZSBpZFxuICAgICogQHBhcmFtICB7aW50fSAgICBmaWxlSW5kZXggIHRoZSBpbmRleCBvZiB0aGUgZmlsZSBpbiB0aGUgbGlzdFxuICAgICogQHBhcmFtICB7aW50fSAgICB0b3RhbEZpbGVzIHRoZSB0b3RhbCBudW1iZXIgb2YgZmlsZXMgaW4gdGhlIGxpc3RcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfZ2FtZUZpbGVDb21wbGV0ZShwcm9ncmVzczogbnVtYmVyLCBpZD86IHN0cmluZywgZmlsZUluZGV4PzogbnVtYmVyLCB0b3RhbEZpbGVzPzogbnVtYmVyKSB7XG4gICAgICAgXG4gICAgICAgIGlmICh0aGlzLmdhbWUuY2FjaGUuY2hlY2tLZXkoUGhhc2VyLkNhY2hlLklNQUdFLCBpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldEJhc2VUZXh0dXJlUmVzb2x1dGlvbih0aGlzLmdhbWUuY2FjaGUuZ2V0UGl4aUJhc2VUZXh0dXJlKGlkKSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAvLyBlbHNlIGlmICh0aGlzLmdhbWUuY2FjaGUuY2hlY2tLZXkoUGhhc2VyLkNhY2hlLkJJVE1BUEZPTlQsIGlkKSl7XG4gICAgICAgIC8vICAgICB0aGlzLl9zZXRCYXNlVGV4dHVyZVJlc29sdXRpb24odGhpcy5nYW1lLmNhY2hlLmdldEJhc2VUZXh0dXJlKGlkLCBQaGFzZXIuQ2FjaGUuQklUTUFQRk9OVCkpO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ2lkJywgaWQsIHRoaXMuZ2FtZS5jYWNoZS5nZXRCYXNlVGV4dHVyZShpZCwgUGhhc2VyLkNhY2hlLkJJVE1BUEZPTlQpLnJlc29sdXRpb24pO1xuICAgICAgICAvLyB9XG4gICAgICAgIHRoaXMuX2ZpbGVDb21wbGV0ZVByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgICAgIHRoaXMub25GaWxlQ29tcGxldGUuZGlzcGF0Y2godGhpcy5nZXRMb2FkUHJvZ3Jlc3MoKSwgaWQsIGZpbGVJbmRleCwgdG90YWxGaWxlcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2V0QmFzZVRleHR1cmVSZXNvbHV0aW9uKHRleHR1cmU6IFBJWEkuQmFzZVRleHR1cmUpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRleHR1cmUgJiYgdGV4dHVyZS5zb3VyY2Uuc3JjLmluZGV4T2YoJ0AnICsgdGhpcy5yZXNvbHV0aW9uICsgJ3gnKSA+PSAwKSB7XG4gICAgICAgICAgICB0ZXh0dXJlLnJlc29sdXRpb24gPSB0aGlzLnJlc29sdXRpb247XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgKiB3aGVuIHRoZSBiYWNrZ3JvdW5kIGxvYWQgY29tcGxldGVzIC0gZGlzcGF0Y2hlcyB0aGUgb25Mb2FkQ29tcGxldGUgc2lnbmFsLCBzdGFydHMgY2hlY2tpbmcgZm9yIGRlY29kZWQgc291bmRzXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIHByaXZhdGUgX2dhbWVMb2FkQ29tcGxldGUoKSB7XG4gICAgICAgIHRoaXMuX2NvbXBsZXRlZExvYWRzW3RoaXMuX2N1cnJlbnRBc3NldExpc3RdID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbkxvYWRDb21wbGV0ZS5kaXNwYXRjaCgpO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkZpbGVTdGFydC5yZW1vdmUodGhpcy5fZ2FtZUZpbGVTdGFydCwgdGhpcyk7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uRmlsZUNvbXBsZXRlLnJlbW92ZSh0aGlzLl9nYW1lRmlsZUNvbXBsZXRlLCB0aGlzKTtcblxuICAgICAgICB0aGlzLl9jaGVja1NvdW5kRGVjb2RpbmcodGhpcy5vbkxvYWRDb21wbGV0ZUFuZEF1ZGlvRGVjb2RlZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBjaGVja3MgaWYgYWxsIHRoZSBzb3VuZHMgaW4gdGhlIHF1ZXVlIGFyZSBkZWNvZGVkXG4gICAgKiBAcGFyYW0gIHtQaGFzZXIuU2lnbmFsfSBldmVudFRvRGlzcGF0Y2ggdGhlIHNpZ25hbCB0byBiZSBkaXNwYXRjaGVkIHdoZW4gYWxsIHNvdW5kcyBhcmUgZGVjb2RlZFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBwcml2YXRlIF9jaGVja1NvdW5kRGVjb2RpbmcoZXZlbnRUb0Rpc3BhdGNoOiBQaGFzZXIuU2lnbmFsKSB7XG4gICAgICAgIHZhciBzb3VuZCwgaSwgaXNBdWRpb1Nwcml0ZTtcblxuICAgICAgICBpZiAodGhpcy5fc291bmRzVG9EZWNvZGUgJiYgdGhpcy5fc291bmRzVG9EZWNvZGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuX3NvdW5kc1RvRGVjb2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaXNBdWRpb1Nwcml0ZSA9IHRoaXMuX3NvdW5kc1RvRGVjb2RlW2ldLmlzQXVkaW9TcHJpdGU7XG4gICAgICAgICAgICAgICAgc291bmQgPSB0aGlzLmdhbWUuYWRkLnNvdW5kKHRoaXMuX3NvdW5kc1RvRGVjb2RlW2ldLnVybCk7XG4gICAgICAgICAgICAgICAgc291bmQuX19pc0F1ZGlvU3ByaXRlID0gaXNBdWRpb1Nwcml0ZTtcbiAgICAgICAgICAgICAgICBzb3VuZC5ldmVudFRvRGlzcGF0Y2ggPSBldmVudFRvRGlzcGF0Y2g7XG4gICAgICAgICAgICAgICAgc291bmQub25EZWNvZGVkLmFkZE9uY2UodGhpcy5fb25Tb3VuZERlY29kZWQsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXZlbnRUb0Rpc3BhdGNoLmRpc3BhdGNoKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHdoZW4gYSBzb3VuZCBpcyBkZWNvZGVkLCB0aGlzIG1ldGhvZCByZW1vdmVzIGl0IGZyb20gdGhlIF9zb3VuZHNUb0RlY29kZSBhcnJheSwgYW5kIGluY3JlYXNlcyB0aGUgb3ZlcmFsbCBwZXJjZW50YWdlIGxvYWRlZFxuICAgICogQHBhcmFtICB7UGhhc2VyLlNvdW5kfSBzb3VuZCB0aGUgc291bmQgYmVpbmcgZGVjb2RlZFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBwcml2YXRlIF9vblNvdW5kRGVjb2RlZChzb3VuZDogSVNvdW5kKSB7XG4gICAgICAgIHZhciBzb3VuZEluZGV4ID0gdGhpcy5fc291bmRzVG9EZWNvZGUuaW5kZXhPZihzb3VuZC5rZXkpO1xuICAgICAgICB0aGlzLl9zb3VuZHNUb0RlY29kZS5zcGxpY2Uoc291bmRJbmRleCwgMSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmdhbWUuYXVkaW8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB0aGlzLmdhbWUuYXVkaW8uYWRkQXVkaW8gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAoc291bmQuX19pc0F1ZGlvU3ByaXRlKVxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5hZGQuYXVkaW9TcHJpdGUoc291bmQua2V5KTtcblxuICAgICAgICAgICAgdGhpcy5nYW1lLmF1ZGlvLmFkZEF1ZGlvKHNvdW5kLmtleSwgc291bmQuX19pc0F1ZGlvU3ByaXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NvdW5kc0RlY29kZWQrKztcbiAgICAgICAgdGhpcy5fbWF4UGVyY2VudCA9ICgxMDAgLSAodGhpcy5fbnVtU291bmRzICogdGhpcy5zb3VuZERlY29kaW5nTW9kaWZpZXIpICsgKHRoaXMuX3NvdW5kc0RlY29kZWQgKiB0aGlzLnNvdW5kRGVjb2RpbmdNb2RpZmllcikpO1xuICAgICAgICB0aGlzLl9nYW1lRmlsZUNvbXBsZXRlKDEwMCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kc1RvRGVjb2RlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgc291bmQuZXZlbnRUb0Rpc3BhdGNoLmRpc3BhdGNoKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHNob3J0Y3V0IHRvIGdldCBhbiBhc3NldCBrZXkgdXNpbmcgYSBmaWxlIG5hbWUgKHN0cmlwcyBpdHMgZXh0ZW5zaW9uKVxuICAgICogQHBhcmFtICB7U3RyaW5nfSBmaWxlTmFtZSB0aGUgdXJsIG9mIHRoZSBmaWxlXG4gICAgKiBAcmV0dXJuIHtTdGlybmd9ICAgICAgICAgIHRoZSBhc3NldCBrZXkgKHRoZSBmaWxlbmFtZSB3aXRoIGl0cyBleHRlbnNpb24gc3RyaXBwZWQpXG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfZ2V0QXNzZXRLZXkoZmlsZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmIChmaWxlTmFtZS5pbmRleE9mKCcuJykgPCAwKVxuICAgICAgICAgICAgcmV0dXJuIGZpbGVOYW1lO1xuICAgICAgICB2YXIgZXh0ID0gZmlsZU5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgZXh0LnBvcCgpO1xuXG4gICAgICAgIHJldHVybiBleHQuam9pbignJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBnZXRzIHRoZSBleHRlbnNpb24gb2YgYSBnaXZlbiBmaWxlXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGZpbGVOYW1lXG4gICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgIHRoZSBleHRlbnNpb25cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBwcml2YXRlIF9nZXRFeHRlbnNpb24oZmlsZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBmaWxlTmFtZS5zcGxpdCgnLicpLnBvcCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogZ2V0cyB0aGUgZXh0ZW5zaW9uIG9mIGEgZ2l2ZW4gZmlsZVxuICAgICogQHBhcmFtICB7U3RyaW5nfSBmaWxlTmFtZVxuICAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICB0aGUgZXh0ZW5zaW9uXG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfZ2V0UmVzb2x1dGlvbihyZXM6IGFueSk6IHN0cmluZyB7XG4gICAgICAgIHZhciByZXN1bHQgPSAnJztcblxuICAgICAgICBpZiAodHlwZW9mIHJlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJlcyA9IHBhcnNlRmxvYXQocmVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVzID0gdGhpcy5yZXNvbHV0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlcyA+IDEuNSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gQXNzZXRNYW5hZ2VyLlJFU09MVVRJT05fMlg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICogZGV0ZXJtaW5lcyB3aGF0IGtpbmQgb2YgYXNzZXQgd2UncmUgZGVhbGluZyB3aXRoIGFuZCBhZGRzIGl0IHRvIHRoZSBsb2FkIHF1ZXVlXG4gICAgKiBAcGFyYW0gIHtPYmplY3R9IGFzc2V0IHRoZSBhc3NldCBvYmplY3Qgd2UncmUgZ29pbmcgdG8gbG9hZFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBwcml2YXRlIF9sb2FkQXNzZXQoYXNzZXQ6IElBc3NldCkge1xuICAgICAgICB2YXIgdHlwZSA9IGFzc2V0LnR5cGUsXG4gICAgICAgICAgICB1cmwgPSBhc3NldC51cmwgfHwgYXNzZXQua2V5O1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuQVNTRVRfTElTVDpcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkQXNzZXRzKGFzc2V0LmlkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLlNPVU5EOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFNvdW5kKHVybCwgYXNzZXQuZXh0ZW5zaW9ucyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5BVURJT19TUFJJVEU6XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQXVkaW9TcHJpdGUodXJsLCBhc3NldC5leHRlbnNpb25zKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLklNQUdFOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEltYWdlKHVybCwgdGhpcy5fZ2V0UmVzb2x1dGlvbihhc3NldC5yZXNvbHV0aW9uKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5WSURFTzpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRWaWRlbyh1cmwsIHRoaXMuX2dldFJlc29sdXRpb24oYXNzZXQucmVzb2x1dGlvbikpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuQVRMQVM6XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQXRsYXModXJsLCB0aGlzLl9nZXRSZXNvbHV0aW9uKGFzc2V0LnJlc29sdXRpb24pKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLlRFWFQ6XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkVGV4dCh1cmwpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuSlNPTjpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRKU09OKHVybCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5USUxFTUFQOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFRpbGVtYXAodXJsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLlRJTEVETUFQOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFRpbGVkbWFwKHVybCwgKDxJVGlsZWRtYXBBc3NldHM+YXNzZXQpLmFzc2V0cyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5QSFlTSUNTOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFBoeXNpY3ModXJsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLlNQSU5FOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFNwaW5lKHVybCwgdGhpcy5fZ2V0UmVzb2x1dGlvbihhc3NldC5yZXNvbHV0aW9uKSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLkJJVE1BUF9GT05UOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEJpdG1hcEZvbnQodXJsLCB0aGlzLl9nZXRSZXNvbHV0aW9uKGFzc2V0LnJlc29sdXRpb24pKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBwYXJzZXMgdGhlIGRhdGEgZnJvbSB0aGUgZXh0ZXJuYWwgYXNzZXRzIGZpbGUgKG5vcm1hbGx5IGRhdGEvYXNzZXRzLmpzb24pXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIHByaXZhdGUgX3BhcnNlRGF0YSgpIHtcbiAgICAgICAgdmFyIGtleTtcblxuICAgICAgICBmb3IgKGtleSBpbiB0aGlzLl9kYXRhKSB7XG4gICAgICAgICAgICB0aGlzLl9wYXJzZUFzc2V0TGlzdChrZXksIHRoaXMuX2RhdGFba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRDYWNoZUJ1c3RlZFVybCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLl9jYWNoZUJ1c3RWZXJzaW9uID09PSB1bmRlZmluZWQgfHwgdGhpcy5fY2FjaGVCdXN0VmVyc2lvbiA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXJsICsgJz92PScgKyB0aGlzLl9jYWNoZUJ1c3RWZXJzaW9uO1xuICAgIH1cbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuICAgIHB1YmxpYyBsb2FkVGV4dCh1cmw6IHN0cmluZykge1xuICAgICAgICB2YXIga2V5ID0gdGhpcy5fZ2V0QXNzZXRLZXkodXJsKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZS5sb2FkLnRleHQoa2V5LCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9kYXRhUGF0aCArICcvJyArIHVybCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkSlNPTihrZXk6IHN0cmluZykge1xuICAgICAgICBrZXkgPSB0aGlzLl9nZXRBc3NldEtleShrZXkpO1xuICAgICAgICByZXR1cm4gdGhpcy5nYW1lLmxvYWQuanNvbihrZXksIHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKHRoaXMuX2RhdGFQYXRoICsgJy8nICsga2V5ICsgJy5qc29uJykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkVGlsZW1hcChrZXk6IHN0cmluZykge1xuICAgICAgICBrZXkgPSB0aGlzLl9nZXRBc3NldEtleShrZXkpO1xuICAgICAgICByZXR1cm4gdGhpcy5nYW1lLmxvYWQudGlsZW1hcChrZXksIHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKHRoaXMuX2RhdGFQYXRoICsgJy90aWxlbWFwLycgKyBrZXkgKyAnLmpzb24nKSwgbnVsbCwgUGhhc2VyLlRpbGVtYXAuVElMRURfSlNPTik7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRUaWxlZG1hcChrZXk6IHN0cmluZywgYXNzZXRzOiBJQXNzZXRbXSkge1xuICAgICAgICBpZiAoUGhhc2VyLlBsdWdpblsnVGlsZWQnXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGlsZWRtYXAgcmVxdWlyZXMgdGhlIHBoYXNlci10aWxlZCBwbHVnaW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZW5nbGVyY2ovcGhhc2VyLXRpbGVkJyk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYWNoZUtleTogYW55ID0gUGhhc2VyLlBsdWdpblsnVGlsZWQnXS51dGlscy5jYWNoZUtleTtcblxuICAgICAgICB0aGlzLmdhbWUubG9hZFsndGlsZWRtYXAnXShjYWNoZUtleShrZXksICd0aWxlZG1hcCcpLCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9kYXRhUGF0aCArICcvdGlsZW1hcC8nICsga2V5ICsgJy5qc29uJyksIG51bGwsIFBoYXNlci5UaWxlbWFwLlRJTEVEX0pTT04pO1xuXG4gICAgICAgIGFzc2V0cy5mb3JFYWNoKGFzc2V0ID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoYXNzZXQudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLlRJTEVETUFQX1RJTEVTRVQ6XG4gICAgICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuVElMRURNQVBfTEFZRVI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFRpbGVkbWFwSW1hZ2Uoa2V5LCBhc3NldC50eXBlLCBhc3NldCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkVGlsZWRtYXBJbWFnZShrZXk6IHN0cmluZywgdGlsZXNldEltYWdlVHlwZTogc3RyaW5nLCBhc3NldDogSUFzc2V0KSB7XG4gICAgICAgIGNvbnN0IGNhY2hlS2V5OiBhbnkgPSBQaGFzZXIuUGx1Z2luWydUaWxlZCddLnV0aWxzLmNhY2hlS2V5O1xuXG4gICAgICAgIGxldCByZXNvbHV0aW9uOiBzdHJpbmcgPSAnJztcbiAgICAgICAgY29uc3QgbmV3S2V5OiBzdHJpbmcgPSB0aGlzLl9nZXRBc3NldEtleShhc3NldC51cmwpO1xuICAgICAgICBjb25zdCBjS2V5OiBzdHJpbmcgPSBjYWNoZUtleShrZXksICd0aWxlc2V0JywgbmV3S2V5KTtcblxuICAgICAgICBpZiAodHlwZW9mIGFzc2V0LnJlc29sdXRpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXNvbHV0aW9uID0gdGhpcy5fZ2V0UmVzb2x1dGlvbihhc3NldC5yZXNvbHV0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLl9nZXRBc3NldEtleShuZXdLZXkgKyByZXNvbHV0aW9uICsgJy4nICsgdGhpcy5fZ2V0RXh0ZW5zaW9uKGFzc2V0LnVybCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhhc3NldC51cmwsIGNLZXkpO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZShjS2V5LCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9zcHJpdGVTaGVldFBhdGggKyAnLycgKyB1cmwgKyAnLnBuZycpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZFBoeXNpY3Moa2V5OiBzdHJpbmcpIHtcbiAgICAgICAga2V5ID0gdGhpcy5fZ2V0QXNzZXRLZXkoa2V5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZS5sb2FkLnBoeXNpY3Moa2V5LCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9waHlzaWNzUGF0aCArICcvJyArIGtleSArICcuanNvbicpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZEF0bGFzKHVybDogc3RyaW5nLCByZXNvbHV0aW9uPzogYW55KTogUGhhc2VyLkxvYWRlciB8IHN0cmluZyB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVzb2x1dGlvbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJlc29sdXRpb24gPSB0aGlzLl9nZXRSZXNvbHV0aW9uKHJlc29sdXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdhbWUuY2FjaGUuY2hlY2tJbWFnZUtleSh1cmwpKSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUubG9hZC5hdGxhc0pTT05IYXNoKHVybCwgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5fc3ByaXRlU2hlZXRQYXRoICsgJy8nICsgdXJsICsgcmVzb2x1dGlvbiArICcucG5nJyksIHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKHRoaXMuX3Nwcml0ZVNoZWV0UGF0aCArICcvJyArIHVybCArIHJlc29sdXRpb24gKyAnLmpzb24nKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRJbWFnZSh1cmw6IHN0cmluZywgcmVzb2x1dGlvbj86IGFueSk6IFBoYXNlci5Mb2FkZXIgfCBzdHJpbmcge1xuICAgICAgICBpZiAodHlwZW9mIHJlc29sdXRpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXNvbHV0aW9uID0gdGhpcy5fZ2V0UmVzb2x1dGlvbihyZXNvbHV0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBrZXk6IHN0cmluZyA9IHRoaXMuX2dldEFzc2V0S2V5KHVybCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jYWNoZS5jaGVja0ltYWdlS2V5KGtleSkpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBpbWFnZSBrZXkgYWxyZWFkeSBleGlzdHMsIGRvbid0IHJlbG9hZCB0aGUgaW1hZ2UgYW5kIHJldHVybiB0aGUga2V5XG4gICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG4gICAgICAgIHVybCA9IGtleSArIHJlc29sdXRpb24gKyAnLicgKyB0aGlzLl9nZXRFeHRlbnNpb24odXJsKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lLmxvYWQuaW1hZ2Uoa2V5LCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9pbWdQYXRoICsgJy8nICsgdXJsKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRWaWRlbyh1cmw6IHN0cmluZywgcmVzb2x1dGlvbj86IGFueSk6IFBoYXNlci5Mb2FkZXIgfCBzdHJpbmcge1xuICAgICAgICBpZiAodHlwZW9mIHJlc29sdXRpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXNvbHV0aW9uID0gdGhpcy5fZ2V0UmVzb2x1dGlvbihyZXNvbHV0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBrZXk6IHN0cmluZyA9IHRoaXMuX2dldEFzc2V0S2V5KHVybCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jYWNoZS5jaGVja1ZpZGVvS2V5KGtleSkpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBpbWFnZSBrZXkgYWxyZWFkeSBleGlzdHMsIGRvbid0IHJlbG9hZCB0aGUgaW1hZ2UgYW5kIHJldHVybiB0aGUga2V5XG4gICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG4gICAgICAgIHVybCA9IGtleSArIHJlc29sdXRpb24gKyAnLicgKyB0aGlzLl9nZXRFeHRlbnNpb24odXJsKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZS5sb2FkLnZpZGVvKGtleSwgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5fdmlkZW9QYXRoICsgJy8nICsgdXJsKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRTcGluZSh1cmw6IHN0cmluZywgcmVzb2x1dGlvbj86IGFueSk6IHN0cmluZyB8IHZvaWQge1xuICAgICAgICBpZiAodHlwZW9mIHJlc29sdXRpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXNvbHV0aW9uID0gdGhpcy5fZ2V0UmVzb2x1dGlvbihyZXNvbHV0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzb2x1dGlvbiA9PT0gJycpIHtcbiAgICAgICAgICAgIHJlc29sdXRpb24gPSAnQDF4JztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBrZXk6IHN0cmluZyA9IHRoaXMuX2dldEFzc2V0S2V5KHVybCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jYWNoZS5jaGVja0ltYWdlS2V5KGtleSkpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBpbWFnZSBrZXkgYWxyZWFkeSBleGlzdHMsIGRvbid0IHJlbG9hZCB0aGUgaW1hZ2UgYW5kIHJldHVybiB0aGUga2V5XG4gICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG4gICAgICAgIHVybCA9IGtleSArIHJlc29sdXRpb24gKyAnLnBuZyc7XG4gICAgICAgIGNvbnN0IGpzb25VcmwgPSBrZXkgKyAnLmpzb24nO1xuICAgICAgICBjb25zdCBhdGxhc1VybCA9IGtleSArIHJlc29sdXRpb24gKyAnLmF0bGFzJztcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuanNvbihrZXkgKyAnLmpzb24nLCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9zcGluZVBhdGggKyAnLycgKyBqc29uVXJsKSk7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLnRleHQoa2V5ICsgJy5hdGxhcycsIHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKHRoaXMuX3NwaW5lUGF0aCArICcvJyArIGF0bGFzVXJsKSk7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKGtleSArICcucG5nJywgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5fc3BpbmVQYXRoICsgJy8nICsgdXJsKSk7XG5cbiAgICAgICAgaWYgKFNwaW5lLkFVVE9fTUVTSCA9PT0gdHJ1ZSAmJiBrZXkuaW5kZXhPZihTcGluZS5OT05fTUVTSF9TVUZGSVgpID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkU3BpbmUoa2V5ICsgU3BpbmUuTk9OX01FU0hfU1VGRklYKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkQml0bWFwRm9udCh1cmw6IHN0cmluZywgcmVzb2x1dGlvbj86IGFueSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlc29sdXRpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXNvbHV0aW9uID0gdGhpcy5fZ2V0UmVzb2x1dGlvbihyZXNvbHV0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdhbWUubG9hZC5iaXRtYXBGb250KHVybCwgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5fYml0bWFwRm9udFBhdGggKyAnLycgKyB1cmwgKyByZXNvbHV0aW9uICsgJy5wbmcnKSwgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5fYml0bWFwRm9udFBhdGggKyAnLycgKyB1cmwgKyByZXNvbHV0aW9uICsgJy5qc29uJykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkQXVkaW8odXJsOiBzdHJpbmcsIGV4dHM6IGFueSwgaXNBdWRpb1Nwcml0ZTogYm9vbGVhbikge1xuICAgICAgICB2YXIgdHlwZSwgcGF0aDtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jYWNoZS5jaGVja1NvdW5kS2V5KHVybCkgJiYgdGhpcy5nYW1lLmNhY2hlLmdldFNvdW5kKHVybCkuaXNEZWNvZGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gdHlwZSBzaG91bGQgYmUgJ3NvdW5kJyBvciAnc3ByaXRlJyAoJ2Z4JyBhbmQgJ211c2ljJyB0byBiZSBkZXByZWNhdGVkKVxuICAgICAgICAvLyBkZWZhdWx0IHRvIHNvdW5kXG5cbiAgICAgICAgaWYgKHR5cGVvZiB0eXBlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdHlwZSA9ICdzb3VuZCc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXh0cy5pbmRleE9mKCcsJykgPj0gMCkge1xuICAgICAgICAgICAgZXh0cyA9IGV4dHMuc3BsaXQoJywnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdhbWUuZGV2aWNlLmlPUyAmJiBleHRzLmluZGV4T2YoJ200YScpID09PSAtMSkge1xuICAgICAgICAgICAgZXh0cy51bnNoaWZ0KCdtNGEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgZXh0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHBhdGggPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXh0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHBhdGgucHVzaCh0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCgoaXNBdWRpb1Nwcml0ZSA/IHRoaXMuX2F1ZGlvU3ByaXRlUGF0aCA6IHRoaXMuX3NvdW5kUGF0aCkgKyAnLycgKyB1cmwgKyAnLicgKyBleHRzW2ldKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXRoID0gdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwoKGlzQXVkaW9TcHJpdGUgPyB0aGlzLl9hdWRpb1Nwcml0ZVBhdGggOiB0aGlzLl9zb3VuZFBhdGgpICsgJy8nICsgdHlwZSArICcvJyArIHVybCArICcuJyArIGV4dHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzQXVkaW9TcHJpdGUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLmF1ZGlvc3ByaXRlKHVybCwgcGF0aCwgdGhpcy5fYXVkaW9TcHJpdGVQYXRoICsgJy8nICsgdXJsICsgJy5qc29uJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5hdWRpbyh1cmwsIHBhdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc291bmRzVG9EZWNvZGUucHVzaCh7XG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIGlzQXVkaW9TcHJpdGU6IGlzQXVkaW9TcHJpdGVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRTb3VuZCh1cmw6IHN0cmluZywgZXh0czogYW55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRBdWRpbyh1cmwsIGV4dHMsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZEF1ZGlvU3ByaXRlKHVybDogc3RyaW5nLCBleHRzOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZEF1ZGlvKHVybCwgZXh0cywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRBc3NldHMoaWQ6IHN0cmluZywgYmFja2dyb3VuZDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRBc3NldExpc3QgPSBpZDtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQub25GaWxlQ29tcGxldGUucmVtb3ZlKHRoaXMuX2JhY2tncm91bmRGaWxlQ29tcGxldGUsIHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkZpbGVDb21wbGV0ZS5yZW1vdmUodGhpcy5fZ2FtZUZpbGVDb21wbGV0ZSwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5faGFzRmlsZXMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fc291bmRzVG9EZWNvZGUgPSBbXTtcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2RhdGEgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2RhdGFbaWRdID09PSAndW5kZWZpbmVkJyB8fCB0aGlzLl9kYXRhW2lkXS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ25vIHByZWxvYWQgZGF0YSByZWdpc3RlcmVkIGZvciAnLCBpZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9sb2FkQXNzZXRzKGlkKTtcbiAgICAgICAgdGhpcy5faGFzRmlsZXMgPSB0aGlzLmdhbWUubG9hZC50b3RhbFF1ZXVlZEZpbGVzKCkgPiAwO1xuXG4gICAgICAgIGlmIChiYWNrZ3JvdW5kKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkxvYWRTdGFydC5hZGRPbmNlKHRoaXMuX2JhY2tncm91bmRMb2FkU3RhcnQsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQub25GaWxlQ29tcGxldGUuYWRkKHRoaXMuX2JhY2tncm91bmRGaWxlQ29tcGxldGUsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQub25Mb2FkQ29tcGxldGUuYWRkT25jZSh0aGlzLl9iYWNrZ3JvdW5kTG9hZENvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uTG9hZFN0YXJ0LmFkZE9uY2UodGhpcy5fZ2FtZUxvYWRTdGFydCwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkZpbGVTdGFydC5hZGQodGhpcy5fZ2FtZUZpbGVTdGFydCwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkZpbGVDb21wbGV0ZS5hZGQodGhpcy5fZ2FtZUZpbGVDb21wbGV0ZSwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkxvYWRDb21wbGV0ZS5hZGRPbmNlKHRoaXMuX2dhbWVMb2FkQ29tcGxldGUsIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl9oYXNGaWxlcykge1xuICAgICAgICAgICAgdGhpcy5fZ2FtZUxvYWRTdGFydCgpO1xuICAgICAgICAgICAgdGhpcy5fZ2FtZUZpbGVDb21wbGV0ZSgxMDApO1xuICAgICAgICAgICAgdGhpcy5fZ2FtZUxvYWRDb21wbGV0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbnVtU291bmRzID0gdGhpcy5fc291bmRzVG9EZWNvZGUubGVuZ3RoO1xuICAgICAgICB0aGlzLl9zb3VuZHNEZWNvZGVkID0gMDtcbiAgICAgICAgdGhpcy5fbWF4UGVyY2VudCA9IDEwMCAtICh0aGlzLl9udW1Tb3VuZHMgKiB0aGlzLnNvdW5kRGVjb2RpbmdNb2RpZmllcik7XG5cbiAgICAgICAgaWYgKGJhY2tncm91bmQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZFF1ZXVlKCkge1xuICAgICAgICBpZiAodGhpcy5faXNMb2FkaW5nUXVldWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fZGF0YSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZygnbm8gcHJlbG9hZCBxdWV1ZSB0byBsb2FkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYXNzZXRzOiBhbnksXG4gICAgICAgICAgICBzdGF0ZTogc3RyaW5nLFxuICAgICAgICAgICAgaTogbnVtYmVyO1xuXG4gICAgICAgIGZvciAoc3RhdGUgaW4gdGhpcy5fZGF0YSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2F1dG9Mb2FkRGF0YVtzdGF0ZV0pIHtcblxuICAgICAgICAgICAgICAgIGFzc2V0cyA9IHRoaXMuX2RhdGFbc3RhdGVdO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhc3NldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZEFzc2V0KGFzc2V0c1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5faXNMb2FkaW5nUXVldWUgPSB0cnVlO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkxvYWRTdGFydC5hZGRPbmNlKHRoaXMuX2JhY2tncm91bmRMb2FkU3RhcnQsIHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkZpbGVDb21wbGV0ZS5hZGQodGhpcy5fYmFja2dyb3VuZEZpbGVDb21wbGV0ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uTG9hZENvbXBsZXRlLmFkZE9uY2UodGhpcy5fYmFja2dyb3VuZExvYWRDb21wbGV0ZSwgdGhpcyk7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgZ2V0TG9hZFByb2dyZXNzKCkge1xuICAgICAgICBjb25zdCBhZGp1c3RlZFByb2dyZXNzID0gdGhpcy5fZmlsZUNvbXBsZXRlUHJvZ3Jlc3MgKiB0aGlzLl9tYXhQZXJjZW50IC8gMTAwO1xuICAgICAgICByZXR1cm4gYWRqdXN0ZWRQcm9ncmVzcztcbiAgICB9XG5cblxuICAgIHB1YmxpYyBhbGxTb3VuZHNEZWNvZGVkKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdzb3VuZHMgdG8gZGVjb2RlJywgdGhpcy5fc291bmRzVG9EZWNvZGUubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kc1RvRGVjb2RlLmxlbmd0aCA9PT0gMDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICogc2V0cyB0aGUgZGF0YSBmb3IgdGhlIEFzc2V0TWFuYWdlciB0byB1c2UgYXMgYSByZWZlcmVuY2UgKHVzdWFsbHkgZnJvbSBkYXRhL2Fzc2V0cy5qc29uKVxuICAgICogdHJpZ2dlcnMgdGhlIF9wYXJzZURhdGEgaW50ZXJuYWwgbWV0aG9kLCB3aGljaCBzdG9yZXMgdGhlIGFzc2V0IGxpc3QgZm9yIGxhdGVyIHVzZVxuICAgICogQHBhcmFtIHtTdHJpbmd9IHRleHRGaWxlRnJvbUNhY2hlIHRoZSBpZCBvZiB0aGUgZmlsZSBpbiB0aGUgUGhhc2VyLkNhY2hlXG4gICAgKi9cbiAgICBwdWJsaWMgc2V0RGF0YShkYXRhOiBPYmplY3QpIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMuX2xvYWREYXRhID0ge307XG4gICAgICAgIHRoaXMuX3BhcnNlRGF0YSgpO1xuXG4gICAgICAgIHRoaXMuc2VuZE5vdGlmaWNhdGlvbihOb3RpZmljYXRpb25zLkFTU0VUX01BTkFHRVJfREFUQV9TRVQsIHRoaXMuX2RhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogY2xlYXJzIHRoZSBhc3NldHMgZnJvbSBhIHBhcnRpY3VsYXIgaWQgaW4gdGhlIHN0b3JhZ2VcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gaWQgICAgICAgICAgICB0aGUgaWQgb2YgdGhlIGFzc2V0IGxpc3QgdG8gY2xlYXJcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IFtjbGVhckF1ZGlvID0gdHJ1ZV0gICAgd2hldGhlciB0byBjbGVhciBhdWRpbyBmaWxlc1xuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gW2NsZWFyQXRsYXNzZXMgPSB0cnVlXSB3aGV0aGVyIHRvIGNsZWFyIHRleHR1cmUgYXRsYXNzZXNcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IFtjbGVhckltYWdlcyA9IHRydWVdICAgd2hldGhlciB0byBjbGVhciBpbWFnZXNcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IFtjbGVhclRleHQgPSB0cnVlXSAgICAgd2hldGhlciB0byBjbGVhciB0ZXh0IGZpbGVzXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIGNsZWFyQXNzZXRzKGlkOiBzdHJpbmcsIGNsZWFyQXVkaW86IGJvb2xlYW4gPSB0cnVlLCBjbGVhckF0bGFzc2VzOiBib29sZWFuID0gdHJ1ZSwgY2xlYXJJbWFnZXM6IGJvb2xlYW4gPSB0cnVlLCBjbGVhclRleHQ6IGJvb2xlYW4gPSB0cnVlLCBjbGVhckpTT046IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHZhciBhc3NldHMgPSB0aGlzLl9kYXRhW2lkXTtcblxuICAgICAgICBjb25zb2xlLmxvZygnY2xlYXJpbmc6ICcsIGlkKTtcblxuICAgICAgICBpZiAoIWFzc2V0cyB8fCB0eXBlb2YgYXNzZXRzID09PSAndW5kZWZpbmVkJyB8fCBhc3NldHMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdubyBhc3NldHMnLCBhc3NldHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhc3NldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJBc3NldChhc3NldHNbaV0sIGNsZWFyQXVkaW8sIGNsZWFyQXRsYXNzZXMsIGNsZWFySW1hZ2VzLCBjbGVhclRleHQsIGNsZWFySlNPTik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jb21wbGV0ZWRMb2Fkc1tpZF0gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnNlbmROb3RpZmljYXRpb24oTm90aWZpY2F0aW9ucy5BU1NFVF9NQU5BR0VSX0FTU0VUU19DTEVBUkVELCBpZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBjbGVhcnMgYW4gYXNzZXQgZnJvbSB0aGUgZ2FtZSdzIG1lbW9yeVxuICAgICogQHBhcmFtICB7T2JqZWN0fSBhc3NldCAgICAgICAgIHRoZSBhc3NldCB0byBjbGVhclxuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gW2NsZWFyQXVkaW8gPSB0cnVlXSAgICB3aGV0aGVyIHRvIGNsZWFyIGF1ZGlvIGZpbGVzXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBbY2xlYXJBdGxhc3NlcyA9IHRydWVdIHdoZXRoZXIgdG8gY2xlYXIgdGV4dHVyZSBhdGxhc3Nlc1xuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gW2NsZWFySW1hZ2VzID0gdHJ1ZV0gICB3aGV0aGVyIHRvIGNsZWFyIGltYWdlc1xuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gW2NsZWFyVGV4dCA9IHRydWVdICAgICB3aGV0aGVyIHRvIGNsZWFyIHRleHQgZmlsZXNcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgY2xlYXJBc3NldChhc3NldDogSUFzc2V0LCBjbGVhckF1ZGlvOiBib29sZWFuID0gdHJ1ZSwgY2xlYXJBdGxhc3NlczogYm9vbGVhbiA9IHRydWUsIGNsZWFySW1hZ2VzOiBib29sZWFuID0gdHJ1ZSwgY2xlYXJUZXh0OiBib29sZWFuID0gdHJ1ZSwgY2xlYXJKU09OOiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICB2YXIgdHlwZSA9IGFzc2V0LnR5cGUsXG4gICAgICAgICAgICB1cmwgPSBhc3NldC51cmwsXG4gICAgICAgICAgICByZXF1aXJlZCA9IGFzc2V0LnJlcXVpcmVkO1xuXG4gICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoZSAnICsgdHlwZSArICcgYXNzZXQ6ICcgKyB1cmwgKyAnIGlzIHJlcXVpcmVkIGFuZCB3aWxsIG5vdCBiZSBjbGVhcmVkJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5BVURJTzpcbiAgICAgICAgICAgICAgICBpZiAoY2xlYXJBdWRpbykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuc291bmQucmVtb3ZlQnlLZXkodXJsKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNhY2hlLnJlbW92ZVNvdW5kKHVybCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuSU1BR0U6XG4gICAgICAgICAgICAgICAgaWYgKGNsZWFySW1hZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jYWNoZS5yZW1vdmVJbWFnZSh1cmwpO1xuICAgICAgICAgICAgICAgICAgICBQSVhJLkJhc2VUZXh0dXJlQ2FjaGVbdXJsXS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuQVRMQVM6XG4gICAgICAgICAgICAgICAgaWYgKGNsZWFyQXRsYXNzZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNhY2hlLnJlbW92ZUltYWdlKHVybCk7XG4gICAgICAgICAgICAgICAgICAgIFBJWEkuQmFzZVRleHR1cmVDYWNoZVt1cmxdLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNhY2hlLnJlbW92ZVhNTCh1cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLlRFWFQ6XG4gICAgICAgICAgICAgICAgaWYgKGNsZWFyVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuY2FjaGUucmVtb3ZlVGV4dCh1cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLkpTT046XG4gICAgICAgICAgICAgICAgaWYgKGNsZWFySlNPTikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuY2FjaGUucmVtb3ZlSlNPTih1cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLlBIWVNJQ1M6XG4gICAgICAgICAgICAgICAgaWYgKGNsZWFySlNPTikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuY2FjaGUucmVtb3ZlUGh5c2ljcyh1cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhclNwaW5lQXNzZXQoaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmdhbWUuY2FjaGUucmVtb3ZlSlNPTihpZCArICcuanNvbicpO1xuICAgICAgICB0aGlzLmdhbWUuY2FjaGUucmVtb3ZlVGV4dChpZCArICcuYXRsYXMnKTtcbiAgICAgICAgdGhpcy5nYW1lLmNhY2hlLnJlbW92ZUltYWdlKGlkICsgJy5wbmcnLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGNoZWNrcyBpZiB0aGUgYXNzZXRzIGZyb20gdGhpcyBsaXN0IGlkIGFyZSBhbHJlYWR5IGxvYWRlZFxuICAgICogQHBhcmFtICB7U3RyaW5nfSAgaWQgdGhlIGFzc2V0IGxpc3QgaWQgdG8gY2hlY2tcbiAgICAqIEByZXR1cm4ge0Jvb2xlYW59ICAgIHdoZXRoZXIgaXQgaGFzIGJlZW4gbG9hZGVkIGFscmVhZHlcbiAgICAqL1xuICAgIHB1YmxpYyBoYXNMb2FkZWRBc3NldHMoaWQ6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29tcGxldGVkTG9hZHNbaWRdID09PSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZW5kTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbk5hbWU6IHN0cmluZywgbm90aWZpY2F0aW9uQm9keT86IGFueSk6IHZvaWQge1xuICAgICAgICByZXR1cm4gdGhpcy5hcHAuc2VuZE5vdGlmaWNhdGlvbihub3RpZmljYXRpb25OYW1lLCBub3RpZmljYXRpb25Cb2R5KTtcbiAgICB9XG5cbiAgICAvLyBnZXR0ZXIgLyBzZXR0ZXJcbiAgICBwdWJsaWMgc2V0IGJhc2VVUkwoYmFzZVVSTDogc3RyaW5nKSB7XG4gICAgICAgIC8vIGVuc3VyZSB0cmFpbGluZyBzbGFzaFxuICAgICAgICBpZiAoYmFzZVVSTCAmJiBiYXNlVVJMICE9PSB1bmRlZmluZWQgJiYgYmFzZVVSTC5jaGFyQXQoYmFzZVVSTC5sZW5ndGggLSAxKSAhPT0gJy8nKVxuICAgICAgICAgICAgYmFzZVVSTCArPSAnLyc7XG5cbiAgICAgICAgdGhpcy5fYmFzZVVSTCA9IGJhc2VVUkw7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwYXRocyhwYXRoT2JqOiBJUGF0aENvbmZpZykge1xuICAgICAgICB0aGlzLl9wYXRoT2JqID0gcGF0aE9iaiB8fCB7fTtcblxuICAgICAgICB0aGlzLl9hc3NldFBhdGggPSB0aGlzLl9iYXNlVVJMICsgKHRoaXMuX3BhdGhPYmouYXNzZXRQYXRoIHx8ICdhc3NldHMnKTtcbiAgICAgICAgdGhpcy5fZGF0YVBhdGggPSB0aGlzLl9iYXNlVVJMICsgKHRoaXMuX3BhdGhPYmouZGF0YVBhdGggfHwgJ2Fzc2V0cy9kYXRhJyk7XG4gICAgICAgIHRoaXMuX3Nwcml0ZVNoZWV0UGF0aCA9IHRoaXMuX2Jhc2VVUkwgKyAodGhpcy5fcGF0aE9iai5zcHJpdGVzaGVldFBhdGggfHwgJ2Fzc2V0cy9pbWcvc3ByaXRlc2hlZXRzJyk7XG4gICAgICAgIHRoaXMuX2ltZ1BhdGggPSB0aGlzLl9iYXNlVVJMICsgKHRoaXMuX3BhdGhPYmouaW1nUGF0aCB8fCAnYXNzZXRzL2ltZycpO1xuICAgICAgICB0aGlzLl92aWRlb1BhdGggPSB0aGlzLl9iYXNlVVJMICsgKHRoaXMuX3BhdGhPYmouaW1nUGF0aCB8fCAnYXNzZXRzL3ZpZGVvJyk7XG4gICAgICAgIHRoaXMuX3NwaW5lUGF0aCA9IHRoaXMuX2Jhc2VVUkwgKyAodGhpcy5fcGF0aE9iai5zcGluZVBhdGggfHwgJ2Fzc2V0cy9zcGluZScpO1xuICAgICAgICB0aGlzLl9mb250UGF0aCA9IHRoaXMuX2Jhc2VVUkwgKyAodGhpcy5fcGF0aE9iai5mb250UGF0aCB8fCAnYXNzZXRzL2ZvbnRzJyk7XG4gICAgICAgIHRoaXMuX2JpdG1hcEZvbnRQYXRoID0gdGhpcy5fYmFzZVVSTCArICh0aGlzLl9wYXRoT2JqLmJpdG1hcEZvbnRQYXRoIHx8ICdhc3NldHMvZm9udHMvYml0bWFwJyk7XG4gICAgICAgIHRoaXMuX2F1ZGlvU3ByaXRlUGF0aCA9IHRoaXMuX2Jhc2VVUkwgKyAodGhpcy5fcGF0aE9iai5hdWRpb1Nwcml0ZVBhdGggfHwgJ2Fzc2V0cy9hdWRpby9zcHJpdGUnKTtcbiAgICAgICAgdGhpcy5fc291bmRQYXRoID0gdGhpcy5fYmFzZVVSTCArICh0aGlzLl9wYXRoT2JqLnNvdW5kUGF0aCB8fCAnYXNzZXRzL2F1ZGlvL3NvdW5kJyk7XG4gICAgICAgIHRoaXMuX3BoeXNpY3NQYXRoID0gdGhpcy5fYmFzZVVSTCArICh0aGlzLl9wYXRoT2JqLnBoeXNpY3NQYXRoIHx8ICdhc3NldHMvZGF0YS9waHlzaWNzJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCByZXNvbHV0aW9uKHJlczogbnVtYmVyKSB7XG4gICAgICAgIGlmIChyZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVzID0gdGhpcy5nYW1lLnJlc29sdXRpb247XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9yZXMgPSByZXM7XG4gICAgICAgIHRoaXMuX3Jlc29sdXRpb24gPSAnJztcblxuICAgICAgICBpZiAodGhpcy5fcmVzID4gMS41KSB7XG4gICAgICAgICAgICB0aGlzLl9yZXNvbHV0aW9uID0gQXNzZXRNYW5hZ2VyLlJFU09MVVRJT05fMlg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHJlc29sdXRpb24oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcztcbiAgICB9XG4gICAgLyoqXG4gICAgKiBzZXRzIHRoZSBwZXJjZW50YWdlIG9mIHRoZSBsb2FkIHdlIHNob3VsZCBhbGxvdCB0byBlYWNoIHNvdW5kXG4gICAgKiBAcGFyYW0ge051bWJlcn0gW251bSA9IDJdIHRoZSBwZXJjZW50YWdlXG4gICAgKi9cbiAgICBwdWJsaWMgc2V0IHNvdW5kRGVjb2RpbmdNb2RpZmllcihudW06IG51bWJlcikge1xuICAgICAgICBpZiAobnVtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG51bSA9IDI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc291bmREZWNvZGluZ01vZGlmaWVyID0gbnVtO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc291bmREZWNvZGluZ01vZGlmaWVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc291bmREZWNvZGluZ01vZGlmaWVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgY2FjaGVCdXN0VmVyc2lvbih2ZXJzaW9uOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fY2FjaGVCdXN0VmVyc2lvbiA9ICcnICsgdmVyc2lvbjtcbiAgICB9XG59IiwiLyoqXG4gKiBBdWRpb01hbmFnZXJcbiAqIFdyYXBwZXIgZm9yIFBoYXNlci5Tb3VuZE1hbmFnZXJcbiAqL1xuaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xuaW1wb3J0IHtHYW1lfSBmcm9tICcuLi9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF1ZGlvTWFuYWdlciB7XG4gICAgcHVibGljIGdhbWU6IEdhbWU7XG5cbiAgICBwcml2YXRlIF9kZWZhdWx0Vm9sdW1lOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgX3Nwcml0ZXM6IHsgW3Nwcml0ZTogc3RyaW5nXTogUGhhc2VyLkF1ZGlvU3ByaXRlIH0gPSB7fTtcbiAgICBwcml2YXRlIF9zb3VuZHM6IHsgW3NvdW5kOiBzdHJpbmddOiBQaGFzZXIuU291bmQgfSA9IHt9O1xuICAgIHByaXZhdGUgX21hcmtlckxvb2t1cDogeyBbaWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lO1xuICAgIH1cblxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuICAgIHByaXZhdGUgX2FkZEF1ZGlvKGtleTogc3RyaW5nLCBpc0F1ZGlvU3ByaXRlOiBib29sZWFuID0gZmFsc2UpOiBQaGFzZXIuU291bmQgfCBQaGFzZXIuQXVkaW9TcHJpdGUge1xuICAgICAgICBpZiAoaXNBdWRpb1Nwcml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcnNlQXVkaW9TcHJpdGUoa2V5LCB0aGlzLmdhbWUuYWRkLmF1ZGlvU3ByaXRlKGtleSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FsbG93TXVsdGlwbGUodGhpcy5nYW1lLmFkZC5zb3VuZChrZXkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3BhcnNlQXVkaW9TcHJpdGUoa2V5OiBzdHJpbmcsIGF1ZGlvU3ByaXRlOiBQaGFzZXIuQXVkaW9TcHJpdGUpOiBQaGFzZXIuQXVkaW9TcHJpdGUge1xuICAgICAgICBmb3IgKHZhciBzb3VuZEtleSBpbiBhdWRpb1Nwcml0ZS5zb3VuZHMpIHtcbiAgICAgICAgICAgIHRoaXMuX2FsbG93TXVsdGlwbGUoYXVkaW9TcHJpdGUuc291bmRzW3NvdW5kS2V5XSk7XG4gICAgICAgICAgICB0aGlzLl9tYXJrZXJMb29rdXBbc291bmRLZXldID0ga2V5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhdWRpb1Nwcml0ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9hbGxvd011bHRpcGxlKHNvdW5kOiBQaGFzZXIuU291bmQpOiBQaGFzZXIuU291bmQge1xuICAgICAgICBzb3VuZC5hbGxvd011bHRpcGxlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHNvdW5kO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldEtleUZyb21NYXJrZXJOYW1lKG1hcmtlcjogc3RyaW5nKTogc3RyaW5nIHwgYm9vbGVhbiB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fbWFya2VyTG9va3VwW21hcmtlcl0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWFya2VyTG9va3VwW21hcmtlcl07XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuX3Nwcml0ZXMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3ByaXRlc1trZXldLnNvdW5kc1ttYXJrZXJdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuX21hcmtlckxvb2t1cFttYXJrZXJdID0ga2V5O1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3BsYXlTcHJpdGVNYXJrZXIoa2V5OiBzdHJpbmcsIG1hcmtlcjogc3RyaW5nLCB2b2x1bWU/OiBhbnksIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSwgZm9yY2VSZXN0YXJ0OiBib29sZWFuID0gdHJ1ZSk6IFBoYXNlci5Tb3VuZCB7XG4gICAgICAgIGlmICh0eXBlb2Ygdm9sdW1lICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2b2x1bWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZvbHVtZS5pbmRleE9mKCcrJykgPj0gMCB8fCB2b2x1bWUuaW5kZXhPZignLScpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lID0gdGhpcy5fZGVmYXVsdFZvbHVtZSArIHBhcnNlRmxvYXQodm9sdW1lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2b2x1bWUgPSBwYXJzZUZsb2F0KHZvbHVtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdm9sdW1lID0gdGhpcy5fZGVmYXVsdFZvbHVtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvb3AgPSBsb29wIHx8IGZhbHNlO1xuICAgICAgICBmb3JjZVJlc3RhcnQgPSBmb3JjZVJlc3RhcnQgPT09IGZhbHNlID8gZmFsc2UgOiB0cnVlO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGVzW2tleV0ucGxheShtYXJrZXIsIHZvbHVtZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc3RvcFNwcml0ZU1hcmtlcihrZXk6IHN0cmluZywgbWFya2VyOiBzdHJpbmcpOiBib29sZWFuIHwgUGhhc2VyLlNvdW5kIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zcHJpdGVzID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgdGhpcy5fc3ByaXRlc1trZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGVzW2tleV0uc3RvcChtYXJrZXIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3N0b3BTb3VuZChzb3VuZDogUGhhc2VyLlNvdW5kKTogdm9pZCB7XG4gICAgICAgIHJldHVybiBzb3VuZC5zdG9wKCk7XG4gICAgfVxuXG4gICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICAvKipcbiAgICAqIGFkZHMgYXVkaW8gdG8gdGhlIGxvb2t1cCAoY2FsbGVkIGJ5IEFzc2V0TWFuYWdlciB3aGVuIGFueSBzb3VuZCBpcyBsb2FkZWQsIHVzdWFsbHkgbm90IG5lY2Vzc2FyeSB0byBjYWxsIGZyb20gYSBnYW1lKVxuICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSAgICAgICAgIHRoZSBQaGFzZXIuQ2FjaGUga2V5IG9mIHRoZSBhdWRpbyBhc3NldFxuICAgICogQHBhcmFtIHtCb29sZWFufSBpc0F1ZGlvU3ByaXRlIHdoZXRoZXIgdGhlIGFzc2V0IGlzIGFuIGF1ZGlvIHNwcml0ZVxuICAgICovXG4gICAgcHVibGljIGFkZEF1ZGlvKGtleTogc3RyaW5nLCBpc0F1ZGlvU3ByaXRlOiBib29sZWFuID0gZmFsc2UpOiBQaGFzZXIuQXVkaW9TcHJpdGUgfCBQaGFzZXIuU291bmQge1xuICAgICAgICBpZiAoaXNBdWRpb1Nwcml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkQXVkaW9TcHJpdGUoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5hZGRTb3VuZChrZXkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogYWRkcyBhIHNpbmdsZSBzb3VuZCB0byB0aGUgbG9va3VwICh1c3VhbGx5IG5vdCBuZWNlc3NhcnkgdG8gY2FsbCBmcm9tIGEgZ2FtZSlcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgdGhlIFBoYXNlci5DYWNoZSBrZXkgb2YgdGhlIGFzc2V0XG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuU291bmR9IHRoZSBhZGRlZCBzb3VuZFxuICAgICovXG4gICAgcHVibGljIGFkZFNvdW5kKGtleSk6IFBoYXNlci5Tb3VuZCB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc291bmRzW2tleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc291bmRzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc291bmRzW2tleV0gPSB0aGlzLmdhbWUuYWRkLmF1ZGlvKGtleSk7XG4gICAgICAgIHRoaXMuX3NvdW5kc1trZXldLmFsbG93TXVsdGlwbGUgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcy5fc291bmRzW2tleV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBhZGRzIGFuIGF1ZGlvIHNwcml0ZSB0byB0aGUgbG9va3VwICh1c3VhbGx5IG5vdCBuZWNlc3NhcnkgdG8gY2FsbCBmcm9tIGEgZ2FtZSlcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgdGhlIFBoYXNlci5DYWNoZSBrZXkgb2YgdGhlIGFzc2V0XG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuQXVkaW9TcHJpdGV9IHRoZSBhZGRlZCBhdWRpbyBzcHJpdGVcbiAgICAqL1xuICAgIHB1YmxpYyBhZGRBdWRpb1Nwcml0ZShrZXk6IHN0cmluZyk6IFBoYXNlci5BdWRpb1Nwcml0ZSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3ByaXRlc1trZXldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zcHJpdGVzW2tleV0gPSA8UGhhc2VyLkF1ZGlvU3ByaXRlPnRoaXMuX2FkZEF1ZGlvKGtleSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGVzW2tleV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBhIGdsb2JhbCBtZXRob2QgdG8gcGxheSBhIHNvdW5kIC0gd2lsbCBjaGVjayBhdWRpbyBzcHJpdGUgbWFya2VycyBmb3IgdGhlIHByb3ZpZGVkIGtleSBmaXJzdCwgdGhlbiBzaW5nbGUgc291bmRzXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IG1hcmtlciAgICAgICB0aGUgc291bmQgbWFya2VyIChvciBrZXkpIHRvIGNoZWNrIGZvclxuICAgICogQHBhcmFtICB7TnVtYmVyfSB2b2x1bWUgICAgICAgdGhlIHZvbHVtZSBhdCB3aGljaCB0byBwbGF5IHRoZSBzb3VuZFxuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gbG9vcCAgICAgICAgIHdoZXRoZXIgdGhlIHNvdW5kIHNob3VsZCBsb29wICh3b24ndCB3b3JrIGlmIGl0J3MgYSBzcHJpdGUgbWFya2VyLCBhbmQgXCJsb29wXCIgaGFzbid0IGJlZW4gc2V0IGluIHRoZSBhdWRpbyBzcHJpdGUgZGVzY3JpcHRvciBmaWxlKVxuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gZm9yY2VSZXN0YXJ0IHdoZXRoZXIgdG8gcmVzdGFydCB0aGUgc291bmQgaWYgaXQncyBhbHJlYWR5IHBsYXlpbmdcbiAgICAqIEByZXR1cm4ge1BoYXNlci5Tb3VuZH0gICAgICAgICAgICAgIHRoZSBwbGF5aW5nIHNvdW5kXG4gICAgKi9cbiAgICBwdWJsaWMgcGxheUF1ZGlvKG1hcmtlcjogc3RyaW5nLCB2b2x1bWU/OiBudW1iZXIsIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSwgZm9yY2VSZXN0YXJ0OiBib29sZWFuID0gdHJ1ZSk6IFBoYXNlci5Tb3VuZCB7XG4gICAgICAgIGlmICh0aGlzLl9nZXRLZXlGcm9tTWFya2VyTmFtZShtYXJrZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5U3ByaXRlTWFya2VyKG1hcmtlciwgdm9sdW1lLCBsb29wLCBmb3JjZVJlc3RhcnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucGxheVNvdW5kKG1hcmtlciwgdm9sdW1lLCBsb29wLCBmb3JjZVJlc3RhcnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogY2FsbHMgRGlqb24uQXVkaW9NYW5hZ2VyLnBsYXlBdWRpbyBvbiBhIGRlbGF5XG4gICAgKiBAcGFyYW0gIHtpbnR9IGRlbGF5ICAgICAgICBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5IHRoZSBzb3VuZFxuICAgICogQHBhcmFtICB7U3RyaW5nfSBtYXJrZXIgICAgICAgdGhlIHNvdW5kIG1hcmtlciAob3Iga2V5KSB0byBjaGVjayBmb3JcbiAgICAqIEBwYXJhbSAge051bWJlcn0gdm9sdW1lICAgICAgIHRoZSB2b2x1bWUgYXQgd2hpY2ggdG8gcGxheSB0aGUgc291bmRcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IGxvb3AgICAgICAgICB3aGV0aGVyIHRoZSBzb3VuZCBzaG91bGQgbG9vcCAod29uJ3Qgd29yayBpZiBpdCdzIGEgc3ByaXRlIG1hcmtlciwgYW5kIFwibG9vcFwiIGhhc24ndCBiZWVuIHNldCBpbiB0aGUgYXVkaW8gc3ByaXRlIGRlc2NyaXB0b3IgZmlsZSlcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IGZvcmNlUmVzdGFydCB3aGV0aGVyIHRvIHJlc3RhcnQgdGhlIHNvdW5kIGlmIGl0J3MgYWxyZWFkeSBwbGF5aW5nXG4gICAgKi9cbiAgICBwdWJsaWMgcGxheURlbGF5ZWRBdWRpbyhkZWxheTogbnVtYmVyLCBtYXJrZXI6IHN0cmluZywgdm9sdW1lPzogbnVtYmVyLCBsb29wOiBib29sZWFuID0gZmFsc2UsIGZvcmNlUmVzdGFydDogYm9vbGVhbiA9IHRydWUpOiBQaGFzZXIuU291bmQge1xuICAgICAgICBpZiAodGhpcy5fZ2V0S2V5RnJvbU1hcmtlck5hbWUobWFya2VyKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheURlbGF5ZWRTcHJpdGVNYXJrZXIoZGVsYXksIG1hcmtlciwgdm9sdW1lLCBsb29wLCBmb3JjZVJlc3RhcnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBsYXlEZWxheWVkU291bmQoZGVsYXksIG1hcmtlciwgdm9sdW1lLCBsb29wLCBmb3JjZVJlc3RhcnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogcGxheXMgYSBzaW5nbGUgc291bmRcbiAgICAqIEBwYXJhbSAge1N0cmluZ30ga2V5ICAgICAgICAgIHRoZSBQaGFzZXIuQ2FjaGUga2V5IGZvciB0aGUgc291bmRcbiAgICAqIEBwYXJhbSAge051bWJlcn0gdm9sdW1lICAgICAgIHRoZSB2b2x1bWUgYXQgd2hpY2ggdG8gcGxheSB0aGUgc291bmRcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IGxvb3AgICAgICAgICB3aGV0aGVyIHRoZSBzb3VuZCBzaG91bGQgbG9vcCAod29uJ3Qgd29yayBpZiBpdCdzIGEgc3ByaXRlIG1hcmtlciwgYW5kIFwibG9vcFwiIGhhc24ndCBiZWVuIHNldCBpbiB0aGUgYXVkaW8gc3ByaXRlIGRlc2NyaXB0b3IgZmlsZSlcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IGZvcmNlUmVzdGFydCB3aGV0aGVyIHRvIHJlc3RhcnQgdGhlIHNvdW5kIGlmIGl0J3MgYWxyZWFkeSBwbGF5aW5nXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuU291bmR9IHRoZSBwbGF5aW5nIHNvdW5kXG4gICAgKi9cbiAgICBwdWJsaWMgcGxheVNvdW5kKGtleTogc3RyaW5nLCB2b2x1bWU/OiBudW1iZXIsIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSwgZm9yY2VSZXN0YXJ0OiBib29sZWFuID0gdHJ1ZSk6IFBoYXNlci5Tb3VuZCB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc291bmRzW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2b2x1bWUgPSB0eXBlb2Ygdm9sdW1lID09PSAndW5kZWZpbmVkJyA/IHRoaXMuX2RlZmF1bHRWb2x1bWUgOiB2b2x1bWU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kc1trZXldLnBsYXkoXCJcIiwgMCwgdm9sdW1lLCBsb29wLCBmb3JjZVJlc3RhcnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogcGxheXMgYSBtYXJrZXIgZnJvbSBhbiBhdWRpbyBzcHJpdGVcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gbWFya2VyICAgICAgIHRoZSBtYXJrZXIgdG8gY2hlY2sgZm9yICh3aWxsIGNoZWNrIGFsbCBhdWRpbyBzcHJpdGVzKVxuICAgICogQHBhcmFtICB7TnVtYmVyfSB2b2x1bWUgICAgICAgdGhlIHZvbHVtZSBhdCB3aGljaCB0byBwbGF5IHRoZSBzb3VuZFxuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gbG9vcCAgICAgICAgIHdoZXRoZXIgdGhlIHNvdW5kIHNob3VsZCBsb29wICh3b24ndCB3b3JrIGlmIGl0J3MgYSBzcHJpdGUgbWFya2VyLCBhbmQgXCJsb29wXCIgaGFzbid0IGJlZW4gc2V0IGluIHRoZSBhdWRpbyBzcHJpdGUgZGVzY3JpcHRvciBmaWxlKVxuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gZm9yY2VSZXN0YXJ0IHdoZXRoZXIgdG8gcmVzdGFydCB0aGUgc291bmQgaWYgaXQncyBhbHJlYWR5IHBsYXlpbmdcbiAgICAqIEByZXR1cm4ge1BoYXNlci5Tb3VuZH0gdGhlIHBsYXlpbmcgc291bmRcbiAgICAqL1xuICAgIHB1YmxpYyBwbGF5U3ByaXRlTWFya2VyKG1hcmtlcjogc3RyaW5nLCB2b2x1bWU/OiBudW1iZXIsIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSwgZm9yY2VSZXN0YXJ0OiBib29sZWFuID0gdHJ1ZSk6IFBoYXNlci5Tb3VuZCB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuX2dldEtleUZyb21NYXJrZXJOYW1lKG1hcmtlcik7XG5cbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtYXJrZXIgbm90IGZvdW5kJywgbWFya2VyKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXlTcHJpdGVNYXJrZXIoPHN0cmluZz5rZXksIG1hcmtlciwgdm9sdW1lLCBsb29wLCBmb3JjZVJlc3RhcnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwbGF5RGVsYXllZFNvdW5kKGRlbGF5OiBudW1iZXIsIGtleTogc3RyaW5nLCB2b2x1bWU/OiBudW1iZXIsIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSwgZm9yY2VSZXN0YXJ0OiBib29sZWFuID0gdHJ1ZSk6IFBoYXNlci5Tb3VuZCB7XG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoZGVsYXksIHRoaXMucGxheVNvdW5kLCB0aGlzLCBrZXksIHZvbHVtZSwgbG9vcCwgZm9yY2VSZXN0YXJ0KTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHBsYXlEZWxheWVkU3ByaXRlTWFya2VyKGRlbGF5OiBudW1iZXIsIG1hcmtlcjogc3RyaW5nLCB2b2x1bWU/OiBudW1iZXIsIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSwgZm9yY2VSZXN0YXJ0OiBib29sZWFuID0gdHJ1ZSk6IFBoYXNlci5Tb3VuZCB7XG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoZGVsYXksIHRoaXMucGxheVNwcml0ZU1hcmtlciwgdGhpcywgbWFya2VyLCB2b2x1bWUsIGxvb3AsIGZvcmNlUmVzdGFydCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogc3RvcHMgYW55IHBsYXlpbmcgYXVkaW8gZmlsZSB3aXRoIHRoZSBnaXZlbiBtYXJrZXJcbiAgICAqIGNoZWNrcyBhdWRpbyBzcHJpdGVzIGZpcnN0LCB0aGVuIHNpbmdsZSBzb3VuZHNcbiAgICAqIEByZXR1cm4ge1BoYXNlci5Tb3VuZH0gdGhlIHNvdW5kIHRoYXQgd2FzIHN0b3BwZWRcbiAgICAqL1xuICAgIHB1YmxpYyBzdG9wQXVkaW8obWFya2VyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2dldEtleUZyb21NYXJrZXJOYW1lKG1hcmtlcikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3BTcHJpdGVNYXJrZXIobWFya2VyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zdG9wU291bmQobWFya2VyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHN0b3BzIGEgc2luZ2xlIHNvdW5kIGZyb20gcGxheWluZ1xuICAgICogQHJldHVybiB7UGhhc2VyLlNvdW5kfSB0aGUgc291bmQgdGhhdCB3YXMgc3RvcHBlZFxuICAgICovXG4gICAgcHVibGljIHN0b3BTb3VuZChrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3NvdW5kcyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHRoaXMuX3NvdW5kc1trZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VuZHNba2V5XS5zdG9wKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBzdG9wcyBhIHNpbmdsZSBzb3VuZCBmcm9tIHBsYXlpbmdcbiAgICAqIEByZXR1cm4ge1BoYXNlci5Tb3VuZH0gdGhlIHNvdW5kIHRoYXQgd2FzIHN0b3BwZWRcbiAgICAqL1xuICAgIHB1YmxpYyBzdG9wU3ByaXRlTWFya2VyKG1hcmtlcjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLl9nZXRLZXlGcm9tTWFya2VyTmFtZShtYXJrZXIpO1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ21hcmtlciBub3QgZm91bmQnLCBtYXJrZXIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3N0b3BTcHJpdGVNYXJrZXIoPHN0cmluZz5rZXksIG1hcmtlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBzdG9wcyByZW1vdmVzIGEgc291bmQgZnJvbSBEaWpvbi5BdWRpb01hbmFnZXIncyBsb29rdXBcbiAgICAqIEBwYXJhbSAge1N0cmluZ30ga2V5IHRoZSBrZXkgb2YgdGhlIHNvdW5kIHRvIGJlIHJlbW92ZWRcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgcmVtb3ZlU291bmQoa2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc291bmRzID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgdGhpcy5fc291bmRzW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kc1trZXldKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BTb3VuZChrZXkpO1xuICAgICAgICAgICAgdGhpcy5fc291bmRzW2tleV0uZGVzdHJveSgpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX3NvdW5kc1trZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBzdG9wcyByZW1vdmVzIGFuIGF1ZGlvIHNwcml0ZSBmcm9tIERpam9uLkF1ZGlvTWFuYWdlcidzIGxvb2t1cFxuICAgICogQHBhcmFtICB7U3RyaW5nfSBrZXkgdGhlIGtleSBvZiB0aGUgc291bmQgdG8gYmUgcmVtb3ZlZFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyByZW1vdmVTcHJpdGUoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zcHJpdGVzID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgdGhpcy5fc3ByaXRlc1trZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RvcFNwcml0ZU1hcmtlcihrZXkpO1xuICAgICAgICB0aGlzLl9zcHJpdGVzW2tleV0gPSBudWxsO1xuICAgICAgICBkZWxldGUgdGhpcy5fc3ByaXRlc1trZXldO1xuICAgIH1cblxuICAgIHB1YmxpYyBmYWRlKHNvdW5kOiBQaGFzZXIuU291bmQsIHZvbHVtZTogbnVtYmVyLCB0aW1lOiBudW1iZXIsIHN0b3A6IGJvb2xlYW4gPSBmYWxzZSk6IFBoYXNlci5Ud2VlbiB7XG4gICAgICAgIGlmICghc291bmQpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgaWYgKHNvdW5kLmZhZGVUd2VlbiAmJiBzb3VuZC5mYWRlVHdlZW4pXG4gICAgICAgICAgICB0aGlzLmdhbWUudHdlZW5zLnJlbW92ZShzb3VuZC5mYWRlVHdlZW4pO1xuXG4gICAgICAgIHNvdW5kLmZhZGVUd2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4oc291bmQpLnRvKHtcbiAgICAgICAgICAgIHZvbHVtZTogdm9sdW1lXG4gICAgICAgIH0sIHRpbWUgfHwgMzAwLCBQaGFzZXIuRWFzaW5nLkxpbmVhci5Ob25lKTtcblxuICAgICAgICBpZiAoc3RvcCA9PT0gdHJ1ZSlcbiAgICAgICAgICAgIHNvdW5kLmZhZGVUd2Vlbi5vbkNvbXBsZXRlLmFkZE9uY2UoZnVuY3Rpb24gKCkgeyB0aGlzLl9zdG9wU291bmQoc291bmQpIH0sIHRoaXMpO1xuXG4gICAgICAgIHJldHVybiBzb3VuZC5mYWRlVHdlZW4uc3RhcnQoKTtcbiAgICB9XG5cbiAgICAvLyBnZXR0ZXIgLyBzZXR0ZXJcbiAgICAvKipcbiAgICAqIFNldHMgdGhlIGRlZmF1bHQgdm9sdW1lIGZvciBhbGwgc291bmRzICh1c2VkIGluIHRoZSBjYXNlIHdoZXJlIGEgdm9sdW1lIGlzIG5vdCBzdXBwbGllZCB0byB0aGUgcGxheUF1ZGlvLCBwbGF5U291bmQsIG9yIHBsYXlTcHJpdGVNYXJrZXIgbWV0aG9kcylcbiAgICAqL1xuICAgIHB1YmxpYyBzZXQgZGVmYXVsdFZvbHVtZSh2b2w6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9kZWZhdWx0Vm9sdW1lID0gdm9sO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZGVmYXVsdFZvbHVtZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFZvbHVtZTtcbiAgICB9XG59IiwiLyoqXG4gKiBHYW1lXG4gKi9cbmltcG9ydCB7QXBwbGljYXRpb259IGZyb20gJy4uL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7SUdhbWVDb25maWd9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtBc3NldE1hbmFnZXIsIFRyYW5zaXRpb25NYW5hZ2VyLCBTZXF1ZW5jZU1hbmFnZXIsIFN0b3JhZ2VNYW5hZ2VyLCBBdWRpb01hbmFnZXIsIEFuYWx5dGljc01hbmFnZXIsIEdhbWVPYmplY3RGYWN0b3J5fSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7R3JvdXB9IGZyb20gJy4uL2Rpc3BsYXknO1xuaW1wb3J0IHtOb3RpZmljYXRpb25zfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBHYW1lIGV4dGVuZHMgUGhhc2VyLkdhbWUge1xuICAgIC8vIHB1YmxpYyB2YXJpYWJsZXNcbiAgICAvLyBhcHBsaWNhdGlvblxuICAgIHB1YmxpYyBhcHA6IEFwcGxpY2F0aW9uO1xuICAgIHB1YmxpYyBjb25maWc6IElHYW1lQ29uZmlnO1xuXG4gICAgLy8gbWFuYWdlcnNcbiAgICBwdWJsaWMgYXNzZXQ6IEFzc2V0TWFuYWdlcjtcbiAgICBwdWJsaWMgc2VxdWVuY2U6IFNlcXVlbmNlTWFuYWdlcjtcbiAgICBwdWJsaWMgdHJhbnNpdGlvbjogVHJhbnNpdGlvbk1hbmFnZXI7XG4gICAgcHVibGljIHN0b3JhZ2U6IFN0b3JhZ2VNYW5hZ2VyO1xuICAgIHB1YmxpYyBhdWRpbzogQXVkaW9NYW5hZ2VyO1xuICAgIHB1YmxpYyBhbmFseXRpY3M6IEFuYWx5dGljc01hbmFnZXI7XG4gICAgcHVibGljIGFkZDogR2FtZU9iamVjdEZhY3Rvcnk7XG5cbiAgICAvLyBzaWduYWxzXG4gICAgcHVibGljIG9uV29ybGRJbnB1dERpc2FibGVkOiBQaGFzZXIuU2lnbmFsID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICBwdWJsaWMgb25Xb3JsZElucHV0RW5hYmxlZDogUGhhc2VyLlNpZ25hbCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG5cbiAgICAvLyBkaXNwbGF5IGxheWVyc1xuICAgIHB1YmxpYyBiYWNrZ3JvdW5kTGF5ZXI6IEdyb3VwO1xuICAgIHB1YmxpYyBnYW1lTGF5ZXI6IEdyb3VwO1xuICAgIHB1YmxpYyB1aUxheWVyOiBHcm91cDtcbiAgICBwdWJsaWMgc3RhZ2VMYXllcjogR3JvdXA7XG5cbiAgICAvLyBQaGFzZXIuR2FtZSBvdmVycmlkZXNcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IElHYW1lQ29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgfVxuXG4gICAgcHVibGljIGJvb3QoKSB7XG4gICAgICAgIHN1cGVyLmJvb3QoKTtcblxuICAgICAgICB0aGlzLmFwcCA9IEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCk7XG5cbiAgICAgICAgLy8gYWRkIG1hbmFnZXJzXG4gICAgICAgIHRoaXMuYXNzZXQgPSBuZXcgQXNzZXRNYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMuc2VxdWVuY2UgPSBuZXcgU2VxdWVuY2VNYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IG5ldyBUcmFuc2l0aW9uTWFuYWdlcigpO1xuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgU3RvcmFnZU1hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5hdWRpbyA9IG5ldyBBdWRpb01hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5hbmFseXRpY3MgPSBuZXcgQW5hbHl0aWNzTWFuYWdlcih0aGlzLmNvbmZpZy5hbmFseXRpY3MpO1xuXG4gICAgICAgIC8vIHJlcGxhY2UgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5XG4gICAgICAgIHRoaXMuYWRkID0gbnVsbDtcbiAgICAgICAgdGhpcy5hZGQgPSBuZXcgR2FtZU9iamVjdEZhY3RvcnkodGhpcyk7XG4gICAgICAgIHRoaXMuYWRkTGF5ZXJzKCk7XG4gICAgICAgIHRoaXMuYWRkTW91c2VDYWxsYmFja3MoKTtcbiAgICAgICAgdGhpcy5zZXRGYWN0b3J5RGVmYXVsdExheWVyKHRoaXMuZ2FtZUxheWVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkUGx1Z2lucygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnBsdWdpbnMgJiYgdGhpcy5jb25maWcucGx1Z2lucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5wbHVnaW5zLmZvckVhY2gocGx1Z2luTmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBQaGFzZXIuUGx1Z2luW3BsdWdpbk5hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkLnBsdWdpbihQaGFzZXIuUGx1Z2luW3BsdWdpbk5hbWVdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE92ZXJyaWRlIHRoaXMud29ybGQgYXMgdGhlIGRlZmF1bHQgbGF5ZXIgdGhhdFxuICAgIC8vIC5hZGQgY2FsbHMgd2lsbCBiZSBjcmVhdGVkIG9uLlxuICAgIHB1YmxpYyBzZXRGYWN0b3J5RGVmYXVsdExheWVyKG5ld0xheWVyOiBQaGFzZXIuR3JvdXApIHtcbiAgICAgICAgdGhpcy5hZGQuc2V0RGVmYXVsdExheWVyKG5ld0xheWVyIHx8IHRoaXMud29ybGQpO1xuICAgIH1cbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICBwcm90ZWN0ZWQgYWRkTGF5ZXJzKCk6IHZvaWQge1xuICAgICAgICAvLyBhZGRzIHBlcnNpc3RlbnQgYmFja2dyb3VuZCBsYXllclxuICAgICAgICB0aGlzLmJhY2tncm91bmRMYXllciA9IHRoaXMuYWRkLmRHcm91cCgwLCAwLCAnX2JhY2tncm91bmRfbGF5ZXInLCB0cnVlKTtcbiAgICAgICAgdGhpcy5zdGFnZS5zZXRDaGlsZEluZGV4KHRoaXMuYmFja2dyb3VuZExheWVyLCAwKTtcblxuICAgICAgICAvLyBhZGRzIGdhbWUgYW5kIHVpIGxheWVyc1xuICAgICAgICB0aGlzLmdhbWVMYXllciA9IHRoaXMuYWRkLmRHcm91cCgwLCAwLCAnX2dhbWVfbGF5ZXInKTtcbiAgICAgICAgLy8gYWRkIHVpIGxheWVyIGFuZCBzZXQgdGhlIFwiZml4ZWRUb0NhbWVyYVwiIHByb3BlcnR5IHRvIHRydWVcbiAgICAgICAgLy8gaWYgdGhlIGdhbWUncyBjYW1lcmEgbW92ZXMsIGFueXRoaW5nIGluIHRoaXMgZ3JvdXAgd2lsbCBzdGF5IGluIHBsYWNlXG4gICAgICAgIHRoaXMudWlMYXllciA9IHRoaXMuYWRkLmRHcm91cCgwLCAwLCAnX3VpX2xheWVyJyk7XG4gICAgICAgIHRoaXMudWlMYXllci5maXhlZFRvQ2FtZXJhID0gdHJ1ZTtcblxuICAgICAgICAvLyBhZGQgYSBncm91cCB0byB0aGUgUGhhc2VyLlN0YWdlIChqdXN0IGluIGNhc2UpXG4gICAgICAgIHRoaXMuc3RhZ2VMYXllciA9IHRoaXMuYWRkLmRHcm91cCgwLCAwLCAnX3N0YWdlX2xheWVyJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZE1vdXNlQ2FsbGJhY2tzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5kZXZpY2UuZGVza3RvcCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5tb3VzZS5tb3VzZU92ZXJDYWxsYmFjayA9IHRoaXMubW91c2VPdmVyO1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5tb3VzZS5tb3VzZU91dENhbGxiYWNrID0gdGhpcy5tb3VzZU91dDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBtb3VzZU91dCgpOiB2b2lkIHtcbiAgICAgICAgQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5zZW5kTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbnMuTU9VU0VfTEVBVkVfR0xPQkFMKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbW91c2VPdmVyKCk6IHZvaWQge1xuICAgICAgICBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLnNlbmROb3RpZmljYXRpb24oTm90aWZpY2F0aW9ucy5NT1VTRV9FTlRFUl9HTE9CQUwpO1xuICAgIH1cblxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgcHVibGljIGRpc2FibGVFbGVtZW50SW5wdXQoZWw6IGFueSk6IGFueSB7XG4gICAgICAgIGlmIChlbC5pbnB1dCAmJiBlbC5pbnB1dEVuYWJsZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGVsLndhc0VuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgZWwuaW5wdXRFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWwuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVFbGVtZW50SW5wdXQoZWwuY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGVuYWJsZUVsZW1lbnRJbnB1dChlbDogYW55KTogYW55IHtcbiAgICAgICAgaWYgKGVsLmlucHV0ICYmIGVsLmlucHV0RW5hYmxlZCA9PT0gZmFsc2UgJiYgZWwud2FzRW5hYmxlZCkge1xuICAgICAgICAgICAgZWwud2FzRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZWwuaW5wdXRFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWwuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlRWxlbWVudElucHV0KGVsLmNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkaXNhYmxlSW5wdXQoZ3JvdXA6IFBoYXNlci5Hcm91cCk6IGFueSB7XG4gICAgICAgIHJldHVybiBncm91cC5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgaWYgKGVsIGluc3RhbmNlb2YgUGhhc2VyLkdyb3VwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZUlucHV0KGVsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZUVsZW1lbnRJbnB1dChlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBlbmFibGVJbnB1dChncm91cDogUGhhc2VyLkdyb3VwKTogYW55IHtcbiAgICAgICAgcmV0dXJuIGdyb3VwLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICBpZiAoZWwgaW5zdGFuY2VvZiBQaGFzZXIuR3JvdXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbmFibGVJbnB1dChlbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVuYWJsZUVsZW1lbnRJbnB1dChlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXNhYmxlR2FtZUlucHV0KCkge1xuICAgICAgICB0aGlzLmRpc2FibGVJbnB1dCh0aGlzLmdhbWVMYXllcik7XG4gICAgICAgIHRoaXMub25Xb3JsZElucHV0RGlzYWJsZWQuZGlzcGF0Y2goKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZW5hYmxlR2FtZUlucHV0KCkge1xuICAgICAgICB0aGlzLmVuYWJsZUlucHV0KHRoaXMuZ2FtZUxheWVyKTtcbiAgICAgICAgdGhpcy5vbldvcmxkSW5wdXRFbmFibGVkLmRpc3BhdGNoKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmVtb3ZlcyBhbGwgaXRlbXMgZnJvbSB0aGUgZ2FtZSBsYXllclxuICAgICAqIGJ1dCBhbGxvd3MgdGhlIHVpIGxheWVyIHRvIHBlcnNpc3RcbiAgICAgKiB0aGF0IHdheSB3ZSBjYW4gb3ZlcmxheSB0aGUgZ2FtZSB3aXRob3V0IGFkZGluZyBzdHVmZiB0byB0aGUgcGhhc2VyIHN0YWdlIChmb3IgdHJhbnNpdGlvbnMpXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHRvU3RhdGUgdGhlIG5ldyBzdGF0ZSB3ZSdyZSBjaGFuZ2luZyB0b1xuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgcHVibGljIGNoYW5nZVN0YXRlKHRvU3RhdGU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmdhbWVMYXllci5yZW1vdmVBbGwodHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnN0YXJ0KHRvU3RhdGUsIGZhbHNlLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLy8gZ2V0dGVyIC8gc2V0dGVyXG4gICAgLyoqXG4gICAgICogc2V0cyB0aGUgdGFyZ2V0IGdyb3VwIGZvciB0aGUgZ2FtZU9iamVjdEZhY3RvcnkgdG8gZ2FtZUxheWVyIGJlZm9yZSBhZGRpbmdcbiAgICAgKiB0aGlzIHdheSBpZiB3ZSBwYXNzIGEgbnVsbCBncm91cCB0byB3aGF0ZXZlciBtZXRob2Qgd2UgY2FsbFxuICAgICAqIGllICh0aGlzLmdhbWUuYWRkVG9HYW1lLmltYWdlKDAsIDAsIGtleSwgZnJhbWUpKTtcbiAgICAgKiBpdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBhcHByb3ByaWF0ZSBsYXllclxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgYWRkVG9HYW1lKCk6IEdhbWVPYmplY3RGYWN0b3J5IHtcbiAgICAgICAgdGhpcy5hZGQudGFyZ2V0R3JvdXAgPSB0aGlzLmdhbWVMYXllcjtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHNldHMgdGhlIHRhcmdldCBncm91cCBmb3IgdGhlIGdhbWVPYmplY3RGYWN0b3J5IHRvIHVpTGF5ZXIgYmVmb3JlIGFkZGluZ1xuICAgICAqIHRoaXMgd2F5IGlmIHdlIHBhc3MgYSBudWxsIGdyb3VwIHRvIHdoYXRldmVyIG1ldGhvZCB3ZSBjYWxsXG4gICAgICogaWUgKHRoaXMuZ2FtZS5hZGRUb1VJLmltYWdlKDAsIDAsIGtleSwgZnJhbWUpKTtcbiAgICAgKiBpdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBhcHByb3ByaWF0ZSBsYXllclxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgYWRkVG9CYWNrZ3JvdW5kKCk6IEdhbWVPYmplY3RGYWN0b3J5IHtcbiAgICAgICAgdGhpcy5hZGQudGFyZ2V0R3JvdXAgPSB0aGlzLmJhY2tncm91bmRMYXllcjtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkO1xuICAgIH1cblxuXG4gICAgcHVibGljIGdldCBhZGRUb1VJKCk6IEdhbWVPYmplY3RGYWN0b3J5IHtcbiAgICAgICAgLy8gc2V0IHRoZSB0YXJnZXQgZ3JvdXAgZm9yIHRoZSBnYW1lT2JqZWN0RmFjdG9yeSBiZWZvcmUgYWRkaW5nXG4gICAgICAgIHRoaXMuYWRkLnRhcmdldEdyb3VwID0gdGhpcy51aUxheWVyO1xuICAgICAgICByZXR1cm4gdGhpcy5hZGQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhZGRUb1N0YWdlKCk6IEdhbWVPYmplY3RGYWN0b3J5IHtcbiAgICAgICAgLy8gc2V0IHRoZSB0YXJnZXQgZ3JvdXAgZm9yIHRoZSBnYW1lT2JqZWN0RmFjdG9yeSBiZWZvcmUgYWRkaW5nXG4gICAgICAgIHRoaXMuYWRkLnRhcmdldEdyb3VwID0gdGhpcy5zdGFnZUxheWVyO1xuICAgICAgICByZXR1cm4gdGhpcy5hZGQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhZGRUb1dvcmxkKCk6IEdhbWVPYmplY3RGYWN0b3J5IHtcbiAgICAgICAgLy8gc2V0IHRoZSB0YXJnZXQgZ3JvdXAgZm9yIHRoZSBnYW1lT2JqZWN0RmFjdG9yeSBiZWZvcmUgYWRkaW5nXG4gICAgICAgIHRoaXMuYWRkLnRhcmdldEdyb3VwID0gdGhpcy53b3JsZDtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkO1xuICAgIH1cbn0iLCIvKipcbiAqIEdhbWVPYmplY3RGYWN0b3J5XG4gKi9cblxuaW1wb3J0IHtUZXh0LCBHcm91cCwgU3BpbmUsIFNwcml0ZSwgQ29tcG9uZW50LCBCaXRtYXBUZXh0fSBmcm9tICcuLi9kaXNwbGF5Jztcbi8qKlxuICogR2FtZU9iamVjdEZhY3RvcnlcbiAqL1xuXG5leHBvcnQgY2xhc3MgR2FtZU9iamVjdEZhY3RvcnkgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdEZhY3Rvcnkge1xuICAgIC8vIFRoZSBsYXllciB0aGUgY3VycmVudCBvYmplY3Qgd2lsbCBiZSBhZGRlZCB0by4gVGhpcyBpcyB1c2VkIGJ5IGhlbHBlciBmdW5jdGlvbnMgaW4gR2FtZS50cy5cbiAgICBwcm90ZWN0ZWQgX3RhcmdldEdyb3VwOiBQaGFzZXIuR3JvdXAgPSBudWxsO1xuXG4gICAgLy8gVGhpcyBpcyB0aGUgbGF5ZXIgdGhhdCBzdGFuZGFyZCAuYWRkIGNhbGxzIHdpbGwgYmUgYXBwbGllZCB0by5cbiAgICBwcm90ZWN0ZWQgX2RlZmF1bHRMYXllcjogUGhhc2VyLkdyb3VwID0gdGhpcy53b3JsZDtcblxuICAgIC8vIG92ZXJyaWRlc1xuICAgIC8qKlxuICAgICogQWRkcyBhbiBleGlzdGluZyBkaXNwbGF5IG9iamVjdCB0byB0aGUgZ2FtZSB3b3JsZC5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSNleGlzdGluZ1xuICAgICogQHBhcmFtIHthbnl9IG9iamVjdCAtIEFuIGluc3RhbmNlIG9mIFBoYXNlci5TcHJpdGUsIFBoYXNlci5CdXR0b24gb3IgYW55IG90aGVyIGRpc3BsYXkgb2JqZWN0LlxuICAgICogQHJldHVybiB7YW55fSBUaGUgY2hpbGQgdGhhdCB3YXMgYWRkZWQgdG8gdGhlIFdvcmxkLlxuICAgICovXG4gICAgcHVibGljIGV4aXN0aW5nKG9iamVjdCk6IGFueSB7XG4gICAgICAgIGxldCBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7XG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkKG9iamVjdCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogQ3JlYXRlIGEgbmV3IGBJbWFnZWAgb2JqZWN0LlxuICAgICpcbiAgICAqIEFuIEltYWdlIGlzIGEgbGlnaHQtd2VpZ2h0IG9iamVjdCB5b3UgY2FuIHVzZSB0byBkaXNwbGF5IGFueXRoaW5nIHRoYXQgZG9lc24ndCBuZWVkIHBoeXNpY3Mgb3IgYW5pbWF0aW9uLlxuICAgICpcbiAgICAqIEl0IGNhbiBzdGlsbCByb3RhdGUsIHNjYWxlLCBjcm9wIGFuZCByZWNlaXZlIGlucHV0IGV2ZW50cy5cbiAgICAqIFRoaXMgbWFrZXMgaXQgcGVyZmVjdCBmb3IgbG9nb3MsIGJhY2tncm91bmRzLCBzaW1wbGUgYnV0dG9ucyBhbmQgb3RoZXIgbm9uLVNwcml0ZSBncmFwaGljcy5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSNpbWFnZVxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt4PTBdIC0gVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgSW1hZ2UuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgSW1hZ2UgbWF5IGJlIGluLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt5PTBdIC0gVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgSW1hZ2UuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgSW1hZ2UgbWF5IGJlIGluLlxuICAgICogQHBhcmFtIHtzdHJpbmd8UGhhc2VyLlJlbmRlclRleHR1cmV8UGhhc2VyLkJpdG1hcERhdGF8UGhhc2VyLlZpZGVvfFBJWEkuVGV4dHVyZX0gW2tleV0gLSBUaGUgaW1hZ2UgdXNlZCBhcyBhIHRleHR1cmUgYnkgdGhpcyBkaXNwbGF5IG9iamVjdCBkdXJpbmcgcmVuZGVyaW5nLiBJZiBhIHN0cmluZyBQaGFzZXIgd2lsbCBnZXQgZm9yIGFuIGVudHJ5IGluIHRoZSBJbWFnZSBDYWNoZS4gT3IgaXQgY2FuIGJlIGFuIGluc3RhbmNlIG9mIGEgUmVuZGVyVGV4dHVyZSwgQml0bWFwRGF0YSwgVmlkZW8gb3IgUElYSS5UZXh0dXJlLlxuICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbZnJhbWVdIC0gSWYgYSBUZXh0dXJlIEF0bGFzIG9yIFNwcml0ZSBTaGVldCBpcyB1c2VkIHRoaXMgYWxsb3dzIHlvdSB0byBzcGVjaWZ5IHRoZSBmcmFtZSB0byBiZSB1c2VkLiBVc2UgZWl0aGVyIGFuIGludGVnZXIgZm9yIGEgRnJhbWUgSUQgb3IgYSBzdHJpbmcgZm9yIGEgZnJhbWUgbmFtZS5cbiAgICAqIEBwYXJhbSB7UGhhc2VyLkdyb3VwfSBbZ3JvdXBdIC0gT3B0aW9uYWwgR3JvdXAgdG8gYWRkIHRoZSBvYmplY3QgdG8uIElmIG5vdCBzcGVjaWZpZWQgaXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgV29ybGQgZ3JvdXAuXG4gICAgKiBAcmV0dXJucyB7UGhhc2VyLkltYWdlfSBUaGUgbmV3bHkgY3JlYXRlZCBJbWFnZSBvYmplY3QuXG4gICAgKi9cbiAgICBwdWJsaWMgaW1hZ2UoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwga2V5Pzogc3RyaW5nIHwgUGhhc2VyLlJlbmRlclRleHR1cmUgfCBQaGFzZXIuQml0bWFwRGF0YSB8IFBJWEkuVGV4dHVyZSwgZnJhbWU/OiBzdHJpbmcgfCBudW1iZXIsIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogUGhhc2VyLkltYWdlIHtcbiAgICAgICAgaWYgKGdyb3VwID09PSB1bmRlZmluZWQpIHsgZ3JvdXAgPSB0aGlzLnRhcmdldEdyb3VwOyB9XG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBQaGFzZXIuSW1hZ2UodGhpcy5nYW1lLCB4LCB5LCBrZXksIGZyYW1lKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgU3ByaXRlIHdpdGggc3BlY2lmaWMgcG9zaXRpb24gYW5kIHNwcml0ZSBzaGVldCBrZXkuXG4gICAgKlxuICAgICogQXQgaXRzIG1vc3QgYmFzaWMgYSBTcHJpdGUgY29uc2lzdHMgb2YgYSBzZXQgb2YgY29vcmRpbmF0ZXMgYW5kIGEgdGV4dHVyZSB0aGF0IGlzIHVzZWQgd2hlbiByZW5kZXJlZC5cbiAgICAqIFRoZXkgYWxzbyBjb250YWluIGFkZGl0aW9uYWwgcHJvcGVydGllcyBhbGxvd2luZyBmb3IgcGh5c2ljcyBtb3Rpb24gKHZpYSBTcHJpdGUuYm9keSksIGlucHV0IGhhbmRsaW5nICh2aWEgU3ByaXRlLmlucHV0KSxcbiAgICAqIGV2ZW50cyAodmlhIFNwcml0ZS5ldmVudHMpLCBhbmltYXRpb24gKHZpYSBTcHJpdGUuYW5pbWF0aW9ucyksIGNhbWVyYSBjdWxsaW5nIGFuZCBtb3JlLiBQbGVhc2Ugc2VlIHRoZSBFeGFtcGxlcyBmb3IgdXNlIGNhc2VzLlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5I3Nwcml0ZVxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt4PTBdIC0gVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgc3ByaXRlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIHNwcml0ZSBtYXkgYmUgaW4uXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3k9MF0gLSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBzcHJpdGUuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgc3ByaXRlIG1heSBiZSBpbi5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfFBoYXNlci5SZW5kZXJUZXh0dXJlfFBoYXNlci5CaXRtYXBEYXRhfFBoYXNlci5WaWRlb3xQSVhJLlRleHR1cmV9IFtrZXldIC0gVGhlIGltYWdlIHVzZWQgYXMgYSB0ZXh0dXJlIGJ5IHRoaXMgZGlzcGxheSBvYmplY3QgZHVyaW5nIHJlbmRlcmluZy4gSWYgYSBzdHJpbmcgUGhhc2VyIHdpbGwgZ2V0IGZvciBhbiBlbnRyeSBpbiB0aGUgSW1hZ2UgQ2FjaGUuIE9yIGl0IGNhbiBiZSBhbiBpbnN0YW5jZSBvZiBhIFJlbmRlclRleHR1cmUsIEJpdG1hcERhdGEsIFZpZGVvIG9yIFBJWEkuVGV4dHVyZS5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW2ZyYW1lXSAtIElmIGEgVGV4dHVyZSBBdGxhcyBvciBTcHJpdGUgU2hlZXQgaXMgdXNlZCB0aGlzIGFsbG93cyB5b3UgdG8gc3BlY2lmeSB0aGUgZnJhbWUgdG8gYmUgdXNlZC4gVXNlIGVpdGhlciBhbiBpbnRlZ2VyIGZvciBhIEZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXG4gICAgKiBAcGFyYW0ge1BoYXNlci5Hcm91cH0gW2dyb3VwXSAtIE9wdGlvbmFsIEdyb3VwIHRvIGFkZCB0aGUgb2JqZWN0IHRvLiBJZiBub3Qgc3BlY2lmaWVkIGl0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIFdvcmxkIGdyb3VwLlxuICAgICogQHJldHVybnMge1BoYXNlci5TcHJpdGV9IFRoZSBuZXdseSBjcmVhdGVkIFNwcml0ZSBvYmplY3QuXG4gICAgKi9cbiAgICBwdWJsaWMgc3ByaXRlKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIGtleT86IHN0cmluZyB8IFBJWEkuVGV4dHVyZSwgZnJhbWU/OiBzdHJpbmcgfCBudW1iZXIsIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogUGhhc2VyLlNwcml0ZSB7XG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy50YXJnZXRHcm91cDsgfVxuICAgICAgICB0aGlzLnRhcmdldEdyb3VwID0gbnVsbDtcblxuICAgICAgICByZXR1cm4gZ3JvdXAuY3JlYXRlKHgsIHksIGtleSwgZnJhbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQ3JlYXRlIGEgbmV3IENyZWF0dXJlIEFuaW1hdGlvbiBvYmplY3QuXG4gICAgKlxuICAgICogQ3JlYXR1cmUgaXMgYSBjdXN0b20gR2FtZSBPYmplY3QgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBDcmVhdHVyZSBSdW50aW1lIGxpYnJhcmllcyBieSBLZXN0cmVsIE1vb24gU3R1ZGlvcy5cbiAgICAqXG4gICAgKiBJdCBhbGxvd3MgeW91IHRvIGRpc3BsYXkgYW5pbWF0ZWQgR2FtZSBPYmplY3RzIHRoYXQgd2VyZSBjcmVhdGVkIHdpdGggdGhlIFtDcmVhdHVyZSBBdXRvbWF0ZWQgQW5pbWF0aW9uIFRvb2xdKGh0dHA6Ly93d3cua2VzdHJlbG1vb24uY29tL2NyZWF0dXJlLykuXG4gICAgKlxuICAgICogTm90ZSAxOiBZb3UgY2FuIG9ubHkgdXNlIFBoYXNlci5DcmVhdHVyZSBvYmplY3RzIGluIFdlYkdMIGVuYWJsZWQgZ2FtZXMuIFRoZXkgZG8gbm90IHdvcmsgaW4gQ2FudmFzIG1vZGUgZ2FtZXMuXG4gICAgKlxuICAgICogTm90ZSAyOiBZb3UgbXVzdCB1c2UgYSBidWlsZCBvZiBQaGFzZXIgdGhhdCBpbmNsdWRlcyB0aGUgQ3JlYXR1cmVNZXNoQm9uZS5qcyBydW50aW1lIGFuZCBnbC1tYXRyaXguanMsIG9yIGhhdmUgdGhlbVxuICAgICogbG9hZGVkIGJlZm9yZSB5b3VyIFBoYXNlciBnYW1lIGJvb3RzLlxuICAgICpcbiAgICAqIFNlZSB0aGUgUGhhc2VyIGN1c3RvbSBidWlsZCBwcm9jZXNzIGZvciBtb3JlIGRldGFpbHMuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkjY3JlYXR1cmVcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeD0wXSAtIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIGNyZWF0dXJlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIGNyZWF0dXJlIG1heSBiZSBpbi5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeT0wXSAtIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIGNyZWF0dXJlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIGNyZWF0dXJlIG1heSBiZSBpbi5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfFBJWEkuVGV4dHVyZX0gW2tleV0gLSBUaGUgaW1hZ2UgdXNlZCBhcyBhIHRleHR1cmUgYnkgdGhpcyBjcmVhdHVyZSBvYmplY3QgZHVyaW5nIHJlbmRlcmluZy4gSWYgYSBzdHJpbmcgUGhhc2VyIHdpbGwgZ2V0IGZvciBhbiBlbnRyeSBpbiB0aGUgSW1hZ2UgQ2FjaGUuIE9yIGl0IGNhbiBiZSBhbiBpbnN0YW5jZSBvZiBhIFBJWEkuVGV4dHVyZS5cbiAgICAqIEBwYXJhbSB7UGhhc2VyLkdyb3VwfSBbZ3JvdXBdIC0gT3B0aW9uYWwgR3JvdXAgdG8gYWRkIHRoZSBvYmplY3QgdG8uIElmIG5vdCBzcGVjaWZpZWQgaXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgRGVmYXVsdCBMYXllciBncm91cC5cbiAgICAqIEByZXR1cm5zIHtQaGFzZXIuQ3JlYXR1cmV9IFRoZSBuZXdseSBjcmVhdGVkIFNwcml0ZSBvYmplY3QuXG4gICAgKi9cbiAgICBwdWJsaWMgY3JlYXR1cmUoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwga2V5Pzogc3RyaW5nLCBtZXNoPzogYW55LCBncm91cD86IFBoYXNlci5Hcm91cCk6IGFueSB7XG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy50YXJnZXRHcm91cDsgfVxuICAgICAgICB0aGlzLnRhcmdldEdyb3VwID0gbnVsbDtcblxuICAgICAgICB2YXIgb2JqID0gbmV3IFBoYXNlclsnQ3JlYXR1cmUnXSh0aGlzLmdhbWUsIHgsIHksIGtleSwgbWVzaCk7XG5cbiAgICAgICAgZ3JvdXAuYWRkKG9iaik7XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEEgR3JvdXAgaXMgYSBjb250YWluZXIgZm9yIGRpc3BsYXkgb2JqZWN0cyB0aGF0IGFsbG93cyBmb3IgZmFzdCBwb29saW5nLCByZWN5Y2xpbmcgYW5kIGNvbGxpc2lvbiBjaGVja3MuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkjZ3JvdXBcbiAgICAqIEBwYXJhbSB7YW55fSBbcGFyZW50XSAtIFRoZSBwYXJlbnQgR3JvdXAgb3IgRGlzcGxheU9iamVjdENvbnRhaW5lciB0aGF0IHdpbGwgaG9sZCB0aGlzIGdyb3VwLCBpZiBhbnkuIElmIHNldCB0byBudWxsIHRoZSBHcm91cCB3b24ndCBiZSBhZGRlZCB0byB0aGUgZGlzcGxheSBsaXN0LiBJZiB1bmRlZmluZWQgaXQgd2lsbCBiZSBhZGRlZCB0byBXb3JsZCBieSBkZWZhdWx0LlxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lPSdncm91cCddIC0gQSBuYW1lIGZvciB0aGlzIEdyb3VwLiBOb3QgdXNlZCBpbnRlcm5hbGx5IGJ1dCB1c2VmdWwgZm9yIGRlYnVnZ2luZy5cbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2FkZFRvU3RhZ2U9ZmFsc2VdIC0gSWYgc2V0IHRvIHRydWUgdGhpcyBHcm91cCB3aWxsIGJlIGFkZGVkIGRpcmVjdGx5IHRvIHRoZSBHYW1lLlN0YWdlIGluc3RlYWQgb2YgR2FtZS5Xb3JsZC5cbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2VuYWJsZUJvZHk9ZmFsc2VdIC0gSWYgdHJ1ZSBhbGwgU3ByaXRlcyBjcmVhdGVkIHdpdGggYEdyb3VwLmNyZWF0ZWAgb3IgYEdyb3VwLmNyZWF0ZU11bGl0cGxlYCB3aWxsIGhhdmUgYSBwaHlzaWNzIGJvZHkgY3JlYXRlZCBvbiB0aGVtLiBDaGFuZ2UgdGhlIGJvZHkgdHlwZSB3aXRoIHBoeXNpY3NCb2R5VHlwZS5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbcGh5c2ljc0JvZHlUeXBlPTBdIC0gSWYgZW5hYmxlQm9keSBpcyB0cnVlIHRoaXMgaXMgdGhlIHR5cGUgb2YgcGh5c2ljcyBib2R5IHRoYXQgaXMgY3JlYXRlZCBvbiBuZXcgU3ByaXRlcy4gUGhhc2VyLlBoeXNpY3MuQVJDQURFLCBQaGFzZXIuUGh5c2ljcy5QMiwgUGhhc2VyLlBoeXNpY3MuTklOSkEsIGV0Yy5cbiAgICAqIEByZXR1cm4ge1BoYXNlci5Hcm91cH0gVGhlIG5ld2x5IGNyZWF0ZWQgR3JvdXAuXG4gICAgKi9cbiAgICBwdWJsaWMgZ3JvdXAocGFyZW50PzogYW55LCBuYW1lOiBzdHJpbmcgPSAnZ3JvdXAnLCBhZGRUb1N0YWdlOiBib29sZWFuID0gZmFsc2UsIGVuYWJsZUJvZHk6IGJvb2xlYW4gPSBmYWxzZSwgcGh5c2ljc0JvZHlUeXBlOiBudW1iZXIgPSAwKSB7XG4gICAgICAgIGlmIChwYXJlbnQgPT09IHVuZGVmaW5lZCAmJiBhZGRUb1N0YWdlICE9PSB0cnVlKSB7IHBhcmVudCA9IHRoaXMudGFyZ2V0R3JvdXA7IH1cbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBuZXcgUGhhc2VyLkdyb3VwKHRoaXMuZ2FtZSwgcGFyZW50LCBuYW1lLCBhZGRUb1N0YWdlLCBlbmFibGVCb2R5LCBwaHlzaWNzQm9keVR5cGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQSBHcm91cCBpcyBhIGNvbnRhaW5lciBmb3IgZGlzcGxheSBvYmplY3RzIHRoYXQgYWxsb3dzIGZvciBmYXN0IHBvb2xpbmcsIHJlY3ljbGluZyBhbmQgY29sbGlzaW9uIGNoZWNrcy5cbiAgICAqXG4gICAgKiBBIFBoeXNpY3MgR3JvdXAgaXMgdGhlIHNhbWUgYXMgYW4gb3JkaW5hcnkgR3JvdXAgZXhjZXB0IHRoYXQgaXMgaGFzIGVuYWJsZUJvZHkgdHVybmVkIG9uIGJ5IGRlZmF1bHQsIHNvIGFueSBTcHJpdGVzIGl0IGNyZWF0ZXNcbiAgICAqIGFyZSBhdXRvbWF0aWNhbGx5IGdpdmVuIGEgcGh5c2ljcyBib2R5LlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5I3BoeXNpY3NHcm91cFxuICAgICogQHBhcmFtIHtudW1iZXJ9IFtwaHlzaWNzQm9keVR5cGU9UGhhc2VyLlBoeXNpY3MuQVJDQURFXSAtIElmIGVuYWJsZUJvZHkgaXMgdHJ1ZSB0aGlzIGlzIHRoZSB0eXBlIG9mIHBoeXNpY3MgYm9keSB0aGF0IGlzIGNyZWF0ZWQgb24gbmV3IFNwcml0ZXMuIFBoYXNlci5QaHlzaWNzLkFSQ0FERSwgUGhhc2VyLlBoeXNpY3MuUDIsIFBoYXNlci5QaHlzaWNzLk5JTkpBLCBldGMuXG4gICAgKiBAcGFyYW0ge2FueX0gW3BhcmVudF0gLSBUaGUgcGFyZW50IEdyb3VwIG9yIERpc3BsYXlPYmplY3RDb250YWluZXIgdGhhdCB3aWxsIGhvbGQgdGhpcyBncm91cCwgaWYgYW55LiBJZiBzZXQgdG8gbnVsbCB0aGUgR3JvdXAgd29uJ3QgYmUgYWRkZWQgdG8gdGhlIGRpc3BsYXkgbGlzdC4gSWYgdW5kZWZpbmVkIGl0IHdpbGwgYmUgYWRkZWQgdG8gV29ybGQgYnkgZGVmYXVsdC5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZT0nZ3JvdXAnXSAtIEEgbmFtZSBmb3IgdGhpcyBHcm91cC4gTm90IHVzZWQgaW50ZXJuYWxseSBidXQgdXNlZnVsIGZvciBkZWJ1Z2dpbmcuXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFthZGRUb1N0YWdlPWZhbHNlXSAtIElmIHNldCB0byB0cnVlIHRoaXMgR3JvdXAgd2lsbCBiZSBhZGRlZCBkaXJlY3RseSB0byB0aGUgR2FtZS5TdGFnZSBpbnN0ZWFkIG9mIEdhbWUuV29ybGQuXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuR3JvdXB9IFRoZSBuZXdseSBjcmVhdGVkIEdyb3VwLlxuICAgICovXG4gICAgcHVibGljIHBoeXNpY3NHcm91cChwaHlzaWNzQm9keVR5cGU6IG51bWJlciA9IDAsIHBhcmVudD86IGFueSwgbmFtZTogc3RyaW5nID0gJ2dyb3VwJywgYWRkVG9TdGFnZTogYm9vbGVhbiA9IGZhbHNlKTogUGhhc2VyLkdyb3VwIHtcbiAgICAgICAgaWYgKHBhcmVudCA9PT0gdW5kZWZpbmVkKSB7IHBhcmVudCA9IHRoaXMudGFyZ2V0R3JvdXA7IH1cbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBuZXcgUGhhc2VyLkdyb3VwKHRoaXMuZ2FtZSwgcGFyZW50LCBuYW1lLCBhZGRUb1N0YWdlLCB0cnVlLCBwaHlzaWNzQm9keVR5cGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQSBTcHJpdGVCYXRjaCBpcyBhIHJlYWxseSBmYXN0IHZlcnNpb24gb2YgYSBQaGFzZXIgR3JvdXAgYnVpbHQgc29sZWx5IGZvciBzcGVlZC5cbiAgICAqIFVzZSB3aGVuIHlvdSBuZWVkIGEgbG90IG9mIHNwcml0ZXMgb3IgcGFydGljbGVzIGFsbCBzaGFyaW5nIHRoZSBzYW1lIHRleHR1cmUuXG4gICAgKiBUaGUgc3BlZWQgZ2FpbnMgYXJlIHNwZWNpZmljYWxseSBmb3IgV2ViR0wuIEluIENhbnZhcyBtb2RlIHlvdSB3b24ndCBzZWUgYW55IHJlYWwgZGlmZmVyZW5jZS5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSNzcHJpdGVCYXRjaFxuICAgICogQHBhcmFtIHtQaGFzZXIuR3JvdXB8bnVsbH0gcGFyZW50IC0gVGhlIHBhcmVudCBHcm91cCB0aGF0IHdpbGwgaG9sZCB0aGlzIFNwcml0ZSBCYXRjaC4gU2V0IHRvIGB1bmRlZmluZWRgIG9yIGBudWxsYCB0byBhZGQgZGlyZWN0bHkgdG8gZ2FtZS53b3JsZC5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZT0nZ3JvdXAnXSAtIEEgbmFtZSBmb3IgdGhpcyBTcHJpdGUgQmF0Y2guIE5vdCB1c2VkIGludGVybmFsbHkgYnV0IHVzZWZ1bCBmb3IgZGVidWdnaW5nLlxuICAgICogQHBhcmFtIHtib29sZWFufSBbYWRkVG9TdGFnZT1mYWxzZV0gLSBJZiBzZXQgdG8gdHJ1ZSB0aGlzIFNwcml0ZSBCYXRjaCB3aWxsIGJlIGFkZGVkIGRpcmVjdGx5IHRvIHRoZSBHYW1lLlN0YWdlIGluc3RlYWQgb2YgdGhlIHBhcmVudC5cbiAgICAqIEByZXR1cm4ge1BoYXNlci5TcHJpdGVCYXRjaH0gVGhlIG5ld2x5IGNyZWF0ZWQgU3ByaXRlIEJhdGNoLlxuICAgICovXG4gICAgcHVibGljIHNwcml0ZUJhdGNoKHBhcmVudD86IGFueSwgbmFtZTogc3RyaW5nID0gXCJzcHJpdGVCYXRjaFwiLCBhZGRUb1N0YWdlOiBib29sZWFuID0gZmFsc2UpOiBQaGFzZXIuU3ByaXRlQmF0Y2gge1xuICAgICAgICBpZiAocGFyZW50ID09PSB1bmRlZmluZWQpIHsgcGFyZW50ID0gdGhpcy50YXJnZXRHcm91cCB9XG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4gbmV3IFBoYXNlci5TcHJpdGVCYXRjaCh0aGlzLmdhbWUsIHBhcmVudCwgbmFtZSwgYWRkVG9TdGFnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgVGlsZVNwcml0ZSBvYmplY3QuXG4gICAqXG4gICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5I3RpbGVTcHJpdGVcbiAgICogQHBhcmFtIHtudW1iZXJ9IHggLSBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBUaWxlU3ByaXRlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIFRpbGVTcHJpdGUgbWF5IGJlIGluLlxuICAgKiBAcGFyYW0ge251bWJlcn0geSAtIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIFRpbGVTcHJpdGUuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgVGlsZVNwcml0ZSBtYXkgYmUgaW4uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAtIFRoZSB3aWR0aCBvZiB0aGUgVGlsZVNwcml0ZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCAtIFRoZSBoZWlnaHQgb2YgdGhlIFRpbGVTcHJpdGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfFBoYXNlci5SZW5kZXJUZXh0dXJlfFBoYXNlci5CaXRtYXBEYXRhfFBoYXNlci5WaWRlb3xQSVhJLlRleHR1cmV9IGtleSAtIFRoZSBpbWFnZSB1c2VkIGFzIGEgdGV4dHVyZSBieSB0aGlzIGRpc3BsYXkgb2JqZWN0IGR1cmluZyByZW5kZXJpbmcuIElmIGEgc3RyaW5nIFBoYXNlciB3aWxsIGdldCBmb3IgYW4gZW50cnkgaW4gdGhlIEltYWdlIENhY2hlLiBPciBpdCBjYW4gYmUgYW4gaW5zdGFuY2Ugb2YgYSBSZW5kZXJUZXh0dXJlLCBCaXRtYXBEYXRhLCBWaWRlbyBvciBQSVhJLlRleHR1cmUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW2ZyYW1lXSAtIElmIGEgVGV4dHVyZSBBdGxhcyBvciBTcHJpdGUgU2hlZXQgaXMgdXNlZCB0aGlzIGFsbG93cyB5b3UgdG8gc3BlY2lmeSB0aGUgZnJhbWUgdG8gYmUgdXNlZC4gVXNlIGVpdGhlciBhbiBpbnRlZ2VyIGZvciBhIEZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXG4gICAqIEBwYXJhbSB7UGhhc2VyLkdyb3VwfSBbZ3JvdXBdIC0gT3B0aW9uYWwgR3JvdXAgdG8gYWRkIHRoZSBvYmplY3QgdG8uIElmIG5vdCBzcGVjaWZpZWQgaXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgRGVmYXVsdCBMYXllciBncm91cC5cbiAgICogQHJldHVybiB7UGhhc2VyLlRpbGVTcHJpdGV9IFRoZSBuZXdseSBjcmVhdGVkIFRpbGVTcHJpdGUgb2JqZWN0LlxuICAgKi9cbiAgICBwdWJsaWMgdGlsZVNwcml0ZSh4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCB3aWR0aDogbnVtYmVyID0gMCwgaGVpZ2h0OiBudW1iZXIgPSAwLCBrZXk/OiBzdHJpbmcsIGZyYW1lPzogc3RyaW5nIHwgbnVtYmVyLCBncm91cD86IFBoYXNlci5Hcm91cCk6IFBoYXNlci5UaWxlU3ByaXRlIHtcbiAgICAgICAgaWYgKGdyb3VwID09PSB1bmRlZmluZWQpIHsgZ3JvdXAgPSB0aGlzLnRhcmdldEdyb3VwOyB9XG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBQaGFzZXIuVGlsZVNwcml0ZSh0aGlzLmdhbWUsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGtleSwgZnJhbWUpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBSb3BlIG9iamVjdC5cbiAgICpcbiAgICogRXhhbXBsZSB1c2FnZTogaHR0cHM6Ly9naXRodWIuY29tL2NvZGV2aW5za3kvcGhhc2VyLXJvcGUtZGVtby9ibG9iL21hc3Rlci9kaXN0L2RlbW8uanNcbiAgICpcbiAgICogQG1ldGhvZCBQaGFzZXIuR2FtZU9iamVjdEZhY3Rvcnkjcm9wZVxuICAgKiBAcGFyYW0ge251bWJlcn0gW3g9MF0gLSBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBSb3BlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIHJvcGUgbWF5IGJlIGluLlxuICAgKiBAcGFyYW0ge251bWJlcn0gW3k9MF0gLSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBSb3BlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIHJvcGUgbWF5IGJlIGluLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xQaGFzZXIuUmVuZGVyVGV4dHVyZXxQaGFzZXIuQml0bWFwRGF0YXxQaGFzZXIuVmlkZW98UElYSS5UZXh0dXJlfSBba2V5XSAtIFRoZSBpbWFnZSB1c2VkIGFzIGEgdGV4dHVyZSBieSB0aGlzIGRpc3BsYXkgb2JqZWN0IGR1cmluZyByZW5kZXJpbmcuIElmIGEgc3RyaW5nIFBoYXNlciB3aWxsIGdldCBmb3IgYW4gZW50cnkgaW4gdGhlIEltYWdlIENhY2hlLiBPciBpdCBjYW4gYmUgYW4gaW5zdGFuY2Ugb2YgYSBSZW5kZXJUZXh0dXJlLCBCaXRtYXBEYXRhLCBWaWRlbyBvciBQSVhJLlRleHR1cmUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW2ZyYW1lXSAtIElmIGEgVGV4dHVyZSBBdGxhcyBvciBTcHJpdGUgU2hlZXQgaXMgdXNlZCB0aGlzIGFsbG93cyB5b3UgdG8gc3BlY2lmeSB0aGUgZnJhbWUgdG8gYmUgdXNlZC4gVXNlIGVpdGhlciBhbiBpbnRlZ2VyIGZvciBhIEZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXG4gICAqIEBwYXJhbSB7QXJyYXl9IHBvaW50cyAtIEFuIGFycmF5IG9mIHtQaGFzZXIuUG9pbnR9LlxuICAgKiBAcGFyYW0ge1BoYXNlci5Hcm91cH0gW2dyb3VwXSAtIE9wdGlvbmFsIEdyb3VwIHRvIGFkZCB0aGUgb2JqZWN0IHRvLiBJZiBub3Qgc3BlY2lmaWVkIGl0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIERlZmF1bHQgTGF5ZXIgZ3JvdXAuXG4gICAqIEByZXR1cm4ge1BoYXNlci5Sb3BlfSBUaGUgbmV3bHkgY3JlYXRlZCBSb3BlIG9iamVjdC5cbiAgICovXG4gICAgcHVibGljIHJvcGUoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwga2V5Pzogc3RyaW5nLCBmcmFtZT86IHN0cmluZyB8IG51bWJlciwgcG9pbnRzPzogUGhhc2VyLlBvaW50W10sIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogUGhhc2VyLlJvcGUge1xuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCkgeyBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7IH1cbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBncm91cC5hZGQobmV3IFBoYXNlci5Sb3BlKHRoaXMuZ2FtZSwgeCwgeSwga2V5LCBmcmFtZSwgcG9pbnRzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBDcmVhdGVzIGEgbmV3IFRleHQgb2JqZWN0LlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5I3RleHRcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeD0wXSAtIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIFRleHQuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgdGV4dCBtYXkgYmUgaW4uXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3k9MF0gLSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBUZXh0LiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIHRleHQgbWF5IGJlIGluLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IFt0ZXh0PScnXSAtIFRoZSB0ZXh0IHN0cmluZyB0aGF0IHdpbGwgYmUgZGlzcGxheWVkLlxuICAgICogQHBhcmFtIHtvYmplY3R9IFtzdHlsZV0gLSBUaGUgc3R5bGUgb2JqZWN0IGNvbnRhaW5pbmcgc3R5bGUgYXR0cmlidXRlcyBsaWtlIGZvbnQsIGZvbnQgc2l6ZSAsIGV0Yy5cbiAgICAqIEBwYXJhbSB7UGhhc2VyLkdyb3VwfSBbZ3JvdXBdIC0gT3B0aW9uYWwgR3JvdXAgdG8gYWRkIHRoZSBvYmplY3QgdG8uIElmIG5vdCBzcGVjaWZpZWQgaXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgRGVmYXVsdCBMYXllciBncm91cC5cbiAgICAqIEByZXR1cm4ge1BoYXNlci5UZXh0fSBUaGUgbmV3bHkgY3JlYXRlZCB0ZXh0IG9iamVjdC5cbiAgICAqL1xuICAgIHB1YmxpYyB0ZXh0KHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIHRleHQ6IHN0cmluZyA9ICcnLCBzdHlsZT86IFBoYXNlci5QaGFzZXJUZXh0U3R5bGUsIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogUGhhc2VyLlRleHQge1xuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCkgeyBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7IH1cbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBncm91cC5hZGQobmV3IFBoYXNlci5UZXh0KHRoaXMuZ2FtZSwgeCwgeSwgdGV4dCwgc3R5bGUpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIENyZWF0ZXMgYSBuZXcgQnV0dG9uIG9iamVjdC5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSNidXR0b25cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeD0wXSAtIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIEJ1dHRvbi4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyBidXR0b24gbWF5IGJlIGluLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt5PTBdIC0gVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgQnV0dG9uLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIGJ1dHRvbiBtYXkgYmUgaW4uXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2tleV0gLSBUaGUgaW1hZ2Uga2V5IGFzIGRlZmluZWQgaW4gdGhlIEdhbWUuQ2FjaGUgdG8gdXNlIGFzIHRoZSB0ZXh0dXJlIGZvciB0aGlzIGJ1dHRvbi5cbiAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYWxsYmFja10gLSBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoaXMgYnV0dG9uIGlzIHByZXNzZWRcbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBbY2FsbGJhY2tDb250ZXh0XSAtIFRoZSBjb250ZXh0IGluIHdoaWNoIHRoZSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCAodXN1YWxseSAndGhpcycpXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtvdmVyRnJhbWVdIC0gVGhpcyBpcyB0aGUgZnJhbWUgb3IgZnJhbWVOYW1lIHRoYXQgd2lsbCBiZSBzZXQgd2hlbiB0aGlzIGJ1dHRvbiBpcyBpbiBhbiBvdmVyIHN0YXRlLiBHaXZlIGVpdGhlciBhIG51bWJlciB0byB1c2UgYSBmcmFtZSBJRCBvciBhIHN0cmluZyBmb3IgYSBmcmFtZSBuYW1lLlxuICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbb3V0RnJhbWVdIC0gVGhpcyBpcyB0aGUgZnJhbWUgb3IgZnJhbWVOYW1lIHRoYXQgd2lsbCBiZSBzZXQgd2hlbiB0aGlzIGJ1dHRvbiBpcyBpbiBhbiBvdXQgc3RhdGUuIEdpdmUgZWl0aGVyIGEgbnVtYmVyIHRvIHVzZSBhIGZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtkb3duRnJhbWVdIC0gVGhpcyBpcyB0aGUgZnJhbWUgb3IgZnJhbWVOYW1lIHRoYXQgd2lsbCBiZSBzZXQgd2hlbiB0aGlzIGJ1dHRvbiBpcyBpbiBhIGRvd24gc3RhdGUuIEdpdmUgZWl0aGVyIGEgbnVtYmVyIHRvIHVzZSBhIGZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFt1cEZyYW1lXSAtIFRoaXMgaXMgdGhlIGZyYW1lIG9yIGZyYW1lTmFtZSB0aGF0IHdpbGwgYmUgc2V0IHdoZW4gdGhpcyBidXR0b24gaXMgaW4gYW4gdXAgc3RhdGUuIEdpdmUgZWl0aGVyIGEgbnVtYmVyIHRvIHVzZSBhIGZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXG4gICAgKiBAcGFyYW0ge1BoYXNlci5Hcm91cH0gW2dyb3VwXSAtIE9wdGlvbmFsIEdyb3VwIHRvIGFkZCB0aGUgb2JqZWN0IHRvLiBJZiBub3Qgc3BlY2lmaWVkIGl0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIERlZmF1bHQgTGF5ZXIgZ3JvdXAuXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuQnV0dG9ufSBUaGUgbmV3bHkgY3JlYXRlZCBCdXR0b24gb2JqZWN0LlxuICAgICovXG4gICAgcHVibGljIGJ1dHRvbih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCBrZXk/OiBzdHJpbmcsIGNhbGxiYWNrPzogRnVuY3Rpb24sIGNhbGxiYWNrQ29udGV4dD86IE9iamVjdCwgb3ZlckZyYW1lPzogc3RyaW5nIHwgbnVtYmVyLCBvdXRGcmFtZT86IHN0cmluZyB8IG51bWJlciwgZG93bkZyYW1lPzogc3RyaW5nIHwgbnVtYmVyLCB1cEZyYW1lPzogc3RyaW5nIHwgbnVtYmVyLCBncm91cD86IFBoYXNlci5Hcm91cCk6IFBoYXNlci5CdXR0b24ge1xuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCkgeyBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7IH1cbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBncm91cC5hZGQobmV3IFBoYXNlci5CdXR0b24odGhpcy5nYW1lLCB4LCB5LCBrZXksIGNhbGxiYWNrLCBjYWxsYmFja0NvbnRleHQsIG92ZXJGcmFtZSwgb3V0RnJhbWUsIGRvd25GcmFtZSwgdXBGcmFtZSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQ3JlYXRlcyBhIG5ldyBHcmFwaGljcyBvYmplY3QuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkjZ3JhcGhpY3NcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeD0wXSAtIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIEdyYXBoaWMuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgb2JqZWN0IG1heSBiZSBpbi5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeT0wXSAtIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIEdyYXBoaWMuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgb2JqZWN0IG1heSBiZSBpbi5cbiAgICAqIEBwYXJhbSB7UGhhc2VyLkdyb3VwfSBbZ3JvdXBdIC0gT3B0aW9uYWwgR3JvdXAgdG8gYWRkIHRoZSBvYmplY3QgdG8uIElmIG5vdCBzcGVjaWZpZWQgaXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgV29ybGQgZ3JvdXAuXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuR3JhcGhpY3N9IFRoZSBuZXdseSBjcmVhdGVkIGdyYXBoaWNzIG9iamVjdC5cbiAgICAqL1xuICAgIHB1YmxpYyBncmFwaGljcyh4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCBncm91cD86IFBoYXNlci5Hcm91cCk6IFBoYXNlci5HcmFwaGljcyB7XG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy53b3JsZDsgfVxuICAgICAgICAvKioqXG4gICAgICAgICAqIENvbW1lbnRlZCB0aGlzIG91dCAtIHNpbmNlIGdyYXBoaWNzIGFyZSBieSBkZWZhdWx0IGFkZGVkIGRpcmVjdGx5IG9uIHRoZSBnYW1lLndvcmxkLCB3ZSBzaG91bGRuJ3QgcmVzZXQgdGhpcy50YXJnZXRHcm91cFxuICAgICAgICAgKiBJdCBjb3VsZCBjYXVzZSBtYWpvciBwcm9ibGVtcyBpZiB1c2luZyBkaWpvbi91dGlscyBUZXh0dXJlcyBpbnN0YW5jZXMgYXMgYW4gaW1hZ2UgdGV4dHVyZSwgZm9yIGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICAvL3RoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBQaGFzZXIuR3JhcGhpY3ModGhpcy5nYW1lLCB4LCB5KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgQml0bWFwVGV4dCBvYmplY3QuXG4gICAgKlxuICAgICogQml0bWFwVGV4dCBvYmplY3RzIHdvcmsgYnkgdGFraW5nIGEgdGV4dHVyZSBmaWxlIGFuZCBhbiBYTUwgZmlsZSB0aGF0IGRlc2NyaWJlcyB0aGUgZm9udCBzdHJ1Y3R1cmUuXG4gICAgKiBJdCB0aGVuIGdlbmVyYXRlcyBhIG5ldyBTcHJpdGUgb2JqZWN0IGZvciBlYWNoIGxldHRlciBvZiB0aGUgdGV4dCwgcHJvcG9ydGlvbmFsbHkgc3BhY2VkIG91dCBhbmQgYWxpZ25lZCB0b1xuICAgICogbWF0Y2ggdGhlIGZvbnQgc3RydWN0dXJlLlxuICAgICpcbiAgICAqIEJpdG1hcFRleHQgb2JqZWN0cyBhcmUgbGVzcyBmbGV4aWJsZSB0aGFuIFRleHQgb2JqZWN0cywgaW4gdGhhdCB0aGV5IGhhdmUgbGVzcyBmZWF0dXJlcyBzdWNoIGFzIHNoYWRvd3MsIGZpbGxzIGFuZCB0aGUgYWJpbGl0eVxuICAgICogdG8gdXNlIFdlYiBGb250cy4gSG93ZXZlciB5b3UgdHJhZGUgdGhpcyBmbGV4aWJpbGl0eSBmb3IgcHVyZSByZW5kZXJpbmcgc3BlZWQuIFlvdSBjYW4gYWxzbyBjcmVhdGUgdmlzdWFsbHkgY29tcGVsbGluZyBCaXRtYXBUZXh0cyBieVxuICAgICogcHJvY2Vzc2luZyB0aGUgZm9udCB0ZXh0dXJlIGluIGFuIGltYWdlIGVkaXRvciBmaXJzdCwgYXBwbHlpbmcgZmlsbHMgYW5kIGFueSBvdGhlciBlZmZlY3RzIHJlcXVpcmVkLlxuICAgICpcbiAgICAqIFRvIGNyZWF0ZSBtdWx0aS1saW5lIHRleHQgaW5zZXJ0IFxcciwgXFxuIG9yIFxcclxcbiBlc2NhcGUgY29kZXMgaW50byB0aGUgdGV4dCBzdHJpbmcuXG4gICAgKlxuICAgICogVG8gY3JlYXRlIGEgQml0bWFwVGV4dCBkYXRhIGZpbGVzIHlvdSBjYW4gdXNlOlxuICAgICpcbiAgICAqIEJNRm9udCAoV2luZG93cywgZnJlZSk6IGh0dHA6Ly93d3cuYW5nZWxjb2RlLmNvbS9wcm9kdWN0cy9ibWZvbnQvXG4gICAgKiBHbHlwaCBEZXNpZ25lciAoT1MgWCwgY29tbWVyY2lhbCk6IGh0dHA6Ly93d3cuNzFzcXVhcmVkLmNvbS9lbi9nbHlwaGRlc2lnbmVyXG4gICAgKiBMaXR0ZXJhIChXZWItYmFzZWQsIGZyZWUpOiBodHRwOi8va3ZhemFycy5jb20vbGl0dGVyYS9cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSNiaXRtYXBUZXh0XG4gICAgKiBAcGFyYW0ge251bWJlcn0geCAtIFggY29vcmRpbmF0ZSB0byBkaXNwbGF5IHRoZSBCaXRtYXBUZXh0IG9iamVjdCBhdC5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IC0gWSBjb29yZGluYXRlIHRvIGRpc3BsYXkgdGhlIEJpdG1hcFRleHQgb2JqZWN0IGF0LlxuICAgICogQHBhcmFtIHtzdHJpbmd9IGZvbnQgLSBUaGUga2V5IG9mIHRoZSBCaXRtYXBUZXh0IGFzIHN0b3JlZCBpbiBQaGFzZXIuQ2FjaGUuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW3RleHQ9JyddIC0gVGhlIHRleHQgdGhhdCB3aWxsIGJlIHJlbmRlcmVkLiBUaGlzIGNhbiBhbHNvIGJlIHNldCBsYXRlciB2aWEgQml0bWFwVGV4dC50ZXh0LlxuICAgICogQHBhcmFtIHtudW1iZXJ9IFtzaXplPTMyXSAtIFRoZSBzaXplIHRoZSBmb250IHdpbGwgYmUgcmVuZGVyZWQgYXQgaW4gcGl4ZWxzLlxuICAgICogQHBhcmFtIHtQaGFzZXIuR3JvdXB9IFtncm91cF0gLSBPcHRpb25hbCBHcm91cCB0byBhZGQgdGhlIG9iamVjdCB0by4gSWYgbm90IHNwZWNpZmllZCBpdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBXb3JsZCBncm91cC5cbiAgICAqIEByZXR1cm4ge1BoYXNlci5CaXRtYXBUZXh0fSBUaGUgbmV3bHkgY3JlYXRlZCBiaXRtYXBUZXh0IG9iamVjdC5cbiAgICAqL1xuICAgIHB1YmxpYyBiaXRtYXBUZXh0KHg/OiBudW1iZXIsIHk/OiBudW1iZXIsIGZvbnQ/OiBzdHJpbmcsIHRleHQ6IHN0cmluZyA9IFwiXCIsIHNpemU6IG51bWJlciA9IDMyLCBncm91cD86IFBoYXNlci5Hcm91cCk6IFBoYXNlci5CaXRtYXBUZXh0IHtcbiAgICAgICAgaWYgKGdyb3VwID09PSB1bmRlZmluZWQpIHsgZ3JvdXAgPSB0aGlzLnRhcmdldEdyb3VwOyB9XG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBQaGFzZXIuQml0bWFwVGV4dCh0aGlzLmdhbWUsIHgsIHksIGZvbnQsIHRleHQsIHNpemUpKTtcbiAgICB9XG5cbiAgICAvLyBkaWpvbiBzcGVjaWZpYyBkaXNwbGF5IG9iamVjdHNcbiAgICBwdWJsaWMgZFNwcml0ZSh4PzogbnVtYmVyLCB5PzogbnVtYmVyLCBrZXk/OiBzdHJpbmcgfCBQaGFzZXIuUmVuZGVyVGV4dHVyZSB8IFBoYXNlci5CaXRtYXBEYXRhIHwgUElYSS5UZXh0dXJlLCBmcmFtZT86IHN0cmluZyB8IG51bWJlciwgbmFtZT86IHN0cmluZywgY29tcG9uZW50cz86IENvbXBvbmVudFtdLCBncm91cD86IFBoYXNlci5Hcm91cCk6IFNwcml0ZSB7XG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy50YXJnZXRHcm91cDsgfVxuICAgICAgICB0aGlzLnRhcmdldEdyb3VwID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGdyb3VwLmFkZChuZXcgU3ByaXRlKHgsIHksIGtleSwgZnJhbWUsIG5hbWUsIGNvbXBvbmVudHMpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZEdyb3VwKHg/OiBudW1iZXIsIHk/OiBudW1iZXIsIG5hbWU/OiBzdHJpbmcsIGFkZFRvU3RhZ2U/OiBib29sZWFuLCBjb21wb25lbnRzPzogQ29tcG9uZW50W10sIGVuYWJsZUJvZHk/OiBib29sZWFuLCBwaHlzaWNzQm9keVR5cGU/OiBudW1iZXIsIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogR3JvdXAge1xuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCAmJiBhZGRUb1N0YWdlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7XG4gICAgICAgICAgICB0aGlzLnRhcmdldEdyb3VwID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBncm91cC5hZGQobmV3IEdyb3VwKHgsIHksIG5hbWUsIGFkZFRvU3RhZ2UsIGNvbXBvbmVudHMsIGVuYWJsZUJvZHksIHBoeXNpY3NCb2R5VHlwZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBHcm91cCh4LCB5LCBuYW1lLCBhZGRUb1N0YWdlLCBjb21wb25lbnRzLCBlbmFibGVCb2R5LCBwaHlzaWNzQm9keVR5cGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkVGV4dCh4OiBudW1iZXIsIHk6IG51bWJlciwgdGV4dD86IHN0cmluZywgZm9udE5hbWU/OiBzdHJpbmcsIGZvbnRTaXplPzogbnVtYmVyLCBmb250Q29sb3I/OiBzdHJpbmcsIGZvbnRBbGlnbj86IHN0cmluZywgd29yZFdyYXA/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciwgbGluZVNwYWNpbmc/OiBudW1iZXIsIHNldHRpbmdzPzogT2JqZWN0LCBncm91cD86IFBoYXNlci5Hcm91cCk6IFRleHQge1xuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCkgeyBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7IH1cbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBncm91cC5hZGQobmV3IFRleHQoeCwgeSwgdGV4dCwgZm9udE5hbWUsIGZvbnRTaXplLCBmb250Q29sb3IsIGZvbnRBbGlnbiwgd29yZFdyYXAsIHdpZHRoLCBsaW5lU3BhY2luZywgc2V0dGluZ3MpKTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGRCaXRtYXBUZXh0KHg6bnVtYmVyID0gMCwgeTpudW1iZXIgPSAwLCBmb250OnN0cmluZyA9IG51bGwsIHRleHQ6c3RyaW5nID0gXCJcIiwgc2l6ZTpudW1iZXIgPSAxMiwgYWxpZ246c3RyaW5nID0gJ2xlZnQnLCBjb2xvcjpudW1iZXIgPSAweGZmZmZmZiwgc21vb3RoaW5nOmJvb2xlYW4gPSB0cnVlLCBhdXRvRmxhdHRlbjpib29sZWFuID0gdHJ1ZSwgbWFrZUltYWdlOmJvb2xlYW4gPSBmYWxzZSwgZ3JvdXA/OiBQaGFzZXIuR3JvdXApOiBCaXRtYXBUZXh0IHtcbiAgICAgICAgaWYgKGdyb3VwID09PSB1bmRlZmluZWQpIHsgZ3JvdXAgPSB0aGlzLnRhcmdldEdyb3VwOyB9XG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBCaXRtYXBUZXh0KHgsIHksIGZvbnQsIHRleHQsIHNpemUsIGFsaWduLCBjb2xvciwgc21vb3RoaW5nLCBhdXRvRmxhdHRlbiwgbWFrZUltYWdlKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNwaW5lKGFzc2V0TmFtZTogc3RyaW5nID0gJycsIHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIGdyb3VwPzogUGhhc2VyLkdyb3VwKSB7XG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy50YXJnZXRHcm91cDsgfVxuICAgICAgICB0aGlzLnRhcmdldEdyb3VwID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGdyb3VwLmFkZChuZXcgU3BpbmUoYXNzZXROYW1lLCB4LCB5KSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldERlZmF1bHRMYXllcih2YWx1ZTogUGhhc2VyLkdyb3VwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ0FVVElPTjogQ2hhbmdpbmcgdGhlIGRlZmF1bHQgbGF5ZXIgd2lsbCBjaGFuZ2UgdGhlIHRhcmdldCBncm91cCBmb3IgLmFkZFwiKTtcbiAgICAgICAgdGhpcy5fZGVmYXVsdExheWVyID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkZWZhdWx0TGF5ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0TGF5ZXI7XG4gICAgfVxuICAgIC8vIGdldHRlciAvIHNldHRlclxuICAgIHB1YmxpYyBzZXQgdGFyZ2V0R3JvdXAodmFsdWU6IFBoYXNlci5Hcm91cCkge1xuICAgICAgICB0aGlzLl90YXJnZXRHcm91cCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdGFyZ2V0R3JvdXAoKTogUGhhc2VyLkdyb3VwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RhcmdldEdyb3VwIHx8IHRoaXMuX2RlZmF1bHRMYXllcjtcbiAgICB9XG59IiwiLyoqXG4gKiBTZXF1ZW5jZU1hbmFnZXJcbiAqL1xuaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xuaW1wb3J0IHtHYW1lfSBmcm9tICcuLi9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFNlcXVlbmNlTWFuYWdlciB7XG4gICAgcHVibGljIGdhbWU6IEdhbWU7XG5cbiAgICBwcml2YXRlIF9kZWZhdWx0SW50ZXJ2YWwgPSAyMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdhbWUgPSBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWU7XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgcHJpdmF0ZSBfZXhlY3V0ZU1ldGhvZChzZXF1ZW5jZTogQXJyYXk8RnVuY3Rpb24+LCBjb250ZXh0OiBPYmplY3QsIGNhbGxiYWNrOiBGdW5jdGlvbiwgY2FsbGJhY2tDb250ZXh0OiBPYmplY3QpIHtcbiAgICAgICAgdmFyIGZ1bmMgPSBzZXF1ZW5jZS5zaGlmdCgpO1xuICAgICAgICBpZiAodHlwZW9mIGZ1bmMgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb250ZXh0ICE9PSAndW5kZWZpbmVkJyAmJiBjb250ZXh0KSB7XG4gICAgICAgICAgICBmdW5jLmNhbGwoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VxdWVuY2UubGVuZ3RoID09PSAwICYmIGNhbGxiYWNrICYmIGNhbGxiYWNrQ29udGV4dCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbChjYWxsYmFja0NvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICBwdWJsaWMgcnVuKHNlcXVlbmNlOiBBcnJheTxGdW5jdGlvbj4sIGNvbnRleHQ6IE9iamVjdCwgaW50ZXJ2YWw6IG51bWJlciwgY29tcGxldGVDYWxsYmFjazogRnVuY3Rpb24sIGNvbXBsZXRlQ2FsbGJhY2tDb250ZXh0OiBPYmplY3QpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZXh0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb250ZXh0IG11c3QgYmUgcHJvdmlkZWQgZm9yIHRoZSBzZXF1ZW5jZSBtZXRob2RzJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGludGVydmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaW50ZXJ2YWwgPSB0aGlzLl9kZWZhdWx0SW50ZXJ2YWw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VxdWVuY2UubGVuZ3RoID09PSAwICYmIHR5cGVvZiBjb21wbGV0ZUNhbGxiYWNrICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29tcGxldGVDYWxsYmFja0NvbnRleHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb21wbGV0ZUNhbGxiYWNrLmNhbGwoY29tcGxldGVDYWxsYmFja0NvbnRleHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGludGVydmFsID09PSAwKSB7XG4gICAgICAgICAgICB3aGlsZSAoc2VxdWVuY2UubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICB0aGlzLl9leGVjdXRlTWV0aG9kKHNlcXVlbmNlLCBjb250ZXh0LCB0eXBlb2YgY29tcGxldGVDYWxsYmFjayA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogY29tcGxldGVDYWxsYmFjaywgdHlwZW9mIGNvbXBsZXRlQ2FsbGJhY2tDb250ZXh0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBjb21wbGV0ZUNhbGxiYWNrQ29udGV4dCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMucmVwZWF0KGludGVydmFsLCBzZXF1ZW5jZS5sZW5ndGgsIHRoaXMuX2V4ZWN1dGVNZXRob2QsIHRoaXMsIHNlcXVlbmNlLCBjb250ZXh0LCB0eXBlb2YgY29tcGxldGVDYWxsYmFjayA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogY29tcGxldGVDYWxsYmFjaywgdHlwZW9mIGNvbXBsZXRlQ2FsbGJhY2tDb250ZXh0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBjb21wbGV0ZUNhbGxiYWNrQ29udGV4dCk7XG4gICAgfVxufSIsIi8qKlxuICogU3RhdGVcbiAqL1xuaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xuaW1wb3J0IHtHYW1lLCBHYW1lT2JqZWN0RmFjdG9yeX0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQge01lZGlhdG9yfSBmcm9tICcuLi9tdmMnO1xuXG5leHBvcnQgY2xhc3MgU3RhdGUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuICAgIHByb3RlY3RlZCBfYXVkaW86IFBoYXNlci5Tb3VuZFtdID0gW107XG4gICAgcHJvdGVjdGVkIF9tZWRpYXRvcjogTWVkaWF0b3IgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIC8vIFBoYXNlci5TdGF0ZSBvdmVycmlkZXNcbiAgICBwdWJsaWMgaW5pdCgpOiB2b2lkIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBwcmVsb2FkKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5wcmVsb2FkSUQpXG4gICAgICAgICAgICB0aGlzLmdhbWUuYXNzZXQubG9hZEFzc2V0cyh0aGlzLnByZWxvYWRJRCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmdhbWUuYXNzZXQuYWxsU291bmRzRGVjb2RlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUuYXNzZXQub25Mb2FkQ29tcGxldGVBbmRBdWRpb0RlY29kZWQuYWRkT25jZSh0aGlzLmNyZWF0ZSwgdGhpcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5idWlsZEludGVyZmFjZSgpO1xuICAgICAgICB0aGlzLmFmdGVyQnVpbGRJbnRlcmZhY2UoKTtcbiAgICAgICAgdGhpcy5zdGFydEJ1aWxkKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNodXRkb3duKHJlbW92ZU1lZGlhdG9yOiBib29sZWFuID0gdHJ1ZSwgcmVtb3ZlQXVkaW86IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgICAgIGlmIChyZW1vdmVNZWRpYXRvcikge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVNZWRpYXRvcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZW1vdmVBdWRpbykge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVBdWRpbygpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIuc2h1dGRvd24oKTtcbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuICAgIHB1YmxpYyBsaXN0QnVpbGRTZXF1ZW5jZSgpOiBGdW5jdGlvbltdIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyBidWlsZEludGVyZmFjZSgpOiB2b2lkIHsgfVxuXG4gICAgcHVibGljIGFmdGVyQnVpbGRJbnRlcmZhY2UoKTogdm9pZCB7IH1cblxuICAgIHB1YmxpYyBzdGFydEJ1aWxkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdhbWUuc2VxdWVuY2UucnVuKHRoaXMubGlzdEJ1aWxkU2VxdWVuY2UoKSwgdGhpcywgdGhpcy5idWlsZEludGVydmFsLCB0aGlzLnByZUFmdGVyQnVpbGQsIHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwcmVBZnRlckJ1aWxkKCk6IHZvaWQge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZ2FtZS50cmFuc2l0aW9uID09PSAndW5kZWZpbmVkJyB8fCAhdGhpcy5nYW1lLnRyYW5zaXRpb24uY2FuVHJhbnNpdGlvbk91dCgpKSB7XG4gICAgICAgICAgICB0aGlzLmFmdGVyQnVpbGQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWUudHJhbnNpdGlvbi5jYW5UcmFuc2l0aW9uT3V0KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUudHJhbnNpdGlvbi5vblRyYW5zaXRpb25PdXRDb21wbGV0ZS5hZGRPbmNlKHRoaXMuYWZ0ZXJCdWlsZCwgdGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLnRyYW5zaXRpb24udHJhbnNpdGlvbk91dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFmdGVyQnVpbGQoKTogdm9pZCB7IH1cblxuICAgIHB1YmxpYyBhZGRBdWRpbyh0cmFjazogUGhhc2VyLlNvdW5kKTogUGhhc2VyLlNvdW5kIHtcbiAgICAgICAgaWYgKCF0aGlzLl9hdWRpbykge1xuICAgICAgICAgICAgdGhpcy5fYXVkaW8gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9hdWRpby5wdXNoKHRyYWNrKTtcbiAgICAgICAgcmV0dXJuIHRyYWNrO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVBdWRpbygpOiB2b2lkIHtcbiAgICAgICAgdmFyIHNvdW5kOiBQaGFzZXIuU291bmQ7XG4gICAgICAgIGlmICghdGhpcy5fYXVkaW8pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlICh0aGlzLl9hdWRpby5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzb3VuZCA9IHRoaXMuX2F1ZGlvLnBvcCgpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzb3VuZCAhPT0gJ3VuZGVmaW5lZCcgJiYgc291bmQgIT0gbnVsbCAmJiB0eXBlb2Ygc291bmQuc3RvcCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNvdW5kLm9uU3RvcCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc291bmQub25TdG9wLnJlbW92ZUFsbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzb3VuZC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlTWVkaWF0b3IoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fbWVkaWF0b3IpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuX21lZGlhdG9yLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5fbWVkaWF0b3IgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIGdldHRlciAvIHNldHRlclxuICAgIHB1YmxpYyBnZXQgcHJlbG9hZElEKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYnVpbGRJbnRlcnZhbCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gMTA7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhZGQoKTogR2FtZU9iamVjdEZhY3Rvcnkge1xuICAgICAgICByZXR1cm4gdGhpcy5nYW1lLmFkZFRvR2FtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGFwcCgpOiBBcHBsaWNhdGlvbiB7XG4gICAgICAgIHJldHVybiBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZ2FtZSgpOiBHYW1lIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwLmdhbWU7XG4gICAgfVxufSIsIi8qKlxuICogU3RvcmFnZU1hbmFnZXJcbiAqL1xuaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xuaW1wb3J0IHtHYW1lfSBmcm9tICcuLi9jb3JlJztcbmV4cG9ydCBjbGFzcyBTdG9yYWdlTWFuYWdlciB7XG4gICAgcHVibGljIGdhbWU6IEdhbWU7XG4gICAgcHJpdmF0ZSBfbG9jYWxTdG9yYWdlQXZhaWxhYmxlOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZTtcbiAgICAgICAgdGhpcy5faW5pdCgpO1xuICAgIH1cblxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuICAgIHByaXZhdGUgX2luaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2xvY2FsU3RvcmFnZUF2YWlsYWJsZSA9IHRoaXMuX2dldElzTG9jYWxTdG9yYWdlQXZhaWxhYmxlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2NhbCBzdG9yYWdlIGF2YWlsYWJsZScsIHRoaXMuX2xvY2FsU3RvcmFnZUF2YWlsYWJsZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0SXNMb2NhbFN0b3JhZ2VBdmFpbGFibGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gJ2xvY2FsU3RvcmFnZScgaW4gd2luZG93ICYmIHdpbmRvd1snbG9jYWxTdG9yYWdlJ10gIT09IG51bGw7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2dldFN0cmluZyhkYXRhOiBPYmplY3QgfCBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBqc29uRGF0YTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAganNvbkRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvdWxkIG5vdCBjb252ZXJ0JyArIGRhdGEgKyAnIHRvIGpzb24nKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGpzb25EYXRhO1xuICAgIH1cblxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgLyoqXG4gICAgKiBnZXRzIHN0b3JlZCBkYXRhIHdpdGggdGhlIHNwZWNpZmllZCBrZXlcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gIGtleSAgICB0aGUgTG9jYWxTdG9yYWdlIGtleSB3aGVyZSB0aGUgZGF0YSBpcyBzdG9yZWRcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IGlzSlNPTiBpcyB0aGUgc3RvcmVkIGRhdGEganVzdCBhIHN0cmluZyBvciBpcyBpdCBzdHJpbmdpZmllZCBqc29uIChhc3N1bWVzIGl0J3MgSlNPTilcbiAgICAqIEByZXR1cm4ge1N0cmluZyB8IE9iamVjdH0gdGhlIHJldHJpZXZlZCBkYXRhIC0gaWYgaXQncyBhIEpTT04gc3RyaW5nLCB3ZSBwYXJzZSB0aGUgZGF0YSBhbmQgcmV0dXJuIHRoZSBKU09OIG9iamVjdFxuICAgICovXG4gICAgcHVibGljIGdldEZyb21Mb2NhbFN0b3JhZ2Uoa2V5OiBzdHJpbmcsIGlzSlNPTjogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gZGF0YSBzYXZlZCB3aXRoIHRoZSBrZXknLCBrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNKU09OICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBzYXZlcyBkYXRhIHRvIGxvY2Fsc3RvcmFnZVxuICAgICogQHBhcmFtICB7U3RyaW5nfSBrZXkgICB0aGUgTG9jYWxTdG9yYWdlIGtleSB0aGUgZGF0YSB3aWxsIGJlIHNhdmVkIHRvXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd8T2JqZWN0fSB2YWx1ZSB0aGUgZGF0YSB0byBzYXZlIChpZiBpdCdzIGFuIG9iamVjdCwgd2lsbCBiZSBzdHJpbmdpZmllZCBiZWZvcmUgc2F2aW5nKVxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyBzYXZlVG9Mb2NhbFN0b3JhZ2Uoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBPYmplY3QpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9sb2NhbFN0b3JhZ2VBdmFpbGFibGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBsb2NhbCBzdG9yYWdlJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdGhpcy5fZ2V0U3RyaW5nKHZhbHVlKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd5b3VyIGRhdGEgY291bGQgbm90IGJlIHNhdmVkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGNsZWFyIHN0b3JlZCBkYXRhXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGtleSB0aGUgTG9jYWxTdG9yYWdlIGtleSB0byBjbGVhclxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyBjbGVhckZyb21Mb2NhbFN0b3JhZ2Uoa2V5OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9sb2NhbFN0b3JhZ2VBdmFpbGFibGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBsb2NhbCBzdG9yYWdlJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyB9XG4gICAgfVxufSIsIi8qKlxuICogVHJhbnNpdGlvbk1hbmFnZXJcbiAqL1xuaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xuaW1wb3J0IHtHYW1lLCBHYW1lT2JqZWN0RmFjdG9yeX0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQge0lUcmFuc2l0aW9uLCBJVHJhbnNpdGlvbkhhbmRsZXIsIElQcmVsb2FkSGFuZGxlcn0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2l0aW9uTWFuYWdlciB7XG4gICAgcHVibGljIGdhbWU6IEdhbWU7XG4gICAgcHVibGljIG9uVHJhbnNpdGlvbk91dENvbXBsZXRlOiBQaGFzZXIuU2lnbmFsID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICBwdWJsaWMgb25UcmFuc2l0aW9uSW5Db21wbGV0ZTogUGhhc2VyLlNpZ25hbCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG5cbiAgICBwcml2YXRlIF90cmFuc2l0aW9uOiBJVHJhbnNpdGlvbiA9IG51bGw7XG4gICAgcHJpdmF0ZSBfdHJhbnNpdGlvbnM6IE9iamVjdCA9IHt9O1xuICAgIHByaXZhdGUgX2V4Y2VwdGlvbnM6IE9iamVjdCA9IHt9O1xuXG4gICAgcHJpdmF0ZSBfZnJvbVN0YXRlOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgX3RvU3RhdGU6IHN0cmluZyA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2FkZChpZDogc3RyaW5nLCBvdXRIYW5kbGVyOiBJVHJhbnNpdGlvbkhhbmRsZXIsIHByZWxvYWRIYW5kbGVyOiBJUHJlbG9hZEhhbmRsZXIsIGluSGFuZGxlcjogSVRyYW5zaXRpb25IYW5kbGVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25zW2lkXSA9IHtcbiAgICAgICAgICAgIG91dEhhbmRsZXI6IG91dEhhbmRsZXIsXG4gICAgICAgICAgICBwcmVsb2FkSGFuZGxlcjogcHJlbG9hZEhhbmRsZXIsXG4gICAgICAgICAgICBpbkhhbmRsZXI6IGluSGFuZGxlclxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldFRyYW5zaXRpb24oaW5TdGF0ZTogc3RyaW5nLCBvdXRTdGF0ZTogc3RyaW5nKSB7XG4gICAgICAgIHZhciB0cmFuc2l0aW9uID0gdGhpcy5fdHJhbnNpdGlvbnNbaW5TdGF0ZSArICcvJyArIG91dFN0YXRlXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0cmFuc2l0aW9uID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHRyYW5zaXRpb24gPSB0aGlzLl90cmFuc2l0aW9uc1snYWxsJ107XG5cbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0cmFuc2l0aW9uID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiB0cmFuc2l0aW9uO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3RyYW5zaXRpb25JbkNvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uID0gdGhpcy5fZ2V0VHJhbnNpdGlvbih0aGlzLl9mcm9tU3RhdGUsIHRoaXMuX3RvU3RhdGUpO1xuICAgICAgICBpZiAoIXRoaXMuX3RyYW5zaXRpb24pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyLmxvYWRTdGFydCA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hc3NldC5vbkxvYWRTdGFydC5hZGRPbmNlKHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIubG9hZFN0YXJ0LCB0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyKTtcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUuYXNzZXQub25GaWxlQ29tcGxldGUuYWRkKHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIubG9hZFByb2dyZXNzLCB0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2FtZS5hc3NldC5vbkxvYWRDb21wbGV0ZUFuZEF1ZGlvRGVjb2RlZC5hZGRPbmNlKHRoaXMuX3ByZWxvYWRDb21wbGV0ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMub25UcmFuc2l0aW9uSW5Db21wbGV0ZS5kaXNwYXRjaCgpO1xuXG4gICAgICAgIHRoaXMuZ2FtZS5jaGFuZ2VTdGF0ZSh0aGlzLl90b1N0YXRlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90cmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLm9uVHJhbnNpdGlvbk91dENvbXBsZXRlLmRpc3BhdGNoKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcHJlbG9hZENvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uID0gdGhpcy5fZ2V0VHJhbnNpdGlvbih0aGlzLl9mcm9tU3RhdGUsIHRoaXMuX3RvU3RhdGUpO1xuICAgICAgICBpZiAoIXRoaXMuX3RyYW5zaXRpb24pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5nYW1lLmFzc2V0Lm9uRmlsZUNvbXBsZXRlLnJlbW92ZSh0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyLmxvYWRQcm9ncmVzcywgdGhpcy5fdHJhbnNpdGlvbi5wcmVsb2FkSGFuZGxlcik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyLmxvYWRDb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIubG9hZENvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2xlYXJUcmFuc2l0aW9uKCkge1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uLm91dEhhbmRsZXIudHJhbnNpdGlvbkluQ29tcGxldGUucmVtb3ZlKHRoaXMuX3RyYW5zaXRpb25PdXRDb21wbGV0ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24uaW5IYW5kbGVyLnRyYW5zaXRpb25PdXRDb21wbGV0ZS5yZW1vdmUodGhpcy5fdHJhbnNpdGlvbkluQ29tcGxldGUsIHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWUuYXNzZXQub25Mb2FkQ29tcGxldGVBbmRBdWRpb0RlY29kZWQucmVtb3ZlKHRoaXMuX3ByZWxvYWRDb21wbGV0ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuZ2FtZS5hc3NldC5vbkxvYWRTdGFydC5yZW1vdmUodGhpcy5fdHJhbnNpdGlvbi5wcmVsb2FkSGFuZGxlci5sb2FkU3RhcnQsIHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIpO1xuICAgICAgICB0aGlzLmdhbWUuYXNzZXQub25GaWxlQ29tcGxldGUucmVtb3ZlKHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIubG9hZFByb2dyZXNzLCB0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyKTtcblxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuXG4gICAgLyoqXG4gICAgKiBBZGRzIGEgdHJhbnNpdGlvbiBoYW5kbGVyIGZvciBhIHNwZWNpZmljIGZyb20gLyB0byBzdGF0ZSBjb21iaW5hdGlvblxuICAgICogcGFzcyB0aGUgZnJvbSAvIHRvIHN0YXRlcyBhcyB0aGUgZmlyc3QgMiBhcmd1bWVudHMsIGFuZCBhZGRpdGlvbmFsIGFyZ3VtZW50cyBmb3Igd2hpY2ggaW5zdGFuY2Ugd2lsbCBoYW5kbGUgdGhlIHRyYW5zaXRpb25cbiAgICAqIGlmIG9ubHkgMyBhcmdzIGFyZSBwYXNzZWQsIHRoZSBpbnN0YW5jZSB3aWxsIGhhbmRsZSB0aGUgaW4gLyBvdXQgdHJhbnNpdGlvbiwgYW5kIHRoZSBwcmVsb2FkaW5nXG4gICAgKiBFLkcuXG4gICAgKiB0aGlzLmdhbWUudHJhbnNpdGlvbi5hZGQodGhpcy5nYW1lLmNvbnN0YW50cy5TVEFURV9QUkVMT0FELCB0aGlzLmdhbWUuY29uc3RhbnRzLlNUQVRFX01FTlUsIHRoaXMuZ2FtZS5wcmVsb2FkZXIpO1xuICAgICpcbiAgICAqIGlmIDUgYXJndW1lbnRzIGFyZSBwYXNzZWQsIGEgZGlmZmVyZW50IGluc3RhbmNlIGNhbiBiZSB1c2VkIGZvciBpbiB0cmFuc2l0aW9uLCBwcmVsb2FkaW5nLCBhbmQgb3V0IHRyYW5zaXRpb25cbiAgICAqIEUuRy5cbiAgICAqIHRoaXMuZ2FtZS50cmFuc2l0aW9uLmFkZCh0aGlzLmdhbWUuY29uc3RhbnRzLlNUQVRFX1BSRUxPQUQsIHRoaXMuZ2FtZS5jb25zdGFudHMuU1RBVEVfTUVOVSwgdGhpcy5nYW1lLnRyYW5zaXRpb25PdXRIYW5kbGVyLCB0aGlzLmdhbWUucHJlbG9hZEhhbmRsZXIsIHRoaXMuZ2FtZS50cmFuc2l0aW9uSW5IYW5kbGVyKTtcbiAgICAqXG4gICAgKiB0cmFuc2l0aW9uIGhhbmRsZXJzIGFyZSBleHBlY3RlZCB0byBiZWhhdmUgYXMgZm9sbG93czpcbiAgICAqIGFuIG91dCB0cmFuc2l0aW9uIGhhbmRsZXIgc2hvdWxkIGhhdmUgYSB0cmFuc2l0aW9uSW4gbWV0aG9kIGFuZCBkaXNwYXRjaCBhIHRyYW5zaXRpb25Db21wbGV0ZSBzaWduYWwgd2hlbiBkb25lXG4gICAgKiBhbiBpbiB0cmFuc2l0aW9uIGhhbmRsZXIgc2hvdWxkIGhhdmUgYSB0cmFuc2l0aW9uT3V0IG1ldGhvZCBhbmQgZGlzcGF0Y2ggYSB0cmFuc2l0aW9uQ09tcGxldGUgc2lnbmFsIHdoZW4gZG9uZVxuICAgICogYSBwcmVsb2FkIGhhbmRsZXIgc2hvdWxkIGhhdmUgbG9hZFN0YXJ0LCBsb2FkUHJvZ3Jlc3MsIGFuZCBsb2FkQ29tcGxldGUgbWV0aG9kc1xuICAgICogdGhlIGxvYWRQcm9ncmVzcyBtZXRob2QgbWF5IGFjY2VwdCBhIHVwIHRvIDQgcGFyYW1ldGVycyBmb3IgcHJvZ3Jlc3MgKHBlcmNlbnQgb2YgZmlsZXMgbG9hZGVkKSwgaWQsIGZpbGVJbmRleCwgYW5kIHRvdGFsRmlsZXNcbiAgICAqXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gZnJvbVN0YXRlIC0gdGhlIHN0YXRlIGJlaW5nIHRyYW5zaXRpb25lZCBmcm9tXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdG9TdGF0ZSAtIHRoZSBzdGF0ZSBiZWluZyB0cmFuc2l0aW9uZWQgdG9cbiAgICAqIEBwYXJhbSB7b3V0SGFuZGxlcn0gb3V0SGFuZGxlciAtIHRoZSBpbnN0YW5jZSB0aGF0IHdpbGwgaGFuZGxlIHRoZSB0cmFuc2l0aW9uIGZyb20gdGhlIGZyb21TdGF0ZVxuICAgICogQHBhcmFtIHtwcmVsb2FkSGFuZGxlcn0gcHJlbG9hZEhhbmRsZXIgLSB0aGUgaW5zdGFuY2UgdGhhdCB3aWxsIGhhbmRsZSBwcmVsb2FkaW5nIHRoZSB0b1N0YXRlXG4gICAgKiBAcGFyYW0ge2luSGFuZGxlcn0gaW5IYW5kbGVyIC0gdGhlIGluc3RhbmNlIHRoYXQgd2lsbCBoYW5kbGUgdGhlIGluIHRyYW5zaXRpb24gd2hlbiB0aGUgdG9TdGF0ZSBpcyBjb21wbGV0ZWx5IGxvYWRlZFxuICAgICogQHJldHVybiB7T2JqZWN0fSB0cmFuc2l0aW9uIHJlZmVyZW5jZSB0aGF0IHdhcyBhZGRlZCB0byBfdHJhbnNpdGlvbnNcbiAgICAqL1xuICAgIHB1YmxpYyBhZGQoZnJvbVN0YXRlOiBzdHJpbmcsIHRvU3RhdGU6IHN0cmluZyB8IElQcmVsb2FkSGFuZGxlciwgb3V0SGFuZGxlcj86IElUcmFuc2l0aW9uSGFuZGxlciwgcHJlbG9hZEhhbmRsZXI/OiBJUHJlbG9hZEhhbmRsZXIsIGluSGFuZGxlcj86IElUcmFuc2l0aW9uSGFuZGxlcik6IHZvaWQge1xuICAgICAgICB2YXIgYXJncztcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCA1KSB7XG4gICAgICAgICAgICBpZiAoZnJvbVN0YXRlID09PSAnYWxsJykge1xuICAgICAgICAgICAgICAgIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9hZGQoJ2FsbCcsIGFyZ3NbMF0sIGFyZ3NbMF0sIGFyZ3NbMF0pO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FkZCgnYWxsJywgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FkZChmcm9tU3RhdGUgKyAnLycgKyB0b1N0YXRlLCBhcmdzWzBdLCBhcmdzWzBdLCBhcmdzWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9hZGQoZnJvbVN0YXRlICsgJy8nICsgdG9TdGF0ZSwgb3V0SGFuZGxlciwgcHJlbG9hZEhhbmRsZXIsIGluSGFuZGxlcik7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZEFsbChoYW5kbGVyOiBJUHJlbG9hZEhhbmRsZXIpOiB2b2lkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZCgnYWxsJywgaGFuZGxlciwgaGFuZGxlciwgaGFuZGxlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBBZGRzIGFuIGV4Y2VwdGlvbiB0byB0aGUgRGlqb24uVHJhbnNpdGlvbk1hbmFnZXIgaW4gdGhlIGNhc2Ugd2hlcmUgJ2FsbCcgaGFzIGJlZW4gdXNlZFxuICAgICogQHBhcmFtIHtzdHJpbmd9IHN0YXRlIC0gdGhlIHN0YXRlIHRvIGFkZCB0aGUgZXhjZXB0aW9uIGZvclxuICAgICovXG4gICAgcHVibGljIGFkZEV4Y2VwdGlvbihzdGF0ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2V4Y2VwdGlvbnNbc3RhdGVdID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFJlbW92ZXMgYSB0cmFuc2l0aW9uIGhhbmRsZXIgZm9yIGEgc3BlY2lmaWMgZnJvbSAvIHRvIHN0YXRlIGNvbWJpbmF0aW9uXG4gICAgKi9cbiAgICBwdWJsaWMgcmVtb3ZlKGZyb21TdGF0ZTogc3RyaW5nLCB0b1N0YXRlPzogc3RyaW5nKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uc1tmcm9tU3RhdGVdID0gbnVsbDtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl90cmFuc2l0aW9uc1tmcm9tU3RhdGVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbnNbZnJvbVN0YXRlICsgJy8nICsgdG9TdGF0ZV0gPSBudWxsO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX3RyYW5zaXRpb25zW2Zyb21TdGF0ZSArICcvJyArIHRvU3RhdGVdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBTdGFydCB0aGUgdHJhbnNpdGlvbiB0byBhIG5ldyBzdGF0ZVxuICAgICogQHBhcmFtIHtzdHJpbmd9IHN0YXRlIC0gdGhlIHN0YXRlIHRvIHRyYW5zaXRpb24gdG9cbiAgICAqL1xuICAgIHB1YmxpYyB0byhzdGF0ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl90cmFuc2l0aW9uKVxuICAgICAgICAgICAgdGhpcy5fY2xlYXJUcmFuc2l0aW9uKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2V4Y2VwdGlvbnNbc3RhdGVdKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuX2Zyb21TdGF0ZSA9IHRoaXMuZ2FtZS5zdGF0ZS5jdXJyZW50O1xuICAgICAgICB0aGlzLl90b1N0YXRlID0gc3RhdGU7XG5cbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiA9IHRoaXMuX2dldFRyYW5zaXRpb24odGhpcy5fZnJvbVN0YXRlLCB0aGlzLl90b1N0YXRlKTtcblxuICAgICAgICBpZiAoIXRoaXMuX3RyYW5zaXRpb24pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyB0cmFuc2l0aW9uIGZvdW5kIGZvcjonLCB0aGlzLmdhbWUuc3RhdGUuY3VycmVudCArICcgdG8gJyArIHN0YXRlKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5jaGFuZ2VTdGF0ZSh0aGlzLl90b1N0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkluKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHRyYW5zaXRpb25JbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLl90cmFuc2l0aW9uKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fdHJhbnNpdGlvbi5vdXRIYW5kbGVyLnRyYW5zaXRpb25JbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbi5vdXRIYW5kbGVyLnRyYW5zaXRpb25JbkNvbXBsZXRlLmFkZE9uY2UodGhpcy5fdHJhbnNpdGlvbkluQ29tcGxldGUsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbi5vdXRIYW5kbGVyLnRyYW5zaXRpb25JbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNhblRyYW5zaXRpb25PdXQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhdGhpcy5fZXhjZXB0aW9uc1t0aGlzLmdhbWUuc3RhdGUuY3VycmVudF0gJiYgdGhpcy5fdHJhbnNpdGlvbiAmJiB0aGlzLl90cmFuc2l0aW9uLmluSGFuZGxlciAmJiB0eXBlb2YgdGhpcy5fdHJhbnNpdGlvbi5pbkhhbmRsZXIudHJhbnNpdGlvbk91dCA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEFmdGVyIHRoZSBzdGF0ZSBpcyBmdWxseSBsb2FkZWQgYW5kICdidWlsdCcgYSBjYWxsIHRvIHRoaXMgaXMgbWFkZVxuICAgICogdGhpcyBpcyBjdXJyZW50bHkgbWFkZSBmcm9tIEJhc2VTdGF0ZSBpbiB0aGUgJ2FmdGVyQnVpbGQnIG1ldGhvZFxuICAgICovXG4gICAgcHVibGljIHRyYW5zaXRpb25PdXQoKSB7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24uaW5IYW5kbGVyLnRyYW5zaXRpb25PdXRDb21wbGV0ZS5hZGRPbmNlKHRoaXMuX3RyYW5zaXRpb25PdXRDb21wbGV0ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24uaW5IYW5kbGVyLnRyYW5zaXRpb25PdXQoKTtcbiAgICB9XG59IiwiaW1wb3J0IHtJTm90aWZpY2F0aW9uLElPYnNlcnZlcn0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQge0FwcGxpY2F0aW9ufSBmcm9tICcuLi9hcHBsaWNhdGlvbic7XG5pbXBvcnQge0dhbWV9IGZyb20gJy4uL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgTW9kZWwge1xuICAgIHB1YmxpYyBhcHA6IEFwcGxpY2F0aW9uO1xuICAgIHB1YmxpYyBnYW1lOiBHYW1lO1xuICAgIHByb3RlY3RlZCBfZGF0YTogYW55O1xuXG4gICAgcHVibGljIHN0YXRpYyBNT0RFTF9OQU1FOiBzdHJpbmcgPSAnTW9kZWwnO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YUtleTogc3RyaW5nID0gbnVsbCwgcHJpdmF0ZSBtb2RlbE5hbWU6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5hcHAgPSBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLmdhbWUgPSB0aGlzLmFwcC5nYW1lO1xuXG4gICAgICAgIGlmIChkYXRhS2V5KSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoZGF0YUtleSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFwcC5yZWdpc3Rlck1vZGVsKHRoaXMpO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgb25SZWdpc3RlcigpOnZvaWR7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgb25SZW1vdmVkKCk6dm9pZHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldEtleUV4aXN0cyhrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nYW1lLmNhY2hlLmdldEpTT04oa2V5KSAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0RGF0YShkYXRhS2V5OiBzdHJpbmcpOiBhbnkge1xuICAgICAgICBpZiAoIXRoaXMuZ2V0S2V5RXhpc3RzKGRhdGFLZXkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTW9kZWw6OiBjYW5ub3Qgc2V0IGRhdGEgZnJvbSBrZXkgJyArIGRhdGFLZXkgKyAnLiBJcyBpdCBpbiB0aGUgUGhhc2VyIGNhY2hlPycpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRKU09OKGRhdGFLZXkpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RGF0YSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hcHAucmVtb3ZlTW9kZWwodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsTmFtZSB8fCBNb2RlbC5NT0RFTF9OQU1FO1xuICAgIH1cbn0iLCJpbXBvcnQge01vZGVsfSBmcm9tICcuL01vZGVsJztcblxuZXhwb3J0IGNsYXNzIENvcHlNb2RlbCBleHRlbmRzIE1vZGVsIHtcbiAgICBwdWJsaWMgc3RhdGljIE1PREVMX05BTUU6IHN0cmluZyA9ICdjb3B5TW9kZWwnO1xuXG4gICAgcHJpdmF0ZSBfbGFuZ3VhZ2VzOiB7IFtsYW5ndWFnZU5hbWU6IHN0cmluZ106IGFueSB9ID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhS2V5OiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIHN1cGVyKGRhdGFLZXkpO1xuXG4gICAgICAgIHRoaXMuX2xhbmd1YWdlc1snZW4nXSA9IHRoaXMuX2RhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENvcHkoZ3JvdXBJZDogc3RyaW5nLCBpdGVtSWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvcHlHcm91cChncm91cElkKVtpdGVtSWRdO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDb3B5R3JvdXAoZ3JvdXBJZDogc3RyaW5nKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFbZ3JvdXBJZF07XG4gICAgfVxuXG4gICAgcHVibGljIGFkZExhbmd1YWdlKGxhbmd1YWdlSWQ6IHN0cmluZywgZGF0YUtleTogc3RyaW5nKTogYW55IHtcbiAgICAgICAgaWYgKCF0aGlzLmdldEtleUV4aXN0cyhkYXRhS2V5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW5ub3QgYWRkIGFuIGFsdGVybmF0ZSBsYW5ndWFnZSBmcm9tIGtleSAnICsgZGF0YUtleSArICcuIElzIGl0IGluIHRoZSBQaGFzZXIgY2FjaGU/Jyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9sYW5ndWFnZXNbbGFuZ3VhZ2VJZF0gPSB0aGlzLmdhbWUuY2FjaGUuZ2V0SlNPTihkYXRhS2V5KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hhbmdlTGFuZ3VhZ2UobGFuZ3VhZ2VJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fbGFuZ3VhZ2VzW2xhbmd1YWdlSWRdID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndGhlcmUgaXMgbm8gbGFuZ3VhZ2UgJyArIGxhbmd1YWdlSWQpO1xuXG4gICAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9sYW5ndWFnZXNbbGFuZ3VhZ2VJZF07XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBDb3B5TW9kZWwuTU9ERUxfTkFNRTtcbiAgICB9XG59IiwiaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi4vYXBwbGljYXRpb24nO1xuaW1wb3J0IHtJT2JzZXJ2ZXIsSU5vdGlmaWNhdGlvbn0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQge0dhbWV9IGZyb20gJy4uL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgTWVkaWF0b3IgaW1wbGVtZW50cyBJT2JzZXJ2ZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgTUVESUFUT1JfTkFNRTogc3RyaW5nID0gJ01lZGlhdG9yJztcblxuICAgIHByb3RlY3RlZCBtZWRpYXRvck5hbWU6IHN0cmluZyA9IG51bGw7XG4gICAgcHJvdGVjdGVkIGFwcDogQXBwbGljYXRpb247XG4gICAgcHJvdGVjdGVkIGdhbWU6IEdhbWU7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX3ZpZXdDb21wb25lbnQ6IGFueSA9IG51bGwsIGF1dG9SZWc6IGJvb2xlYW4gPSB0cnVlLCBtZWRpYXRvck5hbWU6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5hcHAgPSBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLmdhbWUgPSB0aGlzLmFwcC5nYW1lO1xuICAgICAgICB0aGlzLm1lZGlhdG9yTmFtZSA9IG1lZGlhdG9yTmFtZTtcblxuICAgICAgICBpZiAoYXV0b1JlZykge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgcHJvdGVjdGVkIHJlZ2lzdGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFwcC5yZWdpc3Rlck1lZGlhdG9yKHRoaXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZW1vdmUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXBwLnJlbW92ZU1lZGlhdG9yKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblJlZ2lzdGVyKCk6IHZvaWQge1xuICAgICAgICAvLyBvdmVycmlkZSBtZSBmcmVlbHlcbiAgICB9XG5cbiAgICBwdWJsaWMgb25SZW1vdmVkKCk6IHZvaWQge1xuXG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHMoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcHVibGljIGhhbmRsZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb246IElOb3RpZmljYXRpb24pIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGRlZmF1bHQgaW1tcGxlbWVudGF0aW9uIHdvdWxkIGxvb2sgc29tZXRoaW5nIGxpa2U6XG4gICAgICAgICAqIHN3aXRjaCggbm90aWZpY2F0aW9uOiBkaWpvbi5JTm90aWZpY2F0aW9uICl7XG4gICAgICAgICAqIFx0XHRjYXNlIE5vdGlmaWNhdGlvbnMuU09NRVRISU5HOlxuICAgICAgICAgKiBcdFx0XHQvLyBkbyBzb21ldGhpbmdcbiAgICAgICAgICogXHRcdFx0YnJlYWs7XG4gICAgICAgICAqIFx0XHRjYXNlIE5vdGlmaWNhdGlvbnMuU09NRVRISU5HX0VMU0U6XG4gICAgICAgICAqIFx0XHRcdC8vIGRvIHNvbWV0aGluZyBlbHNlXG4gICAgICAgICAqIFx0XHRcdGJyZWFrO1xuICAgICAgICAgKiB9XG4gICAgICAgICAqL1xuICAgIH1cblxuICAgIHB1YmxpYyBzZW5kTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbk5hbWU6IHN0cmluZywgbm90aWZpY2F0aW9uQm9keT86IGFueSkge1xuICAgICAgICB0aGlzLmFwcC5zZW5kTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbk5hbWUsIG5vdGlmaWNhdGlvbkJvZHkpO1xuICAgIH1cblxuICAgIC8vIGdldHRlciAvIHNldHRlclxuICAgIHB1YmxpYyBzZXQgdmlld0NvbXBvbmVudCh2aWV3Q29tcG9uZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5fdmlld0NvbXBvbmVudCA9IHZpZXdDb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB2aWV3Q29tcG9uZW50KCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92aWV3Q29tcG9uZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5tZWRpYXRvck5hbWUgfHwgTWVkaWF0b3IuTUVESUFUT1JfTkFNRTtcbiAgICB9XG59IiwiaW1wb3J0IHtJTm90aWZpY2F0aW9ufSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbiBpbXBsZW1lbnRzIElOb3RpZmljYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX25hbWU6IHN0cmluZywgcHJpdmF0ZSBfYm9keTogYW55ID0gbnVsbCkgeyB9XG5cbiAgICBwdWJsaWMgZ2V0TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0Qm9keShib2R5OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fYm9keSA9IGJvZHk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEJvZHkoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvZHk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX2JvZHkgPSBudWxsO1xuICAgICAgICB0aGlzLl9uYW1lID0gbnVsbDtcbiAgICB9XG59IiwiaW1wb3J0IHtJTm90aWZpZXIsIElOb3RpZmljYXRpb24sIElPYnNlcnZlcn0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQge01lZGlhdG9yLCBNb2RlbCwgTm90aWZpY2F0aW9ufSBmcm9tICcuLi9tdmMnO1xuaW1wb3J0IHtHYW1lfSBmcm9tICcuLi9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uIGltcGxlbWVudHMgSU5vdGlmaWVyIHtcbiAgICAvLyBzdGF0aWMgY29uc3RhbnRzXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBpbnN0YW5jZSA9IG51bGw7XG4gICAgcHJvdGVjdGVkIHN0YXRpYyBTSU5HTEVUT05fTVNHID0gJ0FwcGxpY2F0aW9uIHNpbmdsZXRvbiBhbHJlYWR5IGNvbnN0cnVjdGVkISc7XG5cbiAgICAvLyBwdWJsaWMgXG4gICAgcHVibGljIGdhbWU6IEdhbWU7XG5cbiAgICAvLyBwcm90ZWN0ZWQgICAgICAgIFxuICAgIHByb3RlY3RlZCBfbWVkaWF0b3I6IE1lZGlhdG9yID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgX21vZGVsczogeyBbbmFtZTogc3RyaW5nXTogTW9kZWwgfSA9IHt9O1xuICAgIHByb3RlY3RlZCBfbWVkaWF0b3JzOiB7IFtuYW1lOiBzdHJpbmddOiBNZWRpYXRvciB9ID0ge307XG4gICAgcHJvdGVjdGVkIF9vYnNlcnZlck1hcDogeyBbbmFtZTogc3RyaW5nXTogSU9ic2VydmVyW10gfSA9IHt9O1xuXG4gICAgLy9mb3IgZGVidWdnaW5nXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2hhc2hRdWVyeToge307XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKEFwcGxpY2F0aW9uLmluc3RhbmNlKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoQXBwbGljYXRpb24uU0lOR0xFVE9OX01TRyk7XG5cbiAgICAgICAgQXBwbGljYXRpb24uaW5zdGFuY2UgPSB0aGlzO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICBBcHBsaWNhdGlvbi5fZ2V0SGFzaFF1ZXJ5KCk7XG4gICAgICAgICAgICB0aGlzLndpbmRvd0hhc2hDaGFuZ2UoKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlR2FtZSgpO1xuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB3aW5kb3dIYXNoQ2hhbmdlKCk6IHZvaWQge1xuICAgIH1cblxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUdhbWUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKHtcbiAgICAgICAgICAgIHdpZHRoOiA4MDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgIHBhcmVudDogJ2dhbWUtY29udGFpbmVyJyxcbiAgICAgICAgICAgIHJlbmRlcmVyOiBQaGFzZXIuQVVUTyxcbiAgICAgICAgICAgIHRyYW5zcGFyZW50OiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc3RhcnRHYW1lKCk6IHZvaWQge1xuICAgICAgICAvLyBzdGFydCB0aGUgYXBwJ3MgaW5pdGlhbCBzdGF0ZSBoZXJlXG4gICAgfVxuXG4gICAgcHVibGljIGFkZFBsdWdpbnMoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGRQbHVnaW5zKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyTW9kZWwobW9kZWw6IE1vZGVsKTogTW9kZWwge1xuICAgICAgICBpZiAodGhpcy5fbW9kZWxzW21vZGVsLm5hbWVdKSB7XG4gICAgICAgICAgICB0aHJvdyAobmV3IEVycm9yKCdBcHBsaWNhdGlvbjo6IGEgbW9kZWwgd2l0aCB0aGUgbmFtZSBcIicgKyBtb2RlbC5uYW1lICsgJ1wiIGFscmVhZHkgZXhpc3RzLicpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tb2RlbHNbbW9kZWwubmFtZV0gPSBtb2RlbDtcblxuICAgICAgICBtb2RlbC5vblJlZ2lzdGVyKCk7XG5cbiAgICAgICAgcmV0dXJuIG1vZGVsO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXRyaWV2ZU1vZGVsKG1vZGVsTmFtZTogc3RyaW5nKTogTW9kZWwge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9kZWxzW21vZGVsTmFtZV0gfHwgbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlTW9kZWwobW9kZWxUb1JlbW92ZTogTW9kZWwpOiB2b2lkIHtcbiAgICAgICAgbGV0IG5hbWUgPSBtb2RlbFRvUmVtb3ZlLm5hbWU7XG4gICAgICAgIGxldCBtb2RlbCA9IHRoaXMuX21vZGVsc1tuYW1lXTtcblxuICAgICAgICBpZiAoIW1vZGVsKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIG1vZGVsLm9uUmVtb3ZlZCgpO1xuXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9tb2RlbHNbbmFtZV07XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyTWVkaWF0b3IobWVkaWF0b3I6IE1lZGlhdG9yKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9tZWRpYXRvcnNbbWVkaWF0b3IubmFtZV0pIHtcbiAgICAgICAgICAgIHRocm93IChuZXcgRXJyb3IoJ0FwcGxpY2F0aW9uOjogYSBtZWRpYXRvciB3aXRoIHRoZSBuYW1lIFwiJyArIG1lZGlhdG9yLm5hbWUgKyAnXCIgYWxyZWFkeSBleGlzdHMuJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbWVkaWF0b3JzW21lZGlhdG9yLm5hbWVdID0gbWVkaWF0b3I7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJPYnNlcnZlcihtZWRpYXRvcik7XG5cbiAgICAgICAgbWVkaWF0b3Iub25SZWdpc3RlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXRyaWV2ZU1lZGlhdG9yKG1lZGlhdG9yTmFtZTogc3RyaW5nKTogTWVkaWF0b3Ige1xuICAgICAgICByZXR1cm4gdGhpcy5fbWVkaWF0b3JzW21lZGlhdG9yTmFtZV0gfHwgbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlTWVkaWF0b3IobWVkaWF0b3JUb1JlbW92ZTogTWVkaWF0b3IpOiB2b2lkIHtcbiAgICAgICAgbGV0IG5hbWUgPSBtZWRpYXRvclRvUmVtb3ZlLm5hbWU7XG4gICAgICAgIGxldCBtZWRpYXRvciA9IHRoaXMuX21lZGlhdG9yc1tuYW1lXTtcblxuICAgICAgICBpZiAoIW1lZGlhdG9yKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIG1lZGlhdG9yLmxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHMoKS5mb3JFYWNoKGludGVyZXN0ID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlT2JzZXJ2ZXIoaW50ZXJlc3QsIG1lZGlhdG9yKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVkaWF0b3Iub25SZW1vdmVkKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9tZWRpYXRvcnNbbmFtZV07XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyT2JzZXJ2ZXIob2JzZXJ2ZXI6IElPYnNlcnZlcik6IHZvaWQge1xuICAgICAgICBvYnNlcnZlci5saXN0Tm90aWZpY2F0aW9uSW50ZXJlc3RzKCkuZm9yRWFjaChub3RpZmljYXRpb25OYW1lID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9vYnNlcnZlck1hcFtub3RpZmljYXRpb25OYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb2JzZXJ2ZXJNYXBbbm90aWZpY2F0aW9uTmFtZV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX29ic2VydmVyTWFwW25vdGlmaWNhdGlvbk5hbWVdLnB1c2gob2JzZXJ2ZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzdG9wcyBhbiBvYnNlcnZlciBmcm9tIGJlaW5nIGludGVyZXN0ZWQgaW4gYSBub3RpZmljYXRpb25cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbm90aWZpY2F0aW9uTmFtZVxuICAgICAqIEBwYXJhbSB7SU9ic2VydmVyfSBvYnNlcnZlclRvUmVtb3ZlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVtb3ZlT2JzZXJ2ZXIobm90aWZpY2F0aW9uTmFtZTogc3RyaW5nLCBvYnNlcnZlclRvUmVtb3ZlOiBJT2JzZXJ2ZXIpOiB2b2lkIHtcbiAgICAgICAgLy9UaGUgb2JzZXJ2ZXIgbGlzdCBmb3IgdGhlIG5vdGlmaWNhdGlvbiB1bmRlciBpbnNwZWN0aW9uXG4gICAgICAgIGxldCBvYnNlcnZlcnM6IElPYnNlcnZlcltdID0gbnVsbCxcbiAgICAgICAgICAgIG9ic2VydmVyOiBJT2JzZXJ2ZXIgPSBudWxsLFxuICAgICAgICAgICAgaTogbnVtYmVyID0gMDtcblxuICAgICAgICBvYnNlcnZlcnMgPSB0aGlzLl9vYnNlcnZlck1hcFtub3RpZmljYXRpb25OYW1lXTtcblxuICAgICAgICAvL0ZpbmQgdGhlIG9ic2VydmVyIGZvciB0aGUgbm90aWZ5Q29udGV4dC5cbiAgICAgICAgaSA9IG9ic2VydmVycy5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgIG9ic2VydmVyID0gb2JzZXJ2ZXJzW2ldO1xuICAgICAgICAgICAgaWYgKG9ic2VydmVyID09PSBvYnNlcnZlclRvUmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICAqIEFsc28sIHdoZW4gYSBOb3RpZmljYXRpb24ncyBPYnNlcnZlciBsaXN0IGxlbmd0aCBmYWxscyB0byB6ZXJvLCBkZWxldGUgdGhlXG4gICAgICAgICAqIG5vdGlmaWNhdGlvbiBrZXkgZnJvbSB0aGUgb2JzZXJ2ZXIgbWFwLlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKG9ic2VydmVycy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX29ic2VydmVyTWFwW25vdGlmaWNhdGlvbk5hbWVdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNlbmROb3RpZmljYXRpb24obm90aWZpY2F0aW9uTmFtZTogc3RyaW5nLCBub3RmaWNhdGlvbkJvZHk/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgbGV0IG5vdGlmaWNhdGlvbiA9IG5ldyBOb3RpZmljYXRpb24obm90aWZpY2F0aW9uTmFtZSwgbm90ZmljYXRpb25Cb2R5KTtcbiAgICAgICAgdGhpcy5fbm90aWZ5T2JzZXJ2ZXJzKG5vdGlmaWNhdGlvbik7XG5cbiAgICAgICAgbm90aWZpY2F0aW9uLmRlc3Ryb3koKTtcbiAgICAgICAgbm90aWZpY2F0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICBwcml2YXRlIF9ub3RpZnlPYnNlcnZlcnMobm90aWZpY2F0aW9uOiBJTm90aWZpY2F0aW9uKSB7XG4gICAgICAgIGxldCBvYnNlcnZlcjogSU9ic2VydmVyID0gbnVsbCxcbiAgICAgICAgICAgIG9ic2VydmVyczogSU9ic2VydmVyW10gPSBudWxsO1xuXG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbk5hbWU6IHN0cmluZyA9IG5vdGlmaWNhdGlvbi5nZXROYW1lKCk7XG4gICAgICAgIGNvbnN0IG9ic2VydmVyc1JlZjogSU9ic2VydmVyW10gPSB0aGlzLl9vYnNlcnZlck1hcFtub3RpZmljYXRpb25OYW1lXTtcblxuICAgICAgICBpZiAob2JzZXJ2ZXJzUmVmKSB7XG4gICAgICAgICAgICAvLyBjbG9uZSB0aGUgYXJyYXkgaW4gY2FzZSBhbiBvYnNlcnZlciBnZXRzIHJlbW92ZWQgd2hpbGUgdGhlIG5vdGlmaWNhdGlvbiBpcyBiZWluZyBzZW50XG4gICAgICAgICAgICBvYnNlcnZlcnMgPSBvYnNlcnZlcnNSZWYuc2xpY2UoMCk7XG4gICAgICAgICAgICBvYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuaGFuZGxlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIF9nZXRIYXNoUXVlcnkoKTogdm9pZCB7XG4gICAgICAgIEFwcGxpY2F0aW9uLl9oYXNoUXVlcnkgPSB7fTtcbiAgICAgICAgaWYgKCF3aW5kb3cubG9jYXRpb24uaGFzaCB8fCB3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cigxLCB3aW5kb3cubG9jYXRpb24uaGFzaC5sZW5ndGgpO1xuICAgICAgICBjb25zdCBhSGFzaDogc3RyaW5nW10gPSBoYXNoLnNwbGl0KCcmJyk7XG4gICAgICAgIGFIYXNoLmZvckVhY2goaGFzaFBhaXIgPT4ge1xuICAgICAgICAgICAgY29uc3QgYUhhc2ggPSBoYXNoUGFpci5zcGxpdCgnPScpO1xuICAgICAgICAgICAgQXBwbGljYXRpb24uX2hhc2hRdWVyeVthSGFzaFswXV0gPSAvXlxcZCskLy50ZXN0KGFIYXNoWzFdKSA/IHBhcnNlSW50KGFIYXNoWzFdKSA6IGFIYXNoWzFdO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBzdGF0aWMgbWV0aG9kc1xuXG4gICAgLyoqXG4gICAgICogcmV0dXJucyB0aGUgQXBwbGljYXRpb24gc2luZ2xldG9uXG4gICAgICogQHJldHVybiB7QXBwbGljYXRpb259XG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBBcHBsaWNhdGlvbiB7XG4gICAgICAgIGlmICghQXBwbGljYXRpb24uaW5zdGFuY2UpXG4gICAgICAgICAgICBBcHBsaWNhdGlvbi5pbnN0YW5jZSA9IG5ldyBBcHBsaWNhdGlvbigpO1xuXG4gICAgICAgIHJldHVybiBBcHBsaWNhdGlvbi5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBnZXRzIGEgcXVlcnkgdmFyaWFibGUgZnJvbSB0aGUgd2luZG93LmxvY2F0aW9uIGhhc2hcbiAgICAgKiBhc3N1bWVzIHNvbWV0aGluZyBsaWtlIGh0dHA6Ly91cmwvI2Zvbz1iYXImYmF6PWZvb1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YXJpYWJsZUlkXG4gICAgICogQHJldHVybiB7YW55fVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcXVlcnlWYXIodmFyaWFibGVJZDogc3RyaW5nKTogYW55IHtcbiAgICAgICAgaWYgKEFwcGxpY2F0aW9uLl9oYXNoUXVlcnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgQXBwbGljYXRpb24uX2dldEhhc2hRdWVyeSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBBcHBsaWNhdGlvbi5faGFzaFF1ZXJ5W3ZhcmlhYmxlSWRdIHx8IG51bGw7XG4gICAgfVxuXG59Il19
