import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountStatus } from 'src/app/core/enums/genric.enums';
import { FilterWithSearch } from 'src/app/core/models/filters.model';
import { SettingsServicesService } from 'src/app/core/services/settings-services.service';
import { ConfirmComponent } from '../../confirm/confirm.component';



@Component({
  selector: 'app-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.css']
})
export class DashboardUsersComponent {

  dashboardUsers: any[] = []
  filter: FilterWithSearch = new FilterWithSearch()
  accountStatusEnum = AccountStatus
  endOfResult: boolean = false;

  constructor(private settingsServices: SettingsServicesService, private confirmChangeStatus: MatDialog) {
    this.getDashboardUsers()
  }

  getDashboardUsers() {
    this.settingsServices.getAllDashboardUsers(this.filter).subscribe(
      res => {
        if (this.filter.skipCount == 0) {
          this.dashboardUsers = res.items
          console.log(this.dashboardUsers)
        }
        else
          this.dashboardUsers = this.dashboardUsers.concat(res.items)
        if (res.items.length < this.filter.maxResultCount) {
          this.endOfResult = true;
        } else this.endOfResult = false;
      }
    )
  }


  

  loadMore() {
    this.filter.skipCount = this.filter.skipCount + 1;
    this.getDashboardUsers()
  }


  confirm(item: any) {
    let dialog = this.confirmChangeStatus.open(ConfirmComponent, {
      width: "40%",
      data: 'هل متأكد من تغيير حالة الحساب ؟'
    })
    dialog.afterClosed().subscribe((result: any) => {
      if (result) {
        this.settingsServices.changeUserStatus(item.id).subscribe(res => {
          item.isActive = item.isActive == 1 ? 0 : 1;
        }, (err: any) => { })
      } else {

      }
    })
  }

}
