import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionSetComponent } from './question-set.component';
import { AddEditQuestionSetComponent } from './add-edit-question-set/add-edit-question-set.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionSetComponent
  },
  {
    path: ':id',
    component: AddEditQuestionSetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionSetRoutingModule { }
