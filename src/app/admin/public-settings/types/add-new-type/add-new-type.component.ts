import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-type',
  templateUrl: './add-new-type.component.html',
  styleUrls: ['./add-new-type.component.scss']
})
export class AddNewTypeComponent {

  types = new FormControl('');
  typesList = ['إدارة أسباب إلغاء الرحلة', 'إدارة الرسائل', 'إدارة الزبائن', 'إدارة السائقين']
  @ViewChild('myForm') form!: NgForm;
  typeName = new FormControl('', [Validators.required]);
  getErrorRequiredMessage() {
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

  }
}
