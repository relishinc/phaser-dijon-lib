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
			
			this.gameLayer = this.add.group();
			this.uiLayer = this.add.group();  
		}
		
		// public methods
		/*public addToGame(obj:Phaser.Sprite | Phaser.Image | Phaser.Button | Phaser.Text | Phaser.BitmapData | Phaser.SpriteBatch | Phaser.Group): Phaser.Sprite | Phaser.Image | Phaser.Button | Phaser.Text | Phaser.BitmapData | Phaser.SpriteBatch | Phaser.Group{
			return this.gameLayer.add(obj);
		}
		
		public addToUI(obj:Phaser.Sprite | Phaser.Image | Phaser.Button | Phaser.Text | Phaser.BitmapData | Phaser.SpriteBatch | Phaser.Group): Phaser.Sprite | Phaser.Image | Phaser.Button | Phaser.Text | Phaser.BitmapData | Phaser.SpriteBatch | Phaser.Group{
			return this.uiLayer.add(obj);
		}
		*/
		
		// getter / setter
		public get addToGame():Phaser.GameObjectFactory{
			this.add.defaultGroup = this.gameLayer;
			return this.add;
		}
		
		public get addToUI():Phaser.GameObjectFactory{
			this.add.defaultGroup = this.uiLayer;
			return this.add;
		}
	}
}
