const printTeam = (team, coach, ...players) => { //Rest parameter
    console.log(`Team ${team}`);
    console.log(`Coach ${coach}`);
    console.log(`Players ${players.join(', ')}`);
}

const team = {
    name: 'Liberty',
    coach: "Juanito",
    players: ['Marge', 'Jay', 'Luis', 'Sherry']
}

printTeam('Liberty', 'Casey Penn', 'Marge', 'Jay', 'Luis', 'Sherry');
console.log();
printTeam('Liberty', 'Casey Penn', ...team.players); //Spread syntax

const cities = ['Heredia', 'San José', 'Alajuela', 'Cartago'];
const citiesCloned = [...cities]; // Clonning an array with the //Spread syntax
console.log(cities);
console.log(citiesCloned);

let person = {
    name: 'Luis',
    age: 26
}

let location = {
    city: 'Barva',
    country: 'Costa Rica'
}

let overview = {
    ...person,
    ...location
}

console.log();
console.log(overview);