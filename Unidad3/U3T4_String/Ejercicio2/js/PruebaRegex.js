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

    return pass.match(/([A-Z])/);
}

function minusCheck(pass) {
    //Check: Tiene una letra minúscula.

    return pass.match(/([a-z])/);
}

function numberCheck(pass) {
    //Check: Tiene un número.

    return pass.match(/([0-9])/);
}

function specialCharsCheck(pass) {
    //Check: caracteres especiales, esta parte me funciona por separado 

    return pass.match(/([-_@#$%&])/);    
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