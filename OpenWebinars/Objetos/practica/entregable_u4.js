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
  localStorage.setItem("galletita",0);//para restaurar el contador cada vez que se cierre la pagina
}

//para nombre y apellidos
function validatePersona(inputId) {
    let input = document.getElementById(inputId); 
    document.getElementById("errores").innerHTML ="";
  
    if (!input || input.value==="") {
      // showValidate(inputId, false);
      document.getElementById("errores").innerHTML ="Error! El campo '"+inputId+"' no puede estar vacío.";
      input.focus();
      return false;
    } else {
      return true;
    }
  }
//Para edad
function validateEdad(){
  const edad=document.getElementById("edad").value;
  
  //primero comprobamos si esta vacio el campo edad
  if(edad){
    
    //luego comprobamos si es un numero
    if(isNaN(edad)){ //cuando no es un numero
      //error
      document.getElementById("errores").innerHTML ="Error! El campo 'Edad' debe ser numerico.";
      document.getElementById("edad").focus();//lo enfocamos
      return false;
    }else{
      //si es numero y NO se encuentra en el intervalo de 0 a 105
      if(edad < 0 ||edad> 105){
         //error
         document.getElementById("errores").innerHTML ="Error! El campo 'Edad' debe ser un valor entre 0 y 105";
         document.getElementById("edad").focus();//lo enfocamos
         return false;
        
      }else{
       //si es numero y SI se encuentra en el intervalo de 0 a 105
       return true;
      }
      
    }
    
  }else{
    //error
    document.getElementById("errores").innerHTML ="Error! El campo 'Edad' no puede estar vacío.";
    document.getElementById("edad").focus();//lo enfocamos
    return false;
  }
  
}

//Para dni, email, fecha, telefono, hora
function validate(inputId){
    const input=document.getElementById(inputId);
    let msgError = "";
    let expresionCod = /^()$/;
    switch(inputId){
      case 'nif':
        expresionCod = /(\d{8})([-])([A-Z]{1})/;
        msgError = "Error! El campo 'dni' no es valido: formato-->Ej: 11111111-A";
        break;
      case 'email':
        expresionCod = /^[^@]+@[^@]+.[a-zA-Z]{1,}$/;
        msgError = "Error! El campo 'E-mail' no es valido, debe de cumplir con el formato loquesea@loquesea.extension ";
        break;
      case 'fecha':
        expresionCod = /^(?:3[01]|[12][0-9]|0?[1-9])([-/.])(0?[1-9]|1[1-2])\1\d{4}$/;
        msgError = "Error! El campo 'Fecha' no cumple ni el formato dd/mm/aaaa ni dd-mm-aaaa";
        break;
      case 'telefono':
        expresionCod = /(\d{9})/;
        msgError = "Error! El campo 'Telefono' debe contener 9 números obligatoriamente y unicamente.";
        break;
      case 'hora':
        expresionCod = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
        msgError = "Error! El campo 'Hora' no cumple el formato hh:mm para el sistema de 24horas.";
        break;
    }
  
    //comprobamos si existe
    if (input?.value){
      if (input.value.match(expresionCod)){
        return true;
      } else {
        // error 
        document.getElementById("errores").innerHTML = msgError;
        input.focus();//lo enfocamos
        return false;
      }
    } else {
      // error 
      document.getElementById("errores").innerHTML = "Error! El campo '"+inputId+"' no puede estar vacío.";
      input.focus();//lo enfocamos
      return false;
    }
  }

  //Para provincia

function validateProvincia(){ 
  //tomo el valor del select de la provincia elegida
  let provinciaElegida;
  provinciaElegida = document.formulario.provincia[document.formulario.provincia.selectedIndex].value; 
  //compruebo si la provincia está definida
  document.getElementById("errores").innerHTML ="";
  if (provinciaElegida != 0) { 
     //si estaba definido, entonces es correcto.
     return true;
     
  }else{ 
     //si no había provincia seleccionada, error 
    document.getElementById("errores").innerHTML ="Error! No seleccionaste ninguna opción de Provincia.";
    document.getElementById("provincia").focus();//lo enfocamos
    return false;
  } 
}

function validar(e) {
  contadorSuma();
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
function contadorSuma(){
  document.cookie="name=galletita; max-age=3600";
  localStorage.setItem("galletita",(parseInt(localStorage.getItem("galletita"))+1));
  document.getElementById("intentos").innerHTML=localStorage.getItem("galletita");
}


