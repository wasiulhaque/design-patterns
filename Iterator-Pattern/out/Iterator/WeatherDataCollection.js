"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherDataCollection = void 0;
var CityNameIterator_1 = require("./CityNameIterator");
var WeatherDataCollection = /** @class */ (function () {
    function WeatherDataCollection() {
        this.items = [];
    }
    WeatherDataCollection.prototype.getItems = function () {
        return this.items;
    };
    WeatherDataCollection.prototype.addItem = function (item) {
        this.items.push(item);
    };
    WeatherDataCollection.prototype.getIterator = function () {
        return new CityNameIterator_1.CityNameIterator(this.items);
    };
    return WeatherDataCollection;
}());
exports.WeatherDataCollection = WeatherDataCollection;
