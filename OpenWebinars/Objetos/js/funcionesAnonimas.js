
/**FUNCION ANONIMA 1. */
let producto=function(a,b){
    return a*b;
}
//ejecutamos una funcion anonima asi:
let res=producto(1,4);
// console.log(res);

/**FUNCION ANONIMA 2. USANDO CONSTRUCTOR */
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(2, 3);
// console.log(x);

/**FUNCION ANONIMA 3. Self-Invoking Functions*/
let saludo="Hola Ro";

(function (a) {
    console.log(a);  // I will invoke myself
  })(saludo);

 /* TEORIA DE LA ANONIMA 3.
  (function () {
    var x = "Hello!!";  // I will invoke myself
  })(); */

  hoy = new Date();
  console.log(hoy)