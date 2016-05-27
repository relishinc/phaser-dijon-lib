/**
 * State
 */
import {Application} from '../application';
import {Game, GameObjectFactory} from '../core';
import {Mediator} from '../mvc';

export class State extends Phaser.State {
    protected _audio: Phaser.Sound[] = [];
    protected _mediator: Mediator = null;

    constructor() {
        super();
    }
    // Phaser.State overrides
    public init(): void {

    }

    public preload(): void {
        if (this.preloadID)
            this.game.asset.loadAssets(this.preloadID);
    }

    public create(): void {
        if (!this.game.asset.allSoundsDecoded()) {
            this.game.asset.onLoadCompleteAndAudioDecoded.addOnce(this.create, this);
            return;
        }
        this.buildInterface();
        this.afterBuildInterface();
        this.startBuild();
    }

    public shutdown(removeMediator: boolean = true, removeAudio: boolean = true): void {
        if (removeMediator) {
            this.removeMediator();
        }
        if (removeAudio) {
            this.removeAudio();
        }

        super.shutdown();
    }

    // public methods
    public listBuildSequence(): Function[] {
        return [];
    }

    public buildInterface(): void { }

    public afterBuildInterface(): void { }

    public startBuild(): void {
        this.game.sequence.run(this.listBuildSequence(), this, this.buildInterval, this.preAfterBuild, this);
    }

    public preAfterBuild(): void {
        if (typeof this.game.transition === 'undefined' || !this.game.transition.canTransitionOut()) {
            this.afterBuild();
        } else {
            if (this.game.transition.canTransitionOut()) {
                this.game.transition.onTransitionOutComplete.addOnce(this.afterBuild, this);
                this.game.transition.transitionOut();
            }
        }
    }

    public afterBuild(): void { }

    public addAudio(track: Phaser.Sound): Phaser.Sound {
        if (!this._audio) {
            this._audio = [];
        }
        this._audio.push(track);
        return track;
    }

    public removeAudio(): void {
        var sound: Phaser.Sound;
        if (!this._audio) {
            return;
        }

        while (this._audio.length > 0) {
            sound = this._audio.pop();
            if (typeof sound !== 'undefined' && sound != null && typeof sound.stop !== 'undefined') {
                if (typeof sound.onStop !== 'undefined') {
                    sound.onStop.removeAll();
                }
                sound.stop();
            }
        }
    }

    public removeMediator(): void {
        if (!this._mediator)
            return;
        this._mediator.destroy();
        this._mediator = null;
    }

    // getter / setter
    public get preloadID(): string {
        return null;
    }

    public get buildInterval(): number {
        return 10;
    }

    public get add(): GameObjectFactory {
        return this.game.addToGame;
    }

    public get app(): Application {
        return Application.getInstance();
    }

    public get game(): Game {
        return this.app.game;
    }
}