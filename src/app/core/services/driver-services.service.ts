import { Injectable, QueryList } from '@angular/core';
import { AccountStatus, TransferType, PageType } from '../enums/genric.enums';
import { Driver } from '../models/drivers.mode';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilterWithSearch, FilterVehiclesWithSearch } from '../models/filters.model';

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
    let getDriverDetailsUrl = this.baseUrl + `/api/app/manage-captains/${id}`
    const response = this.httpClient.get(getDriverDetailsUrl).pipe();
    return response;
  }

  acceptDriver(body: any) {
    let acceptDriverUrl = this.baseUrl + '/api/app/manage-captains/process-captain-request'
    const response = this.httpClient.post(acceptDriverUrl, body).pipe();
    return response;
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

  getVehicles(filter: FilterVehiclesWithSearch) {
    let getVehiclesUrl = this.baseUrl + '/api/app/manage-vehicle-types'
    let param_ = new HttpParams();
    if (filter.filter) param_ = param_.append('filter', filter.filter);
    param_ = param_.append('MaxResultCount', filter.maxResultCount);
    param_ = param_.append('SkipCount', filter.skipCount);
    param_ = param_.append('ProvinceId', filter.provinceId);
    param_ = param_.append('Category', filter.category);
    //param_ = param_.append('Sorting',filter.sorting);
    //param_ = param_.append('Status', filter.status);
    const response = this.httpClient.get(getVehiclesUrl, { params: param_ }).pipe();
    return response;
  }

  getDriversList(filter: FilterWithSearch): Observable<any> {
    this.captainsListUrl = this.baseUrl + '/api/app/manage-captains/captains'
    let param_ = new HttpParams();
    if (filter.filter) param_ = param_.append('filter', filter.filter);
    param_ = param_.append('MaxResultCount', filter.maxResultCount);
    param_ = param_.append('SkipCount', filter.skipCount);
    //param_ = param_.append('Sorting',filter.sorting);
    //param_ = param_.append('IsActive', filter.status == 1 ? true : false);
    const response = this.httpClient.get(this.captainsListUrl, { params: param_ }).pipe();
    return response;
  }

  changeDriverStatus(accountId: string) {
    let changeCaptainStatusUrl = this.baseUrl + `/api/app/manage-captains/${accountId}/switch-active`
    const response = this.httpClient.post(changeCaptainStatusUrl, {}).pipe();
    return response;
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
    request.append('provinceId', driver.provinceId)
    request.append('profileImage', driver.profileImageUrl)
    request.append('licenseFrontImage', driver.licenseFrontImage)
    request.append('licenseBackImage', driver.licenseBackImage)
    request.append('idBackImage', driver.idBackImage)
    request.append('idFrontImage', driver.idFrontImage)
    request.append('residenceCardFrontImage', driver.residenceocumentFrontImage)
    request.append('residenceCardBackImage', driver.residenceocumentBackImage)
    request.append('securityCardImage', driver.securityCardImage)
    request.append('deleteProfileImage', driver.deleteProfileImage)
    request.append('deleteIdFrontImage', driver.deleteIdFrontImage)
    request.append('deleteIdBackImage', driver.deleteIdBackImage)
    request.append('deleteResidenceCardFrontImage', driver.deleteResidenceCardFrontImage)
    request.append('deleteResidenceCardBackImage', driver.deleteResidenceCardBackImage)
    request.append('deleteSecurityCardImage', driver.deleteSecurityCardImage)
    

    request.append('vehicle.Color', driver.vehicleColor)
    request.append('vehicle.PlateNumber', driver.vehiclePlateNumber)
    request.append('vehicle.Model', driver.vehicleModel)
    request.append('vehicle.ModelYear', driver.vehicleModelYear)
    request.append('vehicle.SeatCount', driver.vehicleSeatCount)
    request.append('vehicle.VehicleTypeId', driver.vehicleVehicleTypeId)
    request.append('vehicle.Image', driver.vehicleImage)
    request.append('vehicle.CarLicenseFrontImage', driver.vehicleCarLicenseFrontImage)
    request.append('vehicle.CarLicenseBackImage', driver.vehicleCarLicenseBackImage)
    request.append('vehicle.PlateImage', driver.vehicleCarPlateImage)
    request.append('deleteVehicleImage', driver.deleteVehicleImage)
    request.append('deleteCarLicenseFrontImage', driver.deleteCarLicenseFrontImage)
    request.append('deleteCarLicenseBackImage', driver.deleteCarLicenseBackImage)
    let pageType = driver.id
    console.log(pageType)
    let response;
    if (pageType) {
      request.append('id', driver.id)
      let editDriverUrl = this.baseUrl + '/api/app/manage-captains/captain'
      response = this.httpClient.put(editDriverUrl, request, { headers }).pipe();
    }
    else {
      let createDriverUrl = this.baseUrl + '/api/app/manage-captains/captain'
      response = this.httpClient.post(createDriverUrl, request, { headers }).pipe();
    }
    return response;
  }

  getLiteListOfCaptains(modal?:any){
    let _param = new HttpParams()
    if (modal?.Keyword) _param = _param.append('Keyword', modal?.Keyword)
    if (modal?.MinCreationDate) _param = _param.append('MinCreationDate', modal?.MinCreationDate)
    if (modal?.MaxCreationDate) _param = _param.append('MaxCreationDate', modal?.MaxCreationDate)
    let getLiteListOfCaptainsUrl = this.baseUrl + '/api/app/manage-captains/active-lite-list'
    const response = this.httpClient.get(getLiteListOfCaptainsUrl, {params:_param}).pipe();
    return response;
  }
}
