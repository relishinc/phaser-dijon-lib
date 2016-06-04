/**
 * GameObjectFactory
 */

import {Text, Group, Spine, Sprite, Component, BitmapText} from '../display';
/**
 * GameObjectFactory
 */

export class GameObjectFactory extends Phaser.GameObjectFactory {
    // The layer the current object will be added to. This is used by helper functions in Game.ts.
    protected _targetGroup: Phaser.Group = null;

    // This is the layer that standard .add calls will be applied to.
    protected _defaultLayer: Phaser.Group = this.world;

    // overrides
    /**
    * Adds an existing display object to the game world.
    *
    * @method Phaser.GameObjectFactory#existing
    * @param {any} object - An instance of Phaser.Sprite, Phaser.Button or any other display object.
    * @return {any} The child that was added to the World.
    */
    public existing(object): any {
        let group = this.targetGroup;
        this.targetGroup = null;
        return group.add(object);
    }
    /**
    * Create a new `Image` object.
    *
    * An Image is a light-weight object you can use to display anything that doesn't need physics or animation.
    *
    * It can still rotate, scale, crop and receive input events.
    * This makes it perfect for logos, backgrounds, simple buttons and other non-Sprite graphics.
    *
    * @method Phaser.GameObjectFactory#image
    * @param {number} [x=0] - The x coordinate of the Image. The coordinate is relative to any parent container this Image may be in.
    * @param {number} [y=0] - The y coordinate of the Image. The coordinate is relative to any parent container this Image may be in.
    * @param {string|Phaser.RenderTexture|Phaser.BitmapData|Phaser.Video|PIXI.Texture} [key] - The image used as a texture by this display object during rendering. If a string Phaser will get for an entry in the Image Cache. Or it can be an instance of a RenderTexture, BitmapData, Video or PIXI.Texture.
    * @param {string|number} [frame] - If a Texture Atlas or Sprite Sheet is used this allows you to specify the frame to be used. Use either an integer for a Frame ID or a string for a frame name.
    * @param {Phaser.Group} [group] - Optional Group to add the object to. If not specified it will be added to the World group.
    * @returns {Phaser.Image} The newly created Image object.
    */
    public image(x: number = 0, y: number = 0, key?: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number, group?: Phaser.Group): Phaser.Image {
        if (group === undefined) { group = this.targetGroup; }
        this.targetGroup = null;
        return group.add(new Phaser.Image(this.game, x, y, key, frame));
    }

    /**
    * Create a new Sprite with specific position and sprite sheet key.
    *
    * At its most basic a Sprite consists of a set of coordinates and a texture that is used when rendered.
    * They also contain additional properties allowing for physics motion (via Sprite.body), input handling (via Sprite.input),
    * events (via Sprite.events), animation (via Sprite.animations), camera culling and more. Please see the Examples for use cases.
    *
    * @method Phaser.GameObjectFactory#sprite
    * @param {number} [x=0] - The x coordinate of the sprite. The coordinate is relative to any parent container this sprite may be in.
    * @param {number} [y=0] - The y coordinate of the sprite. The coordinate is relative to any parent container this sprite may be in.
    * @param {string|Phaser.RenderTexture|Phaser.BitmapData|Phaser.Video|PIXI.Texture} [key] - The image used as a texture by this display object during rendering. If a string Phaser will get for an entry in the Image Cache. Or it can be an instance of a RenderTexture, BitmapData, Video or PIXI.Texture.
    * @param {string|number} [frame] - If a Texture Atlas or Sprite Sheet is used this allows you to specify the frame to be used. Use either an integer for a Frame ID or a string for a frame name.
    * @param {Phaser.Group} [group] - Optional Group to add the object to. If not specified it will be added to the World group.
    * @returns {Phaser.Sprite} The newly created Sprite object.
    */
    public sprite(x: number = 0, y: number = 0, key?: string | PIXI.Texture, frame?: string | number, group?: Phaser.Group): Phaser.Sprite {
        if (group === undefined) { group = this.targetGroup; }
        this.targetGroup = null;

        return group.create(x, y, key, frame);
    }

