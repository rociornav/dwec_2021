/*
Rocío del Real 
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

function addClaveValor() {
    const valorSelectStorage = document.getElementById("tipoAlmacenamiento").value;
    const store = (valorSelectStorage == "local") ? localStorage : sessionStorage;
    //Recogemos el valor de los inputs Clave y Valor
    const keyInputVal = document.getElementById("clave").value;
    const valueInputVal = document.getElementById("valor").value;
    if (keyInputVal == "" || valueInputVal == "") {
        alert("No puede dejar ningún campo vacío.");
    } else {
        // Almacena la información:accede al objeto Storage actual y agrega un ítem al mismo
        store.setItem(keyInputVal, valueInputVal);
        // Recargamos los textareas con la información almacenada en el storage del tipo que sea
        refreshTextAreas();
    }
}

/*
Eliminar: Borra del área de almacenamiento los valores de clave y valor introducidos y 
del textarea mostrado. Si no se ha introducido ninguno indica que se introduzca un par clave/valor, 
si no se encuentra no hace nada.
*/

function removeClaveValor() {
    const valorSelectStorage = document.getElementById("tipoAlmacenamiento").value;
    const store = (valorSelectStorage == "local") ? localStorage : sessionStorage;

    //Recogemos el valor de los inputs Clave y Valor
    const keyInputVal = document.getElementById("clave").value;
    const valueInputVal = document.getElementById("valor").value;

    if (keyInputVal == "" || valueInputVal == "") {
        alert("No puede dejar ningún campo vacío.");
    } else {
        if (store.getItem(keyInputVal) == valueInputVal) { //si existe la clave con ese valor concreto
            //Eliminar item del session storage:
            store.removeItem(keyInputVal);
        } else {
            alert("No existe esa clave valor!.");
        }
    }
}

/*
Refrescar: Actualiza los textarea. 
*/
function refreshTextAreas() {
    ["localStorage", "sessionStorage"].map((storeName) => {
        const store = (storeName == "localStorage") ? localStorage : sessionStorage;
        //Refrescar textarea:
        const textarea = document.getElementById(storeName);
        textarea.value = ""; //vaciamos el textarea

        for (let i = store.length - 1; i >= 0; i--) {
            const clave = store.key(i);
            textarea.value += "Clave: " + clave + " Valor: " + store.getItem(clave) + "\n"; //+= para acumular
        }
    });
}
//Otra forma de hacerlo

function refreshDos() {

    //Paso 1. Refrescar textarea del local:
    const textareaLocal = document.getElementById("localStorage");
    textareaLocal.value = ""; //vaciamos el textarea

    for (let i = localStorage.length - 1; i >= 0; i--) { //lo pone en el orden de insercion
        const clave = localStorage.key(i);
        textareaLocal.value += "Clave: " + clave + " Valor: " + localStorage.getItem(clave) + "\n"; //+= para acumular
    }

    //Paso 2. Refrescar textarea del session:
    const textareaSession = document.getElementById("sessionStorage");
    textareaSession.value = ""; //vaciamos el textarea

    for (let i = sessionStorage.length - 1; i >= 0; i--) {
        const clave = sessionStorage.key(i);
        textareaSession.value += "Clave: " + clave + " Valor: " + sessionStorage.getItem(clave) + "\n"; //+= para acumular
    }
}

function checkCompatibility() {

    ["localStorage", "sessionStorage"].map((storeName) => {
        const store = (storeName == "localStorage") ? localStorage : sessionStorage;
        alert("Este navegador " + (store ? "SI" : "NO") + " es compatible para " + storeName);
    });

    //Otra forma de hacerlo sin ternario.
    // if (sessionStorage) { //si da true (es decir si existen)
    //     alert("Este navegador es compatible para sessionStorage");
    // } else {
    //     alert("Este navegador NO es compatible para sessionStorage");
    // }

    //Forma usando ternarios.
    // alert("Este navegador " + ((localStorage) ? "SI" : "NO") + " es compatible para localStorage");
    // alert("Este navegador " + ((sessionStorage) ? "SI" : "NO") + " es compatible para sessionStorage");
}
