import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/main-dashboard/main-dashboard.module').then(m => m.MainDashboardModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('./modules/clients/clients.module').then(m => m.ClientsModule)
  },
  {
    path: 'discount-codes',
    loadChildren: () => import('./modules/discount-codes/discount-codes.module').then(m => m.DiscountCodesModule)
  },
  {
    path: 'trips',
    loadChildren: () => import('./modules/trips/trips.module').then(m => m.TripsModule)
  },
  {
    path: 'cancle',
    loadChildren: () => import('./modules/cancle-reasons/cancle-reasons.module').then(m => m.CancleReasonsModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
