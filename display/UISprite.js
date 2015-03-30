var UISprite = function (game, x, y, key, frame, name, autoAdd) {

    Phaser.Sprite.call(this, game, x, y, key, frame);
    this.__frameName = frame;
    this.debug = true;

    this.name = typeof name === 'undefined' ?  typeof frame !== 'undefined' ? frame : 'UISprite' : name;

    if (autoAdd !== false) {
        game.add.existing(this);
    }

    this.init();
    this.buildInterface();

    if (this.game.debugMode && this.debug) {
        this.inputEnabled = true;
        this.addDebugSettings();
    }
};

UISprite.prototype = Object.create(Phaser.Sprite.prototype);
UISprite.prototype.constructor = UISprite;

UISprite.prototype.init = function () {
    // initialize variables
};

UISprite.prototype.buildInterface = function () {
    // add visual elements
};

UISprite.prototype.addDebugSettings = function () {

    this.events.onInputDown.add(this.handleClick, this);
    this.input.enableDrag();
    this.game.debugList.push(this);

};

UISprite.prototype.getFramePrefix = function(){
    var frameArr;
    if (typeof(this.__frameName) !== 'string'){
        return '';
    }
    if (this.__frameName.indexOf('/')){
        frameArr = this.__frameName.split('/');
        return frameArr[0];
    }
    return this.__frameName;
};

UISprite.prototype.handleClick = function () {
    this.game.debugItem = this;
};

UISprite.prototype.hide = function () {
    this.visible = false;
};

UISprite.prototype.addAnim = function(animName, animPath, numFrames) {
    this.animations.add(animName, Phaser.Animation.generateFrameNames(animPath, 1, numFrames, '', 4));
};

module.exports = UISprite;