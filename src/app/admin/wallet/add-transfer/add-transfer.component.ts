import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FilterWithSearch } from 'src/app/core/models/filters.model';
import { ClientServicesService } from 'src/app/core/services/client-services.service';
import { DriverServicesService } from 'src/app/core/services/driver-services.service';
import { WalletService } from 'src/app/core/services/wallet.service';
import { ErrorHandelComponent } from 'src/app/shared/components/error-handel/error-handel.component';

@Component({
  selector: 'app-add-transfer',
  templateUrl: './add-transfer.component.html',
  styleUrls: ['./add-transfer.component.scss']
})
export class AddTransferComponent {
  filter: FilterWithSearch = new FilterWithSearch()
  searchWord: any = undefined
  transfer = new FormGroup({
    user: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    amountOfMoney: new FormControl('', [Validators.required]),
    walletType: new FormControl('', [Validators.required]),
    searchWord: new FormControl(''),
  })
  constructor(
    private driverService: DriverServicesService,
    private clinicService: ClientServicesService,
    private walletService: WalletService,
    private dialog: DialogRef,
    private errorModal: MatDialog
  ) {
  }

  add() {
    let modal = {
      type: +this.transfer.value.type!,
      amount: +this.transfer.value.amountOfMoney!,
      walletType: +this.transfer.value.walletType!,
      walletId: this.transfer.value.user
    }
    console.log(modal)
    this.walletService.createTransaction(modal).subscribe(res => {
      console.log(res)
      this.dialog.close(true)
    }, err => {
      let error = err['error']
      error = error['error']
      let errorList = error.validationErrors
      this.errorModal.open(ErrorHandelComponent, {
        data: {
          title: error.message,
          errorList: errorList
        }
      })
    })
  }

  clientsList: any[] = [];
  captinList: any[] = [];

  getLiteListOfClients() {
    let modal = { Keyword: this.transfer?.value?.searchWord }
    this.clinicService.getLiteListOfClients(modal).subscribe((res: any) => {
      this.clientsList = res.items
      console.log(res)
    })
    
  }

  onChangeSelection() {
    console.log(this.transfer.value.user)

  }

  getDriversList() {
    let modal = { Keyword: this.transfer?.value?.searchWord }
    this.driverService.getLiteListOfCaptains(modal).subscribe(
      (res: any) => {
        this.captinList = res['items']
        console.log(this.captinList)
      }
    )
    /*
        this.filter.maxResultCount = 50
        this.driverService.getDriversList(this.filter).subscribe(
          res => {
            this. = res['items']
            console.log(this.captinList)
          })*/
  }

  onChangeType(event: any) {
    console.log(event)
    if (event.value === '3') {
      this.captinList = []
      this.getLiteListOfClients();
    } else {
      this.clientsList = [];
      this.getDriversList();
    }
  }
}