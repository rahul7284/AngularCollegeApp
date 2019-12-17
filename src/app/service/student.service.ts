import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../student/student.component';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  stud : Student
  saveAllStudents(stud){
    console.log("service"+stud);
      return this.http.post<Student>(`http://localhost:8080/saveStudent`,stud);
       //console.log("customised Welcome")
     }
     setData(Stud){
      this.stud = Stud;
    }
}
