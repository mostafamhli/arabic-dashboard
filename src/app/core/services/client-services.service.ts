import { Injectable } from '@angular/core';
import { AccountStatus } from 'src/app/core/enums/genric.enums';

@Injectable({
  providedIn: 'root'
})
export class ClientServicesService {

  accountStatusEnum = AccountStatus;

  constructor() { }

  getAllClients(){
    return  [
      {
        id: 1,
        userName: 'Mostafa Mhli',
        mobile: 95365522,
        creationDate: '12-9-2022',
        NumOfTrips: 62,
        eval: 3.8,
        activatedCode: 123456,
        accountStatus: AccountStatus.active
      },

      {
        id: 2,
        userName: 'Mostafa Mhli',
        mobile: 95365522,
        creationDate: '12-9-2022',
        NumOfTrips: 62,
        eval: 3.8,
        activatedCode: 123456,
        accountStatus: AccountStatus.inActive
      },


      {
        id: 3,
        userName: 'Mostafa Mhli',
        mobile: 95365522,
        creationDate: '12-9-2022',
        NumOfTrips: 62,
        eval: 3.8,
        activatedCode: 123456,
        accountStatus: AccountStatus.active
      },


      {
        id: 4,
        userName: 'Mostafa Mhli',
        mobile: 95365522,
        creationDate: '12-9-2022',
        NumOfTrips: 62,
        eval: 3.8,
        activatedCode: 123456,
        accountStatus: AccountStatus.active
      },


      {
        id: 5,
        userName: 'Mostafa Mhli',
        mobile: 95365522,
        creationDate: '12-9-2022',
        NumOfTrips: 62,
        eval: 3.8,
        activatedCode: 123456,
        accountStatus: AccountStatus.active
      },

      {
        id: 6,
        userName: 'ali Mhli',
        mobile: 95365522,
        creationDate: '12-9-2022',
        NumOfTrips: 62,
        eval: 3.8,
        activatedCode: 123456,
        accountStatus: AccountStatus.inActive
      },


      {
        id: 7,
        userName: 'Mostafa Mhli',
        mobile: 95365522,
        creationDate: '12-9-2022',
        NumOfTrips: 62,
        eval: 3.8,
        activatedCode: 123456,
        accountStatus: AccountStatus.inActive
      },
    ]
  }

  findClientByName(name : string){
    return this.getAllClients().filter(ele => {
      return ele.userName.includes(name);
    })
  }
}
