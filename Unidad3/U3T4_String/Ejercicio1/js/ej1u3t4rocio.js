/*
OJOOO: ESTE EJERCICIO ESTÁ PREPARADO PARA VERSE POR LA TERMINAL O CONSOLA

Rocio del Real 24/10/20 U3T4_ejercicio1
Crea un programa que pida al usuario su nombre y apellidos y muestre:

El tamaño del nombre más los apellidos (sin contar espacios). (hecho, nota: .replace(" ","") no sirve pues solo cambia el primer caracter que encuentre)
La cadena en minúsculas y en mayúsculas. (hecho)
Que divida el nombre y los apellidos y los muestre en 3 líneas, donde ponga Nombre: / Apellido1: / Apellido 2: (hecho)
Una propuesta de nombre de usuario, compuesto por la inicial del nombre, el primer apellido y la inicial del segundo apellido:
ej. Para José María García Durán sería jgarciad. (hecho)
Una propuesta de nombre de usuario compuesto por las tres primeras letras del nombre y delos dos apellidos: ej. josgardur.
*/


/*Pedir datos al usuario:
let name=prompt("Dame su nombre: ");
let surnameA=prompt("Dame su primer apellido: ");
let surnameB=prompt("Dame su segundo apellido: ");
*/

function nameSurname(name1, surname1, surname2){
    /***TAMAÑO CADENAS ***/
    console.log("El tamaño del nombre con los apellidos (con espacios): " + (name1.length + surname1.length+surname2.length));
    
    let nombreCompleto=name1+surname1+surname2;
    let nombreCompletoSin="";
    //console.log("nombreCompleto con espacios: "+nombreCompleto.length);
    for (var i = 0; i< nombreCompleto.length; i++) {
        var caracter = nombreCompleto.charAt(i);
        if( caracter == " ") {
            nombreCompletoSin+="";
         }else{
            nombreCompletoSin+=caracter;
         }
    }
    
    console.log("Mostrando el tamaño de su nombre con apellidos sin espacios: "+nombreCompletoSin.length);

    /*** CADENA EN MINUSCULAS Y MAYUSCULAS ***/
    console.log("Nombre completo en mayúsculas: "+name1.toUpperCase() + " " + surname1.toUpperCase() + " " + surname2.toUpperCase());
    console.log("Nombre completo en minúsculas: "+name1.toLowerCase() + " " + surname1.toLowerCase() + " " + surname2.toLowerCase());

    /*** MOSTRAR EN 3 LÍNEAS ***/
    console.log("***Mostrando su nombre y apellidos en 3 líneas:***")
    console.log(name1 + '\n' + surname1 + '\n' + surname2);
    
    /*** PROPUESTA DE NOMBRE DE USUARIO:***/
    //elimino todos los espacios del nombre, y de cada apellido
    let nameSin="",surname1Sin="",surname2Sin="";
    for (var i = 0; i< name1.length; i++) {
        caracter = name1.charAt(i);
        if( caracter == " ") {
            nameSin+="";
         }else{
            nameSin+=caracter;
         }
    }
    for (var i = 0; i< surname1.length; i++) {
        var caracter3 = surname1.charAt(i);
        if( caracter3 == " ") {
            surname1Sin+="";
         }else{
            surname1Sin+=caracter3;
         }
    }
    for (var i = 0; i< surname2.length; i++) {
        var caracter2 = surname2.charAt(i);
        if( caracter2 == " ") {
            surname2Sin+="";
         }else{
            surname2Sin+=caracter2;
         }
    }
    console.log("Propuesta nombre usuario (1): " + nameSin.charAt(0).toLowerCase() + surname1Sin.toLowerCase() + surname2Sin.charAt(0).toLowerCase());

    /* Opción B: me sale: m del real n (con espacios entremedio) más rápido con .trim()
   var contador=0;
    for (var i = 0; i< name1.length; i++) {
        caracter = name1.charAt(i);
        if( caracter != " ") {
            break;
         }else{
            contador++;
         }
    }
    var contador2=0;
    for (var i = 0; i< surname2.length; i++) {
        var caracter2 = surname2.charAt(i);
        if( caracter2 != " ") {
            break;
         }else{
            contador2++;
         }
    }
    console.log("Propuesta nombre usuario: " + name1.charAt(contador).toLowerCase() + surname1.toLowerCase() + surname2.charAt(contador2).toLowerCase());

    */

    /***Propuesta de nombre de usuario compuesto por las tres primeras letras del nombre y de los dos apellidos: en mi caso sol: mardelnav***/
    console.log("Propuesta de nombre de usuario (2): " + nameSin.substring(0,3).toLowerCase() + surname1Sin.substring(0,3).toLowerCase() + surname2Sin.substring(0,3).toLowerCase())
  
}


nameSurname('  Maria Rocio ',' del Real ',' Navarro ');//con espacios=32 sin espacios=24



