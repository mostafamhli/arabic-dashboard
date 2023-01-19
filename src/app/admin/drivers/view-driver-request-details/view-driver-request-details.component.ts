import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewRequestAssetsComponent } from '../view-request-assets/view-request-assets.component';
import { AcceptDriverRequestComponent } from '../accept-driver-request/accept-driver-request.component';
import { ConfirmComponent } from '../../confirm/confirm.component';
import { ActivatedRoute } from '@angular/router';
import { DriverServicesService } from 'src/app/core/services/driver-services.service';

@Component({
  selector: 'app-view-driver-request-details',
  templateUrl: './view-driver-request-details.component.html',
  styleUrls: ['./view-driver-request-details.component.scss']
})
export class ViewDriverRequestDetailsComponent {

  id!: number;
  driverRequestDetails: any;
  constructor(private viewAssetsDialog: MatDialog, private acceptDialog: MatDialog, private activatedRoute: ActivatedRoute, private driverService: DriverServicesService) {
    this.id = activatedRoute.snapshot.params['id'];
    this.getDriverRequestInfo();
  }

  getDriverRequestInfo() {
    this.driverRequestDetails = this.driverService.getDriverRequestDetails(this.id);
  }

  viewAssets() {
    this.viewAssetsDialog.open(ViewRequestAssetsComponent, {
      width: "70%",
      height: "60vh"
    })
  }

  accept() {
    this.acceptDialog.open(AcceptDriverRequestComponent, {
      width: "50%",
      height: "50vh"
    })
  }

  refuse() {
    let dialog = this.acceptDialog.open(ConfirmComponent, {
      data: {
        message: "هل أنت متأكد من رفض الطلب ؟"
      }
    })
    dialog.afterClosed().subscribe((res: boolean) => {
      if (res) {
        //action after refuse request
      } else {

      }
    });
  }
}
