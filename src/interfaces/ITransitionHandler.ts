/// <reference path="../lib.d.ts" />

module dijon.interfaces{
	export interface ITransitionHandler{
		transitionInComplete:Phaser.Signal;
		transitionOutComplete:Phaser.Signal;
		transitionOut?:Function;
		transitionIn?:Function;
	}
}