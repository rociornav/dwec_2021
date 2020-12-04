
/********************************.RANDOM() ********************************************************************/

/**NUMERO FLOAT ENTRE 0 INCLUIDO Y 1 SIN INCLUIR rango [0, 1)*/
let aleatorio=Math.random(); 

/**NUMERO FLOAT ENTRE [0,100) */
let alea1=Math.random()*100;
//console.log(alea1);

/**NUMERO INT ENTRE [0,100) */
alea1=parseInt((Math.random()*100));
 //console.log(alea1);
    

// Retorna un número aleatorio entre min (incluido) y max (excluido)
function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
  }
//console.log(getRandomArbitrary(1,5));//[1,4] o [1,5)


  // Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  //console.log(getRandomInt(1,7)); //entre 1 y 6

  //entre cero y el numero máximo que pase el usuario incluido. Ejemplo [0, 100]
  function numMaxInluido(max){
      return Math.round(Math.random()*max);
  }
  console.log(numMaxInluido(100));