import {IAsset} from './IAsset';
export interface ITiledmapAssets extends IAsset{
    assets: Array<IAsset>;
}