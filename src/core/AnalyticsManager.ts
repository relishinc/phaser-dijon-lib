/// <reference path="../mvc/Application" />
/// <reference path="./Game" />

module dijon.core {
    export class AnalyticsManager {
        
        constructor(public enabled:boolean = true, public category:string = null) { }

        public trackEvent(action: string = null, label: string = null, value: string = null) {
            if (!this.active || !this.enabled) {
                return;
            }

            if (!action) {
                throw new AnalyticsException('No action defined');
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

        trackOmnitureEvent(gameName:string, activity:string, isGameEvent:boolean) {
            if (!this.enabled) {
                return;
            }
            //console.log('tracking omniture', gameName, activity, isGameEvent);
            if (typeof window['trackFlashEvent'] === 'undefined')
                return false;
            window['trackFlashEvent'](gameName, activity, isGameEvent);
        }
		
        // getter / setter
        get active(): boolean {
            return (window['ga']) ? true : false;
        }

        get ga(): Function {
            return window['ga'];
        }
    }

    export class AnalyticsException {
        public name: string = 'AnalyticsException';
        constructor(public message: string) { }
    }
}