/// <reference path="./AssetManager" />
/// <reference path="./SequenceManager" />
/// <reference path="./TransitionManager" />
/// <reference path="./StorageManager" />
/// <reference path="./AudioManager" />
/// <reference path="./AnalyticsManager" />
/// <reference path="./GameObjectFactory" />
/// <reference path="../interfaces/IGameConfig" />

module dijon.core{
	export class Game extends Phaser.Game{
		// public variables
		// application
		public app:mvc.Application;
		
		// managers
		public asset:AssetManager;
		public sequence:SequenceManager;
		public transition:TransitionManager;
		public storage:StorageManager;
		public audio:AudioManager;
		public analytics:AnalyticsManager;
		public add:GameObjectFactory;
		
		// signals
		public onWorldInputDisabled:Phaser.Signal = new Phaser.Signal();
    	public onWorldInputEnabled:Phaser.Signal = new Phaser.Signal();
		
		// display layers
		public gameLayer:dijon.display.Group;
		public uiLayer:dijon.display.Group;
		public stageLayer:dijon.display.Group;
		
		// Phaser.Game overrides
		constructor(config:interfaces.IGameConfig){
			super(config);
		}
		
		public boot(){ 
			super.boot();
			
			this.app = mvc.Application.getInstance();
			
			// add managers
			this.asset = new AssetManager();
			this.sequence = new SequenceManager();
			this.transition = new TransitionManager();
			this.storage = new StorageManager();
			this.audio = new AudioManager();
			this.analytics = new AnalyticsManager();
			
			// replace Phaser.GameObjectFactory
			this.add = null;
			this.add = new GameObjectFactory(this);
			
			// adds game and ui layers
			this.gameLayer = this.add.dGroup(0, 0, '_game_layer');
			
			// add ui layer and set the "fixedToCamera" property to true
			// if the game's camera moves, anything in this group will stay in place
			this.uiLayer = this.add.dGroup(0, 0, '_ui_layer');   
			this.uiLayer.fixedToCamera = true;
			
			// add a group to the Phaser.Stage (just in case)
			this.stageLayer = this.add.dGroup(0, 0, '_stage_layer', true);
		}
		
		// public methods
		public disableElementInput(el:any):any{
			if (el.input && el.input.enabled === true) {
				el.wasEnabled = true;
				el.input.enabled = false;
			}
			if (el.children.length > 0) {
				for (var i = 0; i < el.children.length; i++) {
					this.disableElementInput(el.children[i]);
				}
			}
		};
	
		public enableElementInput(el:any):any{
			if (el.input && el.input.enabled === false && el.wasEnabled) {
				el.wasEnabled = false;
				el.input.enabled = true;
			}
			if (el.children.length > 0) {
				for (var i = 0; i < el.children.length; i++) {
					this.enableElementInput(el.children[i]);
				}
			}
		};
	
		public disableInput(group:Phaser.Group):any{
			return group.forEach(function(el) {
				if (el instanceof Phaser.Group) {
					return this.disableInput(el);
				} else {
					return this.disableElementInput(el);
				}
			}, this);
		};
	
		public enableInput(group:Phaser.Group):any{
			return group.forEach(function(el) {
				if (el instanceof Phaser.Group) {
					return this.enableInput(el);
				} else {
					return this.enableElementInput(el);
				}
			}, this);
		};
		
		public disableGameInput() {
			this.disableInput(this.gameLayer);
			this.onWorldInputDisabled.dispatch();
		};
	
		public enableGameInput() {
			this.enableInput(this.gameLayer);
			this.onWorldInputEnabled.dispatch();
		};
		
		/**
		 * removes all items from the game layer
		 * but allows the ui layer to persist
		 * that way we can overlay the game without adding stuff to the phaser stage (for transitions)
		 * @param {String} toState the new state we're changing to
		 * @return {void}
		 */
		public changeState(toState:string):void{
			this.gameLayer.removeAll(true, true);
			return this.state.start(toState, false, false);
		}
				
		// getter / setter
		/**
		 * sets the default group for the gameObjectFactory to gameLayer before adding 
		 * this way if we pass a null group to whatever method we call 
		 * ie (this.game.addToGame.image(0, 0, key, frame));
		 * it will be added to the appropriate layer
		 */
		public get addToGame():core.GameObjectFactory{
			this.add.defaultGroup = this.gameLayer;
			return this.add;
		}
		
		/**
		 * sets the default group for the gameObjectFactory to uiLayer before adding 
		 * this way if we pass a null group to whatever method we call 
		 * ie (this.game.addToUI.image(0, 0, key, frame));
		 * it will be added to the appropriate layer
		 */
		public get addToUI():core.GameObjectFactory{
			// set the default group for the gameObjectFactory before adding
			this.add.defaultGroup = this.uiLayer;
			return this.add;
		}
		
		public get addToStage():core.GameObjectFactory{
			// set the default group for the gameObjectFactory before adding
			this.add.defaultGroup = this.stageLayer;
			return this.add;
		}
	}
}

/**
 * Centers the pivot point
 */
PIXI.DisplayObject.prototype['centerPivot'] = function() {
	this.pivot.set(this.width >> 1, this.height >> 1);
};

/**
 * Sets the location of the pivot point
 * @param {String} pivotLocation one of 'center', 'r', 'l', 't', 'b', 'tl', 'tr', 'bl', 'br'
 */
