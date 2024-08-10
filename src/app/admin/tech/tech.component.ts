import { Component } from '@angular/core';
import { ITech } from 'src/app/utils/interfaces/ITech';
import { ApiService } from 'src/app/utils/services/api.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddEditTechComponent } from './add-edit-tech/add-edit-tech.component';
import { MessageService } from 'primeng/api';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/utils/ngrx/state/app.state';
import { setTechList } from 'src/app/utils/ngrx/store/tech.store';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss'],
})
export class TechComponent {
  label: string = '';
  techs: ITech[] = [];

  constructor(
    private apiService: ApiService,
    public dialogService: DialogService,
    private ref: DynamicDialogRef,
    private toast: MessageService,
    private store: Store<AppState>
  ) {
    this.toast.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    this.store.select(state => state.tech).subscribe((res: any) => {
      if(!res.techs || res.techs.length === 0) {
        if(this.techs.length === 0) {
          this.fetchTechs();
        }
      }
      else {
        this.techs = res.techs;
        console.log("Fetched from Store")
      }
    })
  }

  fetchTechs() {
    this.apiService.getTechs().subscribe((res: any) => {
      this.techs = res['data'] as ITech[];
      console.log("Fetched from API")
      this.store.dispatch(setTechList({techs: this.techs}));
    });
  }

  editTech(obj: ITech) {
    this.ref = this.dialogService.open(AddEditTechComponent, {
      header: 'Update Tech',
      width: '30%',
      data: {
        isNew: false,
        obj,
      },
    });
    this.ref.onClose.subscribe((result: any) => {
      this.fetchTechs();
    });
  }

  addTech() {
    this.ref = this.dialogService.open(AddEditTechComponent, {
      header: 'Create Tech',
      width: '30%',
      data: { isNew: true },
    });
    this.ref.onClose.subscribe((result: any) => {
      this.fetchTechs();
    });
  }

  removeTech(id: string) {
    this.apiService.removeTech(id).subscribe((res: any) => {
      if(res.success) {
        this.toast.add({severity: "success", summary: "Success", detail: "Tech Deleted Successfully !"})
      }
      else {
        this.toast.add({severity: "danger", summary: "Failed", detail: "Failed to Delete Tech !"})
      }
      this.fetchTechs();
    })
  }
}
