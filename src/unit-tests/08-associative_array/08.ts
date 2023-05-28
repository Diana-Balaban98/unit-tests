import exp from "constants";

export const usersObj = {
    '0': 'Sasha',
    '1': 'Valera',
    '2': "Stanislav",
    '3': "Petr"
}

type UsersType = {
    [key: string]: { id: number, name: string }
}

// объект (ассоциативный массив)
const users: UsersType = {
    '101': {id: 101, name: "Dima"},
    '1022': {id: 1022, name: "Natasha"},
    '13': {id: 13, name: "Elena"},
    '74': {id: 74, name: "Andrey"},
}

// поиск пользователя - users["1022"]
const user = {id: 105, name: "Igor"}
users[user.id] = user; // добавление пользователя
delete users[user.id] // удаление пользователя
users[user.id].name = "Victor" // обновление пользователя


// обычный массив
const usersArray = [
    {id: 101, name: "Dima"},
    {id: 1022, name: "Natasha"},
    {id: 13, name: "Elena"},
    {id: 74, name: "Andrey"},
]

usersArray.find(el => el.id === 13) // поиск пользователя
const usersCopy = [...usersArray, user] //добавление пользователя иммутабельно
usersArray.push(user) // добавление пользователя мутабельно
usersArray.filter(el => el.id !== 74) // удаление пользователя
