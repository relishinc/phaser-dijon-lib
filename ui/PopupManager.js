var UIGroup = require('../display/UIGroup');

var PopupManager = function (game) {
    UIGroup.call(this, game, null, 'PopupManager', true);
    this.game.popupManager = this;
    this.aPopupExists = false;
};

PopupManager.prototype = Object.create(UIGroup.prototype);
PopupManager.prototype.constructor = PopupManager;

PopupManager.prototype.init = function () {
    this.popups = [];

    this.popupAdded = new Phaser.Signal();
    this.popupRemoved = new Phaser.Signal();
    this.allPopupsRemoved = new Phaser.Signal();

    // add ability for the game to call these methods and keep them in scope
    var self = this;
    this.game.addPopup = function () {
        return self.addPopup.apply(self, Array.prototype.slice.call(arguments));
    };

    this.game.removePopup = function () {
        return self.removePopup.apply(self, Array.prototype.slice.call(arguments));
    };

    this.game.removeAllPopups = function () {
        return self.removeAllPopups.apply(self, Array.prototype.slice.call(arguments));
    };

    this.game.aPopupExists = function() {
        return self.aPopupExists;
    };
};

PopupManager.prototype.buildInterface = function(){
    this.modalContainer = this.add(this.game.add.group());
    this.modalContainer.name = 'modalContainer';

    var gfx = this.modalContainer.add(this.game.add.graphics(0, 0));
    gfx.beginFill(0, 0.3);
    gfx.drawRect(0, 0, this.game.world.width, this.game.world.height);
    gfx.endFill();

    this.modal = this.modalContainer.add(this.game.add.image(0,0, gfx.generateTexture()));
    this.modal.inputEnabled = true;
    this.modal.visible = false;
    this.modal.name = 'modal';

    this.modalContainer.remove(gfx, true);

    this.popupContainer = this.add(this.game.add.group());
    this.popupContainer.name = 'popupContainer';
};

PopupManager.prototype.addPopup = function (popup, showModal, closeOnModalClick, centered, pausesGame) {
    popup.index = this.popups.length;
    popup.priorityID = 100 + popup.index;

    if (pausesGame === true){
        popup.pausesGame = true;
    }

    if (showModal === true) {
        this.game.disableWorldInput();

        this.modal.visible = true;

        popup.priorityID ++;
        this.modal.priorityID = popup.priorityID -1;

        this.bringToTop(this.modal);

        if (closeOnModalClick === true){
            this.modal.popup = popup;
            this.modal.events.onInputUp.addOnce(function(e){this.removePopup(e.popup);}, this);
        }
    }

    if (centered === true){
        popup.x = (this.game.width >> 1) + popup.offsetX;
        popup.y = (this.game.height >> 1) + popup.offsetY;
    }

    this.popupContainer.add(popup);
    this.popupContainer.bringToTop(popup);
    this.popups.push(popup);
    this.popupAdded.dispatch(popup);
    this.aPopupExists = true;
    return popup;
};

PopupManager.prototype.removePopup = function (popup) {

    var index = this.popups.indexOf(popup);

    if (index < 0) {
        return false;
    }

    this.popups.splice(index, 1);

    if(this.popups.length <= 0) {
        this.aPopupExists = false;
    }

    if (typeof this.modal !== 'undefined' && this.modal.visible){
        this.game.enableWorldInput();
        this.modal.visible = false;
    }

    if (popup.pausesGame){
        var paused = false;
        for (var i = 0; i < this.popups.length; i ++){
            if (this.popups[i].pausesGame && paused === false){
                paused = true;
            }
        }
        if (paused === false){
            this.game.paused = false;
        }
    }
    this.popupContainer.removeChild(popup);
    popup.destroy();
    this.popupRemoved.dispatch();
};

PopupManager.prototype.removeAllPopups = function () {
    while (this.popups.length > 0) {
        this.removePopup(this.popups.shift());
    }
    this.popupContainer.removeAll();
    this.modal.visible = false;
    this.aPopupExists = false;
    this.allPopupsRemoved.dispatch();
};


module.exports = PopupManager;