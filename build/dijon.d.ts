/// <reference path="../src/lib.d.ts" />
declare module dijon.interfaces {
    interface INotification {
        getName(): string;
        getBody(): any;
        setBody(body: any): void;
    }
}
declare module dijon.interfaces {
    interface INotifier {
        sendNotification(notificationName: string, notificationBody?: any): any;
    }
}
declare module dijon.utils {
    class Notifications {
        static ASSET_MANAGER_DATA_SET: string;
        static ASSET_MANAGER_ASSETS_CLEARED: string;
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
        resolution: number;
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
        bitmapFontPath: string;
        audioSpritePath: string;
        physicsPath: string;
        soundPath: string;
    }
    class AssetManager implements dijon.interfaces.INotifier {
        protected app: dijon.mvc.Application;
        private _data;
        private _baseURL;
        private _pathObj;
        private _assetPath;
        private _dataPath;
        private _spriteSheetPath;
        private _imgPath;
        private _fontPath;
        private _bitmapFontPath;
        private _physicsPath;
        private _audioSpritePath;
        private _soundPath;
        private _soundDecodingModifier;
        private _res;
        private _resolution;
        private _loadData;
        private _autoLoadData;
        private _completedLoads;
        private _requiredData;
        private _currentAssetList;
        private _hasFiles;
        private _soundsToDecode;
        private _isLoadingQueue;
        private _fileCompleteProgress;
        private _maxPercent;
        private _numSounds;
        private _soundsDecoded;
        private _cacheBustVersion;
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
        static JSON: string;
        static PHYSICS: string;
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
        private _setBaseTextureResolution(texture);
        private _gameLoadComplete();
        private _checkSoundDecoding(eventToDispatch);
        private _onSoundDecoded(sound);
        private _getAssetKey(fileName);
        private _getExtension(fileName);
        private _getResolution(res);
        private _loadAsset(asset);
        private _parseData();
        private _getCacheBustedUrl(url);
        loadText(url: string): Phaser.Loader;
        loadJSON(key: string): Phaser.Loader;
        loadPhysics(key: string): Phaser.Loader;
        loadAtlas(url: string, resolution?: any): Phaser.Loader | string;
        loadImage(url: string, resolution?: any): Phaser.Loader | string;
        loadBitmapFont(url: string, resolution?: any): void;
        loadAudio(url: string, exts: any, isAudioSprite: boolean): void;
        loadSound(url: string, exts: any): void;
        loadAudioSprite(url: string, exts: any): void;
        loadAssets(id: string, background?: boolean): void;
        loadQueue(): void;
        getLoadProgress(): number;
        allSoundsDecoded(): boolean;
        setData(data: Object): void;
        clearAssets(id: string, clearAudio?: boolean, clearAtlasses?: boolean, clearImages?: boolean, clearText?: boolean, clearJSON?: boolean): void;
        clearAsset(asset: IAsset, clearAudio?: boolean, clearAtlasses?: boolean, clearImages?: boolean, clearText?: boolean, clearJSON?: boolean): void;
        hasLoadedAssets(id: string): boolean;
        sendNotification(notificationName: string, notificationBody?: any): void;
        baseURL: string;
        paths: IPathConfig;
        resolution: number;
        soundDecodingModifier: number;
        cacheBustVersion: string | number;
    }
}
declare module dijon.core {
    class SequenceManager {
        game: Game;
        private _defaultInterval;
        constructor();
        private _executeMethod(sequence, context, callback, callbackContext);
        run(sequence: Array<Function>, context: Object, interval: number, completeCallback: Function, completeCallbackContext: Object): void;
    }
}
declare module dijon.interfaces {
    interface ITransitionHandler {
        transitionInComplete: Phaser.Signal;
        transitionOutComplete: Phaser.Signal;
        transitionOut?: Function;
        transitionIn?: Function;
    }
}
declare module dijon.interfaces {
    interface IPreloadHandler extends ITransitionHandler {
        loadStart(): any;
        loadProgress(progress?: number): any;
        loadComplete(): any;
    }
}
declare module dijon.interfaces {
    interface ITransition {
        inHandler?: ITransitionHandler;
        preloadHandler?: IPreloadHandler;
        outHandler: ITransitionHandler;
    }
}
declare module dijon.core {
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
        private _getTransition(inState, outState);
        private _transitionInComplete();
        private _transitionOutComplete();
        private _preloadComplete();
        private _clearTransition();
        add(fromState: string, toState: string | interfaces.IPreloadHandler, outHandler?: interfaces.ITransitionHandler, preloadHandler?: interfaces.IPreloadHandler, inHandler?: interfaces.ITransitionHandler): void;
        addException(state: string): void;
        remove(fromState: string, toState?: string): void;
        to(state: string): void;
        transitionIn(): void;
        canTransitionOut(): boolean;
        transitionOut(): void;
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
    class Sprite extends Phaser.Sprite {
        name: string;
        game: core.Game;
        protected _hasComponents: boolean;
        protected _componentKeys: string[];
        protected _components: {
            [componentName: string]: core.Component;
        };
        constructor(x?: number, y?: number, key?: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number, name?: string, components?: core.Component[]);
        update(): void;
        destroy(): void;
        protected init(): void;
        protected buildInterface(): void;
        private _updateComponentKeys();
        addComponents: (components: core.Component[]) => void;
        addComponent(component: core.Component): core.Component;
        updateComponents(): void;
        updateComponent(componentName: string): void;
        removeAllComponents(): void;
        removeComponent(componentName: string): void;
        resolution: number;
        protected autoBuild: boolean;
    }
}
declare module dijon.display {
    class Text extends Phaser.Text {
        lineSpacing: number;
        static DEFAULT_FONT_SIZE: number;
        static DEFAULT_FONT_COLOR: string;
        static DEFAULT_FONT: string;
        static GLOBAL_PADDING_X: number;
        static GLOBAL_PADDING_Y: number;
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
        constructor(x: number, y: number, text?: string, fontName?: string, fontSize?: number, fontColor?: string, fontAlign?: string, wordWrap?: boolean, width?: number, lineSpacing?: number, settings?: Object);
        setText(text: string): Phaser.Text;
        protected setResolution(): void;
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
declare module dijon.display {
    class Group extends Phaser.Group {
        name: string;
        game: core.Game;
        protected _hasComponents: boolean;
        protected _componentKeys: string[];
        protected _components: {
            [componentName: string]: core.Component;
        };
        protected _mediator: dijon.mvc.Mediator;
        constructor(x?: number, y?: number, name?: string, addToStage?: boolean, components?: core.Component[], enableBody?: boolean, physicsBodyType?: number);
        update(): void;
        destroy(): void;
        protected init(): void;
        protected buildInterface(): void;
        private _updateComponentKeys();
        addComponents: (components: core.Component[]) => void;
        addComponent(component: core.Component): core.Component;
        updateComponents(): void;
        updateComponent(componentName: string): void;
        removeAllComponents(): void;
        removeComponent(componentName: string): void;
        removeMediator(): void;
        addInternal: core.GameObjectFactory;
        protected autoBuild: boolean;
    }
}
declare module dijon.core {
    class GameObjectFactory extends Phaser.GameObjectFactory {
        protected _defaultGroup: Phaser.Group;
        existing(object: any): any;
        image(x?: number, y?: number, key?: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number, group?: Phaser.Group): Phaser.Image;
        sprite(x?: number, y?: number, key?: string | PIXI.Texture, frame?: string | number, group?: Phaser.Group): Phaser.Sprite;
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
        dSprite(x?: number, y?: number, key?: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number, name?: string, components?: Component[], group?: Phaser.Group): display.Sprite;
        dGroup(x?: number, y?: number, name?: string, addToStage?: boolean, components?: core.Component[], enableBody?: boolean, physicsBodyType?: number, group?: Phaser.Group): display.Group;
        dText(x: number, y: number, text?: string, fontName?: string, fontSize?: number, fontColor?: string, fontAlign?: string, wordWrap?: boolean, width?: number, lineSpacing?: number, settings?: Object, group?: Phaser.Group): display.Text;
        defaultGroup: Phaser.Group;
    }
}
declare module dijon.interfaces {
    interface IGameConfig extends Phaser.IGameConfig {
        resolution?: number;
        stats?: boolean;
        analytics?: boolean;
    }
}
declare module dijon.core {
    class Game extends Phaser.Game {
        app: mvc.Application;
        config: interfaces.IGameConfig;
        asset: AssetManager;
        sequence: SequenceManager;
        transition: TransitionManager;
        storage: StorageManager;
        audio: AudioManager;
        analytics: AnalyticsManager;
        add: GameObjectFactory;
        onWorldInputDisabled: Phaser.Signal;
        onWorldInputEnabled: Phaser.Signal;
        gameLayer: dijon.display.Group;
        uiLayer: dijon.display.Group;
        stageLayer: dijon.display.Group;
        stats: Stats | any;
        constructor(config: interfaces.IGameConfig);
        boot(): void;
        protected addLayers(): void;
        protected addStats(): void;
        disableElementInput(el: any): any;
        enableElementInput(el: any): any;
        disableInput(group: Phaser.Group): any;
        enableInput(group: Phaser.Group): any;
        disableGameInput(): void;
        enableGameInput(): void;
        beginStats(): void;
        endStats(): void;
        changeState(toState: string): void;
        addToGame: core.GameObjectFactory;
        addToUI: core.GameObjectFactory;
        addToStage: core.GameObjectFactory;
    }
}
declare module dijon.mvc {
    class Notification implements interfaces.INotification {
        private _name;
        private _body;
        constructor(_name: string, _body?: any);
        getName(): string;
        setBody(body: any): void;
        getBody(): any;
        destroy(): void;
    }
}
declare module dijon.interfaces {
    interface IObserver {
        onRegister(): any;
        onRemoved(): any;
        destroy(): any;
        listNotificationInterests(): string[];
        handleNotification(notification: INotification): any;
    }
}
declare module dijon.mvc {
    class Mediator implements interfaces.IObserver {
        protected _viewComponent: any;
        static MEDIATOR_NAME: string;
        protected mediatorName: string;
        protected app: Application;
        protected game: core.Game;
        constructor(_viewComponent?: any, autoReg?: boolean, mediatorName?: string);
        protected register(): void;
        protected remove(): void;
        onRegister(): void;
        onRemoved(): void;
        destroy(): void;
        listNotificationInterests(): string[];
        handleNotification(notification: interfaces.INotification): void;
        sendNotification(notificationName: string, notificationBody?: any): void;
        viewComponent: any;
        name: string;
    }
}
declare module dijon.mvc {
    class Model {
        private modelName;
        app: Application;
        game: core.Game;
        protected _data: any;
        static MODEL_NAME: string;
        constructor(dataKey?: string, modelName?: string);
        protected getKeyExists(key: string): boolean;
        setData(dataKey: string): any;
        getData(): any;
        destroy(): void;
        name: string;
    }
}
declare module dijon.utils {
    class Device {
        static IOS: string;
        static ANDROID: string;
        static UNKNOWN: string;
    }
}
declare module dijon.mvc {
    class Application implements interfaces.INotifier {
        protected static instance: any;
        protected static SINGLETON_MSG: string;
        game: core.Game;
        protected _mediator: mvc.Mediator;
        protected _models: {
            [name: string]: Model;
        };
        protected _mediators: {
            [name: string]: Mediator;
        };
        protected _observerMap: {
            [name: string]: interfaces.IObserver[];
        };
        constructor();
        initializeApplication(): void;
        registerModel(model: Model): Model;
        retrieveModel(modelName: string): Model;
        removeModel(modelToRemove: Model): void;
        registerMediator(mediator: Mediator): void;
        retrieveMediator(mediatorName: string): Mediator;
        removeMediator(mediatorToRemove: Mediator): void;
        registerObserver(observer: interfaces.IObserver): void;
        removeObserver(notificationName: string, observerToRemove: interfaces.IObserver): void;
        sendNotification(notificationName: string, notficationBody?: any): void;
        private _notifyObservers(notification);
        static getInstance(): Application;
        static isMobile(): boolean;
        static getMobileOperatingSystem(): string;
    }
}
declare module dijon.core {
    class AnalyticsManager {
        enabled: boolean;
        category: string;
        constructor(enabled?: boolean, category?: string);
        trackEvent(action?: string, label?: string, value?: string): void;
        trackOmnitureEvent(gameName: string, activity: string, isGameEvent: boolean): boolean;
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
    class State extends Phaser.State {
        protected _audio: Phaser.Sound[];
        protected _mediator: mvc.Mediator;
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
        removeMediator(): void;
        preloadID: string;
        buildInterval: number;
        add: core.GameObjectFactory;
        app: mvc.Application;
        game: core.Game;
    }
}
declare module dijon.display {
    class InvisibleButton extends dijon.display.Sprite {
        private _hitWidth;
        private _hitHeight;
        constructor(x?: number, y?: number, name?: string, w?: number, h?: number);
        init(): void;
        buildInterface(): void;
        private _addHitRect();
        setSize(w: any, h: any): void;
    }
}
declare module dijon.mvc {
    class CopyModel extends Model {
        static MODEL_NAME: string;
        private _languages;
        constructor(dataKey?: string);
        getCopy(groupId: string, itemId: string): string;
        getCopyGroup(groupId: string): any;
        addLanguage(languageId: string, dataKey: string): any;
        changeLanguage(languageId: string): void;
        name: string;
    }
}
