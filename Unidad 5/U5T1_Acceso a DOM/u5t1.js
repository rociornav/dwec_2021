/*
Rocío del Real Eval 2
U5T1 - Acceso al DOM desde código
Dispones del código de una página web en html: pagina.html. Introduce en el apartado de script el código 
necesario para extraer:

El número de párrafos de la página.
El texto del segundo párrafo.
El número de enlaces de la página.
La dirección del primer enlace.
La dirección del penúltimo enlace.
El número de enlaces que apuntan a /wiki/Municipio
El número de enlaces del primer párrafo.
Para agregar texto en la página deberás introducir una etiqueta div con el id=info y  
añadir en ella toda la información detallada mediante:


let info = document.getElementById(“info”);
info.innerHTML = “Texto informativo”;
*/

//0). Creación del elemento info
const infoDiv=document.createElement("div");// lo creamos pero debemos situarlo en el html
infoDiv.id='info';//le ponemos una id='info' al elemento div creado
document.body.appendChild(infoDiv);//lo situamos en el dom,por defecto lo pone al final de body

//1). Número de párrafos--> .length
const info = document.getElementById("info"); //document.getElementById('demo').innerHTML = 'Hello JavaScript';
const pArray = document.getElementsByTagName("p");
const numParagraphs = pArray.length;

info.innerHTML += "Número de párrafos --> " + numParagraphs + "<br>";

//2). Texto del segundo párrafo.
const paragraphDos = pArray[1].innerText;

info.innerHTML += "Texto del segundo párrafo: <code>" + paragraphDos + "</code><br>";

//3). El número de enlaces de la página.
const aArray = document.getElementsByTagName("a");
const numEnlaces = aArray.length;

info.innerHTML += "Número de enlaces --> " + numEnlaces + "<br>";

//4). La dirección del primer enlace.
const enlaceFirst=aArray[0].href;
info.innerHTML += "La dirección del primer enlace --> " + enlaceFirst + "<br>";

//5). La dirección del penúltimo enlace.
//const enlacePenultimo=document.getElementsByTagName('a')[45].href;
const enlacePenultimo=aArray[numEnlaces-2].href;
info.innerHTML += "La dirección del penultimo enlace --> " + enlacePenultimo+ "<br>";

//6). El número de enlaces que apuntan a /wiki/Municipio
const nWiki=document.querySelectorAll('a[href="/wiki/Municipio"]').length;
info.innerHTML += "Número de enlaces que apuntan a /wiki/Municipio --> " + nWiki+ "<br>";

//7). El número de enlaces del primer párrafo.
const nEnlacesFirstParagraph=pArray[0].getElementsByTagName('a').length;
info.innerHTML += "Número de enlaces del primer párrafo --> " + nEnlacesFirstParagraph+ "<br>";

