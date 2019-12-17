import { Injectable } from '@angular/core';
import { Student } from '../student/student.component';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferdataService {
  stud:Student
  constructor() { }

  shareDataSubject = new Subject<any>(); //Decalring new RxJs Subject
 
  sendDataToOtherComponent(event){
    console.log("Transefr Service "+event)
   this.shareDataSubject.next(event);
  }
  getMessage(): Observable<Student> {
    return this.shareDataSubject.asObservable();
}}
