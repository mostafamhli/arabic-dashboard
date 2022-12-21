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

import { AdminComponent } from './admin.component';
import { DriversRequestComponent } from './drivers/drivers-request/drivers-request.component';
import { ViewDriverRequestDetailsComponent } from './drivers/view-driver-request-details/view-driver-request-details.component';
import { DriversListComponent } from './drivers/drivers-list/drivers-list.component';
import { DriverDetailsComponent } from './drivers/driver-details/driver-details.component';
import { DriverProfileComponent } from './drivers/driver-profile/driver-profile.component';
import { DriverProfilePersonalInfoComponent } from './drivers/driver-profile-personal-info/driver-profile-personal-info.component';
import { DriverProfileVehicleInfoComponent } from './drivers/driver-profile-vehicle-info/driver-profile-vehicle-info.component';
import { TransfersComponent } from './drivers/transfers/transfers.component';
import { AddTransferComponent } from './drivers/add-transfer/add-transfer.component';
import { ViewProfileComponent } from './drivers/view-profile/view-profile.component';

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
    SettingsComponent,
    AdminComponent,
    DriversRequestComponent,
    ViewDriverRequestDetailsComponent,
    DriversListComponent,
    DriverDetailsComponent,
    DriverProfileComponent,
    DriverProfilePersonalInfoComponent,
    DriverProfileVehicleInfoComponent,
    TransfersComponent,
    AddTransferComponent,
    ViewProfileComponent
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
