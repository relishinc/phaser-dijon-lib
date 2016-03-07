import Game from './Game';
import Sprite from '../display/Sprite';
import Group from '../display/Group';
export default class Component {
    game: Game;
    name: string;
    owner: any;
    constructor();
    setOwner(owner: Sprite | Group): void;
    init(): void;
    buildInterface(): void;
    update(): void;
    destroy(): void;
}
