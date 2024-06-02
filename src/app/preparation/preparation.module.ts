import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreparationRoutingModule } from './preparation-routing.module';
import { PreparationComponent } from './preparation.component';


@NgModule({
  declarations: [
    PreparationComponent
  ],
  imports: [
    CommonModule,
    PreparationRoutingModule
  ]
})
export class PreparationModule { }
