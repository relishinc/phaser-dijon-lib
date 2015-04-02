var UIGroup = function (game, parent, name, addToStage) {
    this.game = game;
    if (typeof name === 'undefined') {
        name = 'UIGroup';
    }
    Phaser.Group.call(this, game, parent, name, addToStage);

    this.init();
    this.buildInterface();
};

UIGroup.prototype = Object.create(Phaser.Group.prototype);
UIGroup.prototype.constructor = UIGroup;

UIGroup.prototype.init = function () {
    // initialize variables
};

UIGroup.prototype.buildInterface = function () {
    // add visual elements
};

UIGroup.prototype.centerPivot = function(){
    this.pivot.set(this.width >> 1, this.height >> 1);
};

UIGroup.prototype.center = function(){
    this.position.set(this.parent.width >> 1, this. parent.height >> 1);
};

module.exports = UIGroup;