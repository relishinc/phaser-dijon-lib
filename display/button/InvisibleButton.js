var InvisibleButton = function(game, x, y, w, h, name) {

    this.setSize(w, h);
    Dijon.UISprite.call(this, game, x, y, null, null, name);
};

InvisibleButton.prototype = Object.create(Dijon.UISprite.prototype);
InvisibleButton.prototype.constructor = InvisibleButton;

// UISprite overrides

InvisibleButton.prototype.init = function() {
    Dijon.UISprite.prototype.init.call(this);
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


// Phaser addons
Phaser.GameObjectFactory.prototype.invisibleButton = function(x, y, w, h, name, group) {
    if (typeof group === 'undefined') {
        group = this.world;
    }
    return group.add(new InvisibleButton(this.game, x, y, w, h, name));
};

module.exports = InvisibleButton;
