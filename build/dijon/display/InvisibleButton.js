"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Sprite_1 = require('./Sprite');
var InvisibleButton = (function (_super) {
    __extends(InvisibleButton, _super);
    function InvisibleButton(x, y, name, w, h) {
        _super.call(this, x, y, null, null, name);
        this.setSize(w, h);
    }
    InvisibleButton.prototype.init = function () {
        this.inputEnabled = true;
    };
    InvisibleButton.prototype.buildInterface = function () {
        this._addHitRect();
    };
    InvisibleButton.prototype._addHitRect = function () {
        if (this._hitWidth > 0 && this._hitHeight > 0) {
            this.hitArea = new Phaser.Rectangle(0, 0, this._hitWidth, this._hitHeight);
        }
    };
    InvisibleButton.prototype.setSize = function (w, h) {
        this._hitWidth = w || 0;
        this._hitHeight = h || 0;
        this._addHitRect();
    };
    return InvisibleButton;
}(Sprite_1.default));
exports.InvisibleButton = InvisibleButton;
//# sourceMappingURL=InvisibleButton.js.map