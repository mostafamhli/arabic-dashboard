import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FilterWithSearch } from 'src/app/core/models/filters.model';


@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent {

  trips: any[] = []
  filter: FilterWithSearch = new FilterWithSearch()

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
        tripDate: '22-12-2022',
        tripTime: '10:58',
        tripCost: 10000
      },
      {
        id: 2,
        driverName: 'Mostafa Mhli',
        clientName: 'Yazan Abbas',
        tripState: 'مؤكدة',
        tripType: 'عادية',
        tripDate: '22-12-2022',
        tripTime: '10:58',
        tripCost: 10000
      },
      {
        id: 3,
        driverName: 'Mostafa Mhli',
        clientName: 'Yazan Abbas',
        tripState: 'مؤكدة',
        tripType: 'عادية',
        tripDate: '22-12-2022',
        tripTime: '10:58',
        tripCost: 10000
      },
      {
        id: 4,
        driverName: 'Mostafa Mhli',
        clientName: 'Yazan Abbas',
        tripState: 'مؤكدة',
        tripType: 'عادية',
        tripDate: '22-12-2022',
        tripTime: '10:58',
        tripCost: 10000
      },
      {
        id: 5,
        driverName: 'Mostafa Mhli',
        clientName: 'Yazan Abbas',
        tripState: 'مؤكدة',
        tripType: 'عادية',
        tripDate: '22-12-2022',
        tripTime: '10:58',
        tripCost: 10000
      },
      {
        id: 6,
        driverName: 'Mostafa Mhli',
        clientName: 'Yazan Abbas',
        tripState: 'مؤكدة',
        tripType: 'عادية',
        tripDate: '22-12-2022',
        tripTime: '10:58',
        tripCost: 10000
      },
      {
        id: 7,
        driverName: 'Mostafa Mhli',
        clientName: 'Yazan Abbas',
        tripState: 'مؤكدة',
        tripType: 'عادية',
        tripDate: '22-12-2022',
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

}
