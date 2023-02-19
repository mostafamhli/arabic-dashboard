import { DriverRequestStatus, SortType } from '../enums/genric.enums';

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

export class FilterClassification extends Filter {
    cityId: number | null
    categoryId: number | null
    filter: string | null
    constructor() {
        super()
        this.cityId = null
        this.categoryId = 2
        this.filter = null
    }
}