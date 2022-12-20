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
import { AdminComponent } from './admin.component';
import { DriversRequestComponent } from './drivers/drivers-request/drivers-request.component';
import { ViewDriverRequestDetailsComponent } from './drivers/view-driver-request-details/view-driver-request-details.component';
import { DriversListComponent } from './drivers/drivers-list/drivers-list.component';
import { DriverDetailsComponent } from './drivers/driver-details/driver-details.component';
import { DriverProfileComponent } from './drivers/driver-profile/driver-profile.component';

@NgModule({
  declarations: [
    MainDashboardComponent,
    CancleReasonsComponent,
    ClientsComponent,
    DiscountCodesComponent,
    TripsComponent,
    TripDetailsComponent,
    AdminComponent,
    DriversRequestComponent,
    ViewDriverRequestDetailsComponent,
    DriversListComponent,
    DriverDetailsComponent,
    DriverProfileComponent
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