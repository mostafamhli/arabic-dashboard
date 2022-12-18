import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripsComponent } from './trips/trips.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';

import {MatNativeDateModule} from '@angular/material/core';
import { FormsModule , ReactiveFormsModule}   from '@angular/forms';
import { TripDetailsComponent } from './trip-details/trip-details.component';
const routes: Routes = [
  {
    path: '',
    component: TripsComponent,
  },
  {
    path:'trip-details',
    component:TripDetailsComponent
  },
]

@NgModule({
  declarations: [
    TripsComponent,
    TripDetailsComponent
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
export class TripsModule { }
