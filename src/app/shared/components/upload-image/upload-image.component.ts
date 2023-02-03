import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ViewImageComponent } from 'src/app/shared/components/view-image/view-image.component';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent {
  @Input() label: string = "";
  @Input() path: any = "";
  @Output() imageObject: EventEmitter<any> = new EventEmitter<any>();

  constructor(private viewImageDialog: MatDialog) {

  }
  viewImage(src: string) {
    this.viewImageDialog.open(ViewImageComponent, {
      data: src
    })
  }

  onFileInput(files: any): void {
    var reader = new FileReader();
    this.path = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.path = reader.result;
      this.imageObject.emit(this.path)
    };
  }
}
