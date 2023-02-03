import { Injectable } from '@angular/core';
import { AccountStatus } from 'src/app/core/enums/genric.enums';
import { FilterWithSearch } from '../models/filters.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientServicesService {

  accountStatusEnum = AccountStatus;
  baseUrl: string;
  clientsListUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.baseURL
  }

  getAllClients(filter: FilterWithSearch): Observable<any> {
    this.clientsListUrl = this.baseUrl + '/api/app/customer/customers'
    let param_ = new HttpParams();
    if (filter.filter) param_ = param_.append('filter', filter.filter);
    param_ = param_.append('MaxResultCount', filter.maxResultCount);
    param_ = param_.append('SkipCount', filter.skipCount);
    //param_ = param_.append('Sorting',filter.sorting);
    param_ = param_.append('Status', filter.status);
    const response = this.httpClient.get(this.clientsListUrl, { params: param_ }).pipe();
    return response;
  }

  findClientByName(name: string) {
    /*return this.getAllClients().filter(ele => {
      return ele.userName.includes(name);
    })*/
    return null;
  }
}
