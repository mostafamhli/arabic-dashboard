import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientServicesService } from 'src/app/core/services/client-services.service';

@Component({
  selector: 'app-show-client',
  templateUrl: './show-client.component.html',
  styleUrls: ['./show-client.component.scss']
})
export class ShowClientComponent {

  user: any
  numOfStars: any[] = [];
  numOfEmptyStars: any[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ShowClientComponent>,
    private clientsService:ClientServicesService
    ) {
    if (data) {
      this.user = data
      if (this.user.rate) {
        let rate = Math.floor(+this.user.rate)
        this.numOfStars = Array(rate).fill(1).map((x, i) => i + 1); // [0,1,2,3,4]
        this.numOfEmptyStars = Array(5 - rate).fill(1).map((x, i) => i + 1);
      } else {
        this.numOfStars = [];
        this.numOfEmptyStars = Array(5).fill(1).map((x, i) => i + 1);
      }
    }
  }

}
