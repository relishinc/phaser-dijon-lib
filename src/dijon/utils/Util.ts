export class Util { 
    public static isNumber(value: string): boolean {
        return (+value === +value);
    }
}