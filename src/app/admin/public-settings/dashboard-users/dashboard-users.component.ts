import { Component } from '@angular/core';
import { AccountStatus } from 'src/app/core/enums/genric.enums';
import { FilterWithSearch } from 'src/app/core/models/filters.model';



@Component({
  selector: 'app-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.css']
})
export class DashboardUsersComponent {

  dashboardUsers: any[] = []
  filter: FilterWithSearch = new FilterWithSearch()
  accountStatusEnum = AccountStatus

  constructor(){
    this.getDashboardUsers()
  }
  
  getDashboardUsers() {
    this.dashboardUsers = [
      {
        id:1,
        userName: 'Mostafa Mhli',
        type: 'admin',
        accountCreateDate: '22-12-2022',
        email: 'mostafa1234@gmail.com',
        accountStatus: AccountStatus.active,
      },
      {
        id:2,
        userName: 'Mostafa Mhli',
        type: 'admin',
        accountCreateDate: '22-12-2022',
        email: 'mostafa1234@gmail.com',
        accountStatus: AccountStatus.active,
      },
      {
        id:3,
        userName: 'Mostafa Mhli',
        type: 'admin',
        accountCreateDate: '22-12-2022',
        email: 'mostafa1234@gmail.com',
        accountStatus: AccountStatus.inActive,
      },
    ]
  }
  
  loadMore() {
    this.filter.pageIndex = this.filter.pageIndex + 1;
    this.getDashboardUsers()
  }
}
