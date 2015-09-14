/// <reference path="./ITransitionHandler" />
/// <reference path="./IPreloadHandler" />
module dijon.interfaces {
	export interface ITransition {
		inHandler?: ITransitionHandler;
		preloadHandler?: IPreloadHandler;
		outHandler: ITransitionHandler;
	}
}