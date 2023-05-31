export type AddressType = {
    number?: number
    street: StreetType
}

export type StreetType = {
    title: string
}

export type HouseType = {
    buildeAt: number
    repaired: boolean
    address: AddressType
}

export type governmentBuildings = {
    type: 'HOSPIATAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: AddressType
}

export type CityType = {
    title: string
    houses: HouseType[]
    governmentBuildings: governmentBuildings[]
    citizensNumber: number
}