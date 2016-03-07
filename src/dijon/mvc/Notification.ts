import * as interfaces from '../interfaces';

export default class Notification implements interfaces.INotification {
    constructor(private _name: string, private _body: any = null) { }

    public getName(): string {
        return this._name;
    }

    public setBody(body: any): void {
        this._body = body;
    }

    public getBody(): any {
        return this._body;
    }

    public destroy() {
        this._body = null;
        this._name = null;
        delete this._body;
        delete this._name;
    }
}