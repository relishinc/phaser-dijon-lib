var UISprite = require('../UISprite');

var SpriteButton = function (game, x, y, key, frame, name, autoAdd) {
    UISprite.call(this, game, x, y, key, frame, name, autoAdd);
};

SpriteButton.prototype = Object.create(UISprite.prototype);
SpriteButton.prototype.constructor = SpriteButton;

SpriteButton.prototype.update = function () {

};

SpriteButton.prototype.init = function () {

    UISprite.prototype.init.call(this, arguments);

    this.inputEnabled = true;

    this.animations.add('up', [this.getFramePrefix()+'/up'], 0, false, false);
    this.animations.add('over', [this.getFramePrefix()+'/over'], 0, false, false);
    this.animations.add('down', [this.getFramePrefix()+'/down'], 0, false, false);

    this.events.onInputOver.add(this.onRollover, this);
    this.events.onInputOut.add(this.onRollout, this);
    this.events.onInputDown.add(this.onDown, this);
    this.events.onInputUp.add(this.onClicked, this);

    this.input.useHandCursor = true;
};

SpriteButton.prototype.onDown = function () {
    this.animations.play('down', 0, false);
};

SpriteButton.prototype.onRollover = function () {
    this.animations.play('over', 0, false);
    this.game.audioManager.playFXMarker('_button_rollover');
};

SpriteButton.prototype.onRollout = function () {
    this.animations.play('up', 0, false);
};

SpriteButton.prototype.onClicked = function () {
    this.animations.play('up', 0, false);
    this.game.audioManager.playFXMarker('_button_click');
};


SpriteButton.prototype.handleClick = UISprite.prototype.handleClick;

module.exports = SpriteButton;