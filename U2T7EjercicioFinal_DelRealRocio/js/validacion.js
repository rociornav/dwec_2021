/*
Rocío del Real 08/10/20 U2 T7 EJERCICIO FINAL

Crear la página Acceso.html y codificar la validación de sus datos en JavaScript en un fichero externo denominado validacion.js.

Se deben tener en cuenta los siguientes aspectos:

Los controles a validar del formulario son que el DNI es obligatorio y numérico y que la selección de la letra debe ser correcta. En caso de error, se deben visualizar según sea el caso los mensajes “Completar el campo DNI”, “Teclear un DNI (sin letras, sólo números)” y “La letra del NIF es incorrecta. Seleccionar la letra …”. En los puntos suspensivos tiene que aparecer la letra que el usuario debe elegir nuevamente. Si el dni es correcto también debe indicarlo mediante mensaje.
El algoritmo para calcular la letra del NIF es:
-                    Calcular el resto de dividir el número del DNI por 23.

-                    La letra del NIF corresponde al carácter obtenido de la cadena “TRWAGMYFPDXBNJZSQVHLCKE” en función del valor del resto (ver Tabla 1).

Se pide:

a) Resolver este ejercicio, utilizando como HTML5 y JavaScript. Validar  la  página acceso.html empleando el validador que W3C tiene en Internet en la página http://validator.w3.org. 
No es necesario corregir los errores.
*/

//***Programo y calculo la letra***

//Complicación: recoger el dato que ingresa el usuario en la caja de texto en html y pasarlo a valor numérico en la función.
//Atributos:
var numDni=document.getElementById("dnitxt").value; //debo rescatar el numero DNI que ingrese el usuario en la caja
var letraUsuario=document.getElementById("letra").value;
//Funcion para calcular la letra del dni
function getLetraDNI(numDni) {
    
    var cadenaLetras="TRWAGMYFPDXBNJZSQVHLCKE";
    var posicion= numDni % 23; //ese numDNI%23=letraDNI
    var letra = cadenaLetras.charAt(posicion);
    //return alert("Su letra es "+letra);
    if (letra ==letraUsuario) {
        alert("Es válido");
    }else{
        alert("ERROR, esa letra no es correcta. La letra correcta es "+letra);
    }
}




