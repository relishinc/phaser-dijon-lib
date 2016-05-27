import {INotification,IObserver} from '../interfaces';
import {Application} from '../application';
import {Game} from '../core';

export class Model {
    public app: Application;
    public game: Game;
    protected _data: any;

    public static MODEL_NAME: string = 'Model';

    constructor(dataKey: string = null, private modelName: string = null) {
        this.app = Application.getInstance();
        this.game = this.app.game;

        if (dataKey) {
            this.setData(dataKey);
        }

        this.app.registerModel(this);
    }
    
    public onRegister():void{
        
    }
    
    public onRemoved():void{
        
    }

    protected getKeyExists(key: string): boolean {
        return this.game.cache.getJSON(key) !== null;
    }

    public setData(dataKey: string): any {
        if (!this.getKeyExists(dataKey)) {
            console.log('Model:: cannot set data from key ' + dataKey + '. Is it in the Phaser cache?');
            return false;
        }

        this._data = this.game.cache.getJSON(dataKey);
        return this._data;
    }

    public getData(): any {
        return this._data;
    }

    public destroy(): void {
        this.app.removeModel(this);
    }

    public get name(): string {
        return this.modelName || Model.MODEL_NAME;
    }
}