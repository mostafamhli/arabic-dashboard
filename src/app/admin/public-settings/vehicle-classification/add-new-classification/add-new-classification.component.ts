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
  cityId: any
  catId: any
  generalFields = new FormGroup({
    arabicName: new FormControl('', [Validators.required]),
    englishName: new FormControl('', [Validators.required]),
    image: new FormControl([Validators.required]),
    icon: new FormControl([Validators.required]),
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
    this.getOpenTrips();
    let id = this.activatedRoute.snapshot.params['id']
    this.activatedRoute.queryParams.subscribe((params) => {
      this.cityId = params['cityId']
      this.catId = params['catId']
    })

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

    this.openTripCost['morning'] = []
    this.openTripCost['day'] = []
    this.openTripCost['night'] = []
  }

  ngOnInit() {
  }

  getOpenTrips() {
    this.settingsService.getOpenTrips().subscribe((res: any) => {
      let shiftPackages = res.items
      for (let i = 0; i < shiftPackages.length; i++) {
        this.openTripCost['morning'].push({
          packageId: shiftPackages[i].id,
          shift: 1,
          cost: 0,
          packageName: shiftPackages[i].arName
        })
        this.openTripCost['day'].push({
          packageId: shiftPackages[i].id,
          shift: 2,
          cost: 0,
          packageName: shiftPackages[i].arName
        })
        this.openTripCost['night'].push(
          {
            packageId: shiftPackages[i].id,
            shift: 3,
            cost: 0,
            packageName: shiftPackages[i].arName
          }
        )
      }
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
    let arr1: ShiftPackage[] = [];
    arr1 = arr1.concat(this.openTripCost['morning'])
    arr1 = arr1.concat(this.openTripCost['day'])
    arr1 = arr1.concat(this.openTripCost['night'])

    let arr: Shift[] = [
      {
        shift: 1,
        costFactor: this.generalFields.controls.morningLowestRent.value,
        stoppingFactor: this.generalFields.controls.morningStoppingFactor.value,
        additionalCost: this.generalFields.controls.morningOne_Km.value,
        firstRangeCost: this.generalFields.controls.morningFirstExtraCost.value,
        firstRangeTime: this.generalFields.controls.morningFirstWaitingTime.value,
        secondRangeCost: this.generalFields.controls.morningSecondExtraCost.value,
        secondRangeTime: this.generalFields.controls.morningSecondWaitingTime.value,
        timeDifferenceFactor: this.generalFields.controls.morningtimeDifferenceFactor.value,
      },
      {
        shift: 2,
        costFactor: this.generalFields.controls.dayLowestRent.value,
        stoppingFactor: this.generalFields.controls.dayTen_M.value,
        additionalCost: this.generalFields.controls.dayOne_Km.value,
        firstRangeCost: this.generalFields.controls.dayFirstExtraCost.value,
        firstRangeTime: this.generalFields.controls.dayFirstWaitingTime.value,
        secondRangeCost: this.generalFields.controls.daySecondExtraCost.value,
        secondRangeTime: this.generalFields.controls.daySecondWaitingTime.value,
        timeDifferenceFactor: this.generalFields.controls.daytimeDifferenceFactor.value,
      },
      {
        shift: 3,
        costFactor: this.generalFields.controls.nightLowestRent.value,
        stoppingFactor: this.generalFields.controls.nightTen_M.value,
        additionalCost: this.generalFields.controls.nightOne_Km.value,
        firstRangeCost: this.generalFields.controls.nightFirstExtraCost.value,
        firstRangeTime: this.generalFields.controls.nightFirstWaitingTime.value,
        secondRangeCost: this.generalFields.controls.nightSecondExtraCost.value,
        secondRangeTime: this.generalFields.controls.nightSecondWaitingTime.value,
        timeDifferenceFactor: this.generalFields.controls.nighttimeDifferenceFactor.value,
      }]

    let formData: any = new FormData();
    formData.append('Name', this.generalFields.controls['englishName'].value)
    formData.append('ProvinceId', this.cityId)
    formData.append('ArName', this.generalFields.controls['arabicName'].value)
    formData.append('Category', this.catId)
    console.log(this.generalFields.controls['image'].value)
    formData.append('Image', this.generalFields.controls['image'].value)
    formData.append('Icon', this.generalFields.controls['icon'].value)
    formData.append('SeatCount', this.generalFields.controls.numOfSites.value!)
    formData.append('CaptainPercentage', this.generalFields.controls['driverRatio'].value)
    //formData.append('AlternativeId', '1')
    let i = 0;
    arr1.forEach((element: ShiftPackage) => {
      formData.append(`ShiftPackages[${i}][packageId]`, element.packageId)
      formData.append(`ShiftPackages[${i}][shift]`, element.shift)
      formData.append(`ShiftPackages[${i}][cost]`, element.cost)
      i++
    });
    arr.forEach((element: Shift) => {
      formData.append(`ShiftCostFactors[${element.shift - 1}][shift]`, element.shift)
      formData.append(`ShiftCostFactors[${element.shift - 1}][additionalCost]`, element.additionalCost)
      formData.append(`ShiftCostFactors[${element.shift - 1}][costFactor]`, element.costFactor)
      formData.append(`ShiftCostFactors[${element.shift - 1}][firstRangeCost]`, element.firstRangeCost)
      formData.append(`ShiftCostFactors[${element.shift - 1}][firstRangeTime]`, element.firstRangeTime)
      formData.append(`ShiftCostFactors[${element.shift - 1}][secondRangeCost]`, element.secondRangeCost)
      formData.append(`ShiftCostFactors[${element.shift - 1}][secondRangeTime]`, element.secondRangeTime)
      formData.append(`ShiftCostFactors[${element.shift - 1}][stoppingFactor]`, element.stoppingFactor)
      formData.append(`ShiftCostFactors[${element.shift - 1}][timeDifferenceFactor]`, element.timeDifferenceFactor)
    });

    this.settingsService.addNewClassification(formData).subscribe(res => {
      console.log(res)
    }, err => { })
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
      morningLowestRent: new FormControl({ value: res.shiftCostFactors[0].additionalCost, disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningFirstExtraCost: new FormControl({ value: res.shiftCostFactors[0].firstRangeCost, disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningSecondExtraCost: new FormControl({ value: res.shiftCostFactors[0].secondRangeCost, disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningOne_Km: new FormControl({ value: res.shiftCostFactors[0].costFactor, disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningStoppingFactor: new FormControl({ value: res.shiftCostFactors[0].stoppingFactor, disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningTen_M: new FormControl({ value: res.shiftCostFactors[0].additionalCost, disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningWaitingTime: new FormControl({ value: res.shiftCostFactors[0].additionalCost, disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningFirstWaitingTime: new FormControl({ value: res.shiftCostFactors[0].firstRangeTime, disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningSecondWaitingTime: new FormControl({ value: res.shiftCostFactors[0].secondRangeTime, disabled: pageType.view == this.activePageType }, [Validators.required]),
      morningtimeDifferenceFactor: new FormControl({ value: res.shiftCostFactors[0].timeDifferenceFactor, disabled: pageType.view == this.activePageType }, [Validators.required]),
      dayLowestRent: new FormControl({ value: res.shiftCostFactors[1].additionalCost, disabled: pageType.view == this.activePageType }, [Validators.required]),
      dayFirstExtraCost: new FormControl({ value: res.shiftCostFactors[1].firstRangeCost, disabled: pageType.view == this.activePageType }, [Validators.required]),
      daySecondExtraCost: new FormControl({ value: res.shiftCostFactors[1].secondRangeCost, disabled: pageType.view == this.activePageType }, [Validators.required]),
      dayOne_Km: new FormControl({ value: res.shiftCostFactors[1].costFactor, disabled: pageType.view == this.activePageType }, [Validators.required]),
      dayTen_M: new FormControl({ value: res.shiftCostFactors[1].additionalCost, disabled: pageType.view == this.activePageType }, [Validators.required]),
      daytimeDifferenceFactor: new FormControl({ value: res.shiftCostFactors[1].timeDifferenceFactor, disabled: pageType.view == this.activePageType }, [Validators.required]),
      dayFirstWaitingTime: new FormControl({ value: res.shiftCostFactors[1].firstRangeTime, disabled: pageType.view == this.activePageType }, [Validators.required]),
      daySecondWaitingTime: new FormControl({ value: res.shiftCostFactors[1].secondRangeTime, disabled: pageType.view == this.activePageType }, [Validators.required]),
      nightLowestRent: new FormControl({ value: res.shiftCostFactors[2].additionalCost, disabled: pageType.view == this.activePageType }, [Validators.required]),
      nightFirstExtraCost: new FormControl({ value: res.shiftCostFactors[2].firstRangeCost, disabled: pageType.view == this.activePageType }, [Validators.required]),
      nightSecondExtraCost: new FormControl({ value: res.shiftCostFactors[2].secondRangeCost, disabled: pageType.view == this.activePageType }, [Validators.required]),
      nightOne_Km: new FormControl({ value: res.shiftCostFactors[2].costFactor, disabled: pageType.view == this.activePageType }, [Validators.required]),
      nightTen_M: new FormControl({ value: res.shiftCostFactors[2].additionalCost, disabled: pageType.view == this.activePageType }, [Validators.required]),
      nighttimeDifferenceFactor: new FormControl({ value: res.shiftCostFactors[2].timeDifferenceFactor, disabled: pageType.view == this.activePageType }, [Validators.required]),
      nightFirstWaitingTime: new FormControl({ value: res.shiftCostFactors[2].firstRangeTime, disabled: pageType.view == this.activePageType }, [Validators.required]),
      nightSecondWaitingTime: new FormControl({ value: res.shiftCostFactors[2].secondRangeTime, disabled: pageType.view == this.activePageType }, [Validators.required])
    })
    console.log(res.shiftPackages)
    console.log(this.openTripCost['morning'])
    console.log(this.openTripCost['day'])
    console.log(this.openTripCost['night'])
    res.shiftPackages.forEach((element: ShiftPackage) => {
      this.openTripCost['morning'].forEach((elementM: ShiftPackage) => {
        if (element.packageId == elementM.packageId && element.shift == elementM.shift) {
          elementM.cost = element.cost
        }
      })
      this.openTripCost['day'].forEach((elementD: ShiftPackage) => {
        if (element.packageId == elementD.packageId && element.shift == elementD.shift) {
          elementD.cost = element.cost
        }
      })
      this.openTripCost['night'].forEach((elementN: ShiftPackage) => {
        if (element.packageId == elementN.packageId && element.shift == elementN.shift) {
          elementN.cost = element.cost
        }
      })
    })
    /*let shiftPackages = res.shiftPackages
    for (let i = 0; i < shiftPackages.length; i++) {
      this.openTripCost['morning'].push({
        packageId: shiftPackages[i].packageId,
        shift: 1,
        cost: shiftPackages[i].cost,
        packageName: shiftPackages[i].arName
      })
      this.openTripCost['day'].push({
        packageId: shiftPackages[i].id,
        shift: 2,
        cost: 0,
        packageName: shiftPackages[i].arName
      })
      this.openTripCost['night'].push(
        {
          packageId: shiftPackages[i].id,
          shift: 3,
          cost: 0,
          packageName: shiftPackages[i].arName
        }
      )
    }*/
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

class ShiftPackage {
  packageId: any
  shift: any
  cost: any
  packageName: string
}
class Shift {
  shift: any
  costFactor: any
  stoppingFactor: any
  additionalCost: any
  firstRangeCost: any
  firstRangeTime: any
  secondRangeCost: any
  secondRangeTime: any
  timeDifferenceFactor: any
}
