import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
})
export class DeleteComponent {
  @Input() id: string | undefined;
  @Output() confirm: EventEmitter<string> = new EventEmitter();

  visible: boolean = false;

  constructor() {}

  showAlert() {
    this.visible = true;
  }

  hideAlert() {
    this.visible = false;
  }

  confirmDelete() {
    if(!this.id) {
      return;
    }
    this.confirm.emit(this.id);
  }
}
