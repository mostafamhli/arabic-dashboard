import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {
  messageText: string

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ConfirmComponent>) {
    if (data && data.message) {
      this.messageText = data.message
    } else {
      this.messageText = data
    }
  }
  confirm() {
    this.dialogRef.close(true)
  }
  cancel() {
    this.dialogRef.close()
  }
}
