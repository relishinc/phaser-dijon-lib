import {Model} from './Model';

export class CopyModel extends Model {
    public static MODEL_NAME: string = 'copyModel';

    private _languages: { [languageName: string]: any } = {};

    constructor(dataKey: string = null) {
        super(dataKey);

        this._languages['en'] = this._data;
    }

    public getCopy(groupId: string, itemId: string): string {
        return this.getCopyGroup(groupId)[itemId];
    }

    public getCopyGroup(groupId: string): any {
        return this._data[groupId];
    }

    public addLanguage(languageId: string, dataKey: string): any {
        if (!this.getKeyExists(dataKey)) {
            throw new Error('cannot add an alternate language from key ' + dataKey + '. Is it in the Phaser cache?');
        }

        this._languages[languageId] = this.game.cache.getJSON(dataKey);
    }

    public changeLanguage(languageId: string): void {
        if (typeof this._languages[languageId] === 'undefined')
            throw new Error('there is no language ' + languageId);

        this._data = this._languages[languageId];
    }

    public get name(): string {
        return CopyModel.MODEL_NAME;
    }
}