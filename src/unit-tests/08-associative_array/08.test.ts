import {usersObj} from "./08";

type UsersType = {
    [key: string]: { id: number, name: string }
}

let users: UsersType

beforeEach(() => {
    users = {
        '101': {id: 101, name: "Dima"},
        '1022': {id: 1022, name: "Natasha"},
        '13': {id: 13, name: "Elena"},
        '74': {id: 74, name: "Andrey"},
    }
})

test("should update corresponding user", () => {
    users['74'].name = 'Sasha';
    users['101'].name = "Dmitry"

    expect(users['74'].name).toBe('Sasha');
    expect(users['101']).toEqual({id: 101, name: "Dmitry"})
})

test("should delete corresponding user", () => {
    delete users['13']

    expect(users['13']).toBeUndefined();

})