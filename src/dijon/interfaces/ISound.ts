export interface ISound {
    isAudioSprite?: boolean;
    url?: string;
    key?: string;
    __isAudioSprite?: boolean;
    eventToDispatch?: Phaser.Signal;
    decoded?: boolean;
}