var UISprite = function(game, x, y, key, frame, name, autoAdd) {

    Phaser.Sprite.call(this, game, x, y, key, frame);
    this.__frameName = frame;

    this.name = typeof name === 'undefined' ? typeof frame !== 'undefined' ? frame : 'UISprite' : name;

    if (autoAdd !== false) {
        game.add.existing(this);
    }

    this.init();
    this.buildInterface();
};

UISprite.prototype = Object.create(Phaser.Sprite.prototype);
UISprite.prototype.constructor = UISprite;

UISprite.prototype.init = function() {
    // initialize variables
};

UISprite.prototype.buildInterface = function() {
    // add visual elements
};

UISprite.prototype.getFramePrefix = function() {
    var frameArr,
        prefix;
    if (typeof(this.__frameName) !== 'string') {
        return '';
    }
    if (this.__frameName.indexOf('/')) {
        frameArr = this.__frameName.split('/');
        frameArr.pop();
        prefix = frameArr.join('/');
        return prefix;
    }
    return this.__frameName;
};

UISprite.prototype.hide = function() {
    this.visible = false;
};

UISprite.prototype.addAnim = function(animName, animPath, numFrames) {
    this.animations.add(animName, Phaser.Animation.generateFrameNames(animPath, 1, numFrames, '', 4));
};

UISprite.prototype.playAnim = function(animName, framerate, loop, killOnComplete) {
    this.animations.play(animName, framerate, loop, killOnComplete);
};

UISprite.prototype.centerAnchor = function() {
    this.anchor.set(0.5);
};

UISprite.prototype.center = function() {
    this.position.set(this.parent.width >> 1, this.parent.height >> 1);
};

module.exports = UISprite;
