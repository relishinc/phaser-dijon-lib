var UISprite = require('../UISprite');

var TextButton = function (game, x, y, bg, text, horizontalPadding, verticalPadding, borderWidth, borderColor, yOffset, autoAdd) {
    this.yOffset = typeof yOffset === 'undefined' || isNaN(yOffset) ? 0 : yOffset;

    UISprite.call(this, game, x, y, null, null, name, autoAdd);

    this.horizontalPadding = horizontalPadding;
    this.verticalPadding = verticalPadding;
    this.borderWidth = borderWidth;
    this.borderColor = borderColor;

    if (typeof this.horizontalPadding === 'undefined'){
        this.horizontalPadding = 0;
    }

    if (typeof this.verticalPadding  === 'undefined'){
        this.verticalPadding  = 0;
    }

    if (typeof this.borderWidth === 'undefined'){
        this.borderWidth = 0;
    }

    if (typeof this.borderColor === 'undefined'){
        this.borderColor = 0x000000;
    }


    this.bg = this.addChild(bg);
    this.text = this.addChild(text);
    this.bg.width = this.text.width + this.horizontalPadding * 2;
    this.bg.height = this.text.height + this.verticalPadding * 2;

    this.text.x = horizontalPadding;
    this.text.y = verticalPadding + this.yOffset;

    if (this.borderWidth > 0){
        this.drawBorder();
    }
    this.inputEnabled = true;
    this.input.useHandCursor = true;

};

TextButton.prototype = Object.create(UISprite.prototype);
TextButton.prototype.constructor = TextButton;

TextButton.prototype.update = function() {
    UISprite.prototype.update.call(this);
};

TextButton.prototype.init = function(){
    UISprite.prototype.init.call(this);
};

TextButton.prototype.buildInterface = function(){
    UISprite.prototype.buildInterface.call(this);
};

TextButton.prototype.drawBorder = function(){
    this.borderGraphics = this.game.add.graphics(0,0);
    this.borderGraphics.lineStyle(this.borderWidth, this.borderColor, 1);
    this.borderGraphics.beginFill(0x000000, 0);
    this.borderGraphics.drawRect(0, 0, this.bg.width, this.bg.height);
    this.borderGraphics.endFill();
    this.border = this.addChild(new UISprite(this.game, 0, 0, this.borderGraphics.generateTexture()));
    this.borderGraphics.destroy();
};

module.exports = TextButton;