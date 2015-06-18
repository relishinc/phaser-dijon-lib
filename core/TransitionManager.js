/**
 * The transitionManager is helpful for transitioning in and out of game states
 * use the add method to add handlers for different state transitions
 *
 * @class TransitionManager
 * @param {Phaser.Game} game - A reference to the currently running game.
 */

var TransitionManager = function(game) {
    this.game = game;

    this._init();
};

TransitionManager.prototype = {
    constructor: TransitionManager,

    // private methods
    _init: function() {
        /**
         * The current transition
         * @property {string} _transition
         * @private
         */
        this._transition = null;

        /**
         * Transitions reference
         * Dictionary like object holding references to our transitions
         * @property {string} _transitions
         * @private
         */
        this._transitions = {};

        /**
         * Exceptions, if the 'all' wildcard has been used
         * @property {string} _exceptions
         * @private
         */
        this._exceptions = {};
    },

    _add: function(id, outHandler, preloadHandler, inHandler) {
        this._transitions[id] = {
            outHandler: outHandler,
            preloadHandler: preloadHandler,
            inHandler: inHandler
        };
    },

    _getTransition: function(inState, outState) {
        var transition = this._transitions[inState + '/' + outState];
        if (typeof transition === 'undefined')
            transition = this._transitions['all'];

        return typeof transition === 'undefined' ? null : transition;
    },

    _transitionInComplete: function() {
        if (typeof this._transition.preloadHandler.loadStart === 'function')
            this.game.asset.onLoadStart.addOnce(this._transition.preloadHandler.loadStart, this._transition.preloadHandler);

        if (typeof this._transition.preloadHandler.loadProgress === 'function') {
            this.game.asset.onFileComplete.add(this._transition.preloadHandler.loadProgress, this._transition.preloadHandler);
        }


        this.game.asset.onLoadCompleteAndAudioDecoded.addOnce(this._preloadComplete, this);
        this.game.state.start(this._toState);
    },

    _transitionOutComplete: function() {
        this._transition = null;
    },

    _preloadComplete: function() {
        this.game.asset.onFileComplete.remove(this._transition.preloadHandler.loadProgress, this._transition.preloadHandler);

        if (typeof this._transition.preloadHandler.loadComplete === 'function')
            this._transition.preloadHandler.loadComplete();
    },

    _clearTransition: function() {
        if (!this._transition)
            return false;

        this._transition.outHandler.transitionComplete.remove(this._transitionOutComplete, this);
        this._transition.inHandler.transitionComplete.remove(this._transitionInComplete, this);
        this.game.asset.onLoadCompleteAndAudioDecoded.remove(this._preloadComplete, this);
        this.game.asset.onLoadStart.remove(this._transition.preloadHandler.loadStart, this._transition.preloadHandler);
        this.game.asset.onFileComplete.remove(this._transition.preloadHandler.loadProgress, this._transition.preloadHandler);

        this._transition = null;
    },

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
    add: function(fromState, toState, outHandler, preloadHandler, inHandler) {
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
    },

    /**
     * Adds an exception to the transitionManager in the case where 'all' has been used
     * @param {string} state - the state to add the exception for
     */
    addException: function(state) {
        this._exceptions[state] = true;
    },

    /**
     * Removes a transition handler for a specific from / to state combination
     */
    remove: function(fromState, toState) {
        if (arguments.length === 1) {
            this._transitions[fromState] = null;
            delete this._transitions[fromState];
        } else {
            this._transitions[fromState + '/' + toState] = null;
            delete this._transitions[fromState + '/' + toState];
        }
    },

    /**
     * Start the transition to a new state
     * @param {string} state - the state to transition to
     */
    to: function(state) {
        if (this._transition)
            this._clearTransition();

        if (this._exceptions[state])
            return;

        this._fromState = this.game.state.current;
        this._toState = state;

        this._transition = this._getTransition(this._fromState, this._toState);

        if (!this._transition) {
            console.log('no transition found for:', this.game.state.current + ' to ' + state);
            this.game.state.start(this._toState);
        }

        this.transitionIn();
    },

    transitionIn: function() {
        if (!this._transition)
            return;

        if (typeof this._transition.outHandler.transitionIn === 'function') {
            this._transition.outHandler.transitionComplete.addOnce(this._transitionInComplete, this);
            this._transition.outHandler.transitionIn();
        }
    },

    /**
     * After the state is fully loaded and 'built' a call to this is made
     * this is currently made from BaseState in the 'afterBuild' method
     */
    transitionOut: function() {
        if (!this._transition)
            return;

        if (this._exceptions[this.game.state.current])
            return;

        if (typeof this._transition.inHandler.transitionOut === 'function') {
            this._transition.inHandler.transitionComplete.addOnce(this._transitionOutComplete, this);
            this._transition.inHandler.transitionOut();
        }
    }
};

module.exports = TransitionManager;
