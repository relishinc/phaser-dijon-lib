declare module dijon.core {
    class AnalyticsManager {
        category: string;
        constructor(category?: string);
        trackEvent(action?: string, label?: string, value?: string): void;
        active: boolean;
        ga: Function;
    }
    class AnalyticsException {
        message: string;
        name: string;
        constructor(message: string);
    }
}
declare module dijon.core {
    interface IAsset {
        url: string;
        type: string;
        extensions?: string;
        required?: boolean;
        id?: string;
        key?: string;
    }
    interface IAssetList {
        autoload: boolean;
        required: boolean;
        assets: Array<IAsset>;
    }
    interface ISound {
        isAudioSprite?: boolean;
        url?: string;
        key?: string;
        __isAudioSprite?: boolean;
        eventToDispatch?: Phaser.Signal;
        decoded?: boolean;
    }
    interface IPathConfig {
        assetPath: string;
        dataPath: string;
        spritesheetPath: string;
        imgPath: string;
        fontPath: string;
        audioSpritePath: string;
        soundPath: string;
    }
    /**
    * Manager for loading and clearing assets
    */
    class AssetManager {
        private _data;
        private _baseURL;
        private _assetPath;
        private _dataPath;
        private _spriteSheetPath;
        private _imgPath;
        private _fontPath;
        private _audioSpritePath;
        private _soundPath;
        private _soundDecodingModifier;
        private _resolution;
        private _loadData;
        private _autoLoadData;
        private _completedLoads;
        private _requiredData;
        private _currentAssetList;
        private _hasFiles;
        private _soundsToDecode;
        private _isLoadingQueue;
        private _maxPercent;
        private _numSounds;
        private _soundsDecoded;
        game: dijon.core.Game;
        onLoadStart: Phaser.Signal;
        onFileStart: Phaser.Signal;
        onFileComplete: Phaser.Signal;
        onLoadComplete: Phaser.Signal;
        onLoadCompleteAndAudioDecoded: Phaser.Signal;
        onBackgroundLoadStart: Phaser.Signal;
        onBackgroundFileStart: Phaser.Signal;
        onBackgroundFileComplete: Phaser.Signal;
        onBackgroundLoadComplete: Phaser.Signal;
        onBackgroundLoadCompleteAndAudioDecoded: Phaser.Signal;
        /**
        * @type {String}
        * @static
        */
        static AUDIO: string;
        /**
        * @type {String}
        * @static
        */
        static SOUND: string;
        /**
        * @type {String}
        * @static
        */
        static AUDIO_SPRITE: string;
        /**
        * @type {String}
        * @static
        */
        static IMAGE: string;
        /**
        * @type {String}
        * @static
        */
        static ATLAS: string;
        /**
        * @type {String}
        * @static
        */
        static TEXT: string;
        /**
        * @type {String}
        * @static
        */
        static ASSET_LIST: string;
        static RESOLUTION_2X: string;
        static RESOLUTION_3X: string;
        constructor();
        /**
        * adds internal variables and signals
        * @return {void}
        * @private
        */
        private _init();
        /**
        * parses an asset list by key (usually from data/assets.json) and stores them internally
        * @param  {String} key the id of the list
        * @param  {Array}  list the json array of assets
        * @return {void}
        * @private
        */
        private _parseAssetList(key, list);
        /**
        * adds assets from a list to the load list
        * @param  {String} id id of the list to add
        * @return {void}
        * @private
        */
        private _loadAssets(id);
        /**
        * start the background loading
        * @return {void}
        * @private
        */
        private _backgroundLoadStart();
        /**
        * when a file completes in an background load queue - dispatches the onBackgroundFileComplete signal
        * @param  {Number} progress   the percent progress
        * @param  {String} id         the file id
        * @param  {int}    fileIndex  the index of the file in the list
        * @param  {int}    totalFiles the total number of files in the list
        * @return {void}
        * @private
        */
        private _backgroundFileComplete(progress, id, fileIndex, totalFiles);
        /**
        * when the background load completes - dispatches the onBackgroundLoadComplete signal, starts checking for decoded sounds
        * @return {void}
        * @private
        */
        private _backgroundLoadComplete();
        /**
        * when the asset list starts loading, dispatches the onLoadStart signal
        * @return {void}
        */
        private _gameLoadStart();
        /**
        * when a file starts loading - dispatches the onFileStart signal
        * @return {void}
        */
        private _gameFileStart();
        /**
        * when a file completes in the game load - dispatches the onFileComplete signal
        * @param  {Number} progress   the percent progress
        * @param  {String} id         the file id
        * @param  {int}    fileIndex  the index of the file in the list
        * @param  {int}    totalFiles the total number of files in the list
        * @return {void}
        * @private
        */
        private _gameFileComplete(progress, id?, fileIndex?, totalFiles?);
        /**
        * when the background load completes - dispatches the onLoadComplete signal, starts checking for decoded sounds
        * @return {void}
        * @private
        */
        private _gameLoadComplete();
        /**
        * checks if all the sounds in the queue are decoded
        * @param  {Phaser.Signal} eventToDispatch the signal to be dispatched when all sounds are decoded
        * @return {void}
        * @private
        */
        private _checkSoundDecoding(eventToDispatch);
        /**
        * when a sound is decoded, this method removes it from the _soundsToDecode array, and increases the overall percentage loaded
        * @param  {Phaser.Sound} sound the sound being decoded
        * @return {void}
        * @private
        */
        private _onSoundDecoded(sound);
        /**
        * shortcut to get an asset key using a file name (strips its extension)
        * @param  {String} fileName the url of the file
        * @return {Stirng}          the asset key (the filename with its extension stripped)
        * @private
        */
        private _getAssetKey(fileName);
        /**
        * gets the extension of a given file
        * @param  {String} fileName
        * @return {String}          the extension
        * @private
        */
        private _getExtension(fileName);
        /**
        * determines what kind of asset we're dealing with and adds it to the load queue
        * @param  {Object} asset the asset object we're going to load
        * @return {void}
        * @private
        */
        private _loadAsset(asset);
        /**
        * parses the data from the external assets file (normally data/assets.json)
        * @return {void}
        * @private
        */
        _parseData(): void;
        setBaseURL(baseURL?: string): void;
        setPaths(pathObj?: IPathConfig): void;
        setResolution(res?: number): void;
        /**
        * sets the percentage of the load we should allot to each sound
        * @param {Number} [num = 2] the percentage
        */
        setSoundDecodingModifier(num: number): void;
        getSoundDecodingModifier(): number;
        loadText(url: string): Phaser.Loader;
        loadAtlas(url: string): Phaser.Loader | string;
        loadImage(url: string): Phaser.Loader | string;
        loadBitmapFont(url: string): void;
        loadAudio(url: string, exts: any, isAudioSprite: boolean): void;
        loadSound(url: string, exts: any): void;
        loadAudioSprite(url: string, exts: any): void;
        loadAssets(id: string, background?: boolean): void;
        loadQueue(): void;
        getLoadProgress(progress: number): number;
        allSoundsDecoded(): boolean;
        /**
        * sets the data for the AssetManager to use as a reference (usually from data/assets.json)
        * triggers the _parseData internal method, which stores the asset list for later use
        * @param {String} textFileFromCache the id of the file in the Phaser.Cache
        */
        setData(textFileFromCache: string): void;
        /**
        * clears the assets from a particular id in the storage
        * @param  {String} id            the id of the asset list to clear
        * @param  {Boolean} [clearAudio = true]    whether to clear audio files
        * @param  {Boolean} [clearAtlasses = true] whether to clear texture atlasses
        * @param  {Boolean} [clearImages = true]   whether to clear images
        * @param  {Boolean} [clearText = true]     whether to clear text files
        * @return {void}
        */
        clearAssets(id: string, clearAudio?: boolean, clearAtlasses?: boolean, clearImages?: boolean, clearText?: boolean): void;
        /**
        * clears an asset from the game's memory
        * @param  {Object} asset         the asset to clear
        * @param  {Boolean} [clearAudio = true]    whether to clear audio files
        * @param  {Boolean} [clearAtlasses = true] whether to clear texture atlasses
        * @param  {Boolean} [clearImages = true]   whether to clear images
        * @param  {Boolean} [clearText = true]     whether to clear text files
        * @return {void}
        */
        clearAsset(asset: IAsset, clearAudio?: boolean, clearAtlasses?: boolean, clearImages?: boolean, clearText?: boolean): void;
        /**
        * checks if the assets from this list id are already loaded
        * @param  {String}  id the asset list id to check
        * @return {Boolean}    whether it has been loaded already
        */
        hasLoadedAssets(id: string): boolean;
    }
}
declare module dijon.core {
    class AudioManager {
        game: dijon.core.Game;
        private _defaultVolume;
        private _sprites;
        private _sounds;
        private _markerLookup;
        constructor();
        private _addAudio(key, isAudioSprite?);
        private _parseAudioSprite(key, audioSprite);
        private _allowMultiple(sound);
        private _getKeyFromMarkerName(marker);
        private _playSpriteMarker(key, marker, volume?, loop?, forceRestart?);
        private _stopSpriteMarker(key, marker);
        private _stopSound(sound);
        /**
        * adds audio to the lookup (called by AssetManager when any sound is loaded, usually not necessary to call from a game)
        * @param {String} key         the Phaser.Cache key of the audio asset
        * @param {Boolean} isAudioSprite whether the asset is an audio sprite
        */
        addAudio(key: string, isAudioSprite?: boolean): Phaser.AudioSprite | Phaser.Sound;
        /**
        * adds a single sound to the lookup (usually not necessary to call from a game)
        * @param {String} key the Phaser.Cache key of the asset
        * @return {Phaser.Sound} the added sound
        */
        addSound(key: any): Phaser.Sound;
        /**
        * adds an audio sprite to the lookup (usually not necessary to call from a game)
        * @param {String} key the Phaser.Cache key of the asset
        * @return {Phaser.AudioSprite} the added audio sprite
        */
        addAudioSprite(key: string): Phaser.AudioSprite;
        /**
        * a global method to play a sound - will check audio sprite markers for the provided key first, then single sounds
        * @param  {String} marker       the sound marker (or key) to check for
        * @param  {Number} volume       the volume at which to play the sound
        * @param  {Boolean} loop         whether the sound should loop (won't work if it's a sprite marker, and "loop" hasn't been set in the audio sprite descriptor file)
        * @param  {Boolean} forceRestart whether to restart the sound if it's already playing
        * @return {Phaser.Sound}              the playing sound
        */
        playAudio(marker: string, volume?: number, loop?: boolean, forceRestart?: boolean): Phaser.Sound | boolean;
        /**
        * calls Dijon.AudioManager.playAudio on a delay
        * @param  {int} delay        number of milliseconds to delay the sound
        * @param  {String} marker       the sound marker (or key) to check for
        * @param  {Number} volume       the volume at which to play the sound
        * @param  {Boolean} loop         whether the sound should loop (won't work if it's a sprite marker, and "loop" hasn't been set in the audio sprite descriptor file)
        * @param  {Boolean} forceRestart whether to restart the sound if it's already playing
        */
        playDelayedAudio(delay: number, marker: string, volume?: number, loop?: boolean, forceRestart?: boolean): Phaser.Sound | void;
        /**
        * plays a single sound
        * @param  {String} key          the Phaser.Cache key for the sound
        * @param  {Number} volume       the volume at which to play the sound
        * @param  {Boolean} loop         whether the sound should loop (won't work if it's a sprite marker, and "loop" hasn't been set in the audio sprite descriptor file)
        * @param  {Boolean} forceRestart whether to restart the sound if it's already playing
        * @return {Phaser.Sound} the playing sound
        */
        playSound(key: string, volume?: number, loop?: boolean, forceRestart?: boolean): Phaser.Sound | boolean;
        /**
        * plays a marker from an audio sprite
        * @param  {String} marker       the marker to check for (will check all audio sprites)
        * @param  {Number} volume       the volume at which to play the sound
        * @param  {Boolean} loop         whether the sound should loop (won't work if it's a sprite marker, and "loop" hasn't been set in the audio sprite descriptor file)
        * @param  {Boolean} forceRestart whether to restart the sound if it's already playing
        * @return {Phaser.Sound} the playing sound
        */
        playSpriteMarker(marker: string, volume?: number, loop?: boolean, forceRestart?: boolean): Phaser.Sound | boolean;
        playDelayedSound(delay: number, key: string, volume?: number, loop?: boolean, forceRestart?: boolean): void;
        playDelayedSpriteMarker(delay: number, marker: string, volume?: number, loop?: boolean, forceRestart?: boolean): void;
        /**
        * stops any playing audio file with the given marker
        * checks audio sprites first, then single sounds
        * @return {Phaser.Sound} the sound that was stopped
        */
        stopAudio(marker: string): void;
        /**
        * stops a single sound from playing
        * @return {Phaser.Sound} the sound that was stopped
        */
        stopSound(key: string): void;
        /**
        * stops a single sound from playing
        * @return {Phaser.Sound} the sound that was stopped
        */
        stopSpriteMarker(marker: string): void;
        /**
        * stops removes a sound from Dijon.AudioManager's lookup
        * @param  {String} key the key of the sound to be removed
        * @return {void}
        */
        removeSound(key: any): boolean;
        /**
        * stops removes an audio sprite from Dijon.AudioManager's lookup
        * @param  {String} key the key of the sound to be removed
        * @return {void}
        */
        removeSprite(key: string): void;
        fade(sound: Phaser.Sound, volume: number, time: number, stop?: boolean): Phaser.Tween;
        /**
        * Sets the default volume for all sounds (used in the case where a volume is not supplied to the playAudio, playSound, or playSpriteMarker methods)
        */
        defaultVolume: number;
    }
}
declare module dijon.core {
    class Game extends Phaser.Game {
        asset: dijon.core.AssetManager;
        sequence: dijon.core.SequenceManager;
        transition: dijon.core.TransitionManager;
        storage: dijon.core.StorageManager;
        audio: dijon.core.AudioManager;
        analytics: dijon.core.AnalyticsManager;
        gameLayer: Phaser.Group;
        uiLayer: Phaser.Group;
        debugger: any;
        constructor(config: Phaser.IGameConfig);
        boot(): void;
        addToGame(obj: Phaser.Sprite | Phaser.Image | Phaser.Button | Phaser.Text | Phaser.BitmapData | Phaser.SpriteBatch | Phaser.Group): Phaser.Sprite | Phaser.Image | Phaser.Button | Phaser.Text | Phaser.BitmapData | Phaser.SpriteBatch | Phaser.Group;
        addToUI(obj: Phaser.Sprite | Phaser.Image | Phaser.Button | Phaser.Text | Phaser.BitmapData | Phaser.SpriteBatch | Phaser.Group): Phaser.Sprite | Phaser.Image | Phaser.Button | Phaser.Text | Phaser.BitmapData | Phaser.SpriteBatch | Phaser.Group;
    }
}
declare module dijon.core {
    class SequenceManager {
        game: dijon.core.Game;
        private _defaultInterval;
        constructor();
        private _executeMethod(sequence, context, callback, callbackContext);
        run(sequence: Array<Function>, context: Object, interval: number, completeCallback: Function, completeCallbackContext: Object): void;
    }
}
declare module dijon.core {
    class StorageManager {
        game: dijon.core.Game;
        private _localStorageAvailable;
        constructor();
        private _init();
        private _getIsLocalStorageAvailable();
        private _getString(data);
        /**
        * gets stored data with the specified key
        * @param  {String}  key    the LocalStorage key where the data is stored
        * @param  {Boolean} isJSON is the stored data just a string or is it stringified json (assumes it's JSON)
        * @return {String | Object} the retrieved data - if it's a JSON string, we parse the data and return the JSON object
        */
        getData(key: string, isJSON?: boolean): any;
        /**
        * saves data to localstorage
        * @param  {String} key   the LocalStorage key the data will be saved to
        * @param  {String|Object} value the data to save (if it's an object, will be stringified before saving)
        * @return {void}
        */
        saveData(key: string, value: string | Object): boolean;
        /**
        * clear stored data
        * @param  {String} key the LocalStorage key to clear
        * @return {void}
        */
        clearData(key: string): boolean;
    }
}
declare module dijon.core {
    interface ITransitionHandler {
        transitionInComplete: Phaser.Signal;
        transitionOutComplete: Phaser.Signal;
        transitionOut?: Function;
        transitionIn?: Function;
    }
    interface IPreloadHandler extends ITransitionHandler {
        loadStart: Function;
        loadProgress: Function;
        loadComplete: Function;
    }
    interface ITransition {
        inHandler?: ITransitionHandler;
        preloadHandler?: IPreloadHandler;
        outHandler: ITransitionHandler;
    }
    class TransitionManager {
        game: dijon.core.Game;
        onTransitionOutComplete: Phaser.Signal;
        onTransitionInComplete: Phaser.Signal;
        private _transition;
        private _transitions;
        private _exceptions;
        private _fromState;
        private _toState;
        constructor();
        private _add(id, outHandler, preloadHandler, inHandler);
        _getTransition(inState: string, outState: string): any;
        _transitionInComplete(): void;
        _transitionOutComplete(): void;
        _preloadComplete(): void;
        _clearTransition(): boolean;
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
        add(fromState: string, toState: string | IPreloadHandler, outHandler: ITransitionHandler, preloadHandler: IPreloadHandler, inHandler: ITransitionHandler): void;
        /**
        * Adds an exception to the Dijon.TransitionManager in the case where 'all' has been used
        * @param {string} state - the state to add the exception for
        */
        addException(state: string): void;
        /**
        * Removes a transition handler for a specific from / to state combination
        */
        remove(fromState: string, toState?: string): void;
        /**
        * Start the transition to a new state
        * @param {string} state - the state to transition to
        */
        to(state: string): void;
        transitionIn(): void;
        /**
        * After the state is fully loaded and 'built' a call to this is made
        * this is currently made from BaseState in the 'afterBuild' method
        */
        transitionOut(): boolean;
    }
}
declare module dijon.display {
    class Group extends Phaser.Group {
    }
}
declare module dijon.display {
    class Sprite extends Phaser.Sprite {
    }
}
declare module dijon.display {
    class Text extends Phaser.Text {
    }
}
declare module dijon.mvc {
    class Application {
        static instance: any;
        static SINGLETON_MSG: string;
        game: dijon.core.Game;
        constructor();
        protected initializeApplication(): void;
        static getInstance(): Application;
    }
}
declare module dijon.mvc {
    class Mediator {
    }
}
declare module dijon.mvc {
    class Models {
    }
}
declare module dijon.mvc {
    class Notification extends Phaser.Signal {
    }
}
declare module dijon.mvc {
    class Notifier {
    }
}
declare module dijon.state {
    class State extends Phaser.State {
        private _audio;
        game: dijon.core.Game;
        constructor();
        init(): void;
        preload(): void;
        create(): void;
        shutdown(): void;
        listBuildSequence(): Array<Function>;
        buildInterface(): void;
        afterBuildInterface(): void;
        startBuild(): void;
        preAfterBuild(): void;
        afterBuild(): void;
        addAudio(track: Phaser.Sound): Phaser.Sound;
        removeAudio(): void;
        preloadID: string;
        buildInterval: number;
    }
}
