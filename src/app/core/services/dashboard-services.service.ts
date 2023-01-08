import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardServicesService {

  constructor(private http: HttpClient) { }

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
