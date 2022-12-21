import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-driver-profile-vehicle-info',
  templateUrl: './driver-profile-vehicle-info.component.html',
  styleUrls: ['./driver-profile-vehicle-info.component.scss']
})
export class DriverProfileVehicleInfoComponent {
  vehicleInfo:FormGroup;
  constructor() {
    this.vehicleInfo = new FormGroup({
      
    })
  }
}