    /**
    * Create a new Creature Animation object.
    *
    * Creature is a custom Game Object used in conjunction with the Creature Runtime libraries by Kestrel Moon Studios.
    *
    * It allows you to display animated Game Objects that were created with the [Creature Automated Animation Tool](http://www.kestrelmoon.com/creature/).
    *
    * Note 1: You can only use Phaser.Creature objects in WebGL enabled games. They do not work in Canvas mode games.
    *
    * Note 2: You must use a build of Phaser that includes the CreatureMeshBone.js runtime and gl-matrix.js, or have them
    * loaded before your Phaser game boots.
    *
    * See the Phaser custom build process for more details.
    *
    * @method Phaser.GameObjectFactory#creature
    * @param {number} [x=0] - The x coordinate of the creature. The coordinate is relative to any parent container this creature may be in.
    * @param {number} [y=0] - The y coordinate of the creature. The coordinate is relative to any parent container this creature may be in.
    * @param {string|PIXI.Texture} [key] - The image used as a texture by this creature object during rendering. If a string Phaser will get for an entry in the Image Cache. Or it can be an instance of a PIXI.Texture.
    * @param {Phaser.Group} [group] - Optional Group to add the object to. If not specified it will be added to the Default Layer group.
    * @returns {Phaser.Creature} The newly created Sprite object.
    */
    public creature(x: number = 0, y: number = 0, key?: string, mesh?: any, group?: Phaser.Group): any {
        if (group === undefined) { group = this.targetGroup; }
        this.targetGroup = null;

        var obj = new Phaser['Creature'](this.game, x, y, key, mesh);

        group.add(obj);

        return obj;
    }

    /**
    * A Group is a container for display objects that allows for fast pooling, recycling and collision checks.
    *
    * @method Phaser.GameObjectFactory#group
    * @param {any} [parent] - The parent Group or DisplayObjectContainer that will hold this group, if any. If set to null the Group won't be added to the display list. If undefined it will be added to World by default.
    * @param {string} [name='group'] - A name for this Group. Not used internally but useful for debugging.
    * @param {boolean} [addToStage=false] - If set to true this Group will be added directly to the Game.Stage instead of Game.World.
    * @param {boolean} [enableBody=false] - If true all Sprites created with `Group.create` or `Group.createMulitple` will have a physics body created on them. Change the body type with physicsBodyType.
    * @param {number} [physicsBodyType=0] - If enableBody is true this is the type of physics body that is created on new Sprites. Phaser.Physics.ARCADE, Phaser.Physics.P2, Phaser.Physics.NINJA, etc.
    * @return {Phaser.Group} The newly created Group.
    */
    public group(parent?: any, name: string = 'group', addToStage: boolean = false, enableBody: boolean = false, physicsBodyType: number = 0) {
        if (parent === undefined && addToStage !== true) { parent = this.targetGroup; }
        this.targetGroup = null;
        return new Phaser.Group(this.game, parent, name, addToStage, enableBody, physicsBodyType);
    }

    /**
    * A Group is a container for display objects that allows for fast pooling, recycling and collision checks.
    *
    * A Physics Group is the same as an ordinary Group except that is has enableBody turned on by default, so any Sprites it creates
    * are automatically given a physics body.
    *
    * @method Phaser.GameObjectFactory#physicsGroup
    * @param {number} [physicsBodyType=Phaser.Physics.ARCADE] - If enableBody is true this is the type of physics body that is created on new Sprites. Phaser.Physics.ARCADE, Phaser.Physics.P2, Phaser.Physics.NINJA, etc.
    * @param {any} [parent] - The parent Group or DisplayObjectContainer that will hold this group, if any. If set to null the Group won't be added to the display list. If undefined it will be added to World by default.
    * @param {string} [name='group'] - A name for this Group. Not used internally but useful for debugging.
    * @param {boolean} [addToStage=false] - If set to true this Group will be added directly to the Game.Stage instead of Game.World.
    * @return {Phaser.Group} The newly created Group.
    */
    public physicsGroup(physicsBodyType: number = 0, parent?: any, name: string = 'group', addToStage: boolean = false): Phaser.Group {
        if (parent === undefined) { parent = this.targetGroup; }
        this.targetGroup = null;
        return new Phaser.Group(this.game, parent, name, addToStage, true, physicsBodyType);
    }

