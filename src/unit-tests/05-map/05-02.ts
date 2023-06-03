import {CityType, governmentBuildingsType, HouseType} from "./../02-objects/02-02";

let city: CityType = {
    title: "New York",
    houses: [
        {
            buildeAt: 2012, repaired: false,
            address: {
                number: 100,
                street: {title: "White street"}
            }
        },
        {
            buildeAt: 2008, repaired: false,
            address: {
                number: 100,
                street: {title: "Happy street"}
            }
        },
        {
            buildeAt: 2020, repaired: false,
            address: {
                number: 101,
                street: {title: "Happy street"}
            }
        }
    ],
    governmentBuildings: [
        {
            type: 'HOSPIATAL', budget: 200000, staffCount: 200,
            address: {street: {title: 'Central Str'}}
        },
        {
            type: 'FIRE-STATION', budget: 500000, staffCount: 1000,
            address: {street: {title: 'South Str'}}
        }
    ],
    citizensNumber: 1000000
}

export const getStreetsTitlesOfGovernmentsBuildings = (governmentBuildings: governmentBuildingsType[]) => {
    return governmentBuildings.map(el => el.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: HouseType[]) => {
    return houses.map(el => el.address.street.title)
}

export const createMessages = (houses: HouseType[]) => {
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}