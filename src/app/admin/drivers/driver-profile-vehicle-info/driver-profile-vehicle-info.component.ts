import { Component, OnInit } from '@angular/core';
import { FormGroup, ControlContainer } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PageType } from 'src/app/core/enums/genric.enums';
import { FilterVehiclesWithSearch } from 'src/app/core/models/filters.model';
import { DriverServicesService } from 'src/app/core/services/driver-services.service';

@Component({
  selector: 'app-driver-profile-vehicle-info',
  templateUrl: './driver-profile-vehicle-info.component.html',
  styleUrls: ['./driver-profile-vehicle-info.component.scss']
})
export class DriverProfileVehicleInfoComponent implements OnInit {
  driverProfile: FormGroup;
  imageFile:any;
  pageType:number
  pageTypeEnum=PageType
  driverId:string
  filter: FilterVehiclesWithSearch = new FilterVehiclesWithSearch();
  calssifications:any

  constructor(private controlContainer: ControlContainer,private driverServices:DriverServicesService,private activatedRoute:ActivatedRoute) {
    this.pageType = PageType.Get
    this.driverId = activatedRoute.snapshot.params['id']
    if (this.driverId) {
      this.pageType = PageType.Edit
    } else {
      this.pageType = PageType.Create
    }
  }
  ngOnInit(): void {
    this.driverProfile = <FormGroup>this.controlContainer.control;
    if (this.driverProfile.controls['vehicleImage'] && this.driverProfile.controls['vehicleImage'].value && this.driverProfile.controls['vehicleImage'].value != "") {
      this.imageFile = this.driverProfile.controls['vehicleImage'].value
      if (typeof (this.imageFile) != 'string') {
        this.onFileInput([this.imageFile])
      }
    }
    this.getVehicles()
  }

  onFileInput(files: any): void {
    var reader = new FileReader();
    this.imageFile = files;
    this.driverProfile.controls['vehicleImage'].setValue(files[0])
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imageFile = reader.result;
    };
  }
  getVehicles() {
    this.calssifications = this.driverServices.getVehiclesTypes();
    this.filter.provinceId = this.driverProfile.value.provinceId
    this.filter.maxResultCount = 50
    this.calssifications.forEach((element:any) => {
      this.filter.category = element.id
      this.driverServices.getVehicles(this.filter).subscribe((res:any) => {
        element.vehicles = res.items
      }, err => { });
    });
  }
}
