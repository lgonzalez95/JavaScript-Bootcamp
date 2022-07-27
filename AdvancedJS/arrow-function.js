const square = (num) => num * num;

console.log(square(5));

const people = [
    {
        name: 'Luis',
        age: 26
    },
    {
        name: 'Juanita',
        age: 20
    }
]

const under25 = people.filter((person) => person.age < 25);
const twenty = people.find((person) => person.age == 20);
console.log(twenty);