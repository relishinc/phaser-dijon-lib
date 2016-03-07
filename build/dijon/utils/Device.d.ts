import * as interfaces from '../interfaces';
export default class Device {
    static IOS: string;
    static ANDROID: string;
    static UNKNOWN: string;
    static mobile: boolean;
    static mobileOS: string;
    static browser: interfaces.IBrowser;
    static pixelRatio: number;
    static customPixelRatio: number;
}
