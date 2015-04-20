var UISprite = require('../UISprite');

var SpriteButton = function(game, x, y, key, frame, name, autoAdd) {
    UISprite.call(this, game, x, y, key, frame, name, autoAdd);
};

SpriteButton.prototype = Object.create(UISprite.prototype);
SpriteButton.prototype.constructor = SpriteButton;

SpriteButton.prototype.update = function() {

};

SpriteButton.prototype.init = function() {
    UISprite.prototype.init.call(this, arguments);

    this.inputEnabled = true;

    this.animations.add('up', [this.getFramePrefix() + '/up'], 0, false, false);
    this.animations.add('over', [this.getFramePrefix() + '/over'], 0, false, false);
    this.animations.add('down', [this.getFramePrefix() + '/down'], 0, false, false);

    this.events.onInputOver.add(this.onRollover, this);
    this.events.onInputOut.add(this.onRollout, this);
    this.events.onInputDown.add(this.onDown, this);
    this.events.onInputUp.add(this.onClicked, this);

    this.input.useHandCursor = true;
};

SpriteButton.prototype.onDown = function() {
    this.animations.play('down', 0, false);
};

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

SpriteButton.prototype.onClicked = function() {
    this.animations.play('up', 0, false);
};

SpriteButton.prototype.flash = function(flashTime) {
    if (this.flashing) {
        return false;
    }
    this.flashing = true;
    this.flashTime = flashTime || 1000;
    this.currentFlashFrame = 0;
    this.flashInterval = this.game.time.events.loop(this.flashTime, this.onFlash, this);
};

SpriteButton.prototype.stopFlashing = function() {
    this.game.time.events.remove(this.flashInterval);
    this.flashing = false;
    this.animations.play('up', 0, false);
};

SpriteButton.prototype.onFlash = function() {
    if (this.currentFlashFrame === 0) {
        this.currentFlashFrame = 1;
        this.animations.play('over', 0, false);
        return;
    }

    this.currentFlashFrame = 0;
    this.animations.play('up', 0, false);
    return;
};

SpriteButton.prototype.destroy = function() {
    this.stopFlashing();
    UISprite.prototype.destroy.call(this);
};

SpriteButton.prototype.handleClick = UISprite.prototype.handleClick;

module.exports = SpriteButton;
