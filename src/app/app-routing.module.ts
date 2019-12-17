import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
{path:'student',component: StudentComponent},
{path:'login',component: LoginComponent},
{path:'logout',component: LogoutComponent},
{path:'home',component: HomeComponent},
{path:'welcome',component: WelcomeComponent},
{path:'result',component: ResultComponent},
{path:'**',component: ErrorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
