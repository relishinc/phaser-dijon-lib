/// <reference path="./Application" />
/// <reference path="../core/Game" />

module dijon.mvc{
	export class Model{
		public app:Application;
		public game:core.Game;
		protected _data:any;
		
		public static MODEL_NAME:string = 'Model';
		
		constructor(private modelName:string=null, dataKey:string=null){
			this.app = Application.getInstance();
			this.game = this.app.game;
			
			if (dataKey){
				this.setData(dataKey);
			}
			
			this.app.registerModel(this);
		}
		
		protected getKeyExists(key:string):boolean{
			return this.game.cache.getText(key) !== null;
		}
		
		protected parseData(key:any):any{
			return JSON.parse(this.game.cache.getText(key));
		}
		
		public setData(dataKey:string):any{
			if (!this.getKeyExists(dataKey)){
				console.log('cannot set data from key ' + dataKey + '. Is it in the Phaser cache?');
        		return false;
			}
			
			this._data = this.parseData(dataKey);
			return this._data;
		}
		
		public getData():any{
			return this._data;
		}
		
		public destroy():void{
			this.app.removeModel(this);
		}
		
		get name():string{
			return this.modelName || Model.MODEL_NAME;
		}
	}
	
}