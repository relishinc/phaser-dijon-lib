<a name="module_Dijon"></a>
## Dijon

* [Dijon](#module_Dijon)
  * [~Dijon](#module_Dijon..Dijon)
    * [.BaseComponent](#module_Dijon..Dijon.BaseComponent)
      * [new Dijon.BaseComponent()](#new_module_Dijon..Dijon.BaseComponent_new)
      * [.setOwner(owner)](#module_Dijon..Dijon.BaseComponent+setOwner) ⇒ <code>void</code>
      * [.init()](#module_Dijon..Dijon.BaseComponent+init) ⇒ <code>void</code>
      * [.buildInterface()](#module_Dijon..Dijon.BaseComponent+buildInterface) ⇒ <code>void</code>
      * [.update()](#module_Dijon..Dijon.BaseComponent+update) ⇒ <code>void</code>
      * [.destroy()](#module_Dijon..Dijon.BaseComponent+destroy) ⇒ <code>void</code>
    * [.AssetManager](#module_Dijon..Dijon.AssetManager)
      * [new Dijon.AssetManager(game)](#new_module_Dijon..Dijon.AssetManager_new)
      * _instance_
        * [._gameLoadStart()](#module_Dijon..Dijon.AssetManager+_gameLoadStart) ⇒ <code>void</code>
        * [._gameFileStart()](#module_Dijon..Dijon.AssetManager+_gameFileStart) ⇒ <code>void</code>
        * [.setPaths(pathObj)](#module_Dijon..Dijon.AssetManager+setPaths) ⇒ <code>void</code>
        * [.setSoundDecodingModifier([num])](#module_Dijon..Dijon.AssetManager+setSoundDecodingModifier)
        * [.getSoundDecodingModifier()](#module_Dijon..Dijon.AssetManager+getSoundDecodingModifier)
        * [.loadText(url)](#module_Dijon..Dijon.AssetManager+loadText) ⇒ <code>Phaser.Loader.text</code>
        * [.loadAtlas(url)](#module_Dijon..Dijon.AssetManager+loadAtlas) ⇒ <code>Phaser.Loader.atlasJSONHash</code>
        * [.loadImage(url)](#module_Dijon..Dijon.AssetManager+loadImage) ⇒ <code>Phaser.Loader.image</code>
        * [.loadBitmapFont(url)](#module_Dijon..Dijon.AssetManager+loadBitmapFont) ⇒ <code>Phaser.Loader.bitmapFont</code>
        * [.loadAudio(url, exts, isAudioSprite)](#module_Dijon..Dijon.AssetManager+loadAudio) ⇒ <code>Phaser.Loader.audiosprite</code> &#124; <code>Phaser.Loader.audio</code>
        * [.loadSound(url, exts)](#module_Dijon..Dijon.AssetManager+loadSound) ⇒ <code>Dijon.AssetManager.loadAudio</code>
        * [.loadAudioSprite(url, exts)](#module_Dijon..Dijon.AssetManager+loadAudioSprite) ⇒ <code>Dijon.AssetManager.loadAudio</code>
        * [.loadAssets(id, background)](#module_Dijon..Dijon.AssetManager+loadAssets) ⇒ <code>Phaser.Loader.start</code>
        * [.getLoadProgress(progress)](#module_Dijon..Dijon.AssetManager+getLoadProgress) ⇒ <code>Number</code>
        * [.allSoundsDecoded()](#module_Dijon..Dijon.AssetManager+allSoundsDecoded) ⇒ <code>Boolean</code>
        * [.setData(textFileFromCache)](#module_Dijon..Dijon.AssetManager+setData)
        * [.clearAssets(id, [clearAudio], [clearAtlasses], [clearImages], [clearText])](#module_Dijon..Dijon.AssetManager+clearAssets) ⇒ <code>void</code>
        * [.clearAsset(asset, [clearAudio], [clearAtlasses], [clearImages], [clearText])](#module_Dijon..Dijon.AssetManager+clearAsset) ⇒ <code>void</code>
        * [.hasLoadedAssets(id)](#module_Dijon..Dijon.AssetManager+hasLoadedAssets) ⇒ <code>Boolean</code>
      * _static_
        * [.SOUND](#module_Dijon..Dijon.AssetManager.SOUND) : <code>String</code>
        * [.AUDIO_SPRITE](#module_Dijon..Dijon.AssetManager.AUDIO_SPRITE) : <code>String</code>
        * [.IMAGE](#module_Dijon..Dijon.AssetManager.IMAGE) : <code>String</code>
        * [.ATLAS](#module_Dijon..Dijon.AssetManager.ATLAS) : <code>String</code>
        * [.TEXT](#module_Dijon..Dijon.AssetManager.TEXT) : <code>String</code>
        * [.ASSET_LIST](#module_Dijon..Dijon.AssetManager.ASSET_LIST) : <code>String</code>
    * [.AudioManager](#module_Dijon..Dijon.AudioManager)
      * [new Dijon.AudioManager(game)](#new_module_Dijon..Dijon.AudioManager_new)
      * [.setDefaultVolume(vol)](#module_Dijon..Dijon.AudioManager+setDefaultVolume)
      * [.addAudio(key, isAudioSprite)](#module_Dijon..Dijon.AudioManager+addAudio)
      * [.addSound(key)](#module_Dijon..Dijon.AudioManager+addSound) ⇒ <code>Phaser.Sound</code>
      * [.addAudioSprite(key)](#module_Dijon..Dijon.AudioManager+addAudioSprite) ⇒ <code>Phaser.AudioSprite</code>
      * [.playAudio(marker, volume, loop, forceRestart)](#module_Dijon..Dijon.AudioManager+playAudio) ⇒ <code>Phaser.Sound</code>
      * [.playDelayedAudio(delay, marker, volume, loop, forceRestart)](#module_Dijon..Dijon.AudioManager+playDelayedAudio)
      * [.playSound(key, volume, loop, forceRestart)](#module_Dijon..Dijon.AudioManager+playSound) ⇒ <code>Phaser.Sound</code>
      * [.playSpriteMarker(marker, volume, loop, forceRestart)](#module_Dijon..Dijon.AudioManager+playSpriteMarker) ⇒ <code>Phaser.Sound</code>
      * [.stopAudio()](#module_Dijon..Dijon.AudioManager+stopAudio) ⇒ <code>Phaser.Sound</code>
      * [.stopSound()](#module_Dijon..Dijon.AudioManager+stopSound) ⇒ <code>Phaser.Sound</code>
      * [.stopSpriteMarker()](#module_Dijon..Dijon.AudioManager+stopSpriteMarker) ⇒ <code>Phaser.Sound</code>
      * [.removeSound(key)](#module_Dijon..Dijon.AudioManager+removeSound) ⇒ <code>void</code>
      * [.removeSprite(key)](#module_Dijon..Dijon.AudioManager+removeSprite) ⇒ <code>void</code>
    * [.SaveManager](#module_Dijon..Dijon.SaveManager)
      * [new Dijon.SaveManager(game)](#new_module_Dijon..Dijon.SaveManager_new)
      * [.getData(key, isJSON)](#module_Dijon..Dijon.SaveManager+getData) ⇒ <code>String</code> &#124; <code>Object</code>
      * [.saveData(key, value)](#module_Dijon..Dijon.SaveManager+saveData) ⇒ <code>void</code>
      * [.clearData(key)](#module_Dijon..Dijon.SaveManager+clearData) ⇒ <code>void</code>
    * [.SequenceManager](#module_Dijon..Dijon.SequenceManager)
      * [new Dijon.SequenceManager(game)](#new_module_Dijon..Dijon.SequenceManager_new)
      * [.run(sequence, context, interval, completeCallback, completeCallbackContext)](#module_Dijon..Dijon.SequenceManager+run) ⇒ <code>void</code>
    * [.TransitionManager](#module_Dijon..Dijon.TransitionManager)
      * [new Dijon.TransitionManager(game)](#new_module_Dijon..Dijon.TransitionManager_new)
      * [.add(fromState, toState, outHandler, preloadHandler, inHandler)](#module_Dijon..Dijon.TransitionManager+add) ⇒ <code>Object</code>
      * [.addException(state)](#module_Dijon..Dijon.TransitionManager+addException)
      * [.remove()](#module_Dijon..Dijon.TransitionManager+remove)
      * [.to(state)](#module_Dijon..Dijon.TransitionManager+to)
      * [.transitionOut()](#module_Dijon..Dijon.TransitionManager+transitionOut)
    * [.UIGroup](#module_Dijon..Dijon.UIGroup)
      * [new Dijon.UIGroup(game, [parent], [name], [addToStage], [components])](#new_module_Dijon..Dijon.UIGroup_new)
      * [._hasComponents](#module_Dijon..Dijon.UIGroup+_hasComponents) : <code>Boolean</code>
      * [._componentKeys](#module_Dijon..Dijon.UIGroup+_componentKeys) : <code>Array</code>
      * [._components](#module_Dijon..Dijon.UIGroup+_components) : <code>Object</code>
    * [.UISprite](#module_Dijon..Dijon.UISprite)
      * [new Dijon.UISprite(game, x, y, key, frame, name, [components])](#new_module_Dijon..Dijon.UISprite_new)
      * [.__frameName](#module_Dijon..Dijon.UISprite+__frameName) : <code>String</code>
      * [._hasComponents](#module_Dijon..Dijon.UISprite+_hasComponents) : <code>Boolean</code>
      * [._componentKeys](#module_Dijon..Dijon.UISprite+_componentKeys) : <code>Array</code>
      * [._components](#module_Dijon..Dijon.UISprite+_components) : <code>Object</code>
    * [.UIText](#module_Dijon..Dijon.UIText)
      * [new Dijon.UIText(game, x, y, text, fontName, fontSize, fontColor, [fontAlign], [wordWrap], [width], [settings])](#new_module_Dijon..Dijon.UIText_new)
      * [.DEFAULT_FONT](#module_Dijon..Dijon.UIText.DEFAULT_FONT) : <code>String</code>
      * [.DEFAULT_SIZE](#module_Dijon..Dijon.UIText.DEFAULT_SIZE) : <code>Number</code>
    * [.InvisibleButton](#module_Dijon..Dijon.InvisibleButton)
      * [new Dijon.InvisibleButton(game, x, y, w, h, name)](#new_module_Dijon..Dijon.InvisibleButton_new)
    * [.BaseMediator](#module_Dijon..Dijon.BaseMediator)
      * [new Dijon.BaseMediator(game, mediatorName, viewComponent, [modelClass], [autoReg])](#new_module_Dijon..Dijon.BaseMediator_new)
    * [.CopyModel](#module_Dijon..Dijon.CopyModel)
      * [new Dijon.CopyModel(game, [dataKey])](#new_module_Dijon..Dijon.CopyModel_new)
    * [.Model](#module_Dijon..Dijon.Model)
      * [new Dijon.Model(game, [dataKey])](#new_module_Dijon..Dijon.Model_new)
    * [.BaseState](#module_Dijon..Dijon.BaseState)
      * [new Dijon.BaseState()](#new_module_Dijon..Dijon.BaseState_new)
      * [.init()](#module_Dijon..Dijon.BaseState+init)
      * [.preload()](#module_Dijon..Dijon.BaseState+preload)
      * [.create()](#module_Dijon..Dijon.BaseState+create)
      * [.shutdown()](#module_Dijon..Dijon.BaseState+shutdown)
      * [.getPreloadID()](#module_Dijon..Dijon.BaseState+getPreloadID) ⇒ <code>String</code> &#124; <code>null</code>
      * [.getBuildInterval()](#module_Dijon..Dijon.BaseState+getBuildInterval) ⇒ <code>Number</code>
      * [.getBuildSequence()](#module_Dijon..Dijon.BaseState+getBuildSequence) ⇒ <code>Array</code>
      * [.buildInterface()](#module_Dijon..Dijon.BaseState+buildInterface)
      * [.afterBuildInterface()](#module_Dijon..Dijon.BaseState+afterBuildInterface)
      * [.startBuild()](#module_Dijon..Dijon.BaseState+startBuild)
      * [.preAfterBuild()](#module_Dijon..Dijon.BaseState+preAfterBuild)
      * [.afterBuild()](#module_Dijon..Dijon.BaseState+afterBuild)
      * [.addAudio(track)](#module_Dijon..Dijon.BaseState+addAudio) ⇒ <code>Phaser.Sound</code>
    * [.UIText.DEFAULT_COLOR](#module_Dijon..Dijon.UIText.DEFAULT_COLOR) : <code>String</code>
    * [.boot(game)](#module_Dijon..Dijon.boot) ⇒ <code>void</code>
    * [.addUtilityMethods(game)](#module_Dijon..Dijon.addUtilityMethods)
    * [.UIGroup#update()](#module_Dijon..Dijon.UIGroup+update) ⇒ <code>void</code>
    * [.UIGroup#destroy()](#module_Dijon..Dijon.UIGroup+destroy) ⇒ <code>Phaser.Group.destroy</code>
    * [.UIGroup#_updateComponentKeys()](#module_Dijon..Dijon.UIGroup+_updateComponentKeys) ⇒ <code>void</code>
    * [.UIGroup#addComponents(components)](#module_Dijon..Dijon.UIGroup+addComponents)
    * [.UIGroup#addComponent(component)](#module_Dijon..Dijon.UIGroup+addComponent)
    * [.UIGroup#removeAllComponents()](#module_Dijon..Dijon.UIGroup+removeAllComponents) ⇒ <code>void</code>
    * [.UIGroup#removeComponent(componentName)](#module_Dijon..Dijon.UIGroup+removeComponent) ⇒ <code>void</code>
    * [.UIGroup#updateComponent(componentName)](#module_Dijon..Dijon.UIGroup+updateComponent) ⇒ <code>void</code>
    * [.UISprite#update()](#module_Dijon..Dijon.UISprite+update) ⇒ <code>void</code>
    * [.UISprite#destroy()](#module_Dijon..Dijon.UISprite+destroy) ⇒ <code>Phaser.Sprite.destroy</code>
    * [.UISprite#_updateComponentKeys()](#module_Dijon..Dijon.UISprite+_updateComponentKeys) ⇒ <code>void</code>
    * [.UISprite#init()](#module_Dijon..Dijon.UISprite+init) ⇒ <code>void</code>
    * [.UISprite#buildInterface()](#module_Dijon..Dijon.UISprite+buildInterface) ⇒ <code>void</code>
    * [.UISprite#addComponents(components)](#module_Dijon..Dijon.UISprite+addComponents)
    * [.UISprite#addComponent(component)](#module_Dijon..Dijon.UISprite+addComponent)
    * [.UISprite#removeAllComponents()](#module_Dijon..Dijon.UISprite+removeAllComponents) ⇒ <code>void</code>
    * [.UISprite#removeComponent(componentName)](#module_Dijon..Dijon.UISprite+removeComponent) ⇒ <code>void</code>
    * [.UISprite#updateComponent(componentName)](#module_Dijon..Dijon.UISprite+updateComponent) ⇒ <code>void</code>
    * [.UIText#setColor(color)](#module_Dijon..Dijon.UIText+setColor) ⇒ <code>Dijon.UIText.highlightPhrase</code>
    * [.UIText#resetColor()](#module_Dijon..Dijon.UIText+resetColor) ⇒ <code>Dijon.UIText.highlightPhrase</code>
    * [.UIText#highlightPhrase(phrase, color, [caseSensitive])](#module_Dijon..Dijon.UIText+highlightPhrase) ⇒ <code>void</code>
    * [.UIText#animate([letterTime], [delay])](#module_Dijon..Dijon.UIText+animate)
    * [.UIText#stopAnimating()](#module_Dijon..Dijon.UIText+stopAnimating) ⇒ <code>void</code>
    * [.InvisibleButton#init()](#module_Dijon..Dijon.InvisibleButton+init) ⇒ <code>void</code>
    * [.InvisibleButton#buildInterface()](#module_Dijon..Dijon.InvisibleButton+buildInterface) ⇒ <code>void</code>
    * [.InvisibleButton#setSize(w, h)](#module_Dijon..Dijon.InvisibleButton+setSize)
    * [.BaseMediator#_createModel(ModelClass)](#module_Dijon..Dijon.BaseMediator+_createModel)
    * [.BaseMediator#_addSignal(signalName)](#module_Dijon..Dijon.BaseMediator+_addSignal)
    * [.BaseMediator#createSignals()](#module_Dijon..Dijon.BaseMediator+createSignals)
    * [.BaseMediator#setViewComponent(viewComponent)](#module_Dijon..Dijon.BaseMediator+setViewComponent)
    * [.BaseMediator#setModel(model)](#module_Dijon..Dijon.BaseMediator+setModel)
    * [.BaseMediator#getCopy(group, id)](#module_Dijon..Dijon.BaseMediator+getCopy) ⇒ <code>String</code>
    * [.BaseMediator#release()](#module_Dijon..Dijon.BaseMediator+release)
    * [.CopyModel#getCopy(groupId, itemId)](#module_Dijon..Dijon.CopyModel+getCopy) ⇒ <code>String</code>
    * [.CopyModel#getCopyGroup(groupId)](#module_Dijon..Dijon.CopyModel+getCopyGroup) ⇒ <code>Object</code>
    * [.Model#setData(dataKey)](#module_Dijon..Dijon.Model+setData)
    * [.Model#getData()](#module_Dijon..Dijon.Model+getData) ⇒ <code>Object</code>
    * [.Model#parseData(data)](#module_Dijon..Dijon.Model+parseData) ⇒ <code>Object</code>

<a name="module_Dijon..Dijon"></a>
### Dijon~Dijon
Initialize the library and attach to the global scope

**Kind**: inner property of <code>[Dijon](#module_Dijon)</code>  

* [~Dijon](#module_Dijon..Dijon)
  * [.BaseComponent](#module_Dijon..Dijon.BaseComponent)
    * [new Dijon.BaseComponent()](#new_module_Dijon..Dijon.BaseComponent_new)
    * [.setOwner(owner)](#module_Dijon..Dijon.BaseComponent+setOwner) ⇒ <code>void</code>
    * [.init()](#module_Dijon..Dijon.BaseComponent+init) ⇒ <code>void</code>
    * [.buildInterface()](#module_Dijon..Dijon.BaseComponent+buildInterface) ⇒ <code>void</code>
    * [.update()](#module_Dijon..Dijon.BaseComponent+update) ⇒ <code>void</code>
    * [.destroy()](#module_Dijon..Dijon.BaseComponent+destroy) ⇒ <code>void</code>
  * [.AssetManager](#module_Dijon..Dijon.AssetManager)
    * [new Dijon.AssetManager(game)](#new_module_Dijon..Dijon.AssetManager_new)
    * _instance_
      * [._gameLoadStart()](#module_Dijon..Dijon.AssetManager+_gameLoadStart) ⇒ <code>void</code>
      * [._gameFileStart()](#module_Dijon..Dijon.AssetManager+_gameFileStart) ⇒ <code>void</code>
      * [.setPaths(pathObj)](#module_Dijon..Dijon.AssetManager+setPaths) ⇒ <code>void</code>
      * [.setSoundDecodingModifier([num])](#module_Dijon..Dijon.AssetManager+setSoundDecodingModifier)
      * [.getSoundDecodingModifier()](#module_Dijon..Dijon.AssetManager+getSoundDecodingModifier)
      * [.loadText(url)](#module_Dijon..Dijon.AssetManager+loadText) ⇒ <code>Phaser.Loader.text</code>
      * [.loadAtlas(url)](#module_Dijon..Dijon.AssetManager+loadAtlas) ⇒ <code>Phaser.Loader.atlasJSONHash</code>
      * [.loadImage(url)](#module_Dijon..Dijon.AssetManager+loadImage) ⇒ <code>Phaser.Loader.image</code>
      * [.loadBitmapFont(url)](#module_Dijon..Dijon.AssetManager+loadBitmapFont) ⇒ <code>Phaser.Loader.bitmapFont</code>
      * [.loadAudio(url, exts, isAudioSprite)](#module_Dijon..Dijon.AssetManager+loadAudio) ⇒ <code>Phaser.Loader.audiosprite</code> &#124; <code>Phaser.Loader.audio</code>
      * [.loadSound(url, exts)](#module_Dijon..Dijon.AssetManager+loadSound) ⇒ <code>Dijon.AssetManager.loadAudio</code>
      * [.loadAudioSprite(url, exts)](#module_Dijon..Dijon.AssetManager+loadAudioSprite) ⇒ <code>Dijon.AssetManager.loadAudio</code>
      * [.loadAssets(id, background)](#module_Dijon..Dijon.AssetManager+loadAssets) ⇒ <code>Phaser.Loader.start</code>
      * [.getLoadProgress(progress)](#module_Dijon..Dijon.AssetManager+getLoadProgress) ⇒ <code>Number</code>
      * [.allSoundsDecoded()](#module_Dijon..Dijon.AssetManager+allSoundsDecoded) ⇒ <code>Boolean</code>
      * [.setData(textFileFromCache)](#module_Dijon..Dijon.AssetManager+setData)
      * [.clearAssets(id, [clearAudio], [clearAtlasses], [clearImages], [clearText])](#module_Dijon..Dijon.AssetManager+clearAssets) ⇒ <code>void</code>
      * [.clearAsset(asset, [clearAudio], [clearAtlasses], [clearImages], [clearText])](#module_Dijon..Dijon.AssetManager+clearAsset) ⇒ <code>void</code>
      * [.hasLoadedAssets(id)](#module_Dijon..Dijon.AssetManager+hasLoadedAssets) ⇒ <code>Boolean</code>
    * _static_
      * [.SOUND](#module_Dijon..Dijon.AssetManager.SOUND) : <code>String</code>
      * [.AUDIO_SPRITE](#module_Dijon..Dijon.AssetManager.AUDIO_SPRITE) : <code>String</code>
      * [.IMAGE](#module_Dijon..Dijon.AssetManager.IMAGE) : <code>String</code>
      * [.ATLAS](#module_Dijon..Dijon.AssetManager.ATLAS) : <code>String</code>
      * [.TEXT](#module_Dijon..Dijon.AssetManager.TEXT) : <code>String</code>
      * [.ASSET_LIST](#module_Dijon..Dijon.AssetManager.ASSET_LIST) : <code>String</code>
  * [.AudioManager](#module_Dijon..Dijon.AudioManager)
    * [new Dijon.AudioManager(game)](#new_module_Dijon..Dijon.AudioManager_new)
    * [.setDefaultVolume(vol)](#module_Dijon..Dijon.AudioManager+setDefaultVolume)
    * [.addAudio(key, isAudioSprite)](#module_Dijon..Dijon.AudioManager+addAudio)
    * [.addSound(key)](#module_Dijon..Dijon.AudioManager+addSound) ⇒ <code>Phaser.Sound</code>
    * [.addAudioSprite(key)](#module_Dijon..Dijon.AudioManager+addAudioSprite) ⇒ <code>Phaser.AudioSprite</code>
    * [.playAudio(marker, volume, loop, forceRestart)](#module_Dijon..Dijon.AudioManager+playAudio) ⇒ <code>Phaser.Sound</code>
    * [.playDelayedAudio(delay, marker, volume, loop, forceRestart)](#module_Dijon..Dijon.AudioManager+playDelayedAudio)
    * [.playSound(key, volume, loop, forceRestart)](#module_Dijon..Dijon.AudioManager+playSound) ⇒ <code>Phaser.Sound</code>
    * [.playSpriteMarker(marker, volume, loop, forceRestart)](#module_Dijon..Dijon.AudioManager+playSpriteMarker) ⇒ <code>Phaser.Sound</code>
    * [.stopAudio()](#module_Dijon..Dijon.AudioManager+stopAudio) ⇒ <code>Phaser.Sound</code>
    * [.stopSound()](#module_Dijon..Dijon.AudioManager+stopSound) ⇒ <code>Phaser.Sound</code>
    * [.stopSpriteMarker()](#module_Dijon..Dijon.AudioManager+stopSpriteMarker) ⇒ <code>Phaser.Sound</code>
    * [.removeSound(key)](#module_Dijon..Dijon.AudioManager+removeSound) ⇒ <code>void</code>
    * [.removeSprite(key)](#module_Dijon..Dijon.AudioManager+removeSprite) ⇒ <code>void</code>
  * [.SaveManager](#module_Dijon..Dijon.SaveManager)
    * [new Dijon.SaveManager(game)](#new_module_Dijon..Dijon.SaveManager_new)
    * [.getData(key, isJSON)](#module_Dijon..Dijon.SaveManager+getData) ⇒ <code>String</code> &#124; <code>Object</code>
    * [.saveData(key, value)](#module_Dijon..Dijon.SaveManager+saveData) ⇒ <code>void</code>
    * [.clearData(key)](#module_Dijon..Dijon.SaveManager+clearData) ⇒ <code>void</code>
  * [.SequenceManager](#module_Dijon..Dijon.SequenceManager)
    * [new Dijon.SequenceManager(game)](#new_module_Dijon..Dijon.SequenceManager_new)
    * [.run(sequence, context, interval, completeCallback, completeCallbackContext)](#module_Dijon..Dijon.SequenceManager+run) ⇒ <code>void</code>
  * [.TransitionManager](#module_Dijon..Dijon.TransitionManager)
    * [new Dijon.TransitionManager(game)](#new_module_Dijon..Dijon.TransitionManager_new)
    * [.add(fromState, toState, outHandler, preloadHandler, inHandler)](#module_Dijon..Dijon.TransitionManager+add) ⇒ <code>Object</code>
    * [.addException(state)](#module_Dijon..Dijon.TransitionManager+addException)
    * [.remove()](#module_Dijon..Dijon.TransitionManager+remove)
    * [.to(state)](#module_Dijon..Dijon.TransitionManager+to)
    * [.transitionOut()](#module_Dijon..Dijon.TransitionManager+transitionOut)
  * [.UIGroup](#module_Dijon..Dijon.UIGroup)
    * [new Dijon.UIGroup(game, [parent], [name], [addToStage], [components])](#new_module_Dijon..Dijon.UIGroup_new)
    * [._hasComponents](#module_Dijon..Dijon.UIGroup+_hasComponents) : <code>Boolean</code>
    * [._componentKeys](#module_Dijon..Dijon.UIGroup+_componentKeys) : <code>Array</code>
    * [._components](#module_Dijon..Dijon.UIGroup+_components) : <code>Object</code>
  * [.UISprite](#module_Dijon..Dijon.UISprite)
    * [new Dijon.UISprite(game, x, y, key, frame, name, [components])](#new_module_Dijon..Dijon.UISprite_new)
    * [.__frameName](#module_Dijon..Dijon.UISprite+__frameName) : <code>String</code>
    * [._hasComponents](#module_Dijon..Dijon.UISprite+_hasComponents) : <code>Boolean</code>
    * [._componentKeys](#module_Dijon..Dijon.UISprite+_componentKeys) : <code>Array</code>
    * [._components](#module_Dijon..Dijon.UISprite+_components) : <code>Object</code>
  * [.UIText](#module_Dijon..Dijon.UIText)
    * [new Dijon.UIText(game, x, y, text, fontName, fontSize, fontColor, [fontAlign], [wordWrap], [width], [settings])](#new_module_Dijon..Dijon.UIText_new)
    * [.DEFAULT_FONT](#module_Dijon..Dijon.UIText.DEFAULT_FONT) : <code>String</code>
    * [.DEFAULT_SIZE](#module_Dijon..Dijon.UIText.DEFAULT_SIZE) : <code>Number</code>
  * [.InvisibleButton](#module_Dijon..Dijon.InvisibleButton)
    * [new Dijon.InvisibleButton(game, x, y, w, h, name)](#new_module_Dijon..Dijon.InvisibleButton_new)
  * [.BaseMediator](#module_Dijon..Dijon.BaseMediator)
    * [new Dijon.BaseMediator(game, mediatorName, viewComponent, [modelClass], [autoReg])](#new_module_Dijon..Dijon.BaseMediator_new)
  * [.CopyModel](#module_Dijon..Dijon.CopyModel)
    * [new Dijon.CopyModel(game, [dataKey])](#new_module_Dijon..Dijon.CopyModel_new)
  * [.Model](#module_Dijon..Dijon.Model)
    * [new Dijon.Model(game, [dataKey])](#new_module_Dijon..Dijon.Model_new)
  * [.BaseState](#module_Dijon..Dijon.BaseState)
    * [new Dijon.BaseState()](#new_module_Dijon..Dijon.BaseState_new)
    * [.init()](#module_Dijon..Dijon.BaseState+init)
    * [.preload()](#module_Dijon..Dijon.BaseState+preload)
    * [.create()](#module_Dijon..Dijon.BaseState+create)
    * [.shutdown()](#module_Dijon..Dijon.BaseState+shutdown)
    * [.getPreloadID()](#module_Dijon..Dijon.BaseState+getPreloadID) ⇒ <code>String</code> &#124; <code>null</code>
    * [.getBuildInterval()](#module_Dijon..Dijon.BaseState+getBuildInterval) ⇒ <code>Number</code>
    * [.getBuildSequence()](#module_Dijon..Dijon.BaseState+getBuildSequence) ⇒ <code>Array</code>
    * [.buildInterface()](#module_Dijon..Dijon.BaseState+buildInterface)
    * [.afterBuildInterface()](#module_Dijon..Dijon.BaseState+afterBuildInterface)
    * [.startBuild()](#module_Dijon..Dijon.BaseState+startBuild)
    * [.preAfterBuild()](#module_Dijon..Dijon.BaseState+preAfterBuild)
    * [.afterBuild()](#module_Dijon..Dijon.BaseState+afterBuild)
    * [.addAudio(track)](#module_Dijon..Dijon.BaseState+addAudio) ⇒ <code>Phaser.Sound</code>
  * [.UIText.DEFAULT_COLOR](#module_Dijon..Dijon.UIText.DEFAULT_COLOR) : <code>String</code>
  * [.boot(game)](#module_Dijon..Dijon.boot) ⇒ <code>void</code>
  * [.addUtilityMethods(game)](#module_Dijon..Dijon.addUtilityMethods)
  * [.UIGroup#update()](#module_Dijon..Dijon.UIGroup+update) ⇒ <code>void</code>
  * [.UIGroup#destroy()](#module_Dijon..Dijon.UIGroup+destroy) ⇒ <code>Phaser.Group.destroy</code>
  * [.UIGroup#_updateComponentKeys()](#module_Dijon..Dijon.UIGroup+_updateComponentKeys) ⇒ <code>void</code>
  * [.UIGroup#addComponents(components)](#module_Dijon..Dijon.UIGroup+addComponents)
  * [.UIGroup#addComponent(component)](#module_Dijon..Dijon.UIGroup+addComponent)
  * [.UIGroup#removeAllComponents()](#module_Dijon..Dijon.UIGroup+removeAllComponents) ⇒ <code>void</code>
  * [.UIGroup#removeComponent(componentName)](#module_Dijon..Dijon.UIGroup+removeComponent) ⇒ <code>void</code>
  * [.UIGroup#updateComponent(componentName)](#module_Dijon..Dijon.UIGroup+updateComponent) ⇒ <code>void</code>
  * [.UISprite#update()](#module_Dijon..Dijon.UISprite+update) ⇒ <code>void</code>
  * [.UISprite#destroy()](#module_Dijon..Dijon.UISprite+destroy) ⇒ <code>Phaser.Sprite.destroy</code>
  * [.UISprite#_updateComponentKeys()](#module_Dijon..Dijon.UISprite+_updateComponentKeys) ⇒ <code>void</code>
  * [.UISprite#init()](#module_Dijon..Dijon.UISprite+init) ⇒ <code>void</code>
  * [.UISprite#buildInterface()](#module_Dijon..Dijon.UISprite+buildInterface) ⇒ <code>void</code>
  * [.UISprite#addComponents(components)](#module_Dijon..Dijon.UISprite+addComponents)
  * [.UISprite#addComponent(component)](#module_Dijon..Dijon.UISprite+addComponent)
  * [.UISprite#removeAllComponents()](#module_Dijon..Dijon.UISprite+removeAllComponents) ⇒ <code>void</code>
  * [.UISprite#removeComponent(componentName)](#module_Dijon..Dijon.UISprite+removeComponent) ⇒ <code>void</code>
  * [.UISprite#updateComponent(componentName)](#module_Dijon..Dijon.UISprite+updateComponent) ⇒ <code>void</code>
  * [.UIText#setColor(color)](#module_Dijon..Dijon.UIText+setColor) ⇒ <code>Dijon.UIText.highlightPhrase</code>
  * [.UIText#resetColor()](#module_Dijon..Dijon.UIText+resetColor) ⇒ <code>Dijon.UIText.highlightPhrase</code>
  * [.UIText#highlightPhrase(phrase, color, [caseSensitive])](#module_Dijon..Dijon.UIText+highlightPhrase) ⇒ <code>void</code>
  * [.UIText#animate([letterTime], [delay])](#module_Dijon..Dijon.UIText+animate)
  * [.UIText#stopAnimating()](#module_Dijon..Dijon.UIText+stopAnimating) ⇒ <code>void</code>
  * [.InvisibleButton#init()](#module_Dijon..Dijon.InvisibleButton+init) ⇒ <code>void</code>
  * [.InvisibleButton#buildInterface()](#module_Dijon..Dijon.InvisibleButton+buildInterface) ⇒ <code>void</code>
  * [.InvisibleButton#setSize(w, h)](#module_Dijon..Dijon.InvisibleButton+setSize)
  * [.BaseMediator#_createModel(ModelClass)](#module_Dijon..Dijon.BaseMediator+_createModel)
  * [.BaseMediator#_addSignal(signalName)](#module_Dijon..Dijon.BaseMediator+_addSignal)
  * [.BaseMediator#createSignals()](#module_Dijon..Dijon.BaseMediator+createSignals)
  * [.BaseMediator#setViewComponent(viewComponent)](#module_Dijon..Dijon.BaseMediator+setViewComponent)
  * [.BaseMediator#setModel(model)](#module_Dijon..Dijon.BaseMediator+setModel)
  * [.BaseMediator#getCopy(group, id)](#module_Dijon..Dijon.BaseMediator+getCopy) ⇒ <code>String</code>
  * [.BaseMediator#release()](#module_Dijon..Dijon.BaseMediator+release)
  * [.CopyModel#getCopy(groupId, itemId)](#module_Dijon..Dijon.CopyModel+getCopy) ⇒ <code>String</code>
  * [.CopyModel#getCopyGroup(groupId)](#module_Dijon..Dijon.CopyModel+getCopyGroup) ⇒ <code>Object</code>
  * [.Model#setData(dataKey)](#module_Dijon..Dijon.Model+setData)
  * [.Model#getData()](#module_Dijon..Dijon.Model+getData) ⇒ <code>Object</code>
  * [.Model#parseData(data)](#module_Dijon..Dijon.Model+parseData) ⇒ <code>Object</code>

<a name="module_Dijon..Dijon.BaseComponent"></a>
#### Dijon.BaseComponent
**Kind**: static class of <code>[Dijon](#module_Dijon..Dijon)</code>  

* [.BaseComponent](#module_Dijon..Dijon.BaseComponent)
  * [new Dijon.BaseComponent()](#new_module_Dijon..Dijon.BaseComponent_new)
  * [.setOwner(owner)](#module_Dijon..Dijon.BaseComponent+setOwner) ⇒ <code>void</code>
  * [.init()](#module_Dijon..Dijon.BaseComponent+init) ⇒ <code>void</code>
  * [.buildInterface()](#module_Dijon..Dijon.BaseComponent+buildInterface) ⇒ <code>void</code>
  * [.update()](#module_Dijon..Dijon.BaseComponent+update) ⇒ <code>void</code>
  * [.destroy()](#module_Dijon..Dijon.BaseComponent+destroy) ⇒ <code>void</code>

<a name="new_module_Dijon..Dijon.BaseComponent_new"></a>
##### new Dijon.BaseComponent()
Dijon.BaseComponent
components must have a name
each component should either extend this, or have all its methods

<a name="module_Dijon..Dijon.BaseComponent+setOwner"></a>
##### baseComponent.setOwner(owner) ⇒ <code>void</code>
setOwner

**Kind**: instance method of <code>[BaseComponent](#module_Dijon..Dijon.BaseComponent)</code>  

| Param | Type | Description |
| --- | --- | --- |
| owner | <code>Dijon.UISprite</code> | the Dijon.UISprite instance this component is attached to |

<a name="module_Dijon..Dijon.BaseComponent+init"></a>
##### baseComponent.init() ⇒ <code>void</code>
initialize the component, set up variables
called by the owner first after the component is attached

**Kind**: instance method of <code>[BaseComponent](#module_Dijon..Dijon.BaseComponent)</code>  
<a name="module_Dijon..Dijon.BaseComponent+buildInterface"></a>
##### baseComponent.buildInterface() ⇒ <code>void</code>
add visual elements
called by the owner after it calls this init method

**Kind**: instance method of <code>[BaseComponent](#module_Dijon..Dijon.BaseComponent)</code>  
<a name="module_Dijon..Dijon.BaseComponent+update"></a>
##### baseComponent.update() ⇒ <code>void</code>
called by the owner in its update cycle, every frame

**Kind**: instance method of <code>[BaseComponent](#module_Dijon..Dijon.BaseComponent)</code>  
<a name="module_Dijon..Dijon.BaseComponent+destroy"></a>
##### baseComponent.destroy() ⇒ <code>void</code>
remove any visual elements / signals added
owner calls this method in its own destroy method

**Kind**: instance method of <code>[BaseComponent](#module_Dijon..Dijon.BaseComponent)</code>  
<a name="module_Dijon..Dijon.AssetManager"></a>
#### Dijon.AssetManager
**Kind**: static class of <code>[Dijon](#module_Dijon..Dijon)</code>  

* [.AssetManager](#module_Dijon..Dijon.AssetManager)
  * [new Dijon.AssetManager(game)](#new_module_Dijon..Dijon.AssetManager_new)
  * _instance_
    * [._gameLoadStart()](#module_Dijon..Dijon.AssetManager+_gameLoadStart) ⇒ <code>void</code>
    * [._gameFileStart()](#module_Dijon..Dijon.AssetManager+_gameFileStart) ⇒ <code>void</code>
    * [.setPaths(pathObj)](#module_Dijon..Dijon.AssetManager+setPaths) ⇒ <code>void</code>
    * [.setSoundDecodingModifier([num])](#module_Dijon..Dijon.AssetManager+setSoundDecodingModifier)
    * [.getSoundDecodingModifier()](#module_Dijon..Dijon.AssetManager+getSoundDecodingModifier)
    * [.loadText(url)](#module_Dijon..Dijon.AssetManager+loadText) ⇒ <code>Phaser.Loader.text</code>
    * [.loadAtlas(url)](#module_Dijon..Dijon.AssetManager+loadAtlas) ⇒ <code>Phaser.Loader.atlasJSONHash</code>
    * [.loadImage(url)](#module_Dijon..Dijon.AssetManager+loadImage) ⇒ <code>Phaser.Loader.image</code>
    * [.loadBitmapFont(url)](#module_Dijon..Dijon.AssetManager+loadBitmapFont) ⇒ <code>Phaser.Loader.bitmapFont</code>
    * [.loadAudio(url, exts, isAudioSprite)](#module_Dijon..Dijon.AssetManager+loadAudio) ⇒ <code>Phaser.Loader.audiosprite</code> &#124; <code>Phaser.Loader.audio</code>
    * [.loadSound(url, exts)](#module_Dijon..Dijon.AssetManager+loadSound) ⇒ <code>Dijon.AssetManager.loadAudio</code>
    * [.loadAudioSprite(url, exts)](#module_Dijon..Dijon.AssetManager+loadAudioSprite) ⇒ <code>Dijon.AssetManager.loadAudio</code>
    * [.loadAssets(id, background)](#module_Dijon..Dijon.AssetManager+loadAssets) ⇒ <code>Phaser.Loader.start</code>
    * [.getLoadProgress(progress)](#module_Dijon..Dijon.AssetManager+getLoadProgress) ⇒ <code>Number</code>
    * [.allSoundsDecoded()](#module_Dijon..Dijon.AssetManager+allSoundsDecoded) ⇒ <code>Boolean</code>
    * [.setData(textFileFromCache)](#module_Dijon..Dijon.AssetManager+setData)
    * [.clearAssets(id, [clearAudio], [clearAtlasses], [clearImages], [clearText])](#module_Dijon..Dijon.AssetManager+clearAssets) ⇒ <code>void</code>
    * [.clearAsset(asset, [clearAudio], [clearAtlasses], [clearImages], [clearText])](#module_Dijon..Dijon.AssetManager+clearAsset) ⇒ <code>void</code>
    * [.hasLoadedAssets(id)](#module_Dijon..Dijon.AssetManager+hasLoadedAssets) ⇒ <code>Boolean</code>
  * _static_
    * [.SOUND](#module_Dijon..Dijon.AssetManager.SOUND) : <code>String</code>
    * [.AUDIO_SPRITE](#module_Dijon..Dijon.AssetManager.AUDIO_SPRITE) : <code>String</code>
    * [.IMAGE](#module_Dijon..Dijon.AssetManager.IMAGE) : <code>String</code>
    * [.ATLAS](#module_Dijon..Dijon.AssetManager.ATLAS) : <code>String</code>
    * [.TEXT](#module_Dijon..Dijon.AssetManager.TEXT) : <code>String</code>
    * [.ASSET_LIST](#module_Dijon..Dijon.AssetManager.ASSET_LIST) : <code>String</code>

<a name="new_module_Dijon..Dijon.AssetManager_new"></a>
##### new Dijon.AssetManager(game)
Manager for loading and clearing assets


| Param | Type | Description |
| --- | --- | --- |
| game | <code>Phaser.Game</code> | reference to the Phaser.Game object |

<a name="module_Dijon..Dijon.AssetManager+_gameLoadStart"></a>
##### assetManager._gameLoadStart() ⇒ <code>void</code>
when the asset list starts loading, dispatches the onLoadStart signal

**Kind**: instance method of <code>[AssetManager](#module_Dijon..Dijon.AssetManager)</code>  
<a name="module_Dijon..Dijon.AssetManager+_gameFileStart"></a>
##### assetManager._gameFileStart() ⇒ <code>void</code>
when a file starts loading - dispatches the onFileStart signal

**Kind**: instance method of <code>[AssetManager](#module_Dijon..Dijon.AssetManager)</code>  
<a name="module_Dijon..Dijon.AssetManager+setPaths"></a>
##### assetManager.setPaths(pathObj) ⇒ <code>void</code>
sets the paths where the Dijon.AssetManager will look for different files

**Kind**: instance method of <code>[AssetManager](#module_Dijon..Dijon.AssetManager)</code>  

| Param | Type | Description |
| --- | --- | --- |
| pathObj | <code>Object</code> | an object containing locations for different file types (should have the following properties: assetPath, dataPath, spritesheetPath, imgPath, fontPath, audioSpritePath, soundPath) |

<a name="module_Dijon..Dijon.AssetManager+setSoundDecodingModifier"></a>
##### assetManager.setSoundDecodingModifier([num])
sets the percentage of the load we should allot to each sound

**Kind**: instance method of <code>[AssetManager](#module_Dijon..Dijon.AssetManager)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [num] | <code>Number</code> | <code>2</code> | the percentage |

<a name="module_Dijon..Dijon.AssetManager+getSoundDecodingModifier"></a>
##### assetManager.getSoundDecodingModifier()
gets the percentage of the load we should allot to each sound

**Kind**: instance method of <code>[AssetManager](#module_Dijon..Dijon.AssetManager)</code>  
<a name="module_Dijon..Dijon.AssetManager+loadText"></a>
##### assetManager.loadText(url) ⇒ <code>Phaser.Loader.text</code>
loads any text file

**Kind**: instance method of <code>[AssetManager](#module_Dijon..Dijon.AssetManager)</code>  
**Returns**: <code>Phaser.Loader.text</code> - adds the file to the load queue  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | of the file to load (prepends the dataPath) |

<a name="module_Dijon..Dijon.AssetManager+loadAtlas"></a>
##### assetManager.loadAtlas(url) ⇒ <code>Phaser.Loader.atlasJSONHash</code>
loads a texture atlas

**Kind**: instance method of <code>[AssetManager](#module_Dijon..Dijon.AssetManager)</code>  
**Returns**: <code>Phaser.Loader.atlasJSONHash</code> - adds the atlas and it's json descriptor file to the load queue  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | url of the texture atlas (prepends the spritesheetPath) |

<a name="module_Dijon..Dijon.AssetManager+loadImage"></a>
##### assetManager.loadImage(url) ⇒ <code>Phaser.Loader.image</code>
loads any image file

**Kind**: instance method of <code>[AssetManager](#module_Dijon..Dijon.AssetManager)</code>  
**Returns**: <code>Phaser.Loader.image</code> - adds the image file to the load queue  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | the full image url, with extension (prepends the imgPath) |

<a name="module_Dijon..Dijon.AssetManager+loadBitmapFont"></a>
##### assetManager.loadBitmapFont(url) ⇒ <code>Phaser.Loader.bitmapFont</code>
loads a bitmap font

**Kind**: instance method of <code>[AssetManager](#module_Dijon..Dijon.AssetManager)</code>  
**Returns**: <code>Phaser.Loader.bitmapFont</code> - adds the bitmap font and its xml descriptor to the load queue  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | the url of the bitmap font (prepends the fontPath) |

<a name="module_Dijon..Dijon.AssetManager+loadAudio"></a>
##### assetManager.loadAudio(url, exts, isAudioSprite) ⇒ <code>Phaser.Loader.audiosprite</code> &#124; <code>Phaser.Loader.audio</code>
loads any audio file (adds the 'm4a' file extension if we're on an iOS device as it decodes way faster)

**Kind**: instance method of <code>[AssetManager](#module_Dijon..Dijon.AssetManager)</code>  
**Returns**: <code>Phaser.Loader.audiosprite</code> &#124; <code>Phaser.Loader.audio</code> - adds the audioSprite or audio file to the file queue  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | the url of the audio file (prepends either the audioSpritePath or the soundPath depending on the type of file) |
| exts | <code>String</code> | comma separated string of file extensions (usually "ogg,mp3") |
| isAudioSprite | <code>Boolean</code> | whether the asset is an audio sprite |

<a name="module_Dijon..Dijon.AssetManager+loadSound"></a>
##### assetManager.loadSound(url, exts) ⇒ <code>Dijon.AssetManager.loadAudio</code>
loads a sound file

**Kind**: instance method of <code>[AssetManager](#module_Dijon..Dijon.AssetManager)</code>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | the url to the sound file (prepends soundPath) |
| exts | <code>String</code> | comma separated list of extensions (usually "ogg,mp3") |

<a name="module_Dijon..Dijon.AssetManager+loadAudioSprite"></a>
##### assetManager.loadAudioSprite(url, exts) ⇒ <code>Dijon.AssetManager.loadAudio</code>
loads a sound file

**Kind**: instance method of <code>[AssetManager](#module_Dijon..Dijon.AssetManager)</code>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | the url to the audioSprite file (prepends audioSpritePath) |
| exts | <code>String</code> | comma separated list of extensions (usually "ogg,mp3") |

<a name="module_Dijon..Dijon.AssetManager+loadAssets"></a>
##### assetManager.loadAssets(id, background) ⇒ <code>Phaser.Loader.start</code>
loads an entire list of assets

**Kind**: instance method of <code>[AssetManager](#module_Dijon..Dijon.AssetManager)</code>  
**Returns**: <code>Phaser.Loader.start</code> - starts the load  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | the id of the asset list to load |
| background | <code>Boolean</code> | whether this is a background load |

<a name="module_Dijon..Dijon.AssetManager+getLoadProgress"></a>
##### assetManager.getLoadProgress(progress) ⇒ <code>Number</code>
gets the (adjusted) load progress (also takes into accound the number of sounds to decode)

**Kind**: instance method of <code>[AssetManager](#module_Dijon..Dijon.AssetManager)</code>  
**Returns**: <code>Number</code> - the adjusted progress  

| Param | Type | Description |
| --- | --- | --- |
| progress | <code>Number</code> | the game progress |

<a name="module_Dijon..Dijon.AssetManager+allSoundsDecoded"></a>
##### assetManager.allSoundsDecoded() ⇒ <code>Boolean</code>
checks whether all the sounds in the queue are decoded

**Kind**: instance method of <code>[AssetManager](#module_Dijon..Dijon.AssetManager)</code>  
<a name="module_Dijon..Dijon.AssetManager+setData"></a>
##### assetManager.setData(textFileFromCache)
sets the data for the Dijon.AssetManager to use as a reference (usually from data/assets.json)
triggers the _parseData internal method, which stores the asset list for later use

**Kind**: instance method of <code>[AssetManager](#module_Dijon..Dijon.AssetManager)</code>  

| Param | Type | Description |
| --- | --- | --- |
| textFileFromCache | <code>String</code> | the id of the file in the Phaser.Cache |

<a name="module_Dijon..Dijon.AssetManager+clearAssets"></a>
##### assetManager.clearAssets(id, [clearAudio], [clearAtlasses], [clearImages], [clearText]) ⇒ <code>void</code>
clears the assets from a particular id in the storage

**Kind**: instance method of <code>[AssetManager](#module_Dijon..Dijon.AssetManager)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>String</code> |  | the id of the asset list to clear |
| [clearAudio] | <code>Boolean</code> | <code>true</code> | whether to clear audio files |
| [clearAtlasses] | <code>Boolean</code> | <code>true</code> | whether to clear texture atlasses |
| [clearImages] | <code>Boolean</code> | <code>true</code> | whether to clear images |
| [clearText] | <code>Boolean</code> | <code>true</code> | whether to clear text files |

<a name="module_Dijon..Dijon.AssetManager+clearAsset"></a>
##### assetManager.clearAsset(asset, [clearAudio], [clearAtlasses], [clearImages], [clearText]) ⇒ <code>void</code>
clears an asset from the game's memory

**Kind**: instance method of <code>[AssetManager](#module_Dijon..Dijon.AssetManager)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| asset | <code>Object</code> |  | the asset to clear |
| [clearAudio] | <code>Boolean</code> | <code>true</code> | whether to clear audio files |
| [clearAtlasses] | <code>Boolean</code> | <code>true</code> | whether to clear texture atlasses |
| [clearImages] | <code>Boolean</code> | <code>true</code> | whether to clear images |
| [clearText] | <code>Boolean</code> | <code>true</code> | whether to clear text files |

<a name="module_Dijon..Dijon.AssetManager+hasLoadedAssets"></a>
##### assetManager.hasLoadedAssets(id) ⇒ <code>Boolean</code>
checks if the assets from this list id are already loaded

**Kind**: instance method of <code>[AssetManager](#module_Dijon..Dijon.AssetManager)</code>  
**Returns**: <code>Boolean</code> - whether it has been loaded already  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | the asset list id to check |

<a name="module_Dijon..Dijon.AssetManager.SOUND"></a>
##### AssetManager.SOUND : <code>String</code>
**Kind**: static property of <code>[AssetManager](#module_Dijon..Dijon.AssetManager)</code>  
<a name="module_Dijon..Dijon.AssetManager.AUDIO_SPRITE"></a>
##### AssetManager.AUDIO_SPRITE : <code>String</code>
**Kind**: static property of <code>[AssetManager](#module_Dijon..Dijon.AssetManager)</code>  
<a name="module_Dijon..Dijon.AssetManager.IMAGE"></a>
##### AssetManager.IMAGE : <code>String</code>
**Kind**: static property of <code>[AssetManager](#module_Dijon..Dijon.AssetManager)</code>  
<a name="module_Dijon..Dijon.AssetManager.ATLAS"></a>
##### AssetManager.ATLAS : <code>String</code>
**Kind**: static property of <code>[AssetManager](#module_Dijon..Dijon.AssetManager)</code>  
<a name="module_Dijon..Dijon.AssetManager.TEXT"></a>
##### AssetManager.TEXT : <code>String</code>
**Kind**: static property of <code>[AssetManager](#module_Dijon..Dijon.AssetManager)</code>  
<a name="module_Dijon..Dijon.AssetManager.ASSET_LIST"></a>
##### AssetManager.ASSET_LIST : <code>String</code>
**Kind**: static property of <code>[AssetManager](#module_Dijon..Dijon.AssetManager)</code>  
<a name="module_Dijon..Dijon.AudioManager"></a>
#### Dijon.AudioManager
**Kind**: static class of <code>[Dijon](#module_Dijon..Dijon)</code>  

* [.AudioManager](#module_Dijon..Dijon.AudioManager)
  * [new Dijon.AudioManager(game)](#new_module_Dijon..Dijon.AudioManager_new)
  * [.setDefaultVolume(vol)](#module_Dijon..Dijon.AudioManager+setDefaultVolume)
  * [.addAudio(key, isAudioSprite)](#module_Dijon..Dijon.AudioManager+addAudio)
  * [.addSound(key)](#module_Dijon..Dijon.AudioManager+addSound) ⇒ <code>Phaser.Sound</code>
  * [.addAudioSprite(key)](#module_Dijon..Dijon.AudioManager+addAudioSprite) ⇒ <code>Phaser.AudioSprite</code>
  * [.playAudio(marker, volume, loop, forceRestart)](#module_Dijon..Dijon.AudioManager+playAudio) ⇒ <code>Phaser.Sound</code>
  * [.playDelayedAudio(delay, marker, volume, loop, forceRestart)](#module_Dijon..Dijon.AudioManager+playDelayedAudio)
  * [.playSound(key, volume, loop, forceRestart)](#module_Dijon..Dijon.AudioManager+playSound) ⇒ <code>Phaser.Sound</code>
  * [.playSpriteMarker(marker, volume, loop, forceRestart)](#module_Dijon..Dijon.AudioManager+playSpriteMarker) ⇒ <code>Phaser.Sound</code>
  * [.stopAudio()](#module_Dijon..Dijon.AudioManager+stopAudio) ⇒ <code>Phaser.Sound</code>
  * [.stopSound()](#module_Dijon..Dijon.AudioManager+stopSound) ⇒ <code>Phaser.Sound</code>
  * [.stopSpriteMarker()](#module_Dijon..Dijon.AudioManager+stopSpriteMarker) ⇒ <code>Phaser.Sound</code>
  * [.removeSound(key)](#module_Dijon..Dijon.AudioManager+removeSound) ⇒ <code>void</code>
  * [.removeSprite(key)](#module_Dijon..Dijon.AudioManager+removeSprite) ⇒ <code>void</code>

<a name="new_module_Dijon..Dijon.AudioManager_new"></a>
##### new Dijon.AudioManager(game)
Manager for playing all sounds in the game (wraps Phaser.SoundManager)


| Param | Type | Description |
| --- | --- | --- |
| game | <code>Phaser.Game</code> | reference to the Phaser.Game object |

<a name="module_Dijon..Dijon.AudioManager+setDefaultVolume"></a>
##### audioManager.setDefaultVolume(vol)
Sets the default volume for all sounds (used in the case where a volume is not supplied to the playAudio, playSound, or playSpriteMarker methods)

**Kind**: instance method of <code>[AudioManager](#module_Dijon..Dijon.AudioManager)</code>  

| Param | Type | Description |
| --- | --- | --- |
| vol | <code>Number</code> | the default volume to use |

<a name="module_Dijon..Dijon.AudioManager+addAudio"></a>
##### audioManager.addAudio(key, isAudioSprite)
adds audio to the lookup (called by AssetManager when any sound is loaded, usually not necessary to call from a game)

**Kind**: instance method of <code>[AudioManager](#module_Dijon..Dijon.AudioManager)</code>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | the Phaser.Cache key of the audio asset |
| isAudioSprite | <code>Boolean</code> | whether the asset is an audio sprite |

<a name="module_Dijon..Dijon.AudioManager+addSound"></a>
##### audioManager.addSound(key) ⇒ <code>Phaser.Sound</code>
adds a single sound to the lookup (usually not necessary to call from a game)

**Kind**: instance method of <code>[AudioManager](#module_Dijon..Dijon.AudioManager)</code>  
**Returns**: <code>Phaser.Sound</code> - the added sound  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | the Phaser.Cache key of the asset |

<a name="module_Dijon..Dijon.AudioManager+addAudioSprite"></a>
##### audioManager.addAudioSprite(key) ⇒ <code>Phaser.AudioSprite</code>
adds an audio sprite to the lookup (usually not necessary to call from a game)

**Kind**: instance method of <code>[AudioManager](#module_Dijon..Dijon.AudioManager)</code>  
**Returns**: <code>Phaser.AudioSprite</code> - the added audio sprite  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | the Phaser.Cache key of the asset |

<a name="module_Dijon..Dijon.AudioManager+playAudio"></a>
##### audioManager.playAudio(marker, volume, loop, forceRestart) ⇒ <code>Phaser.Sound</code>
a global method to play a sound - will check audio sprite markers for the provided key first, then single sounds

**Kind**: instance method of <code>[AudioManager](#module_Dijon..Dijon.AudioManager)</code>  
**Returns**: <code>Phaser.Sound</code> - the playing sound  

| Param | Type | Description |
| --- | --- | --- |
| marker | <code>String</code> | the sound marker (or key) to check for |
| volume | <code>Number</code> | the volume at which to play the sound |
| loop | <code>Boolean</code> | whether the sound should loop (won't work if it's a sprite marker, and "loop" hasn't been set in the audio sprite descriptor file) |
| forceRestart | <code>Boolean</code> | whether to restart the sound if it's already playing |

<a name="module_Dijon..Dijon.AudioManager+playDelayedAudio"></a>
##### audioManager.playDelayedAudio(delay, marker, volume, loop, forceRestart)
calls Dijon.AudioManager.playAudio on a delay

**Kind**: instance method of <code>[AudioManager](#module_Dijon..Dijon.AudioManager)</code>  

| Param | Type | Description |
| --- | --- | --- |
| delay | <code>int</code> | number of milliseconds to delay the sound |
| marker | <code>String</code> | the sound marker (or key) to check for |
| volume | <code>Number</code> | the volume at which to play the sound |
| loop | <code>Boolean</code> | whether the sound should loop (won't work if it's a sprite marker, and "loop" hasn't been set in the audio sprite descriptor file) |
| forceRestart | <code>Boolean</code> | whether to restart the sound if it's already playing |

<a name="module_Dijon..Dijon.AudioManager+playSound"></a>
##### audioManager.playSound(key, volume, loop, forceRestart) ⇒ <code>Phaser.Sound</code>
plays a single sound

**Kind**: instance method of <code>[AudioManager](#module_Dijon..Dijon.AudioManager)</code>  
**Returns**: <code>Phaser.Sound</code> - the playing sound  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | the Phaser.Cache key for the sound |
| volume | <code>Number</code> | the volume at which to play the sound |
| loop | <code>Boolean</code> | whether the sound should loop (won't work if it's a sprite marker, and "loop" hasn't been set in the audio sprite descriptor file) |
| forceRestart | <code>Boolean</code> | whether to restart the sound if it's already playing |

<a name="module_Dijon..Dijon.AudioManager+playSpriteMarker"></a>
##### audioManager.playSpriteMarker(marker, volume, loop, forceRestart) ⇒ <code>Phaser.Sound</code>
plays a marker from an audio sprite

**Kind**: instance method of <code>[AudioManager](#module_Dijon..Dijon.AudioManager)</code>  
**Returns**: <code>Phaser.Sound</code> - the playing sound  

| Param | Type | Description |
| --- | --- | --- |
| marker | <code>String</code> | the marker to check for (will check all audio sprites) |
| volume | <code>Number</code> | the volume at which to play the sound |
| loop | <code>Boolean</code> | whether the sound should loop (won't work if it's a sprite marker, and "loop" hasn't been set in the audio sprite descriptor file) |
| forceRestart | <code>Boolean</code> | whether to restart the sound if it's already playing |

<a name="module_Dijon..Dijon.AudioManager+stopAudio"></a>
##### audioManager.stopAudio() ⇒ <code>Phaser.Sound</code>
stops any playing audio file with the given marker
checks audio sprites first, then single sounds

**Kind**: instance method of <code>[AudioManager](#module_Dijon..Dijon.AudioManager)</code>  
**Returns**: <code>Phaser.Sound</code> - the sound that was stopped  
<a name="module_Dijon..Dijon.AudioManager+stopSound"></a>
##### audioManager.stopSound() ⇒ <code>Phaser.Sound</code>
stops a single sound from playing

**Kind**: instance method of <code>[AudioManager](#module_Dijon..Dijon.AudioManager)</code>  
**Returns**: <code>Phaser.Sound</code> - the sound that was stopped  
<a name="module_Dijon..Dijon.AudioManager+stopSpriteMarker"></a>
##### audioManager.stopSpriteMarker() ⇒ <code>Phaser.Sound</code>
stops a single sound from playing

**Kind**: instance method of <code>[AudioManager](#module_Dijon..Dijon.AudioManager)</code>  
**Returns**: <code>Phaser.Sound</code> - the sound that was stopped  
<a name="module_Dijon..Dijon.AudioManager+removeSound"></a>
##### audioManager.removeSound(key) ⇒ <code>void</code>
stops removes a sound from Dijon.AudioManager's lookup

**Kind**: instance method of <code>[AudioManager](#module_Dijon..Dijon.AudioManager)</code>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | the key of the sound to be removed |

<a name="module_Dijon..Dijon.AudioManager+removeSprite"></a>
##### audioManager.removeSprite(key) ⇒ <code>void</code>
stops removes an audio sprite from Dijon.AudioManager's lookup

**Kind**: instance method of <code>[AudioManager](#module_Dijon..Dijon.AudioManager)</code>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | the key of the sound to be removed |

<a name="module_Dijon..Dijon.SaveManager"></a>
#### Dijon.SaveManager
**Kind**: static class of <code>[Dijon](#module_Dijon..Dijon)</code>  

* [.SaveManager](#module_Dijon..Dijon.SaveManager)
  * [new Dijon.SaveManager(game)](#new_module_Dijon..Dijon.SaveManager_new)
  * [.getData(key, isJSON)](#module_Dijon..Dijon.SaveManager+getData) ⇒ <code>String</code> &#124; <code>Object</code>
  * [.saveData(key, value)](#module_Dijon..Dijon.SaveManager+saveData) ⇒ <code>void</code>
  * [.clearData(key)](#module_Dijon..Dijon.SaveManager+clearData) ⇒ <code>void</code>

<a name="new_module_Dijon..Dijon.SaveManager_new"></a>
##### new Dijon.SaveManager(game)
Used for saving data to / retrieving data from LocalStorage


| Param | Type | Description |
| --- | --- | --- |
| game | <code>Phaser.Game</code> | the Phaser.Game instance |

<a name="module_Dijon..Dijon.SaveManager+getData"></a>
##### saveManager.getData(key, isJSON) ⇒ <code>String</code> &#124; <code>Object</code>
gets stored data with the specified key

**Kind**: instance method of <code>[SaveManager](#module_Dijon..Dijon.SaveManager)</code>  
**Returns**: <code>String</code> &#124; <code>Object</code> - the retrieved data - if it's a JSON string, we parse the data and return the JSON object  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | the LocalStorage key where the data is stored |
| isJSON | <code>Boolean</code> | is the stored data just a string or is it stringified json (assumes it's JSON) |

<a name="module_Dijon..Dijon.SaveManager+saveData"></a>
##### saveManager.saveData(key, value) ⇒ <code>void</code>
saves data to localstorage

**Kind**: instance method of <code>[SaveManager](#module_Dijon..Dijon.SaveManager)</code>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | the LocalStorage key the data will be saved to |
| value | <code>String</code> &#124; <code>Object</code> | the data to save (if it's an object, will be stringified before saving) |

<a name="module_Dijon..Dijon.SaveManager+clearData"></a>
##### saveManager.clearData(key) ⇒ <code>void</code>
clear stored data

**Kind**: instance method of <code>[SaveManager](#module_Dijon..Dijon.SaveManager)</code>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | the LocalStorage key to clear |

<a name="module_Dijon..Dijon.SequenceManager"></a>
#### Dijon.SequenceManager
**Kind**: static class of <code>[Dijon](#module_Dijon..Dijon)</code>  

* [.SequenceManager](#module_Dijon..Dijon.SequenceManager)
  * [new Dijon.SequenceManager(game)](#new_module_Dijon..Dijon.SequenceManager_new)
  * [.run(sequence, context, interval, completeCallback, completeCallbackContext)](#module_Dijon..Dijon.SequenceManager+run) ⇒ <code>void</code>

<a name="new_module_Dijon..Dijon.SequenceManager_new"></a>
##### new Dijon.SequenceManager(game)
Executes methods in a timed sequence (using Phaser.Timer.repeat)


| Param | Type | Description |
| --- | --- | --- |
| game | <code>Phaser.Game</code> | reference to the Phaser.Game object |

<a name="module_Dijon..Dijon.SequenceManager+run"></a>
##### sequenceManager.run(sequence, context, interval, completeCallback, completeCallbackContext) ⇒ <code>void</code>
runs a sequence

**Kind**: instance method of <code>[SequenceManager](#module_Dijon..Dijon.SequenceManager)</code>  

| Param | Type | Description |
| --- | --- | --- |
| sequence | <code>Array</code> | an array of methods to be run in sequence |
| context | <code>Object</code> | the scope to execute all of the methods in the sequence |
| interval | <code>int</code> | the number of milliseconds between each step in the sequence |
| completeCallback | <code>function</code> | the method to call once the sequence is complete |
| completeCallbackContext | <code>Object</code> | the scope for the completeCallback |

<a name="module_Dijon..Dijon.TransitionManager"></a>
#### Dijon.TransitionManager
**Kind**: static class of <code>[Dijon](#module_Dijon..Dijon)</code>  

* [.TransitionManager](#module_Dijon..Dijon.TransitionManager)
  * [new Dijon.TransitionManager(game)](#new_module_Dijon..Dijon.TransitionManager_new)
  * [.add(fromState, toState, outHandler, preloadHandler, inHandler)](#module_Dijon..Dijon.TransitionManager+add) ⇒ <code>Object</code>
  * [.addException(state)](#module_Dijon..Dijon.TransitionManager+addException)
  * [.remove()](#module_Dijon..Dijon.TransitionManager+remove)
  * [.to(state)](#module_Dijon..Dijon.TransitionManager+to)
  * [.transitionOut()](#module_Dijon..Dijon.TransitionManager+transitionOut)

<a name="new_module_Dijon..Dijon.TransitionManager_new"></a>
##### new Dijon.TransitionManager(game)
Helpful for transitioning in and out of game states
use the add method to add handlers for different state transitions


| Param | Type | Description |
| --- | --- | --- |
| game | <code>Phaser.Game</code> | A reference to the currently running game |

<a name="module_Dijon..Dijon.TransitionManager+add"></a>
##### transitionManager.add(fromState, toState, outHandler, preloadHandler, inHandler) ⇒ <code>Object</code>
Adds a transition handler for a specific from / to state combination
pass the from / to states as the first 2 arguments, and additional arguments for which instance will handle the transition
if only 3 args are passed, the instance will handle the in / out transition, and the preloading
E.G.
this.game.transition.add(this.game.constants.STATE_PRELOAD, this.game.constants.STATE_MENU, this.game.preloader);

if 5 arguments are passed, a different instance can be used for in transition, preloading, and out transition
E.G.
this.game.transition.add(this.game.constants.STATE_PRELOAD, this.game.constants.STATE_MENU, this.game.transitionOutHandler, this.game.preloadHandler, this.game.transitionInHandler);

transition handlers are expected to behave as follows:
an out transition handler should have a transitionIn method and dispatch a transitionComplete signal when done
an in transition handler should have a transitionOut method and dispatch a transitionCOmplete signal when done
a preload handler should have loadStart, loadProgress, and loadComplete methods
the loadProgress method may accept a up to 4 parameters for progress (percent of files loaded), id, fileIndex, and totalFiles

**Kind**: instance method of <code>[TransitionManager](#module_Dijon..Dijon.TransitionManager)</code>  
**Returns**: <code>Object</code> - transition reference that was added to _transitions  

| Param | Type | Description |
| --- | --- | --- |
| fromState | <code>string</code> | the state being transitioned from |
| toState | <code>string</code> | the state being transitioned to |
| outHandler | <code>outHandler</code> | the instance that will handle the transition from the fromState |
| preloadHandler | <code>preloadHandler</code> | the instance that will handle preloading the toState |
| inHandler | <code>inHandler</code> | the instance that will handle the in transition when the toState is completely loaded |

<a name="module_Dijon..Dijon.TransitionManager+addException"></a>
##### transitionManager.addException(state)
Adds an exception to the Dijon.TransitionManager in the case where 'all' has been used

**Kind**: instance method of <code>[TransitionManager](#module_Dijon..Dijon.TransitionManager)</code>  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>string</code> | the state to add the exception for |

<a name="module_Dijon..Dijon.TransitionManager+remove"></a>
##### transitionManager.remove()
Removes a transition handler for a specific from / to state combination

**Kind**: instance method of <code>[TransitionManager](#module_Dijon..Dijon.TransitionManager)</code>  
<a name="module_Dijon..Dijon.TransitionManager+to"></a>
##### transitionManager.to(state)
Start the transition to a new state

**Kind**: instance method of <code>[TransitionManager](#module_Dijon..Dijon.TransitionManager)</code>  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>string</code> | the state to transition to |

<a name="module_Dijon..Dijon.TransitionManager+transitionOut"></a>
##### transitionManager.transitionOut()
After the state is fully loaded and 'built' a call to this is made
this is currently made from BaseState in the 'afterBuild' method

**Kind**: instance method of <code>[TransitionManager](#module_Dijon..Dijon.TransitionManager)</code>  
<a name="module_Dijon..Dijon.UIGroup"></a>
#### Dijon.UIGroup
**Kind**: static class of <code>[Dijon](#module_Dijon..Dijon)</code>  

* [.UIGroup](#module_Dijon..Dijon.UIGroup)
  * [new Dijon.UIGroup(game, [parent], [name], [addToStage], [components])](#new_module_Dijon..Dijon.UIGroup_new)
  * [._hasComponents](#module_Dijon..Dijon.UIGroup+_hasComponents) : <code>Boolean</code>
  * [._componentKeys](#module_Dijon..Dijon.UIGroup+_componentKeys) : <code>Array</code>
  * [._components](#module_Dijon..Dijon.UIGroup+_components) : <code>Object</code>

<a name="new_module_Dijon..Dijon.UIGroup_new"></a>
##### new Dijon.UIGroup(game, [parent], [name], [addToStage], [components])
Wrapper for Phaser.Group
also adds Entity / Component functionality
calls init and buildInterface() methods after being added


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| game | <code>Phaser.Game</code> |  | reference to the Phaser.Game instance |
| [parent] | <code>object</code> | <code>Phaser.World</code> | reference to this group's parent |
| [name] | <code>String</code> | <code>&#x27;Dijon.UIGroup&#x27;</code> | for debugging purposes |
| [addToStage] | <code>Boolean</code> | <code>false</code> | whether to add to the Phaser.Stage or not |
| [components] | <code>Array</code> | <code></code> | a list of components to attach |

<a name="module_Dijon..Dijon.UIGroup+_hasComponents"></a>
##### uiGroup._hasComponents : <code>Boolean</code>
whether the Dijon.UIGroup has any components (updated when a component is added or removed)

**Kind**: instance property of <code>[UIGroup](#module_Dijon..Dijon.UIGroup)</code>  
<a name="module_Dijon..Dijon.UIGroup+_componentKeys"></a>
##### uiGroup._componentKeys : <code>Array</code>
reference to the component names

**Kind**: instance property of <code>[UIGroup](#module_Dijon..Dijon.UIGroup)</code>  
<a name="module_Dijon..Dijon.UIGroup+_components"></a>
##### uiGroup._components : <code>Object</code>
key / value storage of the components
(this._components[component.name] = component)

**Kind**: instance property of <code>[UIGroup](#module_Dijon..Dijon.UIGroup)</code>  
<a name="module_Dijon..Dijon.UISprite"></a>
#### Dijon.UISprite
**Kind**: static class of <code>[Dijon](#module_Dijon..Dijon)</code>  

* [.UISprite](#module_Dijon..Dijon.UISprite)
  * [new Dijon.UISprite(game, x, y, key, frame, name, [components])](#new_module_Dijon..Dijon.UISprite_new)
  * [.__frameName](#module_Dijon..Dijon.UISprite+__frameName) : <code>String</code>
  * [._hasComponents](#module_Dijon..Dijon.UISprite+_hasComponents) : <code>Boolean</code>
  * [._componentKeys](#module_Dijon..Dijon.UISprite+_componentKeys) : <code>Array</code>
  * [._components](#module_Dijon..Dijon.UISprite+_components) : <code>Object</code>

<a name="new_module_Dijon..Dijon.UISprite_new"></a>
##### new Dijon.UISprite(game, x, y, key, frame, name, [components])
Wrapper for Phaser.Sprite
also adds Entity / Component functionality
calls init and buildInterface() methods after being added


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| game | <code>Phaser.Game</code> |  | reference to the current game |
| x | <code>Number</code> |  | x position |
| y | <code>Number</code> |  | y position |
| key | <code>String</code> |  | texture key |
| frame | <code>String</code> |  | texture frame |
| name | <code>String</code> |  | name (for debugging purposes) |
| [components] | <code>Array</code> | <code></code> | list of components to attach |

<a name="module_Dijon..Dijon.UISprite+__frameName"></a>
##### uiSprite.__frameName : <code>String</code>
reference to the frame (probably unneccessary)

**Kind**: instance property of <code>[UISprite](#module_Dijon..Dijon.UISprite)</code>  
<a name="module_Dijon..Dijon.UISprite+_hasComponents"></a>
##### uiSprite._hasComponents : <code>Boolean</code>
whether the Dijon.UISprite has any components (updated when a component is added or removed)

**Kind**: instance property of <code>[UISprite](#module_Dijon..Dijon.UISprite)</code>  
<a name="module_Dijon..Dijon.UISprite+_componentKeys"></a>
##### uiSprite._componentKeys : <code>Array</code>
reference to the component names

**Kind**: instance property of <code>[UISprite](#module_Dijon..Dijon.UISprite)</code>  
<a name="module_Dijon..Dijon.UISprite+_components"></a>
##### uiSprite._components : <code>Object</code>
key / value storage of the components
(this._components[component.name] = component)

**Kind**: instance property of <code>[UISprite](#module_Dijon..Dijon.UISprite)</code>  
<a name="module_Dijon..Dijon.UIText"></a>
#### Dijon.UIText
**Kind**: static class of <code>[Dijon](#module_Dijon..Dijon)</code>  

* [.UIText](#module_Dijon..Dijon.UIText)
  * [new Dijon.UIText(game, x, y, text, fontName, fontSize, fontColor, [fontAlign], [wordWrap], [width], [settings])](#new_module_Dijon..Dijon.UIText_new)
  * [.DEFAULT_FONT](#module_Dijon..Dijon.UIText.DEFAULT_FONT) : <code>String</code>
  * [.DEFAULT_SIZE](#module_Dijon..Dijon.UIText.DEFAULT_SIZE) : <code>Number</code>

<a name="new_module_Dijon..Dijon.UIText_new"></a>
##### new Dijon.UIText(game, x, y, text, fontName, fontSize, fontColor, [fontAlign], [wordWrap], [width], [settings])
Wrapper for Phaser.Text exposing the parameters usually required in a separate style object


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| game | <code>Phaser.Game</code> |  | reference to the game instance |
| x | <code>Number</code> |  | the x position |
| y | <code>Number</code> |  | the y position |
| text | <code>String</code> |  | the text to use |
| fontName | <code>String</code> |  | the name of the font family to use |
| fontSize | <code>int</code> |  | the size |
| fontColor | <code>String</code> |  | the hexadecimal font color (any css syntax can be used here) |
| [fontAlign] | <code>String</code> | <code>&#x27;left&#x27;</code> | alignment of the text |
| [wordWrap] | <code>Boolean</code> | <code>false</code> | whether the text wraps at the supplied width |
| [width] | <code>Number</code> | <code>100</code> | the width to wrap at |
| [settings] | <code>Object</code> | <code></code> | additional settings appended to the style object |

<a name="module_Dijon..Dijon.UIText.DEFAULT_FONT"></a>
##### UIText.DEFAULT_FONT : <code>String</code>
the default font to use

**Kind**: static property of <code>[UIText](#module_Dijon..Dijon.UIText)</code>  
<a name="module_Dijon..Dijon.UIText.DEFAULT_SIZE"></a>
##### UIText.DEFAULT_SIZE : <code>Number</code>
the default text size

**Kind**: static property of <code>[UIText](#module_Dijon..Dijon.UIText)</code>  
<a name="module_Dijon..Dijon.InvisibleButton"></a>
#### Dijon.InvisibleButton
**Kind**: static class of <code>[Dijon](#module_Dijon..Dijon)</code>  
<a name="new_module_Dijon..Dijon.InvisibleButton_new"></a>
##### new Dijon.InvisibleButton(game, x, y, w, h, name)
Pretty much what it sounds like - sometimes we need to use an invisible button either to overlay a static image, or other reasons...


| Param | Type | Description |
| --- | --- | --- |
| game | <code>Phaser.Game</code> | reference to the current Phaser.Game instance |
| x | <code>Number</code> | the x position |
| y | <code>Number</code> | the y position |
| w | <code>Number</code> | the width of the invisible button |
| h | <code>Number</code> | the height of the invisible button |
| name | <code>String</code> | for debugging purposes |

<a name="module_Dijon..Dijon.BaseMediator"></a>
#### Dijon.BaseMediator
**Kind**: static class of <code>[Dijon](#module_Dijon..Dijon)</code>  
<a name="new_module_Dijon..Dijon.BaseMediator_new"></a>
##### new Dijon.BaseMediator(game, mediatorName, viewComponent, [modelClass], [autoReg])
generic mediator class for communication between the Model and View


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| game | <code>Phaser.Game</code> |  | reference to the current Phaser.Game instance |
| mediatorName | <code>String</code> |  | the name of this mediator |
| viewComponent | <code>Object</code> |  | the view component this mediator will control |
| [modelClass] | <code>Class</code> |  | model class, will instantiate the class if provided |
| [autoReg] | <code>Boolean</code> | <code>true</code> | whether to auto register the mediator using its name (this.game[mediatorName] = mediatorName) |

<a name="module_Dijon..Dijon.CopyModel"></a>
#### Dijon.CopyModel
**Kind**: static class of <code>[Dijon](#module_Dijon..Dijon)</code>  
<a name="new_module_Dijon..Dijon.CopyModel_new"></a>
##### new Dijon.CopyModel(game, [dataKey])
generic model for retrieving copy


| Param | Type | Description |
| --- | --- | --- |
| game | <code>Phaser.Game</code> | reference to the current Phaser.Game |
| [dataKey] | <code>String</code> | Phaser.Cache key to use for this model |

<a name="module_Dijon..Dijon.Model"></a>
#### Dijon.Model
**Kind**: static class of <code>[Dijon](#module_Dijon..Dijon)</code>  
<a name="new_module_Dijon..Dijon.Model_new"></a>
##### new Dijon.Model(game, [dataKey])
a generic model class


| Param | Type | Description |
| --- | --- | --- |
| game | <code>Phaser.Game</code> | reference to the current Phaser.Game |
| [dataKey] | <code>String</code> | Phaser.Cache key to use for this model |

<a name="module_Dijon..Dijon.BaseState"></a>
#### Dijon.BaseState
**Kind**: static class of <code>[Dijon](#module_Dijon..Dijon)</code>  

* [.BaseState](#module_Dijon..Dijon.BaseState)
  * [new Dijon.BaseState()](#new_module_Dijon..Dijon.BaseState_new)
  * [.init()](#module_Dijon..Dijon.BaseState+init)
  * [.preload()](#module_Dijon..Dijon.BaseState+preload)
  * [.create()](#module_Dijon..Dijon.BaseState+create)
  * [.shutdown()](#module_Dijon..Dijon.BaseState+shutdown)
  * [.getPreloadID()](#module_Dijon..Dijon.BaseState+getPreloadID) ⇒ <code>String</code> &#124; <code>null</code>
  * [.getBuildInterval()](#module_Dijon..Dijon.BaseState+getBuildInterval) ⇒ <code>Number</code>
  * [.getBuildSequence()](#module_Dijon..Dijon.BaseState+getBuildSequence) ⇒ <code>Array</code>
  * [.buildInterface()](#module_Dijon..Dijon.BaseState+buildInterface)
  * [.afterBuildInterface()](#module_Dijon..Dijon.BaseState+afterBuildInterface)
  * [.startBuild()](#module_Dijon..Dijon.BaseState+startBuild)
  * [.preAfterBuild()](#module_Dijon..Dijon.BaseState+preAfterBuild)
  * [.afterBuild()](#module_Dijon..Dijon.BaseState+afterBuild)
  * [.addAudio(track)](#module_Dijon..Dijon.BaseState+addAudio) ⇒ <code>Phaser.Sound</code>

<a name="new_module_Dijon..Dijon.BaseState_new"></a>
##### new Dijon.BaseState()
a wrapper for Phaser.State
all game states *except* Boot should extend this

<a name="module_Dijon..Dijon.BaseState+init"></a>
##### baseState.init()
called before anything else

**Kind**: instance method of <code>[BaseState](#module_Dijon..Dijon.BaseState)</code>  
<a name="module_Dijon..Dijon.BaseState+preload"></a>
##### baseState.preload()
preloads our assets
calls the [getPreloadID method](Dijon.BaseState#getPreloadID) to check for an asset list to load

**Kind**: instance method of <code>[BaseState](#module_Dijon..Dijon.BaseState)</code>  
<a name="module_Dijon..Dijon.BaseState+create"></a>
##### baseState.create()
called when assets are all loaded
we hacked this a bit to make sure all sounds are decoded before continuing
checks in the [AssetManager](AssetManager) to see if all the sounds are decoded, then proceeds to call the buildInterface, afterBuildInterface methods and then start the build sequence

**Kind**: instance method of <code>[BaseState](#module_Dijon..Dijon.BaseState)</code>  
<a name="module_Dijon..Dijon.BaseState+shutdown"></a>
##### baseState.shutdown()
shuts down the state (called before switching to a new state)
removes audio and any state properties outside the default Phaser.State props

**Kind**: instance method of <code>[BaseState](#module_Dijon..Dijon.BaseState)</code>  
<a name="module_Dijon..Dijon.BaseState+getPreloadID"></a>
##### baseState.getPreloadID() ⇒ <code>String</code> &#124; <code>null</code>
gets the preload id for this state (optional)

**Kind**: instance method of <code>[BaseState](#module_Dijon..Dijon.BaseState)</code>  
<a name="module_Dijon..Dijon.BaseState+getBuildInterval"></a>
##### baseState.getBuildInterval() ⇒ <code>Number</code>
gets the interval at which to step through the build sequence (in ms)

**Kind**: instance method of <code>[BaseState](#module_Dijon..Dijon.BaseState)</code>  
<a name="module_Dijon..Dijon.BaseState+getBuildSequence"></a>
##### baseState.getBuildSequence() ⇒ <code>Array</code>
gets the build sequence for this state

**Kind**: instance method of <code>[BaseState](#module_Dijon..Dijon.BaseState)</code>  
**Returns**: <code>Array</code> - a list of internal methods to call (usually these methods should just add visual elements to the game world)  
<a name="module_Dijon..Dijon.BaseState+buildInterface"></a>
##### baseState.buildInterface()
called when all assets are loaded and sounds are decoded

**Kind**: instance method of <code>[BaseState](#module_Dijon..Dijon.BaseState)</code>  
<a name="module_Dijon..Dijon.BaseState+afterBuildInterface"></a>
##### baseState.afterBuildInterface()
called after the buildInterface method is called

**Kind**: instance method of <code>[BaseState](#module_Dijon..Dijon.BaseState)</code>  
<a name="module_Dijon..Dijon.BaseState+startBuild"></a>
##### baseState.startBuild()
called after the afterBuildInterface method
runs the methods returned from [getBuildSequence method](Dijon.BaseState#getBuildSequence)
uses the [SequenceManager](SequenceManager) to run these methods

**Kind**: instance method of <code>[BaseState](#module_Dijon..Dijon.BaseState)</code>  
<a name="module_Dijon..Dijon.BaseState+preAfterBuild"></a>
##### baseState.preAfterBuild()
called directly after the build sequence has completed
then calls the [afterBuild method](Dijon.BaseState#afterBuild)

**Kind**: instance method of <code>[BaseState](#module_Dijon..Dijon.BaseState)</code>  
<a name="module_Dijon..Dijon.BaseState+afterBuild"></a>
##### baseState.afterBuild()
called in the [preAfterBuild method](Dijon.BaseState#preAfterBuild), after the build sequence has completed
useful for overriding

**Kind**: instance method of <code>[BaseState](#module_Dijon..Dijon.BaseState)</code>  
<a name="module_Dijon..Dijon.BaseState+addAudio"></a>
##### baseState.addAudio(track) ⇒ <code>Phaser.Sound</code>
use this to add playing sounds to an internal list
all sounds added will be automatically stopped in the shutdown method

**Kind**: instance method of <code>[BaseState](#module_Dijon..Dijon.BaseState)</code>  
**Returns**: <code>Phaser.Sound</code> - the added track  

| Param | Type | Description |
| --- | --- | --- |
| track | <code>Phaser.Sound</code> | the sound to add to the internal list |

<a name="module_Dijon..Dijon.UIText.DEFAULT_COLOR"></a>
#### Dijon.UIText.DEFAULT_COLOR : <code>String</code>
the default text colour

**Kind**: static property of <code>[Dijon](#module_Dijon..Dijon)</code>  
<a name="module_Dijon..Dijon.boot"></a>
#### Dijon.boot(game) ⇒ <code>void</code>
Boot up the library and initialize the manager classes

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  

| Param | Type | Description |
| --- | --- | --- |
| game | <code>Phaser.Game</code> | the global Phaser.Game instance |

<a name="module_Dijon..Dijon.addUtilityMethods"></a>
#### Dijon.addUtilityMethods(game)
_addUtilityMethods adds methods to disable and enable world input

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  

| Param | Type | Description |
| --- | --- | --- |
| game | <code>Phaser.Game</code> | the global Phaser.Game instance |

<a name="module_Dijon..Dijon.UIGroup+update"></a>
#### Dijon.UIGroup#update() ⇒ <code>void</code>
called every frame
iterates the components list and calls component.update() on each component

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  
<a name="module_Dijon..Dijon.UIGroup+destroy"></a>
#### Dijon.UIGroup#destroy() ⇒ <code>Phaser.Group.destroy</code>
removes all components

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  
<a name="module_Dijon..Dijon.UIGroup+_updateComponentKeys"></a>
#### Dijon.UIGroup#_updateComponentKeys() ⇒ <code>void</code>
updates the internal list of component keys (so we don't have to call Object.keys() all the time)

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  
<a name="module_Dijon..Dijon.UIGroup+addComponents"></a>
#### Dijon.UIGroup#addComponents(components)
attaches a list of components to the Dijon.UIGroup

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  

| Param | Type | Description |
| --- | --- | --- |
| components | <code>Array</code> | the list of components to add |

<a name="module_Dijon..Dijon.UIGroup+addComponent"></a>
#### Dijon.UIGroup#addComponent(component)
attaches a component to the Dijon.UIGroup

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  

| Param | Type | Description |
| --- | --- | --- |
| component | <code>Dijon.BaseComponent</code> | to be attached |

<a name="module_Dijon..Dijon.UIGroup+removeAllComponents"></a>
#### Dijon.UIGroup#removeAllComponents() ⇒ <code>void</code>
removes all the components currently attached

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  
<a name="module_Dijon..Dijon.UIGroup+removeComponent"></a>
#### Dijon.UIGroup#removeComponent(componentName) ⇒ <code>void</code>
removes a specific component

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  

| Param | Type | Description |
| --- | --- | --- |
| componentName | <code>String</code> | the name of the component to remove |

<a name="module_Dijon..Dijon.UIGroup+updateComponent"></a>
#### Dijon.UIGroup#updateComponent(componentName) ⇒ <code>void</code>
updates an attached component (calls component.update())

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  

| Param | Type | Description |
| --- | --- | --- |
| componentName | <code>String</code> | the name of the component to update |

<a name="module_Dijon..Dijon.UISprite+update"></a>
#### Dijon.UISprite#update() ⇒ <code>void</code>
called every frame
iterates the components list and calls component.update() on each component

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  
<a name="module_Dijon..Dijon.UISprite+destroy"></a>
#### Dijon.UISprite#destroy() ⇒ <code>Phaser.Sprite.destroy</code>
removes all components

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  
<a name="module_Dijon..Dijon.UISprite+_updateComponentKeys"></a>
#### Dijon.UISprite#_updateComponentKeys() ⇒ <code>void</code>
updates the internal list of component keys (so we don't have to call Object.keys() all the time)

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  
<a name="module_Dijon..Dijon.UISprite+init"></a>
#### Dijon.UISprite#init() ⇒ <code>void</code>
called during instantiation
use to define internal variables set up

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  
<a name="module_Dijon..Dijon.UISprite+buildInterface"></a>
#### Dijon.UISprite#buildInterface() ⇒ <code>void</code>
called during instantiation
called after init
use to add visual elements

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  
<a name="module_Dijon..Dijon.UISprite+addComponents"></a>
#### Dijon.UISprite#addComponents(components)
attaches a list of components to the Dijon.UISprite

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  

| Param | Type | Description |
| --- | --- | --- |
| components | <code>Array</code> | the list of components to add |

<a name="module_Dijon..Dijon.UISprite+addComponent"></a>
#### Dijon.UISprite#addComponent(component)
attaches a component to the Dijon.UISprite

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  

| Param | Type | Description |
| --- | --- | --- |
| component | <code>Dijon.BaseComponent</code> | to be attached |

<a name="module_Dijon..Dijon.UISprite+removeAllComponents"></a>
#### Dijon.UISprite#removeAllComponents() ⇒ <code>void</code>
removes all the components currently attached

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  
<a name="module_Dijon..Dijon.UISprite+removeComponent"></a>
#### Dijon.UISprite#removeComponent(componentName) ⇒ <code>void</code>
removes a specific component

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  

| Param | Type | Description |
| --- | --- | --- |
| componentName | <code>String</code> | the name of the component to remove |

<a name="module_Dijon..Dijon.UISprite+updateComponent"></a>
#### Dijon.UISprite#updateComponent(componentName) ⇒ <code>void</code>
updates an attached component (calls component.update())

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  

| Param | Type | Description |
| --- | --- | --- |
| componentName | <code>String</code> | the name of the component to update |

<a name="module_Dijon..Dijon.UIText+setColor"></a>
#### Dijon.UIText#setColor(color) ⇒ <code>Dijon.UIText.highlightPhrase</code>
sets the color of the entire text

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  
**Returns**: <code>Dijon.UIText.highlightPhrase</code> - calls the highlightPhrase method and "highlights" the entire text string  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>String</code> | css color string (such as "#ff0000") |

<a name="module_Dijon..Dijon.UIText+resetColor"></a>
#### Dijon.UIText#resetColor() ⇒ <code>Dijon.UIText.highlightPhrase</code>
resets the color to the original fill color

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  
**Returns**: <code>Dijon.UIText.highlightPhrase</code> - calls the highlightPhrase method and "highlights" the entire text string  
<a name="module_Dijon..Dijon.UIText+highlightPhrase"></a>
#### Dijon.UIText#highlightPhrase(phrase, color, [caseSensitive]) ⇒ <code>void</code>
changes the colour of a portion of the text

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| phrase | <code>String</code> |  | the phrase within the text to change |
| color | <code>String</code> |  | css color string (such as "#ff0000") |
| [caseSensitive] | <code>Boolean</code> | <code>false</code> | whether the search for the phrase within this text should be case sensitive |

<a name="module_Dijon..Dijon.UIText+animate"></a>
#### Dijon.UIText#animate([letterTime], [delay])
animates the text in by revealing each character in sequence

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [letterTime] | <code>Number</code> | <code>0.1</code> | the time (in seconds) between each character |
| [delay] | <code>int</code> | <code>0</code> | the delay before starting the animation |

<a name="module_Dijon..Dijon.UIText+stopAnimating"></a>
#### Dijon.UIText#stopAnimating() ⇒ <code>void</code>
stops the text animation and clears the timers

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  
<a name="module_Dijon..Dijon.InvisibleButton+init"></a>
#### Dijon.InvisibleButton#init() ⇒ <code>void</code>
sets the input enabled

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  
<a name="module_Dijon..Dijon.InvisibleButton+buildInterface"></a>
#### Dijon.InvisibleButton#buildInterface() ⇒ <code>void</code>
adds the hit rectangle with the specified size

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  
<a name="module_Dijon..Dijon.InvisibleButton+setSize"></a>
#### Dijon.InvisibleButton#setSize(w, h)
sets the size of the invisible buton

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  

| Param | Type | Description |
| --- | --- | --- |
| w | <code>Number</code> | the width |
| h | <code>Number</code> | the height |

<a name="module_Dijon..Dijon.BaseMediator+_createModel"></a>
#### Dijon.BaseMediator#_createModel(ModelClass)
creates a model class - calls the [setModel method](Dijon.BaseMediator#setModel)

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ModelClass | <code>Class</code> | the model to create |

<a name="module_Dijon..Dijon.BaseMediator+_addSignal"></a>
#### Dijon.BaseMediator#_addSignal(signalName)
adds a signal by name

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  

| Param | Type | Description |
| --- | --- | --- |
| signalName | <code>String</code> | the name of the signal to add |

<a name="module_Dijon..Dijon.BaseMediator+createSignals"></a>
#### Dijon.BaseMediator#createSignals()
creates a signal for each argument passed

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  
<a name="module_Dijon..Dijon.BaseMediator+setViewComponent"></a>
#### Dijon.BaseMediator#setViewComponent(viewComponent)
sets the view component of this mediator
called from the constructor, but may need to be called again, as the mediator may persist, but the view component may not

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  

| Param | Type | Description |
| --- | --- | --- |
| viewComponent | <code>Object</code> | the view component to be used by this mediator |

<a name="module_Dijon..Dijon.BaseMediator+setModel"></a>
#### Dijon.BaseMediator#setModel(model)
sets a model to communicate with

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  

| Param | Type | Description |
| --- | --- | --- |
| model | <code>Object</code> | the model this mediator will communicate with |

<a name="module_Dijon..Dijon.BaseMediator+getCopy"></a>
#### Dijon.BaseMediator#getCopy(group, id) ⇒ <code>String</code>
interfaces with the game's [copy model](CopyModel) and wraps the [CopyModel getCopy method](CopyModel#getCopy)

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  
**Returns**: <code>String</code> - the copy  

| Param | Type | Description |
| --- | --- | --- |
| group | <code>String</code> | the id of the group |
| id | <code>String</code> | the id of the item in the group |

<a name="module_Dijon..Dijon.BaseMediator+release"></a>
#### Dijon.BaseMediator#release()
releases the mediator from the game and the view component

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  
<a name="module_Dijon..Dijon.CopyModel+getCopy"></a>
#### Dijon.CopyModel#getCopy(groupId, itemId) ⇒ <code>String</code>
retrieves a copy item

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  
**Returns**: <code>String</code> - the copy (a single string)  

| Param | Type | Description |
| --- | --- | --- |
| groupId | <code>String</code> | id of the copy group |
| itemId | <code>String</code> | id of the item within that group |

<a name="module_Dijon..Dijon.CopyModel+getCopyGroup"></a>
#### Dijon.CopyModel#getCopyGroup(groupId) ⇒ <code>Object</code>
retrieves a full copy group, usually in case we want to do some manipulation in a view

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  
**Returns**: <code>Object</code> - the full copy group  

| Param | Type | Description |
| --- | --- | --- |
| groupId | <code>String</code> | id of the copy group |

<a name="module_Dijon..Dijon.Model+setData"></a>
#### Dijon.Model#setData(dataKey)
sets the data - gets some data from the Phaser.Cache and uses it
assumes it's a json file

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  

| Param | Type | Description |
| --- | --- | --- |
| dataKey | <code>String</code> | the key for pulling data from the Phaser.Cache |

<a name="module_Dijon..Dijon.Model+getData"></a>
#### Dijon.Model#getData() ⇒ <code>Object</code>
retrieves the data

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  
**Returns**: <code>Object</code> - the data  
<a name="module_Dijon..Dijon.Model+parseData"></a>
#### Dijon.Model#parseData(data) ⇒ <code>Object</code>
parses the data

**Kind**: static method of <code>[Dijon](#module_Dijon..Dijon)</code>  
**Returns**: <code>Object</code> - the parsed data  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>String</code> | the data to parse (assumes it's a json string) |

