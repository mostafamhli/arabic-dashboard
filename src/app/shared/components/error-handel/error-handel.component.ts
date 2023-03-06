import { Component, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-handel',
  templateUrl: './error-handel.component.html',
  styleUrls: ['./error-handel.component.scss']
})
export class ErrorHandelComponent {
  error:any
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){
    if(data) this.error = data
  }
}
