// var nameOfDog; // undefined
console.log(nameOfDog);
var nameOfDog = 'Firulais'; // es como si declarara la variable por encima del console.log, pero sin asignarle nada.
console.log(nameOfDog);

//---------------------------------------------------

/*
var nombre;
function nameOfCat() {
    console.log(`El mejor gatito es ${nombre}`);
}
*/

// La variable se declara por encima, pero no se asigna. Y la funcion queda entre la variable declarada y el llamado de la función.
// Por lo que la función se ejecuta pero el valor de la variable es undefined.

nameOfCat();

function nameOfCat() {
    console.log(`El mejor gatito es ${nombre}`);
}

var nombre = 'Quajinais';