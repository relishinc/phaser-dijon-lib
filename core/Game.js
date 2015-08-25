import AssetManager from "./AssetManager";
export default class Game extends Phaser.Game{
	constructor(config){
		super(config);
	}
	
	boot(){
		super.boot();
		// attach game globals 
		// AsssetManager 
		this.asset = new AssetManager(this);
		
		this.gameLayer = this.add.group();
		this.uiLayer = this.add.group();
	}
	
	addToGame(obj){
		return this.gameLayer.add(obj);
	}
	
	addToUI(obj){
		return this.uiLayer.add(obj);
	}
}