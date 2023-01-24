import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-driver-profile-personal-info',
  templateUrl: './driver-profile-personal-info.component.html',
  styleUrls: ['./driver-profile-personal-info.component.scss']
})
export class DriverProfilePersonalInfoComponent {
  personalInfo: FormGroup;
  imageFile: any
  @ViewChild('fileInput') fileInput: any

  constructor() {
    this.personalInfo = new FormGroup({

    })
  }
  onFileInput(files: any): void {
    var reader = new FileReader();
    this.imageFile = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imageFile = reader.result;
    };
  }
}
