class Application {
	constructor(){
		if( Application.instance )
				throw Error( Application.SINGLETON_MSG );

		Application.instance = this;
		this.game = null;
		
		this.initializeApplication();
	}
	
	initializeApplication(){
		this.game = new dijon.core.Game({
			width:800, 
			height:600, 
			parent:'game-container', 
			renderer:Phaser.AUTO, 
			transparent:false
		});
	}
}

Application.getInstance = function(){
	if( !Application.instance )
			Application.instance = new Application();
	return Application.instance;
};

// static constants
Application.instance = null;
Application.SINGLETON_MSG = 'Application singleton already constructed!';

export default Application;