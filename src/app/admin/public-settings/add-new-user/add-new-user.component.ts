import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { FilterWithSearch } from 'src/app/core/models/filters.model';
import { SettingsServicesService } from 'src/app/core/services/settings-services.service';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss']
})
export class AddNewUserComponent {

  hide = true;

  roles: any[] = [];
  addNewUserGroupForm = new FormGroup({
    image: new FormControl(File),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required]),
    mobile: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required])
  })

  id: any
  constructor(private settingsServices: SettingsServicesService, private router: Router, private route: ActivatedRoute) {
    this.id = route.snapshot.params['id']
  }

  getErrorRequiredMessage() {
    if (this.addNewUserGroupForm.controls.email.hasError('email')) {
      return 'أدخل بريد إلكتروني صالح'
    }
    return 'يجب أن تدخل قيمة';
  }

  selectedUser: any;
  ngOnInit() {
    this.settingsServices.getAllRoles().subscribe((res: any) => {
      this.roles = res.items
    })
    if (this.id) {
      this.settingsServices.getUserById(this.id).subscribe(res => {
        this.selectedUser = res
        if (this.selectedUser) {
          this.addNewUserGroupForm.get('firstName')?.setValue(this.selectedUser?.name)
          this.addNewUserGroupForm.get('lastName')?.setValue(this.selectedUser?.surname)
          this.addNewUserGroupForm.get('userName')?.setValue(this.selectedUser?.userName)
          this.addNewUserGroupForm.get('mobile')?.setValue(this.selectedUser?.phoneNumber)
          this.addNewUserGroupForm.get('type')?.setValue(this.selectedUser?.role)
          this.addNewUserGroupForm.get('email')?.setValue(this.selectedUser?.email)
          this.addNewUserGroupForm.get('password')?.setValue(this.selectedUser?.password)
          this.addNewUserGroupForm.get('image')?.setValue(this.selectedUser?.profileImageUrl)
        }
      })
    }
  }

  /*
  ngAfterViewInit() {
    window.setTimeout(function () {

      var arr: HTMLCollection = document.getElementsByClassName('form-control');
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].hasAttribute("readonly")) {
          arr[i].removeAttribute('readonly');
        }
      }

    }, 500);
  }
*/

  edit() {
    let formData: any = new FormData();
    formData.append('Name', this.addNewUserGroupForm.value.firstName)
    formData.append('Surname', this.addNewUserGroupForm.value.lastName)
    formData.append('Username', this.addNewUserGroupForm.value.userName)
    formData.append('Email', this.addNewUserGroupForm.value.email)
    formData.append('PhoneNumber', this.addNewUserGroupForm.value.mobile)
    formData.append('Password', this.addNewUserGroupForm.value.password)
    formData.append('Role', this.addNewUserGroupForm.value.type)
    formData.append('ProfileImage', null)
    formData.append('Id', this.id)
    this.settingsServices.editUser(formData).subscribe(res => {
      this.router.navigate(['/dashboard-users'])
    })
  }

  onSubmit() {
    if (!this.id) {
      let formData = new FormData();
      formData.append('Name', JSON.stringify(this.addNewUserGroupForm.value.firstName))
      formData.append('Surname', JSON.stringify(this.addNewUserGroupForm.value.lastName))
      formData.append('Username', JSON.stringify(this.addNewUserGroupForm.value.userName))
      formData.append('Email', JSON.stringify(this.addNewUserGroupForm.value.email))
      formData.append('PhoneNumber', JSON.stringify(this.addNewUserGroupForm.value.mobile))
      formData.append('Password', JSON.stringify(this.addNewUserGroupForm.value.password))
      formData.append('Role', JSON.stringify(this.addNewUserGroupForm.value.type))
      formData.append('ProfileImage', JSON.stringify(this.addNewUserGroupForm.value.image))
      this.settingsServices.addNewUser(formData).subscribe(res => {
        this.router.navigate(['/dashboard-users'])
      })
    }

  }

}
