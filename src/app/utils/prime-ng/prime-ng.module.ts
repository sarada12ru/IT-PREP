import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule
,  ],
  exports: [
    ButtonModule,
    CardModule
  ]
})
export class PrimeNgModule { }
