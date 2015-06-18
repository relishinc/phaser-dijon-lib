var AudioManager = function(game) {
    this.game = game;
    this.game.audio = this;

    this._init();
};

AudioManager.prototype = {
    constructor: AudioManager,

    // private methods
    _init: function() {
        this._sprites = {};
        this._sounds = {};

        this._markerLookup = {};
    },

    _addAudio: function(key, isAudioSprite) {
        if (isAudioSprite === true) {
            return this._parseAudioSprite(key, this.game.add.audioSprite(key));
        } else {
            return this._allowMultiple(this.game.add.sound(key));
        }
    },

    _parseAudioSprite: function(key, audioSprite) {
        for (var soundKey in audioSprite.sounds) {
            this._allowMultiple(audioSprite.sounds[soundKey]);
            this._markerLookup[soundKey] = key;
        }
        return audioSprite;
    },

    _allowMultiple: function(sound) {
        sound.allowMultiple = true;
        return sound;
    },

    _getKeyFromMarkerName: function(marker) {
        if (typeof this._markerLookup[marker] !== 'undefined') {
            return this._markerLookup[marker];
        }
        for (var key in this._sprites) {
            if (typeof this._sprites[key].sounds[marker] !== 'undefined') {
                this._markerLookup[marker] = key;
                return key;
            }
        }
        return false;
    },

    _playSpriteMarker: function(key, marker, volume, loop, forceRestart) {
        if (typeof volume !== 'undefined') {
            if (typeof volume === 'string') {
                if (volume.indexOf('+') >= 0 || volume.indexOf('-') >= 0) {
                    volume = this._defaultVolume + parseFloat(volume);
                } else {
                    volume = parseFloat(volume);
                }
            }
        } else {
            volume = this._defaultVolume;
        }

        loop = loop || false;
        forceRestart = forceRestart === false ? false : true;

        return this._sprites[key].play(marker, volume);
    },

    _stopSpriteMarker: function(key, marker) {
        if (typeof this._sprites === 'undefined' || typeof this._sprites[key] === 'undefined') {
            return false;
        }
        this._sprites[key].stop(marker);
    },

    // public methods
    setDefaultVolume: function(vol) {
        this._defaultVolume = vol;
    },

    addAudio: function(key, audioSprite) {
        if (audioSprite === true) {
            return this.addAudioSprite(key);
        }
        return this.addSound(key);
    },

    addSound: function(key) {
        if (typeof this._sounds[key] !== 'undefined') {
            return this._sounds[key];
        }
        this._sounds[key] = this.game.add.audio(key);
        this._sounds[key].allowMultiple = true;
        return this._sounds[key];
    },

    addAudioSprite: function(key) {
        if (typeof this._sprites[key] !== 'undefined') {
            return this._sprites[key];
        }
        this._sprites[key] = this._addAudio(key, true);

        return this._sprites[key];
    },

    playAudio: function(marker, volume, loop, forceRestart) {
        if (this._getKeyFromMarkerName(marker)) {
            return this.playSpriteMarker(marker, volume, loop, forceRestart);
        }

        return this.playSound(marker, volume, loop, forceRestart);
    },

    playDelayedAudio: function(delay, marker, volume, loop, forceRestart) {
        if (this._getKeyFromMarkerName(marker)) {
            return this.playDelayedSpriteMarker(delay, marker, volume, loop, forceRestart);
        }
        return this.playDelayedSound(delay, marker, volume, loop, forceRestart);
    },

    playSound: function(key, volume, loop, forceRestart) {
        if (typeof this._sounds[key] === 'undefined') {
            return false;
        }
        volume = typeof volume === 'undefined' ? this._defaultVolume : volume;
        loop = loop || false;
        forceRestart = forceRestart || true;

        return this._sounds[key].play("", 0, volume, loop, forceRestart);
    },

    playSpriteMarker: function(marker, volume, loop, forceRestart) {
        var key = this._getKeyFromMarkerName(marker);
        if (!key) {
            console.log('marker not found', marker);
            return;
        }

        return this._playSpriteMarker(key, marker, volume, loop, forceRestart);
    },

    playDelayedSound: function(delay, key, volume, loop, forceRestart) {
        this.game.time.events.add(delay, this.playSound, this, key, volume, loop, forceRestart);
    },

    playDelayedSpriteMarker: function(delay, marker, volume, loop, forceRestart) {
        this.game.time.events.add(delay, this.playSpriteMarker, this, marker, volume, loop, forceRestart);
    },

    stopAudio: function(marker) {
        if (this._getKeyFromMarkerName(marker)) {
            return this.stopSpriteMarker(marker);
        }
        return this.stopSound(marker);
    },

    stopSound: function(key) {
        if (typeof this._sounds === 'undefined' || typeof this._sounds[key] === 'undefined') {
            return false;
        }
        return this._sounds[key].stop();
    },

    stopSpriteMarker: function(marker) {
        var key = this._getKeyFromMarkerName(marker);
        if (!key) {
            console.log('marker not found', marker);
            return;
        }
        return this._stopSpriteMarker(key, marker);
    },

    removeSound: function(key) {
        if (typeof this._sounds === 'undefined' || typeof this._sounds[key] === 'undefined') {
            return false;
        }
        if (this._sounds[key]) {
            this.stopSound(key);
            this._sounds[key].destroy();
            delete this._sounds[key];
        }
    },

    removeSprite: function(key) {
        if (typeof this._sprites === 'undefined' || typeof this._sprites[key] === 'undefined') {
            return false;
        }
        this.stopSpriteMarker(key);
        this._sprites[key] = null;
        delete this._sprites[key];
    }

};

AudioManager.CHANNELS = 4;

module.exports = AudioManager;
