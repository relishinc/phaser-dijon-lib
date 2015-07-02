/**
 * a wrapper for Phaser.State
 * all game states *except* Boot should extend this
 * @constructor
 */
Dijon.BaseState = function() {
    Phaser.State.call(this);
};

Dijon.BaseState.prototype = Object.create(Phaser.State.prototype);

Dijon.BaseState.prototype = {
    // Phaser.State overrides
    /**
     * called before anything else
     * @override
     */
    init: function() {},

    /**
     * preloads our assets
     * calls the [getPreloadID method]{@link Dijon.BaseState#getPreloadID} to check for an asset list to load
     * @override
     */
    preload: function() {
        if (this.getPreloadID() !== null)
            this.game.asset.loadAssets(this.getPreloadID());
    },

    /**
     * called when assets are all loaded
     * we hacked this a bit to make sure all sounds are decoded before continuing
     * checks in the {@link AssetManager} to see if all the sounds are decoded, then proceeds to call the buildInterface, afterBuildInterface methods and then start the build sequence
     * @override
     */
    create: function() {
        if (!this.game.asset.allSoundsDecoded()) {
            this.game.asset.onLoadCompleteAndAudioDecoded.addOnce(this.create, this);
            return;
        }

        this.buildInterface();
        this.afterBuildInterface();
        this.startBuild();

    },
    /**
     * shuts down the state (called before switching to a new state)
     * removes audio and any state properties outside the default Phaser.State props
     * @override
     */
    shutdown: function() {
        this._removeAudio();
        this._removeStateProps();
    },

    // public methods
    /**
     * gets the preload id for this state (optional)
     * @return {String|null}
     */
    getPreloadID: function() {
        return null;
    },

    /**
     * gets the interval at which to step through the build sequence (in ms)
     * @return {Number}
     */
    getBuildInterval: function() {
        return 20;
    },

    /**
     * gets the build sequence for this state
     * @return {Array} a list of internal methods to call (usually these methods should just add visual elements to the game world)
     */
    getBuildSequence: function() {
        return [];
    },

    /**
     * called when all assets are loaded and sounds are decoded
     */
    buildInterface: function() {
        // called after all sounds are loaded and decoded
    },

    /**
     * called after the buildInterface method is called
     */
    afterBuildInterface: function() {
        // called after buildInterface is called
    },

    /**
     * called after the afterBuildInterface method
     * runs the methods returned from [getBuildSequence method]{@link Dijon.BaseState#getBuildSequence}
     * uses the {@link SequenceManager} to run these methods
     */
    startBuild: function() {
        this.game.sequence.run(this.getBuildSequence(), this, this.getBuildInterval(), this.preAfterBuild, this);
    },

    /**
     * called directly after the build sequence has completed
     * then calls the [afterBuild method]{@link Dijon.BaseState#afterBuild}
     */
    preAfterBuild: function() {
        if (this.game.debugger) {
            this.game.debugger.selectedObject = null;
            this.game.debugger.refresh();
        }

        if (typeof this.game.transition === 'undefined' || !this.game.transition.transitionOut())
            this.afterBuild();
        else {
            this.game.transition.onTransitionOutComplete.addOnce(this.afterBuild, this);
            this.game.transition.transitionOut();
        }
    },

    /**
     * called in the [preAfterBuild method]{@link Dijon.BaseState#preAfterBuild}, after the build sequence has completed
     * useful for overriding
     */
    afterBuild: function() {
        // override me freely
    },

    /**
     * use this to add playing sounds to an internal list
     * all sounds added will be automatically stopped in the shutdown method
     * @param {Phaser.Sound} track the sound to add to the internal list
     * @return {Phaser.Sound} the added track
     */
    addAudio: function(track) {
        if (typeof this.audio === 'undefined') {
            this._audio = [];
        }
        this._audio.push(track);
        return track;
    },


    // private methods
    /**
     * removes all the audio files added using the {@link #addAudio} method
     * called in the [shutdown method]{@link Dijon.BaseState#shutdown}
     * @private
     */
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

    /**
     * removes all properties attached to the state (using this.prop) that aren't part of Phaser.State
     * alleviates problems if this is a state we will return to multiple times
     * @private
     */
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

Dijon.BaseState.prototype.constructor = Dijon.BaseState;
