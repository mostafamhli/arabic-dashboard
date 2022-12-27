import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-send-notification',
  templateUrl: './send-notification.component.html',
  styleUrls: ['./send-notification.component.scss']
})
export class SendNotificationComponent {
  notification:FormGroup
  filter:any = {
    users:false,
    drivers:false,
    customers:false,
    specificUser:false
  }
  constructor(){
    this.notification = new FormGroup({});
  }
  send(){
    console.log(this.filter)
  }
}
