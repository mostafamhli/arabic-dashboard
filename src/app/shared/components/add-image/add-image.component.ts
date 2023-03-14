import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})
export class AddImageComponent {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  generalFields: FormGroup;
  @Input() fromCity: string;
  @Input() controlName: string
  @Output() imageObject: EventEmitter<any> = new EventEmitter<any>();
  personalInfo: FormGroup;
  imageFile: any
  @ViewChild('fileInput') fileInput: any
  @Input('dimension') dimension: number;
  @Input('isEdit') isEdit: boolean


  constructor(private controlContainer: ControlContainer) {

  }

  ngOnInit(): void {
    this.generalFields = <FormGroup>this.controlContainer.control;
    if (this.generalFields.controls[this.controlName] && this.generalFields.controls[this.controlName].value && this.generalFields.controls[this.controlName].value != "") {
      this.imageFile = this.generalFields.controls[this.controlName].value
      if (typeof (this.imageFile) != 'string') {
        this.onFileInput([this.imageFile])
      }
    }
  }

  isOpened: boolean = false;
  onFileInput(files: any): void {
    if (this.fromCity) {
      this.isOpened = true;
      this.imageChangedEvent = files;
    }

    var reader = new FileReader();
    this.generalFields.controls[this.controlName].setValue(files.target.files[0])
    this.imageFile = files.target.files[0];
    reader.readAsDataURL(files.target.files[0]);
    reader.onload = (_event) => {
      this.imageFile = reader.result;
    };
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    let file = this.dataURLtoFile(this.croppedImage, 'photo.png');
    this.generalFields.controls[this.controlName].setValue(file)
  }

  dataURLtoFile(dataurl: any, filename: any) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  closeCropper(event: any) {
    event.preventDefault();
    this.isOpened = false
  }

  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }


}

