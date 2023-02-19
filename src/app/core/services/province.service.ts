import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {


  baseUrl: string

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.baseURL
  }

  getProvinceList(){
    let getProvinceListUrl = this.baseUrl + '/api/app/province/active-list'
    const response = this.httpClient.get(getProvinceListUrl).pipe();
    return response;
  }

  getCaptainByProvinceId(id:any){
    let getCaptainByProvinceId = this.baseUrl + `/api/app/manage-captains/captains-locations-by-province-id/${id}`
    const response = this.httpClient.get(getCaptainByProvinceId).pipe();
    return response;
  }

  moveCaptaintoProvince(body:any){
    let moveCaptaintoProvinceUrl = this.baseUrl + `/api/app/manage-captains/change-captain-province`
    const response = this.httpClient.post(moveCaptaintoProvinceUrl,body).pipe();
    return response;
  }
}
