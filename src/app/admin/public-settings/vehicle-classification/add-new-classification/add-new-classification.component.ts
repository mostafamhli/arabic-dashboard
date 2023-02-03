import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SettingsServicesService } from 'src/app/core/services/settings-services.service';

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

  pageTypeEnum = pageType;
  activePageType = pageType.add;
  image:any = "../../../assets/img/user.png"
  openTripCost: any = {}

  generalFields = new FormGroup({
    arabicName: new FormControl('', [Validators.required]),
    englishName: new FormControl('', [Validators.required]),
    image: new FormControl(File, [Validators.required]),
    numOfSites: new FormControl(0, [Validators.required, Validators.pattern("^[0-9]*$")]),
    driverRatio: new FormControl(0, [Validators.required, Validators.pattern("^[0-9]*$")]),
    morningLowestRent: new FormControl(0, [Validators.required, Validators.pattern("^[0-9]*$")]),
    morningFirstExtraCost: new FormControl(0, [Validators.required, Validators.pattern("^[0-9]*$")]),
    morningSecondExtraCost: new FormControl(0, [Validators.required, Validators.pattern("^[0-9]*$")]),
    morningOne_Km: new FormControl(0, [Validators.required, Validators.pattern("^[0-9]*$")]),
    morningTen_M: new FormControl(0, [Validators.required, Validators.pattern("^[0-9]*$")]),
    dayLowestRent: new FormControl(0, [Validators.required, Validators.pattern("^[0-9]*$")]),
    dayFirstExtraCost: new FormControl(0, [Validators.required, Validators.pattern("^[0-9]*$")]),
    daySecondExtraCost: new FormControl(0, [Validators.required, Validators.pattern("^[0-9]*$")]),
    dayOne_Km: new FormControl(0, [Validators.required, Validators.pattern("^[0-9]*$")]),
    dayTen_M: new FormControl(0, [Validators.required, Validators.pattern("^[0-9]*$")]),
    nightLowestRent: new FormControl(0, [Validators.required, Validators.pattern("^[0-9]*$")]),
    nightFirstExtraCost: new FormControl(0, [Validators.required, Validators.pattern("^[0-9]*$")]),
    nightSecondExtraCost: new FormControl(0, [Validators.required, Validators.pattern("^[0-9]*$")]),
    nightOne_Km: new FormControl(0, [Validators.required, Validators.pattern("^[0-9]*$")]),
    nightTen_M: new FormControl(0, [Validators.required, Validators.pattern("^[0-9]*$")])
  });


  constructor(private activatedRoute: ActivatedRoute, private router: Router, private settingsService: SettingsServicesService) {
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

    this.openTripCost['morning'] = [{ openTripTime: 1, tripCost: 3 }, { openTripTime: 2, tripCost: 5 }]
    this.openTripCost['day'] = [{ openTripTime: 1, tripCost: 4 }, { openTripTime: 2, tripCost: 5 }]
    this.openTripCost['night'] = [{ openTripTime: 1, tripCost: 5 }, { openTripTime: 2, tripCost: 7 }]
  }

  getErrorRequiredMessage() {
    if (
      this.generalFields.controls['numOfSites'].hasError('pattern') ||
      this.generalFields.controls['driverRatio'].hasError('pattern') ||
      this.generalFields.controls['morningLowestRent'].hasError('pattern') ||
      this.generalFields.controls['morningFirstExtraCost'].hasError('pattern') ||
      this.generalFields.controls['morningSecondExtraCost'].hasError('pattern') ||
      this.generalFields.controls['morningOne_Km'].hasError('pattern') ||
      this.generalFields.controls['morningTen_M'].hasError('pattern') ||
      this.generalFields.controls['dayLowestRent'].hasError('pattern') ||
      this.generalFields.controls['dayFirstExtraCost'].hasError('pattern') ||
      this.generalFields.controls['daySecondExtraCost'].hasError('pattern') ||
      this.generalFields.controls['dayOne_Km'].hasError('pattern') ||
      this.generalFields.controls['dayTen_M'].hasError('pattern') ||
      this.generalFields.controls['nightLowestRent'].hasError('pattern') ||
      this.generalFields.controls['nightFirstExtraCost'].hasError('pattern') ||
      this.generalFields.controls['nightSecondExtraCost'].hasError('pattern') ||
      this.generalFields.controls['nightOne_Km'].hasError('pattern') ||
      this.generalFields.controls['nightTen_M'].hasError('pattern')
    ) {
      return 'يسمح فقط باستخدام الأرقام(0-9)';
    }
    return 'يجب أن تدخل قيمة';
  }

  onSubmit() {
    console.log(this.settingsService.addNewClassification(this.generalFields.value));
  }

  setInfoForForm() {
    this.generalFields = new FormGroup({
      arabicName: new FormControl({ value: 'Wael', disabled: pageType.view == this.activePageType }, [Validators.required]),
      englishName: new FormControl({ value: 'Wael', disabled: pageType.view == this.activePageType }, [Validators.required]),
      image: new FormControl({ value: File, disabled: pageType.view == this.activePageType }, [Validators.required]),
      numOfSites: new FormControl({ value: 4, disabled: pageType.view == this.activePageType }, [Validators.required]),
      driverRatio: new FormControl({ value: 5, disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningLowestRent: new FormControl({ value: 5, disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningFirstExtraCost: new FormControl({ value: 2, disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningSecondExtraCost: new FormControl({ value: 1, disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningOne_Km: new FormControl({ value: 6, disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningTen_M: new FormControl({ value: 0.1, disabled: pageType.view == this.activePageType }, [Validators.required]),
      dayLowestRent: new FormControl({ value: 4, disabled: pageType.view == this.activePageType }, [Validators.required]),
      dayFirstExtraCost: new FormControl({ value: 2, disabled: pageType.view == this.activePageType }, [Validators.required]),
      daySecondExtraCost: new FormControl({ value: 1, disabled: pageType.view == this.activePageType }, [Validators.required]),
      dayOne_Km: new FormControl({ value: 6, disabled: pageType.view == this.activePageType }, [Validators.required]),
      dayTen_M: new FormControl({ value: 0.1, disabled: pageType.view == this.activePageType }, [Validators.required]),
      nightLowestRent: new FormControl({ value: 4, disabled: pageType.view == this.activePageType }, [Validators.required]),
      nightFirstExtraCost: new FormControl({ value: 2, disabled: pageType.view == this.activePageType }, [Validators.required]),
      nightSecondExtraCost: new FormControl({ value: 1, disabled: pageType.view == this.activePageType }, [Validators.required]),
      nightOne_Km: new FormControl({ value: 6, disabled: pageType.view == this.activePageType }, [Validators.required]),
      nightTen_M: new FormControl({ value: 0.1, disabled: pageType.view == this.activePageType }, [Validators.required])
    })
  }


  onFileChange(e: any) {
    if (e.target.files) {

      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.generalFields.controls.image.setValue(event.target.result);
        this.image = this.generalFields.controls.image.value;
      }
    }
  }
}
