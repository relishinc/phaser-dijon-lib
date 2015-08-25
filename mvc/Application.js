class Application {
	constructor(gameConfig){
		if( Application.instance )
				throw Error( Application.SINGLETON_MSG );

		Application.instance = this;
		
		this.game = new dijon.core.Game(gameConfig);
		this.initializeApplication();
	}
	
	initializeApplication(){
		
	}
}

Application.getInstance = function(){
	if( !Application.instance )
			Application.instance = new Application();
	return Application.instance;
}

Application.instance = null;
Application.SINGLETON_MSG = 'Application singleton already constructed!';

export default Application;