/// <reference path="./SequenceManager" />
/// <reference path="./AssetManager" />

module dijon.core{
	export class Game extends Phaser.Game{
		// public variables
		public asset:dijon.core.AssetManager;
		public sequence:dijon.core.SequenceManager;
		public gameLayer:Phaser.Group;
		public uiLayer:Phaser.Group;
		
		constructor(config:Phaser.IGameConfig){
			super(config);
		}
		
		// Phaser.Game overrides
		public boot(){ 
			super.boot();
			
			this.asset = new dijon.core.AssetManager();
			this.sequence = new dijon.core.SequenceManager();
			
			this.gameLayer = this.add.group();
			this.uiLayer = this.add.group();  
		}
		
		// public methods
		public addToGame(obj:Phaser.Sprite | Phaser.Image | Phaser.BitmapData | Phaser.SpriteBatch | Phaser.Group): Phaser.Sprite | Phaser.Image | Phaser.BitmapData | Phaser.SpriteBatch | Phaser.Group{
			return this.gameLayer.add(obj);
		}
		
		public addToUI(obj:Phaser.Sprite | Phaser.Image | Phaser.BitmapData | Phaser.SpriteBatch | Phaser.Group): Phaser.Sprite | Phaser.Image | Phaser.BitmapData | Phaser.SpriteBatch | Phaser.Group{
			return this.uiLayer.add(obj);
		}
	}
}
