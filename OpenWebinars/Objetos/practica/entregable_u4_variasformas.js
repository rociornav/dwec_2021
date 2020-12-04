/**
 * va a cargar únicamente cuando el documento haya sido cargado completamente.
 */
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

function validateName() {
  let campo = document.getElementById("nombre");
  //recojo el valor del nombre
  let name = document.getElementById("nombre").value;
 
  //limpiarError(name);
  document.getElementById("errores").innerHTML ="";

  //si name vacio
  if (name==="") {
    /*
      Si se produce algún error mostrar el mensaje en el contenedor "errores" y 
      poner el foco en los campos correspondientes.
      */
    //error(name);
    document.getElementById("errores").innerHTML ="Error! El campo 'Nombre' no puede estar vacío.";
    document.getElementById("nombre").focus();//lo enfocamos
    // campo.textContent='Mal input';
    // campo.style.color=red;
    return false;
  } else {
    //name existe
    //poner el valor de name en mayuscula al cambiar el foco
    return true;
  }
}

function validateApellido() {
  let campo = document.getElementById("apellidos");
  //recojo el valor del nombre
  let apellido = document.getElementById("apellidos").value;
 
  //limpiarError
  document.getElementById("errores").innerHTML ="";

  //si apellidos vacio
  if (apellido==="") {
    /*
      Si se produce algún error mostrar el mensaje en el contenedor "errores" y 
      poner el foco en los campos correspondientes.
      */
    //error
    document.getElementById("errores").innerHTML ="Error! El campo 'Apellidos' no puede estar vacío.";
    document.getElementById("apellidos").focus();//lo enfocamos
    // campo.textContent='Mal input';
    // campo.style.color=red;
    return false;
  } else {
    return true;
  }
}

// function myFunction(valor) {
//   valor= valor.toUpperCase();
// }


/**FUNCIONA BIEN, PERO NO SE LIMPIA EL ERROR AL PONER UN VALOR VALIDO.
 * Validar la EDAD que contenga solamente valores numéricos y que esté en el rango de 0 a 105.
 *Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el 
 *campo EDAD.
 */


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
        //limpiarError
        document.getElementById("errores").innerHTML =""; //no se limpia correctamente
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

/**
 * Validar el NIF. Utilizar una expresión regular que permita solamente 8 números un guión y una letra. 
 * Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo 
 * NIF. No es necesario validar que la letra sea correcta. 
 */
function validateDNI(){
  const dni=document.getElementById("nif").value;

  //comprobamos si existe el valor dni, es decir, sino esta vacio
  if(dni){
    //comprobamos que sea valido
    const expresionCod=/(\d{8})([-])([A-Z]{1})/;
    /*
    Explicacion de la expresion regular, \d incluye cualquier numero del 0 al 9, el valor{8}significa
    que se deben poner si o si 8 numeros en total , ([-]?) admite el guion opcionalmente, para que sea
    el guion obligatorio quitar la '?',
     y ([A-Z]{1} admite una letra en mayusculas, todo en ese orden. comprobar en: 
      https://www.regextester.com/106533 Nota: siempre obliga a tener el tamaño 10
    */
    if(dni.match(expresionCod)){
      return true;
    }else{
      //error
      document.getElementById("errores").innerHTML ="Error! El campo 'dni' no es valido: formato-->Ej: 11111111-A";
      document.getElementById("nif").focus();//lo enfocamos
      return false;
    }
    
  }else{
    //error
    document.getElementById("errores").innerHTML ="Error! El campo 'dni' no puede estar vacío.";
    document.getElementById("nif").focus();//lo enfocamos
    return false;
  }
}

function validateEmail(){
  const email=document.getElementById("email").value;
  const expresionCod2=/^[^@]+@[^@]+\.[a-zA-Z]{1,}$/;

  //comprobamos que existe email
  if(email){
    if(email.match(expresionCod2)){
      return true;
    }else{
      //error
      document.getElementById("errores").innerHTML ="Error! El campo 'E-mail' no es valido, debe de cumplir con el formato loquesea@loquesea.extension ";
      document.getElementById("email").focus();//lo enfocamos
      return false;
    }
  }else{
    //error
    document.getElementById("errores").innerHTML ="Error! El campo 'E-mail' no puede estar vacío.";
    document.getElementById("email").focus();//lo enfocamos
    return false;
  }
}

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