    /**
    * A SpriteBatch is a really fast version of a Phaser Group built solely for speed.
    * Use when you need a lot of sprites or particles all sharing the same texture.
    * The speed gains are specifically for WebGL. In Canvas mode you won't see any real difference.
    *
    * @method Phaser.GameObjectFactory#spriteBatch
    * @param {Phaser.Group|null} parent - The parent Group that will hold this Sprite Batch. Set to `undefined` or `null` to add directly to game.world.
    * @param {string} [name='group'] - A name for this Sprite Batch. Not used internally but useful for debugging.
    * @param {boolean} [addToStage=false] - If set to true this Sprite Batch will be added directly to the Game.Stage instead of the parent.
    * @return {Phaser.SpriteBatch} The newly created Sprite Batch.
    */
    public spriteBatch(parent?: any, name: string = "spriteBatch", addToStage: boolean = false): Phaser.SpriteBatch {
        if (parent === undefined) { parent = this.targetGroup }
        this.targetGroup = null;
        return new Phaser.SpriteBatch(this.game, parent, name, addToStage);
    }

    /**
   * Creates a new TileSprite object.
   *
   * @method Phaser.GameObjectFactory#tileSprite
   * @param {number} x - The x coordinate of the TileSprite. The coordinate is relative to any parent container this TileSprite may be in.
   * @param {number} y - The y coordinate of the TileSprite. The coordinate is relative to any parent container this TileSprite may be in.
   * @param {number} width - The width of the TileSprite.
   * @param {number} height - The height of the TileSprite.
   * @param {string|Phaser.RenderTexture|Phaser.BitmapData|Phaser.Video|PIXI.Texture} key - The image used as a texture by this display object during rendering. If a string Phaser will get for an entry in the Image Cache. Or it can be an instance of a RenderTexture, BitmapData, Video or PIXI.Texture.
   * @param {string|number} [frame] - If a Texture Atlas or Sprite Sheet is used this allows you to specify the frame to be used. Use either an integer for a Frame ID or a string for a frame name.
   * @param {Phaser.Group} [group] - Optional Group to add the object to. If not specified it will be added to the Default Layer group.
   * @return {Phaser.TileSprite} The newly created TileSprite object.
   */
    public tileSprite(x: number = 0, y: number = 0, width: number = 0, height: number = 0, key?: string, frame?: string | number, group?: Phaser.Group): Phaser.TileSprite {
        if (group === undefined) { group = this.targetGroup; }
        this.targetGroup = null;
        return group.add(new Phaser.TileSprite(this.game, x, y, width, height, key, frame));
    }

    /**
   * Creates a new Rope object.
   *
   * Example usage: https://github.com/codevinsky/phaser-rope-demo/blob/master/dist/demo.js
   *
   * @method Phaser.GameObjectFactory#rope
   * @param {number} [x=0] - The x coordinate of the Rope. The coordinate is relative to any parent container this rope may be in.
   * @param {number} [y=0] - The y coordinate of the Rope. The coordinate is relative to any parent container this rope may be in.
   * @param {string|Phaser.RenderTexture|Phaser.BitmapData|Phaser.Video|PIXI.Texture} [key] - The image used as a texture by this display object during rendering. If a string Phaser will get for an entry in the Image Cache. Or it can be an instance of a RenderTexture, BitmapData, Video or PIXI.Texture.
   * @param {string|number} [frame] - If a Texture Atlas or Sprite Sheet is used this allows you to specify the frame to be used. Use either an integer for a Frame ID or a string for a frame name.
   * @param {Array} points - An array of {Phaser.Point}.
   * @param {Phaser.Group} [group] - Optional Group to add the object to. If not specified it will be added to the Default Layer group.
   * @return {Phaser.Rope} The newly created Rope object.
   */
    public rope(x: number = 0, y: number = 0, key?: string, frame?: string | number, points?: Phaser.Point[], group?: Phaser.Group): Phaser.Rope {
        if (group === undefined) { group = this.targetGroup; }
        this.targetGroup = null;
        return group.add(new Phaser.Rope(this.game, x, y, key, frame, points));
    }

