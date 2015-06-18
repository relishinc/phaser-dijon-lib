// Game managers
// can be used out of the box
var AssetManager = require('./core/AssetManager');
var AudioManager = require('./core/AudioManager');
var TransitionManager = require('./core/TransitionManager');
var SequenceManager = require('./core/SequenceManager');

var Dijon = window.Dijon = Dijon || {
    boot: function(game) {
        game.asset = new AssetManager(game);
        game.audio = new AudioManager(game);
        game.transition = new TransitionManager(game);
        game.sequence = new SequenceManager(game);

        this._addUtilityMethods(game);
    },

    _addUtilityMethods: function(game) {
        game.onWorldInputDisabled = new Phaser.Signal();
        game.onWorldInputEnabled = new Phaser.Signal();

        game.disableElementInput = function(el) {
            if (el.input && el.input.enabled === true) {
                el.wasEnabled = true;
                el.input.enabled = false;
            }
            if (el.children.length > 0) {
                for (var i = 0; i < el.children.length; i++) {
                    this.disableElementInput(el.children[i]);
                }
            }
        };

        game.enableElementInput = function(el) {
            if (el.input && el.input.enabled === false && el.wasEnabled) {
                el.wasEnabled = false;
                el.input.enabled = true;
            }
            if (el.children.length > 0) {
                for (var i = 0; i < el.children.length; i++) {
                    this.enableElementInput(el.children[i]);
                }
            }
        };

        game.disableInput = function(group) {
            return group.forEach(function(el) {
                if (el instanceof Phaser.Group) {
                    return this.disableInput(el);
                } else {
                    return this.disableElementInput(el);
                }
            }, this);
        };

        game.disableWorldInput = function() {
            this.disableInput(this.world);
            this.onWorldInputDisabled.dispatch();
        };

        game.enableInput = function(group) {
            return group.forEach(function(el) {
                if (el instanceof Phaser.Group) {
                    return this.enableInput(el);
                } else {
                    return this.enableElementInput(el);
                }
            }, this);
        };

        game.enableWorldInput = function() {
            this.enableInput(this.world);
            this.onWorldInputEnabled.dispatch();
        };
    }
};

// state
Dijon.BaseState = require('./state/BaseState');

// model
Dijon.Model = require('./model/Model');

// mediator
Dijon.BaseMediator = require('./mediator/BaseMediator');

// component
Dijon.BaseComponent = require('./component/BaseComponent');
Dijon.Rotateable = require('./component/Rotateable');

// display classes
// require Dijon Display classes here, as they contain addons to Phaser.GameobjectFactory and Phaser.GameObjectCreator - this way we don't need to require them every time we want to use them

Dijon.UISprite = require('./display/UISprite');
Dijon.UIGroup = require('./display/UIGroup');
Dijon.UIText = require('./display/UIText');

//buttons
Dijon.TextButton = require('./display/button/TextButton');
Dijon.InvisibleButton = require('./display/button/InvisibleButton');

// additional Phaser GameObjectFactory / GameObjectCreator addons
Phaser.GameObjectFactory.prototype.spriteButton = function(x, y, key, framePrefix, callback, callbackContext, group) {
    return this.game.add.button(x, y, key, callback, callbackContext, framePrefix + '/over', framePrefix + '/up', framePrefix + '/down', framePrefix + '/up', group);
};

// Display addons
PIXI.DisplayObject.prototype.centerPivot = function() {
    this.pivot.set(this.width >> 1, this.height >> 1);
};

PIXI.DisplayObject.prototype.setPivot = function(pivotLocation) {
    switch (pivotLocation.toLowerCase()) {
        case 'center':
            this.centerPivot();
            break;
        case 'r':
            this.pivot.set(this.width, this.height >> 1);
            break;
        case 'l':
            this.pivot.set(0, this.height >> 1);
            break;
        case 't':
            this.pivot.set(this.width >> 1, 0);
            break;
        case 'b':
            this.pivot.set(this.width >> 1, this.height);
            break;
        case 'tl':
            this.pivot.set(0, 0);
            break;
        case 'tr':
            this.pivot.set(this.width, 0);
            break;
        case 'bl':
            this.pivot.set(0, this.height);
            break;
        case 'br':
            this.pivot.set(this.width, this.height);
            break;
    }
};

PIXI.DisplayObject.prototype.addOverSound = function(marker, volume) {
    if (!this.inputEnabled)
        this.inputEnabled = true;

    this.overSoundMarker = marker;
    this.overSoundVolume = volume;

    this.events.onInputOver.add(this.playOverSound, this);
};

PIXI.DisplayObject.prototype.addOutSound = function(marker, volume) {
    if (!this.inputEnabled)
        this.inputEnabled = true;

    this.outSoundMarker = marker;
    this.outSoundVolume = volume;

    this.events.onInputOut.add(this.playOutSound, this);
};

PIXI.DisplayObject.prototype.addDownSound = function(marker, volume) {
    if (!this.inputEnabled)
        this.inputEnabled = true;

    this.downSoundMarker = marker;
    this.downSoundVolume = volume;

    this.events.onInputDown.add(this.playDownSound, this);
};

PIXI.DisplayObject.prototype.playOverSound = function() {
    if (this.overSound && this.overSound.isPlaying) {
        this.overSound.stop();
    }
    if (this.outSound && this.outSound.isPlaying) {
        this.outSound.stop();
    }
    this.overSound = this.game.audio.playAudio(this.overSoundMarker, this.overSoundVolume);
};

PIXI.DisplayObject.prototype.stopSounds = function() {
    if (this.overSound && this.overSound.isPlaying) {
        this.overSound.stop();
    }
    if (this.outSound && this.outSound.isPlaying) {
        this.outSound.stop();
    }
    if (this.downSound && this.downSound.isPlaying) {
        this.downSound.stop();
    }
};

PIXI.DisplayObject.prototype.playOutSound = function() {
    this.stopSounds();
    this.outSound = this.game.audio.playAudio(this.outSoundMarker, this.outSoundVolume);
};

PIXI.DisplayObject.prototype.playDownSound = function() {
    this.stopSounds();
    this.downSound = this.game.audio.playAudio(this.downSoundMarker, this.downSoundVolume);
};

module.exports = Dijon;
