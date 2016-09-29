import {Application} from '../application';
import {Textures} from './Textures';
import {Text} from '../display';

export class Placeholders {
    private static get game(): Phaser.Game {
        return Application.getInstance().game;
    }

    static image(x: number = 0, y: number = 0, texture: any, name: string = ""): Phaser.Image {
        const imageInstance = new Phaser.Image(Placeholders.game, x, y, texture);
        imageInstance.name = name;
        return imageInstance;
    }

    static button(x: number = 0, y: number = 0, width: number = 100, height: number = 50, autoSize: boolean = false, text: string = 'button', callback: Function = null, callbackContext: any = null, defaultColor: number = 0xffffff, overColor: number = 0xff0000, downColor: number = 0x00ff00): Phaser.Sprite {
        const sprite: Phaser.Sprite = new Phaser.Sprite(Placeholders.game, x, y);

        // Create the text instance with an auto size of 25 or 60% of the height passed in.
        const textInstance: Text = new Text(width * 0.5, height * 0.55, " " + text + " ", 'Arial', autoSize ? 25 : height * 0.6, '#000000');
        textInstance.centerPivot();
        textInstance.name = "Label";

        if (autoSize) {
            // Use a padding of 10
            width = textInstance.realWidth + 10;
            height = textInstance.realHeight + 10;
            // Update the text position
            textInstance.position.set(width * 0.5, height * 0.55);
        }

        const upImage: Phaser.Image = Placeholders.image(0, 0, Textures.roundedRect(width, height, 10, defaultColor), "Up");
        const overImage: Phaser.Image = Placeholders.image(0, 0, Textures.roundedRect(width, height, 10, overColor), "Over");
        const downImage: Phaser.Image = Placeholders.image(0, 0, Textures.roundedRect(width, height, 10, downColor), "Down");


        overImage.visible = false;
        downImage.visible = false;

        sprite.addChild(upImage);
        sprite.addChild(overImage);
        sprite.addChild(downImage);
        sprite.addChild(textInstance);

        sprite.inputEnabled = true;
        sprite.input.useHandCursor = true;

        sprite.events.onInputUp.add(() => {
            downImage.visible = false;
            overImage.visible = false;
            upImage.visible = true;

            if (callback) {
                callback.call(callbackContext, this);
            }
        });

        sprite.events.onInputDown.add(() => {
            downImage.visible = true;
            overImage.visible = false;
            upImage.visible = false;
        });

        sprite.events.onInputOver.add(() => {
            downImage.visible = false;
            overImage.visible = true;
            upImage.visible = false;
        });

        sprite.events.onInputOut.add(() => {
            downImage.visible = false;
            overImage.visible = false;
            upImage.visible = true;
        });

        sprite.getBounds = function(): PIXI.Rectangle {
            return new PIXI.Rectangle(0, 0, upImage.width, upImage.height);
        }
        return sprite;
    }
}