import { Component } from '@angular/core';
import { DriverRequest } from 'src/app/core/models/drivers.mode';
import { FilterWithSearch } from 'src/app/core/models/filters.model';
import { DriverServicesService } from 'src/app/core/services/driver-services.service';
import { DriverRequestStatus } from 'src/app/core/enums/genric.enums';

@Component({
  selector: 'app-drivers-request',
  templateUrl: './drivers-request.component.html',
  styleUrls: ['./drivers-request.component.scss']
})
export class DriversRequestComponent {
  drivers: DriverRequest[] = [];
  filter: FilterWithSearch = new FilterWithSearch();
  driverRequestStatusEnum = DriverRequestStatus
  endOfResult:boolean = false

  constructor(private driverService: DriverServicesService) {
    this.getDrivers();
  }

  getDrivers() {
    this.driverService.getDriversRequest(this.filter).subscribe(
      res => {
        if (this.filter.skipCount == 0) {
          this.drivers = res.items
        }
        else
          this.drivers = this.drivers.concat(res.items)
          if(res.items.length < this.filter.maxResultCount) {
            this.endOfResult = true;
          } else this.endOfResult = false;
      }
    )
  }

  loadMore() {
    this.filter.skipCount = this.filter.skipCount + this.filter.maxResultCount;
    this.getDrivers()
  }
}
