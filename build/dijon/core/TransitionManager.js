"use strict";
var Application_1 = require('../mvc/Application');
var TransitionManager = (function () {
    function TransitionManager() {
        this.onTransitionOutComplete = new Phaser.Signal();
        this.onTransitionInComplete = new Phaser.Signal();
        this._transition = null;
        this._transitions = {};
        this._exceptions = {};
        this._fromState = null;
        this._toState = null;
        this.game = Application_1.default.getInstance().game;
    }
    TransitionManager.prototype._add = function (id, outHandler, preloadHandler, inHandler) {
        this._transitions[id] = {
            outHandler: outHandler,
            preloadHandler: preloadHandler,
            inHandler: inHandler
        };
    };
    TransitionManager.prototype._getTransition = function (inState, outState) {
        var transition = this._transitions[inState + '/' + outState];
        if (typeof transition === 'undefined')
            transition = this._transitions['all'];
        return typeof transition === 'undefined' ? null : transition;
    };
    TransitionManager.prototype._transitionInComplete = function () {
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
        this.game.changeState(this._toState);
    };
    TransitionManager.prototype._transitionOutComplete = function () {
        this._transition = null;
        this.onTransitionOutComplete.dispatch();
    };
    TransitionManager.prototype._preloadComplete = function () {
        this._transition = this._getTransition(this._fromState, this._toState);
        if (!this._transition)
            return false;
        this.game.asset.onFileComplete.remove(this._transition.preloadHandler.loadProgress, this._transition.preloadHandler);
        if (typeof this._transition.preloadHandler.loadComplete === 'function')
            this._transition.preloadHandler.loadComplete();
    };
    TransitionManager.prototype._clearTransition = function () {
        this._transition.outHandler.transitionInComplete.remove(this._transitionOutComplete, this);
        this._transition.inHandler.transitionOutComplete.remove(this._transitionInComplete, this);
        this.game.asset.onLoadCompleteAndAudioDecoded.remove(this._preloadComplete, this);
        this.game.asset.onLoadStart.remove(this._transition.preloadHandler.loadStart, this._transition.preloadHandler);
        this.game.asset.onFileComplete.remove(this._transition.preloadHandler.loadProgress, this._transition.preloadHandler);
        this._transition = null;
    };
    TransitionManager.prototype.add = function (fromState, toState, outHandler, preloadHandler, inHandler) {
        var args;
        if (arguments.length < 5) {
            if (fromState === 'all') {
                args = [].slice.call(arguments, 1);
                if (arguments.length === 2)
                    return this._add('all', args[0], args[0], args[0]);
                else
                    return this._add('all', args[0], args[1], args[2]);
            }
            else {
                args = [].slice.call(arguments, 2);
                return this._add(fromState + '/' + toState, args[0], args[0], args[0]);
            }
        }
        return this._add(fromState + '/' + toState, outHandler, preloadHandler, inHandler);
    };
    TransitionManager.prototype.addAll = function (handler) {
        return this._add('all', handler, handler, handler);
    };
    TransitionManager.prototype.addException = function (state) {
        this._exceptions[state] = true;
    };
    TransitionManager.prototype.remove = function (fromState, toState) {
        if (arguments.length === 1) {
            this._transitions[fromState] = null;
            delete this._transitions[fromState];
        }
        else {
            this._transitions[fromState + '/' + toState] = null;
            delete this._transitions[fromState + '/' + toState];
        }
    };
    TransitionManager.prototype.to = function (state) {
        if (this._transition)
            this._clearTransition();
        if (this._exceptions[state])
            return;
        this._fromState = this.game.state.current;
        this._toState = state;
        this._transition = this._getTransition(this._fromState, this._toState);
        if (!this._transition) {
            console.log('no transition found for:', this.game.state.current + ' to ' + state);
            this.game.changeState(this._toState);
        }
        this.transitionIn();
    };
    TransitionManager.prototype.transitionIn = function () {
        if (!this._transition)
            return;
        if (typeof this._transition.outHandler.transitionIn === 'function') {
            this._transition.outHandler.transitionInComplete.addOnce(this._transitionInComplete, this);
            this._transition.outHandler.transitionIn();
        }
    };
    TransitionManager.prototype.canTransitionOut = function () {
        return !this._exceptions[this.game.state.current] && this._transition && this._transition.inHandler && typeof this._transition.inHandler.transitionOut === 'function';
    };
    TransitionManager.prototype.transitionOut = function () {
        this._transition.inHandler.transitionOutComplete.addOnce(this._transitionOutComplete, this);
        this._transition.inHandler.transitionOut();
    };
    return TransitionManager;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TransitionManager;
//# sourceMappingURL=TransitionManager.js.map