import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { DiscountCodeStatus } from '../enums/genric.enums';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { FilterVehiclesWithSearch, FilterWithSearch, FilterOrders } from '../models/filters.model';
@Injectable({
  providedIn: 'root'
})
export class TripsServicesService {


  discountCodeStatusEnum = DiscountCodeStatus
  baseUrl: string
  addCancelReasonUrl: string
  inAcrivateCancelReasonUrl: string
  getCancelReasonesUrl: string

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.baseURL
    this.addCancelReasonUrl = this.baseUrl + '/api/app/cancellation-reason'
    this.getCancelReasonesUrl = this.baseUrl + '/api/app/cancellation-reason/for-dashboard'
  }

  getAllTrips(filter: FilterOrders) {
    let getTripsUrl = this.baseUrl + '/api/app/order'
    let param_ = new HttpParams();
    param_ = param_.append('MaxResultCount', filter.maxResultCount);
    param_ = param_.append('SkipCount', filter.skipCount);
    if (filter.captainId) param_ = param_.append('CaptainId', filter.captainId);
    if (filter.clientId) param_ = param_.append('CustomerId', filter.clientId);
    if (filter.isOpen) param_ = param_.append('IsOpen', filter.isOpen);
    if (filter.orderStatus) param_ = param_.append('OrderStatus', filter.orderStatus);
    if (filter.fromDate) param_ = param_.append('FromDate', filter.fromDate.toLocaleString())
    if (filter.toDate) param_ = param_.append('ToDate', filter.toDate.toLocaleString());
    const response = this.httpClient.get(getTripsUrl, { params: param_ }).pipe();
    return response
  }

  getTripDetails(id: any) {
    let getTripsUrl = this.baseUrl + `/api/app/order/${id}/for-dashboard`
    console.log(getTripsUrl)
    const response = this.httpClient.get(getTripsUrl).pipe();
    return response
  }
  findTrip(formValue: any) {
    return formValue
  }

  getAllDiscountCodes(filter: FilterWithSearch) {
    let getVehiclesUrl = this.baseUrl + '/api/app/coupon'
    let param_ = new HttpParams();
    param_ = param_.append('MaxResultCount', filter.maxResultCount);
    param_ = param_.append('SkipCount', filter.skipCount);
    const response = this.httpClient.get(getVehiclesUrl, { params: param_ }).pipe();
    return response;
  }

  addDiscountCode(modal: any) {
    let getVehiclesUrl = this.baseUrl + '/api/app/coupon';
    const response = this.httpClient.post(getVehiclesUrl, modal).pipe();
    return response;
  }

  deleteDiscountCode(id: number) {
    let getVehiclesUrl = this.baseUrl + `/api/app/coupon/${id}`;
    const response = this.httpClient.delete(getVehiclesUrl).pipe();
    return response;
  }

  editDiscountCode(modal: any,id:any) {
    let getVehiclesUrl = this.baseUrl + `/api/app/coupon/${id}`;
    const response = this.httpClient.put(getVehiclesUrl,modal).pipe();
    return response;
  }

  deleteOpentripType(id: number) {
    return
  }

  addOpenTripType(name: any) {
    return name
  }

  getAllOpenTripTypes() {
    return this.httpClient.get(this.baseUrl + '/api/app/vehicle-type/packages')
  }

  getAllCancleReason(): Observable<any> {
    const response = this.httpClient.get(this.getCancelReasonesUrl).pipe();
    return response;
  }

  addCancleReason(reason: any) {
    const response = this.httpClient.post(this.addCancelReasonUrl, reason).pipe();
    return response;
  }

  editCancleReason(reason: any) {
    const response = this.httpClient.put(this.addCancelReasonUrl, reason).pipe();
    return response;
  }

  inActivateCancel(id:any){
    this.inAcrivateCancelReasonUrl = this.baseUrl + `/api/app/cancellation-reason/${id}/deactivate`
    const response = this.httpClient.post(this.inAcrivateCancelReasonUrl,{}).pipe();
    return response;
  }
}
