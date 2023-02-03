import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TripsServicesService } from 'src/app/core/services/trips-services.service';
import { ConfirmComponent } from '../../confirm/confirm.component';

@Component({
  selector: 'app-open-trip',
  templateUrl: './open-trip.component.html',
  styleUrls: ['./open-trip.component.scss']
})
export class OpenTripComponent {
  arabicPackageName: any;
  englishPackageName: any;
  reasons: any[] = [];

  constructor(private confirmDialog: MatDialog, private tripsService: TripsServicesService) {
    this.getOpenTrip();
  }

  getOpenTrip() {
    this.reasons = this.tripsService.getAllOpenTripTypes();
  }

  delete(id: number) {
    this.reasons = this.tripsService.deleteOpentripType(id);
  }

  onSubmit() {
    let reason = { id: this.reasons[this.reasons.length - 1].id + 1, nameAr: this.tripsService.addOpenTripType(this.arabicPackageName), nameEn: this.tripsService.addCancleReason(this.englishPackageName)  }
    this.reasons.push(reason);
    this.arabicPackageName = undefined;
    this.englishPackageName = undefined;
  }

  confirmDelete(id: number) {
    let dialog = this.confirmDialog.open(ConfirmComponent, {
      data: {
        message: "هل أنت متأكد من حذف الباقة ؟"
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
