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
    {text: 'Botón uno', funcion: () => funcionForButton(1)},
    {text: 'Botón dos', funcion: () => funcionForButton(2)}, //()=>{alert('Holaaaaaa, soy boton anonimo')}  funcion anonima en caso de usarse una sola vez en un solo sitio
    {text: 'Botón tres', funcion: () => funcionForButton(3)},
    {text: 'Botón cuatro', funcion: () => funcionForButton(4)},
    {text: 'Botón cinco', funcion: () => funcionForButton(5)},
    {text: 'Botón seis', funcion: () => funcionForButton(6)},
    {text: 'Botón siete', funcion: () => funcionForButton(7)},
    {text: 'Botón ocho', funcion: () => funcionForButton(8)}
];

const functionsData={
    1: {
        prompts: {
            inputName: '¿qué nombre (atributo name)tiene el input?'
        },
        elements: {
            'input': {
                type: 'text',
                name: '@inputName@'
            }
        }
    },
    2: {
        prompts: {
            inputName: '¿qué nombre (atributo name)tiene el input?'
        },
        elements: {
            'input': {
                type: 'password',
                name: '@inputName@'
            }
        }
    },
    3: {
        prompts: {
            inputName: '¿qué nombre (atributo name)tiene el input?'
        },
        elements: {
            'textarea': {
                name: '@inputName@',
                rows: '5',
                cols: '40'
            }
        }
    },
    4: {
        prompts: {
            inputForName: '¿a qué input va referido este label que hemos creado?',
            labelText: 'Introduzca el texto del label:'
        },
        elements: {
            'label': {
                for: '@inputForName@',
                innerText: '@labelText@'
            }
        },
        insertBefore: {
            'label': "input[name='@inputForName@']"
        }
    },
    5: {
        prompts: {
            rutaImg: '¿qué ruta tiene la imagen (atributo src)?'
        },
        elements: {
            'img': {
                src: '@rutaImg@'
            }
        }
    },
    6: {
        prompts: {
            checkboxName: '¿qué nombre (atributo name) para el checkbox?',
            checkboxValue: '¿qué valor (atributo value) para el checkbox?',
            labelText: '¿qué texto para acompañar el checkbox?'
        },
        elements: {
            'label': {
                innerText: '@labelText@'
            },
            'input': {
                type: 'checkbox',
                name: '@checkboxName@',
                value: '@checkboxValue@'
            }
        }
    },
    7: {
        prompts: {
            radioName: '¿qué nombre (atributo name) para el radio?',
            radioValue: '¿qué valor (atributo value) para el radio?',
            labelText: '¿qué texto para acompañar el radio?'
        },
        elements: {
            'label': {
                innerText: '@labelText@'
            },
            'input': {
                type: 'radio',
                name: '@radioName@',
                value: '@radioValue@'
            }
        }
    },
    8: {
        prompts: {
            submitName: '¿qué nombre (atributo name) para el boton submit?',
            submitValue: '¿qué valor (atributo value) para el boton submit?'
        },
        elements: {
            'input': {
                type: 'submit',
                name: '@submitName@',
                value: '@submitValue@'
            }
        }
    }
};

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

// Funcion que unifica el comportamiento de los botones
function funcionForButton(boton){
    const funcData = functionsData[boton];

    let valuesPrompt = {};
    Object.keys(funcData.prompts).map((keyPregunta, index) => {
        const value = prompt(funcData.prompts[keyPregunta]);
        valuesPrompt[keyPregunta] = value;
    });

    for (element in funcData.elements){
        
        const theElement=document.createElement(element);

        Object.keys(funcData.elements[element]).map((atributo, index) => {
            const valueAttrArr = funcData.elements[element][atributo].split("@");
            theElement[atributo] = 
                valueAttrArr.length == 3 && 
                valueAttrArr[0] == "" && 
                valueAttrArr[2] == "" 
            ? valuesPrompt[valueAttrArr[1]] : funcData.elements[element][atributo];
        });
        
        if (funcData.insertBefore && funcData.insertBefore[element]){
            let query = funcData.insertBefore[element];
            const queryArr = query.split("@");
            query = queryArr[0] + valuesPrompt[queryArr[1]] + queryArr[2];
            const nodoDestino=formulario.querySelector(queryArr.length == 3 ? query : funcData.insertBefore[element]);//https://developer.mozilla.org/es/docs/Web/API/Document/querySelector
            //colocamos el label dentro del formulario antes del input
            nodoDestino.parentNode.insertBefore(theElement, nodoDestino);    
        } else {
            //colocamos el input dentro del formulario
            formulario.appendChild(theElement);
        }
    }

    //theElement.setAttribute("type","text");
    // if (funcData.attributes.name == "@prompt@"){
    //     theElement.name = valuePrompt;
    // } else {
    //     theElement.name = funcData.attributes.name;
    // }
    // if (boton == 1){
    //     theElement.type = funcData.attributes.type == "@prompt@" ? valuePrompt : funcData.attributes.type;
    //     theElement.name = funcData.attributes.name == "@prompt@" ? valuePrompt : funcData.attributes.name;    
    // } else if (boton == 2){
    //     theElement.type = funcData.attributes.type == "@prompt@" ? valuePrompt : funcData.attributes.type;
    //     theElement.name = funcData.attributes.name == "@prompt@" ? valuePrompt : funcData.attributes.name;    
    // }

}


// Funcion Botita
function botito(nombrePeshiosho){
    let str1 = "re";
    str1 += "s";
    str1 = ", e"+str1;

    let str2 = "dund-dcie";
    const str2arr = str2.split("d");
    str2 = str2arr.join('');
    str2 = str2.replace(/-/, " ");
    str2+="lo"

    let num3 = "10871087101711071117032";
    str3arr = num3.split("7");
    let str3 = "";
    str3arr.map((asciiCode) => { str3+=String.fromCharCode(asciiCode); });
    str3+="de"
    str3 = str3.replace(/0/, " ");

    const lang = "es";
    let str4 = lang+"tre-as";
    str4 = str4.replace(/-/, "ll");

    return nombrePeshiosho+str1+" "+str2+" "+str3+" "+str4
}


//Llamamos las funciones al final
document.body.onload=createButtons;