import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionSetRoutingModule } from './question-set-routing.module';
import { QuestionSetComponent } from './question-set.component';
import { AddEditQuestionSetComponent } from './add-edit-question-set/add-edit-question-set.component';


@NgModule({
  declarations: [
    QuestionSetComponent,
    AddEditQuestionSetComponent
  ],
  imports: [
    CommonModule,
    QuestionSetRoutingModule
  ]
})
export class QuestionSetModule { }
