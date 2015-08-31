/// <reference path="./Application" />
/// <reference path="./Notification" />
/// <reference path="../core/Game" />

module dijon.mvc{
	export class Mediator{
		public game:core.Game;
		
		constructor(private _name:string, private _viewComponent:any=null, autoReg:boolean=true){
			
		}
		
		private _register():void{
			Application.getInstance().registerMediator(this._name, this);
		}
		
		public onRegister():void{
			// override me freely
		}
		
		public listNotificationInterests():string[]{
			return [
				
			];
		}
		
		public handleNotification(note:Notification):void{
			
		}
		
		// getter / setter
		set viewCompnent(viewComponent:any){
			this._viewComponent = viewComponent;
		}
		
		get viewComponent():any{
			return this._viewComponent;
		}
		
		get name():string{
			return this._name;
		}
	}
}