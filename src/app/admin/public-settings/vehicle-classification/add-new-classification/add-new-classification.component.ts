import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

export enum pageType {
  add = 1,
  edit = 2,
  view = 3
}
@Component({
  selector: 'app-add-new-classification',
  templateUrl: './add-new-classification.component.html',
  styleUrls: ['./add-new-classification.component.scss']
})
export class AddNewClassificationComponent {

  generalFields = new FormGroup({
    name: new FormControl('', [Validators.required]),
    numOfSites: new FormControl(0, [Validators.required]),
    driverRatio: new FormControl(0, [Validators.required]),
    morningLowestRent: new FormControl(0, [Validators.required]),
    morningFirstExtraCost: new FormControl(0, [Validators.required]),
    morningSecondExtraCost: new FormControl(0, [Validators.required]),
    morningOne_Km: new FormControl(0, [Validators.required]),
    morningTen_M: new FormControl(0, [Validators.required]),
    morningBegin: new FormControl('06:00', [Validators.required]),
    morningEnd: new FormControl('09:00', [Validators.required]),
    dayLowestRent: new FormControl(0, [Validators.required]),
    dayFirstExtraCost: new FormControl(0, [Validators.required]),
    daySecondExtraCost: new FormControl(0, [Validators.required]),
    dayOne_Km: new FormControl(0, [Validators.required]),
    dayTen_M: new FormControl(0, [Validators.required]),
    dayBegin: new FormControl('10:00', [Validators.required]),
    dayEnd: new FormControl('06:00', [Validators.required]),
    nightLowestRent: new FormControl(0, [Validators.required]),
    nightFirstExtraCost: new FormControl(0, [Validators.required]),
    nightSecondExtraCost: new FormControl(0, [Validators.required]),
    nightOne_Km: new FormControl(0, [Validators.required]),
    nightTen_M: new FormControl(0, [Validators.required]),
    nightBegin: new FormControl('06:00', [Validators.required]),
    nightEnd: new FormControl('12:00', [Validators.required])
  })
  pageTypeEnum = pageType
  activePageType = pageType.add

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    let id = this.activatedRoute.snapshot.params['id']
    if (id) {
      if (router.url.includes("classification-edit"))
        this.activePageType = pageType.edit
      else
        this.activePageType = pageType.view
      this.setInfoForForm()
    } else {
      this.activePageType = pageType.add
    }
  }

  getErrorRequiredMessage() {
    return 'يجب أن تدخل قيمة';
  }


  onSubmit() {
    console.log(this.generalFields.value)
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

  setInfoForForm() {
    this.generalFields = new FormGroup({
      name: new FormControl({ value: 'Wael', disabled: pageType.view == this.activePageType }, [Validators.required]),
      numOfSites: new FormControl({ value: 4, disabled: pageType.view == this.activePageType }, [Validators.required]),
      driverRatio: new FormControl({ value: 5, disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningLowestRent: new FormControl({ value: 5, disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningFirstExtraCost: new FormControl({ value: 2, disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningSecondExtraCost: new FormControl({ value: 1, disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningOne_Km: new FormControl({ value: 6, disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningTen_M: new FormControl({ value: 0.1, disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningBegin: new FormControl({ value: '06:00', disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningEnd: new FormControl({ value: '09:00', disabled: pageType.view == this.activePageType }, [Validators.required]),
      dayLowestRent: new FormControl({ value: 4, disabled: pageType.view == this.activePageType }, [Validators.required]),
      dayFirstExtraCost: new FormControl({ value: 2, disabled: pageType.view == this.activePageType }, [Validators.required]),
      daySecondExtraCost: new FormControl({ value: 1, disabled: pageType.view == this.activePageType }, [Validators.required]),
      dayOne_Km: new FormControl({ value: 6, disabled: pageType.view == this.activePageType }, [Validators.required]),
      dayTen_M: new FormControl({ value: 0.1, disabled: pageType.view == this.activePageType }, [Validators.required]),
      dayBegin: new FormControl({ value: '09:00', disabled: pageType.view == this.activePageType }, [Validators.required]),
      dayEnd: new FormControl({ value: '22:00', disabled: pageType.view == this.activePageType }, [Validators.required]),
      nightLowestRent: new FormControl({ value: 4, disabled: pageType.view == this.activePageType }, [Validators.required]),
      nightFirstExtraCost: new FormControl({ value: 2, disabled: pageType.view == this.activePageType }, [Validators.required]),
      nightSecondExtraCost: new FormControl({ value: 1, disabled: pageType.view == this.activePageType }, [Validators.required]),
      nightOne_Km: new FormControl({ value: 6, disabled: pageType.view == this.activePageType }, [Validators.required]),
      nightTen_M: new FormControl({ value: 0.1, disabled: pageType.view == this.activePageType }, [Validators.required]),
      nightBegin: new FormControl({ value: '22:00', disabled: pageType.view == this.activePageType }, [Validators.required]),
      nightEnd: new FormControl({ value: '06:00', disabled: pageType.view == this.activePageType }, [Validators.required]),
    })
  }
}
