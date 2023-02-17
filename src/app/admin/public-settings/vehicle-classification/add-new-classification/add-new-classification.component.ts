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
  image: any = "../../../assets/img/user.png"
  openTripCost: any = {}

  generalFields = new FormGroup({
    arabicName: new FormControl('', [Validators.required]),
    englishName: new FormControl('', [Validators.required]),
    image: new FormControl(File, [Validators.required]),
    icon: new FormControl(File, [Validators.required]),
    numOfSites: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    driverRatio: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    morningLowestRent: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    morningFirstExtraCost: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    morningSecondExtraCost: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    morningOne_Km: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    morningStoppingFactor: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    morningTen_M: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    morningWaitingTime: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    morningFirstWaitingTime: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    morningSecondWaitingTime: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    morningtimeDifferenceFactor: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    dayLowestRent: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    dayFirstExtraCost: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    daySecondExtraCost: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    dayOne_Km: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    dayTen_M: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    daytimeDifferenceFactor: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    dayFirstWaitingTime: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    daySecondWaitingTime: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    nightLowestRent: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    nightFirstExtraCost: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    nightSecondExtraCost: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    nightOne_Km: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    nightTen_M: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    nighttimeDifferenceFactor: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    nightFirstWaitingTime: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    nightSecondWaitingTime: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")])
  });


  constructor(private activatedRoute: ActivatedRoute, private router: Router, private settingsService: SettingsServicesService) {
    let id = this.activatedRoute.snapshot.params['id']
    if (id) {
      if (router.url.includes("classification-edit"))
        this.activePageType = pageType.edit
      else
        this.activePageType = pageType.view

      this.settingsService.getClassificationById(id).subscribe((res: any) => {
        this.setInfoForForm(res)
      })
    } else {
      this.activePageType = pageType.add
    }

    this.openTripCost['morning'] = [{ openTripTime: 1, tripCost: 3 }, { openTripTime: 2, tripCost: 5 }]
    this.openTripCost['day'] = [{ openTripTime: 1, tripCost: 4 }, { openTripTime: 2, tripCost: 5 }]
    this.openTripCost['night'] = [{ openTripTime: 1, tripCost: 5 }, { openTripTime: 2, tripCost: 7 }]
  }

  ngOnInit() {
    this.getOpenTrips();
  }

  shiftPackages: any[] = [];
  getOpenTrips() {
    this.settingsService.getOpenTrips().subscribe((res: any) => {
      this.shiftPackages = res.items
      for (let i = 0; i < this.shiftPackages.length; i++) {
        let x = i;
        let y = 'morningShiftPackages';
        let z = 'dayShiftPackages';
        let n = 'nightShiftPackages';
        let morningText = "y+x";
        let morningResult = eval(morningText);
        let dayText = "z+x";
        let dayResult = eval(dayText);
        let nightText = "n+x";
        let nightResult = eval(nightText);
        this.generalFields.addControl(morningResult, new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]))
        this.generalFields.addControl(dayResult, new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]))
        this.generalFields.addControl(nightResult, new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]))

      }

      console.log(this.shiftPackages)
    })
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
    let arr1: any[] = [];
    for (let i = 0; i < this.shiftPackages.length; i++) {
      let x = i;
      let y = 'morningShiftPackages';
      let z = 'dayShiftPackages';
      let n = 'nightShiftPackages';
      let morningText = "y+x";
      let dayText = "z+x";
      let nightText = "n+x";
      arr1.push(
        {
          "packageId": i + 1,
          "shift": 1,
          "cost": this.generalFields.get(eval(morningText))?.value
        },
        {
          "packageId": i + 1,
          "shift": 2,
          "cost": this.generalFields.get(eval(dayText))?.value
        },
        {
          "packageId": i + 1,
          "shift": 3,
          "cost": this.generalFields.get(eval(nightText))?.value
        },
      )
    }

    let arr = [
      {
        'shift': '1',
        'costFactor': this.generalFields.controls.morningLowestRent.value,
        'stoppingFactor': this.generalFields.controls.morningStoppingFactor.value,
        'additionalCost': this.generalFields.controls.morningOne_Km.value,
        'firstRangeCost': this.generalFields.controls.morningFirstExtraCost.value,
        'firstRangeTime': this.generalFields.controls.morningFirstWaitingTime.value,
        'secondRangeCost': this.generalFields.controls.morningSecondExtraCost.value,
        'secondRangeTime': this.generalFields.controls.morningSecondWaitingTime.value,
        'timeDifferenceFactor': this.generalFields.controls.morningtimeDifferenceFactor.value,
      },
      {
        'shift': '2',
        'costFactor': this.generalFields.controls.dayLowestRent.value,
        'stoppingFactor': this.generalFields.controls.dayTen_M.value,
        'additionalCost': this.generalFields.controls.dayOne_Km.value,
        'firstRangeCost': this.generalFields.controls.dayFirstExtraCost.value,
        'firstRangeTime': this.generalFields.controls.dayFirstWaitingTime.value,
        'secondRangeCost': this.generalFields.controls.daySecondExtraCost.value,
        'secondRangeTime': this.generalFields.controls.daySecondWaitingTime.value,
        'timeDifferenceFactor': this.generalFields.controls.daytimeDifferenceFactor.value,
      },
      {
        'shift': '3',
        'costFactor': this.generalFields.controls.nightLowestRent.value,
        'stoppingFactor': this.generalFields.controls.nightTen_M.value,
        'additionalCost': this.generalFields.controls.nightOne_Km.value,
        'firstRangeCost': this.generalFields.controls.nightFirstExtraCost.value,
        'firstRangeTime': this.generalFields.controls.nightFirstWaitingTime.value,
        'secondRangeCost': this.generalFields.controls.nightSecondExtraCost.value,
        'secondRangeTime': this.generalFields.controls.nightSecondWaitingTime.value,
        'timeDifferenceFactor': this.generalFields.controls.nighttimeDifferenceFactor.value,
      }]


    let formData: any = new FormData();
    formData.append('Name', this.generalFields.get('englishName')?.value)
    formData.append('ProvinceId', this.settingsService.selectedProv)
    formData.append('ArName', this.generalFields.get('arabicName')?.value)
    formData.append('Category', this.settingsService.selectedType)
    formData.append('Image', this.generalFields.get('image')?.value)
    formData.append('Icon', this.generalFields.get('icon')?.value)
    formData.append('SeatCount', this.generalFields.controls.numOfSites.value!)
    formData.append('CaptainPercentage', this.generalFields.get('driverRatio')?.value!)
    formData.append('AlternativeId', '')
    formData.append('ShiftCostFactors', JSON.stringify(arr))
    formData.append('ShiftPackages', JSON.stringify(arr1))

    this.settingsService.addNewClassification(formData).subscribe(res => {
      console.log(res)
    })

    /**
     * "The following errors were detected during validation.\r\n - The value '\"4\"' is not valid for SeatCount.\r\n - The value '\"40\"' is not valid for CaptainPercentage.\r\n"

     */
  }

  setInfoForForm(res: any) {
    console.log(res)
    this.generalFields = new FormGroup({
      arabicName: new FormControl({ value: res.arName, disabled: pageType.view == this.activePageType }, [Validators.required]),
      englishName: new FormControl({ value: res.name, disabled: pageType.view == this.activePageType }, [Validators.required]),
      image: new FormControl({ value: res.imageUrl, disabled: pageType.view == this.activePageType }, [Validators.required]),
      icon: new FormControl({ value: res.iconUrl, disabled: pageType.view == this.activePageType }, [Validators.required]),
      numOfSites: new FormControl({ value: res.seatCount, disabled: pageType.view == this.activePageType }, [Validators.required]),
      driverRatio: new FormControl({ value: res.captainPercentage, disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningLowestRent: new FormControl({ value: res.shiftCostFactors[0].costFactor, disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningFirstExtraCost: new FormControl({ value: res.shiftCostFactors[0].firstRangeCost, disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningSecondExtraCost: new FormControl({ value: res.shiftCostFactors[0].secondRangeCost, disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningOne_Km: new FormControl({ value: res.shiftCostFactors[0].additionalCost, disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningStoppingFactor: new FormControl({ value: res.shiftCostFactors[0].stoppingFactor, disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningTen_M: new FormControl({ value: res.shiftCostFactors[0].additionalCost, disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningWaitingTime: new FormControl({ value: res.shiftCostFactors[0].additionalCost, disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningFirstWaitingTime: new FormControl({ value: res.shiftCostFactors[0].firstRangeTime, disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningSecondWaitingTime: new FormControl({ value: res.shiftCostFactors[0].secondRangeTime, disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningtimeDifferenceFactor: new FormControl({ value: res.shiftCostFactors[0].timeDifferenceFactor, disabled: pageType.view == this.activePageType }, [Validators.required]),
      dayLowestRent: new FormControl({ value: res.shiftCostFactors[1].costFactor, disabled: pageType.view == this.activePageType }, [Validators.required]),
      dayFirstExtraCost: new FormControl({ value: res.shiftCostFactors[1].firstRangeCost, disabled: pageType.view == this.activePageType }, [Validators.required]),
      daySecondExtraCost: new FormControl({ value: res.shiftCostFactors[1].secondRangeCost, disabled: pageType.view == this.activePageType }, [Validators.required]),
      dayOne_Km: new FormControl({ value: res.shiftCostFactors[1].additionalCost, disabled: pageType.view == this.activePageType }, [Validators.required]),
      dayTen_M: new FormControl({ value: res.shiftCostFactors[1].additionalCost, disabled: pageType.view == this.activePageType }, [Validators.required]),
      daytimeDifferenceFactor: new FormControl({ value: res.shiftCostFactors[1].timeDifferenceFactor, disabled: pageType.view == this.activePageType }, [Validators.required]),
      dayFirstWaitingTime: new FormControl({ value: res.shiftCostFactors[1].firstRangeTime, disabled: pageType.view == this.activePageType }, [Validators.required]),
      daySecondWaitingTime: new FormControl({ value: res.shiftCostFactors[1].secondRangeTime, disabled: pageType.view == this.activePageType }, [Validators.required]),
      nightLowestRent: new FormControl({ value: res.shiftCostFactors[2].costFactor, disabled: pageType.view == this.activePageType }, [Validators.required]),
      nightFirstExtraCost: new FormControl({ value: res.shiftCostFactors[2].firstRangeCost, disabled: pageType.view == this.activePageType }, [Validators.required]),
      nightSecondExtraCost: new FormControl({ value: res.shiftCostFactors[2].secondRangeCost, disabled: pageType.view == this.activePageType }, [Validators.required]),
      nightOne_Km: new FormControl({ value: res.shiftCostFactors[2].additionalCost, disabled: pageType.view == this.activePageType }, [Validators.required]),
      nightTen_M: new FormControl({ value: res.shiftCostFactors[2].additionalCost, disabled: pageType.view == this.activePageType }, [Validators.required]),
      nighttimeDifferenceFactor: new FormControl({ value: res.shiftCostFactors[2].timeDifferenceFactor, disabled: pageType.view == this.activePageType }, [Validators.required]),
      nightFirstWaitingTime: new FormControl({ value: res.shiftCostFactors[2].firstRangeTime, disabled: pageType.view == this.activePageType }, [Validators.required]),
      nightSecondWaitingTime: new FormControl({ value: res.shiftCostFactors[2].secondRangeTime, disabled: pageType.view == this.activePageType }, [Validators.required])
    })
  }

  inputClicked(event: any) {
    console.log(event)
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
