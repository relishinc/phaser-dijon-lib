var dijon;
(function (dijon) {
    var core;
    (function (core) {
        var AnalyticsManager = (function () {
            function AnalyticsManager(category) {
                this.category = category;
            }
            AnalyticsManager.prototype.trackEvent = function (action, label, value) {
                if (action === void 0) { action = null; }
                if (label === void 0) { label = null; }
                if (value === void 0) { value = null; }
                if (!this.active) {
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
            Object.defineProperty(AnalyticsManager.prototype, "active", {
                // getter / setter
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
        })();
        core.AnalyticsManager = AnalyticsManager;
        var AnalyticsException = (function () {
            function AnalyticsException(message) {
                this.message = message;
                this.name = 'AnalyticsException';
            }
            return AnalyticsException;
        })();
        core.AnalyticsException = AnalyticsException;
    })(core = dijon.core || (dijon.core = {}));
})(dijon || (dijon = {}));
var dijon;
(function (dijon) {
    var core;
    (function (core) {
        /**
        * Manager for loading and clearing assets
        */
        var AssetManager = (function () {
            function AssetManager() {
                // private variables
                this._data = {};
                this._baseURL = '';
                this._assetPath = null;
                this._dataPath = null;
                this._spriteSheetPath = null;
                this._imgPath = null;
                this._fontPath = null;
                this._audioSpritePath = null;
                this._soundPath = null;
                this._soundDecodingModifier = 2;
                this._resolution = null;
                this._loadData = {};
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
                this._init();
            }
            // private methods
            /**
            * adds internal variables and signals
            * @return {void}
            * @private
            */
            AssetManager.prototype._init = function () {
                this.game = dijon.mvc.Application.getInstance().game;
                this.setBaseURL(null);
                this.setPaths(null);
                this.setResolution(null);
            };
            /**
            * parses an asset list by key (usually from data/assets.json) and stores them internally
            * @param  {String} key the id of the list
            * @param  {Array}  list the json array of assets
            * @return {void}
            * @private
            */
            AssetManager.prototype._parseAssetList = function (key, list) {
                var _this = this;
                this._autoLoadData[key] = list.autoload;
                this._requiredData[key] = list.required;
                this._loadData[key] = [];
                list.assets.forEach(function (asset) {
                    _this._loadData[key].push(asset);
                });
            };
            /**
            * adds assets from a list to the load list
            * @param  {String} id id of the list to add
            * @return {void}
            * @private
            */
            AssetManager.prototype._loadAssets = function (id) {
                var assets = this._loadData[id], i;
                for (i = 0; i < assets.length; i++) {
                    this._loadAsset(assets[i]);
                }
            };
            /**
            * start the background loading
            * @return {void}
            * @private
            */
            AssetManager.prototype._backgroundLoadStart = function () {
                this.onBackgroundLoadStart.dispatch();
            };
            /**
            * when a file completes in an background load queue - dispatches the onBackgroundFileComplete signal
            * @param  {Number} progress   the percent progress
            * @param  {String} id         the file id
            * @param  {int}    fileIndex  the index of the file in the list
            * @param  {int}    totalFiles the total number of files in the list
            * @return {void}
            * @private
            */
            AssetManager.prototype._backgroundFileComplete = function (progress, id, fileIndex, totalFiles) {
                this.onBackgroundFileComplete.dispatch(progress, id, fileIndex, totalFiles);
            };
            /**
            * when the background load completes - dispatches the onBackgroundLoadComplete signal, starts checking for decoded sounds
            * @return {void}
            * @private
            */
            AssetManager.prototype._backgroundLoadComplete = function () {
                this.game.load.onFileComplete.remove(this._backgroundFileComplete, this);
                this.onBackgroundLoadComplete.dispatch();
                this._checkSoundDecoding(this.onBackgroundLoadCompleteAndAudioDecoded);
            };
            /**
            * when the asset list starts loading, dispatches the onLoadStart signal
            * @return {void}
            */
            AssetManager.prototype._gameLoadStart = function () {
                this.onLoadStart.dispatch();
            };
            /**
            * when a file starts loading - dispatches the onFileStart signal
            * @return {void}
            */
            AssetManager.prototype._gameFileStart = function () {
                this.onFileStart.dispatch();
            };
            /**
            * when a file completes in the game load - dispatches the onFileComplete signal
            * @param  {Number} progress   the percent progress
            * @param  {String} id         the file id
            * @param  {int}    fileIndex  the index of the file in the list
            * @param  {int}    totalFiles the total number of files in the list
            * @return {void}
            * @private
            */
            AssetManager.prototype._gameFileComplete = function (progress, id, fileIndex, totalFiles) {
                this.onFileComplete.dispatch(this.getLoadProgress(progress), id, fileIndex, totalFiles);
            };
            /**
            * when the background load completes - dispatches the onLoadComplete signal, starts checking for decoded sounds
            * @return {void}
            * @private
            */
            AssetManager.prototype._gameLoadComplete = function () {
                this._completedLoads[this._currentAssetList] = true;
                this.onLoadComplete.dispatch();
                this.game.load.onFileStart.remove(this._gameFileStart, this);
                this.game.load.onFileComplete.remove(this._gameFileComplete, this);
                this._checkSoundDecoding(this.onLoadCompleteAndAudioDecoded);
            };
            /**
            * checks if all the sounds in the queue are decoded
            * @param  {Phaser.Signal} eventToDispatch the signal to be dispatched when all sounds are decoded
            * @return {void}
            * @private
            */
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
            /**
            * when a sound is decoded, this method removes it from the _soundsToDecode array, and increases the overall percentage loaded
            * @param  {Phaser.Sound} sound the sound being decoded
            * @return {void}
            * @private
            */
            AssetManager.prototype._onSoundDecoded = function (sound) {
                var soundIndex = this._soundsToDecode.indexOf(sound.key);
                this._soundsToDecode.splice(soundIndex, 1);
                if (typeof this.game.audio !== 'undefined' && typeof this.game.audio.addAudio !== 'undefined') {
                    if (sound.__isAudioSprite)
                        this.game.add.audioSprite(sound.key);
                    this.game.audio.addAudio(sound.key, sound.__isAudioSprite);
                }
                this._soundsDecoded++;
                this._maxPercent = (100 - (this._numSounds * this.getSoundDecodingModifier())) + (this._soundsDecoded * this.getSoundDecodingModifier());
                this._gameFileComplete(100);
                if (this._soundsToDecode.length === 0) {
                    sound.eventToDispatch.dispatch();
                }
            };
            /**
            * shortcut to get an asset key using a file name (strips its extension)
            * @param  {String} fileName the url of the file
            * @return {Stirng}          the asset key (the filename with its extension stripped)
            * @private
            */
            AssetManager.prototype._getAssetKey = function (fileName) {
                var ext = fileName.split('.');
                ext.pop();
                return ext.join('');
            };
            /**
            * gets the extension of a given file
            * @param  {String} fileName
            * @return {String}          the extension
            * @private
            */
            AssetManager.prototype._getExtension = function (fileName) {
                return fileName.split('.').pop();
            };
            /**
            * determines what kind of asset we're dealing with and adds it to the load queue
            * @param  {Object} asset the asset object we're going to load
            * @return {void}
            * @private
            */
            AssetManager.prototype._loadAsset = function (asset) {
                var type = asset.type, url = asset.url || asset.key;
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
                        this.loadText(url);
                        break;
                }
            };
            /**
            * parses the data from the external assets file (normally data/assets.json)
            * @return {void}
            * @private
            */
            AssetManager.prototype._parseData = function () {
                var key;
                for (key in this._data) {
                    this._parseAssetList(key, this._data[key]);
                }
            };
            // public methods
            AssetManager.prototype.setBaseURL = function (baseURL) {
                if (baseURL === void 0) { baseURL = ""; }
                // ensure trailing slash
                if (baseURL && baseURL !== '' && baseURL.charAt(baseURL.length - 1) !== '/')
                    baseURL += '/';
                this._baseURL = baseURL;
                this.setPaths(null);
            };
            AssetManager.prototype.setPaths = function (pathObj) {
                if (pathObj === void 0) { pathObj = null; }
                // prepend baseURL
                if (!pathObj)
                    return;
                this._assetPath = this._baseURL + (pathObj.assetPath || 'assets');
                this._dataPath = this._baseURL + (pathObj.dataPath || 'assets/data');
                this._spriteSheetPath = this._baseURL + (pathObj.spritesheetPath || 'assets/img/spritesheets');
                this._imgPath = this._baseURL + (pathObj.imgPath || 'assets/img');
                this._fontPath = this._baseURL + (pathObj.fontPath || 'assets/fonts');
                this._audioSpritePath = this._baseURL + (pathObj.audioSpritePath || 'assets/audio/sprite');
                this._soundPath = this._baseURL + (pathObj.soundPath || 'assets/audio/sound');
            };
            AssetManager.prototype.setResolution = function (res) {
                if (typeof res === 'undefined')
                    res = this.game.resolution;
                this._resolution = '';
                // leave this out for now
                /*
                if (res > 1.5) {
                    this._resolution = AssetManager.RESOLUTION_2X;
                }*/
            };
            /**
            * sets the percentage of the load we should allot to each sound
            * @param {Number} [num = 2] the percentage
            */
            AssetManager.prototype.setSoundDecodingModifier = function (num) {
                this._soundDecodingModifier = num || 2;
            };
            AssetManager.prototype.getSoundDecodingModifier = function () {
                return this._soundDecodingModifier || 2;
            };
            AssetManager.prototype.loadText = function (url) {
                var key = this._getAssetKey(url);
                return this.game.load.text(key, this._dataPath + '/' + url);
            };
            AssetManager.prototype.loadAtlas = function (url) {
                if (this.game.cache.checkImageKey(url)) {
                    return url;
                }
                return this.game.load.atlasJSONHash(url, this._spriteSheetPath + '/' + url + this._resolution + '.png', this._spriteSheetPath + '/' + url + this._resolution + '.json');
            };
            AssetManager.prototype.loadImage = function (url) {
                var key = this._getAssetKey(url);
                if (this.game.cache.checkImageKey(key)) {
                    // if the image key already exists, don't reload the image and return the key
                    return key;
                }
                url = key + this._resolution + '.' + this._getExtension(url);
                return this.game.load.image(key, this._imgPath + '/' + url);
            };
            AssetManager.prototype.loadBitmapFont = function (url) {
                this.game.load.bitmapFont(url, this._fontPath + '/' + url + '.png', this._fontPath + '/' + url + '.fnt');
            };
            AssetManager.prototype.loadAudio = function (url, exts, isAudioSprite) {
                var type, path;
                if (this.game.cache.checkSoundKey(url) && this.game.cache.getSound(url).isDecoded) {
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
                }
                else {
                    path = (isAudioSprite ? this._audioSpritePath : this._soundPath) + '/' + type + '/' + url + '.' + exts;
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
                this._hasFiles = this.game.load.isLoading;
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
                this._maxPercent = 100 - (this._numSounds * this.getSoundDecodingModifier());
                return this.game.load.start();
            };
            AssetManager.prototype.loadQueue = function () {
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
            AssetManager.prototype.getLoadProgress = function (progress) {
                var adjustedProgress = progress * this._maxPercent / 100;
                return adjustedProgress;
            };
            AssetManager.prototype.allSoundsDecoded = function () {
                //console.log('sounds to decode', this._soundsToDecode.length);
                return this._soundsToDecode.length === 0;
            };
            /**
            * sets the data for the AssetManager to use as a reference (usually from data/assets.json)
            * triggers the _parseData internal method, which stores the asset list for later use
            * @param {String} textFileFromCache the id of the file in the Phaser.Cache
            */
            AssetManager.prototype.setData = function (textFileFromCache) {
                this._data = JSON.parse(textFileFromCache);
                this._loadData = {};
                this._parseData();
            };
            /**
            * clears the assets from a particular id in the storage
            * @param  {String} id            the id of the asset list to clear
            * @param  {Boolean} [clearAudio = true]    whether to clear audio files
            * @param  {Boolean} [clearAtlasses = true] whether to clear texture atlasses
            * @param  {Boolean} [clearImages = true]   whether to clear images
            * @param  {Boolean} [clearText = true]     whether to clear text files
            * @return {void}
            */
            AssetManager.prototype.clearAssets = function (id, clearAudio, clearAtlasses, clearImages, clearText) {
                if (clearAudio === void 0) { clearAudio = true; }
                if (clearAtlasses === void 0) { clearAtlasses = true; }
                if (clearImages === void 0) { clearImages = true; }
                if (clearText === void 0) { clearText = true; }
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
            };
            /**
            * clears an asset from the game's memory
            * @param  {Object} asset         the asset to clear
            * @param  {Boolean} [clearAudio = true]    whether to clear audio files
            * @param  {Boolean} [clearAtlasses = true] whether to clear texture atlasses
            * @param  {Boolean} [clearImages = true]   whether to clear images
            * @param  {Boolean} [clearText = true]     whether to clear text files
            * @return {void}
            */
            AssetManager.prototype.clearAsset = function (asset, clearAudio, clearAtlasses, clearImages, clearText) {
                if (clearAudio === void 0) { clearAudio = true; }
                if (clearAtlasses === void 0) { clearAtlasses = true; }
                if (clearImages === void 0) { clearImages = true; }
                if (clearText === void 0) { clearText = true; }
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
                }
            };
            /**
            * checks if the assets from this list id are already loaded
            * @param  {String}  id the asset list id to check
            * @return {Boolean}    whether it has been loaded already
            */
            AssetManager.prototype.hasLoadedAssets = function (id) {
                return this._completedLoads[id] === true;
            };
            // static constants
            /**
            * @type {String}
            * @static
            */
            AssetManager.AUDIO = 'audio';
            /**
            * @type {String}
            * @static
            */
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
            return AssetManager;
        })();
        core.AssetManager = AssetManager;
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
            // private methods 
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
            // public methods
            /**
            * adds audio to the lookup (called by AssetManager when any sound is loaded, usually not necessary to call from a game)
            * @param {String} key         the Phaser.Cache key of the audio asset
            * @param {Boolean} isAudioSprite whether the asset is an audio sprite
            */
            AudioManager.prototype.addAudio = function (key, isAudioSprite) {
                if (isAudioSprite === void 0) { isAudioSprite = false; }
                if (isAudioSprite === true) {
                    return this.addAudioSprite(key);
                }
                return this.addSound(key);
            };
            /**
            * adds a single sound to the lookup (usually not necessary to call from a game)
            * @param {String} key the Phaser.Cache key of the asset
            * @return {Phaser.Sound} the added sound
            */
            AudioManager.prototype.addSound = function (key) {
                if (typeof this._sounds[key] !== 'undefined') {
                    return this._sounds[key];
                }
                this._sounds[key] = this.game.add.audio(key);
                this._sounds[key].allowMultiple = true;
                return this._sounds[key];
            };
            /**
            * adds an audio sprite to the lookup (usually not necessary to call from a game)
            * @param {String} key the Phaser.Cache key of the asset
            * @return {Phaser.AudioSprite} the added audio sprite
            */
            AudioManager.prototype.addAudioSprite = function (key) {
                if (typeof this._sprites[key] !== 'undefined') {
                    return this._sprites[key];
                }
                this._sprites[key] = this._addAudio(key, true);
                return this._sprites[key];
            };
            /**
            * a global method to play a sound - will check audio sprite markers for the provided key first, then single sounds
            * @param  {String} marker       the sound marker (or key) to check for
            * @param  {Number} volume       the volume at which to play the sound
            * @param  {Boolean} loop         whether the sound should loop (won't work if it's a sprite marker, and "loop" hasn't been set in the audio sprite descriptor file)
            * @param  {Boolean} forceRestart whether to restart the sound if it's already playing
            * @return {Phaser.Sound}              the playing sound
            */
            AudioManager.prototype.playAudio = function (marker, volume, loop, forceRestart) {
                if (loop === void 0) { loop = false; }
                if (forceRestart === void 0) { forceRestart = true; }
                if (this._getKeyFromMarkerName(marker)) {
                    return this.playSpriteMarker(marker, volume, loop, forceRestart);
                }
                return this.playSound(marker, volume, loop, forceRestart);
            };
            /**
            * calls Dijon.AudioManager.playAudio on a delay
            * @param  {int} delay        number of milliseconds to delay the sound
            * @param  {String} marker       the sound marker (or key) to check for
            * @param  {Number} volume       the volume at which to play the sound
            * @param  {Boolean} loop         whether the sound should loop (won't work if it's a sprite marker, and "loop" hasn't been set in the audio sprite descriptor file)
            * @param  {Boolean} forceRestart whether to restart the sound if it's already playing
            */
            AudioManager.prototype.playDelayedAudio = function (delay, marker, volume, loop, forceRestart) {
                if (loop === void 0) { loop = false; }
                if (forceRestart === void 0) { forceRestart = true; }
                if (this._getKeyFromMarkerName(marker)) {
                    return this.playDelayedSpriteMarker(delay, marker, volume, loop, forceRestart);
                }
                return this.playDelayedSound(delay, marker, volume, loop, forceRestart);
            };
            /**
            * plays a single sound
            * @param  {String} key          the Phaser.Cache key for the sound
            * @param  {Number} volume       the volume at which to play the sound
            * @param  {Boolean} loop         whether the sound should loop (won't work if it's a sprite marker, and "loop" hasn't been set in the audio sprite descriptor file)
            * @param  {Boolean} forceRestart whether to restart the sound if it's already playing
            * @return {Phaser.Sound} the playing sound
            */
            AudioManager.prototype.playSound = function (key, volume, loop, forceRestart) {
                if (loop === void 0) { loop = false; }
                if (forceRestart === void 0) { forceRestart = true; }
                if (typeof this._sounds[key] === 'undefined') {
                    return false;
                }
                volume = typeof volume === 'undefined' ? this._defaultVolume : volume;
                return this._sounds[key].play("", 0, volume, loop, forceRestart);
            };
            /**
            * plays a marker from an audio sprite
            * @param  {String} marker       the marker to check for (will check all audio sprites)
            * @param  {Number} volume       the volume at which to play the sound
            * @param  {Boolean} loop         whether the sound should loop (won't work if it's a sprite marker, and "loop" hasn't been set in the audio sprite descriptor file)
            * @param  {Boolean} forceRestart whether to restart the sound if it's already playing
            * @return {Phaser.Sound} the playing sound
            */
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
            /**
            * stops any playing audio file with the given marker
            * checks audio sprites first, then single sounds
            * @return {Phaser.Sound} the sound that was stopped
            */
            AudioManager.prototype.stopAudio = function (marker) {
                if (this._getKeyFromMarkerName(marker)) {
                    return this.stopSpriteMarker(marker);
                }
                return this.stopSound(marker);
            };
            /**
            * stops a single sound from playing
            * @return {Phaser.Sound} the sound that was stopped
            */
            AudioManager.prototype.stopSound = function (key) {
                if (typeof this._sounds === 'undefined' || typeof this._sounds[key] === 'undefined') {
                    return;
                }
                return this._sounds[key].stop();
            };
            /**
            * stops a single sound from playing
            * @return {Phaser.Sound} the sound that was stopped
            */
            AudioManager.prototype.stopSpriteMarker = function (marker) {
                var key = this._getKeyFromMarkerName(marker);
                if (!key) {
                    console.log('marker not found', marker);
                    return;
                }
                this._stopSpriteMarker(key, marker);
            };
            /**
            * stops removes a sound from Dijon.AudioManager's lookup
            * @param  {String} key the key of the sound to be removed
            * @return {void}
            */
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
            /**
            * stops removes an audio sprite from Dijon.AudioManager's lookup
            * @param  {String} key the key of the sound to be removed
            * @return {void}
            */
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
                // getter / setter
                /**
                * Sets the default volume for all sounds (used in the case where a volume is not supplied to the playAudio, playSound, or playSpriteMarker methods)
                */
                set: function (vol) {
                    this._defaultVolume = vol;
                },
                enumerable: true,
                configurable: true
            });
            return AudioManager;
        })();
        core.AudioManager = AudioManager;
    })(core = dijon.core || (dijon.core = {}));
})(dijon || (dijon = {}));
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var dijon;
(function (dijon) {
    var core;
    (function (core) {
        var Game = (function (_super) {
            __extends(Game, _super);
            function Game(config) {
                _super.call(this, config);
                this.debugger = null;
            }
            // Phaser.Game overrides
            Game.prototype.boot = function () {
                _super.prototype.boot.call(this);
                this.asset = new dijon.core.AssetManager();
                this.sequence = new dijon.core.SequenceManager();
                this.transition = new dijon.core.TransitionManager();
                this.storage = new dijon.core.StorageManager();
                this.audio = new dijon.core.AudioManager();
                this.analytics = new dijon.core.AnalyticsManager();
                this.gameLayer = this.add.group();
                this.uiLayer = this.add.group();
            };
            // public methods
            Game.prototype.addToGame = function (obj) {
                return this.gameLayer.add(obj);
            };
            Game.prototype.addToUI = function (obj) {
                return this.uiLayer.add(obj);
            };
            return Game;
        })(Phaser.Game);
        core.Game = Game;
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
            // private methods
            SequenceManager.prototype._executeMethod = function (sequence, context, callback, callbackContext) {
                var func = sequence.shift();
                if (typeof func !== 'undefined' && typeof context !== 'undefined' && context) {
                    func.call(context);
                }
                if (sequence.length === 0 && callback && callbackContext) {
                    callback.call(callbackContext);
                }
            };
            // public methods
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
        })();
        core.SequenceManager = SequenceManager;
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
            // private methods
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
            // public methods
            /**
            * gets stored data with the specified key
            * @param  {String}  key    the LocalStorage key where the data is stored
            * @param  {Boolean} isJSON is the stored data just a string or is it stringified json (assumes it's JSON)
            * @return {String | Object} the retrieved data - if it's a JSON string, we parse the data and return the JSON object
            */
            StorageManager.prototype.getData = function (key, isJSON) {
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
            /**
            * saves data to localstorage
            * @param  {String} key   the LocalStorage key the data will be saved to
            * @param  {String|Object} value the data to save (if it's an object, will be stringified before saving)
            * @return {void}
            */
            StorageManager.prototype.saveData = function (key, value) {
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
            /**
            * clear stored data
            * @param  {String} key the LocalStorage key to clear
            * @return {void}
            */
            StorageManager.prototype.clearData = function (key) {
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
        })();
        core.StorageManager = StorageManager;
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
                if (typeof this._transition.preloadHandler.loadStart === 'function')
                    this.game.asset.onLoadStart.addOnce(this._transition.preloadHandler.loadStart, this._transition.preloadHandler);
                if (typeof this._transition.preloadHandler.loadProgress === 'function') {
                    this.game.asset.onFileComplete.add(this._transition.preloadHandler.loadProgress, this._transition.preloadHandler);
                }
                this.game.asset.onLoadCompleteAndAudioDecoded.addOnce(this._preloadComplete, this);
                this.onTransitionInComplete.dispatch();
                this.game.state.start(this._toState);
            };
            TransitionManager.prototype._transitionOutComplete = function () {
                this._transition = null;
                this.onTransitionOutComplete.dispatch();
            };
            TransitionManager.prototype._preloadComplete = function () {
                this.game.asset.onFileComplete.remove(this._transition.preloadHandler.loadProgress, this._transition.preloadHandler);
                if (typeof this._transition.preloadHandler.loadComplete === 'function')
                    this._transition.preloadHandler.loadComplete();
            };
            TransitionManager.prototype._clearTransition = function () {
                if (!this._transition)
                    return false;
                this._transition.outHandler.transitionInComplete.remove(this._transitionOutComplete, this);
                this._transition.inHandler.transitionOutComplete.remove(this._transitionInComplete, this);
                this.game.asset.onLoadCompleteAndAudioDecoded.remove(this._preloadComplete, this);
                this.game.asset.onLoadStart.remove(this._transition.preloadHandler.loadStart, this._transition.preloadHandler);
                this.game.asset.onFileComplete.remove(this._transition.preloadHandler.loadProgress, this._transition.preloadHandler);
                this._transition = null;
            };
            // public methods
            /**
            * Adds a transition handler for a specific from / to state combination
            * pass the from / to states as the first 2 arguments, and additional arguments for which instance will handle the transition
            * if only 3 args are passed, the instance will handle the in / out transition, and the preloading
            * E.G.
            * this.game.transition.add(this.game.constants.STATE_PRELOAD, this.game.constants.STATE_MENU, this.game.preloader);
            *
            * if 5 arguments are passed, a different instance can be used for in transition, preloading, and out transition
            * E.G.
            * this.game.transition.add(this.game.constants.STATE_PRELOAD, this.game.constants.STATE_MENU, this.game.transitionOutHandler, this.game.preloadHandler, this.game.transitionInHandler);
            *
            * transition handlers are expected to behave as follows:
            * an out transition handler should have a transitionIn method and dispatch a transitionComplete signal when done
            * an in transition handler should have a transitionOut method and dispatch a transitionCOmplete signal when done
            * a preload handler should have loadStart, loadProgress, and loadComplete methods
            * the loadProgress method may accept a up to 4 parameters for progress (percent of files loaded), id, fileIndex, and totalFiles
            *
            * @param {string} fromState - the state being transitioned from
            * @param {string} toState - the state being transitioned to
            * @param {outHandler} outHandler - the instance that will handle the transition from the fromState
            * @param {preloadHandler} preloadHandler - the instance that will handle preloading the toState
            * @param {inHandler} inHandler - the instance that will handle the in transition when the toState is completely loaded
            * @return {Object} transition reference that was added to _transitions
            */
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
            /**
            * Adds an exception to the Dijon.TransitionManager in the case where 'all' has been used
            * @param {string} state - the state to add the exception for
            */
            TransitionManager.prototype.addException = function (state) {
                this._exceptions[state] = true;
            };
            /**
            * Removes a transition handler for a specific from / to state combination
            */
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
            /**
            * Start the transition to a new state
            * @param {string} state - the state to transition to
            */
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
                    this.game.state.start(this._toState);
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
            /**
            * After the state is fully loaded and 'built' a call to this is made
            * this is currently made from BaseState in the 'afterBuild' method
            */
            TransitionManager.prototype.transitionOut = function () {
                if (!this._transition)
                    return false;
                if (this._exceptions[this.game.state.current])
                    return false;
                if (typeof this._transition.inHandler.transitionOut === 'function') {
                    this._transition.inHandler.transitionOutComplete.addOnce(this._transitionOutComplete, this);
                    this._transition.inHandler.transitionOut();
                }
                return true;
            };
            return TransitionManager;
        })();
        core.TransitionManager = TransitionManager;
    })(core = dijon.core || (dijon.core = {}));
})(dijon || (dijon = {}));
var dijon;
(function (dijon) {
    var display;
    (function (display) {
        var Group = (function (_super) {
            __extends(Group, _super);
            function Group() {
                _super.apply(this, arguments);
            }
            return Group;
        })(Phaser.Group);
        display.Group = Group;
    })(display = dijon.display || (dijon.display = {}));
})(dijon || (dijon = {}));
var dijon;
(function (dijon) {
    var display;
    (function (display) {
        var Sprite = (function (_super) {
            __extends(Sprite, _super);
            function Sprite() {
                _super.apply(this, arguments);
            }
            return Sprite;
        })(Phaser.Sprite);
        display.Sprite = Sprite;
    })(display = dijon.display || (dijon.display = {}));
})(dijon || (dijon = {}));
var dijon;
(function (dijon) {
    var display;
    (function (display) {
        var Text = (function (_super) {
            __extends(Text, _super);
            function Text() {
                _super.apply(this, arguments);
            }
            return Text;
        })(Phaser.Text);
        display.Text = Text;
    })(display = dijon.display || (dijon.display = {}));
})(dijon || (dijon = {}));
var dijon;
(function (dijon) {
    var mvc;
    (function (mvc) {
        var Application = (function () {
            function Application() {
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
            Application.getInstance = function () {
                if (!Application.instance)
                    Application.instance = new Application();
                return Application.instance;
            };
            // static constants
            Application.instance = null;
            Application.SINGLETON_MSG = 'Application singleton already constructed!';
            return Application;
        })();
        mvc.Application = Application;
    })(mvc = dijon.mvc || (dijon.mvc = {}));
})(dijon || (dijon = {}));
var dijon;
(function (dijon) {
    var mvc;
    (function (mvc) {
        var Mediator = (function () {
            function Mediator() {
            }
            return Mediator;
        })();
        mvc.Mediator = Mediator;
    })(mvc = dijon.mvc || (dijon.mvc = {}));
})(dijon || (dijon = {}));
var dijon;
(function (dijon) {
    var mvc;
    (function (mvc) {
        var Models = (function () {
            function Models() {
            }
            return Models;
        })();
        mvc.Models = Models;
    })(mvc = dijon.mvc || (dijon.mvc = {}));
})(dijon || (dijon = {}));
var dijon;
(function (dijon) {
    var mvc;
    (function (mvc) {
        var Notification = (function (_super) {
            __extends(Notification, _super);
            function Notification() {
                _super.apply(this, arguments);
            }
            return Notification;
        })(Phaser.Signal);
        mvc.Notification = Notification;
    })(mvc = dijon.mvc || (dijon.mvc = {}));
})(dijon || (dijon = {}));
var dijon;
(function (dijon) {
    var mvc;
    (function (mvc) {
        var Notifier = (function () {
            function Notifier() {
            }
            return Notifier;
        })();
        mvc.Notifier = Notifier;
    })(mvc = dijon.mvc || (dijon.mvc = {}));
})(dijon || (dijon = {}));
/// <reference path="../mvc/Application" />
var dijon;
(function (dijon) {
    var state;
    (function (state) {
        var State = (function (_super) {
            __extends(State, _super);
            function State() {
                _super.call(this);
                this._audio = [];
                this.game = dijon.mvc.Application.getInstance().game;
            }
            State.prototype.init = function () { };
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
            };
            // public methods
            State.prototype.listBuildSequence = function () {
                return [];
            };
            State.prototype.buildInterface = function () { };
            State.prototype.afterBuildInterface = function () { };
            State.prototype.startBuild = function () {
                this.game.sequence.run(this.listBuildSequence(), this, this.buildInterval, this.preAfterBuild, this);
            };
            State.prototype.preAfterBuild = function () {
                if (this.game.debugger) {
                    this.game.debugger.selectedObject = null;
                    this.game.debugger.refresh();
                }
                if (typeof this.game.transition === 'undefined' || !this.game.transition.transitionOut()) {
                    this.afterBuild();
                }
                else {
                    this.game.transition.onTransitionOutComplete.addOnce(this.afterBuild, this);
                    this.game.transition.transitionOut();
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
            Object.defineProperty(State.prototype, "preloadID", {
                // getter / setter
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
            return State;
        })(Phaser.State);
        state.State = State;
    })(state = dijon.state || (dijon.state = {}));
})(dijon || (dijon = {}));
//# sourceMappingURL=dijon.js.map