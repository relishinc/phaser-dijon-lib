import { Application } from '../application';
import { Game } from '../core';
import { Group, Text } from '../display';
import { Placeholders, Textures } from '../utils';

/**
 *  Log will write to the standard console as well as a visual one and handle showing and hiding it.
 *  @author Galen Manuel
 */
export class Log {
    private static MAX_LOG_LINES: number = 22;
    private static LINE_SPACING: number = 5;

    private static static_logLines: string[] = null;
    private static static_logLinesText: Text[] = null;
    private static static_backOffset: number = 0;
    private static static_window: Group = null;
    private static static_windowBG: Phaser.Image = null;
    private static static_gameInstance: Game = null;
    private static static_gameHalfHeight: number = 0;

    /* PUBLIC FUNCTIONS */
    public static init() {
        // Create our internal components
        this.static_logLines = new Array<string>();
        this.static_logLinesText = new Array<Text>();
        this.static_gameInstance = Application.getInstance().game;
        this.static_gameHalfHeight = this.static_gameInstance.height * 0.5 | 0;

        this._createWindowGroup();
    }

    public static show(): void {
        if (!Application.static_debugMode) {
            return;
        }
        this.static_window.y = this.static_gameHalfHeight;
        this.static_window.visible = true;
    }

    public static hide(): void {
        if (!Application.static_debugMode) {
            return;
        }
        this.static_window.y = this.static_gameInstance.height;
        this.static_window.visible = false;
    }

    public static debug(pLine: string, ...pOptionalParams: any[]): void {
        if (!Application.static_debugMode) {
            return;
        }

        // Standard console.log
        if (pOptionalParams.length === 0) {
            console.log(pLine);
        }
        else {
            console.log(pLine, pOptionalParams);
        }    

        // TODO: Figure out how pOptionalParams is handled by console.log
        var optionalParamsString = "";

        for (var cnt = 0; cnt < pOptionalParams.length; cnt++) {
            var element = pOptionalParams[cnt];
            optionalParamsString += " ";
            optionalParamsString += element.toString();
        }
        
        // Add the line
        if (pLine === null) {
            pLine = "null";
        }
        else if (pLine === undefined) {
            pLine = "undefined";
        }
        
        this.static_logLines.push(pLine + optionalParamsString);

        // Update the _window if visible
        this._addLine(this.static_logLines.length, '#ffffff');
    }

    public static warn(pLine: string, ...pOptionalParams: any[]): void {
        if (!Application.static_debugMode) {
            return;
        }

        // Standard console.warn
        if (pOptionalParams.length === 0) {
            console.warn(pLine);
        }
        else {
            console.warn(pLine, pOptionalParams);
        } 

        // TODO: Figure out how pOptionalParams is handled by console.warn
        var optionalParamsString = "";

        for (var cnt = 0; cnt < pOptionalParams.length; cnt++) {
            var element = pOptionalParams[cnt];
            optionalParamsString += " ";
            optionalParamsString += element.toString();
        }

        // Add the line
        if (pLine === null) {
            pLine = "null";
        }
        else if (pLine === undefined) {
            pLine = "undefined";
        }

        this.static_logLines.push(pLine + optionalParamsString);

        // Update the _window if visible
        this._addLine(this.static_logLines.length, '#ffff00');
    }

    public static error(pLine: string, ...pOptionalParams: any[]): void {
        if (!Application.static_debugMode) {
            return;
        }

        // Standard console.error
        if (pOptionalParams.length === 0) {
            console.error(pLine);
        }
        else {
            console.error(pLine, pOptionalParams);
        } 

        // TODO: Figure out how pOptionalParams is handled by console.error
        var optionalParamsString = "";

        for (var cnt = 0; cnt < pOptionalParams.length; cnt++) {
            var element = pOptionalParams[cnt];
            optionalParamsString += " ";
            optionalParamsString += element.toString();
        }

        // Add the line
        if (pLine === null) {
            pLine = "null";
        }
        else if (pLine === undefined) {
            pLine = "undefined";
        }

        this.static_logLines.push(pLine + optionalParamsString);

        // Update the _window if visible
        this._addLine(this.static_logLines.length, '#ff0000');
    }

    public static isVisible(): boolean {
        return this.static_window.visible;
    }

    /* PRIVATE FUNCTIONS */
    private static _createWindowGroup(): void {
        this.static_window = this.static_gameInstance.addToStage.dGroup(0, this.static_gameInstance.height, "Log Window");
        this.static_windowBG = <Phaser.Image>this.static_window.addChild(Placeholders.image(0, this.static_gameHalfHeight, Textures.rect(this.static_gameInstance.width, this.static_gameHalfHeight, 0x000000, 0.7, true), "BG"));
        this.static_windowBG.anchor.set(0, 1);
        this.static_window.visible = false;
    }

    private static _addLine(pIndex: number, pColor: string): void {
        console.log("displaying", this.static_logLines[pIndex - 1]);
        // create the text object
        const logLine = new Text(5, 0, this.static_logLines[pIndex - 1], 'Arial', 14, pColor, 'left', true, this.static_gameInstance.width - 10);
        logLine.anchor.set(0, 1);
        logLine.name = "LogLine" + pIndex;
        // add in to the Window and position
        this.static_windowBG.addChild(logLine);
        this.static_logLinesText.push(logLine);
        // shift all other lines up
        for (var cnt = this.static_windowBG.children.length - 2; cnt >= 0; --cnt) {
            let line = <Text>this.static_windowBG.getChildAt(cnt);
            line.y -= logLine.realHeight - this.LINE_SPACING;

            // hide those that are too high
            if (Math.abs(line.y - 5 + line.realHeight) >= this.static_gameHalfHeight - line.realHeight - 10) {
                this.static_logLines[this.static_backOffset] = null;
                this.static_logLinesText[this.static_backOffset].destroy();
                this.static_logLinesText[this.static_backOffset] = null;

                if (++this.static_backOffset * 2 >= this.static_logLines.length) {
                    this.static_logLines = this.static_logLines.slice(this.static_backOffset);
                    console.log(this.static_logLines);
                    this.static_logLinesText = this.static_logLinesText.slice(this.static_backOffset);
                    console.log(this.static_logLinesText);
                    this.static_backOffset = 0;
                }
            }
        }
        
    }
}