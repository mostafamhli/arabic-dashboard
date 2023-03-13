import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  password: string = ''
  username: string = ''

  hide = true;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  public ngOnInit(): void {

  }

  form = this.fb.group({
    userName: [
      null,
      [
        Validators.required,
        Validators.minLength(3),
      ],
    ],
    password: [
      null,
      [
        Validators.required
      ],
    ],
  })


  errorMessage: string = '';
  public onSubmit(): void {
    if (this.form.valid) {
      this.userService.login(this.form.value).subscribe(res => {
        this.router.navigateByUrl('/')
      }, err => {
        this.errorMessage = err.error.error.message
      })
    }
  }
}
