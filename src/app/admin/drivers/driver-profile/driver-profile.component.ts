import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DriverServicesService } from 'src/app/core/services/driver-services.service';

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
    phoneNumber   : new FormControl(''),
    gender  : new FormControl(Number),
    provinceId  : new FormControl('',Validators.required),
    /*profileImage : new FormControl(File,Validators.required),*/
    licenseFrontImage  : new FormControl(File,Validators.required),
    licenseBackImage  : new FormControl(File,Validators.required),
    /*idBackImage  : new FormControl(File,Validators.required),
    idFrontImage  : new FormControl(File,Validators.required),
    residenceocumentFrontImage  : new FormControl(File,Validators.required),
    residenceocumentBackImage  : new FormControl(File,Validators.required),
    securityCardImage  : new FormControl(File,Validators.required),*/

    vehicleColor  : new FormControl('',Validators.required),
    vehiclePlateNumber  : new FormControl('',Validators.required),
    vehicleModel  : new FormControl('',Validators.required),
    vehicleModelYear : new FormControl('',Validators.required),
    vehicleSeatCount : new FormControl('',Validators.required),
    /*vehicleVehicleTypeId : new FormControl('',Validators.required),
    vehicleImage : new FormControl(File,Validators.required),
    vehicleCarLicenseFrontImage : new FormControl(File,Validators.required),
    vehicleCarLicenseBackImage : new FormControl(File,Validators.required),
    vehicleCarPlateImage : new FormControl(File,Validators.required),*/
  })
  constructor(private activatedRoute:ActivatedRoute,private driverService:DriverServicesService){
    this.driverId = activatedRoute.snapshot.params['id']
    this.fillForm()
  }
  save(){
    console.log(this.driverProfile.value)
    if(this.driverProfile.valid){
      this.driverService.createDriver(this.driverProfile.value).subscribe(res=>{
        console.log(res)
      })
    }
  }
  fillForm(){
    this.driverProfile = new FormGroup ({
      firstName  : new FormControl('Wael',Validators.required),
      lastName   : new FormControl('Marwa',Validators.required),
      phoneNumber   : new FormControl('+963949394417'),
      gender  : new FormControl('1'),
      provinceId  : new FormControl('6',Validators.required),
      /*profileImage : new FormControl(File,Validators.required),*/
      licenseFrontImage  : new FormControl(File,Validators.required),
      licenseBackImage  : new FormControl(File,Validators.required),
      /*idBackImage  : new FormControl(File,Validators.required),
      idFrontImage  : new FormControl(File,Validators.required),
      residenceocumentFrontImage  : new FormControl(File,Validators.required),
      residenceocumentBackImage  : new FormControl(File,Validators.required),
      securityCardImage  : new FormControl(File,Validators.required),*/
  
      vehicleColor  : new FormControl('red',Validators.required),
      vehiclePlateNumber  : new FormControl('123456',Validators.required),
      vehicleModel  : new FormControl('Mazda',Validators.required),
      vehicleModelYear : new FormControl('2000',Validators.required),
      vehicleSeatCount : new FormControl('4',Validators.required),
      /*vehicleVehicleTypeId : new FormControl('',Validators.required),
      vehicleImage : new FormControl(File,Validators.required),
      vehicleCarLicenseFrontImage : new FormControl(File,Validators.required),
      vehicleCarLicenseBackImage : new FormControl(File,Validators.required),
      vehicleCarPlateImage : new FormControl(File,Validators.required),*/
    })
  }
}
