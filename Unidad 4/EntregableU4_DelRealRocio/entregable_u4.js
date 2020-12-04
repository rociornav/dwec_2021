//Rocío del Real

window.onload = iniciar;
//document.getElementsByTagName("body")[0].onload=iniciar;


function iniciar() {
  document.getElementById("enviar").addEventListener("click", validar, false);
  
  let nombre=document.getElementById("nombre");
  let apellidos=document.getElementById("apellidos");
  nombre.addEventListener('blur',(e)=>{
    let val=e.target.value;
    nombre.value=val.toUpperCase();
  })
  
  apellidos.addEventListener('blur',(e)=>{
    let val=e.target.value;
    apellidos.value=val.toUpperCase();
  })

 
  //localStorage.setItem("cookie",0);//para restaurar el contador cada vez que se cierre la pagina
}

//para nombre y apellidos
function validatePersona(inputId) {
    let input = document.getElementById(inputId); 
    document.getElementById("errores").innerHTML ="";
    
    if (!input || input.value==="") {
      error(input); //*
      document.getElementById("errores").innerHTML ="Error! El campo '"+inputId+"' no puede estar vacío.";
      //input.focus(); //*
      return false;
    } else {
      /*
      Explicacion expresion regular: que contenga solo letras /(^[A-Za-z]+$)/ y 
      admita acentos y espacios /^[a-zA-Z \u00C0-\u00ff]+$/

      la simbología \u00C0-\u00ff indica que se pueden admitir caracteres acentuados como tildes y dieresis.
      */
      let expresionCod1=/^[a-zA-Z \u00C0-\u00ff]+$/;
      if((input.value).match(expresionCod1)){
        limpiarError(input);//*
        return true;
      }else{
        error(input); //*
        document.getElementById("errores").innerHTML ="Error! El campo '"+inputId+"' no puede contener número.";
        //input.focus();*
        return false;
      }
      limpiarError(input);//*
      return true;
      
    }
  }
//Para edad
function validateEdad(){
  const campo=document.getElementById("edad");
  const edad=document.getElementById("edad").value;
  //limpiarError(campo);//*
  //primero comprobamos si esta vacio el campo edad
  if(edad){
    
    //luego comprobamos si es un numero
    if(isNaN(edad)){ //cuando no es un numero
      //error
      error(campo); //*
      document.getElementById("errores").innerHTML ="Error! El campo 'Edad' debe ser numerico.";
      //document.getElementById("edad").focus();//lo enfocamos
      return false;
    }else{
      //si es numero y NO se encuentra en el intervalo de 0 a 105
      if(edad < 0 ||edad> 105){
         //error
         error(campo); //*
         document.getElementById("errores").innerHTML ="Error! El campo 'Edad' debe ser un valor entre 0 y 105";
         //document.getElementById("edad").focus();//lo enfocamos
         return false;
        
      }else{
        limpiarError(campo);//*
       //si es numero y SI se encuentra en el intervalo de 0 a 105
       return true;
      }
    }
  }else{
    //error
    error(campo); //*
    document.getElementById("errores").innerHTML ="Error! El campo 'Edad' no puede estar vacío.";
    //document.getElementById("edad").focus();//lo enfocamos
    return false;
  }
}

