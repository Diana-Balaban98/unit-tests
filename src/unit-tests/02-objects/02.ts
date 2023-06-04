
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: TechnologiesType[]
}

export type AddressType = {
    streetTitle: string
    city: CityType
}

export type CityType = {
    title: string
    countryTitle: string
}

export type TechnologiesType = {
    id: number
    title: string
}

export const student: StudentType = {
    id: 1,
    name: "Diana",
    age: 25,
    isActive: true,
    address: {
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {id: 1, title: "CSS"},
        {id: 2, title: "HTML"},
        {id: 3, title: "JS"},
        {id: 4, title: "React"},
    ]
}


