import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})
export class AddImageComponent {
  generalFields: FormGroup;
  @Input() controlName:string
  @Output() imageObject: EventEmitter<any> = new EventEmitter<any>();
  personalInfo: FormGroup;
  imageFile: any
  @ViewChild('fileInput') fileInput: any
  @Input('dimension') dimension: number;

  constructor(private controlContainer: ControlContainer) {
    this.personalInfo = new FormGroup({
    })
  }

  ngOnInit(): void {
    this.generalFields = <FormGroup>this.controlContainer.control;
  }

  onFileInput(files: any): void {
    var reader = new FileReader();
    this.generalFields.controls[this.controlName].setValue(files[0])
    this.imageFile = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imageFile = reader.result;
    };
  }
}
