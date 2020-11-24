import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesComponent } from './employees.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeGridComponent } from './employee-grid/employee-grid.component';
import { EmployeesRoutingModule } from './employees-routing.module';


@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeListComponent,
    EmployeeGridComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    EmployeesRoutingModule
  ],
  exports: []
})
export class EmployeesModule { }
