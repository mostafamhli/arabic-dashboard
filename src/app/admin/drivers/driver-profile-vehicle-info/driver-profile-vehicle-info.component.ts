import { Component, OnInit } from '@angular/core';
import { FormGroup, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-driver-profile-vehicle-info',
  templateUrl: './driver-profile-vehicle-info.component.html',
  styleUrls: ['./driver-profile-vehicle-info.component.scss']
})
export class DriverProfileVehicleInfoComponent implements OnInit {
  driverProfile: FormGroup;
  imageFile:any;
  constructor(private controlContainer: ControlContainer) {
  }
  ngOnInit(): void {
    this.driverProfile = <FormGroup>this.controlContainer.control;
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
