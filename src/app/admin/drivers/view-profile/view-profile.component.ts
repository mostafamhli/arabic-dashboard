import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DriverServicesService } from 'src/app/core/services/driver-services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  driverId: number = -1
  driverProfile: FormGroup
  driver:any
  constructor(private activatedRoute: ActivatedRoute, private driverService: DriverServicesService) {
    this.driverId = activatedRoute.snapshot.params['id']
    this.driverProfile = new FormGroup({
      id : new FormControl(),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      phoneNumber: new FormControl(''),
      gender: new FormControl(Number),
      creationTime: new FormControl(),
      provinceId: new FormControl(''),
      provinceName: new FormControl(''),
      secondPhoneNumber: new FormControl(''),
      profileImageUrl: new FormControl(),
      licenseFrontImage: new FormControl(),
      licenseBackImage: new FormControl(),
      idBackImage: new FormControl(),
      idFrontImage: new FormControl(),
      residenceocumentFrontImage: new FormControl(),
      residenceocumentBackImage: new FormControl(),
      securityCardImage: new FormControl(),
      deleteProfileImage: new FormControl('false'),
      deleteIdFrontImage: new FormControl('false'),
      deleteIdBackImage: new FormControl('false'),
      deleteResidenceCardFrontImage: new FormControl('false'),
      deleteResidenceCardBackImage: new FormControl('false'),
      deleteSecurityCardImage: new FormControl('false'),

      vehicleColor: new FormControl(''),
      vehiclePlateNumber: new FormControl(''),
      vehicleModel: new FormControl(''),
      vehicleModelYear: new FormControl(''),
      vehicleSeatCount: new FormControl(''),
      vehicleVehicleTypeId: new FormControl(0),
      vehicleVehicleTypeName: new FormControl(''),
      vehicleImage: new FormControl(),
      vehicleCarLicenseFrontImage: new FormControl(),
      vehicleCarLicenseBackImage: new FormControl(),
      vehicleCarPlateImage: new FormControl(),
      deleteVehicleImage: new FormControl('false'),
      deleteCarLicenseFrontImage: new FormControl('false'),
      deleteCarLicenseBackImage: new FormControl('false'),
    })
    console.log(this.driverProfile.value)
  }

  ngOnInit(): void {
    this.getDriverInfo()
  }
  
  getDriverInfo() {
    this.driverService.getDriverRequestDetails(this.driverId).subscribe((res: any) => {
      this.driverProfile.controls['id'].setValue(res.id)
      this.driverProfile.controls['firstName'].setValue(res.firstName)
      this.driverProfile.controls['lastName'].setValue(res.lastName)
      this.driverProfile.controls['phoneNumber'].setValue(res.phoneNumber)
      this.driverProfile.controls['gender'].setValue(res.gender)
      this.driverProfile.controls['creationTime'].setValue(res.creationTime)
      this.driverProfile.controls['provinceId'].setValue(res.provinceId)
      this.driverProfile.controls['provinceName'].setValue(res.provinceName)
      this.driverProfile.controls['secondPhoneNumber'].setValue(res.secondPhoneNumber)
      if (res.profileImageUrl)
        this.driverProfile.controls['profileImageUrl'].setValue(res.profileImageUrl)
      if (res.licenseFrontImageUrl)
        this.driverProfile.controls['licenseFrontImage'].setValue(res.licenseFrontImageUrl)
      if (res.licenseBackImageUrl)
        this.driverProfile.controls['licenseBackImage'].setValue(res.licenseBackImageUrl)
      if (res.idBackImageUrl)
        this.driverProfile.controls['idBackImage'].setValue(res.idBackImageUrl)
      if (res.idFrontImageUrl)
        this.driverProfile.controls['idFrontImage'].setValue(res.idFrontImageUrl)
      if (res.residenceCardFrontImageUrl)
        this.driverProfile.controls['residenceocumentFrontImage'].setValue(res.residenceCardFrontImageUrl)
      if (res.residenceCardBackImageUrl)
        this.driverProfile.controls['residenceocumentBackImage'].setValue(res.residenceCardBackImageUrl)
      if (res.securityCardImageUrl)
        this.driverProfile.controls['securityCardImage'].setValue(res.securityCardImageUrl)

      if (res.vehicle) {
        this.driverProfile.controls['vehicleColor'].setValue(res.vehicle.color)
        this.driverProfile.controls['vehiclePlateNumber'].setValue(res.vehicle.plateNumber)
        this.driverProfile.controls['vehicleModel'].setValue(res.vehicle.model)
        this.driverProfile.controls['vehicleModelYear'].setValue(res.vehicle.modelYear)
        this.driverProfile.controls['vehicleSeatCount'].setValue(res.vehicle.seatCount)
        if (res.vehicle.imageUrl)
          this.driverProfile.controls['vehicleImage'].setValue(res.vehicle.imageUrl)
        if (res.vehicle.vehicleType && res.vehicle.vehicleType) {
          this.driverProfile.controls['vehicleVehicleTypeId'].setValue(res.vehicle.vehicleType.id)
          this.driverProfile.controls['vehicleVehicleTypeName'].setValue(res.vehicle.vehicleType.name)
        }
        if (res.vehicle.carLicenseFrontImageUrl) 
          this.driverProfile.controls['vehicleCarLicenseFrontImage'].setValue(res.vehicle.carLicenseFrontImageUrl)
        if (res.vehicle.carLicenseBackImageUrl)
          this.driverProfile.controls['vehicleCarLicenseBackImage'].setValue(res.vehicle.carLicenseBackImageUrl)
        if (res.vehicle.plateImageUrl)
          this.driverProfile.controls['vehicleCarPlateImage'].setValue(res.vehicle.plateImageUrl)

        this.driver = this.driverProfile.value
        this.driver.averageRate = res.averageRate
        console.log(this.driver)
      }
    }, err => { });
  }
}
