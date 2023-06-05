import {makeHairStyle, moveUser, upgredeUserLaptop, UserType, UserWithLaptopType} from "./10";


test('reference type test', () => {
    let user: UserType = {
        name: 'OLeg',
        hair: 32,
        address: {
            city: 'Minsk'
        }
    }

    const awesomeUser = makeHairStyle(user, 2);

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'OLeg',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook',
        }
    }

    const movedUser = moveUser(user, "Kiev");

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(user.address.city).toBe("Minsk")
    expect(movedUser.address.city).toBe("Kiev")
})


test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'OLeg',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook',
        }
    }

    const userCopy = upgredeUserLaptop(user, "Lenovo");

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(user.laptop.title).toBe("ZenBook")
    expect(userCopy.laptop.title).toBe("Lenovo")
})