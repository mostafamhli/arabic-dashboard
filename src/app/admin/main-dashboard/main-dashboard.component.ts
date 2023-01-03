import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DashboardServicesService } from '../services/dashboard-services.service';
@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent {
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  values:any
  constructor(private dashboardServices: DashboardServicesService) {
    let now = new Date();
    let before7Days = new Date(now.getTime() - (7 * 24 * 60 * 60 * 1000));
    this.range.controls.start.setValue(before7Days);
    this.range.controls.end.setValue(now);

    this.values = this.dashboardServices.filter(this.range.value.start , this.range.value.end )
  }

  ngOnInit() {
    console.log(this.values)
  }

}