function validateFecha(){
  let fecha=document.getElementById("fecha").value;

  //comprobamos si está rellena la variable fecha
  if(fecha){
    const expresionCod3=/^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/;
    //comprobamos si es uno de los 2 formatos válidos dd/mm/aaaa o dd-mm-aaaa-->/^(?:0?[1-9]|1[1-2])([\-/])(3[01]|[12][0-9]|0?[1-9])\1\d{4}$/
    //formato dd/mm/aaaa o dd-mm-aaaa o dd.mm.aaaa /^(?:0?[1-9]|1[1-2])([\-/.])(3[01]|[12][0-9]|0?[1-9])\1\d{4}$/
    if(fecha.match(expresionCod3)){
      return true;
    }else{
      // error 
      document.getElementById("errores").innerHTML ="Error! El campo 'Fecha' no cumple ni el formato dd/mm/aaaa ni dd-mm-aaaa";
      document.getElementById("fecha").focus();//lo enfocamos
      return false;
    }
  }else{
    // error 
    document.getElementById("errores").innerHTML ="Error! El campo 'Fecha' no puede estar vacía.";
    document.getElementById("fecha").focus();//lo enfocamos
    return false;
  }

}

function validatePhone(){
  let phone=document.getElementById("telefono").value;

  if(phone){
    const expresionCod4=/(\d{9})/;
    if(phone.match(expresionCod4)){ //no hace falta poner isNaN()
      return true;
    }else{
      // error 
    document.getElementById("errores").innerHTML ="Error! El campo 'Telefono' debe contener 9 números obligatoriamente y unicamente.";
    document.getElementById("telefono").focus();//lo enfocamos
    return false;
    }
  }else{
    // error 
    document.getElementById("errores").innerHTML ="Error! El campo 'Telefono' no puede estar vacío.";
    document.getElementById("telefono").focus();//lo enfocamos
    return false;

  }
}

function validateHora(){ //http://w3.unpocodetodo.info/utiles/regex-ejemplos.php?type=hora
  let time=document.getElementById("hora").value;
  //comprobamos si existe time
  if(time){
    const expresionCod4=/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    if(time.match(expresionCod4)){
      return true;
    }else{
      // error 
    document.getElementById("errores").innerHTML ="Error! El campo 'Hora' no cumple el formato hh:mm para el sistema de 24horas.";
    document.getElementById("hora").focus();//lo enfocamos
    return false;
    }
  }else{
    // error 
    document.getElementById("errores").innerHTML ="Error! El campo 'Hora' no puede estar vacío.";
    document.getElementById("hora").focus();//lo enfocamos
    return false;
  }
}

function validar(e) {
  contadorSuma();
  if (
    validatePersona("nombre") &&
    validatePersona("apellidos") &&
    //validateName() &&
    //validateApellido() &&
    validateEdad() &&
    //validateDNI() &&
    validate("nif") &&
    validate("email") &&
    validateProvincia() &&
    validate("fecha") &&
    validate("telefono") &&
    validate("hora") &&
    //validateEmail() &&
    //validateFecha() &&
    //validatePhone() &&
    //validateHora() &&
    confirm("Pulsa aceptar si deseas enviar el formulario")
  ) {
    return true;
  } else {
    e.preventDefault();
    window.alert("Error, no pusiste bien uno de los campos");
    return false;
  }
}

function contadorSuma(){
  document.cookie="name=galletita; max-age=3600";
  localStorage.setItem("galletita",(parseInt(localStorage.getItem("galletita"))+1));
  document.getElementById("intentos").innerHTML=localStorage.getItem("galletita");
}
//__________________________________
function validate(inputId){
  const input=document.getElementById(inputId);
  let msgError = "";
  let expresionCod = /^()$/;
  // document.getElementById("ok-"+inputId)?.remove();
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
      // showValidate(inputId, true);
      return true;
    } else {
      // error 
      // showValidate(inputId, false);
      document.getElementById("errores").innerHTML = msgError;
      input.focus();//lo enfocamos
      return false;
    }
  } else {
    // error 
    // showValidate(inputId, false);
    document.getElementById("errores").innerHTML = "Error! El campo '"+inputId+"' no puede estar vacío.";
    input.focus();//lo enfocamos
    return false;
  }
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
    // showValidate(inputId, true);
    return true;
  }
}

// function showValidate(inputId, ok) {
//   let txt = document.createElement("b");
//   txt.id = "ok-"+inputId;
//   txt.innerHTML = ok ? "OK" : "KO";
//   document.getElementById(inputId).parentNode.appendChild(txt);
// }
//__________________________________


