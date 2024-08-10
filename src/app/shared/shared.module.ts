import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from './components/theme/label/label.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteComponent } from './components/standalone/delete/delete.component';
import { PrimeNgModule } from '../utils/prime-ng/prime-ng.module';
import { ToastComponent } from './components/standalone/toast/toast.component';

@NgModule({
  declarations: [
    LabelComponent,
    DeleteComponent,
    ToastComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PrimeNgModule
  ],
  exports: [
    LabelComponent,
    ReactiveFormsModule,
    FormsModule,
    DeleteComponent,
    PrimeNgModule,
    ToastComponent
  ]
})
export class SharedModule { }
