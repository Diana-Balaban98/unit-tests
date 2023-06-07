import {
    addCompany,
    addNewBookstoUser, CompaniesType,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2, updateSkill,
    upgredeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, UserWithSkillstype, WithCompaniesType
} from "./10";

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

test('upgrade number for house', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'OLeg',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook',
        },
        books: ['Bun', 'War and peace', 'Anna Karenina']
    }

    const userCopy = moveUserToOtherHouse(user, 28);

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).toBe(userCopy.books)
    expect(user.address).not.toBe(userCopy.address)
    expect(user.address.house).toBe(12)
    expect(userCopy.address.house).toBe(28)
})

test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'OLeg',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook',
        },
        books: ['Bun', 'War and peace', 'Anna Karenina']
    }

    const userCopy = addNewBookstoUser(user, ['Programming', 'CSS']);

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.books.length).toBe(3)
    expect(userCopy.books.length).toBe(5)
    expect(userCopy.books[3]).toBe('Programming')
    expect(userCopy.books[4]).toBe('CSS')
})

test('update CSS to TS', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'OLeg',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook',
        },
        books: ['Bun', 'War and peace', 'Anna Karenina']
    }

    const userCopy = updateBook(user, 'Bun', 'TS');

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.books.length).toBe(3)
    expect(userCopy.books.length).toBe(3)
    expect(user.books[0]).toBe('Bun')
    expect(userCopy.books[0]).toBe('TS')
})

test('update skills 75 to 82', () => {
    let user: UserWithSkillstype = {
        name: 'Alex',
        hair: 24,
        address: {
            city: 'Minsk',
            house: 18
        },
        books: ['Bun', 'War and peace', 'Anna Karenina'],
        skills: [37, 75, 42, 89]
    }

    const userCopy = updateSkill(user, 82);

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).toBe(userCopy.books)
    expect(user.skills[1]).toBe(75)
    expect(userCopy.skills[1]).toBe(82)
})

test('remove Anna Karenina book', () => {
    let user: UserWithSkillstype = {
        name: 'Alex',
        hair: 24,
        address: {
            city: 'Minsk',
            house: 18
        },
        books: ['Bun', 'War and peace', 'Anna Karenina'],
        skills: [37, 75, 42, 89]
    }

    const userCopy = removeBook(user, 'Anna Karenina');

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.books.length).toBe(3)
    expect(userCopy.books.length).toBe(2)
})

test('add company in array companies copyUser', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dmitry',
        hair: 32,
        address: {
            city: 'Vitebsk',
            house: 38
        },
        laptop: {
            title: 'Asus'
        },
        companies: [
            {id: 1, title: 'EPAM'},
            {id: 2, title: 'IT-free'},
        ]
    }

    const userCopy = addCompany(user, 'Google');

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies.length).toBe(2)
    expect(userCopy.companies.length).toBe(3)
    expect(userCopy.companies[2].title).toBe('Google')
})

test('update company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dmitry',
        hair: 32,
        address: {
            city: 'Vitebsk',
            house: 38
        },
        laptop: {
            title: 'Asus'
        },
        companies: [
            {id: 1, title: 'Епам'},
            {id: 2, title: 'IT-free'},
        ]
    }

    const userCopy= updateCompanyTitle(user, 1, 'EPAM') as UserWithLaptopType & WithCompaniesType

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies[0].title).toBe('Епам')
    expect(userCopy.companies[0].title).toBe('EPAM')
})

test('update company2', () => {
    let companies: CompaniesType = {
        ['Dmitry']: [
            {id: 1, title: 'Епам'},
            {id: 2, title: 'IT-free'},
        ],
        ['Artem']: [
            {id: 1, title: 'IT-free'},
        ]
    }

    const companyCopy = updateCompanyTitle2(companies, 'Dmitry', 'PixelPlex', 2)

    expect(companies['Artem']).toBe(companyCopy['Artem'])
    expect(companies['Dmitry']).not.toBe(companyCopy['Dmitry'])
    expect(companies['Dmitry'][2]).toBeUndefined()
    expect(companyCopy['Dmitry'][1].title).toBe('PixelPlex')
})