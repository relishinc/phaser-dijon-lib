export interface IGameConfig extends Phaser.IGameConfig {
    resolution?: number;
    analytics?: boolean;
    plugins?: string[];
}