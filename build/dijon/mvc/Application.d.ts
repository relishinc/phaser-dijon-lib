import Game from '../core/Game';
import Mediator from './Mediator';
import Model from './Model';
import * as interfaces from '../interfaces';
export default class Application implements interfaces.INotifier {
    protected static instance: any;
    protected static SINGLETON_MSG: string;
    game: Game;
    protected _mediator: Mediator;
    protected _models: {
        [name: string]: Model;
    };
    protected _mediators: {
        [name: string]: Mediator;
    };
    protected _observerMap: {
        [name: string]: interfaces.IObserver[];
    };
    constructor();
    protected createGame(): void;
    protected startGame(): void;
    addPlugins(): void;
    registerModel(model: Model): Model;
    retrieveModel(modelName: string): Model;
    removeModel(modelToRemove: Model): void;
    registerMediator(mediator: Mediator): void;
    retrieveMediator(mediatorName: string): Mediator;
    removeMediator(mediatorToRemove: Mediator): void;
    registerObserver(observer: interfaces.IObserver): void;
    removeObserver(notificationName: string, observerToRemove: interfaces.IObserver): void;
    sendNotification(notificationName: string, notficationBody?: any): void;
    private _notifyObservers(notification);
    static getInstance(): Application;
}
