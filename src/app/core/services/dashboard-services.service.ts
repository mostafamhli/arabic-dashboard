import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FilterTurnOver } from '../models/filters.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardServicesService {

  baseUrl:string
  dashboardUrl:string

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseURL
    this.dashboardUrl = this.baseUrl + '/api/app/customer/customers'
  }

  filter(begin?: any, end?: any) {
    if (begin && end)
      return {
        totalProfit: 100,
        netProfitCompany: 50,
        netProfitDriver: 20
      }
    return {
      totalProfit: 200,
      netProfitCompany: 150,
      netProfitDriver: 60
    }
  }

  turnOver(filter:FilterTurnOver){
    let turnOverUrl = this.baseUrl + '/api/app/trip/turnover-report'
    let param_ = new HttpParams();
    if (filter.captainId) param_ = param_.append('CaptainId', filter.captainId);
    if (filter.fromDate) param_ = param_.append('FromDate', filter.fromDate.toLocaleString())
    if (filter.toDate) param_ = param_.append('ToDate', filter.toDate.toLocaleString());
    
    const response = this.http.get(turnOverUrl,{params:param_}).pipe();
    return response;
  }
}
