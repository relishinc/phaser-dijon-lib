var CopyModel = function(game, data) {
    //make sure only one copy model is attached to the game
    if (game && typeof game.copy !== 'undefined') {
        return false;
    }

    game.copy = this;

    if (typeof data !== 'undefined') {
        this.setData(data);
    }
};

CopyModel.prototype.constructor = CopyModel;

// private methods

CopyModel.prototype._hasData = function() {
    return typeof this._data !== 'undefined';
};

// public methods

CopyModel.prototype.getCopy = function(groupId, itemId) {
    if (!this._hasData()) {
        return false;
    }

    return this._data[groupId][itemId];
};

CopyModel.prototype.setData = function(jsonText) {
    this._data = JSON.parse(jsonText);
};



module.exports = CopyModel;
