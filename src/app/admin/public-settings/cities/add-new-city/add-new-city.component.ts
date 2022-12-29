import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-city',
  templateUrl: './add-new-city.component.html',
  styleUrls: ['./add-new-city.component.scss']
})
export class AddNewCityComponent {

  addNewCityForm = new FormGroup({
    cityName: new FormControl('', [Validators.required]),
    firstValueInRangeOne: new FormControl('', [Validators.required]),
    secondValueInRangeOne: new FormControl('', [Validators.required]),
    firstValueInRangeTwo: new FormControl({value:'',disabled:true}),
    secondValueInRangeTwo: new FormControl('', [Validators.required]),
  })

  cityPhoto = new FormControl(File, [Validators.required]);

  getErrorRequiredMessage() {
    return 'يجب أن تدخل قيمة';
  }

  ngOnInit() {

  }

  onSelectedFile(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.cityPhoto = event.target.result
        console.log(this.cityPhoto)
      }
    }
  }

  onSubmit() {
    console.log(this.addNewCityForm.value)
  }
}
