import { Component } from '@angular/core';
import { DriverRequest } from 'src/app/core/models/drivers.mode';
import { FilterWithSearch } from 'src/app/core/models/filters.model';

@Component({
  selector: 'app-drivers-request',
  templateUrl: './drivers-request.component.html',
  styleUrls: ['./drivers-request.component.scss']
})
export class DriversRequestComponent {
  drivers: DriverRequest[] = []
  filter: FilterWithSearch = new FilterWithSearch()

  constructor() {
    this.getDrivers()
  }

  getDrivers() {
    console.log(this.filter)
    this.drivers = [
      {
        id:1,
        name: "Wael",
        email: "wael@gmail.com",
        accountCreationDate: "12-9-2022"
      },
      {
        id:2,
        name: "Wael",
        email: "wael@gmail.com",
        accountCreationDate: "12-9-2022"
      },
      {
        id:3,
        name: "Wael",
        email: "wael@gmail.com",
        accountCreationDate: "12-9-2022"
      },
      {
        id:4,
        name: "Wael",
        email: "wael@gmail.com",
        accountCreationDate: "12-9-2022"
      },
      {
        id:5,
        name: "Wael",
        email: "wael@gmail.com",
        accountCreationDate: "12-9-2022"
      },
      {
        id:6,
        name: "Wael",
        email: "wael@gmail.com",
        accountCreationDate: "12-9-2022"
      },
    ]
  }
  loadMore(){
    this.filter.pageIndex = this.filter.pageIndex + 1;
    this.getDrivers()
  }
}
