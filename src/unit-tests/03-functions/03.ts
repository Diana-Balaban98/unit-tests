import {StudentType} from "../02-objects/02";
import {CityType} from "./../02-objects/02-02";
import {governmentBuildingsType, HouseType} from "../02-objects/02-02";

const sum = (a: number, b: number) => {
    return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({id: new Date().getTime(), title: skill})
}

export const addStudent = (student: StudentType, newStudent: StudentType) => {
    return [student, newStudent]
}


export const makeStudentActive = (s: StudentType) => {
    s.isActive = true
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName
}

export const addMoneyToBudget = (building: governmentBuildingsType, budget: number) => {
    building.budget += budget
}

export const demolishHousesOnTheStreet = (houses: HouseType[]) => {
    return houses.map((h, i) => ({id: `${i + 1}`, ...h}))
}

export const repairHouse = (house: HouseType) => {
    if (!house.repaired) {
        house.repaired = true;
    }
}

export const toFireStaff = (building: governmentBuildingsType, staffCountToFire: number) => {
    building.staffCount -= staffCountToFire;
}

export const toHireStaff = (building: governmentBuildingsType, staffCountToHire: number) => {
    building.staffCount += staffCountToHire
}

export const createMessage = (city: CityType) => {
    return 'Welcome to' + ' ' + city.title
}
