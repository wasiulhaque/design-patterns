"use strict";
exports.__esModule = true;
var composite_pattern_1 = require("./composite-pattern");
var strategy = new composite_pattern_1.Files('Strategy Pattern', 'ppt');
var oobserver = new composite_pattern_1.Files('Observer Pattern', 'pdf');
var midSyllabus = new composite_pattern_1.Files('MidSyllabus', 'doc');
var coomposite = new composite_pattern_1.Files('Component Pattern', 'ppt');
var finalSyllabus = new composite_pattern_1.Files('FinalSyllabus', 'doc');
var assignment1 = new composite_pattern_1.Files('Assignment-1', 'pdf');
var assignment2 = new composite_pattern_1.Files('Assignment-2', 'pdf');
var readMe = new composite_pattern_1.Files('readMe', 'doc');
var midExam = new composite_pattern_1.Folders('Mid Exam', 'folder');
var finalExam = new composite_pattern_1.Folders('Final Exam', 'folder');
var lectures = new composite_pattern_1.Folders('Lectures', 'folder');
var assignmets = new composite_pattern_1.Folders('Assignments', 'folder');
var dp = new composite_pattern_1.Folders('Design Pattern', 'folder');
midExam.addItem(strategy);
midExam.addItem(oobserver);
console.log('\n');
console.log(midExam.singleClick() + '\n');
console.log(midExam.doubleClick() + '\n');
midExam.addItem(midSyllabus);
finalExam.addItem(coomposite);
finalExam.addItem(finalSyllabus);
lectures.addItem(midExam);
lectures.addItem(finalExam);
assignmets.addItem(assignment1);
assignmets.addItem(assignment2);
dp.addItem(lectures);
dp.addItem(readMe);
dp.addItem(assignmets);
console.log(dp.singleClick() + '\n');
console.log(dp.doubleClick() + '\n');
dp.remove(readMe);
console.log(dp.doubleClick() + '\n');
console.log('\n');
