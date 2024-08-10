import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { QSetFormService } from 'src/app/shared/form-group-manager/qset-form.service';
import { ITech } from 'src/app/utils/interfaces/ITech';
import { IList } from 'src/app/utils/interfaces/shared/IList';
import { ApiService } from 'src/app/utils/services/api.service';

@Component({
  selector: 'app-add-edit-question-set',
  templateUrl: './add-edit-question-set.component.html',
  styleUrls: ['./add-edit-question-set.component.scss']
})
export class AddEditQuestionSetComponent {
  formGroup: FormGroup;
  isNew: boolean = true;
  docId?: string;
  techs: IList[] = [];  

  constructor(
    private qSetFormService: QSetFormService,
    private config: DynamicDialogConfig,
    private apiService: ApiService,
    private ref: DynamicDialogRef,
    private toast: MessageService
  ) {
    this.getTechs();

    this.formGroup = this.qSetFormService.group;
    
    if(this.config.data.isNew) {
      this.isNew = true;
    }
    else {
      this.isNew = false;
      const { tech, questionSet, notes, _id } = this.config.data.obj;
      this.docId = _id;
      this.formGroup.controls['tech'].setValue(tech);
      this.formGroup.controls['questionSet'].setValue(questionSet);
      this.formGroup.controls['notes'].setValue(notes);
    }
  }

  getTechs() {
    this.apiService.getTechs()
    .subscribe((res: any) => {
      const data = res['data'];
      this.techs = data.map((el: ITech) => {
        return {
          id: el._id,
          name: el.tech
        }
      })

      console.log(this.techs);
    })
  }

  save() {
    const data = this.formGroup.value;
    if(this.docId) {
      this.apiService.saveQSet(data, this.docId)
      .subscribe((res: any) => {
        if(res.success) {
          this.toast.add({severity: "success", summary: "Success", detail: "Tech Created Successfully !"})
        }
        else {
          this.toast.add({severity: "danger", summary: "Failed", detail: "Failed to Create Tech !"})
        }
        this.closeAndReset();
      })
    }
    else {
      this.apiService.saveQSet(data)
      .subscribe((res: any) => {
        console.log(res)
        if(res.success) {
          this.toast.add({severity: "success", summary: "Success", detail: "Tech Updated Successfully !"})
        }
        else {
          this.toast.add({severity: "danger", summary: "Failed", detail: "Failed to Update Tech !"})
        }
        this.closeAndReset();
      })
    }
    
  }
  
  closeAndReset() {
    this.formGroup.reset();
    this.ref.close();
  }
}
