"use strict";
var Application_1 = require('./Application');
var Mediator = (function () {
    function Mediator(_viewComponent, autoReg, mediatorName) {
        if (_viewComponent === void 0) { _viewComponent = null; }
        if (autoReg === void 0) { autoReg = true; }
        if (mediatorName === void 0) { mediatorName = null; }
        this._viewComponent = _viewComponent;
        this.mediatorName = null;
        this.app = Application_1.default.getInstance();
        this.game = this.app.game;
        this.mediatorName = mediatorName;
        if (autoReg) {
            this.register();
        }
    }
    Mediator.prototype.register = function () {
        this.app.registerMediator(this);
    };
    Mediator.prototype.remove = function () {
        this.app.removeMediator(this);
    };
    Mediator.prototype.onRegister = function () {
    };
    Mediator.prototype.onRemoved = function () {
    };
    Mediator.prototype.destroy = function () {
        this.remove();
    };
    Mediator.prototype.listNotificationInterests = function () {
        return [];
    };
    Mediator.prototype.handleNotification = function (notification) {
    };
    Mediator.prototype.sendNotification = function (notificationName, notificationBody) {
        this.app.sendNotification(notificationName, notificationBody);
    };
    Object.defineProperty(Mediator.prototype, "viewComponent", {
        get: function () {
            return this._viewComponent;
        },
        set: function (viewComponent) {
            this._viewComponent = viewComponent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mediator.prototype, "name", {
        get: function () {
            return this.mediatorName || Mediator.MEDIATOR_NAME;
        },
        enumerable: true,
        configurable: true
    });
    Mediator.MEDIATOR_NAME = 'Mediator';
    return Mediator;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Mediator;
//# sourceMappingURL=Mediator.js.map