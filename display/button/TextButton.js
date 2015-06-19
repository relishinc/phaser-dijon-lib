Dijon.TextButton = function(game, x, y, bg, text, horizontalPadding, verticalPadding, borderWidth, borderColor, yOffset) {
    this.yOffset = typeof yOffset === 'undefined' || isNaN(yOffset) ? 0 : yOffset;

    Dijon.UISprite.call(this, game, x, y, null, null, name);

    this.horizontalPadding = horizontalPadding;
    this.verticalPadding = verticalPadding;
    this.borderWidth = borderWidth;
    this.borderColor = borderColor;

    if (typeof this.horizontalPadding === 'undefined') {
        this.horizontalPadding = 0;
    }

    if (typeof this.verticalPadding === 'undefined') {
        this.verticalPadding = 0;
    }

    if (typeof this.borderWidth === 'undefined') {
        this.borderWidth = 0;
    }

    if (typeof this.borderColor === 'undefined') {
        this.borderColor = 0x000000;
    }


    this.bg = this.addChild(bg);
    this.text = this.addChild(text);
    this.bg.width = this.text.width + this.horizontalPadding * 2;
    this.bg.height = this.text.height + this.verticalPadding * 2;

    this.text.x = horizontalPadding;
    this.text.y = verticalPadding + this.yOffset;

    if (this.borderWidth > 0) {
        this.drawBorder();
    }
    this.inputEnabled = true;
    this.input.useHandCursor = true;

};

Dijon.TextButton.prototype = Object.create(Dijon.UISprite.prototype);

Dijon.TextButton.prototype.update = function() {
    Dijon.UISprite.prototype.update.call(this);
};

Dijon.TextButton.prototype.init = function() {
    Dijon.UISprite.prototype.init.call(this);
};

Dijon.TextButton.prototype.buildInterface = function() {
    Dijon.UISprite.prototype.buildInterface.call(this);
};

Dijon.TextButton.prototype.drawBorder = function() {
    this.borderGraphics = this.game.add.graphics(0, 0);
    this.borderGraphics.lineStyle(this.borderWidth, this.borderColor, 1);
    this.borderGraphics.beginFill(0x000000, 0);
    this.borderGraphics.drawRect(0, 0, this.bg.width, this.bg.height);
    this.borderGraphics.endFill();
    this.border = this.addChild(new Dijon.UISprite(this.game, 0, 0, this.borderGraphics.generateTexture()));
    this.borderGraphics.destroy();
};

Dijon.TextButton.prototype.constructor = Dijon.TextButton;

// Phaser addons
Phaser.GameObjectFactory.prototype.textButton = function(x, y, bg, text, horizontalPadding, verticalPadding, borderWidth, borderColor, yOffset, group) {
    if (typeof group === 'undefined') {
        group = this.world;
    }
    return group.add(new Dijon.TextButton(this.game, x, y, bg, text, horizontalPadding, verticalPadding, borderWidth, borderColor, yOffset));
};
