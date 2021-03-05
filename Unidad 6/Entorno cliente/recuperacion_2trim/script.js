// Rocio del Real
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
                arrayFilter(JSON.parse(xhr.responseText));
                console.log(jsonFilmFiltered);

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

function arrayFilter(json) {
    // return json.filter((fila) => fila.ccaa != "Totales");
    //recorremos el array de peliculas
    json.map((filaPelicula) => {
        let nuevaPelicula = {};
        let colArray = ["id", "title", "description", "director", "producer", "release_date", "rt_score", "url"];
        colArray.map((col) => {
            nuevaPelicula[col] = filaPelicula[col];
        });
        jsonFilmFiltered.push(nuevaPelicula);
    });

    //Otra forma:
    // json.map((filaPelicula) => {
    //     const nuevaPelicula = {
    //         title: filaPelicula.title,
    //         description: filaPelicula.description,
    //         director: filaPelicula.director,
    //         producer: filaPelicula.producer,
    //         release_date: filaPelicula.release_date,
    //     };
    //     jsonFilmFiltered.push(nuevaPelicula);
    // });

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
                jsonFilmFiltered = JSON.parse(xhr.responseText);
                console.log("Prueba 2:");
                console.log(jsonFilmFiltered);
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
    xhr.send(JSON.stringify(jsonFilmFiltered)); //asi le envio el cuerpo del json contenida en el array

}


/*****************Peticiones fetch***************************************************** */


function loadJsonFetch() {
    fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => { return response.json() }) //o .then((response) => response.json())
        .then(data => {
            // console.log("Data fetch: " + data); Ojo: al pintarla con un string al lado, sale esto: [object Object],[object Object],etc
            // console.log(data);//Nota: poniendo solo la variable sí podemos comprobarlo 
            arrayFilter(data);//eliminamos los campos que no queremos
            tipoPeticion = "Fetch";
            peticion_RellenarPHP_Fetch();//llamar la insercion de datos al php aqui.
        })
        .catch((err) => console.log("Hubo un problema con la petición Fetch: " + err.message)) //comprobacion de errores

}

function peticion_RellenarPHP_Fetch() {
    fetch("insert_films.php", {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(jsonFilmFiltered), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (res.status == 200) return res.json();
    })
        .then(data => {
            jsonFilmFiltered = data;
            tipoPeticion = "Fetch";
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
            filtroPersonajes(data);//eliminamos los campos que no queremos
            // console.log(personajesArr);//prueba
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
            console.log('Success: ', "todo ha ido OK con fetch personajes");
        })
        .catch(error => console.error('Error:', error))//comprobacion de errores
}

function filtroPersonajes(json) {

    json.map((filaPersonaje) => {
        // let objeto ={};
        // let colArrayP=["id","name","gender","age","eye_color","hair_color","films"];
        // colArrayP.map((col)=>{

        // });
        let objeto = {
            "id": filaPersonaje.id,
            "name": filaPersonaje.name,
            "gender": filaPersonaje.gender,
            "age": filaPersonaje.age,
            "eye_color": filaPersonaje.eye_color,
            "hair_color": filaPersonaje.hair_color,
            "films": filaPersonaje.films
        }
        personajesArr.push(objeto);
    });
}
/************************************************************************* */

/*
con el array de films con los campos filtrados, generaremos una tabla con los datos
del film (salvo el campo  url) y en la última columna y para cada fila, se generará un
botón con el título "Personajes".
*/

function crearTablaPelis() {
    const tablaDiv = document.getElementById("tablaPelisDiv");
    tablaDiv.innerHTML = "";//para evitar acumulaciones de tablas.

    const tituloTipoPeticion = document.createElement("h2");
    tituloTipoPeticion.innerText = "Tabla creada con " + tipoPeticion;
    tablaDiv.appendChild(tituloTipoPeticion);

    //creamos tabla
    const tablaElem = document.createElement("table");
    tablaElem.id = "tablaPelis";
    //CREAMOS LAS CABECERAS DE LA TABLA y la fila de la cabecera 
    const headers = ["Title", "Description", "Director", "Producer", "Release_date", "Rt_score", "Boton Personaje"];
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
    jsonFilmFiltered.map((filaPeli) => {
        const filaGeneral = document.createElement("tr");
        const colArray = ["title", "description", "director", "producer", "release_date", "rt_score", "botonP"];
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
                botonElem.setAttribute("onclick", "peticionPost_Personajes('" + filaPeli.id + "')");
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
let listaNombresPersonajes = [];
function peticionPost_Personajes(id) {
    let jsonIdFilm = {
        "id_film": id
    };
    //Hacemos la peticion con comunicacion asincrona
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "people_by_film_id.php", true); //la url del php por parametro
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                listaNombresPersonajes = JSON.parse(xhr.responseText);
                console.log("Prueba lista names:");
                console.log(listaNombresPersonajes);
                console.log("Success: todo ha ido OK con XHR");
                tipoPeticion = "XMLHttpRequest";
                crearTablaPersonajes();

            } else {
                console.error(xhr.statusText);
            }
        }
    };
    xhr.onerror = function (e) {
        console.error(xhr.statusText);
    };

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(jsonIdFilm)); //asi le envio el cuerpo del json
}

function crearTablaPersonajes() {
    const tablaDiv = document.getElementById("tablaPersonajesDiv");
    tablaDiv.innerHTML = "";//para evitar acumulaciones de tablas.

    // const tituloTipoPeticion = document.createElement("h2");
    // tituloTipoPeticion.innerText = "Tabla creada con " + tipoPeticion;
    // tablaDiv.appendChild(tituloTipoPeticion);

    //creamos tabla
    const tablaElem = document.createElement("table");
    tablaElem.id = "tablaPersonajes";
    //CREAMOS LAS CABECERAS DE LA TABLA y la fila de la cabecera 
    const headers = ["Name", "Gender", "Age", "Eye_color", "Hair_color"];
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
    listaNombresPersonajes.map((filaPersonaje) => {
        const filaGeneral = document.createElement("tr");
        const colArray = ["name", "gender", "age", "eye_color", "hair_color"];
        //CREAMOS LAS COLUMNAS
        //recorremos el array de las columnas cuyos elementos se llaman igual que las claves o propiedades de cada objeto que compone el json.
        colArray.map((elemento) => {
            const columnElem = document.createElement("td");
            columnElem.innerText = filaPersonaje[elemento];
            filaGeneral.appendChild(columnElem); //colocamos cada columna en su fila.
        });
        tablaElem.appendChild(filaGeneral);//colocamos dichas filas en la tabla
    });

}


