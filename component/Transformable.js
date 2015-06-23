Dijon.Transformable = function(iconKey, iconFrame, iconAngle, padding, iconOffset) {
    this.name = 'Transformable';

    this._iconKey = iconKey;
    this._iconFrame = iconFrame;
    this._iconAngle = iconAngle || 0;
    this._padding = typeof padding === 'undefined' ? 100 : padding;

    this._iconOffset = typeof iconOffset === 'undefined' ? {
        x: 0,
        y: 0
    } : iconOffset;
};

Dijon.Transformable.prototype = {
    constructor: Dijon.Transformable,

    setOwner: function(owner) {
        this.owner = owner;
        this.game = this.owner.game;
    },

    init: function() {
        this.owner.inputEnabled = true;
        this._pointer = this.game.input.activePointer;

        if (this.game.device.desktop) {
            this.owner.input.useHandCursor = true;
        }

        this.owner.events.onInputDown.add(this._onOwnerPress, this);
    },

    buildInterface: function() {
        this._createHitArea();
        if (typeof this.game.__transformable === 'undefined') {
            this.game.__transformable = this.game.add.group();
            this.game.__transformableFX = this.game.add.group();

            var gfx = this.game.add.graphics();
            gfx.beginFill(0xFF0000);
            gfx.drawRect(0, 0, 100, 100);
            gfx.endFill();

            this._hitZone = this.game.__transformableHitZone = this.game.__transformable.add(this.game.add.image(0, 0, gfx.generateTexture()));
            this._hitZone.name = 'Rotateable_hitZone';
            this._hitZone.centerPivot();

            this._icon = this.game.__transformableRotateIcon = this.game.__transformableFX.add(this.game.add.image(0, 0, this._iconKey, this._iconFrame));
            this._icon.inputEnabled = false;
            this._icon.centerPivot();
            this._icon.alpha = 0;
            this._icon.visible = false;
            this.game.world.remove(gfx, true);
            this.game.__transformable.visible = false;
        } else {
            this._hitZone = this.game.__transformableHitZone;
            this._icon = this.game.__transformableRotateIcon;
        }

        this.showTween = this.game.add.tween(this._icon).to({
            alpha: 1
        }, 300, Phaser.Easing.Quadratic.Out);

        this.hideTween = this.game.add.tween(this._icon).to({
            alpha: 0
        }, 200, Phaser.Easing.Quadratic.In);

        this.hideTween.onComplete.add(this._makeIconInvisible, this);
    },

    update: function() {
        if (this.game.__transformableSelected != this.owner)
            return;
        var inRotateArea = this._inRotateArea(),
            angle;
        if (inRotateArea) {
            this._showIcon();
        } else if (this._rotating) {
            angle = Math.atan2(this._pointer.y - this._initialPosition.y, this._pointer.x - this._initialPosition.x) * 180 / Math.PI;
            this.owner.angle = this._initialAngle + angle;
        } else if (this._pressed && this._moving) {
            this.owner.x = this._pointer.x + this._dist.x;
            this.owner.y = this._pointer.y + this._dist.y;
        }

        if (!this._rotating && this._iconShowing && !inRotateArea)
            this._hideIcon();

        this._icon.position.set(this._pointer.x + this._iconOffset.x, this._pointer.y + this._iconOffset.y);
    },

    destroy: function() {
        this.owner.events.onInputDown.add(this._onPress, this);
        this.game.input.onDown.remove(this._onPress, this);
        this.game.input.onUp.remove(this._onRelease, this);

        if (typeof this.game.__transformable !== 'undefined') {
            this.game.__transformable.destroy();
            this.game.__transformable = null;
            delete this.game.__transformable;
        }

        if (typeof this.game.__transformableFX !== 'undefined') {
            this.game.__transformableFX.destroy();
            this.game.__transformableFX = null;
            delete this.game.__transformableFX;
        }

        this.owner.hitArea = null;
    },

    _createHitArea: function() {
        var bounds = this.owner.getBounds();
        this.owner.hitArea = new Phaser.Rectangle(-this._padding, -this._padding, bounds.width + this._padding * 2, bounds.height + this._padding * 2);
    },

    _showIcon: function() {
        this._iconShowing = true;

        this.showTween.start();
        this._icon.visible = true;
    },

    _hideIcon: function() {
        this._iconShowing = false;
        this.hideTween.start();
    },

    _onOwnerPress: function() {
        this.game.input.onUp.remove(this._onRelease, this);
        this.game.input.onDown.remove(this._onPress, this);

        this.game.__transformableSelected = this.owner;
        this.game.world.bringToTop(this.game.__transformableFX);
        this.owner.parent.addChild(this.game.__transformable);
        this.owner.parent.setChildIndex(this.game.__transformable, this.owner.parent.getChildIndex(this.owner));

        this._positionHitZone();

        this.game.__transformable.visible = true;

        this._pressed = true;
        this._selected = true;

        this._pointer = this.game.device.desktop ? this.game.input.activePointer : this.game.input.pointer1;

        this._dist = {
            x: this.owner.x - this._pointer.x,
            y: this.owner.y - this._pointer.y
        };

        this._moving = true;

        this.game.input.onUp.add(this._onRelease, this);
        this.game.input.onDown.add(this._onPress, this);
    },

    _onPress: function() {
        if (this._notInHitZone()) {

            this._pressed = false;
            this._hideIcon();
            this.game.input.onDown.remove(this._onPress, this);
            this.game.__transformable.visible = false;
            this._rotating = false;
            return;
        }

        this._pressed = true;
        this._initialPosition = {
            x: this._pointer.x,
            y: this._pointer.y
        };

        this._initialAngle = this.owner.angle;

        if (this.totalActivePointers === 2)
            this._pointer = this.game.device.desktop ? this.game.input.activePointer : this.game.input.pointer2;
        else
            this._pointer = this.game.input.activePointer;

        if (this.game.device.desktop) {
            if (this._inRotateArea()) {
                this._moving = false;
                this._rotating = true;
            } else {
                this._rotating = false;
                this._moving = true;
            }
        } else {
            if (this.game.input.totalActivePointers === 2) {
                this._moving = false;
                this._rotating = true;
            } else {
                this._rotating = false;
                this._moving = true;
            }
        }
    },

    _onRelease: function() {
        this._positionHitZone();
        this._rotating = false;
        this._hovered = false;
        this._pressed = false;
        this._moving = false;

        this._pointer = this.game.device.desktop ? this.game.input.activePointer : this.game.input.pointer1;

        this._dist = {
            x: this.owner.x - this._pointer.x,
            y: this.owner.y - this._pointer.y
        };

        this._pressed = this._selected && this.game.input.totalActivePointers > 0;
        this._moving = this._selected && this.game.input.totalActivePointers > 0;
        this._hideIcon();

        if (this.game.input.totalActivePointers === 0) {
            this._pressed = false;
            this._moving = false;
            this._rotating = false;
        }
    },

    _positionHitZone: function() {
        this.game.__transformable.position.set(this.game.__transformableSelected.x, this.game.__transformableSelected.y);
        var bounds = this.game.__transformableSelected.getBounds();
        this._hitZone.width = bounds.width + this._padding;
        this._hitZone.height = bounds.height + this._padding;
    },

    _inRotateArea: function() {
        this._hitBounds = this._hitZone.getBounds();
        if (this.game.device.desktop) {
            if (this.game.input.activePointer.x > this._hitBounds.left && this.game.input.activePointer.x < this._hitBounds.left + this._padding && this.game.input.activePointer.y > this._hitBounds.top && this.game.input.activePointer.y < this._hitBounds.top + this._padding) {
                return true;
            }
        }
    },

    _notInHitZone: function() {
        return this.game.input.totalActivePointers <= 1 && !Phaser.Rectangle.containsPoint(this._hitZone.getBounds(), this.game.input.activePointer);
    },

    _makeIconInvisible: function() {
        this._icon.visible = false;
    }
};
