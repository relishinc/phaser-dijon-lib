import Application from '../mvc/Application';
import Game from './Game';
import GameObjectFactory from './GameObjectFactory';
import Mediator from '../mvc/Mediator';
export default class State extends Phaser.State {
    protected _audio: Phaser.Sound[];
    protected _mediator: Mediator;
    constructor();
    init(): void;
    preload(): void;
    create(): void;
    shutdown(): void;
    listBuildSequence(): Function[];
    buildInterface(): void;
    afterBuildInterface(): void;
    startBuild(): void;
    preAfterBuild(): void;
    afterBuild(): void;
    addAudio(track: Phaser.Sound): Phaser.Sound;
    removeAudio(): void;
    removeMediator(): void;
    preloadID: string;
    buildInterval: number;
    add: GameObjectFactory;
    app: Application;
    game: Game;
}
