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

// private methods

UISprite.prototype._getFramePrefix = function() {
    var frameArr,
        prefix;
    if (typeof(this.__frameName) !== 'string') {
        return '';
    }
    if (this.__frameName.indexOf('/')) {
        frameArr = this.__frameName.split('/');
        frameArr.pop();
        prefix = frameArr.join('/');
        return prefix;
    }
    return this.__frameName;
};

// public methods

UISprite.prototype.init = function() {
    // initialize variables
};

UISprite.prototype.buildInterface = function() {
    // add visual elements
};

module.exports = UISprite;
