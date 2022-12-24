import { Component } from '@angular/core';
import { SendNotificationComponent } from '../send-notification/send-notification.component';
import { FilterWithSearch } from 'src/app/core/models/filters.model';
import { MatDialog } from '@angular/material/dialog';
import { Notification } from 'src/app/core/models/notification.nodel';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
  notifications: Notification[] = []
  filter: FilterWithSearch = new FilterWithSearch()

  constructor(private sendNotification:MatDialog) {
    this.getNotifications()
  }

  getNotifications() {
    this.notifications = [
      {
        id:1,
        dateOfSend:new Date(),
        messageContent : "Temp Content",
        messageTitle : "Temp Title",
        userName : "wael"
      },
      {
        id:2,
        dateOfSend:new Date(),
        messageContent : "Temp Content",
        messageTitle : "Temp Title",
        userName : "wael"
      },
      {
        id:3,
        dateOfSend:new Date(),
        messageContent : "Temp Content",
        messageTitle : "Temp Title",
        userName : "wael"
      },
      {
        id:4,
        dateOfSend:new Date(),
        messageContent : "Temp Content",
        messageTitle : "Temp Title",
        userName : "wael"
      },
      {
        id:5,
        dateOfSend:new Date(),
        messageContent : "Temp Content",
        messageTitle : "Temp Title",
        userName : "wael"
      }
    ]
  }
  loadMore() {
    this.filter.pageIndex = this.filter.pageIndex + 1;
    this.getNotifications()
  }
  sendNotifications(){
    this.sendNotification.open(SendNotificationComponent,{
      width:"50%"
    })
  }
}
