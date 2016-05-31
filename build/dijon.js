var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
System.register("dijon/interfaces", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("dijon/mvc", ["dijon/application"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var application_1;
    var Model, CopyModel, Mediator, Notification;
    return {
        setters:[
            function (application_1_1) {
                application_1 = application_1_1;
            }],
        execute: function() {
            Model = (function () {
                function Model(dataKey, modelName) {
                    if (dataKey === void 0) { dataKey = null; }
                    if (modelName === void 0) { modelName = null; }
                    this.modelName = modelName;
                    this.app = application_1.Application.getInstance();
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
            exports_2("Model", Model);
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
            }(Model));
            exports_2("CopyModel", CopyModel);
            Mediator = (function () {
                function Mediator(_viewComponent, autoReg, mediatorName) {
                    if (_viewComponent === void 0) { _viewComponent = null; }
                    if (autoReg === void 0) { autoReg = true; }
                    if (mediatorName === void 0) { mediatorName = null; }
                    this._viewComponent = _viewComponent;
                    this.mediatorName = null;
                    this.app = application_1.Application.getInstance();
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
            exports_2("Mediator", Mediator);
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
            exports_2("Notification", Notification);
        }
    }
});
System.register("dijon/display", ["dijon/application"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var application_2;
    var Sprite, InvisibleButton, Group, Text, Component, NineSliceImage, Spine;
    return {
        setters:[
            function (application_2_1) {
                application_2 = application_2_1;
            }],
        execute: function() {
            Sprite = (function (_super) {
                __extends(Sprite, _super);
                function Sprite(x, y, key, frame, name, components) {
                    if (name === void 0) { name = "dSprite"; }
                    if (components === void 0) { components = null; }
                    _super.call(this, application_2.Application.getInstance().game, x, y, key, frame);
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
            exports_3("Sprite", Sprite);
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
            }(Sprite));
            exports_3("InvisibleButton", InvisibleButton);
            Group = (function (_super) {
                __extends(Group, _super);
                function Group(x, y, name, addToStage, components, enableBody, physicsBodyType) {
                    if (x === void 0) { x = 0; }
                    if (y === void 0) { y = 0; }
                    if (name === void 0) { name = "dGroup"; }
                    if (addToStage === void 0) { addToStage = false; }
                    if (components === void 0) { components = null; }
                    _super.call(this, application_2.Application.getInstance().game, null, name, addToStage, enableBody, physicsBodyType);
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
            exports_3("Group", Group);
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
                    _super.call(this, application_2.Application.getInstance().game, x, y, text, Text._addSettings({
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
                    if (!this.game || !this.game.device.cocoonJS) {
                        return;
                    }
                    else if (this.game.device.cocoonJS) {
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
            exports_3("Text", Text);
            Component = (function () {
                function Component() {
                    this.game = application_2.Application.getInstance().game;
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
            exports_3("Component", Component);
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
            }(Group));
            exports_3("NineSliceImage", NineSliceImage);
            Spine = (function (_super) {
                __extends(Spine, _super);
                function Spine(assetName, x, y) {
                    if (assetName === void 0) { assetName = ''; }
                    if (x === void 0) { x = 0; }
                    if (y === void 0) { y = 0; }
                    _super.call(this, application_2.Application.getInstance().game, x, y, Spine.createSpineData(assetName));
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
                    this.name = assetName;
                    this.skeleton.setToSetupPose();
                    this._createBounds();
                    this.update(0);
                    this.autoUpdate = false;
                    this.onAnimationComplete = this.state.onAnimationComplete;
                    this.hitArea = new Phaser.Rectangle(0, -this.skeleton.data.height, this.skeleton.data.width, this.skeleton.data.height);
                    if (Spine.AUTO_MESH) {
                        this.game.time.advancedTiming = true;
                        this.game.time.events.add(2000, this._initAutoMeshLoading, this);
                    }
                }
                Spine.prototype._initAutoMeshLoading = function () {
                    this.checkNonMeshThreshold();
                };
                Spine.prototype._checkAutoMeshFPS = function () {
                    if (this.game.time.fps < Spine.NON_MESH_FPS) {
                        this.loadNonMeshVersion();
                    }
                };
                Spine.prototype._disableAdvancedTiming = function () {
                    this.game.time.advancedTiming = false;
                };
                Spine.prototype._onCreateInternal = function () {
                    this._created = true;
                    this.onCreate.dispatch();
                    this._canUpdate = true;
                };
                Spine.prototype.update = function (dt) {
                    if (dt === void 0) { dt = Spine.DEFAULT_SPEED; }
                    if (this._paused || !this._canUpdate) {
                        return;
                    }
                    if (!this._created) {
                        this._onCreateInternal();
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
                Spine.prototype.checkNonMeshThreshold = function () {
                    this.game.time.events.repeat(500, 10, this._checkAutoMeshFPS, this);
                    this.game.time.events.add(5500, this._disableAdvancedTiming, this);
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
                    var spineAtlas = new spine.SpineRuntime.Atlas(application_2.Application.getInstance().game.cache.getText(assetName + '.atlas'), this.atlasCallbackFunction);
                    var spineJsonParser = new spine.SpineRuntime.SkeletonJsonParser(new spine.SpineRuntime.AtlasAttachmentParser(spineAtlas));
                    var skeletonData = spineJsonParser.readSkeletonData(application_2.Application.getInstance().game.cache.getJSON(assetName + '.json'));
                    return skeletonData;
                };
                Spine.atlasCallbackFunction = function (line, callback) {
                    var lineArr = line.split('@' + application_2.Application.getInstance().game.resolution + 'x');
                    var url = lineArr.join('');
                    callback(new PIXI.BaseTexture(application_2.Application.getInstance().game.cache.getImage(url), PIXI.scaleModes.DEFAULT));
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
                Spine.setAutoMesh = function (enabled, nonMeshSuffix, nonMeshFPS) {
                    if (enabled === void 0) { enabled = true; }
                    if (nonMeshSuffix === void 0) { nonMeshSuffix = Spine.DEFAULT_NON_MESH_SUFFIX; }
                    if (nonMeshFPS === void 0) { nonMeshFPS = Spine.DEFAULT_NON_MESH_FPS; }
                    Spine.AUTO_MESH = enabled;
                    Spine.NON_MESH_SUFFIX = nonMeshSuffix;
                    Spine.NON_MESH_FPS = nonMeshFPS;
                };
                Spine.DEFAULT_SPEED = 0.0167;
                Spine.AUTO_MESH = false;
                Spine.DEFAULT_NON_MESH_SUFFIX = '_nomesh';
                Spine.NON_MESH_SUFFIX = null;
                Spine.DEFAULT_NON_MESH_FPS = 35;
                Spine.NON_MESH_FPS = null;
                return Spine;
            }(PIXI.spine.Spine));
            exports_3("Spine", Spine);
        }
    }
});
System.register("dijon/utils", ["dijon/application", "dijon/display"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var application_3, display_1;
    var Util, Logger, Device, Textures, Placeholders, Time, Notifications;
    return {
        setters:[
            function (application_3_1) {
                application_3 = application_3_1;
            },
            function (display_1_1) {
                display_1 = display_1_1;
            }],
        execute: function() {
            Util = (function () {
                function Util() {
                }
                Util.isNumber = function (value) {
                    return (+value === +value);
                };
                return Util;
            }());
            exports_4("Util", Util);
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
            exports_4("Logger", Logger);
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
            exports_4("Device", Device);
            Textures = (function () {
                function Textures() {
                }
                Object.defineProperty(Textures, "game", {
                    get: function () {
                        return application_3.Application.getInstance().game;
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
            exports_4("Textures", Textures);
            Placeholders = (function () {
                function Placeholders() {
                }
                Object.defineProperty(Placeholders, "game", {
                    get: function () {
                        return application_3.Application.getInstance().game;
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
                    var upImage = Placeholders.image(0, 0, Textures.roundedRect(width, height, 10, defaultColor), "Up");
                    var overImage = Placeholders.image(0, 0, Textures.roundedRect(width, height, 10, overColor), "Over");
                    var downImage = Placeholders.image(0, 0, Textures.roundedRect(width, height, 10, downColor), "Down");
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
            exports_4("Placeholders", Placeholders);
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
                    return application_3.Application.getInstance().game.time.events.add.apply(application_3.Application.getInstance().game.time.events, params);
                };
                return Time;
            }());
            exports_4("Time", Time);
            Notifications = (function () {
                function Notifications() {
                }
                Notifications.ASSET_MANAGER_DATA_SET = 'dijonAssetManagerDataSet';
                Notifications.ASSET_MANAGER_ASSETS_CLEARED = 'dijonAssetManagerAssetsCleared';
                Notifications.MOUSE_LEAVE_GLOBAL = 'mouseOutGlobal';
                Notifications.MOUSE_ENTER_GLOBAL = 'mouseEnterGlobal';
                return Notifications;
            }());
            exports_4("Notifications", Notifications);
        }
    }
});
System.register("dijon/core", ["dijon/application", "dijon/utils", "dijon/display"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var application_4, utils_1, display_2;
    var AnalyticsManager, AnalyticsException, AssetManager, AudioManager, Game, GameObjectFactory, SequenceManager, State, StorageManager, TransitionManager;
    return {
        setters:[
            function (application_4_1) {
                application_4 = application_4_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            },
            function (display_2_1) {
                display_2 = display_2_1;
            }],
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
            exports_5("AnalyticsManager", AnalyticsManager);
            AnalyticsException = (function () {
                function AnalyticsException(message) {
                    this.message = message;
                    this.name = 'AnalyticsException';
                }
                return AnalyticsException;
            }());
            exports_5("AnalyticsException", AnalyticsException);
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
                    this.app = application_4.Application.getInstance();
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
                    this.sendNotification(utils_1.Notifications.ASSET_MANAGER_DATA_SET, this._data);
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
                    this.sendNotification(utils_1.Notifications.ASSET_MANAGER_ASSETS_CLEARED, id);
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
                AssetManager.ASSET_LIST = 'assetList';
                AssetManager.RESOLUTION_2X = "@2x";
                AssetManager.RESOLUTION_3X = "@3x";
                return AssetManager;
            }());
            exports_5("AssetManager", AssetManager);
            AudioManager = (function () {
                function AudioManager() {
                    this._defaultVolume = 1;
                    this._sprites = {};
                    this._sounds = {};
                    this._markerLookup = {};
                    this.game = application_4.Application.getInstance().game;
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
            exports_5("AudioManager", AudioManager);
            Game = (function (_super) {
                __extends(Game, _super);
                function Game(config) {
                    _super.call(this, config);
                    this.onWorldInputDisabled = new Phaser.Signal();
                    this.onWorldInputEnabled = new Phaser.Signal();
                }
                Game.prototype.boot = function () {
                    _super.prototype.boot.call(this);
                    this.app = application_4.Application.getInstance();
                    this.asset = new AssetManager();
                    this.sequence = new SequenceManager();
                    this.transition = new TransitionManager();
                    this.storage = new StorageManager();
                    this.audio = new AudioManager();
                    this.analytics = new AnalyticsManager(this.config.analytics);
                    this.add = null;
                    this.add = new GameObjectFactory(this);
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
                    application_4.Application.getInstance().sendNotification(utils_1.Notifications.MOUSE_LEAVE_GLOBAL);
                };
                Game.prototype.mouseOver = function () {
                    application_4.Application.getInstance().sendNotification(utils_1.Notifications.MOUSE_ENTER_GLOBAL);
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
            exports_5("Game", Game);
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
                    return group.add(new display_2.Sprite(x, y, key, frame, name, components));
                };
                GameObjectFactory.prototype.dGroup = function (x, y, name, addToStage, components, enableBody, physicsBodyType, group) {
                    if (group === undefined && addToStage !== true) {
                        group = this.targetGroup;
                        this.targetGroup = null;
                        return group.add(new display_2.Group(x, y, name, addToStage, components, enableBody, physicsBodyType));
                    }
                    return new display_2.Group(x, y, name, addToStage, components, enableBody, physicsBodyType);
                };
                GameObjectFactory.prototype.dText = function (x, y, text, fontName, fontSize, fontColor, fontAlign, wordWrap, width, lineSpacing, settings, group) {
                    if (group === undefined) {
                        group = this.targetGroup;
                    }
                    this.targetGroup = null;
                    return group.add(new display_2.Text(x, y, text, fontName, fontSize, fontColor, fontAlign, wordWrap, width, lineSpacing, settings));
                };
                GameObjectFactory.prototype.spine = function (assetName, x, y, group) {
                    if (assetName === void 0) { assetName = ''; }
                    if (x === void 0) { x = 0; }
                    if (y === void 0) { y = 0; }
                    if (group === undefined) {
                        group = this.targetGroup;
                    }
                    this.targetGroup = null;
                    return group.add(new display_2.Spine(assetName, x, y));
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
            exports_5("GameObjectFactory", GameObjectFactory);
            SequenceManager = (function () {
                function SequenceManager() {
                    this._defaultInterval = 20;
                    this.game = application_4.Application.getInstance().game;
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
            exports_5("SequenceManager", SequenceManager);
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
                        return application_4.Application.getInstance();
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
            exports_5("State", State);
            StorageManager = (function () {
                function StorageManager() {
                    this.game = application_4.Application.getInstance().game;
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
            exports_5("StorageManager", StorageManager);
            TransitionManager = (function () {
                function TransitionManager() {
                    this.onTransitionOutComplete = new Phaser.Signal();
                    this.onTransitionInComplete = new Phaser.Signal();
                    this._transition = null;
                    this._transitions = {};
                    this._exceptions = {};
                    this._fromState = null;
                    this._toState = null;
                    this.game = application_4.Application.getInstance().game;
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
            exports_5("TransitionManager", TransitionManager);
        }
    }
});
System.register("dijon/application", ["dijon/core", "dijon/mvc"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_1, mvc_1;
    var Application;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mvc_1_1) {
                mvc_1 = mvc_1_1;
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
                    this.game = new core_1.Game({
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
            exports_6("Application", Application);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpam9uL212Yy50cyIsImRpam9uL2Rpc3BsYXkudHMiLCJkaWpvbi91dGlscy50cyIsImRpam9uL2NvcmUudHMiLCJkaWpvbi9hcHBsaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBT0ksZUFBWSxPQUFzQixFQUFVLFNBQXdCO29CQUF4RCx1QkFBc0IsR0FBdEIsY0FBc0I7b0JBQUUseUJBQWdDLEdBQWhDLGdCQUFnQztvQkFBeEIsY0FBUyxHQUFULFNBQVMsQ0FBZTtvQkFDaEUsSUFBSSxDQUFDLEdBQUcsR0FBRyx5QkFBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO29CQUUxQixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzFCLENBQUM7b0JBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRU0sMEJBQVUsR0FBakI7Z0JBRUEsQ0FBQztnQkFFTSx5QkFBUyxHQUFoQjtnQkFFQSxDQUFDO2dCQUVTLDRCQUFZLEdBQXRCLFVBQXVCLEdBQVc7b0JBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDO2dCQUNqRCxDQUFDO2dCQUVNLHVCQUFPLEdBQWQsVUFBZSxPQUFlO29CQUMxQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxHQUFHLE9BQU8sR0FBRyw4QkFBOEIsQ0FBQyxDQUFDO3dCQUM1RixNQUFN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QUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBRWxRLElBQUksQ0FBQyxDQUFDLEdBQXNCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBRWpNLElBQUksQ0FBQyxFQUFFLEdBQWlCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFFMUgsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFB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LEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0JBQ25HLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ2hELElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0JBQ3hHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7b0JBRWpELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTt3QkFDMUYsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7b0JBQ25HLENBQUM7b0JBRUQsSUFBSSxDQUFD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QVUsQ0FBQyxJQUFJLElBQUksQ0FBQztnQkFDdEQsQ0FBQztnQkFyTmdCLG9CQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNoQix5QkFBYSxHQUFHLDRDQUE0QyxDQUFDO2dCQXNObEYsa0JBQUM7WUFBRCxDQXpOQSxBQXlOQyxJQUFBO1lBek5ELHFDQXlOQyxDQUFBIiwiZmlsZSI6ImRpam9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJTm90aWZpY2F0aW9uLElPYnNlcnZlcn0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7QXBwbGljYXRpb259IGZyb20gJy4vYXBwbGljYXRpb24nO1xuaW1wb3J0IHtHYW1lfSBmcm9tICcuL2NvcmUnO1xuLyoqXG4gKiBNb2RlbFxuICovXG5cbmV4cG9ydCBjbGFzcyBNb2RlbCB7XG4gICAgcHVibGljIGFwcDogQXBwbGljYXRpb247XG4gICAgcHVibGljIGdhbWU6IEdhbWU7XG4gICAgcHJvdGVjdGVkIF9kYXRhOiBhbnk7XG5cbiAgICBwdWJsaWMgc3RhdGljIE1PREVMX05BTUU6IHN0cmluZyA9ICdNb2RlbCc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhS2V5OiBzdHJpbmcgPSBudWxsLCBwcml2YXRlIG1vZGVsTmFtZTogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICB0aGlzLmFwcCA9IEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuZ2FtZSA9IHRoaXMuYXBwLmdhbWU7XG5cbiAgICAgICAgaWYgKGRhdGFLZXkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YShkYXRhS2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYXBwLnJlZ2lzdGVyTW9kZWwodGhpcyk7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBvblJlZ2lzdGVyKCk6dm9pZHtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBvblJlbW92ZWQoKTp2b2lke1xuICAgICAgICBcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0S2V5RXhpc3RzKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUuY2FjaGUuZ2V0SlNPTihrZXkpICE9PSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXREYXRhKGRhdGFLZXk6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGlmICghdGhpcy5nZXRLZXlFeGlzdHMoZGF0YUtleSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNb2RlbDo6IGNhbm5vdCBzZXQgZGF0YSBmcm9tIGtleSAnICsgZGF0YUtleSArICcuIElzIGl0IGluIHRoZSBQaGFzZXIgY2FjaGU/Jyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kYXRhID0gdGhpcy5nYW1lLmNhY2hlLmdldEpTT04oZGF0YUtleSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXREYXRhKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFwcC5yZW1vdmVNb2RlbCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxOYW1lIHx8IE1vZGVsLk1PREVMX05BTUU7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29weU1vZGVsIGV4dGVuZHMgTW9kZWwge1xuICAgIHB1YmxpYyBzdGF0aWMgTU9ERUxfTkFNRTogc3RyaW5nID0gJ2NvcHlNb2RlbCc7XG5cbiAgICBwcml2YXRlIF9sYW5ndWFnZXM6IHsgW2xhbmd1YWdlTmFtZTogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGFLZXk6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgc3VwZXIoZGF0YUtleSk7XG5cbiAgICAgICAgdGhpcy5fbGFuZ3VhZ2VzWydlbiddID0gdGhpcy5fZGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29weShncm91cElkOiBzdHJpbmcsIGl0ZW1JZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29weUdyb3VwKGdyb3VwSWQpW2l0ZW1JZF07XG4gICAgfVxuXG4gICAgcHVibGljIGdldENvcHlHcm91cChncm91cElkOiBzdHJpbmcpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVtncm91cElkXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkTGFuZ3VhZ2UobGFuZ3VhZ2VJZDogc3RyaW5nLCBkYXRhS2V5OiBzdHJpbmcpOiBhbnkge1xuICAgICAgICBpZiAoIXRoaXMuZ2V0S2V5RXhpc3RzKGRhdGFLZXkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nhbm5vdCBhZGQgYW4gYWx0ZXJuYXRlIGxhbmd1YWdlIGZyb20ga2V5ICcgKyBkYXRhS2V5ICsgJy4gSXMgaXQgaW4gdGhlIFBoYXNlciBjYWNoZT8nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2xhbmd1YWdlc1tsYW5ndWFnZUlkXSA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRKU09OKGRhdGFLZXkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VMYW5ndWFnZShsYW5ndWFnZUlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9sYW5ndWFnZXNbbGFuZ3VhZ2VJZF0gPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd0aGVyZSBpcyBubyBsYW5ndWFnZSAnICsgbGFuZ3VhZ2VJZCk7XG5cbiAgICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuX2xhbmd1YWdlc1tsYW5ndWFnZUlkXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIENvcHlNb2RlbC5NT0RFTF9OQU1FO1xuICAgIH1cbn1cblxuLyoqXG4gKiBNZWRpYXRvclxuICovXG5cbmV4cG9ydCBjbGFzcyBNZWRpYXRvciBpbXBsZW1lbnRzIElPYnNlcnZlciB7XG4gICAgcHVibGljIHN0YXRpYyBNRURJQVRPUl9OQU1FOiBzdHJpbmcgPSAnTWVkaWF0b3InO1xuXG4gICAgcHJvdGVjdGVkIG1lZGlhdG9yTmFtZTogc3RyaW5nID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgYXBwOiBBcHBsaWNhdGlvbjtcbiAgICBwcm90ZWN0ZWQgZ2FtZTogR2FtZTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfdmlld0NvbXBvbmVudDogYW55ID0gbnVsbCwgYXV0b1JlZzogYm9vbGVhbiA9IHRydWUsIG1lZGlhdG9yTmFtZTogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICB0aGlzLmFwcCA9IEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuZ2FtZSA9IHRoaXMuYXBwLmdhbWU7XG4gICAgICAgIHRoaXMubWVkaWF0b3JOYW1lID0gbWVkaWF0b3JOYW1lO1xuXG4gICAgICAgIGlmIChhdXRvUmVnKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICBwcm90ZWN0ZWQgcmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXBwLnJlZ2lzdGVyTWVkaWF0b3IodGhpcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlbW92ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hcHAucmVtb3ZlTWVkaWF0b3IodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uUmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgICAgIC8vIG92ZXJyaWRlIG1lIGZyZWVseVxuICAgIH1cblxuICAgIHB1YmxpYyBvblJlbW92ZWQoKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbGlzdE5vdGlmaWNhdGlvbkludGVyZXN0cygpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFuZGxlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogSU5vdGlmaWNhdGlvbikge1xuICAgICAgICAvKipcbiAgICAgICAgICogZGVmYXVsdCBpbW1wbGVtZW50YXRpb24gd291bGQgbG9vayBzb21ldGhpbmcgbGlrZTpcbiAgICAgICAgICogc3dpdGNoKCBub3RpZmljYXRpb246IGRpam9uLklOb3RpZmljYXRpb24gKXtcbiAgICAgICAgICogXHRcdGNhc2UgTm90aWZpY2F0aW9ucy5TT01FVEhJTkc6XG4gICAgICAgICAqIFx0XHRcdC8vIGRvIHNvbWV0aGluZ1xuICAgICAgICAgKiBcdFx0XHRicmVhaztcbiAgICAgICAgICogXHRcdGNhc2UgTm90aWZpY2F0aW9ucy5TT01FVEhJTkdfRUxTRTpcbiAgICAgICAgICogXHRcdFx0Ly8gZG8gc29tZXRoaW5nIGVsc2VcbiAgICAgICAgICogXHRcdFx0YnJlYWs7XG4gICAgICAgICAqIH1cbiAgICAgICAgICovXG4gICAgfVxuXG4gICAgcHVibGljIHNlbmROb3RpZmljYXRpb24obm90aWZpY2F0aW9uTmFtZTogc3RyaW5nLCBub3RpZmljYXRpb25Cb2R5PzogYW55KSB7XG4gICAgICAgIHRoaXMuYXBwLnNlbmROb3RpZmljYXRpb24obm90aWZpY2F0aW9uTmFtZSwgbm90aWZpY2F0aW9uQm9keSk7XG4gICAgfVxuXG4gICAgLy8gZ2V0dGVyIC8gc2V0dGVyXG4gICAgcHVibGljIHNldCB2aWV3Q29tcG9uZW50KHZpZXdDb21wb25lbnQ6IGFueSkge1xuICAgICAgICB0aGlzLl92aWV3Q29tcG9uZW50ID0gdmlld0NvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHZpZXdDb21wb25lbnQoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZXdDb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLm1lZGlhdG9yTmFtZSB8fCBNZWRpYXRvci5NRURJQVRPUl9OQU1FO1xuICAgIH1cbn1cblxuLyoqXG4gKiBOb3RpZmljYXRpb25cbiAqL1xuXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uIGltcGxlbWVudHMgSU5vdGlmaWNhdGlvbiB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmFtZTogc3RyaW5nLCBwcml2YXRlIF9ib2R5OiBhbnkgPSBudWxsKSB7IH1cblxuICAgIHB1YmxpYyBnZXROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRCb2R5KGJvZHk6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9ib2R5ID0gYm9keTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Qm9keSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYm9keTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fYm9keSA9IG51bGw7XG4gICAgICAgIHRoaXMuX25hbWUgPSBudWxsO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi9hcHBsaWNhdGlvbic7XG5pbXBvcnQge0RldmljZX0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge0dhbWUsIEdhbWVPYmplY3RGYWN0b3J5fSBmcm9tICcuL2NvcmUnO1xuaW1wb3J0IHtNZWRpYXRvcn0gZnJvbSAnLi9tdmMnO1xuXG4vKipcbiAqIFNwcml0ZVxuICovXG5leHBvcnQgY2xhc3MgU3ByaXRlIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XG4gICAgcHVibGljIGdhbWU6IEdhbWU7XG5cbiAgICBwcm90ZWN0ZWQgX2hhc0NvbXBvbmVudHM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcm90ZWN0ZWQgX2NvbXBvbmVudEtleXM6IHN0cmluZ1tdID0gW107XG4gICAgcHJvdGVjdGVkIF9jb21wb25lbnRzOiB7IFtjb21wb25lbnROYW1lOiBzdHJpbmddOiBDb21wb25lbnQgfSA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoeD86IG51bWJlciwgeT86IG51bWJlciwga2V5Pzogc3RyaW5nIHwgUGhhc2VyLlJlbmRlclRleHR1cmUgfCBQaGFzZXIuQml0bWFwRGF0YSB8IFBJWEkuVGV4dHVyZSwgZnJhbWU/OiBzdHJpbmcgfCBudW1iZXIsIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSBcImRTcHJpdGVcIiwgY29tcG9uZW50czogQ29tcG9uZW50W10gPSBudWxsKSB7XG4gICAgICAgIHN1cGVyKEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZSwgeCwgeSwga2V5LCBmcmFtZSk7XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudHMpXG4gICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudHMoY29tcG9uZW50cyk7XG4gICAgfVxuICAgIC8vIFBoYXNlci5TcHJpdGUgb3ZlcnJpZGVzXG4gICAgLyoqXG4gICAgKiBjYWxsZWQgZXZlcnkgZnJhbWVcbiAgICAqIGl0ZXJhdGVzIHRoZSBjb21wb25lbnRzIGxpc3QgYW5kIGNhbGxzIGNvbXBvbmVudC51cGRhdGUoKSBvbiBlYWNoIGNvbXBvbmVudFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqIEBvdmVycmlkZVxuICAgICovXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2hhc0NvbXBvbmVudHMpXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudHMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHJlbW92ZXMgYWxsIGNvbXBvbmVudHNcbiAgICAqIEByZXR1cm4ge1BoYXNlci5Hcm91cC5kZXN0cm95fVxuICAgICogQG92ZXJyaWRlXG4gICAgKi9cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxDb21wb25lbnRzKCk7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICAvKipcbiAgICAqIGluaXRpYWxpemUgdmFyaWFibGVzXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7IH1cblxuICAgIC8qKlxuICAgICogYWRkIHZpc3VhbCBlbGVtZW50c1xuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHByb3RlY3RlZCBidWlsZEludGVyZmFjZSgpOiB2b2lkIHsgfVxuXG4gICAgLyoqXG4gICAgKiB1cGRhdGVzIHRoZSBpbnRlcm5hbCBsaXN0IG9mIGNvbXBvbmVudCBrZXlzIChzbyB3ZSBkb24ndCBoYXZlIHRvIGNhbGwgT2JqZWN0LmtleXMoKSBhbGwgdGhlIHRpbWUpXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHJpdmF0ZSBfdXBkYXRlQ29tcG9uZW50S2V5cygpIHtcbiAgICAgICAgdGhpcy5fY29tcG9uZW50S2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuX2NvbXBvbmVudHMpO1xuICAgICAgICB0aGlzLl9oYXNDb21wb25lbnRzID0gdGhpcy5fY29tcG9uZW50S2V5cy5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgLyoqXG4gICAgKiBhdHRhY2hlcyBhIGxpc3Qgb2YgY29tcG9uZW50cyB0byB0aGUgRGlqb24uVUlHcm91cFxuICAgICogQHBhcmFtIHtBcnJheX0gY29tcG9uZW50cyB0aGUgbGlzdCBvZiBjb21wb25lbnRzIHRvIGFkZFxuICAgICovXG4gICAgcHVibGljIGFkZENvbXBvbmVudHMgPSBmdW5jdGlvbiAoY29tcG9uZW50czogQ29tcG9uZW50W10pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzLmxlbmd0aCA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Rpam9uLlVJR3JvdXAgY29tcG9uZW50cyBtdXN0IGJlIGFuIGFycmF5Jyk7XG5cbiAgICAgICAgd2hpbGUgKGNvbXBvbmVudHMubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KGNvbXBvbmVudHMuc2hpZnQoKSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICogYXR0YWNoZXMgYSBjb21wb25lbnQgdG8gdGhlIERpam9uLlVJR3JvdXBcbiAgICAqIEBwYXJhbSB7ZGlqb24uQ29tcG9uZW50fSBjb21wb25lbnQgdG8gYmUgYXR0YWNoZWRcbiAgICAqL1xuICAgIHB1YmxpYyBhZGRDb21wb25lbnQoY29tcG9uZW50OiBDb21wb25lbnQpOiBDb21wb25lbnQge1xuICAgICAgICBjb21wb25lbnQuc2V0T3duZXIodGhpcyk7XG4gICAgICAgIGNvbXBvbmVudC5pbml0KCk7XG4gICAgICAgIGNvbXBvbmVudC5idWlsZEludGVyZmFjZSgpO1xuXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHNbY29tcG9uZW50Lm5hbWVdID0gY29tcG9uZW50O1xuICAgICAgICB0aGlzLl91cGRhdGVDb21wb25lbnRLZXlzKCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgKiBpdGVyYXRlcyB0aHJvdWdoIHRoZSBsaXN0IG9mIGNvbXBvbmVudHMgYW5kIHVwZGF0ZXMgZWFjaCBvbmVcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlQ29tcG9uZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY29tcG9uZW50S2V5cy5mb3JFYWNoKFxuICAgICAgICAgICAgY29tcG9uZW50TmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnQoY29tcG9uZW50TmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiB1cGRhdGVzIGFuIGF0dGFjaGVkIGNvbXBvbmVudCAoY2FsbHMgY29tcG9uZW50LnVwZGF0ZSgpKVxuICAgICogQHBhcmFtICB7U3RyaW5nfSBjb21wb25lbnROYW1lIHRoZSBuYW1lIG9mIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIHVwZGF0ZUNvbXBvbmVudChjb21wb25lbnROYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY29tcG9uZW50c1tjb21wb25lbnROYW1lXS51cGRhdGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHJlbW92ZXMgYWxsIHRoZSBjb21wb25lbnRzIGN1cnJlbnRseSBhdHRhY2hlZFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyByZW1vdmVBbGxDb21wb25lbnRzKCkge1xuICAgICAgICB3aGlsZSAodGhpcy5fY29tcG9uZW50S2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNvbXBvbmVudCh0aGlzLl9jb21wb25lbnRLZXlzLnBvcCgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICogcmVtb3ZlcyBhIHNwZWNpZmljIGNvbXBvbmVudFxuICAgICogQHBhcmFtICB7U3RyaW5nfSBjb21wb25lbnROYW1lIHRoZSBuYW1lIG9mIHRoZSBjb21wb25lbnQgdG8gcmVtb3ZlXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIHJlbW92ZUNvbXBvbmVudChjb21wb25lbnROYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB0aGlzLl9jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5fY29tcG9uZW50c1tjb21wb25lbnROYW1lXSA9IG51bGw7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdO1xuXG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvbXBvbmVudEtleXMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmxhdHRlbihkZWxheTogbnVtYmVyID0gMCk6IHZvaWQge1xuICAgICAgICBpZiAoZGVsYXkgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGVBc0JpdG1hcCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKGRlbGF5LCAoKSA9PiB7IHRoaXMuY2FjaGVBc0JpdG1hcCA9IHRydWUgfSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdW5GbGF0dGVuKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNhY2hlQXNCaXRtYXAgPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcmVzb2x1dGlvbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXh0dXJlLmJhc2VUZXh0dXJlLnJlc29sdXRpb247XG4gICAgfVxufVxuXG4vKipcbiAqIEludmlzaWJsZUJ1dHRvblxuICovXG5cbmV4cG9ydCBjbGFzcyBJbnZpc2libGVCdXR0b24gZXh0ZW5kcyBTcHJpdGUge1xuICAgIHByaXZhdGUgX2hpdFdpZHRoOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfaGl0SGVpZ2h0OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgbmFtZTogc3RyaW5nLCB3OiBudW1iZXIsIGg6IG51bWJlcikge1xuICAgICAgICBzdXBlcih4LCB5LCBudWxsLCBudWxsLCBuYW1lKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMuYnVpbGRJbnRlcmZhY2UoKTtcbiAgICAgICAgdGhpcy5zZXRTaXplKHcsIGgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KCkge1xuICAgICAgICB0aGlzLmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIGJ1aWxkSW50ZXJmYWNlKCkge1xuICAgICAgICB0aGlzLl9hZGRIaXRSZWN0KCk7XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgcHJpdmF0ZSBfYWRkSGl0UmVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2hpdFdpZHRoID4gMCAmJiB0aGlzLl9oaXRIZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmhpdEFyZWEgPSBuZXcgUGhhc2VyLlJlY3RhbmdsZSgwLCAwLCB0aGlzLl9oaXRXaWR0aCwgdGhpcy5faGl0SGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgcHVibGljIHNldFNpemUodywgaCkge1xuICAgICAgICB0aGlzLl9oaXRXaWR0aCA9IHcgfHwgMDtcbiAgICAgICAgdGhpcy5faGl0SGVpZ2h0ID0gaCB8fCAwO1xuXG4gICAgICAgIHRoaXMuX2FkZEhpdFJlY3QoKTtcbiAgICB9XG59XG5cbi8qKlxuICogR3JvdXBcbiAqL1xuZXhwb3J0IGNsYXNzIEdyb3VwIGV4dGVuZHMgUGhhc2VyLkdyb3VwIHtcbiAgICBwdWJsaWMgZ2FtZTogR2FtZTtcblxuICAgIHByb3RlY3RlZCBfaGFzQ29tcG9uZW50czogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCBfY29tcG9uZW50S2V5czogc3RyaW5nW10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgX2NvbXBvbmVudHM6IHsgW2NvbXBvbmVudE5hbWU6IHN0cmluZ106IENvbXBvbmVudCB9ID0ge307XG5cbiAgICBwcm90ZWN0ZWQgX21lZGlhdG9yOiBNZWRpYXRvciA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCBwdWJsaWMgbmFtZTogc3RyaW5nID0gXCJkR3JvdXBcIiwgYWRkVG9TdGFnZTogYm9vbGVhbiA9IGZhbHNlLCBjb21wb25lbnRzOiBDb21wb25lbnRbXSA9IG51bGwsIGVuYWJsZUJvZHk/OiBib29sZWFuLCBwaHlzaWNzQm9keVR5cGU/OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lLCBudWxsLCBuYW1lLCBhZGRUb1N0YWdlLCBlbmFibGVCb2R5LCBwaHlzaWNzQm9keVR5cGUpO1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24uc2V0KHgsIHkpO1xuXG4gICAgICAgIGlmICghYWRkVG9TdGFnZSlcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hZGQuZXhpc3RpbmcodGhpcyk7XG5cblxuICAgICAgICBpZiAoY29tcG9uZW50cylcbiAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50cyhjb21wb25lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBQaGFzZXIuR3JvdXAgb3ZlcnJpZGVzXG4gICAgLyoqXG4gICAgKiBjYWxsZWQgZXZlcnkgZnJhbWVcbiAgICAqIGl0ZXJhdGVzIHRoZSBjb21wb25lbnRzIGxpc3QgYW5kIGNhbGxzIGNvbXBvbmVudC51cGRhdGUoKSBvbiBlYWNoIGNvbXBvbmVudFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqIEBvdmVycmlkZVxuICAgICovXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIudXBkYXRlKCk7XG4gICAgICAgIGlmICh0aGlzLl9oYXNDb21wb25lbnRzKVxuICAgICAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiByZW1vdmVzIGFsbCBjb21wb25lbnRzXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuR3JvdXAuZGVzdHJveX1cbiAgICAqIEBvdmVycmlkZVxuICAgICovXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLnJlbW92ZU1lZGlhdG9yKCk7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICAvKipcbiAgICAqIGluaXRpYWxpemUgdmFyaWFibGVzXG4gICAgKiBhZGQgbWVkaWF0b3IsIGlmIG5lZWRlZFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQgeyB9XG5cbiAgICAvKipcbiAgICAqIGFkZCB2aXN1YWwgZWxlbWVudHNcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwcm90ZWN0ZWQgYnVpbGRJbnRlcmZhY2UoKTogdm9pZCB7IH1cblxuICAgIC8qKlxuICAgICogdXBkYXRlcyB0aGUgaW50ZXJuYWwgbGlzdCBvZiBjb21wb25lbnQga2V5cyAoc28gd2UgZG9uJ3QgaGF2ZSB0byBjYWxsIE9iamVjdC5rZXlzKCkgYWxsIHRoZSB0aW1lKVxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHByaXZhdGUgX3VwZGF0ZUNvbXBvbmVudEtleXMoKSB7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudEtleXMgPSBPYmplY3Qua2V5cyh0aGlzLl9jb21wb25lbnRzKTtcbiAgICAgICAgdGhpcy5faGFzQ29tcG9uZW50cyA9IHRoaXMuX2NvbXBvbmVudEtleXMubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuICAgIC8qKlxuICAgICogYXR0YWNoZXMgYSBsaXN0IG9mIGNvbXBvbmVudHMgdG8gdGhlIERpam9uLlVJR3JvdXBcbiAgICAqIEBwYXJhbSB7QXJyYXl9IGNvbXBvbmVudHMgdGhlIGxpc3Qgb2YgY29tcG9uZW50cyB0byBhZGRcbiAgICAqL1xuICAgIHB1YmxpYyBhZGRDb21wb25lbnRzID0gZnVuY3Rpb24gKGNvbXBvbmVudHM6IENvbXBvbmVudFtdKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cy5sZW5ndGggPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEaWpvbi5VSUdyb3VwIGNvbXBvbmVudHMgbXVzdCBiZSBhbiBhcnJheScpO1xuXG4gICAgICAgIHdoaWxlIChjb21wb25lbnRzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChjb21wb25lbnRzLnNoaWZ0KCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogYXR0YWNoZXMgYSBjb21wb25lbnQgdG8gdGhlIERpam9uLlVJR3JvdXBcbiAgICAqIEBwYXJhbSB7ZGlqb24uQ29tcG9uZW50fSBjb21wb25lbnQgdG8gYmUgYXR0YWNoZWRcbiAgICAqL1xuICAgIHB1YmxpYyBhZGRDb21wb25lbnQoY29tcG9uZW50OiBDb21wb25lbnQpOiBDb21wb25lbnQge1xuICAgICAgICBjb21wb25lbnQuc2V0T3duZXIodGhpcyk7XG4gICAgICAgIGNvbXBvbmVudC5pbml0KCk7XG4gICAgICAgIGNvbXBvbmVudC5idWlsZEludGVyZmFjZSgpO1xuXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHNbY29tcG9uZW50Lm5hbWVdID0gY29tcG9uZW50O1xuICAgICAgICB0aGlzLl91cGRhdGVDb21wb25lbnRLZXlzKCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGl0ZXJhdGVzIHRocm91Z2ggdGhlIGxpc3Qgb2YgY29tcG9uZW50cyBhbmQgdXBkYXRlcyBlYWNoIG9uZVxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyB1cGRhdGVDb21wb25lbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9jb21wb25lbnRLZXlzLmZvckVhY2goXG4gICAgICAgICAgICBjb21wb25lbnROYW1lID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudChjb21wb25lbnROYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHVwZGF0ZXMgYW4gYXR0YWNoZWQgY29tcG9uZW50IChjYWxscyBjb21wb25lbnQudXBkYXRlKCkpXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGNvbXBvbmVudE5hbWUgdGhlIG5hbWUgb2YgdGhlIGNvbXBvbmVudCB0byB1cGRhdGVcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudE5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLl9jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogcmVtb3ZlcyBhbGwgdGhlIGNvbXBvbmVudHMgY3VycmVudGx5IGF0dGFjaGVkXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIHJlbW92ZUFsbENvbXBvbmVudHMoKSB7XG4gICAgICAgIHdoaWxlICh0aGlzLl9jb21wb25lbnRLZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ29tcG9uZW50KHRoaXMuX2NvbXBvbmVudEtleXMucG9wKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiByZW1vdmVzIGEgc3BlY2lmaWMgY29tcG9uZW50XG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGNvbXBvbmVudE5hbWUgdGhlIG5hbWUgb2YgdGhlIGNvbXBvbmVudCB0byByZW1vdmVcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgcmVtb3ZlQ29tcG9uZW50KGNvbXBvbmVudE5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbXBvbmVudHNbY29tcG9uZW50TmFtZV0gPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHNbY29tcG9uZW50TmFtZV0uZGVzdHJveSgpO1xuICAgICAgICB0aGlzLl9jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdID0gbnVsbDtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2NvbXBvbmVudHNbY29tcG9uZW50TmFtZV07XG5cbiAgICAgICAgdGhpcy5fdXBkYXRlQ29tcG9uZW50S2V5cygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBmbGF0dGVuKGRlbGF5OiBudW1iZXIgPSAwKTogdm9pZCB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jYWNoZUFzQml0bWFwID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoZGVsYXksICgpID0+IHsgdGhpcy5jYWNoZUFzQml0bWFwID0gdHJ1ZSB9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB1bkZsYXR0ZW4oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2FjaGVBc0JpdG1hcCA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiByZW1vdmVzIHRoZSBtZWRpYXRvciwgaWYgaXQgZXhpc3RzXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIHJlbW92ZU1lZGlhdG9yKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX21lZGlhdG9yKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbWVkaWF0b3IuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLl9tZWRpYXRvciA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhZGRJbnRlcm5hbCgpOiBHYW1lT2JqZWN0RmFjdG9yeSB7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQudGFyZ2V0R3JvdXAgPSB0aGlzO1xuICAgICAgICByZXR1cm4gdGhpcy5nYW1lLmFkZDtcbiAgICB9XG59XG5cbi8qKlxuICogVGV4dFxuICovXG5leHBvcnQgY2xhc3MgVGV4dCBleHRlbmRzIFBoYXNlci5UZXh0IHtcbiAgICAvLyBjb25zdGFudHNcbiAgICBwdWJsaWMgc3RhdGljIERFRkFVTFRfRk9OVF9TSVpFOiBudW1iZXIgPSAxMjtcbiAgICBwdWJsaWMgc3RhdGljIERFRkFVTFRfRk9OVF9DT0xPUjogc3RyaW5nID0gXCIjMDAwMDAwXCI7XG4gICAgcHVibGljIHN0YXRpYyBERUZBVUxUX0ZPTlQ6IHN0cmluZyA9IFwiSGVsdmV0aWNhIE5ldWUsIEFyaWFsXCI7XG4gICAgcHVibGljIHN0YXRpYyBHTE9CQUxfUEFERElOR19YOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBzdGF0aWMgR0xPQkFMX1BBRERJTkdfWTogbnVtYmVyID0gMDtcblxuICAgIHB1YmxpYyBnYW1lOiBHYW1lO1xuICAgIHB1YmxpYyBzdHlsZTogYW55O1xuICAgIHB1YmxpYyBvbkFuaW1hdGlvbkNvbXBsZXRlOiBQaGFzZXIuU2lnbmFsID0gbmV3IFBoYXNlci5TaWduYWwoKTtcblxuICAgIHByb3RlY3RlZCBfY2FuVXBkYXRlID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIF9yZXBlYXRUaW1lcjogUGhhc2VyLlRpbWVyRXZlbnQ7XG4gICAgcHJvdGVjdGVkIF9kZWxheVRpbWVyOiBQaGFzZXIuVGltZXJFdmVudDtcbiAgICBwcm90ZWN0ZWQgX2xvd2VyY2FzZVRleHQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgX2xldHRlclRpbWU6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX3RleHRMZW5ndGg6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX3RleHRUb0FuaW1hdGU6IHN0cmluZ1tdID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgdGV4dDogc3RyaW5nID0gXCJcIiwgZm9udE5hbWU/OiBzdHJpbmcsIGZvbnRTaXplOiBudW1iZXIgPSBUZXh0LkRFRkFVTFRfRk9OVF9TSVpFLCBmb250Q29sb3I6IHN0cmluZyA9IFRleHQuREVGQVVMVF9GT05UX0NPTE9SLCBmb250QWxpZ246IHN0cmluZyA9ICdsZWZ0Jywgd29yZFdyYXA6IGJvb2xlYW4gPSBmYWxzZSwgd2lkdGg6IG51bWJlciA9IDAsIHB1YmxpYyBsaW5lU3BhY2luZzogbnVtYmVyID0gMCwgc2V0dGluZ3M6IE9iamVjdCA9IG51bGwpIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUsXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeSxcbiAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICBUZXh0Ll9hZGRTZXR0aW5ncyh7XG4gICAgICAgICAgICAgICAgZm9udDogZm9udFNpemUgKyAncHggJyArIGZvbnROYW1lLFxuICAgICAgICAgICAgICAgIGZpbGw6IGZvbnRDb2xvcixcbiAgICAgICAgICAgICAgICBhbGlnbjogZm9udEFsaWduLFxuICAgICAgICAgICAgICAgIHdvcmRXcmFwOiB3b3JkV3JhcCxcbiAgICAgICAgICAgICAgICB3b3JkV3JhcFdpZHRoOiB3aWR0aFxuICAgICAgICAgICAgfSwgc2V0dGluZ3MpXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dC5yZXBsYWNlKC8nL2csIFwiXFwnXCIpO1xuICAgICAgICB0aGlzLl9sb3dlcmNhc2VUZXh0ID0gdGhpcy50ZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHRoaXMuc2V0UmVzb2x1dGlvbigpO1xuICAgIH1cblxuICAgIC8vIFBoYXNlci5UZXh0IG92ZXJyaWRlc1xuICAgIHB1YmxpYyBzZXRUZXh0KHRleHQ6IHN0cmluZyk6IFBoYXNlci5UZXh0IHtcbiAgICAgICAgc3VwZXIuc2V0VGV4dCh0ZXh0KTtcblxuICAgICAgICB0aGlzLl9sb3dlcmNhc2VUZXh0ID0gdGhpcy50ZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHRoaXMuc2V0UmVzb2x1dGlvbigpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXRSZXNvbHV0aW9uKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZ2FtZSB8fCAhdGhpcy5nYW1lLmRldmljZS5jb2Nvb25KUykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZ2FtZS5kZXZpY2UuY29jb29uSlMpIHtcbiAgICAgICAgICAgIC8vIGZpeCBmb3IgZm9udHMgbG9va2luZyByZWFsbHkgYmx1cnJ5IGluIGNvY29vbkpTXG4gICAgICAgICAgICB0aGlzLnJlc29sdXRpb24gPSB0aGlzLmdhbWUucmVzb2x1dGlvbiAqIHRoaXMuZ2FtZS5yZXNvbHV0aW9uO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXHRcdFxuICAgIC8qKlxuICAgICogc3RhcnRzIHRoZSB0ZXh0IGFuaW1hdGlvblxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBwcm90ZWN0ZWQgX3N0YXJ0VGV4dEFuaW1hdGlvbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY2FuVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcmVwZWF0VGltZXIgPSB0aGlzLmdhbWUudGltZS5ldmVudHMucmVwZWF0KHRoaXMuX2xldHRlclRpbWUgKiAxMDAsIHRoaXMuX3RleHRMZW5ndGgsIHRoaXMuX3VwZGF0ZVRleHRBbmltYXRpb24sIHRoaXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfdXBkYXRlVGV4dEFuaW1hdGlvbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jYW5VcGRhdGUgfHwgIXRoaXMuX3RleHRUb0FuaW1hdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLl90ZXh0TGVuZ3RoIC0gdGhpcy5fdGV4dFRvQW5pbWF0ZS5sZW5ndGg7XG4gICAgICAgIHRoaXMuYWRkQ29sb3IodGhpcy5zdHlsZS5maWxsLCBpbmRleCk7XG4gICAgICAgIHRoaXMuYWRkQ29sb3IoJ3JnYmEoMCwwLDAsMCknLCBpbmRleCArIDEpO1xuICAgICAgICB0aGlzLl90ZXh0VG9BbmltYXRlLnNoaWZ0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX3RleHRUb0FuaW1hdGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLm9uQW5pbWF0aW9uQ29tcGxldGUuZGlzcGF0Y2goKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgLyoqXG4gICAgKiBzZXRzIHRoZSBjb2xvciBvZiB0aGUgZW50aXJlIHRleHRcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb2xvciBjc3MgY29sb3Igc3RyaW5nIChzdWNoIGFzIFwiI2ZmMDAwMFwiKVxuICAgICogQHJldHVybiB7RGlqb24uVUlUZXh0LmhpZ2hsaWdodFBocmFzZX0gY2FsbHMgdGhlIGhpZ2hsaWdodFBocmFzZSBtZXRob2QgYW5kIFwiaGlnaGxpZ2h0c1wiIHRoZSBlbnRpcmUgdGV4dCBzdHJpbmdcbiAgICAqL1xuICAgIHB1YmxpYyBzZXRDb2xvcihjb2xvcjogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhpZ2hsaWdodFBocmFzZSh0aGlzLnRleHQsIGNvbG9yLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiByZXNldHMgdGhlIGNvbG9yIHRvIHRoZSBvcmlnaW5hbCBmaWxsIGNvbG9yXG4gICAgKiBAcmV0dXJuIHtEaWpvbi5VSVRleHQuaGlnaGxpZ2h0UGhyYXNlfSBjYWxscyB0aGUgaGlnaGxpZ2h0UGhyYXNlIG1ldGhvZCBhbmQgXCJoaWdobGlnaHRzXCIgdGhlIGVudGlyZSB0ZXh0IHN0cmluZ1xuICAgICovXG4gICAgcHVibGljIHJlc2V0Q29sb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhpZ2hsaWdodFBocmFzZSh0aGlzLnRleHQsIHRoaXMuc3R5bGUuZmlsbCwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogY2hhbmdlcyB0aGUgY29sb3VyIG9mIGEgcG9ydGlvbiBvZiB0aGUgdGV4dFxuICAgICogQHBhcmFtICB7U3RyaW5nfSBwaHJhc2UgICAgICAgIHRoZSBwaHJhc2Ugd2l0aGluIHRoZSB0ZXh0IHRvIGNoYW5nZVxuICAgICogQHBhcmFtICB7U3RyaW5nfSBjb2xvciAgICAgICAgIGNzcyBjb2xvciBzdHJpbmcgKHN1Y2ggYXMgXCIjZmYwMDAwXCIpXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBbY2FzZVNlbnNpdGl2ZSA9IGZhbHNlXSB3aGV0aGVyIHRoZSBzZWFyY2ggZm9yIHRoZSBwaHJhc2Ugd2l0aGluIHRoaXMgdGV4dCBzaG91bGQgYmUgY2FzZSBzZW5zaXRpdmVcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgaGlnaGxpZ2h0UGhyYXNlKHBocmFzZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nLCBjYXNlU2Vuc2l0aXZlOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHRleHQgPSBjYXNlU2Vuc2l0aXZlID8gdGhpcy50ZXh0IDogdGhpcy5fbG93ZXJjYXNlVGV4dDtcblxuICAgICAgICBwaHJhc2UgPSBjYXNlU2Vuc2l0aXZlID8gcGhyYXNlIDogcGhyYXNlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgbGV0IGxlbiA9IHBocmFzZS5sZW5ndGg7XG5cbiAgICAgICAgbGV0IHN0YXJ0SW5kZXggPSB0ZXh0LmluZGV4T2YocGhyYXNlKTtcbiAgICAgICAgbGV0IGVuZEluZGV4ID0gc3RhcnRJbmRleCArIGxlbjtcblxuICAgICAgICB3aGlsZSAoc3RhcnRJbmRleCA8PSBlbmRJbmRleCkge1xuICAgICAgICAgICAgdGhpcy5hZGRDb2xvcihjb2xvciwgc3RhcnRJbmRleCk7XG4gICAgICAgICAgICBzdGFydEluZGV4Kys7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFkZENvbG9yKHRoaXMuc3R5bGUuZmlsbCwgZW5kSW5kZXgpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgKiBhbmltYXRlcyB0aGUgdGV4dCBpbiBieSByZXZlYWxpbmcgZWFjaCBjaGFyYWN0ZXIgaW4gc2VxdWVuY2VcbiAgICAqIEBwYXJhbSAge051bWJlcn0gW2xldHRlclRpbWUgPSAwLjFdICB0aGUgdGltZSAoaW4gc2Vjb25kcykgYmV0d2VlbiBlYWNoIGNoYXJhY3RlclxuICAgICogQHBhcmFtICB7aW50fSBbZGVsYXkgPSAwXSAgICAgICAgICAgIHRoZSBkZWxheSBiZWZvcmUgc3RhcnRpbmcgdGhlIGFuaW1hdGlvblxuICAgICovXG4gICAgcHVibGljIGFuaW1hdGUobGV0dGVyVGltZTogbnVtYmVyID0gMC4xLCBkZWxheTogbnVtYmVyID0gMCkge1xuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMucmVtb3ZlKHRoaXMuX2RlbGF5VGltZXIpO1xuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMucmVtb3ZlKHRoaXMuX3JlcGVhdFRpbWVyKTtcblxuICAgICAgICB0aGlzLl9sZXR0ZXJUaW1lID0gbGV0dGVyVGltZTtcbiAgICAgICAgdGhpcy5fdGV4dExlbmd0aCA9IHRoaXMudGV4dC5sZW5ndGg7XG4gICAgICAgIHRoaXMuX3RleHRUb0FuaW1hdGUgPSB0aGlzLnRleHQuc3BsaXQoJycpO1xuXG4gICAgICAgIHZhciBzdGFydEluZGV4ID0gMDtcbiAgICAgICAgdmFyIGVuZEluZGV4ID0gdGhpcy5fdGV4dExlbmd0aDtcblxuICAgICAgICB3aGlsZSAoc3RhcnRJbmRleCA8PSBlbmRJbmRleCkge1xuICAgICAgICAgICAgdGhpcy5hZGRDb2xvcigncmdiYSgwLDAsMCwwKScsIHN0YXJ0SW5kZXgpO1xuICAgICAgICAgICAgc3RhcnRJbmRleCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZGVsYXlUaW1lciA9IHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoZGVsYXkgKiBQaGFzZXIuVGltZXIuU0VDT05ELCB0aGlzLl9zdGFydFRleHRBbmltYXRpb24sIHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogc3RvcHMgdGhlIHRleHQgYW5pbWF0aW9uIGFuZCBjbGVhcnMgdGhlIHRpbWVyc1xuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyBzdG9wQW5pbWF0aW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9jYW5VcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fdGV4dFRvQW5pbWF0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5yZW1vdmUodGhpcy5fZGVsYXlUaW1lcik7XG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5yZW1vdmUodGhpcy5fcmVwZWF0VGltZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogcm91bmRzIHRoZSBwb3NpdGlvblxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyByb3VuZFBpeGVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnNldChNYXRoLnJvdW5kKHRoaXMueCksIE1hdGgucm91bmQodGhpcy55KSk7XG4gICAgfVxuXG4gICAgLy8gc3RhdGljIG1ldGhvZHNcbiAgICBwcml2YXRlIHN0YXRpYyBfYWRkU2V0dGluZ3Mob2JqOiBPYmplY3QsIHNldHRpbmdzOiBPYmplY3QpOiBPYmplY3Qge1xuICAgICAgICBpZiAoIXNldHRpbmdzKVxuICAgICAgICAgICAgcmV0dXJuIG9iajtcblxuICAgICAgICBmb3IgKHZhciBwcm9wIGluIHNldHRpbmdzKSB7XG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgICAgICBvYmpbcHJvcF0gPSBzZXR0aW5nc1twcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgZ2V0IHJlYWxIZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGUueSAqIHRoaXMudGV4dHVyZS5mcmFtZS5oZWlnaHQgLyB0aGlzLmdhbWUucmVzb2x1dGlvbjtcbiAgICB9XG5cbiAgICBnZXQgcmVhbFdpZHRoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjYWxlLnggKiB0aGlzLnRleHR1cmUuZnJhbWUud2lkdGggLyB0aGlzLmdhbWUucmVzb2x1dGlvbjtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xuICAgIHB1YmxpYyBnYW1lOiBHYW1lO1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIG93bmVyOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lO1xuICAgICAgICB0aGlzLm5hbWUgPSAnQ29tcG9uZW50JztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0T3duZXIob3duZXI6IFNwcml0ZSB8IEdyb3VwKTogdm9pZCB7XG4gICAgICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGluaXRpYWxpemUgdGhlIGNvbXBvbmVudCwgc2V0IHVwIHZhcmlhYmxlc1xuICAgICogY2FsbGVkIGJ5IHRoZSBvd25lciBmaXJzdCBhZnRlciB0aGUgY29tcG9uZW50IGlzIGF0dGFjaGVkXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIGluaXQoKSB7IH1cblxuICAgIC8qKlxuICAgICogYWRkIHZpc3VhbCBlbGVtZW50c1xuICAgICogY2FsbGVkIGJ5IHRoZSBvd25lciBhZnRlciBpdCBjYWxscyB0aGlzIGluaXQgbWV0aG9kXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIGJ1aWxkSW50ZXJmYWNlKCkgeyB9XG5cbiAgICAvKipcbiAgICAqIGNhbGxlZCBieSB0aGUgb3duZXIgaW4gaXRzIHVwZGF0ZSBjeWNsZSwgZXZlcnkgZnJhbWVcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlKCkgeyB9XG5cbiAgICAvKipcbiAgICAqIHJlbW92ZSBhbnkgdmlzdWFsIGVsZW1lbnRzIC8gc2lnbmFscyBhZGRlZFxuICAgICogb3duZXIgY2FsbHMgdGhpcyBtZXRob2QgaW4gaXRzIG93biBkZXN0cm95IG1ldGhvZFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyBkZXN0cm95KCkgeyB9XG59XG5cbmV4cG9ydCBjbGFzcyBOaW5lU2xpY2VJbWFnZSBleHRlbmRzIEdyb3VwIHtcbiAgICBwcml2YXRlIF9fd2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIF9faGVpZ2h0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfc2l6ZTogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBfZGlzcGxheUxheWVyOiBQaGFzZXIuR3JvdXA7XG4gICAgcHJpdmF0ZSBfaW5wdXRMYXllcjogUGhhc2VyLkdyb3VwO1xuXG4gICAgcHVibGljIHRsOiBQaGFzZXIuSW1hZ2U7XG4gICAgcHVibGljIHQ6IFBoYXNlci5UaWxlU3ByaXRlO1xuICAgIHB1YmxpYyB0cjogUGhhc2VyLkltYWdlO1xuICAgIHB1YmxpYyByOiBQaGFzZXIuVGlsZVNwcml0ZTtcbiAgICBwdWJsaWMgYnI6IFBoYXNlci5JbWFnZTtcbiAgICBwdWJsaWMgYjogUGhhc2VyLlRpbGVTcHJpdGU7XG4gICAgcHVibGljIGJsOiBQaGFzZXIuSW1hZ2U7XG4gICAgcHVibGljIGw6IFBoYXNlci5UaWxlU3ByaXRlO1xuICAgIHB1YmxpYyB0aWxlOiBQaGFzZXIuVGlsZVNwcml0ZTtcblxuICAgIHByaXZhdGUgX2ludGVyYWN0aXZlQmFja2luZzogUGhhc2VyLkltYWdlID0gbnVsbDtcbiAgICBwcml2YXRlIF9pbnB1dEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgX2N1cnJlbnRCb3VuZHM6IFBJWEkuUmVjdGFuZ2xlID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcHVibGljIGtleTogc3RyaW5nLCBwdWJsaWMgdGV4dHVyZVBhdGg6IHN0cmluZywgcHVibGljIGZpbGxNaWRkbGU6IGJvb2xlYW4gPSB0cnVlLCBwdWJsaWMgdG9wSGVpZ2h0PzogbnVtYmVyLCBwdWJsaWMgcmlnaHRXaWR0aD86IG51bWJlciwgcHVibGljIGJvdHRvbUhlaWdodD86IG51bWJlciwgcHVibGljIGxlZnRXaWR0aD86IG51bWJlcikge1xuICAgICAgICBzdXBlcih4LCB5KTtcblxuICAgICAgICB0aGlzLl9fd2lkdGggPSBNYXRoLnJvdW5kKHdpZHRoKTtcbiAgICAgICAgdGhpcy5fX2hlaWdodCA9IE1hdGgucm91bmQoaGVpZ2h0KTtcblxuICAgICAgICB0aGlzLl9idWlsZCgpO1xuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKDEwLCB0aGlzLl9mbGF0dGVuLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9idWlsZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faW5wdXRMYXllciA9IHRoaXMuYWRkKHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKSk7XG4gICAgICAgIHRoaXMuX2Rpc3BsYXlMYXllciA9IHRoaXMuYWRkKHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKSk7XG5cbiAgICAgICAgdGhpcy50bCA9IDxQaGFzZXIuSW1hZ2U+dGhpcy5fZGlzcGxheUxheWVyLmFkZCh0aGlzLmdhbWUuYWRkLmltYWdlKDAsIDAsIHRoaXMua2V5LCB0aGlzLnRleHR1cmVQYXRoICsgJy90bCcpKTtcblxuICAgICAgICB0aGlzLnRyID0gPFBoYXNlci5JbWFnZT50aGlzLl9kaXNwbGF5TGF5ZXIuYWRkKHRoaXMuZ2FtZS5hZGQuaW1hZ2UodGhpcy5fX3dpZHRoLCAwLCB0aGlzLmtleSwgdGhpcy50ZXh0dXJlUGF0aCArICcvdHInKSk7XG5cbiAgICAgICAgdGhpcy50ID0gPFBoYXNlci5UaWxlU3ByaXRlPnRoaXMuX2Rpc3BsYXlMYXllci5hZGQodGhpcy5nYW1lLmFkZC50aWxlU3ByaXRlKHRoaXMudGwuZ2V0Qm91bmRzKCkud2lkdGgsIDAsIHRoaXMuX193aWR0aCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkud2lkdGggLSB0aGlzLnRyLmdldEJvdW5kcygpLndpZHRoLCB0aGlzLnRvcEhlaWdodCB8fCB0aGlzLnRsLmdldEJvdW5kcygpLmhlaWdodCwgdGhpcy5rZXksIHRoaXMudGV4dHVyZVBhdGggKyAnL3QnKSk7XG5cbiAgICAgICAgdGhpcy5sID0gPFBoYXNlci5UaWxlU3ByaXRlPnRoaXMuX2Rpc3BsYXlMYXllci5hZGQodGhpcy5nYW1lLmFkZC50aWxlU3ByaXRlKDAsIHRoaXMudGwuZ2V0Qm91bmRzKCkuaGVpZ2h0LCB0aGlzLmxlZnRXaWR0aCB8fCB0aGlzLnRsLmdldEJvdW5kcygpLndpZHRoLCAxMDAsIHRoaXMua2V5LCB0aGlzLnRleHR1cmVQYXRoICsgJy9sJykpO1xuXG4gICAgICAgIHRoaXMuYmwgPSA8UGhhc2VyLkltYWdlPnRoaXMuX2Rpc3BsYXlMYXllci5hZGQodGhpcy5nYW1lLmFkZC5pbWFnZSgwLCB0aGlzLl9faGVpZ2h0LCB0aGlzLmtleSwgdGhpcy50ZXh0dXJlUGF0aCArICcvYmwnKSk7XG5cbiAgICAgICAgdGhpcy5sLmhlaWdodCA9IHRoaXMuX19oZWlnaHQgLSB0aGlzLnRsLmdldEJvdW5kcygpLmhlaWdodCAtIHRoaXMuYmwuZ2V0Qm91bmRzKCkuaGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuYiA9IDxQaGFzZXIuVGlsZVNwcml0ZT50aGlzLl9kaXNwbGF5TGF5ZXIuYWRkKHRoaXMuZ2FtZS5hZGQudGlsZVNwcml0ZSh0aGlzLmJsLmdldEJvdW5kcygpLndpZHRoLCB0aGlzLl9faGVpZ2h0LCAxMDAsIHRoaXMuYm90dG9tSGVpZ2h0IHx8IHRoaXMuYmwuZ2V0Qm91bmRzKCkuaGVpZ2h0LCB0aGlzLmtleSwgdGhpcy50ZXh0dXJlUGF0aCArICcvYicpKTtcblxuICAgICAgICB0aGlzLmJyID0gPFBoYXNlci5JbWFnZT50aGlzLl9kaXNwbGF5TGF5ZXIuYWRkKHRoaXMuZ2FtZS5hZGQuaW1hZ2UodGhpcy5fX3dpZHRoLCB0aGlzLl9faGVpZ2h0LCB0aGlzLmtleSwgdGhpcy50ZXh0dXJlUGF0aCArICcvYnInKSk7XG5cbiAgICAgICAgdGhpcy5iLndpZHRoID0gdGhpcy5fX3dpZHRoIC0gdGhpcy5ibC5nZXRCb3VuZHMoKS53aWR0aCAtIHRoaXMuYnIuZ2V0Qm91bmRzKCkud2lkdGg7XG4gICAgICAgIHRoaXMuciA9IDxQaGFzZXIuVGlsZVNwcml0ZT50aGlzLl9kaXNwbGF5TGF5ZXIuYWRkKHRoaXMuZ2FtZS5hZGQudGlsZVNwcml0ZSh0aGlzLl9fd2lkdGgsIHRoaXMudHIuZ2V0Qm91bmRzKCkuaGVpZ2h0LCB0aGlzLnJpZ2h0V2lkdGggfHwgdGhpcy50ci5nZXRCb3VuZHMoKS53aWR0aCwgdGhpcy5fX2hlaWdodCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkuaGVpZ2h0IC0gdGhpcy5ici5nZXRCb3VuZHMoKS5oZWlnaHQsIHRoaXMua2V5LCB0aGlzLnRleHR1cmVQYXRoICsgJy9yJykpO1xuXG4gICAgICAgIHRoaXMudHIuc2V0UGl2b3QoJ3RyJyk7XG4gICAgICAgIHRoaXMuci5zZXRQaXZvdCgndHInKTtcblxuICAgICAgICB0aGlzLmJyLnNldFBpdm90KCdicicpO1xuICAgICAgICB0aGlzLmIuc2V0UGl2b3QoJ2JsJyk7XG4gICAgICAgIHRoaXMuYmwuc2V0UGl2b3QoJ2JsJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuZmlsbE1pZGRsZSkge1xuICAgICAgICAgICAgdGhpcy50aWxlID0gPFBoYXNlci5UaWxlU3ByaXRlPnRoaXMuX2Rpc3BsYXlMYXllci5hZGQodGhpcy5nYW1lLmFkZC50aWxlU3ByaXRlKHRoaXMudGwuZ2V0Qm91bmRzKCkud2lkdGggLSAxLCB0aGlzLnRsLmdldEJvdW5kcygpLmhlaWdodCAtIDEsIHRoaXMuX193aWR0aCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkud2lkdGggLSB0aGlzLnRyLmdldEJvdW5kcygpLndpZHRoICsgMiwgdGhpcy5fX2hlaWdodCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkuaGVpZ2h0IC0gdGhpcy5ici5nZXRCb3VuZHMoKS5oZWlnaHQgKyA0LCB0aGlzLmtleSwgdGhpcy50ZXh0dXJlUGF0aCArICcvdGlsZScpKTtcbiAgICAgICAgICAgIHRoaXMuc2VuZFRvQmFjayh0aGlzLnRpbGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYWRkSW50ZXJhY3RpdmVCYWNraW5nKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBnZnggPSB0aGlzLmdhbWUuYWRkLmdyYXBoaWNzKCk7XG4gICAgICAgIGdmeC5iZWdpbkZpbGwoMHhGRjAwMDAsIDApO1xuICAgICAgICBnZnguZHJhd1JlY3QodGhpcy54LCB0aGlzLnksIHRoaXMuX193aWR0aCwgdGhpcy5fX2hlaWdodCk7XG4gICAgICAgIGdmeC5lbmRGaWxsKCk7XG5cbiAgICAgICAgdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nID0gdGhpcy5faW5wdXRMYXllci5hZGQodGhpcy5nYW1lLmFkZC5pbWFnZSgwLCAwLCBnZnguZ2VuZXJhdGVUZXh0dXJlKCkpKTtcblxuICAgICAgICB0aGlzLl9pbnRlcmFjdGl2ZUJhY2tpbmcuaW5wdXRFbmFibGVkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmdhbWUud29ybGQucmVtb3ZlKGdmeCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2V0U2l6ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fdW5mbGF0dGVuKCk7XG5cbiAgICAgICAgdGhpcy50LndpZHRoID0gdGhpcy5iLndpZHRoID0gdGhpcy5fX3dpZHRoIC0gdGhpcy50bC5nZXRCb3VuZHMoKS53aWR0aCAtIHRoaXMudHIuZ2V0Qm91bmRzKCkud2lkdGg7XG4gICAgICAgIHRoaXMuci54ID0gdGhpcy50ci54ID0gdGhpcy5ici54ID0gdGhpcy5fX3dpZHRoO1xuICAgICAgICB0aGlzLmwuaGVpZ2h0ID0gdGhpcy5yLmhlaWdodCA9IHRoaXMuX19oZWlnaHQgLSB0aGlzLnRyLmdldEJvdW5kcygpLmhlaWdodCAtIHRoaXMuYmwuZ2V0Qm91bmRzKCkuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJsLnkgPSB0aGlzLmIueSA9IHRoaXMuYnIueSA9IHRoaXMuX19oZWlnaHQ7XG5cbiAgICAgICAgaWYgKHRoaXMuZmlsbE1pZGRsZSkge1xuICAgICAgICAgICAgdGhpcy50aWxlLndpZHRoID0gdGhpcy5fX3dpZHRoIC0gdGhpcy50ci5nZXRCb3VuZHMoKS53aWR0aCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkud2lkdGggKyA0XG4gICAgICAgICAgICB0aGlzLnRpbGUuaGVpZ2h0ID0gdGhpcy5fX2hlaWdodCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkuaGVpZ2h0IC0gdGhpcy5ibC5nZXRCb3VuZHMoKS5oZWlnaHQgKyA0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nLndpZHRoID0gdGhpcy5fX3dpZHRoO1xuICAgICAgICB0aGlzLl9pbnRlcmFjdGl2ZUJhY2tpbmcuaGVpZ2h0ID0gdGhpcy5fX2hlaWdodDtcblxuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKDEwLCB0aGlzLl9mbGF0dGVuLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9hZGRJbnB1dCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnRlcmFjdGl2ZUJhY2tpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZEludGVyYWN0aXZlQmFja2luZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVtb3ZlSW5wdXQoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nLmlucHV0RW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3VuZmxhdHRlbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZGlzcGxheUxheWVyLmNhY2hlQXNCaXRtYXAgPSBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2ZsYXR0ZW4oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2Rpc3BsYXlMYXllci5jYWNoZUFzQml0bWFwID0gdHJ1ZTsvL3RoaXMuZ2FtZS5yZW5kZXJUeXBlID09PSBQaGFzZXIuV0VCR0w7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpbnB1dEVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faW5wdXRFbmFibGVkID0gdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLl9pbnB1dEVuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZElucHV0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVJbnB1dCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBldmVudHMoKTogUGhhc2VyLkV2ZW50cyB7XG4gICAgICAgIGlmICghdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nIHx8ICF0aGlzLl9pbnRlcmFjdGl2ZUJhY2tpbmcuaW5wdXRFbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nLmV2ZW50cztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlucHV0KCk6IFBoYXNlci5JbnB1dEhhbmRsZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nLmlucHV0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaFNpemUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9fd2lkdGggPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fc2V0U2l6ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdlNpemUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9faGVpZ2h0ID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX3NldFNpemUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGhTaXplKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fd2lkdGg7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB2U2l6ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fX2hlaWdodDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0U2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl9fd2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5fX2hlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5fc2V0U2l6ZSgpO1xuICAgIH1cbn1cblxuXG4vLyBBRERJTkcgU1BJTkUgLy9cbmV4cG9ydCBjbGFzcyBTcGluZSBleHRlbmRzIFBJWEkuc3BpbmUuU3BpbmUge1xuICAgIHB1YmxpYyBzdGF0aWMgREVGQVVMVF9TUEVFRDogbnVtYmVyID0gMC4wMTY3Oy8vIDYwIGZwcztcbiAgICBwdWJsaWMgZGVidWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIF9jcmVhdGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIG9uQ3JlYXRlOiBQaGFzZXIuU2lnbmFsID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICBwdWJsaWMgb25BbmltYXRpb25Db21wbGV0ZTogUGhhc2VyLlNpZ25hbCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG5cbiAgICBwcm90ZWN0ZWQgX2NhblVwZGF0ZTogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJvdGVjdGVkIF9wYXVzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcm90ZWN0ZWQgX3NwZWVkOiBudW1iZXIgPSAxO1xuXG4gICAgcHJvdGVjdGVkIF9ib3VuZHNPZmZzZXQ6IFBoYXNlci5Qb2ludCA9IG5ldyBQaGFzZXIuUG9pbnQoMCwgMCk7XG4gICAgcHJvdGVjdGVkIF9ib3VuZHNXaWR0aFNjYWxlOiBudW1iZXIgPSAxO1xuICAgIHByb3RlY3RlZCBfYm91bmRzSGVpZ2h0U2NhbGU6IG51bWJlciA9IDE7XG4gICAgcHJvdGVjdGVkIF9jdXJyZW50Qm91bmRzOiBQSVhJLlJlY3RhbmdsZSA9IG5ldyBQSVhJLlJlY3RhbmdsZSgpO1xuXG4gICAgcHVibGljIHBoeXNpY3NTcHJpdGU6IFBoYXNlci5TcHJpdGU7XG4gICAgcHJvdGVjdGVkIF9waHlzaWNzT2Zmc2V0OiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0gPSB7IHg6IDAsIHk6IDAgfTtcbiAgICBwcm90ZWN0ZWQgX3BoeXNpY3NFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgbm9uTWVzaFZlcnNpb246IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhc3NldE5hbWU6IHN0cmluZyA9ICcnLCB4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwKSB7XG4gICAgICAgIHN1cGVyKEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZSwgeCwgeSwgU3BpbmUuY3JlYXRlU3BpbmVEYXRhKGFzc2V0TmFtZSkpO1xuXG4gICAgICAgIHRoaXMubmFtZSA9IGFzc2V0TmFtZTtcbiAgICAgICAgdGhpcy5za2VsZXRvbi5zZXRUb1NldHVwUG9zZSgpO1xuICAgICAgICB0aGlzLl9jcmVhdGVCb3VuZHMoKTtcbiAgICAgICAgdGhpcy51cGRhdGUoMCk7XG4gICAgICAgIHRoaXMuYXV0b1VwZGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQW5pbWF0aW9uQ29tcGxldGUgPSB0aGlzLnN0YXRlLm9uQW5pbWF0aW9uQ29tcGxldGU7XG4gICAgICAgIHRoaXMuaGl0QXJlYSA9IG5ldyBQaGFzZXIuUmVjdGFuZ2xlKDAsIC0gdGhpcy5za2VsZXRvbi5kYXRhLmhlaWdodCwgdGhpcy5za2VsZXRvbi5kYXRhLndpZHRoLCB0aGlzLnNrZWxldG9uLmRhdGEuaGVpZ2h0KTtcbiAgICAgICAgLy90aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKDEwMCwgdGhpcy5fb25DcmVhdGVJbnRlcm5hbCwgdGhpcyk7XG5cblxuICAgICAgICBpZiAoU3BpbmUuQVVUT19NRVNIKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUudGltZS5hZHZhbmNlZFRpbWluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKDIwMDAsIHRoaXMuX2luaXRBdXRvTWVzaExvYWRpbmcsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdEF1dG9NZXNoTG9hZGluZygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGVja05vbk1lc2hUaHJlc2hvbGQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jaGVja0F1dG9NZXNoRlBTKCk6IHZvaWQge1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZ2FtZS50aW1lLmZwcywgU3BpbmUuTk9OX01FU0hfRlBTKVxuICAgICAgICBpZiAodGhpcy5nYW1lLnRpbWUuZnBzIDwgU3BpbmUuTk9OX01FU0hfRlBTKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWROb25NZXNoVmVyc2lvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGlzYWJsZUFkdmFuY2VkVGltaW5nKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdhbWUudGltZS5hZHZhbmNlZFRpbWluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX29uQ3JlYXRlSW50ZXJuYWwoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NyZWF0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uQ3JlYXRlLmRpc3BhdGNoKCk7XG4gICAgICAgIHRoaXMuX2NhblVwZGF0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZShkdDogbnVtYmVyID0gU3BpbmUuREVGQVVMVF9TUEVFRCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fcGF1c2VkIHx8ICF0aGlzLl9jYW5VcGRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2NyZWF0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX29uQ3JlYXRlSW50ZXJuYWwoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fcGh5c2ljc0VuYWJsZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMueCA9IHRoaXMucGh5c2ljc1Nwcml0ZS5ib2R5LnBvc2l0aW9uLnggKyB0aGlzLl9waHlzaWNzT2Zmc2V0Lng7XG4gICAgICAgICAgICB0aGlzLnkgPSB0aGlzLnBoeXNpY3NTcHJpdGUuYm9keS5wb3NpdGlvbi55ICsgdGhpcy5fcGh5c2ljc09mZnNldC55ICsgKHRoaXMuc2NhbGUueSA+IDAgPyB0aGlzLnBoeXNpY3NTcHJpdGUuYm9keS5oZWlnaHQgOiAwKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci51cGRhdGUodGhpcy5fc3BlZWQgKiBkdCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdFBoeXNpY3ModHlwZTogbnVtYmVyLCBvZmZzZXQ6IHsgeD86IG51bWJlciwgeT86IG51bWJlciB9KTogYm9vbGVhbiB7XG4gICAgICAgIHRoaXMuX2NyZWF0ZUJvdW5kcygpO1xuICAgICAgICBpZiAodHlwZSAhPSBQaGFzZXIuUGh5c2ljcy5BUkNBREUgJiZcbiAgICAgICAgICAgIHR5cGUgIT0gUGhhc2VyLlBoeXNpY3MuTklOSkEgJiZcbiAgICAgICAgICAgIHR5cGUgIT0gUGhhc2VyLlBoeXNpY3MuUDJKUylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICBpZiAob2Zmc2V0LnggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fcGh5c2ljc09mZnNldC54ID0gb2Zmc2V0Lng7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob2Zmc2V0LnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fcGh5c2ljc09mZnNldC55ID0gb2Zmc2V0Lnk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBoeXNpY3NTcHJpdGUgPSA8UGhhc2VyLlNwcml0ZT50aGlzLnBhcmVudC5hZGRDaGlsZCh0aGlzLmdhbWUuYWRkLnNwcml0ZSh0aGlzLnggKyB0aGlzLl9waHlzaWNzT2Zmc2V0LngsIHRoaXMueSAtIHRoaXMuX3BoeXNpY3NPZmZzZXQueSkpO1xuXG4gICAgICAgIHRoaXMucGh5c2ljc1Nwcml0ZS5uYW1lID0gdGhpcy5hc3NldE5hbWUgKyAnX3BoeXNpY3NTcHJpdGUnO1xuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5lbmFibGUodGhpcy5waHlzaWNzU3ByaXRlLCB0eXBlKTtcbiAgICAgICAgdGhpcy5fcGh5c2ljc0VuYWJsZWQgPSAodGhpcy5waHlzaWNzU3ByaXRlLmJvZHkgIT09IG51bGwpO1xuICAgICAgICByZXR1cm4gdGhpcy5fcGh5c2ljc0VuYWJsZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGRpc2FibGVQaHlzaWNzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9waHlzaWNzRW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBlbmFibGVQaHlzaWNzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9waHlzaWNzRW5hYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrTm9uTWVzaFRocmVzaG9sZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLnJlcGVhdCg1MDAsIDEwLCB0aGlzLl9jaGVja0F1dG9NZXNoRlBTLCB0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmFkZCg1NTAwLCB0aGlzLl9kaXNhYmxlQWR2YW5jZWRUaW1pbmcsIHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkTm9uTWVzaFZlcnNpb24oKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHRoaXMubm9uTWVzaFZlcnNpb24gPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLy8gc2V0cyB0aGUgbm9uTWVzaFZlcnNpb24gZmxhZyBzbyB0aGlzIG1ldGhvZCBkb2Vzbid0IHJ1biBtb3JlIHRoYW4gb25jZVxuICAgICAgICAvL3RoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vbk1lc2hWZXJzaW9uID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbHBoYSA9IDA7XG4gICAgICAgIC8vIHN0b3JlIHRoZSB0cmFja3MgYW5kIHNpZ25hbHNcbiAgICAgICAgY29uc3QgdHJhY2tzID0gdGhpcy5zdGF0ZS50cmFja3M7XG4gICAgICAgIGNvbnN0IHNpZ25hbCA9IHRoaXMuc3RhdGUub25BbmltYXRpb25Db21wbGV0ZTtcblxuICAgICAgICAvLyBkZXN0cm95IHRoZSBzbG90IGNvbnRhaW5lcnNcbiAgICAgICAgd2hpbGUgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgKDxQaGFzZXIuR3JvdXA+dGhpcy5yZW1vdmVDaGlsZEF0KDApKS5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXNldCB0aGUgc3BpbmUgZGF0YVxuICAgICAgICB0aGlzLnNldHVwKFNwaW5lLmNyZWF0ZVNwaW5lRGF0YSh0aGlzLm5hbWUgKyBTcGluZS5OT05fTUVTSF9TVUZGSVgpKTtcbiAgICAgICAgdGhpcy5zdGF0ZS5hcHBseSh0aGlzLnNrZWxldG9uKTtcbiAgICAgICAgLy8gcmVzZXQgdGhlIHN0YXRlXG4gICAgICAgIHRoaXMuc3RhdGUudHJhY2tzID0gdHJhY2tzO1xuICAgICAgICAvLyByZXNldCB0aGUgc2lnbmFsc1xuICAgICAgICB0aGlzLm9uQW5pbWF0aW9uQ29tcGxldGUgPSB0aGlzLnN0YXRlLm9uQW5pbWF0aW9uQ29tcGxldGUgPSBzaWduYWw7XG5cbiAgICAgICAgLy8gZm9yY2UgYW4gdXBkYXRlXG4gICAgICAgIC8vdGhpcy51cGRhdGUoKTtcblxuICAgICAgICAvLyBjbGVhciB0aGUgbWVzaGVkIHNwaW5lIGFzc2V0c1xuICAgICAgICAoPEdhbWU+dGhpcy5nYW1lKS5hc3NldC5jbGVhclNwaW5lQXNzZXQodGhpcy5uYW1lKTtcbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmFkZCgxMDAsICgpID0+IHsgdGhpcy5hbHBoYSA9IDEgfSwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVTcGluZURhdGEoYXNzZXROYW1lOiBzdHJpbmcpOiBhbnkge1xuICAgICAgICBjb25zdCBzcGluZSA9IFBJWEkuc3BpbmU7XG4gICAgICAgIGNvbnN0IHNwaW5lQXRsYXMgPSBuZXcgc3BpbmUuU3BpbmVSdW50aW1lLkF0bGFzKEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZS5jYWNoZS5nZXRUZXh0KGFzc2V0TmFtZSArICcuYXRsYXMnKSwgdGhpcy5hdGxhc0NhbGxiYWNrRnVuY3Rpb24pO1xuICAgICAgICBjb25zdCBzcGluZUpzb25QYXJzZXIgPSBuZXcgc3BpbmUuU3BpbmVSdW50aW1lLlNrZWxldG9uSnNvblBhcnNlcihuZXcgc3BpbmUuU3BpbmVSdW50aW1lLkF0bGFzQXR0YWNobWVudFBhcnNlcihzcGluZUF0bGFzKSk7XG4gICAgICAgIGNvbnN0IHNrZWxldG9uRGF0YSA9IHNwaW5lSnNvblBhcnNlci5yZWFkU2tlbGV0b25EYXRhKEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZS5jYWNoZS5nZXRKU09OKGFzc2V0TmFtZSArICcuanNvbicpKTtcbiAgICAgICAgcmV0dXJuIHNrZWxldG9uRGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGF0bGFzQ2FsbGJhY2tGdW5jdGlvbihsaW5lLCBjYWxsYmFjaykge1xuICAgICAgICAvL2NhbGxiYWNrKFBJWEkuQmFzZVRleHR1cmUuZnJvbUltYWdlKCdhc3NldHMvc3BpbmUvJyArIGxpbmUpKTtcbiAgICAgICAgY29uc3QgbGluZUFyciA9IGxpbmUuc3BsaXQoJ0AnICsgQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lLnJlc29sdXRpb24gKyAneCcpO1xuICAgICAgICBjb25zdCB1cmwgPSBsaW5lQXJyLmpvaW4oJycpO1xuXG4gICAgICAgIGNhbGxiYWNrKG5ldyBQSVhJLkJhc2VUZXh0dXJlKEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZS5jYWNoZS5nZXRJbWFnZSh1cmwpLCBQSVhJLnNjYWxlTW9kZXMuREVGQVVMVCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcGF1c2VkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGF1c2VkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcGF1c2VkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3BhdXNlZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc3BlZWQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NwZWVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc3BlZWQodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9zcGVlZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgYm91bmRzT2Zmc2V0KG9mZnNldDogUGhhc2VyLlBvaW50KSB7XG4gICAgICAgIHRoaXMuX2JvdW5kc09mZnNldCA9IG9mZnNldDtcbiAgICAgICAgdGhpcy5fY3VycmVudEJvdW5kcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBib3VuZHNPZmZzZXQoKTogUGhhc2VyLlBvaW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvdW5kc09mZnNldDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGJvdW5kc1dpZHRoU2NhbGUoc2NhbGU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9ib3VuZHNXaWR0aFNjYWxlID0gc2NhbGU7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRCb3VuZHMgPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYm91bmRzV2lkdGhTY2FsZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fYm91bmRzV2lkdGhTY2FsZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGJvdW5kc0hlaWdodFNjYWxlKHNjYWxlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fYm91bmRzSGVpZ2h0U2NhbGUgPSBzY2FsZTtcbiAgICAgICAgdGhpcy5fY3VycmVudEJvdW5kcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBib3VuZHNIZWlnaHRTY2FsZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fYm91bmRzSGVpZ2h0U2NhbGU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEJvdW5kcygpOiBQSVhJLlJlY3RhbmdsZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50Qm91bmRzIHx8IHRoaXMuX2NyZWF0ZUJvdW5kcygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfY3JlYXRlQm91bmRzKCk6IFBJWEkuUmVjdGFuZ2xlIHtcbiAgICAgICAgdGhpcy5fY3VycmVudEJvdW5kcyA9IG5ldyBQSVhJLlJlY3RhbmdsZSh0aGlzLnggKyB0aGlzLl9ib3VuZHNPZmZzZXQueCAqIHRoaXMuc2NhbGUueCwgdGhpcy55IC0gKHRoaXMuc2tlbGV0b24uZGF0YS5oZWlnaHQgKiB0aGlzLnNjYWxlLnkpICsgdGhpcy5fYm91bmRzT2Zmc2V0LnkgKiB0aGlzLnNjYWxlLnksIHRoaXMuc2tlbGV0b24uZGF0YS53aWR0aCAqIE1hdGguYWJzKHRoaXMuc2NhbGUueCkgKiB0aGlzLmJvdW5kc1dpZHRoU2NhbGUsIHRoaXMuc2tlbGV0b24uZGF0YS5oZWlnaHQgKiBNYXRoLmFicyh0aGlzLnNjYWxlLnkpICogdGhpcy5ib3VuZHNIZWlnaHRTY2FsZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRCb3VuZHM7XG4gICAgfVxuXG4gICAgLy8gYWxzbyB1cGRhdGVzIHRoZSBib3VuZHNcbiAgICBwdWJsaWMgc2V0U2NhbGUoeDogbnVtYmVyID0gbnVsbCwgeTogbnVtYmVyID0gbnVsbCkge1xuICAgICAgICBpZiAoeCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zY2FsZS54ID0geDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zY2FsZS55ID0geTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jdXJyZW50Qm91bmRzID0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHdpZHRoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJvdW5kcygpLndpZHRoO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJvdW5kcygpLmhlaWdodDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGJvZHkoKTogYW55IHtcbiAgICAgICAgaWYgKCF0aGlzLl9waHlzaWNzRW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGh5c2ljc1Nwcml0ZS5ib2R5O1xuICAgIH1cblxuICAgIC8vIGF1dG8gbWVzaCAvIG5vbi1tZXNoIGFzc2V0IGxvYWRpbmdcbiAgICBwdWJsaWMgc3RhdGljIEFVVE9fTUVTSDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIHN0YXRpYyBERUZBVUxUX05PTl9NRVNIX1NVRkZJWDogc3RyaW5nID0gJ19ub21lc2gnO1xuICAgIHB1YmxpYyBzdGF0aWMgTk9OX01FU0hfU1VGRklYOiBzdHJpbmcgPSBudWxsO1xuXG4gICAgcHVibGljIHN0YXRpYyBERUZBVUxUX05PTl9NRVNIX0ZQUzogbnVtYmVyID0gMzU7XG4gICAgcHVibGljIHN0YXRpYyBOT05fTUVTSF9GUFM6IG51bWJlciA9IG51bGw7XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldEF1dG9NZXNoKGVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlLCBub25NZXNoU3VmZml4OiBzdHJpbmcgPSBTcGluZS5ERUZBVUxUX05PTl9NRVNIX1NVRkZJWCwgbm9uTWVzaEZQUzogbnVtYmVyID0gU3BpbmUuREVGQVVMVF9OT05fTUVTSF9GUFMpIHtcbiAgICAgICAgU3BpbmUuQVVUT19NRVNIID0gZW5hYmxlZDtcbiAgICAgICAgU3BpbmUuTk9OX01FU0hfU1VGRklYID0gbm9uTWVzaFN1ZmZpeDtcbiAgICAgICAgU3BpbmUuTk9OX01FU0hfRlBTID0gbm9uTWVzaEZQUztcbiAgICB9XG59IiwiaW1wb3J0IHtJQnJvd3Nlcn0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7QXBwbGljYXRpb259IGZyb20gXCIuL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQge0dhbWV9IGZyb20gXCIuL2NvcmVcIjtcbmltcG9ydCB7VGV4dH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuXG5leHBvcnQgY2xhc3MgVXRpbCB7XG4gICAgcHVibGljIHN0YXRpYyBpc051bWJlcih2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoK3ZhbHVlID09PSArdmFsdWUpO1xuICAgIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgTG9nZ2VyIHtcbiAgICBwdWJsaWMgc3RhdGljIGVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyBzdGF0aWMgbG9nKGluc3RhbmNlLCAuLi5hcmdzKSB7XG4gICAgICAgIGlmICghTG9nZ2VyLmVuYWJsZWQpIHsgXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluc3RhbmNlICYmIGluc3RhbmNlLmNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICBhcmdzLnVuc2hpZnQoaW5zdGFuY2UuY29uc3RydWN0b3IudG9TdHJpbmcoKS5tYXRjaCgvXFx3Ky9nKVsxXSArICcgOjonKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJncyk7IFxuICAgIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgRGV2aWNlIHtcbiAgICBwdWJsaWMgc3RhdGljIElPUzogc3RyaW5nID0gJ2lPUyc7XG4gICAgcHVibGljIHN0YXRpYyBBTkRST0lEOiBzdHJpbmcgPSAnYW5kcm9pZCc7XG4gICAgcHVibGljIHN0YXRpYyBVTktOT1dOOiBzdHJpbmcgPSAndW5rbm93bic7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBtb2JpbGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBEZXZpY2UubW9iaWxlT1MgIT09IERldmljZS5VTktOT1dOO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGNvY29vbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgbmF2aWdhdG9yWydpc0NvY29vbkpTJ10gIT09IFwidW5kZWZpbmVkXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IG1vYmlsZU9TKCkge1xuICAgICAgICBjb25zdCB1c2VyQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCB8fCB3aW5kb3cubmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3dbJ29wZXJhJ107XG4gICAgICAgIGlmICh1c2VyQWdlbnQubWF0Y2goL2lQYWQvaSkgfHwgdXNlckFnZW50Lm1hdGNoKC9pUGhvbmUvaSkgfHwgdXNlckFnZW50Lm1hdGNoKC9pUG9kL2kpKSB7XG4gICAgICAgICAgICByZXR1cm4gRGV2aWNlLklPUztcbiAgICAgICAgfSBlbHNlIGlmICh1c2VyQWdlbnQubWF0Y2goL0FuZHJvaWQvaSkpIHtcbiAgICAgICAgICAgIHJldHVybiBEZXZpY2UuQU5EUk9JRDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBEZXZpY2UuVU5LTk9XTjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGJyb3dzZXIoKTogSUJyb3dzZXIge1xuICAgICAgICBjb25zdCB1YTogc3RyaW5nID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmlyZWZveDogdWEuaW5kZXhPZignZmlyZWZveCcpID4gLTEsXG4gICAgICAgICAgICBpZTogdWEuaW5kZXhPZignaWUnKSA+IC0xLFxuICAgICAgICAgICAgc2FmYXJpOiB1YS5pbmRleE9mKCdzYWZhcmknKSA+IC0xLFxuICAgICAgICAgICAgY2hyb21lOiB1YS5pbmRleE9mKCdjaHJvbWUnKSA+IC0xLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgcGl4ZWxSYXRpbygpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyAhPT0gdW5kZWZpbmVkID8gd2luZG93LmRldmljZVBpeGVsUmF0aW8gOiAxO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGN1c3RvbVBpeGVsUmF0aW8oKSB7XG4gICAgICAgIHJldHVybiBEZXZpY2UucGl4ZWxSYXRpbyA+PSAxLjUgPyAyIDogMTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0dXJlcyB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IGdhbWUoKTogUGhhc2VyLkdhbWUge1xuICAgICAgICByZXR1cm4gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lO1xuICAgIH1cblxuICAgIHN0YXRpYyByZWN0KHdpZHRoOiBudW1iZXIgPSAxMDAsIGhlaWdodDogbnVtYmVyID0gMTAwLCBjb2xvcjogbnVtYmVyID0gMHhmZmZmZmYsIGFscGhhOiBudW1iZXIgPSAxLCBmaWxsOiBib29sZWFuID0gdHJ1ZSwgbGluZUNvbG9yOiBudW1iZXIgPSAweGZmZmZmZiwgbGluZVRoaWNrbmVzczogbnVtYmVyID0gMSwgbGluZUFscGhhOiBudW1iZXIgPSAxLCBvdXRsaW5lOiBib29sZWFuID0gZmFsc2UpOiBQSVhJLlRleHR1cmUge1xuICAgICAgICBjb25zdCBnZnggPSBUZXh0dXJlcy5nYW1lLmFkZC5ncmFwaGljcygwLCAwKTtcbiAgICAgICAgaWYgKGZpbGwpIHtcbiAgICAgICAgICAgIGdmeC5iZWdpbkZpbGwoY29sb3IsIGFscGhhKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3V0bGluZSkge1xuICAgICAgICAgICAgZ2Z4LmxpbmVXaWR0aCA9IGxpbmVUaGlja25lc3M7XG4gICAgICAgICAgICBnZngubGluZVN0eWxlKGxpbmVUaGlja25lc3MsIGxpbmVDb2xvciwgbGluZUFscGhhKTtcbiAgICAgICAgfVxuICAgICAgICBnZnguZHJhd1JlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IGdmeC5nZW5lcmF0ZVRleHR1cmUoKTtcbiAgICAgICAgVGV4dHVyZXMuZ2FtZS53b3JsZC5yZW1vdmUoZ2Z4KTtcblxuICAgICAgICByZXR1cm4gdGV4dHVyZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcm91bmRlZFJlY3Qod2lkdGg6IG51bWJlciA9IDEwMCwgaGVpZ2h0OiBudW1iZXIgPSAxMDAsIHJhZGl1czogbnVtYmVyID0gMTAsIGNvbG9yOiBudW1iZXIgPSAweGZmZmZmZiwgYWxwaGE6IG51bWJlciA9IDEsIGZpbGw6IGJvb2xlYW4gPSB0cnVlLCBsaW5lQ29sb3I6IG51bWJlciA9IDB4ZmZmZmZmLCBsaW5lVGhpY2tuZXNzOiBudW1iZXIgPSAxLCBsaW5lQWxwaGE6IG51bWJlciA9IDEsIG91dGxpbmU6IGJvb2xlYW4gPSBmYWxzZSk6IFBJWEkuVGV4dHVyZSB7XG4gICAgICAgIGNvbnN0IGdmeCA9IFRleHR1cmVzLmdhbWUuYWRkLmdyYXBoaWNzKDAsIDApO1xuICAgICAgICBpZiAoZmlsbCkge1xuICAgICAgICAgICAgZ2Z4LmJlZ2luRmlsbChjb2xvciwgYWxwaGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvdXRsaW5lKSB7XG4gICAgICAgICAgICBnZngubGluZVdpZHRoID0gbGluZVRoaWNrbmVzcztcbiAgICAgICAgICAgIGdmeC5saW5lU3R5bGUobGluZVRoaWNrbmVzcywgbGluZUNvbG9yLCBsaW5lQWxwaGEpO1xuICAgICAgICB9XG4gICAgICAgIGdmeC5kcmF3Um91bmRlZFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKTtcblxuICAgICAgICBjb25zdCB0ZXh0dXJlID0gZ2Z4LmdlbmVyYXRlVGV4dHVyZSgpO1xuICAgICAgICBUZXh0dXJlcy5nYW1lLndvcmxkLnJlbW92ZShnZngpO1xuXG4gICAgICAgIHJldHVybiB0ZXh0dXJlO1xuICAgIH1cblxuICAgIHN0YXRpYyBzcXVhcmUoc2l6ZTogbnVtYmVyID0gMTAwLCBjb2xvcjogbnVtYmVyID0gMHhmZmZmZmYsIGFscGhhOiBudW1iZXIgPSAxLCBmaWxsOiBib29sZWFuID0gdHJ1ZSwgbGluZUNvbG9yOiBudW1iZXIgPSAweGZmZmZmZiwgbGluZVRoaWNrbmVzczogbnVtYmVyID0gMSwgbGluZUFscGhhOiBudW1iZXIgPSAxLCBvdXRsaW5lOiBib29sZWFuID0gZmFsc2UpOiBQSVhJLlRleHR1cmUge1xuICAgICAgICByZXR1cm4gVGV4dHVyZXMucmVjdChzaXplLCBzaXplLCBjb2xvciwgYWxwaGEsIGZpbGwsIGxpbmVDb2xvciwgbGluZVRoaWNrbmVzcywgbGluZUFscGhhLCBvdXRsaW5lKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2lyY2xlKGRpYW1ldGVyOiBudW1iZXIgPSAxMDAsIGNvbG9yOiBudW1iZXIgPSAweGZmZmZmZiwgYWxwaGE6IG51bWJlciA9IDEsIGZpbGw6IGJvb2xlYW4gPSB0cnVlLCBsaW5lQ29sb3I6IG51bWJlciA9IDB4ZmZmZmZmLCBsaW5lVGhpY2tuZXNzOiBudW1iZXIgPSAxLCBsaW5lQWxwaGE6IG51bWJlciA9IDEsIG91dGxpbmU6IGJvb2xlYW4gPSBmYWxzZSk6IFBJWEkuVGV4dHVyZSB7XG4gICAgICAgIGNvbnN0IGdmeCA9IFRleHR1cmVzLmdhbWUuYWRkLmdyYXBoaWNzKDAsIDApO1xuICAgICAgICBpZiAoZmlsbCkge1xuICAgICAgICAgICAgZ2Z4LmJlZ2luRmlsbChjb2xvciwgYWxwaGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvdXRsaW5lKSB7XG4gICAgICAgICAgICBnZngubGluZVdpZHRoID0gbGluZVRoaWNrbmVzcztcbiAgICAgICAgICAgIGdmeC5saW5lU3R5bGUobGluZVRoaWNrbmVzcywgbGluZUNvbG9yLCBsaW5lQWxwaGEpO1xuICAgICAgICB9XG4gICAgICAgIGdmeC5kcmF3Q2lyY2xlKDAsIDAsIGRpYW1ldGVyKTtcblxuICAgICAgICBjb25zdCB0ZXh0dXJlID0gZ2Z4LmdlbmVyYXRlVGV4dHVyZSgpO1xuICAgICAgICBUZXh0dXJlcy5nYW1lLndvcmxkLnJlbW92ZShnZngpO1xuXG4gICAgICAgIHJldHVybiB0ZXh0dXJlO1xuICAgIH1cblxuICAgIHN0YXRpYyBlbGxpcHNlKHdpZHRoOiBudW1iZXIgPSA1MCwgaGVpZ2h0OiBudW1iZXIgPSAxMDAsIGNvbG9yOiBudW1iZXIgPSAweGZmZmZmZiwgYWxwaGE6IG51bWJlciA9IDEsIGZpbGw6IGJvb2xlYW4gPSB0cnVlLCBsaW5lQ29sb3I6IG51bWJlciA9IDB4ZmZmZmZmLCBsaW5lVGhpY2tuZXNzOiBudW1iZXIgPSAxLCBsaW5lQWxwaGE6IG51bWJlciA9IDEsIG91dGxpbmU6IGJvb2xlYW4gPSBmYWxzZSk6IFBJWEkuVGV4dHVyZSB7XG4gICAgICAgIGNvbnN0IGdmeCA9IFRleHR1cmVzLmdhbWUuYWRkLmdyYXBoaWNzKDAsIDApO1xuICAgICAgICBpZiAoZmlsbCkge1xuICAgICAgICAgICAgZ2Z4LmJlZ2luRmlsbChjb2xvciwgYWxwaGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvdXRsaW5lKSB7XG4gICAgICAgICAgICBnZngubGluZVdpZHRoID0gbGluZVRoaWNrbmVzcztcbiAgICAgICAgICAgIGdmeC5saW5lU3R5bGUobGluZVRoaWNrbmVzcywgbGluZUNvbG9yLCBsaW5lQWxwaGEpO1xuICAgICAgICB9XG4gICAgICAgIGdmeC5kcmF3RWxsaXBzZSgwLCAwLCB3aWR0aCAqIDAuNSwgaGVpZ2h0ICogMC41KTtcblxuICAgICAgICBjb25zdCB0ZXh0dXJlID0gZ2Z4LmdlbmVyYXRlVGV4dHVyZSgpO1xuICAgICAgICBUZXh0dXJlcy5nYW1lLndvcmxkLnJlbW92ZShnZngpO1xuXG4gICAgICAgIHJldHVybiB0ZXh0dXJlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBsYWNlaG9sZGVycyB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IGdhbWUoKTogUGhhc2VyLkdhbWUge1xuICAgICAgICByZXR1cm4gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbWFnZSh4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCB0ZXh0dXJlOiBhbnksIG5hbWU6IHN0cmluZyA9IFwiXCIpOiBQaGFzZXIuSW1hZ2Uge1xuICAgICAgICBjb25zdCBpbWFnZUluc3RhbmNlID0gbmV3IFBoYXNlci5JbWFnZShQbGFjZWhvbGRlcnMuZ2FtZSwgeCwgeSwgdGV4dHVyZSk7XG4gICAgICAgIGltYWdlSW5zdGFuY2UubmFtZSA9IG5hbWU7XG4gICAgICAgIHJldHVybiBpbWFnZUluc3RhbmNlO1xuICAgIH1cblxuICAgIHN0YXRpYyBidXR0b24oeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgd2lkdGg6IG51bWJlciA9IDEwMCwgaGVpZ2h0OiBudW1iZXIgPSA1MCwgYXV0b1NpemU6IGJvb2xlYW4gPSBmYWxzZSwgdGV4dDogc3RyaW5nID0gJ2J1dHRvbicsIGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGwsIGNhbGxiYWNrQ29udGV4dDogYW55ID0gbnVsbCwgZGVmYXVsdENvbG9yOiBudW1iZXIgPSAweGZmZmZmZiwgb3ZlckNvbG9yOiBudW1iZXIgPSAweGZmMDAwMCwgZG93bkNvbG9yOiBudW1iZXIgPSAweDAwZmYwMCk6IFBoYXNlci5TcHJpdGUge1xuICAgICAgICBjb25zdCBzcHJpdGU6IFBoYXNlci5TcHJpdGUgPSBuZXcgUGhhc2VyLlNwcml0ZShQbGFjZWhvbGRlcnMuZ2FtZSwgeCwgeSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSB0ZXh0IGluc3RhbmNlIHdpdGggYW4gYXV0byBzaXplIG9mIDI1IG9yIDYwJSBvZiB0aGUgaGVpZ2h0IHBhc3NlZCBpbi5cbiAgICAgICAgY29uc3QgdGV4dEluc3RhbmNlOiBUZXh0ID0gbmV3IFRleHQod2lkdGggKiAwLjUsIGhlaWdodCAqIDAuNTUsIFwiIFwiICsgdGV4dCArIFwiIFwiLCAnQXJpYWwnLCBhdXRvU2l6ZSA/IDI1IDogaGVpZ2h0ICogMC42LCAnIzAwMDAwMCcpO1xuICAgICAgICB0ZXh0SW5zdGFuY2UuY2VudGVyUGl2b3QoKTtcbiAgICAgICAgdGV4dEluc3RhbmNlLm5hbWUgPSBcIkxhYmVsXCI7XG5cbiAgICAgICAgaWYgKGF1dG9TaXplKSB7XG4gICAgICAgICAgICAvLyBVc2UgYSBwYWRkaW5nIG9mIDEwXG4gICAgICAgICAgICB3aWR0aCA9IHRleHRJbnN0YW5jZS5yZWFsV2lkdGggKyAxMDtcbiAgICAgICAgICAgIGhlaWdodCA9IHRleHRJbnN0YW5jZS5yZWFsSGVpZ2h0ICsgMTA7XG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHRleHQgcG9zaXRpb25cbiAgICAgICAgICAgIHRleHRJbnN0YW5jZS5wb3NpdGlvbi5zZXQod2lkdGggKiAwLjUsIGhlaWdodCAqIDAuNTUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXBJbWFnZTogUGhhc2VyLkltYWdlID0gUGxhY2Vob2xkZXJzLmltYWdlKDAsIDAsIFRleHR1cmVzLnJvdW5kZWRSZWN0KHdpZHRoLCBoZWlnaHQsIDEwLCBkZWZhdWx0Q29sb3IpLCBcIlVwXCIpO1xuICAgICAgICBjb25zdCBvdmVySW1hZ2U6IFBoYXNlci5JbWFnZSA9IFBsYWNlaG9sZGVycy5pbWFnZSgwLCAwLCBUZXh0dXJlcy5yb3VuZGVkUmVjdCh3aWR0aCwgaGVpZ2h0LCAxMCwgb3ZlckNvbG9yKSwgXCJPdmVyXCIpO1xuICAgICAgICBjb25zdCBkb3duSW1hZ2U6IFBoYXNlci5JbWFnZSA9IFBsYWNlaG9sZGVycy5pbWFnZSgwLCAwLCBUZXh0dXJlcy5yb3VuZGVkUmVjdCh3aWR0aCwgaGVpZ2h0LCAxMCwgZG93bkNvbG9yKSwgXCJEb3duXCIpO1xuXG5cbiAgICAgICAgb3ZlckltYWdlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgZG93bkltYWdlLnZpc2libGUgPSBmYWxzZTtcblxuICAgICAgICBzcHJpdGUuYWRkQ2hpbGQodXBJbWFnZSk7XG4gICAgICAgIHNwcml0ZS5hZGRDaGlsZChvdmVySW1hZ2UpO1xuICAgICAgICBzcHJpdGUuYWRkQ2hpbGQoZG93bkltYWdlKTtcbiAgICAgICAgc3ByaXRlLmFkZENoaWxkKHRleHRJbnN0YW5jZSk7XG5cbiAgICAgICAgc3ByaXRlLmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHNwcml0ZS5pbnB1dC51c2VIYW5kQ3Vyc29yID0gdHJ1ZTtcblxuICAgICAgICBzcHJpdGUuZXZlbnRzLm9uSW5wdXRVcC5hZGQoKCkgPT4ge1xuICAgICAgICAgICAgZG93bkltYWdlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIG92ZXJJbWFnZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB1cEltYWdlLnZpc2libGUgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGNhbGxiYWNrQ29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNwcml0ZS5ldmVudHMub25JbnB1dERvd24uYWRkKCgpID0+IHtcbiAgICAgICAgICAgIGRvd25JbWFnZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIG92ZXJJbWFnZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB1cEltYWdlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3ByaXRlLmV2ZW50cy5vbklucHV0T3Zlci5hZGQoKCkgPT4ge1xuICAgICAgICAgICAgZG93bkltYWdlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIG92ZXJJbWFnZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHVwSW1hZ2UudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICBzcHJpdGUuZXZlbnRzLm9uSW5wdXRPdXQuYWRkKCgpID0+IHtcbiAgICAgICAgICAgIGRvd25JbWFnZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBvdmVySW1hZ2UudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgdXBJbWFnZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3ByaXRlLmdldEJvdW5kcyA9IGZ1bmN0aW9uKCk6IFBJWEkuUmVjdGFuZ2xlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUElYSS5SZWN0YW5nbGUoMCwgMCwgdXBJbWFnZS53aWR0aCwgdXBJbWFnZS5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzcHJpdGU7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGltZSB7XG4gICAgcHVibGljIHN0YXRpYyBkZWxheWVkQ2FsbChkZWxheUluTWlsbGlzZWNvbmRzOiBudW1iZXIsIGNhbGxiYWNrOiBGdW5jdGlvbiwgY2FsbGJhY2tDb250ZXh0OiBhbnksIC4uLnBhcmFtcykge1xuICAgICAgICBpZiAocGFyYW1zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHBhcmFtcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHBhcmFtcy51bnNoaWZ0KGRlbGF5SW5NaWxsaXNlY29uZHMsIGNhbGxiYWNrLCBjYWxsYmFja0NvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUudGltZS5ldmVudHMuYWRkLmFwcGx5KEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZS50aW1lLmV2ZW50cywgcGFyYW1zKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25zIHtcbiAgICBwdWJsaWMgc3RhdGljIEFTU0VUX01BTkFHRVJfREFUQV9TRVQ6IHN0cmluZyA9ICdkaWpvbkFzc2V0TWFuYWdlckRhdGFTZXQnO1xuICAgIHB1YmxpYyBzdGF0aWMgQVNTRVRfTUFOQUdFUl9BU1NFVFNfQ0xFQVJFRDogc3RyaW5nID0gJ2Rpam9uQXNzZXRNYW5hZ2VyQXNzZXRzQ2xlYXJlZCc7XG5cbiAgICBwdWJsaWMgc3RhdGljIE1PVVNFX0xFQVZFX0dMT0JBTDogc3RyaW5nID0gJ21vdXNlT3V0R2xvYmFsJztcbiAgICBwdWJsaWMgc3RhdGljIE1PVVNFX0VOVEVSX0dMT0JBTDogc3RyaW5nID0gJ21vdXNlRW50ZXJHbG9iYWwnO1xufVxuXG4iLCJpbXBvcnQge0FwcGxpY2F0aW9ufSBmcm9tICcuL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7SU5vdGlmaWVyLCBJQXNzZXRMaXN0LCBJUGF0aENvbmZpZywgSVNvdW5kLCBJQXNzZXQsIElUaWxlZG1hcEFzc2V0cywgSUdhbWVDb25maWcsIElUcmFuc2l0aW9uLCBJVHJhbnNpdGlvbkhhbmRsZXIsIElQcmVsb2FkSGFuZGxlcn0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7TWVkaWF0b3J9IGZyb20gJy4vbXZjJztcbmltcG9ydCB7Tm90aWZpY2F0aW9uc30gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge1Nwcml0ZSwgR3JvdXAsIFRleHQsIENvbXBvbmVudCwgU3BpbmV9IGZyb20gJy4vZGlzcGxheSc7XG5cbmV4cG9ydCBjbGFzcyBBbmFseXRpY3NNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZW5hYmxlZDogYm9vbGVhbiA9IHRydWUsIHB1YmxpYyBjYXRlZ29yeTogc3RyaW5nID0gbnVsbCkgeyB9XG5cbiAgICBwdWJsaWMgdHJhY2tFdmVudChhY3Rpb246IHN0cmluZyA9IG51bGwsIGxhYmVsOiBzdHJpbmcgPSBudWxsLCB2YWx1ZTogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICBpZiAoIXRoaXMuYWN0aXZlIHx8ICF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYWN0aW9uKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQW5hbHl0aWNzRXhjZXB0aW9uKCdObyBhY3Rpb24gZGVmaW5lZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmdhKCdzZW5kJywgJ2V2ZW50JywgdGhpcy5jYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLmdhKCdzZW5kJywgJ2V2ZW50JywgdGhpcy5jYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdhKCdzZW5kJywgJ2V2ZW50JywgdGhpcy5jYXRlZ29yeSwgYWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyYWNrT21uaXR1cmVFdmVudChnYW1lTmFtZTogc3RyaW5nLCBhY3Rpdml0eTogc3RyaW5nLCBpc0dhbWVFdmVudDogYm9vbGVhbikge1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3RyYWNraW5nIG9tbml0dXJlJywgZ2FtZU5hbWUsIGFjdGl2aXR5LCBpc0dhbWVFdmVudCk7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93Wyd0cmFja0ZsYXNoRXZlbnQnXSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHdpbmRvd1sndHJhY2tGbGFzaEV2ZW50J10oZ2FtZU5hbWUsIGFjdGl2aXR5LCBpc0dhbWVFdmVudCk7XG4gICAgfVxuXG4gICAgLy8gZ2V0dGVyIC8gc2V0dGVyXG4gICAgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICh3aW5kb3dbJ2dhJ10pID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCBnYSgpOiBGdW5jdGlvbiB7XG4gICAgICAgIHJldHVybiB3aW5kb3dbJ2dhJ107XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQW5hbHl0aWNzRXhjZXB0aW9uIHtcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nID0gJ0FuYWx5dGljc0V4Y2VwdGlvbic7XG4gICAgY29uc3RydWN0b3IocHVibGljIG1lc3NhZ2U6IHN0cmluZykgeyB9XG59XG5cblxuLyoqXG4gKiBXcmFwcyBQaGFzZXIuTG9hZGVyXG4qL1xuZXhwb3J0IGNsYXNzIEFzc2V0TWFuYWdlciBpbXBsZW1lbnRzIElOb3RpZmllciB7XG4gICAgcHJvdGVjdGVkIGFwcDogQXBwbGljYXRpb247XG5cbiAgICAvLyBwcml2YXRlIHZhcmlhYmxlc1xuICAgIHByaXZhdGUgX2RhdGEgPSB7fTtcbiAgICBwcml2YXRlIF9iYXNlVVJMOiBzdHJpbmcgPSAnJztcbiAgICBwcml2YXRlIF9wYXRoT2JqOiBJUGF0aENvbmZpZyB8IGFueSA9IHt9O1xuICAgIHByaXZhdGUgX2Fzc2V0UGF0aDogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIF9kYXRhUGF0aDogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIF9zcHJpdGVTaGVldFBhdGg6IHN0cmluZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBfaW1nUGF0aDogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIF92aWRlb1BhdGg6IHN0cmluZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBfc3BpbmVQYXRoOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgX2ZvbnRQYXRoOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgX2JpdG1hcEZvbnRQYXRoOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgX3BoeXNpY3NQYXRoOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgX2F1ZGlvU3ByaXRlUGF0aDogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIF9zb3VuZFBhdGg6IHN0cmluZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBfc291bmREZWNvZGluZ01vZGlmaWVyOiBudW1iZXIgPSAyO1xuICAgIHByaXZhdGUgX3JlczogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIF9yZXNvbHV0aW9uOiBzdHJpbmcgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfbG9hZERhdGEgPSB7fTtcbiAgICBwcml2YXRlIF9hdXRvTG9hZERhdGEgPSB7fTtcbiAgICBwcml2YXRlIF9jb21wbGV0ZWRMb2FkcyA9IHt9O1xuICAgIHByaXZhdGUgX3JlcXVpcmVkRGF0YSA9IHt9O1xuXG4gICAgcHJpdmF0ZSBfY3VycmVudEFzc2V0TGlzdDogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIF9oYXNGaWxlczogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX3NvdW5kc1RvRGVjb2RlOiBBcnJheTxJU291bmQ+ID0gW107XG4gICAgcHJpdmF0ZSBfaXNMb2FkaW5nUXVldWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIF9maWxlQ29tcGxldGVQcm9ncmVzczogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9tYXhQZXJjZW50OiBudW1iZXIgPSAxMDA7XG5cbiAgICBwcml2YXRlIF9udW1Tb3VuZHM6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfc291bmRzRGVjb2RlZDogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgX2NhY2hlQnVzdFZlcnNpb246IHN0cmluZyA9ICcnO1xuXG4gICAgLy8gcHVibGljIHZhcmlhYmxlc1xuICAgIHB1YmxpYyBnYW1lOiBHYW1lO1xuXG4gICAgcHVibGljIG9uTG9hZFN0YXJ0ID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICBwdWJsaWMgb25GaWxlU3RhcnQgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuICAgIHB1YmxpYyBvbkZpbGVDb21wbGV0ZSA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgcHVibGljIG9uTG9hZENvbXBsZXRlID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICBwdWJsaWMgb25Mb2FkQ29tcGxldGVBbmRBdWRpb0RlY29kZWQgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuXG4gICAgcHVibGljIG9uQmFja2dyb3VuZExvYWRTdGFydCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgcHVibGljIG9uQmFja2dyb3VuZEZpbGVTdGFydCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgcHVibGljIG9uQmFja2dyb3VuZEZpbGVDb21wbGV0ZSA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgcHVibGljIG9uQmFja2dyb3VuZExvYWRDb21wbGV0ZSA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgcHVibGljIG9uQmFja2dyb3VuZExvYWRDb21wbGV0ZUFuZEF1ZGlvRGVjb2RlZCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG5cbiAgICAvLyBzdGF0aWMgY29uc3RhbnRzXG4gICAgLy8gYXNzZXQgdHlwZXNcbiAgICBwdWJsaWMgc3RhdGljIEFVRElPOiBzdHJpbmcgPSAnYXVkaW8nO1xuICAgIHB1YmxpYyBzdGF0aWMgU09VTkQ6IHN0cmluZyA9ICdzb3VuZCc7XG4gICAgcHVibGljIHN0YXRpYyBBVURJT19TUFJJVEU6IHN0cmluZyA9ICdhdWRpb1Nwcml0ZSc7XG4gICAgcHVibGljIHN0YXRpYyBJTUFHRTogc3RyaW5nID0gJ2ltYWdlJztcbiAgICBwdWJsaWMgc3RhdGljIFZJREVPOiBzdHJpbmcgPSAndmlkZW8nO1xuICAgIHB1YmxpYyBzdGF0aWMgQVRMQVM6IHN0cmluZyA9ICdhdGxhcyc7XG4gICAgcHVibGljIHN0YXRpYyBURVhUOiBzdHJpbmcgPSAndGV4dCc7XG4gICAgcHVibGljIHN0YXRpYyBKU09OOiBzdHJpbmcgPSAnanNvbic7XG4gICAgcHVibGljIHN0YXRpYyBUSUxFTUFQOiBzdHJpbmcgPSAndGlsZW1hcCc7XG4gICAgcHVibGljIHN0YXRpYyBUSUxFRE1BUDogc3RyaW5nID0gJ3RpbGVkbWFwJztcbiAgICBwdWJsaWMgc3RhdGljIFRJTEVETUFQX1RJTEVTRVQ6IHN0cmluZyA9ICd0aWxlc2V0JztcbiAgICBwdWJsaWMgc3RhdGljIFRJTEVETUFQX0xBWUVSOiBzdHJpbmcgPSAnbGF5ZXInO1xuICAgIHB1YmxpYyBzdGF0aWMgUEhZU0lDUzogc3RyaW5nID0gJ3BoeXNpY3MnO1xuICAgIHB1YmxpYyBzdGF0aWMgU1BJTkU6IHN0cmluZyA9ICdzcGluZSc7XG4gICAgcHVibGljIHN0YXRpYyBBU1NFVF9MSVNUOiBzdHJpbmcgPSAnYXNzZXRMaXN0JztcblxuICAgIC8vIHJlc29sdXRpb25zXG4gICAgcHVibGljIHN0YXRpYyBSRVNPTFVUSU9OXzJYOiBzdHJpbmcgPSBcIkAyeFwiO1xuICAgIHB1YmxpYyBzdGF0aWMgUkVTT0xVVElPTl8zWDogc3RyaW5nID0gXCJAM3hcIjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9pbml0KCk7XG4gICAgfVxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuICAgIC8qKlxuICAgICogYWRkcyBpbnRlcm5hbCB2YXJpYWJsZXMgYW5kIHNpZ25hbHNcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfaW5pdCgpIHtcbiAgICAgICAgdGhpcy5hcHAgPSBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLmdhbWUgPSB0aGlzLmFwcC5nYW1lO1xuICAgICAgICB0aGlzLmJhc2VVUkwgPSAnJztcbiAgICAgICAgdGhpcy5wYXRocyA9IG51bGw7XG4gICAgICAgIHRoaXMucmVzb2x1dGlvbiA9IHRoaXMuZ2FtZS5yZXNvbHV0aW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogcGFyc2VzIGFuIGFzc2V0IGxpc3QgYnkga2V5ICh1c3VhbGx5IGZyb20gZGF0YS9hc3NldHMuanNvbikgYW5kIHN0b3JlcyB0aGVtIGludGVybmFsbHlcbiAgICAqIEBwYXJhbSAge1N0cmluZ30ga2V5IHRoZSBpZCBvZiB0aGUgbGlzdFxuICAgICogQHBhcmFtICB7QXJyYXl9ICBsaXN0IHRoZSBqc29uIGFycmF5IG9mIGFzc2V0c1xuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBwcml2YXRlIF9wYXJzZUFzc2V0TGlzdChrZXk6IHN0cmluZywgbGlzdDogSUFzc2V0TGlzdCkge1xuICAgICAgICB0aGlzLl9hdXRvTG9hZERhdGFba2V5XSA9IGxpc3QuYXV0b2xvYWQ7XG4gICAgICAgIHRoaXMuX3JlcXVpcmVkRGF0YVtrZXldID0gbGlzdC5yZXF1aXJlZDtcblxuICAgICAgICB0aGlzLl9sb2FkRGF0YVtrZXldID0gW107XG5cbiAgICAgICAgbGlzdC5hc3NldHMuZm9yRWFjaChhc3NldCA9PiB7XG4gICAgICAgICAgICB0aGlzLl9sb2FkRGF0YVtrZXldLnB1c2goYXNzZXQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGFkZHMgYXNzZXRzIGZyb20gYSBsaXN0IHRvIHRoZSBsb2FkIGxpc3RcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gaWQgaWQgb2YgdGhlIGxpc3QgdG8gYWRkXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIHByaXZhdGUgX2xvYWRBc3NldHMoaWQ6IHN0cmluZykge1xuICAgICAgICB2YXIgYXNzZXRzID0gdGhpcy5fbG9hZERhdGFbaWRdLFxuICAgICAgICAgICAgaTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXNzZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2FkQXNzZXQoYXNzZXRzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICogc3RhcnQgdGhlIGJhY2tncm91bmQgbG9hZGluZ1xuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBwcml2YXRlIF9iYWNrZ3JvdW5kTG9hZFN0YXJ0KCkge1xuICAgICAgICB0aGlzLm9uQmFja2dyb3VuZExvYWRTdGFydC5kaXNwYXRjaCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogd2hlbiBhIGZpbGUgY29tcGxldGVzIGluIGFuIGJhY2tncm91bmQgbG9hZCBxdWV1ZSAtIGRpc3BhdGNoZXMgdGhlIG9uQmFja2dyb3VuZEZpbGVDb21wbGV0ZSBzaWduYWxcbiAgICAqIEBwYXJhbSAge051bWJlcn0gcHJvZ3Jlc3MgICB0aGUgcGVyY2VudCBwcm9ncmVzc1xuICAgICogQHBhcmFtICB7U3RyaW5nfSBpZCAgICAgICAgIHRoZSBmaWxlIGlkXG4gICAgKiBAcGFyYW0gIHtpbnR9ICAgIGZpbGVJbmRleCAgdGhlIGluZGV4IG9mIHRoZSBmaWxlIGluIHRoZSBsaXN0XG4gICAgKiBAcGFyYW0gIHtpbnR9ICAgIHRvdGFsRmlsZXMgdGhlIHRvdGFsIG51bWJlciBvZiBmaWxlcyBpbiB0aGUgbGlzdFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBwcml2YXRlIF9iYWNrZ3JvdW5kRmlsZUNvbXBsZXRlKHByb2dyZXNzOiBudW1iZXIsIGlkOiBzdHJpbmcsIGZpbGVJbmRleDogbnVtYmVyLCB0b3RhbEZpbGVzOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jYWNoZS5jaGVja0tleShQaGFzZXIuQ2FjaGUuSU1BR0UsIGlkKSkge1xuICAgICAgICAgICAgdGhpcy5fc2V0QmFzZVRleHR1cmVSZXNvbHV0aW9uKHRoaXMuZ2FtZS5jYWNoZS5nZXRQaXhpQmFzZVRleHR1cmUoaWQpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9maWxlQ29tcGxldGVQcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgICAgICB0aGlzLm9uQmFja2dyb3VuZEZpbGVDb21wbGV0ZS5kaXNwYXRjaChwcm9ncmVzcywgaWQsIGZpbGVJbmRleCwgdG90YWxGaWxlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiB3aGVuIHRoZSBiYWNrZ3JvdW5kIGxvYWQgY29tcGxldGVzIC0gZGlzcGF0Y2hlcyB0aGUgb25CYWNrZ3JvdW5kTG9hZENvbXBsZXRlIHNpZ25hbCwgc3RhcnRzIGNoZWNraW5nIGZvciBkZWNvZGVkIHNvdW5kc1xuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBwcml2YXRlIF9iYWNrZ3JvdW5kTG9hZENvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkZpbGVDb21wbGV0ZS5yZW1vdmUodGhpcy5fYmFja2dyb3VuZEZpbGVDb21wbGV0ZSwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5vbkJhY2tncm91bmRMb2FkQ29tcGxldGUuZGlzcGF0Y2goKTtcbiAgICAgICAgdGhpcy5fY2hlY2tTb3VuZERlY29kaW5nKHRoaXMub25CYWNrZ3JvdW5kTG9hZENvbXBsZXRlQW5kQXVkaW9EZWNvZGVkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHdoZW4gdGhlIGFzc2V0IGxpc3Qgc3RhcnRzIGxvYWRpbmcsIGRpc3BhdGNoZXMgdGhlIG9uTG9hZFN0YXJ0IHNpZ25hbFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHByaXZhdGUgX2dhbWVMb2FkU3RhcnQoKSB7XG4gICAgICAgIHRoaXMub25Mb2FkU3RhcnQuZGlzcGF0Y2goKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHdoZW4gYSBmaWxlIHN0YXJ0cyBsb2FkaW5nIC0gZGlzcGF0Y2hlcyB0aGUgb25GaWxlU3RhcnQgc2lnbmFsXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHJpdmF0ZSBfZ2FtZUZpbGVTdGFydCgpIHtcbiAgICAgICAgdGhpcy5vbkZpbGVTdGFydC5kaXNwYXRjaCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogd2hlbiBhIGZpbGUgY29tcGxldGVzIGluIHRoZSBnYW1lIGxvYWQgLSBkaXNwYXRjaGVzIHRoZSBvbkZpbGVDb21wbGV0ZSBzaWduYWxcbiAgICAqIEBwYXJhbSAge051bWJlcn0gcHJvZ3Jlc3MgICB0aGUgcGVyY2VudCBwcm9ncmVzc1xuICAgICogQHBhcmFtICB7U3RyaW5nfSBpZCAgICAgICAgIHRoZSBmaWxlIGlkXG4gICAgKiBAcGFyYW0gIHtpbnR9ICAgIGZpbGVJbmRleCAgdGhlIGluZGV4IG9mIHRoZSBmaWxlIGluIHRoZSBsaXN0XG4gICAgKiBAcGFyYW0gIHtpbnR9ICAgIHRvdGFsRmlsZXMgdGhlIHRvdGFsIG51bWJlciBvZiBmaWxlcyBpbiB0aGUgbGlzdFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBwcml2YXRlIF9nYW1lRmlsZUNvbXBsZXRlKHByb2dyZXNzOiBudW1iZXIsIGlkPzogc3RyaW5nLCBmaWxlSW5kZXg/OiBudW1iZXIsIHRvdGFsRmlsZXM/OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jYWNoZS5jaGVja0tleShQaGFzZXIuQ2FjaGUuSU1BR0UsIGlkKSkge1xuICAgICAgICAgICAgdGhpcy5fc2V0QmFzZVRleHR1cmVSZXNvbHV0aW9uKHRoaXMuZ2FtZS5jYWNoZS5nZXRQaXhpQmFzZVRleHR1cmUoaWQpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9maWxlQ29tcGxldGVQcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgICAgICB0aGlzLm9uRmlsZUNvbXBsZXRlLmRpc3BhdGNoKHRoaXMuZ2V0TG9hZFByb2dyZXNzKCksIGlkLCBmaWxlSW5kZXgsIHRvdGFsRmlsZXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NldEJhc2VUZXh0dXJlUmVzb2x1dGlvbih0ZXh0dXJlOiBQSVhJLkJhc2VUZXh0dXJlKTogdm9pZCB7XG4gICAgICAgIGlmICh0ZXh0dXJlICYmIHRleHR1cmUuc291cmNlLnNyYy5pbmRleE9mKCdAJyArIHRoaXMucmVzb2x1dGlvbiArICd4JykgPj0gMCkge1xuICAgICAgICAgICAgdGV4dHVyZS5yZXNvbHV0aW9uID0gdGhpcy5yZXNvbHV0aW9uO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICogd2hlbiB0aGUgYmFja2dyb3VuZCBsb2FkIGNvbXBsZXRlcyAtIGRpc3BhdGNoZXMgdGhlIG9uTG9hZENvbXBsZXRlIHNpZ25hbCwgc3RhcnRzIGNoZWNraW5nIGZvciBkZWNvZGVkIHNvdW5kc1xuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBwcml2YXRlIF9nYW1lTG9hZENvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLl9jb21wbGV0ZWRMb2Fkc1t0aGlzLl9jdXJyZW50QXNzZXRMaXN0XSA9IHRydWU7XG4gICAgICAgIHRoaXMub25Mb2FkQ29tcGxldGUuZGlzcGF0Y2goKTtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQub25GaWxlU3RhcnQucmVtb3ZlKHRoaXMuX2dhbWVGaWxlU3RhcnQsIHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkZpbGVDb21wbGV0ZS5yZW1vdmUodGhpcy5fZ2FtZUZpbGVDb21wbGV0ZSwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5fY2hlY2tTb3VuZERlY29kaW5nKHRoaXMub25Mb2FkQ29tcGxldGVBbmRBdWRpb0RlY29kZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogY2hlY2tzIGlmIGFsbCB0aGUgc291bmRzIGluIHRoZSBxdWV1ZSBhcmUgZGVjb2RlZFxuICAgICogQHBhcmFtICB7UGhhc2VyLlNpZ25hbH0gZXZlbnRUb0Rpc3BhdGNoIHRoZSBzaWduYWwgdG8gYmUgZGlzcGF0Y2hlZCB3aGVuIGFsbCBzb3VuZHMgYXJlIGRlY29kZWRcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfY2hlY2tTb3VuZERlY29kaW5nKGV2ZW50VG9EaXNwYXRjaDogUGhhc2VyLlNpZ25hbCkge1xuICAgICAgICB2YXIgc291bmQsIGksIGlzQXVkaW9TcHJpdGU7XG5cbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kc1RvRGVjb2RlICYmIHRoaXMuX3NvdW5kc1RvRGVjb2RlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLl9zb3VuZHNUb0RlY29kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlzQXVkaW9TcHJpdGUgPSB0aGlzLl9zb3VuZHNUb0RlY29kZVtpXS5pc0F1ZGlvU3ByaXRlO1xuICAgICAgICAgICAgICAgIHNvdW5kID0gdGhpcy5nYW1lLmFkZC5zb3VuZCh0aGlzLl9zb3VuZHNUb0RlY29kZVtpXS51cmwpO1xuICAgICAgICAgICAgICAgIHNvdW5kLl9faXNBdWRpb1Nwcml0ZSA9IGlzQXVkaW9TcHJpdGU7XG4gICAgICAgICAgICAgICAgc291bmQuZXZlbnRUb0Rpc3BhdGNoID0gZXZlbnRUb0Rpc3BhdGNoO1xuICAgICAgICAgICAgICAgIHNvdW5kLm9uRGVjb2RlZC5hZGRPbmNlKHRoaXMuX29uU291bmREZWNvZGVkLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50VG9EaXNwYXRjaC5kaXNwYXRjaCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiB3aGVuIGEgc291bmQgaXMgZGVjb2RlZCwgdGhpcyBtZXRob2QgcmVtb3ZlcyBpdCBmcm9tIHRoZSBfc291bmRzVG9EZWNvZGUgYXJyYXksIGFuZCBpbmNyZWFzZXMgdGhlIG92ZXJhbGwgcGVyY2VudGFnZSBsb2FkZWRcbiAgICAqIEBwYXJhbSAge1BoYXNlci5Tb3VuZH0gc291bmQgdGhlIHNvdW5kIGJlaW5nIGRlY29kZWRcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfb25Tb3VuZERlY29kZWQoc291bmQ6IElTb3VuZCkge1xuICAgICAgICB2YXIgc291bmRJbmRleCA9IHRoaXMuX3NvdW5kc1RvRGVjb2RlLmluZGV4T2Yoc291bmQua2V5KTtcbiAgICAgICAgdGhpcy5fc291bmRzVG9EZWNvZGUuc3BsaWNlKHNvdW5kSW5kZXgsIDEpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5nYW1lLmF1ZGlvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgdGhpcy5nYW1lLmF1ZGlvLmFkZEF1ZGlvICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaWYgKHNvdW5kLl9faXNBdWRpb1Nwcml0ZSlcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuYWRkLmF1ZGlvU3ByaXRlKHNvdW5kLmtleSk7XG5cbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hdWRpby5hZGRBdWRpbyhzb3VuZC5rZXksIHNvdW5kLl9faXNBdWRpb1Nwcml0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zb3VuZHNEZWNvZGVkKys7XG4gICAgICAgIHRoaXMuX21heFBlcmNlbnQgPSAoMTAwIC0gKHRoaXMuX251bVNvdW5kcyAqIHRoaXMuc291bmREZWNvZGluZ01vZGlmaWVyKSArICh0aGlzLl9zb3VuZHNEZWNvZGVkICogdGhpcy5zb3VuZERlY29kaW5nTW9kaWZpZXIpKTtcbiAgICAgICAgdGhpcy5fZ2FtZUZpbGVDb21wbGV0ZSgxMDApO1xuXG4gICAgICAgIGlmICh0aGlzLl9zb3VuZHNUb0RlY29kZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHNvdW5kLmV2ZW50VG9EaXNwYXRjaC5kaXNwYXRjaCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBzaG9ydGN1dCB0byBnZXQgYW4gYXNzZXQga2V5IHVzaW5nIGEgZmlsZSBuYW1lIChzdHJpcHMgaXRzIGV4dGVuc2lvbilcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gZmlsZU5hbWUgdGhlIHVybCBvZiB0aGUgZmlsZVxuICAgICogQHJldHVybiB7U3Rpcm5nfSAgICAgICAgICB0aGUgYXNzZXQga2V5ICh0aGUgZmlsZW5hbWUgd2l0aCBpdHMgZXh0ZW5zaW9uIHN0cmlwcGVkKVxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIHByaXZhdGUgX2dldEFzc2V0S2V5KGZpbGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAoZmlsZU5hbWUuaW5kZXhPZignLicpIDwgMClcbiAgICAgICAgICAgIHJldHVybiBmaWxlTmFtZTtcbiAgICAgICAgdmFyIGV4dCA9IGZpbGVOYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgIGV4dC5wb3AoKTtcblxuICAgICAgICByZXR1cm4gZXh0LmpvaW4oJycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogZ2V0cyB0aGUgZXh0ZW5zaW9uIG9mIGEgZ2l2ZW4gZmlsZVxuICAgICogQHBhcmFtICB7U3RyaW5nfSBmaWxlTmFtZVxuICAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICB0aGUgZXh0ZW5zaW9uXG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfZ2V0RXh0ZW5zaW9uKGZpbGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZmlsZU5hbWUuc3BsaXQoJy4nKS5wb3AoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGdldHMgdGhlIGV4dGVuc2lvbiBvZiBhIGdpdmVuIGZpbGVcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gZmlsZU5hbWVcbiAgICAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgICAgdGhlIGV4dGVuc2lvblxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIHByaXZhdGUgX2dldFJlc29sdXRpb24ocmVzOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICB2YXIgcmVzdWx0ID0gJyc7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXMgPSBwYXJzZUZsb2F0KHJlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlcyA9IHRoaXMucmVzb2x1dGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXMgPiAxLjUpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IEFzc2V0TWFuYWdlci5SRVNPTFVUSU9OXzJYO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGRldGVybWluZXMgd2hhdCBraW5kIG9mIGFzc2V0IHdlJ3JlIGRlYWxpbmcgd2l0aCBhbmQgYWRkcyBpdCB0byB0aGUgbG9hZCBxdWV1ZVxuICAgICogQHBhcmFtICB7T2JqZWN0fSBhc3NldCB0aGUgYXNzZXQgb2JqZWN0IHdlJ3JlIGdvaW5nIHRvIGxvYWRcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfbG9hZEFzc2V0KGFzc2V0OiBJQXNzZXQpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBhc3NldC50eXBlLFxuICAgICAgICAgICAgdXJsID0gYXNzZXQudXJsIHx8IGFzc2V0LmtleTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLkFTU0VUX0xJU1Q6XG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZEFzc2V0cyhhc3NldC5pZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5TT1VORDpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTb3VuZCh1cmwsIGFzc2V0LmV4dGVuc2lvbnMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuQVVESU9fU1BSSVRFOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEF1ZGlvU3ByaXRlKHVybCwgYXNzZXQuZXh0ZW5zaW9ucyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5JTUFHRTpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRJbWFnZSh1cmwsIHRoaXMuX2dldFJlc29sdXRpb24oYXNzZXQucmVzb2x1dGlvbikpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuVklERU86XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkVmlkZW8odXJsLCB0aGlzLl9nZXRSZXNvbHV0aW9uKGFzc2V0LnJlc29sdXRpb24pKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLkFUTEFTOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEF0bGFzKHVybCwgdGhpcy5fZ2V0UmVzb2x1dGlvbihhc3NldC5yZXNvbHV0aW9uKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5URVhUOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFRleHQodXJsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLkpTT046XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkSlNPTih1cmwpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuVElMRU1BUDpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRUaWxlbWFwKHVybCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5USUxFRE1BUDpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRUaWxlZG1hcCh1cmwsICg8SVRpbGVkbWFwQXNzZXRzPmFzc2V0KS5hc3NldHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuUEhZU0lDUzpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRQaHlzaWNzKHVybCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5TUElORTpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTcGluZSh1cmwsIHRoaXMuX2dldFJlc29sdXRpb24oYXNzZXQucmVzb2x1dGlvbikpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHBhcnNlcyB0aGUgZGF0YSBmcm9tIHRoZSBleHRlcm5hbCBhc3NldHMgZmlsZSAobm9ybWFsbHkgZGF0YS9hc3NldHMuanNvbilcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfcGFyc2VEYXRhKCkge1xuICAgICAgICB2YXIga2V5O1xuXG4gICAgICAgIGZvciAoa2V5IGluIHRoaXMuX2RhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuX3BhcnNlQXNzZXRMaXN0KGtleSwgdGhpcy5fZGF0YVtrZXldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2dldENhY2hlQnVzdGVkVXJsKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuX2NhY2hlQnVzdFZlcnNpb24gPT09IHVuZGVmaW5lZCB8fCB0aGlzLl9jYWNoZUJ1c3RWZXJzaW9uID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1cmwgKyAnP3Y9JyArIHRoaXMuX2NhY2hlQnVzdFZlcnNpb247XG4gICAgfVxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgcHVibGljIGxvYWRUZXh0KHVybDogc3RyaW5nKSB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLl9nZXRBc3NldEtleSh1cmwpO1xuICAgICAgICByZXR1cm4gdGhpcy5nYW1lLmxvYWQudGV4dChrZXksIHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKHRoaXMuX2RhdGFQYXRoICsgJy8nICsgdXJsKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRKU09OKGtleTogc3RyaW5nKSB7XG4gICAgICAgIGtleSA9IHRoaXMuX2dldEFzc2V0S2V5KGtleSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUubG9hZC5qc29uKGtleSwgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5fZGF0YVBhdGggKyAnLycgKyBrZXkgKyAnLmpzb24nKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRUaWxlbWFwKGtleTogc3RyaW5nKSB7XG4gICAgICAgIGtleSA9IHRoaXMuX2dldEFzc2V0S2V5KGtleSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUubG9hZC50aWxlbWFwKGtleSwgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5fZGF0YVBhdGggKyAnL3RpbGVtYXAvJyArIGtleSArICcuanNvbicpLCBudWxsLCBQaGFzZXIuVGlsZW1hcC5USUxFRF9KU09OKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZFRpbGVkbWFwKGtleTogc3RyaW5nLCBhc3NldHM6IElBc3NldFtdKSB7XG4gICAgICAgIGlmIChQaGFzZXIuUGx1Z2luWydUaWxlZCddID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aWxlZG1hcCByZXF1aXJlcyB0aGUgcGhhc2VyLXRpbGVkIHBsdWdpbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9lbmdsZXJjai9waGFzZXItdGlsZWQnKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhY2hlS2V5OiBhbnkgPSBQaGFzZXIuUGx1Z2luWydUaWxlZCddLnV0aWxzLmNhY2hlS2V5O1xuXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkWyd0aWxlZG1hcCddKGNhY2hlS2V5KGtleSwgJ3RpbGVkbWFwJyksIHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKHRoaXMuX2RhdGFQYXRoICsgJy90aWxlbWFwLycgKyBrZXkgKyAnLmpzb24nKSwgbnVsbCwgUGhhc2VyLlRpbGVtYXAuVElMRURfSlNPTik7XG5cbiAgICAgICAgYXNzZXRzLmZvckVhY2goYXNzZXQgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChhc3NldC50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuVElMRURNQVBfVElMRVNFVDpcbiAgICAgICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5USUxFRE1BUF9MQVlFUjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkVGlsZWRtYXBJbWFnZShrZXksIGFzc2V0LnR5cGUsIGFzc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRUaWxlZG1hcEltYWdlKGtleTogc3RyaW5nLCB0aWxlc2V0SW1hZ2VUeXBlOiBzdHJpbmcsIGFzc2V0OiBJQXNzZXQpIHtcbiAgICAgICAgY29uc3QgY2FjaGVLZXk6IGFueSA9IFBoYXNlci5QbHVnaW5bJ1RpbGVkJ10udXRpbHMuY2FjaGVLZXk7XG5cbiAgICAgICAgbGV0IHJlc29sdXRpb246IHN0cmluZyA9ICcnO1xuICAgICAgICBjb25zdCBuZXdLZXk6IHN0cmluZyA9IHRoaXMuX2dldEFzc2V0S2V5KGFzc2V0LnVybCk7XG4gICAgICAgIGNvbnN0IGNLZXk6IHN0cmluZyA9IGNhY2hlS2V5KGtleSwgJ3RpbGVzZXQnLCBuZXdLZXkpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgYXNzZXQucmVzb2x1dGlvbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJlc29sdXRpb24gPSB0aGlzLl9nZXRSZXNvbHV0aW9uKGFzc2V0LnJlc29sdXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuX2dldEFzc2V0S2V5KG5ld0tleSArIHJlc29sdXRpb24gKyAnLicgKyB0aGlzLl9nZXRFeHRlbnNpb24oYXNzZXQudXJsKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFzc2V0LnVybCwgY0tleSk7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKGNLZXksIHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKHRoaXMuX3Nwcml0ZVNoZWV0UGF0aCArICcvJyArIHVybCArICcucG5nJykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkUGh5c2ljcyhrZXk6IHN0cmluZykge1xuICAgICAgICBrZXkgPSB0aGlzLl9nZXRBc3NldEtleShrZXkpO1xuICAgICAgICByZXR1cm4gdGhpcy5nYW1lLmxvYWQucGh5c2ljcyhrZXksIHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKHRoaXMuX3BoeXNpY3NQYXRoICsgJy8nICsga2V5ICsgJy5qc29uJykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkQXRsYXModXJsOiBzdHJpbmcsIHJlc29sdXRpb24/OiBhbnkpOiBQaGFzZXIuTG9hZGVyIHwgc3RyaW5nIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXNvbHV0aW9uICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmVzb2x1dGlvbiA9IHRoaXMuX2dldFJlc29sdXRpb24ocmVzb2x1dGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jYWNoZS5jaGVja0ltYWdlS2V5KHVybCkpIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZS5sb2FkLmF0bGFzSlNPTkhhc2godXJsLCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9zcHJpdGVTaGVldFBhdGggKyAnLycgKyB1cmwgKyByZXNvbHV0aW9uICsgJy5wbmcnKSwgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5fc3ByaXRlU2hlZXRQYXRoICsgJy8nICsgdXJsICsgcmVzb2x1dGlvbiArICcuanNvbicpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZEltYWdlKHVybDogc3RyaW5nLCByZXNvbHV0aW9uPzogYW55KTogUGhhc2VyLkxvYWRlciB8IHN0cmluZyB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVzb2x1dGlvbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJlc29sdXRpb24gPSB0aGlzLl9nZXRSZXNvbHV0aW9uKHJlc29sdXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGtleTogc3RyaW5nID0gdGhpcy5fZ2V0QXNzZXRLZXkodXJsKTtcblxuICAgICAgICBpZiAodGhpcy5nYW1lLmNhY2hlLmNoZWNrSW1hZ2VLZXkoa2V5KSkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIGltYWdlIGtleSBhbHJlYWR5IGV4aXN0cywgZG9uJ3QgcmVsb2FkIHRoZSBpbWFnZSBhbmQgcmV0dXJuIHRoZSBrZXlcbiAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH1cbiAgICAgICAgdXJsID0ga2V5ICsgcmVzb2x1dGlvbiArICcuJyArIHRoaXMuX2dldEV4dGVuc2lvbih1cmwpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUubG9hZC5pbWFnZShrZXksIHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKHRoaXMuX2ltZ1BhdGggKyAnLycgKyB1cmwpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZFZpZGVvKHVybDogc3RyaW5nLCByZXNvbHV0aW9uPzogYW55KTogUGhhc2VyLkxvYWRlciB8IHN0cmluZyB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVzb2x1dGlvbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJlc29sdXRpb24gPSB0aGlzLl9nZXRSZXNvbHV0aW9uKHJlc29sdXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGtleTogc3RyaW5nID0gdGhpcy5fZ2V0QXNzZXRLZXkodXJsKTtcblxuICAgICAgICBpZiAodGhpcy5nYW1lLmNhY2hlLmNoZWNrVmlkZW9LZXkoa2V5KSkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIGltYWdlIGtleSBhbHJlYWR5IGV4aXN0cywgZG9uJ3QgcmVsb2FkIHRoZSBpbWFnZSBhbmQgcmV0dXJuIHRoZSBrZXlcbiAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH1cbiAgICAgICAgdXJsID0ga2V5ICsgcmVzb2x1dGlvbiArICcuJyArIHRoaXMuX2dldEV4dGVuc2lvbih1cmwpO1xuICAgICAgICByZXR1cm4gdGhpcy5nYW1lLmxvYWQudmlkZW8oa2V5LCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl92aWRlb1BhdGggKyAnLycgKyB1cmwpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZFNwaW5lKHVybDogc3RyaW5nLCByZXNvbHV0aW9uPzogYW55KTogc3RyaW5nIHwgdm9pZCB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVzb2x1dGlvbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJlc29sdXRpb24gPSB0aGlzLl9nZXRSZXNvbHV0aW9uKHJlc29sdXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNvbHV0aW9uID09PSAnJykge1xuICAgICAgICAgICAgcmVzb2x1dGlvbiA9ICdAMXgnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGtleTogc3RyaW5nID0gdGhpcy5fZ2V0QXNzZXRLZXkodXJsKTtcblxuICAgICAgICBpZiAodGhpcy5nYW1lLmNhY2hlLmNoZWNrSW1hZ2VLZXkoa2V5KSkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIGltYWdlIGtleSBhbHJlYWR5IGV4aXN0cywgZG9uJ3QgcmVsb2FkIHRoZSBpbWFnZSBhbmQgcmV0dXJuIHRoZSBrZXlcbiAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH1cbiAgICAgICAgdXJsID0ga2V5ICsgcmVzb2x1dGlvbiArICcucG5nJztcbiAgICAgICAgY29uc3QganNvblVybCA9IGtleSArICcuanNvbic7XG4gICAgICAgIGNvbnN0IGF0bGFzVXJsID0ga2V5ICsgcmVzb2x1dGlvbiArICcuYXRsYXMnO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5qc29uKGtleSArICcuanNvbicsIHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKHRoaXMuX3NwaW5lUGF0aCArICcvJyArIGpzb25VcmwpKTtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQudGV4dChrZXkgKyAnLmF0bGFzJywgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5fc3BpbmVQYXRoICsgJy8nICsgYXRsYXNVcmwpKTtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2Uoa2V5ICsgJy5wbmcnLCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9zcGluZVBhdGggKyAnLycgKyB1cmwpKTtcblxuICAgICAgICBpZiAoU3BpbmUuQVVUT19NRVNIID09PSB0cnVlICYmIGtleS5pbmRleE9mKFNwaW5lLk5PTl9NRVNIX1NVRkZJWCkgPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRTcGluZShrZXkgKyBTcGluZS5OT05fTUVTSF9TVUZGSVgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRCaXRtYXBGb250KHVybDogc3RyaW5nLCByZXNvbHV0aW9uPzogYW55KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVzb2x1dGlvbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJlc29sdXRpb24gPSB0aGlzLl9nZXRSZXNvbHV0aW9uKHJlc29sdXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmJpdG1hcEZvbnQodXJsLCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9iaXRtYXBGb250UGF0aCArICcvJyArIHVybCArIHJlc29sdXRpb24gKyAnLnBuZycpLCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9iaXRtYXBGb250UGF0aCArICcvJyArIHVybCArIHJlc29sdXRpb24gKyAnLmpzb24nKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRBdWRpbyh1cmw6IHN0cmluZywgZXh0czogYW55LCBpc0F1ZGlvU3ByaXRlOiBib29sZWFuKSB7XG4gICAgICAgIHZhciB0eXBlLCBwYXRoO1xuICAgICAgICBpZiAodGhpcy5nYW1lLmNhY2hlLmNoZWNrU291bmRLZXkodXJsKSAmJiB0aGlzLmdhbWUuY2FjaGUuZ2V0U291bmQodXJsKS5pc0RlY29kZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyB0eXBlIHNob3VsZCBiZSAnc291bmQnIG9yICdzcHJpdGUnICgnZngnIGFuZCAnbXVzaWMnIHRvIGJlIGRlcHJlY2F0ZWQpXG4gICAgICAgIC8vIGRlZmF1bHQgdG8gc291bmRcblxuICAgICAgICBpZiAodHlwZW9mIHR5cGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0eXBlID0gJ3NvdW5kJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChleHRzLmluZGV4T2YoJywnKSA+PSAwKSB7XG4gICAgICAgICAgICBleHRzID0gZXh0cy5zcGxpdCgnLCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5kZXZpY2UuaU9TICYmIGV4dHMuaW5kZXhPZignbTRhJykgPT09IC0xKSB7XG4gICAgICAgICAgICBleHRzLnVuc2hpZnQoJ200YScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBleHRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcGF0aCA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcGF0aC5wdXNoKHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKChpc0F1ZGlvU3ByaXRlID8gdGhpcy5fYXVkaW9TcHJpdGVQYXRoIDogdGhpcy5fc291bmRQYXRoKSArICcvJyArIHVybCArICcuJyArIGV4dHNbaV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhdGggPSB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCgoaXNBdWRpb1Nwcml0ZSA/IHRoaXMuX2F1ZGlvU3ByaXRlUGF0aCA6IHRoaXMuX3NvdW5kUGF0aCkgKyAnLycgKyB0eXBlICsgJy8nICsgdXJsICsgJy4nICsgZXh0cyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNBdWRpb1Nwcml0ZSkge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXVkaW9zcHJpdGUodXJsLCBwYXRoLCB0aGlzLl9hdWRpb1Nwcml0ZVBhdGggKyAnLycgKyB1cmwgKyAnLmpzb24nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLmF1ZGlvKHVybCwgcGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zb3VuZHNUb0RlY29kZS5wdXNoKHtcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgaXNBdWRpb1Nwcml0ZTogaXNBdWRpb1Nwcml0ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZFNvdW5kKHVybDogc3RyaW5nLCBleHRzOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZEF1ZGlvKHVybCwgZXh0cywgZmFsc2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkQXVkaW9TcHJpdGUodXJsOiBzdHJpbmcsIGV4dHM6IGFueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkQXVkaW8odXJsLCBleHRzLCB0cnVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZEFzc2V0cyhpZDogc3RyaW5nLCBiYWNrZ3JvdW5kOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5fY3VycmVudEFzc2V0TGlzdCA9IGlkO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkZpbGVDb21wbGV0ZS5yZW1vdmUodGhpcy5fYmFja2dyb3VuZEZpbGVDb21wbGV0ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uRmlsZUNvbXBsZXRlLnJlbW92ZSh0aGlzLl9nYW1lRmlsZUNvbXBsZXRlLCB0aGlzKTtcblxuICAgICAgICB0aGlzLl9oYXNGaWxlcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9zb3VuZHNUb0RlY29kZSA9IFtdO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fZGF0YSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fZGF0YVtpZF0gPT09ICd1bmRlZmluZWQnIHx8IHRoaXMuX2RhdGFbaWRdLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZygnbm8gcHJlbG9hZCBkYXRhIHJlZ2lzdGVyZWQgZm9yICcsIGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2xvYWRBc3NldHMoaWQpO1xuICAgICAgICB0aGlzLl9oYXNGaWxlcyA9IHRoaXMuZ2FtZS5sb2FkLnRvdGFsUXVldWVkRmlsZXMoKSA+IDA7XG5cbiAgICAgICAgaWYgKGJhY2tncm91bmQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uTG9hZFN0YXJ0LmFkZE9uY2UodGhpcy5fYmFja2dyb3VuZExvYWRTdGFydCwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkZpbGVDb21wbGV0ZS5hZGQodGhpcy5fYmFja2dyb3VuZEZpbGVDb21wbGV0ZSwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkxvYWRDb21wbGV0ZS5hZGRPbmNlKHRoaXMuX2JhY2tncm91bmRMb2FkQ29tcGxldGUsIHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQub25Mb2FkU3RhcnQuYWRkT25jZSh0aGlzLl9nYW1lTG9hZFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uRmlsZVN0YXJ0LmFkZCh0aGlzLl9nYW1lRmlsZVN0YXJ0LCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uRmlsZUNvbXBsZXRlLmFkZCh0aGlzLl9nYW1lRmlsZUNvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uTG9hZENvbXBsZXRlLmFkZE9uY2UodGhpcy5fZ2FtZUxvYWRDb21wbGV0ZSwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX2hhc0ZpbGVzKSB7XG4gICAgICAgICAgICB0aGlzLl9nYW1lTG9hZFN0YXJ0KCk7XG4gICAgICAgICAgICB0aGlzLl9nYW1lRmlsZUNvbXBsZXRlKDEwMCk7XG4gICAgICAgICAgICB0aGlzLl9nYW1lTG9hZENvbXBsZXRlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9udW1Tb3VuZHMgPSB0aGlzLl9zb3VuZHNUb0RlY29kZS5sZW5ndGg7XG4gICAgICAgIHRoaXMuX3NvdW5kc0RlY29kZWQgPSAwO1xuICAgICAgICB0aGlzLl9tYXhQZXJjZW50ID0gMTAwIC0gKHRoaXMuX251bVNvdW5kcyAqIHRoaXMuc291bmREZWNvZGluZ01vZGlmaWVyKTtcblxuICAgICAgICBpZiAoYmFja2dyb3VuZCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkUXVldWUoKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0xvYWRpbmdRdWV1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9kYXRhID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdubyBwcmVsb2FkIHF1ZXVlIHRvIGxvYWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhc3NldHM6IGFueSxcbiAgICAgICAgICAgIHN0YXRlOiBzdHJpbmcsXG4gICAgICAgICAgICBpOiBudW1iZXI7XG5cbiAgICAgICAgZm9yIChzdGF0ZSBpbiB0aGlzLl9kYXRhKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fYXV0b0xvYWREYXRhW3N0YXRlXSkge1xuXG4gICAgICAgICAgICAgICAgYXNzZXRzID0gdGhpcy5fZGF0YVtzdGF0ZV07XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFzc2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkQXNzZXQoYXNzZXRzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdhbWUubG9hZC5zdGFydCgpO1xuICAgICAgICB0aGlzLl9pc0xvYWRpbmdRdWV1ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uTG9hZFN0YXJ0LmFkZE9uY2UodGhpcy5fYmFja2dyb3VuZExvYWRTdGFydCwgdGhpcyk7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uRmlsZUNvbXBsZXRlLmFkZCh0aGlzLl9iYWNrZ3JvdW5kRmlsZUNvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQub25Mb2FkQ29tcGxldGUuYWRkT25jZSh0aGlzLl9iYWNrZ3JvdW5kTG9hZENvbXBsZXRlLCB0aGlzKTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBnZXRMb2FkUHJvZ3Jlc3MoKSB7XG4gICAgICAgIGNvbnN0IGFkanVzdGVkUHJvZ3Jlc3MgPSB0aGlzLl9maWxlQ29tcGxldGVQcm9ncmVzcyAqIHRoaXMuX21heFBlcmNlbnQgLyAxMDA7XG4gICAgICAgIHJldHVybiBhZGp1c3RlZFByb2dyZXNzO1xuICAgIH1cblxuXG4gICAgcHVibGljIGFsbFNvdW5kc0RlY29kZWQoKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3NvdW5kcyB0byBkZWNvZGUnLCB0aGlzLl9zb3VuZHNUb0RlY29kZS5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fc291bmRzVG9EZWNvZGUubGVuZ3RoID09PSAwO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgKiBzZXRzIHRoZSBkYXRhIGZvciB0aGUgQXNzZXRNYW5hZ2VyIHRvIHVzZSBhcyBhIHJlZmVyZW5jZSAodXN1YWxseSBmcm9tIGRhdGEvYXNzZXRzLmpzb24pXG4gICAgKiB0cmlnZ2VycyB0aGUgX3BhcnNlRGF0YSBpbnRlcm5hbCBtZXRob2QsIHdoaWNoIHN0b3JlcyB0aGUgYXNzZXQgbGlzdCBmb3IgbGF0ZXIgdXNlXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dEZpbGVGcm9tQ2FjaGUgdGhlIGlkIG9mIHRoZSBmaWxlIGluIHRoZSBQaGFzZXIuQ2FjaGVcbiAgICAqL1xuICAgIHB1YmxpYyBzZXREYXRhKGRhdGE6IE9iamVjdCkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5fbG9hZERhdGEgPSB7fTtcbiAgICAgICAgdGhpcy5fcGFyc2VEYXRhKCk7XG5cbiAgICAgICAgdGhpcy5zZW5kTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbnMuQVNTRVRfTUFOQUdFUl9EQVRBX1NFVCwgdGhpcy5fZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBjbGVhcnMgdGhlIGFzc2V0cyBmcm9tIGEgcGFydGljdWxhciBpZCBpbiB0aGUgc3RvcmFnZVxuICAgICogQHBhcmFtICB7U3RyaW5nfSBpZCAgICAgICAgICAgIHRoZSBpZCBvZiB0aGUgYXNzZXQgbGlzdCB0byBjbGVhclxuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gW2NsZWFyQXVkaW8gPSB0cnVlXSAgICB3aGV0aGVyIHRvIGNsZWFyIGF1ZGlvIGZpbGVzXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBbY2xlYXJBdGxhc3NlcyA9IHRydWVdIHdoZXRoZXIgdG8gY2xlYXIgdGV4dHVyZSBhdGxhc3Nlc1xuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gW2NsZWFySW1hZ2VzID0gdHJ1ZV0gICB3aGV0aGVyIHRvIGNsZWFyIGltYWdlc1xuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gW2NsZWFyVGV4dCA9IHRydWVdICAgICB3aGV0aGVyIHRvIGNsZWFyIHRleHQgZmlsZXNcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgY2xlYXJBc3NldHMoaWQ6IHN0cmluZywgY2xlYXJBdWRpbzogYm9vbGVhbiA9IHRydWUsIGNsZWFyQXRsYXNzZXM6IGJvb2xlYW4gPSB0cnVlLCBjbGVhckltYWdlczogYm9vbGVhbiA9IHRydWUsIGNsZWFyVGV4dDogYm9vbGVhbiA9IHRydWUsIGNsZWFySlNPTjogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgdmFyIGFzc2V0cyA9IHRoaXMuX2RhdGFbaWRdO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGVhcmluZzogJywgaWQpO1xuXG4gICAgICAgIGlmICghYXNzZXRzIHx8IHR5cGVvZiBhc3NldHMgPT09ICd1bmRlZmluZWQnIHx8IGFzc2V0cy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ25vIGFzc2V0cycsIGFzc2V0cyk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFzc2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jbGVhckFzc2V0KGFzc2V0c1tpXSwgY2xlYXJBdWRpbywgY2xlYXJBdGxhc3NlcywgY2xlYXJJbWFnZXMsIGNsZWFyVGV4dCwgY2xlYXJKU09OKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2NvbXBsZXRlZExvYWRzW2lkXSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuc2VuZE5vdGlmaWNhdGlvbihOb3RpZmljYXRpb25zLkFTU0VUX01BTkFHRVJfQVNTRVRTX0NMRUFSRUQsIGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGNsZWFycyBhbiBhc3NldCBmcm9tIHRoZSBnYW1lJ3MgbWVtb3J5XG4gICAgKiBAcGFyYW0gIHtPYmplY3R9IGFzc2V0ICAgICAgICAgdGhlIGFzc2V0IHRvIGNsZWFyXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBbY2xlYXJBdWRpbyA9IHRydWVdICAgIHdoZXRoZXIgdG8gY2xlYXIgYXVkaW8gZmlsZXNcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IFtjbGVhckF0bGFzc2VzID0gdHJ1ZV0gd2hldGhlciB0byBjbGVhciB0ZXh0dXJlIGF0bGFzc2VzXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBbY2xlYXJJbWFnZXMgPSB0cnVlXSAgIHdoZXRoZXIgdG8gY2xlYXIgaW1hZ2VzXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBbY2xlYXJUZXh0ID0gdHJ1ZV0gICAgIHdoZXRoZXIgdG8gY2xlYXIgdGV4dCBmaWxlc1xuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyBjbGVhckFzc2V0KGFzc2V0OiBJQXNzZXQsIGNsZWFyQXVkaW86IGJvb2xlYW4gPSB0cnVlLCBjbGVhckF0bGFzc2VzOiBib29sZWFuID0gdHJ1ZSwgY2xlYXJJbWFnZXM6IGJvb2xlYW4gPSB0cnVlLCBjbGVhclRleHQ6IGJvb2xlYW4gPSB0cnVlLCBjbGVhckpTT046IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHZhciB0eXBlID0gYXNzZXQudHlwZSxcbiAgICAgICAgICAgIHVybCA9IGFzc2V0LnVybCxcbiAgICAgICAgICAgIHJlcXVpcmVkID0gYXNzZXQucmVxdWlyZWQ7XG5cbiAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGhlICcgKyB0eXBlICsgJyBhc3NldDogJyArIHVybCArICcgaXMgcmVxdWlyZWQgYW5kIHdpbGwgbm90IGJlIGNsZWFyZWQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLkFVRElPOlxuICAgICAgICAgICAgICAgIGlmIChjbGVhckF1ZGlvKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5zb3VuZC5yZW1vdmVCeUtleSh1cmwpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuY2FjaGUucmVtb3ZlU291bmQodXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5JTUFHRTpcbiAgICAgICAgICAgICAgICBpZiAoY2xlYXJJbWFnZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNhY2hlLnJlbW92ZUltYWdlKHVybCk7XG4gICAgICAgICAgICAgICAgICAgIFBJWEkuQmFzZVRleHR1cmVDYWNoZVt1cmxdLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5BVExBUzpcbiAgICAgICAgICAgICAgICBpZiAoY2xlYXJBdGxhc3Nlcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuY2FjaGUucmVtb3ZlSW1hZ2UodXJsKTtcbiAgICAgICAgICAgICAgICAgICAgUElYSS5CYXNlVGV4dHVyZUNhY2hlW3VybF0uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuY2FjaGUucmVtb3ZlWE1MKHVybCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuVEVYVDpcbiAgICAgICAgICAgICAgICBpZiAoY2xlYXJUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jYWNoZS5yZW1vdmVUZXh0KHVybCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuSlNPTjpcbiAgICAgICAgICAgICAgICBpZiAoY2xlYXJKU09OKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jYWNoZS5yZW1vdmVKU09OKHVybCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuUEhZU0lDUzpcbiAgICAgICAgICAgICAgICBpZiAoY2xlYXJKU09OKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jYWNoZS5yZW1vdmVQaHlzaWNzKHVybCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyU3BpbmVBc3NldChpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2FtZS5jYWNoZS5yZW1vdmVKU09OKGlkICsgJy5qc29uJyk7XG4gICAgICAgIHRoaXMuZ2FtZS5jYWNoZS5yZW1vdmVUZXh0KGlkICsgJy5hdGxhcycpO1xuICAgICAgICB0aGlzLmdhbWUuY2FjaGUucmVtb3ZlSW1hZ2UoaWQgKyAnLnBuZycsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogY2hlY2tzIGlmIHRoZSBhc3NldHMgZnJvbSB0aGlzIGxpc3QgaWQgYXJlIGFscmVhZHkgbG9hZGVkXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBpZCB0aGUgYXNzZXQgbGlzdCBpZCB0byBjaGVja1xuICAgICogQHJldHVybiB7Qm9vbGVhbn0gICAgd2hldGhlciBpdCBoYXMgYmVlbiBsb2FkZWQgYWxyZWFkeVxuICAgICovXG4gICAgcHVibGljIGhhc0xvYWRlZEFzc2V0cyhpZDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb21wbGV0ZWRMb2Fkc1tpZF0gPT09IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbmROb3RpZmljYXRpb24obm90aWZpY2F0aW9uTmFtZTogc3RyaW5nLCBub3RpZmljYXRpb25Cb2R5PzogYW55KTogdm9pZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwcC5zZW5kTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbk5hbWUsIG5vdGlmaWNhdGlvbkJvZHkpO1xuICAgIH1cblxuICAgIC8vIGdldHRlciAvIHNldHRlclxuICAgIHB1YmxpYyBzZXQgYmFzZVVSTChiYXNlVVJMOiBzdHJpbmcpIHtcbiAgICAgICAgLy8gZW5zdXJlIHRyYWlsaW5nIHNsYXNoXG4gICAgICAgIGlmIChiYXNlVVJMICYmIGJhc2VVUkwgIT09IHVuZGVmaW5lZCAmJiBiYXNlVVJMLmNoYXJBdChiYXNlVVJMLmxlbmd0aCAtIDEpICE9PSAnLycpXG4gICAgICAgICAgICBiYXNlVVJMICs9ICcvJztcblxuICAgICAgICB0aGlzLl9iYXNlVVJMID0gYmFzZVVSTDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBhdGhzKHBhdGhPYmo6IElQYXRoQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuX3BhdGhPYmogPSBwYXRoT2JqIHx8IHt9O1xuXG4gICAgICAgIHRoaXMuX2Fzc2V0UGF0aCA9IHRoaXMuX2Jhc2VVUkwgKyAodGhpcy5fcGF0aE9iai5hc3NldFBhdGggfHwgJ2Fzc2V0cycpO1xuICAgICAgICB0aGlzLl9kYXRhUGF0aCA9IHRoaXMuX2Jhc2VVUkwgKyAodGhpcy5fcGF0aE9iai5kYXRhUGF0aCB8fCAnYXNzZXRzL2RhdGEnKTtcbiAgICAgICAgdGhpcy5fc3ByaXRlU2hlZXRQYXRoID0gdGhpcy5fYmFzZVVSTCArICh0aGlzLl9wYXRoT2JqLnNwcml0ZXNoZWV0UGF0aCB8fCAnYXNzZXRzL2ltZy9zcHJpdGVzaGVldHMnKTtcbiAgICAgICAgdGhpcy5faW1nUGF0aCA9IHRoaXMuX2Jhc2VVUkwgKyAodGhpcy5fcGF0aE9iai5pbWdQYXRoIHx8ICdhc3NldHMvaW1nJyk7XG4gICAgICAgIHRoaXMuX3ZpZGVvUGF0aCA9IHRoaXMuX2Jhc2VVUkwgKyAodGhpcy5fcGF0aE9iai5pbWdQYXRoIHx8ICdhc3NldHMvdmlkZW8nKTtcbiAgICAgICAgdGhpcy5fc3BpbmVQYXRoID0gdGhpcy5fYmFzZVVSTCArICh0aGlzLl9wYXRoT2JqLnNwaW5lUGF0aCB8fCAnYXNzZXRzL3NwaW5lJyk7XG4gICAgICAgIHRoaXMuX2ZvbnRQYXRoID0gdGhpcy5fYmFzZVVSTCArICh0aGlzLl9wYXRoT2JqLmZvbnRQYXRoIHx8ICdhc3NldHMvZm9udHMnKTtcbiAgICAgICAgdGhpcy5fYml0bWFwRm9udFBhdGggPSB0aGlzLl9iYXNlVVJMICsgKHRoaXMuX3BhdGhPYmouYml0bWFwRm9udFBhdGggfHwgJ2Fzc2V0cy9mb250cy9iaXRtYXAnKTtcbiAgICAgICAgdGhpcy5fYXVkaW9TcHJpdGVQYXRoID0gdGhpcy5fYmFzZVVSTCArICh0aGlzLl9wYXRoT2JqLmF1ZGlvU3ByaXRlUGF0aCB8fCAnYXNzZXRzL2F1ZGlvL3Nwcml0ZScpO1xuICAgICAgICB0aGlzLl9zb3VuZFBhdGggPSB0aGlzLl9iYXNlVVJMICsgKHRoaXMuX3BhdGhPYmouc291bmRQYXRoIHx8ICdhc3NldHMvYXVkaW8vc291bmQnKTtcbiAgICAgICAgdGhpcy5fcGh5c2ljc1BhdGggPSB0aGlzLl9iYXNlVVJMICsgKHRoaXMuX3BhdGhPYmoucGh5c2ljc1BhdGggfHwgJ2Fzc2V0cy9kYXRhL3BoeXNpY3MnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHJlc29sdXRpb24ocmVzOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHJlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXMgPSB0aGlzLmdhbWUucmVzb2x1dGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3JlcyA9IHJlcztcbiAgICAgICAgdGhpcy5fcmVzb2x1dGlvbiA9ICcnO1xuXG4gICAgICAgIGlmICh0aGlzLl9yZXMgPiAxLjUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdXRpb24gPSBBc3NldE1hbmFnZXIuUkVTT0xVVElPTl8yWDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcmVzb2x1dGlvbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzO1xuICAgIH1cbiAgICAvKipcbiAgICAqIHNldHMgdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIGxvYWQgd2Ugc2hvdWxkIGFsbG90IHRvIGVhY2ggc291bmRcbiAgICAqIEBwYXJhbSB7TnVtYmVyfSBbbnVtID0gMl0gdGhlIHBlcmNlbnRhZ2VcbiAgICAqL1xuICAgIHB1YmxpYyBzZXQgc291bmREZWNvZGluZ01vZGlmaWVyKG51bTogbnVtYmVyKSB7XG4gICAgICAgIGlmIChudW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbnVtID0gMjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zb3VuZERlY29kaW5nTW9kaWZpZXIgPSBudW07XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzb3VuZERlY29kaW5nTW9kaWZpZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VuZERlY29kaW5nTW9kaWZpZXI7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBjYWNoZUJ1c3RWZXJzaW9uKHZlcnNpb246IHN0cmluZyB8IG51bWJlcikge1xuICAgICAgICB0aGlzLl9jYWNoZUJ1c3RWZXJzaW9uID0gJycgKyB2ZXJzaW9uO1xuICAgIH1cbn1cblxuXG4vKipcbiAqIEF1ZGlvTWFuYWdlclxuICogV3JhcHBlciBmb3IgUGhhc2VyLlNvdW5kTWFuYWdlclxuICovXG5leHBvcnQgY2xhc3MgQXVkaW9NYW5hZ2VyIHtcbiAgICBwdWJsaWMgZ2FtZTogR2FtZTtcblxuICAgIHByaXZhdGUgX2RlZmF1bHRWb2x1bWU6IG51bWJlciA9IDE7XG4gICAgcHJpdmF0ZSBfc3ByaXRlczogeyBbc3ByaXRlOiBzdHJpbmddOiBQaGFzZXIuQXVkaW9TcHJpdGUgfSA9IHt9O1xuICAgIHByaXZhdGUgX3NvdW5kczogeyBbc291bmQ6IHN0cmluZ106IFBoYXNlci5Tb3VuZCB9ID0ge307XG4gICAgcHJpdmF0ZSBfbWFya2VyTG9va3VwOiB7IFtpZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdhbWUgPSBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWU7XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgcHJpdmF0ZSBfYWRkQXVkaW8oa2V5OiBzdHJpbmcsIGlzQXVkaW9TcHJpdGU6IGJvb2xlYW4gPSBmYWxzZSk6IFBoYXNlci5Tb3VuZCB8IFBoYXNlci5BdWRpb1Nwcml0ZSB7XG4gICAgICAgIGlmIChpc0F1ZGlvU3ByaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyc2VBdWRpb1Nwcml0ZShrZXksIHRoaXMuZ2FtZS5hZGQuYXVkaW9TcHJpdGUoa2V5KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWxsb3dNdWx0aXBsZSh0aGlzLmdhbWUuYWRkLnNvdW5kKGtleSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcGFyc2VBdWRpb1Nwcml0ZShrZXk6IHN0cmluZywgYXVkaW9TcHJpdGU6IFBoYXNlci5BdWRpb1Nwcml0ZSk6IFBoYXNlci5BdWRpb1Nwcml0ZSB7XG4gICAgICAgIGZvciAodmFyIHNvdW5kS2V5IGluIGF1ZGlvU3ByaXRlLnNvdW5kcykge1xuICAgICAgICAgICAgdGhpcy5fYWxsb3dNdWx0aXBsZShhdWRpb1Nwcml0ZS5zb3VuZHNbc291bmRLZXldKTtcbiAgICAgICAgICAgIHRoaXMuX21hcmtlckxvb2t1cFtzb3VuZEtleV0gPSBrZXk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF1ZGlvU3ByaXRlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2FsbG93TXVsdGlwbGUoc291bmQ6IFBoYXNlci5Tb3VuZCk6IFBoYXNlci5Tb3VuZCB7XG4gICAgICAgIHNvdW5kLmFsbG93TXVsdGlwbGUgPSB0cnVlO1xuICAgICAgICByZXR1cm4gc291bmQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0S2V5RnJvbU1hcmtlck5hbWUobWFya2VyOiBzdHJpbmcpOiBzdHJpbmcgfCBib29sZWFuIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9tYXJrZXJMb29rdXBbbWFya2VyXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXJMb29rdXBbbWFya2VyXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5fc3ByaXRlcykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zcHJpdGVzW2tleV0uc291bmRzW21hcmtlcl0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFya2VyTG9va3VwW21hcmtlcl0gPSBrZXk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcGxheVNwcml0ZU1hcmtlcihrZXk6IHN0cmluZywgbWFya2VyOiBzdHJpbmcsIHZvbHVtZT86IGFueSwgbG9vcDogYm9vbGVhbiA9IGZhbHNlLCBmb3JjZVJlc3RhcnQ6IGJvb2xlYW4gPSB0cnVlKTogUGhhc2VyLlNvdW5kIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2b2x1bWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZvbHVtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpZiAodm9sdW1lLmluZGV4T2YoJysnKSA+PSAwIHx8IHZvbHVtZS5pbmRleE9mKCctJykgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICB2b2x1bWUgPSB0aGlzLl9kZWZhdWx0Vm9sdW1lICsgcGFyc2VGbG9hdCh2b2x1bWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZSA9IHBhcnNlRmxvYXQodm9sdW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2b2x1bWUgPSB0aGlzLl9kZWZhdWx0Vm9sdW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9vcCA9IGxvb3AgfHwgZmFsc2U7XG4gICAgICAgIGZvcmNlUmVzdGFydCA9IGZvcmNlUmVzdGFydCA9PT0gZmFsc2UgPyBmYWxzZSA6IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZXNba2V5XS5wbGF5KG1hcmtlciwgdm9sdW1lKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zdG9wU3ByaXRlTWFya2VyKGtleTogc3RyaW5nLCBtYXJrZXI6IHN0cmluZyk6IGJvb2xlYW4gfCBQaGFzZXIuU291bmQge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3Nwcml0ZXMgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB0aGlzLl9zcHJpdGVzW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZXNba2V5XS5zdG9wKG1hcmtlcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc3RvcFNvdW5kKHNvdW5kOiBQaGFzZXIuU291bmQpOiB2b2lkIHtcbiAgICAgICAgcmV0dXJuIHNvdW5kLnN0b3AoKTtcbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuICAgIC8qKlxuICAgICogYWRkcyBhdWRpbyB0byB0aGUgbG9va3VwIChjYWxsZWQgYnkgQXNzZXRNYW5hZ2VyIHdoZW4gYW55IHNvdW5kIGlzIGxvYWRlZCwgdXN1YWxseSBub3QgbmVjZXNzYXJ5IHRvIGNhbGwgZnJvbSBhIGdhbWUpXG4gICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5ICAgICAgICAgdGhlIFBoYXNlci5DYWNoZSBrZXkgb2YgdGhlIGF1ZGlvIGFzc2V0XG4gICAgKiBAcGFyYW0ge0Jvb2xlYW59IGlzQXVkaW9TcHJpdGUgd2hldGhlciB0aGUgYXNzZXQgaXMgYW4gYXVkaW8gc3ByaXRlXG4gICAgKi9cbiAgICBwdWJsaWMgYWRkQXVkaW8oa2V5OiBzdHJpbmcsIGlzQXVkaW9TcHJpdGU6IGJvb2xlYW4gPSBmYWxzZSk6IFBoYXNlci5BdWRpb1Nwcml0ZSB8IFBoYXNlci5Tb3VuZCB7XG4gICAgICAgIGlmIChpc0F1ZGlvU3ByaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRBdWRpb1Nwcml0ZShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmFkZFNvdW5kKGtleSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBhZGRzIGEgc2luZ2xlIHNvdW5kIHRvIHRoZSBsb29rdXAgKHVzdWFsbHkgbm90IG5lY2Vzc2FyeSB0byBjYWxsIGZyb20gYSBnYW1lKVxuICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSB0aGUgUGhhc2VyLkNhY2hlIGtleSBvZiB0aGUgYXNzZXRcbiAgICAqIEByZXR1cm4ge1BoYXNlci5Tb3VuZH0gdGhlIGFkZGVkIHNvdW5kXG4gICAgKi9cbiAgICBwdWJsaWMgYWRkU291bmQoa2V5KTogUGhhc2VyLlNvdW5kIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zb3VuZHNba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zb3VuZHNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zb3VuZHNba2V5XSA9IHRoaXMuZ2FtZS5hZGQuYXVkaW8oa2V5KTtcbiAgICAgICAgdGhpcy5fc291bmRzW2tleV0uYWxsb3dNdWx0aXBsZSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VuZHNba2V5XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGFkZHMgYW4gYXVkaW8gc3ByaXRlIHRvIHRoZSBsb29rdXAgKHVzdWFsbHkgbm90IG5lY2Vzc2FyeSB0byBjYWxsIGZyb20gYSBnYW1lKVxuICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSB0aGUgUGhhc2VyLkNhY2hlIGtleSBvZiB0aGUgYXNzZXRcbiAgICAqIEByZXR1cm4ge1BoYXNlci5BdWRpb1Nwcml0ZX0gdGhlIGFkZGVkIGF1ZGlvIHNwcml0ZVxuICAgICovXG4gICAgcHVibGljIGFkZEF1ZGlvU3ByaXRlKGtleTogc3RyaW5nKTogUGhhc2VyLkF1ZGlvU3ByaXRlIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zcHJpdGVzW2tleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Nwcml0ZXNba2V5XSA9IDxQaGFzZXIuQXVkaW9TcHJpdGU+dGhpcy5fYWRkQXVkaW8oa2V5LCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZXNba2V5XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGEgZ2xvYmFsIG1ldGhvZCB0byBwbGF5IGEgc291bmQgLSB3aWxsIGNoZWNrIGF1ZGlvIHNwcml0ZSBtYXJrZXJzIGZvciB0aGUgcHJvdmlkZWQga2V5IGZpcnN0LCB0aGVuIHNpbmdsZSBzb3VuZHNcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gbWFya2VyICAgICAgIHRoZSBzb3VuZCBtYXJrZXIgKG9yIGtleSkgdG8gY2hlY2sgZm9yXG4gICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHZvbHVtZSAgICAgICB0aGUgdm9sdW1lIGF0IHdoaWNoIHRvIHBsYXkgdGhlIHNvdW5kXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBsb29wICAgICAgICAgd2hldGhlciB0aGUgc291bmQgc2hvdWxkIGxvb3AgKHdvbid0IHdvcmsgaWYgaXQncyBhIHNwcml0ZSBtYXJrZXIsIGFuZCBcImxvb3BcIiBoYXNuJ3QgYmVlbiBzZXQgaW4gdGhlIGF1ZGlvIHNwcml0ZSBkZXNjcmlwdG9yIGZpbGUpXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBmb3JjZVJlc3RhcnQgd2hldGhlciB0byByZXN0YXJ0IHRoZSBzb3VuZCBpZiBpdCdzIGFscmVhZHkgcGxheWluZ1xuICAgICogQHJldHVybiB7UGhhc2VyLlNvdW5kfSAgICAgICAgICAgICAgdGhlIHBsYXlpbmcgc291bmRcbiAgICAqL1xuICAgIHB1YmxpYyBwbGF5QXVkaW8obWFya2VyOiBzdHJpbmcsIHZvbHVtZT86IG51bWJlciwgbG9vcDogYm9vbGVhbiA9IGZhbHNlLCBmb3JjZVJlc3RhcnQ6IGJvb2xlYW4gPSB0cnVlKTogUGhhc2VyLlNvdW5kIHtcbiAgICAgICAgaWYgKHRoaXMuX2dldEtleUZyb21NYXJrZXJOYW1lKG1hcmtlcikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXlTcHJpdGVNYXJrZXIobWFya2VyLCB2b2x1bWUsIGxvb3AsIGZvcmNlUmVzdGFydCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5wbGF5U291bmQobWFya2VyLCB2b2x1bWUsIGxvb3AsIGZvcmNlUmVzdGFydCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBjYWxscyBEaWpvbi5BdWRpb01hbmFnZXIucGxheUF1ZGlvIG9uIGEgZGVsYXlcbiAgICAqIEBwYXJhbSAge2ludH0gZGVsYXkgICAgICAgIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkgdGhlIHNvdW5kXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IG1hcmtlciAgICAgICB0aGUgc291bmQgbWFya2VyIChvciBrZXkpIHRvIGNoZWNrIGZvclxuICAgICogQHBhcmFtICB7TnVtYmVyfSB2b2x1bWUgICAgICAgdGhlIHZvbHVtZSBhdCB3aGljaCB0byBwbGF5IHRoZSBzb3VuZFxuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gbG9vcCAgICAgICAgIHdoZXRoZXIgdGhlIHNvdW5kIHNob3VsZCBsb29wICh3b24ndCB3b3JrIGlmIGl0J3MgYSBzcHJpdGUgbWFya2VyLCBhbmQgXCJsb29wXCIgaGFzbid0IGJlZW4gc2V0IGluIHRoZSBhdWRpbyBzcHJpdGUgZGVzY3JpcHRvciBmaWxlKVxuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gZm9yY2VSZXN0YXJ0IHdoZXRoZXIgdG8gcmVzdGFydCB0aGUgc291bmQgaWYgaXQncyBhbHJlYWR5IHBsYXlpbmdcbiAgICAqL1xuICAgIHB1YmxpYyBwbGF5RGVsYXllZEF1ZGlvKGRlbGF5OiBudW1iZXIsIG1hcmtlcjogc3RyaW5nLCB2b2x1bWU/OiBudW1iZXIsIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSwgZm9yY2VSZXN0YXJ0OiBib29sZWFuID0gdHJ1ZSk6IFBoYXNlci5Tb3VuZCB7XG4gICAgICAgIGlmICh0aGlzLl9nZXRLZXlGcm9tTWFya2VyTmFtZShtYXJrZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5RGVsYXllZFNwcml0ZU1hcmtlcihkZWxheSwgbWFya2VyLCB2b2x1bWUsIGxvb3AsIGZvcmNlUmVzdGFydCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGxheURlbGF5ZWRTb3VuZChkZWxheSwgbWFya2VyLCB2b2x1bWUsIGxvb3AsIGZvcmNlUmVzdGFydCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBwbGF5cyBhIHNpbmdsZSBzb3VuZFxuICAgICogQHBhcmFtICB7U3RyaW5nfSBrZXkgICAgICAgICAgdGhlIFBoYXNlci5DYWNoZSBrZXkgZm9yIHRoZSBzb3VuZFxuICAgICogQHBhcmFtICB7TnVtYmVyfSB2b2x1bWUgICAgICAgdGhlIHZvbHVtZSBhdCB3aGljaCB0byBwbGF5IHRoZSBzb3VuZFxuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gbG9vcCAgICAgICAgIHdoZXRoZXIgdGhlIHNvdW5kIHNob3VsZCBsb29wICh3b24ndCB3b3JrIGlmIGl0J3MgYSBzcHJpdGUgbWFya2VyLCBhbmQgXCJsb29wXCIgaGFzbid0IGJlZW4gc2V0IGluIHRoZSBhdWRpbyBzcHJpdGUgZGVzY3JpcHRvciBmaWxlKVxuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gZm9yY2VSZXN0YXJ0IHdoZXRoZXIgdG8gcmVzdGFydCB0aGUgc291bmQgaWYgaXQncyBhbHJlYWR5IHBsYXlpbmdcbiAgICAqIEByZXR1cm4ge1BoYXNlci5Tb3VuZH0gdGhlIHBsYXlpbmcgc291bmRcbiAgICAqL1xuICAgIHB1YmxpYyBwbGF5U291bmQoa2V5OiBzdHJpbmcsIHZvbHVtZT86IG51bWJlciwgbG9vcDogYm9vbGVhbiA9IGZhbHNlLCBmb3JjZVJlc3RhcnQ6IGJvb2xlYW4gPSB0cnVlKTogUGhhc2VyLlNvdW5kIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zb3VuZHNba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZvbHVtZSA9IHR5cGVvZiB2b2x1bWUgPT09ICd1bmRlZmluZWQnID8gdGhpcy5fZGVmYXVsdFZvbHVtZSA6IHZvbHVtZTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fc291bmRzW2tleV0ucGxheShcIlwiLCAwLCB2b2x1bWUsIGxvb3AsIGZvcmNlUmVzdGFydCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBwbGF5cyBhIG1hcmtlciBmcm9tIGFuIGF1ZGlvIHNwcml0ZVxuICAgICogQHBhcmFtICB7U3RyaW5nfSBtYXJrZXIgICAgICAgdGhlIG1hcmtlciB0byBjaGVjayBmb3IgKHdpbGwgY2hlY2sgYWxsIGF1ZGlvIHNwcml0ZXMpXG4gICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHZvbHVtZSAgICAgICB0aGUgdm9sdW1lIGF0IHdoaWNoIHRvIHBsYXkgdGhlIHNvdW5kXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBsb29wICAgICAgICAgd2hldGhlciB0aGUgc291bmQgc2hvdWxkIGxvb3AgKHdvbid0IHdvcmsgaWYgaXQncyBhIHNwcml0ZSBtYXJrZXIsIGFuZCBcImxvb3BcIiBoYXNuJ3QgYmVlbiBzZXQgaW4gdGhlIGF1ZGlvIHNwcml0ZSBkZXNjcmlwdG9yIGZpbGUpXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBmb3JjZVJlc3RhcnQgd2hldGhlciB0byByZXN0YXJ0IHRoZSBzb3VuZCBpZiBpdCdzIGFscmVhZHkgcGxheWluZ1xuICAgICogQHJldHVybiB7UGhhc2VyLlNvdW5kfSB0aGUgcGxheWluZyBzb3VuZFxuICAgICovXG4gICAgcHVibGljIHBsYXlTcHJpdGVNYXJrZXIobWFya2VyOiBzdHJpbmcsIHZvbHVtZT86IG51bWJlciwgbG9vcDogYm9vbGVhbiA9IGZhbHNlLCBmb3JjZVJlc3RhcnQ6IGJvb2xlYW4gPSB0cnVlKTogUGhhc2VyLlNvdW5kIHtcbiAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5fZ2V0S2V5RnJvbU1hcmtlck5hbWUobWFya2VyKTtcblxuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ21hcmtlciBub3QgZm91bmQnLCBtYXJrZXIpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fcGxheVNwcml0ZU1hcmtlcig8c3RyaW5nPmtleSwgbWFya2VyLCB2b2x1bWUsIGxvb3AsIGZvcmNlUmVzdGFydCk7XG4gICAgfVxuXG4gICAgcHVibGljIHBsYXlEZWxheWVkU291bmQoZGVsYXk6IG51bWJlciwga2V5OiBzdHJpbmcsIHZvbHVtZT86IG51bWJlciwgbG9vcDogYm9vbGVhbiA9IGZhbHNlLCBmb3JjZVJlc3RhcnQ6IGJvb2xlYW4gPSB0cnVlKTogUGhhc2VyLlNvdW5kIHtcbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmFkZChkZWxheSwgdGhpcy5wbGF5U291bmQsIHRoaXMsIGtleSwgdm9sdW1lLCBsb29wLCBmb3JjZVJlc3RhcnQpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGxheURlbGF5ZWRTcHJpdGVNYXJrZXIoZGVsYXk6IG51bWJlciwgbWFya2VyOiBzdHJpbmcsIHZvbHVtZT86IG51bWJlciwgbG9vcDogYm9vbGVhbiA9IGZhbHNlLCBmb3JjZVJlc3RhcnQ6IGJvb2xlYW4gPSB0cnVlKTogUGhhc2VyLlNvdW5kIHtcbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmFkZChkZWxheSwgdGhpcy5wbGF5U3ByaXRlTWFya2VyLCB0aGlzLCBtYXJrZXIsIHZvbHVtZSwgbG9vcCwgZm9yY2VSZXN0YXJ0KTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBzdG9wcyBhbnkgcGxheWluZyBhdWRpbyBmaWxlIHdpdGggdGhlIGdpdmVuIG1hcmtlclxuICAgICogY2hlY2tzIGF1ZGlvIHNwcml0ZXMgZmlyc3QsIHRoZW4gc2luZ2xlIHNvdW5kc1xuICAgICogQHJldHVybiB7UGhhc2VyLlNvdW5kfSB0aGUgc291bmQgdGhhdCB3YXMgc3RvcHBlZFxuICAgICovXG4gICAgcHVibGljIHN0b3BBdWRpbyhtYXJrZXI6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fZ2V0S2V5RnJvbU1hcmtlck5hbWUobWFya2VyKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcFNwcml0ZU1hcmtlcihtYXJrZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3BTb3VuZChtYXJrZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogc3RvcHMgYSBzaW5nbGUgc291bmQgZnJvbSBwbGF5aW5nXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuU291bmR9IHRoZSBzb3VuZCB0aGF0IHdhcyBzdG9wcGVkXG4gICAgKi9cbiAgICBwdWJsaWMgc3RvcFNvdW5kKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc291bmRzID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgdGhpcy5fc291bmRzW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kc1trZXldLnN0b3AoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHN0b3BzIGEgc2luZ2xlIHNvdW5kIGZyb20gcGxheWluZ1xuICAgICogQHJldHVybiB7UGhhc2VyLlNvdW5kfSB0aGUgc291bmQgdGhhdCB3YXMgc3RvcHBlZFxuICAgICovXG4gICAgcHVibGljIHN0b3BTcHJpdGVNYXJrZXIobWFya2VyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuX2dldEtleUZyb21NYXJrZXJOYW1lKG1hcmtlcik7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbWFya2VyIG5vdCBmb3VuZCcsIG1hcmtlcik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RvcFNwcml0ZU1hcmtlcig8c3RyaW5nPmtleSwgbWFya2VyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHN0b3BzIHJlbW92ZXMgYSBzb3VuZCBmcm9tIERpam9uLkF1ZGlvTWFuYWdlcidzIGxvb2t1cFxuICAgICogQHBhcmFtICB7U3RyaW5nfSBrZXkgdGhlIGtleSBvZiB0aGUgc291bmQgdG8gYmUgcmVtb3ZlZFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyByZW1vdmVTb3VuZChrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zb3VuZHMgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB0aGlzLl9zb3VuZHNba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fc291bmRzW2tleV0pIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcFNvdW5kKGtleSk7XG4gICAgICAgICAgICB0aGlzLl9zb3VuZHNba2V5XS5kZXN0cm95KCk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fc291bmRzW2tleV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHN0b3BzIHJlbW92ZXMgYW4gYXVkaW8gc3ByaXRlIGZyb20gRGlqb24uQXVkaW9NYW5hZ2VyJ3MgbG9va3VwXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGtleSB0aGUga2V5IG9mIHRoZSBzb3VuZCB0byBiZSByZW1vdmVkXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIHJlbW92ZVNwcml0ZShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3Nwcml0ZXMgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB0aGlzLl9zcHJpdGVzW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdG9wU3ByaXRlTWFya2VyKGtleSk7XG4gICAgICAgIHRoaXMuX3Nwcml0ZXNba2V5XSA9IG51bGw7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9zcHJpdGVzW2tleV07XG4gICAgfVxuXG4gICAgcHVibGljIGZhZGUoc291bmQ6IFBoYXNlci5Tb3VuZCwgdm9sdW1lOiBudW1iZXIsIHRpbWU6IG51bWJlciwgc3RvcDogYm9vbGVhbiA9IGZhbHNlKTogUGhhc2VyLlR3ZWVuIHtcbiAgICAgICAgaWYgKCFzb3VuZClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBpZiAoc291bmQuZmFkZVR3ZWVuICYmIHNvdW5kLmZhZGVUd2VlbilcbiAgICAgICAgICAgIHRoaXMuZ2FtZS50d2VlbnMucmVtb3ZlKHNvdW5kLmZhZGVUd2Vlbik7XG5cbiAgICAgICAgc291bmQuZmFkZVR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbihzb3VuZCkudG8oe1xuICAgICAgICAgICAgdm9sdW1lOiB2b2x1bWVcbiAgICAgICAgfSwgdGltZSB8fCAzMDAsIFBoYXNlci5FYXNpbmcuTGluZWFyLk5vbmUpO1xuXG4gICAgICAgIGlmIChzdG9wID09PSB0cnVlKVxuICAgICAgICAgICAgc291bmQuZmFkZVR3ZWVuLm9uQ29tcGxldGUuYWRkT25jZShmdW5jdGlvbiAoKSB7IHRoaXMuX3N0b3BTb3VuZChzb3VuZCkgfSwgdGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIHNvdW5kLmZhZGVUd2Vlbi5zdGFydCgpO1xuICAgIH1cblxuICAgIC8vIGdldHRlciAvIHNldHRlclxuICAgIC8qKlxuICAgICogU2V0cyB0aGUgZGVmYXVsdCB2b2x1bWUgZm9yIGFsbCBzb3VuZHMgKHVzZWQgaW4gdGhlIGNhc2Ugd2hlcmUgYSB2b2x1bWUgaXMgbm90IHN1cHBsaWVkIHRvIHRoZSBwbGF5QXVkaW8sIHBsYXlTb3VuZCwgb3IgcGxheVNwcml0ZU1hcmtlciBtZXRob2RzKVxuICAgICovXG4gICAgcHVibGljIHNldCBkZWZhdWx0Vm9sdW1lKHZvbDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRWb2x1bWUgPSB2b2w7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkZWZhdWx0Vm9sdW1lKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0Vm9sdW1lO1xuICAgIH1cbn1cblxuLyoqXG4gKiBHYW1lXG4gKi9cbmV4cG9ydCBjbGFzcyBHYW1lIGV4dGVuZHMgUGhhc2VyLkdhbWUge1xuICAgIC8vIHB1YmxpYyB2YXJpYWJsZXNcbiAgICAvLyBhcHBsaWNhdGlvblxuICAgIHB1YmxpYyBhcHA6IEFwcGxpY2F0aW9uO1xuICAgIHB1YmxpYyBjb25maWc6IElHYW1lQ29uZmlnO1xuXG4gICAgLy8gbWFuYWdlcnNcbiAgICBwdWJsaWMgYXNzZXQ6IEFzc2V0TWFuYWdlcjtcbiAgICBwdWJsaWMgc2VxdWVuY2U6IFNlcXVlbmNlTWFuYWdlcjtcbiAgICBwdWJsaWMgdHJhbnNpdGlvbjogVHJhbnNpdGlvbk1hbmFnZXI7XG4gICAgcHVibGljIHN0b3JhZ2U6IFN0b3JhZ2VNYW5hZ2VyO1xuICAgIHB1YmxpYyBhdWRpbzogQXVkaW9NYW5hZ2VyO1xuICAgIHB1YmxpYyBhbmFseXRpY3M6IEFuYWx5dGljc01hbmFnZXI7XG4gICAgcHVibGljIGFkZDogR2FtZU9iamVjdEZhY3Rvcnk7XG5cbiAgICAvLyBzaWduYWxzXG4gICAgcHVibGljIG9uV29ybGRJbnB1dERpc2FibGVkOiBQaGFzZXIuU2lnbmFsID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICBwdWJsaWMgb25Xb3JsZElucHV0RW5hYmxlZDogUGhhc2VyLlNpZ25hbCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG5cbiAgICAvLyBkaXNwbGF5IGxheWVyc1xuICAgIHB1YmxpYyBiYWNrZ3JvdW5kTGF5ZXI6IEdyb3VwO1xuICAgIHB1YmxpYyBnYW1lTGF5ZXI6IEdyb3VwO1xuICAgIHB1YmxpYyB1aUxheWVyOiBHcm91cDtcbiAgICBwdWJsaWMgc3RhZ2VMYXllcjogR3JvdXA7XG5cbiAgICAvLyBQaGFzZXIuR2FtZSBvdmVycmlkZXNcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IElHYW1lQ29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgfVxuXG4gICAgcHVibGljIGJvb3QoKSB7XG4gICAgICAgIHN1cGVyLmJvb3QoKTtcblxuICAgICAgICB0aGlzLmFwcCA9IEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCk7XG5cbiAgICAgICAgLy8gYWRkIG1hbmFnZXJzXG4gICAgICAgIHRoaXMuYXNzZXQgPSBuZXcgQXNzZXRNYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMuc2VxdWVuY2UgPSBuZXcgU2VxdWVuY2VNYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IG5ldyBUcmFuc2l0aW9uTWFuYWdlcigpO1xuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgU3RvcmFnZU1hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5hdWRpbyA9IG5ldyBBdWRpb01hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5hbmFseXRpY3MgPSBuZXcgQW5hbHl0aWNzTWFuYWdlcih0aGlzLmNvbmZpZy5hbmFseXRpY3MpO1xuXG4gICAgICAgIC8vIHJlcGxhY2UgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5XG4gICAgICAgIHRoaXMuYWRkID0gbnVsbDtcbiAgICAgICAgdGhpcy5hZGQgPSBuZXcgR2FtZU9iamVjdEZhY3RvcnkodGhpcyk7XG4gICAgICAgIHRoaXMuYWRkTGF5ZXJzKCk7XG4gICAgICAgIHRoaXMuYWRkTW91c2VDYWxsYmFja3MoKTtcbiAgICAgICAgdGhpcy5zZXRGYWN0b3J5RGVmYXVsdExheWVyKHRoaXMuZ2FtZUxheWVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkUGx1Z2lucygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnBsdWdpbnMgJiYgdGhpcy5jb25maWcucGx1Z2lucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5wbHVnaW5zLmZvckVhY2gocGx1Z2luTmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBQaGFzZXIuUGx1Z2luW3BsdWdpbk5hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkLnBsdWdpbihQaGFzZXIuUGx1Z2luW3BsdWdpbk5hbWVdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE92ZXJyaWRlIHRoaXMud29ybGQgYXMgdGhlIGRlZmF1bHQgbGF5ZXIgdGhhdFxuICAgIC8vIC5hZGQgY2FsbHMgd2lsbCBiZSBjcmVhdGVkIG9uLlxuICAgIHB1YmxpYyBzZXRGYWN0b3J5RGVmYXVsdExheWVyKG5ld0xheWVyOiBQaGFzZXIuR3JvdXApIHtcbiAgICAgICAgdGhpcy5hZGQuc2V0RGVmYXVsdExheWVyKG5ld0xheWVyIHx8IHRoaXMud29ybGQpO1xuICAgIH1cbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICBwcm90ZWN0ZWQgYWRkTGF5ZXJzKCk6IHZvaWQge1xuICAgICAgICAvLyBhZGRzIHBlcnNpc3RlbnQgYmFja2dyb3VuZCBsYXllclxuICAgICAgICB0aGlzLmJhY2tncm91bmRMYXllciA9IHRoaXMuYWRkLmRHcm91cCgwLCAwLCAnX2JhY2tncm91bmRfbGF5ZXInLCB0cnVlKTtcbiAgICAgICAgdGhpcy5zdGFnZS5zZXRDaGlsZEluZGV4KHRoaXMuYmFja2dyb3VuZExheWVyLCAwKTtcblxuICAgICAgICAvLyBhZGRzIGdhbWUgYW5kIHVpIGxheWVyc1xuICAgICAgICB0aGlzLmdhbWVMYXllciA9IHRoaXMuYWRkLmRHcm91cCgwLCAwLCAnX2dhbWVfbGF5ZXInKTtcbiAgICAgICAgLy8gYWRkIHVpIGxheWVyIGFuZCBzZXQgdGhlIFwiZml4ZWRUb0NhbWVyYVwiIHByb3BlcnR5IHRvIHRydWVcbiAgICAgICAgLy8gaWYgdGhlIGdhbWUncyBjYW1lcmEgbW92ZXMsIGFueXRoaW5nIGluIHRoaXMgZ3JvdXAgd2lsbCBzdGF5IGluIHBsYWNlXG4gICAgICAgIHRoaXMudWlMYXllciA9IHRoaXMuYWRkLmRHcm91cCgwLCAwLCAnX3VpX2xheWVyJyk7XG4gICAgICAgIHRoaXMudWlMYXllci5maXhlZFRvQ2FtZXJhID0gdHJ1ZTtcblxuICAgICAgICAvLyBhZGQgYSBncm91cCB0byB0aGUgUGhhc2VyLlN0YWdlIChqdXN0IGluIGNhc2UpXG4gICAgICAgIHRoaXMuc3RhZ2VMYXllciA9IHRoaXMuYWRkLmRHcm91cCgwLCAwLCAnX3N0YWdlX2xheWVyJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZE1vdXNlQ2FsbGJhY2tzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5kZXZpY2UuZGVza3RvcCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5tb3VzZS5tb3VzZU92ZXJDYWxsYmFjayA9IHRoaXMubW91c2VPdmVyO1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5tb3VzZS5tb3VzZU91dENhbGxiYWNrID0gdGhpcy5tb3VzZU91dDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBtb3VzZU91dCgpOiB2b2lkIHtcbiAgICAgICAgQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5zZW5kTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbnMuTU9VU0VfTEVBVkVfR0xPQkFMKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbW91c2VPdmVyKCk6IHZvaWQge1xuICAgICAgICBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLnNlbmROb3RpZmljYXRpb24oTm90aWZpY2F0aW9ucy5NT1VTRV9FTlRFUl9HTE9CQUwpO1xuICAgIH1cblxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgcHVibGljIGRpc2FibGVFbGVtZW50SW5wdXQoZWw6IGFueSk6IGFueSB7XG4gICAgICAgIGlmIChlbC5pbnB1dCAmJiBlbC5pbnB1dEVuYWJsZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGVsLndhc0VuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgZWwuaW5wdXRFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWwuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVFbGVtZW50SW5wdXQoZWwuY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGVuYWJsZUVsZW1lbnRJbnB1dChlbDogYW55KTogYW55IHtcbiAgICAgICAgaWYgKGVsLmlucHV0ICYmIGVsLmlucHV0RW5hYmxlZCA9PT0gZmFsc2UgJiYgZWwud2FzRW5hYmxlZCkge1xuICAgICAgICAgICAgZWwud2FzRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZWwuaW5wdXRFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWwuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlRWxlbWVudElucHV0KGVsLmNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkaXNhYmxlSW5wdXQoZ3JvdXA6IFBoYXNlci5Hcm91cCk6IGFueSB7XG4gICAgICAgIHJldHVybiBncm91cC5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgaWYgKGVsIGluc3RhbmNlb2YgUGhhc2VyLkdyb3VwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZUlucHV0KGVsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZUVsZW1lbnRJbnB1dChlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBlbmFibGVJbnB1dChncm91cDogUGhhc2VyLkdyb3VwKTogYW55IHtcbiAgICAgICAgcmV0dXJuIGdyb3VwLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICBpZiAoZWwgaW5zdGFuY2VvZiBQaGFzZXIuR3JvdXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbmFibGVJbnB1dChlbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVuYWJsZUVsZW1lbnRJbnB1dChlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXNhYmxlR2FtZUlucHV0KCkge1xuICAgICAgICB0aGlzLmRpc2FibGVJbnB1dCh0aGlzLmdhbWVMYXllcik7XG4gICAgICAgIHRoaXMub25Xb3JsZElucHV0RGlzYWJsZWQuZGlzcGF0Y2goKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZW5hYmxlR2FtZUlucHV0KCkge1xuICAgICAgICB0aGlzLmVuYWJsZUlucHV0KHRoaXMuZ2FtZUxheWVyKTtcbiAgICAgICAgdGhpcy5vbldvcmxkSW5wdXRFbmFibGVkLmRpc3BhdGNoKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmVtb3ZlcyBhbGwgaXRlbXMgZnJvbSB0aGUgZ2FtZSBsYXllclxuICAgICAqIGJ1dCBhbGxvd3MgdGhlIHVpIGxheWVyIHRvIHBlcnNpc3RcbiAgICAgKiB0aGF0IHdheSB3ZSBjYW4gb3ZlcmxheSB0aGUgZ2FtZSB3aXRob3V0IGFkZGluZyBzdHVmZiB0byB0aGUgcGhhc2VyIHN0YWdlIChmb3IgdHJhbnNpdGlvbnMpXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHRvU3RhdGUgdGhlIG5ldyBzdGF0ZSB3ZSdyZSBjaGFuZ2luZyB0b1xuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgcHVibGljIGNoYW5nZVN0YXRlKHRvU3RhdGU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmdhbWVMYXllci5yZW1vdmVBbGwodHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnN0YXJ0KHRvU3RhdGUsIGZhbHNlLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLy8gZ2V0dGVyIC8gc2V0dGVyXG4gICAgLyoqXG4gICAgICogc2V0cyB0aGUgdGFyZ2V0IGdyb3VwIGZvciB0aGUgZ2FtZU9iamVjdEZhY3RvcnkgdG8gZ2FtZUxheWVyIGJlZm9yZSBhZGRpbmdcbiAgICAgKiB0aGlzIHdheSBpZiB3ZSBwYXNzIGEgbnVsbCBncm91cCB0byB3aGF0ZXZlciBtZXRob2Qgd2UgY2FsbFxuICAgICAqIGllICh0aGlzLmdhbWUuYWRkVG9HYW1lLmltYWdlKDAsIDAsIGtleSwgZnJhbWUpKTtcbiAgICAgKiBpdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBhcHByb3ByaWF0ZSBsYXllclxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgYWRkVG9HYW1lKCk6IEdhbWVPYmplY3RGYWN0b3J5IHtcbiAgICAgICAgdGhpcy5hZGQudGFyZ2V0R3JvdXAgPSB0aGlzLmdhbWVMYXllcjtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHNldHMgdGhlIHRhcmdldCBncm91cCBmb3IgdGhlIGdhbWVPYmplY3RGYWN0b3J5IHRvIHVpTGF5ZXIgYmVmb3JlIGFkZGluZ1xuICAgICAqIHRoaXMgd2F5IGlmIHdlIHBhc3MgYSBudWxsIGdyb3VwIHRvIHdoYXRldmVyIG1ldGhvZCB3ZSBjYWxsXG4gICAgICogaWUgKHRoaXMuZ2FtZS5hZGRUb1VJLmltYWdlKDAsIDAsIGtleSwgZnJhbWUpKTtcbiAgICAgKiBpdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBhcHByb3ByaWF0ZSBsYXllclxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgYWRkVG9CYWNrZ3JvdW5kKCk6IEdhbWVPYmplY3RGYWN0b3J5IHtcbiAgICAgICAgdGhpcy5hZGQudGFyZ2V0R3JvdXAgPSB0aGlzLmJhY2tncm91bmRMYXllcjtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkO1xuICAgIH1cblxuXG4gICAgcHVibGljIGdldCBhZGRUb1VJKCk6IEdhbWVPYmplY3RGYWN0b3J5IHtcbiAgICAgICAgLy8gc2V0IHRoZSB0YXJnZXQgZ3JvdXAgZm9yIHRoZSBnYW1lT2JqZWN0RmFjdG9yeSBiZWZvcmUgYWRkaW5nXG4gICAgICAgIHRoaXMuYWRkLnRhcmdldEdyb3VwID0gdGhpcy51aUxheWVyO1xuICAgICAgICByZXR1cm4gdGhpcy5hZGQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhZGRUb1N0YWdlKCk6IEdhbWVPYmplY3RGYWN0b3J5IHtcbiAgICAgICAgLy8gc2V0IHRoZSB0YXJnZXQgZ3JvdXAgZm9yIHRoZSBnYW1lT2JqZWN0RmFjdG9yeSBiZWZvcmUgYWRkaW5nXG4gICAgICAgIHRoaXMuYWRkLnRhcmdldEdyb3VwID0gdGhpcy5zdGFnZUxheWVyO1xuICAgICAgICByZXR1cm4gdGhpcy5hZGQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhZGRUb1dvcmxkKCk6IEdhbWVPYmplY3RGYWN0b3J5IHtcbiAgICAgICAgLy8gc2V0IHRoZSB0YXJnZXQgZ3JvdXAgZm9yIHRoZSBnYW1lT2JqZWN0RmFjdG9yeSBiZWZvcmUgYWRkaW5nXG4gICAgICAgIHRoaXMuYWRkLnRhcmdldEdyb3VwID0gdGhpcy53b3JsZDtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkO1xuICAgIH1cbn1cblxuLyoqXG4gKiBHYW1lT2JqZWN0RmFjdG9yeVxuICovXG5cbmV4cG9ydCBjbGFzcyBHYW1lT2JqZWN0RmFjdG9yeSBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSB7XG4gICAgLy8gVGhlIGxheWVyIHRoZSBjdXJyZW50IG9iamVjdCB3aWxsIGJlIGFkZGVkIHRvLiBUaGlzIGlzIHVzZWQgYnkgaGVscGVyIGZ1bmN0aW9ucyBpbiBHYW1lLnRzLlxuICAgIHByb3RlY3RlZCBfdGFyZ2V0R3JvdXA6IFBoYXNlci5Hcm91cCA9IG51bGw7XG5cbiAgICAvLyBUaGlzIGlzIHRoZSBsYXllciB0aGF0IHN0YW5kYXJkIC5hZGQgY2FsbHMgd2lsbCBiZSBhcHBsaWVkIHRvLlxuICAgIHByb3RlY3RlZCBfZGVmYXVsdExheWVyOiBQaGFzZXIuR3JvdXAgPSB0aGlzLndvcmxkO1xuXG4gICAgLy8gb3ZlcnJpZGVzXG4gICAgLyoqXG4gICAgKiBBZGRzIGFuIGV4aXN0aW5nIGRpc3BsYXkgb2JqZWN0IHRvIHRoZSBnYW1lIHdvcmxkLlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5I2V4aXN0aW5nXG4gICAgKiBAcGFyYW0ge2FueX0gb2JqZWN0IC0gQW4gaW5zdGFuY2Ugb2YgUGhhc2VyLlNwcml0ZSwgUGhhc2VyLkJ1dHRvbiBvciBhbnkgb3RoZXIgZGlzcGxheSBvYmplY3QuXG4gICAgKiBAcmV0dXJuIHthbnl9IFRoZSBjaGlsZCB0aGF0IHdhcyBhZGRlZCB0byB0aGUgV29ybGQuXG4gICAgKi9cbiAgICBwdWJsaWMgZXhpc3Rpbmcob2JqZWN0KTogYW55IHtcbiAgICAgICAgbGV0IGdyb3VwID0gdGhpcy50YXJnZXRHcm91cDtcbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBncm91cC5hZGQob2JqZWN0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgYEltYWdlYCBvYmplY3QuXG4gICAgKlxuICAgICogQW4gSW1hZ2UgaXMgYSBsaWdodC13ZWlnaHQgb2JqZWN0IHlvdSBjYW4gdXNlIHRvIGRpc3BsYXkgYW55dGhpbmcgdGhhdCBkb2Vzbid0IG5lZWQgcGh5c2ljcyBvciBhbmltYXRpb24uXG4gICAgKlxuICAgICogSXQgY2FuIHN0aWxsIHJvdGF0ZSwgc2NhbGUsIGNyb3AgYW5kIHJlY2VpdmUgaW5wdXQgZXZlbnRzLlxuICAgICogVGhpcyBtYWtlcyBpdCBwZXJmZWN0IGZvciBsb2dvcywgYmFja2dyb3VuZHMsIHNpbXBsZSBidXR0b25zIGFuZCBvdGhlciBub24tU3ByaXRlIGdyYXBoaWNzLlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5I2ltYWdlXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3g9MF0gLSBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBJbWFnZS4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyBJbWFnZSBtYXkgYmUgaW4uXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3k9MF0gLSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBJbWFnZS4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyBJbWFnZSBtYXkgYmUgaW4uXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xQaGFzZXIuUmVuZGVyVGV4dHVyZXxQaGFzZXIuQml0bWFwRGF0YXxQaGFzZXIuVmlkZW98UElYSS5UZXh0dXJlfSBba2V5XSAtIFRoZSBpbWFnZSB1c2VkIGFzIGEgdGV4dHVyZSBieSB0aGlzIGRpc3BsYXkgb2JqZWN0IGR1cmluZyByZW5kZXJpbmcuIElmIGEgc3RyaW5nIFBoYXNlciB3aWxsIGdldCBmb3IgYW4gZW50cnkgaW4gdGhlIEltYWdlIENhY2hlLiBPciBpdCBjYW4gYmUgYW4gaW5zdGFuY2Ugb2YgYSBSZW5kZXJUZXh0dXJlLCBCaXRtYXBEYXRhLCBWaWRlbyBvciBQSVhJLlRleHR1cmUuXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtmcmFtZV0gLSBJZiBhIFRleHR1cmUgQXRsYXMgb3IgU3ByaXRlIFNoZWV0IGlzIHVzZWQgdGhpcyBhbGxvd3MgeW91IHRvIHNwZWNpZnkgdGhlIGZyYW1lIHRvIGJlIHVzZWQuIFVzZSBlaXRoZXIgYW4gaW50ZWdlciBmb3IgYSBGcmFtZSBJRCBvciBhIHN0cmluZyBmb3IgYSBmcmFtZSBuYW1lLlxuICAgICogQHBhcmFtIHtQaGFzZXIuR3JvdXB9IFtncm91cF0gLSBPcHRpb25hbCBHcm91cCB0byBhZGQgdGhlIG9iamVjdCB0by4gSWYgbm90IHNwZWNpZmllZCBpdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBXb3JsZCBncm91cC5cbiAgICAqIEByZXR1cm5zIHtQaGFzZXIuSW1hZ2V9IFRoZSBuZXdseSBjcmVhdGVkIEltYWdlIG9iamVjdC5cbiAgICAqL1xuICAgIHB1YmxpYyBpbWFnZSh4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCBrZXk/OiBzdHJpbmcgfCBQaGFzZXIuUmVuZGVyVGV4dHVyZSB8IFBoYXNlci5CaXRtYXBEYXRhIHwgUElYSS5UZXh0dXJlLCBmcmFtZT86IHN0cmluZyB8IG51bWJlciwgZ3JvdXA/OiBQaGFzZXIuR3JvdXApOiBQaGFzZXIuSW1hZ2Uge1xuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCkgeyBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7IH1cbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBncm91cC5hZGQobmV3IFBoYXNlci5JbWFnZSh0aGlzLmdhbWUsIHgsIHksIGtleSwgZnJhbWUpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIENyZWF0ZSBhIG5ldyBTcHJpdGUgd2l0aCBzcGVjaWZpYyBwb3NpdGlvbiBhbmQgc3ByaXRlIHNoZWV0IGtleS5cbiAgICAqXG4gICAgKiBBdCBpdHMgbW9zdCBiYXNpYyBhIFNwcml0ZSBjb25zaXN0cyBvZiBhIHNldCBvZiBjb29yZGluYXRlcyBhbmQgYSB0ZXh0dXJlIHRoYXQgaXMgdXNlZCB3aGVuIHJlbmRlcmVkLlxuICAgICogVGhleSBhbHNvIGNvbnRhaW4gYWRkaXRpb25hbCBwcm9wZXJ0aWVzIGFsbG93aW5nIGZvciBwaHlzaWNzIG1vdGlvbiAodmlhIFNwcml0ZS5ib2R5KSwgaW5wdXQgaGFuZGxpbmcgKHZpYSBTcHJpdGUuaW5wdXQpLFxuICAgICogZXZlbnRzICh2aWEgU3ByaXRlLmV2ZW50cyksIGFuaW1hdGlvbiAodmlhIFNwcml0ZS5hbmltYXRpb25zKSwgY2FtZXJhIGN1bGxpbmcgYW5kIG1vcmUuIFBsZWFzZSBzZWUgdGhlIEV4YW1wbGVzIGZvciB1c2UgY2FzZXMuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuR2FtZU9iamVjdEZhY3Rvcnkjc3ByaXRlXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3g9MF0gLSBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBzcHJpdGUuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgc3ByaXRlIG1heSBiZSBpbi5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeT0wXSAtIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIHNwcml0ZS4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyBzcHJpdGUgbWF5IGJlIGluLlxuICAgICogQHBhcmFtIHtzdHJpbmd8UGhhc2VyLlJlbmRlclRleHR1cmV8UGhhc2VyLkJpdG1hcERhdGF8UGhhc2VyLlZpZGVvfFBJWEkuVGV4dHVyZX0gW2tleV0gLSBUaGUgaW1hZ2UgdXNlZCBhcyBhIHRleHR1cmUgYnkgdGhpcyBkaXNwbGF5IG9iamVjdCBkdXJpbmcgcmVuZGVyaW5nLiBJZiBhIHN0cmluZyBQaGFzZXIgd2lsbCBnZXQgZm9yIGFuIGVudHJ5IGluIHRoZSBJbWFnZSBDYWNoZS4gT3IgaXQgY2FuIGJlIGFuIGluc3RhbmNlIG9mIGEgUmVuZGVyVGV4dHVyZSwgQml0bWFwRGF0YSwgVmlkZW8gb3IgUElYSS5UZXh0dXJlLlxuICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbZnJhbWVdIC0gSWYgYSBUZXh0dXJlIEF0bGFzIG9yIFNwcml0ZSBTaGVldCBpcyB1c2VkIHRoaXMgYWxsb3dzIHlvdSB0byBzcGVjaWZ5IHRoZSBmcmFtZSB0byBiZSB1c2VkLiBVc2UgZWl0aGVyIGFuIGludGVnZXIgZm9yIGEgRnJhbWUgSUQgb3IgYSBzdHJpbmcgZm9yIGEgZnJhbWUgbmFtZS5cbiAgICAqIEBwYXJhbSB7UGhhc2VyLkdyb3VwfSBbZ3JvdXBdIC0gT3B0aW9uYWwgR3JvdXAgdG8gYWRkIHRoZSBvYmplY3QgdG8uIElmIG5vdCBzcGVjaWZpZWQgaXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgV29ybGQgZ3JvdXAuXG4gICAgKiBAcmV0dXJucyB7UGhhc2VyLlNwcml0ZX0gVGhlIG5ld2x5IGNyZWF0ZWQgU3ByaXRlIG9iamVjdC5cbiAgICAqL1xuICAgIHB1YmxpYyBzcHJpdGUoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwga2V5Pzogc3RyaW5nIHwgUElYSS5UZXh0dXJlLCBmcmFtZT86IHN0cmluZyB8IG51bWJlciwgZ3JvdXA/OiBQaGFzZXIuR3JvdXApOiBQaGFzZXIuU3ByaXRlIHtcbiAgICAgICAgaWYgKGdyb3VwID09PSB1bmRlZmluZWQpIHsgZ3JvdXAgPSB0aGlzLnRhcmdldEdyb3VwOyB9XG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xuXG4gICAgICAgIHJldHVybiBncm91cC5jcmVhdGUoeCwgeSwga2V5LCBmcmFtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgQ3JlYXR1cmUgQW5pbWF0aW9uIG9iamVjdC5cbiAgICAqXG4gICAgKiBDcmVhdHVyZSBpcyBhIGN1c3RvbSBHYW1lIE9iamVjdCB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIENyZWF0dXJlIFJ1bnRpbWUgbGlicmFyaWVzIGJ5IEtlc3RyZWwgTW9vbiBTdHVkaW9zLlxuICAgICpcbiAgICAqIEl0IGFsbG93cyB5b3UgdG8gZGlzcGxheSBhbmltYXRlZCBHYW1lIE9iamVjdHMgdGhhdCB3ZXJlIGNyZWF0ZWQgd2l0aCB0aGUgW0NyZWF0dXJlIEF1dG9tYXRlZCBBbmltYXRpb24gVG9vbF0oaHR0cDovL3d3dy5rZXN0cmVsbW9vbi5jb20vY3JlYXR1cmUvKS5cbiAgICAqXG4gICAgKiBOb3RlIDE6IFlvdSBjYW4gb25seSB1c2UgUGhhc2VyLkNyZWF0dXJlIG9iamVjdHMgaW4gV2ViR0wgZW5hYmxlZCBnYW1lcy4gVGhleSBkbyBub3Qgd29yayBpbiBDYW52YXMgbW9kZSBnYW1lcy5cbiAgICAqXG4gICAgKiBOb3RlIDI6IFlvdSBtdXN0IHVzZSBhIGJ1aWxkIG9mIFBoYXNlciB0aGF0IGluY2x1ZGVzIHRoZSBDcmVhdHVyZU1lc2hCb25lLmpzIHJ1bnRpbWUgYW5kIGdsLW1hdHJpeC5qcywgb3IgaGF2ZSB0aGVtXG4gICAgKiBsb2FkZWQgYmVmb3JlIHlvdXIgUGhhc2VyIGdhbWUgYm9vdHMuXG4gICAgKlxuICAgICogU2VlIHRoZSBQaGFzZXIgY3VzdG9tIGJ1aWxkIHByb2Nlc3MgZm9yIG1vcmUgZGV0YWlscy5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSNjcmVhdHVyZVxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt4PTBdIC0gVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgY3JlYXR1cmUuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgY3JlYXR1cmUgbWF5IGJlIGluLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt5PTBdIC0gVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgY3JlYXR1cmUuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgY3JlYXR1cmUgbWF5IGJlIGluLlxuICAgICogQHBhcmFtIHtzdHJpbmd8UElYSS5UZXh0dXJlfSBba2V5XSAtIFRoZSBpbWFnZSB1c2VkIGFzIGEgdGV4dHVyZSBieSB0aGlzIGNyZWF0dXJlIG9iamVjdCBkdXJpbmcgcmVuZGVyaW5nLiBJZiBhIHN0cmluZyBQaGFzZXIgd2lsbCBnZXQgZm9yIGFuIGVudHJ5IGluIHRoZSBJbWFnZSBDYWNoZS4gT3IgaXQgY2FuIGJlIGFuIGluc3RhbmNlIG9mIGEgUElYSS5UZXh0dXJlLlxuICAgICogQHBhcmFtIHtQaGFzZXIuR3JvdXB9IFtncm91cF0gLSBPcHRpb25hbCBHcm91cCB0byBhZGQgdGhlIG9iamVjdCB0by4gSWYgbm90IHNwZWNpZmllZCBpdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBEZWZhdWx0IExheWVyIGdyb3VwLlxuICAgICogQHJldHVybnMge1BoYXNlci5DcmVhdHVyZX0gVGhlIG5ld2x5IGNyZWF0ZWQgU3ByaXRlIG9iamVjdC5cbiAgICAqL1xuICAgIHB1YmxpYyBjcmVhdHVyZSh4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCBrZXk/OiBzdHJpbmcsIG1lc2g/OiBhbnksIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogYW55IHtcbiAgICAgICAgaWYgKGdyb3VwID09PSB1bmRlZmluZWQpIHsgZ3JvdXAgPSB0aGlzLnRhcmdldEdyb3VwOyB9XG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xuXG4gICAgICAgIHZhciBvYmogPSBuZXcgUGhhc2VyWydDcmVhdHVyZSddKHRoaXMuZ2FtZSwgeCwgeSwga2V5LCBtZXNoKTtcblxuICAgICAgICBncm91cC5hZGQob2JqKTtcblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQSBHcm91cCBpcyBhIGNvbnRhaW5lciBmb3IgZGlzcGxheSBvYmplY3RzIHRoYXQgYWxsb3dzIGZvciBmYXN0IHBvb2xpbmcsIHJlY3ljbGluZyBhbmQgY29sbGlzaW9uIGNoZWNrcy5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSNncm91cFxuICAgICogQHBhcmFtIHthbnl9IFtwYXJlbnRdIC0gVGhlIHBhcmVudCBHcm91cCBvciBEaXNwbGF5T2JqZWN0Q29udGFpbmVyIHRoYXQgd2lsbCBob2xkIHRoaXMgZ3JvdXAsIGlmIGFueS4gSWYgc2V0IHRvIG51bGwgdGhlIEdyb3VwIHdvbid0IGJlIGFkZGVkIHRvIHRoZSBkaXNwbGF5IGxpc3QuIElmIHVuZGVmaW5lZCBpdCB3aWxsIGJlIGFkZGVkIHRvIFdvcmxkIGJ5IGRlZmF1bHQuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW25hbWU9J2dyb3VwJ10gLSBBIG5hbWUgZm9yIHRoaXMgR3JvdXAuIE5vdCB1c2VkIGludGVybmFsbHkgYnV0IHVzZWZ1bCBmb3IgZGVidWdnaW5nLlxuICAgICogQHBhcmFtIHtib29sZWFufSBbYWRkVG9TdGFnZT1mYWxzZV0gLSBJZiBzZXQgdG8gdHJ1ZSB0aGlzIEdyb3VwIHdpbGwgYmUgYWRkZWQgZGlyZWN0bHkgdG8gdGhlIEdhbWUuU3RhZ2UgaW5zdGVhZCBvZiBHYW1lLldvcmxkLlxuICAgICogQHBhcmFtIHtib29sZWFufSBbZW5hYmxlQm9keT1mYWxzZV0gLSBJZiB0cnVlIGFsbCBTcHJpdGVzIGNyZWF0ZWQgd2l0aCBgR3JvdXAuY3JlYXRlYCBvciBgR3JvdXAuY3JlYXRlTXVsaXRwbGVgIHdpbGwgaGF2ZSBhIHBoeXNpY3MgYm9keSBjcmVhdGVkIG9uIHRoZW0uIENoYW5nZSB0aGUgYm9keSB0eXBlIHdpdGggcGh5c2ljc0JvZHlUeXBlLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IFtwaHlzaWNzQm9keVR5cGU9MF0gLSBJZiBlbmFibGVCb2R5IGlzIHRydWUgdGhpcyBpcyB0aGUgdHlwZSBvZiBwaHlzaWNzIGJvZHkgdGhhdCBpcyBjcmVhdGVkIG9uIG5ldyBTcHJpdGVzLiBQaGFzZXIuUGh5c2ljcy5BUkNBREUsIFBoYXNlci5QaHlzaWNzLlAyLCBQaGFzZXIuUGh5c2ljcy5OSU5KQSwgZXRjLlxuICAgICogQHJldHVybiB7UGhhc2VyLkdyb3VwfSBUaGUgbmV3bHkgY3JlYXRlZCBHcm91cC5cbiAgICAqL1xuICAgIHB1YmxpYyBncm91cChwYXJlbnQ/OiBhbnksIG5hbWU6IHN0cmluZyA9ICdncm91cCcsIGFkZFRvU3RhZ2U6IGJvb2xlYW4gPSBmYWxzZSwgZW5hYmxlQm9keTogYm9vbGVhbiA9IGZhbHNlLCBwaHlzaWNzQm9keVR5cGU6IG51bWJlciA9IDApIHtcbiAgICAgICAgaWYgKHBhcmVudCA9PT0gdW5kZWZpbmVkICYmIGFkZFRvU3RhZ2UgIT09IHRydWUpIHsgcGFyZW50ID0gdGhpcy50YXJnZXRHcm91cDsgfVxuICAgICAgICB0aGlzLnRhcmdldEdyb3VwID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIG5ldyBQaGFzZXIuR3JvdXAodGhpcy5nYW1lLCBwYXJlbnQsIG5hbWUsIGFkZFRvU3RhZ2UsIGVuYWJsZUJvZHksIHBoeXNpY3NCb2R5VHlwZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBBIEdyb3VwIGlzIGEgY29udGFpbmVyIGZvciBkaXNwbGF5IG9iamVjdHMgdGhhdCBhbGxvd3MgZm9yIGZhc3QgcG9vbGluZywgcmVjeWNsaW5nIGFuZCBjb2xsaXNpb24gY2hlY2tzLlxuICAgICpcbiAgICAqIEEgUGh5c2ljcyBHcm91cCBpcyB0aGUgc2FtZSBhcyBhbiBvcmRpbmFyeSBHcm91cCBleGNlcHQgdGhhdCBpcyBoYXMgZW5hYmxlQm9keSB0dXJuZWQgb24gYnkgZGVmYXVsdCwgc28gYW55IFNwcml0ZXMgaXQgY3JlYXRlc1xuICAgICogYXJlIGF1dG9tYXRpY2FsbHkgZ2l2ZW4gYSBwaHlzaWNzIGJvZHkuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkjcGh5c2ljc0dyb3VwXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3BoeXNpY3NCb2R5VHlwZT1QaGFzZXIuUGh5c2ljcy5BUkNBREVdIC0gSWYgZW5hYmxlQm9keSBpcyB0cnVlIHRoaXMgaXMgdGhlIHR5cGUgb2YgcGh5c2ljcyBib2R5IHRoYXQgaXMgY3JlYXRlZCBvbiBuZXcgU3ByaXRlcy4gUGhhc2VyLlBoeXNpY3MuQVJDQURFLCBQaGFzZXIuUGh5c2ljcy5QMiwgUGhhc2VyLlBoeXNpY3MuTklOSkEsIGV0Yy5cbiAgICAqIEBwYXJhbSB7YW55fSBbcGFyZW50XSAtIFRoZSBwYXJlbnQgR3JvdXAgb3IgRGlzcGxheU9iamVjdENvbnRhaW5lciB0aGF0IHdpbGwgaG9sZCB0aGlzIGdyb3VwLCBpZiBhbnkuIElmIHNldCB0byBudWxsIHRoZSBHcm91cCB3b24ndCBiZSBhZGRlZCB0byB0aGUgZGlzcGxheSBsaXN0LiBJZiB1bmRlZmluZWQgaXQgd2lsbCBiZSBhZGRlZCB0byBXb3JsZCBieSBkZWZhdWx0LlxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lPSdncm91cCddIC0gQSBuYW1lIGZvciB0aGlzIEdyb3VwLiBOb3QgdXNlZCBpbnRlcm5hbGx5IGJ1dCB1c2VmdWwgZm9yIGRlYnVnZ2luZy5cbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2FkZFRvU3RhZ2U9ZmFsc2VdIC0gSWYgc2V0IHRvIHRydWUgdGhpcyBHcm91cCB3aWxsIGJlIGFkZGVkIGRpcmVjdGx5IHRvIHRoZSBHYW1lLlN0YWdlIGluc3RlYWQgb2YgR2FtZS5Xb3JsZC5cbiAgICAqIEByZXR1cm4ge1BoYXNlci5Hcm91cH0gVGhlIG5ld2x5IGNyZWF0ZWQgR3JvdXAuXG4gICAgKi9cbiAgICBwdWJsaWMgcGh5c2ljc0dyb3VwKHBoeXNpY3NCb2R5VHlwZTogbnVtYmVyID0gMCwgcGFyZW50PzogYW55LCBuYW1lOiBzdHJpbmcgPSAnZ3JvdXAnLCBhZGRUb1N0YWdlOiBib29sZWFuID0gZmFsc2UpOiBQaGFzZXIuR3JvdXAge1xuICAgICAgICBpZiAocGFyZW50ID09PSB1bmRlZmluZWQpIHsgcGFyZW50ID0gdGhpcy50YXJnZXRHcm91cDsgfVxuICAgICAgICB0aGlzLnRhcmdldEdyb3VwID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIG5ldyBQaGFzZXIuR3JvdXAodGhpcy5nYW1lLCBwYXJlbnQsIG5hbWUsIGFkZFRvU3RhZ2UsIHRydWUsIHBoeXNpY3NCb2R5VHlwZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBBIFNwcml0ZUJhdGNoIGlzIGEgcmVhbGx5IGZhc3QgdmVyc2lvbiBvZiBhIFBoYXNlciBHcm91cCBidWlsdCBzb2xlbHkgZm9yIHNwZWVkLlxuICAgICogVXNlIHdoZW4geW91IG5lZWQgYSBsb3Qgb2Ygc3ByaXRlcyBvciBwYXJ0aWNsZXMgYWxsIHNoYXJpbmcgdGhlIHNhbWUgdGV4dHVyZS5cbiAgICAqIFRoZSBzcGVlZCBnYWlucyBhcmUgc3BlY2lmaWNhbGx5IGZvciBXZWJHTC4gSW4gQ2FudmFzIG1vZGUgeW91IHdvbid0IHNlZSBhbnkgcmVhbCBkaWZmZXJlbmNlLlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5I3Nwcml0ZUJhdGNoXG4gICAgKiBAcGFyYW0ge1BoYXNlci5Hcm91cHxudWxsfSBwYXJlbnQgLSBUaGUgcGFyZW50IEdyb3VwIHRoYXQgd2lsbCBob2xkIHRoaXMgU3ByaXRlIEJhdGNoLiBTZXQgdG8gYHVuZGVmaW5lZGAgb3IgYG51bGxgIHRvIGFkZCBkaXJlY3RseSB0byBnYW1lLndvcmxkLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lPSdncm91cCddIC0gQSBuYW1lIGZvciB0aGlzIFNwcml0ZSBCYXRjaC4gTm90IHVzZWQgaW50ZXJuYWxseSBidXQgdXNlZnVsIGZvciBkZWJ1Z2dpbmcuXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFthZGRUb1N0YWdlPWZhbHNlXSAtIElmIHNldCB0byB0cnVlIHRoaXMgU3ByaXRlIEJhdGNoIHdpbGwgYmUgYWRkZWQgZGlyZWN0bHkgdG8gdGhlIEdhbWUuU3RhZ2UgaW5zdGVhZCBvZiB0aGUgcGFyZW50LlxuICAgICogQHJldHVybiB7UGhhc2VyLlNwcml0ZUJhdGNofSBUaGUgbmV3bHkgY3JlYXRlZCBTcHJpdGUgQmF0Y2guXG4gICAgKi9cbiAgICBwdWJsaWMgc3ByaXRlQmF0Y2gocGFyZW50PzogYW55LCBuYW1lOiBzdHJpbmcgPSBcInNwcml0ZUJhdGNoXCIsIGFkZFRvU3RhZ2U6IGJvb2xlYW4gPSBmYWxzZSk6IFBoYXNlci5TcHJpdGVCYXRjaCB7XG4gICAgICAgIGlmIChwYXJlbnQgPT09IHVuZGVmaW5lZCkgeyBwYXJlbnQgPSB0aGlzLnRhcmdldEdyb3VwIH1cbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBuZXcgUGhhc2VyLlNwcml0ZUJhdGNoKHRoaXMuZ2FtZSwgcGFyZW50LCBuYW1lLCBhZGRUb1N0YWdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBUaWxlU3ByaXRlIG9iamVjdC5cbiAgICpcbiAgICogQG1ldGhvZCBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkjdGlsZVNwcml0ZVxuICAgKiBAcGFyYW0ge251bWJlcn0geCAtIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIFRpbGVTcHJpdGUuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgVGlsZVNwcml0ZSBtYXkgYmUgaW4uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5IC0gVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgVGlsZVNwcml0ZS4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyBUaWxlU3ByaXRlIG1heSBiZSBpbi5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIC0gVGhlIHdpZHRoIG9mIHRoZSBUaWxlU3ByaXRlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IC0gVGhlIGhlaWdodCBvZiB0aGUgVGlsZVNwcml0ZS5cbiAgICogQHBhcmFtIHtzdHJpbmd8UGhhc2VyLlJlbmRlclRleHR1cmV8UGhhc2VyLkJpdG1hcERhdGF8UGhhc2VyLlZpZGVvfFBJWEkuVGV4dHVyZX0ga2V5IC0gVGhlIGltYWdlIHVzZWQgYXMgYSB0ZXh0dXJlIGJ5IHRoaXMgZGlzcGxheSBvYmplY3QgZHVyaW5nIHJlbmRlcmluZy4gSWYgYSBzdHJpbmcgUGhhc2VyIHdpbGwgZ2V0IGZvciBhbiBlbnRyeSBpbiB0aGUgSW1hZ2UgQ2FjaGUuIE9yIGl0IGNhbiBiZSBhbiBpbnN0YW5jZSBvZiBhIFJlbmRlclRleHR1cmUsIEJpdG1hcERhdGEsIFZpZGVvIG9yIFBJWEkuVGV4dHVyZS5cbiAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbZnJhbWVdIC0gSWYgYSBUZXh0dXJlIEF0bGFzIG9yIFNwcml0ZSBTaGVldCBpcyB1c2VkIHRoaXMgYWxsb3dzIHlvdSB0byBzcGVjaWZ5IHRoZSBmcmFtZSB0byBiZSB1c2VkLiBVc2UgZWl0aGVyIGFuIGludGVnZXIgZm9yIGEgRnJhbWUgSUQgb3IgYSBzdHJpbmcgZm9yIGEgZnJhbWUgbmFtZS5cbiAgICogQHBhcmFtIHtQaGFzZXIuR3JvdXB9IFtncm91cF0gLSBPcHRpb25hbCBHcm91cCB0byBhZGQgdGhlIG9iamVjdCB0by4gSWYgbm90IHNwZWNpZmllZCBpdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBEZWZhdWx0IExheWVyIGdyb3VwLlxuICAgKiBAcmV0dXJuIHtQaGFzZXIuVGlsZVNwcml0ZX0gVGhlIG5ld2x5IGNyZWF0ZWQgVGlsZVNwcml0ZSBvYmplY3QuXG4gICAqL1xuICAgIHB1YmxpYyB0aWxlU3ByaXRlKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIHdpZHRoOiBudW1iZXIgPSAwLCBoZWlnaHQ6IG51bWJlciA9IDAsIGtleT86IHN0cmluZywgZnJhbWU/OiBzdHJpbmcgfCBudW1iZXIsIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogUGhhc2VyLlRpbGVTcHJpdGUge1xuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCkgeyBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7IH1cbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBncm91cC5hZGQobmV3IFBoYXNlci5UaWxlU3ByaXRlKHRoaXMuZ2FtZSwgeCwgeSwgd2lkdGgsIGhlaWdodCwga2V5LCBmcmFtZSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IFJvcGUgb2JqZWN0LlxuICAgKlxuICAgKiBFeGFtcGxlIHVzYWdlOiBodHRwczovL2dpdGh1Yi5jb20vY29kZXZpbnNreS9waGFzZXItcm9wZS1kZW1vL2Jsb2IvbWFzdGVyL2Rpc3QvZGVtby5qc1xuICAgKlxuICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSNyb3BlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbeD0wXSAtIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIFJvcGUuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgcm9wZSBtYXkgYmUgaW4uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbeT0wXSAtIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIFJvcGUuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgcm9wZSBtYXkgYmUgaW4uXG4gICAqIEBwYXJhbSB7c3RyaW5nfFBoYXNlci5SZW5kZXJUZXh0dXJlfFBoYXNlci5CaXRtYXBEYXRhfFBoYXNlci5WaWRlb3xQSVhJLlRleHR1cmV9IFtrZXldIC0gVGhlIGltYWdlIHVzZWQgYXMgYSB0ZXh0dXJlIGJ5IHRoaXMgZGlzcGxheSBvYmplY3QgZHVyaW5nIHJlbmRlcmluZy4gSWYgYSBzdHJpbmcgUGhhc2VyIHdpbGwgZ2V0IGZvciBhbiBlbnRyeSBpbiB0aGUgSW1hZ2UgQ2FjaGUuIE9yIGl0IGNhbiBiZSBhbiBpbnN0YW5jZSBvZiBhIFJlbmRlclRleHR1cmUsIEJpdG1hcERhdGEsIFZpZGVvIG9yIFBJWEkuVGV4dHVyZS5cbiAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbZnJhbWVdIC0gSWYgYSBUZXh0dXJlIEF0bGFzIG9yIFNwcml0ZSBTaGVldCBpcyB1c2VkIHRoaXMgYWxsb3dzIHlvdSB0byBzcGVjaWZ5IHRoZSBmcmFtZSB0byBiZSB1c2VkLiBVc2UgZWl0aGVyIGFuIGludGVnZXIgZm9yIGEgRnJhbWUgSUQgb3IgYSBzdHJpbmcgZm9yIGEgZnJhbWUgbmFtZS5cbiAgICogQHBhcmFtIHtBcnJheX0gcG9pbnRzIC0gQW4gYXJyYXkgb2Yge1BoYXNlci5Qb2ludH0uXG4gICAqIEBwYXJhbSB7UGhhc2VyLkdyb3VwfSBbZ3JvdXBdIC0gT3B0aW9uYWwgR3JvdXAgdG8gYWRkIHRoZSBvYmplY3QgdG8uIElmIG5vdCBzcGVjaWZpZWQgaXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgRGVmYXVsdCBMYXllciBncm91cC5cbiAgICogQHJldHVybiB7UGhhc2VyLlJvcGV9IFRoZSBuZXdseSBjcmVhdGVkIFJvcGUgb2JqZWN0LlxuICAgKi9cbiAgICBwdWJsaWMgcm9wZSh4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCBrZXk/OiBzdHJpbmcsIGZyYW1lPzogc3RyaW5nIHwgbnVtYmVyLCBwb2ludHM/OiBQaGFzZXIuUG9pbnRbXSwgZ3JvdXA/OiBQaGFzZXIuR3JvdXApOiBQaGFzZXIuUm9wZSB7XG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy50YXJnZXRHcm91cDsgfVxuICAgICAgICB0aGlzLnRhcmdldEdyb3VwID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGdyb3VwLmFkZChuZXcgUGhhc2VyLlJvcGUodGhpcy5nYW1lLCB4LCB5LCBrZXksIGZyYW1lLCBwb2ludHMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIENyZWF0ZXMgYSBuZXcgVGV4dCBvYmplY3QuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkjdGV4dFxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt4PTBdIC0gVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgVGV4dC4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyB0ZXh0IG1heSBiZSBpbi5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeT0wXSAtIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIFRleHQuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgdGV4dCBtYXkgYmUgaW4uXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW3RleHQ9JyddIC0gVGhlIHRleHQgc3RyaW5nIHRoYXQgd2lsbCBiZSBkaXNwbGF5ZWQuXG4gICAgKiBAcGFyYW0ge29iamVjdH0gW3N0eWxlXSAtIFRoZSBzdHlsZSBvYmplY3QgY29udGFpbmluZyBzdHlsZSBhdHRyaWJ1dGVzIGxpa2UgZm9udCwgZm9udCBzaXplICwgZXRjLlxuICAgICogQHBhcmFtIHtQaGFzZXIuR3JvdXB9IFtncm91cF0gLSBPcHRpb25hbCBHcm91cCB0byBhZGQgdGhlIG9iamVjdCB0by4gSWYgbm90IHNwZWNpZmllZCBpdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBEZWZhdWx0IExheWVyIGdyb3VwLlxuICAgICogQHJldHVybiB7UGhhc2VyLlRleHR9IFRoZSBuZXdseSBjcmVhdGVkIHRleHQgb2JqZWN0LlxuICAgICovXG4gICAgcHVibGljIHRleHQoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgdGV4dDogc3RyaW5nID0gJycsIHN0eWxlPzogUGhhc2VyLlBoYXNlclRleHRTdHlsZSwgZ3JvdXA/OiBQaGFzZXIuR3JvdXApOiBQaGFzZXIuVGV4dCB7XG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy50YXJnZXRHcm91cDsgfVxuICAgICAgICB0aGlzLnRhcmdldEdyb3VwID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGdyb3VwLmFkZChuZXcgUGhhc2VyLlRleHQodGhpcy5nYW1lLCB4LCB5LCB0ZXh0LCBzdHlsZSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQ3JlYXRlcyBhIG5ldyBCdXR0b24gb2JqZWN0LlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5I2J1dHRvblxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt4PTBdIC0gVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgQnV0dG9uLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIGJ1dHRvbiBtYXkgYmUgaW4uXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3k9MF0gLSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBCdXR0b24uIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgYnV0dG9uIG1heSBiZSBpbi5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBba2V5XSAtIFRoZSBpbWFnZSBrZXkgYXMgZGVmaW5lZCBpbiB0aGUgR2FtZS5DYWNoZSB0byB1c2UgYXMgdGhlIHRleHR1cmUgZm9yIHRoaXMgYnV0dG9uLlxuICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW2NhbGxiYWNrXSAtIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhpcyBidXR0b24gaXMgcHJlc3NlZFxuICAgICogQHBhcmFtIHtvYmplY3R9IFtjYWxsYmFja0NvbnRleHRdIC0gVGhlIGNvbnRleHQgaW4gd2hpY2ggdGhlIGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkICh1c3VhbGx5ICd0aGlzJylcbiAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW292ZXJGcmFtZV0gLSBUaGlzIGlzIHRoZSBmcmFtZSBvciBmcmFtZU5hbWUgdGhhdCB3aWxsIGJlIHNldCB3aGVuIHRoaXMgYnV0dG9uIGlzIGluIGFuIG92ZXIgc3RhdGUuIEdpdmUgZWl0aGVyIGEgbnVtYmVyIHRvIHVzZSBhIGZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtvdXRGcmFtZV0gLSBUaGlzIGlzIHRoZSBmcmFtZSBvciBmcmFtZU5hbWUgdGhhdCB3aWxsIGJlIHNldCB3aGVuIHRoaXMgYnV0dG9uIGlzIGluIGFuIG91dCBzdGF0ZS4gR2l2ZSBlaXRoZXIgYSBudW1iZXIgdG8gdXNlIGEgZnJhbWUgSUQgb3IgYSBzdHJpbmcgZm9yIGEgZnJhbWUgbmFtZS5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW2Rvd25GcmFtZV0gLSBUaGlzIGlzIHRoZSBmcmFtZSBvciBmcmFtZU5hbWUgdGhhdCB3aWxsIGJlIHNldCB3aGVuIHRoaXMgYnV0dG9uIGlzIGluIGEgZG93biBzdGF0ZS4gR2l2ZSBlaXRoZXIgYSBudW1iZXIgdG8gdXNlIGEgZnJhbWUgSUQgb3IgYSBzdHJpbmcgZm9yIGEgZnJhbWUgbmFtZS5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW3VwRnJhbWVdIC0gVGhpcyBpcyB0aGUgZnJhbWUgb3IgZnJhbWVOYW1lIHRoYXQgd2lsbCBiZSBzZXQgd2hlbiB0aGlzIGJ1dHRvbiBpcyBpbiBhbiB1cCBzdGF0ZS4gR2l2ZSBlaXRoZXIgYSBudW1iZXIgdG8gdXNlIGEgZnJhbWUgSUQgb3IgYSBzdHJpbmcgZm9yIGEgZnJhbWUgbmFtZS5cbiAgICAqIEBwYXJhbSB7UGhhc2VyLkdyb3VwfSBbZ3JvdXBdIC0gT3B0aW9uYWwgR3JvdXAgdG8gYWRkIHRoZSBvYmplY3QgdG8uIElmIG5vdCBzcGVjaWZpZWQgaXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgRGVmYXVsdCBMYXllciBncm91cC5cbiAgICAqIEByZXR1cm4ge1BoYXNlci5CdXR0b259IFRoZSBuZXdseSBjcmVhdGVkIEJ1dHRvbiBvYmplY3QuXG4gICAgKi9cbiAgICBwdWJsaWMgYnV0dG9uKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIGtleT86IHN0cmluZywgY2FsbGJhY2s/OiBGdW5jdGlvbiwgY2FsbGJhY2tDb250ZXh0PzogT2JqZWN0LCBvdmVyRnJhbWU/OiBzdHJpbmcgfCBudW1iZXIsIG91dEZyYW1lPzogc3RyaW5nIHwgbnVtYmVyLCBkb3duRnJhbWU/OiBzdHJpbmcgfCBudW1iZXIsIHVwRnJhbWU/OiBzdHJpbmcgfCBudW1iZXIsIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogUGhhc2VyLkJ1dHRvbiB7XG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy50YXJnZXRHcm91cDsgfVxuICAgICAgICB0aGlzLnRhcmdldEdyb3VwID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGdyb3VwLmFkZChuZXcgUGhhc2VyLkJ1dHRvbih0aGlzLmdhbWUsIHgsIHksIGtleSwgY2FsbGJhY2ssIGNhbGxiYWNrQ29udGV4dCwgb3ZlckZyYW1lLCBvdXRGcmFtZSwgZG93bkZyYW1lLCB1cEZyYW1lKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBDcmVhdGVzIGEgbmV3IEdyYXBoaWNzIG9iamVjdC5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSNncmFwaGljc1xuICAgICogQHBhcmFtIHtudW1iZXJ9IFt4PTBdIC0gVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgR3JhcGhpYy4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyBvYmplY3QgbWF5IGJlIGluLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt5PTBdIC0gVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgR3JhcGhpYy4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyBvYmplY3QgbWF5IGJlIGluLlxuICAgICogQHBhcmFtIHtQaGFzZXIuR3JvdXB9IFtncm91cF0gLSBPcHRpb25hbCBHcm91cCB0byBhZGQgdGhlIG9iamVjdCB0by4gSWYgbm90IHNwZWNpZmllZCBpdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBXb3JsZCBncm91cC5cbiAgICAqIEByZXR1cm4ge1BoYXNlci5HcmFwaGljc30gVGhlIG5ld2x5IGNyZWF0ZWQgZ3JhcGhpY3Mgb2JqZWN0LlxuICAgICovXG4gICAgcHVibGljIGdyYXBoaWNzKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogUGhhc2VyLkdyYXBoaWNzIHtcbiAgICAgICAgaWYgKGdyb3VwID09PSB1bmRlZmluZWQpIHsgZ3JvdXAgPSB0aGlzLndvcmxkOyB9XG4gICAgICAgIC8qKipcbiAgICAgICAgICogQ29tbWVudGVkIHRoaXMgb3V0IC0gc2luY2UgZ3JhcGhpY3MgYXJlIGJ5IGRlZmF1bHQgYWRkZWQgZGlyZWN0bHkgb24gdGhlIGdhbWUud29ybGQsIHdlIHNob3VsZG4ndCByZXNldCB0aGlzLnRhcmdldEdyb3VwXG4gICAgICAgICAqIEl0IGNvdWxkIGNhdXNlIG1ham9yIHByb2JsZW1zIGlmIHVzaW5nIGRpam9uL3V0aWxzIFRleHR1cmVzIGluc3RhbmNlcyBhcyBhbiBpbWFnZSB0ZXh0dXJlLCBmb3IgaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIC8vdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBncm91cC5hZGQobmV3IFBoYXNlci5HcmFwaGljcyh0aGlzLmdhbWUsIHgsIHkpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIENyZWF0ZSBhIG5ldyBCaXRtYXBUZXh0IG9iamVjdC5cbiAgICAqXG4gICAgKiBCaXRtYXBUZXh0IG9iamVjdHMgd29yayBieSB0YWtpbmcgYSB0ZXh0dXJlIGZpbGUgYW5kIGFuIFhNTCBmaWxlIHRoYXQgZGVzY3JpYmVzIHRoZSBmb250IHN0cnVjdHVyZS5cbiAgICAqIEl0IHRoZW4gZ2VuZXJhdGVzIGEgbmV3IFNwcml0ZSBvYmplY3QgZm9yIGVhY2ggbGV0dGVyIG9mIHRoZSB0ZXh0LCBwcm9wb3J0aW9uYWxseSBzcGFjZWQgb3V0IGFuZCBhbGlnbmVkIHRvXG4gICAgKiBtYXRjaCB0aGUgZm9udCBzdHJ1Y3R1cmUuXG4gICAgKlxuICAgICogQml0bWFwVGV4dCBvYmplY3RzIGFyZSBsZXNzIGZsZXhpYmxlIHRoYW4gVGV4dCBvYmplY3RzLCBpbiB0aGF0IHRoZXkgaGF2ZSBsZXNzIGZlYXR1cmVzIHN1Y2ggYXMgc2hhZG93cywgZmlsbHMgYW5kIHRoZSBhYmlsaXR5XG4gICAgKiB0byB1c2UgV2ViIEZvbnRzLiBIb3dldmVyIHlvdSB0cmFkZSB0aGlzIGZsZXhpYmlsaXR5IGZvciBwdXJlIHJlbmRlcmluZyBzcGVlZC4gWW91IGNhbiBhbHNvIGNyZWF0ZSB2aXN1YWxseSBjb21wZWxsaW5nIEJpdG1hcFRleHRzIGJ5XG4gICAgKiBwcm9jZXNzaW5nIHRoZSBmb250IHRleHR1cmUgaW4gYW4gaW1hZ2UgZWRpdG9yIGZpcnN0LCBhcHBseWluZyBmaWxscyBhbmQgYW55IG90aGVyIGVmZmVjdHMgcmVxdWlyZWQuXG4gICAgKlxuICAgICogVG8gY3JlYXRlIG11bHRpLWxpbmUgdGV4dCBpbnNlcnQgXFxyLCBcXG4gb3IgXFxyXFxuIGVzY2FwZSBjb2RlcyBpbnRvIHRoZSB0ZXh0IHN0cmluZy5cbiAgICAqXG4gICAgKiBUbyBjcmVhdGUgYSBCaXRtYXBUZXh0IGRhdGEgZmlsZXMgeW91IGNhbiB1c2U6XG4gICAgKlxuICAgICogQk1Gb250IChXaW5kb3dzLCBmcmVlKTogaHR0cDovL3d3dy5hbmdlbGNvZGUuY29tL3Byb2R1Y3RzL2JtZm9udC9cbiAgICAqIEdseXBoIERlc2lnbmVyIChPUyBYLCBjb21tZXJjaWFsKTogaHR0cDovL3d3dy43MXNxdWFyZWQuY29tL2VuL2dseXBoZGVzaWduZXJcbiAgICAqIExpdHRlcmEgKFdlYi1iYXNlZCwgZnJlZSk6IGh0dHA6Ly9rdmF6YXJzLmNvbS9saXR0ZXJhL1xuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5I2JpdG1hcFRleHRcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gWCBjb29yZGluYXRlIHRvIGRpc3BsYXkgdGhlIEJpdG1hcFRleHQgb2JqZWN0IGF0LlxuICAgICogQHBhcmFtIHtudW1iZXJ9IHkgLSBZIGNvb3JkaW5hdGUgdG8gZGlzcGxheSB0aGUgQml0bWFwVGV4dCBvYmplY3QgYXQuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gZm9udCAtIFRoZSBrZXkgb2YgdGhlIEJpdG1hcFRleHQgYXMgc3RvcmVkIGluIFBoYXNlci5DYWNoZS5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbdGV4dD0nJ10gLSBUaGUgdGV4dCB0aGF0IHdpbGwgYmUgcmVuZGVyZWQuIFRoaXMgY2FuIGFsc28gYmUgc2V0IGxhdGVyIHZpYSBCaXRtYXBUZXh0LnRleHQuXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3NpemU9MzJdIC0gVGhlIHNpemUgdGhlIGZvbnQgd2lsbCBiZSByZW5kZXJlZCBhdCBpbiBwaXhlbHMuXG4gICAgKiBAcGFyYW0ge1BoYXNlci5Hcm91cH0gW2dyb3VwXSAtIE9wdGlvbmFsIEdyb3VwIHRvIGFkZCB0aGUgb2JqZWN0IHRvLiBJZiBub3Qgc3BlY2lmaWVkIGl0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIFdvcmxkIGdyb3VwLlxuICAgICogQHJldHVybiB7UGhhc2VyLkJpdG1hcFRleHR9IFRoZSBuZXdseSBjcmVhdGVkIGJpdG1hcFRleHQgb2JqZWN0LlxuICAgICovXG4gICAgcHVibGljIGJpdG1hcFRleHQoeD86IG51bWJlciwgeT86IG51bWJlciwgZm9udD86IHN0cmluZywgdGV4dDogc3RyaW5nID0gXCJcIiwgc2l6ZTogbnVtYmVyID0gMzIsIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogUGhhc2VyLkJpdG1hcFRleHQge1xuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCkgeyBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7IH1cbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBncm91cC5hZGQobmV3IFBoYXNlci5CaXRtYXBUZXh0KHRoaXMuZ2FtZSwgeCwgeSwgZm9udCwgdGV4dCwgc2l6ZSkpO1xuICAgIH1cblxuICAgIC8vIGRpam9uIHNwZWNpZmljIGRpc3BsYXkgb2JqZWN0c1xuICAgIHB1YmxpYyBkU3ByaXRlKHg/OiBudW1iZXIsIHk/OiBudW1iZXIsIGtleT86IHN0cmluZyB8IFBoYXNlci5SZW5kZXJUZXh0dXJlIHwgUGhhc2VyLkJpdG1hcERhdGEgfCBQSVhJLlRleHR1cmUsIGZyYW1lPzogc3RyaW5nIHwgbnVtYmVyLCBuYW1lPzogc3RyaW5nLCBjb21wb25lbnRzPzogQ29tcG9uZW50W10sIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogU3ByaXRlIHtcbiAgICAgICAgaWYgKGdyb3VwID09PSB1bmRlZmluZWQpIHsgZ3JvdXAgPSB0aGlzLnRhcmdldEdyb3VwOyB9XG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBTcHJpdGUoeCwgeSwga2V5LCBmcmFtZSwgbmFtZSwgY29tcG9uZW50cykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkR3JvdXAoeD86IG51bWJlciwgeT86IG51bWJlciwgbmFtZT86IHN0cmluZywgYWRkVG9TdGFnZT86IGJvb2xlYW4sIGNvbXBvbmVudHM/OiBDb21wb25lbnRbXSwgZW5hYmxlQm9keT86IGJvb2xlYW4sIHBoeXNpY3NCb2R5VHlwZT86IG51bWJlciwgZ3JvdXA/OiBQaGFzZXIuR3JvdXApOiBHcm91cCB7XG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkICYmIGFkZFRvU3RhZ2UgIT09IHRydWUpIHtcbiAgICAgICAgICAgIGdyb3VwID0gdGhpcy50YXJnZXRHcm91cDtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIGdyb3VwLmFkZChuZXcgR3JvdXAoeCwgeSwgbmFtZSwgYWRkVG9TdGFnZSwgY29tcG9uZW50cywgZW5hYmxlQm9keSwgcGh5c2ljc0JvZHlUeXBlKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IEdyb3VwKHgsIHksIG5hbWUsIGFkZFRvU3RhZ2UsIGNvbXBvbmVudHMsIGVuYWJsZUJvZHksIHBoeXNpY3NCb2R5VHlwZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRUZXh0KHg6IG51bWJlciwgeTogbnVtYmVyLCB0ZXh0Pzogc3RyaW5nLCBmb250TmFtZT86IHN0cmluZywgZm9udFNpemU/OiBudW1iZXIsIGZvbnRDb2xvcj86IHN0cmluZywgZm9udEFsaWduPzogc3RyaW5nLCB3b3JkV3JhcD86IGJvb2xlYW4sIHdpZHRoPzogbnVtYmVyLCBsaW5lU3BhY2luZz86IG51bWJlciwgc2V0dGluZ3M/OiBPYmplY3QsIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogVGV4dCB7XG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy50YXJnZXRHcm91cDsgfVxuICAgICAgICB0aGlzLnRhcmdldEdyb3VwID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGdyb3VwLmFkZChuZXcgVGV4dCh4LCB5LCB0ZXh0LCBmb250TmFtZSwgZm9udFNpemUsIGZvbnRDb2xvciwgZm9udEFsaWduLCB3b3JkV3JhcCwgd2lkdGgsIGxpbmVTcGFjaW5nLCBzZXR0aW5ncykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzcGluZShhc3NldE5hbWU6IHN0cmluZyA9ICcnLCB4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCBncm91cD86IFBoYXNlci5Hcm91cCkge1xuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCkgeyBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7IH1cbiAgICAgICAgdGhpcy50YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBncm91cC5hZGQobmV3IFNwaW5lKGFzc2V0TmFtZSwgeCwgeSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXREZWZhdWx0TGF5ZXIodmFsdWU6IFBoYXNlci5Hcm91cCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNBVVRJT046IENoYW5naW5nIHRoZSBkZWZhdWx0IGxheWVyIHdpbGwgY2hhbmdlIHRoZSB0YXJnZXQgZ3JvdXAgZm9yIC5hZGRcIik7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRMYXllciA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZGVmYXVsdExheWVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdExheWVyO1xuICAgIH1cbiAgICAvLyBnZXR0ZXIgLyBzZXR0ZXJcbiAgICBwdWJsaWMgc2V0IHRhcmdldEdyb3VwKHZhbHVlOiBQaGFzZXIuR3JvdXApIHtcbiAgICAgICAgdGhpcy5fdGFyZ2V0R3JvdXAgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHRhcmdldEdyb3VwKCk6IFBoYXNlci5Hcm91cCB7XG4gICAgICAgIHJldHVybiB0aGlzLl90YXJnZXRHcm91cCB8fCB0aGlzLl9kZWZhdWx0TGF5ZXI7XG4gICAgfVxufVxuXG4vKipcbiAqIFNlcXVlbmNlTWFuYWdlclxuICovXG5leHBvcnQgY2xhc3MgU2VxdWVuY2VNYW5hZ2VyIHtcbiAgICBwdWJsaWMgZ2FtZTogR2FtZTtcblxuICAgIHByaXZhdGUgX2RlZmF1bHRJbnRlcnZhbCA9IDIwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZTtcbiAgICB9XG5cbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICBwcml2YXRlIF9leGVjdXRlTWV0aG9kKHNlcXVlbmNlOiBBcnJheTxGdW5jdGlvbj4sIGNvbnRleHQ6IE9iamVjdCwgY2FsbGJhY2s6IEZ1bmN0aW9uLCBjYWxsYmFja0NvbnRleHQ6IE9iamVjdCkge1xuICAgICAgICB2YXIgZnVuYyA9IHNlcXVlbmNlLnNoaWZ0KCk7XG4gICAgICAgIGlmICh0eXBlb2YgZnVuYyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnRleHQgIT09ICd1bmRlZmluZWQnICYmIGNvbnRleHQpIHtcbiAgICAgICAgICAgIGZ1bmMuY2FsbChjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZXF1ZW5jZS5sZW5ndGggPT09IDAgJiYgY2FsbGJhY2sgJiYgY2FsbGJhY2tDb250ZXh0KSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKGNhbGxiYWNrQ29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuICAgIHB1YmxpYyBydW4oc2VxdWVuY2U6IEFycmF5PEZ1bmN0aW9uPiwgY29udGV4dDogT2JqZWN0LCBpbnRlcnZhbDogbnVtYmVyLCBjb21wbGV0ZUNhbGxiYWNrOiBGdW5jdGlvbiwgY29tcGxldGVDYWxsYmFja0NvbnRleHQ6IE9iamVjdCkge1xuICAgICAgICBpZiAodHlwZW9mIGNvbnRleHQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvbnRleHQgbXVzdCBiZSBwcm92aWRlZCBmb3IgdGhlIHNlcXVlbmNlIG1ldGhvZHMnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgaW50ZXJ2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpbnRlcnZhbCA9IHRoaXMuX2RlZmF1bHRJbnRlcnZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZXF1ZW5jZS5sZW5ndGggPT09IDAgJiYgdHlwZW9mIGNvbXBsZXRlQ2FsbGJhY2sgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb21wbGV0ZUNhbGxiYWNrQ29udGV4dCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbXBsZXRlQ2FsbGJhY2suY2FsbChjb21wbGV0ZUNhbGxiYWNrQ29udGV4dCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW50ZXJ2YWwgPT09IDApIHtcbiAgICAgICAgICAgIHdoaWxlIChzZXF1ZW5jZS5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgIHRoaXMuX2V4ZWN1dGVNZXRob2Qoc2VxdWVuY2UsIGNvbnRleHQsIHR5cGVvZiBjb21wbGV0ZUNhbGxiYWNrID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBjb21wbGV0ZUNhbGxiYWNrLCB0eXBlb2YgY29tcGxldGVDYWxsYmFja0NvbnRleHQgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IGNvbXBsZXRlQ2FsbGJhY2tDb250ZXh0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5yZXBlYXQoaW50ZXJ2YWwsIHNlcXVlbmNlLmxlbmd0aCwgdGhpcy5fZXhlY3V0ZU1ldGhvZCwgdGhpcywgc2VxdWVuY2UsIGNvbnRleHQsIHR5cGVvZiBjb21wbGV0ZUNhbGxiYWNrID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBjb21wbGV0ZUNhbGxiYWNrLCB0eXBlb2YgY29tcGxldGVDYWxsYmFja0NvbnRleHQgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IGNvbXBsZXRlQ2FsbGJhY2tDb250ZXh0KTtcbiAgICB9XG59XG5cblxuLyoqXG4gKiBTdGF0ZVxuICovXG5cbmV4cG9ydCBjbGFzcyBTdGF0ZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG4gICAgcHJvdGVjdGVkIF9hdWRpbzogUGhhc2VyLlNvdW5kW10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgX21lZGlhdG9yOiBNZWRpYXRvciA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgLy8gUGhhc2VyLlN0YXRlIG92ZXJyaWRlc1xuICAgIHB1YmxpYyBpbml0KCk6IHZvaWQge1xuXG4gICAgfVxuXG4gICAgcHVibGljIHByZWxvYWQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnByZWxvYWRJRClcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hc3NldC5sb2FkQXNzZXRzKHRoaXMucHJlbG9hZElEKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZ2FtZS5hc3NldC5hbGxTb3VuZHNEZWNvZGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hc3NldC5vbkxvYWRDb21wbGV0ZUFuZEF1ZGlvRGVjb2RlZC5hZGRPbmNlKHRoaXMuY3JlYXRlLCB0aGlzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJ1aWxkSW50ZXJmYWNlKCk7XG4gICAgICAgIHRoaXMuYWZ0ZXJCdWlsZEludGVyZmFjZSgpO1xuICAgICAgICB0aGlzLnN0YXJ0QnVpbGQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2h1dGRvd24ocmVtb3ZlTWVkaWF0b3I6IGJvb2xlYW4gPSB0cnVlLCByZW1vdmVBdWRpbzogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICAgICAgaWYgKHJlbW92ZU1lZGlhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZU1lZGlhdG9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbW92ZUF1ZGlvKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUF1ZGlvKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci5zaHV0ZG93bigpO1xuICAgIH1cblxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgcHVibGljIGxpc3RCdWlsZFNlcXVlbmNlKCk6IEZ1bmN0aW9uW10ge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcHVibGljIGJ1aWxkSW50ZXJmYWNlKCk6IHZvaWQgeyB9XG5cbiAgICBwdWJsaWMgYWZ0ZXJCdWlsZEludGVyZmFjZSgpOiB2b2lkIHsgfVxuXG4gICAgcHVibGljIHN0YXJ0QnVpbGQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2FtZS5zZXF1ZW5jZS5ydW4odGhpcy5saXN0QnVpbGRTZXF1ZW5jZSgpLCB0aGlzLCB0aGlzLmJ1aWxkSW50ZXJ2YWwsIHRoaXMucHJlQWZ0ZXJCdWlsZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHByZUFmdGVyQnVpbGQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5nYW1lLnRyYW5zaXRpb24gPT09ICd1bmRlZmluZWQnIHx8ICF0aGlzLmdhbWUudHJhbnNpdGlvbi5jYW5UcmFuc2l0aW9uT3V0KCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJCdWlsZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS50cmFuc2l0aW9uLmNhblRyYW5zaXRpb25PdXQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS50cmFuc2l0aW9uLm9uVHJhbnNpdGlvbk91dENvbXBsZXRlLmFkZE9uY2UodGhpcy5hZnRlckJ1aWxkLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUudHJhbnNpdGlvbi50cmFuc2l0aW9uT3V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYWZ0ZXJCdWlsZCgpOiB2b2lkIHsgfVxuXG4gICAgcHVibGljIGFkZEF1ZGlvKHRyYWNrOiBQaGFzZXIuU291bmQpOiBQaGFzZXIuU291bmQge1xuICAgICAgICBpZiAoIXRoaXMuX2F1ZGlvKSB7XG4gICAgICAgICAgICB0aGlzLl9hdWRpbyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2F1ZGlvLnB1c2godHJhY2spO1xuICAgICAgICByZXR1cm4gdHJhY2s7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUF1ZGlvKCk6IHZvaWQge1xuICAgICAgICB2YXIgc291bmQ6IFBoYXNlci5Tb3VuZDtcbiAgICAgICAgaWYgKCF0aGlzLl9hdWRpbykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKHRoaXMuX2F1ZGlvLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNvdW5kID0gdGhpcy5fYXVkaW8ucG9wKCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHNvdW5kICE9PSAndW5kZWZpbmVkJyAmJiBzb3VuZCAhPSBudWxsICYmIHR5cGVvZiBzb3VuZC5zdG9wICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc291bmQub25TdG9wICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBzb3VuZC5vblN0b3AucmVtb3ZlQWxsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNvdW5kLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVNZWRpYXRvcigpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9tZWRpYXRvcilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5fbWVkaWF0b3IuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLl9tZWRpYXRvciA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gZ2V0dGVyIC8gc2V0dGVyXG4gICAgcHVibGljIGdldCBwcmVsb2FkSUQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBidWlsZEludGVydmFsKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAxMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGFkZCgpOiBHYW1lT2JqZWN0RmFjdG9yeSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUuYWRkVG9HYW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYXBwKCk6IEFwcGxpY2F0aW9uIHtcbiAgICAgICAgcmV0dXJuIEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBnYW1lKCk6IEdhbWUge1xuICAgICAgICByZXR1cm4gdGhpcy5hcHAuZ2FtZTtcbiAgICB9XG59XG5cbi8qKlxuICogU3RvcmFnZU1hbmFnZXJcbiAqL1xuXG5leHBvcnQgY2xhc3MgU3RvcmFnZU1hbmFnZXIge1xuICAgIHB1YmxpYyBnYW1lOiBHYW1lO1xuICAgIHByaXZhdGUgX2xvY2FsU3RvcmFnZUF2YWlsYWJsZTogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdhbWUgPSBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWU7XG4gICAgICAgIHRoaXMuX2luaXQoKTtcbiAgICB9XG5cbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICBwcml2YXRlIF9pbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9sb2NhbFN0b3JhZ2VBdmFpbGFibGUgPSB0aGlzLl9nZXRJc0xvY2FsU3RvcmFnZUF2YWlsYWJsZSgpO1xuICAgICAgICBjb25zb2xlLmxvZygnbG9jYWwgc3RvcmFnZSBhdmFpbGFibGUnLCB0aGlzLl9sb2NhbFN0b3JhZ2VBdmFpbGFibGUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldElzTG9jYWxTdG9yYWdlQXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuICdsb2NhbFN0b3JhZ2UnIGluIHdpbmRvdyAmJiB3aW5kb3dbJ2xvY2FsU3RvcmFnZSddICE9PSBudWxsO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRTdHJpbmcoZGF0YTogT2JqZWN0IHwgc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIganNvbkRhdGE7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGpzb25EYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb3VsZCBub3QgY29udmVydCcgKyBkYXRhICsgJyB0byBqc29uJyk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBqc29uRGF0YTtcbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuICAgIC8qKlxuICAgICogZ2V0cyBzdG9yZWQgZGF0YSB3aXRoIHRoZSBzcGVjaWZpZWQga2V5XG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBrZXkgICAgdGhlIExvY2FsU3RvcmFnZSBrZXkgd2hlcmUgdGhlIGRhdGEgaXMgc3RvcmVkXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBpc0pTT04gaXMgdGhlIHN0b3JlZCBkYXRhIGp1c3QgYSBzdHJpbmcgb3IgaXMgaXQgc3RyaW5naWZpZWQganNvbiAoYXNzdW1lcyBpdCdzIEpTT04pXG4gICAgKiBAcmV0dXJuIHtTdHJpbmcgfCBPYmplY3R9IHRoZSByZXRyaWV2ZWQgZGF0YSAtIGlmIGl0J3MgYSBKU09OIHN0cmluZywgd2UgcGFyc2UgdGhlIGRhdGEgYW5kIHJldHVybiB0aGUgSlNPTiBvYmplY3RcbiAgICAqL1xuICAgIHB1YmxpYyBnZXRGcm9tTG9jYWxTdG9yYWdlKGtleTogc3RyaW5nLCBpc0pTT046IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHZhciBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIGRhdGEgc2F2ZWQgd2l0aCB0aGUga2V5Jywga2V5KTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzSlNPTiAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogc2F2ZXMgZGF0YSB0byBsb2NhbHN0b3JhZ2VcbiAgICAqIEBwYXJhbSAge1N0cmluZ30ga2V5ICAgdGhlIExvY2FsU3RvcmFnZSBrZXkgdGhlIGRhdGEgd2lsbCBiZSBzYXZlZCB0b1xuICAgICogQHBhcmFtICB7U3RyaW5nfE9iamVjdH0gdmFsdWUgdGhlIGRhdGEgdG8gc2F2ZSAoaWYgaXQncyBhbiBvYmplY3QsIHdpbGwgYmUgc3RyaW5naWZpZWQgYmVmb3JlIHNhdmluZylcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgc2F2ZVRvTG9jYWxTdG9yYWdlKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgT2JqZWN0KSB7XG4gICAgICAgIGlmICghdGhpcy5fbG9jYWxTdG9yYWdlQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gbG9jYWwgc3RvcmFnZScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHRoaXMuX2dldFN0cmluZyh2YWx1ZSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygneW91ciBkYXRhIGNvdWxkIG5vdCBiZSBzYXZlZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBjbGVhciBzdG9yZWQgZGF0YVxuICAgICogQHBhcmFtICB7U3RyaW5nfSBrZXkgdGhlIExvY2FsU3RvcmFnZSBrZXkgdG8gY2xlYXJcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgY2xlYXJGcm9tTG9jYWxTdG9yYWdlKGtleTogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdGhpcy5fbG9jYWxTdG9yYWdlQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gbG9jYWwgc3RvcmFnZScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBUcmFuc2l0aW9uTWFuYWdlclxuICovXG5cbmV4cG9ydCBjbGFzcyBUcmFuc2l0aW9uTWFuYWdlciB7XG4gICAgcHVibGljIGdhbWU6IEdhbWU7XG4gICAgcHVibGljIG9uVHJhbnNpdGlvbk91dENvbXBsZXRlOiBQaGFzZXIuU2lnbmFsID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICBwdWJsaWMgb25UcmFuc2l0aW9uSW5Db21wbGV0ZTogUGhhc2VyLlNpZ25hbCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG5cbiAgICBwcml2YXRlIF90cmFuc2l0aW9uOiBJVHJhbnNpdGlvbiA9IG51bGw7XG4gICAgcHJpdmF0ZSBfdHJhbnNpdGlvbnM6IE9iamVjdCA9IHt9O1xuICAgIHByaXZhdGUgX2V4Y2VwdGlvbnM6IE9iamVjdCA9IHt9O1xuXG4gICAgcHJpdmF0ZSBfZnJvbVN0YXRlOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgX3RvU3RhdGU6IHN0cmluZyA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2FkZChpZDogc3RyaW5nLCBvdXRIYW5kbGVyOiBJVHJhbnNpdGlvbkhhbmRsZXIsIHByZWxvYWRIYW5kbGVyOiBJUHJlbG9hZEhhbmRsZXIsIGluSGFuZGxlcjogSVRyYW5zaXRpb25IYW5kbGVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25zW2lkXSA9IHtcbiAgICAgICAgICAgIG91dEhhbmRsZXI6IG91dEhhbmRsZXIsXG4gICAgICAgICAgICBwcmVsb2FkSGFuZGxlcjogcHJlbG9hZEhhbmRsZXIsXG4gICAgICAgICAgICBpbkhhbmRsZXI6IGluSGFuZGxlclxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldFRyYW5zaXRpb24oaW5TdGF0ZTogc3RyaW5nLCBvdXRTdGF0ZTogc3RyaW5nKSB7XG4gICAgICAgIHZhciB0cmFuc2l0aW9uID0gdGhpcy5fdHJhbnNpdGlvbnNbaW5TdGF0ZSArICcvJyArIG91dFN0YXRlXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0cmFuc2l0aW9uID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHRyYW5zaXRpb24gPSB0aGlzLl90cmFuc2l0aW9uc1snYWxsJ107XG5cbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0cmFuc2l0aW9uID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiB0cmFuc2l0aW9uO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3RyYW5zaXRpb25JbkNvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uID0gdGhpcy5fZ2V0VHJhbnNpdGlvbih0aGlzLl9mcm9tU3RhdGUsIHRoaXMuX3RvU3RhdGUpO1xuICAgICAgICBpZiAoIXRoaXMuX3RyYW5zaXRpb24pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyLmxvYWRTdGFydCA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hc3NldC5vbkxvYWRTdGFydC5hZGRPbmNlKHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIubG9hZFN0YXJ0LCB0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyKTtcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUuYXNzZXQub25GaWxlQ29tcGxldGUuYWRkKHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIubG9hZFByb2dyZXNzLCB0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2FtZS5hc3NldC5vbkxvYWRDb21wbGV0ZUFuZEF1ZGlvRGVjb2RlZC5hZGRPbmNlKHRoaXMuX3ByZWxvYWRDb21wbGV0ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMub25UcmFuc2l0aW9uSW5Db21wbGV0ZS5kaXNwYXRjaCgpO1xuXG4gICAgICAgIHRoaXMuZ2FtZS5jaGFuZ2VTdGF0ZSh0aGlzLl90b1N0YXRlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90cmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLm9uVHJhbnNpdGlvbk91dENvbXBsZXRlLmRpc3BhdGNoKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcHJlbG9hZENvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uID0gdGhpcy5fZ2V0VHJhbnNpdGlvbih0aGlzLl9mcm9tU3RhdGUsIHRoaXMuX3RvU3RhdGUpO1xuICAgICAgICBpZiAoIXRoaXMuX3RyYW5zaXRpb24pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5nYW1lLmFzc2V0Lm9uRmlsZUNvbXBsZXRlLnJlbW92ZSh0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyLmxvYWRQcm9ncmVzcywgdGhpcy5fdHJhbnNpdGlvbi5wcmVsb2FkSGFuZGxlcik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyLmxvYWRDb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIubG9hZENvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2xlYXJUcmFuc2l0aW9uKCkge1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uLm91dEhhbmRsZXIudHJhbnNpdGlvbkluQ29tcGxldGUucmVtb3ZlKHRoaXMuX3RyYW5zaXRpb25PdXRDb21wbGV0ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24uaW5IYW5kbGVyLnRyYW5zaXRpb25PdXRDb21wbGV0ZS5yZW1vdmUodGhpcy5fdHJhbnNpdGlvbkluQ29tcGxldGUsIHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWUuYXNzZXQub25Mb2FkQ29tcGxldGVBbmRBdWRpb0RlY29kZWQucmVtb3ZlKHRoaXMuX3ByZWxvYWRDb21wbGV0ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuZ2FtZS5hc3NldC5vbkxvYWRTdGFydC5yZW1vdmUodGhpcy5fdHJhbnNpdGlvbi5wcmVsb2FkSGFuZGxlci5sb2FkU3RhcnQsIHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIpO1xuICAgICAgICB0aGlzLmdhbWUuYXNzZXQub25GaWxlQ29tcGxldGUucmVtb3ZlKHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIubG9hZFByb2dyZXNzLCB0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyKTtcblxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuXG4gICAgLyoqXG4gICAgKiBBZGRzIGEgdHJhbnNpdGlvbiBoYW5kbGVyIGZvciBhIHNwZWNpZmljIGZyb20gLyB0byBzdGF0ZSBjb21iaW5hdGlvblxuICAgICogcGFzcyB0aGUgZnJvbSAvIHRvIHN0YXRlcyBhcyB0aGUgZmlyc3QgMiBhcmd1bWVudHMsIGFuZCBhZGRpdGlvbmFsIGFyZ3VtZW50cyBmb3Igd2hpY2ggaW5zdGFuY2Ugd2lsbCBoYW5kbGUgdGhlIHRyYW5zaXRpb25cbiAgICAqIGlmIG9ubHkgMyBhcmdzIGFyZSBwYXNzZWQsIHRoZSBpbnN0YW5jZSB3aWxsIGhhbmRsZSB0aGUgaW4gLyBvdXQgdHJhbnNpdGlvbiwgYW5kIHRoZSBwcmVsb2FkaW5nXG4gICAgKiBFLkcuXG4gICAgKiB0aGlzLmdhbWUudHJhbnNpdGlvbi5hZGQodGhpcy5nYW1lLmNvbnN0YW50cy5TVEFURV9QUkVMT0FELCB0aGlzLmdhbWUuY29uc3RhbnRzLlNUQVRFX01FTlUsIHRoaXMuZ2FtZS5wcmVsb2FkZXIpO1xuICAgICpcbiAgICAqIGlmIDUgYXJndW1lbnRzIGFyZSBwYXNzZWQsIGEgZGlmZmVyZW50IGluc3RhbmNlIGNhbiBiZSB1c2VkIGZvciBpbiB0cmFuc2l0aW9uLCBwcmVsb2FkaW5nLCBhbmQgb3V0IHRyYW5zaXRpb25cbiAgICAqIEUuRy5cbiAgICAqIHRoaXMuZ2FtZS50cmFuc2l0aW9uLmFkZCh0aGlzLmdhbWUuY29uc3RhbnRzLlNUQVRFX1BSRUxPQUQsIHRoaXMuZ2FtZS5jb25zdGFudHMuU1RBVEVfTUVOVSwgdGhpcy5nYW1lLnRyYW5zaXRpb25PdXRIYW5kbGVyLCB0aGlzLmdhbWUucHJlbG9hZEhhbmRsZXIsIHRoaXMuZ2FtZS50cmFuc2l0aW9uSW5IYW5kbGVyKTtcbiAgICAqXG4gICAgKiB0cmFuc2l0aW9uIGhhbmRsZXJzIGFyZSBleHBlY3RlZCB0byBiZWhhdmUgYXMgZm9sbG93czpcbiAgICAqIGFuIG91dCB0cmFuc2l0aW9uIGhhbmRsZXIgc2hvdWxkIGhhdmUgYSB0cmFuc2l0aW9uSW4gbWV0aG9kIGFuZCBkaXNwYXRjaCBhIHRyYW5zaXRpb25Db21wbGV0ZSBzaWduYWwgd2hlbiBkb25lXG4gICAgKiBhbiBpbiB0cmFuc2l0aW9uIGhhbmRsZXIgc2hvdWxkIGhhdmUgYSB0cmFuc2l0aW9uT3V0IG1ldGhvZCBhbmQgZGlzcGF0Y2ggYSB0cmFuc2l0aW9uQ09tcGxldGUgc2lnbmFsIHdoZW4gZG9uZVxuICAgICogYSBwcmVsb2FkIGhhbmRsZXIgc2hvdWxkIGhhdmUgbG9hZFN0YXJ0LCBsb2FkUHJvZ3Jlc3MsIGFuZCBsb2FkQ29tcGxldGUgbWV0aG9kc1xuICAgICogdGhlIGxvYWRQcm9ncmVzcyBtZXRob2QgbWF5IGFjY2VwdCBhIHVwIHRvIDQgcGFyYW1ldGVycyBmb3IgcHJvZ3Jlc3MgKHBlcmNlbnQgb2YgZmlsZXMgbG9hZGVkKSwgaWQsIGZpbGVJbmRleCwgYW5kIHRvdGFsRmlsZXNcbiAgICAqXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gZnJvbVN0YXRlIC0gdGhlIHN0YXRlIGJlaW5nIHRyYW5zaXRpb25lZCBmcm9tXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdG9TdGF0ZSAtIHRoZSBzdGF0ZSBiZWluZyB0cmFuc2l0aW9uZWQgdG9cbiAgICAqIEBwYXJhbSB7b3V0SGFuZGxlcn0gb3V0SGFuZGxlciAtIHRoZSBpbnN0YW5jZSB0aGF0IHdpbGwgaGFuZGxlIHRoZSB0cmFuc2l0aW9uIGZyb20gdGhlIGZyb21TdGF0ZVxuICAgICogQHBhcmFtIHtwcmVsb2FkSGFuZGxlcn0gcHJlbG9hZEhhbmRsZXIgLSB0aGUgaW5zdGFuY2UgdGhhdCB3aWxsIGhhbmRsZSBwcmVsb2FkaW5nIHRoZSB0b1N0YXRlXG4gICAgKiBAcGFyYW0ge2luSGFuZGxlcn0gaW5IYW5kbGVyIC0gdGhlIGluc3RhbmNlIHRoYXQgd2lsbCBoYW5kbGUgdGhlIGluIHRyYW5zaXRpb24gd2hlbiB0aGUgdG9TdGF0ZSBpcyBjb21wbGV0ZWx5IGxvYWRlZFxuICAgICogQHJldHVybiB7T2JqZWN0fSB0cmFuc2l0aW9uIHJlZmVyZW5jZSB0aGF0IHdhcyBhZGRlZCB0byBfdHJhbnNpdGlvbnNcbiAgICAqL1xuICAgIHB1YmxpYyBhZGQoZnJvbVN0YXRlOiBzdHJpbmcsIHRvU3RhdGU6IHN0cmluZyB8IElQcmVsb2FkSGFuZGxlciwgb3V0SGFuZGxlcj86IElUcmFuc2l0aW9uSGFuZGxlciwgcHJlbG9hZEhhbmRsZXI/OiBJUHJlbG9hZEhhbmRsZXIsIGluSGFuZGxlcj86IElUcmFuc2l0aW9uSGFuZGxlcik6IHZvaWQge1xuICAgICAgICB2YXIgYXJncztcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCA1KSB7XG4gICAgICAgICAgICBpZiAoZnJvbVN0YXRlID09PSAnYWxsJykge1xuICAgICAgICAgICAgICAgIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9hZGQoJ2FsbCcsIGFyZ3NbMF0sIGFyZ3NbMF0sIGFyZ3NbMF0pO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FkZCgnYWxsJywgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FkZChmcm9tU3RhdGUgKyAnLycgKyB0b1N0YXRlLCBhcmdzWzBdLCBhcmdzWzBdLCBhcmdzWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9hZGQoZnJvbVN0YXRlICsgJy8nICsgdG9TdGF0ZSwgb3V0SGFuZGxlciwgcHJlbG9hZEhhbmRsZXIsIGluSGFuZGxlcik7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZEFsbChoYW5kbGVyOiBJUHJlbG9hZEhhbmRsZXIpOiB2b2lkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZCgnYWxsJywgaGFuZGxlciwgaGFuZGxlciwgaGFuZGxlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBBZGRzIGFuIGV4Y2VwdGlvbiB0byB0aGUgRGlqb24uVHJhbnNpdGlvbk1hbmFnZXIgaW4gdGhlIGNhc2Ugd2hlcmUgJ2FsbCcgaGFzIGJlZW4gdXNlZFxuICAgICogQHBhcmFtIHtzdHJpbmd9IHN0YXRlIC0gdGhlIHN0YXRlIHRvIGFkZCB0aGUgZXhjZXB0aW9uIGZvclxuICAgICovXG4gICAgcHVibGljIGFkZEV4Y2VwdGlvbihzdGF0ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2V4Y2VwdGlvbnNbc3RhdGVdID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFJlbW92ZXMgYSB0cmFuc2l0aW9uIGhhbmRsZXIgZm9yIGEgc3BlY2lmaWMgZnJvbSAvIHRvIHN0YXRlIGNvbWJpbmF0aW9uXG4gICAgKi9cbiAgICBwdWJsaWMgcmVtb3ZlKGZyb21TdGF0ZTogc3RyaW5nLCB0b1N0YXRlPzogc3RyaW5nKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uc1tmcm9tU3RhdGVdID0gbnVsbDtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl90cmFuc2l0aW9uc1tmcm9tU3RhdGVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbnNbZnJvbVN0YXRlICsgJy8nICsgdG9TdGF0ZV0gPSBudWxsO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX3RyYW5zaXRpb25zW2Zyb21TdGF0ZSArICcvJyArIHRvU3RhdGVdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBTdGFydCB0aGUgdHJhbnNpdGlvbiB0byBhIG5ldyBzdGF0ZVxuICAgICogQHBhcmFtIHtzdHJpbmd9IHN0YXRlIC0gdGhlIHN0YXRlIHRvIHRyYW5zaXRpb24gdG9cbiAgICAqL1xuICAgIHB1YmxpYyB0byhzdGF0ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl90cmFuc2l0aW9uKVxuICAgICAgICAgICAgdGhpcy5fY2xlYXJUcmFuc2l0aW9uKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2V4Y2VwdGlvbnNbc3RhdGVdKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuX2Zyb21TdGF0ZSA9IHRoaXMuZ2FtZS5zdGF0ZS5jdXJyZW50O1xuICAgICAgICB0aGlzLl90b1N0YXRlID0gc3RhdGU7XG5cbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiA9IHRoaXMuX2dldFRyYW5zaXRpb24odGhpcy5fZnJvbVN0YXRlLCB0aGlzLl90b1N0YXRlKTtcblxuICAgICAgICBpZiAoIXRoaXMuX3RyYW5zaXRpb24pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyB0cmFuc2l0aW9uIGZvdW5kIGZvcjonLCB0aGlzLmdhbWUuc3RhdGUuY3VycmVudCArICcgdG8gJyArIHN0YXRlKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5jaGFuZ2VTdGF0ZSh0aGlzLl90b1N0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkluKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHRyYW5zaXRpb25JbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLl90cmFuc2l0aW9uKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fdHJhbnNpdGlvbi5vdXRIYW5kbGVyLnRyYW5zaXRpb25JbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbi5vdXRIYW5kbGVyLnRyYW5zaXRpb25JbkNvbXBsZXRlLmFkZE9uY2UodGhpcy5fdHJhbnNpdGlvbkluQ29tcGxldGUsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbi5vdXRIYW5kbGVyLnRyYW5zaXRpb25JbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNhblRyYW5zaXRpb25PdXQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhdGhpcy5fZXhjZXB0aW9uc1t0aGlzLmdhbWUuc3RhdGUuY3VycmVudF0gJiYgdGhpcy5fdHJhbnNpdGlvbiAmJiB0aGlzLl90cmFuc2l0aW9uLmluSGFuZGxlciAmJiB0eXBlb2YgdGhpcy5fdHJhbnNpdGlvbi5pbkhhbmRsZXIudHJhbnNpdGlvbk91dCA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEFmdGVyIHRoZSBzdGF0ZSBpcyBmdWxseSBsb2FkZWQgYW5kICdidWlsdCcgYSBjYWxsIHRvIHRoaXMgaXMgbWFkZVxuICAgICogdGhpcyBpcyBjdXJyZW50bHkgbWFkZSBmcm9tIEJhc2VTdGF0ZSBpbiB0aGUgJ2FmdGVyQnVpbGQnIG1ldGhvZFxuICAgICovXG4gICAgcHVibGljIHRyYW5zaXRpb25PdXQoKSB7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24uaW5IYW5kbGVyLnRyYW5zaXRpb25PdXRDb21wbGV0ZS5hZGRPbmNlKHRoaXMuX3RyYW5zaXRpb25PdXRDb21wbGV0ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24uaW5IYW5kbGVyLnRyYW5zaXRpb25PdXQoKTtcbiAgICB9XG59IiwiaW1wb3J0IHtHYW1lfSBmcm9tICcuL2NvcmUnO1xuaW1wb3J0IHtNZWRpYXRvciwgTW9kZWwsIE5vdGlmaWNhdGlvbn0gZnJvbSAnLi9tdmMnO1xuaW1wb3J0IHtJTm90aWZpZXIsIElPYnNlcnZlciwgSU5vdGlmaWNhdGlvbn0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7Tm90aWZpY2F0aW9uc30gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbiBpbXBsZW1lbnRzIElOb3RpZmllciB7XG4gICAgLy8gc3RhdGljIGNvbnN0YW50c1xuICAgIHByb3RlY3RlZCBzdGF0aWMgaW5zdGFuY2UgPSBudWxsO1xuICAgIHByb3RlY3RlZCBzdGF0aWMgU0lOR0xFVE9OX01TRyA9ICdBcHBsaWNhdGlvbiBzaW5nbGV0b24gYWxyZWFkeSBjb25zdHJ1Y3RlZCEnO1xuXG4gICAgLy8gcHVibGljIFxuICAgIHB1YmxpYyBnYW1lOiBHYW1lO1xuXG4gICAgLy8gcHJvdGVjdGVkICAgICAgICBcbiAgICBwcm90ZWN0ZWQgX21lZGlhdG9yOiBNZWRpYXRvciA9IG51bGw7XG4gICAgcHJvdGVjdGVkIF9tb2RlbHM6IHsgW25hbWU6IHN0cmluZ106IE1vZGVsIH0gPSB7fTtcbiAgICBwcm90ZWN0ZWQgX21lZGlhdG9yczogeyBbbmFtZTogc3RyaW5nXTogTWVkaWF0b3IgfSA9IHt9O1xuICAgIHByb3RlY3RlZCBfb2JzZXJ2ZXJNYXA6IHsgW25hbWU6IHN0cmluZ106IElPYnNlcnZlcltdIH0gPSB7fTtcblxuICAgIC8vZm9yIGRlYnVnZ2luZ1xuICAgIHByaXZhdGUgc3RhdGljIF9oYXNoUXVlcnk6IHt9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmIChBcHBsaWNhdGlvbi5pbnN0YW5jZSlcbiAgICAgICAgICAgIHRocm93IEVycm9yKEFwcGxpY2F0aW9uLlNJTkdMRVRPTl9NU0cpO1xuXG4gICAgICAgIEFwcGxpY2F0aW9uLmluc3RhbmNlID0gdGhpcztcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICAgICAgQXBwbGljYXRpb24uX2dldEhhc2hRdWVyeSgpO1xuICAgICAgICAgICAgdGhpcy53aW5kb3dIYXNoQ2hhbmdlKCk7XG4gICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICB0aGlzLmNyZWF0ZUdhbWUoKTtcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgd2luZG93SGFzaENoYW5nZSgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuICAgIHByb3RlY3RlZCBjcmVhdGVHYW1lKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSh7XG4gICAgICAgICAgICB3aWR0aDogODAwLFxuICAgICAgICAgICAgaGVpZ2h0OiA2MDAsXG4gICAgICAgICAgICBwYXJlbnQ6ICdnYW1lLWNvbnRhaW5lcicsXG4gICAgICAgICAgICByZW5kZXJlcjogUGhhc2VyLkFVVE8sXG4gICAgICAgICAgICB0cmFuc3BhcmVudDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHN0YXJ0R2FtZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gc3RhcnQgdGhlIGFwcCdzIGluaXRpYWwgc3RhdGUgaGVyZVxuICAgIH1cblxuICAgIHB1YmxpYyBhZGRQbHVnaW5zKCkge1xuICAgICAgICB0aGlzLmdhbWUuYWRkUGx1Z2lucygpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck1vZGVsKG1vZGVsOiBNb2RlbCk6IE1vZGVsIHtcbiAgICAgICAgaWYgKHRoaXMuX21vZGVsc1ttb2RlbC5uYW1lXSkge1xuICAgICAgICAgICAgdGhyb3cgKG5ldyBFcnJvcignQXBwbGljYXRpb246OiBhIG1vZGVsIHdpdGggdGhlIG5hbWUgXCInICsgbW9kZWwubmFtZSArICdcIiBhbHJlYWR5IGV4aXN0cy4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbW9kZWxzW21vZGVsLm5hbWVdID0gbW9kZWw7XG5cbiAgICAgICAgbW9kZWwub25SZWdpc3RlcigpO1xuXG4gICAgICAgIHJldHVybiBtb2RlbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmV0cmlldmVNb2RlbChtb2RlbE5hbWU6IHN0cmluZyk6IE1vZGVsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vZGVsc1ttb2RlbE5hbWVdIHx8IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZU1vZGVsKG1vZGVsVG9SZW1vdmU6IE1vZGVsKTogdm9pZCB7XG4gICAgICAgIGxldCBuYW1lID0gbW9kZWxUb1JlbW92ZS5uYW1lO1xuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLl9tb2RlbHNbbmFtZV07XG5cbiAgICAgICAgaWYgKCFtb2RlbClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBtb2RlbC5vblJlbW92ZWQoKTtcblxuICAgICAgICBkZWxldGUgdGhpcy5fbW9kZWxzW25hbWVdO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck1lZGlhdG9yKG1lZGlhdG9yOiBNZWRpYXRvcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fbWVkaWF0b3JzW21lZGlhdG9yLm5hbWVdKSB7XG4gICAgICAgICAgICB0aHJvdyAobmV3IEVycm9yKCdBcHBsaWNhdGlvbjo6IGEgbWVkaWF0b3Igd2l0aCB0aGUgbmFtZSBcIicgKyBtZWRpYXRvci5uYW1lICsgJ1wiIGFscmVhZHkgZXhpc3RzLicpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX21lZGlhdG9yc1ttZWRpYXRvci5uYW1lXSA9IG1lZGlhdG9yO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyT2JzZXJ2ZXIobWVkaWF0b3IpO1xuXG4gICAgICAgIG1lZGlhdG9yLm9uUmVnaXN0ZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmV0cmlldmVNZWRpYXRvcihtZWRpYXRvck5hbWU6IHN0cmluZyk6IE1lZGlhdG9yIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lZGlhdG9yc1ttZWRpYXRvck5hbWVdIHx8IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZU1lZGlhdG9yKG1lZGlhdG9yVG9SZW1vdmU6IE1lZGlhdG9yKTogdm9pZCB7XG4gICAgICAgIGxldCBuYW1lID0gbWVkaWF0b3JUb1JlbW92ZS5uYW1lO1xuICAgICAgICBsZXQgbWVkaWF0b3IgPSB0aGlzLl9tZWRpYXRvcnNbbmFtZV07XG5cbiAgICAgICAgaWYgKCFtZWRpYXRvcilcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBtZWRpYXRvci5saXN0Tm90aWZpY2F0aW9uSW50ZXJlc3RzKCkuZm9yRWFjaChpbnRlcmVzdCA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZU9ic2VydmVyKGludGVyZXN0LCBtZWRpYXRvcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lZGlhdG9yLm9uUmVtb3ZlZCgpO1xuICAgICAgICBkZWxldGUgdGhpcy5fbWVkaWF0b3JzW25hbWVdO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck9ic2VydmVyKG9ic2VydmVyOiBJT2JzZXJ2ZXIpOiB2b2lkIHtcbiAgICAgICAgb2JzZXJ2ZXIubGlzdE5vdGlmaWNhdGlvbkludGVyZXN0cygpLmZvckVhY2gobm90aWZpY2F0aW9uTmFtZSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fb2JzZXJ2ZXJNYXBbbm90aWZpY2F0aW9uTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX29ic2VydmVyTWFwW25vdGlmaWNhdGlvbk5hbWVdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9vYnNlcnZlck1hcFtub3RpZmljYXRpb25OYW1lXS5wdXNoKG9ic2VydmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc3RvcHMgYW4gb2JzZXJ2ZXIgZnJvbSBiZWluZyBpbnRlcmVzdGVkIGluIGEgbm90aWZpY2F0aW9uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5vdGlmaWNhdGlvbk5hbWVcbiAgICAgKiBAcGFyYW0ge0lPYnNlcnZlcn0gb2JzZXJ2ZXJUb1JlbW92ZVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgcHVibGljIHJlbW92ZU9ic2VydmVyKG5vdGlmaWNhdGlvbk5hbWU6IHN0cmluZywgb2JzZXJ2ZXJUb1JlbW92ZTogSU9ic2VydmVyKTogdm9pZCB7XG4gICAgICAgIC8vVGhlIG9ic2VydmVyIGxpc3QgZm9yIHRoZSBub3RpZmljYXRpb24gdW5kZXIgaW5zcGVjdGlvblxuICAgICAgICBsZXQgb2JzZXJ2ZXJzOiBJT2JzZXJ2ZXJbXSA9IG51bGwsXG4gICAgICAgICAgICBvYnNlcnZlcjogSU9ic2VydmVyID0gbnVsbCxcbiAgICAgICAgICAgIGk6IG51bWJlciA9IDA7XG5cbiAgICAgICAgb2JzZXJ2ZXJzID0gdGhpcy5fb2JzZXJ2ZXJNYXBbbm90aWZpY2F0aW9uTmFtZV07XG5cbiAgICAgICAgLy9GaW5kIHRoZSBvYnNlcnZlciBmb3IgdGhlIG5vdGlmeUNvbnRleHQuXG4gICAgICAgIGkgPSBvYnNlcnZlcnMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICBvYnNlcnZlciA9IG9ic2VydmVyc1tpXTtcbiAgICAgICAgICAgIGlmIChvYnNlcnZlciA9PT0gb2JzZXJ2ZXJUb1JlbW92ZSkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAgKiBBbHNvLCB3aGVuIGEgTm90aWZpY2F0aW9uJ3MgT2JzZXJ2ZXIgbGlzdCBsZW5ndGggZmFsbHMgdG8gemVybywgZGVsZXRlIHRoZVxuICAgICAgICAgKiBub3RpZmljYXRpb24ga2V5IGZyb20gdGhlIG9ic2VydmVyIG1hcC5cbiAgICAgICAgICovXG4gICAgICAgIGlmIChvYnNlcnZlcnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9vYnNlcnZlck1hcFtub3RpZmljYXRpb25OYW1lXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZW5kTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbk5hbWU6IHN0cmluZywgbm90ZmljYXRpb25Cb2R5PzogYW55KTogdm9pZCB7XG4gICAgICAgIGxldCBub3RpZmljYXRpb24gPSBuZXcgTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbk5hbWUsIG5vdGZpY2F0aW9uQm9keSk7XG4gICAgICAgIHRoaXMuX25vdGlmeU9ic2VydmVycyhub3RpZmljYXRpb24pO1xuXG4gICAgICAgIG5vdGlmaWNhdGlvbi5kZXN0cm95KCk7XG4gICAgICAgIG5vdGlmaWNhdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgcHJpdmF0ZSBfbm90aWZ5T2JzZXJ2ZXJzKG5vdGlmaWNhdGlvbjogSU5vdGlmaWNhdGlvbikge1xuICAgICAgICBsZXQgb2JzZXJ2ZXI6IElPYnNlcnZlciA9IG51bGwsXG4gICAgICAgICAgICBvYnNlcnZlcnM6IElPYnNlcnZlcltdID0gbnVsbDtcblxuICAgICAgICBjb25zdCBub3RpZmljYXRpb25OYW1lOiBzdHJpbmcgPSBub3RpZmljYXRpb24uZ2V0TmFtZSgpO1xuICAgICAgICBjb25zdCBvYnNlcnZlcnNSZWY6IElPYnNlcnZlcltdID0gdGhpcy5fb2JzZXJ2ZXJNYXBbbm90aWZpY2F0aW9uTmFtZV07XG5cbiAgICAgICAgaWYgKG9ic2VydmVyc1JlZikge1xuICAgICAgICAgICAgLy8gY2xvbmUgdGhlIGFycmF5IGluIGNhc2UgYW4gb2JzZXJ2ZXIgZ2V0cyByZW1vdmVkIHdoaWxlIHRoZSBub3RpZmljYXRpb24gaXMgYmVpbmcgc2VudFxuICAgICAgICAgICAgb2JzZXJ2ZXJzID0gb2JzZXJ2ZXJzUmVmLnNsaWNlKDApO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmhhbmRsZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfZ2V0SGFzaFF1ZXJ5KCk6IHZvaWQge1xuICAgICAgICBBcHBsaWNhdGlvbi5faGFzaFF1ZXJ5ID0ge307XG4gICAgICAgIGlmICghd2luZG93LmxvY2F0aW9uLmhhc2ggfHwgd2luZG93LmxvY2F0aW9uLmhhc2ggPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSwgd2luZG93LmxvY2F0aW9uLmhhc2gubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgYUhhc2g6IHN0cmluZ1tdID0gaGFzaC5zcGxpdCgnJicpO1xuICAgICAgICBhSGFzaC5mb3JFYWNoKGhhc2hQYWlyID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFIYXNoID0gaGFzaFBhaXIuc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIEFwcGxpY2F0aW9uLl9oYXNoUXVlcnlbYUhhc2hbMF1dID0gL15cXGQrJC8udGVzdChhSGFzaFsxXSkgPyBwYXJzZUludChhSGFzaFsxXSkgOiBhSGFzaFsxXTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gc3RhdGljIG1ldGhvZHNcblxuICAgIC8qKlxuICAgICAqIHJldHVybnMgdGhlIEFwcGxpY2F0aW9uIHNpbmdsZXRvblxuICAgICAqIEByZXR1cm4ge0FwcGxpY2F0aW9ufVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogQXBwbGljYXRpb24ge1xuICAgICAgICBpZiAoIUFwcGxpY2F0aW9uLmluc3RhbmNlKVxuICAgICAgICAgICAgQXBwbGljYXRpb24uaW5zdGFuY2UgPSBuZXcgQXBwbGljYXRpb24oKTtcblxuICAgICAgICByZXR1cm4gQXBwbGljYXRpb24uaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZ2V0cyBhIHF1ZXJ5IHZhcmlhYmxlIGZyb20gdGhlIHdpbmRvdy5sb2NhdGlvbiBoYXNoXG4gICAgICogYXNzdW1lcyBzb21ldGhpbmcgbGlrZSBodHRwOi8vdXJsLyNmb289YmFyJmJhej1mb29cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFyaWFibGVJZFxuICAgICAqIEByZXR1cm4ge2FueX1cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHF1ZXJ5VmFyKHZhcmlhYmxlSWQ6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGlmIChBcHBsaWNhdGlvbi5faGFzaFF1ZXJ5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIEFwcGxpY2F0aW9uLl9nZXRIYXNoUXVlcnkoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQXBwbGljYXRpb24uX2hhc2hRdWVyeVt2YXJpYWJsZUlkXSB8fCBudWxsO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
