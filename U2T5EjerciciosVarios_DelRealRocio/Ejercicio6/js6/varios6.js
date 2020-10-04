/*Rocío del Real 01/10/20 U2 T5.6 EJERCICIOS VARIOS
Ejercicio 6:
Escribe un programa que pida al usuario un día de la semana y que muestre por consola el día siguiente. 
Si se introduce un valor que no corresponda a un día de la semana, se le mostrará un mensaje al usuario.(ver foto)
*/
var diaSem=prompt("Dame un día de la semana y te mostraré el día siguiente:").toLowerCase(); //aunque el usuario lo ponga en mayusculas, lo pasa a minusc.

switch (diaSem) {
    case "lunes":
        alert("Mañana será Martes");
        break;
    case "martes":
        alert("Mañana será Miércoles");
        break;
    case "miércoles": //por si el usuario lo pusiese con tilde, recibe la orden de mostrar "Jueves"

    case "miercoles":
        alert("Mañana será Jueves");
        break;
    case "jueves":
        alert("Mañana será Viernes");
        break;
    case "viernes":
        alert("Mañana será Sábado");
        break;
    case "sábado":
    case "sabado":
        alert("Mañana será Domingo");
        break;
    case "domingo":
        alert("Mañana será Lunes");
        break;
    default:
        alert("Error! Pon un día de la semana válido.")
        break;
}