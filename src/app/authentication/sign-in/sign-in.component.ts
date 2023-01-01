import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  password:string=''
  username:string=''

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {

  }

  form = this.fb.group({
    username: [
      null,
      [
        Validators.required,
        Validators.pattern(/^[A-z0-9]*$/),
        Validators.minLength(3),
      ],
    ],
    password: [
      null,
      [
        Validators.required,
        Validators.pattern(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        ),
        Validators.minLength(8),
      ],
    ],
  })


  public onSubmit(): void {
    if (this.form.valid) {
      console.log('Form Submitted');
    } else {
      console.error('Form values are invalid.');
    }
  }
}
