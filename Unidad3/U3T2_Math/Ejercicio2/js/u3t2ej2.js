//Rocío del Real Navarro 16/10/20 U3 Tarea 2 Ejercicio 2

/*
Crea un programa que pida al usuario el valor del radio y muestre por pantalla:

El valor del radio.
El valor del diámetro.
El valor del perímetro de la circunferencia.
El valor del área del círculo.
El valor del área de la esfera.
El valor del volumen de la esfera.
El valor de Pi debes obtenerlo del objeto Math, no introducirlo manualmente.
Debes escribir al lado si son cm, o cm2, o cm3.
Como datos de muestra, si metes 5, deberías obtener aproximadamente: 5 / 10 / 31,41 /
78,54 / 314,15 / 523,59.
*/

let radio = prompt("Introduzca un radio en cm: ");
document.write("Radio = " + radio + " cm");
document.write("<br>Diámetro = " + radio*2 + " cm ");
document.write("<br>Perímetro de la circunferencia = " + (2*Math.PI*radio) + " cm ");
document.write("<br>Área del círculo = " + (Math.PI*(Math.pow(radio, 2))) + " cm² ");
document.write("<br>Área de la esfera = " + (4*Math.PI*(Math.pow(radio, 2))) + " cm² ");
document.write("<br>Volumen de la esfera = " + ((4/3)*Math.PI*(Math.pow(radio, 3))) + " cm³");