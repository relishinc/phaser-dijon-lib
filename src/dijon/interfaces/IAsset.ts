export interface IAsset {
    url: string;
    type: string;
    extensions?: string;
    required?: boolean;
    id?: string;
    key?: string;
    resolution: number;
}