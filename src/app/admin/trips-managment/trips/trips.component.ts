import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { FilterWithSearch } from 'src/app/core/models/filters.model';


@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent {

  trips: any[] = []
  filter: FilterWithSearch = new FilterWithSearch()

  
  @ViewChild('myForm') form!: NgForm;
  driversList = new FormControl('', [Validators.required]);
  beginTime = new FormControl('', [Validators.required]);
  beginDate = new FormControl('', [Validators.required]);
  endTime = new FormControl('', [Validators.required]);
  tripType = new FormControl('', [Validators.required]);
  endDate = new FormControl('', [Validators.required]);

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  
  getErrorRequiredMessage() {
    return 'يجب أن تدخل قيمة';
  }

  constructor() {
    this.getTrips()
  }

  getTrips() {
    this.trips = [
      {
        id: 1,
        driverName: 'Mostafa Mhli',
        clientName: 'Yazan Abbas',
        tripState: 'مؤكدة',
        tripType: 'عادية',
        tripDate: moment().format('DD-MM-YYYY'),
        tripTime: '10:58',
        tripCost: 10000
      },
      {
        id: 2,
        driverName: 'Mostafa Mhli',
        clientName: 'Yazan Abbas',
        tripState: 'مؤكدة',
        tripType: 'عادية',
        tripDate: moment().format('DD-MM-YYYY'),
        tripTime: '10:58',
        tripCost: 10000
      },
      {
        id: 3,
        driverName: 'Mostafa Mhli',
        clientName: 'Yazan Abbas',
        tripState: 'مؤكدة',
        tripType: 'عادية',
        tripDate: moment().format('DD-MM-YYYY'),
        tripTime: '10:58',
        tripCost: 10000
      },
      {
        id: 4,
        driverName: 'Mostafa Mhli',
        clientName: 'Yazan Abbas',
        tripState: 'مؤكدة',
        tripType: 'عادية',
        tripDate: moment().format('DD-MM-YYYY'),
        tripTime: '10:58',
        tripCost: 10000
      },
      {
        id: 5,
        driverName: 'Mostafa Mhli',
        clientName: 'Yazan Abbas',
        tripState: 'مؤكدة',
        tripType: 'عادية',
        tripDate: moment().format('DD-MM-YYYY'),
        tripTime: '10:58',
        tripCost: 10000
      },
      {
        id: 6,
        driverName: 'Mostafa Mhli',
        clientName: 'Yazan Abbas',
        tripState: 'مؤكدة',
        tripType: 'عادية',
        tripDate: moment().format('DD-MM-YYYY'),
        tripTime: '10:58',
        tripCost: 10000
      },
      {
        id: 7,
        driverName: 'Mostafa Mhli',
        clientName: 'Yazan Abbas',
        tripState: 'مؤكدة',
        tripType: 'عادية',
        tripDate: moment().format('DD-MM-YYYY'),
        tripTime: '10:58',
        tripCost: 10000
      }
    ]
  }

  loadMore() {
    this.filter.pageIndex = this.filter.pageIndex + 1;
    this.getTrips()
  }

  onClick(item:any){
    console.log(item)
  }

  onSubmit(){
    console.log(this.form.value)
  }
}
