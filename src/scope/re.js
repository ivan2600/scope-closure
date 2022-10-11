var firstName; // declarar / valor = undefined
firstName = 'Ivan'; // asignar
console.log(firstName);

var lastName = 'Sergio'; // declarar y asignar
lastName = 'Adamo'; // reasignar
console.log(lastName);

var secondName = 'Carlos'; // declarar y asignar
var secondName = 'Sergio'; // redeclarar y reasignar
console.log(secondName);

// let

let fruit = 'Apple'; // declarar y asignar
fruit = 'Kiwi'; // reasignar
// let fruit = 'Banana'; // let no puede redeclararse
console.log(fruit);

// const 

const animal = 'Dog'; // declarar y asignar
// animal = 'cat'; // const no puede reasignarse
// const animal = 'snake' // const no puede redeclararse
console.log(animal);

const vehicles = [];
vehicles.push('Chevrolet Classic');
console.log(vehicles);

vehicles.pop();
console.log(vehicles);
