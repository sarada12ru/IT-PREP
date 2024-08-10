import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule),
  },
  {
    path: 'preps',
    loadChildren: () => import("./preparation/preparation.module").then(m => m.PreparationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
