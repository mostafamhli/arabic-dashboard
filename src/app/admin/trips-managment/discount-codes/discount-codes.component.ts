import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DiscountCodeStatus } from 'src/app/core/enums/genric.enums';
import { FilterWithSearch } from 'src/app/core/models/filters.model';
import { AddDiscountCodeComponent } from './add-discount-code/add-discount-code.component';

@Component({
  selector: 'app-discount-codes',
  templateUrl: './discount-codes.component.html',
  styleUrls: ['./discount-codes.component.scss']
})
export class DiscountCodesComponent {

  discountCodes: any[] = []
  filter: FilterWithSearch = new FilterWithSearch()
  discountCodeStatusEnum = DiscountCodeStatus

  constructor(private addDiscountCodes:MatDialog) {
    this.getDiscountCodes()
  }

  getDiscountCodes() {
    this.discountCodes = [
      {
        id:1,
        discountName: 'ABCDEFG',
        discountCode: 'abcdef',
        usingTimes:5,
        discountValue: 90,
        outDate: '22-12-2022',
        discountCodeStatus: DiscountCodeStatus.inActive,
      },
      {
        id:2,
        discountName: 'ABCDEFG',
        discountCode: 'abcdef',
        usingTimes:8,
        discountValue: 90,
        outDate: '22-12-2022',
        discountCodeStatus: DiscountCodeStatus.active,
      },
      {
        id:3,
        discountName: 'ABCDEFG',
        discountCode: 'abcdef',
        usingTimes:5,
        discountValue: 90,
        outDate: '22-12-2022',
        discountCodeStatus: DiscountCodeStatus.inActive,
      },
    ]
  }


  loadMore() {
    this.filter.pageIndex = this.filter.pageIndex + 1;
    this.getDiscountCodes()
  }
  
  addDiscountCode(){
    this.addDiscountCodes.open(AddDiscountCodeComponent,{
      width:"50%"
    })
  }


  deleteTableItem(elementId: number) {
    console.log(elementId)
    const data = this.discountCodes.filter(item => {
      return item.id !== elementId
    })
    this.discountCodes = data
    /*
    const data = this.dataSource.data.filter(item => {
      return item.discountName !== element.discountName
    })
    this.dataSource.data = data;
    */
  }
}
