
let armasArray = []; //creo una array global 
let tipoPeticion = "";
function peticionXHR() {
    //Hacemos la peticion con comunicacion asincrona
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "listar_armas.php", true); //la url del php por parametro
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                armasArray = JSON.parse(xhr.responseText);
                console.log(armasArray);
                tipoPeticion = "XMLHttpRequest";
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

function peticionFetch() {
    fetch('listar_armas.php')
        .then((response) => response.json())
        .then((data) => { //data es un json 
            //console.log(data);
            armasArray = data;
            tipoPeticion = "Fetch";
            crearTabla();
        });
}
function crearTabla() {
    const valorSelect = document.getElementById("tipoBando").value;
    (valorSelect == 3) ? crearTablaSinFiltro() : crearTablaConFiltro();
    // console.log("probando-->" + valorSelect);
}

function crearTablaConFiltro() {

    //donde colocaremos la tabla en el dom
    const rdoDiv = document.getElementById("rdoTabla");
    rdoDiv.innerHTML = "";//para que no se almacenen las tablas

    //Creo el filtro por bando
    const valorSelectBando = document.getElementById("tipoBando").value;
    //Creo el array con los elementos filtrados
    const armasFiltered = armasArray.filter((arma) => arma.bando == valorSelectBando);
    /*armasArray.map((arma)=>{
        if(valorSelectBando==arma.bando){
            armasFiltered.push(arma);
        }
    });*/

    //Creamos la tabla en el dom
    const tablaElem = document.createElement("table");
    tablaElem.id = "tablaUno";


    //Creamos headers
    const headers = ["Nombre", "Descripción", "Imagen", "Bando"];
    const filaHeaderElem = document.createElement('tr');
    headers.map((h) => {
        const thElem = document.createElement("th");
        thElem.innerText = h;
        filaHeaderElem.appendChild(thElem);
    });
    tablaElem.appendChild(filaHeaderElem);

    //Crear filas y columnas con la info del php: recorremos el array con la info del php
    //Recorro el array con los elementos filtrados
    armasFiltered.map((arma) => { //filas, nota: arma es un objeto.
        const fila = document.createElement("tr");
        const columnasArray = ["nombre", "descripcion", "imagen", "bando"];
        columnasArray.map((colPorHeader) => { //col
            const tdElem = document.createElement("td");
            const valor = arma[colPorHeader];
            //Comprobamos si es una imagen
            if (colPorHeader == "imagen") {
                const imagen = document.createElement("img");
                imagen.src = valor;
                tdElem.appendChild(imagen);
            } else if (colPorHeader == "bando") {
                tdElem.innerText = valor == 1 ? "Aliados" : "Eje";
            } else {
                tdElem.innerText = valor;
            }

            fila.appendChild(tdElem);

        });
        tablaElem.appendChild(fila);
    });

    rdoDiv.appendChild(tablaElem);
}

function crearTablaSinFiltro() {
    //donde colocaremos la tabla en el dom
    const rdoDiv = document.getElementById("rdoTabla");
    rdoDiv.innerHTML = "";//para que no se almacenen las tablas

    //Creamos la tabla en el dom
    const tablaElem = document.createElement("table");
    tablaElem.id = "tablaUno";


    //Creamos headers
    const headers = ["Nombre", "Descripción", "Imagen", "Bando"];
    const filaHeaderElem = document.createElement('tr');
    headers.map((h) => {
        const thElem = document.createElement("th");
        thElem.innerText = h;
        filaHeaderElem.appendChild(thElem);
    });
    tablaElem.appendChild(filaHeaderElem);

    //Crear filas y columnas con la info del php: recorremos el array con la info del php
    armasArray.map((arma) => { //filas, nota: arma es un objeto.
        const fila = document.createElement("tr");
        const columnasArray = ["nombre", "descripcion", "imagen", "bando"];
        columnasArray.map((colPorHeader) => { //col
            const tdElem = document.createElement("td");
            const valor = arma[colPorHeader];
            //Comprobamos si es una imagen
            if (colPorHeader == "imagen") {
                const imagen = document.createElement("img");
                imagen.src = valor;
                tdElem.appendChild(imagen);
            } else if (colPorHeader == "bando") {
                tdElem.innerText = valor == 1 ? "Aliados" : "Eje";
            } else {
                tdElem.innerText = valor;
            }

            fila.appendChild(tdElem);

        });
        tablaElem.appendChild(fila);
    });

    rdoDiv.appendChild(tablaElem);
}