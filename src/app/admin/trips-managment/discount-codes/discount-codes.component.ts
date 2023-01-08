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

  constructor(private addDiscountCodes: MatDialog, private confirmDialog: MatDialog, private tripsServices: TripsServicesService) {
    this.getDiscountCodes()
  }

  getDiscountCodes() {
    this.discountCodes = this.tripsServices.getAllDiscountCodes();
  }


  loadMore() {
    this.filter.pageIndex = this.filter.pageIndex + 1;
    this.getDiscountCodes()
  }

  addDiscountCode() {
    this.addDiscountCodes.open(AddDiscountCodeComponent, {
      width: "50%"
    })
  }


  deleteTableItem(elementId: number) {
    this.discountCodes = this.tripsServices.deleteDiscountCode(elementId);
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
