/**
 * Wrapper for Phaser.Text exposing the parameters usually required in a separate style object
 * @param {Phaser.Game} game reference to the game instance
 * @param {Number} x the x position
 * @param {Number} y the y position
 * @param {String} text the text to use
 * @param {String} fontName the name of the font family to use
 * @param {int} fontSize the size
 * @param {String} fontColor the hexadecimal font color (any css syntax can be used here)
 * @param {String} [fontAlign = 'left'] alignment of the text
 * @param {Boolean} [wordWrap = false] whether the text wraps at the supplied width
 * @param {Number} [width = 100] the width to wrap at
 * @param {Object} [settings = null] additional settings appended to the style object
 * @constructor
 */
Dijon.UIText = function(game, x, y, text, fontName, fontSize, fontColor, fontAlign, wordWrap, width, lineSpacing, settings) {
    if (typeof fontName === 'undefined') {
        fontName = Dijon.UIText.DEFAULT_FONT;
    }

    if (typeof fontSize === 'undefined') {
        fontSize = Dijon.UIText.DEFAULT_SIZE;
    }

    if (typeof fontColor === 'undefined') {
        fontColor = Dijon.UIText.DEFAULT_COLOR;
    }

    if (typeof fontAlign === 'undefined') {
        fontAlign = 'left';
    }

    if (typeof width === 'undefined') {
        width = 100;
    }

    var style = {
        font: fontSize + 'px ' + fontName,
        fill: fontColor,
        align: fontAlign,
        wordWrap: wordWrap || false,
        wordWrapWidth: width
    };

    if (typeof settings !== 'undefined') {
        for (var prop in settings) {
            if (settings.hasOwnProperty(prop)) {
                style[prop] = settings[prop];
            }
        }
    }

    text.replace(/'/g, "\'");

    Phaser.Text.call(this, game, x, y, text, style);

    this.lineSpacing = lineSpacing || 0;
    this.events.onAnimationComplete = new Phaser.Signal();
    this.lowercaseText = this.text.toLowerCase();
};

Dijon.UIText.prototype = Object.create(Phaser.Text.prototype);

// private methods
/**
 * starts the text animation
 * @return {void}
 * @private
 */
Dijon.UIText.prototype._startTextAnimation = function() {
    this._canUpdate = true;
    this._repeatTimer = this.game.time.events.repeat(this._letterTime * 100, this._textLength, this._updateTextAnimation, this);
};

/**
 * updates the text animation
 * called at each repeatTimer step
 * dispatches the onAnimationComplete signal if it's the last step
 * @return {void}
 * @private
 */
Dijon.UIText.prototype._updateTextAnimation = function() {
    if (!this._canUpdate || !this._textToAnimate) {
        return false;
    }
    var index = this._textLength - this._textToAnimate.length;
    this.addColor(this.style.fill, index);
    this.addColor('rgba(0,0,0,0)', index + 1);
    this._textToAnimate.shift();

    if (this._textToAnimate.length === 0) {
        this.events.onAnimationComplete.dispatch();
    }
};

// public methods
/**
 * sets the color of the entire text
 * @param {String} color css color string (such as "#ff0000")
 * @return {Dijon.UIText.highlightPhrase} calls the highlightPhrase method and "highlights" the entire text string
 */
Dijon.UIText.prototype.setColor = function(color) {
    return this.highlightPhrase(this.text, color, false);
};

/**
 * resets the color to the original fill color
 * @return {Dijon.UIText.highlightPhrase} calls the highlightPhrase method and "highlights" the entire text string
 */
Dijon.UIText.prototype.resetColor = function() {
    return this.highlightPhrase(this.text, this.style.fill, false);
};

/**
 * changes the colour of a portion of the text
 * @param  {String} phrase        the phrase within the text to change
 * @param  {String} color         css color string (such as "#ff0000")
 * @param  {Boolean} [caseSensitive = false] whether the search for the phrase within this text should be case sensitive
 * @return {void}
 */
Dijon.UIText.prototype.highlightPhrase = function(phrase, color, caseSensitive) {
    caseSensitive = caseSensitive === true;

    var text = caseSensitive ? this.text : this.lowercaseText;

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

/**
 * animates the text in by revealing each character in sequence
 * @param  {Number} [letterTime = 0.1]  the time (in seconds) between each character
 * @param  {int} [delay = 0]            the delay before starting the animation
 */
Dijon.UIText.prototype.animate = function(letterTime, delay) {
    this.game.time.events.remove(this._delayTimer);
    this.game.time.events.remove(this._repeatTimer);

    if (typeof _letterTime === 'undefined') {
        letterTime = 0.1;
    }
    if (typeof delay === 'undefined' || isNaN(delay)) {
        delay = 0;
    }
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

/**
 * stops the text animation and clears the timers
 * @return {void}
 */
Dijon.UIText.prototype.stopAnimating = function() {
    this._canUpdate = false;
    this._textToAnimate = null;
    this.game.time.events.remove(this._delayTimer);
    this.game.time.events.remove(this._repeatTimer);
};

// STATIC VARIABLES
/**
 * the default font to use
 * @type {String}
 * @static
 */
Dijon.UIText.DEFAULT_FONT = 'Helvetica Neue, Arial';

/**
 * the default text size
 * @type {Number}
 * @static
 */
Dijon.UIText.DEFAULT_SIZE = 12;

/**
 * the default text colour
 * @type {String}
 */
Dijon.UIText.DEFAULT_COLOR = '#000000';

Dijon.UIText.prototype.constructor = Dijon.UIText;

// Phaser addons
Phaser.GameObjectCreator.prototype.uiText = function(x, y, text, fontName, fontSize, color, align, wordWrap, width, lineSpacing, settings) {
    return new Dijon.UIText(this.game, x, y, text, fontName, fontSize, color, align, wordWrap, width, lineSpacing, settings);
};

Phaser.GameObjectFactory.prototype.uiText = function(x, y, text, fontName, fontSize, color, align, wordWrap, width, lineSpacing, settings, group) {
    if (typeof group === 'undefined') {
        group = this.world;
    }
    return group.add(new Dijon.UIText(this.game, x, y, text, fontName, fontSize, color, align, wordWrap, width, lineSpacing, settings));
};