PIXI.DisplayObject.prototype.setPivot = function(pivotLocation) {
    switch (pivotLocation.toLowerCase()) {
        case PIXI.DisplayObject.PIVOT_CENTER:
            this.centerPivot();
            break;
        case PIXI.DisplayObject.PIVOT_RIGHT:
            this.pivot.set(this.width, this.height >> 1);
            break;
        case PIXI.DisplayObject.PIVOT_LEFT:
            this.pivot.set(0, this.height >> 1);
            break;
        case PIXI.DisplayObject.PIVOT_TOP:
            this.pivot.set(this.width >> 1, 0);
            break;
        case PIXI.DisplayObject.PIVOT_BOTTOM:
            this.pivot.set(this.width >> 1, this.height);
            break;
        case PIXI.DisplayObject.PIVOT_TOP_LEFT:
            this.pivot.set(0, 0);
            break;
        case PIXI.DisplayObject.PIVOT_TOP_RIGHT:
            this.pivot.set(this.width, 0);
            break;
        case PIXI.DisplayObject.PIVOT_BOTTOM_LEFT:
            this.pivot.set(0, this.height);
            break;
        case PIXI.DisplayObject.PIVOT_BOTTOM_RIGHT:
            this.pivot.set(this.width, this.height);
            break;
    }
};

PIXI.DisplayObject.PIVOT_CENTER = 'center';
PIXI.DisplayObject.PIVOT_RIGHT = 'r';
PIXI.DisplayObject.PIVOT_LEFT = 'l';
PIXI.DisplayObject.PIVOT_BOTTOM = 'b';
PIXI.DisplayObject.PIVOT_TOP = 't';
PIXI.DisplayObject.PIVOT_TOP_LEFT = 'tl';
PIXI.DisplayObject.PIVOT_TOP_RIGHT = 'tr';
PIXI.DisplayObject.PIVOT_BOTTOM_LEFT = 'bl';
PIXI.DisplayObject.PIVOT_BOTTOM_RIGHT = 'br';


/**
 * addOverSound adds a hover sound to any displayObject
 * @param {String} marker the sound marker to play
 * @param {Number} volume the volume of the sound
 */
PIXI.DisplayObject.prototype['addOverSound'] = function(marker, volume) {
    if (!this.inputEnabled)
        this.inputEnabled = true;

    this.overSoundMarker = marker;
    this.overSoundVolume = volume;

    this.events.onInputOver.add(this.playOverSound, this);
};

/**
 * addOutSound adds a over sound to any displayObject
 * @param {String} marker the sound marker to play
 * @param {Number} volume the volume of the sound
 */
PIXI.DisplayObject.prototype['addOutSound'] = function(marker, volume) {
    if (!this.inputEnabled)
        this.inputEnabled = true;

    this.outSoundMarker = marker;
    this.outSoundVolume = volume;

    this.events.onInputOut.add(this.playOutSound, this);
};

/**
 * addDownSound adds a down sound to any displayObject
 * @param {String} marker the sound marker to play
 * @param {Number} volume the volume of the sound
 */
PIXI.DisplayObject.prototype['addDownSound'] = function(marker, volume) {
    if (!this.inputEnabled)
        this.inputEnabled = true;

    this.downSoundMarker = marker;
    this.downSoundVolume = volume;

    this.events.onInputDown.add(this.playDownSound, this);
};

/**
 * playOverSound plays the over sound
 * @return {void}
 */
PIXI.DisplayObject.prototype['playOverSound'] = function() {
    if (this.overSound && this.overSound.isPlaying) {
        this.overSound.stop();
    }
    if (this.outSound && this.outSound.isPlaying) {
        this.outSound.stop();
    }
	if (typeof this.overSoundMarker === 'undefined'){
		console.log('no over sound defined')
		return null;
	}
    this.overSound = this.game.audio.playAudio(this.overSoundMarker, this.overSoundVolume);
	return this.overSound;
};

/**
 * playOutSound plays the out sound
 * @return {void}
 */
PIXI.DisplayObject.prototype['playOutSound'] = function() {
    this.stopSounds();
	if (typeof this.outSoundMarker === 'undefined'){
		console.log('no out sound defined')
		return null;
	}
    this.outSound = this.game.audio.playAudio(this.outSoundMarker, this.outSoundVolume);
	return this.outSound;
};

/**
 * playDownSound plays the down sound
 * @return {void}
 */
PIXI.DisplayObject.prototype['playDownSound'] = function() {
    this.stopSounds();
	if (typeof this.downSoundMarker === 'undefined'){
		console.log('no down sound defined')
		return null;
	}
    this.downSound = this.game.audio.playAudio(this.downSoundMarker, this.downSoundVolume);
	return this.downSound;
};

/**
 * stopSounds stops the over, out and down sounds
 * @return {void}
 */
PIXI.DisplayObject.prototype['stopSounds'] = function() {
    if (this.overSound && this.overSound.isPlaying) {
        this.overSound.stop();
    }
    if (this.outSound && this.outSound.isPlaying) {
        this.outSound.stop();
    }
    if (this.downSound && this.downSound.isPlaying) {
        this.downSound.stop();
    }
};

Object.defineProperty(PIXI.DisplayObject.prototype, "scales", {
    get: function() {
        return this.scale.x;
    },

    set: function(value) {
        this.scale.set(value, value);
    }
});
