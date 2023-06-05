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
