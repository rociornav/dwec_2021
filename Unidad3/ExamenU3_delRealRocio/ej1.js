/*Rocio del Real

Ejercicio 1
Crea un tipo de objetos que sirvan para representar una Carta. Estos objetos tendrán dos propiedades:
-    palo. Que será un número de 1 a 4 (donde 1 significa Oros, 2 Copas, 3 Espadas y 4 bastos)
-    valor. Un número del 1 al 10 (8 = sota, 9 = caballo, 10 = rey).

Los objetos de este tipo se construyen indicando el palo y el valor. Si hay fallos en los datos 
se devuelve un objeto nulo en la creación.

Las cartas tendrán estos métodos:
-    darValor. Que recibe un número de palo y un valor para la carta para, con ellos, modificar 
la carta. Ante datos incorrectos no cambia nada en la carta.
-    toString. Método habitual (y estándar) para devoler en forma de texto entendible el valor de
 la carta. Por ejemplo: As de Oros.

Además, habrá otro tipo de objeto: Baraja. La idea es que represente ua baraja de cartas españolas. 
Tendrá los siguientes detalles:
-    La baraja la forman 40 cartas. Para ello tendrá la propiedad cartas que será un array de 40 
cartas.
-    Al construir la Baraja se rellenan las cartas en el siguiente orden: por palos y cada palo con 
las cartas del 1 al 10. No se podrá acceder directamente al array fuera de la función constructura.
-    El método barajar permite barajar las cartas. Es decir, desodernarlas de forma aleatoria.
-    El método toString permite obtener la baraja en forma de texto para saber cómo están ordenadas 
las cartas.

Simula la construcción de una baraja, muéstrala en un elemento HTML (p o div, como quieras), y luego 
muéstrala barajada en otro elemento HTML.

*/

function Carta(){
    //atributos
    this.palo="";
    this.valor="";

    //Constructor:
    this.constructor = function (palo,valor) {
        this.palo = palo;
        this.valor = valor;
    }
    //metodos:
    

}