import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



export interface PeriodicElement {
  userName: string;
  mobile: number;
  creationDate: string;
  NumOfTrips: number;
  eval: number;
  activatedCode: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { userName: 'Mostafa Mhli', mobile: 95365522, creationDate: '2022-10-21', NumOfTrips: 62, eval: 3.8, activatedCode: 123456 },
  { userName: 'Ali Mhli', mobile: 95365522, creationDate: '2022-10-21', NumOfTrips: 62, eval: 3.8, activatedCode: 123456 },
  { userName: 'Foaad Mhli', mobile: 95365522, creationDate: '2022-10-21', NumOfTrips: 62, eval: 3.8, activatedCode: 123456 },
  { userName: 'Rami Mhli', mobile: 95365522, creationDate: '2022-10-21', NumOfTrips: 62, eval: 3.8, activatedCode: 123456 },
  { userName: 'Rema Mhli', mobile: 95365522, creationDate: '2022-10-21', NumOfTrips: 62, eval: 3.8, activatedCode: 123456 },
  { userName: 'Florance Mhli', mobile: 95365522, creationDate: '2022-10-21', NumOfTrips: 62, eval: 3.8, activatedCode: 123456 },
  { userName: 'Mnal Mhli', mobile: 95365522, creationDate: '2022-10-21', NumOfTrips: 62, eval: 3.8, activatedCode: 123456 },
  { userName: 'Mostafa Mhli', mobile: 95365522, creationDate: '2022-10-21', NumOfTrips: 62, eval: 3.8, activatedCode: 123456 },
  { userName: 'Ali Mhli', mobile: 95365522, creationDate: '2022-10-21', NumOfTrips: 62, eval: 3.8, activatedCode: 123456 },
  { userName: 'Foaad Mhli', mobile: 95365522, creationDate: '2022-10-21', NumOfTrips: 62, eval: 3.8, activatedCode: 123456 },
  { userName: 'Rami Mhli', mobile: 95365522, creationDate: '2022-10-21', NumOfTrips: 62, eval: 3.8, activatedCode: 123456 },
  { userName: 'Rema Mhli', mobile: 95365522, creationDate: '2022-10-21', NumOfTrips: 62, eval: 3.8, activatedCode: 123456 },
  { userName: 'Florance Mhli', mobile: 95365522, creationDate: '2022-10-21', NumOfTrips: 62, eval: 3.8, activatedCode: 123456 },
  { userName: 'Mnal Mhli', mobile: 95365522, creationDate: '2022-10-21', NumOfTrips: 62, eval: 3.8, activatedCode: 123456 },
  { userName: 'Mostafa Mhli', mobile: 95365522, creationDate: '2022-10-21', NumOfTrips: 62, eval: 3.8, activatedCode: 123456 },
  { userName: 'Ali Mhli', mobile: 95365522, creationDate: '2022-10-21', NumOfTrips: 62, eval: 3.8, activatedCode: 123456 },
  { userName: 'Foaad Mhli', mobile: 95365522, creationDate: '2022-10-21', NumOfTrips: 62, eval: 3.8, activatedCode: 123456 },
  { userName: 'Rami Mhli', mobile: 95365522, creationDate: '2022-10-21', NumOfTrips: 62, eval: 3.8, activatedCode: 123456 },
  { userName: 'Rema Mhli', mobile: 95365522, creationDate: '2022-10-21', NumOfTrips: 62, eval: 3.8, activatedCode: 123456 },
  { userName: 'Mnal Mhli', mobile: 95365522, creationDate: '2022-10-21', NumOfTrips: 62, eval: 3.8, activatedCode: 123456 }
];

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {

  displayedColumns: string[] = ['userName', 'mobile', 'creationDate', 'NumOfTrips', 'eval', 'activatedCode', 'accountActivation'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.paginator._intl.itemsPerPageLabel = 'عدد المعلومات بالصفحة';
    this.paginator._intl.nextPageLabel = 'الصفحة التالية';
    this.paginator._intl.previousPageLabel = 'الصفحة السابقة';
    this.paginator._intl.firstPageLabel = 'الصفحة الأولى';
    this.paginator._intl.lastPageLabel = 'الصفحة الأخيرة';
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  };

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
