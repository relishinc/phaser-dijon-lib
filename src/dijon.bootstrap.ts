/// <reference path="../typings/tsd.d.ts" />
export function bootstrap() {
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
     * Centers the pivot point
     */
    PIXI.DisplayObject.prototype.centerPivot = function() {
        this.pivot.set(this.getBounds().width >> 1, this.getBounds().height >> 1);
    };

    /**
     * Sets the location of the pivot point
     * @param {String} pivotLocation one of 'center', 'r', 'l', 't', 'b', 'tl', 'tr', 'bl', 'br'
     */
    PIXI.DisplayObject.prototype.setPivot = function(pivotLocation) {
        var w: number = this.getBounds().width;//this instanceof Phaser.Group ? this.width : this.realWidth;
        var h: number = this.getBounds().height;//this instanceof Phaser.Group ? this.height : this.realHeight;
        switch (pivotLocation.toLowerCase()) {
            case PIXI.DisplayObject.PIVOT_CENTER:
                this.centerPivot();
                break;
            case PIXI.DisplayObject.PIVOT_RIGHT:
                this.pivot.set(w, h >> 1);
                break;
            case PIXI.DisplayObject.PIVOT_LEFT:
                this.pivot.set(0, h >> 1);
                break;
            case PIXI.DisplayObject.PIVOT_TOP:
                this.pivot.set(w >> 1, 0);
                break;
            case PIXI.DisplayObject.PIVOT_BOTTOM:
                this.pivot.set(w >> 1, h);
                break;
            case PIXI.DisplayObject.PIVOT_TOP_LEFT:
                this.pivot.set(0, 0);
                break;
            case PIXI.DisplayObject.PIVOT_TOP_RIGHT:
                this.pivot.set(w, 0);
                break;
            case PIXI.DisplayObject.PIVOT_BOTTOM_LEFT:
                this.pivot.set(0, h);
                break;
            case PIXI.DisplayObject.PIVOT_BOTTOM_RIGHT:
                this.pivot.set(w, h);
                break;
        }
    };

    /**
     * addOverSound adds a hover sound to any displayObject
     * @param {String} marker the sound marker to play
     * @param {Number} volume the volume of the sound
     */
    PIXI.DisplayObject.prototype.addOverSound = function(marker, volume) {
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
    PIXI.DisplayObject.prototype.addOutSound = function(marker, volume) {
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
    PIXI.DisplayObject.prototype.addDownSound = function(marker, volume) {
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
    PIXI.DisplayObject.prototype.playOverSound = function() {
        if (this.overSound && this.overSound.isPlaying) {
            this.overSound.stop();
        }
        if (this.outSound && this.outSound.isPlaying) {
            this.outSound.stop();
        }
        if (typeof this.overSoundMarker === 'undefined') {
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
    PIXI.DisplayObject.prototype.playOutSound = function() {
        this.stopSounds();
        if (typeof this.outSoundMarker === 'undefined') {
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
    PIXI.DisplayObject.prototype.playDownSound = function() {
        this.stopSounds();
        if (typeof this.downSoundMarker === 'undefined') {
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
    PIXI.DisplayObject.prototype.stopSounds = function() {
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



    /**
     * PHASER FRAMEWORK FIXES FOR @2X RESOLLUTION
     */
    Phaser.Text.prototype.updateText = function() {
        this.texture.baseTexture.resolution = this.resolution;

        this.context.font = this.style.font;

        var outputText = this.text;

        if (this.style.wordWrap) {
            outputText = this.runWordWrap(this.text);
        }

        //split text into lines
        var lines = outputText.split(/(?:\r\n|\r|\n)/);

        //calculate text width
        var lineWidths = [];
        var maxLineWidth = 0;
        var fontProperties = this.determineFontProperties(this.style.font);

        for (var i = 0; i < lines.length; i++) {
            var lineWidth = this.context.measureText(lines[i]).width + this.padding.x;
            lineWidths[i] = lineWidth;
            maxLineWidth = Math.max(maxLineWidth, lineWidth);
        }

        var width = maxLineWidth + this.style.strokeThickness;

        this.canvas.width = width * this.resolution;

        //calculate text height
        var lineHeight = fontProperties.fontSize + this.style.strokeThickness + this.padding.y;
        var height = lineHeight * lines.length;
        var lineSpacing = this._lineSpacing;

        if (lineSpacing < 0 && Math.abs(lineSpacing) > lineHeight) {
            lineSpacing = -lineHeight;
        }

        //  Adjust for line spacing
        if (lineSpacing !== 0) {
            var diff = lineSpacing * (lines.length - 1);
            height += diff;
        }

        this.canvas.height = height * this.resolution;

        this.context.scale(this.resolution, this.resolution);

        if (navigator['isCocoonJS']) {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }

        if (this.style.backgroundColor) {
            this.context.fillStyle = this.style.backgroundColor;
            this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }

        this.context.fillStyle = this.style.fill;
        this.context.font = this.style.font;
        this.context.strokeStyle = this.style.stroke;
        this.context.textBaseline = 'alphabetic';
        this.context.shadowOffsetX = this.style.shadowOffsetX;
        this.context.shadowOffsetY = this.style.shadowOffsetY;
        this.context.shadowColor = this.style.shadowColor;
        this.context.shadowBlur = this.style.shadowBlur;
        this.context.lineWidth = this.style.strokeThickness;
        this.context.lineCap = 'round';
        this.context.lineJoin = 'round';

        var linePositionX;
        var linePositionY;

        this._charCount = 0;

        //  Draw text line by line
        for (i = 0; i < lines.length; i++) {
            linePositionX = this.style.strokeThickness / 2;
            linePositionY = (this.style.strokeThickness / 2 + i * lineHeight) + fontProperties.ascent;

            if (i > 0) {
                linePositionY += (lineSpacing * i);
            }

            if (this.style.align === 'right') {
                linePositionX += maxLineWidth - lineWidths[i];
            } else if (this.style.align === 'center') {
                linePositionX += (maxLineWidth - lineWidths[i]) / 2;
            }

            if (this.colors.length > 0) {
                this.updateLine(lines[i], linePositionX, linePositionY);
            } else {
                if (this.style.stroke && this.style.strokeThickness) {
                    this.context.strokeText(lines[i], linePositionX, linePositionY);
                }

                if (this.style.fill) {
                    this.context.fillText(lines[i], linePositionX, linePositionY);
                }
            }

        }

        this.updateTexture();
    };


    /**
     * Updates texture size based on canvas size
     *
     * @private
     */
    Phaser.Text.prototype.updateTexture = function() {
        this.texture.baseTexture.resolution = this.resolution;

        this.texture.baseTexture.width = this.canvas.width;
        this.texture.baseTexture.height = this.canvas.height;

        this.texture.crop.width = this.texture.frame.width = this.canvas.width;
        this.texture.crop.height = this.texture.frame.height = this.canvas.height;

        this._width = this.canvas.width / this.resolution;
        this._height = this.canvas.height / this.resolution;

        // update the dirty base textures
        this.texture.baseTexture.dirty();
        this.dirty = false;
    };

    Phaser.Text.prototype.getBounds = function(): PIXI.Rectangle {
        if (this.dirty) {
            this.updateText();
        }
        var width = this._width;
        var height = this._height;

        var w0 = width * (1 - this.anchor.x);
        var w1 = width * -this.anchor.x;

        var h0 = height * (1 - this.anchor.y);
        var h1 = height * -this.anchor.y;

        var worldTransform = this.worldTransform;

        var a = worldTransform.a;
        var b = worldTransform.b;
        var c = worldTransform.c;
        var d = worldTransform.d;
        var tx = worldTransform.tx;
        var ty = worldTransform.ty;

        var maxX = -Infinity;
        var maxY = -Infinity;

        var minX = Infinity;
        var minY = Infinity;

        if (b === 0 && c === 0) {
            // scale may be negative!
            if (a < 0) a *= -1;
            if (d < 0) d *= -1;

            // this means there is no rotation going on right? RIGHT?
            // if thats the case then we can avoid checking the bound values! yay
            minX = a * w1 + tx;
            maxX = a * w0 + tx;
            minY = d * h1 + ty;
            maxY = d * h0 + ty;
        } else {
            var x1 = a * w1 + c * h1 + tx;
            var y1 = d * h1 + b * w1 + ty;

            var x2 = a * w0 + c * h1 + tx;
            var y2 = d * h1 + b * w0 + ty;

            var x3 = a * w0 + c * h0 + tx;
            var y3 = d * h0 + b * w0 + ty;

            var x4 = a * w1 + c * h0 + tx;
            var y4 = d * h0 + b * w1 + ty;

            minX = x1 < minX ? x1 : minX;
            minX = x2 < minX ? x2 : minX;
            minX = x3 < minX ? x3 : minX;
            minX = x4 < minX ? x4 : minX;

            minY = y1 < minY ? y1 : minY;
            minY = y2 < minY ? y2 : minY;
            minY = y3 < minY ? y3 : minY;
            minY = y4 < minY ? y4 : minY;

            maxX = x1 > maxX ? x1 : maxX;
            maxX = x2 > maxX ? x2 : maxX;
            maxX = x3 > maxX ? x3 : maxX;
            maxX = x4 > maxX ? x4 : maxX;

            maxY = y1 > maxY ? y1 : maxY;
            maxY = y2 > maxY ? y2 : maxY;
            maxY = y3 > maxY ? y3 : maxY;
            maxY = y4 > maxY ? y4 : maxY;
        }

        var bounds = this._bounds;

        bounds.x = minX;
        bounds.width = maxX - minX;

        bounds.y = minY;
        bounds.height = maxY - minY;

        // store a reference so that if this function gets called again in the render cycle we do not have to recalculate
        this._currentBounds = bounds;

        return <PIXI.Rectangle>bounds;
    };

    Phaser.Text.prototype.setShadow = function(x, y, color, blur, shadowStroke, shadowFill) {
        var divisor = this.game.resolution == 1 ? 2 : this.game.resolution;

        if (x === undefined) {
            x = 0;
        }
        if (y === undefined) {
            y = 0;
        }
        if (color === undefined) {
            color = 'rgba(0, 0, 0, 1)';
        }
        if (blur === undefined) {
            blur = 0;
        }
        if (shadowStroke === undefined) {
            shadowStroke = true;
        }
        if (shadowFill === undefined) {
            shadowFill = true;
        }



        x = x / divisor;
        y = y / divisor;
        blur = blur / divisor;

        this.style.shadowOffsetX = x;
        this.style.shadowOffsetY = y;
        this.style.shadowColor = color;
        this.style.shadowBlur = blur;
        this.style.shadowStroke = shadowStroke;
        this.style.shadowFill = shadowFill;
        this.dirty = true;

        return this;
    };
    
    /**
    * Returns the bounds of the Sprite as a rectangle. The bounds calculation takes the worldTransform into account.
    *
    * @method getBounds
    * @param matrix {Matrix} the transformation matrix of the sprite
    * @return {Rectangle} the framing rectangle
    */
    PIXI.Sprite.prototype.getBounds = function(matrix) {
        var width = this.texture.frame.width / this.texture.baseTexture.resolution;
        var height = this.texture.frame.height / this.texture.baseTexture.resolution;

        var w0 = width * (1 - this.anchor.x);
        var w1 = width * -this.anchor.x;

        var h0 = height * (1 - this.anchor.y);
        var h1 = height * -this.anchor.y;

        var worldTransform = this.worldTransform;

        var a = worldTransform.a;
        var b = worldTransform.b;
        var c = worldTransform.c;
        var d = worldTransform.d;
        var tx = worldTransform.tx;
        var ty = worldTransform.ty;

        var maxX = -Infinity;
        var maxY = -Infinity;

        var minX = Infinity;
        var minY = Infinity;

        if (b === 0 && c === 0) {
            // scale may be negative!
            if (a < 0) a *= -1;
            if (d < 0) d *= -1;

            // this means there is no rotation going on right? RIGHT?
            // if thats the case then we can avoid checking the bound values! yay
            minX = a * w1 + tx;
            maxX = a * w0 + tx;
            minY = d * h1 + ty;
            maxY = d * h0 + ty;
        } else {
            var x1 = a * w1 + c * h1 + tx;
            var y1 = d * h1 + b * w1 + ty;

            var x2 = a * w0 + c * h1 + tx;
            var y2 = d * h1 + b * w0 + ty;

            var x3 = a * w0 + c * h0 + tx;
            var y3 = d * h0 + b * w0 + ty;

            var x4 = a * w1 + c * h0 + tx;
            var y4 = d * h0 + b * w1 + ty;

            minX = x1 < minX ? x1 : minX;
            minX = x2 < minX ? x2 : minX;
            minX = x3 < minX ? x3 : minX;
            minX = x4 < minX ? x4 : minX;

            minY = y1 < minY ? y1 : minY;
            minY = y2 < minY ? y2 : minY;
            minY = y3 < minY ? y3 : minY;
            minY = y4 < minY ? y4 : minY;

            maxX = x1 > maxX ? x1 : maxX;
            maxX = x2 > maxX ? x2 : maxX;
            maxX = x3 > maxX ? x3 : maxX;
            maxX = x4 > maxX ? x4 : maxX;

            maxY = y1 > maxY ? y1 : maxY;
            maxY = y2 > maxY ? y2 : maxY;
            maxY = y3 > maxY ? y3 : maxY;
            maxY = y4 > maxY ? y4 : maxY;
        }

        var bounds = this._bounds;

        bounds.x = minX;
        bounds.width = maxX - minX;

        bounds.y = minY;
        bounds.height = maxY - minY;

        // store a reference so that if this function gets called again in the render cycle we do not have to recalculate
        this._currentBounds = bounds;

        return <PIXI.Rectangle>bounds;
    };

    /**
    * 
    * @method generateTilingTexture
    * 
    * @param forcePowerOfTwo {Boolean} Whether we want to force the texture to be a power of two
    * @param renderSession {RenderSession} 
    */
    PIXI.TilingSprite.prototype.generateTilingTexture = function(forcePowerOfTwo, renderSession) {
        if (!this.texture.baseTexture.hasLoaded) {
            return;
        }

        var texture = this.texture;
        var resolution = this.texture.baseTexture.resolution;
        var frame = texture.frame;

        if (resolution !== 1) {
            frame.width /= resolution;
            frame.height /= resolution;
        }

        var targetWidth = this._frame.sourceSizeW;
        var targetHeight = this._frame.sourceSizeH;

        var dx = 0;
        var dy = 0;

        if (this._frame.trimmed) {
            dx = this._frame.spriteSourceSizeX;
            dy = this._frame.spriteSourceSizeY;
        }

        if (forcePowerOfTwo) {
            targetWidth = PIXI.getNextPowerOfTwo(targetWidth);
            targetHeight = PIXI.getNextPowerOfTwo(targetHeight);
        }

        if (this.canvasBuffer) {
            this.canvasBuffer.resize(targetWidth, targetHeight);
            this.tilingTexture.baseTexture.width = targetWidth;
            this.tilingTexture.baseTexture.height = targetHeight;
            this.tilingTexture.needsUpdate = true;
        }
        else {
            this.canvasBuffer = new PIXI.CanvasBuffer(targetWidth, targetHeight);
            this.tilingTexture = PIXI.Texture.fromCanvas(this.canvasBuffer.canvas);
            this.tilingTexture.isTiling = true;
            this.tilingTexture.needsUpdate = true;
        }

        if (this.textureDebug) {
            this.canvasBuffer.context.strokeStyle = '#00ff00';
            this.canvasBuffer.context.strokeRect(0, 0, targetWidth, targetHeight);
        }

        //  If a sprite sheet we need this:
        var w = texture.crop.width;
        var h = texture.crop.height;

        if (w !== targetWidth || h !== targetHeight) {
            w = targetWidth;
            h = targetHeight;
        }

        this.canvasBuffer.context.drawImage(texture.baseTexture.source,
            texture.crop.x,
            texture.crop.y,
            texture.crop.width,
            texture.crop.height,
            dx,
            dy,
            w,
            h);

        this.tileScaleOffset.x = frame.width / targetWidth;
        this.tileScaleOffset.y = frame.height / targetHeight;

        this.refreshTexture = false;

        this.tilingTexture.baseTexture._powerOf2 = true;

    };
    /**
    * Tests if the pointer hits the given object.
    *
    * @method Phaser.Input#hitTest
    * @param {DisplayObject} displayObject - The displayObject to test for a hit.
    * @param {Phaser.Pointer} pointer - The pointer to use for the test.
    * @param {Phaser.Point} localPoint - The local translated point.
    */
    Phaser.Input.prototype.hitTest = function(displayObject, pointer, localPoint) {

        if (!displayObject.worldVisible) {
            return false;
        }

        this.getLocalPosition(displayObject, pointer, this._localPoint);

        localPoint.copyFrom(this._localPoint);

        if (displayObject.hitArea && displayObject.hitArea.contains) {
            return (displayObject.hitArea.contains(this._localPoint.x, this._localPoint.y));
        }
        else if (displayObject instanceof Phaser.TileSprite) {
            var width = displayObject.width;
            var height = displayObject.height;
            var x1 = -width * displayObject.anchor.x;

            if (this._localPoint.x >= x1 && this._localPoint.x < x1 + width) {
                var y1 = -height * displayObject.anchor.y;

                if (this._localPoint.y >= y1 && this._localPoint.y < y1 + height) {
                    return true;
                }
            }
        }
        else if (displayObject instanceof PIXI.Sprite) {
            var width = displayObject.texture.frame.width / displayObject.texture.baseTexture.resolution;
            var height = displayObject.texture.frame.height / displayObject.texture.baseTexture.resolution;;
            var x1 = -width * displayObject.anchor.x;

            if (this._localPoint.x >= x1 && this._localPoint.x < x1 + width) {
                var y1 = -height * displayObject.anchor.y;

                if (this._localPoint.y >= y1 && this._localPoint.y < y1 + height) {
                    return true;
                }
            }
        }
        else if (displayObject instanceof Phaser.Graphics) {
            for (var i = 0; i < displayObject.graphicsData.length; i++) {
                var data = displayObject.graphicsData[i];

                if (!data.fill) {
                    continue;
                }

                //  Only deal with fills..
                if (data.shape && data.shape.contains(this._localPoint.x, this._localPoint.y)) {
                    return true;
                }
            }
        }

        //  Didn't hit the parent, does it have any children?

        for (var i = 0, len = displayObject.children.length; i < len; i++) {
            if (this.hitTest(displayObject.children[i], pointer, localPoint)) {
                return true;
            }
        }

        return false;
    }
    
    Object.defineProperty(PIXI.DisplayObject.prototype, 'realWidth', {

        get: function() {
            return this.scale.x * this.texture.frame.width / this.texture.baseTexture.resolution;
        }

    });

    /**
     * The height of the sprite, setting this will actually modify the scale to achieve the value set
     *
     * @property height
     * @type Number
     */
    Object.defineProperty(PIXI.DisplayObject.prototype, 'realHeight', {

        get: function() {
            return this.scale.y * this.texture.frame.height / this.texture.baseTexture.resolution;
        }

    });
}