"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Model_1 = require('./Model');
var CopyModel = (function (_super) {
    __extends(CopyModel, _super);
    function CopyModel(dataKey) {
        if (dataKey === void 0) { dataKey = null; }
        _super.call(this, dataKey);
        this._languages = {};
        this._languages['en'] = this._data;
    }
    CopyModel.prototype.getCopy = function (groupId, itemId) {
        return this.getCopyGroup(groupId)[itemId];
    };
    CopyModel.prototype.getCopyGroup = function (groupId) {
        return this._data[groupId];
    };
    CopyModel.prototype.addLanguage = function (languageId, dataKey) {
        if (!this.getKeyExists(dataKey)) {
            throw new Error('cannot add an alternate language from key ' + dataKey + '. Is it in the Phaser cache?');
        }
        this._languages[languageId] = this.game.cache.getJSON(dataKey);
    };
    CopyModel.prototype.changeLanguage = function (languageId) {
        if (typeof this._languages[languageId] === 'undefined')
            throw new Error('there is no language ' + languageId);
        this._data = this._languages[languageId];
    };
    Object.defineProperty(CopyModel.prototype, "name", {
        get: function () {
            return CopyModel.MODEL_NAME;
        },
        enumerable: true,
        configurable: true
    });
    CopyModel.MODEL_NAME = 'copyModel';
    return CopyModel;
}(Model_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CopyModel;
//# sourceMappingURL=CopyModel.js.map