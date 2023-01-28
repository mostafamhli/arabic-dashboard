import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-move-driver-to-city',
  templateUrl: './move-driver-to-city.component.html',
  styleUrls: ['./move-driver-to-city.component.scss']
})
export class MoveDriverToCityComponent {

  moveDriver: FormGroup
  calssifications = [
    {
      id:1,
      label : 'جاي تكسي',
      vehicles : [
        {
          id:1,
          name:'VIP'
        },
        {
          id:2,
          name:'كابتن نسائي'
        },
        {
          id:3,
          name:'سيارة عادية'
        }
      ]
    },
    {
      id:2,
      label : 'تكتوك',
      vehicles : [
        {
          id:1,
          name:'تكتوك نوع 1'
        },
        {
          id:2,
          name:'تكتوك نوع 2'
        }
      ]
    }
  ]
  constructor() {
    this.moveDriver = new FormGroup({
      driverName: new FormControl(''),
      cityName: new FormControl(''),
      newVehicleClassification: new FormControl(''),
    })
  }

  submit(){
    console.log(this.moveDriver.value)
  }
}
