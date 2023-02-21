import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommunicationChannelServicesService {

  baseURL = environment.baseURL
  constructor(private http: HttpClient) { }

  getAllNotifications() {
    return [
      {
        id: 1,
        dateOfSend: new Date(),
        messageContent: "Temp Content",
        messageTitle: "Temp Title",
        userName: "wael"
      },
      {
        id: 2,
        dateOfSend: new Date(),
        messageContent: "Temp Content",
        messageTitle: "Temp Title",
        userName: "wael"
      },
      {
        id: 3,
        dateOfSend: new Date(),
        messageContent: "Temp Content",
        messageTitle: "Temp Title",
        userName: "wael"
      },
      {
        id: 4,
        dateOfSend: new Date(),
        messageContent: "Temp Content",
        messageTitle: "Temp Title",
        userName: "wael"
      },
      {
        id: 5,
        dateOfSend: new Date(),
        messageContent: "Temp Content",
        messageTitle: "Temp Title",
        userName: "mostafa"
      }
    ]
  }

  findNotification(text: string) {
    return this.getAllNotifications().filter(item => {
      return item.userName.includes(text);
    })
  }

  sendPublicMessage(formValue: any) {
    return this.http.post(this.baseURL + '/api/app/notification/send-public-message', formValue)
  }

  sendCustomMessage(formValue: any) {
    return formValue
  }
}
