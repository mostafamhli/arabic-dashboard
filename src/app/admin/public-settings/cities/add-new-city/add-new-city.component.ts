import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SettingsServicesService } from 'src/app/core/services/settings-services.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrorHandelComponent } from 'src/app/shared/components/error-handel/error-handel.component';
@Component({
  selector: 'app-add-new-city',
  templateUrl: './add-new-city.component.html',
  styleUrls: ['./add-new-city.component.scss']
})
export class AddNewCityComponent {

  addNewCityForm = new FormGroup({
    image: new FormControl(),
    isActive: new FormControl(false),
    cityNameInArabic: new FormControl('', [Validators.required]),
    cityNameInEnglish: new FormControl('', [Validators.required]),
    firstValueInRangeOne: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    secondValueInRangeOne: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    firstValueInRangeTwo: new FormControl({ value: '', disabled: true }),
    secondValueInRangeTwo: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
  });

  constructor(
    private dialogRef: MatDialogRef<AddNewCityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private settingsService: SettingsServicesService,
    private errorModal: MatDialog) {

  }

  ngOnInit() {
    if (this.data) {
      this.addNewCityForm.controls.image.setValue(this.data.imageUrl);
      this.addNewCityForm.controls.cityNameInArabic.setValue(this.data.arName);
      this.addNewCityForm.controls.cityNameInEnglish.setValue(this.data.name);
      this.addNewCityForm.controls.firstValueInRangeOne.setValue(this.data.zeroFeeRange);
      this.addNewCityForm.controls.secondValueInRangeOne.setValue(this.data.firstFeeRange);
      this.addNewCityForm.controls.firstValueInRangeTwo.setValue('');
      this.addNewCityForm.controls.secondValueInRangeTwo.setValue(this.data.secondFeeRange);
      this.addNewCityForm.controls.isActive.setValue(this.data.isActive);
    }
  }


  getErrorRequiredMessage() {
    if (
      this.addNewCityForm.controls['firstValueInRangeOne'].hasError('pattern') ||
      this.addNewCityForm.controls['secondValueInRangeOne'].hasError('pattern') ||
      this.addNewCityForm.controls['firstValueInRangeTwo'].hasError('pattern') ||
      this.addNewCityForm.controls['secondValueInRangeTwo'].hasError('pattern')
    ) {
      return 'يسمح فقط باستخدام الأرقام(0-9)';
    }
    return 'يجب أن تدخل قيمة';
  }

  onSelectedFile(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.addNewCityForm.get('image')?.setValue(event.target.result);
      }
    }

  }

  onSubmit() {

    let formData: any = new FormData();
    formData.append('IsActive', this.addNewCityForm.get('isActive')?.value);
    formData.append('ZeroFeeRange', this.addNewCityForm.get('firstValueInRangeOne')?.value);
    formData.append('FirstFeeRange', this.addNewCityForm.get('secondValueInRangeOne')?.value);
    formData.append('SecondFeeRange', this.addNewCityForm.get('secondValueInRangeTwo')?.value);
    formData.append('Image', this.addNewCityForm.get('image')?.value);
    formData.append('Id', this.data.id);
    this.settingsService.editCity(formData).subscribe(res => {
      this.dialogRef.close(true);
    }, err => {
      let error = err['error']
      error = error['error']
      let errorList = error.validationErrors
      this.errorModal.open(ErrorHandelComponent, {
        data: {
          title: error.message,
          errorList: errorList
        }
      })
    })
  }

  cancel() {
    this.dialogRef.close();
  }
}
