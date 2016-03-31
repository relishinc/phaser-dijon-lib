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
    var Sprite, InvisibleButton, Group, Text, Component, NineSliceImage;
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
        }
    }
});
System.register("dijon/utils", ["dijon/application", "dijon/display"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var application_3, display_1;
    var Device, Textures, Placeholders, Notifications;
    return {
        setters:[
            function (application_3_1) {
                application_3 = application_3_1;
            },
            function (display_1_1) {
                display_1 = display_1_1;
            }],
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
                Textures.rect = function (width, height, color, alpha) {
                    if (width === void 0) { width = 100; }
                    if (height === void 0) { height = 100; }
                    if (color === void 0) { color = 0xffffff; }
                    if (alpha === void 0) { alpha = 1; }
                    var gfx = Textures.game.add.graphics(0, 0);
                    gfx.beginFill(color, alpha);
                    gfx.drawRect(0, 0, width, height);
                    var texture = gfx.generateTexture();
                    Textures.game.world.remove(gfx);
                    return texture;
                };
                Textures.roundedRect = function (width, height, radius, color, alpha) {
                    if (width === void 0) { width = 100; }
                    if (height === void 0) { height = 100; }
                    if (radius === void 0) { radius = 10; }
                    if (color === void 0) { color = 0xffffff; }
                    if (alpha === void 0) { alpha = 1; }
                    var gfx = Textures.game.add.graphics(0, 0);
                    gfx.beginFill(color, alpha);
                    gfx.drawRoundedRect(0, 0, width, height, radius);
                    var texture = gfx.generateTexture();
                    Textures.game.world.remove(gfx);
                    return texture;
                };
                Textures.square = function (size, color, alpha) {
                    if (size === void 0) { size = 100; }
                    if (color === void 0) { color = 0xffffff; }
                    if (alpha === void 0) { alpha = 1; }
                    return Textures.rect(size, size, color, alpha);
                };
                Textures.circle = function (diameter, color, alpha) {
                    if (diameter === void 0) { diameter = 100; }
                    if (color === void 0) { color = 0xffffff; }
                    if (alpha === void 0) { alpha = 1; }
                    var gfx = Textures.game.add.graphics(0, 0);
                    gfx.beginFill(color, alpha);
                    gfx.drawCircle(0, 0, diameter);
                    var texture = gfx.generateTexture();
                    Textures.game.world.remove(gfx);
                    return texture;
                };
                Textures.ellipse = function (width, height, color, alpha) {
                    if (width === void 0) { width = 50; }
                    if (height === void 0) { height = 100; }
                    if (color === void 0) { color = 0xffffff; }
                    if (alpha === void 0) { alpha = 1; }
                    var gfx = Textures.game.add.graphics(0, 0);
                    gfx.beginFill(color, alpha);
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
                Placeholders.image = function (x, y, texture) {
                    if (x === void 0) { x = 0; }
                    if (y === void 0) { y = 0; }
                    return new Phaser.Image(Placeholders.game, x, y, texture);
                };
                Placeholders.button = function (x, y, width, height, text, callback, callbackContext, defaultColor, overColor, downColor) {
                    if (x === void 0) { x = 0; }
                    if (y === void 0) { y = 0; }
                    if (width === void 0) { width = 100; }
                    if (height === void 0) { height = 50; }
                    if (text === void 0) { text = 'button'; }
                    if (callback === void 0) { callback = null; }
                    if (callbackContext === void 0) { callbackContext = null; }
                    if (defaultColor === void 0) { defaultColor = 0xffffff; }
                    if (overColor === void 0) { overColor = 0xff0000; }
                    if (downColor === void 0) { downColor = 0x00ff00; }
                    var sprite = new Phaser.Sprite(Placeholders.game, x, y);
                    var upImage = Placeholders.image(0, 0, Textures.roundedRect(width, height, 10, defaultColor));
                    var overImage = Placeholders.image(0, 0, Textures.roundedRect(width, height, 10, overColor));
                    var downImage = Placeholders.image(0, 0, Textures.roundedRect(width, height, 10, downColor));
                    var textInstance = new display_1.Text(width * 0.5, height * 0.55, text, 'Arial', height * 0.6, '#000000');
                    textInstance.centerPivot();
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
                AssetManager.ATLAS = 'atlas';
                AssetManager.TEXT = 'text';
                AssetManager.JSON = 'json';
                AssetManager.TILEMAP = 'tilemap';
                AssetManager.TILEDMAP = 'tiledmap';
                AssetManager.TILEDMAP_TILESET = 'tileset';
                AssetManager.TILEDMAP_LAYER = 'layer';
                AssetManager.PHYSICS = 'physics';
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
                    this._targetGroup = null;
                    return group.add(new Phaser.Graphics(this.game, x, y));
                };
                GameObjectFactory.prototype.bitmapText = function (x, y, font, text, size, group) {
                    if (text === void 0) { text = ""; }
                    if (size === void 0) { size = 32; }
                    if (group === undefined) {
                        group = this.targetGroup;
                    }
                    this._targetGroup = null;
                    return group.add(new Phaser.BitmapText(this.game, x, y, font, text, size));
                };
                GameObjectFactory.prototype.dSprite = function (x, y, key, frame, name, components, group) {
                    if (group === undefined) {
                        group = this.targetGroup;
                    }
                    this._targetGroup = null;
                    return group.add(new display_2.Sprite(x, y, key, frame, name, components));
                };
                GameObjectFactory.prototype.dGroup = function (x, y, name, addToStage, components, enableBody, physicsBodyType, group) {
                    if (group === undefined && addToStage !== true) {
                        group = this.targetGroup;
                        this._targetGroup = null;
                        return group.add(new display_2.Group(x, y, name, addToStage, components, enableBody, physicsBodyType));
                    }
                    return new display_2.Group(x, y, name, addToStage, components, enableBody, physicsBodyType);
                };
                GameObjectFactory.prototype.dText = function (x, y, text, fontName, fontSize, fontColor, fontAlign, wordWrap, width, lineSpacing, settings, group) {
                    if (group === undefined) {
                        group = this.targetGroup;
                    }
                    this._targetGroup = null;
                    return group.add(new display_2.Text(x, y, text, fontName, fontSize, fontColor, fontAlign, wordWrap, width, lineSpacing, settings));
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
                State.prototype.shutdown = function () {
                    this.removeAudio();
                    this.removeMediator();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpam9uL212Yy50cyIsImRpam9uL2Rpc3BsYXkudHMiLCJkaWpvbi91dGlscy50cyIsImRpam9uL2NvcmUudHMiLCJkaWpvbi9hcHBsaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBT0ksZUFBWSxPQUFzQixFQUFVLFNBQXdCO29CQUF4RCx1QkFBc0IsR0FBdEIsY0FBc0I7b0JBQUUseUJBQWdDLEdBQWhDLGdCQUFnQztvQkFBeEIsY0FBUyxHQUFULFNBQVMsQ0FBZTtvQkFDaEUsSUFBSSxDQUFDLEdBQUcsR0FBRyx5QkFBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO29CQUUxQixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzFCLENBQUM7b0JBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRU0sMEJBQVUsR0FBakI7Z0JBRUEsQ0FBQztnQkFFTSx5QkFBUyxHQUFoQjtnQkFFQSxDQUFDO2dCQUVTLDRCQUFZLEdBQXRCLFVBQXVCLEdBQVc7b0JBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDO2dCQUNqRCxDQUFDO2dCQUVNLHVCQUFPLEdBQWQsVUFBZSxPQUFlO29CQUMxQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxHQUFHLE9BQU8sR0FBRyw4QkFBOEIsQ0FBQyxDQUFDO3dCQUM1RixNQUFN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LEVBQUUsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUVqUixJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBRXRCLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN2QixJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBRXZCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUNsQixJQUFJLENBQUMsSUFBSSxHQUFzQixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDNVUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQy9CLENBQUM7Z0JBQ0wsQ0FBQztnQkFFTywrQ0FBc0IsR0FBOUI7b0JBQ0ksSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3JDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUMzQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDMUQsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUVkLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUVsRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztvQkFFN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO2dCQUVPLGlDQUFRLEdBQWhCO29CQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFFbEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQztvQkFDbkcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDaEQsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvQkFDeEcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFFakQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7d0JBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO3dCQUMxRixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztvQkFD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Q0FBQyxVQUFBLFFBQVE7d0JBQ2xCLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2xDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM5RixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQVFhLHVCQUFXLEdBQXpCO29CQUNJLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQzt3QkFDdEIsV0FBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO29CQUU3QyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztnQkFDaEMsQ0FBQztnQkFRYSxvQkFBUSxHQUF0QixVQUF1QixVQUFrQjtvQkFDckMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUN2QyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ2hDLENBQUM7b0JBQ0QsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDO2dCQUN0RCxDQUFDO2dCQXJOZ0Isb0JBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ2hCLHlCQUFhLEdBQUcsNENBQTRDLENBQUM7Z0JBc05sRixrQkFBQztZQUFELENBek5BLEFBeU5DLElBQUE7WUF6TkQscUNBeU5DLENBQUEiLCJmaWxlIjoiZGlqb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lOb3RpZmljYXRpb24sSU9ic2VydmVyfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnLi9hcHBsaWNhdGlvbic7XG5pbXBvcnQge0dhbWV9IGZyb20gJy4vY29yZSc7XG4vKipcbiAqIE1vZGVsXG4gKi9cblxuZXhwb3J0IGNsYXNzIE1vZGVsIHtcbiAgICBwdWJsaWMgYXBwOiBBcHBsaWNhdGlvbjtcbiAgICBwdWJsaWMgZ2FtZTogR2FtZTtcbiAgICBwcm90ZWN0ZWQgX2RhdGE6IGFueTtcblxuICAgIHB1YmxpYyBzdGF0aWMgTU9ERUxfTkFNRTogc3RyaW5nID0gJ01vZGVsJztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGFLZXk6IHN0cmluZyA9IG51bGwsIHByaXZhdGUgbW9kZWxOYW1lOiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuYXBwID0gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5nYW1lID0gdGhpcy5hcHAuZ2FtZTtcblxuICAgICAgICBpZiAoZGF0YUtleSkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKGRhdGFLZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hcHAucmVnaXN0ZXJNb2RlbCh0aGlzKTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIG9uUmVnaXN0ZXIoKTp2b2lke1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgcHVibGljIG9uUmVtb3ZlZCgpOnZvaWR7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRLZXlFeGlzdHMoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZS5jYWNoZS5nZXRKU09OKGtleSkgIT09IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHNldERhdGEoZGF0YUtleTogc3RyaW5nKTogYW55IHtcbiAgICAgICAgaWYgKCF0aGlzLmdldEtleUV4aXN0cyhkYXRhS2V5KSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ01vZGVsOjogY2Fubm90IHNldCBkYXRhIGZyb20ga2V5ICcgKyBkYXRhS2V5ICsgJy4gSXMgaXQgaW4gdGhlIFBoYXNlciBjYWNoZT8nKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLmdhbWUuY2FjaGUuZ2V0SlNPTihkYXRhS2V5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIGdldERhdGEoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXBwLnJlbW92ZU1vZGVsKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbE5hbWUgfHwgTW9kZWwuTU9ERUxfTkFNRTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb3B5TW9kZWwgZXh0ZW5kcyBNb2RlbCB7XG4gICAgcHVibGljIHN0YXRpYyBNT0RFTF9OQU1FOiBzdHJpbmcgPSAnY29weU1vZGVsJztcblxuICAgIHByaXZhdGUgX2xhbmd1YWdlczogeyBbbGFuZ3VhZ2VOYW1lOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoZGF0YUtleTogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICBzdXBlcihkYXRhS2V5KTtcblxuICAgICAgICB0aGlzLl9sYW5ndWFnZXNbJ2VuJ10gPSB0aGlzLl9kYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDb3B5KGdyb3VwSWQ6IHN0cmluZywgaXRlbUlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb3B5R3JvdXAoZ3JvdXBJZClbaXRlbUlkXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29weUdyb3VwKGdyb3VwSWQ6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhW2dyb3VwSWRdO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRMYW5ndWFnZShsYW5ndWFnZUlkOiBzdHJpbmcsIGRhdGFLZXk6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGlmICghdGhpcy5nZXRLZXlFeGlzdHMoZGF0YUtleSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY2Fubm90IGFkZCBhbiBhbHRlcm5hdGUgbGFuZ3VhZ2UgZnJvbSBrZXkgJyArIGRhdGFLZXkgKyAnLiBJcyBpdCBpbiB0aGUgUGhhc2VyIGNhY2hlPycpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbGFuZ3VhZ2VzW2xhbmd1YWdlSWRdID0gdGhpcy5nYW1lLmNhY2hlLmdldEpTT04oZGF0YUtleSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNoYW5nZUxhbmd1YWdlKGxhbmd1YWdlSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2xhbmd1YWdlc1tsYW5ndWFnZUlkXSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RoZXJlIGlzIG5vIGxhbmd1YWdlICcgKyBsYW5ndWFnZUlkKTtcblxuICAgICAgICB0aGlzLl9kYXRhID0gdGhpcy5fbGFuZ3VhZ2VzW2xhbmd1YWdlSWRdO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gQ29weU1vZGVsLk1PREVMX05BTUU7XG4gICAgfVxufVxuXG4vKipcbiAqIE1lZGlhdG9yXG4gKi9cblxuZXhwb3J0IGNsYXNzIE1lZGlhdG9yIGltcGxlbWVudHMgSU9ic2VydmVyIHtcbiAgICBwdWJsaWMgc3RhdGljIE1FRElBVE9SX05BTUU6IHN0cmluZyA9ICdNZWRpYXRvcic7XG5cbiAgICBwcm90ZWN0ZWQgbWVkaWF0b3JOYW1lOiBzdHJpbmcgPSBudWxsO1xuICAgIHByb3RlY3RlZCBhcHA6IEFwcGxpY2F0aW9uO1xuICAgIHByb3RlY3RlZCBnYW1lOiBHYW1lO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIF92aWV3Q29tcG9uZW50OiBhbnkgPSBudWxsLCBhdXRvUmVnOiBib29sZWFuID0gdHJ1ZSwgbWVkaWF0b3JOYW1lOiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuYXBwID0gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5nYW1lID0gdGhpcy5hcHAuZ2FtZTtcbiAgICAgICAgdGhpcy5tZWRpYXRvck5hbWUgPSBtZWRpYXRvck5hbWU7XG5cbiAgICAgICAgaWYgKGF1dG9SZWcpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuICAgIHByb3RlY3RlZCByZWdpc3RlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hcHAucmVnaXN0ZXJNZWRpYXRvcih0aGlzKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVtb3ZlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFwcC5yZW1vdmVNZWRpYXRvcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25SZWdpc3RlcigpOiB2b2lkIHtcbiAgICAgICAgLy8gb3ZlcnJpZGUgbWUgZnJlZWx5XG4gICAgfVxuXG4gICAgcHVibGljIG9uUmVtb3ZlZCgpOiB2b2lkIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsaXN0Tm90aWZpY2F0aW9uSW50ZXJlc3RzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYW5kbGVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBJTm90aWZpY2F0aW9uKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBkZWZhdWx0IGltbXBsZW1lbnRhdGlvbiB3b3VsZCBsb29rIHNvbWV0aGluZyBsaWtlOlxuICAgICAgICAgKiBzd2l0Y2goIG5vdGlmaWNhdGlvbjogZGlqb24uSU5vdGlmaWNhdGlvbiApe1xuICAgICAgICAgKiBcdFx0Y2FzZSBOb3RpZmljYXRpb25zLlNPTUVUSElORzpcbiAgICAgICAgICogXHRcdFx0Ly8gZG8gc29tZXRoaW5nXG4gICAgICAgICAqIFx0XHRcdGJyZWFrO1xuICAgICAgICAgKiBcdFx0Y2FzZSBOb3RpZmljYXRpb25zLlNPTUVUSElOR19FTFNFOlxuICAgICAgICAgKiBcdFx0XHQvLyBkbyBzb21ldGhpbmcgZWxzZVxuICAgICAgICAgKiBcdFx0XHRicmVhaztcbiAgICAgICAgICogfVxuICAgICAgICAgKi9cbiAgICB9XG5cbiAgICBwdWJsaWMgc2VuZE5vdGlmaWNhdGlvbihub3RpZmljYXRpb25OYW1lOiBzdHJpbmcsIG5vdGlmaWNhdGlvbkJvZHk/OiBhbnkpIHtcbiAgICAgICAgdGhpcy5hcHAuc2VuZE5vdGlmaWNhdGlvbihub3RpZmljYXRpb25OYW1lLCBub3RpZmljYXRpb25Cb2R5KTtcbiAgICB9XG5cbiAgICAvLyBnZXR0ZXIgLyBzZXR0ZXJcbiAgICBwdWJsaWMgc2V0IHZpZXdDb21wb25lbnQodmlld0NvbXBvbmVudDogYW55KSB7XG4gICAgICAgIHRoaXMuX3ZpZXdDb21wb25lbnQgPSB2aWV3Q29tcG9uZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdmlld0NvbXBvbmVudCgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmlld0NvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVkaWF0b3JOYW1lIHx8IE1lZGlhdG9yLk1FRElBVE9SX05BTUU7XG4gICAgfVxufVxuXG4vKipcbiAqIE5vdGlmaWNhdGlvblxuICovXG5cbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb24gaW1wbGVtZW50cyBJTm90aWZpY2F0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uYW1lOiBzdHJpbmcsIHByaXZhdGUgX2JvZHk6IGFueSA9IG51bGwpIHsgfVxuXG4gICAgcHVibGljIGdldE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEJvZHkoYm9keTogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2JvZHkgPSBib2R5O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRCb2R5KCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ib2R5O1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9ib2R5ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG51bGw7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQge0FwcGxpY2F0aW9ufSBmcm9tICcuL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7R2FtZSwgR2FtZU9iamVjdEZhY3Rvcnl9IGZyb20gJy4vY29yZSc7XG5pbXBvcnQge01lZGlhdG9yfSBmcm9tICcuL212Yyc7XG5cbi8qKlxuICogU3ByaXRlXG4gKi9cbmV4cG9ydCBjbGFzcyBTcHJpdGUgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcbiAgICBwdWJsaWMgZ2FtZTogR2FtZTtcblxuICAgIHByb3RlY3RlZCBfaGFzQ29tcG9uZW50czogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCBfY29tcG9uZW50S2V5czogc3RyaW5nW10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgX2NvbXBvbmVudHM6IHsgW2NvbXBvbmVudE5hbWU6IHN0cmluZ106IENvbXBvbmVudCB9ID0ge307XG5cbiAgICBjb25zdHJ1Y3Rvcih4PzogbnVtYmVyLCB5PzogbnVtYmVyLCBrZXk/OiBzdHJpbmcgfCBQaGFzZXIuUmVuZGVyVGV4dHVyZSB8IFBoYXNlci5CaXRtYXBEYXRhIHwgUElYSS5UZXh0dXJlLCBmcmFtZT86IHN0cmluZyB8IG51bWJlciwgcHVibGljIG5hbWU6IHN0cmluZyA9IFwiZFNwcml0ZVwiLCBjb21wb25lbnRzOiBDb21wb25lbnRbXSA9IG51bGwpIHtcbiAgICAgICAgc3VwZXIoQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lLCB4LCB5LCBrZXksIGZyYW1lKTtcblxuICAgICAgICBpZiAoY29tcG9uZW50cylcbiAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50cyhjb21wb25lbnRzKTtcbiAgICB9XG4gICAgLy8gUGhhc2VyLlNwcml0ZSBvdmVycmlkZXNcbiAgICAvKipcbiAgICAqIGNhbGxlZCBldmVyeSBmcmFtZVxuICAgICogaXRlcmF0ZXMgdGhlIGNvbXBvbmVudHMgbGlzdCBhbmQgY2FsbHMgY29tcG9uZW50LnVwZGF0ZSgpIG9uIGVhY2ggY29tcG9uZW50XG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICogQG92ZXJyaWRlXG4gICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5faGFzQ29tcG9uZW50cylcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogcmVtb3ZlcyBhbGwgY29tcG9uZW50c1xuICAgICogQHJldHVybiB7UGhhc2VyLkdyb3VwLmRlc3Ryb3l9XG4gICAgKiBAb3ZlcnJpZGVcbiAgICAqL1xuICAgIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlbW92ZUFsbENvbXBvbmVudHMoKTtcbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuICAgIC8qKlxuICAgICogaW5pdGlhbGl6ZSB2YXJpYWJsZXNcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHsgfVxuXG4gICAgLyoqXG4gICAgKiBhZGQgdmlzdWFsIGVsZW1lbnRzXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHJvdGVjdGVkIGJ1aWxkSW50ZXJmYWNlKCk6IHZvaWQgeyB9XG5cbiAgICAvKipcbiAgICAqIHVwZGF0ZXMgdGhlIGludGVybmFsIGxpc3Qgb2YgY29tcG9uZW50IGtleXMgKHNvIHdlIGRvbid0IGhhdmUgdG8gY2FsbCBPYmplY3Qua2V5cygpIGFsbCB0aGUgdGltZSlcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwcml2YXRlIF91cGRhdGVDb21wb25lbnRLZXlzKCkge1xuICAgICAgICB0aGlzLl9jb21wb25lbnRLZXlzID0gT2JqZWN0LmtleXModGhpcy5fY29tcG9uZW50cyk7XG4gICAgICAgIHRoaXMuX2hhc0NvbXBvbmVudHMgPSB0aGlzLl9jb21wb25lbnRLZXlzLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICAvKipcbiAgICAqIGF0dGFjaGVzIGEgbGlzdCBvZiBjb21wb25lbnRzIHRvIHRoZSBEaWpvbi5VSUdyb3VwXG4gICAgKiBAcGFyYW0ge0FycmF5fSBjb21wb25lbnRzIHRoZSBsaXN0IG9mIGNvbXBvbmVudHMgdG8gYWRkXG4gICAgKi9cbiAgICBwdWJsaWMgYWRkQ29tcG9uZW50cyA9IGZ1bmN0aW9uKGNvbXBvbmVudHM6IENvbXBvbmVudFtdKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cy5sZW5ndGggPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEaWpvbi5VSUdyb3VwIGNvbXBvbmVudHMgbXVzdCBiZSBhbiBhcnJheScpO1xuXG4gICAgICAgIHdoaWxlIChjb21wb25lbnRzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChjb21wb25lbnRzLnNoaWZ0KCkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAqIGF0dGFjaGVzIGEgY29tcG9uZW50IHRvIHRoZSBEaWpvbi5VSUdyb3VwXG4gICAgKiBAcGFyYW0ge2Rpam9uLkNvbXBvbmVudH0gY29tcG9uZW50IHRvIGJlIGF0dGFjaGVkXG4gICAgKi9cbiAgICBwdWJsaWMgYWRkQ29tcG9uZW50KGNvbXBvbmVudDogQ29tcG9uZW50KTogQ29tcG9uZW50IHtcbiAgICAgICAgY29tcG9uZW50LnNldE93bmVyKHRoaXMpO1xuICAgICAgICBjb21wb25lbnQuaW5pdCgpO1xuICAgICAgICBjb21wb25lbnQuYnVpbGRJbnRlcmZhY2UoKTtcblxuICAgICAgICB0aGlzLl9jb21wb25lbnRzW2NvbXBvbmVudC5uYW1lXSA9IGNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ29tcG9uZW50S2V5cygpO1xuXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICogaXRlcmF0ZXMgdGhyb3VnaCB0aGUgbGlzdCBvZiBjb21wb25lbnRzIGFuZCB1cGRhdGVzIGVhY2ggb25lXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIHVwZGF0ZUNvbXBvbmVudHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudEtleXMuZm9yRWFjaChcbiAgICAgICAgICAgIGNvbXBvbmVudE5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogdXBkYXRlcyBhbiBhdHRhY2hlZCBjb21wb25lbnQgKGNhbGxzIGNvbXBvbmVudC51cGRhdGUoKSlcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gY29tcG9uZW50TmFtZSB0aGUgbmFtZSBvZiB0aGUgY29tcG9uZW50IHRvIHVwZGF0ZVxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyB1cGRhdGVDb21wb25lbnQoY29tcG9uZW50TmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHNbY29tcG9uZW50TmFtZV0udXBkYXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiByZW1vdmVzIGFsbCB0aGUgY29tcG9uZW50cyBjdXJyZW50bHkgYXR0YWNoZWRcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgcmVtb3ZlQWxsQ29tcG9uZW50cygpIHtcbiAgICAgICAgd2hpbGUgKHRoaXMuX2NvbXBvbmVudEtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDb21wb25lbnQodGhpcy5fY29tcG9uZW50S2V5cy5wb3AoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHJlbW92ZXMgYSBzcGVjaWZpYyBjb21wb25lbnRcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gY29tcG9uZW50TmFtZSB0aGUgbmFtZSBvZiB0aGUgY29tcG9uZW50IHRvIHJlbW92ZVxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyByZW1vdmVDb21wb25lbnQoY29tcG9uZW50TmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29tcG9uZW50c1tjb21wb25lbnROYW1lXSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgdGhpcy5fY29tcG9uZW50c1tjb21wb25lbnROYW1lXS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHNbY29tcG9uZW50TmFtZV0gPSBudWxsO1xuICAgICAgICBkZWxldGUgdGhpcy5fY29tcG9uZW50c1tjb21wb25lbnROYW1lXTtcblxuICAgICAgICB0aGlzLl91cGRhdGVDb21wb25lbnRLZXlzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCByZXNvbHV0aW9uKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHR1cmUuYmFzZVRleHR1cmUucmVzb2x1dGlvbjtcbiAgICB9XG59XG5cbi8qKlxuICogSW52aXNpYmxlQnV0dG9uXG4gKi9cblxuZXhwb3J0IGNsYXNzIEludmlzaWJsZUJ1dHRvbiBleHRlbmRzIFNwcml0ZSB7XG4gICAgcHJpdmF0ZSBfaGl0V2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIF9oaXRIZWlnaHQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIHc6IG51bWJlciwgaDogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKHgsIHksIG51bGwsIG51bGwsIG5hbWUpO1xuICAgICAgICB0aGlzLnNldFNpemUodywgaCk7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRFbmFibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYnVpbGRJbnRlcmZhY2UoKSB7XG4gICAgICAgIHRoaXMuX2FkZEhpdFJlY3QoKTtcbiAgICB9XG5cbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICBwcml2YXRlIF9hZGRIaXRSZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5faGl0V2lkdGggPiAwICYmIHRoaXMuX2hpdEhlaWdodCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuaGl0QXJlYSA9IG5ldyBQaGFzZXIuUmVjdGFuZ2xlKDAsIDAsIHRoaXMuX2hpdFdpZHRoLCB0aGlzLl9oaXRIZWlnaHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICBwdWJsaWMgc2V0U2l6ZSh3LCBoKSB7XG4gICAgICAgIHRoaXMuX2hpdFdpZHRoID0gdyB8fCAwO1xuICAgICAgICB0aGlzLl9oaXRIZWlnaHQgPSBoIHx8IDA7XG5cbiAgICAgICAgdGhpcy5fYWRkSGl0UmVjdCgpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBHcm91cFxuICovXG5leHBvcnQgY2xhc3MgR3JvdXAgZXh0ZW5kcyBQaGFzZXIuR3JvdXAge1xuICAgIHB1YmxpYyBnYW1lOiBHYW1lO1xuXG4gICAgcHJvdGVjdGVkIF9oYXNDb21wb25lbnRzOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIF9jb21wb25lbnRLZXlzOiBzdHJpbmdbXSA9IFtdO1xuICAgIHByb3RlY3RlZCBfY29tcG9uZW50czogeyBbY29tcG9uZW50TmFtZTogc3RyaW5nXTogQ29tcG9uZW50IH0gPSB7fTtcblxuICAgIHByb3RlY3RlZCBfbWVkaWF0b3I6IE1lZGlhdG9yID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSBcImRHcm91cFwiLCBhZGRUb1N0YWdlOiBib29sZWFuID0gZmFsc2UsIGNvbXBvbmVudHM6IENvbXBvbmVudFtdID0gbnVsbCwgZW5hYmxlQm9keT86IGJvb2xlYW4sIHBoeXNpY3NCb2R5VHlwZT86IG51bWJlcikge1xuICAgICAgICBzdXBlcihBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUsIG51bGwsIG5hbWUsIGFkZFRvU3RhZ2UsIGVuYWJsZUJvZHksIHBoeXNpY3NCb2R5VHlwZSk7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXQoeCwgeSk7XG5cbiAgICAgICAgaWYgKCFhZGRUb1N0YWdlKVxuICAgICAgICAgICAgdGhpcy5nYW1lLmFkZC5leGlzdGluZyh0aGlzKTtcblxuXG4gICAgICAgIGlmIChjb21wb25lbnRzKVxuICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnRzKGNvbXBvbmVudHMpO1xuICAgIH1cblxuICAgIC8vIFBoYXNlci5Hcm91cCBvdmVycmlkZXNcbiAgICAvKipcbiAgICAqIGNhbGxlZCBldmVyeSBmcmFtZVxuICAgICogaXRlcmF0ZXMgdGhlIGNvbXBvbmVudHMgbGlzdCBhbmQgY2FsbHMgY29tcG9uZW50LnVwZGF0ZSgpIG9uIGVhY2ggY29tcG9uZW50XG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICogQG92ZXJyaWRlXG4gICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBzdXBlci51cGRhdGUoKTtcbiAgICAgICAgaWYgKHRoaXMuX2hhc0NvbXBvbmVudHMpXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudHMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHJlbW92ZXMgYWxsIGNvbXBvbmVudHNcbiAgICAqIEByZXR1cm4ge1BoYXNlci5Hcm91cC5kZXN0cm95fVxuICAgICogQG92ZXJyaWRlXG4gICAgKi9cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMucmVtb3ZlTWVkaWF0b3IoKTtcbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuICAgIC8qKlxuICAgICogaW5pdGlhbGl6ZSB2YXJpYWJsZXNcbiAgICAqIGFkZCBtZWRpYXRvciwgaWYgbmVlZGVkXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7IH1cblxuICAgIC8qKlxuICAgICogYWRkIHZpc3VhbCBlbGVtZW50c1xuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHByb3RlY3RlZCBidWlsZEludGVyZmFjZSgpOiB2b2lkIHsgfVxuXG4gICAgLyoqXG4gICAgKiB1cGRhdGVzIHRoZSBpbnRlcm5hbCBsaXN0IG9mIGNvbXBvbmVudCBrZXlzIChzbyB3ZSBkb24ndCBoYXZlIHRvIGNhbGwgT2JqZWN0LmtleXMoKSBhbGwgdGhlIHRpbWUpXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHJpdmF0ZSBfdXBkYXRlQ29tcG9uZW50S2V5cygpIHtcbiAgICAgICAgdGhpcy5fY29tcG9uZW50S2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuX2NvbXBvbmVudHMpO1xuICAgICAgICB0aGlzLl9oYXNDb21wb25lbnRzID0gdGhpcy5fY29tcG9uZW50S2V5cy5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgLyoqXG4gICAgKiBhdHRhY2hlcyBhIGxpc3Qgb2YgY29tcG9uZW50cyB0byB0aGUgRGlqb24uVUlHcm91cFxuICAgICogQHBhcmFtIHtBcnJheX0gY29tcG9uZW50cyB0aGUgbGlzdCBvZiBjb21wb25lbnRzIHRvIGFkZFxuICAgICovXG4gICAgcHVibGljIGFkZENvbXBvbmVudHMgPSBmdW5jdGlvbihjb21wb25lbnRzOiBDb21wb25lbnRbXSkge1xuICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMubGVuZ3RoID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRGlqb24uVUlHcm91cCBjb21wb25lbnRzIG11c3QgYmUgYW4gYXJyYXknKTtcblxuICAgICAgICB3aGlsZSAoY29tcG9uZW50cy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoY29tcG9uZW50cy5zaGlmdCgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGF0dGFjaGVzIGEgY29tcG9uZW50IHRvIHRoZSBEaWpvbi5VSUdyb3VwXG4gICAgKiBAcGFyYW0ge2Rpam9uLkNvbXBvbmVudH0gY29tcG9uZW50IHRvIGJlIGF0dGFjaGVkXG4gICAgKi9cbiAgICBwdWJsaWMgYWRkQ29tcG9uZW50KGNvbXBvbmVudDogQ29tcG9uZW50KTogQ29tcG9uZW50IHtcbiAgICAgICAgY29tcG9uZW50LnNldE93bmVyKHRoaXMpO1xuICAgICAgICBjb21wb25lbnQuaW5pdCgpO1xuICAgICAgICBjb21wb25lbnQuYnVpbGRJbnRlcmZhY2UoKTtcblxuICAgICAgICB0aGlzLl9jb21wb25lbnRzW2NvbXBvbmVudC5uYW1lXSA9IGNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ29tcG9uZW50S2V5cygpO1xuXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBpdGVyYXRlcyB0aHJvdWdoIHRoZSBsaXN0IG9mIGNvbXBvbmVudHMgYW5kIHVwZGF0ZXMgZWFjaCBvbmVcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlQ29tcG9uZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY29tcG9uZW50S2V5cy5mb3JFYWNoKFxuICAgICAgICAgICAgY29tcG9uZW50TmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnQoY29tcG9uZW50TmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiB1cGRhdGVzIGFuIGF0dGFjaGVkIGNvbXBvbmVudCAoY2FsbHMgY29tcG9uZW50LnVwZGF0ZSgpKVxuICAgICogQHBhcmFtICB7U3RyaW5nfSBjb21wb25lbnROYW1lIHRoZSBuYW1lIG9mIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIHVwZGF0ZUNvbXBvbmVudChjb21wb25lbnROYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY29tcG9uZW50c1tjb21wb25lbnROYW1lXS51cGRhdGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHJlbW92ZXMgYWxsIHRoZSBjb21wb25lbnRzIGN1cnJlbnRseSBhdHRhY2hlZFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyByZW1vdmVBbGxDb21wb25lbnRzKCkge1xuICAgICAgICB3aGlsZSAodGhpcy5fY29tcG9uZW50S2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNvbXBvbmVudCh0aGlzLl9jb21wb25lbnRLZXlzLnBvcCgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICogcmVtb3ZlcyBhIHNwZWNpZmljIGNvbXBvbmVudFxuICAgICogQHBhcmFtICB7U3RyaW5nfSBjb21wb25lbnROYW1lIHRoZSBuYW1lIG9mIHRoZSBjb21wb25lbnQgdG8gcmVtb3ZlXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIHJlbW92ZUNvbXBvbmVudChjb21wb25lbnROYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB0aGlzLl9jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5fY29tcG9uZW50c1tjb21wb25lbnROYW1lXSA9IG51bGw7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdO1xuXG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvbXBvbmVudEtleXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHJlbW92ZXMgdGhlIG1lZGlhdG9yLCBpZiBpdCBleGlzdHNcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgcmVtb3ZlTWVkaWF0b3IoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fbWVkaWF0b3IpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tZWRpYXRvci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuX21lZGlhdG9yID0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGFkZEludGVybmFsKCk6IEdhbWVPYmplY3RGYWN0b3J5IHtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC50YXJnZXRHcm91cCA9IHRoaXM7XG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUuYWRkO1xuICAgIH1cbn1cblxuLyoqXG4gKiBUZXh0XG4gKi9cbmV4cG9ydCBjbGFzcyBUZXh0IGV4dGVuZHMgUGhhc2VyLlRleHQge1xuICAgIC8vIGNvbnN0YW50c1xuICAgIHB1YmxpYyBzdGF0aWMgREVGQVVMVF9GT05UX1NJWkU6IG51bWJlciA9IDEyO1xuICAgIHB1YmxpYyBzdGF0aWMgREVGQVVMVF9GT05UX0NPTE9SOiBzdHJpbmcgPSBcIiMwMDAwMDBcIjtcbiAgICBwdWJsaWMgc3RhdGljIERFRkFVTFRfRk9OVDogc3RyaW5nID0gXCJIZWx2ZXRpY2EgTmV1ZSwgQXJpYWxcIjtcbiAgICBwdWJsaWMgc3RhdGljIEdMT0JBTF9QQURESU5HX1g6IG51bWJlciA9IDA7XG4gICAgcHVibGljIHN0YXRpYyBHTE9CQUxfUEFERElOR19ZOiBudW1iZXIgPSAwO1xuXG4gICAgcHVibGljIGdhbWU6IEdhbWU7XG4gICAgcHVibGljIHN0eWxlOiBhbnk7XG4gICAgcHVibGljIG9uQW5pbWF0aW9uQ29tcGxldGU6IFBoYXNlci5TaWduYWwgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuXG4gICAgcHJvdGVjdGVkIF9jYW5VcGRhdGUgPSBmYWxzZTtcbiAgICBwcm90ZWN0ZWQgX3JlcGVhdFRpbWVyOiBQaGFzZXIuVGltZXJFdmVudDtcbiAgICBwcm90ZWN0ZWQgX2RlbGF5VGltZXI6IFBoYXNlci5UaW1lckV2ZW50O1xuICAgIHByb3RlY3RlZCBfbG93ZXJjYXNlVGV4dDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBfbGV0dGVyVGltZTogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBfdGV4dExlbmd0aDogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBfdGV4dFRvQW5pbWF0ZTogc3RyaW5nW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCB0ZXh0OiBzdHJpbmcgPSBcIlwiLCBmb250TmFtZT86IHN0cmluZywgZm9udFNpemU6IG51bWJlciA9IFRleHQuREVGQVVMVF9GT05UX1NJWkUsIGZvbnRDb2xvcjogc3RyaW5nID0gVGV4dC5ERUZBVUxUX0ZPTlRfQ09MT1IsIGZvbnRBbGlnbjogc3RyaW5nID0gJ2xlZnQnLCB3b3JkV3JhcDogYm9vbGVhbiA9IGZhbHNlLCB3aWR0aDogbnVtYmVyID0gMCwgcHVibGljIGxpbmVTcGFjaW5nOiBudW1iZXIgPSAwLCBzZXR0aW5nczogT2JqZWN0ID0gbnVsbCkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZSxcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5LFxuICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgIFRleHQuX2FkZFNldHRpbmdzKHtcbiAgICAgICAgICAgICAgICBmb250OiBmb250U2l6ZSArICdweCAnICsgZm9udE5hbWUsXG4gICAgICAgICAgICAgICAgZmlsbDogZm9udENvbG9yLFxuICAgICAgICAgICAgICAgIGFsaWduOiBmb250QWxpZ24sXG4gICAgICAgICAgICAgICAgd29yZFdyYXA6IHdvcmRXcmFwLFxuICAgICAgICAgICAgICAgIHdvcmRXcmFwV2lkdGg6IHdpZHRoXG4gICAgICAgICAgICB9LCBzZXR0aW5ncylcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0LnJlcGxhY2UoLycvZywgXCJcXCdcIik7XG4gICAgICAgIHRoaXMuX2xvd2VyY2FzZVRleHQgPSB0aGlzLnRleHQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdGhpcy5zZXRSZXNvbHV0aW9uKCk7XG4gICAgfVxuXG4gICAgLy8gUGhhc2VyLlRleHQgb3ZlcnJpZGVzXG4gICAgcHVibGljIHNldFRleHQodGV4dDogc3RyaW5nKTogUGhhc2VyLlRleHQge1xuICAgICAgICBzdXBlci5zZXRUZXh0KHRleHQpO1xuXG4gICAgICAgIHRoaXMuX2xvd2VyY2FzZVRleHQgPSB0aGlzLnRleHQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdGhpcy5zZXRSZXNvbHV0aW9uKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldFJlc29sdXRpb24oKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5nYW1lIHx8ICF0aGlzLmdhbWUuZGV2aWNlLmNvY29vbkpTKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5nYW1lLmRldmljZS5jb2Nvb25KUykge1xuICAgICAgICAgICAgLy8gZml4IGZvciBmb250cyBsb29raW5nIHJlYWxseSBibHVycnkgaW4gY29jb29uSlNcbiAgICAgICAgICAgIHRoaXMucmVzb2x1dGlvbiA9IHRoaXMuZ2FtZS5yZXNvbHV0aW9uICogdGhpcy5nYW1lLnJlc29sdXRpb247XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcdFx0XG4gICAgLyoqXG4gICAgKiBzdGFydHMgdGhlIHRleHQgYW5pbWF0aW9uXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIHByb3RlY3RlZCBfc3RhcnRUZXh0QW5pbWF0aW9uKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9jYW5VcGRhdGUgPSB0cnVlO1xuICAgICAgICB0aGlzLl9yZXBlYXRUaW1lciA9IHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5yZXBlYXQodGhpcy5fbGV0dGVyVGltZSAqIDEwMCwgdGhpcy5fdGV4dExlbmd0aCwgdGhpcy5fdXBkYXRlVGV4dEFuaW1hdGlvbiwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF91cGRhdGVUZXh0QW5pbWF0aW9uKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2NhblVwZGF0ZSB8fCAhdGhpcy5fdGV4dFRvQW5pbWF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuX3RleHRMZW5ndGggLSB0aGlzLl90ZXh0VG9BbmltYXRlLmxlbmd0aDtcbiAgICAgICAgdGhpcy5hZGRDb2xvcih0aGlzLnN0eWxlLmZpbGwsIGluZGV4KTtcbiAgICAgICAgdGhpcy5hZGRDb2xvcigncmdiYSgwLDAsMCwwKScsIGluZGV4ICsgMSk7XG4gICAgICAgIHRoaXMuX3RleHRUb0FuaW1hdGUuc2hpZnQoKTtcblxuICAgICAgICBpZiAodGhpcy5fdGV4dFRvQW5pbWF0ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMub25BbmltYXRpb25Db21wbGV0ZS5kaXNwYXRjaCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICAvKipcbiAgICAqIHNldHMgdGhlIGNvbG9yIG9mIHRoZSBlbnRpcmUgdGV4dFxuICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbG9yIGNzcyBjb2xvciBzdHJpbmcgKHN1Y2ggYXMgXCIjZmYwMDAwXCIpXG4gICAgKiBAcmV0dXJuIHtEaWpvbi5VSVRleHQuaGlnaGxpZ2h0UGhyYXNlfSBjYWxscyB0aGUgaGlnaGxpZ2h0UGhyYXNlIG1ldGhvZCBhbmQgXCJoaWdobGlnaHRzXCIgdGhlIGVudGlyZSB0ZXh0IHN0cmluZ1xuICAgICovXG4gICAgcHVibGljIHNldENvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGlnaGxpZ2h0UGhyYXNlKHRoaXMudGV4dCwgY29sb3IsIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHJlc2V0cyB0aGUgY29sb3IgdG8gdGhlIG9yaWdpbmFsIGZpbGwgY29sb3JcbiAgICAqIEByZXR1cm4ge0Rpam9uLlVJVGV4dC5oaWdobGlnaHRQaHJhc2V9IGNhbGxzIHRoZSBoaWdobGlnaHRQaHJhc2UgbWV0aG9kIGFuZCBcImhpZ2hsaWdodHNcIiB0aGUgZW50aXJlIHRleHQgc3RyaW5nXG4gICAgKi9cbiAgICBwdWJsaWMgcmVzZXRDb2xvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGlnaGxpZ2h0UGhyYXNlKHRoaXMudGV4dCwgdGhpcy5zdHlsZS5maWxsLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBjaGFuZ2VzIHRoZSBjb2xvdXIgb2YgYSBwb3J0aW9uIG9mIHRoZSB0ZXh0XG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IHBocmFzZSAgICAgICAgdGhlIHBocmFzZSB3aXRoaW4gdGhlIHRleHQgdG8gY2hhbmdlXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGNvbG9yICAgICAgICAgY3NzIGNvbG9yIHN0cmluZyAoc3VjaCBhcyBcIiNmZjAwMDBcIilcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IFtjYXNlU2Vuc2l0aXZlID0gZmFsc2VdIHdoZXRoZXIgdGhlIHNlYXJjaCBmb3IgdGhlIHBocmFzZSB3aXRoaW4gdGhpcyB0ZXh0IHNob3VsZCBiZSBjYXNlIHNlbnNpdGl2ZVxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyBoaWdobGlnaHRQaHJhc2UocGhyYXNlOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcsIGNhc2VTZW5zaXRpdmU6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgdGV4dCA9IGNhc2VTZW5zaXRpdmUgPyB0aGlzLnRleHQgOiB0aGlzLl9sb3dlcmNhc2VUZXh0O1xuXG4gICAgICAgIHBocmFzZSA9IGNhc2VTZW5zaXRpdmUgPyBwaHJhc2UgOiBwaHJhc2UudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBsZXQgbGVuID0gcGhyYXNlLmxlbmd0aDtcblxuICAgICAgICBsZXQgc3RhcnRJbmRleCA9IHRleHQuaW5kZXhPZihwaHJhc2UpO1xuICAgICAgICBsZXQgZW5kSW5kZXggPSBzdGFydEluZGV4ICsgbGVuO1xuXG4gICAgICAgIHdoaWxlIChzdGFydEluZGV4IDw9IGVuZEluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLmFkZENvbG9yKGNvbG9yLCBzdGFydEluZGV4KTtcbiAgICAgICAgICAgIHN0YXJ0SW5kZXgrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRkQ29sb3IodGhpcy5zdHlsZS5maWxsLCBlbmRJbmRleCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAqIGFuaW1hdGVzIHRoZSB0ZXh0IGluIGJ5IHJldmVhbGluZyBlYWNoIGNoYXJhY3RlciBpbiBzZXF1ZW5jZVxuICAgICogQHBhcmFtICB7TnVtYmVyfSBbbGV0dGVyVGltZSA9IDAuMV0gIHRoZSB0aW1lIChpbiBzZWNvbmRzKSBiZXR3ZWVuIGVhY2ggY2hhcmFjdGVyXG4gICAgKiBAcGFyYW0gIHtpbnR9IFtkZWxheSA9IDBdICAgICAgICAgICAgdGhlIGRlbGF5IGJlZm9yZSBzdGFydGluZyB0aGUgYW5pbWF0aW9uXG4gICAgKi9cbiAgICBwdWJsaWMgYW5pbWF0ZShsZXR0ZXJUaW1lOiBudW1iZXIgPSAwLjEsIGRlbGF5OiBudW1iZXIgPSAwKSB7XG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5yZW1vdmUodGhpcy5fZGVsYXlUaW1lcik7XG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5yZW1vdmUodGhpcy5fcmVwZWF0VGltZXIpO1xuXG4gICAgICAgIHRoaXMuX2xldHRlclRpbWUgPSBsZXR0ZXJUaW1lO1xuICAgICAgICB0aGlzLl90ZXh0TGVuZ3RoID0gdGhpcy50ZXh0Lmxlbmd0aDtcbiAgICAgICAgdGhpcy5fdGV4dFRvQW5pbWF0ZSA9IHRoaXMudGV4dC5zcGxpdCgnJyk7XG5cbiAgICAgICAgdmFyIHN0YXJ0SW5kZXggPSAwO1xuICAgICAgICB2YXIgZW5kSW5kZXggPSB0aGlzLl90ZXh0TGVuZ3RoO1xuXG4gICAgICAgIHdoaWxlIChzdGFydEluZGV4IDw9IGVuZEluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLmFkZENvbG9yKCdyZ2JhKDAsMCwwLDApJywgc3RhcnRJbmRleCk7XG4gICAgICAgICAgICBzdGFydEluZGV4Kys7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kZWxheVRpbWVyID0gdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmFkZChkZWxheSAqIFBoYXNlci5UaW1lci5TRUNPTkQsIHRoaXMuX3N0YXJ0VGV4dEFuaW1hdGlvbiwgdGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBzdG9wcyB0aGUgdGV4dCBhbmltYXRpb24gYW5kIGNsZWFycyB0aGUgdGltZXJzXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIHN0b3BBbmltYXRpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5fY2FuVXBkYXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3RleHRUb0FuaW1hdGUgPSBudWxsO1xuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMucmVtb3ZlKHRoaXMuX2RlbGF5VGltZXIpO1xuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMucmVtb3ZlKHRoaXMuX3JlcGVhdFRpbWVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHJvdW5kcyB0aGUgcG9zaXRpb25cbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgcm91bmRQaXhlbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnNldChNYXRoLnJvdW5kKHRoaXMueCksIE1hdGgucm91bmQodGhpcy55KSk7XG4gICAgfVxuXG4gICAgLy8gc3RhdGljIG1ldGhvZHNcbiAgICBwcml2YXRlIHN0YXRpYyBfYWRkU2V0dGluZ3Mob2JqOiBPYmplY3QsIHNldHRpbmdzOiBPYmplY3QpOiBPYmplY3Qge1xuICAgICAgICBpZiAoIXNldHRpbmdzKVxuICAgICAgICAgICAgcmV0dXJuIG9iajtcblxuICAgICAgICBmb3IgKHZhciBwcm9wIGluIHNldHRpbmdzKSB7XG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgICAgICBvYmpbcHJvcF0gPSBzZXR0aW5nc1twcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgZ2V0IHJlYWxIZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGUueSAqIHRoaXMudGV4dHVyZS5mcmFtZS5oZWlnaHQgLyB0aGlzLmdhbWUucmVzb2x1dGlvbjtcbiAgICB9XG5cbiAgICBnZXQgcmVhbFdpZHRoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjYWxlLnggKiB0aGlzLnRleHR1cmUuZnJhbWUud2lkdGggLyB0aGlzLmdhbWUucmVzb2x1dGlvbjtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xuICAgIHB1YmxpYyBnYW1lOiBHYW1lO1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIG93bmVyOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lO1xuICAgICAgICB0aGlzLm5hbWUgPSAnQ29tcG9uZW50JztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0T3duZXIob3duZXI6IFNwcml0ZSB8IEdyb3VwKTogdm9pZCB7XG4gICAgICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGluaXRpYWxpemUgdGhlIGNvbXBvbmVudCwgc2V0IHVwIHZhcmlhYmxlc1xuICAgICogY2FsbGVkIGJ5IHRoZSBvd25lciBmaXJzdCBhZnRlciB0aGUgY29tcG9uZW50IGlzIGF0dGFjaGVkXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIGluaXQoKSB7IH1cblxuICAgIC8qKlxuICAgICogYWRkIHZpc3VhbCBlbGVtZW50c1xuICAgICogY2FsbGVkIGJ5IHRoZSBvd25lciBhZnRlciBpdCBjYWxscyB0aGlzIGluaXQgbWV0aG9kXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIGJ1aWxkSW50ZXJmYWNlKCkgeyB9XG5cbiAgICAvKipcbiAgICAqIGNhbGxlZCBieSB0aGUgb3duZXIgaW4gaXRzIHVwZGF0ZSBjeWNsZSwgZXZlcnkgZnJhbWVcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlKCkgeyB9XG5cbiAgICAvKipcbiAgICAqIHJlbW92ZSBhbnkgdmlzdWFsIGVsZW1lbnRzIC8gc2lnbmFscyBhZGRlZFxuICAgICogb3duZXIgY2FsbHMgdGhpcyBtZXRob2QgaW4gaXRzIG93biBkZXN0cm95IG1ldGhvZFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyBkZXN0cm95KCkgeyB9XG59XG5cbmV4cG9ydCBjbGFzcyBOaW5lU2xpY2VJbWFnZSBleHRlbmRzIEdyb3VwIHtcbiAgICBwcml2YXRlIF9fd2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIF9faGVpZ2h0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfc2l6ZTogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBfZGlzcGxheUxheWVyOiBQaGFzZXIuR3JvdXA7XG4gICAgcHJpdmF0ZSBfaW5wdXRMYXllcjogUGhhc2VyLkdyb3VwO1xuXG4gICAgcHVibGljIHRsOiBQaGFzZXIuSW1hZ2U7XG4gICAgcHVibGljIHQ6IFBoYXNlci5UaWxlU3ByaXRlO1xuICAgIHB1YmxpYyB0cjogUGhhc2VyLkltYWdlO1xuICAgIHB1YmxpYyByOiBQaGFzZXIuVGlsZVNwcml0ZTtcbiAgICBwdWJsaWMgYnI6IFBoYXNlci5JbWFnZTtcbiAgICBwdWJsaWMgYjogUGhhc2VyLlRpbGVTcHJpdGU7XG4gICAgcHVibGljIGJsOiBQaGFzZXIuSW1hZ2U7XG4gICAgcHVibGljIGw6IFBoYXNlci5UaWxlU3ByaXRlO1xuICAgIHB1YmxpYyB0aWxlOiBQaGFzZXIuVGlsZVNwcml0ZTtcblxuICAgIHByaXZhdGUgX2ludGVyYWN0aXZlQmFja2luZzogUGhhc2VyLkltYWdlID0gbnVsbDtcbiAgICBwcml2YXRlIF9pbnB1dEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgX2N1cnJlbnRCb3VuZHM6IFBJWEkuUmVjdGFuZ2xlID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcHVibGljIGtleTogc3RyaW5nLCBwdWJsaWMgdGV4dHVyZVBhdGg6IHN0cmluZywgcHVibGljIGZpbGxNaWRkbGU6IGJvb2xlYW4gPSB0cnVlLCBwdWJsaWMgdG9wSGVpZ2h0PzogbnVtYmVyLCBwdWJsaWMgcmlnaHRXaWR0aD86IG51bWJlciwgcHVibGljIGJvdHRvbUhlaWdodD86IG51bWJlciwgcHVibGljIGxlZnRXaWR0aD86IG51bWJlcikge1xuICAgICAgICBzdXBlcih4LCB5KTtcblxuICAgICAgICB0aGlzLl9fd2lkdGggPSBNYXRoLnJvdW5kKHdpZHRoKTtcbiAgICAgICAgdGhpcy5fX2hlaWdodCA9IE1hdGgucm91bmQoaGVpZ2h0KTtcblxuICAgICAgICB0aGlzLl9idWlsZCgpO1xuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKDEwLCB0aGlzLl9mbGF0dGVuLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9idWlsZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faW5wdXRMYXllciA9IHRoaXMuYWRkKHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKSk7XG4gICAgICAgIHRoaXMuX2Rpc3BsYXlMYXllciA9IHRoaXMuYWRkKHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKSk7XG5cbiAgICAgICAgdGhpcy50bCA9IDxQaGFzZXIuSW1hZ2U+dGhpcy5fZGlzcGxheUxheWVyLmFkZCh0aGlzLmdhbWUuYWRkLmltYWdlKDAsIDAsIHRoaXMua2V5LCB0aGlzLnRleHR1cmVQYXRoICsgJy90bCcpKTtcblxuICAgICAgICB0aGlzLnRyID0gPFBoYXNlci5JbWFnZT50aGlzLl9kaXNwbGF5TGF5ZXIuYWRkKHRoaXMuZ2FtZS5hZGQuaW1hZ2UodGhpcy5fX3dpZHRoLCAwLCB0aGlzLmtleSwgdGhpcy50ZXh0dXJlUGF0aCArICcvdHInKSk7XG5cbiAgICAgICAgdGhpcy50ID0gPFBoYXNlci5UaWxlU3ByaXRlPnRoaXMuX2Rpc3BsYXlMYXllci5hZGQodGhpcy5nYW1lLmFkZC50aWxlU3ByaXRlKHRoaXMudGwuZ2V0Qm91bmRzKCkud2lkdGgsIDAsIHRoaXMuX193aWR0aCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkud2lkdGggLSB0aGlzLnRyLmdldEJvdW5kcygpLndpZHRoLCB0aGlzLnRvcEhlaWdodCB8fCB0aGlzLnRsLmdldEJvdW5kcygpLmhlaWdodCwgdGhpcy5rZXksIHRoaXMudGV4dHVyZVBhdGggKyAnL3QnKSk7XG5cbiAgICAgICAgdGhpcy5sID0gPFBoYXNlci5UaWxlU3ByaXRlPnRoaXMuX2Rpc3BsYXlMYXllci5hZGQodGhpcy5nYW1lLmFkZC50aWxlU3ByaXRlKDAsIHRoaXMudGwuZ2V0Qm91bmRzKCkuaGVpZ2h0LCB0aGlzLmxlZnRXaWR0aCB8fCB0aGlzLnRsLmdldEJvdW5kcygpLndpZHRoLCAxMDAsIHRoaXMua2V5LCB0aGlzLnRleHR1cmVQYXRoICsgJy9sJykpO1xuXG4gICAgICAgIHRoaXMuYmwgPSA8UGhhc2VyLkltYWdlPnRoaXMuX2Rpc3BsYXlMYXllci5hZGQodGhpcy5nYW1lLmFkZC5pbWFnZSgwLCB0aGlzLl9faGVpZ2h0LCB0aGlzLmtleSwgdGhpcy50ZXh0dXJlUGF0aCArICcvYmwnKSk7XG5cbiAgICAgICAgdGhpcy5sLmhlaWdodCA9IHRoaXMuX19oZWlnaHQgLSB0aGlzLnRsLmdldEJvdW5kcygpLmhlaWdodCAtIHRoaXMuYmwuZ2V0Qm91bmRzKCkuaGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuYiA9IDxQaGFzZXIuVGlsZVNwcml0ZT50aGlzLl9kaXNwbGF5TGF5ZXIuYWRkKHRoaXMuZ2FtZS5hZGQudGlsZVNwcml0ZSh0aGlzLmJsLmdldEJvdW5kcygpLndpZHRoLCB0aGlzLl9faGVpZ2h0LCAxMDAsIHRoaXMuYm90dG9tSGVpZ2h0IHx8IHRoaXMuYmwuZ2V0Qm91bmRzKCkuaGVpZ2h0LCB0aGlzLmtleSwgdGhpcy50ZXh0dXJlUGF0aCArICcvYicpKTtcblxuICAgICAgICB0aGlzLmJyID0gPFBoYXNlci5JbWFnZT50aGlzLl9kaXNwbGF5TGF5ZXIuYWRkKHRoaXMuZ2FtZS5hZGQuaW1hZ2UodGhpcy5fX3dpZHRoLCB0aGlzLl9faGVpZ2h0LCB0aGlzLmtleSwgdGhpcy50ZXh0dXJlUGF0aCArICcvYnInKSk7XG5cbiAgICAgICAgdGhpcy5iLndpZHRoID0gdGhpcy5fX3dpZHRoIC0gdGhpcy5ibC5nZXRCb3VuZHMoKS53aWR0aCAtIHRoaXMuYnIuZ2V0Qm91bmRzKCkud2lkdGg7XG4gICAgICAgIHRoaXMuciA9IDxQaGFzZXIuVGlsZVNwcml0ZT50aGlzLl9kaXNwbGF5TGF5ZXIuYWRkKHRoaXMuZ2FtZS5hZGQudGlsZVNwcml0ZSh0aGlzLl9fd2lkdGgsIHRoaXMudHIuZ2V0Qm91bmRzKCkuaGVpZ2h0LCB0aGlzLnJpZ2h0V2lkdGggfHwgdGhpcy50ci5nZXRCb3VuZHMoKS53aWR0aCwgdGhpcy5fX2hlaWdodCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkuaGVpZ2h0IC0gdGhpcy5ici5nZXRCb3VuZHMoKS5oZWlnaHQsIHRoaXMua2V5LCB0aGlzLnRleHR1cmVQYXRoICsgJy9yJykpO1xuXG4gICAgICAgIHRoaXMudHIuc2V0UGl2b3QoJ3RyJyk7XG4gICAgICAgIHRoaXMuci5zZXRQaXZvdCgndHInKTtcblxuICAgICAgICB0aGlzLmJyLnNldFBpdm90KCdicicpO1xuICAgICAgICB0aGlzLmIuc2V0UGl2b3QoJ2JsJyk7XG4gICAgICAgIHRoaXMuYmwuc2V0UGl2b3QoJ2JsJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuZmlsbE1pZGRsZSkge1xuICAgICAgICAgICAgdGhpcy50aWxlID0gPFBoYXNlci5UaWxlU3ByaXRlPnRoaXMuX2Rpc3BsYXlMYXllci5hZGQodGhpcy5nYW1lLmFkZC50aWxlU3ByaXRlKHRoaXMudGwuZ2V0Qm91bmRzKCkud2lkdGggLSAxLCB0aGlzLnRsLmdldEJvdW5kcygpLmhlaWdodCAtIDEsIHRoaXMuX193aWR0aCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkud2lkdGggLSB0aGlzLnRyLmdldEJvdW5kcygpLndpZHRoICsgMiwgdGhpcy5fX2hlaWdodCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkuaGVpZ2h0IC0gdGhpcy5ici5nZXRCb3VuZHMoKS5oZWlnaHQgKyA0LCB0aGlzLmtleSwgdGhpcy50ZXh0dXJlUGF0aCArICcvdGlsZScpKTtcbiAgICAgICAgICAgIHRoaXMuc2VuZFRvQmFjayh0aGlzLnRpbGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYWRkSW50ZXJhY3RpdmVCYWNraW5nKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBnZnggPSB0aGlzLmdhbWUuYWRkLmdyYXBoaWNzKCk7XG4gICAgICAgIGdmeC5iZWdpbkZpbGwoMHhGRjAwMDAsIDApO1xuICAgICAgICBnZnguZHJhd1JlY3QodGhpcy54LCB0aGlzLnksIHRoaXMuX193aWR0aCwgdGhpcy5fX2hlaWdodCk7XG4gICAgICAgIGdmeC5lbmRGaWxsKCk7XG5cbiAgICAgICAgdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nID0gdGhpcy5faW5wdXRMYXllci5hZGQodGhpcy5nYW1lLmFkZC5pbWFnZSgwLCAwLCBnZnguZ2VuZXJhdGVUZXh0dXJlKCkpKTtcblxuICAgICAgICB0aGlzLl9pbnRlcmFjdGl2ZUJhY2tpbmcuaW5wdXRFbmFibGVkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmdhbWUud29ybGQucmVtb3ZlKGdmeCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2V0U2l6ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fdW5mbGF0dGVuKCk7XG5cbiAgICAgICAgdGhpcy50LndpZHRoID0gdGhpcy5iLndpZHRoID0gdGhpcy5fX3dpZHRoIC0gdGhpcy50bC5nZXRCb3VuZHMoKS53aWR0aCAtIHRoaXMudHIuZ2V0Qm91bmRzKCkud2lkdGg7XG4gICAgICAgIHRoaXMuci54ID0gdGhpcy50ci54ID0gdGhpcy5ici54ID0gdGhpcy5fX3dpZHRoO1xuICAgICAgICB0aGlzLmwuaGVpZ2h0ID0gdGhpcy5yLmhlaWdodCA9IHRoaXMuX19oZWlnaHQgLSB0aGlzLnRyLmdldEJvdW5kcygpLmhlaWdodCAtIHRoaXMuYmwuZ2V0Qm91bmRzKCkuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJsLnkgPSB0aGlzLmIueSA9IHRoaXMuYnIueSA9IHRoaXMuX19oZWlnaHQ7XG5cbiAgICAgICAgaWYgKHRoaXMuZmlsbE1pZGRsZSkge1xuICAgICAgICAgICAgdGhpcy50aWxlLndpZHRoID0gdGhpcy5fX3dpZHRoIC0gdGhpcy50ci5nZXRCb3VuZHMoKS53aWR0aCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkud2lkdGggKyA0XG4gICAgICAgICAgICB0aGlzLnRpbGUuaGVpZ2h0ID0gdGhpcy5fX2hlaWdodCAtIHRoaXMudGwuZ2V0Qm91bmRzKCkuaGVpZ2h0IC0gdGhpcy5ibC5nZXRCb3VuZHMoKS5oZWlnaHQgKyA0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nLndpZHRoID0gdGhpcy5fX3dpZHRoO1xuICAgICAgICB0aGlzLl9pbnRlcmFjdGl2ZUJhY2tpbmcuaGVpZ2h0ID0gdGhpcy5fX2hlaWdodDtcblxuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKDEwLCB0aGlzLl9mbGF0dGVuLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9hZGRJbnB1dCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnRlcmFjdGl2ZUJhY2tpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZEludGVyYWN0aXZlQmFja2luZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVtb3ZlSW5wdXQoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nLmlucHV0RW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3VuZmxhdHRlbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZGlzcGxheUxheWVyLmNhY2hlQXNCaXRtYXAgPSBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2ZsYXR0ZW4oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2Rpc3BsYXlMYXllci5jYWNoZUFzQml0bWFwID0gdHJ1ZTsvL3RoaXMuZ2FtZS5yZW5kZXJUeXBlID09PSBQaGFzZXIuV0VCR0w7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpbnB1dEVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faW5wdXRFbmFibGVkID0gdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLl9pbnB1dEVuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZElucHV0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVJbnB1dCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBldmVudHMoKTogUGhhc2VyLkV2ZW50cyB7XG4gICAgICAgIGlmICghdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nIHx8ICF0aGlzLl9pbnRlcmFjdGl2ZUJhY2tpbmcuaW5wdXRFbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nLmV2ZW50cztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlucHV0KCk6IFBoYXNlci5JbnB1dEhhbmRsZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5faW50ZXJhY3RpdmVCYWNraW5nLmlucHV0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaFNpemUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9fd2lkdGggPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fc2V0U2l6ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdlNpemUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9faGVpZ2h0ID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX3NldFNpemUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGhTaXplKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fd2lkdGg7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB2U2l6ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fX2hlaWdodDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0U2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl9fd2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5fX2hlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5fc2V0U2l6ZSgpO1xuICAgIH1cbn0iLCJpbXBvcnQge0lCcm93c2VyfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSBcIi4vYXBwbGljYXRpb25cIjtcbmltcG9ydCB7R2FtZX0gZnJvbSBcIi4vY29yZVwiO1xuaW1wb3J0IHtUZXh0fSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5cbmV4cG9ydCBjbGFzcyBEZXZpY2Uge1xuICAgIHB1YmxpYyBzdGF0aWMgSU9TOiBzdHJpbmcgPSAnaU9TJztcbiAgICBwdWJsaWMgc3RhdGljIEFORFJPSUQ6IHN0cmluZyA9ICdhbmRyb2lkJztcbiAgICBwdWJsaWMgc3RhdGljIFVOS05PV046IHN0cmluZyA9ICd1bmtub3duJztcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IG1vYmlsZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIERldmljZS5tb2JpbGVPUyAhPT0gRGV2aWNlLlVOS05PV047XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGNvY29vbigpOmJvb2xlYW57XG4gICAgICAgIHJldHVybiAodHlwZW9mIG5hdmlnYXRvclsnaXNDb2Nvb25KUyddICE9PSBcInVuZGVmaW5lZFwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBtb2JpbGVPUygpIHtcbiAgICAgICAgY29uc3QgdXNlckFnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgfHwgd2luZG93Lm5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93WydvcGVyYSddO1xuICAgICAgICBpZiAodXNlckFnZW50Lm1hdGNoKC9pUGFkL2kpIHx8IHVzZXJBZ2VudC5tYXRjaCgvaVBob25lL2kpIHx8IHVzZXJBZ2VudC5tYXRjaCgvaVBvZC9pKSkge1xuICAgICAgICAgICAgcmV0dXJuIERldmljZS5JT1M7XG4gICAgICAgIH0gZWxzZSBpZiAodXNlckFnZW50Lm1hdGNoKC9BbmRyb2lkL2kpKSB7XG4gICAgICAgICAgICByZXR1cm4gRGV2aWNlLkFORFJPSUQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gRGV2aWNlLlVOS05PV047XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBicm93c2VyKCk6IElCcm93c2VyIHtcbiAgICAgICAgY29uc3QgdWE6IHN0cmluZyA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpcmVmb3g6IHVhLmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xLFxuICAgICAgICAgICAgaWU6IHVhLmluZGV4T2YoJ2llJykgPiAtMSxcbiAgICAgICAgICAgIHNhZmFyaTogdWEuaW5kZXhPZignc2FmYXJpJykgPiAtMSxcbiAgICAgICAgICAgIGNocm9tZTogdWEuaW5kZXhPZignY2hyb21lJykgPiAtMSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHBpeGVsUmF0aW8oKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygd2luZG93LmRldmljZVBpeGVsUmF0aW8gIT09IHVuZGVmaW5lZCA/IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIDogMTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBjdXN0b21QaXhlbFJhdGlvKCkge1xuICAgICAgICByZXR1cm4gRGV2aWNlLnBpeGVsUmF0aW8gPj0gMS41ID8gMiA6IDE7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGV4dHVyZXMge1xuICAgIHByaXZhdGUgc3RhdGljIGdldCBnYW1lKCk6IFBoYXNlci5HYW1lIHtcbiAgICAgICAgcmV0dXJuIEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVjdCh3aWR0aDogbnVtYmVyID0gMTAwLCBoZWlnaHQ6IG51bWJlciA9IDEwMCwgY29sb3I6IG51bWJlciA9IDB4ZmZmZmZmLCBhbHBoYTogbnVtYmVyID0gMSk6IFBJWEkuVGV4dHVyZSB7XG4gICAgICAgIGNvbnN0IGdmeCA9IFRleHR1cmVzLmdhbWUuYWRkLmdyYXBoaWNzKDAsIDApO1xuICAgICAgICBnZnguYmVnaW5GaWxsKGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdmeC5kcmF3UmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICBjb25zdCB0ZXh0dXJlID0gZ2Z4LmdlbmVyYXRlVGV4dHVyZSgpO1xuICAgICAgICBUZXh0dXJlcy5nYW1lLndvcmxkLnJlbW92ZShnZngpO1xuXG4gICAgICAgIHJldHVybiB0ZXh0dXJlO1xuICAgIH1cblxuICAgIHN0YXRpYyByb3VuZGVkUmVjdCh3aWR0aDogbnVtYmVyID0gMTAwLCBoZWlnaHQ6IG51bWJlciA9IDEwMCwgcmFkaXVzOiBudW1iZXIgPSAxMCwgY29sb3I6IG51bWJlciA9IDB4ZmZmZmZmLCBhbHBoYTogbnVtYmVyID0gMSk6IFBJWEkuVGV4dHVyZSB7XG4gICAgICAgIGNvbnN0IGdmeCA9IFRleHR1cmVzLmdhbWUuYWRkLmdyYXBoaWNzKDAsIDApO1xuICAgICAgICBnZnguYmVnaW5GaWxsKGNvbG9yLCBhbHBoYSk7XG4gICAgICAgIGdmeC5kcmF3Um91bmRlZFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKTtcblxuICAgICAgICBjb25zdCB0ZXh0dXJlID0gZ2Z4LmdlbmVyYXRlVGV4dHVyZSgpO1xuICAgICAgICBUZXh0dXJlcy5nYW1lLndvcmxkLnJlbW92ZShnZngpO1xuXG4gICAgICAgIHJldHVybiB0ZXh0dXJlO1xuICAgIH1cblxuICAgIHN0YXRpYyBzcXVhcmUoc2l6ZTogbnVtYmVyID0gMTAwLCBjb2xvcjogbnVtYmVyID0gMHhmZmZmZmYsIGFscGhhOiBudW1iZXIgPSAxKTogUElYSS5UZXh0dXJlIHtcbiAgICAgICAgcmV0dXJuIFRleHR1cmVzLnJlY3Qoc2l6ZSwgc2l6ZSwgY29sb3IsIGFscGhhKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2lyY2xlKGRpYW1ldGVyOiBudW1iZXIgPSAxMDAsIGNvbG9yOiBudW1iZXIgPSAweGZmZmZmZiwgYWxwaGE6IG51bWJlciA9IDEpOiBQSVhJLlRleHR1cmUge1xuICAgICAgICBjb25zdCBnZnggPSBUZXh0dXJlcy5nYW1lLmFkZC5ncmFwaGljcygwLCAwKTtcbiAgICAgICAgZ2Z4LmJlZ2luRmlsbChjb2xvciwgYWxwaGEpO1xuICAgICAgICBnZnguZHJhd0NpcmNsZSgwLCAwLCBkaWFtZXRlcik7XG5cbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IGdmeC5nZW5lcmF0ZVRleHR1cmUoKTtcbiAgICAgICAgVGV4dHVyZXMuZ2FtZS53b3JsZC5yZW1vdmUoZ2Z4KTtcblxuICAgICAgICByZXR1cm4gdGV4dHVyZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZWxsaXBzZSh3aWR0aDogbnVtYmVyID0gNTAsIGhlaWdodDogbnVtYmVyID0gMTAwLCBjb2xvcjogbnVtYmVyID0gMHhmZmZmZmYsIGFscGhhOiBudW1iZXIgPSAxKTogUElYSS5UZXh0dXJlIHtcbiAgICAgICAgY29uc3QgZ2Z4ID0gVGV4dHVyZXMuZ2FtZS5hZGQuZ3JhcGhpY3MoMCwgMCk7XG4gICAgICAgIGdmeC5iZWdpbkZpbGwoY29sb3IsIGFscGhhKTtcbiAgICAgICAgZ2Z4LmRyYXdFbGxpcHNlKDAsIDAsIHdpZHRoICogMC41LCBoZWlnaHQgKiAwLjUpO1xuXG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBnZnguZ2VuZXJhdGVUZXh0dXJlKCk7XG4gICAgICAgIFRleHR1cmVzLmdhbWUud29ybGQucmVtb3ZlKGdmeCk7XG5cbiAgICAgICAgcmV0dXJuIHRleHR1cmU7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGxhY2Vob2xkZXJzIHtcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgZ2FtZSgpOiBQaGFzZXIuR2FtZSB7XG4gICAgICAgIHJldHVybiBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWU7XG4gICAgfVxuXG4gICAgc3RhdGljIGltYWdlKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIHRleHR1cmU6IGFueSk6IFBoYXNlci5JbWFnZSB7XG4gICAgICAgIHJldHVybiBuZXcgUGhhc2VyLkltYWdlKFBsYWNlaG9sZGVycy5nYW1lLCB4LCB5LCB0ZXh0dXJlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYnV0dG9uKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIHdpZHRoOiBudW1iZXIgPSAxMDAsIGhlaWdodDogbnVtYmVyID0gNTAsIHRleHQ6IHN0cmluZyA9ICdidXR0b24nLCBjYWxsYmFjazogRnVuY3Rpb24gPSBudWxsLCBjYWxsYmFja0NvbnRleHQ6IGFueSA9IG51bGwsIGRlZmF1bHRDb2xvcjogbnVtYmVyID0gMHhmZmZmZmYsIG92ZXJDb2xvcjogbnVtYmVyID0gMHhmZjAwMDAsIGRvd25Db2xvcjogbnVtYmVyID0gMHgwMGZmMDApOiBQaGFzZXIuU3ByaXRlIHtcbiAgICAgICAgY29uc3Qgc3ByaXRlOiBQaGFzZXIuU3ByaXRlID0gbmV3IFBoYXNlci5TcHJpdGUoUGxhY2Vob2xkZXJzLmdhbWUsIHgsIHkpO1xuXG4gICAgICAgIGNvbnN0IHVwSW1hZ2U6IFBoYXNlci5JbWFnZSA9IFBsYWNlaG9sZGVycy5pbWFnZSgwLCAwLCBUZXh0dXJlcy5yb3VuZGVkUmVjdCh3aWR0aCwgaGVpZ2h0LCAxMCwgZGVmYXVsdENvbG9yKSk7XG4gICAgICAgIGNvbnN0IG92ZXJJbWFnZTogUGhhc2VyLkltYWdlID0gUGxhY2Vob2xkZXJzLmltYWdlKDAsIDAsIFRleHR1cmVzLnJvdW5kZWRSZWN0KHdpZHRoLCBoZWlnaHQsIDEwLCBvdmVyQ29sb3IpKTtcbiAgICAgICAgY29uc3QgZG93bkltYWdlOiBQaGFzZXIuSW1hZ2UgPSBQbGFjZWhvbGRlcnMuaW1hZ2UoMCwgMCwgVGV4dHVyZXMucm91bmRlZFJlY3Qod2lkdGgsIGhlaWdodCwgMTAsIGRvd25Db2xvcikpO1xuICAgICAgICBjb25zdCB0ZXh0SW5zdGFuY2U6IFRleHQgPSBuZXcgVGV4dCh3aWR0aCAqIDAuNSwgaGVpZ2h0ICogMC41NSwgdGV4dCwgJ0FyaWFsJywgaGVpZ2h0ICogMC42LCAnIzAwMDAwMCcpO1xuICAgICAgICB0ZXh0SW5zdGFuY2UuY2VudGVyUGl2b3QoKTtcblxuICAgICAgICBvdmVySW1hZ2UudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICBkb3duSW1hZ2UudmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgICAgIHNwcml0ZS5hZGRDaGlsZCh1cEltYWdlKTtcbiAgICAgICAgc3ByaXRlLmFkZENoaWxkKG92ZXJJbWFnZSk7XG4gICAgICAgIHNwcml0ZS5hZGRDaGlsZChkb3duSW1hZ2UpO1xuICAgICAgICBzcHJpdGUuYWRkQ2hpbGQodGV4dEluc3RhbmNlKTtcblxuICAgICAgICBzcHJpdGUuaW5wdXRFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgc3ByaXRlLmlucHV0LnVzZUhhbmRDdXJzb3IgPSB0cnVlO1xuXG4gICAgICAgIHNwcml0ZS5ldmVudHMub25JbnB1dFVwLmFkZCgoKSA9PiB7XG4gICAgICAgICAgICBkb3duSW1hZ2UudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgb3ZlckltYWdlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHVwSW1hZ2UudmlzaWJsZSA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoY2FsbGJhY2tDb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3ByaXRlLmV2ZW50cy5vbklucHV0RG93bi5hZGQoKCkgPT4ge1xuICAgICAgICAgICAgZG93bkltYWdlLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgb3ZlckltYWdlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHVwSW1hZ2UudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICBzcHJpdGUuZXZlbnRzLm9uSW5wdXRPdmVyLmFkZCgoKSA9PiB7XG4gICAgICAgICAgICBkb3duSW1hZ2UudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgb3ZlckltYWdlLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgdXBJbWFnZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNwcml0ZS5ldmVudHMub25JbnB1dE91dC5hZGQoKCkgPT4ge1xuICAgICAgICAgICAgZG93bkltYWdlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIG92ZXJJbWFnZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB1cEltYWdlLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHNwcml0ZS5nZXRCb3VuZHMgPSBmdW5jdGlvbigpOlBJWEkuUmVjdGFuZ2xle1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQSVhJLlJlY3RhbmdsZSgwLCAwLCB1cEltYWdlLndpZHRoLCB1cEltYWdlLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNwcml0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25zIHtcbiAgICBwdWJsaWMgc3RhdGljIEFTU0VUX01BTkFHRVJfREFUQV9TRVQ6IHN0cmluZyA9ICdkaWpvbkFzc2V0TWFuYWdlckRhdGFTZXQnO1xuICAgIHB1YmxpYyBzdGF0aWMgQVNTRVRfTUFOQUdFUl9BU1NFVFNfQ0xFQVJFRDogc3RyaW5nID0gJ2Rpam9uQXNzZXRNYW5hZ2VyQXNzZXRzQ2xlYXJlZCc7XG5cbiAgICBwdWJsaWMgc3RhdGljIE1PVVNFX0xFQVZFX0dMT0JBTDogc3RyaW5nID0gJ21vdXNlT3V0R2xvYmFsJztcbiAgICBwdWJsaWMgc3RhdGljIE1PVVNFX0VOVEVSX0dMT0JBTDogc3RyaW5nID0gJ21vdXNlRW50ZXJHbG9iYWwnO1xufSIsImltcG9ydCB7QXBwbGljYXRpb259IGZyb20gJy4vYXBwbGljYXRpb24nO1xuaW1wb3J0IHtJTm90aWZpZXIsIElBc3NldExpc3QsIElQYXRoQ29uZmlnLCBJU291bmQsIElBc3NldCwgSVRpbGVkbWFwQXNzZXRzLCBJR2FtZUNvbmZpZywgSVRyYW5zaXRpb24sIElUcmFuc2l0aW9uSGFuZGxlciwgSVByZWxvYWRIYW5kbGVyfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtNZWRpYXRvcn0gZnJvbSAnLi9tdmMnO1xuaW1wb3J0IHtOb3RpZmljYXRpb25zfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7U3ByaXRlLCBHcm91cCwgVGV4dCwgQ29tcG9uZW50fSBmcm9tICcuL2Rpc3BsYXknO1xuXG5leHBvcnQgY2xhc3MgQW5hbHl0aWNzTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlLCBwdWJsaWMgY2F0ZWdvcnk6IHN0cmluZyA9IG51bGwpIHsgfVxuXG4gICAgcHVibGljIHRyYWNrRXZlbnQoYWN0aW9uOiBzdHJpbmcgPSBudWxsLCBsYWJlbDogc3RyaW5nID0gbnVsbCwgdmFsdWU6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZSB8fCAhdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWFjdGlvbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEFuYWx5dGljc0V4Y2VwdGlvbignTm8gYWN0aW9uIGRlZmluZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5nYSgnc2VuZCcsICdldmVudCcsIHRoaXMuY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgdGhpcy5nYSgnc2VuZCcsICdldmVudCcsIHRoaXMuY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nYSgnc2VuZCcsICdldmVudCcsIHRoaXMuY2F0ZWdvcnksIGFjdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFja09tbml0dXJlRXZlbnQoZ2FtZU5hbWU6IHN0cmluZywgYWN0aXZpdHk6IHN0cmluZywgaXNHYW1lRXZlbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvL2NvbnNvbGUubG9nKCd0cmFja2luZyBvbW5pdHVyZScsIGdhbWVOYW1lLCBhY3Rpdml0eSwgaXNHYW1lRXZlbnQpO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvd1sndHJhY2tGbGFzaEV2ZW50J10gPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB3aW5kb3dbJ3RyYWNrRmxhc2hFdmVudCddKGdhbWVOYW1lLCBhY3Rpdml0eSwgaXNHYW1lRXZlbnQpO1xuICAgIH1cblxuICAgIC8vIGdldHRlciAvIHNldHRlclxuICAgIGdldCBhY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAod2luZG93WydnYSddKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgZ2EoKTogRnVuY3Rpb24ge1xuICAgICAgICByZXR1cm4gd2luZG93WydnYSddO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFuYWx5dGljc0V4Y2VwdGlvbiB7XG4gICAgcHVibGljIG5hbWU6IHN0cmluZyA9ICdBbmFseXRpY3NFeGNlcHRpb24nO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcpIHsgfVxufVxuXG5cbi8qKlxuICogV3JhcHMgUGhhc2VyLkxvYWRlclxuKi9cbmV4cG9ydCBjbGFzcyBBc3NldE1hbmFnZXIgaW1wbGVtZW50cyBJTm90aWZpZXIge1xuICAgIHByb3RlY3RlZCBhcHA6IEFwcGxpY2F0aW9uO1xuXG4gICAgLy8gcHJpdmF0ZSB2YXJpYWJsZXNcbiAgICBwcml2YXRlIF9kYXRhID0ge307XG4gICAgcHJpdmF0ZSBfYmFzZVVSTDogc3RyaW5nID0gJyc7XG4gICAgcHJpdmF0ZSBfcGF0aE9iajogSVBhdGhDb25maWcgfCBhbnkgPSB7fTtcbiAgICBwcml2YXRlIF9hc3NldFBhdGg6IHN0cmluZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBfZGF0YVBhdGg6IHN0cmluZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBfc3ByaXRlU2hlZXRQYXRoOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgX2ltZ1BhdGg6IHN0cmluZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBfZm9udFBhdGg6IHN0cmluZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBfYml0bWFwRm9udFBhdGg6IHN0cmluZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBfcGh5c2ljc1BhdGg6IHN0cmluZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBfYXVkaW9TcHJpdGVQYXRoOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgX3NvdW5kUGF0aDogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIF9zb3VuZERlY29kaW5nTW9kaWZpZXI6IG51bWJlciA9IDI7XG4gICAgcHJpdmF0ZSBfcmVzOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgX3Jlc29sdXRpb246IHN0cmluZyA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9sb2FkRGF0YSA9IHt9O1xuICAgIHByaXZhdGUgX2F1dG9Mb2FkRGF0YSA9IHt9O1xuICAgIHByaXZhdGUgX2NvbXBsZXRlZExvYWRzID0ge307XG4gICAgcHJpdmF0ZSBfcmVxdWlyZWREYXRhID0ge307XG5cbiAgICBwcml2YXRlIF9jdXJyZW50QXNzZXRMaXN0OiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgX2hhc0ZpbGVzOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfc291bmRzVG9EZWNvZGU6IEFycmF5PElTb3VuZD4gPSBbXTtcbiAgICBwcml2YXRlIF9pc0xvYWRpbmdRdWV1ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2ZpbGVDb21wbGV0ZVByb2dyZXNzOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX21heFBlcmNlbnQ6IG51bWJlciA9IDEwMDtcblxuICAgIHByaXZhdGUgX251bVNvdW5kczogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9zb3VuZHNEZWNvZGVkOiBudW1iZXIgPSAwO1xuXG4gICAgcHJpdmF0ZSBfY2FjaGVCdXN0VmVyc2lvbjogc3RyaW5nID0gJyc7XG5cbiAgICAvLyBwdWJsaWMgdmFyaWFibGVzXG4gICAgcHVibGljIGdhbWU6IEdhbWU7XG5cbiAgICBwdWJsaWMgb25Mb2FkU3RhcnQgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuICAgIHB1YmxpYyBvbkZpbGVTdGFydCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgcHVibGljIG9uRmlsZUNvbXBsZXRlID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICBwdWJsaWMgb25Mb2FkQ29tcGxldGUgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuICAgIHB1YmxpYyBvbkxvYWRDb21wbGV0ZUFuZEF1ZGlvRGVjb2RlZCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG5cbiAgICBwdWJsaWMgb25CYWNrZ3JvdW5kTG9hZFN0YXJ0ID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICBwdWJsaWMgb25CYWNrZ3JvdW5kRmlsZVN0YXJ0ID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICBwdWJsaWMgb25CYWNrZ3JvdW5kRmlsZUNvbXBsZXRlID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICBwdWJsaWMgb25CYWNrZ3JvdW5kTG9hZENvbXBsZXRlID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICBwdWJsaWMgb25CYWNrZ3JvdW5kTG9hZENvbXBsZXRlQW5kQXVkaW9EZWNvZGVkID0gbmV3IFBoYXNlci5TaWduYWwoKTtcblxuICAgIC8vIHN0YXRpYyBjb25zdGFudHNcbiAgICAvLyBhc3NldCB0eXBlc1xuICAgIHB1YmxpYyBzdGF0aWMgQVVESU86IHN0cmluZyA9ICdhdWRpbyc7XG4gICAgcHVibGljIHN0YXRpYyBTT1VORDogc3RyaW5nID0gJ3NvdW5kJztcbiAgICBwdWJsaWMgc3RhdGljIEFVRElPX1NQUklURTogc3RyaW5nID0gJ2F1ZGlvU3ByaXRlJztcbiAgICBwdWJsaWMgc3RhdGljIElNQUdFOiBzdHJpbmcgPSAnaW1hZ2UnO1xuICAgIHB1YmxpYyBzdGF0aWMgQVRMQVM6IHN0cmluZyA9ICdhdGxhcyc7XG4gICAgcHVibGljIHN0YXRpYyBURVhUOiBzdHJpbmcgPSAndGV4dCc7XG4gICAgcHVibGljIHN0YXRpYyBKU09OOiBzdHJpbmcgPSAnanNvbic7XG4gICAgcHVibGljIHN0YXRpYyBUSUxFTUFQOiBzdHJpbmcgPSAndGlsZW1hcCc7XG4gICAgcHVibGljIHN0YXRpYyBUSUxFRE1BUDogc3RyaW5nID0gJ3RpbGVkbWFwJztcbiAgICBwdWJsaWMgc3RhdGljIFRJTEVETUFQX1RJTEVTRVQ6IHN0cmluZyA9ICd0aWxlc2V0JztcbiAgICBwdWJsaWMgc3RhdGljIFRJTEVETUFQX0xBWUVSOiBzdHJpbmcgPSAnbGF5ZXInO1xuICAgIHB1YmxpYyBzdGF0aWMgUEhZU0lDUzogc3RyaW5nID0gJ3BoeXNpY3MnO1xuICAgIHB1YmxpYyBzdGF0aWMgQVNTRVRfTElTVDogc3RyaW5nID0gJ2Fzc2V0TGlzdCc7XG5cbiAgICAvLyByZXNvbHV0aW9uc1xuICAgIHB1YmxpYyBzdGF0aWMgUkVTT0xVVElPTl8yWDogc3RyaW5nID0gXCJAMnhcIjtcbiAgICBwdWJsaWMgc3RhdGljIFJFU09MVVRJT05fM1g6IHN0cmluZyA9IFwiQDN4XCI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5faW5pdCgpO1xuICAgIH1cbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICAvKipcbiAgICAqIGFkZHMgaW50ZXJuYWwgdmFyaWFibGVzIGFuZCBzaWduYWxzXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIHByaXZhdGUgX2luaXQoKSB7XG4gICAgICAgIHRoaXMuYXBwID0gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5nYW1lID0gdGhpcy5hcHAuZ2FtZTtcbiAgICAgICAgdGhpcy5iYXNlVVJMID0gJyc7XG4gICAgICAgIHRoaXMucGF0aHMgPSBudWxsO1xuICAgICAgICB0aGlzLnJlc29sdXRpb24gPSB0aGlzLmdhbWUucmVzb2x1dGlvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHBhcnNlcyBhbiBhc3NldCBsaXN0IGJ5IGtleSAodXN1YWxseSBmcm9tIGRhdGEvYXNzZXRzLmpzb24pIGFuZCBzdG9yZXMgdGhlbSBpbnRlcm5hbGx5XG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGtleSB0aGUgaWQgb2YgdGhlIGxpc3RcbiAgICAqIEBwYXJhbSAge0FycmF5fSAgbGlzdCB0aGUganNvbiBhcnJheSBvZiBhc3NldHNcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfcGFyc2VBc3NldExpc3Qoa2V5OiBzdHJpbmcsIGxpc3Q6IElBc3NldExpc3QpIHtcbiAgICAgICAgdGhpcy5fYXV0b0xvYWREYXRhW2tleV0gPSBsaXN0LmF1dG9sb2FkO1xuICAgICAgICB0aGlzLl9yZXF1aXJlZERhdGFba2V5XSA9IGxpc3QucmVxdWlyZWQ7XG5cbiAgICAgICAgdGhpcy5fbG9hZERhdGFba2V5XSA9IFtdO1xuXG4gICAgICAgIGxpc3QuYXNzZXRzLmZvckVhY2goYXNzZXQgPT4ge1xuICAgICAgICAgICAgdGhpcy5fbG9hZERhdGFba2V5XS5wdXNoKGFzc2V0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBhZGRzIGFzc2V0cyBmcm9tIGEgbGlzdCB0byB0aGUgbG9hZCBsaXN0XG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBsaXN0IHRvIGFkZFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBwcml2YXRlIF9sb2FkQXNzZXRzKGlkOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIGFzc2V0cyA9IHRoaXMuX2xvYWREYXRhW2lkXSxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGFzc2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fbG9hZEFzc2V0KGFzc2V0c1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHN0YXJ0IHRoZSBiYWNrZ3JvdW5kIGxvYWRpbmdcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfYmFja2dyb3VuZExvYWRTdGFydCgpIHtcbiAgICAgICAgdGhpcy5vbkJhY2tncm91bmRMb2FkU3RhcnQuZGlzcGF0Y2goKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHdoZW4gYSBmaWxlIGNvbXBsZXRlcyBpbiBhbiBiYWNrZ3JvdW5kIGxvYWQgcXVldWUgLSBkaXNwYXRjaGVzIHRoZSBvbkJhY2tncm91bmRGaWxlQ29tcGxldGUgc2lnbmFsXG4gICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHByb2dyZXNzICAgdGhlIHBlcmNlbnQgcHJvZ3Jlc3NcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gaWQgICAgICAgICB0aGUgZmlsZSBpZFxuICAgICogQHBhcmFtICB7aW50fSAgICBmaWxlSW5kZXggIHRoZSBpbmRleCBvZiB0aGUgZmlsZSBpbiB0aGUgbGlzdFxuICAgICogQHBhcmFtICB7aW50fSAgICB0b3RhbEZpbGVzIHRoZSB0b3RhbCBudW1iZXIgb2YgZmlsZXMgaW4gdGhlIGxpc3RcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfYmFja2dyb3VuZEZpbGVDb21wbGV0ZShwcm9ncmVzczogbnVtYmVyLCBpZDogc3RyaW5nLCBmaWxlSW5kZXg6IG51bWJlciwgdG90YWxGaWxlczogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWUuY2FjaGUuY2hlY2tLZXkoUGhhc2VyLkNhY2hlLklNQUdFLCBpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldEJhc2VUZXh0dXJlUmVzb2x1dGlvbih0aGlzLmdhbWUuY2FjaGUuZ2V0UGl4aUJhc2VUZXh0dXJlKGlkKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZmlsZUNvbXBsZXRlUHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICAgICAgdGhpcy5vbkJhY2tncm91bmRGaWxlQ29tcGxldGUuZGlzcGF0Y2gocHJvZ3Jlc3MsIGlkLCBmaWxlSW5kZXgsIHRvdGFsRmlsZXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogd2hlbiB0aGUgYmFja2dyb3VuZCBsb2FkIGNvbXBsZXRlcyAtIGRpc3BhdGNoZXMgdGhlIG9uQmFja2dyb3VuZExvYWRDb21wbGV0ZSBzaWduYWwsIHN0YXJ0cyBjaGVja2luZyBmb3IgZGVjb2RlZCBzb3VuZHNcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfYmFja2dyb3VuZExvYWRDb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQub25GaWxlQ29tcGxldGUucmVtb3ZlKHRoaXMuX2JhY2tncm91bmRGaWxlQ29tcGxldGUsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMub25CYWNrZ3JvdW5kTG9hZENvbXBsZXRlLmRpc3BhdGNoKCk7XG4gICAgICAgIHRoaXMuX2NoZWNrU291bmREZWNvZGluZyh0aGlzLm9uQmFja2dyb3VuZExvYWRDb21wbGV0ZUFuZEF1ZGlvRGVjb2RlZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiB3aGVuIHRoZSBhc3NldCBsaXN0IHN0YXJ0cyBsb2FkaW5nLCBkaXNwYXRjaGVzIHRoZSBvbkxvYWRTdGFydCBzaWduYWxcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwcml2YXRlIF9nYW1lTG9hZFN0YXJ0KCkge1xuICAgICAgICB0aGlzLm9uTG9hZFN0YXJ0LmRpc3BhdGNoKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiB3aGVuIGEgZmlsZSBzdGFydHMgbG9hZGluZyAtIGRpc3BhdGNoZXMgdGhlIG9uRmlsZVN0YXJ0IHNpZ25hbFxuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHByaXZhdGUgX2dhbWVGaWxlU3RhcnQoKSB7XG4gICAgICAgIHRoaXMub25GaWxlU3RhcnQuZGlzcGF0Y2goKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHdoZW4gYSBmaWxlIGNvbXBsZXRlcyBpbiB0aGUgZ2FtZSBsb2FkIC0gZGlzcGF0Y2hlcyB0aGUgb25GaWxlQ29tcGxldGUgc2lnbmFsXG4gICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHByb2dyZXNzICAgdGhlIHBlcmNlbnQgcHJvZ3Jlc3NcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gaWQgICAgICAgICB0aGUgZmlsZSBpZFxuICAgICogQHBhcmFtICB7aW50fSAgICBmaWxlSW5kZXggIHRoZSBpbmRleCBvZiB0aGUgZmlsZSBpbiB0aGUgbGlzdFxuICAgICogQHBhcmFtICB7aW50fSAgICB0b3RhbEZpbGVzIHRoZSB0b3RhbCBudW1iZXIgb2YgZmlsZXMgaW4gdGhlIGxpc3RcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfZ2FtZUZpbGVDb21wbGV0ZShwcm9ncmVzczogbnVtYmVyLCBpZD86IHN0cmluZywgZmlsZUluZGV4PzogbnVtYmVyLCB0b3RhbEZpbGVzPzogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWUuY2FjaGUuY2hlY2tLZXkoUGhhc2VyLkNhY2hlLklNQUdFLCBpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldEJhc2VUZXh0dXJlUmVzb2x1dGlvbih0aGlzLmdhbWUuY2FjaGUuZ2V0UGl4aUJhc2VUZXh0dXJlKGlkKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZmlsZUNvbXBsZXRlUHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICAgICAgdGhpcy5vbkZpbGVDb21wbGV0ZS5kaXNwYXRjaCh0aGlzLmdldExvYWRQcm9ncmVzcygpLCBpZCwgZmlsZUluZGV4LCB0b3RhbEZpbGVzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZXRCYXNlVGV4dHVyZVJlc29sdXRpb24odGV4dHVyZTogUElYSS5CYXNlVGV4dHVyZSk6IHZvaWQge1xuICAgICAgICBpZiAodGV4dHVyZSAmJiB0ZXh0dXJlLnNvdXJjZS5zcmMuaW5kZXhPZignQCcgKyB0aGlzLnJlc29sdXRpb24gKyAneCcpID49IDApIHtcbiAgICAgICAgICAgIHRleHR1cmUucmVzb2x1dGlvbiA9IHRoaXMucmVzb2x1dGlvbjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAqIHdoZW4gdGhlIGJhY2tncm91bmQgbG9hZCBjb21wbGV0ZXMgLSBkaXNwYXRjaGVzIHRoZSBvbkxvYWRDb21wbGV0ZSBzaWduYWwsIHN0YXJ0cyBjaGVja2luZyBmb3IgZGVjb2RlZCBzb3VuZHNcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfZ2FtZUxvYWRDb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5fY29tcGxldGVkTG9hZHNbdGhpcy5fY3VycmVudEFzc2V0TGlzdF0gPSB0cnVlO1xuICAgICAgICB0aGlzLm9uTG9hZENvbXBsZXRlLmRpc3BhdGNoKCk7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uRmlsZVN0YXJ0LnJlbW92ZSh0aGlzLl9nYW1lRmlsZVN0YXJ0LCB0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQub25GaWxlQ29tcGxldGUucmVtb3ZlKHRoaXMuX2dhbWVGaWxlQ29tcGxldGUsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2NoZWNrU291bmREZWNvZGluZyh0aGlzLm9uTG9hZENvbXBsZXRlQW5kQXVkaW9EZWNvZGVkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGNoZWNrcyBpZiBhbGwgdGhlIHNvdW5kcyBpbiB0aGUgcXVldWUgYXJlIGRlY29kZWRcbiAgICAqIEBwYXJhbSAge1BoYXNlci5TaWduYWx9IGV2ZW50VG9EaXNwYXRjaCB0aGUgc2lnbmFsIHRvIGJlIGRpc3BhdGNoZWQgd2hlbiBhbGwgc291bmRzIGFyZSBkZWNvZGVkXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIHByaXZhdGUgX2NoZWNrU291bmREZWNvZGluZyhldmVudFRvRGlzcGF0Y2g6IFBoYXNlci5TaWduYWwpIHtcbiAgICAgICAgdmFyIHNvdW5kLCBpLCBpc0F1ZGlvU3ByaXRlO1xuXG4gICAgICAgIGlmICh0aGlzLl9zb3VuZHNUb0RlY29kZSAmJiB0aGlzLl9zb3VuZHNUb0RlY29kZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5fc291bmRzVG9EZWNvZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpc0F1ZGlvU3ByaXRlID0gdGhpcy5fc291bmRzVG9EZWNvZGVbaV0uaXNBdWRpb1Nwcml0ZTtcbiAgICAgICAgICAgICAgICBzb3VuZCA9IHRoaXMuZ2FtZS5hZGQuc291bmQodGhpcy5fc291bmRzVG9EZWNvZGVbaV0udXJsKTtcbiAgICAgICAgICAgICAgICBzb3VuZC5fX2lzQXVkaW9TcHJpdGUgPSBpc0F1ZGlvU3ByaXRlO1xuICAgICAgICAgICAgICAgIHNvdW5kLmV2ZW50VG9EaXNwYXRjaCA9IGV2ZW50VG9EaXNwYXRjaDtcbiAgICAgICAgICAgICAgICBzb3VuZC5vbkRlY29kZWQuYWRkT25jZSh0aGlzLl9vblNvdW5kRGVjb2RlZCwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBldmVudFRvRGlzcGF0Y2guZGlzcGF0Y2goKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICogd2hlbiBhIHNvdW5kIGlzIGRlY29kZWQsIHRoaXMgbWV0aG9kIHJlbW92ZXMgaXQgZnJvbSB0aGUgX3NvdW5kc1RvRGVjb2RlIGFycmF5LCBhbmQgaW5jcmVhc2VzIHRoZSBvdmVyYWxsIHBlcmNlbnRhZ2UgbG9hZGVkXG4gICAgKiBAcGFyYW0gIHtQaGFzZXIuU291bmR9IHNvdW5kIHRoZSBzb3VuZCBiZWluZyBkZWNvZGVkXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIHByaXZhdGUgX29uU291bmREZWNvZGVkKHNvdW5kOiBJU291bmQpIHtcbiAgICAgICAgdmFyIHNvdW5kSW5kZXggPSB0aGlzLl9zb3VuZHNUb0RlY29kZS5pbmRleE9mKHNvdW5kLmtleSk7XG4gICAgICAgIHRoaXMuX3NvdW5kc1RvRGVjb2RlLnNwbGljZShzb3VuZEluZGV4LCAxKTtcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZ2FtZS5hdWRpbyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHRoaXMuZ2FtZS5hdWRpby5hZGRBdWRpbyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGlmIChzb3VuZC5fX2lzQXVkaW9TcHJpdGUpXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmFkZC5hdWRpb1Nwcml0ZShzb3VuZC5rZXkpO1xuXG4gICAgICAgICAgICB0aGlzLmdhbWUuYXVkaW8uYWRkQXVkaW8oc291bmQua2V5LCBzb3VuZC5fX2lzQXVkaW9TcHJpdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc291bmRzRGVjb2RlZCsrO1xuICAgICAgICB0aGlzLl9tYXhQZXJjZW50ID0gKDEwMCAtICh0aGlzLl9udW1Tb3VuZHMgKiB0aGlzLnNvdW5kRGVjb2RpbmdNb2RpZmllcikgKyAodGhpcy5fc291bmRzRGVjb2RlZCAqIHRoaXMuc291bmREZWNvZGluZ01vZGlmaWVyKSk7XG4gICAgICAgIHRoaXMuX2dhbWVGaWxlQ29tcGxldGUoMTAwKTtcblxuICAgICAgICBpZiAodGhpcy5fc291bmRzVG9EZWNvZGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBzb3VuZC5ldmVudFRvRGlzcGF0Y2guZGlzcGF0Y2goKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICogc2hvcnRjdXQgdG8gZ2V0IGFuIGFzc2V0IGtleSB1c2luZyBhIGZpbGUgbmFtZSAoc3RyaXBzIGl0cyBleHRlbnNpb24pXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGZpbGVOYW1lIHRoZSB1cmwgb2YgdGhlIGZpbGVcbiAgICAqIEByZXR1cm4ge1N0aXJuZ30gICAgICAgICAgdGhlIGFzc2V0IGtleSAodGhlIGZpbGVuYW1lIHdpdGggaXRzIGV4dGVuc2lvbiBzdHJpcHBlZClcbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBwcml2YXRlIF9nZXRBc3NldEtleShmaWxlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKGZpbGVOYW1lLmluZGV4T2YoJy4nKSA8IDApXG4gICAgICAgICAgICByZXR1cm4gZmlsZU5hbWU7XG4gICAgICAgIHZhciBleHQgPSBmaWxlTmFtZS5zcGxpdCgnLicpO1xuICAgICAgICBleHQucG9wKCk7XG5cbiAgICAgICAgcmV0dXJuIGV4dC5qb2luKCcnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGdldHMgdGhlIGV4dGVuc2lvbiBvZiBhIGdpdmVuIGZpbGVcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gZmlsZU5hbWVcbiAgICAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgICAgdGhlIGV4dGVuc2lvblxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIHByaXZhdGUgX2dldEV4dGVuc2lvbihmaWxlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGZpbGVOYW1lLnNwbGl0KCcuJykucG9wKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBnZXRzIHRoZSBleHRlbnNpb24gb2YgYSBnaXZlbiBmaWxlXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGZpbGVOYW1lXG4gICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgIHRoZSBleHRlbnNpb25cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBwcml2YXRlIF9nZXRSZXNvbHV0aW9uKHJlczogYW55KTogc3RyaW5nIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmVzID0gcGFyc2VGbG9hdChyZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXMgPSB0aGlzLnJlc29sdXRpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzID4gMS41KSB7XG4gICAgICAgICAgICByZXN1bHQgPSBBc3NldE1hbmFnZXIuUkVTT0xVVElPTl8yWDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBkZXRlcm1pbmVzIHdoYXQga2luZCBvZiBhc3NldCB3ZSdyZSBkZWFsaW5nIHdpdGggYW5kIGFkZHMgaXQgdG8gdGhlIGxvYWQgcXVldWVcbiAgICAqIEBwYXJhbSAge09iamVjdH0gYXNzZXQgdGhlIGFzc2V0IG9iamVjdCB3ZSdyZSBnb2luZyB0byBsb2FkXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIHByaXZhdGUgX2xvYWRBc3NldChhc3NldDogSUFzc2V0KSB7XG4gICAgICAgIHZhciB0eXBlID0gYXNzZXQudHlwZSxcbiAgICAgICAgICAgIHVybCA9IGFzc2V0LnVybCB8fCBhc3NldC5rZXk7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5BU1NFVF9MSVNUOlxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRBc3NldHMoYXNzZXQuaWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuU09VTkQ6XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU291bmQodXJsLCBhc3NldC5leHRlbnNpb25zKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLkFVRElPX1NQUklURTpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRBdWRpb1Nwcml0ZSh1cmwsIGFzc2V0LmV4dGVuc2lvbnMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuSU1BR0U6XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkSW1hZ2UodXJsLCB0aGlzLl9nZXRSZXNvbHV0aW9uKGFzc2V0LnJlc29sdXRpb24pKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLkFUTEFTOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEF0bGFzKHVybCwgdGhpcy5fZ2V0UmVzb2x1dGlvbihhc3NldC5yZXNvbHV0aW9uKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5URVhUOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFRleHQodXJsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLkpTT046XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkSlNPTih1cmwpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuVElMRU1BUDpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRUaWxlbWFwKHVybCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5USUxFRE1BUDpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRUaWxlZG1hcCh1cmwsICg8SVRpbGVkbWFwQXNzZXRzPmFzc2V0KS5hc3NldHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuUEhZU0lDUzpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRQaHlzaWNzKHVybCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHBhcnNlcyB0aGUgZGF0YSBmcm9tIHRoZSBleHRlcm5hbCBhc3NldHMgZmlsZSAobm9ybWFsbHkgZGF0YS9hc3NldHMuanNvbilcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgcHJpdmF0ZSBfcGFyc2VEYXRhKCkge1xuICAgICAgICB2YXIga2V5O1xuXG4gICAgICAgIGZvciAoa2V5IGluIHRoaXMuX2RhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuX3BhcnNlQXNzZXRMaXN0KGtleSwgdGhpcy5fZGF0YVtrZXldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2dldENhY2hlQnVzdGVkVXJsKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuX2NhY2hlQnVzdFZlcnNpb24gPT09IHVuZGVmaW5lZCB8fCB0aGlzLl9jYWNoZUJ1c3RWZXJzaW9uID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1cmwgKyAnP3Y9JyArIHRoaXMuX2NhY2hlQnVzdFZlcnNpb247XG4gICAgfVxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgcHVibGljIGxvYWRUZXh0KHVybDogc3RyaW5nKSB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLl9nZXRBc3NldEtleSh1cmwpO1xuICAgICAgICByZXR1cm4gdGhpcy5nYW1lLmxvYWQudGV4dChrZXksIHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKHRoaXMuX2RhdGFQYXRoICsgJy8nICsgdXJsKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRKU09OKGtleTogc3RyaW5nKSB7XG4gICAgICAgIGtleSA9IHRoaXMuX2dldEFzc2V0S2V5KGtleSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUubG9hZC5qc29uKGtleSwgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5fZGF0YVBhdGggKyAnLycgKyBrZXkgKyAnLmpzb24nKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRUaWxlbWFwKGtleTogc3RyaW5nKSB7XG4gICAgICAgIGtleSA9IHRoaXMuX2dldEFzc2V0S2V5KGtleSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUubG9hZC50aWxlbWFwKGtleSwgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5fZGF0YVBhdGggKyAnL3RpbGVtYXAvJyArIGtleSArICcuanNvbicpLCBudWxsLCBQaGFzZXIuVGlsZW1hcC5USUxFRF9KU09OKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZFRpbGVkbWFwKGtleTogc3RyaW5nLCBhc3NldHM6IElBc3NldFtdKSB7XG4gICAgICAgIGlmIChQaGFzZXIuUGx1Z2luWydUaWxlZCddID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aWxlZG1hcCByZXF1aXJlcyB0aGUgcGhhc2VyLXRpbGVkIHBsdWdpbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9lbmdsZXJjai9waGFzZXItdGlsZWQnKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhY2hlS2V5OiBhbnkgPSBQaGFzZXIuUGx1Z2luWydUaWxlZCddLnV0aWxzLmNhY2hlS2V5O1xuXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkWyd0aWxlZG1hcCddKGNhY2hlS2V5KGtleSwgJ3RpbGVkbWFwJyksIHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKHRoaXMuX2RhdGFQYXRoICsgJy90aWxlbWFwLycgKyBrZXkgKyAnLmpzb24nKSwgbnVsbCwgUGhhc2VyLlRpbGVtYXAuVElMRURfSlNPTik7XG5cbiAgICAgICAgYXNzZXRzLmZvckVhY2goYXNzZXQgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChhc3NldC50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuVElMRURNQVBfVElMRVNFVDpcbiAgICAgICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5USUxFRE1BUF9MQVlFUjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkVGlsZWRtYXBJbWFnZShrZXksIGFzc2V0LnR5cGUsIGFzc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRUaWxlZG1hcEltYWdlKGtleTogc3RyaW5nLCB0aWxlc2V0SW1hZ2VUeXBlOiBzdHJpbmcsIGFzc2V0OiBJQXNzZXQpIHtcbiAgICAgICAgY29uc3QgY2FjaGVLZXk6IGFueSA9IFBoYXNlci5QbHVnaW5bJ1RpbGVkJ10udXRpbHMuY2FjaGVLZXk7XG5cbiAgICAgICAgbGV0IHJlc29sdXRpb246IHN0cmluZyA9ICcnO1xuICAgICAgICBjb25zdCBuZXdLZXk6IHN0cmluZyA9IHRoaXMuX2dldEFzc2V0S2V5KGFzc2V0LnVybCk7XG4gICAgICAgIGNvbnN0IGNLZXk6IHN0cmluZyA9IGNhY2hlS2V5KGtleSwgJ3RpbGVzZXQnLCBuZXdLZXkpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgYXNzZXQucmVzb2x1dGlvbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJlc29sdXRpb24gPSB0aGlzLl9nZXRSZXNvbHV0aW9uKGFzc2V0LnJlc29sdXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuX2dldEFzc2V0S2V5KG5ld0tleSArIHJlc29sdXRpb24gKyAnLicgKyB0aGlzLl9nZXRFeHRlbnNpb24oYXNzZXQudXJsKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFzc2V0LnVybCwgY0tleSk7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKGNLZXksIHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKHRoaXMuX3Nwcml0ZVNoZWV0UGF0aCArICcvJyArIHVybCArICcucG5nJykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkUGh5c2ljcyhrZXk6IHN0cmluZykge1xuICAgICAgICBrZXkgPSB0aGlzLl9nZXRBc3NldEtleShrZXkpO1xuICAgICAgICByZXR1cm4gdGhpcy5nYW1lLmxvYWQucGh5c2ljcyhrZXksIHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKHRoaXMuX3BoeXNpY3NQYXRoICsgJy8nICsga2V5ICsgJy5qc29uJykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkQXRsYXModXJsOiBzdHJpbmcsIHJlc29sdXRpb24/OiBhbnkpOiBQaGFzZXIuTG9hZGVyIHwgc3RyaW5nIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXNvbHV0aW9uICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmVzb2x1dGlvbiA9IHRoaXMuX2dldFJlc29sdXRpb24ocmVzb2x1dGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jYWNoZS5jaGVja0ltYWdlS2V5KHVybCkpIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZS5sb2FkLmF0bGFzSlNPTkhhc2godXJsLCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9zcHJpdGVTaGVldFBhdGggKyAnLycgKyB1cmwgKyByZXNvbHV0aW9uICsgJy5wbmcnKSwgdGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwodGhpcy5fc3ByaXRlU2hlZXRQYXRoICsgJy8nICsgdXJsICsgcmVzb2x1dGlvbiArICcuanNvbicpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZEltYWdlKHVybDogc3RyaW5nLCByZXNvbHV0aW9uPzogYW55KTogUGhhc2VyLkxvYWRlciB8IHN0cmluZyB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVzb2x1dGlvbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJlc29sdXRpb24gPSB0aGlzLl9nZXRSZXNvbHV0aW9uKHJlc29sdXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGtleTogc3RyaW5nID0gdGhpcy5fZ2V0QXNzZXRLZXkodXJsKTtcblxuICAgICAgICBpZiAodGhpcy5nYW1lLmNhY2hlLmNoZWNrSW1hZ2VLZXkoa2V5KSkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIGltYWdlIGtleSBhbHJlYWR5IGV4aXN0cywgZG9uJ3QgcmVsb2FkIHRoZSBpbWFnZSBhbmQgcmV0dXJuIHRoZSBrZXlcbiAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH1cbiAgICAgICAgdXJsID0ga2V5ICsgcmVzb2x1dGlvbiArICcuJyArIHRoaXMuX2dldEV4dGVuc2lvbih1cmwpO1xuICAgICAgICByZXR1cm4gdGhpcy5nYW1lLmxvYWQuaW1hZ2Uoa2V5LCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9pbWdQYXRoICsgJy8nICsgdXJsKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRCaXRtYXBGb250KHVybDogc3RyaW5nLCByZXNvbHV0aW9uPzogYW55KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVzb2x1dGlvbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJlc29sdXRpb24gPSB0aGlzLl9nZXRSZXNvbHV0aW9uKHJlc29sdXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmJpdG1hcEZvbnQodXJsLCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9iaXRtYXBGb250UGF0aCArICcvJyArIHVybCArIHJlc29sdXRpb24gKyAnLnBuZycpLCB0aGlzLl9nZXRDYWNoZUJ1c3RlZFVybCh0aGlzLl9iaXRtYXBGb250UGF0aCArICcvJyArIHVybCArIHJlc29sdXRpb24gKyAnLmpzb24nKSk7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgbG9hZEF1ZGlvKHVybDogc3RyaW5nLCBleHRzOiBhbnksIGlzQXVkaW9TcHJpdGU6IGJvb2xlYW4pIHtcbiAgICAgICAgdmFyIHR5cGUsIHBhdGg7XG4gICAgICAgIGlmICh0aGlzLmdhbWUuY2FjaGUuY2hlY2tTb3VuZEtleSh1cmwpICYmIHRoaXMuZ2FtZS5jYWNoZS5nZXRTb3VuZCh1cmwpLmlzRGVjb2RlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHR5cGUgc2hvdWxkIGJlICdzb3VuZCcgb3IgJ3Nwcml0ZScgKCdmeCcgYW5kICdtdXNpYycgdG8gYmUgZGVwcmVjYXRlZClcbiAgICAgICAgLy8gZGVmYXVsdCB0byBzb3VuZFxuXG4gICAgICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHR5cGUgPSAnc291bmQnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV4dHMuaW5kZXhPZignLCcpID49IDApIHtcbiAgICAgICAgICAgIGV4dHMgPSBleHRzLnNwbGl0KCcsJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nYW1lLmRldmljZS5pT1MgJiYgZXh0cy5pbmRleE9mKCdtNGEnKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGV4dHMudW5zaGlmdCgnbTRhJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGV4dHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBwYXRoID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwYXRoLnB1c2godGhpcy5fZ2V0Q2FjaGVCdXN0ZWRVcmwoKGlzQXVkaW9TcHJpdGUgPyB0aGlzLl9hdWRpb1Nwcml0ZVBhdGggOiB0aGlzLl9zb3VuZFBhdGgpICsgJy8nICsgdXJsICsgJy4nICsgZXh0c1tpXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGF0aCA9IHRoaXMuX2dldENhY2hlQnVzdGVkVXJsKChpc0F1ZGlvU3ByaXRlID8gdGhpcy5fYXVkaW9TcHJpdGVQYXRoIDogdGhpcy5fc291bmRQYXRoKSArICcvJyArIHR5cGUgKyAnLycgKyB1cmwgKyAnLicgKyBleHRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0F1ZGlvU3ByaXRlKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5hdWRpb3Nwcml0ZSh1cmwsIHBhdGgsIHRoaXMuX2F1ZGlvU3ByaXRlUGF0aCArICcvJyArIHVybCArICcuanNvbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXVkaW8odXJsLCBwYXRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NvdW5kc1RvRGVjb2RlLnB1c2goe1xuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBpc0F1ZGlvU3ByaXRlOiBpc0F1ZGlvU3ByaXRlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkU291bmQodXJsOiBzdHJpbmcsIGV4dHM6IGFueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkQXVkaW8odXJsLCBleHRzLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRBdWRpb1Nwcml0ZSh1cmw6IHN0cmluZywgZXh0czogYW55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRBdWRpbyh1cmwsIGV4dHMsIHRydWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkQXNzZXRzKGlkOiBzdHJpbmcsIGJhY2tncm91bmQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLl9jdXJyZW50QXNzZXRMaXN0ID0gaWQ7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uRmlsZUNvbXBsZXRlLnJlbW92ZSh0aGlzLl9iYWNrZ3JvdW5kRmlsZUNvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQub25GaWxlQ29tcGxldGUucmVtb3ZlKHRoaXMuX2dhbWVGaWxlQ29tcGxldGUsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2hhc0ZpbGVzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3NvdW5kc1RvRGVjb2RlID0gW107XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9kYXRhID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9kYXRhW2lkXSA9PT0gJ3VuZGVmaW5lZCcgfHwgdGhpcy5fZGF0YVtpZF0ubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdubyBwcmVsb2FkIGRhdGEgcmVnaXN0ZXJlZCBmb3IgJywgaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbG9hZEFzc2V0cyhpZCk7XG4gICAgICAgIHRoaXMuX2hhc0ZpbGVzID0gdGhpcy5nYW1lLmxvYWQudG90YWxRdWV1ZWRGaWxlcygpID4gMDtcblxuICAgICAgICBpZiAoYmFja2dyb3VuZCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQub25Mb2FkU3RhcnQuYWRkT25jZSh0aGlzLl9iYWNrZ3JvdW5kTG9hZFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uRmlsZUNvbXBsZXRlLmFkZCh0aGlzLl9iYWNrZ3JvdW5kRmlsZUNvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uTG9hZENvbXBsZXRlLmFkZE9uY2UodGhpcy5fYmFja2dyb3VuZExvYWRDb21wbGV0ZSwgdGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkxvYWRTdGFydC5hZGRPbmNlKHRoaXMuX2dhbWVMb2FkU3RhcnQsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQub25GaWxlU3RhcnQuYWRkKHRoaXMuX2dhbWVGaWxlU3RhcnQsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQub25GaWxlQ29tcGxldGUuYWRkKHRoaXMuX2dhbWVGaWxlQ29tcGxldGUsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQub25Mb2FkQ29tcGxldGUuYWRkT25jZSh0aGlzLl9nYW1lTG9hZENvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5faGFzRmlsZXMpIHtcbiAgICAgICAgICAgIHRoaXMuX2dhbWVMb2FkU3RhcnQoKTtcbiAgICAgICAgICAgIHRoaXMuX2dhbWVGaWxlQ29tcGxldGUoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuX2dhbWVMb2FkQ29tcGxldGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX251bVNvdW5kcyA9IHRoaXMuX3NvdW5kc1RvRGVjb2RlLmxlbmd0aDtcbiAgICAgICAgdGhpcy5fc291bmRzRGVjb2RlZCA9IDA7XG4gICAgICAgIHRoaXMuX21heFBlcmNlbnQgPSAxMDAgLSAodGhpcy5fbnVtU291bmRzICogdGhpcy5zb3VuZERlY29kaW5nTW9kaWZpZXIpO1xuXG4gICAgICAgIGlmIChiYWNrZ3JvdW5kKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRRdWV1ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzTG9hZGluZ1F1ZXVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2RhdGEgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ25vIHByZWxvYWQgcXVldWUgdG8gbG9hZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFzc2V0czogYW55LFxuICAgICAgICAgICAgc3RhdGU6IHN0cmluZyxcbiAgICAgICAgICAgIGk6IG51bWJlcjtcblxuICAgICAgICBmb3IgKHN0YXRlIGluIHRoaXMuX2RhdGEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9hdXRvTG9hZERhdGFbc3RhdGVdKSB7XG5cbiAgICAgICAgICAgICAgICBhc3NldHMgPSB0aGlzLl9kYXRhW3N0YXRlXTtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXNzZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRBc3NldChhc3NldHNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuX2lzTG9hZGluZ1F1ZXVlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQub25Mb2FkU3RhcnQuYWRkT25jZSh0aGlzLl9iYWNrZ3JvdW5kTG9hZFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQub25GaWxlQ29tcGxldGUuYWRkKHRoaXMuX2JhY2tncm91bmRGaWxlQ29tcGxldGUsIHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkxvYWRDb21wbGV0ZS5hZGRPbmNlKHRoaXMuX2JhY2tncm91bmRMb2FkQ29tcGxldGUsIHRoaXMpO1xuICAgIH1cblxuXG4gICAgcHVibGljIGdldExvYWRQcm9ncmVzcygpIHtcbiAgICAgICAgY29uc3QgYWRqdXN0ZWRQcm9ncmVzcyA9IHRoaXMuX2ZpbGVDb21wbGV0ZVByb2dyZXNzICogdGhpcy5fbWF4UGVyY2VudCAvIDEwMDtcbiAgICAgICAgcmV0dXJuIGFkanVzdGVkUHJvZ3Jlc3M7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgYWxsU291bmRzRGVjb2RlZCgpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnc291bmRzIHRvIGRlY29kZScsIHRoaXMuX3NvdW5kc1RvRGVjb2RlLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VuZHNUb0RlY29kZS5sZW5ndGggPT09IDA7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAqIHNldHMgdGhlIGRhdGEgZm9yIHRoZSBBc3NldE1hbmFnZXIgdG8gdXNlIGFzIGEgcmVmZXJlbmNlICh1c3VhbGx5IGZyb20gZGF0YS9hc3NldHMuanNvbilcbiAgICAqIHRyaWdnZXJzIHRoZSBfcGFyc2VEYXRhIGludGVybmFsIG1ldGhvZCwgd2hpY2ggc3RvcmVzIHRoZSBhc3NldCBsaXN0IGZvciBsYXRlciB1c2VcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0RmlsZUZyb21DYWNoZSB0aGUgaWQgb2YgdGhlIGZpbGUgaW4gdGhlIFBoYXNlci5DYWNoZVxuICAgICovXG4gICAgcHVibGljIHNldERhdGEoZGF0YTogT2JqZWN0KSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLl9sb2FkRGF0YSA9IHt9O1xuICAgICAgICB0aGlzLl9wYXJzZURhdGEoKTtcblxuICAgICAgICB0aGlzLnNlbmROb3RpZmljYXRpb24oTm90aWZpY2F0aW9ucy5BU1NFVF9NQU5BR0VSX0RBVEFfU0VULCB0aGlzLl9kYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGNsZWFycyB0aGUgYXNzZXRzIGZyb20gYSBwYXJ0aWN1bGFyIGlkIGluIHRoZSBzdG9yYWdlXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGlkICAgICAgICAgICAgdGhlIGlkIG9mIHRoZSBhc3NldCBsaXN0IHRvIGNsZWFyXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBbY2xlYXJBdWRpbyA9IHRydWVdICAgIHdoZXRoZXIgdG8gY2xlYXIgYXVkaW8gZmlsZXNcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IFtjbGVhckF0bGFzc2VzID0gdHJ1ZV0gd2hldGhlciB0byBjbGVhciB0ZXh0dXJlIGF0bGFzc2VzXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBbY2xlYXJJbWFnZXMgPSB0cnVlXSAgIHdoZXRoZXIgdG8gY2xlYXIgaW1hZ2VzXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBbY2xlYXJUZXh0ID0gdHJ1ZV0gICAgIHdoZXRoZXIgdG8gY2xlYXIgdGV4dCBmaWxlc1xuICAgICogQHJldHVybiB7dm9pZH1cbiAgICAqL1xuICAgIHB1YmxpYyBjbGVhckFzc2V0cyhpZDogc3RyaW5nLCBjbGVhckF1ZGlvOiBib29sZWFuID0gdHJ1ZSwgY2xlYXJBdGxhc3NlczogYm9vbGVhbiA9IHRydWUsIGNsZWFySW1hZ2VzOiBib29sZWFuID0gdHJ1ZSwgY2xlYXJUZXh0OiBib29sZWFuID0gdHJ1ZSwgY2xlYXJKU09OOiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICB2YXIgYXNzZXRzID0gdGhpcy5fZGF0YVtpZF07XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2NsZWFyaW5nOiAnLCBpZCk7XG5cbiAgICAgICAgaWYgKCFhc3NldHMgfHwgdHlwZW9mIGFzc2V0cyA9PT0gJ3VuZGVmaW5lZCcgfHwgYXNzZXRzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZygnbm8gYXNzZXRzJywgYXNzZXRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXNzZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyQXNzZXQoYXNzZXRzW2ldLCBjbGVhckF1ZGlvLCBjbGVhckF0bGFzc2VzLCBjbGVhckltYWdlcywgY2xlYXJUZXh0LCBjbGVhckpTT04pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY29tcGxldGVkTG9hZHNbaWRdID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5zZW5kTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbnMuQVNTRVRfTUFOQUdFUl9BU1NFVFNfQ0xFQVJFRCwgaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogY2xlYXJzIGFuIGFzc2V0IGZyb20gdGhlIGdhbWUncyBtZW1vcnlcbiAgICAqIEBwYXJhbSAge09iamVjdH0gYXNzZXQgICAgICAgICB0aGUgYXNzZXQgdG8gY2xlYXJcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IFtjbGVhckF1ZGlvID0gdHJ1ZV0gICAgd2hldGhlciB0byBjbGVhciBhdWRpbyBmaWxlc1xuICAgICogQHBhcmFtICB7Qm9vbGVhbn0gW2NsZWFyQXRsYXNzZXMgPSB0cnVlXSB3aGV0aGVyIHRvIGNsZWFyIHRleHR1cmUgYXRsYXNzZXNcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IFtjbGVhckltYWdlcyA9IHRydWVdICAgd2hldGhlciB0byBjbGVhciBpbWFnZXNcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IFtjbGVhclRleHQgPSB0cnVlXSAgICAgd2hldGhlciB0byBjbGVhciB0ZXh0IGZpbGVzXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIGNsZWFyQXNzZXQoYXNzZXQ6IElBc3NldCwgY2xlYXJBdWRpbzogYm9vbGVhbiA9IHRydWUsIGNsZWFyQXRsYXNzZXM6IGJvb2xlYW4gPSB0cnVlLCBjbGVhckltYWdlczogYm9vbGVhbiA9IHRydWUsIGNsZWFyVGV4dDogYm9vbGVhbiA9IHRydWUsIGNsZWFySlNPTjogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBhc3NldC50eXBlLFxuICAgICAgICAgICAgdXJsID0gYXNzZXQudXJsLFxuICAgICAgICAgICAgcmVxdWlyZWQgPSBhc3NldC5yZXF1aXJlZDtcblxuICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGUgJyArIHR5cGUgKyAnIGFzc2V0OiAnICsgdXJsICsgJyBpcyByZXF1aXJlZCBhbmQgd2lsbCBub3QgYmUgY2xlYXJlZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuQVVESU86XG4gICAgICAgICAgICAgICAgaWYgKGNsZWFyQXVkaW8pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLnNvdW5kLnJlbW92ZUJ5S2V5KHVybCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jYWNoZS5yZW1vdmVTb3VuZCh1cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLklNQUdFOlxuICAgICAgICAgICAgICAgIGlmIChjbGVhckltYWdlcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuY2FjaGUucmVtb3ZlSW1hZ2UodXJsKTtcbiAgICAgICAgICAgICAgICAgICAgUElYSS5CYXNlVGV4dHVyZUNhY2hlW3VybF0uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLkFUTEFTOlxuICAgICAgICAgICAgICAgIGlmIChjbGVhckF0bGFzc2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jYWNoZS5yZW1vdmVJbWFnZSh1cmwpO1xuICAgICAgICAgICAgICAgICAgICBQSVhJLkJhc2VUZXh0dXJlQ2FjaGVbdXJsXS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jYWNoZS5yZW1vdmVYTUwodXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5URVhUOlxuICAgICAgICAgICAgICAgIGlmIChjbGVhclRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNhY2hlLnJlbW92ZVRleHQodXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5KU09OOlxuICAgICAgICAgICAgICAgIGlmIChjbGVhckpTT04pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNhY2hlLnJlbW92ZUpTT04odXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5QSFlTSUNTOlxuICAgICAgICAgICAgICAgIGlmIChjbGVhckpTT04pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNhY2hlLnJlbW92ZVBoeXNpY3ModXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGNoZWNrcyBpZiB0aGUgYXNzZXRzIGZyb20gdGhpcyBsaXN0IGlkIGFyZSBhbHJlYWR5IGxvYWRlZFxuICAgICogQHBhcmFtICB7U3RyaW5nfSAgaWQgdGhlIGFzc2V0IGxpc3QgaWQgdG8gY2hlY2tcbiAgICAqIEByZXR1cm4ge0Jvb2xlYW59ICAgIHdoZXRoZXIgaXQgaGFzIGJlZW4gbG9hZGVkIGFscmVhZHlcbiAgICAqL1xuICAgIHB1YmxpYyBoYXNMb2FkZWRBc3NldHMoaWQ6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29tcGxldGVkTG9hZHNbaWRdID09PSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZW5kTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbk5hbWU6IHN0cmluZywgbm90aWZpY2F0aW9uQm9keT86IGFueSk6IHZvaWQge1xuICAgICAgICByZXR1cm4gdGhpcy5hcHAuc2VuZE5vdGlmaWNhdGlvbihub3RpZmljYXRpb25OYW1lLCBub3RpZmljYXRpb25Cb2R5KTtcbiAgICB9XG5cbiAgICAvLyBnZXR0ZXIgLyBzZXR0ZXJcbiAgICBwdWJsaWMgc2V0IGJhc2VVUkwoYmFzZVVSTDogc3RyaW5nKSB7XG4gICAgICAgIC8vIGVuc3VyZSB0cmFpbGluZyBzbGFzaFxuICAgICAgICBpZiAoYmFzZVVSTCAmJiBiYXNlVVJMICE9PSB1bmRlZmluZWQgJiYgYmFzZVVSTC5jaGFyQXQoYmFzZVVSTC5sZW5ndGggLSAxKSAhPT0gJy8nKVxuICAgICAgICAgICAgYmFzZVVSTCArPSAnLyc7XG5cbiAgICAgICAgdGhpcy5fYmFzZVVSTCA9IGJhc2VVUkw7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwYXRocyhwYXRoT2JqOiBJUGF0aENvbmZpZykge1xuICAgICAgICB0aGlzLl9wYXRoT2JqID0gcGF0aE9iaiB8fCB7fTtcblxuICAgICAgICB0aGlzLl9hc3NldFBhdGggPSB0aGlzLl9iYXNlVVJMICsgKHRoaXMuX3BhdGhPYmouYXNzZXRQYXRoIHx8ICdhc3NldHMnKTtcbiAgICAgICAgdGhpcy5fZGF0YVBhdGggPSB0aGlzLl9iYXNlVVJMICsgKHRoaXMuX3BhdGhPYmouZGF0YVBhdGggfHwgJ2Fzc2V0cy9kYXRhJyk7XG4gICAgICAgIHRoaXMuX3Nwcml0ZVNoZWV0UGF0aCA9IHRoaXMuX2Jhc2VVUkwgKyAodGhpcy5fcGF0aE9iai5zcHJpdGVzaGVldFBhdGggfHwgJ2Fzc2V0cy9pbWcvc3ByaXRlc2hlZXRzJyk7XG4gICAgICAgIHRoaXMuX2ltZ1BhdGggPSB0aGlzLl9iYXNlVVJMICsgKHRoaXMuX3BhdGhPYmouaW1nUGF0aCB8fCAnYXNzZXRzL2ltZycpO1xuICAgICAgICB0aGlzLl9mb250UGF0aCA9IHRoaXMuX2Jhc2VVUkwgKyAodGhpcy5fcGF0aE9iai5mb250UGF0aCB8fCAnYXNzZXRzL2ZvbnRzJyk7XG4gICAgICAgIHRoaXMuX2JpdG1hcEZvbnRQYXRoID0gdGhpcy5fYmFzZVVSTCArICh0aGlzLl9wYXRoT2JqLmJpdG1hcEZvbnRQYXRoIHx8ICdhc3NldHMvZm9udHMvYml0bWFwJyk7XG4gICAgICAgIHRoaXMuX2F1ZGlvU3ByaXRlUGF0aCA9IHRoaXMuX2Jhc2VVUkwgKyAodGhpcy5fcGF0aE9iai5hdWRpb1Nwcml0ZVBhdGggfHwgJ2Fzc2V0cy9hdWRpby9zcHJpdGUnKTtcbiAgICAgICAgdGhpcy5fc291bmRQYXRoID0gdGhpcy5fYmFzZVVSTCArICh0aGlzLl9wYXRoT2JqLnNvdW5kUGF0aCB8fCAnYXNzZXRzL2F1ZGlvL3NvdW5kJyk7XG4gICAgICAgIHRoaXMuX3BoeXNpY3NQYXRoID0gdGhpcy5fYmFzZVVSTCArICh0aGlzLl9wYXRoT2JqLnBoeXNpY3NQYXRoIHx8ICdhc3NldHMvZGF0YS9waHlzaWNzJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCByZXNvbHV0aW9uKHJlczogbnVtYmVyKSB7XG4gICAgICAgIGlmIChyZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVzID0gdGhpcy5nYW1lLnJlc29sdXRpb247XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9yZXMgPSByZXM7XG4gICAgICAgIHRoaXMuX3Jlc29sdXRpb24gPSAnJztcblxuICAgICAgICBpZiAodGhpcy5fcmVzID4gMS41KSB7XG4gICAgICAgICAgICB0aGlzLl9yZXNvbHV0aW9uID0gQXNzZXRNYW5hZ2VyLlJFU09MVVRJT05fMlg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHJlc29sdXRpb24oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcztcbiAgICB9XG4gICAgLyoqXG4gICAgKiBzZXRzIHRoZSBwZXJjZW50YWdlIG9mIHRoZSBsb2FkIHdlIHNob3VsZCBhbGxvdCB0byBlYWNoIHNvdW5kXG4gICAgKiBAcGFyYW0ge051bWJlcn0gW251bSA9IDJdIHRoZSBwZXJjZW50YWdlXG4gICAgKi9cbiAgICBwdWJsaWMgc2V0IHNvdW5kRGVjb2RpbmdNb2RpZmllcihudW06IG51bWJlcikge1xuICAgICAgICBpZiAobnVtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG51bSA9IDI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc291bmREZWNvZGluZ01vZGlmaWVyID0gbnVtO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc291bmREZWNvZGluZ01vZGlmaWVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc291bmREZWNvZGluZ01vZGlmaWVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgY2FjaGVCdXN0VmVyc2lvbih2ZXJzaW9uOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fY2FjaGVCdXN0VmVyc2lvbiA9ICcnICsgdmVyc2lvbjtcbiAgICB9XG59XG5cblxuLyoqXG4gKiBBdWRpb01hbmFnZXJcbiAqIFdyYXBwZXIgZm9yIFBoYXNlci5Tb3VuZE1hbmFnZXJcbiAqL1xuZXhwb3J0IGNsYXNzIEF1ZGlvTWFuYWdlciB7XG4gICAgcHVibGljIGdhbWU6IEdhbWU7XG5cbiAgICBwcml2YXRlIF9kZWZhdWx0Vm9sdW1lOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgX3Nwcml0ZXM6IHsgW3Nwcml0ZTogc3RyaW5nXTogUGhhc2VyLkF1ZGlvU3ByaXRlIH0gPSB7fTtcbiAgICBwcml2YXRlIF9zb3VuZHM6IHsgW3NvdW5kOiBzdHJpbmddOiBQaGFzZXIuU291bmQgfSA9IHt9O1xuICAgIHByaXZhdGUgX21hcmtlckxvb2t1cDogeyBbaWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lO1xuICAgIH1cblxuICAgIC8vIHByaXZhdGUgbWV0aG9kcyBcbiAgICBwcml2YXRlIF9hZGRBdWRpbyhrZXk6IHN0cmluZywgaXNBdWRpb1Nwcml0ZTogYm9vbGVhbiA9IGZhbHNlKTogUGhhc2VyLlNvdW5kIHwgUGhhc2VyLkF1ZGlvU3ByaXRlIHtcbiAgICAgICAgaWYgKGlzQXVkaW9TcHJpdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXJzZUF1ZGlvU3ByaXRlKGtleSwgdGhpcy5nYW1lLmFkZC5hdWRpb1Nwcml0ZShrZXkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hbGxvd011bHRpcGxlKHRoaXMuZ2FtZS5hZGQuc291bmQoa2V5KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9wYXJzZUF1ZGlvU3ByaXRlKGtleTogc3RyaW5nLCBhdWRpb1Nwcml0ZTogUGhhc2VyLkF1ZGlvU3ByaXRlKTogUGhhc2VyLkF1ZGlvU3ByaXRlIHtcbiAgICAgICAgZm9yICh2YXIgc291bmRLZXkgaW4gYXVkaW9TcHJpdGUuc291bmRzKSB7XG4gICAgICAgICAgICB0aGlzLl9hbGxvd011bHRpcGxlKGF1ZGlvU3ByaXRlLnNvdW5kc1tzb3VuZEtleV0pO1xuICAgICAgICAgICAgdGhpcy5fbWFya2VyTG9va3VwW3NvdW5kS2V5XSA9IGtleTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXVkaW9TcHJpdGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYWxsb3dNdWx0aXBsZShzb3VuZDogUGhhc2VyLlNvdW5kKTogUGhhc2VyLlNvdW5kIHtcbiAgICAgICAgc291bmQuYWxsb3dNdWx0aXBsZSA9IHRydWU7XG4gICAgICAgIHJldHVybiBzb3VuZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRLZXlGcm9tTWFya2VyTmFtZShtYXJrZXI6IHN0cmluZyk6IHN0cmluZyB8IGJvb2xlYW4ge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX21hcmtlckxvb2t1cFttYXJrZXJdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlckxvb2t1cFttYXJrZXJdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLl9zcHJpdGVzKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3Nwcml0ZXNba2V5XS5zb3VuZHNbbWFya2VyXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXJrZXJMb29rdXBbbWFya2VyXSA9IGtleTtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9wbGF5U3ByaXRlTWFya2VyKGtleTogc3RyaW5nLCBtYXJrZXI6IHN0cmluZywgdm9sdW1lPzogYW55LCBsb29wOiBib29sZWFuID0gZmFsc2UsIGZvcmNlUmVzdGFydDogYm9vbGVhbiA9IHRydWUpOiBQaGFzZXIuU291bmQge1xuICAgICAgICBpZiAodHlwZW9mIHZvbHVtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygdm9sdW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGlmICh2b2x1bWUuaW5kZXhPZignKycpID49IDAgfHwgdm9sdW1lLmluZGV4T2YoJy0nKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZSA9IHRoaXMuX2RlZmF1bHRWb2x1bWUgKyBwYXJzZUZsb2F0KHZvbHVtZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdm9sdW1lID0gcGFyc2VGbG9hdCh2b2x1bWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZvbHVtZSA9IHRoaXMuX2RlZmF1bHRWb2x1bWU7XG4gICAgICAgIH1cblxuICAgICAgICBsb29wID0gbG9vcCB8fCBmYWxzZTtcbiAgICAgICAgZm9yY2VSZXN0YXJ0ID0gZm9yY2VSZXN0YXJ0ID09PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlc1trZXldLnBsYXkobWFya2VyLCB2b2x1bWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3N0b3BTcHJpdGVNYXJrZXIoa2V5OiBzdHJpbmcsIG1hcmtlcjogc3RyaW5nKTogYm9vbGVhbiB8IFBoYXNlci5Tb3VuZCB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3ByaXRlcyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHRoaXMuX3Nwcml0ZXNba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlc1trZXldLnN0b3AobWFya2VyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zdG9wU291bmQoc291bmQ6IFBoYXNlci5Tb3VuZCk6IHZvaWQge1xuICAgICAgICByZXR1cm4gc291bmQuc3RvcCgpO1xuICAgIH1cblxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgLyoqXG4gICAgKiBhZGRzIGF1ZGlvIHRvIHRoZSBsb29rdXAgKGNhbGxlZCBieSBBc3NldE1hbmFnZXIgd2hlbiBhbnkgc291bmQgaXMgbG9hZGVkLCB1c3VhbGx5IG5vdCBuZWNlc3NhcnkgdG8gY2FsbCBmcm9tIGEgZ2FtZSlcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgICAgICAgICB0aGUgUGhhc2VyLkNhY2hlIGtleSBvZiB0aGUgYXVkaW8gYXNzZXRcbiAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNBdWRpb1Nwcml0ZSB3aGV0aGVyIHRoZSBhc3NldCBpcyBhbiBhdWRpbyBzcHJpdGVcbiAgICAqL1xuICAgIHB1YmxpYyBhZGRBdWRpbyhrZXk6IHN0cmluZywgaXNBdWRpb1Nwcml0ZTogYm9vbGVhbiA9IGZhbHNlKTogUGhhc2VyLkF1ZGlvU3ByaXRlIHwgUGhhc2VyLlNvdW5kIHtcbiAgICAgICAgaWYgKGlzQXVkaW9TcHJpdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZEF1ZGlvU3ByaXRlKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkU291bmQoa2V5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGFkZHMgYSBzaW5nbGUgc291bmQgdG8gdGhlIGxvb2t1cCAodXN1YWxseSBub3QgbmVjZXNzYXJ5IHRvIGNhbGwgZnJvbSBhIGdhbWUpXG4gICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IHRoZSBQaGFzZXIuQ2FjaGUga2V5IG9mIHRoZSBhc3NldFxuICAgICogQHJldHVybiB7UGhhc2VyLlNvdW5kfSB0aGUgYWRkZWQgc291bmRcbiAgICAqL1xuICAgIHB1YmxpYyBhZGRTb3VuZChrZXkpOiBQaGFzZXIuU291bmQge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3NvdW5kc1trZXldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NvdW5kc1trZXldID0gdGhpcy5nYW1lLmFkZC5hdWRpbyhrZXkpO1xuICAgICAgICB0aGlzLl9zb3VuZHNba2V5XS5hbGxvd011bHRpcGxlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kc1trZXldO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogYWRkcyBhbiBhdWRpbyBzcHJpdGUgdG8gdGhlIGxvb2t1cCAodXN1YWxseSBub3QgbmVjZXNzYXJ5IHRvIGNhbGwgZnJvbSBhIGdhbWUpXG4gICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IHRoZSBQaGFzZXIuQ2FjaGUga2V5IG9mIHRoZSBhc3NldFxuICAgICogQHJldHVybiB7UGhhc2VyLkF1ZGlvU3ByaXRlfSB0aGUgYWRkZWQgYXVkaW8gc3ByaXRlXG4gICAgKi9cbiAgICBwdWJsaWMgYWRkQXVkaW9TcHJpdGUoa2V5OiBzdHJpbmcpOiBQaGFzZXIuQXVkaW9TcHJpdGUge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3Nwcml0ZXNba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3ByaXRlc1trZXldID0gPFBoYXNlci5BdWRpb1Nwcml0ZT50aGlzLl9hZGRBdWRpbyhrZXksIHRydWUpO1xuICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlc1trZXldO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogYSBnbG9iYWwgbWV0aG9kIHRvIHBsYXkgYSBzb3VuZCAtIHdpbGwgY2hlY2sgYXVkaW8gc3ByaXRlIG1hcmtlcnMgZm9yIHRoZSBwcm92aWRlZCBrZXkgZmlyc3QsIHRoZW4gc2luZ2xlIHNvdW5kc1xuICAgICogQHBhcmFtICB7U3RyaW5nfSBtYXJrZXIgICAgICAgdGhlIHNvdW5kIG1hcmtlciAob3Iga2V5KSB0byBjaGVjayBmb3JcbiAgICAqIEBwYXJhbSAge051bWJlcn0gdm9sdW1lICAgICAgIHRoZSB2b2x1bWUgYXQgd2hpY2ggdG8gcGxheSB0aGUgc291bmRcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IGxvb3AgICAgICAgICB3aGV0aGVyIHRoZSBzb3VuZCBzaG91bGQgbG9vcCAod29uJ3Qgd29yayBpZiBpdCdzIGEgc3ByaXRlIG1hcmtlciwgYW5kIFwibG9vcFwiIGhhc24ndCBiZWVuIHNldCBpbiB0aGUgYXVkaW8gc3ByaXRlIGRlc2NyaXB0b3IgZmlsZSlcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IGZvcmNlUmVzdGFydCB3aGV0aGVyIHRvIHJlc3RhcnQgdGhlIHNvdW5kIGlmIGl0J3MgYWxyZWFkeSBwbGF5aW5nXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuU291bmR9ICAgICAgICAgICAgICB0aGUgcGxheWluZyBzb3VuZFxuICAgICovXG4gICAgcHVibGljIHBsYXlBdWRpbyhtYXJrZXI6IHN0cmluZywgdm9sdW1lPzogbnVtYmVyLCBsb29wOiBib29sZWFuID0gZmFsc2UsIGZvcmNlUmVzdGFydDogYm9vbGVhbiA9IHRydWUpOiBQaGFzZXIuU291bmQge1xuICAgICAgICBpZiAodGhpcy5fZ2V0S2V5RnJvbU1hcmtlck5hbWUobWFya2VyKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheVNwcml0ZU1hcmtlcihtYXJrZXIsIHZvbHVtZSwgbG9vcCwgZm9yY2VSZXN0YXJ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXlTb3VuZChtYXJrZXIsIHZvbHVtZSwgbG9vcCwgZm9yY2VSZXN0YXJ0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIGNhbGxzIERpam9uLkF1ZGlvTWFuYWdlci5wbGF5QXVkaW8gb24gYSBkZWxheVxuICAgICogQHBhcmFtICB7aW50fSBkZWxheSAgICAgICAgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheSB0aGUgc291bmRcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gbWFya2VyICAgICAgIHRoZSBzb3VuZCBtYXJrZXIgKG9yIGtleSkgdG8gY2hlY2sgZm9yXG4gICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHZvbHVtZSAgICAgICB0aGUgdm9sdW1lIGF0IHdoaWNoIHRvIHBsYXkgdGhlIHNvdW5kXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBsb29wICAgICAgICAgd2hldGhlciB0aGUgc291bmQgc2hvdWxkIGxvb3AgKHdvbid0IHdvcmsgaWYgaXQncyBhIHNwcml0ZSBtYXJrZXIsIGFuZCBcImxvb3BcIiBoYXNuJ3QgYmVlbiBzZXQgaW4gdGhlIGF1ZGlvIHNwcml0ZSBkZXNjcmlwdG9yIGZpbGUpXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBmb3JjZVJlc3RhcnQgd2hldGhlciB0byByZXN0YXJ0IHRoZSBzb3VuZCBpZiBpdCdzIGFscmVhZHkgcGxheWluZ1xuICAgICovXG4gICAgcHVibGljIHBsYXlEZWxheWVkQXVkaW8oZGVsYXk6IG51bWJlciwgbWFya2VyOiBzdHJpbmcsIHZvbHVtZT86IG51bWJlciwgbG9vcDogYm9vbGVhbiA9IGZhbHNlLCBmb3JjZVJlc3RhcnQ6IGJvb2xlYW4gPSB0cnVlKTogUGhhc2VyLlNvdW5kIHtcbiAgICAgICAgaWYgKHRoaXMuX2dldEtleUZyb21NYXJrZXJOYW1lKG1hcmtlcikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXlEZWxheWVkU3ByaXRlTWFya2VyKGRlbGF5LCBtYXJrZXIsIHZvbHVtZSwgbG9vcCwgZm9yY2VSZXN0YXJ0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wbGF5RGVsYXllZFNvdW5kKGRlbGF5LCBtYXJrZXIsIHZvbHVtZSwgbG9vcCwgZm9yY2VSZXN0YXJ0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHBsYXlzIGEgc2luZ2xlIHNvdW5kXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGtleSAgICAgICAgICB0aGUgUGhhc2VyLkNhY2hlIGtleSBmb3IgdGhlIHNvdW5kXG4gICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHZvbHVtZSAgICAgICB0aGUgdm9sdW1lIGF0IHdoaWNoIHRvIHBsYXkgdGhlIHNvdW5kXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBsb29wICAgICAgICAgd2hldGhlciB0aGUgc291bmQgc2hvdWxkIGxvb3AgKHdvbid0IHdvcmsgaWYgaXQncyBhIHNwcml0ZSBtYXJrZXIsIGFuZCBcImxvb3BcIiBoYXNuJ3QgYmVlbiBzZXQgaW4gdGhlIGF1ZGlvIHNwcml0ZSBkZXNjcmlwdG9yIGZpbGUpXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBmb3JjZVJlc3RhcnQgd2hldGhlciB0byByZXN0YXJ0IHRoZSBzb3VuZCBpZiBpdCdzIGFscmVhZHkgcGxheWluZ1xuICAgICogQHJldHVybiB7UGhhc2VyLlNvdW5kfSB0aGUgcGxheWluZyBzb3VuZFxuICAgICovXG4gICAgcHVibGljIHBsYXlTb3VuZChrZXk6IHN0cmluZywgdm9sdW1lPzogbnVtYmVyLCBsb29wOiBib29sZWFuID0gZmFsc2UsIGZvcmNlUmVzdGFydDogYm9vbGVhbiA9IHRydWUpOiBQaGFzZXIuU291bmQge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3NvdW5kc1trZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdm9sdW1lID0gdHlwZW9mIHZvbHVtZSA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLl9kZWZhdWx0Vm9sdW1lIDogdm9sdW1lO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VuZHNba2V5XS5wbGF5KFwiXCIsIDAsIHZvbHVtZSwgbG9vcCwgZm9yY2VSZXN0YXJ0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHBsYXlzIGEgbWFya2VyIGZyb20gYW4gYXVkaW8gc3ByaXRlXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IG1hcmtlciAgICAgICB0aGUgbWFya2VyIHRvIGNoZWNrIGZvciAod2lsbCBjaGVjayBhbGwgYXVkaW8gc3ByaXRlcylcbiAgICAqIEBwYXJhbSAge051bWJlcn0gdm9sdW1lICAgICAgIHRoZSB2b2x1bWUgYXQgd2hpY2ggdG8gcGxheSB0aGUgc291bmRcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IGxvb3AgICAgICAgICB3aGV0aGVyIHRoZSBzb3VuZCBzaG91bGQgbG9vcCAod29uJ3Qgd29yayBpZiBpdCdzIGEgc3ByaXRlIG1hcmtlciwgYW5kIFwibG9vcFwiIGhhc24ndCBiZWVuIHNldCBpbiB0aGUgYXVkaW8gc3ByaXRlIGRlc2NyaXB0b3IgZmlsZSlcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IGZvcmNlUmVzdGFydCB3aGV0aGVyIHRvIHJlc3RhcnQgdGhlIHNvdW5kIGlmIGl0J3MgYWxyZWFkeSBwbGF5aW5nXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuU291bmR9IHRoZSBwbGF5aW5nIHNvdW5kXG4gICAgKi9cbiAgICBwdWJsaWMgcGxheVNwcml0ZU1hcmtlcihtYXJrZXI6IHN0cmluZywgdm9sdW1lPzogbnVtYmVyLCBsb29wOiBib29sZWFuID0gZmFsc2UsIGZvcmNlUmVzdGFydDogYm9vbGVhbiA9IHRydWUpOiBQaGFzZXIuU291bmQge1xuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLl9nZXRLZXlGcm9tTWFya2VyTmFtZShtYXJrZXIpO1xuXG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbWFya2VyIG5vdCBmb3VuZCcsIG1hcmtlcik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5U3ByaXRlTWFya2VyKDxzdHJpbmc+a2V5LCBtYXJrZXIsIHZvbHVtZSwgbG9vcCwgZm9yY2VSZXN0YXJ0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGxheURlbGF5ZWRTb3VuZChkZWxheTogbnVtYmVyLCBrZXk6IHN0cmluZywgdm9sdW1lPzogbnVtYmVyLCBsb29wOiBib29sZWFuID0gZmFsc2UsIGZvcmNlUmVzdGFydDogYm9vbGVhbiA9IHRydWUpOiBQaGFzZXIuU291bmQge1xuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKGRlbGF5LCB0aGlzLnBsYXlTb3VuZCwgdGhpcywga2V5LCB2b2x1bWUsIGxvb3AsIGZvcmNlUmVzdGFydCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBwbGF5RGVsYXllZFNwcml0ZU1hcmtlcihkZWxheTogbnVtYmVyLCBtYXJrZXI6IHN0cmluZywgdm9sdW1lPzogbnVtYmVyLCBsb29wOiBib29sZWFuID0gZmFsc2UsIGZvcmNlUmVzdGFydDogYm9vbGVhbiA9IHRydWUpOiBQaGFzZXIuU291bmQge1xuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKGRlbGF5LCB0aGlzLnBsYXlTcHJpdGVNYXJrZXIsIHRoaXMsIG1hcmtlciwgdm9sdW1lLCBsb29wLCBmb3JjZVJlc3RhcnQpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHN0b3BzIGFueSBwbGF5aW5nIGF1ZGlvIGZpbGUgd2l0aCB0aGUgZ2l2ZW4gbWFya2VyXG4gICAgKiBjaGVja3MgYXVkaW8gc3ByaXRlcyBmaXJzdCwgdGhlbiBzaW5nbGUgc291bmRzXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuU291bmR9IHRoZSBzb3VuZCB0aGF0IHdhcyBzdG9wcGVkXG4gICAgKi9cbiAgICBwdWJsaWMgc3RvcEF1ZGlvKG1hcmtlcjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9nZXRLZXlGcm9tTWFya2VyTmFtZShtYXJrZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9wU3ByaXRlTWFya2VyKG1hcmtlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcFNvdW5kKG1hcmtlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBzdG9wcyBhIHNpbmdsZSBzb3VuZCBmcm9tIHBsYXlpbmdcbiAgICAqIEByZXR1cm4ge1BoYXNlci5Tb3VuZH0gdGhlIHNvdW5kIHRoYXQgd2FzIHN0b3BwZWRcbiAgICAqL1xuICAgIHB1YmxpYyBzdG9wU291bmQoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zb3VuZHMgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB0aGlzLl9zb3VuZHNba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fc291bmRzW2tleV0uc3RvcCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogc3RvcHMgYSBzaW5nbGUgc291bmQgZnJvbSBwbGF5aW5nXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuU291bmR9IHRoZSBzb3VuZCB0aGF0IHdhcyBzdG9wcGVkXG4gICAgKi9cbiAgICBwdWJsaWMgc3RvcFNwcml0ZU1hcmtlcihtYXJrZXI6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB2YXIga2V5ID0gdGhpcy5fZ2V0S2V5RnJvbU1hcmtlck5hbWUobWFya2VyKTtcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtYXJrZXIgbm90IGZvdW5kJywgbWFya2VyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zdG9wU3ByaXRlTWFya2VyKDxzdHJpbmc+a2V5LCBtYXJrZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogc3RvcHMgcmVtb3ZlcyBhIHNvdW5kIGZyb20gRGlqb24uQXVkaW9NYW5hZ2VyJ3MgbG9va3VwXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGtleSB0aGUga2V5IG9mIHRoZSBzb3VuZCB0byBiZSByZW1vdmVkXG4gICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICovXG4gICAgcHVibGljIHJlbW92ZVNvdW5kKGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3NvdW5kcyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHRoaXMuX3NvdW5kc1trZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9zb3VuZHNba2V5XSkge1xuICAgICAgICAgICAgdGhpcy5zdG9wU291bmQoa2V5KTtcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kc1trZXldLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9zb3VuZHNba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICogc3RvcHMgcmVtb3ZlcyBhbiBhdWRpbyBzcHJpdGUgZnJvbSBEaWpvbi5BdWRpb01hbmFnZXIncyBsb29rdXBcbiAgICAqIEBwYXJhbSAge1N0cmluZ30ga2V5IHRoZSBrZXkgb2YgdGhlIHNvdW5kIHRvIGJlIHJlbW92ZWRcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgcmVtb3ZlU3ByaXRlKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3ByaXRlcyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHRoaXMuX3Nwcml0ZXNba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0b3BTcHJpdGVNYXJrZXIoa2V5KTtcbiAgICAgICAgdGhpcy5fc3ByaXRlc1trZXldID0gbnVsbDtcbiAgICAgICAgZGVsZXRlIHRoaXMuX3Nwcml0ZXNba2V5XTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmFkZShzb3VuZDogUGhhc2VyLlNvdW5kLCB2b2x1bWU6IG51bWJlciwgdGltZTogbnVtYmVyLCBzdG9wOiBib29sZWFuID0gZmFsc2UpOiBQaGFzZXIuVHdlZW4ge1xuICAgICAgICBpZiAoIXNvdW5kKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGlmIChzb3VuZC5mYWRlVHdlZW4gJiYgc291bmQuZmFkZVR3ZWVuKVxuICAgICAgICAgICAgdGhpcy5nYW1lLnR3ZWVucy5yZW1vdmUoc291bmQuZmFkZVR3ZWVuKTtcblxuICAgICAgICBzb3VuZC5mYWRlVHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKHNvdW5kKS50byh7XG4gICAgICAgICAgICB2b2x1bWU6IHZvbHVtZVxuICAgICAgICB9LCB0aW1lIHx8IDMwMCwgUGhhc2VyLkVhc2luZy5MaW5lYXIuTm9uZSk7XG5cbiAgICAgICAgaWYgKHN0b3AgPT09IHRydWUpXG4gICAgICAgICAgICBzb3VuZC5mYWRlVHdlZW4ub25Db21wbGV0ZS5hZGRPbmNlKGZ1bmN0aW9uKCkgeyB0aGlzLl9zdG9wU291bmQoc291bmQpIH0sIHRoaXMpO1xuXG4gICAgICAgIHJldHVybiBzb3VuZC5mYWRlVHdlZW4uc3RhcnQoKTtcbiAgICB9XG5cbiAgICAvLyBnZXR0ZXIgLyBzZXR0ZXJcbiAgICAvKipcbiAgICAqIFNldHMgdGhlIGRlZmF1bHQgdm9sdW1lIGZvciBhbGwgc291bmRzICh1c2VkIGluIHRoZSBjYXNlIHdoZXJlIGEgdm9sdW1lIGlzIG5vdCBzdXBwbGllZCB0byB0aGUgcGxheUF1ZGlvLCBwbGF5U291bmQsIG9yIHBsYXlTcHJpdGVNYXJrZXIgbWV0aG9kcylcbiAgICAqL1xuICAgIHB1YmxpYyBzZXQgZGVmYXVsdFZvbHVtZSh2b2w6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9kZWZhdWx0Vm9sdW1lID0gdm9sO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZGVmYXVsdFZvbHVtZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFZvbHVtZTtcbiAgICB9XG59XG5cbi8qKlxuICogR2FtZSBcbiAqL1xuZXhwb3J0IGNsYXNzIEdhbWUgZXh0ZW5kcyBQaGFzZXIuR2FtZSB7XG4gICAgLy8gcHVibGljIHZhcmlhYmxlc1xuICAgIC8vIGFwcGxpY2F0aW9uXG4gICAgcHVibGljIGFwcDogQXBwbGljYXRpb247XG4gICAgcHVibGljIGNvbmZpZzogSUdhbWVDb25maWc7XG5cbiAgICAvLyBtYW5hZ2Vyc1xuICAgIHB1YmxpYyBhc3NldDogQXNzZXRNYW5hZ2VyO1xuICAgIHB1YmxpYyBzZXF1ZW5jZTogU2VxdWVuY2VNYW5hZ2VyO1xuICAgIHB1YmxpYyB0cmFuc2l0aW9uOiBUcmFuc2l0aW9uTWFuYWdlcjtcbiAgICBwdWJsaWMgc3RvcmFnZTogU3RvcmFnZU1hbmFnZXI7XG4gICAgcHVibGljIGF1ZGlvOiBBdWRpb01hbmFnZXI7XG4gICAgcHVibGljIGFuYWx5dGljczogQW5hbHl0aWNzTWFuYWdlcjtcbiAgICBwdWJsaWMgYWRkOiBHYW1lT2JqZWN0RmFjdG9yeTtcblxuICAgIC8vIHNpZ25hbHNcbiAgICBwdWJsaWMgb25Xb3JsZElucHV0RGlzYWJsZWQ6IFBoYXNlci5TaWduYWwgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuICAgIHB1YmxpYyBvbldvcmxkSW5wdXRFbmFibGVkOiBQaGFzZXIuU2lnbmFsID0gbmV3IFBoYXNlci5TaWduYWwoKTtcblxuICAgIC8vIGRpc3BsYXkgbGF5ZXJzXG4gICAgcHVibGljIGdhbWVMYXllcjogR3JvdXA7XG4gICAgcHVibGljIHVpTGF5ZXI6IEdyb3VwO1xuICAgIHB1YmxpYyBzdGFnZUxheWVyOiBHcm91cDtcblxuICAgIC8vIFBoYXNlci5HYW1lIG92ZXJyaWRlc1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogSUdhbWVDb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYm9vdCgpIHtcbiAgICAgICAgc3VwZXIuYm9vdCgpO1xuXG4gICAgICAgIHRoaXMuYXBwID0gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKTtcblxuICAgICAgICAvLyBhZGQgbWFuYWdlcnNcbiAgICAgICAgdGhpcy5hc3NldCA9IG5ldyBBc3NldE1hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5zZXF1ZW5jZSA9IG5ldyBTZXF1ZW5jZU1hbmFnZXIoKTtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gbmV3IFRyYW5zaXRpb25NYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IG5ldyBTdG9yYWdlTWFuYWdlcigpO1xuICAgICAgICB0aGlzLmF1ZGlvID0gbmV3IEF1ZGlvTWFuYWdlcigpO1xuICAgICAgICB0aGlzLmFuYWx5dGljcyA9IG5ldyBBbmFseXRpY3NNYW5hZ2VyKHRoaXMuY29uZmlnLmFuYWx5dGljcyk7XG5cbiAgICAgICAgLy8gcmVwbGFjZSBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnlcbiAgICAgICAgdGhpcy5hZGQgPSBudWxsO1xuICAgICAgICB0aGlzLmFkZCA9IG5ldyBHYW1lT2JqZWN0RmFjdG9yeSh0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRMYXllcnMoKTtcbiAgICAgICAgdGhpcy5hZGRNb3VzZUNhbGxiYWNrcygpO1xuICAgICAgICB0aGlzLnNldEZhY3RvcnlEZWZhdWx0TGF5ZXIodGhpcy5nYW1lTGF5ZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRQbHVnaW5zKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jb25maWcucGx1Z2lucyAmJiB0aGlzLmNvbmZpZy5wbHVnaW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnBsdWdpbnMuZm9yRWFjaChwbHVnaW5OYW1lID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIFBoYXNlci5QbHVnaW5bcGx1Z2luTmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGQucGx1Z2luKFBoYXNlci5QbHVnaW5bcGx1Z2luTmFtZV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gT3ZlcnJpZGUgdGhpcy53b3JsZCBhcyB0aGUgZGVmYXVsdCBsYXllciB0aGF0IFxuICAgIC8vIC5hZGQgY2FsbHMgd2lsbCBiZSBjcmVhdGVkIG9uLlxuICAgIHB1YmxpYyBzZXRGYWN0b3J5RGVmYXVsdExheWVyKG5ld0xheWVyOiBQaGFzZXIuR3JvdXApIHtcbiAgICAgICAgdGhpcy5hZGQuc2V0RGVmYXVsdExheWVyKG5ld0xheWVyIHx8IHRoaXMud29ybGQpO1xuICAgIH1cbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICBwcm90ZWN0ZWQgYWRkTGF5ZXJzKCk6IHZvaWQge1xuICAgICAgICAvLyBhZGRzIGdhbWUgYW5kIHVpIGxheWVyc1xuICAgICAgICB0aGlzLmdhbWVMYXllciA9IHRoaXMuYWRkLmRHcm91cCgwLCAwLCAnX2dhbWVfbGF5ZXInKTtcbiAgICAgICAgLy8gYWRkIHVpIGxheWVyIGFuZCBzZXQgdGhlIFwiZml4ZWRUb0NhbWVyYVwiIHByb3BlcnR5IHRvIHRydWVcbiAgICAgICAgLy8gaWYgdGhlIGdhbWUncyBjYW1lcmEgbW92ZXMsIGFueXRoaW5nIGluIHRoaXMgZ3JvdXAgd2lsbCBzdGF5IGluIHBsYWNlXG4gICAgICAgIHRoaXMudWlMYXllciA9IHRoaXMuYWRkLmRHcm91cCgwLCAwLCAnX3VpX2xheWVyJyk7XG4gICAgICAgIHRoaXMudWlMYXllci5maXhlZFRvQ2FtZXJhID0gdHJ1ZTtcblxuICAgICAgICAvLyBhZGQgYSBncm91cCB0byB0aGUgUGhhc2VyLlN0YWdlIChqdXN0IGluIGNhc2UpXG4gICAgICAgIHRoaXMuc3RhZ2VMYXllciA9IHRoaXMuYWRkLmRHcm91cCgwLCAwLCAnX3N0YWdlX2xheWVyJywgdHJ1ZSk7XG4gICAgfVxuICAgIFxuICAgIHByb3RlY3RlZCBhZGRNb3VzZUNhbGxiYWNrcygpOnZvaWR7XG4gICAgICAgIGlmICh0aGlzLmRldmljZS5kZXNrdG9wKXtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQubW91c2UubW91c2VPdmVyQ2FsbGJhY2sgPSB0aGlzLm1vdXNlT3ZlcjtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQubW91c2UubW91c2VPdXRDYWxsYmFjayA9IHRoaXMubW91c2VPdXQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHJvdGVjdGVkIG1vdXNlT3V0KCk6dm9pZHtcbiAgICAgICAgQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5zZW5kTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbnMuTU9VU0VfTEVBVkVfR0xPQkFMKTtcbiAgICB9XG4gICAgXG4gICAgcHJvdGVjdGVkIG1vdXNlT3ZlcigpOnZvaWR7XG4gICAgICAgIEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuc2VuZE5vdGlmaWNhdGlvbihOb3RpZmljYXRpb25zLk1PVVNFX0VOVEVSX0dMT0JBTCk7XG4gICAgfVxuXG4gICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICBwdWJsaWMgZGlzYWJsZUVsZW1lbnRJbnB1dChlbDogYW55KTogYW55IHtcbiAgICAgICAgaWYgKGVsLmlucHV0ICYmIGVsLmlucHV0RW5hYmxlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZWwud2FzRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBlbC5pbnB1dEVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWwuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZUVsZW1lbnRJbnB1dChlbC5jaGlsZHJlbltpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZW5hYmxlRWxlbWVudElucHV0KGVsOiBhbnkpOiBhbnkge1xuICAgICAgICBpZiAoZWwuaW5wdXQgJiYgZWwuaW5wdXRFbmFibGVkID09PSBmYWxzZSAmJiBlbC53YXNFbmFibGVkKSB7XG4gICAgICAgICAgICBlbC53YXNFbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICBlbC5pbnB1dEVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGVFbGVtZW50SW5wdXQoZWwuY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGRpc2FibGVJbnB1dChncm91cDogUGhhc2VyLkdyb3VwKTogYW55IHtcbiAgICAgICAgcmV0dXJuIGdyb3VwLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIGlmIChlbCBpbnN0YW5jZW9mIFBoYXNlci5Hcm91cCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRpc2FibGVJbnB1dChlbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRpc2FibGVFbGVtZW50SW5wdXQoZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZW5hYmxlSW5wdXQoZ3JvdXA6IFBoYXNlci5Hcm91cCk6IGFueSB7XG4gICAgICAgIHJldHVybiBncm91cC5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICBpZiAoZWwgaW5zdGFuY2VvZiBQaGFzZXIuR3JvdXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbmFibGVJbnB1dChlbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVuYWJsZUVsZW1lbnRJbnB1dChlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXNhYmxlR2FtZUlucHV0KCkge1xuICAgICAgICB0aGlzLmRpc2FibGVJbnB1dCh0aGlzLmdhbWVMYXllcik7XG4gICAgICAgIHRoaXMub25Xb3JsZElucHV0RGlzYWJsZWQuZGlzcGF0Y2goKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZW5hYmxlR2FtZUlucHV0KCkge1xuICAgICAgICB0aGlzLmVuYWJsZUlucHV0KHRoaXMuZ2FtZUxheWVyKTtcbiAgICAgICAgdGhpcy5vbldvcmxkSW5wdXRFbmFibGVkLmRpc3BhdGNoKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmVtb3ZlcyBhbGwgaXRlbXMgZnJvbSB0aGUgZ2FtZSBsYXllclxuICAgICAqIGJ1dCBhbGxvd3MgdGhlIHVpIGxheWVyIHRvIHBlcnNpc3RcbiAgICAgKiB0aGF0IHdheSB3ZSBjYW4gb3ZlcmxheSB0aGUgZ2FtZSB3aXRob3V0IGFkZGluZyBzdHVmZiB0byB0aGUgcGhhc2VyIHN0YWdlIChmb3IgdHJhbnNpdGlvbnMpXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHRvU3RhdGUgdGhlIG5ldyBzdGF0ZSB3ZSdyZSBjaGFuZ2luZyB0b1xuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgcHVibGljIGNoYW5nZVN0YXRlKHRvU3RhdGU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmdhbWVMYXllci5yZW1vdmVBbGwodHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnN0YXJ0KHRvU3RhdGUsIGZhbHNlLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLy8gZ2V0dGVyIC8gc2V0dGVyXG4gICAgLyoqXG4gICAgICogc2V0cyB0aGUgdGFyZ2V0IGdyb3VwIGZvciB0aGUgZ2FtZU9iamVjdEZhY3RvcnkgdG8gZ2FtZUxheWVyIGJlZm9yZSBhZGRpbmcgXG4gICAgICogdGhpcyB3YXkgaWYgd2UgcGFzcyBhIG51bGwgZ3JvdXAgdG8gd2hhdGV2ZXIgbWV0aG9kIHdlIGNhbGwgXG4gICAgICogaWUgKHRoaXMuZ2FtZS5hZGRUb0dhbWUuaW1hZ2UoMCwgMCwga2V5LCBmcmFtZSkpO1xuICAgICAqIGl0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIGFwcHJvcHJpYXRlIGxheWVyXG4gICAgICovXG4gICAgcHVibGljIGdldCBhZGRUb0dhbWUoKTogR2FtZU9iamVjdEZhY3Rvcnkge1xuICAgICAgICB0aGlzLmFkZC50YXJnZXRHcm91cCA9IHRoaXMuZ2FtZUxheWVyO1xuICAgICAgICByZXR1cm4gdGhpcy5hZGQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2V0cyB0aGUgdGFyZ2V0IGdyb3VwIGZvciB0aGUgZ2FtZU9iamVjdEZhY3RvcnkgdG8gdWlMYXllciBiZWZvcmUgYWRkaW5nIFxuICAgICAqIHRoaXMgd2F5IGlmIHdlIHBhc3MgYSBudWxsIGdyb3VwIHRvIHdoYXRldmVyIG1ldGhvZCB3ZSBjYWxsIFxuICAgICAqIGllICh0aGlzLmdhbWUuYWRkVG9VSS5pbWFnZSgwLCAwLCBrZXksIGZyYW1lKSk7XG4gICAgICogaXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgYXBwcm9wcmlhdGUgbGF5ZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGFkZFRvVUkoKTogR2FtZU9iamVjdEZhY3Rvcnkge1xuICAgICAgICAvLyBzZXQgdGhlIHRhcmdldCBncm91cCBmb3IgdGhlIGdhbWVPYmplY3RGYWN0b3J5IGJlZm9yZSBhZGRpbmdcbiAgICAgICAgdGhpcy5hZGQudGFyZ2V0R3JvdXAgPSB0aGlzLnVpTGF5ZXI7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGFkZFRvU3RhZ2UoKTogR2FtZU9iamVjdEZhY3Rvcnkge1xuICAgICAgICAvLyBzZXQgdGhlIHRhcmdldCBncm91cCBmb3IgdGhlIGdhbWVPYmplY3RGYWN0b3J5IGJlZm9yZSBhZGRpbmdcbiAgICAgICAgdGhpcy5hZGQudGFyZ2V0R3JvdXAgPSB0aGlzLnN0YWdlTGF5ZXI7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGFkZFRvV29ybGQoKTogR2FtZU9iamVjdEZhY3Rvcnkge1xuICAgICAgICAvLyBzZXQgdGhlIHRhcmdldCBncm91cCBmb3IgdGhlIGdhbWVPYmplY3RGYWN0b3J5IGJlZm9yZSBhZGRpbmdcbiAgICAgICAgdGhpcy5hZGQudGFyZ2V0R3JvdXAgPSB0aGlzLndvcmxkO1xuICAgICAgICByZXR1cm4gdGhpcy5hZGQ7XG4gICAgfVxufVxuXG4vKipcbiAqIEdhbWVPYmplY3RGYWN0b3J5XG4gKi9cblxuZXhwb3J0IGNsYXNzIEdhbWVPYmplY3RGYWN0b3J5IGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5IHtcbiAgICAvLyBUaGUgbGF5ZXIgdGhlIGN1cnJlbnQgb2JqZWN0IHdpbGwgYmUgYWRkZWQgdG8uIFRoaXMgaXMgdXNlZCBieSBoZWxwZXIgZnVuY3Rpb25zIGluIEdhbWUudHMuXG4gICAgcHJvdGVjdGVkIF90YXJnZXRHcm91cDogUGhhc2VyLkdyb3VwID0gbnVsbDtcblxuICAgIC8vIFRoaXMgaXMgdGhlIGxheWVyIHRoYXQgc3RhbmRhcmQgLmFkZCBjYWxscyB3aWxsIGJlIGFwcGxpZWQgdG8uXG4gICAgcHJvdGVjdGVkIF9kZWZhdWx0TGF5ZXI6IFBoYXNlci5Hcm91cCA9IHRoaXMud29ybGQ7XG5cbiAgICAvLyBvdmVycmlkZXNcbiAgICAvKipcbiAgICAqIEFkZHMgYW4gZXhpc3RpbmcgZGlzcGxheSBvYmplY3QgdG8gdGhlIGdhbWUgd29ybGQuXG4gICAgKiBcbiAgICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5I2V4aXN0aW5nXG4gICAgKiBAcGFyYW0ge2FueX0gb2JqZWN0IC0gQW4gaW5zdGFuY2Ugb2YgUGhhc2VyLlNwcml0ZSwgUGhhc2VyLkJ1dHRvbiBvciBhbnkgb3RoZXIgZGlzcGxheSBvYmplY3QuXG4gICAgKiBAcmV0dXJuIHthbnl9IFRoZSBjaGlsZCB0aGF0IHdhcyBhZGRlZCB0byB0aGUgV29ybGQuXG4gICAgKi9cbiAgICBwdWJsaWMgZXhpc3Rpbmcob2JqZWN0KTogYW55IHtcbiAgICAgICAgbGV0IGdyb3VwID0gdGhpcy50YXJnZXRHcm91cDtcbiAgICAgICAgdGhpcy5fdGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkKG9iamVjdCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogQ3JlYXRlIGEgbmV3IGBJbWFnZWAgb2JqZWN0LlxuICAgICogXG4gICAgKiBBbiBJbWFnZSBpcyBhIGxpZ2h0LXdlaWdodCBvYmplY3QgeW91IGNhbiB1c2UgdG8gZGlzcGxheSBhbnl0aGluZyB0aGF0IGRvZXNuJ3QgbmVlZCBwaHlzaWNzIG9yIGFuaW1hdGlvbi5cbiAgICAqIFxuICAgICogSXQgY2FuIHN0aWxsIHJvdGF0ZSwgc2NhbGUsIGNyb3AgYW5kIHJlY2VpdmUgaW5wdXQgZXZlbnRzLiBcbiAgICAqIFRoaXMgbWFrZXMgaXQgcGVyZmVjdCBmb3IgbG9nb3MsIGJhY2tncm91bmRzLCBzaW1wbGUgYnV0dG9ucyBhbmQgb3RoZXIgbm9uLVNwcml0ZSBncmFwaGljcy5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSNpbWFnZVxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt4PTBdIC0gVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgSW1hZ2UuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgSW1hZ2UgbWF5IGJlIGluLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt5PTBdIC0gVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgSW1hZ2UuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgSW1hZ2UgbWF5IGJlIGluLlxuICAgICogQHBhcmFtIHtzdHJpbmd8UGhhc2VyLlJlbmRlclRleHR1cmV8UGhhc2VyLkJpdG1hcERhdGF8UGhhc2VyLlZpZGVvfFBJWEkuVGV4dHVyZX0gW2tleV0gLSBUaGUgaW1hZ2UgdXNlZCBhcyBhIHRleHR1cmUgYnkgdGhpcyBkaXNwbGF5IG9iamVjdCBkdXJpbmcgcmVuZGVyaW5nLiBJZiBhIHN0cmluZyBQaGFzZXIgd2lsbCBnZXQgZm9yIGFuIGVudHJ5IGluIHRoZSBJbWFnZSBDYWNoZS4gT3IgaXQgY2FuIGJlIGFuIGluc3RhbmNlIG9mIGEgUmVuZGVyVGV4dHVyZSwgQml0bWFwRGF0YSwgVmlkZW8gb3IgUElYSS5UZXh0dXJlLlxuICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbZnJhbWVdIC0gSWYgYSBUZXh0dXJlIEF0bGFzIG9yIFNwcml0ZSBTaGVldCBpcyB1c2VkIHRoaXMgYWxsb3dzIHlvdSB0byBzcGVjaWZ5IHRoZSBmcmFtZSB0byBiZSB1c2VkLiBVc2UgZWl0aGVyIGFuIGludGVnZXIgZm9yIGEgRnJhbWUgSUQgb3IgYSBzdHJpbmcgZm9yIGEgZnJhbWUgbmFtZS5cbiAgICAqIEBwYXJhbSB7UGhhc2VyLkdyb3VwfSBbZ3JvdXBdIC0gT3B0aW9uYWwgR3JvdXAgdG8gYWRkIHRoZSBvYmplY3QgdG8uIElmIG5vdCBzcGVjaWZpZWQgaXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgV29ybGQgZ3JvdXAuXG4gICAgKiBAcmV0dXJucyB7UGhhc2VyLkltYWdlfSBUaGUgbmV3bHkgY3JlYXRlZCBJbWFnZSBvYmplY3QuXG4gICAgKi9cbiAgICBwdWJsaWMgaW1hZ2UoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwga2V5Pzogc3RyaW5nIHwgUGhhc2VyLlJlbmRlclRleHR1cmUgfCBQaGFzZXIuQml0bWFwRGF0YSB8IFBJWEkuVGV4dHVyZSwgZnJhbWU/OiBzdHJpbmcgfCBudW1iZXIsIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogUGhhc2VyLkltYWdlIHtcbiAgICAgICAgaWYgKGdyb3VwID09PSB1bmRlZmluZWQpIHsgZ3JvdXAgPSB0aGlzLnRhcmdldEdyb3VwOyB9XG4gICAgICAgIHRoaXMuX3RhcmdldEdyb3VwID0gbnVsbDtcblxuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBQaGFzZXIuSW1hZ2UodGhpcy5nYW1lLCB4LCB5LCBrZXksIGZyYW1lKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgU3ByaXRlIHdpdGggc3BlY2lmaWMgcG9zaXRpb24gYW5kIHNwcml0ZSBzaGVldCBrZXkuXG4gICAgKlxuICAgICogQXQgaXRzIG1vc3QgYmFzaWMgYSBTcHJpdGUgY29uc2lzdHMgb2YgYSBzZXQgb2YgY29vcmRpbmF0ZXMgYW5kIGEgdGV4dHVyZSB0aGF0IGlzIHVzZWQgd2hlbiByZW5kZXJlZC5cbiAgICAqIFRoZXkgYWxzbyBjb250YWluIGFkZGl0aW9uYWwgcHJvcGVydGllcyBhbGxvd2luZyBmb3IgcGh5c2ljcyBtb3Rpb24gKHZpYSBTcHJpdGUuYm9keSksIGlucHV0IGhhbmRsaW5nICh2aWEgU3ByaXRlLmlucHV0KSxcbiAgICAqIGV2ZW50cyAodmlhIFNwcml0ZS5ldmVudHMpLCBhbmltYXRpb24gKHZpYSBTcHJpdGUuYW5pbWF0aW9ucyksIGNhbWVyYSBjdWxsaW5nIGFuZCBtb3JlLiBQbGVhc2Ugc2VlIHRoZSBFeGFtcGxlcyBmb3IgdXNlIGNhc2VzLlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5I3Nwcml0ZVxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt4PTBdIC0gVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgc3ByaXRlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIHNwcml0ZSBtYXkgYmUgaW4uXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3k9MF0gLSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBzcHJpdGUuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgc3ByaXRlIG1heSBiZSBpbi5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfFBoYXNlci5SZW5kZXJUZXh0dXJlfFBoYXNlci5CaXRtYXBEYXRhfFBoYXNlci5WaWRlb3xQSVhJLlRleHR1cmV9IFtrZXldIC0gVGhlIGltYWdlIHVzZWQgYXMgYSB0ZXh0dXJlIGJ5IHRoaXMgZGlzcGxheSBvYmplY3QgZHVyaW5nIHJlbmRlcmluZy4gSWYgYSBzdHJpbmcgUGhhc2VyIHdpbGwgZ2V0IGZvciBhbiBlbnRyeSBpbiB0aGUgSW1hZ2UgQ2FjaGUuIE9yIGl0IGNhbiBiZSBhbiBpbnN0YW5jZSBvZiBhIFJlbmRlclRleHR1cmUsIEJpdG1hcERhdGEsIFZpZGVvIG9yIFBJWEkuVGV4dHVyZS5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW2ZyYW1lXSAtIElmIGEgVGV4dHVyZSBBdGxhcyBvciBTcHJpdGUgU2hlZXQgaXMgdXNlZCB0aGlzIGFsbG93cyB5b3UgdG8gc3BlY2lmeSB0aGUgZnJhbWUgdG8gYmUgdXNlZC4gVXNlIGVpdGhlciBhbiBpbnRlZ2VyIGZvciBhIEZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXG4gICAgKiBAcGFyYW0ge1BoYXNlci5Hcm91cH0gW2dyb3VwXSAtIE9wdGlvbmFsIEdyb3VwIHRvIGFkZCB0aGUgb2JqZWN0IHRvLiBJZiBub3Qgc3BlY2lmaWVkIGl0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIFdvcmxkIGdyb3VwLlxuICAgICogQHJldHVybnMge1BoYXNlci5TcHJpdGV9IFRoZSBuZXdseSBjcmVhdGVkIFNwcml0ZSBvYmplY3QuXG4gICAgKi9cbiAgICBwdWJsaWMgc3ByaXRlKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIGtleT86IHN0cmluZyB8IFBJWEkuVGV4dHVyZSwgZnJhbWU/OiBzdHJpbmcgfCBudW1iZXIsIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogUGhhc2VyLlNwcml0ZSB7XG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy50YXJnZXRHcm91cDsgfVxuICAgICAgICB0aGlzLl90YXJnZXRHcm91cCA9IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIGdyb3VwLmNyZWF0ZSh4LCB5LCBrZXksIGZyYW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIENyZWF0ZSBhIG5ldyBDcmVhdHVyZSBBbmltYXRpb24gb2JqZWN0LlxuICAgICpcbiAgICAqIENyZWF0dXJlIGlzIGEgY3VzdG9tIEdhbWUgT2JqZWN0IHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgQ3JlYXR1cmUgUnVudGltZSBsaWJyYXJpZXMgYnkgS2VzdHJlbCBNb29uIFN0dWRpb3MuXG4gICAgKiBcbiAgICAqIEl0IGFsbG93cyB5b3UgdG8gZGlzcGxheSBhbmltYXRlZCBHYW1lIE9iamVjdHMgdGhhdCB3ZXJlIGNyZWF0ZWQgd2l0aCB0aGUgW0NyZWF0dXJlIEF1dG9tYXRlZCBBbmltYXRpb24gVG9vbF0oaHR0cDovL3d3dy5rZXN0cmVsbW9vbi5jb20vY3JlYXR1cmUvKS5cbiAgICAqIFxuICAgICogTm90ZSAxOiBZb3UgY2FuIG9ubHkgdXNlIFBoYXNlci5DcmVhdHVyZSBvYmplY3RzIGluIFdlYkdMIGVuYWJsZWQgZ2FtZXMuIFRoZXkgZG8gbm90IHdvcmsgaW4gQ2FudmFzIG1vZGUgZ2FtZXMuXG4gICAgKlxuICAgICogTm90ZSAyOiBZb3UgbXVzdCB1c2UgYSBidWlsZCBvZiBQaGFzZXIgdGhhdCBpbmNsdWRlcyB0aGUgQ3JlYXR1cmVNZXNoQm9uZS5qcyBydW50aW1lIGFuZCBnbC1tYXRyaXguanMsIG9yIGhhdmUgdGhlbVxuICAgICogbG9hZGVkIGJlZm9yZSB5b3VyIFBoYXNlciBnYW1lIGJvb3RzLlxuICAgICogXG4gICAgKiBTZWUgdGhlIFBoYXNlciBjdXN0b20gYnVpbGQgcHJvY2VzcyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5I2NyZWF0dXJlXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3g9MF0gLSBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBjcmVhdHVyZS4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyBjcmVhdHVyZSBtYXkgYmUgaW4uXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3k9MF0gLSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBjcmVhdHVyZS4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyBjcmVhdHVyZSBtYXkgYmUgaW4uXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xQSVhJLlRleHR1cmV9IFtrZXldIC0gVGhlIGltYWdlIHVzZWQgYXMgYSB0ZXh0dXJlIGJ5IHRoaXMgY3JlYXR1cmUgb2JqZWN0IGR1cmluZyByZW5kZXJpbmcuIElmIGEgc3RyaW5nIFBoYXNlciB3aWxsIGdldCBmb3IgYW4gZW50cnkgaW4gdGhlIEltYWdlIENhY2hlLiBPciBpdCBjYW4gYmUgYW4gaW5zdGFuY2Ugb2YgYSBQSVhJLlRleHR1cmUuXG4gICAgKiBAcGFyYW0ge1BoYXNlci5Hcm91cH0gW2dyb3VwXSAtIE9wdGlvbmFsIEdyb3VwIHRvIGFkZCB0aGUgb2JqZWN0IHRvLiBJZiBub3Qgc3BlY2lmaWVkIGl0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIERlZmF1bHQgTGF5ZXIgZ3JvdXAuXG4gICAgKiBAcmV0dXJucyB7UGhhc2VyLkNyZWF0dXJlfSBUaGUgbmV3bHkgY3JlYXRlZCBTcHJpdGUgb2JqZWN0LlxuICAgICovXG4gICAgcHVibGljIGNyZWF0dXJlKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIGtleT86IHN0cmluZywgbWVzaD86IGFueSwgZ3JvdXA/OiBQaGFzZXIuR3JvdXApOiBhbnkge1xuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCkgeyBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7IH1cbiAgICAgICAgdGhpcy5fdGFyZ2V0R3JvdXAgPSBudWxsO1xuXG4gICAgICAgIHZhciBvYmogPSBuZXcgUGhhc2VyWydDcmVhdHVyZSddKHRoaXMuZ2FtZSwgeCwgeSwga2V5LCBtZXNoKTtcblxuICAgICAgICBncm91cC5hZGQob2JqKTtcblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQSBHcm91cCBpcyBhIGNvbnRhaW5lciBmb3IgZGlzcGxheSBvYmplY3RzIHRoYXQgYWxsb3dzIGZvciBmYXN0IHBvb2xpbmcsIHJlY3ljbGluZyBhbmQgY29sbGlzaW9uIGNoZWNrcy5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSNncm91cFxuICAgICogQHBhcmFtIHthbnl9IFtwYXJlbnRdIC0gVGhlIHBhcmVudCBHcm91cCBvciBEaXNwbGF5T2JqZWN0Q29udGFpbmVyIHRoYXQgd2lsbCBob2xkIHRoaXMgZ3JvdXAsIGlmIGFueS4gSWYgc2V0IHRvIG51bGwgdGhlIEdyb3VwIHdvbid0IGJlIGFkZGVkIHRvIHRoZSBkaXNwbGF5IGxpc3QuIElmIHVuZGVmaW5lZCBpdCB3aWxsIGJlIGFkZGVkIHRvIFdvcmxkIGJ5IGRlZmF1bHQuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW25hbWU9J2dyb3VwJ10gLSBBIG5hbWUgZm9yIHRoaXMgR3JvdXAuIE5vdCB1c2VkIGludGVybmFsbHkgYnV0IHVzZWZ1bCBmb3IgZGVidWdnaW5nLlxuICAgICogQHBhcmFtIHtib29sZWFufSBbYWRkVG9TdGFnZT1mYWxzZV0gLSBJZiBzZXQgdG8gdHJ1ZSB0aGlzIEdyb3VwIHdpbGwgYmUgYWRkZWQgZGlyZWN0bHkgdG8gdGhlIEdhbWUuU3RhZ2UgaW5zdGVhZCBvZiBHYW1lLldvcmxkLlxuICAgICogQHBhcmFtIHtib29sZWFufSBbZW5hYmxlQm9keT1mYWxzZV0gLSBJZiB0cnVlIGFsbCBTcHJpdGVzIGNyZWF0ZWQgd2l0aCBgR3JvdXAuY3JlYXRlYCBvciBgR3JvdXAuY3JlYXRlTXVsaXRwbGVgIHdpbGwgaGF2ZSBhIHBoeXNpY3MgYm9keSBjcmVhdGVkIG9uIHRoZW0uIENoYW5nZSB0aGUgYm9keSB0eXBlIHdpdGggcGh5c2ljc0JvZHlUeXBlLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IFtwaHlzaWNzQm9keVR5cGU9MF0gLSBJZiBlbmFibGVCb2R5IGlzIHRydWUgdGhpcyBpcyB0aGUgdHlwZSBvZiBwaHlzaWNzIGJvZHkgdGhhdCBpcyBjcmVhdGVkIG9uIG5ldyBTcHJpdGVzLiBQaGFzZXIuUGh5c2ljcy5BUkNBREUsIFBoYXNlci5QaHlzaWNzLlAyLCBQaGFzZXIuUGh5c2ljcy5OSU5KQSwgZXRjLlxuICAgICogQHJldHVybiB7UGhhc2VyLkdyb3VwfSBUaGUgbmV3bHkgY3JlYXRlZCBHcm91cC5cbiAgICAqL1xuICAgIHB1YmxpYyBncm91cChwYXJlbnQ/OiBhbnksIG5hbWU6IHN0cmluZyA9ICdncm91cCcsIGFkZFRvU3RhZ2U6IGJvb2xlYW4gPSBmYWxzZSwgZW5hYmxlQm9keTogYm9vbGVhbiA9IGZhbHNlLCBwaHlzaWNzQm9keVR5cGU6IG51bWJlciA9IDApIHtcbiAgICAgICAgaWYgKHBhcmVudCA9PT0gdW5kZWZpbmVkICYmIGFkZFRvU3RhZ2UgIT09IHRydWUpIHsgcGFyZW50ID0gdGhpcy50YXJnZXRHcm91cDsgfVxuICAgICAgICB0aGlzLl90YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBuZXcgUGhhc2VyLkdyb3VwKHRoaXMuZ2FtZSwgcGFyZW50LCBuYW1lLCBhZGRUb1N0YWdlLCBlbmFibGVCb2R5LCBwaHlzaWNzQm9keVR5cGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQSBHcm91cCBpcyBhIGNvbnRhaW5lciBmb3IgZGlzcGxheSBvYmplY3RzIHRoYXQgYWxsb3dzIGZvciBmYXN0IHBvb2xpbmcsIHJlY3ljbGluZyBhbmQgY29sbGlzaW9uIGNoZWNrcy5cbiAgICAqIFxuICAgICogQSBQaHlzaWNzIEdyb3VwIGlzIHRoZSBzYW1lIGFzIGFuIG9yZGluYXJ5IEdyb3VwIGV4Y2VwdCB0aGF0IGlzIGhhcyBlbmFibGVCb2R5IHR1cm5lZCBvbiBieSBkZWZhdWx0LCBzbyBhbnkgU3ByaXRlcyBpdCBjcmVhdGVzXG4gICAgKiBhcmUgYXV0b21hdGljYWxseSBnaXZlbiBhIHBoeXNpY3MgYm9keS5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSNwaHlzaWNzR3JvdXBcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbcGh5c2ljc0JvZHlUeXBlPVBoYXNlci5QaHlzaWNzLkFSQ0FERV0gLSBJZiBlbmFibGVCb2R5IGlzIHRydWUgdGhpcyBpcyB0aGUgdHlwZSBvZiBwaHlzaWNzIGJvZHkgdGhhdCBpcyBjcmVhdGVkIG9uIG5ldyBTcHJpdGVzLiBQaGFzZXIuUGh5c2ljcy5BUkNBREUsIFBoYXNlci5QaHlzaWNzLlAyLCBQaGFzZXIuUGh5c2ljcy5OSU5KQSwgZXRjLlxuICAgICogQHBhcmFtIHthbnl9IFtwYXJlbnRdIC0gVGhlIHBhcmVudCBHcm91cCBvciBEaXNwbGF5T2JqZWN0Q29udGFpbmVyIHRoYXQgd2lsbCBob2xkIHRoaXMgZ3JvdXAsIGlmIGFueS4gSWYgc2V0IHRvIG51bGwgdGhlIEdyb3VwIHdvbid0IGJlIGFkZGVkIHRvIHRoZSBkaXNwbGF5IGxpc3QuIElmIHVuZGVmaW5lZCBpdCB3aWxsIGJlIGFkZGVkIHRvIFdvcmxkIGJ5IGRlZmF1bHQuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW25hbWU9J2dyb3VwJ10gLSBBIG5hbWUgZm9yIHRoaXMgR3JvdXAuIE5vdCB1c2VkIGludGVybmFsbHkgYnV0IHVzZWZ1bCBmb3IgZGVidWdnaW5nLlxuICAgICogQHBhcmFtIHtib29sZWFufSBbYWRkVG9TdGFnZT1mYWxzZV0gLSBJZiBzZXQgdG8gdHJ1ZSB0aGlzIEdyb3VwIHdpbGwgYmUgYWRkZWQgZGlyZWN0bHkgdG8gdGhlIEdhbWUuU3RhZ2UgaW5zdGVhZCBvZiBHYW1lLldvcmxkLlxuICAgICogQHJldHVybiB7UGhhc2VyLkdyb3VwfSBUaGUgbmV3bHkgY3JlYXRlZCBHcm91cC5cbiAgICAqL1xuICAgIHB1YmxpYyBwaHlzaWNzR3JvdXAocGh5c2ljc0JvZHlUeXBlOiBudW1iZXIgPSAwLCBwYXJlbnQ/OiBhbnksIG5hbWU6IHN0cmluZyA9ICdncm91cCcsIGFkZFRvU3RhZ2U6IGJvb2xlYW4gPSBmYWxzZSk6IFBoYXNlci5Hcm91cCB7XG4gICAgICAgIGlmIChwYXJlbnQgPT09IHVuZGVmaW5lZCkgeyBwYXJlbnQgPSB0aGlzLnRhcmdldEdyb3VwOyB9XG4gICAgICAgIHRoaXMuX3RhcmdldEdyb3VwID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIG5ldyBQaGFzZXIuR3JvdXAodGhpcy5nYW1lLCBwYXJlbnQsIG5hbWUsIGFkZFRvU3RhZ2UsIHRydWUsIHBoeXNpY3NCb2R5VHlwZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBBIFNwcml0ZUJhdGNoIGlzIGEgcmVhbGx5IGZhc3QgdmVyc2lvbiBvZiBhIFBoYXNlciBHcm91cCBidWlsdCBzb2xlbHkgZm9yIHNwZWVkLlxuICAgICogVXNlIHdoZW4geW91IG5lZWQgYSBsb3Qgb2Ygc3ByaXRlcyBvciBwYXJ0aWNsZXMgYWxsIHNoYXJpbmcgdGhlIHNhbWUgdGV4dHVyZS5cbiAgICAqIFRoZSBzcGVlZCBnYWlucyBhcmUgc3BlY2lmaWNhbGx5IGZvciBXZWJHTC4gSW4gQ2FudmFzIG1vZGUgeW91IHdvbid0IHNlZSBhbnkgcmVhbCBkaWZmZXJlbmNlLlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5I3Nwcml0ZUJhdGNoXG4gICAgKiBAcGFyYW0ge1BoYXNlci5Hcm91cHxudWxsfSBwYXJlbnQgLSBUaGUgcGFyZW50IEdyb3VwIHRoYXQgd2lsbCBob2xkIHRoaXMgU3ByaXRlIEJhdGNoLiBTZXQgdG8gYHVuZGVmaW5lZGAgb3IgYG51bGxgIHRvIGFkZCBkaXJlY3RseSB0byBnYW1lLndvcmxkLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtuYW1lPSdncm91cCddIC0gQSBuYW1lIGZvciB0aGlzIFNwcml0ZSBCYXRjaC4gTm90IHVzZWQgaW50ZXJuYWxseSBidXQgdXNlZnVsIGZvciBkZWJ1Z2dpbmcuXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFthZGRUb1N0YWdlPWZhbHNlXSAtIElmIHNldCB0byB0cnVlIHRoaXMgU3ByaXRlIEJhdGNoIHdpbGwgYmUgYWRkZWQgZGlyZWN0bHkgdG8gdGhlIEdhbWUuU3RhZ2UgaW5zdGVhZCBvZiB0aGUgcGFyZW50LlxuICAgICogQHJldHVybiB7UGhhc2VyLlNwcml0ZUJhdGNofSBUaGUgbmV3bHkgY3JlYXRlZCBTcHJpdGUgQmF0Y2guXG4gICAgKi9cbiAgICBwdWJsaWMgc3ByaXRlQmF0Y2gocGFyZW50PzogYW55LCBuYW1lOiBzdHJpbmcgPSBcInNwcml0ZUJhdGNoXCIsIGFkZFRvU3RhZ2U6IGJvb2xlYW4gPSBmYWxzZSk6IFBoYXNlci5TcHJpdGVCYXRjaCB7XG4gICAgICAgIGlmIChwYXJlbnQgPT09IHVuZGVmaW5lZCkgeyBwYXJlbnQgPSB0aGlzLnRhcmdldEdyb3VwIH1cbiAgICAgICAgdGhpcy5fdGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4gbmV3IFBoYXNlci5TcHJpdGVCYXRjaCh0aGlzLmdhbWUsIHBhcmVudCwgbmFtZSwgYWRkVG9TdGFnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgVGlsZVNwcml0ZSBvYmplY3QuXG4gICAqXG4gICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5I3RpbGVTcHJpdGVcbiAgICogQHBhcmFtIHtudW1iZXJ9IHggLSBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBUaWxlU3ByaXRlLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIFRpbGVTcHJpdGUgbWF5IGJlIGluLlxuICAgKiBAcGFyYW0ge251bWJlcn0geSAtIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIFRpbGVTcHJpdGUuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgVGlsZVNwcml0ZSBtYXkgYmUgaW4uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAtIFRoZSB3aWR0aCBvZiB0aGUgVGlsZVNwcml0ZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCAtIFRoZSBoZWlnaHQgb2YgdGhlIFRpbGVTcHJpdGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfFBoYXNlci5SZW5kZXJUZXh0dXJlfFBoYXNlci5CaXRtYXBEYXRhfFBoYXNlci5WaWRlb3xQSVhJLlRleHR1cmV9IGtleSAtIFRoZSBpbWFnZSB1c2VkIGFzIGEgdGV4dHVyZSBieSB0aGlzIGRpc3BsYXkgb2JqZWN0IGR1cmluZyByZW5kZXJpbmcuIElmIGEgc3RyaW5nIFBoYXNlciB3aWxsIGdldCBmb3IgYW4gZW50cnkgaW4gdGhlIEltYWdlIENhY2hlLiBPciBpdCBjYW4gYmUgYW4gaW5zdGFuY2Ugb2YgYSBSZW5kZXJUZXh0dXJlLCBCaXRtYXBEYXRhLCBWaWRlbyBvciBQSVhJLlRleHR1cmUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW2ZyYW1lXSAtIElmIGEgVGV4dHVyZSBBdGxhcyBvciBTcHJpdGUgU2hlZXQgaXMgdXNlZCB0aGlzIGFsbG93cyB5b3UgdG8gc3BlY2lmeSB0aGUgZnJhbWUgdG8gYmUgdXNlZC4gVXNlIGVpdGhlciBhbiBpbnRlZ2VyIGZvciBhIEZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXG4gICAqIEBwYXJhbSB7UGhhc2VyLkdyb3VwfSBbZ3JvdXBdIC0gT3B0aW9uYWwgR3JvdXAgdG8gYWRkIHRoZSBvYmplY3QgdG8uIElmIG5vdCBzcGVjaWZpZWQgaXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgRGVmYXVsdCBMYXllciBncm91cC5cbiAgICogQHJldHVybiB7UGhhc2VyLlRpbGVTcHJpdGV9IFRoZSBuZXdseSBjcmVhdGVkIFRpbGVTcHJpdGUgb2JqZWN0LlxuICAgKi9cbiAgICBwdWJsaWMgdGlsZVNwcml0ZSh4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCB3aWR0aDogbnVtYmVyID0gMCwgaGVpZ2h0OiBudW1iZXIgPSAwLCBrZXk/OiBzdHJpbmcsIGZyYW1lPzogc3RyaW5nIHwgbnVtYmVyLCBncm91cD86IFBoYXNlci5Hcm91cCk6IFBoYXNlci5UaWxlU3ByaXRlIHtcbiAgICAgICAgaWYgKGdyb3VwID09PSB1bmRlZmluZWQpIHsgZ3JvdXAgPSB0aGlzLnRhcmdldEdyb3VwOyB9XG4gICAgICAgIHRoaXMuX3RhcmdldEdyb3VwID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGdyb3VwLmFkZChuZXcgUGhhc2VyLlRpbGVTcHJpdGUodGhpcy5nYW1lLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBrZXksIGZyYW1lKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgUm9wZSBvYmplY3QuXG4gICAqXG4gICAqIEV4YW1wbGUgdXNhZ2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9jb2Rldmluc2t5L3BoYXNlci1yb3BlLWRlbW8vYmxvYi9tYXN0ZXIvZGlzdC9kZW1vLmpzXG4gICAqXG4gICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5I3JvcGVcbiAgICogQHBhcmFtIHtudW1iZXJ9IFt4PTBdIC0gVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgUm9wZS4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyByb3BlIG1heSBiZSBpbi5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFt5PTBdIC0gVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgUm9wZS4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyByb3BlIG1heSBiZSBpbi5cbiAgICogQHBhcmFtIHtzdHJpbmd8UGhhc2VyLlJlbmRlclRleHR1cmV8UGhhc2VyLkJpdG1hcERhdGF8UGhhc2VyLlZpZGVvfFBJWEkuVGV4dHVyZX0gW2tleV0gLSBUaGUgaW1hZ2UgdXNlZCBhcyBhIHRleHR1cmUgYnkgdGhpcyBkaXNwbGF5IG9iamVjdCBkdXJpbmcgcmVuZGVyaW5nLiBJZiBhIHN0cmluZyBQaGFzZXIgd2lsbCBnZXQgZm9yIGFuIGVudHJ5IGluIHRoZSBJbWFnZSBDYWNoZS4gT3IgaXQgY2FuIGJlIGFuIGluc3RhbmNlIG9mIGEgUmVuZGVyVGV4dHVyZSwgQml0bWFwRGF0YSwgVmlkZW8gb3IgUElYSS5UZXh0dXJlLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtmcmFtZV0gLSBJZiBhIFRleHR1cmUgQXRsYXMgb3IgU3ByaXRlIFNoZWV0IGlzIHVzZWQgdGhpcyBhbGxvd3MgeW91IHRvIHNwZWNpZnkgdGhlIGZyYW1lIHRvIGJlIHVzZWQuIFVzZSBlaXRoZXIgYW4gaW50ZWdlciBmb3IgYSBGcmFtZSBJRCBvciBhIHN0cmluZyBmb3IgYSBmcmFtZSBuYW1lLlxuICAgKiBAcGFyYW0ge0FycmF5fSBwb2ludHMgLSBBbiBhcnJheSBvZiB7UGhhc2VyLlBvaW50fS5cbiAgICogQHBhcmFtIHtQaGFzZXIuR3JvdXB9IFtncm91cF0gLSBPcHRpb25hbCBHcm91cCB0byBhZGQgdGhlIG9iamVjdCB0by4gSWYgbm90IHNwZWNpZmllZCBpdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBEZWZhdWx0IExheWVyIGdyb3VwLlxuICAgKiBAcmV0dXJuIHtQaGFzZXIuUm9wZX0gVGhlIG5ld2x5IGNyZWF0ZWQgUm9wZSBvYmplY3QuXG4gICAqL1xuICAgIHB1YmxpYyByb3BlKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIGtleT86IHN0cmluZywgZnJhbWU/OiBzdHJpbmcgfCBudW1iZXIsIHBvaW50cz86IFBoYXNlci5Qb2ludFtdLCBncm91cD86IFBoYXNlci5Hcm91cCk6IFBoYXNlci5Sb3BlIHtcbiAgICAgICAgaWYgKGdyb3VwID09PSB1bmRlZmluZWQpIHsgZ3JvdXAgPSB0aGlzLnRhcmdldEdyb3VwOyB9XG4gICAgICAgIHRoaXMuX3RhcmdldEdyb3VwID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGdyb3VwLmFkZChuZXcgUGhhc2VyLlJvcGUodGhpcy5nYW1lLCB4LCB5LCBrZXksIGZyYW1lLCBwb2ludHMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIENyZWF0ZXMgYSBuZXcgVGV4dCBvYmplY3QuXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkjdGV4dFxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt4PTBdIC0gVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgVGV4dC4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyB0ZXh0IG1heSBiZSBpbi5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeT0wXSAtIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIFRleHQuIFRoZSBjb29yZGluYXRlIGlzIHJlbGF0aXZlIHRvIGFueSBwYXJlbnQgY29udGFpbmVyIHRoaXMgdGV4dCBtYXkgYmUgaW4uXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW3RleHQ9JyddIC0gVGhlIHRleHQgc3RyaW5nIHRoYXQgd2lsbCBiZSBkaXNwbGF5ZWQuXG4gICAgKiBAcGFyYW0ge29iamVjdH0gW3N0eWxlXSAtIFRoZSBzdHlsZSBvYmplY3QgY29udGFpbmluZyBzdHlsZSBhdHRyaWJ1dGVzIGxpa2UgZm9udCwgZm9udCBzaXplICwgZXRjLlxuICAgICogQHBhcmFtIHtQaGFzZXIuR3JvdXB9IFtncm91cF0gLSBPcHRpb25hbCBHcm91cCB0byBhZGQgdGhlIG9iamVjdCB0by4gSWYgbm90IHNwZWNpZmllZCBpdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBEZWZhdWx0IExheWVyIGdyb3VwLlxuICAgICogQHJldHVybiB7UGhhc2VyLlRleHR9IFRoZSBuZXdseSBjcmVhdGVkIHRleHQgb2JqZWN0LlxuICAgICovXG4gICAgcHVibGljIHRleHQoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgdGV4dDogc3RyaW5nID0gJycsIHN0eWxlPzogUGhhc2VyLlBoYXNlclRleHRTdHlsZSwgZ3JvdXA/OiBQaGFzZXIuR3JvdXApOiBQaGFzZXIuVGV4dCB7XG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy50YXJnZXRHcm91cDsgfVxuICAgICAgICB0aGlzLl90YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBncm91cC5hZGQobmV3IFBoYXNlci5UZXh0KHRoaXMuZ2FtZSwgeCwgeSwgdGV4dCwgc3R5bGUpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIENyZWF0ZXMgYSBuZXcgQnV0dG9uIG9iamVjdC5cbiAgICAqXG4gICAgKiBAbWV0aG9kIFBoYXNlci5HYW1lT2JqZWN0RmFjdG9yeSNidXR0b25cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeD0wXSAtIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIEJ1dHRvbi4gVGhlIGNvb3JkaW5hdGUgaXMgcmVsYXRpdmUgdG8gYW55IHBhcmVudCBjb250YWluZXIgdGhpcyBidXR0b24gbWF5IGJlIGluLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt5PTBdIC0gVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgQnV0dG9uLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIGJ1dHRvbiBtYXkgYmUgaW4uXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2tleV0gLSBUaGUgaW1hZ2Uga2V5IGFzIGRlZmluZWQgaW4gdGhlIEdhbWUuQ2FjaGUgdG8gdXNlIGFzIHRoZSB0ZXh0dXJlIGZvciB0aGlzIGJ1dHRvbi5cbiAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYWxsYmFja10gLSBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoaXMgYnV0dG9uIGlzIHByZXNzZWRcbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBbY2FsbGJhY2tDb250ZXh0XSAtIFRoZSBjb250ZXh0IGluIHdoaWNoIHRoZSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCAodXN1YWxseSAndGhpcycpXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtvdmVyRnJhbWVdIC0gVGhpcyBpcyB0aGUgZnJhbWUgb3IgZnJhbWVOYW1lIHRoYXQgd2lsbCBiZSBzZXQgd2hlbiB0aGlzIGJ1dHRvbiBpcyBpbiBhbiBvdmVyIHN0YXRlLiBHaXZlIGVpdGhlciBhIG51bWJlciB0byB1c2UgYSBmcmFtZSBJRCBvciBhIHN0cmluZyBmb3IgYSBmcmFtZSBuYW1lLlxuICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbb3V0RnJhbWVdIC0gVGhpcyBpcyB0aGUgZnJhbWUgb3IgZnJhbWVOYW1lIHRoYXQgd2lsbCBiZSBzZXQgd2hlbiB0aGlzIGJ1dHRvbiBpcyBpbiBhbiBvdXQgc3RhdGUuIEdpdmUgZWl0aGVyIGEgbnVtYmVyIHRvIHVzZSBhIGZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtkb3duRnJhbWVdIC0gVGhpcyBpcyB0aGUgZnJhbWUgb3IgZnJhbWVOYW1lIHRoYXQgd2lsbCBiZSBzZXQgd2hlbiB0aGlzIGJ1dHRvbiBpcyBpbiBhIGRvd24gc3RhdGUuIEdpdmUgZWl0aGVyIGEgbnVtYmVyIHRvIHVzZSBhIGZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFt1cEZyYW1lXSAtIFRoaXMgaXMgdGhlIGZyYW1lIG9yIGZyYW1lTmFtZSB0aGF0IHdpbGwgYmUgc2V0IHdoZW4gdGhpcyBidXR0b24gaXMgaW4gYW4gdXAgc3RhdGUuIEdpdmUgZWl0aGVyIGEgbnVtYmVyIHRvIHVzZSBhIGZyYW1lIElEIG9yIGEgc3RyaW5nIGZvciBhIGZyYW1lIG5hbWUuXG4gICAgKiBAcGFyYW0ge1BoYXNlci5Hcm91cH0gW2dyb3VwXSAtIE9wdGlvbmFsIEdyb3VwIHRvIGFkZCB0aGUgb2JqZWN0IHRvLiBJZiBub3Qgc3BlY2lmaWVkIGl0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIERlZmF1bHQgTGF5ZXIgZ3JvdXAuXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuQnV0dG9ufSBUaGUgbmV3bHkgY3JlYXRlZCBCdXR0b24gb2JqZWN0LlxuICAgICovXG4gICAgcHVibGljIGJ1dHRvbih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCBrZXk/OiBzdHJpbmcsIGNhbGxiYWNrPzogRnVuY3Rpb24sIGNhbGxiYWNrQ29udGV4dD86IE9iamVjdCwgb3ZlckZyYW1lPzogc3RyaW5nIHwgbnVtYmVyLCBvdXRGcmFtZT86IHN0cmluZyB8IG51bWJlciwgZG93bkZyYW1lPzogc3RyaW5nIHwgbnVtYmVyLCB1cEZyYW1lPzogc3RyaW5nIHwgbnVtYmVyLCBncm91cD86IFBoYXNlci5Hcm91cCk6IFBoYXNlci5CdXR0b24ge1xuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCkgeyBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7IH1cbiAgICAgICAgdGhpcy5fdGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBQaGFzZXIuQnV0dG9uKHRoaXMuZ2FtZSwgeCwgeSwga2V5LCBjYWxsYmFjaywgY2FsbGJhY2tDb250ZXh0LCBvdmVyRnJhbWUsIG91dEZyYW1lLCBkb3duRnJhbWUsIHVwRnJhbWUpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIENyZWF0ZXMgYSBuZXcgR3JhcGhpY3Mgb2JqZWN0LlxuICAgICpcbiAgICAqIEBtZXRob2QgUGhhc2VyLkdhbWVPYmplY3RGYWN0b3J5I2dyYXBoaWNzXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3g9MF0gLSBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBHcmFwaGljLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIG9iamVjdCBtYXkgYmUgaW4uXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3k9MF0gLSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBHcmFwaGljLiBUaGUgY29vcmRpbmF0ZSBpcyByZWxhdGl2ZSB0byBhbnkgcGFyZW50IGNvbnRhaW5lciB0aGlzIG9iamVjdCBtYXkgYmUgaW4uXG4gICAgKiBAcGFyYW0ge1BoYXNlci5Hcm91cH0gW2dyb3VwXSAtIE9wdGlvbmFsIEdyb3VwIHRvIGFkZCB0aGUgb2JqZWN0IHRvLiBJZiBub3Qgc3BlY2lmaWVkIGl0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIFdvcmxkIGdyb3VwLlxuICAgICogQHJldHVybiB7UGhhc2VyLkdyYXBoaWNzfSBUaGUgbmV3bHkgY3JlYXRlZCBncmFwaGljcyBvYmplY3QuXG4gICAgKi9cbiAgICBwdWJsaWMgZ3JhcGhpY3MoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgZ3JvdXA/OiBQaGFzZXIuR3JvdXApOiBQaGFzZXIuR3JhcGhpY3Mge1xuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCkgeyBncm91cCA9IHRoaXMud29ybGQ7IH1cbiAgICAgICAgdGhpcy5fdGFyZ2V0R3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBQaGFzZXIuR3JhcGhpY3ModGhpcy5nYW1lLCB4LCB5KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgQml0bWFwVGV4dCBvYmplY3QuXG4gICAgKlxuICAgICogQml0bWFwVGV4dCBvYmplY3RzIHdvcmsgYnkgdGFraW5nIGEgdGV4dHVyZSBmaWxlIGFuZCBhbiBYTUwgZmlsZSB0aGF0IGRlc2NyaWJlcyB0aGUgZm9udCBzdHJ1Y3R1cmUuXG4gICAgKiBJdCB0aGVuIGdlbmVyYXRlcyBhIG5ldyBTcHJpdGUgb2JqZWN0IGZvciBlYWNoIGxldHRlciBvZiB0aGUgdGV4dCwgcHJvcG9ydGlvbmFsbHkgc3BhY2VkIG91dCBhbmQgYWxpZ25lZCB0byBcbiAgICAqIG1hdGNoIHRoZSBmb250IHN0cnVjdHVyZS5cbiAgICAqIFxuICAgICogQml0bWFwVGV4dCBvYmplY3RzIGFyZSBsZXNzIGZsZXhpYmxlIHRoYW4gVGV4dCBvYmplY3RzLCBpbiB0aGF0IHRoZXkgaGF2ZSBsZXNzIGZlYXR1cmVzIHN1Y2ggYXMgc2hhZG93cywgZmlsbHMgYW5kIHRoZSBhYmlsaXR5IFxuICAgICogdG8gdXNlIFdlYiBGb250cy4gSG93ZXZlciB5b3UgdHJhZGUgdGhpcyBmbGV4aWJpbGl0eSBmb3IgcHVyZSByZW5kZXJpbmcgc3BlZWQuIFlvdSBjYW4gYWxzbyBjcmVhdGUgdmlzdWFsbHkgY29tcGVsbGluZyBCaXRtYXBUZXh0cyBieSBcbiAgICAqIHByb2Nlc3NpbmcgdGhlIGZvbnQgdGV4dHVyZSBpbiBhbiBpbWFnZSBlZGl0b3IgZmlyc3QsIGFwcGx5aW5nIGZpbGxzIGFuZCBhbnkgb3RoZXIgZWZmZWN0cyByZXF1aXJlZC5cbiAgICAqXG4gICAgKiBUbyBjcmVhdGUgbXVsdGktbGluZSB0ZXh0IGluc2VydCBcXHIsIFxcbiBvciBcXHJcXG4gZXNjYXBlIGNvZGVzIGludG8gdGhlIHRleHQgc3RyaW5nLlxuICAgICpcbiAgICAqIFRvIGNyZWF0ZSBhIEJpdG1hcFRleHQgZGF0YSBmaWxlcyB5b3UgY2FuIHVzZTpcbiAgICAqXG4gICAgKiBCTUZvbnQgKFdpbmRvd3MsIGZyZWUpOiBodHRwOi8vd3d3LmFuZ2VsY29kZS5jb20vcHJvZHVjdHMvYm1mb250L1xuICAgICogR2x5cGggRGVzaWduZXIgKE9TIFgsIGNvbW1lcmNpYWwpOiBodHRwOi8vd3d3Ljcxc3F1YXJlZC5jb20vZW4vZ2x5cGhkZXNpZ25lclxuICAgICogTGl0dGVyYSAoV2ViLWJhc2VkLCBmcmVlKTogaHR0cDovL2t2YXphcnMuY29tL2xpdHRlcmEvXG4gICAgKlxuICAgICogQG1ldGhvZCBQaGFzZXIuR2FtZU9iamVjdEZhY3RvcnkjYml0bWFwVGV4dFxuICAgICogQHBhcmFtIHtudW1iZXJ9IHggLSBYIGNvb3JkaW5hdGUgdG8gZGlzcGxheSB0aGUgQml0bWFwVGV4dCBvYmplY3QgYXQuXG4gICAgKiBAcGFyYW0ge251bWJlcn0geSAtIFkgY29vcmRpbmF0ZSB0byBkaXNwbGF5IHRoZSBCaXRtYXBUZXh0IG9iamVjdCBhdC5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBmb250IC0gVGhlIGtleSBvZiB0aGUgQml0bWFwVGV4dCBhcyBzdG9yZWQgaW4gUGhhc2VyLkNhY2hlLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IFt0ZXh0PScnXSAtIFRoZSB0ZXh0IHRoYXQgd2lsbCBiZSByZW5kZXJlZC4gVGhpcyBjYW4gYWxzbyBiZSBzZXQgbGF0ZXIgdmlhIEJpdG1hcFRleHQudGV4dC5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbc2l6ZT0zMl0gLSBUaGUgc2l6ZSB0aGUgZm9udCB3aWxsIGJlIHJlbmRlcmVkIGF0IGluIHBpeGVscy5cbiAgICAqIEBwYXJhbSB7UGhhc2VyLkdyb3VwfSBbZ3JvdXBdIC0gT3B0aW9uYWwgR3JvdXAgdG8gYWRkIHRoZSBvYmplY3QgdG8uIElmIG5vdCBzcGVjaWZpZWQgaXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgV29ybGQgZ3JvdXAuXG4gICAgKiBAcmV0dXJuIHtQaGFzZXIuQml0bWFwVGV4dH0gVGhlIG5ld2x5IGNyZWF0ZWQgYml0bWFwVGV4dCBvYmplY3QuXG4gICAgKi9cbiAgICBwdWJsaWMgYml0bWFwVGV4dCh4PzogbnVtYmVyLCB5PzogbnVtYmVyLCBmb250Pzogc3RyaW5nLCB0ZXh0OiBzdHJpbmcgPSBcIlwiLCBzaXplOiBudW1iZXIgPSAzMiwgZ3JvdXA/OiBQaGFzZXIuR3JvdXApOiBQaGFzZXIuQml0bWFwVGV4dCB7XG4gICAgICAgIGlmIChncm91cCA9PT0gdW5kZWZpbmVkKSB7IGdyb3VwID0gdGhpcy50YXJnZXRHcm91cDsgfVxuICAgICAgICB0aGlzLl90YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgIHJldHVybiBncm91cC5hZGQobmV3IFBoYXNlci5CaXRtYXBUZXh0KHRoaXMuZ2FtZSwgeCwgeSwgZm9udCwgdGV4dCwgc2l6ZSkpO1xuICAgIH1cblxuICAgIC8vIGRpam9uIHNwZWNpZmljIGRpc3BsYXkgb2JqZWN0c1xuICAgIHB1YmxpYyBkU3ByaXRlKHg/OiBudW1iZXIsIHk/OiBudW1iZXIsIGtleT86IHN0cmluZyB8IFBoYXNlci5SZW5kZXJUZXh0dXJlIHwgUGhhc2VyLkJpdG1hcERhdGEgfCBQSVhJLlRleHR1cmUsIGZyYW1lPzogc3RyaW5nIHwgbnVtYmVyLCBuYW1lPzogc3RyaW5nLCBjb21wb25lbnRzPzogQ29tcG9uZW50W10sIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogU3ByaXRlIHtcbiAgICAgICAgaWYgKGdyb3VwID09PSB1bmRlZmluZWQpIHsgZ3JvdXAgPSB0aGlzLnRhcmdldEdyb3VwOyB9XG4gICAgICAgIHRoaXMuX3RhcmdldEdyb3VwID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGdyb3VwLmFkZChuZXcgU3ByaXRlKHgsIHksIGtleSwgZnJhbWUsIG5hbWUsIGNvbXBvbmVudHMpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZEdyb3VwKHg/OiBudW1iZXIsIHk/OiBudW1iZXIsIG5hbWU/OiBzdHJpbmcsIGFkZFRvU3RhZ2U/OiBib29sZWFuLCBjb21wb25lbnRzPzogQ29tcG9uZW50W10sIGVuYWJsZUJvZHk/OiBib29sZWFuLCBwaHlzaWNzQm9keVR5cGU/OiBudW1iZXIsIGdyb3VwPzogUGhhc2VyLkdyb3VwKTogR3JvdXAge1xuICAgICAgICBpZiAoZ3JvdXAgPT09IHVuZGVmaW5lZCAmJiBhZGRUb1N0YWdlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICBncm91cCA9IHRoaXMudGFyZ2V0R3JvdXA7XG4gICAgICAgICAgICB0aGlzLl90YXJnZXRHcm91cCA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZ3JvdXAuYWRkKG5ldyBHcm91cCh4LCB5LCBuYW1lLCBhZGRUb1N0YWdlLCBjb21wb25lbnRzLCBlbmFibGVCb2R5LCBwaHlzaWNzQm9keVR5cGUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgR3JvdXAoeCwgeSwgbmFtZSwgYWRkVG9TdGFnZSwgY29tcG9uZW50cywgZW5hYmxlQm9keSwgcGh5c2ljc0JvZHlUeXBlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZFRleHQoeDogbnVtYmVyLCB5OiBudW1iZXIsIHRleHQ/OiBzdHJpbmcsIGZvbnROYW1lPzogc3RyaW5nLCBmb250U2l6ZT86IG51bWJlciwgZm9udENvbG9yPzogc3RyaW5nLCBmb250QWxpZ24/OiBzdHJpbmcsIHdvcmRXcmFwPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIsIGxpbmVTcGFjaW5nPzogbnVtYmVyLCBzZXR0aW5ncz86IE9iamVjdCwgZ3JvdXA/OiBQaGFzZXIuR3JvdXApOiBUZXh0IHtcbiAgICAgICAgaWYgKGdyb3VwID09PSB1bmRlZmluZWQpIHsgZ3JvdXAgPSB0aGlzLnRhcmdldEdyb3VwOyB9XG4gICAgICAgIHRoaXMuX3RhcmdldEdyb3VwID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGdyb3VwLmFkZChuZXcgVGV4dCh4LCB5LCB0ZXh0LCBmb250TmFtZSwgZm9udFNpemUsIGZvbnRDb2xvciwgZm9udEFsaWduLCB3b3JkV3JhcCwgd2lkdGgsIGxpbmVTcGFjaW5nLCBzZXR0aW5ncykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXREZWZhdWx0TGF5ZXIodmFsdWU6IFBoYXNlci5Hcm91cCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNBVVRJT046IENoYW5naW5nIHRoZSBkZWZhdWx0IGxheWVyIHdpbGwgY2hhbmdlIHRoZSB0YXJnZXQgZ3JvdXAgZm9yIC5hZGRcIik7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRMYXllciA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZGVmYXVsdExheWVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdExheWVyO1xuICAgIH1cbiAgICAvLyBnZXR0ZXIgLyBzZXR0ZXJcbiAgICBwdWJsaWMgc2V0IHRhcmdldEdyb3VwKHZhbHVlOiBQaGFzZXIuR3JvdXApIHtcbiAgICAgICAgdGhpcy5fdGFyZ2V0R3JvdXAgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHRhcmdldEdyb3VwKCk6IFBoYXNlci5Hcm91cCB7XG4gICAgICAgIHJldHVybiB0aGlzLl90YXJnZXRHcm91cCB8fCB0aGlzLl9kZWZhdWx0TGF5ZXI7XG4gICAgfVxufVxuXG4vKipcbiAqIFNlcXVlbmNlTWFuYWdlclxuICovXG5leHBvcnQgY2xhc3MgU2VxdWVuY2VNYW5hZ2VyIHtcbiAgICBwdWJsaWMgZ2FtZTogR2FtZTtcblxuICAgIHByaXZhdGUgX2RlZmF1bHRJbnRlcnZhbCA9IDIwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZTtcbiAgICB9XG5cbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICBwcml2YXRlIF9leGVjdXRlTWV0aG9kKHNlcXVlbmNlOiBBcnJheTxGdW5jdGlvbj4sIGNvbnRleHQ6IE9iamVjdCwgY2FsbGJhY2s6IEZ1bmN0aW9uLCBjYWxsYmFja0NvbnRleHQ6IE9iamVjdCkge1xuICAgICAgICB2YXIgZnVuYyA9IHNlcXVlbmNlLnNoaWZ0KCk7XG4gICAgICAgIGlmICh0eXBlb2YgZnVuYyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnRleHQgIT09ICd1bmRlZmluZWQnICYmIGNvbnRleHQpIHtcbiAgICAgICAgICAgIGZ1bmMuY2FsbChjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZXF1ZW5jZS5sZW5ndGggPT09IDAgJiYgY2FsbGJhY2sgJiYgY2FsbGJhY2tDb250ZXh0KSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKGNhbGxiYWNrQ29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuICAgIHB1YmxpYyBydW4oc2VxdWVuY2U6IEFycmF5PEZ1bmN0aW9uPiwgY29udGV4dDogT2JqZWN0LCBpbnRlcnZhbDogbnVtYmVyLCBjb21wbGV0ZUNhbGxiYWNrOiBGdW5jdGlvbiwgY29tcGxldGVDYWxsYmFja0NvbnRleHQ6IE9iamVjdCkge1xuICAgICAgICBpZiAodHlwZW9mIGNvbnRleHQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvbnRleHQgbXVzdCBiZSBwcm92aWRlZCBmb3IgdGhlIHNlcXVlbmNlIG1ldGhvZHMnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgaW50ZXJ2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpbnRlcnZhbCA9IHRoaXMuX2RlZmF1bHRJbnRlcnZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZXF1ZW5jZS5sZW5ndGggPT09IDAgJiYgdHlwZW9mIGNvbXBsZXRlQ2FsbGJhY2sgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb21wbGV0ZUNhbGxiYWNrQ29udGV4dCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbXBsZXRlQ2FsbGJhY2suY2FsbChjb21wbGV0ZUNhbGxiYWNrQ29udGV4dCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW50ZXJ2YWwgPT09IDApIHtcbiAgICAgICAgICAgIHdoaWxlIChzZXF1ZW5jZS5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgIHRoaXMuX2V4ZWN1dGVNZXRob2Qoc2VxdWVuY2UsIGNvbnRleHQsIHR5cGVvZiBjb21wbGV0ZUNhbGxiYWNrID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBjb21wbGV0ZUNhbGxiYWNrLCB0eXBlb2YgY29tcGxldGVDYWxsYmFja0NvbnRleHQgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IGNvbXBsZXRlQ2FsbGJhY2tDb250ZXh0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5yZXBlYXQoaW50ZXJ2YWwsIHNlcXVlbmNlLmxlbmd0aCwgdGhpcy5fZXhlY3V0ZU1ldGhvZCwgdGhpcywgc2VxdWVuY2UsIGNvbnRleHQsIHR5cGVvZiBjb21wbGV0ZUNhbGxiYWNrID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBjb21wbGV0ZUNhbGxiYWNrLCB0eXBlb2YgY29tcGxldGVDYWxsYmFja0NvbnRleHQgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IGNvbXBsZXRlQ2FsbGJhY2tDb250ZXh0KTtcbiAgICB9XG59XG5cblxuLyoqXG4gKiBTdGF0ZVxuICovXG5cbmV4cG9ydCBjbGFzcyBTdGF0ZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG4gICAgcHJvdGVjdGVkIF9hdWRpbzogUGhhc2VyLlNvdW5kW10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgX21lZGlhdG9yOiBNZWRpYXRvciA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgLy8gUGhhc2VyLlN0YXRlIG92ZXJyaWRlc1xuICAgIHB1YmxpYyBpbml0KCk6IHZvaWQge1xuXG4gICAgfVxuXG4gICAgcHVibGljIHByZWxvYWQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnByZWxvYWRJRClcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hc3NldC5sb2FkQXNzZXRzKHRoaXMucHJlbG9hZElEKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZ2FtZS5hc3NldC5hbGxTb3VuZHNEZWNvZGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hc3NldC5vbkxvYWRDb21wbGV0ZUFuZEF1ZGlvRGVjb2RlZC5hZGRPbmNlKHRoaXMuY3JlYXRlLCB0aGlzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJ1aWxkSW50ZXJmYWNlKCk7XG4gICAgICAgIHRoaXMuYWZ0ZXJCdWlsZEludGVyZmFjZSgpO1xuICAgICAgICB0aGlzLnN0YXJ0QnVpbGQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2h1dGRvd24oKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVtb3ZlQXVkaW8oKTtcbiAgICAgICAgdGhpcy5yZW1vdmVNZWRpYXRvcigpO1xuICAgIH1cblxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgcHVibGljIGxpc3RCdWlsZFNlcXVlbmNlKCk6IEZ1bmN0aW9uW10ge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcHVibGljIGJ1aWxkSW50ZXJmYWNlKCk6IHZvaWQgeyB9XG5cbiAgICBwdWJsaWMgYWZ0ZXJCdWlsZEludGVyZmFjZSgpOiB2b2lkIHsgfVxuXG4gICAgcHVibGljIHN0YXJ0QnVpbGQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2FtZS5zZXF1ZW5jZS5ydW4odGhpcy5saXN0QnVpbGRTZXF1ZW5jZSgpLCB0aGlzLCB0aGlzLmJ1aWxkSW50ZXJ2YWwsIHRoaXMucHJlQWZ0ZXJCdWlsZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHByZUFmdGVyQnVpbGQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5nYW1lLnRyYW5zaXRpb24gPT09ICd1bmRlZmluZWQnIHx8ICF0aGlzLmdhbWUudHJhbnNpdGlvbi5jYW5UcmFuc2l0aW9uT3V0KCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJCdWlsZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS50cmFuc2l0aW9uLmNhblRyYW5zaXRpb25PdXQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS50cmFuc2l0aW9uLm9uVHJhbnNpdGlvbk91dENvbXBsZXRlLmFkZE9uY2UodGhpcy5hZnRlckJ1aWxkLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUudHJhbnNpdGlvbi50cmFuc2l0aW9uT3V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYWZ0ZXJCdWlsZCgpOiB2b2lkIHsgfVxuXG4gICAgcHVibGljIGFkZEF1ZGlvKHRyYWNrOiBQaGFzZXIuU291bmQpOiBQaGFzZXIuU291bmQge1xuICAgICAgICBpZiAoIXRoaXMuX2F1ZGlvKSB7XG4gICAgICAgICAgICB0aGlzLl9hdWRpbyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2F1ZGlvLnB1c2godHJhY2spO1xuICAgICAgICByZXR1cm4gdHJhY2s7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUF1ZGlvKCk6IHZvaWQge1xuICAgICAgICB2YXIgc291bmQ6IFBoYXNlci5Tb3VuZDtcbiAgICAgICAgaWYgKCF0aGlzLl9hdWRpbykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKHRoaXMuX2F1ZGlvLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNvdW5kID0gdGhpcy5fYXVkaW8ucG9wKCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHNvdW5kICE9PSAndW5kZWZpbmVkJyAmJiBzb3VuZCAhPSBudWxsICYmIHR5cGVvZiBzb3VuZC5zdG9wICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc291bmQub25TdG9wICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBzb3VuZC5vblN0b3AucmVtb3ZlQWxsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNvdW5kLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVNZWRpYXRvcigpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9tZWRpYXRvcilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5fbWVkaWF0b3IuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLl9tZWRpYXRvciA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gZ2V0dGVyIC8gc2V0dGVyXG4gICAgcHVibGljIGdldCBwcmVsb2FkSUQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBidWlsZEludGVydmFsKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAxMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGFkZCgpOiBHYW1lT2JqZWN0RmFjdG9yeSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUuYWRkVG9HYW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYXBwKCk6IEFwcGxpY2F0aW9uIHtcbiAgICAgICAgcmV0dXJuIEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBnYW1lKCk6IEdhbWUge1xuICAgICAgICByZXR1cm4gdGhpcy5hcHAuZ2FtZTtcbiAgICB9XG59XG5cbi8qKlxuICogU3RvcmFnZU1hbmFnZXJcbiAqL1xuXG5leHBvcnQgY2xhc3MgU3RvcmFnZU1hbmFnZXIge1xuICAgIHB1YmxpYyBnYW1lOiBHYW1lO1xuICAgIHByaXZhdGUgX2xvY2FsU3RvcmFnZUF2YWlsYWJsZTogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdhbWUgPSBBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWU7XG4gICAgICAgIHRoaXMuX2luaXQoKTtcbiAgICB9XG5cbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgICBwcml2YXRlIF9pbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9sb2NhbFN0b3JhZ2VBdmFpbGFibGUgPSB0aGlzLl9nZXRJc0xvY2FsU3RvcmFnZUF2YWlsYWJsZSgpO1xuICAgICAgICBjb25zb2xlLmxvZygnbG9jYWwgc3RvcmFnZSBhdmFpbGFibGUnLCB0aGlzLl9sb2NhbFN0b3JhZ2VBdmFpbGFibGUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldElzTG9jYWxTdG9yYWdlQXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuICdsb2NhbFN0b3JhZ2UnIGluIHdpbmRvdyAmJiB3aW5kb3dbJ2xvY2FsU3RvcmFnZSddICE9PSBudWxsO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRTdHJpbmcoZGF0YTogT2JqZWN0IHwgc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIganNvbkRhdGE7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGpzb25EYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb3VsZCBub3QgY29udmVydCcgKyBkYXRhICsgJyB0byBqc29uJyk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBqc29uRGF0YTtcbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuICAgIC8qKlxuICAgICogZ2V0cyBzdG9yZWQgZGF0YSB3aXRoIHRoZSBzcGVjaWZpZWQga2V5XG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBrZXkgICAgdGhlIExvY2FsU3RvcmFnZSBrZXkgd2hlcmUgdGhlIGRhdGEgaXMgc3RvcmVkXG4gICAgKiBAcGFyYW0gIHtCb29sZWFufSBpc0pTT04gaXMgdGhlIHN0b3JlZCBkYXRhIGp1c3QgYSBzdHJpbmcgb3IgaXMgaXQgc3RyaW5naWZpZWQganNvbiAoYXNzdW1lcyBpdCdzIEpTT04pXG4gICAgKiBAcmV0dXJuIHtTdHJpbmcgfCBPYmplY3R9IHRoZSByZXRyaWV2ZWQgZGF0YSAtIGlmIGl0J3MgYSBKU09OIHN0cmluZywgd2UgcGFyc2UgdGhlIGRhdGEgYW5kIHJldHVybiB0aGUgSlNPTiBvYmplY3RcbiAgICAqL1xuICAgIHB1YmxpYyBnZXRGcm9tTG9jYWxTdG9yYWdlKGtleTogc3RyaW5nLCBpc0pTT046IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHZhciBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIGRhdGEgc2F2ZWQgd2l0aCB0aGUga2V5Jywga2V5KTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzSlNPTiAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogc2F2ZXMgZGF0YSB0byBsb2NhbHN0b3JhZ2VcbiAgICAqIEBwYXJhbSAge1N0cmluZ30ga2V5ICAgdGhlIExvY2FsU3RvcmFnZSBrZXkgdGhlIGRhdGEgd2lsbCBiZSBzYXZlZCB0b1xuICAgICogQHBhcmFtICB7U3RyaW5nfE9iamVjdH0gdmFsdWUgdGhlIGRhdGEgdG8gc2F2ZSAoaWYgaXQncyBhbiBvYmplY3QsIHdpbGwgYmUgc3RyaW5naWZpZWQgYmVmb3JlIHNhdmluZylcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgc2F2ZVRvTG9jYWxTdG9yYWdlKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgT2JqZWN0KSB7XG4gICAgICAgIGlmICghdGhpcy5fbG9jYWxTdG9yYWdlQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gbG9jYWwgc3RvcmFnZScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHRoaXMuX2dldFN0cmluZyh2YWx1ZSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygneW91ciBkYXRhIGNvdWxkIG5vdCBiZSBzYXZlZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBjbGVhciBzdG9yZWQgZGF0YVxuICAgICogQHBhcmFtICB7U3RyaW5nfSBrZXkgdGhlIExvY2FsU3RvcmFnZSBrZXkgdG8gY2xlYXJcbiAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgKi9cbiAgICBwdWJsaWMgY2xlYXJGcm9tTG9jYWxTdG9yYWdlKGtleTogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdGhpcy5fbG9jYWxTdG9yYWdlQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gbG9jYWwgc3RvcmFnZScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBUcmFuc2l0aW9uTWFuYWdlclxuICovXG5cbmV4cG9ydCBjbGFzcyBUcmFuc2l0aW9uTWFuYWdlciB7XG4gICAgcHVibGljIGdhbWU6IEdhbWU7XG4gICAgcHVibGljIG9uVHJhbnNpdGlvbk91dENvbXBsZXRlOiBQaGFzZXIuU2lnbmFsID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICBwdWJsaWMgb25UcmFuc2l0aW9uSW5Db21wbGV0ZTogUGhhc2VyLlNpZ25hbCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG5cbiAgICBwcml2YXRlIF90cmFuc2l0aW9uOiBJVHJhbnNpdGlvbiA9IG51bGw7XG4gICAgcHJpdmF0ZSBfdHJhbnNpdGlvbnM6IE9iamVjdCA9IHt9O1xuICAgIHByaXZhdGUgX2V4Y2VwdGlvbnM6IE9iamVjdCA9IHt9O1xuXG4gICAgcHJpdmF0ZSBfZnJvbVN0YXRlOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgX3RvU3RhdGU6IHN0cmluZyA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2FkZChpZDogc3RyaW5nLCBvdXRIYW5kbGVyOiBJVHJhbnNpdGlvbkhhbmRsZXIsIHByZWxvYWRIYW5kbGVyOiBJUHJlbG9hZEhhbmRsZXIsIGluSGFuZGxlcjogSVRyYW5zaXRpb25IYW5kbGVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25zW2lkXSA9IHtcbiAgICAgICAgICAgIG91dEhhbmRsZXI6IG91dEhhbmRsZXIsXG4gICAgICAgICAgICBwcmVsb2FkSGFuZGxlcjogcHJlbG9hZEhhbmRsZXIsXG4gICAgICAgICAgICBpbkhhbmRsZXI6IGluSGFuZGxlclxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldFRyYW5zaXRpb24oaW5TdGF0ZTogc3RyaW5nLCBvdXRTdGF0ZTogc3RyaW5nKSB7XG4gICAgICAgIHZhciB0cmFuc2l0aW9uID0gdGhpcy5fdHJhbnNpdGlvbnNbaW5TdGF0ZSArICcvJyArIG91dFN0YXRlXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0cmFuc2l0aW9uID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHRyYW5zaXRpb24gPSB0aGlzLl90cmFuc2l0aW9uc1snYWxsJ107XG5cbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0cmFuc2l0aW9uID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiB0cmFuc2l0aW9uO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3RyYW5zaXRpb25JbkNvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uID0gdGhpcy5fZ2V0VHJhbnNpdGlvbih0aGlzLl9mcm9tU3RhdGUsIHRoaXMuX3RvU3RhdGUpO1xuICAgICAgICBpZiAoIXRoaXMuX3RyYW5zaXRpb24pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyLmxvYWRTdGFydCA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hc3NldC5vbkxvYWRTdGFydC5hZGRPbmNlKHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIubG9hZFN0YXJ0LCB0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyKTtcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUuYXNzZXQub25GaWxlQ29tcGxldGUuYWRkKHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIubG9hZFByb2dyZXNzLCB0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2FtZS5hc3NldC5vbkxvYWRDb21wbGV0ZUFuZEF1ZGlvRGVjb2RlZC5hZGRPbmNlKHRoaXMuX3ByZWxvYWRDb21wbGV0ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMub25UcmFuc2l0aW9uSW5Db21wbGV0ZS5kaXNwYXRjaCgpO1xuXG4gICAgICAgIHRoaXMuZ2FtZS5jaGFuZ2VTdGF0ZSh0aGlzLl90b1N0YXRlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90cmFuc2l0aW9uT3V0Q29tcGxldGUoKSB7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLm9uVHJhbnNpdGlvbk91dENvbXBsZXRlLmRpc3BhdGNoKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcHJlbG9hZENvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uID0gdGhpcy5fZ2V0VHJhbnNpdGlvbih0aGlzLl9mcm9tU3RhdGUsIHRoaXMuX3RvU3RhdGUpO1xuICAgICAgICBpZiAoIXRoaXMuX3RyYW5zaXRpb24pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5nYW1lLmFzc2V0Lm9uRmlsZUNvbXBsZXRlLnJlbW92ZSh0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyLmxvYWRQcm9ncmVzcywgdGhpcy5fdHJhbnNpdGlvbi5wcmVsb2FkSGFuZGxlcik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyLmxvYWRDb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIubG9hZENvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2xlYXJUcmFuc2l0aW9uKCkge1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uLm91dEhhbmRsZXIudHJhbnNpdGlvbkluQ29tcGxldGUucmVtb3ZlKHRoaXMuX3RyYW5zaXRpb25PdXRDb21wbGV0ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24uaW5IYW5kbGVyLnRyYW5zaXRpb25PdXRDb21wbGV0ZS5yZW1vdmUodGhpcy5fdHJhbnNpdGlvbkluQ29tcGxldGUsIHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWUuYXNzZXQub25Mb2FkQ29tcGxldGVBbmRBdWRpb0RlY29kZWQucmVtb3ZlKHRoaXMuX3ByZWxvYWRDb21wbGV0ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuZ2FtZS5hc3NldC5vbkxvYWRTdGFydC5yZW1vdmUodGhpcy5fdHJhbnNpdGlvbi5wcmVsb2FkSGFuZGxlci5sb2FkU3RhcnQsIHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIpO1xuICAgICAgICB0aGlzLmdhbWUuYXNzZXQub25GaWxlQ29tcGxldGUucmVtb3ZlKHRoaXMuX3RyYW5zaXRpb24ucHJlbG9hZEhhbmRsZXIubG9hZFByb2dyZXNzLCB0aGlzLl90cmFuc2l0aW9uLnByZWxvYWRIYW5kbGVyKTtcblxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuXG4gICAgLyoqXG4gICAgKiBBZGRzIGEgdHJhbnNpdGlvbiBoYW5kbGVyIGZvciBhIHNwZWNpZmljIGZyb20gLyB0byBzdGF0ZSBjb21iaW5hdGlvblxuICAgICogcGFzcyB0aGUgZnJvbSAvIHRvIHN0YXRlcyBhcyB0aGUgZmlyc3QgMiBhcmd1bWVudHMsIGFuZCBhZGRpdGlvbmFsIGFyZ3VtZW50cyBmb3Igd2hpY2ggaW5zdGFuY2Ugd2lsbCBoYW5kbGUgdGhlIHRyYW5zaXRpb25cbiAgICAqIGlmIG9ubHkgMyBhcmdzIGFyZSBwYXNzZWQsIHRoZSBpbnN0YW5jZSB3aWxsIGhhbmRsZSB0aGUgaW4gLyBvdXQgdHJhbnNpdGlvbiwgYW5kIHRoZSBwcmVsb2FkaW5nXG4gICAgKiBFLkcuXG4gICAgKiB0aGlzLmdhbWUudHJhbnNpdGlvbi5hZGQodGhpcy5nYW1lLmNvbnN0YW50cy5TVEFURV9QUkVMT0FELCB0aGlzLmdhbWUuY29uc3RhbnRzLlNUQVRFX01FTlUsIHRoaXMuZ2FtZS5wcmVsb2FkZXIpO1xuICAgICpcbiAgICAqIGlmIDUgYXJndW1lbnRzIGFyZSBwYXNzZWQsIGEgZGlmZmVyZW50IGluc3RhbmNlIGNhbiBiZSB1c2VkIGZvciBpbiB0cmFuc2l0aW9uLCBwcmVsb2FkaW5nLCBhbmQgb3V0IHRyYW5zaXRpb25cbiAgICAqIEUuRy5cbiAgICAqIHRoaXMuZ2FtZS50cmFuc2l0aW9uLmFkZCh0aGlzLmdhbWUuY29uc3RhbnRzLlNUQVRFX1BSRUxPQUQsIHRoaXMuZ2FtZS5jb25zdGFudHMuU1RBVEVfTUVOVSwgdGhpcy5nYW1lLnRyYW5zaXRpb25PdXRIYW5kbGVyLCB0aGlzLmdhbWUucHJlbG9hZEhhbmRsZXIsIHRoaXMuZ2FtZS50cmFuc2l0aW9uSW5IYW5kbGVyKTtcbiAgICAqXG4gICAgKiB0cmFuc2l0aW9uIGhhbmRsZXJzIGFyZSBleHBlY3RlZCB0byBiZWhhdmUgYXMgZm9sbG93czpcbiAgICAqIGFuIG91dCB0cmFuc2l0aW9uIGhhbmRsZXIgc2hvdWxkIGhhdmUgYSB0cmFuc2l0aW9uSW4gbWV0aG9kIGFuZCBkaXNwYXRjaCBhIHRyYW5zaXRpb25Db21wbGV0ZSBzaWduYWwgd2hlbiBkb25lXG4gICAgKiBhbiBpbiB0cmFuc2l0aW9uIGhhbmRsZXIgc2hvdWxkIGhhdmUgYSB0cmFuc2l0aW9uT3V0IG1ldGhvZCBhbmQgZGlzcGF0Y2ggYSB0cmFuc2l0aW9uQ09tcGxldGUgc2lnbmFsIHdoZW4gZG9uZVxuICAgICogYSBwcmVsb2FkIGhhbmRsZXIgc2hvdWxkIGhhdmUgbG9hZFN0YXJ0LCBsb2FkUHJvZ3Jlc3MsIGFuZCBsb2FkQ29tcGxldGUgbWV0aG9kc1xuICAgICogdGhlIGxvYWRQcm9ncmVzcyBtZXRob2QgbWF5IGFjY2VwdCBhIHVwIHRvIDQgcGFyYW1ldGVycyBmb3IgcHJvZ3Jlc3MgKHBlcmNlbnQgb2YgZmlsZXMgbG9hZGVkKSwgaWQsIGZpbGVJbmRleCwgYW5kIHRvdGFsRmlsZXNcbiAgICAqXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gZnJvbVN0YXRlIC0gdGhlIHN0YXRlIGJlaW5nIHRyYW5zaXRpb25lZCBmcm9tXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdG9TdGF0ZSAtIHRoZSBzdGF0ZSBiZWluZyB0cmFuc2l0aW9uZWQgdG9cbiAgICAqIEBwYXJhbSB7b3V0SGFuZGxlcn0gb3V0SGFuZGxlciAtIHRoZSBpbnN0YW5jZSB0aGF0IHdpbGwgaGFuZGxlIHRoZSB0cmFuc2l0aW9uIGZyb20gdGhlIGZyb21TdGF0ZVxuICAgICogQHBhcmFtIHtwcmVsb2FkSGFuZGxlcn0gcHJlbG9hZEhhbmRsZXIgLSB0aGUgaW5zdGFuY2UgdGhhdCB3aWxsIGhhbmRsZSBwcmVsb2FkaW5nIHRoZSB0b1N0YXRlXG4gICAgKiBAcGFyYW0ge2luSGFuZGxlcn0gaW5IYW5kbGVyIC0gdGhlIGluc3RhbmNlIHRoYXQgd2lsbCBoYW5kbGUgdGhlIGluIHRyYW5zaXRpb24gd2hlbiB0aGUgdG9TdGF0ZSBpcyBjb21wbGV0ZWx5IGxvYWRlZFxuICAgICogQHJldHVybiB7T2JqZWN0fSB0cmFuc2l0aW9uIHJlZmVyZW5jZSB0aGF0IHdhcyBhZGRlZCB0byBfdHJhbnNpdGlvbnNcbiAgICAqL1xuICAgIHB1YmxpYyBhZGQoZnJvbVN0YXRlOiBzdHJpbmcsIHRvU3RhdGU6IHN0cmluZyB8IElQcmVsb2FkSGFuZGxlciwgb3V0SGFuZGxlcj86IElUcmFuc2l0aW9uSGFuZGxlciwgcHJlbG9hZEhhbmRsZXI/OiBJUHJlbG9hZEhhbmRsZXIsIGluSGFuZGxlcj86IElUcmFuc2l0aW9uSGFuZGxlcik6IHZvaWQge1xuICAgICAgICB2YXIgYXJncztcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCA1KSB7XG4gICAgICAgICAgICBpZiAoZnJvbVN0YXRlID09PSAnYWxsJykge1xuICAgICAgICAgICAgICAgIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9hZGQoJ2FsbCcsIGFyZ3NbMF0sIGFyZ3NbMF0sIGFyZ3NbMF0pO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FkZCgnYWxsJywgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FkZChmcm9tU3RhdGUgKyAnLycgKyB0b1N0YXRlLCBhcmdzWzBdLCBhcmdzWzBdLCBhcmdzWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9hZGQoZnJvbVN0YXRlICsgJy8nICsgdG9TdGF0ZSwgb3V0SGFuZGxlciwgcHJlbG9hZEhhbmRsZXIsIGluSGFuZGxlcik7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZEFsbChoYW5kbGVyOiBJUHJlbG9hZEhhbmRsZXIpOiB2b2lkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZCgnYWxsJywgaGFuZGxlciwgaGFuZGxlciwgaGFuZGxlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBBZGRzIGFuIGV4Y2VwdGlvbiB0byB0aGUgRGlqb24uVHJhbnNpdGlvbk1hbmFnZXIgaW4gdGhlIGNhc2Ugd2hlcmUgJ2FsbCcgaGFzIGJlZW4gdXNlZFxuICAgICogQHBhcmFtIHtzdHJpbmd9IHN0YXRlIC0gdGhlIHN0YXRlIHRvIGFkZCB0aGUgZXhjZXB0aW9uIGZvclxuICAgICovXG4gICAgcHVibGljIGFkZEV4Y2VwdGlvbihzdGF0ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2V4Y2VwdGlvbnNbc3RhdGVdID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFJlbW92ZXMgYSB0cmFuc2l0aW9uIGhhbmRsZXIgZm9yIGEgc3BlY2lmaWMgZnJvbSAvIHRvIHN0YXRlIGNvbWJpbmF0aW9uXG4gICAgKi9cbiAgICBwdWJsaWMgcmVtb3ZlKGZyb21TdGF0ZTogc3RyaW5nLCB0b1N0YXRlPzogc3RyaW5nKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uc1tmcm9tU3RhdGVdID0gbnVsbDtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl90cmFuc2l0aW9uc1tmcm9tU3RhdGVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbnNbZnJvbVN0YXRlICsgJy8nICsgdG9TdGF0ZV0gPSBudWxsO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX3RyYW5zaXRpb25zW2Zyb21TdGF0ZSArICcvJyArIHRvU3RhdGVdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBTdGFydCB0aGUgdHJhbnNpdGlvbiB0byBhIG5ldyBzdGF0ZVxuICAgICogQHBhcmFtIHtzdHJpbmd9IHN0YXRlIC0gdGhlIHN0YXRlIHRvIHRyYW5zaXRpb24gdG9cbiAgICAqL1xuICAgIHB1YmxpYyB0byhzdGF0ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl90cmFuc2l0aW9uKVxuICAgICAgICAgICAgdGhpcy5fY2xlYXJUcmFuc2l0aW9uKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2V4Y2VwdGlvbnNbc3RhdGVdKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuX2Zyb21TdGF0ZSA9IHRoaXMuZ2FtZS5zdGF0ZS5jdXJyZW50O1xuICAgICAgICB0aGlzLl90b1N0YXRlID0gc3RhdGU7XG5cbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiA9IHRoaXMuX2dldFRyYW5zaXRpb24odGhpcy5fZnJvbVN0YXRlLCB0aGlzLl90b1N0YXRlKTtcblxuICAgICAgICBpZiAoIXRoaXMuX3RyYW5zaXRpb24pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyB0cmFuc2l0aW9uIGZvdW5kIGZvcjonLCB0aGlzLmdhbWUuc3RhdGUuY3VycmVudCArICcgdG8gJyArIHN0YXRlKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5jaGFuZ2VTdGF0ZSh0aGlzLl90b1N0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkluKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHRyYW5zaXRpb25JbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLl90cmFuc2l0aW9uKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fdHJhbnNpdGlvbi5vdXRIYW5kbGVyLnRyYW5zaXRpb25JbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbi5vdXRIYW5kbGVyLnRyYW5zaXRpb25JbkNvbXBsZXRlLmFkZE9uY2UodGhpcy5fdHJhbnNpdGlvbkluQ29tcGxldGUsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbi5vdXRIYW5kbGVyLnRyYW5zaXRpb25JbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNhblRyYW5zaXRpb25PdXQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhdGhpcy5fZXhjZXB0aW9uc1t0aGlzLmdhbWUuc3RhdGUuY3VycmVudF0gJiYgdGhpcy5fdHJhbnNpdGlvbiAmJiB0aGlzLl90cmFuc2l0aW9uLmluSGFuZGxlciAmJiB0eXBlb2YgdGhpcy5fdHJhbnNpdGlvbi5pbkhhbmRsZXIudHJhbnNpdGlvbk91dCA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEFmdGVyIHRoZSBzdGF0ZSBpcyBmdWxseSBsb2FkZWQgYW5kICdidWlsdCcgYSBjYWxsIHRvIHRoaXMgaXMgbWFkZVxuICAgICogdGhpcyBpcyBjdXJyZW50bHkgbWFkZSBmcm9tIEJhc2VTdGF0ZSBpbiB0aGUgJ2FmdGVyQnVpbGQnIG1ldGhvZFxuICAgICovXG4gICAgcHVibGljIHRyYW5zaXRpb25PdXQoKSB7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24uaW5IYW5kbGVyLnRyYW5zaXRpb25PdXRDb21wbGV0ZS5hZGRPbmNlKHRoaXMuX3RyYW5zaXRpb25PdXRDb21wbGV0ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24uaW5IYW5kbGVyLnRyYW5zaXRpb25PdXQoKTtcbiAgICB9XG59IiwiaW1wb3J0IHtHYW1lfSBmcm9tICcuL2NvcmUnO1xuaW1wb3J0IHtNZWRpYXRvciwgTW9kZWwsIE5vdGlmaWNhdGlvbn0gZnJvbSAnLi9tdmMnO1xuaW1wb3J0IHtJTm90aWZpZXIsIElPYnNlcnZlciwgSU5vdGlmaWNhdGlvbn0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7Tm90aWZpY2F0aW9uc30gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbiBpbXBsZW1lbnRzIElOb3RpZmllciB7XG4gICAgLy8gc3RhdGljIGNvbnN0YW50c1xuICAgIHByb3RlY3RlZCBzdGF0aWMgaW5zdGFuY2UgPSBudWxsO1xuICAgIHByb3RlY3RlZCBzdGF0aWMgU0lOR0xFVE9OX01TRyA9ICdBcHBsaWNhdGlvbiBzaW5nbGV0b24gYWxyZWFkeSBjb25zdHJ1Y3RlZCEnO1xuXG4gICAgLy8gcHVibGljIFxuICAgIHB1YmxpYyBnYW1lOiBHYW1lO1xuXG4gICAgLy8gcHJvdGVjdGVkICAgICAgICBcbiAgICBwcm90ZWN0ZWQgX21lZGlhdG9yOiBNZWRpYXRvciA9IG51bGw7XG4gICAgcHJvdGVjdGVkIF9tb2RlbHM6IHsgW25hbWU6IHN0cmluZ106IE1vZGVsIH0gPSB7fTtcbiAgICBwcm90ZWN0ZWQgX21lZGlhdG9yczogeyBbbmFtZTogc3RyaW5nXTogTWVkaWF0b3IgfSA9IHt9O1xuICAgIHByb3RlY3RlZCBfb2JzZXJ2ZXJNYXA6IHsgW25hbWU6IHN0cmluZ106IElPYnNlcnZlcltdIH0gPSB7fTtcblxuICAgIC8vZm9yIGRlYnVnZ2luZ1xuICAgIHByaXZhdGUgc3RhdGljIF9oYXNoUXVlcnk6IHt9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmIChBcHBsaWNhdGlvbi5pbnN0YW5jZSlcbiAgICAgICAgICAgIHRocm93IEVycm9yKEFwcGxpY2F0aW9uLlNJTkdMRVRPTl9NU0cpO1xuXG4gICAgICAgIEFwcGxpY2F0aW9uLmluc3RhbmNlID0gdGhpcztcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICAgICAgQXBwbGljYXRpb24uX2dldEhhc2hRdWVyeSgpO1xuICAgICAgICAgICAgdGhpcy53aW5kb3dIYXNoQ2hhbmdlKCk7XG4gICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICB0aGlzLmNyZWF0ZUdhbWUoKTtcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgd2luZG93SGFzaENoYW5nZSgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuICAgIHByb3RlY3RlZCBjcmVhdGVHYW1lKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSh7XG4gICAgICAgICAgICB3aWR0aDogODAwLFxuICAgICAgICAgICAgaGVpZ2h0OiA2MDAsXG4gICAgICAgICAgICBwYXJlbnQ6ICdnYW1lLWNvbnRhaW5lcicsXG4gICAgICAgICAgICByZW5kZXJlcjogUGhhc2VyLkFVVE8sXG4gICAgICAgICAgICB0cmFuc3BhcmVudDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHN0YXJ0R2FtZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gc3RhcnQgdGhlIGFwcCdzIGluaXRpYWwgc3RhdGUgaGVyZVxuICAgIH1cblxuICAgIHB1YmxpYyBhZGRQbHVnaW5zKCkge1xuICAgICAgICB0aGlzLmdhbWUuYWRkUGx1Z2lucygpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck1vZGVsKG1vZGVsOiBNb2RlbCk6IE1vZGVsIHtcbiAgICAgICAgaWYgKHRoaXMuX21vZGVsc1ttb2RlbC5uYW1lXSkge1xuICAgICAgICAgICAgdGhyb3cgKG5ldyBFcnJvcignQXBwbGljYXRpb246OiBhIG1vZGVsIHdpdGggdGhlIG5hbWUgXCInICsgbW9kZWwubmFtZSArICdcIiBhbHJlYWR5IGV4aXN0cy4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbW9kZWxzW21vZGVsLm5hbWVdID0gbW9kZWw7XG5cbiAgICAgICAgbW9kZWwub25SZWdpc3RlcigpO1xuXG4gICAgICAgIHJldHVybiBtb2RlbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmV0cmlldmVNb2RlbChtb2RlbE5hbWU6IHN0cmluZyk6IE1vZGVsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vZGVsc1ttb2RlbE5hbWVdIHx8IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZU1vZGVsKG1vZGVsVG9SZW1vdmU6IE1vZGVsKTogdm9pZCB7XG4gICAgICAgIGxldCBuYW1lID0gbW9kZWxUb1JlbW92ZS5uYW1lO1xuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLl9tb2RlbHNbbmFtZV07XG5cbiAgICAgICAgaWYgKCFtb2RlbClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBtb2RlbC5vblJlbW92ZWQoKTtcblxuICAgICAgICBkZWxldGUgdGhpcy5fbW9kZWxzW25hbWVdO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck1lZGlhdG9yKG1lZGlhdG9yOiBNZWRpYXRvcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fbWVkaWF0b3JzW21lZGlhdG9yLm5hbWVdKSB7XG4gICAgICAgICAgICB0aHJvdyAobmV3IEVycm9yKCdBcHBsaWNhdGlvbjo6IGEgbWVkaWF0b3Igd2l0aCB0aGUgbmFtZSBcIicgKyBtZWRpYXRvci5uYW1lICsgJ1wiIGFscmVhZHkgZXhpc3RzLicpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX21lZGlhdG9yc1ttZWRpYXRvci5uYW1lXSA9IG1lZGlhdG9yO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyT2JzZXJ2ZXIobWVkaWF0b3IpO1xuXG4gICAgICAgIG1lZGlhdG9yLm9uUmVnaXN0ZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmV0cmlldmVNZWRpYXRvcihtZWRpYXRvck5hbWU6IHN0cmluZyk6IE1lZGlhdG9yIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lZGlhdG9yc1ttZWRpYXRvck5hbWVdIHx8IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZU1lZGlhdG9yKG1lZGlhdG9yVG9SZW1vdmU6IE1lZGlhdG9yKTogdm9pZCB7XG4gICAgICAgIGxldCBuYW1lID0gbWVkaWF0b3JUb1JlbW92ZS5uYW1lO1xuICAgICAgICBsZXQgbWVkaWF0b3IgPSB0aGlzLl9tZWRpYXRvcnNbbmFtZV07XG5cbiAgICAgICAgaWYgKCFtZWRpYXRvcilcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBtZWRpYXRvci5saXN0Tm90aWZpY2F0aW9uSW50ZXJlc3RzKCkuZm9yRWFjaChpbnRlcmVzdCA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZU9ic2VydmVyKGludGVyZXN0LCBtZWRpYXRvcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lZGlhdG9yLm9uUmVtb3ZlZCgpO1xuICAgICAgICBkZWxldGUgdGhpcy5fbWVkaWF0b3JzW25hbWVdO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck9ic2VydmVyKG9ic2VydmVyOiBJT2JzZXJ2ZXIpOiB2b2lkIHtcbiAgICAgICAgb2JzZXJ2ZXIubGlzdE5vdGlmaWNhdGlvbkludGVyZXN0cygpLmZvckVhY2gobm90aWZpY2F0aW9uTmFtZSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fb2JzZXJ2ZXJNYXBbbm90aWZpY2F0aW9uTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX29ic2VydmVyTWFwW25vdGlmaWNhdGlvbk5hbWVdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9vYnNlcnZlck1hcFtub3RpZmljYXRpb25OYW1lXS5wdXNoKG9ic2VydmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc3RvcHMgYW4gb2JzZXJ2ZXIgZnJvbSBiZWluZyBpbnRlcmVzdGVkIGluIGEgbm90aWZpY2F0aW9uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5vdGlmaWNhdGlvbk5hbWVcbiAgICAgKiBAcGFyYW0ge0lPYnNlcnZlcn0gb2JzZXJ2ZXJUb1JlbW92ZVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgcHVibGljIHJlbW92ZU9ic2VydmVyKG5vdGlmaWNhdGlvbk5hbWU6IHN0cmluZywgb2JzZXJ2ZXJUb1JlbW92ZTogSU9ic2VydmVyKTogdm9pZCB7XG4gICAgICAgIC8vVGhlIG9ic2VydmVyIGxpc3QgZm9yIHRoZSBub3RpZmljYXRpb24gdW5kZXIgaW5zcGVjdGlvblxuICAgICAgICBsZXQgb2JzZXJ2ZXJzOiBJT2JzZXJ2ZXJbXSA9IG51bGwsXG4gICAgICAgICAgICBvYnNlcnZlcjogSU9ic2VydmVyID0gbnVsbCxcbiAgICAgICAgICAgIGk6IG51bWJlciA9IDA7XG5cbiAgICAgICAgb2JzZXJ2ZXJzID0gdGhpcy5fb2JzZXJ2ZXJNYXBbbm90aWZpY2F0aW9uTmFtZV07XG5cbiAgICAgICAgLy9GaW5kIHRoZSBvYnNlcnZlciBmb3IgdGhlIG5vdGlmeUNvbnRleHQuXG4gICAgICAgIGkgPSBvYnNlcnZlcnMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICBvYnNlcnZlciA9IG9ic2VydmVyc1tpXTtcbiAgICAgICAgICAgIGlmIChvYnNlcnZlciA9PT0gb2JzZXJ2ZXJUb1JlbW92ZSkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAgKiBBbHNvLCB3aGVuIGEgTm90aWZpY2F0aW9uJ3MgT2JzZXJ2ZXIgbGlzdCBsZW5ndGggZmFsbHMgdG8gemVybywgZGVsZXRlIHRoZVxuICAgICAgICAgKiBub3RpZmljYXRpb24ga2V5IGZyb20gdGhlIG9ic2VydmVyIG1hcC5cbiAgICAgICAgICovXG4gICAgICAgIGlmIChvYnNlcnZlcnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9vYnNlcnZlck1hcFtub3RpZmljYXRpb25OYW1lXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZW5kTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbk5hbWU6IHN0cmluZywgbm90ZmljYXRpb25Cb2R5PzogYW55KTogdm9pZCB7XG4gICAgICAgIGxldCBub3RpZmljYXRpb24gPSBuZXcgTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbk5hbWUsIG5vdGZpY2F0aW9uQm9keSk7XG4gICAgICAgIHRoaXMuX25vdGlmeU9ic2VydmVycyhub3RpZmljYXRpb24pO1xuXG4gICAgICAgIG5vdGlmaWNhdGlvbi5kZXN0cm95KCk7XG4gICAgICAgIG5vdGlmaWNhdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgcHJpdmF0ZSBfbm90aWZ5T2JzZXJ2ZXJzKG5vdGlmaWNhdGlvbjogSU5vdGlmaWNhdGlvbikge1xuICAgICAgICBsZXQgb2JzZXJ2ZXI6IElPYnNlcnZlciA9IG51bGwsXG4gICAgICAgICAgICBvYnNlcnZlcnM6IElPYnNlcnZlcltdID0gbnVsbDtcblxuICAgICAgICBjb25zdCBub3RpZmljYXRpb25OYW1lOiBzdHJpbmcgPSBub3RpZmljYXRpb24uZ2V0TmFtZSgpO1xuICAgICAgICBjb25zdCBvYnNlcnZlcnNSZWY6IElPYnNlcnZlcltdID0gdGhpcy5fb2JzZXJ2ZXJNYXBbbm90aWZpY2F0aW9uTmFtZV07XG5cbiAgICAgICAgaWYgKG9ic2VydmVyc1JlZikge1xuICAgICAgICAgICAgLy8gY2xvbmUgdGhlIGFycmF5IGluIGNhc2UgYW4gb2JzZXJ2ZXIgZ2V0cyByZW1vdmVkIHdoaWxlIHRoZSBub3RpZmljYXRpb24gaXMgYmVpbmcgc2VudFxuICAgICAgICAgICAgb2JzZXJ2ZXJzID0gb2JzZXJ2ZXJzUmVmLnNsaWNlKDApO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmhhbmRsZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfZ2V0SGFzaFF1ZXJ5KCk6IHZvaWQge1xuICAgICAgICBBcHBsaWNhdGlvbi5faGFzaFF1ZXJ5ID0ge307XG4gICAgICAgIGlmICghd2luZG93LmxvY2F0aW9uLmhhc2ggfHwgd2luZG93LmxvY2F0aW9uLmhhc2ggPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSwgd2luZG93LmxvY2F0aW9uLmhhc2gubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgYUhhc2g6IHN0cmluZ1tdID0gaGFzaC5zcGxpdCgnJicpO1xuICAgICAgICBhSGFzaC5mb3JFYWNoKGhhc2hQYWlyID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFIYXNoID0gaGFzaFBhaXIuc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIEFwcGxpY2F0aW9uLl9oYXNoUXVlcnlbYUhhc2hbMF1dID0gL15cXGQrJC8udGVzdChhSGFzaFsxXSkgPyBwYXJzZUludChhSGFzaFsxXSkgOiBhSGFzaFsxXTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gc3RhdGljIG1ldGhvZHNcblxuICAgIC8qKlxuICAgICAqIHJldHVybnMgdGhlIEFwcGxpY2F0aW9uIHNpbmdsZXRvblxuICAgICAqIEByZXR1cm4ge0FwcGxpY2F0aW9ufVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogQXBwbGljYXRpb24ge1xuICAgICAgICBpZiAoIUFwcGxpY2F0aW9uLmluc3RhbmNlKVxuICAgICAgICAgICAgQXBwbGljYXRpb24uaW5zdGFuY2UgPSBuZXcgQXBwbGljYXRpb24oKTtcblxuICAgICAgICByZXR1cm4gQXBwbGljYXRpb24uaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZ2V0cyBhIHF1ZXJ5IHZhcmlhYmxlIGZyb20gdGhlIHdpbmRvdy5sb2NhdGlvbiBoYXNoXG4gICAgICogYXNzdW1lcyBzb21ldGhpbmcgbGlrZSBodHRwOi8vdXJsLyNmb289YmFyJmJhej1mb29cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFyaWFibGVJZFxuICAgICAqIEByZXR1cm4ge2FueX1cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHF1ZXJ5VmFyKHZhcmlhYmxlSWQ6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGlmIChBcHBsaWNhdGlvbi5faGFzaFF1ZXJ5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIEFwcGxpY2F0aW9uLl9nZXRIYXNoUXVlcnkoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQXBwbGljYXRpb24uX2hhc2hRdWVyeVt2YXJpYWJsZUlkXSB8fCBudWxsO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
