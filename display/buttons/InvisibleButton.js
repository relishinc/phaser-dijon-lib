var UISprite = require('../UISprite');

var InvisibleButton = function(game, x, y, name, w, h) {

    this.setSize(w, h);
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

InvisibleButton.prototype.update = function() {
    UISprite.prototype.update.call(this);
};

InvisibleButton.prototype.init = function() {
    UISprite.prototype.init.call(this);
    this.inputEnabled = true;
};

InvisibleButton.prototype.buildInterface = function() {
    this.addHitRect();
};

InvisibleButton.prototype.addHitRect = function() {
    if (this.hitWidth > 0 && this.hitHeight > 0) {
        this.hitArea = new Phaser.Rectangle(0, 0, this.hitWidth, this.hitHeight);
    }
};

InvisibleButton.prototype.setSize = function(w, h) {
    this.hitWidth = w || 0;
    this.hitHeight = h || 0;

    this.addHitRect();
};

InvisibleButton.prototype.centerPivot = function() {
    this.hitArea.x = -this.hitWidth * 0.5;
    this.hitArea.y = -this.hitHeight * 0.5;
};

module.exports = InvisibleButton;
