import { DriverRequestStatus, SortType, ServiceType } from '../enums/genric.enums';

export class Filter {
    maxResultCount:number
    skipCount:number
    constructor() {
        this.skipCount = 0
        this.maxResultCount = 10
    }
}

export class FilterWithSearch extends Filter {
    status:number
    filter:string
    sorting:number

    constructor() {
        super()
        this.status = DriverRequestStatus.Initial
        this.filter = ''
        this.sorting = SortType.Ascending
    }
}
export class FilterVehiclesWithSearch extends FilterWithSearch {
    provinceId:number
    category:number
    constructor() {
        super()
        this.provinceId = 0
        this.category = 0
    }
}