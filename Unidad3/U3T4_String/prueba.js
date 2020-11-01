//ES UNA PRUEBA DE LA FUNCION PARA COMPROBAR SI TIENE CARACTERES ESPECIALES
function tieneCaracter(password1){
   
//check: caracteres especiales, esta parte me funciona por separado 
let caracteres="-_@#$%&";
let hayEspecial=false;
for (const caracter of caracteres) {
     if(password1.includes(caracter)){
         //console.log("contiene un caracter especial al menos.")
         hayEspecial = true;
     }
 }
 return hayEspecial;

}
//tieneCaracter("ho&la");
console.log(tieneCaracter("ho&la")); //da true

console.log(tieneCaracter("hola")); //da false