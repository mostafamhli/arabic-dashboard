import { Component } from '@angular/core';
import { DriverServicesService } from 'src/app/core/services/driver-services.service';

@Component({
  selector: 'app-view-request-assets',
  templateUrl: './view-request-assets.component.html',
  styleUrls: ['./view-request-assets.component.scss']
})
export class ViewRequestAssetsComponent {

  requestAssets: any[] = [];
  constructor(private driversService: DriverServicesService) {
    this.getRequestAssets();
  }

  getRequestAssets() {
    this.requestAssets = this.driversService.getDriverRequestAssets(1)
  }
}
