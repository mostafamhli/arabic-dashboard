import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountCodesComponent } from './discount-codes/discount-codes.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import {MatNativeDateModule} from '@angular/material/core';
import { FormsModule , ReactiveFormsModule}   from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: DiscountCodesComponent,
  }
]

@NgModule({
  declarations: [
    DiscountCodesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DiscountCodesModule { }
