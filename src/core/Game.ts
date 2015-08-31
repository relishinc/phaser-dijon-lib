/// <reference path="./AssetManager" />
/// <reference path="./SequenceManager" />
/// <reference path="./TransitionManager" />
/// <reference path="./StorageManager" />
/// <reference path="./AudioManager" />
/// <reference path="./AnalyticsManager" />
/// <reference path="./GameObjectFactory" />

module dijon.core{
	export class Game extends Phaser.Game{
		// public variables
		// managers
		public asset:AssetManager;
		public sequence:SequenceManager;
		public transition:TransitionManager;
		public storage:StorageManager;
		public audio:AudioManager;
		public analytics:AnalyticsManager;
		public add:GameObjectFactory;
		
		// display layers
		public gameLayer:Phaser.Group;
		public uiLayer:Phaser.Group;
		
		public debugger:any = null;
		
		constructor(config:Phaser.IGameConfig){
			super(config);
		}
		
		// Phaser.Game overrides
		public boot(){ 
			super.boot();
			this.add = null;
			this.add = new GameObjectFactory(this);
			
			this.asset = new AssetManager();
			this.sequence = new SequenceManager();
			this.transition = new TransitionManager();
			this.storage = new StorageManager();
			this.audio = new AudioManager();
			this.analytics = new AnalyticsManager();
			
			this.gameLayer = this.add.group(this.world, '_game_layer');
			this.uiLayer = this.add.group(this.world, '_ui_layer');  
		}
		
		// getter / setter
		/**
		 * sets the default group for the gameObjectFactory to gameLayer before adding 
		 * this way if we pass a null group to whatever method we call 
		 * ie (this.game.addToGame.image(0, 0, key, frame));
		 * it will be added to the appropriate layer
		 */
		public get addToGame():Phaser.GameObjectFactory{
			
			this.add.defaultGroup = this.gameLayer;
			return this.add;
		}
		
		/**
		 * sets the default group for the gameObjectFactory to uiLayer before adding 
		 * this way if we pass a null group to whatever method we call 
		 * ie (this.game.addToUI.image(0, 0, key, frame));
		 * it will be added to the appropriate layer
		 */
		public get addToUI():Phaser.GameObjectFactory{
			// set the default group for the gameObjectFactory before adding
			this.add.defaultGroup = this.uiLayer;
			return this.add;
		}
	}
}
