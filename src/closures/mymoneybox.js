// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox: $${saveCoins}`);
// }
// 
// moneyBox(5);
// moneyBox(5);

function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);

// practica #1

const elegirPokemon = function(pokemon) {
    return `${pokemon} yo te elijo`;
}

console.log(elegirPokemon('Charmander'));

// practica #2

const miContador = (function() {
    _contador = 0;

    function incrementar(unidades) {
        return _contador = unidades;
    }

    function decrementar(unidades) {
        return _contador /= unidades;
    }

    function multiplicar(unidades) {
        return _contador *= unidades;
    }

    function valor() {
        return _contador;
    }

    return {
        incrementar,
        decrementar,
        multiplicar,
        valor
    }
})();


miContador.incrementar(10 + 14);
miContador.incrementar((_contador) /3);
miContador.incrementar((_contador) *4);

//miContador.multiplicar(2);
//miContador.decrementar(4);


console.log(miContador.valor())

// practica #3

function pokemonTeam() {
    let equipo = [];
    function addPokemon(pokemon) {
        equipo.push(pokemon);
        console.log(equipo);
    }
    return addPokemon;
}

const newPokemon = pokemonTeam();
newPokemon('Bulbasaur');
newPokemon('Charmander');
newPokemon('Pikachu');
newPokemon('Eevee');
