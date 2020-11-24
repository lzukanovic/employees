import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { EmployeeService } from './employee.service'
import { CommunicationService } from './communication.service';
import { SortingService } from './sorting.service';

@NgModule({
  imports: [ HttpClientModule ],
  providers: [ EmployeeService, CommunicationService, SortingService ]
})
export class ServicesModule { }
