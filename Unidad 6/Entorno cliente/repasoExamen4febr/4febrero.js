/*
PRIMERO HACEMOS LOS FILTROS DE CCAA
Paso 1. Hacer la peticion tipo get al latest.json o a la url que lo contiene: https://covid-vacuna.app/data/latest.json
Paso 2. Pasar esos datos obtenidos con peticion tipo post a insertar_comunidades.php

(Primero hacer las peticiones con XHR y luego con Fetch)
*/
let infoJson = [];
let tipoPeticion = "";
/**************************INICIO PETICIONES XHR********************************************* */
function loadFromJSONFile_XHR() {
    //Hacemos la peticion con comunicacion asincrona
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://covid-vacuna.app/data/latest.json", true); //la url del .json por parametro
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                infoJson = deleteTotales(JSON.parse(xhr.responseText));
                // console.log(infoJson);

                peticion_RellenarPHP_XHR();//quitar en caso de que el clic contenga solo la funcion peticionXHR_RellenarPHP(), por lo que en caso inicial debemos cargar los datos en memoria con window.onload=loadFromJSONFile_XHR;
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

function peticion_RellenarPHP_XHR() {
    //Hacemos la peticion con comunicacion asincrona
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "insertar_comunidades.php", true); //la url del php por parametro
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                infoJson = JSON.parse(xhr.responseText);
                // console.log(infoJson);
                console.log("Success: todo ha ido OK con XHR");
                tipoPeticion = "XMLHttpRequest";
                selectDinamico();
                generarTabla();

            } else {
                console.error(xhr.statusText);
            }
        }
    };
    xhr.onerror = function (e) {
        console.error(xhr.statusText);
    };

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(infoJson)); //asi le envio el cuerpo del json contenida en el array, importante pasarlo a string
}
/**************************FIN PETICIONES XHR********************************************* */

/**************************INICIO PETICIONES FETCH********************************************* */
//Fetch tipo get que 'ataca' la url del json para sacar los datos  https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch
function loadFromJSONFile_FETCH() {
    fetch('https://covid-vacuna.app/data/latest.json')
        .then(response => { return response.json() }) //o .then((response) => response.json())
        .then(data => {
            // console.log("Data fetch: " + data); Ojo: al pintarla con un string al lado, sale esto: [object Object],[object Object],etc
            // console.log(data);//Nota: poniendo solo la variable sí podemos comprobarlo 
            infoJson = deleteTotales(data);//eliminamos los Totales
            tipoPeticion = "Fetch";
            peticion_RellenarPHP_Fetch();//llamar la insercion de datos al php aqui.
        })
        .catch((err) => console.log("Hubo un problema con la petición Fetch: " + err.message)) //comprobacion de errores

}

