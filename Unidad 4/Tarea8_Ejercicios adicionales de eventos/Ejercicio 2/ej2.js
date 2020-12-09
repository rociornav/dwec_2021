/*
Ejercicio 2

Realizar un script que responda estos eventos:

Al pulsar botón del ratón el color de fondo del cuadro de mensaje debe ser amarillo (#FFFF00).
Cuando se pulsa una tecla, el color de fondo debe ser azul (#CCE6FF).
Al volver a mover el ratón, el color de fondo vuelve a ser blanco.
Modifica el ejemplo anterior para que cuando se pulse sobre el ratón se muestren las coordenadas
respecto del navegador y la pantalla.
Cuando se pulse una tecla se deberá mostrar tanto el carácter como su código ascii.
*/


//Parte 2. Cuando se pulsa una tecla, el color de fondo debe ser azul.
const yoquese=document.getElementById("micampo");
function setBG(color){
    yoquese.style.backgroundColor = color;
}

window.onload = () => {
    yoquese.focus();
}

yoquese.onkeypress= (event) => { 
    setAscii(event);
    setBG("#CCE6FF"); 
} //yoquese.style.backgroundColor = "#0000FF";

yoquese.onclick= () => { setBG("#FFFF00"); }

yoquese.onmouseover= (event) => {
    setCoordinates(event);
    setBG("#FFFFFF"); 
}

function setCoordinates(event){
    document.getElementById("x").innerHTML = "X: "+event.pageX;
    document.getElementById("y").innerHTML = "Y: "+event.pageY;
}

function setAscii(event){
   yoquese.value = event.keyCode +" => "; 
}
