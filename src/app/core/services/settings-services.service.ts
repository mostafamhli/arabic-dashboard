import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccountStatus, PageType } from '../enums/genric.enums';
import { FilterClassification, FilterWithSearch } from '../models/filters.model';
import { Role } from '../models/roles.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsServicesService {

  baseUrl = environment.baseURL;
  accountStatusEnum = AccountStatus

  selectedProv = ''
  selectedType = ''
  constructor(private http: HttpClient) { }

  getAllDashboardUsers(filter: FilterWithSearch): Observable<any> {
    let dashboardUsersListUrl = this.baseUrl + '/api/app/manage-users'
    let param_ = new HttpParams();
    if (filter.filter) param_ = param_.append('filter', filter.filter);
    param_ = param_.append('MaxResultCount', filter.maxResultCount);
    param_ = param_.append('SkipCount', filter.skipCount);
    param_ = param_.append('Status', filter.status);
    const response = this.http.get(dashboardUsersListUrl, { params: param_ }).pipe();
    return response;
  }

  changeUserStatus(accountId: string) {
    let changeUserStatusUrl = this.baseUrl + `/api/app/manage-users/${accountId}/switch-active`
    const response = this.http.post(changeUserStatusUrl, {}).pipe();
    return response;
  }


  addNewUser(formValue: any) {
    return this.http.post(this.baseUrl + '/api/app/manage-users/user', formValue)
  }

  editUser(formValue: any) {
    return this.http.put(this.baseUrl + '/api/app/manage-users/user', formValue)
  }

  getUserById(id: any): Observable<any> {
    return this.http.get(this.baseUrl + `/api/app/manage-users/${id}/user`)
  }

  getCities() {
    return this.http.get(this.baseUrl + '/api/app/province/provinces')
  }

  getVehicleTypes() {
    return [
      {
        id: 1,
        name: 'جاي تكسي',
        image: '../../../../assets/img/vehicles/car.png'
      },
      {
        id: 3,
        name: 'آليات',
        image: '../../../../assets/img/vehicles/wnch.png'
      },
      {
        id: 2,
        name: 'توك توك',
        image: '../../../../assets/img/vehicles/toktok.png'
      }]
  }

  getAllVehcleType() {
    return this.http.get(this.baseUrl + `/api/app/vehicle-category`)
  }

  addNewVehcleType(formData: any) {
    return this.http.post(this.baseUrl + `/api/app/vehicle-category`, formData)
  }

  deleteVehcleType(id: number) {
    return this.http.delete(this.baseUrl + `/api/app/vehicle-category/${id}`)
  }

  getAllClassificationes(filter: FilterClassification) {
    let param_ = new HttpParams();
    if (filter.filter) param_ = param_.append('filter', filter.filter);
    if (filter.cityId) param_ = param_.append('ProvinceId', filter.cityId + '');
    if (filter.categoryId) param_ = param_.append('Category', filter.categoryId + '');
    param_ = param_.append('MaxResultCount', filter.maxResultCount);
    param_ = param_.append('SkipCount', filter.skipCount);
    return this.http.get(this.baseUrl + `/api/app/manage-vehicle-types`, { params: param_ })
  }

  addNewClassification(formValue: any, pageType: any) {
    let headers = new HttpHeaders();
    //this is the important step. You need to set content type as null
    headers.set('Content-Type', 'null');
    headers.set('Accept', "multipart/form-data");
    if (pageType == PageType.Edit) {
      const response = this.http.put(this.baseUrl + '/api/app/manage-vehicle-types', formValue, { headers }).pipe()
      return response

    } else {
      const response = this.http.post(this.baseUrl + '/api/app/manage-vehicle-types', formValue, { headers }).pipe()
      return response
    }
  }

  getClassificationById(id: any) {
    return this.http.get(this.baseUrl + `/api/app/manage-vehicle-types/${id}`)
  }

  getOpenTrips() {
    return this.http.get(this.baseUrl + '/api/app/manage-vehicle-types/packages')
  }

  addPackage(model: any) {
    return this.http.post(this.baseUrl + '/api/app/manage-vehicle-types/package', model)
  }

  editPackage(model: any) {
    return this.http.put(this.baseUrl + '/api/app/manage-vehicle-types/package', model)
  }

  deletePackage(id: any) {
    return this.http.delete(this.baseUrl + `/api/app/manage-vehicle-types/${id}/package`);
  }

  deleteClassification(id: number) {

  }


  getAllRoles() {
    let getAllRolesUrl = this.baseUrl + '/api/app/manage-users/roles'
    const response = this.http.get(getAllRolesUrl).pipe()
    return response
  }

  changeRoleAccountStatus(item: Role) {
  }

  addNewCity(formValue: any) {
    return formValue;
  }

  editCity(formValue: any) {
    return this.http.put(this.baseUrl + '/api/app/province', formValue)
  }

  getSocialMediaInfo() {
    return this.http.get(this.baseUrl + '/api/app/manage-settings')
  }

  addSocialMediaInfo(modal: any) {
    return this.http.put(this.baseUrl + '/api/app/manage-settings', modal)
  }

}
