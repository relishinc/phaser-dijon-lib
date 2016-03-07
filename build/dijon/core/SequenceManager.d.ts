import Game from './Game';
export default class SequenceManager {
    game: Game;
    private _defaultInterval;
    constructor();
    private _executeMethod(sequence, context, callback, callbackContext);
    run(sequence: Array<Function>, context: Object, interval: number, completeCallback: Function, completeCallbackContext: Object): void;
}
