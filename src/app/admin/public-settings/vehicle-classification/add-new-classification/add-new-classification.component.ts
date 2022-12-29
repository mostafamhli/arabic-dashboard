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

  addNewMorningClassificationForm = new FormGroup({
    lowestRent: new FormControl(0, [Validators.required]),
    firstExtraCost: new FormControl(0, [Validators.required]),
    secondExtraCost: new FormControl(0, [Validators.required]),
    one_Km: new FormControl(0, [Validators.required]),
    ten_M: new FormControl(0, [Validators.required]),
    morningBegin: new FormControl('06:00', [Validators.required]),
    morningEnd: new FormControl('09:00', [Validators.required]),
  })
  addNewDayClassificationForm = new FormGroup({
    lowestRent: new FormControl(0, [Validators.required]),
    firstExtraCost: new FormControl(0, [Validators.required]),
    secondExtraCost: new FormControl(0, [Validators.required]),
    one_Km: new FormControl(0, [Validators.required]),
    ten_M: new FormControl(0, [Validators.required]),
    morningBegin: new FormControl('06:00', [Validators.required]),
    morningEnd: new FormControl('09:00', [Validators.required]),
  })
  addNewNightClassificationForm = new FormGroup({
    lowestRent: new FormControl(0, [Validators.required]),
    firstExtraCost: new FormControl(0, [Validators.required]),
    secondExtraCost: new FormControl(0, [Validators.required]),
    one_Km: new FormControl(0, [Validators.required]),
    ten_M: new FormControl(0, [Validators.required]),
    morningBegin: new FormControl('06:00', [Validators.required]),
    morningEnd: new FormControl('09:00', [Validators.required]),
  })

  generalFields = new FormGroup({
    name: new FormControl('', [Validators.required]),
    numOfSites: new FormControl(0, [Validators.required]),
    driverRatio: new FormControl(0, [Validators.required]),
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
    this.addNewMorningClassificationForm = new FormGroup({
      lowestRent: new FormControl({ value: 5, disabled: pageType.view == this.activePageType }, [Validators.required]),
      firstExtraCost: new FormControl({ value: 2, disabled: pageType.view == this.activePageType }, [Validators.required]),
      secondExtraCost: new FormControl({ value: 1, disabled: pageType.view == this.activePageType }, [Validators.required]),
      one_Km: new FormControl({ value: 6, disabled: pageType.view == this.activePageType }, [Validators.required]),
      ten_M: new FormControl({ value: 0.1, disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningBegin: new FormControl({ value: '06:00', disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningEnd: new FormControl({ value: '09:00', disabled: pageType.view == this.activePageType }, [Validators.required]),
    })
    this.addNewDayClassificationForm = new FormGroup({
      lowestRent: new FormControl({ value: 4, disabled: pageType.view == this.activePageType }, [Validators.required]),
      firstExtraCost: new FormControl({ value: 2, disabled: pageType.view == this.activePageType }, [Validators.required]),
      secondExtraCost: new FormControl({ value: 1, disabled: pageType.view == this.activePageType }, [Validators.required]),
      one_Km: new FormControl({ value: 6, disabled: pageType.view == this.activePageType }, [Validators.required]),
      ten_M: new FormControl({ value: 0.1, disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningBegin: new FormControl({ value: '09:00', disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningEnd: new FormControl({ value: '22:00', disabled: pageType.view == this.activePageType }, [Validators.required]),
    })
    this.addNewNightClassificationForm = new FormGroup({
      lowestRent: new FormControl({ value: 4, disabled: pageType.view == this.activePageType }, [Validators.required]),
      firstExtraCost: new FormControl({ value: 2, disabled: pageType.view == this.activePageType }, [Validators.required]),
      secondExtraCost: new FormControl({ value: 1, disabled: pageType.view == this.activePageType }, [Validators.required]),
      one_Km: new FormControl({ value: 6, disabled: pageType.view == this.activePageType }, [Validators.required]),
      ten_M: new FormControl({ value: 0.1, disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningBegin: new FormControl({ value: '22:00', disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningEnd: new FormControl({ value: '06:00', disabled: pageType.view == this.activePageType }, [Validators.required]),
    })


    this.generalFields = new FormGroup({
      name: new FormControl({value:'Wael',disabled:pageType.view == this.activePageType }, [Validators.required]),
      numOfSites: new FormControl({ value: 4, disabled: pageType.view == this.activePageType }, [Validators.required]),
      driverRatio: new FormControl({ value: 5, disabled: pageType.view == this.activePageType }, [Validators.required]),
    })
  }
}
