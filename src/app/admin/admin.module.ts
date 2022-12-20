import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { MaterialModule } from '../material/material.module';

import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { CancleReasonsComponent } from './cancle-reasons/cancle-reasons.component';
import { ClientsComponent } from './clients/clients.component';
import { DiscountCodesComponent } from './discount-codes/discount-codes.component';
import { TripsComponent } from './trips/trips.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import {MatNativeDateModule} from '@angular/material/core';
import { DashboardUsersComponent } from './dashboard-users/dashboard-users.component';
import { VehicleClassificationComponent } from './vehicle-classification/vehicle-classification.component';
import { ClassificationDisplayComponent } from './classification-display/classification-display.component';
import { TypesComponent } from './types/types.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    MainDashboardComponent,
    CancleReasonsComponent,
    ClientsComponent,
    DiscountCodesComponent,
    TripsComponent,
    TripDetailsComponent,
    DashboardUsersComponent,
    VehicleClassificationComponent,
    ClassificationDisplayComponent,
    TypesComponent,
    SettingsComponent
  ],

  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ]
})
export class AdminModule { }
