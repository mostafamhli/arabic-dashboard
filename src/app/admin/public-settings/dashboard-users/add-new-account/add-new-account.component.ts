import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-account',
  templateUrl: './add-new-account.component.html',
  styleUrls: ['./add-new-account.component.scss']
})
export class AddNewAccountComponent {

  @ViewChild('myForm') form!: NgForm;
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  address = new FormControl('', [Validators.required]);
  mobile = new FormControl('', [Validators.required]);
  creationDate = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  type = new FormControl('', [Validators.required]);

  getErrorRequiredMessage() {
    if (this.email.hasError('email')) {
      return 'أدخل بريد إلكتروني صالح'
    }
    return 'يجب أن تدخل قيمة';
  }


  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
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
      applyFilter(event: Event) {
        /*
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
        */
      }
}
