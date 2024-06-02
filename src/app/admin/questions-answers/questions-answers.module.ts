import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsAnswersRoutingModule } from './questions-answers-routing.module';
import { AddQuestionsAnswersComponent } from './add-questions-answers/add-questions-answers.component';


@NgModule({
  declarations: [
    AddQuestionsAnswersComponent
  ],
  imports: [
    CommonModule,
    QuestionsAnswersRoutingModule
  ]
})
export class QuestionsAnswersModule { }
