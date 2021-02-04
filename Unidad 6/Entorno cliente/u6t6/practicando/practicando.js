let arrayArmas=[];//variable global donde agrupo todas las armas.
let tipoPeticion="";
function peticionXHR() {
    //Hacemos la peticion con comunicacion asincrona
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "listar_armas.php", true); //la url del php por parametro
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            armasArray=JSON.parse(xhr.responseText);//paso a json y meto las armas en el array
            tipoPeticion="XMLHttpRequest";
            crearTabla();
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

function peticionFetch(){
    fetch('listar_armas.php')
    .then((response) => response.json())
    .then((data) => { //data es un json 
        //console.log(data);
        armasArray=data;
        tipoPeticion="Fetch";
        crearTabla();
    });
}

function crearTabla(){
    const tablaElem=document.createElement("table");
    tablaElem.id="TablaArmas";
    const filaElem=document.createElement("tr");
    const colHeaderElem=document.createElement("th");
    const colNormalElem=document.createElement("td");

    let armasFiltradas=[];
    const valorBando=document.getElementById("tipoBando").value;
    arrayArmas.map((arma) => {
        if(valorBando==arma.bando){
            armasFiltradas.push(arma);
        }
    });

}