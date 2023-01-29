import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { CheckNoSessionGuard } from '../core/guards/check-no-session.guard';


const routes: Routes = [
  {
    path: '', component:SignInComponent,
    canActivate:[CheckNoSessionGuard]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
