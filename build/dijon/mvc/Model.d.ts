import Application from "./Application";
import Game from "../core/Game";
export default class Model {
    private modelName;
    app: Application;
    game: Game;
    protected _data: any;
    static MODEL_NAME: string;
    constructor(dataKey?: string, modelName?: string);
    protected getKeyExists(key: string): boolean;
    setData(dataKey: string): any;
    getData(): any;
    destroy(): void;
    name: string;
}
