declare module dijon{
	module mvc{
		interface IApplication {
			game:core.Game;	
			initializeApplication():void;
		}
		
		class Application implements IApplication{
			constructor(gameConfig:Phaser.IGameConfig);
			game:core.Game;	
			initializeApplication():void;
			static getInstance():IApplication;
			static instance:IApplication;
			static SINGLETON_MSG:string;
		}
	}
	
	module core{
		class Game extends Phaser.Game{
			// manager classes
			asset: AssetManager;
			sequence: SequenceManager;
			/*
			save:SaveManager;
			transition:TransitionManager;
			audio:AudioManager;
			*/
			
			// game and ui layers
			gameLayer:Phaser.Group;
			uiLayer:Phaser.Group;
			
			addToUI():Phaser.Image | Phaser.Sprite | Phaser.BitmapData | Phaser.SpriteBatch | Phaser.Text | Phaser.Button;
			addToGame():Phaser.Image | Phaser.Sprite | Phaser.BitmapData | Phaser.SpriteBatch | Phaser.Text | Phaser.Button;
		}
		
		interface IPathConfig{
			assetPath?: string;
			dataPath?: string;
			spritesheetPath?: string;
			imgPath?: string;
			fontPath?: string;
			audioSpritePath?: string;
			soundPath?: string;
		}
		
		interface IAsset{
			url:string;
			type:string;
			extensions?:string;
			id?:string;
		}
		
		class AssetManager{
			constructor(game:Phaser.Game, test:string);
			/**
			* sets the base url that AssetManager will load files from
			* @param {String} baseURL
			* @return {void}
			*/
			setBaseURL(baseURL:string);
			
			/**
			* sets the paths where the AssetManager will look for different files
			* @param {Object} pathObj an object containing locations for different file types (should have the following properties: assetPath, dataPath, spritesheetPath, imgPath, fontPath, audioSpritePath, soundPath)
			* @return {void}
			*/
			setPaths(pathObj:IPathConfig);
			
			setResolution(res:number);
			/**
			* sets the percentage of the load we should allot to each sound
			* @param {Number} [num = 2] the percentage
			*/
			setSoundDecodingModifier(num:number);
			
			/**
			* gets the percentage of the load we should allot to each sound
			*/
			getSoundDecodingModifier():number;
			
			/**
			* loads any text file
			* @param  {String} url of the file to load (prepends the dataPath)
			* @return {Phaser.Loader.text}     adds the file to the load queue
			*/
			loadText(url:string);
			
			/**
			* loads a texture atlas
			* @param  {String} url url of the texture atlas (prepends the spritesheetPath)
			* @return {Phaser.Loader.atlasJSONHash}     adds the atlas and it's json descriptor file to the load queue
			*/
			loadAtlas(url:string);
			
			/**
			* loads any image file
			* @param {String} url the full image url, with extension (prepends the imgPath)
			* @param {Boolean} isStandalone whether to use the in game loader or a standalone loader instance
			* @return {Phaser.Loader.image} adds the image file to the load queue
			*/
			loadImage(url:string, isStandalone:boolean);
			
			/**
			* loads a bitmap font
			* @param  {String} url the url of the bitmap font (prepends the fontPath)
			* @return {Phaser.Loader.bitmapFont}     adds the bitmap font and its xml descriptor to the load queue
			*/
			loadBitmapFont(url:string);
			
			/**
			* loads any audio file (adds the 'm4a' file extension if we're on an iOS device as it decodes way faster)
			* @param  {String}  url the url of the audio file (prepends either the audioSpritePath or the soundPath depending on the type of file)
			* @param  {String}  exts comma separated string of file extensions (usually "ogg,mp3")
			* @param  {Boolean} isAudioSprite whether the asset is an audio sprite
			* @return {Phaser.Loader.audiosprite|Phaser.Loader.audio}                adds the audioSprite or audio file to the file queue
			*/
			loadAudio(url:string, exts:string[], isAudioSprite:boolean);
			
			/**
			* loads a sound file
			* @param  {String} url  the url to the sound file (prepends soundPath)
			* @param  {String} exts comma separated list of extensions (usually "ogg,mp3")
			* @return {AssetManager.loadAudio}
			*/
			loadSound(url:string, exts:string[]):void;
			
			/**
			* loads a sound file
			* @param  {String} url  the url to the audioSprite file (prepends audioSpritePath)
			* @param  {String} exts comma separated list of extensions (usually "ogg,mp3")
			* @return {AssetManager.loadAudio}
			*/
			loadAudioSprite(url:string, exts:string[]):void;
			
			/**
			* loads an entire list of assets
			* @param  {String} id         the id of the asset list to load
			* @param  {Boolean} background whether this is a background load
			* @return {Phaser.Loader.start}            starts the load
			*/
			loadAssets(id:string, background:boolean):Phaser.Loader;
			
			/**
			* gets the (adjusted) load progress (also takes into accound the number of sounds to decode)
			* @param  {Number} progress the game progress
			* @return {Number} the adjusted progress
			*/
			getLoadProgress(progress:number):number;
			
