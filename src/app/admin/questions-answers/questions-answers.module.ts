import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsAnswersRoutingModule } from './questions-answers-routing.module';
import { AddQuestionsAnswersComponent } from './add-questions-answers/add-questions-answers.component';
import { QuestionsAnswersComponent } from './questions-answers.component';
import { PrimeNgModule } from 'src/app/utils/prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    AddQuestionsAnswersComponent,
    QuestionsAnswersComponent
  ],
  imports: [
    CommonModule,
    QuestionsAnswersRoutingModule,
    PrimeNgModule
  ]
})
export class QuestionsAnswersModule { }
