var BaseState = function() {
    Phaser.State.call(this);
};

BaseState.prototype = Object.create(Phaser.State.prototype);
BaseState.prototype.constructor = BaseState;

BaseState.prototype = {
    // Phaser.State overrides
    init: function() {},

    preload: function() {
        if (this.getPreloadID() !== null)
            this.game.asset.loadAssets(this.getPreloadID());
    },

    create: function() {
        if (!this.game.asset.allSoundsDecoded()) {
            this.game.asset.onLoadCompleteAndAudioDecoded.addOnce(this.create, this);
            return;
        }

        this.buildInterface();
        this.afterBuildInterface();
        this.startBuild();

    },

    shutdown: function() {
        this._removeAudio();
        this._removeStateProps();
    },

    // public methods

    getPreloadID: function() {
        return null;
    },

    getBuildInterval: function() {
        return 20;
    },

    getBuildSequence: function() {
        return [];
    },

    buildInterface: function() {
        // called after all sounds are loaded and decoded
    },

    afterBuildInterface: function() {
        // called after buildInterface is called
    },

    startBuild: function() {
        this.game.sequence.run(this.getBuildSequence(), this, this.getBuildInterval(), this.preAfterBuild, this);
    },

    preAfterBuild: function() {
        if (typeof this.game.transition !== 'undefined')
            this.game.transition.transitionOut();

        if (this.game.debugger) {
            this.game.debugger.selectedObject = null;
            this.game.debugger.refresh();
        }

        this.afterBuild();
    },

    afterBuild: function() {
        // override me freely
    },

    addAudio: function(track) {
        if (typeof this.audio === 'undefined') {
            this._audio = [];
        }
        this._audio.push(track);
        return track;
    },


    // private methods

    _removeAudio: function() {
        var sound;
        if (typeof this._audio !== 'undefined') {
            while (this._audio.length > 0) {
                sound = this._audio.pop();
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
            key;

        // delete anything attached to "this" that's not part of the default Phaser.State.prototype
        while (keys.length > 0) {
            key = keys.pop();
            if (defaults.indexOf(key) == -1) {
                this[key] = null;
                delete this[key];
            }
        }
    }

};

module.exports = BaseState;
