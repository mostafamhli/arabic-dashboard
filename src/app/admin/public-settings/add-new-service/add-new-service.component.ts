import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-service',
  templateUrl: './add-new-service.component.html',
  styleUrls: ['./add-new-service.component.scss']
})
export class AddNewServiceComponent {

  generalForm = new FormGroup({
    image: new FormControl(File, [Validators.required]),
    name: new FormControl('', [Validators.required]),
  });


  getErrorRequiredMessage() {
    return 'يجب أن تدخل قيمة';
  }

  onSelectedFile(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.generalForm.controls.image.setValue(event.target.result);
      }
    }
  }



  send() {
    console.log(this.generalForm.value);
  }
}
