import { Component } from '@angular/core';
import { AccountStatus } from 'src/app/core/enums/genric.enums';
import { FilterWithSearch } from 'src/app/core/models/filters.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';
import { ClientServicesService } from '../../core/services/client-services.service';



@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {

  clients: any[] = []
  filter: FilterWithSearch = new FilterWithSearch()
  accountStatusEnum = AccountStatus
  endOfResult:boolean = false

  constructor(private confirmChangeStatus: MatDialog, private clientServices: ClientServicesService) {
    this.getClients()
  }

  getClients() {
    this.clientServices.getAllClients(this.filter).subscribe(
      res => {
        if (this.filter.skipCount == 0) {
          this.clients = res.items
        }
        else
          this.clients = this.clients.concat(res.items)
          if(res.items.length < this.filter.maxResultCount) {
            this.endOfResult = true;
          } else this.endOfResult = false;
      }
    )
  }


  loadMore() {
    this.filter.skipCount = this.filter.skipCount + 1;
    this.getClients()
  }

  confirm(item: any) {
    let dialog = this.confirmChangeStatus.open(ConfirmComponent, {
      width: "40%",
      data: item
    })
    dialog.afterClosed().subscribe((result: any) => {
      if (result) {
        let clientIndex = this.clients.findIndex(a => a.id == result.id)
        if (clientIndex != -1) {
          this.clients[clientIndex].accountStatus = result.accountStatus
          console.log(this.clients[clientIndex])
        }
      }
    })
  }
}
