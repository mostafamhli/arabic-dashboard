import { Component, ViewChild, Inject, Optional } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { TripsServicesService } from 'src/app/core/services/trips-services.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogConfig, DialogRef } from '@angular/cdk/dialog';

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

  constructor(
    private tripsServices: TripsServicesService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog:DialogRef
    ) {
      if(data?.status === 'edit'){
       
        this.addDiscountForm = new FormGroup({
          discountName: new FormControl(data.name, [Validators.required]),
          discountCode: new FormControl(data.code, [Validators.required]),
          outDate: new FormControl(data.expirationDate, [Validators.required]),
          usingTimes: new FormControl(data.maxUsageCount, [Validators.required]),
          discountValue: new FormControl(data.value, [Validators.required, Validators.pattern("^[0-9]*$")])
        })
      }
    }

  getErrorRequiredMessage() {
    if (this.addDiscountForm.controls['discountValue'].hasError('pattern')) {
      return 'يسمح فقط باستخدام الأرقام(0-9)';
    }
    return 'يجب أن تدخل قيمة';
  }

  onSubmit() {
    if(this.data?.status === 'edit') {
      let modal = {
        name: this.addDiscountForm.value.discountName,
        code: this.addDiscountForm.value.discountCode,
        value: this.addDiscountForm.value.discountValue,
        maxUsageCount: this.addDiscountForm.value.usingTimes,
        expirationDate: this.addDiscountForm.value.outDate
      }
      this.tripsServices.editDiscountCode(modal,this.data.id).subscribe(res => {
        console.log(res)
        this.dialog.close('closed')
      })
    } else {
      let modal = {
        name: this.addDiscountForm.value.discountName,
        code: this.addDiscountForm.value.discountCode,
        value: this.addDiscountForm.value.discountValue,
        maxUsageCount: this.addDiscountForm.value.usingTimes,
        expirationDate: this.addDiscountForm.value.outDate
      }
      this.tripsServices.addDiscountCode(modal).subscribe(res => {
        console.log(res)
        this.dialog.close('closed')
      })
    }
    
    
    //console.log(this.tripsServices.addDiscountCode(this.addDiscountForm.value))
  }
}
