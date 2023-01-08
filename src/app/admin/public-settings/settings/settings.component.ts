import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { SettingsServicesService } from 'src/app/core/services/settings-services.service';

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

  socialMedia:any
  constructor(private settingsService:SettingsServicesService){
    this.socialMediaInfo();
  }

  socialMediaInfo(){
    this.socialMedia= this.settingsService.getSocialMediaInfo();
  }

  onSubmit() {

  }
}
