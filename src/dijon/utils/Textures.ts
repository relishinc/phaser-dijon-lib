import {Application} from '../application';

export class Textures {
    private static get game(): Phaser.Game {
        return Application.getInstance().game;
    }

    static rect(width: number = 100, height: number = 100, color: number = 0xffffff, alpha: number = 1, fill: boolean = true, lineColor: number = 0xffffff, lineThickness: number = 1, lineAlpha: number = 1, outline: boolean = false): PIXI.Texture {
        const gfx = Textures.game.add.graphics(0, 0);
        if (fill) {
            gfx.beginFill(color, alpha);
        }
        if (outline) {
            gfx.lineWidth = lineThickness;
            gfx.lineStyle(lineThickness, lineColor, lineAlpha);
        }
        gfx.drawRect(0, 0, width, height);

        const texture = gfx.generateTexture();
        Textures.game.world.remove(gfx);

        return texture;
    }

    static roundedRect(width: number = 100, height: number = 100, radius: number = 10, color: number = 0xffffff, alpha: number = 1, fill: boolean = true, lineColor: number = 0xffffff, lineThickness: number = 1, lineAlpha: number = 1, outline: boolean = false): PIXI.Texture {
        const gfx = Textures.game.add.graphics(0, 0);
        if (fill) {
            gfx.beginFill(color, alpha);
        }
        if (outline) {
            gfx.lineWidth = lineThickness;
            gfx.lineStyle(lineThickness, lineColor, lineAlpha);
        }
        gfx.drawRoundedRect(0, 0, width, height, radius);

        const texture = gfx.generateTexture();
        Textures.game.world.remove(gfx);

        return texture;
    }

    static square(size: number = 100, color: number = 0xffffff, alpha: number = 1, fill: boolean = true, lineColor: number = 0xffffff, lineThickness: number = 1, lineAlpha: number = 1, outline: boolean = false): PIXI.Texture {
        return Textures.rect(size, size, color, alpha, fill, lineColor, lineThickness, lineAlpha, outline);
    }

    static circle(diameter: number = 100, color: number = 0xffffff, alpha: number = 1, fill: boolean = true, lineColor: number = 0xffffff, lineThickness: number = 1, lineAlpha: number = 1, outline: boolean = false): PIXI.Texture {
        const gfx = Textures.game.add.graphics(0, 0);
        if (fill) {
            gfx.beginFill(color, alpha);
        }
        if (outline) {
            gfx.lineWidth = lineThickness;
            gfx.lineStyle(lineThickness, lineColor, lineAlpha);
        }
        gfx.drawCircle(0, 0, diameter);

        const texture = gfx.generateTexture();
        Textures.game.world.remove(gfx);

        return texture;
    }

    static ellipse(width: number = 50, height: number = 100, color: number = 0xffffff, alpha: number = 1, fill: boolean = true, lineColor: number = 0xffffff, lineThickness: number = 1, lineAlpha: number = 1, outline: boolean = false): PIXI.Texture {
        const gfx = Textures.game.add.graphics(0, 0);
        if (fill) {
            gfx.beginFill(color, alpha);
        }
        if (outline) {
            gfx.lineWidth = lineThickness;
            gfx.lineStyle(lineThickness, lineColor, lineAlpha);
        }
        gfx.drawEllipse(0, 0, width * 0.5, height * 0.5);

        const texture = gfx.generateTexture();
        Textures.game.world.remove(gfx);

        return texture;
    }
}