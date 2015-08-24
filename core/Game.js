import AssetManager from "./AssetManager";
export default class Game extends Phaser.Game{
	constructor(width, height, renderer, parent, state, transparent, antialias, physicsConfig){
		super(width, height, renderer, parent, state, transparent, antialias, physicsConfig);
		
		// attach game globals 
		
		// AsssetManager 
		this.asset = new AssetManager(this);
	}
}