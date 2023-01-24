

import { AccountStatus, TransferType } from '../enums/genric.enums';

export class Driver {
    id: number
    name: string
    accountCreationDate: any
    mobile: string
    stock: number
    code: number
    accountStatus: number

    constructor(d?: Driver) {
        if (!d) {
            this.name = ""
            this.accountCreationDate = undefined
            this.mobile = ""
            this.id = 0
            this.stock = 0
            this.accountStatus = AccountStatus.inActive
            this.code = 0
        } else {
            this.id = d.id
            this.name = d.name
            this.mobile = d.mobile
            this.accountCreationDate = d.accountCreationDate
            this.code = d.code
            this.accountStatus = d.accountStatus
            this.stock = d.stock
        }
    }
}


export class DriverRequest {
    id: number
    name: string
    accountCreationDate: any
    mobile: string
    status:string
    constructor(d?: DriverRequest) {
        if (!d) {
            this.name = ""
            this.accountCreationDate = undefined
            this.mobile = ""
            this.id = 0
            this.status = "init"
        } else {
            this.id = d.id
            this.name = d.name
            this.mobile = d.mobile
            this.accountCreationDate = d.accountCreationDate
            this.status = d.status
        }
    }
}

export class Transfer {
    id: number
    driverName: string
    accountantName: string
    accountCreationDate: any
    stock: number
    tranferType: number
    constructor(t?: Transfer) {
        if (t) {
            this.id = t.id
            this.driverName = t.driverName
            this.stock = t.stock
            this.tranferType = t.tranferType
            this.accountCreationDate = t.accountCreationDate
            this.accountantName = t.accountantName
        } else {
            this.id = 0
            this.driverName = ""
            this.stock = 0
            this.tranferType = TransferType.remittance
            this.accountCreationDate = undefined
            this.accountantName = ""
        }
    }
}