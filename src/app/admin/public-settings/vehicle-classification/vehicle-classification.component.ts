import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilterWithSearch } from 'src/app/core/models/filters.model';
import { ClassificationDisplayComponent } from '../classification-display/classification-display.component';
import { ConfirmComponent } from '../../confirm/confirm.component';


@Component({
  selector: 'app-vehicle-classification',
  templateUrl: './vehicle-classification.component.html',
  styleUrls: ['./vehicle-classification.component.scss']
})

export class VehicleClassificationComponent {

  classifications: any[] = [];
  cities: any[] = [
    {
      id: 1,
      name: 'بغداد',
      pic: '/assets/img/baghdad.png',
    },
    {
      id: 2,
      name: 'الموصل',
      pic: '/assets/img/basra.png',
    },
    {
      id: 3,
      name: 'الأنبار',
      pic: '/assets/img/baghdad.png',
    },
    {
      id: 4,
      name: 'البصرة',
      pic: '/assets/img/baghdad.png',
    },
    {
      id: 5,
      name: 'النجف',
      pic: '/assets/img/basra.png',
    },
    {
      id: 6,
      name: 'بابل',
      pic: '/assets/img/baghdad.png',
    },
    {
      id: 7,
      name: 'بغداد',
      pic: '/assets/img/baghdad.png',
    },
    {
      id: 8,
      name: 'الموصل',
      pic: '/assets/img/basra.png',
    },
    {
      id: 9,
      name: 'الأنبار',
      pic: '/assets/img/baghdad.png',
    },
    {
      id: 10,
      name: 'البصرة',
      pic: '/assets/img/baghdad.png',
    },
    {
      id: 11,
      name: 'النجف',
      pic: '/assets/img/basra.png',
    },
    {
      id: 12,
      name: 'بابل',
      pic: '/assets/img/baghdad.png',
    }
  ]
  activeCityTab = 1;
  vehicleTypes: any[] = [
    {
      id: 1,
      name: 'جاي تكسي'
    },
    {
      id: 2,
      name: 'آليات'
    },
    {
      id: 3,
      name: 'توك توك'
    }]
  selectedValue: string = 'جاي تكسي';
  filter: FilterWithSearch = new FilterWithSearch();

  constructor(private addClassification: MatDialog,private confirmDialog:MatDialog) {
    this.getClassifications();
  }

  /*
    selectedValueChanged(event: Event) {
      this.selectedValue = event.toString();
      this.getClassifications(this.activeCityTab, this.selectedValue)
    }*/

  getClassifications(cityName?: string, vehicleType?: string) {
    this.classifications = [
      {
        id: 1,
        classificationName: 'comfort',
        numOfSeat: 5,
        rentDuringMorning: 12,
        rentDuringDay: 10,
        rentDuringNight: 20,
        driverRatio: 10
      },
      {
        id: 2,
        classificationName: 'classic',
        numOfSeat: 5,
        rentDuringMorning: 12,
        rentDuringDay: 10,
        rentDuringNight: 20,
        driverRatio: 10
      },
      {
        id: 3,
        classificationName: 'comfort',
        numOfSeat: 5,
        rentDuringMorning: 12,
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

  addNewClassification() {
    this.addClassification.open(ClassificationDisplayComponent, {
      width: "50%"
    })
  }

  deleteTableItem(id:number){
    const data = this.classifications.filter(item => {
      return item.id !== id
    })
    this.classifications = data
  }

  confirmDelete(id:number){
    let dialog = this.confirmDialog.open(ConfirmComponent,{
      data:{
        message : "هل أنت متأكد من حذف التصنيف ؟"
      }
    })
    dialog.afterClosed().subscribe((res:boolean) =>{
      if(res){
        this.deleteTableItem(id)
      } else {

      }
    });
  }
}
