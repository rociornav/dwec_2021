
/*Rocío del Real Navarro 16/10/20 U3 Tarea 3 NUMBER

Crea un programa que pida al usuario un número entero por pantalla y muestre:
Su valor exponencial.

El número con 4 decimales.
El número en binario.
El número en octal.
El número en hexadecimal.
Utiliza para ello los métodos del objeto Number.
Como datos de muestra, si metes 50, deberías obtener: 5e1 / 50.0000 / 00110010 / 62 / 0x32
*/

let numero = prompt("Introduce un número entero: ");
numero = parseInt(numero);
document.write("Notación científica: " + numero.toExponential());
document.write("<br>Con 4 decimales: " + numero.toFixed(4));
document.write("<br>En binario: " + numero.toString(2));
document.write("<br>En octal: " + numero.toString(8));
document.write("<br>En hexadecimal: 0x" + numero.toString(16));