/*
U7T1 - Diferencias de almacenamiento
Implementa una página web como la mostrada usando los conceptos aprendidos en la unidad.

Deben funcionar todos los botones siendo la funcionalidad la siguiente:

Guardar: Guardar la información de clave y valor según el area de almacenamiento elegida. Si no 
hay valores debe indicar que se rellenen y si los hay debe mostrar el contenido en el textarea 
correspondiente. //Duda: intuyo que no se deben acumular las claves y valores en el textarea.-->Resuelta: no se acumulan nunca.

Eliminar: Borra del área de almacenamiento los valores de clave y valor introducidos y del textarea 
mostrado. Si no se ha introducido ninguno indica que se introduzca un par clave/valor, si no se encuentra
 no hace nada.

Refrescar: Actualiza los textarea.

Comprobar compatibilidad del navegador: comprueba si el navegador acepta el almacenamiento local o 
por sesión.

*/

function tipoSelect() {
    //Botones:
    const botonGuardar = document.getElementById("btn1");
    const botonEliminar = document.getElementById("btn2");
    const botonRefrescar = document.getElementById("btn3");
    //Recojo el valor del select
    const valorSelectStorage = document.getElementById("tipoAlmacenamiento").value;
    // if(valorSelectStorage=="local"){
    //     botonGuardar.onclick=addClaveValorLocal;
    //     botonEliminar.onclick=eliminarClaveValorLocal;
    //     botonRefrescar.onclick=borrarTodoLocal;
    // }else{
    //     botonGuardar.onclick=addClaveValor;
    //     botonEliminar.onclick=eliminarClaveValor;
    //     botonRefrescar.onclick=borrarTodo;
    // }

    botonGuardar.onclick = (valorSelectStorage == "local") ? addClaveValorLocal : addClaveValor;
    botonEliminar.onclick = (valorSelectStorage == "local") ? eliminarClaveValorLocal : eliminarClaveValor;
    botonRefrescar.onclick = (valorSelectStorage == "local") ? borrarTodoLocal : borrarTodo;
}


//*******FUNCIONES SESSION STORAGE */
function addClaveValor() {
    const valorSelectStorage = document.getElementById("tipoAlmacenamiento").value;
    //Recogemos el valor de los inputs Clave y Valor
    const keyInputVal = document.getElementById("clave").value;
    const valueInputVal = document.getElementById("valor").value;
    if (keyInputVal == "" || valueInputVal == "") {
        alert("No puede dejar ningún campo vacío.");
    } else {
        if (valorSelectStorage == "local") {
            // Almacena la información:accede al objeto local Storage actual y agrega un ítem al mismo
            localStorage.setItem(keyInputVal, valueInputVal);
            // Obtiene la información almacenada desde sessionStorage
            const data2 = localStorage.getItem(keyInputVal);
            console.log(data2);
            document.getElementById("localStorage").innerText = "Clave: " + keyInputVal + " Valor: " + valueInputVal;
        } else {
            // Almacena la información en sessionStorage
            sessionStorage.setItem(keyInputVal, valueInputVal);
            // Obtiene la información almacenada desde sessionStorage
            const data = sessionStorage.getItem(keyInputVal);
            // console.log(data);
            document.getElementById("sessionStorage").innerText = "Clave: " + keyInputVal + " Valor: " + valueInputVal;
        }
    }
}

/*
Eliminar: Borra del área de almacenamiento los valores de clave y valor introducidos y 
del textarea mostrado. Si no se ha introducido ninguno indica que se introduzca un par clave/valor, 
si no se encuentra no hace nada.
*/
function eliminarClaveValor() {
    //Recogemos el valor del textarea 
    /*const textareaContenido=document.getElementById("sessionStorage").value;
    console.log(textareaContenido);*/

    //Eliminar item del session storage:
    sessionStorage.removeItem(keyInputVal);//Intuyo que la clave del textarea coincide con la ultima clave almacenada
}

/*
Refrescar: Actualiza los textarea. //Intuyo que se refiere a vaciarlos.
*/
function borrarTodo() {
    //**Borramos todos los items del almacenamiento session */
    sessionStorage.clear();
    //**Borramos el contenido del textarea */
    let textareaContenido = document.getElementById("sessionStorage");
    //textareaContenido.innerText=""; No sirve aqui. Preguntar porqué
    textareaContenido.value = '';
}

//*******FUNCIONES LOCAL STORAGE */
function addClaveValorLocal() {
    //Recogemos el valor de los inputs Clave y Valor
    const keyInputVal = document.getElementById("clave").value;
    const valueInputVal = document.getElementById("valor").value;

    if (keyInputVal == "" || valueInputVal == "") {
        alert("No puede dejar ningún campo vacío.");
    } else {
        // Almacena la información:accede al objeto local Storage actual y agrega un ítem al mismo
        localStorage.setItem(keyInputVal, valueInputVal);
        // Obtiene la información almacenada desde sessionStorage
        const data2 = localStorage.getItem(keyInputVal);
        console.log(data2);
        document.getElementById("localStorage").innerText = "Clave: " + keyInputVal + " Valor: " + valueInputVal;
        //Limpiamos los campos una vez guardados. DUDA: COMO HACERLO AQUI
        // keyInputVal.innerHTML="";
        // valueInputVal.innerHTML="";
    }
}

function eliminarClaveValorLocal() {

}

function borrarTodoLocal() {

}

function init() {
    tipoSelect();
}
window.onload = init;