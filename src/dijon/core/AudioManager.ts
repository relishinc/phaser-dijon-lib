/**
 * AudioManager
 * Wrapper for Phaser.SoundManager
 */
import {Application} from '../application';
import {Game} from '../core';

export class AudioManager {
    public game: Game;

    private _defaultVolume: number = 1;
    private _sprites: { [sprite: string]: Phaser.AudioSprite } = {};
    private _sounds: { [sound: string]: Phaser.Sound } = {};
    private _markerLookup: { [id: string]: string } = {};

    constructor() {
        this.game = Application.getInstance().game;
    }

    // private methods
    private _addAudio(key: string, isAudioSprite: boolean = false): Phaser.Sound | Phaser.AudioSprite {
        if (isAudioSprite === true) {
            return this._parseAudioSprite(key, this.game.add.audioSprite(key));
        } else {
            return this._allowMultiple(this.game.add.sound(key));
        }
    }

    private _parseAudioSprite(key: string, audioSprite: Phaser.AudioSprite): Phaser.AudioSprite {
        for (var soundKey in audioSprite.sounds) {
            this._allowMultiple(audioSprite.sounds[soundKey]);
            this._markerLookup[soundKey] = key;
        }
        return audioSprite;
    }

    private _allowMultiple(sound: Phaser.Sound): Phaser.Sound {
        sound.allowMultiple = true;
        return sound;
    }

    private _getKeyFromMarkerName(marker: string): string | boolean {
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
    }

    private _playSpriteMarker(key: string, marker: string, volume?: any, loop: boolean = false, forceRestart: boolean = true): Phaser.Sound {
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
    }

    private _stopSpriteMarker(key: string, marker: string): boolean | Phaser.Sound {
        if (typeof this._sprites === 'undefined' || typeof this._sprites[key] === 'undefined') {
            return false;
        }
        return this._sprites[key].stop(marker);
    }

    private _stopSound(sound: Phaser.Sound): void {
        return sound.stop();
    }

    // public methods
    /**
    * adds audio to the lookup (called by AssetManager when any sound is loaded, usually not necessary to call from a game)
    * @param {String} key         the Phaser.Cache key of the audio asset
    * @param {Boolean} isAudioSprite whether the asset is an audio sprite
    */
    public addAudio(key: string, isAudioSprite: boolean = false): Phaser.AudioSprite | Phaser.Sound {
        if (isAudioSprite === true) {
            return this.addAudioSprite(key);
        }
        return this.addSound(key);
    }

    /**
    * adds a single sound to the lookup (usually not necessary to call from a game)
    * @param {String} key the Phaser.Cache key of the asset
    * @return {Phaser.Sound} the added sound
    */
    public addSound(key): Phaser.Sound {
        if (typeof this._sounds[key] !== 'undefined') {
            return this._sounds[key];
        }
        this._sounds[key] = this.game.add.audio(key);
        this._sounds[key].allowMultiple = true;
        return this._sounds[key];
    }

    /**
    * adds an audio sprite to the lookup (usually not necessary to call from a game)
    * @param {String} key the Phaser.Cache key of the asset
    * @return {Phaser.AudioSprite} the added audio sprite
    */
    public addAudioSprite(key: string): Phaser.AudioSprite {
        if (typeof this._sprites[key] !== 'undefined') {
            return this._sprites[key];
        }
        this._sprites[key] = <Phaser.AudioSprite>this._addAudio(key, true);
        return this._sprites[key];
    }

    /**
    * a global method to play a sound - will check audio sprite markers for the provided key first, then single sounds
    * @param  {String} marker       the sound marker (or key) to check for
    * @param  {Number} volume       the volume at which to play the sound
    * @param  {Boolean} loop         whether the sound should loop (won't work if it's a sprite marker, and "loop" hasn't been set in the audio sprite descriptor file)
    * @param  {Boolean} forceRestart whether to restart the sound if it's already playing
    * @return {Phaser.Sound}              the playing sound
    */
    public playAudio(marker: string, volume?: number, loop: boolean = false, forceRestart: boolean = true): Phaser.Sound {
        if (this._getKeyFromMarkerName(marker)) {
            return this.playSpriteMarker(marker, volume, loop, forceRestart);
        }

        return this.playSound(marker, volume, loop, forceRestart);
    }

    /**
    * calls Dijon.AudioManager.playAudio on a delay
    * @param  {int} delay        number of milliseconds to delay the sound
    * @param  {String} marker       the sound marker (or key) to check for
    * @param  {Number} volume       the volume at which to play the sound
    * @param  {Boolean} loop         whether the sound should loop (won't work if it's a sprite marker, and "loop" hasn't been set in the audio sprite descriptor file)
    * @param  {Boolean} forceRestart whether to restart the sound if it's already playing
    */
    public playDelayedAudio(delay: number, marker: string, volume?: number, loop: boolean = false, forceRestart: boolean = true): Phaser.Sound {
        if (this._getKeyFromMarkerName(marker)) {
            return this.playDelayedSpriteMarker(delay, marker, volume, loop, forceRestart);
        }
        return this.playDelayedSound(delay, marker, volume, loop, forceRestart);
    }

