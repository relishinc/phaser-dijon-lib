import {IAsset} from './IAsset';
export interface IAssetList {
    autoload: boolean;
    required: boolean;
    assets: Array<IAsset>;
}