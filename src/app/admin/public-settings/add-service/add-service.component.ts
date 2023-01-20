import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingsServicesService } from 'src/app/core/services/settings-services.service';
import { AddNewServiceComponent } from '../add-new-service/add-new-service.component';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent {

  services:any[] = [];
  constructor(private settingsService: SettingsServicesService,private addNewServiceDialog: MatDialog) {
    this.getAllServices();
   }

   getAllServices() {
    this.services= this.settingsService.getVehicleTypes();
    console.log(this.services)
   }

   addNewService(){
    this.addNewServiceDialog.open(AddNewServiceComponent, {
      width: "50%"
    })
   }
}
