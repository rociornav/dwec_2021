/*
U6T3 - XML
A partir de los ficheros que permiten procesar un XML, modifícalos de manera que el XML a procesar lo 
hayas creado tu mismo con los siguientes datos:

Series: será el elemento principal del XML.
Serie: contendrá los datos de una serie en concreto, que serán:
Título: nombre de la serie.
Cadena: nombre de la cadena que produce la serie (HBO, FX, etc.)
Director: nombre del director de la serie.
Año: año de estreno de la serie.
Terminada: podrá contener un valor “sí” o “no” en función si ha terminado o no su emisión.
Al procesar el XML se mostrarán todos los datos en una tabla. Tendrá las siguientes condiciones:

El título y el director: el título será negrita, y el director en cursiva.
El año aparecerá en color rojo si la serie es anterior al año 2000, en amarillo si está entre el 2001 y 
el 2010 y en verde si es posterior al 2011. Estas variaciones se recogen en un archivo en CSS con reglas, 
como por ejemplo .rojo, .amarillo o .verde.
En la celda “terminada” habrá una imagen determinada en caso de que en el XML se registre un Sí o un No.
*/

//IMPORTANTE PROBARLO DENTRO DE LA RUTA: http://localhost:8090/U6T3-XML/u6t3.html
function peticioname() {
  //Hacemos la peticion con comunicacion asincrona
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "series.xml", true);
  xhr.onload = function (e) {
    if (xhr.readyState === 4) {
      //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
      if (xhr.status === 200) {
        cargarXML(xhr); //o xhr.responseText  ???-->no porque busca leer el contenido de un xml, podriamos poner xhr.responseXML
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

function cargarXML(respuesta) {
  //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseXML
  const contenidoXML = respuesta.responseXML;
  //console.log(contenidoXML);

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

  //Vamos a extraer de series.xml todos los elementos <serie>
  const seriesArray = Array.from(contenidoXML.getElementsByTagName("serie"));
  seriesArray.map((serie)=>{
    const filaElem=document.createElement("tr");
    const colums = ["titulo","cadena","director","anyo","terminada"];
    colums.map((elemento)=>{
      const tdElem=document.createElement("td");
      const valor=serie.getElementsByTagName(elemento)[0].textContent;
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

  // tablaElem.innerHTML =
  //   "<tr><th>Titulo</th><th>Cadena</th><th>Director</th><th>Anyo</th><th>Terminada</th></tr>";

  // //Vamos a extraer de series.xml todos los elementos <serie>
  //const seriesArray = contenidoXML.getElementsByTagName("serie");

  // for (let i = 0; i < seriesArray.length; i++) {
  //   tablaElem.innerHTML +=
  //     "<tr><td>" + 
  //     seriesArray[i].getElementsByTagName("titulo")[0].textContent +
  //     "</td><td>" +
  //     seriesArray[i].getElementsByTagName("cadena")[0].textContent +
  //     "</td><td>" +
  //     seriesArray[i].getElementsByTagName("director")[0].textContent +
  //     "</td><td>" +
  //     seriesArray[i].getElementsByTagName("anyo")[0].textContent +
  //     "</td><td>" +
  //     seriesArray[i].getElementsByTagName("terminada")[0].textContent +
  //     "</td></tr>";
  // }
}
function enviar() {
  peticioname();
}
