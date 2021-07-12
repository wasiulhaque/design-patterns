"use strict";
exports.__esModule = true;
exports.Data = void 0;
var Data = /** @class */ (function () {
    function Data() {
        this.courseNo = "";
        this.topicName = "";
        this.teacher = "";
        this.time = "";
        this.observers = [];
    }
    Data.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    Data.prototype.removeObserver = function (o) {
        this.observers = this.observers.filter(function (obj) { return obj !== o; });
    };
    Data.prototype.notifyObserver = function () {
        var _this = this;
        this.observers.map(function (o) {
            o.update(_this.courseNo, _this.topicName, _this.teacher, _this.time);
        });
    };
    Data.prototype.measureChange = function (courseNo, time, topicName, teacher) {
        this.courseNo = courseNo;
        this.topicName = topicName;
        this.teacher = teacher;
        this.time = time;
        this.notifyObserver();
    };
    return Data;
}());
exports.Data = Data;
