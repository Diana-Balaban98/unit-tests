import {CityType} from "./../02-objects/02-02";
import {createMessages, getStreetsTitlesOfGovernmentsBuildings, getStreetsTitlesOfHouses} from "./05-02";

let city: CityType;

beforeEach(() => {
    city = {
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
})


test("list of streets titles og goverments buildings", () => {
    let streetsName = getStreetsTitlesOfGovernmentsBuildings(city.governmentBuildings);

    expect(streetsName.length).toBe(2);
    expect(streetsName[0]).toBe('Central Str');
    expect(streetsName[1]).toBe('South Str');
})

test("list of streets titles", () => {
    let streetsName = getStreetsTitlesOfHouses(city.houses);

    expect(streetsName.length).toBe(3);
    expect(streetsName[0]).toBe('White street');
    expect(streetsName[1]).toBe('Happy street');
    expect(streetsName[2]).toBe('Happy street');
})

test("create greeting messages for streets", () => {
    let messages = createMessages(city.houses);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe(`Hello guys from ${city.houses[0].address.street.title}`);
    expect(messages[1]).toBe('Hello guys from Happy street');
    expect(messages[2]).toBe('Hello guys from Happy street');
})