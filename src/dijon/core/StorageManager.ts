/**
 * StorageManager
 */
import {Application} from '../application';
import {Game} from '../core';
export class StorageManager {
    public game: Game;
    private _localStorageAvailable: boolean;

    constructor() {
        this.game = Application.getInstance().game;
        this._init();
    }

    // private methods
    private _init(): void {
        this._localStorageAvailable = this._getIsLocalStorageAvailable();
        console.log('local storage available', this._localStorageAvailable);
    }

    private _getIsLocalStorageAvailable(): boolean {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {
            return false;
        }
    }

    private _getString(data: Object | string): string {
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
    }

    // public methods
    /**
    * gets stored data with the specified key
    * @param  {String}  key    the LocalStorage key where the data is stored
    * @param  {Boolean} isJSON is the stored data just a string or is it stringified json (assumes it's JSON)
    * @return {String | Object} the retrieved data - if it's a JSON string, we parse the data and return the JSON object
    */
    public getFromLocalStorage(key: string, isJSON: boolean = true) {
        var data = localStorage.getItem(key);
        if (typeof data === 'undefined') {
            console.log('no data saved with the key', key);
            return null;
        }

        if (isJSON !== false) {
            data = JSON.parse(data);
        }
        return data;
    }

    /**
    * saves data to localstorage
    * @param  {String} key   the LocalStorage key the data will be saved to
    * @param  {String|Object} value the data to save (if it's an object, will be stringified before saving)
    * @return {void}
    */
    public saveToLocalStorage(key: string, value: string | Object) {
        if (!this._localStorageAvailable) {
            console.log('no local storage');
            return false;
        }
        try {
            localStorage.setItem(key, this._getString(value));
        } catch (e) {
            console.log('your data could not be saved');
        }
    }

    /**
    * clear stored data
    * @param  {String} key the LocalStorage key to clear
    * @return {void}
    */
    public clearFromLocalStorage(key: string) {
        if (!this._localStorageAvailable) {
            console.log('no local storage');
            return false;
        }

        try {
            localStorage.removeItem(key);
        } catch (e) { }
    }
}