			/**
			* checks whether all the sounds in the queue are decoded
			* @return {Boolean}
			*/
			allSoundsDecoded():boolean;
			
			/**
			* sets the data for the AssetManager to use as a reference (usually from data/assets.json)
			* triggers the _parseData internal method, which stores the asset list for later use
			* @param {String} textFileFromCache the id of the file in the Phaser.Cache
			*/
			setData(textFileFromCache:string):void;
			
			/**
			* clears the assets from a particular id in the storage
			* @param  {String} id the id of the asset list to clear
			* @param  {Boolean} [clearAudio = true]    whether to clear audio files
			* @param  {Boolean} [clearAtlasses = true] whether to clear texture atlasses
			* @param  {Boolean} [clearImages = true]   whether to clear images
			* @param  {Boolean} [clearText = true]     whether to clear text files
			* @return {void}
			*/
			clearAssets(id:string, clearAudio?:boolean, clearAtlasses?:boolean, clearImages?:boolean, clearText?:boolean):void;
			
			/**
			* clears an asset from the game's memory
			* @param  {Object} asset         the asset to clear
			* @param  {Boolean} [clearAudio = true]    whether to clear audio files
			* @param  {Boolean} [clearAtlasses = true] whether to clear texture atlasses
			* @param  {Boolean} [clearImages = true]   whether to clear images
			* @param  {Boolean} [clearText = true]     whether to clear text files
			* @return {void}
			*/
			clearAsset(asset:IAsset, clearAudio?: boolean, clearAtlasses?:boolean, clearImages?:boolean, clearText?:boolean):void;
			
			/**
			* checks if the assets from this list id are already loaded
			* @param  {String} id the asset list id to check
			* @return {Boolean} whether it has been loaded already
			*/
			hasLoadedAssets(id:string):boolean;
			
			static SOUND:string;
			static AUDIO_SPRITE:string;
			static ATLAS:string;
			static TEXT:string;
			static ASSET_LIST:string;
			static RESOLUTION_2X:string;
			static RESOLUTION_3X:string;
		}
		
		class SequenceManager{
			constructor();
			
			/**
			* sets the default interval
			* @return {void}
			* @private
			*/
			_init():void;
			
			/**
			* executes the current method in the sequence
			* @param  {Array}    sequence        the sequence the current method belongs to
			* @param  {Object} context         the context to call the current method
			* @param  {Function} callback        the callback to call if this is the last method in the sequence
			* @param  {Object} callbackContext the context to call the callback
			* @return {void}
			* @private
			*/
			_executeMethod(sequence:Function[], context:Object, callback:Function, callbackContext:Object):void;
			
			/**
			* runs a sequence
			* @param  {Array} sequence                 an array of methods to be run in sequence
			* @param  {Object} context                 the scope to execute all of the methods in the sequence
			* @param  {int} interval                   the number of milliseconds between each step in the sequence
			* @param  {Function} completeCallback      the method to call once the sequence is complete
			* @param  {Object} completeCallbackContext the scope for the completeCallback
			* @return {void}
			*/
			run(sequence:Function[], context:Object, interval:number, completeCallback:Function, completeCallbackContext:Object):void;
		}
	}
	
	module state{
		class BaseState extends Phaser.State{
			game:core.Game;
			
			/**
			* lists the build sequence for this state
			* @return {Array} a list of internal methods to call (usually these methods should just add visual elements to the game world)
			*/
			listBuildSequence():Function[];
			
			/**
			* called when all assets are loaded and sounds are decoded
			*/
			buildInterface():void;
			
			/**
			* called after the buildInterface method is called
			*/
			afterBuildInterface():void;
			
			/**
			* called after the afterBuildInterface method
			* runs the methods returned from [getBuildSequence method]{@link dijon.state.BaseState#getBuildSequence}
			* uses the {@link dijon.core.SequenceManager} to run these methods
			*/
			startBuild():void;
			
			/**
			* called directly after the build sequence has completed
			* then calls the [afterBuild method]{@link dijon.state.BaseState#afterBuild}
			*/
			preAfterBuild():void;
			
			/**
			* called in the [preAfterBuild method]{@link dijon.state.BaseState#preAfterBuild}, after the build sequence has completed
			* useful for overriding
			*/
			afterBuild():void;
			
			/**
			* use this to add playing sounds to an internal list
			* all sounds added will be automatically stopped in the shutdown method
			* @param {Phaser.Sound} track the sound to add to the internal list
			* @return {Phaser.Sound} the added track
			*/
			addAudio(track:Phaser.Sound):Phaser.Sound;
			
			/**
			* removes all the audio files added using the {@link #addAudio} method
			* called in the [shutdown method]{@link dijon.state.BaseState#shutdown}
			* @private
			*/
			removeAudio():void;
			
			/**
			* gets / sets the preload id for this state (optional)
			* @return {String}
			*/
			preloadID:string;
			
			/**
			* gets / sets the interval at which to step through the build sequence (in ms)
			* @return {Number}
			*/
			buildInterval:number;
		}
	}
}