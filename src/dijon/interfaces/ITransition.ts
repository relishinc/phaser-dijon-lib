import {ITransitionHandler, IPreloadHandler} from '../interfaces';

export interface ITransition {
    inHandler?: ITransitionHandler;
    preloadHandler?: IPreloadHandler;
    outHandler: ITransitionHandler;
}