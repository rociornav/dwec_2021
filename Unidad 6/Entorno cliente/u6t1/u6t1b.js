

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


function muestraContenido() {
	if (peticion_http.readyState === READY_STATE_COMPLETE) {
		if (peticion_http.status === 200) {
            //alert(peticion_http.responseText);
            //Rellenamos con el contenido de la url
            document.getElementById("textareaId").innerText=peticion_http.responseText;
            //DUDA: porque no? como reconocer que es ese el fallo?
            // document.getElementsByName("textareaN").innerText=peticion_http.responseText; //con esto no funciona
		}
	}
}

// function descargaArchivo() {
// 	cargaContenido("http://localhost:8090/U6T1 - Lector ficheros/holamundo.txt", "GET", muestraContenido);
// }

function init(){
    const divInputText=document.getElementById("urlCarga");
    divInputText.value=window.location.href;
    /*ASI no*/                
    // cargaContenido(divInputText.value,"GET",muestraContenido); asi no
    //tampoco llamarlo en el html con onclick= cargaContenido(etc), porque no te recoge el parametro divInputText.value
    document.getElementById("btn1").onclick= ()=>{cargaContenido(divInputText.value,"GET",muestraContenido);};//asi si

}

window.onload=init; //importante para que aparezca la url en el input al recargar la pagina => lo mismo que document.body.onload=init;