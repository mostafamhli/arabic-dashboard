import { Component } from '@angular/core';
import { Driver } from 'src/app/core/models/drivers.mode';
import { AccountStatus } from 'src/app/core/enums/genric.enums';
import { FilterWithSearch } from 'src/app/core/models/filters.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../confirm/confirm.component';
import { DriverServicesService } from 'src/app/core/services/driver-services.service';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.scss']
})
export class DriversListComponent {
  drivers: Driver[] = [];
  filter: FilterWithSearch = new FilterWithSearch();
  accountStatusEnum = AccountStatus;

  constructor(private confirmChangeStatus: MatDialog, private driverServcie: DriverServicesService) {
    this.getDrivers();
  }

  getDrivers() {
    this.drivers = this.driverServcie.getDriversList();
  }

  changeDriverStatus(item: Driver) {
    this.driverServcie.changeDriverStatus(item);
  }

  confirm(item: Driver) {
    let dialog = this.confirmChangeStatus.open(ConfirmComponent, {
      width: "40%",
      data: item
    });
    dialog.afterClosed().subscribe((result: Driver) => {
      if (result) {
        this.changeDriverStatus(result);
      }
    })
  }

  searchInDriverList(searchWord: string) {
    this.drivers = this.driverServcie.searchInDriverList(searchWord);
  }

  loadMore() {
    this.filter.skipCount = this.filter.skipCount + 1;
    this.getDrivers();
  }
}
