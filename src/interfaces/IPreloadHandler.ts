/// <reference path="../lib.d.ts" />
/// <reference path="./ITransitionHandler" />

module dijon.interfaces {
	export interface IPreloadHandler extends ITransitionHandler {
		loadStart();
		loadProgress(progress?: number);
		loadComplete();
	}
}