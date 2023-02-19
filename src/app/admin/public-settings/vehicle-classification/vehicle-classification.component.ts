import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilterWithSearch } from 'src/app/core/models/filters.model';
import { ClassificationDisplayComponent } from '../classification-display/classification-display.component';
import { ConfirmComponent } from '../../confirm/confirm.component';
import { SettingsServicesService } from 'src/app/core/services/settings-services.service';
import { ProvinceService } from 'src/app/core/services/province.service';


@Component({
  selector: 'app-vehicle-classification',
  templateUrl: './vehicle-classification.component.html',
  styleUrls: ['./vehicle-classification.component.scss']
})

export class VehicleClassificationComponent {

  classifications: any[] = [];
  cities: any[] = [];
  activeCityTab = 1;
  vehicleTypes: any[] = [];
  selectedValue: string = 'جاي تكسي';
  filter: FilterWithSearch = new FilterWithSearch();
  endOfResult: boolean = false
  vehicleTypeName: any
  constructor(
    private addClassification: MatDialog,
    private confirmDialog: MatDialog,
    private settingsService: SettingsServicesService,
    private provinceService: ProvinceService
  ) {
    this.getCities();
    this.getVehicleTypes();
    this.getClassifications();
  }
  onChangeType(event: any) {
    console.log(event)
    this.settingsService.selectedType = event;
    this.getClassifications();
  }

  onChangeCity(event: any) {
    console.log(event)
    this.settingsService.selectedProv = event;
    this.getClassifications();
  }
  /*
    selectedValueChanged(event: Event) {
      this.selectedValue = event.toString();
      this.getClassifications(this.activeCityTab, this.selectedValue)
    }*/

  getClassifications(cityName?: string, vehicleType?: string) {
    if (this.settingsService.selectedProv) {
      cityName = this.settingsService.selectedProv;
    }
    if (this.settingsService.selectedType) {
      vehicleType = this.settingsService.selectedType;
    }
    console.log(cityName, vehicleType)
    this.settingsService.getAllClassificationes(this.filter, cityName, vehicleType).subscribe((res: any) => {
      if (this.filter.skipCount == 0) {
        this.classifications = res.items
      }
      else
        this.classifications = this.classifications.concat(res.items)
      if (res.items.length < this.filter.maxResultCount) {
        this.endOfResult = true;
      } else this.endOfResult = false;
    })
  }

  getCities() {
    this.provinceService.getProvinceList().subscribe((res: any) => {
      this.cities = res.items;
      console.log(this.cities)
    });
  }

  getVehicleTypes() {
    this.vehicleTypes = this.settingsService.getVehicleTypes();
  }

  search(inputText: any) {
    //this.classifications = this.settingsService.searchInClassificationTableByName(inputText.value);
  }

  loadMore() {
    this.filter.skipCount = this.filter.skipCount + 1;
    this.getClassifications();
  }

  addNewClassification() {
    this.addClassification.open(ClassificationDisplayComponent, {
      width: "50%"
    })
  }

  deleteTableItem(id: number) {
    //this.classifications = this.settingsService.deleteClassification(id)
  }

  confirmDelete(id: number) {
    let dialog = this.confirmDialog.open(ConfirmComponent, {
      data: {
        message: "هل أنت متأكد من حذف التصنيف ؟"
      }
    })
    dialog.afterClosed().subscribe((res: boolean) => {
      if (res) {
        this.deleteTableItem(id)
      } else {

      }
    });
  }
}
