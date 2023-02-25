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
  editMode: boolean = false
  id: any

  constructor(private confirmDialog: MatDialog,
    private tripsService: TripsServicesService,
    private settingService: SettingsServicesService
  ) {
    this.getOpenTrip();
  }

  getOpenTrip() {
    this.settingService.getOpenTrips().subscribe((res: any) => {
      this.reasons = res.items
    })
  }

  delete(id: number) {
    // this.reasons = this.tripsService.deleteOpentripType(id);
  }

  onSubmit() {
    if (this.arabicPackageName && this.englishPackageName && !this.editMode) {
      let model = {
        name: this.englishPackageName,
        arName: this.arabicPackageName
      }
      this.settingService.addPackage(model).subscribe(res => {
        this.getOpenTrip();
        this.editMode = false
        this.englishPackageName = undefined
        this.arabicPackageName = undefined
      })
    } else {
      let model = {
        id: this.id,
        name: this.englishPackageName,
        arName: this.arabicPackageName
      }
      this.settingService.editPackage(model).subscribe(res => {
        this.getOpenTrip();
        this.editMode = false
        this.englishPackageName = undefined
        this.arabicPackageName = undefined
      })
    }
  }

  fillToEdit(item: any) {
    this.editMode = true
    this.arabicPackageName = item.name
    this.englishPackageName = item.arName
    this.id = item.id
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
