// Rocio del Real 29 enero 2021
function crearTabla(){
    const rdoDiv=document.getElementById("rdoTabla");
    rdoDiv.innerHTML="";//para que no se almacenen las tablas

    //Almaceno los valores de los campos:
    const cantCol=document.getElementById("cantCol").value;
    const cantFila=document.getElementById("cantFila").value;
    const chHeaderVal=document.getElementById("chHeader").checked;
    const defaultValueV=document.getElementById("defaultValue").value;
    const grosorVal=document.getElementById("grosorB").value;
    const colorsValue=document.getElementById("colors").value;

    //console.log(cantCol+" | "+cantFila+" | "+chHeaderVal+" | "+defaultValueV+" | "+grosorVal+" | "+colorsValue);

    const tablaElem=document.createElement("table");
    tablaElem.id="tablaUno";
    if(grosorVal!=null){
        tablaElem.style="border: "+grosorVal+"px solid "+colorsValue+"; border-collapse: collapse;";
    }

    if(chHeaderVal){ //si esta seleccionado
        const filaElem=document.createElement('tr');
        for(let x=0; x<cantCol; x++){
            const colElem=document.createElement('th');
            colElem.innerText=defaultValueV;
            if(grosorVal!=null){
                colElem.style="border: "+grosorVal+"px solid "+colorsValue+";";
            }
            filaElem.appendChild(colElem);
        }
        tablaElem.appendChild(filaElem);
    }
    //creamos las filas y col
    for(let i=0; i<cantFila;i++){
        const filaElem=document.createElement('tr');
        
        for(let x=0; x<cantCol; x++){
            const colElem=document.createElement('td');
            colElem.innerText=defaultValueV;
            if(grosorVal!=null){
                colElem.style="border: "+grosorVal+"px solid "+colorsValue+";";
            }
            filaElem.appendChild(colElem);
        }
       tablaElem.appendChild(filaElem);
    }
    rdoDiv.appendChild(tablaElem);
}