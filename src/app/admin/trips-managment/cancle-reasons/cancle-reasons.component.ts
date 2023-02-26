import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TripsServicesService } from 'src/app/core/services/trips-services.service';
import { ConfirmComponent } from '../../confirm/confirm.component';


@Component({
  selector: 'app-cancle-reasons',
  templateUrl: './cancle-reasons.component.html',
  styleUrls: ['./cancle-reasons.component.css']
})
export class CancleReasonsComponent {
  arabicCancleName: any;
  englishCancleName: any;
  reasons: any[] = [];

  constructor(private confirmDialog: MatDialog, private tripsService: TripsServicesService) {
    this.getCancleReasons();
  }

  getCancleReasons() {
    this.tripsService.getAllCancleReason().subscribe(res => {
      this.reasons = res.items;
    });
  }

  inActivate(item: any) {
    this.tripsService.inActivateCancel(item.id).subscribe(res => {
      item.deleted = true
    }, err => {

    });
  }

  onSubmit() {
    if (this.englishCancleName) this.englishCancleName = this.englishCancleName.trim();
    if (this.arabicCancleName) this.arabicCancleName = this.arabicCancleName.trim();

    if (this.englishCancleName != '' && this.arabicCancleName != '') {
      let reason = {
        reason: this.englishCancleName,
        arReason: this.arabicCancleName
      }
      this.tripsService.addCancleReason(reason).subscribe(res => {
        this.reasons.push(res)
      })
      this.arabicCancleName = undefined;
      this.englishCancleName = undefined;
    }
  }

  confirmDelete(id: number) {
    let dialog = this.confirmDialog.open(ConfirmComponent, {
      data: {
        message: "هل أنت متأكد من إلغاء تفعيل السبب ؟"
      }
    })
    dialog.afterClosed().subscribe((res: boolean) => {
      if (res) {
        this.inActivate(id)
      } else {

      }
    });
  }

}
