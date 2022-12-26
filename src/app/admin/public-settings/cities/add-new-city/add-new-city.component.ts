import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-city',
  templateUrl: './add-new-city.component.html',
  styleUrls: ['./add-new-city.component.scss']
})
export class AddNewCityComponent {

  @ViewChild('myForm') form!: NgForm;
  
  cityName = new FormControl('', [Validators.required]);
  cityPhoto = new FormControl(File, [Validators.required]);

  getErrorRequiredMessage() {
    return 'يجب أن تدخل قيمة';
  }

  
  
  onSelectedFile(e:any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event:any) =>{
        this.cityPhoto = event.target.result
        console.log(this.cityPhoto)
      }
    }
  }

  onSubmit(){
    console.log(this.form.value)
  }
}
