/// <reference path="./Mediator" />
/// <reference path="./Model" />
/// <reference path="../utils/Device" />
/// <reference path="../interfaces/IObserver" />
/// <reference path="../interfaces/INotifier" />
/// <reference path="../core/Game" />

module dijon.mvc {
    export class Application implements interfaces.INotifier {
        // static constants
        protected static instance = null;
        protected static SINGLETON_MSG = 'Application singleton already constructed!';
		
        // public 
        public game: core.Game;

        // protected        
        protected _mediator: mvc.Mediator = null;
        protected _models: { [name: string]: Model } = {};
        protected _mediators: { [name: string]: Mediator } = {};
        protected _observerMap: { [name: string]: interfaces.IObserver[] } = {};

        constructor() {
            if (Application.instance)
                throw Error(Application.SINGLETON_MSG);

            Application.instance = this;

            this.createGame();
            this.startGame();
        }
		
        // public methods
        protected createGame():void {
            this.game = new dijon.core.Game({
                width: 800,
                height: 600,
                parent: 'game-container',
                renderer: Phaser.AUTO,
                transparent: false
            });
        }
        
        protected startGame():void{
            // start the app's initial state here
        }

        public registerModel(model: Model): Model {
            if (this._models[model.name]) {
                throw (new Error('Application:: a model with the name "' + model.name + '" already exists.'));
            }
            this._models[model.name] = model;
            return model;
        }

        public retrieveModel(modelName: string): Model {
            return this._models[modelName] || null;
        }

        public removeModel(modelToRemove: Model): void {
            delete this._models[modelToRemove.name];
        }

        public registerMediator(mediator: Mediator): void {
            if (this._mediators[mediator.name]) {
                throw (new Error('Application:: a mediator with the name "' + mediator.name + '" already exists.'));
            }

            this._mediators[mediator.name] = mediator;
            this.registerObserver(mediator);

            mediator.onRegister();
        }

        public retrieveMediator(mediatorName: string): Mediator {
            return this._mediators[mediatorName] || null;
        }

        public removeMediator(mediatorToRemove: Mediator): void {
            let name = mediatorToRemove.name;
            let mediator = this._mediators[name];

            if (!mediator)
                return;

            mediator.listNotificationInterests().forEach(interest => {
                this.removeObserver(interest, mediator);
            });

            mediator.onRemoved();
            delete this._mediators[name];
        }

        public registerObserver(observer: interfaces.IObserver): void {
            observer.listNotificationInterests().forEach(notificationName => {
                if (this._observerMap[notificationName] === undefined) {
                    this._observerMap[notificationName] = [];
                }
                this._observerMap[notificationName].push(observer);
            });
        }

		/**
		 * stops an observer from being interested in a notification
		 * @param {String} notificationName
		 * @param {dijon.interfaces.IObserver} observerToRemove
		 * @return {void}
		 */
        public removeObserver(notificationName: string, observerToRemove: interfaces.IObserver): void {
            //The observer list for the notification under inspection
            let observers: interfaces.IObserver[] = null,
                observer: interfaces.IObserver = null,
                i: number = 0;

            observers = this._observerMap[notificationName];

            //Find the observer for the notifyContext.
            i = observers.length;
            while (i--) {
                observer = observers[i];
                if (observer === observerToRemove) {
                    observers.splice(i, 1);
                    break;
                }
            }

			/*
			 * Also, when a Notification's Observer list length falls to zero, delete the
			 * notification key from the observer map.
			 */
            if (observers.length == 0) {
                delete this._observerMap[notificationName];
            }
        }

        public sendNotification(notificationName: string, notficationBody?: any): void {
            let notification = new Notification(notificationName, notficationBody);
            this._notifyObservers(notification);

            notification.destroy();
            notification = null;
        }
		
        // private methods
        private _notifyObservers(notification: interfaces.INotification) {
            let observer: interfaces.IObserver = null,
                observers: interfaces.IObserver[] = null;

            const notificationName: string = notification.getName();
            const observersRef: interfaces.IObserver[] = this._observerMap[notificationName];

            if (observersRef) {
                // clone the array in case an observer gets removed while the notification is being sent
                observers = observersRef.slice(0);
                observers.forEach(observer => {
                    observer.handleNotification(notification);
                });
            }
        }

        public static getInstance(): Application {
            if (!Application.instance)
                Application.instance = new Application();

            return Application.instance;
        }
    }
}
