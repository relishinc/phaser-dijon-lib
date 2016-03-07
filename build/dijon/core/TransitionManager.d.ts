import Game from './Game';
import * as interfaces from '../interfaces';
export default class TransitionManager {
    game: Game;
    onTransitionOutComplete: Phaser.Signal;
    onTransitionInComplete: Phaser.Signal;
    private _transition;
    private _transitions;
    private _exceptions;
    private _fromState;
    private _toState;
    constructor();
    private _add(id, outHandler, preloadHandler, inHandler);
    private _getTransition(inState, outState);
    private _transitionInComplete();
    private _transitionOutComplete();
    private _preloadComplete();
    private _clearTransition();
    add(fromState: string, toState: string | interfaces.IPreloadHandler, outHandler?: interfaces.ITransitionHandler, preloadHandler?: interfaces.IPreloadHandler, inHandler?: interfaces.ITransitionHandler): void;
    addAll(handler: interfaces.IPreloadHandler): void;
    addException(state: string): void;
    remove(fromState: string, toState?: string): void;
    to(state: string): void;
    transitionIn(): void;
    canTransitionOut(): boolean;
    transitionOut(): void;
}
