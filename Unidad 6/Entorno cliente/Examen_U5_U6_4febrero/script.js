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
        showTabla();
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
      showTabla();
    });
}

function showTabla(){
  const tablaDiv=document.getElementById("tablaDiv");
  //seleccionable ccaa
  const selectCCAA= document.getElementById("selectCcaa");
  nombresCCAA.map((comunidad)=>{
      const optionElem=document.createElement("option");
      const valor=comunidad.ccaa;
      optionElem.value=valor;
      optionElem.innerText=valor;
      selectCCAA.appendChild(optionElem);
  });
  tablaDiv.appendChild(selectCCAA);
}

window.onload=loadFromJSONFile;