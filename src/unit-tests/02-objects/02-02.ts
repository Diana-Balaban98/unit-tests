export type AddressType = {
    number?: number
    street: StreetType
}

export type StreetType = {
    title: string
}

export type HouseType = {
    id?: number
    buildeAt: number
    repaired: boolean
    address: AddressType
}

export type governmentBuildingsType = {
    type: 'HOSPIATAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: AddressType
}

export type CityType = {
    title: string
    houses: HouseType[]
    governmentBuildings: governmentBuildingsType[]
    citizensNumber: number
}