import Game from './Game';
export default class StorageManager {
    game: Game;
    private _localStorageAvailable;
    constructor();
    private _init();
    private _getIsLocalStorageAvailable();
    private _getString(data);
    getFromLocalStorage(key: string, isJSON?: boolean): any;
    saveToLocalStorage(key: string, value: string | Object): boolean;
    clearFromLocalStorage(key: string): boolean;
}
