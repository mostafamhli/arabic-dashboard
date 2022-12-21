import { Component, Input } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ViewImageComponent } from 'src/app/shared/components/view-image/view-image.component';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent {
  @Input() label:string = "";
  @Input() path:string = "";
  constructor(private viewImageDialog:MatDialog) {

  }
  viewImage(src:string) {
    this.viewImageDialog.open(ViewImageComponent,{
      data:src
    })
  }
}
