import Group from '../display/Group';
import Sprite from '../display/Sprite';
import Text from '../display/Text';
import Component from '../core/Component';
export default class GameObjectFactory extends Phaser.GameObjectFactory {
    protected _targetGroup: Phaser.Group;
    protected _defaultLayer: Phaser.Group;
    existing(object: any): any;
    image(x?: number, y?: number, key?: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number, group?: Phaser.Group): Phaser.Image;
    sprite(x?: number, y?: number, key?: string | PIXI.Texture, frame?: string | number, group?: Phaser.Group): Phaser.Sprite;
    creature(x?: number, y?: number, key?: string, mesh?: any, group?: Phaser.Group): any;
    group(parent?: any, name?: string, addToStage?: boolean, enableBody?: boolean, physicsBodyType?: number): Phaser.Group;
    physicsGroup(physicsBodyType?: number, parent?: any, name?: string, addToStage?: boolean): Phaser.Group;
    spriteBatch(parent?: any, name?: string, addToStage?: boolean): Phaser.SpriteBatch;
    tileSprite(x?: number, y?: number, width?: number, height?: number, key?: string, frame?: string | number, group?: Phaser.Group): Phaser.TileSprite;
    rope(x?: number, y?: number, key?: string, frame?: string | number, points?: Phaser.Point[], group?: Phaser.Group): Phaser.Rope;
    text(x?: number, y?: number, text?: string, style?: Phaser.PhaserTextStyle, group?: Phaser.Group): Phaser.Text;
    button(x?: number, y?: number, key?: string, callback?: Function, callbackContext?: Object, overFrame?: string | number, outFrame?: string | number, downFrame?: string | number, upFrame?: string | number, group?: Phaser.Group): Phaser.Button;
    graphics(x?: number, y?: number, group?: Phaser.Group): Phaser.Graphics;
    bitmapText(x?: number, y?: number, font?: string, text?: string, size?: number, align?: string, group?: Phaser.Group): Phaser.BitmapText;
    dSprite(x?: number, y?: number, key?: string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture, frame?: string | number, name?: string, components?: Component[], group?: Phaser.Group): Sprite;
    dGroup(x?: number, y?: number, name?: string, addToStage?: boolean, components?: Component[], enableBody?: boolean, physicsBodyType?: number, group?: Phaser.Group): Group;
    dText(x: number, y: number, text?: string, fontName?: string, fontSize?: number, fontColor?: string, fontAlign?: string, wordWrap?: boolean, width?: number, lineSpacing?: number, settings?: Object, group?: Phaser.Group): Text;
    setDefaultLayer(value: Phaser.Group): void;
    defaultLayer: Phaser.Group;
    targetGroup: Phaser.Group;
}
