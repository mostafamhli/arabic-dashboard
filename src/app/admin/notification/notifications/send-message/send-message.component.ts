import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FilterWithSearch } from 'src/app/core/models/filters.model';
import { ClientServicesService } from 'src/app/core/services/client-services.service';
import { CommunicationChannelServicesService } from 'src/app/core/services/communication-channel-services.service';
import { DriverServicesService } from 'src/app/core/services/driver-services.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent {

  searchWord: any = undefined
  drivers: any = []
  clients: any = []
  filter: FilterWithSearch = new FilterWithSearch()
  generalFields = new FormGroup({
    range: new FormGroup({
      start: new FormControl<Date | null>(null),
      end: new FormControl<Date | null>(null),
    }),
    searchWord: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    messageContent: new FormControl('', [Validators.required]),
    messageTitle: new FormControl('', [Validators.required]),
    id: new FormControl('', Validators.required),
  });

  constructor(
    private communicationService: CommunicationChannelServicesService,
    private driverService: DriverServicesService,
    private clientService: ClientServicesService,
    private router: Router
  ) {
    this.getDrivers()
    this.getClients()
  }

  getErrorRequiredMessage() {
    return 'يجب أن تدخل قيمة';
  }

  getDrivers() {
    let modal = { Keyword: this.generalFields?.value?.searchWord }
    this.driverService.getLiteListOfCaptains(modal).subscribe(
      (res: any) => {
        this.drivers = res['items']
      }
    )
  }

  getClients() {
    let modal = { Keyword: this.generalFields?.value?.searchWord }
    this.clientService.getLiteListOfClients(modal).subscribe(
      (res: any) => {
        this.clients = res['items']
      }
    )
  }
  send() {
    let modal1 = {
      title: this.generalFields.value.messageTitle,
      body: this.generalFields.value.messageContent,
      targetType: 4,
      targetUserIds: this.generalFields.get('id')?.value
    }

    this.communicationService.sendPublicMessage(modal1).subscribe(res => {
      console.log(res)
      this.router.navigate(['/notifications'])
    })

  }
}
