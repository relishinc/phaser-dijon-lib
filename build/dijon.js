(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Manager for loading and clearing assets
 * @param {Phaser.Game} game reference to the Phaser.Game object
 * @constructor
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var AssetManager = (function () {
    function AssetManager() {
        _classCallCheck(this, AssetManager);

        this.game = dijon.mvc.Application.getInstance().game;
        this._init();
    }

    /**
     * @type {String}
     * @static
     */

    // private methods
    /**
     * adds internal variables and signals
     * @return {void}
     * @private
     */

    _createClass(AssetManager, [{
        key: '_init',
        value: function _init() {
            this._data = {};

            this._assetPath = null;
            this._dataPath = null;
            this._spriteSheetPath = null;
            this._imgPath = null;
            this._fontPath = null;
            this._audioSpritePath = null;
            this._soundPath = null;

            this._autoLoadData = {};
            this._completedLoads = {};
            this._requiredData = {};

            this._currentAssetList = null;
            this._hasFiles = false;
            this._soundsToDecode = [];
            this._isLoadingQueue = false;
            this._maxPercent = 100;

            this._numSounds = 0;
            this._soundsDecoded = 0;

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

            this.setBaseURL();
            this.setPaths();

            this.setResolution();
        }

        /**
         * parses an asset list by key (usually from data/assets.json) and stores them internally
         * @param  {String} key the id of the list
         * @param  {Array}  list the json array of assets
         * @return {void}
         * @private
         */
    }, {
        key: '_parseAssetList',
        value: function _parseAssetList(key, list) {
            var _this = this;

            this._autoLoadData[key] = list.audtoload;
            this._requiredData[key] = list.required;

            this._loadData[key] = [];

            list.assets.forEach(function (asset) {
                _this._loadData[key].push(asset);
            });
        }

        /**
         * adds assets from a list to the load list
         * @param  {String} id id of the list to add
         * @return {void}
         * @private
         */
    }, {
        key: '_loadAssets',
        value: function _loadAssets(id) {
            var assets = this._loadData[id],
                i;

            for (i = 0; i < assets.length; i++) {
                this._loadAsset(assets[i]);
            }
        }

        /**
         * start the background loading
         * @return {void}
         * @private
         */
    }, {
        key: '_backgroundLoadStart',
        value: function _backgroundLoadStart() {
            this.onBackgroundLoadStart.dispatch();
        }

        /**
         * when a file completes in an background load queue - dispatches the onBackgroundFileComplete signal
         * @param  {Number} progress   the percent progress
         * @param  {String} id         the file id
         * @param  {int}    fileIndex  the index of the file in the list
         * @param  {int}    totalFiles the total number of files in the list
         * @return {void}
         * @private
         */
    }, {
        key: '_backgroundFileComplete',
        value: function _backgroundFileComplete(progress, id, fileIndex, totalFiles) {
            this.onBackgroundFileComplete.dispatch(progress, id, fileIndex, totalFiles);
        }

        /**
         * when the background load completes - dispatches the onBackgroundLoadComplete signal, starts checking for decoded sounds
         * @return {void}
         * @private
         */
    }, {
        key: '_backgroundLoadComplete',
        value: function _backgroundLoadComplete() {
            this.game.load.onFileComplete.remove(this._backgroundFileComplete, this);

            this.onBackgroundLoadComplete.dispatch();
            this._checkSoundDecoding(this.onBackgroundLoadCompleteAndAudioDecoded);
        }

        /**
         * when the asset list starts loading, dispatches the onLoadStart signal
         * @return {void}
         */
    }, {
        key: '_gameLoadStart',
        value: function _gameLoadStart() {
            this.onLoadStart.dispatch();
        }

        /**
         * when a file starts loading - dispatches the onFileStart signal
         * @return {void}
         */
    }, {
        key: '_gameFileStart',
        value: function _gameFileStart() {
            this.onFileStart.dispatch();
        }

        /**
         * when a file completes in the game load - dispatches the onFileComplete signal
         * @param  {Number} progress   the percent progress
         * @param  {String} id         the file id
         * @param  {int}    fileIndex  the index of the file in the list
         * @param  {int}    totalFiles the total number of files in the list
         * @return {void}
         * @private
         */
    }, {
        key: '_gameFileComplete',
        value: function _gameFileComplete(progress, id, fileIndex, totalFiles) {
            this.onFileComplete.dispatch(this.getLoadProgress(progress), id, fileIndex, totalFiles);
        }

        /**
         * when the background load completes - dispatches the onLoadComplete signal, starts checking for decoded sounds
         * @return {void}
         * @private
         */
    }, {
        key: '_gameLoadComplete',
        value: function _gameLoadComplete() {
            this._completedLoads[this._currentAssetList] = true;
            this.onLoadComplete.dispatch();
            this.game.load.onFileStart.remove(this._gameFileStart, this);
            this.game.load.onFileComplete.remove(this._gameFileComplete, this);

            this._checkSoundDecoding(this.onLoadCompleteAndAudioDecoded);
        }

        /**
         * checks if all the sounds in the queue are decoded
         * @param  {Phaser.Signal} eventToDispatch the signal to be dispatched when all sounds are decoded
         * @return {void}
         * @private
         */
    }, {
        key: '_checkSoundDecoding',
        value: function _checkSoundDecoding(eventToDispatch) {
            var sound, i, isAudioSprite;

            if (this._soundsToDecode && this._soundsToDecode.length > 0) {
                for (i = 0; i < this._soundsToDecode.length; i++) {
                    isAudioSprite = this._soundsToDecode[i].isAudioSprite;
                    sound = this.game.add.sound(this._soundsToDecode[i].url);
                    sound.__isAudioSprite = isAudioSprite;
                    sound.eventToDispatch = eventToDispatch;
                    sound.onDecoded.addOnce(this._onSoundDecoded, this);
                }
            } else {
                eventToDispatch.dispatch();
            }
        }

        /**
         * when a sound is decoded, this method removes it from the _soundsToDecode array, and increases the overall percentage loaded
         * @param  {Phaser.Sound} sound the sound being decoded
         * @return {void}
         * @private
         */
    }, {
        key: '_onSoundDecoded',
        value: function _onSoundDecoded(sound) {
            var soundIndex = this._soundsToDecode.indexOf(sound.key);
            this._soundsToDecode.splice(soundIndex, 1);

            if (typeof this.game.audio !== 'undefined' && typeof this.game.audio.addAudio !== 'undefined') {
                if (sound.__isAudioSprite) this.game.add.audioSprite(sound.key);

                this.game.audio.addAudio(sound.key, sound.__isAudioSprite);
            }

            this._soundsDecoded++;
            this._maxPercent = 100 - this._numSounds * this.getSoundDecodingModifier() + this._soundsDecoded * this.getSoundDecodingModifier();
            this._gameFileComplete(100);

            if (this._soundsToDecode.length === 0) {
                sound.eventToDispatch.dispatch();
            }
        }

        /**
         * shortcut to get an asset key using a file name (strips its extension)
         * @param  {String} fileName the url of the file
         * @return {Stirng}          the asset key (the filename with its extension stripped)
         * @private
         */
    }, {
        key: '_getAssetKey',
        value: function _getAssetKey(fileName) {
            var ext = fileName.split('.');
            ext.pop();

            return ext.join('');
        }

        /**
         * gets the extension of a given file
         * @param  {String} fileName
         * @return {String}          the extension
         * @private
         */
    }, {
        key: '_getExtension',
        value: function _getExtension(fileName) {
            return fileName.split('.').pop();
        }

        /**
         * determines what kind of asset we're dealing with and adds it to the load queue
         * @param  {Object} asset the asset object we're going to load
         * @return {void}
         * @private
         */
    }, {
        key: '_loadAsset',
        value: function _loadAsset(asset) {
            var type = asset.type,
                url = asset.url || asset.key;

            switch (type) {
                case AssetManager.ASSET_LIST:
                    return this._loadAssets(asset.id);
                case AssetManager.SOUND:
                    this.loadSound(url, asset.extensions);
                    break;
                case AssetManager.AUDIO_SPRITE:
                    this.loadAudioSprite(url, asset.extensions);
                    break;
                case AssetManager.IMAGE:
                    this.loadImage(url);
                    break;
                case AssetManager.ATLAS:
                    this.loadAtlas(url);
                    break;
                case AssetManager.TEXT:
                    this.loadText(url, asset.extensions);
                    break;
            }
        }

        /**
         * parses the data from the external assets file (normally data/assets.json)
         * @return {void}
         * @private
         */
    }, {
        key: '_parseData',
        value: function _parseData() {
            var key;

            for (key in this._data) {
                this._parseAssetList(key, this._data[key]);
            }
        }

        // public methods
    }, {
        key: 'setBaseURL',
        value: function setBaseURL(baseURL) {
            if (typeof baseURL === 'undefined') baseURL = '';

            // ensure trailing slash
            if (baseURL !== '' && baseURL.charAt(baseURL.length - 1) !== '/') baseURL += '/';

            this._baseURL = baseURL;
            this.setPaths();
        }
    }, {
        key: 'setPaths',
        value: function setPaths(pathObj) {
            if (typeof pathObj === 'undefined') pathObj = {};

            // prepend baseURL
            this._assetPath = this._baseURL + (pathObj.assetPath || 'assets');
            this._dataPath = this._baseURL + (pathObj.dataPath || 'assets/data');
            this._spriteSheetPath = this._baseURL + (pathObj.spritesheetPath || 'assets/img/spritesheets');
            this._imgPath = this._baseURL + (pathObj.imgPath || 'assets/img');
            this._fontPath = this._baseURL + (pathObj.fontPath || 'assets/fonts');
            this._audioSpritePath = this._baseURL + (pathObj.audioSpritePath || 'assets/audio/sprite');
            this._soundPath = this._baseURL + (pathObj.soundPath || 'assets/audio/sound');
        }
    }, {
        key: 'setResolution',
        value: function setResolution(res) {
            if (typeof res === 'undefined') res = this.game.resolution;

            this._resolution = '';
            // leave this out for now
            /*
            if (res > 1.5) {
                this._resolution = AssetManager.RESOLUTION_2X;
            }*/
        }

        /**
         * sets the percentage of the load we should allot to each sound
         * @param {Number} [num = 2] the percentage
         */
    }, {
        key: 'setSoundDecodingModifier',
        value: function setSoundDecodingModifier(num) {
            this._soundDecodingModifier = parseInt(num) || 2;
        }
    }, {
        key: 'getSoundDecodingModifier',
        value: function getSoundDecodingModifier() {
            return this._soundDecodingModifier || 2;
        }
    }, {
        key: 'loadText',
        value: function loadText(url) {
            var key = this._getAssetKey(url);
            return this.game.load.text(key, this._dataPath + '/' + url);
        }
    }, {
        key: 'loadAtlas',
        value: function loadAtlas(url) {
            if (this.game.cache.checkImageKey(url)) {
                return;
            }

            return this.game.load.atlasJSONHash(url, this._spriteSheetPath + '/' + url + this._resolution + '.png', this._spriteSheetPath + '/' + url + this._resolution + '.json');
        }
    }, {
        key: 'loadImage',
        value: function loadImage(url) {
            var key = this._getAssetKey(url);

            if (this.game.cache.checkImageKey(key)) {
                // if the image key already exists, don't reload the image and return the key
                return key;
            }
            url = key + this._resolution + '.' + this._getExtension(url);

            return this.game.load.image(key, this._imgPath + '/' + url);
        }
    }, {
        key: 'loadBitmapFont',
        value: function loadBitmapFont(url) {
            this.game.load.bitmapFont(url, this._fontPath + '/' + url + '.png', this._fontPath + '/' + url + '.fnt');
        }
    }, {
        key: 'loadAudio',
        value: function loadAudio(url, exts, isAudioSprite) {
            var type, path;
            if (this.game.cache.checkSoundKey(url) && this.game.cache.getSound(url).decoded) {
                return;
            }
            // type should be 'sound' or 'sprite' ('fx' and 'music' to be deprecated)
            // default to sound

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
                    path.push((isAudioSprite ? this._audioSpritePath : this._soundPath) + '/' + url + '.' + exts[i]);
                }
            } else {
                path = (isAudioSprite ? this._audioSpritePath : this._soundPath) + '/' + type + '/' + url + '.' + exts;
            }

            if (isAudioSprite) {
                this.game.load.audiosprite(url, path, this._audioSpritePath + '/' + url + '.json');
            } else {
                this.game.load.audio(url, path);
            }

            this._soundsToDecode.push({
                url: url,
                isAudioSprite: isAudioSprite
            });
        }
    }, {
        key: 'loadSound',
        value: function loadSound(url, exts) {
            return this.loadAudio(url, exts, false);
        }
    }, {
        key: 'loadAudioSprite',
        value: function loadAudioSprite(url, exts) {
            return this.loadAudio(url, exts, true);
        }
    }, {
        key: 'loadAssets',
        value: function loadAssets(id, background) {
            this._currentAssetList = id;
            this.game.load.onFileComplete.remove(this._backgroundFileComplete, this);
            this.game.load.onFileComplete.remove(this._gameFileComplete, this);

            this.game.load.reset();
            this._hasFiles = false;
            this._soundsToDecode = [];

            if (typeof this._data === 'undefined') {
                return;
            }

            if (typeof this._data[id] === 'undefined' || this._data[id].length < 1) {
                return console.log('no preload data registered for ', id);
            }

            this._loadAssets(id);

            this._hasFiles = this.game.load._fileList.length > 0;

            if (background) {
                this.game.load.onLoadStart.addOnce(this._backgroundLoadStart, this);
                this.game.load.onFileComplete.add(this._backgroundFileComplete, this);
                this.game.load.onLoadComplete.addOnce(this._backgroundLoadComplete, this);
            } else {
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
            this._maxPercent = 100 - this._numSounds * this.getSoundDecodingModifier();

            return this.game.load.start();
        }
    }, {
        key: 'loadQueue',
        value: function loadQueue() {
            if (this._isLoadingQueue) {
                return;
            }

            if (typeof this._data === 'undefined') {
                return console.log('no preload queue to load');
            }
            var assets;

            for (var state in this._data) {
                if (this._autoLoadData[state]) {

                    assets = this._data[state];
                    for (var i = 0; i < assets.length; i++) {
                        this._loadAsset(assets[i], true);
                    }
                }
            }

            this.game.load.start();
            this._isLoadingQueue = true;
            this.game.load.onLoadStart.addOnce(this._backgroundLoadStart, this);
            this.game.load.onFileComplete.add(this._backgroundFileComplete, this);
            this.game.load.onLoadComplete.addOnce(this._backgroundLoadComplete, this);
        }
    }, {
        key: 'getLoadProgress',
        value: function getLoadProgress(progress) {
            var adjustedProgress = progress * this._maxPercent / 100;
            return adjustedProgress;
        }
    }, {
        key: 'allSoundsDecoded',
        value: function allSoundsDecoded() {
            //console.log('sounds to decode', this._soundsToDecode.length);
            return this._soundsToDecode.length === 0;
        }

        /**
         * sets the data for the AssetManager to use as a reference (usually from data/assets.json)
         * triggers the _parseData internal method, which stores the asset list for later use
         * @param {String} textFileFromCache the id of the file in the Phaser.Cache
         */
    }, {
        key: 'setData',
        value: function setData(textFileFromCache) {
            this._data = JSON.parse(textFileFromCache);
            this._loadData = {};
            this._parseData();
        }

        /**
         * clears the assets from a particular id in the storage
         * @param  {String} id            the id of the asset list to clear
         * @param  {Boolean} [clearAudio = true]    whether to clear audio files
         * @param  {Boolean} [clearAtlasses = true] whether to clear texture atlasses
         * @param  {Boolean} [clearImages = true]   whether to clear images
         * @param  {Boolean} [clearText = true]     whether to clear text files
         * @return {void}
         */
    }, {
        key: 'clearAssets',
        value: function clearAssets(id, clearAudio, clearAtlasses, clearImages, clearText) {
            var assets = this._data[id];

            console.log('clearing: ', id);

            if (!assets || typeof assets === 'undefined' || assets.length < 1) {
                return console.log('no assets', assets);
            }

            clearAudio = clearAudio !== false;
            clearAtlasses = clearAtlasses !== false;
            clearImages = clearImages !== false;
            clearText = clearText !== false;

            for (var i = 0; i < assets.length; i++) {
                this.clearAsset(assets[i], clearAudio, clearAtlasses, clearImages, clearText);
            }

            this._completedLoads[id] = false;
        }

        /**
         * clears an asset from the game's memory
         * @param  {Object} asset         the asset to clear
         * @param  {Boolean} [clearAudio = true]    whether to clear audio files
         * @param  {Boolean} [clearAtlasses = true] whether to clear texture atlasses
         * @param  {Boolean} [clearImages = true]   whether to clear images
         * @param  {Boolean} [clearText = true]     whether to clear text files
         * @return {void}
         */
    }, {
        key: 'clearAsset',
        value: function clearAsset(asset, clearAudio, clearAtlasses, clearImages, clearText) {
            var type = asset.type,
                url = asset.key,
                required = asset.required;

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
                        AssetManager.removeText(url);
                    }
                    break;
            }
        }

        /**
         * checks if the assets from this list id are already loaded
         * @param  {String}  id the asset list id to check
         * @return {Boolean}    whether it has been loaded already
         */
    }, {
        key: 'hasLoadedAssets',
        value: function hasLoadedAssets(id) {
            return this._completedLoads[id] === true;
        }
    }]);

    return AssetManager;
})();

