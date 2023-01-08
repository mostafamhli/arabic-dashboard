import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { TripsServicesService } from 'src/app/core/services/trips-services.service';

@Component({
  selector: 'app-add-discount-code',
  templateUrl: './add-discount-code.component.html',
  styleUrls: ['./add-discount-code.component.scss']
})
export class AddDiscountCodeComponent {

  addDiscountForm = new FormGroup({
    discountName: new FormControl('', [Validators.required]),
    discountCode: new FormControl('', [Validators.required]),
    outDate: new FormControl('', [Validators.required]),
    usingTimes: new FormControl(1, [Validators.required]),
    discountValue: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")])
  })

  constructor(private tripsServices: TripsServicesService) { }

  getErrorRequiredMessage() {
    if (this.addDiscountForm.controls['discountValue'].hasError('pattern')) {
      return 'يسمح فقط باستخدام الأرقام(0-9)';
    }
    return 'يجب أن تدخل قيمة';
  }

  onSubmit() {
    console.log(this.tripsServices.addDiscountCode(this.addDiscountForm.value))
  }
}
