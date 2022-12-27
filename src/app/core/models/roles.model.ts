import { AccountStatus } from '../enums/genric.enums';

export class Role {
    id: number
    name: string
    permissions: Permisson[]
    accountStatus:number
    constructor(r?: Role) {
        if (r) {
            this.name = r.name
            this.permissions = r.permissions
            this.id = r.id
            this.accountStatus = r.accountStatus
        } else {
            this.id = 0
            this.name = ""
            this.permissions = []
            this.accountStatus = AccountStatus.inActive
        }
    }
}

export class Permisson {
    id: number
    name: string
    accountStatus:number
    constructor(p?: Permisson) {
        if (p) {
            this.id = p.id
            this.name = p.name
            this.accountStatus = p.accountStatus
        } else {
            this.id = 0
            this.name = ""
            this.accountStatus = AccountStatus.inActive
        }
    }
}