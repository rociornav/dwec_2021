//Rocío del Real Navarro 16/10/20 U3 Tarea 1 Ejercicio 3.
/*
Crea un programa que muestre la fecha actual en diferentes formatos, según el valor que introduzca
el usuario por parámetro:
15/10/2020
Jueves, 15 de octubre de 2020.
Thursday, October 15, 2020.

*/

let eleccion=prompt("¿Qué formato fecha quiere?: \n 1. dd/mm/YYYY \n 2. diaSemana, diaMes de AAAA. \n 3. weekDay, monthDay, YYYY."); //AAAA año en español
let now=new Date();

 //Año
 let year = now.getFullYear();
 //Mes
 let month = now.getMonth() + 1;
 //Día
 let day = now.getDate();
switch(eleccion) {
    case "1":
       
        //Le doy formato.
        alert(document.getElementById("fechaActual").value = day + "/" + month + "/" + year);
        break;
    case "2":
        var mesesES = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
        var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
        document.write(diasSemana[now.getDay()] + ", " +day+" de "+ mesesES[month] + " de " + year+".");
        break;
    case "3":
        var monthsEN = new Array ("January","February","March","April","May","June","July","August","September","October","November","December");
        var weekDay = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
        document.write(weekDay[now.getDay()] + ", "+ monthsEN[month] + " "+day+"," + year+".");
        break;
    default:
        alert("Error, debe elegir una opción existente.")
        break;
}
