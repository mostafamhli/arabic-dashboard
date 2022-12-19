import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCartComponent } from './mat-cart/mat-cart.component';
import { MaterialModule } from '../material/material.module';
import { PaginationComponent } from './components/pagination/pagination.component';



@NgModule({
  declarations: [
    MatCartComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    MatCartComponent
  ]
})
export class SharedModule { }
