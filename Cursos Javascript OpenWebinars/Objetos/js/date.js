var date=new Date();
//console.log(date); //nos da la fecha del sistema

var year=date.getFullYear();//nos da el año actual

var month=date.getMonth(); //nota: los meses van de 0 a 11

var day=date.getDay();//Nota: me da el numero del dia de la semana. 4=Jueves.
console.log("Hoy es "+day+" del mes "+(month+1)+" del año "+year);