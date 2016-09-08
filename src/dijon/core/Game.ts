/**
 * Game
 */
import {Application} from '../application';
import {IGameConfig} from '../interfaces';
import {AssetManager, TransitionManager, SequenceManager, StorageManager, AudioManager, AnalyticsManager, GameObjectFactory} from '../core';
import {Group} from '../display';
import {Notifications} from '../utils';

export class Game extends Phaser.Game {
    // public variables
    // application
    public app: Application;
    public config: IGameConfig;

    // managers
    public asset: AssetManager;
    public sequence: SequenceManager;
    public transition: TransitionManager;
    public storage: StorageManager;
    public audio: AudioManager;
    public analytics: AnalyticsManager;
    public add: GameObjectFactory;

    // signals
    public onWorldInputDisabled: Phaser.Signal = new Phaser.Signal();
    public onWorldInputEnabled: Phaser.Signal = new Phaser.Signal();

    // display layers
    public backgroundLayer: Group;
    public gameLayer: Group;
    public uiLayer: Group;
    public stageLayer: Group;

    // Phaser.Game overrides
    constructor(config: IGameConfig) {
        super(config);
    }

    public boot() {
        super.boot();

        this.app = Application.getInstance();

        // add managers
        this.asset = new AssetManager();
        this.sequence = new SequenceManager();
        this.transition = new TransitionManager();
        this.storage = new StorageManager();
        this.audio = new AudioManager();
        this.analytics = new AnalyticsManager(this.config.analytics);

        // replace Phaser.GameObjectFactory
        this.add = null;
        this.add = new GameObjectFactory(this);
        this.addLayers();
        this.addMouseCallbacks();
        this.setFactoryDefaultLayer(this.gameLayer);
    }

    public addPlugins(): void {
        if (this.config.plugins && this.config.plugins.length > 0) {
            this.config.plugins.forEach(pluginName => {
                if (typeof Phaser.Plugin[pluginName] === 'function') {
                    this.add.plugin(Phaser.Plugin[pluginName]);
                }
            });
        }
    }

    // Override this.world as the default layer that
    // .add calls will be created on.
    public setFactoryDefaultLayer(newLayer: Phaser.Group) {
        this.add.setDefaultLayer(newLayer || this.world);
    }
    // private methods
    protected addLayers(): void {
        // adds persistent background layer
        this.backgroundLayer = this.add.dGroup(0, 0, '_background_layer', true);
        this.stage.setChildIndex(this.backgroundLayer, 0);

        // adds game and ui layers
        this.gameLayer = this.add.dGroup(0, 0, '_game_layer');
        // add ui layer and set the "fixedToCamera" property to true
        // if the game's camera moves, anything in this group will stay in place
        this.uiLayer = this.add.dGroup(0, 0, '_ui_layer');
        this.uiLayer.fixedToCamera = true;

        // add a group to the Phaser.Stage (just in case)
        this.stageLayer = this.add.dGroup(0, 0, '_stage_layer', true);
    }

    protected addMouseCallbacks(): void {
        if (this.device.desktop) {
            this.input.mouse.mouseOverCallback = this.mouseOver;
            this.input.mouse.mouseOutCallback = this.mouseOut;
        }
    }

    protected mouseOut(): void {
        Application.getInstance().sendNotification(Notifications.MOUSE_LEAVE_GLOBAL);
    }

    protected mouseOver(): void {
        Application.getInstance().sendNotification(Notifications.MOUSE_ENTER_GLOBAL);
    }

    // public methods
    public disableElementInput(el: any): any {
        if (el.input && el.inputEnabled === true) {
            el.wasEnabled = true;
            el.inputEnabled = false;
        }
        if (el.children.length > 0) {
            for (var i = 0; i < el.children.length; i++) {
                this.disableElementInput(el.children[i]);
            }
        }
    }

    public enableElementInput(el: any): any {
        if (el.input && el.inputEnabled === false && el.wasEnabled) {
            el.wasEnabled = false;
            el.inputEnabled = true;
        }
        if (el.children.length > 0) {
            for (var i = 0; i < el.children.length; i++) {
                this.enableElementInput(el.children[i]);
            }
        }
    }

    public disableInput(group: Phaser.Group): any {
        return group.forEach(function (el) {
            if (el instanceof Phaser.Group) {
                return this.disableInput(el);
            } else {
                return this.disableElementInput(el);
            }
        }, this);
    }

    public enableInput(group: Phaser.Group): any {
        return group.forEach(function (el) {
            if (el instanceof Phaser.Group) {
                return this.enableInput(el);
            } else {
                return this.enableElementInput(el);
            }
        }, this);
    }

    public disableGameInput() {
        this.disableInput(this.gameLayer);
        this.onWorldInputDisabled.dispatch();
    }

    public enableGameInput() {
        this.enableInput(this.gameLayer);
        this.onWorldInputEnabled.dispatch();
    }

    /**
     * removes all items from the game layer
     * but allows the ui layer to persist
     * that way we can overlay the game without adding stuff to the phaser stage (for transitions)
     * @param {String} toState the new state we're changing to
     * @param {any} args an optional parameter. This can be used to pass in a token/object 
     * containing specific parameters for the state you are changing to. The init() function of 
     * that state must also take an object of type any.
     * @return {void}
     */
    public changeState(toState: string, args?: any): void {
        this.gameLayer.removeAll(true, true);
        return this.state.start(toState, false, false, args);
    }

    // getter / setter
    /**
     * sets the target group for the gameObjectFactory to gameLayer before adding
     * this way if we pass a null group to whatever method we call
     * ie (this.game.addToGame.image(0, 0, key, frame));
     * it will be added to the appropriate layer
     */
    public get addToGame(): GameObjectFactory {
        this.add.targetGroup = this.gameLayer;
        return this.add;
    }

    /**
     * sets the target group for the gameObjectFactory to uiLayer before adding
     * this way if we pass a null group to whatever method we call
     * ie (this.game.addToUI.image(0, 0, key, frame));
     * it will be added to the appropriate layer
     */
    public get addToBackground(): GameObjectFactory {
        this.add.targetGroup = this.backgroundLayer;
        return this.add;
    }


    public get addToUI(): GameObjectFactory {
        // set the target group for the gameObjectFactory before adding
        this.add.targetGroup = this.uiLayer;
        return this.add;
    }

    public get addToStage(): GameObjectFactory {
        // set the target group for the gameObjectFactory before adding
        this.add.targetGroup = this.stageLayer;
        return this.add;
    }

    public get addToWorld(): GameObjectFactory {
        // set the target group for the gameObjectFactory before adding
        this.add.targetGroup = this.world;
        return this.add;
    }
}