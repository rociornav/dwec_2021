/*
-Una página con HTML que tenga un input de tipo texto y un botón: 
cuando el usuario introduzca el nombre de una localidad y pulse el botón obtendrá, 
en un div “resultado”, un mensaje que indicará  si la ciudad está incluida dentro de una lista de 
ciudades o no. El mensaje será rojo si no está incluida y verde en caso afirmativo.
*/
let tipoPeticion="";
function peticionXHR(localidad){
    //Hacemos la peticion con comunicacion asincrona
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "u6t2.php?localidadName="+localidad, true); //la url del php por parametro //localidadName poner el mismo nombre que esta en php
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            localidadExiste(xhr.responseText=="true");
        //    armasArray=JSON.parse(xhr.responseText);
           tipoPeticion="XMLHttpRequest";
        //    crearTabla();
        } else {
          console.error(xhr.statusText);
        }
      }
    };
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
    xhr.send(null);
}
function localidadExiste(respuesta){
    const messageDiv=document.getElementById("resultado");
    if(respuesta){
        messageDiv.innerText="SI Existe";
        messageDiv.className="verde"; //con comillas!
    }else{
        messageDiv.innerText="NO Existe";
        messageDiv.className="rojo";
    }
}

function init(){
    const pElem=document.createElement("p");
    const buttonElem=document.createElement("button");
    buttonElem.id="btn1";
    buttonElem.type="button";
    buttonElem.innerText="Enviar";
    buttonElem.onclick= ()=>{peticionXHR(document.getElementById("localidadN").value);};
    const inputElem=document.createElement("input");
    inputElem.type="text";
    inputElem.id="localidadN";
    inputElem.name="localidadN";
    const labelElem=document.createElement("label");
    labelElem.innerText="Introduce una localidad: ";

    document.getElementById("root").appendChild(pElem);
    pElem.appendChild(labelElem);
    pElem.appendChild(inputElem);
    pElem.appendChild(buttonElem);
}

window.onload=init;