import { Device } from 'dijon/utils';

// Send a new event model as the body of your event tracking notification.
export class AnalyticsEventModel {

	public action: string;
    public label: string;
    public value: number;
    
	constructor(pAction: string, pLabel: string = "", pValue: number = null) {
    	this.action = pAction;
        this.label = pLabel;
        this.value = pValue;
	}
}

export class AnalyticsManager {
    // Set this static in your application. It is required.
    protected _category: string;

    // for cocoon only
    private _trackerId: string = null;
    private _startedWithTrackerId: boolean = false;

    constructor(public enabled: boolean = true, category: string = null) { 
        this._category = category;
    }

    public setCategory(newCat: string): void {
        this._category = newCat;
    }
    
    public trackEvent(action: string = null, label: string = null, value: string = null) {
        if (!this.active || !this.enabled) {
            return;
        }

        if (!action) {
            throw new AnalyticsException('No action defined');
        }
        else if (this._category === null) {
            throw new AnalyticsException('No category defined');
        }

        if (Device.cocoon && window['analytics']!==undefined) {
            const analytics = window['analytics'];
            analytics.trackEvent(this._category, action, label, value);
            return;
        }

        if (value) {
            this.ga('send', 'event', this._category, action, label, value);
        }
        else if (label) {
            this.ga('send', 'event', this._category, action, label);
        }
        else {
            this.ga('send', 'event', this._category, action);
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
