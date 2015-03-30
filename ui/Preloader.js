var UIGroup = require('../display/UIGroup');
var UIText = require('../display/UIText');
var Fonts = require('../utils/Fonts');

var Preloader = function (game, parent) {
    game.preloader = this;
    this.disabled = true;
    UIGroup.call(this, game, parent, 'Preloader', true);
};

Preloader.prototype = Object.create(UIGroup.prototype);
Preloader.prototype.constructor = Preloader;

Preloader.prototype.init = function(){
    UIGroup.prototype.init.call(this);

    this.onLoadStarted = new Phaser.Signal();
    this.onLoadCompleted = new Phaser.Signal();

    this.addLoadListeners();

    this.inputEnabled = false;
};

Preloader.prototype.buildInterface = function(){
    this.bg = this.add(this.game.add.image(0, 0, 'ui','preloader/bg'));
    this.addText();
};

Preloader.prototype.addLoadListeners = function(){
    this.game.assetManager.onLoadStart.add(this.onLoadStart, this);
    this.game.assetManager.onFileComplete.add(this.onLoadProgress, this);
    this.game.assetManager.onLoadCompleteAndAudioDecoded.add(this.onLoadComplete, this);
};

Preloader.prototype.onLoadStart = function(){
    this.disabled = this.game.state.current === 'boot';
    this.onLoadStarted.dispatch();
    this.show();
};

Preloader.prototype.onLoadProgress = function(progress){
    if (this.disabled || isNaN(progress)){
        return;
    }
    this.percent = progress;
    this.setLoadingText();
};

Preloader.prototype.setLoadingText = function(){
    if (this.disabled){
        return false;
    }
    if (this.percent === 0 || isNaN(this.percent)){
        this.percent = 0;
    }
    this.loadingText.text = 'Loading ' + Math.round(this.percent).toString() + '%';
    this.loadingText.pivot.set(this.loadingText.width >> 1, this.loadingText.height >> 1);

    console.log(this.loadingText.pivot.x)
};

Preloader.prototype.onLoadComplete = function() {
    this.onLoadCompleted.dispatch();
};

Preloader.prototype.show = function(){
    this.disabled = false;
    this.reset();

    if (!this.disabled){
        this.setLoadingText();
    }

    this.visible = true;
    this.game.tweens.remove(this.hideTween);
    this.alpha = 1;
};

Preloader.prototype.hide = function() {
    this.game.tweens.remove(this.showTween);
    this.hideTween = this.game.add.tween(this).to({alpha:0}, 400, Phaser.Easing.Quadratic.In, true, 400);
    this.hideTween.onComplete.add(this.makeInvisible);
    this.disabled = true;
};

Preloader.prototype.makeInvisible = function() {
    this.visible = false;
};

Preloader.prototype.addText = function(){
    this.loadingText = this.add(new UIText(this.game, this.game.width >> 1, this.game.height >> 1, 'Loading 0%', Fonts.ARIAL, 36, '#FFFFFF', 'center'));
};

Preloader.prototype.reset = function(){
    this.percent = 0;
    this.setLoadingText();
};

module.exports = Preloader;