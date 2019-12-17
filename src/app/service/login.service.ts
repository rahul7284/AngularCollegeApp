import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginDetails } from '../login/login.component';
import { Student } from '../student/student.component';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  shareDataSubject = new  BehaviorSubject<any>("hello"); //Decalring new RxJs Subject
  stud ;
  validateLogin(username,userpwd){
    console.log("LOGIN SERVICE"+username)
    return this.http.get<LoginDetails>(`http://localhost:8080/validateLogin/${username}/${userpwd}`)
  }
// NEEDED TO SUBSCRIBE / SENDING DATA W/OUT SUBSCRIBE
  getUserDataAfterLogin(userId){
  

   this.http.get<Student>(`http://localhost:8080/getUserDetails/${userId}`).subscribe(response=>{

  this.stud=response;
  this.shareDataSubject.next(this.stud);
  })
 
 
  return this.http.get<Student>(`http://localhost:8080/getUserDetails/${userId}`)
}

getUserDataByRollNum(rollNum){
  

  this.http.get<Student>(`http://localhost:8080/getUserDetailsByRollNum/${rollNum}`).subscribe(response=>{

 this.stud=response;
 console.log(this.stud)
 this.shareDataSubject.next(this.stud);
 })


 return this.http.get<Student>(`http://localhost:8080/getUserDetailsByRollNum/${rollNum}`)
}
getMessage(): Observable<Student> {
  return this.shareDataSubject.asObservable();
}
}
