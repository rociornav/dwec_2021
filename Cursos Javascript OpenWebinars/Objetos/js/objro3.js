function procesamiento(){
    const cad=document.getElementById("cadena")?.value;
    


    //comprobar si la cad existe o no esta vacia
    if(cad && cad!=''){
        let trozos = cad.split("|"); 
    //console.log(trozos); pruebo que me divide en trozos la cadena

            //Validacion tipo_producto--> televisor, tablet, smartphone, laptop
        /*forma basica
        if(trozos[0]==='televisor'||trozos[0]==='tablet'||trozos[0]==='smartphone'||trozos[0]==='laptop'){
            document.getElementById('tipo_producto').innerHTML+= "<li>Tipo_producto: "+trozos[0]+"</li>"; //pinto en html el producto
        }else{
            alert('Tipo_producto no válido: escribe televisor, tablet, smartphone, o laptop.')
        }*/
        //http://w3.unpocodetodo.info/utiles/regex-diacriticos.php
        const tiposProd=['televisor','tablet','smartphone','laptop'];
        /*CON FOREACH NO ME SALE
        tiposProd.forEach(element => {
            
            if(element.includes(trozos[0])){ //element==trozos[0]  así no sirve
                document.getElementById('tipo_producto').innerHTML+= "<li>Tipo_producto: "+trozos[0]+"</li>"; //pinto en html el producto
               // break;
            }else{
                alert('Tipo_producto no válido: escribe televisor, tablet, smartphone, o laptop.')
            }
            element=null;
        });*/

        /*Forma básica 3. CON FORI*/
        for (var i = 0; i < tiposProd.length; i++) {

            if (tiposProd.includes(trozos[0])) { //tiposProd[i]==trozos[0] asi no
                document.getElementById('tipo_producto').innerHTML+= "<li>Tipo_producto: "+trozos[0]+"</li>"; //pinto en html el producto
                break;
            }else{
                alert('Tipo_producto no válido: escribe televisor, tablet, smartphone, o laptop.')
                document.getElementById('tipo_producto').innerHTML+= "<li>Tipo_producto: "+"ups debe escribir una de las opciones válidas"+"</li>"; //pinto en html el producto
                break;
            }
            
        }
    

        //Validacion del modelo: 3Mayusculas y 3 numeros Y longitud 6--> Ej: ABC124
        const expresion=/[A-Z]{3}\d{3}/g; //asi si funciona
        if(trozos[1].length==6 && trozos[1].match(expresion)){ //('/[A-Z]{3}\d{3}/g')   new RegExp('[A-Z]{3}\d{3}', 'g') sale null
            document.getElementById('modelo').innerHTML+= "<li>Modelo: "+trozos[1]+"</li>"; //pinto en html el modelo
        }else{
            alert('Modelo no válido: debe contener sólo 3 letras mayúsculas seguidos de 3 números. Sin espacios.')
        }

        //Validacion de la cantidad: debe ser un numero entero
        const zona = trozos[2].split("@"); 
       
        const expresion2 = new RegExp('^[0-9]+$');
        if(zona[0].match(expresion2)){
            document.getElementById('cantidad').innerHTML+= "<li>Cantidad: "+zona[0]+"</li>"; //pinto en html la cantidad
        }else{
            alert('Cantidad no válida: debe contener sólo números enteros. Sin espacios.')
        }

        //Validacion de la zona: debe ser un cz unicamente
        const expresion3=/cz/g;
        if(zona[1].match(expresion3)&&zona[1].length==2){
            document.getElementById('zona').innerHTML+= "<li>Zona: "+zona[1]+"</li>"; //pinto en html la cantidad
        }else{
            alert('Zona no válida: debe ser cz una vez, en minúsculas. Sin espacios.')
        }

    }else{
        alert("Error. No escribiste nada, escribe algo en el formato tipo_producto|modelo|cantidad@cz porfavor.")
    }
    
    
}