/**
 * generic model for retrieving copy
 * @param {Phaser.Game} game reference to the current Phaser.Game
 * @param {String} [dataKey = undefined] Phaser.Cache key to use for this model
 * @constructor
 */
var CopyModel = function(game, dataKey) {
    //make sure only one copy model is attached to the game
    if (typeof game !== 'undefined' && typeof game.copy !== 'undefined') {
        return;
    }

    Dijon.Model.call(this, game, dataKey);

    game.copy = this;
};

CopyModel.prototype.constructor = CopyModel;
CopyModel.prototype = Object.create(Dijon.Model.prototype);

// public methods
/**
 * retrieves a copy item
 * @param  {String} groupId id of the copy group
 * @param  {String} itemId  id of the item within that group
 * @return {String}         the copy (a single string)
 */
CopyModel.prototype.getCopy = function(groupId, itemId) {
    return this._data[groupId][itemId];
};

/**
 * retrieves a full copy group, usually in case we want to do some manipulation in a view
 * @param  {String} groupId id of the copy group
 * @return {Object}         the full copy group
 */
CopyModel.prototype.getCopyGroup = function(groupId) {
    return this._data[groupId];
};

module.exports = CopyModel;
