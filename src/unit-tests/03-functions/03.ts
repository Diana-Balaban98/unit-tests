import {StudentType} from "../02-objects/02";
import exp from "constants";

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