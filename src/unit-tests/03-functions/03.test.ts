import {StudentType} from "../02-objects/02";
import {addSkill, addStudent, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: "Diana",
        age: 25,
        isActive: false,
        address: {
            streetTitle: "Surganova 2",
            city: {
                title: "Minsk",
                countryTitle: "Belarus"
            }
        },
        technologies: [
            {id: 1, title: "CSS"},
            {id: 2, title: "HTML"},
            {id: 3, title: "JS"},
            {id: 4, title: "React"},
        ]
    }
})


test("new tech skill should be added to student", () => {
    expect(student.technologies.length).toBe(4)
    addSkill(student, "Node.js");
    expect(student.technologies.length).toBe(5)
    expect(student.technologies[4].title).toBe("Node.js")
    expect(student.technologies[4].id).toBeDefined()
})

test("new student should be added to student", () => {
    const newStudent = {
        id: 2,
        name: "Alexander",
        age: 24,
        isActive: true,
        address: {
            streetTitle: "Belinskogo 10",
            city: {
                title: "Minsk",
                countryTitle: "Belarus"
            }
        },
        technologies: [
            {id: 1, title: "Express"},
            {id: 2, title: "Swagger"},
            {id: 3, title: "MongoDB"},
            {id: 4, title: "Rest API"},
        ]
    }

    const res = addStudent(student, newStudent);
    expect(res.length).toBe(2);
    expect(res[1].age).toBe(24);
    expect(res[1].name).toBe("Alexander");
    expect(res[1].address.streetTitle).toBe("Belinskogo 10");
    expect(res[0].technologies.length).toBe(4);
})


test("student should be made active", () => {
    expect(student.isActive).toBe(false);
    makeStudentActive(student);

    expect(student.isActive).toBe(true)
})


test("does student live in city?", () => {
    const res = doesStudentLiveIn(student, "Moscow")
    const res2 = doesStudentLiveIn(student, "Minsk")

    expect(res).toBe(false)
    expect(res2).toBe(true)
})


