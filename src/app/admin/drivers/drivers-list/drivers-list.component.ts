import { Component } from '@angular/core';
import { Driver } from 'src/app/core/models/drivers.mode';
import { AccountStatus, DriverRequestStatus } from 'src/app/core/enums/genric.enums';
import { FilterWithSearch } from 'src/app/core/models/filters.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../confirm/confirm.component';
import { DriverServicesService } from 'src/app/core/services/driver-services.service';
import { DateTime } from 'ts-luxon';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.scss']
})
export class DriversListComponent {
  drivers: Driver[] = [];
  filter: FilterWithSearch = new FilterWithSearch();
  accountStatusEnum = AccountStatus;
  driverRequestStatusEnum = DriverRequestStatus
  endOfResult:boolean = false
  
  constructor(private confirmChangeStatus: MatDialog, private driverServcie: DriverServicesService) {
    this.getDrivers();
  }

  getDrivers() {
    this.driverServcie.getDriversList(this.filter).subscribe(
      res => {
        if (this.filter.skipCount == 0) {
          this.drivers = res.items
          console.log(this.drivers)
        }
        else
          this.drivers = this.drivers.concat(res.items)
          if(res.items.length < this.filter.maxResultCount) {
            this.endOfResult = true;
          } else this.endOfResult = false;
      }
    )
  }

  confirm(item: Driver) {
    let dialog = this.confirmChangeStatus.open(ConfirmComponent, {
      width: "40%",
      data: 'هل أنت متأكد من تغيير حالة الحساب ؟'
    });
    dialog.afterClosed().subscribe((result: Driver) => {
      if (result) {
        this.changeDriverStatus(result);
      }
    })
  }

  changeDriverStatus(item: Driver) {
    this.driverServcie.changeDriverStatus(item.id).subscribe(res=>{
      item.isActive = item.isActive == 1 ? 0 : 1;
    },err=>{})
  }

  loadMore() {
    this.filter.skipCount = this.filter.skipCount + this.filter.maxResultCount;
    this.getDrivers();
  }

  toLocalString(date:any) {
    let date_ = new Date(date)
    return date_
  }
}
