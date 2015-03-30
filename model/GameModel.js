var GameModel = function (game) {
    game.model = this;
    this.game = game;

    this.reset();
};

GameModel.prototype.reset = function() {
    this.firstRun = true;
};

GameModel.prototype.constructor = GameModel;

module.exports = GameModel;