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
    image: new FormControl([Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    mobile: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required])
  })

  id: any
  constructor(private settingsServices: SettingsServicesService, private router: Router, private route: ActivatedRoute) {
    this.id = route.snapshot.params['id']
    console.log(this.id)
  }

  getErrorRequiredMessage() {
    if (this.addNewUserGroupForm.controls.email.hasError('email')) {
      return 'أدخل بريد إلكتروني صالح'
    }
    return 'يجب أن تدخل قيمة';
  }

  selectedUser:any;
  ngOnInit() {
    this.settingsServices.getAllRoles().subscribe((res: any) => {
      this.roles = res.items
      console.log(this.roles)
    })
    this.settingsServices.getAllDashboardUsers(new FilterWithSearch()).subscribe(res => {
      this.selectedUser = res.items.filter((item: any) => {
        return item.id === this.id
      })
      console.log(this.selectedUser)
      if (this.selectedUser) {
        this.addNewUserGroupForm.get('firstName')?.setValue(this.selectedUser[0].name)
        this.addNewUserGroupForm.get('lastName')?.setValue(this.selectedUser[0].surname)
        this.addNewUserGroupForm.get('mobile')?.setValue(this.selectedUser[0].phoneNumber)
        this.addNewUserGroupForm.get('type')?.setValue(this.selectedUser[0].role)
        this.addNewUserGroupForm.get('email')?.setValue(this.selectedUser[0].email)
        this.addNewUserGroupForm.get('image')?.setValue(this.selectedUser[0].profileImageUrl)
      }
    })
  }

  edit() {
    let formData: any = new FormData();
    formData.append('Name', this.addNewUserGroupForm.value.firstName)
    formData.append('Surname', this.addNewUserGroupForm.value.lastName)
    formData.append('Email', this.addNewUserGroupForm.value.email)
    formData.append('PhoneNumber', this.addNewUserGroupForm.value.mobile)
    formData.append('Password', null)
    formData.append('Role', this.addNewUserGroupForm.value.type)
    formData.append('ProfileImage', null)
    formData.append('Id', this.id)
    this.settingsServices.editUser(formData).subscribe(res => {
      console.log(res)
      this.router.navigate(['/dashboard-users'])
    })
  }

  onSubmit() {
    if(!this.id){
      let formData: any = new FormData();
      formData.append('Name', this.addNewUserGroupForm.value.firstName)
      formData.append('Surname', this.addNewUserGroupForm.value.lastName)
      formData.append('Email', this.addNewUserGroupForm.value.email)
      formData.append('PhoneNumber', this.addNewUserGroupForm.value.mobile)
      formData.append('Password', this.addNewUserGroupForm.value.password)
      formData.append('Role', this.addNewUserGroupForm.value.type)
      formData.append('ProfileImage', this.addNewUserGroupForm.value.image)
      this.settingsServices.addNewUser(formData).subscribe(res => {
        console.log(res)
        this.router.navigate(['/dashboard-users'])
      })
    }
    
  }

}
