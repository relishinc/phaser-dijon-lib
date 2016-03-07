"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Application_1 = require('../mvc/Application');
var State = (function (_super) {
    __extends(State, _super);
    function State() {
        _super.call(this);
        this._audio = [];
        this._mediator = null;
    }
    State.prototype.init = function () {
    };
    State.prototype.preload = function () {
        if (this.preloadID)
            this.game.asset.loadAssets(this.preloadID);
    };
    State.prototype.create = function () {
        if (!this.game.asset.allSoundsDecoded()) {
            this.game.asset.onLoadCompleteAndAudioDecoded.addOnce(this.create, this);
            return;
        }
        this.buildInterface();
        this.afterBuildInterface();
        this.startBuild();
    };
    State.prototype.shutdown = function () {
        this.removeAudio();
        this.removeMediator();
    };
    State.prototype.listBuildSequence = function () {
        return [];
    };
    State.prototype.buildInterface = function () { };
    State.prototype.afterBuildInterface = function () { };
    State.prototype.startBuild = function () {
        this.game.sequence.run(this.listBuildSequence(), this, this.buildInterval, this.preAfterBuild, this);
    };
    State.prototype.preAfterBuild = function () {
        if (typeof this.game.transition === 'undefined' || !this.game.transition.canTransitionOut()) {
            this.afterBuild();
        }
        else {
            if (this.game.transition.canTransitionOut()) {
                this.game.transition.onTransitionOutComplete.addOnce(this.afterBuild, this);
                this.game.transition.transitionOut();
            }
        }
    };
    State.prototype.afterBuild = function () { };
    State.prototype.addAudio = function (track) {
        if (!this._audio) {
            this._audio = [];
        }
        this._audio.push(track);
        return track;
    };
    State.prototype.removeAudio = function () {
        var sound;
        if (!this._audio) {
            return;
        }
        while (this._audio.length > 0) {
            sound = this._audio.pop();
            if (typeof sound !== 'undefined' && sound != null && typeof sound.stop !== 'undefined') {
                if (typeof sound.onStop !== 'undefined') {
                    sound.onStop.removeAll();
                }
                sound.stop();
            }
        }
    };
    State.prototype.removeMediator = function () {
        if (!this._mediator)
            return;
        this._mediator.destroy();
        this._mediator = null;
    };
    Object.defineProperty(State.prototype, "preloadID", {
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(State.prototype, "buildInterval", {
        get: function () {
            return 10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(State.prototype, "add", {
        get: function () {
            return this.game.addToGame;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(State.prototype, "app", {
        get: function () {
            return Application_1.default.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(State.prototype, "game", {
        get: function () {
            return this.app.game;
        },
        enumerable: true,
        configurable: true
    });
    return State;
}(Phaser.State));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = State;
//# sourceMappingURL=State.js.map