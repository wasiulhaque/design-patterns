"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student() {
        this.courseNo = "";
        this.topicName = "";
        this.teacher = "";
        this.time = new Date();
    }
    Student.prototype.update = function (courseNo, topicName, teacher, time) {
        this.courseNo = courseNo;
        this.topicName = topicName;
        this.teacher = teacher;
        this.time = new Date(time);
        this.show();
    };
    Student.prototype.show = function () {
        console.log("Student Display:");
        console.log("Course No: " + this.courseNo);
        console.log("Topic Name: " + this.topicName);
        console.log("Teacher : " + this.teacher);
        console.log("Date: " + this.time.toLocaleString('en-us'));
    };
    return Student;
}());
exports.Student = Student;
