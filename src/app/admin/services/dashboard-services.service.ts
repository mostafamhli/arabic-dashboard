import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DashboardServicesService {

  constructor(private http: HttpClient) { }

  filter(begin?: any, end?: any) {
    console.log(moment(begin).format('DD MM YYYY'))
    //this.http.get('')
    if (begin && end)
      return {
        betweenTwoDates: {
          totalProfit: 100,
          netProfitCompany: 50,
          netProfitDriver: 20
        },
        total: {
          totalProfit: 200,
          netProfitCompany: 150,
          netProfitDriver: 60
        }

      }
    return {
      total: {
        totalProfit: 200,
        netProfitCompany: 150,
        netProfitDriver: 60
      }
    }
  }
}
