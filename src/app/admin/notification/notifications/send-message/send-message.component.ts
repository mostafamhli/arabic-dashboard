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

  filter: FilterWithSearch = new FilterWithSearch()
  generalFields = new FormGroup({
    range: new FormGroup({
      start: new FormControl<Date | null>(null),
      end: new FormControl<Date | null>(null),
    }),
    search: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    messageContent: new FormControl('', [Validators.required]),
    messageTitle: new FormControl('', [Validators.required])
  });

  constructor(
    private communicationService: CommunicationChannelServicesService,
    private driverService: DriverServicesService,
    private clientService: ClientServicesService,
    private router: Router
  ) { }

  getErrorRequiredMessage() {
    return 'يجب أن تدخل قيمة';
  }

  send() {
    let modal = {
      Keyword: this.generalFields.value.search,
      MinCreationDate: this.generalFields.value.range?.start,
      MaxCreationDate: this.generalFields.value.range?.end
    }

    let usersIds: any[] = [];
    if (this.generalFields.value.type === 'one') {
      this.filter.maxResultCount = 50
      this.driverService.getDriversList(this.filter).subscribe(
        res => {
          res['items'].forEach((ele: any) => {
            usersIds.push(ele.id)
          })
          let modal = {
            title: this.generalFields.value.messageTitle,
            body: this.generalFields.value.messageContent,
            targetType: 4,
            targetUserIds: usersIds
          }
          this.communicationService.sendPublicMessage(modal).subscribe(res => {
            this.router.navigate(['/notifications'])
          })
        }
      )
    } else {
      this.clientService.getLiteListOfClients(modal).subscribe((res: any) => {
        res.items.forEach((ele: any) => {
          usersIds.push(ele.id)
        })
        let modal = {
          title: this.generalFields.value.messageTitle,
          body: this.generalFields.value.messageContent,
          targetType: 4,
          targetUserIds: usersIds
        }
        this.communicationService.sendPublicMessage(modal).subscribe(res => {
          this.router.navigate(['/notifications'])
        })
      })
    }
  }
}
