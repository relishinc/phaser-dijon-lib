export default class AnalyticsManager {
    enabled: boolean;
    category: string;
    constructor(enabled?: boolean, category?: string);
    trackEvent(action?: string, label?: string, value?: string): void;
    trackOmnitureEvent(gameName: string, activity: string, isGameEvent: boolean): boolean;
    active: boolean;
    ga: Function;
}
export declare class AnalyticsException {
    message: string;
    name: string;
    constructor(message: string);
}
