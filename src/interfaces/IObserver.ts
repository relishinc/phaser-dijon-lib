/// <reference path="./INotification.ts" />

module dijon.interfaces {
	export interface IObserver {
		onRegister(): any;
		onRemoved(): any;
		destroy(): any;
		listNotificationInterests(): string[];
		handleNotification(notification: INotification): any;
	}
}