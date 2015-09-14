/// <reference path="./Application" />
/// <reference path="./Notification" />
/// <reference path="../core/Game" />
/// <reference path="../interfaces/IObserver" />
/// <reference path="../interfaces/INotification" />

module dijon.mvc {
	export class Mediator implements interfaces.IObserver {
		public static MEDIATOR_NAME: string = 'Mediator';

		protected mediatorName: string = null;
		protected app: Application;
		protected game: core.Game;

		constructor(protected _viewComponent: any = null, autoReg: boolean = true, mediatorName: string = null) {
			this.app = Application.getInstance();
			this.game = this.app.game;
			this.mediatorName = mediatorName;

			if (autoReg) {
				this.register();
			}
		}
		
		// private methods
		protected register(): void {
			this.app.registerMediator(this);
		}

		protected remove(): void {
			this.app.removeMediator(this);
		}

		public onRegister(): void {
			// override me freely
		}

		public onRemoved(): void {

		}

		public destroy(): void {
			this.remove();
		}

		public listNotificationInterests(): string[] {
			return [];
		}

		public handleNotification(notification: interfaces.INotification) {
			/**
			 * default immplementation would look something like:
			 * switch( notification: dijon.interfaces.INotification ){
			 * 		case Notifications.SOMETHING:
			 * 			// do something
			 * 			break;
			 * 		case Notifications.SOMETHING_ELSE:
			 * 			// do something else
			 * 			break;
			 * }
			 */
		}

		public sendNotification(notificationName: string, notificationBody?: any) {
			this.app.sendNotification(notificationName, notificationBody);
		}
		
		// getter / setter
		public set viewComponent(viewComponent: any) {
			this._viewComponent = viewComponent;
		}

		public get viewComponent(): any {
			return this._viewComponent;
		}

		public get name(): string {
			return this.mediatorName || Mediator.MEDIATOR_NAME;
		}
	}
}