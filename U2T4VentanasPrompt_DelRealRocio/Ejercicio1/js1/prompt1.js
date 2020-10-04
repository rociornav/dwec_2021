/*
Rocío del Real 30/09/20 U2 T4.1 VENTANAS PROMPT

Enunciado:

Realizar un script que pregunte: ¿Está seguro de que quiere hacer esto?
Si el usuario introduce texto se visualizará el mismo. En este caso el usuario introdujo “Sí”.
Si pulsa Cancelar aparecerá el mensaje “Ha rehusado contestar”.

Recuerda que cuando pulsamos Cancelar, el resultado que devuelve el prompt a la variable es null.

Si una variable no está vacía, cuando hagamos un if devolverá true, si está vacía devolverá false. Por ejemplo:

var prueba = 8;
if (prueba) { 
    alert (“la variable contiene algo”);
}
Hacer if(prueba), sin poner ninguna condición más, es algo así como preguntar ¿hay algo en la
variable prueba? Como en este caso la variable contiene el número 8 se confirma que hay algo,
por lo tanto, la condición es true y el alert mostrará el mensaje. Si hubiese pasado lo siguiente:
var prueba=”” (cadena vacía) no se mostraría el mensaje.

*/

var texto = prompt("¿Está seguro de que quiere hacer esto?");
//si el usuario introdujo texto se muestra por pantalla
if(texto != null){ //si tiene contenido
    alert("Su respuesta es: "+texto);
}else{
    alert("Ha rehusado contestar");
}