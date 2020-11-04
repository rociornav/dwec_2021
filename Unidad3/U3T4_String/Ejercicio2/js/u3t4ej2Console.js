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

https://desarrolloweb.com/articulos/funciones-validacion-alfanumerica-string-javascript.html 
*/

//let password=prompt("Dame una contraseña: ");

//METODOS PARA VALIDAR CONTRASEÑA
/**Función1. para comprobar tamaño de [8, 16]*/
function tamValido(password1){
     if(password1.length < 8 || password1.length >16){
        return false;//no valida
    }else{
        return true;//sí valida
    } 
}
// console.log(tamValido("rociohola")); //debe dar true
// console.log(tamValido("hola")); //debe dar false

/**Función2. para comprobar que tiene al menos una letra mayuscula */
function hayMayus(password1){
    let hayMayuscula=false;
    for (let i = 0; i< password1.length; i++) {
        
        if( password1.charAt(i).toUpperCase()=== password1.charAt(i)) {
            hayMayuscula= true;
        }
    }
    return hayMayuscula;
}
/*  console.log(hayMayus("rocioR"));//debe dar true
console.log(hayMayus("holaaa"));//debe dar false  */


/**Función3. para comprobar que tiene al menos una letra minuscula */
function hayMinus(password1){
 let hayMinuscula=false;
 for (let i = 0; i< password1.length; i++) {
     if( password1.charAt(i).toLowerCase()=== password1.charAt(i)) {
         hayMinuscula=true;
     }
 }
 return hayMinuscula;
}
/* console.log(hayMinus("ROMA"));//debe dar false
console.log(hayMinus("ROMAnO"));//debe dar true */


/**Función 4. Tiene al menos un número */
/* function hayNum(password1){  NO FUNCIONA
        
        /^[0-9]+$/ significa que será valida la cadena que tenga desde el principio hasta el final (da igual la longitud) caracteres 
        comprendidos entre 0 y 9 y que al menos haya 1
        
       let valoresAceptados = /^[0-9]+$/;
       let hayNumero=false;
       if (password1.match(valoresAceptados)){
          hayNumero=true;
       }
       return hayNumero;
} */
/* console.log(hayNum("hol4mundo"));//true
console.log(hayNum("holamundo"));//false
console.log(hayNum("hola12mjk"));//true */
function hayNum2(password1){
    let numeros="0123456789";
    for(let i=0; i<password1.length; i++){
        if (numeros.indexOf(password1.charAt(i),0)!=-1){
           return true;
        }
     }
     return false;
}
/* console.log(hayNum2("hol4mundo"));//true
console.log(hayNum2("holamundo"));//false
console.log(hayNum2("hola12mjk"));//true  */

//saco esta funcion fuera para comprobar si hay un caracter especial ya que dentro de la funcion checkPassword() no iba bien
function tieneCaracter(cadena){
   
    //check: caracteres especiales, esta parte me funciona por separado 
    let caracteres="-_@#$%&";
    let hayEspecial=false;
    for (const caracter of caracteres) {
         if(cadena.includes(caracter)){
             //console.log("contiene un caracter especial al menos.")
             hayEspecial = true;
         }
     }
     return hayEspecial;
}

function checkPassword(password1){
    if(tieneCaracter(password1)&&hayNum2(password1)&&hayMinus(password1)&&hayMayus(password1)&&tamValido(password1)){
        console.log("Su contraseña es segura.");
    }else{
        console.log("Su contraseña NO es segura.");
    }
}
checkPassword("Rocio$93delr"); //es segura
checkPassword("Rocio93delr"); //NO es segura