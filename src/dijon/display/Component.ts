import {Application} from '../application';
import {Game} from '../core';
import {Sprite, Group} from '../display';

export class Component {
    public game: Game;
    public name: string;
    public owner: any;

    constructor() {
        this.game = Application.getInstance().game;
        this.name = 'Component';
    }

    public setOwner(owner: Sprite | Group): void {
        this.owner = owner;
    }

    /**
    * initialize the component, set up variables
    * called by the owner first after the component is attached
    * @return {void}
    */
    public init() { }

    /**
    * add visual elements
    * called by the owner after it calls this init method
    * @return {void}
    */
    public buildInterface() { }

    /**
    * called by the owner in its update cycle, every frame
    * @return {void}
    */
    public update() { }

    /**
    * remove any visual elements / signals added
    * owner calls this method in its own destroy method
    * @return {void}
    */
    public destroy() { }
}