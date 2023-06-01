export let user = {
    name: 'Alex',
    age: 24
}

function icreaceAge(user: {name: string, age: number}) {
    user.age++
}

console.log(icreaceAge(user))

// Объекты мутабельные
// С объектами манипуляции происходят по ссылке

