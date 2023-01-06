import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommunicationChannelServicesService } from 'src/app/core/services/communication-channel-services.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent {

  generalFields = new FormGroup({
    range: new FormGroup({
      start: new FormControl<Date | null>(null),
      end: new FormControl<Date | null>(null),
    }),
    search: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    messageContent: new FormControl('', [Validators.required]),
    messageTitle: new FormControl('', [Validators.required]),
    slider: new FormControl(0, [Validators.required])
  });

  constructor(private communicationService: CommunicationChannelServicesService) { }

  getErrorRequiredMessage() {
    return 'يجب أن تدخل قيمة';
  }

  send() {
    console.log(this.communicationService.sendCustomMessage(this.generalFields.value));
  }
}
