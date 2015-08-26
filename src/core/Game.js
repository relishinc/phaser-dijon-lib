class Game extends Phaser.Game{
	constructor(config){
		super(config);
	}
	
	boot(){
		super.boot();
		this.asset = new dijon.core.AssetManager();
		this.sequence = new dijon.core.SequenceManager();
		
		this._gameLayer = this.add.group();
		this._uiLayer = this.add.group();  
	}
	
	addToGame(obj){
		return this.gameLayer.add(obj);
	}
	
	addToUI(obj){
		return this.uiLayer.add(obj);
	}
	
	get gameLayer(){
		return this._gameLayer;
	}
	
	get uiLayer(){
		return this._uiLayer;
	}
}

export default Game;