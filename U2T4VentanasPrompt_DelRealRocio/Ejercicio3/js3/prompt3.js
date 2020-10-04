//Rocío del Real 30/09/20 U2 T4.3 VENTANAS PROMPT
/*
Enunciado:

El script nos pedirá el radio y la altura de un cilindro y mostrará su volumen.
La fórmula es:  .V=PI * r * r * h
(Puedes usar el valor 3.14 para la constante PI )

(Ver fotos)

Por fin, nos mostrará el resultado: (ver foto)

Nota:
prompt siempre nos devuelve una cadena de caracteres y no un número. Hay varios métodos para convertir la cadena en número cuando nos interese. Uno de los más sencillos es multiplicar *1. Ejemplo:
numero1=prompt("Introduce el primer número",0)*1 De esa forma, numero1 será un número y podremos operar con él.

Respecto al número PI, ponemos calcular el valor de forma más exacta siguiendo el siguiente ejemplo aplicado a la obtención de la longitud de una circunferencia:
L=2*Math.PI*r 
Esta sería la formula para hallar dicha longitud, en donde “L” sería la longitud y “r” el radio.
Math lo veremos más delante de forma más amplia.
*/

//Paso 1. Pedir datos al usuario:

var radio = prompt("Introduce el radio de la circunferencia de la base en cm: ");
var altura = prompt("Introduce la altura en cm: ");

//defino la variable constante PI-->const PI = 3.14; Pero usaré Math.PI para más exactitud.

//Defino la variable volumen (solucion)

var volumen = Math.PI*radio*radio*altura;

//Paso 2. Mostrar resultado o solucion
alert("Solución, el volumen es --> "+volumen+" cm³.");
