import { Component, OnInit } from '@angular/core';
import { ResultService } from '../service/result.service';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
export class Results {
  
  public english : number;
  public hindi : number;
  public maths : number;
  public science : number;
  public socialstudies : number;
  public id : number;
  public rollnum :number;
  public year: number;

 }
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  
isRollNumPresent : boolean
  constructor(private resultService : ResultService,private loginservice : LoginService,private route : Router) { }

  ngOnInit() {
    this.loginservice.getMessage().subscribe(receiveddata=>{
      console.log(receiveddata);
     
    this.result.id = String(receiveddata.id);
 
    });
  }
  result= { english :"",
  hindi : "",
  maths : "",
  science : "",
  socialstudies : "",
  id : "",
rollnum :"",
year: "",
stName:"" }
  saveResults(){
    console.log(this.result+"COMPO");
        this.resultService.saveResult(this.result).subscribe(
           response=>this.handleSuccess(response)
          // error=> this.handleError(error)
        );
      }
      handleSuccess(response){
        this.result = response
       }
        handleError(error){
        }

        getStudentId(){

          this.loginservice.getUserDataByRollNum(this.result.rollnum).subscribe(
            response2 =>{
            console.log(response2.id);
           this.result.stName = response2.stName
            // console.log( this.logindetails[0].userName)
            // this.invalidLogin = false
            this.route.navigate(['result'])
         
            this.isRollNumPresent = true
          
            }
          )
        }

}
