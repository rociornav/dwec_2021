//Rocío del Real 30/09/20 U2 T4.2 VENTANAS PROMPT

/*
Enunciado:

Vamos a realizar un script que nos diga si un material flota o se hunde dependiendo de su densidad medida en gr/cm3.

El script, como ayuda al usuario, mostrará ejemplos de distintas densidades y realizará la pregunta “Qué densidad tiene el 
material elegido”: (ver imagen moodle)

Si la densidad es menor de 1 el material flotará, si es mayor se hundirá, mostrando las siguientes alertas 
según sea el caso:(ver imagen moodle)

*/


//Paso 1. Mostrar ejemplos de densidades
/*Nota para poner el salto de línea aquí: Al querer hacer un document.write, lo que estas haciendo es escribir HTML,
para lo cual, debes usar <br>.*/
document.write('Ejemplos de densidades: <br>');
document.write('Hielo=0.92; Aluminio=2.7; Oro=19.3; Aceite de oliva=0.92;');

//Paso 2. Pregunta
var respuesta = prompt("¿Qué densidad tiene el material elegido? (g/cm³)");

if(respuesta < 1){ //si la densidad es menor que 1 el material flota
    alert("Flota en el agua.");
}else{
    alert("Se hunde en el agua.");
}