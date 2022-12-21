import { Component } from '@angular/core';
import { Transfer } from 'src/app/core/models/drivers.mode';
import { FilterWithSearch } from 'src/app/core/models/filters.model';
import { TransferType } from 'src/app/core/enums/genric.enums';
import { MatDialog } from '@angular/material/dialog';
import { AddTransferComponent } from '../add-transfer/add-transfer.component';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss']
})
export class TransfersComponent {
  transfers: Transfer[] = []
  filter: FilterWithSearch = new FilterWithSearch()
  TransferTypeEnum = TransferType

  constructor(private addTransfers:MatDialog) {
    this.getDrivers()
  }

  getDrivers() {
    this.transfers = [
      {
        id: 1,
        accountantName: "Wael",
        driverName: "ali",
        accountCreationDate: "12-9-2022",
        tranferType: TransferType.remittance,
        stock: 200.12
      },
      {
        id: 2,
        accountantName: "Omar",
        driverName: "ali",
        accountCreationDate: "12-9-2022",
        tranferType: TransferType.remittance,
        stock: 200.12
      },
      {
        id: 3,
        accountantName: "Wael",
        driverName: "ali",
        accountCreationDate: "12-9-2022",
        tranferType: TransferType.remittance,
        stock: 200.12
      },
      {
        id: 4,
        accountantName: "Wael",
        driverName: "ali",
        accountCreationDate: "12-9-2022",
        tranferType: TransferType.recovery,
        stock: 200.12
      },
      {
        id: 5,
        accountantName: "Wael",
        driverName: "ali",
        accountCreationDate: "12-9-2022",
        tranferType: TransferType.recovery,
        stock: 200.12
      }
    ]
  }
  loadMore() {
    this.filter.pageIndex = this.filter.pageIndex + 1;
    this.getDrivers()
  }
  addTransfer(){
    this.addTransfers.open(AddTransferComponent,{
      width:"50%"
    })
  }
}
