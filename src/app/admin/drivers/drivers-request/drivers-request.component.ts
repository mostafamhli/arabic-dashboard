import { Component } from '@angular/core';
import { DriverRequest } from 'src/app/core/models/drivers.mode';
import { FilterWithSearch } from 'src/app/core/models/filters.model';
import { DriverServicesService } from 'src/app/core/services/driver-services.service';

@Component({
  selector: 'app-drivers-request',
  templateUrl: './drivers-request.component.html',
  styleUrls: ['./drivers-request.component.scss']
})
export class DriversRequestComponent {
  drivers: DriverRequest[] = [];
  filter: FilterWithSearch = new FilterWithSearch();

  constructor(private driverService:DriverServicesService) {
    this.getDrivers();
  }

  getDrivers() {
    this.driverService.getDriversRequest().subscribe((res:any)=>{this.drivers = res},(err:any)=>{}); 
  }

  searchInDriverRequestTable(searchWord:string){
    //this.drivers = this.driverService.searchInDriverRequestTable(searchWord);
  }

  loadMore(){
    this.filter.pageIndex = this.filter.pageIndex + 1;
    this.getDrivers()
  }
}
