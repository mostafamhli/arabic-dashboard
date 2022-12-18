import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancleReasonsComponent } from './cancle-reasons/cancle-reasons.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: CancleReasonsComponent,
  },
  
]

@NgModule({
  declarations: [
    CancleReasonsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CancleReasonsModule { }
