/// <reference path="../mvc/Application" />
/// <reference path="./Game" />
/// <reference path="../interfaces/INotifier" />
/// <reference path="../utils/Notifications" />

module dijon.core{
    export interface IAsset{
        url:string;
        type:string;
        extensions?:string;
        required?:boolean;
        id?:string;
        key?:string;    
    }
    
    export interface IAssetList{
        autoload:boolean;
        required:boolean;
        assets:Array<IAsset>;
    }
    export interface ISound{
        isAudioSprite?:boolean;
        url?:string;
        key?:string;
        __isAudioSprite?:boolean;
        eventToDispatch?:Phaser.Signal;
        decoded?:boolean;
    }
    
    export interface IPathConfig{
        assetPath:string;
        dataPath:string;
        spritesheetPath:string;
        imgPath:string;
        fontPath:string;
        audioSpritePath:string;
        soundPath:string;
    }
    
    /**
    * Manager for loading and clearing assets
    */
    export class AssetManager implements dijon.interfaces.INotifier{
        protected app:dijon.mvc.Application;
        
        // private variables
        private _data = {};
        private _baseURL:string = '';
        private _pathObj:IPathConfig|any = {};
        private _assetPath = null;
        private _dataPath = null;
        private _spriteSheetPath = null;
        private _imgPath = null;
        private _fontPath = null;
        private _audioSpritePath = null;
        private _soundPath = null;
        private _soundDecodingModifier:number = 2;
        private _resolution:string = null;

        private _loadData = {};
        private _autoLoadData = {};
        private _completedLoads = {};
        private _requiredData = {};

        private _currentAssetList:string = null;
        private _hasFiles:boolean = false;
        private _soundsToDecode:Array<ISound> = [];
        private _isLoadingQueue:boolean = false;
        private _maxPercent:number = 100;

        private _numSounds:number = 0;
        private _soundsDecoded:number = 0;
        
        // public variables
        public game:dijon.core.Game;
        
        public onLoadStart = new Phaser.Signal();
        public onFileStart = new Phaser.Signal();
        public onFileComplete = new Phaser.Signal();
        public onLoadComplete = new Phaser.Signal();
        public onLoadCompleteAndAudioDecoded = new Phaser.Signal();

        public onBackgroundLoadStart = new Phaser.Signal();
        public onBackgroundFileStart = new Phaser.Signal();
        public onBackgroundFileComplete = new Phaser.Signal();
        public onBackgroundLoadComplete = new Phaser.Signal();
        public onBackgroundLoadCompleteAndAudioDecoded = new Phaser.Signal();
        
        // static constants
        /**
        * @type {String}
        * @static
        */
        public static AUDIO:string = 'audio';
        
        /**
        * @type {String}
        * @static
        */
        public static SOUND:string = 'sound';
        
        /**
        * @type {String}
        * @static
        */
        public static AUDIO_SPRITE:string = 'audioSprite';
        
        /**
        * @type {String}
        * @static
        */
        public static IMAGE:string = 'image';
        
        /**
        * @type {String}
        * @static
        */
        public static ATLAS:string = 'atlas';
        
        /**
        * @type {String}
        * @static
        */
        public static TEXT:string = 'text';
        
        /**
        * @type {String}
        * @static
        */
        public static ASSET_LIST:string = 'assetList';
        
        public static RESOLUTION_2X:string = "@2x";
        public static RESOLUTION_3X:string = "@3x";
        
