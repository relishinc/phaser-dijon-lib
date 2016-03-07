"use strict";
var Application_1 = require('../mvc/Application');
var StorageManager = (function () {
    function StorageManager() {
        this.game = Application_1.default.getInstance().game;
        this._init();
    }
    StorageManager.prototype._init = function () {
        this._localStorageAvailable = this._getIsLocalStorageAvailable();
        console.log('local storage available', this._localStorageAvailable);
    };
    StorageManager.prototype._getIsLocalStorageAvailable = function () {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        }
        catch (e) {
            return false;
        }
    };
    StorageManager.prototype._getString = function (data) {
        if (typeof data === 'string') {
            return data;
        }
        var jsonData;
        try {
            jsonData = JSON.stringify(data);
        }
        catch (e) {
            console.log('Could not convert' + data + ' to json');
            return null;
        }
        return jsonData;
    };
    StorageManager.prototype.getFromLocalStorage = function (key, isJSON) {
        if (isJSON === void 0) { isJSON = true; }
        var data = localStorage.getItem(key);
        if (typeof data === 'undefined') {
            console.log('no data saved with the key', key);
            return null;
        }
        if (isJSON !== false) {
            data = JSON.parse(data);
        }
        return data;
    };
    StorageManager.prototype.saveToLocalStorage = function (key, value) {
        if (!this._localStorageAvailable) {
            console.log('no local storage');
            return false;
        }
        try {
            localStorage.setItem(key, this._getString(value));
        }
        catch (e) {
            console.log('your data could not be saved');
        }
    };
    StorageManager.prototype.clearFromLocalStorage = function (key) {
        if (!this._localStorageAvailable) {
            console.log('no local storage');
            return false;
        }
        try {
            localStorage.removeItem(key);
        }
        catch (e) { }
    };
    return StorageManager;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = StorageManager;
//# sourceMappingURL=StorageManager.js.map