"use strict";
var Application_1 = require("./Application");
var Model = (function () {
    function Model(dataKey, modelName) {
        if (dataKey === void 0) { dataKey = null; }
        if (modelName === void 0) { modelName = null; }
        this.modelName = modelName;
        this.app = Application_1.default.getInstance();
        this.game = this.app.game;
        if (dataKey) {
            this.setData(dataKey);
        }
        this.app.registerModel(this);
    }
    Model.prototype.getKeyExists = function (key) {
        return this.game.cache.getJSON(key) !== null;
    };
    Model.prototype.setData = function (dataKey) {
        if (!this.getKeyExists(dataKey)) {
            console.log('Model:: cannot set data from key ' + dataKey + '. Is it in the Phaser cache?');
            return false;
        }
        this._data = this.game.cache.getJSON(dataKey);
        return this._data;
    };
    Model.prototype.getData = function () {
        return this._data;
    };
    Model.prototype.destroy = function () {
        this.app.removeModel(this);
    };
    Object.defineProperty(Model.prototype, "name", {
        get: function () {
            return this.modelName || Model.MODEL_NAME;
        },
        enumerable: true,
        configurable: true
    });
    Model.MODEL_NAME = 'Model';
    return Model;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Model;
//# sourceMappingURL=Model.js.map