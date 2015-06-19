/**
 * a generic model class
 * @param {Phaser.Game} game reference to the current Phaser.Game
 * @param {String} [dataKey = undefined] Phaser.Cache key to use for this model
 * @constructor
 */
var Model = function(game, dataKey) {
    //make sure only one model is attached to the game
    this.game = game;

    if (typeof dataKey !== 'undefined') {
        this.setData(dataKey);
    }
};

Model.prototype.constructor = Model;

// private methods
/**
 * whether the model contains any data
 * @return {Boolean}
 * @private
 */
Model.prototype._hasData = function() {
    return this._data && typeof this._data !== 'undefined';
};

// public methods
/**
 * sets the data - gets some data from the Phaser.Cache and uses it
 * assumes it's a json file
 * @param {String} dataKey the key for pulling data from the Phaser.Cache
 */
Model.prototype.setData = function(dataKey) {
    if (!this.game.cache.getText(dataKey)) {
        console.log('cannot set data from key ' + dataKey + '. Is it in the Phaser cache?');
        return false;
    }

    this._data = this.parseData(this.game.cache.getText(dataKey));
};

/**
 * retrieves the data
 * @return {Object} the data
 */
Model.prototype.getData = function() {
    return this._data;
};

/**
 * parses the data
 * @param  {String} data the data to parse (assumes it's a json string)
 * @return {Object}      the parsed data
 */
Model.prototype.parseData = function(data) {
    return JSON.parse(data);
};

module.exports = Model;
