import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-cancle-reasons',
  templateUrl: './cancle-reasons.component.html',
  styleUrls: ['./cancle-reasons.component.css']
})
export class CancleReasonsComponent {

  keywords = ['تأخر السائق', 'الخدمة سيئة'];
  formControl = new FormControl(['تأخر السائق']);

  removeKeyword(keyword: string) {
    const index = this.keywords.indexOf(keyword);
    if (index >= 0) {
      this.keywords.splice(index, 1);
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our keyword
    if (value) {
      this.keywords.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }
}
