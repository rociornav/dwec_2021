/*
Rocío del Real 

U3T6 - Arrays

Vamos a gestionar una lista de países haciendo uso de Arrays. Para ello necesitarás crear un
archivo arrays.js que incluya las siguientes funciones:

Mostrar el número de elementos del array.                                       (hecho)
Mostrar todos los elementos del array.                                          (hecho)
Muestra los elementos del array en sentido inverso.                             (hecho)
Muestra los elementos del array ordenados alfabéticamente (pero no los ordena). (hecho)
Añadir un elemento al principio del array.                                      (hecho)
Añadir un elemento al final del array.                                          (hecho)
Borrar un elemento al principio del array (y decir cuál se ha borrado).         (hecho)
Borrar un elemento al final del array (y decir cuál se ha borrado).             (hecho)
Muestra el elemento que se encuentra en una posición que el usuario indica.     (hecho)
Muestra la posición en la que se encuentra un elemento que le indica el usuario.(hecho)
Muestra los elementos que se encuentran en un intervalo que el usuario indica.  (hecho)
Ten en cuenta que el array será una variable global y que se pasará por parámetro en todas las
funciones.

Cuando el usuario cargue la página, se cargará un prompt donde se mostrarán (en el prompt,
no en la página) las opciones:

Mostrar número de países.
Mostrar listado de países (y le preguntará si quiere mostrarlos en el orden que se encuentran en el array, del revés u ordenados alfabéticamente).
Mostrar un intervalo de países (y le pedirá que introduzca el intervalo en formato inicio-fin; luego deberás extraer el valor inicio y fin).
Añadir un país (y le preguntará si quiere añadir al principio o al final).
Borrar un país (y le preguntará si quiere borrar al principio o al final).
Consultar un país (y le preguntará si quiere consultar por posición o por nombre).
Todas las operaciones que se realicen se irán mostrando en la página con su título.
*/

//Variable global
let listaPaises=["Inglaterra","España","Japón","Italia"];


//***Mostrar el número de elementos del array.***

function numberOfElements(){
    alert("Cantidad de elementos: "+listaPaises.length);
}
//numberOfElements(); para probarlo

//***Mostrar todos los elementos del array.***
function showElements(){
    alert("Países de la lista: "+listaPaises);
}
//showElements();

//***Muestra los elementos del array en sentido inverso. ***  https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reverse
function upsideDown(){
    alert(listaPaises.reverse());
}
//upsideDown();

//*** Muestra los elementos del array ordenados alfabéticamente (pero no los ordena).***   https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort
function alphabeticalOrder(){
    alert(listaPaises.sort());
}
//alphabeticalOrder();

//***Añadir un elemento al principio del array. ***   https://professor-falken.com/programacion/javascript/como-insertar-un-elemento-en-un-array-en-javascript/
function addElementBeginning(element){
    //forma 1. 
    alert([element].concat(listaPaises));
    /*forma 2.
    listaPaises.unshift(element); 
    alert(listaPaises);*/

}
//addElementBeginning("Rusia");

//***Añadir un elemento al final del array. ***
function addElementEnd(element){
    //Forma 1. Con push
    listaPaises.push(element);
    alert(listaPaises);
    
    /*Forma 2. Con nombreArray.length
    listaPaises[listaPaises.length]=element;
    alert(listaPaises);
    */

    /*Forma 3. .concat
    listaPaises=listaPaises.concat([element]);
    alert(listaPaises);
    */
}
//addElementEnd("Finlandia");

//***Borrar un elemento al principio del array (y decir cuál se ha borrado). ***  https://www.oscarlijo.com/blog/eliminar-elementos-de-un-array-en-javascript/#:~:text=Para%20eliminar%20el%20primer%20elemento,en%20cuyo%20caso%20devuelve%20undefined.
function deleteElementBeginning(){
    alert("Nombre del elemento eliminado --> "+listaPaises.shift());
    alert("Lista actualizada: \n"+listaPaises);
}
//deleteElementBeginning();

//***Borrar un elemento al final del array (y decir cuál se ha borrado). ***
function deleteElementEnd(){
    alert("Nombre del elemento eliminado --> "+listaPaises.pop());
    alert("Lista actualizada: \n"+listaPaises);
}
//deleteElementEnd();

//***Muestra el elemento que se encuentra en una posición que el usuario indica. ***
function showElementPos(position){
    if(position<0||position>=listaPaises.length){
        alert("La posición '"+position+"' no es válida, escriba una entre '0 a "+(listaPaises.length-1)+"'.");
    }else{
        alert("En la posición '"+position+"' se encuentra el país--> "+listaPaises[position]);
    }
    
}
//showElementPos(2);

//***Muestra la posición en la que se encuentra un elemento que le indica el usuario.***  https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/indexOf
function showPositionElem(element){
    if(listaPaises.indexOf(element)==-1){
        alert("El elemento '"+element+"' no está en la lista");
    }else{
        alert("El elemento '"+element+"' se encuentra en la posición-->"+listaPaises.indexOf(element));
    }
}
//showPositionElem("Japón"); //está
//showPositionElem("Alemania"); //no está.. mostrar -1 o que no existe

//*** Muestra los elementos que se encuentran en un intervalo que el usuario indica. *** https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/slice
function showElementsInterval(position1, position2){
    alert("Elementos del intervalo '"+position1+"' al '"+position2+"' -->"+listaPaises.slice(position1,position2));
}
//showElementsInterval(1, 2); //muestra España


//***MENU ***/
let menu = prompt("Introduzca una opción:\n1. Mostrar número de países.\n2. Mostrar lista de países.\n3. Mostrar un intervalo de países.\n4. Añadir un país.\n5. Borrar un país.\n6. Consultar un país.");

switch(menu) {

    case '1':
        numberOfElements();
        break;
    
    case '2':
    let orden = prompt("Elija el orden para mostrar la lista: \n1. Orden en que se encuentran en el array.\n2. Orden del revés.\n3. Ordenados alfabéticamente.");
    
    if(orden == '1') {
        showElements();
    } else if(orden == '2') {
        upsideDown();
    } else {
        alphabeticalOrder();
    }
    break;

    case '3':
        let pos1 = prompt("Dame la posición inicial:");
        let pos2 = prompt("Dame la posición final:");
        showElementsInterval(pos1,pos2);
        break;

    case '4': 
        let paisAdd = prompt("Introduzca el país que quiere añadir:");
        let posAdd = prompt("Elige una opción para la posición de inserción: \n1. Principio de la lista.\n2. Final de la lista.");
        if (posAdd == '1') {
            addElementBeginning(paisAdd);
        } else {
            addElementEnd(paisAdd);
        }
        break;

    case '5':
        let res = prompt("Elige una opción para la posición y eliminamos ese elemento:\n1. Principio de la lista.\n2. Final de la lista.");
        if (res == '1') {
            deleteElementBeginning();
        } else {
            deleteElementEnd();
        }
        break;

    case '6':
        let res6 = prompt("¿Cómo quiere consultar el país?:\n1. Por posición.\n 2. Por nombre.");
        if (res6=='1') {
            let pos = prompt("Introduzca la posición: ");
            showElementPos(pos);
        }else{
            let name = prompt("Introduzca el nombre: ");
            showPositionElem(name);
        }
        break;

    default:
        alert("Error, esa opción no es válida.");
        break;
}