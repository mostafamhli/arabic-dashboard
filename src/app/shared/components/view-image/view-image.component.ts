import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.scss']
})
export class ViewImageComponent {
  src: string = ""
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) {
      this.src = data
    }
  }
}
