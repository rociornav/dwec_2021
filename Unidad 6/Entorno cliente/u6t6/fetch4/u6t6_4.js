/*Rocío del Real (Adaptamos el u6t4 a fetch): url --> http://localhost:8090/u6t6/fetch4/u6t6_4.html

U6T6 - POST con JSON a una BD - usando Fetch
Realiza los dos ejercicios anteriores utilizando Fetch.

Esta vez, realiza una única web. Construye un diseño en el que la web esté dividida en dos partes, 
una para mostrar resultados, y otra para insertar nuevos datos. En esta ocasión, cuando se inserten 
nuevos datos y llegue la respuesta "ok" de que se ha insertado en la base de datos, se deberá mostrar 
la tabla de series actualizada como si el usuario hubiese dado al botón mostrar. Se tendrá que hacer 
la petición de insertar una serie al fichero create_series.php mediante método POST con un header de 
Content-type como application/x-www-form-urlencoded y pasando un parámetro llamado "objeto". Y para 
listar las series, al fichero (URL) listar_series.php mediante un método GET.

*/


  //CREO LA FUNCION FETCH y recupero los datos del json con get a través del fichero datosjson.php que contiene el json
  function peticionFetch(){
    fetch('datosjson.php') //le pasamos la url del archivo php
    .then( response => {
        if(response.status == 200) {
        return response.text();
        } else {
        throw "Respuesta incorrecta del servidor";
        }
    })
    .then( responseText => {
        const seriesJson = JSON.parse(responseText); ////nos devuelve como respuesta un json. Duda: .results ?¿
        // console.log('Comprobamos', seriesJson);
        cargarJSON(seriesJson);
    })
    .catch( err => {
        console.log(err);
    });
  }
  
  /*
  fetch('datosjson.php',{
    method: 'post',
    body: JSON.stringify(objetoJSON),
    headers:{
        'Content-Type': 'application/json'
    }

  }).then(function (response){
      return response.text;
  }).then(function (text){
      console.log(text);
  }).catch(function (error){
      console.log(error);
  });*/
  
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
  