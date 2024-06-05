import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsAnswersRoutingModule } from './questions-answers-routing.module';
import { QuestionsAnswersComponent } from './questions-answers.component';
import { PrimeNgModule } from 'src/app/utils/prime-ng/prime-ng.module';
import { AddEditQuestionsAnswersComponent } from './add-edit-questions-answers/add-edit-questions-answers.component';

@NgModule({
  declarations: [
    QuestionsAnswersComponent,
    AddEditQuestionsAnswersComponent
  ],
  imports: [
    CommonModule,
    QuestionsAnswersRoutingModule,
    PrimeNgModule
  ]
})
export class QuestionsAnswersModule { }
