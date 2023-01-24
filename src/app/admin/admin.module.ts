import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material/material.module';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { CancleReasonsComponent } from './trips-managment/cancle-reasons/cancle-reasons.component';
import { ClientsComponent } from './clients/clients.component';
import { DiscountCodesComponent } from './trips-managment/discount-codes/discount-codes.component';
import { TripsComponent } from './trips-managment/trips/trips.component';
import { TripDetailsComponent } from './trips-managment/trip-details/trip-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MatNativeDateModule } from '@angular/material/core';
import { DashboardUsersComponent } from './public-settings/dashboard-users/dashboard-users.component';
import { VehicleClassificationComponent } from './public-settings/vehicle-classification/vehicle-classification.component';
import { ClassificationDisplayComponent } from './public-settings/classification-display/classification-display.component';
import { TypesComponent } from './public-settings/types/types.component';
import { SettingsComponent } from './public-settings/settings/settings.component';
import { AdminComponent } from './admin.component';
import { DriversRequestComponent } from './drivers/drivers-request/drivers-request.component';
import { ViewDriverRequestDetailsComponent } from './drivers/view-driver-request-details/view-driver-request-details.component';
import { DriversListComponent } from './drivers/drivers-list/drivers-list.component';
import { DriverDetailsComponent } from './drivers/driver-details/driver-details.component';
import { DriverProfileComponent } from './drivers/driver-profile/driver-profile.component';
import { DriverProfilePersonalInfoComponent } from './drivers/driver-profile-personal-info/driver-profile-personal-info.component';
import { DriverProfileVehicleInfoComponent } from './drivers/driver-profile-vehicle-info/driver-profile-vehicle-info.component';
import { AddTransferComponent } from './wallet/add-transfer/add-transfer.component';
import { ViewProfileComponent } from './drivers/view-profile/view-profile.component';
import { AddDiscountCodeComponent } from './trips-managment/discount-codes/add-discount-code/add-discount-code.component';
import { AddNewClassificationComponent } from './public-settings/vehicle-classification/add-new-classification/add-new-classification.component';
import { AddNewTypeComponent } from './public-settings/types/add-new-type/add-new-type.component';
import { CitiesComponent } from './public-settings/cities/cities.component';
import { AddNewUserComponent } from './public-settings/add-new-user/add-new-user.component';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { AddNewCityComponent } from './public-settings/cities/add-new-city/add-new-city.component';
import { ReportsComponent } from './reports/reports.component';
import { NotificationsComponent } from './notification/notifications/notifications.component';
import { SendNotificationComponent } from './notification/send-notification/send-notification.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { AcceptDriverRequestComponent } from './drivers/accept-driver-request/accept-driver-request.component';
import { ViewRequestAssetsComponent } from './drivers/view-request-assets/view-request-assets.component';
import { SendMessageComponent } from './notification/notifications/send-message/send-message.component';
import { ViewClientDetailsComponent } from './clients/view-client-details/view-client-details.component';
import { AddServiceComponent } from './public-settings/add-service/add-service.component';
import { AddNewServiceComponent } from './public-settings/add-new-service/add-new-service.component';
import { UserTransfersComponent } from './wallet/user-transfers/user-transfers.component';
import { JaytaxiTransfersComponent } from './wallet/jaytaxi-transfers/jaytaxi-transfers.component';
import { TransfersComponent } from './wallet/transfers/transfers.component';
import { MapDashboardComponent } from './map-dashboard/map-dashboard.component';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { AgmOverlays } from "agm-overlays"

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
    ViewProfileComponent,
    AddDiscountCodeComponent,
    AddNewClassificationComponent,
    AddNewTypeComponent,
    CitiesComponent,
    AddNewUserComponent,
    AddNewCityComponent,
    ReportsComponent,
    NotificationsComponent,
    SendNotificationComponent,
    ConfirmComponent,
    AcceptDriverRequestComponent,
    ViewRequestAssetsComponent,
    SendMessageComponent,
    ViewClientDetailsComponent,
    AddServiceComponent,
    AddNewServiceComponent,
    UserTransfersComponent,
    JaytaxiTransfersComponent,
    MapDashboardComponent
  ],

  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    AgmOverlays,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDbK718aZLiKlwzGd0IPy_qyWTWF1fY9lI",
      libraries: ['places'],
      language: 'en'
    }),
    NgxMatTimepickerModule.setLocale('ar-AE')
  ],
})
export class AdminModule { }
