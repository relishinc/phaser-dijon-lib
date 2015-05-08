var AudioManager = function(game, maxChannels) {
    this.game = game;
    this.game.audioManager = this;

    this.maxChannels = maxChannels || AudioManager.CHANNELS;

    this.init();
};

AudioManager.prototype = {
    constructor: AudioManager,

    init: function() {
        this.sprites = {};
        this.sounds = {};
        this.spritesVolume = 1;
        this.soundsVolume = 1;
        this.currentKey = null;
        this.multiChannel = true;
        this.markerLookup = {};

        if (this.multiChannel) {
            this.channels = {};
        }
    },

    addAudio: function(key, audioSprite) {
        //console.log('addAudio', key, audioSprite)
        if (audioSprite === true) {
            return this.addAudioSprite(key);
        }
        return this.addSound(key);
    },

    playAudio: function(marker, volume, loop, forceRestart) {
        if (this._getKeyFromMarkerName(marker)) {
            return this.playSpriteMarker(marker, volume, loop, forceRestart);
        }

        return this.playMusic(marker, volume, loop, forceRestart);
    },

    playDelayedAudio: function(delay, marker, volume, loop, forceRestart) {
        if (this._getKeyFromMarkerName(marker)) {
            //delay, marker, volume, loop, forceRestart
            return this.playDelayedSpriteMarker(delay, marker, volume, loop, forceRestart);
        }
        return this.playDelayedSound(delay, marker, volume, loop, forceRestart);
    },

    addSound: function(key) {
        if (typeof this.sounds[key] !== 'undefined') {
            return this.sounds[key];
        }
        this.sounds[key] = this.game.add.audio(key);
        this.sounds[key].allowMultiple = true;
        return this.sounds[key];
    },

    addAudioSprite: function(key) {
        if (typeof this.sprites[key] !== 'undefined') {
            return this.sprites[key];
        }
        this.sprites[key] = this._addAudio(key, isAudioSprite);

        return this.sprites[key];
    },

    stopAudio: function(marker) {
        if (this._getKeyFromMarkerName(marker)) {
            return this.stopSpriteMarkerMarker(marker);
        }
        return this.stopSound(marker);
    },

    stopSound: function(key) {
        if (typeof this.sounds === 'undefined' || typeof this.sounds[key] === 'undefined') {
            return false;
        }
        return this.sounds[key].stop();
    },

    _addAudio: function(key, isAudioSprite) {
        if (isAudioSprite === true) {
            return this._parseAudioSprite(key, this.game.add.audioSprite(key));
        } else {
            return this._allowMultiple(this.game.add.sound(key));
        }
    },

    _allowMultiple: function(sound) {
        sound.allowMultiple = true;
        return sound;
    },

    _parseAudioSprite: function(key, audioSprite) {
        for (var soundKey in audioSprite.sounds) {
            this._allowMultiple(audioSprite.sounds[soundKey]);
            this.markerLookup[soundKey] = key;
        }
        return audioSprite;
    },

    removeSound: function(key) {
        if (typeof this.sounds === 'undefined' || typeof this.sounds[key] === 'undefined') {
            return false;
        }
        if (this.sounds[key]) {
            this.stopSound(key);
            this.sounds[key].destroy();
            delete this.sounds[key];
        }
    },

    removeSprite: function(key) {
        if (typeof this.sprites === 'undefined' || typeof this.sprites[key] === 'undefined') {
            return false;
        }
        this.stopSpriteMarker(key);
        this.sprites[key] = null;
        delete this.sprites[key];
    },

    playSound: function(key, volume, loop, forceRestart) {
        if (typeof this.sounds[key] === 'undefined') {
            return false;
        }
        volume = volume || this.soundsVolume;
        loop = loop || false;
        forceRestart = forceRestart || true;

        return this.sounds[key].play("", 0, volume, loop, forceRestart);
    },

    stopSound: function(key) {
        if (typeof this.sounds === 'undefined' || typeof this.sounds[key] === 'undefined') {
            return false;
        }
        return this.sounds[key].stop();
    },

    _getKeyFromMarkerName: function(marker) {
        if (typeof this.markerLookup[marker] !== 'undefined') {
            return this.markerLookup[marker];
        }
        for (var key in this.sprites) {
            if (typeof this.sprites[key].sounds[marker] !== 'undefined') {
                this.markerLookup[marker] = key;
                return key;
            }
        }
        return false;
    },

    playSpriteMarker: function(marker, volume, loop, forceRestart) {
        var key = this._getKeyFromMarkerName(marker);
        //console.log(marker,'key is', key);
        if (!key) {
            console.log('marker not found', marker);
            return;
        }

        return this._playSpriteMarker(key, marker, volume, loop, forceRestart);
    },

    playDelayedSpriteMarker: function(delay, marker, volume, loop, forceRestart) {
        this.game.time.events.add(delay, this.playSpriteMarker, this, marker, volume, loop, forceRestart);
    },

    playDelayedSound: function(delay, key, volume, loop, forceRestart) {
        this.game.time.events.add(delay, this.playMusic, this, key, volume, loop, forceRestart);
    },

    stopSpriteMarker: function(marker) {
        var key = this._getKeyFromMarkerName(marker);
        if (!key) {
            console.log('marker not found', marker);
            return;
        }
        return this.stopSpriteMarker(key, marker);
    },

    _playSpriteMarker: function(key, marker, volume, loop, forceRestart) {
        if (typeof volume !== 'undefined') {
            if (typeof volume === 'string') {
                if (volume.indexOf('+') >= 0 || volume.indexOf('-') >= 0) {
                    volume = this.spritesVolume + parseFloat(volume);
                } else {
                    volume = parseFloat(volume);
                }
            }
        } else {
            volume = this.spritesVolume;
        }

        volume = volume || this.spritesVolume;

        if (volume > 1) {
            volume = 1;
        }

        loop = loop || false;
        forceRestart = forceRestart === false ? false : true;

        /*if (this.multiChannel){
            return this._getChannel(key).play(marker, volume);
        }*/
        if (!this.game.device.webAudio && this.sprites[key].get(marker).isPlaying) {
            this.stopSpriteMarker(key, null);
        }
        //console.log(this.sprites[key].get(marker))
        //return this.sprites[key].get(marker).play(marker, null, volume, loop, forceRestart);
        return this.sprites[key].play(marker, volume);
    },

    playDelayedSpriteMarker: function(delay, key, marker, volume, loop, forceRestart) {
        this.game.time.events.add(delay, this.playSpriteMarker, this, key, marker, volume, loop, forceRestart);
    },

    stopSpriteMarker: function(key, marker) {
        if (typeof this.sprites === 'undefined' || typeof this.sprites[key] === 'undefined') {
            return false;
        }
        this.sprites[key].stop(marker);
    }
};

AudioManager.CHANNELS = 4;

module.exports = AudioManager;
