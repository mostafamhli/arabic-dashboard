import { Injectable } from '@angular/core';
import { AccountStatus, TransferType } from '../enums/genric.enums';
import { Driver } from '../models/drivers.mode';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DriverServicesService {
  TransferTypeEnum = TransferType;
  accountStatusEnum = AccountStatus;
  captainRequestsUrl:string
  baseUrl:string
  constructor(private httpClient:HttpClient) {
    this.baseUrl = environment.baseURL
    this.captainRequestsUrl = this.baseUrl + '/api/app/manage-captains/captain-requests'
  }

  getDriversRequest() {
    const response = this.httpClient.get(this.captainRequestsUrl).pipe();
    return response;
/*    return [
      {
        id: 1,
        name: "Wael",
        mobile: "963949394418",
        status : "init",
        accountCreationDate: "12-9-2022"
      },
      {
        id: 2,
        name: "Wael",
        mobile: "963949394418",
        status : "init",
        accountCreationDate: "12-9-2022"
      },
      {
        id: 3,
        name: "Wael",
        mobile: "963949394418",
        status : "init",
        accountCreationDate: "12-9-2022"
      },
      {
        id: 4,
        name: "Wael",
        mobile: "963949394418",
        status : "init",
        accountCreationDate: "12-9-2022"
      },
      {
        id: 5,
        name: "Wael",
        mobile: "963949394418",
        status : "init",
        accountCreationDate: "12-9-2022"
      },
      {
        id: 6,
        name: "Mostafa",
        mobile: "963949394418",
        status : "init",
        accountCreationDate: "12-9-2022"
      },
    ]
    */
  }

  searchInDriverRequestTable(searchWord: string) {
    /*return this.getDriversRequest().filter(item => {
      return item.name.includes(searchWord);
    })*/
  }

  getDriverRequestDetails(id: number) {
    console.log(id)
    return {
      email: 'mostafa@gmail.com',
      phone: '+963949394417',
      date: '12-8-2022',
      city: 'بغداد',
      carType: 'مركبة صغيرة',
      carModel: 'مازدا',
      carColor: 'أحمر',
      carNumber: 123456
    }
  }

  getDriverRequestAssets(id: number) {
    return [
      {
        image: "/assets/img/temp/id1.png",
        labelText: "صورة رخصة القيادة (الوجه الأمامي)"
      },
      {
        image: "/assets/img/temp/id1.png",
        labelText: "رخصة السيارة (الوجه الأمامي)"
      },
      {
        image: "/assets/img/temp/id1.png",
        labelText: "صورة رخصة القيادة (الوجه الخلفي)"
      },
      {
        image: "/assets/img/temp/id1.png",
        labelText: "رخصة السيارة (الوجه الخلفي)"
      },
    ]
  }

  getAllVehicles() {
    return [
      {
        id: 1,
        name: "سيارة",
        path: "/assets/img/vehicles/car.png",
      },
      {
        id: 2,
        name: "ونش",
        path: "/assets/img/vehicles/wnch.png",
      },
      {
        id: 3,
        name: "سيارة VIP",
        path: "/assets/img/vehicles/vip.png",
      },
      {
        id: 4,
        name: "توك توك",
        path: "/assets/img/vehicles/toktok.png",
      }
    ]
  }

  getVehiclesTypes() {
    return [
      {
        id: 1,
        name: "توك توك",
        path: "/assets/img/vehicles/toktok.png",
      },
      {
        id: 2,
        name: "جاي تكسي",
        path: "/assets/img/logo.png",
      },
      {
        id: 3,
        name: "آليات",
        path: "/assets/img/vehicles/fleet.png",
      }
    ]
  }

  getToktoksType() {
    return [
      {
        id: 1,
        name: "توك توك",
        path: "/assets/img/vehicles/toktok.png",
      },
      {
        id: 2,
        name: "توك توك",
        path: "/assets/img/vehicles/toktok.png",
      }
    ]
  }

  getCars() {
    return [
      {
        id: 1,
        name: "سيارة",
        path: "/assets/img/vehicles/car.png",
      },
      {
        id: 2,
        name: "ونش",
        path: "/assets/img/vehicles/wnch.png",
      },
      {
        id: 3,
        name: "سيارة VIP",
        path: "/assets/img/vehicles/vip.png",
      }
    ]
  }

  getDriversList() {
    return [
      {
        id: 1,
        name: "Wael",
        mobile: "0949394417",
        accountCreationDate: "12-9-2022",
        accountStatus: AccountStatus.inActive,
        code: 1,
        stock: 200.12
      },
      {
        id: 2,
        name: "Wael",
        mobile: "0949394417",
        accountCreationDate: "12-9-2022",
        accountStatus: AccountStatus.inActive,
        code: 1,
        stock: 200.12
      },
      {
        id: 3,
        name: "Wael",
        mobile: "0949394417",
        accountCreationDate: "12-9-2022",
        accountStatus: AccountStatus.active,
        code: 1,
        stock: 200.12
      },
      {
        id: 4,
        name: "Wael",
        mobile: "0949394417",
        accountCreationDate: "12-9-2022",
        accountStatus: AccountStatus.inActive,
        code: 1,
        stock: 200.12
      },
      {
        id: 5,
        name: "Wael",
        mobile: "0949394417",
        accountCreationDate: "12-9-2022",
        accountStatus: AccountStatus.inActive,
        code: 1,
        stock: 200.12
      },
      {
        id: 6,
        name: "Mostafa",
        mobile: "0949394417",
        accountCreationDate: "12-9-2022",
        accountStatus: AccountStatus.active,
        code: 1,
        stock: 200.12
      },
    ]
  }

  searchInDriverList(searchWord: string) {
    return this.getDriversList().filter(item => {
      return item.name.includes(searchWord);
    })
  }

  changeDriverStatus(driver: Driver) {
    let driverIndex = this.getDriversList().findIndex(item => item.id == driver.id);
    if (driverIndex != -1) {
      return this.getDriversList()[driverIndex].accountStatus = driver.accountStatus;
    }
    return null;
  }

  getDriverDetails(id: number, begin?: any, end?: any) {
    if (begin && end)
      return {
        numOfTrips: 5,
        totalProfit: 100,
        netProfitCompany: 50,
        netProfitDriver: 20
      }
    return {
      numOfTrips: 15,
      totalProfit: 200,
      netProfitCompany: 150,
      netProfitDriver: 60
    }
  }

  addIncentivesToDriver(driverId: number, formValue:any) {
    return formValue;
  }
  getAllTransfers() {
    return [
      {
        id: 1,
        accountantName: "Wael",
        driverName: "ali",
        accountCreationDate: "12-9-2022",
        tranferType: TransferType.remittance,
        stock: 200.12
      },
      {
        id: 2,
        accountantName: "Omar",
        driverName: "ali",
        accountCreationDate: "12-9-2022",
        tranferType: TransferType.remittance,
        stock: 200.12
      },
      {
        id: 3,
        accountantName: "Wael",
        driverName: "ali",
        accountCreationDate: "12-9-2022",
        tranferType: TransferType.remittance,
        stock: 200.12
      },
      {
        id: 4,
        accountantName: "Wael",
        driverName: "ali",
        accountCreationDate: "12-9-2022",
        tranferType: TransferType.recovery,
        stock: 200.12
      },
      {
        id: 5,
        accountantName: "Mostafa",
        driverName: "ali",
        accountCreationDate: "12-9-2022",
        tranferType: TransferType.recovery,
        stock: 200.12
      }
    ]
  }

  searchInTransferTable(searchWord: string) {
    return this.getAllTransfers().filter(item => {
      return item.accountantName.includes(searchWord);
    })
  }

  addTransfer(formValue: any) {
    return formValue;
  }


}
