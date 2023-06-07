import {CityType, governmentBuildingsType} from "../02-objects/02-02";

export type CoursesType = {
    title: string
    price: number
}

export type TasksType = {
    id: number
    title: string
    isDone: boolean
}

export const takeOldMen = (ages: number[]) => ages.filter(a => a > 90);

export const cheapPredicate = (course: CoursesType) => {
    return course.price < 160
}

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreatherThen = (buildings: governmentBuildingsType[], staff: number) => buildings.filter(s => s.staffCount > staff)