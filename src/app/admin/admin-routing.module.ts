import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancleReasonsComponent } from './trips-managment/cancle-reasons/cancle-reasons.component';
import { ClientsComponent } from './clients/clients.component';
import { DiscountCodesComponent } from './trips-managment/discount-codes/discount-codes.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { TripDetailsComponent } from './trips-managment/trip-details/trip-details.component';
import { TripsComponent } from './trips-managment/trips/trips.component';
import { AdminComponent } from './admin.component';
import { DriversRequestComponent } from './drivers/drivers-request/drivers-request.component';
import { ViewDriverRequestDetailsComponent } from './drivers/view-driver-request-details/view-driver-request-details.component';
import { DriversListComponent } from './drivers/drivers-list/drivers-list.component';
import { DriverDetailsComponent } from './drivers/driver-details/driver-details.component';

import { VehicleClassificationComponent } from './public-settings/vehicle-classification/vehicle-classification.component';
import { TypesComponent } from './public-settings/types/types.component';
import { SettingsComponent } from './public-settings/settings/settings.component';
import { ClassificationDisplayComponent } from './public-settings/classification-display/classification-display.component';
import { DashboardUsersComponent } from './public-settings/dashboard-users/dashboard-users.component';
import { DriverProfileComponent } from './drivers/driver-profile/driver-profile.component';
import { DriverProfilePersonalInfoComponent } from './drivers/driver-profile-personal-info/driver-profile-personal-info.component';
import { DriverProfileVehicleInfoComponent } from './drivers/driver-profile-vehicle-info/driver-profile-vehicle-info.component';
import { TransfersComponent } from './drivers/transfers/transfers.component';
import { ViewProfileComponent } from './drivers/view-profile/view-profile.component';
import { CitiesComponent } from './public-settings/cities/cities.component';
import { AddNewUserComponent } from './public-settings/add-new-user/add-new-user.component';
import { AddNewClassificationComponent } from './public-settings/vehicle-classification/add-new-classification/add-new-classification.component';
import { ReportsComponent } from './reports/reports.component';
import { NotificationsComponent } from './notification/notifications/notifications.component';
import { SendMessageComponent } from './notification/notifications/send-message/send-message.component';
import { ViewClientDetailsComponent } from './clients/view-client-details/view-client-details.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: MainDashboardComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'trips', component: TripsComponent },
      { path: 'trip-details', component: TripDetailsComponent },
      { path: 'discount-codes', component: DiscountCodesComponent },
      { path: 'cancle', component: CancleReasonsComponent },
      { path: 'drivers-request', component: DriversRequestComponent },
      { path: 'driver-request/:id', component: ViewDriverRequestDetailsComponent },
      { path: 'drivers', component: DriversListComponent },
      { path: 'driver-details/:id', component: DriverDetailsComponent },
      {
        path: 'driver-profile',
        component: DriverProfileComponent
      },
      {
        path: 'driver-profile/:id',
        component: DriverProfileComponent
      },
      {
        path: 'view-driver-profile/:id',
        component: ViewProfileComponent
      },
      { path: 'transfers', component: TransfersComponent },
      { path: 'dashboard-users', component: DashboardUsersComponent },
      { path: 'vehicle-classification', component: VehicleClassificationComponent },
      { path: 'classification-display/:id', component: AddNewClassificationComponent },
      { path: 'classification-edit/:id', component: AddNewClassificationComponent },
      { path: 'types', component: TypesComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'cities', component: CitiesComponent },
      { path: 'add-new-user', component: AddNewUserComponent },
      { path: 'add-new-classification', component: AddNewClassificationComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'send-message', component: SendMessageComponent },
      { path: 'client/:id', component: ViewClientDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
