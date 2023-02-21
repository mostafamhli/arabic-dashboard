import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { FilterWithSearch } from '../models/filters.model';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  baseUrl = environment.baseURL;
  constructor(private http: HttpClient) { }

  getTransaction(filter?: FilterWithSearch) {
    let param_ = new HttpParams();
    if (filter?.filter) param_ = param_.append('Filter', filter?.filter);
    param_ = param_.append('MaxResultCount', filter?.maxResultCount!);
    param_ = param_.append('SkipCount', filter?.skipCount!);
    return this.http.get(this.baseUrl + '/api/app/transaction', {params:param_})
  }

  createTransaction(modal: any) {
    console.log(modal)
    return this.http.post(this.baseUrl + '/api/app/transaction', modal)
  }
}
