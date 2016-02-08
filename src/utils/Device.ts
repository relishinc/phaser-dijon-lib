module dijon.utils {
    export class Device {
        public static IOS: string = 'iOS';
        public static ANDROID: string = 'android';
        public static UNKNOWN: string = 'unknown';

        public static get mobile(): boolean {
            return Device.mobileOS !== utils.Device.UNKNOWN;
        }

        public static get mobileOS() {
            const userAgent = window.navigator.userAgent || window.navigator.vendor || window['opera'];
            if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
                return utils.Device.IOS;
            } else if (userAgent.match(/Android/i)) {
                return utils.Device.ANDROID;
            } else {
                return utils.Device.UNKNOWN;
            }
        }

        public static get pixelRatio() {
            return typeof window.devicePixelRatio !== undefined ? window.devicePixelRatio : 1;
        }
        
        public static get customPixelRatio(){
            return Device.pixelRatio >= 1.5 ? 2 : 1;
        }
    }
}