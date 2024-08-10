import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionSetRoutingModule } from './question-set-routing.module';
import { QuestionSetComponent } from './question-set.component';
import { AddEditQuestionSetComponent } from './add-edit-question-set/add-edit-question-set.component';
import { PrimeNgModule } from 'src/app/utils/prime-ng/prime-ng.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    QuestionSetComponent,
    AddEditQuestionSetComponent
  ],
  imports: [
    CommonModule,
    QuestionSetRoutingModule,
    PrimeNgModule,
    SharedModule
  ]
})
export class QuestionSetModule { }
