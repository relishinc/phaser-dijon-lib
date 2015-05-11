var UISprite = require('../UISprite');

var InvisibleButton = function(game, x, y, name, w, h) {

    this.setSize(w, h);
    UISprite.call(this, game, x, y, null, null, name);
};

InvisibleButton.prototype = Object.create(UISprite.prototype);
InvisibleButton.prototype.constructor = InvisibleButton;

// UISprite overrides

InvisibleButton.prototype.init = function() {
    UISprite.prototype.init.call(this);
    this.inputEnabled = true;
};

InvisibleButton.prototype.buildInterface = function() {
    this._addHitRect();
};

// private methods

InvisibleButton.prototype._addHitRect = function() {
    if (this._hitWidth > 0 && this._hitHeight > 0) {
        this.hitArea = new Phaser.Rectangle(0, 0, this._hitWidth, this._hitHeight);
    }
};

// public methods

InvisibleButton.prototype.setSize = function(w, h) {
    this._hitWidth = w || 0;
    this._hitHeight = h || 0;

    this._addHitRect();
};

module.exports = InvisibleButton;
