/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Bucles_e_iteraci%C3%B3n

Enunciado:

Tenemos en nuestro html este form:
<form name="selectForm">
  <p>
    <label for="musicTypes">Elija algunos tipos de música, luego haga clic en el botón de abajo:</label>
    <select id="musicTypes" name="musicTypes" multiple="multiple">
      <option selected="selected">R&B</option>
      <option>Jazz</option>
      <option>Blues</option>
      <option>New Age</option>
      <option>Classical</option>
      <option>Opera</option>
    </select>
  </p>
  <p><input id="btn" type="button" value="¿Cuántos están seleccionados?" /></p>
</form>

Objetivos:

a). Crear un script y en una funcion calcular el número de option existentes en el select.
    Poner o crear un botón en el navegador, y al hacer clic mostrar el nº de opciones.
*/
//Forma 1. Accediendo al dom. 
function numOptionsTotalA(){
  const selectMusic=document.getElementById("musicTypes");
  return selectMusic.getElementsByTagName('option').length;
  //return document.getElementsByTagName('option').length; poner solo esta línea me da la solución pero, si existiesen mas select seria un problema.
}

//Forma 2. Bucle for 
function numOptionsTotalB(){
  const selectMusic=document.getElementById("musicTypes"); //objeto select de html
  let contador=0;
  //selectMusic.options  es un array que contiene las options  (son nodos)
  for(let i=0; i< selectMusic.options.length;i++){
    contador++;
  }
 //document.getElementById('rdo1').innerHTML+=contador; acumula la solucion cada vez que le damos clic
 document.getElementById('rdo1').innerHTML=contador;
}


function siSeleccionados(){
  const selectMusic=document.getElementById("musicTypes"); //objeto select de html o nodo 
  let contador=0;
  //selectMusic.options  es un nodo que es select con una propiedad llamada options que es un array que contiene las options  (son nodos)
  for(let i=0; i< selectMusic.options.length;i++){
    contador++;
  }
 //document.getElementById('rdo1').innerHTML+=contador; acumula la solucion cada vez que le damos clic
 document.getElementById('rdo1').innerHTML=contador;
}

// btn1.onclick=numOptionsTotalB;
// btn1.addEventListener("click",numOptionsTotalB);