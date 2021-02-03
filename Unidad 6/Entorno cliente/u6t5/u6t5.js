/*
U6T5 - POST con JSON a una BD
Hemos creado una BD en el servidor con las series que hemos hecho en el ejercicio anterior. 
El esquema es el mismo:

Título de la serie
Director
Cadena
Año
Terminada
Realiza una web que tengan los inputs necesarios para introducir la información de una serie, 
y que al pulsar un botón, mande una petición POST con un único parámetro llamado "objeto" que contenga 
el JSON con la siguiente estructura (se muestran datos de ejemplo):

{
  "titulo" : "nombre de la serie",
  "director" : "nombre del director",
  "cadena" : "nombre de la cadena",
  "anyo" : 2000,
  "terminada" : true
}
El servidor devolverá "ok" o una cadena con el error si no se ha podido insertar correctamente.

{ "ok" }
{ "Error al insertar en la BD" }
Con la respuesta, deberás pintarla en un contenedor div, que tendrá el texto en verde si es "ok" y en 
rojo si es un error (cualquier otra cadena). Para probar que no funciona correctamente, puedes introducir 
una cadena de texto en el campo "anyo".
*/

function peticioname(objetoParam) {
    //Hacemos la peticion con comunicacion asincrona
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "create_serie.php", true); //la url del php por parametro
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            const respuestaJSON=JSON.parse(xhr.responseText);
            respuestaServer(respuestaJSON);
        } else {
          console.error(xhr.statusText);
        }
      }
    };
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
    // xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded"); como lo tiene el profe
    const param = JSON.stringify(objetoParam);
    // xhr.send("objeto="+param); como lo tiene el profe
    xhr.send(param);
  }

  function respuestaServer(respuesta){
    const rdoDiv=document.getElementById("msg");
    // if(respuesta=="ok"){
    //     rdoDiv.innerText=respuesta;
    //     rdoDiv.className="verde";
    // }else{
    //     rdoDiv.innerText=respuesta;
    //     rdoDiv.className="rojo";
    // }
    rdoDiv.innerText=respuesta;
    rdoDiv.className=respuesta=="ok" ? "verde" : "rojo";
}

  function enviar(){
    const titulo = document.getElementById('title').value;
    const director = document.getElementById('director').value;
    const cadena = document.getElementById('cadena').value;
    const anyo = document.getElementById('anyo').value;
    const terminada = document.getElementById('terminada').checked;
    const obj = {
        titulo: titulo,
        director: director,
        cadena: cadena,
        anyo: parseInt(anyo),
        terminada: terminada
    };
    peticioname(obj);
  }


