import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

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
}
