var BaseState = function() {
    Phaser.State.call(this);
};

BaseState.prototype = Object.create(Phaser.State.prototype);
BaseState.prototype.constructor = BaseState;

BaseState.prototype = {
    // Phaser.State overrides

    init: function() {
        this.autoHidePreloader = true;
        Phaser.State.prototype.stateKeys = Object.keys(Phaser.State.prototype);
        this.game.stateHistory.push(this.game.state.current);
    },

    create: function() {
        if (!this.game.assetManager.allSoundsDecoded()) {
            this.game.assetManager.onLoadCompleteAndAudioDecoded.addOnce(this.create, this);
            return;
        }

        this.buildInterface();
        this.afterBuildInterface();

        if (this.autoHidePreloader && typeof this.game.preloader !== 'undefined') {
            this.game.preloader.hide();
        }

        if (this.game.debugger) {
            this.game.debugger.selectedObject = null;
            this.game.debugger.refresh();
        }
    },

    shutdown: function() {
        this._removeAudio();
        this._removeStateProps();
    },

    // private methods

    _removeAudio: function() {
        var sound;
        if (typeof this._audio !== 'undefined') {
            while (this._audio.length > 0) {
                sound = this._audio.shift();
                if (typeof sound !== 'undefined' && sound != null && typeof sound.stop !== 'undefined') {
                    if (typeof sound.onStop !== 'undefined') {
                        sound.onStop.removeAll();
                    }
                    sound.stop();
                }
            }
        }
    },

    _removeStateProps: function() {
        var keys = Object.keys(this),
            defaults = Array.prototype.slice.call(Object.keys(Phaser.State.prototype)),
            key,
            index,
            n;

        while (defaults.length > 0) {
            key = defaults.shift();
            index = keys.indexOf(key);
            if (index >= 0) {
                keys.splice(index, 1);
            }
        }

        n = keys.length;
        while (n >= 0) {
            this[keys[n]] = null;
            delete this[keys[n]];
            n--;
        }
    },

    // public methods

    buildInterface: function() {
        // called after all sounds are loaded and decoded
    },

    afterBuildInterface: function() {
        // called after buildInterface is called
    },

    addAudio: function(track) {
        if (typeof this.audio === 'undefined') {
            this._audio = [];
        }
        this._audio.push(track);
        return track;
    },

    reset: function() {
        this.game.model.reset();
    },

    lastState: function(clearWorld, clearCache) {
        if (typeof clearWorld === 'undefined') {
            clearWorld = false;
        }
        if (typeof clearCache === 'undefined') {
            clearCache = false;
        }

        return this.game.state.start(this.getLastState(), clearWorld, clearCache);
    },

    getLastState: function() {
        return this.game.getLastState();
    },

    goBack: function() {
        this.lastState();
    }
};

module.exports = BaseState;
