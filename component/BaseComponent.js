/**
 * BaseComponent
 * components must have a name
 * each component should either extend this, or have all its methods
 * @constructor
 */
var BaseComponent = function() {
    this.name = 'BaseComponent';
};

BaseComponent.prototype = {
    /**
     * setOwner
     * @param {Dijon.UISprite} owner the Dijon.UISprite instance this component is attached to
     * @return {void}
     */
    setOwner: function(owner) {
        this.owner = owner;
        this.game = this.owner.game;
    },

    /**
     * initialize the component, set up variables
     * called by the owner first after the component is attached
     * @return {void}
     */
    init: function() {},

    /**
     * add visual elements
     * called by the owner after it calls this init method
     * @return {void}
     */
    buildInterface: function() {},

    /**
     * called by the owner in its update cycle, every frame
     * @return {void}
     */
    update: function() {},

    /**
     * remove any visual elements / signals added
     * owner calls this method in its own destroy method
     * @return {void}
     */
    destroy: function() {}
};

BaseComponent.prototype.constructor = BaseComponent;

module.exports = BaseComponent;
