import {ITransitionHandler} from './ITransitionHandler';

export interface IPreloadHandler extends ITransitionHandler {
    loadStart();
    loadProgress(progress?: number);
    loadComplete();
}