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

const palo={
    1:"Oros",
    2:"Copas",
    3:"Espadas",
    4:"Bastos"
}
const valor={
    1: "As",
    2: "Dos",
    3: "Tres",
    4: "Cuatro",
    5: "Cinco",
    6: "Seis",
    7: "Siete",
    8: "Sota",
    9: "Caballo",
    10:"Rey"
}

class Carta{
    //******atributos*******
     palo="";
     valor="";

    //******Constructor******:
    constructor(palo, valor) { 
        if (palo >= 1 && palo <= 4 && valor >= 1 && valor <= 10) {
            this.palo = palo;
            this.valor = valor;
        } else {
            this.palo = null;
            this.valor = null;
        }
    }

    //********metodos:******

    // //GETTER Y SETTER: lo hago manualmente
    // setPalo=function(newPalo){
    //     this.palo=newPalo;        
    // }
    // setValor=function(newValor){
    //     this.valor=newValor;
    // }
    // getPalo=function(){
    //     return this.palo;
    // }
    // getValor=function(){
    //     return this.valor;
    // }
    /**
     * Recibe un número de palo y un valor para la carta para, con ellos, modificar la carta.
     * Ante datos incorrectos no cambia nada en la carta.
     */
    darValor=function(palo,valor){
        if (palo >= 1 && palo <= 4 && valor >= 1 && valor <= 10) {
            this.palo = palo;
            this.valor = valor;
        }
    }

    /**
     * Método habitual (y estándar) para devolver en forma de texto entendible el valor de la carta. Por ejemplo: As de Oros.
     */
    toString=function(){
        /*let resPalo="";
        let resValor="";
        switch(this.palo){
            case 1:
                resPalo = " de Oros"
                break;
            case 2:
                resPalo = " de Copas"
                break;
            case 3:
                resPalo = " de Espadas"
                break;
            case 4:
                resPalo = " de Bastos"
                break;
        }

        switch (this.valor) {
            case 1:
                resValor = "As"
                break;
            case 2:
                resValor = "Dos"
                break;
            case 3:
                resValor = "Tres"
                break;
            case 4:
                resValor = "Cuatro"
                break;
            case 5:
                resValor = "Cinco"
                break;
            case 6:
                resValor = "Seis"
                break;
            case 7:
                resValor = "Siete"
                break;
            case 8:
                resValor = "Sota"
                break;
            case 9:
                resValor = "Caballo"
                break;
            case 10:
                resValor = "Rey"
                break;

        }

        const resFinal= resValor+resPalo
        return resFinal;*/

        return valor[this.valor]+" de "+palo[this.palo];
    }

}

class Baraja{
    //Atributos
    //La baraja la forman 40 cartas. Para ello tendrá la propiedad cartas que será un array de 40 cartas.
    cartas = new Array(40);//tamaño 40

    /*CONSTRUCTOR
    Al construir la Baraja se rellenan las cartas en el siguiente orden: por palos y cada palo con
    las cartas del 1 al 10. No se podrá acceder directamente al array fuera de la función constructura.
    */

    constructor(){
        for(let i=1;i<=Object.keys(palo).length;i++){
            for(let j=1;j<=Object.keys(valor).length;j++){
                const carta=new Carta(i,j); //crea 40 cartas en orden
                this.cartas[((i*10+j)-11)] = carta; //metemos la carta en la baraja en la posicion
            }
        }
    };

    getCartas=()=>{
        return this.cartas;
    };

    setCartas=(cartas)=>{
        this.cartas=cartas;
    };

    barajar=()=>{
        this.cartas=this.cartas.sort(() => Math.random() - 0.5);
    };

    toString(){
        let res="";
        for(let carta of this.cartas){
            res+=carta.toString()+"<br>";
        }
        return res;
    }

}

let carta1= new Carta(1,2);
// console.log(carta1);
let baraja1=new Baraja();
// console.log(baraja1);
// console.log(baraja1.toString());
document.getElementById("baraja").innerHTML="Baraja ordenada: <br>"+baraja1.toString();
baraja1.barajar();
document.getElementById("barajar").innerHTML="Baraja desordenada: <br>"+baraja1.toString();

