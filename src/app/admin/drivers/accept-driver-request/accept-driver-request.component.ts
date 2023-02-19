import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DriverServicesService } from 'src/app/core/services/driver-services.service';
import { FilterVehiclesWithSearch } from 'src/app/core/models/filters.model';
import { ServiceType } from 'src/app/core/enums/genric.enums';

@Component({
  selector: 'app-accept-driver-request',
  templateUrl: './accept-driver-request.component.html',
  styleUrls: ['./accept-driver-request.component.scss']
})
export class AcceptDriverRequestComponent {

  serviceType = ServiceType

  activeVehicle:any
  activeTypes: number;
  types: any = [];
  vehicles:any = []
  filter: FilterVehiclesWithSearch = new FilterVehiclesWithSearch();
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<AcceptDriverRequestComponent>,
    private driverServices: DriverServicesService) {
    if (data) {
      this.filter.provinceId = data
    }
    this.getServices()
    this.filter.maxResultCount = 20;
  }

  getServices() {
    this.types = this.driverServices.getVehiclesTypes();
  }

  getVehicles(id:number) {
    this.activeVehicle = undefined
    this.filter.category = id
    this.driverServices.getVehicles(this.filter).subscribe((res:any) => {
      this.vehicles = res.items
    }, err => { });
  }
  accept() {
    this.dialogRef.close(this.activeVehicle)
  }

  cancel() {
    this.dialogRef.close()
  }
}
