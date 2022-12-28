import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-discount-code',
  templateUrl: './add-discount-code.component.html',
  styleUrls: ['./add-discount-code.component.scss']
})
export class AddDiscountCodeComponent {

  displayStyle = "none";

  @ViewChild('myForm') form!: NgForm;
  
  discountName = new FormControl('', [Validators.required]);
  discountCode = new FormControl('', [Validators.required]);
  outDate = new FormControl('', [Validators.required]);
  usingTimes = new FormControl(1, [Validators.required]);
  discountValue = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);


  getErrorRequiredMessage() {
    /*if (this.addDiscountForm.controls.discountValue.hasError('pattern')) {
      return 'يسمح فقط باستخدام الأرقام(0-9)';
    }*/
    return 'يجب أن تدخل قيمة';
  }


  openPopup() {
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }


  onSubmit() {
    //console.log(this.addDiscountForm.controls)
    /*
    const data = this.discountCode.data;
    data.push({
      discountName: this.form.value.discountName,
      discountCode: this.form.value.discountCode,
      discountValue: this.form.value.discountValue,
      outDate: (moment(this.form.value.outDate)).format('yyyy-M-D')
    });
    this.dataSource.data = data;
    */
  }
}
