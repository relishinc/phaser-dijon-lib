/// <reference path="../typings/tsd.d.ts" />
declare module "dijon.bootstrap" {
    function bootstrap(): void;
    export default bootstrap;
}
declare module "dijon/utils/Notifications" {
    export default class Notifications {
        static ASSET_MANAGER_DATA_SET: string;
        static ASSET_MANAGER_ASSETS_CLEARED: string;
    }
}
declare module "dijon/interfaces" {
    export interface INotification {
        getName(): string;
        getBody(): any;
        setBody(body: any): void;
    }
    export interface INotifier {
        sendNotification(notificationName: string, notificationBody?: any): any;
    }
    export interface IObserver {
        onRegister(): any;
        onRemoved(): any;
        destroy(): any;
        listNotificationInterests(): string[];
        handleNotification(notification: INotification): any;
    }
    export interface IGameConfig extends Phaser.IGameConfig {
        resolution?: number;
        analytics?: boolean;
        plugins?: string[];
    }
    export interface IAsset {
        url: string;
        type: string;
        extensions?: string;
        required?: boolean;
        id?: string;
        key?: string;
        resolution: number;
    }
    export interface IAssetList {
        autoload: boolean;
        required: boolean;
        assets: Array<IAsset>;
    }
    export interface ISound {
        isAudioSprite?: boolean;
        url?: string;
        key?: string;
        __isAudioSprite?: boolean;
        eventToDispatch?: Phaser.Signal;
        decoded?: boolean;
    }
    export interface IPathConfig {
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
    export interface ITransition {
        inHandler?: ITransitionHandler;
        preloadHandler?: IPreloadHandler;
        outHandler: ITransitionHandler;
    }
    export interface ITransitionHandler {
        transitionInComplete: Phaser.Signal;
        transitionOutComplete: Phaser.Signal;
        transitionOut?: Function;
        transitionIn?: Function;
    }
    export interface IPreloadHandler extends ITransitionHandler {
        loadStart(): any;
        loadProgress(progress?: number): any;
        loadComplete(): any;
    }
    export interface IBrowser {
        firefox?: boolean;
        ie?: boolean;
        safari?: boolean;
        chrome?: boolean;
    }
}
declare module "dijon/core/AssetManager" {
    import Application from "dijon/Application";
    import Game from "dijon/core/Game";
    import { INotifier, IPathConfig, IAsset } from "dijon/interfaces";
    export default class AssetManager implements INotifier {
        protected app: Application;
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
        game: Game;
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
declare module "dijon/core/SequenceManager" {
    import Game from "dijon/core/Game";
    export default class SequenceManager {
        game: Game;
        private _defaultInterval;
        constructor();
        private _executeMethod(sequence, context, callback, callbackContext);
        run(sequence: Array<Function>, context: Object, interval: number, completeCallback: Function, completeCallbackContext: Object): void;
    }
}
declare module "dijon/core/TransitionManager" {
    import Game from "dijon/core/Game";
    import { ITransitionHandler, IPreloadHandler } from "dijon/interfaces";
    export default class TransitionManager {
        game: Game;
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
        add(fromState: string, toState: string | IPreloadHandler, outHandler?: ITransitionHandler, preloadHandler?: IPreloadHandler, inHandler?: ITransitionHandler): void;
        addAll(handler: IPreloadHandler): void;
        addException(state: string): void;
        remove(fromState: string, toState?: string): void;
        to(state: string): void;
        transitionIn(): void;
        canTransitionOut(): boolean;
        transitionOut(): void;
    }
}
declare module "dijon/core/StorageManager" {
    import Game from "dijon/core/Game";
    export default class StorageManager {
        game: Game;
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
declare module "dijon/core/AudioManager" {
    import Game from "dijon/core/Game";
    export default class AudioManager {
        game: Game;
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
        playAudio(marker: string, volume?: number, loop?: boolean, forceRestart?: boolean): Phaser.Sound;
        playDelayedAudio(delay: number, marker: string, volume?: number, loop?: boolean, forceRestart?: boolean): Phaser.Sound;
        playSound(key: string, volume?: number, loop?: boolean, forceRestart?: boolean): Phaser.Sound;
        playSpriteMarker(marker: string, volume?: number, loop?: boolean, forceRestart?: boolean): Phaser.Sound;
        playDelayedSound(delay: number, key: string, volume?: number, loop?: boolean, forceRestart?: boolean): Phaser.Sound;
        playDelayedSpriteMarker(delay: number, marker: string, volume?: number, loop?: boolean, forceRestart?: boolean): Phaser.Sound;
        stopAudio(marker: string): void;
        stopSound(key: string): void;
        stopSpriteMarker(marker: string): void;
        removeSound(key: any): boolean;
        removeSprite(key: string): void;
        fade(sound: Phaser.Sound, volume: number, time: number, stop?: boolean): Phaser.Tween;
        defaultVolume: number;
    }
}
declare module "dijon/core/AnalyticsManager" {
    export default class AnalyticsManager {
        enabled: boolean;
        category: string;
        constructor(enabled?: boolean, category?: string);
        trackEvent(action?: string, label?: string, value?: string): void;
        trackOmnitureEvent(gameName: string, activity: string, isGameEvent: boolean): boolean;
        active: boolean;
        ga: Function;
    }
    export class AnalyticsException {
        message: string;
        name: string;
        constructor(message: string);
    }
}
declare module "dijon/mvc/Mediator" {
    import { IObserver, INotification } from "dijon/interfaces";
    import Application from "dijon/Application";
    import Game from "dijon/core/Game";
    export default class Mediator implements IObserver {
        protected _viewComponent: any;
        static MEDIATOR_NAME: string;
        protected mediatorName: string;
        protected app: Application;
        protected game: Game;
        constructor(_viewComponent?: any, autoReg?: boolean, mediatorName?: string);
        protected register(): void;
        protected remove(): void;
        onRegister(): void;
        onRemoved(): void;
        destroy(): void;
        listNotificationInterests(): string[];
        handleNotification(notification: INotification): void;
        sendNotification(notificationName: string, notificationBody?: any): void;
        viewComponent: any;
        name: string;
    }
}
declare module "dijon/display/Sprite" {
    import Game from "dijon/core/Game";
    import Component from "dijon/display/Component";
    export default class Sprite extends Phaser.Sprite {
        name: string;
        game: Game;
        protected _hasComponents: boolean;
        protected _componentKeys: string[];
        protected _components: {
            [componentName: string]: Component;
        };
        constructor(x?: number, y?: number, key?: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number, name?: string, components?: Component[]);
        update(): void;
        destroy(): void;
        protected init(): void;
        protected buildInterface(): void;
        private _updateComponentKeys();
        addComponents: (components: Component[]) => void;
        addComponent(component: Component): Component;
        updateComponents(): void;
        updateComponent(componentName: string): void;
        removeAllComponents(): void;
        removeComponent(componentName: string): void;
        resolution: number;
        protected autoBuild: boolean;
    }
}
declare module "dijon/display/Component" {
    import Game from "dijon/core/Game";
    import Sprite from "dijon/display/Sprite";
    import Group from "dijon/display/Group";
    export default class Component {
        game: Game;
        name: string;
        owner: any;
        constructor();
        setOwner(owner: Sprite | Group): void;
        init(): void;
        buildInterface(): void;
        update(): void;
        destroy(): void;
    }
}
declare module "dijon/display/Group" {
    import Game from "dijon/core/Game";
    import GameObjectFactory from "dijon/core/GameObjectFactory";
    import Mediator from "dijon/mvc/Mediator";
    import Component from "dijon/display/Component";
    export default class Group extends Phaser.Group {
        name: string;
        game: Game;
        protected _hasComponents: boolean;
        protected _componentKeys: string[];
        protected _components: {
            [componentName: string]: Component;
        };
        protected _mediator: Mediator;
        constructor(x?: number, y?: number, name?: string, addToStage?: boolean, components?: Component[], enableBody?: boolean, physicsBodyType?: number);
        update(): void;
        destroy(): void;
        protected init(): void;
        protected buildInterface(): void;
        private _updateComponentKeys();
        addComponents: (components: Component[]) => void;
        addComponent(component: Component): Component;
        updateComponents(): void;
        updateComponent(componentName: string): void;
        removeAllComponents(): void;
        removeComponent(componentName: string): void;
        removeMediator(): void;
        addInternal: GameObjectFactory;
        protected autoBuild: boolean;
    }
}
declare module "dijon/display/Text" {
    import Game from "dijon/core/Game";
    export default class Text extends Phaser.Text {
        lineSpacing: number;
        static DEFAULT_FONT_SIZE: number;
        static DEFAULT_FONT_COLOR: string;
        static DEFAULT_FONT: string;
        static GLOBAL_PADDING_X: number;
        static GLOBAL_PADDING_Y: number;
        game: Game;
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
declare module "dijon/core/GameObjectFactory" {
    import Group from "dijon/display/Group";
    import Sprite from "dijon/display/Sprite";
    import Text from "dijon/display/Text";
    import Component from "dijon/display/Component";
    export default class GameObjectFactory extends Phaser.GameObjectFactory {
        protected _targetGroup: Phaser.Group;
        protected _defaultLayer: Phaser.Group;
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
        dSprite(x?: number, y?: number, key?: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number, name?: string, components?: Component[], group?: Phaser.Group): Sprite;
        dGroup(x?: number, y?: number, name?: string, addToStage?: boolean, components?: Component[], enableBody?: boolean, physicsBodyType?: number, group?: Phaser.Group): Group;
        dText(x: number, y: number, text?: string, fontName?: string, fontSize?: number, fontColor?: string, fontAlign?: string, wordWrap?: boolean, width?: number, lineSpacing?: number, settings?: Object, group?: Phaser.Group): Text;
        setDefaultLayer(value: Phaser.Group): void;
        defaultLayer: Phaser.Group;
        targetGroup: Phaser.Group;
    }
}
declare module "dijon/core/Game" {
    import Application from "dijon/Application";
    import AssetManager from "dijon/core/AssetManager";
    import SequenceManager from "dijon/core/SequenceManager";
    import TransitionManager from "dijon/core/TransitionManager";
    import StorageManager from "dijon/core/StorageManager";
    import AudioManager from "dijon/core/AudioManager";
    import AnalyticsManager from "dijon/core/AnalyticsManager";
    import GameObjectFactory from "dijon/core/GameObjectFactory";
    import Group from "dijon/display/Group";
    import { IGameConfig } from "dijon/interfaces";
    export default class Game extends Phaser.Game {
        app: Application;
        config: IGameConfig;
        asset: AssetManager;
        sequence: SequenceManager;
        transition: TransitionManager;
        storage: StorageManager;
        audio: AudioManager;
        analytics: AnalyticsManager;
        add: GameObjectFactory;
        onWorldInputDisabled: Phaser.Signal;
        onWorldInputEnabled: Phaser.Signal;
        gameLayer: Group;
        uiLayer: Group;
        stageLayer: Group;
        constructor(config: IGameConfig);
        boot(): void;
        addPlugins(): void;
        setFactoryDefaultLayer(newLayer: Phaser.Group): void;
        setDefault: any;
        protected addLayers(): void;
        disableElementInput(el: any): any;
        enableElementInput(el: any): any;
        disableInput(group: Phaser.Group): any;
        enableInput(group: Phaser.Group): any;
        disableGameInput(): void;
        enableGameInput(): void;
        changeState(toState: string): void;
        addToGame: GameObjectFactory;
        addToUI: GameObjectFactory;
        addToStage: GameObjectFactory;
        addToWorld: GameObjectFactory;
    }
}
declare module "dijon/mvc/Model" {
    import Application from "dijon/Application";
    import Game from "dijon/core/Game";
    export default class Model {
        private modelName;
        app: Application;
        game: Game;
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
declare module "dijon/mvc/Notification" {
    import { INotification } from "dijon/interfaces";
    export default class Notification implements INotification {
        private _name;
        private _body;
        constructor(_name: string, _body?: any);
        getName(): string;
        setBody(body: any): void;
        getBody(): any;
        destroy(): void;
    }
}
declare module "dijon/Application" {
    import Game from "dijon/core/Game";
    import Mediator from "dijon/mvc/Mediator";
    import Model from "dijon/mvc/Model";
    import { INotifier, IObserver } from "dijon/interfaces";
    export default class Application implements INotifier {
        protected static instance: any;
        protected static SINGLETON_MSG: string;
        game: Game;
        protected _mediator: Mediator;
        protected _models: {
            [name: string]: Model;
        };
        protected _mediators: {
            [name: string]: Mediator;
        };
        protected _observerMap: {
            [name: string]: IObserver[];
        };
        constructor();
        protected createGame(): void;
        protected startGame(): void;
        addPlugins(): void;
        registerModel(model: Model): Model;
        retrieveModel(modelName: string): Model;
        removeModel(modelToRemove: Model): void;
        registerMediator(mediator: Mediator): void;
        retrieveMediator(mediatorName: string): Mediator;
        removeMediator(mediatorToRemove: Mediator): void;
        registerObserver(observer: IObserver): void;
        removeObserver(notificationName: string, observerToRemove: IObserver): void;
        sendNotification(notificationName: string, notficationBody?: any): void;
        private _notifyObservers(notification);
        static getInstance(): Application;
    }
}
declare module "dijon/core/State" {
    import Application from "dijon/Application";
    import Game from "dijon/core/Game";
    import GameObjectFactory from "dijon/core/GameObjectFactory";
    import Mediator from "dijon/mvc/Mediator";
    export default class State extends Phaser.State {
        protected _audio: Phaser.Sound[];
        protected _mediator: Mediator;
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
        add: GameObjectFactory;
        app: Application;
        game: Game;
    }
}
declare module "dijon/display/InvisibleButton" {
    import Sprite from "dijon/display/Sprite";
    export class InvisibleButton extends Sprite {
        private _hitWidth;
        private _hitHeight;
        constructor(x: number, y: number, name: string, w: number, h: number);
        init(): void;
        buildInterface(): void;
        private _addHitRect();
        setSize(w: any, h: any): void;
    }
}
declare module "dijon/mvc/CopyModel" {
    import Model from "dijon/mvc/Model";
    export default class CopyModel extends Model {
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
declare module "dijon/utils/Device" {
    import { IBrowser } from "dijon/interfaces";
    export default class Device {
        static IOS: string;
        static ANDROID: string;
        static UNKNOWN: string;
        static mobile: boolean;
        static mobileOS: string;
        static browser: IBrowser;
        static pixelRatio: number;
        static customPixelRatio: number;
    }
}
