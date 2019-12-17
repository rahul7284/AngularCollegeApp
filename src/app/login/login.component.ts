import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { Student } from '../student/student.component';
export class LoginDetails{

  constructor(public id : number,
    public userName : string,
    public userPwd : string,
    public student : Student){
    
  }
  
  }
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logindetails :LoginDetails
  stud : Student
  username = ""
  password = ""
  errorMessage = "Not Valid Credentials"
  invalidLogin = false

  constructor(private route : Router,private loginservice : LoginService) {
    
  }

  ngOnInit() {
    
  } 



  handleLogin(){

    if(this.username!='' && this.password!='')
    {
      this.loginservice.validateLogin(this.username,this.password).subscribe(
        response =>{
          console.log(response+"HERE")
          this.logindetails = response
          if(response!=null){
            console.log( this.logindetails.student.id+"USER ID")
            this.loginservice.getUserDataAfterLogin(this.logindetails.student.id).subscribe(
                response2 =>{
                console.log(response2);
                localStorage.setItem("data",response2.stName)
                // console.log( this.logindetails[0].userName)
                // this.invalidLogin = false
                this.route.navigate(['welcome'])
              }
            )
          }
         
          
        
        }
        
      )
     
      
    }
    else{
      this.invalidLogin = true
    }
  
  }
  


}
