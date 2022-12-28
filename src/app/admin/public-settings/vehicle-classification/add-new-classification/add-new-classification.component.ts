import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-classification',
  templateUrl: './add-new-classification.component.html',
  styleUrls: ['./add-new-classification.component.scss']
})
export class AddNewClassificationComponent {

  addNewMorningClassificationForm = new FormGroup({
    lowestRent: new FormControl('', [Validators.required]),
    firstExtraCost: new FormControl('', [Validators.required]),
    secondExtraCost: new FormControl('', [Validators.required]),
    one_Km: new FormControl('', [Validators.required]),
    ten_M: new FormControl('', [Validators.required]),
    morningBegin: new FormControl('', [Validators.required]),
    morningEnd: new FormControl('', [Validators.required]),
  })

  addNewDayClassificationForm = new FormGroup({
    lowestRent: new FormControl('', [Validators.required]),
    firstExtraCost: new FormControl('', [Validators.required]),
    secondExtraCost: new FormControl('', [Validators.required]),
    one_Km: new FormControl('', [Validators.required]),
    ten_M: new FormControl('', [Validators.required]),
    dayBegin: new FormControl('', [Validators.required]),
    dayEnd: new FormControl('', [Validators.required]),
  })

  addNewNightClassificationForm = new FormGroup({
    lowestRent: new FormControl('', [Validators.required]),
    firstExtraCost: new FormControl('', [Validators.required]),
    secondExtraCost: new FormControl('', [Validators.required]),
    one_Km: new FormControl('', [Validators.required]),
    ten_M: new FormControl('', [Validators.required]),
    nightBegin: new FormControl('', [Validators.required]),
    nightEnd: new FormControl('', [Validators.required]),
  })


  getErrorRequiredMessage() {
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
