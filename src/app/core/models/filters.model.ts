import { DriverRequestStatus, SortType } from '../enums/genric.enums';

export class Filter {
    maxResultCount:number
    skipCount:number
    constructor() {
        this.skipCount = 0
        this.maxResultCount = 2
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