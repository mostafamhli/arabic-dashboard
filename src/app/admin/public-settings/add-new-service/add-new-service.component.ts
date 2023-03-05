import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SettingsServicesService } from 'src/app/core/services/settings-services.service';

@Component({
  selector: 'app-add-new-service',
  templateUrl: './add-new-service.component.html',
  styleUrls: ['./add-new-service.component.scss']
})
export class AddNewServiceComponent {

  generalForm = new FormGroup({
    image: new FormControl(),
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  constructor(private settingsService:SettingsServicesService, private dialogRef:MatDialogRef<AddNewServiceComponent>) { }

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
    let formData: any = new FormData()
    formData.append('Image', this.generalForm.value.image)
    formData.append('Name', this.generalForm.value.name)
    formData.append('Description', this.generalForm.value.description)
    this.settingsService.addNewVehcleType(formData).subscribe(res => {
      console.log(res)
      this.dialogRef.close(true)
    })
    console.log(this.generalForm.value);
  }
}
