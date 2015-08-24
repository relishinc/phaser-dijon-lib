/// <reference path="../../../../bower_components/phaser-official/typescript/phaser.d.ts"/>
declare module dijon{
	module core{
		class Game extends Phaser.Game{
			asset: AssetManager;
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
	}
	
	module state{
		class BaseState extends Phaser.State{
			game:core.Game;
		}
	}
}