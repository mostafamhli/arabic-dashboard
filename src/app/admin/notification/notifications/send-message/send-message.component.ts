import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent {

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  search = new FormControl('', [Validators.required]);
  type = new FormControl('', [Validators.required]);
  getErrorRequiredMessage() {
    return 'يجب أن تدخل قيمة';
  }

  value = 0;
  
  send() {
    console.log()
  }
}
