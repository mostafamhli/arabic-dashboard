import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as moment from 'moment';
import { AccountStatus } from 'src/app/core/enums/genric.enums';
import { FilterWithSearch } from 'src/app/core/models/filters.model';
import { AddNewAccountComponent } from './add-new-account/add-new-account.component';

export interface PeriodicElement {
  userName: string;
  type: string;
  accountCreateDate: string;
  email: string;
}

@Component({
  selector: 'app-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.css']
})
export class DashboardUsersComponent {

  dashboardUsers: any[] = []
  filter: FilterWithSearch = new FilterWithSearch()
  accountStatusEnum = AccountStatus

  constructor(private addNewUserAccount:MatDialog){
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


  addNewAccount(){
    this.addNewUserAccount.open(AddNewAccountComponent,{
      width:"50%"
    })
  }
}
