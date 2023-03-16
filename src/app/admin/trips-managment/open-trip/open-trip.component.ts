import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingsServicesService } from 'src/app/core/services/settings-services.service';
import { TripsServicesService } from 'src/app/core/services/trips-services.service';
import { ErrorHandelComponent } from 'src/app/shared/components/error-handel/error-handel.component';
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
    private settingService: SettingsServicesService,
    private errorModal: MatDialog) {
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
        this.id = undefined
      })
    }
  }

  fillToEdit(item: any) {
    this.editMode = true
    this.arabicPackageName = item.arName
    this.englishPackageName = item.name
    this.id = item.id
  }

  fillToDelete(item: any) {
    this.settingService.deletePackage(item.id).subscribe(res => {
      this.getOpenTrip();
    }, err => {
      let error = err['error']
      error = error['error']
      let errorList = error.validationErrors
      this.errorModal.open(ErrorHandelComponent, {
        data: {
          title: error.message,
          errorList: errorList
        }
      })
    })
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
