import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  title = 'dashboard';
  isOpened = true;
  showDriversTabs:boolean = false
  clicked() {
    this.isOpened = !this.isOpened;
  }
}
