Dijon.Rotateable = function(iconKey, iconFrame, iconAngle, padding, iconOffset) {
    this.name = 'Dijon.Rotateable';

    this._iconAdded = false;
    this._iconKey = iconKey;
    this._iconFrame = iconFrame;
    this._iconAngle = iconAngle || 0;
    this._padding = typeof padding === 'undefined' ? 100 : padding;
    this._iconOffset = typeof iconOffset === 'undefined' ? {
        x: 0,
        y: 0
    } : iconOffset;
};

Dijon.Rotateable.prototype = {
    constructor: Dijon.Rotateable,

    setOwner: function(owner) {
        this.owner = owner;
        this.game = this.owner.game;
    },

    init: function() {
        if (this.game.device.desktop) {
            this.owner.inputEnabled = true;
            this.owner.input.useHandCursor = true;
            this.owner.events.onInputOver.add(this._onRollover, this);
            this.owner.events.onInputOut.add(this._onRollout, this);
        }

        this.owner.events.onInputDown.add(this._onPress, this);
    },

    buildInterface: function() {

    },

    update: function() {
        if (this.owner.parent && !this._iconAdded)
            this._init();
        if (this._hovered && this._inRotateArea()) {
            if (!this._iconShowing)
                this._showIcon();
        } else if (this._rotating) {
            var angle = Math.atan2(this.game.input.activePointer.y - this._initialPosition.y, this.game.input.activePointer.x - this._initialPosition.x) * 180 / Math.PI;
            this.owner.angle = this._initialAngle + angle;
        }

        if (typeof this.icon !== 'undefined') {
            this.icon.position.set(this.game.input.activePointer.x + this._iconOffset.x, this.game.input.activePointer.y + this._iconOffset.y);
        }
    },

    destroy: function() {
        this.icon.parent.remove(this.icon, true, true);
        this.owner.events.onInputOver.remove(this._onRollover, this);
        this.owner.events.onInputOut.remove(this._onRollout, this);
        this.owner.events.onInputDown.add(this._onPress, this);
        this.game.input.onUp.remove(this._onRelease, this);
        this.owner.hitArea = null;
    },

    _createHitArea: function() {
        var bounds = this.owner.getBounds();
        this.owner.hitArea = new Phaser.Rectangle(-this._padding, -this._padding, bounds.width + this._padding * 2, bounds.height + this._padding * 2);
    },

    _init: function() {
        this._createHitArea();
        this._iconAdded = true;
        this.icon = this.owner.parent.addChild(this.game.add.image(0, 0, this._iconKey, this._iconFrame));
        this.icon.centerPivot();

        this.icon.alpha = 0;
        this.icon.visible = false;

        this.showTween = this.game.add.tween(this.icon).to({
            alpha: 1
        }, 300, Phaser.Easing.Quadratic.Out);

        this.hideTween = this.game.add.tween(this.icon).to({
            alpha: 0
        }, 200, Phaser.Easing.Quadratic.In);

        this.hideTween.onComplete.add(this._makeIconInvisible, this);
    },

    _inRotateArea: function() {
        var bounds;
        if (this.game.device.desktop) {
            bounds = this.owner.getBounds();
            if (this.game.input.activePointer.x < bounds.left && this.game.input.activePointer.x > bounds.left - this._padding && this.game.input.activePointer.y < bounds.top && this.game.input.activePointer.y > bounds.top - this._padding) {
                return true;
            }
        }
    },

    _onRollover: function() {
        this._hovered = true;
    },

    _onRollout: function() {
        this._hovered = false;
        this._hideIcon();
    },

    _showIcon: function() {
        if (this._pressed)
            return;
        this._iconShowing = true;
        this._initialAngle = -this.owner.angle;
        this.showTween.start();
        this.icon.visible = true;
    },

    _hideIcon: function() {
        if (this._pressed)
            return;
        this._iconShowing = false;
        this.hideTween.start();
    },

    _onPress: function() {
        this._pressed = true;

        this._showIcon();

        this._initialPosition = {
            x: this.game.input.activePointer.x,
            y: this.game.input.activePointer.y
        };

        if (this.game.device.desktop && this._inRotateArea()) {
            this._rotating = true;
            this.game.input.onUp.addOnce(this._onRelease, this);
        }

    },

    _onRelease: function() {
        this._pressed = false;

        this._rotating = false;
        this._hovered = false;

        this._createHitArea();
        this._hideIcon();
    },

    _makeIconInvisible: function() {
        this.icon.visible = false;
    }
};
