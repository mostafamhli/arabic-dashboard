import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientServicesService } from 'src/app/core/services/client-services.service';
import { DriverServicesService } from 'src/app/core/services/driver-services.service';
import { WalletService } from 'src/app/core/services/wallet.service';

@Component({
  selector: 'app-add-transfer',
  templateUrl: './add-transfer.component.html',
  styleUrls: ['./add-transfer.component.scss']
})
export class AddTransferComponent {
  transfer = new FormGroup({
    user: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    amountOfMoney: new FormControl('', [Validators.required]),
    walletType: new FormControl('', [Validators.required])
  })

  constructor(
    private driverService: DriverServicesService,
    private clinicService: ClientServicesService,
    private walletService: WalletService,
    private dialog : DialogRef
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
      this.dialog.close()
    })
  }

  usersList: any[] = [];
  onChangeType(event: any) {
    console.log(event)
    if (event.value === '1') {
      console.log('1')
      this.clinicService.getLiteListOfClients().subscribe((res: any) => {
        this.usersList = res.items
        console.log(res)
      })
    } else {
      this.driverService.getLiteListOfCaptains().subscribe((res: any) => {
        this.usersList = res.items
        console.log(res)
      })
    }
  }
}