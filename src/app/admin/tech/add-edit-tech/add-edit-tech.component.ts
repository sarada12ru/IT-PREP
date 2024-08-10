import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';
import { TechFormService } from 'src/app/shared/form-group-manager/tech-form.service';
import { ITech } from 'src/app/utils/interfaces/ITech';
import { AppState } from 'src/app/utils/ngrx/state/app.state';
import { createTech, updateTech } from 'src/app/utils/ngrx/store/tech.store';
import { ApiService } from 'src/app/utils/services/api.service';

@Component({
  selector: 'app-add-edit-tech',
  templateUrl: './add-edit-tech.component.html',
  styleUrls: ['./add-edit-tech.component.scss']
})
export class AddEditTechComponent {
  formGroup: FormGroup;
  isNew: boolean = true;
  docId?: string;
  techs!: Observable<ITech[]>;

  constructor(
    private techFormService: TechFormService,
    private config: DynamicDialogConfig,
    private apiService: ApiService,
    private ref: DynamicDialogRef,
    private toast: MessageService,
    private store: Store<AppState>
  ) {
    this.formGroup = this.techFormService.group;
    
    if(this.config.data.isNew) {
      this.isNew = true;
    }
    else {
      this.isNew = false;
      const { tech, notes, _id } = this.config.data.obj;
      this.docId = _id;
      this.formGroup.controls['tech'].setValue(tech);
      this.formGroup.controls['notes'].setValue(notes);
    }
  }

  save() {
    const data = this.formGroup.value;
    if(this.docId) {
      this.apiService.saveTech(data, this.docId)
      .subscribe((res: any) => {
        if(res.success) {
          this.toast.add({severity: "success", summary: "Success", detail: "Tech Created Successfully !"})
          this.store.dispatch(createTech({ tech: res.data }))
        }
        else {
          this.toast.add({severity: "danger", summary: "Failed", detail: "Failed to Create Tech !"})
        }
        this.closeAndReset();
      })
    }
    else {
      this.apiService.saveTech(data)
      .subscribe((res: any) => {
        if(res.success) {
          this.toast.add({severity: "success", summary: "Success", detail: "Tech Updated Successfully !"})
          this.store.dispatch(updateTech({ tech: res.data }))
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
