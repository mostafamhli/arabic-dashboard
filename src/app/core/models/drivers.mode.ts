

import { AccountStatus } from '../enums/genric.enums';

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
    email: string
    constructor(d?: DriverRequest) {
        if (!d) {
            this.name = ""
            this.accountCreationDate = undefined
            this.email = ""
            this.id = 0
        } else {
            this.id = d.id
            this.name = d.name
            this.email = d.email
            this.accountCreationDate = d.accountCreationDate
        }
    }
}

