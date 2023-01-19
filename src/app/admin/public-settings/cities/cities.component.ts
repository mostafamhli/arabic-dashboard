import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { SettingsServicesService } from 'src/app/core/services/settings-services.service';
import { AddNewCityComponent } from './add-new-city/add-new-city.component';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent {

  cities: any[] = [];

  constructor(private addNewCity: MatDialog, private settingsService:SettingsServicesService) {
    this.getCities();
  }

  getCities(){
    this.cities = this.settingsService.getCities();
    console.log(this.cities[1])
  }
  addCity() {
    this.addNewCity.open(AddNewCityComponent, {
      width: "50%"
    })
  }

  editCity(id:number){
    this.addNewCity.open(AddNewCityComponent, {
      width: "50%",
      data:this.cities[id]
    })
  }

}
