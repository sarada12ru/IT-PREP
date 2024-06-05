import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AdminComponent
      },
      {
        path: 'qna',
        loadChildren: () => import("./questions-answers/questions-answers.module").then(m => m.QuestionsAnswersModule)
      },
      {
        path: 'tech',
        loadChildren: () => import("./tech/tech.module").then(m => m.TechModule)
      },
      {
        path: 'q-set',
        loadChildren: () => import("./question-set/question-set.module").then(m => m.QuestionSetModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
