/*
Rocío del Real 01/10/20 U2 T5.5 EJERCICIOS VARIOS
Ejercicio 5:
Escribe un programa que muestre por pantalla una tabla de multiplicar, sumar y dividir. 
En primer lugar se le pedirá al usuario que introduzca un número entre 2 y 10.
Si el número no está entre estos dos valores, se le seguirá pidiendo hasta que introduzca el valor correcto.
Mostrará la tablas de multiplicar, sumar y dividir, utilizando los tres tipos de bucles que hay en JavaScript 
(para cada tabla, un tipo de bucle diferente).


Se mostrará por consola la tablas con un formato parecido al siguiente. (ver foto)
*/

//Paso 1. Definir variables.
var numUsuario;
//Paso 2. Iniciación variables con bucle do while.
do {
    numUsuario=prompt("Introduce un número entre 2 y 10: ");
  } while (numUsuario < 2 || numUsuario > 10); //repetir la pregunta siempre que el numero esté en ese rango

//Paso 3. Mostrar tablas
//Tabla de multiplicar
document.write("***TABLA DE MULTIPLICAR DE "+numUsuario+"***<br>");
for(i = 1;i<=10;i++){
    document.write("<ul>"+numUsuario + " x " + i + "= " + numUsuario * i+"</ul>");
    document.write("<br>");//salto de linea
}
document.write("<hr></hr>");//linea divisoria

//Tabla de sumar
document.write("***TABLA DE SUMAR DE "+numUsuario+"***<br>");
for(i = 1;i<=10;i++){
    document.write("<ul>"+numUsuario + " + " + i + "= " + (parseInt(numUsuario) + i)+"</ul>");
    document.write("<br>");//salto de linea
}
document.write("<hr></hr>");//linea divisoria

//Tabla de dividir
document.write("***TABLA DE DIVIDIR DE "+numUsuario+"***<br>");
for(i = 1;i<=10;i++){
    document.write("<ul>"+numUsuario + " : " + i + "= " + numUsuario/i+"</ul>");
    document.write("<br>");//salto de linea
}
