import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilterWithSearch, FilterClassification } from 'src/app/core/models/filters.model';
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
  vehicleTypes: any[] = [];
  endOfResult: boolean = false
  vehicleTypeName: any
  filter: FilterClassification = new FilterClassification();

  constructor(
    private addClassification: MatDialog,
    private confirmDialog: MatDialog,
    private settingsService: SettingsServicesService,
    private provinceService: ProvinceService
  ) {
    this.getCities();
    this.getVehicleTypes();
    this.getClassifications(this.filter.skipCount);
  }

  getClassifications(pageIndex:number) {
    this.filter.skipCount = pageIndex
    this.settingsService.getAllClassificationes(this.filter).subscribe((res: any) => {
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
      if(this.cities && this.cities.length) this.filter.cityId = this.cities[0].id
    });
  }

  getVehicleTypes() {
    this.vehicleTypes = this.settingsService.getVehicleTypes();
  }

  loadMore() {
    this.filter.skipCount = this.filter.skipCount + 1;
    this.getClassifications(this.filter.skipCount);
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
