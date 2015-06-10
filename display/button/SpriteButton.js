var UISprite = require('../UISprite');

var SpriteButton = function(game, x, y, key, frame, name, autoAdd) {
    UISprite.call(this, game, x, y, key, frame, name, autoAdd);
};

SpriteButton.prototype = Object.create(UISprite.prototype);
SpriteButton.prototype.constructor = SpriteButton;

// UISprite overrides

SpriteButton.prototype.init = function() {
    UISprite.prototype.init.call(this, arguments);

    this.inputEnabled = true;

    this.animations.add('up', [this._getFramePrefix() + '/up'], 0, false, false);
    this.animations.add('over', [this._getFramePrefix() + '/over'], 0, false, false);
    this.animations.add('down', [this._getFramePrefix() + '/down'], 0, false, false);

    if (this.game.device.desktop) {
        this.events.onInputOver.add(this.onRollover, this);
        this.events.onInputOut.add(this.onRollout, this);
    }
    this.events.onInputDown.add(this.onPress, this);
    this.events.onInputUp.add(this.onClicked, this);

    this.input.useHandCursor = true;
};

SpriteButton.prototype.destroy = function() {
    this.stopFlashing();
    UISprite.prototype.destroy.call(this);
};

// private methods

SpriteButton.prototype._onFlash = function() {
    if (this._currentFlashFrame === 0) {
        this._currentFlashFrame = 1;
        this.animations.play('over', 0, false);
        return;
    }

    this._currentFlashFrame = 0;
    this.animations.play('up', 0, false);
    return;
};

// public methods

SpriteButton.prototype.onRollover = function() {
    this.game.time.events.remove(this.flashInterval);
    this.animations.play('over', 0, false);
};

SpriteButton.prototype.onRollout = function() {
    this.animations.play('up', 0, false);
    if (this.flashing) {
        this.flash(this.flashTime);
    }
};

SpriteButton.prototype.onPress = function() {
    this.animations.play('down', 0, false);
};

SpriteButton.prototype.onClicked = function() {
    this.animations.play('up', 0, false);
};

SpriteButton.prototype.flash = function(flashTime) {
    if (this.flashing) {
        return false;
    }
    this.flashing = true;
    this.flashTime = flashTime || 1000;
    this._currentFlashFrame = 0;
    this.flashInterval = this.game.time.events.loop(this.flashTime, this._onFlash, this);
};

SpriteButton.prototype.stopFlashing = function() {
    this.game.time.events.remove(this.flashInterval);
    this.flashing = false;
    this.animations.play('up', 0, false);
};

SpriteButton.prototype.disable = function() {
    this.inputEnabled = false;
    this.alpha = 0.5;
};

SpriteButton.prototype.enable = function() {
    this.inputEnabled = true;
    this.input.useHandCursor = true;
    this.alpha = 1;
};

module.exports = SpriteButton;
