import { Component } from '@angular/core';

@Component({
  selector: 'app-drivers-orders',
  templateUrl: './drivers-orders.component.html',
  styleUrls: ['./drivers-orders.component.scss']
})
export class DriversOrdersComponent {
  drivers: Driver[] = []
  filter: FilterWithSearch = new FilterWithSearch()

  constructor() {
    this.getDrivers()
  }

  getDrivers() {
    console.log(this.filter)
    this.drivers = [
      {
        name: "Wael",
        email: "wael@gmail.com",
        accountCreationDate: "12-9-2022"
      },
      {
        name: "Wael",
        email: "wael@gmail.com",
        accountCreationDate: "12-9-2022"
      },
      {
        name: "Wael",
        email: "wael@gmail.com",
        accountCreationDate: "12-9-2022"
      },
      {
        name: "Wael",
        email: "wael@gmail.com",
        accountCreationDate: "12-9-2022"
      },
      {
        name: "Wael",
        email: "wael@gmail.com",
        accountCreationDate: "12-9-2022"
      },
      {
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

class Driver {
  name: string
  accountCreationDate: any
  email: string
  constructor(d?: Driver) {
    if (!d) {
      this.name = "",
        this.accountCreationDate = undefined
      this.email = ""
    } else {
      this.name = d.name
      this.email = d.email
      this.accountCreationDate = d.accountCreationDate
    }
  }
}

class Filter {
  pageIndex: number
  pageQuantity: number
  constructor() {
    this.pageIndex = 0
    this.pageQuantity = 10
  }
}

class FilterWithSearch extends Filter {
  searchWord: string
  constructor() {
    super()
    this.searchWord = ""
  }
}