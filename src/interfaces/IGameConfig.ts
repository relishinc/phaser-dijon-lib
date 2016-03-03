/// <reference path="../lib.d.ts" />

module dijon.interfaces {
    export interface IGameConfig extends Phaser.IGameConfig {
        resolution?: number;
        analytics?: boolean;
        plugins?: string[];
    }
}