import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailsComponent } from './details/details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileRoutingModule } from './profile-routing.module';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './edit/add.component';

@NgModule({
  declarations: [ DetailsComponent, EditComponent, AddComponent ],
  imports: [
      CommonModule,
      FontAwesomeModule,
      ProfileRoutingModule,
      FormsModule
    ],
  exports: []
})
export class ProfileModule { }
