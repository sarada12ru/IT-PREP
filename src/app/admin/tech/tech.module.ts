import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechRoutingModule } from './tech-routing.module';
import { TechComponent } from './tech.component';
import { AddEditTechComponent } from './add-edit-tech/add-edit-tech.component';
import { PrimeNgModule } from 'src/app/utils/prime-ng/prime-ng.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    TechComponent,
    AddEditTechComponent,
  ],
  imports: [
    CommonModule,
    TechRoutingModule,
    PrimeNgModule,
    SharedModule,
  ]
})
export class TechModule { }
