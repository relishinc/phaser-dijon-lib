import {Application} from '../application';

export class Time {
    public static delayedCall(delayInMilliseconds: number, callback: Function, callbackContext: any, ...params) {
        if (params === undefined) {
            params = [];
        }
        params.unshift(delayInMilliseconds, callback, callbackContext);

        return Application.getInstance().game.time.events.add.apply(Application.getInstance().game.time.events, params);
    }
}