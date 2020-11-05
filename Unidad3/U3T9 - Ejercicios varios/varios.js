/*
U3T9 - Ejercicios varios
1. Partiendo del siguiente array [4,0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5,1], identifique las posiciones ocupadas 
por el valor 3 sin necesidad de recorrer todos los elementos.

2. Partiendo del siguiente array [4,0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5,1] ordene sus valores de tal forma que ocupen 
las primeras posiciones los elementos pares.

3. Optimizar el código de la función bonoloto de la teoría para que no sea posible la aparición de números repetidos 
en la combinación facilitada.

4. Calcula el número más alto del siguiente array identificado por la variable valores [232,56,33,876,32,985,729,36,184]

5. Crea el objeto Date con su fecha de nacimiento. Proporcione dicha fecha en milisegundos al constructor del objeto Date.

6. Calcula los milisegundos hasta su próximo cumpleaños y muéstrelos por consola.

7. Calcula el tiempo que transcurre desde que se carga el documento hasta el usuario pulse un botón.

8. Crea un objeto Date con la fecha actual y asígnale mediante el método setHours el valor 26. ¿Qué ocurre? ¿Y si asignasetMinutes(65)?

9. Crea un objeto Date con la fecha 20 de Febrero de 2018 y asignalé el día del mes 35 a dicha fecha.
*/

/**Ej1. */
function posElement(elemento){
    let array= [4,0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5,1];
    //Recorriendo todos los elementos
    for(let i=0;i<array.length;i++){
        if (array[i] == elemento){
            console.log("Posiciones: "+i);
        }
    }
}
//posElement(3);

/**Ej2 */
function paresFirst(){
    let parArray=[],imparArray=[];
    let pares=0,impares=0;
    let array=[4,0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5,1];
    for(let i=0;i<array.length;i++){
        if (array[i]%2 == 0){
            parArray[pares++] = array[i];
        }else{
            imparArray[impares++] = array[i];
        }
    }
    console.log(parArray);
}
paresFirst()

