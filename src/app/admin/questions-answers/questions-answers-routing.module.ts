import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsAnswersComponent } from './questions-answers.component';
import { AddEditQuestionsAnswersComponent } from './add-edit-questions-answers/add-edit-questions-answers.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionsAnswersComponent
  },
  {
    path: ':id',
    component: AddEditQuestionsAnswersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsAnswersRoutingModule { }
