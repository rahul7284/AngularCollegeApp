import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http:HttpClient) { }

  saveResult(stud){
    console.log("service"+stud);
      return this.http.post(`http://localhost:8080/saveResult`,stud);
       //console.log("customised Welcome")
     }
}
