var BaseMediator = function (game, mediatorName, viewComponent, modelClass, autoReg) {
  this.game = game;

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
BaseMediator.prototype._createModel = function (ModelClass) {
  this.setModel(new ModelClass(this.game));
};

// public methods
BaseMediator.prototype.createSignals = function () {
  _.each(arguments, this.addSignal, this);
};

BaseMediator.prototype.addSignal = function (signalName) {
  this[signalName] = new Phaser.Signal();
};

BaseMediator.prototype.setViewComponent = function (viewComponent) {
  this.viewComponent = viewComponent;
};

BaseMediator.prototype.setModel = function (model) {
  this._model = model;
};

BaseMediator.prototype.getCopy = function (group, id) {
  if (typeof this.game.copy !== 'undefined')
    return this.game.copy.getCopy(group, id);
};

module.exports = BaseMediator;