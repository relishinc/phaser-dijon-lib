/// <reference path="../core/Game" />
/// <reference path="../../../../../bower_components/phaser-official/typescript/phaser.d.ts" />
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
		
		protected initializeApplication(){
			this.game = new dijon.core.Game({
				width: 800, 
				height: 600, 
				parent: 'game-container', 
				renderer: Phaser.AUTO, 
				transparent: false
			});
		}
		
		static getInstance(){
			if( !Application.instance )
				Application.instance = new Application();
			return Application.instance;
		}	
	}
}