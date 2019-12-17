import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown-angular7';
import { ChartsModule } from 'ng2-charts';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ErrorComponent,
    MenuComponent,
    LoginComponent,
    WelcomeComponent,
    HomeComponent,
    ResultComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
