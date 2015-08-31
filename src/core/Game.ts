/// <reference path="./AssetManager" />
/// <reference path="./SequenceManager" />
/// <reference path="./TransitionManager" />
/// <reference path="./StorageManager" />
/// <reference path="./AudioManager" />
/// <reference path="./AnalyticsManager" />

module dijon.core{
	export class Game extends Phaser.Game{
		// public variables
		// managers
		public asset:dijon.core.AssetManager;
		public sequence:dijon.core.SequenceManager;
		public transition:dijon.core.TransitionManager;
		public storage:dijon.core.StorageManager;
		public audio:dijon.core.AudioManager;
		public analytics:dijon.core.AnalyticsManager;
		
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
			
			this.asset = new dijon.core.AssetManager();
			this.sequence = new dijon.core.SequenceManager();
			this.transition = new dijon.core.TransitionManager();
			this.storage = new dijon.core.StorageManager();
			this.audio = new dijon.core.AudioManager();
			this.analytics = new dijon.core.AnalyticsManager();
			
			this.gameLayer = this.add.group();
			this.uiLayer = this.add.group();  
		}
		
		// public methods
		public addToGame(obj:Phaser.Sprite | Phaser.Image | Phaser.Button | Phaser.Text | Phaser.BitmapData | Phaser.SpriteBatch | Phaser.Group): Phaser.Sprite | Phaser.Image | Phaser.Button | Phaser.Text | Phaser.BitmapData | Phaser.SpriteBatch | Phaser.Group{
			return this.gameLayer.add(obj);
		}
		
		public addToUI(obj:Phaser.Sprite | Phaser.Image | Phaser.Button | Phaser.Text | Phaser.BitmapData | Phaser.SpriteBatch | Phaser.Group): Phaser.Sprite | Phaser.Image | Phaser.Button | Phaser.Text | Phaser.BitmapData | Phaser.SpriteBatch | Phaser.Group{
			return this.uiLayer.add(obj);
		}
	}
}