AssetManager.SOUND = 'sound';

/**
 * @type {String}
 * @static
 */
AssetManager.AUDIO_SPRITE = 'audioSprite';

/**
 * @type {String}
 * @static
 */
AssetManager.IMAGE = 'image';

/**
 * @type {String}
 * @static
 */
AssetManager.ATLAS = 'atlas';

/**
 * @type {String}
 * @static
 */
AssetManager.TEXT = 'text';

/**
 * @type {String}
 * @static
 */
AssetManager.ASSET_LIST = 'assetList';

AssetManager.RESOLUTION_2X = "@2x";
AssetManager.RESOLUTION_3X = "@3x";

exports['default'] = AssetManager;
module.exports = exports['default'];

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = (function (_Phaser$Game) {
	_inherits(Game, _Phaser$Game);

	function Game(config) {
		_classCallCheck(this, Game);

		_get(Object.getPrototypeOf(Game.prototype), "constructor", this).call(this, config);
	}

	_createClass(Game, [{
		key: "boot",
		value: function boot() {
			_get(Object.getPrototypeOf(Game.prototype), "boot", this).call(this);
			this.asset = new dijon.core.AssetManager();
			this.sequence = new dijon.core.SequenceManager();

			this._gameLayer = this.add.group();
			this._uiLayer = this.add.group();
		}
	}, {
		key: "addToGame",
		value: function addToGame(obj) {
			return this.gameLayer.add(obj);
		}
	}, {
		key: "addToUI",
		value: function addToUI(obj) {
			return this.uiLayer.add(obj);
		}
	}, {
		key: "gameLayer",
		get: function get() {
			return this._gameLayer;
		}
	}, {
		key: "uiLayer",
		get: function get() {
			return this._uiLayer;
		}
	}]);

	return Game;
})(Phaser.Game);

exports["default"] = Game;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var SequenceManager = (function () {
    function SequenceManager() {
        _classCallCheck(this, SequenceManager);

        this.game = dijon.mvc.Application.getInstance().game;
        this._init();
    }

    // private methods

    _createClass(SequenceManager, [{
        key: '_init',
        value: function _init() {
            this._defaultInterval = 20;
        }
    }, {
        key: '_executeMethod',
        value: function _executeMethod(sequence, context, callback, callbackContext) {
            var func = sequence.shift();
            if (typeof func !== 'undefined' && typeof context !== 'undefined' && context) {
                func.call(context);
            }

            if (sequence.length === 0 && callback && callbackContext) {
                callback.call(callbackContext);
            }
        }

        // public methods
    }, {
        key: 'run',
        value: function run(sequence, context, interval, completeCallback, completeCallbackContext) {
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
                while (sequence.length > 0) this._executeMethod(sequence, context, typeof completeCallback === 'undefined' ? null : completeCallback, typeof completeCallbackContext === 'undefined' ? null : completeCallbackContext);
                return;
            }

            this.game.time.events.repeat(interval, sequence.length, this._executeMethod, this, sequence, context, typeof completeCallback === 'undefined' ? null : completeCallback, typeof completeCallbackContext === 'undefined' ? null : completeCallbackContext);
        }
    }]);

    return SequenceManager;
})();

exports['default'] = SequenceManager;
module.exports = exports['default'];

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequire(obj) { return obj && obj.__esModule ? obj["default"] : obj; }

var _AssetManager = require("./AssetManager");

exports.AssetManager = _interopRequire(_AssetManager);

var _Game = require("./Game");

exports.Game = _interopRequire(_Game);

var _SequenceManager = require("./SequenceManager");