        constructor(){
            this._init(); 
        }
        // private methods
        /**
        * adds internal variables and signals
        * @return {void}
        * @private
        */
        private _init() {
            this.app = dijon.mvc.Application.getInstance();
            this.game = this.app.game;
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
        private _parseAssetList(key:string, list:IAssetList) {
            this._autoLoadData[key] = list.autoload;
            this._requiredData[key] = list.required;
    
            this._loadData[key] = [];
            
            list.assets.forEach(asset => {
                this._loadData[key].push(asset);
                });
        }
    
        /**
        * adds assets from a list to the load list
        * @param  {String} id id of the list to add
        * @return {void}
        * @private
        */
        private _loadAssets(id:string) {
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
        private _backgroundLoadStart() {
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
        private _backgroundFileComplete(progress:number, id:string, fileIndex:number, totalFiles:number) {
            this.onBackgroundFileComplete.dispatch(progress, id, fileIndex, totalFiles);
        }
    
        /**
        * when the background load completes - dispatches the onBackgroundLoadComplete signal, starts checking for decoded sounds
        * @return {void}
        * @private
        */
        private _backgroundLoadComplete() {
            this.game.load.onFileComplete.remove(this._backgroundFileComplete, this);
    
            this.onBackgroundLoadComplete.dispatch();
            this._checkSoundDecoding(this.onBackgroundLoadCompleteAndAudioDecoded);
        }
    
        /**
        * when the asset list starts loading, dispatches the onLoadStart signal
        * @return {void}
        */
        private _gameLoadStart() {
            this.onLoadStart.dispatch();
        }
    
        /**
        * when a file starts loading - dispatches the onFileStart signal
        * @return {void}
        */
        private _gameFileStart() {
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
        private  _gameFileComplete(progress:number, id?:string, fileIndex?:number, totalFiles?:number) {
            this.onFileComplete.dispatch(this.getLoadProgress(progress), id, fileIndex, totalFiles);
        }
    
        /**
        * when the background load completes - dispatches the onLoadComplete signal, starts checking for decoded sounds
        * @return {void}
        * @private
        */
        private _gameLoadComplete() {
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
        private _checkSoundDecoding(eventToDispatch:Phaser.Signal) {
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
        private _onSoundDecoded(sound:ISound) {
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
        }
    
        /**
        * shortcut to get an asset key using a file name (strips its extension)
        * @param  {String} fileName the url of the file
        * @return {Stirng}          the asset key (the filename with its extension stripped)
        * @private
        */
        private _getAssetKey(fileName:string) {
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
        private _getExtension(fileName:string) {
            return fileName.split('.').pop();
        }
    
        /**
        * determines what kind of asset we're dealing with and adds it to the load queue
        * @param  {Object} asset the asset object we're going to load
        * @return {void}
        * @private
        */
        private _loadAsset(asset:IAsset) {
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
                    this.loadText(url);
                    break;
            }
        }
    
        /**
        * parses the data from the external assets file (normally data/assets.json)
        * @return {void}
        * @private
        */
        _parseData() {
            var key;
    
            for (key in this._data) {
                this._parseAssetList(key, this._data[key]);
            }
        }
        
        // public methods
        setBaseURL(baseURL:string = "") {
            // ensure trailing slash
            if (baseURL && baseURL !== '' && baseURL.charAt(baseURL.length - 1) !== '/')
                baseURL += '/';
    
            this._baseURL = baseURL;
            this.setPaths();
        }
        
        setPaths(pathObj:IPathConfig= null) {
            this._pathObj = pathObj || {};
            
            this._assetPath = this._baseURL + (this._pathObj.assetPath || 'assets');
            this._dataPath = this._baseURL + (this._pathObj.dataPath || 'assets/data');
            this._spriteSheetPath = this._baseURL + (this._pathObj.spritesheetPath || 'assets/img/spritesheets');
            this._imgPath = this._baseURL + (this._pathObj.imgPath || 'assets/img');
            this._fontPath = this._baseURL + (this._pathObj.fontPath || 'assets/fonts');
            this._audioSpritePath = this._baseURL + (this._pathObj.audioSpritePath || 'assets/audio/sprite');
            this._soundPath = this._baseURL + (this._pathObj.soundPath || 'assets/audio/sound');
        }
    
        setResolution(res?:number) {
            if (typeof res === 'undefined')
                res = this.game.resolution;
    
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
        setSoundDecodingModifier(num:number=2) {
            this._soundDecodingModifier = num;
        }
    
        
        getSoundDecodingModifier() {
            return this._soundDecodingModifier;
        }
    
        loadText(url:string) {
            var key = this._getAssetKey(url);
            return this.game.load.text(key, this._dataPath + '/' + url);
        }
    
        loadAtlas(url:string):Phaser.Loader | string{
            if (this.game.cache.checkImageKey(url)) {
                return url;
            }
    
            return this.game.load.atlasJSONHash(url, this._spriteSheetPath + '/' + url + this._resolution + '.png', this._spriteSheetPath + '/' + url + this._resolution + '.json');
        }
    
        loadImage(url:string):Phaser.Loader | string{
            const key:string = this._getAssetKey(url);
    
            if (this.game.cache.checkImageKey(key)) {
                // if the image key already exists, don't reload the image and return the key
                return key;
            }
            url = key + this._resolution + '.' + this._getExtension(url);
    
            return this.game.load.image(key, this._imgPath + '/' + url);
        }
        
        loadBitmapFont(url:string) {
            this.game.load.bitmapFont(url, this._fontPath + '/' + url + '.png', this._fontPath + '/' + url + '.fnt');
        }
    
        
        loadAudio(url:string, exts:any, isAudioSprite:boolean) {
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
        
        loadSound(url:string, exts:any) {
            return this.loadAudio(url, exts, false);
        }
    
        loadAudioSprite(url:string, exts:any) {
            return this.loadAudio(url, exts, true);
        }
    
        loadAssets(id:string, background:boolean = false) {
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
            this._maxPercent = 100 - (this._numSounds * this.getSoundDecodingModifier());
    
            return this.game.load.start();
        }
    
        loadQueue() {
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
        }
    
        
        getLoadProgress(progress:number) {
            var adjustedProgress = progress * this._maxPercent / 100;
            return adjustedProgress;
        }
    
        
        allSoundsDecoded() {
            //console.log('sounds to decode', this._soundsToDecode.length);
            return this._soundsToDecode.length === 0;
        }
    
    
        /**
        * sets the data for the AssetManager to use as a reference (usually from data/assets.json)
        * triggers the _parseData internal method, which stores the asset list for later use
        * @param {String} textFileFromCache the id of the file in the Phaser.Cache
        */
        setData(textFileFromCache:string) {
            this._data = JSON.parse(textFileFromCache);
            this._loadData = {};
            this._parseData();
            
            this.sendNotification(dijon.utils.Notifications.ASSET_MANAGER_DATA_SET, this._data);
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
        clearAssets(id:string, clearAudio:boolean = true, clearAtlasses:boolean = true, clearImages:boolean = true, clearText:boolean = true) {
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
            
            this.sendNotification(dijon.utils.Notifications.ASSET_MANAGER_ASSETS_CLEARED, id);
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
        clearAsset(asset:IAsset, clearAudio:boolean = true, clearAtlasses:boolean = true, clearImages:boolean = true, clearText:boolean = true) {
            var type = asset.type,
                url = asset.url,
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
                        this.game.cache.removeText(url);
                    }
                    break;
            }
        }
    
        /**
        * checks if the assets from this list id are already loaded
        * @param  {String}  id the asset list id to check
        * @return {Boolean}    whether it has been loaded already
        */
        hasLoadedAssets(id: string) {
            return this._completedLoads[id] === true;
        }
        
        sendNotification(notificationName:string, notificationBody?:any){
            return this.app.sendNotification(notificationName, notificationBody);
        }
    }
}

