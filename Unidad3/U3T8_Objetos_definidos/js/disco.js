/*
Rocío del Real U3T8 - Objetos definidos por el usuario

Parte 1:
Necesitamos almacenar en un programa todos los discos de música que tenemos en casa. Ahora que sabemos crear nuestros propios objetos
 es el mejor modo de guardar esta información.

Crea un objeto “disco” que almacene la siguiente información:

Nombre del disco.
Grupo de música o cantante.
Año de publicación.
Tipo de música (podrá ser “rock”, “pop”, “punk” o “indie”);
Localización: almacenará un número de estantería.
Prestado: almacenará un valor booleano. Por defecto será false.
Además tendrá los siguientes métodos:

Un “constructor” sin parámetros (las 4 primeras propiedades serán cadenas vacías, la localización será 0 por  defecto y prestado estará a false).
Un método que permita incluir las cinco primeras propiedades; la propiedad prestado seguirá a false.
Un método que permitirá cambiar el número de estantería en la localización.
Un método que permitirá cambiar la propiedad Prestado.
Un método que muestre toda la información de un disco.
Guarda todo el código en un archivo llamado disco.js

Parte 2:
Carga en tu página el archivo de arrays que hicimos en la práctica anterior.

Crea un array vacío para almacenar los discos.

Cuando el usuario cargue la página, se cargarán las opciones:

Mostrar número de discos.
Mostrar listado de discos(y le preguntará si quiere mostrarlos en el orden que se  encuentran en el array, del revés u ordenados alfabéticamente).
Mostrar un intervalo de discos(y le pedirá que introduzca el intervalo en formato  inicio-fin; luego deberás extraer el valor inicio y fin).
Añadir un disco (y le preguntará si quiere añadir al principio o al final).
Borrar un disco (y le preguntará si quiere borrar al principio o al final).
Consultar un disco (y le preguntará si quiere consultar por posición o por nombre).
Todas las operaciones que se realicen se irán mostrando en la página con su título.

REUTILIZA EL CÓDIGO DE LA PARTE 1 Y DEL EJERCICIO DE ARRAYS.

*/

/***************************************PARTE 1.****** */
//CREO EL OBJETO DISCO
function Disco() {
    this.nombre = "";
    this.grupoMusica="";
    this.anyoPublicacion="";
    this.tipoMusica="";
    this.localizacion=0;
    this.prestado=false;

    //constructor sin parámetros (comprobar)
    /*this.Disco=function(){

    }*/

    //método que permita incluir las cinco primeras propiedades; la propiedad prestado seguirá a false.

    this.incluirCinco= function(nombre, grupoMusica,anyoPublicacion,tipoMusica,localizacion) {
        this.nombre = nombre;
        this.grupoMusica=grupoMusica;
        this.anyoPublicacion=anyoPublicacion;
        this.tipoMusica=tipoMusica;
        this.localizacion=localizacion;
    }

    //método que permitirá cambiar el número de estantería en la localización.
    this.setLocalizacion=function(localizacion){
        this.localizacion = localizacion
    }

    //Un método que permitirá cambiar la propiedad Prestado.
    this.setPrestado=function(prestado){
        this.prestado=prestado;
    }

    //Un método que muestre toda la información de un disco. es como el toString()
    this.showDisco=function(){
        alert("1. Nombre del disco: "+this.nombre+
        "\n2. Grupo o cantante: "+this.grupoMusica+
        "\n3. Año de publicación: "+ this.anyoPublicacion+
        "\n4. Género musical: "+this.tipoMusica+
        "\n5. Localización en estantes: "+this.localizacion+
        "\n6. Prestado: "+this.prestado);
    }

}



//PRUEBAS DE LA PARTE 1.

let disco1 = new Disco(); //creamos un objeto llamado disco1.
disco1.incluirCinco("Bulería","David Bisbal", "2004", "Pop rock", "4");
/*
//console.log(disco1); //necesario para mostrarlo: me mostrará los valores de arriba
Disco.localizacion="5"; //actualizo el valor de localizacion
disco1.setLocalizacion(Disco.localizacion); //me debe cambiar la localización a 5
Disco.setPrestado=true;
disco1.setPrestado(Disco.setPrestado);//me debe salir true el valor de prestado
console.log(disco1);*/


