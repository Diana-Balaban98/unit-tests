import {userReduser} from "./10-user-reducer";

test('user reducer should increment only age', () => {
    const startState = {age: 20, childrenCount: 2, name: "Slava"}

    const endState = userReduser(startState, {type: 'INCREMENT_AGE'})

    expect(startState.age).toBe(20)
    expect(endState.age).toBe(21)
    expect(endState.childrenCount).toBe(2)
})

test('user reducer should increment only childrenCount', () => {
    const startState = {age: 20, childrenCount: 2, name: "Slava"}

    const endState = userReduser(startState, {type: "INCREMENT-CHILDREN-COUNT"})

    expect(startState.childrenCount).toBe(2)
    expect(endState.childrenCount).toBe(3)
    expect(endState.age).toBe(20)

})

test('user reducer should change name of user', () => {
    const startState = {age: 20, childrenCount: 2, name: "Slava"}
    const newName = "Victor"
    const endState = userReduser(startState, {type: "CHANGE-NAME", newName})

    expect(endState.name).toBe(newName)
})