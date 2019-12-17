import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Results } from '../result/result.component';

export class Expense{

  public detail : string;
  public amount : number;
  public remain : number;
}

export class Student{

  constructor( public stName : string,
    public stClass : string,
    public rollNum : number,
    public userName : string,
    public userPwd : string,
    public userMobNum : number,
    public id : number,
    public sportArray : [],
    public results : Results,
    public expenses : Expense[]
    ){
    
  }
 
}
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  stud : Student
  isResponseSuccess:boolean
  errorMessage:string

  dropdownListHobbies = [];
  dropdownSettingsHobbies = {};
  
  dropdownListClass = [];
  dropdownSettingsClass = {};
  
  constructor(private studService : StudentService) { }

  ngOnInit() {
    this.stud = new Student('','',1,'','',null,1,[],new Results,[]);
  this.dropdownListHobbies = [
      { sprt_id: 1,sprt_names: 'Cricket' },
      { sprt_id: 2,sprt_names: 'Football' },
      { sprt_id: 3,sprt_names: 'Badminton' },
      { sprt_id: 4,sprt_names: 'BasketBall' },
      { sprt_id: 5,sprt_names: 'Kabbadi' }
    ];

    this.dropdownSettingsHobbies = {
      singleSelection: false,
      idField: 'sprt_id',
      textField: 'sprt_names',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    
    this.dropdownListClass = [
      { class_id: 1,class_name: 'First' },
      { class_id: 2,class_name: 'Second' },
      { class_id: 3,class_name: 'Third' },
      { class_id: 4,class_name: 'Fourth' },
      { class_id: 5,class_name: 'Fifth' },
      { class_id: 6,class_name: 'Sixth' },
      { class_id: 7,class_name: 'Seventh' },
      { class_id: 8,class_name: 'Eighth' },
      { class_id: 9,class_name: 'Nineth' },
      { class_id: 10,class_name: 'Tenth' },
    ];

    this.dropdownSettingsClass = {
      singleSelection: true,
      idField: 'class_id',
      textField: 'class_name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true
    };
    




  }
  onItemSelectHobbies(items: any) {
    console.log(items);
    this.stud.sportArray = items
  }
  onSelectAllHobbies(items: any) {
    console.log(items);
  }

  onItemSelectClass(item: any) {
    console.log(item);
    this.stud.stClass = item.class_name
  }
  onSelectAllClass(item: any) {
    console.log(item);
  }


  saveAllStudents(){
    console.log(this.stud.userMobNum+"COMPO");
        this.studService.saveAllStudents(this.stud).subscribe(
           response=>this.handleSuccess(response)
          // error=> this.handleError(error)
        );
      }
     handleSuccess(response){
       this.stud = response
       this.isResponseSuccess = true
       console.log(this.stud.rollNum+"HANDLSUCCESS of Component")
      }
       handleError(error){
    
       this.errorMessage = error
        this.isResponseSuccess = false
       }

}
