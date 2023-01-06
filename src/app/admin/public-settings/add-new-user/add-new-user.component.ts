import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import * as moment from 'moment';
import { SettingsServicesService } from 'src/app/core/services/settings-services.service';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss']
})
export class AddNewUserComponent {

  hide = true;

  addNewUserGroupForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
    creationDate: new FormControl(moment().format('DD-MM-YYYY'), [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required])
  })

  constructor(private settingsServices: SettingsServicesService) { }

  getErrorRequiredMessage() {
    if (this.addNewUserGroupForm.controls.email.hasError('email')) {
      return 'أدخل بريد إلكتروني صالح'
    }
    return 'يجب أن تدخل قيمة';
  }


  onSubmit() {
    this.settingsServices.addNewUser(this.addNewUserGroupForm.value)
    console.log(this.settingsServices.addNewUser(this.addNewUserGroupForm.value))
  }

}
