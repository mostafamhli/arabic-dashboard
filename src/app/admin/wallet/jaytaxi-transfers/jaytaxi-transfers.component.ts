import { Component } from '@angular/core';
import { Transfer } from 'src/app/core/models/drivers.mode';
import { FilterWithSearch } from 'src/app/core/models/filters.model';
import { TransferType } from 'src/app/core/enums/genric.enums';
import { MatDialog } from '@angular/material/dialog';
import { AddTransferComponent } from '../add-transfer/add-transfer.component';
import { DriverServicesService } from 'src/app/core/services/driver-services.service';
import { WalletService } from 'src/app/core/services/wallet.service';

@Component({
  selector: 'app-jaytaxi-transfers',
  templateUrl: './jaytaxi-transfers.component.html',
  styleUrls: ['./jaytaxi-transfers.component.scss']
})
export class JaytaxiTransfersComponent {
  transfers: any[] = [];
  filter: FilterWithSearch = new FilterWithSearch();
  TransferTypeEnum = TransferType;
  endOfResult: boolean = false

  constructor(private addTransfers: MatDialog, private walletService: WalletService) {
    this.getTransactions();
  }

  getTransactions() {
    this.walletService.getTransaction(this.filter).subscribe((res: any) => {
      if (this.filter.skipCount == 0) {
        this.transfers = res.items
        console.log(this.transfers)
      }
      else
        this.transfers = this.transfers.concat(res.items)
      if (res.items.length < this.filter.maxResultCount) {
        this.endOfResult = true;
      } else this.endOfResult = false;
    })
  }

  searchInTransferTable(searchWord: string) {
    //this.transfers = this.driverService.searchInTransferTable(searchWord);
  }

  loadMore() {
    this.filter.skipCount = this.filter.skipCount + 1;
    this.getTransactions()
  }

  addTransfer() {
    this.addTransfers.open(AddTransferComponent, {
      width: "50%"
    }).afterClosed().subscribe(res => {
      this.getTransactions()
    })
  }
}
