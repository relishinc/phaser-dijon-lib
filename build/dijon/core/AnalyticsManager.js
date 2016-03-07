"use strict";
var AnalyticsManager = (function () {
    function AnalyticsManager(enabled, category) {
        if (enabled === void 0) { enabled = true; }
        if (category === void 0) { category = null; }
        this.enabled = enabled;
        this.category = category;
    }
    AnalyticsManager.prototype.trackEvent = function (action, label, value) {
        if (action === void 0) { action = null; }
        if (label === void 0) { label = null; }
        if (value === void 0) { value = null; }
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
    };
    AnalyticsManager.prototype.trackOmnitureEvent = function (gameName, activity, isGameEvent) {
        if (!this.enabled) {
            return;
        }
        if (typeof window['trackFlashEvent'] === 'undefined')
            return false;
        window['trackFlashEvent'](gameName, activity, isGameEvent);
    };
    Object.defineProperty(AnalyticsManager.prototype, "active", {
        get: function () {
            return (window['ga']) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnalyticsManager.prototype, "ga", {
        get: function () {
            return window['ga'];
        },
        enumerable: true,
        configurable: true
    });
    return AnalyticsManager;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AnalyticsManager;
var AnalyticsException = (function () {
    function AnalyticsException(message) {
        this.message = message;
        this.name = 'AnalyticsException';
    }
    return AnalyticsException;
}());
exports.AnalyticsException = AnalyticsException;
//# sourceMappingURL=AnalyticsManager.js.map