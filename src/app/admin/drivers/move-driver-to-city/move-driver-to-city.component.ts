import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DriverServicesService } from 'src/app/core/services/driver-services.service';
import { ProvinceService } from 'src/app/core/services/province.service';
import { filter } from 'rxjs/operators';
import { FilterWithSearch, FilterVehiclesWithSearch } from 'src/app/core/models/filters.model';

@Component({
  selector: 'app-move-driver-to-city',
  templateUrl: './move-driver-to-city.component.html',
  styleUrls: ['./move-driver-to-city.component.scss']
})
export class MoveDriverToCityComponent {

  moveDriver: FormGroup
  calssifications: any = []
  filter: FilterWithSearch = new FilterWithSearch()
  provinces: any = []
  filter_: FilterVehiclesWithSearch = new FilterVehiclesWithSearch()
  drivers: any = []
  constructor(
    private driverServices: DriverServicesService,
    private provinceService: ProvinceService,
    private driverServcie: DriverServicesService
  ) {
    this.getDrivers()
    this.getProvinces()
    this.moveDriver = new FormGroup({
      id: new FormControl('',Validators.required),
      provinceId: new FormControl(6,Validators.required),
      vehicleTypeId: new FormControl(0,Validators.required),
    })
    this.getVehicles()
  }

  submit() {
    console.log(this.moveDriver.value)
    if(this.moveDriver.valid){
    this.provinceService.moveCaptaintoProvince(this.moveDriver.value).subscribe(res=>{
      this.moveDriver.reset()
    },err=>{})
  }
  }

  getVehicles() {
    this.calssifications = this.driverServices.getVehiclesTypes();
    this.filter_.provinceId = this.moveDriver.value.provinceId
    this.filter.maxResultCount = 50
    this.calssifications.forEach((element: any) => {
      this.filter_.category = element.id
      this.driverServices.getVehicles(this.filter_).subscribe((res: any) => {
        element.vehicles = res.items
      }, err => { });
    });
  }

  getDrivers() {
    this.filter.maxResultCount = 50
    this.driverServcie.getDriversList(this.filter).subscribe(
      res => {
        this.drivers = res['items']
      }
    )
  }

  getProvinces() {
    this.provinceService.getProvinceList().subscribe((res: any) => {
      this.provinces = res["items"];
    }, err => { })
  }
}
