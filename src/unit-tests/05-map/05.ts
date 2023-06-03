export type ManType = {
    name: string
    age: number
};

const people: ManType[] = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18},
];

const funcTransformator = (man: ManType) => ({
    stack: ["css/html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
});


const devs = [
    {
        stack: ["css/html", "js", "tdd", "react"],
        firstName: "Andrew",
        lastName: "Ivaniv"
    },
    {
        stack: ["css/html", "js", "tdd", "react"],
        firstName: "Alexander",
        lastName: "Petrov"
    },
    {
        stack: ["css/html", "js", "tdd", "react"],
        firstName: "Dmitry",
        lastName: "Sidorov"
    },
];

const devs2 = people.map(funcTransformator);

const messages = people.map(s => `Добро пожаловать, ${s.name}`);

export const greetingStudents = (people: ManType[]) => {
    return people.map(s => `Добро пожаловать, ${s.name}`);
}