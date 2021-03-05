// Rocio del Real
let jsonFilm = [];
let jsonFilmFiltered = [];//array peliculas con los campos del enunciado
let tipoPeticion = "";
/*****************Peticiones XHR***************************************************** */
//Get a url https://ghibliapi.herokuapp.com/films, obtiene todo el json pero este array no debemos enviarlo mediante post. ¿Que hacer con el?
function loadJsonXHR() {
    //Hacemos la peticion con comunicacion asincrona
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://ghibliapi.herokuapp.com/films", true); //la url del .json por parametro
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                jsonFilm = filtrado(JSON.parse(xhr.responseText));
                // arrayFilter(jsonFilm);
                console.log(jsonFilm);

                postInsertarFilms_XHR();
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

/*Hacemos el filtro.
Deberemos construir otro array, con un listado de objetos como el que viene de resultado, 
pero esta vez sin los campos "id","url","people", "species", "locations" y "vehicles". Ese array, 
deberemos enviarlo mediante POST y con el header Content-type "application/json" a la URL 
"insert_films.php".
*/
/*
function arrayFilter(json) {
    // return json.filter((fila) => fila.ccaa != "Totales");
    //recorremos el array de peliculas
    // let objetoFiltrado = {};
    jsonFilm.map((filaPelicula) => {
        let colArray = ["title", "description", "director", "producer", "release_date"];
        colArray.map((col) => {
            if (col == "title") {
                jsonFilmFiltered.push("title: " + filaPelicula[col]);
            } else if (col == "description") {
                jsonFilmFiltered.push("description: " + filaPelicula[col]);
            } else if (col == "director") {
                jsonFilmFiltered.push("director: " + filaPelicula[col]);
            } else if (col == "producer") {
                jsonFilmFiltered.push("producer: " + filaPelicula[col]);
            } else if (col == "release_date") {
                jsonFilmFiltered.push("release_date: " + filaPelicula[col]);
            }

        });
    });
    // console.log("json filtrado:");
    console.log(jsonFilmFiltered);//comprobar
}*/

function filtrado(json) {
    return json.filter((fila) => fila.title || fila.description || fila.director || fila.producer || fila.release_date);
}





/*
array con datos peliculas filtrados, deberemos enviarlo mediante POST y con el header Content-type 
"application/json" a la URL "insert_films.php"
*/


function postInsertarFilms_XHR() {
    //Hacemos la peticion con comunicacion asincrona
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "insert_films.php", true); //la url del php por parametro
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                jsonFilm = JSON.parse(xhr.responseText);
                console.log("Prueba 2:");
                console.log(jsonFilm);
                console.log("Success: todo ha ido OK con XHR");
                tipoPeticion = "XMLHttpRequest";
                crearTablaPelis();

            } else {
                console.error(xhr.statusText);
            }
        }
    };
    xhr.onerror = function (e) {
        console.error(xhr.statusText);
    };

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(jsonFilm)); //asi le envio el cuerpo del json contenida en el array

}


/*****************Peticiones fetch***************************************************** */


function loadJsonFetch() {
    fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => { return response.json() }) //o .then((response) => response.json())
        .then(data => {
            // console.log("Data fetch: " + data); Ojo: al pintarla con un string al lado, sale esto: [object Object],[object Object],etc
            // console.log(data);//Nota: poniendo solo la variable sí podemos comprobarlo 
            jsonFilm = filtrado(data);//eliminamos los campos que no queremos
            tipoPeticion = "Fetch";
            peticion_RellenarPHP_Fetch();//llamar la insercion de datos al php aqui.
        })
        .catch((err) => console.log("Hubo un problema con la petición Fetch: " + err.message)) //comprobacion de errores

}

function peticion_RellenarPHP_Fetch() {
    fetch("insert_films.php", {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(jsonFilm), // data can be `string` or {object}!
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
            // selectDinamico();
            crearTablaPelis();
            console.log('Success: ', "todo ha ido OK con fetch");
        })
        .catch(error => console.error('Error:', error))//comprobacion de errores
}
/*****************FIN Peticiones fetch***************************************************** */

