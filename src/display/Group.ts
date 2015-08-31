/// <reference path="../mvc/Application" />
/// <reference path="../core/Game" />
/// <reference path="../component/Component" />

module dijon.display{
	export class Group extends Phaser.Group{
		public game:core.Game;
		
		protected _hasComponents:boolean = false;
		protected _componentKeys:string[] = [];
		protected _components:{[componentName:string]:component.Component} = {};
		
		constructor(x:number=0, y:number=0, public name:string="dGroup", addToStage:boolean=false, components:component.Component[]=null, enableBody?:boolean, physicsBodyType?:number){
			super(mvc.Application.getInstance().game, null, name, addToStage, enableBody, physicsBodyType);
			
			this.position.set(x, y);
			this.init();
			
			if (!addToStage)
				this.game.add.existing(this);
				
			this.buildInterface();
			
			if (components)
				this.addComponents(components);	
		}
		
		// Phaser.Group overrides
		/**
		* called every frame
		* iterates the components list and calls component.update() on each component
		* @return {void}
		* @override
		*/
		public update():void{
			if (this._hasComponents)
				this.updateComponents();
		}
		
		/**
		* removes all components
		* @return {Phaser.Group.destroy}
		* @override
		*/
		public destroy():void{
			this.removeAllComponents();
			super.destroy();
		}
	
		// private methods
		/**
		* initialize variables
		* @return {void}
		*/
		protected init():void{}
		
		/**
		* add visual elements
		* @return {void}
		*/
		protected buildInterface():void{}
		
		/**
		* updates the internal list of component keys (so we don't have to call Object.keys() all the time)
		* @return {void}
		*/
		private _updateComponentKeys() {
			this._componentKeys = Object.keys(this._components);
			this._hasComponents = this._componentKeys.length > 0;
		}
		
		// public methods
		/**
		* attaches a list of components to the Dijon.UIGroup
		* @param {Array} components the list of components to add
		*/
		public addComponents = function(components:component.Component[]) {
			if (typeof components.length === 'undefined')
				throw new Error('Dijon.UIGroup components must be an array');
		
			while (components.length > 0)
				this.addComponent(components.shift());
		};
		
		/**
		* attaches a component to the Dijon.UIGroup
		* @param {dijon.component.Component} component to be attached
		*/
		public addComponent(component:component.Component):component.Component {
			component.setOwner(this);
			component.init();
			component.buildInterface();
		
			this._components[component.name] = component;
			this._updateComponentKeys();
			
			return component;
		};
		
		/**
		* iterates through the list of components and updates each one
		* @return {void}
		*/
		public updateComponents():void{
			this._componentKeys.forEach(
				componentName => {
					this.updateComponent(componentName);
				}
			);
		}
		
		/**
		* updates an attached component (calls component.update())
		* @param  {String} componentName the name of the component to update
		* @return {void}
		*/
		public updateComponent(componentName:string):void{
			this._components[componentName].update();
		}
		
		/**
		* removes all the components currently attached
		* @return {void}
		*/
		public removeAllComponents() {
			while (this._componentKeys.length > 0) {
				this.removeComponent(this._componentKeys.pop());
			}
		}
		
		/**
		* removes a specific component
		* @param  {String} componentName the name of the component to remove
		* @return {void}
		*/
		public removeComponent(componentName:string):void{
			if (typeof this._components[componentName] === 'undefined')
				return;
		
			this._components[componentName].destroy();
			this._components[componentName] = null;
			delete this._components[componentName];
		
			this._updateComponentKeys();
		}
	}
}

// Phaser addons
Phaser.GameObjectFactory.prototype['dGroup'] = function(x:number=0, y:number=0, name:string="dGroup", addToStage:boolean=false, components:dijon.component.Component[]=null, enableBody?:boolean, physicsBodyType?:number) {
    return new dijon.display.Group(x, y, name, addToStage, components, enableBody, physicsBodyType);
};