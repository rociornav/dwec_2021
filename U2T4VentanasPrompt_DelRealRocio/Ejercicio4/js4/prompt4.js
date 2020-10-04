//Rocío del Real 30/09/20 U2 T4.4 VENTANAS PROMPT
/*
Enunciado:

Vamos a realizar un script que nos pregunte el nombre y la edad. Nos responderá con un saludo y nos dirá si somos menores
o mayores de edad y los días que hemos vivido.

El script, en primer lugar nos hará dos preguntas: (ver fotos)

Observa que la respuesta se muestra en dos filas diferentes, en la primera está el nombre y en la siguiente el resto: (ver foto)
*/

//Paso 1. Pedir datos:

var nombre = prompt("¿Cómo te llamas?");
var edad = prompt("¿Cuántos años tienes?");

//resolviendo la edad en días
var dias=edad*365;

//Paso 2. Resultado

if(edad>=18){ //mayor de edad 
    alert("Hola "+nombre+", \nEres mayor de edad y has vivido "+dias+" días.");
}else{
    alert("Hola "+nombre+", \nEres menor de edad y has vivido "+dias+" días.");
}

