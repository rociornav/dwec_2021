//Rocio del Real 30/09/20 U2 T4 COMPARACION ADICIONAL

/*
Evalúe las siguientes expresiones y anote el resultado de las mismas:
null == undefined;
"NaN" == NaN;
5 == NaN;
NaN == NaN;
NaN != NaN;
false == 0;
true == 1;
true == 2;
undefined == 0;
null == 0;
"5" == 5;
*/


/*

Resultado: estrue

*undefined*: es un tipo de dato y una variable global que puede contener un valor. No es una palabra reservada de js y esto permite
que podamos definir una variable con el nombre 'undefined'.

En la expresión 1 da el valor como 'no definido'.
Un error típico que puede dar la variable undefined es compararla con la variable de typeof--> no tiene sentido porque
typeof siempre devuelve cadena. Si haces un typeof de algo que no está definido no se va a ejecutar.


*null*: null es un literal definido, no una variable global. Es una palabra reservada y tipo objeto que puede tener la instanciación 
del tipo que sea de acuerdo al valor que se le aplique. 

En la expresión 1 es un literal de tipo indefinido al contener de valor undefined.

OJO: esta expresion1 me resulta liosa de entender todavía.

*/
var expresion1 = null == undefined;
alert ("La operación null == undefined es" + expresion1);

/*
Rdo: esfalse.
NaN = Special case 'Not a Number': es un valor de tipo numérico., no se puede operar con él, siempre devuelve NaN.
*/
var expresion2 = "NaN" == NaN;
alert ('La operación "NaN" == NaN es' + expresion2);

/*
Rdo: esfalse.
*/
var expresion3 = 5 == NaN;
alert ("La operación 5 == NaN es" + expresion3);

/*
Rdo: esfalse.
*/
var expresion4 = NaN == NaN;
alert ("La operación NaN == NaN es" + expresion4);

/*
Rdo: estrue.
*/
var expresion5 = NaN != NaN;
alert ("La operación NaN != NaN es" + expresion5);

/*
Rdo: estrue.
*/
var expresion6 = false == 0;
alert ("La operación false == 0 es" + expresion6);

/*
Rdo: estrue.
*/
var expresion7 = true == 1;
alert ("La operación true == 1 es" + expresion7);

/*
Rdo: esfalse.
*/
var expresion8 = true == 2;
alert ("La operación true == 2 es" + expresion8);

/*
Resultado: esfalse

Undefined es además de un tipo de dato, una variable global.
No es una palabra reservada de js y esto permite que podamos definir una variable con el nombre 'undefined': OJO-> no es recomendable.
Esta variable undefined está iniciada con valor cero, se puede hacer pero recordamos que NO es recomendable.
*/
var expresion9 = undefined == 0;
alert ("La operación undefined == 0 es" + expresion9);


/*
Resultado: esfalse

Variable null iniciada a 0.
*/
var expresion10 = null == 0;
alert ("La operación null == 0 es" + expresion10);

/*
Rdo=estrue, al ser de tipo de igualdad débil, iguala el contenido de la cadena con el valor numérico 5 y al ser iguales
devuelve true, si fuese triple igualdad o estricta, daría false.
*/
var expresion11 = "5" == 5;
alert ('La operación "5" == 5 es' + expresion11);
