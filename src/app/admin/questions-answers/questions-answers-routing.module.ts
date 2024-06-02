import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsAnswersComponent } from './questions-answers.component';
import { AddQuestionsAnswersComponent } from './add-questions-answers/add-questions-answers.component';

const routes: Routes = [
  {
    path: 'qna',
    component: QuestionsAnswersComponent
  },
  {
    path: 'add-qna',
    component: AddQuestionsAnswersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsAnswersRoutingModule { }
