/* VERSION PARA TERMINAL O CONSOLA.

Rocío del Real 

U3T4 - String - Ejercicio 2
-----------

Crea un programa que pida al usuario una propuesta de contraseña y  compruebe si cumple con los siguientes requisitos.

Tiene entre 8 y 16 caracteres.
Tiene una letra mayúscula.
Tiene una letra minúscula.
Tiene un número.
Tiene uno de los siguientes valores: guión alto, guión bajo, arroba,  almohadilla, dólar, tanto por ciento o ampersand.
Si cumple con todos los requisitos se considera una contraseña segura, de lo  contrario mostrará que es una contraseña no segura.
*/

//let password=prompt("Dame una contraseña: ");


/* Check Functions */

function lengthCheck(pass) {
    //Check: Longitud de contraseña

    return pass.length >= 8 && pass.length <= 16; 
}

function mayusCheck(pass) {
    //Check: Tiene una letra mayúscula.

    for (var i = 0; i < pass.length; i++) {
        if (isNaN(pass.charAt(i)) && pass.charAt(i).toUpperCase() === pass.charAt(i)) {
            return true;
        }
    }
    return false;
}

function minusCheck(pass) {
    //Check: Tiene una letra minúscula.

    for (var i = 0; i< pass.length; i++) {
        if (isNaN(pass.charAt(i)) && pass.charAt(i).toLowerCase() === pass.charAt(i)) {
            return true;
        }
    }
    return false;
}

function numberCheck(pass) {
    //Check: Tiene un número.
    /*
    /^[0-9]+$/ significa que será valida la cadena que tenga desde el principio hasta el final (da igual la longitud) caracteres 
    comprendidos entre 0 y 9 y que al menos haya 1
    */

    let valoresAceptados = /([0-9])/;
    return pass.match(valoresAceptados);
}

function specialCharsCheck(pass) {
    //Check: caracteres especiales, esta parte me funciona por separado 

    let caracteres="-_@#$%&";
    for (const caracter of caracteres) {
        if (pass.includes(caracter)){
            //console.log("contiene un caracter especial al menos.")
            return true;
        }
    }
    return false;    
}

function checkPassword(password1){
    const esSegura = lengthCheck(password1) && mayusCheck(password1) && minusCheck(password1) && numberCheck(password1) && specialCharsCheck(password1);

    if (esSegura){
        console.log("SI es segura");
    } else {
        console.log("NO es segura");
    }
}


checkPassword("Rociodaw2#");