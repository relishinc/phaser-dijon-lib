var CopyModel = function (game, xml) {
    //make sure only one copy model is attached to the game
    if (game && typeof game.copy !== 'undefined'){
        return false;
    }

    game.copy = this;

    if (typeof xml !== 'undefined'){
        this.setXML(xml);
    }
};

CopyModel.prototype.constructor = CopyModel;

CopyModel.prototype.getCopy = function (groupId, itemId) {
    if (!this.hasXML()) {
        return false;
    }
    var node = this.xml.querySelector('[id="' + groupId + '"] [id="' + itemId + '"]');
    return node ? this.replaceChars(node.childNodes[0].nodeValue) : null;
};

CopyModel.prototype.replaceChars = function(text){
    var result = text.replace(/\\n/g,'\n');
    return result;
};

CopyModel.prototype.setXML = function (xml) {
    var parser = new DOMParser();
    this.xml = parser.parseFromString(xml, "application/xml");
};

CopyModel.prototype.hasXML = function () {
    return typeof this.xml !== 'undefined';
};

CopyModel.intilialized = false;

module.exports = CopyModel;