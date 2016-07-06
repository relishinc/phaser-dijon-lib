import {Device} from 'dijon/utils';
export class AnalyticsManager {
    // for cocoon only
    private _trackerId: string = null;
    private _startedWithTrackerId: boolean = false;

    constructor(public enabled: boolean = true, public category: string = null) { }

    public trackEvent(action: string = null, label: string = null, value: string = null) {
        if (!this.active || !this.enabled) {
            return;
        }

        if (!action) {
            throw new AnalyticsException('No action defined');
        }

        if (Device.cocoon && window['analytics']!==undefined) {
            const analytics = window['analytics'];
            analytics.trackEvent(this.category, action, label, value);
            return;
        }

        if (value) {
            this.ga('send', 'event', this.category, action, label, value);
        }
        else if (label) {
            this.ga('send', 'event', this.category, action, label);
        }
        else {
            this.ga('send', 'event', this.category, action);
        }
    }

    trackOmnitureEvent(gameName: string, activity: string, isGameEvent: boolean) {
        if (!this.enabled) {
            return;
        }
        //console.log('tracking omniture', gameName, activity, isGameEvent);
        if (typeof window['trackFlashEvent'] === 'undefined')
            return false;
        window['trackFlashEvent'](gameName, activity, isGameEvent);
    }

    private _startWithTrackerId(): void {
        let self = this;
        if (Device.cocoon && window['analytics']!==undefined) {
            let analytics = window['analytics'];
            analytics.startTrackerWithId(this._trackerId);
        }
    }


    set trackerId(value: string) {
        this._trackerId = value;
        if (!this._startedWithTrackerId) {
            this._startWithTrackerId();
        }
    }

    get trackerId(): string {
        return this._trackerId;
    }

    // getter / setter
    get active(): boolean {
        return (window['ga'] || (Device.cocoon && window['analytics'] !== undefined)) ? true : false;
    }

    get ga(): Function {
        return window['ga'];
    }
}

export class AnalyticsException {
    public name: string = 'AnalyticsException';
    constructor(public message: string) { }
}
