import { Application } from "../application";
import { Game } from "../core";
import { Device } from "../utils";

/**
 * Text
 */
export class Text extends Phaser.Text {
  // constants
  public static DEFAULT_FONT_SIZE: number = 12;
  public static DEFAULT_FONT_COLOR: string = "#000000";
  public static DEFAULT_FONT: string = "Helvetica Neue, Arial";
  public static GLOBAL_PADDING_X: number = 0;
  public static GLOBAL_PADDING_Y: number = 0;

  public game: Game;
  public style: any;
  public customResolution = null;
  public onAnimationComplete: Phaser.Signal = new Phaser.Signal();

  protected _canUpdate = false;
  protected _rounded = false;
  protected _repeatTimer: Phaser.TimerEvent;
  protected _delayTimer: Phaser.TimerEvent;
  protected _lowercaseText: string;
  protected _letterTime: number;
  protected _textLength: number;
  protected _textToAnimate: string[] = [];

  constructor(
    x: number,
    y: number,
    text: string = "",
    fontName?: string,
    fontSize: number = Text.DEFAULT_FONT_SIZE,
    fontColor: string = Text.DEFAULT_FONT_COLOR,
    fontAlign: string = "left",
    wordWrap: boolean = false,
    width: number = 0,
    public lineSpacing: number = 0,
    settings: Object = null
  ) {
    super(
      Application.getInstance().game,
      x,
      y,
      text,
      Text._addSettings(
        {
          font: fontSize + "px " + fontName,
          fill: fontColor,
          align: fontAlign,
          wordWrap: wordWrap,
          wordWrapWidth: width
        },
        settings
      )
    );
    this.autoRound = true;

    this.text = text.replace(/'/g, "'");
    this._lowercaseText = this.text.toLowerCase();
    this.setResolution();
    //this.roundPixel();
  }

  public static CreateFromData(data: any): Text {
    let self: Text = new Text(
      data.position.x,
      data.position.y,
      data.copy,
      data.fontName,
      data.fontSize,
      "#" + data.fontColor,
      data.alignment,
      data.wrapWidth > 0,
      data.wrapWidth > 0 ? data.wrapWidth : null,
      data.spacing
    );
    self.name = data.name;
    if (data.stroke != "") {
      self.stroke = data.stroke;
    }
    if (data.shadowColor) {
      self.setShadow(data.shadowX, data.shadowY, data.shadowColor);
    }
    if (data.scale) {
      self.scale.setTo(data.scale.x, data.scale.y);
    }
    if (data.anchor) {
      self.pivot = new Phaser.Point(data.anchor.x, data.anchor.y);
    }

    switch (data.alignment) {
      case "center":
        self.x -= self.realWidth * 0.5;
        break;

      case "right":
        self.x -= self.realWidth;
        break;
    }

    self.alpha = data.alpha ? data.alpha : 1;
    self.roundPixel(); // modified from earlier code as we already had a method to do this
    return self;
  }

  public assignPrefab(object: any) {
    // Override this to handle assignment of child prefabs.
  }

  // Phaser.Text overrides
  public setText(text: string): Phaser.Text {
    super.setText(text);

    this._lowercaseText = this.text.toLowerCase();
    this.setResolution();
    //this.roundPixel();
    return this;
  }

  /*
  needed if we are going to use roundPixel method to combat anti aliasing
  public updateText() {
    super.updateText();
    this.roundPixel();
  }
  */

  protected setResolution(): void {
    if (Device.cocoon) {
      // fix for fonts looking really blurry in cocoonJS
      this.resolution = this.game.resolution * this.game.resolution;
    } else {
      this.resolution = this.customResolution || Application.textResolution;
    }
    this.roundPixel();
  }

  // private methods
  /**
    * starts the text animation
    * @return {void}
    * @private
    */
  protected _startTextAnimation(): void {
    this._canUpdate = true;
    this._repeatTimer = this.game.time.events.repeat(
      this._letterTime * 100,
      this._textLength,
      this._updateTextAnimation,
      this
    );
  }

  protected _updateTextAnimation() {
    if (!this._canUpdate || !this._textToAnimate) {
      return false;
    }
    var index = this._textLength - this._textToAnimate.length;
    this.addColor(this.style.fill, index);
    this.addColor("rgba(0,0,0,0)", index + 1);
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
  }

  /**
    * resets the color to the original fill color
    * @return {Dijon.UIText.highlightPhrase} calls the highlightPhrase method and "highlights" the entire text string
    */
  public resetColor() {
    return this.highlightPhrase(this.text, this.style.fill, false);
  }

  /**
    * changes the colour of a portion of the text
    * @param  {String} phrase        the phrase within the text to change
    * @param  {String} color         css color string (such as "#ff0000")
    * @param  {Boolean} [caseSensitive = false] whether the search for the phrase within this text should be case sensitive
    * @return {void}
    */
  public highlightPhrase(
    phrase: string,
    color: string,
    caseSensitive: boolean = false
  ) {
    let text = caseSensitive ? this.text : this._lowercaseText;

    phrase = caseSensitive ? phrase : phrase.toLowerCase();

    let len = phrase.length;

    let startIndex = text.indexOf(phrase);
    let endIndex = startIndex + len;

    while (startIndex <= endIndex) {
      this.addColor(color, startIndex);
      startIndex++;
    }

    this.addColor(this.style.fill, endIndex);
  }

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
    this._textToAnimate = this.text.split("");

    var startIndex = 0;
    var endIndex = this._textLength;

    while (startIndex <= endIndex) {
      this.addColor("rgba(0,0,0,0)", startIndex);
      startIndex++;
    }

    this._delayTimer = this.game.time.events.add(
      delay * Phaser.Timer.SECOND,
      this._startTextAnimation,
      this
    );
  }

  /**
    * stops the text animation and clears the timers
    * @return {void}
    */
  public stopAnimating() {
    this._canUpdate = false;
    this._textToAnimate = null;
    this.game.time.events.remove(this._delayTimer);
    this.game.time.events.remove(this._repeatTimer);
  }

  /**
    * rounds the position
    * @return {void}
    */
  public roundPixel() {
    this.position.set(Math.round(this.x), Math.round(this.y));
    /*
    // exit if there's no parent or already rounded
    if (this._rounded || this.parent === null) {
      return;
    }


    // to keep text on the pixel we need to ensure the parents' (if any) positions aren't subpixel as well
    // not sure if this is needed at this point.
    let parent: any = this;
    while (
      parent != null &&
      parent !== undefined &&
      parent.position !== undefined &&
      parent !== this.game.world &&
      !(parent instanceof Phaser.State)
    ) {
      parent.position.set(Math.round(parent.x), Math.round(parent.y));
      parent = parent.parent;
    }

    this._rounded = true;
    */
  }

  // static methods
  private static _addSettings(obj: Object, settings: Object): Object {
    if (!settings) return obj;

    for (var prop in settings) {
      if (settings.hasOwnProperty(prop)) {
        obj[prop] = settings[prop];
      }
    }

    return obj;
  }

  get realHeight(): number {
    return this.scale.y * this.texture.frame.height / this.resolution;
  }

  get realWidth(): number {
    return this.scale.x * this.texture.frame.width / this.resolution;
  }
}
