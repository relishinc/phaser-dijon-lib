import {Application} from '../application';
import {Game} from '../core';
import {Device} from '../utils';

/**
 * Text
 */
export class BitmapText extends Phaser.BitmapText {
    protected _autoFlatten:boolean = true;
    protected _color:number = 0xffffff;
    
    constructor(x:number = 0, y:number = 0, font:string = null, text:string = "", size:number = 12, align:string = 'left', color:number = 0xffffff, smoothing:boolean = true, autoFlatten:boolean = true, makeImage:boolean = false){
        super(Application.getInstance().game, x, y, font, text, size, align);
        
        if (color !== 0xffffff){
            this.color = color;
        }
        
        if (smoothing){
           this.smoothed = true;
        }
        
        if (makeImage !== true){
            this.autoFlatten = autoFlatten;
        }else{
            this.makeImage();
        }
    }
    
    public makeImage():void{
        const img:Phaser.Image = <Phaser.Image>this.addChildAt(this.game.add.image(0, 0, this.generateTexture()), 0);
        
        let n = this.children.length-1;
        while (n > 0){
            this.removeChildAt(n);
            n--;
        }
        
        const glyphs = this['_glyphs'];
        for (var i = 0; i < glyphs.length; i++)
        {
           glyphs[i].destroy();
        }
        this['_glyphs'] = [];
    }
    
    public flatten(delay:number = null):void{
        if (delay){
            this.game.time.events.add(delay, ()=>{this.cacheAsBitmap = true}, this);
            return;    
         }
        this.cacheAsBitmap = true;
    }
    
    public unFlatten():void{
        this.cacheAsBitmap = null;
    }
    
    public set autoFlatten(value:boolean){
        this._autoFlatten = value;
        if (this._autoFlatten){
            this.flatten();
        }else{
            this.unFlatten();
        }
    }
    
    public get autoFlatten():boolean{
        return this._autoFlatten;
    }
    
    public set color(value:number){
        if(this._autoFlatten){
            this.unFlatten();
        }
        this._color = value;
        this.tint = this._color;
        if (this._autoFlatten){
            this.flatten();
        }
    }
    
    public get color():number{
        return this._color;
    }
    
    public set text(value:string){
        if(this._autoFlatten){
            this.unFlatten();
        }
        if (this['_text'] !== undefined && value !== this['_text'])
        {
            this['_text'] = value.toString() || '';
            this.updateText();
        }
        if (this._autoFlatten){
            this.flatten();
        }
    }
    
    public get text():string{
        return this['_text'];
    }
    
}