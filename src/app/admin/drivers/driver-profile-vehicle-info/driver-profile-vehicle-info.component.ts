import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-driver-profile-vehicle-info',
  templateUrl: './driver-profile-vehicle-info.component.html',
  styleUrls: ['./driver-profile-vehicle-info.component.scss']
})
export class DriverProfileVehicleInfoComponent {
  vehicleInfo:FormGroup;
  imageFile:any;
  constructor() {
    this.vehicleInfo = new FormGroup({
      
    })
  }
  onFileInput(files: any): void {
    var reader = new FileReader();
    this.imageFile = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imageFile = reader.result;
    };
  }
}
