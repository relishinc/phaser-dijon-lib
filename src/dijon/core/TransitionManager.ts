/**
 * TransitionManager
 */
import {Application} from '../application';
import {Game, GameObjectFactory} from '../core';
import {ITransition, ITransitionHandler, IPreloadHandler} from '../interfaces';

export class TransitionManager {
    public game: Game;
    public onTransitionOutComplete: Phaser.Signal = new Phaser.Signal();
    public onTransitionInComplete: Phaser.Signal = new Phaser.Signal();
    
    private _isInTransition: boolean = false;

    private _transition: ITransition = null;
    private _transitions: Object = {};
    private _exceptions: Object = {};

    private _fromState: string = null;
    private _toState: string = null;

    private _args: any = null;

    constructor() {
        this.game = Application.getInstance().game;
    }

    private _add(id: string, outHandler: ITransitionHandler, preloadHandler: IPreloadHandler, inHandler: ITransitionHandler): void {
        this._transitions[id] = {
            outHandler: outHandler,
            preloadHandler: preloadHandler,
            inHandler: inHandler
        };
    }

    private _getTransition(inState: string, outState: string) {
        var transition = this._transitions[inState + '/' + outState];
        if (typeof transition === 'undefined')
            transition = this._transitions['all'];

        return typeof transition === 'undefined' ? null : transition;
    }

    private _transitionInComplete() {
        this._transition = this._getTransition(this._fromState, this._toState);
        if (!this._transition)
            return false;

        if (typeof this._transition.preloadHandler.loadStart === 'function')
            this.game.asset.onLoadStart.addOnce(this._transition.preloadHandler.loadStart, this._transition.preloadHandler);

        if (typeof this._transition.preloadHandler.loadProgress === 'function') {
            this.game.asset.onFileComplete.add(this._transition.preloadHandler.loadProgress, this._transition.preloadHandler);
        }

        this.game.asset.onLoadCompleteAndAudioDecoded.addOnce(this._preloadComplete, this);
        this.onTransitionInComplete.dispatch();


        this.game.changeState(this._toState, this._args);
    }

    private _transitionOutComplete() {
        this._transition = null;
        this.onTransitionOutComplete.dispatch();
        this._isInTransition = false;
    }

    private _preloadComplete() {
        this._transition = this._getTransition(this._fromState, this._toState);
        if (!this._transition)
            return false;

        this.game.asset.onFileComplete.remove(this._transition.preloadHandler.loadProgress, this._transition.preloadHandler);

        if (typeof this._transition.preloadHandler.loadComplete === 'function')
            this._transition.preloadHandler.loadComplete();
    }

    private _clearTransition() {
        this._transition.outHandler.transitionInComplete.remove(this._transitionOutComplete, this);
        this._transition.inHandler.transitionOutComplete.remove(this._transitionInComplete, this);
        this.game.asset.onLoadCompleteAndAudioDecoded.remove(this._preloadComplete, this);
        this.game.asset.onLoadStart.remove(this._transition.preloadHandler.loadStart, this._transition.preloadHandler);
        this.game.asset.onFileComplete.remove(this._transition.preloadHandler.loadProgress, this._transition.preloadHandler);

        this._transition = null;
    }

    // public methods

