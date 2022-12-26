import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewRequestAssetsComponent } from '../view-request-assets/view-request-assets.component';
import { AcceptDriverRequestComponent } from '../accept-driver-request/accept-driver-request.component';

@Component({
  selector: 'app-view-driver-request-details',
  templateUrl: './view-driver-request-details.component.html',
  styleUrls: ['./view-driver-request-details.component.scss']
})
export class ViewDriverRequestDetailsComponent {

  constructor(private viewAssetsDialog:MatDialog,private acceptDialog:MatDialog){
    
  }

  viewAssets(){
    this.viewAssetsDialog.open(ViewRequestAssetsComponent,{
      width:"70%",
      height:"60vh"
    })
  }

  accept(){
    this.acceptDialog.open(AcceptDriverRequestComponent,{
      width:"50%",
      height:"50vh"
    })
  }
}
