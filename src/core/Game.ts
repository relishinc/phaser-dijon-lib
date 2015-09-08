/// <reference path="./AssetManager" />
/// <reference path="./SequenceManager" />
/// <reference path="./TransitionManager" />
/// <reference path="./StorageManager" />
/// <reference path="./AudioManager" />
/// <reference path="./AnalyticsManager" />
/// <reference path="./GameObjectFactory" />
/// <reference path="../interfaces/IGameConfig" />

module dijon.core{
	export class Game extends Phaser.Game{
		// public variables
		// application
		public app:mvc.Application;
		
		// managers
		public asset:AssetManager;
		public sequence:SequenceManager;
		public transition:TransitionManager;
		public storage:StorageManager;
		public audio:AudioManager;
		public analytics:AnalyticsManager;
		public add:GameObjectFactory;
		
		// display layers
		public gameLayer:dijon.display.Group;
		public uiLayer:dijon.display.Group;
		public stageLayer:dijon.display.Group;
		
		// Phaser.Game overrides
		constructor(config:interfaces.IGameConfig){
			super(config);
		}
		
		public boot(){ 
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
		/**
		 * removes all items from the game layer
		 * but allows the ui layer to persist
		 * that way we can overlay the game without adding stuff to the phaser stage (for transitions)
		 * @param {String} toState the new state we're changing to
		 * @return {void}
		 */
		public changeState(toState:string):void{
			this.gameLayer.removeAll(true, true);
			return this.state.start(toState, false, false);
		}
				
		// getter / setter
		/**
		 * sets the default group for the gameObjectFactory to gameLayer before adding 
		 * this way if we pass a null group to whatever method we call 
		 * ie (this.game.addToGame.image(0, 0, key, frame));
		 * it will be added to the appropriate layer
		 */
		public get addToGame():core.GameObjectFactory{
			this.add.defaultGroup = this.gameLayer;
			return this.add;
		}
		
		/**
		 * sets the default group for the gameObjectFactory to uiLayer before adding 
		 * this way if we pass a null group to whatever method we call 
		 * ie (this.game.addToUI.image(0, 0, key, frame));
		 * it will be added to the appropriate layer
		 */
		public get addToUI():core.GameObjectFactory{
			// set the default group for the gameObjectFactory before adding
			this.add.defaultGroup = this.uiLayer;
			return this.add;
		}
		
		public get addToStage():core.GameObjectFactory{
			// set the default group for the gameObjectFactory before adding
			this.add.defaultGroup = this.stageLayer;
			return this.add;
		}
	}
}
