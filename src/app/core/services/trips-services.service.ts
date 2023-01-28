import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { DiscountCodeStatus } from '../enums/genric.enums';
@Injectable({
  providedIn: 'root'
})
export class TripsServicesService {

  discountCodeStatusEnum = DiscountCodeStatus
  constructor() { }

  getAllTrips() {
    return [
      {
        id: 1,
        driverName: 'Mostafa Mhli',
        clientName: 'Yazan Abbas',
        tripState: 'مؤكدة',
        tripType: 'عادية',
        tripDate: moment().format('DD-MM-YYYY'),
        tripTime: '10:58',
        tripCost: 10000
      },
      {
        id: 2,
        driverName: 'Mostafa Mhli',
        clientName: 'Yazan Abbas',
        tripState: 'مؤكدة',
        tripType: 'عادية',
        tripDate: moment().format('DD-MM-YYYY'),
        tripTime: '10:58',
        tripCost: 10000
      },
      {
        id: 3,
        driverName: 'Mostafa Mhli',
        clientName: 'Yazan Abbas',
        tripState: 'مؤكدة',
        tripType: 'عادية',
        tripDate: moment().format('DD-MM-YYYY'),
        tripTime: '10:58',
        tripCost: 10000
      },
      {
        id: 4,
        driverName: 'Mostafa Mhli',
        clientName: 'Yazan Abbas',
        tripState: 'مؤكدة',
        tripType: 'عادية',
        tripDate: moment().format('DD-MM-YYYY'),
        tripTime: '10:58',
        tripCost: 10000
      },
      {
        id: 5,
        driverName: 'Mostafa Mhli',
        clientName: 'Yazan Abbas',
        tripState: 'مؤكدة',
        tripType: 'عادية',
        tripDate: moment().format('DD-MM-YYYY'),
        tripTime: '10:58',
        tripCost: 10000
      },
      {
        id: 6,
        driverName: 'Mostafa Mhli',
        clientName: 'Yazan Abbas',
        tripState: 'مؤكدة',
        tripType: 'عادية',
        tripDate: moment().format('DD-MM-YYYY'),
        tripTime: '10:58',
        tripCost: 10000
      },
      {
        id: 7,
        driverName: 'Mostafa Mhli',
        clientName: 'Yazan Abbas',
        tripState: 'مؤكدة',
        tripType: 'عادية',
        tripDate: moment().format('DD-MM-YYYY'),
        tripTime: '10:58',
        tripCost: 10000
      }
    ]
  }

  findTrip(formValue: any) {
    return formValue
  }

  getAllDiscountCodes() {
    return [
      {
        id: 1,
        discountName: 'ABCDEFG',
        discountCode: 'abcdef',
        maxUsing : 10,
        usingTimes: 5,
        discountValue: 90,
        outDate: '22-12-2022',
        discountCodeStatus: DiscountCodeStatus.inActive,
      },
      {
        id: 2,
        discountName: 'ABCDEFG',
        discountCode: 'abcdef',
        maxUsing : 9,
        usingTimes: 8,
        discountValue: 90,
        outDate: '22-12-2022',
        discountCodeStatus: DiscountCodeStatus.active,
      },
      {
        id: 3,
        discountName: 'ABCDEFG',
        discountCode: 'abcdef',
        maxUsing : 9,
        usingTimes: 5,
        discountValue: 90,
        outDate: '22-12-2022',
        discountCodeStatus: DiscountCodeStatus.inActive,
      },
    ]
  }

  addDiscountCode(formValue: any) {
    return formValue
  }

  deleteDiscountCode(id: number) {
    return this.getAllDiscountCodes().filter(item => {
      return item.id !== id
    })
  }

  getAllCancleReason() {
    return [
      {
        id: 1,
        nameAr: "تأخر السائق",
        nameEn: "The driver is late"
      },
      {
        id: 2,
        nameAr: "الخدمة سيئة",
        nameEn: "Bad service"
      }
    ]
  }

  deleteCancleReason(id: number) {
    return this.getAllCancleReason().filter(item => {
      return item.id !== id
    })
  }

  addCancleReason(name: string) {
    return name
  }
}
