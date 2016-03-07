/// <reference path="../../lib.d.ts" />

/**
 * Centers the pivot point
 */
PIXI.DisplayObject.prototype.centerPivot = function() {
    this.pivot.set(this.width >> 1, this.height >> 1);
};

/**
 * Sets the location of the pivot point
 * @param {String} pivotLocation one of 'center', 'r', 'l', 't', 'b', 'tl', 'tr', 'bl', 'br'
 */
PIXI.DisplayObject.prototype.setPivot = function(pivotLocation) {
    switch (pivotLocation.toLowerCase()) {
        case PIXI.DisplayObject.PIVOT_CENTER:
            this.centerPivot();
            break;
        case PIXI.DisplayObject.PIVOT_RIGHT:
            this.pivot.set(this.width, this.height >> 1);
            break;
        case PIXI.DisplayObject.PIVOT_LEFT:
            this.pivot.set(0, this.height >> 1);
            break;
        case PIXI.DisplayObject.PIVOT_TOP:
            this.pivot.set(this.width >> 1, 0);
            break;
        case PIXI.DisplayObject.PIVOT_BOTTOM:
            this.pivot.set(this.width >> 1, this.height);
            break;
        case PIXI.DisplayObject.PIVOT_TOP_LEFT:
            this.pivot.set(0, 0);
            break;
        case PIXI.DisplayObject.PIVOT_TOP_RIGHT:
            this.pivot.set(this.width, 0);
            break;
        case PIXI.DisplayObject.PIVOT_BOTTOM_LEFT:
            this.pivot.set(0, this.height);
            break;
        case PIXI.DisplayObject.PIVOT_BOTTOM_RIGHT:
            this.pivot.set(this.width, this.height);
            break;
    }
};

PIXI.DisplayObject.PIVOT_CENTER = 'center';
PIXI.DisplayObject.PIVOT_RIGHT = 'r';
PIXI.DisplayObject.PIVOT_LEFT = 'l';
PIXI.DisplayObject.PIVOT_BOTTOM = 'b';
PIXI.DisplayObject.PIVOT_TOP = 't';
PIXI.DisplayObject.PIVOT_TOP_LEFT = 'tl';
PIXI.DisplayObject.PIVOT_TOP_RIGHT = 'tr';
PIXI.DisplayObject.PIVOT_BOTTOM_LEFT = 'bl';
PIXI.DisplayObject.PIVOT_BOTTOM_RIGHT = 'br';


/**
 * addOverSound adds a hover sound to any displayObject
 * @param {String} marker the sound marker to play
 * @param {Number} volume the volume of the sound
 */
PIXI.DisplayObject.prototype.addOverSound = function(marker, volume) {
    if (!this.inputEnabled)
        this.inputEnabled = true;

    this.overSoundMarker = marker;
    this.overSoundVolume = volume;

    this.events.onInputOver.add(this.playOverSound, this);
};

/**
 * addOutSound adds a over sound to any displayObject
 * @param {String} marker the sound marker to play
 * @param {Number} volume the volume of the sound
 */
PIXI.DisplayObject.prototype.addOutSound = function(marker, volume) {
    if (!this.inputEnabled)
        this.inputEnabled = true;

    this.outSoundMarker = marker;
    this.outSoundVolume = volume;

    this.events.onInputOut.add(this.playOutSound, this);
};

/**
 * addDownSound adds a down sound to any displayObject
 * @param {String} marker the sound marker to play
 * @param {Number} volume the volume of the sound
 */
PIXI.DisplayObject.prototype.addDownSound = function(marker, volume) {
    if (!this.inputEnabled)
        this.inputEnabled = true;

    this.downSoundMarker = marker;
    this.downSoundVolume = volume;

    this.events.onInputDown.add(this.playDownSound, this);
};

/**
 * playOverSound plays the over sound
 * @return {void}
 */
PIXI.DisplayObject.prototype.playOverSound = function() {
    if (this.overSound && this.overSound.isPlaying) {
        this.overSound.stop();
    }
    if (this.outSound && this.outSound.isPlaying) {
        this.outSound.stop();
    }
    if (typeof this.overSoundMarker === 'undefined') {
        console.log('no over sound defined')
        return null;
    }
    this.overSound = this.game.audio.playAudio(this.overSoundMarker, this.overSoundVolume);
    return this.overSound;
};

/**
 * playOutSound plays the out sound
 * @return {void}
 */
PIXI.DisplayObject.prototype.playOutSound = function() {
    this.stopSounds();
    if (typeof this.outSoundMarker === 'undefined') {
        console.log('no out sound defined')
        return null;
    }
    this.outSound = this.game.audio.playAudio(this.outSoundMarker, this.outSoundVolume);
    return this.outSound;
};

/**
 * playDownSound plays the down sound
 * @return {void}
 */
PIXI.DisplayObject.prototype.playDownSound = function() {
    this.stopSounds();
    if (typeof this.downSoundMarker === 'undefined') {
        console.log('no down sound defined')
        return null;
    }
    this.downSound = this.game.audio.playAudio(this.downSoundMarker, this.downSoundVolume);
    return this.downSound;
};

/**
 * stopSounds stops the over, out and down sounds
 * @return {void}
 */
PIXI.DisplayObject.prototype.stopSounds = function() {
    if (this.overSound && this.overSound.isPlaying) {
        this.overSound.stop();
    }
    if (this.outSound && this.outSound.isPlaying) {
        this.outSound.stop();
    }
    if (this.downSound && this.downSound.isPlaying) {
        this.downSound.stop();
    }
};

Object.defineProperty(PIXI.DisplayObject.prototype, "scales", {
    get: function() {
        return this.scale.x;
    },

    set: function(value) {
        this.scale.set(value, value);
    }
});
