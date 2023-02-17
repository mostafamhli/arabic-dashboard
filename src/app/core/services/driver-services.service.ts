import { Injectable, QueryList } from '@angular/core';
import { AccountStatus, TransferType } from '../enums/genric.enums';
import { Driver } from '../models/drivers.mode';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilterWithSearch } from '../models/filters.model';

@Injectable({
  providedIn: 'root'
})
export class DriverServicesService {
  TransferTypeEnum = TransferType;
  accountStatusEnum = AccountStatus;
  captainRequestsUrl: string
  baseUrl: string
  captainsListUrl: string
  createDriverUrl: string
  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.baseURL
  }

  getDriversRequest(filter: FilterWithSearch): Observable<any> {
    console.log(filter)
    this.captainRequestsUrl = this.baseUrl + '/api/app/manage-captains/captain-requests'
    let param_ = new HttpParams();
    if (filter.filter) param_ = param_.append('filter', filter.filter);
    param_ = param_.append('MaxResultCount', filter.maxResultCount);
    param_ = param_.append('SkipCount', filter.skipCount);
    //param_ = param_.append('Sorting',filter.sorting);
    param_ = param_.append('Status', filter.status);
    const response = this.httpClient.get(this.captainRequestsUrl, { params: param_ }).pipe();
    return response;
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

  getDriversList(filter: FilterWithSearch): Observable<any> {
    this.captainsListUrl = this.baseUrl + '/api/app/manage-captains/captains'
    let param_ = new HttpParams();
    if (filter.filter) param_ = param_.append('filter', filter.filter);
    param_ = param_.append('MaxResultCount', filter.maxResultCount);
    param_ = param_.append('SkipCount', filter.skipCount);
    //param_ = param_.append('Sorting',filter.sorting);
    param_ = param_.append('Status', filter.status);
    const response = this.httpClient.get(this.captainsListUrl, { params: param_ }).pipe();
    return response;
  }

  changeDriverStatus(driver: Driver) {
    /*let driverIndex = this.getDriversList().findIndex(item => item.id == driver.id);
    if (driverIndex != -1) {
      return this.getDriversList()[driverIndex].accountStatus = driver.accountStatus;
    }*/
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

  addIncentivesToDriver(driverId: number, formValue: any) {
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
        balance: 200.12
      },
      {
        id: 2,
        accountantName: "Omar",
        driverName: "ali",
        accountCreationDate: "12-9-2022",
        tranferType: TransferType.remittance,
        balance: 200.12
      },
      {
        id: 3,
        accountantName: "Wael",
        driverName: "ali",
        accountCreationDate: "12-9-2022",
        tranferType: TransferType.remittance,
        balance: 200.12
      },
      {
        id: 4,
        accountantName: "Wael",
        driverName: "ali",
        accountCreationDate: "12-9-2022",
        tranferType: TransferType.recovery,
        balance: 200.12
      },
      {
        id: 5,
        accountantName: "Mostafa",
        driverName: "ali",
        accountCreationDate: "12-9-2022",
        tranferType: TransferType.recovery,
        balance: 200.12
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


  createDriver(driver: any) {
    let headers = new HttpHeaders();
    //this is the important step. You need to set content type as null
    headers.set('Content-Type', 'null');
    headers.set('Accept', "multipart/form-data");

    let request = new FormData();
    request.append('firstName', driver.firstName)
    request.append('lastName', driver.lastName)
    request.append('phoneNumber', driver.phoneNumber)
    request.append('gender', driver.gender)
    request.append('provinceId',driver.provinceId)
    /*request.append('profileImage',driver.profileImage)*/
    request.append('licenseFrontImage', driver.licenseFrontImage)
    request.append('licenseBackImage', driver.licenseBackImage)
    /* request.append('idBackImage',driver.idBackImage)
     request.append('idFrontImage',driver.idFrontImage)
     request.append('residenceocumentFrontImage',driver.residenceocumentFrontImage)
     request.append('residenceocumentBackImage',driver.residenceocumentBackImage)
     request.append('securityCardImage',driver.securityCardImage)*/

    request.append('vehicle.Color', driver.vehicleColor)
    request.append('vehicle.PlateNumber', driver.vehiclePlateNumber)
    request.append('vehicle.Model', driver.vehicleModel)
    request.append('vehicle.ModelYear', driver.vehicleModelYear)
    request.append('vehicle.SeatCount', driver.vehicleSeatCount)
    /*request.append('vehicle.VehicleTypeId',driver.vehicleVehicleTypeId)
    request.append('vehicle.Image',driver.vehicleImage)
    request.append('vehicle.CarLicenseFrontImage',driver.vehicleCarLicenseFrontImage)
    request.append('vehicle.CarLicenseBackImage',driver.vehicleCarLicenseBackImage)
    request.append('vehicle.CarPlateImage',driver.vehicleCarPlateImage)*/
    this.createDriverUrl = this.baseUrl + '/api/app/manage-captains/captain'
    const response = this.httpClient.post(this.createDriverUrl, request, { headers }).pipe();
    return response;
  }
}
