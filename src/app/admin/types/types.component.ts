import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent {

  types = new FormControl('');
  typesList: string[] = ['إدارة أسباب إلغاء الرحلة', 'إدارة الرسائل', 'إدارة الزبائن', 'إدارة السائقين'];

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
