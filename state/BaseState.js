export default class BaseState extends Phaser.State{
	create() {
        if (!this.game.asset.allSoundsDecoded()) {
            this.game.asset.onLoadCompleteAndAudioDecoded.addOnce(this.create, this);
            return;
        }

        this.buildInterface();
        this.afterBuildInterface();
        this.startBuild();
        
        this.game = dijon.core.Application.getInstance().game;
    }
}