import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss']
})
export class AddNewUserComponent {

  hide = true;
  
  @ViewChild('myForm') form!: NgForm;
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  address = new FormControl('', [Validators.required]);
  mobile = new FormControl('', [Validators.required]);
  creationDate = new FormControl(moment().format('DD-MM-YYYY'), [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  type = new FormControl('', [Validators.required]);

  getErrorRequiredMessage() {
    if (this.email.hasError('email')) {
      return 'أدخل بريد إلكتروني صالح'
    }
    return 'يجب أن تدخل قيمة';
  }

  
  onSubmit() {
    /*
        const data = this.dataSource.data;
        data.push({
          userName: this.form.value.firstName + ' ' + this.form.value.firstName,
          type: this.form.value.type,
          email: this.form.value.email,
          accountCreateDate: (moment(this.form.value.accountCreateDate)).format('yyyy-M-D')
        });
        this.dataSource.data = data;
    */
      }

}
