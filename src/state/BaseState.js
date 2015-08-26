class BaseState extends Phaser.State{
    // Phaser.State overrides
    constructor(){
        super();
        this._audio = null;
    }
    
    init(){}
    
    preload(){
        if (this.preloadID)
            this.game.asset.loadAssets(this.preloadID);
    }
    
	create() {
        if (!this.game.asset.allSoundsDecoded()) {
            this.game.asset.onLoadCompleteAndAudioDecoded.addOnce(this.create, this);
            return;
        }        
        this.buildInterface();
        this.afterBuildInterface();
        this.startBuild();
    }
    
    shutdown() {
        this._removeAudio();
    }
    
    // public methods
    listBuildSequence(){
        return [];
    }
    
    buildInterface(){}
    
    afterBuildInterface(){}
    
    startBuild() {
        this.game.sequence.run(this.listBuildSequence(), this, this.buildInterval, this.preAfterBuild, this);
    }
    
    preAfterBuild(){
        if (this.game.debugger) {
            this.game.debugger.selectedObject = null;
            this.game.debugger.refresh();
        }

        if (typeof this.game.transition === 'undefined' || !this.game.transition.transitionOut()){
            this.afterBuild();
        } else {
            this.game.transition.onTransitionOutComplete.addOnce(this.afterBuild, this);
            this.game.transition.transitionOut();
        }
    }
    
    afterBuild(){}
    
    addAudio(track){
        if (!this._audio){
            this._audio = [];
        }
        this._audio.push(track);
        return track;
    }
    
    // private methods
    _removeAudio() {
        var sound;
        if (!this._audio){
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
    
    // getter / setter
    get game(){
        return dijon.mvc.Application.getInstance().game;
    }
    
    get preloadID(){
        return null;
    }
    
    get buildInterval(){
        return 10;
    }
}

export default BaseState;