import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DriverServicesService } from 'src/app/core/services/driver-services.service';

@Component({
  selector: 'app-accept-driver-request',
  templateUrl: './accept-driver-request.component.html',
  styleUrls: ['./accept-driver-request.component.scss']
})
export class AcceptDriverRequestComponent {

  activeVehicle: number = 1;
  activeTypes: number = 0;
  vehicles: any[] = [];
  types: any = [];
  toktoks: any[] = [];
  cars: any[] = [];

  constructor(private dialogRef: MatDialogRef<AcceptDriverRequestComponent>, private driverServices: DriverServicesService) {
    this.getVehicles();
    this.getTypes();
    this.getToktoks();
    this.getCars();
  }

  getVehicles() {
    this.vehicles = this.driverServices.getAllVehicles();
  }

  getTypes() {
    this.types = this.driverServices.getVehiclesTypes();
  }

  getToktoks() {
    this.toktoks = this.driverServices.getToktoksType();
  }

  getCars() {
    this.cars = this.driverServices.getCars();
  }


  accept() {

  }

  cancel() {
    this.dialogRef.close()
  }
}
