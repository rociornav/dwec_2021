/*Rocío del Real 

Para probarlo en el navegador--> http://localhost:8090/U6T1%20-%20Lector%20ficheros/u6t1.html

U6T1 - Lector ficheros
Modifica  el código de la página holamundo_mejorado.html para que haga lo siguiente:

Crea un campo de texto en el que, nada más cargarse la página, se cargue la url de la misma.
Crea un botón junto al campo de texto que se llame “Mostrar contenido” y que al hacer clic sobre él cargue en un textarea el contenido indicado en la url.
Crea el textarea que inicialmente está vacío, pero que cargará el contenido de la url del campo de texto en él.


*/

let READY_STATE_UNINITIALIZED = 0;
let READY_STATE_LOADING = 1;
let READY_STATE_LOADED = 2;
let READY_STATE_INTERACTIVE = 3;
let READY_STATE_COMPLETE = 4;

let peticion_http;

function cargaContenido(url, metodo, funcion) {
	peticion_http = inicializa_xhr();

	if (peticion_http) {
		peticion_http.onreadystatechange = funcion;
		peticion_http.open(metodo, url, true);
		peticion_http.send(null);
	}
}

function inicializa_xhr() {
	if (window.XMLHttpRequest) {
		return new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
}
/*
function muestraContenido() {
	if (peticion_http.readyState === READY_STATE_COMPLETE) {
		if (peticion_http.status === 200) {
			alert(peticion_http.responseText);
		}
	}
}

function descargaArchivo() {
	cargaContenido("http://localhost:8090/U6T1 - Lector ficheros/holamundo.txt", "GET", muestraContenido);
}*/

function muestraContenidoTextArea(){
	if (peticion_http.readyState === READY_STATE_COMPLETE) {
		if (peticion_http.status === 200) {
			document.getElementById("contenidoUrl").innerText=peticion_http.responseText;
		}
	}
}

function init(){
	const textInput=document.createElement("input");
	textInput.id="urlInput";
	textInput.type="text";
	textInput.value=window.location.href;//le asigno de valor la url al input.

	const botonElem=document.createElement("button");
	botonElem.type="button";
	botonElem.innerHTML="Mostrar contenido";
	botonElem.onclick= ()=>{cargaContenido(document.getElementById("urlInput").value, "GET", muestraContenidoTextArea);};

	const textArea=document.createElement("textarea");
	textArea.id="contenidoUrl";
	textArea.rows=10;
	textArea.cols=60;

	const pElem=document.createElement("p");
	pElem.appendChild(textInput);
	pElem.appendChild(botonElem);
	//los colocamos en su sitio root
	const rootDiv=document.getElementById("root");
	rootDiv.appendChild(pElem);
	rootDiv.appendChild(textArea);

	// descargaArchivo();
}


document.body.onload=init;