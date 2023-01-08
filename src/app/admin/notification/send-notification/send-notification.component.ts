import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CommunicationChannelServicesService } from 'src/app/core/services/communication-channel-services.service';

@Component({
  selector: 'app-send-notification',
  templateUrl: './send-notification.component.html',
  styleUrls: ['./send-notification.component.scss']
})
export class SendNotificationComponent {

  notification = new FormGroup({
    messageContent: new FormControl('', [Validators.required]),
    messageTitle: new FormControl('', [Validators.required]),
    filter: new FormGroup({
      users: new FormControl(false),
      drivers: new FormControl(false),
      customers: new FormControl(false),
      specificUser: new FormControl(false),
    })
  })

  
  constructor(private dialogRef: MatDialogRef<SendNotificationComponent>, private communicationService:CommunicationChannelServicesService) { }

  getErrorRequiredMessage() {
    return 'يجب أن تدخل قيمة';
  }

  sendMessage() {
    console.log(this.communicationService.sendPublicMessage(this.notification.value))
  }

  cancle(){
    this.dialogRef.close();
  }
}
