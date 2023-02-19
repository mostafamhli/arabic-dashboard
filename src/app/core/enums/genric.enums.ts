export enum AccountStatus {
    active = 1,
    inActive = 0
}

export enum TransferType {
    remittance = 1,
    recovery = 2
}


export enum DiscountCodeStatus {
    active = 1,
    inActive = 2
}

export enum MessageType {
    Users = 1,
    Drivers = 2,
    Customers = 3,
    specificUser = 4
}

export enum DriverRequestStatus {
    Initial = 0,
    Approved = 1,
    Rejected = 2
}

export enum SortType {
    Ascending = 1,
    Descending = 2
}

export enum ServiceType {
    Toktok = 1,
    Jaytaxi = 2,
    Vehicles = 3
}

export enum PageType {
    Create = 1,
    Edit = 2,
    Get = 3
}

export enum OrderStatusEnum {
    Initial = 1,
    NotResponding = 2,
    Confirmed = 3,
    OnTheWay = 4,
    Canceled = 5,
    InProgress = 6,
    Completed = 7
}