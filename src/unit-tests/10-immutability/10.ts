import exp from "constants";

export type UserType = {
    name: string
    hair: number
    address: {
        city: string
        house?: number
    }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: string[]
}

export type UserWithSkillstype = UserWithBooksType & {
    skills: number[]
}

export type WithCompaniesType = {
    companies: { id: number, title: string }[]
}

export type CompaniesType = {
    [key: string]: { id: number, title: string }[]
}

export const makeHairStyle = (u: UserType, power: number) => {
    const copyUser = {
        ...u,
        hair: u.hair / power
    }
    // copyUser.hair = u.hair / power

    return copyUser;
}

export const moveUser = (user: UserWithLaptopType, city: string) => {
    return {...user, address: {...user.address, city}};
}

export const upgredeUserLaptop = (user: UserWithLaptopType, title: string) => {
    return {
        ...user,
        laptop: {...user.laptop, title}
    }
}

export const moveUserToOtherHouse = (user: UserWithLaptopType & UserWithBooksType, house: number) => {
    return {
        ...user,
        address: {...user.address, house}
    }
}

export const addNewBookstoUser = (user: UserWithLaptopType & UserWithBooksType, newBook: string[]) => {
    return {
        ...user,
        books: [...user.books, ...newBook]
    }
}

export const updateBook = (user: UserWithLaptopType & UserWithBooksType, oldBook: string, updateBook: string) => {
    return {
        ...user,
        books: user.books.map(b => b === oldBook ? updateBook : b)
    }
}

export const updateSkill = (user: UserWithSkillstype, skill: number) => ({
    ...user,
    skills: user.skills.map(s => s === 75 ? skill : s)
})

export const removeBook = (user: UserWithSkillstype, bookForDelete: string) => ({
    ...user,
    books: user.books.filter(b => b !== bookForDelete)
})

export const addCompany = (user: UserWithLaptopType & WithCompaniesType, newCompany: string) => ({
    ...user,
    companies: [...user.companies, {id: 3, title: newCompany}]
})

export const updateCompanyTitle = (user: WithCompaniesType, companyid: number, newTitle: string) => {
    return {
        ...user,
        companies: user.companies.map(c => c.id === companyid ? {...c, title: newTitle} : c)
    }
}

export const updateCompanyTitle2 = (company: CompaniesType, key: string, newCompany: string, companyId: number) => (
    {...company, [key]: company[key].map(c => c.id === companyId ? {...c, title: newCompany} : c)}
)