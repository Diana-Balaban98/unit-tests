// Ассоциативный массив - структура данных (объект)
const user = {
    name: "Dimych",
    age: 12,
    address: {
        city: {
            title: "Minsk"
        }
    }
}

const student = {
    name: 'Андрей',
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}

// console.log(student["marks"]["science"])

const users = {
    '1': {id: '10', name: 'Cristian'},
    '2': {id: '20', name: 'david'},
    '3': {id: '30', name: 'joe'},
    '4': {id: '40', name: 'tom'},
    '5': {id: '50', name: 'qwe'},
    '6': {id: '60', name: 'op'},
    '7': {id: '70', name: 'name'},
    '8': {id: '80', name: 'guy'},
    abra: "dsgfdbf"
}
const people = {
    "0": "Dima",
    "1": "Sveta",
    "2": "Sasha",
    "3": "Pavel",
}
// people[[]] = {}
// console.log(people)
people[ {name: "Sasha", toString(){return "blabla"}} ] = "value of blblabla"
// const people2 = Object.keys(people).map(el => people[el])
// console.log(people2)
console.log(people)
// for (let key in users) {
//     console.log(users[key])
// }
//
// users["sdmaoks"] = "zkdvjvds"
// users["привет как дела"] = "ХОРОШО"
// console.log(users["привет как дела"])
//
// const array = [1, 2, 3, 4, 5, 6]
//
// console.log(array["0"])
// console.log(array[1])
//
// console.log(users[1])
// console.log(users["2"])
// const abra = "abra"
// console.log(users[abra])
