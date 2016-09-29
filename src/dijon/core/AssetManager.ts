/**
 * Wraps Phaser.Loader
*/

import {Application} from '../application';
import {Game} from '../core';
import {INotifier, IPathConfig, IAsset, IAssetList, ISound, ITiledmapAssets} from '../interfaces';
import {Notifications} from '../utils';
import {Spine} from '../display';
/**
 * Wraps Phaser.Loader
*/
export class AssetManager implements INotifier {
    protected app: Application;

    // private variables
    private _data = {};
    private _baseURL: string = '';
    private _pathObj: IPathConfig | any = {};
    private _assetPath: string = null;
    private _dataPath: string = null;
    private _spriteSheetPath: string = null;
    private _imgPath: string = null;
    private _videoPath: string = null;
    private _spinePath: string = null;
    private _fontPath: string = null;
    private _bitmapFontPath: string = null;
    private _physicsPath: string = null;
    private _audioSpritePath: string = null;
    private _soundPath: string = null;
    private _soundDecodingModifier: number = 2;
    private _res: number = 1;
    private _resolution: string = null;

    private _loadData = {};
    private _autoLoadData = {};
    private _completedLoads = {};
    private _requiredData = {};

    private _currentAssetList: string = null;
    private _hasFiles: boolean = false;
    private _soundsToDecode: Array<ISound> = [];
    private _isLoadingQueue: boolean = false;
    private _fileCompleteProgress: number = 0;
    private _maxPercent: number = 100;

    private _numSounds: number = 0;
    private _soundsDecoded: number = 0;

    private _cacheBustVersion: string = '';

    // public variables
    public game: Game;

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
    // asset types
    public static AUDIO: string = 'audio';
    public static SOUND: string = 'sound';
    public static AUDIO_SPRITE: string = 'audioSprite';
    public static IMAGE: string = 'image';
    public static VIDEO: string = 'video';
    public static ATLAS: string = 'atlas';
    public static TEXT: string = 'text';
    public static JSON: string = 'json';
    public static TILEMAP: string = 'tilemap';
    public static TILEDMAP: string = 'tiledmap';
    public static TILEDMAP_TILESET: string = 'tileset';
    public static TILEDMAP_LAYER: string = 'layer';
    public static PHYSICS: string = 'physics';
    public static SPINE: string = 'spine';
    public static BITMAP_FONT: string = 'bitmapFont';
    public static ASSET_LIST: string = 'assetList';

    // resolutions
    public static RESOLUTION_2X: string = "@2x";
    public static RESOLUTION_3X: string = "@3x";

    constructor() {
        this._init();
    }
    // private methods
    /**
    * adds internal variables and signals
    * @return {void}
    * @private
    */
    private _init() {
        this.app = Application.getInstance();
        this.game = this.app.game;
        this.baseURL = '';
        this.paths = null;
        this.resolution = this.game.resolution;
        this._soundsToDecode = [];
    }

