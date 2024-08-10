import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DockModule } from 'primeng/dock';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { TreeModule } from 'primeng/tree';
import { TableModule } from 'primeng/table';
import { DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogService } from 'primeng/dynamicdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    DockModule,
    MenubarModule,
    SidebarModule,
    TreeModule,
    TableModule,
    DynamicDialogModule,
    InputTextareaModule,
    InputTextModule,
    ToastModule,
    ConfirmDialogModule,
    DialogModule,
    DropdownModule
,  ],
  exports: [
    ButtonModule,
    CardModule,
    DockModule,
    MenubarModule,
    SidebarModule,
    TreeModule,
    TableModule,
    DynamicDialogModule,
    InputTextareaModule,
    InputTextModule,
    ToastModule,
    ConfirmDialogModule,
    DialogModule,
    DropdownModule
  ],
  providers: [DialogService, DynamicDialogRef, ConfirmationService, MessageService]
})
export class PrimeNgModule { }
