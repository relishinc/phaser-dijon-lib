"use strict";
var Application_1 = require('../mvc/Application');
var AudioManager = (function () {
    function AudioManager() {
        this._defaultVolume = 1;
        this._sprites = {};
        this._sounds = {};
        this._markerLookup = {};
        this.game = Application_1.default.getInstance().game;
    }
    AudioManager.prototype._addAudio = function (key, isAudioSprite) {
        if (isAudioSprite === void 0) { isAudioSprite = false; }
        if (isAudioSprite === true) {
            return this._parseAudioSprite(key, this.game.add.audioSprite(key));
        }
        else {
            return this._allowMultiple(this.game.add.sound(key));
        }
    };
    AudioManager.prototype._parseAudioSprite = function (key, audioSprite) {
        for (var soundKey in audioSprite.sounds) {
            this._allowMultiple(audioSprite.sounds[soundKey]);
            this._markerLookup[soundKey] = key;
        }
        return audioSprite;
    };
    AudioManager.prototype._allowMultiple = function (sound) {
        sound.allowMultiple = true;
        return sound;
    };
    AudioManager.prototype._getKeyFromMarkerName = function (marker) {
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
    };
    AudioManager.prototype._playSpriteMarker = function (key, marker, volume, loop, forceRestart) {
        if (loop === void 0) { loop = false; }
        if (forceRestart === void 0) { forceRestart = true; }
        if (typeof volume !== 'undefined') {
            if (typeof volume === 'string') {
                if (volume.indexOf('+') >= 0 || volume.indexOf('-') >= 0) {
                    volume = this._defaultVolume + parseFloat(volume);
                }
                else {
                    volume = parseFloat(volume);
                }
            }
        }
        else {
            volume = this._defaultVolume;
        }
        loop = loop || false;
        forceRestart = forceRestart === false ? false : true;
        return this._sprites[key].play(marker, volume);
    };
    AudioManager.prototype._stopSpriteMarker = function (key, marker) {
        if (typeof this._sprites === 'undefined' || typeof this._sprites[key] === 'undefined') {
            return false;
        }
        return this._sprites[key].stop(marker);
    };
    AudioManager.prototype._stopSound = function (sound) {
        return sound.stop();
    };
    AudioManager.prototype.addAudio = function (key, isAudioSprite) {
        if (isAudioSprite === void 0) { isAudioSprite = false; }
        if (isAudioSprite === true) {
            return this.addAudioSprite(key);
        }
        return this.addSound(key);
    };
    AudioManager.prototype.addSound = function (key) {
        if (typeof this._sounds[key] !== 'undefined') {
            return this._sounds[key];
        }
        this._sounds[key] = this.game.add.audio(key);
        this._sounds[key].allowMultiple = true;
        return this._sounds[key];
    };
    AudioManager.prototype.addAudioSprite = function (key) {
        if (typeof this._sprites[key] !== 'undefined') {
            return this._sprites[key];
        }
        this._sprites[key] = this._addAudio(key, true);
        return this._sprites[key];
    };
    AudioManager.prototype.playAudio = function (marker, volume, loop, forceRestart) {
        if (loop === void 0) { loop = false; }
        if (forceRestart === void 0) { forceRestart = true; }
        if (this._getKeyFromMarkerName(marker)) {
            return this.playSpriteMarker(marker, volume, loop, forceRestart);
        }
        return this.playSound(marker, volume, loop, forceRestart);
    };
    AudioManager.prototype.playDelayedAudio = function (delay, marker, volume, loop, forceRestart) {
        if (loop === void 0) { loop = false; }
        if (forceRestart === void 0) { forceRestart = true; }
        if (this._getKeyFromMarkerName(marker)) {
            return this.playDelayedSpriteMarker(delay, marker, volume, loop, forceRestart);
        }
        return this.playDelayedSound(delay, marker, volume, loop, forceRestart);
    };
    AudioManager.prototype.playSound = function (key, volume, loop, forceRestart) {
        if (loop === void 0) { loop = false; }
        if (forceRestart === void 0) { forceRestart = true; }
        if (typeof this._sounds[key] === 'undefined') {
            return null;
        }
        volume = typeof volume === 'undefined' ? this._defaultVolume : volume;
        return this._sounds[key].play("", 0, volume, loop, forceRestart);
    };
    AudioManager.prototype.playSpriteMarker = function (marker, volume, loop, forceRestart) {
        if (loop === void 0) { loop = false; }
        if (forceRestart === void 0) { forceRestart = true; }
        var key = this._getKeyFromMarkerName(marker);
        if (!key) {
            console.log('marker not found', marker);
            return null;
        }
        return this._playSpriteMarker(key, marker, volume, loop, forceRestart);
    };
    AudioManager.prototype.playDelayedSound = function (delay, key, volume, loop, forceRestart) {
        if (loop === void 0) { loop = false; }
        if (forceRestart === void 0) { forceRestart = true; }
        this.game.time.events.add(delay, this.playSound, this, key, volume, loop, forceRestart);
        return null;
    };
    AudioManager.prototype.playDelayedSpriteMarker = function (delay, marker, volume, loop, forceRestart) {
        if (loop === void 0) { loop = false; }
        if (forceRestart === void 0) { forceRestart = true; }
        this.game.time.events.add(delay, this.playSpriteMarker, this, marker, volume, loop, forceRestart);
        return null;
    };
    AudioManager.prototype.stopAudio = function (marker) {
        if (this._getKeyFromMarkerName(marker)) {
            return this.stopSpriteMarker(marker);
        }
        return this.stopSound(marker);
    };
    AudioManager.prototype.stopSound = function (key) {
        if (typeof this._sounds === 'undefined' || typeof this._sounds[key] === 'undefined') {
            return;
        }
        return this._sounds[key].stop();
    };
    AudioManager.prototype.stopSpriteMarker = function (marker) {
        var key = this._getKeyFromMarkerName(marker);
        if (!key) {
            console.log('marker not found', marker);
            return;
        }
        this._stopSpriteMarker(key, marker);
    };
    AudioManager.prototype.removeSound = function (key) {
        if (typeof this._sounds === 'undefined' || typeof this._sounds[key] === 'undefined') {
            return false;
        }
        if (this._sounds[key]) {
            this.stopSound(key);
            this._sounds[key].destroy();
            delete this._sounds[key];
        }
    };
    AudioManager.prototype.removeSprite = function (key) {
        if (typeof this._sprites === 'undefined' || typeof this._sprites[key] === 'undefined') {
            return;
        }
        this.stopSpriteMarker(key);
        this._sprites[key] = null;
        delete this._sprites[key];
    };
    AudioManager.prototype.fade = function (sound, volume, time, stop) {
        if (stop === void 0) { stop = false; }
        if (!sound)
            return;
        if (sound.fadeTween && sound.fadeTween)
            this.game.tweens.remove(sound.fadeTween);
        sound.fadeTween = this.game.add.tween(sound).to({
            volume: volume
        }, time || 300, Phaser.Easing.Linear.None);
        if (stop === true)
            sound.fadeTween.onComplete.addOnce(function () { this._stopSound(sound); }, this);
        return sound.fadeTween.start();
    };
    Object.defineProperty(AudioManager.prototype, "defaultVolume", {
        get: function () {
            return this._defaultVolume;
        },
        set: function (vol) {
            this._defaultVolume = vol;
        },
        enumerable: true,
        configurable: true
    });
    return AudioManager;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AudioManager;
//# sourceMappingURL=AudioManager.js.map