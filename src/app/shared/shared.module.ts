import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from './components/theme/label/label.component';

@NgModule({
  declarations: [
    LabelComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LabelComponent
  ]
})
export class SharedModule { }
