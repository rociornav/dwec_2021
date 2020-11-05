/*Rocío del Real 5/11/20 Entregable Ej2
Ejercicio 2

Haz un programa que reciba cadenas del tipo:

“nombre:apellidos:telefono:email:codigopostal” y que te muestre:

El código postal.
Los apellidos
El email.
Suponiendo un formato de email “direccion@servidor” te muestre el servidor asociado.

Nota: el tamaño siempre debe ser el mismo, y mismo orden.
*/
let cadenaUsu=prompt("Ingrese una cadena en el formato 'nombre:apellidos:telefono:direccion@servidor:codigopostal' ");
function show(cad){
    let trozos = cad.split(":"); 
    let servidor = trozos[3].split("@"); 
    //console.log(trozos);
    let tam=trozos.length-1;
    alert("Código postal:"+trozos[tam]+"\nApellidos:"+trozos[1]+"\nEmail:"+trozos[3]+"\nServidor:"+servidor[1]);
}
//cadenaUsu="nombre:apellidos:telefono:direccion@servidor:codigopostal"; //PRUEBA
//cadenaUsu="Rocio:Del Real:722828282:delreal@servidor:41900";
show(cadenaUsu);