import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  constructor(){
    let now = new Date();
    let before7Days = new Date(now.getTime() - (7 * 24 * 60 * 60 * 1000));

    this.range.controls.start.setValue(before7Days);
    this.range.controls.end.setValue(now);
  }
}
