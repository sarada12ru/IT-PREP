import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DockModule } from 'primeng/dock';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { TreeModule } from 'primeng/tree';
import { TableModule } from 'primeng/table';
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
    TableModule
,  ],
  exports: [
    ButtonModule,
    CardModule,
    DockModule,
    MenubarModule,
    SidebarModule,
    TreeModule,
    TableModule
  ]
})
export class PrimeNgModule { }
