class SequenceManager{
	constructor(){
		this.game = dijon.mvc.Application.getInstance().game;
		this._init();
	}
	
	// private methods
	_init(){
		this._defaultInterval = 20;
	}
	
	_executeMethod(sequence, context, callback, callbackContext) {
        var func = sequence.shift();
        if (typeof func !== 'undefined' && typeof context !== 'undefined' && context) {
            func.call(context);
        }

        if (sequence.length === 0 && callback && callbackContext) {
            callback.call(callbackContext);
        }
    }
	
	// public methods
	run(sequence, context, interval, completeCallback, completeCallbackContext) {
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
}

export default SequenceManager;