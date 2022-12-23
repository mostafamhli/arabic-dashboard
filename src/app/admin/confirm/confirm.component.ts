import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Driver } from 'src/app/core/models/drivers.mode';
import { AccountStatus } from 'src/app/core/enums/genric.enums';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Driver,
    private dialogRef: MatDialogRef<ConfirmComponent>) {
  }
  confirm() {
    if (this.data.accountStatus == AccountStatus.active) {
      this.data.accountStatus = AccountStatus.inActive
    } else if (this.data.accountStatus == AccountStatus.inActive) {
      this.data.accountStatus = AccountStatus.active
    }
    this.dialogRef.close(this.data)
  }
  cancel() {
    this.dialogRef.close()
  }
}
