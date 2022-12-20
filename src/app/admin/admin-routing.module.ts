import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancleReasonsComponent } from './cancle-reasons/cancle-reasons.component';
import { ClientsComponent } from './clients/clients.component';
import { DiscountCodesComponent } from './discount-codes/discount-codes.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { TripsComponent } from './trips/trips.component';
import { AdminComponent } from './admin.component';
import { DriversRequestComponent } from './drivers/drivers-request/drivers-request.component';
import { ViewDriverRequestDetailsComponent } from './drivers/view-driver-request-details/view-driver-request-details.component';
import { DriversListComponent } from './drivers/drivers-list/drivers-list.component';
import { DriverDetailsComponent } from './drivers/driver-details/driver-details.component';

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
      { path: 'driver-details/:id', component: DriverDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
