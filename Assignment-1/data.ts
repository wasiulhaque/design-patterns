import {Observer} from "./observer";
import {Subject} from "./subject";

export class Data implements Subject {
 
    courseNo : string = ""
    topicName: string = ""
    teacher : string = ""
    time: string = ""
 
    private observers: Array<Observer> = []
 
    registerObserver(o: Observer): void {
        this.observers.push(o);
    }
    removeObserver(o: Observer): void {
        this.observers = this.observers.filter(obj => obj !== o);
    }
    notifyObserver(): void {
        this.observers.map(o => {
            o.update(this.courseNo, this.topicName, this.teacher, this.time);
        });
    }
 
    measureChange(courseNo: string, time: string, topicName: string, teacher: string): void {
        this.courseNo = courseNo;
        this.topicName = topicName;
        this.teacher = teacher;
        this.time = time;
        this.notifyObserver();
    }
 
 
}