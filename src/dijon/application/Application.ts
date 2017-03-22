import {INotifier, INotification, IObserver} from '../interfaces';
import {Mediator, Model, Notification} from '../mvc';
import {Game} from '../core';
import { Log } from '../utils';
import { AnalyticsEventModel } from '../core';

export class Application implements INotifier {
    // static constants
    protected static instance = null;
    protected static SINGLETON_MSG = 'Application singleton already constructed!';

    // public 
    public game: Game;

    // protected        
    protected _mediator: Mediator = null;
    protected _models: { [name: string]: Model } = {};
    protected _mediators: { [name: string]: Mediator } = {};
    protected _observerMap: { [name: string]: IObserver[] } = {};

    //for debugging
    private static _hashQuery: {};
    public static static_debugMode: boolean = false;

    constructor() {
        if (Application.instance)
            throw Error(Application.SINGLETON_MSG);

        Application.instance = this;

        window.addEventListener("hashchange", () => {
            Application._getHashQuery();
            this.windowHashChange();
        }, false);

        this.createGame();
        this.startGame();
    }

    /**
     * Utility Method - Method should be called during boot state, and will unlock audio if the audio contenxt
     * has been suspended (awaiting touch input). This is due to a bug with the way audio is handled by chrome/android
     * when the game is opened in an iFrame from a different site. This should be called in the boot state.
     */
    public ensureAudioContextUnlocked(): void {
        if (this.game.device.android && this.game.device.chrome && this.game.device.chromeVersion >= 55) {
            this.game.sound.setTouchLock();
            this.game.input.touch.addTouchLockCallback(() => {
                if (this.game.sound.noAudio || !this.game.sound.touchLocked) {
                    return true;
                }
                if (this.game.sound.usingWebAudio) {
                    // Create empty buffer and play it
                    // The SoundManager.update loop captures the state of it and then resets touchLocked to false

                    var buffer = this.game.sound.context.createBuffer(1, 1, 22050);
                    this.game.sound["unlockSource"] = this.game.sound.context.createBufferSource();
                    this.game.sound["unlockSource"].buffer = buffer;
                    this.game.sound["unlockSource"].connect(this.game.sound.context.destination);
                    if (this.game.sound["unlockSource"].start === undefined) {
                        this.game.sound["unlockSource"].noteOn(0);
                    }
                    else {
                        this.game.sound["unlockSource"].start(0);
                    }

                    //Hello Chrome 55!
                    if (this.game.sound["unlockSource"].context.state === 'suspended') {
                        this.game.sound["unlockSource"].context.resume();
                    }
                }

                //  We can remove the event because we've done what we needed (started the unlock sound playing)
                return true;

            }, this);
        }
        this.ensureAudioContextUnlocked = () => {
            return;
        };
    }

    public trackEvent(eventModel: AnalyticsEventModel): void {
        this.game.analytics.trackEvent(eventModel.action, eventModel.label, eventModel.value === null ? null : eventModel.value.toString());
    }   

    public trackEventAndChangeCategory(newCategory: string, eventModel: AnalyticsEventModel): void {
        this.game.analytics.setCategory(newCategory);
        this.trackEvent(eventModel);
    }
    
    protected windowHashChange(): void { }

    // public methods
    protected createGame(): void {
        this.game = new Game({
            width: 800,
            height: 600,
            parent: 'game-container',
            renderer: Phaser.AUTO,
            transparent: false
        });
    }

    protected startGame(): void {
        // start the app's initial state here
    }

    public addPlugins() {
        this.game.addPlugins();
        if (Application.static_debugMode) {
            Log.init();
        }    
    }

    public registerModel(model: Model): Model {
        if (this._models[model.name]) {
            throw (new Error('Application:: a model with the name "' + model.name + '" already exists.'));
        }
        this._models[model.name] = model;

        model.onRegister();

        return model;
    }

    public retrieveModel(modelName: string): Model {
        return this._models[modelName] || null;
    }

    public removeModel(modelToRemove: Model): void {
        let name = modelToRemove.name;
        let model = this._models[name];

        if (!model)
            return;

        model.onRemoved();

        delete this._models[name];
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

    public registerObserver(observer: IObserver): void {
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
     * @param {IObserver} observerToRemove
     * @return {void}
     */
    public removeObserver(notificationName: string, observerToRemove: IObserver): void {
        //The observer list for the notification under inspection
        let observers: IObserver[] = null,
            observer: IObserver = null,
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
    private _notifyObservers(notification: INotification) {
        let observer: IObserver = null,
            observers: IObserver[] = null;

        const notificationName: string = notification.getName();
        const observersRef: IObserver[] = this._observerMap[notificationName];

        if (observersRef) {
            // clone the array in case an observer gets removed while the notification is being sent
            observers = observersRef.slice(0);
            observers.forEach(observer => {
                observer.handleNotification(notification);
            });
        }
    }

    private static _getHashQuery(): void {
        Application._hashQuery = {};
        if (!window.location.hash || window.location.hash === undefined){
            window.location.hash = '';
        }
        const hash = window.location.hash.substr(1, window.location.hash.length);
        const aHash: string[] = hash.split('&');
        aHash.forEach(hashPair => {
            const aHash = hashPair.split('=');
            Application._hashQuery[aHash[0]] = /^\d+$/.test(aHash[1]) ? parseInt(aHash[1]) : aHash[1];
        });
    }

    // static methods

    /**
     * returns the Application singleton
     * @return {Application}
     */
    public static getInstance(): Application {
        if (!Application.instance)
            Application.instance = new Application();

        return Application.instance;
    }

    /**
     * gets a query variable from the window.location hash
     * assumes something like http://url/#foo=bar&baz=foo
     * @param {String} variableId
     * @return {any}
     */
    public static queryVar(variableId: string): any {
        if (Application._hashQuery === undefined) {
            Application._getHashQuery();
        }
        return Application._hashQuery[variableId] || null;
    }

}