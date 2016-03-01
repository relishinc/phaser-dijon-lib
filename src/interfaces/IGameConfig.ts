/// <reference path="../lib.d.ts" />

module dijon.interfaces {
    export interface IGameConfig extends Phaser.IGameConfig {
        resolution?: number;
        stats?: boolean;
        analytics?: boolean;
        plugins?: string[];
    }
}