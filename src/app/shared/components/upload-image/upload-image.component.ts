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
  @Input() controlName: string
  @Input() isEnableToDelete: any
  @Input() isEnableToSelect: any
  @Input() deleteControlName: any
  @Input() label: string = "";
  @Input() path: any;
  @Output() imageObject: EventEmitter<any> = new EventEmitter<any>();
  @Input() clickSubmit:any

  constructor(private viewImageDialog: MatDialog, private controlContainer: ControlContainer) {

  }

  ngOnInit(): void {
    this.driverProfile = <FormGroup>this.controlContainer.control;
    if (this.driverProfile.controls[this.controlName] && this.driverProfile.controls[this.controlName].value && this.driverProfile.controls[this.controlName].value != "") {
      this.path = this.driverProfile.controls[this.controlName].value
      if (typeof (this.path) != 'string') {
        this.onFileInput([this.path])
      }
    }
  }

  deleteImage() {
    if (this.isEnableToDelete) {
      this.driverProfile.controls[this.controlName].setValue(null)
      this.driverProfile.controls[this.deleteControlName].setValue('true')
      this.path = '/assets/img/temp/add-image.png'
    }
  }

  viewImage(src: string) {
    this.viewImageDialog.open(ViewImageComponent, {
      data: src
    })
  }

  onFileInput(files: any): void {
    var reader = new FileReader();
    if (this.isEnableToDelete == 'true')
      this.driverProfile.controls[this.deleteControlName].setValue('false')
    this.driverProfile.controls[this.controlName].setValue(files[0])
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.path = reader.result;
    };
  }
}
