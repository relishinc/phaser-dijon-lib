var UIGroup = require('../display/UIGroup');
var Preloader = require('./Preloader');

var UI = function (game, parent) {
    UIGroup.call(this, game, parent, 'UI', true);
};

UI.prototype = Object.create(UIGroup.prototype);
UI.prototype.constructor = UI;

UI.prototype.init = function(){

};

UI.prototype.buildInterface = function(){
    if (typeof this.game.preloader === 'undefined'){
        this.add(new Preloader(this.game, this));
        this.game.preloader.onLoadStarted.add(this.showPreloader, this);
        this.game.preloader.onLoadCompleted.add(this.hidePreloader, this);
    }
};

UI.prototype.showPreloader = function(){
    this.bringToTop(this.game.preloader);
};

UI.prototype.hidePreloader = function(){
    this.sendToBack(this.game.preloader);
};

module.exports = UI;