import { Component } from '@angular/core';
import { AccountStatus } from 'src/app/core/enums/genric.enums';
import { FilterWithSearch } from 'src/app/core/models/filters.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';



@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {

  clients: any[] = []
  filter: FilterWithSearch = new FilterWithSearch()
  accountStatusEnum = AccountStatus


  constructor(private confirmChangeStatus:MatDialog) {
    this.getClients()
  }

  getClients() {
    this.clients = [
      {
        id: 1,
        userName: 'Mostafa Mhli',
        mobile: 95365522,
        creationDate: '12-9-2022',
        NumOfTrips: 62,
        eval: 3.8,
        activatedCode: 123456,
        accountStatus: AccountStatus.active
      },

      {
        id: 2,
        userName: 'Mostafa Mhli',
        mobile: 95365522,
        creationDate: '12-9-2022',
        NumOfTrips: 62,
        eval: 3.8,
        activatedCode: 123456,
        accountStatus: AccountStatus.inActive
      },


      {
        id: 3,
        userName: 'Mostafa Mhli',
        mobile: 95365522,
        creationDate: '12-9-2022',
        NumOfTrips: 62,
        eval: 3.8,
        activatedCode: 123456,
        accountStatus: AccountStatus.active
      },


      {
        id: 4,
        userName: 'Mostafa Mhli',
        mobile: 95365522,
        creationDate: '12-9-2022',
        NumOfTrips: 62,
        eval: 3.8,
        activatedCode: 123456,
        accountStatus: AccountStatus.active
      },


      {
        id: 5,
        userName: 'Mostafa Mhli',
        mobile: 95365522,
        creationDate: '12-9-2022',
        NumOfTrips: 62,
        eval: 3.8,
        activatedCode: 123456,
        accountStatus: AccountStatus.active
      },

      {
        id: 6,
        userName: 'ali Mhli',
        mobile: 95365522,
        creationDate: '12-9-2022',
        NumOfTrips: 62,
        eval: 3.8,
        activatedCode: 123456,
        accountStatus: AccountStatus.inActive
      },


      {
        id: 7,
        userName: 'Mostafa Mhli',
        mobile: 95365522,
        creationDate: '12-9-2022',
        NumOfTrips: 62,
        eval: 3.8,
        activatedCode: 123456,
        accountStatus: AccountStatus.inActive
      },
    ]
  }


  loadMore() {
    this.filter.pageIndex = this.filter.pageIndex + 1;
    this.getClients()
  }

  
  confirm(item:any){
    let dialog = this.confirmChangeStatus.open(ConfirmComponent,{
      width:"40%",
      data : item
    })
    dialog.afterClosed().subscribe((result: any) => {
      if(result){
        let clientIndex = this.clients.findIndex(a=>a.id == result.id)
        if(clientIndex != -1) {
          this.clients[clientIndex].accountStatus = result.accountStatus
          console.log(this.clients[clientIndex])
        }
      }
    })
  }
}
