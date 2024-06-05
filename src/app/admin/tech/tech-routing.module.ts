import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechComponent } from './tech.component';
import { AddEditTechComponent } from './add-edit-tech/add-edit-tech.component';

const routes: Routes = [
  {
    path: '',
    component: TechComponent
  },
  {
    path: ':id',
    component: AddEditTechComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechRoutingModule { }
