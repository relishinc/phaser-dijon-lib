/// <reference path="./Application" />
/// <reference path="../core/Game" />

module dijon.mvc{
	export class Model{
		public game:core.Game;
		protected _data:any;
		
		constructor(dataKey:string=null){
			this.game = Application.getInstance().game;
			
			if (dataKey){
				this.setData(dataKey);
			}
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
	}
}