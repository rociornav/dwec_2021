// Rocío del Real U2T2   25/09/20

/*
Paso 1:
Crea un programa en el que crees 4 variables de tipo cadena con los  
siguientes valores: “Hola”, “7”, “13”, y “Adios”.

Nota: Puedo usar tanto comillas dobles como simples, y seguirán funcionando.
*/

//Declarar e iniciar 4 variables

var string1 = "Hola";
var string2 = "7";
var string3 = "13";
var string4 = "Adios";

/*
Paso 2.
Muestra en un alert una frase que incluya comillas simples.
*/
alert("’" + string1 + "’");

/*
Paso 3.
Muestra en un alert que ocupe una línea las variables 1ª y 4ª separadas por
un salto de línea.
*/
alert(string1 + "\n" + string4);

/*
Paso 4.
Muestra en un alert la suma de las variables 2ª y 3ª --> concatenar sin espacio.
*/

alert(string2 + string3);

/*
Paso 5 y último.
Muestra en un alert la suma de todas las variables.
*/

//concatenar sin espacio
alert(string1 + string2 + string3 + string4);
//concatenar con espacio
alert(string1 + " " + string2 + " " + string3 + " " + string4);
