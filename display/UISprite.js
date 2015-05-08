var UISprite = function(game, x, y, key, frame, name, autoAdd) {

    Phaser.Sprite.call(this, game, x, y, key, frame);
    this.__frameName = frame;

    this.name = typeof name === 'undefined' ? typeof frame !== 'undefined' ? frame : 'UISprite' : name;

    if (autoAdd !== false) {
        game.add.existing(this);
    }

    this.init();
    this.buildInterface();
};

UISprite.prototype = Object.create(Phaser.Sprite.prototype);
UISprite.prototype.constructor = UISprite;

// public methods

UISprite.prototype.init = function() {
    // initialize variables
};

UISprite.prototype.buildInterface = function() {
    // add visual elements
};

module.exports = UISprite;
