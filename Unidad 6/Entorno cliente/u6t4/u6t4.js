/*Rocío del Real 

U6T4 - JSON
Crea un archivo json equivalente al XML que creaste en el ejercicio anterior y comprueba su 
funcionamiento con el JSON Viewer(http://jsonviewer.stack.hu/).

Basándote en el ejemplo de la frutería, procesa el JSON de manera que obtengas el mismo resultado 
que obtuviste en el ejercicio anterior (la tabla de las series con las especificaciones dadas).
Recuerda que solamente tendrás que modificar los siguientes archivos:

datosjson.php: donde modificarás el XML por el JSON. (?????)
Index.js: donde procesarás los datos teniendo en cuenta que se trata de un archivo JSON.
Utiliza una petición de tipo GET.

*/

//IMPORTANTE PROBARLO DENTRO DE LA RUTA: http://localhost:8090/u6t4/u6t4.html
function peticioname() {
    //Hacemos la peticion con comunicacion asincrona
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8090/u6t4/datosjson.php", true); //le pasamos como parametro la url o ruta del archivo php 
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
        if (xhr.status === 200) {
            const seriesJson=JSON.parse(xhr.responseText); //nos devuelve como respuesta un json-> https://www.w3schools.com/js/js_json_parse.asp
            cargarJSON(seriesJson); 
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
  
  function cargarJSON(respuestaEnJSON) {
    //console.log(respuestaEnJSON); //comprobamos el contenido del json
  
    const divTabla = document.getElementById("generarTabla");
  
    //***creamos la tabla en el dom***
    const tablaElem = document.createElement("table");
    tablaElem.id = "tablaSeries";
  
    const filaHeaderElem=document.createElement("tr");
    const headers = ["Titulo","Cadena","Director","Anyo","Terminada"];
    headers.map((elemento)=>{
      const thElem=document.createElement("th");
      thElem.innerText=elemento;
      filaHeaderElem.appendChild(thElem);
    })
    tablaElem.appendChild(filaHeaderElem);
  
    //Vamos a extraer los elementos <serie>
    const arraySeries=respuestaEnJSON.series;
    arraySeries.map((serie)=>{
      const filaElem=document.createElement("tr");
      const colums = ["titulo","cadena","director","anyo","terminada"];
      colums.map((elemento)=>{
        const tdElem=document.createElement("td");
        const valor=serie[elemento]; //!!
        if(elemento=="terminada"){
          const imagen=document.createElement("img");
          imagen.src= "./"+valor.toLowerCase()+".jpg";
          tdElem.appendChild(imagen);
        }else{
          tdElem.innerText=valor;
        }
        
        if(elemento=="anyo"){
          if(valor<=2000) tdElem.className="rojo";
          if(valor>=2001&&valor<=2010) tdElem.className="amarillo";
          if(valor>=2011) tdElem.className="verde";
        }else{
          tdElem.className=elemento;
        }
        
        filaElem.appendChild(tdElem);
      })
      tablaElem.appendChild(filaElem);
    })
  
    divTabla.appendChild(tablaElem);
  }
  