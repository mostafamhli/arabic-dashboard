import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

enum ActiveProfileTab {
  personal = 1,
  vehicle = 2
}

@Component({
  selector: 'app-driver-profile',
  templateUrl: './driver-profile.component.html',
  styleUrls: ['./driver-profile.component.scss']
})
export class DriverProfileComponent {
  driverId:number = -1
  activeTab:number = ActiveProfileTab.personal
  ActiveProfileTabEnum = ActiveProfileTab
  
  constructor(private activatedRoute:ActivatedRoute){
    this.driverId = activatedRoute.snapshot.params['id']
  }
}