    /**
    * Adds a transition handler for a specific from / to state combination
    * pass the from / to states as the first 2 arguments, and additional arguments for which instance will handle the transition
    * if only 3 args are passed, the instance will handle the in / out transition, and the preloading
    * E.G.
    * this.game.transition.add(this.game.constants.STATE_PRELOAD, this.game.constants.STATE_MENU, this.game.preloader);
    *
    * if 5 arguments are passed, a different instance can be used for in transition, preloading, and out transition
    * E.G.
    * this.game.transition.add(this.game.constants.STATE_PRELOAD, this.game.constants.STATE_MENU, this.game.transitionOutHandler, this.game.preloadHandler, this.game.transitionInHandler);
    *
    * transition handlers are expected to behave as follows:
    * an out transition handler should have a transitionIn method and dispatch a transitionComplete signal when done
    * an in transition handler should have a transitionOut method and dispatch a transitionCOmplete signal when done
    * a preload handler should have loadStart, loadProgress, and loadComplete methods
    * the loadProgress method may accept a up to 4 parameters for progress (percent of files loaded), id, fileIndex, and totalFiles
    *
    * @param {string} fromState - the state being transitioned from
    * @param {string} toState - the state being transitioned to
    * @param {outHandler} outHandler - the instance that will handle the transition from the fromState
    * @param {preloadHandler} preloadHandler - the instance that will handle preloading the toState
    * @param {inHandler} inHandler - the instance that will handle the in transition when the toState is completely loaded
    * @return {Object} transition reference that was added to _transitions
    */
    public add(fromState: string, toState: string | IPreloadHandler, outHandler?: ITransitionHandler, preloadHandler?: IPreloadHandler, inHandler?: ITransitionHandler): void {
        var args;
        if (arguments.length < 5) {
            if (fromState === 'all') {
                args = [].slice.call(arguments, 1);
                if (arguments.length === 2)
                    return this._add('all', args[0], args[0], args[0]);
                else
                    return this._add('all', args[0], args[1], args[2]);
            } else {
                args = [].slice.call(arguments, 2);
                return this._add(fromState + '/' + toState, args[0], args[0], args[0]);
            }
        }

        return this._add(fromState + '/' + toState, outHandler, preloadHandler, inHandler);
    }

    public addAll(handler: IPreloadHandler): void {
        return this._add('all', handler, handler, handler);
    }

    /**
    * Adds an exception to the Dijon.TransitionManager in the case where 'all' has been used
    * @param {string} state - the state to add the exception for
    */
    public addException(state: string) {
        this._exceptions[state] = true;
    }

    /**
    * Removes a transition handler for a specific from / to state combination
    */
    public remove(fromState: string, toState?: string) {
        if (arguments.length === 1) {
            this._transitions[fromState] = null;
            delete this._transitions[fromState];
        } else {
            this._transitions[fromState + '/' + toState] = null;
            delete this._transitions[fromState + '/' + toState];
        }
    }

    /**
    * Start the transition to a new state
    * @param {string} state - the state to transition to
    * @param {any} args - an optional parameter. Pass in an object of type any containing specific parameters
    * for the state you are transitioning to. The object can then be deconstructed in that states init(args: any).
    */
    public to(state: string, args?: any) {
        if (this._transition)
            this._clearTransition();

        if (this._exceptions[state])
            return;

        if (args !== undefined) {
            this._args = args;
        }

        this._fromState = this.game.state.current;
        this._toState = state;

        this._transition = this._getTransition(this._fromState, this._toState);

        if (!this._transition) {
            console.log('no transition found for:', this.game.state.current + ' to ' + state);
            this.game.changeState(this._toState);
        }

        this.transitionIn();
    }

    public transitionIn() {
        if (!this._transition)
            return;
        
        if (typeof this._transition.outHandler.transitionIn === 'function') {
            this._isInTransition = true;
            this._transition.outHandler.transitionInComplete.addOnce(this._transitionInComplete, this);
            this._transition.outHandler.transitionIn();
        }
    }

    public canTransitionOut(): boolean {
        return !this._exceptions[this.game.state.current] && this._transition && this._transition.inHandler && typeof this._transition.inHandler.transitionOut === 'function';
    }

    /**
    * After the state is fully loaded and 'built' a call to this is made
    * this is currently made from BaseState in the 'afterBuild' method
    */
    public transitionOut() {
        this._transition.inHandler.transitionOutComplete.addOnce(this._transitionOutComplete, this);
        this._transition.inHandler.transitionOut();
    }

    public get isInTransition(): boolean {
        return this._isInTransition;
    }
}