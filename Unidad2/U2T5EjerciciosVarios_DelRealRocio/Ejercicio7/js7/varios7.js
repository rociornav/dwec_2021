/*Rocío del Real 01/10/20 U2 T5.7 EJERCICIOS VARIOS

Ejercicio 7:
Sabiendo que cuando desplazamos 1 bit a la derecha, dividimos un entero por 2 y cuando lo desplazamos 
a la izquierda estamos multiplicando por 2. Desarrolla una aplicación que imprima el resultado de las 
siguientes operaciones empleando desplazamiento de bits:


125 / 8 = 
40 x 4 =
25 / 2 =
10 x 16 =

*/
/*
document.write(" 125 / 8 = " + (125 >> 3)+"<br>");
document.write(" 40 x 4 = " + (40 << 2)+"<br>");
document.write(" 25 / 2 = " + (25 >> 1)+"<br>");
document.write(" 10 x 16 = " + (10 << 4)+"<br>");
*/
alert(125 >> 3);
alert(40 << 2);
alert(25 >> 1);
alert(10 << 4);

//Sale el mismo resultado que en la parte documentada de document.write, intuyo que este es el resultado.