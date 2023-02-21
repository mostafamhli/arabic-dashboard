import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AccountStatus } from '../enums/genric.enums';
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

  getAllDashboardUsers() {
    return [
      {
        id: 1,
        userName: 'Mostafa Mhli',
        type: 'admin',
        accountCreateDate: '22-12-2022',
        email: 'mostafa1234@gmail.com',
        accountStatus: AccountStatus.active,
      },
      {
        id: 2,
        userName: 'Mostafa Mhli',
        type: 'admin',
        accountCreateDate: '22-12-2022',
        email: 'mostafa1234@gmail.com',
        accountStatus: AccountStatus.active,
      },
      {
        id: 3,
        userName: 'Ali Mhli',
        type: 'admin',
        accountCreateDate: '22-12-2022',
        email: 'mostafa1234@gmail.com',
        accountStatus: AccountStatus.inActive,
      },
    ]
  }

  searchInDashboardService(text: any) {
    return this.getAllDashboardUsers().filter(item => {
      return item.userName.includes(text);
    })
  }

  addNewUser(formValue: any) {
    return formValue
  }

  getAllCities() {
    return [
      {
        id: 1,
        name: 'بغداد',
        pic: '/assets/img/baghdad.png',
      },
      {
        id: 2,
        name: 'الموصل',
        pic: '/assets/img/basra.png',
      },
      {
        id: 3,
        name: 'الأنبار',
        pic: '/assets/img/baghdad.png',
      },
      {
        id: 4,
        name: 'البصرة',
        pic: '/assets/img/baghdad.png',
      },
      {
        id: 5,
        name: 'النجف',
        pic: '/assets/img/basra.png',
      },
      {
        id: 6,
        name: 'بابل',
        pic: '/assets/img/baghdad.png',
      },
      {
        id: 7,
        name: 'بغداد',
        pic: '/assets/img/baghdad.png',
      },
      {
        id: 8,
        name: 'الموصل',
        pic: '/assets/img/basra.png',
      },
      {
        id: 9,
        name: 'الأنبار',
        pic: '/assets/img/baghdad.png',
      },
      {
        id: 10,
        name: 'البصرة',
        pic: '/assets/img/baghdad.png',
      },
      {
        id: 11,
        name: 'النجف',
        pic: '/assets/img/basra.png',
      },
      {
        id: 12,
        name: 'بابل',
        pic: '/assets/img/baghdad.png',
      }
    ]
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

  getAllClassificationes(filter: FilterClassification) {
    let param_ = new HttpParams();
    if (filter.filter) param_ = param_.append('filter', filter.filter);
    if (filter.cityId) param_ = param_.append('ProvinceId', filter.cityId + '');
    if (filter.categoryId) param_ = param_.append('Category', filter.categoryId + '');
    param_ = param_.append('MaxResultCount', filter.maxResultCount);
    param_ = param_.append('SkipCount', filter.skipCount);
    return this.http.get(this.baseUrl + `/api/app/manage-vehicle-types`, { params: param_ })
  }

  addNewClassification(formValue: any) {
    let headers = new HttpHeaders();
    //this is the important step. You need to set content type as null
    headers.set('Content-Type', 'null');
    headers.set('Accept', "multipart/form-data");

    return this.http.post(this.baseUrl + '/api/app/manage-vehicle-types', formValue, { headers })
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

  deleteClassification(id: number) {
    console.log(id)

  }

  getAllRoles() {
    return [
      {
        id: 1,
        name: "Admin",
        accountStatus: AccountStatus.active,
        permissions:
          [
            {
              id: 1,
              name: "إدارة السائقين",
              accountStatus: AccountStatus.active
            },
            {
              id: 2,
              name: "إدارة الزبائن",
              accountStatus: AccountStatus.active
            },
            {
              id: 3,
              name: "إدارة الرحلات",
              accountStatus: AccountStatus.active
            },
          ]
      },
      {
        id: 2,
        name: "Sub Admin",
        accountStatus: AccountStatus.inActive,
        permissions: [{
          id: 1,
          name: "إدارة الزبائن",
          accountStatus: AccountStatus.inActive
        }]
      }
    ];
  }

  changeRoleAccountStatus(item: Role) {
    console.log(item);
  }

  addNewCity(formValue: any) {
    return formValue;
  }

  getSocialMediaInfo() {
    return this.http.get(this.baseUrl + '/api/app/manage-settings')
  }

  addSocialMediaInfo(modal: any) {
    return this.http.put(this.baseUrl + '/api/app/manage-settings', modal)
  }

}
