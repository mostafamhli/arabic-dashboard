import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators, FormGroup } from '@angular/forms';

import { FilterWithSearch, FilterOrders } from 'src/app/core/models/filters.model';
import { TripsServicesService } from '../../../core/services/trips-services.service';
import { OrderStatusEnum } from 'src/app/core/enums/genric.enums';
import { DriverServicesService } from 'src/app/core/services/driver-services.service';
import { ClientServicesService } from 'src/app/core/services/client-services.service';


@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent {

  trips: any[] = []
  filter: FilterOrders = new FilterOrders()
  orderStatusEnum = OrderStatusEnum
  endOfResult: boolean = false
  captains: any = []
  clients: any = []

  getErrorRequiredMessage() {
    return 'يجب أن تدخل قيمة';
  }

  constructor(
    private tripsService: TripsServicesService,
    private driverService: DriverServicesService,
    private clientService: ClientServicesService) {
    this.getCaptains()
    this.getCleints()
    this.getTrips()
  }

  getTrips() {
    this.filter.skipCount = 0
    this.callApi();
  }

  callApi() {
    this.tripsService.getAllTrips(this.filter).subscribe((res: any) => {
      if (this.filter.skipCount == 0) {
        this.trips = res.items
      }
      else
        this.trips = this.trips.concat(res.items)
      if (res.items.length < this.filter.maxResultCount) {
        this.endOfResult = true;
      } else this.endOfResult = false;
    }, err => {

    });
  }

  loadMore() {
    this.filter.skipCount = this.filter.skipCount + 1;
    this.callApi()
  }

  resetForm() {
    this.filter = new FilterOrders()
    this.getTrips()
  }
  toLocalString(date: any) {
    let date_ = new Date(date)
    return date_
  }

  getCaptains() {
    this.driverService.getLiteListOfCaptains().subscribe((res: any) => {
      this.captains = res.items
    }, err => { })
  }
  getCleints() {
    this.clientService.getLiteListOfClients().subscribe((res: any) => {
      this.clients = res.items
    }, err => { })
  }
}
