//Rocío del Real  25/09/20

/*
Crea un programa en el que muestres el resultado de varias
operaciones mediante alert, mostrando el texto exacto de la
operación realizada y su resultado.

Las operaciones a realizar son:
• 10 == 10
• 10 === 10
• 10 === 10.0
• “Laura” == “laura”
• “Laura” > “laura”
• “Laura” < “laura”
• “123” == 123
• “123” === 123
• parseInt(“123”) === 123

*/

var operacion1 = 10 == 10; //tipo bolean=es true Igualdad Abstracta, débil
alert ("La operación 10 == 10 es" + operacion1);

/*
tipo bolean=es true; 

Igualdad estricta  (o "triple igual" o "identidad"):
Si los valores tienen el mismo tipo y no son números, son considerados iguales 
si tienen el mismo valor.
*/
var operacion2 =10 === 10; 
alert ("La operación 10 === 10 es" + operacion2);

var operacion3 =10 === 10.0; //tipo bolean=es true
alert ("La operación 10 === 10.0 es" + operacion3);

var operacion4 ="Laura" =="laura"; //es false
alert ('La operación "Laura" =="laura" es' + operacion4);

var operacion5 ="Laura" > "laura"; //es false
alert ('La operación "Laura" > "laura" es' + operacion5);

var operacion6 ="Laura" < "laura"; //es true
alert ('La operación "Laura" < "laura" es' + operacion6);

var operacion7 ="123" == 123; //es true, admite que sean tipos de datos diferentes al ser débil.
alert ('La operación "123" == 123' + operacion7);

var operacion8 ="123" === 123; //es false al ser tipo de datos diferentes.
alert ('La operación "123" === 123 es' + operacion8);

var operacion9 =parseInt("123") === 123; //es true --> convierte una cadena en entero
alert ('La operación parseInt("123") === 123 es' + operacion9);





