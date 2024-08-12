import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsAnswersRoutingModule } from './questions-answers-routing.module';
import { QuestionsAnswersComponent } from './questions-answers.component';
import { PrimeNgModule } from 'src/app/utils/prime-ng/prime-ng.module';
import { AddEditQuestionsAnswersComponent } from './add-edit-questions-answers/add-edit-questions-answers.component';
import { QuestionsAnswersFilterComponent } from './questions-answers-filter/questions-answers-filter.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    QuestionsAnswersComponent,
    AddEditQuestionsAnswersComponent,
    QuestionsAnswersFilterComponent
  ],
  imports: [
    CommonModule,
    QuestionsAnswersRoutingModule,
    PrimeNgModule,
    SharedModule
  ]
})
export class QuestionsAnswersModule { }
