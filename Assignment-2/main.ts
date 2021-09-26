import {
    Files,
    Folders,
      } from "./composite-pattern";
  
  let strategy=new Files('Strategy Pattern','ppt');
  let oobserver=new Files('Observer Pattern','pdf');
  let midSyllabus=new Files('MidSyllabus','doc');
  let coomposite=new Files('Component Pattern','ppt');
  let finalSyllabus=new Files('FinalSyllabus','doc');
  let assignment1=new Files('Assignment-1','pdf');
  let assignment2=new Files('Assignment-2','pdf');
  let readMe=new Files('readMe','doc');
  let midExam=new Folders('Mid Exam','folder');
  let finalExam=new Folders('Final Exam','folder');
  let lectures=new Folders('Lectures','folder');
  let assignmets=new Folders('Assignments','folder');
  let dp=new Folders('Design Pattern','folder');
  
  midExam.addItem(strategy);
  midExam.addItem(oobserver);
  console.log('\n');
  console.log(midExam.singleClick());
  console.log(midExam.doubleClick());
  
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

  console.log(dp.singleClick());
  console.log(dp.doubleClick());

  dp.remove(readMe);

  console.log(dp.doubleClick());
  
  console.log('\n');