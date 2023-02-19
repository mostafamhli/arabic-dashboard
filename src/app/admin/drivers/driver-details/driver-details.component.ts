import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DriverServicesService } from 'src/app/core/services/driver-services.service';
import { DashboardServicesService } from 'src/app/core/services/dashboard-services.service';
import { FilterTurnOver } from 'src/app/core/models/filters.model';
import { TurnOver } from 'src/app/core/models/turnover.model';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.scss']
})
export class DriverDetailsComponent {
  quantity: any;
  values: TurnOver;
  total: TurnOver;
  id: string;
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  constructor(private dashService: DashboardServicesService, private activatedRoute: ActivatedRoute) {
    this.quantity = undefined
    this.id = this.activatedRoute.snapshot.params['id'];
    let now:any = new Date();
    let before7Days:any = new Date(now.getTime() - (7 * 24 * 60 * 60 * 1000));

    this.range.controls.start.setValue(before7Days);
    this.range.controls.end.setValue(now);
    this.filter(this.range.value.start, this.range.value.end)
    this.filter();
  }

  filter(start?: any, end?: any) {
    if (start && end) {
      let filter: FilterTurnOver = {
        captainId: this.id,
        fromDate: this.range.value.start,
        toDate: this.range.value.end
      }
      this.dashService.turnOver(filter).subscribe((res: any) => {
        this.values = res
      }, (err: any) => { })
    } else {
      let filter: FilterTurnOver = {
        captainId: this.id,
        fromDate: null,
        toDate: null
      }
      this.dashService.turnOver(filter).subscribe((res: any) => {
        this.total = res
      }, (err: any) => { })
    }
  }
}
