"use strict";
var Application_1 = require('../mvc/Application');
var Component = (function () {
    function Component() {
        this.game = Application_1.default.getInstance().game;
        this.name = 'Component';
    }
    Component.prototype.setOwner = function (owner) {
        this.owner = owner;
    };
    Component.prototype.init = function () { };
    Component.prototype.buildInterface = function () { };
    Component.prototype.update = function () { };
    Component.prototype.destroy = function () { };
    return Component;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Component;
//# sourceMappingURL=Component.js.map