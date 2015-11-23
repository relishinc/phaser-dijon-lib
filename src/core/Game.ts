/// <reference path="./AssetManager" />
/// <reference path="./SequenceManager" />
/// <reference path="./TransitionManager" />
/// <reference path="./StorageManager" />
/// <reference path="./AudioManager" />
/// <reference path="./AnalyticsManager" />
/// <reference path="./GameObjectFactory" />
/// <reference path="../interfaces/IGameConfig" />
/// <reference path="../utils/addons.ts" />

module dijon.core {
	export class Game extends Phaser.Game {
		// public variables
		
		// application
		public app: mvc.Application;
		public config: interfaces.IGameConfig;
		
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
		public gameLayer: dijon.display.Group;
		public uiLayer: dijon.display.Group;
		public stageLayer: dijon.display.Group;
		
		// stats (fps debug) requires stats.min.js to be loaded
		// https://github.com/mrdoob/stats.js
		public stats: Stats | any;
		
		// Phaser.Game overrides
		constructor(config: interfaces.IGameConfig) {
			super(config);
		}

		public boot() {
			super.boot();

			this.app = mvc.Application.getInstance();
			
			// add managers
			this.asset = new AssetManager();
			this.sequence = new SequenceManager();
			this.transition = new TransitionManager();
			this.storage = new StorageManager();
			this.audio = new AudioManager();
			this.analytics = new AnalyticsManager();
			
			// replace Phaser.GameObjectFactory
			this.add = null;
			this.add = new GameObjectFactory(this);
			
			// add stats js
			if (this.config.stats === true) { 
				this.addStats();
			}
			
			this.addLayers();
		}
		
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
		};
		
		protected addStats(): void { 
			try {
				this.stats = new Stats();
				this.stats.setMode(0);
				this.stats.domElement.style.position = 'absolute';
				this.stats.domElement.style.top = '0px';
				this.stats.domElement.style.left = '0px';
				this.canvas.parentElement.appendChild(this.stats.domElement);
			} catch (e) { 
				console.log("Couldn't enable stats")
			}
			
		};
		
		// public methods
		public disableElementInput(el: any): any {
			if (el.input && el.input.enabled === true) {
				el.wasEnabled = true;
				el.input.enabled = false;
			}
			if (el.children.length > 0) {
				for (var i = 0; i < el.children.length; i++) {
					this.disableElementInput(el.children[i]);
				}
			}
		};

		public enableElementInput(el: any): any {
			if (el.input && el.input.enabled === false && el.wasEnabled) {
				el.wasEnabled = false;
				el.input.enabled = true;
			}
			if (el.children.length > 0) {
				for (var i = 0; i < el.children.length; i++) {
					this.enableElementInput(el.children[i]);
				}
			}
		};

		public disableInput(group: Phaser.Group): any {
			return group.forEach(function(el) {
				if (el instanceof Phaser.Group) {
					return this.disableInput(el);
				} else {
					return this.disableElementInput(el);
				}
			}, this);
		};

		public enableInput(group: Phaser.Group): any {
			return group.forEach(function(el) {
				if (el instanceof Phaser.Group) {
					return this.enableInput(el);
				} else {
					return this.enableElementInput(el);
				}
			}, this);
		};

		public disableGameInput() {
			this.disableInput(this.gameLayer);
			this.onWorldInputDisabled.dispatch();
		};

		public enableGameInput() {
			this.enableInput(this.gameLayer);
			this.onWorldInputEnabled.dispatch();
		};
		
		public beginStats(): void { 
			if (!this.stats)
				return;
			this.stats.begin();
		};
		
		public endStats(): void { 
			if (!this.stats)
				return;
			this.stats.end();
		};
		
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
		 * sets the default group for the gameObjectFactory to gameLayer before adding 
		 * this way if we pass a null group to whatever method we call 
		 * ie (this.game.addToGame.image(0, 0, key, frame));
		 * it will be added to the appropriate layer
		 */
		public get addToGame(): core.GameObjectFactory {
			this.add.defaultGroup = this.gameLayer;
			return this.add;
		};
		
		/**
		 * sets the default group for the gameObjectFactory to uiLayer before adding 
		 * this way if we pass a null group to whatever method we call 
		 * ie (this.game.addToUI.image(0, 0, key, frame));
		 * it will be added to the appropriate layer
		 */
		public get addToUI(): core.GameObjectFactory {
			// set the default group for the gameObjectFactory before adding
			this.add.defaultGroup = this.uiLayer;
			return this.add;
		};

		public get addToStage(): core.GameObjectFactory {
			// set the default group for the gameObjectFactory before adding
			this.add.defaultGroup = this.stageLayer;
			return this.add;
		};
	}
}