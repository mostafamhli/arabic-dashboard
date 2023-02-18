import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FilterTurnOver } from 'src/app/core/models/filters.model';
import { DashboardServicesService } from 'src/app/core/services/dashboard-services.service';
import { TurnOver } from 'src/app/core/models/turnover.model';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {
  values: TurnOver;
  total: TurnOver;
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  constructor(private dashService: DashboardServicesService) {
    let now: any = new Date();
    let before7Days: any = new Date(now.getTime() - (7 * 24 * 60 * 60 * 1000));

    this.range.controls.start.setValue(before7Days);
    this.range.controls.end.setValue(now);
    this.filter(this.range.value.start, this.range.value.end)
    this.filter();
  }

  filter(start?: any, end?: any) {
    if (start && end) {
      let filter: FilterTurnOver = {
        fromDate: this.range.value.start,
        toDate: this.range.value.end
      }
      this.dashService.turnOver(filter).subscribe((res: any) => {
        this.values = res
      }, (err: any) => { })
    } else {
      let filter: FilterTurnOver = {
        fromDate: null,
        toDate: null
      }
      this.dashService.turnOver(filter).subscribe((res: any) => {
        this.total = res
      }, (err: any) => { })
    }
  }
}
