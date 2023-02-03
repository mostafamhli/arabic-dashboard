import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  
  driverProfile:FormGroup = new FormGroup ({
    firstName  : new FormControl('',Validators.required),
    lastName   : new FormControl('',Validators.required),
    phoneNumber   : new FormControl('',Validators.required),
    gender  : new FormControl('',Validators.required),
    provinceId  : new FormControl('',Validators.required),
    profileImage : new FormControl(File,Validators.required),
    licenseFrontImage  : new FormControl(File,Validators.required),
    licenseBackImage  : new FormControl(File,Validators.required),

    vehicleColor  : new FormControl('',Validators.required),
    vehiclePlateNumber  : new FormControl('',Validators.required),
    vehicleModel  : new FormControl('',Validators.required),
    vehicleModelYear : new FormControl('',Validators.required),
    vehicleSeatCount : new FormControl('',Validators.required),
    vehicleVehicleTypeId : new FormControl('',Validators.required),
    vehicleImage : new FormControl(File,Validators.required),
    vehicleCarLicenseFrontImage : new FormControl(File,Validators.required),
    vehicleCarLicenseBackImage : new FormControl(File,Validators.required),
  })
  constructor(private activatedRoute:ActivatedRoute){
    this.driverId = activatedRoute.snapshot.params['id']
  }
  save(){
    console.log(this.driverProfile.value)
  }
}
