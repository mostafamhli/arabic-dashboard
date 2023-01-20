import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DriverServicesService } from 'src/app/core/services/driver-services.service';

@Component({
  selector: 'app-add-transfer',
  templateUrl: './add-transfer.component.html',
  styleUrls: ['./add-transfer.component.scss']
})
export class AddTransferComponent {
  transfer = new FormGroup({
    drivers: new FormControl('', [Validators.required]),
    amountOfMoney: new FormControl('', [Validators.required]),
    transactionType: new FormControl('', [Validators.required])
  })

  constructor(private driverService: DriverServicesService) {
  }

  add(){
    console.log(this.driverService.addTransfer(this.transfer.value));
  }
}
