import { Component, ViewChild, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})
export class AddImageComponent {
  personalInfo: FormGroup;
  imageFile: any
  @ViewChild('fileInput') fileInput: any
  @Input('dimension') dimension: number;

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
