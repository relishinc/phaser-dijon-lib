/**
 * generic model for retrieving copy
 * @param {Phaser.Game} game reference to the current Phaser.Game
 * @param {String} [dataKey = undefined] Phaser.Cache key to use for this model
 * @constructor
 */
Dijon.CopyModel = function(game, dataKey) {
    //make sure only one copy model is attached to the game
    if (typeof game !== 'undefined' && typeof game.copy !== 'undefined') {
        return;
    }

    Dijon.Model.call(this, game, dataKey);

    this._langs = {};
    this._langs['en'] = this._data;

    this.game.onLanguageChange = new Phaser.Signal();
};

Dijon.CopyModel.prototype = Object.create(Dijon.Model.prototype);

// public methods
/**
 * retrieves a copy item
 * @param  {String} groupId id of the copy group
 * @param  {String} itemId  id of the item within that group
 * @return {String}         the copy (a single string)
 */
Dijon.CopyModel.prototype.getCopy = function(groupId, itemId) {
    return this._data[groupId][itemId];
};

/**
 * retrieves a full copy group, usually in case we want to do some manipulation in a view
 * @param  {String} groupId id of the copy group
 * @return {Object}         the full copy group
 */
Dijon.CopyModel.prototype.getCopyGroup = function(groupId) {
    return this._data[groupId];
};

Dijon.CopyModel.prototype.addLanguage = function(lang, dataKey) {
    if (!this.game.cache.getText(dataKey)) {
        throw new Error('cannot add an alternate language from key ' + dataKey + '. Is it in the Phaser cache?');
    }
    this._langs[lang] = this.parseData(this.game.cache.getText(dataKey));
};

Dijon.CopyModel.prototype.changeLanguage = function(lang) {
    if (typeof this._langs[lang] === 'undefined')
        throw new Error('there is no language ' + lang);

    this._data = this._langs[lang];

    this.game.onLanguageChange.dispatch();
};


Dijon.CopyModel.prototype.constructor = Dijon.CopyModel;
