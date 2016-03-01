var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var dijon;
(function (dijon) {
    var utils;
    (function (utils) {
        var Notifications = (function () {
            function Notifications() {
            }
            Notifications.ASSET_MANAGER_DATA_SET = 'dijonAssetManagerDataSet';
            Notifications.ASSET_MANAGER_ASSETS_CLEARED = 'dijonAssetManagerAssetsCleared';
            return Notifications;
        }());
        utils.Notifications = Notifications;
    })(utils = dijon.utils || (dijon.utils = {}));
})(dijon || (dijon = {}));
var dijon;
(function (dijon) {
    var core;
    (function (core) {
        var AssetManager = (function () {
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
                this.app = dijon.mvc.Application.getInstance();
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
                if (this._cacheBustVersion === '') {
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
                this.sendNotification(dijon.utils.Notifications.ASSET_MANAGER_DATA_SET, this._data);
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
                this.sendNotification(dijon.utils.Notifications.ASSET_MANAGER_ASSETS_CLEARED, id);
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
            AssetManager.PHYSICS = 'physics';
            AssetManager.ASSET_LIST = 'assetList';
            AssetManager.RESOLUTION_2X = "@2x";
            AssetManager.RESOLUTION_3X = "@3x";
            return AssetManager;
        }());
        core.AssetManager = AssetManager;
    })(core = dijon.core || (dijon.core = {}));
})(dijon || (dijon = {}));
var dijon;
(function (dijon) {
    var core;
    (function (core) {
        var SequenceManager = (function () {
            function SequenceManager() {
                this._defaultInterval = 20;
                this.game = dijon.mvc.Application.getInstance().game;
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
        core.SequenceManager = SequenceManager;
    })(core = dijon.core || (dijon.core = {}));
})(dijon || (dijon = {}));
var dijon;
(function (dijon) {
    var core;
    (function (core) {
        var TransitionManager = (function () {
            function TransitionManager() {
                this.onTransitionOutComplete = new Phaser.Signal();
                this.onTransitionInComplete = new Phaser.Signal();
                this._transition = null;
                this._transitions = {};
                this._exceptions = {};
                this._fromState = null;
                this._toState = null;
                this.game = dijon.mvc.Application.getInstance().game;
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
        core.TransitionManager = TransitionManager;
    })(core = dijon.core || (dijon.core = {}));
})(dijon || (dijon = {}));
var dijon;
(function (dijon) {
    var core;
    (function (core) {
        var StorageManager = (function () {
            function StorageManager() {
                this.game = dijon.mvc.Application.getInstance().game;
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
        core.StorageManager = StorageManager;
    })(core = dijon.core || (dijon.core = {}));
})(dijon || (dijon = {}));
var dijon;
(function (dijon) {
    var core;
    (function (core) {
        var AudioManager = (function () {
            function AudioManager() {
                this._defaultVolume = 1;
                this._sprites = {};
                this._sounds = {};
                this._markerLookup = {};
                this.game = dijon.mvc.Application.getInstance().game;
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
                    return false;
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
                    return false;
                }
                return this._playSpriteMarker(key, marker, volume, loop, forceRestart);
            };
            AudioManager.prototype.playDelayedSound = function (delay, key, volume, loop, forceRestart) {
                if (loop === void 0) { loop = false; }
                if (forceRestart === void 0) { forceRestart = true; }
                this.game.time.events.add(delay, this.playSound, this, key, volume, loop, forceRestart);
            };
            AudioManager.prototype.playDelayedSpriteMarker = function (delay, marker, volume, loop, forceRestart) {
                if (loop === void 0) { loop = false; }
                if (forceRestart === void 0) { forceRestart = true; }
                this.game.time.events.add(delay, this.playSpriteMarker, this, marker, volume, loop, forceRestart);
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
        core.AudioManager = AudioManager;
    })(core = dijon.core || (dijon.core = {}));
})(dijon || (dijon = {}));
var dijon;
(function (dijon) {
    var core;
    (function (core) {
        var Component = (function () {
            function Component() {
                this.game = dijon.mvc.Application.getInstance().game;
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
        core.Component = Component;
    })(core = dijon.core || (dijon.core = {}));
})(dijon || (dijon = {}));
var dijon;
(function (dijon) {
    var display;
    (function (display) {
        var Sprite = (function (_super) {
            __extends(Sprite, _super);
            function Sprite(x, y, key, frame, name, components) {
                if (name === void 0) { name = "dSprite"; }
                if (components === void 0) { components = null; }
                _super.call(this, dijon.mvc.Application.getInstance().game, x, y, key, frame);
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
                if (this.autoBuild) {
                    this.init();
                    this.buildInterface();
                    if (components)
                        this.addComponents(components);
                }
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
            Object.defineProperty(Sprite.prototype, "autoBuild", {
                get: function () {
                    return true;
                },
                enumerable: true,
                configurable: true
            });
            return Sprite;
        }(Phaser.Sprite));
        display.Sprite = Sprite;
    })(display = dijon.display || (dijon.display = {}));
})(dijon || (dijon = {}));
var dijon;
(function (dijon) {
    var display;
    (function (display) {
        var Text = (function (_super) {
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
                _super.call(this, dijon.mvc.Application.getInstance().game, x, y, text, Text._addSettings({
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
            ;
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
            ;
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
            ;
            Text.prototype.resetColor = function () {
                return this.highlightPhrase(this.text, this.style.fill, false);
            };
            ;
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
            ;
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
            ;
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
            Text.DEFAULT_FONT_SIZE = 12;
            Text.DEFAULT_FONT_COLOR = "#000000";
            Text.DEFAULT_FONT = "Helvetica Neue, Arial";
            Text.GLOBAL_PADDING_X = 0;
            Text.GLOBAL_PADDING_Y = 0;
            return Text;
        }(Phaser.Text));
        display.Text = Text;
    })(display = dijon.display || (dijon.display = {}));
})(dijon || (dijon = {}));
var dijon;
(function (dijon) {
    var display;
    (function (display) {
        var Group = (function (_super) {
            __extends(Group, _super);
            function Group(x, y, name, addToStage, components, enableBody, physicsBodyType) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                if (name === void 0) { name = "dGroup"; }
                if (addToStage === void 0) { addToStage = false; }
                if (components === void 0) { components = null; }
                _super.call(this, dijon.mvc.Application.getInstance().game, null, name, addToStage, enableBody, physicsBodyType);
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
                Phaser.Group.prototype.update.apply(this);
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
            ;
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
                    this.game.add.defaultGroup = this;
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
        display.Group = Group;
    })(display = dijon.display || (dijon.display = {}));
})(dijon || (dijon = {}));
var dijon;
(function (dijon) {
    var core;
    (function (core) {
        var GameObjectFactory = (function (_super) {
            __extends(GameObjectFactory, _super);
            function GameObjectFactory() {
                _super.apply(this, arguments);
                this._defaultGroup = null;
            }
            GameObjectFactory.prototype.existing = function (object) {
                var group = this.defaultGroup;
                this.defaultGroup = null;
                return group.add(object);
            };
            GameObjectFactory.prototype.image = function (x, y, key, frame, group) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                if (group === undefined) {
                    group = this.defaultGroup;
                }
                this.defaultGroup = null;
                return group.add(new Phaser.Image(this.game, x, y, key, frame));
            };
            GameObjectFactory.prototype.sprite = function (x, y, key, frame, group) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                if (group === undefined) {
                    group = this.defaultGroup;
                }
                this.defaultGroup = null;
                return group.create(x, y, key, frame);
            };
            GameObjectFactory.prototype.creature = function (x, y, key, mesh, group) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                if (group === undefined) {
                    group = this.defaultGroup;
                }
                this.defaultGroup = null;
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
                    parent = this.defaultGroup;
                }
                this.defaultGroup = null;
                return new Phaser.Group(this.game, parent, name, addToStage, enableBody, physicsBodyType);
            };
            GameObjectFactory.prototype.physicsGroup = function (physicsBodyType, parent, name, addToStage) {
                if (physicsBodyType === void 0) { physicsBodyType = 0; }
                if (name === void 0) { name = 'group'; }
                if (addToStage === void 0) { addToStage = false; }
                if (parent === undefined) {
                    parent = this.defaultGroup;
                }
                this.defaultGroup = null;
                return new Phaser.Group(this.game, parent, name, addToStage, true, physicsBodyType);
            };
            GameObjectFactory.prototype.spriteBatch = function (parent, name, addToStage) {
                if (name === void 0) { name = "spriteBatch"; }
                if (addToStage === void 0) { addToStage = false; }
                if (parent === undefined) {
                    parent = this.defaultGroup;
                }
                this.defaultGroup = null;
                return new Phaser.SpriteBatch(this.game, parent, name, addToStage);
            };
            GameObjectFactory.prototype.tileSprite = function (x, y, width, height, key, frame, group) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                if (width === void 0) { width = 0; }
                if (height === void 0) { height = 0; }
                if (group === undefined) {
                    group = this.defaultGroup;
                }
                this.defaultGroup = null;
                return group.add(new Phaser.TileSprite(this.game, x, y, width, height, key, frame));
            };
            GameObjectFactory.prototype.rope = function (x, y, key, frame, points, group) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                if (group === undefined) {
                    group = this.defaultGroup;
                }
                this.defaultGroup = null;
                return group.add(new Phaser.Rope(this.game, x, y, key, frame, points));
            };
            GameObjectFactory.prototype.text = function (x, y, text, style, group) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                if (text === void 0) { text = ''; }
                if (group === undefined) {
                    group = this.defaultGroup;
                }
                this.defaultGroup = null;
                return group.add(new Phaser.Text(this.game, x, y, text, style));
            };
            GameObjectFactory.prototype.button = function (x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame, group) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                if (group === undefined) {
                    group = this.defaultGroup;
                }
                this.defaultGroup = null;
                return group.add(new Phaser.Button(this.game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame));
            };
            GameObjectFactory.prototype.graphics = function (x, y, group) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                if (group === undefined) {
                    group = this.defaultGroup;
                }
                this.defaultGroup = null;
                return group.add(new Phaser.Graphics(this.game, x, y));
            };
            GameObjectFactory.prototype.bitmapText = function (x, y, font, text, size, align, group) {
                if (text === void 0) { text = ""; }
                if (size === void 0) { size = 32; }
                if (group === undefined) {
                    group = this.defaultGroup;
                }
                this.defaultGroup = null;
                return group.add(new Phaser.BitmapText(this.game, x, y, font, text, size, align));
            };
            GameObjectFactory.prototype.dSprite = function (x, y, key, frame, name, components, group) {
                if (group === undefined) {
                    group = this.defaultGroup;
                }
                this.defaultGroup = null;
                return group.add(new dijon.display.Sprite(x, y, key, frame, name, components));
            };
            GameObjectFactory.prototype.dGroup = function (x, y, name, addToStage, components, enableBody, physicsBodyType, group) {
                if (group === undefined && addToStage !== true) {
                    group = this.defaultGroup;
                    this.defaultGroup = null;
                    return group.add(new dijon.display.Group(x, y, name, addToStage, components, enableBody, physicsBodyType));
                }
                return new dijon.display.Group(x, y, name, addToStage, components, enableBody, physicsBodyType);
            };
            GameObjectFactory.prototype.dText = function (x, y, text, fontName, fontSize, fontColor, fontAlign, wordWrap, width, lineSpacing, settings, group) {
                if (group === undefined) {
                    group = this.defaultGroup;
                }
                this.defaultGroup = null;
                return group.add(new dijon.display.Text(x, y, text, fontName, fontSize, fontColor, fontAlign, wordWrap, width, lineSpacing, settings));
            };
            Object.defineProperty(GameObjectFactory.prototype, "defaultGroup", {
                get: function () {
                    return this._defaultGroup || this.world;
                },
                set: function (value) {
                    this._defaultGroup = value;
                },
                enumerable: true,
                configurable: true
            });
            return GameObjectFactory;
        }(Phaser.GameObjectFactory));
        core.GameObjectFactory = GameObjectFactory;
    })(core = dijon.core || (dijon.core = {}));
})(dijon || (dijon = {}));
PIXI.DisplayObject.prototype.centerPivot = function () {
    this.pivot.set(this.width >> 1, this.height >> 1);
};
PIXI.DisplayObject.prototype.setPivot = function (pivotLocation) {
    switch (pivotLocation.toLowerCase()) {
        case PIXI.DisplayObject.PIVOT_CENTER:
            this.centerPivot();
            break;
        case PIXI.DisplayObject.PIVOT_RIGHT:
            this.pivot.set(this.width, this.height >> 1);
            break;
        case PIXI.DisplayObject.PIVOT_LEFT:
            this.pivot.set(0, this.height >> 1);
            break;
        case PIXI.DisplayObject.PIVOT_TOP:
            this.pivot.set(this.width >> 1, 0);
            break;
        case PIXI.DisplayObject.PIVOT_BOTTOM:
            this.pivot.set(this.width >> 1, this.height);
            break;
        case PIXI.DisplayObject.PIVOT_TOP_LEFT:
            this.pivot.set(0, 0);
            break;
        case PIXI.DisplayObject.PIVOT_TOP_RIGHT:
            this.pivot.set(this.width, 0);
            break;
        case PIXI.DisplayObject.PIVOT_BOTTOM_LEFT:
            this.pivot.set(0, this.height);
            break;
        case PIXI.DisplayObject.PIVOT_BOTTOM_RIGHT:
            this.pivot.set(this.width, this.height);
            break;
    }
};
PIXI.DisplayObject.PIVOT_CENTER = 'center';
PIXI.DisplayObject.PIVOT_RIGHT = 'r';
PIXI.DisplayObject.PIVOT_LEFT = 'l';
PIXI.DisplayObject.PIVOT_BOTTOM = 'b';
PIXI.DisplayObject.PIVOT_TOP = 't';
PIXI.DisplayObject.PIVOT_TOP_LEFT = 'tl';
PIXI.DisplayObject.PIVOT_TOP_RIGHT = 'tr';
PIXI.DisplayObject.PIVOT_BOTTOM_LEFT = 'bl';
PIXI.DisplayObject.PIVOT_BOTTOM_RIGHT = 'br';
PIXI.DisplayObject.prototype.addOverSound = function (marker, volume) {
    if (!this.inputEnabled)
        this.inputEnabled = true;
    this.overSoundMarker = marker;
    this.overSoundVolume = volume;
    this.events.onInputOver.add(this.playOverSound, this);
};
PIXI.DisplayObject.prototype.addOutSound = function (marker, volume) {
    if (!this.inputEnabled)
        this.inputEnabled = true;
    this.outSoundMarker = marker;
    this.outSoundVolume = volume;
    this.events.onInputOut.add(this.playOutSound, this);
};
PIXI.DisplayObject.prototype.addDownSound = function (marker, volume) {
    if (!this.inputEnabled)
        this.inputEnabled = true;
    this.downSoundMarker = marker;
    this.downSoundVolume = volume;
    this.events.onInputDown.add(this.playDownSound, this);
};
PIXI.DisplayObject.prototype.playOverSound = function () {
    if (this.overSound && this.overSound.isPlaying) {
        this.overSound.stop();
    }
    if (this.outSound && this.outSound.isPlaying) {
        this.outSound.stop();
    }
    if (typeof this.overSoundMarker === 'undefined') {
        console.log('no over sound defined');
        return null;
    }
    this.overSound = this.game.audio.playAudio(this.overSoundMarker, this.overSoundVolume);
    return this.overSound;
};
PIXI.DisplayObject.prototype.playOutSound = function () {
    this.stopSounds();
    if (typeof this.outSoundMarker === 'undefined') {
        console.log('no out sound defined');
        return null;
    }
    this.outSound = this.game.audio.playAudio(this.outSoundMarker, this.outSoundVolume);
    return this.outSound;
};
PIXI.DisplayObject.prototype.playDownSound = function () {
    this.stopSounds();
    if (typeof this.downSoundMarker === 'undefined') {
        console.log('no down sound defined');
        return null;
    }
    this.downSound = this.game.audio.playAudio(this.downSoundMarker, this.downSoundVolume);
    return this.downSound;
};
PIXI.DisplayObject.prototype.stopSounds = function () {
    if (this.overSound && this.overSound.isPlaying) {
        this.overSound.stop();
    }
    if (this.outSound && this.outSound.isPlaying) {
        this.outSound.stop();
    }
    if (this.downSound && this.downSound.isPlaying) {
        this.downSound.stop();
    }
};
Object.defineProperty(PIXI.DisplayObject.prototype, "scales", {
    get: function () {
        return this.scale.x;
    },
    set: function (value) {
        this.scale.set(value, value);
    }
});
var dijon;
(function (dijon) {
    var core;
    (function (core) {
        var Game = (function (_super) {
            __extends(Game, _super);
            function Game(config) {
                _super.call(this, config);
                this.onWorldInputDisabled = new Phaser.Signal();
                this.onWorldInputEnabled = new Phaser.Signal();
            }
            Game.prototype.boot = function () {
                _super.prototype.boot.call(this);
                this.app = dijon.mvc.Application.getInstance();
                this.asset = new core.AssetManager();
                this.sequence = new core.SequenceManager();
                this.transition = new core.TransitionManager();
                this.storage = new core.StorageManager();
                this.audio = new core.AudioManager();
                this.analytics = new core.AnalyticsManager(this.config.analytics);
                this.add = null;
                this.add = new core.GameObjectFactory(this);
                if (this.config.stats === true) {
                    this.addStats();
                }
                this.addLayers();
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
            Game.prototype.addLayers = function () {
                this.gameLayer = this.add.dGroup(0, 0, '_game_layer');
                this.uiLayer = this.add.dGroup(0, 0, '_ui_layer');
                this.uiLayer.fixedToCamera = true;
                this.stageLayer = this.add.dGroup(0, 0, '_stage_layer', true);
            };
            ;
            Game.prototype.addStats = function () {
                try {
                    this.stats = new Stats();
                    this.stats.setMode(0);
                    this.stats.domElement.style.position = 'absolute';
                    this.stats.domElement.style.top = '0px';
                    this.stats.domElement.style.left = '0px';
                    this.canvas.parentElement.appendChild(this.stats.domElement);
                }
                catch (e) {
                    console.log("Couldn't enable stats");
                }
            };
            ;
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
            ;
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
            ;
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
            ;
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
            ;
            Game.prototype.disableGameInput = function () {
                this.disableInput(this.gameLayer);
                this.onWorldInputDisabled.dispatch();
            };
            ;
            Game.prototype.enableGameInput = function () {
                this.enableInput(this.gameLayer);
                this.onWorldInputEnabled.dispatch();
            };
            ;
            Game.prototype.beginStats = function () {
                if (!this.stats)
                    return;
                this.stats.begin();
            };
            ;
            Game.prototype.endStats = function () {
                if (!this.stats)
                    return;
                this.stats.end();
            };
            ;
            Game.prototype.changeState = function (toState) {
                this.gameLayer.removeAll(true, true);
                return this.state.start(toState, false, false);
            };
            ;
            Object.defineProperty(Game.prototype, "addToGame", {
                get: function () {
                    this.add.defaultGroup = this.gameLayer;
                    return this.add;
                },
                enumerable: true,
                configurable: true
            });
            ;
            Object.defineProperty(Game.prototype, "addToUI", {
                get: function () {
                    this.add.defaultGroup = this.uiLayer;
                    return this.add;
                },
                enumerable: true,
                configurable: true
            });
            ;
            Object.defineProperty(Game.prototype, "addToStage", {
                get: function () {
                    this.add.defaultGroup = this.stageLayer;
                    return this.add;
                },
                enumerable: true,
                configurable: true
            });
            ;
            return Game;
        }(Phaser.Game));
        core.Game = Game;
    })(core = dijon.core || (dijon.core = {}));
})(dijon || (dijon = {}));
var dijon;
(function (dijon) {
    var mvc;
    (function (mvc) {
        var Notification = (function () {
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
                delete this._body;
                delete this._name;
            };
            return Notification;
        }());
        mvc.Notification = Notification;
    })(mvc = dijon.mvc || (dijon.mvc = {}));
})(dijon || (dijon = {}));
var dijon;
(function (dijon) {
    var mvc;
    (function (mvc) {
        var Mediator = (function () {
            function Mediator(_viewComponent, autoReg, mediatorName) {
                if (_viewComponent === void 0) { _viewComponent = null; }
                if (autoReg === void 0) { autoReg = true; }
                if (mediatorName === void 0) { mediatorName = null; }
                this._viewComponent = _viewComponent;
                this.mediatorName = null;
                this.app = mvc.Application.getInstance();
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
        mvc.Mediator = Mediator;
    })(mvc = dijon.mvc || (dijon.mvc = {}));
})(dijon || (dijon = {}));
var dijon;
(function (dijon) {
    var mvc;
    (function (mvc) {
        var Model = (function () {
            function Model(dataKey, modelName) {
                if (dataKey === void 0) { dataKey = null; }
                if (modelName === void 0) { modelName = null; }
                this.modelName = modelName;
                this.app = mvc.Application.getInstance();
                this.game = this.app.game;
                if (dataKey) {
                    this.setData(dataKey);
                }
                this.app.registerModel(this);
            }
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
        mvc.Model = Model;
    })(mvc = dijon.mvc || (dijon.mvc = {}));
})(dijon || (dijon = {}));
var dijon;
(function (dijon) {
    var utils;
    (function (utils) {
        var Device = (function () {
            function Device() {
            }
            Object.defineProperty(Device, "mobile", {
                get: function () {
                    return Device.mobileOS !== utils.Device.UNKNOWN;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Device, "mobileOS", {
                get: function () {
                    var userAgent = window.navigator.userAgent || window.navigator.vendor || window['opera'];
                    if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
                        return utils.Device.IOS;
                    }
                    else if (userAgent.match(/Android/i)) {
                        return utils.Device.ANDROID;
                    }
                    else {
                        return utils.Device.UNKNOWN;
                    }
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
        utils.Device = Device;
    })(utils = dijon.utils || (dijon.utils = {}));
})(dijon || (dijon = {}));
var dijon;
(function (dijon) {
    var mvc;
    (function (mvc) {
        var Application = (function () {
            function Application() {
                this._mediator = null;
                this._models = {};
                this._mediators = {};
                this._observerMap = {};
                if (Application.instance)
                    throw Error(Application.SINGLETON_MSG);
                Application.instance = this;
                this.initializeApplication();
            }
            Application.prototype.initializeApplication = function () {
                this.game = new dijon.core.Game({
                    width: 800,
                    height: 600,
                    parent: 'game-container',
                    renderer: Phaser.AUTO,
                    transparent: false
                });
            };
            Application.prototype.registerModel = function (model) {
                if (this._models[model.name]) {
                    throw (new Error('Application:: a model with the name "' + model.name + '" already exists.'));
                }
                this._models[model.name] = model;
                return model;
            };
            Application.prototype.retrieveModel = function (modelName) {
                return this._models[modelName] || null;
            };
            Application.prototype.removeModel = function (modelToRemove) {
                delete this._models[modelToRemove.name];
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
                var notification = new mvc.Notification(notificationName, notficationBody);
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
            Application.getInstance = function () {
                if (!Application.instance)
                    Application.instance = new Application();
                return Application.instance;
            };
            Application.instance = null;
            Application.SINGLETON_MSG = 'Application singleton already constructed!';
            return Application;
        }());
        mvc.Application = Application;
    })(mvc = dijon.mvc || (dijon.mvc = {}));
})(dijon || (dijon = {}));
var dijon;
(function (dijon) {
    var core;
    (function (core) {
        var AnalyticsManager = (function () {
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
        core.AnalyticsManager = AnalyticsManager;
        var AnalyticsException = (function () {
            function AnalyticsException(message) {
                this.message = message;
                this.name = 'AnalyticsException';
            }
            return AnalyticsException;
        }());
        core.AnalyticsException = AnalyticsException;
    })(core = dijon.core || (dijon.core = {}));
})(dijon || (dijon = {}));
var dijon;
(function (dijon) {
    var core;
    (function (core) {
        var State = (function (_super) {
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
                    return dijon.mvc.Application.getInstance();
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
        core.State = State;
    })(core = dijon.core || (dijon.core = {}));
})(dijon || (dijon = {}));
var dijon;
(function (dijon) {
    var display;
    (function (display) {
        var InvisibleButton = (function (_super) {
            __extends(InvisibleButton, _super);
            function InvisibleButton(x, y, name, w, h) {
                _super.call(this, x, y, null, null, name);
                this.setSize(w, h);
            }
            InvisibleButton.prototype.init = function () {
                this.inputEnabled = true;
            };
            ;
            InvisibleButton.prototype.buildInterface = function () {
                this._addHitRect();
            };
            ;
            InvisibleButton.prototype._addHitRect = function () {
                if (this._hitWidth > 0 && this._hitHeight > 0) {
                    this.hitArea = new Phaser.Rectangle(0, 0, this._hitWidth, this._hitHeight);
                }
            };
            ;
            InvisibleButton.prototype.setSize = function (w, h) {
                this._hitWidth = w || 0;
                this._hitHeight = h || 0;
                this._addHitRect();
            };
            return InvisibleButton;
        }(dijon.display.Sprite));
        display.InvisibleButton = InvisibleButton;
    })(display = dijon.display || (dijon.display = {}));
})(dijon || (dijon = {}));
var dijon;
(function (dijon) {
    var mvc;
    (function (mvc) {
        var CopyModel = (function (_super) {
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
        }(mvc.Model));
        mvc.CopyModel = CopyModel;
    })(mvc = dijon.mvc || (dijon.mvc = {}));
})(dijon || (dijon = {}));
//# sourceMappingURL=dijon.js.map