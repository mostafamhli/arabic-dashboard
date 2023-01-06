import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SettingsServicesService } from 'src/app/core/services/settings-services.service';

@Component({
  selector: 'app-add-new-city',
  templateUrl: './add-new-city.component.html',
  styleUrls: ['./add-new-city.component.scss']
})
export class AddNewCityComponent {

  addNewCityForm = new FormGroup({
    cityName: new FormControl('', [Validators.required]),
    cityPhoto: new FormControl('', [Validators.required]),
    firstValueInRangeOne: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    secondValueInRangeOne: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    firstValueInRangeTwo: new FormControl({ value: '', disabled: true }),
    secondValueInRangeTwo: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
  });

  constructor(private dialogRef: MatDialogRef<AddNewCityComponent>, private settingsService: SettingsServicesService) { }

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
        this.addNewCityForm.controls.cityPhoto.setValue(event.target.result);
      }
    }
  }

  onSubmit() {
    console.log(this.settingsService.addNewCity(this.addNewCityForm.value));
  }

  cancel() {
    this.dialogRef.close();
  }
}
