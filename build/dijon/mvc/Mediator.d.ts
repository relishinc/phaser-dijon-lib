import * as interfaces from '../interfaces';
import Application from './Application';
import Game from '../core/Game';
export default class Mediator implements interfaces.IObserver {
    protected _viewComponent: any;
    static MEDIATOR_NAME: string;
    protected mediatorName: string;
    protected app: Application;
    protected game: Game;
    constructor(_viewComponent?: any, autoReg?: boolean, mediatorName?: string);
    protected register(): void;
    protected remove(): void;
    onRegister(): void;
    onRemoved(): void;
    destroy(): void;
    listNotificationInterests(): string[];
    handleNotification(notification: interfaces.INotification): void;
    sendNotification(notificationName: string, notificationBody?: any): void;
    viewComponent: any;
    name: string;
}
