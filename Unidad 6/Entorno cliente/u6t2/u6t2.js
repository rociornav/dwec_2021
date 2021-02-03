/*
U6T2 - Localidad
A partir de los códigos que hemos creado en clase deberás diseñar un programa que tenga las siguientes 
características:

-Una página con HTML que tenga un input de tipo texto y un botón: cuando el usuario introduzca el nombre 
de una localidad y pulse el botón obtendrá, en un div “resultado”, un mensaje que indicará  si la ciudad 
está incluida dentro de una lista de ciudades o no. El mensaje será rojo si no está incluida y verde en 
caso afirmativo.

-Un archivo en PHP que compruebe que la localidad  recibida por parámetro está o no incluida  dentro de 
una lista de 10 localidades (utiliza un array en PHP y recórrelo para comprobarlo).

-La petición debe realizarse de forma asíncrona, de modo que no se recargará la página, sino que se 
mostrará el resultado una vez finalizada  la consulta al servidor.
*/

// https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests
function peticioname(ciudad){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "u6t2.php?localidadName="+ciudad, true);
    xhr.onload = function (e) {
        if (xhr.readyState === 4) { //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
            if (xhr.status === 200) {
                localidadExiste(xhr.responseText=="true");
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

function localidadExiste(existe){
    const rdoDiv=document.getElementById("resultado");
    // if(existe){
    //     rdoDiv.innerText="SÍ está en la lista.";
    //     rdoDiv.className="verde";
    // }else{
    //     rdoDiv.innerText="NO está en la lista.";
    //     rdoDiv.className="rojo";
    // }
    rdoDiv.innerText=(existe ? "SÍ" : "NO")+" está en la lista";
    rdoDiv.className=existe ? "verde" : "rojo";
}

function enviar(){
    peticioname(document.getElementById("localidadN").value);
}