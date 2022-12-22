import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as moment from 'moment';
import { FilterWithSearch } from 'src/app/core/models/filters.model';
import { ClassificationDisplayComponent } from '../classification-display/classification-display.component';
import { AddNewClassificationComponent } from './add-new-classification/add-new-classification.component';

export interface PeriodicElement {
  classificationName: string;
  numOfSeat: number;
  rentDuringDay: number;
  rentDuringNight: number;
  driverRatio: number
}
@Component({
  selector: 'app-vehicle-classification',
  templateUrl: './vehicle-classification.component.html',
  styleUrls: ['./vehicle-classification.component.css']
})
export class VehicleClassificationComponent {

  classifications: any[] = []
  filter: FilterWithSearch = new FilterWithSearch();

  constructor( private addClassification:MatDialog ) {
    this.getClassifications()
  }

  getClassifications() {
    this.classifications = [
      {
        id: 1,
        classificationName: 'comfort',
        numOfSeat: 5,
        rentDuringDay: 10,
        rentDuringNight: 20,
        driverRatio: 10
      },
      {
        id: 1,
        classificationName: 'classic',
        numOfSeat: 5,
        rentDuringDay: 10,
        rentDuringNight: 20,
        driverRatio: 10
      },
      {
        id: 1,
        classificationName: 'comfort',
        numOfSeat: 5,
        rentDuringDay: 10,
        rentDuringNight: 20,
        driverRatio: 10
      }
    ]
  }

  
  loadMore() {
    this.filter.pageIndex = this.filter.pageIndex + 1;
    this.getClassifications()
  }

  addNewClassification(){
    this.addClassification.open(ClassificationDisplayComponent,{
      width:"50%"
    })
  }

}
