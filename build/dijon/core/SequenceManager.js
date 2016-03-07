"use strict";
var Application_1 = require('../mvc/Application');
var SequenceManager = (function () {
    function SequenceManager() {
        this._defaultInterval = 20;
        this.game = Application_1.default.getInstance().game;
    }
    SequenceManager.prototype._executeMethod = function (sequence, context, callback, callbackContext) {
        var func = sequence.shift();
        if (typeof func !== 'undefined' && typeof context !== 'undefined' && context) {
            func.call(context);
        }
        if (sequence.length === 0 && callback && callbackContext) {
            callback.call(callbackContext);
        }
    };
    SequenceManager.prototype.run = function (sequence, context, interval, completeCallback, completeCallbackContext) {
        if (typeof context === 'undefined') {
            throw new Error('context must be provided for the sequence methods');
        }
        if (typeof interval === 'undefined') {
            interval = this._defaultInterval;
        }
        if (sequence.length === 0 && typeof completeCallback !== 'undefined' && typeof completeCallbackContext !== 'undefined') {
            completeCallback.call(completeCallbackContext);
            return;
        }
        if (interval === 0) {
            while (sequence.length > 0)
                this._executeMethod(sequence, context, typeof completeCallback === 'undefined' ? null : completeCallback, typeof completeCallbackContext === 'undefined' ? null : completeCallbackContext);
            return;
        }
        this.game.time.events.repeat(interval, sequence.length, this._executeMethod, this, sequence, context, typeof completeCallback === 'undefined' ? null : completeCallback, typeof completeCallbackContext === 'undefined' ? null : completeCallbackContext);
    };
    return SequenceManager;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SequenceManager;
//# sourceMappingURL=SequenceManager.js.map