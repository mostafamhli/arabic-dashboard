import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-driver-profile-personal-info',
  templateUrl: './driver-profile-personal-info.component.html',
  styleUrls: ['./driver-profile-personal-info.component.scss']
})
export class DriverProfilePersonalInfoComponent {
  personalInfo:FormGroup;
  constructor() {
    this.personalInfo = new FormGroup({
      
    })
  }
}