//Para dni, email, fecha, telefono, hora
function validate(inputId){
    const input=document.getElementById(inputId);
    let msgError = "";
    let expresionCod = /^()$/; //para iniciar la variable. ^ -->inicio de una linea $ --> final de una linea
    
    switch(inputId){
      case 'nif':
        /*Explicación: ^ -->inicio de una linea $ --> final de una linea
         \d admite cualquier digito del 0 al 9, {8} indica un tamaño obligatorio
         de 8 digitos seguidos al inicio de la expresion, ([-]) obliga a poner un guión para
         que la expresion sea valida, y finalmente [A-Z]{1} obliga a poner una letra en mayusculas
         solo una.
         */
        expresionCod = /(\d{8})([-])([A-Z]{1})/; 
        msgError = "Error! El campo 'dni' no es valido: formato-->Ej: 11111111-A (letra mayuscula)";
        break;
      case 'email':
        /*Explicación: ^ -->inicio de una linea $ --> final de una linea
        [^@]+ busca cualquier cosa que no sea el @símbolo, una o más veces.
        @ -->busca el @ símbolo.
        +.[a-zA-Z] --> obliga a poner el punto de la extension del email, seguido de letras tanto mayusculas
        como minusculas. Y finalmente, {1,}, significa que la extension debe contener como minimo 
        una letra o más.
        */
        expresionCod = /^[^@]+@[^@]+.[a-zA-Z]{1,}$/;
        msgError = "Error! El campo 'E-mail' no es valido, debe de cumplir con el formato loquesea@loquesea.extension ";
        break;
      case 'fecha':
        /*
        Explicacion: ^ -->inicio de una linea $ --> final de una linea
        ^([0-3][0-9]) admite como principio de la cadena decimas del 10 al 30 para referirse
        a los días, luego como unidades del 0 al 9; [-/] admite tanto barras como guiones (lo pongo alrededor de los meses)
        , es decir, acepta tanto el formato dd/mm/aaaa como dd-mm-aaaa,
         En la parte central de la expresion: ([0-1][0-9]), hace referencia a los meses 0 - 1 para las 
         decenas y 0-9 para la unidad de los meses. 
         Para el año: ([0-9]{4}) valida solo si pone 4 digitos que van del 0 al 9.
        */
        expresionCod = /^([0-3][0-9])[-/]([0-1][0-9])[-/]([0-9]{4})$/; // /^(?:3[01]|[12][0-9]|0?[1-9])([-/.])(0?[1-9]|1[1-2])\1\d{4}$/; // /^([0-3][0-9])[/]([0-1][0-9])[/]([0-9]{4})$/
        msgError = "Error! El campo 'Fecha de Nacimiento' no cumple ni el formato dd/mm/aaaa ni dd-mm-aaaa";
        break;
      case 'telefono':
        /*Explicacion: ^ -->inicio de una linea $ --> final de una linea
        \d admite digitos del 0 al 9, {9} con logitud obligatoria 9.
        */
        expresionCod = /^(\d{9})$/;
        msgError = "Error! El campo 'Telefono' debe contener 9 números obligatoriamente y unicamente.";
        break;
      case 'hora':
        /*Explicacion:  ^ -->inicio de una linea $ --> final de una linea
        Sistema horario de 24 horas en formato hh:mm, 
        atención con los límites: 24:00 no es aceptado, 00:00 sí.

        Explico las partes: el formato completo es hh:mm
        Parte hh:
        1). [01] coge un digito de 0 a 1.
        2). ? --> Indica que el carácter precedente puede ocurrir 0 o 1 vez.
        3). [0-9] --> digitos para la unidad de la hora de 0 a 9.
        4). | --> Alterna entre uno y otro carácter entre los intervalos del paso 3 y del paso 4.
        5). 2[0-3] --> indica que se incluya 2 digitos para el formato hh que rodee desde la hora 20 a 23
        Parte mm:
        6). : --> obliga a que contenga el caracter dos puntos.
        7). [0-5] -->se refiere a las decenas de los minutos del 00 al 50.
        8). [0-9] --> se refiere a las unidades de los minutos del 0 al 9.

        */
        expresionCod = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
        msgError = "Error! El campo 'Hora' no cumple el formato hh:mm para el sistema de 24horas. Nota: limite 00:00";
        break;
    }
  
    //comprobamos si existe
    if (input?.value){
      if (input.value.match(expresionCod)){
        limpiarError(input);//*
        return true;
      } else {
        // error 
        error(input); //*
        document.getElementById("errores").innerHTML = msgError;
        //input.focus();//lo enfocamos
        return false;
      }
    } else {
      // error 
      error(input); //*
      document.getElementById("errores").innerHTML = "Error! El campo '"+inputId+"' no puede estar vacío.";
      //input.focus();//lo enfocamos
      return false;
    }
  }

//Para provincia
function validateProvincia(){ 
  const campo=document.getElementById("provincia");
  //tomo el valor del select de la provincia elegida
  let provinciaElegida;
  provinciaElegida = document.formulario.provincia[document.formulario.provincia.selectedIndex].value; 
  
  //compruebo si la provincia está definida
  if (provinciaElegida != 0) { 
    limpiarError(campo);//*
     //si estaba definido, entonces es correcto.
     return true;
     
  }else{ 
     //si no había provincia seleccionada, error 
    error(campo); //*
    document.getElementById("errores").innerHTML ="Error! No seleccionaste ninguna opción de Provincia.";
    //document.getElementById("provincia").focus();//lo enfocamos
    return false;
  } 
}

function validar(e) {
  //contadorCookieB();
  contadorCookie();
  if (
    validatePersona("nombre") &&
    validatePersona("apellidos") &&
    validateEdad() &&
    validate("nif") &&
    validate("email") &&
    validateProvincia() &&
    validate("fecha") &&
    validate("telefono") &&
    validate("hora") &&
    confirm("Pulsa aceptar si deseas enviar el formulario")
  ) {
    return true;
  } else {
    e.preventDefault();
    window.alert("Error, no pusiste bien uno de los campos");
    return false;
  }
}

//Contador cookie
/*
function contadorCookieB(){
  document.cookie="cookie=0; max-age=3600; path=/";
  localStorage.setItem("cookie",(parseInt(localStorage.getItem("cookie"))+1));
  document.getElementById("intentos").innerHTML=localStorage.getItem("cookie");
}
*/

//contador cookie
let cont=0;
function contadorCookie(){
    cont++;
    let d = new Date();
    d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000); 
    //EXPLICACION:
    //d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000)-->necesario para la fecha de expiracion
    //Nombre de la cookie--> contador, valor de la cookie--> cont (la que marque por cada envio suma 1) 
    //fecha de expiracion--> "expires=" + d.toUTCString() --> duracion maxima de la cookie
    //path=/ --> La ruta debe ser absoluta 
    document.cookie = "contador" + "=" + cont + ";" + "expires=" + d.toUTCString() + ";path=/";
    document.getElementById('intentos').innerHTML = "Intento de Envíos del formulario: " + cont;
}

function error(element){
  element.className = "error";
  element.focus();
}
function limpiarError(elemento){ //no funciona
  elemento.className = "";
  //document.getElementById("errores").innerHTML="";
}


