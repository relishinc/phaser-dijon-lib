import Application from '../Application';
import AssetManager from "./AssetManager";
import SequenceManager from "./SequenceManager";
import TransitionManager from "./TransitionManager";
import StorageManager from "./StorageManager";
import AudioManager from "./AudioManager";
import AnalyticsManager from "./AnalyticsManager";
import GameObjectFactory from "./GameObjectFactory";
import Sprite from "../display/Sprite";
import Group from "../display/Group";
import {IGameConfig} from '../interfaces';

export default class Game extends Phaser.Game {
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

    public setDefault
    // private methods
    protected addLayers(): void {
        // adds game and ui layers
        this.gameLayer = this.add.dGroup(0, 0, '_game_layer');
        // add ui layer and set the "fixedToCamera" property to true
        // if the game's camera moves, anything in this group will stay in place
        this.uiLayer = this.add.dGroup(0, 0, '_ui_layer');
        this.uiLayer.fixedToCamera = true;
			
        // add a group to the Phaser.Stage (just in case)
        this.stageLayer = this.add.dGroup(0, 0, '_stage_layer', true);
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
        return group.forEach(function(el) {
            if (el instanceof Phaser.Group) {
                return this.disableInput(el);
            } else {
                return this.disableElementInput(el);
            }
        }, this);
    }

    public enableInput(group: Phaser.Group): any {
        return group.forEach(function(el) {
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
     * @return {void}
     */
    public changeState(toState: string): void {
        this.gameLayer.removeAll(true, true);
        return this.state.start(toState, false, false);
    };
				
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
    };

    /**
     * sets the target group for the gameObjectFactory to uiLayer before adding 
     * this way if we pass a null group to whatever method we call 
     * ie (this.game.addToUI.image(0, 0, key, frame));
     * it will be added to the appropriate layer
     */
    public get addToUI(): GameObjectFactory {
        // set the target group for the gameObjectFactory before adding
        this.add.targetGroup = this.uiLayer;
        return this.add;
    };

    public get addToStage(): GameObjectFactory {
        // set the target group for the gameObjectFactory before adding
        this.add.targetGroup = this.stageLayer;
        return this.add;
    };

    public get addToWorld(): GameObjectFactory {
        // set the target group for the gameObjectFactory before adding
        this.add.targetGroup = this.world;
        return this.add;
    };
}