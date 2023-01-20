import { Injectable } from '@angular/core';
import { AccountStatus } from '../enums/genric.enums';
import { Role } from '../models/roles.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsServicesService {

  accountStatusEnum = AccountStatus

  constructor() { }

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

  getVehicleTypes() {
    return [
      {
        id: 1,
        name: 'جاي تكسي',
        image:'../../../../assets/img/vehicles/car.png'
      },
      {
        id: 2,
        name: 'آليات',
        image:'../../../../assets/img/vehicles/wnch.png'
      },
      {
        id: 3,
        name: 'توك توك',
        image:'../../../../assets/img/vehicles/toktok.png'
      }]
  }

  getAllClassificationes() {
    return [
      {
        id: 1,
        classificationName: 'comfort',
        numOfSeat: 5,
        rentDuringMorning: 12,
        rentDuringDay: 10,
        rentDuringNight: 20,
        driverRatio: 10
      },
      {
        id: 2,
        classificationName: 'classic',
        numOfSeat: 5,
        rentDuringMorning: 12,
        rentDuringDay: 10,
        rentDuringNight: 20,
        driverRatio: 10
      },
      {
        id: 3,
        classificationName: 'comfort',
        numOfSeat: 5,
        rentDuringMorning: 12,
        rentDuringDay: 10,
        rentDuringNight: 20,
        driverRatio: 10
      }
    ]
  }

  searchInClassificationTableByName(name: string) {
    return this.getAllClassificationes().filter(item => {
      return item.classificationName.includes(name);
    })
  }

  addNewClassification(formValue: any) {
    return formValue
  }

  deleteClassification(id: number) {
    console.log(id)
    return this.getAllClassificationes().filter(item => {
      return item.id !== id
    })
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

  getCities() {
    return [
      {
        id:1,
        arabicName: 'بغداد',
        englishName:'Baghdad',
        pic: '../../../../assets/img/baghdad.png',
        firstValueAtFirstRange: 5,
        secondValueAtFirstRange: 9,
        secondValueAtSecondRange: 15,
      },
      {
        id:2,
        arabicName: 'الموصل',
        englishName:'AL-Mosoul',
        pic: '../../../../assets/img/basra.png',
        firstValueAtFirstRange: 3,
        secondValueAtFirstRange: 8,
        secondValueAtSecondRange: 16,
      },
      {
        id:3,
        arabicName: 'الأنبار',
        englishName: 'Al-Anbar',
        pic: '../../../../assets/img/baghdad.png',
        firstValueAtFirstRange: 2,
        secondValueAtFirstRange: 8,
        secondValueAtSecondRange: 20,
      }
    ]
  }

  addNewCity(formValue: any) {
    return formValue;
  }

  getSocialMediaInfo() {
    return {
      facebook: 'Mostafa F Mhli',
      twitter: '@mostafa',
      instagram: 'mostafa_mhli',
      whatsapp: '0935526455',
      phone: '0935526455',
      email: 'mostafa@gmail.com'
    }
  }
}
