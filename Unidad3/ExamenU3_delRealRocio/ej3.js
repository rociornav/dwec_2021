/*
del Real, Rocío. 
Ejercicio 3

Un arquitecto de dudosa entereza moral, pretende vender parcelas comisionando a acaudalados
incautos. En la base de datos del arquitecto, las parcelas y sus compradores están codificadas
de la siguiente manera:

municipio:cod_parcela@nombre|apellido1|apellido2  Ej: carmona10:aBcd1234@rocio|delReal|Navarro

Donde municipio es el municipio al que pertenece la parcela, cod_parcela es el código catastral 
de la parcela compuesto de 4 letras y 4 números (en ese orden), nombre es el nombre del comprador, 
apellido1 su primer apellido y apellido2 el segundo.

Elabora el código en JavaScript para obtener por separado el municipio, la parcela (dividido el 
código en las letras y los números correspondientes), el nombre, y los apellidos (los dos juntos
 y en una única línea). Cada uno debe presentarse en un elemento (p o div, como quieras) de HTML.
*/

function formatoParcelas(){
    //compruebo que el campo para introducir la cadena existe. Y recojo su valor
    const cad=document.getElementById("cadena").value;

    //comprobar si la cad existe o no esta vacia
    if(cad && cad!=''){
        //Busco el municipio: vale cualquier caracter
        let trozos1 = cad.split(":");
        //Validación municipio
       // const expresion1=/^[A-Za-z]+$/; ///^[A-Za-z]+$/ solo letras
        if(trozos1[0]){
            //pintamos el municipio en html si cumple la condicion
            document.getElementById('municipio').innerHTML+= "<li>Municipio: "+trozos1[0]+"</li>"; 
        }else{
            //sino mensaje de error
            alert("Error en municipio: no puede estar vacío!");
        }

         //Validar cod_parcel: Trabajo con trozos1[1]-->cod_parcela@nombre|apellido1|apellido2 para sacar el cod_parcela(4letrasy4numeros)
        const cod_parcela = trozos1[1].split("@");
        const expresionCod=/[A-z]{4}\d{4}/g; //asi si funciona
        if(cod_parcela[0].length==8 &&cod_parcela[0].match(expresionCod)){
            document.getElementById('cod_parcela').innerHTML+= "<li>Código parcela: "+cod_parcela[0]+"</li>";
        }else{
            //mensaje de error
            alert("Error en cod_parcela: no puede estar vacío y debe cumplir el orden de 4letras y 4 numeros. Ej: aBcr1238");
        }

        //Validar nombre del comprador: trabajo con cod_parcela[1]-->nombre|apellido1|apellido2 para sacar el cod_parcela(4letrasy4numeros)
        const name = cod_parcela[1].split("|"); //el nombre está en name[0]
        const expresionName=/^[A-Za-z]+$/;//solo letras
        if(name[0].match(expresionName)){
            document.getElementById('nombre').innerHTML+= "<li>Nombre del comprador: "+name[0]+"</li>";
        }else{
            //error
            alert("Error en nombre del comprador: no puede estar vacío y debe contener sólo letras");

        }

        //Validar apellidos: trabajo con name[1]=apellido1 y name[2]=apellido2, deben ser solo letras y debemos juntarlos
        if(name[1].match(expresionName)&&name[2].match(expresionName)){
            document.getElementById('apellidos').innerHTML+= "<li>Apellidos: "+name[1]+name[2]+"</li>";
        }else{
            //error
            alert("Error en apellidos: no puede estar vacío y debe contener sólo letras");
        }

    }else{
        //cadena vacía o no existe.
        alert("Error. No escribiste nada, escribe algo en el formato municipio:cod_parcela@nombre|apellido1|apellido2 porfavor.")
    }


   


}