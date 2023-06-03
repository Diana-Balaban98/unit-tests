import {greetingStudents, ManType} from "./05";

let people: ManType[];

beforeEach(() => {
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "Alexander Petrov", age: 24},
        {name: "Dmitry Sidorov", age: 18},
    ];
})

test("should get array of greeting messages", () => {
   const messages = greetingStudents(people);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Добро пожаловать, Andrew Ivanov");
    expect(messages[1]).toBe("Добро пожаловать, Alexander Petrov");
    expect(messages[2]).toBe("Добро пожаловать, Dmitry Sidorov");
})