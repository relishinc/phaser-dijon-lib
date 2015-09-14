/// <reference path="../mvc/Application" />
/// <reference path="./Game" />

module dijon.core {
	export class AnalyticsManager {
		constructor(public category?: string) { }

		public trackEvent(action: string = null, label: string = null, value: string = null) {
			if (!this.active) {
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