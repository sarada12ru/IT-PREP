import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IQNA } from 'src/app/utils/interfaces/iQNA';
import { ApiService } from 'src/app/utils/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions-answers',
  templateUrl: './questions-answers.component.html',
  styleUrls: ['./questions-answers.component.scss']
})
export class QuestionsAnswersComponent implements OnInit {

  apiUrl: string | undefined = environment.apiUrl;
  qnaList: IQNA[] = [];
  tech: string = "";
  questionSet: string = "";
  
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.fetchQNA();
  }

  fetchQNA() {
    this.apiService.listQNAs({
      tech: this.tech,
      questionSet: this.questionSet
    }).subscribe((res: any) => {
      this.qnaList = res.data;
    } )
  }

  addQNA() {
    this.router.navigate(['/admin/qna/add-qna']);
  }

  removeQNA(id: string) {
    this.apiService.deleteQNA(id)
    .subscribe((res: any) => {
      console.log(res)
    })
  }

}
