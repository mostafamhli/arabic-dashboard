import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { AddNewCityComponent } from './add-new-city/add-new-city.component';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent {

  cities = [
    {
      name: 'بغداد',
      pic: '../../../../assets/img/baghdad.jpg',
      firstValueAtFirstRange: 5,
      secondValueAtFirstRange: 9,
      secondValueAtSecondRange: 15,
    },
    {
      name: 'الموصل',
      pic: '../../../../assets/img/basra.jpg',
      firstValueAtFirstRange: 3,
      secondValueAtFirstRange: 8,
      secondValueAtSecondRange: 16,
    },
    {
      name: 'الأنبار',
      pic: '../../../../assets/img/baghdad.jpg',
      firstValueAtFirstRange: 2,
      secondValueAtFirstRange: 8,
      secondValueAtSecondRange: 20,
    }

  ]

  constructor(private addNewCity: MatDialog) {
  }

  addCity() {
    this.addNewCity.open(AddNewCityComponent, {
      width: "50%"
    })
  }


}
