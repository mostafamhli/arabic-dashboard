import { Component } from '@angular/core';
import { Router } from '@angular/router';

enum ActiveTabs  {
  drivers = 1,
  trips = 2,
  setting = 3
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  title = 'dashboard';
  isOpened = true;
  activeTabsEnum = ActiveTabs
  activeTab = 0

  constructor(private router: Router) {
    let url = router.url
    if (
      url.includes('drivers-request') ||
      url.includes('driver-request') ||
      url.includes('driver-details') ||
      url.includes('driver-profile') ||
      url.includes('drivers') ||
      url.includes('transfers')) {
      this.activeTab = ActiveTabs.drivers
    }
  }

  clicked() {
    this.isOpened = !this.isOpened;
  }
}
