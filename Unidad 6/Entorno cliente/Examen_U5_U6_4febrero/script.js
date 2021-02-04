let nombresCCAA=[];
let tipoPeticion="";
let ficheroJSON = {};
/*return lista json con las ccaa*/
function loadFromJSONFile(){
  fetch("latest.json") //la url del php por parametro
  .then(response => response.json())
  .then(data => {
    ficheroJSON=data;
  });
}

function insertaXHR(){
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "insertar_comunidades.php", true); //la url del php por parametro
  xhr.onload = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        nombresCCAA=JSON.parse(xhr.responseText);
        tipoPeticion="XMLHttpRequest";
        showTablaAndSelect();
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.onerror = function (e) {
    console.error(xhr.statusText);
  };
  xhr.send(JSON.stringify(ficheroJSON));
}

function insertaFetch(){
    fetch("insertar_comunidades.php", {
      method: 'POST',
      body: JSON.stringify(ficheroJSON)
    })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        console.error(response);
      }
    })
    .then(data => {
      nombresCCAA=data;
      tipoPeticion="XMLHttpRequest";
      showTablaAndSelect();
    });
}

function showTablaAndSelect(){
  //seleccionable ccaa
  const selectCCAA= document.getElementById("selectCcaa");
  selectCCAA.innerHTML="";//vacia select para no acumular
  //creamos tabla
  const tablaDiv=document.getElementById("tablaDiv");
  tablaDiv.innerHTML="";//vacia tabla para no acumular
  const tablaElem = document.createElement("table");
  tablaElem.id = "tablaVacunacion";

  const filaHeaderElem=document.createElement("tr");
  const headers = ["Comunidad","D. Entregadas","D. Admin","D. Completa","% Entregadas","% Pobl. Admin","% Pobl. Completa"];
  headers.map((elemento)=>{
      const thElem=document.createElement("th");
      thElem.innerText=elemento;
      filaHeaderElem.appendChild(thElem);
  })
  tablaElem.appendChild(filaHeaderElem);
  nombresCCAA.map((comunidad)=>{
      //rellenamos option
      const optionElem=document.createElement("option");
      const valor=comunidad.ccaa;
      optionElem.value=valor;
      optionElem.innerText=valor;
      selectCCAA.appendChild(optionElem);

      //rellenamos tabla
      const filaElem=document.createElement("tr");
      const colums = ["ccaa","dosisEntregadas","dosisAdministradas","dosisPautaCompletada","porcentajeEntregadas","porcentajePoblacionAdministradas","porcentajePoblacionCompletas"];
      colums.map((elemento)=>{
          const tdElem=document.createElement("td");
          const valor=comunidad[elemento]; //!!
          tdElem.innerText=valor;
          filaElem.appendChild(tdElem);
      })
      tablaElem.appendChild(filaElem);
  });

  tablaDiv.appendChild(tablaElem);
}

window.onload=loadFromJSONFile;