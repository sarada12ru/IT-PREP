import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  sidebarVisible: boolean = false;

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
