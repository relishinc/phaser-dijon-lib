var CopyModel = function (game, xml) {
  //make sure only one copy model is attached to the game
  if (game && typeof game.copy !== 'undefined') {
    return false;
  }

  game.copy = this;

  if (typeof xml !== 'undefined') {
    this.setXML(xml);
  }
};

CopyModel.prototype.constructor = CopyModel;

CopyModel.prototype.getCopy = function (groupId, itemId) {
  if (!this.hasXML()) {
    return false;
  }
  var node = this.xml.querySelector('[id="' + groupId + '"] [id="' + itemId + '"]');

  // fixes a case where line breaks are counted as text nodes in the domParser
  return node ? this.replaceChars(node.childNodes.length > 1 ? node.childNodes[0].wholeText.trim() : node.childNodes[0].nodeValue) : null;
};

CopyModel.prototype.replaceChars = function (text) {
  var result = text.replace(/\\n/g, '\n');
  return result;
};

CopyModel.prototype.setXML = function (xml) {
  var parser = new DOMParser();
  this.xml = parser.parseFromString(xml, "application/xml");
};

CopyModel.prototype.hasXML = function () {
  return typeof this.xml !== 'undefined';
};

module.exports = CopyModel;
