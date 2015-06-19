/**
 * Pretty much what it sounds like - sometimes we need to use an invisible button either to overlay a static image, or other reasons...
 * @param {Phaser.Game} game reference to the current Phaser.Game instance
 * @param {Number} x    the x position
 * @param {Number} y    the y position
 * @param {Number} w    the width of the invisible button
 * @param {Number} h    the height of the invisible button
 * @param {String} name for debugging purposes
 * @constructor
 */
Dijon.InvisibleButton = function(game, x, y, w, h, name) {

    this.setSize(w, h);
    Dijon.UISprite.call(this, game, x, y, null, null, name);
};

Dijon.InvisibleButton.prototype = Object.create(Dijon.UISprite.prototype);

// UISprite overrides
/**
 * sets the input enabled
 * @return {void}
 * @override
 */
Dijon.InvisibleButton.prototype.init = function() {
    Dijon.UISprite.prototype.init.call(this);
    this.inputEnabled = true;
};

/**
 * adds the hit rectangle with the specified size
 * @return {void}
 * @override
 */
Dijon.InvisibleButton.prototype.buildInterface = function() {
    this._addHitRect();
};

// private methods
/**
 * adds the clickable area with the size set using the "w" and "h" parameters in the constructor
 * @private
 */
Dijon.InvisibleButton.prototype._addHitRect = function() {
    if (this._hitWidth > 0 && this._hitHeight > 0) {
        this.hitArea = new Phaser.Rectangle(0, 0, this._hitWidth, this._hitHeight);
    }
};

// public methods
/**
 * sets the size of the invisible buton
 * @param {Number} w the width
 * @param {Number} h the height
 */
Dijon.InvisibleButton.prototype.setSize = function(w, h) {
    this._hitWidth = w || 0;
    this._hitHeight = h || 0;

    this._addHitRect();
};

// Phaser addons
Phaser.GameObjectFactory.prototype.invisibleButton = function(x, y, w, h, name, group) {
    if (typeof group === 'undefined') {
        group = this.world;
    }
    return group.add(new Dijon.InvisibleButton(this.game, x, y, w, h, name));
};

Dijon.InvisibleButton.prototype.constructor = Dijon.InvisibleButton;
