import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsComponent } from './details/details.component';
import { AddComponent } from './edit/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
    { path: 'employees/add', component: AddComponent },
    { path: 'employees/:id', component: DetailsComponent },
    { path: 'employees/:id/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
