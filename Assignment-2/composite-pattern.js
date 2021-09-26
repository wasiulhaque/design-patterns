"use strict";
exports.__esModule = true;
exports.Folders = exports.Files = void 0;
var Files = /** @class */ (function () {
    function Files(name, type) {
        this.name = name;
        this.type = type;
    }
    Files.prototype.doubleClick = function () {
        return this.name + "." + this.type + " file is opened.";
    };
    Files.prototype.singleClick = function () {
        return "Name: " + this.name + ", Type: " + this.type + ".";
    };
    return Files;
}());
exports.Files = Files;
var Folders = /** @class */ (function () {
    function Folders(name, type) {
        this.list = [];
        this.name = name;
        this.type = type;
    }
    Folders.prototype.singleClick = function () {
        return "Name: " + this.name + ", Type: " + this.type + ".";
    };
    Folders.prototype.doubleClick = function () {
        var result = [];
        result.push(this.name + " folder is opened." + '\n' + "Contents:");
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var item = _a[_i];
            result.push(item.singleClick());
        }
        return "" + result.join('\n');
    };
    Folders.prototype.addItem = function (component) {
        this.list.push(component);
    };
    Folders.prototype.remove = function (component) {
        this.list.splice(this.list.indexOf(component), 1);
    };
    return Folders;
}());
exports.Folders = Folders;
