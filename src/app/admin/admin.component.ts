import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  title = 'dashboard';
  isOpened = true;
  showDriversTabs:boolean = false
  showTripsTabs:boolean = false;
  showSettingsTabs:boolean = false;

  showDriversTabs: boolean = false

  constructor(private router: Router) {
    let url = router.url
    if (
      url.includes('drivers-request') ||
      url.includes('driver-request') ||
      url.includes('driver-details') ||
      url.includes('driver-profile') ||
      url.includes('drivers') ||
      url.includes('transfers')) {
      this.showDriversTabs = true
    }
  }

  clicked() {
    this.isOpened = !this.isOpened;
  }
}
