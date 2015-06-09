var UISprite = require('../UISprite');
var UIGroup = require('../UIGroup');

var Popup = function(game, x, y, name, size, text, autoRemoveTime) {
    this.offsetX = 0;
    this.offsetY = 0;

    this.size = null;
    this.text = null;

    this.autoRemoveTime = false;

    if (typeof size !== 'undefined') {
        this.size = size;
    }

    if (typeof text !== 'undefined') {
        this.text = text;
    }

    if (typeof autoRemoveTime !== 'undefined') {
        this.autoRemove = true;
        this.autoRemoveTime = isNaN(autoRemoveTime) ? 3 : autoRemoveTime;
    }

    UIGroup.call(this, game, null, name, false);

    this.x = x || 0;
    this.y = y || 0;

    if (this.x - this.width * 0.5 < Popup.PADDING) {
        this.x = this.width * 0.5 + Popup.PADDING;
    }

    if (this.x + this.width * 0.5 > (this.game.width - Popup.PADDING)) {
        this.x = this.game.width - this.width * 0.5 - Popup.PADDING;
    }

    if (this.y - this.height * 0.5 < Popup.PADDING) {
        this.y = this.height * 0.5 + Popup.PADDING;
    }

    if (this.y + this.height * 0.5 > (this.game.height - Popup.PADDING)) {
        this.y = this.game.height - this.height * 0.5 - Popup.PADDING;
    }
};

Popup.prototype = Object.create(UIGroup.prototype);
Popup.prototype.constructor = Popup;

Popup.prototype.update = function() {
    UIGroup.prototype.update.call(this);
};

Popup.prototype.init = function() {
    UIGroup.prototype.init.call(this);

    this.bg = this.add(new UISprite(this.game, 0, 0, 'ui', 'popup-bg'));
    this.bg.pivot.x = this.bg.width >> 1;
    this.bg.pivot.y = this.bg.height >> 1;

    if (this.size) {
        this.setWidth(this.size);
    }

    if (this.text) {
        this.setText();
    }

    if (this.autoRemove) {
        this.startAutoRemoveTimer();
    }
};

Popup.prototype.buildInterface = function() {
    UIGroup.prototype.buildInterface.call(this);
};

Popup.prototype.setText = function() {
    // override this method to add text
};

Popup.prototype.startAutoRemoveTimer = function() {
    this.removalTween = this.game.add.tween(this).to({
        alpha: 0
    }, 200, Phaser.Easing.Linear.Out, true, this.autoRemoveTime * Phaser.Timer.SECOND).onComplete.addOnce(this.removeThis, this);
};

Popup.prototype.setWidth = function(width) {
    while (this.bg.width > width) {
        this.bg.scale.x -= 0.01;
        this.bg.scale.y -= 0.01;
    }
};

Popup.prototype.setHeight = function(height) {
    while (this.bg.height > height) {
        this.bg.scale.x -= 0.01;
        this.bg.scale.y -= 0.01;
    }
};

Popup.prototype.destroy = function() {
    this.removeAll(true, true);
};

Popup.prototype.removeThis = function() {
    this.game.removePopup(this);
};

Popup.PADDING = 40;

module.exports = Popup;
