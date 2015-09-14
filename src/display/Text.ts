/// <reference path="../core/Game" />
/// <reference path="../mvc/Application" />

module dijon.display {
	export class Text extends Phaser.Text {
		// constants
		public static DEFAULT_FONT_SIZE: number = 12;
		public static DEFAULT_FONT_COLOR: string = "#000000";
		public static DEFAULT_FONT: string = "Helvetica Neue, Arial";
		public static GLOBAL_PADDING_X: number = 0;
		public static GLOBAL_PADDING_Y: number = 0;
		
		public game: core.Game;
		public style: any;
		public onAnimationComplete: Phaser.Signal = new Phaser.Signal();

		protected _canUpdate = false;
		protected _repeatTimer: Phaser.TimerEvent;
		protected _delayTimer: Phaser.TimerEvent;
		protected _lowercaseText: string;
		protected _letterTime: number;
		protected _textLength: number;
		protected _textToAnimate: string[] = [];

		constructor(x: number, y: number, text: string = "", fontName?: string, fontSize: number = Text.DEFAULT_FONT_SIZE, fontColor: string = Text.DEFAULT_FONT_COLOR, fontAlign: string = 'left', wordWrap: boolean = false, width: number = 0, public lineSpacing: number = 0, settings: Object = null) {
			super(
				mvc.Application.getInstance().game,
				x,
				y,
				text,
				Text._addSettings({
					font: fontSize + 'px ' + fontName,
					fill: fontColor,
					align: fontAlign,
					wordWrap: wordWrap,
					wordWrapWidth: width
				}, settings)
				);

			this.text = text.replace(/'/g, "\'");
			this.resolution = this.game.resolution;
		}
		
		// Phaser.Text overrides
		public setText(text: string): Phaser.Text {
			super.setText(text);

			this._lowercaseText = this.text.toLowerCase();

			if (this.game) {
				this.resolution = this.game.resolution;
			}

			return this;
		};
		
		// private methods		
		/**
		* starts the text animation
		* @return {void}
		* @private
		*/
		protected _startTextAnimation(): void {
			this._canUpdate = true;
			this._repeatTimer = this.game.time.events.repeat(this._letterTime * 100, this._textLength, this._updateTextAnimation, this);
		};

		protected _updateTextAnimation() {
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
		}
		
		// public methods
		/**
		* sets the color of the entire text
		* @param {String} color css color string (such as "#ff0000")
		* @return {Dijon.UIText.highlightPhrase} calls the highlightPhrase method and "highlights" the entire text string
		*/
		public setColor(color: string) {
			return this.highlightPhrase(this.text, color, false);
		};
		
		/**
		* resets the color to the original fill color
		* @return {Dijon.UIText.highlightPhrase} calls the highlightPhrase method and "highlights" the entire text string
		*/
		public resetColor() {
			return this.highlightPhrase(this.text, this.style.fill, false);
		};
		
		/**
		* changes the colour of a portion of the text
		* @param  {String} phrase        the phrase within the text to change
		* @param  {String} color         css color string (such as "#ff0000")
		* @param  {Boolean} [caseSensitive = false] whether the search for the phrase within this text should be case sensitive
		* @return {void}
		*/
		public highlightPhrase(phrase: string, color: string, caseSensitive: boolean = false) {
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
		
		
		/**
		* animates the text in by revealing each character in sequence
		* @param  {Number} [letterTime = 0.1]  the time (in seconds) between each character
		* @param  {int} [delay = 0]            the delay before starting the animation
		*/
		public animate(letterTime: number = 0.1, delay: number = 0) {
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
		
		/**
		* stops the text animation and clears the timers
		* @return {void}
		*/
		public stopAnimating = function() {
			this._canUpdate = false;
			this._textToAnimate = null;
			this.game.time.events.remove(this._delayTimer);
			this.game.time.events.remove(this._repeatTimer);
		};
		
		/**
		* rounds the position
		* @return {void}
		*/
		public roundPixel = function() {
			this.position.set(Math.round(this.x), Math.round(this.y));
		};
	
		// static methods
		private static _addSettings(obj: Object, settings: Object): Object {
			if (!settings)
				return obj;

			for (var prop in settings) {
				if (settings.hasOwnProperty(prop)) {
					obj[prop] = settings[prop];
				}
			}

			return obj;
		}
	}
}