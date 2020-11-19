/*

El bingo es un juego que consiste en comprobar números que van saliendo aleatorios de un cartón (que podemos representar como 
  un array bidimensional). Cuando todos los números de una fila han salido, se puede cantar línea. Cuando todos los números de 
  un cartón han salido, se puede cantar bingo. Los cartones de bingo disponen de 15 números, repartidos en 3 líneas de 5 números
   cada una.

Realiza las siguientes funciones:

-          Función comenzar, que rellena el cartón con el que se juega, inicia la partida, y se llama por primera vez
             a la función sacaNumeroNuevo.

-          Función rellenarCarton, que rellena un array bidimensional con números aleatorios del 1 al 99 (ambos inclusive), que será con el se juega.

-          Función compruebaLinea, que recibe un cartón de bingo (representado por un array bidimensional) y un array unidimensional desordenado, con los números que han ido saliendo. Devuelve el número de línea si se canta línea, -1 en caso contrario.

-          Función compruebaBingo, que recibe un cartón de bingo (representado por un array bidimensional) y un array unidimensional desordenado, con los números que han ido saliendo. Devuelve true si se canta bingo, false en caso contrario.

-          Función sacaNumeroNuevo, que recibe un array unidimensional con los números que han ido saliendo. Esta función irá “sacando” nuevos números mientras haya disponibles (sacaremos un máximo de 99 números). Sacará números aleatorios que no esté presente en el array unidimensional recibido (los números que han salido ya), y una vez sacado el nuevo número, llamará a las funciones compruebaLinea y compruebaBingo.

Genera un HTML que contenga dos botones, uno para comenzar la partida, y otro para ir sacando números nuevos. Adicionalmente, tendrá cuatro elementos (pueden ser <p> o <div>, como prefieras) donde se insertarán mensajes para indiciar lo siguiente:

Inicio y fin de la partida
El cartón con el que se juega (separado por cada una de las líneas que lo componen)
Los números que van saliendo
El resultado de la línea que se ha cantado por última vez, o bien, si se ha cantado bingo, o bien, nada si no ha obtenido ningún resultado aún.

*/
//Definimos e iniciamos
let numeros_sacados = []; //al principio es un array vacio
let carton = new Array(3); //se compone de 3 lineas
const lineas_carton = 3;
const numeros_por_linea_carton = 5;

/**
 * rellena el cartón con el que se juega, inicia la partida, y se llama por primera vez a la función sacaNumeroNuevo.
 */
function comenzar() {
  document.getElementById("partida").innerHTML = "¡INICIO DE PARTIDA!";
  rellenarCarton(carton);
  sacaNumeroNuevo(numeros_sacados);
}

/**
 * Función rellenarCarton, que rellena un array bidimensional con números aleatorios del 1 al 99 (ambos inclusive),
 *  que será con el se juega.
 */
function rellenarCarton(carton) {
  let numeros_sacados_carton = [];
  document.getElementById("carton").innerHTML = "";
  for (let i = 0; i < lineas_carton; i++) {
    carton[i] = [];
    for (let j = 0; j < numeros_por_linea_carton; j++) {
      carton[i][j] = parseInt((Math.random()*100));
    }
    document.getElementById("carton").innerHTML +=
      carton[i].toString() + "<br>";
  }
  // document.getElementById("carton").innerHTML +=
  //     carton[i].toString() + "<br>";
}
