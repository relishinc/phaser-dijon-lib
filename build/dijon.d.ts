/// <reference path="typescript/phaser.comments.d.ts" />
/// <reference path="typescript/spine.d.ts" />
declare module "dijon/interfaces/IAsset" {
    export interface IAsset {
        url: string;
        type: string;
        extensions?: string;
        required?: boolean;
        id?: string;
        key?: string;
        resolution: number;
    }
}
declare module "dijon/interfaces/IAssetList" {
    import { IAsset } from "dijon/interfaces/IAsset";
    export interface IAssetList {
        autoload: boolean;
        required: boolean;
        assets: Array<IAsset>;
    }
}
declare module "dijon/interfaces/IBrowser" {
    export interface IBrowser {
        firefox?: boolean;
        ie?: boolean;
        safari?: boolean;
        chrome?: boolean;
    }
}
declare module "dijon/interfaces/IGameConfig" {
    export interface IGameConfig extends Phaser.IGameConfig {
        resolution?: number;
        analytics?: boolean;
        plugins?: string[];
    }
}
declare module "dijon/interfaces/INotification" {
    export interface INotification {
        getName(): string;
        getBody(): any;
        setBody(body: any): void;
    }
}
declare module "dijon/interfaces/INotifier" {
    export interface INotifier {
        sendNotification(notificationName: string, notificationBody?: any): any;
    }
}
declare module "dijon/interfaces/IObserver" {
    import { INotification } from "dijon/interfaces/INotification";
    export interface IObserver {
        onRegister(): any;
        onRemoved(): any;
        destroy(): any;
        listNotificationInterests(): string[];
        handleNotification(notification: INotification): any;
    }
}
declare module "dijon/interfaces/IPathConfig" {
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
}
declare module "dijon/interfaces/ITransitionHandler" {
    export interface ITransitionHandler {
        transitionInComplete: Phaser.Signal;
        transitionOutComplete: Phaser.Signal;
        transitionOut?: Function;
        transitionIn?: Function;
    }
}
declare module "dijon/interfaces/IPreloadHandler" {
    import { ITransitionHandler } from "dijon/interfaces/ITransitionHandler";
    export interface IPreloadHandler extends ITransitionHandler {
        loadStart(): any;
        loadProgress(progress?: number): any;
        loadComplete(): any;
    }
}
declare module "dijon/interfaces/ISound" {
    export interface ISound {
        isAudioSprite?: boolean;
        url?: string;
        key?: string;
        __isAudioSprite?: boolean;
        eventToDispatch?: Phaser.Signal;
        decoded?: boolean;
    }
}
declare module "dijon/interfaces/ITiledmapAssets" {
    import { IAsset } from "dijon/interfaces/IAsset";
    export interface ITiledmapAssets extends IAsset {
        assets: Array<IAsset>;
    }
}
declare module "dijon/interfaces/ITransition" {
    import { ITransitionHandler, IPreloadHandler } from "dijon/interfaces";
    export interface ITransition {
        inHandler?: ITransitionHandler;
        preloadHandler?: IPreloadHandler;
        outHandler: ITransitionHandler;
    }
}
declare module "dijon/interfaces" {
    export { IAsset } from "dijon/interfaces/IAsset";
    export { IAssetList } from "dijon/interfaces/IAssetList";
    export { IBrowser } from "dijon/interfaces/IBrowser";
    export { IGameConfig } from "dijon/interfaces/IGameConfig";
    export { INotification } from "dijon/interfaces/INotification";
    export { INotifier } from "dijon/interfaces/INotifier";
    export { IObserver } from "dijon/interfaces/IObserver";
    export { IPathConfig } from "dijon/interfaces/IPathConfig";
    export { IPreloadHandler } from "dijon/interfaces/IPreloadHandler";
    export { ISound } from "dijon/interfaces/ISound";
    export { ITiledmapAssets } from "dijon/interfaces/ITiledmapAssets";
    export { ITransition } from "dijon/interfaces/ITransition";
    export { ITransitionHandler } from "dijon/interfaces/ITransitionHandler";
}
declare module "dijon/utils/Device" {
    import { IBrowser } from "dijon/interfaces";
    export class Device {
        static IOS: string;
        static ANDROID: string;
        static UNKNOWN: string;
        static mobile: boolean;
        static cocoon: boolean;
        static mobileOS: string;
        static browser: IBrowser;
        static pixelRatio: number;
        static customPixelRatio: number;
    }
}
declare module "dijon/utils/Logger" {
    export class Logger {
        static enabled: boolean;
        static log(instance: any, ...args: any[]): any;
    }
}
declare module "dijon/utils/Notifications" {
    export class Notifications {
        static ASSET_MANAGER_DATA_SET: string;
        static ASSET_MANAGER_ASSETS_CLEARED: string;
        static MOUSE_LEAVE_GLOBAL: string;
        static MOUSE_ENTER_GLOBAL: string;
    }
}
declare module "dijon/utils/Textures" {
    export class Textures {
        private static game;
        static rect(width?: number, height?: number, color?: number, alpha?: number, fill?: boolean, lineColor?: number, lineThickness?: number, lineAlpha?: number, outline?: boolean): PIXI.Texture;
        static roundedRect(width?: number, height?: number, radius?: number, color?: number, alpha?: number, fill?: boolean, lineColor?: number, lineThickness?: number, lineAlpha?: number, outline?: boolean): PIXI.Texture;
        static square(size?: number, color?: number, alpha?: number, fill?: boolean, lineColor?: number, lineThickness?: number, lineAlpha?: number, outline?: boolean): PIXI.Texture;
        static circle(diameter?: number, color?: number, alpha?: number, fill?: boolean, lineColor?: number, lineThickness?: number, lineAlpha?: number, outline?: boolean): PIXI.Texture;
        static ellipse(width?: number, height?: number, color?: number, alpha?: number, fill?: boolean, lineColor?: number, lineThickness?: number, lineAlpha?: number, outline?: boolean): PIXI.Texture;
    }
}
declare module "dijon/display/BitmapText" {
    export class BitmapText extends Phaser.BitmapText {
        private _text;
        private _glyphs;
        protected _autoFlatten: boolean;
        protected _color: number;
        protected _isImage: boolean;
        protected _internalImage: Phaser.Image;
        constructor(x?: number, y?: number, font?: string, text?: string, size?: number, align?: string, color?: number, smoothing?: boolean, autoFlatten?: boolean, makeImage?: boolean);
        makeImage(): void;
        destroyGlyphs(): void;
        flatten(delay?: number): void;
        unFlatten(): void;
        autoFlatten: boolean;
        color: number;
        text: string;
        realWidth: number;
        realHeight: number;
        protected _generateCachedSprite: () => void;
        protected _alignToNearestPixel(): void;
        highlight(highlightStr: string, highlightColor: number): boolean;
        anchorAsImage(x: number, y?: number): void;
        setHitAreaToBounds: () => void;
    }
}
declare module "dijon/display/Component" {
    import { Game } from "dijon/core";
    import { Sprite, Group } from "dijon/display";
    export class Component {
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
    import { Game, GameObjectFactory } from "dijon/core";
    import { Mediator } from "dijon/mvc";
    import { Component } from "dijon/display/Component";
    export class Group extends Phaser.Group {
        name: string;
        game: Game;
        protected _hasComponents: boolean;
        protected _componentKeys: string[];
        protected _components: {
            [componentName: string]: Component;
        };
        protected _mediator: Mediator;
        constructor(x?: number, y?: number, name?: string, addToStage?: boolean, components?: Component[], enableBody?: boolean, physicsBodyType?: number);
        static CreateFromData(data: any): Group;
        assignPrefab(object: any): void;
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
        flatten(delay?: number): void;
        unFlatten(): void;
        removeMediator(): void;
        addInternal: GameObjectFactory;
    }
}
declare module "dijon/display/Sprite" {
    import { Game } from "dijon/core";
    import { Component } from "dijon/display/Component";
    export class Sprite extends Phaser.Sprite {
        name: string;
        game: Game;
        protected _hasComponents: boolean;
        protected _componentKeys: string[];
        protected _components: {
            [componentName: string]: Component;
        };
        constructor(x?: number, y?: number, key?: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number, name?: string, components?: Component[]);
        static CreateFromData(data: any): Sprite;
        assignPrefab(object: any): void;
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
        flatten(delay?: number): void;
        unFlatten(): void;
        resolution: number;
    }
}
declare module "dijon/display/InvisibleButton" {
    import { Sprite } from "dijon/display/Sprite";
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
declare module "dijon/display/NineSliceImage" {
    import { Group } from "dijon/display/Group";
    export class NineSliceImage extends Group {
        key: string;
        texturePath: string;
        fillMiddle: boolean;
        topHeight: number;
        rightWidth: number;
        bottomHeight: number;
        leftWidth: number;
        private __width;
        private __height;
        private _size;
        private _displayLayer;
        private _inputLayer;
        tl: Phaser.Image;
        t: Phaser.TileSprite;
        tr: Phaser.Image;
        r: Phaser.TileSprite;
        br: Phaser.Image;
        b: Phaser.TileSprite;
        bl: Phaser.Image;
        l: Phaser.TileSprite;
        tile: Phaser.TileSprite;
        private _interactiveBacking;
        private _inputEnabled;
        private _currentBounds;
        constructor(x: number, y: number, width: number, height: number, key: string, texturePath: string, fillMiddle?: boolean, topHeight?: number, rightWidth?: number, bottomHeight?: number, leftWidth?: number);
        private _build();
        private _addInteractiveBacking();
        private _setSize();
        private _addInput();
        private _removeInput();
        dUnflatten(): void;
        dFlatten(): void;
        inputEnabled: boolean;
        events: Phaser.Events;
        input: Phaser.InputHandler;
        hSize: number;
        vSize: number;
        setSize(width: number, height: number): void;
        interactiveBacking: Phaser.Image;
    }
}
declare module "dijon/display/Spine" {
    import { Game } from "dijon/core";
    export class Spine extends PIXI.spine.Spine {
        assetName: string;
        skeletonScale: number;
        static DEFAULT_SPEED: number;
        debug: boolean;
        game: Game;
        private _created;
        onCreate: Phaser.Signal;
        onAnimationComplete: Phaser.Signal;
        onMeshSwap: Phaser.Signal;
        protected _canUpdate: boolean;
        protected _paused: boolean;
        protected _speed: number;
        protected _skeletonScale: number;
        protected _boundsOffset: Phaser.Point;
        protected _boundsWidthScale: number;
        protected _boundsHeightScale: number;
        protected _currentBounds: PIXI.Rectangle;
        physicsSprite: Phaser.Sprite;
        protected _physicsOffset: {
            x: number;
            y: number;
        };
        protected _physicsEnabled: boolean;
        nonMeshVersion: boolean;
        constructor(assetName?: string, x?: number, y?: number, skeletonScale?: number);
        private _onCreateInternal();
        protected _create(): void;
        destroy(): void;
        update(dt?: number): void;
        initPhysics(type: number, offset: {
            x?: number;
            y?: number;
        }): boolean;
        disablePhysics(): void;
        enablePhysics(): void;
        loadNonMeshVersion(): void;
        static createSpineData(assetName: string, skeletonScale?: number): any;
        static atlasCallbackFunction(line: any, callback: any): void;
        paused: boolean;
        speed: number;
        boundsOffset: Phaser.Point;
        boundsWidthScale: number;
        boundsHeightScale: number;
        getBounds(): PIXI.Rectangle;
        protected _createBounds(): PIXI.Rectangle;
        setScale(x?: number, y?: number): void;
        width: number;
        height: number;
        body: any;
        protected static INITIALIZED: boolean;
        protected static game: Game;
        protected static nonMeshTimer: Phaser.TimerEvent;
        protected static onNonMeshFPS: Phaser.Signal;
        static LOAD_NON_MESH: boolean;
        static AUTO_MESH: boolean;
        static DEFAULT_NON_MESH_SUFFIX: string;
        static NON_MESH_SUFFIX: string;
        static DEFAULT_NON_MESH_FPS: number;
        static NON_MESH_FPS: number;
        static initialize(): void;
        static detectAutoMesh(): void;
        static destroyNonMeshTimer(): void;
        static checkNonMeshThreshold(): void;
        static checkAutoMeshFPS(): void;
        static disableAdvancedTiming(): void;
        static setAutoMesh(enabled?: boolean, nonMeshSuffix?: string, nonMeshFPS?: number): void;
    }
}
declare module "dijon/display/Spine2" {
    import { Game } from "dijon/core";
    export class Spine2 extends PIXI.spine.Spine {
        assetName: string;
        skeletonScale: number;
        static DEFAULT_SPEED: number;
        debug: boolean;
        game: Game;
        private _created;
        onCreate: Phaser.Signal;
        onAnimationComplete: Phaser.Signal;
        onMeshSwap: Phaser.Signal;
        protected _canUpdate: boolean;
        protected _paused: boolean;
        protected _speed: number;
        protected _skeletonScale: number;
        protected _boundsOffset: Phaser.Point;
        protected _boundsWidthScale: number;
        protected _boundsHeightScale: number;
        protected _currentBounds: PIXI.Rectangle;
        protected _physicsOffset: {
            x: number;
            y: number;
        };
        protected _physicsEnabled: boolean;
        nonMeshVersion: boolean;
        constructor(assetName?: string, x?: number, y?: number, skeletonScale?: number);
        private _onCreateInternal();
        protected _create(): void;
        destroy(): void;
        update(dt?: number): void;
        initPhysics(type: number): boolean;
        disablePhysics(): void;
        enablePhysics(): void;
        loadNonMeshVersion(): void;
        static createSpineData(assetName: string, skeletonScale?: number): any;
        static atlasCallbackFunction(line: any, callback: any): void;
        paused: boolean;
        speed: number;
        boundsOffset: Phaser.Point;
        boundsWidthScale: number;
        boundsHeightScale: number;
        getBounds(): PIXI.Rectangle;
        protected _createBounds(): PIXI.Rectangle;
        setScale(x?: number, y?: number): void;
        width: number;
        height: number;
        arcadeBody: Phaser.Physics.Arcade.Body;
        created: boolean;
        protected static INITIALIZED: boolean;
        protected static game: Game;
        protected static nonMeshTimer: Phaser.TimerEvent;
        protected static onNonMeshFPS: Phaser.Signal;
        static LOAD_NON_MESH: boolean;
        static AUTO_MESH: boolean;
        static DEFAULT_NON_MESH_SUFFIX: string;
        static NON_MESH_SUFFIX: string;
        static DEFAULT_NON_MESH_FPS: number;
        static NON_MESH_FPS: number;
        static initialize(): void;
        static detectAutoMesh(): void;
        static destroyNonMeshTimer(): void;
        static checkNonMeshThreshold(): void;
        static checkAutoMeshFPS(): void;
        static disableAdvancedTiming(): void;
        static setAutoMesh(enabled?: boolean, nonMeshSuffix?: string, nonMeshFPS?: number): void;
    }
}
declare module "dijon/display/Text" {
    import { Game } from "dijon/core";
    export class Text extends Phaser.Text {
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
        static CreateFromData(data: any): Text;
        assignPrefab(object: any): void;
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
        realHeight: number;
        realWidth: number;
    }
}
declare module "dijon/display" {
    export { BitmapText } from "dijon/display/BitmapText";
    export { Component } from "dijon/display/Component";
    export { Group } from "dijon/display/Group";
    export { InvisibleButton } from "dijon/display/InvisibleButton";
    export { NineSliceImage } from "dijon/display/NineSliceImage";
    export { Spine } from "dijon/display/Spine";
    export { Spine2 } from "dijon/display/Spine2";
    export { Sprite } from "dijon/display/Sprite";
    export { Text } from "dijon/display/Text";
}
declare module "dijon/utils/Placeholders" {
    export class Placeholders {
        private static game;
        static image(x: number, y: number, texture: any, name?: string): Phaser.Image;
        static button(x?: number, y?: number, width?: number, height?: number, autoSize?: boolean, text?: string, callback?: Function, callbackContext?: any, defaultColor?: number, overColor?: number, downColor?: number): Phaser.Sprite;
    }
}
declare module "dijon/utils/Time" {
    export class Time {
        static delayedCall(delayInMilliseconds: number, callback: Function, callbackContext: any, ...params: any[]): any;
    }
}
declare module "dijon/utils/Util" {
    export class Util {
        static isNumber(value: string): boolean;
    }
}
declare module "dijon/utils/Log" {
    export class Log {
        private static MAX_LOG_LINES;
        private static LINE_SPACING;
        private static static_logLines;
        private static static_logLinesText;
        private static static_backOffset;
        private static static_window;
        private static static_windowBG;
        private static static_gameInstance;
        private static static_gameHalfHeight;
        static init(): void;
        static show(): void;
        static hide(): void;
        static debug(pLine: string, ...pOptionalParams: any[]): void;
        static warn(pLine: string, ...pOptionalParams: any[]): void;
        static error(pLine: string, ...pOptionalParams: any[]): void;
        static isVisible(): boolean;
        private static _createWindowGroup();
        private static _addLine(pIndex, pColor);
    }
}
declare module "dijon/utils/PrefabBuilder" {
    import { State } from "dijon/core";
    export class PrefabBuilder {
        static prefabClasses: {};
        static addPrefabClass(newClass: any, importName: string, overrideExisting?: boolean): void;
        static createSceneFrom(data: {
            prefabs: any[];
        }, scene: State): void;
        static createPrefabObjects(data: any, scene: State): any;
        static createPrefab(data: any): any;
    }
}
declare module "dijon/utils" {
    export { Device } from "dijon/utils/Device";
    export { Logger } from "dijon/utils/Logger";
    export { Notifications } from "dijon/utils/Notifications";
    export { Placeholders } from "dijon/utils/Placeholders";
    export { Textures } from "dijon/utils/Textures";
    export { Time } from "dijon/utils/Time";
    export { Util } from "dijon/utils/Util";
    export { Log } from "dijon/utils/Log";
    export { PrefabBuilder } from "dijon/utils/PrefabBuilder";
}
declare module "dijon/core/AnalyticsManager" {
    export class AnalyticsManager {
        enabled: boolean;
        category: string;
        private _trackerId;
        private _startedWithTrackerId;
        constructor(enabled?: boolean, category?: string);
        trackEvent(action?: string, label?: string, value?: string): void;
        trackOmnitureEvent(gameName: string, activity: string, isGameEvent: boolean): boolean;
        private _startWithTrackerId();
        trackerId: string;
        active: boolean;
        ga: Function;
    }
    export class AnalyticsException {
        message: string;
        name: string;
        constructor(message: string);
    }
}
declare module "dijon/core/AssetManager" {
    import { Application } from "dijon/application";
    import { Game } from "dijon/core";
    import { INotifier, IPathConfig, IAsset } from "dijon/interfaces";
    export class AssetManager implements INotifier {
        protected app: Application;
        private _data;
        private _baseURL;
        private _pathObj;
        private _assetPath;
        private _dataPath;
        private _spriteSheetPath;
        private _imgPath;
        private _videoPath;
        private _spinePath;
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
        static VIDEO: string;
        static ATLAS: string;
        static TEXT: string;
        static JSON: string;
        static TILEMAP: string;
        static TILEDMAP: string;
        static TILEDMAP_TILESET: string;
        static TILEDMAP_LAYER: string;
        static PHYSICS: string;
        static SPINE: string;
        static BITMAP_FONT: string;
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
        loadTilemap(key: string): Phaser.Loader;
        loadTiledmap(key: string, assets: IAsset[]): any;
        loadTiledmapImage(key: string, tilesetImageType: string, asset: IAsset): void;
        loadPhysics(key: string): Phaser.Loader;
        loadAtlas(url: string, resolution?: any): Phaser.Loader | string;
        loadImage(url: string, resolution?: any): Phaser.Loader | string;
        loadVideo(url: string, resolution?: any): Phaser.Loader | string;
        loadSpine(url: string, resolution?: any): string | void;
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
        private clearImage(url);
        clearSpineAsset(id: string): void;
        hasLoadedAssets(id: string): boolean;
        sendNotification(notificationName: string, notificationBody?: any): void;
        baseURL: string;
        paths: IPathConfig;
        resolution: number;
        soundDecodingModifier: number;
        cacheBustVersion: string | number;
    }
}
declare module "dijon/core/AudioManager" {
    import { Game } from "dijon/core";
    export class AudioManager {
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
        getSound(key: string, volume?: number, loop?: boolean, forceRestart?: boolean): Phaser.Sound;
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
declare module "dijon/core/Game" {
    import { Application } from "dijon/application";
    import { IGameConfig } from "dijon/interfaces";
    import { AssetManager, TransitionManager, SequenceManager, StorageManager, AudioManager, AnalyticsManager, GameObjectFactory } from "dijon/core";
    import { Group } from "dijon/display";
    export class Game extends Phaser.Game {
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
        backgroundLayer: Group;
        gameLayer: Group;
        uiLayer: Group;
        stageLayer: Group;
        constructor(config: IGameConfig);
        boot(): void;
        addPlugins(): void;
        setFactoryDefaultLayer(newLayer: Phaser.Group): void;
        protected addLayers(): void;
        protected addMouseCallbacks(): void;
        protected mouseOut(): void;
        protected mouseOver(): void;
        disableElementInput(el: any): any;
        enableElementInput(el: any): any;
        disableInput(group: Phaser.Group): any;
        enableInput(group: Phaser.Group): any;
        disableGameInput(): void;
        enableGameInput(): void;
        changeState(toState: string, args?: any): void;
        addToGame: GameObjectFactory;
        addToBackground: GameObjectFactory;
        addToUI: GameObjectFactory;
        addToStage: GameObjectFactory;
        addToWorld: GameObjectFactory;
    }
}
declare module "dijon/core/GameObjectFactory" {
    import { Text, Group, Sprite, Component, BitmapText } from "dijon/display";
    export class GameObjectFactory extends Phaser.GameObjectFactory {
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
        bitmapText(x?: number, y?: number, font?: string, text?: string, size?: number, group?: Phaser.Group): Phaser.BitmapText;
        dSprite(x?: number, y?: number, key?: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number, name?: string, components?: Component[], group?: Phaser.Group): Sprite;
        dGroup(x?: number, y?: number, name?: string, addToStage?: boolean, components?: Component[], enableBody?: boolean, physicsBodyType?: number, group?: Phaser.Group): Group;
        dText(x: number, y: number, text?: string, fontName?: string, fontSize?: number, fontColor?: string, fontAlign?: string, wordWrap?: boolean, width?: number, lineSpacing?: number, settings?: Object, group?: Phaser.Group): Text;
        dBitmapText(x?: number, y?: number, font?: string, text?: string, size?: number, align?: string, color?: number, smoothing?: boolean, autoFlatten?: boolean, makeImage?: boolean, group?: Phaser.Group): BitmapText;
        spine(assetName?: string, x?: number, y?: number, group?: Phaser.Group): any;
        setDefaultLayer(value: Phaser.Group): void;
        defaultLayer: Phaser.Group;
        targetGroup: Phaser.Group;
    }
}
declare module "dijon/core/SequenceManager" {
    import { Game } from "dijon/core";
    export class SequenceManager {
        game: Game;
        private _defaultInterval;
        constructor();
        private _executeMethod(sequence, context, callback, callbackContext);
        run(sequence: Array<Function>, context: Object, interval: number, completeCallback: Function, completeCallbackContext: Object): void;
    }
}
declare module "dijon/core/State" {
    import { Application } from "dijon/application";
    import { Game, GameObjectFactory } from "dijon/core";
    import { Mediator } from "dijon/mvc";
    export class State extends Phaser.State {
        prefabs: {
            [name: string]: any;
        };
        groups: {
            [name: string]: any;
        };
        protected _audio: Phaser.Sound[];
        protected _mediator: Mediator;
        protected _sceneData: {
            prefabs: any[];
        };
        constructor();
        init(args?: any): void;
        preload(): void;
        createPrefabFromData(prefData: any): any;
        assignPrefab(object: any): void;
        protected _findPrefab(name: string): Phaser.Image;
        protected _findGroup(name: string): Phaser.Group;
        create(): void;
        shutdown(removeMediator?: boolean, removeAudio?: boolean): void;
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
declare module "dijon/core/StorageManager" {
    import { Game } from "dijon/core";
    export class StorageManager {
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
declare module "dijon/core/TransitionManager" {
    import { Game } from "dijon/core";
    import { ITransitionHandler, IPreloadHandler } from "dijon/interfaces";
    export class TransitionManager {
        game: Game;
        onTransitionOutComplete: Phaser.Signal;
        onTransitionInComplete: Phaser.Signal;
        private _isInTransition;
        private _transition;
        private _transitions;
        private _exceptions;
        private _fromState;
        private _toState;
        private _args;
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
        to(state: string, args?: any): void;
        transitionIn(): void;
        canTransitionOut(): boolean;
        transitionOut(): void;
        isInTransition: boolean;
    }
}
declare module "dijon/core" {
    export { AnalyticsManager, AnalyticsException } from "dijon/core/AnalyticsManager";
    export { AssetManager } from "dijon/core/AssetManager";
    export { AudioManager } from "dijon/core/AudioManager";
    export { Game } from "dijon/core/Game";
    export { GameObjectFactory } from "dijon/core/GameObjectFactory";
    export { SequenceManager } from "dijon/core/SequenceManager";
    export { State } from "dijon/core/State";
    export { StorageManager } from "dijon/core/StorageManager";
    export { TransitionManager } from "dijon/core/TransitionManager";
}
declare module "dijon/mvc/Model" {
    import { Application } from "dijon/application";
    import { Game } from "dijon/core";
    export class Model {
        private modelName;
        app: Application;
        game: Game;
        protected _data: any;
        static MODEL_NAME: string;
        constructor(dataKey?: string, modelName?: string);
        onRegister(): void;
        onRemoved(): void;
        protected getKeyExists(key: string): boolean;
        setData(dataKey: string): any;
        getData(): any;
        destroy(): void;
        name: string;
    }
}
declare module "dijon/mvc/CopyModel" {
    import { Model } from "dijon/mvc/Model";
    export class CopyModel extends Model {
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
declare module "dijon/mvc/Mediator" {
    import { Application } from "dijon/application";
    import { IObserver, INotification } from "dijon/interfaces";
    import { Game } from "dijon/core";
    export class Mediator implements IObserver {
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
declare module "dijon/mvc/Notification" {
    import { INotification } from "dijon/interfaces";
    export class Notification implements INotification {
        private _name;
        private _body;
        constructor(_name: string, _body?: any);
        getName(): string;
        setBody(body: any): void;
        getBody(): any;
        destroy(): void;
    }
}
declare module "dijon/mvc" {
    export { CopyModel } from "dijon/mvc/CopyModel";
    export { Mediator } from "dijon/mvc/Mediator";
    export { Model } from "dijon/mvc/Model";
    export { Notification } from "dijon/mvc/Notification";
}
declare module "dijon/application/Application" {
    import { INotifier, IObserver } from "dijon/interfaces";
    import { Mediator, Model } from "dijon/mvc";
    import { Game } from "dijon/core";
    export class Application implements INotifier {
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
        private static _hashQuery;
        static static_debugMode: boolean;
        constructor();
        protected windowHashChange(): void;
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
        private static _getHashQuery();
        static getInstance(): Application;
        static queryVar(variableId: string): any;
    }
}
declare module "dijon/application" {
    export { Application } from "dijon/application/Application";
}
declare module "lib" {
    export * from "dijon/application";
    export * from "dijon/core";
    export * from "dijon/display";
    export * from "dijon/interfaces";
    export * from "dijon/mvc";
    export * from "dijon/utils";
}
