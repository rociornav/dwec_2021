/*U5 T4 ROCIO DEL REAL 

Desarrolla una aplicación que te permita generar tus propios formularios de manera dinámica. 
Para ello dibuja una tabla de  una sola fila y varias columnas. En cada columna habrá un botón que 
realice lo siguiente:

1).Crear un input de tipo texto. Le preguntará al usuario mediante un prompt qué nombre (atributo name) 
tiene el input.

2).Crear un input de tipo password. Le preguntará al usuario mediante un prompt qué nombre (atributo name) 
tiene el  input.

3).Crear un textarea. Le preguntará al usuario el nombre y generará automáticamente un textarea de 40 
columnas y 5  filas.

4).Crear un label. Preguntará al usuario a qué input va referido (atributo for) y el texto que aparecerá.

5).Crear una imagen. Preguntará al usuario qué ruta tiene la imagen (atributo src).

6).Crear un checkbox. Preguntará al usuario el nombre y el valor (atributos name y value). 
Preguntará también por el texto que lo acompaña.

7).Crear un radio. Preguntará al usuario el nombre y el valor (atributos name y value). 
Preguntará también por el texto que lo acompaña.

8).Crear un botón (submit). Preguntará al usuario el nombre y el valor (atributos name y value).

*/

//Creo la tabla con 1 fila y dentro de la fila las columnas
const tablaUno=document.createElement('table');
tablaUno.id="tablaUno";
//creo la fila
const filaUno=document.createElement('tr');
//meto la fila dentro de tablaUno
tablaUno.appendChild(filaUno); //parent.appendChild(child)  chuleta visual :P

//Creo el formulario
const formularioUno=document.createElement('form');
formularioUno.id="formUno";
formularioUno.action="#";
formularioUno.method="GET";

//meto la tabla, y el formulario en el dom
//document.body.appendChild(tablaUno)  forma 1.
document.getElementById('root').appendChild(tablaUno); //forma 2.
document.getElementById('root').appendChild(formularioUno);

//CREAMOS LAS COLUMNAS
const mainFila=document.getElementById('tablaUno').children[0]; //para acceder a toda la fila y meter las columnas
const formulario=document.getElementById('formUno'); //saco el formulario

//array de objetos botones que llama a la funcion hola()
const arrayButtonColumns=[
    {text: 'Botón uno', funcion: funcionForButtonOne},
    {text: 'Botón dos', funcion: funcionForButtonTwo}, //()=>{alert('Holaaaaaa, soy boton anonimo')}  funcion anonima en caso de usarse una sola vez en un solo sitio
    {text: 'Botón tres', funcion: funcionForButtonThree},
    {text: 'Botón cuatro', funcion: funcionForButtonFour},
    {text: 'Botón cinco', funcion: funcionForButtonFive},
    {text: 'Botón seis', funcion: funcionForButtonSix},
    {text: 'Botón siete', funcion: funcionForButtonSeven},
    {text: 'Botón ocho', funcion: funcionForButtonEight}
];

//funcion que cree los botones junto sus columnas
function createButtons(){
    arrayButtonColumns.forEach((botonData)=>{  //= function(botonData)
        const buttonElem=document.createElement('button');
        buttonElem.onclick =botonData.funcion;
        buttonElem.innerText=botonData.text;

        const colElem=document.createElement('td');
        colElem.appendChild(buttonElem);
        mainFila.appendChild(colElem);
     });
}

/*
const buttonUno=document.createElement('button');
buttonUno.onclick =hola;
buttonUno.innerText='Boton uno';

const colUno=document.createElement('td');
colUno.appendChild(buttonUno);
mainFila.appendChild(colUno);
*/

/*
1).Crear un input de tipo texto. Le preguntará al usuario mediante un prompt qué nombre (atributo name) 
tiene el input.
*/
function funcionForButtonOne(){
    const preguntaName=prompt("¿qué nombre (atributo name)tiene el input?");

    const inputElem=document.createElement('input');

    //inputElem.setAttribute("type","text");
    inputElem.type="text";
    inputElem.name=preguntaName;

    //colocamos el input dentro del formulario
    formulario.appendChild(inputElem);
}

/*
2).Crear un input de tipo password. Le preguntará al usuario mediante un prompt qué nombre (atributo name) 
tiene el  input.
*/
function funcionForButtonTwo(){
    const preguntaName2=prompt("¿qué nombre (atributo name)tiene el input?");

    const inputElem2=document.createElement('input');

    inputElem2.type="password";
    inputElem2.name=preguntaName2;

    //colocamos el input dentro del formulario
    formulario.appendChild(inputElem2);
}

