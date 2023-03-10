import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DriverServicesService } from 'src/app/core/services/driver-services.service';
import { ProvinceService } from 'src/app/core/services/province.service';
import { filter } from 'rxjs/operators';
import { FilterWithSearch, FilterVehiclesWithSearch } from 'src/app/core/models/filters.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-move-driver-to-city',
  templateUrl: './move-driver-to-city.component.html',
  styleUrls: ['./move-driver-to-city.component.scss']
})
export class MoveDriverToCityComponent {

  moveDriver: FormGroup
  calssifications: any = []
  provinces: any = []
  filter: FilterWithSearch = new FilterWithSearch()
  filter_: FilterVehiclesWithSearch = new FilterVehiclesWithSearch()
  drivers: any = []
  searchWord: any = undefined
  constructor(
    private driverServices: DriverServicesService,
    private provinceService: ProvinceService,
    private driverServcie: DriverServicesService,
    private _snackBar: MatSnackBar
  ) {
    this.getDrivers()
    this.getProvinces()
    this.moveDriver = new FormGroup({
      id: new FormControl('', Validators.required),
      provinceId: new FormControl(6, Validators.required),
      vehicleTypeId: new FormControl(0, Validators.required),
      searchWord: new FormControl(''),
    })
    this.getVehicles()
  }

  submit() {
    if (this.moveDriver.valid) {
      this.provinceService.moveCaptaintoProvince(this.moveDriver.value).subscribe(res => {
        this.moveDriver.get('id')?.removeValidators(Validators.required)
        this.moveDriver.get('provinceId')?.removeValidators(Validators.required)
        this.moveDriver.get('vehicleTypeId')?.removeValidators(Validators.required)
        this.moveDriver.get('searchWord')?.removeValidators(Validators.required)
        this.moveDriver.reset();

        this.openSnackBar('تم نقل السائق  بنجاح', 'x')
      }, err => { })
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
    duration: 1000
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
    let modal = { Keyword: this.moveDriver?.value?.searchWord }
    this.driverServcie.getLiteListOfCaptains(modal).subscribe(
      (res: any) => {
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
