"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Application_1 = require('../mvc/Application');
var Text = (function (_super) {
    __extends(Text, _super);
    function Text(x, y, text, fontName, fontSize, fontColor, fontAlign, wordWrap, width, lineSpacing, settings) {
        if (text === void 0) { text = ""; }
        if (fontSize === void 0) { fontSize = Text.DEFAULT_FONT_SIZE; }
        if (fontColor === void 0) { fontColor = Text.DEFAULT_FONT_COLOR; }
        if (fontAlign === void 0) { fontAlign = 'left'; }
        if (wordWrap === void 0) { wordWrap = false; }
        if (width === void 0) { width = 0; }
        if (lineSpacing === void 0) { lineSpacing = 0; }
        if (settings === void 0) { settings = null; }
        _super.call(this, Application_1.default.getInstance().game, x, y, text, Text._addSettings({
            font: fontSize + 'px ' + fontName,
            fill: fontColor,
            align: fontAlign,
            wordWrap: wordWrap,
            wordWrapWidth: width
        }, settings));
        this.lineSpacing = lineSpacing;
        this.onAnimationComplete = new Phaser.Signal();
        this._canUpdate = false;
        this._textToAnimate = [];
        this.stopAnimating = function () {
            this._canUpdate = false;
            this._textToAnimate = null;
            this.game.time.events.remove(this._delayTimer);
            this.game.time.events.remove(this._repeatTimer);
        };
        this.roundPixel = function () {
            this.position.set(Math.round(this.x), Math.round(this.y));
        };
        this.text = text.replace(/'/g, "\'");
        this._lowercaseText = this.text.toLowerCase();
        this.setResolution();
    }
    Text.prototype.setText = function (text) {
        _super.prototype.setText.call(this, text);
        this._lowercaseText = this.text.toLowerCase();
        this.setResolution();
        return this;
    };
    Text.prototype.setResolution = function () {
        if (!this.game || !this.game.device.cocoonJS) {
            return;
        }
        else if (this.game.device.cocoonJS) {
            this.resolution = this.game.resolution * this.game.resolution;
        }
    };
    Text.prototype._startTextAnimation = function () {
        this._canUpdate = true;
        this._repeatTimer = this.game.time.events.repeat(this._letterTime * 100, this._textLength, this._updateTextAnimation, this);
    };
    Text.prototype._updateTextAnimation = function () {
        if (!this._canUpdate || !this._textToAnimate) {
            return false;
        }
        var index = this._textLength - this._textToAnimate.length;
        this.addColor(this.style.fill, index);
        this.addColor('rgba(0,0,0,0)', index + 1);
        this._textToAnimate.shift();
        if (this._textToAnimate.length === 0) {
            this.onAnimationComplete.dispatch();
        }
    };
    Text.prototype.setColor = function (color) {
        return this.highlightPhrase(this.text, color, false);
    };
    Text.prototype.resetColor = function () {
        return this.highlightPhrase(this.text, this.style.fill, false);
    };
    Text.prototype.highlightPhrase = function (phrase, color, caseSensitive) {
        if (caseSensitive === void 0) { caseSensitive = false; }
        var text = caseSensitive ? this.text : this._lowercaseText;
        phrase = caseSensitive ? phrase : phrase.toLowerCase();
        var len = phrase.length;
        var startIndex = text.indexOf(phrase);
        var endIndex = startIndex + len;
        while (startIndex <= endIndex) {
            this.addColor(color, startIndex);
            startIndex++;
        }
        this.addColor(this.style.fill, endIndex);
    };
    Text.prototype.animate = function (letterTime, delay) {
        if (letterTime === void 0) { letterTime = 0.1; }
        if (delay === void 0) { delay = 0; }
        this.game.time.events.remove(this._delayTimer);
        this.game.time.events.remove(this._repeatTimer);
        this._letterTime = letterTime;
        this._textLength = this.text.length;
        this._textToAnimate = this.text.split('');
        var startIndex = 0;
        var endIndex = this._textLength;
        while (startIndex <= endIndex) {
            this.addColor('rgba(0,0,0,0)', startIndex);
            startIndex++;
        }
        this._delayTimer = this.game.time.events.add(delay * Phaser.Timer.SECOND, this._startTextAnimation, this);
    };
    Text._addSettings = function (obj, settings) {
        if (!settings)
            return obj;
        for (var prop in settings) {
            if (settings.hasOwnProperty(prop)) {
                obj[prop] = settings[prop];
            }
        }
        return obj;
    };
    Text.DEFAULT_FONT_SIZE = 12;
    Text.DEFAULT_FONT_COLOR = "#000000";
    Text.DEFAULT_FONT = "Helvetica Neue, Arial";
    Text.GLOBAL_PADDING_X = 0;
    Text.GLOBAL_PADDING_Y = 0;
    return Text;
}(Phaser.Text));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Text;
//# sourceMappingURL=Text.js.map