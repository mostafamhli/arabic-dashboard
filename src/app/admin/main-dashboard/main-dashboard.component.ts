import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DashboardServicesService } from '../../core/services/dashboard-services.service';

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

  values: any
  total: any
  constructor(private dashboardServices: DashboardServicesService) {
    let now = new Date();
    let before7Days = new Date(now.getTime() - (7 * 24 * 60 * 60 * 1000));
    this.range.controls.start.setValue(before7Days);
    this.range.controls.end.setValue(now);
    this.filter()
    this.filter(this.range.value.start, this.range.value.end)
  }

  ngOnInit() {
  }

  filter(start?: any, end?: any) {
    if (start && end)
      this.values = this.dashboardServices.filter(this.range.value.start, this.range.value.end)

    this.total = this.dashboardServices.filter()
  }

  dateRangeChange() {
    if (this.range.value.start && this.range.value.end)
      this.dashboardServices.filter(this.range.value.start, this.range.value.end)
  }

}
