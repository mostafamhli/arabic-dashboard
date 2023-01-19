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
    this.reasons = this.tripsService.getAllCancleReason();
  }

  delete(id: number) {
    this.reasons = this.tripsService.deleteCancleReason(id);
  }

  onSubmit() {
    console.log(this.tripsService.addCancleReason(this.arabicCancleName))
    let arabicReason = { id: this.reasons[this.reasons.length - 1].id + 1, name: this.tripsService.addCancleReason(this.arabicCancleName) }
    this.reasons.push(arabicReason);
    let englishReason = { id: this.reasons[this.reasons.length - 1].id + 1, name: this.tripsService.addCancleReason(this.englishCancleName) }
    this.reasons.push(englishReason);
    this.arabicCancleName = undefined;
    this.englishCancleName = undefined;
  }

  confirmDelete(id: number) {
    let dialog = this.confirmDialog.open(ConfirmComponent, {
      data: {
        message: "هل أنت متأكد من حذف السبب ؟"
      }
    })
    dialog.afterClosed().subscribe((res: boolean) => {
      if (res) {
        this.delete(id)
      } else {

      }
    });
  }

}
