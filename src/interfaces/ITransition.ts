/// <reference path="./ITransitionHandler.ts" />
/// <reference path="./IPreloadHandler.ts" />
module dijon.interfaces {
	export interface ITransition {
		inHandler?: ITransitionHandler;
		preloadHandler?: IPreloadHandler;
		outHandler: ITransitionHandler;
	}
}