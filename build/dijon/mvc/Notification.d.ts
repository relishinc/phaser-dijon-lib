import * as interfaces from '../interfaces';
export default class Notification implements interfaces.INotification {
    private _name;
    private _body;
    constructor(_name: string, _body?: any);
    getName(): string;
    setBody(body: any): void;
    getBody(): any;
    destroy(): void;
}
