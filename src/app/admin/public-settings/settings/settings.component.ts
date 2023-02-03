import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators, FormGroup } from '@angular/forms';
import { SettingsServicesService } from 'src/app/core/services/settings-services.service';
import { pageType } from '../vehicle-classification/add-new-classification/add-new-classification.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  @ViewChild('myForm') form!: NgForm;
  facebook = 'Mostafa F Mhli';
  twitter = '@mostafa';
  instagram = 'mostafa_mhli';
  whatsapp = '0935526455';
  phone = '0935526455';
  email = 'mostafa@gmail.com';

  
  pageTypeEnum = pageType;
  activePageType = pageType.add;
  socialMedia: any

  settingForm = new FormGroup({
    facebook: new FormControl('Mostafa F Mhli', [Validators.required]),
    twitter: new FormControl('@mostafa', [Validators.required]),
    instagram: new FormControl('mostafa_mhli', [Validators.required]),
    whatsapp: new FormControl('whatsapp', [Validators.required, Validators.pattern("^[0-9]*$")]),
    phone: new FormControl('phone', [Validators.required, Validators.pattern("^[0-9]*$")]),
    email: new FormControl('email', [Validators.required]),
    morningBegin: new FormControl('06:00', [Validators.required]),
    morningEnd: new FormControl('09:00', [Validators.required]),
    dayBegin: new FormControl('10:00', [Validators.required]),
    dayEnd: new FormControl('06:00', [Validators.required]),
    nightBegin: new FormControl('06:00', [Validators.required]),
    nightEnd: new FormControl('12:00', [Validators.required])
  });

  constructor(private settingsService: SettingsServicesService) {
    this.socialMediaInfo();
  }

  socialMediaInfo() {
    this.socialMedia = this.settingsService.getSocialMediaInfo();
  }

  onSubmit() {

  }
}
