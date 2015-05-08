var BaseMediator = function(game, mediatorName, viewComponent, modelClass, autoReg) {
    this.game = game;
    this._mediatorName = mediatorName;

    if (autoReg !== false)
        this.game[mediatorName] = this;

    if (typeof viewComponent !== 'undefined') {
        this.setViewComponent(viewComponent);
    }

    if (typeof modelClass !== 'undefined') {
        this._createModel(modelClass);
    }
};

BaseMediator.prototype.constructor = BaseMediator;

// private methods
BaseMediator.prototype._createModel = function(ModelClass) {
    this.setModel(new ModelClass(this.game));
};

BaseMediator.prototype._addSignal = function(signalName) {
    this[signalName] = new Phaser.Signal();
};

// public methods
BaseMediator.prototype.createSignals = function() {
    _.each(arguments, this._addSignal, this);
};

BaseMediator.prototype.setViewComponent = function(viewComponent) {
    this.viewComponent = viewComponent;
};

BaseMediator.prototype.setModel = function(model) {
    this._model = model;
};

BaseMediator.prototype.getCopy = function(group, id) {
    if (typeof this.game.copy !== 'undefined')
        return this.game.copy.getCopy(group, id);
};

BaseMediator.prototype.release = function() {
    if (typeof this.viewComponent.mediator === 'undefined') {
        this.viewComponent.mediator = null;
        delete this.viewComponent.mediator;
    }

    this.game[this.mediatorName] = null;
    delete this.game[this.mediatorName];
};

module.exports = BaseMediator;
