import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCartComponent } from './mat-cart/mat-cart.component';
import { MaterialModule } from '../material/material.module';
import { PaginationComponent } from './components/pagination/pagination.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { ViewImageComponent } from './components/view-image/view-image.component';
import { AddImageComponent } from './components/add-image/add-image.component';


@NgModule({
  declarations: [
    MatCartComponent,
    PaginationComponent,
    UploadImageComponent,
    ViewImageComponent,
    AddImageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    MatCartComponent,
    UploadImageComponent,
    AddImageComponent
  ]
})
export class SharedModule { }