/*
3).Crear un textarea. Le preguntará al usuario el nombre y generará automáticamente un textarea de 40 
columnas y 5  filas.
*/
function funcionForButtonThree(){
    const preguntaName3=prompt("¿qué nombre (atributo name)tiene el input?");

    const textareaElem=document.createElement('textarea');
    
    textareaElem.name=preguntaName3;
    textareaElem.rows=5;
    textareaElem.cols=40;

    //colocamos el textarea dentro del formulario
    formulario.appendChild(textareaElem);
}

/*
4) Crear un label. Preguntará al usuario a qué input va referido (atributo for) y el texto que aparecerá.
*/
function funcionForButtonFour(){ //https://attacomsian.com/blog/javascript-insert-element-before#:~:text=In%20vanilla%20JavaScript%2C%20you%20can,existing%20element%20in%20the%20document.&text=Our%20goal%20is%20to%20add,above%20element%20in%20the%20DOM.
    const preguntaName4=prompt("¿a qué input va referido este label que hemos creado?");
    const textoLabel=prompt("Introduzca el texto del label:");

    const labelElem=document.createElement('label');
    const nodoDestino=formulario.querySelector("input[name='"+preguntaName4+"']");//https://developer.mozilla.org/es/docs/Web/API/Document/querySelector

    labelElem.for=preguntaName4;
    labelElem.innerText=textoLabel;

    //colocamos el label dentro del formulario antes del input
    nodoDestino.parentNode.insertBefore(labelElem, nodoDestino);
}

/*
5).Crear una imagen. Preguntará al usuario qué ruta tiene la imagen (atributo src).
*/
function funcionForButtonFive(){
    const preguntaName5=prompt("¿qué ruta tiene la imagen (atributo src)?");//poner una ruta de una img de internet

    const imgElem=document.createElement('img');
    
    imgElem.src=preguntaName5; //Ej: https://source.unsplash.com/1280x720/ 
    
    //colocamos la img dentro del formulario
    formulario.appendChild(imgElem);
}

/*
6).Crear un checkbox. Preguntará al usuario el nombre y el valor (atributos name y value). 
Preguntará también por el texto que lo acompaña.
*/
function funcionForButtonSix(){
    const preguntaName6N=prompt("¿qué nombre (atributo name) para el checkbox?");
    const preguntaName6V=prompt("¿qué valor (atributo value) para el checkbox?");
    const preguntaName6T=prompt("¿qué texto para acompañar el checkbox?");

    const checkboxElem=document.createElement('input');
    const labelDos=document.createElement('label');
    
    checkboxElem.type="checkbox";
    checkboxElem.name=preguntaName6N; 
    checkboxElem.value=preguntaName6V;
    labelDos.innerText=preguntaName6T;

    //colocamos la input del checkbox dentro del formulario y luego el label para poder leer el texto en html
    formulario.appendChild(checkboxElem);

    /*Para que el texto aparezca reflejado en el navegador de html debemos poner un label  
    <label></label><input>  O  <input><label></label> (escojo la segunda opcion)
    https://developer.mozilla.org/es/docs/Web/HTML/Elemento/input/checkbox 
    */
    formulario.appendChild(labelDos);
}

/*
7).Crear un radio. Preguntará al usuario el nombre y el valor (atributos name y value). 
Preguntará también por el texto que lo acompaña.
*/
function funcionForButtonSeven(){
    const preguntaName7=prompt("¿qué nombre (atributo name) para el radio?");
    const preguntaValue7=prompt("¿qué valor (atributo value) para el radio?");
    const preguntaText7=prompt("¿qué texto para acompañar el radio?");

    const radioElem=document.createElement('input');
    const labelTres=document.createElement('label');

    radioElem.type="radio";
    radioElem.name=preguntaName7;
    radioElem.value=preguntaValue7;
    labelTres.innerText=preguntaText7;

    //colocamos la input del radio dentro del formulario y luego el label para poder leer el texto en html
    formulario.appendChild(radioElem);
    formulario.appendChild(labelTres);
}

/*
8).Crear un botón (submit). Preguntará al usuario el nombre y el valor (atributos name y value).
*/
function funcionForButtonEight(){
    const preguntaName8=prompt("¿qué nombre (atributo name) para el boton submit?");
    const preguntaValue8=prompt("¿qué valor (atributo value) para el boton submit?");

    const botoncito=document.createElement('input');

    botoncito.type="submit";
    botoncito.name=preguntaName8;
    botoncito.value=preguntaValue8;

    //colocamos el submit dentro del formulario
    formulario.appendChild(botoncito);
}


//Llamamos las funciones al final
document.body.onload=createButtons;