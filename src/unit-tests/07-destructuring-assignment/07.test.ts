import {UserType} from "./07";

let user: UserType;

beforeEach(() => {
    user = {
        name: 'Diana',
        age: 25,
        lessons: [{title: '1'}, {title: '2'}, {title: '3'}],
        address: {
            street: {
                title: 'Nezavisimosti street'
            }
        }
    }
})

test("object destructuring", () => {
    const {name, lessons, address: {street: {title}}} = user

    expect(name).toBe('Diana')
    expect(lessons.length).toBe(3)
    expect(title).toBe('Nezavisimosti street')
    expect(user.address).toStrictEqual({
        street:
            { title: 'Nezavisimosti street'}
    })
})

test("array destructuring", () => {
    const {lessons} = user
    const [obj, obj2] = lessons
    const [,, obj3] = lessons

    expect(lessons.length).toBe(3)
    expect(obj.title).toBe('1')
    expect(obj2.title).toBe('2')
    expect(obj3.title).toBe('3')
})