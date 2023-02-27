import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FilterWithSearch } from 'src/app/core/models/filters.model';
import { AddNewTypeComponent } from './add-new-type/add-new-type.component';
import { Role } from 'src/app/core/models/roles.model';
import { AccountStatus } from 'src/app/core/enums/genric.enums';
import { ConfirmComponent } from '../../confirm/confirm.component';
import { SettingsServicesService } from 'src/app/core/services/settings-services.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent {
  filter: FilterWithSearch = new FilterWithSearch()
  accountStatusEnum = AccountStatus
  typesList: string[] = [];
  roles: Role[] = []

  constructor(private addType: MatDialog, private confirmChangeStatus: MatDialog, private settingsServcie: SettingsServicesService) {
    this.getTypes();
  }

  getTypes() {
    //this.roles = this.settingsServcie.getAllRoles();
  }


  addNewType() {
    this.addType.open(AddNewTypeComponent, {
      width: "50%"
    })
  }

  confirm(item: Role) {
    console.log(item)
    let dialog = this.confirmChangeStatus.open(ConfirmComponent, {
      width: "40%",
      data: item
    })
    dialog.afterClosed().subscribe((result: any) => {
      if (result) {
        let index = this.roles.findIndex(a => a.id == result.id);
        if (index != -1) {
          this.roles[index].accountStatus = result.accountStatus;
        }
      }
    })
  }
}
