import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCartComponent } from './mat-cart/mat-cart.component';
import { MaterialModule } from '../material/material.module';
import { PaginationComponent } from './components/pagination/pagination.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { ViewImageComponent } from './components/view-image/view-image.component';


@NgModule({
  declarations: [
    MatCartComponent,
    PaginationComponent,
    UploadImageComponent,
    ViewImageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    MatCartComponent,
    UploadImageComponent
  ]
})
export class SharedModule { }
