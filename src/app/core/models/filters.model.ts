import { DriverRequestStatus, SortType, ServiceType, OrderStatusEnum } from '../enums/genric.enums';
import { DateTime } from 'ts-luxon';

export class Filter {
    maxResultCount: number
    skipCount: number
    constructor() {
        this.skipCount = 0
        this.maxResultCount = 10
    }
}


export class FilterWithSearch extends Filter {
    status: number
    filter: string
    sorting: number

    constructor() {
        super()
        this.status = DriverRequestStatus.Initial
        this.filter = ''
        this.sorting = SortType.Ascending
    }
}

export class WalletFilter extends FilterWithSearch {
    type: number;
    WalletType: number;
    constructor() {
        super()
        this.type = 1;
        this.WalletType = 1;
    }
}

export class FilterVehiclesWithSearch extends FilterWithSearch {
    provinceId: number
    category: number
    constructor() {
        super()
        this.provinceId = 0
        this.category = 0
    }
}

export class FilterTurnOver {
    fromDate: Date | null | undefined
    toDate: Date | null | undefined
    captainId?: string
}

export class FilterOrders extends Filter {
    captainId: string | null
    clientId: string | null
    fromDate: any
    toDate: any
    isOpen: boolean
    orderStatus: number | null
    constructor() {
        super();
        this.captainId = null
        this.clientId = null
        this.fromDate = null
        this.toDate = null
        this.isOpen = false
        this.orderStatus = null
    }
}