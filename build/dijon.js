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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL3JlbGlzaC1waGFzZXItZXM2LXByb2plY3QvYXBwL3NyYy9zY3JpcHRzL2Rpam9uL3NyYy9jb3JlL0Fzc2V0TWFuYWdlci5qcyIsIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvcmVsaXNoLXBoYXNlci1lczYtcHJvamVjdC9hcHAvc3JjL3NjcmlwdHMvZGlqb24vc3JjL2NvcmUvR2FtZS5qcyIsIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvcmVsaXNoLXBoYXNlci1lczYtcHJvamVjdC9hcHAvc3JjL3NjcmlwdHMvZGlqb24vc3JjL2NvcmUvU2VxdWVuY2VNYW5hZ2VyLmpzIiwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9yZWxpc2gtcGhhc2VyLWVzNi1wcm9qZWN0L2FwcC9zcmMvc2NyaXB0cy9kaWpvbi9zcmMvY29yZS9jb3JlLmpzIiwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9yZWxpc2gtcGhhc2VyLWVzNi1wcm9qZWN0L2FwcC9zcmMvc2NyaXB0cy9kaWpvbi9zcmMvZGlqb24uanMiLCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL3JlbGlzaC1waGFzZXItZXM2LXByb2plY3QvYXBwL3NyYy9zY3JpcHRzL2Rpam9uL3NyYy9saWItZXhwb3J0cy5qcyIsIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvcmVsaXNoLXBoYXNlci1lczYtcHJvamVjdC9hcHAvc3JjL3NjcmlwdHMvZGlqb24vc3JjL212Yy9BcHBsaWNhdGlvbi5qcyIsIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvcmVsaXNoLXBoYXNlci1lczYtcHJvamVjdC9hcHAvc3JjL3NjcmlwdHMvZGlqb24vc3JjL212Yy9tdmMuanMiLCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL3JlbGlzaC1waGFzZXItZXM2LXByb2plY3QvYXBwL3NyYy9zY3JpcHRzL2Rpam9uL3NyYy9zdGF0ZS9CYXNlU3RhdGUuanMiLCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL3JlbGlzaC1waGFzZXItZXM2LXByb2plY3QvYXBwL3NyYy9zY3JpcHRzL2Rpam9uL3NyYy9zdGF0ZS9zdGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNNTSxZQUFZO0FBQ0gsYUFEVCxZQUFZLEdBQ0Q7OEJBRFgsWUFBWTs7QUFFWCxZQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQztBQUNyRCxZQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDZjs7Ozs7Ozs7Ozs7Ozs7aUJBSkMsWUFBWTs7ZUFXVCxpQkFBRztBQUNKLGdCQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzs7QUFFaEIsZ0JBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLGdCQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztBQUN0QixnQkFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztBQUM3QixnQkFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDckIsZ0JBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLGdCQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0FBQzdCLGdCQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzs7QUFFdkIsZ0JBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLGdCQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztBQUMxQixnQkFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7O0FBRXhCLGdCQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO0FBQzlCLGdCQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztBQUN2QixnQkFBSSxDQUFDLGVBQWUsR0FB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LFNBQVM7R0FBUyxNQUFNLENBQUMsS0FBSzs7cUJBaUdyQixTQUFTOzs7Ozs7Ozs7Ozs7eUJDakdXLGFBQWE7O1FBQTdCLFNBQVMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBNYW5hZ2VyIGZvciBsb2FkaW5nIGFuZCBjbGVhcmluZyBhc3NldHNcbiAqIEBwYXJhbSB7UGhhc2VyLkdhbWV9IGdhbWUgcmVmZXJlbmNlIHRvIHRoZSBQaGFzZXIuR2FtZSBvYmplY3RcbiAqIEBjb25zdHJ1Y3RvclxuICovXG4gXG5jbGFzcyBBc3NldE1hbmFnZXJ7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICB0aGlzLmdhbWUgPSBkaWpvbi5tdmMuQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lO1xuICAgICAgIHRoaXMuX2luaXQoKTsgXG4gICAgfVxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuICAgIC8qKlxuICAgICAqIGFkZHMgaW50ZXJuYWwgdmFyaWFibGVzIGFuZCBzaWduYWxzXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9pbml0KCkge1xuICAgICAgICB0aGlzLl9kYXRhID0ge307XG5cbiAgICAgICAgdGhpcy5fYXNzZXRQYXRoID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZGF0YVBhdGggPSBudWxsO1xuICAgICAgICB0aGlzLl9zcHJpdGVTaGVldFBhdGggPSBudWxsO1xuICAgICAgICB0aGlzLl9pbWdQYXRoID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZm9udFBhdGggPSBudWxsO1xuICAgICAgICB0aGlzLl9hdWRpb1Nwcml0ZVBhdGggPSBudWxsO1xuICAgICAgICB0aGlzLl9zb3VuZFBhdGggPSBudWxsO1xuXG4gICAgICAgIHRoaXMuX2F1dG9Mb2FkRGF0YSA9IHt9O1xuICAgICAgICB0aGlzLl9jb21wbGV0ZWRMb2FkcyA9IHt9O1xuICAgICAgICB0aGlzLl9yZXF1aXJlZERhdGEgPSB7fTtcblxuICAgICAgICB0aGlzLl9jdXJyZW50QXNzZXRMaXN0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5faGFzRmlsZXMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fc291bmRzVG9EZWNvZGUgPSBbXTtcbiAgICAgICAgdGhpcy5faXNMb2FkaW5nUXVldWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbWF4UGVyY2VudCA9IDEwMDtcblxuICAgICAgICB0aGlzLl9udW1Tb3VuZHMgPSAwO1xuICAgICAgICB0aGlzLl9zb3VuZHNEZWNvZGVkID0gMDtcblxuICAgICAgICB0aGlzLm9uTG9hZFN0YXJ0ID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICAgICAgdGhpcy5vbkZpbGVTdGFydCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgICAgIHRoaXMub25GaWxlQ29tcGxldGUgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuICAgICAgICB0aGlzLm9uTG9hZENvbXBsZXRlID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICAgICAgdGhpcy5vbkxvYWRDb21wbGV0ZUFuZEF1ZGlvRGVjb2RlZCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG5cbiAgICAgICAgdGhpcy5vbkJhY2tncm91bmRMb2FkU3RhcnQgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuICAgICAgICB0aGlzLm9uQmFja2dyb3VuZEZpbGVTdGFydCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgICAgIHRoaXMub25CYWNrZ3JvdW5kRmlsZUNvbXBsZXRlID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICAgICAgdGhpcy5vbkJhY2tncm91bmRMb2FkQ29tcGxldGUgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuICAgICAgICB0aGlzLm9uQmFja2dyb3VuZExvYWRDb21wbGV0ZUFuZEF1ZGlvRGVjb2RlZCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG5cbiAgICAgICAgdGhpcy5zZXRCYXNlVVJMKCk7XG4gICAgICAgIHRoaXMuc2V0UGF0aHMoKTtcblxuICAgICAgICB0aGlzLnNldFJlc29sdXRpb24oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBwYXJzZXMgYW4gYXNzZXQgbGlzdCBieSBrZXkgKHVzdWFsbHkgZnJvbSBkYXRhL2Fzc2V0cy5qc29uKSBhbmQgc3RvcmVzIHRoZW0gaW50ZXJuYWxseVxuICAgICAqIEBwYXJhbSAge1N0cmluZ30ga2V5IHRoZSBpZCBvZiB0aGUgbGlzdFxuICAgICAqIEBwYXJhbSAge0FycmF5fSAgbGlzdCB0aGUganNvbiBhcnJheSBvZiBhc3NldHNcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3BhcnNlQXNzZXRMaXN0KGtleSwgbGlzdCkge1xuICAgICAgICB0aGlzLl9hdXRvTG9hZERhdGFba2V5XSA9IGxpc3QuYXVkdG9sb2FkO1xuICAgICAgICB0aGlzLl9yZXF1aXJlZERhdGFba2V5XSA9IGxpc3QucmVxdWlyZWQ7XG5cbiAgICAgICAgdGhpcy5fbG9hZERhdGFba2V5XSA9IFtdO1xuICAgICAgICBcbiAgICAgICAgbGlzdC5hc3NldHMuZm9yRWFjaChhc3NldCA9PiB7XG4gICAgICAgICAgICB0aGlzLl9sb2FkRGF0YVtrZXldLnB1c2goYXNzZXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogYWRkcyBhc3NldHMgZnJvbSBhIGxpc3QgdG8gdGhlIGxvYWQgbGlzdFxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gaWQgaWQgb2YgdGhlIGxpc3QgdG8gYWRkXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9sb2FkQXNzZXRzKGlkKSB7XG4gICAgICAgIHZhciBhc3NldHMgPSB0aGlzLl9sb2FkRGF0YVtpZF0sXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBhc3NldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX2xvYWRBc3NldChhc3NldHNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc3RhcnQgdGhlIGJhY2tncm91bmQgbG9hZGluZ1xuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfYmFja2dyb3VuZExvYWRTdGFydCgpIHtcbiAgICAgICAgdGhpcy5vbkJhY2tncm91bmRMb2FkU3RhcnQuZGlzcGF0Y2goKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB3aGVuIGEgZmlsZSBjb21wbGV0ZXMgaW4gYW4gYmFja2dyb3VuZCBsb2FkIHF1ZXVlIC0gZGlzcGF0Y2hlcyB0aGUgb25CYWNrZ3JvdW5kRmlsZUNvbXBsZXRlIHNpZ25hbFxuICAgICAqIEBwYXJhbSAge051bWJlcn0gcHJvZ3Jlc3MgICB0aGUgcGVyY2VudCBwcm9ncmVzc1xuICAgICAqIEBwYXJhbSAge1N0cmluZ30gaWQgICAgICAgICB0aGUgZmlsZSBpZFxuICAgICAqIEBwYXJhbSAge2ludH0gICAgZmlsZUluZGV4ICB0aGUgaW5kZXggb2YgdGhlIGZpbGUgaW4gdGhlIGxpc3RcbiAgICAgKiBAcGFyYW0gIHtpbnR9ICAgIHRvdGFsRmlsZXMgdGhlIHRvdGFsIG51bWJlciBvZiBmaWxlcyBpbiB0aGUgbGlzdFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfYmFja2dyb3VuZEZpbGVDb21wbGV0ZShwcm9ncmVzcywgaWQsIGZpbGVJbmRleCwgdG90YWxGaWxlcykge1xuICAgICAgICB0aGlzLm9uQmFja2dyb3VuZEZpbGVDb21wbGV0ZS5kaXNwYXRjaChwcm9ncmVzcywgaWQsIGZpbGVJbmRleCwgdG90YWxGaWxlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogd2hlbiB0aGUgYmFja2dyb3VuZCBsb2FkIGNvbXBsZXRlcyAtIGRpc3BhdGNoZXMgdGhlIG9uQmFja2dyb3VuZExvYWRDb21wbGV0ZSBzaWduYWwsIHN0YXJ0cyBjaGVja2luZyBmb3IgZGVjb2RlZCBzb3VuZHNcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2JhY2tncm91bmRMb2FkQ29tcGxldGUoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uRmlsZUNvbXBsZXRlLnJlbW92ZSh0aGlzLl9iYWNrZ3JvdW5kRmlsZUNvbXBsZXRlLCB0aGlzKTtcblxuICAgICAgICB0aGlzLm9uQmFja2dyb3VuZExvYWRDb21wbGV0ZS5kaXNwYXRjaCgpO1xuICAgICAgICB0aGlzLl9jaGVja1NvdW5kRGVjb2RpbmcodGhpcy5vbkJhY2tncm91bmRMb2FkQ29tcGxldGVBbmRBdWRpb0RlY29kZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHdoZW4gdGhlIGFzc2V0IGxpc3Qgc3RhcnRzIGxvYWRpbmcsIGRpc3BhdGNoZXMgdGhlIG9uTG9hZFN0YXJ0IHNpZ25hbFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgX2dhbWVMb2FkU3RhcnQoKSB7XG4gICAgICAgIHRoaXMub25Mb2FkU3RhcnQuZGlzcGF0Y2goKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB3aGVuIGEgZmlsZSBzdGFydHMgbG9hZGluZyAtIGRpc3BhdGNoZXMgdGhlIG9uRmlsZVN0YXJ0IHNpZ25hbFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgX2dhbWVGaWxlU3RhcnQoKSB7XG4gICAgICAgIHRoaXMub25GaWxlU3RhcnQuZGlzcGF0Y2goKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB3aGVuIGEgZmlsZSBjb21wbGV0ZXMgaW4gdGhlIGdhbWUgbG9hZCAtIGRpc3BhdGNoZXMgdGhlIG9uRmlsZUNvbXBsZXRlIHNpZ25hbFxuICAgICAqIEBwYXJhbSAge051bWJlcn0gcHJvZ3Jlc3MgICB0aGUgcGVyY2VudCBwcm9ncmVzc1xuICAgICAqIEBwYXJhbSAge1N0cmluZ30gaWQgICAgICAgICB0aGUgZmlsZSBpZFxuICAgICAqIEBwYXJhbSAge2ludH0gICAgZmlsZUluZGV4ICB0aGUgaW5kZXggb2YgdGhlIGZpbGUgaW4gdGhlIGxpc3RcbiAgICAgKiBAcGFyYW0gIHtpbnR9ICAgIHRvdGFsRmlsZXMgdGhlIHRvdGFsIG51bWJlciBvZiBmaWxlcyBpbiB0aGUgbGlzdFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZ2FtZUZpbGVDb21wbGV0ZShwcm9ncmVzcywgaWQsIGZpbGVJbmRleCwgdG90YWxGaWxlcykge1xuICAgICAgICB0aGlzLm9uRmlsZUNvbXBsZXRlLmRpc3BhdGNoKHRoaXMuZ2V0TG9hZFByb2dyZXNzKHByb2dyZXNzKSwgaWQsIGZpbGVJbmRleCwgdG90YWxGaWxlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogd2hlbiB0aGUgYmFja2dyb3VuZCBsb2FkIGNvbXBsZXRlcyAtIGRpc3BhdGNoZXMgdGhlIG9uTG9hZENvbXBsZXRlIHNpZ25hbCwgc3RhcnRzIGNoZWNraW5nIGZvciBkZWNvZGVkIHNvdW5kc1xuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZ2FtZUxvYWRDb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5fY29tcGxldGVkTG9hZHNbdGhpcy5fY3VycmVudEFzc2V0TGlzdF0gPSB0cnVlO1xuICAgICAgICB0aGlzLm9uTG9hZENvbXBsZXRlLmRpc3BhdGNoKCk7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uRmlsZVN0YXJ0LnJlbW92ZSh0aGlzLl9nYW1lRmlsZVN0YXJ0LCB0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQub25GaWxlQ29tcGxldGUucmVtb3ZlKHRoaXMuX2dhbWVGaWxlQ29tcGxldGUsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2NoZWNrU291bmREZWNvZGluZyh0aGlzLm9uTG9hZENvbXBsZXRlQW5kQXVkaW9EZWNvZGVkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjaGVja3MgaWYgYWxsIHRoZSBzb3VuZHMgaW4gdGhlIHF1ZXVlIGFyZSBkZWNvZGVkXG4gICAgICogQHBhcmFtICB7UGhhc2VyLlNpZ25hbH0gZXZlbnRUb0Rpc3BhdGNoIHRoZSBzaWduYWwgdG8gYmUgZGlzcGF0Y2hlZCB3aGVuIGFsbCBzb3VuZHMgYXJlIGRlY29kZWRcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2NoZWNrU291bmREZWNvZGluZyhldmVudFRvRGlzcGF0Y2gpIHtcbiAgICAgICAgdmFyIHNvdW5kLCBpLCBpc0F1ZGlvU3ByaXRlO1xuXG4gICAgICAgIGlmICh0aGlzLl9zb3VuZHNUb0RlY29kZSAmJiB0aGlzLl9zb3VuZHNUb0RlY29kZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5fc291bmRzVG9EZWNvZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpc0F1ZGlvU3ByaXRlID0gdGhpcy5fc291bmRzVG9EZWNvZGVbaV0uaXNBdWRpb1Nwcml0ZTtcbiAgICAgICAgICAgICAgICBzb3VuZCA9IHRoaXMuZ2FtZS5hZGQuc291bmQodGhpcy5fc291bmRzVG9EZWNvZGVbaV0udXJsKTtcbiAgICAgICAgICAgICAgICBzb3VuZC5fX2lzQXVkaW9TcHJpdGUgPSBpc0F1ZGlvU3ByaXRlO1xuICAgICAgICAgICAgICAgIHNvdW5kLmV2ZW50VG9EaXNwYXRjaCA9IGV2ZW50VG9EaXNwYXRjaDtcbiAgICAgICAgICAgICAgICBzb3VuZC5vbkRlY29kZWQuYWRkT25jZSh0aGlzLl9vblNvdW5kRGVjb2RlZCwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBldmVudFRvRGlzcGF0Y2guZGlzcGF0Y2goKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHdoZW4gYSBzb3VuZCBpcyBkZWNvZGVkLCB0aGlzIG1ldGhvZCByZW1vdmVzIGl0IGZyb20gdGhlIF9zb3VuZHNUb0RlY29kZSBhcnJheSwgYW5kIGluY3JlYXNlcyB0aGUgb3ZlcmFsbCBwZXJjZW50YWdlIGxvYWRlZFxuICAgICAqIEBwYXJhbSAge1BoYXNlci5Tb3VuZH0gc291bmQgdGhlIHNvdW5kIGJlaW5nIGRlY29kZWRcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX29uU291bmREZWNvZGVkKHNvdW5kKSB7XG4gICAgICAgIHZhciBzb3VuZEluZGV4ID0gdGhpcy5fc291bmRzVG9EZWNvZGUuaW5kZXhPZihzb3VuZC5rZXkpO1xuICAgICAgICB0aGlzLl9zb3VuZHNUb0RlY29kZS5zcGxpY2Uoc291bmRJbmRleCwgMSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmdhbWUuYXVkaW8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB0aGlzLmdhbWUuYXVkaW8uYWRkQXVkaW8gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAoc291bmQuX19pc0F1ZGlvU3ByaXRlKVxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5hZGQuYXVkaW9TcHJpdGUoc291bmQua2V5KTtcblxuICAgICAgICAgICAgdGhpcy5nYW1lLmF1ZGlvLmFkZEF1ZGlvKHNvdW5kLmtleSwgc291bmQuX19pc0F1ZGlvU3ByaXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NvdW5kc0RlY29kZWQrKztcbiAgICAgICAgdGhpcy5fbWF4UGVyY2VudCA9ICgxMDAgLSAodGhpcy5fbnVtU291bmRzICogdGhpcy5nZXRTb3VuZERlY29kaW5nTW9kaWZpZXIoKSkpICsgKHRoaXMuX3NvdW5kc0RlY29kZWQgKiB0aGlzLmdldFNvdW5kRGVjb2RpbmdNb2RpZmllcigpKTtcbiAgICAgICAgdGhpcy5fZ2FtZUZpbGVDb21wbGV0ZSgxMDApO1xuXG4gICAgICAgIGlmICh0aGlzLl9zb3VuZHNUb0RlY29kZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHNvdW5kLmV2ZW50VG9EaXNwYXRjaC5kaXNwYXRjaCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2hvcnRjdXQgdG8gZ2V0IGFuIGFzc2V0IGtleSB1c2luZyBhIGZpbGUgbmFtZSAoc3RyaXBzIGl0cyBleHRlbnNpb24pXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBmaWxlTmFtZSB0aGUgdXJsIG9mIHRoZSBmaWxlXG4gICAgICogQHJldHVybiB7U3Rpcm5nfSAgICAgICAgICB0aGUgYXNzZXQga2V5ICh0aGUgZmlsZW5hbWUgd2l0aCBpdHMgZXh0ZW5zaW9uIHN0cmlwcGVkKVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2dldEFzc2V0S2V5KGZpbGVOYW1lKSB7XG4gICAgICAgIHZhciBleHQgPSBmaWxlTmFtZS5zcGxpdCgnLicpO1xuICAgICAgICBleHQucG9wKCk7XG5cbiAgICAgICAgcmV0dXJuIGV4dC5qb2luKCcnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBnZXRzIHRoZSBleHRlbnNpb24gb2YgYSBnaXZlbiBmaWxlXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBmaWxlTmFtZVxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgICAgdGhlIGV4dGVuc2lvblxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2dldEV4dGVuc2lvbihmaWxlTmFtZSkge1xuICAgICAgICByZXR1cm4gZmlsZU5hbWUuc3BsaXQoJy4nKS5wb3AoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBkZXRlcm1pbmVzIHdoYXQga2luZCBvZiBhc3NldCB3ZSdyZSBkZWFsaW5nIHdpdGggYW5kIGFkZHMgaXQgdG8gdGhlIGxvYWQgcXVldWVcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGFzc2V0IHRoZSBhc3NldCBvYmplY3Qgd2UncmUgZ29pbmcgdG8gbG9hZFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfbG9hZEFzc2V0KGFzc2V0KSB7XG4gICAgICAgIHZhciB0eXBlID0gYXNzZXQudHlwZSxcbiAgICAgICAgICAgIHVybCA9IGFzc2V0LnVybCB8fCBhc3NldC5rZXk7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5BU1NFVF9MSVNUOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkQXNzZXRzKGFzc2V0LmlkKTtcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLlNPVU5EOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFNvdW5kKHVybCwgYXNzZXQuZXh0ZW5zaW9ucyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5BVURJT19TUFJJVEU6XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQXVkaW9TcHJpdGUodXJsLCBhc3NldC5leHRlbnNpb25zKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLklNQUdFOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEltYWdlKHVybCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5BVExBUzpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRBdGxhcyh1cmwpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuVEVYVDpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRUZXh0KHVybCwgYXNzZXQuZXh0ZW5zaW9ucyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBwYXJzZXMgdGhlIGRhdGEgZnJvbSB0aGUgZXh0ZXJuYWwgYXNzZXRzIGZpbGUgKG5vcm1hbGx5IGRhdGEvYXNzZXRzLmpzb24pXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9wYXJzZURhdGEoKSB7XG4gICAgICAgIHZhciBrZXk7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gdGhpcy5fZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5fcGFyc2VBc3NldExpc3Qoa2V5LCB0aGlzLl9kYXRhW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgc2V0QmFzZVVSTChiYXNlVVJMKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYmFzZVVSTCA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICBiYXNlVVJMID0gJyc7XG5cbiAgICAgICAgLy8gZW5zdXJlIHRyYWlsaW5nIHNsYXNoXG4gICAgICAgIGlmIChiYXNlVVJMICE9PSAnJyAmJiBiYXNlVVJMLmNoYXJBdChiYXNlVVJMLmxlbmd0aCAtIDEpICE9PSAnLycpXG4gICAgICAgICAgICBiYXNlVVJMICs9ICcvJztcblxuICAgICAgICB0aGlzLl9iYXNlVVJMID0gYmFzZVVSTDtcbiAgICAgICAgdGhpcy5zZXRQYXRocygpO1xuICAgIH1cblxuICAgIFxuICAgXG4gICAgc2V0UGF0aHMocGF0aE9iaikge1xuICAgICAgICBpZiAodHlwZW9mIHBhdGhPYmogPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgcGF0aE9iaiA9IHt9O1xuXG4gICAgICAgIC8vIHByZXBlbmQgYmFzZVVSTFxuICAgICAgICB0aGlzLl9hc3NldFBhdGggPSB0aGlzLl9iYXNlVVJMICsgKHBhdGhPYmouYXNzZXRQYXRoIHx8ICdhc3NldHMnKTtcbiAgICAgICAgdGhpcy5fZGF0YVBhdGggPSB0aGlzLl9iYXNlVVJMICsgKHBhdGhPYmouZGF0YVBhdGggfHwgJ2Fzc2V0cy9kYXRhJyk7XG4gICAgICAgIHRoaXMuX3Nwcml0ZVNoZWV0UGF0aCA9IHRoaXMuX2Jhc2VVUkwgKyAocGF0aE9iai5zcHJpdGVzaGVldFBhdGggfHwgJ2Fzc2V0cy9pbWcvc3ByaXRlc2hlZXRzJyk7XG4gICAgICAgIHRoaXMuX2ltZ1BhdGggPSB0aGlzLl9iYXNlVVJMICsgKHBhdGhPYmouaW1nUGF0aCB8fCAnYXNzZXRzL2ltZycpO1xuICAgICAgICB0aGlzLl9mb250UGF0aCA9IHRoaXMuX2Jhc2VVUkwgKyAocGF0aE9iai5mb250UGF0aCB8fCAnYXNzZXRzL2ZvbnRzJyk7XG4gICAgICAgIHRoaXMuX2F1ZGlvU3ByaXRlUGF0aCA9IHRoaXMuX2Jhc2VVUkwgKyAocGF0aE9iai5hdWRpb1Nwcml0ZVBhdGggfHwgJ2Fzc2V0cy9hdWRpby9zcHJpdGUnKTtcbiAgICAgICAgdGhpcy5fc291bmRQYXRoID0gdGhpcy5fYmFzZVVSTCArIChwYXRoT2JqLnNvdW5kUGF0aCB8fCAnYXNzZXRzL2F1ZGlvL3NvdW5kJyk7XG4gICAgfVxuXG4gICAgc2V0UmVzb2x1dGlvbihyZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXMgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgcmVzID0gdGhpcy5nYW1lLnJlc29sdXRpb247XG5cbiAgICAgICAgdGhpcy5fcmVzb2x1dGlvbiA9ICcnO1xuICAgICAgICAvLyBsZWF2ZSB0aGlzIG91dCBmb3Igbm93XG4gICAgICAgIC8qXG4gICAgICAgIGlmIChyZXMgPiAxLjUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdXRpb24gPSBBc3NldE1hbmFnZXIuUkVTT0xVVElPTl8yWDtcbiAgICAgICAgfSovXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2V0cyB0aGUgcGVyY2VudGFnZSBvZiB0aGUgbG9hZCB3ZSBzaG91bGQgYWxsb3QgdG8gZWFjaCBzb3VuZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbbnVtID0gMl0gdGhlIHBlcmNlbnRhZ2VcbiAgICAgKi9cbiAgICBzZXRTb3VuZERlY29kaW5nTW9kaWZpZXIobnVtKSB7XG4gICAgICAgIHRoaXMuX3NvdW5kRGVjb2RpbmdNb2RpZmllciA9IHBhcnNlSW50KG51bSkgfHwgMjtcbiAgICB9XG5cbiAgICBcbiAgICBnZXRTb3VuZERlY29kaW5nTW9kaWZpZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VuZERlY29kaW5nTW9kaWZpZXIgfHwgMjtcbiAgICB9XG5cbiAgICBsb2FkVGV4dCh1cmwpIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuX2dldEFzc2V0S2V5KHVybCk7XG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUubG9hZC50ZXh0KGtleSwgdGhpcy5fZGF0YVBhdGggKyAnLycgKyB1cmwpO1xuICAgIH1cblxuICAgIGxvYWRBdGxhcyh1cmwpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jYWNoZS5jaGVja0ltYWdlS2V5KHVybCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUubG9hZC5hdGxhc0pTT05IYXNoKHVybCwgdGhpcy5fc3ByaXRlU2hlZXRQYXRoICsgJy8nICsgdXJsICsgdGhpcy5fcmVzb2x1dGlvbiArICcucG5nJywgdGhpcy5fc3ByaXRlU2hlZXRQYXRoICsgJy8nICsgdXJsICsgdGhpcy5fcmVzb2x1dGlvbiArICcuanNvbicpO1xuXG4gICAgfVxuXG4gICAgbG9hZEltYWdlKHVybCkge1xuICAgICAgICB2YXIga2V5ID0gdGhpcy5fZ2V0QXNzZXRLZXkodXJsKTtcblxuICAgICAgICBpZiAodGhpcy5nYW1lLmNhY2hlLmNoZWNrSW1hZ2VLZXkoa2V5KSkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIGltYWdlIGtleSBhbHJlYWR5IGV4aXN0cywgZG9uJ3QgcmVsb2FkIHRoZSBpbWFnZSBhbmQgcmV0dXJuIHRoZSBrZXlcbiAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH1cbiAgICAgICAgdXJsID0ga2V5ICsgdGhpcy5fcmVzb2x1dGlvbiArICcuJyArIHRoaXMuX2dldEV4dGVuc2lvbih1cmwpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUubG9hZC5pbWFnZShrZXksIHRoaXMuX2ltZ1BhdGggKyAnLycgKyB1cmwpO1xuICAgIH1cbiAgICBcbiAgICBsb2FkQml0bWFwRm9udCh1cmwpIHtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuYml0bWFwRm9udCh1cmwsIHRoaXMuX2ZvbnRQYXRoICsgJy8nICsgdXJsICsgJy5wbmcnLCB0aGlzLl9mb250UGF0aCArICcvJyArIHVybCArICcuZm50Jyk7XG4gICAgfVxuXG4gICAgXG4gICAgbG9hZEF1ZGlvKHVybCwgZXh0cywgaXNBdWRpb1Nwcml0ZSkge1xuICAgICAgICB2YXIgdHlwZSwgcGF0aDtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5jYWNoZS5jaGVja1NvdW5kS2V5KHVybCkgJiYgdGhpcy5nYW1lLmNhY2hlLmdldFNvdW5kKHVybCkuZGVjb2RlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHR5cGUgc2hvdWxkIGJlICdzb3VuZCcgb3IgJ3Nwcml0ZScgKCdmeCcgYW5kICdtdXNpYycgdG8gYmUgZGVwcmVjYXRlZClcbiAgICAgICAgLy8gZGVmYXVsdCB0byBzb3VuZFxuXG4gICAgICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHR5cGUgPSAnc291bmQnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV4dHMuaW5kZXhPZignLCcpID49IDApIHtcbiAgICAgICAgICAgIGV4dHMgPSBleHRzLnNwbGl0KCcsJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5kZXZpY2UuaU9TICYmIGV4dHMuaW5kZXhPZignbTRhJykgPT09IC0xKSB7XG4gICAgICAgICAgICBleHRzLnVuc2hpZnQoJ200YScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgZXh0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHBhdGggPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXh0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHBhdGgucHVzaCgoaXNBdWRpb1Nwcml0ZSA/IHRoaXMuX2F1ZGlvU3ByaXRlUGF0aCA6IHRoaXMuX3NvdW5kUGF0aCkgKyAnLycgKyB1cmwgKyAnLicgKyBleHRzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhdGggPSAoaXNBdWRpb1Nwcml0ZSA/IHRoaXMuX2F1ZGlvU3ByaXRlUGF0aCA6IHRoaXMuX3NvdW5kUGF0aCkgKyAnLycgKyB0eXBlICsgJy8nICsgdXJsICsgJy4nICsgZXh0cztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0F1ZGlvU3ByaXRlKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5hdWRpb3Nwcml0ZSh1cmwsIHBhdGgsIHRoaXMuX2F1ZGlvU3ByaXRlUGF0aCArICcvJyArIHVybCArICcuanNvbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXVkaW8odXJsLCBwYXRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NvdW5kc1RvRGVjb2RlLnB1c2goe1xuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBpc0F1ZGlvU3ByaXRlOiBpc0F1ZGlvU3ByaXRlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIFxuICAgIGxvYWRTb3VuZCh1cmwsIGV4dHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZEF1ZGlvKHVybCwgZXh0cywgZmFsc2UpO1xuICAgIH1cblxuICAgIGxvYWRBdWRpb1Nwcml0ZSh1cmwsIGV4dHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZEF1ZGlvKHVybCwgZXh0cywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgbG9hZEFzc2V0cyhpZCwgYmFja2dyb3VuZCkge1xuICAgICAgICB0aGlzLl9jdXJyZW50QXNzZXRMaXN0ID0gaWQ7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uRmlsZUNvbXBsZXRlLnJlbW92ZSh0aGlzLl9iYWNrZ3JvdW5kRmlsZUNvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQub25GaWxlQ29tcGxldGUucmVtb3ZlKHRoaXMuX2dhbWVGaWxlQ29tcGxldGUsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuX2hhc0ZpbGVzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3NvdW5kc1RvRGVjb2RlID0gW107XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9kYXRhID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9kYXRhW2lkXSA9PT0gJ3VuZGVmaW5lZCcgfHwgdGhpcy5fZGF0YVtpZF0ubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdubyBwcmVsb2FkIGRhdGEgcmVnaXN0ZXJlZCBmb3IgJywgaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbG9hZEFzc2V0cyhpZCk7XG5cbiAgICAgICAgdGhpcy5faGFzRmlsZXMgPSB0aGlzLmdhbWUubG9hZC5fZmlsZUxpc3QubGVuZ3RoID4gMDtcblxuICAgICAgICBpZiAoYmFja2dyb3VuZCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQub25Mb2FkU3RhcnQuYWRkT25jZSh0aGlzLl9iYWNrZ3JvdW5kTG9hZFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uRmlsZUNvbXBsZXRlLmFkZCh0aGlzLl9iYWNrZ3JvdW5kRmlsZUNvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uTG9hZENvbXBsZXRlLmFkZE9uY2UodGhpcy5fYmFja2dyb3VuZExvYWRDb21wbGV0ZSwgdGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkxvYWRTdGFydC5hZGRPbmNlKHRoaXMuX2dhbWVMb2FkU3RhcnQsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQub25GaWxlU3RhcnQuYWRkKHRoaXMuX2dhbWVGaWxlU3RhcnQsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQub25GaWxlQ29tcGxldGUuYWRkKHRoaXMuX2dhbWVGaWxlQ29tcGxldGUsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQub25Mb2FkQ29tcGxldGUuYWRkT25jZSh0aGlzLl9nYW1lTG9hZENvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5faGFzRmlsZXMpIHtcbiAgICAgICAgICAgIHRoaXMuX2dhbWVMb2FkU3RhcnQoKTtcbiAgICAgICAgICAgIHRoaXMuX2dhbWVGaWxlQ29tcGxldGUoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuX2dhbWVMb2FkQ29tcGxldGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX251bVNvdW5kcyA9IHRoaXMuX3NvdW5kc1RvRGVjb2RlLmxlbmd0aDtcbiAgICAgICAgdGhpcy5fc291bmRzRGVjb2RlZCA9IDA7XG4gICAgICAgIHRoaXMuX21heFBlcmNlbnQgPSAxMDAgLSAodGhpcy5fbnVtU291bmRzICogdGhpcy5nZXRTb3VuZERlY29kaW5nTW9kaWZpZXIoKSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZS5sb2FkLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgbG9hZFF1ZXVlKCkge1xuICAgICAgICBpZiAodGhpcy5faXNMb2FkaW5nUXVldWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fZGF0YSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZygnbm8gcHJlbG9hZCBxdWV1ZSB0byBsb2FkJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFzc2V0cztcblxuICAgICAgICBmb3IgKHZhciBzdGF0ZSBpbiB0aGlzLl9kYXRhKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fYXV0b0xvYWREYXRhW3N0YXRlXSkge1xuXG4gICAgICAgICAgICAgICAgYXNzZXRzID0gdGhpcy5fZGF0YVtzdGF0ZV07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhc3NldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZEFzc2V0KGFzc2V0c1tpXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5faXNMb2FkaW5nUXVldWUgPSB0cnVlO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkxvYWRTdGFydC5hZGRPbmNlKHRoaXMuX2JhY2tncm91bmRMb2FkU3RhcnQsIHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkZpbGVDb21wbGV0ZS5hZGQodGhpcy5fYmFja2dyb3VuZEZpbGVDb21wbGV0ZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uTG9hZENvbXBsZXRlLmFkZE9uY2UodGhpcy5fYmFja2dyb3VuZExvYWRDb21wbGV0ZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgXG4gICAgZ2V0TG9hZFByb2dyZXNzKHByb2dyZXNzKSB7XG4gICAgICAgIHZhciBhZGp1c3RlZFByb2dyZXNzID0gcHJvZ3Jlc3MgKiB0aGlzLl9tYXhQZXJjZW50IC8gMTAwO1xuICAgICAgICByZXR1cm4gYWRqdXN0ZWRQcm9ncmVzcztcbiAgICB9XG5cbiAgICBcbiAgICBhbGxTb3VuZHNEZWNvZGVkKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdzb3VuZHMgdG8gZGVjb2RlJywgdGhpcy5fc291bmRzVG9EZWNvZGUubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kc1RvRGVjb2RlLmxlbmd0aCA9PT0gMDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIHNldHMgdGhlIGRhdGEgZm9yIHRoZSBBc3NldE1hbmFnZXIgdG8gdXNlIGFzIGEgcmVmZXJlbmNlICh1c3VhbGx5IGZyb20gZGF0YS9hc3NldHMuanNvbilcbiAgICAgKiB0cmlnZ2VycyB0aGUgX3BhcnNlRGF0YSBpbnRlcm5hbCBtZXRob2QsIHdoaWNoIHN0b3JlcyB0aGUgYXNzZXQgbGlzdCBmb3IgbGF0ZXIgdXNlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHRleHRGaWxlRnJvbUNhY2hlIHRoZSBpZCBvZiB0aGUgZmlsZSBpbiB0aGUgUGhhc2VyLkNhY2hlXG4gICAgICovXG4gICAgc2V0RGF0YSh0ZXh0RmlsZUZyb21DYWNoZSkge1xuICAgICAgICB0aGlzLl9kYXRhID0gSlNPTi5wYXJzZSh0ZXh0RmlsZUZyb21DYWNoZSk7XG4gICAgICAgIHRoaXMuX2xvYWREYXRhID0ge307XG4gICAgICAgIHRoaXMuX3BhcnNlRGF0YSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNsZWFycyB0aGUgYXNzZXRzIGZyb20gYSBwYXJ0aWN1bGFyIGlkIGluIHRoZSBzdG9yYWdlXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBpZCAgICAgICAgICAgIHRoZSBpZCBvZiB0aGUgYXNzZXQgbGlzdCB0byBjbGVhclxuICAgICAqIEBwYXJhbSAge0Jvb2xlYW59IFtjbGVhckF1ZGlvID0gdHJ1ZV0gICAgd2hldGhlciB0byBjbGVhciBhdWRpbyBmaWxlc1xuICAgICAqIEBwYXJhbSAge0Jvb2xlYW59IFtjbGVhckF0bGFzc2VzID0gdHJ1ZV0gd2hldGhlciB0byBjbGVhciB0ZXh0dXJlIGF0bGFzc2VzXG4gICAgICogQHBhcmFtICB7Qm9vbGVhbn0gW2NsZWFySW1hZ2VzID0gdHJ1ZV0gICB3aGV0aGVyIHRvIGNsZWFyIGltYWdlc1xuICAgICAqIEBwYXJhbSAge0Jvb2xlYW59IFtjbGVhclRleHQgPSB0cnVlXSAgICAgd2hldGhlciB0byBjbGVhciB0ZXh0IGZpbGVzXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBjbGVhckFzc2V0cyhpZCwgY2xlYXJBdWRpbywgY2xlYXJBdGxhc3NlcywgY2xlYXJJbWFnZXMsIGNsZWFyVGV4dCkge1xuICAgICAgICB2YXIgYXNzZXRzID0gdGhpcy5fZGF0YVtpZF07XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2NsZWFyaW5nOiAnLCBpZCk7XG5cbiAgICAgICAgaWYgKCFhc3NldHMgfHwgdHlwZW9mIGFzc2V0cyA9PT0gJ3VuZGVmaW5lZCcgfHwgYXNzZXRzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZygnbm8gYXNzZXRzJywgYXNzZXRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsZWFyQXVkaW8gPSBjbGVhckF1ZGlvICE9PSBmYWxzZTtcbiAgICAgICAgY2xlYXJBdGxhc3NlcyA9IGNsZWFyQXRsYXNzZXMgIT09IGZhbHNlO1xuICAgICAgICBjbGVhckltYWdlcyA9IGNsZWFySW1hZ2VzICE9PSBmYWxzZTtcbiAgICAgICAgY2xlYXJUZXh0ID0gY2xlYXJUZXh0ICE9PSBmYWxzZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFzc2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jbGVhckFzc2V0KGFzc2V0c1tpXSwgY2xlYXJBdWRpbywgY2xlYXJBdGxhc3NlcywgY2xlYXJJbWFnZXMsIGNsZWFyVGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jb21wbGV0ZWRMb2Fkc1tpZF0gPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjbGVhcnMgYW4gYXNzZXQgZnJvbSB0aGUgZ2FtZSdzIG1lbW9yeVxuICAgICAqIEBwYXJhbSAge09iamVjdH0gYXNzZXQgICAgICAgICB0aGUgYXNzZXQgdG8gY2xlYXJcbiAgICAgKiBAcGFyYW0gIHtCb29sZWFufSBbY2xlYXJBdWRpbyA9IHRydWVdICAgIHdoZXRoZXIgdG8gY2xlYXIgYXVkaW8gZmlsZXNcbiAgICAgKiBAcGFyYW0gIHtCb29sZWFufSBbY2xlYXJBdGxhc3NlcyA9IHRydWVdIHdoZXRoZXIgdG8gY2xlYXIgdGV4dHVyZSBhdGxhc3Nlc1xuICAgICAqIEBwYXJhbSAge0Jvb2xlYW59IFtjbGVhckltYWdlcyA9IHRydWVdICAgd2hldGhlciB0byBjbGVhciBpbWFnZXNcbiAgICAgKiBAcGFyYW0gIHtCb29sZWFufSBbY2xlYXJUZXh0ID0gdHJ1ZV0gICAgIHdoZXRoZXIgdG8gY2xlYXIgdGV4dCBmaWxlc1xuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgY2xlYXJBc3NldChhc3NldCwgY2xlYXJBdWRpbywgY2xlYXJBdGxhc3NlcywgY2xlYXJJbWFnZXMsIGNsZWFyVGV4dCkge1xuICAgICAgICB2YXIgdHlwZSA9IGFzc2V0LnR5cGUsXG4gICAgICAgICAgICB1cmwgPSBhc3NldC5rZXksXG4gICAgICAgICAgICByZXF1aXJlZCA9IGFzc2V0LnJlcXVpcmVkO1xuXG4gICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoZSAnICsgdHlwZSArICcgYXNzZXQ6ICcgKyB1cmwgKyAnIGlzIHJlcXVpcmVkIGFuZCB3aWxsIG5vdCBiZSBjbGVhcmVkJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEFzc2V0TWFuYWdlci5BVURJTzpcbiAgICAgICAgICAgICAgICBpZiAoY2xlYXJBdWRpbykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuc291bmQucmVtb3ZlQnlLZXkodXJsKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNhY2hlLnJlbW92ZVNvdW5kKHVybCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuSU1BR0U6XG4gICAgICAgICAgICAgICAgaWYgKGNsZWFySW1hZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jYWNoZS5yZW1vdmVJbWFnZSh1cmwpO1xuICAgICAgICAgICAgICAgICAgICBQSVhJLkJhc2VUZXh0dXJlQ2FjaGVbdXJsXS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBc3NldE1hbmFnZXIuQVRMQVM6XG4gICAgICAgICAgICAgICAgaWYgKGNsZWFyQXRsYXNzZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNhY2hlLnJlbW92ZUltYWdlKHVybCk7XG4gICAgICAgICAgICAgICAgICAgIFBJWEkuQmFzZVRleHR1cmVDYWNoZVt1cmxdLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNhY2hlLnJlbW92ZVhNTCh1cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXNzZXRNYW5hZ2VyLlRFWFQ6XG4gICAgICAgICAgICAgICAgaWYgKGNsZWFyVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICBBc3NldE1hbmFnZXIucmVtb3ZlVGV4dCh1cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNoZWNrcyBpZiB0aGUgYXNzZXRzIGZyb20gdGhpcyBsaXN0IGlkIGFyZSBhbHJlYWR5IGxvYWRlZFxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gIGlkIHRoZSBhc3NldCBsaXN0IGlkIHRvIGNoZWNrXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gICAgd2hldGhlciBpdCBoYXMgYmVlbiBsb2FkZWQgYWxyZWFkeVxuICAgICAqL1xuICAgIGhhc0xvYWRlZEFzc2V0cyhpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29tcGxldGVkTG9hZHNbaWRdID09PSB0cnVlO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAdHlwZSB7U3RyaW5nfVxuICogQHN0YXRpY1xuICovXG5Bc3NldE1hbmFnZXIuU09VTkQgPSAnc291bmQnO1xuXG4vKipcbiAqIEB0eXBlIHtTdHJpbmd9XG4gKiBAc3RhdGljXG4gKi9cbkFzc2V0TWFuYWdlci5BVURJT19TUFJJVEUgPSAnYXVkaW9TcHJpdGUnO1xuXG4vKipcbiAqIEB0eXBlIHtTdHJpbmd9XG4gKiBAc3RhdGljXG4gKi9cbkFzc2V0TWFuYWdlci5JTUFHRSA9ICdpbWFnZSc7XG5cbi8qKlxuICogQHR5cGUge1N0cmluZ31cbiAqIEBzdGF0aWNcbiAqL1xuQXNzZXRNYW5hZ2VyLkFUTEFTID0gJ2F0bGFzJztcblxuLyoqXG4gKiBAdHlwZSB7U3RyaW5nfVxuICogQHN0YXRpY1xuICovXG5Bc3NldE1hbmFnZXIuVEVYVCA9ICd0ZXh0JztcblxuLyoqXG4gKiBAdHlwZSB7U3RyaW5nfVxuICogQHN0YXRpY1xuICovXG5Bc3NldE1hbmFnZXIuQVNTRVRfTElTVCA9ICdhc3NldExpc3QnO1xuXG5Bc3NldE1hbmFnZXIuUkVTT0xVVElPTl8yWCA9IFwiQDJ4XCI7XG5Bc3NldE1hbmFnZXIuUkVTT0xVVElPTl8zWCA9IFwiQDN4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2V0TWFuYWdlcjtcbiIsImNsYXNzIEdhbWUgZXh0ZW5kcyBQaGFzZXIuR2FtZXtcblx0Y29uc3RydWN0b3IoY29uZmlnKXtcblx0XHRzdXBlcihjb25maWcpO1xuXHR9XG5cdFxuXHRib290KCl7XG5cdFx0c3VwZXIuYm9vdCgpO1xuXHRcdHRoaXMuYXNzZXQgPSBuZXcgZGlqb24uY29yZS5Bc3NldE1hbmFnZXIoKTtcblx0XHR0aGlzLnNlcXVlbmNlID0gbmV3IGRpam9uLmNvcmUuU2VxdWVuY2VNYW5hZ2VyKCk7XG5cdFx0XG5cdFx0dGhpcy5fZ2FtZUxheWVyID0gdGhpcy5hZGQuZ3JvdXAoKTtcblx0XHR0aGlzLl91aUxheWVyID0gdGhpcy5hZGQuZ3JvdXAoKTsgIFxuXHR9XG5cdFxuXHRhZGRUb0dhbWUob2JqKXtcblx0XHRyZXR1cm4gdGhpcy5nYW1lTGF5ZXIuYWRkKG9iaik7XG5cdH1cblx0XG5cdGFkZFRvVUkob2JqKXtcblx0XHRyZXR1cm4gdGhpcy51aUxheWVyLmFkZChvYmopO1xuXHR9XG5cdFxuXHRnZXQgZ2FtZUxheWVyKCl7XG5cdFx0cmV0dXJuIHRoaXMuX2dhbWVMYXllcjtcblx0fVxuXHRcblx0Z2V0IHVpTGF5ZXIoKXtcblx0XHRyZXR1cm4gdGhpcy5fdWlMYXllcjtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyIsImNsYXNzIFNlcXVlbmNlTWFuYWdlcntcblx0Y29uc3RydWN0b3IoKXtcblx0XHR0aGlzLmdhbWUgPSBkaWpvbi5tdmMuQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKS5nYW1lO1xuXHRcdHRoaXMuX2luaXQoKTtcblx0fVxuXHRcblx0Ly8gcHJpdmF0ZSBtZXRob2RzXG5cdF9pbml0KCl7XG5cdFx0dGhpcy5fZGVmYXVsdEludGVydmFsID0gMjA7XG5cdH1cblx0XG5cdF9leGVjdXRlTWV0aG9kKHNlcXVlbmNlLCBjb250ZXh0LCBjYWxsYmFjaywgY2FsbGJhY2tDb250ZXh0KSB7XG4gICAgICAgIHZhciBmdW5jID0gc2VxdWVuY2Uuc2hpZnQoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBmdW5jICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29udGV4dCAhPT0gJ3VuZGVmaW5lZCcgJiYgY29udGV4dCkge1xuICAgICAgICAgICAgZnVuYy5jYWxsKGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlcXVlbmNlLmxlbmd0aCA9PT0gMCAmJiBjYWxsYmFjayAmJiBjYWxsYmFja0NvbnRleHQpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoY2FsbGJhY2tDb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cblx0XG5cdC8vIHB1YmxpYyBtZXRob2RzXG5cdHJ1bihzZXF1ZW5jZSwgY29udGV4dCwgaW50ZXJ2YWwsIGNvbXBsZXRlQ2FsbGJhY2ssIGNvbXBsZXRlQ2FsbGJhY2tDb250ZXh0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgY29udGV4dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY29udGV4dCBtdXN0IGJlIHByb3ZpZGVkIGZvciB0aGUgc2VxdWVuY2UgbWV0aG9kcycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBpbnRlcnZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGludGVydmFsID0gdGhpcy5fZGVmYXVsdEludGVydmFsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlcXVlbmNlLmxlbmd0aCA9PT0gMCAmJiB0eXBlb2YgY29tcGxldGVDYWxsYmFjayAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbXBsZXRlQ2FsbGJhY2tDb250ZXh0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29tcGxldGVDYWxsYmFjay5jYWxsKGNvbXBsZXRlQ2FsbGJhY2tDb250ZXh0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnRlcnZhbCA9PT0gMCkge1xuICAgICAgICAgICAgd2hpbGUgKHNlcXVlbmNlLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgdGhpcy5fZXhlY3V0ZU1ldGhvZChzZXF1ZW5jZSwgY29udGV4dCwgdHlwZW9mIGNvbXBsZXRlQ2FsbGJhY2sgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IGNvbXBsZXRlQ2FsbGJhY2ssIHR5cGVvZiBjb21wbGV0ZUNhbGxiYWNrQ29udGV4dCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogY29tcGxldGVDYWxsYmFja0NvbnRleHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLnJlcGVhdChpbnRlcnZhbCwgc2VxdWVuY2UubGVuZ3RoLCB0aGlzLl9leGVjdXRlTWV0aG9kLCB0aGlzLCBzZXF1ZW5jZSwgY29udGV4dCwgdHlwZW9mIGNvbXBsZXRlQ2FsbGJhY2sgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IGNvbXBsZXRlQ2FsbGJhY2ssIHR5cGVvZiBjb21wbGV0ZUNhbGxiYWNrQ29udGV4dCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogY29tcGxldGVDYWxsYmFja0NvbnRleHQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VxdWVuY2VNYW5hZ2VyOyIsImV4cG9ydCB7ZGVmYXVsdCBhcyBBc3NldE1hbmFnZXJ9IGZyb20gXCIuL0Fzc2V0TWFuYWdlclwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIEdhbWV9IGZyb20gXCIuL0dhbWVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBTZXF1ZW5jZU1hbmFnZXJ9IGZyb20gXCIuL1NlcXVlbmNlTWFuYWdlclwiO1xuIiwiaW1wb3J0ICogYXMgZGlqb24gZnJvbSBcIi4vbGliLWV4cG9ydHNcIjtcbndpbmRvdy5kaWpvbiA9IGRpam9uOyIsImltcG9ydCAqIGFzIGNvcmUgZnJvbSBcIi4vY29yZS9jb3JlXCI7XG5pbXBvcnQgKiBhcyBtdmMgZnJvbSBcIi4vbXZjL212Y1wiO1xuaW1wb3J0ICogYXMgc3RhdGUgZnJvbSBcIi4vc3RhdGUvc3RhdGVcIjtcblxuZXhwb3J0e1xuXHRjb3JlLFxuXHRtdmMsXG5cdHN0YXRlXG59O1xuIiwiY2xhc3MgQXBwbGljYXRpb24ge1xuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdGlmKCBBcHBsaWNhdGlvbi5pbnN0YW5jZSApXG5cdFx0XHRcdHRocm93IEVycm9yKCBBcHBsaWNhdGlvbi5TSU5HTEVUT05fTVNHICk7XG5cblx0XHRBcHBsaWNhdGlvbi5pbnN0YW5jZSA9IHRoaXM7XG5cdFx0dGhpcy5nYW1lID0gbnVsbDtcblx0XHRcblx0XHR0aGlzLmluaXRpYWxpemVBcHBsaWNhdGlvbigpO1xuXHR9XG5cdFxuXHRpbml0aWFsaXplQXBwbGljYXRpb24oKXtcblx0XHR0aGlzLmdhbWUgPSBuZXcgZGlqb24uY29yZS5HYW1lKHtcblx0XHRcdHdpZHRoOjgwMCwgXG5cdFx0XHRoZWlnaHQ6NjAwLCBcblx0XHRcdHBhcmVudDonZ2FtZS1jb250YWluZXInLCBcblx0XHRcdHJlbmRlcmVyOlBoYXNlci5BVVRPLCBcblx0XHRcdHRyYW5zcGFyZW50OmZhbHNlXG5cdFx0fSk7XG5cdH1cbn1cblxuQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbigpe1xuXHRpZiggIUFwcGxpY2F0aW9uLmluc3RhbmNlIClcblx0XHRcdEFwcGxpY2F0aW9uLmluc3RhbmNlID0gbmV3IEFwcGxpY2F0aW9uKCk7XG5cdHJldHVybiBBcHBsaWNhdGlvbi5pbnN0YW5jZTtcbn07XG5cbi8vIHN0YXRpYyBjb25zdGFudHNcbkFwcGxpY2F0aW9uLmluc3RhbmNlID0gbnVsbDtcbkFwcGxpY2F0aW9uLlNJTkdMRVRPTl9NU0cgPSAnQXBwbGljYXRpb24gc2luZ2xldG9uIGFscmVhZHkgY29uc3RydWN0ZWQhJztcblxuZXhwb3J0IGRlZmF1bHQgQXBwbGljYXRpb247IiwiZXhwb3J0IHtkZWZhdWx0IGFzIEFwcGxpY2F0aW9ufSBmcm9tIFwiLi9BcHBsaWNhdGlvblwiO1xuIiwiY2xhc3MgQmFzZVN0YXRlIGV4dGVuZHMgUGhhc2VyLlN0YXRle1xuICAgIC8vIFBoYXNlci5TdGF0ZSBvdmVycmlkZXNcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9hdWRpbyA9IG51bGw7XG4gICAgfVxuICAgIFxuICAgIGluaXQoKXt9XG4gICAgXG4gICAgcHJlbG9hZCgpe1xuICAgICAgICBpZiAodGhpcy5wcmVsb2FkSUQpXG4gICAgICAgICAgICB0aGlzLmdhbWUuYXNzZXQubG9hZEFzc2V0cyh0aGlzLnByZWxvYWRJRCk7XG4gICAgfVxuICAgIFxuXHRjcmVhdGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5nYW1lLmFzc2V0LmFsbFNvdW5kc0RlY29kZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmFzc2V0Lm9uTG9hZENvbXBsZXRlQW5kQXVkaW9EZWNvZGVkLmFkZE9uY2UodGhpcy5jcmVhdGUsIHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9ICAgICAgICBcbiAgICAgICAgdGhpcy5idWlsZEludGVyZmFjZSgpO1xuICAgICAgICB0aGlzLmFmdGVyQnVpbGRJbnRlcmZhY2UoKTtcbiAgICAgICAgdGhpcy5zdGFydEJ1aWxkKCk7XG4gICAgfVxuICAgIFxuICAgIHNodXRkb3duKCkge1xuICAgICAgICB0aGlzLl9yZW1vdmVBdWRpbygpO1xuICAgIH1cbiAgICBcbiAgICAvLyBwdWJsaWMgbWV0aG9kc1xuICAgIGxpc3RCdWlsZFNlcXVlbmNlKCl7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgXG4gICAgYnVpbGRJbnRlcmZhY2UoKXt9XG4gICAgXG4gICAgYWZ0ZXJCdWlsZEludGVyZmFjZSgpe31cbiAgICBcbiAgICBzdGFydEJ1aWxkKCkge1xuICAgICAgICB0aGlzLmdhbWUuc2VxdWVuY2UucnVuKHRoaXMubGlzdEJ1aWxkU2VxdWVuY2UoKSwgdGhpcywgdGhpcy5idWlsZEludGVydmFsLCB0aGlzLnByZUFmdGVyQnVpbGQsIHRoaXMpO1xuICAgIH1cbiAgICBcbiAgICBwcmVBZnRlckJ1aWxkKCl7XG4gICAgICAgIGlmICh0aGlzLmdhbWUuZGVidWdnZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5kZWJ1Z2dlci5zZWxlY3RlZE9iamVjdCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmdhbWUuZGVidWdnZXIucmVmcmVzaCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmdhbWUudHJhbnNpdGlvbiA9PT0gJ3VuZGVmaW5lZCcgfHwgIXRoaXMuZ2FtZS50cmFuc2l0aW9uLnRyYW5zaXRpb25PdXQoKSl7XG4gICAgICAgICAgICB0aGlzLmFmdGVyQnVpbGQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS50cmFuc2l0aW9uLm9uVHJhbnNpdGlvbk91dENvbXBsZXRlLmFkZE9uY2UodGhpcy5hZnRlckJ1aWxkLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS50cmFuc2l0aW9uLnRyYW5zaXRpb25PdXQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBhZnRlckJ1aWxkKCl7fVxuICAgIFxuICAgIGFkZEF1ZGlvKHRyYWNrKXtcbiAgICAgICAgaWYgKCF0aGlzLl9hdWRpbyl7XG4gICAgICAgICAgICB0aGlzLl9hdWRpbyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2F1ZGlvLnB1c2godHJhY2spO1xuICAgICAgICByZXR1cm4gdHJhY2s7XG4gICAgfVxuICAgIFxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuICAgIF9yZW1vdmVBdWRpbygpIHtcbiAgICAgICAgdmFyIHNvdW5kO1xuICAgICAgICBpZiAoIXRoaXMuX2F1ZGlvKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgIHdoaWxlICh0aGlzLl9hdWRpby5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzb3VuZCA9IHRoaXMuX2F1ZGlvLnBvcCgpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzb3VuZCAhPT0gJ3VuZGVmaW5lZCcgJiYgc291bmQgIT0gbnVsbCAmJiB0eXBlb2Ygc291bmQuc3RvcCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNvdW5kLm9uU3RvcCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc291bmQub25TdG9wLnJlbW92ZUFsbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzb3VuZC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gZ2V0dGVyIC8gc2V0dGVyXG4gICAgZ2V0IGdhbWUoKXtcbiAgICAgICAgcmV0dXJuIGRpam9uLm12Yy5BcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWU7XG4gICAgfVxuICAgIFxuICAgIGdldCBwcmVsb2FkSUQoKXtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIFxuICAgIGdldCBidWlsZEludGVydmFsKCl7XG4gICAgICAgIHJldHVybiAxMDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VTdGF0ZTsiLCJleHBvcnQge2RlZmF1bHQgYXMgQmFzZVN0YXRlfSBmcm9tIFwiLi9CYXNlU3RhdGVcIjtcbiJdfQ==
