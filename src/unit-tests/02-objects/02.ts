
type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: TechnologiesType[]
}

type AddressType = {
    streetTitle: string
    city: CityType
}

type CityType = {
    title: string
    countryTitle: string
}

type TechnologiesType = {
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