function peticion_RellenarPHP_Fetch() {
    fetch("insertar_comunidades.php", {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(infoJson), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then(res => {
        if (res.status == 200) return res.json();
    })
        .then(data => {
            infoJson = data;
            tipoPeticion = "Fetch";
            selectDinamico();
            generarTabla();
            console.log('Success: ', "todo ha ido OK con fetch");
        })
        .catch(error => console.error('Error:', error))//comprobacion de errores
}
/**************************FIN PETICIONES FETCH********************************************* */

function deleteTotales(json) {
    return json.filter((fila) => fila.ccaa != "Totales");
}

function selectDinamico() {
    const selectHtml = document.getElementById("selectCcaa");

    //Crear tantas options como comunidad autonoma haya en el array
    infoJson.map((fila) => { //cada fila es un objeto del array que estamos recorriendo
        const optionElem = document.createElement("option");
        optionElem.innerText = fila['ccaa'];//lo relleno con su valor, que seria cada ccaa
        selectHtml.appendChild(optionElem); //lo colocamos dentro del select
    });

}

function generarTabla() {
    const tablaDiv = document.getElementById("tablaRdo");
    tablaDiv.innerHTML = "";//para evitar acumulaciones de tablas.

    const tituloTipoPeticion = document.createElement("h2");
    tituloTipoPeticion.innerText = "Tabla creada con " + tipoPeticion;
    tablaDiv.appendChild(tituloTipoPeticion);

    const tablaElem = document.createElement("table");
    tablaElem.id = "tablaPeticion";
    //CREAMOS LAS CABECERAS DE LA TABLA y la fila de la cabecera
    const headers = ["Comunidad", "D.Entregadas", "D.Admin", "D.Completa", "% Entregadas", "% Pobl. Admin.", "% Pobl. Completa"];
    //recoremos el array headers y creamos las th y las pintamos con su valor
    const crearFilaHeader = document.createElement("tr");
    headers.map((h) => {
        const crearColHeader = document.createElement("th");
        crearColHeader.innerText = h;
        crearFilaHeader.appendChild(crearColHeader);//lo colocamos en la fila headers
    });
    tablaElem.appendChild(crearFilaHeader);//colocamos dicha fila en la tabla
    tablaDiv.appendChild(tablaElem); //coloco la tabla en el dom

    //CREAMOS LAS FILAS GENERALES ENCONTRADA EN EL JSON POR CCAA EXISTENTE
    //recorremos el array del json
    infoJson.map((filaCCAA) => {
        const filaGeneral = document.createElement("tr");
        const colArray = ["ccaa", "dosisEntregadas", "dosisAdministradas", "dosisPautaCompletada", "porcentajeEntregadas", "porcentajePoblacionAdministradas", "porcentajePoblacionCompletas"];
        //CREAMOS LAS COLUMNAS
        //recorremos el array de las columnas cuyos elementos se llaman igual que las claves o propiedades de cada objeto que compone el json.
        colArray.map((elemento) => {
            const columnElem = document.createElement("td");
            columnElem.innerText = filaCCAA[elemento];
            // console.log("prueba-->" + elemento);
            filaGeneral.appendChild(columnElem); //colocamos cada columna en su fila.
        });
        tablaElem.appendChild(filaGeneral);//colocamos dichas filas en la tabla
    });
    document.getElementById("datosCargados").innerText = "DATOS CARGADOS DE LA WEB";
}

function modifyFetch() {
    //cojo los valores del form
    const dataForm = {
        ccaa: document.getElementById("selectCcaa").value,
        dosisEntregadas: document.getElementById("dosisEntregadas").value,
        dosisAdministradas: document.getElementById("dosisAdministradas").value,
        dosisPautaCompletada: document.getElementById("dosisPautaCompletada").value,
        porcentajeEntregadas: document.getElementById("porcentajeEntregadas").value,
        porcentajePoblacionAdministradas: document.getElementById("porcentajePoblacionAdministradas").value,
        porcentajePoblacionCompletas: document.getElementById("porcentajePoblacionCompletas").value
    }
    // const valorSelect = document.getElementById("selectCcaa").value;
    // const valordosisEntregadas = document.getElementById("dosisEntregadas").value;
    // const valordosisAdministradas = document.getElementById("dosisAdministradas").value;
    // const valordosisPautaCompletada = document.getElementById("dosisPautaCompletada").value;
    // const valorporcentajeEntregadas = document.getElementById("porcentajeEntregadas").value;
    // const valorporcentajePoblacionAdministradas = document.getElementById("porcentajePoblacionAdministradas").value;
    // const valorporcentajePoblacionCompletas = document.getElementById("porcentajePoblacionCompletas").value;


    //peticion fetch post a actualizar_comunidad.php
    fetch("actualizar_comunidad.php", {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(dataForm), // dataForm can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then(res => {
        if (res.status == 200) return res.json();
    })
        .then(data => {
            tipoPeticion = "Fetch";
            updateInfoJson(data);
            console.log('Success: ', "todo ha ido OK con fetch");
        })
        .catch(error => console.error('Error:', error))//comprobacion de errores




}

function updateInfoJson(ccaaUpdated) {
    /***FORMA 1. CON MAP */
    infoJson = infoJson.map((oldCCAA) => {
        if (oldCCAA.ccaa == ccaaUpdated.ccaa) {
            return ccaaUpdated;
        } else {
            return oldCCAA;
        }
    });

    generarTabla();
    document.getElementById("datosCargados").innerText = "Comunidad actualizada";//OJO, ponerlo despues de generarTabla, sino no se machaca con este valor
}

// function init() {
//     peticionXHR();
// }

/* Formas de llamar la funcion init al cargar la pagina */
// window.onload = init;
// document.body.onload=init;
// init();


// window.onload = loadFromJSONFile_XHR; //cargamos el json en la memoria