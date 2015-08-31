/// <reference path="../core/Game" />

module dijon.mvc{
	export class Application {
		// static constants
		static instance = null;
		static SINGLETON_MSG = 'Application singleton already constructed!';
		
		public game:dijon.core.Game;
		
		constructor(){
			if( Application.instance )
					throw Error( Application.SINGLETON_MSG );
	
			Application.instance = this;
			
			this.initializeApplication();
		} 
		
		public initializeApplication(){
			this.game = new dijon.core.Game({
				width: 800, 
				height: 600, 
				parent: 'game-container', 
				renderer: Phaser.AUTO, 
				transparent: false
			});
		}
		
		public static getInstance():Application{
			if( !Application.instance )
				Application.instance = new Application();
			return Application.instance;
		}	
	}
}