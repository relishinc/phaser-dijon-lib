import Model from './Model';
export default class CopyModel extends Model {
    static MODEL_NAME: string;
    private _languages;
    constructor(dataKey?: string);
    getCopy(groupId: string, itemId: string): string;
    getCopyGroup(groupId: string): any;
    addLanguage(languageId: string, dataKey: string): any;
    changeLanguage(languageId: string): void;
    name: string;
}
