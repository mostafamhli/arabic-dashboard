import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';

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
  setting1 = 50;
  setting2 = 50;
  setting3 = 50;
  onSubmit() {

  }
}
