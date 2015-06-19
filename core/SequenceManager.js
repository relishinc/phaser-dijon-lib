/**
 * Executes methods in a timed sequence (using Phaser.Timer.repeat)
 * @param {Phaser.Game} game reference to the Phaser.Game object
 * @constructor
 */
Dijon.SequenceManager = function(game) {
    this.game = game;
    this._init();
};

Dijon.SequenceManager.prototype = {
    constructor: Dijon.SequenceManager,
    // private methods
    /**
     * sets the default interval
     * @return {void}
     * @private
     */
    _init: function() {
        this._defaultInterval = 20;
    },

    /**
     * executes the current method in the sequence
     * @param  {Array}    sequence        the sequence the current method belongs to
     * @param  {Object}   context         the context to call the current method
     * @param  {Function} callback        the callback to call if this is the last method in the sequence
     * @param  {Object}   callbackContext the context to call the callback
     * @return {void}
     * @private
     */
    _executeMethod: function(sequence, context, callback, callbackContext) {
        var func = sequence.shift();
        if (typeof func !== 'undefined' && typeof context !== 'undefined' && context) {
            func.call(context);
        }

        if (sequence.length === 0 && callback && callbackContext) {
            callback.call(callbackContext);
        }
    },

    /**
     * runs a sequence
     * @param  {Array} sequence                 an array of methods to be run in sequence
     * @param  {Object} context                 the scope to execute all of the methods in the sequence
     * @param  {int} interval                   the number of milliseconds between each step in the sequence
     * @param  {Function} completeCallback      the method to call once the sequence is complete
     * @param  {Object} completeCallbackContext the scope for the completeCallback
     * @return {void}
     */
    run: function(sequence, context, interval, completeCallback, completeCallbackContext) {
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
    }
};
