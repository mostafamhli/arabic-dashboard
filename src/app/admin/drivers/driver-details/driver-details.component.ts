import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DriverServicesService } from 'src/app/core/services/driver-services.service';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.scss']
})
export class DriverDetailsComponent {
  quantity: any;
  values: any;
  total: any;
  id!: number;
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  constructor(private driverService: DriverServicesService, private activatedRoute: ActivatedRoute) {
    this.quantity = undefined
    this.id = this.activatedRoute.snapshot.params['id'];
    let now = new Date();
    let before7Days = new Date(now.getTime() - (7 * 24 * 60 * 60 * 1000));

    this.range.controls.start.setValue(before7Days);
    this.range.controls.end.setValue(now);
    this.filter(this.range.value.start, this.range.value.end)
    this.filter();
  }

  filter(start?: any, end?: any) {
    if (start && end)
      this.values = this.driverService.getDriverDetails(1, this.range.value.start, this.range.value.end);
    this.total = this.driverService.getDriverDetails(1);
  }

  addIncentivesToDriver() {
    console.log(this.driverService.addIncentivesToDriver(this.id, this.quantity));
  }
}
