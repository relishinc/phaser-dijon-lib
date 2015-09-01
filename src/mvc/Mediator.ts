/// <reference path="./Application" />
/// <reference path="./Notification" />
/// <reference path="../core/Game" />
/// <reference path="../interfaces/IObserver" />
/// <reference path="../interfaces/INotification" />

module dijon.mvc{
	export class Mediator implements interfaces.IObserver{
		public static MEDIATOR_NAME:string = 'Mediator';
		
		protected mediatorName:string = null;
		protected app:Application;
		protected game:core.Game;
		
		constructor(mediatorName:string=null, protected _viewComponent:any=null, autoReg:boolean=true){
			this.app = Application.getInstance();
			this.mediatorName = mediatorName;
			
			if (autoReg){
				this.register();
			}
		}
		
		// private methods
		protected register():void{
			this.app.registerMediator(this);
		}
		
		protected remove():void{
			this.app.removeMediator(this);
		}
		
		public onRegister():void{
			// override me freely
		}
		
		public onRemoved():void{
			
		}
		
		public destroy():void{
			this.remove();
		}
		
		public listNotificationInterests():string[]{
			return [
				
			];
		}
		
		public handleNotification(notification:interfaces.INotification){
			
		}
		
		public sendNotification(notificationName:string, notificationBody?:any){
			this.app.sendNotification(notificationName, notificationBody);
		}
		
		// getter / setter
		set viewCompnent(viewComponent:any){
			this._viewComponent = viewComponent;
		}
		
		get viewComponent():any{
			return this._viewComponent;
		}
		
		get name():string{
			return this.mediatorName || Mediator.MEDIATOR_NAME;
		}
	}
}