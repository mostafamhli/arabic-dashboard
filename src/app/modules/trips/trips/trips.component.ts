import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  driverName: string;
  clientName: string;
  tripState: string;
  tripType: string;
  tripDate: string;
  tripTime: string;
  tripCost: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { driverName: 'Mostafa Mhli', clientName: 'Yazan Abbas', tripState: 'مؤكدة', tripType: 'عادية', tripDate: '2022-10-22', tripTime: '10:58', tripCost: 10000 },
  { driverName: 'Mostafa Mhli', clientName: 'Yazan Abbas', tripState: 'مؤكدة', tripType: 'عادية', tripDate: '2022-10-22', tripTime: '10:58', tripCost: 10000 },
  { driverName: 'Mostafa Mhli', clientName: 'Yazan Abbas', tripState: 'مؤكدة', tripType: 'عادية', tripDate: '2022-10-22', tripTime: '10:58', tripCost: 10000 },
  { driverName: 'Mostafa Mhli', clientName: 'Yazan Abbas', tripState: 'مؤكدة', tripType: 'عادية', tripDate: '2022-10-22', tripTime: '10:58', tripCost: 10000 },
  { driverName: 'Mostafa Mhli', clientName: 'Yazan Abbas', tripState: 'مؤكدة', tripType: 'عادية', tripDate: '2022-10-22', tripTime: '10:58', tripCost: 10000 },
  { driverName: 'Mostafa Mhli', clientName: 'Yazan Abbas', tripState: 'مؤكدة', tripType: 'عادية', tripDate: '2022-10-22', tripTime: '10:58', tripCost: 10000 },
  { driverName: 'Mostafa Mhli', clientName: 'Yazan Abbas', tripState: 'مؤكدة', tripType: 'عادية', tripDate: '2022-10-22', tripTime: '10:58', tripCost: 10000 },
  { driverName: 'Mostafa Mhli', clientName: 'Yazan Abbas', tripState: 'مؤكدة', tripType: 'عادية', tripDate: '2022-10-22', tripTime: '10:58', tripCost: 10000 },
  { driverName: 'Mostafa Mhli', clientName: 'Yazan Abbas', tripState: 'مؤكدة', tripType: 'عادية', tripDate: '2022-10-22', tripTime: '10:58', tripCost: 10000 },
  { driverName: 'Mostafa Mhli', clientName: 'Yazan Abbas', tripState: 'مؤكدة', tripType: 'عادية', tripDate: '2022-10-22', tripTime: '10:58', tripCost: 10000 },
  { driverName: 'Mostafa Mhli', clientName: 'Yazan Abbas', tripState: 'مؤكدة', tripType: 'عادية', tripDate: '2022-10-22', tripTime: '10:58', tripCost: 10000 },
  { driverName: 'Mostafa Mhli', clientName: 'Yazan Abbas', tripState: 'مؤكدة', tripType: 'عادية', tripDate: '2022-10-22', tripTime: '10:58', tripCost: 10000 },
  { driverName: 'Mostafa Mhli', clientName: 'Yazan Abbas', tripState: 'مؤكدة', tripType: 'عادية', tripDate: '2022-10-22', tripTime: '10:58', tripCost: 10000 },
  { driverName: 'Mostafa Mhli', clientName: 'Yazan Abbas', tripState: 'مؤكدة', tripType: 'عادية', tripDate: '2022-10-22', tripTime: '10:58', tripCost: 10000 },
  { driverName: 'Mostafa Mhli', clientName: 'Yazan Abbas', tripState: 'مؤكدة', tripType: 'عادية', tripDate: '2022-10-22', tripTime: '10:58', tripCost: 10000 },
  { driverName: 'Mostafa Mhli', clientName: 'Yazan Abbas', tripState: 'مؤكدة', tripType: 'عادية', tripDate: '2022-10-22', tripTime: '10:58', tripCost: 10000 },
  { driverName: 'Mostafa Mhli', clientName: 'Yazan Abbas', tripState: 'مؤكدة', tripType: 'عادية', tripDate: '2022-10-22', tripTime: '10:58', tripCost: 10000 },
  { driverName: 'Mostafa Mhli', clientName: 'Yazan Abbas', tripState: 'مؤكدة', tripType: 'عادية', tripDate: '2022-10-22', tripTime: '10:58', tripCost: 10000 },
  { driverName: 'Mostafa Mhli', clientName: 'Yazan Abbas', tripState: 'مؤكدة', tripType: 'عادية', tripDate: '2022-10-22', tripTime: '10:58', tripCost: 10000 },
  { driverName: 'Mostafa Mhli', clientName: 'Yazan Abbas', tripState: 'مؤكدة', tripType: 'عادية', tripDate: '2022-10-22', tripTime: '10:58', tripCost: 10000 },


];

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent {

  displayedColumns: string[] = ['driverName', 'clientName', 'tripState', 'tripType', 'tripDate', 'tripTime', 'tripCost','tripShow'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.paginator._intl.itemsPerPageLabel = 'عدد المعلومات بالصفحة';
    this.paginator._intl.nextPageLabel = 'الصفحة التالية';
    this.paginator._intl.previousPageLabel = 'الصفحة السابقة';
    this.paginator._intl.firstPageLabel = 'الصفحة الأولى';
    this.paginator._intl.lastPageLabel = 'الصفحة الأخيرة';
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  };
}
