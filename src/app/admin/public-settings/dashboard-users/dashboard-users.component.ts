import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as moment from 'moment';

export interface PeriodicElement {
  userName: string;
  type: string;
  accountCreateDate: string;
  email: string;
}

@Component({
  selector: 'app-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.css']
})
export class DashboardUsersComponent {

  displayedColumns: string[] = ['userName', 'type', 'accountCreateDate', 'email', 'enable', 'operations'];

  dataSource = new MatTableDataSource<PeriodicElement>([
    { userName: 'Mostafa Mhli', type: 'admin', accountCreateDate: '2022-12-19', email: 'mostafa1234@gmail.com' },
    { userName: 'Ali Masri', type: 'user', accountCreateDate: '2022-12-19', email: 'ali1234@gmail.com' }
  ]);

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild('myForm') form!: NgForm;
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  address = new FormControl('', [Validators.required]);
  mobile = new FormControl('', [Validators.required]);
  creationDate = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  type = new FormControl('', [Validators.required]);

  getErrorRequiredMessage() {
    if (this.email.hasError('email')) {
      return 'أدخل بريد إلكتروني صالح'
    }
    return 'يجب أن تدخل قيمة';
  }

  ngOnInit() {
    this.paginator._intl.itemsPerPageLabel = 'عدد المعلومات بالصفحة';
    this.paginator._intl.nextPageLabel = 'الصفحة التالية';
    this.paginator._intl.previousPageLabel = 'الصفحة السابقة';
    this.paginator._intl.firstPageLabel = 'الصفحة الأولى';
    this.paginator._intl.lastPageLabel = 'الصفحة الأخيرة';

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  };

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }

  onSubmit() {
    
    const data = this.dataSource.data;
    data.push({
      userName: this.form.value.firstName+ ' '+this.form.value.firstName,
      type: this.form.value.type,
      email: this.form.value.email,
      accountCreateDate: (moment(this.form.value.accountCreateDate)).format('yyyy-M-D')
    });
    this.dataSource.data = data;
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
