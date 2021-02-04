function crearTabla(){ //practicando examenes antiguos para el examen del 4 febrero
    const domTabla=document.getElementById("generarTabla");
    //Recoger los valores del form
    const colVal=document.getElementById("qCol").value;
    const filVal=document.getElementById("qFil").value;
    const headerVal=document.getElementById("headerV").checked;
    const defectVal=document.getElementById("defectV").value;
    const grosorBorde=document.getElementById("thickness").value;
    const colorVal=document.getElementById("colors").value;

    //console.log(colVal+"|"+filVal+"|"+headerVal+"|"+defectVal+"|"+grosorBorde+"|"+colorVal);

    //Creamos la tabla
    const tablaElem=document.createElement("table");
    tablaElem.id="tablaUno";
    // const filaElem=document.createElement("tr");
    // const colHeader=document.createElement("th");
    // const colNormal=document.createElement("td");

    //headers por col
    if(headerVal){
        const filaHeaderElem=document.createElement("tr");
        for (let i=0; i<colVal;i++){
            const colHeader=document.createElement("th");
            colHeader.innerText=defectVal;
            colHeader.style="border: "+colorVal+" "+grosorBorde+"px solid";
            filaHeaderElem.appendChild(colHeader);
            tablaElem.appendChild(filaHeaderElem);
        }
    }
    
    //resto tabla normal
    for (let i=0; i<filVal;i++){
        const filaElem=document.createElement("tr"); //creo la fila por iteracion
        for (let x=0; x<colVal; x++){
            const colNormal=document.createElement("td"); //col por iteracion
            colNormal.innerText=defectVal;
            colNormal.style="border: "+colorVal+" "+grosorBorde+"px solid";
            filaElem.appendChild(colNormal);
        }
        tablaElem.appendChild(filaElem);
    }
    domTabla.appendChild(tablaElem);


}