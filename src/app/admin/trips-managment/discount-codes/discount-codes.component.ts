import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DiscountCodeStatus } from 'src/app/core/enums/genric.enums';
import { FilterWithSearch } from 'src/app/core/models/filters.model';
import { AddDiscountCodeComponent } from './add-discount-code/add-discount-code.component';
import { ConfirmComponent } from '../../confirm/confirm.component';
import { TripsServicesService } from 'src/app/core/services/trips-services.service';

@Component({
  selector: 'app-discount-codes',
  templateUrl: './discount-codes.component.html',
  styleUrls: ['./discount-codes.component.scss']
})
export class DiscountCodesComponent {

  discountCodes: any[] = []
  filter: FilterWithSearch = new FilterWithSearch()
  discountCodeStatusEnum = DiscountCodeStatus
  endOfResult: boolean = false
  constructor(private addDiscountCodes: MatDialog, private confirmDialog: MatDialog, private tripsServices: TripsServicesService) {
    this.getDiscountCodes()
  }

  getDiscountCodes() {
    this.tripsServices.getAllDiscountCodes(this.filter).subscribe((res: any) => {
      if (this.filter.skipCount == 0) {
        this.discountCodes = res.items
      }
      else
        this.discountCodes = this.discountCodes.concat(res.items)
      if (res.items.length < this.filter.maxResultCount) {
        this.endOfResult = true;
      } else this.endOfResult = false;
    }, (err: any) => { });
  }


  loadMore() {
    this.filter.skipCount = this.filter.skipCount + this.filter.maxResultCount;
    this.getDiscountCodes()
  }

  addDiscountCode() {
    let dialog = this.confirmDialog.open(AddDiscountCodeComponent, {
      width: "50%"
    })
    dialog.afterClosed().subscribe((res: any) => {
      this.getDiscountCodes();
    })
  }

  edit(item: any) {
    item.status = 'edit';
    let dialog = this.confirmDialog.open(AddDiscountCodeComponent, {
      width: "50%",
      data: item,
    })
    dialog.afterClosed().subscribe((res: any) => {
      this.getDiscountCodes();
    })
  }

  deleteTableItem(elementId: number) {
    this.tripsServices.deleteDiscountCode(elementId).subscribe(res => {
      console.log(res);
      this.getDiscountCodes();
    });
  }

  confirmDelete(id: number) {
    let dialog = this.confirmDialog.open(ConfirmComponent, {
      data: {
        message: "هل أنت متأكد من حذف الكوبون ؟"
      }
    })
    dialog.afterClosed().subscribe((res: boolean) => {
      if (res) {
        this.deleteTableItem(id)
      } else {

      }
    });
  }
}
