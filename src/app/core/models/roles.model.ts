import { AccountStatus } from '../enums/genric.enums';

export class Role {
    name: string
    permissions: Permisson[]
    constructor(r?: Role) {
        if (r) {
            this.name = r.name
            this.permissions = r.permissions
        } else {
            this.name = ""
            this.permissions = []
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