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
  editMode = false
  id: any = 0

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
    if (this.arabicCancleName && this.englishCancleName && !this.editMode) {
      let model = {
        reason: this.englishCancleName,
        arReason: this.arabicCancleName
      }
      this.tripsService.addCancleReason(model).subscribe(res => {
        this.reasons.push(res)
        this.editMode = false
        this.englishCancleName = undefined
        this.arabicCancleName = undefined
      })
    } else {
      let model = {
        id: this.id,
        reason: this.englishCancleName,
        arReason: this.arabicCancleName
      }
      this.tripsService.editCancleReason(model).subscribe(res => {
        this.getCancleReasons();
        this.editMode = false
        this.englishCancleName = undefined
        this.arabicCancleName = undefined
        this.id = undefined
      })
    }
  }

  
  fillToEdit(item: any) {
    this.editMode = true
    this.arabicCancleName = item.reason
    this.englishCancleName = item.arReason
    this.id = item.id
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
