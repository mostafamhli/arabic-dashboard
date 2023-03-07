import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CommunicationChannelServicesService } from 'src/app/core/services/communication-channel-services.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-send-notification',
  templateUrl: './send-notification.component.html',
  styleUrls: ['./send-notification.component.scss']
})
export class SendNotificationComponent {

  notification = new FormGroup({
    messageContent: new FormControl('', [Validators.required]),
    messageTitle: new FormControl('', [Validators.required]),
    targetType: new FormControl('', [Validators.required]),
  })


  constructor(
    private dialogRef: MatDialogRef<SendNotificationComponent>,
    private communicationService: CommunicationChannelServicesService,
    private _snackBar: MatSnackBar,
    private router:Router) { }

  getErrorRequiredMessage() {
    return 'يجب أن تدخل قيمة';
  }

  sendMessage() {

    let modal = {
      title: this.notification.value.messageTitle,
      body: this.notification.value.messageContent,
      targetType: this.notification.value.targetType,
    }
    this.communicationService.sendPublicMessage(modal).subscribe(res => {
      this.openSnackBar('تم إرسال الرسالة بنجاح', 'تم')
      this.dialogRef.close();
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  cancle() {
    this.dialogRef.close();
  }
}