    /**
    * Creates a new Text object.
    *
    * @method Phaser.GameObjectFactory#text
    * @param {number} [x=0] - The x coordinate of the Text. The coordinate is relative to any parent container this text may be in.
    * @param {number} [y=0] - The y coordinate of the Text. The coordinate is relative to any parent container this text may be in.
    * @param {string} [text=''] - The text string that will be displayed.
    * @param {object} [style] - The style object containing style attributes like font, font size , etc.
    * @param {Phaser.Group} [group] - Optional Group to add the object to. If not specified it will be added to the Default Layer group.
    * @return {Phaser.Text} The newly created text object.
    */
    public text(x: number = 0, y: number = 0, text: string = '', style?: Phaser.PhaserTextStyle, group?: Phaser.Group): Phaser.Text {
        if (group === undefined) { group = this.targetGroup; }
        this.targetGroup = null;
        return group.add(new Phaser.Text(this.game, x, y, text, style));
    }

    /**
    * Creates a new Button object.
    *
    * @method Phaser.GameObjectFactory#button
    * @param {number} [x=0] - The x coordinate of the Button. The coordinate is relative to any parent container this button may be in.
    * @param {number} [y=0] - The y coordinate of the Button. The coordinate is relative to any parent container this button may be in.
    * @param {string} [key] - The image key as defined in the Game.Cache to use as the texture for this button.
    * @param {function} [callback] - The function to call when this button is pressed
    * @param {object} [callbackContext] - The context in which the callback will be called (usually 'this')
    * @param {string|number} [overFrame] - This is the frame or frameName that will be set when this button is in an over state. Give either a number to use a frame ID or a string for a frame name.
    * @param {string|number} [outFrame] - This is the frame or frameName that will be set when this button is in an out state. Give either a number to use a frame ID or a string for a frame name.
    * @param {string|number} [downFrame] - This is the frame or frameName that will be set when this button is in a down state. Give either a number to use a frame ID or a string for a frame name.
    * @param {string|number} [upFrame] - This is the frame or frameName that will be set when this button is in an up state. Give either a number to use a frame ID or a string for a frame name.
    * @param {Phaser.Group} [group] - Optional Group to add the object to. If not specified it will be added to the Default Layer group.
    * @return {Phaser.Button} The newly created Button object.
    */
    public button(x: number = 0, y: number = 0, key?: string, callback?: Function, callbackContext?: Object, overFrame?: string | number, outFrame?: string | number, downFrame?: string | number, upFrame?: string | number, group?: Phaser.Group): Phaser.Button {
        if (group === undefined) { group = this.targetGroup; }
        this.targetGroup = null;
        return group.add(new Phaser.Button(this.game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame));
    }

    /**
    * Creates a new Graphics object.
    *
    * @method Phaser.GameObjectFactory#graphics
    * @param {number} [x=0] - The x coordinate of the Graphic. The coordinate is relative to any parent container this object may be in.
    * @param {number} [y=0] - The y coordinate of the Graphic. The coordinate is relative to any parent container this object may be in.
    * @param {Phaser.Group} [group] - Optional Group to add the object to. If not specified it will be added to the World group.
    * @return {Phaser.Graphics} The newly created graphics object.
    */
    public graphics(x: number = 0, y: number = 0, group?: Phaser.Group): Phaser.Graphics {
        if (group === undefined) { group = this.world; }
        /***
         * Commented this out - since graphics are by default added directly on the game.world, we shouldn't reset this.targetGroup
         * It could cause major problems if using dijon/utils Textures instances as an image texture, for instance
         */
        //this.targetGroup = null;
        return group.add(new Phaser.Graphics(this.game, x, y));
    }