    /**
    * parses an asset list by key (usually from data/assets.json) and stores them internally
    * @param  {String} key the id of the list
    * @param  {Array}  list the json array of assets
    * @return {void}
    * @private
    */
    private _parseAssetList(key: string, list: IAssetList) {
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
    private _loadAssets(id: string) {
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
    private _backgroundFileComplete(progress: number, id: string, fileIndex: number, totalFiles: number) {
        if (this.game.cache.checkKey(Phaser.Cache.IMAGE, id)) {
            this._setBaseTextureResolution(this.game.cache.getBaseTexture(id));
        }
        this._fileCompleteProgress = progress;
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
    private _gameFileComplete(progress: number, id?: string, fileIndex?: number, totalFiles?: number) {

        if (this.game.cache.checkKey(Phaser.Cache.IMAGE, id)) {
            this._setBaseTextureResolution(this.game.cache.getBaseTexture(id));

        }
        // else if (this.game.cache.checkKey(Phaser.Cache.BITMAPFONT, id)){
        //     this._setBaseTextureResolution(this.game.cache.getBaseTexture(id, Phaser.Cache.BITMAPFONT));
        //     console.log('id', id, this.game.cache.getBaseTexture(id, Phaser.Cache.BITMAPFONT).resolution);
        // }
        this._fileCompleteProgress = progress;
        this.onFileComplete.dispatch(this.getLoadProgress(), id, fileIndex, totalFiles);
    }

    private _setBaseTextureResolution(texture: PIXI.BaseTexture): void {
        if (texture && texture.source.src.indexOf('@' + this.resolution + 'x') >= 0) {
            texture.resolution = this.resolution;
        }
    };

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
    private _checkSoundDecoding(eventToDispatch: Phaser.Signal) {
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
    private _onSoundDecoded(sound: ISound) {
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
    }

    /**
    * shortcut to get an asset key using a file name (strips its extension)
    * @param  {String} fileName the url of the file
    * @return {Stirng}          the asset key (the filename with its extension stripped)
    * @private
    */
    private _getAssetKey(fileName: string): string {
        if (fileName.indexOf('.') < 0)
            return fileName;
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
    private _getExtension(fileName: string): string {
        return fileName.split('.').pop();
    }

    /**
    * gets the extension of a given file
    * @param  {String} fileName
    * @return {String}          the extension
    * @private
    */
    private _getResolution(res: any): string {
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
    }

    /**
    * determines what kind of asset we're dealing with and adds it to the load queue
    * @param  {Object} asset the asset object we're going to load
    * @return {void}
    * @private
    */
    private _loadAsset(asset: IAsset) {
        var type = asset.type,
            url = asset.url || asset.key;

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
                this.loadTiledmap(url, (<ITiledmapAssets>asset).assets);
                break;
            case AssetManager.PHYSICS:
                this.loadPhysics(url);
                break;
            case AssetManager.SPINE:
                this.loadSpine(url, this._getResolution(asset.resolution))
                break;
            case AssetManager.BITMAP_FONT:
                this.loadBitmapFont(url, this._getResolution(asset.resolution))
                break;
        }
    }

    /**
    * parses the data from the external assets file (normally data/assets.json)
    * @return {void}
    * @private
    */
    private _parseData() {
        var key;

        for (key in this._data) {
            this._parseAssetList(key, this._data[key]);
        }
    }

    private _getCacheBustedUrl(url: string): string {
        if (this._cacheBustVersion === undefined || this._cacheBustVersion === '') {
            return url;
        }

        return url + '?v=' + this._cacheBustVersion;
    }
    // public methods
    public loadText(url: string) {
        var key = this._getAssetKey(url);
        return this.game.load.text(key, this._getCacheBustedUrl(this._dataPath + '/' + url));
    }

    public loadJSON(key: string) {
        key = this._getAssetKey(key);
        return this.game.load.json(key, this._getCacheBustedUrl(this._dataPath + '/' + key + '.json'));
    }

    public loadTilemap(key: string) {
        key = this._getAssetKey(key);
        return this.game.load.tilemap(key, this._getCacheBustedUrl(this._dataPath + '/tilemap/' + key + '.json'), null, Phaser.Tilemap.TILED_JSON);
    }

    public loadTiledmap(key: string, assets: IAsset[]) {
        if (Phaser.Plugin['Tiled'] === undefined) {
            console.log('tiledmap requires the phaser-tiled plugin from https://github.com/englercj/phaser-tiled');
            return null;
        }
        const cacheKey: any = Phaser.Plugin['Tiled'].utils.cacheKey;

        this.game.load['tiledmap'](cacheKey(key, 'tiledmap'), this._getCacheBustedUrl(this._dataPath + '/tilemap/' + key + '.json'), null, Phaser.Tilemap.TILED_JSON);

        assets.forEach(asset => {
            switch (asset.type) {
                case AssetManager.TILEDMAP_TILESET:
                case AssetManager.TILEDMAP_LAYER:
                    this.loadTiledmapImage(key, asset.type, asset);
                    break;
            }

        });
    }

    public loadTiledmapImage(key: string, tilesetImageType: string, asset: IAsset) {
        const cacheKey: any = Phaser.Plugin['Tiled'].utils.cacheKey;

        let resolution: string = '';
        const newKey: string = this._getAssetKey(asset.url);
        const cKey: string = cacheKey(key, 'tileset', newKey);

        if (typeof asset.resolution !== 'string') {
            resolution = this._getResolution(asset.resolution);
        }
        const url = this._getAssetKey(newKey + resolution + '.' + this._getExtension(asset.url));
        console.log(asset.url, cKey);
        this.game.load.image(cKey, this._getCacheBustedUrl(this._spriteSheetPath + '/' + url + '.png'));
    }

    public loadPhysics(key: string) {
        key = this._getAssetKey(key);
        return this.game.load.physics(key, this._getCacheBustedUrl(this._physicsPath + '/' + key + '.json'));
    }

    public loadAtlas(url: string, resolution?: any): Phaser.Loader | string {
        if (typeof resolution !== 'string') {
            resolution = this._getResolution(resolution);
        }
        if (this.game.cache.checkImageKey(url)) {
            return url;
        }
        return this.game.load.atlasJSONHash(url, this._getCacheBustedUrl(this._spriteSheetPath + '/' + url + resolution + '.png'), this._getCacheBustedUrl(this._spriteSheetPath + '/' + url + resolution + '.json'));
    }

    public loadImage(url: string, resolution?: any): Phaser.Loader | string {
        if (typeof resolution !== 'string') {
            resolution = this._getResolution(resolution);
        }
        const key: string = this._getAssetKey(url);

        if (this.game.cache.checkImageKey(key)) {
            // if the image key already exists, don't reload the image and return the key
            return key;
        }
        url = key + resolution + '.' + this._getExtension(url);

        return this.game.load.image(key, this._getCacheBustedUrl(this._imgPath + '/' + url));
    }

    public loadVideo(url: string, resolution?: any): Phaser.Loader | string {
        if (typeof resolution !== 'string') {
            resolution = this._getResolution(resolution);
        }
        const key: string = this._getAssetKey(url);

        if (this.game.cache.checkVideoKey(key)) {
            // if the image key already exists, don't reload the image and return the key
            return key;
        }
        url = key + resolution + '.' + this._getExtension(url);
        return this.game.load.video(key, this._getCacheBustedUrl(this._videoPath + '/' + url));
    }

    public loadSpine(url: string, resolution?: any): string | void {
        if (typeof resolution !== 'string') {
            resolution = this._getResolution(resolution);
        }
        if (resolution === '') {
            resolution = '@1x';
        }
        const key: string = this._getAssetKey(url);

        if (this.game.cache.checkImageKey(key)) {
            // if the image key already exists, don't reload the image and return the key
            return key;
        }
        url = key + resolution + '.png';
        const jsonUrl = key + '.json';
        const atlasUrl = key + resolution + '.atlas';
        this.game.load.json(key + '.json', this._getCacheBustedUrl(this._spinePath + '/' + jsonUrl));
        this.game.load.text(key + '.atlas', this._getCacheBustedUrl(this._spinePath + '/' + atlasUrl));
        this.game.load.image(key + '.png', this._getCacheBustedUrl(this._spinePath + '/' + url));

        if (Spine.AUTO_MESH === true && key.indexOf(Spine.NON_MESH_SUFFIX) === -1) {
            this.loadSpine(key + Spine.NON_MESH_SUFFIX);
        }
    }

    public loadBitmapFont(url: string, resolution?: any) {
        if (typeof resolution !== 'string') {
            resolution = this._getResolution(resolution);
        }
        this.game.load.bitmapFont(url, this._getCacheBustedUrl(this._bitmapFontPath + '/' + url + resolution + '.png'), this._getCacheBustedUrl(this._bitmapFontPath + '/' + url + resolution + '.json'));
    }

    public loadAudio(url: string, exts: any, isAudioSprite: boolean) {
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
                path.push(this._getCacheBustedUrl((isAudioSprite ? this._audioSpritePath : this._soundPath) + '/' + url + '.' + exts[i]));
            }
        } else {
            path = this._getCacheBustedUrl((isAudioSprite ? this._audioSpritePath : this._soundPath) + '/' + type + '/' + url + '.' + exts);
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

    public loadSound(url: string, exts: any) {
        return this.loadAudio(url, exts, false);
    }

    public loadAudioSprite(url: string, exts: any) {
        return this.loadAudio(url, exts, true);
    }

    public loadAssets(id: string, background: boolean = false) {
        this._currentAssetList = id;
        this.game.load.onFileComplete.remove(this._backgroundFileComplete, this);
        this.game.load.onFileComplete.remove(this._gameFileComplete, this);

        this._hasFiles = false;
        
        if (this._data === undefined) {
            return;
        }

        if (this._data[id] === undefined || this._data[id].assets === undefined || this._data[id].assets.length < 1) {
            return console.log('no preload data registered for ', id);
        }

        this._loadAssets(id);
        this._hasFiles = this.game.load.totalQueuedFiles() > 0;

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
        this._maxPercent = 100 - (this._numSounds * this.soundDecodingModifier);

        if (background) {
            this.game.load.start();
        }
    }

    public loadQueue() {
        if (this._isLoadingQueue) {
            return;
        }

        if (typeof this._data === 'undefined') {
            return console.log('no preload queue to load');
        }

        let assets: any,
            state: string,
            i: number;

        for (state in this._data) {
            if (this._autoLoadData[state]) {

                assets = this._data[state].assets;
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
    }


    public getLoadProgress() {
        const adjustedProgress = this._fileCompleteProgress * this._maxPercent / 100;
        return adjustedProgress;
    }


    public allSoundsDecoded() {
        //console.log('sounds to decode', this._soundsToDecode.length);
        return this._soundsToDecode.length === 0;
    }


    /**
    * sets the data for the AssetManager to use as a reference (usually from data/assets.json)
    * triggers the _parseData internal method, which stores the asset list for later use
    * @param {String} textFileFromCache the id of the file in the Phaser.Cache
    */
    public setData(data: Object) {
        this._data = data;
        this._loadData = {};
        this._parseData();

        this.sendNotification(Notifications.ASSET_MANAGER_DATA_SET, this._data);
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
    public clearAssets(id: string, clearAudio: boolean = true, clearAtlasses: boolean = true, clearImages: boolean = true, clearText: boolean = true, clearJSON: boolean = true) {
        var data = this._data[id];

        console.log('clearing: ', id, data);

        if (!data || typeof data === 'undefined' || !data.assets || data.assets.length < 1) {
            return console.log('no assets', data);
        }
        var assets = data.assets;

        for (var i = 0; i < assets.length; i++) {
            console.log('clearing type', assets[i].type);
            if (assets[i].type === AssetManager.ASSET_LIST) {
                this.clearAssets(assets[i].id, clearAudio, clearAtlasses, clearImages, clearText, clearJSON);
                continue;
            }
            this.clearAsset(assets[i], clearAudio, clearAtlasses, clearImages, clearText, clearJSON);
        }

        this._completedLoads[id] = false;
        this.sendNotification(Notifications.ASSET_MANAGER_ASSETS_CLEARED, id);
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
    public clearAsset(asset: IAsset, clearAudio: boolean = true, clearAtlasses: boolean = true, clearImages: boolean = true, clearText: boolean = true, clearJSON: boolean = true) {
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
                    this.clearImage(url);
                }
                break;
            case AssetManager.ATLAS:
                if (clearAtlasses) {
                    this.clearImage(url);
                    this.game.cache.removeJSON(url);
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
            case AssetManager.SPINE:
                this.clearSpineAsset(asset.url);
            break;
        }
    }

    private clearImage(url: string): void {
        let img:any = this.game.cache.getImage(url, true);
        this.game.cache.removeImage(url);
        console.log(img.base);
        console.log(img.base.imageUrl);
        if (img && img.data.dispose !== undefined) {
            img.data.dispose();
        }
        img = null;
    }

    public clearSpineAsset(id: string): void {
        this.game.cache.removeJSON(id + '.json');
        this.game.cache.removeText(id + '.atlas');
        this.clearImage(id + '.png');
    }

    /**
    * checks if the assets from this list id are already loaded
    * @param  {String}  id the asset list id to check
    * @return {Boolean}    whether it has been loaded already
    */
    public hasLoadedAssets(id: string) {
        return this._completedLoads[id] === true;
    }

    public sendNotification(notificationName: string, notificationBody?: any): void {
        return this.app.sendNotification(notificationName, notificationBody);
    }

    // getter / setter
    public set baseURL(baseURL: string) {
        // ensure trailing slash
        if (baseURL && baseURL !== undefined && baseURL.charAt(baseURL.length - 1) !== '/')
            baseURL += '/';

        this._baseURL = baseURL;
    }

    public set paths(pathObj: IPathConfig) {
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
    }

    public set resolution(res: number) {
        if (res === undefined) {
            res = this.game.resolution;
        }

        this._res = res;
        this._resolution = '';

        if (this._res > 1.5) {
            this._resolution = AssetManager.RESOLUTION_2X;
        }
    }

    public get resolution(): number {
        return this._res;
    }
    /**
    * sets the percentage of the load we should allot to each sound
    * @param {Number} [num = 2] the percentage
    */
    public set soundDecodingModifier(num: number) {
        if (num === undefined) {
            num = 2;
        }
        this._soundDecodingModifier = num;
    }

    public get soundDecodingModifier() {
        return this._soundDecodingModifier;
    }

    public set cacheBustVersion(version: string | number) {
        this._cacheBustVersion = '' + version;
    }
}