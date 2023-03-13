import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingsServicesService } from 'src/app/core/services/settings-services.service';
import { ConfirmComponent } from '../../confirm/confirm.component';
import { AddNewServiceComponent } from '../add-new-service/add-new-service.component';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent {

  services: any[] = [];
  constructor(private settingsService: SettingsServicesService, private addNewServiceDialog: MatDialog) {
    this.getAllServices();
  }

  getAllServices() {
    //this.services= this.settingsService.getVehicleTypes();
    this.settingsService.getAllVehcleType().subscribe((res: any) => {
      this.services = res.items
    })
  }

  addNewService() {
    this.addNewServiceDialog.open(AddNewServiceComponent, {
      width: "50%"
    }).afterClosed().subscribe(res => {
      this.getAllServices()
    })
  }

  delete(serviceId: number) {
    this.addNewServiceDialog.open(ConfirmComponent, {
      width: "50%",
      data: 'هل أنت متأكد من حذف هذه الخدمة؟'
    }).afterClosed().subscribe(res => {
      if (res) {
        this.settingsService.deleteVehcleType(serviceId).subscribe(res => {
          this.getAllServices()
        })
      }
    })
  }
}
