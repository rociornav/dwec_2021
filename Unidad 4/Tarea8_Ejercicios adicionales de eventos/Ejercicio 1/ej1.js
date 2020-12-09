/*
Enunciado:

Realizar un script que cada vez que el usuario redimensione la ventana nos indique  el ancho y alto de la ventana del navegador.

Nota personal: https://www.w3schools.com/js/js_window_screen.asp
*/
//sin redimensionar
//document.getElementById("size").innerHTML="Screen Width: " + screen.width +" px | Screen Height: " + screen.height+" px";

/* const height = document.querySelector("#height span");
const width = document.querySelector("#width span"); */
/* const height=document.getElementById("height");
const width =document.getElementById("width"); */

// Insert values on load of page 
/* window.onload = () => {
    height.innerHTML = window.innerHeight;
    width.innerHTML = window.innerWidth;
};

// Change values when window is resized 
window.onresize = () => {

    // Setting the current height & width 
    // to the elements 
    height.innerHTML = window.innerHeight;
    width.innerHTML = window.innerWidth;
};  */

function setSize() {
    document.getElementById("height").innerHTML = "Height: "+window.innerHeight+" px";
    document.getElementById("width").innerHTML = "Width: "+window.innerWidth+" px";
}
  
  window.onload = () => { setSize() }
  window.onresize = () => { setSize() }