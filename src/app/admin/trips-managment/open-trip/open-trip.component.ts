import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingsServicesService } from 'src/app/core/services/settings-services.service';
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

  constructor(private confirmDialog: MatDialog,
    private tripsService: TripsServicesService,
    private settingService: SettingsServicesService
  ) {
    this.getOpenTrip();
  }

  getOpenTrip() {
    this.settingService.getOpenTrips().subscribe((res: any) => {
      this.reasons = res.items
      console.log(this.reasons)
    })
  }

  delete(id: number) {
    // this.reasons = this.tripsService.deleteOpentripType(id);
  }

  onSubmit() {
    if (this.arabicPackageName && this.englishPackageName) {
      let model = {
        name: this.englishPackageName,
        arName: this.arabicPackageName
      }
      this.settingService.addPackage(model).subscribe(res => {
        this.getOpenTrip();
      })
    }

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
