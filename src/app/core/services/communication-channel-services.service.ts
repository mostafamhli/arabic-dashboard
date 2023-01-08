import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationChannelServicesService {

  constructor() { }

  getAllNotifications(){
    return [
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
        userName : "mostafa"
      }
    ]
  }

  findNotification(text:string){
    return this.getAllNotifications().filter(item => {
      return item.userName.includes(text);
    })
  }

  sendPublicMessage(formValue:any){
    return formValue
  }

  sendCustomMessage(formValue:any){
    return formValue
  }
}
