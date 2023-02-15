

import { AccountStatus, TransferType } from '../enums/genric.enums';

export class Driver {
    id: string
    name: string
    accountCreationDate: any
    phoneNumber: string
    balance: number
    code: number
    isActive: number
    firstName:string
    lastName:string
    profileImageUrl:string
    constructor(d?: Driver) {
        if (!d) {
            this.name = ""
            this.accountCreationDate = undefined
            this.phoneNumber = ""
            this.id = ""
            this.balance = 0
            this.isActive = AccountStatus.inActive
            this.code = 0
            this.firstName = ""
            this.lastName = ""
            this.profileImageUrl =""
        } else {
            this.id = d.id
            this.name = d.name
            this.phoneNumber = d.phoneNumber
            this.accountCreationDate = d.accountCreationDate
            this.code = d.code
            this.isActive = d.isActive
            this.balance = d.balance
            this.firstName = d.firstName
            this.lastName = d.lastName
            this.profileImageUrl = d.profileImageUrl
        }
    }
}


export class DriverRequest {
    id: number
    profileImageUrl:string
    name: string
    creationTime: any
    phoneNumber: string
    status:string
    constructor(d?: DriverRequest) {
        if (!d) {
            this.name = ""
            this.creationTime = undefined
            this.phoneNumber = ""
            this.id = 0
            this.status = ""
            this.profileImageUrl= ""
        } else {
            this.id = d.id
            this.name = d.name
            this.profileImageUrl = d.profileImageUrl
            this.creationTime = d.creationTime
            this.status = d.status
            this.phoneNumber = d.phoneNumber
        }
    }
}

export class Transfer {
    id: number
    driverName: string
    accountantName: string
    accountCreationDate: any
    balance: number
    tranferType: number
    constructor(t?: Transfer) {
        if (t) {
            this.id = t.id
            this.driverName = t.driverName
            this.balance = t.balance
            this.tranferType = t.tranferType
            this.accountCreationDate = t.accountCreationDate
            this.accountantName = t.accountantName
        } else {
            this.id = 0
            this.driverName = ""
            this.balance = 0
            this.tranferType = TransferType.remittance
            this.accountCreationDate = undefined
            this.accountantName = ""
        }
    }
}