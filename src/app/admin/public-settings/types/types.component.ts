import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FilterWithSearch } from 'src/app/core/models/filters.model';
import { AddNewTypeComponent } from './add-new-type/add-new-type.component';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent {
  filter: FilterWithSearch = new FilterWithSearch()
  
  typesList: string[] = [];

  constructor(private addType:MatDialog){
    this.getTypes()
  }

  getTypes(){
    
  }

  addNewType(){
    this.addType.open(AddNewTypeComponent,{
      width:"50%"
    })
  }
  
}
