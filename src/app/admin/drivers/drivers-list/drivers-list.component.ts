import { Component } from '@angular/core';
import { Driver } from 'src/app/core/models/drivers.mode';
import { AccountStatus } from 'src/app/core/enums/genric.enums';
import { FilterWithSearch } from 'src/app/core/models/filters.model';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.scss']
})
export class DriversListComponent {
  drivers: Driver[] = []
  filter: FilterWithSearch = new FilterWithSearch()
  accountStatusEnum = AccountStatus

  constructor() {
    this.getDrivers()
  }

  getDrivers() {
    console.log(this.filter)
    this.drivers = [
      {
        id: 1,
        name: "Wael",
        mobile: "0949394417",
        accountCreationDate: "12-9-2022",
        accountStatus: AccountStatus.inActive,
        code: 1,
        stock: 200.12
      },
      {
        id: 2,
        name: "Wael",
        mobile: "0949394417",
        accountCreationDate: "12-9-2022",
        accountStatus: AccountStatus.inActive,
        code: 1,
        stock: 200.12
      },
      {
        id: 3,
        name: "Wael",
        mobile: "0949394417",
        accountCreationDate: "12-9-2022",
        accountStatus: AccountStatus.active,
        code: 1,
        stock: 200.12
      },
      {
        id: 4,
        name: "Wael",
        mobile: "0949394417",
        accountCreationDate: "12-9-2022",
        accountStatus: AccountStatus.inActive,
        code: 1,
        stock: 200.12
      },
      {
        id: 5,
        name: "Wael",
        mobile: "0949394417",
        accountCreationDate: "12-9-2022",
        accountStatus: AccountStatus.inActive,
        code: 1,
        stock: 200.12
      },
      {
        id: 6,
        name: "Wael",
        mobile: "0949394417",
        accountCreationDate: "12-9-2022",
        accountStatus: AccountStatus.active,
        code: 1,
        stock: 200.12
      },
    ]
  }
  loadMore() {
    this.filter.pageIndex = this.filter.pageIndex + 1;
    this.getDrivers()
  }
}
