/*
Vamos a desarrollar un juego, debemos crear el objeto Jugador.
Propiedad: fuerza con valor incial 1.
metodo: incrementarFuerza que nos permita incrementar en 1 la fuerza del jugador.
metodo2: consultarFuerza que nos muestre un mensaje con la fuerza del jugador.
*/

var Jugador={
    fuerza:1,
    incrementarFuerza: function(){
        console.log(this.fuerza+=1);
    },
    consultarFuerza: function(){
        console.log('Fuerza actual --> '+this.fuerza);
    }
}

console.log(Jugador.fuerza);
Jugador.incrementarFuerza();
Jugador.consultarFuerza();
console.log(Jugador.fuerza); //fuerza final