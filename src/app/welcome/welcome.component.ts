import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student/student.component';
import { LoginService } from '../service/login.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  username = ''
  stud : Student
  english : number
  pieChartLabels :any
  pieChartLabels2 :any
  pieChartData :any
  pieChartData2 :any
  amount : any
  resulty:any
  remain :any
barChartData: ChartDataSets[]
barChartOptions: ChartOptions 
barChartLabels: Label[]
 barChartType: ChartType 
 barChartLegend: any
 expenselable: []
 barChartPlugins:[]
 data: any


public pieChartType = 'pie';
  constructor(private route : ActivatedRoute, private transferservice : LoginService) { }

  ngOnInit() {
    this.transferservice.getMessage().subscribe(receiveddata=>{
      console.log(receiveddata);
    this.stud = receiveddata;
   // this.newMethod();

      this.showData();


    
    });
    }
  
    private newMethod() {
    this.pieChartLabels = ['English', 'Hindi', 'Maths', 'Science', 'Social Science'];
    if(this.stud.results !==undefined){
      this.pieChartData = [this.stud.results.english, this.stud.results.hindi, this.stud.results.maths, this.stud.results.science, this.stud.results.socialstudies];
      // var data =this.stud.expenses;
      // var resulty = data.map(x =>x.amount)
      // var expenselable = data.map(y=>y.detail)
      // this.pieChartLabels2 = [expenselable];
      // this.pieChartData2 = [resulty];
  }
  }


public showData(){
  
  this.data =this.stud.expenses;
  this.resulty = this.data.map(x =>x.amount)
 this.expenselable = this.data.map(y=>y.detail)
 this.remain = this.data.map(z =>z.remain)

 console.log("CHART "+this.expenselable)
  // this.pieChartLabels2 = [expenselable];
  // this.pieChartData2 = [resulty];
  this.barChartOptions={
    responsive: true,
  };
  this.barChartLabels = this.expenselable;
  this. barChartType = 'bar';
  this. barChartLegend = true;
 this.barChartPlugins = [];

  this.barChartData = [
    {  data: this.resulty},
      {data : this.remain}
  ];


}




  showStudent(){
    this.transferservice.getMessage().subscribe(receiveddata=>{
      this.stud = receiveddata;
      console.log("Welcome Component Init "+receiveddata.results.english);
    
    });
  }
  


}
