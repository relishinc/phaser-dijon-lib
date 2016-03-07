"use strict";
var Notification = (function () {
    function Notification(_name, _body) {
        if (_body === void 0) { _body = null; }
        this._name = _name;
        this._body = _body;
    }
    Notification.prototype.getName = function () {
        return this._name;
    };
    Notification.prototype.setBody = function (body) {
        this._body = body;
    };
    Notification.prototype.getBody = function () {
        return this._body;
    };
    Notification.prototype.destroy = function () {
        this._body = null;
        this._name = null;
        delete this._body;
        delete this._name;
    };
    return Notification;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Notification;
//# sourceMappingURL=Notification.js.map