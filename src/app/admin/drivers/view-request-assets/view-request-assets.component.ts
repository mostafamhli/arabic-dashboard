import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-request-assets',
  templateUrl: './view-request-assets.component.html',
  styleUrls: ['./view-request-assets.component.scss']
})
export class ViewRequestAssetsComponent {

  requestAssets: any[] 
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    if(data && data.length){
      this.requestAssets = data
    }
  }
}
