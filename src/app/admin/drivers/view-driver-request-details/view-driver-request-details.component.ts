import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewRequestAssetsComponent } from '../view-request-assets/view-request-assets.component';
import { AcceptDriverRequestComponent } from '../accept-driver-request/accept-driver-request.component';
import { ConfirmComponent } from '../../confirm/confirm.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DriverServicesService } from 'src/app/core/services/driver-services.service';

@Component({
  selector: 'app-view-driver-request-details',
  templateUrl: './view-driver-request-details.component.html',
  styleUrls: ['./view-driver-request-details.component.scss']
})
export class ViewDriverRequestDetailsComponent {

  id!: number;
  driverRequestDetails: any;
  vehicleType:any
  sumitted = false
  constructor(
    private viewAssetsDialog: MatDialog,
    private acceptDialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private driverService: DriverServicesService,
    private router:Router) {
    this.id = activatedRoute.snapshot.params['id'];
    this.getDriverRequestInfo();
  }

  getDriverRequestInfo() {
    this.driverService.getDriverRequestDetails(this.id).subscribe(res=>{
      this.driverRequestDetails = res
    },err=>{});
  }

  viewAssets() {
    let data = 
    [
      {
        image: this.driverRequestDetails.licenseFrontImageUrl,
        labelText: "صورة رخصة القيادة (الوجه الأمامي)"
      },
      {
        image: this.driverRequestDetails.residenceCardFrontImageUrl,
        labelText: "سند الإقامة (الوجه الأمامي)"
      },
      {
        image: this.driverRequestDetails.idFrontImageUrl,
        labelText: "صورة الهوية (الوجه الأمامي)"
      },
      {
        image: this.driverRequestDetails?.vehicle?.carLicenseFrontImageUrl,
        labelText: "صورة الميكانيك (الوجه الأمامي)"
      },
      {
        image: this.driverRequestDetails.licenseBackImageUrl,
        labelText: "صورة رخصة القيادة (الوجه الخلفي)"
      },
      {
        image: this.driverRequestDetails.residenceCardBackImageUrl,
        labelText: "سند الإقامة (الوجه الخلفي)"
      },
      {
        image: this.driverRequestDetails.idBackImageUrl,
        labelText: "صورة الهوية (الوجه الخلفي)"
      },
      {
        image: this.driverRequestDetails?.vehicle?.carLicenseBackImageUrl,
        labelText: "صورة الميكانيك (الوجه الخلفي)"
      },
      {
        image: this.driverRequestDetails.securityCardImageUrl,
        labelText: "صورة البطاقة الأمنية"
      },
      {
        image: this.driverRequestDetails?.vehicle?.plateImageUrl,
        labelText: "صورة لوحة السيارة"
      },
    ];
    this.viewAssetsDialog.open(ViewRequestAssetsComponent, {
      width: "70%",
      data : data
    })
  }

  changeVehicle(){
    this.acceptDialog.open(AcceptDriverRequestComponent, {
      width: "50%",
      data : this.driverRequestDetails.provinceId
    }).afterClosed().subscribe(res=>{
      if(res) {
        this.vehicleType = res
      }
    });
  }
  accept() {
    this.acceptDialog.open(ConfirmComponent, {
      width: "50%",
      data : "هل أنت متأكد من قبول السائق ؟"
    }).afterClosed().subscribe(res=>{
      this.sumitted = true
      if(res && this.vehicleType && this.vehicleType.id ){
        let body = {
          "id": this.id,
          "vehicleTypeId": this.vehicleType.id,
          "approved": true
        }
        this.driverService.acceptDriver(body).subscribe(res=>{
          this.router.navigateByUrl("/drivers")
        },err=>{})
      }
    })
  }

  refuse() {
    let dialog = this.acceptDialog.open(ConfirmComponent, {
      width: "50%",
      data:  "هل أنت متأكد من رفض الطلب ؟"
    })
    dialog.afterClosed().subscribe((res: boolean) => {
      if (res) {
        //action after refuse request
        let body = {
          "id": this.id,
          "approved": false
        }
        this.driverService.acceptDriver(body).subscribe(res=>{
          this.router.navigateByUrl("/drivers")
        },err=>{})
      } else {

      }
    });
  }
}
