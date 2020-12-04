/*
Del Real, Rocio

Ejercicio 2
Realiza un script que pida una cadena de texto (mediante input o prompt) y la muestre en un elemento 
HTML (p o div, como quieras). 

En otro elemento HTML deberá mostrarla convirtiendo los caracteres en mayúscula o minúscula de manera 
completamente aleatoria, y, además, entre carácter y carácter, imprima un guión, y además elimine todos
los espacios posibles (internos y externos). 

Por ejemplo:
“Si quiere vivir, venga conmigo”
“s-I-q-U-I-e-r-e-v-I-v-I-R-,-V-e-N-G-a-c-O-N-m-i-G-O”
*/

function aleatorioCad() {
    const cad = document.getElementById("frase").value;
  
    //Me aseguro de que exista cad o que no esté vacía
    if (cad) {
      //Paso 1. ELIMINAR ESPACIOS: forma más rápida de eliminar espacios
      let cadSin=cad.replace(/\s/g,''); 
      //console.log(cadSin);//prueba de que los espacios estan eliminados

      //Paso 2. Poner aleatoriamente mayusculas y minusculas
      let cadSin2="";
      let resFinal = "";
      for(let i = 0; i<cadSin.length;i++){
        if(parseInt(Math.random()*3+1)%2==0){ //da aleatoriamente 1 o 2 Math.floor(Math.random()*3+1)
          //de salir 2 en mayusc
          cadSin2 += cadSin.charAt(i).toLowerCase()+"-";
        }else{
          //de salir 1 en minusc 
            cadSin2 += cadSin.charAt(i).toUpperCase()+"-";
        }
        //Paso 3. Insertar entre letra y letra un guión -
        
      }
      //console.log("Version intermedia: "+cadSin2)

     for (let i = 0; i < cadSin2.length; i++) {
        if(cadSin2.lastIndexOf("-")==i){
          resFinal +="";
        }else{
          resFinal +=cadSin2.charAt(i)+"";
        }
     }

      //console.log("Res Final: "+resFinal)
      document.getElementById('resultado').innerHTML+= "<li>Resultado: "+resFinal+"</li>"; //pinto en html
    
    } else {
      //error
      alert("Error. No escribiste nada");
    }
  }