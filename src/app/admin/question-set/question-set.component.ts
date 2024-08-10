import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IQSet } from 'src/app/utils/interfaces/IQSet';
import { ApiService } from 'src/app/utils/services/api.service';
import { AddEditQuestionSetComponent } from './add-edit-question-set/add-edit-question-set.component';

@Component({
  selector: 'app-question-set',
  templateUrl: './question-set.component.html',
  styleUrls: ['./question-set.component.scss']
})
export class QuestionSetComponent {
  qSets: IQSet[] = [];

  constructor(
    private apiService: ApiService,
    public dialogService: DialogService,
    private ref: DynamicDialogRef,
    private toast: MessageService
  ) {
    this.fetchQSets();
  }

  fetchQSets() {
    this.apiService.getQSet()
    .subscribe((res: any) => {
      console.log(res)
      this.qSets = res.data;
    })
  }

  editQSet(obj: IQSet) {
    this.ref = this.dialogService.open(AddEditQuestionSetComponent, {
      header: 'Update Question Set',
      width: '30%',
      data: {
        isNew: false,
        obj,
      },
    });
    this.ref.onClose.subscribe((result: any) => {
      this.fetchQSets();
    });
  }

  addQSet() {
    this.ref = this.dialogService.open(AddEditQuestionSetComponent, {
      header: 'Create Question Set',
      width: '30%',
      data: { isNew: true },
    });
    this.ref.onClose.subscribe((result: any) => {
      this.fetchQSets();
    });
  }

  removeQSet(id: string) {
    this.apiService.removeTech(id).subscribe((res: any) => {
      if(res.success) {
        this.toast.add({severity: "success", summary: "Success", detail: "Question Set Deleted Successfully !"})
      }
      else {
        this.toast.add({severity: "danger", summary: "Failed", detail: "Failed to Delete Question Set !"})
      }
      this.fetchQSets();
    })
  }
}
