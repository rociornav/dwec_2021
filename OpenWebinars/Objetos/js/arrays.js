/* Ejercicios del curso de Openwebinars JS Intermedio (super básicos)...

Ejercicio 1. 
Suponga que tienes un array con 3 valores de colores tipo string, claro.

Mediante bucles, ir accediendo a cada valor e indicar. Me gusta el color tal, y asi en cada posición.

*/

let matriz=["rojo","azul","amarillo"];


function showColors(array){
    for(let i=0;i<array.length;i++){
        console.log("Me gusta el color: "+array[i]);
    }
}
//showColors(matriz);

/*
Ejercicio 2.

Mostrar pares del array.
*/

//Parte 1. con intro. (vertical)
let pares=[0,1,2,3,4,5,6,7,8,9,10,11,12];
function showPares(array){
    for(let i=0;i<array.length;i++){
        if(i%2==0){
            console.log(array[i]);
        }
    }
}
//showPares(pares);

//Parte 2. en una linea. (horizontal)
function showPares2(array){
    let par="";
    for(let i=0;i<array.length;i++){
        if(i%2==0){
            par+=i+" ";
        }
    }
    console.log(par);
}
//showPares2(pares);

/*
Ejercicio 3.

suma todos los numeros del array antes definido 'pares'.
*/

function sumaElem(array){
    let suma=0;
    for(let i=0;i<array.length;i++){
        suma+=array[i];
    }
    console.log("Suma total = "+suma);
}
//sumaElem(pares);

/**
 * Rellenaremos un array bidimensional con numeros aleatorios repetidos
 * @param {*} array 
 */
let array=new Array(3); //3 lineas
let numeroPorLinea=5;
let cantLineas=3;
function iniciar(){
    document.getElementById("partida").innerHTML = "¡INICIO DE PARTIDA!";
    rellenarArray(array);
}
function rellenarArray(array){
    document.getElementById("carton").innerHTML = "";
    for(let i=0;i<cantLineas;i++){
        array[i]=[];//vaciamos la nueva linea a completar.
        for(let j=0;j<numeroPorLinea;j++){
            array[i][j]=parseInt((Math.random()*100));
        }
        document.getElementById("carton").innerHTML +=
      array[i].toString() + "<br>";
    }
}


