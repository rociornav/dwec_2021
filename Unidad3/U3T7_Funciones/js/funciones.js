
/*

Rocio del Real 28/10/20

U3T7 - Funciones
Crea un archivo funciones.js en el que implementes las funciones  siguientes (busca la fórmula en Internet):
- Imc (Índice de masa corporal)

- Fcm (Frecuencia cardíaca máxima)

Crea un html donde incluyas el archivo anterior y dos enlaces. Cada uno  (mediante el método onClick) ejecutará una función. 
Deberás tener 3 inputs donde introducir los datos necesarios para las funciones.
*/


/*
El cálculo del IMC
Con el sistema métrico, la fórmula para el IMC es el peso en kilogramos dividido por la estatura en metros cuadrados. 
Debido a que la estatura por lo general se mide en centímetros, divida la estatura en centímetros por 100 para obtener 
la estatura en metros.

IMC= (Peso en kg/(estatura en m)²)= 53/1.67²
*/


//IMC --> https://www.myprotein.es/calculadora-bmi.list?gclsrc=aw.ds&thg_ppc_campaign=71700000067958284&product_id=&gclid=CjwKCAjw8-78BRA0EiwAFUw8LNjt2M41yxuOZW4RBcsTKk7IqY1jTocsihvZikySnzCupHk6KSxqEhoChpgQAvD_BwE&gclsrc=aw.ds
function calcularIMC() {
    let peso=prompt("Introduce su peso en kg: ");
    let estatura=prompt("Introduce su estatura en metros (Ej: 1.85): ");
    let res=peso/(Math.pow(estatura,2));

    if(res<18.5){
      alert("Peso insuficiente al ser menor de 18.5, valor-->"+res);
    }else if(res>=18.5 || res<=24.9){
      alert("Peso saludable al estar en el rango 18.5 a 24.9. Valor-->"+res);
    }else{
      alert("Sobrepeso al tener más de 24.9. Valor-->"+res);
    } 
  }
//Para probarlo: calcularIMC();



//FCM--> https://www.vitonica.com/entrenamiento/cual-es-la-formula-mas-precisa-para-calcular-nuestra-frecuencia-cardiaca-maxima-o-fcm#:~:text=La%20f%C3%B3rmula%20m%C3%A1s%20utilizada%2C%20al,0%2C73%20*%20edad).

function calcularFcm(){
  let edad = prompt("¿Cuántos años tiene?:");
  let res = (208.75 - (0.73 * edad));
  alert("FCM =" + res);

}
//calcularFcm();