import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators, FormGroup } from '@angular/forms';

import { FilterWithSearch } from 'src/app/core/models/filters.model';
import { TripsServicesService } from '../../../core/services/trips-services.service';


@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent {

  trips: any[] = []
  filter: FilterWithSearch = new FilterWithSearch()


  generalFields = new FormGroup({
    driversList: new FormControl(''),
    tripType: new FormControl(''),
    tripStatus: new FormControl(''),
    range: new FormGroup({
      start: new FormControl<Date | null>(null),
      end: new FormControl<Date | null>(null),
    }),
    clientName:new FormControl('')
  })



  getErrorRequiredMessage() {
    return 'يجب أن تدخل قيمة';
  }

  constructor(private tripsService: TripsServicesService) {
    this.getTrips()
  }

  getTrips() {
    this.trips = this.tripsService.getAllTrips();
  }

  loadMore() {
    this.filter.skipCount = this.filter.skipCount + 1;
    this.getTrips()
  }

  search() {
    console.log(this.tripsService.findTrip(this.generalFields.value))
  }

  resetForm(){
    this.generalFields.reset();
  }
}