    /**
    * plays a single sound
    * @param  {String} key          the Phaser.Cache key for the sound
    * @param  {Number} volume       the volume at which to play the sound
    * @param  {Boolean} loop         whether the sound should loop (won't work if it's a sprite marker, and "loop" hasn't been set in the audio sprite descriptor file)
    * @param  {Boolean} forceRestart whether to restart the sound if it's already playing
    * @return {Phaser.Sound} the playing sound
    */
    public playSound(key: string, volume?: number, loop: boolean = false, forceRestart: boolean = true): Phaser.Sound {
        if (typeof this._sounds[key] === 'undefined') {
            return null;
        }
        volume = typeof volume === 'undefined' ? this._defaultVolume : volume;

        return this._sounds[key].play("", 0, volume, loop, forceRestart);
    }

    // similat to playSound, but just returns the Phaser.Sound instance
    public getSound(key: string, volume?: number, loop: boolean = false, forceRestart: boolean = true): Phaser.Sound{
        if (typeof this._sounds[key] === 'undefined') {
            return null;
        }
        volume = typeof volume === 'undefined' ? this._defaultVolume : volume;

        return this._sounds[key];
    }

    /**
    * plays a marker from an audio sprite
    * @param  {String} marker       the marker to check for (will check all audio sprites)
    * @param  {Number} volume       the volume at which to play the sound
    * @param  {Boolean} loop         whether the sound should loop (won't work if it's a sprite marker, and "loop" hasn't been set in the audio sprite descriptor file)
    * @param  {Boolean} forceRestart whether to restart the sound if it's already playing
    * @return {Phaser.Sound} the playing sound
    */
    public playSpriteMarker(marker: string, volume?: number, loop: boolean = false, forceRestart: boolean = true): Phaser.Sound {
        const key = this._getKeyFromMarkerName(marker);

        if (!key) {
            console.log('marker not found', marker);
            return null;
        }

        return this._playSpriteMarker(<string>key, marker, volume, loop, forceRestart);
    }

    public playDelayedSound(delay: number, key: string, volume?: number, loop: boolean = false, forceRestart: boolean = true): Phaser.Sound {
        this.game.time.events.add(delay, this.playSound, this, key, volume, loop, forceRestart);
        return null;
    }

    public playDelayedSpriteMarker(delay: number, marker: string, volume?: number, loop: boolean = false, forceRestart: boolean = true): Phaser.Sound {
        this.game.time.events.add(delay, this.playSpriteMarker, this, marker, volume, loop, forceRestart);
        return null;
    }

    /**
    * stops any playing audio file with the given marker
    * checks audio sprites first, then single sounds
    * @return {Phaser.Sound} the sound that was stopped
    */
    public stopAudio(marker: string): void {
        if (this._getKeyFromMarkerName(marker)) {
            return this.stopSpriteMarker(marker);
        }
        return this.stopSound(marker);
    }

    /**
    * stops a single sound from playing
    * @return {Phaser.Sound} the sound that was stopped
    */
    public stopSound(key: string): void {
        if (typeof this._sounds === 'undefined' || typeof this._sounds[key] === 'undefined') {
            return;
        }
        return this._sounds[key].stop();
    }

    /**
    * stops a single sound from playing
    * @return {Phaser.Sound} the sound that was stopped
    */
    public stopSpriteMarker(marker: string): void {
        var key = this._getKeyFromMarkerName(marker);
        if (!key) {
            console.log('marker not found', marker);
            return;
        }
        this._stopSpriteMarker(<string>key, marker);
    }

    /**
    * stops removes a sound from Dijon.AudioManager's lookup
    * @param  {String} key the key of the sound to be removed
    * @return {void}
    */
    public removeSound(key) {
        if (typeof this._sounds === 'undefined' || typeof this._sounds[key] === 'undefined') {
            return false;
        }
        if (this._sounds[key]) {
            this.stopSound(key);
            this._sounds[key].destroy();
            delete this._sounds[key];
        }
    }

    /**
    * stops removes an audio sprite from Dijon.AudioManager's lookup
    * @param  {String} key the key of the sound to be removed
    * @return {void}
    */
    public removeSprite(key: string): void {
        if (typeof this._sprites === 'undefined' || typeof this._sprites[key] === 'undefined') {
            return;
        }
        this.stopSpriteMarker(key);
        this._sprites[key] = null;
        delete this._sprites[key];
    }

    public fade(sound: Phaser.Sound, volume: number, time: number, stop: boolean = false): Phaser.Tween {
        if (!sound)
            return;

        if (sound.fadeTween && sound.fadeTween)
            this.game.tweens.remove(sound.fadeTween);

        sound.fadeTween = this.game.add.tween(sound).to({
            volume: volume
        }, time || 300, Phaser.Easing.Linear.None);

        if (stop === true)
            sound.fadeTween.onComplete.addOnce(function () { this._stopSound(sound) }, this);

        return sound.fadeTween.start();
    }

    // getter / setter
    /**
    * Sets the default volume for all sounds (used in the case where a volume is not supplied to the playAudio, playSound, or playSpriteMarker methods)
    */
    public set defaultVolume(vol: number) {
        this._defaultVolume = vol;
    }

    public get defaultVolume(): number {
        return this._defaultVolume;
    }
}