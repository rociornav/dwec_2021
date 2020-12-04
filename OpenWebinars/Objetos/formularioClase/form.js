window.onload=iniciar;
function iniciar(){
    document.getElementById("enviar").addEventListener("click",validar,false);
}

function validaNombre(){
    let elemento=document.getElementById("nombre");
    limpiarError(elemento);
    if(elemento.value===""){
        alert("el campo NOmbre no puede estar vacío");
        error(elemento);
        return false;
    }
    return true;
}

function validaTelefono(){
    let elemento=document.getElementById("telefono");
    limpiarError(elemento);
    if(elemento.value===""||elemento.isNaN(elemento.value)){
        alert("el campo telefono no puede estar vacío, tiene que ser numerico");
        error(elemento);
        return false;
    }
    return true;

}

function validaFecha(){
    let dia=document.getElementById("dia").value;
    let mes=document.getElementById("mes").value;
    let año=document.getElementById("ano").value;

    let fecha=new Date(ano, mes, dia);

    if(dia===""||mes===""||ano===""||isNaN(fecha)){
        alert("Los campos de la fecha son incorrectos.");
        return false;
    }
    return true;
}

function validaCheck(){
    let campoCheck=document.getElementById("mayor");
    if(!campoCheck.checked){
        alert("Debe ser mayor de edad");
        return false;
    }
    return true;
}

function validar(e){
    if(
validaNombre() &&
validaTelefono() &&
validaFecha() &&
confirm("Pulsa aceptar si deseas enviar el formulario")
    ){
return true;
    }else{
        e.preventDefault();
        return false;
    }
}

function error(elemento){
    elemento.className="error";
    elemento.focus();
}

function limpiarError(elemento){
    elemento.className="";
}