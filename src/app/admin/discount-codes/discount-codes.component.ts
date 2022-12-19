import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as moment from 'moment';

export interface PeriodicElement {
  discountName: string;
  discountCode: string;
  discountValue: number;
  outDate: string;
}


@Component({
  selector: 'app-discount-codes',
  templateUrl: './discount-codes.component.html',
  styleUrls: ['./discount-codes.component.css']
})
export class DiscountCodesComponent {
  displayedColumns: string[] = ['discountName', 'discountCode', 'discountValue', 'outDate', 'enable', 'delete'];

  dataSource = new MatTableDataSource<PeriodicElement>([
    { discountName: 'ABCDEFG', discountCode: 'abcdef', discountValue: 90, outDate: '2022-10-21' },
    { discountName: 'ABCDEF', discountCode: 'abcdef', discountValue: 90, outDate: '2022-10-21' }
  ]);

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild('myForm') form!: NgForm;
  discountName = new FormControl('', [Validators.required]);
  discountCode = new FormControl('', [Validators.required]);
  outDate = new FormControl('', [Validators.required]);
  discountValue = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);

  getErrorRequiredMessage() {
    if (this.discountValue.hasError('pattern')) {
      return 'يسمح فقط باستخدام الأرقام(0-9)';
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
      discountName: this.form.value.discountName,
      discountCode: this.form.value.discountCode,
      discountValue: this.form.value.discountValue,
      outDate: (moment(this.form.value.outDate)).format('yyyy-M-D')
    });
    this.dataSource.data = data;
  }

  deleteTableItem(element:any){
    const data = this.dataSource.data.filter(item => {
      return item.discountName !== element.discountName
    })
    this.dataSource.data = data;
  }
}
