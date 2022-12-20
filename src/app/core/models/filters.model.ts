
export class Filter {
    pageIndex: number
    pageQuantity: number
    constructor() {
        this.pageIndex = 0
        this.pageQuantity = 10
    }
}

export class FilterWithSearch extends Filter {
    searchWord: string
    constructor() {
        super()
        this.searchWord = ""
    }
}