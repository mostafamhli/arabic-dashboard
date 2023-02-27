import { Component } from '@angular/core';
import { SendNotificationComponent } from '../send-notification/send-notification.component';
import { FilterWithSearch } from 'src/app/core/models/filters.model';
import { MatDialog } from '@angular/material/dialog';
import { Notification } from 'src/app/core/models/notification.nodel';
import { CommunicationChannelServicesService } from 'src/app/core/services/communication-channel-services.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
  notifications: Notification[] = []
  filter: FilterWithSearch = new FilterWithSearch()

  constructor(private sendNotification: MatDialog, private communicationService: CommunicationChannelServicesService) {
    this.getNotifications()
  }

  getNotifications() {
    this.notifications = this.communicationService.getAllNotifications();
  }

  loadMore() {
    this.filter.skipCount = this.filter.skipCount + this.filter.maxResultCount;
    this.getNotifications()
  }

  sendNotifications() {
    this.sendNotification.open(SendNotificationComponent, {
      width: "50%"
    })
  }

  search(inputText:string){
    this.notifications= this.communicationService.findNotification(inputText);
  }
}
