/// <reference path="../mvc/Application" />
/// <reference path="../core/Game" />
/// <reference path="../core/GameObjectFactory" />

module dijon.core{
    export class State extends Phaser.State{
        private _audio:Phaser.Sound[] = [];
        public game:core.Game;
        
        public add:core.GameObjectFactory;
        
        constructor(){
            super();
            this.game = mvc.Application.getInstance().game;
        }
        
        public init():void{}
        
        public preload():void{
            if (this.preloadID)
                this.game.asset.loadAssets(this.preloadID);
        }
        
        public create():void{
            if (!this.game.asset.allSoundsDecoded()) {
                this.game.asset.onLoadCompleteAndAudioDecoded.addOnce(this.create, this);
                return;
            }        
            this.buildInterface();
            this.afterBuildInterface();
            this.startBuild();
        }
        
        public shutdown():void{
            this.removeAudio();
        }
        
        // public methods
        public listBuildSequence():Function[]{
            return [];
        }
        
        public buildInterface():void{}
        
        public afterBuildInterface():void{}
        
        public startBuild():void{
            this.game.sequence.run(this.listBuildSequence(), this, this.buildInterval, this.preAfterBuild, this);
        }
        
        public preAfterBuild():void{
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
        
        public afterBuild():void{}
        
        public addAudio(track:Phaser.Sound):Phaser.Sound{
            if (!this._audio){
                this._audio = [];
            }
            this._audio.push(track);
            return track;
        }
        
        public removeAudio():void {
            var sound:Phaser.Sound;
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
        get preloadID():string{
            return null;
        }
        
        get buildInterval():number{
            return 10;
        }
    }
}