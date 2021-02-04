let nombresCCAA=[];
let tipoPeticion="";
/*return lista json con las ccaa*/
function peticionXHR(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "insertar_comunidades.php", true); //la url del php por parametro
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            nombresCCAA=JSON.parse(xhr.responseText);
           tipoPeticion="XMLHttpRequest";
           //console.log(nombresCCAA);
           init();
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
    fetch('insertar_comunidades.php')
    .then((response) => response.json())
    .then((data) => { //data es un json 
        //console.log(data);
        nombresCCAA=data;
        tipoPeticion="Fetch";
        crearTabla();
    });
}

function crearTabla(){
    const divTabla = document.getElementById("rdo");
    divTabla.innerHTML="";

    const tituloTipoPeticion=document.createElement("h2");
    tituloTipoPeticion.innerText="Tabla creada con "+tipoPeticion;
    divTabla.appendChild(tituloTipoPeticion);


    //***creamos la tabla en el dom***
    const tablaElem = document.createElement("table");
    tablaElem.id = "tablaComunidades";

    const filaHeaderElem=document.createElement("tr");
    const headers = ["Comunidad","D. Entregadas","D. Admin","D. Completa","% Entregadas","% Pobl. Admin","% Pobl. Completa"];
    headers.map((elemento)=>{
        const thElem=document.createElement("th");
        thElem.innerText=elemento;
        filaHeaderElem.appendChild(thElem);
    })
    tablaElem.appendChild(filaHeaderElem);

    nombresCCAA.map((comunidadElem)=>{
        const filaElem=document.createElement("tr");
        const colums = ["comunidad","dosisEntregadas","dosisAdministradas","dosisPautaCompletada","porcentajeEntregadas","porcentajePoblacionAdministradas","porcentajePoblacionCompletas"];
        colums.map((elemento)=>{
            const tdElem=document.createElement("td");
            const valor=comunidadElem[elemento];
            filaElem.appendChild(tdElem);
        })
        tablaElem.appendChild(filaElem);
    })

    divTabla.appendChild(tablaElem);
}


function init(){
    const rootDom=document.getElementById("seleccionable");
    //seleccionable ccaa
    let selectCCAA= document.createElement("select");
    selectCCAA.id="selectCA";
    const listaCCAA = Array.from(nombresCCAA);
    listaCCAA.map((comunidad)=>{
        const optionElem=document.createElement("option");
        const valor=comunidad.nombre;
        optionElem.value=valor;
        optionElem.innerText=valor;
        document.getElementById("selectCA").appendChild(optionElem);
        
    });

    rootDom.appendChild(selectCCAA);
}
window.onload=peticionXHR;