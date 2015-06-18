var BaseComponent = function() {
    this.name = 'BaseComponent';
};

BaseComponent.prototype = {
    setOwner: function(owner) {
        this.owner = owner;
        this.game = this.owner.game;
    },
    init: function() {},
    buildInterface: function() {},
    update: function() {},
    destroy: function() {}
};

BaseComponent.prototype.constructor = BaseComponent;

module.exports = BaseComponent;
