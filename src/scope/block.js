function fruits() {
    
    if (true) {
        var fruit1 = 'apple'; // function scope
        let fruit2 = 'kiwi'; // block scope
        const fruit3 = 'banana'; // block scope
        fruit4 = 'orange'; // global scope
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
}
fruits();
console.log(fruit4); // solo se puede leer ubicado despues de ejecutar la función, antes de ejecutarla, esta variable no existe.