var SaveManager = function(game) {
    this.game = game;
    this.game.saveManager = this;

    this._init();
};

SaveManager.prototype = {
    constructor: SaveManager,

    // private methods

    _init: function() {
        this._localStorageAvailable = this._getIsLocalStorageAvailable();
        console.log('saving available', this._localStorageAvailable);
    },

    _getString: function(data) {
        if (typeof data === 'string') {
            return data;
        }

        var jsonData;

        try {
            jsonData = JSON.stringify(data);
        } catch (e) {
            console.log('Could not convert' + data + ' to json');
            return null;
        }

        return jsonData;
    },

    _getIsLocalStorageAvailable: function() {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {
            return false;
        }
    },

    // public methods

    getData: function(key, isJSON) {
        var data = localStorage[key];
        if (typeof data === 'undefined') {
            console.log('no data saved with the key', key);
            return null;
        }

        if (isJSON !== false) {
            data = JSON.parse(data);
        }
        return data;
    },

    saveData: function(key, value) {
        if (!this._localStorageAvailable) {
            console.log('no local storage');
            return false;
        }
        localStorage[key] = this._getString(value);
    },

    clearData: function(saveID) {
        if (!this._localStorageAvailable) {
            console.log('no local storage');
            return false;
        }

        try {
            localStorage.removeItem(saveID);
        } catch (e) {}

    }
};

module.exports = SaveManager;
