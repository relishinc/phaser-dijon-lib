/// <reference path="./INotification.ts" />

module dijon.interfaces {
	export interface INotifier {
		sendNotification(notificationName: string, notificationBody?: any): any;
	}
}