exports.SequenceManager = _interopRequire(_SequenceManager);

},{"./AssetManager":1,"./Game":2,"./SequenceManager":3}],5:[function(require,module,exports){
"use strict";

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _libExports = require("./lib-exports");

var dijon = _interopRequireWildcard(_libExports);

window.dijon = dijon;

},{"./lib-exports":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _coreCore = require("./core/core");

var core = _interopRequireWildcard(_coreCore);

var _mvcMvc = require("./mvc/mvc");

var mvc = _interopRequireWildcard(_mvcMvc);

var _stateState = require("./state/state");

var state = _interopRequireWildcard(_stateState);

exports.core = core;
exports.mvc = mvc;
exports.state = state;

},{"./core/core":4,"./mvc/mvc":8,"./state/state":10}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Application = (function () {
	function Application() {
		_classCallCheck(this, Application);

		if (Application.instance) throw Error(Application.SINGLETON_MSG);

		Application.instance = this;
		this.game = null;

		this.initializeApplication();
	}

	_createClass(Application, [{
		key: 'initializeApplication',
		value: function initializeApplication() {
			this.game = new dijon.core.Game({
				width: 800,
				height: 600,
				parent: 'game-container',
				renderer: Phaser.AUTO,
				transparent: false
			});
		}
	}]);

	return Application;
})();

Application.getInstance = function () {
	if (!Application.instance) Application.instance = new Application();
	return Application.instance;
};

// static constants
Application.instance = null;
Application.SINGLETON_MSG = 'Application singleton already constructed!';

exports['default'] = Application;
module.exports = exports['default'];

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequire(obj) { return obj && obj.__esModule ? obj["default"] : obj; }

var _Application = require("./Application");

exports.Application = _interopRequire(_Application);

},{"./Application":7}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseState = (function (_Phaser$State) {
    _inherits(BaseState, _Phaser$State);

    // Phaser.State overrides

    function BaseState() {
        _classCallCheck(this, BaseState);

        _get(Object.getPrototypeOf(BaseState.prototype), 'constructor', this).call(this);
        this._audio = null;
    }

    _createClass(BaseState, [{
        key: 'init',
        value: function init() {}
    }, {
        key: 'preload',
        value: function preload() {
            if (this.preloadID) this.game.asset.loadAssets(this.preloadID);
        }
    }, {
        key: 'create',
        value: function create() {
            if (!this.game.asset.allSoundsDecoded()) {
                this.game.asset.onLoadCompleteAndAudioDecoded.addOnce(this.create, this);
                return;
            }
            this.buildInterface();
            this.afterBuildInterface();
            this.startBuild();
        }
    }, {
        key: 'shutdown',
        value: function shutdown() {
            this._removeAudio();
        }

        // public methods
    }, {
        key: 'listBuildSequence',
        value: function listBuildSequence() {
            return [];
        }
    }, {
        key: 'buildInterface',
        value: function buildInterface() {}
    }, {
        key: 'afterBuildInterface',
        value: function afterBuildInterface() {}
    }, {
        key: 'startBuild',
        value: function startBuild() {
            this.game.sequence.run(this.listBuildSequence(), this, this.buildInterval, this.preAfterBuild, this);
        }
    }, {
        key: 'preAfterBuild',
        value: function preAfterBuild() {
            if (this.game['debugger']) {
                this.game['debugger'].selectedObject = null;
                this.game['debugger'].refresh();
            }

            if (typeof this.game.transition === 'undefined' || !this.game.transition.transitionOut()) {
                this.afterBuild();
            } else {
                this.game.transition.onTransitionOutComplete.addOnce(this.afterBuild, this);
                this.game.transition.transitionOut();
            }
        }
    }, {
        key: 'afterBuild',
        value: function afterBuild() {}
    }, {
        key: 'addAudio',
        value: function addAudio(track) {
            if (!this._audio) {
                this._audio = [];
            }
            this._audio.push(track);
            return track;
        }

        // private methods
    }, {
        key: '_removeAudio',
        value: function _removeAudio() {
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
        }

        // getter / setter
    }, {
        key: 'game',
        get: function get() {
            return dijon.mvc.Application.getInstance().game;
        }
    }, {
        key: 'preloadID',
        get: function get() {
            return null;
        }
    }, {
        key: 'buildInterval',
        get: function get() {
            return 10;
        }
    }]);

    return BaseState;
})(Phaser.State);

exports['default'] = BaseState;
module.exports = exports['default'];

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequire(obj) { return obj && obj.__esModule ? obj["default"] : obj; }

var _BaseState = require("./BaseState");