    /**
    * Create a new BitmapText object.
    *
    * BitmapText objects work by taking a texture file and an XML file that describes the font structure.
    * It then generates a new Sprite object for each letter of the text, proportionally spaced out and aligned to
    * match the font structure.
    *
    * BitmapText objects are less flexible than Text objects, in that they have less features such as shadows, fills and the ability
    * to use Web Fonts. However you trade this flexibility for pure rendering speed. You can also create visually compelling BitmapTexts by
    * processing the font texture in an image editor first, applying fills and any other effects required.
    *
    * To create multi-line text insert \r, \n or \r\n escape codes into the text string.
    *
    * To create a BitmapText data files you can use:
    *
    * BMFont (Windows, free): http://www.angelcode.com/products/bmfont/
    * Glyph Designer (OS X, commercial): http://www.71squared.com/en/glyphdesigner
    * Littera (Web-based, free): http://kvazars.com/littera/
    *
    * @method Phaser.GameObjectFactory#bitmapText
    * @param {number} x - X coordinate to display the BitmapText object at.
    * @param {number} y - Y coordinate to display the BitmapText object at.
    * @param {string} font - The key of the BitmapText as stored in Phaser.Cache.
    * @param {string} [text=''] - The text that will be rendered. This can also be set later via BitmapText.text.
    * @param {number} [size=32] - The size the font will be rendered at in pixels.
    * @param {Phaser.Group} [group] - Optional Group to add the object to. If not specified it will be added to the World group.
    * @return {Phaser.BitmapText} The newly created bitmapText object.
    */
    public bitmapText(x?: number, y?: number, font?: string, text: string = "", size: number = 32, group?: Phaser.Group): Phaser.BitmapText {
        if (group === undefined) { group = this.targetGroup; }
        this.targetGroup = null;
        return group.add(new Phaser.BitmapText(this.game, x, y, font, text, size));
    }

    // dijon specific display objects
    public dSprite(x?: number, y?: number, key?: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number, name?: string, components?: Component[], group?: Phaser.Group): Sprite {
        if (group === undefined) { group = this.targetGroup; }
        this.targetGroup = null;
        return group.add(new Sprite(x, y, key, frame, name, components));
    }

    public dGroup(x?: number, y?: number, name?: string, addToStage?: boolean, components?: Component[], enableBody?: boolean, physicsBodyType?: number, group?: Phaser.Group): Group {
        if (group === undefined && addToStage !== true) {
            group = this.targetGroup;
            this.targetGroup = null;
            return group.add(new Group(x, y, name, addToStage, components, enableBody, physicsBodyType));
        }

        return new Group(x, y, name, addToStage, components, enableBody, physicsBodyType);
    }

    public dText(x: number, y: number, text?: string, fontName?: string, fontSize?: number, fontColor?: string, fontAlign?: string, wordWrap?: boolean, width?: number, lineSpacing?: number, settings?: Object, group?: Phaser.Group): Text {
        if (group === undefined) { group = this.targetGroup; }
        this.targetGroup = null;
        return group.add(new Text(x, y, text, fontName, fontSize, fontColor, fontAlign, wordWrap, width, lineSpacing, settings));
    }
    
    public dBitmapText(x:number = 0, y:number = 0, font:string = null, text:string = "", size:number = 12, align:string = 'left', color:number = 0xffffff, smoothing:boolean = true, autoFlatten:boolean = true, makeImage:boolean = false, group?: Phaser.Group): BitmapText {
        if (group === undefined) { group = this.targetGroup; }
        this.targetGroup = null;
        return group.add(new BitmapText(x, y, font, text, size, align, color, smoothing, autoFlatten, makeImage));
    }

    public spine(assetName: string = '', x: number = 0, y: number = 0, group?: Phaser.Group) {
        if (group === undefined) { group = this.targetGroup; }
        this.targetGroup = null;
        return group.add(new Spine(assetName, x, y));
    }

    public setDefaultLayer(value: Phaser.Group) {
        console.log("CAUTION: Changing the default layer will change the target group for .add");
        this._defaultLayer = value;
    }

    public get defaultLayer() {
        return this._defaultLayer;
    }
    // getter / setter
    public set targetGroup(value: Phaser.Group) {
        this._targetGroup = value;
    }

    public get targetGroup(): Phaser.Group {
        return this._targetGroup || this._defaultLayer;
    }
}