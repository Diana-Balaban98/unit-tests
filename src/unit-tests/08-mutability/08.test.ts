function icreaseAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string
    age: number
}

type AddressType = UserType & {
    address: {
        title: string
    }
}

test('reference type test', () => {
    const user: UserType = {
        name: 'Alex',
        age: 24
    }
    icreaseAge(user);
    expect(user.age).toBe(25)
    const user2 = user
    user2.age = 100;
    expect(user.age).toBe(100)
})


test('reference type test of nested object', () => {
    const user: AddressType = {
        name: 'Alex',
        age: 24,
        address: {
            title: "Minsk"
        }
    }

    const user2: AddressType = {
        name: "Natasha",
        age: 30,
        address: user.address
    }

    user2.address.title = "Moscow"

    expect(user.address.title).toEqual("Moscow")
    expect(user2.address.title).toEqual("Moscow")
})



test('reference type array test', () => {
    const address = {
        title: "Minsk"
    }

    const user: AddressType = {
        name: 'Alex',
        age: 24,
        address: address
    }

    const user2: AddressType = {
        name: "Natasha",
        age: 30,
        address: address
    }

    const users = [user, user2, {name: "Alexei", age: 30, address: address}];
    const admins = [user, user2]

    admins[0].name = "Alexander"

    expect(user.name).toBe("Alexander")
    expect(admins[0].name).toBe("Alexander")
    expect(users[0].name).toBe("Alexander")
})


test('array test', () => {
    const users: UserType[] = [
        {name: 'Alex', age: 24},
        {name: 'Diana', age: 25},
    ]

    const admins= users
    admins.push({name: "Elena", age: 56})

    expect(users[2]).toEqual({name: "Elena", age: 56})
})

test('value type test', () => {
    let usersCount = 100;
    let adminsCount = usersCount
    adminsCount++
    expect(usersCount).toBe(100)
    expect(adminsCount).toBe(101)
})