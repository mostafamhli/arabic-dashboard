import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilterWithSearch } from 'src/app/core/models/filters.model';
import { ClassificationDisplayComponent } from '../classification-display/classification-display.component';
import { ConfirmComponent } from '../../confirm/confirm.component';
import { SettingsServicesService } from 'src/app/core/services/settings-services.service';


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

  constructor(private addClassification: MatDialog, private confirmDialog: MatDialog, private settingsService: SettingsServicesService) {
    this.getCities();
    this.getVehicleTypes();
    this.getClassifications();
  }

  /*
    selectedValueChanged(event: Event) {
      this.selectedValue = event.toString();
      this.getClassifications(this.activeCityTab, this.selectedValue)
    }*/

  getClassifications(cityName?: string, vehicleType?: string) {
    this.classifications = this.settingsService.getAllClassificationes();
  }

  getCities() {
    this.cities = this.settingsService.getAllCities();
  }

  getVehicleTypes() {
    this.vehicleTypes = this.settingsService.getVehicleTypes();
  }

  search(inputText: any) {
    this.classifications = this.settingsService.searchInClassificationTableByName(inputText.value);
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
    this.classifications = this.settingsService.deleteClassification(id)
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
