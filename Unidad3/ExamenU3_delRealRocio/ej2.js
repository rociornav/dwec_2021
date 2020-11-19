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
  if (cad && cad != "") {
    let cadSin = "";
    //Recorro la frase y Primero elimino los espacios
    for (let i = 0; i < cad.length; i++) {
      let caracter = cad.charAt(i);
      if (caracter == " ") {
        //si es un espacio lo eliminamos
        cadSin += "";
      } else {
        cadSin += caracter;
      }
    }

    //console.log(cadSin);//prueba de que los espacios estan eliminados
    const cadSinMayus = cadSin.toLowerCase();
    console.log(cadSinMayus); //prueba de que estan en mayusculas

    //Alterno una mayuscula y una minuscula
    let res = "";
    for (let i = 0; i < cadSinMayus.length; i++) {
      caracter = cadSinMayus.charAt(i).toUpperCase(); //las que deben ir en minusculas
      if (i % 2 != 0) {
        //las posiciones impares
        res += cadSinMayus.charAt(i);
      } else {
        res += caracter;
      }
    }
   //console.log(res)

    //alterno el guión
   let resFinal = "";
    for (let i = 0; i < res.length; i++) {
    resFinal += res.charAt(i) + "-";
    }
   //console.log(resFinal);
   //imprimo el resultado
   document.getElementById('resultado').innerHTML+= "<li>Resultado: "+resFinal+"</li>"; //pinto en html
  } else {
    //error
    alert("Error. No escribiste nada");
  }
}
