"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityNameIterator = void 0;
var CityNameIterator = /** @class */ (function () {
    function CityNameIterator(collection) {
        this.index = -1;
        this.weatherData = collection;
    }
    CityNameIterator.prototype.current = function () {
        return this.weatherData[this.index];
    };
    CityNameIterator.prototype.advance = function () {
        this.index++;
    };
    CityNameIterator.prototype.hasNext = function () {
        return this.weatherData[this.index + 1] !== undefined;
    };
    return CityNameIterator;
}());
exports.CityNameIterator = CityNameIterator;
