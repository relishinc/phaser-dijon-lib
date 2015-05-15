var Model = function(game, data) {
    //make sure only one model is attached to the game
    this.game = game;

    if (typeof data !== 'undefined') {
        this.setData(data);
    }
};

Model.prototype.constructor = Model;

// private methods

Model.prototype._hasData = function() {
    return this._data && typeof this._data !== 'undefined';
};

// public methods

Model.prototype.setData = function(dataKey) {
    if (!this.game.cache.getText(dataKey)) {
        console.log('cannot set data from key ' + dataKey + '. Is it in the Phaser cache?');
        return false;
    }

    this.data = this.parseData(this.game.cache.getText(dataKey));
};

Model.prototype.parseData = function(data) {
    return JSON.parse(data);
};

module.exports = Model;
