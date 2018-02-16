String.prototype.replaceAt = function(index, letter) {
    return this.substr(0, index) + letter + this.substr(index + 1);
}
String.prototype.addAt = function(index) {
    return this.substr(0, index) + "E" + this.substr(index);
}
String.prototype.removeAt = function(index) {
    return this.substr(0, index) + this.substr(index + 1);
}