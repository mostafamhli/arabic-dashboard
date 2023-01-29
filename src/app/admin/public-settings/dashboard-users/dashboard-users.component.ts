import { Component } from '@angular/core';
import { AccountStatus } from 'src/app/core/enums/genric.enums';
import { FilterWithSearch } from 'src/app/core/models/filters.model';
import { SettingsServicesService } from 'src/app/core/services/settings-services.service';



@Component({
  selector: 'app-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.css']
})
export class DashboardUsersComponent {

  dashboardUsers: any[] = []
  filter: FilterWithSearch = new FilterWithSearch()
  accountStatusEnum = AccountStatus

  constructor(private settingsServices: SettingsServicesService) {
    this.getDashboardUsers()
  }

  getDashboardUsers() {
    this.dashboardUsers = this.settingsServices.getAllDashboardUsers();
  }

  search(word: any) {
    this.dashboardUsers = this.settingsServices.searchInDashboardService(word.value);
  }

  loadMore() {
    this.filter.skipCount = this.filter.skipCount + 1;
    this.getDashboardUsers()
  }


}
