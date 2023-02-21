import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DriverServicesService } from 'src/app/core/services/driver-services.service';
import { PageType } from 'src/app/core/enums/genric.enums';
import { MatDialog } from '@angular/material/dialog';
import { ErrorHandelComponent } from 'src/app/shared/components/error-handel/error-handel.component';

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
  driverId: number = -1
  activeTab: number = ActiveProfileTab.personal
  ActiveProfileTabEnum = ActiveProfileTab
  pageType = PageType.Create
  pageTypeEnum = PageType
  driverProfile: FormGroup
  submitted= false
  clickSubmit = false
  constructor(
    private activatedRoute: ActivatedRoute,
    private driverService: DriverServicesService,
    private router: Router,
    private errorModal:MatDialog) {
    this.pageType = PageType.Get
    this.driverId = activatedRoute.snapshot.params['id']
    if (this.driverId) {
      this.pageType = PageType.Edit
      this.getDriverInfo()
    } else {
      this.pageType = PageType.Create
    }
    this.driverProfile = new FormGroup({
      id: new FormControl(undefined),
      firstName: new FormControl(undefined, Validators.required),
      lastName: new FormControl(undefined, Validators.required),
      phoneNumber: new FormControl({value : undefined, disabled: this.pageType != PageType.Create }, Validators.required),
      gender: new FormControl(undefined),
      provinceId: new FormControl(undefined, Validators.required),
      provinceName: new FormControl(),
      secondPhoneNumber: new FormControl(),
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

      vehicleColor: new FormControl(undefined, Validators.required),
      vehiclePlateNumber: new FormControl(undefined, Validators.required),
      vehicleModel: new FormControl(undefined, Validators.required),
      vehicleModelYear: new FormControl(),
      vehicleSeatCount: new FormControl(),
      vehicleVehicleTypeId: new FormControl(0, Validators.required),
      vehicleVehicleTypeName: new FormControl(),
      vehicleImage: new FormControl(),
      vehicleCarLicenseFrontImage: new FormControl(),
      vehicleCarLicenseBackImage: new FormControl(),
      vehicleCarPlateImage: new FormControl(),
      deleteVehicleImage: new FormControl('false'),
      deleteCarLicenseFrontImage: new FormControl('false'),
      deleteCarLicenseBackImage: new FormControl('false'),
    })
  }
  save() {
    this.driverProfile.markAsTouched()
    this.clickSubmit = true
    if (this.driverProfile.valid
      && this.driverProfile.value.vehicleCarPlateImage
      && this.driverProfile.value.licenseFrontImage
      && this.driverProfile.value.licenseBackImage
      ) {
      this.submitted = true
      this.driverService.createDriver(this.driverProfile.value).subscribe((res: any) => {
        this.submitted = false
        if (this.driverId) {
          this.router.navigate(['view-driver-profile', this.driverId])
        } else {
          if (res.id)
            this.router.navigate(['driver-request', res.id])
        }
      },err=>{
        this.submitted = false
        let error = err['error']
        error = error['error']
        let errorList = error.validationErrors
        this.errorModal.open(ErrorHandelComponent,{
          data: {
            title : error.message,
            errorList : errorList
          }
        })
      })
    }
  }

  getDriverInfo() {
    this.driverService.getDriverRequestDetails(this.driverId).subscribe((res: any) => {
      this.driverProfile.controls['id'].setValue(res.id)
      this.driverProfile.controls['firstName'].setValue(res.firstName)
      this.driverProfile.controls['lastName'].setValue(res.lastName)
      this.driverProfile.controls['phoneNumber'].setValue(res.phoneNumber)
      this.driverProfile.controls['gender'].setValue(res.gender)
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
      }
    }, err => { });
  }
}
