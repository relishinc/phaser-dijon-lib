"use strict";
var Device = (function () {
    function Device() {
    }
    Object.defineProperty(Device, "mobile", {
        get: function () {
            return Device.mobileOS !== Device.UNKNOWN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device, "mobileOS", {
        get: function () {
            var userAgent = window.navigator.userAgent || window.navigator.vendor || window['opera'];
            if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
                return Device.IOS;
            }
            else if (userAgent.match(/Android/i)) {
                return Device.ANDROID;
            }
            else {
                return Device.UNKNOWN;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device, "browser", {
        get: function () {
            var ua = navigator.userAgent.toLowerCase();
            return {
                firefox: ua.indexOf('firefox') > -1,
                ie: ua.indexOf('ie') > -1,
                safari: ua.indexOf('safari') > -1,
                chrome: ua.indexOf('chrome') > -1,
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device, "pixelRatio", {
        get: function () {
            return typeof window.devicePixelRatio !== undefined ? window.devicePixelRatio : 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device, "customPixelRatio", {
        get: function () {
            return Device.pixelRatio >= 1.5 ? 2 : 1;
        },
        enumerable: true,
        configurable: true
    });
    Device.IOS = 'iOS';
    Device.ANDROID = 'android';
    Device.UNKNOWN = 'unknown';
    return Device;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Device;
//# sourceMappingURL=Device.js.map