exports.BaseState = _interopRequire(_BaseState);

},{"./BaseState":9}]},{},[5])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjOi94YW1wcC9odGRvY3MvcmVsaXNoLXBoYXNlci1lczYtcHJvamVjdC9hcHAvc3JjL3NjcmlwdHMvZGlqb24vc3JjL2NvcmUvQXNzZXRNYW5hZ2VyLmpzIiwiYzoveGFtcHAvaHRkb2NzL3JlbGlzaC1waGFzZXItZXM2LXByb2plY3QvYXBwL3NyYy9zY3JpcHRzL2Rpam9uL3NyYy9jb3JlL0dhbWUuanMiLCJjOi94YW1wcC9odGRvY3MvcmVsaXNoLXBoYXNlci1lczYtcHJvamVjdC9hcHAvc3JjL3NjcmlwdHMvZGlqb24vc3JjL2NvcmUvU2VxdWVuY2VNYW5hZ2VyLmpzIiwiYzoveGFtcHAvaHRkb2NzL3JlbGlzaC1waGFzZXItZXM2LXByb2plY3QvYXBwL3NyYy9zY3JpcHRzL2Rpam9uL3NyYy9jb3JlL2NvcmUuanMiLCJjOi94YW1wcC9odGRvY3MvcmVsaXNoLXBoYXNlci1lczYtcHJvamVjdC9hcHAvc3JjL3NjcmlwdHMvZGlqb24vc3JjL2Rpam9uLmpzIiwiYzoveGFtcHAvaHRkb2NzL3JlbGlzaC1waGFzZXItZXM2LXByb2plY3QvYXBwL3NyYy9zY3JpcHRzL2Rpam9uL3NyYy9saWItZXhwb3J0cy5qcyIsImM6L3hhbXBwL2h0ZG9jcy9yZWxpc2gtcGhhc2VyLWVzNi1wcm9qZWN0L2FwcC9zcmMvc2NyaXB0cy9kaWpvbi9zcmMvbXZjL0FwcGxpY2F0aW9uLmpzIiwiYzoveGFtcHAvaHRkb2NzL3JlbGlzaC1waGFzZXItZXM2LXByb2plY3QvYXBwL3NyYy9zY3JpcHRzL2Rpam9uL3NyYy9tdmMvbXZjLmpzIiwiYzoveGFtcHAvaHRkb2NzL3JlbGlzaC1waGFzZXItZXM2LXByb2plY3QvYXBwL3NyYy9zY3JpcHRzL2Rpam9uL3NyYy9zdGF0ZS9CYXNlU3RhdGUuanMiLCJjOi94YW1wcC9odGRvY3MvcmVsaXNoLXBoYXNlci1lczYtcHJvamVjdC9hcHAvc3JjL3NjcmlwdHMvZGlqb24vc3JjL3N0YXRlL3N0YXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztJQ01NLFlBQVk7QUFDSCxhQURULFlBQVksR0FDRDs4QkFEWCxZQUFZOztBQUVYLFlBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDO0FBQ3JELFlBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUNmOzs7Ozs7Ozs7Ozs7OztpQkFKQyxZQUFZOztlQVdULGlCQUFHO0FBQ0osZ0JBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDOztBQUVoQixnQkFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFDdkIsZ0JBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLGdCQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0FBQzdCLGdCQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUNyQixnQkFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDdEIsZ0JBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7QUFDN0IsZ0JBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDOztBQUV2QixnQkFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7QUFDeEIsZ0JBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0FBQzFCLGdCQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQzs7QUFFeEIsZ0JBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7QUFDOUIsZ0JBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0FBQ3ZCLGdCQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztBQUMxQixnQkFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7QUFDN0IsZ0JBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDOztBQUV2QixnQkFBSSxD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b3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcclxuICogTWFuYWdlciBmb3IgbG9hZGluZyBhbmQgY2xlYXJpbmcgYXNzZXRzXHJcbiAqIEBwYXJhbSB7UGhhc2VyLkdhbWV9IGdhbWUgcmVmZXJlbmNlIHRvIHRoZSBQaGFzZXIuR2FtZSBvYmplY3RcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG4gXHJcbmNsYXNzIEFzc2V0TWFuYWdlcntcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICB0aGlzLmdhbWUgPSBkaWpvbi5tdmMuQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lO1xyXG4gICAgICAgdGhpcy5faW5pdCgpOyBcclxuICAgIH1cclxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1xyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRzIGludGVybmFsIHZhcmlhYmxlcyBhbmQgc2lnbmFsc1xyXG4gICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9pbml0KCkge1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSB7fTtcclxuXHJcbiAgICAgICAgdGhpcy5fYXNzZXRQYXRoID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9kYXRhUGF0aCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlU2hlZXRQYXRoID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9pbWdQYXRoID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9mb250UGF0aCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fYXVkaW9TcHJpdGVQYXRoID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9zb3VuZFBhdGggPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLl9hdXRvTG9hZERhdGEgPSB7fTtcclxuICAgICAgICB0aGlzLl9jb21wbGV0ZWRMb2FkcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuX3JlcXVpcmVkRGF0YSA9IHt9O1xyXG5cclxuICAgICAgICB0aGlzLl9jdXJyZW50QXNzZXRMaXN0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9oYXNGaWxlcyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3NvdW5kc1RvRGVjb2RlID0gW107XHJcbiAgICAgICAgdGhpcy5faXNMb2FkaW5nUXVldWUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9tYXhQZXJjZW50ID0gMTAwO1xyXG5cclxuICAgICAgICB0aGlzLl9udW1Tb3VuZHMgPSAwO1xyXG4gICAgICAgIHRoaXMuX3NvdW5kc0RlY29kZWQgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLm9uTG9hZFN0YXJ0ID0gbmV3IFBoYXNlci5TaWduYWwoKTtcclxuICAgICAgICB0aGlzLm9uRmlsZVN0YXJ0ID0gbmV3IFBoYXNlci5TaWduYWwoKTtcclxuICAgICAgICB0aGlzLm9uRmlsZUNvbXBsZXRlID0gbmV3IFBoYXNlci5TaWduYWwoKTtcclxuICAgICAgICB0aGlzLm9uTG9hZENvbXBsZXRlID0gbmV3IFBoYXNlci5TaWduYWwoKTtcclxuICAgICAgICB0aGlzLm9uTG9hZENvbXBsZXRlQW5kQXVkaW9EZWNvZGVkID0gbmV3IFBoYXNlci5TaWduYWwoKTtcclxuXHJcbiAgICAgICAgdGhpcy5vbkJhY2tncm91bmRMb2FkU3RhcnQgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xyXG4gICAgICAgIHRoaXMub25CYWNrZ3JvdW5kRmlsZVN0YXJ0ID0gbmV3IFBoYXNlci5TaWduYWwoKTtcclxuICAgICAgICB0aGlzLm9uQmFja2dyb3VuZEZpbGVDb21wbGV0ZSA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XHJcbiAgICAgICAgdGhpcy5vbkJhY2tncm91bmRMb2FkQ29tcGxldGUgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xyXG4gICAgICAgIHRoaXMub25CYWNrZ3JvdW5kTG9hZENvbXBsZXRlQW5kQXVkaW9EZWNvZGVkID0gbmV3IFBoYXNlci5TaWduYWwoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRCYXNlVVJMKCk7XHJcbiAgICAgICAgdGhpcy5zZXRQYXRocygpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFJlc29sdXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHBhcnNlcyBhbiBhc3NldCBsaXN0IGJ5IGtleSAodXN1YWxseSBmcm9tIGRhdGEvYXNzZXRzLmpzb24pIGFuZCBzdG9yZXMgdGhlbSBpbnRlcm5hbGx5XHJcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGtleSB0aGUgaWQgb2YgdGhlIGxpc3RcclxuICAgICAqIEBwYXJhbSAge0FycmF5fSAgbGlzdCB0aGUganNvbiBhcnJheSBvZiBhc3NldHNcclxuICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfcGFyc2VBc3NldExpc3Qoa2V5LCBsaXN0KSB7XHJcbiAgICAgICAgdGhpcy5fYXV0b0xvYWREYXRhW2tleV0gPSBsaXN0LmF1ZHRvbG9hZDtcclxuICAgICAgICB0aGlzLl9yZXF1aXJlZERhdGFba2V5XSA9IGxpc3QucmVxdWlyZWQ7XHJcblxyXG4gICAgICAgIHRoaXMuX2xvYWREYXRhW2tleV0gPSBbXTtcclxuICAgICAgICBcclxuICAgICAgICBsaXN0LmFzc2V0cy5mb3JFYWNoKGFzc2V0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fbG9hZERhdGFba2V5XS5wdXNoKGFzc2V0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRzIGFzc2V0cyBmcm9tIGEgbGlzdCB0byB0aGUgbG9hZCBsaXN0XHJcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBsaXN0IHRvIGFkZFxyXG4gICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9sb2FkQXNzZXRzKGlkKSB7XHJcbiAgICAgICAgdmFyIGFzc2V0cyA9IHRoaXMuX2xvYWREYXRhW2lkXSxcclxuICAgICAgICAgICAgaTtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGFzc2V0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkQXNzZXQoYXNzZXRzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzdGFydCB0aGUgYmFja2dyb3VuZCBsb2FkaW5nXHJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX2JhY2tncm91bmRMb2FkU3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5vbkJhY2tncm91bmRMb2FkU3RhcnQuZGlzcGF0Y2goKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHdoZW4gYSBmaWxlIGNvbXBsZXRlcyBpbiBhbiBiYWNrZ3JvdW5kIGxvYWQgcXVldWUgLSBkaXNwYXRjaGVzIHRoZSBvbkJhY2tncm91bmRGaWxlQ29tcGxldGUgc2lnbmFsXHJcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHByb2dyZXNzICAgdGhlIHBlcmNlbnQgcHJvZ3Jlc3NcclxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gaWQgICAgICAgICB0aGUgZmlsZSBpZFxyXG4gICAgICogQHBhcmFtICB7aW50fSAgICBmaWxlSW5kZXggIHRoZSBpbmRleCBvZiB0aGUgZmlsZSBpbiB0aGUgbGlzdFxyXG4gICAgICogQHBhcmFtICB7aW50fSAgICB0b3RhbEZpbGVzIHRoZSB0b3RhbCBudW1iZXIgb2YgZmlsZXMgaW4gdGhlIGxpc3RcclxuICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfYmFja2dyb3VuZEZpbGVDb21wbGV0ZShwcm9ncmVzcywgaWQsIGZpbGVJbmRleCwgdG90YWxGaWxlcykge1xyXG4gICAgICAgIHRoaXMub25CYWNrZ3JvdW5kRmlsZUNvbXBsZXRlLmRpc3BhdGNoKHByb2dyZXNzLCBpZCwgZmlsZUluZGV4LCB0b3RhbEZpbGVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHdoZW4gdGhlIGJhY2tncm91bmQgbG9hZCBjb21wbGV0ZXMgLSBkaXNwYXRjaGVzIHRoZSBvbkJhY2tncm91bmRMb2FkQ29tcGxldGUgc2lnbmFsLCBzdGFydHMgY2hlY2tpbmcgZm9yIGRlY29kZWQgc291bmRzXHJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX2JhY2tncm91bmRMb2FkQ29tcGxldGUoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQub25GaWxlQ29tcGxldGUucmVtb3ZlKHRoaXMuX2JhY2tncm91bmRGaWxlQ29tcGxldGUsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLm9uQmFja2dyb3VuZExvYWRDb21wbGV0ZS5kaXNwYXRjaCgpO1xyXG4gICAgICAgIHRoaXMuX2NoZWNrU291bmREZWNvZGluZyh0aGlzLm9uQmFja2dyb3VuZExvYWRDb21wbGV0ZUFuZEF1ZGlvRGVjb2RlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB3aGVuIHRoZSBhc3NldCBsaXN0IHN0YXJ0cyBsb2FkaW5nLCBkaXNwYXRjaGVzIHRoZSBvbkxvYWRTdGFydCBzaWduYWxcclxuICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIF9nYW1lTG9hZFN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMub25Mb2FkU3RhcnQuZGlzcGF0Y2goKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHdoZW4gYSBmaWxlIHN0YXJ0cyBsb2FkaW5nIC0gZGlzcGF0Y2hlcyB0aGUgb25GaWxlU3RhcnQgc2lnbmFsXHJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBfZ2FtZUZpbGVTdGFydCgpIHtcclxuICAgICAgICB0aGlzLm9uRmlsZVN0YXJ0LmRpc3BhdGNoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB3aGVuIGEgZmlsZSBjb21wbGV0ZXMgaW4gdGhlIGdhbWUgbG9hZCAtIGRpc3BhdGNoZXMgdGhlIG9uRmlsZUNvbXBsZXRlIHNpZ25hbFxyXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBwcm9ncmVzcyAgIHRoZSBwZXJjZW50IHByb2dyZXNzXHJcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGlkICAgICAgICAgdGhlIGZpbGUgaWRcclxuICAgICAqIEBwYXJhbSAge2ludH0gICAgZmlsZUluZGV4ICB0aGUgaW5kZXggb2YgdGhlIGZpbGUgaW4gdGhlIGxpc3RcclxuICAgICAqIEBwYXJhbSAge2ludH0gICAgdG90YWxGaWxlcyB0aGUgdG90YWwgbnVtYmVyIG9mIGZpbGVzIGluIHRoZSBsaXN0XHJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX2dhbWVGaWxlQ29tcGxldGUocHJvZ3Jlc3MsIGlkLCBmaWxlSW5kZXgsIHRvdGFsRmlsZXMpIHtcclxuICAgICAgICB0aGlzLm9uRmlsZUNvbXBsZXRlLmRpc3BhdGNoKHRoaXMuZ2V0TG9hZFByb2dyZXNzKHByb2dyZXNzKSwgaWQsIGZpbGVJbmRleCwgdG90YWxGaWxlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB3aGVuIHRoZSBiYWNrZ3JvdW5kIGxvYWQgY29tcGxldGVzIC0gZGlzcGF0Y2hlcyB0aGUgb25Mb2FkQ29tcGxldGUgc2lnbmFsLCBzdGFydHMgY2hlY2tpbmcgZm9yIGRlY29kZWQgc291bmRzXHJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX2dhbWVMb2FkQ29tcGxldGUoKSB7XHJcbiAgICAgICAgdGhpcy5fY29tcGxldGVkTG9hZHNbdGhpcy5fY3VycmVudEFzc2V0TGlzdF0gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub25Mb2FkQ29tcGxldGUuZGlzcGF0Y2goKTtcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkZpbGVTdGFydC5yZW1vdmUodGhpcy5fZ2FtZUZpbGVTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQub25GaWxlQ29tcGxldGUucmVtb3ZlKHRoaXMuX2dhbWVGaWxlQ29tcGxldGUsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLl9jaGVja1NvdW5kRGVjb2RpbmcodGhpcy5vbkxvYWRDb21wbGV0ZUFuZEF1ZGlvRGVjb2RlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjaGVja3MgaWYgYWxsIHRoZSBzb3VuZHMgaW4gdGhlIHF1ZXVlIGFyZSBkZWNvZGVkXHJcbiAgICAgKiBAcGFyYW0gIHtQaGFzZXIuU2lnbmFsfSBldmVudFRvRGlzcGF0Y2ggdGhlIHNpZ25hbCB0byBiZSBkaXNwYXRjaGVkIHdoZW4gYWxsIHNvdW5kcyBhcmUgZGVjb2RlZFxyXG4gICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9jaGVja1NvdW5kRGVjb2RpbmcoZXZlbnRUb0Rpc3BhdGNoKSB7XHJcbiAgICAgICAgdmFyIHNvdW5kLCBpLCBpc0F1ZGlvU3ByaXRlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fc291bmRzVG9EZWNvZGUgJiYgdGhpcy5fc291bmRzVG9EZWNvZGUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5fc291bmRzVG9EZWNvZGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlzQXVkaW9TcHJpdGUgPSB0aGlzLl9zb3VuZHNUb0RlY29kZVtpXS5pc0F1ZGlvU3ByaXRlO1xyXG4gICAgICAgICAgICAgICAgc291bmQgPSB0aGlzLmdhbWUuYWRkLnNvdW5kKHRoaXMuX3NvdW5kc1RvRGVjb2RlW2ldLnVybCk7XHJcbiAgICAgICAgICAgICAgICBzb3VuZC5fX2lzQXVkaW9TcHJpdGUgPSBpc0F1ZGlvU3ByaXRlO1xyXG4gICAgICAgICAgICAgICAgc291bmQuZXZlbnRUb0Rpc3BhdGNoID0gZXZlbnRUb0Rpc3BhdGNoO1xyXG4gICAgICAgICAgICAgICAgc291bmQub25EZWNvZGVkLmFkZE9uY2UodGhpcy5fb25Tb3VuZERlY29kZWQsIHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZXZlbnRUb0Rpc3BhdGNoLmRpc3BhdGNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogd2hlbiBhIHNvdW5kIGlzIGRlY29kZWQsIHRoaXMgbWV0aG9kIHJlbW92ZXMgaXQgZnJvbSB0aGUgX3NvdW5kc1RvRGVjb2RlIGFycmF5LCBhbmQgaW5jcmVhc2VzIHRoZSBvdmVyYWxsIHBlcmNlbnRhZ2UgbG9hZGVkXHJcbiAgICAgKiBAcGFyYW0gIHtQaGFzZXIuU291bmR9IHNvdW5kIHRoZSBzb3VuZCBiZWluZyBkZWNvZGVkXHJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX29uU291bmREZWNvZGVkKHNvdW5kKSB7XHJcbiAgICAgICAgdmFyIHNvdW5kSW5kZXggPSB0aGlzLl9zb3VuZHNUb0RlY29kZS5pbmRleE9mKHNvdW5kLmtleSk7XHJcbiAgICAgICAgdGhpcy5fc291bmRzVG9EZWNvZGUuc3BsaWNlKHNvdW5kSW5kZXgsIDEpO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZ2FtZS5hdWRpbyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHRoaXMuZ2FtZS5hdWRpby5hZGRBdWRpbyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgaWYgKHNvdW5kLl9faXNBdWRpb1Nwcml0ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5hZGQuYXVkaW9TcHJpdGUoc291bmQua2V5KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hdWRpby5hZGRBdWRpbyhzb3VuZC5rZXksIHNvdW5kLl9faXNBdWRpb1Nwcml0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9zb3VuZHNEZWNvZGVkKys7XHJcbiAgICAgICAgdGhpcy5fbWF4UGVyY2VudCA9ICgxMDAgLSAodGhpcy5fbnVtU291bmRzICogdGhpcy5nZXRTb3VuZERlY29kaW5nTW9kaWZpZXIoKSkpICsgKHRoaXMuX3NvdW5kc0RlY29kZWQgKiB0aGlzLmdldFNvdW5kRGVjb2RpbmdNb2RpZmllcigpKTtcclxuICAgICAgICB0aGlzLl9nYW1lRmlsZUNvbXBsZXRlKDEwMCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zb3VuZHNUb0RlY29kZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgc291bmQuZXZlbnRUb0Rpc3BhdGNoLmRpc3BhdGNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2hvcnRjdXQgdG8gZ2V0IGFuIGFzc2V0IGtleSB1c2luZyBhIGZpbGUgbmFtZSAoc3RyaXBzIGl0cyBleHRlbnNpb24pXHJcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGZpbGVOYW1lIHRoZSB1cmwgb2YgdGhlIGZpbGVcclxuICAgICAqIEByZXR1cm4ge1N0aXJuZ30gICAgICAgICAgdGhlIGFzc2V0IGtleSAodGhlIGZpbGVuYW1lIHdpdGggaXRzIGV4dGVuc2lvbiBzdHJpcHBlZClcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9nZXRBc3NldEtleShmaWxlTmFtZSkge1xyXG4gICAgICAgIHZhciBleHQgPSBmaWxlTmFtZS5zcGxpdCgnLicpO1xyXG4gICAgICAgIGV4dC5wb3AoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGV4dC5qb2luKCcnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldHMgdGhlIGV4dGVuc2lvbiBvZiBhIGdpdmVuIGZpbGVcclxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gZmlsZU5hbWVcclxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgICAgdGhlIGV4dGVuc2lvblxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX2dldEV4dGVuc2lvbihmaWxlTmFtZSkge1xyXG4gICAgICAgIHJldHVybiBmaWxlTmFtZS5zcGxpdCgnLicpLnBvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZGV0ZXJtaW5lcyB3aGF0IGtpbmQgb2YgYXNzZXQgd2UncmUgZGVhbGluZyB3aXRoIGFuZCBhZGRzIGl0IHRvIHRoZSBsb2FkIHF1ZXVlXHJcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGFzc2V0IHRoZSBhc3NldCBvYmplY3Qgd2UncmUgZ29pbmcgdG8gbG9hZFxyXG4gICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9sb2FkQXNzZXQoYXNzZXQpIHtcclxuICAgICAgICB2YXIgdHlwZSA9IGFzc2V0LnR5cGUsXHJcbiAgICAgICAgICAgIHVybCA9IGFzc2V0LnVybCB8fCBhc3NldC5rZXk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5BU1NFVF9MSVNUOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRBc3NldHMoYXNzZXQuaWQpO1xyXG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5TT1VORDpcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFNvdW5kKHVybCwgYXNzZXQuZXh0ZW5zaW9ucyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuQVVESU9fU1BSSVRFOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQXVkaW9TcHJpdGUodXJsLCBhc3NldC5leHRlbnNpb25zKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5JTUFHRTpcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEltYWdlKHVybCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuQVRMQVM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRBdGxhcyh1cmwpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLlRFWFQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRUZXh0KHVybCwgYXNzZXQuZXh0ZW5zaW9ucyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBwYXJzZXMgdGhlIGRhdGEgZnJvbSB0aGUgZXh0ZXJuYWwgYXNzZXRzIGZpbGUgKG5vcm1hbGx5IGRhdGEvYXNzZXRzLmpzb24pXHJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX3BhcnNlRGF0YSgpIHtcclxuICAgICAgICB2YXIga2V5O1xyXG5cclxuICAgICAgICBmb3IgKGtleSBpbiB0aGlzLl9kYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhcnNlQXNzZXRMaXN0KGtleSwgdGhpcy5fZGF0YVtrZXldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIHB1YmxpYyBtZXRob2RzXHJcbiAgICBzZXRCYXNlVVJMKGJhc2VVUkwpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGJhc2VVUkwgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICBiYXNlVVJMID0gJyc7XHJcblxyXG4gICAgICAgIC8vIGVuc3VyZSB0cmFpbGluZyBzbGFzaFxyXG4gICAgICAgIGlmIChiYXNlVVJMICE9PSAnJyAmJiBiYXNlVVJMLmNoYXJBdChiYXNlVVJMLmxlbmd0aCAtIDEpICE9PSAnLycpXHJcbiAgICAgICAgICAgIGJhc2VVUkwgKz0gJy8nO1xyXG5cclxuICAgICAgICB0aGlzLl9iYXNlVVJMID0gYmFzZVVSTDtcclxuICAgICAgICB0aGlzLnNldFBhdGhzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgIFxyXG4gICAgc2V0UGF0aHMocGF0aE9iaikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgcGF0aE9iaiA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgIHBhdGhPYmogPSB7fTtcclxuXHJcbiAgICAgICAgLy8gcHJlcGVuZCBiYXNlVVJMXHJcbiAgICAgICAgdGhpcy5fYXNzZXRQYXRoID0gdGhpcy5fYmFzZVVSTCArIChwYXRoT2JqLmFzc2V0UGF0aCB8fCAnYXNzZXRzJyk7XHJcbiAgICAgICAgdGhpcy5fZGF0YVBhdGggPSB0aGlzLl9iYXNlVVJMICsgKHBhdGhPYmouZGF0YVBhdGggfHwgJ2Fzc2V0cy9kYXRhJyk7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlU2hlZXRQYXRoID0gdGhpcy5fYmFzZVVSTCArIChwYXRoT2JqLnNwcml0ZXNoZWV0UGF0aCB8fCAnYXNzZXRzL2ltZy9zcHJpdGVzaGVldHMnKTtcclxuICAgICAgICB0aGlzLl9pbWdQYXRoID0gdGhpcy5fYmFzZVVSTCArIChwYXRoT2JqLmltZ1BhdGggfHwgJ2Fzc2V0cy9pbWcnKTtcclxuICAgICAgICB0aGlzLl9mb250UGF0aCA9IHRoaXMuX2Jhc2VVUkwgKyAocGF0aE9iai5mb250UGF0aCB8fCAnYXNzZXRzL2ZvbnRzJyk7XHJcbiAgICAgICAgdGhpcy5fYXVkaW9TcHJpdGVQYXRoID0gdGhpcy5fYmFzZVVSTCArIChwYXRoT2JqLmF1ZGlvU3ByaXRlUGF0aCB8fCAnYXNzZXRzL2F1ZGlvL3Nwcml0ZScpO1xyXG4gICAgICAgIHRoaXMuX3NvdW5kUGF0aCA9IHRoaXMuX2Jhc2VVUkwgKyAocGF0aE9iai5zb3VuZFBhdGggfHwgJ2Fzc2V0cy9hdWRpby9zb3VuZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJlc29sdXRpb24ocmVzKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiByZXMgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICByZXMgPSB0aGlzLmdhbWUucmVzb2x1dGlvbjtcclxuXHJcbiAgICAgICAgdGhpcy5fcmVzb2x1dGlvbiA9ICcnO1xyXG4gICAgICAgIC8vIGxlYXZlIHRoaXMgb3V0IGZvciBub3dcclxuICAgICAgICAvKlxyXG4gICAgICAgIGlmIChyZXMgPiAxLjUpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVzb2x1dGlvbiA9IEFzc2V0TWFuYWdlci5SRVNPTFVUSU9OXzJYO1xyXG4gICAgICAgIH0qL1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0cyB0aGUgcGVyY2VudGFnZSBvZiB0aGUgbG9hZCB3ZSBzaG91bGQgYWxsb3QgdG8gZWFjaCBzb3VuZFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtudW0gPSAyXSB0aGUgcGVyY2VudGFnZVxyXG4gICAgICovXHJcbiAgICBzZXRTb3VuZERlY29kaW5nTW9kaWZpZXIobnVtKSB7XHJcbiAgICAgICAgdGhpcy5fc291bmREZWNvZGluZ01vZGlmaWVyID0gcGFyc2VJbnQobnVtKSB8fCAyO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgZ2V0U291bmREZWNvZGluZ01vZGlmaWVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VuZERlY29kaW5nTW9kaWZpZXIgfHwgMjtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkVGV4dCh1cmwpIHtcclxuICAgICAgICB2YXIga2V5ID0gdGhpcy5fZ2V0QXNzZXRLZXkodXJsKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lLmxvYWQudGV4dChrZXksIHRoaXMuX2RhdGFQYXRoICsgJy8nICsgdXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkQXRsYXModXJsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jYWNoZS5jaGVja0ltYWdlS2V5KHVybCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZS5sb2FkLmF0bGFzSlNPTkhhc2godXJsLCB0aGlzLl9zcHJpdGVTaGVldFBhdGggKyAnLycgKyB1cmwgKyB0aGlzLl9yZXNvbHV0aW9uICsgJy5wbmcnLCB0aGlzLl9zcHJpdGVTaGVldFBhdGggKyAnLycgKyB1cmwgKyB0aGlzLl9yZXNvbHV0aW9uICsgJy5qc29uJyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRJbWFnZSh1cmwpIHtcclxuICAgICAgICB2YXIga2V5ID0gdGhpcy5fZ2V0QXNzZXRLZXkodXJsKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jYWNoZS5jaGVja0ltYWdlS2V5KGtleSkpIHtcclxuICAgICAgICAgICAgLy8gaWYgdGhlIGltYWdlIGtleSBhbHJlYWR5IGV4aXN0cywgZG9uJ3QgcmVsb2FkIHRoZSBpbWFnZSBhbmQgcmV0dXJuIHRoZSBrZXlcclxuICAgICAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdXJsID0ga2V5ICsgdGhpcy5fcmVzb2x1dGlvbiArICcuJyArIHRoaXMuX2dldEV4dGVuc2lvbih1cmwpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lLmxvYWQuaW1hZ2Uoa2V5LCB0aGlzLl9pbWdQYXRoICsgJy8nICsgdXJsKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbG9hZEJpdG1hcEZvbnQodXJsKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuYml0bWFwRm9udCh1cmwsIHRoaXMuX2ZvbnRQYXRoICsgJy8nICsgdXJsICsgJy5wbmcnLCB0aGlzLl9mb250UGF0aCArICcvJyArIHVybCArICcuZm50Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBsb2FkQXVkaW8odXJsLCBleHRzLCBpc0F1ZGlvU3ByaXRlKSB7XHJcbiAgICAgICAgdmFyIHR5cGUsIHBhdGg7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jYWNoZS5jaGVja1NvdW5kS2V5KHVybCkgJiYgdGhpcy5nYW1lLmNhY2hlLmdldFNvdW5kKHVybCkuZGVjb2RlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHR5cGUgc2hvdWxkIGJlICdzb3VuZCcgb3IgJ3Nwcml0ZScgKCdmeCcgYW5kICdtdXNpYycgdG8gYmUgZGVwcmVjYXRlZClcclxuICAgICAgICAvLyBkZWZhdWx0IHRvIHNvdW5kXHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdHlwZSA9ICdzb3VuZCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZXh0cy5pbmRleE9mKCcsJykgPj0gMCkge1xyXG4gICAgICAgICAgICBleHRzID0gZXh0cy5zcGxpdCgnLCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5nYW1lLmRldmljZS5pT1MgJiYgZXh0cy5pbmRleE9mKCdtNGEnKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgZXh0cy51bnNoaWZ0KCdtNGEnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBleHRzID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBwYXRoID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXh0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcGF0aC5wdXNoKChpc0F1ZGlvU3ByaXRlID8gdGhpcy5fYXVkaW9TcHJpdGVQYXRoIDogdGhpcy5fc291bmRQYXRoKSArICcvJyArIHVybCArICcuJyArIGV4dHNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGF0aCA9IChpc0F1ZGlvU3ByaXRlID8gdGhpcy5fYXVkaW9TcHJpdGVQYXRoIDogdGhpcy5fc291bmRQYXRoKSArICcvJyArIHR5cGUgKyAnLycgKyB1cmwgKyAnLicgKyBleHRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzQXVkaW9TcHJpdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXVkaW9zcHJpdGUodXJsLCBwYXRoLCB0aGlzLl9hdWRpb1Nwcml0ZVBhdGggKyAnLycgKyB1cmwgKyAnLmpzb24nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5hdWRpbyh1cmwsIHBhdGgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc291bmRzVG9EZWNvZGUucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBpc0F1ZGlvU3ByaXRlOiBpc0F1ZGlvU3ByaXRlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBsb2FkU291bmQodXJsLCBleHRzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZEF1ZGlvKHVybCwgZXh0cywgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRBdWRpb1Nwcml0ZSh1cmwsIGV4dHMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2FkQXVkaW8odXJsLCBleHRzLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkQXNzZXRzKGlkLCBiYWNrZ3JvdW5kKSB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudEFzc2V0TGlzdCA9IGlkO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uRmlsZUNvbXBsZXRlLnJlbW92ZSh0aGlzLl9iYWNrZ3JvdW5kRmlsZUNvbXBsZXRlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkZpbGVDb21wbGV0ZS5yZW1vdmUodGhpcy5fZ2FtZUZpbGVDb21wbGV0ZSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5faGFzRmlsZXMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9zb3VuZHNUb0RlY29kZSA9IFtdO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2RhdGEgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fZGF0YVtpZF0gPT09ICd1bmRlZmluZWQnIHx8IHRoaXMuX2RhdGFbaWRdLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdubyBwcmVsb2FkIGRhdGEgcmVnaXN0ZXJlZCBmb3IgJywgaWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fbG9hZEFzc2V0cyhpZCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2hhc0ZpbGVzID0gdGhpcy5nYW1lLmxvYWQuX2ZpbGVMaXN0Lmxlbmd0aCA+IDA7XHJcblxyXG4gICAgICAgIGlmIChiYWNrZ3JvdW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uTG9hZFN0YXJ0LmFkZE9uY2UodGhpcy5fYmFja2dyb3VuZExvYWRTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uRmlsZUNvbXBsZXRlLmFkZCh0aGlzLl9iYWNrZ3JvdW5kRmlsZUNvbXBsZXRlLCB0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQub25Mb2FkQ29tcGxldGUuYWRkT25jZSh0aGlzLl9iYWNrZ3JvdW5kTG9hZENvbXBsZXRlLCB0aGlzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkxvYWRTdGFydC5hZGRPbmNlKHRoaXMuX2dhbWVMb2FkU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkZpbGVTdGFydC5hZGQodGhpcy5fZ2FtZUZpbGVTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uRmlsZUNvbXBsZXRlLmFkZCh0aGlzLl9nYW1lRmlsZUNvbXBsZXRlLCB0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQub25Mb2FkQ29tcGxldGUuYWRkT25jZSh0aGlzLl9nYW1lTG9hZENvbXBsZXRlLCB0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5faGFzRmlsZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2FtZUxvYWRTdGFydCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9nYW1lRmlsZUNvbXBsZXRlKDEwMCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2dhbWVMb2FkQ29tcGxldGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fbnVtU291bmRzID0gdGhpcy5fc291bmRzVG9EZWNvZGUubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuX3NvdW5kc0RlY29kZWQgPSAwO1xyXG4gICAgICAgIHRoaXMuX21heFBlcmNlbnQgPSAxMDAgLSAodGhpcy5fbnVtU291bmRzICogdGhpcy5nZXRTb3VuZERlY29kaW5nTW9kaWZpZXIoKSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUubG9hZC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRRdWV1ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5faXNMb2FkaW5nUXVldWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9kYXRhID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ25vIHByZWxvYWQgcXVldWUgdG8gbG9hZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYXNzZXRzO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBzdGF0ZSBpbiB0aGlzLl9kYXRhKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9hdXRvTG9hZERhdGFbc3RhdGVdKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgYXNzZXRzID0gdGhpcy5fZGF0YVtzdGF0ZV07XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFzc2V0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRBc3NldChhc3NldHNbaV0sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuX2lzTG9hZGluZ1F1ZXVlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkxvYWRTdGFydC5hZGRPbmNlKHRoaXMuX2JhY2tncm91bmRMb2FkU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uRmlsZUNvbXBsZXRlLmFkZCh0aGlzLl9iYWNrZ3JvdW5kRmlsZUNvbXBsZXRlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkxvYWRDb21wbGV0ZS5hZGRPbmNlKHRoaXMuX2JhY2tncm91bmRMb2FkQ29tcGxldGUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgZ2V0TG9hZFByb2dyZXNzKHByb2dyZXNzKSB7XHJcbiAgICAgICAgdmFyIGFkanVzdGVkUHJvZ3Jlc3MgPSBwcm9ncmVzcyAqIHRoaXMuX21heFBlcmNlbnQgLyAxMDA7XHJcbiAgICAgICAgcmV0dXJuIGFkanVzdGVkUHJvZ3Jlc3M7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBhbGxTb3VuZHNEZWNvZGVkKCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ3NvdW5kcyB0byBkZWNvZGUnLCB0aGlzLl9zb3VuZHNUb0RlY29kZS5sZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VuZHNUb0RlY29kZS5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0cyB0aGUgZGF0YSBmb3IgdGhlIEFzc2V0TWFuYWdlciB0byB1c2UgYXMgYSByZWZlcmVuY2UgKHVzdWFsbHkgZnJvbSBkYXRhL2Fzc2V0cy5qc29uKVxyXG4gICAgICogdHJpZ2dlcnMgdGhlIF9wYXJzZURhdGEgaW50ZXJuYWwgbWV0aG9kLCB3aGljaCBzdG9yZXMgdGhlIGFzc2V0IGxpc3QgZm9yIGxhdGVyIHVzZVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHRleHRGaWxlRnJvbUNhY2hlIHRoZSBpZCBvZiB0aGUgZmlsZSBpbiB0aGUgUGhhc2VyLkNhY2hlXHJcbiAgICAgKi9cclxuICAgIHNldERhdGEodGV4dEZpbGVGcm9tQ2FjaGUpIHtcclxuICAgICAgICB0aGlzLl9kYXRhID0gSlNPTi5wYXJzZSh0ZXh0RmlsZUZyb21DYWNoZSk7XHJcbiAgICAgICAgdGhpcy5fbG9hZERhdGEgPSB7fTtcclxuICAgICAgICB0aGlzLl9wYXJzZURhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNsZWFycyB0aGUgYXNzZXRzIGZyb20gYSBwYXJ0aWN1bGFyIGlkIGluIHRoZSBzdG9yYWdlXHJcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGlkICAgICAgICAgICAgdGhlIGlkIG9mIHRoZSBhc3NldCBsaXN0IHRvIGNsZWFyXHJcbiAgICAgKiBAcGFyYW0gIHtCb29sZWFufSBbY2xlYXJBdWRpbyA9IHRydWVdICAgIHdoZXRoZXIgdG8gY2xlYXIgYXVkaW8gZmlsZXNcclxuICAgICAqIEBwYXJhbSAge0Jvb2xlYW59IFtjbGVhckF0bGFzc2VzID0gdHJ1ZV0gd2hldGhlciB0byBjbGVhciB0ZXh0dXJlIGF0bGFzc2VzXHJcbiAgICAgKiBAcGFyYW0gIHtCb29sZWFufSBbY2xlYXJJbWFnZXMgPSB0cnVlXSAgIHdoZXRoZXIgdG8gY2xlYXIgaW1hZ2VzXHJcbiAgICAgKiBAcGFyYW0gIHtCb29sZWFufSBbY2xlYXJUZXh0ID0gdHJ1ZV0gICAgIHdoZXRoZXIgdG8gY2xlYXIgdGV4dCBmaWxlc1xyXG4gICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgY2xlYXJBc3NldHMoaWQsIGNsZWFyQXVkaW8sIGNsZWFyQXRsYXNzZXMsIGNsZWFySW1hZ2VzLCBjbGVhclRleHQpIHtcclxuICAgICAgICB2YXIgYXNzZXRzID0gdGhpcy5fZGF0YVtpZF07XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGVhcmluZzogJywgaWQpO1xyXG5cclxuICAgICAgICBpZiAoIWFzc2V0cyB8fCB0eXBlb2YgYXNzZXRzID09PSAndW5kZWZpbmVkJyB8fCBhc3NldHMubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ25vIGFzc2V0cycsIGFzc2V0cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbGVhckF1ZGlvID0gY2xlYXJBdWRpbyAhPT0gZmFsc2U7XHJcbiAgICAgICAgY2xlYXJBdGxhc3NlcyA9IGNsZWFyQXRsYXNzZXMgIT09IGZhbHNlO1xyXG4gICAgICAgIGNsZWFySW1hZ2VzID0gY2xlYXJJbWFnZXMgIT09IGZhbHNlO1xyXG4gICAgICAgIGNsZWFyVGV4dCA9IGNsZWFyVGV4dCAhPT0gZmFsc2U7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXNzZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJBc3NldChhc3NldHNbaV0sIGNsZWFyQXVkaW8sIGNsZWFyQXRsYXNzZXMsIGNsZWFySW1hZ2VzLCBjbGVhclRleHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fY29tcGxldGVkTG9hZHNbaWRdID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjbGVhcnMgYW4gYXNzZXQgZnJvbSB0aGUgZ2FtZSdzIG1lbW9yeVxyXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBhc3NldCAgICAgICAgIHRoZSBhc3NldCB0byBjbGVhclxyXG4gICAgICogQHBhcmFtICB7Qm9vbGVhbn0gW2NsZWFyQXVkaW8gPSB0cnVlXSAgICB3aGV0aGVyIHRvIGNsZWFyIGF1ZGlvIGZpbGVzXHJcbiAgICAgKiBAcGFyYW0gIHtCb29sZWFufSBbY2xlYXJBdGxhc3NlcyA9IHRydWVdIHdoZXRoZXIgdG8gY2xlYXIgdGV4dHVyZSBhdGxhc3Nlc1xyXG4gICAgICogQHBhcmFtICB7Qm9vbGVhbn0gW2NsZWFySW1hZ2VzID0gdHJ1ZV0gICB3aGV0aGVyIHRvIGNsZWFyIGltYWdlc1xyXG4gICAgICogQHBhcmFtICB7Qm9vbGVhbn0gW2NsZWFyVGV4dCA9IHRydWVdICAgICB3aGV0aGVyIHRvIGNsZWFyIHRleHQgZmlsZXNcclxuICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIGNsZWFyQXNzZXQoYXNzZXQsIGNsZWFyQXVkaW8sIGNsZWFyQXRsYXNzZXMsIGNsZWFySW1hZ2VzLCBjbGVhclRleHQpIHtcclxuICAgICAgICB2YXIgdHlwZSA9IGFzc2V0LnR5cGUsXHJcbiAgICAgICAgICAgIHVybCA9IGFzc2V0LmtleSxcclxuICAgICAgICAgICAgcmVxdWlyZWQgPSBhc3NldC5yZXF1aXJlZDtcclxuXHJcbiAgICAgICAgaWYgKHJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGUgJyArIHR5cGUgKyAnIGFzc2V0OiAnICsgdXJsICsgJyBpcyByZXF1aXJlZCBhbmQgd2lsbCBub3QgYmUgY2xlYXJlZCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5BVURJTzpcclxuICAgICAgICAgICAgICAgIGlmIChjbGVhckF1ZGlvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLnNvdW5kLnJlbW92ZUJ5S2V5KHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNhY2hlLnJlbW92ZVNvdW5kKHVybCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuSU1BR0U6XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xlYXJJbWFnZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuY2FjaGUucmVtb3ZlSW1hZ2UodXJsKTtcclxuICAgICAgICAgICAgICAgICAgICBQSVhJLkJhc2VUZXh0dXJlQ2FjaGVbdXJsXS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuQVRMQVM6XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xlYXJBdGxhc3Nlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jYWNoZS5yZW1vdmVJbWFnZSh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIFBJWEkuQmFzZVRleHR1cmVDYWNoZVt1cmxdLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuY2FjaGUucmVtb3ZlWE1MKHVybCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuVEVYVDpcclxuICAgICAgICAgICAgICAgIGlmIChjbGVhclRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBBc3NldE1hbmFnZXIucmVtb3ZlVGV4dCh1cmwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2hlY2tzIGlmIHRoZSBhc3NldHMgZnJvbSB0aGlzIGxpc3QgaWQgYXJlIGFscmVhZHkgbG9hZGVkXHJcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBpZCB0aGUgYXNzZXQgbGlzdCBpZCB0byBjaGVja1xyXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gICAgd2hldGhlciBpdCBoYXMgYmVlbiBsb2FkZWQgYWxyZWFkeVxyXG4gICAgICovXHJcbiAgICBoYXNMb2FkZWRBc3NldHMoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29tcGxldGVkTG9hZHNbaWRdID09PSB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHR5cGUge1N0cmluZ31cclxuICogQHN0YXRpY1xyXG4gKi9cclxuQXNzZXRNYW5hZ2VyLlNPVU5EID0gJ3NvdW5kJztcclxuXHJcbi8qKlxyXG4gKiBAdHlwZSB7U3RyaW5nfVxyXG4gKiBAc3RhdGljXHJcbiAqL1xyXG5Bc3NldE1hbmFnZXIuQVVESU9fU1BSSVRFID0gJ2F1ZGlvU3ByaXRlJztcclxuXHJcbi8qKlxyXG4gKiBAdHlwZSB7U3RyaW5nfVxyXG4gKiBAc3RhdGljXHJcbiAqL1xyXG5Bc3NldE1hbmFnZXIuSU1BR0UgPSAnaW1hZ2UnO1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlIHtTdHJpbmd9XHJcbiAqIEBzdGF0aWNcclxuICovXHJcbkFzc2V0TWFuYWdlci5BVExBUyA9ICdhdGxhcyc7XHJcblxyXG4vKipcclxuICogQHR5cGUge1N0cmluZ31cclxuICogQHN0YXRpY1xyXG4gKi9cclxuQXNzZXRNYW5hZ2VyLlRFWFQgPSAndGV4dCc7XHJcblxyXG4vKipcclxuICogQHR5cGUge1N0cmluZ31cclxuICogQHN0YXRpY1xyXG4gKi9cclxuQXNzZXRNYW5hZ2VyLkFTU0VUX0xJU1QgPSAnYXNzZXRMaXN0JztcclxuXHJcbkFzc2V0TWFuYWdlci5SRVNPTFVUSU9OXzJYID0gXCJAMnhcIjtcclxuQXNzZXRNYW5hZ2VyLlJFU09MVVRJT05fM1ggPSBcIkAzeFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXNzZXRNYW5hZ2VyO1xyXG4iLCJjbGFzcyBHYW1lIGV4dGVuZHMgUGhhc2VyLkdhbWV7XHJcblx0Y29uc3RydWN0b3IoY29uZmlnKXtcclxuXHRcdHN1cGVyKGNvbmZpZyk7XHJcblx0fVxyXG5cdFxyXG5cdGJvb3QoKXtcclxuXHRcdHN1cGVyLmJvb3QoKTtcclxuXHRcdHRoaXMuYXNzZXQgPSBuZXcgZGlqb24uY29yZS5Bc3NldE1hbmFnZXIoKTtcclxuXHRcdHRoaXMuc2VxdWVuY2UgPSBuZXcgZGlqb24uY29yZS5TZXF1ZW5jZU1hbmFnZXIoKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5fZ2FtZUxheWVyID0gdGhpcy5hZGQuZ3JvdXAoKTtcclxuXHRcdHRoaXMuX3VpTGF5ZXIgPSB0aGlzLmFkZC5ncm91cCgpOyAgXHJcblx0fVxyXG5cdFxyXG5cdGFkZFRvR2FtZShvYmope1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2FtZUxheWVyLmFkZChvYmopO1xyXG5cdH1cclxuXHRcclxuXHRhZGRUb1VJKG9iail7XHJcblx0XHRyZXR1cm4gdGhpcy51aUxheWVyLmFkZChvYmopO1xyXG5cdH1cclxuXHRcclxuXHRnZXQgZ2FtZUxheWVyKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5fZ2FtZUxheWVyO1xyXG5cdH1cclxuXHRcclxuXHRnZXQgdWlMYXllcigpe1xyXG5cdFx0cmV0dXJuIHRoaXMuX3VpTGF5ZXI7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lOyIsImNsYXNzIFNlcXVlbmNlTWFuYWdlcntcclxuXHRjb25zdHJ1Y3Rvcigpe1xyXG5cdFx0dGhpcy5nYW1lID0gZGlqb24ubXZjLkFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZTtcclxuXHRcdHRoaXMuX2luaXQoKTtcclxuXHR9XHJcblx0XHJcblx0Ly8gcHJpdmF0ZSBtZXRob2RzXHJcblx0X2luaXQoKXtcclxuXHRcdHRoaXMuX2RlZmF1bHRJbnRlcnZhbCA9IDIwO1xyXG5cdH1cclxuXHRcclxuXHRfZXhlY3V0ZU1ldGhvZChzZXF1ZW5jZSwgY29udGV4dCwgY2FsbGJhY2ssIGNhbGxiYWNrQ29udGV4dCkge1xyXG4gICAgICAgIHZhciBmdW5jID0gc2VxdWVuY2Uuc2hpZnQoKTtcclxuICAgICAgICBpZiAodHlwZW9mIGZ1bmMgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb250ZXh0ICE9PSAndW5kZWZpbmVkJyAmJiBjb250ZXh0KSB7XHJcbiAgICAgICAgICAgIGZ1bmMuY2FsbChjb250ZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZXF1ZW5jZS5sZW5ndGggPT09IDAgJiYgY2FsbGJhY2sgJiYgY2FsbGJhY2tDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoY2FsbGJhY2tDb250ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblx0XHJcblx0Ly8gcHVibGljIG1ldGhvZHNcclxuXHRydW4oc2VxdWVuY2UsIGNvbnRleHQsIGludGVydmFsLCBjb21wbGV0ZUNhbGxiYWNrLCBjb21wbGV0ZUNhbGxiYWNrQ29udGV4dCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgY29udGV4dCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb250ZXh0IG11c3QgYmUgcHJvdmlkZWQgZm9yIHRoZSBzZXF1ZW5jZSBtZXRob2RzJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGludGVydmFsID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBpbnRlcnZhbCA9IHRoaXMuX2RlZmF1bHRJbnRlcnZhbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZXF1ZW5jZS5sZW5ndGggPT09IDAgJiYgdHlwZW9mIGNvbXBsZXRlQ2FsbGJhY2sgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb21wbGV0ZUNhbGxiYWNrQ29udGV4dCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgY29tcGxldGVDYWxsYmFjay5jYWxsKGNvbXBsZXRlQ2FsbGJhY2tDb250ZXh0KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGludGVydmFsID09PSAwKSB7XHJcbiAgICAgICAgICAgIHdoaWxlIChzZXF1ZW5jZS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZXhlY3V0ZU1ldGhvZChzZXF1ZW5jZSwgY29udGV4dCwgdHlwZW9mIGNvbXBsZXRlQ2FsbGJhY2sgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IGNvbXBsZXRlQ2FsbGJhY2ssIHR5cGVvZiBjb21wbGV0ZUNhbGxiYWNrQ29udGV4dCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogY29tcGxldGVDYWxsYmFja0NvbnRleHQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMucmVwZWF0KGludGVydmFsLCBzZXF1ZW5jZS5sZW5ndGgsIHRoaXMuX2V4ZWN1dGVNZXRob2QsIHRoaXMsIHNlcXVlbmNlLCBjb250ZXh0LCB0eXBlb2YgY29tcGxldGVDYWxsYmFjayA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogY29tcGxldGVDYWxsYmFjaywgdHlwZW9mIGNvbXBsZXRlQ2FsbGJhY2tDb250ZXh0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBjb21wbGV0ZUNhbGxiYWNrQ29udGV4dCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcXVlbmNlTWFuYWdlcjsiLCJleHBvcnQge2RlZmF1bHQgYXMgQXNzZXRNYW5hZ2VyfSBmcm9tIFwiLi9Bc3NldE1hbmFnZXJcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBHYW1lfSBmcm9tIFwiLi9HYW1lXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgU2VxdWVuY2VNYW5hZ2VyfSBmcm9tIFwiLi9TZXF1ZW5jZU1hbmFnZXJcIjtcbiIsImltcG9ydCAqIGFzIGRpam9uIGZyb20gXCIuL2xpYi1leHBvcnRzXCI7XG53aW5kb3cuZGlqb24gPSBkaWpvbjsiLCJpbXBvcnQgKiBhcyBjb3JlIGZyb20gXCIuL2NvcmUvY29yZVwiO1xuaW1wb3J0ICogYXMgbXZjIGZyb20gXCIuL212Yy9tdmNcIjtcbmltcG9ydCAqIGFzIHN0YXRlIGZyb20gXCIuL3N0YXRlL3N0YXRlXCI7XG5cbmV4cG9ydHtcblx0Y29yZSxcblx0bXZjLFxuXHRzdGF0ZVxufTtcbiIsImNsYXNzIEFwcGxpY2F0aW9uIHtcclxuXHRjb25zdHJ1Y3Rvcigpe1xyXG5cdFx0aWYoIEFwcGxpY2F0aW9uLmluc3RhbmNlIClcclxuXHRcdFx0XHR0aHJvdyBFcnJvciggQXBwbGljYXRpb24uU0lOR0xFVE9OX01TRyApO1xyXG5cclxuXHRcdEFwcGxpY2F0aW9uLmluc3RhbmNlID0gdGhpcztcclxuXHRcdHRoaXMuZ2FtZSA9IG51bGw7XHJcblx0XHRcclxuXHRcdHRoaXMuaW5pdGlhbGl6ZUFwcGxpY2F0aW9uKCk7XHJcblx0fVxyXG5cdFxyXG5cdGluaXRpYWxpemVBcHBsaWNhdGlvbigpe1xyXG5cdFx0dGhpcy5nYW1lID0gbmV3IGRpam9uLmNvcmUuR2FtZSh7XHJcblx0XHRcdHdpZHRoOjgwMCwgXHJcblx0XHRcdGhlaWdodDo2MDAsIFxyXG5cdFx0XHRwYXJlbnQ6J2dhbWUtY29udGFpbmVyJywgXHJcblx0XHRcdHJlbmRlcmVyOlBoYXNlci5BVVRPLCBcclxuXHRcdFx0dHJhbnNwYXJlbnQ6ZmFsc2VcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbigpe1xyXG5cdGlmKCAhQXBwbGljYXRpb24uaW5zdGFuY2UgKVxyXG5cdFx0XHRBcHBsaWNhdGlvbi5pbnN0YW5jZSA9IG5ldyBBcHBsaWNhdGlvbigpO1xyXG5cdHJldHVybiBBcHBsaWNhdGlvbi5pbnN0YW5jZTtcclxufTtcclxuXHJcbi8vIHN0YXRpYyBjb25zdGFudHNcclxuQXBwbGljYXRpb24uaW5zdGFuY2UgPSBudWxsO1xyXG5BcHBsaWNhdGlvbi5TSU5HTEVUT05fTVNHID0gJ0FwcGxpY2F0aW9uIHNpbmdsZXRvbiBhbHJlYWR5IGNvbnN0cnVjdGVkISc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBsaWNhdGlvbjsiLCJleHBvcnQge2RlZmF1bHQgYXMgQXBwbGljYXRpb259IGZyb20gXCIuL0FwcGxpY2F0aW9uXCI7XG4iLCJjbGFzcyBCYXNlU3RhdGUgZXh0ZW5kcyBQaGFzZXIuU3RhdGV7XHJcbiAgICAvLyBQaGFzZXIuU3RhdGUgb3ZlcnJpZGVzXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fYXVkaW8gPSBudWxsO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbml0KCl7fVxyXG4gICAgXHJcbiAgICBwcmVsb2FkKCl7XHJcbiAgICAgICAgaWYgKHRoaXMucHJlbG9hZElEKVxyXG4gICAgICAgICAgICB0aGlzLmdhbWUuYXNzZXQubG9hZEFzc2V0cyh0aGlzLnByZWxvYWRJRCk7XHJcbiAgICB9XHJcbiAgICBcclxuXHRjcmVhdGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmdhbWUuYXNzZXQuYWxsU291bmRzRGVjb2RlZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hc3NldC5vbkxvYWRDb21wbGV0ZUFuZEF1ZGlvRGVjb2RlZC5hZGRPbmNlKHRoaXMuY3JlYXRlLCB0aGlzKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIHRoaXMuYnVpbGRJbnRlcmZhY2UoKTtcclxuICAgICAgICB0aGlzLmFmdGVyQnVpbGRJbnRlcmZhY2UoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0QnVpbGQoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2h1dGRvd24oKSB7XHJcbiAgICAgICAgdGhpcy5fcmVtb3ZlQXVkaW8oKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gcHVibGljIG1ldGhvZHNcclxuICAgIGxpc3RCdWlsZFNlcXVlbmNlKCl7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBidWlsZEludGVyZmFjZSgpe31cclxuICAgIFxyXG4gICAgYWZ0ZXJCdWlsZEludGVyZmFjZSgpe31cclxuICAgIFxyXG4gICAgc3RhcnRCdWlsZCgpIHtcclxuICAgICAgICB0aGlzLmdhbWUuc2VxdWVuY2UucnVuKHRoaXMubGlzdEJ1aWxkU2VxdWVuY2UoKSwgdGhpcywgdGhpcy5idWlsZEludGVydmFsLCB0aGlzLnByZUFmdGVyQnVpbGQsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcmVBZnRlckJ1aWxkKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5kZWJ1Z2dlcikge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuZGVidWdnZXIuc2VsZWN0ZWRPYmplY3QgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuZGVidWdnZXIucmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmdhbWUudHJhbnNpdGlvbiA9PT0gJ3VuZGVmaW5lZCcgfHwgIXRoaXMuZ2FtZS50cmFuc2l0aW9uLnRyYW5zaXRpb25PdXQoKSl7XHJcbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJCdWlsZCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS50cmFuc2l0aW9uLm9uVHJhbnNpdGlvbk91dENvbXBsZXRlLmFkZE9uY2UodGhpcy5hZnRlckJ1aWxkLCB0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLnRyYW5zaXRpb24udHJhbnNpdGlvbk91dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgYWZ0ZXJCdWlsZCgpe31cclxuICAgIFxyXG4gICAgYWRkQXVkaW8odHJhY2spe1xyXG4gICAgICAgIGlmICghdGhpcy5fYXVkaW8pe1xyXG4gICAgICAgICAgICB0aGlzLl9hdWRpbyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9hdWRpby5wdXNoKHRyYWNrKTtcclxuICAgICAgICByZXR1cm4gdHJhY2s7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1xyXG4gICAgX3JlbW92ZUF1ZGlvKCkge1xyXG4gICAgICAgIHZhciBzb3VuZDtcclxuICAgICAgICBpZiAoIXRoaXMuX2F1ZGlvKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgXHJcbiAgICAgICAgd2hpbGUgKHRoaXMuX2F1ZGlvLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc291bmQgPSB0aGlzLl9hdWRpby5wb3AoKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzb3VuZCAhPT0gJ3VuZGVmaW5lZCcgJiYgc291bmQgIT0gbnVsbCAmJiB0eXBlb2Ygc291bmQuc3RvcCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc291bmQub25TdG9wICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdW5kLm9uU3RvcC5yZW1vdmVBbGwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gZ2V0dGVyIC8gc2V0dGVyXHJcbiAgICBnZXQgZ2FtZSgpe1xyXG4gICAgICAgIHJldHVybiBkaWpvbi5tdmMuQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgcHJlbG9hZElEKCl7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCBidWlsZEludGVydmFsKCl7XHJcbiAgICAgICAgcmV0dXJuIDEwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNlU3RhdGU7IiwiZXhwb3J0IHtkZWZhdWx0IGFzIEJhc2VTdGF0ZX0gZnJvbSBcIi4vQmFzZVN0YXRlXCI7XG4iXX0=