/*****************Obtener y guardar personajes con fetch */
let personajesArr = [];
//tipo get url -->https://ghibliapi.herokuapp.com/people
function loadPersonajesFetch() {
    fetch('https://ghibliapi.herokuapp.com/people')
        .then(response => { return response.json() }) //o .then((response) => response.json())
        .then(data => {
            personajesArr = data;//eliminamos los campos que no queremos
            console.log(personajesArr);//prueba
            tipoPeticion = "Fetch Personajes";
            rellenarPersonajes_Fetch();//llamar la insercion de datos al php aqui.
        })
        .catch((err) => console.log("Hubo un problema con la petición Fetch personajes: " + err.message)) //comprobacion de errores
}
/**filtro personajes-->Deberemos construir otro array, 
 * con un listado de objetos como el que viene de resultado, pero esta vez sin los 
 * campos "species" y "url". */

//peticion post fetch personajes

function rellenarPersonajes_Fetch() {
    fetch("insert_people.php", {
        method: 'POST',
        body: JSON.stringify(personajesArr),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (res.status == 200) return res.json();
    })
        .then(data => {
            personajesArr = data;
            tipoPeticion = "Fetch personajes";
            // selectDinamico();
            // crearTablaPersonajes();
            console.log('Success: ', "todo ha ido OK con fetch personajes");
        })
        .catch(error => console.error('Error:', error))//comprobacion de errores
}

/************************************************************************* */

/*
con el array de films con los campos filtrados, generaremos una tabla con los datos
del film (salvo el campo  url) y en la última columna y para cada fila, se generará un
botón con el título "Personajes".
*/

function crearTablaPelis() {
    const tablaDiv = document.getElementById("tablaPersonajes");
    tablaDiv.innerHTML = "";//para evitar acumulaciones de tablas.

    const tituloTipoPeticion = document.createElement("h2");
    tituloTipoPeticion.innerText = "Tabla creada con " + tipoPeticion;
    tablaDiv.appendChild(tituloTipoPeticion);

    //creamos tabla
    const tablaElem = document.createElement("table");
    tablaElem.id = "tablaPersonajes";
    //CREAMOS LAS CABECERAS DE LA TABLA y la fila de la cabecera 
    const headers = ["Title", "Description", "Director", "Producer", "Release_date", "Boton Personaje"];
    //recoremos el array headers y creamos las th y las pintamos con su valor
    const crearFilaHeader = document.createElement("tr");
    headers.map((h) => {
        const crearColHeader = document.createElement("th");
        crearColHeader.innerText = h;
        crearFilaHeader.appendChild(crearColHeader);//lo colocamos en la fila headers
    });
    tablaElem.appendChild(crearFilaHeader);//colocamos dicha fila en la tabla
    tablaDiv.appendChild(tablaElem); //coloco la tabla en el dom

    //CREAMOS LAS FILAS GENERALES ENCONTRADA EN EL JSON POR ID EXISTENTE
    //recorremos el array del json con las peliculas filtradas
    jsonFilm.map((filaPeli) => {
        const filaGeneral = document.createElement("tr");
        const colArray = ["title", "description", "director", "producer", "release_date", "botonP"];
        //CREAMOS LAS COLUMNAS
        //recorremos el array de las columnas cuyos elementos se llaman igual que las claves o propiedades de cada objeto que compone el json.
        colArray.map((elemento) => {
            const columnElem = document.createElement("td");
            if (elemento != "botonP") {
                columnElem.innerText = filaPeli[elemento];
            } else {
                const botonElem = document.createElement("input");
                botonElem.type = "button";
                botonElem.value = "Personajes";
                botonElem.setAttribute("onclick", "peticionPost()");
                columnElem.appendChild(botonElem);
            }

            // console.log("prueba-->" + elemento);
            filaGeneral.appendChild(columnElem); //colocamos cada columna en su fila.
        });
        tablaElem.appendChild(filaGeneral);//colocamos dichas filas en la tabla
    });

}

/****************post por cada boton 'Personajes' de la tabla***************/
//tenemos que pasarle un json con la id_film
function filterIdFilm() {
    let idFiltered = jsonFilm.filter((elem) => { return elem.id });
    const objeto = {
        "id_film": idFiltered
    }
}
function peticionPost_Personajes(id) {
    //Hacemos la peticion con comunicacion asincrona
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "people_by_film_id.php", true); //la url del php por parametro
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                jsonFilm = JSON.parse(xhr.responseText);
                console.log("Prueba 2:");
                console.log(jsonFilm);
                console.log("Success: todo ha ido OK con XHR");
                tipoPeticion = "XMLHttpRequest";
                crearTablaPelis();

            } else {
                console.error(xhr.statusText);
            }
        }
    };
    xhr.onerror = function (e) {
        console.error(xhr.statusText);
    };

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(jsonFilm)); //asi le envio el cuerpo del json
}



