import { Application } from 'dijon/application';
import { Game } from 'dijon/core';

export class TimerEvent {
    // Prevents this events time remaining from decreasing
    public paused: boolean = false;
    // The time this event was started at (passed from parent timer). Altering this will effectively change your delay.
    public startT: number;
    // How long before this event is fired (MS).
    public delay: number;
    // Is this event looping?
    public loop: boolean;

    protected args: any[];
    protected callback: Function;
    protected callbackContext: any;

    constructor(start: number, delay: number, callback: any, context: any, autoStart: boolean = true, loop: boolean = false, args: any[] = undefined) {
        this.startT = start;
        this.delay = delay;
        this.callback = callback;
        this.callbackContext = context;
        this.loop = loop;
        this.paused = !autoStart;
        this.args = args;
    }

    public dispatchCallback(): void {
        if (this.args) {
            this.callback.call(this.callbackContext, this.args);
        }
        else {
            this.callback.call(this.callbackContext);
        }
    }    

    public cleanup(): void {
        this.paused = true;
        this.callback = null;
        this.callbackContext = null;
        this.args = null;
    }
}

// Basic custom timer, use for tighter control and feedback of game time.
export class CustomTimer {
    public game: Game;
    public onComplete: Phaser.Signal;

    protected internalMS: number = 0;
    protected events: TimerEvent[] = [];
    protected toRemove: TimerEvent[] = [];

    // If runtime is <= 0 this timer will run endlessly    
    protected runTime: number = 0;
    protected running: boolean = false;

    constructor() {
        this.game = Application.getInstance().game;
        this.runTime = 0;
        this.onComplete = new Phaser.Signal();
    }

    public update(): void {
        if (this.running === true) {
            let delta = this.game.time.elapsedMS;
            this.internalMS += delta;
            if (this.runTime > 0 && this.internalMS > this.runTime) {
                this.onComplete.dispatch(this);
                this.running = false;
                return;
            }
            for (let i = 0; i < this.events.length; i++) {
               this.checkEvent(this.events[i], i, delta);
            }
            while (this.toRemove.length > 0) {
                this.removeEvent(this.toRemove.pop());
            }
        }
    }

    public checkEvent(event: TimerEvent, index: number, delta: number): void {
        if (event.paused === true) {
            event.startT += delta;
        }
        else if (event.startT + event.delay < this.internalMS) {
            event.dispatchCallback();

            if (event.loop === true) {
                event.startT = this.internalMS;
            }
            else {
                event.paused = true;
                this.toRemove.push(event);
            }
        }
    } 
    
    public pause(): void {
        this.running = false;
    }

    public resume(): void {
        this.running = true;
    }

    public addEvent(delay: number, callback: any, context: any, autoStart: boolean = true, loop: boolean = false, args: any[] = undefined): TimerEvent {
        this.events.push(new TimerEvent(this.internalMS, delay, callback, context, autoStart, loop, args));
        return this.events[this.events.length - 1];
    }

    public removeEvent(event: TimerEvent): TimerEvent {
        let toRemove = -1;
        for (let i = 0; i < this.events.length; i++){
            if (this.events[i] === event) {
                toRemove = i;
            }
        }
        if (toRemove !== -1) {
            let temp = this.events[this.events.length - 1];
            this.events[toRemove] = temp;
            return this.events.pop();
        }
        return null;
    }
    
    public removeAllEvents(): void {
        while (this.events.length > 0) {
            let event = this.events.pop();
            event = null;
        }
    }
    
    public reset(autoStart: boolean = false, runTime: number = -1, startAt: number = 0) {
        this.internalMS = startAt;
        this.runTime = runTime;
        this.running = autoStart;
        for (let i = 0; i < this.events.length; i++) {
            this.events[i].startT = startAt;
        }
    }

    public destroy(): void {
        this.running = false;
        this.removeAllEvents();
        this.onComplete.removeAll();
    }

    public get isEndless(): boolean {
        return this.runTime <= 0;
    }   
    
    public get percentRemaining(): number {
        return 1 - this.percentComplete;
    }

    public get percentComplete(): number {
        return this.isEndless ? 0 : (this.timeElapsed / this.runTime);
    }

    public get msRemaining(): number {
        return this.isEndless ? 99999 : this.runTime - this.timeElapsed;
    }

    public get secondsRemaining(): number {
        return Math.floor(this.msRemaining / 1000);
    }

    public get timeElapsed(): number {
        return this.internalMS;
    }
}