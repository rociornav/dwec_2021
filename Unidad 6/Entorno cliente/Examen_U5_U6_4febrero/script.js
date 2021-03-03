let datosCCAA=[];
let tipoPeticion="";
/*return lista json con las ccaa*/
function loadFromJSONFile(){
  fetch("latest.json") //la url del php por parametro
  .then(response => response.json())
  .then(data => {
    datosCCAA=data;
  });
}

function insertaXHR(){
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "insertar_comunidades.php", true); //la url del php por parametro
  xhr.onload = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        datosCCAA=JSON.parse(xhr.responseText);
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
  xhr.send(JSON.stringify(datosCCAA));
}

function insertaFetch(){
    fetch("insertar_comunidades.php", {
      method: 'POST',
      body: JSON.stringify(datosCCAA)
    })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        console.error(response);
      }
    })
    .then(data => {
      datosCCAA=data;
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
  datosCCAA.map((comunidad)=>{
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

function modifyData(){
  const arrayDatosImp=[
    "dosisAdministradas",
    "dosisEntregadas",
    "dosisPautaCompletada",
    "porcentajeEntregadas",
    "porcentajePoblacionAdministradas",
    "porcentajePoblacionCompletas"
  ];

  const obj={
    "ccaa": document.getElementById("selectCcaa").value
  };
  arrayDatosImp.map((prop)=>{
     obj[prop]=document.getElementById(prop).value;
  });
  /*
  const obj={
    "ccaa": document.getElementById("selectCcaa").value,
    "dosisAdministradas": document.getElementById("dosisAdministradas").value,
    "dosisEntregadas": document.getElementById("dosisEntregadas").value,
    "dosisPautaCompletada": document.getElementById("dosisPautaCompletada").value,
    "porcentajeEntregadas": document.getElementById("porcentajeEntregadas").value,
    "porcentajePoblacionAdministradas": document.getElementById("porcentajePoblacionAdministradas").value,
    "porcentajePoblacionCompletas": document.getElementById("porcentajePoblacionCompletas").value
  };*/
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "actualizar_comunidad.php", true); //la url del php por parametro
  xhr.onload = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {

        const pos=datosCCAA.findIndex((comunidad) => comunidad.ccaa == obj.ccaa); //devuelve la posicion
        // datosCCAA[pos].dosisAdministradas=obj.dosisAdministradas;
        // datosCCAA[pos].dosisEntregadas=obj.dosisEntregadas;
        // datosCCAA[pos].dosisPautaCompletada=obj.dosisPautaCompletada;
        // datosCCAA[pos].porcentajeEntregadas=obj.porcentajeEntregadas;
        // datosCCAA[pos].porcentajePoblacionAdministradas=obj.porcentajePoblacionAdministradas;
        // datosCCAA[pos].porcentajePoblacionCompletas=obj.porcentajePoblacionCompletas;
        /*let pos=-1;
        datosCCAA.map((putaComunidadConSusCosas, index) =>{
          if(putaComunidadConSusCosas.ccaa==obj.ccaa) pos=index;
        });*/
        
        
        arrayDatosImp.map((prop) => {
          datosCCAA[pos][prop]=obj[prop];
        });

       
        showTablaAndSelect();
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.onerror = function (e) {
    console.error(xhr.statusText);
  };
  xhr.send(JSON.stringify(obj));
}
window.onload=loadFromJSONFile;