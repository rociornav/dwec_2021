
window.onload = load;
function load() {
    alert("Bienvenido al test de los conocimientos matemáticos.");
}

/* function resultadosTest(){
    
    
    let acierto1=document.getElementById("cbox1a");
    let acierto2=document.getElementById("cbox2b");
    let acierto3=document.getElementById("cbox3b");
    
    //Paso 1. si no ha marcado ningun radio.
    if (document.querySelectorAll('input[type="radio"]:checked').length === 0){
        alert("Not checked. Nota: 0-->0% contestadas.");
    } else{
        alert("Checked algunas o todas, a continuación le decimos su nota.");
        //nota 100%
        if(acierto1.checked&&acierto2.checked&&acierto3.checked){
            alert("Nota 100%, sobresaliente.")
        }else{
            if((acierto1.checked&&acierto2.checked)||(acierto1.checked&&acierto3.checked)||(acierto2.checked&&acierto3.checked)){
                alert("Acertaste 2 de 3, Nota: 66% de aciertos, BIEN");
            }else if(acierto1.checked||acierto2.checked||acierto3.checked){
                alert("Acertaste 1 de 3, Nota: 33% de aciertos, suspenso");
            }else{
                alert("Ni una, nota: 0% pero al menos lo has intentao")
            }
        }
    } 
      

} */

function resultadosTest() {
   
    //si no marca ningun checkbox resultado=0
    const checkUno = document.getElementsByName("check1");
    const checkDos = document.getElementsByName("check2");
    const checkTres = document.getElementsByName("check3");
    if (checkEmpty(checkUno) && checkEmpty(checkDos) && checkEmpty(checkTres)) {
        alert("vaciiooo. O% cero contestadas");
    } else {
        alert("Checked algunas o todas, a continuación le decimos su nota.");
        //nota 100%
        const unoOk=win(checkUno,"cbox1a");
        const dosOk=win(checkDos,"cbox2b");
        const tresOk=win(checkTres,"cbox3b");
        if (unoOk&&dosOk&&tresOk) {
            alert("Nota 100%, sobresaliente.");
        } else {
            if ((unoOk && dosOk) || (unoOk && tresOk) || (dosOk && tresOk)) {
                alert("Acertaste 2 de 3, Nota: 66% de aciertos, BIEN");
            } else if (unoOk || dosOk || tresOk) {
                alert("Acertaste 1 de 3, Nota: 33% de aciertos, suspenso");
            } else {
                alert("Ni una, nota: 0% pero al menos lo has intentao");
            }
        }
    }

}

//solo se puede seleccionar una opcion de un grupo de checkbox. Util para los checkboxes, no para los radios
/* function onlyOne(checkbox, name) {
    let checkboxes = document.getElementsByName(name); //name = 'check1', etc
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
} */

function correctas(){
    window.alert("Respuestas correctas-->(1-A, 2-B, 3-B)");
}

/* document.getElementById('icd').onchange = function() {
    if ( document.getElementById('icd').checked === false ) {
        planhide();
    }
};​ */

//para limpiar de checks el test
function check(checked = true,name) {
    const cbs = document.querySelectorAll('input[name='+name+']');
    cbs.forEach((cb) => {
        cb.checked = checked;
    });
}
function uncheckAll() {
    check(false,'check1');
    check(false,'check2');
    check(false,'check3');
    //document.querySelector('input[name='+name+']:checked').checked = false;
}

/**
 * Comprueba si está vacio el array de elementos (da true cuando esta vacio)
 * @param {} elements 
 */
function checkEmpty(elements) {
    let notChecked = 0;
    elements.forEach((nodo) => { notChecked = !nodo.checked ? notChecked+1 : 0 })
    return notChecked == 3;
    /* En cristiano:
        let val = false;
        if (notChecked == 3) {
        val = true;
        } else {
        val = false;
        }
        return val; */

}

function win(elements, correct){
    let res = false;
    elements.forEach((nodo) => { nodo.id == correct ? res = nodo.checked : null }); //if (nodo.id == correct) { res = nodo.checked }
    return res;
  }