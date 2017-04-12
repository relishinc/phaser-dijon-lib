import { Text } from '../display';
import { Application } from '../application';
import { Game } from '../core';

export class LabelledButton extends Phaser.Button {
    
    protected _label: Text;
    protected _labelTint: { up: number, down: number, over: number, out: number };

    /**
     * 
     * @param {number} x X Position to place button
     * @param {number} y Y Position to place button
     * @param {func} callback Function to call on button press
     * @param {object} context Context to call specified function on
     * @param {string} key Sprite sheet that frames belong to (if applicable)
     * @param {string} outFrame Standard frame for this button
     * @param {string} downFrame (Optional)Frame to display when button pressed 
     * @param {string} overFrame (Optional)Frame to display when hovering over button
     * @param {string} upFrame (Optional)Frame to display when button is released
     */
    constructor(x: number, y: number, callback: any, context: any, key: string, outFrame: string, downFrame: string = null, overFrame: string = null, upFrame: string = null) {
        super(Application.getInstance().game, x, y, key, callback, context, overFrame, outFrame, downFrame, upFrame);
        this._label = null;
    }

    /**
     * If the text you try to create on the button is larger than the button sprite itself it will be scaled down to match.
     * @param {string} text Text to display
     * @param {number} fontSize Font size. If 0-1 is passed, will be used as a percentage of button height
     * @param {string} fontName The name of the font family
     * @param {number} outTint Standard color to display (Default: White)
     * @param {number} downTint (Optional)Color to tint font when button is pressed down
     * @param {number} overTint (Optional)Color to tint font when button is hovered over
     * @param {number} upTint (Optional)Color to tint font when button is released
     */
    public addLabel(text: string, fontSize: number, fontName: string, outTint: number = 0xffffff, downTint?: number, overTint?: number, upTint?: number, labelOffset?: Phaser.Point) {
        if (fontSize < 1) {
            fontSize = fontSize * this.realHeight * 0.5;
        }
        let textPoint = new Phaser.Point(this.realWidth * 0.5, this.realHeight * 0.5);
        if (labelOffset) {
            textPoint = Phaser.Point.add(textPoint, labelOffset);
        }
        this._label = new Text(textPoint.x, textPoint.y, text, fontName, fontSize, "#ffffff");
        this._label.tint = outTint;
        this._label.anchor.setTo(0.5, 0.5);
        this.addChild(this._label);
        
        this._labelTint = <{ up: number, down: number, over: number, out: number }>new Object();
        this.setLabelTints(outTint, downTint, overTint, upTint);
        this._fitLabelToButton();
    }

    /**
     * Set the different tint colors for the label to match the possible button states.
     * Any optional tints that are not provided or are provided as null will instead
     * use the OutTint setting.
     * @param {number} outTint Standard color to display (Default: White)
     * @param {number} downTint (Optional)Color to tint font when button is pressed down
     * @param {number} overTint (Optional)Color to tint font when button is hovered over
     * @param {number} upTint (Optional)Color to tint font when button is released
     */
    public setLabelTints(outTint: number, downTint?: number, overTint?: number, upTint?: number) {
        this._labelTint.out = outTint;
        this._labelTint.down = (downTint === undefined || downTint === null) ? outTint : downTint;
        this._labelTint.over = (overTint === undefined || overTint === null) ? outTint : overTint;
        this._labelTint.up = (upTint === undefined || upTint === null) ? outTint : upTint;
    }   

    /**
     * Change the text that is displayed on the button.
     * @param {string} newLabel The new text to display on the label. 
     */
    public changeLabel(newLabel: string): void {
        if (this._label !== null) {
            this._label.text = newLabel;
            this._fitLabelToButton();
        }
    }

    /**
     * Change the actual Text Display Object assigned to this button (will destroy any existing Text object).
     * @param {Text} newText The new Text object to assign to this label. 
     */    
    public assignText(newText: Text): void {
        if (newText !== null) {
            if (this._label !== null) {
                this._label.destroy();
            }
            
            this._label = newText;
            this._fitLabelToButton();
        }
    }   
    
    /* INHERITTED INPUT HANDLERS FROM PHASER.BUTTON */
    
    public onInputDownHandler(sprite: any, pointer: any): void {
        if (this.input.enabled === false) {
            return;
        }
        super.onInputDownHandler(sprite, pointer);
        this._tintLabel(this._labelTint.down);
    }
    
    public onInputOverHandler(sprite: any, pointer: any): void {
        if (this.input.enabled === false) {
            return;
        }
        super.onInputOverHandler(sprite, pointer);
        this._tintLabel(this._labelTint.over);
    }

    public onInputOutHandler(sprite: any, pointer: any): void {
        if (this.input.enabled === false) {
            return;
        }
        super.onInputOutHandler(sprite, pointer);
        this._tintLabel(this._labelTint.out);
    }

    public onInputUpHandler(sprite: any, pointer: any, isOver: boolean): void {
        if (this.input.enabled === false) {
            return;
        }
        super.onInputUpHandler(sprite, pointer, isOver);
        this._tintLabel(this._labelTint.up);
    }   
    
    /* PRIVATE/PROTECTED FUNCS */
    
    protected _tintLabel(newTint: number): void {
        if (this._label !== null) {
            this._label.tint = newTint;
        }
    }

    protected _fitLabelToButton(): void {
        this._label.scale.setTo(1, 1);
        if (this._label.realWidth > this.realWidth || this._label.realHeight > this.realHeight) {
            let wRatio = this.realWidth / this._label.realWidth;
            let hRatio = this.realHeight / this._label.realHeight;
            this._label.scale.setTo(wRatio < hRatio ? wRatio * 0.9 : hRatio * 0.9);
        }
    }

    public get game(): Game {
        return Application.getInstance().game;
    }
}