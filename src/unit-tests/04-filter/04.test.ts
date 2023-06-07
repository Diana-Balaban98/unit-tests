import {cheapPredicate, CoursesType, getBuildingsWithStaffCountGreatherThen, takeOldMen, TasksType} from "./04";
import {demolishHousesOnTheStreet} from "./04";
import {CityType} from "../02-objects/02-02";

test('should take old men older then 90', () => {
    const ages: number[] = [18, 20, 22, 1, 100, 90, 14];
    const oldAges = takeOldMen(ages)

    expect(ages.length).toBe(7)
    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test('should take courses chipper 160', () => {
    const courses: CoursesType[] = [
        {title: 'css', price: 110},
        {title: 'JS', price: 200},
        {title: 'React', price: 150},
    ]
    const cheapCorses = courses.filter(cheapPredicate)

    expect(courses.length).toBe(3)
    expect(cheapCorses.length).toBe(2)
    expect(cheapCorses[0].price).toBe(110)
    expect(cheapCorses[1].title).toBe('React')
})

test("get only completed tasks", () => {
    const tasks: TasksType[] = [
        {id: 1, title: 'React', isDone: false},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'NodeJS', isDone: false},
        {id: 4, title: 'MongoDB', isDone: false},
        {id: 5, title: 'HTML', isDone: true},
    ]

    const completedTasks = tasks.filter(t => t.isDone)

    expect(tasks.length).toBe(5)
    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].title).toBe('JS')
    expect(completedTasks[1].title).toBe('HTML')
})

test("get only uncompleted tasks", () => {
    const tasks: TasksType[] = [
        {id: 1, title: 'React', isDone: false},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'NodeJS', isDone: false},
        {id: 4, title: 'MongoDB', isDone: false},
        {id: 5, title: 'HTML', isDone: true},
    ]

    const uncompletedTasks = tasks.filter(t => !t.isDone)

    expect(uncompletedTasks.length).toBe(3)
    expect(uncompletedTasks[0].id).toBe(1)
    expect(uncompletedTasks[1].id).toBe(3)
    expect(uncompletedTasks[2].id).toBe(4)
})

test('houses should be destroyed', () => {
    let city: CityType = {
        title: "New York",
        houses: [
            {
                id: 1,
                buildeAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {title: "White street"}
                }
            },
            {
                id: 2,
                buildeAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {title: "Happy street"}
                }
            },
            {
                id: 2,
                buildeAt: 2020,
                repaired: false,
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

    demolishHousesOnTheStreet(city, 'Happy street')

   expect(city.houses.length).toBe(1)
    expect(city.houses[0].address.street.title).toBe('White street')
})

test('buildings with correct count', () => {
    let city: CityType = {
        title: "New York",
        houses: [
            {
                id: 1,
                buildeAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {title: "White street"}
                }
            },
            {
                id: 2,
                buildeAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {title: "Happy street"}
                }
            },
            {
                id: 2,
                buildeAt: 2020,
                repaired: false,
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

    const buildings = getBuildingsWithStaffCountGreatherThen(city.governmentBuildings, 200)

    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe('FIRE-STATION')
})