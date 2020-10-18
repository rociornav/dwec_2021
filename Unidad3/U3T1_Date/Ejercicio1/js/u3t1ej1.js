//Rocío del Real Navarro 16/10/20 U3 Tarea 1 Ejercicio 1.

/*
Enunciado:

Crea un programa que muestre el número de días que quedan desde hoy hasta el fin de curso (por ejemplo, el 24 de junio).                                                                                       https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Numbers_and_dates

Recuerda que los meses empiezan desde el número 0.
*/

//Creamos el objeto FECHA con la fecha y hora actual.
let now=new Date();
let lastDay=new Date("2021-06-24"); //establece el formato de fecha en cadena.
let msPerDay = 24 * 60 * 60 * 1000; // Número de milisegundos por día

let daysLeft = (lastDay.getTime() - now.getTime());
alert(Math.round(daysLeft/msPerDay) + " días quedan para fin de curso.")


