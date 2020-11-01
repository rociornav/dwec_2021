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

function checkPassword(password1){
    let esSegura=true;
    while(esSegura){
        //Comprobamos tamaño
        if(password1.length < 8 || password1.length >16){
            esSegura = false;
            break;
            //console.log("NO es segura");
        }else{
            //console.log("SI es segura");
        }
        //Check:Tiene una letra mayúscula.
        let hayMayuscula=false;
        for (var i = 0; i< password1.length; i++) {
            
            if( password1.charAt(i).toUpperCase()=== password1.charAt(i)) {
                hayMayuscula=true;
                break
            }
        }
        if(hayMayuscula==false){
            esSegura=false;
            break;
        }

        //check: Tiene una letra minúscula.
        let hayMinuscula=false;
        for (var i = 0; i< password1.length; i++) {
            
            if( password1.charAt(i).toLowerCase()=== password1.charAt(i)) {
                hayMinuscula=true;
                break;
            }
        }
        if(hayMinuscula==false){
            esSegura=false;
            break;
        }
        //check: Tiene un número.
        /*
        /^[0-9]+$/ significa que será valida la cadena que tenga desde el principio hasta el final (da igual la longitud) caracteres 
        comprendidos entre 0 y 9 y que al menos haya 1
        */
       let valoresAceptados = /^[0-9]+$/;
       let hayNumero=false;
       if (password1.match(valoresAceptados)){
          //alert ("Es numérico");
          hayNumero=true;
          
       }else{ //si no hay numero
           break;
       }

       //check: caracteres especiales, esta parte no me funciona correctamente. SOLUCIONAAAR-->lo saco en otra funcion
      /* let caracteres="-_@#$%&";
        let hayEspecial=false;
        for (const caracter of caracteres) {
            if(password1.includes(caracter)){
                console.log("contiene un caracter especial al menos.")
                hayEspecial=true;
                break;
            }
        }
        if(!hayEspecial){
            esSegura=false;
        }*/

        /*ASI TMPOCO FUNCIONA*/
        if(!tieneCaracter(password1)){
            esSegura=false;
            break;
        }

       
        //Para salir del bucle en caso de que se cumplan los requisitos
        if(esSegura){
            break;
        }
    }


    if(esSegura){
        console.log("SI es segura");
    }else{
        console.log("NO es segura");
    }
}

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


checkPassword("Rociodaw2#");