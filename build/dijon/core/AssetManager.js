"use strict";
var Application_1 = require('../mvc/Application');
var Notifications_1 = require('../utils/Notifications');
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
        this.app = Application_1.default.getInstance();
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
        this.sendNotification(Notifications_1.default.ASSET_MANAGER_DATA_SET, this._data);
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
        this.sendNotification(Notifications_1.default.ASSET_MANAGER_ASSETS_CLEARED, id);
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AssetManager;
//# sourceMappingURL=AssetManager.js.map