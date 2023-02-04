import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ViewImageComponent } from 'src/app/shared/components/view-image/view-image.component';
import { FormControl, ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  driverProfile: FormGroup;
  @Input() controlName:string
  @Input() label: string = "";
  @Input() path: any = "";
  @Output() imageObject: EventEmitter<any> = new EventEmitter<any>();

  constructor(private viewImageDialog: MatDialog,private controlContainer: ControlContainer) {

  }

  ngOnInit(): void {
    this.driverProfile = <FormGroup>this.controlContainer.control;
  }

  viewImage(src: string) {
    this.viewImageDialog.open(ViewImageComponent, {
      data: src
    })
  }

  onFileInput(files: any): void {
    var reader = new FileReader();
    console.log(files[0])
    //this.imageObject.emit(files[0])
    this.driverProfile.controls[this.controlName].setValue(files[0])
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.path = reader.result;
    };
  }
}
