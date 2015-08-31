/// <reference path="../src/lib.d.ts" />
declare module dijon.mvc {
    class Notification extends Phaser.Signal {
    }
}
declare module dijon.mvc {
    class Mediator {
        private _name;
        private _viewComponent;
        game: core.Game;
        constructor(_name: string, _viewComponent?: any, autoReg?: boolean);
        private _register();
        onRegister(): void;
        listNotificationInterests(): string[];
        handleNotification(note: Notification): void;
        viewCompnent: any;
        viewComponent: any;
        name: string;
    }
}
declare module dijon.mvc {
    class Application {
        static instance: any;
        static SINGLETON_MSG: string;
        game: core.Game;
        private _mediators;
        constructor();
        initializeApplication(): void;
        registerMediator(mediatorName: string, mediator: Mediator): void;
        static getInstance(): Application;
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
        static AUDIO: string;
        static SOUND: string;
        static AUDIO_SPRITE: string;
        static IMAGE: string;
        static ATLAS: string;
        static TEXT: string;
        static ASSET_LIST: string;
        static RESOLUTION_2X: string;
        static RESOLUTION_3X: string;
        constructor();
        private _init();
        private _parseAssetList(key, list);
        private _loadAssets(id);
        private _backgroundLoadStart();
        private _backgroundFileComplete(progress, id, fileIndex, totalFiles);
        private _backgroundLoadComplete();
        private _gameLoadStart();
        private _gameFileStart();
        private _gameFileComplete(progress, id?, fileIndex?, totalFiles?);
        private _gameLoadComplete();
        private _checkSoundDecoding(eventToDispatch);
        private _onSoundDecoded(sound);
        private _getAssetKey(fileName);
        private _getExtension(fileName);
        private _loadAsset(asset);
        _parseData(): void;
        setBaseURL(baseURL?: string): void;
        setPaths(pathObj?: IPathConfig): void;
        setResolution(res?: number): void;
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
        setData(textFileFromCache: string): void;
        clearAssets(id: string, clearAudio?: boolean, clearAtlasses?: boolean, clearImages?: boolean, clearText?: boolean): void;
        clearAsset(asset: IAsset, clearAudio?: boolean, clearAtlasses?: boolean, clearImages?: boolean, clearText?: boolean): void;
        hasLoadedAssets(id: string): boolean;
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
        add(fromState: string, toState: string | IPreloadHandler, outHandler: ITransitionHandler, preloadHandler: IPreloadHandler, inHandler: ITransitionHandler): void;
        addException(state: string): void;
        remove(fromState: string, toState?: string): void;
        to(state: string): void;
        transitionIn(): void;
        transitionOut(): boolean;
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
        getFromLocalStorage(key: string, isJSON?: boolean): any;
        saveToLocalStorage(key: string, value: string | Object): boolean;
        clearFromLocalStorage(key: string): boolean;
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
        addAudio(key: string, isAudioSprite?: boolean): Phaser.AudioSprite | Phaser.Sound;
        addSound(key: any): Phaser.Sound;
        addAudioSprite(key: string): Phaser.AudioSprite;
        playAudio(marker: string, volume?: number, loop?: boolean, forceRestart?: boolean): Phaser.Sound | boolean;
        playDelayedAudio(delay: number, marker: string, volume?: number, loop?: boolean, forceRestart?: boolean): Phaser.Sound | void;
        playSound(key: string, volume?: number, loop?: boolean, forceRestart?: boolean): Phaser.Sound | boolean;
        playSpriteMarker(marker: string, volume?: number, loop?: boolean, forceRestart?: boolean): Phaser.Sound | boolean;
        playDelayedSound(delay: number, key: string, volume?: number, loop?: boolean, forceRestart?: boolean): void;
        playDelayedSpriteMarker(delay: number, marker: string, volume?: number, loop?: boolean, forceRestart?: boolean): void;
        stopAudio(marker: string): void;
        stopSound(key: string): void;
        stopSpriteMarker(marker: string): void;
        removeSound(key: any): boolean;
        removeSprite(key: string): void;
        fade(sound: Phaser.Sound, volume: number, time: number, stop?: boolean): Phaser.Tween;
        defaultVolume: number;
    }
}
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
    class GameObjectFactory extends Phaser.GameObjectFactory {
        protected _defaultGroup: Phaser.Group;
        image(x?: number, y?: number, key?: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number, group?: Phaser.Group): Phaser.Image;
        sprite(x?: number, y?: number, key?: string, frame?: string | number, group?: Phaser.Group): Phaser.Sprite;
        creature(x?: number, y?: number, key?: string, mesh?: any, group?: Phaser.Group): any;
        group(parent?: any, name?: string, addToStage?: boolean, enableBody?: boolean, physicsBodyType?: number): Phaser.Group;
        physicsGroup(physicsBodyType?: number, parent?: any, name?: string, addToStage?: boolean): Phaser.Group;
        spriteBatch(parent?: any, name?: string, addToStage?: boolean): Phaser.SpriteBatch;
        tileSprite(x?: number, y?: number, width?: number, height?: number, key?: string, frame?: string | number, group?: Phaser.Group): Phaser.TileSprite;
        rope(x?: number, y?: number, key?: string, frame?: string | number, points?: Phaser.Point[], group?: Phaser.Group): Phaser.Rope;
        text(x?: number, y?: number, text?: string, style?: Phaser.PhaserTextStyle, group?: Phaser.Group): Phaser.Text;
        button(x?: number, y?: number, key?: string, callback?: Function, callbackContext?: Object, overFrame?: string | number, outFrame?: string | number, downFrame?: string | number, upFrame?: string | number, group?: Phaser.Group): Phaser.Button;
        graphics(x?: number, y?: number, group?: Phaser.Group): Phaser.Graphics;
        bitmapText(x?: number, y?: number, font?: string, text?: string, size?: number, align?: string, group?: Phaser.Group): Phaser.BitmapText;
        defaultGroup: Phaser.Group;
    }
}
declare module dijon.core {
    class Game extends Phaser.Game {
        asset: AssetManager;
        sequence: SequenceManager;
        transition: TransitionManager;
        storage: StorageManager;
        audio: AudioManager;
        analytics: AnalyticsManager;
        add: GameObjectFactory;
        gameLayer: Phaser.Group;
        uiLayer: Phaser.Group;
        debugger: any;
        constructor(config: Phaser.IGameConfig);
        boot(): void;
        addToGame: core.GameObjectFactory;
        addToUI: core.GameObjectFactory;
    }
}
declare module dijon.component {
    class Component {
        game: core.Game;
        name: string;
        owner: any;
        constructor();
        setOwner(owner: any): void;
        init(): void;
        buildInterface(): void;
        update(): void;
        destroy(): void;
    }
}
declare module dijon.display {
    class Group extends Phaser.Group {
        name: string;
        game: core.Game;
        protected _hasComponents: boolean;
        protected _componentKeys: string[];
        protected _components: {
            [componentName: string]: component.Component;
        };
        constructor(x?: number, y?: number, name?: string, addToStage?: boolean, components?: component.Component[], enableBody?: boolean, physicsBodyType?: number);
        update(): void;
        destroy(): void;
        protected init(): void;
        protected buildInterface(): void;
        private _updateComponentKeys();
        addComponents: (components: component.Component[]) => void;
        addComponent(component: component.Component): component.Component;
        updateComponents(): void;
        updateComponent(componentName: string): void;
        removeAllComponents(): void;
        removeComponent(componentName: string): void;
    }
}
declare module dijon.display {
    class Sprite extends Phaser.Sprite {
        name: string;
        game: core.Game;
        protected _hasComponents: boolean;
        protected _componentKeys: string[];
        protected _components: {
            [componentName: string]: component.Component;
        };
        constructor(x?: number, y?: number, key?: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number, name?: string, components?: component.Component[]);
        update(): void;
        destroy(): void;
        protected init(): void;
        protected buildInterface(): void;
        private _updateComponentKeys();
        addComponents: (components: component.Component[]) => void;
        addComponent(component: component.Component): component.Component;
        updateComponents(): void;
        updateComponent(componentName: string): void;
        removeAllComponents(): void;
        removeComponent(componentName: string): void;
    }
}
declare module dijon.display {
    class Text extends Phaser.Text {
        lineSpacing: number;
        game: core.Game;
        style: any;
        onAnimationComplete: Phaser.Signal;
        protected _canUpdate: boolean;
        protected _repeatTimer: Phaser.TimerEvent;
        protected _delayTimer: Phaser.TimerEvent;
        protected _lowercaseText: string;
        protected _letterTime: number;
        protected _textLength: number;
        protected _textToAnimate: string[];
        static DEFAULT_FONT_SIZE: number;
        static DEFAULT_FONT_COLOR: string;
        static DEFAULT_FONT: string;
        static GLOBAL_PADDING_X: number;
        static GLOBAL_PADDING_Y: number;
        constructor(x: number, y: number, text?: string, fontName?: string, fontSize?: number, fontColor?: string, fontAlign?: string, wordWrap?: boolean, width?: number, lineSpacing?: number, settings?: Object);
        setText(text: string): Phaser.Text;
        protected _startTextAnimation(): void;
        protected _updateTextAnimation(): boolean;
        setColor(color: string): void;
        resetColor(): void;
        highlightPhrase(phrase: string, color: string, caseSensitive?: boolean): void;
        animate(letterTime?: number, delay?: number): void;
        stopAnimating: () => void;
        roundPixel: () => void;
        private static _addSettings(obj, settings);
    }
}
declare module dijon.mvc {
    class Model {
        game: core.Game;
        protected _data: any;
        constructor(dataKey?: string);
        protected getKeyExists(key: string): boolean;
        protected parseData(key: any): any;
        setData(dataKey: string): any;
        getData(): any;
    }
}
declare module dijon.mvc {
    class CopyModel extends Model {
        private _languages;
        constructor(dataKey?: string);
        getCopy(groupId: string, itemId: string): string;
        getCopyGroup(groupId: string): any;
        addLanguage(languageId: string, dataKey: string): any;
        changeLanguage(languageId: string): void;
    }
}
declare module dijon.mvc {
    class Notifier {
    }
}
declare module dijon.state {
    class State extends Phaser.State {
        private _audio;
        game: core.Game;
        add: core.GameObjectFactory;
        constructor();
        init(): void;
        preload(): void;
        create(): void;
        shutdown(): void;
        listBuildSequence(): Function[];
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
