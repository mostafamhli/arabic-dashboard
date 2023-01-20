import { Component } from '@angular/core';
import { Transfer } from 'src/app/core/models/drivers.mode';
import { FilterWithSearch } from 'src/app/core/models/filters.model';
import { TransferType } from 'src/app/core/enums/genric.enums';
import { MatDialog } from '@angular/material/dialog';
import { AddTransferComponent } from '../add-transfer/add-transfer.component';
import { DriverServicesService } from 'src/app/core/services/driver-services.service';

@Component({
  selector: 'app-jaytaxi-transfers',
  templateUrl: './jaytaxi-transfers.component.html',
  styleUrls: ['./jaytaxi-transfers.component.scss']
})
export class JaytaxiTransfersComponent {
  transfers: Transfer[] = [];
  filter: FilterWithSearch = new FilterWithSearch();
  TransferTypeEnum = TransferType;

  constructor(private addTransfers: MatDialog, private driverService: DriverServicesService) {
    this.getDrivers();
  }

  getDrivers() {
    this.transfers = this.driverService.getAllTransfers();
  }

  searchInTransferTable(searchWord: string) {
    this.transfers = this.driverService.searchInTransferTable(searchWord);
  }

  loadMore() {
    this.filter.pageIndex = this.filter.pageIndex + 1;
    this.getDrivers()
  }

  addTransfer() {
    this.addTransfers.open(AddTransferComponent, {
      width: "50%"
    })
  }
}
