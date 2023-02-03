import { Component, ViewChild,OnInit } from '@angular/core';
import { FormGroup, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-driver-profile-personal-info',
  templateUrl: './driver-profile-personal-info.component.html',
  styleUrls: ['./driver-profile-personal-info.component.scss']
})
export class DriverProfilePersonalInfoComponent implements OnInit {

  driverProfile: FormGroup;
  imageFile: any
  @ViewChild('fileInput') fileInput: any

  constructor(private controlContainer: ControlContainer) {
  }
  ngOnInit(): void {
    this.driverProfile = <FormGroup>this.controlContainer.control;
  }

  onFileInput(files: any): void {
    var reader = new FileReader();
    this.imageFile = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imageFile = reader.result;
    };
  }
  temp:any
  setIdImage($event:any){
    if(event && event.target && event.target)
    this.temp = event.target
    this.temp = this.temp.result
  }
}
