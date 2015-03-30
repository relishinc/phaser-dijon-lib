var UISprite = require('../UISprite');

var InvisibleButton = function (game, x, y, name, w, h) {
    if (typeof w !== 'undefined' && typeof h !== 'undefined') {
        this.hitRect = new Phaser.Rectangle(0, 0, w, h);
    }
    UISprite.call(this, game, x, y, null, null, name);

    /*
    var graphics = this.game.add.graphics();
    graphics.beginFill(0xFF00FF, 0.5);
    graphics.drawRect(0, 0, w, h);
    this.addChild(graphics);
    */
};

InvisibleButton.prototype = Object.create(UISprite.prototype);
InvisibleButton.prototype.constructor = InvisibleButton;

InvisibleButton.prototype.update = function () {
    UISprite.prototype.update.call(this);
};

InvisibleButton.prototype.init = function () {
    UISprite.prototype.init.call(this);
    this.inputEnabled = true;
    if (this.hitRect) {
        this.hitArea = this.hitRect;
    }
};

module.exports = InvisibleButton;