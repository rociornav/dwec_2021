
//Rocío del Real

window.onload = iniciar;


function iniciar() {
  document.getElementById("enviar").addEventListener("click", validar, false);
  set_cookie("tirada", getRandomInt(1,7), 1);
  document.getElementById('tiradas').innerHTML = "Tiradas cookie (Firefox): " + get_cookie("tirada");
}

//para nombre
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
        correct(input);//lo enfocamos en verde si esta bien
        //limpiarError(input);
        return true;
      }else{
        error(input); //*
        document.getElementById("errores").innerHTML ="Error! El campo '"+inputId+"' no puede contener número.";
        return false;
      }
    }
  }
//2.	El año deberá ser un número entre 700 y 8000 (ambos incluidos).
function year(){
    const campo=document.getElementById("ano");
    let year = document.getElementById("ano").value; 
    document.getElementById("errores").innerHTML ="";
    //primero comprobamos si esta vacio el campo año
  if(year){
    //luego comprobamos si es un numero
    if(isNaN(year)){ //cuando no es un numero
      //error
      error(campo); //*
      document.getElementById("errores").innerHTML ="Error! El campo 'Año' debe ser numerico.";
      return false;
    }else{
      //El año deberá ser un número entre 700 y 8000 (ambos incluidos). En caso de que no lo sea
      if(year<700 ||year>8000){
         //error
         error(campo); 
         document.getElementById("errores").innerHTML ="Error! El campo 'Año' debe ser un valor entre 700 y 8000 (incluidos)";
         return false;
        
      }else{
        correct(campo);//lo enfocamos en verde si esta bien
        //limpiarError(campo);//*
       //si es numero y SI se encuentra en el intervalo de 700 a 8000 incluidos
       return true;
      }
    }
  }else{
    //error
    error(campo); //*
    document.getElementById("errores").innerHTML ="Error! El campo 'Año' no puede estar vacío.";
    return false;
  }
}

//3.	Las habilidades deberá ser cualquiera de los siguientes valores: M WS BS S T W A Ld Sv
function habilidades(){
    let campo=document.getElementById("hab");
    //let habilidad = document.getElementById("hab").value; 
    

    if (!campo || campo.value==="") {
        error(campo); //*
        document.getElementById("errores").innerHTML ="Error! El campo 'Habilidades' no puede estar vacío.";
        return false;
      } else {
        //Explicacion: recoge todos los valores que se admiten, uno u otro.
        const expresionCod =/^(M|WS|BS|S|T|W|A|Ld|Sv)*$/;
        if((campo.value).match(expresionCod)){
          correct(campo);//lo enfocamos en verde si esta bien
          //limpiarError(campo);
          return true;
        }else{
          error(campo); 
          document.getElementById("errores").innerHTML ="Error! El campo 'Habilidades' debe ser un valor de M|WS|BS|S|T|W|A|Ld|Sv .";
          return false;
        }
      }
}

/*
Tirada
*/
function tiradaHerir(){
    let campo=document.getElementById("herir");

    if (!campo || campo.value==="") {
        error(campo); 
        document.getElementById("errores").innerHTML ="Error! El campo 'Tirada herir' no puede estar vacío.";
        return false;
      } else {
        
        correct(campo);//lo enfocamos en verde si esta bien
        return true;
        
      }
}
/*5. El seleccionable para el Rol deberá tener una de las opciones posibles: Líder, Combate, Comunicaciones, Demoliciones o Fanático. 
No debe estar seleccionado ninguno al comienzo.*/

function selectRol(){
    const campo=document.getElementById("rol");
  //tomo el valor del select de la provincia elegida
  let rolElegido=campo.value;
  
  
  //compruebo si la provincia está definida
  if (rolElegido != 0) { 
    correct(campo);//lo enfocamos en verde si esta bien
    //limpiarError(campo);
     //si estaba definido, entonces es correcto.
     return true;
  }else{ 
     //si no había rol seleccionado, error 
    error(campo); //*
    document.getElementById("errores").innerHTML ="Error! No seleccionaste ninguna opción de *ROL*.";
    return false;
  } 
}
/*
Password
*/
function passwordFormat(){
   
    let campo=document.getElementById("pass");

    if (!campo || campo.value==="") {
        error(campo); //*
        document.getElementById("errores").innerHTML ="Error! El campo 'Contraseña' no puede estar vacío.";
        return false;
      } else {
        /*Explicacion: 
        ^ --> inicio de la expresion
        $ --> final de expresion
        [A-Z]{2}-->2 mayusculas
        [!"#$%&'()*+,\-./;<=>?@[\\\]^_`{|}~]{1} --> un solo caracter especial excepto ':'
        [a-zA-Z]{8,} --> una palabra de al menos 8 de longitud
        [#]{1} --> una almohadilla
        [0-9]{2} --> 2 digitos
        */
        const expresionReg=/^[A-Z]{2}[!"#$%&'()*+,\-./;<=>?@[\\\]^_`{|}~]{1}[a-zA-Z]{8,}[#]{1}[0-9]{2}$/;
        if((campo.value).match(expresionReg)){
          correct(campo);//lo enfocamos en verde si esta bien
          /* limpiarError(campo); */
          return true;
        }else{
          error(campo); 
          document.getElementById("errores").innerHTML ="Error! El campo 'Contraseña' debe ser un valor que respete el formato del enunciado. Ej: AB$holarocio#12 ";
          return false;
        }
      }
}
function validar(e) {
  set_cookie("tirada", getRandomInt(1,7), 1);
  document.getElementById('tiradas').innerHTML = "Tiradas cookie (Firefox): " + get_cookie("tirada");
    if (
      validatePersona("nombre") &&
      year() &&
      habilidades()&&
      selectRol()&&
      passwordFormat() &&
      tiradaHerir()&&
      confirm("Pulsa aceptar si deseas enviar el formulario")
    ) {
      return true;
    } else {
      e.preventDefault();
      window.alert("Error, no pusiste bien uno de los campos");
      return false;
    }
  }

  function error(element){
    element.className = "error";
    element.focus();
  }
  /* function limpiarError(elemento){ 
    elemento.className = "";
    //document.getElementById("errores").innerHTML="";
  } */
  function correct(element){
    element.className = "correct";
    element.focus();
  }
  //cookies
  //numero aleatorio de 1 a 6 incluidos
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let get_cookie = (nombre) => {
    let nom = nombre + "=";
    let array = document.cookie.split(";");
    for (let i = 0; i < array.length; i++) {
        let c = array[i];
        console.log(c);
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(nom) == 0) {
            return c.substring(nom.length);
        }
    }
    return "";
  }
  
  let set_cookie = (nombre, valor, expiracion) => {
    if (get_cookie("tirada") == "") {
        let d = new Date();
        d.setTime(d.getTime() + expiracion * 24 * 60 * 60 * 1000);
        expiracion = "expires=" + d.toUTCString();
        document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
    } else {
        let d = new Date();
        d.setTime(d.getTime() + expiracion * 24 * 60 * 60 * 1000);
        expiracion = "expires=" + d.toUTCString();
        //almaceno el aleatorio en la cookie
        document.cookie = nombre + "=" + getRandomInt(1,7)  + ";" + expiracion + ";path=/";
    }
  }