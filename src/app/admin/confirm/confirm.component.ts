import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Driver } from 'src/app/core/models/drivers.mode';
import { AccountStatus } from 'src/app/core/enums/genric.enums';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {
  @Input() messageText: string = "هل متأكد من تغيير حالة الحساب ؟"
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ConfirmComponent>) {
    if (data && data.message) {
      this.messageText = data.message
    }
  }
  confirm() {
    if (this.data.accountStatus == AccountStatus.active) {
      this.data.accountStatus = AccountStatus.inActive
      this.dialogRef.close(this.data)
    } else if (this.data.accountStatus == AccountStatus.inActive) {
      this.data.accountStatus = AccountStatus.active
      this.dialogRef.close(this.data)
    } else if (this.data.message) {
      this.dialogRef.close(true)
    }
  }
  cancel() {
    this.dialogRef.close()
  }
}
