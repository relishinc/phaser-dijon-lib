/// <reference path="../mvc/Application" />
/// <reference path="./Game" />

module dijon.core{
    export class SequenceManager{
        public game:dijon.core.Game;
        
        private _defaultInterval = 20;
        
        constructor(){
            this.game = dijon.mvc.Application.getInstance().game;
        }
        
        // private methods
        private _executeMethod(sequence:Array<Function>, context:Object, callback:Function, callbackContext:Object) {
            var func = sequence.shift();
            if (typeof func !== 'undefined' && typeof context !== 'undefined' && context) {
                func.call(context);
            }
    
            if (sequence.length === 0 && callback && callbackContext) {
                callback.call(callbackContext);
            }
        }
        
        // public methods
        public run (sequence:Array<Function>, context:Object, interval:number, completeCallback:Function, completeCallbackContext:Object) {
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
}
