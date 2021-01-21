/*
Rocío del Real

U5T2 - Generando elementos
Crea una página web que tenga un listado de tipo <ul> con un <li> de muestra. //Intuyo que debe estar ya incorporada en el html
Introduce un botón en la página que, cuando lo pulses, te muestre un prompt para que el usuario 
introduzca un texto.
Una vez cerrado el prompt el valor se añadirá como un nuevo<li> a la lista creada.
Añade dos botones más con texto “Borrar primer li” y “Borrar último li” de modo que 
cuando pulses el primer botón borre el primer elemento de la lista y cuando pulses el último borre 
el último elemento de la lista.
*/

//---------------------------------------------------------------------------------------
//Botón en la página que, cuando lo pulses, te muestre un prompt para que el usuario introduzca un texto.
//cerrado el prompt el valor se añadirá como un nuevo<li> a la lista creada.
function insertLastLi(){
    const textUser = prompt("Introduce una frase:");

    //Creacion del elemento li:
    const newLi=document.createElement('li');
    //Le ponemos una id:
    // liID.id='elemli'+;
    //Lo colocamos dentro de ul:
    const nuevoNodo=document.body.children[0].appendChild(newLi); //children[0]=ul ver en la consola del navegador.
    const liArray = document.getElementsByTagName("li");//te devuelve un array con todos los li de la web
    const tamLiArray=liArray.length;
    //Colocamos el texto del prompt dentro del ultimo li creado
    document.body.children[0].children[tamLiArray-1].innerText=textUser;
}


function deleteElem1(){
    const list = document.getElementById("listaUno");  
    list.removeChild(list.children[0]);
//     var list = document.getElementById("listaUno");
//   list.removeChild(list.childNodes[0]); // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_removechild 
}

function deleteElemLast(){
    const liArray2 = document.getElementsByTagName("li");
    const tamLiArray2=liArray2.length;
    const list = document.getElementById("listaUno");  
    list.removeChild(list.children[tamLiArray2-1]);
}