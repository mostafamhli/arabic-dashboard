import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancleReasonsComponent } from './cancle-reasons/cancle-reasons.component';
import { ClassificationDisplayComponent } from './classification-display/classification-display.component';
import { ClientsComponent } from './clients/clients.component';
import { DashboardUsersComponent } from './dashboard-users/dashboard-users.component';
import { DiscountCodesComponent } from './discount-codes/discount-codes.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { TripsComponent } from './trips/trips.component';
import { TypesComponent } from './types/types.component';
import { VehicleClassificationComponent } from './vehicle-classification/vehicle-classification.component';

const routes: Routes = [
  {path:'', component:MainDashboardComponent},
  {path:'clients', component:ClientsComponent},
  {path:'trips', component:TripsComponent},
  {path:'trip-details', component:TripDetailsComponent},
  {path:'discount-codes', component:DiscountCodesComponent},
  {path:'cancle', component:CancleReasonsComponent},
  {path:'dashboard-users', component:DashboardUsersComponent},
  {path:'vehicle-classification', component:VehicleClassificationComponent},
  {path:'classification-display', component:ClassificationDisplayComponent},
  {path:'types', component:TypesComponent},
  {path:'settings', component:SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
