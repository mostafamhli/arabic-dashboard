import { Component } from '@angular/core';
import { Router } from '@angular/router';

enum ActiveTabs  {
  drivers = 1,
  trips = 2,
  setting = 3,
  notifications = 4,
  wallet = 5
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
      url.includes('drivers')) {
      this.activeTab = ActiveTabs.drivers
    } else if(
      url.includes('trips') ||
      url.includes('trip-details') ||
      url.includes('discount-codes') ||
      url.includes('cancle')
    ){
      this.activeTab = ActiveTabs.trips
    } else if(
      url.includes('dashboard-users') ||
      url.includes('vehicle-classification') ||
      url.includes('classification-display') ||
      url.includes('types') ||
      url.includes('cities') ||
      url.includes('settings') 
    ){
      this.activeTab = ActiveTabs.setting
    } else if(
      url.includes('notifications')
    ){
      this.activeTab = ActiveTabs.notifications
    } else if (url.includes('transfers')){
      this.activeTab = ActiveTabs.wallet 
    }
  }

  clicked() {
    this.isOpened = !this.isOpened;
  }
}
