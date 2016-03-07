"use strict";
var Game_1 = require('../core/Game');
var Notification_1 = require('./Notification');
var Application = (function () {
    function Application() {
        this._mediator = null;
        this._models = {};
        this._mediators = {};
        this._observerMap = {};
        if (Application.instance)
            throw Error(Application.SINGLETON_MSG);
        Application.instance = this;
        this.createGame();
        this.startGame();
    }
    Application.prototype.createGame = function () {
        this.game = new Game_1.default({
            width: 800,
            height: 600,
            parent: 'game-container',
            renderer: Phaser.AUTO,
            transparent: false
        });
    };
    Application.prototype.startGame = function () {
    };
    Application.prototype.addPlugins = function () {
        this.game.addPlugins();
    };
    Application.prototype.registerModel = function (model) {
        if (this._models[model.name]) {
            throw (new Error('Application:: a model with the name "' + model.name + '" already exists.'));
        }
        this._models[model.name] = model;
        return model;
    };
    Application.prototype.retrieveModel = function (modelName) {
        return this._models[modelName] || null;
    };
    Application.prototype.removeModel = function (modelToRemove) {
        delete this._models[modelToRemove.name];
    };
    Application.prototype.registerMediator = function (mediator) {
        if (this._mediators[mediator.name]) {
            throw (new Error('Application:: a mediator with the name "' + mediator.name + '" already exists.'));
        }
        this._mediators[mediator.name] = mediator;
        this.registerObserver(mediator);
        mediator.onRegister();
    };
    Application.prototype.retrieveMediator = function (mediatorName) {
        return this._mediators[mediatorName] || null;
    };
    Application.prototype.removeMediator = function (mediatorToRemove) {
        var _this = this;
        var name = mediatorToRemove.name;
        var mediator = this._mediators[name];
        if (!mediator)
            return;
        mediator.listNotificationInterests().forEach(function (interest) {
            _this.removeObserver(interest, mediator);
        });
        mediator.onRemoved();
        delete this._mediators[name];
    };
    Application.prototype.registerObserver = function (observer) {
        var _this = this;
        observer.listNotificationInterests().forEach(function (notificationName) {
            if (_this._observerMap[notificationName] === undefined) {
                _this._observerMap[notificationName] = [];
            }
            _this._observerMap[notificationName].push(observer);
        });
    };
    Application.prototype.removeObserver = function (notificationName, observerToRemove) {
        var observers = null, observer = null, i = 0;
        observers = this._observerMap[notificationName];
        i = observers.length;
        while (i--) {
            observer = observers[i];
            if (observer === observerToRemove) {
                observers.splice(i, 1);
                break;
            }
        }
        if (observers.length == 0) {
            delete this._observerMap[notificationName];
        }
    };
    Application.prototype.sendNotification = function (notificationName, notficationBody) {
        var notification = new Notification_1.default(notificationName, notficationBody);
        this._notifyObservers(notification);
        notification.destroy();
        notification = null;
    };
    Application.prototype._notifyObservers = function (notification) {
        var observer = null, observers = null;
        var notificationName = notification.getName();
        var observersRef = this._observerMap[notificationName];
        if (observersRef) {
            observers = observersRef.slice(0);
            observers.forEach(function (observer) {
                observer.handleNotification(notification);
            });
        }
    };
    Application.getInstance = function () {
        if (!Application.instance)
            Application.instance = new Application();
        return Application.instance;
    };
    Application.instance = null;
    Application.SINGLETON_MSG = 'Application singleton already constructed!';
    return Application;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Application;
//# sourceMappingURL=Application.js.map