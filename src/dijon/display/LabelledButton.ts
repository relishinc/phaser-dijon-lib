import { Text } from '../display';
import {Application} from '../application';

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
     * @param {string} upFrame Standard frame for this button, the Up State
     * @param {string} downFrame (Optional)Frame to display when button pressed 
     * @param {string} overFrame (Optional)Frame to display when hovering over button
     * @param {string} outFrame (Optional)Frame to display when button is released
     */    
    constructor(x: number, y: number, callback: any, context: any, key: string, upFrame: string, downFrame: string = null, overFrame: string = null, outFrame: string = null) {
        super(Application.getInstance().game, x, y, key, callback, context, overFrame, outFrame, downFrame, upFrame);

        this._label = null;
    }

    /**
     * 
     * @param {string} text Text to display
     * @param {number} fontSize Font size. If 0-1 is passed, will be used as a percentage of button height
     * @param {string} fontName The name of the font family
     * @param {number} outTint Standard color to display (default)
     * @param {number} downTint (Optional)Color to tint font when button is pressed down
     * @param {number} overTint (Optional)Color to tint font when cursor is over button
     * @param {number} upTint (Optional)Color to tint font when button is released
     */  
    public addLabel(text: string, fontSize: number, fontName: string, outTint: number = 0xffffff, downTint?: number, overTint?: number, upTint?: number, labelOffset?: Phaser.Point) {
        if (fontSize < 1) {
            fontSize = fontSize * this.realHeight;
        }  
        let textPoint = new Phaser.Point(this.realWidth * 0.5, this.realHeight * 0.5);
        if (labelOffset) {
            textPoint = Phaser.Point.add(textPoint, labelOffset);
        }
        this._label = new Text(textPoint.x, textPoint.y, text, fontName, fontSize, "#ffffff");      
        this._label.centerPivot();
        this.addChild(this._label);

        this._labelTint = <{ up: number, down: number, over: number, out: number }>new Object();
        this._labelTint.down = downTint ? downTint : outTint;
        this._labelTint.up = upTint ? upTint : outTint;
        this._labelTint.over = overTint ? overTint : outTint;
        this._labelTint.out = outTint;
    }

    public setLabelTints(outTint: number, downTint?: number, overTint?: number, upTint?: number) {
        this._labelTint.out = outTint;
        this._labelTint.down = downTint ? downTint : outTint;
        this._labelTint.up = upTint ? upTint : outTint;
        this._labelTint.over = overTint ? overTint : outTint;
    }   
    
    public onInputDownHandler(sprite: any, pointer: any): void {
        if (this.input.enabled === false) {
            return;
        }
        super.onInputDownHandler(sprite, pointer);
        this.tintLabel(this._labelTint.down);
    }
    
    public onInputOverHandler(sprite: any, pointer: any): void {
        if (this.input.enabled === false) {
            return;
        }
        super.onInputOverHandler(sprite, pointer);
        this.tintLabel(this._labelTint.over);
    }

    public onInputOutHandler(sprite: any, pointer: any): void {
        if (this.input.enabled === false) {
            return;
        }
        super.onInputOutHandler(sprite, pointer);
        this.tintLabel(this._labelTint.out);
    }

    public onInputUpHandler(sprite: any, pointer: any, isOver: boolean): void {
        if (this.input.enabled === false) {
            return;
        }
        super.onInputUpHandler(sprite, pointer, isOver);
        this.tintLabel(this._labelTint.up);
    }   
    
    /**
     * 
     * @param {string} newLabel The new text to display on the label. 
     */
    public changeLabel(newLabel: string): void {
        if (this._label !== null) {
            this._label.text = newLabel;
        }
    }

    /**
     * 
     * @param {Text} newText The new Text object to assign to this label. 
     */    
    public assignText(newText: Text): void {
        if (newText !== null) {
            this._label = newText;
        }
    }   

    protected tintLabel(newTint: number): void {
        if (this._label !== null) {
            this._label.tint = newTint;
        }
    }
}