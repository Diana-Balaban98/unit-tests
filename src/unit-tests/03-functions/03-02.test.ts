import {CityType} from "./../02-objects/02-02";
import {addMoneyToBudget, createMessage, demolishHousesOnTheStreet, repairHouse, toFireStaff, toHireStaff} from "./03";


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

test("Budget should be changed for HOSPIATL", () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);

    expect(city.governmentBuildings[0].budget).toBe(300000)
})

test("Budget should be changed for FIRE-STATION", () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000);

    expect(city.governmentBuildings[1].budget).toBe(400000)
})

test("Houses should be destroyed", () => {
    const res = demolishHousesOnTheStreet(city.houses);

    expect(res.length).toBe(3)
    expect(res[0].id).toBe('1')
    expect(res[1].id).toBe('2')
    expect(res[2].id).toBe('3')
})

test("House should be repared", () => {
    repairHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy();
})

test("staff should be increased", () => {
    toFireStaff(city.governmentBuildings[0], 20);
    toFireStaff(city.governmentBuildings[1], 50);

    expect(city.governmentBuildings[0].staffCount).toBe(180)
    expect(city.governmentBuildings[1].staffCount).toBe(950)
})

// eslint-disable-next-line jest/no-identical-title
test("House should be repared in staff", () => {
    toHireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(220)
})

test("Greeting message should be correct for city", () => {
    const message = createMessage(city);

    expect(message).toBe('Welcome to New York')
})