/***************************************PARTE 2.****** */
//creo más discos:
let disco2 = new Disco();
disco2.incluirCinco("Las marismas","Canto Flamenco", "2006", "Flamenco", "3");
let disco3 = new Disco(); 
disco3.incluirCinco("Feed the Machine","Nickelback", "2017", "Hard rock", "1");
let disco4 = new Disco(); 
disco4.incluirCinco("Catarsis","Edurne", "2020", "Pop", "2");
let disco5 = new Disco(); //creamos un objeto llamado disco1.
disco4.incluirCinco("Angel","Carlitos", "2000", "Latino", "6");

//Creo array
let arrayDiscos=[disco1,disco2,disco3,disco4];



//***MENU ***/

let menu = prompt("Introduzca una opción:\n1. Mostrar número de discos.\n2. Mostrar lista de discos.\n3. Mostrar un intervalo de discos.\n4. Añadir un disco.\n5. Borrar un disco.\n6. Consultar un disco.");

switch(menu) {

    case '1':
        numberOfElements();
        break;
    
    case '2':
    let orden = prompt("Elija el orden para mostrar la lista: \n1. Orden en que se encuentran en el array.\n2. Orden del revés.\n3. Ordenados alfabéticamente.");
    
    if(orden == '1') {
        showElements(arrayDiscos);
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

    case '4': //CHECK
        let nuevoDisco=new Disco();
        let discoName= prompt("Introduzca el nombre del disco que quiere añadir:");
        let discoGrupo = prompt("Introduzca el grupo musical o cantante:");
        let discoYear = prompt("Introduzca el año de publicación:");
        let discoTipo = prompt("Introduzca el género musical:");
        let discoLocalizacion = prompt("Introduzca la localización:");
        nuevoDisco.incluirCinco(discoName,discoGrupo,discoYear,discoTipo,discoLocalizacion);

        let posAdd = prompt("Elige una opción para la posición de inserción: \n1. Principio de la lista.\n2. Final de la lista.");
        if (posAdd == '1') {
            addElementBeginning(nuevoDisco);
        } else {
            addElementEnd(nuevoDisco);
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
        let res6 = prompt("¿Cómo quiere consultar el disco?:\n1. Por posición.\n 2. Por nombre.");
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


//METODOS ARRAYS

//***Mostrar el número de elementos del array.***

function numberOfElements(){
    alert("Cantidad de elementos: "+arrayDiscos.length);
}
//numberOfElements();// prueba: funciona.

//***Mostrar todos los elementos del array. EN UN JSON al ser objetos*** https://www.youtube.com/watch?v=9tBsxDvb5WM || https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/JSON/stringify
function showElements(array){
    //OJO: si no fuesen objetos-->alert("Discos de la lista: "+arrayDiscos); 
    //alert(arrayDiscos.toString()); (ver como crear una .toString en js)
    cadena=JSON.stringify(array);
    //console.log(cadena);
    alert("Mostrando elementos:\n"+cadena);
}
//showElements(arrayDiscos); prueba: funciona.

//***Muestra los elementos del array en sentido inverso. ***  https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reverse
function upsideDown(){
    /* en consola funciona asi, pero si pongo alert en lugar de console.log, no se muestra en el navegador
   let contenedor=Array.from(arrayDiscos);
   contenedor.reverse();
    console.log(contenedor);
    */
   let contenedor=Array.from(arrayDiscos);
   contenedor.reverse();
   showElements(contenedor);
}
//upsideDown(); prueba: funciona.

//*** Muestra los elementos del array ordenados alfabéticamente (pero no los ordena).***  
//ver funcion .sort(), los ordenaré por nombre del disco:   https://www.youtube.com/watch?v=k-zv7s_YKWM 

function alphabeticalOrder(){

    /*ASI NO FUNCIONA
    let contenedor=Array.from(arrayDiscos);
    contenedor.sort();
    showElements(contenedor);*/

    //ASI SÍ FUNCIONA: https://www.youtube.com/watch?v=k-zv7s_YKWM (sigo los pasos de este video)
    arrayDiscos.sort(function(a,b){ //los ordena indiferentemente de que sean mayusculas
        const nombreA=a.nombre.toLowerCase();
        const nombreB=b.nombre.toLowerCase();

        if(nombreA<nombreB){
            return -1;
        }

        if(nombreA>nombreB){
            return 1;
        }
        return 0;
    });

    showElements(arrayDiscos); 
    
}
//alphabeticalOrder(); prueba: funciona.

//***Añadir un elemento al principio del array. ***  
function addElementBeginning(element){
    //forma 1. 
    showElements(([element].concat(arrayDiscos)));
    /*forma 2.
    arrayDiscos.unshift(element); 
    showElements();
    */

}
//addElementBeginning("Rusia"); prueba: funciona.

//***Añadir un elemento al final del array. ***
function addElementEnd(element){
    //Forma 1. Con push
    arrayDiscos.push(element);
    showElements(arrayDiscos);
    
    /*Forma 2. Con nombreArray.length
    arrayDiscos[arrayDiscos.length]=element;
    showElements(arrayDiscos);
    */

    /*Forma 3. .concat
    arrayDiscos=arrayDiscos.concat([element]);
    showElements(arrayDiscos);
    */
}
//addElementEnd("Finlandia"); prueba: funciona.

//***Borrar un elemento al principio del array (y decir cuál se ha borrado). ***  https://www.oscarlijo.com/blog/eliminar-elementos-de-un-array-en-javascript/#:~:text=Para%20eliminar%20el%20primer%20elemento,en%20cuyo%20caso%20devuelve%20undefined.
function deleteElementBeginning(){
    let elementoEliminado=arrayDiscos.shift();
    alert("Vamos a mostrar el nombre del elemento eliminado cuando le de a 'Aceptar'");
    showElements(elementoEliminado);
    alert("Vamos a mostrar la lista actualizada sin ese elemento cuando dé a 'Aceptar'");
    showElements(arrayDiscos);
}
//deleteElementBeginning(); prueba: funciona.

//***Borrar un elemento al final del array (y decir cuál se ha borrado). ***
function deleteElementEnd(){
    alert("Vamos a mostrar el nombre del elemento final de la lista eliminado. Da a 'Aceptar'. ");
    showElements(arrayDiscos.pop());
    alert("Vamos a mostrar la lista actualizada sin ese elemento cuando dé a 'Aceptar'");
    showElements(arrayDiscos);
}
//deleteElementEnd(); prueba: funciona.

//***Muestra el elemento que se encuentra en una posición que el usuario indica. ***
function showElementPos(position){
    if(position<0||position>=arrayDiscos.length){
        alert("La posición '"+position+"' no es válida, escriba una entre '0 a "+(arrayDiscos.length-1)+"'.");
    }else{
        alert("En la posición '"+position+"' se encuentra la canción (da a 'aceptar')--> ");
        showElements(arrayDiscos[position]);
    }
    
}
//showElementPos(2); //me debe mostrar Feed the machine de nickelback. Prueba: funciona.

//***Muestra la posición en la que se encuentra un elemento que le indica el usuario. BUSCAR POR NOMBRE DISCO*** 
function showPositionElem(elementUsu){
    /*
    https://www.youtube.com/watch?v=RTaQBkmcIuM

    Uso 'find' que es la unica que muestra un objeto por su atributo. Si da falso muestra por consola undefined, si lo encuentra
    retorna true y muestra el objeto por consola.
    */
   const atributoObjeto=arrayDiscos.find(function(elemento){
    return elemento.nombre===elementUsu;
   });

    if(!atributoObjeto){
        alert("El elemento '"+elementUsu+"' no está en la lista");
    }else{
        alert("El objeto '"+elementUsu+ "' se encuentra en la posición-->"+arrayDiscos.indexOf(atributoObjeto));
    }
}

//showPositionElem("Bulería"); //está y da posición 0. Prueba: funciona.
//showPositionElem("Feed the Machine"); //está y da posición 2. Prueba: funciona.
//showPositionElem("Alemania"); //no está.. mostrar -1 o que no existe Prueba: funciona.

//*** Muestra los elementos que se encuentran en un intervalo que el usuario indica. *** 
function showElementsInterval(position1, position2){
    alert("Elementos del intervalo '"+position1+"' al '"+position2+"' click en 'aceptar'-->");
    showElements(arrayDiscos.slice(position1,position2));
}
//showElementsInterval(1, 2); //muestra 'Las marismas' disco2. Prueba: funciona
//showElementsInterval(1, 3); //'Las marismas' y 'Feed the machine'. Prueba funciona.
