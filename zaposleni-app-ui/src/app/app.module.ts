import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmployeesModule } from './employees/employees.module';
import { ServicesModule } from './services/services.module';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      FontAwesomeModule,
      EmployeesModule,
      ServicesModule,
      ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
