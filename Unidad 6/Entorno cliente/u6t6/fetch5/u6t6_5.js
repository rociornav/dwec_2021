/*Rocío del Real (Adaptamos el u6t5 a fetch): url --> http://localhost:8090/u6t6/fetch5/u6t6_5.html

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

  function peticionFetch(objetoParam) {
    fetch('create_serie.php',{
        method: 'POST',
        body: "objeto="+JSON.stringify(objetoParam),
        headers:{
            'Content-Type': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded' //como dice el enunciado
        }
    
      }).then(function (response){ //resuelve la promesa del fetch
          if(response.status == 200) {
            //return response.text();
            return response.json();//.json()-->(es una promesa) parses JSON response into native JavaScript objects//JSON.parse(response) asi no
            // mostrar(response.json()); esto esta mal porque le pasas una promesa
          } else {
            throw "Respuesta incorrecta del servidor";
          }
      }).then(function (text){ //aqui se resuelve la promesa del .json()
          console.log(text);//me pinta "ok" en consola
          respuestaServer(text);
          mostrar();
      }).catch(function (error){
          console.log("Request failed: ",error);
      });
  }
  
  
/*No sé como mostrar la respuesta del servidor en esta situacion*/
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
//carga la tabla con los nuevos datos introducidos. Se debe ir actualizando sin pulsar el boton (eso como es)
function mostrar() {

    fetch('listar_series.php')
    .then((response) => response.json())
    .then((data) => { //data es un json 
        console.log(data);
        const divTabla = document.getElementById("mostrar");
  
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
        const arraySeries=data; //data ya es series!!
        arraySeries.map((serie)=>{
            const filaElem=document.createElement("tr");
            const colums = ["titulo","cadena","director","anyo","terminada"];
            colums.map((elemento)=>{
                const tdElem=document.createElement("td");
                const valor=serie[elemento]; //!!
                if(elemento=="terminada"){
                    const imagen=document.createElement("img");
                    imagen.src= "./"+(valor==1 ? "si" : "no")+".jpg";
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
    })
    
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
    peticionFetch(obj);
  }