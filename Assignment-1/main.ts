import {Data} from "./data";
import {Student} from "./studentDisplay";
import {Teacher} from "./teacherDisplay";

let data = new Data();
let s1 = new Student();
data.registerObserver(s1)
data.measureChange("SWE-4501", "10.07.2021, 23:54", "Observer Pattern", "ABC");

let s2 = new Student();
data.registerObserver(s1)
data.measureChange("SWE-4501", "10.07.2021, 23:54", "Observer Pattern", "ABC");

data.removeObserver(s1);
data.measureChange("SWE-4501", "10.07.2021, 23:54", "Observer Pattern", "ABC");

let t1= new Teacher();
data.registerObserver(t1) ;
data.measureChange("SWE-4501", "10.07.2021, 23:54", "Observer Pattern", "ABC");