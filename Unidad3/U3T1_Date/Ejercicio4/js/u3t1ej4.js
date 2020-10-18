//Rocío del Real Navarro 16/10/20 U3 Tarea 1 Ejercicio 4.
/*
Crea un programa que muestre la hora actual en diferentes formatos, según el valor que introduzca
el usuario por parámetro:
14:35:07 (hora detallada con minutos y segundos)
02:35 PM o 02:35:07 AM (hora con minutos y AM o PM según sea antes o después del medio
día)
*/

let eleccion=prompt("¿Qué formato hora quiere?: \n 1. HH:MM:SS \n 2. HH:MM:SS AM o PM"); 
let now=new Date();
switch(eleccion) {
    //http://lineadecodigo.com/javascript/formato-de-horas-en-javascript/
    case '1':
        alert(now.toLocaleTimeString('es-ES'))
        break;
    case '2':
        alert(now.toLocaleTimeString('en-US'))
        break;
    default:
        alert("Error, elija una opción existente.")
        break;
}

